import type { QuizStem } from "../quizData";

export const RU_STEMS: QuizStem[] = [
  {
    id: "RU-001",
    questionNumber: "MEQ-105",
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
      { id: "s1", name: "Arson command creates immediate community risk", category: "immediate_safety", severity: "critical", clueInStem: "Jarran is a 24-year-old Aboriginal man brought to the clinic by family after walking through the community at night yelling, \"The old people are telling me to burn the store.\"", whyItMatters: "Missing this signal means the candidate has not acted on a specific fire threat to essential community infrastructure.", modelWording: "Prioritise immediate community safety because a command to burn the store creates fire risk to people and essential infrastructure.", keywords: ["burn the store", "arson", "community safety", "psychosis"] },
      { id: "s2", name: "Cultural meaning and psychosis both need formulation", category: "cultural_safety", severity: "critical", clueInStem: "Jarran is a 24-year-old Aboriginal man brought to the clinic by family after walking through the community at night yelling, \"The old people are telling me to burn the store.\"", whyItMatters: "Missing this signal means the candidate may either pathologise cultural language or ignore risk because cultural language is used.", modelWording: "Seek cultural formulation while managing risk because 'old people' may carry cultural meaning, psychotic meaning or both.", keywords: ["old people", "cultural formulation", "Aboriginal", "psychosis"] },
      { id: "s3", name: "No antipsychotic medication limits local containment", category: "system_pressure", severity: "critical", clueInStem: "The clinic has no antipsychotic medication available and the nearest inpatient unit is 900 km away.", whyItMatters: "Missing this signal means the candidate has overestimated what a remote nurse can safely manage locally.", modelWording: "Escalate retrieval planning because medication absence and distance make local containment fragile.", keywords: ["no antipsychotic", "900 km", "remote clinic", "retrieval"] },
      { id: "s4", name: "Police delay affects safety planning", category: "governance", severity: "important", clueInStem: "The nurse says police are two hours away and asks whether to activate RFDS.", whyItMatters: "Missing this signal means the interim plan may assume emergency support that is not immediately available.", modelWording: "Plan the two-hour police delay explicitly because the nurse needs safe interim containment and escalation instructions.", keywords: ["police", "two hours", "RFDS", "interim plan"] },
      { id: "s5", name: "Substance use may amplify psychosis and risk", category: "substance_use", severity: "important", clueInStem: "Jarran's uncle says he may have used cannabis and \"something from town.\"", whyItMatters: "Missing this signal means intoxication, methamphetamine exposure or withdrawal may be missed while still not making the risk safe.", modelWording: "Assess cannabis and other substance exposure because intoxication may amplify psychosis, agitation and medical risk.", keywords: ["cannabis", "something from town", "substance", "intoxication"] },
      { id: "s6", name: "Family escort is protective for hospital trust", category: "family_carer", severity: "important", clueInStem: "The community elder says, \"Don't send him away without family; he won't trust hospital.\"", whyItMatters: "Missing this signal means transfer may become culturally unsafe, increasing fear, absconding and disengagement.", modelWording: "Arrange family involvement in transfer where feasible because trust and engagement may depend on culturally safe support.", keywords: ["family", "trust hospital", "elder", "transfer"] },
      { id: "s7", name: "Children near the store increase urgency", category: "risk_vulnerable", severity: "critical", clueInStem: "The nurse is worried because several children were near the store when Jarran was shouting.", whyItMatters: "Missing this signal means vulnerable bystanders are not included in the risk formulation.", modelWording: "Move children and bystanders away from the store because the arson threat creates immediate risk to vulnerable people.", keywords: ["children", "store", "vulnerable", "fire risk"] },
    ],
    priorityOrder: { urgent: ["s1", "s2", "s3", "s7"], secondary: ["s4", "s5", "s6"], lowYield: [] },
    modelAnswer: `Jarran's presentation is an acute community-safety problem in a remote setting. He is walking through the community at night yelling that "the old people are telling me to burn the store," and children were nearby. I would advise immediate steps to move children and bystanders away, reduce access to ignition sources, create distance from the store and use calm family support if safe.

The cultural formulation must be careful. The phrase "old people" may have cultural meaning, psychotic meaning or both. I would seek family, elder and Aboriginal health input where available while making clear that risk to the store and children must still be managed.

The local resource limitations are central. The clinic has no antipsychotic medication, police are two hours away and the nearest inpatient unit is 900 km away. I would not ask the nurse to hold an unsafe situation locally without retrieval planning. RFDS activation is appropriate if risk cannot be safely contained.

Substance use needs assessment because his uncle says he may have used cannabis and "something from town." That may suggest methamphetamine or another intoxicant, but substance-related psychosis is not automatically lower risk. I would ask about timing, intoxication, head injury, fever and prior episodes.

If transfer is needed, it should be culturally safe. The elder says not to send him away without family because he will not trust hospital, so I would seek a family escort where feasible and alert the receiving hospital to organise Aboriginal liaison. The plan should document risk, legal authority, cultural advice, family involvement, RFDS rationale and interim safety instructions.`,
  },
  {
    id: "RU-002",
    questionNumber: "MEQ-106",
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
      { id: "s1", name: "Large paracetamol overdose remains high risk", category: "risk_self", severity: "critical", clueInStem: "Maddie is a 19-year-old woman who took 40 paracetamol tablets after a breakup and now says, \"I just want to go home and sleep.\"", whyItMatters: "Missing this signal means minimisation after a potentially lethal overdose is mistaken for safety.", modelWording: "Treat the overdose as high risk because 40 paracetamol tablets require medical completion and suicide-risk formulation before discharge.", keywords: ["40 paracetamol", "overdose", "suicide risk", "minimisation"] },
      { id: "s2", name: "Medical treatment has started but is not disposition clearance", category: "physical_health", severity: "critical", clueInStem: "The ED GP says NAC has started, but there are no psychiatric beds anywhere in the region.", whyItMatters: "Missing this signal means medical treatment is confused with psychiatric readiness for discharge.", modelWording: "Complete medical management and toxicology monitoring because NAC commencement does not resolve psychiatric risk.", keywords: ["NAC", "medical management", "toxicology"] },
      { id: "s3", name: "No regional beds creates pressure but not safe discharge", category: "system_pressure", severity: "critical", clueInStem: "The ED GP says NAC has started, but there are no psychiatric beds anywhere in the region.", whyItMatters: "Missing this signal means bed scarcity may drive discharge rather than safety planning.", modelWording: "Escalate regional bed scarcity because no psychiatric bed does not make discharge safe after major overdose.", keywords: ["no beds", "region", "discharge pressure"] },
      { id: "s4", name: "First-year nurse cannot be left unsupported overnight", category: "governance", severity: "important", clueInStem: "The only mental health clinician on site is a first-year nurse who says, \"I've never done an overnight suicide watch.\"", whyItMatters: "Missing this signal means remote consultant advice leaves inexperienced staff carrying unsafe observation responsibility.", modelWording: "Provide explicit telehealth supervision because the first-year nurse needs observation, escalation and review instructions.", keywords: ["first-year nurse", "suicide watch", "telehealth", "supervision"] },
      { id: "s5", name: "Father's local police role creates privacy pressure", category: "ethics", severity: "important", clueInStem: "Maddie's father is a local police officer and says, \"Everyone knows us here; don't put this in her record.\"", whyItMatters: "Missing this signal means rural stigma and power dynamics may lead to false or incomplete documentation.", modelWording: "Explain documentation and privacy limits because clinically relevant information must be recorded despite rural confidentiality fears.", keywords: ["police officer", "record", "confidentiality", "rural"] },
      { id: "s6", name: "Auntie request is culturally protective", category: "cultural_safety", severity: "important", clueInStem: "Maddie is Aboriginal and asks for her auntie, but her auntie lives 90 minutes away.", whyItMatters: "Missing this signal means a culturally important protective support is treated as impractical rather than actively facilitated.", modelWording: "Facilitate auntie contact because culturally safe support may improve engagement and safety planning.", keywords: ["Aboriginal", "auntie", "90 minutes", "cultural support"] },
      { id: "s7", name: "Phone follow-up alone is inadequate after major overdose", category: "disposition", severity: "critical", clueInStem: "The ED GP asks whether she can be discharged with phone follow-up once medically cleared.", whyItMatters: "Missing this signal means a remote follow-up plan replaces observation, supports and means restriction.", modelWording: "Reject phone follow-up alone unless risk is clearly reduced and a robust supervision and follow-up plan exists.", keywords: ["phone follow-up", "medically cleared", "discharge", "overdose"] },
    ],
    priorityOrder: { urgent: ["s1", "s2", "s3", "s7"], secondary: ["s4", "s5", "s6"], lowYield: [] },
    modelAnswer: `Maddie's overdose is a high-risk medical and psychiatric presentation. Taking 40 paracetamol tablets after a breakup is potentially lethal, and saying she wants to go home and sleep does not make her safe. She needs completion of NAC and medical monitoring before psychiatric disposition can be finalised.

The rural system pressure is significant but cannot become the discharge rationale. There are no psychiatric beds anywhere in the region, but no bed does not equal safe discharge. If she needs containment, the service must escalate to regional bed management, medical admission with psychiatric support or transfer pathways.

The observation plan is fragile. The only mental health clinician on site is a first-year nurse who has never done an overnight suicide watch. As telehealth consultant, I would give explicit instructions about observation level, environmental safety, removal of means, reassessment timing, escalation triggers and when to call for senior help.

Maddie's father being a local police officer creates rural confidentiality pressure. His request not to put it in the record cannot be followed. I would explain privacy protections and ensure Maddie is assessed privately, without her father controlling information.

Maddie asks for her auntie, and that is clinically important. I would facilitate phone or video contact immediately and consider whether waiting for auntie support improves safety. Discharge with phone follow-up alone would be inadequate unless medical treatment is complete, acute risk is reduced, means are restricted, culturally safe supports are present and follow-up is confirmed.`,
  },
  {
    id: "RU-003",
    questionNumber: "MEQ-107",
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
      { id: "s1", name: "Repeated trauma retelling has become harmful", category: "trauma", severity: "critical", clueInStem: "Emma says, \"Every new clinician asks me to tell the worst parts again and then they leave.\"", whyItMatters: "Missing this signal means the service repeats abandonment and retraumatisation through assessment without continuity.", modelWording: "Avoid repeated detailed trauma retelling because Emma identifies it as retraumatising and trust-damaging.", keywords: ["trauma retelling", "continuity", "complex PTSD"] },
      { id: "s2", name: "Telehealth access is limited by technology", category: "system_pressure", severity: "important", clueInStem: "There is no local trauma specialist, and the only funded option is telehealth psychology.", whyItMatters: "Missing this signal means telehealth is assumed to solve access despite service and privacy constraints.", modelWording: "Assess whether telehealth is feasible because lack of local trauma care and funding limits require realistic stepped care.", keywords: ["telehealth", "no specialist", "funded option"] },
      { id: "s3", name: "Video therapy may be unsafe due to surveillance risk", category: "immediate_safety", severity: "critical", clueInStem: "Emma has unreliable internet, lives on the same property as her ex-partner's family and says, \"If they hear me talking on video, I'm not safe.\"", whyItMatters: "Missing this signal means telehealth may increase family-violence risk by exposing disclosure to perpetrators or relatives.", modelWording: "Do not use video therapy unless privacy and safety are secured because being overheard may place Emma at risk.", keywords: ["video", "not safe", "ex-partner", "privacy", "family violence"] },
      { id: "s4", name: "Long-term alprazolam requires collaborative review", category: "substance_use", severity: "important", clueInStem: "The GP has been prescribing alprazolam for years and asks psychiatry to \"take over the scripts.\"", whyItMatters: "Missing this signal means dependence and withdrawal risk may be ignored or abruptly transferred without a plan.", modelWording: "Review alprazolam collaboratively because long-term prescribing requires dependence assessment and gradual harm-reduction planning.", keywords: ["alprazolam", "scripts", "dependence", "GP"] },
      { id: "s5", name: "Teenage daughter has young-carer burden", category: "child_protection", severity: "critical", clueInStem: "Emma's teenage daughter has stopped attending school to stay home with her mother.", whyItMatters: "Missing this signal means the impact on a dependent child and school disengagement is not addressed.", modelWording: "Assess the daughter's young-carer burden and school absence because Emma's illness is affecting child welfare.", keywords: ["teenage daughter", "school", "young carer"] },
      { id: "s6", name: "One-assessment discharge repeats abandonment", category: "governance", severity: "important", clueInStem: "The local service manager wants discharge after one assessment because \"we don't provide long-term therapy here.\"", whyItMatters: "Missing this signal means service boundary pressure will reproduce the exact pattern Emma says harms her.", modelWording: "Advocate stepped-care continuity because discharge after one assessment would repeat abandonment and leave risk unmanaged.", keywords: ["discharge", "one assessment", "long-term therapy", "service manager"] },
      { id: "s7", name: "Rural property proximity is part of risk formulation", category: "cultural_safety", severity: "important", clueInStem: "Emma has unreliable internet, lives on the same property as her ex-partner's family and says, \"If they hear me talking on video, I'm not safe.\"", whyItMatters: "Missing this signal means rural proximity, lack of anonymity and surveillance are not included in safety planning.", modelWording: "Formulate rural proximity as risk because living near the ex-partner's family limits privacy and safe help-seeking.", keywords: ["rural", "same property", "surveillance", "privacy"] },
    ],
    priorityOrder: { urgent: ["s1", "s3", "s5"], secondary: ["s2", "s4", "s6", "s7"], lowYield: [] },
    modelAnswer: `Emma's care needs to avoid repeating trauma. She says, "Every new clinician asks me to tell the worst parts again and then they leave." I would not begin by asking her to retell detailed trauma. I would acknowledge that previous care has been harmful and focus on stabilisation, safety, continuity and a shared formulation.

Telehealth is not automatically safe. There is no local trauma specialist and the only funded option is telehealth psychology, but Emma has unreliable internet and lives on the same property as her ex-partner's family. She says, "If they hear me talking on video, I'm not safe." I would not proceed with video therapy unless privacy, safe location and emergency planning are secured.

The alprazolam issue requires careful shared management. The GP has prescribed it for years and wants psychiatry to take over scripts. I would assess dependence, dose, withdrawal risk, alcohol or other sedatives, and negotiate a slow collaborative plan rather than abruptly stopping or simply taking over prescribing.

Her teenage daughter has stopped attending school to stay home with her, which raises young-carer and safeguarding concerns. I would assess the daughter's wellbeing, schooling, caring responsibilities and supports, and involve family or child services if needed.

The service manager's wish to discharge after one assessment because the service does not provide long-term therapy should be challenged. Even if specialist therapy is limited, a stepped-care plan can include GP collaboration, safe telehealth only if feasible, stabilisation work, family violence support, medication review, crisis planning and continuity that does not repeat abandonment.`,
  },
  {
    id: "RU-004",
    questionNumber: "MEQ-108",
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
      { id: "s1", name: "Manic belief has already caused dangerous driving", category: "risk_others", severity: "critical", clueInStem: "Liam is a 31-year-old man with bipolar I disorder brought to ED by police after driving at high speed through town saying, \"God told me the road rules don't apply.\"", whyItMatters: "Missing this signal means public risk from mania is not recognised.", modelWording: "Formulate acute mania with public safety risk because grandiose religious belief has already led to high-speed driving.", keywords: ["mania", "driving", "road rules", "public safety"] },
      { id: "s2", name: "Current manic features impair voluntary engagement", category: "diagnosis_formulation", severity: "critical", clueInStem: "He is grandiose, sleepless and refusing medication.", whyItMatters: "Missing this signal means ongoing mania and inability to collaborate may be underestimated while waiting for transfer.", modelWording: "Assess current mania severity because grandiosity, sleeplessness and medication refusal make risk difficult to manage voluntarily.", keywords: ["grandiose", "sleepless", "refusing medication", "mania"] },
      { id: "s3", name: "Authorised bed distance requires legal transfer planning", category: "mental_health_act", severity: "critical", clueInStem: "The nearest authorised mental health bed is 300 km away, and ambulance says transfer cannot occur until morning.", whyItMatters: "Missing this signal means detention and transport may proceed without clear legal authority and interim plan.", modelWording: "Clarify Mental Health Act authority for detention and transfer because the authorised bed is distant and delayed.", keywords: ["authorised bed", "300 km", "transfer", "MHA"] },
      { id: "s4", name: "Police presence may escalate distress", category: "collateral", severity: "important", clueInStem: "His mother says, \"He gets worse when police are around; please don't handcuff him.\"", whyItMatters: "Missing this signal means containment may worsen agitation by using avoidable visible coercion.", modelWording: "Use mother's collateral to minimise visible police and handcuffing where safe because coercion may escalate Liam.", keywords: ["police", "handcuff", "mother", "escalation"] },
      { id: "s5", name: "No safe room makes overnight containment fragile", category: "system_pressure", severity: "critical", clueInStem: "The ED doctor says there is no safe room and asks if Liam can be sedated overnight.", whyItMatters: "Missing this signal means the ED environment is assumed to be safe when it may not contain manic behaviour overnight.", modelWording: "Create an environmental safety plan because no safe room increases the risk of absconding, violence or excessive restraint.", keywords: ["no safe room", "overnight", "environment", "ED"] },
      { id: "s6", name: "Sedation must be clinically indicated and monitored", category: "ethics", severity: "important", clueInStem: "The ED doctor says there is no safe room and asks if Liam can be sedated overnight.", whyItMatters: "Missing this signal means medication may be used as convenience sedation for transfer delay rather than proportional treatment.", modelWording: "Use sedation only for acute safety or severe agitation because transfer delay alone is not a medication indication.", keywords: ["sedated overnight", "sedation", "monitoring", "least restrictive"] },
      { id: "s7", name: "Uncle request supports culturally safe de-escalation", category: "cultural_safety", severity: "important", clueInStem: "Liam identifies as Aboriginal and asks for his uncle, who lives locally, to be present.", whyItMatters: "Missing this signal means a trusted local support that could reduce coercion and improve engagement is not used.", modelWording: "Involve Liam's uncle if safe because trusted Aboriginal family support may reduce coercion and improve containment.", keywords: ["Aboriginal", "uncle", "local", "cultural support"] },
    ],
    priorityOrder: { urgent: ["s1", "s2", "s3", "s5"], secondary: ["s4", "s6", "s7"], lowYield: [] },
    modelAnswer: `Liam is acutely manic with demonstrated public safety risk. He drove at high speed through town saying, "God told me the road rules don't apply," and remains grandiose, sleepless and refusing medication. That combination supports involuntary assessment or admission if he cannot collaborate voluntarily and statutory criteria are met.

The rural logistics are central. The nearest authorised mental health bed is 300 km away and ambulance transfer cannot occur until morning. That requires clear Mental Health Act authority for detention and transfer, receiving-unit communication and a structured overnight plan rather than passive waiting.

The ED environment is unsafe because there is no safe room. I would advise on observation, low-stimulus space, removal of car keys and driving access, oral medication, hydration, physical assessment, escalation triggers, and when police or security are required.

Sedation should not be used simply because transfer is delayed. It may be appropriate for severe agitation or immediate safety risk, but it must be clinically indicated, legally authorised, monitored and reviewed. Oral medication should be offered first where feasible.

Cultural safety may reduce coercion. Liam identifies as Aboriginal and asks for his uncle, while his mother says police make him worse and asks that he not be handcuffed. I would involve the uncle if safe, reduce visible police presence where possible, and document why any coercion used was necessary and proportionate.`,
  },
  {
    id: "RU-005",
    questionNumber: "MEQ-109",
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
      { id: "s1", name: "Weapon threat while intoxicated is high-risk family violence", category: "risk_others", severity: "critical", clueInStem: "Noah is a 40-year-old Aboriginal man brought by police after threatening his partner with a shovel while intoxicated.", whyItMatters: "Missing this signal means a serious weapon threat is reframed as a routine intoxication or psychiatric admission question.", modelWording: "Treat the shovel threat as high-risk family violence because weapon use and intoxication create imminent danger.", keywords: ["shovel", "partner", "intoxicated", "family violence"] },
      { id: "s2", name: "Noah minimises coercive control around children", category: "diagnosis_formulation", severity: "important", clueInStem: "He says, \"I only scared her because she was going to take the kids.\"", whyItMatters: "Missing this signal means controlling justification for violence is accepted rather than challenged.", modelWording: "Recognise minimisation and coercive control because fear of losing children does not justify threatening his partner.", keywords: ["only scared her", "take the kids", "coercive control"] },
      { id: "s3", name: "Partner's safe-house statement indicates imminent lethal risk", category: "risk_others", severity: "critical", clueInStem: "His partner is at the women's safe house and says, \"If he comes back tonight, someone will die.\"", whyItMatters: "Missing this signal means victim collateral about imminent lethal risk is not prioritised.", modelWording: "Prioritise partner safety because her safe-house statement indicates immediate fear of lethal violence.", keywords: ["safe house", "someone will die", "partner safety"] },
      { id: "s4", name: "Children witnessing violence requires safeguarding", category: "child_protection", severity: "critical", clueInStem: "The children witnessed the incident.", whyItMatters: "Missing this signal means child trauma and statutory safeguarding are not addressed.", modelWording: "Consider child protection action because children witnessed serious family violence involving a weapon.", keywords: ["children", "witnessed", "child protection"] },
      { id: "s5", name: "Community-led response cannot override safety duties", category: "cultural_safety", severity: "important", clueInStem: "The local clinic nurse knows both families and says community leaders want the matter handled \"inside community.\"", whyItMatters: "Missing this signal means cultural self-determination may be misused to bypass victim safety and legal duties.", modelWording: "Respect community leadership while making clear that partner and child safety duties remain non-negotiable.", keywords: ["inside community", "community leaders", "cultural safety"] },
      { id: "s6", name: "Police cells may be unsafe without health assessment", category: "disposition", severity: "important", clueInStem: "Police ask whether Noah needs psychiatric admission or can sober up in the cells.", whyItMatters: "Missing this signal means intoxication, withdrawal, head injury and suicide risk may be managed in custody without adequate health monitoring.", modelWording: "Do not default to police cells until intoxication, withdrawal, head injury, mental state and suicide risk are assessed.", keywords: ["police cells", "sober up", "psychiatric admission"] },
      { id: "s7", name: "Head injury, depression and bereavement complicate risk", category: "substance_use", severity: "important", clueInStem: "Noah has a history of head injury, depression and heavy alcohol use after his brother's suicide.", whyItMatters: "Missing this signal means neuropsychiatric, grief and alcohol contributors to impulsivity and self-harm risk are ignored.", modelWording: "Assess head injury, depression, grief, alcohol dependence and suicidality because they may amplify violence and custody risk.", keywords: ["head injury", "depression", "alcohol", "brother suicide"] },
    ],
    priorityOrder: { urgent: ["s1", "s3", "s4"], secondary: ["s2", "s5", "s6", "s7"], lowYield: [] },
    modelAnswer: `Noah's presentation should be treated primarily as a high-risk family violence and child-safety incident. He threatened his partner with a shovel while intoxicated, and his partner is now at a women's safe house saying, "If he comes back tonight, someone will die." That victim statement is high-value collateral and should guide immediate safety planning.

The children witnessed the incident, so child protection or safeguarding consultation must be considered regardless of whether Noah has a psychiatric illness. Their immediate location, safety, trauma exposure and safe adult supervision need to be clarified.

Noah's statement that he only scared her because she was going to take the kids is minimisation and possible coercive control. It should not be accepted as an explanation that reduces risk. The primary intervention must protect the partner and children.

The clinic nurse and community leaders may provide valuable cultural and local knowledge, but wanting the matter handled "inside community" cannot override legal and safety obligations. Community-led supports can complement, not replace, victim safety and child protection.

The question of psychiatric admission versus police cells requires health assessment. Noah is intoxicated and has head injury, depression and heavy alcohol use after his brother's suicide. I would assess withdrawal, head injury, suicidality, depression, violence risk and whether a mental disorder requires admission. Police cells may be unsafe without monitoring, but psychiatric admission should not be used to obscure the family violence response.`,
  },
];
