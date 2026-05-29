import { QuizStem } from "../quizData";

export const OA_STEMS: QuizStem[] = [
  {
    id: "OA-001",
    questionNumber: "MEQ-100",
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
    modelAnswer: `Mrs Chen's case is not a request for a simple dementia letter; it is a complex assessment involving public safety, decision-specific capacity, language, family conflict and possible elder financial abuse. The driving concern is immediate because police reported she reversed into a parked car, drove away and later said, "The road moved behind me." That phrase suggests impaired perception, cognition or insight while driving, and the collision demonstrates risk to her and the public. I would advise immediate cessation of driving pending formal licensing process or on-road assessment, and I would notify the licensing authority if required by local law.

The daughter's request for a letter so the family can sell the house "before the nursing home takes everything" is a red flag. It may reflect ordinary family anxiety about aged-care costs, but it may also indicate financial conflict of interest or elder financial abuse. The son says the daughter has changed bank access and stopped Mrs Chen attending mah-jong. Mrs Chen says, "My daughter only wants my money." I would not provide a global incapacity letter for asset transfer. I would maintain neutrality, interview Mrs Chen separately and consider referral to elder abuse, social work or legal services if concerns persist.

The use of the son as interpreter is unacceptable in this context. The stem says Mrs Chen speaks through "her son, who is interpreting," but he is involved in the family conflict. For capacity and abuse assessment, a professional Mandarin interpreter is essential. Without this, her expressed wishes, fears and understanding cannot be reliably assessed, and the clinician risks being drawn into family dynamics.

The GP asks whether I can "declare Mrs Chen globally incapable," but capacity is decision-specific. I would separately assess capacity for driving, financial decisions, accommodation and health care. Dementia may impair one domain more than another. Functional evidence matters: the driving incident, bank access, social restriction, cognition and daily living function all need assessment. I would gather collateral from GP, police, family members, bank/social work information where appropriate, and cognitive/functional assessments.

The ethical tension is between protecting Mrs Chen from harm and preserving autonomy, cultural participation and social connection. Stopping mah-jong may be protective if driving or wandering is unsafe, but it may also be coercive isolation. I would explore whether transport alternatives could maintain social participation safely. My documentation would record professional interpreter use, separate interview, capacity domains, driving advice, financial abuse concerns, family conflict and the limits of my opinion. A consultant answer must resist being used as a tool for either side of the family dispute.`,
  },
  {
    id: "OA-002",
    questionNumber: "MEQ-101",
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
    modelAnswer: `Mr Patel should be treated as having delirium until proven otherwise, not dismissed as someone who has "just got dementia." The daughter's statement, "Dad was doing his own shopping last week," is the crucial clue. Acute deterioration from independent functioning to confusion, line-pulling and paranoia over days is delirium, not ordinary dementia progression. If the team mislabels this as dementia, they will miss reversible causes and may escalate restraint or antipsychotic medication unnecessarily.

The medication chart is itself a likely precipitant. Oxybutynin, amitriptyline, diazepam and PRN promethazine create a heavy anticholinergic and sedative burden, particularly in an older man with urinary retention and falls. I would urgently ask the medical team to review and stop or reduce deliriogenic medications where possible, treat urinary retention, assess infection, pain, constipation, dehydration, hypoxia, electrolytes and other medical precipitants. This is consultation-liaison psychiatry at its core: the psychiatric symptoms are a brain expression of medical illness and medication toxicity.

The assessment has also been culturally and linguistically weak. Mr Patel "speaks Gujarati at home but has been assessed only in English." Language mismatch can make a delirious patient appear more confused and frightened, and can invalidate cognitive or capacity assessment. I would arrange a professional Gujarati interpreter and involve his wife or daughter for baseline and reorientation, while not relying on them as substitutes for clinical interpretation.

The overnight physical restraint after he tried to leave requires review. Restraint may be necessary briefly if there is immediate danger, but it can worsen delirium, fear, injury and loss of dignity. His belief that "the nurses are thieves" may be delirium-related misinterpretation worsened by unfamiliar staff, language barriers, sensory impairment or pain. I would advise least restrictive delirium care: family presence, orientation cues, glasses/hearing aids, sleep-wake support, hydration, mobilisation, pain relief, toileting, low-stimulus environment and one-to-one nursing if needed.

The registrar's request for risperidone "to settle him" should be reframed. Antipsychotics may be used if severe distress or immediate safety risk persists after treating causes and non-pharmacological measures, but they should not be used simply to make investigations easier. If medication is necessary, I would recommend the lowest effective dose, time-limited use, attention to QTc, Parkinsonism, sedation and falls, and daily review. I would document delirium formulation, medical precipitants, medication changes, language needs, restraint minimisation and the rationale for any antipsychotic. The consultant-level response is to lead the ward away from behavioural control and toward delirium treatment.`,
  },
  {
    id: "OA-003",
    questionNumber: "MEQ-102",
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
    modelAnswer: `Mrs Nguyen's behaviour should not be accepted at face value as aggression requiring sedation. The daughter says, "She was a midwife in Vietnam and would be ashamed being washed by male carers." That single phrase reframes the behaviour. Pushing staff away during personal care may reflect modesty, fear, trauma, pain, inability to understand English instructions, or distress at culturally inappropriate care. The correct consultant response is to formulate the behaviour as communication of unmet need before prescribing regular antipsychotic medication.

The staff request that she "needs chemical restraint" is ethically and clinically concerning. Antipsychotics in dementia carry risks of sedation, falls, stroke, cognitive worsening and mortality. They should not be used for staffing convenience or as a substitute for culturally informed care. I would review the PRN quetiapine use over the last two weeks, ask what target symptom it was treating, whether it helped, what adverse effects occurred, and whether consent and review processes were followed. Regular antipsychotic medication would only be considered if there is severe distress or risk that persists after non-pharmacological strategies, and even then it should be time-limited and monitored.

The bruising on both wrists is a safeguarding signal. The explanation that "staff had to hold her for hygiene" may describe a restraint-related injury. I would not assume abuse, but I would investigate immediately through the facility's incident process, review care notes, speak with staff and family, examine the pattern of bruising, and consider reporting pathways if neglect, excessive restraint or elder abuse is suspected. A vulnerable resident's injuries must not be normalised because care is difficult.

No interpreter has been used, which undermines the entire behavioural assessment. I would arrange a Vietnamese interpreter, use simple culturally familiar communication, and ask the daughter for life-history information: preferred name, food, routines, gender preferences for care, trauma history, sleep pattern, pain cues and meaningful activities. A care plan might include female carers for personal care, privacy, explanation before touch, familiar objects, culturally preferred meals, pain assessment and timing care when she is least distressed.

The facility manager's statement that staffing levels are low creates system pressure, but low staffing is not a clinical indication for sedation. I would acknowledge workforce strain while making clear that medication cannot be used to compensate for unsafe staffing. My documentation would state the cultural formulation, restraint concerns, medication rationale, safeguarding actions and behaviour support plan. A consultant answer protects Mrs Nguyen's dignity and safety while supporting staff with a practical plan that reduces distress rather than simply suppressing behaviour.`,
  },
  {
    id: "OA-004",
    questionNumber: "MEQ-103",
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
    modelAnswer: `Mr O'Brien is severely medically and psychiatrically unwell, and the ECT question arises because of urgency rather than convenience. The stem says he has lost 12 kg, is refusing food and says, "I deserve to die because I ruined my family." That combination of severe melancholic depression, psychotic guilt, nutritional compromise and possible suicidal/self-neglect risk makes ECT a clinically appropriate treatment to consider urgently. I would ensure immediate physical care with hydration, nutrition, medical monitoring and assessment of suicide risk while the legal consent process is clarified.

His statement, "Do whatever my wife says; I cannot think," does not create valid consent from the wife. It suggests possible incapacity due to depression, psychomotor retardation, hopelessness or psychotic guilt. I would assess his capacity to consent to ECT specifically: can he understand what ECT is, why it is being recommended, its benefits, risks, alternatives and consequences of refusing; can he retain and weigh that information; and is his decision distorted by delusional guilt? If he lacks capacity, the team must follow the jurisdiction-specific ECT legal pathway, which may involve tribunal or substitute decision safeguards. It should not place the burden on his wife to "sign his brain away."

His wife's phrase, "I want him better, but I can't be responsible for signing his brain away," is important. She is distressed and should be supported, not made to feel personally responsible for authorising a feared treatment. I would meet with her, explain the legal process, the clinical rationale, expected benefits, risks including cognitive side effects, and monitoring. Her views about his values and prior wishes are relevant, but the legal framework must guide consent.

The son's statement that ECT is "barbaric" and his threat of media involvement should not delay necessary care, but it does require careful communication and documentation. I would hold a family meeting if appropriate, correct misinformation without defensiveness, and make clear that clinical decisions will be based on Mr O'Brien's illness, capacity, legal safeguards and best interests or expressed wishes. Media threats should prompt governance support, not defensive avoidance of treatment.

His question about whether ECT is "punishment" must be explored culturally and spiritually. As a Catholic man with psychotic guilt, he may be interpreting treatment through a lens of sin and punishment. I would offer chaplaincy and explain that ECT is a medical treatment for severe depression, not punishment or moral judgement. My documentation would include the severity of depression, physical risk, capacity assessment, ECT legal pathway, family concerns, spiritual support and risk-benefit reasoning. The consultant role is to move the case forward safely while protecting autonomy, legal safeguards and family trust.`,
  },
  {
    id: "OA-005",
    questionNumber: "MEQ-104",
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
    modelAnswer: `Mrs Davies' refusal of palliative surgery may well be a valid capacitous refusal, and the family conflict should not be allowed to convert it automatically into a psychiatric incapacity finding. Her statement, "More days in ICU is not living," is a coherent values-based expression. She is weighing survival time against the burden of high-risk surgery, possible ICU admission and quality of life. A consultant assessment should respect that possibility while still checking for delirium, depression, pain, medication effects and coercion.

The opioid issue requires nuance. The stem says she is "mildly drowsy on opioids." That should prompt assessment at the best possible time, review of sedation, pain control and delirium contributors, but mild drowsiness alone does not prove incapacity. I would ask the team to optimise the timing of assessment, ensure she is comfortable and as alert as possible, and then assess whether she understands the bowel obstruction, proposed surgery, chance of benefit, risk of dying without it, and likely burdens of surgery. Capacity is decision-specific and can exist even in a palliative patient on opioids.

The son's statement, "She is depressed and you must make her have the operation," reflects distress but does not determine capacity. I would screen for depression, demoralisation and delirium, but I would not assume that refusing burdensome treatment equals depression. The daughter's collateral that her mother "has always valued independence and previously said she would not want burdensome treatment" supports the possibility that the refusal is consistent with long-held values. I would explore Mrs Davies' values directly and integrate prior expressed wishes.

The family asks me to "declare her incapable because they cannot agree," and that is the ethical hinge. Capacity assessment is not a tool to resolve family conflict. If Mrs Davies has capacity, her decision stands even if the family disagrees. If she lacks capacity, then substitute decision-making or best-interests processes apply, and prior values become central. I would explain this clearly in a family meeting, support the son's distress and help the team avoid framing the issue as psychiatry deciding who in the family is right.

Her request to speak with "her monk" is clinically relevant. Spiritual support may help her make a settled decision consistent with her Buddhist values. I would facilitate that contact before finalising the decision if time allows, while clarifying surgical urgency with the team. My documentation would describe capacity findings, opioid/delirium considerations, depression screen, values, family views, spiritual request and the final goals-of-care plan. The consultant-level conclusion is that life-prolonging treatment can be refused by a capacitous person, and the role of psychiatry is to protect the validity of the decision, not to rescue the family from disagreement.`,
  },
];
