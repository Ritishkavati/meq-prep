import { QuizStem } from "../quizData";

export const CA_STEMS: QuizStem[] = [
  {
    id: "CA-001",
    questionNumber: "MEQ-095",
    topic: "child_adolescent",
    difficulty: "consultant",
    title: "Aboriginal adolescent self-harm, family violence and child protection",
    candidateRole: "Consultant child and adolescent psychiatrist, emergency liaison service",
    setting: "Regional emergency department after police and ambulance attendance",
    stem: `You are the consultant child and adolescent psychiatrist contacted by a registrar in a regional ED.

Tahlia is a 14-year-old Aboriginal girl brought in by ambulance after cutting her forearm with glass during an argument at home. She says, "I only cut so Mum would stop yelling." Police attended because neighbours reported screaming. Tahlia says her mother's partner "gets drunk and smashes things" but asks staff, "Don't call child protection because they already took my cousins."

Tahlia's mother is angry and says, "She's attention-seeking and needs to learn consequences." The mother's partner is waiting outside the ED and wants to take them both home. The Aboriginal Liaison Officer is not on site overnight, and ED staff want psychiatry to decide whether Tahlia can be discharged.

The registrar says Tahlia denies current suicidal intent and wants to go home, but nursing staff report she becomes visibly frightened whenever her mother's partner walks past the cubicle.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Family violence and immediate child safety",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "gets drunk and smashes things",
        whyItMatters: "Exposure to intoxicated violence creates immediate risk to Tahlia and makes discharge home potentially unsafe even if suicidal intent is denied.",
        modelWording: "Prioritise immediate safety by assessing family violence, intoxication, threats, safe accommodation and whether Tahlia can safely return home tonight.",
        keywords: ["family violence", "intoxication", "safe accommodation", "child safety", "discharge home", "immediate risk", "partner violence", "ED safety"],
      },
      {
        id: "s2",
        name: "Self-harm must be formulated, not dismissed",
        category: "risk_self",
        severity: "critical",
        clueInStem: "I only cut so Mum would stop yelling.",
        whyItMatters: "The function of self-harm may be affect regulation or communication under threat; missing this leads to either over-pathologising or unsafe minimisation.",
        modelWording: "Assess self-harm function, intent, escalation, access to means and acute distress in the context of family conflict and trauma.",
        keywords: ["self-harm", "affect regulation", "intent", "escalation", "family conflict", "adolescent risk", "cutting", "means"],
      },
      {
        id: "s3",
        name: "Child protection fear and cultural safety",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "Don't call child protection because they already took my cousins.",
        whyItMatters: "Fear of child protection may reflect prior family/community trauma and can reduce disclosure unless handled culturally safely.",
        modelWording: "Use culturally safe engagement, acknowledge fear of child protection, and involve Aboriginal supports while explaining safety obligations transparently.",
        keywords: ["Aboriginal Liaison Officer", "cultural safety", "child protection fear", "transparency", "trust", "community trauma", "engagement", "kinship"],
      },
      {
        id: "s4",
        name: "Mandatory safeguarding threshold",
        category: "child_protection",
        severity: "important",
        clueInStem: "neighbours reported screaming.",
        whyItMatters: "Possible family violence, intoxication and adolescent self-harm require consideration of statutory child protection obligations.",
        modelWording: "Consider child protection notification because of family violence exposure, unsafe home environment and self-harm, while seeking least disruptive kinship options.",
        keywords: ["child protection", "mandatory reporting", "safeguarding", "family violence", "kinship care", "home safety", "statutory duty", "minor"],
      },
      {
        id: "s5",
        name: "Collateral from safe sources",
        category: "collateral",
        severity: "important",
        clueInStem: "visibly frightened whenever her mother's partner walks past the cubicle.",
        whyItMatters: "Behavioural observation and collateral may be more reliable than direct answers when a child fears consequences of disclosure.",
        modelWording: "Seek collateral from nursing staff, police, school and safe family members, not only from the mother or partner.",
        keywords: ["collateral", "nursing observation", "police", "school", "safe relative", "fear response", "behavioural clue", "family report"],
      },
      {
        id: "s6",
        name: "Disposition cannot rely on unsafe caregiver",
        category: "disposition",
        severity: "optional",
        clueInStem: "wants to take them both home.",
        whyItMatters: "Discharge to the alleged source of threat may place Tahlia at immediate risk.",
        modelWording: "Do not discharge Tahlia with the mother's partner until safety is assessed and a safe care arrangement is confirmed.",
        keywords: ["disposition", "unsafe caregiver", "do not discharge", "safe care", "alternative placement", "ED plan", "safety planning", "overnight"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Tahlia's presentation should not be managed as a superficial-cutting case that can be closed once she denies suicidal intent. The key clue is her statement, "I only cut so Mum would stop yelling." That tells me the self-harm may be a communication of distress or an attempt to interrupt family conflict, not merely a low-lethality act. The fact that she becomes frightened when the mother's partner walks past the cubicle and reports that he "gets drunk and smashes things" shifts the immediate question from suicide intent alone to whether it is safe for her to return home tonight.

I would first ensure Tahlia is physically and emotionally safe in ED. She should be interviewed separately from her mother and her mother's partner, and the partner should not be allowed to control the timing or content of the assessment. His presence outside the ED and wish to take them home creates a risk that she may be unable to disclose freely. I would ask ED staff to maintain separation, involve security only if needed, and clarify whether police need to remain while immediate safety is assessed.

The child protection issue is unavoidable, but it must be handled culturally safely. Tahlia says, "Don't call child protection because they already took my cousins." That statement tells me that statutory services may be associated with fear and family trauma. I would acknowledge that fear, explain the limits of confidentiality and my duty to keep children safe, and seek Aboriginal Liaison or Aboriginal health involvement as soon as possible. Cultural safety does not mean avoiding child protection where thresholds are met; it means being transparent, using kinship options where safe, and avoiding unnecessary punitive framing.

I would obtain collateral from nursing staff, police, school, the mother separately and any safe relatives. Nursing observation that she becomes "visibly frightened whenever her mother's partner walks past the cubicle" is high-value evidence, particularly because children often minimise risk in front of unsafe adults. I would ask about previous violence, injuries, intoxication, weapons, who lives at home, whether siblings are present, whether the mother can protect her, and whether there is a safe auntie or kinship placement tonight.

The disposition decision cannot be delegated to a crisis number. If family violence risk is unresolved, discharging Tahlia home with the alleged perpetrator would be unsafe even if she denies current suicidal intent. If a safe kinship placement or supervised plan can be arranged, that may be less restrictive than admission. If no safe discharge arrangement exists, she may need to remain in hospital or another safe setting while child protection and social work are involved. My documentation would quote her fear of child protection, the family violence concerns, the behavioural observations, the collateral sources, and the rationale for the final safety plan.`,
  },
  {
    id: "CA-002",
    questionNumber: "MEQ-096",
    topic: "child_adolescent",
    difficulty: "consultant",
    title: "Refugee adolescent school refusal, trauma and consent",
    candidateRole: "Consultant child and adolescent psychiatrist, community CAMHS",
    setting: "CAMHS urgent assessment after school welfare referral",
    stem: `You are the consultant child and adolescent psychiatrist supervising an urgent CAMHS assessment.

Hamid is a 16-year-old Syrian refugee boy referred because he has stopped attending school for six weeks. The school reports panic when fire alarms sound and says he hides under desks. Hamid says through his older brother, who is interpreting, "School is not safe; soldiers come when bells ring." His father insists, "He is lazy and must be forced back."

Hamid refuses trauma therapy and says, "If people know what happened, my family will be ashamed." His mother appears distressed but speaks little English. The GP has prescribed diazepam for sleep, and the school wants a certificate stating he is medically unfit or fit to return.

The registrar asks whether Hamid can consent to therapy without his father's agreement and whether school refusal should be treated as behavioural avoidance.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Trauma formulation of school refusal",
        category: "trauma",
        severity: "critical",
        clueInStem: "School is not safe; soldiers come when bells ring.",
        whyItMatters: "School refusal may be PTSD-related re-experiencing rather than oppositional behaviour; mislabelling worsens shame and coercion.",
        modelWording: "Formulate school refusal as likely trauma-related avoidance and re-experiencing triggered by alarms and perceived threat.",
        keywords: ["PTSD", "school refusal", "refugee trauma", "fire alarms", "re-experiencing", "avoidance", "hyperarousal", "war trauma"],
      },
      {
        id: "s2",
        name: "Interpreter failure",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "through his older brother, who is interpreting",
        whyItMatters: "Using a sibling interpreter compromises confidentiality, accuracy and trauma disclosure.",
        modelWording: "Use a professional interpreter; do not rely on the brother for trauma, consent or risk assessment.",
        keywords: ["professional interpreter", "sibling interpreter", "confidentiality", "trauma disclosure", "language barrier", "cultural safety", "refugee", "assessment validity"],
      },
      {
        id: "s3",
        name: "Adolescent consent and confidentiality",
        category: "consent_refusal",
        severity: "important",
        clueInStem: "can consent to therapy without his father's agreement",
        whyItMatters: "A 16-year-old may have capacity to consent to confidential treatment depending on maturity and jurisdiction.",
        modelWording: "Assess Hamid's capacity to consent to therapy and explain confidentiality, limits and parental involvement in a developmentally appropriate way.",
        keywords: ["adolescent consent", "Gillick competence", "confidentiality", "therapy consent", "parental agreement", "minor", "capacity", "CAMHS"],
      },
      {
        id: "s4",
        name: "Shame and cultural meaning",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "my family will be ashamed.",
        whyItMatters: "Shame and family honour may block disclosure and engagement unless explored respectfully.",
        modelWording: "Explore shame, stigma and family beliefs about trauma without assumptions, using culturally safe psychoeducation.",
        keywords: ["shame", "stigma", "family honour", "cultural formulation", "refugee family", "psychoeducation", "engagement", "trauma therapy"],
      },
      {
        id: "s5",
        name: "Benzodiazepine risk in adolescent trauma",
        category: "physical_health",
        severity: "important",
        clueInStem: "The GP has prescribed diazepam for sleep",
        whyItMatters: "Diazepam may worsen avoidance, dependence, cognition and trauma recovery in adolescents.",
        modelWording: "Review diazepam use and liaise with GP because benzodiazepines are not a preferred long-term treatment for adolescent PTSD-related insomnia.",
        keywords: ["diazepam", "benzodiazepine", "sleep", "adolescent", "PTSD", "dependence", "GP liaison", "insomnia"],
      },
      {
        id: "s6",
        name: "School pressure and staged reintegration",
        category: "system_pressure",
        severity: "optional",
        clueInStem: "the school wants a certificate",
        whyItMatters: "Binary fit/unfit certificates may oversimplify trauma recovery and miss graded school return planning.",
        modelWording: "Avoid a simplistic fit/unfit certificate; recommend a trauma-informed graded school re-entry plan with safety accommodations.",
        keywords: ["school certificate", "graded return", "school refusal", "trauma-informed school plan", "accommodations", "education liaison", "reintegration"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Hamid's school refusal should be formulated first as a trauma-linked presentation rather than laziness or ordinary adolescent avoidance. The phrase "School is not safe; soldiers come when bells ring" is a direct clue that fire alarms are triggering war-related re-experiencing or threat perception. His behaviour of hiding under desks when alarms sound fits PTSD physiology: hyperarousal, avoidance and re-experiencing. I would explicitly challenge the father's view that "He is lazy and must be forced back," because coercive return without formulation may worsen symptoms and shame.

The assessment is currently invalid because it is being conducted "through his older brother, who is interpreting." A sibling interpreter is not appropriate for trauma, consent or risk assessment. Hamid may be unable to disclose violence, torture, sexual trauma, family conflict, suicidality or shame through his brother. I would arrange a professional interpreter and, where possible, offer a choice of gender and language/dialect. This is not a procedural luxury; it is necessary for valid capacity, confidentiality and diagnosis.

The consent question matters because Hamid is 16. I would assess his capacity to consent to therapy, understanding the nature of treatment, its risks and benefits, confidentiality and alternatives. He may be able to consent to confidential trauma-informed care even if his father disagrees, depending on jurisdiction. At the same time, family involvement may be important for recovery if it can be negotiated safely. I would explain confidentiality and its limits to Hamid and separately help the parents understand trauma without requiring him to disclose details he is not ready to share.

His statement, "If people know what happened, my family will be ashamed," is a cultural and trauma clue. Shame, family honour and stigma may be major barriers to engagement. I would not rush into trauma processing. A consultant-level plan would begin with stabilisation: sleep, safety, grounding, psychoeducation, school collaboration and gradual restoration of routine. Trauma-focused therapy can follow when he has enough safety and control.

The GP's diazepam prescription also needs review. Long-term or repeated benzodiazepines in adolescent PTSD can worsen avoidance, cognitive functioning, dependence and emotional processing. I would liaise with the GP, assess dose and duration, and propose safer sleep and anxiety strategies. The school's request for a fit/unfit certificate should be reframed into a graded, trauma-informed return plan: alarm accommodations, safe room, trusted staff member, predictable routine, attendance goals and communication pathways. My final advice would balance Hamid's autonomy, parental authority, school pressure and trauma recovery, with documentation of interpreter use, consent reasoning, risk assessment and school plan.`,
  },
  {
    id: "CA-003",
    questionNumber: "MEQ-097",
    topic: "child_adolescent",
    difficulty: "consultant",
    title: "Aboriginal boy, disputed ADHD and polypharmacy",
    candidateRole: "Consultant child psychiatrist, neurodevelopmental and trauma clinic",
    setting: "Regional child mental health outpatient clinic",
    stem: `You are the consultant child psychiatrist asked to review Jayden, a 12-year-old Aboriginal boy referred for "severe ADHD not responding to medication."

Jayden is prescribed methylphenidate LA, clonidine at night and risperidone for aggression. His grandmother says, "Every time he gets upset they add another tablet." School reports he runs from class when teachers shout and hides under tables. Jayden says, "I get scared when men yell because it sounds like home."

His mother has intermittent contact and a history of family violence. The paediatrician wants to increase stimulant dose, while the school wants an aide removed because "medication should fix this." No Aboriginal health worker, trauma service or occupational therapist has been involved.

The registrar asks whether this is treatment-resistant ADHD or conduct disorder.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Trauma misread as ADHD/aggression",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "I get scared when men yell because it sounds like home.",
        whyItMatters: "Trauma hyperarousal and threat responses may mimic or worsen ADHD; missing this leads to escalating medication rather than trauma-informed care.",
        modelWording: "Reformulate symptoms considering trauma-related hyperarousal, threat response and ADHD comorbidity rather than assuming treatment-resistant ADHD.",
        keywords: ["trauma", "ADHD differential", "hyperarousal", "threat response", "family violence", "conduct disorder", "formulation", "child psychiatry"],
      },
      {
        id: "s2",
        name: "Polypharmacy review",
        category: "physical_health",
        severity: "critical",
        clueInStem: "Every time he gets upset they add another tablet.",
        whyItMatters: "Medication escalation without formulation risks sedation, metabolic effects, cardiovascular effects and masking unmet needs.",
        modelWording: "Review the rationale, benefit and adverse effects of stimulant, clonidine and risperidone before any dose escalation.",
        keywords: ["polypharmacy", "methylphenidate", "clonidine", "risperidone", "side effects", "metabolic monitoring", "cardiovascular", "medication review"],
      },
      {
        id: "s3",
        name: "Cultural safety and Aboriginal supports",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "No Aboriginal health worker",
        whyItMatters: "Culturally unsafe care may reduce engagement and miss strengths in kinship, identity and community.",
        modelWording: "Involve an Aboriginal health worker and assess cultural identity, kinship supports and culturally safe school/health engagement.",
        keywords: ["Aboriginal health worker", "cultural safety", "kinship", "grandmother", "identity", "community", "engagement", "Aboriginal child"],
      },
      {
        id: "s4",
        name: "Grandmother as key carer collateral",
        category: "family_carer",
        severity: "important",
        clueInStem: "His grandmother says",
        whyItMatters: "Grandmother likely holds key developmental, trauma and medication-response information.",
        modelWording: "Obtain detailed collateral from grandmother about developmental history, trauma exposure, behaviour patterns, medication effects and strengths.",
        keywords: ["grandmother", "carer collateral", "developmental history", "medication response", "trauma history", "strengths", "family", "kinship carer"],
      },
      {
        id: "s5",
        name: "School system pressure",
        category: "system_pressure",
        severity: "important",
        clueInStem: "medication should fix this.",
        whyItMatters: "School may externalise responsibility to medication and withdraw needed environmental supports.",
        modelWording: "Challenge the assumption that medication alone should fix behaviour and advocate trauma-informed classroom supports.",
        keywords: ["school pressure", "aide", "environmental supports", "trauma-informed school", "reasonable adjustments", "behaviour plan", "teacher yelling"],
      },
      {
        id: "s6",
        name: "Family violence and safeguarding context",
        category: "child_protection",
        severity: "optional",
        clueInStem: "history of family violence.",
        whyItMatters: "Ongoing exposure or contact arrangements may affect safety and symptoms.",
        modelWording: "Clarify current safety, contact arrangements and whether family violence exposure requires safeguarding action.",
        keywords: ["family violence", "child protection", "safeguarding", "contact arrangements", "safety", "mother", "home environment"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Jayden's presentation should not be reduced to "severe ADHD not responding to medication" or conduct disorder. The most important clue is his own explanation: "I get scared when men yell because it sounds like home." That points to trauma-related threat response and hyperarousal, especially in the context of family violence. Running from class when teachers shout and hiding under tables may be defensive survival behaviour rather than oppositionality or stimulant failure. ADHD may still be present, but the formulation must include trauma, classroom triggers, cultural context and environmental supports.

The medication history raises immediate concern. Jayden is already on methylphenidate LA, clonidine and risperidone, and his grandmother says, "Every time he gets upset they add another tablet." That sentence captures the risk of medication being used to manage distress without adequate formulation. I would not support increasing the stimulant dose until I had reviewed diagnosis, target symptoms, benefits, adverse effects, growth, appetite, sleep, blood pressure, pulse, sedation, extrapyramidal effects and metabolic monitoring. Risperidone for aggression needs particular scrutiny because behavioural distress driven by trauma and unsafe environments should not be medicalised without psychosocial intervention.

Cultural safety is not an optional add-on. The stem says "No Aboriginal health worker" has been involved. For a 12-year-old Aboriginal boy in kinship care with trauma history, culturally safe engagement may change the entire formulation. I would involve an Aboriginal health worker or liaison, ask about kinship, identity, community strengths, school cultural safety and the role of grandmother. His grandmother is clearly a key carer and collateral source; she can help establish developmental history, trauma exposure, baseline behaviour, medication effects and what helps him regulate.

I would also challenge the school assumption that "medication should fix this." That is a system pressure that risks removing the aide and worsening behaviour. A consultant response would advocate for trauma-informed classroom adjustments: predictable routines, avoiding shouting, safe exit plans, sensory/OT assessment, positive behaviour support, teacher education and maintenance of aide support if needed. The paediatrician's wish to increase stimulant dose should be discussed respectfully, but the treatment plan should be formulation-led rather than dose-led.

The family violence history means safeguarding must be clarified. I would ask about current contact with the mother, whether violence exposure is ongoing, whether the home is safe, and whether child protection or family support services are involved. The aim is not to blame the family but to identify ongoing triggers and supports. My final plan would integrate trauma-informed care, ADHD reassessment, medication rationalisation, cultural support, school intervention and safeguarding. I would document why treatment-resistant ADHD is not yet established, why polypharmacy needs review, and why environmental and trauma interventions are essential before further medication escalation.`,
  },
  {
    id: "CA-004",
    questionNumber: "MEQ-098",
    topic: "child_adolescent",
    difficulty: "consultant",
    title: "Adolescent anorexia, medical risk and involuntary treatment",
    candidateRole: "Consultant child and adolescent psychiatrist, eating disorders liaison",
    setting: "Paediatric ward in tertiary hospital",
    stem: `You are the consultant child and adolescent psychiatrist reviewing Sophie, a 15-year-old girl admitted under paediatrics with anorexia nervosa.

Sophie has a heart rate of 38 overnight, postural hypotension and hypokalaemia. She says, "I know I might die, but gaining weight would be worse." Her father says hospital is "making her dramatic" and wants discharge to a private dietitian. Her mother is tearful and says, "I can't keep her alive at home."

Sophie refuses nasogastric feeding and says she will run away if forced. The paediatric consultant says she is medically unstable and asks whether psychiatry can authorise involuntary treatment. The family are from a close religious community and fear "everyone will know she is mentally ill."`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Immediate medical instability",
        category: "physical_health",
        severity: "critical",
        clueInStem: "heart rate of 38 overnight, postural hypotension and hypokalaemia.",
        whyItMatters: "Severe bradycardia, postural hypotension and electrolyte disturbance create risk of arrhythmia and death.",
        modelWording: "Treat this as a medical emergency requiring paediatric-led stabilisation, cardiac monitoring and electrolyte correction.",
        keywords: ["anorexia nervosa", "bradycardia", "heart rate 38", "hypokalaemia", "postural hypotension", "medical instability", "arrhythmia", "paediatrics"],
      },
      {
        id: "s2",
        name: "Capacity impaired by anorexic cognition",
        category: "capacity",
        severity: "critical",
        clueInStem: "I know I might die, but gaining weight would be worse.",
        whyItMatters: "Apparent understanding may be overridden by pathological valuation of weight gain, impairing weighing and appreciation.",
        modelWording: "Assess capacity to refuse nutrition, focusing on whether anorexic beliefs impair weighing of death risk against weight gain fear.",
        keywords: ["capacity", "anorexic cognition", "weighing information", "refusal of nutrition", "fear of weight gain", "medical risk", "adolescent"],
      },
      {
        id: "s3",
        name: "Legal pathway for involuntary treatment",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "asks whether psychiatry can authorise involuntary treatment.",
        whyItMatters: "Life-saving feeding may require mental health, guardianship or emergency medical authority depending on jurisdiction.",
        modelWording: "Clarify the legal basis for treatment: parental consent, emergency doctrine, guardianship or Mental Health Act depending on capacity, urgency and local law.",
        keywords: ["Mental Health Act", "involuntary treatment", "NG feeding", "parental consent", "emergency treatment", "legal authority", "least restrictive"],
      },
      {
        id: "s4",
        name: "Family conflict and unsafe discharge pressure",
        category: "family_carer",
        severity: "important",
        clueInStem: "I can't keep her alive at home.",
        whyItMatters: "Mother's statement confirms home management is unsafe despite father's pressure for discharge.",
        modelWording: "Use family meeting to address split parental views and clearly explain medical risk and need for inpatient stabilisation.",
        keywords: ["family conflict", "mother cannot cope", "father wants discharge", "family meeting", "home safety", "parental disagreement", "eating disorder"],
      },
      {
        id: "s5",
        name: "Absconding risk if forced",
        category: "immediate_safety",
        severity: "important",
        clueInStem: "she will run away if forced.",
        whyItMatters: "Absconding during medical instability could be fatal and requires observation and containment planning.",
        modelWording: "Assess absconding risk and implement proportionate observation and ward safety measures during refeeding.",
        keywords: ["absconding", "run away", "observation", "ward safety", "containment", "medical risk", "refeeding", "least restrictive"],
      },
      {
        id: "s6",
        name: "Stigma and cultural/community concerns",
        category: "cultural_safety",
        severity: "optional",
        clueInStem: "everyone will know she is mentally ill.",
        whyItMatters: "Stigma may drive secrecy, premature discharge and reduced engagement.",
        modelWording: "Address stigma and confidentiality concerns respectfully while maintaining the priority of life-saving treatment.",
        keywords: ["stigma", "religious community", "confidentiality", "mental illness", "cultural safety", "engagement", "family shame"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Sophie's presentation is a medical emergency first, even though the psychiatric diagnosis is anorexia nervosa. The stem states she has a "heart rate of 38 overnight, postural hypotension and hypokalaemia." These are objective markers of potentially life-threatening malnutrition and electrolyte disturbance, with risk of arrhythmia, syncope and sudden death. I would support paediatric-led medical stabilisation, cardiac monitoring, electrolyte correction and eating-disorder protocol care. Discharge to a private dietitian is not a safe alternative while she is medically unstable.

Her capacity to refuse nutrition or nasogastric feeding requires careful assessment. The phrase "I know I might die, but gaining weight would be worse" shows factual awareness of death risk but likely impaired weighing due to anorexic cognition. Capacity is not established by repeating that death is possible; she must be able to appreciate and weigh that risk without the pathological overvaluation of weight gain overwhelming the decision. I would assess capacity specifically for refusing nutrition, admission and medical monitoring, and I would document how the eating disorder affects appreciation and weighing.

The legal pathway must be clarified rather than improvised. The paediatric consultant asks whether psychiatry can authorise involuntary treatment. Depending on jurisdiction, treatment may proceed under parental consent, emergency medical authority, guardianship or the Mental Health Act. I would not simply tell paediatrics "psychiatry authorises feeding." I would identify the applicable legal basis, involve hospital legal/ethics if needed, and ensure any coercive intervention is necessary, proportionate and least restrictive. If nasogastric feeding is required to prevent death and she lacks capacity or emergency authority applies, it should proceed with a clear plan and review.

Family conflict is clinically significant. The father says hospital is "making her dramatic" and wants discharge, while the mother says, "I can't keep her alive at home." The mother's statement is a safety signal that home care is not currently viable. I would hold a family meeting, explain the objective medical risks, address the father's minimisation, support the mother, and set a unified treatment frame. I would also address Sophie's threat that she "will run away if forced" by implementing proportionate observation and absconding precautions.

The family's fear that "everyone will know she is mentally ill" should be handled respectfully, especially given the close religious community. Stigma may be contributing to denial and discharge pressure. I would reassure them about confidentiality while making clear that life-saving care cannot be withheld to avoid shame. My documentation would include the medical instability, capacity reasoning, legal authority, family discussions, absconding plan and why involuntary or coerced feeding, if used, is a proportionate response to imminent medical risk rather than punishment.`,
  },
  {
    id: "CA-005",
    questionNumber: "MEQ-099",
    topic: "child_adolescent",
    difficulty: "consultant",
    title: "Gender-diverse youth, depression, parental rejection and MHA",
    candidateRole: "Consultant child and adolescent psychiatrist, crisis team",
    setting: "Metropolitan emergency department mental health assessment room",
    stem: `You are the consultant child and adolescent psychiatrist supervising a crisis assessment.

Alex is a 17-year-old gender-diverse young person brought to ED by a friend after sending a message saying, "I can't survive another night in that house." Alex reports worsening depression, self-harm and suicidal thoughts after their father said, "You are not my child if you keep this gender nonsense going." Alex asks staff to use they/them pronouns and not call their parents.

Alex's mother arrives distressed and says, "This is just internet influence; we want to take her home." Alex says there are tablets hidden in their bedroom and refuses admission because "hospital will just call my parents and make it worse." The ED is busy and the registrar asks whether Alex can be discharged to their parents because they are almost 18 but still a minor.

The family are active in a local faith community, and Alex fears being outed publicly.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Acute suicide risk linked to family rejection",
        category: "risk_self",
        severity: "critical",
        clueInStem: "I can't survive another night in that house.",
        whyItMatters: "Direct statement of inability to survive plus access to tablets and rejection indicates high dynamic suicide risk.",
        modelWording: "Assess acute suicide risk in the context of parental rejection, self-harm, access to tablets and inability to return home safely.",
        keywords: ["suicide risk", "family rejection", "tablets", "self-harm", "dynamic risk", "gender-diverse youth", "depression", "home unsafe"],
      },
      {
        id: "s2",
        name: "Gender-affirming and culturally safe care",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "use they/them pronouns",
        whyItMatters: "Misgendering and invalidation may worsen distress and undermine engagement.",
        modelWording: "Use Alex's name and pronouns consistently and provide gender-affirming care while assessing safety and family context.",
        keywords: ["gender-affirming care", "they/them pronouns", "gender-diverse", "cultural safety", "minority stress", "affirmation", "engagement", "respect"],
      },
      {
        id: "s3",
        name: "Confidentiality and minor consent",
        category: "consent_refusal",
        severity: "important",
        clueInStem: "not call their parents.",
        whyItMatters: "At 17, Alex may have confidentiality rights, but acute risk may require limited disclosure for safety.",
        modelWording: "Assess capacity/confidentiality rights and explain limits: I will involve supports only to the extent needed for safety and legal obligations.",
        keywords: ["confidentiality", "minor", "17-year-old", "consent", "capacity", "parental contact", "limits of confidentiality", "safety"],
      },
      {
        id: "s4",
        name: "Parents may not be safe discharge option",
        category: "disposition",
        severity: "important",
        clueInStem: "You are not my child if you keep this gender nonsense going.",
        whyItMatters: "Discharging to rejecting caregivers may worsen suicide risk and expose Alex to emotional harm.",
        modelWording: "Do not assume parents are a safe discharge option; assess home safety, rejection, coercion and alternative supports.",
        keywords: ["unsafe home", "parental rejection", "discharge planning", "alternative accommodation", "family assessment", "emotional abuse", "support person"],
      },
      {
        id: "s5",
        name: "MHA consideration if refusing admission",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "refuses admission",
        whyItMatters: "If acute suicide risk is high and Alex cannot collaborate with safety, involuntary assessment may be needed.",
        modelWording: "Consider MHA/involuntary assessment if Alex has mental disorder, high suicide risk and cannot be safely managed voluntarily.",
        keywords: ["Mental Health Act", "involuntary assessment", "refuses admission", "suicidal risk", "minor", "least restrictive", "voluntary care", "safety"],
      },
      {
        id: "s6",
        name: "Outing and faith community stigma",
        category: "ethics",
        severity: "optional",
        clueInStem: "fears being outed publicly.",
        whyItMatters: "Disclosure without consent may cause harm, shame and further rejection.",
        modelWording: "Protect Alex's privacy regarding gender identity and disclose only necessary safety information.",
        keywords: ["outing", "privacy", "faith community", "stigma", "confidentiality", "gender identity", "ethical disclosure", "harm minimisation"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Alex should be approached as a young person at acute suicide risk in the context of family rejection and minority stress, not as a generic depressed adolescent to be returned to parents because they are still a minor. The phrase "I can't survive another night in that house" is a high-risk statement, especially when combined with self-harm, suicidal thoughts and tablets hidden in the bedroom. I would not treat parental attendance as equivalent to safety. The home appears to be part of the risk pathway.

Using Alex's requested pronouns is a clinical intervention, not a political courtesy. The stem says Alex asks staff to use "they/them pronouns." I would ensure all staff do so and would document the name and pronouns to reduce further invalidation. The father's statement, "You are not my child if you keep this gender nonsense going," is emotionally rejecting and potentially abusive. It is also a dynamic suicide-risk factor. Discharging Alex back into that environment without careful safety planning would be unsafe.

The confidentiality issue is delicate because Alex is 17. They ask staff not to call their parents, while the mother arrives and wants to take "her" home. I would assess Alex's capacity and confidentiality rights, explain the limits of confidentiality where there is serious risk, and involve supports only to the extent necessary for safety. I would not unnecessarily out Alex to family or faith community, particularly because Alex "fears being outed publicly." At the same time, if acute suicide risk requires disclosure to keep them safe, I would explain this transparently and limit the information shared.

The Mental Health Act question arises because Alex refuses admission and says "hospital will just call my parents and make it worse." I would first try voluntary, collaborative care: a safety plan, removal of tablets, trusted friend or adult support, youth crisis accommodation, CAMHS crisis team or admission with confidentiality protections. If Alex remains at high risk and cannot collaborate with a safe plan, involuntary assessment may be required under the relevant law. The least restrictive option must be genuinely safe, not simply less inconvenient.

I would separately speak with the parents within confidentiality limits, assess whether either parent can provide safe support, and challenge rejecting or invalidating responses as risk factors. I would involve social work, youth mental health, LGBTQIA+ affirming supports and, if necessary, child protection or family violence services. My documentation would quote "I can't survive another night in that house," the tablet access, parental rejection, confidentiality discussion, pronouns, disclosure limits, and why the chosen disposition protects Alex without unnecessary outing or coercion.`,
  },
];
