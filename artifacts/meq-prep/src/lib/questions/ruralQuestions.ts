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
    modelAnswer: `Immediate safety:

* Prioritise community safety: keep Jarran away from the store, children and ignition sources.
* Arrange safe observation with family/clinic staff if feasible and police if required.

Clinical/legal:

* Assess psychosis, intoxication, medical causes and risk.
* Clarify Mental Health Act authority for involuntary assessment/transport and emergency treatment.

Rural logistics:

* Given no antipsychotic medication, limited containment and 900 km distance, RFDS activation is likely appropriate if risk persists.
* Coordinate nurse, police, RFDS and receiving unit.

Cultural safety:

* Involve family/elder and Aboriginal health supports.
* Arrange culturally safe escort and receiving-hospital cultural liaison.

Documentation:

* Record risk, resource limitations, legal basis, cultural plan and transfer rationale.`,
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
    modelAnswer: `Medical/risk:

* Continue NAC and medical monitoring; do not discharge until medically cleared.
* Assess suicide risk: intent, planning, regret, concealment, alcohol/substances, ongoing access to medication and supports.

Rural safety:

* No psychiatric bed does not equal safe discharge.
* Create an observation plan the rural ED can actually deliver; escalate staffing or transfer if not safe.

Telehealth leadership:

* Provide clear written advice: observation level, reassessment timing, escalation triggers and criteria for discharge/transfer.

Cultural/family:

* Facilitate contact with auntie and consider her as a protective support.
* Address father's confidentiality concerns but document accurately.

Disposition:

* Discharge only with safe supervision, means restriction, safety plan and confirmed follow-up; phone follow-up alone is insufficient if risk remains high.`,
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
    modelAnswer: `Trauma-informed formulation:

* Avoid repeated detailed trauma retelling.
* Prioritise stabilisation, safety, continuity, grounding and collaborative formulation.

Telehealth/rural safety:

* Telehealth is not automatically appropriate.
* Assess privacy, internet, safe location and family violence risk before video therapy.

Medication:

* Review long-term alprazolam with GP.
* Avoid abrupt cessation; plan slow taper and alternatives if appropriate.

Family/child:

* Assess daughter's young-carer role, school non-attendance and safeguarding needs.

Systems:

* Challenge abrupt discharge after one assessment.
* Develop stepped care: regular psychiatric review, GP collaboration, safe psychology access, crisis plan and family violence supports.

Documentation:

* Record safety limits of telehealth, trauma plan, medication strategy and child/family concerns.`,
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
    modelAnswer: `Clinical/legal:

* Liam appears acutely manic with dangerous driving and impaired judgement.
* Use Mental Health Act pathway for involuntary assessment/admission and transfer to authorised bed.

Immediate safety:

* Develop overnight plan: observation, low-stimulus space, remove driving access, oral medication first, rapid tranquillisation only if necessary and monitored.
* Police/security involvement should be proportionate.

Cultural/family:

* Involve uncle and Aboriginal supports if safe.
* Use mother's collateral that police escalate him.

Rural logistics:

* Transfer delay requires active management, consultant availability and clear escalation triggers.
* Liaise with ambulance, receiving unit and ED leadership.

Documentation:

* Record MHA criteria, risk, least restrictive actions, medication rationale and transfer plan.`,
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
    modelAnswer: `Immediate safety:

* Prioritise partner and children's safety.
* Treat partner's statement as high-risk collateral.
* Liaise with police, safe house and child protection.

Clinical assessment:

* Assess intoxication, withdrawal, head injury, depression, grief and suicidality.
* Determine whether mental disorder contributes to risk but do not medicalise family violence alone.

Cultural/community:

* Respect community leadership and involve culturally appropriate supports where safe.
* Do not allow "inside community" handling to override victim safety or statutory duties.

Disposition:

* Police cells may be unsafe if medical/psychiatric risk is present.
* Admission, clinic observation, police custody or transfer depends on intoxication, withdrawal, mental state, legal criteria and safety.

Documentation:

* Record victim collateral, child exposure, cultural consultation, legal/safety actions and disposition rationale.`,
  },
];
