import type { QuizStem } from "../quizData";

export const GOV_STEMS: QuizStem[] = [
  {
    id: "GOV-001",
    topic: "governance",
    difficulty: "consultant",
    title: "Impaired colleague and mandatory reporting",
    candidateRole: "Consultant psychiatrist, clinical director of mental health",
    setting: "Public mental health service",
    stem: `You are the clinical director of a public mental health service.

A senior registrar tells you confidentially that Dr Lane, a consultant psychiatrist, appeared intoxicated during an after-hours shift and gave confusing verbal orders for rapid tranquillisation. Nursing staff say Dr Lane smelled of alcohol and later wrote incomplete notes. One nurse says, "I was scared to question him because he is the consultant."

Dr Lane calls you the next morning and says, "I had one drink at dinner and people are exaggerating because they don't like me." He asks you not to escalate because he is going through a divorce. The hospital executive wants the matter handled quietly to avoid reputational damage.

You must decide how to respond while ensuring patient safety, fairness to Dr Lane and compliance with professional obligations.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Potential impairment affecting patient safety",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "appeared intoxicated during an after-hours shift",
        whyItMatters: "Possible impairment while practising creates immediate risk to patients and may require removal from clinical duties.",
        modelWording: "Prioritise patient safety by assessing whether Dr Lane is fit for duty and preventing further unsupervised clinical practice until clarified.",
        keywords: ["impaired colleague", "fitness for duty", "patient safety", "intoxication", "clinical duties", "risk"],
      },
      {
        id: "s2",
        name: "Mandatory reporting threshold",
        category: "governance",
        severity: "critical",
        clueInStem: "gave confusing verbal orders for rapid tranquillisation.",
        whyItMatters: "Practising while impaired and issuing unsafe orders may meet mandatory notification thresholds depending on jurisdiction.",
        modelWording: "Consider mandatory notification obligations if impairment placed the public at substantial risk of harm.",
        keywords: ["mandatory reporting", "AHPRA", "substantial risk", "professional obligations", "unsafe practice", "notification"],
      },
      {
        id: "s3",
        name: "Power imbalance silencing staff",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "I was scared to question him because he is the consultant.",
        whyItMatters: "Hierarchy can suppress safety concerns and requires explicit support for speaking up.",
        modelWording: "Support staff who raised concerns and address hierarchy-related barriers to escalation.",
        keywords: ["speaking up", "hierarchy", "staff safety", "nursing concerns", "clinical governance"],
      },
      {
        id: "s4",
        name: "Executive pressure to minimise issue",
        category: "system_pressure",
        severity: "important",
        clueInStem: "handled quietly to avoid reputational damage.",
        whyItMatters: "Reputation management must not override statutory obligations or patient safety.",
        modelWording: "Resist pressure to minimise the incident and follow formal governance and professional reporting processes.",
        keywords: ["executive pressure", "reputation", "governance process", "transparency", "professional duty"],
      },
      {
        id: "s5",
        name: "Fair process for colleague",
        category: "ethics",
        severity: "important",
        clueInStem: "people are exaggerating because they don't like me.",
        whyItMatters: "Natural justice requires factual inquiry, support and non-punitive handling while protecting patients.",
        modelWording: "Ensure procedural fairness while separating support for Dr Lane from patient safety and reporting duties.",
        keywords: ["procedural fairness", "natural justice", "colleague support", "non-punitive", "confidentiality"],
      },
      {
        id: "s6",
        name: "Documentation and incident record",
        category: "governance",
        severity: "optional",
        clueInStem: "incomplete notes.",
        whyItMatters: "Incomplete notes increase clinical and medico-legal risk, especially around sedation decisions.",
        modelWording: "Secure relevant documentation, medication records and incident reports to support review and patient follow-up.",
        keywords: ["documentation", "incident report", "sedation orders", "medication record", "audit trail"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Immediate safety:

Ensure Dr Lane is not providing unsupervised clinical care until fitness for duty is clarified. Review affected patients, rapid tranquillisation orders and observations.

Governance/reporting:

Escalate through hospital clinical governance and medical administration. Consider mandatory notification if impairment created substantial risk to the public. Do not allow reputational pressure to suppress required reporting.

Fairness/support:

Speak with Dr Lane, offer support and occupational health pathway. Maintain procedural fairness and confidentiality within limits.

Team:

Support nursing/registrar staff who raised concerns. Address hierarchy and speaking-up culture.

Documentation:

Record factual concerns, actions taken, patient reviews, reporting decisions and rationale.`,
  },
  {
    id: "GOV-002",
    topic: "governance",
    difficulty: "consultant",
    title: "Serious medication error and open disclosure",
    candidateRole: "Consultant psychiatrist, inpatient unit clinical lead",
    setting: "Acute psychiatric inpatient ward",
    stem: `You are the consultant psychiatrist leading an acute inpatient ward.

A 54-year-old woman, Helen, was inadvertently given clozapine 300 mg at night instead of quetiapine 300 mg due to a medication chart transcription error. She became hypotensive, fell overnight and sustained a fractured wrist. The night nurse says, "I thought pharmacy had checked it." The registrar says he copied the medication list from a previous discharge summary without confirming it.

Helen's daughter arrives angry and says, "No one told us this was your mistake." The hospital risk manager asks you to prepare for open disclosure but warns that "we should avoid admitting liability." Staff are distressed and blaming each other.

You are asked to manage the immediate clinical consequences and lead the incident response.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Immediate clinical harm from medication error",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "became hypotensive, fell overnight and sustained a fractured wrist.",
        whyItMatters: "Patient harm requires urgent medical review, monitoring and prevention of further adverse events.",
        modelWording: "Prioritise Helen's clinical stabilisation, falls management and monitoring for clozapine-related adverse effects.",
        keywords: ["medication error", "hypotension", "fall", "fracture", "clinical review", "adverse event"],
      },
      {
        id: "s2",
        name: "Open disclosure required",
        category: "governance",
        severity: "critical",
        clueInStem: "No one told us this was your mistake.",
        whyItMatters: "Failure to disclose worsens harm, complaint risk and ethical breach.",
        modelWording: "Conduct timely open disclosure with apology, factual explanation, known consequences and next steps.",
        keywords: ["open disclosure", "apology", "transparency", "family communication", "adverse event", "duty of candour"],
      },
      {
        id: "s3",
        name: "Systems error not individual blame only",
        category: "governance",
        severity: "important",
        clueInStem: "pharmacy had checked it.",
        whyItMatters: "Blame culture prevents learning; root cause analysis must examine prescribing, transcription and checking systems.",
        modelWording: "Frame the incident as requiring systems review rather than premature individual blame.",
        keywords: ["systems error", "root cause analysis", "medication safety", "transcription error", "blame culture"],
      },
      {
        id: "s4",
        name: "Registrar practice and supervision issue",
        category: "governance",
        severity: "important",
        clueInStem: "copied the medication list from a previous discharge summary without confirming it.",
        whyItMatters: "Unsafe prescribing practice requires supervision, education and possible remediation.",
        modelWording: "Review registrar prescribing practice and supervision while ensuring learning and accountability.",
        keywords: ["supervision", "prescribing safety", "medication reconciliation", "registrar", "remediation"],
      },
      {
        id: "s5",
        name: "Risk manager advice must not prevent honesty",
        category: "ethics",
        severity: "important",
        clueInStem: "avoid admitting liability.",
        whyItMatters: "Open disclosure can be honest without speculative blame; avoiding truth undermines trust.",
        modelWording: "Provide factual disclosure and apology for harm without speculating beyond known facts or assigning premature liability.",
        keywords: ["liability", "truthfulness", "ethics", "open disclosure", "factual communication"],
      },
      {
        id: "s6",
        name: "Staff distress and team functioning",
        category: "mdt_conflict",
        severity: "optional",
        clueInStem: "Staff are distressed and blaming each other.",
        whyItMatters: "Team distress can impair ongoing safety and requires containment and debriefing.",
        modelWording: "Support staff debriefing and psychological safety while maintaining accountability and patient-centred focus.",
        keywords: ["staff debrief", "psychological safety", "team conflict", "accountability", "patient safety"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Immediate clinical care:

Ensure Helen receives urgent medical review, observations, falls/fracture management and monitoring for clozapine effects. Correct medication chart and prevent further dosing errors.

Open disclosure:

Meet Helen/family promptly with senior staff. Acknowledge the error, apologise for harm, explain known facts and outline next steps.

Governance:

Complete incident notification. Initiate medication safety review/root cause analysis. Examine prescribing, transcription, pharmacy checking, nursing administration and handover systems.

Supervision:

Review registrar prescribing practice and supervision needs. Avoid scapegoating but address unsafe practice.

Team:

Debrief staff, reduce blame culture and reinforce medication reconciliation standards.

Documentation:

Record clinical care, disclosure, incident actions, family communication and review plan.`,
  },
  {
    id: "GOV-003",
    topic: "governance",
    difficulty: "consultant",
    title: "Executive pressure to discharge unsafe patient",
    candidateRole: "Consultant psychiatrist, acute inpatient unit",
    setting: "Overcrowded metropolitan inpatient service",
    stem: `You are the consultant psychiatrist on an acute inpatient unit during severe bed pressure.

Tariq is a 32-year-old man with schizoaffective disorder admitted after threatening his ex-partner while believing she was "infected by demons." He remains guarded, intermittently hostile and has refused family meetings. Yesterday he told a nurse, "When I leave, I know where she lives."

The hospital executive director phones you and says, "We need this bed today; ED is breaching targets and he is no longer floridly psychotic." The bed manager suggests discharge to temporary accommodation with crisis follow-up. The registrar is uncomfortable but says, "Maybe we can document that he denies intent."

Tariq's ex-partner has an active family violence order and has not been contacted because staff are unsure about confidentiality.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Explicit threat to identifiable person",
        category: "risk_others",
        severity: "critical",
        clueInStem: "When I leave, I know where she lives.",
        whyItMatters: "A specific threat to an identifiable victim creates serious risk and potential duty to protect/warn considerations.",
        modelWording: "Treat the statement as a specific dynamic risk to an identifiable person requiring urgent risk formulation and protective action.",
        keywords: ["specific threat", "identifiable victim", "violence risk", "dynamic risk", "duty to protect", "family violence"],
      },
      {
        id: "s2",
        name: "Executive pressure compromising clinical independence",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "We need this bed today",
        whyItMatters: "Bed pressure must not override clinical safety or legal duties.",
        modelWording: "Maintain clinical independence and refuse discharge if risk cannot be safely managed despite executive pressure.",
        keywords: ["executive pressure", "bed pressure", "clinical independence", "unsafe discharge", "risk management"],
      },
      {
        id: "s3",
        name: "False reassurance from denial of intent",
        category: "risk_others",
        severity: "important",
        clueInStem: "document that he denies intent.",
        whyItMatters: "Denial does not negate contextual and behavioural risk indicators.",
        modelWording: "Do not rely on denial of intent when recent threats, guardedness and family violence context indicate ongoing risk.",
        keywords: ["denial of intent", "contextual risk", "guardedness", "violence formulation", "discharge risk"],
      },
      {
        id: "s4",
        name: "Family violence and victim safety",
        category: "risk_vulnerable",
        severity: "important",
        clueInStem: "active family violence order",
        whyItMatters: "Victim safety planning and possible information-sharing may be required despite confidentiality concerns.",
        modelWording: "Consider family violence risk, victim safety planning and lawful information-sharing where serious risk exists.",
        keywords: ["family violence", "victim safety", "information sharing", "confidentiality", "protective action"],
      },
      {
        id: "s5",
        name: "Inadequate disposition plan",
        category: "disposition",
        severity: "important",
        clueInStem: "temporary accommodation with crisis follow-up.",
        whyItMatters: "Crisis follow-up may be inadequate for specific violence risk and active psychosis.",
        modelWording: "Reject disposition plans that do not address specific violence risk, victim protection and treatment adherence.",
        keywords: ["temporary accommodation", "crisis follow-up", "discharge planning", "violence risk", "treatment adherence"],
      },
      {
        id: "s6",
        name: "Defensible documentation under pressure",
        category: "governance",
        severity: "optional",
        clueInStem: "ED is breaching targets",
        whyItMatters: "Performance targets may later be scrutinised if adverse outcome occurs.",
        modelWording: "Document clinical reasoning, executive pressure, risk factors, protective actions and rationale for admission/discharge decision.",
        keywords: ["documentation", "targets", "defensible decision", "governance", "adverse outcome", "clinical reasoning"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Immediate risk:

Review Tariq and treat the statement as a specific threat to an identifiable person. Reassess psychosis, hostility, access to victim, insight, substance use and capacity for safety planning.

Victim/public safety:

Consider lawful information-sharing, police/family violence liaison and victim safety planning. Do not allow confidentiality uncertainty to prevent action where serious risk exists.

Disposition:

Do not discharge solely due to bed pressure. Temporary accommodation/crisis follow-up is inadequate unless it specifically manages violence risk.

Leadership/governance:

Inform executive that clinical discharge is unsafe at this stage. Escalate bed pressure through appropriate channels without compromising care.

Documentation:

Record threat, risk formulation, executive pressure, protective actions, legal considerations and discharge rationale.`,
  },
  {
    id: "GOV-004",
    topic: "governance",
    difficulty: "consultant",
    title: "Registrar working beyond competence",
    candidateRole: "Consultant psychiatrist, training supervisor and unit consultant",
    setting: "Regional inpatient and emergency psychiatry service",
    stem: `You are the consultant psychiatrist supervising a Stage 1 registrar in a regional service.

Over two weeks, several nurses report that the registrar has been making independent decisions overnight without calling for help, including discharging a suicidal patient from ED and prescribing rapid tranquillisation without physical observations. The registrar says, "I thought consultants expected us to cope independently."

Last night a patient required ICU transfer after oversedation. The registrar did not call you until after the transfer and later documented, "Consultant aware," although you had not been contacted. The NUM says staff have lost confidence and now bypass the registrar.

The director of training asks you to manage the patient safety issue while supporting the registrar's training.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Patient harm from unsupervised practice",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "required ICU transfer after oversedation.",
        whyItMatters: "Actual harm means immediate review of supervision, scope of practice and affected patient care.",
        modelWording: "Prioritise patient safety by reviewing the adverse event and restricting independent high-risk decisions until competence is assured.",
        keywords: ["patient harm", "ICU transfer", "oversedation", "scope of practice", "patient safety", "supervision"],
      },
      {
        id: "s2",
        name: "False documentation",
        category: "governance",
        severity: "critical",
        clueInStem: "Consultant aware",
        whyItMatters: "Inaccurate documentation is a serious professionalism and medico-legal issue.",
        modelWording: "Address inaccurate documentation directly as a professionalism and governance concern requiring correction and escalation.",
        keywords: ["false documentation", "professionalism", "medico-legal", "clinical record", "governance", "integrity"],
      },
      {
        id: "s3",
        name: "Supervision failure and unclear escalation culture",
        category: "governance",
        severity: "important",
        clueInStem: "I thought consultants expected us to cope independently.",
        whyItMatters: "Unsafe independence may reflect both trainee judgement and system supervision failures.",
        modelWording: "Clarify supervision expectations, escalation thresholds and after-hours support responsibilities.",
        keywords: ["supervision", "escalation thresholds", "Stage 1 registrar", "training", "after-hours", "competence"],
      },
      {
        id: "s4",
        name: "Medication safety breach",
        category: "physical_health",
        severity: "important",
        clueInStem: "rapid tranquillisation without physical observations.",
        whyItMatters: "Sedation without monitoring risks respiratory compromise, hypotension and death.",
        modelWording: "Review rapid tranquillisation practice and ensure mandatory physical monitoring is embedded.",
        keywords: ["rapid tranquillisation", "physical observations", "sedation safety", "monitoring", "medication safety"],
      },
      {
        id: "s5",
        name: "Team loss of confidence",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "staff have lost confidence",
        whyItMatters: "Bypassing the registrar fragments care and worsens safety unless leadership restores clear roles.",
        modelWording: "Restore team safety by clarifying roles, escalation pathways and supervised decision-making arrangements.",
        keywords: ["team confidence", "bypassing", "MDT", "role clarity", "communication", "safety culture"],
      },
      {
        id: "s6",
        name: "Training support and remediation",
        category: "ethics",
        severity: "optional",
        clueInStem: "supporting the registrar's training.",
        whyItMatters: "Patient safety must be balanced with fair remediation rather than punitive abandonment.",
        modelWording: "Develop a remediation and supervision plan that supports learning while protecting patients.",
        keywords: ["remediation", "training support", "fairness", "competence", "supervision plan", "education"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Immediate safety:

Review affected patients, especially ICU transfer case and recent ED discharge. Restrict registrar from independent high-risk decisions until reviewed.

Governance:

Lodge incident review for oversedation. Address inaccurate "consultant aware" documentation; correct record and escalate as required.

Supervision:

Meet registrar urgently. Clarify escalation expectations, rapid tranquillisation policy, discharge thresholds and documentation standards. Increase direct supervision and after-hours check-ins.

Training:

Involve director of training. Develop remediation plan: observed assessments, prescribing review, feedback, competence milestones.

MDT:

Meet NUM/team to restore safe escalation pathways. Ensure staff know when and how to contact consultant directly.

Documentation:

Record patient safety actions, supervision plan, registrar discussion and governance escalation.`,
  },
  {
    id: "GOV-005",
    topic: "governance",
    difficulty: "consultant",
    title: "Coronial inquiry and defensible documentation",
    candidateRole: "Consultant psychiatrist, community mental health team clinical lead",
    setting: "Community mental health service after patient death",
    stem: `You are the consultant psychiatrist clinical lead of a community mental health team.

Daniel, a 41-year-old man with recurrent depression and alcohol dependence, died by suicide two days after discharge from crisis team follow-up. The file notes state "denies suicidal ideation, low risk," but there is no documented formulation. His partner had phoned the team the day before death saying, "He has given away his tools and keeps saying we'll be better off without him."

A junior clinician documented the call as "partner anxious" and no senior review occurred. The family has requested records and says, "You ignored our warning." The service manager tells you a coronial investigation is likely and asks you to review the case.

Staff are distressed and worried about blame. You must lead the immediate response, documentation review and service learning process.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Missed collateral warning signs",
        category: "collateral",
        severity: "critical",
        clueInStem: "He has given away his tools and keeps saying we'll be better off without him.",
        whyItMatters: "Preparatory behaviour and burdensomeness statements are high-risk warning signs; missing collateral may be a major systems failure.",
        modelWording: "Identify the partner's collateral as significant dynamic suicide risk requiring senior review and safety action.",
        keywords: ["collateral warning", "preparatory behaviour", "burdensomeness", "suicide risk", "senior review", "family call"],
      },
      {
        id: "s2",
        name: "Inadequate risk formulation documentation",
        category: "governance",
        severity: "critical",
        clueInStem: "denies suicidal ideation, low risk",
        whyItMatters: "A denial-based risk label is not defensible without formulation, context and rationale.",
        modelWording: "Critique reliance on denial of suicidal ideation and absence of documented risk formulation.",
        keywords: ["risk formulation", "denial of suicidal ideation", "documentation", "defensibility", "coronial inquiry", "low risk"],
      },
      {
        id: "s3",
        name: "Need for immediate postvention and family response",
        category: "family_carer",
        severity: "important",
        clueInStem: "You ignored our warning.",
        whyItMatters: "Family communication must be compassionate, transparent and coordinated without speculative defensiveness.",
        modelWording: "Provide compassionate family contact, acknowledge distress, explain review process and avoid premature conclusions.",
        keywords: ["postvention", "family communication", "open disclosure", "complaint", "bereavement", "transparency"],
      },
      {
        id: "s4",
        name: "Senior review escalation failure",
        category: "governance",
        severity: "important",
        clueInStem: "no senior review occurred.",
        whyItMatters: "Failure to escalate collateral risk indicates possible service process gap.",
        modelWording: "Review escalation processes for high-risk collateral calls and after-hours clinical decision-making.",
        keywords: ["senior review", "escalation failure", "service process", "clinical governance", "risk call"],
      },
      {
        id: "s5",
        name: "Staff distress and blame anxiety",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "Staff are distressed and worried about blame.",
        whyItMatters: "A just culture response supports staff while preserving accountability and learning.",
        modelWording: "Use a just culture approach: support staff, preserve records and focus on systems learning.",
        keywords: ["just culture", "staff support", "blame", "debrief", "systems learning", "psychological safety"],
      },
      {
        id: "s6",
        name: "Records request and coronial process",
        category: "governance",
        severity: "optional",
        clueInStem: "a coronial investigation is likely",
        whyItMatters: "Records must be preserved, factual and managed through appropriate governance/legal channels.",
        modelWording: "Preserve records and coordinate information release through appropriate legal and governance processes.",
        keywords: ["coronial investigation", "records request", "preserve records", "legal process", "documentation review"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Immediate response:

Confirm facts, preserve records and notify governance processes. Support family with compassionate contact and explain review process without speculation.

Clinical review:

Identify partner's call as significant missed collateral: giving away tools and burdensomeness statements. Critique "denies SI, low risk" as inadequate without dynamic formulation.

Governance:

Initiate serious incident review/root cause analysis. Review triage, collateral handling, senior escalation and crisis discharge processes. Prepare for coronial process through formal channels.

Staff:

Provide debrief and support using just culture. Avoid scapegoating but maintain accountability.

Documentation:

Record factual timeline, actions taken, family communication, staff support and planned service improvements.`,
  },
];
