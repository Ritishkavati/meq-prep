import { QuizStem } from "../quizData";

export const DOC_STEMS: QuizStem[] = [
  {
    id: "DOC-001",
    questionNumber: "MEQ-082",
    topic: "documentation",
    difficulty: "consultant",
    title: "Inadequate Discharge Summary — First Episode Psychosis",
    candidateRole: "Consultant psychiatrist, inpatient unit",
    setting: "Acute inpatient psychiatric unit, metropolitan hospital",
    stem: `You are the consultant psychiatrist on an acute inpatient unit. You receive a call from Dr Sarah Adeyemi, a GP, who is frustrated. Her patient Reza, a 34-year-old Iranian man, was discharged from your unit five days ago after a four-week admission for first episode schizophrenia. He has just presented to her clinic looking unwell.

Dr Adeyemi tells you: "The discharge summary doesn't tell me his diagnosis — it says 'psychotic disorder under investigation.' No medications, no doses, no follow-up plan, no case manager. I have no idea who to call if he deteriorates tonight."

You check the summary. Three paragraphs, written by the after-hours registrar at 11pm on the day of discharge. No consultant co-signature. Reza's wife called this morning — he has stopped his tablets and has been "acting strangely" since yesterday.

Outline the issues you would identify and the actions you would take. A list without justification will not be awarded marks.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Reza is deteriorating — immediate clinical review required",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "Reza has just presented to her clinic looking unwell",
        whyItMatters: "A patient five days post-discharge from first episode psychosis who is already deteriorating and non-adherent requires urgent review today — not a phone discussion. The post-discharge period carries the highest relapse risk.",
        modelWording: "Reza must be reviewed urgently today. I will arrange immediate community mental health contact or direct review — this is a potential relapse in the highest-risk post-discharge period for first episode psychosis.",
        keywords: ["urgent", "immediate review", "deteriorat", "relapse", "five days", "unwell", "not taking", "today", "clinical review"],
      },
      {
        id: "s2",
        name: "Discharge summary fails minimum clinical standards",
        category: "governance",
        severity: "critical",
        clueInStem: "doesn't tell me his diagnosis — it says psychotic disorder under investigation. No medications, no doses, no follow-up plan, no case manager",
        whyItMatters: "A discharge summary for first episode psychosis must contain working diagnosis, medications with doses, relapse indicators, safety plan, follow-up appointments, case manager contact, and emergency escalation. This summary fails every minimum standard and has directly contributed to Reza's deterioration.",
        modelWording: "The discharge summary fails minimum clinical standards — no working diagnosis, no medications, no follow-up plan, no case manager. I take responsibility. I will send a comprehensive addendum today.",
        keywords: ["inadequate", "minimum standard", "diagnosis", "medication", "follow-up", "case manager", "fails", "incomplete", "poor documentation"],
      },
      {
        id: "s3",
        name: "No consultant co-signature — supervision failure",
        category: "governance",
        severity: "critical",
        clueInStem: "written by the after-hours registrar at 11pm on the day of discharge. No consultant co-signature",
        whyItMatters: "Discharge summaries for complex psychiatric cases must be reviewed and co-signed by a consultant. An after-hours registrar writing an unsupervised discharge letter for first episode schizophrenia is a supervision failure.",
        modelWording: "A discharge summary for first episode psychosis written by an after-hours registrar without consultant co-signature is a supervision failure. Complex psychiatric discharges require consultant oversight regardless of time.",
        keywords: ["co-sign", "consultant review", "registrar", "unsupervised", "supervision", "after hours", "oversight"],
      },
      {
        id: "s4",
        name: "Medication non-adherence — urgent clinical priority",
        category: "risk_self",
        severity: "critical",
        clueInStem: "stopped his tablets and has been acting strangely since yesterday",
        whyItMatters: "Non-adherence in the first weeks after discharge from first episode psychosis is the primary driver of relapse. The discharge plan clearly failed to address adherence strategies.",
        modelWording: "Non-adherence five days post-discharge from first episode psychosis is a medical emergency — relapse risk is highest in the first weeks. Today's review must address adherence urgently, including consideration of depot antipsychotic.",
        keywords: ["non-adherence", "not taking", "stopped", "adherence", "relapse", "depot", "medication"],
      },
      {
        id: "s5",
        name: "GP relationship — acknowledge failure, send addendum today",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "Dr Adeyemi is frustrated and concerned",
        whyItMatters: "A GP without adequate discharge information is a patient safety risk. This relationship must be urgently repaired — the GP is Reza's primary community contact.",
        modelWording: "I will call Dr Adeyemi back, acknowledge the failure, and send a comprehensive addendum letter today with all missing clinical information.",
        keywords: ["apologise", "gp", "addendum", "letter today", "acknowledge", "responsible", "remedy", "call back"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4"],
      secondary: ["s5"],
      lowYield: [],
    },
    modelAnswer: `Immediate: Reza must be reviewed today — five days post-discharge, stopped medication, deteriorating. I will arrange urgent community mental health contact now.

Discharge summary failure: The letter fails every minimum standard. No diagnosis, no medications, no follow-up, no case manager. I take responsibility and will send a comprehensive addendum today.

GP: I will call Dr Adeyemi immediately, acknowledge the failure, and provide all missing information — working diagnosis, medications and doses, relapse indicators, case manager contact, outpatient appointment, and emergency escalation.

Supervision failure: After-hours registrar discharge letter for first episode psychosis without consultant co-signature is a supervision failure. This will be raised at the next governance meeting.

Adherence: Today's urgent review must address non-adherence — depot antipsychotic should be considered.`,
  },

  {
    id: "DOC-002",
    questionNumber: "MEQ-083",
    topic: "documentation",
    difficulty: "consultant",
    title: "Capacity Assessment Documentation — Life-Sustaining Treatment Refusal",
    candidateRole: "Consultation-liaison consultant psychiatrist",
    setting: "General medical ward, metropolitan hospital",
    stem: `You are the consultation-liaison consultant. During your ward round you review the previous day's notes. You find an entry from your registrar, Dr Claire Wu, following a bedside consultation for Mrs Irene Papageorgiou, a 78-year-old Greek-born woman who has been in Australia for 50 years and is fluent in English. Mrs Papageorgiou has metastatic bowel cancer and has refused her third cycle of chemotherapy.

Dr Wu's capacity assessment note reads in full: "Seen and assessed. Patient appears to understand her diagnosis. She said she doesn't want more chemo as she's tired of being sick. She seems to have capacity. Discussed with oncology — treatment will not proceed. Impression: capacity intact. Plan: discharge to palliative care."

No formal four-domain assessment is documented. The note does not state what information was provided to the patient, whether she retained and understood it, what the consequences of refusal were explained to be, or whether her decision is consistent with her values. There is no mention of the patient's cultural or spiritual background. The oncology team has proceeded with discharge planning on the basis of this note.

Outline the issues with this documentation and what you would do. A list without justification will not be awarded marks.`,
    totalMarks: 20,
    signals: [
      {
        id: "s1",
        name: "Four-domain capacity assessment absent — note is not legally defensible",
        category: "capacity",
        severity: "critical",
        clueInStem: "appears to understand her diagnosis. She seems to have capacity",
        whyItMatters: "A legally defensible capacity assessment must explicitly document all four domains: understanding information about the proposed treatment, retaining it, weighing it against personal values, and communicating a decision. Words like 'appears' and 'seems' are not documentation — they are impressions. This note would not withstand medico-legal scrutiny.",
        modelWording: "Dr Wu's note does not constitute a legally defensible capacity assessment. All four domains must be documented with specific evidence from the assessment: what information was given, what the patient demonstrated she understood and retained, how she weighed the decision against her values, and how she communicated her choice.",
        keywords: ["four domains", "understanding", "retain", "weigh", "communicat", "capacity assessment", "legally defensible", "four domain", "not documented", "inadequate"],
      },
      {
        id: "s2",
        name: "Information provided not documented — consent validity unknown",
        category: "capacity",
        severity: "critical",
        clueInStem: "The note does not state what information was provided to the patient",
        whyItMatters: "Capacity to refuse treatment depends on the patient having received accurate information about her diagnosis, prognosis, the proposed treatment, and the likely consequences of refusal. Without documenting what was explained, it is impossible to know whether her refusal was informed.",
        modelWording: "There is no documentation of what information Mrs Papageorgiou was given about her prognosis, the trajectory of untreated metastatic bowel cancer, or the alternatives to chemotherapy. Without this, her capacity to make an informed decision cannot be assessed.",
        keywords: ["information provided", "what was told", "prognosis", "consequences", "informed", "explained", "what information", "refusal informed"],
      },
      {
        id: "s3",
        name: "Discharge proceeding on invalid assessment — must be halted",
        category: "disposition",
        severity: "critical",
        clueInStem: "The oncology team has proceeded with discharge planning on the basis of this note",
        whyItMatters: "Discharge to palliative care based on an inadequate capacity assessment exposes the hospital and clinical team to significant medico-legal risk. The discharge must be paused until a proper capacity assessment is completed and documented.",
        modelWording: "Discharge to palliative care must be paused. I will conduct a full capacity assessment today and document it properly before discharge proceeds. I will inform the oncology team that the current documentation does not support a valid capacity determination.",
        keywords: ["halt discharge", "pause", "stop", "before discharge", "inform oncology", "not valid", "discharge delayed", "must not proceed"],
      },
      {
        id: "s4",
        name: "Cultural context not explored — Greek background, values-based decision",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "78-year-old Greek-born woman who has been in Australia for 50 years",
        whyItMatters: "A capacity assessment for a life-limiting decision must explore whether the decision is consistent with the patient's values, which may be shaped by cultural or spiritual background. Greek cultural traditions may influence views on dying, family involvement in medical decisions, and attitudes toward palliative care.",
        modelWording: "Mrs Papageorgiou's Greek cultural and spiritual background must be explored — not to challenge her decision, but to ensure it is genuinely her own and consistent with her values. This is particularly important for a life-limiting treatment refusal.",
        keywords: ["cultural", "greek", "values", "spiritual", "background", "consistent with values", "culturally informed", "family involvement"],
      },
      {
        id: "s5",
        name: "Teaching opportunity — registrar needs specific feedback on capacity documentation",
        category: "governance",
        severity: "important",
        clueInStem: "entry from your registrar, Dr Claire Wu",
        whyItMatters: "Dr Wu needs direct, specific teaching on what capacity documentation requires — particularly for life-sustaining treatment refusals where the medico-legal stakes are highest. This is a supervision responsibility.",
        modelWording: "I will meet with Dr Wu to review the standard for capacity documentation. For life-sustaining treatment refusals, the four-domain structure, information provided, values exploration, and cultural context must all be explicitly documented.",
        keywords: ["teach", "feedback", "registrar", "supervision", "dr wu", "specific", "capacity documentation", "educate", "teaching"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5"],
      lowYield: [],
    },
    modelAnswer: `Immediate action: Discharge to palliative care must be paused. I will conduct a proper capacity assessment today and document it fully before discharge proceeds.

Documentation inadequacy: Dr Wu's note is not a legally defensible capacity assessment. It contains no four-domain assessment, no documentation of information provided or confirmed understood, and no exploration of cultural values. Words like 'appears' and 'seems' are impressions, not assessment findings.

What a proper assessment requires: I will document all four domains explicitly — what information was given about diagnosis, prognosis, and consequences of refusal; what Mrs Papageorgiou demonstrated she understood and retained; how she weighed the decision against her personal values; and how she communicated her choice clearly.

Cultural context: Mrs Papageorgiou's Greek background must be explored to ensure this decision is genuinely her own and values-congruent — not because her refusal should be challenged, but because a life-limiting decision requires this level of care.

If capacity is confirmed: Her refusal of chemotherapy is legally and ethically binding. My note must document this clearly, with full four-domain evidence.

Teaching: I will meet with Dr Wu to provide specific feedback — capacity documentation for life-sustaining treatment refusals requires a higher standard than routine assessments, and this case demonstrates exactly why.`,
  },

  {
    id: "DOC-003",
    questionNumber: "MEQ-084",
    topic: "documentation",
    difficulty: "consultant",
    title: "Mental Health Act Documentation — Inadequate Legal Justification",
    candidateRole: "Consultant psychiatrist, acute inpatient unit supervisor",
    setting: "Acute inpatient psychiatric unit",
    stem: `You are the supervising consultant on an acute inpatient unit. A registrar, Dr James Park, asks you to review Mental Health Act paperwork he has completed for Sofia, a 28-year-old Aboriginal woman detained overnight after she attempted to leave the ward saying staff were "poisoning my baby through the breast milk."

The MHA form reads in full: "Psychotic. Risk to infant. Needs admission. Detained under s.26."

There is no description of the specific behaviour observed, no record of Sofia's own account of her beliefs, no documentation of less restrictive alternatives considered, no capacity reasoning, and no reference to the cultural context. Sofia is breastfeeding her three-day-old infant. She has repeatedly asked for her aunt to be called. The nurses tell you the aunt has not been contacted.

You also note that the infant has not been seen by the paediatric team and no child protection notification has been made.

Outline the problems with this documentation and what must happen now. A list without justification will not be awarded marks.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "MHA documentation legally inadequate — bare label, no criteria evidenced",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "Psychotic. Risk to infant. Needs admission. Detained under s.26",
        whyItMatters: "Mental Health Act documentation must justify criteria with specific observed facts, behaviour, risk reasoning, capacity assessment, and evidence that less restrictive options were considered and rejected. Four words do not constitute lawful involuntary detention documentation — this form is not legally defensible.",
        modelWording: "The MHA form is not legally defensible. It uses diagnostic labels without evidencing the statutory criteria. The form must document: the specific behaviour and beliefs observed, Sofia's own account, the risk to the infant with clinical reasoning, why voluntary treatment is inadequate, and what less restrictive options were considered.",
        keywords: ["legally defensible", "inadequate", "MHA", "mental health act", "criteria", "not evidenced", "bare label", "statutory", "justification", "form inadequate"],
      },
      {
        id: "s2",
        name: "Infant safety — paediatric review and child protection not actioned",
        category: "child_protection",
        severity: "critical",
        clueInStem: "the infant has not been seen by the paediatric team and no child protection notification has been made",
        whyItMatters: "An acutely psychotic breastfeeding mother with delusional beliefs about poisoning through breast milk presents a specific and immediate risk to the infant. Paediatric review and child protection notification are mandatory — their absence is a serious patient safety failure.",
        modelWording: "The infant must be reviewed by paediatrics immediately. A child protection notification must be made — an acutely psychotic mother with delusional beliefs specifically involving harm through breast milk meets the threshold for mandatory notification in every Australian jurisdiction.",
        keywords: ["infant", "baby", "child protection", "paediatric", "mandatory report", "notification", "infant safety", "mandatory notification", "child safety"],
      },
      {
        id: "s3",
        name: "Breastfeeding and psychosis — specific infant risk not assessed",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "poisoning my baby through the breast milk",
        whyItMatters: "The specific delusional content — that breast milk is poisoned — creates a direct and specific risk of the mother stopping breastfeeding abruptly, which can cause medical harm to a three-day-old neonate, or acting on the belief in other ways. This specific risk must be documented and managed.",
        modelWording: "Sofia's belief that she is poisoning her infant through breast milk is not generic psychosis — it is a specific, targeted delusion with direct implications for infant safety. The clinical plan must address breastfeeding safely, neonatal nutrition, and supervision of mother-infant contact.",
        keywords: ["breastfeeding", "breast milk", "infant risk", "specific delusion", "poisoning", "neonate", "three day old", "mother infant", "targeted"],
      },
      {
        id: "s4",
        name: "Cultural safety — Aboriginal woman, aunt not contacted, cultural support absent",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "She has repeatedly asked for her aunt to be called. The nurses tell you the aunt has not been contacted",
        whyItMatters: "Sofia has specifically and repeatedly requested her aunt. Failing to contact a nominated support person for an Aboriginal woman in a psychiatric crisis is a cultural safety failure. For Aboriginal patients, family and community connection is both a clinical and cultural right. This must be urgently rectified.",
        modelWording: "Sofia has asked for her aunt to be called — this has not happened. For an Aboriginal woman in an acute psychiatric crisis, failure to involve her nominated family support is both a cultural safety failure and a clinical one. The aunt must be contacted immediately.",
        keywords: ["aunt", "contact", "aboriginal", "cultural safety", "family support", "not contacted", "nominated", "indigenous", "cultural", "family"],
      },
      {
        id: "s5",
        name: "Least restrictive alternatives not documented",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "no documentation of less restrictive alternatives considered",
        whyItMatters: "Every Australian Mental Health Act requires that involuntary detention is the least restrictive option available. The MHA form must show that voluntary admission, supported decision-making with the aunt, or other options were considered and found insufficient.",
        modelWording: "The MHA form must document why voluntary treatment is inadequate and what less restrictive alternatives were considered. Detention without this reasoning does not meet the statutory threshold for involuntary treatment.",
        keywords: ["least restrictive", "alternatives", "voluntary", "less restrictive", "considered", "statutory threshold", "why involuntary", "not voluntary"],
      },
      {
        id: "s6",
        name: "Registrar supervision — form must be rewritten before it is relied upon",
        category: "governance",
        severity: "important",
        clueInStem: "A registrar, Dr James Park, asks you to review Mental Health Act paperwork",
        whyItMatters: "I must not approve this form as written. A legally inadequate MHA form that is relied upon for continued detention creates significant medico-legal risk for the clinician, the hospital, and most importantly undermines Sofia's legal rights.",
        modelWording: "I will not approve this MHA documentation as written. Dr Park must rewrite the form with my supervision before it is relied upon — this is a teaching opportunity about MHA documentation standards and Sofia's legal rights.",
        keywords: ["not approve", "rewrite", "supervision", "teaching", "registrar", "legal rights", "form must be", "supervise", "correct the form"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4"],
      secondary: ["s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `Immediate priorities run in parallel:

Infant safety: The infant must be reviewed by paediatrics now. A child protection notification must be made — an acutely psychotic mother with a specific delusion about poisoning through breast milk meets the mandatory notification threshold. This cannot wait.

Sofia's aunt: Sofia has asked for her aunt repeatedly. This has not happened. The aunt must be called immediately — this is both a cultural safety obligation and a clinical one for an Aboriginal woman in acute crisis.

MHA documentation: The form is not legally defensible and must not be relied upon as written. "Psychotic. Risk to infant. Detained." evidences nothing. The form must document: specific observed behaviour and beliefs, Sofia's own account, the specific risk to the infant with clinical reasoning, why voluntary treatment is inadequate, and what less restrictive alternatives were considered.

Breastfeeding: Sofia's delusion specifically targets breast milk. The clinical plan must address safe feeding of the three-day-old neonate, mother-infant contact under supervision, and breastfeeding guidance in the context of acute psychosis and antipsychotic medication.

Teaching: I will supervise Dr Park in rewriting the MHA documentation. This is a direct teaching session on legal standards and Aboriginal patients' rights — the form must be completed properly before continued detention is lawful.`,
  },
];
