import { QuizStem } from "../quizData";

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
      {
        id: "s1",
        name: "Capacitous refusal may be valid",
        category: "capacity",
        severity: "critical",
        clueInStem: "I understand I may die, but I do not want my last weeks spent in ICU.",
        whyItMatters: "A capacitous adult can refuse life-saving treatment; family distress does not override autonomy.",
        modelWording: "Assess capacity carefully; if he understands, appreciates and weighs death versus ICU burden, refusal should be respected.",
        keywords: ["capacity", "refusal", "life-saving treatment", "autonomy", "ICU", "aortic stenosis", "weighing", "informed refusal"],
      },
      {
        id: "s2",
        name: "Family pressure to misuse capacity assessment",
        category: "ethics",
        severity: "critical",
        clueInStem: "find him incapable",
        whyItMatters: "Capacity assessment must not be used to resolve family disagreement or force unwanted treatment.",
        modelWording: "Maintain independence and make a clinical capacity opinion, not an outcome-driven decision to satisfy family.",
        keywords: ["family pressure", "capacity misuse", "independence", "ethics", "legal threat", "autonomy", "substitute decision-making"],
      },
      {
        id: "s3",
        name: "Depression/grief differential",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "depressed since Mum died",
        whyItMatters: "Grief or depression may influence decision-making but should be assessed rather than presumed.",
        modelWording: "Assess depression, grief and demoralisation, but do not assume a values-based refusal is depressive incapacity.",
        keywords: ["depression", "grief", "bereavement", "demoralisation", "values-based refusal", "capacity", "old age"],
      },
      {
        id: "s4",
        name: "Spiritual/cultural values",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "made peace with dying.",
        whyItMatters: "Spiritual values may support a coherent refusal and should be respected.",
        modelWording: "Explore his pastoral/spiritual values as part of understanding the decision and offer chaplaincy if desired.",
        keywords: ["spiritual values", "pastor", "chaplaincy", "made peace", "death", "cultural safety", "values", "end-of-life"],
      },
      {
        id: "s5",
        name: "Balanced medical information",
        category: "physical_health",
        severity: "important",
        clueInStem: "high risk of stroke and prolonged ventilation.",
        whyItMatters: "Capacity requires understanding realistic benefits and burdens of surgery.",
        modelWording: "Confirm he has received balanced cardiology information about survival chance, stroke, ventilation and non-surgical outcomes.",
        keywords: ["cardiology", "stroke risk", "ventilation", "surgical risk", "benefits", "burdens", "medical information"],
      },
      {
        id: "s6",
        name: "Governance and legal threat",
        category: "governance",
        severity: "optional",
        clueInStem: "threatens legal action",
        whyItMatters: "Threats require clear documentation and possibly ethics/legal consultation.",
        modelWording: "Document capacity reasoning clearly and consider ethics/legal support due to family legal threat.",
        keywords: ["legal threat", "documentation", "ethics consultation", "governance", "defensible decision", "family conflict"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Mr Roberts' refusal of urgent valve surgery must be approached as a serious capacity assessment, not as a family vote. His statement, "I understand I may die, but I do not want my last weeks spent in ICU," is coherent and values-based. It shows he is not simply denying risk; he is weighing death against the burdens of intensive care. A capacitous adult can refuse life-saving treatment, and the consultant role is to protect that right if the decision is valid.

The daughter's concern that he is "depressed since Mum died" is clinically relevant, but it is not proof of incapacity. I would assess depression, grief, demoralisation, delirium and cognitive impairment, because these can affect appreciation and weighing. However, I would not assume that bereavement makes his refusal pathological. I would ask whether his wish is consistent over time, whether he still experiences pleasure or meaning, whether there is hopelessness unrelated to the cardiac illness, and whether he can discuss alternatives. A values-based end-of-life refusal can coexist with grief.

The medical facts must be clearly understood. The cardiologist says surgery offers a reasonable chance of survival but carries "high risk of stroke and prolonged ventilation." I would ensure Mr Roberts understands both the potential benefit and burdens of surgery, the likely course without surgery, palliative options and the uncertainty involved. Capacity requires realistic information, not a simplified family narrative of "surgery saves him."

The family's request to "find him incapable" is ethically problematic. Capacity assessment cannot be outcome-driven to resolve family distress or legal threats. I would explain to the son and daughter that if their father has capacity, they cannot consent on his behalf and clinicians cannot impose surgery. If he lacks capacity, then substitute decision-making would be based on his values and best interests, not simply on the family's wish to prolong life.

His identity as a retired pastor and his statement that he has "made peace with dying" should be explored as part of his values. I would offer chaplaincy or spiritual support if he wants it. This is not to persuade him either way, but to ensure the decision is supported and settled. Given the son's threat of legal action, I would document carefully and consider ethics or legal consultation, but I would not change my opinion because of pressure. The final consultant position is that respecting autonomy sometimes means allowing a person to refuse treatment others desperately want them to accept, provided the capacity assessment is robust and the decision is informed.`,
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
      {
        id: "s1",
        name: "Specific threat to identifiable victim",
        category: "risk_others",
        severity: "critical",
        clueInStem: "I know where he lives.",
        whyItMatters: "A specific identifiable victim with threat and address-seeking creates serious foreseeable harm.",
        modelWording: "Treat this as serious risk to an identifiable person requiring urgent protective action.",
        keywords: ["identified victim", "specific threat", "violence risk", "former manager", "address", "foreseeable harm", "duty to protect"],
      },
      {
        id: "s2",
        name: "Confidentiality may be overridden",
        category: "ethics",
        severity: "critical",
        clueInStem: "If you tell him, I will never speak to services again.",
        whyItMatters: "Therapeutic alliance matters but does not prevent disclosure when serious risk to others exists.",
        modelWording: "Explain confidentiality limits: serious risk to an identifiable person may require disclosure to police or others necessary for safety.",
        keywords: ["confidentiality", "duty to warn", "duty to protect", "serious risk", "therapeutic alliance", "disclosure", "police", "ethics"],
      },
      {
        id: "s3",
        name: "Medication non-adherence and relapse",
        category: "collateral",
        severity: "important",
        clueInStem: "stopped depot medication two months ago",
        whyItMatters: "Non-adherence increases psychotic intensity and violence risk.",
        modelWording: "Use collateral about depot cessation to support relapse formulation and urgent treatment review.",
        keywords: ["depot", "non-adherence", "psychotic relapse", "case manager", "collateral", "treatment review", "risk escalation"],
      },
      {
        id: "s4",
        name: "Weapon access",
        category: "immediate_safety",
        severity: "important",
        clueInStem: "carrying a hunting knife.",
        whyItMatters: "Weapon carriage indicates capability and imminent risk.",
        modelWording: "Escalate immediately due to weapon access, including police welfare/safety response where appropriate.",
        keywords: ["hunting knife", "weapon access", "immediate safety", "police", "violence capability", "risk escalation", "means"],
      },
      {
        id: "s5",
        name: "Substance use increases disinhibition",
        category: "substance_use",
        severity: "important",
        clueInStem: "drinking heavily",
        whyItMatters: "Alcohol increases impulsivity and lowers threshold for violence.",
        modelWording: "Assess alcohol use as a dynamic risk factor amplifying psychosis-linked violence risk.",
        keywords: ["alcohol", "drinking heavily", "disinhibition", "impulsivity", "dynamic risk", "violence", "substance use"],
      },
      {
        id: "s6",
        name: "MHA assessment",
        category: "mental_health_act",
        severity: "optional",
        clueInStem: "I will sort him out myself.",
        whyItMatters: "Psychotic threat plus risk to others may meet involuntary assessment criteria.",
        modelWording: "Consider urgent Mental Health Act assessment if mental disorder is driving serious risk and voluntary care is refused.",
        keywords: ["Mental Health Act", "involuntary assessment", "risk to others", "psychosis", "refusal", "urgent assessment"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Daniel's presentation creates a clear tension between confidentiality and protection of an identifiable victim. His statement, "My former manager planted cameras in my walls and I know where he lives," establishes both persecutory delusion and access to a specific target. The later statement, "If police won't act, I will sort him out myself," moves the concern from psychotic belief to potential action. This is not a vague risk to the public; it is a foreseeable risk to a named or identifiable person.

I would not be reassured by his refusal of permission to contact anyone or by his threat, "If you tell him, I will never speak to services again." Therapeutic alliance matters, and unnecessary disclosure can damage engagement. However, confidentiality has limits where there is serious risk to others. I would explain this to Daniel in plain language if safe: I will keep information private where possible, but I cannot keep threats to an identifiable person confidential if disclosure is necessary to prevent harm.

The collateral makes the risk more urgent. The case manager reports he stopped depot medication two months ago and has been searching the manager's address online. His sister says he has been "drinking heavily" and "carrying a hunting knife." These are dynamic risk factors: relapse, target-seeking, disinhibition and weapon access. I would immediately consider police involvement, welfare/safety response, and urgent mental health assessment. If mental illness is driving serious risk and he refuses voluntary care, I would consider Mental Health Act assessment.

The question is not whether to warn everyone, but what minimum disclosure is necessary and lawful. I would liaise with police and senior service governance, consider warning the former manager through appropriate channels if required, and document exactly what was disclosed and why. I would also assess whether there are workplace security measures, restraining orders or other protective steps. The aim is victim safety, not punishment of Daniel.

Clinically, I would assess mental state, insight, medication adherence, alcohol use, weapon access, proximity to the manager, plans, command hallucinations, and capacity to collaborate with safety. I would attempt engagement around medication restart or admission, but I would not allow engagement concerns to paralyse protective action. The defensible consultant response explicitly works through the tension: preserve confidentiality as far as possible, but override it proportionately where a specific, serious and foreseeable risk to an identifiable person exists.`,
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
      {
        id: "s1",
        name: "Patient safety from impaired practice",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "appeared intoxicated during an evening shift",
        whyItMatters: "Possible intoxicated practice creates immediate risk to patients and requires removal from unsafe duties pending assessment.",
        modelWording: "Prioritise patient safety by ensuring Dr K is not providing unsupervised clinical care until fitness for duty is assessed.",
        keywords: ["impaired colleague", "intoxicated", "fitness for duty", "patient safety", "clinical director", "unsafe practice", "consultant", "after-hours"],
      },
      {
        id: "s2",
        name: "False documentation",
        category: "governance",
        severity: "critical",
        clueInStem: "patient reviewed, clinically indicated",
        whyItMatters: "False documentation is a serious professionalism and medico-legal issue requiring escalation.",
        modelWording: "Address apparent false documentation as a serious governance and professionalism concern requiring factual investigation and escalation.",
        keywords: ["false documentation", "professionalism", "CCTV", "seclusion", "clinical record", "governance", "integrity", "medico-legal"],
      },
      {
        id: "s3",
        name: "Mandatory reporting consideration",
        category: "governance",
        severity: "important",
        clueInStem: "ordered IM sedation for a patient without reviewing them.",
        whyItMatters: "Impairment and unsafe care may meet mandatory reporting threshold depending on jurisdiction.",
        modelWording: "Consider mandatory notification if impairment or departure from accepted practice created substantial risk of harm.",
        keywords: ["mandatory reporting", "AHPRA", "substantial risk", "impaired practitioner", "unsafe sedation", "notification", "professional obligation"],
      },
      {
        id: "s4",
        name: "Hierarchy and staff fear",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "I was afraid to challenge him because he signs our performance reviews.",
        whyItMatters: "Power imbalance suppresses safety escalation and requires cultural/governance response.",
        modelWording: "Support staff who spoke up and address hierarchy-related barriers to safety escalation.",
        keywords: ["hierarchy", "speaking up", "staff fear", "performance reviews", "safety culture", "nursing staff", "power imbalance"],
      },
      {
        id: "s5",
        name: "Support for colleague without concealment",
        category: "ethics",
        severity: "important",
        clueInStem: "please don't destroy my career.",
        whyItMatters: "Compassion for impaired colleague must not override patient safety or statutory obligations.",
        modelWording: "Offer support and occupational health referral while making clear that patient safety and reporting duties cannot be avoided.",
        keywords: ["colleague support", "occupational health", "divorce", "compassion", "patient safety", "statutory duty", "ethics"],
      },
      {
        id: "s6",
        name: "Workforce pressure",
        category: "system_pressure",
        severity: "optional",
        clueInStem: "we cannot afford another consultant vacancy.",
        whyItMatters: "Workforce shortage cannot justify concealing unsafe practice.",
        modelWording: "Resist workforce-pressure minimisation and follow formal clinical governance processes.",
        keywords: ["workforce shortage", "consultant vacancy", "executive pressure", "handle quietly", "governance", "transparency", "patient safety"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Dr K's conduct must be treated as an immediate patient safety crisis, not a personality conflict or a single bad night. The nurse reports that she "appeared confused, smelled of alcohol, gave IM sedation without medical authorisation, and became verbally abusive when challenged." The ICU transfer of a patient after that medication event means there has been actual patient harm. I would not wait for investigation to conclude before acting on clinical safety. I would ensure Dr K is removed from unsupervised clinical duties immediately, pending fitness-for-duty assessment, and that the patients affected receive urgent medical review.

The CCTV footage and the false documentation are major governance issues. If Dr K documented something false to cover impaired practice, that is a serious professionalism and medico-legal breach beyond mere intoxication. I would preserve all records, secure CCTV footage, document the sequence of events factually, and initiate an internal incident investigation. I would not allow any record alteration or informal resolution that conceals the sequence of harm.

The service director's suggestion to "handle this quietly" and the request to not document formally are ethically unacceptable. Quiet resolution of an impaired clinician who harmed a patient protects the institution at the patient's expense. It may also expose the service to greater liability and breach mandatory reporting obligations. If a reasonable suspicion of health impairment or impaired practice exists, I have professional and possibly legal obligations to report through appropriate channels: the medical board's impaired practitioners pathway, the hospital's medical officer reporting processes, and clinical governance structures.

Dr K deserves procedural fairness. I would offer her access to occupational health and employee support, explain the process and her rights, and ensure she is treated as someone who may be unwell, not only as a misconduct matter. However, fairness does not mean avoiding mandatory reporting. If intoxication on duty and patient harm meet notification thresholds, they must be reported. I would document both that appropriate support was offered and that reporting obligations were followed.

The nurses who raised concerns must be supported and protected. A speaking-up culture does not survive if staff who report impaired colleagues are ignored or isolated. I would acknowledge their actions, debrief the team, address hierarchy concerns, and reinforce that patient safety reporting is expected and protected. My documentation would record the clinical event, patient harm review, immediate safety actions, incident notification, mandatory reporting decision and rationale, support offered to Dr K, and team debrief. The consultant response is not to minimise or manage quietly; it is to act transparently to protect patients and preserve institutional integrity.`,
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
      {
        id: "s1",
        name: "Boundary violation",
        category: "governance",
        severity: "critical",
        clueInStem: "meeting her after hours at a café",
        whyItMatters: "Out-of-setting, after-hours meetings create boundary violation, dependency and exploitation risk.",
        modelWording: "Treat after-hours café meetings as a serious boundary breach requiring immediate containment, supervision escalation and patient safety planning.",
        keywords: ["boundary violation", "after hours", "café", "psychotherapy", "registrar", "professional boundaries", "exploitation risk", "governance"],
      },
      {
        id: "s2",
        name: "Missing documentation",
        category: "governance",
        severity: "critical",
        clueInStem: "no notes for the past six sessions.",
        whyItMatters: "Undocumented therapy creates clinical risk, medico-legal risk and supervision failure.",
        modelWording: "Address absence of documentation as a serious clinical governance issue and reconstruct facts without falsifying records.",
        keywords: ["undocumented sessions", "clinical notes", "documentation failure", "medico-legal", "psychotherapy records", "governance", "supervision"],
      },
      {
        id: "s3",
        name: "Patient self-harm threat and abandonment risk",
        category: "risk_self",
        severity: "important",
        clueInStem: "If he gets in trouble, I will cut myself.",
        whyItMatters: "Boundary repair/transfer may acutely escalate self-harm risk and requires careful containment.",
        modelWording: "Assess and manage acute self-harm risk during boundary containment and transition of care.",
        keywords: ["self-harm", "abandonment", "transition risk", "complex trauma", "boundary repair", "risk assessment", "cut myself"],
      },
      {
        id: "s4",
        name: "Registrar rationalisation",
        category: "ethics",
        severity: "important",
        clueInStem: "I was being flexible and therapeutic.",
        whyItMatters: "Rationalising boundary breaches as therapeutic reflects impaired professional judgement.",
        modelWording: "Challenge the registrar's rationalisation and clarify that flexibility does not justify boundary violations.",
        keywords: ["rationalisation", "professional judgement", "flexible", "therapeutic", "ethics", "supervision", "psychotherapy boundaries"],
      },
      {
        id: "s5",
        name: "AHPRA/training notification consideration",
        category: "governance",
        severity: "important",
        clueInStem: "due to apply for fellowship.",
        whyItMatters: "Career impact cannot suppress reporting, remediation or patient safety obligations.",
        modelWording: "Consider training program, employer and regulatory notification obligations based on severity, risk and impairment concerns.",
        keywords: ["AHPRA", "training", "fellowship", "notification", "remediation", "professional conduct", "patient safety"],
      },
      {
        id: "s6",
        name: "Quiet transfer is unsafe",
        category: "system_pressure",
        severity: "optional",
        clueInStem: "transferring the patient quietly",
        whyItMatters: "Quiet transfer avoids governance learning and may abandon the patient without addressing harm.",
        modelWording: "Do not resolve by quiet transfer alone; ensure transparent governance, patient support and safe handover.",
        keywords: ["quiet transfer", "system pressure", "cover-up", "safe handover", "patient support", "governance", "service manager"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `The registrar's conduct appears to be a serious boundary breach, not therapeutic flexibility. Meeting a patient "after hours at a café" removes the therapy from its professional frame, creates secrecy, dependency and possible exploitation risk, and is especially concerning in a patient with complex trauma and chronic self-harm. I would immediately stop unsupervised contact between the registrar and the patient while the matter is reviewed, and I would arrange urgent clinical support for the patient so the boundary intervention does not feel like abandonment.

The absence of documentation is also serious. The record has "no notes for the past six sessions," which means there is no defensible account of therapy content, risk assessment, boundaries, transference/countertransference issues or treatment plan. I would not allow retrospective fabrication of notes. I would ask the registrar for a factual chronology, preserve emails and appointment records, and escalate to service governance and the training supervisor.

The registrar's explanation, "She has abandonment issues; I was being flexible and therapeutic," demonstrates poor professional judgement. Flexibility in psychotherapy does not mean private, undocumented, after-hours café meetings. In fact, for a patient with abandonment fears, blurred boundaries may intensify dependency and make later repair more dangerous. I would supervise the registrar firmly, assess insight, remove them from the case, and consider remediation, reporting or disciplinary processes depending on findings.

The patient's statement, "If he gets in trouble, I will cut myself," must be taken seriously but cannot be allowed to determine whether governance occurs. It shows acute self-harm risk during boundary repair. I would meet the patient with another senior clinician, validate distress, explain the need for safe professional boundaries, assess current risk, create a crisis plan and arrange a careful transfer of care. The response should be trauma-informed and transparent, not a quiet disappearance of the registrar.

The service manager's suggestion of "transferring the patient quietly" because the registrar is applying for fellowship is ethically wrong. Career impact does not justify concealment. I would consider obligations to the training program, employer and regulator depending on severity, exploitation risk and insight. My documentation would include patient safety actions, boundary concerns, missing notes, registrar discussion, governance escalation and the transition plan. The consultant task is to protect the patient without colluding with secrecy or allowing self-harm threats to block necessary professional action.`,
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
      {
        id: "s1",
        name: "Patient privacy breach",
        category: "governance",
        severity: "critical",
        clueInStem: "includes enough details for ward staff to identify her.",
        whyItMatters: "Identifiability, not naming, determines privacy risk; this is a serious breach.",
        modelWording: "Treat this as a privacy breach because the patient is identifiable despite not being named.",
        keywords: ["privacy breach", "social media", "identifiable patient", "confidentiality", "registrar", "inpatient", "governance"],
      },
      {
        id: "s2",
        name: "Cultural harm and whānau mistrust",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "You people are making fun of her.",
        whyItMatters: "The post reinforces mistrust and may damage culturally safe engagement with patient and whānau.",
        modelWording: "Acknowledge cultural harm and rebuild trust with the patient and whānau through transparent, respectful disclosure and repair.",
        keywords: ["Māori", "whānau", "cultural safety", "mistrust", "humiliation", "repair", "involuntary admission", "respect"],
      },
      {
        id: "s3",
        name: "Registrar minimisation",
        category: "ethics",
        severity: "important",
        clueInStem: "It was anonymous and I was just venting.",
        whyItMatters: "Minimisation indicates poor insight into confidentiality and professionalism.",
        modelWording: "Address registrar's minimisation and explain that venting online about identifiable patients is professional misconduct.",
        keywords: ["minimisation", "anonymous", "venting", "professionalism", "confidentiality", "social media policy", "insight", "misconduct"],
      },
      {
        id: "s4",
        name: "Evidence preservation",
        category: "governance",
        severity: "important",
        clueInStem: "delete screenshots",
        whyItMatters: "Destroying evidence undermines governance and transparency.",
        modelWording: "Do not delete screenshots; preserve evidence and follow privacy incident reporting processes.",
        keywords: ["evidence preservation", "screenshots", "delete", "incident reporting", "privacy process", "governance", "audit trail"],
      },
      {
        id: "s5",
        name: "Involuntary patient's vulnerability",
        category: "risk_vulnerable",
        severity: "important",
        clueInStem: "admitted involuntarily yesterday.",
        whyItMatters: "Involuntary admission increases power imbalance and vulnerability to humiliation or loss of trust.",
        modelWording: "Recognise heightened vulnerability due to involuntary admission and ensure patient support and advocacy.",
        keywords: ["involuntary admission", "vulnerability", "power imbalance", "advocacy", "patient rights", "support", "trauma-informed"],
      },
      {
        id: "s6",
        name: "Complaint avoidance pressure",
        category: "system_pressure",
        severity: "optional",
        clueInStem: "we don't need another complaint.",
        whyItMatters: "Complaint avoidance cannot override legal/privacy governance duties.",
        modelWording: "Resist pressure to handle informally; follow privacy, training and open disclosure processes.",
        keywords: ["complaint avoidance", "informal handling", "system pressure", "open disclosure", "privacy law", "training supervisor", "transparency"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `The registrar's social media post is a privacy and professionalism breach even though the patient is not named. The key phrase is that the post "includes enough details for ward staff to identify her." Identifiability is what matters. A 22-year-old Māori woman admitted involuntarily yesterday, described as a "manic influencer" with specific TikTok and Queen-related content, is recognisable to staff and potentially others. I would treat this as a reportable privacy incident and ensure the post is removed through proper process, while preserving evidence.

The cultural harm is not abstract. The whānau have already said, "You people are making fun of her." The post confirms and amplifies mistrust during an involuntary admission, where the patient is already vulnerable and subject to coercive power. I would arrange a culturally safe disclosure and repair process with the patient and whānau, involving Māori health support if available. The goal would be to acknowledge harm, explain what is being done, and rebuild trust without becoming defensive.

The registrar's explanation, "It was anonymous and I was just venting," shows minimisation and poor insight. Venting online about identifiable patients is not acceptable professional coping. I would meet with the registrar, address confidentiality, social media policy, cultural safety and professionalism, and escalate to training and service governance. Depending on policy and severity, regulatory notification or formal remediation may be required.

The service manager's request to "delete screenshots" and handle it informally because "we don't need another complaint" is a governance red flag. Deleting evidence would undermine transparency and could worsen medico-legal risk. I would preserve screenshots, complete privacy incident reporting, notify appropriate hospital privacy/governance staff and seek advice on disclosure obligations. Complaint avoidance cannot determine response.

My documentation would be factual: what was posted, how the patient was identifiable, what evidence was preserved, what disclosure occurred, what support was offered to patient and whānau, and what action was taken with the registrar. The consultant role is to protect patient dignity, especially for an involuntary Māori patient, while using the incident to strengthen professional culture rather than hide embarrassment.`,
  },
];
