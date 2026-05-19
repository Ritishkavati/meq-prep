import { QuizStem } from "../quizData";

export const ED_STEMS: QuizStem[] = [
  {
    id: "ED-001",
    topic: "ed",
    difficulty: "consultant",
    title: "Methamphetamine Psychosis vs First-Episode Schizophrenia",
    candidateRole: "Psychiatry registrar on call, asked to review by ED",
    setting: "Metropolitan ED, Saturday night, 2 am",
    stem: `You are the psychiatry registrar on call. The ED senior registrar phones at 2 am requesting urgent review of Marcus, a 24-year-old man brought by police after he was found agitated and shouting in a shopping centre carpark, insisting that strangers had "inserted transmitters" into his teeth. He has no prior psychiatric history on the system. Urine drug screen is positive for methamphetamine. He is now calmer after 10 mg oral olanzapine given 90 minutes ago.

The ED registrar says: "He's calmed down, his obs are stable, and I need the bed. My consultant says this is a drug psychosis — once he's settled he can go." When you interview Marcus, he tells you the transmitters have been monitoring him "for six months." His sister, reached by phone, tells you she has been worried about him for eight months: he stopped going to work, began spending hours researching "surveillance technology," and only started using methamphetamine last week — "to cope with the fear."`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Symptom duration precedes substance use — primary psychosis must be excluded",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "transmitters monitoring him for six months; methamphetamine use only started last week",
        whyItMatters: "When psychotic symptoms precede substance use by months, a primary psychotic disorder is the leading diagnosis. Methamphetamine can exacerbate or unmask schizophrenia and should not be accepted as the sole explanation without further assessment.",
        relatedRisk: "Discharging untreated first-episode schizophrenia from ED carries significant risk of deterioration, self-neglect, and loss to follow-up.",
        modelWording: "The sister's collateral establishes that paranoid beliefs began eight months ago — well before any methamphetamine use. This timeline makes primary psychosis the working diagnosis until proven otherwise; a drug psychosis explanation cannot stand.",
        keywords: ["six months", "before", "precedes", "primary psychosis", "timeline", "first episode", "schizophrenia", "not drug-only", "differential"],
      },
      {
        id: "s2",
        name: "Collateral history contradicts the drug-only diagnosis",
        category: "collateral",
        severity: "critical",
        clueInStem: "his sister says she has been worried for eight months — stopped working, hours researching surveillance",
        whyItMatters: "Collateral from a close informant is essential in first-presentation psychosis. It establishes prodromal features, functional decline, and a timeline that cannot be obtained from the patient alone in an ED setting.",
        modelWording: "The sister's account — eight months of functional decline, social withdrawal, and persecutory preoccupation — constitutes a prodrome. This collateral history is the single most important piece of diagnostic information in this presentation.",
        keywords: ["sister", "collateral", "eight months", "stopped work", "functional decline", "prodrome", "informant", "history"],
      },
      {
        id: "s3",
        name: "Bed pressure driving premature discharge — systemic risk",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "I need the bed; my consultant says this is a drug psychosis — once he's settled he can go",
        whyItMatters: "Bed pressure in ED creates a pull toward premature diagnostic closure. A consultant directive to discharge without psychiatric assessment does not transfer clinical or legal responsibility from the psychiatry registrar performing the assessment.",
        relatedSystem: "First-episode psychosis frequently presents via ED; the quality of the initial assessment shapes the patient's entire subsequent treatment trajectory.",
        modelWording: "The ED consultant's view is understandable, but bed pressure does not change the diagnostic uncertainty. I am responsible for my assessment, and I cannot endorse discharge without completing it. If there is disagreement, I will escalate to my own supervisor.",
        keywords: ["bed pressure", "bed needed", "premature", "consultant directive", "my responsibility", "cannot discharge", "systemic", "escalate"],
      },
      {
        id: "s4",
        name: "Adequate observation period before discharge",
        category: "disposition",
        severity: "important",
        clueInStem: "calmer after olanzapine 90 minutes ago",
        whyItMatters: "Olanzapine sedation can temporarily suppress behavioural disturbance without resolving the underlying psychotic state. A meaningful psychiatric assessment requires a patient who is alert, oriented, and able to engage — not simply sedated.",
        modelWording: "Marcus is calmer, but clinical calm after acute sedation is not the same as resolution of psychosis. I need to complete a full mental state examination when he is sufficiently alert, and reassess after an adequate observation period.",
        keywords: ["olanzapine", "sedated", "observation period", "mental state", "alert", "not resolved", "full assessment", "calm not equal to resolved"],
      },
      {
        id: "s5",
        name: "Risk assessment before any discharge decision",
        category: "risk_self",
        severity: "important",
        clueInStem: "brought by police; found shouting in a carpark",
        whyItMatters: "A first-episode psychosis patient found alone at night in a public space with paranoid beliefs about surveillance is at risk of self-neglect, accidental harm, and social disintegration. A risk assessment must precede discharge.",
        modelWording: "I must complete a risk assessment addressing: insight into illness, ability to self-care, support at home, risk of harm from others if behaviour is misinterpreted, and his own understanding of what happened. This cannot be deferred.",
        keywords: ["risk assessment", "self-neglect", "alone", "carpark", "insight", "support at home", "public safety", "before discharge"],
      },
      {
        id: "s6",
        name: "Disposition — inpatient admission vs community follow-up with clear plan",
        category: "disposition",
        severity: "important",
        clueInStem: "no prior psychiatric history; first presentation",
        whyItMatters: "First-episode psychosis requiring a clear disposition pathway: if admitted, specialist early psychosis service referral; if discharged, next-day CATT or early psychosis intake. Discharge without any follow-up plan is not acceptable.",
        modelWording: "Regardless of whether Marcus is admitted or discharged with supports, I will arrange formal early psychosis review within 24–48 hours, document the diagnostic uncertainty, and brief the sister on what to watch for and who to call.",
        keywords: ["early psychosis", "follow-up", "CATT", "admission", "next-day review", "discharge plan", "first episode", "sister briefed"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `The timeline is the key diagnostic finding: paranoid beliefs about surveillance began eight months ago, and methamphetamine use started only last week. The drug psychosis explanation cannot account for eight months of prodromal decline in a person without prior substance use. Primary psychosis — most likely first-episode schizophrenia — is the working diagnosis.

The ED consultant's directive to clear the bed does not change this assessment. I am responsible for my own clinical conclusion. I will not endorse discharge while diagnostic uncertainty remains and before a full mental state examination is possible. I will escalate to my supervisor if pressured.

I will complete the MSE once Marcus is sufficiently alert after sedation, obtain a thorough collateral history from his sister, and conduct a structured risk assessment. Admission to a psychiatric inpatient unit is likely indicated for diagnostic clarification and initiation of antipsychotic treatment. If discharged, same-day or next-morning CATT or early psychosis review is mandatory. I will brief his sister about warning signs and emergency contact numbers regardless of disposition.`,
  },

  {
    id: "ED-002",
    topic: "ed",
    difficulty: "consultant",
    title: "Anorexia Nervosa Refusing NG Feeding — Capacity and Involuntary Treatment",
    candidateRole: "Consultant psychiatrist called urgently to ED",
    setting: "General hospital ED, late afternoon",
    stem: `You are the consultant psychiatrist on call. The ED consultant phones urgently about Eliza, a 22-year-old woman with a ten-year history of anorexia nervosa, brought by ambulance. Her current BMI is 12.5. Investigations show: heart rate 44 bpm, potassium 2.6 mmol/L, phosphate 0.55 mmol/L, and glucose 3.1 mmol/L. She is alert and articulate, making sustained eye contact, and declines nasogastric feeding, saying: "I understand exactly what you're telling me. I know the risks and I choose to go home. This is my life."

The ED consultant says he is willing to "accept her decision" because she is "calm, oriented, and not suicidal." Eliza says she does not want her parents, who are in the waiting room, to be involved. The treating ED team has commenced IV electrolyte replacement, which she is tolerating.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Formal capacity assessment is mandatory — calmness does not equal capacity",
        category: "capacity",
        severity: "critical",
        clueInStem: "calm, oriented, and not suicidal",
        whyItMatters: "Capacity is decision-specific and requires assessment of all four criteria: understanding, retention, weighing, and communicating. Being calm and oriented is not the same as having decision-making capacity for a life-threatening refusal of treatment. Anorexia nervosa characteristically distorts the ability to weigh information because illness ego-syntonicity impairs the 'use and weigh' element.",
        modelWording: "A formal capacity assessment is required for this specific decision — refusing nasogastric feeding at a life-threatening BMI. I must assess whether Eliza can use and weigh the information in a way that is free from the distortion imposed by her eating disorder. Calmness and orientation satisfy only two of four criteria.",
        keywords: ["capacity", "decision-specific", "use and weigh", "four criteria", "understand", "retain", "weigh", "communicate", "not just calm", "formal assessment"],
      },
      {
        id: "s2",
        name: "Medically critical — refeeding syndrome risk and immediate cardiac danger",
        category: "physical_health",
        severity: "critical",
        clueInStem: "HR 44, potassium 2.6, phosphate 0.55, glucose 3.1, BMI 12.5",
        whyItMatters: "These parameters represent life-threatening medical instability. Bradycardia at this level is associated with ventricular arrhythmia. Hypophosphataemia is the key risk factor for refeeding syndrome. This is a medical emergency independent of the psychiatric capacity question.",
        relatedRisk: "Patients with anorexia nervosa and BMI below 13 have a mortality rate that may exceed 5–10% per admission; this is one of the highest mortality rates of any psychiatric illness.",
        modelWording: "Regardless of the capacity question, Eliza's HR of 44, potassium of 2.6, and phosphate of 0.55 represent a medically critical state requiring inpatient medical management, including cardiac monitoring. The ED consultant and I need to agree on this as the immediate medical priority.",
        keywords: ["bradycardia", "HR 44", "potassium", "phosphate", "refeeding", "cardiac monitoring", "medical emergency", "BMI 12.5", "life-threatening"],
      },
      {
        id: "s3",
        name: "Capacity may be impaired by illness — ego-syntonicity of anorexia nervosa",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "I know the risks and I choose to go home. This is my life",
        whyItMatters: "Anorexia nervosa is unique among psychiatric illnesses in that the illness itself constitutes the cognitive framework through which the patient evaluates the decision. An ego-syntonic rejection of life-saving treatment, driven by fear of weight gain, may not meet the 'use and weigh' standard even when the patient can articulate risks.",
        modelWording: "Eliza's refusal is not simply an autonomous choice — it may be a direct expression of her eating disorder. The fact that she articulates risk does not demonstrate that she can weigh that information without distortion imposed by the illness. I must probe this explicitly: ask her what would happen to her if she went home, what she believes her risks actually are, and how she feels about gaining weight.",
        keywords: ["ego-syntonic", "distorted", "use and weigh", "anorexia cognition", "illness-driven refusal", "fear weight gain", "impaired capacity", "probe weigh"],
      },
      {
        id: "s4",
        name: "Mental Health Act — involuntary treatment is a legitimate option if capacity impaired",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "declines nasogastric feeding; medically critical",
        whyItMatters: "If Eliza lacks capacity for this decision, involuntary treatment under the relevant Mental Health Act (or Guardianship legislation, jurisdiction-dependent) is ethically and legally appropriate. The treating team must not default to accepting refusal without establishing whether the legislative threshold is met.",
        modelWording: "If my assessment concludes that Eliza lacks capacity for this specific decision, the appropriate response is to invoke the relevant involuntary treatment framework. I will document my capacity assessment in detail, consult with the medical team, and initiate the relevant MHA or guardianship process as appropriate to jurisdiction.",
        keywords: ["mental health act", "involuntary", "guardianship", "lacks capacity", "legislative threshold", "MHA", "jurisdiction", "document"],
      },
      {
        id: "s5",
        name: "Family involvement — privacy versus urgent need for collateral",
        category: "family_carer",
        severity: "important",
        clueInStem: "she does not want her parents involved; parents are in the waiting room",
        whyItMatters: "Eliza's privacy must be respected to the extent possible, but when she may lack capacity and is in a life-threatening state, family collateral about her clinical history and trajectory is clinically and legally relevant. Speaking with parents about the clinical situation — without disclosing details Eliza has not consented to — may be possible and appropriate.",
        modelWording: "I will discuss with Eliza my wish to speak with her parents about the current situation, explaining that in a medical emergency this may be necessary regardless of her preference. I will be transparent with her about what I intend to say and why.",
        keywords: ["parents", "privacy", "collateral", "family", "life-threatening", "transparent", "consent to involve", "emergency exception"],
      },
      {
        id: "s6",
        name: "Multidisciplinary and specialist eating disorder input",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "ten-year history of anorexia nervosa",
        whyItMatters: "Medically critical anorexia nervosa with a ten-year history requires specialist eating disorder input in the admission and management decision. The ED consultant and general psychiatry team should not manage this without specialist involvement if available.",
        modelWording: "I will contact the specialist eating disorder service today. Regardless of the capacity outcome, Eliza should be managed by a team with expertise in medically severe anorexia nervosa — this includes a dietitian experienced in refeeding, specialist nursing, and a treating psychiatrist with ED experience.",
        keywords: ["eating disorder specialist", "multidisciplinary", "dietitian", "refeeding", "specialist service", "consult", "expertise"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `Eliza is in a medically critical state: HR 44, potassium 2.6, phosphate 0.55, BMI 12.5. This is a medical emergency. Regardless of the capacity question, she requires inpatient medical management and cardiac monitoring.

The ED consultant's assessment that she has capacity is premature. Capacity is decision-specific and requires demonstration of all four criteria, including use and weigh. Anorexia nervosa characteristically impairs this through ego-syntonicity — the illness shapes the patient's very framework for evaluating her options. I will conduct a formal, documented capacity assessment specifically probing whether Eliza can weigh the consequences of refusal without distortion imposed by her eating disorder. Articulating risk does not equal using and weighing it.

If I conclude she lacks capacity for this decision, I will initiate the relevant involuntary treatment framework (MHA or guardianship, jurisdiction-dependent) and document this in detail. I will engage the specialist eating disorder service urgently, involve a dietitian experienced in refeeding protocol, and address the family involvement question with Eliza transparently, explaining that her safety may require me to speak with her parents.`,
  },

  {
    id: "ED-003",
    topic: "ed",
    difficulty: "consultant",
    title: "Acute Confusional State in an Older Woman — Delirium Missed as Dementia",
    candidateRole: "Consultation-liaison psychiatry registrar called to ED",
    setting: "District general hospital ED, 10 pm",
    stem: `You are the consultation-liaison psychiatry registrar on call. ED asks you to review Nora, a 78-year-old woman brought by her daughter at 10 pm following two days of increasing confusion, calling out at night, and refusing to eat or take her medications. She lives alone in a granny flat behind her daughter's house. Her GP recently commenced oxybutynin 5 mg twice daily for urinary incontinence three weeks ago.

On assessment, Nora is alert but disoriented in time and place, has fluctuating attention, and is easily distracted. She cannot complete serial sevens. She scored 21 on her MMSE at the GP one month ago; her current MMSE is 12. She is distressed and repeatedly calls for her late husband. Her MSE is otherwise unremarkable — no sustained psychotic phenomena, no perceptual disturbance on direct questioning.

The ED registrar tells you: "She's been here twice before for confusion — both times they said it was her dementia and she went home. Her daughter says she's been going downhill anyway."`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Delirium is the primary diagnosis — acute onset, fluctuating course, attentional deficit",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "two days of increasing confusion; fluctuating attention; MMSE drop from 21 to 12",
        whyItMatters: "Delirium is characterised by acute onset, fluctuating course, and attentional disturbance. A nine-point drop in MMSE over one month with an acute two-day deterioration is delirium until proven otherwise. Confusing delirium with dementia progression is one of the commonest and most dangerous diagnostic errors in older adult presentations.",
        modelWording: "The acute two-day onset, fluctuating attention, inability to sustain concentration, and nine-point MMSE decline make delirium the primary diagnosis. Delirium requires investigation and treatment of underlying cause — it is never 'just her dementia getting worse.'",
        keywords: ["delirium", "acute onset", "fluctuating", "attentional", "MMSE drop", "nine points", "primary diagnosis", "not dementia", "confusion"],
      },
      {
        id: "s2",
        name: "Oxybutynin as likely precipitant — anticholinergic toxicity in an older adult",
        category: "physical_health",
        severity: "critical",
        clueInStem: "GP recently commenced oxybutynin 5 mg twice daily three weeks ago",
        whyItMatters: "Oxybutynin has high central anticholinergic activity and is a well-recognised precipitant of delirium in older adults, particularly those with pre-existing cognitive impairment. Its introduction three weeks ago precisely correlates with the onset of decline. The medication must be ceased immediately.",
        relatedRisk: "Older adults with any baseline cognitive impairment have markedly increased vulnerability to anticholinergic delirium, which can be prolonged and associated with functional decline.",
        modelWording: "Oxybutynin commenced three weeks ago in a 78-year-old woman with probable underlying cognitive impairment is a high-probability precipitant of her delirium. I will recommend immediate cessation and communicate this clearly to the ED team and to the GP.",
        keywords: ["oxybutynin", "anticholinergic", "precipitant", "cease", "three weeks ago", "medication review", "older adult", "cognitive impairment", "cause"],
      },
      {
        id: "s3",
        name: "Underlying dementia does not explain the acute deterioration",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "both times they said it was her dementia and she went home; MMSE 21 one month ago",
        whyItMatters: "A patient with dementia is at higher risk of delirium, but dementia is not a diagnosis that should absorb acute deteriorations. Previous ED attributions of confusion to dementia may represent prior missed delirium episodes. This pattern of repeated undifferentiated 'dementia' diagnoses must not continue.",
        modelWording: "The pattern of repeated ED presentations labelled as dementia is itself a safety concern. An MMSE of 21 one month ago indicates residual function that is inconsistent with the current state being simply dementia progression. Each acute episode requires its own diagnostic work-up.",
        keywords: ["dementia not explain", "acute deterioration", "prior missed", "delirium on dementia", "not baseline", "diagnostic work-up", "pattern", "repeated presentations"],
      },
      {
        id: "s4",
        name: "Admit for delirium management — discharge is unsafe",
        category: "immediate_safety",
        severity: "important",
        clueInStem: "refusing to eat or take medications; lives alone",
        whyItMatters: "Nora is delirious, not eating, and lives alone. She is unable to safely self-care in her current state. Even if her daughter can provide supervision overnight, return home without resolution of the precipitating cause is unsafe.",
        modelWording: "Nora cannot safely return home tonight. She is refusing food and medications, is disoriented, and lives in a semi-independent setting. Hospital admission for delirium investigation and management is indicated.",
        keywords: ["admit", "not safe to discharge", "delirium", "not eating", "lives alone", "supervision", "inpatient", "unsafe discharge"],
      },
      {
        id: "s5",
        name: "Collateral history from daughter is clinically essential",
        category: "collateral",
        severity: "important",
        clueInStem: "daughter says she has been going downhill anyway",
        whyItMatters: "The daughter's comment that she has been 'going downhill anyway' may reflect the daughter's resignation to a narrative of dementia progression, but it must be systematically explored. The daughter can provide timeline, baseline function, medication history, and prior episodes that cannot be obtained from Nora herself.",
        modelWording: "I must speak with the daughter in detail: What is Nora's baseline function? When did this episode begin? Has this happened before and how did it resolve? What medications has she been taking? The daughter's perception of decline must be carefully interrogated, not simply accepted.",
        keywords: ["daughter", "collateral", "baseline", "timeline", "interrogate", "medications", "function", "prior episodes", "informant"],
      },
      {
        id: "s6",
        name: "Delirium investigation — identify and treat all contributors",
        category: "disposition",
        severity: "important",
        clueInStem: "two days of confusion, refusing medications, not eating",
        whyItMatters: "Delirium is typically multifactorial in older adults. Oxybutynin may be the main precipitant but infection, dehydration, electrolyte disturbance, and undertreated pain should all be screened. A single-cause explanation must not foreclose a systematic work-up.",
        modelWording: "I will recommend a delirium screen: FBC, EUC, LFTs, TFTs, MSU, CXR, and a medication review. I will advise the team on non-pharmacological delirium management: familiar environment, family presence, orientation cues, adequate hydration, and avoiding unnecessary sedation.",
        keywords: ["delirium screen", "infection", "electrolytes", "FBC", "EUC", "MSU", "multifactorial", "non-pharmacological", "medication review", "hydration"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `Nora has delirium. The acute two-day onset, fluctuating attention, nine-point MMSE drop, and distress are not explainable by dementia progression alone. The diagnosis is delirium superimposed on underlying cognitive impairment, and this is a medical emergency requiring investigation and treatment.

The most likely precipitant is oxybutynin — a highly anticholinergic medication commenced three weeks ago in a vulnerable older adult. I will recommend immediate cessation and communicate this to the ED team and the GP in writing. A full delirium work-up (FBC, EUC, TFTs, MSU, CXR) should be completed to exclude infection, electrolyte disturbance, and other contributors.

The pattern of repeated presentations labelled as dementia is a systems concern. Prior episodes may have been missed delirium. Nora cannot safely return home tonight: she is not eating, is refusing medications, and lives semi-independently. I will recommend admission with non-pharmacological delirium management, avoiding sedating medications unless necessary, and involving her daughter in orientation and comfort. I will obtain a thorough collateral history from the daughter to establish her true baseline and trajectory.`,
  },

  {
    id: "ED-004",
    topic: "ed",
    difficulty: "consultant",
    title: "Acute Behavioural Disturbance in ED — Restraint Demand Before Assessment",
    candidateRole: "Psychiatry registrar on call, 11 pm",
    setting: "Regional hospital ED",
    stem: `You receive an urgent call from the ED charge nurse at 11 pm. Jake, a 32-year-old man with a known history of schizophrenia, is in bay 4, shouting and has overturned a chair. He was brought in by his mother after two days of refusing his depot antipsychotic, refusing food, and making threatening comments to her at home. He is not currently assaulting anyone. He is shouting "I know what you're all doing to me — I can see it." Security staff are present at a distance.

The ED consultant comes on the phone and says: "We need him sedated now before you assess him — he's not safe in the department." Jake's mother pulls you aside: she says he had a "very bad experience six months ago — they held him down and injected him — he's been terrified of hospitals since." She says he has been "really well" on his depot until two days ago when something happened at his supported accommodation that upset him. His last risperidone LAI was 22 days ago (prescribed three-weekly).`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "De-escalation before pharmacological restraint — not currently assaulting anyone",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "not currently harming anyone; shouting and overturned a chair; security present",
        whyItMatters: "Pharmacological restraint before any attempt at de-escalation is clinically inappropriate and may be unlawful if a patient is not immediately dangerous. Jake is distressed and psychotic, not imminently violent. Premature chemical restraint forecloses the possibility of an adequate assessment and risks escalating rather than reducing agitation.",
        modelWording: "Jake is not currently assaulting anyone. Before any medication is administered, I will attempt verbal de-escalation: approach calmly, reduce environmental stimulation, address him by name, and acknowledge that he is frightened. I will resist the pressure to sedate before this has been attempted.",
        keywords: ["de-escalation", "not assaulting", "verbal", "calm approach", "before sedation", "least restrictive", "premature restraint", "reduce stimulation"],
      },
      {
        id: "s2",
        name: "Trauma-informed approach — prior traumatic restraint experience",
        category: "trauma",
        severity: "critical",
        clueInStem: "they held him down and injected him — he's been terrified of hospitals since",
        whyItMatters: "Jake has a documented traumatic experience with forcible restraint. Repeating this without attempting alternatives would re-traumatise him, damage the therapeutic relationship, and likely worsen future help-seeking. The mother's information is clinically vital and must shape the approach.",
        modelWording: "Jake's prior experience of forced restraint has caused lasting fear of hospitals. My approach must be explicitly trauma-informed: I will avoid any sudden movements, not approach with a group of staff, speak directly and honestly about what is happening, and seek his agreement at every step before proceeding.",
        keywords: ["trauma-informed", "prior restraint", "terrified", "re-traumatise", "damage relationship", "mother information", "honest", "agreement", "approach"],
      },
      {
        id: "s3",
        name: "Establish diagnosis before treatment — acute relapse versus other cause",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "something happened at supported accommodation; two days ago",
        whyItMatters: "Jake's distress is time-locked to an event at his accommodation two days ago. While relapse due to delayed depot is the leading hypothesis, an acute psychosocial stressor, substance use, or a traumatic event must be considered. Sedation without diagnostic formulation risks missing a treatable cause.",
        modelWording: "I need to understand what happened at Jake's accommodation two days ago — this is the precipitant. While doing so, I will assess for substance use, physical illness, and whether his current mental state represents a relapse, a stress response, or a new presentation. Sedation is not a substitute for diagnosis.",
        keywords: ["precipitant", "accommodation", "what happened", "not just relapse", "stress response", "substance", "diagnosis first", "before sedation", "formulation"],
      },
      {
        id: "s4",
        name: "Depot timing — Jake is within the pharmacokinetic window but at the end of dosing interval",
        category: "physical_health",
        severity: "important",
        clueInStem: "risperidone LAI 22 days ago, prescribed three-weekly",
        whyItMatters: "At 22 days, Jake is near the end of his three-weekly dosing interval. While LAI antipsychotics have tapering rather than abrupt offset, declining plasma levels at the end of the dosing interval can contribute to breakthrough symptoms, particularly under psychosocial stress.",
        modelWording: "Jake's LAI is due and may be contributing to breakthrough symptoms. Once de-escalated, I will discuss depot administration with him, ideally with his agreement. Forced depot in a man with prior traumatic restraint experience should be a last resort after all other measures have failed.",
        keywords: ["LAI", "depot due", "22 days", "three-weekly", "pharmacokinetic", "breakthrough", "plasma level", "administer with agreement"],
      },
      {
        id: "s5",
        name: "Risk to others — mother's safety at home must be assessed",
        category: "risk_others",
        severity: "important",
        clueInStem: "making threatening comments to her at home; brought in by his mother",
        whyItMatters: "Jake made threatening comments to his mother at home over two days. Her safety in the home environment is a relevant risk consideration and must be part of any disposition decision, including whether she can safely return home with him if he is discharged.",
        modelWording: "I must ask Jake's mother directly about the nature and frequency of the threats, whether she felt physically safe, and what has changed in the relationship. Her safety is part of my risk assessment and will influence my recommendation about where Jake goes after this assessment.",
        keywords: ["threatening", "mother", "risk to others", "home safety", "prior two days", "direct assessment", "disposition", "carer safety"],
      },
      {
        id: "s6",
        name: "Mental Health Act — involuntary assessment if Jake cannot engage",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "refusing depot; shouting; psychotic",
        whyItMatters: "If de-escalation fails and Jake cannot or will not engage safely with assessment, a formal mental health act assessment is the appropriate next step. This provides a legal framework for assessment and, if criteria are met, involuntary treatment. It should follow a genuine attempt at voluntary engagement.",
        modelWording: "If Jake cannot be engaged voluntarily after a genuine de-escalation attempt, I will initiate a formal MHA assessment. I will document the de-escalation attempts, the clinical criteria, and the decision-making process clearly. I will inform Jake of this step and explain why.",
        keywords: ["MHA", "mental health act", "involuntary", "criteria", "after de-escalation", "document", "explain to Jake", "formal assessment"],
      },
      {
        id: "s7",
        name: "Mother as collateral and carer — acknowledge her distress",
        category: "family_carer",
        severity: "important",
        clueInStem: "brought in by his mother; she pulls you aside",
        whyItMatters: "Jake's mother has been living with his deterioration for two days, has experienced threats in her home, and has brought him to ED despite his fear. She is providing vital collateral and deserves direct acknowledgement of her distress and clear information about what is happening.",
        modelWording: "I will speak with Jake's mother directly: thank her for bringing him in, acknowledge how difficult the past two days have been, take her account of events seriously, and give her clear information about the process from here. She must not be left waiting in a corridor without acknowledgement.",
        keywords: ["mother", "acknowledge", "distress", "collateral", "carer", "direct", "information", "not left waiting", "thank"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6", "s7"],
      lowYield: [],
    },
    modelAnswer: `Jake is not currently assaulting anyone. Before any medication is given, I will attempt structured verbal de-escalation: approach calmly and alone, reduce environmental noise, address him by name, and acknowledge that he is frightened. I will not approach with a group of staff. The ED consultant's request to sedate before assessment is understandable given departmental pressure, but pharmacological restraint before a genuine de-escalation attempt is clinically and ethically inappropriate when a patient is not immediately violent.

Jake's prior traumatic restraint experience is clinically essential information. Repeating forced restraint risks re-traumatisation and permanently damaging his willingness to engage with services. My approach will be explicitly trauma-informed throughout.

I need to understand what happened at his accommodation two days ago — this is the precipitant and may represent more than simply depot offset. I will assess for acute stressor, substance use, and whether this represents a relapse. His LAI is due and I will offer it with his agreement once he is settled.

I will speak directly with Jake's mother, acknowledge the past two days, and assess her safety at home. If de-escalation fails and Jake cannot engage, I will initiate a formal MHA assessment and document the process clearly. Admission is likely required given the level of disturbance, lack of depot cover, and the home risk to his mother.`,
  },

  {
    id: "ED-005",
    topic: "ed",
    difficulty: "consultant",
    title: "Adolescent NSSI in ED — Safe Discharge, Parental Conflict, Child Protection",
    candidateRole: "On-call CAMHS registrar asked to review by paediatric ED",
    setting: "Paediatric ED, 9 pm on a weeknight",
    stem: `You are the on-call CAMHS registrar. The paediatric ED asks you to review Jade, a 15-year-old girl who presented with superficial lacerations to her forearms. She self-inflicted the cuts with scissors three hours ago. Jade tells you she "snapped" after an argument with her mother and "didn't actually want to die." She denies current suicidal ideation. She has no prior psychiatric presentations.

Her parents are separated. Her mother is crying in the waiting room. Her father arrived 20 minutes later and is demanding Jade be admitted "so the court can see what her mother is doing to her." The two parents are arguing loudly in the corridor. The paediatric ED consultant says: "If she's not suicidal, she should go home tonight — we need the bed."

When you speak to Jade alone, she tells you she has been cutting for approximately four months and has been hiding it. She shows you multiple healed scars. She says she "doesn't feel safe at home" but cannot say more. She becomes tearful when her mother's name is mentioned.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Distinguish chronic NSSI from acute suicidality — both require thorough assessment",
        category: "risk_self",
        severity: "critical",
        clueInStem: "four months of hidden cutting; denies suicidal ideation; multiple healed scars",
        whyItMatters: "Non-suicidal self-injury (NSSI) and suicidality are distinct but related phenomena. Chronic hidden NSSI lasting four months in a 15-year-old indicates significant and ongoing psychological distress, regardless of absent suicidal intent at this moment. NSSI is a significant predictor of future suicidal behaviour and requires structured assessment, not dismissal.",
        modelWording: "Jade's four months of hidden NSSI is clinically significant and requires a thorough assessment, including: function of the self-harm, emotional regulation capacity, triggers, escalation pattern, and any suicidal cognitions that may not be expressed on direct questioning. Absence of current SI does not mean this is low-risk.",
        keywords: ["NSSI", "non-suicidal", "four months", "hidden", "chronic", "healed scars", "significant distress", "not low risk", "predictor", "structured assessment"],
      },
      {
        id: "s2",
        name: "\"I don't feel safe at home\" — this statement must be taken seriously and explored",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "she says she does not feel safe at home; tearful when mother's name is mentioned",
        whyItMatters: "A 15-year-old spontaneously stating she does not feel safe at home is a serious disclosure that cannot be minimised or explained away by parental conflict alone. It may indicate emotional abuse, domestic violence, neglect, or an unsafe home environment. This is a child protection trigger.",
        modelWording: "Jade's statement that she does not feel safe at home, combined with her tearfulness at her mother's name and four months of hidden self-harm, requires direct, gentle exploration. I must ask in a non-leading way what makes home feel unsafe. Her safety on discharge depends entirely on this being clarified.",
        keywords: ["not feel safe", "home unsafe", "explore", "non-leading", "serious disclosure", "direct", "gentle", "clarify", "child protection trigger", "cannot dismiss"],
      },
      {
        id: "s3",
        name: "Child protection — mandatory notification may be required",
        category: "child_protection",
        severity: "critical",
        clueInStem: "does not feel safe at home; parents in conflict; mother covering up months of self-harm",
        whyItMatters: "When a child discloses an unsafe home environment and shows evidence of four months of concealed self-harm in a context of high parental conflict, the threshold for a mandatory child protection notification may be met depending on what further exploration reveals. The duty to notify is the clinician's, not the child's.",
        relatedRisk: "Returning Jade to an unsafe environment on the basis of 'no suicidal ideation' could place her at significant harm.",
        modelWording: "I have a duty to explore Jade's safety concern thoroughly and to consider whether a mandatory child protection notification is required. If my assessment raises a reasonable concern about harm, safety, or neglect, I will notify the relevant child protection authority tonight — I do not need to establish certainty, only reasonable suspicion.",
        keywords: ["child protection", "mandatory notification", "reasonable suspicion", "not certainty", "duty to notify", "safe home", "explore", "tonight", "authority"],
      },
      {
        id: "s4",
        name: "Parental conflict — manage the ED environment and the process",
        category: "family_carer",
        severity: "important",
        clueInStem: "parents arguing loudly in the corridor; father demanding admission for court purposes",
        whyItMatters: "Loud parental conflict in the ED corridor is harmful to Jade and counterproductive to assessment. The father's explicit motivation — admission to support a court case — is not a clinical indication and must not drive the disposition decision. Both parents need to be managed separately and professionally.",
        modelWording: "I will ask nursing staff to separate Jade's parents and provide them each with a private space. I will speak to each parent separately. I will make it clear to the father that clinical decisions are made on the basis of Jade's needs, not family court proceedings. Admission for legal purposes is not a psychiatric indication.",
        keywords: ["separate parents", "parental conflict", "private space", "court not indication", "clinical decision", "Jade's needs", "separately", "manage environment"],
      },
      {
        id: "s5",
        name: "Collateral — four months of hidden self-harm concealed from parents",
        category: "collateral",
        severity: "important",
        clueInStem: "her mother says Jade has been cutting for months and she has been covering it up",
        whyItMatters: "The fact that Jade's mother has been aware of and concealing the self-harm for months raises questions about the family's capacity to respond to her distress and whether disclosure of the self-harm was safe within the family context. This is important collateral that must be explored.",
        modelWording: "I will ask Jade's mother — separately — what she has observed, when she first knew, and why she did not seek help sooner. This may reveal important information about the family dynamics, Jade's reasons for hiding the behaviour, and whether the home environment supports or impedes disclosure of distress.",
        keywords: ["mother aware", "concealed", "covering up", "why not seek help", "family dynamics", "separate", "collateral", "capacity to respond", "disclosure safe"],
      },
      {
        id: "s6",
        name: "Disposition — discharge only if home is safe and a clear follow-up plan exists",
        category: "disposition",
        severity: "important",
        clueInStem: "if she's not suicidal she should go home — bed needed; she says she does not feel safe at home",
        whyItMatters: "Discharge without clarification of home safety and a clear CAMHS follow-up plan is not clinically appropriate. The ED consultant's framing — 'not suicidal, goes home' — applies a binary that is inadequate for chronic NSSI in an adolescent with a safety concern about her home. Admission may be warranted if home safety cannot be established.",
        modelWording: "Discharge tonight is possible only if my assessment clarifies the nature of the home safety concern, establishes that Jade is not at immediate risk, and results in a robust safety plan agreed by Jade and at least one parent. If home safety cannot be established, I will admit under CAMHS for further assessment. I will arrange urgent CAMHS outpatient review within 48–72 hours regardless of disposition.",
        keywords: ["discharge only if safe", "home safety clarified", "safety plan", "CAMHS follow-up", "urgent review", "48 hours", "not binary", "admission if unsafe", "robust plan"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `Jade's presentation requires thorough assessment — not rapid discharge. Four months of hidden NSSI, multiple healed scars, and a spontaneous statement that she does not feel safe at home place this well beyond a simple "not suicidal, send home" decision.

My priority is to explore her home safety statement in a private, non-leading way. This is a potential child protection concern and may require a mandatory notification regardless of what her parents say. I do not need certainty — only reasonable suspicion — to notify. I will consider this after completing the exploration.

I will ask staff to separate Jade's parents and speak to each privately. The father's demand for admission to support a court case is not a clinical indication and I will address this directly with him. I will speak to Jade's mother separately about what she knew, when, and why she did not seek help sooner.

The ED consultant's binary — not suicidal means discharge — does not apply here. Discharge is only appropriate if I can clarify the home safety concern, establish a safety plan with Jade and a parent, and arrange urgent CAMHS follow-up within 48–72 hours. If I cannot establish that home is safe, I will admit under CAMHS for further assessment and to allow time to complete the child protection process appropriately.`,
  },
];
