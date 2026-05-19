import { QuizStem } from "../quizData";

export const CL_STEMS: QuizStem[] = [
  {
    id: "CL-001",
    topic: "cl_psychiatry",
    difficulty: "consultant",
    title: "Afghan refugee refusing cardiac surgery",
    candidateRole: "Consultant psychiatrist, consultation-liaison service",
    setting: "Cardiothoracic ward in tertiary hospital",
    stem: `You are the consultant psychiatrist asked to assess Adil, a 35-year-old Afghan refugee with infective endocarditis requiring urgent valve surgery.

Adil refuses surgery and says in limited English, "Hospital papers go to immigration; surgery is a trap." The surgical registrar has been using Adil's cousin as interpreter because "professional interpreters take too long." Adil becomes visibly distressed when security stand near his bed.

His cousin says Adil was detained offshore for months and avoids government offices. Adil says, "Maybe Allah has decided my time." The cardiothoracic team says he may die without surgery but wants psychiatry to determine whether refusal is capacitous.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Interpreter failure invalidates capacity assessment",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "professional interpreters take too long.",
        whyItMatters: "Capacity/refusal cannot be reliably assessed via family interpreter in complex high-stakes surgery decision.",
        modelWording: "Use a professional interpreter before assessing capacity or accepting refusal of cardiac surgery.",
        keywords: ["professional interpreter", "capacity assessment", "family interpreter", "Afghan refugee", "language barrier", "surgery refusal", "consent", "CL psychiatry"],
      },
      {
        id: "s2",
        name: "Trauma-related mistrust",
        category: "trauma",
        severity: "critical",
        clueInStem: "surgery is a trap.",
        whyItMatters: "Refusal may be driven by detention trauma and authority mistrust rather than incapacity alone.",
        modelWording: "Formulate refusal in the context of refugee trauma, detention history and fear of immigration/government systems.",
        keywords: ["refugee trauma", "detention", "mistrust", "immigration fear", "authority", "treatment refusal", "trauma-informed care"],
      },
      {
        id: "s3",
        name: "Life-threatening cardiac illness",
        category: "physical_health",
        severity: "important",
        clueInStem: "may die without surgery",
        whyItMatters: "Urgency affects time available for engagement and threshold for emergency/legal pathways if capacity absent.",
        modelWording: "Clarify urgency, alternatives and consequences of delayed surgery with cardiothoracic team.",
        keywords: ["infective endocarditis", "valve surgery", "cardiac risk", "life-threatening", "urgency", "surgical liaison", "medical risk"],
      },
      {
        id: "s4",
        name: "Capacity to refuse surgery",
        category: "capacity",
        severity: "important",
        clueInStem: "determine whether refusal is capacitous.",
        whyItMatters: "Capacitous refusal of life-saving surgery must be respected; incapacity may require legal treatment pathway.",
        modelWording: "Assess decision-specific capacity after culturally and linguistically valid explanation of surgery and alternatives.",
        keywords: ["capacity", "refusal of surgery", "decision-specific", "understanding", "weighing", "appreciation", "life-saving treatment"],
      },
      {
        id: "s5",
        name: "Security may re-traumatise",
        category: "immediate_safety",
        severity: "important",
        clueInStem: "visibly distressed when security stand near his bed.",
        whyItMatters: "Visible coercion may worsen fear and refusal unless required for safety.",
        modelWording: "Minimise visible security unless needed for immediate safety and use trauma-informed engagement.",
        keywords: ["security", "re-traumatisation", "coercion", "de-escalation", "trauma-informed", "engagement", "ward safety"],
      },
      {
        id: "s6",
        name: "Religious explanatory model",
        category: "cultural_safety",
        severity: "optional",
        clueInStem: "Maybe Allah has decided my time.",
        whyItMatters: "Spiritual beliefs may influence decision-making and should be respectfully explored.",
        modelWording: "Explore religious meaning and offer spiritual support while explaining medical options.",
        keywords: ["Allah", "spiritual belief", "religious meaning", "Islam", "cultural formulation", "chaplain", "imam", "values"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Communication/cultural:

* Use professional interpreter urgently; cousin interpretation is inappropriate for capacity/refusal.
* Explore trauma, detention, immigration fears and spiritual beliefs respectfully.

Medical:

* Clarify urgency, benefits, risks, alternatives and consequences of no surgery with cardiothoracic team.

Capacity/legal:

* Assess decision-specific capacity only after valid explanation.
* If capacitous, refusal must be respected.
* If incapacity and urgent risk, consider legal/emergency treatment pathways.

Engagement:

* Reduce visible security unless necessary.
* Offer refugee/transcultural worker, social work and spiritual support.

Documentation:

* Record interpreter use, capacity findings, trauma/cultural formulation, urgency and legal rationale.`,
  },
  {
    id: "CL-002",
    topic: "cl_psychiatry",
    difficulty: "consultant",
    title: "Delirium missed as dementia on medical ward",
    candidateRole: "Consultant psychiatrist, consultation-liaison service",
    setting: "Medical ward in metropolitan hospital",
    stem: `You are the CL psychiatrist asked to review Mrs Wilson, an 84-year-old woman admitted after a fall.

The medical team says she has "progressive dementia" because she is confused, hallucinating and trying to climb out of bed. Her son says, "Mum was doing crosswords and paying bills three days ago." The chart includes oxybutynin, codeine, temazepam and promethazine. She has a urinary tract infection and sodium of 126.

Nurses have placed the bed rails up and requested haloperidol because "she is impossible to manage." Mrs Wilson is hard of hearing and her hearing aids are in a drawer. Her daughter asks why psychiatry is involved when "this is just old age."`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Acute delirium clue",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "three days ago.",
        whyItMatters: "Acute change strongly supports delirium and mandates reversible cause treatment.",
        modelWording: "Formulate acute delirium rather than progressive dementia given sudden change over days from normal function.",
        keywords: ["delirium", "acute change", "three days", "dementia misdiagnosis", "reversible causes", "CL psychiatry", "old age"],
      },
      {
        id: "s2",
        name: "Multiple medical precipitants",
        category: "physical_health",
        severity: "critical",
        clueInStem: "urinary tract infection and sodium of 126.",
        whyItMatters: "UTI and hyponatraemia are treatable causes of delirium and may be worsened by medications.",
        modelWording: "Prioritise medical treatment of delirium precipitants including UTI, hyponatraemia, pain, constipation and medication effects.",
        keywords: ["UTI", "hyponatraemia", "sodium 126", "medical precipitants", "falls", "delirium", "treat causes", "infection"],
      },
      {
        id: "s3",
        name: "Anticholinergic/sedative burden",
        category: "physical_health",
        severity: "important",
        clueInStem: "oxybutynin, codeine, temazepam and promethazine.",
        whyItMatters: "These medications can worsen delirium, falls and hallucinations.",
        modelWording: "Review and rationalise anticholinergic, opioid and sedative medications contributing to delirium.",
        keywords: ["anticholinergic", "oxybutynin", "promethazine", "temazepam", "codeine", "medication review", "falls", "delirium"],
      },
      {
        id: "s4",
        name: "Restrictive interventions",
        category: "ethics",
        severity: "important",
        clueInStem: "bed rails up",
        whyItMatters: "Bed rails/restraint may increase injury and agitation if not clinically justified.",
        modelWording: "Minimise restrictive interventions and use delirium care bundle before antipsychotic or restraint.",
        keywords: ["bed rails", "restraint", "least restrictive", "delirium care bundle", "falls prevention", "ethics", "agitation"],
      },
      {
        id: "s5",
        name: "Sensory impairment worsens delirium",
        category: "immediate_safety",
        severity: "important",
        clueInStem: "hearing aids are in a drawer.",
        whyItMatters: "Uncorrected hearing impairment worsens confusion, fear and miscommunication.",
        modelWording: "Restore hearing aids/glasses and reorientation as part of immediate delirium management.",
        keywords: ["hearing aids", "sensory impairment", "reorientation", "communication", "delirium prevention", "nursing care", "confusion"],
      },
      {
        id: "s6",
        name: "Family education",
        category: "family_carer",
        severity: "optional",
        clueInStem: "this is just old age.",
        whyItMatters: "Family misunderstanding may reduce acceptance of urgent delirium treatment.",
        modelWording: "Explain delirium as an acute medical brain syndrome, not normal ageing.",
        keywords: ["family education", "old age", "delirium explanation", "son", "daughter", "acute brain syndrome", "reversible"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Diagnosis:

* This is delirium until proven otherwise, not simply dementia or old age.
* Acute change from crosswords/bills three days ago is key.

Medical treatment:

* Treat UTI and hyponatraemia.
* Review pain, constipation, dehydration and medication causes.
* Reduce anticholinergic/sedative/opioid burden.

Safety/non-pharmacological:

* Restore hearing aids.
* Use reorientation, hydration, mobilisation, sleep-wake support, family presence and close observation.
* Avoid restraints/bed rails unless clearly justified.

Medication:

* Haloperidol only if severe distress or immediate safety risk persists, lowest dose and monitored.

Family/MDT:

* Educate family and ward team about delirium.
* Document formulation, causes and management plan.`,
  },
  {
    id: "CL-003",
    topic: "cl_psychiatry",
    difficulty: "consultant",
    title: "Chronic pain, opioid dependence and staff conflict",
    candidateRole: "Consultant psychiatrist, consultation-liaison pain psychiatry",
    setting: "Surgical ward after repeated admissions for abdominal pain",
    stem: `You are the CL psychiatrist asked to review Rosa, a 39-year-old woman admitted with severe abdominal pain after multiple negative investigations.

Rosa says, "No one believes me because I have trauma and take opioids." She is prescribed high-dose oxycodone and asks for IV fentanyl. The surgical registrar says, "This is functional; she is manipulating us." The pain team says opioid-induced hyperalgesia is likely.

Rosa has a history of childhood sexual abuse and becomes distressed when male staff examine her. Her partner says, "If you discharge her without pain relief she will buy tablets on the street." Nursing staff are split between giving extra opioids and refusing all PRN medication.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Validate pain while formulating functional/opioid factors",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "No one believes me because I have trauma and take opioids.",
        whyItMatters: "Invalidation worsens distress, conflict and disengagement; pain may be real even with functional mechanisms and opioid dependence.",
        modelWording: "Validate Rosa's pain while formulating functional pain, trauma, opioid dependence and possible opioid-induced hyperalgesia.",
        keywords: ["chronic pain", "functional disorder", "validation", "opioid dependence", "trauma", "opioid-induced hyperalgesia", "CL psychiatry", "pain formulation"],
      },
      {
        id: "s2",
        name: "Opioid escalation risk",
        category: "substance_use",
        severity: "critical",
        clueInStem: "asks for IV fentanyl.",
        whyItMatters: "Escalating opioids may worsen dependence, sedation and hyperalgesia.",
        modelWording: "Avoid unstructured opioid escalation and coordinate a single pain/addiction plan.",
        keywords: ["IV fentanyl", "opioid escalation", "oxycodone", "dependence", "hyperalgesia", "sedation", "addiction", "pain team"],
      },
      {
        id: "s3",
        name: "Trauma-informed examination",
        category: "trauma",
        severity: "important",
        clueInStem: "becomes distressed when male staff examine her.",
        whyItMatters: "Trauma triggers can worsen pain, agitation and refusal of care.",
        modelWording: "Use trauma-informed care: consent before examination, offer female staff/chaperone and avoid repeated unnecessary exams.",
        keywords: ["trauma-informed care", "childhood sexual abuse", "male staff", "examination", "consent", "chaperone", "distress", "safety"],
      },
      {
        id: "s4",
        name: "Staff splitting and stigma",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "she is manipulating us.",
        whyItMatters: "Stigmatising language polarises staff and produces inconsistent, unsafe prescribing.",
        modelWording: "Address staff splitting and stigmatising language; establish consistent MDT plan for pain, risk and communication.",
        keywords: ["staff conflict", "manipulating", "stigma", "splitting", "consistent plan", "MDT", "opioids", "functional pain"],
      },
      {
        id: "s5",
        name: "Unsafe discharge and illicit medication risk",
        category: "risk_self",
        severity: "important",
        clueInStem: "she will buy tablets on the street.",
        whyItMatters: "Abrupt opioid cessation or discharge without plan may increase overdose and illicit drug risk.",
        modelWording: "Plan discharge with harm reduction, opioid taper/substitution considerations and follow-up to reduce illicit tablet use and overdose risk.",
        keywords: ["street tablets", "overdose risk", "harm reduction", "discharge planning", "opioid taper", "addiction medicine", "illicit opioids"],
      },
      {
        id: "s6",
        name: "Ethical balance of pain relief and harm",
        category: "ethics",
        severity: "optional",
        clueInStem: "refusing all PRN medication.",
        whyItMatters: "Both overprescribing and punitive withholding are harmful.",
        modelWording: "Balance analgesia with opioid harm using clear, compassionate boundaries and non-opioid strategies.",
        keywords: ["ethics", "pain relief", "non-maleficence", "PRN medication", "boundaries", "analgesia", "harm minimisation"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Formulation:

* Validate pain as real while formulating functional pain, trauma effects, opioid dependence and opioid-induced hyperalgesia.

Substance/pain plan:

* Avoid unstructured opioid escalation, especially IV fentanyl.
* Coordinate pain team, addiction medicine, surgery and psychiatry around a single prescribing plan.
* Consider non-opioid analgesia, pacing, psychological strategies and harm reduction.

Trauma:

* Use trauma-informed examinations: consent, female staff/chaperone if preferred, avoid repeated unnecessary exams.

MDT:

* Address stigmatising language and staff splitting.
* Provide consistent communication and PRN boundaries.

Disposition:

* Do not discharge abruptly without plan.
* Arrange follow-up, opioid plan, overdose risk mitigation and GP/pain/addiction handover.`,
  },
  {
    id: "CL-004",
    topic: "cl_psychiatry",
    difficulty: "consultant",
    title: "ICU fluctuating capacity and family demanding treatment",
    candidateRole: "Consultant psychiatrist, ICU consultation-liaison service",
    setting: "Intensive care unit family meeting",
    stem: `You are the CL psychiatrist asked to assess Mr Singh, a 62-year-old man in ICU after septic shock and multi-organ failure.

Mr Singh is intermittently awake and says, "No more tubes; let me go." Two hours later he asks when he can restart dialysis. His wife says, "Our faith says only God decides death, so you must continue everything." His adult daughter says he previously told her he would never want prolonged machines.

The ICU consultant says prognosis is poor and asks whether Mr Singh has capacity to refuse ventilation and dialysis. Mr Singh speaks Punjabi at home, but the family has been interpreting because staff say "he understands enough English."`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Fluctuating capacity in ICU delirium",
        category: "capacity",
        severity: "critical",
        clueInStem: "Two hours later he asks when he can restart dialysis.",
        whyItMatters: "Fluctuation suggests delirium/critical illness affecting capacity; single statements should not determine major treatment decisions.",
        modelWording: "Assess capacity as fluctuating and decision-specific, considering delirium, sedation, sepsis and timing of assessment.",
        keywords: ["fluctuating capacity", "ICU delirium", "dialysis", "ventilation", "decision-specific", "sepsis", "sedation", "critical illness"],
      },
      {
        id: "s2",
        name: "Interpreter requirement",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "he understands enough English.",
        whyItMatters: "High-stakes capacity assessment cannot rely on presumed partial English or family interpretation.",
        modelWording: "Use a professional Punjabi interpreter for capacity and goals-of-care discussions.",
        keywords: ["Punjabi interpreter", "family interpreting", "capacity", "ICU", "language barrier", "cultural safety", "goals of care"],
      },
      {
        id: "s3",
        name: "Treatment refusal versus inconsistent wishes",
        category: "consent_refusal",
        severity: "important",
        clueInStem: "No more tubes; let me go.",
        whyItMatters: "Could represent capacitous refusal, delirium, distress, pain or demoralisation; needs assessment in optimal conditions.",
        modelWording: "Explore whether refusal reflects stable values or delirium-related distress, pain, fear or exhaustion.",
        keywords: ["refusal of treatment", "ventilation", "dialysis", "distress", "demoralisation", "values", "ICU", "end of life"],
      },
      {
        id: "s4",
        name: "Family conflict over values",
        category: "family_carer",
        severity: "important",
        clueInStem: "he would never want prolonged machines.",
        whyItMatters: "Conflicting family views require structured goals-of-care meeting and attention to prior wishes.",
        modelWording: "Facilitate family meeting to explore prior expressed wishes, faith values and best-interests/substitute decision framework.",
        keywords: ["family conflict", "prior wishes", "prolonged machines", "goals of care", "substitute decision-maker", "wife", "daughter"],
      },
      {
        id: "s5",
        name: "Religious values",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "only God decides death",
        whyItMatters: "Faith beliefs influence family distress and treatment expectations and should be respected without overriding patient wishes/law.",
        modelWording: "Acknowledge faith values and offer spiritual care while clarifying legal and ethical decision-making standards.",
        keywords: ["faith", "God decides", "spiritual care", "cultural safety", "end-of-life", "family values", "ethics"],
      },
      {
        id: "s6",
        name: "Poor prognosis and ethics consultation",
        category: "ethics",
        severity: "optional",
        clueInStem: "prognosis is poor",
        whyItMatters: "Futility disputes may require ethics support and clear documentation.",
        modelWording: "If disagreement persists, consider ICU ethics consultation and document capacity/prognosis/family discussions.",
        keywords: ["poor prognosis", "futility", "ethics consultation", "ICU", "documentation", "treatment limitation", "multi-organ failure"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Capacity:

* Assess capacity as decision-specific and fluctuating.
* Consider ICU delirium, sepsis, sedation, pain, hypoxia and timing of assessment.
* Do not rely on a single statement made during fluctuating consciousness.

Communication:

* Use professional Punjabi interpreter; family interpretation is inadequate for capacity/goals-of-care.

Clinical/ethical:

* Clarify prognosis and treatment options with ICU.
* Explore whether refusal reflects stable values or distress/delirium.
* If capacity absent, use substitute decision/best-interests framework and prior expressed wishes.

Family/cultural:

* Hold family meeting acknowledging faith values and daughter's collateral.
* Offer spiritual care.

Governance:

* Document capacity findings, interpreter use, family views, prognosis and ethics consultation if needed.`,
  },
  {
    id: "CL-005",
    topic: "cl_psychiatry",
    difficulty: "consultant",
    title: "Cancer patient refusing chemotherapy and depression-related incapacity",
    candidateRole: "Consultant psychiatrist, psycho-oncology consultation-liaison service",
    setting: "Oncology ward",
    stem: `You are the psycho-oncology consultant asked to assess Maria, a 46-year-old woman with newly diagnosed lymphoma.

Oncology recommends curative chemotherapy, but Maria says, "I deserve this cancer; treatment would be wasted on me." She has severe depression, psychomotor retardation and has stopped eating. Her husband says, "She is not herself; last month she was begging to start treatment." Maria's mother believes chemotherapy is "poison" and wants traditional remedies from their community healer.

The oncologist says delay reduces chance of cure and asks whether Maria has capacity to refuse chemotherapy. Maria says she does not want her husband involved because "he should find someone better."`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Depressive guilt impairing treatment refusal",
        category: "capacity",
        severity: "critical",
        clueInStem: "I deserve this cancer; treatment would be wasted on me.",
        whyItMatters: "Pathological guilt may impair appreciation and weighing of curative treatment, invalidating refusal.",
        modelWording: "Assess whether severe depressive guilt impairs Maria's capacity to refuse potentially curative chemotherapy.",
        keywords: ["capacity", "depressive guilt", "chemotherapy refusal", "lymphoma", "curative treatment", "weighing", "appreciation", "psycho-oncology"],
      },
      {
        id: "s2",
        name: "Time-sensitive curative treatment",
        category: "physical_health",
        severity: "critical",
        clueInStem: "delay reduces chance of cure",
        whyItMatters: "Treatment delay may convert curative illness into poorer prognosis; urgency shapes legal/clinical response.",
        modelWording: "Clarify oncology urgency and window for treatment while urgently treating depression and assessing capacity.",
        keywords: ["lymphoma", "curative chemotherapy", "delay", "chance of cure", "oncology", "treatment window", "medical urgency"],
      },
      {
        id: "s3",
        name: "Collateral indicates state-dependent refusal",
        category: "collateral",
        severity: "important",
        clueInStem: "last month she was begging to start treatment.",
        whyItMatters: "Recent opposite wishes suggest refusal may be depressive-state dependent.",
        modelWording: "Use husband's collateral to assess whether refusal is a recent depression-driven change from prior values and wishes.",
        keywords: ["collateral", "husband", "state-dependent refusal", "prior wishes", "depression", "treatment preference", "values"],
      },
      {
        id: "s4",
        name: "Severe depression and self-neglect",
        category: "risk_self",
        severity: "important",
        clueInStem: "has stopped eating.",
        whyItMatters: "Refusal of food plus guilt may indicate severe depression with self-neglect and possible suicidality.",
        modelWording: "Assess suicide risk, nihilistic guilt, self-neglect, food refusal and need for urgent depression treatment.",
        keywords: ["severe depression", "psychomotor retardation", "stopped eating", "suicide risk", "self-neglect", "nihilistic guilt", "melancholia"],
      },
      {
        id: "s5",
        name: "Cultural/traditional healing beliefs",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "traditional remedies from their community healer.",
        whyItMatters: "Family cultural beliefs must be explored respectfully without allowing misinformation to override Maria's valid decision-making.",
        modelWording: "Explore traditional healing beliefs respectfully and, if Maria agrees, integrate culturally meaningful supports alongside evidence-based oncology care.",
        keywords: ["traditional remedies", "community healer", "cultural safety", "family beliefs", "chemotherapy", "integrative support", "respect"],
      },
      {
        id: "s6",
        name: "Confidentiality versus involving husband",
        category: "ethics",
        severity: "optional",
        clueInStem: "he should find someone better.",
        whyItMatters: "Depressive guilt may drive exclusion of a supportive spouse; confidentiality still needs respect unless safety requires disclosure.",
        modelWording: "Respect confidentiality while exploring whether depressive guilt is driving exclusion of husband and seeking consent for support involvement.",
        keywords: ["confidentiality", "husband involvement", "depressive guilt", "family support", "ethics", "consent", "supportive spouse"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Capacity/medical:

* Assess capacity to refuse chemotherapy decision-specifically.
* Focus on whether depressive guilt and nihilism impair appreciation and weighing.
* Clarify oncology urgency and treatment window.

Diagnosis/risk:

* Assess severity of depression, psychotic guilt, suicidality, self-neglect and food refusal.
* Treat depression urgently; consider inpatient psychiatric/medical care if risk or incapacity.

Collateral:

* Use husband's collateral that she recently wanted treatment to assess state-dependent refusal.
* Seek Maria's consent to involve husband; respect confidentiality unless safety requires otherwise.

Cultural/family:

* Explore mother's beliefs and community healer respectfully.
* Integrate culturally meaningful supports if consistent with Maria's wishes and not delaying urgent care.

Disposition/governance:

* If capacity absent and delay threatens cure, consider legal/substitute decision pathways.
* Document capacity reasoning, oncology urgency, collateral and treatment plan.`,
  },
];
