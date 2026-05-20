import { QuizStem } from "../quizData";

export const RU_STEMS: QuizStem[] = [
  {
    id: "RU-001",
    topic: "rural",
    difficulty: "consultant",
    title: "Remote Aboriginal community, acute psychosis and RFDS activation",
    candidateRole: "Consultant psychiatrist providing remote telepsychiatry support",
    setting: "Remote Aboriginal community clinic with nursing post",
    stem: `You are the consultant psychiatrist contacted by a remote area nurse from an Aboriginal community.

Jarran is a 24-year-old Aboriginal man brought to the clinic by family after walking through the community at night yelling, "The old people are telling me to burn the store." The clinic has no antipsychotic medication available and the nearest inpatient unit is 900 km away. The nurse says police are two hours away and asks whether to activate RFDS.

Jarran's uncle says he may have used cannabis and "something from town." The community elder says, "Don't send him away without family; he won't trust hospital." The nurse is worried because several children were near the store when Jarran was shouting.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Immediate risk to community and children",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "burn the store.",
        whyItMatters: "Threatened arson in a remote community creates risk to children, others and essential community infrastructure.",
        modelWording: "Prioritise immediate community safety, including children near the store, fire risk, supervision and removing ignition sources.",
        keywords: ["acute psychosis", "arson threat", "store", "children", "community safety", "fire risk", "remote community", "immediate safety"],
      },
      {
        id: "s2",
        name: "Culturally safe transfer planning",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "Don't send him away without family; he won't trust hospital.",
        whyItMatters: "Evacuation without family/cultural support may worsen trauma, mistrust and absconding risk.",
        modelWording: "If RFDS transfer is required, plan culturally safe escort, family involvement and receiving-hospital cultural liaison.",
        keywords: ["RFDS", "cultural escort", "family involvement", "Aboriginal health", "transfer", "trust", "cultural liaison", "remote"],
      },
      {
        id: "s3",
        name: "No medication and resource limitation",
        category: "system_pressure",
        severity: "important",
        clueInStem: "no antipsychotic medication available",
        whyItMatters: "Lack of medication changes safety planning and threshold for retrieval/escalation.",
        modelWording: "Account for medication unavailability and limited local containment when deciding RFDS activation and emergency response.",
        keywords: ["no medication", "resource limitation", "remote clinic", "retrieval", "containment", "RFDS activation", "clinical logistics"],
      },
      {
        id: "s4",
        name: "Substance contribution",
        category: "substance_use",
        severity: "important",
        clueInStem: "something from town.",
        whyItMatters: "Substance intoxication may worsen psychosis and aggression and affects sedation/medical assessment.",
        modelWording: "Assess cannabis and other substance use as contributors to psychosis and risk, while avoiding diagnostic closure.",
        keywords: ["cannabis", "substance-induced psychosis", "intoxication", "something from town", "methamphetamine", "risk", "diagnostic uncertainty"],
      },
      {
        id: "s5",
        name: "Legal authority for transport/treatment",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "asks whether to activate RFDS.",
        whyItMatters: "Involuntary transport may require statutory assessment and coordination with police/RFDS.",
        modelWording: "Clarify legal authority for involuntary assessment, emergency sedation and transport under local Mental Health Act processes.",
        keywords: ["Mental Health Act", "involuntary transport", "RFDS", "police", "remote assessment", "legal authority", "emergency sedation"],
      },
      {
        id: "s6",
        name: "Family and elder collateral",
        category: "collateral",
        severity: "optional",
        clueInStem: "The community elder says",
        whyItMatters: "Elder/family input informs culturally safe risk management and baseline functioning.",
        modelWording: "Use uncle and elder collateral for baseline, cultural meaning, substance exposure and safe engagement strategy.",
        keywords: ["elder", "uncle", "collateral", "baseline", "cultural meaning", "family", "community", "engagement"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Jarran's presentation must be managed as an acute safety problem in a remote context, not as a routine psychosis assessment waiting for ideal resources. The phrase "The old people are telling me to burn the store" is immediately concerning because it involves a possible command or culturally framed experience linked to arson. In a remote community, the store is essential infrastructure and there were "several children" nearby. I would first advise the nurse to create immediate distance between Jarran, children, the store and any ignition sources, using calm family support if safe.

The cultural formulation requires care. The phrase "old people" may have cultural meaning, psychotic meaning, or both. I would not dismiss it as delusional without Aboriginal health or elder input, but I would also not ignore the arson risk because cultural language is used. The elder's statement, "Don't send him away without family; he won't trust hospital," is clinically important. If RFDS transfer is needed, I would plan culturally safe transfer with family escort where feasible, receiving-hospital Aboriginal liaison, and communication with the community about return planning.

The resource constraints are decisive. The clinic has "no antipsychotic medication available," one remote nurse, police two hours away and the nearest inpatient unit 900 km away. Those facts make local containment fragile. I would advise RFDS activation if risk cannot be safely managed locally, and I would make the risk rationale explicit: threatened arson, possible psychosis, intoxication uncertainty, children nearby and lack of medication/staffing. I would not ask the nurse to hold an unsafe situation overnight merely because transfer is difficult.

Substance use must be assessed because the uncle says Jarran may have used cannabis and "something from town." That could mean methamphetamine or another substance contributing to psychosis and agitation. However, substance-induced psychosis is not safer simply because it is substance-related. I would ask about timing, intoxication, withdrawal, head injury, fever, delirium and prior episodes while keeping immediate safety as the priority.

Legal authority needs clarification. If Jarran refuses assessment or transport and serious risk persists, the team may need Mental Health Act processes for involuntary assessment, sedation or transport, coordinated with police and RFDS. Any sedation must be clinically indicated, monitored and feasible in the remote setting. My documentation would record risk, cultural consultation, family/elder views, resource limitations, legal basis and transfer rationale. The consultant role is to protect the community and Jarran while avoiding unnecessary culturally unsafe removal.`,
  },
  {
    id: "RU-002",
    topic: "rural",
    difficulty: "consultant",
    title: "Rural ED overdose, no beds and telehealth supervision",
    candidateRole: "Consultant psychiatrist providing after-hours telehealth supervision",
    setting: "Small rural emergency department overnight",
    stem: `You are the consultant psychiatrist on call by telehealth for a small rural ED.

Maddie is a 19-year-old woman who took 40 paracetamol tablets after a breakup and now says, "I just want to go home and sleep." The ED GP says NAC has started, but there are no psychiatric beds anywhere in the region. The only mental health clinician on site is a first-year nurse who says, "I've never done an overnight suicide watch."

Maddie's father is a local police officer and says, "Everyone knows us here; don't put this in her record." Maddie is Aboriginal and asks for her auntie, but her auntie lives 90 minutes away. The ED GP asks whether she can be discharged with phone follow-up once medically cleared.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "High-risk overdose requires medical and psychiatric containment",
        category: "risk_self",
        severity: "critical",
        clueInStem: "40 paracetamol tablets",
        whyItMatters: "Large overdose with minimisation requires ongoing medical treatment and suicide risk assessment before discharge.",
        modelWording: "Treat this as high-risk self-poisoning requiring completion of medical management and direct suicide risk formulation.",
        keywords: ["paracetamol overdose", "40 tablets", "NAC", "suicide risk", "self-poisoning", "medical clearance", "minimisation", "rural ED"],
      },
      {
        id: "s2",
        name: "Unsafe local observation capacity",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "I've never done an overnight suicide watch.",
        whyItMatters: "No bed plus inexperienced staff creates unsafe observation unless additional supports are arranged.",
        modelWording: "Do not assume the rural ED can safely contain her without senior supervision, observation plan and escalation pathway.",
        keywords: ["suicide watch", "rural ED", "inexperienced staff", "observation", "no beds", "telehealth supervision", "containment", "safety"],
      },
      {
        id: "s3",
        name: "Cultural support request",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "asks for her auntie",
        whyItMatters: "Auntie may be culturally and emotionally protective; absence should be actively addressed.",
        modelWording: "Facilitate contact with auntie by phone/video and consider delayed discharge until culturally safe support is available.",
        keywords: ["auntie", "Aboriginal support", "cultural safety", "family support", "protective factor", "video call", "kinship", "rural"],
      },
      {
        id: "s4",
        name: "Confidentiality pressure from local police father",
        category: "ethics",
        severity: "important",
        clueInStem: "don't put this in her record.",
        whyItMatters: "Rural stigma/confidentiality concerns are real but cannot justify false or absent documentation.",
        modelWording: "Acknowledge confidentiality concerns but explain clinically relevant information must be documented accurately.",
        keywords: ["confidentiality", "rural stigma", "police father", "medical record", "documentation", "privacy", "ethics", "small town"],
      },
      {
        id: "s5",
        name: "Telehealth consultant responsibility",
        category: "governance",
        severity: "important",
        clueInStem: "on call by telehealth",
        whyItMatters: "Consultant must provide clear remote leadership, not vague advice to inexperienced staff.",
        modelWording: "Provide explicit telehealth supervision: observation level, reassessment timing, escalation triggers and disposition criteria.",
        keywords: ["telehealth", "consultant supervision", "remote advice", "governance", "escalation", "disposition criteria", "rural psychiatry"],
      },
      {
        id: "s6",
        name: "Premature discharge risk",
        category: "disposition",
        severity: "optional",
        clueInStem: "discharged with phone follow-up",
        whyItMatters: "Phone follow-up alone may be unsafe after high-lethality overdose and limited supports.",
        modelWording: "Do not discharge solely with phone follow-up unless medical clearance, risk reduction, supervision and follow-up are robust.",
        keywords: ["phone follow-up", "discharge", "medical clearance", "safety plan", "supervision", "rural follow-up", "means restriction"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Maddie's overdose should be treated as a high-risk medical and psychiatric presentation despite rural bed scarcity. Taking "40 paracetamol tablets" is potentially lethal, and the fact that she now says, "I just want to go home and sleep," should not reassure the team. Patients often minimise after overdose, particularly when frightened, ashamed or wanting to escape assessment. I would advise that she must complete NAC and medical monitoring before any psychiatric disposition is finalised.

The rural system limitation is acute because there are no psychiatric beds and the only clinician on site is a first-year nurse who says, "I've never done an overnight suicide watch." That statement means the proposed containment plan may not be clinically deliverable. No bed does not equal safe discharge, but equally a rural ED cannot be assumed to provide safe psychiatric observation without support. I would give explicit telehealth consultant instructions: observation level, environmental safety, removal of means, reassessment times, escalation triggers, when to call police/security, and when transfer to a medical or mental health unit is required.

Maddie asks for her auntie, and that is not a minor comfort request. As an Aboriginal young woman in a rural ED, culturally safe support may improve engagement and reduce risk. If her auntie is 90 minutes away, I would facilitate phone or video contact immediately and consider whether safe discharge might later involve the auntie rather than the father. I would also seek Aboriginal health support if available.

The father's request, "Everyone knows us here; don't put this in her record," reflects rural stigma and confidentiality fears, but it cannot be honoured literally. I would acknowledge the concern, explain privacy protections, and make clear that clinically relevant information must be documented accurately. The fact that he is a local police officer also creates possible power dynamics and confidentiality sensitivity. I would ensure Maddie has private space to speak without him and ask whom she wants involved.

The discharge question must be answered after medical clearance, risk formulation and support assessment. Phone follow-up alone is not adequate after a large paracetamol overdose unless acute risk is clearly reduced and supervision is robust. I would assess intent, planning, regret, triggers, alcohol/substance use, access to tablets, prior self-harm, family conflict and protective factors. If she remains high risk or cannot be safely observed locally, I would escalate for transfer even if no psychiatric bed is immediately available. My documentation would state why bed scarcity and local familiarity did not lower the threshold for safety, and what culturally safe supports and rural contingencies were put in place.`,
  },
  {
    id: "RU-003",
    topic: "rural",
    difficulty: "consultant",
    title: "Rural complex PTSD and telehealth limitations",
    candidateRole: "Consultant psychiatrist, regional community mental health service",
    setting: "Rural community clinic with telehealth psychology access only",
    stem: `You are the consultant psychiatrist in a regional service reviewing Emma, a 42-year-old woman with complex PTSD after prolonged childhood abuse and intimate partner violence.

Emma says, "Every new clinician asks me to tell the worst parts again and then they leave." There is no local trauma specialist, and the only funded option is telehealth psychology. Emma has unreliable internet, lives on the same property as her ex-partner's family and says, "If they hear me talking on video, I'm not safe."

The GP has been prescribing alprazolam for years and asks psychiatry to "take over the scripts." Emma's teenage daughter has stopped attending school to stay home with her mother. The local service manager wants discharge after one assessment because "we don't provide long-term therapy here."`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Re-traumatisation from repeated assessments",
        category: "trauma",
        severity: "critical",
        clueInStem: "Every new clinician asks me to tell the worst parts again and then they leave.",
        whyItMatters: "Repeated trauma retelling without continuity worsens symptoms and destroys trust.",
        modelWording: "Avoid repeated detailed trauma retelling; provide continuity, stabilisation and a shared formulation before trauma processing.",
        keywords: ["complex PTSD", "re-traumatisation", "continuity", "stabilisation", "trauma-informed care", "repeated assessments", "trust", "therapy"],
      },
      {
        id: "s2",
        name: "Telehealth is unsafe if privacy absent",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "If they hear me talking on video, I'm not safe.",
        whyItMatters: "Telehealth may increase family violence risk if privacy and safety cannot be assured.",
        modelWording: "Do not assume telehealth is safe; assess privacy, safe location, technology access and family violence risk first.",
        keywords: ["telehealth", "privacy", "family violence", "safe location", "rural", "technology access", "safety planning", "complex PTSD"],
      },
      {
        id: "s3",
        name: "Benzodiazepine dependence risk",
        category: "substance_use",
        severity: "important",
        clueInStem: "prescribing alprazolam for years",
        whyItMatters: "Long-term alprazolam may worsen dependence, cognition, falls, emotional dysregulation and trauma recovery.",
        modelWording: "Review alprazolam dependence and develop a slow collaborative taper/alternative plan rather than abruptly taking over scripts.",
        keywords: ["alprazolam", "benzodiazepine dependence", "long-term prescribing", "taper", "GP liaison", "complex PTSD", "withdrawal", "harm reduction"],
      },
      {
        id: "s4",
        name: "Young carer and child impact",
        category: "child_protection",
        severity: "important",
        clueInStem: "teenage daughter has stopped attending school",
        whyItMatters: "Daughter's caring role and school refusal may indicate harm and require family/child support.",
        modelWording: "Assess the daughter's young-carer burden, school absence and safeguarding needs.",
        keywords: ["young carer", "daughter", "school refusal", "child protection", "family burden", "safeguarding", "intergenerational trauma"],
      },
      {
        id: "s5",
        name: "Service pressure against longitudinal care",
        category: "system_pressure",
        severity: "important",
        clueInStem: "we don't provide long-term therapy here.",
        whyItMatters: "Rigid service boundaries may repeat abandonment and worsen risk.",
        modelWording: "Advocate for a realistic stepped-care plan rather than abrupt discharge after one assessment.",
        keywords: ["service boundary", "long-term therapy", "stepped care", "rural service", "abandonment", "continuity", "system pressure"],
      },
      {
        id: "s6",
        name: "Cultural/social rural context",
        category: "cultural_safety",
        severity: "optional",
        clueInStem: "same property as her ex-partner's family",
        whyItMatters: "Rural social proximity may increase surveillance, shame and danger.",
        modelWording: "Formulate rural context as part of risk: proximity, lack of anonymity, transport limits and fear of disclosure.",
        keywords: ["rural context", "same property", "lack of anonymity", "ex-partner family", "surveillance", "social safety", "transport"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Emma's presentation illustrates how rural systems can unintentionally repeat trauma. Her statement, "Every new clinician asks me to tell the worst parts again and then they leave," is the central therapeutic clue. It tells me that repeated assessments without continuity are not neutral; they are re-traumatising and confirming abandonment. I would not begin by asking her to retell detailed trauma. I would acknowledge the pattern, explain that she does not need to repeat details to receive care, and build a stabilisation-focused formulation.

Telehealth is not automatically a solution. Emma says, "If they hear me talking on video, I'm not safe," and she lives on the same property as her ex-partner's family. That means privacy failure may increase family violence risk or surveillance. I would not refer her to telehealth psychology unless a safe location, private technology, emergency plan and consent are established. The rural limitation is real, but unsafe telehealth is not trauma-informed care.

The GP has prescribed "alprazolam for years" and asks psychiatry to take over the scripts. That is a clinical and governance risk. Long-term alprazolam may produce dependence, withdrawal, cognitive effects, emotional dysregulation and increased risk when combined with alcohol or other sedatives. I would not abruptly stop it, because that could be dangerous and rupture trust. I would liaise with the GP, assess dependence, dose, misuse, withdrawal risk and function, and negotiate a slow taper or harm-reduction plan with alternatives for anxiety and sleep.

Her teenage daughter has "stopped attending school to stay home with her mother," which turns an adult trauma case into a family and safeguarding case. I would assess the daughter's young-carer burden, school absence, emotional safety and whether child protection or family support is required. This is not about blaming Emma; it is about preventing intergenerational harm and supporting the family.

The service manager's statement, "we don't provide long-term therapy here," is the system pressure. It may be true that the service cannot provide open-ended specialist trauma therapy, but discharging after one assessment would repeat the abandonment pattern and leave risk unmanaged. I would advocate a stepped-care plan: psychiatric review, GP collaboration, safe telehealth only if feasible, trauma-informed case coordination, family violence support, stabilisation skills and clear crisis pathways. My documentation would explicitly note why repeated trauma retelling was avoided, why telehealth privacy was unsafe without planning, how alprazolam would be managed, and how the daughter's needs would be addressed.`,
  },
  {
    id: "RU-004",
    topic: "rural",
    difficulty: "consultant",
    title: "Involuntary admission with nearest bed 300 km away",
    candidateRole: "Consultant psychiatrist, regional hospital on-call service",
    setting: "Regional hospital ED with no inpatient psychiatry unit",
    stem: `You are the consultant psychiatrist on call for a regional hospital.

Liam is a 31-year-old man with bipolar I disorder brought to ED by police after driving at high speed through town saying, "God told me the road rules don't apply." He is grandiose, sleepless and refusing medication. The nearest authorised mental health bed is 300 km away, and ambulance says transfer cannot occur until morning.

His mother says, "He gets worse when police are around; please don't handcuff him." The ED doctor says there is no safe room and asks if Liam can be sedated overnight. Liam identifies as Aboriginal and asks for his uncle, who lives locally, to be present.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Acute mania with public safety risk",
        category: "risk_others",
        severity: "critical",
        clueInStem: "God told me the road rules don't apply.",
        whyItMatters: "Grandiose manic beliefs have already led to dangerous driving and public risk.",
        modelWording: "Formulate acute mania with impaired judgement and public safety risk demonstrated by dangerous driving.",
        keywords: ["mania", "dangerous driving", "public safety", "grandiosity", "risk to others", "bipolar I", "impaired judgement"],
      },
      {
        id: "s2",
        name: "Legal authority for detention and transfer",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "nearest authorised mental health bed is 300 km away",
        whyItMatters: "Involuntary detention/transfer requires legal process and safe interim care.",
        modelWording: "Use the Mental Health Act pathway for involuntary assessment/admission and plan safe interim containment before transfer.",
        keywords: ["Mental Health Act", "involuntary admission", "transfer", "authorised bed", "regional hospital", "legal authority", "detention"],
      },
      {
        id: "s3",
        name: "Culturally safe containment",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "asks for his uncle",
        whyItMatters: "Trusted family may reduce coercion and agitation, especially if police presence escalates distress.",
        modelWording: "Involve uncle and Aboriginal liaison/support if safe, to reduce coercion and improve engagement.",
        keywords: ["Aboriginal", "uncle", "cultural support", "least restrictive", "family involvement", "police escalation", "engagement"],
      },
      {
        id: "s4",
        name: "Transfer delay and unsafe ED environment",
        category: "system_pressure",
        severity: "important",
        clueInStem: "transfer cannot occur until morning.",
        whyItMatters: "Overnight delay requires active risk plan, not passive waiting.",
        modelWording: "Create an overnight management plan for observation, medication, environment, staffing and escalation while awaiting transfer.",
        keywords: ["transfer delay", "overnight plan", "no safe room", "regional ED", "staffing", "observation", "escalation"],
      },
      {
        id: "s5",
        name: "Sedation/restraint proportionality",
        category: "ethics",
        severity: "important",
        clueInStem: "asks if Liam can be sedated overnight.",
        whyItMatters: "Sedation solely for convenience is unethical; medication must be clinically indicated, monitored and least restrictive.",
        modelWording: "Use sedation only for acute behavioural disturbance or safety risk, with monitoring and after offering oral medication first where feasible.",
        keywords: ["sedation", "restraint", "least restrictive", "rapid tranquillisation", "monitoring", "ethical", "behavioural disturbance"],
      },
      {
        id: "s6",
        name: "Family collateral about police escalation",
        category: "collateral",
        severity: "optional",
        clueInStem: "He gets worse when police are around",
        whyItMatters: "Police presence may increase agitation and should be used proportionately.",
        modelWording: "Use mother's collateral to minimise visible police presence while maintaining safety.",
        keywords: ["police", "mother collateral", "agitation", "de-escalation", "containment", "family input", "least restrictive"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Liam is acutely manic with demonstrated public safety risk. His statement, "God told me the road rules don't apply," is not simply grandiose speech; it has already translated into dangerous driving through town. That means impaired judgement is creating risk to others as well as to Liam. I would support involuntary assessment or admission if he refuses voluntary care and statutory criteria are met, while continuing to use the least restrictive practical approach.

The rural constraint is central. The "nearest authorised mental health bed is 300 km away" and transfer cannot occur until morning. That does not mean the ED can simply wait passively, nor does it mean sedation for convenience. I would create an active overnight plan: low-stimulus space, remove car keys and driving access, observation level, oral medication offer, physical health assessment, hydration, sleep restoration, escalation triggers, police/security role and consultant availability. The ED doctor's statement that there is "no safe room" means environmental risk must be explicitly managed.

Cultural safety matters because Liam identifies as Aboriginal and asks for "his uncle." His mother says, "He gets worse when police are around; please don't handcuff him." I would use that collateral to reduce visible police presence where safe and involve the uncle as a calming support if he is safe and willing. Least restrictive care in this case may mean using trusted family to reduce coercion, not excluding family in the name of control. If police are required for safety, I would ask for proportionate involvement and avoid unnecessary handcuffing.

The question about whether Liam can be "sedated overnight" needs a clear ethical response. Sedation may be appropriate if he is acutely behaviourally disturbed or poses imminent risk, but not simply because transfer is delayed. I would offer oral medication first where possible, consider antipsychotic or benzodiazepine according to local rapid-tranquillisation protocols, and ensure monitoring is feasible. If IM medication is required, it should be legally authorised, proportionate and documented.

My role is to coordinate ED, ambulance, receiving unit, police and family rather than simply advise from afar. I would clarify Mental Health Act paperwork for detention and transfer, arrange handover to the receiving unit, and document why the 300 km transfer is necessary despite its risks. The final plan must show that rural distance did not lead either to unsafe discharge or to excessive coercion. It led to a structured, culturally informed, legally authorised overnight containment plan while transfer was organised.`,
  },
  {
    id: "RU-005",
    topic: "rural",
    difficulty: "consultant",
    title: "Remote alcohol-related violence and family safety",
    candidateRole: "Consultant psychiatrist, rural and remote mental health service",
    setting: "Remote community clinic after police callout",
    stem: `You are the consultant psychiatrist providing phone advice to a remote clinic.

Noah is a 40-year-old Aboriginal man brought by police after threatening his partner with a shovel while intoxicated. He says, "I only scared her because she was going to take the kids." His partner is at the women's safe house and says, "If he comes back tonight, someone will die." The children witnessed the incident.

The local clinic nurse knows both families and says community leaders want the matter handled "inside community." Police ask whether Noah needs psychiatric admission or can sober up in the cells. Noah has a history of head injury, depression and heavy alcohol use after his brother's suicide.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "High risk to partner",
        category: "risk_others",
        severity: "critical",
        clueInStem: "If he comes back tonight, someone will die.",
        whyItMatters: "Victim statement indicates imminent fear and possible lethal risk.",
        modelWording: "Prioritise partner safety and treat her fear as high-value collateral indicating imminent family violence risk.",
        keywords: ["family violence", "partner safety", "imminent risk", "threat", "victim collateral", "lethal risk", "remote community"],
      },
      {
        id: "s2",
        name: "Children witnessed violence",
        category: "child_protection",
        severity: "critical",
        clueInStem: "The children witnessed the incident.",
        whyItMatters: "Children exposed to family violence require safeguarding assessment and support.",
        modelWording: "Consider child protection notification and immediate safety planning for children exposed to violence.",
        keywords: ["children", "witnessed violence", "child protection", "safeguarding", "family violence", "trauma", "safety planning"],
      },
      {
        id: "s3",
        name: "Alcohol intoxication and disinhibition",
        category: "substance_use",
        severity: "important",
        clueInStem: "while intoxicated.",
        whyItMatters: "Alcohol increases immediate violence risk and may mask depression/head injury symptoms.",
        modelWording: "Assess intoxication, withdrawal risk, alcohol dependence and relationship to violence before disposition.",
        keywords: ["alcohol intoxication", "disinhibition", "violence", "withdrawal", "alcohol dependence", "remote clinic", "risk"],
      },
      {
        id: "s4",
        name: "Cultural/community pressure",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "inside community.",
        whyItMatters: "Community-led responses may be protective but must not override victim/child safety or legal obligations.",
        modelWording: "Respect community leadership while making clear that partner and child safety and legal duties are non-negotiable.",
        keywords: ["community leaders", "cultural safety", "community-led response", "victim safety", "legal duties", "Aboriginal community", "remote"],
      },
      {
        id: "s5",
        name: "Head injury/depression context",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "history of head injury, depression and heavy alcohol use",
        whyItMatters: "Brain injury, depression and bereavement may contribute to impulsivity and self/other risk.",
        modelWording: "Assess head injury, depression, grief and suicidality as contributors to violence and ongoing risk.",
        keywords: ["head injury", "depression", "brother suicide", "grief", "impulsivity", "neuropsychiatry", "suicide risk", "violence"],
      },
      {
        id: "s6",
        name: "Cells versus health assessment",
        category: "disposition",
        severity: "optional",
        clueInStem: "sober up in the cells.",
        whyItMatters: "Police cells may be unsafe if there is withdrawal, head injury, suicidality or mental disorder.",
        modelWording: "Do not default to cells; disposition depends on intoxication, medical risk, mental state, withdrawal and violence containment.",
        keywords: ["police cells", "sober up", "disposition", "medical risk", "withdrawal", "mental state", "custody safety"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Noah's presentation must be treated primarily as a family violence and child safety crisis, not as a mental health admission question waiting to be resolved by a distant consultant. His partner's statement, "If he comes back tonight, someone will die," is the most clinically significant sentence in the stem. It is a statement of imminent fear from a victim who has direct knowledge of his behaviour. I would treat it as high-risk collateral requiring immediate safety response, not as an anxious relative to be reassured.

The children witnessed the incident. That is a child protection trigger independent of Noah's psychiatric diagnosis. I would ensure a child protection notification or report is considered, that the children are with a safe adult at the safe house, that their immediate welfare is assessed, and that culturally safe support is available for the family. The community nurse's familiarity with both families is helpful for context, but cannot substitute for child safety processes.

Noah's phrase, "I only scared her because she was going to take the kids," is a minimising and controlling narrative typical of family violence. The threat of child removal may be a real fear, but it does not justify threatening someone with a shovel. His combination of intoxication, head injury history, depression and grief after his brother's suicide creates a complex formulation. I would assess alcohol level, withdrawal risk, depression, suicidality, cognitive effects of head injury, grief and whether mental disorder is contributing to violence risk. However, the primary driver appears to be family violence, not mental illness, and I would not allow a psychiatric formulation to minimise the violence or redirect the family violence response.

The community leaders' preference to handle the matter "inside community" reflects cultural self-determination and may reflect genuine community wisdom. I would respect that as a value while being direct that partner safety and child protection are non-negotiable legal and clinical obligations. Community-led responses and formal safety systems are not necessarily incompatible, but victim safety and child protection cannot be deferred to community process when there is imminent lethal risk.

The disposition question is whether Noah needs psychiatric admission or police cells. That depends on mental state, intoxication, withdrawal, safety and legal criteria. Police cells may be unsafe if there is significant withdrawal, suicidality, head injury or psychiatric crisis requiring monitoring. Admission may be difficult remotely, but if there is mental disorder contributing to risk, it may be necessary. I would advise the clinic nurse on observations, withdrawal monitoring, alcohol safety, mental state reassessment, and clear criteria for transfer or psychiatric review. My documentation would state that victim safety and child protection were prioritised, that community leadership was respected where possible, that Noah's psychiatric and substance-use needs were assessed, and that the disposition reflected the combination of all risk factors.`,
  },
];
