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
        clueInStem: "The treating physician suspects she has been fasting for religious reasons but is uncertain",
        whyItMatters: "Missing this signal means the candidate has collapsed the differential prematurely and risks applying a psychiatric diagnosis to a presentation rooted in culture, religion, or grief",
        modelWording: "Formulate a differential for Amara's refusal of oral intake that explicitly includes cultural or religious fasting, complicated grief following traumatic bereavement, major depressive episode with psychotic features, PTSD with dissociation, and deliberate self-harm before proceeding to any capacity determination",
        keywords: ["grief", "fasting", "religious", "cultural", "diagnos", "differential", "depression", "ptsd", "trauma", "formul"],
      },
      {
        id: "s2",
        name: "Inadequate interpretation — 16-year-old daughter as sole interpreter",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "communicating through her 16-year-old daughter Fatima, who has been the sole interpreter throughout the admission",
        whyItMatters: "Missing this signal means the candidate has allowed a procedurally invalid assessment to proceed and missed a critical systems failure that renders every clinical contact in this admission legally indefensible",
        relatedLegal: "Capacity assessment conducted without a professional interpreter is procedurally flawed and potentially indefensible",
        modelWording: "Arrange a NAATI-accredited professional interpreter immediately, as use of Amara's 16-year-old daughter as sole interpreter throughout the admission is a critical systems failure that invalidates every clinical contact conducted to date",
        keywords: ["interpret", "language", "naati", "profession", "daughter", "child interpret", "accredit"],
      },
      {
        id: "s3",
        name: "Capacity assessment — procedural requirements not met",
        category: "capacity",
        severity: "critical",
        clueInStem: "The medical team are requesting a capacity assessment and want to know if involuntary treatment with nasogastric feeding can proceed",
        whyItMatters: "Missing this signal means the candidate has failed to identify that any capacity assessment conducted without a professional interpreter is procedurally flawed and legally indefensible",
        relatedLegal: "Guardianship Act; substitute decision-making hierarchy must be clarified if capacity is found lacking",
        modelWording: "Assess capacity formally across all four domains only after a professional interpreter is present, as no valid determination is possible under current circumstances",
        keywords: ["capac", "understand", "retain", "weigh", "communicat", "four", "domains", "decision-mak", "validly", "procedur"],
      },
      {
        id: "s4",
        name: "Complicated grief / traumatic bereavement",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "husband died during boat crossing eighteen months ago",
        whyItMatters: "Missing this signal means the candidate has overlooked the primary psychosocial precipitant and will produce an incomplete diagnostic formulation that misses complicated grief and PTSD",
        modelWording: "Recognise that the traumatic loss of Amara's husband during the boat crossing eighteen months ago is a primary precipitant requiring assessment for complicated grief disorder and PTSD",
        keywords: ["grief", "bereave", "husband", "loss", "complicated grief", "traumatic loss", "widow"],
      },
      {
        id: "s5",
        name: "PTSD — refugee trauma, husband's death, distress with male staff",
        category: "trauma",
        severity: "critical",
        clueInStem: "Amara becomes visibly distressed when male staff enter the room",
        whyItMatters: "Missing this signal means the candidate has not adopted a trauma-informed approach and risks re-traumatising Amara by exposing her to triggers that may indicate prior gender-based violence",
        modelWording: "Identify Amara's marked distress in response to male staff as a potential indicator of gender-based or sexual violence during displacement and implement a trauma-informed, female-led approach to her care immediately",
        keywords: ["ptsd", "trauma", "sexual", "gender", "male staff", "trigger", "trauma-inform", "re-traumatis"],
      },
      {
        id: "s6",
        name: "Risk to life — severe malnutrition and dehydration",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "severe malnutrition and dehydration. She weighs 38 kg",
        whyItMatters: "Missing this signal means the candidate has not established immediate medical safety and risks overlooking life-threatening sequelae of starvation in a 38 kg adult",
        relatedRisk: "Cardiac arrhythmia, refeeding syndrome if feeding is commenced",
        modelWording: "Address Amara's immediate risk to life by ensuring urgent haemodynamic stabilisation and electrolyte correction proceeds in parallel with the psychiatric assessment given her weight of 38 kg and severe malnutrition",
        keywords: ["38 kg", "malnourish", "dehydrat", "weight", "life", "cardiac", "refeeding", "risk to life", "immediate"],
      },
      {
        id: "s7",
        name: "Involuntary nasogastric feeding — legal authority required",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "want to know if involuntary treatment with nasogastric feeding can proceed",
        whyItMatters: "Missing this signal means the candidate has not identified the legal framework required before involuntary treatment can proceed, exposing the team to acting without valid authorisation",
        relatedLegal: "Mental Health Act (jurisdiction-specific); Guardianship Act; Tribunal or Supreme Court order may be required",
        modelWording: "Clarify that involuntary nasogastric feeding requires legal authorisation via a substitute decision-maker under guardianship legislation or a Tribunal order if Amara lacks capacity, and must not proceed if she retains capacity",
        keywords: ["involuntar", "nasogastric", "legal", "authoris", "tribunal", "guardianship", "mha", "mental health act", "substitute decision"],
      },
      {
        id: "s8",
        name: "Right to refuse — autonomous decision if capacity retained",
        category: "consent_refusal",
        severity: "important",
        clueInStem: "refused all oral intake since admission and declined insertion of a nasogastric tube",
        whyItMatters: "Missing this signal means the candidate has not recognised the legal and ethical weight of a capacitous refusal and may recommend unlawful treatment override",
        modelWording: "Recognise that if Amara is found to have decision-making capacity her refusal of oral intake and nasogastric tube is legally binding, even if the consequence is a life-ending outcome",
        keywords: ["right to refuse", "autonomous", "capacitous", "if she has capac", "respect her decision", "legal right"],
      },
      {
        id: "s9",
        name: "Social isolation — no social worker, no formal supports identified",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "The ward social worker has not yet been involved",
        whyItMatters: "Missing this signal means the candidate has not identified a critical systems gap that leaves a socially isolated refugee without the community support and advocacy she urgently requires",
        relatedSystem: "Social work, refugee health services, STARTTS or equivalent, community resettlement services",
        modelWording: "Notify the ward social worker urgently and engage refugee health services and community resettlement supports, as their absence for three days is a critical systems failure for a newly arrived humanitarian refugee",
        keywords: ["social work", "startts", "refugee", "community", "support", "resettlement", "isolation", "social service"],
      },
      {
        id: "s10",
        name: "Cultural and religious context of fasting/refusal — risk of pathologising",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "The treating physician suspects she has been fasting for religious reasons but is uncertain",
        whyItMatters: "Missing this signal means the candidate has pathologised a potential cultural or religious practice without proper inquiry, risking cultural harm and destruction of therapeutic trust",
        modelWording: "Clarify whether Amara's fasting carries cultural or religious significance by engaging a professional interpreter and a cultural liaison worker before any psychiatric diagnosis is applied",
        keywords: ["religious", "cultural", "fasting", "spiritual", "pathologis", "cultural liaison", "cultural safety", "practice"],
      },
      {
        id: "s11",
        name: "Impact on Fatima — child carrying adult burden",
        category: "family_carer",
        severity: "important",
        clueInStem: "her 16-year-old daughter Fatima, who has been the sole interpreter throughout the admission",
        whyItMatters: "Missing this signal means the candidate has not recognised that a 16-year-old is carrying an inappropriate adult burden of interpreting distressing clinical information, placing her at risk of secondary trauma",
        modelWording: "Assess Fatima's wellbeing independently, as her role as sole interpreter for three consecutive days has placed an inappropriate adult burden on a 16-year-old and may warrant a formal young carer assessment",
        keywords: ["fatima", "daughter", "child", "burden", "minor", "young carer", "16", "impact on"],
      },
      {
        id: "s12",
        name: "MDT communication failures — no interpreter, no social work, no formal assessment",
        category: "governance",
        severity: "important",
        clueInStem: "No formal interpreter has been used. The ward social worker has not yet been involved.",
        whyItMatters: "Missing this signal means the candidate has not identified the co-occurrence of multiple systems failures that together constitute a clinical incident requiring formal governance review",
        modelWording: "Document and escalate the co-occurring systems failures as a clinical incident, as no professional interpreter and no social work involvement for three days represents a governance failure requiring immediate remediation",
        keywords: ["system", "governance", "incident", "failure", "escalat", "review", "quality", "mdt", "team"],
      },
      {
        id: "s13",
        name: "Night-time crying, insomnia — unaddressed distress",
        category: "diagnosis_formulation",
        severity: "optional",
        clueInStem: "she cries frequently at night and does not sleep",
        whyItMatters: "Missing this signal means the candidate has not recognised neurovegetative features that require formal mental state assessment and may indicate a depressive or grief disorder",
        modelWording: "Assess Amara's insomnia and nocturnal crying as neurovegetative features consistent with a depressive or grief response that require formal mental state examination before any disposition decision",
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
        clueInStem: "A near-empty bottle of his housemate's oxycodone was found nearby; the housemate reports that sixty tablets were dispensed two days ago",
        whyItMatters: "Missing this signal means the candidate has not established the objective lethality of this attempt, which is foundational to every subsequent risk and disposition decision",
        modelWording: "Identify this as a high-lethality attempt — near-total consumption of approximately sixty oxycodone tablets in a planned, concealed act — and ensure the risk formulation reflects the objective severity",
        keywords: ["lethality", "lethal", "high-risk", "oxycodone", "overdose", "60 tablet", "sixty", "serious", "severe"],
      },
      {
        id: "s2",
        name: "Preparatory behaviours — giving away guitar, not eating, not leaving room",
        category: "risk_self",
        severity: "critical",
        clueInStem: "not eating, not leaving his room, giving away his guitar",
        whyItMatters: "Missing this signal means the candidate has not identified preparatory suicidal behaviour and will underestimate the premeditation behind this attempt",
        modelWording: "Identify giving away his guitar as a preparatory suicidal behaviour indicating premeditation in the two weeks before the attempt, which must be incorporated into the risk formulation",
        keywords: ["prepar", "giving away", "guitar", "possessions", "planned", "premeditat", "warning sign"],
      },
      {
        id: "s3",
        name: "Ongoing suicidal intent — searching lethal opioid doses",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "he was attempting to search 'opioid lethal dose'",
        whyItMatters: "Missing this signal means the candidate has not recognised that suicidal intent is ongoing during this very presentation, making any discharge categorically unsafe",
        modelWording: "Recognise that active searching for 'opioid lethal dose' during this emergency department presentation establishes persistent suicidal intent, making any discharge unsafe regardless of verbal denial",
        keywords: ["search", "lethal dose", "phone", "ongoing", "intent", "active ideation"],
      },
      {
        id: "s4",
        name: "Refusal to engage — hostility, will not discuss the attempt",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "he is hostile and says: 'I know what you're going to do. Just let me go home.' He refuses to discuss what happened",
        whyItMatters: "Missing this signal means the candidate has interpreted refusal to engage as reduced risk rather than recognising it as potential active concealment in the context of a near-lethal attempt",
        relatedLegal: "Mental Health Act criteria for involuntary assessment may be met",
        modelWording: "Recognise that Daniel's refusal to engage does not reduce risk and may reflect active concealment, and consider initiating MHA involuntary assessment criteria given the near-lethal attempt and ongoing searching behaviour",
        keywords: ["refus", "hostile", "won't engage", "not engag", "conceal", "won't disclose", "limit", "mha", "involuntar"],
      },
      {
        id: "s5",
        name: "Occupational loss — dismissal from paramedic role",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "Daniel was sacked from his job as a paramedic last month, following an internal complaint made by a colleague",
        whyItMatters: "Missing this signal means the candidate has not identified the primary precipitating stressor and its specific relevance to suicide risk in the paramedic demographic, including occupational identity loss and shame",
        modelWording: "Identify dismissal from his paramedic role following a complaint as the primary precipitating stressor, recognising that paramedics are a high-risk occupational group where occupational identity loss and shame are established drivers of suicide",
        keywords: ["paramedic", "job", "sacked", "dismissal", "fired", "occup", "work", "career", "identit", "humiliat"],
      },
      {
        id: "s6",
        name: "Occupational exposure to trauma — paramedic with likely vicarious trauma",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "sacked from his job as a paramedic last month",
        whyItMatters: "Missing this signal means the candidate has not incorporated occupational trauma as a diagnostic contributor, leaving PTSD and moral injury unaddressed in the formulation",
        modelWording: "Formulate PTSD and occupational vicarious trauma as diagnostic contributors, given that Daniel's paramedic career will have involved repeated exposure to traumatic incidents at elevated population-level rates",
        keywords: ["vicarious", "paramedic", "occupational trauma", "ptsd", "moral injury", "emergency service", "first responder"],
      },
      {
        id: "s7",
        name: "Access to means — paramedic training provides knowledge of lethal doses",
        category: "risk_self",
        severity: "important",
        clueInStem: "sacked from his job as a paramedic; he was attempting to search 'opioid lethal dose'",
        whyItMatters: "Missing this signal means the candidate has not recognised that clinical knowledge of lethal doses combined with active means-searching substantially elevates the sophistication and lethality of any further attempt",
        modelWording: "Identify Daniel's paramedic training as conferring clinical knowledge of pharmacological lethality that, combined with active dose-searching, substantially elevates the potential lethality of any further attempt",
        keywords: ["access to means", "paramedic knowledge", "knowledge of", "means", "lethality", "expertise"],
      },
      {
        id: "s8",
        name: "Previous self-harm — forearm laceration",
        category: "risk_self",
        severity: "important",
        clueInStem: "two previous ED presentations in the last twelve months — one for a laceration to the forearm",
        whyItMatters: "Missing this signal means the candidate has not incorporated the strongest individual predictor of future suicidal behaviour into the risk formulation",
        modelWording: "Document the prior forearm laceration as confirming deliberate self-harm history, which is one of the strongest predictors of future suicidal behaviour and must be central to the risk formulation",
        keywords: ["previous", "self-harm", "laceration", "forearm", "history of", "prior"],
      },
      {
        id: "s9",
        name: "Alcohol or substance use — previous intoxication presentation",
        category: "substance_use",
        severity: "important",
        clueInStem: "two previous ED presentations in the last twelve months — one for intoxication",
        whyItMatters: "Missing this signal means the candidate has not assessed substance use as a modifiable risk factor that disinhibits suicidal behaviour and warrants targeted treatment",
        modelWording: "Assess the prior intoxication presentation to determine whether Daniel has an alcohol or substance use disorder, treating it as both a modifiable risk factor and a treatment target",
        keywords: ["substance", "alcohol", "intoxication", "drug", "use disorder", "drinking"],
      },
      {
        id: "s10",
        name: "Social isolation — flatmate, no family identified",
        category: "risk_self",
        severity: "important",
        clueInStem: "The flatmate is not aware of any previous psychiatric history; no family has been identified",
        whyItMatters: "Missing this signal means the candidate has not assessed social isolation as a significant risk amplifier and has not explored the limited protective factors available in Daniel's current network",
        modelWording: "Address social isolation as a significant risk amplifier — no family has been identified, and the flatmate's capacity and willingness to support Daniel must be explicitly assessed in any safety plan",
        keywords: ["isolation", "social", "alone", "family", "support", "protective", "flatmate"],
      },
      {
        id: "s11",
        name: "Collateral information — flatmate's account essential",
        category: "collateral",
        severity: "important",
        clueInStem: "Daniel's flatmate tells the ED nurse that Daniel has been acting strangely for the past two weeks",
        whyItMatters: "Missing this signal means the candidate has not secured the only available source of clinical history in a patient who refuses to engage, leaving the assessment without essential information",
        modelWording: "Obtain a full collateral history from Daniel's flatmate as the primary source of clinical information, given that his refusal to engage makes third-party history essential to the risk assessment",
        keywords: ["collateral", "flatmate", "third party", "history from", "witness", "informant"],
      },
      {
        id: "s12",
        name: "MHA criteria — involuntary assessment likely indicated",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "He refuses to discuss what happened; he was attempting to search 'opioid lethal dose'",
        whyItMatters: "Missing this signal means the candidate has not initiated the legal mechanism required to safely contain a patient with ongoing suicidal intent who refuses voluntary assessment",
        relatedLegal: "Mental Health Act (jurisdiction-specific) criteria for involuntary assessment",
        modelWording: "Initiate Mental Health Act involuntary assessment criteria given the near-lethal attempt, persistent intent evidenced by active dose-searching, and Daniel's refusal to engage with voluntary assessment",
        keywords: ["mental health act", "mha", "involuntar", "section", "scheduled", "detained", "admit"],
      },
      {
        id: "s13",
        name: "AHPRA notification — impaired registered health professional",
        category: "governance",
        severity: "important",
        clueInStem: "sacked from his job as a paramedic last month, following an internal complaint made by a colleague",
        whyItMatters: "Missing this signal means the candidate has not considered mandatory reporting obligations that arise when a registered health professional presents with a psychiatric impairment",
        relatedLegal: "Health Practitioner Regulation National Law — mandatory reporting for impaired practitioners",
        modelWording: "Consider whether mandatory AHPRA notification obligations arise, given that Daniel is an AHPRA-regulated paramedic who has presented with a serious psychiatric impairment",
        keywords: ["ahpra", "mandatory report", "health practitioner", "register", "notif", "profession", "report"],
      },
      {
        id: "s14",
        name: "Naloxone reversal — withdrawal risk and pain",
        category: "physical_health",
        severity: "optional",
        clueInStem: "Daniel regains consciousness after naloxone is administered; he is medically stable but drowsy",
        whyItMatters: "Missing this signal means the candidate has not flagged re-narcotisation risk, which requires ongoing medical monitoring and could be misinterpreted as behavioural sedation",
        modelWording: "Monitor Daniel for re-narcotisation given that naloxone's shorter half-life than oxycodone means re-sedation from residual oxycodone is a real and time-sensitive physical risk",
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
        clueInStem: "My baby is not real. Someone has replaced him with a different baby.",
        whyItMatters: "Missing this signal means the candidate has not recognised postpartum psychosis as a psychiatric emergency requiring immediate inpatient admission.",
        modelWording: "Recognise postpartum psychosis as a psychiatric emergency because day-four onset, three days without sleep, delusional infant misidentification and disorganised speech require urgent inpatient admission.",
        keywords: ["postpartum psychosis", "puerperal psychosis", "emergency", "urgent", "acute", "day 4", "psychosis", "psychiatric emergency"],
      },
      {
        id: "s2",
        name: "Risk to infant — infanticide",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "What if I hurt him by accident — I don't trust my hands.",
        whyItMatters: "Missing this signal means the candidate has not identified a specific verbal statement of concern about harming the infant in a patient with active psychosis.",
        relatedRisk: "Infanticide; harm to infant",
        modelWording: "Secure the infant immediately because Priya's statement about not trusting her hands near her baby constitutes a direct expression of harm concern requiring supervised separation.",
        keywords: ["infanticide", "harm to infant", "baby", "hurt", "risk to infant", "child", "hands", "safety of"],
      },
      {
        id: "s3",
        name: "Risk to Priya — maternal suicide",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Has not slept in three days",
        whyItMatters: "Missing this signal means the candidate has not assessed maternal suicide risk in a postpartum psychosis presentation where the rate is approximately five per cent.",
        modelWording: "Assess maternal suicide risk directly because postpartum psychosis carries a five per cent maternal suicide rate that must not be overshadowed by infant safety concerns.",
        keywords: ["maternal suicide", "suicide", "self-harm", "risk to mother", "maternal", "suicide risk"],
      },
      {
        id: "s4",
        name: "Capgras-type delusion — 'baby replaced'",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "My baby is not real. Someone has replaced him with a different baby.",
        whyItMatters: "Missing this signal means the candidate has not identified Capgras-type delusional misidentification of the infant as a specific high-risk feature for infanticide.",
        modelWording: "Formulate the replacement belief as a Capgras-type delusion because delusional misidentification of the infant is a specific infanticide risk factor requiring immediate supervised separation.",
        keywords: ["capgras", "replaced", "delusional", "not real", "misidentif", "delusion about baby"],
      },
      {
        id: "s5",
        name: "Urgent inpatient psychiatric admission — mother-baby unit",
        category: "disposition",
        severity: "critical",
        clueInStem: "She was admitted to the general medical ward three days ago",
        whyItMatters: "Missing this signal means the candidate has not identified admission to a mother-baby unit as the preferred disposition allowing treatment while preserving the attachment relationship.",
        relatedSystem: "Mother-baby unit; if unavailable, adult inpatient with controlled infant access",
        modelWording: "Arrange urgent admission to a mother-baby unit because supervised inpatient treatment preserves the mother-infant relationship while managing psychosis and infant safety.",
        keywords: ["mother-baby unit", "inpatient", "admit", "mbu", "admiss", "hospitalisation"],
      },
      {
        id: "s6",
        name: "Husband minimising — collateral inaccurate, lack of carer insight",
        category: "family_carer",
        severity: "important",
        clueInStem: "She's just tired. All new mothers are like this.",
        whyItMatters: "Missing this signal means the candidate has not addressed the husband's minimisation which may delay treatment consent and create unsafe discharge pressure.",
        modelWording: "Provide urgent psychoeducation to Rajan because his minimisation of postpartum psychosis as normal tiredness may delay consent and create unsafe early discharge pressure.",
        keywords: ["husband", "rajan", "minimis", "dismiss", "psychoeducation", "carer", "family", "insight"],
      },
      {
        id: "s7",
        name: "Family history — mother-in-law's account of a similar episode",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "In our family in India, this happened to my sister-in-law. It was very bad.",
        whyItMatters: "Missing this signal means the candidate has not used family history of a similar episode to support the diagnosis and identify genetic vulnerability.",
        modelWording: "Explore the mother-in-law's account because a family history of what sounds like postpartum psychosis supports the diagnosis and has implications for future pregnancy planning.",
        keywords: ["family history", "mother-in-law", "genetic", "sister-in-law", "family", "heredit", "similar episode"],
      },
      {
        id: "s8",
        name: "Cultural context — South Asian family dynamics, stigma",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "He is an IT consultant who has already returned to work.",
        whyItMatters: "Missing this signal means the candidate has not addressed how cultural expectations around maternal competence and psychiatric stigma may affect engagement with treatment.",
        modelWording: "Address cultural expectations sensitively because South Asian family pressures around maternal performance and psychiatric stigma may affect Priya's disclosure and treatment engagement.",
        keywords: ["cultural", "south asian", "indian", "stigma", "family dynamic", "cultural context", "cultural safety"],
      },
      {
        id: "s9",
        name: "Sleep deprivation as trigger and maintaining factor",
        category: "physical_health",
        severity: "important",
        clueInStem: "Has not slept in three days",
        whyItMatters: "Missing this signal means the candidate has not identified severe sleep deprivation as both a precipitant and maintaining factor requiring immediate pharmacological intervention.",
        modelWording: "Prioritise pharmacological sleep induction immediately because three days without sleep is both a precipitant and perpetuating factor in postpartum psychosis.",
        keywords: ["sleep", "insomnia", "no sleep", "three days", "deprivation", "sedation", "sleep treatment"],
      },
      {
        id: "s10",
        name: "Paranoid ideation — baby monitor surveillance belief",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "She asks you whether the baby monitor is recording everything she says.",
        whyItMatters: "Missing this signal means the candidate has not identified paranoid surveillance beliefs as a second delusional domain confirming multi-domain psychotic illness.",
        modelWording: "Document paranoid ideation about the baby monitor as a second delusional belief confirming multi-domain psychosis beyond the Capgras delusion.",
        keywords: ["paranoid", "paranoia", "monitor", "recording", "surveillance", "second delusion", "persecutory"],
      },
      {
        id: "s11",
        name: "Child protection notification — infant safety in context of acute psychosis",
        category: "child_protection",
        severity: "important",
        clueInStem: "What if I hurt him by accident — I don't trust my hands.",
        whyItMatters: "Missing this signal means the candidate has not considered mandatory child protection notification when a specific verbal harm concern is expressed in the context of active psychosis.",
        relatedLegal: "Child Protection Act (jurisdiction-specific); mandatory reporting obligations",
        modelWording: "Consider mandatory child protection notification because Priya's specific statement about harming the infant in the context of active psychosis meets the reporting threshold in most Australian jurisdictions.",
        keywords: ["child protection", "notification", "mandatory report", "DOCS", "child safety", "child welfare", "notify"],
      },
      {
        id: "s12",
        name: "Breastfeeding — medication compatibility required",
        category: "physical_health",
        severity: "optional",
        clueInStem: "day four of the postnatal ward following the birth of her first child",
        whyItMatters: "Missing this signal means the candidate has not addressed medication compatibility with breastfeeding, which is clinically required when prescribing antipsychotics postnatally",
        modelWording: "Address breastfeeding compatibility when selecting antipsychotic medication by seeking specialist pharmacological advice, as infant exposure through breast milk requires explicit clinical consideration",
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
        clueInStem: "charted haloperidol 50 mg orally instead of 5 mg — the medication nurse noticed the error before administration",
        whyItMatters: "Missing this signal means the candidate has not recognised a notifiable clinical incident requiring immediate formal reporting and patient safety action",
        modelWording: "Report the haloperidol dose error immediately as a serious notifiable clinical incident, as a ten-fold dose of an antipsychotic represents a near-miss with potential for serious patient harm",
        keywords: ["dose error", "medication error", "50mg", "ten fold", "haloperidol", "patient safety", "incident", "near-miss"],
      },
      {
        id: "s2",
        name: "Impaired practitioner — alcohol suspicion",
        category: "governance",
        severity: "critical",
        clueInStem: "twice smelled of alcohol at the morning handover",
        whyItMatters: "Missing this signal means the candidate has not recognised an impaired practitioner situation that must be managed as a patient safety emergency",
        relatedLegal: "Health Practitioner Regulation National Law — mandatory reporting of impairment",
        modelWording: "Treat the observation of alcohol odour on two separate mornings during clinical handover as an impaired practitioner situation requiring immediate patient safety action and escalation",
        keywords: ["alcohol", "impair", "substance", "drunk", "drinking", "smell", "intoxicat", "impaired practitioner"],
      },
      {
        id: "s3",
        name: "Medication room access without documentation — diversion risk",
        category: "governance",
        severity: "critical",
        clueInStem: "observed in the medication room alone yesterday afternoon without a documented clinical reason",
        whyItMatters: "Missing this signal means the candidate has not considered medication diversion as an explanation for unexplained medication room access, which carries immediate patient safety and investigation implications",
        modelWording: "Investigate undocumented medication room access urgently as a potential medication diversion concern, given the context of suspected impairment and denial of substance use",
        keywords: ["medication room", "diversion", "access", "undocumented", "drugs", "self-prescr", "drug access"],
      },
      {
        id: "s4",
        name: "Mandatory AHPRA notification — impaired health practitioner",
        category: "governance",
        severity: "critical",
        clueInStem: "alcohol odour during clinical duties; medication error; unexplained medication room access",
        whyItMatters: "Missing this signal means the candidate has not identified a mandatory AHPRA notification obligation that cannot be overridden by a request for confidentiality",
        relatedLegal: "Health Practitioner Regulation National Law s141 — mandatory notification of impairment",
        modelWording: "Notify AHPRA mandatorily for impairment, as the combination of alcohol odour on two occasions, a serious medication error, and undocumented medication room access almost certainly meets the mandatory reporting threshold under the National Law",
        keywords: ["ahpra", "mandatory", "notif", "report", "national law", "impairment", "must report", "s141", "obligation"],
      },
      {
        id: "s5",
        name: "Confidentiality limits — cannot honour Dr Voss's request",
        category: "governance",
        severity: "critical",
        clueInStem: "She asked you not to tell anyone",
        whyItMatters: "Missing this signal means the candidate has honoured a confidentiality request that cannot lawfully be kept where patient safety and mandatory reporting obligations apply",
        modelWording: "Explain to Dr Voss directly and compassionately that her request for confidentiality cannot be honoured where patient safety is at risk and mandatory reporting obligations apply",
        keywords: ["confidential", "cannot keep", "mandatory report", "override", "patient safety", "disclose", "not promise"],
      },
      {
        id: "s6",
        name: "Dr Voss's mental health — acute life stressor, possible depression",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "her partner left her six weeks ago, taking their two children; she said 'I haven't been managing very well'; tearful",
        whyItMatters: "Missing this signal means the candidate has not addressed Dr Voss's own mental health needs as a parallel and equally serious responsibility alongside the patient safety response",
        modelWording: "Refer Dr Voss to her own treating clinician for mental health support as a separate and parallel track, given that her separation from her partner and children six weeks ago represents a profound acute psychosocial stressor",
        keywords: ["wellbeing", "mental health", "depression", "stress", "support", "eap", "referral", "her own", "voss mental", "colleague welfare"],
      },
      {
        id: "s7",
        name: "Immediate duty of care — remove from unsupervised clinical duties",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "smelled of alcohol; medication error; declining performance over the past month",
        whyItMatters: "Missing this signal means the candidate has allowed an impaired practitioner to continue in unsupervised clinical duties, placing patients on the unit at ongoing risk",
        modelWording: "Remove Dr Voss from unsupervised clinical duties immediately pending investigation, as patients on the unit remain at risk while these safety concerns are unresolved",
        keywords: ["remove", "off duty", "stand down", "unsupervised", "clinical duties", "temporarily", "pending"],
      },
      {
        id: "s8",
        name: "Escalation — clinical director/medical director notification",
        category: "governance",
        severity: "important",
        clueInStem: "supervisor role; multiple serious incidents requiring escalation beyond the supervisory relationship",
        whyItMatters: "Missing this signal means the candidate has attempted to manage an impaired practitioner situation within the supervisory relationship rather than escalating to those with the authority to act",
        modelWording: "Escalate immediately to the medical director and clinical director, as this situation is beyond the scope of a supervisory relationship and requires those with organisational authority and responsibility",
        keywords: ["escalat", "medical director", "clinical director", "senior", "management", "beyond supervision", "senior management"],
      },
      {
        id: "s9",
        name: "Documentation — contemporaneous records of observations",
        category: "governance",
        severity: "important",
        clueInStem: "multiple incidents documented across six weeks requiring contemporaneous records",
        whyItMatters: "Missing this signal means the candidate has not created the contemporaneous records that are essential for any formal process and may be required in regulatory or disciplinary proceedings",
        modelWording: "Document every observed incident contemporaneously with dates, times, witnesses, and the nature of the concern, as this record is essential for any formal process that follows",
        keywords: ["document", "contemporaneous", "record", "written", "notes", "date", "time", "evidence"],
      },
      {
        id: "s10",
        name: "Therapeutic approach — compassionate but clear",
        category: "mdt_conflict",
        severity: "optional",
        clueInStem: "tearful disclosure of separation from partner and children",
        whyItMatters: "Missing this signal means the candidate has either been punitive rather than compassionate, or has been so focused on Dr Voss's distress that the patient safety response has been delayed",
        modelWording: "Acknowledge Dr Voss's distress compassionately while being clear and direct that patient safety obligations cannot be deferred or set aside regardless of personal circumstances",
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
        clueInStem: "He transferred all our savings — $180,000 — to our nephew two months ago; the nephew came to stay for three weeks; George doesn't remember doing it",
        whyItMatters: "Missing this signal means the candidate has not identified probable elder financial abuse, which requires mandatory reporting and urgent legal and safeguarding action",
        relatedLegal: "Adult Safeguarding legislation; police referral may be warranted; Guardianship Tribunal",
        modelWording: "Report the transfer of $180,000 to a nephew by a man with significant cognitive impairment as probable elder financial abuse to adult safeguarding services without delay, given the circumstances strongly suggest financial exploitation",
        keywords: ["financial abuse", "elder abuse", "180,000", "nephew", "transfer", "safeguard", "adult protection", "financial exploit"],
      },
      {
        id: "s2",
        name: "Driving with dementia — immediate road safety risk",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "he still drives to the hardware store 'most days'",
        whyItMatters: "Missing this signal means the candidate has not addressed an immediate public road safety risk from a cognitively impaired driver, including the mandatory reporting obligation to the licensing authority",
        relatedLegal: "Mandatory duty to report to licensing authority in most Australian/NZ jurisdictions",
        modelWording: "Report George's unsafe driving to the relevant licensing authority as a mandatory obligation, and discuss immediate driving cessation with George and Margaret given his MMSE of 19 with confabulation",
        keywords: ["driving", "unsafe", "fitness to drive", "licence", "road safety", "mandatory report", "transport", "motor vehicle", "driving cessation"],
      },
      {
        id: "s3",
        name: "Capacity — for financial decisions, retrospectively impaired",
        category: "capacity",
        severity: "critical",
        clueInStem: "George's MMSE is 19/30 and he cannot recall the transfer of $180,000",
        whyItMatters: "Missing this signal means the candidate has not identified that probable historical incapacity has direct legal implications for challenging or recovering the transferred funds",
        relatedLegal: "Guardianship Act; Power of Attorney legislation; potential role for VCAT/Tribunal",
        modelWording: "Clarify that George's cognitive impairment raises serious doubt about whether he had capacity for the financial transaction, and refer for legal assessment of whether the transfer can be challenged under guardianship or power of attorney legislation",
        keywords: ["capac", "financial decision", "lack capacity", "capacity for", "power of attorney", "tribunal", "vcat", "legal"],
      },
      {
        id: "s4",
        name: "Margaret as possible victim of financial abuse and carer in distress",
        category: "family_carer",
        severity: "critical",
        clueInStem: "Margaret appears anxious and is reluctant to speak in front of George",
        whyItMatters: "Missing this signal means the candidate has not recognised Margaret as a co-victim of the financial abuse whose own wellbeing, financial security, and vulnerability require independent assessment",
        modelWording: "Assess Margaret independently as a potential co-victim of the financial abuse, given that the depletion of $180,000 in joint savings directly affects her financial security and capacity to provide ongoing care",
        keywords: ["margaret", "wife", "carer", "victim", "carer burden", "carer stress", "her needs", "independent", "carer support"],
      },
      {
        id: "s5",
        name: "Falls — physical safety and fall risk assessment",
        category: "physical_health",
        severity: "important",
        clueInStem: "two recent falls",
        whyItMatters: "Missing this signal means the candidate has not addressed a significant physical safety risk in a cognitively impaired older adult who has had two recent falls",
        modelWording: "Arrange formal fall risk assessment, medication review, and occupational therapy home safety evaluation given two recent falls in an 82-year-old with cognitive impairment",
        keywords: ["falls", "fall risk", "injury", "OT", "occupational therapy", "home modification", "physical safety", "fracture"],
      },
      {
        id: "s6",
        name: "Medication management — unsorted medications on bench",
        category: "physical_health",
        severity: "important",
        clueInStem: "several medications are scattered unsorted on the bench",
        whyItMatters: "Missing this signal means the candidate has not identified a medication safety risk that, in a person with dementia, can lead to accidental overdose, missed doses, or serious drug interactions",
        modelWording: "Arrange a pharmacist medication review and dose administration aids immediately, as unsorted medications in a cognitively impaired person's home represents a significant risk of accidental overdose or missed doses",
        keywords: ["medication", "medication management", "dose", "pharmacy", "webster pack", "pill", "unsorted", "medication safety"],
      },
      {
        id: "s7",
        name: "Out-of-date food — nutritional neglect and self-care failure",
        category: "physical_health",
        severity: "important",
        clueInStem: "the house is unkempt, the kitchen contains out-of-date food",
        whyItMatters: "Missing this signal means the candidate has not recognised that basic self-care needs are unmet and the home environment is unsafe, requiring urgent community support",
        modelWording: "Arrange urgent ACAT referral for community support services given that the unkempt home and out-of-date food indicate that George and Margaret are unable to maintain adequate self-care",
        keywords: ["food", "unkempt", "self-care", "neglect", "nutrition", "community support", "home care", "ACAT", "acat", "aged care"],
      },
      {
        id: "s8",
        name: "Dementia diagnosis — formal confirmation and disclosure",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "George's MMSE is 19/30; he is confabulating, disoriented to date, and cannot recall three objects at five minutes",
        whyItMatters: "Missing this signal means the candidate has not initiated the formal diagnostic work-up required to establish aetiology and enable structured disclosure to George and Margaret",
        modelWording: "Arrange formal neuropsychological and neuroimaging work-up to confirm the diagnosis and aetiology of George's moderate dementia, followed by structured diagnosis disclosure to George and Margaret",
        keywords: ["dementia", "diagnosis", "MMSE", "cognitive", "MCI", "alzheimer", "neuropsych", "imaging", "formal diagnosis"],
      },
      {
        id: "s9",
        name: "Mandatory reporting — adult safeguarding and licensing authority",
        category: "governance",
        severity: "important",
        clueInStem: "transfer of $180,000 to nephew; he still drives 'most days'",
        whyItMatters: "Missing this signal means the candidate has not fulfilled two distinct mandatory reporting obligations that each carry independent legal duties",
        modelWording: "Fulfil both mandatory reporting obligations: to adult safeguarding services for the suspected financial abuse, and to the licensing authority for the unsafe driving concern",
        keywords: ["mandatory", "report", "safeguard", "licensing", "duty to report", "obligat"],
      },
      {
        id: "s10",
        name: "EPOA / Enduring Power of Attorney — whether one exists and who holds it",
        category: "capacity",
        severity: "important",
        clueInStem: "George transferred $180,000 to his nephew; his MMSE is 19/30",
        whyItMatters: "Missing this signal means the candidate has not established who currently holds legal authority to manage George's financial affairs, which is directly relevant to the elder abuse response and to future planning",
        modelWording: "Establish whether a valid Enduring Power of Attorney exists and who holds it, as this determines the legal framework for financial and medical decision-making and is directly relevant to challenging the transfer",
        keywords: ["EPOA", "power of attorney", "enduring", "attorney", "legal authority", "who decides", "substitute"],
      },
      {
        id: "s11",
        name: "Collateral from GP and other sources",
        category: "collateral",
        severity: "optional",
        clueInStem: "George was referred by his GP for cognitive decline",
        whyItMatters: "Missing this signal means the candidate has not sought longitudinal clinical information from the GP and other providers that is essential for establishing the cognitive trajectory",
        modelWording: "Obtain collateral from the GP, pharmacist, and other health providers to establish the longitudinal cognitive trajectory and inform the diagnostic formulation and legal proceedings",
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
        clueInStem: "fifty times in the past week via text message, waited outside her workplace on three occasions, and left a note on her car",
        whyItMatters: "Missing this signal means the candidate has not recognised a structured and escalating stalking pattern that constitutes a serious risk to an identified third party",
        modelWording: "Identify Nathan's behaviour as a structured stalking pattern — fifty contacts in one week, surveillance of Lisa's workplace on three occasions, and a threatening written note — constituting a serious and escalating risk to an identified third party",
        keywords: ["stalk", "risk to", "lisa", "victim", "50", "contact", "workplace", "threat", "escalat"],
      },
      {
        id: "s2",
        name: "Implicit threat in the note — 'This will not stand'",
        category: "risk_others",
        severity: "critical",
        clueInStem: "'I know you are with someone else. This will not stand'",
        whyItMatters: "Missing this signal means the candidate has not identified an implicit threat that, in the context of jealousy, stalking, and a violence history, markedly elevates the risk of serious harm to Lisa",
        modelWording: "Identify 'This will not stand' as an implicit threat that, in the context of jealousy, stalking, and a documented history of intimate partner violence, must be interpreted as indicating serious risk of harm to Lisa",
        keywords: ["threat", "implicit", "this will not stand", "note", "threatening", "warning"],
      },
      {
        id: "s3",
        name: "Non-adherence to depot antipsychotic — psychotic relapse risk",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "He reports he stopped his depot antipsychotic two weeks ago because 'it makes my thinking foggy'",
        whyItMatters: "Missing this signal means the candidate has not identified that cessation of depot antipsychotic in a man with paranoid schizophrenia and a violence history is a high-risk clinical event that may directly drive escalation of violence",
        modelWording: "Address cessation of depot antipsychotic two weeks ago as a high-risk clinical event, given that psychotic decompensation in a man with paranoid schizophrenia and a violence history may directly drive escalation of violence towards Lisa",
        keywords: ["depot", "antipsychotic", "non-adherence", "stopped", "medication", "adherence", "relapse", "decompensation"],
      },
      {
        id: "s4",
        name: "History of intimate partner violence — previous assault on partner",
        category: "risk_others",
        severity: "critical",
        clueInStem: "a history of one assault on a previous partner eight years ago, for which he received a community corrections order",
        whyItMatters: "Missing this signal means the candidate has not incorporated the single most important historical predictor of future intimate partner violence into the risk formulation",
        modelWording: "Identify the documented history of intimate partner violence — an assault resulting in a community corrections order — as the single most important historical predictor of future violence in this presentation",
        keywords: ["history", "previous", "assault", "intimate partner", "domestic violence", "prior", "conviction", "corrections"],
      },
      {
        id: "s5",
        name: "Jealousy / morbid jealousy as psychotic driver",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "'I know you are with someone else. This will not stand'",
        whyItMatters: "Missing this signal means the candidate has not identified morbid jealousy as a specific clinical feature associated with a markedly elevated risk of severe violence including homicide",
        modelWording: "Assess Nathan for morbid jealousy, as the content of his note suggests a delusional or overvalued belief about infidelity that carries a specifically elevated risk of severe violence, including homicide",
        keywords: ["morbid jealousy", "othello", "jealousy", "infidelity", "with someone else", "delusional jealousy", "jealous"],
      },
      {
        id: "s6",
        name: "Duty to protect / warn — Lisa's safety",
        category: "risk_others",
        severity: "critical",
        clueInStem: "Lisa has lodged a formal complaint; she has obtained an Intervention Order",
        whyItMatters: "Missing this signal means the candidate has not considered their duty to protect an identified third-party victim, which may require coordination with police or direct warning",
        relatedLegal: "Duty to warn/protect third parties; coordination with police",
        modelWording: "Consider the duty to warn or protect Lisa as the identified third-party victim, coordinating with police as appropriate, given that imminent risk of serious harm to an identifiable person takes precedence over therapeutic confidentiality",
        keywords: ["duty to warn", "duty to protect", "warn", "lisa", "notify police", "third party", "victim", "protect"],
      },
      {
        id: "s7",
        name: "Intervention Order — clinical implications and assessment of its effectiveness",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "Lisa has obtained an Intervention Order (IO)",
        whyItMatters: "Missing this signal means the candidate has assumed the Intervention Order provides adequate protection without assessing Nathan's compliance, which is a known and frequently dangerous error",
        relatedLegal: "Family Violence Protection Act; IO compliance monitoring",
        modelWording: "Recognise that the Intervention Order alone does not constitute adequate risk management and that its protective value depends entirely on Nathan's compliance, which must be directly assessed",
        keywords: ["intervention order", "IO", "AVO", "DVO", "restraining order", "compliance", "protection order"],
      },
      {
        id: "s8",
        name: "Voluntary status — consider involuntary assessment",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "Nathan currently has unsupervised access to his own flat and attends the clinic voluntarily",
        whyItMatters: "Missing this signal means the candidate has not considered involuntary treatment as a response to non-adherence in the context of significant and documented risk to an identified third party",
        modelWording: "Assess whether Mental Health Act criteria for involuntary treatment are met if Nathan declines to recommence his depot, given that non-adherence in the context of significant risk to an identified third party may satisfy the harm-to-others criterion",
        keywords: ["involuntar", "mha", "mental health act", "section", "criteria", "voluntary", "compulsory", "treatment order"],
      },
      {
        id: "s9",
        name: "Structured risk assessment tool",
        category: "risk_others",
        severity: "important",
        clueInStem: "history of assault on a previous partner; current stalking pattern; paranoid schizophrenia",
        whyItMatters: "Missing this signal means the candidate has not used a validated structured assessment to systematically document risk, which is both clinically and medico-legally important in a forensic context",
        modelWording: "Apply a structured professional judgement tool such as the HCR-20 to systematically assess historical, clinical, and risk management factors, both to guide clinical decisions and produce a defensible contemporaneous record",
        keywords: ["HCR-20", "structured risk", "risk assessment tool", "structured professional", "actuarial", "risk tool", "violence risk"],
      },
      {
        id: "s10",
        name: "Minimisation and lack of insight",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "Nathan says the messages were 'just checking she was okay' and he denies any intention to harm Lisa",
        whyItMatters: "Missing this signal means the candidate has accepted Nathan's minimisation at face value rather than recognising it as a risk indicator consistent with poor insight or active concealment of intent",
        modelWording: "Recognise Nathan's characterisation of fifty texts as 'just checking she was okay' as significant minimisation that must not be accepted at face value and may indicate poor insight or active concealment of intent",
        keywords: ["minimis", "insight", "denial", "not accept at face value", "minimising", "lack of insight", "conceal"],
      },
      {
        id: "s11",
        name: "Safety planning — Nathan's accommodation and supervision",
        category: "disposition",
        severity: "important",
        clueInStem: "Nathan currently has unsupervised access to his own flat",
        whyItMatters: "Missing this signal means the candidate has not recognised that Nathan's unsupervised living situation is inadequate given the risk level and has not proposed appropriate safety monitoring",
        modelWording: "Address Nathan's unsupervised living situation as inadequate given the current risk level, and consider increased contact frequency, closer monitoring, or inpatient admission as components of the safety plan",
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
        clueInStem: "removed from his mother's care at age 5 following chronic neglect and exposure to severe domestic violence; his biological father was incarcerated when Tyler was 6",
        whyItMatters: "Missing this signal means the candidate has applied a behavioural or conduct label to a presentation rooted in complex developmental trauma, perpetuating diagnostic harm and denying appropriate therapeutic care",
        modelWording: "Formulate Tyler's presentation through a complex developmental trauma framework — chronic neglect, domestic violence exposure, parental loss, and nine placement changes — rather than applying a conduct disorder or behavioural label",
        keywords: ["trauma", "complex", "developmental", "attachment", "neglect", "domestic violence", "not conduct", "trauma-inform"],
      },
      {
        id: "s2",
        name: "Placement change as precipitant — attachment rupture trigger",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "the window was broken when Tyler was told he would be moving to a new placement 'next week'",
        whyItMatters: "Missing this signal means the candidate has not identified the unambiguous precipitant and has framed Tyler's crisis as random aggression rather than an attachment rupture response",
        modelWording: "Identify notification of the ninth placement change as the unambiguous precipitant of an acute attachment rupture response, not a behavioural incident, and ensure the clinical formulation reflects this distinction",
        keywords: ["placement", "precipitant", "trigger", "ninth", "attachment rupture", "moving", "placement change"],
      },
      {
        id: "s3",
        name: "Polypharmacy — three medications of uncertain indication",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "he is currently prescribed quetiapine 150 mg nocte, methylphenidate long-acting 54 mg morning, and sodium valproate 400 mg twice daily — all commenced at previous placements",
        whyItMatters: "Missing this signal means the candidate has not identified a serious prescribing governance concern that requires urgent medication reconciliation and diagnostic review",
        relatedSystem: "Clinical governance; prescribing review; medication reconciliation",
        modelWording: "Arrange an urgent comprehensive medication review with diagnostic clarification, as three psychotropic medications of uncertain current indication commenced across multiple placements without accessible records represents a serious governance concern",
        keywords: ["polypharmacy", "three medication", "quetiapine", "methylphenidate", "valproate", "medication review", "indication", "no records"],
      },
      {
        id: "s4",
        name: "Unexplained bruising — safeguarding concern",
        category: "child_protection",
        severity: "critical",
        clueInStem: "you note bruising on Tyler's forearm",
        whyItMatters: "Missing this signal means the candidate has not initiated a safeguarding assessment for unexplained bruising in a child in out-of-home care, which is a mandatory reporting trigger",
        relatedLegal: "Child Protection Act; mandatory reporting obligations",
        modelWording: "Assess the unexplained forearm bruising immediately through a child safeguarding framework — its origin must be established before discharge and a mandatory report may be required",
        keywords: ["bruising", "bruise", "safeguard", "child protection", "mandatory report", "unexplained", "physical"],
      },
      {
        id: "s5",
        name: "Risk assessment — threat to self",
        category: "risk_self",
        severity: "critical",
        clueInStem: "he threatened to hurt himself",
        whyItMatters: "Missing this signal means the candidate has not conducted a direct risk assessment for suicidal ideation in a young person who has explicitly threatened to hurt himself in the context of cumulative trauma and placement instability",
        modelWording: "Assess Tyler's threat to hurt himself through a direct, developmentally appropriate risk assessment that explicitly explores suicidal ideation in the context of cumulative trauma and the acute despair of another placement change",
        keywords: ["risk", "self-harm", "suicidal", "hurt himself", "threat", "risk assessment", "ideation"],
      },
      {
        id: "s6",
        name: "Aboriginal cultural identity and cultural dislocation",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "Tyler is a 14-year-old Aboriginal boy who has had no contact with extended family",
        whyItMatters: "Missing this signal means the candidate has not identified a failure of the Aboriginal Child Placement Principle or recognised that cultural disconnection is a significant and modifiable mental health risk factor for Tyler",
        relatedCultural: "Aboriginal Child Placement Principle; kinship care; cultural connection",
        modelWording: "Recognise Tyler's cultural disconnection from extended family and Aboriginal community as both a safeguarding failure — the Aboriginal Child Placement Principle should have been applied — and a significant mental health risk factor",
        keywords: ["aboriginal", "cultural", "kinship", "placement principle", "cultural identity", "community", "extended family", "cultural dislocation"],
      },
      {
        id: "s7",
        name: "Inadequate carer — inexperienced casual worker cannot access records",
        category: "system_pressure",
        severity: "important",
        clueInStem: "the residential carer is a 22-year-old casual worker on her third shift who cannot access Tyler's previous mental health records",
        whyItMatters: "Missing this signal means the candidate has not escalated the systemic failure of placing a complex young person in the care of an inexperienced casual worker without access to his clinical history",
        relatedSystem: "Out-of-home care system; therapeutic residential care; continuity of care records",
        modelWording: "Escalate the systemic failures — an inexperienced casual carer without access to clinical records for a young person of extreme complexity — to child protection services and the agency responsible for Tyler's placement",
        keywords: ["carer", "casual", "inexperienced", "no records", "systemic", "escalat", "third shift", "out-of-home care"],
      },
      {
        id: "s8",
        name: "Consent for treatment — state as guardian",
        category: "capacity",
        severity: "important",
        clueInStem: "Tyler was removed from his mother's care at age 5 and is currently in state care",
        whyItMatters: "Missing this signal means the candidate has attempted to obtain consent from a residential carer who does not have legal authority to provide it for a child in state care",
        relatedLegal: "Child Protection Act; statutory guardian for child in state care; consent for medical treatment",
        modelWording: "Obtain consent for psychiatric assessment and treatment from the statutory guardian, as Tyler is in state care and the residential carer does not have legal authority to provide medical consent on his behalf",
        keywords: ["consent", "guardian", "state care", "statutory", "authority", "parental responsibility", "guardian consent"],
      },
      {
        id: "s9",
        name: "Diagnostic formulation — differential to ADHD and bipolar",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "he is prescribed methylphenidate long-acting 54 mg and sodium valproate 400 mg — all commenced at previous placements without available records",
        whyItMatters: "Missing this signal means the candidate has not questioned whether the current medications reflect misattribution of trauma symptoms to ADHD and bipolar disorder, which is a common diagnostic error in this population",
        modelWording: "Evaluate whether the current medications reflect trauma-related misattribution to ADHD and bipolar disorder, as this is a well-recognised diagnostic error in children with complex developmental trauma",
        keywords: ["ADHD", "bipolar", "differential", "misdiagnosis", "trauma-related", "re-evaluate", "diagnostic uncertainty", "mood disorder"],
      },
      {
        id: "s10",
        name: "School attendance — educational needs and functional impairment",
        category: "diagnosis_formulation",
        severity: "optional",
        clueInStem: "He attends school irregularly",
        whyItMatters: "Missing this signal means the candidate has not addressed school disengagement as both a marker of functional impairment and a loss of a key protective factor",
        modelWording: "Address irregular school attendance as both a marker of functional impairment and the absence of a key protective factor that warrants targeted intervention as part of Tyler's comprehensive care plan",
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
        clueInStem: "He has received all depot injections on time and has had no further hospital admissions",
        whyItMatters: "Missing this signal means the candidate has not applied the least restrictive principle genuinely and has defaulted to continuation of compulsion without the required clinical analysis",
        relatedLegal: "Mental Health Act — least restrictive principle; criteria for CTO continuation",
        modelWording: "Apply the least restrictive principle genuinely by considering whether compulsion remains necessary, given 18 months of consistent depot adherence, no admissions, and meaningful community functioning",
        keywords: ["least restrictive", "necessity", "cto necessary", "continuation", "criteria", "still needed", "review criteria", "proportionate"],
      },
      {
        id: "s2",
        name: "Marcus's insight and autonomy — requests voluntary treatment",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "Marcus says: 'I'm doing well. The medication helps but it also makes me feel stiff and tired. I want to come off the CTO — I understand I need to keep taking the medication'",
        whyItMatters: "Missing this signal means the candidate has not recognised that demonstrated insight and voluntary agreement substantially weakens both the ethical and legal basis for compulsion",
        modelWording: "Recognise that Marcus's demonstrated insight and voluntary agreement to continue his medication substantially weakens the legal and ethical basis for compulsion and supports allowing the CTO to lapse",
        keywords: ["insight", "autonomous", "voluntary", "agrees to medic", "understands", "self-directed", "voluntary treatment", "own decision"],
      },
      {
        id: "s3",
        name: "EPSE — stiffness and fatigue are legitimate side effect concerns",
        category: "physical_health",
        severity: "critical",
        clueInStem: "'The medication helps but it also makes me feel stiff and tired'",
        whyItMatters: "Missing this signal means the candidate has dismissed legitimate medication side effects rather than addressing them as a clinical obligation that directly affects adherence and quality of life",
        modelWording: "Assess stiffness and fatigue formally with an AIMS examination and dose review, as these are recognised extrapyramidal side effects of paliperidone depot requiring a clinical response, not dismissal",
        keywords: ["EPSE", "extrapyramidal", "stiffness", "fatigue", "side effect", "AIMS", "dose review", "paliperidone"],
      },
      {
        id: "s4",
        name: "Functional recovery — work, family, community engagement",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "He works three days per week at a bookshop, has reconnected with his family, and has been attending a weekly recovery group",
        whyItMatters: "Missing this signal means the candidate has not incorporated functional recovery as clinically meaningful evidence of sustained wellness that supports the case for CTO discontinuation",
        modelWording: "Recognise Marcus's meaningful functional recovery — part-time employment, family reconnection, and community group participation — as clinically significant indicators of sustained wellness that support CTO discontinuation",
        keywords: ["functional", "recovery", "employment", "work", "family", "community", "recovery group", "social"],
      },
      {
        id: "s5",
        name: "Relapse risk assessment — what was the original episode like?",
        category: "risk_self",
        severity: "important",
        clueInStem: "He was placed on a CTO eighteen months ago following an acute psychotic episode during which he became acutely agitated and damaged property; he has no history of violence to persons",
        whyItMatters: "Missing this signal means the candidate has not reviewed the original episode to calculate individual relapse risk, which is essential before a CTO discontinuation decision",
        modelWording: "Review the original episode in detail — precipitants, severity, prodromal features, and prior history — to inform the individual relapse risk calculation before making a CTO discontinuation decision",
        keywords: ["relapse risk", "original episode", "previous psychosis", "precipitant", "prodrome", "risk of relapse", "episode review"],
      },
      {
        id: "s6",
        name: "Mother's anxiety — triangulation and family dynamics",
        category: "family_carer",
        severity: "important",
        clueInStem: "Marcus's mother contacts you separately before the appointment to express concern: 'He says he's better but I'm terrified of what happens if he goes off the order'",
        whyItMatters: "Missing this signal means the candidate has allowed parental anxiety and triangulation to inappropriately influence a clinical and legal decision that belongs to Marcus as an adult",
        modelWording: "Acknowledge the mother's concern but ensure parental anxiety does not override Marcus's clinical and legal rights, redirecting her to family psychoeducation rather than allowing triangulation to drive the CTO decision",
        keywords: ["mother", "family", "triangulation", "separate contact", "anxiety", "family dynamics", "carer concern", "family meeting"],
      },
      {
        id: "s7",
        name: "Advance care planning — if CTO lapses",
        category: "disposition",
        severity: "important",
        clueInStem: "The CTO is due to expire in six weeks",
        whyItMatters: "Missing this signal means the candidate has not developed the collaborative advance care plan that is essential before a CTO lapses, leaving Marcus without an agreed relapse prevention framework",
        modelWording: "Co-develop a detailed advance care plan with Marcus before the CTO lapses, covering agreed early warning signs, relapse prevention strategies, and a clear escalation pathway if those signs emerge",
        keywords: ["advance care", "relapse prevention", "early warning", "plan", "if relapse", "safety plan", "prodrome plan"],
      },
      {
        id: "s8",
        name: "Evidence for CTO — contested and population-level",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "The CTO is due to expire in six weeks and Marcus is requesting it not be renewed",
        whyItMatters: "Missing this signal means the candidate has relied on population-level CTO evidence rather than applying individual patient factors as the primary basis for this decision",
        modelWording: "Base the CTO decision on Marcus's individual circumstances, insight, and adherence pattern rather than equivocal population-level evidence about whether CTOs prevent relapse",
        keywords: ["evidence", "CTO evidence", "research", "equivocal", "contested", "population", "individual", "evidence base"],
      },
      {
        id: "s9",
        name: "Paliperidone long-term risks — tardive dyskinesia",
        category: "physical_health",
        severity: "optional",
        clueInStem: "prescribed paliperidone depot 100 mg monthly for eighteen months; reports stiffness and fatigue",
        whyItMatters: "Missing this signal means the candidate has not addressed tardive dyskinesia risk in the context of long-term depot antipsychotic use, which is required for valid ongoing informed consent",
        modelWording: "Address tardive dyskinesia risk in the informed consent conversation for continued paliperidone depot, ensuring Marcus understands both the benefits and the long-term risks of ongoing treatment",
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
        clueInStem: "The neurologist asks: does Sandra have capacity to refuse this treatment?",
        whyItMatters: "Missing this signal means the candidate has conflated an unwanted refusal with impaired capacity and failed to conduct the formal assessment required before any clinical or legal response",
        relatedLegal: "Mental Capacity Act principles; treating physician's duty to assess capacity before overriding refusal",
        modelWording: "Assess capacity formally across all four domains — understanding, retaining, weighing, and communicating a decision — recognising that Sandra's refusal appearing unwise does not in itself constitute evidence of impaired capacity",
        keywords: ["capac", "four domain", "understand", "retain", "weigh", "communicate", "formal assessment", "capacity assessment"],
      },
      {
        id: "s2",
        name: "Right to refuse if capacity intact — even life-altering consequences",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "Sandra says: 'I've done my research. Steroids make everything worse in the long run. My MS is my body — I can read it better than any scan can'",
        whyItMatters: "Missing this signal means the candidate has not recognised the legal bindingness of a capacitous refusal and may recommend treatment override that is unlawful",
        modelWording: "Recognise that if Sandra retains capacity, her refusal of methylprednisolone is legally binding even if it may result in permanent disability, and redirect the clinical team to supporting her values and goals of care",
        keywords: ["right to refuse", "legally binding", "capacitous refusal", "respect decision", "if she has capacity", "binding"],
      },
      {
        id: "s3",
        name: "Grief reaction — friend's death from MS as precipitant",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "her best friend died of MS — they were diagnosed at the same time; she has been low since March",
        whyItMatters: "Missing this signal means the candidate has not identified a profound existential precipitant that may be generating hopelessness and catastrophic attribution about Sandra's own illness trajectory",
        modelWording: "Recognise that the death of Sandra's best friend from MS is a profound existential precipitant that may be generating hopelessness and catastrophic attribution about her own trajectory that requires explicit clinical attention",
        keywords: ["grief", "friend died", "loss", "bereave", "MS friend", "same diagnosis", "existential", "survivor guilt", "hopeless"],
      },
      {
        id: "s4",
        name: "Depression — likely major depressive episode",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "she has been crying at night, refusing meals on two occasions, and becoming increasingly withdrawn; she has been low since March",
        whyItMatters: "Missing this signal means the candidate has not identified a major depressive episode that may be impairing capacity through hopelessness and must be assessed and treated as an independent clinical priority",
        modelWording: "Identify Sandra's nocturnal crying, meal refusal, social withdrawal, and persistent low mood as consistent with a major depressive episode that may be impairing capacity through hopelessness and requires independent treatment",
        keywords: ["depression", "major depressive", "MDE", "crying", "withdrawn", "refusing meal", "neurovegetat", "mood disorder"],
      },
      {
        id: "s5",
        name: "MS and depression — high comorbidity, organic contribution",
        category: "physical_health",
        severity: "important",
        clueInStem: "diagnosed with multiple sclerosis eight years ago; her MRI shows new lesions and she has developed new left-sided weakness",
        whyItMatters: "Missing this signal means the candidate has not identified the neuropsychiatric and organic contributions to Sandra's mood that arise from both the MS disease process and interferon treatment",
        modelWording: "Formulate the organic neuropsychiatric contributions to Sandra's depression, given that MS complicates mood in up to 50% of cases and new lesions may have direct neuropsychiatric effects alongside the psychological response to her friend's death",
        keywords: ["MS depression", "comorbidity", "neuropsychiatric", "organic", "multiple sclerosis", "interferon", "fifty percent"],
      },
      {
        id: "s6",
        name: "Interferon-beta — associated with depression and flu-like symptoms",
        category: "physical_health",
        severity: "important",
        clueInStem: "She has been treated with interferon beta-1a",
        whyItMatters: "Missing this signal means the candidate has not considered an iatrogenic contribution to Sandra's depression that may be both modifiable and directly relevant to the capacity assessment",
        modelWording: "Identify interferon beta-1a as a medication associated with depression and mood symptoms that may be contributing iatrogenically to Sandra's presentation and review with the neurology team",
        keywords: ["interferon", "interferon beta", "medication-induced", "iatrogenic", "depression", "interferon depression"],
      },
      {
        id: "s7",
        name: "Husband's distress — carer burden and collateral",
        category: "family_carer",
        severity: "important",
        clueInStem: "Sandra's husband is present and visibly distressed; he tells you privately that she has been low since March",
        whyItMatters: "Missing this signal means the candidate has not secured essential collateral history from the husband or addressed a visibly distressed carer who is in need of support in his own right",
        modelWording: "Obtain collateral history from Sandra's husband as the key informant for the clinical timeline, while also acknowledging his visible distress and ensuring he receives appropriate support as a carer",
        keywords: ["husband", "collateral", "carer", "distressed", "family", "support", "carer burden"],
      },
      {
        id: "s8",
        name: "Clarifying Sandra's values and goals — not just her decision",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "Sandra says: 'My MS is my body — I can read it better than any scan can'",
        whyItMatters: "Missing this signal means the candidate has engaged with the binary decision rather than exploring the values, fears, and bodily autonomy underlying Sandra's refusal, which is clinically and ethically essential",
        modelWording: "Explore the values and fears underlying Sandra's refusal — including what she fears about steroids and what she means by knowing her body better than any scan — before any ethical or legal pathway is pursued",
        keywords: ["values", "goals of care", "behind the refusal", "fears", "explore", "what does she want", "bodily autonomy", "understand her perspective"],
      },
      {
        id: "s9",
        name: "Depression impairing capacity — nuanced interaction",
        category: "capacity",
        severity: "important",
        clueInStem: "Sandra has been crying at night, refusing meals, and becoming increasingly withdrawn since her friend died of MS in March",
        whyItMatters: "Missing this signal means the candidate has not recognised that depression may be impairing Sandra's capacity through hopelessness, and that treating the depression may restore capacity and change her decision",
        modelWording: "Assess whether Sandra's depression is impairing her capacity through hopelessness, recognising that if it is, treating the depression may restore capacity and may change her decision about methylprednisolone",
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
        clueInStem: "she is ten weeks pregnant and her urine drug screen today is positive for benzodiazepines; she has been taking her neighbour's diazepam for the past three weeks",
        whyItMatters: "Missing this signal means the candidate has not addressed first-trimester benzodiazepine exposure as an immediate foetal safety concern requiring urgent obstetric referral",
        modelWording: "Address illicit benzodiazepine use at 10 weeks gestation as an immediate foetal risk by arranging urgent obstetric referral to manage first-trimester teratogenicity, NAS risk, and interaction with methadone",
        keywords: ["benzodiazepine", "pregnancy", "foetal", "teratogenic", "first trimester", "diazepam", "obstetric", "neonatal", "unborn"],
      },
      {
        id: "s2",
        name: "Methadone in pregnancy — dose review and obstetric coordination",
        category: "physical_health",
        severity: "critical",
        clueInStem: "Leanne has been on methadone 80 mg daily for two years and is ten weeks pregnant",
        whyItMatters: "Missing this signal means the candidate has not recognised that methadone pharmacokinetics change across pregnancy and that OST must continue with dose review, as cessation is more dangerous than continuation",
        modelWording: "Arrange urgent obstetric referral and perinatal drug and alcohol service coordination, given that methadone pharmacokinetics change significantly across pregnancy and dose review throughout gestation is essential",
        keywords: ["methadone", "pregnancy", "dose review", "obstetric", "pharmacokinetic", "perinatal", "OST", "opioid substitution"],
      },
      {
        id: "s3",
        name: "Child protection notification — previous CP order, current pregnancy",
        category: "child_protection",
        severity: "critical",
        clueInStem: "She has an older child — a 4-year-old son who lives with her mother following a child protection order three years ago; she is currently pregnant and using illicit benzodiazepines",
        whyItMatters: "Missing this signal means the candidate has not identified the threshold for mandatory notification to child protection services regarding the unborn child",
        relatedLegal: "Child Protection Act — unborn child notification; mandatory reporting if risk to unborn",
        modelWording: "Notify child protection services regarding the unborn child, as the combination of a previous child protection order, illicit benzodiazepine use in pregnancy, and a partner with daily alcohol use meets the mandatory notification threshold in most jurisdictions",
        keywords: ["child protection", "mandatory report", "notification", "unborn", "previous order", "CP order", "DOCS", "welfare", "notify"],
      },
      {
        id: "s4",
        name: "Delayed disclosure — fear of losing child drives concealment",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "she says she stopped telling about her pregnancy earlier 'because I was worried you'd take the baby'",
        whyItMatters: "Missing this signal means the candidate has not addressed the therapeutic rupture caused by fear of punitive clinical response, which drove a 10-week delay in disclosure and threatens treatment engagement",
        modelWording: "Address Leanne's fear of losing her child directly, as it drove a 10-week delay in disclosure and represents a critical engagement issue that requires explicit affirmation of the non-punitive purpose of clinical services",
        keywords: ["fear", "concealment", "delayed disclosure", "worried", "take the baby", "engagement", "punitive", "therapeutic alliance"],
      },
      {
        id: "s5",
        name: "Neonatal abstinence syndrome — planning required",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "Leanne has been on methadone 80 mg daily and is ten weeks pregnant",
        whyItMatters: "Missing this signal means the candidate has not initiated antenatal NAS planning, leaving the neonatal team unprepared for a high-risk delivery",
        modelWording: "Arrange antenatal NAS planning with the neonatal team, including monitoring protocols, NICU readiness, and parenting support structures, given that the infant is at significant risk of neonatal abstinence syndrome",
        keywords: ["NAS", "neonatal abstinence", "neonate", "withdrawal", "infant", "baby", "neonatal", "paediatric", "NICU"],
      },
      {
        id: "s6",
        name: "Partner's daily alcohol use — domestic risk and child safety",
        category: "risk_vulnerable",
        severity: "important",
        clueInStem: "her partner Dean 'drinks every day'",
        whyItMatters: "Missing this signal means the candidate has not assessed Dean's daily alcohol use as a risk factor for domestic violence and impaired parenting capacity, which are directly relevant to the infant's safety",
        modelWording: "Assess Dean's daily alcohol use for domestic violence risk and parenting capacity implications, given that both are directly relevant to the safety of the unborn child and to Leanne's recovery",
        keywords: ["partner", "dean", "alcohol", "drinks every day", "domestic", "violence", "risk", "parenting capacity"],
      },
      {
        id: "s7",
        name: "Anxiety about pregnancy — assess for anxiety disorder",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "she has been taking her neighbour's diazepam 'for anxiety about the pregnancy' for the past three weeks",
        whyItMatters: "Missing this signal means the candidate has not identified an untreated anxiety disorder that is driving illicit benzodiazepine use in pregnancy and requires evidence-based management",
        modelWording: "Assess and treat Leanne's anxiety disorder formally with evidence-based approaches safe in pregnancy, as self-medication with illicit diazepam indicates an untreated condition that will otherwise continue to drive illicit drug use",
        keywords: ["anxiety", "anxiety disorder", "self-medic", "treat anxiety", "CBT", "anxiety management", "untreated"],
      },
      {
        id: "s8",
        name: "Leanne's motivation — parenting goal as a therapeutic lever",
        category: "disposition",
        severity: "important",
        clueInStem: "she says: 'I want to do this right this time. I want to keep this baby'",
        whyItMatters: "Missing this signal means the candidate has not recognised and leveraged Leanne's powerful therapeutic motivation, which is the strongest asset available for sustained engagement with a complex multi-agency care plan",
        modelWording: "Affirm Leanne's desire to parent this child explicitly and use it as the primary therapeutic lever for building the alliance and sustained engagement with the complex care plan ahead",
        keywords: ["motivat", "want to keep", "therapeutic lever", "engagement", "parenting goal", "affirm", "positive", "motivation to parent"],
      },
      {
        id: "s9",
        name: "4-year-old with grandmother — relationship and contact assessment",
        category: "family_carer",
        severity: "important",
        clueInStem: "she has an older child — a 4-year-old son who lives with her mother following a child protection order three years ago",
        whyItMatters: "Missing this signal means the candidate has not incorporated the previous CP order and its impact on Leanne's parenting history into the current clinical and safeguarding picture",
        modelWording: "Assess the relationship with Leanne's 4-year-old, the previous CP order, and the grandmother's role as essential context for understanding her current parenting capacity and the family environment into which this infant will be born",
        keywords: ["older child", "son", "grandmother", "4-year-old", "previous", "contact", "CP order", "family context"],
      },
      {
        id: "s10",
        name: "Multidisciplinary perinatal team — obstetrics, D&A, social work, paediatrics",
        category: "system_pressure",
        severity: "important",
        clueInStem: "OST in pregnancy with illicit benzodiazepine use, a previous child protection order, and a high-risk partner",
        whyItMatters: "Missing this signal means the candidate has attempted single-clinician management of a complexity that requires a coordinated multidisciplinary perinatal team",
        modelWording: "Coordinate a perinatal multidisciplinary team case conference involving obstetrics, specialist perinatal drug and alcohol service, social work, neonatology, and child protection, as single-clinician management of this complexity is insufficient",
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
        clueInStem: "Marcus explicitly denies suicidal ideation; the ED registrar has completed a brief risk screening tool which is scored 'low'",
        whyItMatters: "Missing this signal means the candidate has accepted a screening tool score and verbal denial as sufficient grounds for discharge in a presentation with extreme contextual risk",
        modelWording: "Recognise that Marcus's explicit denial of suicidal ideation cannot be accepted at face value in the context of acute psychosocial collapse, and that a screening tool score does not replace clinical formulation",
        keywords: ["denial", "explicit denial", "context", "formul", "screening tool", "false negative", "clinical judgment", "not sufficient"],
      },
      {
        id: "s2",
        name: "Unaccounted temazepam — means access",
        category: "risk_self",
        severity: "critical",
        clueInStem: "his GP records show a recent consultation at which he collected a script for 100 tablets of temazepam — he cannot account for the whereabouts of these tablets",
        whyItMatters: "Missing this signal means the candidate has not addressed the whereabouts of 100 temazepam tablets, which is an immediate and non-negotiable means restriction task before any disposition decision",
        relatedRisk: "100 temazepam tablets represents a potentially lethal quantity; overdose is a common method in male mid-life suicides",
        modelWording: "Establish the whereabouts of 100 temazepam tablets as an immediate means restriction priority before any other disposition decision, as their unaccounted location in this context is a serious lethal means concern",
        keywords: ["temazepam", "tablet", "means", "lethal", "accounted", "medication", "means restriction", "safe storage"],
      },
      {
        id: "s3",
        name: "Acute psychosocial collapse — multiple concurrent losses",
        category: "risk_self",
        severity: "critical",
        clueInStem: "separated from his wife six weeks ago following his disclosure of a second extramarital affair; resigned from his job as a secondary school principal two weeks ago; his 17-year-old son has refused contact",
        whyItMatters: "Missing this signal means the candidate has not identified the catastrophic concurrent psychosocial collapse that is a well-recognised precursor constellation for high-lethality suicide in middle-aged men",
        modelWording: "Identify the acute psychosocial collapse — marital separation, career termination, and rupture with his son within six weeks — as a well-recognised precursor constellation for high-lethality suicide in middle-aged men",
        keywords: ["loss", "separation", "job", "career", "son", "psychosocial", "concurrent", "multiple loss", "identity"],
      },
      {
        id: "s4",
        name: "Three-day isolation — possible planning behaviour",
        category: "risk_self",
        severity: "critical",
        clueInStem: "his neighbour called 000 because he had not been seen for three days",
        whyItMatters: "Missing this signal means the candidate has accepted Marcus's explanation of 'needing time alone' rather than interpreting three days of unexplained isolation as a potential indicator of suicidal planning",
        modelWording: "Interpret three days of unexplained isolation requiring a welfare check as a potential indicator of suicidal planning or intent, not benign self-directed time, given the acute psychosocial collapse context",
        keywords: ["isolation", "three days", "welfare check", "planning", "uncharacteristic", "not seen"],
      },
      {
        id: "s5",
        name: "Alcohol — undisclosed, clinical note conflicts with denial",
        category: "substance_use",
        severity: "important",
        clueInStem: "He denies alcohol use but there is a faint smell of alcohol noted by the ED nurse",
        whyItMatters: "Missing this signal means the candidate has not challenged the discrepancy between Marcus's denial of alcohol use and the nurse's observation, which represents covert use that substantially elevates immediate risk",
        modelWording: "Address the discrepancy between Marcus's denial of alcohol use and the nurse's observation of alcohol odour directly, as covert alcohol use in the context of acute loss and lethal means access significantly elevates immediate risk",
        keywords: ["alcohol", "smell", "deny", "covert", "substance", "disinhibit"],
      },
      {
        id: "s6",
        name: "Registrar supervision — inadequate risk assessment",
        category: "governance",
        severity: "important",
        clueInStem: "the ED registrar has completed a brief risk screening tool which is scored 'low' and has phoned to ask if Marcus can be discharged",
        whyItMatters: "Missing this signal means the candidate has delegated a high-stakes risk judgment to a screening tool score and a junior registrar rather than attending in person for direct assessment",
        modelWording: "Attend in person for direct consultant assessment rather than authorising discharge by telephone, as reliance on a screening tool score for this presentation is a supervision and governance failure",
        keywords: ["registrar", "screening tool", "phone", "supervision", "consultant assessment", "non-delegable", "direct assessment"],
      },
      {
        id: "s7",
        name: "Shame and concealment — public identity, private collapse",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "resigned from his job as a secondary school principal two weeks ago",
        whyItMatters: "Missing this signal means the candidate has not identified shame and public identity loss as independent suicide risk factors that make Marcus less likely to disclose intent even in direct clinical interview",
        modelWording: "Recognise that public identity loss, career termination, and the shame of disclosing two extramarital affairs create a shame-based suicide risk that specifically makes Marcus less likely to disclose suicidal intent even in direct clinical interview",
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
        clueInStem: "Kevin was found dead on Saturday night; his wife was not contacted before discharge and was 'shocked' when he arrived home on Friday",
        whyItMatters: "Missing this signal means the candidate has not initiated the immediate obligation to contact the family with honesty and compassion, which is the first priority after a patient death",
        relatedLegal: "Open Disclosure standard (Australian Commission on Safety and Quality in Health Care); potential coronial inquiry; civil liability",
        modelWording: "Contact Kevin's wife urgently with open disclosure led by a senior clinician, including an honest account of what occurred, sincere condolences, and a clear explanation of the review process that will follow",
        keywords: ["open disclosure", "family", "wife", "contact", "honest", "disclosure", "condolence", "senior"],
      },
      {
        id: "s2",
        name: "Critical incident reporting — mandatory notification",
        category: "governance",
        severity: "critical",
        clueInStem: "Kevin was discharged on Friday afternoon and found dead on Saturday night after hanging himself in the garage",
        whyItMatters: "Missing this signal means the candidate has not recognised the mandatory notification obligations and the requirement to immediately preserve the clinical record pending review",
        relatedLegal: "Coroners Act — death of a person in care or recently discharged from a health service is likely reportable; mandatory incident reporting obligations",
        modelWording: "Notify hospital executive, the patient safety and quality unit, and the coroner's office as mandatory obligations, and preserve the clinical record immediately pending the formal review",
        keywords: ["incident", "reportable", "mandatory", "coroner", "coronial", "executive", "notify", "report"],
      },
      {
        id: "s3",
        name: "Documentation failure — registrar's discharge note is clinically inadequate",
        category: "governance",
        severity: "critical",
        clueInStem: "the risk assessment section is a single line: 'SI denied. Agreed to follow up with GP.' There is no safety plan, no collateral contact, no next-of-kin notification, and no consultant review",
        whyItMatters: "Missing this signal means the candidate has not identified the documentation failures that constitute both a governance breach and significant medico-legal exposure for the registrar and the unit",
        relatedLegal: "Medico-legal exposure for the registrar and the unit; potential finding of institutional negligence",
        modelWording: "Document that the registrar's discharge note is clinically and medico-legally inadequate — a single-line risk assessment with absent safety plan, collateral contact, GP notification, and consultant review is not defensible",
        keywords: ["documentation", "inadequate", "safety plan", "collateral", "gp notification", "consultant review", "discharge note", "single line"],
      },
      {
        id: "s4",
        name: "Nurse's escalation was not acted on — safety reporting culture",
        category: "governance",
        severity: "critical",
        clueInStem: "a junior nurse who was on shift Friday tells you she had raised concerns to the registrar about Kevin's flat affect and early discharge",
        whyItMatters: "Missing this signal means the candidate has not identified the failure to act on a nursing escalation as a clinically significant systems failure that must be part of the incident investigation",
        relatedSystem: "Speaking Up for Safety; closed-loop escalation policy; after-action support for distressed staff member",
        modelWording: "Document the nursing escalation as clinically significant — flat affect in a patient recovering from a serious attempt is a recognised risk indicator — and include the failure to act on it as a core component of the incident investigation",
        keywords: ["nurse", "escalation", "speaking up", "flat affect", "not acted", "safety culture", "concern raised"],
      },
      {
        id: "s5",
        name: "Staff wellbeing — critical incident debriefing",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "Staff are distressed",
        whyItMatters: "Missing this signal means the candidate has not arranged structured staff support after a patient death, leaving clinicians exposed to secondary trauma without the debriefing they require",
        modelWording: "Organise a structured staff debriefing led by an independent facilitator, ensuring staff are explicitly supported and encouraged to raise concerns through the review process rather than discouraged from doing so",
        keywords: ["staff", "debrief", "support", "distress", "wellbeing", "critical incident debrief"],
      },
      {
        id: "s6",
        name: "Root cause analysis — systems review",
        category: "governance",
        severity: "important",
        clueInStem: "Kevin was discharged on Friday afternoon by the on-call registrar without consultant knowledge; there was no safety plan, no GP notification, and no family contact",
        whyItMatters: "Missing this signal means the candidate has attributed the outcome to an individual clinician's error rather than identifying the multiple contributing system factors that require a formal root cause analysis",
        modelWording: "Commission a formal root cause analysis to investigate the contributing system factors — after-hours discharge policy, consultant notification expectations, discharge checklist compliance, supervision arrangements, and workload conditions",
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
        clueInStem: "no documentation that a consultant was contacted or that consultant authorisation was given; the seclusion was authorised by the on-call registrar",
        whyItMatters: "Missing this signal means the candidate has not identified that registrar-only authorisation of seclusion is a clinical governance breach under most state Mental Health Acts and hospital policy frameworks",
        relatedLegal: "Mental Health Act seclusion provisions; hospital policy; the National Mental Health Standards",
        modelWording: "Document that seclusion without consultant authorisation is a clinical governance breach and initiate formal review and incident reporting",
        keywords: ["consultant authorisation", "authorisation", "registrar", "governance", "seclusion policy", "mental health act", "notification"],
      },
      {
        id: "s2",
        name: "Documentation failure — no monitoring entries during four-hour seclusion",
        category: "governance",
        severity: "critical",
        clueInStem: "the nursing observations during seclusion are documented as 'checked Q30 minutes' but no actual clinical entries appear in the medical record between 11:30 pm and 3:30 am",
        whyItMatters: "Missing this signal means the candidate has not identified that four hours of seclusion without substantive clinical documentation is both a patient safety failure and a serious medico-legal exposure",
        modelWording: "Document that four hours of seclusion with no substantive clinical entries constitutes a serious monitoring failure, and ensure Q30-minute checks in future are individually documented with clinical content",
        keywords: ["documentation", "monitoring", "entries", "no record", "clinical note", "observation", "four hours"],
      },
      {
        id: "s3",
        name: "Cultural safety — no Aboriginal Liaison Officer, no culturally safe response",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "Jarrah is an Aboriginal man admitted under the Mental Health Act; there is no documentation of a review by an Aboriginal Liaison Officer or culturally appropriate support",
        whyItMatters: "Missing this signal means the candidate has not identified a specific cultural safety breach in the seclusion of an Aboriginal man without Aboriginal Liaison Officer involvement, which is a mandatory requirement",
        relatedCultural: "RANZCP Position Statement on Aboriginal and Torres Strait Islander Mental Health; NSQHS Cultural Safety Standard",
        modelWording: "Identify the absence of Aboriginal Liaison Officer involvement as a specific cultural safety breach and name it explicitly in the incident report, given that culturally appropriate support during seclusion of an Aboriginal person is a mandatory requirement",
        keywords: ["aboriginal liaison", "cultural", "culturally safe", "aboriginal", "first nations", "indigenous", "cultural support"],
      },
      {
        id: "s4",
        name: "Post-seclusion review — not completed",
        category: "governance",
        severity: "critical",
        clueInStem: "no post-seclusion review was completed before the next morning",
        whyItMatters: "Missing this signal means the candidate has not identified the absence of a mandatory post-seclusion review as a policy breach that must be addressed in the incident review",
        modelWording: "Address the absent post-seclusion review as a mandatory policy breach — review must occur within the defined timeframe under most policies, and its omission must be included in the incident report",
        keywords: ["post-seclusion", "review", "debrief", "mandatory", "injury", "after seclusion"],
      },
      {
        id: "s5",
        name: "Jarrah's refusal to engage — therapeutic rupture requiring repair",
        category: "trauma",
        severity: "important",
        clueInStem: "Jarrah is now refusing to engage with treating staff and has asked to leave the hospital",
        whyItMatters: "Missing this signal means the candidate has framed Jarrah's withdrawal as non-compliance rather than as a trauma and cultural response to seclusion by state authorities, which requires therapeutic repair using a culturally safe approach",
         modelWording: "Approach Jarrah's withdrawal from engagement through a trauma and cultural lens, recognising that seclusion by state authorities may carry profound historical resonance for an Aboriginal person and that therapeutic repair requires a culturally safe, Aboriginal Liaison-led approach",
        keywords: ["therapeutic rupture", "trauma", "cultural", "repair", "withdrawal", "engage", "historical", "trust"],
      },
      {
        id: "s6",
        name: "Community elder — open disclosure and family engagement",
        category: "family_carer",
        severity: "important",
        clueInStem: "Jarrah's mother, a senior community elder, has called and is distressed and wants answers",
        whyItMatters: "Missing this signal means the candidate has not recognised Jarrah's mother's dual role as family member and community elder, and has not ensured a senior-level honest response to someone whose concerns carry cultural and systemic weight",
        modelWording: "Respond personally and as a priority to Jarrah's mother — as both a family member and a community elder she deserves a senior, honest account of what happened, what will be reviewed, and what will change",
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
        clueInStem: "you note on the system that there have been four prior admissions in three years, each following an overdose; Dr Sharma has not reviewed these",
        whyItMatters: "Missing this signal means the candidate has not identified that four overdoses in three years is one of the strongest predictors of completed suicide and that failure to review this history is a fundamental clinical error",
        modelWording: "Identify that Dr Sharma has not reviewed four prior overdose admissions — a pattern representing the strongest predictor of completed suicide — and require this be remediated before any discharge decision proceeds",
        keywords: ["history", "prior admission", "previous", "four", "overdose", "pattern", "not reviewed", "recurrent"],
      },
      {
        id: "s2",
        name: "No collateral contact — mother not contacted",
        category: "collateral",
        severity: "critical",
        clueInStem: "She has not contacted Callum's mother, who brought him in and is his listed emergency contact",
        whyItMatters: "Missing this signal means the candidate has not identified the absence of family collateral in a patient with BPD and recurrent suicidality as a clinical and safety failure requiring immediate rectification",
        modelWording: "Require immediate contact with Callum's mother — who brought him in and is listed as his emergency contact — as family collateral is essential for safety planning and understanding the home environment in recurrent suicidality",
        keywords: ["collateral", "mother", "family", "contact", "emergency contact", "family", "not contacted"],
      },
      {
        id: "s3",
        name: "No written safety plan — omission in BPD/recurrent suicide risk",
        category: "risk_self",
        severity: "critical",
        clueInStem: "She has not developed a written safety plan",
        whyItMatters: "Missing this signal means the candidate has not ensured a written collaborative safety plan — a non-negotiable minimum standard of care for discharge in a patient with BPD and four prior overdoses",
        modelWording: "Require a written collaborative safety plan co-developed with Callum, reviewed with his mother, and linked to community services before discharge can proceed, as this is a non-negotiable minimum standard",
        keywords: ["safety plan", "written", "collaborative", "discharge plan", "bpd", "safety planning"],
      },
      {
        id: "s4",
        name: "Bed pressure is driving clinical decision — systems pressure",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "Dr Sharma seems eager to discharge Callum because 'the beds are full and there's pressure from the NUM'",
        whyItMatters: "Missing this signal means the candidate has allowed bed pressure to influence a clinical safety decision, which is a governance failure that must be named and refused",
        relatedSystem: "Bed management pressure; NUM authority does not override clinical judgment",
        modelWording: "Document clearly that bed pressure does not constitute a clinical reason for discharge and advise the NUM that Callum's disposition is a clinical decision that administrative capacity management cannot override",
        keywords: ["bed pressure", "beds full", "num", "administrative", "pressure", "systems pressure", "clinical decision"],
      },
      {
        id: "s5",
        name: "Supervision obligation — teaching risk formulation, not authorising discharge",
        category: "governance",
        severity: "important",
        clueInStem: "This is a weekly supervision session; Dr Sharma is presenting a discharge plan for Callum",
        whyItMatters: "Missing this signal means the candidate has either overridden rather than taught Dr Sharma, or has not addressed the clinical and educational gaps that must be the primary purpose of this supervision response",
        modelWording: "Use this supervision session as a teaching opportunity by explaining to Dr Sharma specifically why her formulation is incomplete, guiding her through the missing elements, and ensuring she understands what a defensible discharge risk assessment requires",
        keywords: ["teach", "feedback", "supervision", "corrective", "formulation", "registrar", "guidance", "explain"],
      },
      {
        id: "s6",
        name: "Community follow-up not arranged",
        category: "disposition",
        severity: "important",
        clueInStem: "She has not arranged community follow-up",
        whyItMatters: "Missing this signal means the candidate has not ensured the evidence-based minimum of follow-up within 48-72 hours post-discharge, which is a critical gap in the safety plan for a patient with recurrent suicidality",
        modelWording: "Arrange community mental health follow-up within 48 hours before discharge, as post-discharge contact in this timeframe is an evidence-based suicide prevention intervention and is the minimum standard for recurrent suicidality",
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
        clueInStem: "David's daughter is present and becomes tearful; the Aboriginal Liaison Officer and nursing aide are visibly uncomfortable, and one leaves the room",
        whyItMatters: "Missing this signal means the candidate has allowed active harm to continue in real time to a family member and Aboriginal staff present in the room, rather than intervening as required",
        modelWording: "Interrupt the presentation respectfully but without hesitation, acknowledge David's daughter's distress directly, pause the meeting, and address what has happened in the room rather than waiting until after",
        keywords: ["intervene", "interrupt", "immediate", "pause", "real time", "stop", "halt", "meeting"],
      },
      {
        id: "s2",
        name: "Language used is culturally unsafe and stigmatising",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "'He's got a chaotic lifestyle,' 'non-compliant with medication,' 'his family is dysfunctional and not supportive,' 'classic presentation of someone who doesn't engage with services,' and 'probably has a personality disorder'",
        whyItMatters: "Missing this signal means the candidate has not identified that the language used reflects a colonising deficit frame that pathologises Aboriginal family systems and constitutes culturally unsafe clinical practice",
        relatedCultural: "RANZCP Position Statement on Aboriginal and Torres Strait Islander Mental Health; Cultural Safety principles",
        modelWording: "Identify the language used as reflecting a colonising deficit frame — terms like 'non-compliant,' 'chaotic lifestyle,' and 'dysfunctional family' must be replaced with trauma-informed and structural determinants framing",
        keywords: ["non-compliant", "chaotic", "deficit", "language", "culturally unsafe", "stigmatising", "framing", "colonising"],
      },
      {
        id: "s3",
        name: "David's daughter — family present, harmed by presentation",
        category: "family_carer",
        severity: "critical",
        clueInStem: "David's daughter, who had agreed to attend the meeting as part of his family-centred care plan, is present and becomes tearful",
        whyItMatters: "Missing this signal means the candidate has not acknowledged that a family member attending to support her father's care has experienced active harm in a clinical meeting that requires direct recognition and apology",
        modelWording: "Speak to David's daughter directly after the meeting, acknowledge the harm caused by language used about her family, and offer an apology on behalf of the clinical team",
        keywords: ["daughter", "family", "tearful", "harmed", "acknowledge", "apology", "speak to her"],
      },
      {
        id: "s4",
        name: "Aboriginal staff impact — duty of care to staff",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "the Aboriginal Liaison Officer and nursing aide both become visibly uncomfortable; one of them leaves the room",
        whyItMatters: "Missing this signal means the candidate has not addressed the workplace harm experienced by Aboriginal staff members, whose distress and departure from the room requires acknowledgement and follow-up",
        modelWording: "Follow up privately with both Aboriginal staff members after the meeting to acknowledge that their experience constitutes a workplace harm and to ensure a safe debrief is available to them",
        keywords: ["aboriginal staff", "alo", "liaison officer", "staff impact", "debrief", "staff wellbeing", "harm"],
      },
      {
        id: "s5",
        name: "Corrective feedback to Dr Nguyen — teaching moment",
        category: "governance",
        severity: "important",
        clueInStem: "Dr Nguyen appears unaware of the impact of his language",
        whyItMatters: "Missing this signal means the candidate has either responded punitively to a training deficit rather than educationally, or has not provided the specific corrective feedback required to address a cultural safety gap",
        modelWording: "Meet with Dr Nguyen privately after the meeting to provide specific, educational, and non-punitive corrective feedback on the language used, its cultural safety implications, and the real impact on those present",
        keywords: ["feedback", "dr nguyen", "private", "educate", "teach", "corrective", "specific", "language"],
      },
      {
        id: "s6",
        name: "Team culture — the rest of the team did not intervene",
        category: "governance",
        severity: "important",
        clueInStem: "the rest of the clinical team continue engaging with Dr Nguyen's presentation as though nothing has happened",
        whyItMatters: "Missing this signal means the candidate has focused corrective action solely on Dr Nguyen rather than recognising that the entire team's silence is itself a cultural safety problem requiring systemic response",
        modelWording: "Raise the team's collective silence at the next meeting as a cultural safety problem in its own right, framing it as a reflection on team norms and collective responsibility rather than focusing solely on Dr Nguyen",
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
        clueInStem: "Dr Wu's note reads: 'Patient appears to understand her diagnosis. She said she doesn't want more chemo as she's tired of being sick. She seems to have capacity'",
        whyItMatters: "Missing this signal means the candidate has not identified that Dr Wu's note does not constitute a legally defensible capacity assessment and has allowed discharge to proceed without valid documentation",
        relatedLegal: "Guardianship Act; common law capacity principles; medico-legal standard for refusal of life-sustaining treatment",
        modelWording: "Identify that Dr Wu's note does not constitute a legally defensible capacity assessment and halt discharge until a formal four-domain assessment with specific documented evidence is completed",
        keywords: ["four domains", "understanding", "retain", "weigh", "communicate", "capacity assessment", "document", "legally defensible"],
      },
      {
        id: "s2",
        name: "Information not confirmed understood — validity of consent",
        category: "capacity",
        severity: "critical",
        clueInStem: "the note does not document which information was provided to the patient, whether it was confirmed understood, what alternatives were offered, or what the patient said about risks of refusing",
        whyItMatters: "Missing this signal means the candidate has not identified that without documented confirmation of information provided and understood, no valid capacity determination can be made for a life-sustaining treatment refusal",
        modelWording: "Document that Mrs Papageorgiou received and understood specific information about her prognosis, the trajectory without chemotherapy, and alternatives, as this is required for a valid capacity assessment for a life-sustaining treatment refusal",
        keywords: ["information provided", "understood", "prognosis", "consequences", "informed", "what was told"],
      },
      {
        id: "s3",
        name: "Cultural context — Greek-born; values and cultural background not explored",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "Mrs Papageorgiou is a Greek-born woman; the note makes no reference to cultural or spiritual background",
        whyItMatters: "Missing this signal means the candidate has not explored cultural and spiritual values that may be shaping a life-limiting refusal, which is a required component of a culturally informed capacity assessment",
        modelWording: "Explore Mrs Papageorgiou's cultural and spiritual values as part of the capacity assessment, given that Greek cultural traditions may influence her views on dying, family decision-making, and the meaning of palliative care",
        keywords: ["cultural", "greek", "values", "spiritual", "background", "consistent", "culturally informed"],
      },
      {
        id: "s4",
        name: "Family awareness not documented",
        category: "family_carer",
        severity: "important",
        clueInStem: "the note does not mention family awareness of Mrs Papageorgiou's decision",
        whyItMatters: "Missing this signal means the candidate has not documented family involvement in a culturally significant life-limiting decision, which is clinically and culturally important even if it does not alter the legally binding outcome",
        modelWording: "Document whether family have been involved in or are aware of Mrs Papageorgiou's decision, as this is clinically and culturally important in a life-limiting refusal context even if it does not alter the legally binding outcome",
        keywords: ["family", "aware", "involved", "family decision", "next of kin"],
      },
      {
        id: "s5",
        name: "Interpreter offer not documented despite non-English background",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "Mrs Papageorgiou is Greek-born; the note makes no notation of an interpreter being offered",
        whyItMatters: "Missing this signal means the candidate has not documented whether an interpreter was offered to a non-English background patient for a life-sustaining treatment refusal, which is required best practice",
        modelWording: "Document whether a professional interpreter was offered to Mrs Papageorgiou and whether she elected to proceed in English, as this is required best practice for a capacity assessment involving a life-sustaining treatment refusal",
        keywords: ["interpreter", "language", "greek", "offered", "professional interpreter", "naati", "english"],
      },
      {
        id: "s6",
        name: "Action required — reassess and re-document before discharge proceeds",
        category: "disposition",
        severity: "critical",
        clueInStem: "the oncology team has since proceeded with discharge planning based on the inadequate documentation",
        whyItMatters: "Missing this signal means the candidate has allowed discharge to palliative care to proceed on the basis of an inadequate capacity assessment, creating significant medico-legal risk for the hospital and team",
        modelWording: "Halt discharge and conduct a full capacity assessment with complete documentation before discharge to palliative care proceeds, informing the oncology team that the current note does not support a valid capacity determination",
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
        clueInStem: "Dr Adeyemi says Reza presented to her clinic 'looking unwell' five days after discharge; his wife called that morning saying he was 'acting strangely again'",
        whyItMatters: "Missing this signal means the candidate has managed a probable early relapse with a phone discussion rather than arranging the urgent review required five days after discharge from a first psychotic episode",
        modelWording: "Arrange urgent clinical review of Reza today — by the community mental health team or directly — as the GP's call has identified probable early relapse five days after discharge from a first psychotic episode",
        keywords: ["urgent", "immediate review", "deteriorating", "relapse", "five days", "unwell", "medication", "not taking"],
      },
      {
        id: "s2",
        name: "Discharge summary is clinically inadequate",
        category: "governance",
        severity: "critical",
        clueInStem: "the discharge summary has no diagnosis, no medication details, no follow-up plan, no case manager contact, and no emergency escalation pathway",
        whyItMatters: "Missing this signal means the candidate has not identified the specific minimum content required for a psychiatric discharge summary and has not taken responsibility for the failures",
        modelWording: "Acknowledge that the discharge summary provided to Dr Adeyemi fails the minimum standard and commit to sending a comprehensive addendum letter today that includes diagnosis, medications, follow-up plan, case manager contact, and relapse indicators",
        keywords: ["discharge summary", "inadequate", "diagnosis", "medication", "follow-up", "case manager", "emergency contact", "minimum standard"],
      },
      {
        id: "s3",
        name: "No consultant co-signature on discharge summary",
        category: "governance",
        severity: "important",
        clueInStem: "the discharge summary is a three-paragraph letter written by the after-hours registrar at 11 pm on the day of discharge with no co-sign by a consultant",
        whyItMatters: "Missing this signal means the candidate has not identified the supervision and governance gap of an uncosigned registrar discharge summary for a complex psychiatric case",
        modelWording: "Identify the absent consultant co-signature as a supervision and governance gap that must be addressed at the unit level, given that consultant review of complex psychiatric discharge summaries is not optional",
        keywords: ["consultant co-sign", "signature", "reviewed", "consultant review", "registrar", "oversight"],
      },
      {
        id: "s4",
        name: "Medication adherence failure — not captured, no plan",
        category: "risk_self",
        severity: "important",
        clueInStem: "family says he's not taking medication; there is no mention of this in the discharge summary and no adherence plan",
        whyItMatters: "Missing this signal means the candidate has not recognised that non-adherence in first-episode schizophrenia is the primary driver of relapse and that the absence of an adherence plan is a critical discharge planning failure",
        modelWording: "Address medication non-adherence as the primary driver of relapse in first-episode schizophrenia by arranging urgent review that includes an adherence strategy, depot consideration, and family psychoeducation",
        keywords: ["adherence", "medication", "non-adherence", "relapse", "family education", "take medication"],
      },
      {
        id: "s5",
        name: "Cultural context — first-episode psychosis in an Iranian man",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "Reza is a 34-year-old Iranian man; this was a first episode of schizophrenia",
        whyItMatters: "Missing this signal means the candidate has not addressed cultural explanatory models, family psychoeducation, and stigma that are particularly relevant in a first-episode presentation for an Iranian man",
        modelWording: "Address cultural context, family psychoeducation, and culturally appropriate explanatory models for Reza's illness in the addendum letter and community care plan, as none of this was included in the original discharge communication",
        keywords: ["cultural", "iranian", "explanatory model", "family psychoeducation", "stigma", "cultural context", "first episode"],
      },
      {
        id: "s6",
        name: "GP relationship — acknowledge and remediate",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "Dr Adeyemi is frustrated and concerned and has not received adequate discharge information",
        whyItMatters: "Missing this signal means the candidate has not acknowledged responsibility for the inadequate discharge communication or repaired the GP relationship that is essential for Reza's ongoing community care",
        modelWording: "Apologise directly to Dr Adeyemi, take responsibility for the inadequate discharge communication, send a comprehensive addendum letter today, and establish direct contact information for future clinical emergencies",
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
        clueInStem: "Wayne has a prior finding of not guilty by reason of mental illness six years ago and was conditionally discharged from forensic supervision three years ago — both are absent from the discharge summary",
        whyItMatters: "Missing this signal means the candidate has not identified that absent forensic history leaves receiving clinicians unable to calibrate community risk appropriately and constitutes a serious omission",
        relatedLegal: "Forensic Mental Health Act; conditional discharge obligations; duty to inform treating team",
        modelWording: "Identify the absent NGMI finding and conditional forensic discharge history as a serious omission and require Dr Tan to include the full forensic history before the summary is released",
        keywords: ["forensic history", "ngmi", "not guilty by reason", "conditional discharge", "forensic", "history of violence", "absent"],
      },
      {
        id: "s2",
        name: "Risk formulation absent — 'risk: reduced' is not a risk formulation",
        category: "governance",
        severity: "critical",
        clueInStem: "the only risk documentation is a single line: 'risk: reduced during admission'",
        whyItMatters: "Missing this signal means the candidate has accepted 'risk reduced during admission' as a risk formulation when it is merely a description of inpatient behaviour that entirely fails to address community risk",
        modelWording: "Require a proper risk formulation addressing static, dynamic, and protective factors in Wayne's community context — including substance use vulnerability, family relationships, housing, and forensic support engagement",
        keywords: ["risk formulation", "static", "dynamic", "protective", "community", "absent", "not a formulation"],
      },
      {
        id: "s3",
        name: "Mother not notified — victim-adjacent person with safety relevance",
        category: "family_carer",
        severity: "critical",
        clueInStem: "Wayne has a history of violence towards his mother when unwell; his mother has not been notified of his discharge",
        whyItMatters: "Missing this signal means the candidate has not identified that Wayne's mother — the identified victim of his previous violence — must be notified of discharge as both a clinical and public safety obligation",
        relatedLegal: "Public safety obligation; duty of care to identifiable third party at risk",
        modelWording: "Notify Wayne's mother of his discharge as a mandatory clinical and public safety obligation, and include her in the safety and relapse prevention plan given she is the identified victim of his previous violence",
        keywords: ["mother", "notified", "victim", "at risk", "public safety", "third party", "notify"],
      },
      {
        id: "s4",
        name: "Follow-up plan is clinically inadequate — 'call Wayne' is not a plan",
        category: "disposition",
        severity: "critical",
        clueInStem: "the only listed contact is 'Wayne — please call to arrange follow-up'",
        whyItMatters: "Missing this signal means the candidate has not identified that patient-initiated follow-up is not a clinical plan for a forensic patient with schizophrenia and substance use history",
        modelWording: "Require confirmed outpatient appointments, named forensic community team contacts, and an assertive follow-up protocol before discharge, as follow-up contingent on the patient initiating contact is not a clinical plan for a forensic patient",
        keywords: ["follow-up", "community", "outpatient", "forensic community", "assertive", "confirmed", "plan", "not contingent"],
      },
      {
        id: "s5",
        name: "No co-sign until review — do not release this summary",
        category: "governance",
        severity: "critical",
        clueInStem: "the discharge summary is awaiting co-signature in the consultant's queue",
        whyItMatters: "Missing this signal means the candidate has co-signed a clinically inadequate forensic discharge summary, creating medico-legal exposure and allowing unsafe discharge to proceed",
        modelWording: "Refuse to co-sign this summary and return it to Dr Tan with a specific list of required changes before any release, given that co-signing it as written would be clinically and medico-legally indefensible",
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
        clueInStem: "the discharge summary does not name Lily, document a child safety assessment, or mention parenting capacity observations",
        whyItMatters: "Missing this signal means the candidate has not identified that a mother-baby unit discharge without a named infant safety assessment does not meet the minimum standard of care",
        relatedLegal: "Children and Young Persons Act; mandatory reporting obligations; duty of care to vulnerable infant",
        modelWording: "Require Lily to be named and a child safety assessment completed and documented before the summary is released, including parenting capacity observations, infant attachment, and an explicit community safety plan",
        keywords: ["lily", "child", "infant", "safety", "child safety", "parenting capacity", "safeguarding", "name", "not named"],
      },
      {
        id: "s2",
        name: "Relapse in perinatal context — high-risk period not documented",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Aisha had a postpartum psychotic episode; the discharge summary contains no relapse prevention plan specific to the perinatal context",
        whyItMatters: "Missing this signal means the candidate has not identified the absence of a perinatal-specific relapse prevention plan, which is clinically unacceptable given the high recurrence risk of postpartum psychosis",
        modelWording: "Require a perinatal-specific relapse prevention plan addressing early warning signs, crisis escalation pathway, contingency if she deteriorates at home with Lily, and guidance for any future pregnancy before co-signing",
        keywords: ["relapse", "postpartum", "perinatal", "early warning", "prevention", "risk postpartum", "future pregnancy", "contingency"],
      },
      {
        id: "s3",
        name: "Medication in breastfeeding not addressed",
        category: "physical_health",
        severity: "critical",
        clueInStem: "Aisha is prescribed olanzapine 10 mg and is being discharged with her baby; breastfeeding is not addressed in the summary",
        whyItMatters: "Missing this signal means the candidate has not addressed a required clinical discussion about olanzapine and breastfeeding, leaving the infant at unquantified risk",
        modelWording: "Require documentation of the breastfeeding and olanzapine discussion, including the risk-benefit analysis and Aisha's decision, as this is an essential clinical requirement that is entirely absent from the summary",
        keywords: ["breastfeeding", "olanzapine", "medication", "breastfeed", "infant exposure", "lactation", "breast milk", "risk"],
      },
      {
        id: "s4",
        name: "Social isolation — no family, husband not involved, Somali background",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "Aisha arrived in Australia from Somalia three years ago; she has no extended family in Australia; her husband was not involved in the admission",
        whyItMatters: "Missing this signal means the candidate has not identified that Aisha is being discharged into a high-risk isolated home environment that requires explicit home support planning before discharge",
        modelWording: "Require an explicit home support plan addressing who will be present with Aisha in the early weeks and what happens if she deteriorates when alone with Lily, given social isolation, an uninvolved husband, and no family network in Australia",
        keywords: ["social isolation", "no family", "husband", "absent", "support", "home", "alone", "network"],
      },
      {
        id: "s5",
        name: "Four-week follow-up is too long for a postpartum psychosis discharge",
        category: "disposition",
        severity: "important",
        clueInStem: "the discharge plan says: 'Follow up with perinatal outpatient clinic in 4 weeks'",
        whyItMatters: "Missing this signal means the candidate has not identified that four-week follow-up is clinically insufficient after a postpartum psychotic episode, leaving Aisha without contact during the highest-risk early weeks",
        modelWording: "Require community perinatal team contact within 48-72 hours and a clinical review within one week, as the planned four-week follow-up interval is clinically insufficient for a postpartum psychosis discharge",
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
        clueInStem: "Dr Walsh is pressuring you to give 'clearance to discharge' over the phone without attending",
        whyItMatters: "Missing this signal means the candidate has given telephone clearance for a high-risk patient without direct assessment, which is not clinically defensible and constitutes a clinical governance failure",
        modelWording: "Refuse telephone clearance and attend in person for direct assessment, as a phone conversation does not constitute a psychiatric risk assessment for a patient with six ED presentations and a serious attempt eight weeks ago",
        keywords: ["telephone clearance", "phone clearance", "direct assessment", "attend", "in person", "not defensible", "refuse"],
      },
      {
        id: "s2",
        name: "High-frequency attender — pattern recognition, not dismissal",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Tyra has had six presentations to this ED in the past 18 months — four of them overdoses",
        whyItMatters: "Missing this signal means the candidate has accepted the framing that prior frequent presentations reduce risk, when in fact they represent the strongest predictor of completed suicide",
        modelWording: "Recognise that Tyra's pattern of six presentations including four overdoses represents the strongest predictor of completed suicide and that habituation bias — treating frequency as low risk — must be explicitly resisted",
        keywords: ["prior attempt", "high frequency", "pattern", "habituation", "not low risk", "strongest predictor", "history"],
      },
      {
        id: "s3",
        name: "No community mental health linkage — a system failure",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "Tyra is not currently linked with any community mental health service",
        whyItMatters: "Missing this signal means the candidate has not identified that six ED presentations without community mental health linkage represents a systems failure requiring intervention, not simply another discharge",
        relatedSystem: "Community mental health referral; case management; ED diversion; GP engagement",
        modelWording: "Identify six ED presentations without community mental health linkage as a systems failure and ensure a referral for community case management is initiated before discharge, as failing to do so guarantees a further presentation",
        keywords: ["community mental health", "linkage", "not connected", "system failure", "no case manager", "ed as default"],
      },
      {
        id: "s4",
        name: "Personality disorder label — stigmatising and clinically incomplete",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "the previous attending consultant noted in her file: 'high-frequency attender, consider personality disorder'",
        whyItMatters: "Missing this signal means the candidate has allowed a personality disorder notation to function as a clinical reason to minimise risk, when in fact patients with BPD have a ten per cent lifetime suicide completion rate",
        modelWording: "Recognise that the notation 'consider personality disorder' must not function as a reason to minimise this presentation, given that patients with BPD have a lifetime suicide completion rate of approximately ten per cent",
        keywords: ["personality disorder", "bpd", "stigma", "label", "minimise", "not a reason", "10 percent", "lifetime risk"],
      },
      {
        id: "s5",
        name: "Consultant authority — maintaining clinical independence from ED pressure",
        category: "governance",
        severity: "important",
        clueInStem: "Dr Walsh is blunt and irritated and is pressuring you to give clearance to discharge",
        whyItMatters: "Missing this signal means the candidate has yielded clinical judgment to peer pressure rather than documenting an independent clinical decision and attending for direct assessment",
        modelWording: "Attend in person and document the clinical decision independently, acknowledging Dr Walsh's ED pressure while making clear that the clinical decision regarding Tyra's safety cannot be made by telephone or under peer pressure",
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
        clueInStem: "the hospital has issued a 'Code Yellow — Capacity Alert'; the NUM has announced that three named patients — Greg, Nasrin, and William — need to go by midday",
        whyItMatters: "Missing this signal means the candidate has subordinated clinical judgment to administrative capacity management, which is a governance failure that puts all three patients at risk",
        modelWording: "Acknowledge the bed pressure and work collaboratively with the NUM on capacity, while being clear that discharge decisions for Greg, Nasrin, and William are clinical decisions made on clinical grounds that administrative pressure cannot override",
        keywords: ["clinical authority", "not subordinate", "clinical decision", "beds", "capacity management", "acknowledge", "collaborate"],
      },
      {
        id: "s2",
        name: "Greg — no safety plan, no follow-up: not safe to discharge",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Greg has no safety plan documented, no community follow-up arranged, and no family contact made; he was admitted one week ago following a serious overdose",
        whyItMatters: "Missing this signal means the candidate has discharged a patient one week post-serious overdose without a safety plan or follow-up, replicating the pattern of omissions documented in post-discharge suicide cases",
        modelWording: "Identify that Greg cannot be safely discharged without a written safety plan, confirmed community follow-up within 48-72 hours, family contact, and a GP letter — none of which are currently in place",
        keywords: ["greg", "no safety plan", "no follow-up", "one week", "overdose", "not safe", "family contact"],
      },
      {
        id: "s3",
        name: "Nasrin — thought-disordered, limited insight, children unsupervised",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "Nasrin remains thought-disordered with limited insight and has two young children at home; her husband is on a fly-in-fly-out rotation and unavailable for the next five days",
        whyItMatters: "Missing this signal means the candidate has discharged a thought-disordered mother with limited insight into sole care of two young children, which constitutes both a risk to Nasrin and a child safety risk",
        relatedRisk: "Child safety — two young children in care of a thought-disordered person; risk to Nasrin from limited insight",
        modelWording: "Identify that Nasrin cannot be discharged while thought-disordered and lacking insight into sole care of two young children for five days, as this constitutes a child safety risk and a risk to Nasrin that precludes discharge",
        keywords: ["nasrin", "thought-disordered", "insight", "children", "child safety", "husband away", "unsupported", "not ready"],
      },
      {
        id: "s4",
        name: "William — mid-ECT course; wife unable to cope",
        category: "risk_self",
        severity: "critical",
        clueInStem: "William is halfway through his ECT course; his wife told nursing staff last week that she is 'afraid to have him home' and cannot manage him alone",
        whyItMatters: "Missing this signal means the candidate has discharged a patient mid-ECT course into the care of a carer who has explicitly stated she cannot manage, which is clinically premature and potentially harmful to both",
        modelWording: "Identify that William cannot be discharged mid-ECT course into the care of a wife who has explicitly stated she cannot manage him at home, as premature discharge is clinically unjustifiable and potentially harmful to both",
        keywords: ["william", "ect", "mid-course", "wife", "cannot cope", "psychotic depression", "premature", "carer"],
      },
      {
        id: "s5",
        name: "Document decision and escalate appropriately",
        category: "governance",
        severity: "important",
        clueInStem: "Sandra tells you that if you do not clear these three patients by midday 'it will escalate to the Medical Director'",
        whyItMatters: "Missing this signal means the candidate has yielded to the threat of escalation rather than documenting transparent clinical decisions and welcoming senior governance involvement",
        modelWording: "Document the clinical basis for each decision clearly in the medical records and welcome Medical Director involvement if it escalates, as clinical safety decisions must be transparent and defensible",
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
        clueInStem: "his wife found a farewell letter and a loaded firearm in his study",
        whyItMatters: "Missing this signal means the candidate has accepted Harry's minimisation at face value rather than recognising that a farewell letter and loaded firearm constitute documented suicidal planning with lethal means",
        modelWording: "Identify the farewell letter and loaded firearm as documented suicidal planning with lethal means, constituting a high-lethality emergency regardless of Harry's current minimisation and denial",
        keywords: ["farewell letter", "firearm", "loaded", "planning", "lethal means", "imminent", "high lethality", "means access"],
      },
      {
        id: "s2",
        name: "Minimisation in context of alcohol — assessment validity",
        category: "risk_self",
        severity: "critical",
        clueInStem: "the ED registrar estimates Harry has been drinking significantly; Harry says the letter was 'just a way of processing' and he is 'fine now'",
        whyItMatters: "Missing this signal means the candidate has accepted Harry's minimisation as clinically valid assessment when significant alcohol intoxication renders his current account unreliable",
        modelWording: "Recognise that Harry's denial cannot be accepted while significantly intoxicated, that psychiatric assessment must be repeated when sober, and that he cannot be discharged tonight under any circumstances",
        keywords: ["alcohol", "intoxicated", "minimisation", "unreliable", "cannot assess", "not valid", "sober", "denial"],
      },
      {
        id: "s3",
        name: "Rural equity — distance must not determine clinical standard",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "the nearest inpatient psychiatric bed is 220 km away; the rural hospital has no inpatient psychiatric unit",
        whyItMatters: "Missing this signal means the candidate has allowed geographic distance to lower the clinical standard of care, accepting a disposition that would not be acceptable in a metropolitan setting",
        relatedSystem: "RFDS transport; rural psychiatric crisis pathway; metropolitan bed access via telehealth; voluntary admission options",
        modelWording: "Initiate RFDS transfer to the metropolitan inpatient unit without delay, as geographic distance cannot lower the clinical standard of care and a four-hour wait is not a clinical reason for discharge",
        keywords: ["rural", "distance", "geographic", "equity", "rfds", "transfer", "standard of care", "not lower"],
      },
      {
        id: "s4",
        name: "Firearms — confirm secured, explore other means access",
        category: "risk_self",
        severity: "critical",
        clueInStem: "the local police have collected the firearm",
        whyItMatters: "Missing this signal means the candidate has treated police collection of the identified firearm as adequate means restriction when a farmer may have access to additional licensed firearms and agricultural chemicals",
        modelWording: "Confirm that police collection of the identified firearm is an essential step, but ask Harry's wife specifically about all additional means access on the farm, including other licensed firearms and agricultural chemicals",
        keywords: ["firearms", "secured", "additional firearms", "means", "agricultural", "chemicals", "farm", "other means"],
      },
      {
        id: "s5",
        name: "Wife as collateral — distressed carer, safety planning partner",
        category: "family_carer",
        severity: "important",
        clueInStem: "Harry's wife looks distressed and is hovering in the background of the screen",
        whyItMatters: "Missing this signal means the candidate has not brought Harry's wife into the consultation, losing the primary collateral source and safety planning partner in this telehealth assessment",
        modelWording: "Bring Harry's wife directly into the consultation, as she found the letter and the firearm and is the primary source of collateral information about his preceding behaviour and means access on the farm",
        keywords: ["wife", "collateral", "bring in", "include", "safety plan", "partner", "distressed"],
      },
      {
        id: "s6",
        name: "Junior ED registrar — supervision and support",
        category: "governance",
        severity: "important",
        clueInStem: "the rural ED has one doctor on — a junior ED registrar who completed her intern year 18 months ago; the waiting room is becoming overwhelmed",
        whyItMatters: "Missing this signal means the candidate has not provided the clear directive guidance that a junior rural ED clinician managing a complex psychiatric crisis without local psychiatric backup requires",
        modelWording: "Give the ED registrar clear and explicit directive guidance — Harry is not to be discharged, RFDS should be called now, his wife brought in for collateral — and remain available for callback throughout the process",
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
        clueInStem: "Rosa has been found walking on the road at night, has not slept or eaten in two days, and is floridly psychotic",
        whyItMatters: "Missing this signal means the candidate has not recognised or communicated unambiguously that Rosa's situation constitutes a medical emergency that qualifies for RFDS activation",
        modelWording: "Communicate unambiguously that Rosa's situation is a medical emergency — wandering on roads at night, not eating or sleeping, and floridly psychotic — that qualifies for immediate RFDS activation",
        keywords: ["immediate safety", "road", "night", "emergency", "acute", "not sleeping", "not eating", "danger", "rfds"],
      },
      {
        id: "s2",
        name: "RFDS — this qualifies as an emergency, nurse must be supported",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "the nurse is uncertain if this situation qualifies for RFDS given the 'emergencies only' policy",
        whyItMatters: "Missing this signal means the candidate has left the nurse uncertain about RFDS activation rather than providing the unambiguous direction required in a time-critical emergency",
        modelWording: "Tell the nurse directly and without equivocation that this qualifies for RFDS activation, document the clinical assessment, and be available to speak with the RFDS medical officer to support the activation",
        keywords: ["rfds", "activate", "emergency", "qualifies", "direct", "unambiguous", "support nurse", "rfds medical officer"],
      },
      {
        id: "s3",
        name: "Cultural safety — family's explanation of illness and traditional healing",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "Rosa's family believe her illness is the result of 'wrong business'; they are divided, with some wanting the city hospital and others wanting a traditional healer involved first",
        whyItMatters: "Missing this signal means the candidate has treated the family's cultural explanatory model as an obstacle to medical care rather than a legitimate framework requiring engagement alongside emergency treatment",
        relatedCultural: "RANZCP Aboriginal and Torres Strait Islander Mental Health Position Statement; cultural safety in emergency",
        modelWording: "Engage the family's cultural explanatory model seriously by involving the Aboriginal Health Worker and facilitating traditional healer involvement alongside emergency medical care, not instead of it where clinically safe",
        keywords: ["wrong business", "cultural", "traditional healer", "cultural explanatory model", "aboriginal health worker", "not dismissed", "alongside"],
      },
      {
        id: "s4",
        name: "Family's fear of removal — historical context of institutionalisation",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "Rosa's family tell the nurse: 'If you take her away she might never come back'",
        whyItMatters: "Missing this signal means the candidate has dismissed historically grounded fear of institutionalisation as resistance rather than addressing it with the honesty and cultural acknowledgement it requires",
        modelWording: "Acknowledge explicitly that the family's fear that Rosa might never come back is grounded in historical reality, and make Rosa's plan to return to community a central and explicit part of the transfer conversation from the outset",
        keywords: ["never come back", "historical", "institutionalisation", "removal", "fear", "family", "acknowledge", "return"],
      },
      {
        id: "s5",
        name: "No medication available — advocate for emergency medication access",
        category: "system_pressure",
        severity: "important",
        clueInStem: "the community health centre has no antipsychotic medication in stock",
        whyItMatters: "Missing this signal means the candidate has not identified the absence of medication as a rural equity failure requiring systemic advocacy and immediate emergency supply through the RFDS",
        relatedSystem: "Emergency supply; RFDS medication carry; rural formulary gap",
        modelWording: "Advocate for the RFDS to carry emergency antipsychotic medication and raise the absence of medication at the community health centre as a rural equity failure requiring review of remote medication formularies",
        keywords: ["medication", "antipsychotic", "no stock", "rfds carry", "emergency supply", "rural formulary", "advocate"],
      },
      {
        id: "s6",
        name: "Family exhaustion — carer burden; they have not slept",
        category: "family_carer",
        severity: "important",
        clueInStem: "her family have been watching her and have not slept",
        whyItMatters: "Missing this signal means the candidate has not assessed the family's capacity to maintain safe observation during the hours until RFDS arrival, nor offered the practical support needed to sustain this",
        modelWording: "Assess the family's capacity to safely supervise Rosa for the hours until RFDS arrival, given they have not slept, and offer whatever practical support is possible to sustain safe observation during this period",
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
        clueInStem: "Ben disclosed to Annalise that he was 'also finding the therapy sessions very meaningful' and that he 'looked forward to their sessions' after she declared she was 'in love with him'",
        whyItMatters: "Missing this signal means the candidate has not named Ben's self-disclosure as a boundary violation, failing to address conduct that has reinforced the transference and created clinical and professional risk",
        modelWording: "Name Ben's self-disclosure as a boundary violation directly and address it in supervision, explaining that it was not a neutral response — it validated the transference, distorted the therapeutic frame, and created clinical and professional risk",
        keywords: ["self-disclosure", "boundary violation", "erotic transference", "frame", "disclosure", "reciprocal", "not neutral"],
      },
      {
        id: "s2",
        name: "Undocumented sessions — four sessions absent from medical record",
        category: "governance",
        severity: "critical",
        clueInStem: "Ben has not documented the last four sessions in the medical record",
        whyItMatters: "Missing this signal means the candidate has not explored four absent clinical records in the context of escalating transference and a boundary violation, which may represent deliberate non-documentation",
        relatedLegal: "Medical record keeping obligations; AHPRA professional standards; potential disciplinary risk",
        modelWording: "Address the four undocumented sessions as a serious professional concern in supervision, exploring why they were not recorded in the context of escalating transference and a boundary violation, given the medico-legal and AHPRA registration implications",
        keywords: ["undocumented", "not documented", "four sessions", "record", "absent", "not recorded", "documentation"],
      },
      {
        id: "s3",
        name: "Annalise's safety — BPD, sexual abuse history, attachment disruption",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Annalise has borderline personality disorder and a history of childhood sexual abuse; she has developed an intense erotic transference to Ben",
        whyItMatters: "Missing this signal means the candidate has not assessed Annalise's clinical vulnerability and the specific risk of re-traumatisation if the therapeutic relationship is managed abruptly",
        modelWording: "Assess Annalise's clinical vulnerability carefully and plan a managed transfer of care that avoids re-traumatisation, given that erotic transference in the context of childhood sexual abuse and BPD requires gradual and sensitive transition management",
        keywords: ["annalise", "bpd", "sexual abuse", "risk", "vulnerable", "safe transfer", "trauma", "retraumatisation"],
      },
      {
        id: "s4",
        name: "Ben's wellbeing and registration — he may require professional support",
        category: "governance",
        severity: "important",
        clueInStem: "Ben becomes visibly uncomfortable when asked how he responded and tells you about the self-disclosure for the first time",
        whyItMatters: "Missing this signal means the candidate has responded punitively rather than supportively to Ben's distress, failing to recognise that shame-driven concealment requires a supportive before punitive supervisory response",
        modelWording: "Approach Ben's distress and concealment supportively rather than punitively, recognising that shame-driven concealment requires a supportive supervisory response, while also clearly naming the professional obligations that must be addressed",
        keywords: ["ben", "wellbeing", "countertransference", "concealment", "support", "distress", "supervision", "anxiety"],
      },
      {
        id: "s5",
        name: "Transfer of care — must be managed, not abandonment",
        category: "disposition",
        severity: "important",
        clueInStem: "Ben says: 'I'm not sure I can keep seeing her — but I don't want to abandon her either'",
        whyItMatters: "Missing this signal means the candidate has allowed abrupt termination of a therapeutic relationship that, for a patient with BPD and childhood sexual abuse, constitutes therapeutic abandonment and risks severe re-traumatisation",
        modelWording: "Plan a carefully managed transfer of care led by a senior clinician, as Annalise cannot be abruptly discharged — the transfer must include a clear explanation to her and appropriate clinical handover to prevent re-traumatisation",
        keywords: ["transfer", "not abandon", "planned", "senior", "transition", "handover", "managed", "not abrupt"],
      },
      {
        id: "s6",
        name: "AHPRA notification — professional obligation to consider",
        category: "governance",
        severity: "important",
        clueInStem: "Ben is a supervised trainee who has committed a boundary violation and concealed it from supervision",
        whyItMatters: "Missing this signal means the candidate has managed a trainee boundary violation within the supervisory relationship without considering the consultant's own mandatory or voluntary AHPRA reporting obligations",
        relatedLegal: "AHPRA mandatory reporting; Medical Board Code of Conduct",
        modelWording: "Consider the mandatory AHPRA reporting obligations that arise as the supervising consultant for a trainee boundary violation, document the conduct, and consult the medical defence organisation before deciding on the appropriate notification pathway",
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
        clueInStem: "There's a girl on his team — she's about twelve — who keeps showing up at his house.",
        whyItMatters: "Missing this signal means the candidate has not identified a mandatory reporting obligation that is non-negotiable regardless of Jade's request for confidentiality or the therapeutic relationship stakes",
        relatedLegal: "Children and Young Persons Act (jurisdiction-specific); mandatory reporting obligation for registered health practitioners; does not require proof",
        modelWording: "Report to child protective services immediately, as the description of a 12-year-old girl attending the home of a known child sexual abuser constitutes reasonable grounds to suspect a child is at risk — a non-negotiable mandatory obligation",
        keywords: ["mandatory reporting", "mandatory report", "child at risk", "reasonable suspicion", "child protection", "obligation", "report"],
      },
      {
        id: "s2",
        name: "Confidentiality — limits must be explained, therapeutic frame maintained",
        category: "ethics",
        severity: "critical",
        clueInStem: "Jade says: 'Please don't tell anyone. I'll lose my family. I promise I will stop seeing you if you tell anyone'",
        whyItMatters: "Missing this signal means the candidate has either promised confidentiality that cannot be kept, or has not managed the disclosure of the limits in a way that preserves the therapeutic relationship",
        modelWording: "Explain to Jade honestly that confidentiality has limits that mandatory reporting overrides, what you are obligated to do and why, before taking action — doing so transparently is the only way to preserve the therapeutic relationship",
        keywords: ["confidentiality", "limits", "explain", "honest", "cannot promise", "mandatory", "therapeutic relationship", "honest"],
      },
      {
        id: "s3",
        name: "Jade's safety — ongoing contact from perpetrator",
        category: "risk_self",
        severity: "critical",
        clueInStem: "her uncle has been contacting her again over the past six months, 'pushing her to meet'",
        whyItMatters: "Missing this signal means the candidate has not addressed Jade's own ongoing safety risk from her perpetrator's sustained contact, which requires a safety plan independent of the child protection report",
        modelWording: "Develop a safety plan with Jade addressing how she responds to her uncle's contact, who she can call, and what steps to take if he escalates — this is required independently of and in addition to the mandatory child protection report",
        keywords: ["jade safety", "contact", "perpetrator", "ongoing", "safety plan", "ongoing risk", "uncle"],
      },
      {
        id: "s4",
        name: "Therapeutic rupture — managing the relationship through mandatory action",
        category: "trauma",
        severity: "important",
        clueInStem: "Jade says 'I will stop seeing you if you tell anyone'",
        whyItMatters: "Missing this signal means the candidate has not named Jade's threat to leave therapy as a trauma response rather than a negotiating position, and has not responded with the transparency required to preserve the relationship",
        modelWording: "Jade's response to disclosure reflects her trauma history — the fear of loss following disclosure. I will name this compassionately, explain my obligations fully, and emphasise that I want to continue working with her through this.",
        keywords: ["therapeutic rupture", "trauma response", "disclosure", "fear", "transparency", "relationship", "continue", "maintain"],
      },
      {
        id: "s5",
        name: "Do not allow Jade to leave without safety acknowledgement",
        category: "immediate_safety",
        severity: "important",
        clueInStem: "Jade is terrified and distressed at the end of the session having disclosed this for the first time",
        whyItMatters: "Missing this signal means the candidate has allowed a highly distressed patient to leave a session without a safety plan after disclosing escalating perpetrator contact",
        modelWording: "Ensure Jade has a safety plan for the next 24-48 hours before this session ends — who she can contact, what she does if her uncle contacts her, and a confirmed next appointment",
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
        clueInStem: "the oncology team referred Arthur because they 'cannot understand why someone would say no'",
        whyItMatters: "Missing this signal means the candidate has accepted the framing that an unwanted decision implies impaired capacity, which is a fundamental clinical misconception that must be explicitly addressed",
        modelWording: "Conduct a formal four-domain capacity assessment in response to this referral, making clear that the purpose is to determine genuine capacity, not to overturn a choice the team finds difficult to understand",
        keywords: ["capacity assessment", "four domains", "formal", "capacitous", "understanding", "retain", "weigh", "communicate"],
      },
      {
        id: "s2",
        name: "Capacity appears intact — articulate, consistent, values-grounded refusal",
        category: "capacity",
        severity: "critical",
        clueInStem: "Arthur gives an articulate account of his diagnosis and prognosis and explains the risks and benefits of both options in accurate detail; his decision has been consistent over three months and is grounded in watching his wife die after a BMT",
        whyItMatters: "Missing this signal means the candidate has not documented that Arthur's refusal appears to meet all four capacity domains and is a values-congruent decision after three months of deliberation",
        modelWording: "Document that Arthur's refusal appears to be a capacitous, values-congruent decision — consistent, articulate, grounded in specific lived experience, and meeting all four capacity domains — requiring explicit documentation",
        keywords: ["capacity intact", "capacitous", "values", "consistent", "deliberation", "three months", "articulate", "four domains met"],
      },
      {
        id: "s3",
        name: "Depression — must be assessed, must not be assumed to invalidate refusal",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "his adult daughter says: 'He's depressed — you need to do something. He's not the person he used to be'",
        whyItMatters: "Missing this signal means the candidate has either over-pathologised normal grief as depression, or has failed to assess whether a genuine depressive episode might be impairing capacity through hopelessness",
        modelWording: "Assess Arthur for major depressive disorder, distinguishing it from adjustment disorder and anticipatory grief, and determine whether any depressive episode is impairing capacity through hopelessness rather than assuming depression from sadness alone",
        keywords: ["depression", "assess", "major depressive", "not assume", "grief", "adjustment", "does not invalidate", "nihilistic"],
      },
      {
        id: "s4",
        name: "Capacitous refusal is legally and ethically binding",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "Arthur has refused BMT consistently over three months with an articulate, values-grounded account",
        whyItMatters: "Missing this signal means the candidate has not recognised the legal and ethical bindingness of a capacitous refusal and may recommend treatment override that is both unlawful and unethical",
        relatedLegal: "Common law right to refuse treatment; Medical Treatment Act; autonomy principle in bioethics",
        modelWording: "Recognise that if Arthur is found to have capacity, his refusal of BMT is legally and ethically binding, and redirect the clinical team from persuasion to supporting his decision with optimal palliative care",
        keywords: ["legally binding", "right to refuse", "capacitous", "autonomy", "binding", "cannot override", "legal right"],
      },
      {
        id: "s5",
        name: "Daughter's distress — address compassionately, separately from capacity",
        category: "family_carer",
        severity: "important",
        clueInStem: "his adult daughter is tearful and tells you 'He's depressed — you need to do something'",
        whyItMatters: "Missing this signal means the candidate has not addressed the daughter's distress compassionately and separately, or has allowed her grief-driven wish to override her father's autonomous capacitous decision",
        modelWording: "Speak with Arthur's daughter separately, acknowledge her distress compassionately, and explain what capacity means and that her father's decision — however painful — is his to make and cannot be overridden",
        keywords: ["daughter", "distress", "acknowledge", "separate", "compassionate", "explain capacity", "his decision"],
      },
      {
        id: "s6",
        name: "Team education — unwanted decision ≠ impaired capacity",
        category: "governance",
        severity: "important",
        clueInStem: "the oncology team's basis for the referral is that they 'cannot understand why someone would say no'",
        whyItMatters: "Missing this signal means the candidate has not used this referral as a teaching opportunity to correct the common misconception that an unwanted decision implies impaired capacity",
        modelWording: "Provide clear written feedback to the oncology team that an unwanted decision is not evidence of impaired capacity, communicating Arthur's capacity assessment findings and the distinction between unwanted decisions and impaired capacity",
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
        clueInStem: "Daniel has named Martin as his target, identified where he parks, described that he has worked out a plan, and stated he has 'never been so certain about anything'",
        whyItMatters: "Missing this signal means the candidate has not recognised that a specific, planned threat to a named individual meets the duty-to-protect threshold and requires immediate action beyond therapeutic confidentiality",
        relatedLegal: "Duty to warn / duty to protect; Tarasoff principles as applied in Australian context; professional obligation to third party",
        modelWording: "Identify Daniel's specific, planned threat to a named individual with a known location as meeting the duty-to-protect threshold and as requiring professional and potentially legal action beyond the bounds of therapeutic confidentiality",
        keywords: ["specific threat", "named target", "identifiable", "duty to warn", "duty to protect", "tarasoff", "legal obligation", "credible"],
      },
      {
        id: "s2",
        name: "Confidentiality — explicitly limited in cases of serious threat to others",
        category: "ethics",
        severity: "critical",
        clueInStem: "Daniel says: 'you can't tell anyone, right? Doctor-patient confidentiality'",
        whyItMatters: "Missing this signal means the candidate has not explained to Daniel that medical confidentiality is not absolute and has either promised confidentiality that cannot be kept or taken external action without transparency",
        modelWording: "Explain to Daniel directly and honestly that medical confidentiality is not absolute and that a credible, specific threat to a named person creates an obligation that overrides it — before taking any external action",
        keywords: ["confidentiality", "not absolute", "overrides", "limits", "honest", "explain", "specific threat", "named"],
      },
      {
        id: "s3",
        name: "Assess mental state rigorously — euthymia does not exclude risk",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "Daniel says 'I know I sound crazy. I'm not manic' and presents as euthymic on mental state examination",
        whyItMatters: "Missing this signal means the candidate has been reassured by the absence of frank mania or psychosis rather than recognising that organised, premeditated violence in a euthymic state may carry higher lethality",
        modelWording: "Recognise that Daniel's euthymic state and absence of frank psychosis does not reduce the risk — organised, premeditated violence in a euthymic state may represent a higher-lethality risk than impulsive violence in acute psychosis",
        keywords: ["euthymic", "not manic", "premeditated", "organised", "euthymia does not exclude", "purposeful", "higher risk"],
      },
      {
        id: "s4",
        name: "Immediate action — de-escalate, explore, determine plan",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "Daniel says 'I've thought about what I'll use' and 'I've never been so certain about anything'",
        whyItMatters: "Missing this signal means the candidate has not directly explored the plan in sufficient detail or attempted the therapeutic de-escalation that is both clinically appropriate and ethically required before any external action",
        modelWording: "Engage Daniel therapeutically by exploring the grievance, acknowledging the injustice he feels, and asking directly what he has worked out and what he intends to use — therapeutic de-escalation is required before any external action",
        keywords: ["de-escalate", "explore", "plan", "what will use", "therapeutic", "engage", "directly address", "grievance"],
      },
      {
        id: "s5",
        name: "Protective action — warn Martin, contact police if imminent",
        category: "governance",
        severity: "critical",
        clueInStem: "Daniel has named Martin, identified where he parks, and has expressed certainty and a plan",
        whyItMatters: "Missing this signal means the candidate has not identified the specific protective actions required if therapeutic de-escalation is unsuccessful — including warning Martin or notifying police",
        relatedLegal: "Police notification; victim warning; legal basis for breach of confidentiality",
        modelWording: "Contact police and potentially warn Martin directly if therapeutic de-escalation is unsuccessful, documenting all clinical reasoning and consulting the medical defence organisation regarding the specific duty-to-protect notification framework",
        keywords: ["warn", "police", "contact", "protective action", "martin", "notify", "imminent"],
      },
      {
        id: "s6",
        name: "Therapeutic relationship — transparency before action",
        category: "ethics",
        severity: "important",
        clueInStem: "Daniel says: 'I'm telling you because I trust you'",
        whyItMatters: "Missing this signal means the candidate has taken external action without telling Daniel first, which damages the therapeutic relationship unnecessarily and violates the principle of transparency that the relationship was built on",
        modelWording: "Tell Daniel clearly what you must do and why before taking any external action, as transparency about obligations — not covert reporting — is what maintains the therapeutic integrity of the relationship he trusted with this disclosure",
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
