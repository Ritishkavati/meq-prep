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
  | "ethics"
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
  questionNumber: string;
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
  | "capacity_mha"
  | "quality_assurance"
  | "supervision"
  | "documentation"
  | "discharge_review"
  | "mdt_systems"
  | "rural"
  | "psychotherapy"
  | "ethics";

export type DifficultyKey = "standard" | "difficult" | "consultant";

export const TOPIC_LABELS: Record<TopicKey, string> = {
  random: "Random",
  ed: "Emergency Department",
  perinatal: "Perinatal Psychiatry",
  cl_psychiatry: "Consultation-Liaison",
  forensic: "Forensic Psychiatry",
  old_age: "Old Age Psychiatry",
  child_adolescent: "Child & Adolescent",
  governance: "Governance & Leadership",
  cultural_safety: "Cultural Safety",
  substance_use: "Substance Use",
  risk: "Risk Assessment",
  capacity_mha: "Capacity & Mental Health Act",
  quality_assurance: "Quality & Safety Review",
  supervision: "Supervision & Feedback",
  documentation: "Documentation & Communication",
  discharge_review: "Discharge / Report Review",
  mdt_systems: "MDT Conflict & Systems Pressure",
  rural: "Rural & Resource-Limited",
  psychotherapy: "Psychotherapy & Boundaries",
  ethics: "Ethics & Professionalism",
};

export const DIFFICULTY_LABELS: Record<DifficultyKey, string> = {
  standard: "Standard",
  difficult: "Difficult",
  consultant: "Consultant-level",
};

// ─── Topic-file imports ───────────────────────────────────────────────────────
import { QA_STEMS } from "./questions/qaQuestions";
import { SUP_STEMS } from "./questions/supervisionQuestions";
import { DOC_STEMS } from "./questions/documentationQuestions";
import { DIS_STEMS } from "./questions/dischargeReviewQuestions";
import { ED_STEMS } from "./questions/edQuestions";
import { PER_STEMS } from "./questions/perinatalQuestions";
import { CAP_STEMS } from "./questions/capacityMhaQuestions";
import { GOV_STEMS } from "./questions/governanceQuestions";
import { RISK_STEMS } from "./questions/riskQuestions";
import { MDT_STEMS } from "./questions/mdtSystemsQuestions";
import { PSY_STEMS } from "./questions/psychotherapyQuestions";
import { CS_STEMS } from "./questions/culturalSafetyQuestions";
import { FOR_STEMS } from "./questions/forensicQuestions";
import { SU_STEMS } from "./questions/substanceUseQuestions";
import { CA_STEMS } from "./questions/childAdolescentQuestions";
import { OA_STEMS } from "./questions/oldAgeQuestions";
import { RU_STEMS } from "./questions/ruralQuestions";
import { ETH_STEMS } from "./questions/ethicsQuestions";
import { CL_STEMS } from "./questions/clPsychiatryQuestions";
import { FINAL_ELITE_MEQ_BANK } from "./questions/finalEliteMEQBank";

// ─── STEMS ───────────────────────────────────────────────────────────────────

