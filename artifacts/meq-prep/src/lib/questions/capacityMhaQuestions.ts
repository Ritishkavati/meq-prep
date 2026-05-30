import type { QuizStem } from "../quizData";

export const CAP_STEMS: QuizStem[] = [
  {
    id: "CAP-001",
    questionNumber: "MEQ-038",
    topic: "capacity_mha",
    difficulty: "consultant",
    title: "Elderly patient refusing dialysis",
    candidateRole: "Consultant psychiatrist, consultation-liaison service",
    setting: "Renal ward in a tertiary hospital",
    stem: `You are the consultant psychiatrist asked to urgently review Mr Howard, an 81-year-old man with vascular dementia, chronic kidney disease and recurrent delirium, admitted with fluid overload and hyperkalaemia. The renal team recommends urgent dialysis, but Mr Howard is refusing and repeatedly pulling at his cannula.

Mr Howard says, "The dialysis machine is a punishment device and you are trying to drain me dry." He cannot explain what potassium is or what may happen without dialysis. At times he recognises his daughter but later asks why his deceased wife has not visited.

His daughter holds enduring power of attorney and says, "Dad always said he never wanted machines keeping him alive." His son disagrees and says, "You have to do everything or I'll complain." The renal consultant says dialysis is needed tonight, but the ward team is unsure whether to proceed against Mr Howard's objection.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Dialysis refusal is shaped by confused persecutory beliefs",
        category: "capacity",
        severity: "critical",
        clueInStem: "Mr Howard says, \"The dialysis machine is a punishment device and you are trying to drain me dry.\"",
        whyItMatters: "Missing this signal means the candidate has treated a refusal based on confused persecutory beliefs as a capacitous dialysis decision.",
        modelWording: "Assess decision-specific capacity to refuse dialysis by testing whether Mr Howard can understand, retain, appreciate and weigh the immediate medical risks despite these beliefs.",
        keywords: ["decision-specific capacity", "dialysis refusal", "appreciation", "weighing information", "vascular dementia", "delirium"],
      },
      {
        id: "s2",
        name: "Hyperkalaemia creates immediate life-threatening risk",
        category: "physical_health",
        severity: "critical",
        clueInStem: "You are the consultant psychiatrist asked to urgently review Mr Howard, an 81-year-old man with vascular dementia, chronic kidney disease and recurrent delirium, admitted with fluid overload and hyperkalaemia.",
        whyItMatters: "Missing this signal means the candidate has allowed a family or capacity debate to delay treatment for a potentially fatal renal emergency.",
        modelWording: "Clarify the renal urgency immediately, because hyperkalaemia and fluid overload may require emergency treatment if Mr Howard lacks capacity.",
        keywords: ["hyperkalaemia", "urgent dialysis", "medical emergency", "renal failure", "emergency treatment", "life-threatening risk"],
      },
      {
        id: "s3",
        name: "Daughter's EPOA and prior wishes require contextual interpretation",
        category: "family_carer",
        severity: "important",
        clueInStem: "His daughter holds enduring power of attorney and says, \"Dad always said he never wanted machines keeping him alive.\"",
        whyItMatters: "Missing this signal means the candidate has either ignored prior values or applied them too broadly without distinguishing chronic life support from potentially reversible emergency dialysis.",
        modelWording: "Clarify the daughter's legal authority and explore Mr Howard's prior wishes in context, because substitute decisions must reflect the current treatment question and urgency.",
        keywords: ["enduring power of attorney", "substitute decision-maker", "prior wishes", "advance care planning", "family conflict"],
      },
      {
        id: "s4",
        name: "Fluctuating cognition suggests delirium superimposed on dementia",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "At times he recognises his daughter but later asks why his deceased wife has not visited.",
        whyItMatters: "Missing this signal means the candidate has overlooked delirium-related fluctuation that may temporarily impair capacity and drive behavioural disturbance.",
        modelWording: "Assess for delirium superimposed on dementia because fluctuating recognition and misidentification may be driving the refusal.",
        keywords: ["delirium", "fluctuating cognition", "dementia", "orientation", "medical precipitants", "capacity fluctuation"],
      },
      {
        id: "s5",
        name: "Coercive treatment must be least restrictive and proportionate",
        category: "ethics",
        severity: "important",
        clueInStem: "The renal consultant says dialysis is needed tonight, but the ward team is unsure whether to proceed against Mr Howard's objection.",
        whyItMatters: "Missing this signal means the candidate has not addressed the ethical risk of restraint or sedation when delivering urgent treatment against objection.",
        modelWording: "Use the least restrictive effective approach to urgent dialysis, because treatment against objection must remain necessary, proportionate, monitored and dignified.",
        keywords: ["least restrictive", "restraint", "sedation", "proportionality", "dignity", "urgent care"],
      },
      {
        id: "s6",
        name: "Family complaint pressure requires defensible documentation",
        category: "governance",
        severity: "optional",
        clueInStem: "His son disagrees and says, \"You have to do everything or I'll complain.\"",
        whyItMatters: "Missing this signal means the candidate may let complaint anxiety rather than capacity, urgency and law drive the decision.",
        modelWording: "Document capacity findings, medical urgency, family discussions and legal rationale because family conflict increases the need for transparent defensible reasoning.",
        keywords: ["documentation", "legal basis", "complaint risk", "family disagreement", "defensible decision", "capacity record"],
      },
      {
        id: "s7",
        name: "Cannula-pulling shows immediate treatment-delivery risk",
        category: "immediate_safety",
        severity: "important",
        clueInStem: "The renal team recommends urgent dialysis, but Mr Howard is refusing and repeatedly pulling at his cannula.",
        whyItMatters: "Missing this signal means the candidate has not recognised that behavioural disturbance may prevent urgent renal treatment from being delivered safely.",
        modelWording: "Address the cannula-pulling as an immediate safety issue by using reassurance, familiar support and proportional containment before considering restraint.",
        keywords: ["cannula", "pulling", "behavioural disturbance", "treatment delivery", "containment", "safety", "urgent dialysis"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5", "s7"],
      lowYield: ["s6"],
    },
    modelAnswer: `Mr Howard's refusal of dialysis cannot be treated as a simple autonomous refusal. His statement that "The dialysis machine is a punishment device and you are trying to drain me dry" suggests that the refusal is being shaped by confused persecutory beliefs about the nature and purpose of treatment. He also cannot explain what potassium is or what may happen without dialysis, so I would assess decision-specific capacity to refuse dialysis, focusing on understanding, retention, appreciation and weighing of the immediate risk.

The medical urgency is central. Mr Howard has chronic kidney disease, fluid overload and hyperkalaemia, and the renal consultant says dialysis is needed tonight. I would clarify the degree of urgency, the risk of arrhythmia or death if dialysis is delayed, whether temporising measures are possible, and whether there is enough time to improve cognition before treatment. Capacity assessment in this setting cannot be separated from the seriousness and immediacy of the medical consequences.

I would also assess for delirium superimposed on dementia. The stem says that at times he recognises his daughter but later asks why his deceased wife has not visited, which is a clear fluctuating cognitive picture in a medically unwell older man. If delirium is contributing, reversible causes should be treated, but if dialysis is needed tonight the team cannot simply wait for perfect cognition before acting.

The daughter's role and Mr Howard's prior wishes need careful interpretation. She holds enduring power of attorney and says he never wanted machines keeping him alive. That may be highly relevant, but I would clarify whether he was referring to long-term burdensome life support in an end-of-life context or to potentially reversible emergency dialysis for acute deterioration. The son's statement, "You have to do everything or I'll complain," creates pressure but does not alter the clinical or legal test.

The practical issue is that Mr Howard is repeatedly pulling at his cannula and may not tolerate urgent treatment without some form of containment. I would first use simple explanation, calm nursing, pain control, family presence if helpful, familiar staff and a low-stimulation environment. If he lacks capacity and urgent dialysis is necessary to prevent serious harm, treatment should proceed only under the appropriate emergency or substitute decision framework, using the least restrictive, most dignified and proportionate method.

My documentation would set out the capacity findings, the renal urgency, the delirium features, the EPOA discussion, the son's disagreement, the legal basis for proceeding or not proceeding, and the least restrictive measures attempted. The aim is to respect capacitous refusal if present, but if capacity is absent and the risk is imminent, to act lawfully to prevent avoidable death while still honouring Mr Howard's dignity and previously expressed values as far as possible.`,
  },
  {
    id: "CAP-002",
    questionNumber: "MEQ-039",
    topic: "capacity_mha",
    difficulty: "consultant",
    title: "Adolescent refusing admission after overdose",
    candidateRole: "Consultant psychiatrist, child and adolescent consultation-liaison service",
    setting: "Regional emergency department",
    stem: `You are supervising a Stage 2 registrar assessing Leila, a 16-year-old boarding school student brought to ED after ingesting an uncertain quantity of fluoxetine and paracetamol. She initially denied overdose but later told nursing staff, "I took enough to sleep and maybe not wake up."

Leila refuses blood tests, NAC treatment and mental health admission. She says, "I understand my liver could fail, but that is my choice." She becomes angry when staff contact her aunt and says, "No one has the right to lock me up." Her teacher has returned to the boarding school, and her aunt says Leila is "dramatic but clever" and should be discharged if she promises to be safe.

The ED consultant is concerned because the timing of ingestion is unclear. The registrar asks whether Leila is Gillick competent because she is articulate and can repeat the medical risks.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Repeating medical risk does not establish adolescent capacity",
        category: "capacity",
        severity: "critical",
        clueInStem: "She says, \"I understand my liver could fail, but that is my choice.\"",
        whyItMatters: "Missing this signal means the candidate has mistaken factual repetition for the ability to appreciate and weigh life-threatening risk during a suicidal crisis.",
        modelWording: "Assess Gillick competence by testing appreciation and weighing, because an articulate adolescent may repeat risk without being able to make a stable capacitous refusal.",
        keywords: ["Gillick competence", "adolescent capacity", "weighing information", "suicidal crisis", "treatment refusal"],
      },
      {
        id: "s2",
        name: "Unclear paracetamol timing creates urgent toxicology risk",
        category: "physical_health",
        severity: "critical",
        clueInStem: "The ED consultant is concerned because the timing of ingestion is unclear.",
        whyItMatters: "Missing this signal means the candidate has delayed time-critical overdose treatment despite the risk of preventable hepatic failure.",
        modelWording: "Prioritise urgent toxicology assessment, blood tests and NAC where indicated because uncertain paracetamol timing can become life-threatening.",
        keywords: ["paracetamol overdose", "NAC", "toxicology", "hepatic failure", "uncertain timing", "medical stabilisation"],
      },
      {
        id: "s3",
        name: "Ambivalent suicidal intent and initial concealment increase risk",
        category: "risk_self",
        severity: "important",
        clueInStem: "She initially denied overdose but later told nursing staff, \"I took enough to sleep and maybe not wake up.\"",
        whyItMatters: "Missing this signal means the candidate has relied on an unstable account despite concealment and ambivalent intent after overdose.",
        modelWording: "Formulate risk from concealment, uncertain overdose quantity and the wish to maybe not wake up because these make self-report and safety promises unreliable.",
        keywords: ["suicidal intent", "ambivalence", "concealment", "overdose risk", "unreliable history", "acute risk"],
      },
      {
        id: "s4",
        name: "Legal pathway may be needed for treatment refusal by a minor",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "She becomes angry when staff contact her aunt and says, \"No one has the right to lock me up.\"",
        whyItMatters: "Missing this signal means the candidate has not identified lawful authority for life-saving treatment if Leila lacks competence or remains at serious risk.",
        modelWording: "Consider minor consent, emergency treatment and Mental Health Act pathways because refusal after overdose may require lawful least-restrictive protection.",
        keywords: ["Mental Health Act", "minor consent", "emergency treatment", "involuntary assessment", "legal framework"],
      },
      {
        id: "s5",
        name: "Aunt's minimising collateral is not a safety plan",
        category: "collateral",
        severity: "important",
        clueInStem: "Her teacher has returned to the boarding school, and her aunt says Leila is \"dramatic but clever\" and should be discharged if she promises to be safe.",
        whyItMatters: "Missing this signal means the candidate has allowed minimising collateral to justify discharge without objective medical and suicide-risk assessment.",
        modelWording: "Seek broader collateral from school, family and GP while giving limited weight to minimising comments that dismiss the overdose as drama.",
        keywords: ["collateral", "family minimisation", "school", "GP", "discharge risk", "boarding school"],
      },
      {
        id: "s6",
        name: "Promise of safety cannot justify discharge",
        category: "disposition",
        severity: "optional",
        clueInStem: "Her teacher has returned to the boarding school, and her aunt says Leila is \"dramatic but clever\" and should be discharged if she promises to be safe.",
        whyItMatters: "Missing this signal means the candidate has substituted a promise of safety for medical clearance, supervision and a risk formulation.",
        modelWording: "Do not rely on a promise of safety because disposition requires medical clearance, supervision, means restriction and urgent CAMHS follow-up or admission.",
        keywords: ["promise of safety", "safe discharge", "supervision", "follow-up", "risk formulation"],
      },
      {
        id: "s7",
        name: "Boarding school context leaves unclear immediate supervision",
        category: "family_carer",
        severity: "important",
        clueInStem: "Her teacher has returned to the boarding school, and her aunt says Leila is \"dramatic but clever\" and should be discharged if she promises to be safe.",
        whyItMatters: "Missing this signal means the candidate has considered discharge without identifying who can safely supervise a boarding student after overdose tonight.",
        modelWording: "Clarify who can provide safe adult supervision tonight because the teacher has left and the aunt is minimising the seriousness of the overdose.",
        keywords: ["boarding school", "teacher", "aunt", "supervision", "safe adult", "discharge", "adolescent"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5", "s7"],
      lowYield: ["s6"],
    },
    modelAnswer: `Leila's presentation should be managed as a medically dangerous overdose with an unreliable refusal, not as a simple question of whether an articulate 16-year-old can repeat information. Her statement, "I understand my liver could fail, but that is my choice," shows factual awareness, but capacity and Gillick competence require appreciation and weighing. I would assess whether she can understand that hepatic failure applies personally to her, weigh survival against the wish to maybe not wake up, and make a stable decision not driven by acute suicidal crisis.

The medical risk is urgent because the timing of ingestion is unclear and the quantity of fluoxetine and paracetamol is uncertain. Delayed blood tests or delayed NAC may result in preventable hepatic failure. I would advise the ED team to proceed with toxicology assessment, paracetamol level, relevant bloods, NAC where indicated, safe observation and prevention of absconding while the psychiatric and legal assessments occur in parallel.

The suicide-risk formulation is concerning. Leila initially denied overdose but later said, "I took enough to sleep and maybe not wake up." That is ambivalent suicidal intent after concealment, and it makes both self-report and a safety promise unreliable. I would assess triggers, mood, hopelessness, shame, bullying, trauma, substance use, access to medication, prior self-harm and her ability to collaborate with safety planning.

The legal issue is to protect a minor using the least restrictive lawful pathway. Her statement that "No one has the right to lock me up" should be acknowledged because coercion can damage trust, but if she lacks competence or emergency treatment is required to prevent serious harm, the team may need to use minor consent law, emergency medical treatment powers, child protection or Mental Health Act processes depending on the jurisdiction.

Collateral and supervision are not adequate at present. The teacher has returned to the boarding school, and the aunt describes Leila as "dramatic but clever" and suggests discharge if she promises to be safe. That is minimising collateral, not a supervision plan. I would contact appropriate guardians, school supports, GP and CAMHS to clarify who can safely supervise her tonight.

I would not discharge Leila until she is medically cleared, the overdose risk is treated, a defensible suicide-risk formulation is completed, and a safe adult supervision and follow-up plan exists. If she continues to refuse life-saving treatment and lacks capacity or competence, I would support proportionate treatment under the relevant legal framework. If risk remains high or supervision cannot be established, admission is the safer disposition.`,
  },
  {
    id: "CAP-003",
    questionNumber: "MEQ-040",
    topic: "capacity_mha",
    difficulty: "consultant",
    title: "CTO renewal and least restrictive care",
    candidateRole: "Consultant psychiatrist, community treatment team",
    setting: "Urban community mental health service",
    stem: `You are the consultant psychiatrist reviewing a community treatment order renewal for Sam, a 37-year-old man with schizophrenia and past relapses associated with stopping depot antipsychotic medication. He has been stable for 18 months on a CTO, lives independently and works part-time.

Sam says, "I only take the injection because you people threaten me with hospital." He reports tiredness, sexual dysfunction and weight gain. His case manager supports renewal because "he will definitely relapse if we remove it." Sam's sister says he has been reliable with appointments and has not used cannabis for over a year.

The registrar asks whether renewal is justified because Sam still lacks insight and says he would prefer tablets. The tribunal hearing is in one week, and the team has not documented any recent attempt at a voluntary treatment plan.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "CTO renewal must satisfy the least restrictive test",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "The tribunal hearing is in one week, and the team has not documented any recent attempt at a voluntary treatment plan.",
        whyItMatters: "Missing this signal means the candidate has allowed a coercive order to continue by inertia without testing whether voluntary care is feasible.",
        modelWording: "Review whether the CTO remains the least restrictive option because the team has not documented any recent voluntary treatment attempt.",
        keywords: ["CTO renewal", "least restrictive", "voluntary treatment", "legal threshold", "tribunal", "defensibility"],
      },
      {
        id: "s2",
        name: "Perceived coercion is damaging engagement",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "Sam says, \"I only take the injection because you people threaten me with hospital.\"",
        whyItMatters: "Missing this signal means the candidate has ignored the harm to autonomy and alliance caused by treatment experienced as threat-based.",
        modelWording: "Explore Sam's experience of coercion directly because a legally authorised CTO can still damage engagement and voluntary consent.",
        keywords: ["coercion", "treatment alliance", "consent", "autonomy", "collaborative care", "depot"],
      },
      {
        id: "s3",
        name: "Relapse history remains relevant but not decisive",
        category: "risk_self",
        severity: "important",
        clueInStem: "You are the consultant psychiatrist reviewing a community treatment order renewal for Sam, a 37-year-old man with schizophrenia and past relapses associated with stopping depot antipsychotic medication.",
        whyItMatters: "Missing this signal means the candidate has either dismissed genuine relapse risk or treated historical relapse as sufficient reason for indefinite coercion.",
        modelWording: "Balance past depot-related relapse against current stability and supports because historical risk must be weighed with present functioning.",
        keywords: ["relapse history", "medication non-adherence", "current stability", "risk formulation", "supports"],
      },
      {
        id: "s4",
        name: "Medication adverse effects require active management",
        category: "physical_health",
        severity: "important",
        clueInStem: "He reports tiredness, sexual dysfunction and weight gain.",
        whyItMatters: "Missing this signal means the candidate has imposed adherence without addressing adverse effects that may be driving refusal and physical health risk.",
        modelWording: "Address side effects with dose review, metabolic monitoring and medication options because tolerability affects both autonomy and adherence.",
        keywords: ["side effects", "weight gain", "sexual dysfunction", "metabolic risk", "adherence", "shared decision-making"],
      },
      {
        id: "s5",
        name: "Sister's collateral supports possible step-down",
        category: "collateral",
        severity: "important",
        clueInStem: "Sam's sister says he has been reliable with appointments and has not used cannabis for over a year.",
        whyItMatters: "Missing this signal means the candidate has ignored current protective factors that may support a less restrictive treatment plan.",
        modelWording: "Use the sister's collateral to test voluntary care feasibility because appointment reliability and cannabis abstinence reduce some relapse risks.",
        keywords: ["collateral", "sister", "appointment adherence", "cannabis abstinence", "step-down", "community supports"],
      },
      {
        id: "s6",
        name: "Team certainty may reflect risk aversion rather than evidence",
        category: "mdt_conflict",
        severity: "optional",
        clueInStem: "His case manager supports renewal because \"he will definitely relapse if we remove it.\"",
        whyItMatters: "Missing this signal means the candidate has accepted overconfident team prediction instead of requiring evidence-based legal reasoning.",
        modelWording: "Challenge the team's certainty by asking for evidence of relapse severity, current supports and why voluntary care would fail now.",
        keywords: ["risk aversion", "team inertia", "evidence", "coercion", "clinical justification", "MDT"],
      },
      {
        id: "s7",
        name: "Preference for tablets should be tested as a voluntary alternative",
        category: "consent_refusal",
        severity: "important",
        clueInStem: "The registrar asks whether renewal is justified because Sam still lacks insight and says he would prefer tablets.",
        whyItMatters: "Missing this signal means the candidate has treated poor insight as overriding a potentially workable less restrictive medication preference.",
        modelWording: "Explore a supervised tablet plan because Sam's preference may provide a negotiated pathway toward voluntary treatment if risk can be managed.",
        keywords: ["tablets", "oral medication", "voluntary alternative", "least restrictive", "insight", "negotiated plan", "CTO"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5", "s7"],
      lowYield: ["s6"],
    },
    modelAnswer: `Sam's CTO renewal should not proceed by habit or defensive practice. He has been stable for 18 months on a CTO, lives independently and works part-time, and his sister says he has been reliable with appointments and has not used cannabis for over a year. Those facts do not prove that the CTO should end, but they make automatic renewal legally and ethically weak.

The key legal issue is the least restrictive principle. The tribunal hearing is in one week, and the team has not documented any recent attempt at a voluntary treatment plan. A CTO is coercive community treatment, so the team needs evidence that the statutory criteria remain met and that less restrictive alternatives have genuinely been considered rather than assumed to fail.

Sam's own account matters. He says, "I only take the injection because you people threaten me with hospital." I would explore that directly, not dismiss it as lack of insight. Treatment experienced as threat-based may maintain technical adherence while damaging autonomy, trust and long-term engagement.

The relapse history remains relevant because he has had past relapses associated with stopping depot antipsychotic medication. A consultant answer must not swing from coercion to naïve autonomy. I would review the severity of past relapse, time to relapse, substance use, hospitalisation, self-neglect or risk to others, and what early warning signs could be monitored if the order were not renewed.

The side effects also need active management. Tiredness, sexual dysfunction and weight gain affect quality of life, physical health and willingness to engage. I would consider metabolic review, dose adjustment, alternative antipsychotic options, sexual side-effect management and whether a trial of oral medication could be safely negotiated.

The case manager's statement that Sam will "definitely relapse" may reflect genuine concern, but it also suggests risk aversion. Sam's preference for tablets should be tested as a potential voluntary alternative rather than rejected simply because he lacks insight. My tribunal recommendation would depend on updated evidence: renewal may be justified if serious relapse risk remains unmanageable voluntarily, but it should include a plan to reduce coercion; if a less restrictive plan is feasible, I would recommend step-down with close follow-up, relapse planning, sister involvement if Sam agrees, and a rapid re-entry pathway.`,
  },
  {
    id: "CAP-004",
    questionNumber: "MEQ-041",
    topic: "capacity_mha",
    difficulty: "consultant",
    title: "Psychotic patient refusing antipsychotic treatment",
    candidateRole: "Consultant psychiatrist, acute inpatient unit",
    setting: "Locked acute psychiatric ward",
    stem: `You are the consultant psychiatrist responsible for an acute inpatient unit.

Omar is a 28-year-old man admitted involuntarily after threatening neighbours with a metal pole. He has persecutory delusions and auditory hallucinations. He refuses antipsychotic medication, saying, "The tablets are trackers that will let them control my thoughts." He accepts food and physical observations but refuses all psychiatric medication.

His father says Omar became unwell after stopping risperidone depot three months ago. The registrar asks whether Omar's refusal means he has capacity because he can clearly say "no." Nursing staff report escalating intimidation of other patients, including standing over an elderly patient and saying, "You are one of them."

The unit is full, and staff are asking whether medication can be given by force tonight.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Antipsychotic refusal is driven by persecutory delusion",
        category: "capacity",
        severity: "critical",
        clueInStem: "He refuses antipsychotic medication, saying, \"The tablets are trackers that will let them control my thoughts.\"",
        whyItMatters: "Missing this signal means the candidate has mistaken a clear verbal refusal for capacity despite delusional impairment of appreciation and reasoning.",
        modelWording: "Assess capacity to refuse antipsychotic medication by testing whether persecutory delusions prevent Omar from understanding and weighing treatment.",
        keywords: ["psychotic refusal", "persecutory delusion", "capacity", "appreciation", "reasoning", "antipsychotic"],
      },
      {
        id: "s2",
        name: "Persecutory beliefs are creating risk to other patients",
        category: "risk_others",
        severity: "critical",
        clueInStem: "Nursing staff report escalating intimidation of other patients, including standing over an elderly patient and saying, \"You are one of them.\"",
        whyItMatters: "Missing this signal means the candidate has delayed containment despite active psychosis being directed toward vulnerable inpatients.",
        modelWording: "Assess immediate risk to others and protect vulnerable patients because Omar's delusions are being applied to people on the ward.",
        keywords: ["risk to others", "threatening behaviour", "vulnerable patients", "ward safety", "containment"],
      },
      {
        id: "s3",
        name: "Involuntary status requires correct treatment authority",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "Omar is a 28-year-old man admitted involuntarily after threatening neighbours with a metal pole.",
        whyItMatters: "Missing this signal means the candidate has assumed involuntary admission automatically authorises forced medication without checking statutory requirements.",
        modelWording: "Clarify the Mental Health Act treatment authority because involuntary admission still requires lawful, necessary and proportionate treatment processes.",
        keywords: ["involuntary treatment", "Mental Health Act", "treatment authority", "least restrictive", "statutory criteria"],
      },
      {
        id: "s4",
        name: "Father's collateral links relapse to depot cessation",
        category: "collateral",
        severity: "important",
        clueInStem: "His father says Omar became unwell after stopping risperidone depot three months ago.",
        whyItMatters: "Missing this signal means the candidate has not used collateral about relapse pattern to inform treatment choice and relapse prevention.",
        modelWording: "Use the father's collateral to inform formulation and medication planning while still exploring why Omar stopped depot treatment.",
        keywords: ["collateral", "depot cessation", "relapse", "risperidone", "family information", "treatment planning"],
      },
      {
        id: "s5",
        name: "Forced medication must meet necessity and proportionality thresholds",
        category: "ethics",
        severity: "important",
        clueInStem: "The unit is full, and staff are asking whether medication can be given by force tonight.",
        whyItMatters: "Missing this signal means the candidate has allowed staff anxiety or bed pressure to drive coercive treatment without testing necessity.",
        modelWording: "Use forced medication only if legally authorised, clinically necessary and proportionate after less restrictive engagement has failed.",
        keywords: ["forced medication", "proportionality", "staff anxiety", "least restrictive", "coercion", "restraint"],
      },
      {
        id: "s6",
        name: "Full ward pressure must not drive coercion",
        category: "system_pressure",
        severity: "optional",
        clueInStem: "The unit is full, and staff are asking whether medication can be given by force tonight.",
        whyItMatters: "Missing this signal means the candidate has treated operational pressure as a clinical justification for coercive medication.",
        modelWording: "Acknowledge the full-unit pressure while grounding any medication decision in risk, legal authority and least restrictive practice.",
        keywords: ["unit full", "bed pressure", "coercion", "clinical necessity", "governance"],
      },
      {
        id: "s7",
        name: "Elderly inpatient is a vulnerable target of Omar's delusion",
        category: "risk_vulnerable",
        severity: "important",
        clueInStem: "Nursing staff report escalating intimidation of other patients, including standing over an elderly patient and saying, \"You are one of them.\"",
        whyItMatters: "Missing this signal means the candidate has not recognised the specific duty to protect a vulnerable inpatient targeted by Omar's persecutory beliefs.",
        modelWording: "Protect the elderly patient immediately by separating patients, increasing observation and documenting a ward safety plan because the risk has a specific vulnerable target.",
        keywords: ["elderly patient", "vulnerable", "standing over", "ward safety", "separation", "observation", "targeted"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5", "s7"],
      lowYield: ["s6"],
    },
    modelAnswer: `Omar's refusal of antipsychotic medication should be heard, but it should not be mistaken for capacitous refusal simply because he can clearly say "no." He refuses medication because "The tablets are trackers that will let them control my thoughts." That explanation indicates that persecutory delusions are likely impairing his appreciation of what the medication is and his ability to weigh treatment risks and benefits.

The risk to others is active and specific. Omar was admitted involuntarily after threatening neighbours with a metal pole, and nursing staff now report escalating intimidation of other patients, including standing over an elderly patient and saying, "You are one of them." His delusional threat system is being applied to vulnerable inpatients, so I would increase observation, separate him from vulnerable patients where possible, reduce stimulation and create a clear ward safety plan.

The legal authority must be clarified carefully. Omar is admitted involuntarily, but involuntary admission does not automatically mean any medication can be forced at any time. I would check the local Mental Health Act treatment authority, documentation requirements, need for second opinions or approvals, and the standards for necessity, proportionality and least restrictive practice.

The father's collateral is important because Omar became unwell after stopping risperidone depot three months ago. That supports a relapse formulation and may inform medication choice, but it does not mean the old depot should simply be restarted by force without exploring previous response, side effects, reasons for stopping, physical health and substance use.

Forced medication tonight may be justified if Omar lacks capacity, treatment is legally authorised, less restrictive approaches fail, and the risk to other patients remains serious. I would first attempt oral medication with simple explanation, choices where possible, de-escalation and avoidance of direct argument with the delusion. If IM medication or restraint becomes necessary, it must be proportionate, time-limited, properly monitored and reviewed.

The fact that the unit is full is an operational stressor, not a justification for coercion. I would tell the team that the decision will be based on Omar's psychosis, impaired capacity, treatment need and risk to vulnerable patients. My documentation would record the delusional basis of refusal, capacity reasoning, legal authority, father collateral, less restrictive attempts, rationale for any forced treatment, monitoring and review plan.`,
  },
  {
    id: "CAP-005",
    questionNumber: "MEQ-042",
    topic: "capacity_mha",
    difficulty: "consultant",
    title: "Dementia patient refusing residential care",
    candidateRole: "Consultant psychiatrist, old age psychiatry service",
    setting: "Geriatric assessment ward",
    stem: `You are the old age psychiatry consultant asked to assess Mrs Bell, a 77-year-old woman with Alzheimer's disease admitted after being found wandering at night in heavy rain. OT assessment shows she leaves the stove on, misses medications and cannot manage finances.

Mrs Bell insists on returning home and says, "I have lived there for fifty years and I am not going to a prison." She cannot recall being found by police and repeatedly asks when her husband is coming, although he died six years ago. Her daughter wants residential care, but her son says, "She has a right to make bad decisions."

The geriatrician believes discharge home alone is unsafe. Social work says guardianship may be required, but the family wants a decision today because the residential care bed may be lost.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Accommodation capacity is impaired by poor recall and appreciation",
        category: "capacity",
        severity: "critical",
        clueInStem: "She cannot recall being found by police and repeatedly asks when her husband is coming, although he died six years ago.",
        whyItMatters: "Missing this signal means the candidate has accepted a wish to go home without testing whether Mrs Bell can retain and appreciate recent serious risks.",
        modelWording: "Assess accommodation capacity decision-specifically because poor recall of the police incident and current misorientation undermine appreciation of home risk.",
        keywords: ["accommodation capacity", "Alzheimer disease", "retention", "appreciation", "home safety", "decision-specific"],
      },
      {
        id: "s2",
        name: "Discharge home alone carries serious foreseeable harm",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "You are the old age psychiatry consultant asked to assess Mrs Bell, a 77-year-old woman with Alzheimer's disease admitted after being found wandering at night in heavy rain.",
        whyItMatters: "Missing this signal means the candidate has underestimated the vulnerability created by wandering, stove risk, missed medication and financial incapacity.",
        modelWording: "Recognise high vulnerability if discharged home alone because wandering in heavy rain, stove risk and medication omission create serious foreseeable harm.",
        keywords: ["wandering", "self-neglect", "home risk", "medication mismanagement", "vulnerability", "unsafe discharge"],
      },
      {
        id: "s3",
        name: "Guardianship may be required for accommodation authority",
        category: "governance",
        severity: "important",
        clueInStem: "Social work says guardianship may be required, but the family wants a decision today because the residential care bed may be lost.",
        whyItMatters: "Missing this signal means the candidate has considered restrictive placement without ensuring lawful authority where capacity is absent and family disagreement persists.",
        modelWording: "Consider guardianship or tribunal authority if Mrs Bell lacks accommodation capacity and no valid substitute decision-maker can authorise the placement.",
        keywords: ["guardianship", "tribunal", "substitute decision-maker", "residential care", "legal process"],
      },
      {
        id: "s4",
        name: "Unwise decision must be distinguished from incapacity",
        category: "ethics",
        severity: "important",
        clueInStem: "Her daughter wants residential care, but her son says, \"She has a right to make bad decisions.\"",
        whyItMatters: "Missing this signal means the candidate has either overridden autonomy too quickly or accepted unsafe discharge without testing capacity.",
        modelWording: "Differentiate a capacitous unwise decision from incapacity because dementia may prevent Mrs Bell from appreciating the consequences of returning home.",
        keywords: ["autonomy", "unwise decision", "incapacity", "safety", "ethical balance", "least restrictive"],
      },
      {
        id: "s5",
        name: "Residential bed pressure must not shortcut process",
        category: "system_pressure",
        severity: "important",
        clueInStem: "Social work says guardianship may be required, but the family wants a decision today because the residential care bed may be lost.",
        whyItMatters: "Missing this signal means the candidate has allowed bed availability to replace a lawful capacity and guardianship process.",
        modelWording: "Acknowledge placement pressure while completing the capacity assessment and legal steps defensibly because bed scarcity is not a lawful basis for placement.",
        keywords: ["placement pressure", "residential bed", "capacity assessment", "legal process", "defensible decision"],
      },
      {
        id: "s6",
        name: "Family disagreement requires neutral structured communication",
        category: "family_carer",
        severity: "optional",
        clueInStem: "Her daughter wants residential care, but her son says, \"She has a right to make bad decisions.\"",
        whyItMatters: "Missing this signal means the candidate has allowed sibling disagreement to distort a clinical and legal accommodation decision.",
        modelWording: "Hold a neutral family meeting to explain capacity, risk and least restrictive options without aligning with either sibling.",
        keywords: ["family disagreement", "family meeting", "communication", "disposition", "least restrictive", "neutrality"],
      },
      {
        id: "s7",
        name: "Belief that deceased husband is coming indicates impaired reality orientation",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "She cannot recall being found by police and repeatedly asks when her husband is coming, although he died six years ago.",
        whyItMatters: "Missing this signal means the candidate has not recognised that current disorientation may impair both accommodation capacity and distress management.",
        modelWording: "Assess cognitive and emotional drivers of the belief that her deceased husband is coming because it affects capacity, engagement and care planning.",
        keywords: ["deceased husband", "reality orientation", "Alzheimer", "cognition", "distress", "capacity", "care planning"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5", "s7"],
      lowYield: ["s6"],
    },
    modelAnswer: `Mrs Bell's wish to return home must be heard respectfully, but the question is whether this is a capacitous unwise decision or an incapacitous decision driven by Alzheimer's disease. Her statement, "I have lived there for fifty years and I am not going to a prison," expresses attachment to home and fear of institutional care. It does not by itself prove incapacity.

The functional evidence is serious. She was found wandering at night in heavy rain, leaves the stove on, misses medications and cannot manage finances. The geriatrician believes discharge home alone is unsafe. These are concrete risks, not vague family anxieties, and they must be put to Mrs Bell in a way she can understand.

Capacity for accommodation must be assessed decision-specifically. Mrs Bell cannot recall being found by police and repeatedly asks when her husband is coming, although he died six years ago. If she cannot retain or appreciate recent dangerous events or understand that her husband cannot provide support, she is unlikely to have capacity for the decision to return home alone.

The son's statement that she has a right to make bad decisions is important. He is correct in principle: capacitous adults may make decisions others regard as unwise. The task is to decide whether dementia prevents Mrs Bell from understanding, retaining, using and weighing the relevant information. I would explain that distinction to the family and avoid aligning automatically with either the daughter or the son.

Least restrictive alternatives should be considered before residential care is treated as inevitable. I would review whether intensive home care, medication supervision, stove isolation, meals, door sensors, family support, community nursing or respite could reduce risk sufficiently. If those options cannot make discharge home alone safe and she lacks capacity, guardianship or tribunal authority may be required.

The residential care bed pressure should not shortcut the process. The fact that the bed may be lost is practically important but not a lawful reason to declare incapacity or move her without authority. I would document the functional evidence, capacity findings, family views, legal pathway, least restrictive options considered and the rationale for any interim hospital stay or guardianship application.`,
  },
];
