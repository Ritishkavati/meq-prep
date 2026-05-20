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
    modelAnswer: `Adil's refusal of valve surgery cannot be assessed properly until the communication and trauma issues are addressed. The surgical registrar has used Adil's cousin to interpret because "professional interpreters take too long." That is unacceptable for a life-threatening treatment refusal. A family interpreter may inhibit disclosure, distort medical language or be affected by family pressures. I would arrange a professional interpreter urgently, by phone or video if necessary, before concluding that his refusal is capacitous or incapacitous.

The statement "Hospital papers go to immigration; surgery is a trap" is the central formulation clue. It may reflect trauma-related mistrust after detention, a misunderstanding of confidentiality, or psychotic paranoia. His cousin's collateral that Adil was detained offshore and avoids government offices makes trauma highly plausible. I would reduce visible coercion, especially because he becomes distressed when "security stand near his bed," and I would explain the separation between healthcare, records and immigration as accurately as possible with interpreter support.

The cardiothoracic team says he "may die without surgery," so urgency must be clarified. I would ask what the time window is, what alternatives exist, what happens if surgery is delayed, and whether antibiotics or other measures can buy time for engagement. Capacity assessment requires that Adil understands the medical situation, not just that he refuses. If he has capacity after proper explanation, he can refuse life-saving surgery. If he lacks capacity and delay is life-threatening, then emergency or substitute decision pathways may be needed.

His phrase "Maybe Allah has decided my time" should be explored respectfully. It may be a religiously grounded acceptance of death, demoralisation, trauma, or misunderstanding. I would offer spiritual support, possibly an imam or chaplain, and ask how he sees medical treatment fitting with faith. This is not to persuade him manipulatively, but to ensure the decision is informed and values-based.

My consultant actions would include interpreter-assisted assessment, trauma-informed engagement, minimising security, involving refugee health/social work, clarifying surgical urgency, assessing capacity decision-specifically and documenting the legal basis for any action. The decision cannot be delegated to psychiatry as a simple "capacity yes/no" stamp for surgery. It must show that communication was valid, trauma was considered, medical urgency was understood and the least restrictive lawful pathway was used.`,
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
    modelAnswer: `Mrs Wilson's presentation is delirium until proven otherwise. The medical team's label of "progressive dementia" is contradicted by her son's statement, "Mum was doing crosswords and paying bills three days ago." Acute change over three days from independent cognition to hallucinations, confusion and attempts to climb out of bed is a delirium pattern. If this is missed, the ward may sedate and restrain her while reversible causes worsen.

The physical-health clues are strong: she has a urinary tract infection and "sodium of 126," both of which can precipitate delirium. Her medication chart includes "oxybutynin, codeine, temazepam and promethazine," a combination of anticholinergic, opioid and sedative burden that can worsen confusion, hallucinations, falls and urinary retention. I would work with the medical team to treat infection, correct hyponatraemia, review pain and constipation, hydrate, and reduce deliriogenic medication.

The request for haloperidol because she is "impossible to manage" needs reframing. Antipsychotic medication may be appropriate if she is severely distressed or at immediate risk after reversible causes and non-pharmacological measures are addressed, but it should not be the first response to understaffed behavioural difficulty. If used, it should be at the lowest dose, time-limited and monitored for QTc, extrapyramidal effects, sedation and falls.

The bed rails being up are not benign. They can function as restraint and may increase injury if she tries to climb over them. I would advise a least restrictive delirium care bundle: restore hearing aids because they are "in a drawer," provide glasses if needed, reorientation, family presence, hydration, mobilisation, sleep-wake support, toileting, pain relief and close observation. Sensory deprivation may be making her fear and hallucinations worse.

The daughter's question about why psychiatry is involved when "this is just old age" is an opportunity for education. I would explain that delirium is an acute medical brain syndrome, often reversible, and psychiatric input is helping the ward identify causes and reduce harmful restraint or sedation. My documentation would state the delirium formulation, acute baseline change, medical precipitants, medication changes, sensory interventions, restraint minimisation and antipsychotic threshold. The consultant action is to redirect the ward from behavioural control to cause-based delirium management.`,
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
    modelAnswer: `Rosa's pain must be validated while also formulating opioid dependence, trauma and functional mechanisms. Her statement, "No one believes me because I have trauma and take opioids," captures the relational risk: if clinicians respond with disbelief or accusations of manipulation, the ward conflict will worsen and she may escalate distress or seek unsafe medication elsewhere. I would explicitly tell the team that pain can be real even when investigations are negative and even when opioids are causing harm.

The request for IV fentanyl is a major risk point. She is already prescribed high-dose oxycodone, and the pain team suspects opioid-induced hyperalgesia. Escalating opioids in an unstructured way may worsen pain sensitivity, dependence, sedation and respiratory risk. I would not allow nurses and registrars to negotiate opioids shift by shift. Instead, I would convene surgery, pain, addiction medicine, nursing and psychiatry to create one consistent analgesia and communication plan.

The surgical registrar's statement, "This is functional; she is manipulating us," is harmful. It confuses functional disorder with intentional deception and invites punitive care. I would address that language directly, because staff splitting is already present: nursing staff are divided between giving extra opioids and refusing all PRN medication. A consistent plan should avoid both uncontained opioid escalation and punitive withholding. The plan should include non-opioid analgesia, pacing, psychological strategies, agreed PRNs, withdrawal monitoring and clear review points.

Her trauma history changes how physical care should be delivered. She has childhood sexual abuse and becomes distressed when male staff examine her. I would advise trauma-informed examination: consent before touch, explanation, chaperone, female staff where possible, avoidance of repeated unnecessary exams, and attention to dissociation or panic. This is not special treatment; it is necessary to avoid re-traumatisation and escalation.

The partner's warning that she will "buy tablets on the street" if discharged without pain relief raises overdose and illicit-drug risk. I would include harm reduction in discharge planning: naloxone if appropriate, addiction follow-up, GP handover, safe prescribing quantities, opioid taper or substitution consideration, and crisis plan. My documentation would state that Rosa's pain is being taken seriously, why IV opioid escalation is unsafe, how trauma-informed care will occur, and how the team will communicate consistently. The consultant role is to contain the ward system as much as the patient.`,
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
    modelAnswer: `Mr Singh's ICU statements cannot be treated as a single stable refusal because the stem shows fluctuating cognition. He says, "No more tubes; let me go," but two hours later asks when he can restart dialysis. That fluctuation strongly suggests delirium, sedation effects, sepsis-related encephalopathy or fluctuating capacity in critical illness. I would assess capacity as decision-specific and time-specific, ideally when he is most awake, comfortable, oxygenated and supported by a professional interpreter.

The interpreter issue is serious. The family has been interpreting because staff say "he understands enough English." That is not adequate for decisions about ventilation, dialysis and end-of-life care. I would arrange a professional Punjabi interpreter for capacity and goals-of-care discussions. Family members can provide values and collateral, but they should not be the language conduit for a high-stakes capacity assessment, especially when they disagree.

His refusal may still be meaningful. The phrase "No more tubes; let me go" could reflect a capacitous wish to limit burdensome treatment, but it could also be delirium, pain, fear, exhaustion or depression. I would ask what he understands about his condition, what the tubes and dialysis are doing, what he believes will happen with and without them, and what outcomes he would find acceptable. I would also clarify ICU prognosis, reversibility and treatment burdens.

Family conflict must be handled through a structured meeting. His wife says, "Our faith says only God decides death," while his daughter reports he previously said he would never want "prolonged machines." Both are important. I would acknowledge faith values, offer spiritual care, and explain that the decision-making framework depends on Mr Singh's capacity. If he has capacity, his decision governs. If he lacks capacity, the team should use prior expressed wishes and best-interests or substitute decision law, not simply the loudest family view.

If disagreement persists and prognosis is poor, ICU ethics consultation may be needed, but that should not replace good communication. My documentation would record interpreter use, capacity fluctuation, delirium contributors, prognosis discussion, family views, spiritual supports and the legal basis for any treatment limitation or continuation. The consultant-level answer recognises the tension between life-preserving family values, prior wishes, fluctuating capacity and non-beneficial treatment, and manages it through valid communication and lawful process.`,
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
    modelAnswer: `Maria's refusal of potentially curative chemotherapy may be impaired by severe depressive guilt, and it should not be accepted or overridden without a careful capacity assessment. The phrase "I deserve this cancer; treatment would be wasted on me" is not a values-based oncology refusal. It suggests pathological guilt and worthlessness, possibly melancholic or psychotic depression, directly distorting her appreciation of the value of treatment. I would assess capacity to refuse chemotherapy specifically, focusing on whether depression prevents her from appreciating that lymphoma may be curable and that treatment is being offered because it can benefit her.

The oncology urgency matters because the oncologist says "delay reduces chance of cure." This is not an abstract preference dispute. Delay may change prognosis. I would ask oncology to clarify the treatment window, expected cure rates, consequences of delay, alternatives and whether brief psychiatric stabilisation can occur without losing curability. That information is necessary for Maria's capacity assessment and for any legal pathway if she lacks capacity.

Her husband's collateral that "last month she was begging to start treatment" is very important. It suggests her current refusal may be state-dependent and depression-driven, not a long-standing value. I would seek her consent to involve him, while exploring why she says he "should find someone better." That phrase itself may be depressive guilt rather than a stable wish to exclude support. Confidentiality still matters, but depression may be isolating her from a key support at the exact moment she needs help.

The mother's view that chemotherapy is "poison" and preference for "traditional remedies from their community healer" should be explored respectfully. Cultural and family beliefs may influence Maria, but the central issue is Maria's own capacity and wishes. If Maria wants traditional support alongside oncology, and it does not delay or conflict dangerously with treatment, it may be integrated. But family beliefs should not be allowed to amplify depressive incapacity or prevent curative care if Maria would otherwise choose treatment.

Clinically, I would assess severity of depression, psychotic guilt, suicidality, self-neglect and food refusal because she has "stopped eating." Treatment may require urgent antidepressant/antipsychotic treatment, ECT consideration depending on severity, inpatient care or close psycho-oncology follow-up. If she lacks capacity and delay threatens cure, the team may need substitute decision or legal authority to proceed, guided by her prior wishes and best interests. My documentation would quote the guilt statement, oncology urgency, husband's collateral, capacity reasoning, cultural discussion and the legal basis for respecting or overriding the refusal. The consultant task is to protect both autonomy and access to curative treatment when depression may be speaking in the patient's voice.`,
  },
];