export const ORIGINAL_STEMS: QuizStem[] = [
  // ─── 1. CULTURAL SAFETY / CL ─────────────────────────────────────────────
  {
    id: "q1",
    questionNumber: "MEQ-001",
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
    modelAnswer: `Amara's weight of 38 kg with severe malnutrition and dehydration represents an immediate risk to life, with cardiac arrhythmia, refeeding syndrome, and multi-organ failure all plausible consequences if the clinical situation is not urgently addressed. The medical team must stabilise her haemodynamic state and correct electrolytes as a matter of priority, and this work must proceed in parallel with the psychiatric assessment rather than wait for it to conclude.

The use of Amara's 16-year-old daughter Fatima as the sole interpreter for three consecutive days is a critical systems failure that has rendered every clinical contact in this admission procedurally invalid. A NAATI-accredited professional interpreter must be arranged before any further assessment is attempted. Using a child to interpret medically complex and emotionally distressing information places an adult burden on a minor, violates Amara's privacy, and means any capacity assessment conducted thus far is not defensible. Fatima's own wellbeing requires independent consideration — she may be functioning as a young carer in ways that warrant a formal assessment in their own right.

A valid capacity assessment cannot be conducted until a professional interpreter is present. Once that condition is met, I will assess Amara across all four domains: her understanding of her medical condition and the proposed nasogastric feeding, her ability to retain that information, her ability to weigh it against her own values, and her ability to communicate a decision. If she retains capacity, her refusal is legally binding even if it is life-threatening; if she lacks capacity, substitute decision-making under guardianship legislation or a Tribunal order is required before any involuntary feeding can proceed, and these legal pathways must be initiated without delay given the life-threatening clinical context.

The differential diagnosis for Amara's refusal of oral intake must not be collapsed prematurely. Cultural or religious fasting practice, complicated grief following the traumatic loss of her husband during the boat crossing eighteen months ago, a major depressive episode with psychomotor retardation, post-traumatic stress disorder with dissociation, and somatic expression of distress must all remain live diagnostic possibilities until adequately assessed. Her marked distress when male staff enter the room must prompt immediate consideration of gender-based violence or sexual trauma during her displacement — a trauma-informed approach with female-led clinical contact is required from this point. The ward social worker must be urgently involved, and refugee health services, STARTTS equivalent, and community resettlement supports must be mobilised without further delay.`,
  },

  // ─── 2. ED / RISK ─────────────────────────────────────────────────────────
  {
    id: "q2",
    questionNumber: "MEQ-002",
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
    modelAnswer: `This is a high-lethality presentation requiring immediate clinical containment. Daniel's near-total consumption of approximately sixty oxycodone tablets constitutes an objectively serious attempt, and his active searching for "opioid lethal dose" during this same emergency department presentation establishes that suicidal intent is ongoing rather than resolved — the two pieces of information together make this one of the highest-acuity risk situations a clinician can encounter. He cannot be safely discharged under any circumstances, and the clinical team must be clearly informed of this.

The preparatory behaviours documented in the two weeks before the attempt are clinically significant and must not be minimised. Giving away his guitar — a prized possession — is a recognised warning sign of planned suicidal behaviour, and in combination with social withdrawal, cessation of eating, and isolation in his room, this pattern indicates premeditation rather than impulsivity. Daniel's dismissal from his paramedic role following a workplace complaint one month ago is the primary precipitating stressor: paramedics have significantly elevated rates of suicide, and the intersection of occupational identity loss, humiliation, and workplace shame is a well-recognised driver of high-lethality attempts in this cohort. His paramedic training also confers detailed clinical knowledge of lethal doses, which increases the sophistication and lethality of any subsequent attempt.

Daniel's refusal to engage with assessment does not diminish the risk — concealment in the context of active searching behaviour is itself a risk indicator, and hostility and minimisation are common features of presentations where suicidal intent is ongoing. Given the near-lethal attempt, persisting intent as evidenced by his phone activity, and refusal to engage voluntarily, the Mental Health Act criteria for involuntary assessment are almost certainly satisfied and should be initiated without delay. The previous emergency department presentations — a forearm laceration and an intoxication episode — establish a prior pattern that must be incorporated into the risk formulation, and the flatmate is the primary source of clinical history given Daniel's refusal to speak.

A previous intoxication presentation suggests possible alcohol or substance use disorder requiring assessment as both a risk factor and a treatment target. The social isolation evident in this presentation — no family contacts identified, a flatmate as the sole support — amplifies suicide risk and must be addressed in any safety planning. As a registered health professional under AHPRA regulation, mandatory reporting obligations may arise once the acute risk is stabilised, and naloxone's shorter half-life than oxycodone means Daniel requires ongoing medical monitoring for re-narcotisation in the hours ahead.`,
  },

  // ─── 3. PERINATAL ────────────────────────────────────────────────────────
  {
    id: "q3",
    questionNumber: "MEQ-003",
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
    modelAnswer: `Priya's presentation is consistent with postpartum psychosis, which is a psychiatric emergency requiring urgent action. The classical features are all present: onset on day four postpartum, three consecutive days without sleep, a Capgras-type delusional belief that her infant has been replaced by a different baby, pressured and disorganised speech, and paranoid ideation concerning the baby monitor recording her. Urgent inpatient psychiatric admission is required — ideally to a specialist mother-baby unit where treatment can proceed while the mother-infant relationship is preserved under clinical supervision. If a mother-baby unit is not immediately available, adult inpatient admission with structured and supervised infant contact is the appropriate alternative.

The risk to the infant must be assessed immediately. Priya's statement that she does not trust her hands near the baby is a direct verbal expression of concern about harming him and must be taken literally, not metaphorically or as a common new-parent anxiety. Her Capgras-type delusion — the belief that the infant has been replaced — is itself a specific high-risk feature for infanticide in postpartum psychosis and must inform the immediate safety plan, including one-to-one nursing supervision during any contact with the baby. The approximate five per cent risk of maternal suicide in postpartum psychosis also requires direct assessment and must not be overshadowed by the focus on infant safety alone.

A child protection notification should be considered given Priya's specific statement about harming the infant — this meets the mandatory reporting threshold in most Australian jurisdictions. Pharmacological sleep induction is an immediate treatment priority, as sleep deprivation drives the cycle of psychosis and is itself a marker of severity. Antipsychotic selection must account for breastfeeding compatibility if Priya intends to continue breastfeeding, and specialist pharmacological advice should be sought from this point.

Family engagement requires careful management. Rajan's minimisation of his wife's presentation as normal postnatal fatigue reflects a serious misunderstanding of the severity of her illness and requires urgent, direct psychoeducation from a senior clinician — this is a safety conversation, not a reassurance one. His return to work while Priya was deteriorating must be addressed in the context of identifying what additional support structures need to be built around the family during the inpatient admission. The mother-in-law's account of a similar episode occurring in a family member in India is diagnostically significant and should be explored carefully, as it may indicate a familial predisposition that has implications for Priya's prognosis and for family planning discussions following recovery.`,
  },

  // ─── 4. GOVERNANCE ───────────────────────────────────────────────────────
  {
    id: "q4",
    questionNumber: "MEQ-004",
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
    modelAnswer: `The ten-fold haloperidol dose error — fifty milligrams charted instead of five — constitutes a serious clinical incident requiring immediate formal reporting. Although the medication nurse identified the error before administration and no patient harm resulted, this near-miss is notifiable under the hospital's incident management system and must not be managed informally within the supervisory relationship. Dr Voss must be removed from unsupervised clinical duties immediately pending investigation, as patients on the unit are at ongoing risk while these safety concerns remain unresolved and unexplained.

The combination of alcohol odour on two separate mornings during clinical handover, a serious medication error, and undocumented access to the medication room together constitute an impaired practitioner situation that must be treated as such without equivocation. Undocumented access to the medication room in the context of suspected substance impairment must prompt immediate consideration of medication diversion — this possibility may explain Dr Voss's denial of substance use and requires urgent investigation by hospital management rather than further supervisory conversation. The National Law imposes mandatory reporting obligations on practitioners who have a reasonable belief that a colleague is practising while impaired, and the threshold for a mandatory AHPRA notification for impairment is almost certainly met by this combination of objective observations across six weeks.

Dr Voss's request that I not tell anyone cannot be honoured where patient safety is at risk and mandatory reporting obligations apply. This must be communicated to her directly and with compassion, explaining that this action is driven by professional obligation rather than punitive intent. The situation must be escalated immediately to the medical director and clinical director — it falls outside the scope of a supervisory relationship to manage alone, and delaying escalation would itself constitute a governance failure. Contemporaneous documentation of every observed incident, including dates, times, witnesses, and the nature of the concern, is essential for any formal process that follows.

Running in parallel with the patient safety response, Dr Voss requires referral to her own treating clinician for mental health support. The separation from her partner and the removal of her two children from the home six weeks ago is a profound acute psychosocial stressor, and her tearful disclosure and admission that she has not been managing are consistent with an acute adjustment disorder or depressive episode requiring treatment in its own right. The supervisor role requires that the patient safety response and the support for a distressed colleague proceed simultaneously and with equal seriousness, and that these two tracks not be allowed to compromise each other.`,
  },

  // ─── 5. OLD AGE ──────────────────────────────────────────────────────────
  {
    id: "q5",
    questionNumber: "MEQ-005",
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
    modelAnswer: `The transfer of $180,000 to a nephew by a man with significant cognitive impairment — while that nephew was resident in the home for three weeks — is highly suspicious for elder financial abuse and must be reported to adult safeguarding services without delay. George's current cognitive profile, including an MMSE of 19 with confabulation, disorientation, and inability to recall objects at five minutes, strongly suggests he lacked decision-making capacity for a financial transaction of this magnitude at the time it occurred. This concern has direct legal implications for whether the transfer can be challenged, and referral to a legal practitioner with expertise in guardianship and power of attorney legislation must proceed alongside the safeguarding notification.

George is currently driving with an MMSE of 19 and is confabulating about the frequency of his journeys to the hardware store. This constitutes an immediate public road safety risk, and I have a mandatory duty to report to the relevant licensing authority in this jurisdiction. Driving must cease, this must be discussed directly with both George and Margaret, and the notification must be documented. The existence and current operative status of any Enduring Power of Attorney must also be urgently established, as it determines the legal framework for financial and medical decision-making going forward.

Margaret is potentially a co-victim of the financial abuse. The depletion of $180,000 in joint savings affects her financial security, her housing stability, and her capacity to care for her husband as his needs increase with disease progression. She requires an independent assessment of her own needs, and her distress when speaking privately deserves acknowledgement and follow-up. The unkempt home environment, out-of-date food in the kitchen, and unsorted medications on the bench together indicate that basic self-care and safety needs are unmet — an urgent ACAT referral for community support services is indicated alongside a pharmacist medication review and provision of dose administration aids to address the significant medication safety risk.

Two separate mandatory reporting obligations arise from this assessment and must both be fulfilled: a report to adult safeguarding services regarding the suspected financial abuse, and a mandatory notification to the licensing authority regarding unsafe driving. A formal neuropsychological assessment and neuroimaging work-up are required to establish the diagnosis, aetiology, and severity of George's dementia, followed by a structured disclosure conversation with both George and Margaret about the diagnosis and its implications for driving, finances, and future care planning.`,
  },

  // ─── 6. FORENSIC / RISK ──────────────────────────────────────────────────
  {
    id: "q6",
    questionNumber: "MEQ-006",
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
    modelAnswer: `This is a high-risk clinical situation requiring immediate structured action, and Nathan cannot leave today's appointment without a clear safety and risk management plan. His behaviour over the past week — fifty text messages, surveillance of Lisa's workplace on three occasions, and a written note stating "This will not stand" — constitutes a pattern of stalking that is escalating in both frequency and specificity. The note is an implicit threat, and in the context of jealousy concerning a perceived new relationship, a documented history of intimate partner violence, and cessation of his depot antipsychotic two weeks ago, this presentation carries significant risk of serious harm to Lisa.

The content of the note raises specific concern for morbid jealousy — a delusional or strongly overvalued belief about a partner's infidelity associated with a specific and high risk of severe violence including homicide. Whether this represents a frank delusional belief or a jealousy-driven overvalued idea requires careful clinical assessment, but Nathan must be regarded as high-risk now. His cessation of paliperidone depot two weeks ago in the context of this escalating behaviour is a critical clinical event: psychotic decompensation may be directly driving the behavioural escalation, and reinstatement of the depot is an immediate clinical priority.

I have a duty to consider the safety of the identified third-party victim, Lisa. Coordination with police regarding Nathan's stalking behaviour and the conditions of the Intervention Order is appropriate and does not constitute a breach of therapeutic confidentiality where there is imminent risk of serious harm to an identifiable person. The Intervention Order does not constitute adequate risk management in isolation — its effectiveness depends entirely on Nathan's compliance, which requires direct clinical assessment. If Nathan declines to recommence his depot antipsychotic today, Mental Health Act criteria for involuntary treatment should be considered, as non-adherence in the context of significant and documented risk to an identified third party may satisfy the harm-to-others criterion.

A formal structured risk assessment using a validated tool such as the HCR-20 should be applied to systematically document historical, clinical, and risk management factors, both to guide clinical decisions and to produce a defensible contemporaneous record. Nathan's characterisation of fifty text messages as "just checking she was okay" represents a significant minimisation that must not be accepted at face value — it likely reflects either poor insight into the severity of his behaviour or active concealment of intent. His current unsupervised living situation is inadequate given this risk profile, and increased monitoring frequency, possible change in living arrangements, or inpatient admission must all be considered as components of the immediate management plan.`,
  },

  // ─── 7. CHILD & ADOLESCENT ───────────────────────────────────────────────
  {
    id: "q7",
    questionNumber: "MEQ-007",
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
    modelAnswer: `Tyler's presentation is best understood through a complex developmental trauma framework rather than through a conduct disorder or behavioural lens, and this reframing is the single most important clinical act available to the treating team tonight. Chronic neglect from infancy, repeated exposure to severe domestic violence, parental loss through incarceration, and nine placement changes over seven years constitute profound and cumulative developmental adversity. Applying a conduct disorder label to Tyler's crisis response would represent a serious diagnostic error with lasting consequences for his care trajectory and access to appropriate therapeutic support.

The precipitant is unambiguous: notification of his ninth placement change directly triggered the crisis, and this must be understood as an attachment rupture response rather than random aggression or behavioural dysregulation in isolation. Unexplained bruising on Tyler's forearm requires immediate safeguarding assessment before he leaves this department — its origin must be established, and a mandatory child protection notification may be required depending on the findings. Tyler's threat to hurt himself requires direct, developmentally appropriate risk assessment that explores suicidal ideation in the context of cumulative trauma, hopelessness about placement, and the particular vulnerabilities of early adolescence.

As an Aboriginal child in out-of-home care with no contact with extended family or community, Tyler's cultural disconnection represents both a significant mental health risk factor and strong evidence that the Aboriginal Child Placement Principle has likely never been applied across his nine placements. This is a systemic safeguarding failure that must be escalated alongside the other concerns. Three psychotropic medications of uncertain current indication, commenced across different placements without accessible clinical records, represent a serious governance concern — a comprehensive medication reconciliation and diagnostic review is urgently required, as the current prescribing burden may reflect misattribution of trauma symptoms to ADHD and a mood disorder rather than their correct aetiological cause.

The 22-year-old casual worker on her third shift is an inadequate carer for a young person of Tyler's complexity, and her inability to access his clinical records is a systemic failure requiring urgent escalation to the child protection authority and to the agency responsible for his placement. As Tyler is in state care, parental responsibility for medical decisions rests with the statutory guardian, and consent for psychiatric assessment and treatment must be obtained from the appropriate state authority — the residential carer does not have this authority and cannot provide it.`,
  },

  // ─── 8. CAPACITY / MHA — CTO ─────────────────────────────────────────────
  {
    id: "q8",
    questionNumber: "MEQ-008",
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
    modelAnswer: `After eighteen months of consistent adherence to his paliperidone depot, no further hospital admissions, no violence to persons, and meaningful functional recovery across employment, family, and community engagement, there is a strong prima facie case for allowing the Community Treatment Order to lapse when it expires in six weeks. The Mental Health Act requires that involuntary treatment be the least restrictive option available — and in Marcus's current circumstances, it is genuinely difficult to sustain that compulsion remains either proportionate or necessary. The least restrictive principle requires genuine clinical analysis, not a formulaic review, and on the available evidence Marcus's situation supports discontinuation.

Marcus's demonstrated insight and voluntary agreement to continue medication substantially weaken the ethical and legal basis for compulsion. His statement that he understands he needs to continue his medication, combined with eighteen months of consistent depot adherence and no clinical deterioration, represents exactly the trajectory that a Community Treatment Order is intended to support and then release. His functional achievements — part-time employment, reconnection with his family, and regular participation in a community recovery group — are clinically meaningful indicators of sustained wellness and must carry appropriate weight in this review. The contested evidence base for CTOs reducing relapse at the population level means the clinical decision must rest on Marcus's individual circumstances rather than on population-level statistics.

The extrapyramidal side effects Marcus reports — stiffness and fatigue — are well-recognised adverse effects of paliperidone depot that require formal assessment including an AIMS examination, dose review, and consideration of anticholinergic adjuncts or dose interval adjustment. These are legitimate treatment concerns that deserve a clinical response, not dismissal. The nature and severity of his original first episode, its precipitants, and any identifiable prodromal features must also be carefully reviewed before a discontinuation decision is finalised, as this information directly informs the individual relapse risk calculation.

Before the CTO lapses, a detailed and collaborative advance care plan must be co-developed with Marcus: agreed early warning signs of relapse, clear escalation pathways if those signs emerge, relapse prevention strategies, and an agreed plan for the prodromal period. Marcus's mother's separate contact before today's appointment reflects understandable anxiety that deserves compassionate acknowledgement and psychoeducation, but her fear cannot override Marcus's clinical and legal rights to self-determination, and the decision must remain a clinical one informed by evidence rather than a decision driven by family pressure or parental concern.`,
  },

  // ─── 9. CL PSYCHIATRY ────────────────────────────────────────────────────
  {
    id: "q9",
    questionNumber: "MEQ-009",
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
    modelAnswer: `The neurologist has asked two distinct questions and both deserve careful, separate answers. A formal capacity assessment across all four domains is required before any clinical decision is made about Sandra's treatment refusal: her ability to understand the information provided about her diagnosis, prognosis, and the proposed methylprednisolone course; her ability to retain that information; her ability to weigh it against her own values and priorities; and her ability to communicate a clear decision. The critical principle to communicate to the neurology team is that a decision which appears unwise, or which the treating team finds difficult to understand, does not constitute evidence of impaired capacity — these are distinct concepts, and conflating them is a common and potentially harmful error.

Sandra's refusal carries a values-based internal logic that is clinically coherent: her belief that steroids worsen long-term MS outcomes, her sense that she can read her body in ways that imaging cannot capture, and the implicit framework that her prior experience of this illness has given her a perspective that must be respected. Whether this represents a fixed, well-reasoned values-congruent position or a belief that has been distorted by hopelessness and depressive thinking is the core clinical question. If Sandra retains capacity for this decision — which my assessment will determine — her refusal of methylprednisolone is legally binding even if the result is permanent disability from her new lesions, and the clinical team's role shifts to supporting her values and goals of care rather than persuading her to reverse her decision.

The second question — whether Sandra is depressed — is clinically significant in its own right and is directly connected to the capacity question. Nocturnal crying, two episodes of meal refusal, increasing social withdrawal, and the recent death of her closest friend from the same illness are together highly consistent with a major depressive episode. The loss of a friend to MS — someone diagnosed at the same time as Sandra — is an existential stressor of particular intensity, and catastrophic hopeless thinking about her own illness trajectory is very likely shaping her refusal in ways she may not fully recognise. If depression is found to be impairing her capacity — specifically through hopelessness reducing her ability to weigh long-term consequences — then the depression itself is treatable, and treating it may restore capacity and potentially change her decision.

Both interferon-beta use and the neurological disease process itself contribute to elevated depression rates in MS, and the neurology team must be made aware of this as part of the formulation. Sandra's husband is both the primary collateral informant and a distressed carer who deserves acknowledgement and support in his own right — his account of the timeline since his wife's friend died in March will be clinically valuable in establishing the course and severity of Sandra's current presentation.`,
  },

  // ─── 10. SUBSTANCE USE ───────────────────────────────────────────────────
  {
    id: "q10",
    questionNumber: "MEQ-010",
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
        name: "Benzodiazepine use in pregnancy — foetal risk",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "10 weeks pregnant; positive benzodiazepine UDS; three weeks of illicit diazepam",
        whyItMatters: "Benzodiazepine use in the first trimester carries teratogenic risk — foetal safety is an immediate concern requiring urgent obstetric referral",
        modelWording: "Illicit benzodiazepine use at 10 weeks gestation is a foetal risk — first trimester teratogenicity, neonatal abstinence syndrome risk, and interaction with methadone must be addressed with urgent obstetric referral",
        keywords: ["benzodiazepine", "pregnancy", "foetal", "teratogenic", "first trimester", "diazepam", "obstetric", "neonatal", "unborn"],
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
    modelAnswer: `Leanne's disclosure that she is ten weeks pregnant fundamentally changes the clinical priorities of this consultation. Her ten-week delay in disclosing reflects a genuine and understandable fear that the clinical response will be punitive and result in the removal of her child — this fear must be directly and explicitly addressed to maintain the therapeutic alliance that has enabled her stability over the past two years. Explicitly acknowledging her motivation to parent this child, and affirming that services aim to support rather than undermine that goal, is both therapeutically appropriate and clinically strategic for sustaining her engagement with what is now a complex, multi-agency care plan.

The illicit benzodiazepine use at ten weeks gestation is a first-trimester foetal risk requiring urgent obstetric referral and medically supervised cessation planning. Benzodiazepine exposure in the first trimester carries teratogenic risk, and the combination of methadone and diazepam in a pregnant woman creates a complex pharmacological situation requiring specialist perinatal drug and alcohol input. Methadone should continue — abrupt cessation of opioid substitution therapy in pregnancy carries greater risk to the foetus than continuation — but pharmacokinetics change substantially across the trimesters, necessitating ongoing dose review in close coordination with the obstetric team. Planning for neonatal abstinence syndrome must begin now with the neonatal unit, so that monitoring protocols, NICU readiness, and parenting support structures are established well before the birth.

A child protection notification regarding the unborn child is indicated given the combination of a previous child protection order, ongoing illicit benzodiazepine use in pregnancy, and a partner with daily alcohol use. Dean's alcohol consumption requires specific assessment for domestic violence risk and parenting capacity — both considerations are directly relevant to the safety of this infant. Leanne's self-medication of anxiety with illicit diazepam indicates an untreated anxiety disorder that requires formal assessment and evidence-based management using medications safe in pregnancy, as the underlying anxiety will not resolve without treatment and will otherwise remain a driver of ongoing illicit drug use.

This presentation is beyond the scope of any single clinician to manage safely. A coordinated perinatal multidisciplinary team including obstetrics, specialist perinatal drug and alcohol services, social work, paediatrics and neonatology, and child protection must be assembled promptly, with a structured case conference to establish shared goals and clear clinical responsibility across all services. The existing relationship with her four-year-old son and the previous child protection order also require review as part of understanding Leanne's current parenting capacity and the family context into which this infant will be born.`,
  },

  // ─── 11. RISK ASSESSMENT ────────────────────────────────────────────────────
  {
    id: "q11",
    questionNumber: "MEQ-011",
    topic: "risk",
    difficulty: "consultant",
    title: "Denied Suicidal Ideation — Contextual High-Risk Presentation",
    candidateRole: "Consultant psychiatrist on call",
    setting: "Emergency Department",
    stem: `You are the on-call consultant psychiatrist. At 10 pm you receive a call from the ED registrar about Marcus, a 41-year-old man brought in by ambulance after his neighbour called 000, concerned he had not been seen for three days. On arrival Marcus is calm, well-dressed, and explicitly denies suicidal ideation. He tells the ED team he "just needed some time alone."

The triage note documents: separated from his wife six weeks ago following his disclosure of a second extramarital affair; resigned from his job as a secondary school principal two weeks ago ("by mutual agreement"); his 17-year-old son has refused contact. His GP records show a recent consultation at which he collected a script for 100 tablets of temazepam — he cannot account for the whereabouts of these tablets. He denies alcohol use but there is a faint smell of alcohol noted by the ED nurse. He has no previous psychiatric history and no prior presentations.

The ED registrar has completed a brief risk screening tool which is scored "low" and has phoned to ask if Marcus can be discharged with a GP follow-up letter.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Explicit denial of SI does not negate contextual risk — anchoring bias",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Explicitly denies suicidal ideation; ED registrar scores 'low' on screening tool",
        whyItMatters: "Standardised risk tools used without clinical formulation produce false-negative results in high-stakes presentations; denial of SI is not sufficient to discharge",
        modelWording: "Marcus's explicit denial of suicidal ideation cannot be taken at face value in the context of acute psychosocial collapse. Risk screening tools do not replace clinical formulation.",
        keywords: ["denial", "explicit denial", "context", "formul", "screening tool", "false negative", "clinical judgment", "not sufficient"],
      },
      {
        id: "s2",
        name: "Unaccounted temazepam — means access",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Script for 100 tablets of temazepam — cannot account for whereabouts",
        whyItMatters: "Access to a lethal means with no account of location is a significant risk factor; safe storage or removal of means is a non-negotiable safety step",
        relatedRisk: "100 temazepam tablets represents a potentially lethal quantity; overdose is a common method in male mid-life suicides",
        modelWording: "The whereabouts of 100 temazepam tablets must be established before any discharge decision. This is an immediate means restriction task.",
        keywords: ["temazepam", "tablet", "means", "lethal", "accounted", "medication", "means restriction", "safe storage"],
      },
      {
        id: "s3",
        name: "Acute psychosocial collapse — multiple concurrent losses",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Separated from wife six weeks ago; resigned from job two weeks ago; son refuses contact",
        whyItMatters: "Three concurrent identity-defining losses in six weeks (marriage, career, parental relationship) represent a catastrophic psychosocial load; this pattern is a well-recognised precursor to male mid-life suicide",
        modelWording: "Marcus has experienced three simultaneous major losses in six weeks: marital separation, career termination, and rupture with his son. This acute psychosocial collapse in a middle-aged man with no previous psychiatric contact represents high contextual suicide risk.",
        keywords: ["loss", "separation", "job", "career", "son", "psychosocial", "concurrent", "multiple loss", "identity"],
      },
      {
        id: "s4",
        name: "Three-day isolation — possible planning behaviour",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Neighbour called 000 — not been seen for three days",
        whyItMatters: "Self-isolation lasting days is a red flag for suicidal planning, particularly in a person who has recently experienced major losses",
        modelWording: "Three days of uncharacteristic isolation prompted a welfare check — this must be explicitly interpreted as a possible indicator of suicidal planning or intent, not 'needing time alone'.",
        keywords: ["isolation", "three days", "welfare check", "planning", "uncharacteristic", "not seen"],
      },
      {
        id: "s5",
        name: "Alcohol — undisclosed, clinical note conflicts with denial",
        category: "substance_use",
        severity: "important",
        clueInStem: "Denies alcohol use; faint smell of alcohol noted by nurse",
        whyItMatters: "Alcohol use disinhibits suicidal behaviour and impairs capacity to make a safe discharge plan; covert alcohol use in this context elevates risk further",
        modelWording: "The nurse's observation of alcohol odour conflicts with Marcus's denial. This must be directly addressed — alcohol in the context of acute loss and means access significantly elevates immediate risk.",
        keywords: ["alcohol", "smell", "deny", "covert", "substance", "disinhibit"],
      },
      {
        id: "s6",
        name: "Registrar supervision — inadequate risk assessment",
        category: "governance",
        severity: "important",
        clueInStem: "ED registrar has scored 'low' and is asking for permission to discharge",
        whyItMatters: "A consultant must not delegate risk judgment to a screening tool score; this is a non-delegable clinical decision requiring consultant assessment",
        modelWording: "The registrar's use of a screening tool score to support discharge is a supervision and governance concern. This presentation requires direct consultant assessment, not a phone authorisation.",
        keywords: ["registrar", "screening tool", "phone", "supervision", "consultant assessment", "non-delegable", "direct assessment"],
      },
      {
        id: "s7",
        name: "Shame and concealment — public identity, private collapse",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "Principal of a secondary school; resigned by mutual agreement following disclosure of affair",
        whyItMatters: "High public identity combined with private shameful disclosure (affairs) creates a risk of concealment; shame is an independent predictor of suicide in mid-life men",
        modelWording: "Marcus held a high-profile leadership role. The combination of public identity, private shame, and career termination creates a significant shame-based suicide risk that may make him less likely to disclose intent.",
        keywords: ["shame", "principal", "public", "identity", "conceal", "affair", "dishonour", "status loss"],
      },
    ],
    priorityOrder: {
      urgent: ["s2", "s1", "s3", "s4"],
      secondary: ["s5", "s6"],
      lowYield: ["s7"],
    },
    modelAnswer: `Marcus's explicit denial of suicidal ideation cannot be accepted at face value in this clinical context, and the registrar's reliance on a screening tool score to propose telephone discharge is an example of anchoring bias that must not be endorsed. Standardised risk screening tools are not designed to replace clinical formulation in complex presentations, and they produce false-negative results precisely in the type of case Marcus represents — a high-functioning, experienced professional who is motivated to conceal. I will attend the emergency department in person to conduct a full clinical assessment rather than authorise a decision by telephone.

The whereabouts of one hundred temazepam tablets must be established before any other disposition decision is considered. Marcus cannot account for their location, and in the context of a 41-year-old man who has experienced three catastrophic identity-defining losses in six weeks and subsequently spent three days in unexplained isolation, the absence of these tablets is both a lethal means concern and a possible indicator that they have been positioned for use. If the tablets cannot be located, this must be treated as a means restriction emergency requiring immediate and decisive action, including serious consideration of voluntary or involuntary admission.

The pattern of acute psychosocial collapse Marcus has experienced is a well-recognised precursor constellation for high-lethality suicide attempts in middle-aged men: marital separation following disclosure of a second affair, resignation from a senior leadership role, and rupture with his son have all occurred within six weeks. Three days of uncharacteristic isolation requiring a welfare check by his neighbour must be explicitly interpreted as a possible indicator of suicidal planning and cannot be accepted at face value as "needing time alone." The covert alcohol use, evidenced by the nurse's observation conflicting with his denial, disinhibits suicidal behaviour and further elevates the immediate clinical risk.

Marcus's shame is an independent clinical risk factor that must inform both the assessment approach and the formulation. A school principal whose two extramarital affairs have been disclosed, resulting in resignation, has experienced a form of public humiliation that is an established predictor of suicide in high-functioning middle-aged men with previously intact public identities. This shame-proneness may make him less likely to disclose intent even in direct clinical interview, reinforcing the requirement for a full collateral history from his wife and neighbour, a complete mental state examination, and direct exploration of suicidal cognition, ideation, plan, intent, and rehearsal behaviour.`,
  },

  // ─── 12. QUALITY & SAFETY REVIEW ─────────────────────────────────────────
  {
    id: "q12",
    questionNumber: "MEQ-012",
    topic: "quality_assurance",
    difficulty: "consultant",
    title: "Post-Discharge Suicide — Adverse Event Response",
    candidateRole: "Director of psychiatry / senior consultant",
    setting: "Inpatient psychiatric unit, metropolitan hospital",
    stem: `It is Monday morning. You are the director of a 20-bed acute inpatient psychiatric unit. The clinical nurse consultant informs you that Kevin, a 38-year-old man admitted two weeks ago following a serious suicide attempt, was discharged on Friday afternoon by the on-call registrar without your knowledge. Kevin was found dead on Saturday night — his wife discovered him; he had hanged himself in the garage.

You review the Friday discharge note: the registrar documented that Kevin "expressed readiness to go home" and "denied current suicidal ideation." The risk assessment section is a single line: "SI denied. Agreed to follow up with GP." There is no documentation of collateral contact with Kevin's wife, no safety plan, no relapse prevention plan, no next-of-kin notification, and no consultant review. The GP had not been notified. Kevin's wife says she was not contacted before discharge and was "shocked" when he arrived home on Friday.

Your staff are distressed. A junior nurse who was on shift Friday tells you she had raised concerns to the registrar about Kevin's flat affect and early discharge.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Open disclosure — immediate obligation to family",
        category: "governance",
        severity: "critical",
        clueInStem: "Kevin's wife discovered him; she was not contacted before discharge",
        whyItMatters: "Open disclosure is a professional, ethical, and organisational obligation following an adverse outcome. The family must be contacted promptly, honestly, and compassionately by a senior clinician.",
        relatedLegal: "Open Disclosure standard (Australian Commission on Safety and Quality in Health Care); potential coronial inquiry; civil liability",
        modelWording: "Open disclosure to Kevin's wife must occur urgently, led by a senior clinician. This includes an honest account of what happened, an expression of sincere condolences, and an explanation of what will be reviewed.",
        keywords: ["open disclosure", "family", "wife", "contact", "honest", "disclosure", "condolence", "senior"],
      },
      {
        id: "s2",
        name: "Critical incident reporting — mandatory notification",
        category: "governance",
        severity: "critical",
        clueInStem: "Patient died by suicide following discharge from psychiatric inpatient unit",
        whyItMatters: "Unexpected death of a psychiatric patient following recent discharge is a mandatory reportable incident requiring immediate notification to hospital executive, safety and quality team, and potentially the coroner",
        relatedLegal: "Coroners Act — death of a person in care or recently discharged from a health service is likely reportable; mandatory incident reporting obligations",
        modelWording: "This is a mandatory critical incident. I must notify hospital executive, the patient safety and quality unit, and the coroner's office. The clinical record must be preserved.",
        keywords: ["incident", "reportable", "mandatory", "coroner", "coronial", "executive", "notify", "report"],
      },
      {
        id: "s3",
        name: "Documentation failure — registrar's discharge note is clinically inadequate",
        category: "governance",
        severity: "critical",
        clueInStem: "Risk assessment is a single line; no safety plan, no collateral, no consultant review documented",
        whyItMatters: "The discharge note fails to meet minimum clinical standards. The risk assessment is not defensible. No safety plan, no family contact, no GP notification, no consultant sign-off.",
        relatedLegal: "Medico-legal exposure for the registrar and the unit; potential finding of institutional negligence",
        modelWording: "The registrar's discharge documentation is clinically and medico-legally inadequate: absent safety plan, absent collateral contact, absent GP notification, absent consultant review, and a single-line risk assessment.",
        keywords: ["documentation", "inadequate", "safety plan", "collateral", "gp notification", "consultant review", "discharge note", "single line"],
      },
      {
        id: "s4",
        name: "Nurse's escalation was not acted on — safety reporting culture",
        category: "governance",
        severity: "critical",
        clueInStem: "Junior nurse raised concerns about Kevin's flat affect and early discharge — registrar did not act",
        whyItMatters: "Failure to act on a nursing escalation is a serious systems and safety culture failure; the nurse's concern was clinically relevant (flat affect post-attempt is a risk indicator)",
        relatedSystem: "Speaking Up for Safety; closed-loop escalation policy; after-action support for distressed staff member",
        modelWording: "The nursing escalation must be documented and taken seriously. Flat affect in a patient recovering from a serious attempt is a recognised risk indicator. The failure to act on this escalation is part of the clinical incident.",
        keywords: ["nurse", "escalation", "speaking up", "flat affect", "not acted", "safety culture", "concern raised"],
      },
      {
        id: "s5",
        name: "Staff wellbeing — critical incident debriefing",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "Staff are distressed",
        whyItMatters: "Clinical staff exposed to a patient death require structured support — a critical incident debriefing must be organised, but this must not involve pressure to suppress concerns or collude with any cover-up",
        modelWording: "A structured staff debriefing must be organised, led by an independent facilitator where possible. Staff are not to be discouraged from disclosing their concerns to the review process.",
        keywords: ["staff", "debrief", "support", "distress", "wellbeing", "critical incident debrief"],
      },
      {
        id: "s6",
        name: "Root cause analysis — systems review",
        category: "governance",
        severity: "important",
        clueInStem: "Discharged without consultant knowledge; no safety plan; no GP; no family contact",
        whyItMatters: "Multiple system failures co-occurred — this is not a single-clinician error; a formal root cause analysis is required to identify contributing factors",
        modelWording: "A formal root cause analysis must be commissioned. Contributing factors to investigate include: after-hours discharge policy, consultant notification expectations, discharge checklist compliance, supervision arrangements, and workload at time of discharge.",
        keywords: ["root cause", "rca", "systems", "contributing factors", "formal review", "analysis", "policy"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s4"],
      secondary: ["s3", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `The most immediate priority is Kevin's wife. A senior clinician must contact her today, not a junior staff member or administrative representative, and that contact must include sincere condolences, an honest account of what occurred on Friday afternoon, and a clear explanation of the review processes that will now follow. Open disclosure is a professional, ethical, and organisational obligation under the Australian Commission on Safety and Quality in Health Care Open Disclosure Standard — it cannot be deferred, and the manner in which it is conducted will significantly affect the family's capacity to process what has happened and to trust the health system going forward.

Mandatory critical incident reporting must be initiated immediately. The death of a psychiatric patient following discharge from an inpatient unit is almost certainly a reportable death to the coroner in this jurisdiction, and hospital executive and the patient safety and quality team must be notified today without delay. The medical record must be secured and preserved in its current state — no additions, alterations, or deletions are permissible pending the review, and all staff who worked on Friday must be made aware of this obligation immediately.

The registrar's discharge documentation falls substantially below the minimum clinical and medico-legal standard for a high-risk psychiatric patient. The single-line risk assessment, the complete absence of a safety plan, the absence of collateral contact with Kevin's wife, the absence of GP notification, and the absence of consultant review are not isolated failures but a pattern of multiple concurrent omissions that should not have been possible within the governance structure of this unit. The nursing escalation regarding Kevin's flat affect and early discharge is a clinically significant event that must be formally documented as part of the incident — flat affect in a person recovering from a serious attempt is a recognised risk indicator, and the failure to act on a nursing concern is part of the clinical picture that the review must examine.

A formal root cause analysis must be commissioned to examine the contributing factors systematically: the after-hours discharge policy, consultant notification expectations, discharge checklist compliance, the registrar's supervision arrangements, and the workload conditions at the time of the Friday discharge. A structured staff debriefing must be organised for the Friday shift team, led by an independent facilitator, with staff explicitly supported and encouraged to raise concerns through the review process rather than discouraged from doing so. The safety culture of this unit depends on staff believing that speaking up is valued and protected.`,
  },

  // ─── 13. QUALITY & SAFETY ────────────────────────────────────────────────
  {
    id: "q13",
    questionNumber: "MEQ-013",
    topic: "quality_assurance",
    difficulty: "consultant",
    title: "Seclusion Documentation Failure and Governance Breach",
    candidateRole: "Consultant psychiatrist, clinical lead",
    setting: "Acute inpatient psychiatric unit",
    stem: `You are the clinical lead of an acute psychiatric unit. On Monday morning you are reviewing the weekend incident log. You read that at 11:30 pm on Saturday, a 27-year-old man, Jarrah — an Aboriginal man admitted under the Mental Health Act for acute psychosis — was placed in seclusion for four hours following an altercation with a fellow patient. The seclusion was authorised by the on-call registrar.

On reviewing the seclusion register you find:
- No documentation that a consultant was contacted or that consultant authorisation was given
- The nursing observations during seclusion are documented as "checked Q30 minutes" but no actual clinical entries appear in the medical record between 11:30 pm and 3:30 am
- No post-seclusion review was completed before the next morning
- There is no documentation of a review by an Aboriginal Liaison Officer or culturally appropriate support
- The seclusion entry form does not include a reason for seclusion beyond "aggressive behaviour"
- Jarrah is now refusing to engage with treating staff and has asked to leave the hospital

You have received a phone call this morning from Jarrah's mother, a senior community elder, who is distressed and wants answers.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Seclusion without consultant authorisation — governance breach",
        category: "governance",
        severity: "critical",
        clueInStem: "No documentation that a consultant was contacted; authorised by registrar",
        whyItMatters: "Under most state Mental Health Acts and policy frameworks, seclusion requires consultant authorisation or immediate notification; a registrar-only authorisation is a clinical governance breach",
        relatedLegal: "Mental Health Act seclusion provisions; hospital policy; the National Mental Health Standards",
        modelWording: "Seclusion was used without documented consultant authorisation. This represents a clinical governance breach requiring formal review and reporting.",
        keywords: ["consultant authorisation", "authorisation", "registrar", "governance", "seclusion policy", "mental health act", "notification"],
      },
      {
        id: "s2",
        name: "Documentation failure — no monitoring entries during four-hour seclusion",
        category: "governance",
        severity: "critical",
        clueInStem: "No clinical entries in medical record between 11:30 pm and 3:30 am; documented as 'checked Q30 minutes' only",
        whyItMatters: "Absence of clinical entries during seclusion means there is no record of Jarrah's physical or mental state — this is both a safety failure and a medico-legal exposure",
        modelWording: "Four hours of seclusion with no substantive clinical documentation constitutes a serious monitoring failure. Q30 minute checks must be individually documented with clinical content.",
        keywords: ["documentation", "monitoring", "entries", "no record", "clinical note", "observation", "four hours"],
      },
      {
        id: "s3",
        name: "Cultural safety — no Aboriginal Liaison Officer, no culturally safe response",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "Jarrah is an Aboriginal man; no Aboriginal Liaison Officer involvement documented",
        whyItMatters: "Seclusion of an Aboriginal person without involvement of Aboriginal Liaison or culturally appropriate support represents a specific cultural safety failure; Aboriginal and Torres Strait Islander people are over-represented in seclusion statistics",
        relatedCultural: "RANZCP Position Statement on Aboriginal and Torres Strait Islander Mental Health; NSQHS Cultural Safety Standard",
        modelWording: "An Aboriginal Liaison Officer or equivalent culturally appropriate support must have been involved in Jarrah's care. The failure to document or involve cultural support in a seclusion episode involving an Aboriginal person is a specific cultural safety breach.",
        keywords: ["aboriginal liaison", "cultural", "culturally safe", "aboriginal", "first nations", "indigenous", "cultural support"],
      },
      {
        id: "s4",
        name: "Post-seclusion review — not completed",
        category: "governance",
        severity: "critical",
        clueInStem: "No post-seclusion review was completed before the next morning",
        whyItMatters: "Post-seclusion review is a mandatory clinical obligation to assess impact on the patient, address any injuries, and debrief — its absence is a policy breach",
        modelWording: "A post-seclusion review must occur within a defined timeframe (typically 1 hour of exit under most policies). This was not completed — this must be addressed in the incident review.",
        keywords: ["post-seclusion", "review", "debrief", "mandatory", "injury", "after seclusion"],
      },
      {
        id: "s5",
        name: "Jarrah's refusal to engage — therapeutic rupture requiring repair",
        category: "trauma",
        severity: "important",
        clueInStem: "Refusing to engage with treating staff and has asked to leave the hospital",
        whyItMatters: "Seclusion may have been experienced as traumatic and/or as an act of state coercion by an Aboriginal man — his refusal to engage must be understood as a trauma and cultural response, not simply 'non-compliance'",
         modelWording: "Jarrah's withdrawal from engagement following seclusion must be understood through a trauma and cultural lens — seclusion by state authorities may have profound historical resonance for an Aboriginal person. Therapeutic repair requires a culturally safe approach.",
        keywords: ["therapeutic rupture", "trauma", "cultural", "repair", "withdrawal", "engage", "historical", "trust"],
      },
      {
        id: "s6",
        name: "Community elder — open disclosure and family engagement",
        category: "family_carer",
        severity: "important",
        clueInStem: "Jarrah's mother, a senior community elder, is distressed and wants answers",
        whyItMatters: "Jarrah's mother is both a family carer and a community leader — her concerns carry cultural and systemic weight; she deserves an honest, senior-level response",
        modelWording: "I must respond personally to Jarrah's mother as a priority — as a family member and as a community elder, she deserves an honest account of what happened, what will be reviewed, and what will change.",
        keywords: ["mother", "elder", "community", "open disclosure", "family", "honest", "senior response"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s3", "s5"],
      secondary: ["s2", "s4", "s6"],
      lowYield: [],
    },
    modelAnswer: `My first priority this morning is to respond personally to Jarrah's mother. As a family member of a person under involuntary care and as a senior community elder, she deserves an honest, senior-level response that does not minimise what has happened. That conversation must include a direct account of the seclusion, an acknowledgment of the specific cultural safety failures, sincere condolences for the distress caused to Jarrah and to his family, and a clear explanation of the review process that will now follow. It must be offered with the involvement of the Aboriginal Liaison Officer and with the offer of additional cultural support if she requests it.

The governance failures documented in the seclusion register are multiple and serious. Seclusion was used without documented consultant authorisation, which constitutes a breach of Mental Health Act seclusion provisions and hospital policy in virtually all Australian jurisdictions. Four hours of seclusion with no substantive clinical documentation — entries described only as "checked Q30 minutes" with no individual clinical notes — means there is no record of Jarrah's physical or mental state during that period, which is both a patient safety failure and a significant medico-legal exposure. The absence of a post-seclusion review before the following morning falls below the required clinical standard.

The failure to involve the Aboriginal Liaison Officer or any culturally appropriate support during the seclusion of an Aboriginal man is a specific cultural safety breach that must be named as such in the incident report. Aboriginal and Torres Strait Islander people are significantly over-represented in seclusion and restraint statistics, and the National Mental Health Standards specifically require culturally safe and responsive approaches to restrictive practices. Jarrah's subsequent withdrawal from engagement with treating staff must be understood through a trauma and cultural lens — seclusion by state authorities may carry profound historical resonance for an Aboriginal person, and therapeutic repair of this relationship will require a culturally safe approach, likely led by the Aboriginal Liaison Officer.

A mandatory critical incident report must be submitted to the hospital executive, patient safety team, and the mental health commission. A formal root cause analysis or clinical review must be commissioned to examine the contributing factors: registrar supervision arrangements, awareness of seclusion policy requirements, Aboriginal Liaison availability outside business hours, and documentation standards for restrictive practices on this unit. I will approach Jarrah directly today, with cultural support, to acknowledge what happened, apologise for the failures in his care, and explore what he needs to remain safely in hospital — his request to leave must be taken seriously and weighed carefully against his ongoing clinical need under the Mental Health Act.`,
  },

  // ─── 14. SUPERVISION & FEEDBACK ─────────────────────────────────────────
  {
    id: "q14",
    questionNumber: "MEQ-014",
    topic: "supervision",
    difficulty: "consultant",
    title: "Registrar Requesting Discharge of Unsafe Patient",
    candidateRole: "Consultant psychiatrist, supervising registrar",
    setting: "Inpatient psychiatric unit — Tuesday afternoon supervision",
    stem: `You are conducting your weekly supervision session with Dr Priya Sharma, a second-year advanced trainee. She presents a case for discharge planning: Callum, a 29-year-old man admitted three weeks ago following an overdose of 40 paracetamol tablets. Callum has a background of recurrent major depressive disorder and borderline personality disorder. He is now euthymic on venlafaxine 225 mg and says he wants to go home to "get back to normal."

Dr Sharma presents a risk assessment of "low to moderate." When you ask her to walk you through her reasoning, she tells you: "He's engaged in sessions, his mood is improved, he denies SI, and he's motivated to go home." She has not contacted Callum's mother, who brought him in and is his listed emergency contact. She has not developed a written safety plan. She has not arranged community follow-up. She has not reviewed his previous inpatient presentations — you note on the system that there have been four prior admissions in three years, each following an overdose.

Dr Sharma seems eager to discharge Callum because "the beds are full and there's pressure from the NUM."`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Risk formulation is inadequate — history not reviewed",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Four prior admissions in three years, each following an overdose — not reviewed by registrar",
        whyItMatters: "A previous history of multiple overdoses is one of the strongest predictors of completed suicide; failure to review prior admissions before a discharge risk assessment is a significant clinical error",
        modelWording: "Dr Sharma has not reviewed Callum's admission history. Four overdoses in three years is a high-risk pattern that must be central to any discharge formulation — this is not a low-risk presentation.",
        keywords: ["history", "prior admission", "previous", "four", "overdose", "pattern", "not reviewed", "recurrent"],
      },
      {
        id: "s2",
        name: "No collateral contact — mother not contacted",
        category: "collateral",
        severity: "critical",
        clueInStem: "Has not contacted Callum's mother, who brought him in and is listed emergency contact",
        whyItMatters: "Discharge planning without family collateral in a patient with borderline personality disorder and recurrent suicidality is a clinical and safety failure",
        modelWording: "Callum's mother brought him in and is his emergency contact. She has not been contacted. Family collateral is essential in recurrent suicidality — both for safety planning and for understanding the home environment he is returning to.",
        keywords: ["collateral", "mother", "family", "contact", "emergency contact", "family", "not contacted"],
      },
      {
        id: "s3",
        name: "No written safety plan — omission in BPD/recurrent suicide risk",
        category: "risk_self",
        severity: "critical",
        clueInStem: "She has not developed a written safety plan",
        whyItMatters: "In a patient with BPD and four prior overdoses, a written collaborative safety plan is a minimum standard of care for discharge",
        modelWording: "A written safety plan — co-developed with Callum, reviewed with his mother, and linked to community services — is a non-negotiable discharge component. This has not been completed.",
        keywords: ["safety plan", "written", "collaborative", "discharge plan", "bpd", "safety planning"],
      },
      {
        id: "s4",
        name: "Bed pressure is driving clinical decision — systems pressure",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "Beds are full; pressure from the NUM",
        whyItMatters: "Discharge of a high-risk patient driven by bed pressure rather than clinical readiness is a governance failure; the consultant must not yield to administrative pressure on safety decisions",
        relatedSystem: "Bed management pressure; NUM authority does not override clinical judgment",
        modelWording: "Bed pressure does not constitute a clinical reason for discharge. If Callum is not ready for safe discharge, I must document this clearly and advise the NUM that the decision is a clinical one, not an administrative one.",
        keywords: ["bed pressure", "beds full", "num", "administrative", "pressure", "systems pressure", "clinical decision"],
      },
      {
        id: "s5",
        name: "Supervision obligation — teaching risk formulation, not authorising discharge",
        category: "governance",
        severity: "important",
        clueInStem: "Supervision session; Dr Sharma presenting inadequate formulation",
        whyItMatters: "The consultant's role is not to authorise the registrar's decision but to actively teach risk formulation and ensure patient safety; this requires direct corrective feedback",
        modelWording: "This supervision session is a teaching opportunity. I must not simply override Dr Sharma — I must explain why her formulation is incomplete, guide her through the missing elements, and ensure she understands what a defensible discharge risk assessment requires.",
        keywords: ["teach", "feedback", "supervision", "corrective", "formulation", "registrar", "guidance", "explain"],
      },
      {
        id: "s6",
        name: "Community follow-up not arranged",
        category: "disposition",
        severity: "important",
        clueInStem: "She has not arranged community follow-up",
        whyItMatters: "Post-discharge follow-up within 48–72 hours is an evidence-based suicide prevention intervention; its absence in a patient with recurrent suicidality is a gap in the safety plan",
        modelWording: "Community follow-up must be arranged before discharge — an appointment within 48 hours with a community mental health clinician or outpatient psychiatry is the minimum standard.",
        keywords: ["community", "follow-up", "outpatient", "48 hours", "72 hours", "appointment", "after discharge"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s4", "s2"],
      secondary: ["s3", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Callum is not clinically ready for discharge, and this must be stated clearly to Dr Sharma before this supervision session concludes. Four overdoses in three years is a high-risk recurrence pattern that is one of the strongest predictors of completed suicide, and Dr Sharma has not reviewed the admission history — this is a fundamental omission in any discharge risk assessment for a patient with recurrent suicidality, regardless of current mood state. A risk formulation that is based solely on the patient's current presentation without reference to the longitudinal pattern is not a formulation; it is a cross-sectional snapshot that is inadequate for a discharge decision.

This supervision session is both a patient safety intervention and a teaching opportunity, and I must use it as both simultaneously. I will not simply override Dr Sharma's assessment — I will walk through the specific elements that are missing, explain the clinical and medico-legal significance of each, and require her to redo the assessment with my direct guidance. The missing elements are concrete: a review of all four prior admission records; collateral contact with Callum's mother, who brought him in and is his listed emergency contact; a written collaborative safety plan; confirmed community mental health follow-up within forty-eight hours of discharge; and a GP letter. None of these can be substituted by Callum's self-report of readiness or mood improvement alone.

Bed pressure does not constitute a clinical reason for discharge, and the fact that Dr Sharma is presenting this as a consideration in her decision-making is itself a supervision concern that must be addressed directly. I will document clearly in the medical record that the decision to maintain Callum's admission is a clinical safety decision, made on clinical grounds, and I will advise the Nursing Unit Manager of this directly if the pressure continues. Administrative capacity management has no place in a risk assessment for a patient with four prior overdoses in three years.

Once the correct elements of the risk assessment are in place and Callum is determined to be ready for safe discharge, I will ensure the written safety plan is co-developed with him, reviewed with his mother, and linked to specific community services. The written record of today's supervision session — including the educational content covered and the assessment gaps identified — must be documented in my supervision notes.`,
  },

  // ─── 15. SUPERVISION ───────────────────────────────────────────────────────
  {
    id: "q15",
    questionNumber: "MEQ-015",
    topic: "supervision",
    difficulty: "consultant",
    title: "Registrar Using Culturally Unsafe Language in Case Presentation",
    candidateRole: "Consultant psychiatrist, supervisor",
    setting: "Grand rounds / case presentation, inpatient unit",
    stem: `You are attending the weekly inpatient case review meeting. Dr James Nguyen, a first-year trainee, presents a 55-year-old Aboriginal man, David, who was admitted following an acute psychotic episode. During the presentation, Dr Nguyen uses the following phrases: "He's got a chaotic lifestyle," "non-compliant with medication," "his family is dysfunctional and not supportive," "classic presentation of someone who doesn't engage with services," and "probably has a personality disorder on top of everything."

You observe that the two Aboriginal staff members present — a nursing aide and the Aboriginal Liaison Officer — both become visibly uncomfortable. One of them leaves the room. David's daughter, who had agreed to attend the meeting as part of his family-centred care plan, is also present. She becomes tearful.

The rest of the clinical team continue engaging with Dr Nguyen's presentation as though nothing has happened. Dr Nguyen appears unaware of the impact.`,
    totalMarks: 20,
    signals: [
      {
        id: "s1",
        name: "Intervene in the meeting — immediate interruption required",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "David's daughter is present and tearful; Aboriginal staff are visibly uncomfortable; one leaves",
        whyItMatters: "Allowing culturally unsafe language to continue in a meeting where David's daughter and Aboriginal staff are present causes active harm in real time; the consultant must intervene immediately",
        modelWording: "I must interrupt the presentation respectfully but clearly. I will acknowledge David's daughter's distress, pause the meeting, and address what has happened — not after the meeting.",
        keywords: ["intervene", "interrupt", "immediate", "pause", "real time", "stop", "halt", "meeting"],
      },
      {
        id: "s2",
        name: "Language used is culturally unsafe and stigmatising",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "'Chaotic lifestyle', 'non-compliant', 'dysfunctional family', 'doesn't engage', 'personality disorder'",
        whyItMatters: "These terms reflect a deficit-based, colonising frame that pathologises Aboriginal family systems and attribute failure-to-engage to the patient rather than to service inaccessibility; they constitute culturally unsafe clinical language",
        relatedCultural: "RANZCP Position Statement on Aboriginal and Torres Strait Islander Mental Health; Cultural Safety principles",
        modelWording: "The terms used reflect a deficit-framing inconsistent with trauma-informed and culturally safe care. 'Non-compliant' should be replaced with an exploration of barriers; 'chaotic lifestyle' must be reconsidered through a structural determinants lens.",
        keywords: ["non-compliant", "chaotic", "deficit", "language", "culturally unsafe", "stigmatising", "framing", "colonising"],
      },
      {
        id: "s3",
        name: "David's daughter — family present, harmed by presentation",
        category: "family_carer",
        severity: "critical",
        clueInStem: "David's daughter is present; becomes tearful",
        whyItMatters: "A family member has experienced harm in a clinical meeting. Her experience must be directly acknowledged and she must be offered support",
        modelWording: "David's daughter has been harmed by the language used about her family in a clinical meeting. I must speak to her directly, acknowledge what happened, and offer an apology on behalf of the team.",
        keywords: ["daughter", "family", "tearful", "harmed", "acknowledge", "apology", "speak to her"],
      },
      {
        id: "s4",
        name: "Aboriginal staff impact — duty of care to staff",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "Aboriginal Liaison Officer and nursing aide visibly uncomfortable; one leaves the room",
        whyItMatters: "Aboriginal staff are frequently exposed to culturally unsafe practices in clinical settings — their distress must be acknowledged and a safe debrief arranged",
        modelWording: "I will follow up with both Aboriginal staff members after the meeting. Their distress is valid and their experience constitutes a workplace harm that must be acknowledged.",
        keywords: ["aboriginal staff", "alo", "liaison officer", "staff impact", "debrief", "staff wellbeing", "harm"],
      },
      {
        id: "s5",
        name: "Corrective feedback to Dr Nguyen — teaching moment",
        category: "governance",
        severity: "important",
        clueInStem: "Dr Nguyen appears unaware of the impact",
        whyItMatters: "Dr Nguyen's unawareness is a training deficit, not a malicious act — corrective feedback must be given privately, specifically, and educationally, not punitively",
        modelWording: "I will meet with Dr Nguyen privately after the meeting to provide specific, educational feedback on the language used, its cultural safety implications, and the impact on those in the room.",
        keywords: ["feedback", "dr nguyen", "private", "educate", "teach", "corrective", "specific", "language"],
      },
      {
        id: "s6",
        name: "Team culture — the rest of the team did not intervene",
        category: "governance",
        severity: "important",
        clueInStem: "Clinical team continue engaging as though nothing happened",
        whyItMatters: "The failure of the entire team to respond reflects a cultural safety gap in team norms — this must be addressed at a team level, not just with the registrar",
        modelWording: "The fact that no one in the team responded is itself a cultural safety problem. This must be raised at the next team meeting as a reflection on team norms and our collective responsibility.",
        keywords: ["team", "culture", "norms", "collective", "nobody responded", "team level", "systemic"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s3", "s2"],
      secondary: ["s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `I will interrupt the presentation respectfully but without hesitation. David's daughter is present in this room and has become tearful, and two Aboriginal staff members are visibly distressed — one has already left. Allowing the presentation to continue while these people experience harm in real time is not an option, and the clinical team's silence in response to what has been said is itself part of what must be addressed. I will acknowledge David's daughter directly, pause the meeting, and name — clearly and without punishing Dr Nguyen in front of the group — that the language used requires us to stop and reflect before we continue.

The terms used in this presentation reflect a deficit-based framing that is fundamentally inconsistent with trauma-informed and culturally safe clinical practice. "Non-compliant" attributes responsibility for service failure to the patient rather than exploring barriers to engagement that services themselves may have created. "Chaotic lifestyle" and "dysfunctional family" pathologise circumstances that are often the product of structural disadvantage, historical trauma, and the enduring consequences of colonisation for Aboriginal people and families. "Doesn't engage with services" describes a pattern without examining whether those services have been accessible, safe, or culturally appropriate. These are not merely word choices — they reflect a clinical frame that, if applied uncritically, will produce discriminatory care.

After the meeting, I will speak to David's daughter separately, acknowledge the specific harm caused by what she heard about her family in a clinical setting, and offer a direct apology on behalf of the clinical team. I will follow up privately with both Aboriginal staff members — the nursing aide and the Aboriginal Liaison Officer — to acknowledge their experience as a workplace harm and to ensure that a safe debrief is available to them. Their distress is valid and their presence in this room matters, both clinically and in terms of the organisation's responsibility to its Aboriginal and Torres Strait Islander workforce.

I will meet privately with Dr Nguyen after the meeting to provide specific, educational, and non-punitive corrective feedback on the language used, its cultural safety implications, and the impact it had on those in the room. His apparent unawareness of the impact does not reduce the harm but does inform the pedagogical approach — this is a training deficit that requires teaching, not punishment. At the next team meeting, I will raise the broader issue of team norms — the fact that the entire clinical team continued without response is a collective cultural safety gap that cannot be addressed by focusing on Dr Nguyen alone.`,
  },

  // ─── 16. DOCUMENTATION & COMMUNICATION ─────────────────────────────────
  {
    id: "q16",
    questionNumber: "MEQ-016",
    topic: "documentation",
    difficulty: "consultant",
    title: "Inadequate Capacity Assessment Documentation — Medication Refusal",
    candidateRole: "Consultant psychiatrist reviewing registrar's note",
    setting: "General medical ward — liaison psychiatry",
    stem: `You are the consultation-liaison consultant. During your ward round you review the previous day's notes. You find an entry from your registrar, Dr Claire Wu, following a bedside consultation for a 78-year-old woman, Mrs Irene Papageorgiou, a Greek-born woman who has been in Australia for 50 years and is fluent in English. Mrs Papageorgiou has metastatic bowel cancer and has refused her third cycle of chemotherapy.

Dr Wu's capacity assessment note reads in full:
"Seen and assessed. Patient appears to understand her diagnosis. She said she doesn't want more chemo as she's tired of being sick. She seems to have capacity. Discussed with oncology — treatment will not proceed. Impression: capacity intact. Plan: discharge to palliative care."

No formal four-domain assessment is documented. The note does not document which information was provided to the patient, whether it was confirmed understood, what alternatives were offered, what the patient said about risks of refusing, or whether her family was aware. There is no notation about the patient's cultural or spiritual background, whether her decision is consistent with her values, or whether a formal interpreter was offered despite the patient's Greek background. The oncology team has since proceeded with discharge planning.`,
    totalMarks: 20,
    signals: [
      {
        id: "s1",
        name: "Capacity assessment not documented to standard — four domains absent",
        category: "capacity",
        severity: "critical",
        clueInStem: "Note reads: 'appears to understand... seems to have capacity' — no four-domain documentation",
        whyItMatters: "A legally defensible capacity assessment must document all four domains explicitly: understanding, retaining, using/weighing information, and communicating a decision",
        relatedLegal: "Guardianship Act; common law capacity principles; medico-legal standard for refusal of life-sustaining treatment",
        modelWording: "Dr Wu's note does not constitute a legally defensible capacity assessment. All four domains must be documented with specific evidence from the assessment.",
        keywords: ["four domains", "understanding", "retain", "weigh", "communicate", "capacity assessment", "document", "legally defensible"],
      },
      {
        id: "s2",
        name: "Information not confirmed understood — validity of consent",
        category: "capacity",
        severity: "critical",
        clueInStem: "Note does not document what information was provided or confirmed understood",
        whyItMatters: "Capacity to refuse treatment depends on the patient having received and understood accurate information about diagnosis, prognosis, and consequences of refusal — this was not documented",
        modelWording: "There is no documentation that Mrs Papageorgiou was given information about her prognosis, the likely trajectory without chemotherapy, or alternatives — and no confirmation that she understood this information.",
        keywords: ["information provided", "understood", "prognosis", "consequences", "informed", "what was told"],
      },
      {
        id: "s3",
        name: "Cultural context — Greek-born; values and cultural background not explored",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "Greek-born; note makes no reference to cultural or spiritual background",
        whyItMatters: "A capacity assessment for a life-limiting decision must include exploration of whether the decision is consistent with the patient's values, which may be shaped by cultural or religious background",
        modelWording: "Mrs Papageorgiou's decision must be understood in the context of her cultural and spiritual values. Greek cultural traditions may influence her views on dying, family decision-making, and palliative care.",
        keywords: ["cultural", "greek", "values", "spiritual", "background", "consistent", "culturally informed"],
      },
      {
        id: "s4",
        name: "Family awareness not documented",
        category: "family_carer",
        severity: "important",
        clueInStem: "Note does not mention family awareness",
        whyItMatters: "While a capacitous patient's decision is legally binding and family cannot override it, awareness of family dynamics and whether family have been involved in the decision is clinically and culturally important",
        modelWording: "The documentation does not address whether family have been involved or are aware of Mrs Papageorgiou's decision. In culturally informed practice, this is important to document even if it does not alter the decision.",
        keywords: ["family", "aware", "involved", "family decision", "next of kin"],
      },
      {
        id: "s5",
        name: "Interpreter offer not documented despite non-English background",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "Greek-born; no notation of interpreter offer",
        whyItMatters: "Even if the patient is fluent in English, an offer of interpreter services should be documented for a life-limiting decision — it is best practice to document that the patient was given the option",
        modelWording: "The documentation should note whether a professional interpreter was offered and whether Mrs Papageorgiou elected to proceed in English. This is particularly important for a capacity assessment involving a life-sustaining treatment refusal.",
        keywords: ["interpreter", "language", "greek", "offered", "professional interpreter", "naati", "english"],
      },
      {
        id: "s6",
        name: "Action required — reassess and re-document before discharge proceeds",
        category: "disposition",
        severity: "critical",
        clueInStem: "Oncology has proceeded with discharge planning",
        whyItMatters: "Discharge to palliative care based on an inadequate capacity assessment exposes the hospital and team to significant medico-legal risk; the assessment must be repeated and properly documented before discharge",
        modelWording: "I must conduct a proper capacity assessment and document it in full before discharge proceeds. I will inform the oncology team that the current documentation does not support discharge on the basis of a valid capacity determination.",
        keywords: ["reassess", "re-document", "before discharge", "halt", "inform oncology", "valid", "discharge delayed"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s6", "s2"],
      secondary: ["s3", "s5"],
      lowYield: ["s4"],
    },
    modelAnswer: `Dr Wu's note does not constitute a legally defensible capacity assessment and I must take action before the planned discharge to palliative care proceeds. The note documents no four-domain assessment, specifies no information provided to the patient, contains no confirmation of understanding, includes no documentation of the consequences of refusal, makes no reference to cultural or spiritual values, and offers no confirmation that an interpreter was offered — despite the patient's Greek-born background. For a decision involving refusal of life-sustaining treatment for metastatic cancer, the legal and clinical standard is high and this note does not come close to meeting it.

I will conduct a comprehensive capacity assessment today, with explicit documentation of all four domains: what information Mrs Papageorgiou was given and how it was provided, her demonstrated understanding of her diagnosis and prognosis, her ability to retain the information across the conversation, her ability to weigh the information against her own values and articulate the consequences of refusal, and her communication of a consistent and clear decision. Discharge to palliative care must be paused until this is complete — I will inform the oncology team that the existing documentation does not support discharge on the basis of a valid capacity determination.

Mrs Papageorgiou's Greek cultural background must be explored as part of the assessment — not to challenge her decision or presume that cultural background predicts any particular response, but to ensure that her decision is genuinely her own and understood in the context of her values. Greek cultural traditions may shape her views on dying, family roles in medical decision-making, and the meaning of palliative care, and these are clinically important dimensions of a values-congruent decision. Documentation should confirm whether a professional interpreter was offered and whether Mrs Papageorgiou elected to proceed in English — this is best practice for a capacity assessment involving a life-sustaining treatment refusal, regardless of English fluency.

If the assessment confirms that Mrs Papageorgiou has decision-making capacity — which the clinical picture suggests is likely — her refusal of further chemotherapy is legally and ethically binding, and this must be documented clearly with the reasoning explicit. I will meet with Dr Wu following this assessment to review the documentation standards that apply to capacity assessments for life-sustaining treatment refusals, explaining both what is required and why the stakes of inadequate documentation are particularly high in these circumstances.`,
  },

  // ─── 17. DOCUMENTATION ───────────────────────────────────────────────────
  {
    id: "q17",
    questionNumber: "MEQ-017",
    topic: "documentation",
    difficulty: "consultant",
    title: "GP Calls About Inadequate Discharge Summary",
    candidateRole: "Consultant psychiatrist",
    setting: "Outpatient clinic — following inpatient discharge",
    stem: `You receive a phone call from Dr Sarah Adeyemi, a GP in a suburban practice. She is calling about her patient Reza, a 34-year-old Iranian man who was discharged from your inpatient unit five days ago following a four-week admission for a first episode of schizophrenia. Reza presented to Dr Adeyemi's clinic this morning "looking unwell."

Dr Adeyemi is frustrated and concerned. She tells you: "I received a discharge summary but it doesn't tell me what his diagnosis is — it says 'psychotic disorder under investigation.' It doesn't tell me what medication he was started on or what dose. It doesn't mention that his family told me he's not taking his medication. It doesn't say what the follow-up plan is or who his case manager is. And I have no idea how to reach anyone if he deteriorates. His wife called me this morning saying he was 'acting strangely' again."

You look up the discharge summary in the hospital system. It is a three-paragraph letter, written by the after-hours registrar at 11 pm on the day of discharge. It has no co-sign by a consultant.`,
    totalMarks: 20,
    signals: [
      {
        id: "s1",
        name: "Immediate clinical concern — Reza is 'looking unwell' five days post-discharge",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "Reza presenting to GP looking unwell; wife reporting strange behaviour; possibly not taking medication",
        whyItMatters: "A patient five days post-discharge from a first psychotic episode who is already showing signs of deterioration requires immediate clinical review — not a phone discussion with the GP",
        modelWording: "Reza must be reviewed urgently today — either by the community mental health team or directly. I will arrange this now. The GP call has identified a potential relapse in a vulnerable post-discharge period.",
        keywords: ["urgent", "immediate review", "deteriorating", "relapse", "five days", "unwell", "medication", "not taking"],
      },
      {
        id: "s2",
        name: "Discharge summary is clinically inadequate",
        category: "governance",
        severity: "critical",
        clueInStem: "No diagnosis; no medication details; no follow-up plan; no case manager; no emergency contact",
        whyItMatters: "A discharge summary for a first-episode psychosis patient must include: confirmed diagnosis or working diagnosis with plan, medications with dose/rationale, relapse indicators, safety plan, follow-up appointments, and emergency contact numbers",
        modelWording: "The discharge summary provided to Dr Adeyemi fails minimum standards for a psychiatric discharge letter. It omits diagnosis, medications, follow-up plan, case manager contact, and relapse indicators — all of which are essential.",
        keywords: ["discharge summary", "inadequate", "diagnosis", "medication", "follow-up", "case manager", "emergency contact", "minimum standard"],
      },
      {
        id: "s3",
        name: "No consultant co-signature on discharge summary",
        category: "governance",
        severity: "important",
        clueInStem: "Written by after-hours registrar at 11 pm; no co-sign by consultant",
        whyItMatters: "Discharge summaries — particularly for complex psychiatric cases including first-episode psychosis — should be reviewed and co-signed by a consultant before or immediately after issue",
        modelWording: "A discharge summary written by an after-hours registrar for a first-episode psychosis patient, without consultant review, represents a supervision and governance gap.",
        keywords: ["consultant co-sign", "signature", "reviewed", "consultant review", "registrar", "oversight"],
      },
      {
        id: "s4",
        name: "Medication adherence failure — not captured, no plan",
        category: "risk_self",
        severity: "important",
        clueInStem: "Family says he's not taking medication; not mentioned in summary",
        whyItMatters: "Medication non-adherence in first-episode schizophrenia is the primary driver of relapse and long-term outcome; the discharge plan must address adherence strategies explicitly",
        modelWording: "There is no documentation of medication adherence counselling, strategies for non-adherence, or family education. This omission may have contributed to Reza's current presentation.",
        keywords: ["adherence", "medication", "non-adherence", "relapse", "family education", "take medication"],
      },
      {
        id: "s5",
        name: "Cultural context — first-episode psychosis in an Iranian man",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "34-year-old Iranian man; first episode of schizophrenia",
        whyItMatters: "Cultural explanatory models for psychosis, family dynamics, stigma, and medication attitudes are highly relevant in a first-episode presentation and should be addressed in the discharge letter and community plan",
        modelWording: "The discharge summary and community care plan should include reference to cultural context, family psychoeducation, and cultural explanatory models for Reza's illness — none of this is mentioned.",
        keywords: ["cultural", "iranian", "explanatory model", "family psychoeducation", "stigma", "cultural context", "first episode"],
      },
      {
        id: "s6",
        name: "GP relationship — acknowledge and remediate",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "Dr Adeyemi is frustrated and concerned",
        whyItMatters: "A GP who has not received adequate discharge communication is a patient safety risk; the relationship must be repaired and a better communication process established",
        modelWording: "I will apologise to Dr Adeyemi and take responsibility for the inadequate discharge communication. I will send a comprehensive addendum letter today and establish direct contact information for future emergencies.",
        keywords: ["apologise", "gp", "repair", "communication", "addendum", "responsible", "remedy", "direct contact"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s6"],
      lowYield: ["s5"],
    },
    modelAnswer: `Reza must be reviewed urgently today — not in a scheduled appointment, not by the GP, but by the community mental health team or directly by me. A patient five days post-discharge from a first episode of schizophrenia who is already showing signs of deterioration, whose family reports he is not taking his medication, and whose wife has contacted the GP because he was "acting strangely" is a patient at significant risk of early relapse in the most vulnerable period of his recovery. I will arrange an urgent review now, while I am still on the phone with Dr Adeyemi, and I will ensure she is informed of the outcome.

The discharge summary issued to Dr Adeyemi fails the minimum standard for a psychiatric discharge communication. It contains no confirmed or working diagnosis, no medication details including dose and rationale, no follow-up plan with named contacts, no case manager details, no relapse indicators, no safety plan, and no emergency escalation pathway. A GP managing a patient in the community post-discharge from a first psychotic episode cannot do so safely without this information — and the consequence of this failure is in front of us: a patient who may be relapsing, and a GP who had to make a call to find out who his case manager is. I take responsibility for this failure and will send a comprehensive addendum letter to Dr Adeyemi today.

The discharge summary was written by an after-hours registrar at 11 pm on the day of discharge and was not co-signed by a consultant before issue. For a first-episode psychosis patient — a complex and high-stakes psychiatric presentation — consultant review of the discharge letter is not optional. This represents a supervision and governance gap that must be addressed at the unit level, not managed as an individual failing, and I will raise it at the next governance meeting with a proposal for a mandatory consultant co-sign requirement for complex psychiatric discharge summaries.

Non-adherence to medication in first-episode schizophrenia is the primary driver of early relapse and of long-term outcome, and the family's report that Reza is not taking his medication must be treated as a clinical emergency rather than a concern to be followed up in four weeks. Today's urgent review must specifically address adherence — including the possibility of a depot formulation, family psychoeducation about the importance of medication, and culturally informed discussion of Reza's and his family's explanatory models for his illness, none of which appears to have been addressed in the discharge planning.`,
  },

  // ─── 18. DISCHARGE / REPORT REVIEW ───────────────────────────────────────
  {
    id: "q18",
    questionNumber: "MEQ-018",
    topic: "discharge_review",
    difficulty: "consultant",
    title: "Reviewing a Registrar's Discharge Summary — Forensic Risk Omissions",
    candidateRole: "Consultant forensic psychiatrist",
    setting: "Forensic inpatient unit — co-sign review",
    stem: `You are the consultant forensic psychiatrist. A discharge summary has been placed in your co-sign queue by Dr Michael Tan, a first-year registrar, for a 44-year-old man, Wayne, who is being discharged after a 12-week admission. Wayne has a background of schizophrenia, cannabis and methamphetamine use, a history of violence towards his mother when unwell, and a prior finding of not guilty by reason of mental illness (NGMI) for an assault offence six years ago — he was conditionally discharged from forensic supervision three years ago.

The discharge summary is four paragraphs. It documents: discharge diagnosis (schizophrenia), medication (olanzapine 20 mg), and a single line "risk: reduced during admission." It does not mention Wayne's forensic history, the NGMI finding, his substance use history, or the history of violence towards his mother. It does not document a risk formulation. There is no relapse prevention plan. The only listed contact is a mobile number for "Wayne — please call to arrange follow-up."

Wayne's mother has not been notified. There is no mention of whether a Housing and Accommodation Support Initiative (HASI) or forensic community support has been engaged.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Forensic history absent from discharge summary",
        category: "governance",
        severity: "critical",
        clueInStem: "NGMI finding six years ago; conditional discharge three years ago — absent from summary",
        whyItMatters: "The forensic history is clinically essential in any discharge letter for a forensic patient — receiving clinicians must have this information to calibrate risk appropriately",
        relatedLegal: "Forensic Mental Health Act; conditional discharge obligations; duty to inform treating team",
        modelWording: "The NGMI finding and conditional forensic discharge history are clinically and legally essential inclusions in any discharge documentation for Wayne. Their absence is a serious omission.",
        keywords: ["forensic history", "ngmi", "not guilty by reason", "conditional discharge", "forensic", "history of violence", "absent"],
      },
      {
        id: "s2",
        name: "Risk formulation absent — 'risk: reduced' is not a risk formulation",
        category: "governance",
        severity: "critical",
        clueInStem: "Single line 'risk: reduced during admission' — no formulation",
        whyItMatters: "For a forensic patient with a violence history, 'risk reduced during admission' is not a risk formulation — it describes inpatient behaviour only and does not address dynamic risk factors in the community context",
        modelWording: "A risk formulation must address static, dynamic, and protective factors in the context of Wayne's community environment — his substance use vulnerability, family relationships, housing, and engagement with forensic supports.",
        keywords: ["risk formulation", "static", "dynamic", "protective", "community", "absent", "not a formulation"],
      },
      {
        id: "s3",
        name: "Mother not notified — victim-adjacent person with safety relevance",
        category: "family_carer",
        severity: "critical",
        clueInStem: "History of violence towards his mother; mother not notified",
        whyItMatters: "Wayne's mother is both a carer and a person at risk — she must be notified of his discharge, involved in the safety plan, and offered support",
        relatedLegal: "Public safety obligation; duty of care to identifiable third party at risk",
        modelWording: "Wayne's mother — the identified victim of his previous violence — must be notified of his discharge and included in the safety and relapse prevention plan. This is both a clinical and a public safety obligation.",
        keywords: ["mother", "notified", "victim", "at risk", "public safety", "third party", "notify"],
      },
      {
        id: "s4",
        name: "Follow-up plan is clinically inadequate — 'call Wayne' is not a plan",
        category: "disposition",
        severity: "critical",
        clueInStem: "Only listed contact is 'Wayne — please call to arrange follow-up'",
        whyItMatters: "Leaving follow-up to the patient's initiative is not a clinical follow-up plan — particularly for a forensic patient with schizophrenia and substance use history",
        modelWording: "Follow-up for a forensic patient cannot be contingent on the patient initiating contact. An outpatient appointment, community forensic team contact, and assertive follow-up plan must be confirmed before discharge.",
        keywords: ["follow-up", "community", "outpatient", "forensic community", "assertive", "confirmed", "plan", "not contingent"],
      },
      {
        id: "s5",
        name: "No co-sign until review — do not release this summary",
        category: "governance",
        severity: "critical",
        clueInStem: "Summary in co-sign queue",
        whyItMatters: "This summary must not be released as written. Co-signing a clinically inadequate forensic discharge summary creates medico-legal exposure and patient safety risk",
        modelWording: "I will not co-sign this summary as written. I will return it to Dr Tan with specific required changes before release.",
        keywords: ["co-sign", "not release", "return", "required changes", "must not", "reject", "hold"],
      },
    ],
    priorityOrder: {
      urgent: ["s5", "s1", "s3"],
      secondary: ["s2", "s4"],
      lowYield: [],
    },
    modelAnswer: `I will not co-sign this discharge summary. Releasing it in its current form would result in a forensic patient being discharged into the community without the information his receiving clinicians need to manage his risk appropriately. I will return the summary to Dr Tan with a specific list of required additions and will not co-sign until each element has been addressed.

The omission of the forensic history is the most serious deficit in this document. The finding of not guilty by reason of mental illness six years ago, and the conditional forensic discharge three years ago, are clinically and legally essential inclusions in any discharge letter for Wayne — without them, receiving clinicians have no basis for calibrating the level of community supervision, risk monitoring, or liaison with forensic community services that is appropriate. The discharge summary must include the full forensic history, the substance use history, and a comprehensive risk formulation that addresses static factors including the NGMI finding and history of violence, dynamic factors including current substance use risk and medication adherence, and protective factors including his current mental state and forensic support structures.

Wayne's mother — the identified victim of his previous violence — has not been notified of his discharge. Notification is not optional; it is both a public safety obligation and a clinical responsibility. She is simultaneously a potential carer and a person who remains at elevated risk when Wayne is in the community and unwell, and both dimensions require consideration in the discharge plan. The follow-up plan as written — a single mobile phone number for "Wayne — please call to arrange follow-up" — is not a clinical follow-up plan. Follow-up for a forensic patient cannot be contingent on the patient initiating contact: confirmed outpatient appointments, named forensic community team contacts, and an assertive follow-up protocol must be in place before discharge proceeds.

Once the discharge summary is rewritten to meet the required standard, I will have a direct supervision conversation with Dr Tan to ensure he understands the specific requirements for forensic discharge documentation and the reasons those standards exist. After this case, I will raise with the registrar group the minimum content requirements for forensic discharge summaries, as this gap in Dr Tan's knowledge likely reflects a broader training need rather than an individual failure.`,
  },

  // ─── 19. DISCHARGE / REPORT REVIEW ────────────────────────────────────────
  {
    id: "q19",
    questionNumber: "MEQ-019",
    topic: "discharge_review",
    difficulty: "consultant",
    title: "Reviewing a Perinatal Discharge Summary — Missing Child Safety Elements",
    candidateRole: "Consultant perinatal psychiatrist",
    setting: "Perinatal mental health unit — co-sign queue",
    stem: `A discharge summary for Aisha, a 29-year-old woman, is awaiting your co-signature. Aisha was admitted to the mother-baby unit six weeks ago following a postpartum psychotic episode — her first psychiatric presentation — three weeks after the birth of her daughter Lily. She responded well to olanzapine and is being discharged with her baby.

The discharge summary reads: "Aisha's mental state has significantly improved. She is currently euthymic and has good insight. She is bonding appropriately with Lily. Diagnosis: brief psychotic episode. Plan: continue olanzapine 10 mg. Follow up with perinatal outpatient clinic in 4 weeks. GP to monitor."

It does not: name Lily, document a child safety assessment, mention parenting capacity observations, address medication in breastfeeding, document a relapse prevention plan specific to the perinatal context, address support at home, mention Aisha's partner or family, or include any contingency plan if Aisha deteriorates.

You note that the referral documentation mentions Aisha arrived in Australia from Somalia three years ago, that she has no extended family in Australia, and that her husband "works long hours and was not involved in the admission."`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Child safety assessment absent — Lily not named or assessed",
        category: "child_protection",
        severity: "critical",
        clueInStem: "Lily not named; no child safety assessment; no parenting capacity documentation",
        whyItMatters: "Any discharge from a mother-baby unit requires explicit documentation of the infant's safety assessment, parenting capacity observations, and a child safeguarding plan if needed",
        relatedLegal: "Children and Young Persons Act; mandatory reporting obligations; duty of care to vulnerable infant",
        modelWording: "Lily must be named and a child safety assessment documented. This must include observations of parenting capacity, infant attachment, and an explicit statement about Lily's safety plan in the community.",
        keywords: ["lily", "child", "infant", "safety", "child safety", "parenting capacity", "safeguarding", "name", "not named"],
      },
      {
        id: "s2",
        name: "Relapse in perinatal context — high-risk period not documented",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Postpartum psychosis; no relapse prevention plan for perinatal context",
        whyItMatters: "Postpartum psychosis carries a high relapse risk (up to 50% in subsequent pregnancies and risk of recurrence postpartum) — a perinatal-specific relapse prevention plan is essential",
        modelWording: "Aisha has had postpartum psychosis. A relapse prevention plan must address: early warning signs, crisis escalation pathway, contingency if she deteriorates at home, and specific plan for any future pregnancy.",
        keywords: ["relapse", "postpartum", "perinatal", "early warning", "prevention", "risk postpartum", "future pregnancy", "contingency"],
      },
      {
        id: "s3",
        name: "Medication in breastfeeding not addressed",
        category: "physical_health",
        severity: "critical",
        clueInStem: "Olanzapine 10 mg; baby present; breastfeeding not addressed",
        whyItMatters: "The safety of olanzapine in breastfeeding must be explicitly addressed in the discharge plan — the decision to breastfeed or not, risks, and monitoring are all clinically required",
        modelWording: "The discharge summary does not address olanzapine in the context of breastfeeding. This is an essential clinical discussion that must be documented — including the risk-benefit discussion and any decision made with Aisha.",
        keywords: ["breastfeeding", "olanzapine", "medication", "breastfeed", "infant exposure", "lactation", "breast milk", "risk"],
      },
      {
        id: "s4",
        name: "Social isolation — no family, husband not involved, Somali background",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "No extended family in Australia; husband not involved in admission; arrived from Somalia three years ago",
        whyItMatters: "Aisha is being discharged into social isolation with a newborn, a first psychotic episode, and a husband who was absent throughout admission — this is a high-risk home environment for relapse and for the infant's safety",
        modelWording: "Aisha is being discharged with no Australian family network, a husband who was not involved in care, and a newborn. The home support plan must be explicit — including who will be present, and what happens if she deteriorates when alone with Lily.",
        keywords: ["social isolation", "no family", "husband", "absent", "support", "home", "alone", "network"],
      },
      {
        id: "s5",
        name: "Four-week follow-up is too long for a postpartum psychosis discharge",
        category: "disposition",
        severity: "important",
        clueInStem: "Follow up with perinatal clinic in 4 weeks",
        whyItMatters: "The highest-risk period post-discharge from a postpartum psychotic episode is the first 1-2 weeks; four weeks is too long a gap without community support or clinical contact",
        modelWording: "Follow-up in four weeks is clinically insufficient for a postpartum psychosis discharge. Community perinatal team contact within 48-72 hours, and a clinical review within one week, is the standard of care.",
        keywords: ["four weeks", "too long", "48 hours", "72 hours", "one week", "community", "perinatal", "follow-up"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s3", "s4"],
      secondary: ["s2", "s5"],
      lowYield: [],
    },
    modelAnswer: `I will not co-sign this discharge summary as written. Releasing it in its current form would result in a mother with a history of postpartum psychosis and her newborn infant being discharged into the community without the clinical and child safety information that is essential for safe community management. I will return the summary to the registrar with a specific list of required additions and will not co-sign until each element has been addressed.

Lily must be named in the discharge documentation, and a child safety assessment must be completed and documented before this summary is released. The required content includes: specific observations of Aisha's parenting capacity and infant attachment made during the admission, a clear statement about Lily's safety in the community environment she is returning to, and a child safeguarding plan if indicated. A discharge summary from a mother-baby unit that does not name the infant and contains no child safety assessment does not meet the minimum standard of care for this clinical context.

The olanzapine and breastfeeding decision must be explicitly documented — the risk-benefit discussion that should have occurred with Aisha, any decision she made about whether to breastfeed, and the rationale for the chosen approach must all be in the clinical record. The relapse prevention plan is entirely absent, and for a woman who has experienced postpartum psychosis — a condition with up to fifty per cent recurrence risk in subsequent pregnancies and significant risk of recurrence in the postpartum period — this omission is clinically unacceptable. The plan must address early warning signs, crisis escalation pathways, contingency arrangements if she deteriorates at home when alone with Lily, and specific guidance for any future pregnancy.

Aisha is being discharged with no extended family network in Australia, a husband who was not involved in her admission, and a newborn infant who requires full-time care. The follow-up interval of four weeks is clinically insufficient — the highest-risk period for relapse following postpartum psychosis is the first one to two weeks post-discharge, and community perinatal team contact within forty-eight to seventy-two hours and an outpatient clinical review within one week must replace the four-week appointment. The discharge plan must explicitly address who will be present with Aisha in the early weeks, what the plan is if she is alone with Lily and begins to deteriorate, and what culturally appropriate community supports are available to her as a Somali woman with no family network in Australia.`,
  },

  // ─── 20. MDT CONFLICT & SYSTEMS PRESSURE ─────────────────────────────────
  {
    id: "q20",
    questionNumber: "MEQ-020",
    topic: "mdt_systems",
    difficulty: "consultant",
    title: "ED Physician Wants Psychiatric Patient Discharged — Consultant Disagrees",
    candidateRole: "Consultant psychiatrist on call",
    setting: "Emergency Department",
    stem: `At 2 am you receive a call from Dr Peter Walsh, a senior emergency medicine consultant, who is blunt and irritated. He tells you that a psychiatric patient, Tyra, a 33-year-old woman, has been in the ED for seven hours. Tyra presented with an intentional overdose of her antidepressants (venlafaxine 375 mg — approximately 20 tablets). She has been medically cleared by the ED team. Dr Walsh states: "She's stable now, she says she's fine and wants to go home, she's done this before, and I need the bed. It's a three-hour wait outside."

You have reviewed Tyra's file before calling back. She has had six presentations to this ED in the past 18 months — four of them overdoses. Her last admission was eight weeks ago for a serious attempt. She is not currently linked with any community mental health service. The previous attending consultant noted in her file: "high-frequency attender, consider personality disorder."

Dr Walsh is pressuring you to give "clearance to discharge" over the phone without you attending.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Refuse phone-only clearance — direct assessment required",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Pressuring consultant to give clearance over the phone without attending",
        whyItMatters: "A telephone discharge clearance for a patient with six ED presentations including a serious attempt eight weeks ago is not clinically defensible — direct assessment is required",
        modelWording: "I will not give telephone clearance for this patient. I will attend in person for direct assessment. A phone conversation does not constitute a psychiatric risk assessment.",
        keywords: ["telephone clearance", "phone clearance", "direct assessment", "attend", "in person", "not defensible", "refuse"],
      },
      {
        id: "s2",
        name: "High-frequency attender — pattern recognition, not dismissal",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Six presentations in 18 months; four overdoses; 'done this before'",
        whyItMatters: "Prior suicide attempts are the strongest predictor of completed suicide; high frequency of presentation increases, not decreases, clinical concern",
        modelWording: "Tyra's pattern of six presentations including four overdoses does not make her 'low risk' — it is one of the strongest predictors of eventual completed suicide. Habituation bias must be explicitly resisted.",
        keywords: ["prior attempt", "high frequency", "pattern", "habituation", "not low risk", "strongest predictor", "history"],
      },
      {
        id: "s3",
        name: "No community mental health linkage — a system failure",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "Not currently linked with any community mental health service",
        whyItMatters: "A patient with six ED presentations in 18 months without community mental health linkage represents a system failure — the ED is functioning as the de facto mental health service",
        relatedSystem: "Community mental health referral; case management; ED diversion; GP engagement",
        modelWording: "Tyra has had six presentations without community mental health linkage. Discharge tonight without addressing this system gap will result in a seventh presentation. A care plan with named clinical contacts must be established.",
        keywords: ["community mental health", "linkage", "not connected", "system failure", "no case manager", "ed as default"],
      },
      {
        id: "s4",
        name: "Personality disorder label — stigmatising and clinically incomplete",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "'Consider personality disorder' noted — used to minimise risk",
        whyItMatters: "A personality disorder diagnosis does not reduce suicide risk — patients with BPD have a lifetime suicide completion rate of approximately 10%; the label must not function as a reason to withhold assessment",
        modelWording: "The notation 'consider personality disorder' must not function as a clinical reason to minimise this presentation. Patients with personality disorders remain at significant risk of completed suicide.",
        keywords: ["personality disorder", "bpd", "stigma", "label", "minimise", "not a reason", "10 percent", "lifetime risk"],
      },
      {
        id: "s5",
        name: "Consultant authority — maintaining clinical independence from ED pressure",
        category: "governance",
        severity: "important",
        clueInStem: "ED consultant pressuring for clearance",
        whyItMatters: "A psychiatry consultant must not yield clinical judgment to bed pressure or ED colleague pressure — this decision must be documented as a clinical one, not a negotiated one",
        modelWording: "I will attend in person. I understand the ED is under pressure, and I acknowledge Dr Walsh's concern for his department, but the clinical decision regarding Tyra's safety cannot be made by telephone or under administrative pressure.",
        keywords: ["clinical independence", "pressure", "not yield", "attend", "document", "clinical decision", "professional"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5"],
      lowYield: [],
    },
    modelAnswer: `I will not give telephone clearance for this patient. A telephone authorisation for the discharge of a woman with six emergency department presentations in eighteen months — including four overdoses and a serious attempt only eight weeks ago — is not a clinically defensible process regardless of how medically stable she is now. I will attend in person, and I will tell Dr Walsh this directly and without equivocation. I understand the emergency department is under significant pressure, and I will acknowledge that, but the clinical decision regarding Tyra's safety cannot be made by phone and cannot be made in deference to bed management needs.

Tyra's pattern of high-frequency presentations and multiple overdoses is not a reason to reduce clinical concern — it is one of the strongest predictors of completed suicide available in the clinical literature, and habituation bias in high-frequency presenters is a recognised and documented cause of preventable deaths. The previous attending clinician's notation of "consider personality disorder" must not function as a clinical reason to minimise this presentation or to withhold a full psychiatric assessment. Patients with borderline personality disorder have a lifetime suicide completion rate of approximately ten per cent, and a diagnostic label does not reduce the individual risk assessment obligation.

The absence of community mental health linkage for a patient with six emergency department presentations in eighteen months is a systems failure of the first order. The emergency department has been functioning as the de facto psychiatric service for this patient, and discharging her tonight without addressing this gap will almost certainly result in a seventh presentation, with progressively increasing risk of a fatal attempt. Regardless of tonight's disposition decision, I will ensure that a referral for community mental health case management is initiated and documented before Tyra leaves this department. A system that responds to crisis but does not provide the ongoing care that prevents crisis is not providing adequate psychiatric care.

Once I have conducted a direct assessment, I will document my clinical findings and disposition decision fully, including the process by which this decision was reached. The request for telephone clearance and my refusal of it must both be in the clinical record. If the decision is that Tyra requires admission — voluntary or involuntary — this will be made on clinical grounds and documented as such.`,
  },

  // ─── 21. MDT CONFLICT ─────────────────────────────────────────────────────
  {
    id: "q21",
    questionNumber: "MEQ-021",
    topic: "mdt_systems",
    difficulty: "consultant",
    title: "Nursing Unit Manager Pressuring Premature Discharge",
    candidateRole: "Consultant psychiatrist, inpatient ward",
    setting: "Acute inpatient psychiatric unit — morning meeting",
    stem: `It is Monday morning. During the ward team meeting, the Nursing Unit Manager (NUM), Sandra, announces that there are 22 patients in a 20-bed unit. She states that the hospital has issued a "Code Yellow — Capacity Alert" and that all teams must review patients for discharge by midday. She singles out your patients: "These three need to go — Greg, Nasrin, and William. The registrar cleared Greg on Friday."

You review the three patients:

Greg, 52, admitted following a serious overdose one week ago. Marked improvement documented by the registrar. Currently euthymic, denies SI. No safety plan documented. No community follow-up arranged. No family contact made.

Nasrin, 35, admitted ten days ago for acute psychosis secondary to bipolar I. Still responding to medication. Her mental state is partially settled but she remains thought-disordered and her insight is limited. She has two young children at home and her husband works in a fly-in-fly-out role — he is currently on rotation and unavailable for the next five days.

William, 67, admitted two weeks ago for a severe depressive episode with psychotic features. He has begun to improve on ECT. He is halfway through his ECT course. His wife told the nursing staff last week that she is "afraid to have him home" and cannot manage him alone.

Sandra tells you that if you do not clear these three patients by midday "it will escalate to the Medical Director."`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Clinical authority — beds do not override clinical judgment",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "Code Yellow; NUM telling consultant to discharge three named patients by midday",
        whyItMatters: "A nursing unit manager does not have clinical authority to direct discharge decisions; the consultant's clinical judgment is not subordinate to administrative capacity management",
        modelWording: "I acknowledge the bed pressure and will work collaboratively with the NUM to manage capacity, but discharge decisions for these three patients are clinical decisions made on clinical grounds. I will not discharge any patient who is not clinically safe to leave.",
        keywords: ["clinical authority", "not subordinate", "clinical decision", "beds", "capacity management", "acknowledge", "collaborate"],
      },
      {
        id: "s2",
        name: "Greg — no safety plan, no follow-up: not safe to discharge",
        category: "risk_self",
        severity: "critical",
        clueInStem: "No safety plan; no community follow-up; no family contact; one week post-serious overdose",
        whyItMatters: "Greg is one week post-serious overdose with no safety plan and no follow-up in place — discharging him in this state repeats the documentation failures seen in many post-discharge suicides",
        modelWording: "Greg cannot be safely discharged today. Before discharge he requires a written safety plan, confirmed community follow-up within 48-72 hours, family contact, and a GP letter.",
        keywords: ["greg", "no safety plan", "no follow-up", "one week", "overdose", "not safe", "family contact"],
      },
      {
        id: "s3",
        name: "Nasrin — thought-disordered, limited insight, children unsupervised",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "Thought-disordered; limited insight; two young children; husband away for five days",
        whyItMatters: "Discharge of a thought-disordered mother with limited insight into an unsupervised parenting role constitutes a child safety risk and poses direct risk to Nasrin",
        relatedRisk: "Child safety — two young children in care of a thought-disordered person; risk to Nasrin from limited insight",
        modelWording: "Nasrin cannot be discharged into an unsupported home environment with two young children while thought-disordered and lacking insight. A child safety assessment and support plan is required before any discharge consideration.",
        keywords: ["nasrin", "thought-disordered", "insight", "children", "child safety", "husband away", "unsupported", "not ready"],
      },
      {
        id: "s4",
        name: "William — mid-ECT course; wife unable to cope",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Halfway through ECT course; wife afraid to have him home; cannot manage alone",
        whyItMatters: "Discharging a patient mid-ECT course for a severe psychotic depression, into a home where the carer has expressed she cannot manage, exposes both William and his wife to serious harm",
        modelWording: "William is mid-ECT course for severe psychotic depression. His wife has explicitly told staff she cannot manage him at home. Early discharge would be clinically premature and potentially harmful to both William and his wife.",
        keywords: ["william", "ect", "mid-course", "wife", "cannot cope", "psychotic depression", "premature", "carer"],
      },
      {
        id: "s5",
        name: "Document decision and escalate appropriately",
        category: "governance",
        severity: "important",
        clueInStem: "Sandra threatens Medical Director escalation",
        whyItMatters: "The consultant must document the clinical basis for each decision and escalate through clinical governance channels if required — not yield to administrative pressure",
        modelWording: "I will document the clinical basis for my decisions regarding each patient clearly in their medical records. If this escalates to the Medical Director, I welcome that conversation — clinical safety decisions must be transparent and defensible.",
        keywords: ["document", "medical director", "escalate", "governance", "clinical basis", "transparent", "defensible"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s3", "s2"],
      secondary: ["s4", "s5"],
      lowYield: [],
    },
    modelAnswer: `I acknowledge the Code Yellow and will work actively with the nursing unit manager to facilitate safe discharges from this unit. However, discharge decisions for Greg, Nasrin, and William are clinical decisions that I will make on clinical grounds — the nursing unit manager does not hold clinical authority to direct psychiatric discharge for named patients, and bed pressure is not a clinical indication for discharge. I will engage collaboratively with the NUM to explore every other option for creating capacity on this unit before revisiting the clinical status of these three patients.

Greg cannot be safely discharged today. He is one week post-serious overdose and has no safety plan, no confirmed community follow-up, and no family contact documented. Discharging a patient in this state one week after a serious attempt replicates the documented pattern of post-discharge suicides that follow inadequate discharge planning. Before Greg can be safely discharged, he requires a written collaborative safety plan, a confirmed community mental health appointment within forty-eight hours, contact with and involvement of at least one family member, and a comprehensive GP discharge letter. If these can be completed today, a discharge today becomes clinically possible.

Nasrin cannot be discharged into an unsupervised home environment while she remains thought-disordered and has limited insight. She has two young children at home, and her husband is away on a fly-in-fly-out rotation for the next five days. Discharging a thought-disordered mother with limited insight into sole care of two young children constitutes both a risk to Nasrin and a child safety risk — I will request a formal child safety consultation before any discharge consideration resumes. William cannot be discharged mid-ECT course for a severe depressive episode with psychotic features. His wife has explicitly communicated to nursing staff that she cannot manage him at home — premature discharge into a carer who has expressed she is overwhelmed is clinically unjustifiable and potentially harmful to both William and to her.

I will document the clinical basis for each of these decisions in the respective medical records with clear reasoning. If this escalates to the Medical Director, I welcome that engagement — my decisions are transparent, defensible, and made in the interests of patient safety. I will collaborate with the team to expedite clinically safe discharges for any other patients on the unit who are genuinely ready to leave.`,
  },

  // ─── 22. RURAL & RESOURCE-LIMITED ────────────────────────────────────────
  {
    id: "q22",
    questionNumber: "MEQ-022",
    topic: "rural",
    difficulty: "consultant",
    title: "Videoconference Consultation — Rural Patient, No Inpatient Beds Within 200 km",
    candidateRole: "Consultant psychiatrist, metropolitan hospital, providing telehealth to a rural ED",
    setting: "Rural ED — telehealth consultation",
    stem: `You are a metropolitan-based consultant psychiatrist providing after-hours telehealth to a rural ED 220 km away. At 9 pm you connect to assess Harry, a 58-year-old man who was brought in by his wife after she found a farewell letter and a loaded firearm in his study. Harry is a farmer who has been experiencing financial stress following three successive failed harvests. He has no previous psychiatric history.

The rural ED has one doctor on — a junior ED registrar who completed her intern year 18 months ago. The nearest inpatient psychiatric bed is 220 km away in your city. The rural hospital has no inpatient psychiatric unit. The RFDS (Royal Flying Doctor Service) can transport but has a minimum four-hour wait. The local police have collected the firearm.

Harry is composed and minimising on video — he says the letter was "just a way of processing" and he is "fine now." He and his wife are both well-known community figures. His wife looks distressed and is hovering in the background of the screen.

The ED registrar quietly tells you (off camera) that Harry has been drinking — she estimates significantly — and that the waiting room is becoming overwhelmed with other patients.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Farewell letter and firearms — high-lethality attempt was imminent",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Farewell letter found; loaded firearm in study; farmer with means access",
        whyItMatters: "A farewell letter combined with access to a loaded firearm represents imminent high-lethality suicidal planning; this is a psychiatric emergency regardless of current denial",
        modelWording: "The combination of a written farewell letter and access to a loaded firearm represents documented suicidal planning with lethal means. This is a high-lethality emergency regardless of Harry's current minimisation.",
        keywords: ["farewell letter", "firearm", "loaded", "planning", "lethal means", "imminent", "high lethality", "means access"],
      },
      {
        id: "s2",
        name: "Minimisation in context of alcohol — assessment validity",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Significantly intoxicated; 'just a way of processing' and 'fine now'",
        whyItMatters: "Assessment under significant alcohol intoxication cannot be used to establish psychiatric clearance; Harry's minimisation is clinically unreliable",
        modelWording: "Harry's denial of suicidal intent cannot be taken at face value while significantly intoxicated. The assessment must be repeated when sober. He cannot be discharged tonight.",
        keywords: ["alcohol", "intoxicated", "minimisation", "unreliable", "cannot assess", "not valid", "sober", "denial"],
      },
      {
        id: "s3",
        name: "Rural equity — distance must not determine clinical standard",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "220 km from nearest inpatient bed; no local psychiatric unit",
        whyItMatters: "The absence of local inpatient capacity cannot lower the clinical standard of care; Harry's safety must be protected regardless of geographic barriers",
        relatedSystem: "RFDS transport; rural psychiatric crisis pathway; metropolitan bed access via telehealth; voluntary admission options",
        modelWording: "Harry's geographic location does not lower the clinical obligation to provide safe care. I must initiate RFDS transfer to the metropolitan inpatient unit. The four-hour wait is not a reason to discharge.",
        keywords: ["rural", "distance", "geographic", "equity", "rfds", "transfer", "standard of care", "not lower"],
      },
      {
        id: "s4",
        name: "Firearms — confirm secured, explore other means access",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Police have collected the firearm",
        whyItMatters: "Police collection of the firearm is an important immediate step but Harry, as a farmer, may have access to other firearms, agricultural chemicals, or other lethal means",
        modelWording: "Police collection of the identified firearm is essential and has occurred. However, on a farm there may be additional licensed firearms, agricultural chemicals, and other means. The wife must be asked about all means access.",
        keywords: ["firearms", "secured", "additional firearms", "means", "agricultural", "chemicals", "farm", "other means"],
      },
      {
        id: "s5",
        name: "Wife as collateral — distressed carer, safety planning partner",
        category: "family_carer",
        severity: "important",
        clueInStem: "Wife is distressed, hovering in the background",
        whyItMatters: "Harry's wife is a critical source of collateral and the person most likely to detect deterioration — she must be directly included in the safety planning conversation",
        modelWording: "Harry's wife must be brought into the consultation. She found the letter and the firearm — she has critical information about his behaviour in the preceding days and about means access at the farm.",
        keywords: ["wife", "collateral", "bring in", "include", "safety plan", "partner", "distressed"],
      },
      {
        id: "s6",
        name: "Junior ED registrar — supervision and support",
        category: "governance",
        severity: "important",
        clueInStem: "Rural ED junior registrar; overwhelmed waiting room",
        whyItMatters: "The ED registrar is a junior clinician managing a complex psychiatric crisis with no local psychiatric backup — she requires clear, directive support and should not be left to manage this independently",
        modelWording: "I will give the ED registrar clear, explicit guidance: Harry is not to be discharged; RFDS is to be called now; his wife is to be brought in for collateral. I will remain on the line or available for callback.",
        keywords: ["registrar", "support", "guidance", "directive", "clear instruction", "not alone", "supervision", "rural ed"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s3", "s4"],
      secondary: ["s2", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `Harry is not to be discharged from this emergency department tonight, and I will tell the junior registrar this directly and without ambiguity. The farewell letter and loaded firearm found in his study document suicidal planning with lethal means — this is not an ambiguous clinical presentation, and Harry's current minimisation under significant alcohol intoxication is clinically unreliable and cannot be used to make a safe disposition decision. His description of the letter as "just a way of processing" and his statement that he is "fine now" are assessed in the context of a man who has written a farewell letter and secured a loaded firearm, and that context must take priority over his current verbal account.

Police collection of the identified firearm is an essential and already-completed safety step. However, Harry is a farmer, and on a farm there is a high probability of additional licensed firearms, agricultural chemicals, and other means of lethal self-harm. His wife must be asked specifically and comprehensively about all means access at the property — not just the identified firearm — and this information must be sought with Harry's knowledge or, if he declines to engage, from his wife as collateral. Harry's wife must also be brought directly into the consultation — she found the letter and the firearm, she is the primary collateral source about his behaviour over the preceding days, and she is a critical partner in any safety planning for the period ahead.

Rural geography cannot lower the clinical standard of care, and the four-hour wait for RFDS transport is not a reason to delay initiating the process. I will advise the registrar to contact RFDS now for psychiatric transfer to the metropolitan inpatient unit. The clinical standard that applies to Harry is the same standard that would apply in a metropolitan emergency department — distance does not modify the obligation to provide safe psychiatric care. I will remain available to speak with the RFDS medical officer to confirm the clinical indication for transfer and to support the registrar through that process.

When Harry is sober — which will require reassessment in the morning — a formal risk assessment must occur before any revised disposition decision is made. Tonight's assessment, conducted under significant intoxication, cannot be used to establish psychiatric clearance regardless of its findings. The junior registrar is managing a complex psychiatric emergency with no local psychiatric backup and a waiting room under pressure — I will give her clear, directive guidance, remain available for further contact, and ensure she understands she is not bearing clinical responsibility for this decision alone.`,
  },

  // ─── 23. RURAL ─────────────────────────────────────────────────────────────
  {
    id: "q23",
    questionNumber: "MEQ-023",
    topic: "rural",
    difficulty: "consultant",
    title: "Rural Acute Psychosis — No Beds, No Medication, Cultural Complexity",
    candidateRole: "Consultant psychiatrist providing regional telehealth",
    setting: "Rural community health centre, 300 km from nearest psychiatric facility",
    stem: `You are the regional telehealth psychiatrist. A community health nurse in a remote community calls you at 10 am about Rosa, a 24-year-old Aboriginal woman who has been acutely unwell for five days. Rosa is experiencing persecutory delusions, auditory hallucinations, disorganised behaviour, and has not slept or eaten in two days. She has been found walking on the road at night. Her family have been watching her and have not slept.

Rosa has no previous psychiatric history. Her family believe her illness is the result of "wrong business" — a spiritual explanation with deep cultural meaning in their community. They are frightened and are divided — two family members want her to go to "the city hospital," others want a traditional healer to be involved first. Rosa herself oscillates between moments of lucidity where she pleads not to be sent away, and periods where she is floridly psychotic.

The community health centre has no antipsychotic medication in stock. There is no police presence in the community. The only transport is a community bus driven by a volunteer, which takes four hours to the nearest town. The RFDS is available but for "emergencies only" and the nurse is uncertain if this qualifies. The nearest psychiatric bed is 300 km away.

Rosa's family have told the nurse: "If you take her away she might never come back."`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Acute psychosis with safety risk — this is an emergency",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "Walking on road at night; not sleeping or eating for two days; floridly psychotic",
        whyItMatters: "An acutely psychotic person walking on roads at night with no sleep or food for two days is in immediate danger — this constitutes a medical emergency regardless of resource limitations",
        modelWording: "Rosa's safety is immediately compromised — wandering on roads at night, not eating or sleeping, and floridly psychotic. This is a medical emergency. RFDS activation is justified.",
        keywords: ["immediate safety", "road", "night", "emergency", "acute", "not sleeping", "not eating", "danger", "rfds"],
      },
      {
        id: "s2",
        name: "RFDS — this qualifies as an emergency, nurse must be supported",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "Nurse uncertain if situation qualifies for RFDS; 'emergencies only'",
        whyItMatters: "Acute psychosis with safety risk absolutely qualifies for RFDS activation; the nurse needs the consultant to be unambiguous — equivocation in this context is dangerous",
        modelWording: "I will tell the nurse directly: this is an emergency qualifying for RFDS activation. I will document this and be available to speak with the RFDS medical officer if needed.",
        keywords: ["rfds", "activate", "emergency", "qualifies", "direct", "unambiguous", "support nurse", "rfds medical officer"],
      },
      {
        id: "s3",
        name: "Cultural safety — family's explanation of illness and traditional healing",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "'Wrong business'; family divided; traditional healer",
        whyItMatters: "The family's cultural explanatory model is not a barrier to be overcome — it reflects a legitimate cultural framework; coercive removal without cultural engagement will cause lasting harm to trust and to Rosa",
        relatedCultural: "RANZCP Aboriginal and Torres Strait Islander Mental Health Position Statement; cultural safety in emergency",
        modelWording: "The family's cultural explanation of Rosa's illness must be taken seriously, not dismissed. I will ask the nurse to involve the Aboriginal Health Worker and, if possible, the traditional healer — not instead of medical care, but alongside it where safe.",
        keywords: ["wrong business", "cultural", "traditional healer", "cultural explanatory model", "aboriginal health worker", "not dismissed", "alongside"],
      },
      {
        id: "s4",
        name: "Family's fear of removal — historical context of institutionalisation",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "'If you take her away she might never come back'",
        whyItMatters: "This statement reflects a historically grounded fear of institutionalisation and removal that has no parallel in non-Indigenous contexts — it must be heard and addressed, not dismissed as non-compliance",
        modelWording: "The family's fear that Rosa 'might never come back' is grounded in the lived experience of Aboriginal communities and institutional removal. This must be explicitly acknowledged and the plan for Rosa's return must be part of the conversation.",
        keywords: ["never come back", "historical", "institutionalisation", "removal", "fear", "family", "acknowledge", "return"],
      },
      {
        id: "s5",
        name: "No medication available — advocate for emergency medication access",
        category: "system_pressure",
        severity: "important",
        clueInStem: "No antipsychotic medication in stock at the community health centre",
        whyItMatters: "The absence of antipsychotic medication in a remote community health centre is itself a rural equity failure; the consultant must advocate for emergency supply through the RFDS or another pathway",
        relatedSystem: "Emergency supply; RFDS medication carry; rural formulary gap",
        modelWording: "The absence of antipsychotic medication at the community health centre is a systems failure. I will ask the RFDS to carry emergency medication and advocate to the health service for a review of remote medication formularies.",
        keywords: ["medication", "antipsychotic", "no stock", "rfds carry", "emergency supply", "rural formulary", "advocate"],
      },
      {
        id: "s6",
        name: "Family exhaustion — carer burden; they have not slept",
        category: "family_carer",
        severity: "important",
        clueInStem: "Her family have been watching her and have not slept",
        whyItMatters: "Rosa's family are sleep-deprived, frightened, and divided — their wellbeing is clinically relevant and their capacity to sustain safe observation is limited",
        modelWording: "Rosa's family have not slept and are under extreme stress. Their capacity to safely supervise her for the hours until RFDS arrival must be assessed, and practical support offered where possible.",
        keywords: ["family", "exhausted", "not slept", "carer burden", "capacity to supervise", "support"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s4"],
      secondary: ["s3", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `Rosa is acutely psychotic, has not eaten or slept for two days, and is walking on roads at night — this is a medical emergency, and I will tell the community health nurse this directly and unambiguously. Acute psychosis with immediate physical safety risk absolutely qualifies for RFDS activation, and the nurse must not be left uncertain about this. I will be available to speak with the RFDS medical officer directly to confirm the clinical indication and to support the decision-making process, and I will document my clinical assessment and recommendation clearly so that the nurse has a defensible record of the consultation that led to the RFDS call.

The family's statement that "if you take her away she might never come back" must be heard with the full weight it carries. This is not resistance to treatment, and it is not irrational fear — it is a statement grounded in the lived experience of Aboriginal communities and the historical reality of institutionalisation and removal. It deserves a direct and honest response: an acknowledgment that this history is real, a clear explanation of what will happen if Rosa is transferred, a commitment to communicate with the family throughout the process, and — critically — a plan for Rosa's return to community built into the transfer process from the beginning. The Aboriginal Health Worker must be involved immediately in this conversation and in supporting the family through the period ahead.

The traditional healer's potential involvement should not be excluded or positioned as an obstacle to medical treatment — if the family can arrange contact with a traditional healer, this can proceed alongside emergency medical care rather than instead of it, where it is clinically safe to allow this. Cultural safety in this emergency does not mean delaying necessary medical intervention; it means pursuing that intervention in a way that maintains the family's trust, respects their explanatory models, and does not add to the trauma of the situation.

The absence of antipsychotic medication at this community health centre is a rural equity failure that must be escalated after this episode. I will ask whether the RFDS can carry an emergency antipsychotic dose to administer if the transfer is delayed. Rosa's family have not slept and are under extreme and sustained stress — their capacity to maintain safe observation of Rosa until RFDS arrives must be assessed, and the nurse should offer whatever practical support is possible to sustain their safety supervision in the hours ahead. After this episode, I will raise the medication gap with the regional health service as a matter of clinical advocacy.`,
  },

  // ─── 24. PSYCHOTHERAPY & BOUNDARIES ──────────────────────────────────────
  {
    id: "q24",
    questionNumber: "MEQ-024",
    topic: "psychotherapy",
    difficulty: "consultant",
    title: "Registrar's Patient Develops Erotic Transference — Registrar Has Disclosed Personal Information",
    candidateRole: "Consultant psychiatrist supervising a psychotherapy case",
    setting: "Outpatient clinic — supervision session",
    stem: `You are supervising Dr Ben Carter, a second-year advanced trainee conducting twice-weekly psychodynamic psychotherapy with Annalise, a 31-year-old woman with borderline personality disorder and a history of childhood sexual abuse. Ben presents the case at your monthly supervision meeting.

He tells you that over the past two months Annalise has become increasingly "attached" to him. He notes she sends him messages via the hospital's patient portal outside session times — sometimes late at night — asking if he is "thinking about her." In the last session she told him directly that she was "in love with him" and that she "knew he felt the same way."

When you ask Ben how he responded, he becomes visibly uncomfortable. He tells you that in that session he had disclosed to Annalise that he was "also finding the therapy sessions very meaningful" and that he "looked forward to their sessions." He has not told you this before. He appears anxious and adds: "I'm not sure I can keep seeing her — but I don't want to abandon her either."

You also note that Ben has not documented the last four sessions in the medical record.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Therapist self-disclosure in context of erotic transference — boundary violation",
        category: "governance",
        severity: "critical",
        clueInStem: "Ben disclosed 'finding sessions meaningful' and 'looking forward to sessions' after Annalise declared love",
        whyItMatters: "Reciprocal self-disclosure in response to an erotic transference declaration constitutes a boundary violation — it reinforces the patient's transference, distorts the therapeutic frame, and places both the patient and therapist at risk",
        modelWording: "Ben's self-disclosure in this clinical context constitutes a boundary violation. It was not a technically neutral response — it validated the transference and distorted the therapeutic frame. This must be addressed directly.",
        keywords: ["self-disclosure", "boundary violation", "erotic transference", "frame", "disclosure", "reciprocal", "not neutral"],
      },
      {
        id: "s2",
        name: "Undocumented sessions — four sessions absent from medical record",
        category: "governance",
        severity: "critical",
        clueInStem: "Has not documented the last four sessions in the medical record",
        whyItMatters: "Absent documentation may indicate the sessions were deliberately not recorded — possibly because of the content. This is a medico-legal and professional registration risk",
        relatedLegal: "Medical record keeping obligations; AHPRA professional standards; potential disciplinary risk",
        modelWording: "Four undocumented sessions in the context of an escalating transference and a subsequent disclosure is a serious professional concern. The absence of documentation must be addressed and the clinical content explored.",
        keywords: ["undocumented", "not documented", "four sessions", "record", "absent", "not recorded", "documentation"],
      },
      {
        id: "s3",
        name: "Annalise's safety — BPD, sexual abuse history, attachment disruption",
        category: "risk_self",
        severity: "critical",
        clueInStem: "BPD; history of childhood sexual abuse; intense attachment to therapist",
        whyItMatters: "A woman with BPD and a history of childhood sexual abuse who has developed an intense erotic transference is at significant risk if the therapy is abruptly terminated or if the boundary violation escalates",
        modelWording: "Annalise is clinically vulnerable. The erotic transference in the context of childhood sexual abuse and BPD must be managed carefully to avoid retraumatisation, particularly if the therapeutic relationship is to be transferred.",
        keywords: ["annalise", "bpd", "sexual abuse", "risk", "vulnerable", "safe transfer", "trauma", "retraumatisation"],
      },
      {
        id: "s4",
        name: "Ben's wellbeing and registration — he may require professional support",
        category: "governance",
        severity: "important",
        clueInStem: "Ben is visibly anxious and uncomfortable; this is the first time he has disclosed the self-disclosure",
        whyItMatters: "Ben may be experiencing countertransference that he has not been able to bring to supervision — his concealment of the disclosure and the undocumented sessions suggests he is in distress",
        modelWording: "Ben needs both supervisory and potentially personal support. His concealment of the disclosure suggests shame or fear. This must be approached supportively before it becomes punitive — though the professional obligations must be clearly named.",
        keywords: ["ben", "wellbeing", "countertransference", "concealment", "support", "distress", "supervision", "anxiety"],
      },
      {
        id: "s5",
        name: "Transfer of care — must be managed, not abandonment",
        category: "disposition",
        severity: "important",
        clueInStem: "'I don't want to abandon her either' — Ben is considering ending therapy",
        whyItMatters: "Abrupt termination of a psychotherapy case with a patient who has BPD, childhood sexual abuse, and an unresolved erotic transference constitutes therapeutic abandonment — a carefully managed transfer of care must be planned",
        modelWording: "Annalise cannot be abruptly discharged. A planned transfer of care must be organised — with a senior clinician managing the transition, a clear explanation to Annalise, and appropriate clinical handover.",
        keywords: ["transfer", "not abandon", "planned", "senior", "transition", "handover", "managed", "not abrupt"],
      },
      {
        id: "s6",
        name: "AHPRA notification — professional obligation to consider",
        category: "governance",
        severity: "important",
        clueInStem: "Boundary violation by a supervised trainee",
        whyItMatters: "A boundary violation by a registered medical practitioner may engage mandatory or voluntary reporting obligations; the consultant must consider their own professional obligations",
        relatedLegal: "AHPRA mandatory reporting; Medical Board Code of Conduct",
        modelWording: "As the supervising consultant, I must consider my obligations under AHPRA mandatory reporting. The boundary violation must be documented and the medical defence organisation consulted. This is not a matter to manage solely within supervision.",
        keywords: ["ahpra", "mandatory reporting", "professional obligation", "medical board", "reporting", "register", "mdo", "defence"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s3", "s2"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `Ben's self-disclosure in response to Annalise's declaration of erotic transference is a boundary violation, and I must name this directly in supervision today — supportively and without punitive intent, but with full clarity. Telling a patient who has declared love for her therapist that he is "also finding the sessions very meaningful" and "looks forward to their sessions" is not a technically neutral response and is not consistent with the fundamental requirement of therapist abstinence in the psychodynamic frame. It has validated Annalise's transference, reinforced her expectations, and created clinical risk for both of them. The fact that Ben has not been able to bring this to supervision until now — having withheld it for an unknown period — tells me he is in significant distress and may be experiencing countertransference that has exceeded his capacity to manage within the supervisory frame.

The four undocumented sessions are a serious professional concern that must be explored directly. In the context of an escalating transference and a subsequent disclosure of boundary violation, the absence of documentation may not be coincidental — it may reflect a conscious or unconscious attempt to keep the content of those sessions out of the clinical record. The sessions must be retrospectively documented to the degree possible, and I must explore with Ben what occurred in those sessions and why they were not recorded at the time. The medico-legal and AHPRA registration implications of missing documentation in a psychotherapy case with a vulnerable patient are significant.

My immediate clinical concern is Annalise's safety and welfare. She is clinically vulnerable — a woman with borderline personality disorder and a history of childhood sexual abuse who has formed an intense erotic attachment to her therapist. Ben cannot continue as her treating therapist from this point, but abrupt termination of the therapeutic relationship without a carefully managed transition would constitute therapeutic abandonment and risk re-traumatising her in a way that recapitulates earlier attachment disruptions. A planned transfer of care must be organised, led by a senior clinician, with a clear and honest explanation to Annalise and appropriate clinical handover. The manner of the transition matters as much as the decision to transfer.

As the supervising consultant, I must consider my obligations under the AHPRA mandatory reporting framework. A boundary violation by a registered medical practitioner that may constitute notifiable conduct requires consideration of whether mandatory or voluntary reporting is appropriate, and I will consult with my medical defence organisation before making that determination. This conversation with Ben — and my clinical reasoning — must be documented in detail in my supervision records. Ben's own wellbeing requires attention alongside the professional obligations: he appears to be in distress, and access to personal support through his own treating clinician or the employee assistance programme should be offered.`,
  },

  // ─── 25. PSYCHOTHERAPY ────────────────────────────────────────────────────
  {
    id: "q25",
    questionNumber: "MEQ-025",
    topic: "psychotherapy",
    difficulty: "consultant",
    title: "Patient Discloses Ongoing Childhood Abuse — Mid-Therapy",
    candidateRole: "Consultant psychiatrist conducting psychotherapy",
    setting: "Outpatient psychotherapy session",
    stem: `You are conducting a session with Jade, a 26-year-old woman with complex PTSD who has been in weekly trauma-focused CBT with you for six months. Jade was referred following a disclosure to her GP of childhood sexual abuse by her uncle, which ended when she was 14.

In today's session, Jade becomes very distressed and discloses for the first time that the abuse did not end when she was 14. She tells you her uncle — who lives in the same suburb, is married with three children, and coaches the local junior football team — has been contacting her again over the past six months, "pushing her to meet." She adds: "I think he's doing it to other kids. There's a girl on his team — she's about twelve — who keeps showing up at his house. She told me she was going there to 'help with jobs around the house.'"

Jade is terrified. She tells you: "Please don't tell anyone. I'll lose my family. I promise I will stop seeing you if you tell anyone."`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Mandatory reporting — reasonable suspicion of child at risk",
        category: "child_protection",
        severity: "critical",
        clueInStem: "12-year-old girl attending uncle's home; uncle coaches junior football; contact with Jade ongoing",
        whyItMatters: "The description of a 12-year-old girl attending the home of a known child sexual abuser constitutes a reasonable suspicion of child at risk under mandatory reporting legislation — this is a non-negotiable obligation",
        relatedLegal: "Children and Young Persons Act (jurisdiction-specific); mandatory reporting obligation for registered health practitioners; does not require proof",
        modelWording: "I have a mandatory reporting obligation. The description of a 12-year-old girl attending the home of a person who has disclosed a history of child sexual abuse constitutes reasonable grounds to suspect a child is at risk. I must report to child protective services.",
        keywords: ["mandatory reporting", "mandatory report", "child at risk", "reasonable suspicion", "child protection", "obligation", "report"],
      },
      {
        id: "s2",
        name: "Confidentiality — limits must be explained, therapeutic frame maintained",
        category: "ethics",
        severity: "critical",
        clueInStem: "'Please don't tell anyone. I will stop seeing you if you tell.'",
        whyItMatters: "The limits of confidentiality must be clearly explained — mandatory reporting overrides therapeutic confidentiality; but the way this is managed will determine whether Jade stays in therapy",
        modelWording: "I must be honest with Jade about the limits of confidentiality. I cannot promise confidentiality in this situation. I will explain what I am obligated to do, why, and how I will do it — and I will do everything I can to maintain our therapeutic relationship.",
        keywords: ["confidentiality", "limits", "explain", "honest", "cannot promise", "mandatory", "therapeutic relationship", "honest"],
      },
      {
        id: "s3",
        name: "Jade's safety — ongoing contact from perpetrator",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Uncle has been contacting her again for six months, 'pushing her to meet'",
        whyItMatters: "Jade is being actively pursued by her perpetrator — this is an ongoing safety risk that must be addressed in the safety plan regardless of the child protection report",
        modelWording: "Jade is at ongoing risk from her uncle's contact. We must develop a safety plan addressing how she responds to his contact, who she can call, and what steps to take if he escalates.",
        keywords: ["jade safety", "contact", "perpetrator", "ongoing", "safety plan", "ongoing risk", "uncle"],
      },
      {
        id: "s4",
        name: "Therapeutic rupture — managing the relationship through mandatory action",
        category: "trauma",
        severity: "important",
        clueInStem: "'I will stop seeing you if you tell anyone'",
        whyItMatters: "Jade's threat to leave therapy reflects a trauma response — her experience of disclosure leading to consequence; the therapeutic relationship must be maintained through transparency, not deception",
        modelWording: "Jade's response to disclosure reflects her trauma history — the fear of loss following disclosure. I will name this compassionately, explain my obligations fully, and emphasise that I want to continue working with her through this.",
        keywords: ["therapeutic rupture", "trauma response", "disclosure", "fear", "transparency", "relationship", "continue", "maintain"],
      },
      {
        id: "s5",
        name: "Do not allow Jade to leave without safety acknowledgement",
        category: "immediate_safety",
        severity: "important",
        clueInStem: "Jade is distressed at the end of the session",
        whyItMatters: "Jade has disclosed escalating contact from her abuser and significant distress — she must not leave the session without a safety check and an explicit plan for the next few days",
        modelWording: "Before this session ends I must ensure Jade has a safety plan for the next 24-48 hours — who she can contact, what she does if her uncle contacts her, and a clear plan for our next appointment.",
        keywords: ["safety check", "before leaving", "session end", "next 24 hours", "plan", "next appointment", "do not leave"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5"],
      lowYield: [],
    },
    modelAnswer: `I have a mandatory reporting obligation that cannot be set aside by therapeutic confidentiality, and I must be transparent with Jade about this before this session ends. The description of a twelve-year-old girl making repeated visits to the home of a person who has disclosed a history of child sexual abuse constitutes reasonable grounds to suspect a child is at risk — this is the legal threshold for mandatory reporting under child protection legislation in this jurisdiction, and it does not require proof or certainty. I must report to child protective services.

I will tell Jade honestly what I am obligated to do, why I am obligated to do it, and how I will do it. I will not attempt to manage this by concealment or by deferring the report in the hope that her distress will subside — that approach would be dishonest, would not change my obligations, and would compound the harm to Jade if she discovered that I had withheld action. Her threat to stop seeing me if I tell anyone is understood as a trauma response — the anticipation, grounded in her history, that disclosure leads to loss and to consequences she cannot control. I will name this pattern compassionately and explicitly, making clear that I understand why disclosure feels so dangerous to her, and that I intend to continue working with her through this and beyond it.

Jade is at ongoing personal risk from her uncle's sustained contact over the past six months. His pressure for her to meet with him must be taken seriously as both a re-traumatisation risk and a potential escalation risk, and before this session concludes we must develop a practical safety plan for Jade herself: how she will respond to contact from him, whom she can call, what she will do if he escalates his attempts to reach her. This safety plan is separate from and in addition to the mandatory child protection report — both are required.

Jade must not leave this session without a confirmed next appointment and a safety plan for the next twenty-four to forty-eight hours. She has disclosed something that required significant courage, and the therapeutic relationship — including her willingness to remain in it — must be actively preserved through the transparency and consistency of my response. Whatever she decides about continuing therapy, she must leave this room today knowing that I acted honestly, that I told her what I was doing before I did it, and that her protection was the reason.`,
  },

  // ─── 26. ETHICS & PROFESSIONALISM ────────────────────────────────────────
  {
    id: "q26",
    questionNumber: "MEQ-026",
    topic: "ethics",
    difficulty: "consultant",
    title: "Capacitous Refusal of Life-Saving Treatment — Ethical Dilemma",
    candidateRole: "Consultant psychiatrist — liaison",
    setting: "General medical ward",
    stem: `You are asked to review Arthur, a 71-year-old retired schoolteacher, on the oncology ward. Arthur was diagnosed three months ago with aggressive T-cell lymphoma. He has been told that without a bone marrow transplant (BMT), his prognosis is approximately 6 months. With BMT, there is a 40% five-year survival rate.

Arthur has refused BMT. He was referred to you because the oncology team cannot "understand why someone would say no." Arthur tells you he has thought about this "very carefully" for three months. He says: "I watched my wife die in ICU after a BMT — tubes everywhere, no dignity. I won't do that to myself or to my children. I've had a good life. Six months of quality is better than years of suffering." He gives an articulate account of his diagnosis and prognosis, explains the risks and benefits of both options in accurate detail, and states he wants to spend his remaining time at home, gardening and with his family.

His adult daughter, who is present, is tearful and tells you: "He's depressed — you need to do something. He's not the person he used to be."`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Capacity assessment — formal four-domain evaluation required",
        category: "capacity",
        severity: "critical",
        clueInStem: "Referred because team 'cannot understand' refusal — capacity not formally assessed",
        whyItMatters: "The oncology team's referral based on their inability to understand Arthur's choice implies a potential conflation of 'unwanted decision' with 'impaired capacity' — a formal, rigorous capacity assessment is required",
        modelWording: "A referral framed around the team's inability to understand a patient's choice requires a careful capacity assessment — not to overturn the choice, but to ensure it is genuinely capacitous.",
        keywords: ["capacity assessment", "four domains", "formal", "capacitous", "understanding", "retain", "weigh", "communicate"],
      },
      {
        id: "s2",
        name: "Capacity appears intact — articulate, consistent, values-grounded refusal",
        category: "capacity",
        severity: "critical",
        clueInStem: "Articulate account of diagnosis, prognosis, risks and benefits; consistent over three months; grounded in specific experience",
        whyItMatters: "Arthur's decision appears to meet all four domains of capacity — he understands, retains, applies the information to his own values, and communicates a clear decision; this must be explicitly documented",
        modelWording: "Arthur's refusal of BMT appears to be a capacitous, values-congruent decision made after three months of deliberation. His decision is grounded in a specific lived experience (his wife's death) and is consistent and articulate across all four capacity domains.",
        keywords: ["capacity intact", "capacitous", "values", "consistent", "deliberation", "three months", "articulate", "four domains met"],
      },
      {
        id: "s3",
        name: "Depression — must be assessed, must not be assumed to invalidate refusal",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "Daughter says 'he's depressed'; oncology team cannot 'understand why someone would say no'",
        whyItMatters: "A major depressive episode with nihilistic features could impair capacity — but the presence of sadness or grief in the context of a life-limiting diagnosis does not constitute depression, and depression does not automatically invalidate capacity",
        modelWording: "I will assess Arthur for major depressive disorder. However, adjustment disorder, grief, and appropriate anticipatory sadness do not constitute a depressive illness impairing capacity. Depression must be identified, not assumed.",
        keywords: ["depression", "assess", "major depressive", "not assume", "grief", "adjustment", "does not invalidate", "nihilistic"],
      },
      {
        id: "s4",
        name: "Capacitous refusal is legally and ethically binding",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "If capacity is confirmed, Arthur has the right to refuse BMT",
        whyItMatters: "A capacitous adult has the right to refuse any medical treatment, including life-saving treatment — this is a fundamental principle of medical ethics and law",
        relatedLegal: "Common law right to refuse treatment; Medical Treatment Act; autonomy principle in bioethics",
        modelWording: "If Arthur is found to have capacity — which my assessment suggests — his refusal of BMT is legally and ethically binding. The clinical team's role is to support his decision, not to persuade him to change it.",
        keywords: ["legally binding", "right to refuse", "capacitous", "autonomy", "binding", "cannot override", "legal right"],
      },
      {
        id: "s5",
        name: "Daughter's distress — address compassionately, separately from capacity",
        category: "family_carer",
        severity: "important",
        clueInStem: "Daughter is tearful; attributes refusal to depression",
        whyItMatters: "The daughter's distress is real and deserves acknowledgement — but her wish for her father to have treatment does not override his autonomous capacitous decision",
        modelWording: "Arthur's daughter deserves compassionate acknowledgement of her distress. I will speak with her separately. I will explain what capacity means, and that her father's decision — however painful — is his to make.",
        keywords: ["daughter", "distress", "acknowledge", "separate", "compassionate", "explain capacity", "his decision"],
      },
      {
        id: "s6",
        name: "Team education — unwanted decision ≠ impaired capacity",
        category: "governance",
        severity: "important",
        clueInStem: "'Cannot understand why someone would say no' — team's frame for the referral",
        whyItMatters: "The framing of the referral reveals a common clinical misconception — that refusing a treatment the team recommends implies impaired capacity; this must be explicitly addressed with the oncology team",
        modelWording: "I will provide clear written feedback to the oncology team: an unwanted decision is not evidence of impaired capacity. Arthur's refusal is values-congruent, consistent, and articulate. Capacity assessment findings will be communicated clearly.",
        keywords: ["team education", "unwanted decision", "not evidence", "capacity misconception", "team feedback", "oncology"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `The referral framing — that the oncology team "cannot understand why someone would say no" — suggests a possible conflation of an unwanted clinical decision with impaired capacity, and separating these two concepts is the central task of this consultation. A formal four-domain capacity assessment is required: Arthur's ability to understand accurate information about his diagnosis and the proposed bone marrow transplant, his ability to retain that information, his ability to weigh it against his own values and life experience, and his ability to communicate a clear and consistent decision. An unwanted decision — even a decision that will result in death — is not in itself evidence of impaired capacity.

My assessment indicates that Arthur's refusal appears to be a capacitous, values-congruent decision made after three months of deliberate reflection. He gives an articulate and accurate account of his diagnosis, prognosis, and the risk-benefit profile of both treatment options. His decision is grounded in a specific and lived experience — watching his wife die in intensive care following a bone marrow transplant — and is consistent with explicitly articulated values about dignity, quality of life, and the time he has remaining with his family. This is not a distressed, impulsive, or internally inconsistent account; it is a coherent expression of considered personal values applied to a medical situation Arthur understands clearly.

I will assess Arthur for major depressive disorder, because his daughter's concern and the oncology team's referral appropriately raise this question. However, it is essential to distinguish between grief and appropriate anticipatory sadness in the context of a life-limiting diagnosis — which do not constitute a depressive illness and do not impair capacity — and a clinical major depressive episode with nihilistic features that distorts the ability to weigh long-term consequences. Adjustment disorder and grief are expected responses to Arthur's circumstances and must not be pathologised. If a major depressive episode is identified and treated effectively, a reassessment of capacity is appropriate — but the threshold for this pathway must not be set so low that any expression of sadness in a dying person triggers psychiatric override of their autonomous choices.

If Arthur is found to have capacity — as my assessment suggests — his refusal of bone marrow transplant is legally and ethically binding, and my role becomes one of supporting him to exercise his autonomous choice with dignity and with optimised palliative care. Arthur's daughter deserves compassionate acknowledgement of her distress, spoken with her separately and with honesty about what capacity means and what her father's legal rights are. The oncology team require clear written feedback about the distinction between an unwanted decision and impaired capacity, presented as an educational communication rather than a criticism of the referral.`,
  },

  // ─── 27. ETHICS ─────────────────────────────────────────────────────────────
  {
    id: "q27",
    questionNumber: "MEQ-027",
    topic: "ethics",
    difficulty: "consultant",
    title: "Confidentiality vs Public Safety — Threat to Third Party",
    candidateRole: "Consultant psychiatrist",
    setting: "Outpatient clinic",
    stem: `You are seeing Daniel, a 38-year-old man with a seven-year history of bipolar I disorder, in your outpatient clinic. He was hospitalised twice in the past — once for a manic episode with violent behaviour — and has been stable on lithium for three years. He has been seeing you for four years and the therapeutic relationship is strong.

In today's appointment, Daniel tells you that he found out last week that his employer, Martin, gave a fraudulent reference that cost him a "life-changing" job opportunity. Daniel presents as euthymic — his mental state examination is normal. He tells you: "I have a plan. I've worked it all out. I'm going to wait until Martin is alone — I know where he parks — and I'm going to make sure he never ruins anyone else's life. I've thought about what I'll use."

He adds: "I know I sound crazy. I'm not manic. I'm just — I've never been so certain about anything. And I'm telling you because I trust you. But you can't tell anyone, right? Doctor-patient confidentiality."`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Credible, specific threat to identifiable third party — duty to warn/protect",
        category: "risk_others",
        severity: "critical",
        clueInStem: "Named target; identified location; described plan; expressed certainty and intent",
        whyItMatters: "The threat is specific (named target, known location, planned method, declared intent) — this meets the threshold for a duty to protect or warn under most jurisdictions",
        relatedLegal: "Duty to warn / duty to protect; Tarasoff principles as applied in Australian context; professional obligation to third party",
        modelWording: "Daniel has named a specific target, identified his location, and described a plan — this is a credible, specific threat. I have a professional and potentially legal duty to take protective action.",
        keywords: ["specific threat", "named target", "identifiable", "duty to warn", "duty to protect", "tarasoff", "legal obligation", "credible"],
      },
      {
        id: "s2",
        name: "Confidentiality — explicitly limited in cases of serious threat to others",
        category: "ethics",
        severity: "critical",
        clueInStem: "'Doctor-patient confidentiality' — Daniel believes this prevents disclosure",
        whyItMatters: "Confidentiality is not absolute — it is overridden by a serious, specific, and credible threat to an identifiable third party",
        modelWording: "I must be honest with Daniel. Medical confidentiality is not absolute. When there is a credible, specific threat to a named person, I have an obligation that overrides confidentiality. I will explain this to him directly.",
        keywords: ["confidentiality", "not absolute", "overrides", "limits", "honest", "explain", "specific threat", "named"],
      },
      {
        id: "s3",
        name: "Assess mental state rigorously — euthymia does not exclude risk",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "He says he is 'not manic'; MSE appears normal",
        whyItMatters: "Premeditated violence is not limited to manic or psychotic states — a person with a history of violence who presents with a specific, planned threat in a euthymic state is potentially more dangerous, as they are organised and purposeful",
        modelWording: "Daniel's statement that he is 'not manic' and the absence of frank psychosis does not reduce the risk. Organised, premeditated violence in a euthymic state may represent a higher-lethality risk than impulsive violence in acute psychosis.",
        keywords: ["euthymic", "not manic", "premeditated", "organised", "euthymia does not exclude", "purposeful", "higher risk"],
      },
      {
        id: "s4",
        name: "Immediate action — de-escalate, explore, determine plan",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "'I've thought about what I'll use'; 'never been so certain'",
        whyItMatters: "The degree of planning described is significant — I must explore the plan in detail (what he intends to use, when, and the specificity of the plan) and attempt therapeutic de-escalation",
        modelWording: "I will engage Daniel therapeutically — exploring the grievance, acknowledging the injustice he feels, and directly addressing the plan. I will ask him directly what he has 'worked out' and what he intends to use.",
        keywords: ["de-escalate", "explore", "plan", "what will use", "therapeutic", "engage", "directly address", "grievance"],
      },
      {
        id: "s5",
        name: "Protective action — warn Martin, contact police if imminent",
        category: "governance",
        severity: "critical",
        clueInStem: "Named target; 'I know where he parks'; planned timing",
        whyItMatters: "If de-escalation is unsuccessful and the threat remains credible, I must take protective action — which may include warning Martin directly or contacting police",
        relatedLegal: "Police notification; victim warning; legal basis for breach of confidentiality",
        modelWording: "If therapeutic de-escalation is unsuccessful, I must contact police and potentially warn Martin. I will document my reasoning and consult my medical defence organisation.",
        keywords: ["warn", "police", "contact", "protective action", "martin", "notify", "imminent"],
      },
      {
        id: "s6",
        name: "Therapeutic relationship — transparency before action",
        category: "ethics",
        severity: "important",
        clueInStem: "Strong four-year therapeutic relationship; Daniel disclosed because he trusts the clinician",
        whyItMatters: "The therapeutic relationship is an asset. Before taking external action, I must be transparent with Daniel about what I intend to do and why — this preserves the possibility of future therapeutic engagement",
        modelWording: "Daniel has trusted me with this disclosure. Before I take any external action, I will tell him clearly what I must do and why. This maintains the therapeutic integrity of our relationship even under these circumstances.",
        keywords: ["transparent", "tell daniel", "before action", "therapeutic relationship", "trust", "honesty", "explain"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s3", "s4"],
      secondary: ["s2", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `This is a credible, specific, and imminent threat to a named individual. Daniel has identified his target by name, described the specific location where he plans to act, declared his certainty and intent, and indicated he has already worked out what he will use. This is not an ambiguous or hypothetical statement — it is a plan, and it requires an immediate clinical and professional response that I will not delay.

I will engage Daniel therapeutically within this session, exploring the nature of the grievance he has experienced, acknowledging the injustice and anger he feels about the fraudulent reference, and working directly to understand the plan in detail — what he intends to use, when he intends to act, and how firm his intention is at this moment. Therapeutic de-escalation is both clinically appropriate and ethically required before any external action — Daniel has disclosed this to me because he trusts me, and that trust must be honoured through transparency about my obligations rather than by covert action without his knowledge.

Medical confidentiality is not absolute, and I must be honest with Daniel about this. I will tell him directly that when there is a credible and specific threat to a named individual, my professional obligation overrides the duty of confidentiality — not as a threat or a punishment for what he has disclosed, but as an honest account of how the ethical and legal framework operates. The strength of our four-year therapeutic relationship is an asset here, not a complication — it creates the conditions for an honest conversation about what I must do and why, and it may enable Daniel to agree to voluntary safety measures that reduce the need for external action.

If therapeutic de-escalation within this session does not convincingly resolve the threat — if Daniel remains certain of his intention and committed to his plan — I must contact police and consider whether Martin should be directly warned. I will document my clinical reasoning in full, including the specific content of Daniel's disclosure, the basis for my assessment of the threat as credible and imminent, and the steps I took before making any external contact. I will consult my medical defence organisation about the specific legal framework for duty-to-protect notifications in this jurisdiction before acting, and I will tell Daniel what I intend to do before I do it.`,
  },
];

// ─── Merged question bank ─────────────────────────────────────────────────────
export const QUIZ_STEMS: QuizStem[] = [
  ...ORIGINAL_STEMS,
  ...QA_STEMS,
  ...SUP_STEMS,
  ...DOC_STEMS,
  ...DIS_STEMS,
  ...ED_STEMS,
  ...PER_STEMS,
  ...CAP_STEMS,
  ...GOV_STEMS,
  ...RISK_STEMS,
  ...MDT_STEMS,
  ...PSY_STEMS,
  ...CS_STEMS,
  ...FOR_STEMS,
  ...SU_STEMS,
  ...CA_STEMS,
  ...OA_STEMS,
  ...RU_STEMS,
  ...ETH_STEMS,
  ...CL_STEMS,
  ...FINAL_ELITE_MEQ_BANK,
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
