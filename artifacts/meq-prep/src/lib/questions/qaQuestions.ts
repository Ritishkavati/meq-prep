import type { QuizStem } from "../quizData";

export const QA_STEMS: QuizStem[] = [
  {
    id: "QA-001",
    questionNumber: "MEQ-053",
    topic: "quality_assurance",
    difficulty: "consultant",
    title: "Lithium Toxicity Missed After Dose Increase",
    candidateRole: "Director of psychiatry reviewing a serious clinical incident",
    setting: "Community mental health service and Emergency Department interface",
    stem: `You are the director of psychiatry for a metropolitan community mental health service. A serious incident notification arrives on Monday morning. Priya, a 58-year-old woman with bipolar disorder, was admitted to ICU overnight with lithium toxicity and acute kidney injury.

Two weeks earlier, her lithium dose had been increased after she reported poor sleep and irritability. The clinic note states: "dose increased; pathology form given." There is no documented lithium level, renal function result, or plan for who would check the bloods. Five days later, Priya's daughter phoned the clinic saying her mother had "vomiting, tremor and seemed confused." The call was documented by an administrative officer and forwarded to the duty inbox. No clinician reviewed it until Friday afternoon.

On Friday evening, Priya presented to ED after a fall. ED documented dehydration and confusion but discharged her with "viral gastroenteritis" and GP follow-up. Her daughter has now made a complaint saying, "I told your service she was getting toxic and no one listened." Staff are anxious that the incident will be blamed on one junior doctor.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Lithium dose increase lacked closed-loop monitoring",
        category: "physical_health",
        severity: "critical",
        clueInStem: "The clinic note states: \"dose increased; pathology form given.\"",
        whyItMatters: "Missing this signal means the candidate has accepted a pathology form as monitoring despite no allocated responsibility for lithium level or renal function follow-up.",
        relatedRisk: "Lithium toxicity can cause delirium, falls, renal injury, seizures and death.",
        relatedSystem: "The service lacked a reliable closed-loop pathology monitoring process.",
        modelWording: "Identify the dose-increase monitoring failure because lithium prescribing requires documented levels, renal function and clear responsibility for checking results.",
        keywords: ["lithium", "dose increase", "bloods", "level", "renal", "pathology", "monitoring", "toxicity"],
      },
      {
        id: "s2",
        name: "Daughter's toxicity call required same-day clinical escalation",
        category: "governance",
        severity: "critical",
        clueInStem: "Five days later, Priya's daughter phoned the clinic saying her mother had \"vomiting, tremor and seemed confused.\"",
        whyItMatters: "Missing this signal means the candidate has not recognised classic lithium toxicity symptoms after a dose change requiring urgent clinical review.",
        relatedRisk: "Delay allowed progression to ICU-level toxicity and acute kidney injury.",
        relatedSystem: "Administrative triage of clinical risk without escalation is a governance failure.",
        modelWording: "Escalate vomiting, tremor and confusion after a lithium dose increase as a same-day toxicity concern requiring medical review.",
        keywords: ["vomiting", "tremor", "confus", "red flag", "escalat", "urgent review", "toxicity", "daughter phoned"],
      },
      {
        id: "s3",
        name: "Duty inbox delay was a system failure",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "The call was documented by an administrative officer and forwarded to the duty inbox. No clinician reviewed it until Friday afternoon.",
        whyItMatters: "Missing this signal means the candidate has blamed an individual delay rather than recognising unsafe inbox ownership and escalation design.",
        relatedSystem: "Requires review of triage protocols, inbox ownership, escalation thresholds and audit trail.",
        modelWording: "Review duty-inbox ownership and escalation because a high-risk clinical message sat for days without clinician review.",
        keywords: ["duty inbox", "no clinician", "delay", "system", "triage", "escalation", "workflow", "ownership"],
      },
      {
        id: "s4",
        name: "ED anchored on gastroenteritis despite lithium-risk signs",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "ED documented dehydration and confusion but discharged her with \"viral gastroenteritis\" and GP follow-up.",
        whyItMatters: "Missing this signal means the candidate has not identified cross-service diagnostic anchoring in a lithium-treated patient with dehydration and confusion.",
        relatedSystem: "Requires joint mental health-ED review rather than blaming one service.",
        modelWording: "Include ED in the review because dehydration and confusion in a lithium-treated patient should have prompted toxicity consideration and psychiatric liaison.",
        keywords: ["ED", "dehydration", "confusion", "viral gastroenteritis", "anchoring", "liaison", "cross-service"],
      },
      {
        id: "s5",
        name: "Daughter requires open disclosure after ignored warning",
        category: "family_carer",
        severity: "important",
        clueInStem: "Her daughter has now made a complaint saying, \"I told your service she was getting toxic and no one listened.\"",
        whyItMatters: "Missing this signal means the candidate has not acknowledged that accurate carer information was provided and not acted on.",
        relatedSystem: "Family concerns must be treated as clinical data within safety systems.",
        modelWording: "Commence open disclosure with Priya and her daughter because the daughter's warning was clinically accurate and was missed by the service.",
        keywords: ["daughter", "complaint", "open disclosure", "apology", "family concern", "not listened", "carer"],
      },
      {
        id: "s6",
        name: "Review must avoid scapegoating the junior doctor",
        category: "governance",
        severity: "important",
        clueInStem: "Staff are anxious that the incident will be blamed on one junior doctor.",
        whyItMatters: "Missing this signal means the candidate has failed to use a just-culture lens that separates system learning from individual accountability.",
        relatedSystem: "A just-culture review supports learning while still addressing accountability.",
        modelWording: "Use a just-culture review because lithium monitoring, inbox triage and ED communication failures cannot be reduced to one junior doctor's error.",
        keywords: ["junior doctor", "blamed", "just culture", "system contributors", "supervision", "accountability"],
      },
      {
        id: "s7",
        name: "Current ICU admission confirms serious preventable harm",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "Priya, a 58-year-old woman with bipolar disorder, was admitted to ICU overnight with lithium toxicity and acute kidney injury.",
        whyItMatters: "Missing this signal means the candidate has treated the event as a documentation issue rather than serious patient harm requiring immediate governance response.",
        modelWording: "Ensure Priya's current medical safety and senior notification because ICU admission with lithium toxicity and acute kidney injury makes this a serious incident.",
        keywords: ["ICU", "lithium toxicity", "acute kidney injury", "serious incident", "medical safety", "senior notification"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s7"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `This is a serious medication safety incident with actual patient harm, not a narrow documentation problem. Priya was admitted to ICU with lithium toxicity and acute kidney injury, so my first responsibility is to ensure her current medical care is safe, notify senior service leadership and commence the formal incident process.

The core prescribing failure occurred after the lithium dose increase. The note "dose increased; pathology form given" is not a monitoring plan. There was no documented lithium level, renal function result or named clinician responsible for checking the bloods, so the system relied on the patient and family to complete and escalate monitoring for a high-risk medication.

The daughter's call should have changed everything. Vomiting, tremor and confusion five days after a lithium increase are red-flag toxicity symptoms requiring same-day clinician review and urgent medical assessment. Forwarding the call to a duty inbox that was not reviewed until Friday shows an unsafe triage and inbox-ownership process.

The ED presentation also needs review. Dehydration and confusion in a lithium-treated patient should have prompted consideration of lithium toxicity, not anchoring on viral gastroenteritis with GP follow-up. The review should include community psychiatry, ED, administration and pharmacy because the harm crossed service boundaries.

I would begin open disclosure with Priya and her daughter, acknowledging that her warning was clinically important and was not acted on. Staff anxiety about blaming one junior doctor should be addressed through a just-culture process that examines lithium monitoring, duty inbox triage, supervision, ED liaison, documentation and escalation while still addressing any individual accountability fairly.`,
  },
  {
    id: "QA-002",
    questionNumber: "MEQ-054",
    topic: "quality_assurance",
    difficulty: "consultant",
    title: "Clozapine Neutropenia Alert Not Acted On",
    candidateRole: "Consultant psychiatrist leading a medication safety review",
    setting: "Public community clozapine clinic",
    stem: `You are the consultant psychiatrist responsible for a community clozapine clinic. A pharmacy manager contacts you because Daniel, a 36-year-old man with treatment-resistant schizophrenia, was dispensed clozapine for seven days despite a pathology alert stating "red result — neutrophils below threshold."

The clozapine nurse was on leave. The covering nurse documented "bloods uploaded; pharmacy to confirm." The junior registrar signed the script remotely from another site and did not review the pathology system. The pharmacist says the electronic system displayed a red warning, but the clinic had previously told the pharmacy to "continue dispensing unless psychiatry phones to stop."

Daniel presented to ED three days later with fever and mouth ulcers. His mother says she had called the clinic twice reporting he was "shivering and not eating." Both calls were documented as "mother anxious; reassure." The service manager asks whether this can be managed as a pharmacy error to avoid a formal serious incident review.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Clozapine red result required immediate stop-and-review action",
        category: "physical_health",
        severity: "critical",
        clueInStem: "A pharmacy manager contacts you because Daniel, a 36-year-old man with treatment-resistant schizophrenia, was dispensed clozapine for seven days despite a pathology alert stating \"red result — neutrophils below threshold.\"",
        whyItMatters: "Missing this signal means the candidate has not recognised a critical clozapine safety trigger with risk of agranulocytosis and sepsis.",
        relatedRisk: "Risk of agranulocytosis, sepsis and death.",
        relatedSystem: "Requires robust clozapine monitoring governance and stop-dispense escalation.",
        modelWording: "Stop and urgently review clozapine because a red neutrophil result below threshold is a critical medication safety alert.",
        keywords: ["clozapine", "neutrophil", "red result", "below threshold", "agranulocytosis", "blood", "stop", "alert"],
      },
      {
        id: "s2",
        name: "Remote prescribing occurred without pathology review",
        category: "governance",
        severity: "critical",
        clueInStem: "The junior registrar signed the script remotely from another site and did not review the pathology system.",
        whyItMatters: "Missing this signal means the candidate has not identified unsafe clozapine prescribing without confirmation of current blood safety.",
        relatedSystem: "Highlights supervision, prescribing authority and electronic safety workflow failures.",
        modelWording: "Review registrar supervision and prescribing authority because clozapine scripts should not be signed without checking pathology safety.",
        keywords: ["registrar", "remote", "signed", "did not review", "pathology", "prescribing", "supervision"],
      },
      {
        id: "s3",
        name: "Clinic-pharmacy protocol reversed the safety default",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "The pharmacist says the electronic system displayed a red warning, but the clinic had previously told the pharmacy to \"continue dispensing unless psychiatry phones to stop.\"",
        whyItMatters: "Missing this signal means the candidate has not seen that the shared protocol allowed dispensing to continue unless psychiatry intervened.",
        relatedSystem: "Requires shared protocol between pharmacy and psychiatry.",
        modelWording: "Redesign the stop-dispense protocol because clozapine red alerts should default to stop and escalate unless explicitly cleared.",
        keywords: ["continue dispensing", "phones to stop", "pharmacy", "protocol", "default", "dispense", "red warning"],
      },
      {
        id: "s4",
        name: "Fever and mouth ulcers suggest possible neutropenic sepsis",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "Daniel presented to ED three days later with fever and mouth ulcers.",
        whyItMatters: "Missing this signal means the candidate has not treated the current presentation as a potentially life-threatening clozapine complication.",
        relatedRisk: "Possible neutropenic sepsis.",
        modelWording: "Treat fever and mouth ulcers after neutrophil alert as possible neutropenic sepsis requiring urgent medical care.",
        keywords: ["fever", "mouth ulcers", "infection", "sepsis", "neutropenic", "urgent medical"],
      },
      {
        id: "s5",
        name: "Mother's deterioration calls were mislabelled as anxiety",
        category: "family_carer",
        severity: "important",
        clueInStem: "His mother says she had called the clinic twice reporting he was \"shivering and not eating.\" Both calls were documented as \"mother anxious; reassure.\"",
        whyItMatters: "Missing this signal means the candidate has accepted reassurance of a carer while ignoring deterioration in a clozapine patient with a red result.",
        relatedSystem: "Carer calls need clinical triage criteria rather than reassurance by default.",
        modelWording: "Treat the mother's calls as clinical deterioration information because shivering and not eating required escalation, not reassurance.",
        keywords: ["mother", "called twice", "shivering", "not eating", "carer", "reassure", "deterioration"],
      },
      {
        id: "s6",
        name: "Serious incident review must not be avoided for reputation",
        category: "governance",
        severity: "important",
        clueInStem: "The service manager asks whether this can be managed as a pharmacy error to avoid a formal serious incident review.",
        whyItMatters: "Missing this signal means the candidate has allowed reputational concerns to prevent learning from a multi-system clozapine safety failure.",
        relatedSystem: "Requires formal incident reporting, open disclosure and system learning.",
        modelWording: "Initiate a formal serious incident review because the failure involved clinic cover, prescribing, pharmacy protocol, pathology alerts and carer escalation.",
        keywords: ["avoid", "serious incident", "pharmacy error", "formal review", "governance", "incident report", "system failure"],
      },
      {
        id: "s7",
        name: "Leave cover failed for a high-risk clozapine process",
        category: "governance",
        severity: "important",
        clueInStem: "The clozapine nurse was on leave. The covering nurse documented \"bloods uploaded; pharmacy to confirm.\"",
        whyItMatters: "Missing this signal means the candidate has not identified that clozapine leave cover lacked clear accountability for reviewing and acting on blood results.",
        modelWording: "Review leave-cover arrangements because clozapine monitoring needs explicit ownership when the usual nurse is absent.",
        keywords: ["clozapine nurse", "on leave", "covering nurse", "bloods uploaded", "pharmacy to confirm", "ownership"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4"],
      secondary: ["s5", "s6", "s7"],
      lowYield: [],
    },
    modelAnswer: `The immediate priority is Daniel's safety. Fever and mouth ulcers after a neutrophil red result should be treated as possible neutropenic sepsis, requiring urgent medical assessment and coordination with ED, pathology, pharmacy and the clozapine-monitoring pathway.

This is a serious clozapine governance failure. Daniel was dispensed clozapine for seven days despite a pathology alert stating "red result — neutrophils below threshold." Clozapine red alerts should trigger stop-and-review action, not continuation unless someone phones to stop dispensing.

The failure was distributed across the system. The usual clozapine nurse was on leave, the covering nurse documented "bloods uploaded; pharmacy to confirm," the junior registrar signed remotely without reviewing the pathology system, and the pharmacy was operating under an unsafe instruction to continue unless psychiatry intervened. Each step reflects unclear ownership of clozapine safety.

The mother's calls were also mishandled. She called twice reporting that Daniel was "shivering and not eating," but this was documented as "mother anxious; reassure." In a clozapine patient with a red result, those calls were clinical deterioration signals and should have triggered urgent review.

I would not manage this as a pharmacy error to avoid a serious incident review. I would notify governance leads, ensure open disclosure to Daniel and his mother, preserve the audit trail, and conduct a formal review of pathology alert ownership, stop-dispense rules, remote prescribing, leave cover, carer escalation and shared clinic-pharmacy protocols.`,
  },
  {
    id: "QA-011",
    questionNumber: "MEQ-055",
    topic: "quality_assurance",
    difficulty: "consultant",
    title: "Seclusion Injury and Incomplete Documentation",
    candidateRole: "Clinical director reviewing restrictive practice governance",
    setting: "Acute inpatient mental health unit",
    stem: `You are the clinical director of an acute inpatient mental health unit. Overnight, Lena, a 29-year-old woman admitted with psychosis and a history of childhood sexual trauma, was secluded after throwing a plastic chair at the nurses' station. At 3 am she was found on the floor of the seclusion room with a fractured wrist.

The seclusion form states "agitated, unsafe, secluded as per policy." There is no documented attempted de-escalation, no consultant notification, no review time, and no physical observation chart for the first 45 minutes. CCTV shows Lena repeatedly banging on the door and yelling, "Don't lock me in, he locked me in before." A junior nurse says staffing was short and "there was no time to keep writing." The night registrar says security advised seclusion and "everyone agreed." Lena's sister has phoned demanding to know why trauma history was ignored.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Fractured wrist in seclusion is a serious restrictive-practice incident",
        category: "governance",
        severity: "critical",
        clueInStem: "At 3 am she was found on the floor of the seclusion room with a fractured wrist.",
        whyItMatters: "Missing this signal means the candidate has not recognised an injury during seclusion as a serious incident requiring immediate reporting and review.",
        relatedSystem: "Restrictive practices require heightened oversight and documentation.",
        modelWording: "Report and review the fractured wrist in seclusion as a serious restrictive-practice incident requiring immediate governance response.",
        keywords: ["fractured wrist", "seclusion", "serious incident", "restrictive practice", "injury", "report", "review"],
      },
      {
        id: "s2",
        name: "Least restrictive alternatives were not documented",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "There is no documented attempted de-escalation, no consultant notification, no review time, and no physical observation chart for the first 45 minutes.",
        whyItMatters: "Missing this signal means the candidate has accepted seclusion without evidence that de-escalation or alternatives were attempted.",
        relatedLegal: "Restrictive practice legality depends on necessity, proportionality and documentation.",
        modelWording: "Examine whether seclusion was necessary and least restrictive because no attempted de-escalation was documented.",
        keywords: ["de-escalation", "least restrictive", "seclusion", "necessity", "proportionate", "alternative", "document"],
      },
      {
        id: "s3",
        name: "Observation gap created immediate safety risk",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "There is no documented attempted de-escalation, no consultant notification, no review time, and no physical observation chart for the first 45 minutes.",
        whyItMatters: "Missing this signal means the candidate has not identified that absent observations may have delayed detection of injury or deterioration.",
        relatedRisk: "Observation gap may have contributed to delayed detection of injury.",
        modelWording: "Review the 45-minute observation gap because seclusion requires monitoring to detect injury, collapse and escalating distress.",
        keywords: ["observation", "45 minutes", "physical observations", "chart", "monitor", "seclusion room"],
      },
      {
        id: "s4",
        name: "Seclusion reactivated trauma and worsened distress",
        category: "trauma",
        severity: "critical",
        clueInStem: "CCTV shows Lena repeatedly banging on the door and yelling, \"Don't lock me in, he locked me in before.\"",
        whyItMatters: "Missing this signal means the candidate has not recognised that Lena explicitly linked confinement to previous trauma.",
        relatedCultural: "Trauma history must shape restrictive practice planning, not sit as background information.",
        modelWording: "Treat Lena's words as a trauma signal because seclusion may have re-traumatised her and contributed to escalation.",
        keywords: ["trauma", "locked me in", "re-traumatisation", "childhood sexual trauma", "trauma-informed", "distress"],
      },
      {
        id: "s5",
        name: "Consultant notification was missing despite high-risk seclusion",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "There is no documented attempted de-escalation, no consultant notification, no review time, and no physical observation chart for the first 45 minutes.",
        whyItMatters: "Missing this signal means the candidate has not identified absent senior oversight in restrictive practice involving injury and complex trauma.",
        relatedSystem: "Consultant accountability cannot be replaced by security or informal team agreement.",
        modelWording: "Review the absence of consultant notification because complex trauma, seclusion and injury require senior medical oversight.",
        keywords: ["consultant notification", "senior review", "medical oversight", "supervision", "notify consultant"],
      },
      {
        id: "s6",
        name: "Short staffing explains context but not absent documentation",
        category: "system_pressure",
        severity: "important",
        clueInStem: "A junior nurse says staffing was short and \"there was no time to keep writing.\"",
        whyItMatters: "Missing this signal means the candidate has either blamed the nurse or accepted staffing pressure as an excuse for unsafe seclusion records.",
        relatedSystem: "Requires review of night staffing, acuity, training and escalation.",
        modelWording: "Review short staffing as a systems contributor while reinforcing that restrictive-practice documentation and observations remain mandatory.",
        keywords: ["staffing", "short", "no time", "documentation", "night", "acuity", "system factor"],
      },
      {
        id: "s7",
        name: "Security advice and informal agreement do not authorise seclusion",
        category: "governance",
        severity: "important",
        clueInStem: "The night registrar says security advised seclusion and \"everyone agreed.\"",
        whyItMatters: "Missing this signal means the candidate has allowed informal group consensus and security advice to replace clinician-led legal reasoning.",
        modelWording: "Clarify decision accountability because security advice and informal agreement do not replace clinical authorisation, documentation and review.",
        keywords: ["security advised", "everyone agreed", "accountability", "clinical authorisation", "seclusion decision", "registrar"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4"],
      secondary: ["s5", "s6", "s7"],
      lowYield: [],
    },
    modelAnswer: `This is a serious restrictive-practice incident. Lena sustained a fractured wrist in seclusion, and the review must immediately address her physical injury, psychological distress, incident reporting, preservation of CCTV and open disclosure with Lena and, where appropriate, her sister.

The seclusion documentation is inadequate. The form says only "agitated, unsafe, secluded as per policy," with no documented de-escalation, no consultant notification, no review time and no physical observation chart for the first 45 minutes. That means the team has not demonstrated that seclusion was necessary, proportionate, least restrictive or properly monitored.

The trauma issue is central. CCTV shows Lena banging on the door and yelling, "Don't lock me in, he locked me in before." Given her history of childhood sexual trauma, this should have triggered urgent trauma-informed review, consideration of ending or modifying seclusion, and alternative engagement strategies.

The explanations from staff need a just-culture response. Short staffing and acuity may be real contributors, but they do not remove the obligation to observe and document seclusion. Similarly, security advice and the statement that "everyone agreed" do not replace clinician-led legal reasoning or consultant oversight.

The governance review should examine seclusion authorisation, observation practice, trauma-informed alternatives, consultant notification, night staffing, staff training, physical monitoring and documentation standards. The aim is to learn and prevent recurrence, not simply blame the junior nurse or registrar.`,
  },
  {
    id: "QA-004",
    questionNumber: "MEQ-056",
    topic: "quality_assurance",
    difficulty: "consultant",
    title: "Absconding From ED After Delayed Psychiatric Review",
    candidateRole: "Consultant psychiatrist asked to review an ED adverse event",
    setting: "Overcrowded metropolitan Emergency Department",
    stem: `You are the consultant psychiatrist responsible for ED liaison. At 7 am you are told that Omar, a 22-year-old man brought in by police under an emergency apprehension power, absconded from ED at 2 am and was later found on railway tracks with serious injuries.

He had presented at 8 pm with persecutory beliefs that "the police implanted a tracker in my jaw." He was pacing, refusing oral medication, and repeatedly asking where the exits were. The ED was overcrowded and Omar was placed in a corridor bay because no mental health assessment room was available. The triage note states "psychiatry aware; review when able." The mental health nurse was covering two hospitals by phone. Security had been asked to "keep an eye on him" but there was no documented observation level.

At midnight, the ED medical registrar documented "likely drug-induced psychosis; medically cleared." No urine drug screen was obtained. Omar's father phoned ED saying Omar had not slept for five nights and had recently bought a knife because "people are coming." This was not entered into the chart.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Absconding followed by railway-track injury is a sentinel event",
        category: "governance",
        severity: "critical",
        clueInStem: "At 7 am you are told that Omar, a 22-year-old man brought in by police under an emergency apprehension power, absconded from ED at 2 am and was later found on railway tracks with serious injuries.",
        whyItMatters: "Missing this signal means the candidate has not recognised absconding under emergency powers with serious injury as a formal adverse event.",
        relatedRisk: "Severe risk to self due to psychosis, disorganisation and unsafe environment.",
        relatedSystem: "Requires review of ED observation, mental health escalation and environmental safety.",
        modelWording: "Report and review the absconding event formally because railway-track injury after ED departure indicates serious preventable harm.",
        keywords: ["abscond", "railway", "serious injuries", "sentinel", "incident", "adverse event", "safety"],
      },
      {
        id: "s2",
        name: "Exit-seeking made absconding risk visible",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "He was pacing, refusing oral medication, and repeatedly asking where the exits were.",
        whyItMatters: "Missing this signal means the candidate has not recognised a direct absconding warning in a psychotic patient under emergency apprehension powers.",
        relatedRisk: "Failure to set observation level exposed Omar to preventable harm.",
        modelWording: "Set absconding precautions and observation level because repeated exit-seeking made the risk visible before the event.",
        keywords: ["exits", "exit", "absconding risk", "observation", "pacing", "leave", "precaution"],
      },
      {
        id: "s3",
        name: "Security watching was not a clinical observation plan",
        category: "governance",
        severity: "critical",
        clueInStem: "Security had been asked to \"keep an eye on him\" but there was no documented observation level.",
        whyItMatters: "Missing this signal means the candidate has allowed informal security monitoring to substitute for a documented clinical observation plan.",
        relatedSystem: "Requires clear ownership of observations between ED, mental health and security.",
        modelWording: "Clarify observation ownership because asking security to keep an eye on Omar did not create a documented clinical observation level.",
        keywords: ["observation level", "security", "keep an eye", "documented", "watch", "ownership"],
      },
      {
        id: "s4",
        name: "Corridor placement increased environmental risk",
        category: "system_pressure",
        severity: "important",
        clueInStem: "The ED was overcrowded and Omar was placed in a corridor bay because no mental health assessment room was available.",
        whyItMatters: "Missing this signal means the candidate has not named the unsafe environment that increased stimulation, escape opportunity and poor observation.",
        relatedSystem: "Requires escalation pathway when no safe assessment space exists.",
        modelWording: "Escalate corridor placement as a system risk because overcrowding and lack of a mental health room made safe containment harder.",
        keywords: ["corridor", "assessment room", "overcrowded", "environment", "safe space", "resource"],
      },
      {
        id: "s5",
        name: "Father's weapon and insomnia collateral was omitted",
        category: "collateral",
        severity: "critical",
        clueInStem: "Omar's father phoned ED saying Omar had not slept for five nights and had recently bought a knife because \"people are coming.\" This was not entered into the chart.",
        whyItMatters: "Missing this signal means the candidate has ignored undocumented collateral that showed escalating psychosis, weapon access and higher risk.",
        relatedRisk: "Risk to self and others was higher than recorded.",
        modelWording: "Audit collateral capture because the father's report of five nights without sleep and knife purchase should have changed the risk formulation.",
        keywords: ["father", "five nights", "knife", "collateral", "not documented", "weapon", "sleep"],
      },
      {
        id: "s6",
        name: "Drug-induced psychosis label was premature",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "At midnight, the ED medical registrar documented \"likely drug-induced psychosis; medically cleared.\" No urine drug screen was obtained.",
        whyItMatters: "Missing this signal means the candidate has accepted diagnostic closure that was unsupported and did not address risk.",
        modelWording: "Challenge the drug-induced formulation because it was recorded without urine drug screen, collateral integration or a risk-based disposition plan.",
        keywords: ["drug-induced", "diagnostic closure", "medically cleared", "urine", "premature", "formulation"],
      },
      {
        id: "s7",
        name: "Phone-only mental health cover delayed active review",
        category: "system_pressure",
        severity: "important",
        clueInStem: "The triage note states \"psychiatry aware; review when able.\" The mental health nurse was covering two hospitals by phone.",
        whyItMatters: "Missing this signal means the candidate has not identified service-cover design as a contributor to delayed psychiatric assessment and unclear accountability.",
        modelWording: "Review after-hours mental health cover because phone-only coverage across two hospitals contributed to delayed active assessment.",
        keywords: ["psychiatry aware", "review when able", "covering two hospitals", "phone", "delayed review", "accountability"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s5"],
      secondary: ["s4", "s6", "s7"],
      lowYield: [],
    },
    modelAnswer: `This is a serious ED mental health adverse event. Omar was brought in under emergency apprehension powers, absconded from ED and was later found on railway tracks with serious injuries. I would ensure his immediate medical care, notify senior ED and mental health leadership, preserve records and commence incident reporting and open disclosure with his family.

The absconding risk was visible before the event. Omar was pacing, refusing oral medication and repeatedly asking where the exits were. He was also placed in a corridor bay because no mental health assessment room was available. That environment increased stimulation and absconding opportunity and should have triggered escalation and a documented observation plan.

Security being asked to "keep an eye on him" was not enough. There was no documented observation level, and unclear ownership between ED, mental health and security is a core safety failure. A patient under emergency powers with psychosis and exit-seeking behaviour requires a specific observation and containment plan.

The father's collateral was critical and was not entered into the chart. Five nights without sleep and recent purchase of a knife because "people are coming" showed escalating psychosis and weapon risk. That information should have changed formulation, observation and disposition.

The review should also address premature diagnostic closure and service design. "Likely drug-induced psychosis; medically cleared" was recorded without a urine drug screen and without integrating collateral. Phone-only mental health cover across two hospitals and a vague note that psychiatry would review when able created delayed accountability. The corrective actions should address safe assessment spaces, observation ownership, collateral documentation, after-hours cover and ED-mental health escalation.`,
  },
  {
    id: "QA-005",
    questionNumber: "MEQ-057",
    topic: "quality_assurance",
    difficulty: "consultant",
    title: "Wrong Patient Long-Acting Injection",
    candidateRole: "Consultant psychiatrist leading immediate response to a medication error",
    setting: "Community depot clinic",
    stem: `You are the consultant psychiatrist covering a busy community depot clinic. A nurse phones you distressed after realising that Sam, a 44-year-old man prescribed oral sertraline only, was given paliperidone long-acting injection intended for another patient with the same surname.

The clinic was running 50 minutes late. The usual two-nurse identity check was not completed because one nurse was called to an urgent home visit. The medication fridge contained two depot packs with handwritten sticky notes rather than printed labels. Sam questioned the injection, saying, "I don't usually have needles," but the nurse reassured him that "the doctor changed the plan." No doctor had changed the plan.

Sam has a history of severe neuroleptic sensitivity and works as a truck driver. He is angry and wants to leave immediately. The team leader says, "Can we just apologise and monitor him? Reporting this will make the service look unsafe."`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Wrong-patient paliperidone LAI is a serious medication error",
        category: "governance",
        severity: "critical",
        clueInStem: "A nurse phones you distressed after realising that Sam, a 44-year-old man prescribed oral sertraline only, was given paliperidone long-acting injection intended for another patient with the same surname.",
        whyItMatters: "Missing this signal means the candidate has treated a non-reversible long-acting injection error as a minor clinic mistake.",
        relatedRisk: "Paliperidone LAI cannot be rapidly removed and may cause prolonged adverse effects.",
        modelWording: "Treat this as a serious wrong-patient LAI error because Sam received an antipsychotic depot not prescribed for him.",
        keywords: ["wrong patient", "paliperidone", "long-acting", "LAI", "same surname", "medication error", "depot"],
      },
      {
        id: "s2",
        name: "Two-nurse identity check failed under workflow pressure",
        category: "governance",
        severity: "critical",
        clueInStem: "The usual two-nurse identity check was not completed because one nurse was called to an urgent home visit.",
        whyItMatters: "Missing this signal means the candidate has not identified the failed safety barrier that should have prevented wrong-patient administration.",
        relatedSystem: "Requires review of clinic workflow, staffing and mandatory checking process.",
        modelWording: "Review the identity-check failure because the two-nurse process was the core medication safety barrier.",
        keywords: ["identity check", "two-nurse", "not completed", "checking", "safety barrier", "ID"],
      },
      {
        id: "s3",
        name: "Sticky-note labelling created a foreseeable selection error",
        category: "system_pressure",
        severity: "important",
        clueInStem: "The medication fridge contained two depot packs with handwritten sticky notes rather than printed labels.",
        whyItMatters: "Missing this signal means the candidate has ignored an unsafe storage and labelling design that made the medication error foreseeable.",
        relatedSystem: "Requires medication storage and labelling redesign.",
        modelWording: "Remove handwritten sticky-note labelling because depot storage needs reliable printed labels and patient identifiers.",
        keywords: ["sticky notes", "printed labels", "labelling", "fridge", "storage", "system design"],
      },
      {
        id: "s4",
        name: "Patient's concern was overridden instead of verified",
        category: "ethics",
        severity: "critical",
        clueInStem: "Sam questioned the injection, saying, \"I don't usually have needles,\" but the nurse reassured him that \"the doctor changed the plan.\" No doctor had changed the plan.",
        whyItMatters: "Missing this signal means the candidate has not recognised the patient's own warning as the final missed safety check.",
        modelWording: "Treat Sam's concern as a stop signal because patient discrepancy should trigger immediate verification before medication administration.",
        keywords: ["don't usually have needles", "questioned", "patient concern", "overridden", "verify", "stopped"],
      },
      {
        id: "s5",
        name: "Neuroleptic sensitivity and truck driving create immediate safety obligations",
        category: "physical_health",
        severity: "important",
        clueInStem: "Sam has a history of severe neuroleptic sensitivity and works as a truck driver.",
        whyItMatters: "Missing this signal means the candidate has not addressed adverse-effect monitoring and public safety after an unintended antipsychotic depot.",
        relatedRisk: "Sedation, EPS or akathisia could endanger Sam and the public if he drives.",
        modelWording: "Provide urgent monitoring and driving advice because neuroleptic sensitivity and truck driving create physical and occupational risk.",
        keywords: ["neuroleptic sensitivity", "truck driver", "driving", "monitor", "EPS", "sedation", "occupational"],
      },
      {
        id: "s6",
        name: "Reputation concern must not prevent reporting",
        category: "governance",
        severity: "important",
        clueInStem: "The team leader says, \"Can we just apologise and monitor him? Reporting this will make the service look unsafe.\"",
        whyItMatters: "Missing this signal means the candidate has allowed reputation management to block mandatory incident reporting and system learning.",
        relatedSystem: "Requires incident reporting, open disclosure and medication safety review.",
        modelWording: "Report the incident formally because open disclosure and governance review are required even if the service worries about appearing unsafe.",
        keywords: ["reporting", "look unsafe", "avoid", "incident", "open disclosure", "reputation", "governance"],
      },
      {
        id: "s7",
        name: "Sam's wish to leave requires engagement and immediate risk plan",
        category: "immediate_safety",
        severity: "important",
        clueInStem: "He is angry and wants to leave immediately.",
        whyItMatters: "Missing this signal means the candidate has not managed the immediate risk of losing clinical contact after a medication error requiring monitoring.",
        modelWording: "Engage Sam immediately and explain the monitoring plan because leaving without advice could expose him and the public to avoidable risk.",
        keywords: ["angry", "leave immediately", "engagement", "monitoring", "advice", "immediate risk", "follow-up"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s4"],
      secondary: ["s3", "s5", "s6", "s7"],
      lowYield: [],
    },
    modelAnswer: `This is a serious wrong-patient long-acting injection error. Sam was prescribed oral sertraline only but received paliperidone LAI intended for another patient with the same surname. Because the medication cannot be removed once administered, the immediate response must focus on honest disclosure, medical advice, monitoring and risk mitigation.

The clinic's safety barriers failed at several points. The two-nurse identity check was not completed because one nurse was diverted to an urgent home visit, and the medication fridge contained handwritten sticky notes rather than printed labels. Those are system conditions that made wrong-patient administration foreseeable.

Sam also gave the team a final opportunity to stop the error. He said, "I don't usually have needles," but was reassured that the doctor had changed the plan when no doctor had done so. Patient concern should have triggered verification, not reassurance.

His neuroleptic sensitivity and work as a truck driver make the post-error plan urgent. I would explain possible adverse effects, arrange medical monitoring, provide driving and work-safety advice, give emergency contacts and organise follow-up. His anger and wish to leave need immediate engagement so that he does not leave without understanding the risks.

The team leader's wish to avoid reporting is unacceptable. I would complete formal incident reporting, commence open disclosure, support the distressed nurse, review identity-checking and labelling systems, and ensure the other patient who should have received the depot is also clinically reviewed.`,
  },
  {
    id: "QA-006",
    questionNumber: "MEQ-058",
    topic: "quality_assurance",
    difficulty: "consultant",
    title: "Interpreter Failure and Cultural Safety Complaint",
    candidateRole: "Service clinical lead responding to a complaint",
    setting: "Consultation-liaison psychiatry service",
    stem: `You are the clinical lead for a consultation-liaison psychiatry service. A complaint is received from the family of Mrs Tran, a 72-year-old Vietnamese-speaking woman admitted with delirium secondary to urosepsis. Psychiatry was asked to assess "refusal of antibiotics and possible depression."

The note states "patient lacks capacity; family agree with treatment." The assessment was conducted using Mrs Tran's adult son as interpreter. No professional interpreter was used. The son later told staff that his mother was "ashamed and did not want strangers to know family business." Nursing notes from the same morning describe Mrs Tran as fluctuating, pulling at lines, and speaking to deceased relatives. The psychiatry note contains no cognitive assessment, no delirium formulation, and no record of the actual decision being assessed.

Mrs Tran was physically restrained for IV antibiotics. Her daughter says no one explained why restraint was used and that the family now believes the hospital "treated her like a difficult migrant rather than a sick older woman."`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Family interpretation made the capacity assessment unsafe",
        category: "capacity",
        severity: "critical",
        clueInStem: "The assessment was conducted using Mrs Tran's adult son as interpreter. No professional interpreter was used.",
        whyItMatters: "Missing this signal means the candidate has accepted a high-stakes capacity assessment without reliable professional communication support.",
        relatedLegal: "Capacity is decision-specific and requires effective communication.",
        relatedCultural: "Language access is part of culturally safe care, not an optional courtesy.",
        modelWording: "Use a professional Vietnamese interpreter because capacity and consent cannot be safely assessed through a family interpreter in this context.",
        keywords: ["interpreter", "professional interpreter", "son", "capacity", "language", "procedurally", "communication"],
      },
      {
        id: "s2",
        name: "Delirium formulation was missed despite clear features",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "Nursing notes from the same morning describe Mrs Tran as fluctuating, pulling at lines, and speaking to deceased relatives.",
        whyItMatters: "Missing this signal means the candidate has allowed refusal or depression to obscure delirium in urosepsis.",
        relatedRisk: "Mislabeling delirium as refusal or depression can lead to unsafe coercion and poor medical care.",
        modelWording: "Formulate delirium because fluctuation, line-pulling and speaking to deceased relatives are acute cognitive symptoms in urosepsis.",
        keywords: ["delirium", "fluctuat", "pulling at lines", "deceased relatives", "urosepsis", "cognitive", "confusion"],
      },
      {
        id: "s3",
        name: "Capacity documentation was not decision-specific",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "The psychiatry note contains no cognitive assessment, no delirium formulation, and no record of the actual decision being assessed.",
        whyItMatters: "Missing this signal means the candidate has accepted a global capacity conclusion without identifying the treatment decision, information given or reasoning tested.",
        relatedLegal: "Invalid documentation weakens authority for treatment and restraint.",
        modelWording: "Rewrite the capacity opinion decision-specifically because it must state the antibiotic decision, cognitive findings and how information was understood and weighed.",
        keywords: ["decision-specific", "actual decision", "understand", "weigh", "capacity documentation", "global"],
      },
      {
        id: "s4",
        name: "Physical restraint for antibiotics required lawful least-restrictive reasoning",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "Mrs Tran was physically restrained for IV antibiotics.",
        whyItMatters: "Missing this signal means the candidate has not examined the legal authority, proportionality and monitoring for coercive medical treatment.",
        relatedLegal: "Must clarify legal pathway for treatment without consent depending on jurisdiction.",
        modelWording: "Review the restraint decision because IV antibiotics under physical restraint require legal authority, proportionality, monitoring and documentation.",
        keywords: ["physically restrained", "IV antibiotics", "restraint", "least restrictive", "legal authority", "proportionate"],
      },
      {
        id: "s5",
        name: "Family complaint describes cultural unsafety",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "Her daughter says no one explained why restraint was used and that the family now believes the hospital \"treated her like a difficult migrant rather than a sick older woman.\"",
        whyItMatters: "Missing this signal means the candidate has dismissed the family's experience of discrimination and failed communication as ordinary dissatisfaction.",
        relatedCultural: "Cultural safety includes how care is experienced by patient and family.",
        modelWording: "Address the family's cultural safety complaint directly because they experienced the care as discriminatory and dehumanising.",
        keywords: ["difficult migrant", "cultural safety", "discrimination", "migrant", "family complaint", "trust"],
      },
      {
        id: "s6",
        name: "Consultation-liaison note lacked required clinical reasoning",
        category: "governance",
        severity: "important",
        clueInStem: "The psychiatry note contains no cognitive assessment, no delirium formulation, and no record of the actual decision being assessed.",
        whyItMatters: "Missing this signal means the candidate has not identified poor CL documentation underpinning coercive treatment.",
        relatedSystem: "Requires supervision, audit and documentation improvement.",
        modelWording: "Audit CL documentation quality because a note guiding restraint and antibiotics must record cognition, delirium, capacity and legal reasoning.",
        keywords: ["no cognitive assessment", "no delirium formulation", "CL note", "documentation", "audit", "supervision"],
      },
      {
        id: "s7",
        name: "Family concern about shame required careful communication, not avoidance",
        category: "family_carer",
        severity: "important",
        clueInStem: "The son later told staff that his mother was \"ashamed and did not want strangers to know family business.\"",
        whyItMatters: "Missing this signal means the candidate has not explored privacy, shame and family dynamics with culturally safe professional interpretation.",
        modelWording: "Explore shame and privacy concerns with an interpreter because culturally safe care requires understanding the patient's reasons without relying on family translation.",
        keywords: ["ashamed", "family business", "privacy", "son", "communication", "cultural formulation", "interpreter"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6", "s7"],
      lowYield: [],
    },
    modelAnswer: `The complaint identifies failures in interpreter use, delirium recognition, capacity documentation, restrictive practice and cultural safety. Mrs Tran was Vietnamese-speaking, yet the assessment used her adult son as interpreter and no professional interpreter was used. That makes the capacity opinion procedurally unsafe.

The clinical formulation also appears wrong or incomplete. Mrs Tran had delirium secondary to urosepsis, and nursing notes described fluctuation, line-pulling and speaking to deceased relatives. Those features point to delirium, not simply depression or difficult refusal, and should have shaped both capacity and treatment planning.

The note saying "patient lacks capacity; family agree with treatment" is inadequate. There was no cognitive assessment, no delirium formulation and no record of the actual decision being assessed. Capacity should have been documented in relation to the antibiotic decision, with the information provided, the interpreter used and the reasoning abilities tested.

The physical restraint for IV antibiotics required a clear legal basis, least-restrictive rationale, monitoring plan and explanation to the family. The daughter's statement that no one explained the restraint and that the hospital treated her mother like a "difficult migrant" must be addressed as a cultural safety and trust issue, not dismissed as offence-taking.

I would meet the family with a professional interpreter, acknowledge the concerns, explain the review process and check Mrs Tran's current safety. The governance response should examine interpreter policy compliance, CL supervision, capacity documentation, restraint authorisation, delirium assessment and culturally safe communication, including how shame and privacy concerns were handled.`,
  },
  {
    id: "QA-007",
    questionNumber: "MEQ-059",
    topic: "quality_assurance",
    difficulty: "consultant",
    title: "Unsafe Weekend Discharge Under Bed Pressure",
    candidateRole: "Consultant psychiatrist reviewing bed-pressure discharge practice",
    setting: "Acute adult inpatient unit",
    stem: `You are the consultant psychiatrist covering an acute adult unit. On Monday morning, the bed manager asks you to review a complaint. Over the weekend, Nikhil, a 27-year-old man admitted after a serious overdose, was discharged to create a bed for an aggressive patient waiting in ED.

The Saturday registrar note says: "No SI today. Bed pressure high. Discharge with crisis number." The discharge occurred without consultant discussion. Nikhil's partner had told nursing staff that morning he was "still giving away possessions and saying I will be free soon." This was written in the nursing continuation notes but not communicated at handover. The discharge summary was auto-generated and sent to the wrong GP. There was no medication supply plan; Nikhil left without antidepressants or follow-up appointment.

On Sunday night Nikhil re-presented after cutting his forearm. His partner says, "You discharged the bed, not the patient." Staff say bed pressure was extreme and ED was unsafe.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Discharge was driven by bed pressure rather than clinical readiness",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "Over the weekend, Nikhil, a 27-year-old man admitted after a serious overdose, was discharged to create a bed for an aggressive patient waiting in ED.",
        whyItMatters: "Missing this signal means the candidate has allowed bed access pressure to override safe discharge standards after a serious overdose.",
        relatedSystem: "Requires escalation and transparent risk decision-making, not unsafe displacement.",
        modelWording: "Name the discharge as system-driven because creating a bed for ED is not a clinical discharge indication.",
        keywords: ["bed pressure", "create a bed", "discharged the bed", "system pressure", "unsafe discharge", "ED waiting"],
      },
      {
        id: "s2",
        name: "Partner collateral showed ongoing suicide warning signs",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Nikhil's partner had told nursing staff that morning he was \"still giving away possessions and saying I will be free soon.\"",
        whyItMatters: "Missing this signal means the candidate has accepted no current suicidal ideation despite collateral showing burdensomeness or farewell-type behaviour.",
        relatedRisk: "Recent serious overdose plus ongoing warning signs makes discharge unsafe.",
        modelWording: "Stop discharge and seek senior review because giving away possessions and saying 'I will be free soon' are ongoing suicide warning signs.",
        keywords: ["giving away possessions", "free soon", "partner", "warning sign", "suicide", "recent overdose"],
      },
      {
        id: "s3",
        name: "High-risk weekend discharge lacked consultant discussion",
        category: "governance",
        severity: "critical",
        clueInStem: "The discharge occurred without consultant discussion.",
        whyItMatters: "Missing this signal means the candidate has not identified a supervision failure in a high-risk discharge under pressure.",
        relatedSystem: "Registrar should not carry this governance burden alone.",
        modelWording: "Require consultant discussion for high-risk discharge because serious overdose, collateral warning signs and bed pressure require senior decision-making.",
        keywords: ["without consultant", "consultant discussion", "supervision", "registrar", "high-risk discharge"],
      },
      {
        id: "s4",
        name: "Nursing collateral was recorded but not handed over",
        category: "collateral",
        severity: "important",
        clueInStem: "This was written in the nursing continuation notes but not communicated at handover.",
        whyItMatters: "Missing this signal means the candidate has not recognised that risk information existed but failed to reach the discharge decision-maker.",
        relatedSystem: "Requires structured handover and escalation of family risk information.",
        modelWording: "Review handover processes because recording the partner's warning in continuation notes was insufficient without active escalation.",
        keywords: ["handover", "nursing notes", "not communicated", "collateral", "partner", "continuation notes"],
      },
      {
        id: "s5",
        name: "Wrong GP discharge summary undermined continuity",
        category: "disposition",
        severity: "important",
        clueInStem: "The discharge summary was auto-generated and sent to the wrong GP.",
        whyItMatters: "Missing this signal means the candidate has not recognised a continuity-of-care failure during the high-risk post-discharge period.",
        relatedSystem: "Requires discharge communication audit and patient identifier verification.",
        modelWording: "Correct and audit discharge communication because sending the summary to the wrong GP removed a key safety net.",
        keywords: ["wrong GP", "discharge summary", "auto-generated", "communication", "continuity", "GP"],
      },
      {
        id: "s6",
        name: "Medication supply and follow-up were absent",
        category: "disposition",
        severity: "important",
        clueInStem: "There was no medication supply plan; Nikhil left without antidepressants or follow-up appointment.",
        whyItMatters: "Missing this signal means the candidate has not identified that the discharge lacked basic treatment continuity and review arrangements.",
        modelWording: "Identify discharge planning failure because medication supply and follow-up appointment were absent after a serious overdose admission.",
        keywords: ["without antidepressants", "follow-up appointment", "medication supply", "discharge plan", "crisis number"],
      },
      {
        id: "s7",
        name: "Re-presentation confirms failure of the discharge safety plan",
        category: "immediate_safety",
        severity: "important",
        clueInStem: "On Sunday night Nikhil re-presented after cutting his forearm.",
        whyItMatters: "Missing this signal means the candidate has not linked the adverse outcome to the need for immediate current-risk review and open disclosure.",
        modelWording: "Review Nikhil's current safety immediately because re-presentation after self-harm confirms the discharge plan failed.",
        keywords: ["re-presented", "cutting", "forearm", "current risk", "self-harm", "safety plan", "open disclosure"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6", "s7"],
      lowYield: [],
    },
    modelAnswer: `This was an unsafe system-driven discharge. Nikhil had been admitted after a serious overdose, but was discharged to create a bed for an aggressive patient waiting in ED. Bed pressure was real, but it is not a clinical indication for discharge.

The Saturday note "No SI today. Bed pressure high. Discharge with crisis number" was not an adequate risk formulation. Nikhil's partner had reported that he was still giving away possessions and saying "I will be free soon," which should have stopped the discharge and triggered consultant review.

The governance failures are clear. The discharge occurred without consultant discussion, the partner's warning was written in nursing continuation notes but not handed over, the discharge summary was auto-generated and sent to the wrong GP, and there was no medication supply plan or follow-up appointment. A crisis number cannot substitute for a safe discharge plan.

Nikhil's re-presentation after cutting his forearm requires immediate current-risk review and support for his partner. I would commence open disclosure and incident reporting, while avoiding a simplistic blame response toward the weekend registrar.

The review should examine bed-pressure escalation, consultant availability, weekend discharge thresholds, nursing-to-medical handover, discharge summary verification, medication supply, follow-up booking and the use of partner collateral. The partner's statement, "You discharged the bed, not the patient," captures the central system learning.`,
  },
  {
    id: "QA-008",
    questionNumber: "MEQ-060",
    topic: "quality_assurance",
    difficulty: "consultant",
    title: "Child Protection Signal Missed in Perinatal Admission",
    candidateRole: "Clinical director reviewing perinatal service safety",
    setting: "Mother-baby liaison pathway in a general hospital",
    stem: `You are the clinical director asked to review a perinatal psychiatry complaint. Alana, a 32-year-old woman, was admitted to the postnatal ward five days after delivery. Midwives documented that she had not slept for three nights, was whispering that "the baby is contaminated," and refused to let staff weigh the baby. Psychiatry reviewed her at 11 pm and documented "anxious mother; no SI; discharge with community follow-up."

The next day, Alana's partner phoned the hospital saying she had locked herself and the baby in the bathroom and was praying loudly. He said he had told the night registrar that Alana's sister had postpartum psychosis and that Alana had stopped quetiapine during pregnancy. These details do not appear in the psychiatry note. Community follow-up was booked for seven days later.

Child protection was not contacted. The baby was brought back to hospital dehydrated 36 hours later. The midwifery manager asks whether psychiatry should apologise, because "technically she denied wanting to hurt the baby."`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Early postpartum psychosis red flags were missed",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "Midwives documented that she had not slept for three nights, was whispering that \"the baby is contaminated,\" and refused to let staff weigh the baby.",
        whyItMatters: "Missing this signal means the candidate has accepted an anxiety formulation despite sleep loss and delusional infant-related content five days postpartum.",
        relatedRisk: "Risk to mother and infant can escalate rapidly even without expressed intent.",
        modelWording: "Formulate possible postpartum psychosis because no sleep, contamination belief and infant-care refusal are high-risk perinatal red flags.",
        keywords: ["postpartum psychosis", "not slept", "baby is contaminated", "delusion", "postnatal", "psychosis"],
      },
      {
        id: "s2",
        name: "Infant-care refusal created risk independent of stated intent",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "Midwives documented that she had not slept for three nights, was whispering that \"the baby is contaminated,\" and refused to let staff weigh the baby.",
        whyItMatters: "Missing this signal means the candidate has relied on denial of intent while ignoring behaviour that put the infant at risk of neglect or dehydration.",
        relatedRisk: "Baby later returned dehydrated, confirming foreseeable infant risk.",
        modelWording: "Treat refusal to weigh the baby as an infant-safety signal because psychosis-related care refusal can harm a baby without expressed intent.",
        keywords: ["baby", "infant", "weigh", "dehydrated", "neglect", "risk to baby", "vulnerable"],
      },
      {
        id: "s3",
        name: "Partner collateral about family history and medication cessation was omitted",
        category: "collateral",
        severity: "important",
        clueInStem: "He said he had told the night registrar that Alana's sister had postpartum psychosis and that Alana had stopped quetiapine during pregnancy. These details do not appear in the psychiatry note.",
        whyItMatters: "Missing this signal means the candidate has ignored major perinatal relapse-risk information missing from the formulation.",
        relatedSystem: "Documentation omission impaired formulation and safety planning.",
        modelWording: "Include partner collateral in the formulation because family postpartum psychosis and quetiapine cessation materially increase relapse risk.",
        keywords: ["collateral", "partner", "sister", "postpartum psychosis", "quetiapine", "not documented"],
      },
      {
        id: "s4",
        name: "Seven-day follow-up was unsafe for possible postpartum psychosis",
        category: "disposition",
        severity: "critical",
        clueInStem: "Community follow-up was booked for seven days later.",
        whyItMatters: "Missing this signal means the candidate has not recognised that possible postpartum psychosis with infant risk requires urgent review or admission.",
        relatedSystem: "Requires perinatal escalation pathway and out-of-hours consultant involvement.",
        modelWording: "Escalate to urgent perinatal review or admission because seven-day follow-up was unsafe with psychosis and infant-care concerns.",
        keywords: ["seven days", "follow-up", "routine", "urgent", "admission", "perinatal escalation"],
      },
      {
        id: "s5",
        name: "Child protection consultation was required for infant safety planning",
        category: "child_protection",
        severity: "critical",
        clueInStem: "Child protection was not contacted.",
        whyItMatters: "Missing this signal means the candidate has not identified the need for statutory consultation or safeguarding where an infant is at foreseeable risk.",
        relatedLegal: "Mandatory reporting/consultation thresholds depend on jurisdiction, but risk must be assessed and documented.",
        modelWording: "Consider child protection consultation because a five-day-old baby was exposed to foreseeable risk in the context of possible maternal psychosis.",
        keywords: ["child protection", "infant safety", "mandatory", "statutory", "baby", "safeguard"],
      },
      {
        id: "s6",
        name: "Denial of harm was over-weighted",
        category: "governance",
        severity: "important",
        clueInStem: "The midwifery manager asks whether psychiatry should apologise, because \"technically she denied wanting to hurt the baby.\"",
        whyItMatters: "Missing this signal means the candidate has accepted denial of intent as reassuring despite behaviour and delusional content indicating infant risk.",
        modelWording: "Correct the denial-based reasoning because infant risk in postpartum psychosis is behavioural and contextual, not dependent on stated intent.",
        keywords: ["denied", "wanting to hurt", "denial", "intent", "anchoring", "behavioural risk"],
      },
      {
        id: "s7",
        name: "Bathroom locking episode showed escalating infant risk",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "The next day, Alana's partner phoned the hospital saying she had locked herself and the baby in the bathroom and was praying loudly.",
        whyItMatters: "Missing this signal means the candidate has not recognised immediate escalation after discharge involving isolation with the baby and disorganised religious behaviour.",
        modelWording: "Treat the bathroom-locking episode as urgent escalation because it showed active risk to a vulnerable infant after unsafe discharge.",
        keywords: ["locked", "bathroom", "baby", "praying", "partner", "escalation", "infant risk"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s4", "s5", "s7"],
      secondary: ["s3", "s6"],
      lowYield: [],
    },
    modelAnswer: `The review should identify a foreseeable perinatal safety failure. Alana was five days postpartum, had not slept for three nights, was whispering that "the baby is contaminated" and refused to let staff weigh the baby. That should have triggered concern for postpartum psychosis, not a simple formulation of anxious mother with no suicidal ideation.

Infant risk did not depend on Alana saying she wanted to harm the baby. Refusal to allow weighing, contamination beliefs and later locking herself and the baby in the bathroom while praying loudly were behavioural infant-safety signals. The baby returning dehydrated 36 hours later shows that the risk was foreseeable.

Important collateral was omitted. The partner had told the night registrar that Alana's sister had postpartum psychosis and that Alana had stopped quetiapine during pregnancy, but those details were not in the psychiatry note. That omission weakened the formulation and discharge plan.

Community follow-up in seven days was unsafe. Possible postpartum psychosis with infant-care refusal requires urgent perinatal consultant review, mother-baby or inpatient pathway, paediatric involvement, partner safety planning and child protection consultation where indicated.

I would ensure Alana and the baby are currently safe, notify perinatal psychiatry, paediatrics and child protection as appropriate, commence open disclosure with the partner and review the out-of-hours assessment. The key learning is that perinatal risk is behavioural and contextual; denial of intent is not enough when psychosis may affect infant care.`,
  },
  {
    id: "QA-009",
    questionNumber: "MEQ-061",
    topic: "quality_assurance",
    difficulty: "consultant",
    title: "ECT Consent and Wrong-Site Governance Failure",
    candidateRole: "ECT clinical lead reviewing a procedural safety incident",
    setting: "Hospital ECT suite",
    stem: `You are the ECT clinical lead. During a morning list, Mei, a 46-year-old woman with severe psychotic depression, received bilateral ECT although the treating consultant's plan specified "right unilateral ECT due cognitive risk." The error was noticed only after the treatment when the recovery nurse read the progress note.

The ECT consent form states "ECT discussed; patient agreeable." It does not specify electrode placement, cognitive risks, alternatives, or interpreter use. Mei speaks conversational English but had asked for a Mandarin interpreter at admission because "medical words are hard." The ECT checklist was completed after the anaesthetic induction because the list was running late. The psychiatry registrar says the ECT nurse told him "bilateral is what we usually do here." Mei's husband is distressed and says no one explained the difference between unilateral and bilateral ECT.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Wrong ECT modality was delivered",
        category: "governance",
        severity: "critical",
        clueInStem: "During a morning list, Mei, a 46-year-old woman with severe psychotic depression, received bilateral ECT although the treating consultant's plan specified \"right unilateral ECT due cognitive risk.\"",
        whyItMatters: "Missing this signal means the candidate has not recognised wrong-modality ECT as a serious procedural safety incident.",
        relatedRisk: "Bilateral ECT may increase cognitive adverse effects, particularly where cognitive risk was already identified.",
        modelWording: "Report this as a wrong-modality ECT incident because bilateral ECT was delivered despite a documented right unilateral plan.",
        keywords: ["bilateral", "right unilateral", "ECT", "wrong modality", "procedure", "cognitive risk"],
      },
      {
        id: "s2",
        name: "Consent form lacked material ECT information",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "It does not specify electrode placement, cognitive risks, alternatives, or interpreter use.",
        whyItMatters: "Missing this signal means the candidate has accepted generic ECT consent despite missing material risks, alternatives and modality-specific information.",
        relatedLegal: "Poor consent documentation increases medico-legal risk and undermines patient autonomy.",
        modelWording: "Review consent validity because electrode placement, cognitive risks, alternatives and interpreter use were not documented.",
        keywords: ["consent", "electrode placement", "cognitive risks", "alternatives", "interpreter", "generic"],
      },
      {
        id: "s3",
        name: "Mandarin interpreter request was not honoured for consent",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "Mei speaks conversational English but had asked for a Mandarin interpreter at admission because \"medical words are hard.\"",
        whyItMatters: "Missing this signal means the candidate has assumed conversational English is sufficient for complex ECT consent after an interpreter request.",
        relatedCultural: "Language access is necessary for valid, culturally safe consent.",
        modelWording: "Provide interpreter-supported consent because Mei specifically said medical words were hard despite conversational English.",
        keywords: ["Mandarin", "interpreter", "medical words are hard", "language", "consent", "cultural safety"],
      },
      {
        id: "s4",
        name: "Checklist after induction could not prevent wrong procedure",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "The ECT checklist was completed after the anaesthetic induction because the list was running late.",
        whyItMatters: "Missing this signal means the candidate has not recognised that a safety checklist done after induction cannot function as a time-out.",
        relatedSystem: "Requires procedural timeout before anaesthesia.",
        modelWording: "Move the ECT checklist before induction because a post-induction checklist cannot prevent wrong-modality treatment.",
        keywords: ["checklist", "after induction", "anaesthetic", "timeout", "running late", "safety check"],
      },
      {
        id: "s5",
        name: "Local routine overrode patient-specific plan",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "The psychiatry registrar says the ECT nurse told him \"bilateral is what we usually do here.\"",
        whyItMatters: "Missing this signal means the candidate has allowed local habit to override a documented consultant plan and consent process.",
        relatedSystem: "Requires role clarity in ECT suite and pre-procedure verification.",
        modelWording: "Correct the local-routine culture because usual practice cannot replace verification of the patient-specific ECT plan.",
        keywords: ["usually do here", "routine", "local practice", "treatment plan", "verification", "ECT nurse"],
      },
      {
        id: "s6",
        name: "Mei and husband require open disclosure",
        category: "family_carer",
        severity: "important",
        clueInStem: "Mei's husband is distressed and says no one explained the difference between unilateral and bilateral ECT.",
        whyItMatters: "Missing this signal means the candidate has not responded to the family's valid concern about communication, consent and possible cognitive harm.",
        modelWording: "Commence open disclosure with Mei and her husband because the wrong ECT modality and consent gaps require prompt explanation.",
        keywords: ["husband", "distressed", "open disclosure", "explained", "difference", "communication"],
      },
      {
        id: "s7",
        name: "Cognitive monitoring is required after wrong bilateral ECT",
        category: "physical_health",
        severity: "important",
        clueInStem: "During a morning list, Mei, a 46-year-old woman with severe psychotic depression, received bilateral ECT although the treating consultant's plan specified \"right unilateral ECT due cognitive risk.\"",
        whyItMatters: "Missing this signal means the candidate has not addressed the clinical consequence of receiving a modality avoided because of cognitive risk.",
        modelWording: "Arrange cognitive monitoring and treating-consultant review because bilateral ECT was given despite a documented cognitive-risk reason for unilateral treatment.",
        keywords: ["cognitive monitoring", "bilateral", "cognitive risk", "review", "ECT", "adverse effects"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s4"],
      secondary: ["s3", "s5", "s6", "s7"],
      lowYield: [],
    },
    modelAnswer: `This is a serious ECT procedural safety and consent incident. Mei received bilateral ECT despite the treating consultant's documented plan for right unilateral ECT due cognitive risk. I would report it as a wrong-modality treatment incident and immediately notify the treating consultant and ECT governance lead.

The consent documentation is inadequate. "ECT discussed; patient agreeable" does not document electrode placement, cognitive risks, alternatives or interpreter use. Those are material to consent, particularly when the difference between unilateral and bilateral ECT is clinically significant.

Language access is also central. Mei speaks conversational English but had asked for a Mandarin interpreter because "medical words are hard." That request should have been honoured for ECT consent because complex procedural consent cannot rely on conversational English when the patient has asked for support.

The checklist failure shows why the wrong modality was not caught. Completing the ECT checklist after anaesthetic induction because the list was running late defeats its safety purpose. A pre-induction time-out must verify identity, consent, electrode placement, treating plan and interpreter/communication needs.

I would arrange recovery assessment and cognitive monitoring, commence open disclosure with Mei and her husband, and explain the possible implications of the wrong modality. The review should examine consent standards, interpreter access, list pressure, pre-procedure timeout, role clarity and the unsafe culture implied by "bilateral is what we usually do here."`,
  },
  {
    id: "QA-010",
    questionNumber: "MEQ-062",
    topic: "quality_assurance",
    difficulty: "consultant",
    title: "Registrar Working Beyond Competence After Hours",
    candidateRole: "Director of training and consultant psychiatrist reviewing a supervision incident",
    setting: "Regional mental health service after-hours roster",
    stem: `You are the director of training and a consultant psychiatrist in a regional mental health service. A Stage 1 registrar, working their second weekend on call, assessed three high-risk ED patients overnight while also covering the inpatient unit by phone. At 4 am the registrar discharged Talia, a 19-year-old woman brought in after ligature self-harm in a police cell.

The registrar documented "emotionally unstable personality traits; no admission benefit." There was no psychosocial formulation, no contact with Talia's mother, no police collateral, and no safety plan. Talia returned six hours later after another ligature attempt in the ED bathroom. The registrar is now tearful and says, "I thought calling the consultant at 4 am would show I couldn't cope."

The roster shows the consultant was covering three hospitals and had told registrars by email, "Use your judgement overnight unless absolutely necessary." The ED director says psychiatry trainees are being left to manage unacceptable risk.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Ligature self-harm in police custody was high risk",
        category: "risk_self",
        severity: "critical",
        clueInStem: "At 4 am the registrar discharged Talia, a 19-year-old woman brought in after ligature self-harm in a police cell.",
        whyItMatters: "Missing this signal means the candidate has not recognised the severity of custodial ligature self-harm before discharge.",
        relatedRisk: "Repeat ligature attempt occurred within six hours.",
        modelWording: "Treat ligature self-harm in a police cell as high risk because the custodial context and method require senior formulation and safety planning.",
        keywords: ["ligature", "police cell", "self-harm", "high-risk", "custody", "repeat attempt"],
      },
      {
        id: "s2",
        name: "Personality-traits label replaced acute risk formulation",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "The registrar documented \"emotionally unstable personality traits; no admission benefit.\"",
        whyItMatters: "Missing this signal means the candidate has accepted stigmatising diagnostic shorthand instead of a psychosocial and risk formulation.",
        relatedSystem: "Training and supervision should address stigma and formulation quality.",
        modelWording: "Challenge the personality-traits documentation because it minimises acute danger and does not explain the ligature behaviour.",
        keywords: ["emotionally unstable", "personality traits", "no admission benefit", "stigma", "formulation", "therapeutic nihilism"],
      },
      {
        id: "s3",
        name: "Collateral and safety planning were absent",
        category: "collateral",
        severity: "critical",
        clueInStem: "There was no psychosocial formulation, no contact with Talia's mother, no police collateral, and no safety plan.",
        whyItMatters: "Missing this signal means the candidate has not identified the basic discharge safeguards missing after high-risk self-harm.",
        relatedRisk: "Key information about triggers, means, custody context and supports was absent.",
        modelWording: "Identify the absence of mother contact, police collateral and safety plan as an unsafe discharge process after ligature self-harm.",
        keywords: ["mother", "police collateral", "safety plan", "collateral", "no contact", "discharge"],
      },
      {
        id: "s4",
        name: "Registrar feared escalation to consultant",
        category: "governance",
        severity: "critical",
        clueInStem: "The registrar is now tearful and says, \"I thought calling the consultant at 4 am would show I couldn't cope.\"",
        whyItMatters: "Missing this signal means the candidate has overlooked a supervision culture where a junior trainee avoided help to protect perceived competence.",
        relatedSystem: "Requires culture of escalation, not shame-based independence.",
        modelWording: "Address the escalation culture because a Stage 1 registrar who fears calling the consultant is a patient-safety risk.",
        keywords: ["couldn't cope", "calling consultant", "4 am", "escalation", "supervision", "trainee"],
      },
      {
        id: "s5",
        name: "Consultant cover across three hospitals was unsafe system pressure",
        category: "system_pressure",
        severity: "important",
        clueInStem: "The roster shows the consultant was covering three hospitals and had told registrars by email, \"Use your judgement overnight unless absolutely necessary.\"",
        whyItMatters: "Missing this signal means the candidate has focused on trainee performance without reviewing unrealistic consultant coverage and supervision availability.",
        relatedSystem: "Requires roster review and escalation to service leadership.",
        modelWording: "Review the roster because consultant cover across three hospitals may create unsafe barriers to after-hours supervision.",
        keywords: ["three hospitals", "consultant covering", "roster", "after-hours", "workload", "service pressure"],
      },
      {
        id: "s6",
        name: "Email wording discouraged mandatory escalation",
        category: "governance",
        severity: "important",
        clueInStem: "The roster shows the consultant was covering three hospitals and had told registrars by email, \"Use your judgement overnight unless absolutely necessary.\"",
        whyItMatters: "Missing this signal means the candidate has not recognised that vague email advice may deter junior registrars from seeking supervision.",
        relatedSystem: "Supervision policy should define mandatory escalation triggers.",
        modelWording: "Define mandatory escalation triggers because 'unless absolutely necessary' is unsafe ambiguity for a Stage 1 registrar.",
        keywords: ["use your judgement", "absolutely necessary", "email", "mandatory escalation", "ambiguity", "Stage 1"],
      },
      {
        id: "s7",
        name: "Repeat ligature attempt confirms immediate patient-safety failure",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "Talia returned six hours later after another ligature attempt in the ED bathroom.",
        whyItMatters: "Missing this signal means the candidate has not prioritised current safety and adverse-event review after rapid recurrence of the same high-risk behaviour.",
        modelWording: "Ensure Talia's current safety and review the incident because a repeat ligature attempt within six hours shows the discharge plan failed.",
        keywords: ["six hours", "another ligature attempt", "ED bathroom", "repeat", "current safety", "incident"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s3", "s4", "s7"],
      secondary: ["s2", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `This incident should be reviewed as both a clinical safety event and a supervision governance failure. Talia was brought in after ligature self-harm in a police cell and then re-presented six hours later after another ligature attempt in the ED bathroom. That immediate recurrence shows the discharge plan failed and requires current safety review first.

The clinical documentation was unsafe. "Emotionally unstable personality traits; no admission benefit" is not a formulation and risks stigmatising a high-risk presentation. There was no psychosocial formulation, no contact with Talia's mother, no police collateral and no safety plan, all of which are essential after custodial ligature self-harm.

The registrar's distress and fear of calling the consultant are central. A Stage 1 registrar on their second weekend on call believed that asking for help at 4 am would show they could not cope. That reflects an unsafe supervision culture, not simply an individual confidence problem.

The system also needs review. The consultant was covering three hospitals, and the email instruction to use judgement overnight unless absolutely necessary was too vague for a junior registrar managing high-risk ED discharges. The service needs mandatory escalation triggers, including ligature self-harm, high-risk discharge, custodial presentations and repeat self-harm.

I would support the registrar without scapegoating, ensure Talia's safety, complete incident reporting and review the after-hours roster, consultant accessibility, supervision expectations, documentation standards and ED interface. The ED director's concern that trainees are managing unacceptable risk should be treated as a governance signal requiring service-level action.`,
  },
  {
    id: "QA-012",
    questionNumber: "MEQ-063",
    topic: "quality_assurance",
    difficulty: "consultant",
    title: "Repeated Bipolar Admissions and Carer Burnout",
    candidateRole: "Consultant psychiatrist, community continuing care team",
    setting: "Regional community mental health service",
    stem: `You are the consultant psychiatrist in a regional community continuing care team.

Maria is a 48-year-old woman with bipolar I disorder and seven admissions in the past four years, mostly following medication cessation during hypomanic periods. Her husband reports she becomes "brilliant for a few weeks" before stopping lithium because she believes she no longer needs treatment. During recent episodes she has accumulated large debts and driven long distances without sleep.

Maria was discharged from the inpatient unit three weeks ago after a manic relapse. At today's review she says, "Lithium takes away who I am." She admits reducing the dose herself because she wants "more energy to start a business." Her husband becomes visibly distressed and says, "I can't keep doing this every year." He reports hiding car keys and monitoring Maria's medications because he fears another relapse.

The case manager believes Maria requires intensive monitoring, while Maria says the team is "treating me like a child." The registrar asks whether ongoing assertive follow-up is justified when Maria is not currently psychotic and technically attends appointments voluntarily.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Lithium ambivalence is identity-based, not simple non-compliance",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "At today's review she says, \"Lithium takes away who I am.\"",
        whyItMatters: "Missing this signal means the candidate has treated adherence as education-only rather than formulating the meaning of mood stabilisation for Maria.",
        modelWording: "Explore the identity meaning of lithium because perceived loss of self, energy and creativity is driving dose reduction.",
        keywords: ["ambivalence", "lithium adherence", "identity", "bipolar disorder", "partial insight"],
      },
      {
        id: "s2",
        name: "Historical mania consequences justify assertive relapse prevention",
        category: "risk_self",
        severity: "critical",
        clueInStem: "During recent episodes she has accumulated large debts and driven long distances without sleep.",
        whyItMatters: "Missing this signal means the candidate has ignored serious historical behavioural risk because Maria is not currently psychotic.",
        modelWording: "Justify assertive follow-up using specific past harms because debts, sleepless driving and repeated admissions show high relapse consequence.",
        keywords: ["relapse prevention", "mania", "behavioural risk", "historical risk", "dangerous driving", "assertive"],
      },
      {
        id: "s3",
        name: "Husband is over-functioning and burning out",
        category: "family_carer",
        severity: "important",
        clueInStem: "Her husband becomes visibly distressed and says, \"I can't keep doing this every year.\" He reports hiding car keys and monitoring Maria's medications because he fears another relapse.",
        whyItMatters: "Missing this signal means the candidate has relied on an exhausted carer to provide unpaid relapse monitoring and risk containment.",
        modelWording: "Assess carer burden and reduce reliance on the husband because hiding keys and monitoring medication is unsustainable.",
        keywords: ["carer burnout", "over-functioning", "relapse monitoring", "family strain", "husband"],
      },
      {
        id: "s4",
        name: "Assertive follow-up must be framed as collaborative, not infantilising",
        category: "ethics",
        severity: "important",
        clueInStem: "The case manager believes Maria requires intensive monitoring, while Maria says the team is \"treating me like a child.\"",
        whyItMatters: "Missing this signal means the candidate has not addressed Maria's experience of care as paternalistic and autonomy-threatening.",
        modelWording: "Frame monitoring collaboratively because Maria's experience of being treated like a child can undermine engagement and autonomy.",
        keywords: ["autonomy", "assertive follow-up", "paternalism", "collaborative care", "shared decision-making"],
      },
      {
        id: "s5",
        name: "Relapse pattern allows advance planning",
        category: "governance",
        severity: "important",
        clueInStem: "Her husband reports she becomes \"brilliant for a few weeks\" before stopping lithium because she believes she no longer needs treatment.",
        whyItMatters: "Missing this signal means the candidate has not converted a predictable relapse signature into a prevention plan.",
        modelWording: "Develop an advance relapse plan because becoming 'brilliant' before stopping lithium is a predictable early warning sign.",
        keywords: ["early warning signs", "relapse signature", "advance directive", "mania prevention", "advance planning"],
      },
      {
        id: "s6",
        name: "Repeated admissions indicate need for longitudinal service redesign",
        category: "system_pressure",
        severity: "optional",
        clueInStem: "Maria is a 48-year-old woman with bipolar I disorder and seven admissions in the past four years, mostly following medication cessation during hypomanic periods.",
        whyItMatters: "Missing this signal means the candidate has treated recurrent admissions as isolated episodes rather than evidence of failed longitudinal care.",
        modelWording: "Review the longitudinal care model because seven admissions in four years indicates the current relapse-prevention system is not working.",
        keywords: ["continuity of care", "repeated admissions", "longitudinal care", "service planning", "case management"],
      },
      {
        id: "s7",
        name: "Current dose reduction is an early relapse warning",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "She admits reducing the dose herself because she wants \"more energy to start a business.\"",
        whyItMatters: "Missing this signal means the candidate has not recognised current hypomanic relapse risk despite voluntary attendance.",
        modelWording: "Respond to current lithium dose reduction urgently because wanting more energy to start a business may indicate early relapse and reduced insight.",
        keywords: ["reducing dose", "more energy", "start a business", "early relapse", "hypomania", "lithium"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s7"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Maria requires a longitudinal bipolar formulation rather than another episode-based response. Seven admissions in four years, mostly after medication cessation during hypomanic periods, show that the current relapse-prevention system is not working.

The treatment issue is not simple non-compliance. Maria says, "Lithium takes away who I am," and she has reduced the dose because she wants "more energy to start a business." That links identity, energy, possible early hypomania and medication ambivalence. I would explore what lithium means to her, how she experiences stability, and whether side effects or loss of creativity are driving dose reduction.

Historical risk justifies assertive follow-up. During recent episodes she accumulated large debts and drove long distances without sleep. Those consequences are serious even if she is not currently psychotic and attends appointments voluntarily.

Her husband is over-functioning and distressed. Hiding car keys and monitoring medication is an unsustainable relapse-prevention system and risks damaging the relationship. I would assess carer burden, reduce reliance on him as the sole safety monitor and involve him in an agreed plan only with appropriate consent and support.

The care plan should be collaborative so it does not feel like infantilisation. I would develop an advance relapse plan with Maria around her early warning sign of feeling "brilliant," dose reduction, increased energy and business plans. The plan should include medication review, rapid access, carer escalation pathways, debt and driving safeguards, and a clear explanation that assertive follow-up is proportionate to specific past harms rather than a judgement about her autonomy.`,
  },
  {
    id: "QA-003",
    questionNumber: "MEQ-064",
    topic: "old_age",
    difficulty: "consultant",
    title: "Dementia, Driving and Enduring Power of Attorney Conflict",
    candidateRole: "Consultant psychiatrist, old age psychiatry consultation service",
    setting: "Residential aged care facility",
    stem: `You are the consultant psychiatrist providing outreach to a residential aged care facility.

George is an 82-year-old retired accountant with vascular dementia who moved into residential care six months ago after several episodes of getting lost while driving. Staff report increasing irritability, accusations that belongings are being stolen, and repeated attempts to leave the facility to "go check the office." George insists he is capable of driving and says, "My son just wants control of my money."

George's son holds enduring power of attorney for finances and health matters. He asks you to formally document that George lacks capacity so the family can sell his car and former home. George's daughter disagrees and says, "Dad still knows exactly what he wants — you're all trying to strip away his independence." Facility staff report escalating conflict between siblings during visits.

Last week George attempted to enter another resident's vehicle in the car park. The GP has already notified the licensing authority regarding driving concerns. The registrar asks whether your role is primarily to assess cognition, mediate the family dispute, or support the facility's risk management concerns.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Capacity must be assessed by decision, not globally",
        category: "capacity",
        severity: "critical",
        clueInStem: "George's daughter disagrees and says, \"Dad still knows exactly what he wants — you're all trying to strip away his independence.\"",
        whyItMatters: "Missing this signal means the candidate has treated dementia as global incapacity or accepted expressed preference as capacity across all decisions.",
        modelWording: "Assess capacity separately for driving, finances, accommodation and health decisions because vascular dementia does not create global incapacity.",
        keywords: ["decision-specific", "capacity", "vascular dementia", "not global", "driving capacity", "specific decision"],
      },
      {
        id: "s2",
        name: "Driving-related behaviour creates immediate public safety risk",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "Last week George attempted to enter another resident's vehicle in the car park.",
        whyItMatters: "Missing this signal means the candidate has delayed action on an active driving-related risk while the family dispute continues.",
        modelWording: "Act on driving risk immediately because attempting to enter another resident's vehicle shows ongoing public and resident safety concerns.",
        keywords: ["driving risk", "public safety", "vehicle", "licensing authority", "immediate", "means restriction"],
      },
      {
        id: "s3",
        name: "EPOA request creates potential conflict of interest",
        category: "governance",
        severity: "important",
        clueInStem: "He asks you to formally document that George lacks capacity so the family can sell his car and former home.",
        whyItMatters: "Missing this signal means the candidate has allowed a family financial objective to frame an independent clinical capacity assessment.",
        modelWording: "Maintain independence because the son's EPOA request to support asset sale creates a potential conflict of interest.",
        keywords: ["EPOA", "conflict of interest", "neutral", "financial", "asset sale", "independent", "documentation"],
      },
      {
        id: "s4",
        name: "Sibling conflict is worsening George's distress and care environment",
        category: "family_carer",
        severity: "important",
        clueInStem: "Facility staff report escalating conflict between siblings during visits.",
        whyItMatters: "Missing this signal means the candidate has not recognised family conflict as a clinical and environmental contributor to behavioural symptoms.",
        modelWording: "Address sibling conflict through structured communication because conflict during visits may worsen George's distress and behavioural symptoms.",
        keywords: ["family conflict", "siblings", "BPSD", "distress", "behavioural symptoms", "family meeting"],
      },
      {
        id: "s5",
        name: "Paranoia and exit-seeking require BPSD assessment",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "Staff report increasing irritability, accusations that belongings are being stolen, and repeated attempts to leave the facility to \"go check the office.\"",
        whyItMatters: "Missing this signal means the candidate has treated dementia-related behavioural symptoms as character or family dispute rather than assessable clinical symptoms.",
        modelWording: "Assess BPSD including irritability, theft accusations and exit-seeking because these symptoms need non-pharmacological formulation and management.",
        keywords: ["BPSD", "paranoia", "exit-seeking", "non-pharmacological", "vascular dementia", "behavioural management"],
      },
      {
        id: "s6",
        name: "Consultant role must integrate cognition, risk, family and legal issues",
        category: "system_pressure",
        severity: "optional",
        clueInStem: "The registrar asks whether your role is primarily to assess cognition, mediate the family dispute, or support the facility's risk management concerns.",
        whyItMatters: "Missing this signal means the candidate has narrowed the consultant role to cognitive testing rather than integrated old age psychiatry formulation.",
        modelWording: "Integrate cognition, capacity, BPSD, driving risk, family conflict and legal issues because the role is broader than cognitive testing.",
        keywords: ["integrated", "consultant role", "not just cognition", "risk", "family", "legal", "systems"],
      },
      {
        id: "s7",
        name: "Licensing authority notification supports but does not complete risk management",
        category: "governance",
        severity: "important",
        clueInStem: "The GP has already notified the licensing authority regarding driving concerns.",
        whyItMatters: "Missing this signal means the candidate has assumed licensing notification alone manages immediate access-to-vehicle and facility safety risk.",
        modelWording: "Support the licensing notification and address means restriction because formal reporting does not by itself prevent attempted driving.",
        keywords: ["licensing authority", "GP", "driving concerns", "means restriction", "notification", "vehicle access"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5", "s7"],
      lowYield: ["s6"],
    },
    modelAnswer: `My role is integrated rather than limited to cognitive testing or family mediation. George has vascular dementia, driving-related risk, possible BPSD, family conflict and EPOA issues, all of which affect safety and capacity.

Capacity must be assessed decision-specifically. George may know what he wants, but that does not answer whether he can understand, retain, use and weigh information about driving, finances, accommodation or health care. I would not declare global incapacity simply to enable asset sale.

Driving risk is immediate. George moved into care after getting lost while driving and last week attempted to enter another resident's vehicle. The GP has notified the licensing authority, which is appropriate, but the facility and family still need practical means restriction so he cannot access vehicles while the process unfolds.

The son's request creates a potential conflict of interest because he holds EPOA and wants documentation that allows sale of the car and former home. I would document my independence and base the capacity opinion on clinical evidence, not family financial objectives. The daughter's concern about independence should also be acknowledged, because capacitous adults may make decisions others dislike.

George's irritability, theft accusations and repeated attempts to leave to "go check the office" require BPSD formulation and management. I would review triggers, pain, delirium, environment, unmet needs and non-pharmacological strategies. Escalating sibling conflict during visits should be addressed through a structured family meeting so the facility receives consistent guidance and George is not placed in the middle of a dispute.`,
  },
];
