#!/usr/bin/env python3
"""
Fix s1-s6 signal names in finalEliteMEQBank.ts.

Rules:
  - 5-12 words
  - Natural clinical language
  - Case-specific (via clue + s2 name + title)
  - No stem quotes, no "Accepting... as grounds to proceed"

Changes:
  - s1: all 110 rewritten (rule-based algorithm using clue + s2 name)
  - s2/s3/s4: expand short (< 5 word) names
  - s5 FINAL-071: trim long name
  - s6: no changes
"""
import re

FILEPATH = 'artifacts/meq-prep/src/lib/questions/finalEliteMEQBank.ts'

# ── s1 name generator ────────────────────────────────────────────────────────

def gen_s1(clue: str, s2: str, title: str, topic: str) -> str:
    cl = clue.lower()
    s2l = s2.lower()
    tl = title.lower()

    # ── Denial shortcuts ──
    if any(x in cl for x in ['denies suicidal', 'denies suicidality', 'not stupid enough',
                               'denies wanting to hurt', 'denies intent', 'cannot push it',
                               'denies thoughts', 'denies harm']):
        if 'firearm' in s2l or 'gun' in s2l:
            return "Denial of ideation prevents engagement with lethal means safety"
        if 'concealed' in s2l or 'high-context' in s2l or 'lethal' in s2l:
            return "Strategic denial of suicidal intent conceals lethal preparatory behaviour"
        if 'suicid' in s2l and 'firearm' not in s2l:
            return "Verbal denial of suicidal ideation accepted before independent risk formulation"
        if 'stalking' in s2l or 'erotoman' in s2l:
            return "Denial of intent invoked to avoid duty-to-warn protective disclosure"
        if 'violen' in s2l:
            return "Verbal denial of violent intent accepted before independent risk formulation"
        return "Verbal denial accepted as sufficient before completing clinical risk formulation"

    # ── Calm / settled shortcuts ──
    if any(x in cl for x in ['calm now', 'calmer now', 'calmer', 'settled', 'has calmed',
                               'has settled']):
        if 'violen' in s2l or 'coerciv' in s2l or 'domestic' in s2l:
            return "Post-incident calm accepted before formulating coercive violence risk"
        if 'suicid' in s2l:
            return "Surface calm after crisis masks unresolved suicidal intent"
        if 'postpartum mania' in s2l or 'manic' in s2l or 'mania' in s2l:
            return "Apparent post-episode calm justifies discharge before manic risk assessment"
        if 'psychos' in s2l:
            return "Post-episode settled behaviour accepted in lieu of psychotic risk formulation"
        if 'withdraw' in s2l or 'alcohol' in s2l:
            return "Apparent calm during withdrawal masks progressive medical deterioration"
        return "Surface calm after incident accepted as evidence of clinical safety"

    # ── Energetic / wellness / surface normal shortcuts ──
    if any(x in cl for x in ['energetic', 'not unwell', 'looks physically fine', 'she is fine',
                               'does not need', 'just negative and sedated']):
        if 'postpartum mania' in s2l or 'manic' in s2l:
            return "Energetic presentation reattributed as wellness rather than manic episode"
        if 'depressi' in s2l or 'suicid' in s2l:
            return "Surface functioning normalised before formulating depression and suicidal risk"
        if 'antenatal' in s2l:
            return "Family reassurance accepted before formulating antenatal depression risk"
        if 'clozapine' in s2l or 'toxicity' in s2l:
            return "Negative symptom label accepted before formulating clozapine toxicity"
        if 'tbi' in s2l or 'neurocog' in s2l:
            return "Physical appearance accepted before formulating neurocognitive impairment risk"
        return "Normal surface presentation accepted before formulating clinical risk"

    # ── Coercive medication / restraint shortcuts ──
    if any(x in cl for x in ['sedat', 'just sedate', 'can we inject', 'depot him',
                               'chart haloperidol', 'chart risperidone', 'approve regular quetiapine',
                               'chart it']):
        if 'delirium' in s2l or 'postoperative' in s2l:
            return "Medication order without formulation used to manage postoperative delirium"
        if 'dialysis' in s2l or 'life-saving' in s2l:
            return "Medical urgency drives coercive sedation before legal and capacity review"
        if 'ward settles' in cl or 'settles' in cl:
            return "Ward disruption drives chemical restraint before establishing legal authority"
        if 'bpsd' in s2l or 'staffing' in cl:
            return "Staffing shortage drives chemical restraint before formulating BPSD cause"
        if 'rehab' in cl:
            return "Rehabilitation pressure drives antipsychotic order before delirium formulation"
        if 'hiv' in s2l or 'antiviral' in cl:
            return "Depot and antiviral restart ordered before capacity and consent review"
        if 'psychos' in s2l or 'refusal' in s2l:
            return "Coercive sedation ordered before establishing legal authority and capacity"
        if 'elder' in s2l or 'paranoia' in s2l:
            return "Dementia label drives sedation before assessing possible elder abuse"
        return "Coercive medication ordered without legal basis or capacity determination"

    # ── Bed / operational pressure shortcuts ──
    if any(x in cl for x in ['need the bed', 'i need the bed', 'need this bed', 'need the cubicle']):
        if 'self-harm' in s2l or 'suicid' in s2l or 'personality' in s2l or 'done this before' in cl:
            return "Bed pressure and diagnostic label drive discharge before risk formulation"
        return "Operational bed pressure drives discharge before clinical risk formulation"

    # ── Resource scarcity / no bed shortcuts ──
    if any(x in cl for x in ['no bed', 'no psych bed', 'no mother-baby bed',
                               'phone follow-up is all we have']):
        if 'postpartum' in s2l or 'perinatal' in s2l or 'infant' in s2l:
            return "Resource scarcity accepted as grounds to defer urgent perinatal admission"
        if 'overdose' in s2l or 'suicid' in s2l or 'minimising' in s2l:
            return "Absence of inpatient beds justifies deferral of high-risk assessment"
        return "Resource constraint offered as clinical justification for inadequate care"

    # ── Safety contract shortcuts ──
    if any(x in cl for x in ['contract for safety', 'contracts for safety']):
        return "Safety contract substituted for clinical risk formulation and containment"

    # ── Autonomy / right to refuse / articulacy shortcuts ──
    if any(x in cl for x in ['right to make bad', 'right to refuse', 'can refuse', 'has a right',
                               'she is articulate', 'articulate', 'is intelligent', 'competent']):
        if 'adolescen' in s2l or 'minor' in s2l:
            return "Adolescent articulacy accepted as proxy for valid treatment refusal"
        if 'dementia' in s2l or 'refusal of safe' in s2l:
            return "Apparent autonomy accepted without capacity determination in dementia patient"
        if 'anorex' in s2l or 'eating' in s2l:
            return "Adult autonomy invoked to discharge despite anorexic cognitive impairment"
        if 'mania' in s2l and 'threat' in s2l:
            return "Articulate presentation accepted before formulating targeted manic threat"
        if 'values' in s2l or 'refusal' in s2l:
            return "Apparent decision-making capacity accepted without formal assessment"
        return "Stated autonomy accepted without formal capacity and risk determination"

    # ── Wish to go home / discharge request shortcuts ──
    if any(x in cl for x in ['go home', 'wants to go home', 'can leave', 'wants to leave',
                               'can he leave', 'can she leave', 'let him leave']):
        if 'violen' in s2l or 'coerciv' in s2l or 'domestic' in s2l:
            return "Wish to return home overrides formulation of ongoing violence risk"
        if 'alcohol' in s2l or 'dependence' in s2l:
            return "Capacitous autonomy invoked before formulating alcohol dependence and safety"
        if 'treatment refusal' in s2l or 'homelessness' in s2l:
            return "Service exit accepted before formulating homelessness and treatment refusal risk"
        return "Patient request to leave accepted before completing risk formulation"

    # ── Discharge based on investigation result shortcuts ──
    if any(x in cl for x in ['nothing neurological', 'discharge her', 'nothing medically wrong']):
        if 'functional' in s2l:
            return "Negative neurology used to justify discharge before validating functional disorder"
        return "Negative test result accepted as grounds to discharge before clinical formulation"

    # ── Adult status / can discharge shortcuts ──
    if any(x in cl for x in ['she is adult and refusing', 'adult and refusing', 'is an adult']):
        if 'anorex' in s2l or 'eating' in s2l:
            return "Adult status invoked to justify discharge despite anorexic cognitive impairment"
        return "Adult status invoked to discharge before formulating clinical risk"

    # ── Tomorrow / defer shortcuts ──
    if any(x in cl for x in ['see him tomorrow', 'can see him tomorrow', 'see them tomorrow',
                               'see her tomorrow', 'until morning', 'cannot land until morning',
                               'transfer cannot happen until']):
        if 'psychos' in s2l and ('violen' in s2l or 'highway' in s2l):
            return "Operational delay accepted before formulating acute psychosis and public risk"
        if 'postpartum' in s2l or 'infant' in s2l:
            return "Weather delay accepted before formulating postpartum psychosis and infant risk"
        if 'psychos' in s2l and 'weapon' in s2l:
            return "Deferral to specialist team accepted before formulating acute violence risk"
        return "Temporal deferral accepted before completing urgent clinical risk formulation"

    # ── Sleep it off shortcuts ──
    if any(x in cl for x in ['sleep it off', 'sober up', 'he can sleep']):
        if 'violen' in s2l or 'family violen' in s2l:
            return "Intoxication framing defers formulation of family violence and head injury"
        return "Intoxication label defers clinical assessment to custody or passage of time"

    # ── Minimisation / normalisation shortcuts ──
    if any(x in cl for x in ['just weed', 'just relationship', 'it is just weed', 'bad friends',
                               'internet influence', 'gender nonsense', 'just cannabis',
                               'handle it inside community']):
        if 'psychos' in s2l:
            return "Substance normalisation defers urgent first-episode psychosis formulation"
        if 'suicid' in s2l or 'trauma' in s2l:
            return "Behavioural attribution prevents formulation of suicide and trauma risk"
        if 'gender' in s2l or 'eating' in s2l:
            return "Identity attribution replaces formulation of eating disorder clinical risk"
        if 'violen' in s2l or 'family violen' in s2l:
            return "Community containment directive displaces clinical and legal risk formulation"
        return "Normalising attribution replaces clinical formulation of presenting risk"

    # ── Laziness / discipline / consequences shortcuts ──
    if any(x in cl for x in ['he is lazy', 'she is lazy', 'just lazy', 'needs discipline',
                               'needs to stop complaining', 'increase the stimulant']):
        if 'ptsd' in s2l or 'school refusal' in s2l:
            return "Laziness attribution prevents recognition of PTSD-driven school refusal"
        if 'postnatal' in s2l or 'suicid' in s2l:
            return "Laziness attribution replaces formulation of postnatal suicide and infant risk"
        if 'trauma' in s2l or 'adhd' in s2l:
            return "School management pressure drives medication increase before trauma formulation"
        return "Behavioural attribution replaces clinical formulation of presenting disorder"

    # ── Punitive / consequences shortcuts ──
    if any(x in cl for x in ['needs consequences', 'assaulted staff, so',
                               'giving notice', 'too hard']):
        if 'autis' in s2l:
            return "Punitive framework applied before formulating autistic sensory distress"
        if 'self-harm' in s2l or 'attachment' in s2l or 'suicid' in s2l:
            return "Placement withdrawal issued before formulating attachment-driven self-harm risk"
        return "Punitive or management response replaces clinical risk formulation"

    # ── Instrument / manipulation shortcuts ──
    if any(x in cl for x in ['using self-harm to avoid', 'she is manipulating',
                               'he is using', 'is manipulating']):
        if 'custod' in s2l or 'prison' in s2l or 'custody' in s2l:
            return "Instrumental self-harm attribution defers custodial suicide risk assessment"
        if 'opioid' in s2l or 'pain' in s2l or 'functional' in s2l:
            return "Manipulation label replaces formulation of trauma and opioid dependence"
        return "Instrumental attribution of behaviour prevents clinical risk formulation"

    # ── Family / faith directive shortcuts ──
    if any(x in cl for x in ['our faith says', 'faith says', 'taking her home',
                               'taking him home']):
        if 'icu' in tl or 'fluctuating' in s2l:
            return "Family faith directive overrides fluctuating patient consent for withdrawal"
        if 'suicid' in s2l or 'gender' in s2l:
            return "Family faith directive blocks formulation of suicidal and identity risk"
        return "Family directive accepted before completing capacity and clinical formulation"

    # ── Governance suppression shortcuts ──
    if any(x in cl for x in ['quietly', 'keep this contained', 'handle it informally',
                               'delete the', 'avoid admitting', 'do not say sorry',
                               'cannot lose another', 'handle it quietly']):
        if 'impair' in s2l or 'colleague' in s2l:
            return "Institutional containment of impaired colleague conceals patient safety risk"
        if 'privacy' in s2l or 'breach' in s2l:
            return "Informal handling of privacy breach conceals regulatory and governance risk"
        if 'boundary' in s2l:
            return "Quiet transfer prevents formal governance review of boundary violation"
        if 'open disclos' in s2l or 'complaint' in s2l:
            return "Legal caution substitutes for open disclosure after clinical governance failure"
        return "Governance suppression prevents appropriate safety and accountability response"

    # ── Evict / transfer / breach shortcuts ──
    if any(x in cl for x in ['evict him', 'breach him', 'transfer him before', 'transfer her before',
                               'remove conditions', 'just transfer']):
        if 'arson' in s2l or 'fire' in s2l:
            return "Eviction invoked before formulating psychosis-linked arson and public risk"
        if 'sexu' in s2l or 'disinhibit' in s2l:
            return "Transfer order before formulating neurocognitive sexual disinhibition safely"
        if 'forensic' in s2l or 'recovery' in s2l:
            return "Premature condition removal before formulating forensic relapse risk"
        if 'cto' in s2l or 'cto' in cl:
            return "CTO breach pursued before formulating cultural obligations and engagement"
        return "Coercive legal mechanism invoked before completing clinical risk formulation"

    # ── Capacity override / make her/him shortcuts ──
    if any(x in cl for x in ['can we override', 'make her have', 'make him have',
                               'cannot be competent to']):
        if 'reproductive' in s2l or 'termination' in s2l:
            return "Capacity determination sought to override autonomous reproductive decision"
        if 'chemotherapy' in s2l or 'cancer' in s2l:
            return "Medical urgency invoked to override depression-impaired cancer refusal"
        if 'surgery' in s2l or 'values' in s2l:
            return "Depression diagnosis invoked to override values-based surgical refusal"
        return "Capacity override sought before establishing lawful basis for treatment"

    # ── Financial / documentation pressure shortcuts ──
    if any(x in cl for x in ['write that she lacks capacity', 'write that he lacks',
                               'just witness it', 'she agreed yesterday']):
        if 'financial' in s2l or 'delirium' in s2l:
            return "Prior agreement or family benefit sought before reassessing capacity in delirium"
        return "Documentation request accepted without establishing clinical or legal grounds"

    # ── Prison / custody minimisation shortcuts ──
    if any(x in cl for x in ['put him in cells', 'put her in cells', 'cells']):
        if 'psychos' in s2l and ('highway' in s2l or 'remote' in s2l or 'public' in s2l):
            return "Custodial containment accepted before formulating acute psychosis and public risk"
        if 'alcohol' in s2l or 'family violen' in s2l:
            return "Custodial deferral accepted before formulating violence and head injury risk"
        return "Custodial holding accepted before completing psychiatric risk formulation"

    # ── Monitoring / compliance shortcuts ──
    if any(x in cl for x in ['increase monitoring until', 'until she complies', 'until he complies',
                               'monitoring until']):
        return "Monitoring and compliance framing displaces engagement with identity ambivalence"

    # ── Depot is easier shortcuts ──
    if any(x in cl for x in ['depot is easier', 'just switch', 'switch to depot']):
        return "Ease of depot delivery overrides informed consent and risk-benefit review"

    # ── Keep here until shortcuts ──
    if any(x in cl for x in ['just keep her here', 'just keep him here', 'keep her here until',
                               'keep him here until', 'keep him until housing']):
        if 'dementia' in s2l or 'capacity' in s2l:
            return "Temporary containment accepted before formulating capacity and placement risk"
        if 'institutionalis' in s2l or 'rehabilit' in s2l:
            return "Indefinite containment pending perfect housing displaces recovery formulation"
        return "Holding without assessment accepted before completing clinical risk formulation"

    # ── Social prescribing shortcuts ──
    if any(x in cl for x in ['social prescribing is safer', 'safer than medication',
                               'not medication', 'social prescribing']):
        return "Social prescribing preference defers formulation of late-life depression risk"

    # ── Close file / not engaging shortcuts ──
    if any(x in cl for x in ['close the case', 'close his file', 'close the file',
                               'not engaging', 'wasted because he will not engage']):
        if 'depend' in s2l or 'boundary' in s2l or 'duty of care' in s2l:
            return "Non-engagement label drives case closure before duty-of-care formulation"
        if 'self-neglect' in s2l or 'capacit' in s2l:
            return "Service withdrawal accepted before formulating capacity and self-neglect risk"
        if 'rehabilit' in s2l or 'recovery' in s2l:
            return "Non-engagement label prevents recovery-oriented rehabilitation formulation"
        return "Non-engagement framing drives case closure before completing risk formulation"

    # ── Seclusion/performance target shortcuts ──
    if any(x in cl for x in ['seclusion numbers', 'our numbers', 'targets']):
        return "Performance target compliance drives seclusion decision before clinical formulation"

    # ── Mandatory reporting avoidance ──
    if any(x in cl for x in ['main admitting doctor', 'keep this contained', 'our main']):
        return "Institutional protection invoked before mandatory reporting of boundary violation"

    # ── Service cannot accept shortcuts ──
    if any(x in cl for x in ['cannot accept', 'cannot accept until', 'not our patient',
                               'we do not provide long-term']):
        if 'transition' in s2l or 'eating' in s2l:
            return "Age boundary invoked before formulating transition and eating disorder risk"
        if 'telehealth' in s2l or 'ptsd' in s2l:
            return "Service boundary invoked before formulating PTSD and family violence risk"
        return "Service boundary invoked before completing clinical risk formulation"

    # ── Euthymic / lithium / relapse shortcuts ──
    if any(x in cl for x in ['last time she stopped', 'last time he stopped', 'euthymic']):
        return "Euthymic presentation accepted before formulating high lithium-withdrawal relapse risk"

    # ── Child protection threat shortcuts ──
    if any(x in cl for x in ['removal plan', 'may need a removal']):
        return "Birth removal threat accepted before addressing trauma relapse and engagement risk"

    # ── Security restraint shortcuts ──
    if any(x in cl for x in ['security hold', 'can security']):
        return "Security restraint ordered without legal basis for neonatal examination authority"

    # ── OCD misread as safeguarding shortcuts ──
    if any(x in cl for x in ['i am worried she may harm', 'worried she may harm']):
        return "Maternal distress about intrusive thoughts triggers safeguarding before OCD formulation"

    # ── Relapse / broke rules shortcuts ──
    if any(x in cl for x in ['broke the rules', 'broken the rules', 'noncompliant']):
        if 'transplant' in s2l or 'alcohol' in s2l:
            return "Relapse breach invoked to decline transplant before clinical review"
        return "Rule breach accepted as grounds for service withdrawal before clinical formulation"

    # ── Driving / occupational clearance shortcuts ──
    if any(x in cl for x in ['cleared by monday', 'cleared to work', 'needs to drive',
                               'we need him cleared']):
        if 'occupational' in s2l or 'driver' in s2l or 'public safety' in s2l:
            return "Occupational clearance pressure overrides psychiatric fitness-to-drive formulation"
        return "External pressure drives premature fitness clearance before clinical formulation"

    # ── Discharge based on historic behaviour ──
    if any(x in cl for x in ['done this before', 'has done this before']):
        return "Repeated presentation label drives premature discharge before acute risk formulation"

    # ── Family supervised discharge shortcuts ──
    if any(x in cl for x in ['with her mother', 'with family', 'family can watch',
                               'supervised by family']):
        return "Family supervision accepted as substitute for clinical risk management"

    # ── Delay will reduce cure shortcuts ──
    if any(x in cl for x in ['delay will reduce cure', 'delay will', 'reducing cure']):
        return "Medical urgency sought to override depression-impaired chemotherapy refusal"

    # ── Opioid reduction shortcuts ──
    if any(x in cl for x in ['reduce methadone', 'should we reduce', 'reduce it to prevent']):
        if 'methadone' in s2l or 'opioid' in s2l:
            return "Opioid stigma drives methadone reduction against evidence-based harm reduction"
        return "Medication reduction pressure driven by stigma rather than clinical formulation"

    # ── Hospital causing harm shortcuts ──
    if any(x in cl for x in ['hospital is making her', 'hospital is causing', 'making her dramatic']):
        return "Family dramatising narrative drives discharge before formulating capacity and risk"

    # ── Complaint threat shortcuts ──
    if any(x in cl for x in ['she will complain', 'he will complain', 'will go to the media',
                               'will complain']):
        if 'ecg' in s2l or 'ect' in tl:
            return "Family media threat defers life-saving ECT for psychotic depression"
        if 'benzodiazepin' in s2l or 'taper' in s2l:
            return "Complaint threat defers clinically necessary benzodiazepine taper"
        return "Complaint or media threat accepted as reason to defer clinical action"

    # ── "Is energetic / not unwell" already handled above ──

    # ── Discharge for staff safety shortcuts ──
    if any(x in cl for x in ['discharge her today for staff safety', 'for staff safety']):
        if 'trauma' in s2l or 'threat' in s2l or 'personality' in s2l:
            return "Staff safety invoked to discharge before formulating trauma-related aggression"
        return "Staff safety invoked to justify discharge before risk formulation"

    # ── Generic discharge her/him shortcuts ──
    if any(x in cl for x in ['discharge him', 'discharge her', 'can we discharge']):
        if 'anorex' in s2l or 'eating' in s2l:
            return "Adult autonomy invoked to discharge despite anorexic cognitive impairment"
        if 'personality' in s2l or 'bpd' in s2l or 'dependency' in s2l:
            return "Service difficulty invoked to discharge before formulating acute clinical risk"
        if 'functional' in s2l:
            return "Medical discharge invoked before validating functional neurological disorder"
        if 'narciss' in s2l or 'counter' in s2l:
            return "Countertransference-driven discharge accepted before formulating suicide risk"
        return "Discharge invoked before completing clinical risk formulation"

    # ── Fallback: use s2 to construct clinical phrase ──
    s2_words = s2.split()
    core = ' '.join(s2_words[:6])
    return f"Operational pressure overrides clinical formulation of {core}"


