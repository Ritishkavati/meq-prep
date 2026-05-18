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

  // ─── 7. CHILD & ADOLESCENT ───────────────────────────────────────────────
  {
    id: "q7",
    topic: "child_adolescent",
    difficulty: "consultant",
    title: "Aboriginal Adolescent — Complex Trauma and Polypharmacy",
    candidateRole: "Consultant child and adolescent psychiatrist",
    setting: "Emergency department, general hospital",
    stem: `You are the consultant child and adolescent psychiatrist on call. You are asked to review Tyler, a 14-year-old Aboriginal boy who was brought to the emergency department by police at 11 pm after he smashed a window at his current group home and threatened to hurt himself. He is now calm, sitting with his residential carer, playing cards.

The residential carer informs you that Tyler has recently moved to his ninth placement in seven years. He was removed from his mother's care at age 5 following chronic neglect and exposure to severe domestic violence; his biological father was incarcerated when Tyler was 6. He has had no contact with extended family. He is currently prescribed quetiapine 150 mg nocte, methylphenidate long-acting 54 mg morning, and sodium valproate 400 mg twice daily — all commenced at previous placements. He attends school irregularly.

The residential carer — a 22-year-old casual worker on her third shift — cannot access Tyler's previous mental health records. She tells you the window was broken when Tyler was told he would be moving to a new placement "next week." You note bruising on Tyler's forearm.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Complex developmental trauma — not conduct disorder",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "Removed at age 5; chronic neglect; severe domestic violence; father incarcerated",
        whyItMatters: "Tyler's behaviour is most parsimoniously explained by complex developmental trauma and attachment disruption — a conduct disorder or oppositional label would be a diagnostic error",
        modelWording: "Tyler's presentation is best understood through a complex developmental trauma framework: chronic neglect, domestic violence exposure, parental loss, and profound attachment disruption across nine placements",
        keywords: ["trauma", "complex", "developmental", "attachment", "neglect", "domestic violence", "not conduct", "trauma-inform"],
      },
      {
        id: "s2",
        name: "Placement change as precipitant — attachment rupture trigger",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "Window broken when told he would be moving to a new placement 'next week'",
        whyItMatters: "The placement change is the direct precipitant — Tyler's behaviour is an attachment-based crisis response, not random aggression",
        modelWording: "The precipitant is unambiguous: notification of his ninth placement change triggered an acute distress response. This is an attachment rupture, not a behavioural incident",
        keywords: ["placement", "precipitant", "trigger", "ninth", "attachment rupture", "moving", "placement change"],
      },
      {
        id: "s3",
        name: "Polypharmacy — three medications of uncertain indication",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "Quetiapine, methylphenidate long-acting, sodium valproate — all commenced at previous placements; no records available",
        whyItMatters: "Three psychotropic medications prescribed across multiple placements without documented diagnosis, consent review, or outcome assessment is a serious clinical governance concern",
        relatedSystem: "Clinical governance; prescribing review; medication reconciliation",
        modelWording: "Tyler is on three psychotropic medications of uncertain current indication, commenced across different placements without available records. A comprehensive medication review with therapeutic target clarification is urgently required",
        keywords: ["polypharmacy", "three medication", "quetiapine", "methylphenidate", "valproate", "medication review", "indication", "no records"],
      },
      {
        id: "s4",
        name: "Unexplained bruising — safeguarding concern",
        category: "child_protection",
        severity: "critical",
        clueInStem: "Bruising on Tyler's forearm",
        whyItMatters: "Unexplained bruising in a child in out-of-home care requires a safeguarding assessment — the source must be established before discharge",
        relatedLegal: "Child Protection Act; mandatory reporting obligations",
        modelWording: "The unexplained forearm bruising requires immediate safeguarding assessment — its origin must be established. A mandatory report may be required",
        keywords: ["bruising", "bruise", "safeguard", "child protection", "mandatory report", "unexplained", "physical"],
      },
      {
        id: "s5",
        name: "Risk assessment — threat to self",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Threatened to hurt himself",
        whyItMatters: "The self-harm threat requires direct risk assessment — in the context of trauma, hopelessness about placement, and developmental stage, suicidal ideation must be excluded",
        modelWording: "Tyler's threat to hurt himself requires direct and developmentally appropriate assessment — in the context of placement disruption and cumulative trauma, suicidal ideation must be explored",
        keywords: ["risk", "self-harm", "suicidal", "hurt himself", "threat", "risk assessment", "ideation"],
      },
      {
        id: "s6",
        name: "Aboriginal cultural identity and cultural dislocation",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "Aboriginal boy; no contact with extended family",
        whyItMatters: "An Aboriginal child in out-of-home care with no connection to extended family or community represents a failure of the Aboriginal Child Placement Principle — cultural identity loss is a significant mental health risk factor",
        relatedCultural: "Aboriginal Child Placement Principle; kinship care; cultural connection",
        modelWording: "Tyler's cultural disconnection — no contact with extended family and likely no connection to Aboriginal community — represents both a safeguarding failure and a significant mental health risk factor. The Aboriginal Child Placement Principle should have been applied",
        keywords: ["aboriginal", "cultural", "kinship", "placement principle", "cultural identity", "community", "extended family", "cultural dislocation"],
      },
      {
        id: "s7",
        name: "Inadequate carer — inexperienced casual worker cannot access records",
        category: "system_pressure",
        severity: "important",
        clueInStem: "22-year-old casual worker on her third shift; cannot access previous mental health records",
        whyItMatters: "A child with complex needs is in the care of an inexperienced casual worker who cannot access clinical records — this is a systemic failure requiring escalation",
        relatedSystem: "Out-of-home care system; therapeutic residential care; continuity of care records",
        modelWording: "The absence of clinical records and the inexperience of the current carer are systemic failures that must be escalated to child protection services and the agency responsible for Tyler's care",
        keywords: ["carer", "casual", "inexperienced", "no records", "systemic", "escalat", "third shift", "out-of-home care"],
      },
      {
        id: "s8",
        name: "Consent for treatment — state as guardian",
        category: "capacity",
        severity: "important",
        clueInStem: "Child removed from family care; in state care",
        whyItMatters: "With the state as Tyler's guardian, consent for psychiatric assessment and treatment must be obtained from the appropriate state authority",
        relatedLegal: "Child Protection Act; statutory guardian for child in state care; consent for medical treatment",
        modelWording: "As Tyler is in state care, consent for psychiatric assessment and treatment must be obtained from the statutory guardian — the residential carer does not have authority to provide this",
        keywords: ["consent", "guardian", "state care", "statutory", "authority", "parental responsibility", "guardian consent"],
      },
      {
        id: "s9",
        name: "Diagnostic formulation — differential to ADHD and bipolar",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "On methylphenidate (ADHD indication?) and valproate (mood stabiliser?); uncertain previous diagnoses",
        whyItMatters: "ADHD and childhood bipolar disorder are commonly misapplied in complex trauma presentations — the diagnostic basis for current medications must be challenged",
        modelWording: "The current medications suggest diagnoses of ADHD and possibly bipolar disorder — in a child with complex trauma, both diagnoses may be trauma-related misattributions requiring re-evaluation",
        keywords: ["ADHD", "bipolar", "differential", "misdiagnosis", "trauma-related", "re-evaluate", "diagnostic uncertainty", "mood disorder"],
      },
      {
        id: "s10",
        name: "School attendance — educational needs and functional impairment",
        category: "diagnosis_formulation",
        severity: "optional",
        clueInStem: "Attends school irregularly",
        whyItMatters: "Irregular school attendance indicates functional impairment and reduced protective factors",
        modelWording: "Irregular school attendance adds to the functional impact — school connection is a key protective factor and its absence is clinically significant",
        keywords: ["school", "education", "irregular", "attendance", "functioning", "protective"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s4", "s5"],
      secondary: ["s3", "s6", "s7", "s8"],
      lowYield: ["s9", "s10"],
    },
    modelAnswer: `Complex developmental trauma: Tyler's behaviour is a trauma and attachment-based crisis response, not a conduct disorder. Chronic neglect, domestic violence exposure, parental loss, and nine placement changes constitute profound developmental adversity.

Precipitant: The direct trigger is the notification of another placement change — this is an attachment rupture response, not random aggression.

Safeguarding: Unexplained bruising on the forearm requires immediate safeguarding assessment and likely a mandatory child protection notification.

Risk assessment: Tyler's threat to hurt himself requires direct, developmentally appropriate assessment including suicidal ideation in the context of cumulative trauma and placement hopelessness.

Cultural safety: As an Aboriginal child in out-of-home care with no family or community connection, the Aboriginal Child Placement Principle has likely not been applied — cultural identity disconnection is a significant mental health risk.

Polypharmacy: Three psychotropic medications of uncertain indication, commenced across multiple placements without records, require urgent medication reconciliation and therapeutic target review.

Systemic failures: The inexperienced casual carer, unavailable records, and state guardianship issues must all be escalated — a holistic system response is required, not just a psychiatric label.

Consent: As Tyler is in state care, the statutory guardian must provide consent for assessment and treatment.`,
  },

  // ─── 8. CAPACITY / MHA — CTO ─────────────────────────────────────────────
  {
    id: "q8",
    topic: "capacity_mha",
    difficulty: "difficult",
    title: "CTO Review — First Episode Psychosis, Recovery and Rights",
    candidateRole: "Junior consultant psychiatrist, community mental health team",
    setting: "Community mental health outpatient clinic",
    stem: `You are a junior consultant psychiatrist in a community mental health team. You are reviewing Marcus, a 26-year-old man with a diagnosis of first-episode psychosis. He was placed on a Community Treatment Order (CTO) eighteen months ago following an acute psychotic episode during which he became acutely agitated and damaged property in his apartment building. He has no history of violence to persons.

Marcus is prescribed paliperidone depot 100 mg monthly. He has received all depot injections on time and has had no further hospital admissions. He works three days per week at a bookshop, has reconnected with his family, and has been attending a weekly recovery group. He tells you: "I'm doing well. The medication helps but it also makes me feel stiff and tired. I want to come off the CTO — I understand I need to keep taking the medication."

His case manager tells you that his mental state has been consistently stable. The CTO is due to expire in six weeks.

Marcus's mother contacts you separately before the appointment to express concern: "He says he's better but I'm terrified of what happens if he goes off the order."`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Least restrictive principle — review CTO necessity",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "Stable for 18 months; all depots received; no admissions; no violence to persons",
        whyItMatters: "The Mental Health Act requires that involuntary treatment be the least restrictive option — 18 months of stability, adherence, and no violence must prompt genuine consideration of discontinuing the CTO",
        relatedLegal: "Mental Health Act — least restrictive principle; criteria for CTO continuation",
        modelWording: "The least restrictive principle requires me to genuinely consider whether a CTO is still necessary — 18 months of adherence, stability, and community functioning is a strong argument for discontinuation",
        keywords: ["least restrictive", "necessity", "cto necessary", "continuation", "criteria", "still needed", "review criteria", "proportionate"],
      },
      {
        id: "s2",
        name: "Marcus's insight and autonomy — requests voluntary treatment",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "'I understand I need to keep taking the medication'",
        whyItMatters: "Marcus is demonstrating insight and voluntarily agreeing to continued treatment — this significantly weakens the justification for compulsion",
        modelWording: "Marcus is demonstrating intact insight and voluntary agreement to continued medication — the legal and ethical basis for compulsion is substantially weakened",
        keywords: ["insight", "autonomous", "voluntary", "agrees to medic", "understands", "self-directed", "voluntary treatment", "own decision"],
      },
      {
        id: "s3",
        name: "EPSE — stiffness and fatigue are legitimate side effect concerns",
        category: "physical_health",
        severity: "critical",
        clueInStem: "'The medication helps but it also makes me feel stiff and tired'",
        whyItMatters: "Extrapyramidal side effects and fatigue are recognised adverse effects of paliperidone depot that must be formally assessed and addressed — not dismissed",
        modelWording: "Stiffness and fatigue on paliperidone depot require formal EPSE assessment (including AIMS), dose review, and consideration of anticholinergic or dose adjustment — these are legitimate treatment concerns, not pretexts",
        keywords: ["EPSE", "extrapyramidal", "stiffness", "fatigue", "side effect", "AIMS", "dose review", "paliperidone"],
      },
      {
        id: "s4",
        name: "Functional recovery — work, family, community engagement",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "Works 3 days/week; reconnected with family; attends recovery group",
        whyItMatters: "Functional recovery — employment, social reconnection, community participation — is a recognised indicator of sustained wellness and a factor supporting CTO discontinuation",
        modelWording: "Marcus has achieved meaningful functional recovery: part-time employment, family reconnection, and community group participation — all recognised indicators of sustained wellness",
        keywords: ["functional", "recovery", "employment", "work", "family", "community", "recovery group", "social"],
      },
      {
        id: "s5",
        name: "Relapse risk assessment — what was the original episode like?",
        category: "risk_self",
        severity: "important",
        clueInStem: "First episode psychosis 18 months ago; property damage but no violence to persons",
        whyItMatters: "The nature and severity of the original episode and any previous relapses must be reviewed when considering CTO discontinuation",
        modelWording: "A detailed review of the original episode — precipitants, severity, risk, prodromal features — is essential to inform the relapse risk calculation before discontinuing the CTO",
        keywords: ["relapse risk", "original episode", "previous psychosis", "precipitant", "prodrome", "risk of relapse", "episode review"],
      },
      {
        id: "s6",
        name: "Mother's anxiety — triangulation and family dynamics",
        category: "family_carer",
        severity: "important",
        clueInStem: "Mother contacts you separately before appointment expressing terror about what happens if 'off the order'",
        whyItMatters: "The mother's separate contact is a triangulation dynamic — her anxiety must be acknowledged but cannot override Marcus's rights. The decision is clinically and legally Marcus's",
        modelWording: "The mother's separate contact must be acknowledged but cannot override Marcus's clinical and legal rights — this dynamic requires family psychoeducation rather than allowing parental anxiety to drive clinical decisions",
        keywords: ["mother", "family", "triangulation", "separate contact", "anxiety", "family dynamics", "carer concern", "family meeting"],
      },
      {
        id: "s7",
        name: "Advance care planning — if CTO lapses",
        category: "disposition",
        severity: "important",
        clueInStem: "CTO due to expire in six weeks; stable and voluntary",
        whyItMatters: "A documented advance care plan — agreed early warning signs, agreed escalation pathway, relapse prevention plan — should be developed before CTO lapse",
        modelWording: "Before the CTO lapses, a detailed advance care plan should be co-developed with Marcus: agreed early warning signs, relapse prevention strategies, and agreed escalation pathway",
        keywords: ["advance care", "relapse prevention", "early warning", "plan", "if relapse", "safety plan", "prodrome plan"],
      },
      {
        id: "s8",
        name: "Evidence for CTO — contested and population-level",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "CTO review requested",
        whyItMatters: "The evidence base for CTOs in preventing relapse is contested — individual patient factors, not population statistics, should drive this decision",
        modelWording: "The evidence base for CTOs preventing relapse at the population level is equivocal — the clinical decision must rest on Marcus's individual circumstances, insight, and adherence pattern",
        keywords: ["evidence", "CTO evidence", "research", "equivocal", "contested", "population", "individual", "evidence base"],
      },
      {
        id: "s9",
        name: "Paliperidone long-term risks — tardive dyskinesia",
        category: "physical_health",
        severity: "optional",
        clueInStem: "On paliperidone depot for 18 months; stiffness reported",
        whyItMatters: "Long-term antipsychotic depot use carries risk of tardive dyskinesia — informed consent for continued treatment should include this discussion",
        modelWording: "Informed consent for continued paliperidone depot should include discussion of tardive dyskinesia risk with prolonged use — Marcus should understand both benefits and long-term risks",
        keywords: ["tardive", "dyskinesia", "long-term risk", "depot risk", "informed consent", "TD"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6", "s7"],
      lowYield: ["s8", "s9"],
    },
    modelAnswer: `Least restrictive principle: After 18 months of adherence, stability, no admissions, and no violence to persons, there is a strong prima facie case for CTO discontinuation. Compulsion must be the least restrictive option available.

Marcus's autonomy: He is demonstrating insight and voluntary agreement to continue medication — the ethical and legal basis for compulsion is substantially weakened. His right to self-determination is central to this decision.

EPSE: Stiffness and fatigue on paliperidone depot are legitimate side effects requiring formal EPSE assessment (AIMS), dose review, and possible dose reduction or adjunct treatment — not dismissal.

Functional recovery: Part-time employment, family reconnection, and community group participation are meaningful indicators of sustained wellness supporting CTO discontinuation.

Relapse risk: The nature of the original episode must be reviewed — precipitants, severity, and prodromal features inform the individual relapse risk calculation.

Mother's contact: Her anxiety is understandable and requires psychoeducation, but her separate contact cannot override Marcus's clinical and legal rights. Family engagement should be offered, not imposed.

Advance care plan: Before the CTO lapses, a documented advance care plan — agreed early warning signs, relapse prevention strategies, and escalation pathway — should be co-developed with Marcus.`,
  },

  // ─── 9. CL PSYCHIATRY ────────────────────────────────────────────────────
  {
    id: "q9",
    topic: "cl_psychiatry",
    difficulty: "difficult",
    title: "Medical Ward — Refusal to Accept Treatment and Diagnostic Uncertainty",
    candidateRole: "Consultation-liaison psychiatry registrar",
    setting: "Neurology ward, general hospital",
    stem: `You are the consultation-liaison psychiatry registrar. You are asked to review Sandra, a 44-year-old woman who was admitted to the neurology ward three days ago after a collapse in a shopping centre. She has a known diagnosis of multiple sclerosis diagnosed eight years ago. She has been treated with interferon beta-1a. The neurology team is concerned because her MRI shows new lesions and she has developed new left-sided weakness.

The neurology team wants to commence high-dose intravenous methylprednisolone. Sandra is refusing this treatment. She says: "I've done my research. Steroids make everything worse in the long run. My MS is my body — I can read it better than any scan can."

The bedside nurse tells you that Sandra has been crying at night, refusing meals on two occasions, and becoming increasingly withdrawn. Sandra's husband is present and visibly distressed. He says to you privately: "She's been low since March when her best friend died of MS — they were diagnosed at the same time."

The neurologist asks you two questions: does Sandra have capacity to refuse this treatment, and is she depressed?`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Capacity assessment — four-domain formal assessment required",
        category: "capacity",
        severity: "critical",
        clueInStem: "Neurologist asks: does Sandra have capacity to refuse?",
        whyItMatters: "A formal capacity assessment across all four domains is required — assuming incapacity because refusal seems unwise is an error",
        relatedLegal: "Mental Capacity Act principles; treating physician's duty to assess capacity before overriding refusal",
        modelWording: "I will conduct a formal capacity assessment across all four domains: understanding information about the proposed treatment, retaining it, weighing it against personal values, and communicating a decision. A decision appearing unwise does not constitute incapacity",
        keywords: ["capac", "four domain", "understand", "retain", "weigh", "communicate", "formal assessment", "capacity assessment"],
      },
      {
        id: "s2",
        name: "Right to refuse if capacity intact — even life-altering consequences",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "Sandra refuses steroids; has clearly articulated a belief-based rationale",
        whyItMatters: "If Sandra retains capacity, her refusal is legally binding even if the treating team believes this will result in permanent disability",
        modelWording: "If Sandra is found to have capacity for this decision, her refusal of methylprednisolone is legally binding. The clinical team must respect this and redirect to understanding her values and goals of care",
        keywords: ["right to refuse", "legally binding", "capacitous refusal", "respect decision", "if she has capacity", "binding"],
      },
      {
        id: "s3",
        name: "Grief reaction — friend's death from MS as precipitant",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "Low since March when her best friend died of MS — diagnosed at the same time",
        whyItMatters: "The death of a close friend with the same diagnosis represents an existential and traumatic loss — it may be shaping Sandra's catastrophic attribution about steroids",
        modelWording: "The death of Sandra's best friend — her 'illness companion' — is a profound loss that may be generating hopelessness, survivor guilt, and catastrophic attribution about her own trajectory. This context is clinically essential",
        keywords: ["grief", "friend died", "loss", "bereave", "MS friend", "same diagnosis", "existential", "survivor guilt", "hopeless"],
      },
      {
        id: "s4",
        name: "Depression — likely major depressive episode",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "Crying at night; refusing meals; increasingly withdrawn; low since March",
        whyItMatters: "The neurovegetative symptoms — withdrawal, crying, reduced oral intake — in the context of a significant precipitant strongly suggest a major depressive episode",
        modelWording: "Sandra's presentation — crying at night, refusal of meals, social withdrawal, low mood since March — is consistent with a major depressive episode, possibly complicating her capacity assessment",
        keywords: ["depression", "major depressive", "MDE", "crying", "withdrawn", "refusing meal", "neurovegetat", "mood disorder"],
      },
      {
        id: "s5",
        name: "MS and depression — high comorbidity, organic contribution",
        category: "physical_health",
        severity: "important",
        clueInStem: "MS diagnosis 8 years ago; new lesions on MRI",
        whyItMatters: "Depression is the most common psychiatric comorbidity of MS, occurring in up to 50% of patients — both disease-related and as a psychological response to illness",
        modelWording: "Depression complicates MS in up to 50% of cases — new MRI lesions may have organic neuropsychiatric contributions, alongside the psychological response to her friend's death",
        keywords: ["MS depression", "comorbidity", "neuropsychiatric", "organic", "multiple sclerosis", "interferon", "fifty percent"],
      },
      {
        id: "s6",
        name: "Interferon-beta — associated with depression and flu-like symptoms",
        category: "physical_health",
        severity: "important",
        clueInStem: "Treated with interferon beta-1a",
        whyItMatters: "Interferon-beta is associated with depression and mood symptoms — this iatrogenic contribution to her low mood must be considered",
        modelWording: "Interferon beta-1a is associated with depression and mood symptoms — her current medication may be contributing to her psychiatric presentation and requires review with the neurologist",
        keywords: ["interferon", "interferon beta", "medication-induced", "iatrogenic", "depression", "interferon depression"],
      },
      {
        id: "s7",
        name: "Husband's distress — carer burden and collateral",
        category: "family_carer",
        severity: "important",
        clueInStem: "Husband visibly distressed; shares information privately",
        whyItMatters: "The husband is both an essential collateral source and a distressed carer who needs his own support",
        modelWording: "The husband is a key collateral informant — his account of the timeline is clinically essential. He is also visibly distressed and requires acknowledgement and support",
        keywords: ["husband", "collateral", "carer", "distressed", "family", "support", "carer burden"],
      },
      {
        id: "s8",
        name: "Clarifying Sandra's values and goals — not just her decision",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "'My MS is my body — I can read it better than any scan can'",
        whyItMatters: "Exploring the values and fears behind the refusal — not just the decision itself — is clinically and ethically essential",
        modelWording: "Sandra's statement suggests she is asserting bodily autonomy and personal knowledge — understanding what she fears about steroids and what she values about her body and treatment is essential before any ethical or legal pathway is pursued",
        keywords: ["values", "goals of care", "behind the refusal", "fears", "explore", "what does she want", "bodily autonomy", "understand her perspective"],
      },
      {
        id: "s9",
        name: "Depression impairing capacity — nuanced interaction",
        category: "capacity",
        severity: "important",
        clueInStem: "Depressed; refusing treatment; possibly hopeless",
        whyItMatters: "A major depressive episode can impair capacity through hopelessness, cognitive slowing, and inability to weigh future consequences — this interaction must be carefully assessed",
        modelWording: "If depression is impairing Sandra's capacity — specifically through hopelessness reducing her ability to weigh long-term consequences — this is a treatable condition. Treating the depression may restore capacity and change her decision",
        keywords: ["depression impair", "hopeless", "capacity impaired", "treat depression", "restore capacity", "impairment"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4"],
      secondary: ["s5", "s6", "s7", "s9"],
      lowYield: ["s8"],
    },
    modelAnswer: `Capacity assessment: I will conduct a formal four-domain capacity assessment — understanding, retaining, weighing, and communicating. A decision that appears unwise does not constitute incapacity.

Right to refuse: If Sandra retains capacity, her refusal of methylprednisolone is legally binding — even if this results in permanent disability. This must be respected.

Grief as precipitant: The death of her best friend with the same MS diagnosis is a profound existential loss — it is very likely shaping catastrophic and hopeless thinking about her own illness trajectory.

Major depressive episode: Crying at night, refusing meals, and social withdrawal in the context of a significant precipitant are consistent with a major depressive episode requiring treatment in its own right.

Depression impairing capacity: If hopelessness is impairing her ability to weigh long-term consequences, her depression may be affecting her capacity. Treating the depression may restore it — this is clinically important.

MS-depression comorbidity: Depression occurs in up to 50% of MS patients, both as disease-related and psychologically driven. New lesions and interferon-beta use both contribute.

Interferon-beta: This is associated with depression and must be reviewed with the neurology team.

Husband: He is both a key collateral informant and a distressed carer requiring his own acknowledgement and support.`,
  },

  // ─── 10. SUBSTANCE USE ───────────────────────────────────────────────────
  {
    id: "q10",
    topic: "substance_use",
    difficulty: "difficult",
    title: "Opioid Substitution Therapy — Pregnancy and Child Protection",
    candidateRole: "Consultant psychiatrist, drug and alcohol service",
    setting: "Drug and alcohol outpatient clinic",
    stem: `You are a consultant psychiatrist working in a drug and alcohol outpatient service. You are reviewing Leanne, a 28-year-old woman who has been on methadone 80 mg daily for two years for heroin dependence. She has been stable, attending pick-ups reliably, and working part-time as a supermarket checkout operator.

At today's appointment, Leanne discloses that she is ten weeks pregnant. She stopped telling you about her pregnancy earlier "because I was worried you'd take the baby." She is in a relationship with her partner Dean, who she describes as "supportive but he drinks every day." She has an older child — a 4-year-old son who lives with her mother following a child protection order three years ago. Leanne's urine drug screen today is positive for benzodiazepines; she says she has been taking her neighbour's diazepam "for anxiety about the pregnancy" for the past three weeks.

She starts crying and says: "I want to do this right this time. I want to keep this baby."`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Benzodiazepine use in pregnancy — fetal risk",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "10 weeks pregnant; positive benzodiazepine UDS; three weeks of illicit diazepam",
        whyItMatters: "Benzodiazepine use in the first trimester carries teratogenic risk — fetal safety is an immediate concern requiring urgent obstetric referral",
        modelWording: "Illicit benzodiazepine use at 10 weeks gestation is a fetal risk — first trimester teratogenicity, neonatal abstinence syndrome risk, and interaction with methadone must be addressed with urgent obstetric referral",
        keywords: ["benzodiazepine", "pregnancy", "fetal", "teratogenic", "first trimester", "diazepam", "obstetric", "neonatal", "unborn"],
      },
      {
        id: "s2",
        name: "Methadone in pregnancy — dose review and obstetric coordination",
        category: "physical_health",
        severity: "critical",
        clueInStem: "On methadone 80 mg; 10 weeks pregnant",
        whyItMatters: "Methadone pharmacokinetics change significantly across pregnancy — dose review and obstetric coordination are essential; stopping OST is more dangerous than continuing",
        modelWording: "Methadone dose will need review across the pregnancy as pharmacokinetics change. Urgent obstetric referral and coordination with a specialist perinatal drug and alcohol service is required",
        keywords: ["methadone", "pregnancy", "dose review", "obstetric", "pharmacokinetic", "perinatal", "OST", "opioid substitution"],
      },
      {
        id: "s3",
        name: "Child protection notification — previous CP order, current pregnancy",
        category: "child_protection",
        severity: "critical",
        clueInStem: "Older child with grandmother following CP order three years ago; currently pregnant; illicit drug use",
        whyItMatters: "An existing child protection order, illicit substance use in pregnancy, and a partner who drinks daily create a threshold for notification regarding the unborn child",
        relatedLegal: "Child Protection Act — unborn child notification; mandatory reporting if risk to unborn",
        modelWording: "The combination of a previous child protection order, ongoing illicit benzodiazepine use in pregnancy, and a partner with daily alcohol use meets the threshold for notification to child protection regarding the unborn child in most jurisdictions",
        keywords: ["child protection", "mandatory report", "notification", "unborn", "previous order", "CP order", "DOCS", "welfare", "notify"],
      },
      {
        id: "s4",
        name: "Delayed disclosure — fear of losing child drives concealment",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "'I was worried you'd take the baby'",
        whyItMatters: "Leanne's fear of punitive response has led to a 10-week delay in disclosure — the therapeutic relationship must explicitly address this and counter punitive expectations to enable engagement",
        modelWording: "Leanne's fear of losing her child has driven a 10-week delay in disclosure — this is a critical engagement issue. The therapeutic approach must explicitly address the non-punitive purpose of services and her motivation to parent",
        keywords: ["fear", "concealment", "delayed disclosure", "worried", "take the baby", "engagement", "punitive", "therapeutic alliance"],
      },
      {
        id: "s5",
        name: "Neonatal abstinence syndrome — planning required",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "On methadone 80 mg; 10 weeks pregnant",
        whyItMatters: "The neonate will likely require NAS monitoring and management — antenatal planning with the paediatric team is essential",
        modelWording: "The infant is at risk of neonatal abstinence syndrome — antenatal planning with the neonatal team for NAS monitoring, NICU readiness, and parenting support is essential",
        keywords: ["NAS", "neonatal abstinence", "neonate", "withdrawal", "infant", "baby", "neonatal", "paediatric", "NICU"],
      },
      {
        id: "s6",
        name: "Partner's daily alcohol use — domestic risk and child safety",
        category: "risk_vulnerable",
        severity: "important",
        clueInStem: "Dean drinks every day",
        whyItMatters: "A partner with daily alcohol use represents a risk factor for domestic violence and parenting capacity — this must be assessed and not minimised",
        modelWording: "Dean's daily alcohol use is a significant risk factor that requires assessment — domestic violence risk, parenting capacity, and impact on Leanne's own recovery must all be considered",
        keywords: ["partner", "dean", "alcohol", "drinks every day", "domestic", "violence", "risk", "parenting capacity"],
      },
      {
        id: "s7",
        name: "Anxiety about pregnancy — assess for anxiety disorder",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "Taking diazepam 'for anxiety about the pregnancy'",
        whyItMatters: "Self-medicating anxiety with benzodiazepines indicates an untreated anxiety disorder — this must be formally assessed and addressed with safer alternatives",
        modelWording: "Leanne's self-treatment of anxiety with illicit diazepam indicates an untreated anxiety disorder — formal assessment and evidence-based anxiety management without benzodiazepines is required",
        keywords: ["anxiety", "anxiety disorder", "self-medic", "treat anxiety", "CBT", "anxiety management", "untreated"],
      },
      {
        id: "s8",
        name: "Leanne's motivation — parenting goal as a therapeutic lever",
        category: "disposition",
        severity: "important",
        clueInStem: "'I want to do this right this time. I want to keep this baby.'",
        whyItMatters: "Leanne's expressed motivation to parent this child is a powerful therapeutic lever — it should be explicitly acknowledged and used to drive engagement with treatment",
        modelWording: "Leanne's desire to parent this child is a powerful and genuine motivator — this should be explicitly affirmed and used to build the therapeutic alliance and sustained engagement",
        keywords: ["motivat", "want to keep", "therapeutic lever", "engagement", "parenting goal", "affirm", "positive", "motivation to parent"],
      },
      {
        id: "s9",
        name: "4-year-old with grandmother — relationship and contact assessment",
        category: "family_carer",
        severity: "important",
        clueInStem: "4-year-old son lives with grandmother following CP order",
        whyItMatters: "Leanne's older child's welfare and her relationship with him are clinically relevant — the impact of the previous CP order on this pregnancy must be understood",
        modelWording: "The existing relationship with her 4-year-old, the previous CP order, and the grandmother's role all require assessment — they inform Leanne's current parenting capacity and the family context for this pregnancy",
        keywords: ["older child", "son", "grandmother", "4-year-old", "previous", "contact", "CP order", "family context"],
      },
      {
        id: "s10",
        name: "Multidisciplinary perinatal team — obstetrics, D&A, social work, paediatrics",
        category: "system_pressure",
        severity: "important",
        clueInStem: "Complex presentation: OST + pregnancy + illicit use + child protection history",
        whyItMatters: "This presentation requires a coordinated multidisciplinary perinatal team — single-clinician management is insufficient",
        modelWording: "Leanne's complexity requires a coordinated perinatal MDT: obstetrics, specialist perinatal drug and alcohol service, social work, paediatrics/neonatology, and child protection. A case conference should be planned",
        keywords: ["MDT", "multidisciplinary", "team", "obstetric", "social work", "perinatal", "case conference", "coordinated", "paediatric"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s5"],
      secondary: ["s4", "s6", "s7", "s10"],
      lowYield: ["s8", "s9"],
    },
    modelAnswer: `Fetal safety — benzodiazepine use: Illicit diazepam at 10 weeks gestation is a first-trimester fetal risk requiring immediate obstetric referral and urgent cessation with medical supervision.

Methadone in pregnancy: Methadone pharmacokinetics change substantially across pregnancy — OST should continue (stopping is more dangerous), but dosing requires specialist obstetric and perinatal drug and alcohol coordination.

Neonatal abstinence syndrome: Planning for NAS with the neonatal team is essential — NICU readiness, monitoring protocol, and parenting support must be arranged antenatally.

Child protection notification: A previous CP order, ongoing illicit benzodiazepine use in pregnancy, and a partner with daily alcohol use meets the threshold for notification regarding the unborn child.

Delayed disclosure: Leanne's 10-week delay in disclosing the pregnancy reflects fear of punitive response — this must be directly addressed to maintain the therapeutic alliance.

Partner's alcohol use: Daily alcohol use by Dean requires assessment for domestic violence risk and parenting capacity.

Anxiety: Self-medicating anxiety with illicit benzodiazepines indicates an untreated anxiety disorder requiring safe, evidence-based management.

Leanne's motivation: Her expressed desire to parent this child is a genuine and powerful motivator — explicitly acknowledge and use this therapeutically.

MDT: A perinatal case conference with obstetrics, perinatal drug and alcohol, social work, and neonatology is required — this is not a single-clinician case.`,
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
