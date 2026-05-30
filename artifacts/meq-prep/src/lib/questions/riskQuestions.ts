import type { QuizStem } from "../quizData";

export const RISK_STEMS: QuizStem[] = [
  {
    id: "RISK-001",
    questionNumber: "MEQ-033",
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
        name: "Strategic denial makes self-report unreliable",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Mr Cole denies suicidal ideation and says, \"I'm not stupid enough to say anything that gets me locked up.\"",
        whyItMatters: "Missing this signal means the candidate has accepted denial of suicidal ideation despite Mr Cole explicitly suggesting he may conceal intent to avoid being detained.",
        modelWording: "Recognise strategic denial as unreliable, because Mr Cole's own words show he understands how to avoid disclosure during a risk assessment.",
        keywords: ["suicide denial", "concealment", "dynamic risk", "self-report", "contextual risk", "ED assessment"],
      },
      {
        id: "s2",
        name: "Car-based means suggest preparatory behaviour",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Police found a hose and tape in the boot of his car, which he says were \"for gardening.\"",
        whyItMatters: "Missing this signal means the candidate has treated possible carbon-monoxide preparation as an innocent explanation despite the surrounding suicide-risk context.",
        modelWording: "Treat the hose and tape as possible preparatory behaviour, because they were found in his car after prolonged sitting outside the workplace linked to his acute shame.",
        keywords: ["preparatory behaviour", "means", "suicide plan", "carbon monoxide", "police collateral", "lethality"],
      },
      {
        id: "s3",
        name: "Job loss after misconduct creates acute shame risk",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "He lost his job two weeks ago after an investigation into misconduct.",
        whyItMatters: "Missing this signal means the candidate has ignored the acute shame, occupational loss and identity threat that make his current presentation more dangerous.",
        modelWording: "Formulate the job loss and misconduct investigation as acute shame precipitants, because they provide the emotional context for the car-based preparatory behaviour.",
        keywords: ["job loss", "shame", "separation", "acute stressor", "male suicide", "precipitant"],
      },
      {
        id: "s4",
        name: "Heavy alcohol use increases near-term suicide risk",
        category: "substance_use",
        severity: "important",
        clueInStem: "His ex-wife reports he has been drinking heavily, giving away tools and saying, \"The kids will be better off without me.\"",
        whyItMatters: "Missing this signal means the candidate has not accounted for alcohol-related disinhibition and impulsivity in a man with possible preparation and acute shame.",
        modelWording: "Assess intoxication, withdrawal and alcohol dependence because heavy drinking can convert suicidal thoughts and preparation into immediate action.",
        keywords: ["alcohol", "impulsivity", "disinhibition", "suicide risk", "intoxication", "withdrawal"],
      },
      {
        id: "s5",
        name: "Collateral describes burdensomeness and giving away possessions",
        category: "collateral",
        severity: "important",
        clueInStem: "His ex-wife reports he has been drinking heavily, giving away tools and saying, \"The kids will be better off without me.\"",
        whyItMatters: "Missing this signal means the candidate has failed to integrate collateral evidence of burdensomeness and possible preparation that contradicts Mr Cole's denial.",
        modelWording: "Give the ex-wife's collateral substantial weight, because giving away tools and saying the children would be better off without him are behavioural warning signs.",
        keywords: ["collateral", "burdensomeness", "giving away possessions", "ex-wife", "warning signs"],
      },
      {
        id: "s6",
        name: "ED crowding must not lower the discharge threshold",
        category: "system_pressure",
        severity: "optional",
        clueInStem: "The ED is overcrowded, and Mr Cole wants to leave.",
        whyItMatters: "Missing this signal means the candidate has allowed access pressure and the patient's wish to leave to replace a defensible risk formulation.",
        modelWording: "Acknowledge ED pressure while basing disposition on the suicide-risk formulation, because overcrowding is not a clinical reason to discharge him.",
        keywords: ["ED overcrowding", "disposition", "unsafe discharge", "access block", "risk formulation"],
      },
      {
        id: "s7",
        name: "Legal framework may be needed if he attempts to leave",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "The registrar says he is calm, denies intent and does not meet criteria for admission.",
        whyItMatters: "Missing this signal means the candidate has accepted a superficial criteria assessment without considering lawful detention or further assessment when concealed suicide risk remains high.",
        modelWording: "Consider the relevant Mental Health Act if Mr Cole tries to leave before assessment is complete, because strategic denial and possible preparation may meet the threshold for involuntary assessment.",
        keywords: ["mental health act", "wants to leave", "involuntary assessment", "criteria", "lawful detention", "least restrictive", "complete assessment"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5", "s7"],
      lowYield: ["s6"],
    },
    modelAnswer: `Mr Cole should be treated as a high-risk presentation despite his calmness and denial of suicidal ideation. His statement, "I'm not stupid enough to say anything that gets me locked up," is not reassuring; it suggests strategic concealment. A consultant-level formulation cannot rely on self-report when the patient's own words indicate that he may be managing the assessment to avoid admission or detention.

The behavioural context is highly concerning. Police found "a hose and tape in the boot of his car" after he had been sitting in his car outside his former workplace for several hours. In isolation, hose and tape might be explained away, but in this context they are possible preparatory behaviour for a car-based suicide method. The job loss two weeks earlier after an investigation into misconduct adds acute shame, occupational loss and identity threat.

The ex-wife's collateral substantially changes the risk formulation. She reports heavy drinking, giving away tools and the statement, "The kids will be better off without me." These are not minor background details; they indicate disinhibition, burdensomeness and possible preparation. Her fear also matters. She says she cannot remain involved because "he blames me for everything," so she should not be treated as a safe discharge support or asked to supervise him.

My immediate plan would be to prevent premature departure while the assessment is completed, secure the hose and tape, clarify the police circumstances, assess intoxication and withdrawal, and ask about other means such as medications, firearms, garages or additional car equipment. I would assess mood, shame, sleep, hopelessness, prior attempts, psychosis, capacity to collaborate and whether there have been goodbye messages, financial arrangements or further preparatory acts.

The legal and disposition question turns on whether risk can be reduced and whether he can collaborate honestly. If he remains guarded, intoxicated, has ongoing access to means or tries to leave before assessment is complete, I would consider the relevant Mental Health Act for involuntary assessment using the least restrictive lawful option. If discharge were eventually considered, it would require more than a denial of intent: means restriction, safe accommodation away from acute triggers, reliable support other than the frightened ex-wife, alcohol risk management, rapid follow-up and a written crisis plan. ED overcrowding is a system pressure, not a clinical justification for unsafe discharge.`,
  },
  {
    id: "RISK-002",
    questionNumber: "MEQ-034",
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
        name: "Threat involving the children indicates serious family violence risk",
        category: "risk_others",
        severity: "critical",
        clueInStem: "His partner reports escalating controlling behaviour, threats to kill himself if she leaves, and yesterday he said, \"If I can't have the kids, no one will.\"",
        whyItMatters: "Missing this signal means the candidate has treated a possible threat to the partner and children as ordinary distress rather than a high-risk family violence warning.",
        modelWording: "Treat the threat involving the children as serious risk to others, because it implies retaliatory harm in a separation and custody context.",
        keywords: ["domestic violence", "familicide risk", "threats to children", "risk to partner", "coercive control", "violence risk"],
      },
      {
        id: "s2",
        name: "Partner and children need immediate safety planning",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "His partner is in the waiting room with two young children and says she is afraid to go home.",
        whyItMatters: "Missing this signal means the candidate has focused on Victor's symptoms while leaving identifiable vulnerable people without an immediate safety plan.",
        modelWording: "Prioritise the partner and children's safety by involving police, family violence services and child protection pathways where indicated.",
        keywords: ["victim safety", "children", "family violence services", "police", "child protection", "safety planning"],
      },
      {
        id: "s3",
        name: "Victor is minimising coercive control",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "Victor says, \"I only grabbed her phone because she was trying to ruin my life.\"",
        whyItMatters: "Missing this signal means the candidate has relied on Victor's minimising account rather than recognising coercive control and entitlement.",
        modelWording: "Recognise the phone-grabbing explanation as minimisation of coercive control, because he reframes controlling behaviour as justified by grievance.",
        keywords: ["coercive control", "minimisation", "partner collateral", "domestic abuse", "risk formulation"],
      },
      {
        id: "s4",
        name: "Alcohol dependence and weapon access increase lethality",
        category: "substance_use",
        severity: "important",
        clueInStem: "Victor has access to hunting knives and has recently been sleeping in his car outside the family home.",
        whyItMatters: "Missing this signal means the candidate has not integrated alcohol-related disinhibition, weapon access and proximity to the victim into the violence-risk formulation.",
        modelWording: "Assess intoxication, withdrawal and access to hunting knives because alcohol dependence and weapons increase the likelihood of serious harm.",
        keywords: ["alcohol dependence", "weapons", "hunting knives", "impulsivity", "violence risk", "disinhibition"],
      },
      {
        id: "s5",
        name: "Suicide threats may be both self-risk and coercive control",
        category: "risk_self",
        severity: "important",
        clueInStem: "His partner reports escalating controlling behaviour, threats to kill himself if she leaves, and yesterday he said, \"If I can't have the kids, no one will.\"",
        whyItMatters: "Missing this signal means the candidate has separated suicide risk from family violence rather than recognising their interaction in this presentation.",
        modelWording: "Assess suicide risk while recognising that threats to kill himself if she leaves may also function as coercive control and escalation.",
        keywords: ["suicide threats", "coercive control", "self-harm", "relationship separation", "risk formulation"],
      },
      {
        id: "s6",
        name: "Diazepam may worsen disinhibition and violence risk",
        category: "physical_health",
        severity: "optional",
        clueInStem: "Victor denies intent to harm anyone and says he just needs diazepam.",
        whyItMatters: "Missing this signal means the candidate has offered a disinhibiting medication as a quick solution in a man with alcohol dependence and violence risk.",
        modelWording: "Avoid reflexive diazepam prescribing unless treating supervised withdrawal, because benzodiazepines may worsen disinhibition, sedation and risk.",
        keywords: ["diazepam", "benzodiazepine", "alcohol", "disinhibition", "sedation", "violence"],
      },
      {
        id: "s7",
        name: "Sleeping outside the family home suggests stalking and escalation",
        category: "risk_others",
        severity: "important",
        clueInStem: "Victor has access to hunting knives and has recently been sleeping in his car outside the family home.",
        whyItMatters: "Missing this signal means the candidate has not recognised that remaining outside the family home indicates proximity, monitoring and escalation rather than simple homelessness.",
        modelWording: "Clarify stalking, monitoring and breaches of boundaries because sleeping outside the family home may indicate escalating family violence risk.",
        keywords: ["sleeping in car", "outside family home", "stalking", "monitoring", "proximity", "escalation", "family violence"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5", "s7"],
      lowYield: ["s6"],
    },
    modelAnswer: `Victor's presentation must be treated as a family violence and child safety emergency, not merely as an individual suicide-risk assessment. His partner reports escalating controlling behaviour, threats to kill himself if she leaves, and the statement, "If I can't have the kids, no one will." That phrase is a serious threat involving his partner and children in a separation context, and I would not minimise it because he later denies intent.

The partner and children are identifiable vulnerable people who need immediate safety planning. She is in the waiting room with two young children and says she is afraid to go home. They should be kept physically separate from Victor, not placed in a joint interview or mediation process, and the plan should involve police, family violence services and child protection pathways where indicated.

Victor's account is minimising. Saying "I only grabbed her phone because she was trying to ruin my life" reframes coercive control as a justified response to grievance. His psychiatric diagnoses may be relevant to formulation and treatment, but PTSD, depression and alcohol dependence must not be used to excuse or obscure family violence.

The dynamic risk factors are serious: alcohol dependence, access to hunting knives, sleeping in his car outside the family home, threats involving the children and his partner's fear. Sleeping outside the family home may indicate monitoring, stalking or escalation, not simply lack of accommodation. I would ask police about prior callouts, protection orders, stalking, strangulation, breaches, weapon access and whether he has tried to approach the partner or children.

The request for diazepam requires caution. If he is in alcohol withdrawal, he needs medically supervised withdrawal management. If he is distressed but not withdrawing, benzodiazepines may worsen disinhibition, sedation and impulsivity, so they should not be used as a quick behavioural solution.

Disposition cannot be based on Victor's denial alone. He should not return to the family home unless police and family violence services have established a safety plan for his partner and children. If mental disorder is contributing to serious risk and he refuses voluntary care, I would consider the relevant Mental Health Act, but I would also recognise that family violence risk may require police and family violence responses even if psychiatric admission criteria are not met.`,
  },
  {
    id: "RISK-003",
    questionNumber: "MEQ-035",
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
        name: "Burdensomeness and distress were missed before discharge",
        category: "risk_self",
        severity: "critical",
        clueInStem: "However, nursing notes from the day before discharge recorded that she was pacing, tearful and said, \"My children would be safer without me.\"",
        whyItMatters: "Missing this signal means the candidate has accepted discharge despite documented affective distress and burdensomeness immediately before death.",
        modelWording: "Identify the pacing, tearfulness and burdensomeness statement as acute dynamic suicide risk requiring senior review before discharge.",
        keywords: ["burdensomeness", "dynamic risk", "suicide warning", "discharge risk", "bipolar disorder", "distress"],
      },
      {
        id: "s2",
        name: "Partner collateral showed method research",
        category: "collateral",
        severity: "critical",
        clueInStem: "Her partner had phoned the ward saying she had been searching online for \"painless ways to die.\"",
        whyItMatters: "Missing this signal means the candidate has failed to integrate collateral evidence of possible planning into the discharge formulation.",
        modelWording: "Give the partner's report of online suicide-method searching decisive weight because it contradicts a simple denial-based discharge plan.",
        keywords: ["collateral", "online searching", "suicide planning", "partner call", "risk formulation"],
      },
      {
        id: "s3",
        name: "The discharge summary relied on denial rather than formulation",
        category: "governance",
        severity: "important",
        clueInStem: "The discharge summary stated, \"Nina denied suicidal ideation and requested discharge.\"",
        whyItMatters: "Missing this signal means the candidate has treated a recorded denial as a defensible risk formulation despite contradictory ward and family information.",
        modelWording: "Critique the discharge documentation because it records denial without reconciling the nursing notes, partner collateral and post-discharge risk period.",
        keywords: ["denial", "documentation", "contradictory evidence", "defensible formulation", "suicide review"],
      },
      {
        id: "s4",
        name: "Custody hearing was an acute stressor, not simple future focus",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "The registrar documented that Nina had capacity and was \"future focused\" because she wanted to attend a custody hearing.",
        whyItMatters: "Missing this signal means the candidate has mistaken a potentially destabilising custody event for a protective factor.",
        modelWording: "Formulate the custody hearing as both future orientation and acute stressor, because it may have intensified shame, fear and perceived burdensomeness.",
        keywords: ["custody hearing", "future focus", "acute stressor", "bipolar disorder", "family court"],
      },
      {
        id: "s5",
        name: "Transition-of-care safeguards were absent",
        category: "disposition",
        severity: "important",
        clueInStem: "There was no documented family meeting, safety plan or handover to community team.",
        whyItMatters: "Missing this signal means the candidate has not identified that the discharge occurred without the basic safeguards needed for a high-risk transition.",
        modelWording: "Identify the absent family meeting, safety plan and community handover as transition failures because Nina had unresolved dynamic risk at discharge.",
        keywords: ["transition of care", "safety plan", "handover", "family meeting", "post-discharge risk"],
      },
      {
        id: "s6",
        name: "The review must support staff while identifying systems learning",
        category: "governance",
        severity: "optional",
        clueInStem: "Staff are upset and asking whether anything could have been done differently.",
        whyItMatters: "Missing this signal means the candidate may conduct either a blame-focused review or an avoidant review that fails to support staff and improve systems.",
        modelWording: "Lead a just-culture review that supports staff distress while examining discharge reasoning, collateral escalation and system safeguards.",
        keywords: ["just culture", "M&M review", "systems learning", "staff support", "governance"],
      },
      {
        id: "s7",
        name: "Alcohol misuse increased post-discharge suicide vulnerability",
        category: "substance_use",
        severity: "important",
        clueInStem: "You are the consultant psychiatrist asked to lead a review after Nina, a 34-year-old woman with bipolar disorder and alcohol misuse, died by suicide three days after discharge from the acute ward.",
        whyItMatters: "Missing this signal means the candidate has omitted a dynamic disinhibition and relapse factor in the immediate post-discharge period.",
        modelWording: "Review how alcohol misuse was assessed and managed before discharge because it increases impulsivity, mood instability and near-term suicide risk.",
        keywords: ["alcohol misuse", "post-discharge", "disinhibition", "bipolar", "relapse", "suicide risk", "transition"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5", "s7"],
      lowYield: ["s6"],
    },
    modelAnswer: `Nina's death should be reviewed as a serious adverse event in which the central failure appears to be failure to integrate dynamic risk information into the discharge decision. The discharge summary statement, "Nina denied suicidal ideation and requested discharge," is not a risk formulation. It records one part of the assessment while failing to reconcile contradictory information available before discharge.

The nursing notes from the day before discharge recorded that Nina was pacing, tearful and said, "My children would be safer without me." That statement indicates burdensomeness in a distressed patient with bipolar disorder and alcohol misuse. It should have triggered senior review and a revised formulation rather than routine discharge.

The partner's phone call that Nina had been searching online for "painless ways to die" is even more concerning. It is collateral evidence of possible method research and planning. A defensible discharge decision would need to explain why that information did not alter the plan, especially given the first days after discharge are a high-risk period.

I would also challenge the registrar's statement that Nina was "future focused" because she wanted to attend a custody hearing. In this case, the hearing may have been protective in one sense, but it may also have intensified fear, shame and perceived burdensomeness about her children. It should not have been used as a simple reassurance.

The absence of a family meeting, safety plan or handover to community team is a major transition-of-care failure. Alcohol misuse should also have been addressed because it can increase impulsivity, worsen mood instability and undermine a safety plan in the days after discharge. A safer discharge would have required partner involvement where appropriate, means restriction, rapid community follow-up, a plan for the custody-hearing stressor and explicit handover of the partner's warning call.

As review lead, I would preserve records, construct a factual timeline and conduct a just-culture review that supports distressed staff while identifying learning. I would not call the death simply unpredictable, but I would also avoid scapegoating. The family should be contacted through open disclosure and bereavement/postvention processes, and the final review should make concrete recommendations about collateral escalation, consultant review before high-risk discharge, discharge documentation and community handover.`,
  },
  {
    id: "RISK-004",
    questionNumber: "MEQ-036",
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
        name: "Severe self-neglect is objectively evident in the home",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "The house smells strongly of urine, there is spoiled food in the kitchen, and neighbours report she has been leaving the front door open overnight.",
        whyItMatters: "Missing this signal means the candidate has treated serious environmental neglect as lifestyle choice rather than foreseeable harm.",
        modelWording: "Recognise severe self-neglect from the home conditions, because urine odour, spoiled food and open doors indicate impaired self-care and environmental danger.",
        keywords: ["self-neglect", "environmental risk", "spoiled food", "vulnerability", "home safety", "malnutrition"],
      },
      {
        id: "s2",
        name: "Capacity to refuse care is decision-specific and questionable",
        category: "capacity",
        severity: "critical",
        clueInStem: "She has lost weight, missed diabetes appointments and cannot explain her insulin regimen.",
        whyItMatters: "Missing this signal means the candidate has accepted refusal of care without testing whether Mrs Singh understands essential diabetes treatment and risks.",
        modelWording: "Assess decision-specific capacity to refuse blood tests, home care and hospital assessment because she cannot explain the insulin regimen central to her safety.",
        keywords: ["capacity", "refusal of care", "diabetes", "insulin", "decision-specific", "self-care"],
      },
      {
        id: "s3",
        name: "Diabetes and weight loss create urgent medical risk",
        category: "physical_health",
        severity: "important",
        clueInStem: "She has lost weight, missed diabetes appointments and cannot explain her insulin regimen.",
        whyItMatters: "Missing this signal means the candidate has focused on psychiatric refusal while overlooking malnutrition, glycaemic instability and possible infection or dehydration.",
        modelWording: "Assess urgent physical health risks including glycaemic instability, dehydration, infection and malnutrition because her diabetes care has broken down.",
        keywords: ["diabetes", "weight loss", "infection", "dehydration", "medical assessment", "frailty"],
      },
      {
        id: "s4",
        name: "Cognitive decline, depression or delirium may be driving self-neglect",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "The GP is worried about cognitive decline and depression, but Mrs Singh refuses blood tests, home care and hospital assessment.",
        whyItMatters: "Missing this signal means the candidate has treated refusal as personality or independence without assessing treatable drivers of self-neglect.",
        modelWording: "Assess cognition, depression, delirium and grief because reversible or treatable illness may be impairing insight and self-care.",
        keywords: ["dementia", "depression", "delirium", "grief", "poor insight", "self-neglect"],
      },
      {
        id: "s5",
        name: "Refusal requires least restrictive engagement and possible legal escalation",
        category: "consent_refusal",
        severity: "important",
        clueInStem: "The GP is worried about cognitive decline and depression, but Mrs Singh refuses blood tests, home care and hospital assessment.",
        whyItMatters: "Missing this signal means the candidate has either abandoned Mrs Singh to risk or moved too quickly to coercion without testing capacity and least restrictive options.",
        modelWording: "Use least restrictive engagement first, while considering guardianship or emergency assessment if incapacity and serious harm are present.",
        keywords: ["refusal", "home care", "least restrictive", "guardianship", "hospital assessment", "autonomy"],
      },
      {
        id: "s6",
        name: "Interstate daughter can clarify baseline and values",
        category: "family_carer",
        severity: "optional",
        clueInStem: "Her daughter lives interstate and says, \"Mum will never agree to help, but she was always independent.\"",
        whyItMatters: "Missing this signal means the candidate has not distinguished lifelong independence from recent functional decline and loss of capacity.",
        modelWording: "Obtain collateral from the daughter and GP to distinguish long-standing values from new cognitive, mood or functional deterioration.",
        keywords: ["collateral", "daughter", "baseline functioning", "functional decline", "independence"],
      },
      {
        id: "s7",
        name: "Leaving the front door open creates immediate environmental vulnerability",
        category: "immediate_safety",
        severity: "important",
        clueInStem: "The house smells strongly of urine, there is spoiled food in the kitchen, and neighbours report she has been leaving the front door open overnight.",
        whyItMatters: "Missing this signal means the candidate has overlooked immediate risks of exposure, intrusion, exploitation and wandering in a vulnerable older adult.",
        modelWording: "Address the open-door risk immediately by arranging practical safety measures, because the environmental danger may persist even while capacity assessment continues.",
        keywords: ["front door", "overnight", "environmental vulnerability", "exploitation", "wandering", "home safety", "immediate safety"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5", "s7"],
      lowYield: ["s6"],
    },
    modelAnswer: `Mrs Singh's presentation should be treated as severe self-neglect with possible impaired capacity, not as a simple lifestyle choice. The home smells strongly of urine, there is spoiled food in the kitchen and neighbours report that she leaves the front door open overnight. Those objective findings create risks of malnutrition, infection, falls, exploitation, exposure and intrusion.

Her statement, "I am managing perfectly; everyone should mind their own business," is not enough to establish capacitous refusal. She has lost weight, missed diabetes appointments and cannot explain her insulin regimen. That raises a specific capacity question about whether she understands and can weigh the consequences of refusing blood tests, home care and hospital assessment.

I would assess urgent physical health risk, including glycaemic instability, dehydration, infection, malnutrition and medication mismanagement. I would also assess for dementia, delirium, depression and grief, because self-neglect in an older widow may reflect treatable illness rather than merely a strong preference for independence.

The daughter living interstate is important collateral. Her statement that her mother was "always independent" may reflect a long-standing value, but it may also obscure recent decline. I would obtain a timeline from the daughter, GP and neighbours about baseline functioning, weight loss, medication use, bills, memory, falls, alcohol use, bereavement, paranoia and vulnerability to exploitation.

The plan should begin with least restrictive engagement. I would ask what Mrs Singh fears about help, frame support around preserving independence, involve the GP, and offer practical steps such as diabetes review, community nursing, meals, cleaning, falls assessment and urgent home safety measures for the open-door risk. If she lacks capacity and serious risk persists, I would consider emergency medical assessment, guardianship or other local legal pathways. If she has capacity, I would respect refusal while continuing harm reduction, documented follow-up and review.`,
  },
  {
    id: "RISK-005",
    questionNumber: "MEQ-037",
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
        name: "Persecutory belief creates defensive violence risk",
        category: "risk_others",
        severity: "critical",
        clueInStem: "Jayden denies wanting to hurt anyone but says, \"If they come through the ceiling, I'll protect myself.\"",
        whyItMatters: "Missing this signal means the candidate has accepted denial of violent intent without recognising psychosis-driven defensive aggression.",
        modelWording: "Formulate violence risk as defensive and psychosis-linked, because Jayden may act to protect himself from a delusional threat.",
        keywords: ["persecutory delusions", "defensive violence", "risk to others", "first episode psychosis", "threat perception"],
      },
      {
        id: "s2",
        name: "Baseball bat behaviour requires immediate containment",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "Jayden is a 19-year-old man brought to ED by police after neighbours reported him shouting on the street with a baseball bat.",
        whyItMatters: "Missing this signal means the candidate has considered routine follow-up despite recent weapon involvement in active psychosis.",
        modelWording: "Treat the baseball bat incident as an immediate safety issue requiring weapon removal, low-stimulus assessment and safe containment.",
        keywords: ["weapon access", "baseball bat", "violence risk", "means removal", "containment", "police"],
      },
      {
        id: "s3",
        name: "Three-month decline suggests first-episode psychosis",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "His mother reports three months of social withdrawal, cannabis use, poor sleep and increasing suspicion.",
        whyItMatters: "Missing this signal means the candidate has accepted cannabis intoxication without recognising longitudinal functional decline and emerging psychosis.",
        modelWording: "Assess first-episode psychosis versus cannabis-induced psychosis, because three months of withdrawal, poor sleep and suspicion suggest a developing psychotic disorder.",
        keywords: ["first episode psychosis", "functional decline", "social withdrawal", "differential diagnosis", "early psychosis"],
      },
      {
        id: "s4",
        name: "Cannabis may amplify psychosis and violence risk",
        category: "substance_use",
        severity: "important",
        clueInStem: "His mother reports three months of social withdrawal, cannabis use, poor sleep and increasing suspicion.",
        whyItMatters: "Missing this signal means the candidate has either blamed cannabis alone or ignored it as a dynamic risk amplifier.",
        modelWording: "Assess cannabis use as a contributor to paranoia, sleep disruption and relapse risk while avoiding premature diagnostic closure.",
        keywords: ["cannabis", "substance-induced psychosis", "paranoia", "disinhibition", "risk modifier"],
      },
      {
        id: "s5",
        name: "Mother cannot provide safe supervision tonight",
        category: "family_carer",
        severity: "important",
        clueInStem: "His mother is frightened and says, \"He has never been like this before, but I can't take him home tonight.\"",
        whyItMatters: "Missing this signal means the candidate has proposed discharge to a carer who is frightened and explicitly unable to supervise him.",
        modelWording: "Do not discharge Jayden to his mother tonight, because she is frightened and states she cannot safely manage him at home.",
        keywords: ["family supervision", "carer fear", "unsafe discharge", "home risk", "support capacity"],
      },
      {
        id: "s6",
        name: "Routine outpatient follow-up is inadequate tonight",
        category: "disposition",
        severity: "optional",
        clueInStem: "The registrar asks whether this is simply cannabis intoxication and whether Jayden can be discharged with early psychosis follow-up.",
        whyItMatters: "Missing this signal means the candidate has substituted future early psychosis care for immediate containment of active weapon-related risk.",
        modelWording: "Consider admission or intensive crisis containment rather than routine follow-up, because active persecutory psychosis and weapon behaviour make discharge unsafe tonight.",
        keywords: ["early psychosis follow-up", "admission", "crisis containment", "outpatient plan", "active psychosis"],
      },
      {
        id: "s7",
        name: "The upstairs neighbours are a specific perceived target",
        category: "risk_others",
        severity: "important",
        clueInStem: "He says, \"The people upstairs are sending signals into my room.\"",
        whyItMatters: "Missing this signal means the candidate has treated violence risk as general rather than recognising a specific delusional focus on the upstairs neighbours.",
        modelWording: "Clarify risk to the upstairs neighbours specifically, because Jayden's delusion identifies them as the perceived source of threat.",
        keywords: ["upstairs", "neighbours", "signals", "specific target", "perceived threat", "delusional focus", "violence risk"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5", "s7"],
      lowYield: ["s6"],
    },
    modelAnswer: `Jayden should not be discharged with routine early psychosis follow-up tonight. He has active persecutory psychosis linked to weapon-related defensive violence risk. His statement, "If they come through the ceiling, I'll protect myself," means the risk is not organised around declared intent to harm but around perceived self-defence against a delusional threat.

The baseball bat behaviour requires immediate containment. He was brought in by police after shouting in the street with a baseball bat, and police report he swung the bat at a neighbour's door. Even though he did not strike anyone, the combination of active persecutory beliefs, poor sleep and weapon use creates an immediate risk to others.

The upstairs neighbours appear to be a specific perceived target. Jayden says, "The people upstairs are sending signals into my room," so I would ask whether he has approached them, threatened them, damaged property, searched for them or planned to confront them. Risk to those neighbours should be assessed directly, not treated as a vague or general concern.

The diagnostic formulation should remain open but not minimising. The registrar's cannabis-intoxication question is understandable, yet the mother reports three months of social withdrawal, cannabis use, poor sleep and increasing suspicion. That pattern suggests first-episode psychosis or an emerging primary psychotic disorder, with cannabis as a possible precipitant or amplifier rather than a complete explanation.

His mother is frightened and says, "I can't take him home tonight." Discharge to her care would be unsafe and unfair. I would obtain collateral from her and police, remove weapons, assess Jayden in a low-stimulus environment, and consider voluntary admission or crisis stabilisation. If he refuses and serious risk persists, I would consider involuntary assessment under the relevant Mental Health Act. Early psychosis follow-up is important, but it cannot substitute for immediate containment when psychosis, sleep deprivation, weapon behaviour and lack of safe supervision are all present.`,
  },
];