# ── s2/s3/s4 expansion for short names (< 5 words) ──────────────────────────

def expand_s2(name: str, clue: str, title: str, topic: str) -> str:
    if len(name.split()) >= 5:
        return name
    nl = name.lower(); tl = title.lower()
    if 'school refusal' in nl:
        return name + (' in refugee trauma-exposed young person' if 'refugee' in tl or 'interpreter' in tl
                       else ' in trauma-exposed young person')
    if 'adhd' in nl or 'aggression' in nl:
        return name + (' in Aboriginal young person' if ('aboriginal' in tl or 'indigenous' in tl)
                       else ' misattributed as neurodevelopmental disorder')
    if 'refusal of treatment' in nl or 'refusal of antipsychotic' in nl:
        return name + ' requiring MHA authority and capacity determination'
    if 'ptsd' in nl and 'school' not in nl:
        return name + ' driving risk and functional impairment'
    if 'unborn' in nl or 'foetal' in nl:
        return name + ' from maternal psychiatric illness and treatment refusal'
    if 'newborn' in nl or ('infant' in nl and 'carer' not in nl and 'neglect' not in nl):
        return name + ' from acute parental psychiatric episode'
    if 'mania' in nl or 'manic' in nl:
        return name + ' with infant endangerment and public safety risk'
    if 'capacit' in nl and 'refusal' not in nl:
        return name + ' for life-altering medical treatment decision'
    if 'trauma mimick' in nl or ('trauma' in nl and 'adhd' in nl):
        return name + ' misattributed as neurodevelopmental disorder'
    if 'erotoman' in nl:
        return name + ' with identified victim at immediate foreseeable risk'
    if 'arson' in nl or 'fire' in nl:
        return name + ' requiring MHA containment and public protection'
    if 'psychos' in nl and len(name.split()) < 5:
        return name + ' affecting treatment capacity and clinical safety'
    if 'suicid' in nl and len(name.split()) < 5:
        return name + ' driving high-stakes disposition and containment'
    if 'violen' in nl or 'aggress' in nl:
        return name + ' requiring urgent formulation and risk management'
    if 'depend' in nl or 'opioid' in nl or 'methad' in nl:
        return name + ' in pregnancy requiring evidence-based harm reduction'
    if 'withdraw' in nl:
        return name + ' in medically compromised and vulnerable patient'
    return name + ' as the specific clinical driver of this presentation'


