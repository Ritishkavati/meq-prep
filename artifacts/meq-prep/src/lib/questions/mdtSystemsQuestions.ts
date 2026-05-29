// ============================================================
// MDT SYSTEMS QUESTIONS — MDT_STEMS
// ============================================================

import { QuizStem } from "../quizData";

export const MDT_STEMS: QuizStem[] = [
  {
    id: "SYS-001",
    questionNumber: "MEQ-088",
    topic: "mdt_systems",
    difficulty: "consultant",
    title: "Treatment-Resistant Schizophrenia — NDIS, Carer Burnout and Recovery Goals",
    candidateRole: "Consultant psychiatrist, community rehabilitation team",
    setting: "Urban community mental health rehabilitation service",
    stem: `You are the consultant psychiatrist in a community rehabilitation psychiatry team.

Ethan is a 23-year-old Aboriginal man with treatment-resistant schizophrenia diagnosed at age 18. He has had four previous admissions for psychotic relapse associated with medication non-adherence. He currently lives with his parents on a large urban housing estate and receives NDIS funding for psychosocial support. He has persistent negative symptoms, social withdrawal and intermittent auditory hallucinations despite clozapine treatment.

Ethan says, "Everyone keeps talking about recovery but nobody thinks I can actually do anything." He recently stopped attending his supported employment placement after believing co-workers were mocking him. His father wants him to apply for a disability pension permanently, while Ethan says he wants "a normal life" and asks whether he can study graphic design. The occupational therapist believes Ethan needs graded vocational rehabilitation, but the NDIS support coordinator says the funding is "being wasted because he won't engage."

At a case conference, Ethan's mother becomes tearful and says, "We have organised every appointment for five years and we're exhausted." An Aboriginal health worker has not been involved in his care. The junior registrar asks whether the priority should be reducing relapse risk, increasing independence, or accepting Ethan's current limitations.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Recovery-oriented formulation — not relapse-only management",
        category: "disposition",
        severity: "critical",
        clueInStem: "nobody thinks I can actually do anything.",
        whyItMatters: "Consultant-level rehabilitation psychiatry requires balancing realistic limitations with meaningful recovery goals. Ethan's stated wish for a normal life and graphic design study is a clinical target, not a delusion to be corrected.",
        modelWording: "Adopt a recovery-oriented formulation recognising persistent symptoms while supporting achievable vocational and functional goals — Ethan's desire to study graphic design is a legitimate rehabilitation target that must be explored, not dismissed.",
        keywords: ["recovery-oriented", "functional recovery", "negative symptoms", "hope", "rehabilitation", "vocational goals"],
      },
      {
        id: "s2",
        name: "Cultural safety — Aboriginal man, no Aboriginal health worker involvement",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "An Aboriginal health worker has not been involved in his care.",
        whyItMatters: "Aboriginal Australians experience significant disparities in mental health outcomes partly due to culturally unsafe care. The absence of an Aboriginal health worker in a young Aboriginal man's rehabilitation team is a specific cultural safety failure that must be addressed.",
        modelWording: "An Aboriginal health worker must be involved in Ethan's care — their absence is a cultural safety failure. Cultural connection, community, and identity are protective factors for young Aboriginal men with serious mental illness that the current team is not addressing.",
        keywords: ["Aboriginal", "Aboriginal health worker", "cultural safety", "cultural connection", "identity", "community", "cultural care"],
      },
      {
        id: "s3",
        name: "Vocational failure linked to residual psychosis — not non-compliance",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "believing co-workers were mocking him.",
        whyItMatters: "Stopping employment due to paranoid ideation is a clinical symptom requiring treatment — not an engagement failure or a reason to lower vocational goals. Residual paranoia on clozapine suggests the current regimen may need optimisation.",
        modelWording: "Ethan's departure from supported employment is a clinical symptom — residual paranoid ideation on clozapine is driving vocational failure. The clinical response is to assess clozapine optimisation, not to reduce vocational expectations.",
        keywords: ["residual psychosis", "vocational failure", "paranoia", "clozapine optimisation", "not non-compliance", "clinical symptom"],
      },
      {
        id: "s4",
        name: "Carer burnout — five years of over-functioning",
        category: "family_carer",
        severity: "important",
        clueInStem: "We have organised every appointment for five years and we're exhausted.",
        whyItMatters: "Five years of parental over-functioning is clinically significant — it is unsustainable, maintains Ethan's dependence, and will eventually collapse as a support system. Addressing carer burnout is not optional.",
        modelWording: "The parents' exhaustion after five years of organising every appointment is a clinical crisis point. Carer burnout must be directly addressed through respite, psychoeducation, gradual transfer of responsibility to Ethan, and acknowledgement of their sacrifice.",
        keywords: ["carer burnout", "five years", "over-functioning", "exhausted", "parents", "respite", "transfer of responsibility"],
      },
      {
        id: "s5",
        name: "NDIS framing — disengagement is illness, not waste",
        category: "system_pressure",
        severity: "important",
        clueInStem: "being wasted because he won't engage.",
        whyItMatters: "The support coordinator's framing of inconsistent engagement as waste reflects a misunderstanding of severe mental illness that is damaging to Ethan's recovery. The consultant must address this framing directly.",
        modelWording: "I will reframe the NDIS coordinator's framing: inconsistent engagement in a young man with treatment-resistant schizophrenia is a symptom of severe mental illness, not a character failing. The NDIS plan must be adjusted to Ethan's cognitive and motivational limitations.",
        keywords: ["NDIS", "engagement", "psychosocial disability", "framing", "not waste", "symptom of illness", "support coordination"],
      },
      {
        id: "s6",
        name: "Registrar supervision — question is wrong, answer is different",
        category: "governance",
        severity: "optional",
        clueInStem: "whether the priority should be reducing relapse risk, increasing independence, or accepting Ethan's current limitations.",
        whyItMatters: "The registrar's question presents a false trichotomy. Consultant-level rehabilitation holds all three simultaneously. This is a supervision and teaching opportunity.",
        modelWording: "The registrar's question presents a false choice. Consultant-level rehabilitation psychiatry holds relapse prevention, increasing independence, and realistic goal-setting simultaneously — I will use this as a direct teaching moment.",
        keywords: ["supervision", "registrar", "false choice", "teaching", "rehabilitation framework", "simultaneous goals"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Recovery framework: Review Ethan using a recovery-oriented rehabilitation framework. His desire to study graphic design is a legitimate clinical target. Relapse prevention alone is insufficient.

Cultural safety: An Aboriginal health worker must be involved immediately — their absence is a specific cultural safety failure in the care of a young Aboriginal man with serious mental illness.

Clinical: Ethan's departure from employment is a symptom of residual paranoid ideation on clozapine — this requires assessment of clozapine optimisation, not reduction of vocational goals. Review clozapine plasma level, dose, and augmentation options.

Carer burnout: Five years of parental over-functioning is a clinical crisis point. Address through respite, psychoeducation, and gradual transfer of responsibility to Ethan with structured supports.

NDIS: Reframe the support coordinator's language — inconsistent engagement is a symptom of severe illness, not waste. Adjust the NDIS plan to Ethan's current capacity.

Teaching: Use the registrar's question as a supervision opportunity — rehabilitation psychiatry holds relapse prevention, independence, and realistic goals simultaneously, not as competing priorities.`,
  },

  {
    id: "SYS-002",
    questionNumber: "MEQ-089",
    topic: "mdt_systems",
    difficulty: "consultant",
    title: "ED Physician Demands Discharge of High-Risk Patient — 2am Conflict",
    candidateRole: "Consultant psychiatrist on call",
    setting: "Metropolitan Emergency Department, 2am",
    stem: `You are the consultant psychiatrist on call. At 2am you receive a call from Dr James Walsh, a senior ED consultant, who is blunt and irritated. He tells you a psychiatric patient, Tyra, a 33-year-old woman, has been in the ED for eight hours. Tyra presented after an intentional overdose of venlafaxine 375mg — approximately 20 tablets. She has been medically cleared. Dr Walsh states: "She's stable now, she says she's fine and wants to go home, she's done this before, and I need the bed."

You review Tyra's file before calling back. She has had seven presentations to this ED in the past 18 months — five of them overdoses. Her last admission was six weeks ago following a serious attempt. She is not currently linked to any community mental health service. The previous attending consultant noted "high-frequency attender, likely personality disorder."

Dr Walsh is pressuring you to give "telephone clearance to discharge" without attending. Tyra's sister — her only social support — has told the nurse she is "terrified" and cannot take Tyra home tonight as she has young children.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Refuse telephone discharge clearance — direct assessment required",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "pressuring you to give telephone clearance to discharge without attending.",
        whyItMatters: "A telephone discharge clearance for a patient with seven presentations and a serious attempt six weeks ago is not clinically defensible. The consultant's professional and legal responsibility cannot be delegated to a phone conversation under bed pressure.",
        modelWording: "I will not give telephone clearance for this patient. I will attend in person for direct assessment. A phone conversation does not constitute a psychiatric risk assessment for a patient with this history.",
        keywords: ["telephone clearance", "direct assessment", "attend in person", "not defensible", "refuse", "professional responsibility"],
      },
      {
        id: "s2",
        name: "Prior attempts are the strongest predictor — habituation bias",
        category: "risk_self",
        severity: "critical",
        clueInStem: "seven presentations in the past 18 months — five of them overdoses.",
        whyItMatters: "Five overdoses in 18 months is not a reason to reduce concern — it is one of the strongest predictors of eventual completed suicide. High-frequency presentation creates habituation bias that must be explicitly resisted.",
        modelWording: "Tyra's pattern of five overdoses in 18 months increases, not decreases, my clinical concern. Prior suicide attempts are the strongest single predictor of completed suicide. Habituation bias in high-frequency presenters is a recognised cause of preventable deaths.",
        keywords: ["prior attempts", "five overdoses", "habituation", "strongest predictor", "not low risk", "frequency", "completed suicide"],
      },
      {
        id: "s3",
        name: "No community mental health linkage — system failure",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "not currently linked to any community mental health service.",
        whyItMatters: "A patient with seven ED presentations in 18 months without community mental health linkage represents a system failure. The ED is functioning as the de facto mental health service. Discharge without addressing this will result in an eighth presentation.",
        modelWording: "Seven ED presentations without community mental health linkage is a system failure — the ED is functioning as Tyra's de facto mental health service. Regardless of tonight's disposition, a community mental health referral must occur before she leaves this ED.",
        keywords: ["community mental health", "linkage", "system failure", "no case manager", "ED default", "referral", "before discharge"],
      },
      {
        id: "s4",
        name: "Personality disorder label — stigmatising and risk-minimising",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "high-frequency attender, likely personality disorder.",
        whyItMatters: "A personality disorder notation used to justify reduced clinical attention is stigmatising and dangerous. Patients with BPD have a lifetime suicide completion rate of approximately 10% — the label must not function as a reason to withhold assessment.",
        modelWording: "The notation 'likely personality disorder' must not function as a clinical reason to minimise this presentation. Patients with personality disorders remain at significant risk of completed suicide — this label is not a discharge justification.",
        keywords: ["personality disorder", "BPD", "stigma", "label", "minimise", "not a reason", "10 percent", "lifetime risk"],
      },
      {
        id: "s5",
        name: "Sister unable to supervise — discharge plan has no safety net",
        category: "family_carer",
        severity: "important",
        clueInStem: "Tyra's sister has told the nurse she is terrified and cannot take Tyra home tonight as she has young children.",
        whyItMatters: "The only identified support has explicitly stated she cannot provide supervision tonight. A discharge plan requiring supervision from an unavailable carer is not a safe discharge plan.",
        modelWording: "The only identified support cannot provide supervision tonight. Any discharge plan relying on the sister as safety net is unsafe. This absence of support is itself a risk factor that must be incorporated in the formulation.",
        keywords: ["sister", "cannot supervise", "no safety net", "supervision", "absent support", "carer unavailable", "risk factor"],
      },
      {
        id: "s6",
        name: "Clinical independence from ED pressure",
        category: "governance",
        severity: "important",
        clueInStem: "I need the bed.",
        whyItMatters: "A psychiatry consultant must not yield clinical judgement to bed pressure or ED colleague pressure. This decision must be documented as a clinical one, not a negotiated one.",
        modelWording: "I will attend in person. I acknowledge the ED pressure and Dr Walsh's frustration. The clinical decision regarding Tyra's safety is mine to make — after direct assessment — and I will document my reasoning clearly regardless of the outcome.",
        keywords: ["clinical independence", "bed pressure", "not yield", "attend", "document", "clinical decision", "professional"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `I will attend in person. I will not give telephone clearance for a patient with seven presentations and five overdoses in 18 months and a serious attempt six weeks ago.

Clinical framing: I will acknowledge Dr Walsh's concern. The clinical decision regarding Tyra's safety is mine after direct assessment.

Risk formulation: Five overdoses in 18 months increases, not decreases, my concern. Prior attempts are the strongest predictor of completed suicide. Habituation bias in high-frequency presenters causes preventable deaths.

Personality disorder: The previous notation does not reduce risk or change the clinical obligation to assess. It must not function as a discharge justification.

Sister: The only identified support cannot provide supervision tonight — any discharge plan relying on her is unsafe.

System gap: Seven ED presentations without community mental health linkage is a system failure. Regardless of tonight's disposition, a community mental health referral must occur before Tyra leaves this ED.

Documentation: I will document my decision and the basis for it, including the request for telephone clearance and my refusal.`,
  },

  {
    id: "SYS-003",
    questionNumber: "MEQ-090",
    topic: "mdt_systems",
    difficulty: "consultant",
    title: "Inpatient Bed Pressure — Three Unsafe Discharges Requested by NUM",
    candidateRole: "Consultant psychiatrist, acute inpatient unit",
    setting: "Acute inpatient psychiatric unit — Monday morning ward meeting",
    stem: `It is Monday morning. During the ward team meeting, the Nursing Unit Manager Sandra announces that there are 22 patients in a 20-bed unit. She states the hospital has issued a "Code Yellow — Capacity Alert" and all teams must review patients for discharge by midday. She singles out your patients: "These three need to go — Greg, Nasrin, and William."

You review the three patients:

Greg, 52, admitted one week ago following a serious paracetamol overdose. Marked improvement documented by the registrar. Currently euthymic, denies SI. No safety plan documented. No community follow-up arranged. No family contact made.

Nasrin, 35, admitted 10 days ago for acute psychosis secondary to bipolar I. Still responding to antipsychotic medication. Thought-disordered with limited insight. Two young children at home. Husband is currently on a fly-in-fly-out rotation and unavailable for five days.

William, 67, admitted two weeks ago for severe psychotic depression. Halfway through an ECT course with early improvement. His wife told nursing staff last week she is "afraid to have him home" and cannot manage him alone.

Sandra tells you: "If you do not clear these three by midday, it will escalate to the Medical Director."`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Clinical authority — discharge is a clinical decision, not administrative",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "If you do not clear these three by midday, it will escalate to the Medical Director.",
        whyItMatters: "A nursing unit manager does not have clinical authority to direct discharge decisions. The consultant's clinical judgement is not subordinate to administrative capacity management — yielding to this pressure without clinical justification would be a governance failure.",
        modelWording: "I acknowledge the Code Yellow and will work collaboratively to facilitate safe discharges. Discharge decisions for these three patients are clinical decisions made on clinical grounds. I will not discharge any patient who is not clinically safe — and I welcome the Medical Director's involvement if needed.",
        keywords: ["clinical authority", "not subordinate", "clinical decision", "administrative pressure", "Code Yellow", "acknowledge", "collaborate"],
      },
      {
        id: "s2",
        name: "Greg — no safety plan, no follow-up: clinically unsafe to discharge",
        category: "risk_self",
        severity: "critical",
        clueInStem: "No safety plan documented. No community follow-up arranged. No family contact made.",
        whyItMatters: "Greg is one week post-serious paracetamol overdose with no safety plan and no follow-up — discharging him in this state repeats the documentation failures seen in post-discharge suicides. The absence of a safety plan is a clinical contraindication to discharge.",
        modelWording: "Greg cannot be safely discharged today. Before discharge he requires: a written safety plan, confirmed community follow-up within 48-72 hours, family contact, and a GP letter. These are minimum standards after a serious overdose.",
        keywords: ["Greg", "no safety plan", "no follow-up", "one week", "overdose", "not safe", "family contact", "minimum standards"],
      },
      {
        id: "s3",
        name: "Nasrin — thought-disordered with children at home and no available carer",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "Thought-disordered with limited insight. Two young children at home. Husband unavailable for five days.",
        whyItMatters: "Discharging a thought-disordered mother with limited insight into a home where she is the sole carer for young children, with no adult support for five days, creates a child safety risk and a risk to Nasrin herself.",
        modelWording: "Nasrin cannot be discharged into an unsupported home with two young children while thought-disordered and lacking insight. With her husband unavailable for five days, discharge now creates an immediate child safety risk. A formal child safety consultation is required before any discharge consideration.",
        keywords: ["Nasrin", "thought-disordered", "insight", "children", "child safety", "husband away", "unsupported", "not ready"],
      },
      {
        id: "s4",
        name: "William — mid-ECT course and carer has stated she cannot cope",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Halfway through an ECT course. His wife is afraid to have him home and cannot manage him alone.",
        whyItMatters: "Discharging a patient mid-ECT course for severe psychotic depression, into a home where the carer has explicitly stated she cannot manage, is clinically unjustifiable and potentially harmful to both William and his wife.",
        modelWording: "William is mid-ECT course for severe psychotic depression. His wife has explicitly told staff she cannot manage him at home. Premature discharge mid-ECT is clinically unjustifiable — it risks relapse of a severe psychotic depression and harm to both William and his wife.",
        keywords: ["William", "ECT", "mid-course", "wife cannot cope", "psychotic depression", "premature", "carer", "mid-ECT"],
      },
      {
        id: "s5",
        name: "Document and escalate — welcome Medical Director involvement",
        category: "governance",
        severity: "important",
        clueInStem: "it will escalate to the Medical Director.",
        whyItMatters: "The consultant must document the clinical basis for each decision and escalate through clinical governance channels. Welcoming rather than fearing the Medical Director's involvement demonstrates clinical confidence and transparency.",
        modelWording: "I will document the clinical basis for my decisions regarding each patient clearly in the medical record. If this escalates to the Medical Director, I welcome that conversation — clinical safety decisions must be transparent and defensible. This is a governance issue, not a personal conflict.",
        keywords: ["document", "medical director", "escalate", "governance", "clinical basis", "transparent", "defensible", "welcome"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4"],
      secondary: ["s5"],
      lowYield: [],
    },
    modelAnswer: `Clinical authority: I acknowledge the Code Yellow and will work actively to facilitate safe discharges. I will not, however, discharge any patient who is clinically unsafe. Bed pressure is not a clinical reason for discharge.

Greg: Not safe to discharge today. One week post-serious paracetamol overdose with no safety plan, no follow-up, and no family contact. Before discharge: written safety plan, 48-72 hour community follow-up, family contact, and GP letter.

Nasrin: Not safe to discharge. She is thought-disordered with limited insight and two young children at home. With her husband away for five days, discharge now creates an immediate child safety risk. I will request a formal child safety consultation.

William: Not safe to discharge mid-ECT. His wife has explicitly said she cannot manage him at home. Premature discharge of a patient mid-ECT for psychotic depression is clinically unjustifiable.

Escalation: I will document my decisions for all three patients with clinical reasoning. If this escalates to the Medical Director, I welcome that conversation — my decisions are transparent and defensible.

Collaboration: I will work with the team to expedite safe discharges for any patients who are clinically ready and not included in Sandra's list.`,
  },
];
