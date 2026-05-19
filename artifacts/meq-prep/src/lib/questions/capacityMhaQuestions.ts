import type { QuizStem } from "../quizData";

export const CAP_STEMS: QuizStem[] = [
  {
    id: "CAP-001",
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
        name: "Decision-specific capacity impaired by cognition and beliefs",
        category: "capacity",
        severity: "critical",
        clueInStem: "The dialysis machine is a punishment device and you are trying to drain me dry.",
        whyItMatters: "Delusional or confused beliefs may impair appreciation and weighing of dialysis risks; missing this may lead to wrongly treating refusal as capacitous.",
        modelWording: "Assess decision-specific capacity to refuse dialysis, focusing on understanding, retention, appreciation and weighing of the immediate medical risks.",
        keywords: ["decision-specific capacity", "dialysis refusal", "appreciation", "weighing information", "vascular dementia", "delirium"],
      },
      {
        id: "s2",
        name: "Immediate life-threatening physical risk",
        category: "physical_health",
        severity: "critical",
        clueInStem: "dialysis is needed tonight",
        whyItMatters: "Urgent hyperkalaemia may require emergency treatment authority rather than prolonged family debate.",
        modelWording: "Clarify medical urgency with renal team because imminent risk from hyperkalaemia may justify emergency treatment if capacity is absent.",
        keywords: ["hyperkalaemia", "urgent dialysis", "medical emergency", "renal failure", "emergency treatment", "life-threatening risk"],
      },
      {
        id: "s3",
        name: "Substitute decision-maker conflict",
        category: "family_carer",
        severity: "important",
        clueInStem: "Dad always said he never wanted machines keeping him alive.",
        whyItMatters: "Past wishes are relevant but must be interpreted in context of current reversibility, urgency and legal authority.",
        modelWording: "Clarify the daughter's legal authority and explore prior expressed wishes while distinguishing chronic end-of-life preferences from reversible emergency treatment.",
        keywords: ["enduring power of attorney", "substitute decision-maker", "prior wishes", "advance care planning", "family conflict"],
      },
      {
        id: "s4",
        name: "Possible delirium causing fluctuating capacity",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "later asks why his deceased wife has not visited.",
        whyItMatters: "Delirium can fluctuate and may temporarily remove capacity, requiring reassessment after medical stabilisation.",
        modelWording: "Assess for delirium superimposed on dementia because fluctuating cognition may be driving refusal and behavioural disturbance.",
        keywords: ["delirium", "fluctuating cognition", "dementia", "orientation", "medical precipitants", "capacity fluctuation"],
      },
      {
        id: "s5",
        name: "Least restrictive approach to treatment",
        category: "ethics",
        severity: "important",
        clueInStem: "pulling at his cannula",
        whyItMatters: "Treatment against objection may require sedation or restraint; consultant must minimise harm and coercion.",
        modelWording: "Use the least restrictive method to deliver urgent care, including reassurance, family presence, analgesia and restraint only if necessary and proportionate.",
        keywords: ["least restrictive", "restraint", "sedation", "proportionality", "dignity", "urgent care"],
      },
      {
        id: "s6",
        name: "Documentation of defensible legal reasoning",
        category: "governance",
        severity: "optional",
        clueInStem: "I'll complain.",
        whyItMatters: "Family dispute increases medico-legal risk and requires clear documentation of capacity, urgency and legal basis.",
        modelWording: "Document capacity findings, medical urgency, substitute decision-maker discussions and legal rationale for proceeding or not proceeding.",
        keywords: ["documentation", "legal basis", "complaint risk", "family disagreement", "defensible decision", "capacity record"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Capacity/medical urgency:

Assess decision-specific capacity to refuse dialysis because cognition and persecutory beliefs appear to impair understanding, appreciation and weighing. Clarify with renal team the immediacy of hyperkalaemia/fluid overload risk and whether delay risks death or irreversible harm. Assess delirium superimposed on dementia and treat reversible contributors.

Legal/ethical:

If capacity is absent and risk is imminent, consider emergency treatment authority/common law or local guardianship framework. Apply least restrictive principles: explanation, familiar support, calm setting, analgesia, minimal restraint/sedation only if proportionate.

Family/substitute decision-making:

Clarify daughter's EPOA authority and prior expressed wishes. Manage sibling disagreement through a senior family discussion but do not allow family conflict to delay emergency treatment.

Governance:

Document capacity assessment, urgency, legal basis, family discussions, risks of action/inaction and review plan.`,
  },
  {
    id: "CAP-002",
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
        name: "Apparent understanding does not equal capacity",
        category: "capacity",
        severity: "critical",
        clueInStem: "I understand my liver could fail, but that is my choice.",
        whyItMatters: "A suicidal adolescent may repeat information but be unable to weigh consequences due to hopelessness, ambivalence or acute crisis.",
        modelWording: "Assess Gillick competence/capacity by testing appreciation and weighing, not merely factual repetition of risk.",
        keywords: ["Gillick competence", "adolescent capacity", "weighing information", "suicidal crisis", "treatment refusal"],
      },
      {
        id: "s2",
        name: "Unclear overdose timing requires urgent medical treatment",
        category: "physical_health",
        severity: "critical",
        clueInStem: "the timing of ingestion is unclear.",
        whyItMatters: "Delayed paracetamol treatment may cause hepatic failure; medical stabilisation cannot wait for a perfect psychiatric assessment.",
        modelWording: "Prioritise urgent toxicology assessment and NAC where indicated because uncertain paracetamol timing creates potentially life-threatening risk.",
        keywords: ["paracetamol overdose", "NAC", "toxicology", "hepatic failure", "uncertain timing", "medical stabilisation"],
      },
      {
        id: "s3",
        name: "Suicidal intent and concealment",
        category: "risk_self",
        severity: "important",
        clueInStem: "I took enough to sleep and maybe not wake up.",
        whyItMatters: "Ambivalent suicidal intent and initial denial increase concern about ongoing risk and unreliable self-report.",
        modelWording: "Formulate risk based on ambivalent suicidal intent, concealment, overdose uncertainty and current refusal of treatment.",
        keywords: ["suicidal intent", "ambivalence", "concealment", "overdose risk", "unreliable history", "acute risk"],
      },
      {
        id: "s4",
        name: "MHA/minor treatment pathway",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "No one has the right to lock me up.",
        whyItMatters: "Refusal of life-saving care may require use of mental health, guardianship or emergency medical powers depending on jurisdiction.",
        modelWording: "Consider applicable minor consent, emergency treatment and Mental Health Act pathways if acute mental disorder impairs safe refusal.",
        keywords: ["Mental Health Act", "minor consent", "emergency treatment", "involuntary assessment", "legal framework"],
      },
      {
        id: "s5",
        name: "Collateral minimisation",
        category: "collateral",
        severity: "important",
        clueInStem: "dramatic but clever",
        whyItMatters: "Family minimisation may lead to unsafe discharge unless balanced with objective risk and school collateral.",
        modelWording: "Seek broader collateral from school, family and GP while not relying on minimising collateral to justify discharge.",
        keywords: ["collateral", "family minimisation", "school", "GP", "discharge risk", "boarding school"],
      },
      {
        id: "s6",
        name: "Discharge pressure without supervision",
        category: "disposition",
        severity: "optional",
        clueInStem: "should be discharged if she promises to be safe.",
        whyItMatters: "A safety promise is not a discharge plan, especially after overdose and treatment refusal.",
        modelWording: "Do not rely on a promise of safety; disposition requires medical clearance, risk formulation, supervision and follow-up.",
        keywords: ["promise of safety", "safe discharge", "supervision", "follow-up", "risk formulation"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Immediate safety/physical health:

Prioritise ED toxicology management, bloods and NAC if indicated because timing/quantity is unclear. Manage absconding/refusal risk with safe observation and senior ED liaison.

Capacity/legal:

Assess Gillick competence/capacity specifically for refusing overdose treatment and admission. Do not equate articulate repetition with capacity; assess appreciation, weighing, stability of choice and effect of suicidality. Consider emergency treatment, parental/guardian authority and Mental Health Act pathways if capacity is absent or acute mental disorder drives refusal.

Risk/collateral:

Assess suicidal intent, ambivalence, concealment, access to further medication and protective factors. Obtain collateral from school, aunt, GP and prior mental health providers.

Disposition:

No discharge based only on a promise of safety. Disposition requires medical clearance, acute risk formulation, supervision, means restriction and CAMHS follow-up/admission plan.`,
  },
  {
    id: "CAP-003",
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
        name: "Least restrictive principle central to CTO renewal",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "the team has not documented any recent attempt at a voluntary treatment plan.",
        whyItMatters: "A CTO must not be renewed by inertia; failure to test voluntary care undermines legal defensibility.",
        modelWording: "Review whether ongoing CTO is the least restrictive option and document attempts to negotiate voluntary treatment.",
        keywords: ["CTO renewal", "least restrictive", "voluntary treatment", "legal threshold", "tribunal", "defensibility"],
      },
      {
        id: "s2",
        name: "Coercion affecting alliance and consent",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "I only take the injection because you people threaten me with hospital.",
        whyItMatters: "Perceived coercion may damage engagement and requires explicit consideration of autonomy and alternatives.",
        modelWording: "Explore perceived coercion and seek collaborative consent to treatment where possible despite CTO history.",
        keywords: ["coercion", "treatment alliance", "consent", "autonomy", "collaborative care", "depot"],
      },
      {
        id: "s3",
        name: "Relapse history relevant but not sufficient",
        category: "risk_self",
        severity: "important",
        clueInStem: "past relapses associated with stopping depot antipsychotic medication.",
        whyItMatters: "Historical relapse risk is relevant, but current functioning and supports must also be weighed.",
        modelWording: "Balance historical relapse risk against current stability, adherence, supports and willingness to consider alternatives.",
        keywords: ["relapse history", "medication non-adherence", "current stability", "risk formulation", "supports"],
      },
      {
        id: "s4",
        name: "Medication side effects driving refusal",
        category: "physical_health",
        severity: "important",
        clueInStem: "tiredness, sexual dysfunction and weight gain.",
        whyItMatters: "Ignoring adverse effects increases resistance and weakens least restrictive treatment planning.",
        modelWording: "Address side effects and consider dose, medication or formulation changes to improve voluntary adherence.",
        keywords: ["side effects", "weight gain", "sexual dysfunction", "metabolic risk", "adherence", "shared decision-making"],
      },
      {
        id: "s5",
        name: "Collateral supports possible step-down",
        category: "collateral",
        severity: "important",
        clueInStem: "reliable with appointments",
        whyItMatters: "Reliable engagement and abstinence may support a trial of less restrictive care.",
        modelWording: "Use collateral about sustained appointment attendance and cannabis abstinence to assess feasibility of voluntary treatment.",
        keywords: ["collateral", "sister", "appointment adherence", "cannabis abstinence", "step-down", "community supports"],
      },
      {
        id: "s6",
        name: "Team inertia and risk aversion",
        category: "mdt_conflict",
        severity: "optional",
        clueInStem: "he will definitely relapse if we remove it.",
        whyItMatters: "Overconfident prediction may reflect team risk aversion rather than evidence-based legal reasoning.",
        modelWording: "Challenge risk-averse assumptions and require evidence-based justification for ongoing coercion.",
        keywords: ["risk aversion", "team inertia", "evidence", "coercion", "clinical justification", "MDT"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Legal/least restrictive:

Review whether statutory criteria for CTO renewal are currently met. Specifically address least restrictive care and whether voluntary treatment has been genuinely attempted.

Clinical risk:

Consider relapse history, previous harm, adherence pattern, substance use and early warning signs. Balance this against 18 months stability, work, independent living and collateral reliability.

Consent/treatment planning:

Explore Sam's perceived coercion and side effects. Offer shared decision-making: dose review, side-effect management, depot alternatives, oral trial if safe, relapse plan.

MDT/tribunal:

Convene MDT review before tribunal. Avoid renewal by inertia or unsupported prediction. Prepare defensible evidence, including risks, alternatives considered and reasons for any CTO recommendation.

Documentation:

Record Sam's views, capacity/consent, side effects, collateral, least restrictive reasoning and review plan.`,
  },
  {
    id: "CAP-004",
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
        name: "Refusal driven by psychotic belief",
        category: "capacity",
        severity: "critical",
        clueInStem: "The tablets are trackers that will let them control my thoughts.",
        whyItMatters: "A clear refusal does not equal capacity if delusions impair appreciation and reasoning.",
        modelWording: "Assess whether persecutory delusions impair Omar's capacity to refuse antipsychotic treatment.",
        keywords: ["psychotic refusal", "persecutory delusion", "capacity", "appreciation", "reasoning", "antipsychotic"],
      },
      {
        id: "s2",
        name: "Risk to others on ward",
        category: "risk_others",
        severity: "critical",
        clueInStem: "You are one of them.",
        whyItMatters: "Threatening behaviour toward vulnerable inpatients increases urgency for containment and treatment.",
        modelWording: "Assess immediate risk to others, especially vulnerable patients, and adjust observation and containment accordingly.",
        keywords: ["risk to others", "threatening behaviour", "vulnerable patients", "ward safety", "containment"],
      },
      {
        id: "s3",
        name: "Mental Health Act treatment authority",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "admitted involuntarily",
        whyItMatters: "Involuntary status may permit treatment under statutory criteria but does not remove need for proportionality and documentation.",
        modelWording: "Clarify statutory authority for involuntary treatment and ensure treatment is necessary, proportionate and least restrictive.",
        keywords: ["involuntary treatment", "Mental Health Act", "treatment authority", "least restrictive", "statutory criteria"],
      },
      {
        id: "s4",
        name: "Collateral evidence of relapse after depot cessation",
        category: "collateral",
        severity: "important",
        clueInStem: "stopping risperidone depot three months ago.",
        whyItMatters: "Collateral links non-adherence to relapse and informs treatment choice and relapse planning.",
        modelWording: "Use collateral regarding depot cessation and relapse to support formulation and treatment planning.",
        keywords: ["collateral", "depot cessation", "relapse", "risperidone", "family information", "treatment planning"],
      },
      {
        id: "s5",
        name: "Force medication threshold",
        category: "ethics",
        severity: "important",
        clueInStem: "medication can be given by force tonight.",
        whyItMatters: "Forced medication is high-risk and should not be driven by staff anxiety alone.",
        modelWording: "Use forced medication only if legally authorised, clinically necessary, proportionate and after less restrictive options fail.",
        keywords: ["forced medication", "proportionality", "staff anxiety", "least restrictive", "coercion", "restraint"],
      },
      {
        id: "s6",
        name: "System pressure should not drive coercion",
        category: "system_pressure",
        severity: "optional",
        clueInStem: "The unit is full",
        whyItMatters: "Bed pressure must not become the rationale for coercive treatment.",
        modelWording: "Acknowledge unit pressure but base treatment decisions on clinical risk, legal authority and necessity.",
        keywords: ["unit full", "bed pressure", "coercion", "clinical necessity", "governance"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Capacity/legal:

Assess capacity to refuse antipsychotic medication; clear refusal is not sufficient if delusions impair appreciation/weighing. Confirm MHA treatment authority and local procedural requirements for involuntary medication.

Risk/immediate safety:

Review Omar urgently due to escalating intimidation and risk to vulnerable patients. Increase observation, separate from vulnerable patients and create a ward safety plan.

Treatment:

Offer oral medication first with clear explanation. Consider medication history, prior depot response and side effects. Forced medication only if legally authorised, necessary, proportionate and least restrictive options fail.

Collateral/MDT:

Use father's collateral to establish relapse pattern. Lead MDT plan to ensure consistent communication and reduce reactive coercion.

Documentation:

Record capacity reasoning, risk to others, legal authority, alternatives tried, rationale for any coercive treatment and review plan.`,
  },
  {
    id: "CAP-005",
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
        name: "Accommodation capacity impaired by memory and appreciation",
        category: "capacity",
        severity: "critical",
        clueInStem: "She cannot recall being found by police",
        whyItMatters: "Inability to retain and appreciate recent risk events undermines capacity for accommodation decisions.",
        modelWording: "Assess decision-specific capacity regarding accommodation, focusing on retention and appreciation of home safety risks.",
        keywords: ["accommodation capacity", "Alzheimer disease", "retention", "appreciation", "home safety", "decision-specific"],
      },
      {
        id: "s2",
        name: "High vulnerability if discharged home",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "wandering at night in heavy rain.",
        whyItMatters: "Wandering, medication mismanagement and stove risk create serious foreseeable harm.",
        modelWording: "Recognise high vulnerability from wandering, self-neglect, medication mismanagement and environmental hazards.",
        keywords: ["wandering", "self-neglect", "home risk", "medication mismanagement", "vulnerability", "unsafe discharge"],
      },
      {
        id: "s3",
        name: "Guardianship pathway",
        category: "governance",
        severity: "important",
        clueInStem: "guardianship may be required",
        whyItMatters: "Restrictive placement requires proper legal process if capacity is absent and family disagreement persists.",
        modelWording: "Consider guardianship/tribunal pathway for accommodation decisions if Mrs Bell lacks capacity and no valid substitute decision-maker can decide.",
        keywords: ["guardianship", "tribunal", "substitute decision-maker", "residential care", "legal process"],
      },
      {
        id: "s4",
        name: "Autonomy versus safety conflict",
        category: "ethics",
        severity: "important",
        clueInStem: "She has a right to make bad decisions.",
        whyItMatters: "Consultant must distinguish capacitous unwise decisions from incapacitous decisions with serious risk.",
        modelWording: "Differentiate an unwise capacitous decision from incapacity due to dementia impairing appreciation of risk.",
        keywords: ["autonomy", "unwise decision", "incapacity", "safety", "ethical balance", "least restrictive"],
      },
      {
        id: "s5",
        name: "Time pressure from residential bed",
        category: "system_pressure",
        severity: "important",
        clueInStem: "the residential care bed may be lost.",
        whyItMatters: "System pressure should not shortcut capacity assessment or legal process.",
        modelWording: "Acknowledge placement pressure but ensure capacity assessment and legal steps are completed defensibly.",
        keywords: ["placement pressure", "residential bed", "capacity assessment", "legal process", "defensible decision"],
      },
      {
        id: "s6",
        name: "Family disagreement affecting disposition",
        category: "family_carer",
        severity: "optional",
        clueInStem: "Her daughter wants residential care, but her son says",
        whyItMatters: "Family conflict may delay safe discharge planning and requires structured communication.",
        modelWording: "Hold a family meeting to explain capacity, risk and least restrictive options while avoiding alignment with one relative.",
        keywords: ["family disagreement", "family meeting", "communication", "disposition", "least restrictive", "neutrality"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Capacity:

Assess decision-specific capacity for accommodation and care. Focus on understanding, retention, appreciation and weighing of risks of returning home alone.

Risk:

Integrate OT and collateral evidence: wandering, stove risk, missed medications, finances and vulnerability. Do not treat "wanting home" as sufficient if she cannot appreciate foreseeable harm.

Legal/ethical:

Distinguish unwise capacitous choice from incapacity due to dementia. Apply least restrictive care: consider increased home supports only if realistically safe. If unsafe and capacity absent, pursue substitute decision-maker/guardianship pathway.

Family/system:

Conduct family meeting to explain capacity and risk. Do not let residential bed pressure shortcut legal process. Document assessment, risks, alternatives considered and rationale for disposition.`,
  },
];