def expand_s3(name: str, clue: str, title: str, topic: str) -> str:
    if len(name.split()) >= 5:
        return name
    nl = name.lower(); tl = title.lower()
    if 'stigma' in nl:
        return "Diagnostic stigma driving unsafe discharge without independent risk formulation"
    if 'safeguard' in nl and any(x in nl for x in ['infant', 'newborn', 'baby', 'child']):
        return name + ' duties arising from parental psychiatric episode'
    if 'safeguard' in nl:
        return name + ' duties for vulnerable dependent in this clinical scenario'
    if 'infant' in nl and 'safeguard' not in nl:
        return name + ' welfare requiring independent legal protection response'
    if 'newborn' in nl and 'safeguard' not in nl:
        return name + ' medical risk requiring lawful treatment authority'
    if 'baby' in nl or 'unborn' in nl or 'foetal' in nl or 'fetal' in nl:
        return name + ' welfare at risk from maternal treatment refusal'
    if 'capacit' in nl:
        return name + ' threshold determining lawfulness of treatment intervention'
    if 'guardian' in nl:
        return name + ' as least restrictive legal pathway for placement decision'
    if 'adjust' in nl and 'reasonable' in nl:
        return name + ' required for neurodivergent student under disability legislation'
    if 'welfare' in nl:
        return name + ' at risk requiring legal protection and intervention'
    if 'public safety' in nl:
        return name + ' duties arising from psychiatric impairment and occupation'
    if 'restraint' in nl:
        return name + ' policy requirements for this vulnerable inpatient presentation'
    if 'custody' in nl or 'police' in nl or 'detention' in nl:
        return name + ' obligations for vulnerable detainee in this case'
    if 'disclosure' in nl or 'consent' in nl:
        return name + ' obligations arising in this perinatal psychiatric context'
    if 'conduct' in nl or 'professional' in nl:
        return name + ' arising from supervision and training governance failure'
    if 'privacy' in nl or 'breach' in nl:
        return name + ' requirements for regulatory notification and patient protection'
    if 'housing' in nl or 'accommod' in nl:
        return name + ' authority required for supported accommodation placement'
    if 'transition' in nl:
        return name + ' obligations for service transfer of high-risk patient'
    if 'least restrictive' in nl:
        return name + ' pathway for this specific clinical and legal scenario'
    if 'mha' in nl or 'threshold' in nl:
        return name + ' criteria and threshold applying in this clinical presentation'
    if 'authority' in nl:
        return name + ' for this specific clinical and legal scenario'
    return name + ' framework applying in this specific clinical scenario'


