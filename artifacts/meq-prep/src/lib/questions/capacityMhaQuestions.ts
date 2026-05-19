import { QuizStem } from "../quizData";

export const CAP_STEMS: QuizStem[] = [
  {
    id: "CAP-001",
    topic: "capacity_mha",
    difficulty: "consultant",
    title: "Refusal of dialysis during psychotic relapse",
    candidateRole: "Consultant psychiatrist, consultation-liaison psychiatry service",
    setting: "Metropolitan tertiary hospital renal ward",
    stem: `You are the on-call consultant psychiatrist for the consultation-liaison psychiatry team in a metropolitan tertiary hospital.

Raj is a 42-year-old man with schizoaffective disorder and end-stage renal failure requiring haemodialysis. He was brought to hospital by ambulance after missing three dialysis sessions. The renal team report worsening confusion, hyperkalaemia, and fluid overload. Raj is refusing dialysis and repeatedly attempting to leave the ward. Nursing staff describe him as intermittently irritable and internally preoccupied.

During your assessment, Raj states, "The machine is poisoning my blood because the government has tagged me." He says dialysis staff are "working with immigration." He inconsistently acknowledges having kidney disease and says, "I can survive naturally if I pray properly." He refuses blood tests and says he will "take full responsibility" if he dies. His sister says he stopped antipsychotic medication three weeks ago after becoming suspicious of the community team.

The renal consultant wants immediate dialysis under sedation because "he could arrest tonight." Security staff are concerned after Raj attempted to push past staff near the exit. The ward NUM says staff morale is deteriorating because "every shift turns into a restraint discussion." Raj's sister is distressed and asks, "Can't you force treatment if he's psychotic?"`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Psychotic beliefs impairing treatment understanding",
        category: "capacity",
        severity: "critical",
        clueInStem: "The machine is poisoning my blood because the government has tagged me.",
        whyItMatters: "Delusional beliefs directly distort appreciation and reasoning regarding dialysis refusal. Missing this risks falsely accepting capacitous refusal in a life-threatening emergency.",
        modelWording: "Assess whether persecutory delusions are impairing Raj's ability to understand, appreciate and weigh information regarding dialysis refusal.",
        keywords: ["persecutory delusion", "impaired appreciation", "dialysis refusal", "psychotic reasoning", "capacity assessment"],
      },
      {
        id: "s2",
        name: "Immediate medical risk requiring urgent decision-making",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "he could arrest tonight.",
        whyItMatters: "Life-threatening hyperkalaemia creates urgency regarding substitute decision-making, emergency treatment authority, and least restrictive intervention.",
        modelWording: "Clarify immediate medical risk and whether emergency treatment can proceed under common law or relevant guardianship/MHA provisions.",
        keywords: ["hyperkalaemia", "medical emergency", "common law", "urgent treatment", "least restrictive"],
      },
      {
        id: "s3",
        name: "Fluctuating cognition and possible delirium contribution",
        category: "capacity",
        severity: "important",
        clueInStem: "The renal team report worsening confusion",
        whyItMatters: "Uraemia and metabolic disturbance may contribute to impaired cognition, worsening capacity and behavioural dysregulation.",
        modelWording: "Assess for delirium or uraemic encephalopathy contributing to fluctuating capacity and behavioural disturbance.",
        keywords: ["delirium", "uraemic encephalopathy", "fluctuating capacity", "cognition", "metabolic disturbance"],
      },
      {
        id: "s4",
        name: "Need for coordinated multidisciplinary containment",
        category: "system_pressure",
        severity: "important",
        clueInStem: "every shift turns into a restraint discussion",
        whyItMatters: "Escalating staff conflict and repeated restraint discussions indicate governance, safety and trauma-informed care risks.",
        modelWording: "Provide coordinated MDT leadership regarding behavioural management, restraint thresholds and staff communication.",
        keywords: ["MDT leadership", "restraint minimisation", "behavioural disturbance", "governance", "staff support"],
      },
      {
        id: "s5",
        name: "Medication non-adherence preceding relapse",
        category: "capacity",
        severity: "important",
        clueInStem: "he stopped antipsychotic medication three weeks ago",
        whyItMatters: "Temporal relationship supports psychotic relapse contributing to incapacity and informs treatment planning.",
        modelWording: "Review recent antipsychotic non-adherence and relationship to deterioration in insight and decision-making.",
        keywords: ["non-adherence", "psychotic relapse", "insight", "schizoaffective disorder", "treatment refusal"],
      },
      {
        id: "s6",
        name: "Family distress and substitute decision-making expectations",
        category: "family_carer",
        severity: "optional",
        clueInStem: "Can't you force treatment if he's psychotic?",
        whyItMatters: "Family may misunderstand legal thresholds for involuntary treatment and capacity-based refusal.",
        modelWording: "Provide psychoeducation regarding capacity, involuntary treatment thresholds and emergency treatment processes.",
        keywords: ["family psychoeducation", "substitute decision-maker", "capacity law", "involuntary treatment", "communication"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `1. Urgently assess Raj's decision-making capacity regarding dialysis because refusal may lead to imminent cardiac arrest from hyperkalaemia.

2. Clarify whether persecutory delusions are impairing his ability to:
- understand dialysis information
- appreciate consequences of refusal
- weigh risks and benefits
- communicate a stable choice

3. Assess for delirium/uraemic encephalopathy because metabolic disturbance may further impair cognition and fluctuate capacity.

4. Liaise immediately with renal team regarding:
- degree of medical urgency
- reversibility of metabolic disturbance
- alternatives to restraint
- timing of dialysis

5. If Raj lacks capacity and risk is life-threatening:
- consider emergency treatment under common law/guardianship framework
- review whether Mental Health Act applies due to psychotic illness contributing to refusal
- use least restrictive approach

6. Optimise behavioural containment:
- low stimulus environment
- senior nursing allocation
- avoid repeated confrontational discussions
- security available but non-provocative presence

7. Consider treatment of psychosis:
- recommence antipsychotic medication
- oral route first where possible
- sedation only if required for immediate safety/treatment

8. Provide MDT leadership regarding:
- restraint thresholds
- documentation
- trauma-informed approach
- consistent communication plan

9. Involve sister with consent where possible:
- obtain collateral
- explain legal framework
- discuss risks and treatment rationale

10. Document clearly:
- capacity findings
- psychotic content affecting reasoning
- emergency risk
- legal basis for intervention
- least restrictive considerations`,
  },
  {
    id: "CAP-002",
    topic: "capacity_mha",
    difficulty: "consultant",
    title: "Pregnant woman refusing admission during mania",
    candidateRole: "Consultant psychiatrist, emergency perinatal psychiatry liaison",
    setting: "Metropolitan emergency department",
    stem: `You are the consultant psychiatrist overseeing the emergency department mental health team overnight.

Maya is a 31-year-old Aboriginal woman who is 33 weeks pregnant and was brought to ED by police after attempting to enter a closed childcare centre at 2am stating she needed to "protect the chosen children." Her partner reports she has slept less than two hours per night for the past week and has stopped lithium because "spirits told her the medication was killing the baby."

Maya is loud, intrusive and intermittently tearful. She repeatedly states, "You doctors want to steal my baby like they stole my cousin's kids." She refuses fetal monitoring, blood tests and psychiatric admission. During assessment she says, "I don't need sleep because my ancestors are preparing me for a mission." She denies suicidality but tells staff, "If anyone touches my stomach I'll fight back."

Obstetrics request urgent assessment because of hypertension and reduced fetal movements. Police want to leave. The ED NUM says staff are anxious after Maya attempted to slap a midwife who approached with monitoring equipment. Maya's mother says, "Hospital always makes our mob worse."`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Manic psychosis impairing treatment decisions",
        category: "capacity",
        severity: "critical",
        clueInStem: "I don't need sleep because my ancestors are preparing me for a mission.",
        whyItMatters: "Grandiose and psychotic beliefs may impair appreciation of obstetric and psychiatric risks.",
        modelWording: "Assess whether manic psychosis is impairing Maya's ability to weigh risks regarding obstetric and psychiatric treatment.",
        keywords: ["manic psychosis", "grandiosity", "impaired judgement", "capacity", "treatment refusal"],
      },
      {
        id: "s2",
        name: "Dual maternal and fetal risk",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "Obstetrics request urgent assessment because of hypertension and reduced fetal movements.",
        whyItMatters: "Untreated psychiatric illness and obstetric complications create competing emergency priorities.",
        modelWording: "Prioritise maternal stabilisation and urgent obstetric assessment because fetal wellbeing may be compromised.",
        keywords: ["maternal risk", "fetal compromise", "obstetric emergency", "perinatal psychiatry", "urgent assessment"],
      },
      {
        id: "s3",
        name: "Trauma-informed and culturally safe engagement",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "You doctors want to steal my baby like they stole my cousin's kids.",
        whyItMatters: "Historical trauma and mistrust may escalate behavioural disturbance if handled coercively.",
        modelWording: "Use culturally safe and trauma-informed engagement recognising intergenerational mistrust of services.",
        keywords: ["cultural safety", "intergenerational trauma", "Aboriginal health", "trauma-informed", "engagement"],
      },
      {
        id: "s4",
        name: "Behavioural escalation risk",
        category: "immediate_safety",
        severity: "important",
        clueInStem: "If anyone touches my stomach I'll fight back.",
        whyItMatters: "Threats combined with agitation elevate risk to staff and may necessitate containment planning.",
        modelWording: "Assess and manage escalating aggression risk while minimising coercive interventions.",
        keywords: ["behavioural disturbance", "aggression risk", "containment", "staff safety", "least restrictive"],
      },
      {
        id: "s5",
        name: "Medication cessation preceding relapse",
        category: "capacity",
        severity: "important",
        clueInStem: "she has stopped lithium",
        whyItMatters: "Stopping mood stabiliser likely contributed to relapse and informs treatment planning.",
        modelWording: "Review medication cessation and discuss risk-benefit considerations of perinatal mood stabilisation.",
        keywords: ["lithium cessation", "bipolar relapse", "perinatal treatment", "risk-benefit", "non-adherence"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: [],
    },
    modelAnswer: `1. Prioritise immediate safety of Maya, fetus, staff and others in ED.

2. Assess decision-making capacity regarding:
- psychiatric admission
- obstetric assessment
- refusal of monitoring/treatment

3. Determine whether manic psychosis is impairing:
- appreciation of risk
- reasoning
- judgement
- ability to weigh consequences

4. Liaise urgently with obstetrics regarding:
- hypertension
- fetal movement concerns
- maternal medical stability
- safest location of care

5. Use culturally safe engagement:
- involve Aboriginal Liaison Officer
- validate mistrust and fears
- avoid confrontational approach
- include family/supports where appropriate

6. If lacking capacity and risks significant:
- consider involuntary treatment under Mental Health Act
- apply least restrictive principles
- explain decisions clearly and repeatedly

7. Optimise behavioural management:
- low stimulus area
- senior staff involvement
- oral medication first line where possible
- security available but not provocative

8. Consider acute pharmacological treatment for mania/agitation balancing maternal-fetal risks.

9. Support staff and coordinate MDT communication to reduce inconsistent approaches and escalation.

10. Document:
- capacity findings
- risks to mother/fetus
- cultural considerations
- rationale for involuntary measures
- discussions with obstetrics and family`,
  },
  {
    id: "CAP-003",
    topic: "capacity_mha",
    difficulty: "consultant",
    title: "Dementia patient refusing residential placement",
    candidateRole: "Consultant psychiatrist, old age community mental health service",
    setting: "Regional hospital geriatric assessment ward",
    stem: `You are the consultant psychiatrist for an old age psychiatry service in a regional hospital.

Margaret is a 79-year-old woman with moderate Alzheimer's disease admitted after wandering onto a highway at night looking for her deceased husband. She was found dehydrated and confused by police. Occupational therapy assessment has identified significant safety concerns including leaving the stove on, medication mismanagement and repeated falls.

Margaret insists on returning home alone and says, "I've managed perfectly for years and everyone is exaggerating." During assessment she repeatedly asks why she is in hospital and cannot recall recent events. She becomes distressed when staff discuss residential care and says, "You're trying to lock me away." Her son states he can no longer supervise her because she has recently assaulted him when he attempted to stop her driving.

The geriatrician believes discharge home would be unsafe. The nursing unit manager reports increasing tension between staff and family after Margaret attempted to leave the ward twice overnight. Her son asks, "Can I just sign the papers to force her into a nursing home?"`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Impaired retention and insight affecting capacity",
        category: "capacity",
        severity: "critical",
        clueInStem: "she repeatedly asks why she is in hospital",
        whyItMatters: "Inability to retain information undermines capacity regarding accommodation and care decisions.",
        modelWording: "Assess whether cognitive impairment prevents Margaret retaining and weighing information about discharge risks.",
        keywords: ["retention impairment", "Alzheimer disease", "capacity", "lack of insight", "accommodation decision"],
      },
      {
        id: "s2",
        name: "High community safety risk",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "wandering onto a highway at night",
        whyItMatters: "Severe wandering and disorientation create immediate risk to life if discharged unsupported.",
        modelWording: "Recognise significant vulnerability and public safety risk associated with wandering and impaired judgement.",
        keywords: ["wandering", "vulnerability", "public safety", "falls risk", "unsafe discharge"],
      },
      {
        id: "s3",
        name: "Conflict regarding substitute decision-making",
        category: "family_carer",
        severity: "important",
        clueInStem: "Can I just sign the papers to force her into a nursing home?",
        whyItMatters: "Family may misunderstand legal authority and guardianship processes.",
        modelWording: "Clarify legal framework regarding substitute decision-making, guardianship and restrictive placement.",
        keywords: ["guardianship", "substitute decision-maker", "residential care", "legal authority", "family conflict"],
      },
      {
        id: "s4",
        name: "Behavioural disturbance during care discussions",
        category: "risk_vulnerable",
        severity: "important",
        clueInStem: "You're trying to lock me away.",
        whyItMatters: "Perceived coercion may worsen distress, absconding risk and aggression.",
        modelWording: "Use supportive and non-confrontational communication to minimise behavioural escalation.",
        keywords: ["behavioural disturbance", "absconding", "distress", "non-confrontational", "dementia care"],
      },
      {
        id: "s5",
        name: "Caregiver burnout and violence risk",
        category: "system_pressure",
        severity: "important",
        clueInStem: "she has recently assaulted him",
        whyItMatters: "Caregiver strain affects discharge feasibility and risk management.",
        modelWording: "Assess caregiver burden and sustainability of community supports before discharge planning.",
        keywords: ["caregiver burnout", "violence risk", "community supports", "family strain", "discharge planning"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: [],
    },
    modelAnswer: `1. Assess Margaret's capacity regarding accommodation and care decisions.

2. Clarify whether dementia impairs her ability to:
- understand risks
- retain information
- weigh options
- communicate consistent choices

3. Review cognitive findings, OT assessment and collateral history because functional risk is central to discharge planning.

4. Recognise high risk associated with:
- wandering
- falls
- medication mismanagement
- unsafe driving
- self-neglect

5. Determine whether discharge home is feasible with supports or whether restrictive alternatives are required.

6. Clarify legal framework:
- guardianship pathways
- substitute decision-making limits
- least restrictive care principles

7. Engage Margaret supportively:
- avoid repeated confrontational correction
- validate distress
- minimise escalation around placement discussions

8. Assess caregiver burden and family conflict because this affects sustainability of home care.

9. Coordinate MDT planning involving:
- geriatric medicine
- OT
- social work
- nursing
- family meeting

10. Document:
- cognitive deficits affecting capacity
- functional risks
- rationale for discharge recommendations
- legal considerations
- family discussions`,
  },
  {
    id: "CAP-004",
    topic: "capacity_mha",
    difficulty: "consultant",
    title: "Young man refusing surgery after methamphetamine psychosis",
    candidateRole: "Consultant psychiatrist, emergency consultation-liaison psychiatry",
    setting: "Major trauma hospital emergency department",
    stem: `You are the overnight consultant psychiatrist covering the emergency department of a major trauma hospital.

Liam is a 24-year-old man admitted after a motorcycle crash resulting in an open tibial fracture. Orthopaedics recommend urgent surgery to prevent limb loss. Liam repeatedly attempts to leave the department despite severe pain and visible bleeding. Toxicology is positive for methamphetamine and cannabis.

During assessment Liam states, "The surgeons are harvesting organs for the dark web." He says the police caused the crash by "tracking him through satellites." He alternates between agitation and drowsiness. He refuses surgery and says, "I'd rather lose my leg than let them cut me open." His girlfriend says he has not slept for four days and became paranoid after a methamphetamine binge.

The orthopaedic consultant says surgery cannot be delayed much longer. ED staff are requesting sedation after Liam threw a urine bottle at a nurse. Security staff report he briefly attempted to abscond through the ambulance bay.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Psychosis impairing consent for surgery",
        category: "capacity",
        severity: "critical",
        clueInStem: "The surgeons are harvesting organs for the dark web.",
        whyItMatters: "Persecutory delusions directly affect understanding and reasoning regarding urgent surgery.",
        modelWording: "Assess whether substance-induced psychosis is impairing Liam's capacity to refuse surgery.",
        keywords: ["substance-induced psychosis", "persecutory delusion", "capacity refusal", "urgent surgery", "impaired reasoning"],
      },
      {
        id: "s2",
        name: "Time-critical medical emergency",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "urgent surgery to prevent limb loss",
        whyItMatters: "Delay may cause irreversible harm requiring urgent substitute decision-making.",
        modelWording: "Clarify urgency of surgery and legal basis for emergency treatment if Liam lacks capacity.",
        keywords: ["limb-threatening injury", "emergency treatment", "urgent surgery", "common law", "irreversible harm"],
      },
      {
        id: "s3",
        name: "Possible delirium and intoxication fluctuation",
        category: "capacity",
        severity: "important",
        clueInStem: "He alternates between agitation and drowsiness.",
        whyItMatters: "Intoxication, exhaustion or head injury may further impair cognition and capacity.",
        modelWording: "Assess for delirium, intoxication or head injury contributing to fluctuating mental state.",
        keywords: ["delirium", "intoxication", "fluctuating consciousness", "methamphetamine", "cognitive impairment"],
      },
      {
        id: "s4",
        name: "Escalating violence and absconding risk",
        category: "immediate_safety",
        severity: "important",
        clueInStem: "he threw a urine bottle at a nurse",
        whyItMatters: "Behavioural escalation requires coordinated safety planning and least restrictive containment.",
        modelWording: "Implement behavioural management plan balancing staff safety and trauma-informed care.",
        keywords: ["violence risk", "behavioural disturbance", "absconding", "containment", "staff safety"],
      },
      {
        id: "s5",
        name: "Substance-induced deterioration",
        category: "substance_use",
        severity: "important",
        clueInStem: "became paranoid after a methamphetamine binge",
        whyItMatters: "Temporal relationship supports stimulant-induced psychosis and informs prognosis.",
        modelWording: "Clarify contribution of methamphetamine use to acute psychosis and impaired decision-making.",
        keywords: ["methamphetamine psychosis", "stimulant use", "paranoia", "substance-induced", "acute behavioural disturbance"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: [],
    },
    modelAnswer: `1. Prioritise immediate safety and urgent assessment of Liam's capacity regarding surgery refusal.

2. Assess whether psychosis and intoxication impair:
- understanding
- appreciation
- reasoning
- ability to communicate consistent choice

3. Clarify urgency and reversibility of orthopaedic injury with surgical team.

4. Consider whether emergency treatment can proceed under common law/emergency doctrine if capacity absent.

5. Assess for contributing delirium, intoxication or head injury due to fluctuating consciousness.

6. Manage behavioural disturbance:
- low stimulus area
- coordinated team approach
- oral medication first where feasible
- sedation/restraint only if necessary

7. Liaise with ED, orthopaedics and security regarding:
- absconding risk
- procedural timing
- behavioural escalation plan

8. Treat psychosis/agitation while minimising respiratory compromise and over-sedation.

9. Obtain collateral regarding baseline mental state and substance history.

10. Document:
- capacity assessment
- psychotic content
- emergency risks
- legal rationale
- least restrictive considerations`,
  },
  {
    id: "CAP-005",
    topic: "capacity_mha",
    difficulty: "consultant",
    title: "Adolescent refusing treatment after overdose",
    candidateRole: "Consultant psychiatrist, child and adolescent consultation-liaison service",
    setting: "Regional emergency department",
    stem: `You are the consultant psychiatrist supervising a child and adolescent psychiatry registrar in a regional emergency department.

Sophie is a 16-year-old boarding school student brought to hospital after ingesting an unknown quantity of paracetamol and fluoxetine. Initially she denied overdose and told staff she was "just tired." Four hours later she admitted taking tablets because "there was no point being here anymore." She now refuses blood tests and says she wants to return to school immediately.

During assessment Sophie states, "I know my liver could fail but that's my decision." She becomes angry when admission is discussed and says, "Everyone keeps overreacting." Her teacher has already returned to the boarding school. Her aunt, who is her emergency contact, says Sophie "always says dramatic things" and supports discharge if Sophie promises not to overdose again.

The ED consultant is concerned because the timing and quantity of overdose remain unclear. Nursing staff report Sophie attempted to remove her IV line and leave the cubicle twice. Your registrar asks whether Sophie can refuse treatment because she appears articulate and "understands what we're saying."`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Capacity assessment in suicidal adolescent",
        category: "capacity",
        severity: "critical",
        clueInStem: "I know my liver could fail but that's my decision.",
        whyItMatters: "Apparent verbal understanding does not automatically establish capacity, particularly during suicidal crisis.",
        modelWording: "Assess whether acute suicidality, emotional dysregulation or hopelessness impair Sophie's ability to weigh consequences.",
        keywords: ["Gillick competence", "suicidal intent", "capacity assessment", "adolescent refusal", "weighing information"],
      },
      {
        id: "s2",
        name: "Potentially life-threatening overdose",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "the timing and quantity of overdose remain unclear",
        whyItMatters: "Uncertain overdose details may require urgent treatment before deterioration occurs.",
        modelWording: "Prioritise medical stabilisation and toxicology assessment because delayed treatment may cause hepatic failure.",
        keywords: ["paracetamol overdose", "medical emergency", "toxicology", "hepatic failure", "urgent treatment"],
      },
      {
        id: "s3",
        name: "Minimisation and fluctuating disclosure",
        category: "risk_self",
        severity: "important",
        clueInStem: "Initially she denied overdose",
        whyItMatters: "Changing history may indicate ongoing ambivalence, concealment or impaired judgement.",
        modelWording: "Recognise inconsistent disclosure as concerning for unreliable risk appraisal and ongoing suicide risk.",
        keywords: ["ambivalence", "concealment", "suicide risk", "inconsistent history", "minimisation"],
      },
      {
        id: "s4",
        name: "Family and carer minimisation",
        category: "family_carer",
        severity: "important",
        clueInStem: "always says dramatic things",
        whyItMatters: "Collateral may underestimate risk and create unsafe discharge pressure.",
        modelWording: "Balance collateral information with objective risk assessment and avoid premature discharge decisions.",
        keywords: ["family minimisation", "unsafe discharge", "collateral", "adolescent risk", "protective factors"],
      },
      {
        id: "s5",
        name: "Behavioural indicators of ongoing risk",
        category: "immediate_safety",
        severity: "important",
        clueInStem: "attempted to remove her IV line and leave the cubicle twice",
        whyItMatters: "Attempted absconding may indicate impaired judgement and inability to engage safely in care.",
        modelWording: "Assess absconding risk and need for containment while maintaining therapeutic engagement.",
        keywords: ["absconding risk", "behavioural disturbance", "engagement", "containment", "acute risk"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: [],
    },
    modelAnswer: `1. Prioritise Sophie's immediate medical safety and toxicology assessment.

2. Assess decision-making capacity/Gillick competence regarding refusal of treatment.

3. Clarify whether suicidality, hopelessness, emotional dysregulation or intoxication impair her ability to:
- appreciate consequences
- weigh risks
- make stable decisions

4. Recognise that articulate communication alone does not establish capacity.

5. Liaise urgently with ED regarding:
- overdose timing
- paracetamol nomogram requirements
- need for NAC treatment
- monitoring requirements

6. Assess ongoing suicide risk including:
- ambivalence
- concealment
- impulsivity
- intent
- future orientation

7. Manage absconding risk:
- safe observation level
- supportive engagement
- minimise coercion where possible

8. Obtain further collateral from:
- school
- family
- GP/mental health providers
- child protection if relevant

9. If capacity impaired and treatment refusal creates significant risk:
- consider involuntary assessment/treatment pathways applicable to minors
- use least restrictive care

10. Supervise registrar regarding:
- distinction between understanding and capacity
- documentation standards
- risk formulation
- legal framework

11. Document:
- overdose uncertainty
- capacity findings
- suicide risk
- rationale for treatment decisions
- collateral inconsistencies`,
  },
];
