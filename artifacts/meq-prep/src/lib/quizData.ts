export type SignalSeverity = "critical" | "important" | "optional";
export type SignalCategory =
  | "immediate_safety"
  | "diagnosis_formulation"
  | "risk_self"
  | "risk_others"
  | "risk_vulnerable"
  | "substance_use"
  | "physical_health"
  | "capacity"
  | "mental_health_act"
  | "consent_refusal"
  | "cultural_safety"
  | "trauma"
  | "family_carer"
  | "child_protection"
  | "collateral"
  | "mdt_conflict"
  | "system_pressure"
  | "governance"
  | "disposition";

export interface ExpectedSignal {
  id: string;
  name: string;
  category: SignalCategory;
  severity: SignalSeverity;
  clueInStem: string;
  whyItMatters: string;
  relatedRisk?: string;
  relatedLegal?: string;
  relatedCultural?: string;
  relatedSystem?: string;
  modelWording: string;
  keywords: string[]; // phrases to match in candidate answer (case-insensitive)
}

export interface QuizStem {
  id: string;
  topic: TopicKey;
  difficulty: DifficultyKey;
  title: string;
  candidateRole: string;
  setting: string;
  stem: string;
  totalMarks: number;
  signals: ExpectedSignal[];
  priorityOrder: { urgent: string[]; secondary: string[]; lowYield: string[] };
  modelAnswer: string;
}

export type TopicKey =
  | "random"
  | "ed"
  | "perinatal"
  | "cl_psychiatry"
  | "forensic"
  | "old_age"
  | "child_adolescent"
  | "governance"
  | "cultural_safety"
  | "substance_use"
  | "risk"
  | "capacity_mha";

export type DifficultyKey = "standard" | "difficult" | "consultant";

export const TOPIC_LABELS: Record<TopicKey, string> = {
  random: "Random",
  ed: "Emergency Department",
  perinatal: "Perinatal",
  cl_psychiatry: "Consultation-Liaison",
  forensic: "Forensic",
  old_age: "Old Age Psychiatry",
  child_adolescent: "Child & Adolescent",
  governance: "Governance & Leadership",
  cultural_safety: "Cultural Safety",
  substance_use: "Substance Use",
  risk: "Risk Assessment",
  capacity_mha: "Capacity & Mental Health Act",
};

export const DIFFICULTY_LABELS: Record<DifficultyKey, string> = {
  standard: "Standard",
  difficult: "Difficult",
  consultant: "Consultant-level",
};

// ─── STEMS ───────────────────────────────────────────────────────────────────