def expand_s4(name: str, clue: str, title: str, topic: str) -> str:
    if len(name.split()) >= 5:
        return name
    nl = name.lower(); tl = title.lower()
    if 'newborn' in nl:
        return "Newborn safety at immediate risk from parental psychiatric episode"
    if 'infant' in nl and 'neglect' not in nl:
        return "Infant safety at risk from parental psychiatric illness and neglect"
    if 'unborn' in nl or 'foetal' in nl or 'fetal' in nl:
        return "Unborn child welfare at risk from maternal treatment refusal"
    if 'baby' in nl:
        return "Baby safety at immediate risk from acute parental psychiatric crisis"
    if 'child' in nl and 'partner' not in nl:
        return "Child safety at foreseeable risk from parental psychiatric episode"
    if 'partner' in nl and 'child' not in nl:
        return "Intimate partner at immediate risk from perpetrator returning home"
    if 'sibling' in nl:
        return "Siblings at risk from trauma exposure in shared household"
    if 'elderly' in nl or ('older' in nl and 'adult' not in nl):
        return "Elderly dependent at risk from carer psychiatric decompensation"
    if 'inpatient' in nl or ('ward' in nl and 'safety' in nl):
        return "Inpatient safety at risk from undertreated clinical presentation"
    if 'staff' in nl and 'safety' in nl:
        return "Clinical staff safety at risk from undertreated agitation and threat"
    if 'public' in nl or 'passenger' in nl:
        return "Public safety at risk from psychosis-impaired occupational performance"
    if 'victim' in nl:
        return "Identified victim at immediate risk from discharged patient"
    if 'co-resident' in nl or ('resident' in nl and 'safety' in nl):
        return "Vulnerable co-resident at risk from sexual disinhibition without management"
    if 'peer' in nl or 'school' in nl or 'student' in nl:
        return "School peers at risk from untreated psychiatric distress and dysregulation"
    if 'neighbour' in nl:
        return "Neighbouring properties at immediate fire and safety risk"
    if 'carer' in nl and ('burnout' in nl or 'burden' in nl):
        return "Carer at risk from burnout and inadequate family support planning"
    if 'vulnerable' in nl and 'inpatient' not in nl:
        return "Vulnerable patient at foreseeable risk from undertreated clinical condition"
    if 'family' in nl and 'violence' not in nl:
        return "Family members at immediate risk from inadequate clinical risk formulation"
    if 'maternal' in nl or ('safety' in nl and ('perinatal' in topic or 'rural' in topic)):
        return "Maternal and infant safety at risk from inadequate psychiatric formulation"
    return name + ' at foreseeable risk requiring independent safety assessment'


