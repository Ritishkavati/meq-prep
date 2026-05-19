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
    modelAnswer: `Risk formulation:

Treat this as high contextual suicide risk despite denial. Weight concealment, possible means, job loss, alcohol, burdensomeness and giving away possessions.

Assessment:

Assess intent, planning, access to means, intoxication, depression, shame, protective factors and capacity to collaborate. Obtain collateral from ex-wife, police, GP and workplace where appropriate.

Immediate safety:

Prevent premature departure until risk assessment complete. Remove means and consider observation.

Disposition:

If acute risk remains high or assessment unreliable, consider admission/involuntary assessment depending on jurisdiction. Do not discharge based only on calm presentation or denial.

Documentation:

Record why denial is unreliable, collateral, means, dynamic risks and rationale for disposition.`,
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
    modelAnswer: `Immediate safety:

Prioritise partner and child safety, not only Victor's mental state. Liaise with police/family violence services and consider child protection notification.

Risk to others:

Treat threats involving children as serious and specific. Assess access to weapons, alcohol, stalking, separation, prior violence and breach risk.

Self-risk:

Assess suicide risk but recognise suicide threats may also be coercive control.

Assessment:

Obtain separate collateral from partner and police. Do not rely on Victor's minimising account.

Disposition:

Do not support return home unless safety risks are addressed. Consider involuntary assessment/admission if mental disorder plus risk criteria met.

Treatment:

Avoid diazepam as simple solution; address alcohol, PTSD/depression and violence risk.`,
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
    modelAnswer: `What went wrong:

Dynamic risk signs were not integrated: burdensomeness, pacing, tearfulness and online suicide searching. Collateral was not weighted adequately. Denial of suicidal ideation was overvalued.

Discharge failure:

Custody hearing was treated as protective but may have been an acute stressor. No family meeting, safety plan or community handover was documented.

Governance:

Lead a just culture review, not blame. Review discharge decision-making, collateral escalation, senior review and documentation standards.

Learning:

Require risk formulation rather than "low risk/denies SI." Strengthen transition-of-care processes for high-risk discharge.

Staff/family:

Support staff distress. Manage family communication through open disclosure/review process.`,
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
    modelAnswer: `Risk/physical health:

Recognise severe self-neglect: unsafe environment, spoiled food, urine smell, missed appointments and weight loss. Assess urgent medical risks: diabetes complications, infection, dehydration, malnutrition.

Capacity:

Assess decision-specific capacity to refuse blood tests, home care and hospital assessment. Focus on understanding and appreciation of diabetes/self-neglect consequences.

Formulation:

Assess dementia, depression, delirium, grief and social isolation.

Management:

Engage respectfully and use least restrictive supports first. Involve GP, daughter, aged care assessment, social work and community nursing. If incapacity plus serious risk, consider emergency assessment/guardianship pathways.

Documentation:

Record home conditions, capacity findings, risks, refusals, collateral and legal rationale.`,
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
    modelAnswer: `Immediate safety:

Treat weapon-related behaviour and persecutory beliefs as significant acute risk. Ensure means removal, police collateral and safe ED containment.

Risk formulation:

Violence risk is defensive and psychosis-driven despite denial of intent. Assess access to weapons, target identification, substance use, sleep deprivation and command hallucinations.

Diagnosis:

Assess first episode psychosis versus cannabis-induced psychosis. Three-month decline suggests emerging psychotic disorder.

Family/disposition:

Mother cannot safely supervise tonight. Routine discharge with follow-up is insufficient if active psychosis and weapon-related risk persist. Consider admission/involuntary assessment if criteria met.

Treatment:

Engage youth-friendly approach, involve family, commence early psychosis pathway and address cannabis use.`,
  },
];
