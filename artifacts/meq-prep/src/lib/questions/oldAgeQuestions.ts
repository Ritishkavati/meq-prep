import { QuizStem } from "../quizData";

export const OA_STEMS: QuizStem[] = [
  {
    id: "OA-001",
    topic: "old_age",
    difficulty: "consultant",
    title: "Dementia, driving, EPOA conflict and elder financial abuse",
    candidateRole: "Consultant old age psychiatrist, memory clinic",
    setting: "Outpatient memory clinic with family meeting",
    stem: `You are the consultant old age psychiatrist reviewing Mrs Chen, an 82-year-old Mandarin-speaking woman with moderate dementia.

Her daughter, who holds enduring power of attorney, asks you to write a letter saying Mrs Chen lacks capacity so the family can sell her car and transfer the house "before the nursing home takes everything." Mrs Chen says through her son, who is interpreting, "My daughter only wants my money." The son says his sister has recently changed bank access and stopped Mrs Chen attending mah-jong with friends.

Mrs Chen was reported to police after reversing into a parked car and driving away. She says, "I have driven for fifty years; no doctor can take my keys." The GP has asked for advice about driving, finances and whether elder abuse is occurring.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Elder financial abuse concern",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "before the nursing home takes everything.",
        whyItMatters: "Requests to document incapacity for asset transfer may indicate financial abuse or conflict of interest.",
        modelWording: "Maintain neutrality and assess for elder financial abuse before providing any capacity letter related to assets.",
        keywords: ["elder abuse", "financial abuse", "EPOA", "asset transfer", "capacity letter", "conflict of interest", "vulnerable adult", "safeguarding"],
      },
      {
        id: "s2",
        name: "Interpreter conflict",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "through her son, who is interpreting",
        whyItMatters: "Family interpreting is inappropriate where capacity, finances and abuse allegations are being assessed.",
        modelWording: "Use a professional Mandarin interpreter and interview Mrs Chen separately to ensure valid capacity and abuse assessment.",
        keywords: ["professional interpreter", "Mandarin", "family interpreter", "capacity assessment", "elder abuse", "cultural safety", "separate interview", "confidentiality"],
      },
      {
        id: "s3",
        name: "Driving risk in dementia",
        category: "risk_others",
        severity: "important",
        clueInStem: "reversing into a parked car and driving away.",
        whyItMatters: "Driving impairment creates risk to Mrs Chen and the public and may require licensing notification.",
        modelWording: "Assess driving safety and advise cessation or formal driving assessment/notification according to local requirements.",
        keywords: ["driving", "dementia", "licensing authority", "public safety", "crash", "keys", "fitness to drive", "risk to others"],
      },
      {
        id: "s4",
        name: "Decision-specific capacity",
        category: "capacity",
        severity: "important",
        clueInStem: "no doctor can take my keys.",
        whyItMatters: "Capacity must be assessed separately for driving, finances, accommodation and health decisions.",
        modelWording: "Assess capacity decision-specifically rather than issuing a global incapacity letter.",
        keywords: ["decision-specific capacity", "driving capacity", "financial capacity", "accommodation", "global incapacity", "dementia", "functional assessment"],
      },
      {
        id: "s5",
        name: "Social isolation as abuse marker",
        category: "family_carer",
        severity: "important",
        clueInStem: "stopped Mrs Chen attending mah-jong with friends.",
        whyItMatters: "Social restriction may indicate coercive control, cultural isolation or carer conflict.",
        modelWording: "Assess whether loss of mah-jong/social contact reflects safety planning, family control or elder abuse.",
        keywords: ["social isolation", "mah-jong", "family control", "elder abuse", "cultural connection", "friends", "coercion", "support"],
      },
      {
        id: "s6",
        name: "Ethical neutrality in family conflict",
        category: "ethics",
        severity: "optional",
        clueInStem: "My daughter only wants my money.",
        whyItMatters: "Clinician must not be used as an instrument in family financial disputes.",
        modelWording: "Avoid aligning with either child and provide an independent, evidence-based opinion limited to the referral question.",
        keywords: ["neutrality", "family conflict", "independent opinion", "ethics", "financial dispute", "professional boundary", "EPOA"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Immediate concerns:

* Do not provide a broad incapacity letter for asset transfer.
* Assess possible elder financial abuse and conflict of interest.

Communication/cultural:

* Use a professional Mandarin interpreter, not family.
* Interview Mrs Chen separately and assess her wishes, fears and understanding.

Capacity:

* Assess decision-specific capacity: driving, finances, accommodation and health.
* Use cognitive, functional and collateral evidence.

Driving:

* Assess public safety risk after collision.
* Advise cessation/formal assessment and notify licensing authority if required.

Family/safeguarding:

* Clarify EPOA scope, bank access changes and social isolation.
* Consider elder abuse service/legal/social work involvement.

Documentation:

* Document interpreter use, capacity domains, driving advice, abuse concerns and rationale.`,
  },
  {
    id: "OA-002",
    topic: "old_age",
    difficulty: "consultant",
    title: "Delirium missed as dementia and anticholinergic burden",
    candidateRole: "Consultant old age psychiatrist, consultation-liaison service",
    setting: "General medical ward",
    stem: `You are the old age psychiatry consultant asked to review Mr Patel, a 78-year-old man admitted with urinary retention and falls.

The ward team says he has "just got dementia" because he is confused and pulling at lines. His daughter says, "Dad was doing his own shopping last week." Medication chart shows oxybutynin, amitriptyline, diazepam and PRN promethazine. Overnight he became agitated and was physically restrained after trying to leave.

Mr Patel speaks Gujarati at home but has been assessed only in English. His wife is distressed and says, "He thinks the nurses are thieves." The medical registrar asks for risperidone to settle him so investigations can proceed.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Delirium not dementia",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "Dad was doing his own shopping last week.",
        whyItMatters: "Acute change from baseline strongly suggests delirium; misdiagnosing dementia delays reversible treatment.",
        modelWording: "Formulate this as delirium until proven otherwise given acute functional change from baseline.",
        keywords: ["delirium", "acute change", "baseline", "dementia misdiagnosis", "reversible", "falls", "urinary retention", "old age"],
      },
      {
        id: "s2",
        name: "Anticholinergic and sedative burden",
        category: "physical_health",
        severity: "critical",
        clueInStem: "oxybutynin, amitriptyline, diazepam and PRN promethazine.",
        whyItMatters: "Anticholinergic and sedative medications can precipitate delirium, falls and urinary retention.",
        modelWording: "Urgently review and reduce anticholinergic/sedative burden as a likely contributor to delirium and falls.",
        keywords: ["anticholinergic burden", "oxybutynin", "amitriptyline", "diazepam", "promethazine", "falls", "urinary retention", "medication review"],
      },
      {
        id: "s3",
        name: "Language and cultural assessment failure",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "assessed only in English.",
        whyItMatters: "Language mismatch can exaggerate confusion and undermine capacity/delirium assessment.",
        modelWording: "Use a professional Gujarati interpreter to assess cognition, distress, pain and psychotic-like experiences accurately.",
        keywords: ["Gujarati interpreter", "language barrier", "cultural safety", "cognitive assessment", "delirium assessment", "communication", "CALD"],
      },
      {
        id: "s4",
        name: "Restraint harm",
        category: "ethics",
        severity: "important",
        clueInStem: "physically restrained after trying to leave.",
        whyItMatters: "Restraint may worsen delirium, trauma, falls and loss of dignity unless necessary and proportionate.",
        modelWording: "Minimise restraint and use least restrictive delirium care: family presence, orientation, pain relief and close nursing.",
        keywords: ["restraint", "least restrictive", "delirium care", "dignity", "family presence", "orientation", "behavioural disturbance"],
      },
      {
        id: "s5",
        name: "Antipsychotic request requires caution",
        category: "consent_refusal",
        severity: "important",
        clueInStem: "asks for risperidone to settle him",
        whyItMatters: "Antipsychotics may be appropriate only for severe distress/risk after addressing causes and non-pharmacological measures.",
        modelWording: "Use antipsychotic only if severe distress or immediate safety risk persists after treating causes, at lowest dose and with monitoring.",
        keywords: ["risperidone", "antipsychotic", "delirium", "lowest dose", "monitoring", "non-pharmacological", "safety risk", "QTc"],
      },
      {
        id: "s6",
        name: "Family collateral and support",
        category: "collateral",
        severity: "optional",
        clueInStem: "His wife is distressed",
        whyItMatters: "Family can provide baseline, reorientation and culturally familiar support.",
        modelWording: "Use wife/daughter collateral for baseline and involve them in reorientation and reassurance if appropriate.",
        keywords: ["family collateral", "wife", "daughter", "baseline", "reorientation", "support", "distress", "delirium management"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Diagnosis:

* Treat as delirium until proven otherwise because daughter reports acute change from independent shopping last week.
* Assess causes: urinary retention, infection, pain, constipation, dehydration, metabolic disturbance and medications.

Medication/physical health:

* Urgently reduce anticholinergic/sedative burden: oxybutynin, amitriptyline, diazepam, promethazine.
* Review falls risk and physical observations.

Cultural/communication:

* Use Gujarati interpreter; English-only assessment is inadequate.

Behaviour/safety:

* Minimise restraint; use family presence, orientation, low-stimulus care, hydration, glasses/hearing aids and one-to-one nursing if needed.
* Antipsychotic only for severe distress or immediate risk, lowest dose, time-limited and monitored.

Governance:

* Document delirium formulation, medication review, restraint rationale/reduction plan and family collateral.`,
  },
  {
    id: "OA-003",
    topic: "old_age",
    difficulty: "consultant",
    title: "CALD resident with BPSD, restraint and cultural safety",
    candidateRole: "Consultant old age psychiatrist, residential aged care outreach",
    setting: "Residential aged care facility behaviour review",
    stem: `You are the consultant old age psychiatrist visiting a residential aged care facility.

Mrs Nguyen is an 85-year-old Vietnamese-speaking woman with dementia who has been calling out at night, pushing away staff during personal care and refusing meals. Staff say, "She is aggressive and needs chemical restraint." Her daughter says, "She was a midwife in Vietnam and would be ashamed being washed by male carers."

Mrs Nguyen has been given PRN quetiapine most nights for two weeks. She has bruising on both wrists, and the facility manager says this occurred because "staff had to hold her for hygiene." No interpreter has been used. The GP asks you to approve regular antipsychotic medication because staffing levels are low.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Behaviour has unmet-need and cultural formulation",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "would be ashamed being washed by male carers.",
        whyItMatters: "Behaviour during personal care may reflect modesty, trauma, pain or communication barriers rather than primary aggression.",
        modelWording: "Formulate pushing staff away as distress during culturally inappropriate personal care, not simply aggression.",
        keywords: ["BPSD", "personal care", "modesty", "Vietnamese", "unmet need", "cultural formulation", "distress", "dementia"],
      },
      {
        id: "s2",
        name: "Chemical restraint request",
        category: "ethics",
        severity: "critical",
        clueInStem: "needs chemical restraint.",
        whyItMatters: "Antipsychotics for staff convenience are unethical and increase morbidity/mortality in dementia.",
        modelWording: "Do not approve antipsychotic as chemical restraint for staffing convenience; use only if severe distress/risk persists after non-drug strategies.",
        keywords: ["chemical restraint", "antipsychotic", "dementia", "staff convenience", "quetiapine", "ethical prescribing", "BPSD", "least restrictive"],
      },
      {
        id: "s3",
        name: "Physical restraint/injury concern",
        category: "risk_vulnerable",
        severity: "important",
        clueInStem: "bruising on both wrists",
        whyItMatters: "Bruising after being held may indicate excessive restraint or neglect and requires safeguarding review.",
        modelWording: "Investigate bruising and holding practices as possible restraint-related harm or elder abuse concern.",
        keywords: ["bruising", "physical restraint", "elder abuse", "safeguarding", "aged care", "wrist bruises", "holding", "vulnerable resident"],
      },
      {
        id: "s4",
        name: "Interpreter absence",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "No interpreter has been used.",
        whyItMatters: "Communication failure may worsen distress, refusal and misinterpretation of behaviour.",
        modelWording: "Use a Vietnamese interpreter and culturally familiar communication strategies to understand distress and preferences.",
        keywords: ["Vietnamese interpreter", "language barrier", "cultural safety", "communication", "dementia", "CALD", "preferences"],
      },
      {
        id: "s5",
        name: "System pressure from low staffing",
        category: "system_pressure",
        severity: "important",
        clueInStem: "staffing levels are low.",
        whyItMatters: "Low staffing must not be medicalised through sedating medication.",
        modelWording: "Acknowledge staffing pressure but separate workforce constraints from clinical indications for medication.",
        keywords: ["staffing levels", "system pressure", "aged care", "sedation", "workforce", "governance", "medication misuse"],
      },
      {
        id: "s6",
        name: "Family as cultural collateral",
        category: "family_carer",
        severity: "optional",
        clueInStem: "She was a midwife in Vietnam",
        whyItMatters: "Family can identify biography-based care strategies that reduce distress.",
        modelWording: "Use daughter's collateral to create a culturally informed behaviour support plan including female carers and privacy.",
        keywords: ["daughter", "life history", "midwife", "biography", "female carers", "privacy", "behaviour support", "family collateral"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Formulation:

* Do not label behaviour simply as aggression.
* Formulate distress around personal care using dementia, language barrier, modesty, pain and trauma/unmet need.

Cultural safety:

* Use Vietnamese interpreter.
* Incorporate daughter's collateral: female carers, privacy, explanation before care, culturally familiar routines and food preferences.

Restraint/medication:

* Do not approve regular antipsychotic for staffing convenience.
* Review PRN quetiapine use, adverse effects and actual indication.
* Antipsychotic only if severe distress/risk persists after non-pharmacological strategies.

Safeguarding:

* Investigate wrist bruising and holding practices.
* Escalate restraint/elder abuse concerns according to facility and regulatory pathways.

Systems:

* Acknowledge staffing pressure but do not medicalise it through sedation.
* Document behaviour plan, medication rationale and safeguarding actions.`,
  },
  {
    id: "OA-004",
    topic: "old_age",
    difficulty: "consultant",
    title: "Late-life depression, ECT consent and carer burnout",
    candidateRole: "Consultant old age psychiatrist, inpatient unit",
    setting: "Older adult psychiatric inpatient unit",
    stem: `You are the consultant old age psychiatrist reviewing Mr O'Brien, a 75-year-old man with severe melancholic depression and psychotic guilt.

He has lost 12 kg, is refusing food and says, "I deserve to die because I ruined my family." The team recommends ECT. Mr O'Brien says, "Do whatever my wife says; I cannot think." His wife says, "I want him better, but I can't be responsible for signing his brain away."

His adult son says ECT is "barbaric" and threatens media involvement. Mr O'Brien is Catholic and asks whether ECT is punishment. The registrar asks whether consent can be obtained from his wife because the situation is urgent.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Severe depression with physical risk",
        category: "physical_health",
        severity: "critical",
        clueInStem: "lost 12 kg, is refusing food",
        whyItMatters: "Malnutrition and refusal of food make treatment urgent and increase morbidity/mortality.",
        modelWording: "Treat this as severe life-threatening depression with nutritional compromise requiring urgent active treatment consideration.",
        keywords: ["melancholic depression", "weight loss", "refusing food", "malnutrition", "psychotic guilt", "ECT", "urgent treatment", "old age"],
      },
      {
        id: "s2",
        name: "Capacity to consent to ECT",
        category: "capacity",
        severity: "critical",
        clueInStem: "I cannot think.",
        whyItMatters: "Capacity cannot be delegated to spouse; depression and psychosis may impair understanding/weighing.",
        modelWording: "Assess Mr O'Brien's capacity to consent to ECT, focusing on understanding, retention, weighing and whether psychotic guilt impairs decision-making.",
        keywords: ["capacity", "ECT consent", "psychotic depression", "weighing", "understanding", "cannot think", "consent", "old age"],
      },
      {
        id: "s3",
        name: "Wife cannot simply consent if patient lacks capacity",
        category: "consent_refusal",
        severity: "important",
        clueInStem: "I can't be responsible for signing his brain away.",
        whyItMatters: "Substitute consent for ECT often has specific statutory safeguards; spouse distress needs support.",
        modelWording: "Clarify local legal requirements for ECT if capacity is absent; do not place sole responsibility on his wife.",
        keywords: ["ECT", "substitute consent", "legal safeguards", "wife distress", "tribunal", "consent law", "capacity absent"],
      },
      {
        id: "s4",
        name: "Family conflict and misinformation",
        category: "family_carer",
        severity: "important",
        clueInStem: "ECT is \"barbaric\"",
        whyItMatters: "Family misinformation may obstruct urgent effective treatment and increase distress.",
        modelWording: "Hold a family meeting to provide accurate ECT information, address fears and clarify roles without allowing misinformation to delay urgent care.",
        keywords: ["family conflict", "ECT misinformation", "barbaric", "family meeting", "psychoeducation", "son", "media threat"],
      },
      {
        id: "s5",
        name: "Religious/cultural meaning",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "asks whether ECT is punishment.",
        whyItMatters: "Religious guilt may be part of depression and requires culturally sensitive explanation, possibly chaplain support.",
        modelWording: "Explore Catholic beliefs and psychotic guilt, offer chaplain support if desired, and explain ECT as treatment not punishment.",
        keywords: ["Catholic", "religious guilt", "punishment", "chaplain", "cultural safety", "psychotic guilt", "spiritual care"],
      },
      {
        id: "s6",
        name: "Governance around media threat",
        category: "governance",
        severity: "optional",
        clueInStem: "threatens media involvement.",
        whyItMatters: "Media threat requires careful documentation and communication but should not alter clinical decision-making.",
        modelWording: "Document decision-making clearly and involve senior governance/communications support if media threats escalate.",
        keywords: ["media threat", "documentation", "governance", "defensible decision", "family complaint", "communication", "clinical independence"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Clinical urgency:

* Severe psychotic/melancholic depression with 12 kg weight loss and food refusal is potentially life-threatening.
* ECT is clinically appropriate to consider urgently.

Capacity/legal:

* Assess Mr O'Brien's capacity to consent to ECT; do not assume wife can simply consent.
* If capacity absent, follow jurisdiction-specific ECT legislation/tribunal or substitute decision pathway.
* Continue physical support: nutrition, hydration and medical monitoring.

Family/cultural:

* Support wife and avoid placing sole responsibility on her.
* Meet family to explain ECT benefits, risks, safeguards and urgency.
* Address Catholic/spiritual concerns and offer chaplain support.

Governance:

* Document capacity assessment, legal process, family discussions, media threat and rationale for treatment plan.`,
  },
  {
    id: "OA-005",
    topic: "old_age",
    difficulty: "consultant",
    title: "End-of-life refusal, family conflict and capacity",
    candidateRole: "Consultant old age psychiatrist, consultation-liaison service",
    setting: "Palliative oncology ward",
    stem: `You are the old age psychiatrist asked to assess Mrs Davies, an 80-year-old woman with metastatic ovarian cancer and bowel obstruction.

The surgical team offers high-risk palliative surgery, but Mrs Davies says, "I have had enough; I want comfort care only." Her son says, "She is depressed and you must make her have the operation." Her daughter says their mother has always valued independence and previously said she would not want burdensome treatment.

Mrs Davies is mildly drowsy on opioids but can describe the surgery, the possibility of dying without it and says, "More days in ICU is not living." The family asks you to declare her incapable because they cannot agree. Mrs Davies is a devout Buddhist and asks to speak with her monk before finalising decisions.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Capacitous refusal may be valid",
        category: "capacity",
        severity: "critical",
        clueInStem: "More days in ICU is not living.",
        whyItMatters: "A competent patient can refuse life-saving or life-prolonging treatment; family disagreement does not remove capacity.",
        modelWording: "Assess capacity carefully; if she understands, appreciates and weighs consequences, her refusal of surgery should be respected.",
        keywords: ["capacity", "refusal of treatment", "palliative surgery", "life-saving treatment", "weighing", "autonomy", "end of life"],
      },
      {
        id: "s2",
        name: "Opioids/drowsiness may affect but not prove incapacity",
        category: "physical_health",
        severity: "critical",
        clueInStem: "mildly drowsy on opioids",
        whyItMatters: "Sedation should prompt optimisation and reassessment, not automatic incapacity finding.",
        modelWording: "Consider opioid sedation and optimise timing/alertness for assessment, but do not equate mild drowsiness with incapacity.",
        keywords: ["opioids", "drowsiness", "capacity assessment", "palliative care", "sedation", "reassessment", "alertness", "pain control"],
      },
      {
        id: "s3",
        name: "Values-based decision-making",
        category: "ethics",
        severity: "important",
        clueInStem: "I have had enough; I want comfort care only.",
        whyItMatters: "Treatment refusal is consistent with values and goals, not necessarily depression.",
        modelWording: "Assess whether refusal reflects stable values and end-of-life goals rather than treatable depression or delirium.",
        keywords: ["values", "comfort care", "autonomy", "goals of care", "palliative care", "depression differential", "end-of-life ethics"],
      },
      {
        id: "s4",
        name: "Family conflict and substitute pressure",
        category: "family_carer",
        severity: "important",
        clueInStem: "you must make her have the operation.",
        whyItMatters: "Family distress may pressure clinicians to override a valid patient decision.",
        modelWording: "Support family distress while clarifying that substitute decision-making applies only if Mrs Davies lacks capacity.",
        keywords: ["family conflict", "son", "operation", "substitute decision-maker", "distress", "family meeting", "palliative", "autonomy"],
      },
      {
        id: "s5",
        name: "Cultural/spiritual support",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "asks to speak with her monk",
        whyItMatters: "Spiritual support may assist informed, values-congruent decision-making.",
        modelWording: "Facilitate access to her monk as part of culturally safe end-of-life decision support.",
        keywords: ["Buddhist", "monk", "spiritual care", "cultural safety", "end of life", "values", "decision support"],
      },
      {
        id: "s6",
        name: "Depression/delirium screen",
        category: "diagnosis_formulation",
        severity: "optional",
        clueInStem: "She is depressed",
        whyItMatters: "Depression or delirium could impair capacity, but must be assessed rather than presumed.",
        modelWording: "Screen for depression, delirium and demoralisation, but do not assume refusal equals mental illness.",
        keywords: ["depression", "delirium", "demoralisation", "diagnostic assessment", "refusal", "palliative psychiatry", "capacity"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Capacity:

* Assess decision-specific capacity for refusing palliative surgery.
* Optimise assessment timing given opioid drowsiness, but mild drowsiness does not equal incapacity.
* If she understands, appreciates and weighs risks, her refusal should be respected.

Clinical formulation:

* Screen for delirium, depression, demoralisation and uncontrolled pain.
* Assess whether refusal is consistent with long-held values and goals.

Ethics/family:

* Explain to family that capacitous refusal of life-prolonging treatment is valid.
* Support son and daughter through family meeting and palliative care involvement.

Cultural/spiritual:

* Facilitate access to her monk before final decision if she wishes.

Governance:

* Document capacity findings, values, family views, spiritual request and agreed goals-of-care plan.`,
  },
];
