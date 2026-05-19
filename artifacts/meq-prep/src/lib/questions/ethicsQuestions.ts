import { QuizStem } from "../quizData";

export const ETH_STEMS: QuizStem[] = [
  {
    id: "ETH-001",
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
    modelAnswer: `Capacity:

* Assess decision-specific capacity to refuse valve surgery.
* Confirm he understands condition, proposed surgery, benefits, risks, alternatives and likely outcomes without surgery.
* If he can weigh death against ICU burden, refusal is valid.

Clinical:

* Assess depression, delirium, grief and demoralisation.
* Do not assume bereavement invalidates decision.

Ethics/family:

* Capacity assessment must not be outcome-driven.
* Explain to family that capacitous refusal of life-saving treatment must be respected.
* Support family distress.

Cultural/spiritual:

* Explore spiritual values and offer chaplaincy.

Governance:

* Document reasoning and consider ethics/legal consultation given legal threats.`,
  },
  {
    id: "ETH-002",
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
    modelAnswer: `Immediate risk:

* Treat as high risk to an identifiable victim due to delusional belief, address-seeking, threat and weapon access.
* Do not rely on confidentiality to avoid action.

Ethics/legal:

* Explain confidentiality limits.
* Disclose only necessary information to police and/or relevant parties to manage serious risk, according to law and policy.
* Consider duty to protect/warn.

Clinical:

* Assess psychotic relapse, medication cessation, alcohol use, weapon access and capacity for safety planning.
* Consider urgent MHA assessment and treatment.

Collateral/MDT:

* Use case manager and sister collateral.
* Liaise with police, team leader and governance as needed.

Documentation:

* Record threat, victim, risk formulation, confidentiality reasoning, disclosures and treatment plan.`,
  },
  {
    id: "ETH-003",
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
    modelAnswer: `Immediate safety:

* Ensure Dr K is removed from unsupervised clinical duties pending fitness-for-duty assessment.
* Review the patient who received IM sedation and ensure monitoring/adverse event review.

Governance:

* Preserve records/CCTV and incident report.
* Investigate factual sequence including apparent false documentation.
* Consider mandatory notification if threshold met.

Ethics/professionalism:

* Offer Dr K support, occupational health and procedural fairness.
* Do not conceal unsafe practice to protect career or workforce.

Team:

* Support nurses who raised concerns.
* Address hierarchy and speaking-up culture.

Documentation:

* Record facts, actions, patient review, reporting rationale and support offered.`,
  },
  {
    id: "ETH-004",
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
    modelAnswer: `Immediate containment:

* Stop unsupervised registrar contact with the patient pending review.
* Assess patient safety, self-harm risk and need for urgent support.

Governance:

* Investigate boundary breach and missing documentation.
* Reconstruct factual chronology without retrospective false notes.
* Escalate to training director/service governance and consider regulatory obligations depending on findings.

Patient care:

* Provide transparent, trauma-informed explanation to patient.
* Arrange safe transfer/handover with containment of abandonment/self-harm risk.

Registrar:

* Meet registrar, clarify boundaries, assess insight and consider remediation or removal from therapy duties.

Ethics:

* Do not quietly transfer to protect fellowship application.
* Document actions, risk, governance escalation and patient support.`,
  },
  {
    id: "ETH-005",
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
    modelAnswer: `Immediate governance:

* Treat as a privacy/confidentiality breach because the patient is identifiable.
* Preserve evidence; do not delete screenshots.
* Follow privacy incident reporting and social media policy.

Patient/whānau:

* Consider open disclosure with patient and whānau in a culturally safe way.
* Acknowledge harm and rebuild trust, especially given involuntary admission.

Registrar:

* Remove/ensure deletion of public post through proper process.
* Meet registrar, address minimisation, assess insight and escalate to training/service governance.
* Consider remediation or regulatory notification depending on severity and policy.

Systems:

* Do not handle quietly to avoid complaint.
* Document actions, reporting, disclosure plan and supervision response.`,
  },
];