export const QUIZ_STEMS: QuizStem[] = [
  // ─── 1. CULTURAL SAFETY / CL ─────────────────────────────────────────────
  {
    id: "q1",
    topic: "cultural_safety",
    difficulty: "consultant",
    title: "Sudanese Refugee — Medical Ward Refusal",
    candidateRole: "Junior consultant psychiatrist, consultation-liaison team",
    setting: "Metropolitan general hospital, medical ward",
    stem: `You are a junior consultant psychiatrist on the consultation-liaison (CL) team of a metropolitan general hospital. You are asked to review Amara, a 24-year-old Sudanese woman who arrived in Australia 14 months ago as a humanitarian refugee. She was admitted to the general medical ward three days ago with severe malnutrition and dehydration. She weighs 38 kg. The treating physician suspects she has been fasting for religious reasons but is uncertain.

Amara has refused all oral intake since admission and declined insertion of a nasogastric tube. She speaks limited English and has been communicating through her 16-year-old daughter Fatima, who has been the sole interpreter throughout the admission. Amara becomes visibly distressed when male staff enter the room. The nursing staff report she cries frequently at night and does not sleep. One nurse documented "possible depression or grief — husband died during boat crossing eighteen months ago."

The medical team are requesting a capacity assessment and want to know if involuntary treatment with nasogastric feeding can proceed. The ward social worker has not yet been involved. No formal interpreter has been used.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Fasting vs. psychiatric illness vs. trauma response — diagnostic uncertainty",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "Physician suspects religious fasting; nurse documents possible depression/grief",
        whyItMatters: "Misattributing fasting to a psychiatric disorder without ruling out cultural/religious practice or complicated grief would represent a serious diagnostic error",
        modelWording: "The refusal of oral intake must be carefully differentiated: cultural/religious fasting practice, complicated grief response to husband's death, major depressive episode with psychotic features, PTSD with dissociation, or deliberate self-harm must all be considered before a capacity determination",
        keywords: ["grief", "fasting", "religious", "cultural", "diagnos", "differential", "depression", "ptsd", "trauma", "formul"],
      },
      {
        id: "s2",
        name: "Inadequate interpretation — 16-year-old daughter as sole interpreter",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "Communicating through her 16-year-old daughter Fatima, who has been the sole interpreter",
        whyItMatters: "Using a child as interpreter is inappropriate: it distorts communication, places an adult burden on a minor, violates privacy, and renders any capacity assessment legally invalid",
        relatedLegal: "Capacity assessment conducted without a professional interpreter is procedurally flawed and potentially indefensible",
        modelWording: "The use of Amara's 16-year-old daughter as sole interpreter is a critical systems failure. A professional NAATI-accredited interpreter must be arranged before any clinical assessment, particularly a capacity assessment",
        keywords: ["interpret", "language", "naati", "profession", "daughter", "child interpret", "accredit"],
      },
      {
        id: "s3",
        name: "Capacity assessment — procedural requirements not met",
        category: "capacity",
        severity: "critical",
        clueInStem: "Medical team requesting capacity assessment",
        whyItMatters: "A capacity assessment cannot be validly performed without a professional interpreter — current circumstances render any assessment invalid",
        relatedLegal: "Guardianship Act; substitute decision-making hierarchy must be clarified if capacity is found lacking",
        modelWording: "I cannot complete a valid capacity assessment until a professional interpreter is present. The decision must be tested against all four domains: understanding, retaining, weighing/using information, and communicating a decision",
        keywords: ["capac", "understand", "retain", "weigh", "communicat", "four", "domains", "decision-mak", "validly", "procedur"],
      },
      {
        id: "s4",
        name: "Complicated grief / traumatic bereavement",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "Husband died during boat crossing eighteen months ago",
        whyItMatters: "Traumatic loss of a spouse in a refugee context, compounded by resettlement stress, is a significant driver of psychiatric morbidity",
        modelWording: "The history of traumatic spousal bereavement eighteen months ago — in the context of a boat crossing — raises concern for complicated grief disorder and PTSD",
        keywords: ["grief", "bereave", "husband", "loss", "complicated grief", "traumatic loss", "widow"],
      },
      {
        id: "s5",
        name: "PTSD — refugee trauma, husband's death, distress with male staff",
        category: "trauma",
        severity: "critical",
        clueInStem: "Visibly distressed when male staff enter the room; husband died during boat crossing",
        whyItMatters: "Distress response to male staff may reflect trauma-related triggers (e.g. sexual violence during displacement) — failure to identify this would result in re-traumatising care",
        modelWording: "The marked distress in response to male staff must prompt consideration of sexual violence or other gender-based trauma during displacement — a trauma-informed approach is required",
        keywords: ["ptsd", "trauma", "sexual", "gender", "male staff", "trigger", "trauma-inform", "re-traumatis"],
      },
      {
        id: "s6",
        name: "Risk to life — severe malnutrition and dehydration",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "Severe malnutrition and dehydration. She weighs 38 kg.",
        whyItMatters: "38 kg represents a life-threatening nutritional state — cardiac arrhythmia, refeeding syndrome, and multi-organ failure are immediate risks",
        relatedRisk: "Cardiac arrhythmia, refeeding syndrome if feeding is commenced",
        modelWording: "Amara's weight of 38 kg with severe malnutrition and dehydration represents an immediate risk to life. The medical team must address haemodynamic stability and electrolyte correction while the psychiatric assessment proceeds",
        keywords: ["38 kg", "malnourish", "dehydrat", "weight", "life", "cardiac", "refeeding", "risk to life", "immediate"],
      },
      {
        id: "s7",
        name: "Involuntary nasogastric feeding — legal authority required",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "Want to know if involuntary treatment with nasogastric feeding can proceed",
        whyItMatters: "Involuntary nasogastric feeding requires legal authority under either the Mental Health Act or Guardianship legislation — this cannot proceed without valid assessment and appropriate legal authorisation",
        relatedLegal: "Mental Health Act (jurisdiction-specific); Guardianship Act; Tribunal or Supreme Court order may be required",
        modelWording: "Involuntary nasogastric feeding requires legal authorisation. If Amara lacks capacity, a substitute decision-maker must be identified under guardianship legislation, or a Tribunal order obtained. If she retains capacity, her refusal is legally binding even if life-threatening",
        keywords: ["involuntar", "nasogastric", "legal", "authoris", "tribunal", "guardianship", "mha", "mental health act", "substitute decision"],
      },
      {
        id: "s8",
        name: "Right to refuse — autonomous decision if capacity retained",
        category: "consent_refusal",
        severity: "important",
        clueInStem: "Has refused all oral intake and declined nasogastric tube",
        whyItMatters: "If Amara has capacity, she has the legal right to refuse treatment even if this results in death",
        modelWording: "If Amara is found to have decision-making capacity for this choice, her refusal must be respected. The clinical and ethical challenge is that a capacitous refusal may be life-ending",
        keywords: ["right to refuse", "autonomous", "capacitous", "if she has capac", "respect her decision", "legal right"],
      },
      {
        id: "s9",
        name: "Social isolation — no social worker, no formal supports identified",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "Ward social worker has not yet been involved",
        whyItMatters: "A refugee woman who arrived 14 months ago has likely had limited time to establish supports — absence of social work involvement is a critical systems gap",
        relatedSystem: "Social work, refugee health services, STARTTS or equivalent, community resettlement services",
        modelWording: "The ward social worker has not been involved — this must be urgently rectified. Refugee health services, STARTTS equivalent, and community support organisations should be identified",
        keywords: ["social work", "startts", "refugee", "community", "support", "resettlement", "isolation", "social service"],
      },
      {
        id: "s10",
        name: "Cultural and religious context of fasting/refusal — risk of pathologising",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "Physician suspects religious fasting but is uncertain; Sudanese refugee",
        whyItMatters: "Medicalising a religious or cultural practice risks cultural harm and damages therapeutic trust",
        modelWording: "Before any psychiatric diagnosis is applied, the clinical team must establish whether Amara's fasting has cultural or religious significance, with the assistance of a professional interpreter and, where appropriate, a cultural liaison worker",
        keywords: ["religious", "cultural", "fasting", "spiritual", "pathologis", "cultural liaison", "cultural safety", "practice"],
      },
      {
        id: "s11",
        name: "Impact on Fatima — child carrying adult burden",
        category: "family_carer",
        severity: "important",
        clueInStem: "16-year-old daughter Fatima, sole interpreter throughout the admission",
        whyItMatters: "Fatima is being asked to interpret medically and emotionally complex, potentially distressing information — this places her at risk of secondary trauma and harm",
        modelWording: "Fatima's role as sole interpreter places a significant and inappropriate burden on a 16-year-old. Her own wellbeing must be considered and a formal child safeguarding referral may be warranted if she is effectively a young carer",
        keywords: ["fatima", "daughter", "child", "burden", "minor", "young carer", "16", "impact on"],
      },
      {
        id: "s12",
        name: "MDT communication failures — no interpreter, no social work, no formal assessment",
        category: "governance",
        severity: "important",
        clueInStem: "No formal interpreter has been used. Ward social worker has not yet been involved.",
        whyItMatters: "Multiple system failures have co-occurred — escalation to a senior clinician and a formal clinical governance review may be warranted",
        modelWording: "The absence of a professional interpreter and social work involvement for three days represents a serious systems failure requiring immediate remediation and potentially a clinical incident review",
        keywords: ["system", "governance", "incident", "failure", "escalat", "review", "quality", "mdt", "team"],
      },
      {
        id: "s13",
        name: "Night-time crying, insomnia — unaddressed distress",
        category: "diagnosis_formulation",
        severity: "optional",
        clueInStem: "Does not sleep. Cries frequently at night.",
        whyItMatters: "Neurovegetative symptoms of depression are present but have not been formally assessed",
        modelWording: "Insomnia and nocturnal crying are neurovegetative features consistent with a depressive or grief response and require formal mental state assessment",
        keywords: ["sleep", "insomnia", "crying", "nocturnal", "neurovegetat", "depressive symptom"],
      },
    ],
    priorityOrder: {
      urgent: ["s6", "s2", "s7", "s3"],
      secondary: ["s1", "s4", "s5", "s9"],
      lowYield: ["s10", "s11", "s12", "s13"],
    },
    modelAnswer: `Immediate safety concern: Amara's weight of 38 kg with severe malnutrition and dehydration represents an immediate risk to life — cardiac arrhythmia and multi-organ failure must be considered.

Inadequate interpretation: The use of a 16-year-old daughter as sole interpreter for three days is a critical systems failure. No valid clinical assessment, let alone a capacity assessment, can be completed without a NAATI-accredited professional interpreter. This must be arranged immediately.

Capacity assessment procedurally invalid: I cannot complete a legally defensible capacity assessment in the current circumstances. Once a professional interpreter is present, I will assess capacity across four domains: understanding, retaining, weighing/using information, and communicating a decision.

Involuntary nasogastric feeding: This requires legal authority. If Amara lacks capacity, substitute decision-making under Guardianship legislation applies. If she retains capacity, her refusal is legally binding. A Tribunal or Supreme Court order may be required for involuntary feeding if no guardian is available.

Differential diagnosis: Refusal of oral intake must be differentiated — religious/cultural fasting practice, complicated grief, major depression with psychomotor retardation, PTSD with dissociation, or somatic expression of distress must all be considered.

Trauma-informed assessment: Marked distress in response to male staff must prompt immediate consideration of gender-based violence during displacement. A trauma-informed, female-led assessment should occur.

Complicated grief: The traumatic death of her husband during the boat crossing eighteen months ago, compounded by displacement and resettlement stress, raises significant concern for complicated grief disorder and PTSD.

Systems failures requiring urgent action: Social work has not been involved — refugee health services, STARTTS equivalent, and community support must be mobilised. Fatima's wellbeing as a young interpreter must be considered.`,
  },

  // ─── 2. ED / RISK ─────────────────────────────────────────────────────────
  {
    id: "q2",
    topic: "ed",
    difficulty: "difficult",
    title: "Young Man — High-Lethality Overdose in ED",
    candidateRole: "Psychiatry registrar on call",
    setting: "Emergency department, metropolitan hospital",
    stem: `You are the psychiatry registrar on call. You are asked to review Daniel, a 31-year-old man who presented to the emergency department (ED) at 2 am after being found by his flatmate on the bathroom floor unresponsive. A near-empty bottle of his housemate's oxycodone was found nearby; the housemate reports that sixty tablets were dispensed two days ago. Daniel regains consciousness after naloxone is administered. He is medically stable but drowsy.

Daniel's flatmate tells the ED nurse that Daniel has been acting strangely for the past two weeks — "not eating, not leaving his room, giving away his guitar." The flatmate also mentions that Daniel was sacked from his job as a paramedic last month, following an internal complaint made by a colleague. The flatmate is not aware of any previous psychiatric history.

When you arrive to assess Daniel, he is hostile and says: "I know what you're going to do. Just let me go home." He refuses to discuss what happened. The ED nurse informs you that Daniel has been requesting his phone but it was confiscated when staff noticed he was attempting to search "opioid lethal dose."

A review of the hospital records shows two previous ED presentations in the last twelve months — one for a laceration to the forearm and one for intoxication.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "High-lethality attempt — oxycodone overdose, premeditation likely",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "Near-empty bottle; sixty tablets dispensed two days ago; found unresponsive",
        whyItMatters: "Near-total consumption of 60 oxycodone tablets represents a high-lethality attempt requiring immediate and comprehensive risk assessment",
        modelWording: "This overdose carries high objective lethality — near-total consumption of a prescribed opioid in the context of a planned, concealed act",
        keywords: ["lethality", "lethal", "high-risk", "oxycodone", "overdose", "60 tablet", "sixty", "serious", "severe"],
      },
      {
        id: "s2",
        name: "Preparatory behaviours — giving away guitar, not eating, not leaving room",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Not eating, not leaving his room, giving away his guitar",
        whyItMatters: "Giving away prized possessions is a recognised warning sign of planned suicide — this constitutes preparatory behaviour",
        modelWording: "The act of giving away his guitar — a valued possession — constitutes a preparatory behaviour consistent with suicidal intent in the two weeks prior to the attempt",
        keywords: ["prepar", "giving away", "guitar", "possessions", "planned", "premeditat", "warning sign"],
      },
      {
        id: "s3",
        name: "Ongoing suicidal intent — searching lethal opioid doses",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "Attempting to search 'opioid lethal dose'",
        whyItMatters: "Active information-seeking about lethal doses during the acute presentation indicates ongoing suicidal ideation with intent",
        modelWording: "Active searching for 'opioid lethal dose' during the current ED presentation indicates persistent suicidal intent — this man cannot be safely discharged",
        keywords: ["search", "lethal dose", "phone", "ongoing", "intent", "active ideation"],
      },
      {
        id: "s4",
        name: "Refusal to engage — hostility, will not discuss the attempt",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "Hostile; refuses to discuss what happened; 'Just let me go home'",
        whyItMatters: "Refusal to engage significantly limits assessment — it does not diminish risk and may reflect active concealment",
        relatedLegal: "Mental Health Act criteria for involuntary assessment may be met",
        modelWording: "Daniel's refusal to engage with assessment does not reduce risk — concealment of intent in the context of a near-lethal attempt and ongoing searching behaviour raises significant concern. MHA criteria should be considered",
        keywords: ["refus", "hostile", "won't engage", "not engag", "conceal", "won't disclose", "limit", "mha", "involuntar"],
      },
      {
        id: "s5",
        name: "Occupational loss — dismissal from paramedic role",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "Sacked from his job as a paramedic last month following an internal complaint",
        whyItMatters: "Job loss in a role central to identity (paramedic), especially in the context of a complaint, represents a significant precipitant — shame, humiliation, and occupational identity loss are key drivers of suicide in this demographic",
        modelWording: "Loss of his role as a paramedic following a complaint represents a significant precipitating stressor — paramedics are a high-risk occupational group for suicide, with occupational identity and humiliation as key factors",
        keywords: ["paramedic", "job", "sacked", "dismissal", "fired", "occup", "work", "career", "identit", "humiliat"],
      },
      {
        id: "s6",
        name: "Occupational exposure to trauma — paramedic with likely vicarious trauma",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "Job as a paramedic",
        whyItMatters: "Paramedics have high rates of PTSD, moral injury, depression, and suicide — this occupational context is diagnostically significant",
        modelWording: "As a paramedic, Daniel has likely had repeated exposure to traumatic incidents — PTSD and occupational vicarious trauma must be considered in the diagnostic formulation",
        keywords: ["vicarious", "paramedic", "occupational trauma", "ptsd", "moral injury", "emergency service", "first responder"],
      },
      {
        id: "s7",
        name: "Access to means — paramedic training provides knowledge of lethal doses",
        category: "risk_self",
        severity: "important",
        clueInStem: "Job as a paramedic; searching 'opioid lethal dose'",
        whyItMatters: "Paramedics have detailed knowledge of pharmacological lethality — combined with active searching, this significantly elevates risk",
        modelWording: "Daniel's paramedic training gives him clinical knowledge of lethal doses — this increases the sophistication and lethality of any subsequent attempt",
        keywords: ["access to means", "paramedic knowledge", "knowledge of", "means", "lethality", "expertise"],
      },
      {
        id: "s8",
        name: "Previous self-harm — forearm laceration",
        category: "risk_self",
        severity: "important",
        clueInStem: "Previous ED presentation for a laceration to the forearm",
        whyItMatters: "Previous self-harm is one of the strongest predictors of future suicidal behaviour",
        modelWording: "The previous ED presentation for forearm laceration confirms a history of deliberate self-harm — a significant predictor of future suicidal behaviour",
        keywords: ["previous", "self-harm", "laceration", "forearm", "history of", "prior"],
      },
      {
        id: "s9",
        name: "Alcohol or substance use — previous intoxication presentation",
        category: "substance_use",
        severity: "important",
        clueInStem: "Previous ED presentation for intoxication",
        whyItMatters: "Substance use disinhibits suicidal behaviour and is a modifiable risk factor — the intoxication history requires clarification",
        modelWording: "A previous ED presentation for intoxication suggests possible alcohol or substance use disorder, which must be assessed as both a risk factor and a treatment target",
        keywords: ["substance", "alcohol", "intoxication", "drug", "use disorder", "drinking"],
      },
      {
        id: "s10",
        name: "Social isolation — flatmate, no family identified",
        category: "risk_self",
        severity: "important",
        clueInStem: "No family mentioned; only flatmate present",
        whyItMatters: "Social isolation amplifies suicide risk — the absence of identified family or close supports limits protective factors",
        modelWording: "No family contacts have been identified — social isolation is a significant risk amplifier. The flatmate's role as the sole support must be carefully considered in safety planning",
        keywords: ["isolation", "social", "alone", "family", "support", "protective", "flatmate"],
      },
      {
        id: "s11",
        name: "Collateral information — flatmate's account essential",
        category: "collateral",
        severity: "important",
        clueInStem: "Flatmate provides the only history given Daniel's refusal",
        whyItMatters: "When the patient refuses to engage, collateral history is the primary source of clinical information",
        modelWording: "Given Daniel's refusal to engage, collateral history from the flatmate is essential — this is the primary source of clinical information in this presentation",
        keywords: ["collateral", "flatmate", "third party", "history from", "witness", "informant"],
      },
      {
        id: "s12",
        name: "MHA criteria — involuntary assessment likely indicated",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "Refuses to engage; high-lethality attempt; ongoing intent",
        whyItMatters: "Daniel cannot be safely discharged — if he refuses voluntary admission, Mental Health Act criteria are almost certainly met",
        relatedLegal: "Mental Health Act (jurisdiction-specific) criteria for involuntary assessment",
        modelWording: "Given the near-lethal attempt, ongoing intent as evidenced by active searching, and refusal to engage, Mental Health Act criteria for involuntary assessment are almost certainly met and should be initiated",
        keywords: ["mental health act", "mha", "involuntar", "section", "scheduled", "detained", "admit"],
      },
      {
        id: "s13",
        name: "AHPRA notification — impaired registered health professional",
        category: "governance",
        severity: "important",
        clueInStem: "Former paramedic; recent dismissal following complaint",
        whyItMatters: "As a registered health professional (paramedicine is AHPRA-regulated), Daniel's treating clinicians may have mandatory reporting obligations",
        relatedLegal: "Health Practitioner Regulation National Law — mandatory reporting for impaired practitioners",
        modelWording: "Paramedics are AHPRA-regulated — treating clinicians must consider whether mandatory reporting obligations apply given this presentation",
        keywords: ["ahpra", "mandatory report", "health practitioner", "register", "notif", "profession", "report"],
      },
      {
        id: "s14",
        name: "Naloxone reversal — withdrawal risk and pain",
        category: "physical_health",
        severity: "optional",
        clueInStem: "Naloxone administered; medically stable but drowsy",
        whyItMatters: "Naloxone has a shorter half-life than oxycodone — re-sedation is possible and requires monitoring",
        modelWording: "Naloxone has a shorter half-life than oxycodone — Daniel requires medical monitoring for re-sedation and potential re-narcotisation",
        keywords: ["naloxone", "re-sedat", "half-life", "monitor", "opioid", "physical", "medical"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s3", "s4", "s12"],
      secondary: ["s2", "s5", "s7", "s8"],
      lowYield: ["s6", "s9", "s10", "s13", "s14"],
    },
    modelAnswer: `Immediate safety: This is a high-lethality attempt — near-total consumption of 60 oxycodone tablets, requiring immediate containment. Daniel cannot be safely discharged.

Ongoing suicidal intent: Active searching for 'opioid lethal dose' during the current presentation indicates persistent intent — this significantly elevates imminent risk beyond the baseline.

Preparatory behaviour: Giving away his guitar constitutes a recognised warning sign of planned suicide — this act in the two weeks prior suggests premeditation, not impulsivity.

Mental Health Act: Given the near-lethal attempt, ongoing intent, and refusal to engage with assessment, Mental Health Act criteria for involuntary assessment are almost certainly met and should be initiated.

Precipitant — occupational loss: Dismissal from his role as a paramedic following an internal complaint represents a significant precipitant. Paramedics have elevated suicide rates; occupational identity and humiliation are key drivers.

Occupational risk factors: Paramedic training confers knowledge of lethal doses, increasing the sophistication of any future attempt. Vicarious trauma and PTSD must be considered in the formulation.

History of self-harm: The previous forearm laceration and intoxication presentations establish a pattern of risk behaviours.

AHPRA: As a registered health professional, mandatory reporting obligations must be considered once the acute risk is managed.

Collateral: The flatmate is the primary source of history given Daniel's refusal to engage — this source must be fully utilised.`,
  },

  // ─── 3. PERINATAL ────────────────────────────────────────────────────────
  {
    id: "q3",
    topic: "perinatal",
    difficulty: "consultant",
    title: "Postpartum — Psychosis or Severe Depression with Psychotic Features",
    candidateRole: "Consultant psychiatrist, perinatal service",
    setting: "General hospital postnatal ward",
    stem: `You are a consultant psychiatrist with the perinatal mental health service. You are asked to review Priya, a 29-year-old woman on day four of the postnatal ward following the birth of her first child, a boy. The midwives called you because Priya has not slept in three days, is increasingly agitated, and told a midwife this morning: "My baby is not real. Someone has replaced him with a different baby."

Priya's husband Rajan tells you she was completely well during pregnancy and has no psychiatric history. He is an IT consultant who has already returned to work. He appears minimising: "She's just tired. All new mothers are like this." Priya's mother-in-law is present and says she is concerned: "In our family in India, this happened to my sister-in-law. It was very bad."

On review, Priya is highly aroused, her speech is pressured and disorganised, and she makes poor eye contact. She asks you whether the baby monitor is recording everything she says. On examination of the infant, the baby is well but Priya declines to hold him, saying "What if I hurt him by accident — I don't trust my hands."`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Postpartum psychosis — acute psychiatric emergency",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "Day 4 postpartum; no sleep in 3 days; 'baby has been replaced'; pressured disorganised speech; paranoia about baby monitor",
        whyItMatters: "Postpartum psychosis is a psychiatric emergency with significant risk of infanticide and maternal suicide — it requires urgent inpatient psychiatric admission",
        modelWording: "This presentation is consistent with postpartum psychosis — a psychiatric emergency. Day four onset, three days without sleep, delusional thinking about the baby, and disorganised speech are classical features requiring urgent inpatient psychiatric admission",
        keywords: ["postpartum psychosis", "puerperal psychosis", "emergency", "urgent", "acute", "day 4", "psychosis", "psychiatric emergency"],
      },
      {
        id: "s2",
        name: "Risk to infant — infanticide",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "'What if I hurt him by accident — I don't trust my hands'",
        whyItMatters: "Postpartum psychosis carries a 4% infanticide risk — Priya's verbalisations about not trusting her hands require immediate action",
        relatedRisk: "Infanticide; harm to infant",
        modelWording: "Priya's statement that she does not trust her hands constitutes a direct statement of concern about potential harm to the infant — the infant's safety must be immediately secured",
        keywords: ["infanticide", "harm to infant", "baby", "hurt", "risk to infant", "child", "hands", "safety of"],
      },
      {
        id: "s3",
        name: "Risk to Priya — maternal suicide",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Three days without sleep; psychotic; agitated",
        whyItMatters: "Postpartum psychosis carries a 5% maternal suicide risk — this must be directly assessed despite the acute state",
        modelWording: "The maternal suicide risk in postpartum psychosis is approximately 5% — suicidal ideation must be assessed and the risk managed alongside infant safety",
        keywords: ["maternal suicide", "suicide", "self-harm", "risk to mother", "maternal", "suicide risk"],
      },
      {
        id: "s4",
        name: "Capgras-type delusion — 'baby replaced'",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "'My baby is not real. Someone has replaced him with a different baby'",
        whyItMatters: "A Capgras-type delusional misidentification of the infant is a high-risk feature associated with infanticide — not a metaphor, to be taken literally",
        modelWording: "The belief that her baby has been replaced is a Capgras-type delusion — delusional misidentification of the infant is a specific high-risk feature associated with infanticide and must not be minimised",
        keywords: ["capgras", "replaced", "delusional", "not real", "misidentif", "delusion about baby"],
      },
      {
        id: "s5",
        name: "Urgent inpatient psychiatric admission — mother-baby unit",
        category: "disposition",
        severity: "critical",
        clueInStem: "Day 4 postnatal; full psychotic syndrome; not holding infant",
        whyItMatters: "Admission to a mother-baby unit allows treatment of the mother while maintaining the attachment relationship where safe to do so",
        relatedSystem: "Mother-baby unit; if unavailable, adult inpatient with controlled infant access",
        modelWording: "Priya requires urgent inpatient admission, ideally to a specialist mother-baby unit where the infant relationship can be maintained under supervision. If unavailable, adult inpatient admission with structured infant visiting under supervision",
        keywords: ["mother-baby unit", "inpatient", "admit", "mbu", "admiss", "hospitalisation"],
      },
      {
        id: "s6",
        name: "Husband minimising — collateral inaccurate, lack of carer insight",
        category: "family_carer",
        severity: "important",
        clueInStem: "'She's just tired. All new mothers are like this'",
        whyItMatters: "The husband's minimisation may delay help-seeking, impair informed consent for treatment, and affect Priya's safety in the home if prematurely discharged",
        modelWording: "Rajan's minimisation of Priya's symptoms is a clinical risk — psychoeducation about postpartum psychosis must be provided to him urgently, including that this is not normal tiredness",
        keywords: ["husband", "rajan", "minimis", "dismiss", "psychoeducation", "carer", "family", "insight"],
      },
      {
        id: "s7",
        name: "Family history — mother-in-law's account of a similar episode",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "'In our family in India, this happened to my sister-in-law. It was very bad.'",
        whyItMatters: "A family history of what sounds like postpartum psychosis supports the diagnosis and implies genetic vulnerability — the mother-in-law is a key informant",
        modelWording: "The mother-in-law's account of a similar episode in her family is diagnostically significant — this likely represents a family history of postpartum psychosis",
        keywords: ["family history", "mother-in-law", "genetic", "sister-in-law", "family", "heredit", "similar episode"],
      },
      {
        id: "s8",
        name: "Cultural context — South Asian family dynamics, stigma",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "Indian family; husband returned to work; mother-in-law present",
        whyItMatters: "Cultural factors — expectations of maternal competence, stigma around psychiatric illness, and gender roles — may affect engagement with treatment and disclosure",
        modelWording: "The South Asian family context may include cultural pressures around maternal performance and stigma regarding psychiatric illness — culturally sensitive engagement with the family is important",
        keywords: ["cultural", "south asian", "indian", "stigma", "family dynamic", "cultural context", "cultural safety"],
      },
      {
        id: "s9",
        name: "Sleep deprivation as trigger and maintaining factor",
        category: "physical_health",
        severity: "important",
        clueInStem: "Has not slept in three days",
        whyItMatters: "Severe sleep deprivation is both a precipitant and a perpetuating factor for postpartum psychosis — pharmacological sleep promotion is an immediate treatment priority",
        modelWording: "Three days without sleep is both a precipitant and a perpetuating factor — pharmacological sleep induction is an immediate treatment priority alongside antipsychotic treatment",
        keywords: ["sleep", "insomnia", "no sleep", "three days", "deprivation", "sedation", "sleep treatment"],
      },
      {
        id: "s10",
        name: "Paranoid ideation — baby monitor surveillance belief",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "Asks if the baby monitor is recording everything she says",
        whyItMatters: "Paranoid ideation about surveillance is an additional psychotic symptom requiring assessment — it may affect engagement with treatment",
        modelWording: "Paranoid ideation about the baby monitor recording her is a second delusional belief, confirming multi-domain psychotic illness",
        keywords: ["paranoid", "paranoia", "monitor", "recording", "surveillance", "second delusion", "persecutory"],
      },
      {
        id: "s11",
        name: "Child protection notification — infant safety in context of acute psychosis",
        category: "child_protection",
        severity: "important",
        clueInStem: "Refuses to hold baby; states concern about harming him",
        whyItMatters: "Child protection services may need to be notified — the threshold for notification is low when there is a specific statement of concern about harm to a child",
        relatedLegal: "Child Protection Act (jurisdiction-specific); mandatory reporting obligations",
        modelWording: "A child protection notification should be considered — Priya's statement about not trusting her hands, combined with the psychotic episode, meets the threshold for notification in most jurisdictions",
        keywords: ["child protection", "notification", "mandatory report", "DOCS", "child safety", "child welfare", "notify"],
      },
      {
        id: "s12",
        name: "Breastfeeding — medication compatibility required",
        category: "physical_health",
        severity: "optional",
        clueInStem: "Day 4 postnatal",
        whyItMatters: "Antipsychotic selection must consider breastfeeding compatibility if Priya intends to breastfeed",
        modelWording: "If Priya is breastfeeding, antipsychotic selection must account for infant exposure through breast milk — specialist LactMed/pharmacological advice should be sought",
        keywords: ["breastfeed", "lactation", "breast milk", "infant exposure", "medication safe", "lactmed"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4", "s5"],
      secondary: ["s6", "s7", "s9", "s11"],
      lowYield: ["s8", "s10", "s12"],
    },
    modelAnswer: `Postpartum psychosis — psychiatric emergency: Day 4 postpartum, three days without sleep, Capgras-type delusion about the infant, disorganised speech, and paranoid ideation constitute a full syndrome of postpartum psychosis — a psychiatric emergency.

Infanticide risk: Priya's statement that she does not trust her hands is a direct expression of concern about infant harm — this must be taken literally, not metaphorically. The infant's immediate safety must be secured.

Capgras delusion: The belief that her baby has been replaced is not a metaphor — this delusional misidentification is a specific high-risk feature for infanticide.

Maternal suicide: The approximately 5% maternal suicide risk in postpartum psychosis requires direct assessment.

Urgent inpatient admission: Priya requires urgent admission to a specialist mother-baby unit — this allows treatment while preserving the infant relationship under supervision. If unavailable, adult inpatient admission with structured supervised infant contact.

Child protection notification: Priya's specific statement about harming the infant meets the threshold for child protection notification in most jurisdictions.

Family: Rajan's minimisation requires urgent psychoeducation — this is not normal postnatal fatigue. The mother-in-law's account of a similar family episode is diagnostically significant.

Sleep: Pharmacological sleep induction is an immediate treatment priority.`,
  },

  // ─── 4. GOVERNANCE ───────────────────────────────────────────────────────
  {
    id: "q4",
    topic: "governance",
    difficulty: "standard",
    title: "Impaired Registrar — Supervisor Concern",
    candidateRole: "Consultant psychiatrist, inpatient unit supervisor",
    setting: "Public inpatient psychiatric unit",
    stem: `You are a consultant psychiatrist supervising a public inpatient psychiatric unit. Dr Elena Voss is a second-year psychiatry registrar on her first inpatient rotation. Over the past six weeks you have observed that Dr Voss frequently arrives 20–30 minutes late, appears fatigued and at times mildly dishevelled, and twice smelled of alcohol at the morning handover. On one occasion she charted haloperidol 50 mg orally instead of 5 mg — the medication nurse noticed the error before administration.

When you raised concerns in a recent supervision session, Dr Voss became tearful and disclosed that her partner left her six weeks ago, taking their two children. She then added: "I haven't been managing very well." She denied substance use. She asked you not to tell anyone.

A nursing staff member approaches you separately today and reports that Dr Voss was observed in the medication room alone yesterday afternoon without a documented clinical reason.`,
    totalMarks: 20,
    signals: [
      {
        id: "s1",
        name: "Patient safety — serious medication error",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "Charted haloperidol 50 mg instead of 5 mg — ten-fold dose error",
        whyItMatters: "A ten-fold opioid/antipsychotic dose error could cause serious patient harm — this is a notifiable clinical incident",
        modelWording: "The haloperidol dose error — ten times the intended dose — constitutes a serious clinical incident. The near-miss requires immediate incident reporting and clinical review",
        keywords: ["dose error", "medication error", "50mg", "ten fold", "haloperidol", "patient safety", "incident", "near-miss"],
      },
      {
        id: "s2",
        name: "Impaired practitioner — alcohol suspicion",
        category: "governance",
        severity: "critical",
        clueInStem: "Twice smelled of alcohol at morning handover",
        whyItMatters: "A doctor smelling of alcohol on two occasions during clinical duties is an impaired practitioner situation requiring immediate management — patient safety must be prioritised",
        relatedLegal: "Health Practitioner Regulation National Law — mandatory reporting of impairment",
        modelWording: "Smelling of alcohol on two separate occasions during clinical duties constitutes reasonable concern for impairment — this must be treated as an impaired practitioner situation",
        keywords: ["alcohol", "impair", "substance", "drunk", "drinking", "smell", "intoxicat", "impaired practitioner"],
      },
      {
        id: "s3",
        name: "Medication room access without documentation — diversion risk",
        category: "governance",
        severity: "critical",
        clueInStem: "Observed in the medication room alone without a documented clinical reason",
        whyItMatters: "Undocumented access to the medication room by an impaired practitioner raises serious concern for medication diversion — this may explain the denial of substance use",
        modelWording: "Undocumented medication room access in the context of suspected impairment must prompt consideration of medication diversion — this requires immediate investigation and escalation",
        keywords: ["medication room", "diversion", "access", "undocumented", "drugs", "self-prescr", "drug access"],
      },
      {
        id: "s4",
        name: "Mandatory AHPRA notification — impaired health practitioner",
        category: "governance",
        severity: "critical",
        clueInStem: "Alcohol odour during clinical duties; medication error; medication room access",
        whyItMatters: "The National Law imposes mandatory reporting obligations on practitioners who have a reasonable belief that a colleague is practising while impaired — this threshold is almost certainly met",
        relatedLegal: "Health Practitioner Regulation National Law s141 — mandatory notification of impairment",
        modelWording: "The combination of alcohol odour, a serious medication error, and undocumented medication room access almost certainly triggers a mandatory AHPRA notification for impairment — this obligation cannot be overridden by a request for confidentiality",
        keywords: ["ahpra", "mandatory", "notif", "report", "national law", "impairment", "must report", "s141", "obligation"],
      },
      {
        id: "s5",
        name: "Confidentiality limits — cannot honour Dr Voss's request",
        category: "governance",
        severity: "critical",
        clueInStem: "She asked you not to tell anyone",
        whyItMatters: "The request for confidentiality does not override mandatory reporting obligations or patient safety duties",
        modelWording: "Dr Voss's request for confidentiality cannot be honoured where patient safety is at risk and mandatory reporting obligations apply — I must explain this to her directly with compassion",
        keywords: ["confidential", "cannot keep", "mandatory report", "override", "patient safety", "disclose", "not promise"],
      },
      {
        id: "s6",
        name: "Dr Voss's mental health — acute life stressor, possible depression",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "Partner left six weeks ago, taking two children; 'I haven't been managing very well'; tearful",
        whyItMatters: "Dr Voss is experiencing a significant acute psychosocial stressor with signs of distress — her wellbeing matters alongside the patient safety concern",
        modelWording: "Dr Voss is experiencing a significant acute loss — separation from her partner and children. She requires referral for her own mental health support, separate from the performance management process",
        keywords: ["wellbeing", "mental health", "depression", "stress", "support", "eap", "referral", "her own", "voss mental", "colleague welfare"],
      },
      {
        id: "s7",
        name: "Immediate duty of care — remove from unsupervised clinical duties",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "Smelled of alcohol; medication error; declining performance",
        whyItMatters: "Until the situation is clarified, Dr Voss cannot safely practise unsupervised — patients on the unit are at risk",
        modelWording: "Dr Voss must be removed from unsupervised clinical duties immediately pending investigation — I cannot allow her to continue practising while these safety concerns are unresolved",
        keywords: ["remove", "off duty", "stand down", "unsupervised", "clinical duties", "temporarily", "pending"],
      },
      {
        id: "s8",
        name: "Escalation — clinical director/medical director notification",
        category: "governance",
        severity: "important",
        clueInStem: "Supervisor role; serious incidents",
        whyItMatters: "This situation exceeds the scope of supervision — escalation to the medical director and clinical director is required",
        modelWording: "This situation must be escalated to the medical director and clinical director immediately — it is beyond the scope of a supervision relationship to manage alone",
        keywords: ["escalat", "medical director", "clinical director", "senior", "management", "beyond supervision", "senior management"],
      },
      {
        id: "s9",
        name: "Documentation — contemporaneous records of observations",
        category: "governance",
        severity: "important",
        clueInStem: "Multiple incidents across six weeks",
        whyItMatters: "Contemporaneous documentation of observed concerns is essential for any formal process",
        modelWording: "Contemporaneous documentation of every observed incident — including dates, times, witnesses, and the nature of the concern — is essential",
        keywords: ["document", "contemporaneous", "record", "written", "notes", "date", "time", "evidence"],
      },
      {
        id: "s10",
        name: "Therapeutic approach — compassionate but clear",
        category: "mdt_conflict",
        severity: "optional",
        clueInStem: "Tearful disclosure of major personal stressor",
        whyItMatters: "The supervisor role requires both clear action on safety and a compassionate approach to a colleague in distress",
        modelWording: "The conversation with Dr Voss must acknowledge her distress compassionately while being clear that patient safety obligations cannot be set aside",
        keywords: ["compassion", "therapeutic", "supportive", "empath", "colleague", "clear and kind", "balance"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4", "s7"],
      secondary: ["s5", "s6", "s8", "s9"],
      lowYield: ["s10"],
    },
    modelAnswer: `Immediate patient safety: The ten-fold haloperidol dose error is a serious clinical incident requiring immediate incident reporting. Dr Voss cannot continue in unsupervised clinical roles pending investigation.

Impaired practitioner: Alcohol odour on two occasions during clinical duties constitutes an impaired practitioner situation — this takes priority over all other considerations.

Medication diversion: Undocumented medication room access in the context of suspected impairment must prompt consideration of diversion. This requires urgent investigation.

Mandatory AHPRA notification: The combination of alcohol odour, a serious medication error, and undocumented medication room access almost certainly triggers a mandatory notification for impairment under the National Law. Dr Voss's request for confidentiality cannot override this obligation.

Escalation: This must be escalated immediately to the medical director and clinical director — it is beyond the scope of a supervisory relationship.

Dr Voss's wellbeing: She is experiencing a significant acute loss. She requires her own mental health referral, separate from the performance and safety process. These two tracks must run in parallel.

Documentation: Every observed incident must be documented contemporaneously with dates, times, and witnesses.`,
  },

  // ─── 5. OLD AGE ──────────────────────────────────────────────────────────
  {
    id: "q5",
    topic: "old_age",
    difficulty: "difficult",
    title: "Dementia — Elder Abuse and Capacity",
    candidateRole: "Consultant old age psychiatrist",
    setting: "Community mental health, home visit",
    stem: `You are a consultant old age psychiatrist conducting a home visit for George, an 82-year-old retired engineer referred by his GP for cognitive decline. George's wife Margaret, 79, is present. The referring GP's letter notes memory concerns, two recent falls, and a query regarding driving fitness.

During your assessment, George's MMSE is 19/30. He is pleasant and engaged but significantly confabulates, is disoriented to date, and cannot recall three objects at five minutes. When you ask about his daily activities, he says he still drives to the hardware store "most days." Margaret appears anxious and is reluctant to speak in front of George. When George goes to use the bathroom, she lowers her voice and tells you: "He transferred all our savings — $180,000 — to our nephew two months ago. The nephew came to stay for three weeks. I didn't know it had happened until after. George doesn't remember doing it."

On reviewing the home, you notice the house is unkempt, the kitchen contains out-of-date food, and several medications are scattered unsorted on the bench.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Elder financial abuse — probable",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "$180,000 transferred to nephew; George lacks memory of the transaction; nephew stayed for three weeks",
        whyItMatters: "Transfer of a substantial sum by a cognitively impaired person to a relative who was present immediately before is highly suspicious for elder financial abuse",
        relatedLegal: "Adult Safeguarding legislation; police referral may be warranted; Guardianship Tribunal",
        modelWording: "The transfer of $180,000 to a nephew by a man with significant cognitive impairment, while the nephew was resident in the home, is highly suspicious for elder financial abuse and must be investigated and reported to adult safeguarding services",
        keywords: ["financial abuse", "elder abuse", "180,000", "nephew", "transfer", "safeguard", "adult protection", "financial exploit"],
      },
      {
        id: "s2",
        name: "Driving with dementia — immediate road safety risk",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "'He still drives to the hardware store most days'; MMSE 19/30",
        whyItMatters: "A person with an MMSE of 19 who is confabulating, disoriented, and unable to recall three objects is very unlikely to be fit to drive — this poses an immediate risk to the public",
        relatedLegal: "Mandatory duty to report to licensing authority in most Australian/NZ jurisdictions",
        modelWording: "George's current cognitive impairment makes him unsafe to drive — I have a mandatory reporting obligation to the relevant licensing authority and must discuss cessation of driving with him and Margaret",
        keywords: ["driving", "unsafe", "fitness to drive", "licence", "road safety", "mandatory report", "transport", "motor vehicle", "driving cessation"],
      },
      {
        id: "s3",
        name: "Capacity — for financial decisions, retrospectively impaired",
        category: "capacity",
        severity: "critical",
        clueInStem: "MMSE 19/30; confabulating; cannot recall the transfer",
        whyItMatters: "George likely lacked capacity for the financial decision — this has direct implications for whether the transfer can be challenged legally",
        relatedLegal: "Guardianship Act; Power of Attorney legislation; potential role for VCAT/Tribunal",
        modelWording: "George's current and likely historical cognitive impairment raises serious doubt about whether he had capacity for the financial transaction — this has direct legal implications and requires legal referral",
        keywords: ["capac", "financial decision", "lack capacity", "capacity for", "power of attorney", "tribunal", "vcat", "legal"],
      },
      {
        id: "s4",
        name: "Margaret as possible victim of financial abuse and carer in distress",
        category: "family_carer",
        severity: "critical",
        clueInStem: "Margaret anxious, speaks privately, unknown transaction depleted joint savings",
        whyItMatters: "Margaret is potentially also a victim of this financial abuse — her own needs, safety, and vulnerability must be assessed independently",
        modelWording: "Margaret is potentially a co-victim of the financial abuse — the depletion of joint savings affects her financial security and wellbeing. She requires independent assessment and support",
        keywords: ["margaret", "wife", "carer", "victim", "carer burden", "carer stress", "her needs", "independent", "carer support"],
      },
      {
        id: "s5",
        name: "Falls — physical safety and fall risk assessment",
        category: "physical_health",
        severity: "important",
        clueInStem: "Two recent falls",
        whyItMatters: "Falls in a cognitively impaired 82-year-old require fall risk assessment, medication review, and home modification",
        modelWording: "Two recent falls in an 82-year-old with cognitive impairment require formal fall risk assessment, medication review, and OT home safety assessment",
        keywords: ["falls", "fall risk", "injury", "OT", "occupational therapy", "home modification", "physical safety", "fracture"],
      },
      {
        id: "s6",
        name: "Medication management — unsorted medications on bench",
        category: "physical_health",
        severity: "important",
        clueInStem: "Several medications scattered unsorted on the bench",
        whyItMatters: "Disorganised medication management in a person with dementia risks accidental overdose, missed doses, or drug interactions",
        modelWording: "Unsorted medications accessible in a cognitively impaired person's home represents a medication safety risk — a pharmacist medication review, dose administration aids, and carer medication management should be arranged",
        keywords: ["medication", "medication management", "dose", "pharmacy", "webster pack", "pill", "unsorted", "medication safety"],
      },
      {
        id: "s7",
        name: "Out-of-date food — nutritional neglect and self-care failure",
        category: "physical_health",
        severity: "important",
        clueInStem: "Kitchen contains out-of-date food; unkempt house",
        whyItMatters: "Environmental neglect and out-of-date food indicate that basic self-care needs are unmet and the home environment is unsafe",
        modelWording: "The unkempt home and out-of-date food indicate that George and Margaret are struggling to maintain adequate self-care — community support services must be urgently arranged",
        keywords: ["food", "unkempt", "self-care", "neglect", "nutrition", "community support", "home care", "ACAT", "acat", "aged care"],
      },
      {
        id: "s8",
        name: "Dementia diagnosis — formal confirmation and disclosure",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "MMSE 19/30; confabulates; disoriented; cannot recall objects at 5 minutes",
        whyItMatters: "The clinical picture is consistent with moderate dementia — formal diagnosis, aetiology, and disclosure require structured management",
        modelWording: "The cognitive profile is consistent with moderate dementia — formal neuropsychological and neuroimaging work-up, followed by diagnosis disclosure to George and Margaret, is required",
        keywords: ["dementia", "diagnosis", "MMSE", "cognitive", "MCI", "alzheimer", "neuropsych", "imaging", "formal diagnosis"],
      },
      {
        id: "s9",
        name: "Mandatory reporting — adult safeguarding and licensing authority",
        category: "governance",
        severity: "important",
        clueInStem: "Elder financial abuse; unsafe driving",
        whyItMatters: "Two separate mandatory reporting obligations arise: to adult safeguarding services for suspected elder abuse, and to the licensing authority regarding driving safety",
        modelWording: "Two mandatory reporting obligations must be met: adult safeguarding services for the suspected financial abuse, and the licensing authority for the driving safety concern",
        keywords: ["mandatory", "report", "safeguard", "licensing", "duty to report", "obligat"],
      },
      {
        id: "s10",
        name: "EPOA / Enduring Power of Attorney — whether one exists and who holds it",
        category: "capacity",
        severity: "important",
        clueInStem: "Large financial transfer; query capacity",
        whyItMatters: "The existence and current status of an Enduring Power of Attorney is directly relevant to who has legal authority to manage George's financial affairs",
        modelWording: "It is essential to establish whether a valid Enduring Power of Attorney exists, who holds it, and whether it is currently operative — this determines the legal framework for financial and medical decision-making",
        keywords: ["EPOA", "power of attorney", "enduring", "attorney", "legal authority", "who decides", "substitute"],
      },
      {
        id: "s11",
        name: "Collateral from GP and other sources",
        category: "collateral",
        severity: "optional",
        clueInStem: "GP referred; only family informants so far",
        whyItMatters: "The GP, other health providers, and potentially the nephew may hold relevant clinical and contextual information",
        modelWording: "Collateral from the GP, pharmacist, and other health providers will assist in establishing the longitudinal cognitive trajectory",
        keywords: ["collateral", "GP", "pharmacist", "other provider", "longitudinal", "history from"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6", "s7", "s9"],
      lowYield: ["s8", "s10", "s11"],
    },
    modelAnswer: `Elder financial abuse: The transfer of $180,000 to a nephew by a cognitively impaired man, during a three-week visit by that nephew, is highly suspicious for elder financial abuse and must be reported to adult safeguarding services.

Driving — immediate risk: George is currently driving with an MMSE of 19 — this is a public safety issue requiring mandatory reporting to the licensing authority and immediate cessation of driving.

Capacity for financial decisions: George likely lacked capacity for the financial transfer — this must be documented and referred for legal review, including examination of any Enduring Power of Attorney.

Margaret as co-victim: Margaret is also potentially a victim of financial abuse — the depletion of joint savings affects her security. She requires independent assessment and support.

Falls and physical safety: Two recent falls require formal fall risk assessment, medication review, and OT home safety assessment.

Medication safety: Unsorted medications accessible in a cognitively impaired person's home require urgent pharmacist review and dose administration aids.

Environmental neglect: Unkempt home and out-of-date food indicate inadequate self-care — urgent community support assessment (ACAT) should be arranged.

Two mandatory reporting obligations: Adult safeguarding for suspected financial abuse, and the licensing authority for unsafe driving.`,
  },

  // ─── 6. FORENSIC / RISK ──────────────────────────────────────────────────
  {
    id: "q6",
    topic: "forensic",
    difficulty: "consultant",
    title: "Forensic — Violence Risk, Stalking and Mental Illness",
    candidateRole: "Consultant psychiatrist, community mental health team",
    setting: "Community mental health outpatient clinic",
    stem: `You are a consultant psychiatrist in a community mental health team. You are reviewing Nathan, a 38-year-old man with a longstanding diagnosis of paranoid schizophrenia. Nathan's case manager has urgently escalated to you today after a call from police.

Police have informed the team that Nathan's ex-partner, Lisa, has lodged a formal complaint. She reports that Nathan has contacted her fifty times in the past week via text message, waited outside her workplace on three occasions, and left a note on her car that read: "I know you are with someone else. This will not stand." Lisa has obtained an Intervention Order (IO). Nathan currently has unsupervised access to his own flat and attends the clinic voluntarily.

At today's appointment, Nathan presents as calm and cooperative. He denies any intention to harm Lisa. He says the messages were "just checking she was okay." He reports he stopped his depot antipsychotic two weeks ago because "it makes my thinking foggy." He has a history of one assault on a previous partner eight years ago, for which he received a community corrections order. He denies any current substance use.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Stalking behaviour — structured risk to Lisa",
        category: "risk_others",
        severity: "critical",
        clueInStem: "50 texts in one week; waited outside workplace three times; note on car",
        whyItMatters: "This pattern of behaviour meets the criteria for stalking and represents a structured, escalating risk to Lisa's safety",
        modelWording: "Nathan's behaviour meets the criteria for stalking — 50 contacts in one week, workplace surveillance on three occasions, and a written note with an implicit threat constitute a structured and escalating pattern of risk",
        keywords: ["stalk", "risk to", "lisa", "victim", "50", "contact", "workplace", "threat", "escalat"],
      },
      {
        id: "s2",
        name: "Implicit threat in the note — 'This will not stand'",
        category: "risk_others",
        severity: "critical",
        clueInStem: "'This will not stand'",
        whyItMatters: "This phrase constitutes an implicit threat — when combined with jealousy, stalking behaviour, and history of partner violence, this significantly elevates the risk of serious harm",
        modelWording: "'This will not stand' is an implicit threat — in the context of jealousy, stalking, and a history of partner violence, this must be interpreted as indicating serious risk of harm to Lisa",
        keywords: ["threat", "implicit", "this will not stand", "note", "threatening", "warning"],
      },
      {
        id: "s3",
        name: "Non-adherence to depot antipsychotic — psychotic relapse risk",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "Stopped depot antipsychotic two weeks ago",
        whyItMatters: "Stopping depot antipsychotic in paranoid schizophrenia with a history of violence is a serious clinical event — decompensation may drive escalation of violence",
        modelWording: "Cessation of depot antipsychotic two weeks ago in a man with paranoid schizophrenia and a history of partner violence is a high-risk clinical event — psychotic decompensation may directly drive escalation of violence towards Lisa",
        keywords: ["depot", "antipsychotic", "non-adherence", "stopped", "medication", "adherence", "relapse", "decompensation"],
      },
      {
        id: "s4",
        name: "History of intimate partner violence — previous assault on partner",
        category: "risk_others",
        severity: "critical",
        clueInStem: "History of one assault on a previous partner eight years ago",
        whyItMatters: "Previous intimate partner violence is the strongest predictor of future partner violence — this history doubles the risk assessment weight",
        modelWording: "The documented history of intimate partner violence — an assault resulting in a community corrections order — is the single most important historical predictor of future violence in this presentation",
        keywords: ["history", "previous", "assault", "intimate partner", "domestic violence", "prior", "conviction", "corrections"],
      },
      {
        id: "s5",
        name: "Jealousy / morbid jealousy as psychotic driver",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "'I know you are with someone else. This will not stand.'",
        whyItMatters: "Morbid jealousy (Othello syndrome) is a specific high-risk feature associated with severe violence, including homicide, against a partner or perceived rival",
        modelWording: "The note suggests possible morbid jealousy — a delusional or overvalued belief that the partner is being unfaithful. This is associated with significant risk of severe violence",
        keywords: ["morbid jealousy", "othello", "jealousy", "infidelity", "with someone else", "delusional jealousy", "jealous"],
      },
      {
        id: "s6",
        name: "Duty to protect / warn — Lisa's safety",
        category: "risk_others",
        severity: "critical",
        clueInStem: "Explicit threat; stalking pattern; Nathan is an identified patient with an identified victim",
        whyItMatters: "The identified victim (Lisa) may need to be warned or law enforcement contacted — a duty to protect the third party exists in this clinical context",
        relatedLegal: "Duty to warn/protect third parties; coordination with police",
        modelWording: "I have a duty to consider warning or protecting the identified third-party victim, Lisa. Coordination with police regarding the risk is appropriate — this is not a breach of confidentiality where there is imminent risk of serious harm",
        keywords: ["duty to warn", "duty to protect", "warn", "lisa", "notify police", "third party", "victim", "protect"],
      },
      {
        id: "s7",
        name: "Intervention Order — clinical implications and assessment of its effectiveness",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "Lisa has obtained an Intervention Order",
        whyItMatters: "An IO alone does not reliably protect victims — clinical risk management must not assume the IO is sufficient",
        relatedLegal: "Family Violence Protection Act; IO compliance monitoring",
        modelWording: "The Intervention Order does not constitute adequate risk management in isolation — its effectiveness depends on Nathan's compliance, which requires clinical assessment",
        keywords: ["intervention order", "IO", "AVO", "DVO", "restraining order", "compliance", "protection order"],
      },
      {
        id: "s8",
        name: "Voluntary status — consider involuntary assessment",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "Attends clinic voluntarily; stopped depot two weeks ago; stalking and threatening behaviour",
        whyItMatters: "Nathan is currently high-risk and non-adherent — if he does not agree to restart his depot, MHA criteria should be considered",
        modelWording: "If Nathan declines to recommence his depot antipsychotic, I should assess whether Mental Health Act criteria for involuntary treatment are met — non-adherence in the context of high violence risk may satisfy the harm-to-others criterion",
        keywords: ["involuntar", "mha", "mental health act", "section", "criteria", "voluntary", "compulsory", "treatment order"],
      },
      {
        id: "s9",
        name: "Structured risk assessment tool",
        category: "risk_others",
        severity: "important",
        clueInStem: "History of violence; current threat; mental illness",
        whyItMatters: "A structured professional judgement tool (e.g. HCR-20) should be used to systematically assess the historical, clinical, and risk management variables",
        modelWording: "A structured professional judgement tool such as the HCR-20 should be applied — this provides a systematic framework for assessing historical, clinical, and risk management factors",
        keywords: ["HCR-20", "structured risk", "risk assessment tool", "structured professional", "actuarial", "risk tool", "violence risk"],
      },
      {
        id: "s10",
        name: "Minimisation and lack of insight",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "'Just checking she was okay'; denies any intention to harm",
        whyItMatters: "Minimisation of the behaviour is consistent with poor insight and/or active deception — it must not be taken at face value",
        modelWording: "Nathan's characterisation of 50 texts as 'just checking she was okay' represents significant minimisation — this must not be accepted at face value and may indicate poor insight or concealment of intent",
        keywords: ["minimis", "insight", "denial", "not accept at face value", "minimising", "lack of insight", "conceal"],
      },
      {
        id: "s11",
        name: "Safety planning — Nathan's accommodation and supervision",
        category: "disposition",
        severity: "important",
        clueInStem: "Unsupervised access to own flat",
        whyItMatters: "Nathan's current living situation provides no oversight — closer monitoring, increased contact frequency, and potentially inpatient admission should be considered",
        modelWording: "Nathan's current unsupervised living situation is inadequate given the risk level — increased monitoring, more frequent contact, or inpatient admission should be considered",
        keywords: ["supervision", "accommodation", "unsupervised", "monitoring", "increase contact", "admission", "living situation"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4", "s5", "s6"],
      secondary: ["s7", "s8", "s9", "s10"],
      lowYield: ["s11"],
    },
    modelAnswer: `Imminent violence risk: This is a high-risk clinical situation. Nathan's behaviour — 50 contacts, workplace surveillance, and a written implicit threat — constitutes stalking. The note 'This will not stand' is an implicit threat in the context of jealousy, prior intimate partner violence, and recent antipsychotic cessation.

Morbid jealousy: The content of the note suggests delusional or overvalued jealousy — Othello syndrome — which carries a specific and high risk of severe violence, including homicide.

Previous intimate partner violence: The assault eight years ago is the single most important historical predictor of future violence and significantly elevates this risk assessment.

Depot cessation: Stopping his depot two weeks ago in the context of this escalating behaviour is a critical clinical event — psychotic decompensation may directly drive violence escalation.

Duty to protect/warn: I have a duty to consider Lisa's safety — coordination with police and potentially direct notification is appropriate and does not constitute a breach of confidentiality where there is imminent serious risk.

Intervention Order: The IO alone does not constitute adequate risk management — clinical assessment of Nathan's compliance and intent is essential.

MHA consideration: If Nathan refuses to recommence his depot, Mental Health Act criteria for involuntary treatment may be met on the basis of risk to others.

Structured risk assessment: A formal risk assessment tool (e.g. HCR-20) should be applied.`,
  },
];

// Filter by topic
export function getStemsByTopic(topic: TopicKey): QuizStem[] {
  if (topic === "random") return QUIZ_STEMS;
  return QUIZ_STEMS.filter((s) => s.topic === topic);
}

// Get a random stem for a topic
export function getRandomStem(topic: TopicKey, difficulty?: DifficultyKey): QuizStem {
  let pool = getStemsByTopic(topic);
  if (difficulty) {
    const filtered = pool.filter((s) => s.difficulty === difficulty);
    if (filtered.length > 0) pool = filtered;
  }
  return pool[Math.floor(Math.random() * pool.length)];
}
