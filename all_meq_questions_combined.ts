import type { QuizStem } from "../quizData";

export const QA_STEMS: QuizStem[] = [
  {
    id: "QA-001",
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
        name: "Lithium monitoring failure after dose increase",
        category: "physical_health",
        severity: "critical",
        clueInStem: "dose increased; pathology form given",
        whyItMatters: "A lithium dose increase requires clear monitoring responsibility, not merely handing out a pathology form. This is a foreseeable medication safety failure.",
        relatedRisk: "Lithium toxicity can cause delirium, falls, renal injury, seizures and death.",
        relatedSystem: "The service lacked a reliable closed-loop pathology monitoring process.",
        modelWording: "The phrase 'dose increased; pathology form given' signals unsafe lithium monitoring because there is no documented level, renal function check, or responsible clinician.",
        keywords: ["lithium", "dose increase", "bloods", "level", "renal", "pathology", "monitoring", "toxicity"],
      },
      {
        id: "s2",
        name: "Red-flag toxicity symptoms not escalated",
        category: "governance",
        severity: "critical",
        clueInStem: "vomiting, tremor and seemed confused",
        whyItMatters: "Vomiting, tremor and confusion after lithium dose change are toxicity red flags requiring same-day clinical review.",
        relatedRisk: "Delay allowed progression to ICU-level toxicity and acute kidney injury.",
        relatedSystem: "Administrative triage of clinical risk without escalation is a governance failure.",
        modelWording: "The daughter's report of 'vomiting, tremor and confusion' should have triggered urgent lithium toxicity assessment and medical review.",
        keywords: ["vomiting", "tremor", "confus", "red flag", "escalat", "urgent review", "toxicity", "daughter phoned"],
      },
      {
        id: "s3",
        name: "Duty inbox system failure",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "forwarded to the duty inbox. No clinician reviewed it until Friday afternoon",
        whyItMatters: "A high-risk clinical message sitting in an inbox for days is a system design failure, not simply individual oversight.",
        relatedSystem: "Requires review of triage protocols, inbox ownership, escalation thresholds and audit trail.",
        modelWording: "The duty inbox delay shows a failed escalation system; the review must examine inbox ownership and clinical triage processes.",
        keywords: ["duty inbox", "no clinician", "delay", "system", "triage", "escalation", "workflow", "ownership"],
      },
      {
        id: "s4",
        name: "ED diagnostic anchoring despite dehydration and confusion",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "ED documented dehydration and confusion but discharged her with \"viral gastroenteritis\"",
        whyItMatters: "ED discharge despite dehydration and confusion in a lithium-treated patient suggests cross-service communication and diagnostic anchoring failure.",
        relatedSystem: "Requires joint mental health-ED review rather than blaming one service.",
        modelWording: "The ED finding of dehydration and confusion should have triggered lithium toxicity consideration and liaison with psychiatry.",
        keywords: ["ED", "dehydration", "confusion", "viral gastroenteritis", "anchoring", "liaison", "cross-service"],
      },
      {
        id: "s5",
        name: "Open disclosure to daughter",
        category: "family_carer",
        severity: "important",
        clueInStem: "I told your service she was getting toxic and no one listened",
        whyItMatters: "The daughter gave accurate risk information that was not acted on. She requires timely open disclosure and acknowledgement.",
        relatedSystem: "Family concerns must be treated as clinical data within safety systems.",
        modelWording: "The daughter's complaint requires open disclosure, apology for communication failure, and explanation of the review process.",
        keywords: ["daughter", "complaint", "open disclosure", "apology", "family concern", "not listened", "carer"],
      },
      {
        id: "s6",
        name: "Avoid scapegoating junior doctor",
        category: "governance",
        severity: "important",
        clueInStem: "Staff are anxious that the incident will be blamed on one junior doctor",
        whyItMatters: "Quality review should identify system contributors and supervision gaps, not simply individual blame.",
        relatedSystem: "A just-culture review supports learning while still addressing accountability.",
        modelWording: "The review should use a just-culture approach: examine system design, supervision and accountability without scapegoating a junior doctor.",
        keywords: ["junior doctor", "blamed", "just culture", "system contributors", "supervision", "accountability"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `This is a serious medication safety incident requiring immediate clinical governance response. The lithium dose increase was not safely monitored: "pathology form given" is not a monitoring plan. The daughter's report of vomiting, tremor and confusion was a lithium toxicity red flag and should have triggered same-day review. The duty inbox delay indicates a system failure in triage, ownership and escalation.

I would ensure Priya's current medical care is safe, notify senior service leadership, complete incident reporting and begin open disclosure with the daughter. The review should include community psychiatry, ED, administration and pharmacy because the failure crossed service boundaries. It should not be framed as one junior doctor's error; it requires a just-culture review of lithium monitoring, inbox processes, supervision, documentation and ED-psychiatry communication.`,
  },
  {
    id: "QA-002",
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
        name: "Critical clozapine red result ignored",
        category: "physical_health",
        severity: "critical",
        clueInStem: "red result — neutrophils below threshold",
        whyItMatters: "A neutrophil result below threshold is a critical clozapine safety trigger requiring immediate clinical action.",
        relatedRisk: "Risk of agranulocytosis, sepsis and death.",
        relatedSystem: "Requires robust clozapine monitoring governance and stop-dispense escalation.",
        modelWording: "The 'red result — neutrophils below threshold' is the central safety signal; clozapine should not continue without urgent review.",
        keywords: ["clozapine", "neutrophil", "red result", "below threshold", "agranulocytosis", "blood", "stop", "alert"],
      },
      {
        id: "s2",
        name: "Unsafe remote prescribing without pathology review",
        category: "governance",
        severity: "critical",
        clueInStem: "registrar signed the script remotely from another site and did not review the pathology system",
        whyItMatters: "Clozapine prescribing requires confirmation of safe blood monitoring; remote signing without pathology review is unsafe.",
        relatedSystem: "Highlights supervision, prescribing authority and electronic safety workflow failures.",
        modelWording: "The registrar's remote signature without pathology review is a prescribing governance failure requiring supervision review.",
        keywords: ["registrar", "remote", "signed", "did not review", "pathology", "prescribing", "supervision"],
      },
      {
        id: "s3",
        name: "Ambiguous pharmacy-clinic stop rule",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "continue dispensing unless psychiatry phones to stop",
        whyItMatters: "This reverses the safety default. For clozapine red results, the default should be stop/escalate unless explicitly cleared.",
        relatedSystem: "Requires shared protocol between pharmacy and psychiatry.",
        modelWording: "The instruction to 'continue dispensing unless psychiatry phones to stop' is an unsafe system rule for clozapine red alerts.",
        keywords: ["continue dispensing", "phones to stop", "pharmacy", "protocol", "default", "dispense", "red warning"],
      },
      {
        id: "s4",
        name: "Fever and mouth ulcers as infection red flags",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "fever and mouth ulcers",
        whyItMatters: "Fever and mouth ulcers in a patient on clozapine after low neutrophils indicate possible severe infection and require urgent medical treatment.",
        relatedRisk: "Possible neutropenic sepsis.",
        modelWording: "Fever and mouth ulcers in the context of clozapine neutropenia should be treated as possible neutropenic sepsis.",
        keywords: ["fever", "mouth ulcers", "infection", "sepsis", "neutropenic", "urgent medical"],
      },
      {
        id: "s5",
        name: "Carer escalation dismissed",
        category: "family_carer",
        severity: "important",
        clueInStem: "mother called the clinic twice reporting he was \"shivering and not eating\"",
        whyItMatters: "The mother provided clinically important deterioration information that was minimised.",
        relatedSystem: "Carer calls need clinical triage criteria rather than reassurance by default.",
        modelWording: "The mother's reports of shivering and not eating were clinical deterioration signals, not simply anxiety.",
        keywords: ["mother", "called twice", "shivering", "not eating", "carer", "reassure", "deterioration"],
      },
      {
        id: "s6",
        name: "Inappropriate attempt to avoid serious incident review",
        category: "governance",
        severity: "important",
        clueInStem: "managed as a pharmacy error to avoid a formal serious incident review",
        whyItMatters: "This is a multi-system failure involving clinic, pharmacy, prescribing, pathology and carer communication. Avoiding review is unsafe governance.",
        relatedSystem: "Requires formal incident reporting, open disclosure and system learning.",
        modelWording: "This cannot be framed as a pharmacy error alone; it requires formal serious incident review across the clozapine pathway.",
        keywords: ["avoid", "serious incident", "pharmacy error", "formal review", "governance", "incident report", "system failure"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4"],
      secondary: ["s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `The immediate priority is Daniel's safety: fever and mouth ulcers after a neutrophil red result should be treated as possible neutropenic sepsis. Clozapine dispensing despite "neutrophils below threshold" is a serious medication safety failure.

This is not a pharmacy error alone. The unsafe chain includes the covering nurse note, remote registrar prescribing without pathology review, an unsafe pharmacy instruction to continue dispensing unless told to stop, and dismissal of the mother's deterioration calls. I would ensure incident reporting, notify senior governance leads, commence open disclosure with Daniel and his mother, and conduct a multi-agency clozapine pathway review. Corrective actions include clear stop-dispense rules, pathology alert ownership, prescriber responsibilities, leave cover, and carer escalation protocols.`,
  },
  {
    id: "QA-003",
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
        name: "Restrictive practice injury is a serious incident",
        category: "governance",
        severity: "critical",
        clueInStem: "found on the floor of the seclusion room with a fractured wrist",
        whyItMatters: "An injury occurring during seclusion requires immediate clinical review, incident reporting and governance investigation.",
        relatedSystem: "Restrictive practices require heightened oversight and documentation.",
        modelWording: "A fractured wrist in seclusion is a serious restrictive-practice incident requiring immediate reporting and review.",
        keywords: ["fractured wrist", "seclusion", "serious incident", "restrictive practice", "injury", "report", "review"],
      },
      {
        id: "s2",
        name: "Failure to document least restrictive alternatives",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "There is no documented attempted de-escalation",
        whyItMatters: "Seclusion must be justified as necessary and least restrictive; absence of de-escalation documentation is a major governance failure.",
        relatedLegal: "Restrictive practice legality depends on necessity, proportionality and documentation.",
        modelWording: "No documented attempted de-escalation means the team has not demonstrated that seclusion was the least restrictive option.",
        keywords: ["de-escalation", "least restrictive", "seclusion", "necessity", "proportionate", "alternative", "document"],
      },
      {
        id: "s3",
        name: "Observation failure in seclusion",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "no physical observation chart for the first 45 minutes",
        whyItMatters: "Seclusion requires regular observation to detect injury, collapse, distress and physical deterioration.",
        relatedRisk: "Observation gap may have contributed to delayed detection of injury.",
        modelWording: "The 45-minute absence of physical observations is an immediate patient safety failure.",
        keywords: ["observation", "45 minutes", "physical observations", "chart", "monitor", "seclusion room"],
      },
      {
        id: "s4",
        name: "Trauma-informed care failure",
        category: "trauma",
        severity: "critical",
        clueInStem: "Don't lock me in, he locked me in before",
        whyItMatters: "The patient explicitly linked being locked in to prior trauma; seclusion risked re-traumatisation and escalation.",
        relatedCultural: "Trauma history must shape restrictive practice planning, not sit as background information.",
        modelWording: "The phrase 'Don't lock me in, he locked me in before' should have triggered trauma-informed alternatives and heightened review.",
        keywords: ["trauma", "locked me in", "re-traumatisation", "childhood sexual trauma", "trauma-informed", "distress"],
      },
      {
        id: "s5",
        name: "Consultant notification failure",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "no consultant notification",
        whyItMatters: "Restrictive practice involving injury and complex trauma requires senior medical oversight.",
        relatedSystem: "Consultant accountability cannot be replaced by security or informal team agreement.",
        modelWording: "No consultant notification is a governance and supervision failure in restrictive practice.",
        keywords: ["consultant notification", "senior review", "medical oversight", "supervision", "notify consultant"],
      },
      {
        id: "s6",
        name: "Staffing pressure does not remove documentation obligation",
        category: "system_pressure",
        severity: "important",
        clueInStem: "staffing was short and \"there was no time to keep writing\"",
        whyItMatters: "Staffing pressure is a system factor to review, but it does not remove the requirement to document restrictive practices.",
        relatedSystem: "Requires review of night staffing, acuity, training and escalation.",
        modelWording: "Short staffing is relevant as a systems contributor, but cannot justify absent seclusion documentation.",
        keywords: ["staffing", "short", "no time", "documentation", "night", "acuity", "system factor"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4"],
      secondary: ["s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `This is a serious restrictive-practice incident. Lena sustained a fractured wrist in seclusion, with no documented de-escalation, no review time, no consultant notification and no observation chart for 45 minutes. I would first ensure her physical injury and psychological distress are addressed, notify senior management, complete incident reporting, preserve records including CCTV, and commence open disclosure with Lena and, with consent or appropriate authority, her sister.

The review must examine whether seclusion was necessary, proportionate and least restrictive. The phrase "Don't lock me in, he locked me in before" makes trauma-informed failure central, not incidental. Staffing pressure is a systems contributor but does not remove documentation and observation obligations. The consultant response should include staff debrief, restrictive practice audit, training, and review of night staffing and escalation pathways.`,
  },
  {
    id: "QA-004",
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
        name: "Absconding with serious injury is a sentinel safety event",
        category: "governance",
        severity: "critical",
        clueInStem: "absconded from ED at 2 am and was later found on railway tracks with serious injuries",
        whyItMatters: "Absconding from ED followed by serious harm requires immediate incident reporting and systems review.",
        relatedRisk: "Severe risk to self due to psychosis, disorganisation and unsafe environment.",
        relatedSystem: "Requires review of ED observation, mental health escalation and environmental safety.",
        modelWording: "Absconding followed by railway-track injury is a serious safety incident requiring formal governance review.",
        keywords: ["abscond", "railway", "serious injuries", "sentinel", "incident", "adverse event", "safety"],
      },
      {
        id: "s2",
        name: "High absconding risk was visible before the event",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "repeatedly asking where the exits were",
        whyItMatters: "Repeated exit-seeking in a psychotic patient under emergency powers is a direct absconding signal.",
        relatedRisk: "Failure to set observation level exposed Omar to preventable harm.",
        modelWording: "Asking where the exits were should have triggered absconding-risk precautions and documented observations.",
        keywords: ["exits", "exit", "absconding risk", "observation", "pacing", "leave", "precaution"],
      },
      {
        id: "s3",
        name: "No documented observation level",
        category: "governance",
        severity: "critical",
        clueInStem: "there was no documented observation level",
        whyItMatters: "Security being asked informally to watch a patient is not a clinical observation plan.",
        relatedSystem: "Requires clear ownership of observations between ED, mental health and security.",
        modelWording: "The absence of a documented observation level is a core safety and governance failure.",
        keywords: ["observation level", "security", "keep an eye", "documented", "watch", "ownership"],
      },
      {
        id: "s4",
        name: "Unsafe corridor placement due to lack of assessment room",
        category: "system_pressure",
        severity: "important",
        clueInStem: "placed in a corridor bay because no mental health assessment room was available",
        whyItMatters: "The environment increased stimulation, absconding opportunity and risk; resource constraints must be named as system contributors.",
        relatedSystem: "Requires escalation pathway when no safe assessment space exists.",
        modelWording: "The corridor bay placement is a system risk factor, not just a logistical detail.",
        keywords: ["corridor", "assessment room", "overcrowded", "environment", "safe space", "resource"],
      },
      {
        id: "s5",
        name: "Collateral about weapon and insomnia not documented",
        category: "collateral",
        severity: "critical",
        clueInStem: "father phoned ED saying Omar had not slept for five nights and had recently bought a knife",
        whyItMatters: "Collateral indicated escalating psychosis, sleep deprivation and weapon acquisition; failure to document removed critical risk information.",
        relatedRisk: "Risk to self and others was higher than recorded.",
        modelWording: "The father's collateral about five nights without sleep and knife purchase was critical risk information and should have been documented and acted on.",
        keywords: ["father", "five nights", "knife", "collateral", "not documented", "weapon", "sleep"],
      },
      {
        id: "s6",
        name: "Premature diagnostic closure on drug-induced psychosis",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "likely drug-induced psychosis; medically cleared",
        whyItMatters: "Drug-induced psychosis was assumed without testing or collateral integration; diagnostic closure contributed to under-triage.",
        modelWording: "The phrase 'likely drug-induced psychosis' was premature diagnostic closure and did not address immediate risk.",
        keywords: ["drug-induced", "diagnostic closure", "medically cleared", "urine", "premature", "formulation"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s5"],
      secondary: ["s4", "s6"],
      lowYield: [],
    },
    modelAnswer: `This is a serious ED mental health adverse event: Omar absconded under emergency powers and sustained severe injury. The risk was visible in the stem: persecutory psychosis, pacing, refusal of medication, repeated exit-seeking, collateral about five nights without sleep and knife purchase, and no documented observation level.

I would ensure Omar's immediate medical care, notify senior ED and mental health leadership, complete incident reporting, preserve records, and contact family through open disclosure processes. The review should focus on systems: corridor placement, lack of mental health room, unclear observation ownership, phone-only mental health cover, poor collateral documentation and premature diagnostic closure. Security cannot substitute for a documented clinical observation plan.`,
  },
  {
    id: "QA-005",
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
        name: "Wrong patient LAI administration",
        category: "governance",
        severity: "critical",
        clueInStem: "given paliperidone long-acting injection intended for another patient with the same surname",
        whyItMatters: "Wrong-patient medication administration is a serious medication incident requiring urgent clinical and governance response.",
        relatedRisk: "Paliperidone LAI cannot be rapidly removed and may cause prolonged adverse effects.",
        modelWording: "This is a serious wrong-patient LAI administration error, not a minor clinic mistake.",
        keywords: ["wrong patient", "paliperidone", "long-acting", "LAI", "same surname", "medication error", "depot"],
      },
      {
        id: "s2",
        name: "Failure of identity-check procedure",
        category: "governance",
        severity: "critical",
        clueInStem: "usual two-nurse identity check was not completed",
        whyItMatters: "The failed identity check is the core preventable safety barrier that should have stopped the error.",
        relatedSystem: "Requires review of clinic workflow, staffing and mandatory checking process.",
        modelWording: "The missed two-nurse identity check is a failed medication safety barrier.",
        keywords: ["identity check", "two-nurse", "not completed", "checking", "safety barrier", "ID"],
      },
      {
        id: "s3",
        name: "Unsafe medication labelling system",
        category: "system_pressure",
        severity: "important",
        clueInStem: "handwritten sticky notes rather than printed labels",
        whyItMatters: "Handwritten sticky notes on depot packs create foreseeable selection and identification errors.",
        relatedSystem: "Requires medication storage and labelling redesign.",
        modelWording: "Handwritten sticky notes in the medication fridge are an unsafe system design issue.",
        keywords: ["sticky notes", "printed labels", "labelling", "fridge", "storage", "system design"],
      },
      {
        id: "s4",
        name: "Patient voiced discrepancy but was overridden",
        category: "ethics",
        severity: "critical",
        clueInStem: "I don't usually have needles",
        whyItMatters: "The patient's concern was a final safety alert. Overriding it without checking worsened the error and undermined trust.",
        modelWording: "Sam's statement 'I don't usually have needles' should have stopped administration and triggered immediate verification.",
        keywords: ["don't usually have needles", "questioned", "patient concern", "overridden", "verify", "stopped"],
      },
      {
        id: "s5",
        name: "Need for immediate clinical monitoring and driving advice",
        category: "physical_health",
        severity: "important",
        clueInStem: "history of severe neuroleptic sensitivity and works as a truck driver",
        whyItMatters: "The error creates occupational and physical safety risks requiring monitoring, advice about driving, and follow-up.",
        relatedRisk: "Sedation, EPS or akathisia could endanger Sam and the public if he drives.",
        modelWording: "His neuroleptic sensitivity and truck-driving work mean he needs urgent medical advice, monitoring and driving safety discussion.",
        keywords: ["neuroleptic sensitivity", "truck driver", "driving", "monitor", "EPS", "sedation", "occupational"],
      },
      {
        id: "s6",
        name: "Attempt to avoid reporting is a governance failure",
        category: "governance",
        severity: "important",
        clueInStem: "Reporting this will make the service look unsafe",
        whyItMatters: "Avoiding incident reporting prioritises reputation over patient safety and prevents system learning.",
        relatedSystem: "Requires incident reporting, open disclosure and medication safety review.",
        modelWording: "The team leader's suggestion not to report is itself a governance concern; this requires formal reporting and open disclosure.",
        keywords: ["reporting", "look unsafe", "avoid", "incident", "open disclosure", "reputation", "governance"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s4"],
      secondary: ["s3", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `This is a serious wrong-patient LAI medication error. Immediate priorities are Sam's safety, honest disclosure, medical monitoring and practical risk management. Paliperidone LAI cannot be withdrawn, and Sam has severe neuroleptic sensitivity and works as a truck driver, so he needs advice about adverse effects, driving, emergency contacts and follow-up.

The error was not simply individual nurse failure. Safety barriers failed: the two-nurse identity check was skipped, depot packs had handwritten sticky notes, the clinic was under pressure, and Sam's statement "I don't usually have needles" was overridden. The team leader's wish to avoid reporting is inappropriate. I would ensure formal incident reporting, open disclosure, medication safety review, staff support and redesign of identity checking and labelling systems.`,
  },
  {
    id: "QA-006",
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
        name: "Capacity assessment invalid without professional interpreter",
        category: "capacity",
        severity: "critical",
        clueInStem: "conducted using Mrs Tran's adult son as interpreter. No professional interpreter was used",
        whyItMatters: "Capacity assessment through a family interpreter is unreliable, compromises autonomy and may distort information.",
        relatedLegal: "Capacity is decision-specific and requires effective communication.",
        relatedCultural: "Language access is part of culturally safe care, not an optional courtesy.",
        modelWording: "The capacity assessment is procedurally unsafe because it was done through her son without a professional interpreter.",
        keywords: ["interpreter", "professional interpreter", "son", "capacity", "language", "procedurally", "communication"],
      },
      {
        id: "s2",
        name: "Delirium missed despite fluctuating cognition",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "fluctuating, pulling at lines, and speaking to deceased relatives",
        whyItMatters: "These are delirium features in the context of urosepsis and must guide capacity and treatment decisions.",
        relatedRisk: "Mislabeling delirium as refusal or depression can lead to unsafe coercion and poor medical care.",
        modelWording: "Fluctuation, line-pulling and speaking to deceased relatives point to delirium, not simply depression or difficult behaviour.",
        keywords: ["delirium", "fluctuat", "pulling at lines", "deceased relatives", "urosepsis", "cognitive", "confusion"],
      },
      {
        id: "s3",
        name: "No decision-specific capacity documentation",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "no record of the actual decision being assessed",
        whyItMatters: "Capacity cannot be documented globally; the specific treatment decision and reasoning abilities must be recorded.",
        relatedLegal: "Invalid documentation weakens authority for treatment and restraint.",
        modelWording: "The note fails because it does not state the specific decision, information provided, understanding, weighing, or communication.",
        keywords: ["decision-specific", "actual decision", "understand", "weigh", "capacity documentation", "global"],
      },
      {
        id: "s4",
        name: "Restrictive treatment requires explanation and documentation",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "physically restrained for IV antibiotics",
        whyItMatters: "Physical restraint for medical treatment requires legal authority, proportionality, monitoring and family communication.",
        relatedLegal: "Must clarify legal pathway for treatment without consent depending on jurisdiction.",
        modelWording: "The restraint for IV antibiotics required clear legal authority, least-restrictive justification and monitoring.",
        keywords: ["physically restrained", "IV antibiotics", "restraint", "least restrictive", "legal authority", "proportionate"],
      },
      {
        id: "s5",
        name: "Cultural safety failure perceived by family",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "treated her like a difficult migrant rather than a sick older woman",
        whyItMatters: "The family's complaint identifies cultural unsafety and perceived discrimination, which affects trust and engagement.",
        relatedCultural: "Cultural safety includes how care is experienced by patient and family.",
        modelWording: "The phrase 'difficult migrant' signals a cultural safety complaint, not merely dissatisfaction with communication.",
        keywords: ["difficult migrant", "cultural safety", "discrimination", "migrant", "family complaint", "trust"],
      },
      {
        id: "s6",
        name: "Poor CL psychiatry documentation quality",
        category: "governance",
        severity: "important",
        clueInStem: "no cognitive assessment, no delirium formulation",
        whyItMatters: "A CL opinion that drives coercive medical treatment must document cognition, delirium, capacity and legal reasoning.",
        relatedSystem: "Requires supervision, audit and documentation improvement.",
        modelWording: "The CL note is unsafe because it lacks cognitive assessment and delirium formulation despite being used to justify treatment.",
        keywords: ["no cognitive assessment", "no delirium formulation", "CL note", "documentation", "audit", "supervision"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `The complaint identifies failures in delirium recognition, interpreter use, capacity documentation, restrictive practice and cultural safety. A capacity assessment through an adult son without a professional interpreter is procedurally unsafe. The nursing description of fluctuation, line-pulling and speaking to deceased relatives strongly suggests delirium in urosepsis, yet the psychiatry note contains no cognitive assessment or delirium formulation.

I would review Mrs Tran's current safety, meet the family with a professional interpreter, acknowledge concerns, and explain the review process. The governance response should examine legal authority and documentation for restraint, CL supervision, capacity-assessment quality, interpreter policy compliance and cultural safety. The family statement that she was treated like a "difficult migrant" must be addressed as a clinical safety and trust issue, not dismissed as offence-taking.`,
  },
  {
    id: "QA-007",
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
        name: "Unsafe discharge driven by bed pressure",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "discharged to create a bed for an aggressive patient waiting in ED",
        whyItMatters: "Bed pressure is a system reality but cannot override clinical discharge safety.",
        relatedSystem: "Requires escalation and transparent risk decision-making, not unsafe displacement.",
        modelWording: "The phrase 'discharged to create a bed' signals unsafe system-driven discharge rather than clinically justified discharge.",
        keywords: ["bed pressure", "create a bed", "discharged the bed", "system pressure", "unsafe discharge", "ED waiting"],
      },
      {
        id: "s2",
        name: "Suicide risk warning ignored",
        category: "risk_self",
        severity: "critical",
        clueInStem: "still giving away possessions and saying I will be free soon",
        whyItMatters: "Giving away possessions and future-oriented death statements are high-risk suicide warning signs.",
        relatedRisk: "Recent serious overdose plus ongoing warning signs makes discharge unsafe.",
        modelWording: "The partner's report of giving away possessions and saying 'I will be free soon' should have stopped discharge and triggered senior review.",
        keywords: ["giving away possessions", "free soon", "partner", "warning sign", "suicide", "recent overdose"],
      },
      {
        id: "s3",
        name: "No consultant discussion for high-risk discharge",
        category: "governance",
        severity: "critical",
        clueInStem: "without consultant discussion",
        whyItMatters: "High-risk discharge after serious overdose under bed pressure requires consultant-level decision-making and documentation.",
        relatedSystem: "Registrar should not carry this governance burden alone.",
        modelWording: "Discharge after serious overdose under bed pressure without consultant discussion is a supervision and governance failure.",
        keywords: ["without consultant", "consultant discussion", "supervision", "registrar", "high-risk discharge"],
      },
      {
        id: "s4",
        name: "Handover failure of critical collateral",
        category: "collateral",
        severity: "important",
        clueInStem: "written in the nursing continuation notes but not communicated at handover",
        whyItMatters: "Critical collateral was present in the record but not transferred into the decision-making process.",
        relatedSystem: "Requires structured handover and escalation of family risk information.",
        modelWording: "The nursing note was not enough; the partner's warning needed active handover to the decision-maker.",
        keywords: ["handover", "nursing notes", "not communicated", "collateral", "partner", "continuation notes"],
      },
      {
        id: "s5",
        name: "Faulty discharge communication to GP",
        category: "disposition",
        severity: "important",
        clueInStem: "discharge summary was auto-generated and sent to the wrong GP",
        whyItMatters: "Sending the discharge summary to the wrong GP undermines continuity and safety during the high-risk post-discharge period.",
        relatedSystem: "Requires discharge communication audit and patient identifier verification.",
        modelWording: "The wrong-GP discharge summary is a continuity-of-care failure in a high-risk discharge.",
        keywords: ["wrong GP", "discharge summary", "auto-generated", "communication", "continuity", "GP"],
      },
      {
        id: "s6",
        name: "No medication or follow-up plan",
        category: "disposition",
        severity: "important",
        clueInStem: "left without antidepressants or follow-up appointment",
        whyItMatters: "Discharge after serious overdose requires medication plan, follow-up timing, safety plan and crisis pathway.",
        modelWording: "Leaving without medication supply or follow-up appointment shows discharge planning failure.",
        keywords: ["without antidepressants", "follow-up appointment", "medication supply", "discharge plan", "crisis number"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `This is an unsafe system-driven discharge. Bed pressure was real, but the phrase "discharged to create a bed" shows clinical need was displaced by service pressure. Nikhil had a recent serious overdose and his partner reported giving away possessions and saying "I will be free soon" on the morning of discharge. That collateral should have triggered senior review, not weekend discharge.

I would review Nikhil's current risk, communicate with his partner, complete incident reporting and conduct open disclosure. The governance review must examine consultant escalation, registrar supervision, handover of nursing collateral, discharge summary errors, wrong-GP communication, absence of medication supply and lack of follow-up. The system issue is not solved by blaming the registrar; it requires a safe bed-pressure escalation pathway.`,
  },
  {
    id: "QA-008",
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
        name: "Postpartum psychosis red flags missed",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "not slept for three nights, was whispering that \"the baby is contaminated\"",
        whyItMatters: "Sleep deprivation and contamination delusion in the early postpartum period indicate possible postpartum psychosis.",
        relatedRisk: "Risk to mother and infant can escalate rapidly even without expressed intent.",
        modelWording: "No sleep for three nights plus belief the baby is contaminated should have triggered postpartum psychosis risk assessment, not simple anxiety.",
        keywords: ["postpartum psychosis", "not slept", "baby is contaminated", "delusion", "postnatal", "psychosis"],
      },
      {
        id: "s2",
        name: "Infant safety risk not dependent on stated intent",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "refused to let staff weigh the baby",
        whyItMatters: "Refusal of baby care in psychosis creates infant neglect/dehydration risk even if the mother denies intent to harm.",
        relatedRisk: "Baby later returned dehydrated, confirming foreseeable infant risk.",
        modelWording: "Refusal to allow weighing was an infant safety signal; denial of intent did not make discharge safe.",
        keywords: ["baby", "infant", "weigh", "dehydrated", "neglect", "risk to baby", "vulnerable"],
      },
      {
        id: "s3",
        name: "Collateral omitted from psychiatry note",
        category: "collateral",
        severity: "important",
        clueInStem: "These details do not appear in the psychiatry note",
        whyItMatters: "Family history of postpartum psychosis and stopping quetiapine were highly relevant risk factors that were not documented.",
        relatedSystem: "Documentation omission impaired formulation and safety planning.",
        modelWording: "The partner's collateral about family postpartum psychosis and stopping quetiapine should have been documented and used in formulation.",
        keywords: ["collateral", "partner", "sister", "postpartum psychosis", "quetiapine", "not documented"],
      },
      {
        id: "s4",
        name: "Unsafe delayed follow-up",
        category: "disposition",
        severity: "critical",
        clueInStem: "Community follow-up was booked for seven days later",
        whyItMatters: "Possible postpartum psychosis with infant risk requires urgent review or admission pathway, not routine follow-up in seven days.",
        relatedSystem: "Requires perinatal escalation pathway and out-of-hours consultant involvement.",
        modelWording: "Seven-day follow-up was unsafe given possible postpartum psychosis and active infant-care refusal.",
        keywords: ["seven days", "follow-up", "routine", "urgent", "admission", "perinatal escalation"],
      },
      {
        id: "s5",
        name: "Child protection not contacted despite infant risk",
        category: "child_protection",
        severity: "critical",
        clueInStem: "Child protection was not contacted",
        whyItMatters: "Infant safety concerns in the context of maternal psychosis require child safety planning and possible statutory consultation.",
        relatedLegal: "Mandatory reporting/consultation thresholds depend on jurisdiction, but risk must be assessed and documented.",
        modelWording: "Child protection consultation should have been considered because the baby was a vulnerable dependent at foreseeable risk.",
        keywords: ["child protection", "infant safety", "mandatory", "statutory", "baby", "safeguard"],
      },
      {
        id: "s6",
        name: "Over-reliance on denial of harm",
        category: "governance",
        severity: "important",
        clueInStem: "technically she denied wanting to hurt the baby",
        whyItMatters: "Denial of intent is not sufficient when behaviour and delusional content indicate risk to a vulnerable infant.",
        modelWording: "The midwifery manager's phrase shows anchoring on denial of intent instead of behavioural infant-risk formulation.",
        keywords: ["denied", "wanting to hurt", "denial", "intent", "anchoring", "behavioural risk"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s4", "s5"],
      secondary: ["s3", "s6"],
      lowYield: [],
    },
    modelAnswer: `The review should identify a foreseeable perinatal safety failure. Alana had possible postpartum psychosis: no sleep for three nights, belief the baby was contaminated, refusal to allow weighing, family history of postpartum psychosis and medication cessation. Infant safety risk did not require her to state an intention to harm the baby.

I would ensure Alana and the baby are currently safe, notify perinatal psychiatry, paediatrics and child protection as appropriate, and conduct open disclosure with the partner. The incident review should examine out-of-hours psychiatric assessment, missing collateral, documentation quality, perinatal escalation thresholds, delayed follow-up and failure to create an infant safety plan. The learning point is that postpartum psychosis risk is behavioural and contextual, not dependent on a simple denial of harm.`,
  },
  {
    id: "QA-009",
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
        name: "Wrong ECT modality delivered",
        category: "governance",
        severity: "critical",
        clueInStem: "received bilateral ECT although the treating consultant's plan specified \"right unilateral ECT due cognitive risk\"",
        whyItMatters: "Delivering a different ECT modality than planned is a procedural safety incident with clinical implications.",
        relatedRisk: "Bilateral ECT may increase cognitive adverse effects, particularly where cognitive risk was already identified.",
        modelWording: "This is a wrong-procedure/wrong-modality ECT incident because bilateral ECT was given despite a right unilateral plan.",
        keywords: ["bilateral", "right unilateral", "ECT", "wrong modality", "procedure", "cognitive risk"],
      },
      {
        id: "s2",
        name: "Consent documentation inadequate",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "does not specify electrode placement, cognitive risks, alternatives, or interpreter use",
        whyItMatters: "ECT consent must document material risks, alternatives and the specific treatment plan; generic agreement is inadequate.",
        relatedLegal: "Poor consent documentation increases medico-legal risk and undermines patient autonomy.",
        modelWording: "The consent form is inadequate because it does not document electrode placement, cognitive risk, alternatives or interpreter use.",
        keywords: ["consent", "electrode placement", "cognitive risks", "alternatives", "interpreter", "generic"],
      },
      {
        id: "s3",
        name: "Interpreter request ignored for consent",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "had asked for a Mandarin interpreter at admission because \"medical words are hard\"",
        whyItMatters: "Conversational English is not enough for complex consent when the patient requested interpreter support.",
        relatedCultural: "Language access is necessary for valid, culturally safe consent.",
        modelWording: "Mei's request for a Mandarin interpreter should have been honoured for ECT consent discussions.",
        keywords: ["Mandarin", "interpreter", "medical words are hard", "language", "consent", "cultural safety"],
      },
      {
        id: "s4",
        name: "Checklist completed after induction",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "ECT checklist was completed after the anaesthetic induction",
        whyItMatters: "A safety checklist completed after induction cannot prevent wrong-procedure errors.",
        relatedSystem: "Requires procedural timeout before anaesthesia.",
        modelWording: "Completing the ECT checklist after induction defeats its safety purpose and contributed to the error.",
        keywords: ["checklist", "after induction", "anaesthetic", "timeout", "running late", "safety check"],
      },
      {
        id: "s5",
        name: "Informal local practice overrode individual plan",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "bilateral is what we usually do here",
        whyItMatters: "Local custom cannot override the documented consultant treatment plan and consent.",
        relatedSystem: "Requires role clarity in ECT suite and pre-procedure verification.",
        modelWording: "The nurse's statement that bilateral is usual practice shows unsafe reliance on routine instead of patient-specific plan verification.",
        keywords: ["usually do here", "routine", "local practice", "treatment plan", "verification", "ECT nurse"],
      },
      {
        id: "s6",
        name: "Need for open disclosure to Mei and husband",
        category: "family_carer",
        severity: "important",
        clueInStem: "husband is distressed and says no one explained the difference",
        whyItMatters: "The family has identified a consent and communication failure requiring open disclosure and clear explanation.",
        modelWording: "Mei and her husband require prompt open disclosure about the wrong ECT modality and potential cognitive implications.",
        keywords: ["husband", "distressed", "open disclosure", "explained", "difference", "communication"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s4"],
      secondary: ["s3", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `This is a serious ECT procedural safety and consent incident. Bilateral ECT was delivered despite a documented plan for right unilateral ECT due cognitive risk. The checklist was completed after anaesthetic induction, so it could not function as a safety barrier. The consent documentation was inadequate because it did not specify electrode placement, cognitive risks, alternatives or interpreter use.

I would ensure Mei's immediate recovery and cognitive monitoring, notify the treating consultant and hospital governance, complete incident reporting and conduct open disclosure with Mei and her husband. The review should examine ECT consent standards, interpreter access, pre-procedure timeout, role clarity, checklist timing, and the unsafe culture implied by "bilateral is what we usually do here."`,
  },
  {
    id: "QA-010",
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
        name: "High-risk discharge after ligature self-harm",
        category: "risk_self",
        severity: "critical",
        clueInStem: "discharged Talia, a 19-year-old woman brought in after ligature self-harm in a police cell",
        whyItMatters: "Ligature self-harm in custody is a high-risk presentation requiring careful formulation and safety planning.",
        relatedRisk: "Repeat ligature attempt occurred within six hours.",
        modelWording: "Ligature self-harm in a police cell is a high-risk contextual presentation, not a low-benefit admission question alone.",
        keywords: ["ligature", "police cell", "self-harm", "high-risk", "custody", "repeat attempt"],
      },
      {
        id: "s2",
        name: "Stigmatising diagnostic shortcut",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "emotionally unstable personality traits; no admission benefit",
        whyItMatters: "This wording suggests diagnostic shortcutting and therapeutic nihilism rather than formulation of acute risk.",
        relatedSystem: "Training and supervision should address stigma and formulation quality.",
        modelWording: "The phrase 'emotionally unstable personality traits; no admission benefit' is not a formulation and risks minimising acute danger.",
        keywords: ["emotionally unstable", "personality traits", "no admission benefit", "stigma", "formulation", "therapeutic nihilism"],
      },
      {
        id: "s3",
        name: "Missing collateral and safety plan",
        category: "collateral",
        severity: "critical",
        clueInStem: "no contact with Talia's mother, no police collateral, and no safety plan",
        whyItMatters: "Discharge after custodial ligature self-harm without collateral or safety plan is unsafe.",
        relatedRisk: "Key information about triggers, means, custody context and supports was absent.",
        modelWording: "The absence of mother contact, police collateral and safety plan makes the discharge process unsafe.",
        keywords: ["mother", "police collateral", "safety plan", "collateral", "no contact", "discharge"],
      },
      {
        id: "s4",
        name: "Registrar felt unable to call consultant",
        category: "governance",
        severity: "critical",
        clueInStem: "calling the consultant at 4 am would show I couldn't cope",
        whyItMatters: "A trainee who fears escalation is a supervision and patient-safety risk.",
        relatedSystem: "Requires culture of escalation, not shame-based independence.",
        modelWording: "The registrar's fear that calling would show inability to cope indicates a supervision culture failure.",
        keywords: ["couldn't cope", "calling consultant", "4 am", "escalation", "supervision", "trainee"],
      },
      {
        id: "s5",
        name: "Unsafe consultant cover across three hospitals",
        category: "system_pressure",
        severity: "important",
        clueInStem: "consultant was covering three hospitals",
        whyItMatters: "The consultant workload may have created unsafe barriers to direct supervision.",
        relatedSystem: "Requires roster review and escalation to service leadership.",
        modelWording: "Consultant cover across three hospitals is a system contributor to inadequate after-hours supervision.",
        keywords: ["three hospitals", "consultant covering", "roster", "after-hours", "workload", "service pressure"],
      },
      {
        id: "s6",
        name: "Email discouraged escalation",
        category: "governance",
        severity: "important",
        clueInStem: "Use your judgement overnight unless absolutely necessary",
        whyItMatters: "This wording may discourage junior trainees from calling in high-risk situations.",
        relatedSystem: "Supervision policy should define mandatory escalation triggers.",
        modelWording: "The email 'unless absolutely necessary' created an unsafe ambiguity for a Stage 1 registrar.",
        keywords: ["use your judgement", "absolutely necessary", "email", "mandatory escalation", "ambiguity", "Stage 1"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s3", "s4"],
      secondary: ["s2", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `This incident should be reviewed as both a clinical safety event and a supervision governance failure. Talia's ligature self-harm in a police cell was high risk; discharge without psychosocial formulation, mother contact, police collateral or safety plan was unsafe. The label "emotionally unstable personality traits; no admission benefit" suggests diagnostic shortcutting rather than acute risk formulation.

The registrar's distress and belief that calling at 4 am would show they could not cope is a central safety signal. I would support the registrar while addressing accountability, ensure Talia's current safety, report the incident, and review after-hours supervision. The consultant covering three hospitals and the email advising registrars to use judgement unless "absolutely necessary" require roster and escalation-policy review, including mandatory consultant contact triggers for high-risk discharge.`,
  },
];
import type { QuizStem } from "../quizData";

export const SUP_STEMS: QuizStem[] = [
  {
    id: "SUP-001",
    topic: "supervision",
    difficulty: "consultant",
    title: "Stage 1 Registrar Wants to Discharge a High-Risk ED Patient",
    candidateRole: "Consultant psychiatrist supervising a junior registrar after hours",
    setting: "Metropolitan Emergency Department, 2 am",
    stem: `You are the consultant psychiatrist on call. A Stage 1 registrar phones at 2 am asking for permission to discharge Liam, a 23-year-old man brought to ED by police after standing on a motorway overpass. Liam now denies suicidal ideation and says he was "just trying to clear my head."

The registrar says Liam has "borderline traits" and that admission will "reinforce behaviour." The ED is overcrowded and the registrar sounds irritated. Police report Liam had sent his ex-partner a message saying, "You will all be sorry tomorrow." His mother is in the waiting room and says Liam has not slept for two nights, recently lost his apprenticeship, and has been drinking heavily. The registrar has not spoken to the mother because "he refused consent." The registrar asks, "Can I just give him a crisis number and let him go?"`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "High-risk behaviour despite denial of SI",
        category: "risk_self",
        severity: "critical",
        clueInStem: "standing on a motorway overpass",
        whyItMatters: "The behaviour is high lethality and cannot be negated by later denial of suicidal ideation.",
        relatedRisk: "Risk of imminent self-harm remains elevated despite verbal denial.",
        modelWording: "Standing on a motorway overpass is a high-lethality suicidal behaviour signal; denial of SI does not make discharge safe.",
        keywords: ["overpass", "motorway", "high lethality", "denial", "suicidal", "risk", "not safe"],
      },
      {
        id: "s2",
        name: "Threatening farewell-style message",
        category: "risk_self",
        severity: "critical",
        clueInStem: "You will all be sorry tomorrow",
        whyItMatters: "This message suggests possible suicidal communication, revenge fantasy, or escalating risk to others.",
        relatedRisk: "It raises both self-harm and possible interpersonal violence concerns.",
        modelWording: "The message 'You will all be sorry tomorrow' should trigger concern for imminent suicide or retaliatory risk.",
        keywords: ["sorry tomorrow", "message", "farewell", "threat", "retaliatory", "ex-partner", "imminent"],
      },
      {
        id: "s3",
        name: "Stigmatising diagnostic shortcut",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "borderline traits",
        whyItMatters: "Using personality language to minimise acute risk is poor formulation and creates unsafe therapeutic nihilism.",
        relatedSystem: "This requires corrective supervision on formulation and stigma.",
        modelWording: "The registrar's phrase 'borderline traits' is not a risk formulation and risks minimising a high-lethality presentation.",
        keywords: ["borderline", "personality", "stigma", "formulation", "therapeutic nihilism", "traits"],
      },
      {
        id: "s4",
        name: "Collateral not obtained despite critical risk information",
        category: "collateral",
        severity: "critical",
        clueInStem: "The registrar has not spoken to the mother because \"he refused consent\"",
        whyItMatters: "Collateral can usually be received even when information cannot be disclosed; refusal does not prevent listening to family risk information.",
        relatedLegal: "Confidentiality must be balanced with safety and duty of care.",
        modelWording: "The registrar should receive collateral from the mother even if Liam refuses consent to disclosure.",
        keywords: ["mother", "collateral", "refused consent", "confidentiality", "listen", "family", "duty of care"],
      },
      {
        id: "s5",
        name: "Acute destabilising factors",
        category: "risk_self",
        severity: "important",
        clueInStem: "not slept for two nights, recently lost his apprenticeship, and has been drinking heavily",
        whyItMatters: "Insomnia, job loss and alcohol use acutely increase impulsivity and suicide risk.",
        relatedRisk: "Alcohol and sleep deprivation increase disinhibition.",
        modelWording: "Two nights without sleep, job loss and heavy alcohol use are acute dynamic risk factors.",
        keywords: ["not slept", "apprenticeship", "drinking", "alcohol", "dynamic risk", "sleep deprivation"],
      },
      {
        id: "s6",
        name: "Consultant must actively supervise, not rubber-stamp discharge",
        category: "governance",
        severity: "critical",
        clueInStem: "asks for permission to discharge",
        whyItMatters: "A Stage 1 registrar seeking discharge approval for a high-risk presentation requires direct consultant supervision and clear documented decision-making.",
        relatedSystem: "Consultant accountability cannot be delegated to a junior registrar under ED pressure.",
        modelWording: "I would not authorise discharge by phone; I would require further assessment, collateral and likely attend or directly supervise the plan.",
        keywords: ["permission to discharge", "Stage 1", "consultant", "supervision", "not authorise", "direct assessment"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s4", "s6"],
      secondary: ["s3", "s5"],
      lowYield: [],
    },
    modelAnswer: `This is not a safe telephone discharge. Standing on a motorway overpass is high-lethality behaviour, and the message "You will all be sorry tomorrow" raises imminent self-harm and possible interpersonal risk. Liam's denial of suicidal ideation is not sufficient.

I would instruct the registrar to pause discharge, obtain collateral from the mother, review police information, reassess intoxication/sleep deprivation and consider involuntary assessment if Liam lacks capacity or remains at imminent risk. I would correct the registrar's formulation: "borderline traits" is not a reason to minimise acute risk. As consultant, I must actively supervise the decision, not rubber-stamp discharge under ED pressure.`,
  },
  {
    id: "SUP-002",
    topic: "supervision",
    difficulty: "consultant",
    title: "Registrar Misses Capacity Issue in CL Psychiatry",
    candidateRole: "CL consultant supervising a registrar",
    setting: "General medical ward",
    stem: `You are the consultation-liaison consultant. Your registrar asks you to countersign a note for Mr Chen, a 69-year-old Mandarin-speaking man with bowel obstruction who is refusing surgery. The registrar has written: "Patient understands risks. Capacity intact. Refuses surgery due to cultural beliefs."

When you review the chart, you see nursing notes describing fluctuating alertness overnight, pulling out his IV line, and saying his dead brother was standing by the bed. The registrar assessed him using his daughter as interpreter because "formal interpreter would take too long." The surgical team is angry and says psychiatry is delaying life-saving treatment. The daughter says her father keeps asking why he is in hospital, but she does not want to contradict the registrar.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Possible delirium invalidating simple capacity conclusion",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "fluctuating alertness overnight, pulling out his IV line, and saying his dead brother was standing by the bed",
        whyItMatters: "Fluctuation, perceptual disturbance and line-pulling suggest delirium, requiring reassessment of capacity.",
        relatedRisk: "Missed delirium may lead to unsafe refusal of life-saving treatment.",
        modelWording: "The nursing notes suggest delirium; capacity cannot be accepted as intact without assessing this.",
        keywords: ["delirium", "fluctuat", "dead brother", "IV line", "capacity", "cognition", "confusion"],
      },
      {
        id: "s2",
        name: "Capacity assessment through family interpreter is unsafe",
        category: "capacity",
        severity: "critical",
        clueInStem: "using his daughter as interpreter because \"formal interpreter would take too long\"",
        whyItMatters: "Capacity assessment requires accurate communication; family interpretation is unreliable and creates conflict of interest.",
        relatedLegal: "Procedurally unsafe assessment may not support refusal or treatment decisions.",
        relatedCultural: "Language access is part of culturally safe care.",
        modelWording: "A professional Mandarin interpreter is required before concluding capacity about surgery.",
        keywords: ["daughter", "interpreter", "formal interpreter", "Mandarin", "capacity", "language", "too long"],
      },
      {
        id: "s3",
        name: "Registrar used vague cultural explanation",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "Refuses surgery due to cultural beliefs",
        whyItMatters: "This phrase is unsupported and risks stereotyping rather than assessing actual values, understanding and reasoning.",
        relatedCultural: "Cultural formulation must be specific and elicited, not assumed.",
        modelWording: "The phrase 'cultural beliefs' is too vague; the registrar must document the actual belief and how it affects decision-making.",
        keywords: ["cultural beliefs", "vague", "stereotype", "cultural formulation", "values", "specific"],
      },
      {
        id: "s4",
        name: "Life-saving surgery creates time-critical legal issue",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "refusing surgery",
        whyItMatters: "Refusal of potentially life-saving surgery requires decision-specific, time-specific capacity assessment and legal pathway if capacity lacking.",
        relatedLegal: "May require emergency treatment or substitute decision-making depending urgency and jurisdiction.",
        modelWording: "The refusal of surgery requires urgent decision-specific capacity assessment and, if lacking, a lawful treatment pathway.",
        keywords: ["refusing surgery", "life-saving", "decision-specific", "legal pathway", "substitute", "emergency"],
      },
      {
        id: "s5",
        name: "Daughter discomfort signals unreliable assessment context",
        category: "family_carer",
        severity: "important",
        clueInStem: "she does not want to contradict the registrar",
        whyItMatters: "The daughter may have relevant information but feels inhibited, which affects collateral accuracy and cultural safety.",
        modelWording: "The daughter's reluctance to contradict the registrar suggests the assessment context is unsafe and needs careful re-engagement.",
        keywords: ["daughter", "contradict", "reluctant", "family", "collateral", "unsafe context"],
      },
      {
        id: "s6",
        name: "Supervision requires correction before countersignature",
        category: "governance",
        severity: "critical",
        clueInStem: "asks you to countersign a note",
        whyItMatters: "Countersigning an unsafe assessment would transfer consultant accountability to a flawed conclusion.",
        relatedSystem: "Consultant must supervise, correct and document revised reasoning.",
        modelWording: "I should not countersign this note until capacity, delirium and interpreter issues are properly reassessed.",
        keywords: ["countersign", "supervision", "consultant accountability", "unsafe note", "reassess", "correct"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s4", "s6"],
      secondary: ["s3", "s5"],
      lowYield: [],
    },
    modelAnswer: `I would not countersign the registrar's note. The nursing notes describe fluctuating alertness, line-pulling and seeing a dead brother, which strongly suggests delirium. The capacity assessment was also procedurally unsafe because it was conducted through the daughter rather than a professional Mandarin interpreter.

I would supervise the registrar to redo the assessment: define the exact decision, use an interpreter, assess delirium/cognition, document understanding, retention, weighing and communication, and identify the lawful pathway if capacity is lacking. I would also communicate with surgery about urgency and explain that psychiatry is not delaying treatment; it is ensuring the decision is legally and clinically valid.`,
  },
  {
    id: "SUP-003",
    topic: "supervision",
    difficulty: "consultant",
    title: "Registrar Writes Poor Mental Health Act Documentation",
    candidateRole: "Consultant psychiatrist supervising involuntary treatment documentation",
    setting: "Acute inpatient unit",
    stem: `You are the supervising consultant on an acute inpatient unit. A registrar asks you to review Mental Health Act paperwork for Sofia, a 31-year-old woman detained overnight after she tried to leave the ward while saying staff were poisoning her baby through breast milk.

The registrar's form states: "Psychotic. Needs admission. Risk to baby. Detain." There is no description of the actual behaviour, no record of Sofia's views, no capacity reasoning, no explanation of less restrictive alternatives, and no reference to the baby being temporarily cared for by Sofia's partner on the maternity ward. Sofia is Aboriginal and repeatedly asked for her aunt to be called; this is not mentioned in the form.

The nurse in charge says the paperwork is "probably fine" because everyone knows Sofia is unwell. The registrar says, "I wrote the key points — the tribunal won't read all the details anyway."`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Bare diagnostic label is inadequate legal documentation",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "Psychotic. Needs admission. Risk to baby. Detain.",
        whyItMatters: "MHA documentation must justify criteria with facts, behaviour, risk, capacity and least restrictive reasoning.",
        relatedLegal: "Poor documentation may make detention unlawful or indefensible.",
        modelWording: "The form is inadequate because it uses labels without evidencing the legal criteria.",
        keywords: ["psychotic needs admission", "detain", "legal criteria", "MHA", "documentation", "facts", "behaviour"],
      },
      {
        id: "s2",
        name: "Missing behaviour and risk evidence",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "saying staff were poisoning her baby through breast milk",
        whyItMatters: "This belief creates specific infant safety and treatment-refusal risks that must be documented, not summarised generically.",
        relatedRisk: "Risk relates to maternal psychosis, infant care and refusal of support.",
        modelWording: "The belief that staff were poisoning the baby through breast milk should be documented as the risk-relevant behaviour and belief.",
        keywords: ["poisoning", "breast milk", "baby", "infant", "risk", "belief", "behaviour"],
      },
      {
        id: "s3",
        name: "Capacity reasoning absent",
        category: "capacity",
        severity: "critical",
        clueInStem: "no capacity reasoning",
        whyItMatters: "Compulsory treatment decisions require clear explanation of decision-specific capacity where relevant.",
        relatedLegal: "Capacity reasoning supports least restrictive and rights-based decision-making.",
        modelWording: "The registrar must document how psychosis affected Sofia's ability to understand, weigh or use information about admission and care.",
        keywords: ["capacity", "understand", "weigh", "use information", "reasoning", "decision-specific"],
      },
      {
        id: "s4",
        name: "Least restrictive alternatives not documented",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "no explanation of less restrictive alternatives",
        whyItMatters: "The legal and clinical threshold requires showing why voluntary care, family support or maternity liaison were insufficient.",
        relatedLegal: "Least restrictive care is a core compulsory treatment principle.",
        modelWording: "The form must state what less restrictive options were considered and why they were inadequate.",
        keywords: ["least restrictive", "less restrictive", "voluntary", "alternatives", "legal", "threshold"],
      },
      {
        id: "s5",
        name: "Cultural support request omitted",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "Sofia is Aboriginal and repeatedly asked for her aunt to be called",
        whyItMatters: "Her request for kin support is clinically relevant to engagement, distress and least restrictive care.",
        relatedCultural: "Cultural safety requires recording and acting on nominated support requests.",
        modelWording: "Sofia's request for her aunt should be documented and acted upon as part of culturally safe, least restrictive care.",
        keywords: ["Aboriginal", "aunt", "called", "kin", "cultural safety", "support", "ALO"],
      },
      {
        id: "s6",
        name: "Registrar dismisses tribunal/legal scrutiny",
        category: "governance",
        severity: "important",
        clueInStem: "the tribunal won't read all the details anyway",
        whyItMatters: "This reflects unsafe professional attitude toward rights-based documentation and needs corrective supervision.",
        relatedSystem: "Consultant must reinforce documentation standards and legal accountability.",
        modelWording: "The registrar's comment about the tribunal is a supervision issue requiring correction and education.",
        keywords: ["tribunal", "won't read", "supervision", "attitude", "rights", "accountability"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4"],
      secondary: ["s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `The paperwork is not adequate. "Psychotic. Needs admission. Risk to baby. Detain" does not evidence the legal criteria. The registrar must document Sofia's actual belief about poisoning through breast milk, the behaviour leading to detention, risk to the baby, Sofia's views, capacity reasoning, and why less restrictive options were insufficient.

I would supervise the registrar to rewrite the form before relying on it. Sofia's Aboriginal identity and repeated request for her aunt are clinically relevant and should be documented and acted upon. The registrar's statement that the tribunal will not read details requires immediate corrective feedback: MHA documentation is a rights-based clinical document, not an administrative formality.`,
  },
  {
    id: "SUP-004",
    topic: "supervision",
    difficulty: "consultant",
    title: "Registrar Distressed After Patient Suicide",
    candidateRole: "Consultant psychiatrist and supervisor",
    setting: "Community mental health team",
    stem: `You are the consultant psychiatrist for a community mental health team. A registrar you supervise saw Ethan, a 34-year-old man, on Friday and agreed to discharge him from the service after he said he was "doing much better." Ethan died by suicide on Sunday.

The registrar is crying in your office and says, "It is my fault. I should never be a psychiatrist." You review the note: there was no collateral from Ethan's partner, no updated safety plan, and no documentation of means restriction despite a previous overdose with prescribed medication. The registrar had discussed the case briefly with you in the corridor on Friday, saying "he seems fine now," but you did not review the file.

The service manager wants a written statement by 5 pm and asks whether the registrar should be removed from clinical duties immediately.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Immediate support and containment for distressed registrar",
        category: "governance",
        severity: "critical",
        clueInStem: "crying in your office and says, \"It is my fault. I should never be a psychiatrist\"",
        whyItMatters: "The registrar is acutely distressed and requires support, containment and assessment of fitness for work.",
        relatedSystem: "Staff wellbeing is part of safe governance after adverse events.",
        modelWording: "The registrar's distress requires immediate support, not blame or abandonment.",
        keywords: ["crying", "my fault", "should never", "distressed", "support", "fitness", "containment"],
      },
      {
        id: "s2",
        name: "Clinical documentation gaps in discharge decision",
        category: "governance",
        severity: "critical",
        clueInStem: "no collateral from Ethan's partner, no updated safety plan, and no documentation of means restriction",
        whyItMatters: "These omissions are central to the clinical review and cannot be ignored because the registrar is distressed.",
        relatedRisk: "Previous overdose with medication makes means restriction particularly important.",
        modelWording: "The discharge note lacked partner collateral, updated safety plan and medication means-restriction documentation.",
        keywords: ["collateral", "partner", "safety plan", "means restriction", "overdose", "documentation"],
      },
      {
        id: "s3",
        name: "Consultant supervision responsibility",
        category: "governance",
        severity: "critical",
        clueInStem: "discussed the case briefly with you in the corridor",
        whyItMatters: "Corridor supervision for discharge from service may be inadequate; consultant accountability and supervision process must be reviewed.",
        relatedSystem: "Requires examination of supervision structure, not only trainee performance.",
        modelWording: "The corridor discussion raises consultant supervision and governance issues; I must include my own role in the review.",
        keywords: ["corridor", "supervision", "consultant", "briefly", "review file", "accountability"],
      },
      {
        id: "s4",
        name: "Avoid premature blame before review",
        category: "ethics",
        severity: "important",
        clueInStem: "It is my fault",
        whyItMatters: "The supervisor must support accountability while avoiding premature conclusions before fact-finding.",
        modelWording: "I would acknowledge the registrar's distress but avoid agreeing with self-blame before a structured review.",
        keywords: ["fault", "blame", "premature", "structured review", "accountability", "fact"],
      },
      {
        id: "s5",
        name: "Need for formal incident process",
        category: "governance",
        severity: "important",
        clueInStem: "service manager wants a written statement by 5 pm",
        whyItMatters: "Statements should be factual, timely and aligned with incident review processes, not rushed defensively.",
        relatedSystem: "Requires incident reporting, open disclosure and coronial awareness where applicable.",
        modelWording: "The written statement should be factual and part of the formal incident process, not a defensive rush.",
        keywords: ["written statement", "5 pm", "incident", "formal", "factual", "coronial", "open disclosure"],
      },
      {
        id: "s6",
        name: "Fitness for work should be assessed proportionately",
        category: "disposition",
        severity: "important",
        clueInStem: "asks whether the registrar should be removed from clinical duties immediately",
        whyItMatters: "The decision should balance patient safety, registrar wellbeing, supervision and stigma; removal is not automatic.",
        modelWording: "I would assess the registrar's immediate fitness for work and arrange supported duties or leave if needed, rather than automatic punitive removal.",
        keywords: ["removed", "clinical duties", "fitness for work", "leave", "supported duties", "not punitive"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `I would first support and contain the registrar: they are acutely distressed and may not be fit for immediate clinical work. I would not reinforce self-blame, but I would not minimise the seriousness of the event.

The clinical review must identify documentation and process issues: no partner collateral, no updated safety plan, no means-restriction documentation despite previous overdose, and only corridor supervision. I must include my own supervision role, not place all responsibility on the registrar. I would ensure formal incident reporting, factual documentation, staff support, open disclosure processes and a proportionate decision about the registrar's duties based on fitness and safety.`,
  },
  {
    id: "SUP-005",
    topic: "supervision",
    difficulty: "consultant",
    title: "Registrar Uses Culturally Unsafe Language in Family Meeting",
    candidateRole: "Consultant psychiatrist observing and debriefing a registrar",
    setting: "Inpatient family meeting",
    stem: `You are the consultant psychiatrist observing a family meeting led by your registrar. The patient, Wiremu, is a 40-year-old Māori man admitted with mania. His whānau attend and ask whether kaumātua support can be included in care planning.

The registrar says, "We need to focus on evidence-based treatment, not cultural extras," and then tells the family that Wiremu's non-adherence is "probably because your family system is too chaotic." Wiremu becomes silent and leaves the room. His sister later tells you, "That doctor talked down to us and made it sound like being Māori is the problem."

The registrar says afterwards, "I was just being direct. They needed psychoeducation." The nurse facilitator is angry but says she did not want to challenge the registrar in front of the family.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Culturally unsafe dismissal of kaumātua support",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "not cultural extras",
        whyItMatters: "Dismissing cultural support as an extra undermines culturally safe care and engagement.",
        relatedCultural: "For Māori patients, whānau and kaumātua involvement may be central to care planning.",
        modelWording: "The phrase 'cultural extras' is culturally unsafe and requires immediate supervisory correction.",
        keywords: ["cultural extras", "kaumātua", "Māori", "cultural safety", "whānau", "dismiss"],
      },
      {
        id: "s2",
        name: "Blaming family system in a stigmatising way",
        category: "family_carer",
        severity: "critical",
        clueInStem: "your family system is too chaotic",
        whyItMatters: "This alienates family supports and frames them as the problem rather than partners in care.",
        relatedCultural: "It risks stereotyping kinship structures and worsening distrust.",
        modelWording: "Calling the family system 'too chaotic' is not psychoeducation; it is blaming and clinically harmful.",
        keywords: ["family system", "chaotic", "blaming", "stigma", "family", "whānau", "alienat"],
      },
      {
        id: "s3",
        name: "Patient disengagement during meeting",
        category: "immediate_safety",
        severity: "important",
        clueInStem: "Wiremu becomes silent and leaves the room",
        whyItMatters: "The meeting caused disengagement, which may worsen adherence, trust and risk management.",
        modelWording: "Wiremu leaving the room is evidence the communication harmed engagement and needs repair.",
        keywords: ["silent", "leaves the room", "disengagement", "trust", "rupture", "repair"],
      },
      {
        id: "s4",
        name: "Registrar lacks insight into harmful communication",
        category: "governance",
        severity: "important",
        clueInStem: "I was just being direct. They needed psychoeducation",
        whyItMatters: "The registrar reframes harmful comments as psychoeducation, requiring corrective feedback and supervision.",
        relatedSystem: "Supervisor must address communication, cultural safety and reflective capacity.",
        modelWording: "The registrar's defence shows poor insight and requires structured feedback, not reassurance.",
        keywords: ["being direct", "psychoeducation", "insight", "feedback", "supervision", "reflect"],
      },
      {
        id: "s5",
        name: "Need to repair therapeutic rupture with whānau",
        category: "disposition",
        severity: "important",
        clueInStem: "talked down to us",
        whyItMatters: "The consultant must repair harm with patient and whānau to preserve engagement and safety.",
        relatedCultural: "Repair should include apology, listening and culturally appropriate support.",
        modelWording: "I would meet Wiremu and whānau to acknowledge harm, apologise and invite culturally safe care planning.",
        keywords: ["talked down", "repair", "apologise", "whānau", "engagement", "meeting"],
      },
      {
        id: "s6",
        name: "Team member did not feel safe to challenge",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "did not want to challenge the registrar in front of the family",
        whyItMatters: "The nurse's silence indicates hierarchy and psychological safety issues within the MDT.",
        relatedSystem: "Requires team culture allowing real-time safety challenge.",
        modelWording: "The nurse's inability to challenge the registrar shows an MDT psychological safety issue.",
        keywords: ["nurse", "challenge", "hierarchy", "psychological safety", "MDT", "facilitator"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `The registrar's comments were culturally unsafe and clinically harmful. Calling kaumātua support "cultural extras" and describing the whānau as "too chaotic" dismissed cultural identity and family partnership. Wiremu leaving the room shows immediate disengagement.

I would repair the rupture with Wiremu and whānau: acknowledge harm, apologise, invite kaumātua/whānau involvement and reframe care collaboratively. With the registrar, I would provide clear corrective feedback: this was not direct psychoeducation; it was culturally unsafe communication. I would also address the MDT issue that the nurse did not feel able to challenge the registrar in the meeting.`,
  },
  {
    id: "SUP-006",
    topic: "supervision",
    difficulty: "consultant",
    title: "Registrar Overconfident About Seclusion Decision",
    candidateRole: "Consultant psychiatrist providing urgent supervision",
    setting: "High-dependency inpatient unit",
    stem: `You are the consultant on call for a high-dependency mental health unit. The night registrar phones after authorising seclusion for Aisha, a 26-year-old woman with complex trauma and psychosis. Aisha had been pacing and shouting that male security guards were "the men from before." She threw a cup of water at a nurse but did not assault anyone.

The registrar says, "She is psychotic and dangerous; seclusion is clearly indicated." The chart shows no documented attempt at sensory modulation, female staff engagement, oral PRN, or contacting her nominated support person. The registrar says the unit was short-staffed and "security were already there, so it was efficient." Aisha is now banging the seclusion room door and screaming, "Don't lock me in again."`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Seclusion may not be least restrictive",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "no documented attempt at sensory modulation, female staff engagement, oral PRN, or contacting her nominated support person",
        whyItMatters: "Restrictive practice requires evidence that less restrictive options were tried or considered.",
        relatedLegal: "Seclusion must be necessary, proportionate and least restrictive.",
        modelWording: "The absence of documented alternatives means seclusion has not been justified as least restrictive.",
        keywords: ["least restrictive", "seclusion", "sensory modulation", "female staff", "oral PRN", "support person"],
      },
      {
        id: "s2",
        name: "Trauma re-enactment triggered by male security",
        category: "trauma",
        severity: "critical",
        clueInStem: "male security guards were \"the men from before\"",
        whyItMatters: "The presentation signals re-traumatisation and may worsen with male security and confinement.",
        relatedRisk: "Trauma activation may escalate agitation and injury risk.",
        modelWording: "Aisha's reference to male guards as 'the men from before' should trigger trauma-informed alternatives.",
        keywords: ["men from before", "male security", "trauma", "re-traumatisation", "complex trauma", "trigger"],
      },
      {
        id: "s3",
        name: "Current seclusion distress is a safety signal",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "banging the seclusion room door and screaming, \"Don't lock me in again\"",
        whyItMatters: "Active distress in seclusion requires urgent review, observation and consideration of termination or modification.",
        relatedRisk: "Risk of injury, worsening trauma and escalation.",
        modelWording: "Her current door-banging and screaming require immediate review of seclusion safety and necessity.",
        keywords: ["banging", "don't lock me in", "seclusion room", "distress", "urgent review", "injury"],
      },
      {
        id: "s4",
        name: "Overconfident registrar formulation",
        category: "governance",
        severity: "important",
        clueInStem: "seclusion is clearly indicated",
        whyItMatters: "The registrar shows premature certainty without weighing proportionality, alternatives or trauma context.",
        relatedSystem: "Requires supervision on restrictive practice reasoning.",
        modelWording: "The registrar's certainty is unsafe because the least-restrictive and trauma-informed analysis is missing.",
        keywords: ["clearly indicated", "overconfident", "premature", "supervision", "restrictive practice"],
      },
      {
        id: "s5",
        name: "Efficiency is not a valid seclusion rationale",
        category: "ethics",
        severity: "important",
        clueInStem: "security were already there, so it was efficient",
        whyItMatters: "Operational convenience cannot justify coercive restrictive practice.",
        relatedLegal: "Seclusion must be clinically necessary, not merely efficient.",
        modelWording: "The fact security were already present is not a lawful or ethical justification for seclusion.",
        keywords: ["efficient", "security already", "convenience", "ethical", "lawful", "rationale"],
      },
      {
        id: "s6",
        name: "Short staffing is a system contributor",
        category: "system_pressure",
        severity: "important",
        clueInStem: "the unit was short-staffed",
        whyItMatters: "Short staffing may contribute to restrictive practice use and should be escalated and reviewed.",
        relatedSystem: "Requires governance review of staffing, acuity and restrictive practice rates.",
        modelWording: "Short staffing is a systems contributor, not a justification for seclusion.",
        keywords: ["short-staffed", "staffing", "acuity", "system", "restrictive practice", "escalate"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `I would urgently review Aisha in seclusion and determine whether seclusion remains necessary, proportionate and least restrictive. The stem gives several missed alternatives: sensory modulation, female staff engagement, oral PRN and contacting her nominated support person. Her statements about male security being "the men from before" and screaming "Don't lock me in again" make trauma-informed care central.

I would supervise the registrar to move beyond "psychotic and dangerous." The issue is not whether she is unwell, but whether coercion is justified and whether it is worsening risk. Short staffing and convenience are systems factors, not valid clinical justifications for seclusion.`,
  },
  {
    id: "SUP-007",
    topic: "supervision",
    difficulty: "consultant",
    title: "Registrar Boundary Problem in Psychotherapy Case",
    candidateRole: "Psychotherapy supervisor and consultant psychiatrist",
    setting: "Outpatient psychotherapy clinic",
    stem: `You are supervising a registrar providing weekly psychotherapy to Nadia, a 30-year-old woman with complex trauma. The registrar tells you casually that Nadia has started sending long text messages between sessions and that he has replied late at night because "she has no one else." He also agreed to extend the last three sessions by 25 minutes because Nadia became distressed at the end.

In supervision, the registrar says he feels "protective" and worries that setting limits will "repeat abandonment." He has not documented the text messages in the clinical record. Nadia recently told reception she only wants appointments when this registrar is available and refused crisis team contact when he was on leave.

The registrar asks whether he should give Nadia his personal email so she can "feel secure."`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Boundary crossing through late-night texting",
        category: "ethics",
        severity: "critical",
        clueInStem: "replied late at night because \"she has no one else\"",
        whyItMatters: "Late-night personal responsiveness blurs therapeutic boundaries and may increase dependency.",
        relatedRisk: "Creates risk to patient, registrar and therapeutic frame.",
        modelWording: "Late-night replies are a boundary crossing and should be addressed in supervision and treatment planning.",
        keywords: ["late at night", "text", "boundary", "dependency", "therapeutic frame", "personal"],
      },
      {
        id: "s2",
        name: "Repeated session extensions destabilise therapy frame",
        category: "ethics",
        severity: "critical",
        clueInStem: "extend the last three sessions by 25 minutes",
        whyItMatters: "Repeated unplanned extensions reinforce boundary instability and may worsen attachment anxiety.",
        modelWording: "Repeated 25-minute extensions indicate loss of therapeutic frame and need structured ending work.",
        keywords: ["extend", "25 minutes", "session", "frame", "ending", "boundaries"],
      },
      {
        id: "s3",
        name: "Registrar countertransference",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "feels \"protective\"",
        whyItMatters: "Protective feelings may reflect countertransference influencing boundary decisions.",
        modelWording: "The registrar's protective feelings should be explored as countertransference affecting clinical judgement.",
        keywords: ["protective", "countertransference", "rescue", "feelings", "supervision", "attachment"],
      },
      {
        id: "s4",
        name: "Failure to document clinically relevant contact",
        category: "governance",
        severity: "important",
        clueInStem: "has not documented the text messages in the clinical record",
        whyItMatters: "Out-of-session therapeutic contact is clinically relevant and must be documented.",
        relatedSystem: "Creates medico-legal and continuity risk.",
        modelWording: "The text messages should be documented as clinically relevant out-of-session contact.",
        keywords: ["not documented", "text messages", "clinical record", "documentation", "medico-legal"],
      },
      {
        id: "s5",
        name: "Dependency and service-splitting risk",
        category: "risk_self",
        severity: "important",
        clueInStem: "only wants appointments when this registrar is available and refused crisis team contact",
        whyItMatters: "Nadia is becoming dependent on one clinician and rejecting broader crisis supports.",
        relatedRisk: "Risk escalates during registrar absence or leave.",
        modelWording: "Her refusal of crisis team contact and exclusive reliance on the registrar indicates dependency and safety risk.",
        keywords: ["only wants", "registrar available", "refused crisis team", "dependency", "splitting", "leave"],
      },
      {
        id: "s6",
        name: "Personal email would worsen boundary breach",
        category: "ethics",
        severity: "critical",
        clueInStem: "give Nadia his personal email",
        whyItMatters: "Personal email would further blur professional boundaries and bypass service safety systems.",
        modelWording: "He should not provide personal email; communication must occur through agreed clinical channels.",
        keywords: ["personal email", "email", "boundary breach", "clinical channels", "not provide"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s6"],
      secondary: ["s3", "s4", "s5"],
      lowYield: [],
    },
    modelAnswer: `This is a psychotherapy supervision and boundary-risk case. The registrar has blurred the therapeutic frame through late-night texting, repeated session extensions and proposed personal email contact. His feeling "protective" suggests countertransference that is shaping decisions.

I would advise him not to provide personal email, to stop ad hoc late-night contact, and to re-establish a clear communication and crisis plan through service channels. The text contact must be documented. Nadia's refusal of crisis team contact and insistence on this registrar only indicates dependency and risk during absences. Supervision should focus on boundaries, endings, countertransference, documentation and patient safety.`,
  },
  {
    id: "SUP-008",
    topic: "supervision",
    difficulty: "consultant",
    title: "Bullying Allegation Against Senior Registrar",
    candidateRole: "Consultant psychiatrist and term supervisor",
    setting: "Inpatient training unit",
    stem: `You are the term supervisor for an inpatient unit. A Stage 1 registrar, Priyanka, tells you privately that the senior registrar repeatedly calls her "too slow" in front of nurses and told her, "Maybe psychiatry is not for you." Priyanka says she now avoids asking questions and copied forward an old risk assessment because she was afraid of being criticised for staying late.

A nurse separately tells you Priyanka looked tearful after ward round and that the copied risk assessment missed a new threat by a patient to stab his neighbour. The senior registrar says, "I am just maintaining standards; she needs to toughen up." The unit is short of consultants and the senior registrar is relied on heavily to run the ward.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Bullying undermines trainee safety and patient safety",
        category: "governance",
        severity: "critical",
        clueInStem: "repeatedly calls her \"too slow\" in front of nurses",
        whyItMatters: "Public humiliation creates psychological unsafety and impairs learning, escalation and clinical care.",
        relatedSystem: "Training culture is a governance and patient safety issue.",
        modelWording: "The repeated public criticism is a bullying concern and a patient-safety issue, not just interpersonal style.",
        keywords: ["too slow", "bullying", "public", "humiliation", "psychological safety", "trainee"],
      },
      {
        id: "s2",
        name: "Trainee avoids asking questions",
        category: "governance",
        severity: "critical",
        clueInStem: "now avoids asking questions",
        whyItMatters: "Avoiding questions prevents escalation and increases risk for junior clinicians.",
        relatedSystem: "Supervision environment is unsafe.",
        modelWording: "Priyanka avoiding questions is a direct supervision safety signal.",
        keywords: ["avoids asking", "questions", "escalation", "supervision", "safety", "junior"],
      },
      {
        id: "s3",
        name: "Copied-forward risk assessment missed new threat",
        category: "risk_others",
        severity: "critical",
        clueInStem: "missed a new threat by a patient to stab his neighbour",
        whyItMatters: "The bullying context has already translated into a serious clinical documentation and risk failure.",
        relatedRisk: "Threat to stab neighbour requires immediate risk review and safety action.",
        modelWording: "The missed threat to stab a neighbour requires immediate patient risk review and correction of the copied assessment.",
        keywords: ["stab his neighbour", "copied risk assessment", "threat", "risk to others", "missed", "neighbour"],
      },
      {
        id: "s4",
        name: "Senior registrar rationalises harmful behaviour",
        category: "ethics",
        severity: "important",
        clueInStem: "she needs to toughen up",
        whyItMatters: "This shows poor insight and normalisation of unsafe training culture.",
        modelWording: "The 'toughen up' response suggests lack of insight into bullying and requires formal feedback.",
        keywords: ["toughen up", "maintaining standards", "insight", "feedback", "professionalism"],
      },
      {
        id: "s5",
        name: "Service dependence on senior registrar creates conflict",
        category: "system_pressure",
        severity: "important",
        clueInStem: "relied on heavily to run the ward",
        whyItMatters: "Operational dependence may inhibit appropriate response to bullying and unsafe supervision.",
        relatedSystem: "Requires consultant oversight despite staffing pressures.",
        modelWording: "Reliance on the senior registrar cannot prevent addressing unsafe behaviour.",
        keywords: ["relied on", "run the ward", "short of consultants", "staffing", "operational dependence"],
      },
      {
        id: "s6",
        name: "Need to protect complainant from retaliation",
        category: "governance",
        severity: "important",
        clueInStem: "tells you privately",
        whyItMatters: "Private disclosure requires confidentiality, support and protection from retaliation while facts are assessed.",
        modelWording: "Priyanka needs support, confidentiality and a safe pathway to report concerns without retaliation.",
        keywords: ["privately", "confidential", "retaliation", "support", "report", "complainant"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `This is not merely a personality clash. The alleged bullying has already affected patient safety: Priyanka avoids questions and copied forward a risk assessment that missed a new threat to stab a neighbour. I would first ensure the patient's risk is urgently reviewed and the record corrected.

I would support Priyanka, maintain confidentiality as far as possible, assess immediate safety and follow the training/workplace process. The senior registrar requires clear feedback and investigation; "toughen up" is not acceptable. The fact that the service relies on the senior registrar does not justify unsafe supervision culture. Consultant oversight and a safe reporting pathway are required.`,
  },
  {
    id: "SUP-009",
    topic: "supervision",
    difficulty: "consultant",
    title: "Remote Supervision in Rural ED",
    candidateRole: "Consultant psychiatrist providing remote supervision",
    setting: "Rural hospital Emergency Department",
    stem: `You are the consultant psychiatrist on call for a rural mental health service. A junior registrar is physically located 300 km away and is supervising a mental health nurse by video link. The nurse is assessing Grace, a 67-year-old woman brought in by her neighbour after she was found wandering on a highway at night.

The registrar tells you Grace is "probably dementia with behavioural issues" and plans discharge to the neighbour because there are no local beds and the ambulance transfer will take six hours. The nurse reports Grace is febrile, has new urinary incontinence, and keeps falling asleep during the interview. Grace says the neighbour "steals my pension," but the neighbour is pushing to take her home. There is no onsite doctor after midnight.

The registrar asks, "Given the distance, can I document that I supervised remotely and let the nurse manage it?"`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Possible delirium, not simple dementia",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "febrile, has new urinary incontinence, and keeps falling asleep during the interview",
        whyItMatters: "Fever, incontinence and reduced alertness suggest delirium or acute medical illness requiring urgent medical assessment.",
        relatedRisk: "Discharge could miss sepsis or other acute illness.",
        modelWording: "The fever, new incontinence and drowsiness should trigger delirium/medical deterioration, not dementia discharge.",
        keywords: ["fever", "febrile", "incontinence", "falling asleep", "delirium", "medical", "sepsis"],
      },
      {
        id: "s2",
        name: "Unsafe discharge to potentially exploitative neighbour",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "neighbour \"steals my pension,\" but the neighbour is pushing to take her home",
        whyItMatters: "Grace may be vulnerable to financial abuse or coercion; the proposed carer may be unsafe.",
        relatedRisk: "Risk of elder abuse, neglect and exploitation.",
        modelWording: "The allegation that the neighbour steals her pension makes discharge to that neighbour unsafe without safeguarding assessment.",
        keywords: ["steals my pension", "neighbour", "elder abuse", "financial abuse", "safeguarding", "vulnerable"],
      },
      {
        id: "s3",
        name: "Rural bed pressure cannot override safety",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "there are no local beds and the ambulance transfer will take six hours",
        whyItMatters: "Distance and lack of beds are system constraints but do not make unsafe discharge acceptable.",
        relatedSystem: "Requires escalation to retrieval, medical, aged care or regional duty systems.",
        modelWording: "No local beds and a six-hour transfer are system pressures requiring escalation, not discharge to an unsafe carer.",
        keywords: ["no local beds", "six hours", "ambulance", "rural", "transfer", "system pressure", "escalation"],
      },
      {
        id: "s4",
        name: "Remote supervision does not remove consultant responsibility",
        category: "governance",
        severity: "critical",
        clueInStem: "document that I supervised remotely and let the nurse manage it",
        whyItMatters: "Remote supervision must be active and clinically meaningful, especially for high-risk vulnerable patients.",
        relatedSystem: "Consultant must set clear plan, escalation and documentation.",
        modelWording: "Remote supervision requires active consultant decision-making, not simply documenting that the nurse will manage.",
        keywords: ["remote", "supervised remotely", "nurse manage", "consultant responsibility", "video", "active supervision"],
      },
      {
        id: "s5",
        name: "No onsite doctor after midnight",
        category: "physical_health",
        severity: "important",
        clueInStem: "There is no onsite doctor after midnight",
        whyItMatters: "Medical assessment capacity is limited, increasing risk if delirium or sepsis is suspected.",
        relatedSystem: "Requires urgent escalation before medical cover disappears or retrieval advice.",
        modelWording: "No onsite doctor after midnight increases urgency for medical escalation now.",
        keywords: ["no onsite doctor", "midnight", "medical cover", "escalation", "retrieval", "urgent"],
      },
      {
        id: "s6",
        name: "Premature diagnostic closure by registrar",
        category: "governance",
        severity: "important",
        clueInStem: "probably dementia with behavioural issues",
        whyItMatters: "The registrar is closing diagnostically without addressing acute delirium and safeguarding evidence.",
        modelWording: "The registrar's 'dementia with behavioural issues' formulation is premature and unsafe.",
        keywords: ["probably dementia", "behavioural issues", "premature", "diagnostic closure", "unsafe formulation"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4"],
      secondary: ["s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `I would not support discharge. Grace has fever, new urinary incontinence and drowsiness, which suggest delirium or acute medical illness. She is also a vulnerable older person found wandering on a highway, and the proposed neighbour-carer is implicated by Grace's statement that he "steals my pension."

Remote supervision must be active. I would direct the registrar to escalate medical assessment urgently, consider transfer/retrieval advice, safeguard Grace from discharge to the neighbour, and document a clear consultant-led plan. No local beds and a six-hour transfer are rural system pressures, not reasons for unsafe discharge.`,
  },
  {
    id: "SUP-010",
    topic: "supervision",
    difficulty: "consultant",
    title: "Registrar Provides Poor Feedback to Intern",
    candidateRole: "Consultant psychiatrist supervising clinical teaching culture",
    setting: "Consultation-liaison teaching ward",
    stem: `You are the consultant psychiatrist on a consultation-liaison term. An intern approaches you after ward round and says your registrar told her, in front of the medical team, "Your presentation was useless; you clearly don't understand psychiatry." The intern is upset and says she is now reluctant to refer patients to psychiatry because "I don't want to be humiliated again."

You observed that the intern's presentation was disorganised and did omit key points about capacity and delirium. However, the registrar did not give specific feedback or invite questions. Later, the medical consultant says psychiatry often seems "elitist and unhelpful." The registrar says, "I was under pressure; they need to learn standards."`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Humiliating feedback harms learning culture",
        category: "governance",
        severity: "critical",
        clueInStem: "Your presentation was useless; you clearly don't understand psychiatry",
        whyItMatters: "Public humiliation is not effective feedback and damages psychological safety.",
        relatedSystem: "Poor teaching culture affects referrals and patient care.",
        modelWording: "The registrar's comment was humiliating and not educational; it requires corrective supervision.",
        keywords: ["useless", "humiliated", "feedback", "psychological safety", "teaching", "public"],
      },
      {
        id: "s2",
        name: "Patient safety impact through reduced referrals",
        category: "system_pressure",
        severity: "important",
        clueInStem: "reluctant to refer patients to psychiatry",
        whyItMatters: "Poor interprofessional behaviour may reduce appropriate psychiatry referrals and harm patient care.",
        relatedSystem: "CL psychiatry depends on trust and accessibility.",
        modelWording: "The intern becoming reluctant to refer is a patient-safety and systems issue, not just hurt feelings.",
        keywords: ["reluctant to refer", "referrals", "patient safety", "CL", "interprofessional", "trust"],
      },
      {
        id: "s3",
        name: "Need to separate content standard from feedback method",
        category: "governance",
        severity: "important",
        clueInStem: "presentation was disorganised and did omit key points about capacity and delirium",
        whyItMatters: "The intern did need teaching, but feedback must be specific, respectful and behaviour-based.",
        modelWording: "The correct supervision point is to teach capacity and delirium gaps using specific behaviour-based feedback.",
        keywords: ["disorganised", "capacity", "delirium", "specific feedback", "standards", "behaviour"],
      },
      {
        id: "s4",
        name: "Registrar fails to give actionable feedback",
        category: "governance",
        severity: "important",
        clueInStem: "did not give specific feedback or invite questions",
        whyItMatters: "Feedback without specificity does not improve performance and may impair learning.",
        modelWording: "The registrar should have named the missing capacity and delirium elements and invited clarification.",
        keywords: ["specific feedback", "invite questions", "actionable", "learning", "clarification"],
      },
      {
        id: "s5",
        name: "Psychiatry's reputation with medical team damaged",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "psychiatry often seems \"elitist and unhelpful\"",
        whyItMatters: "CL psychiatry requires collaborative credibility with medical teams.",
        relatedSystem: "Poor cross-specialty relationships affect access to consultation.",
        modelWording: "The medical consultant's comment shows a broader MDT relationship problem requiring repair.",
        keywords: ["elitist", "unhelpful", "medical consultant", "MDT", "relationship", "reputation"],
      },
      {
        id: "s6",
        name: "Pressure does not justify poor supervision behaviour",
        category: "ethics",
        severity: "optional",
        clueInStem: "I was under pressure",
        whyItMatters: "Workload pressure is relevant but does not justify humiliating communication.",
        modelWording: "Pressure may explain but does not excuse humiliating feedback.",
        keywords: ["under pressure", "does not justify", "excuse", "professionalism", "communication"],
      },
    ],
    priorityOrder: {
      urgent: ["s1"],
      secondary: ["s2", "s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `The registrar's feedback was unacceptable. "Your presentation was useless" is humiliating and not educational. It has already created a patient-safety issue because the intern is now reluctant to refer to psychiatry.

I would support the intern, acknowledge the harm, and repair the relationship with the medical team. With the registrar, I would separate standards from method: the intern did miss capacity and delirium points, but feedback must be specific, respectful and behaviour-based. The registrar should learn to say, for example, "Next time, structure the referral around diagnosis, delirium screen, capacity question and immediate risk." Pressure explains context but does not justify humiliation.`,
  },
];
import { QuizStem } from "../quizData";

export const ED_STEMS: QuizStem[] = [];
import { QuizStem } from "../quizData";

export const PER_STEMS: QuizStem[] = [];
import { QuizStem } from "../quizData";

export const CAP_STEMS: QuizStem[] = [];
import { QuizStem } from "../quizData";

export const GOV_STEMS: QuizStem[] = [];
import { QuizStem } from "../quizData";

export const RISK_STEMS: QuizStem[] = [];
import { QuizStem } from "../quizData";

export const MDT_STEMS: QuizStem[] = [];
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

// ─── STEMS ───────────────────────────────────────────────────────────────────

const ORIGINAL_STEMS: QuizStem[] = [
  // ─── 1. CULTURAL SAFETY / CL ─────────────────────────────────────────────
  {
    id: "q1",
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
    modelAnswer: `Immediate safety concern: Amara's weight of 38 kg with severe malnutrition and dehydration represents an immediate risk to life — cardiac arrhythmia and multi-organ failure must be considered.

Inadequate interpretation: The use of a 16-year-old daughter as sole interpreter for three days is a critical systems failure. No valid clinical assessment, let alone a capacity assessment, can be completed without a NAATI-accredited professional interpreter. This must be arranged immediately.

Capacity assessment procedurally invalid: I cannot complete a legally defensible capacity assessment in the current circumstances. Once a professional interpreter is present, I will assess capacity across four domains: understanding, retaining, weighing/using information, and communicating a decision.

Involuntary nasogastric feeding: This requires legal authority. If Amara lacks capacity, substitute decision-making under Guardianship legislation applies. If she retains capacity, her refusal is legally binding. A Tribunal or Supreme Court order may be required for involuntary feeding if no guardian is available.

Differential diagnosis: Refusal of oral intake must be differentiated — religious/cultural fasting practice, complicated grief, major depression with psychomotor retardation, PTSD with dissociation, or somatic expression of distress must all be considered.

Trauma-informed assessment: Marked distress in response to male staff must prompt immediate consideration of gender-based violence during displacement. A trauma-informed, female-led assessment should occur.

Complicated grief: The traumatic death of her husband during the boat crossing eighteen months ago, compounded by displacement and resettlement stress, raises significant concern for complicated grief disorder and PTSD.

Systems failures requiring urgent action: Social work has not been involved — refugee health services, STARTTS equivalent, and community support must be mobilised. Fatima's wellbeing as a young interpreter must be considered.`,
  },

  // ─── 2. ED / RISK ─────────────────────────────────────────────────────────
  {
    id: "q2",
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
    modelAnswer: `Immediate safety: This is a high-lethality attempt — near-total consumption of 60 oxycodone tablets, requiring immediate containment. Daniel cannot be safely discharged.

Ongoing suicidal intent: Active searching for 'opioid lethal dose' during the current presentation indicates persistent intent — this significantly elevates imminent risk beyond the baseline.

Preparatory behaviour: Giving away his guitar constitutes a recognised warning sign of planned suicide — this act in the two weeks prior suggests premeditation, not impulsivity.

Mental Health Act: Given the near-lethal attempt, ongoing intent, and refusal to engage with assessment, Mental Health Act criteria for involuntary assessment are almost certainly met and should be initiated.

Precipitant — occupational loss: Dismissal from his role as a paramedic following an internal complaint represents a significant precipitant. Paramedics have elevated suicide rates; occupational identity and humiliation are key drivers.

Occupational risk factors: Paramedic training confers knowledge of lethal doses, increasing the sophistication of any future attempt. Vicarious trauma and PTSD must be considered in the formulation.

History of self-harm: The previous forearm laceration and intoxication presentations establish a pattern of risk behaviours.

AHPRA: As a registered health professional, mandatory reporting obligations must be considered once the acute risk is managed.

Collateral: The flatmate is the primary source of history given Daniel's refusal to engage — this source must be fully utilised.`,
  },

  // ─── 3. PERINATAL ────────────────────────────────────────────────────────
  {
    id: "q3",
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
    modelAnswer: `Postpartum psychosis — psychiatric emergency: Day 4 postpartum, three days without sleep, Capgras-type delusion about the infant, disorganised speech, and paranoid ideation constitute a full syndrome of postpartum psychosis — a psychiatric emergency.

Infanticide risk: Priya's statement that she does not trust her hands is a direct expression of concern about infant harm — this must be taken literally, not metaphorically. The infant's immediate safety must be secured.

Capgras delusion: The belief that her baby has been replaced is not a metaphor — this delusional misidentification is a specific high-risk feature for infanticide.

Maternal suicide: The approximately 5% maternal suicide risk in postpartum psychosis requires direct assessment.

Urgent inpatient admission: Priya requires urgent admission to a specialist mother-baby unit — this allows treatment while preserving the infant relationship under supervision. If unavailable, adult inpatient admission with structured supervised infant contact.

Child protection notification: Priya's specific statement about harming the infant meets the threshold for child protection notification in most jurisdictions.

Family: Rajan's minimisation requires urgent psychoeducation — this is not normal postnatal fatigue. The mother-in-law's account of a similar family episode is diagnostically significant.

Sleep: Pharmacological sleep induction is an immediate treatment priority.`,
  },

  // ─── 4. GOVERNANCE ───────────────────────────────────────────────────────
  {
    id: "q4",
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
    modelAnswer: `Immediate patient safety: The ten-fold haloperidol dose error is a serious clinical incident requiring immediate incident reporting. Dr Voss cannot continue in unsupervised clinical roles pending investigation.

Impaired practitioner: Alcohol odour on two occasions during clinical duties constitutes an impaired practitioner situation — this takes priority over all other considerations.

Medication diversion: Undocumented medication room access in the context of suspected impairment must prompt consideration of diversion. This requires urgent investigation.

Mandatory AHPRA notification: The combination of alcohol odour, a serious medication error, and undocumented medication room access almost certainly triggers a mandatory notification for impairment under the National Law. Dr Voss's request for confidentiality cannot override this obligation.

Escalation: This must be escalated immediately to the medical director and clinical director — it is beyond the scope of a supervisory relationship.

Dr Voss's wellbeing: She is experiencing a significant acute loss. She requires her own mental health referral, separate from the performance and safety process. These two tracks must run in parallel.

Documentation: Every observed incident must be documented contemporaneously with dates, times, and witnesses.`,
  },

  // ─── 5. OLD AGE ──────────────────────────────────────────────────────────
  {
    id: "q5",
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
    modelAnswer: `Elder financial abuse: The transfer of $180,000 to a nephew by a cognitively impaired man, during a three-week visit by that nephew, is highly suspicious for elder financial abuse and must be reported to adult safeguarding services.

Driving — immediate risk: George is currently driving with an MMSE of 19 — this is a public safety issue requiring mandatory reporting to the licensing authority and immediate cessation of driving.

Capacity for financial decisions: George likely lacked capacity for the financial transfer — this must be documented and referred for legal review, including examination of any Enduring Power of Attorney.

Margaret as co-victim: Margaret is also potentially a victim of financial abuse — the depletion of joint savings affects her security. She requires independent assessment and support.

Falls and physical safety: Two recent falls require formal fall risk assessment, medication review, and OT home safety assessment.

Medication safety: Unsorted medications accessible in a cognitively impaired person's home require urgent pharmacist review and dose administration aids.

Environmental neglect: Unkempt home and out-of-date food indicate inadequate self-care — urgent community support assessment (ACAT) should be arranged.

Two mandatory reporting obligations: Adult safeguarding for suspected financial abuse, and the licensing authority for unsafe driving.`,
  },

  // ─── 6. FORENSIC / RISK ──────────────────────────────────────────────────
  {
    id: "q6",
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
    modelAnswer: `Imminent violence risk: This is a high-risk clinical situation. Nathan's behaviour — 50 contacts, workplace surveillance, and a written implicit threat — constitutes stalking. The note 'This will not stand' is an implicit threat in the context of jealousy, prior intimate partner violence, and recent antipsychotic cessation.

Morbid jealousy: The content of the note suggests delusional or overvalued jealousy — Othello syndrome — which carries a specific and high risk of severe violence, including homicide.

Previous intimate partner violence: The assault eight years ago is the single most important historical predictor of future violence and significantly elevates this risk assessment.

Depot cessation: Stopping his depot two weeks ago in the context of this escalating behaviour is a critical clinical event — psychotic decompensation may directly drive violence escalation.

Duty to protect/warn: I have a duty to consider Lisa's safety — coordination with police and potentially direct notification is appropriate and does not constitute a breach of confidentiality where there is imminent serious risk.

Intervention Order: The IO alone does not constitute adequate risk management — clinical assessment of Nathan's compliance and intent is essential.

MHA consideration: If Nathan refuses to recommence his depot, Mental Health Act criteria for involuntary treatment may be met on the basis of risk to others.

Structured risk assessment: A formal risk assessment tool (e.g. HCR-20) should be applied.`,
  },

  // ─── 7. CHILD & ADOLESCENT ───────────────────────────────────────────────
  {
    id: "q7",
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
    modelAnswer: `Complex developmental trauma: Tyler's behaviour is a trauma and attachment-based crisis response, not a conduct disorder. Chronic neglect, domestic violence exposure, parental loss, and nine placement changes constitute profound developmental adversity.

Precipitant: The direct trigger is the notification of another placement change — this is an attachment rupture response, not random aggression.

Safeguarding: Unexplained bruising on the forearm requires immediate safeguarding assessment and likely a mandatory child protection notification.

Risk assessment: Tyler's threat to hurt himself requires direct, developmentally appropriate assessment including suicidal ideation in the context of cumulative trauma and placement hopelessness.

Cultural safety: As an Aboriginal child in out-of-home care with no family or community connection, the Aboriginal Child Placement Principle has likely not been applied — cultural identity disconnection is a significant mental health risk.

Polypharmacy: Three psychotropic medications of uncertain indication, commenced across multiple placements without records, require urgent medication reconciliation and therapeutic target review.

Systemic failures: The inexperienced casual carer, unavailable records, and state guardianship issues must all be escalated — a holistic system response is required, not just a psychiatric label.

Consent: As Tyler is in state care, the statutory guardian must provide consent for assessment and treatment.`,
  },

  // ─── 8. CAPACITY / MHA — CTO ─────────────────────────────────────────────
  {
    id: "q8",
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
    modelAnswer: `Least restrictive principle: After 18 months of adherence, stability, no admissions, and no violence to persons, there is a strong prima facie case for CTO discontinuation. Compulsion must be the least restrictive option available.

Marcus's autonomy: He is demonstrating insight and voluntary agreement to continue medication — the ethical and legal basis for compulsion is substantially weakened. His right to self-determination is central to this decision.

EPSE: Stiffness and fatigue on paliperidone depot are legitimate side effects requiring formal EPSE assessment (AIMS), dose review, and possible dose reduction or adjunct treatment — not dismissal.

Functional recovery: Part-time employment, family reconnection, and community group participation are meaningful indicators of sustained wellness supporting CTO discontinuation.

Relapse risk: The nature of the original episode must be reviewed — precipitants, severity, and prodromal features inform the individual relapse risk calculation.

Mother's contact: Her anxiety is understandable and requires psychoeducation, but her separate contact cannot override Marcus's clinical and legal rights. Family engagement should be offered, not imposed.

Advance care plan: Before the CTO lapses, a documented advance care plan — agreed early warning signs, relapse prevention strategies, and escalation pathway — should be co-developed with Marcus.`,
  },

  // ─── 9. CL PSYCHIATRY ────────────────────────────────────────────────────
  {
    id: "q9",
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
    modelAnswer: `Capacity assessment: I will conduct a formal four-domain capacity assessment — understanding, retaining, weighing, and communicating. A decision that appears unwise does not constitute incapacity.

Right to refuse: If Sandra retains capacity, her refusal of methylprednisolone is legally binding — even if this results in permanent disability. This must be respected.

Grief as precipitant: The death of her best friend with the same MS diagnosis is a profound existential loss — it is very likely shaping catastrophic and hopeless thinking about her own illness trajectory.

Major depressive episode: Crying at night, refusing meals, and social withdrawal in the context of a significant precipitant are consistent with a major depressive episode requiring treatment in its own right.

Depression impairing capacity: If hopelessness is impairing her ability to weigh long-term consequences, her depression may be affecting her capacity. Treating the depression may restore it — this is clinically important.

MS-depression comorbidity: Depression occurs in up to 50% of MS patients, both as disease-related and psychologically driven. New lesions and interferon-beta use both contribute.

Interferon-beta: This is associated with depression and must be reviewed with the neurology team.

Husband: He is both a key collateral informant and a distressed carer requiring his own acknowledgement and support.`,
  },

  // ─── 10. SUBSTANCE USE ───────────────────────────────────────────────────
  {
    id: "q10",
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
        name: "Benzodiazepine use in pregnancy — fetal risk",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "10 weeks pregnant; positive benzodiazepine UDS; three weeks of illicit diazepam",
        whyItMatters: "Benzodiazepine use in the first trimester carries teratogenic risk — fetal safety is an immediate concern requiring urgent obstetric referral",
        modelWording: "Illicit benzodiazepine use at 10 weeks gestation is a fetal risk — first trimester teratogenicity, neonatal abstinence syndrome risk, and interaction with methadone must be addressed with urgent obstetric referral",
        keywords: ["benzodiazepine", "pregnancy", "fetal", "teratogenic", "first trimester", "diazepam", "obstetric", "neonatal", "unborn"],
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
    modelAnswer: `Fetal safety — benzodiazepine use: Illicit diazepam at 10 weeks gestation is a first-trimester fetal risk requiring immediate obstetric referral and urgent cessation with medical supervision.

Methadone in pregnancy: Methadone pharmacokinetics change substantially across pregnancy — OST should continue (stopping is more dangerous), but dosing requires specialist obstetric and perinatal drug and alcohol coordination.

Neonatal abstinence syndrome: Planning for NAS with the neonatal team is essential — NICU readiness, monitoring protocol, and parenting support must be arranged antenatally.

Child protection notification: A previous CP order, ongoing illicit benzodiazepine use in pregnancy, and a partner with daily alcohol use meets the threshold for notification regarding the unborn child.

Delayed disclosure: Leanne's 10-week delay in disclosing the pregnancy reflects fear of punitive response — this must be directly addressed to maintain the therapeutic alliance.

Partner's alcohol use: Daily alcohol use by Dean requires assessment for domestic violence risk and parenting capacity.

Anxiety: Self-medicating anxiety with illicit benzodiazepines indicates an untreated anxiety disorder requiring safe, evidence-based management.

Leanne's motivation: Her expressed desire to parent this child is a genuine and powerful motivator — explicitly acknowledge and use this therapeutically.

MDT: A perinatal case conference with obstetrics, perinatal drug and alcohol, social work, and neonatology is required — this is not a single-clinician case.`,
  },

  // ─── 11. RISK ASSESSMENT ────────────────────────────────────────────────────
  {
    id: "q11",
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
    modelAnswer: `Immediate safety: Marcus's explicit denial of suicidal ideation cannot be accepted at face value. The contextual risk profile — three simultaneous major losses, three days of isolation, unaccounted lethal medication, covert alcohol use, and high public shame — constitutes a high-risk presentation requiring direct consultant assessment.

Means restriction: The whereabouts of 100 temazepam tablets must be established immediately. This is non-negotiable. If they cannot be located, urgent safety measures including voluntary or involuntary admission must be considered.

Risk formulation: This is not a "low risk" presentation. The combination of acute psychosocial collapse (marital, occupational, parental losses), male sex, age 41, no previous psychiatric contact, means access, isolation, and denied ideation in a shame-prone, high-functioning person is a recognised pattern for high-lethality suicide attempts.

Supervision issue: The registrar's telephone request for discharge authorisation based on a screening tool score is not an acceptable risk management process. I will attend in person.

Assessment: Full mental state examination, collateral from wife and/or neighbour, direct exploration of suicidal cognition, ideation, plan, intent, and rehearsal behaviour.`,
  },

  // ─── 12. QUALITY & SAFETY REVIEW ─────────────────────────────────────────
  {
    id: "q12",
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
    modelAnswer: `Open disclosure: My first priority is Kevin's wife. A senior clinician must contact her today — with sincere condolences, an honest account of what happened on Friday, and a clear explanation of the review that will occur.

Mandatory reporting: I must notify hospital executive and the patient safety team immediately. This death is likely reportable to the coroner as a death of a person recently discharged from a psychiatric facility.

Incident preservation: The medical record must be locked and preserved. No alterations are permissible.

Documentation failure: The discharge note does not meet clinical or medico-legal standards. A single-line risk assessment with no safety plan, no family contact, no GP notification, and no consultant review is inadequate.

Nursing escalation: The junior nurse's concern about flat affect and early discharge is clinically significant and must be formally documented as part of the incident. A flat affect post-serious attempt is a known risk indicator.

Staff support: A structured critical incident debriefing must be organised for the Friday shift team. Staff must not be discouraged from raising concerns in the review process.

Root cause analysis: A formal RCA is required to address systemic failures: after-hours discharge policy, consultant notification obligations, supervision arrangements, and discharge checklist compliance.`,
  },

  // ─── 13. QUALITY & SAFETY ────────────────────────────────────────────────
  {
    id: "q13",
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
    modelAnswer: `Immediate: I must respond to Jarrah's mother today — honestly, with senior representation, and with cultural support if she requests it.

Governance breach: Seclusion without consultant authorisation is a clinical governance breach. I must notify the hospital executive, patient safety team, and the mental health commission (jurisdiction-dependent). The seclusion register must be preserved.

Cultural safety failure: The absence of any Aboriginal Liaison Officer involvement in a seclusion episode involving an Aboriginal man is a specific cultural safety breach. This must be named in the incident report and the review.

Documentation: The absence of clinical monitoring entries during four hours of seclusion is a serious safety and medico-legal failure. Post-seclusion review was not completed.

Jarrah: I will approach Jarrah directly — with cultural support — to acknowledge what happened, apologise for the failure of care, and ask what he needs to remain in hospital safely. His request to leave must be taken seriously and weighed against his ongoing clinical need under the MHA.

Formal review: A mandatory critical incident report must be submitted. A formal review (RCA or clinical review) should examine: registrar supervision, seclusion policy awareness, Aboriginal Liaison availability after hours, and documentation standards.`,
  },

  // ─── 14. SUPERVISION & FEEDBACK ─────────────────────────────────────────
  {
    id: "q14",
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
    modelAnswer: `Patient safety first: Callum is not ready for discharge. Four overdoses in three years is a high-risk recurrence pattern. The registrar has not reviewed prior admissions, has no collateral, has no safety plan, and no community follow-up.

Corrective supervision: I will not simply override Dr Sharma. I will use this as a direct teaching session: walk through the missing elements, explain why each matters clinically and legally, and require her to redo the assessment with my guidance.

Bed pressure: I will speak directly to the NUM and document clearly that Callum's ongoing admission is a clinical safety decision. Administrative pressure cannot override clinical judgment.

Required before discharge: (1) Review of all prior admissions; (2) Collateral from mother; (3) Written safety plan co-developed with Callum; (4) Community MH follow-up within 48 hours; (5) GP letter.

Documentation: My decision to not discharge must be documented, with clinical reasoning, in the medical record.`,
  },

  // ─── 15. SUPERVISION ───────────────────────────────────────────────────────
  {
    id: "q15",
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
    modelAnswer: `Immediate intervention: I will interrupt the presentation respectfully. I will acknowledge David's daughter directly, pause the meeting, and acknowledge that the language used has been harmful.

Cultural safety breach: The terms "non-compliant," "chaotic lifestyle," "dysfunctional family," and "doesn't engage" reflect a deficit-based framing that is inconsistent with culturally safe care and pathologises Aboriginal family systems and help-seeking behaviour in a context of historical service inaccessibility.

David's daughter: I will speak to her after the meeting, acknowledge the harm, and offer an apology on behalf of the clinical team.

Aboriginal staff: I will follow up with both Aboriginal staff members to acknowledge their experience and ensure a safe debrief is available.

Dr Nguyen (private feedback): I will meet with him privately to provide specific, educational, non-punitive feedback. His unawareness does not reduce the harm but informs the pedagogical response.

Team reflection: At the next team meeting, I will raise the issue of team norms — not as punishment but as an opportunity to reflect on our collective responsibility to cultural safety.`,
  },

  // ─── 16. DOCUMENTATION & COMMUNICATION ─────────────────────────────────
  {
    id: "q16",
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
    modelAnswer: `Documentation inadequacy: Dr Wu's note is not a legally defensible capacity assessment. It documents no four-domain assessment, no information given, no confirmation of understanding, and no exploration of cultural values.

Immediate action: Discharge to palliative care must be paused. I will conduct a full capacity assessment today, with explicit documentation of all four domains, information provided and confirmed understood, consequences of refusal, and consistency with the patient's values.

Cultural sensitivity: Mrs Papageorgiou's Greek background must be explored — not to challenge her decision, but to ensure it is genuinely her own and consistent with her values. An interpreter offer should be documented.

If capacity confirmed: Her decision is legally binding. I will document this clearly. The note must also confirm that family awareness has been addressed.

Teaching: I will meet with Dr Wu to review the standard for capacity documentation — particularly for life-sustaining treatment refusals, where the stakes and legal exposure are highest.`,
  },

  // ─── 17. DOCUMENTATION ───────────────────────────────────────────────────
  {
    id: "q17",
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
    modelAnswer: `Immediate: Reza must be reviewed today — I will arrange urgent community mental health contact or direct review given the report of deterioration five days post-discharge in a first-episode psychosis.

Discharge summary: The letter issued to Dr Adeyemi is clinically inadequate. I take responsibility for this. I will send a comprehensive addendum today with: confirmed working diagnosis, medication and dose, relapse indicators, safety plan, case manager contact, outpatient appointment details, and emergency escalation pathway.

GP communication: I will call Dr Adeyemi back with the above information, acknowledge the failure, and apologise. She should not have had to call to obtain basic clinical information about a patient recently discharged from our unit.

Systems issues: After-hours discharge summaries for complex psychiatric cases must be reviewed by a consultant. I will raise this at the next governance meeting.

Medication adherence: The wife's concern about medication must be urgently addressed in Reza's review today — depot or adherence support may need to be considered.`,
  },

  // ─── 18. DISCHARGE / REPORT REVIEW ───────────────────────────────────────
  {
    id: "q18",
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
    modelAnswer: `Hold: I will not co-sign this discharge summary as written. I will return it to Dr Tan with a list of required additions.

Missing: (1) Full forensic history including NGMI and conditional discharge; (2) Substance use history; (3) Full risk formulation with static, dynamic, and protective factors; (4) Relapse prevention plan; (5) Notification to and involvement of Wayne's mother; (6) Specific follow-up appointments and forensic community team contact.

Public safety: Wayne's mother is the identified target of his prior violence. Her notification is a public safety obligation, not just a courtesy.

Teaching: I will use this as a direct supervision session with Dr Tan — explaining what a forensic discharge summary must include and why.

Systems: After this review, I will discuss with the registrar group the minimum standards for forensic discharge documentation.`,
  },

  // ─── 19. DISCHARGE / REPORT REVIEW ────────────────────────────────────────
  {
    id: "q19",
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
    modelAnswer: `Hold: I will not co-sign this summary. I will return it to the registrar with a list of required additions before release.

Child safety: Lily must be named and a child safety assessment documented — including parenting capacity observations during admission, infant attachment, and a specific plan for Lily's safety in the community.

Breastfeeding: The olanzapine/breastfeeding decision must be explicitly documented — the discussion, the risks, and Aisha's informed decision.

Relapse prevention: A perinatal-specific relapse prevention plan must be written — early warning signs, crisis escalation, contingency if she deteriorates at home, and guidance for any future pregnancy.

Social isolation: The discharge plan must explicitly address Aisha's home support. Who will be present in the first weeks? What is the plan if she is alone with Lily and deteriorating?

Follow-up: I will change the follow-up to 48-72 hours with the community perinatal team and within one week for outpatient review — not four weeks.`,
  },

  // ─── 20. MDT CONFLICT & SYSTEMS PRESSURE ─────────────────────────────────
  {
    id: "q20",
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
    modelAnswer: `Direct assessment: I will attend in person. I will not give telephone clearance for a patient with six presentations including four overdoses and a serious attempt eight weeks ago.

Clinical framing: I will acknowledge Dr Walsh's concerns. However, the clinical decision regarding Tyra's safety is mine to make and I will make it after direct assessment.

Risk formulation: Prior suicide attempts are the strongest predictor of completed suicide. Tyra's pattern of high-frequency presentations increases, not decreases, my level of concern. Habituation bias in high-frequency presenters is a recognised cause of preventable deaths.

Personality disorder: The previous clinician's notation does not reduce risk or change the clinical obligation to assess.

System gap: Tyra has had six presentations without community mental health linkage. Regardless of tonight's disposition decision, I will ensure a referral for case management occurs before she leaves this ED.

Documentation: I will document my decision and the basis for it, including the request for telephone clearance and my refusal.`,
  },

  // ─── 21. MDT CONFLICT ─────────────────────────────────────────────────────
  {
    id: "q21",
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
    modelAnswer: `Clinical authority: I acknowledge the Code Yellow and will actively work to facilitate safe discharges. I will not, however, discharge any patient who is clinically unsafe. Bed pressure is not a clinical reason for discharge.

Greg: Not safe to discharge today. He is one week post-serious overdose with no safety plan and no follow-up. Before discharge: written safety plan, 48-hour community follow-up, family contact, and GP letter.

Nasrin: Not safe to discharge. She is thought-disordered with limited insight and two young children at home. With her husband away for five days, discharge now creates a child safety risk. I will request a formal child safety consultation.

William: Not safe to discharge mid-ECT. His wife has explicitly said she cannot manage him at home. Premature discharge of a patient mid-ECT course for psychotic depression is clinically unjustifiable.

Escalation: I will document my decisions for all three patients with clinical reasoning. If this escalates to the Medical Director, I will engage — my decisions are transparent and defensible.

Collaboration: I will work with the team to expedite safe discharges for any patients who are clinically ready.`,
  },

  // ─── 22. RURAL & RESOURCE-LIMITED ────────────────────────────────────────
  {
    id: "q22",
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
    modelAnswer: `Immediate: Harry is not to be discharged tonight. The farewell letter and loaded firearm confirm suicidal planning with lethal means. His current minimisation under significant alcohol intoxication is clinically unreliable.

Means: Police have secured the identified firearm. I will ask the ED registrar to ask Harry's wife — with Harry's consent or as collateral — about additional firearms, agricultural chemicals, and other means access on the farm.

Transfer: I will advise the ED registrar to contact RFDS immediately for psychiatric transfer to the metropolitan inpatient unit. The four-hour wait is not a reason to delay this process. Distance cannot lower the clinical standard.

Wife: Harry's wife must be brought into the consultation. She is the primary collateral source and the person who found the letter. She must be included in safety planning and given information about what happens next.

Reassessment: When Harry is sober — likely in the morning — a formal risk assessment must occur. Tonight's minimisation cannot be used to make a disposition decision.

ED registrar: I will give her clear, directive guidance and remain available. She should not bear this clinical responsibility alone.`,
  },

  // ─── 23. RURAL ─────────────────────────────────────────────────────────────
  {
    id: "q23",
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
    modelAnswer: `Emergency: Rosa is acutely psychotic, not eating or sleeping, and wandering on roads at night. This is a psychiatric emergency. I will advise the nurse to activate RFDS immediately — I will be available to speak to the RFDS medical officer to confirm.

Family: I will ask the nurse to take time — even 20 minutes — to sit with the family before RFDS arrival. The statement "if you take her away she might never come back" must be heard. It reflects legitimate historical experience and must be addressed directly — with a plan for Rosa's community return built into the transfer process.

Cultural safety: The Aboriginal Health Worker must be involved immediately. The traditional healer's involvement should not be excluded — if the family can arrange contact, this can proceed alongside, not instead of, medical emergency care.

Medication: I will ask if the RFDS can carry an emergency antipsychotic dose. This gap in the community health formulary must be escalated.

Family exhaustion: The family cannot safely supervise Rosa indefinitely. The nurse should assess their capacity to maintain observation safely until RFDS arrives and document this.

Advocacy: After this episode, I will raise the absence of antipsychotic medication in this community with the regional health service.`,
  },

  // ─── 24. PSYCHOTHERAPY & BOUNDARIES ──────────────────────────────────────
  {
    id: "q24",
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
    modelAnswer: `Boundary violation: Ben's self-disclosure in response to an erotic transference declaration is a boundary violation. It was not clinically neutral and I must name this directly — supportively, not punitively — in supervision today.

Undocumented sessions: Four sessions without documentation in this context is a serious professional concern. I must explore why they were not documented and the sessions must be retrospectively documented to the degree possible.

Annalise's safety: My immediate clinical concern is Annalise. She is vulnerable — BPD, childhood sexual abuse, erotic transference. Ben cannot continue as her therapist. A planned transfer of care must be organised with a senior clinician. She must not be abandoned.

Ben's wellbeing: I will approach Ben supportively first — he appears to be in distress and has been carrying this alone. However, professional obligations must be clearly named.

AHPRA: I must consult my medical defence organisation about mandatory reporting obligations. A boundary violation by a supervised trainee involves my professional obligations as the supervisor.

Documentation: I will document this supervision session in detail.`,
  },

  // ─── 25. PSYCHOTHERAPY ────────────────────────────────────────────────────
  {
    id: "q25",
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
    modelAnswer: `Mandatory reporting: I must report to child protective services. The description of a 12-year-old girl making repeated visits to the home of a known child sexual abuser meets the threshold of reasonable suspicion of a child at risk. This is a non-negotiable obligation that cannot be set aside by therapeutic confidentiality.

Transparency with Jade: I will tell Jade honestly what I am obligated to do, why, and how I will do it. I will not deceive her or allow her to believe I won't report. I will acknowledge how frightening this is and how much courage it took to tell me.

Therapeutic relationship: Jade's threat to leave therapy is a trauma response — the anticipation that disclosure leads to loss. I will name this compassionately, explain the limits of confidentiality, and make clear that I want to continue working with her.

Jade's safety: Her uncle has been contacting her for six months. Before she leaves today, we will develop a safety plan for her own protection.

Session end: Jade must not leave without a safety plan and a confirmed next appointment.`,
  },

  // ─── 26. ETHICS & PROFESSIONALISM ────────────────────────────────────────
  {
    id: "q26",
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
    modelAnswer: `Capacity assessment: I will conduct a formal four-domain capacity assessment. The referral framing ("cannot understand why") suggests the team may be conflating an unwanted decision with impaired capacity — these are distinct.

Finding: Arthur's decision appears capacitous. He demonstrates understanding, retention, weighing of information against his explicit values, and clear communication. His decision has been consistent over three months and is grounded in the specific, lived experience of his wife's death.

Depression: I will assess for major depressive disorder with nihilistic features — this is a legitimate clinical concern. However, grief and adjustment sadness do not constitute depression, and depression does not automatically invalidate capacity. If depressive illness is identified and treatment effective, reassessment of capacity is appropriate.

If capacity confirmed: Arthur's refusal of BMT is legally and ethically binding. My role shifts to supporting him in exercising his autonomous choice, ensuring palliative care is optimised, and ensuring the clinical team understands this.

Daughter: I will speak with her separately — with compassion. Her wish for her father to live does not override his legal right to refuse treatment.

Team: I will communicate capacity findings clearly in writing, including an explanation of the distinction between an unwanted decision and impaired capacity.`,
  },

  // ─── 27. ETHICS ─────────────────────────────────────────────────────────────
  {
    id: "q27",
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
    modelAnswer: `Immediate: This is a credible, specific threat to a named, identifiable individual. Named target, identified location, described timing, and declared intent — this is not an ambiguous communication.

Therapeutic engagement: I will explore the threat fully, compassionately, in session. I will acknowledge the injustice Daniel feels. I will directly ask about the plan — what he intends to use, when, and how firm his intention is. I will attempt therapeutic de-escalation.

Confidentiality: Daniel believes doctor-patient confidentiality prevents me from acting. I must be honest with him: medical confidentiality is not absolute. A specific, credible threat to a named person overrides this obligation. I will explain this to him directly — not as a threat, but as an honest account of my professional obligations.

Mental state: Daniel's euthymia does not reduce the risk assessment. Organised, premeditated violence in a euthymic state is potentially more dangerous than impulsive violence in acute psychosis.

Protective action: If de-escalation in session does not convincingly resolve the threat, I will contact police and consider whether Martin should be warned. I will document my reasoning fully and consult my medical defence organisation.

Therapeutic relationship: I will tell Daniel what I intend to do before I do it. This is the ethically appropriate course and maintains the integrity of our relationship.`,
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
