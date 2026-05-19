import type { QuizStem } from "../quizData";

export const RISK_STEMS: QuizStem[] = [
  {
    id: "RISK-001",
    topic: "risk",
    difficulty: "consultant",
    title: "Contextual suicide risk despite denial",
    candidateRole: "Consultant psychiatrist, emergency psychiatry service",
    setting: "Metropolitan emergency department",
    stem: `You are the consultant psychiatrist asked to advise an ED registrar about Mr Cole, a 52-year-old separated man brought in by police after sitting in his car outside his former workplace for several hours.

Mr Cole denies suicidal ideation and says, "I'm not stupid enough to say anything that gets me locked up." He lost his job two weeks ago after an investigation into misconduct. His ex-wife reports he has been drinking heavily, giving away tools and saying, "The kids will be better off without me." Police found a hose and tape in the boot of his car, which he says were "for gardening."

The ED is overcrowded, and Mr Cole wants to leave. The registrar says he is calm, denies intent and does not meet criteria for admission. His ex-wife is frightened but says she cannot stay involved because "he blames me for everything."`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Denial unreliable in high-risk context",
        category: "risk_self",
        severity: "critical",
        clueInStem: "I'm not stupid enough to say anything that gets me locked up.",
        whyItMatters: "This suggests strategic denial and invalidates reliance on self-report alone.",
        modelWording: "Do not rely on denial of suicidal ideation where the patient implies concealment and collateral indicates high dynamic risk.",
        keywords: ["suicide denial", "concealment", "dynamic risk", "self-report", "contextual risk", "ED assessment"],
      },
      {
        id: "s2",
        name: "Preparatory behaviour and means",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Police found a hose and tape in the boot of his car",
        whyItMatters: "Potential means consistent with suicide method require serious risk formulation.",
        modelWording: "Treat hose and tape in the car, combined with recent losses and collateral, as possible preparatory behaviour.",
        keywords: ["preparatory behaviour", "means", "suicide plan", "carbon monoxide", "police collateral", "lethality"],
      },
      {
        id: "s3",
        name: "Major psychosocial loss",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "lost his job two weeks ago",
        whyItMatters: "Recent shame, unemployment and separation increase acute suicide risk.",
        modelWording: "Formulate recent job loss, shame and relationship breakdown as acute precipitants.",
        keywords: ["job loss", "shame", "separation", "acute stressor", "male suicide", "precipitant"],
      },
      {
        id: "s4",
        name: "Alcohol increasing impulsivity",
        category: "substance_use",
        severity: "important",
        clueInStem: "drinking heavily",
        whyItMatters: "Alcohol increases impulsivity, disinhibition and near-term suicide risk.",
        modelWording: "Assess alcohol intoxication/dependence because it increases impulsivity and undermines safety planning.",
        keywords: ["alcohol", "impulsivity", "disinhibition", "suicide risk", "intoxication", "withdrawal"],
      },
      {
        id: "s5",
        name: "Collateral indicates burdensomeness",
        category: "collateral",
        severity: "important",
        clueInStem: "The kids will be better off without me.",
        whyItMatters: "Perceived burdensomeness is a concerning suicide risk marker.",
        modelWording: "Give significant weight to ex-wife's collateral regarding burdensomeness and giving away possessions.",
        keywords: ["collateral", "burdensomeness", "giving away possessions", "ex-wife", "warning signs"],
      },
      {
        id: "s6",
        name: "ED pressure and unsafe discharge risk",
        category: "system_pressure",
        severity: "optional",
        clueInStem: "The ED is overcrowded",
        whyItMatters: "Crowding must not lower threshold for unsafe discharge.",
        modelWording: "Acknowledge ED pressure but base disposition on risk formulation, not denial or access block.",
        keywords: ["ED overcrowding", "disposition", "unsafe discharge", "access block", "risk formulation"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Mr Cole should be treated as a high-risk presentation despite his calmness and denial of suicidal ideation, because the stem contains a coherent pattern of concealment, preparation and acute shame. His statement, "I'm not stupid enough to say anything that gets me locked up," is not reassuring; it tells me that he understands the assessment process and may be deliberately withholding suicidal intent to avoid interruption. In that context, I would not accept the registrar's view that calm presentation and denial mean he does not meet criteria for admission. I would take over the risk formulation and make clear that the decision cannot be based on self-report alone.

The most concerning clue is that police found "a hose and tape in the boot of his car" after he had been sitting outside his former workplace for several hours. That is not a neutral gardening detail in this context. It is potential access to means, possibly preparatory behaviour, and it sits alongside his recent job loss "two weeks ago after an investigation into misconduct," his separation, heavy alcohol use, giving away tools and the collateral statement, "The kids will be better off without me." These details together form a high-risk behavioural sequence: acute shame, occupational loss, relationship rupture, intoxication, perceived burdensomeness, giving away possessions, possible method preparation and strategic concealment. I would explicitly document that denial of suicidal ideation is unreliable because it conflicts with collateral and behaviour.

My immediate action would be to prevent premature departure while the assessment is completed. This does not mean automatically detaining him forever, but it does mean the ED cannot allow him to leave simply because he is calm. I would ask ED and police to secure the hose and tape, clarify exactly where he was found, whether the car was running or positioned in a secluded place, whether there were other means in the car, and whether he had sent messages, made financial arrangements or said goodbye to anyone. I would assess intoxication and withdrawal risk because his ex-wife reports he has been "drinking heavily," and alcohol increases impulsivity, disinhibition and near-term suicide risk. I would also assess depression, shame, hopelessness, sleep, psychosis, prior attempts, access to medications or firearms, and his capacity to collaborate with a safety plan.

I would obtain collateral urgently from police, the ex-wife, GP and, if relevant and lawful, workplace or other supports, because the ex-wife's statement that she cannot stay involved because "he blames me for everything" means she is both a source of critical collateral and potentially unsafe as a discharge support. I would not ask her to supervise him if she is frightened or being blamed. The ethical tension is between respecting an adult man's wish to leave and the duty to act on strong evidence of concealed suicidal risk. In my view, autonomy is not properly respected by accepting a strategically concealed account at face value; it is respected by doing a careful, proportionate assessment and using the least restrictive option that actually manages the risk.

Disposition would depend on whether risk can be reduced and a safe plan can be established. If he remains guarded, intoxicated, unable to collaborate, has ongoing access to means, or the preparatory behaviour is confirmed, I would consider admission or involuntary assessment under the relevant Mental Health Act if criteria are met. If he can be managed without admission, that would require more than a promise of safety: means restriction, removal of car-based ligature or carbon monoxide means, safe accommodation away from acute triggers, reliable support, rapid follow-up, GP involvement, alcohol risk management and a written crisis plan. I would explicitly address ED overcrowding, because "The ED is overcrowded" is a system pressure but not a clinical reason to discharge. My documentation would state why denial was unreliable, what collateral changed the risk formulation, what means were identified, what alternatives were considered, and why the final disposition was the least restrictive safe option.`,
  },
  {
    id: "RISK-002",
    topic: "risk",
    difficulty: "consultant",
    title: "Domestic violence risk with psychiatric comorbidity",
    candidateRole: "Consultant psychiatrist, community crisis team",
    setting: "Crisis assessment at police station and home environment",
    stem: `You are the consultant psychiatrist supervising a crisis team assessing Victor, a 39-year-old man with PTSD, alcohol dependence and recurrent depression. Police brought him in after his partner called emergency services during an argument.

Victor says, "I only grabbed her phone because she was trying to ruin my life." His partner reports escalating controlling behaviour, threats to kill himself if she leaves, and yesterday he said, "If I can't have the kids, no one will." Victor has access to hunting knives and has recently been sleeping in his car outside the family home.

Victor denies intent to harm anyone and says he just needs diazepam. The junior clinician focuses on suicide risk, but police ask whether he is safe to return home. His partner is in the waiting room with two young children and says she is afraid to go home.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Threat to children and partner",
        category: "risk_others",
        severity: "critical",
        clueInStem: "If I can't have the kids, no one will.",
        whyItMatters: "A statement implying harm to children is a critical risk signal requiring immediate safety planning.",
        modelWording: "Treat threats involving partner and children as serious risk to others requiring immediate safety planning.",
        keywords: ["domestic violence", "familicide risk", "threats to children", "risk to partner", "coercive control", "violence risk"],
      },
      {
        id: "s2",
        name: "Victim and child safety",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "she is afraid to go home.",
        whyItMatters: "Partner and children may need immediate safety planning, refuge, police involvement and child protection consideration.",
        modelWording: "Prioritise safety of partner and children through police/family violence services and child protection pathways as indicated.",
        keywords: ["victim safety", "children", "family violence services", "police", "child protection", "safety planning"],
      },
      {
        id: "s3",
        name: "Coercive control minimised by patient",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "I only grabbed her phone",
        whyItMatters: "Minimisation is common in domestic violence and should not reduce risk concern.",
        modelWording: "Recognise minimisation of coercive control and do not rely solely on Victor's account.",
        keywords: ["coercive control", "minimisation", "partner collateral", "domestic abuse", "risk formulation"],
      },
      {
        id: "s4",
        name: "Alcohol and weapon access",
        category: "substance_use",
        severity: "important",
        clueInStem: "access to hunting knives",
        whyItMatters: "Alcohol dependence plus weapon access increases impulsive serious harm risk.",
        modelWording: "Assess alcohol use, intoxication and access to weapons as major dynamic violence risk factors.",
        keywords: ["alcohol dependence", "weapons", "hunting knives", "impulsivity", "violence risk", "disinhibition"],
      },
      {
        id: "s5",
        name: "Suicide risk linked to coercion",
        category: "risk_self",
        severity: "important",
        clueInStem: "threats to kill himself if she leaves",
        whyItMatters: "Suicide threats may represent both genuine self-risk and coercive control.",
        modelWording: "Assess suicide risk while recognising suicidal threats may function as coercive control.",
        keywords: ["suicide threats", "coercive control", "self-harm", "relationship separation", "risk formulation"],
      },
      {
        id: "s6",
        name: "Benzodiazepine-seeking in high-risk context",
        category: "physical_health",
        severity: "optional",
        clueInStem: "he just needs diazepam.",
        whyItMatters: "Diazepam may worsen disinhibition in alcohol dependence and violence risk.",
        modelWording: "Avoid reflexive benzodiazepine prescribing due to alcohol dependence, disinhibition and safety concerns.",
        keywords: ["diazepam", "benzodiazepine", "alcohol", "disinhibition", "sedation", "violence"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Victor's presentation must be treated first as a family violence and child safety emergency, not simply as an individual suicide-risk assessment. The junior clinician's focus on suicide risk is understandable because Victor has made "threats to kill himself if she leaves," but that is too narrow. In domestic and family violence, suicidal threats can be both genuine self-risk and a mechanism of coercive control. The most dangerous phrase in the stem is, "If I can't have the kids, no one will." I would treat this as a serious threat involving his partner and children, with potential familicide dynamics, rather than as a dramatic or ambiguous statement.

I would immediately ensure that Victor's partner and the two young children are kept physically separate from him and that they are not asked to participate in any joint interview or mediation. Her statement that "she is afraid to go home" is high-value collateral and should be believed as a safety signal. My first actions would be to liaise with police, family violence services and, depending on jurisdiction and threshold, child protection, because the children are vulnerable third parties exposed to escalating controlling behaviour, threats and weapon access. I would ask police about prior callouts, protection orders, breaches, access to the home, stalking, strangulation, weapons, intoxication and whether he has made threats to others. I would not support him returning home until victim and child safety have been actively addressed.

Victor's own account is minimising and should not be relied upon as the main risk source. His statement, "I only grabbed her phone because she was trying to ruin my life," is a classic coercive-control clue: he reframes controlling behaviour as justified by grievance. His denial of intent to harm anyone does not carry much weight against the partner's report of escalating control, his access to "hunting knives," sleeping in his car outside the family home, alcohol dependence and the threat involving the children. I would formulate risk to others as driven by separation threat, entitlement, grievance, alcohol-related disinhibition, weapon access and possible PTSD/depressive symptoms, rather than assuming the problem is only psychiatric illness.

The request for diazepam also needs active management. Victor says he "just needs diazepam," but benzodiazepines in someone with alcohol dependence and violence risk may worsen disinhibition, sedation, impulsivity and overdose risk. I would not prescribe diazepam reflexively as a behavioural solution. If he is withdrawing from alcohol, that requires medically supervised withdrawal management; if he is distressed but not withdrawing, I would prioritise de-escalation, containment, risk assessment and non-disinhibiting treatment options. His PTSD and depression should be assessed, but they must not be used to excuse or minimise family violence.

The legal and ethical tension is between maintaining Victor's engagement and protecting identifiable victims. Confidentiality and therapeutic alliance matter, but they do not override serious risk to his partner and children. I would explain the limits of confidentiality to Victor, including that threats to others and child safety concerns may require information sharing. If mental disorder is contributing to serious risk and he refuses voluntary care, I would consider involuntary assessment under the relevant Mental Health Act, but I would also recognise that family violence risk may require police and family-violence responses even if psychiatric admission criteria are not met.

My disposition advice would be that he is not simply "safe to return home" because he denies intent. He should not return to the family home unless police and family violence services have established a safety plan for the partner and children. The partner should be offered safe accommodation, legal information, family violence advocacy and support for the children. Victor requires assessment of intoxication, withdrawal, mental state, suicidality, violence risk, access to weapons and capacity to comply with restrictions. I would document the partner's collateral, the exact threat "If I can't have the kids, no one will," the weapon access, the rationale for any information sharing, and the reason the final plan prioritised victim and child safety over a narrow symptom-based psychiatric assessment.`,
  },
  {
    id: "RISK-003",
    topic: "risk",
    difficulty: "consultant",
    title: "Post-discharge suicide review",
    candidateRole: "Consultant psychiatrist, inpatient unit morbidity and mortality review lead",
    setting: "Acute inpatient service clinical review meeting",
    stem: `You are the consultant psychiatrist asked to lead a review after Nina, a 34-year-old woman with bipolar disorder and alcohol misuse, died by suicide three days after discharge from the acute ward.

The discharge summary stated, "Nina denied suicidal ideation and requested discharge." However, nursing notes from the day before discharge recorded that she was pacing, tearful and said, "My children would be safer without me." Her partner had phoned the ward saying she had been searching online for "painless ways to die."

The registrar documented that Nina had capacity and was "future focused" because she wanted to attend a custody hearing. There was no documented family meeting, safety plan or handover to community team. Staff are upset and asking whether anything could have been done differently.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Missed dynamic suicide warning",
        category: "risk_self",
        severity: "critical",
        clueInStem: "My children would be safer without me.",
        whyItMatters: "Burdensomeness and affective distress shortly before discharge are acute warning signs.",
        modelWording: "Identify burdensomeness, distress and online suicide searching as dynamic risk factors requiring delayed discharge or enhanced plan.",
        keywords: ["burdensomeness", "dynamic risk", "suicide warning", "discharge risk", "bipolar disorder", "distress"],
      },
      {
        id: "s2",
        name: "Collateral not integrated",
        category: "collateral",
        severity: "critical",
        clueInStem: `searching online for "painless ways to die."`,
        whyItMatters: "Collateral indicated active planning and should have changed risk formulation.",
        modelWording: "Give partner collateral significant weight and integrate it into risk formulation before discharge.",
        keywords: ["collateral", "online searching", "suicide planning", "partner call", "risk formulation"],
      },
      {
        id: "s3",
        name: "Over-reliance on denial",
        category: "governance",
        severity: "important",
        clueInStem: "Nina denied suicidal ideation and requested discharge.",
        whyItMatters: "Documentation is weak if based on denial without synthesis of contradictory evidence.",
        modelWording: "Critique reliance on denial of suicidal ideation without reconciling contradictory nursing and family information.",
        keywords: ["denial", "documentation", "contradictory evidence", "defensible formulation", "suicide review"],
      },
      {
        id: "s4",
        name: "Custody hearing as stressor, not only future focus",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "wanted to attend a custody hearing.",
        whyItMatters: "Custody hearing may increase acute risk and should not be simplistically treated as protective.",
        modelWording: "Formulate custody hearing as both future orientation and acute stressor requiring careful risk planning.",
        keywords: ["custody hearing", "future focus", "acute stressor", "bipolar disorder", "family court"],
      },
      {
        id: "s5",
        name: "Failed transition of care",
        category: "disposition",
        severity: "important",
        clueInStem: "no documented family meeting, safety plan or handover",
        whyItMatters: "Poor discharge handover is a known high-risk transition failure.",
        modelWording: "Identify discharge planning failure: no family meeting, safety plan or community handover despite dynamic risk.",
        keywords: ["transition of care", "safety plan", "handover", "family meeting", "post-discharge risk"],
      },
      {
        id: "s6",
        name: "Learning review not blame",
        category: "governance",
        severity: "optional",
        clueInStem: "asking whether anything could have been done differently.",
        whyItMatters: "A just culture review supports learning and staff wellbeing while identifying system gaps.",
        modelWording: "Lead a just culture review focused on risk formulation, discharge process and systems improvement.",
        keywords: ["just culture", "M&M review", "systems learning", "staff support", "governance"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Nina's death should be reviewed as a serious adverse event in which the central failure appears to be the failure to integrate dynamic risk information into the discharge decision. The discharge summary phrase, "Nina denied suicidal ideation and requested discharge," is not a risk formulation. It is a record of one statement. A consultant-level review must explicitly ask why that statement was privileged over contradictory evidence from nursing staff and her partner. The phrase "denies suicidal ideation" becomes particularly weak when the day-before-discharge nursing note recorded that she was pacing, tearful and saying, "My children would be safer without me." That is a burdensomeness statement in a distressed patient with bipolar disorder and alcohol misuse, and it should have triggered senior review rather than routine discharge.

The partner's phone call that Nina had been searching online for "painless ways to die" is even more significant. That is not vague anxiety from a family member; it is collateral suggesting active method research and possible planning. It should have changed the formulation from "requested discharge" to "high dynamic post-discharge suicide risk unless convincingly mitigated." The failure was not merely that the team did not ask enough questions; it was that the available information already contained major warning signs and these were not synthesised. A defensible consultant decision would have reconciled the denial of suicidal ideation with the pacing, tearfulness, burdensomeness, online searching, alcohol use, custody stressor and family collateral.

I would also challenge the registrar's documentation that Nina was "future focused" because she wanted to attend a custody hearing. In a superficial risk assessment, a future appointment may be misread as protective. In this case, the custody hearing may have been a major acute stressor, particularly for a mother saying, "My children would be safer without me." The consultant-level task is to hold both possibilities: the hearing may indicate some future orientation, but it may also be the very event around which shame, fear of loss, hopelessness and suicidal thinking are organised. Therefore it should have prompted more careful planning, not reassurance.

The absence of "documented family meeting, safety plan or handover to community team" is a major transition-of-care failure. The first days after discharge are a high-risk period, and Nina had multiple dynamic risk factors. A safe discharge would have required a documented formulation, partner involvement where appropriate, means restriction, alcohol risk management, a clear plan for the custody-hearing stressor, rapid community follow-up, and explicit handover of the partner's warning call. If discharge still occurred, the rationale would need to explain why the team believed the risk could be safely managed despite online method searching and burdensomeness statements. Without that, the file is unlikely to be defensible.

As the consultant leading the review, I would not conduct a blame-focused interrogation, but I also would not dilute the clinical lessons by calling it simply unpredictable. I would initiate a just-culture serious incident review, preserve records, construct a factual timeline, identify who received the partner's call, whether it was escalated, whether consultant review was available, and how discharge decisions were made. I would support staff distress while making clear that staff wellbeing and accountability are not opposites. The family should be contacted through an appropriate open disclosure and bereavement/postvention process, with acknowledgement of their concerns and an explanation that the service is reviewing what happened.

The governance lessons should be concrete. The service needs a standard that collateral indicating preparatory behaviour, online suicide searching, burdensomeness or acute family-court stress requires senior review before discharge. Documentation should move from risk labels such as "low risk" to formulation: what has changed, what is protective, what is dynamic, what could go wrong in the next 72 hours, and why the proposed disposition is safe. The final review should address clinical reasoning, collateral escalation, discharge planning, family meeting standards, community handover and consultant supervision, because the question is not only whether anything could have been done differently but whether the system made it too easy for a high-risk discharge to proceed on the basis of denial alone.`,
  },
  {
    id: "RISK-004",
    topic: "risk",
    difficulty: "consultant",
    title: "Older woman with self-neglect and capacity concerns",
    candidateRole: "Consultant psychiatrist, old age community mental health service",
    setting: "Home visit after GP referral",
    stem: `You are the old age psychiatrist asked to conduct an urgent home visit for Mrs Singh, a 78-year-old widow referred by her GP for self-neglect.

The house smells strongly of urine, there is spoiled food in the kitchen, and neighbours report she has been leaving the front door open overnight. Mrs Singh says, "I am managing perfectly; everyone should mind their own business." She has lost weight, missed diabetes appointments and cannot explain her insulin regimen.

Her daughter lives interstate and says, "Mum will never agree to help, but she was always independent." The GP is worried about cognitive decline and depression, but Mrs Singh refuses blood tests, home care and hospital assessment.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Severe self-neglect",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "spoiled food in the kitchen",
        whyItMatters: "Environmental neglect, malnutrition and unsafe home conditions create serious vulnerability.",
        modelWording: "Recognise severe self-neglect with environmental hazards, poor nutrition and impaired capacity for self-care.",
        keywords: ["self-neglect", "environmental risk", "spoiled food", "vulnerability", "home safety", "malnutrition"],
      },
      {
        id: "s2",
        name: "Capacity to refuse care questionable",
        category: "capacity",
        severity: "critical",
        clueInStem: "cannot explain her insulin regimen.",
        whyItMatters: "Inability to understand essential diabetes treatment may indicate impaired capacity for refusing medical and support care.",
        modelWording: "Assess decision-specific capacity to refuse medical assessment and home supports, including understanding of diabetes risk.",
        keywords: ["capacity", "refusal of care", "diabetes", "insulin", "decision-specific", "self-care"],
      },
      {
        id: "s3",
        name: "Physical health risk",
        category: "physical_health",
        severity: "important",
        clueInStem: "missed diabetes appointments",
        whyItMatters: "Unmanaged diabetes, weight loss and poor hygiene may require urgent medical assessment.",
        modelWording: "Assess urgent physical health risks including diabetes complications, dehydration, infection and malnutrition.",
        keywords: ["diabetes", "weight loss", "infection", "dehydration", "medical assessment", "frailty"],
      },
      {
        id: "s4",
        name: "Possible dementia or depression",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "cognitive decline and depression",
        whyItMatters: "Underlying reversible or treatable conditions may drive self-neglect and refusal.",
        modelWording: "Assess for dementia, depression, delirium and grief contributing to self-neglect and poor insight.",
        keywords: ["dementia", "depression", "delirium", "grief", "poor insight", "self-neglect"],
      },
      {
        id: "s5",
        name: "Refusal of support and need for least restrictive plan",
        category: "consent_refusal",
        severity: "important",
        clueInStem: "refuses blood tests, home care and hospital assessment.",
        whyItMatters: "A consultant must balance autonomy with serious foreseeable harm and consider legal pathways if capacity absent.",
        modelWording: "Use least restrictive engagement first but consider guardianship/emergency assessment if incapacity and serious risk are present.",
        keywords: ["refusal", "home care", "least restrictive", "guardianship", "hospital assessment", "autonomy"],
      },
      {
        id: "s6",
        name: "Remote family collateral",
        category: "family_carer",
        severity: "optional",
        clueInStem: "she was always independent.",
        whyItMatters: "Longstanding independence may obscure recent decline; collateral helps establish change from baseline.",
        modelWording: "Obtain collateral to distinguish lifelong independence from new functional decline and risk.",
        keywords: ["collateral", "daughter", "baseline functioning", "functional decline", "independence"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Mrs Singh's presentation should be treated as severe self-neglect with possible impaired capacity, not as a lifestyle choice or simple refusal of services. The home environment contains multiple objective risk markers: "spoiled food in the kitchen," a strong smell of urine, neighbours reporting that she leaves the front door open overnight, weight loss, missed diabetes appointments and inability to explain her insulin regimen. These details show foreseeable harm from malnutrition, infection, dehydration, falls, exploitation, hypoglycaemia or hyperglycaemia, and exposure to environmental danger. Her statement, "I am managing perfectly; everyone should mind their own business," is therefore not enough to establish capacitous refusal; it may reflect lack of insight, cognitive impairment, depression, delirium or fear of losing independence.

The most important capacity issue is decision-specific. I would assess her capacity to refuse blood tests, home care and hospital assessment separately, rather than making a global judgement about her competence. The phrase "cannot explain her insulin regimen" is a concrete clue that she may not understand or appreciate essential diabetes care. I would test whether she understands her diabetes, what insulin is for, what could happen if she misses doses or food, why blood tests are recommended, what risks exist in the current home environment, and what alternatives to hospital or home care are available. I would also consider whether fluctuating cognition, delirium, depression or grief is impairing her ability to weigh information.

I would not jump immediately to coercion if there is time to engage safely, because autonomy and dignity matter in older adult care. The ethical tension is real: older people are allowed to live with some risk and to make unwise decisions if they have capacity. However, serious self-neglect plus possible incapacity creates a safeguarding duty. I would first use a least restrictive approach: engage respectfully in the home, involve the GP who knows her, ask what she fears about help, offer practical supports framed around independence rather than control, and consider urgent community nursing, diabetes review, cleaning support, meals, falls assessment and aged-care assessment. If she allows a trusted person to be involved, I would use that relationship to support engagement.

Collateral is essential because her daughter says, "Mum will never agree to help, but she was always independent." That sentence can be read two ways. It may indicate a lifelong value of independence, but it may also mask a recent decline that family have normalised. I would obtain a timeline from the daughter, GP, neighbours and any previous services to establish what has changed, when weight loss started, whether bills are paid, whether medication is taken, whether there are memory lapses, whether there is alcohol use, bereavement, hoarding, paranoia, falls or exploitation. I would be careful not to equate living alone with incapacity, but equally careful not to romanticise independence when the objective environment is unsafe.

If Mrs Singh lacks capacity to refuse assessment or supports and there is serious risk, I would consider emergency medical assessment, guardianship or other local legal pathways. If she has capacity, I would respect her refusal while still offering harm reduction: GP follow-up, diabetes simplification, voluntary home supports, emergency contact plan, and regular review. If capacity is borderline or fluctuating, I would arrange reassessment after treating reversible contributors and increasing support. My documentation would describe the actual home conditions, the diabetes risk, the capacity domain assessed, the alternatives offered, the collateral obtained, the least restrictive steps attempted and the legal rationale for any escalation. That is what makes the decision defensible whether the outcome is voluntary support, emergency assessment or guardianship referral.`,
  },
  {
    id: "RISK-005",
    topic: "risk",
    difficulty: "consultant",
    title: "First episode psychosis and violence risk",
    candidateRole: "Consultant psychiatrist, early psychosis service",
    setting: "Emergency department and early psychosis intake",
    stem: `You are the consultant psychiatrist supervising an early psychosis assessment.

Jayden is a 19-year-old man brought to ED by police after neighbours reported him shouting on the street with a baseball bat. He says, "The people upstairs are sending signals into my room." His mother reports three months of social withdrawal, cannabis use, poor sleep and increasing suspicion.

Jayden denies wanting to hurt anyone but says, "If they come through the ceiling, I'll protect myself." Police report he swung the bat at a neighbour's door but did not strike anyone. His mother is frightened and says, "He has never been like this before, but I can't take him home tonight."

The registrar asks whether this is simply cannabis intoxication and whether Jayden can be discharged with early psychosis follow-up.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Psychosis-linked defensive violence risk",
        category: "risk_others",
        severity: "critical",
        clueInStem: "If they come through the ceiling, I'll protect myself.",
        whyItMatters: "Persecutory beliefs can create defensive aggression even when the patient denies intent.",
        modelWording: "Formulate violence risk as linked to persecutory delusions and perceived need for self-defence.",
        keywords: ["persecutory delusions", "defensive violence", "risk to others", "first episode psychosis", "threat perception"],
      },
      {
        id: "s2",
        name: "Weapon use and recent violent behaviour",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "baseball bat",
        whyItMatters: "Weapon access and bat-related behaviour require immediate safety planning and containment.",
        modelWording: "Treat recent weapon use as a major dynamic risk factor requiring safe containment and means removal.",
        keywords: ["weapon access", "baseball bat", "violence risk", "means removal", "containment", "police"],
      },
      {
        id: "s3",
        name: "First episode psychosis formulation",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "three months of social withdrawal",
        whyItMatters: "Gradual functional decline suggests emerging psychotic disorder, not merely intoxication.",
        modelWording: "Assess first episode psychosis versus substance-induced psychosis, noting three-month functional decline.",
        keywords: ["first episode psychosis", "functional decline", "social withdrawal", "differential diagnosis", "early psychosis"],
      },
      {
        id: "s4",
        name: "Cannabis as risk modifier",
        category: "substance_use",
        severity: "important",
        clueInStem: "cannabis use",
        whyItMatters: "Cannabis may precipitate or worsen psychosis and violence risk through paranoia.",
        modelWording: "Assess cannabis use as a contributor to psychosis, disinhibition and relapse/violence risk.",
        keywords: ["cannabis", "substance-induced psychosis", "paranoia", "disinhibition", "risk modifier"],
      },
      {
        id: "s5",
        name: "Family cannot safely supervise",
        category: "family_carer",
        severity: "important",
        clueInStem: "I can't take him home tonight.",
        whyItMatters: "Discharge relying on family supervision is unsafe when carers are frightened and unable to manage risk.",
        modelWording: "Do not discharge to mother if she is frightened and unable to provide safe supervision.",
        keywords: ["family supervision", "carer fear", "unsafe discharge", "home risk", "support capacity"],
      },
      {
        id: "s6",
        name: "Inadequate outpatient-only plan",
        category: "disposition",
        severity: "optional",
        clueInStem: "discharged with early psychosis follow-up.",
        whyItMatters: "Follow-up alone may be insufficient after weapon-related behaviour and active persecutory psychosis.",
        modelWording: "Consider admission or intensive crisis containment rather than routine outpatient follow-up given active psychosis and weapon-related risk.",
        keywords: ["early psychosis follow-up", "admission", "crisis containment", "outpatient plan", "active psychosis"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Jayden should not be discharged with routine early psychosis follow-up at this point, because the stem describes active psychosis linked to weapon-related defensive violence risk. The phrase, "If they come through the ceiling, I'll protect myself," is the key formulation clue. He denies wanting to hurt anyone, but his risk is not organised around declared intent; it is organised around perceived threat. In persecutory psychosis, violence may occur as self-defence against a delusional danger. That makes his denial of general violent intent much less reassuring, especially after he was brought in by police for shouting in the street with a "baseball bat" and reportedly swung the bat at a neighbour's door.

The immediate consultant action is to ensure safety before diagnostic certainty. I would ask ED and police to ensure the baseball bat and any other weapons are removed, that Jayden is assessed in a low-stimulus setting with staff safety measures, and that his mother is not expected to manage him. His mother says, "He has never been like this before, but I can't take him home tonight." That is not simply carer anxiety; it is a clear statement that the proposed discharge environment is not safe or available. A discharge plan that depends on her supervision would be clinically unsound and unfair to her.

The diagnostic question is important, but it should not be used to minimise risk. The registrar asks whether this is simply cannabis intoxication, but the stem includes "three months of social withdrawal," poor sleep and increasing suspicion. That longitudinal decline suggests first episode psychosis or emerging primary psychotic disorder, although cannabis may be a precipitant or amplifier. I would formulate the differential as first episode psychosis versus cannabis-induced psychosis, while making clear that either diagnosis can carry serious short-term risk when persecutory beliefs, weapon access, sleep deprivation and recent aggression are present. I would assess hallucinations, delusions, thought disorder, mood symptoms, command phenomena, substance use, head injury or medical causes, and baseline functioning.

I would obtain collateral from his mother, police and, if possible, school/work/friends to clarify onset, drug exposure, access to weapons, prior aggression, family history, trauma, and whether there are identifiable targets such as the upstairs neighbours. The detail that he believes "The people upstairs are sending signals into my room" matters because it identifies a likely perceived source of threat. If he believes those neighbours may come through the ceiling, his defensive violence risk is specific, not abstract. I would ask whether he has approached them, made threats, searched for them, damaged property, or planned further action.

The legal and disposition tension is between least restrictive early psychosis care and the duty to contain active risk. A young person with first episode psychosis should be engaged in a youth-friendly, non-punitive way, and unnecessary coercion can damage long-term trust. However, least restrictive care does not mean outpatient care when the patient is actively psychotic, sleep deprived, weapon-involved and cannot be safely supervised at home. If Jayden accepts voluntary admission or crisis stabilisation, that would be preferable. If he refuses and serious risk persists, I would consider involuntary assessment under the relevant Mental Health Act.

Treatment should begin with engagement, sleep restoration, reduction of stimulation, management of cannabis use, and discussion of antipsychotic treatment if clinically indicated. I would involve the early psychosis service early, but not use future follow-up as a substitute for immediate containment. Discharge would require resolution or substantial reduction of persecutory threat, removal of weapons, reliable supervision, a clear crisis plan, rapid follow-up and family agreement that the home plan is safe. At present, the stem does not provide those conditions. My documentation would explicitly state that violence risk is psychosis-driven and defensive despite denial of intent, that weapon-related behaviour has occurred, that the mother cannot supervise tonight, and that routine outpatient follow-up alone is insufficient.`,
  },
];
