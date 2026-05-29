import type { QuizStem } from "../quizData";

export const GOV_STEMS: QuizStem[] = [
  {
    id: "GOV-001",
    questionNumber: "MEQ-068",
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
    modelAnswer: `This presentation has to be managed first as a patient-safety and professional-governance issue, not as an interpersonal complaint about a colleague. The phrase "appeared intoxicated during an after-hours shift" is an immediate safety trigger, particularly because Dr Lane allegedly gave "confusing verbal orders for rapid tranquillisation." Rapid tranquillisation carries risk of respiratory depression, hypotension, oversedation and death if poorly assessed or documented. My first action as clinical director would be to ensure Dr Lane is not providing further unsupervised clinical care until fitness for duty is clarified, and to review any patients affected by his orders, including observations, medication doses, adverse events and documentation.

The nurse's statement, "I was scared to question him because he is the consultant," is not a peripheral workplace issue. It shows hierarchy suppressing safety escalation. I would speak with the nurse and registrar in a supportive, factual way, reassure them that raising patient-safety concerns is appropriate, and make sure there is no retaliation. I would also review whether the service culture makes it difficult to challenge senior doctors after hours. Consultant leadership here means protecting staff who speak up while maintaining fairness to Dr Lane.

Dr Lane's explanation, "I had one drink at dinner and people are exaggerating because they don't like me," should be heard, but it cannot end the matter. He is entitled to procedural fairness, confidentiality within limits, and support, especially as he says he is going through a divorce. I would meet with him, explain the concerns factually, advise him not to work clinically until assessment, and offer occupational health, employee assistance, GP support or impairment pathway. Compassion and accountability are not opposites. Supporting him does not mean concealing risk.

The hospital executive's wish for the matter to be "handled quietly to avoid reputational damage" creates a clear ethical and governance tension. Reputation cannot override patient safety, incident review or mandatory reporting obligations. I would escalate through medical administration and clinical governance, complete incident reporting, secure medication charts and notes, and consider whether the threshold for mandatory notification is met. The threshold depends on jurisdiction and facts, but practising while impaired and issuing unsafe treatment orders may amount to substantial risk to the public. I would seek advice if needed, but I would not allow executive discomfort to suppress reporting.

I would also address documentation. The stem says Dr Lane "later wrote incomplete notes." Incomplete documentation after sedation orders increases medico-legal risk and may compromise ongoing care. I would secure the record, ensure factual corrections are made through proper addenda rather than retrospective alteration, and review whether patients or families require disclosure if harm occurred.

My documentation would be factual: who reported what, what patient reviews were undertaken, what restrictions were placed on clinical duties, what support was offered to Dr Lane, what governance steps occurred, and the rationale for any mandatory notification decision. The consultant standard is to maintain patient safety, natural justice, staff safety and legal obligations simultaneously, rather than choosing loyalty to a colleague or loyalty to the organisation's reputation.`,
  },
  {
    id: "GOV-002",
    questionNumber: "MEQ-069",
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
    modelAnswer: `Helen's case is a serious medication error with actual harm, so the first consultant action is clinical stabilisation, not administrative language management. The stem states she was inadvertently given clozapine 300 mg instead of quetiapine 300 mg and then "became hypotensive, fell overnight and sustained a fractured wrist." I would ensure she receives immediate medical review, ongoing observations, falls assessment, fracture management, monitoring for clozapine-related sedation, hypotension, anticholinergic effects and cardiac concerns, and that the medication chart is corrected so no further dose is administered. Patient safety and harm mitigation come before the incident meeting.

The daughter's statement, "No one told us this was your mistake," is a major communication failure. This requires timely open disclosure. I would meet Helen and her daughter with an appropriate senior clinician and, if possible, the ward manager or risk representative. I would explain the known facts clearly, apologise for the error and the harm, outline what is being done clinically, and describe the review process. I would not speculate beyond known facts or assign premature individual blame, but I would not hide behind vague language. The risk manager's warning to "avoid admitting liability" does not mean avoiding honesty. A factual apology and transparent explanation are ethical and clinically necessary.

The incident must be framed as a systems failure until properly reviewed. The night nurse says, "I thought pharmacy had checked it," and the registrar says he "copied the medication list from a previous discharge summary without confirming it." Those clues point to failures in medication reconciliation, prescribing verification, pharmacy checking, nursing administration, handover and perhaps electronic chart design. I would initiate an incident report and root-cause or systems review that examines how clozapine could be transcribed and administered to a non-clozapine patient, what checks failed, and whether clozapine governance safeguards were bypassed.

The registrar's practice requires supervision and remediation, but I would avoid scapegoating. Copying a medication list without confirming it is unsafe and must be addressed through prescribing supervision, education and review of competence. At the same time, the nurse and pharmacy processes need review because medication safety is deliberately built on multiple checks. Staff are "distressed and blaming each other," so I would organise a debrief that supports staff emotionally while keeping the focus on patient harm, accountability and learning.

I would document the clinical event, open disclosure conversation, family questions, immediate treatment, incident notification, medication-chart correction, and planned review. I would also ensure Helen receives follow-up for the fracture and psychological impact, and that any complaint pathway is explained. The consultant-level response is not to protect the service by minimising the error, nor to punish a single junior doctor to create the appearance of action. It is to care for the patient, tell the truth, preserve evidence, identify system failures and implement changes that reduce recurrence.`,
  },
  {
    id: "GOV-003",
    questionNumber: "MEQ-070",
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
    modelAnswer: `Tariq should not be discharged simply because the hospital executive needs the bed. The phrase "When I leave, I know where she lives" is a specific threat toward an identifiable person in the context of psychosis and family violence. That single sentence changes the risk formulation. It is not neutral that he remains guarded and intermittently hostile, has refused family meetings, and was admitted after threatening his ex-partner while believing she was "infected by demons." I would treat this as ongoing dynamic risk to an identifiable victim, not as a resolved psychotic episode.

The executive director's statement, "We need this bed today," and the reference to ED targets create a system-pressure trap. A consultant can acknowledge access block and work constructively to create capacity, but clinical independence must be maintained. I would tell the executive that discharge is not safe at this point unless specific violence risk, victim safety and treatment adherence can be managed. I would offer to review other possible discharges or step-down options, but I would not sign an unsafe discharge to meet a performance target. If needed, I would escalate through clinical governance and document the pressure and my reasoning.

The registrar's suggestion to "document that he denies intent" is exactly the wrong risk logic. Denial of intent does not neutralise a direct threat, especially in a guarded patient with persecutory beliefs and an active family violence context. I would supervise the registrar that risk assessment is not a box-tick of stated intent; it is a formulation of behaviour, threats, access, mental state, history, substances, victim vulnerability and protective controls. The phrase "document that he denies intent" should be replaced by a documented explanation of why denial is or is not reliable in light of the rest of the evidence.

The active family violence order is not a side issue. It indicates prior legal recognition of risk and means that victim safety planning must occur. Staff are unsure about confidentiality, but confidentiality does not prevent lawful information sharing where there is serious risk to an identifiable person. I would consider police/family violence liaison, check the terms of the order, assess whether the ex-partner needs warning or safety support through appropriate channels, and document the legal and ethical basis for any disclosure. The tension is between preserving Tariq's confidentiality and protecting a foreseeable victim. In this case, the threat and context make victim safety an active obligation.

A plan of "temporary accommodation with crisis follow-up" is inadequate unless it specifically addresses the risk pathway. Where will he stay, how far from the ex-partner, who supervises medication, what are the legal restrictions, what happens if he leaves, what is the police role, what is the family violence safety plan, and what treatment engagement exists? If those questions cannot be answered, discharge is not defensible. I would reassess his psychosis, insight, capacity, substance use, access to the victim, access to weapons and willingness to accept treatment. If risk remains high, continued admission or involuntary treatment is justified if statutory criteria are met.

My documentation would record the exact threat, the active family violence order, the executive pressure, the registrar's uncertainty, victim-safety actions, confidentiality reasoning, and why the chosen disposition is the least restrictive safe option. If an adverse event occurred, the record should show that the consultant recognised the risk and acted on it, rather than allowing bed pressure to become the hidden determinant of discharge.`,
  },
  {
    id: "GOV-004",
    questionNumber: "MEQ-071",
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
    modelAnswer: `This scenario requires immediate patient-safety action and a supervision response, not a vague reminder to the registrar to call more often. The stem includes actual harm: a patient "required ICU transfer after oversedation." That is a sentinel warning that the registrar is making high-risk decisions beyond competence or without adequate escalation. My first action would be to ensure the ICU patient and any other patients affected by recent overnight decisions are reviewed, including the suicidal ED discharge and any rapid tranquillisation episodes. I would restrict the registrar from making independent high-risk after-hours decisions until competence and supervision arrangements are clarified.

The documentation issue is particularly serious. The registrar wrote "Consultant aware" although I had not been contacted. That is not a harmless shorthand. It is inaccurate documentation that could mislead future clinicians and medico-legal review, and it raises professionalism concerns. I would address it directly with the registrar, require the record to be corrected through a proper addendum rather than hidden alteration, and escalate through clinical governance and the training pathway. The response must be fair and factual, but inaccurate documentation cannot be minimised as stress or inexperience.

The registrar's explanation, "I thought consultants expected us to cope independently," suggests a system and supervision failure as well as an individual performance problem. I would ask how escalation expectations were communicated, whether after-hours workload is excessive, whether the registrar knew rapid tranquillisation policies, and whether they feared being criticised for calling. A Stage 1 registrar should not be left to infer when consultant input is required for suicidal discharge, seclusion, rapid tranquillisation or deteriorating medical status. I would create explicit escalation thresholds and make myself or the duty consultant visibly available.

The rapid tranquillisation clue, "without physical observations," is a concrete safety breach. Sedation without monitoring can cause respiratory depression, hypotension, arrhythmia or death. I would audit recent rapid tranquillisation events, reinforce policy, ensure nursing staff are empowered to refuse unsafe medication administration or escalate, and arrange direct teaching and observed practice for the registrar. The aim is not to humiliate the registrar, but to protect patients and restore safe practice.

The NUM's statement that "staff have lost confidence" matters because the MDT is now bypassing the registrar. That may be understandable, but it fragments care and can create further risk. I would meet the nursing team, acknowledge their concerns, clarify who makes which decisions, and establish a safe escalation pathway that does not rely on informal bypassing. Staff need to know that calling the consultant directly is acceptable when high-risk decisions exceed the registrar's competence.

At the same time, the director of training is right that the registrar requires support, not abandonment. I would develop a remediation plan with increased supervision, case review, prescribing/rapid tranquillisation training, observed assessments, documentation review, and clear competence milestones. Depending on the severity and insight, temporary removal from after-hours duties may be necessary. My documentation would cover patient reviews, incident reporting, correction of the false note, supervision changes, registrar discussion, MDT communication and training plan. The consultant-level standard is to hold patient safety, procedural fairness, education and governance together.`,
  },
  {
    id: "GOV-005",
    questionNumber: "MEQ-072",
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
    modelAnswer: `Daniel's death needs to be approached as a serious incident with potential coronial scrutiny, but the clinical heart of the review is already visible in the stem. The partner's call that "He has given away his tools and keeps saying we'll be better off without him" was not simply an anxious family call. Giving away meaningful possessions and expressing perceived burdensomeness are major dynamic suicide warning signs. In a man with recurrent depression and alcohol dependence, two days after discharge from crisis follow-up, that collateral should have triggered senior review and active safety planning.

The file note "denies suicidal ideation, low risk" is not defensible as a risk formulation. It records one negative symptom response and then applies a label. It does not reconcile the denial with the partner's warning, alcohol dependence, recent crisis involvement, possible preparatory behaviour, or the very high-risk transition period after discharge. I would explicitly identify this in the review: the failure was not that risk prediction is impossible, but that available dynamic risk information was not adequately weighted or escalated.

The junior clinician's documentation of the call as "partner anxious" and the fact that "no senior review occurred" suggest a system problem in triage and escalation. I would construct a factual timeline: when the call came, who took it, what was documented, what policies exist for collateral suicide warnings, whether the clinician had supervision available, whether the partner was called back, and what attempts were made to contact Daniel. I would review whether the service culture unintentionally discounts family collateral when the patient denies suicidal ideation.

The family's statement, "You ignored our warning," requires a compassionate and transparent response. I would not become defensive or speculate about causation. I would arrange senior contact through an open disclosure and postvention pathway, acknowledge the family's distress, explain that the service is reviewing the care, provide information about support and complaints processes, and preserve all records. If a coronial investigation is likely, communication should be factual, empathic and coordinated with governance/legal advice, but not evasive.

Staff are "distressed and worried about blame," so I would lead this as a just-culture review. That means supporting staff while still asking hard questions about decision-making, documentation and escalation. Just culture does not mean no accountability; it means distinguishing human error, system weakness, training needs and reckless practice. The review should lead to concrete improvements, such as mandatory senior review for collateral involving preparatory behaviour, clearer documentation standards, family-call escalation protocols, and safer discharge-from-crisis procedures.

My documentation and governance response would include preservation of the record, incident notification, timeline, family contact, staff support, clinical review findings and action plan. The consultant-level lesson is that suicide-risk assessment must synthesise behaviour, collateral and context, not rely on "denies suicidal ideation." Daniel's partner gave the team a clinically significant warning; the service response must acknowledge that and improve the system that allowed it to be minimised.`,
  },
];