# ── s5 trim ──────────────────────────────────────────────────────────────────

def fix_s5(name: str, qid: str) -> str:
    if len(name.split()) <= 12:
        return name
    # Only FINAL-071 s5 is known to be long; trim to 12 words
    words = name.split()
    return ' '.join(words[:12])


# ── Two-pass processing ───────────────────────────────────────────────────────

with open(FILEPATH, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# ── Pass 1: collect all signal data ──
q_data: dict = {}
cur_q = cur_sig = None
in_ma = False

for line in lines:
    raw = line.rstrip('\n')
    if not in_ma:
        if '"modelAnswer"' in raw and '`' in raw:
            in_ma = True
            if raw.count('`') >= 2: in_ma = False
            continue
    else:
        if '`' in raw: in_ma = False
        continue

    qm = re.search(r'"id":\s*"(FINAL-\d+)"', raw)
    if qm:
        cur_q = qm.group(1)
        q_data.setdefault(cur_q, {'title': '', 'topic': '', 'signals': {}})
        cur_sig = None; continue

    tm = re.search(r'"title":\s*"([^"]+)"', raw)
    if tm and cur_q and not cur_sig: q_data[cur_q]['title'] = tm.group(1)
    topm = re.search(r'"topic":\s*"([^"]+)"', raw)
    if topm and cur_q and not cur_sig: q_data[cur_q]['topic'] = topm.group(1)

    sm = re.search(r'"id":\s*"(s\d+)"', raw)
    if sm and cur_q:
        cur_sig = sm.group(1)
        q_data[cur_q]['signals'].setdefault(cur_sig, {'name': '', 'clue': ''}); continue

    if cur_q and cur_sig:
        nm = re.match(r'\s*"name":\s*"((?:[^"\\]|\\.)*)"', raw)
        if nm and not q_data[cur_q]['signals'][cur_sig]['name']:
            q_data[cur_q]['signals'][cur_sig]['name'] = nm.group(1)
        cm = re.match(r'\s*"clueInStem":\s*"((?:[^"\\]|\\.)*)"', raw)
        if cm: q_data[cur_q]['signals'][cur_sig]['clue'] = cm.group(1)

print(f"Pass 1: {len(q_data)} questions.")

# ── Build new-name map ──
new_names: dict = {}  # {(qid, sid): new_name}

for qid, qd in q_data.items():
    sigs = qd['signals']
    title = qd['title']
    topic = qd['topic']
    s2_name = sigs.get('s2', {}).get('name', '')

    for sid in ('s1', 's2', 's3', 's4', 's5', 's6'):
        sd = sigs.get(sid, {})
        old_name = sd.get('name', '')
        clue = sd.get('clue', '')
        wc = len(old_name.split())

        if sid == 's1':
            new = gen_s1(clue, s2_name, title, topic)
        elif sid == 's2':
            new = expand_s2(old_name, clue, title, topic)
        elif sid == 's3':
            new = expand_s3(old_name, clue, title, topic)
        elif sid == 's4':
            new = expand_s4(old_name, clue, title, topic)
        elif sid == 's5':
            new = fix_s5(old_name, qid)
        else:  # s6
            new = old_name  # no change

        if new != old_name:
            new_names[(qid, sid)] = new

print(f"Names to update: {len(new_names)}")

# Word count check
bad = [(qid, sid, n) for (qid, sid), n in new_names.items()
       if not (5 <= len(n.split()) <= 12)]
if bad:
    print(f"WARNING: {len(bad)} names outside 5-12 word range:")
    for qid, sid, n in bad[:20]:
        print(f"  {qid} {sid} ({len(n.split())}w): {n}")
else:
    print("All generated names are 5-12 words.")


# ── Pass 2: rewrite ──
def escape_json(s: str) -> str:
    return s.replace('\\', '\\\\').replace('"', '\\"')

out = []
cur_q = cur_sig = None
in_ma = False
changes = 0

for raw_line in lines:
    raw = raw_line.rstrip('\n')

    if not in_ma:
        if '"modelAnswer"' in raw and '`' in raw:
            in_ma = True
            out.append(raw_line)
            if raw.count('`') >= 2: in_ma = False
            continue
    else:
        out.append(raw_line)
        if '`' in raw: in_ma = False
        continue

    qm = re.search(r'"id":\s*"(FINAL-\d+)"', raw)
    if qm:
        cur_q = qm.group(1); cur_sig = None
        out.append(raw_line); continue

    sm = re.search(r'"id":\s*"(s\d+)"', raw)
    if sm and cur_q:
        cur_sig = sm.group(1)
        out.append(raw_line); continue

    if cur_q and cur_sig and cur_sig in ('s1','s2','s3','s4','s5','s6'):
        key = (cur_q, cur_sig)
        if key in new_names:
            nm_m = re.match(r'^(\s*)"name":\s*"((?:[^"\\]|\\.)*)"(,?)$', raw)
            if nm_m:
                indent, comma = nm_m.group(1), nm_m.group(3)
                new_n = escape_json(new_names[key])
                out.append(f'{indent}"name": "{new_n}"{comma}\n')
                changes += 1
                continue

    out.append(raw_line)

with open(FILEPATH, 'w', encoding='utf-8') as f:
    f.writelines(out)

print(f"Pass 2: {changes} name fields rewritten.")

# ── Sample check ──
print("\nSample s1 names (first 10):")
for qid in list(q_data.keys())[:10]:
    key = (qid, 's1')
    name = new_names.get(key, q_data[qid]['signals'].get('s1',{}).get('name',''))
    print(f"  {qid}: {name!r}  ({len(name.split())}w)")
