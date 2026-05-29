import { QuizStem } from "../quizData";

export const DIS_STEMS: QuizStem[] = [
  {
    id: "DIS-001",
    questionNumber: "MEQ-085",
    topic: "discharge_review",
    difficulty: "consultant",
    title: "Forensic Discharge Summary — Do Not Co-Sign",
    candidateRole: "Consultant forensic psychiatrist",
    setting: "Forensic inpatient unit — co-sign review queue",
    stem: `You are the consultant forensic psychiatrist. A discharge summary is in your co-sign queue from Dr Michael Tan, a first-year registrar, for Wayne, a 44-year-old man being discharged after a 12-week admission. Wayne has schizophrenia, cannabis and methamphetamine use, a history of violence towards his mother when unwell, and a prior not guilty by reason of mental illness (NGMI) finding for assault six years ago.

The four-paragraph summary documents: diagnosis (schizophrenia), medication (olanzapine 20mg), and one line: "risk: reduced during admission." It does not mention the NGMI finding, forensic history, substance use, or violence history. There is no risk formulation and no relapse prevention plan. Follow-up reads: "Wayne — please call to arrange follow-up." Wayne's mother has not been notified. No forensic community support or housing is mentioned.

Outline what you would do and why. A list without justification will not be awarded marks.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Do not co-sign — summary is clinically and legally inadequate",
        category: "governance",
        severity: "critical",
        clueInStem: "A discharge summary has been placed in your co-sign queue",
        whyItMatters: "Co-signing this summary transfers consultant accountability to a document that could directly contribute to harm. A co-signed letter is taken as consultant approval — this summary cannot be approved as written.",
        modelWording: "I will not co-sign this discharge summary. I will return it to Dr Tan with a specific list of required additions before it is released.",
        keywords: ["not co-sign", "will not sign", "return", "required changes", "reject", "hold", "inadequate", "before release"],
      },
      {
        id: "s2",
        name: "Forensic history absent — NGMI essential inclusion",
        category: "governance",
        severity: "critical",
        clueInStem: "It does not mention the NGMI finding, forensic history",
        whyItMatters: "Any clinician receiving a discharge letter for a forensic patient must know the forensic history to calibrate risk. The NGMI finding and forensic supervision history are essential — their absence means the receiving clinician manages Wayne without critical legal and clinical context.",
        modelWording: "The NGMI finding and conditional forensic discharge history are essential inclusions. Their absence means the receiving clinician cannot manage Wayne's risk appropriately.",
        keywords: ["forensic history", "NGMI", "not guilty by reason", "conditional discharge", "absent", "essential", "must include"],
      },
      {
        id: "s3",
        name: "Risk reduced is not a risk formulation",
        category: "governance",
        severity: "critical",
        clueInStem: "risk: reduced during admission",
        whyItMatters: "'Risk reduced during admission' describes controlled inpatient behaviour — not community risk. A proper formulation addresses static factors, dynamic factors including substance use, and protective factors in the specific community context.",
        modelWording: "A risk formulation for a forensic patient must address static, dynamic, and protective factors in the community environment. 'Risk reduced during admission' is not a community risk formulation.",
        keywords: ["risk formulation", "static", "dynamic", "protective", "not a formulation", "community risk", "formulation absent"],
      },
      {
        id: "s4",
        name: "Mother not notified — identified victim, public safety obligation",
        category: "family_carer",
        severity: "critical",
        clueInStem: "history of violence towards his mother. Wayne's mother has not been notified",
        whyItMatters: "Wayne's mother is both the identified victim of his prior violence and potentially his primary carer. Failing to notify her of his discharge is both a clinical and public safety failure.",
        modelWording: "Wayne's mother is the identified victim of his prior violence. She must be notified of his discharge and offered involvement in the safety and relapse prevention plan.",
        keywords: ["mother", "notify", "victim", "at risk", "public safety", "prior violence", "must notify", "family"],
      },
      {
        id: "s5",
        name: "Patient-initiated follow-up is not a plan",
        category: "disposition",
        severity: "critical",
        clueInStem: "Wayne — please call to arrange follow-up",
        whyItMatters: "For a forensic patient with schizophrenia and a violence history, leaving follow-up to patient initiative is not a plan. Confirmed outpatient appointments, community forensic team contact, and assertive follow-up are mandatory.",
        modelWording: "Leaving follow-up contingent on Wayne calling is not acceptable for a forensic patient. Confirmed appointments, community forensic team contact, and assertive follow-up dates must be in place before discharge.",
        keywords: ["follow-up", "assertive", "confirmed", "not a plan", "forensic community", "patient initiated", "inadequate"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4", "s5"],
      secondary: [],
      lowYield: [],
    },
    modelAnswer: `I will not co-sign this summary. I will return it to Dr Tan with required additions before release.

Missing: Full forensic history including NGMI finding; complete substance use history; proper risk formulation with static, dynamic, and protective community factors; relapse prevention plan; confirmed follow-up appointments and forensic community team contact; notification to and involvement of Wayne's mother.

Teaching: I will supervise Dr Tan in rewriting this — explaining why forensic discharge documentation has a higher standard and what the consequences are if it fails.`,
  },

  {
    id: "DIS-002",
    questionNumber: "MEQ-086",
    topic: "discharge_review",
    difficulty: "consultant",
    title: "Perinatal Discharge Summary — Missing Infant Safety and Relapse Planning",
    candidateRole: "Consultant perinatal psychiatrist",
    setting: "Mother-baby unit — co-sign review queue",
    stem: `A discharge summary for Aisha, a 29-year-old woman, is awaiting your co-signature. Aisha was admitted to the mother-baby unit six weeks ago following a postpartum psychotic episode — her first psychiatric presentation — three weeks after the birth of her daughter Lily. She responded well to olanzapine and is being discharged home with her baby.

The discharge summary reads: "Aisha's mental state has significantly improved. She is currently euthymic with good insight. She is bonding appropriately with Lily. Diagnosis: brief psychotic episode. Plan: continue olanzapine 10mg. Follow up with perinatal outpatient clinic in 4 weeks. GP to monitor."

The summary does not name Lily or include a child safety assessment. There is no documentation of parenting capacity observations during admission. Breastfeeding and olanzapine compatibility is not addressed. There is no relapse prevention plan specific to the perinatal context. There is no mention of what to do if Aisha deteriorates at home.

You note from the referral documentation that Aisha arrived in Australia from Somalia three years ago, has no extended family in Australia, and her husband works long hours and was not involved in the admission.

Outline the problems with this summary and what must happen before discharge. A list without justification will not be awarded marks.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Lily not named — child safety assessment absent",
        category: "child_protection",
        severity: "critical",
        clueInStem: "The summary does not name Lily or include a child safety assessment",
        whyItMatters: "Any discharge from a mother-baby unit requires explicit documentation of the infant's safety assessment. Lily is a vulnerable third party — the discharge letter must name her, document parenting capacity observations during admission, assess infant attachment, and specify a child safeguarding plan if concerns exist.",
        modelWording: "Lily must be named in the discharge documentation and a child safety assessment must be explicitly documented. This must include observed parenting capacity during the six-week admission, infant attachment quality, and a specific plan for Lily's safety in the community.",
        keywords: ["lily", "child safety", "infant", "named", "parenting capacity", "safeguarding", "child assessment", "infant safety", "not named", "baby"],
      },
      {
        id: "s2",
        name: "Postpartum psychosis relapse risk — no perinatal relapse prevention plan",
        category: "risk_self",
        severity: "critical",
        clueInStem: "postpartum psychotic episode — her first psychiatric presentation",
        whyItMatters: "Postpartum psychosis carries a 50% recurrence risk in subsequent pregnancies and significant relapse risk in the months following the current episode. A perinatal-specific relapse prevention plan — covering early warning signs, crisis escalation, contingency if she deteriorates at home alone with Lily, and guidance for any future pregnancy — is essential.",
        modelWording: "Aisha has had postpartum psychosis. The discharge plan must include a perinatal-specific relapse prevention plan: early warning signs agreed with Aisha and her husband, a crisis escalation pathway, what to do if she deteriorates when alone with Lily, and explicit guidance for any future pregnancy.",
        keywords: ["relapse prevention", "postpartum", "perinatal", "early warning", "recurrence", "future pregnancy", "contingency", "crisis plan", "relapse plan", "50 percent"],
      },
      {
        id: "s3",
        name: "Olanzapine and breastfeeding not addressed",
        category: "physical_health",
        severity: "critical",
        clueInStem: "continue olanzapine 10mg",
        whyItMatters: "The safety of olanzapine in breastfeeding must be explicitly addressed in the discharge plan. Whether Aisha is breastfeeding or formula feeding, the decision, the risks, infant monitoring requirements, and Aisha's informed consent must be documented. Prescribing olanzapine without addressing breastfeeding compatibility is a clinical documentation failure.",
        modelWording: "The discharge summary prescribes olanzapine 10mg without addressing breastfeeding. The risk-benefit discussion about olanzapine and breastfeeding, Aisha's informed decision, and any infant monitoring requirements must be explicitly documented before discharge.",
        keywords: ["breastfeeding", "olanzapine", "breast milk", "lactation", "infant exposure", "breastfeed", "medication safety", "risk benefit", "informed decision"],
      },
      {
        id: "s4",
        name: "Social isolation — Somali background, no family, husband not involved",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "arrived in Australia from Somalia three years ago, has no extended family in Australia, and her husband works long hours and was not involved in the admission",
        whyItMatters: "Aisha is being discharged into profound social isolation — no Australian family network, a husband who was absent throughout the admission, and a newborn. The highest-risk period after postpartum psychosis discharge is when a mother is alone with her infant. The discharge plan must explicitly address who will be present, what support is available, and what happens if she deteriorates alone with Lily.",
        modelWording: "Aisha is being discharged with no Australian family, a husband who was absent throughout admission, and a newborn infant. The discharge plan must explicitly state who will be present at home, what community supports are in place, and what the plan is if she deteriorates when alone with Lily.",
        keywords: ["social isolation", "no family", "husband", "alone", "support", "somali", "cultural", "community support", "who will be present", "isolated"],
      },
      {
        id: "s5",
        name: "Four-week follow-up is too long — post-psychosis discharge standard",
        category: "disposition",
        severity: "important",
        clueInStem: "Follow up with perinatal outpatient clinic in 4 weeks",
        whyItMatters: "The highest-risk period after discharge from postpartum psychosis is the first one to two weeks. Community perinatal team contact within 48-72 hours and a clinical review within one week is the standard of care — four weeks is clinically unsafe for this presentation.",
        modelWording: "Four-week follow-up is clinically insufficient for postpartum psychosis discharge. Community perinatal team contact within 48-72 hours and a clinical review within one week is the standard of care — I will change this before the summary is released.",
        keywords: ["four weeks", "too long", "48 hours", "72 hours", "one week", "community", "perinatal", "follow-up", "insufficient", "highest risk period"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4"],
      secondary: ["s5"],
      lowYield: [],
    },
    modelAnswer: `I will not co-sign this summary. I will return it to the registrar with required additions before discharge proceeds.

Child safety: Lily must be named and a child safety assessment documented — including parenting capacity observations from the six-week admission, infant attachment quality, and a specific community safety plan for Lily.

Breastfeeding: The olanzapine and breastfeeding decision must be explicitly documented — the risk-benefit discussion, Aisha's informed decision, and any infant monitoring plan.

Relapse prevention: A perinatal-specific relapse prevention plan must be written covering: agreed early warning signs, crisis escalation pathway, what to do if she deteriorates at home with Lily, and guidance for any future pregnancy. Postpartum psychosis carries a 50% recurrence risk in subsequent pregnancies.

Social isolation: The discharge plan must explicitly address Aisha's home situation. No Australian family, absent husband, and a newborn infant — who will be present? What community supports are arranged? What is the plan if she deteriorates alone with Lily?

Follow-up: Four weeks is clinically unsafe. Community perinatal team contact within 48-72 hours and clinical review within one week is the minimum standard after postpartum psychosis discharge. I will change this before the summary is released.`,
  },

  {
    id: "DIS-003",
    questionNumber: "MEQ-087",
    topic: "discharge_review",
    difficulty: "consultant",
    title: "Registrar Discharging High-Risk Patient Without Safety Plan",
    candidateRole: "Consultant psychiatrist supervising inpatient registrar",
    setting: "Acute inpatient psychiatric unit — Tuesday afternoon supervision",
    stem: `You are conducting your weekly supervision session with Dr Priya Sharma, a second-year advanced trainee. She presents a case for discharge planning: Callum, a 29-year-old man admitted three weeks ago following an overdose of 40 paracetamol tablets. He has recurrent major depressive disorder and borderline personality disorder.

Dr Sharma presents a risk assessment of "low to moderate." She tells you: "He's engaged in sessions, his mood is improved, he denies SI, and he wants to go home." She has not contacted Callum's mother, who brought him in and is his emergency contact. She has not developed a written safety plan. She has not arranged community follow-up. She has not reviewed his previous inpatient presentations.

You note from the system that Callum has had four prior admissions in three years, each following a paracetamol overdose. Dr Sharma is also telling you that there is pressure from the NUM because the ward is full and a bed is urgently needed.

Outline how you would respond to this situation. A list without justification will not be awarded marks.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Risk formulation is inadequate — prior admissions not reviewed",
        category: "risk_self",
        severity: "critical",
        clueInStem: "four prior admissions in three years, each following a paracetamol overdose — not reviewed by registrar",
        whyItMatters: "Four paracetamol overdoses in three years is a high-risk recurrence pattern — previous self-harm is the strongest single predictor of completed suicide. A discharge risk assessment that does not review prior admissions is clinically indefensible. This is not a low-to-moderate risk presentation.",
        modelWording: "Dr Sharma has not reviewed Callum's admission history. Four paracetamol overdoses in three years is a high-risk recurrence pattern that must be central to any discharge risk formulation — this is not a low-to-moderate risk presentation and I will not authorise discharge on this basis.",
        keywords: ["prior admissions", "four", "overdose", "not reviewed", "recurrence", "history", "strongest predictor", "high risk", "previous self-harm"],
      },
      {
        id: "s2",
        name: "No collateral — mother not contacted",
        category: "collateral",
        severity: "critical",
        clueInStem: "Has not contacted Callum's mother, who brought him in and is his emergency contact",
        whyItMatters: "Callum's mother brought him in, is his nominated emergency contact, and is likely his primary support at home. Discharge planning without family collateral in a patient with BPD and recurrent suicidality is a clinical failure — the home environment he is returning to is unknown.",
        modelWording: "Callum's mother brought him in and is his emergency contact. She has not been contacted. Family collateral is essential before discharge — both to assess the home environment and to involve his primary support in the safety plan.",
        keywords: ["mother", "collateral", "family", "not contacted", "emergency contact", "brought him in", "home environment", "primary support"],
      },
      {
        id: "s3",
        name: "No written safety plan — mandatory for BPD and recurrent suicidality",
        category: "risk_self",
        severity: "critical",
        clueInStem: "She has not developed a written safety plan",
        whyItMatters: "A written collaborative safety plan is a minimum standard of care for discharge in a patient with BPD and four prior overdoses. It must include coping strategies, means restriction, crisis contacts, the role of family, and follow-up arrangements. Its absence is a specific discharge planning failure.",
        modelWording: "A written safety plan co-developed with Callum, reviewed with his mother, and linked to community services is a non-negotiable discharge component for a patient with BPD and four prior paracetamol overdoses. This has not been completed.",
        keywords: ["safety plan", "written", "collaborative", "discharge plan", "BPD", "safety planning", "means restriction", "crisis contacts"],
      },
      {
        id: "s4",
        name: "Bed pressure cannot drive discharge decision",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "pressure from the NUM because the ward is full and a bed is urgently needed",
        whyItMatters: "Discharge of a high-risk patient driven by bed pressure rather than clinical readiness is a governance failure. The consultant must not yield to administrative pressure on safety-critical decisions — and must document clearly that the decision is clinical.",
        modelWording: "Bed pressure does not constitute a clinical reason for discharge. I will speak directly to the NUM and document clearly that Callum's continued admission is a clinical safety decision. Administrative pressure cannot override clinical judgement in a patient with four prior overdoses.",
        keywords: ["bed pressure", "NUM", "administrative", "pressure", "not a reason", "clinical decision", "cannot override", "system pressure", "beds"],
      },
      {
        id: "s5",
        name: "Supervision obligation — teach the formulation, do not just override",
        category: "governance",
        severity: "important",
        clueInStem: "weekly supervision session with Dr Priya Sharma, a second-year advanced trainee",
        whyItMatters: "The supervisor's role is not to simply override the registrar's plan but to teach the reasoning behind a defensible discharge risk assessment. Dr Sharma needs to understand why each missing element matters — this is a direct teaching moment.",
        modelWording: "I will not simply override Dr Sharma's plan. I will use this supervision session to walk through what a defensible discharge risk assessment requires — prior admission review, collateral, written safety plan, community follow-up — and why each element matters for this specific patient.",
        keywords: ["teach", "supervision", "not just override", "registrar", "explain", "why", "formulation", "educate", "walk through"],
      },
      {
        id: "s6",
        name: "Community follow-up not arranged — post-discharge contact essential",
        category: "disposition",
        severity: "important",
        clueInStem: "She has not arranged community follow-up",
        whyItMatters: "Post-discharge follow-up within 48-72 hours is an evidence-based suicide prevention intervention. Its absence in a patient with recurrent suicidality and BPD is a specific gap that must be rectified before discharge.",
        modelWording: "Community follow-up must be confirmed before discharge — an appointment within 48-72 hours with a community mental health clinician or outpatient psychiatry is the minimum standard for this presentation.",
        keywords: ["community follow-up", "48 hours", "72 hours", "outpatient", "appointment", "after discharge", "follow-up", "confirmed"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4"],
      secondary: ["s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `Callum is not ready for discharge. Four paracetamol overdoses in three years is a high-risk recurrence pattern — the registrar has not reviewed prior admissions, has no collateral, no safety plan, and no community follow-up.

I will not simply override Dr Sharma. I will use this as a direct teaching session: walk through why each missing element matters clinically and legally, and require her to redo the assessment with my guidance.

Bed pressure: I will speak to the NUM directly and document clearly that Callum's continued admission is a clinical safety decision. Administrative pressure cannot override clinical judgement.

What must happen before discharge: (1) Review of all four prior admissions; (2) Collateral from Callum's mother; (3) Written safety plan co-developed with Callum including means restriction and crisis contacts; (4) Confirmed community follow-up within 48 hours; (5) GP letter.

Documentation: My decision not to discharge must be documented with clinical reasoning in the medical record.`,
  },
];
