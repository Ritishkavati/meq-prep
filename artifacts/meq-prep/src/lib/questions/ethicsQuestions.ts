import type { QuizStem } from "../quizData";

export const ETH_STEMS: QuizStem[] = [
  {
    id: "ETH-001",
    questionNumber: "MEQ-110",
    topic: "ethics",
    difficulty: "consultant",
    title: "Capacitous refusal of life-saving treatment and family pressure",
    candidateRole: "Consultant psychiatrist, consultation-liaison ethics support",
    setting: "Cardiology ward",
    stem: `You are the consultant psychiatrist asked to assess Mr Roberts, a 79-year-old man with severe aortic stenosis who is refusing urgent valve surgery.

Mr Roberts says, "I understand I may die, but I do not want my last weeks spent in ICU." His daughter says, "He is depressed since Mum died, so this can't be his real decision." His son threatens legal action if surgery is not performed.

Mr Roberts is a retired pastor and says he has "made peace with dying." The cardiologist says surgery offers a reasonable chance of survival but carries high risk of stroke and prolonged ventilation. The family asks you to find him incapable so they can consent.`,
    totalMarks: 22,
    signals: [
      { id: "s1", name: "Urgent valve refusal is a high-stakes capacity decision", category: "capacity", severity: "critical", clueInStem: "You are the consultant psychiatrist asked to assess Mr Roberts, a 79-year-old man with severe aortic stenosis who is refusing urgent valve surgery.", whyItMatters: "Missing this signal means the candidate treats a potentially life-saving refusal as a family dispute rather than a decision-specific capacity assessment.", modelWording: "Assess capacity decision-specifically because refusal of urgent valve surgery may be life-shortening and needs defensible reasoning.", keywords: ["capacity", "valve surgery", "refusal", "aortic stenosis"] },
      { id: "s2", name: "Values-based refusal may be valid", category: "ethics", severity: "critical", clueInStem: "Mr Roberts says, \"I understand I may die, but I do not want my last weeks spent in ICU.\"", whyItMatters: "Missing this signal means the candidate may override an informed and values-based refusal simply because death is possible.", modelWording: "Respect a capacitous refusal if he understands death risk and is weighing it against ICU burden.", keywords: ["ICU", "die", "autonomy", "values"] },
      { id: "s3", name: "Bereavement and depression need assessment, not presumption", category: "diagnosis_formulation", severity: "important", clueInStem: "His daughter says, \"He is depressed since Mum died, so this can't be his real decision.\"", whyItMatters: "Missing this signal means family grief concerns are either dismissed or accepted as proof of incapacity without assessment.", modelWording: "Assess depression, grief and demoralisation because bereavement may influence but does not automatically invalidate refusal.", keywords: ["depression", "bereavement", "grief", "capacity"] },
      { id: "s4", name: "Legal threat should not change clinical opinion", category: "governance", severity: "important", clueInStem: "His son threatens legal action if surgery is not performed.", whyItMatters: "Missing this signal means fear of complaint or litigation may distort an independent capacity opinion.", modelWording: "Document carefully and seek ethics or legal support because legal threats require governance support, not outcome-driven assessment.", keywords: ["legal action", "documentation", "governance"] },
      { id: "s5", name: "Pastoral identity may support settled end-of-life values", category: "cultural_safety", severity: "important", clueInStem: "Mr Roberts is a retired pastor and says he has \"made peace with dying.\"", whyItMatters: "Missing this signal means spiritual values relevant to his decision are ignored or pathologised.", modelWording: "Explore his pastoral and spiritual values because they may explain a coherent acceptance of death.", keywords: ["pastor", "spiritual", "made peace", "dying"] },
      { id: "s6", name: "Cardiology information must be balanced and understood", category: "physical_health", severity: "important", clueInStem: "The cardiologist says surgery offers a reasonable chance of survival but carries high risk of stroke and prolonged ventilation.", whyItMatters: "Missing this signal means capacity may be assessed without ensuring he understands both benefits and burdens of surgery.", modelWording: "Confirm balanced medical understanding because he must appreciate survival chance, stroke risk, ventilation and the alternative course.", keywords: ["stroke", "ventilation", "cardiology", "benefits", "burdens"] },
      { id: "s7", name: "Family request to find incapacity is ethically unsafe", category: "ethics", severity: "critical", clueInStem: "The family asks you to find him incapable so they can consent.", whyItMatters: "Missing this signal means capacity assessment is misused to achieve the family's preferred treatment outcome.", modelWording: "Maintain independence because capacity assessment must answer the clinical question, not enable substitute consent desired by family.", keywords: ["find him incapable", "family", "substitute consent", "independence"] },
    ],
    priorityOrder: { urgent: ["s1", "s2", "s7"], secondary: ["s3", "s4", "s5", "s6"], lowYield: [] },
    modelAnswer: `Mr Roberts' refusal requires a careful decision-specific capacity assessment, not a family vote. He is refusing urgent valve surgery for severe aortic stenosis, and the outcome may be death, but a capacitous adult can refuse life-saving treatment.

His statement, "I understand I may die, but I do not want my last weeks spent in ICU," is a coherent values-based statement. I would test whether he understands the condition, the proposed surgery, the chance of survival, the risk of stroke and prolonged ventilation, the likely course without surgery and palliative options. If he can understand, retain, use and weigh that information, his refusal should be respected.

The daughter's concern that he has been depressed since his wife died is clinically relevant but not determinative. I would assess depression, grief, demoralisation, delirium and cognition, while avoiding the assumption that acceptance of death is pathological. His identity as a retired pastor and statement that he has made peace with dying may represent settled spiritual values.

The family's request that I find him incapable so they can consent is ethically unsafe. Capacity assessment must not be outcome-driven or used to resolve family distress. If he has capacity, his children cannot consent for him; if he lacks capacity, substitute decisions should be based on his values and best interests, not simply the family's wish for surgery.

Because the son threatens legal action, I would document the assessment carefully and consider ethics or legal consultation. That support should protect transparent decision-making, not pressure the clinical opinion.`,
  },
  {
    id: "ETH-002",
    questionNumber: "MEQ-111",
    topic: "ethics",
    difficulty: "consultant",
    title: "Confidentiality versus duty to warn an identified victim",
    candidateRole: "Consultant psychiatrist, community mental health service",
    setting: "Outpatient review in community clinic",
    stem: `You are the consultant psychiatrist reviewing Daniel, a 36-year-old man with paranoid schizophrenia.

Daniel says, "My former manager planted cameras in my walls and I know where he lives." He adds, "If police won't act, I will sort him out myself." He refuses permission for you to contact anyone and says, "If you tell him, I will never speak to services again."

His case manager reports Daniel stopped depot medication two months ago and has been searching the manager's address online. Daniel's sister says he has been drinking heavily and carrying a hunting knife. The team asks whether confidentiality prevents warning police or the former manager.`,
    totalMarks: 22,
    signals: [
      { id: "s1", name: "Persecutory delusion identifies a specific victim", category: "risk_others", severity: "critical", clueInStem: "Daniel says, \"My former manager planted cameras in my walls and I know where he lives.\"", whyItMatters: "Missing this signal means the candidate has not recognised a foreseeable risk to a named or identifiable target.", modelWording: "Treat the former manager as an identifiable potential victim because Daniel links persecutory belief with knowledge of his address.", keywords: ["former manager", "cameras", "address", "victim"] },
      { id: "s2", name: "Threat shows intent to act if police do not", category: "risk_others", severity: "critical", clueInStem: "He adds, \"If police won't act, I will sort him out myself.\"", whyItMatters: "Missing this signal means an explicit threat is minimised as psychotic talk rather than potential action.", modelWording: "Escalate protective action because Daniel is describing self-directed retaliation if authorities do not act.", keywords: ["sort him out", "threat", "police", "violence"] },
      { id: "s3", name: "Alliance concern does not remove confidentiality limits", category: "ethics", severity: "critical", clueInStem: "He refuses permission for you to contact anyone and says, \"If you tell him, I will never speak to services again.\"", whyItMatters: "Missing this signal means therapeutic alliance is allowed to override serious foreseeable harm to another person.", modelWording: "Explain confidentiality limits because serious risk to an identifiable person may require proportionate disclosure.", keywords: ["confidentiality", "permission", "services", "disclosure"] },
      { id: "s4", name: "Depot cessation suggests psychotic relapse", category: "collateral", severity: "important", clueInStem: "His case manager reports Daniel stopped depot medication two months ago and has been searching the manager's address online.", whyItMatters: "Missing this signal means relapse and target-seeking behaviour are not integrated into risk formulation.", modelWording: "Use case-manager collateral because depot cessation and address searching show escalating relapse-linked risk.", keywords: ["depot", "case manager", "address", "relapse"] },
      { id: "s5", name: "Online address searching increases imminence", category: "immediate_safety", severity: "critical", clueInStem: "His case manager reports Daniel stopped depot medication two months ago and has been searching the manager's address online.", whyItMatters: "Missing this signal means preparatory behaviour toward the victim is overlooked.", modelWording: "Treat address searching as preparatory behaviour because it increases proximity and imminence of harm.", keywords: ["searching address", "preparatory", "imminent"] },
      { id: "s6", name: "Alcohol and knife carrying amplify violence capability", category: "substance_use", severity: "critical", clueInStem: "Daniel's sister says he has been drinking heavily and carrying a hunting knife.", whyItMatters: "Missing this signal means disinhibition and weapon capability are not factored into the duty-to-protect decision.", modelWording: "Escalate urgently because heavy drinking and carrying a hunting knife increase capability and disinhibition.", keywords: ["drinking", "hunting knife", "weapon", "alcohol"] },
      { id: "s7", name: "Police or victim warning requires minimum necessary disclosure", category: "governance", severity: "important", clueInStem: "The team asks whether confidentiality prevents warning police or the former manager.", whyItMatters: "Missing this signal means the team may either over-disclose or fail to protect because it has not applied a proportionality framework.", modelWording: "Use minimum necessary disclosure because confidentiality may yield only to the extent needed for safety.", keywords: ["police", "former manager", "warning", "minimum necessary"] },
    ],
    priorityOrder: { urgent: ["s1", "s2", "s3", "s5", "s6"], secondary: ["s4", "s7"], lowYield: [] },
    modelAnswer: `Daniel's case creates a clear duty-to-protect dilemma. He has paranoid schizophrenia and says his former manager planted cameras in his walls and that he knows where the manager lives. That identifies a specific potential victim, not a vague risk to the public.

The risk is made more serious by his statement, "If police won't act, I will sort him out myself." The case manager's report that he stopped depot medication two months ago and has been searching the manager's address online suggests relapse and preparatory behaviour. His sister's report of heavy drinking and carrying a hunting knife adds disinhibition and weapon capability.

I would explain to Daniel that confidentiality has limits when there is serious risk to an identifiable person. His threat to disengage from services matters, but it cannot prevent proportionate protective action if serious harm is foreseeable.

The disclosure should be lawful and limited to what is necessary. I would involve senior service governance and police, and consider warning the former manager through appropriate channels if needed. I would document what was disclosed, to whom, why, and why less intrusive options were insufficient.

Clinically, I would urgently reassess mental state, medication, alcohol use, weapon access, proximity to the manager and willingness for voluntary treatment. If mental illness is driving serious risk and he refuses care, Mental Health Act assessment should be considered.`,
  },
  {
    id: "ETH-003",
    questionNumber: "MEQ-112",
    topic: "ethics",
    difficulty: "consultant",
    title: "Impaired colleague, mandatory reporting and patient safety",
    candidateRole: "Consultant psychiatrist, clinical director",
    setting: "Public mental health service after-hours incident review",
    stem: `You are the clinical director of a public mental health service.

Nursing staff report that Dr K, a consultant psychiatrist, appeared intoxicated during an evening shift and ordered IM sedation for a patient without reviewing them. A nurse says, "I was afraid to challenge him because he signs our performance reviews." Dr K later documented, "patient reviewed, clinically indicated," but CCTV shows he did not enter the seclusion area.

Dr K tells you, "I'm going through a divorce; please don't destroy my career." The hospital executive asks whether this can be handled quietly because "we cannot afford another consultant vacancy."`,
    totalMarks: 22,
    signals: [
      { id: "s1", name: "Possible intoxicated practice creates patient-safety risk", category: "immediate_safety", severity: "critical", clueInStem: "Nursing staff report that Dr K, a consultant psychiatrist, appeared intoxicated during an evening shift and ordered IM sedation for a patient without reviewing them.", whyItMatters: "Missing this signal means a potentially impaired consultant may continue unsafe practice.", modelWording: "Protect patients immediately because possible intoxication and sedation orders without review create serious clinical risk.", keywords: ["intoxicated", "IM sedation", "patient safety"] },
      { id: "s2", name: "Sedated patient needs review", category: "physical_health", severity: "critical", clueInStem: "Nursing staff report that Dr K, a consultant psychiatrist, appeared intoxicated during an evening shift and ordered IM sedation for a patient without reviewing them.", whyItMatters: "Missing this signal means harm from IM sedation may go undetected.", modelWording: "Review the affected patient and medication chart because sedation without medical review may have caused harm.", keywords: ["sedation", "review", "medication chart"] },
      { id: "s3", name: "Hierarchy suppressed nursing challenge", category: "mdt_conflict", severity: "important", clueInStem: "A nurse says, \"I was afraid to challenge him because he signs our performance reviews.\"", whyItMatters: "Missing this signal means a power imbalance that silences safety escalation remains unaddressed.", modelWording: "Protect and support speaking up because performance-review power suppressed a legitimate safety challenge.", keywords: ["performance reviews", "challenge", "hierarchy"] },
      { id: "s4", name: "Documentation appears false against CCTV", category: "governance", severity: "critical", clueInStem: "Dr K later documented, \"patient reviewed, clinically indicated,\" but CCTV shows he did not enter the seclusion area.", whyItMatters: "Missing this signal means possible dishonest documentation is treated as a minor note discrepancy.", modelWording: "Investigate and preserve evidence because the clinical record may falsely state that the patient was reviewed.", keywords: ["patient reviewed", "CCTV", "false documentation"] },
      { id: "s5", name: "Divorce and career plea require support without concealment", category: "ethics", severity: "important", clueInStem: "Dr K tells you, \"I'm going through a divorce; please don't destroy my career.\"", whyItMatters: "Missing this signal means the response either lacks compassion or lets personal stress suppress governance obligations.", modelWording: "Offer occupational health support while making clear that patient safety and reporting obligations cannot be avoided.", keywords: ["divorce", "career", "support", "occupational health"] },
      { id: "s6", name: "Executive workforce pressure must not hide unsafe practice", category: "system_pressure", severity: "important", clueInStem: "The hospital executive asks whether this can be handled quietly because \"we cannot afford another consultant vacancy.\"", whyItMatters: "Missing this signal means workforce shortage becomes a reason to conceal impaired practice.", modelWording: "Resist quiet handling because workforce pressure cannot override patient safety, transparency and notification duties.", keywords: ["handled quietly", "consultant vacancy", "executive"] },
      { id: "s7", name: "Mandatory reporting threshold must be considered", category: "governance", severity: "critical", clueInStem: "Nursing staff report that Dr K, a consultant psychiatrist, appeared intoxicated during an evening shift and ordered IM sedation for a patient without reviewing them.", whyItMatters: "Missing this signal means possible impaired practice with substantial risk may not be notified.", modelWording: "Consider mandatory notification because suspected impairment during clinical care may have created substantial patient risk.", keywords: ["mandatory reporting", "impairment", "notification"] },
    ],
    priorityOrder: { urgent: ["s1", "s2", "s4", "s7"], secondary: ["s3", "s5", "s6"], lowYield: [] },
    modelAnswer: `This is first a patient-safety issue. Dr K reportedly appeared intoxicated during an evening shift and ordered IM sedation without reviewing the patient. I would ensure Dr K is not providing unsupervised care until fitness for duty is assessed, and I would review the affected patient, observations, medication chart and any adverse outcomes.

The documentation concern is serious. Dr K wrote "patient reviewed, clinically indicated," but CCTV shows he did not enter the seclusion area. I would preserve the record, CCTV and incident material, and investigate factually. False documentation is a professionalism and governance concern beyond a clinical error.

The nurse's statement that she was afraid to challenge him because he signs performance reviews shows a hierarchy problem. I would support staff who raised concerns, protect them from retaliation and address speaking-up culture.

Dr K deserves procedural fairness and support. His divorce may be relevant to impairment or wellbeing, and occupational health support should be offered. However, compassion does not mean concealing a safety incident or avoiding mandatory reporting if thresholds are met.

The executive request to handle it quietly because of consultant vacancies must be resisted. Workforce shortage cannot override patient safety, transparent governance and professional notification duties. I would document immediate safety actions, support offered, investigation steps and the rationale for any notification decision.`,
  },
  {
    id: "ETH-004",
    questionNumber: "MEQ-113",
    topic: "ethics",
    difficulty: "consultant",
    title: "Registrar boundary violation and undocumented sessions",
    candidateRole: "Consultant psychiatrist, psychotherapy supervisor",
    setting: "Community psychotherapy program",
    stem: `You are the consultant psychiatrist supervising a registrar in a psychotherapy clinic.

A patient emails you saying the registrar has been meeting her after hours at a café and "checking in because he understands me better than the service." The electronic record has no notes for the past six sessions. The registrar says, "She has abandonment issues; I was being flexible and therapeutic."

The patient is a 28-year-old woman with complex trauma and chronic self-harm. She says, "If he gets in trouble, I will cut myself." The service manager asks whether this can be resolved by transferring the patient quietly because the registrar is due to apply for fellowship.`,
    totalMarks: 22,
    signals: [
      { id: "s1", name: "After-hours café meetings breach the therapeutic frame", category: "ethics", severity: "critical", clueInStem: "A patient emails you saying the registrar has been meeting her after hours at a café and \"checking in because he understands me better than the service.\"", whyItMatters: "Missing this signal means a private special relationship is misread as therapeutic flexibility.", modelWording: "Stop unsupervised contact immediately because after-hours café meetings create boundary, dependency and exploitation risk.", keywords: ["café", "after hours", "boundary", "special relationship"] },
      { id: "s2", name: "Six undocumented sessions create governance risk", category: "governance", severity: "critical", clueInStem: "The electronic record has no notes for the past six sessions.", whyItMatters: "Missing this signal means there is no defensible record of therapy, risk or supervision.", modelWording: "Reconstruct facts without falsifying records because six undocumented sessions create serious clinical and medico-legal risk.", keywords: ["no notes", "six sessions", "documentation"] },
      { id: "s3", name: "Registrar rationalises boundary breach as therapy", category: "governance", severity: "important", clueInStem: "The registrar says, \"She has abandonment issues; I was being flexible and therapeutic.\"", whyItMatters: "Missing this signal means poor professional insight is not addressed in supervision.", modelWording: "Challenge the rationalisation because abandonment issues require consistent boundaries, not secret or undocumented exceptions.", keywords: ["flexible", "therapeutic", "abandonment", "insight"] },
      { id: "s4", name: "Complex trauma and chronic self-harm increase transition risk", category: "risk_self", severity: "important", clueInStem: "The patient is a 28-year-old woman with complex trauma and chronic self-harm.", whyItMatters: "Missing this signal means boundary repair may occur without anticipating heightened distress and self-harm.", modelWording: "Plan trauma-informed transition because complex trauma and chronic self-harm increase risk during boundary containment.", keywords: ["complex trauma", "chronic self-harm", "transition"] },
      { id: "s5", name: "Self-harm threat must be managed without blocking governance", category: "risk_self", severity: "critical", clueInStem: "She says, \"If he gets in trouble, I will cut myself.\"", whyItMatters: "Missing this signal means self-harm threat either paralyses necessary action or is dismissed as manipulation.", modelWording: "Assess and safety-plan the self-harm threat because governance must proceed with clinical containment.", keywords: ["cut myself", "self-harm", "governance", "containment"] },
      { id: "s6", name: "Quiet transfer would conceal harm", category: "system_pressure", severity: "critical", clueInStem: "The service manager asks whether this can be resolved by transferring the patient quietly because the registrar is due to apply for fellowship.", whyItMatters: "Missing this signal means the service colludes with concealment and abandons the patient without learning.", modelWording: "Reject quiet transfer because transparent governance, patient support and safe handover are required.", keywords: ["quietly", "transfer", "fellowship", "concealment"] },
      { id: "s7", name: "Training and regulatory obligations must be considered", category: "governance", severity: "important", clueInStem: "The service manager asks whether this can be resolved by transferring the patient quietly because the registrar is due to apply for fellowship.", whyItMatters: "Missing this signal means career impact suppresses training remediation or notification duties.", modelWording: "Consider training and regulatory notification because fellowship timing cannot override patient safety and professional conduct obligations.", keywords: ["fellowship", "training", "notification", "remediation"] },
    ],
    priorityOrder: { urgent: ["s1", "s2", "s5", "s6"], secondary: ["s3", "s4", "s7"], lowYield: [] },
    modelAnswer: `This appears to be a serious boundary breach, not therapeutic flexibility. The registrar has been meeting the patient after hours at a café and creating a special relationship in which he understands her better than the service. I would stop unsupervised contact immediately and arrange senior clinical support for the patient.

The missing documentation is a separate governance failure. There are no notes for the past six sessions, so risk, therapy content, boundaries and supervision cannot be reviewed. I would preserve emails and appointment records, ask for a factual chronology, and ensure no retrospective fabrication occurs.

The registrar's explanation that the patient has abandonment issues and he was being flexible shows poor professional judgement. For a patient with complex trauma, blurred boundaries may intensify dependency and make later transition more dangerous.

The patient's statement, "If he gets in trouble, I will cut myself," must be taken seriously without allowing it to block governance. I would assess current risk, create a safety plan and arrange a trauma-informed transfer of care with transparent explanation.

The service manager's suggestion of quiet transfer because the registrar is applying for fellowship is unacceptable. Patient safety, training remediation and possible regulatory or employer notification must be considered. Career impact cannot justify concealment.`,
  },
  {
    id: "ETH-005",
    questionNumber: "MEQ-114",
    topic: "ethics",
    difficulty: "consultant",
    title: "Social media privacy breach by registrar",
    candidateRole: "Consultant psychiatrist, training supervisor",
    setting: "Acute inpatient unit governance meeting",
    stem: `You are the consultant supervisor of a Stage 2 registrar.

A nurse shows you a social media post by the registrar: "Another night with a manic influencer who thinks the Queen follows her TikTok." Staff recognise the patient, a 22-year-old Māori woman admitted involuntarily yesterday. The post does not name her but includes enough details for ward staff to identify her.

The registrar says, "It was anonymous and I was just venting." The patient's whānau are already distrustful of the admission and have said, "You people are making fun of her." The service manager asks you to delete screenshots and handle it informally because "we don't need another complaint."`,
    totalMarks: 22,
    signals: [
      { id: "s1", name: "Social media post is identifiable despite no name", category: "governance", severity: "critical", clueInStem: "The post does not name her but includes enough details for ward staff to identify her.", whyItMatters: "Missing this signal means privacy breach is dismissed because the patient's name was not used.", modelWording: "Treat this as a privacy breach because identifiability, not naming, determines confidentiality risk.", keywords: ["privacy", "identifiable", "social media", "confidentiality"] },
      { id: "s2", name: "Post content is mocking and stigmatising", category: "ethics", severity: "critical", clueInStem: "A nurse shows you a social media post by the registrar: \"Another night with a manic influencer who thinks the Queen follows her TikTok.\"", whyItMatters: "Missing this signal means derogatory language about a patient is treated as harmless venting.", modelWording: "Address the mocking content directly because public ridicule of a patient breaches professionalism and trust.", keywords: ["manic influencer", "TikTok", "mocking", "professionalism"] },
      { id: "s3", name: "Māori involuntary admission increases cultural safety stakes", category: "cultural_safety", severity: "important", clueInStem: "Staff recognise the patient, a 22-year-old Māori woman admitted involuntarily yesterday.", whyItMatters: "Missing this signal means the cultural and coercive context of distrust is ignored.", modelWording: "Respond with cultural safety because a Māori woman admitted involuntarily is especially vulnerable to mistrust from disrespectful care.", keywords: ["Māori", "involuntary", "cultural safety"] },
      { id: "s4", name: "Registrar minimises breach as anonymous venting", category: "governance", severity: "important", clueInStem: "The registrar says, \"It was anonymous and I was just venting.\"", whyItMatters: "Missing this signal means lack of insight and professionalism are not addressed.", modelWording: "Challenge the registrar's minimisation because anonymous venting is not acceptable when a patient is identifiable.", keywords: ["anonymous", "venting", "insight"] },
      { id: "s5", name: "Whānau distrust shows harm already occurring", category: "family_carer", severity: "important", clueInStem: "The patient's whānau are already distrustful of the admission and have said, \"You people are making fun of her.\"", whyItMatters: "Missing this signal means the response ignores relational and cultural harm to patient and whānau.", modelWording: "Acknowledge and repair whānau trust because the breach confirms their fear that staff are making fun of her.", keywords: ["whānau", "making fun", "trust", "repair"] },
      { id: "s6", name: "Deleting screenshots would destroy evidence", category: "governance", severity: "critical", clueInStem: "The service manager asks you to delete screenshots and handle it informally because \"we don't need another complaint.\"", whyItMatters: "Missing this signal means the service may conceal evidence and obstruct a fair governance process.", modelWording: "Preserve screenshots and records because evidence must be secured for factual review and disclosure.", keywords: ["delete screenshots", "evidence", "governance"] },
      { id: "s7", name: "Complaint avoidance must not replace open disclosure", category: "system_pressure", severity: "critical", clueInStem: "The service manager asks you to delete screenshots and handle it informally because \"we don't need another complaint.\"", whyItMatters: "Missing this signal means reputational protection overrides patient rights and learning.", modelWording: "Reject informal concealment because complaint avoidance cannot override open disclosure and professional accountability.", keywords: ["complaint", "informally", "open disclosure", "accountability"] },
      { id: "s8", name: "Registrar needs training and conduct response", category: "governance", severity: "important", clueInStem: "You are the consultant supervisor of a Stage 2 registrar.", whyItMatters: "Missing this signal means the breach is managed as a one-off deletion rather than a training and professionalism issue.", modelWording: "Escalate through training supervision because a Stage 2 registrar needs remediation and possible formal conduct review.", keywords: ["Stage 2 registrar", "training", "remediation"] },
    ],
    priorityOrder: { urgent: ["s1", "s2", "s6", "s7"], secondary: ["s3", "s4", "s5", "s8"], lowYield: [] },
    modelAnswer: `This is a privacy and professionalism breach even though the patient's name was not used. The post contains enough detail for staff to identify a 22-year-old Māori woman admitted involuntarily yesterday. Identifiability is the issue, not whether the name appears.

The content is also mocking and stigmatising. Referring to the patient as a "manic influencer" and describing her beliefs on social media is public ridicule of a vulnerable patient. The registrar's explanation that it was anonymous and just venting shows poor insight.

The cultural context matters. The patient is Māori, has been admitted involuntarily and her whānau already believe staff are making fun of her. The post risks confirming that fear and worsening trust. I would plan open disclosure and repair with cultural support and senior involvement.

I would not delete screenshots or handle the matter informally. Evidence should be preserved, the incident reported through governance, and privacy and training processes followed. Complaint avoidance cannot justify concealment.

As supervisor, I would remove the post if possible through appropriate channels, ensure patient safety and confidentiality, support the nurse who raised it, and address the registrar through remediation and any required conduct or regulatory process. Documentation should record the breach, preservation of evidence, disclosure plan, cultural safety response and supervision actions.`,
  },
];
