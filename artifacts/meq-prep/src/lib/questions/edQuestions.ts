import { QuizStem } from "../quizData";

export const ED_STEMS: QuizStem[] = [
  {
    id: "ED-001",
    questionNumber: "MEQ-028",
    topic: "ed",
    difficulty: "consultant",
    title: "Methamphetamine Psychosis vs First-Episode Schizophrenia",
    candidateRole: "Psychiatry registrar on call, asked to review by ED",
    setting: "Metropolitan ED, Saturday night, 2 am",
    stem: `You are the psychiatry registrar on call. The ED senior registrar phones at 2 am requesting urgent review of Marcus, a 24-year-old man brought in by police after he was found agitated and shouting in a shopping centre carpark, insisting that strangers had "inserted transmitters" into his teeth. He has no prior psychiatric history recorded on the hospital system. A urine drug screen is positive for methamphetamine. He is now calmer after 10 mg oral olanzapine given 90 minutes ago.

The ED registrar says: "He's calmed down, his obs are stable, and I need the bed. My consultant says this is a drug psychosis — once he's settled he can go." When you interview Marcus, he says the transmitters have been monitoring him "for six months." His sister, contacted by phone, says she has been worried about him for eight months: he stopped going to work, began spending hours researching "surveillance technology," and only started using methamphetamine last week "to cope with the fear."`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Psychotic symptoms preceded methamphetamine use",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "When you interview Marcus, he says the transmitters have been monitoring him \"for six months.\"",
        whyItMatters: "Missing this signal means the candidate has accepted a substance-induced explanation without recognising that Marcus describes psychosis for months before methamphetamine use.",
        relatedRisk: "Discharging untreated first-episode schizophrenia from ED carries significant risk of deterioration, self-neglect, and loss to follow-up.",
        relatedSystem: "First-episode psychosis frequently presents via ED; the quality of the initial assessment shapes the patient's entire subsequent treatment trajectory.",
        modelWording: "Recognise the timeline as favouring primary psychosis until proven otherwise, because Marcus reports six months of persecutory beliefs before methamphetamine use began.",
        keywords: ["six months", "before", "precedes", "primary psychosis", "timeline", "first episode", "schizophrenia", "not drug-only", "differential"],
      },
      {
        id: "s2",
        name: "Collateral confirms prodromal functional decline",
        category: "collateral",
        severity: "critical",
        clueInStem: "His sister, contacted by phone, says she has been worried about him for eight months: he stopped going to work, began spending hours researching \"surveillance technology,\" and only started using methamphetamine last week \"to cope with the fear.\"",
        whyItMatters: "Missing this signal means the candidate has relied on the ED presentation alone without recognising collateral evidence of eight months of functional decline and persecutory preoccupation.",
        modelWording: "Use the sister's collateral to formulate a prodrome with functional decline, social withdrawal and persecutory preoccupation rather than treating the positive drug screen as the whole diagnosis.",
        keywords: ["sister", "collateral", "eight months", "stopped work", "functional decline", "prodrome", "informant", "history"],
      },
      {
        id: "s3",
        name: "Bed pressure is driving premature diagnostic closure",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "My consultant says this is a drug psychosis — once he's settled he can go.",
        whyItMatters: "Missing this signal means the candidate has allowed ED flow pressure to override diagnostic uncertainty and their own responsibility for psychiatric assessment.",
        modelWording: "Resist premature discharge by explaining that bed pressure and a positive urine drug screen do not remove the need for a full psychiatric assessment and safe disposition plan.",
        keywords: ["bed pressure", "bed needed", "premature", "consultant directive", "my responsibility", "cannot discharge", "systemic", "escalate"],
      },
      {
        id: "s4",
        name: "Sedation has not resolved the psychotic assessment question",
        category: "disposition",
        severity: "important",
        clueInStem: "He is now calmer after 10 mg oral olanzapine given 90 minutes ago.",
        whyItMatters: "Missing this signal means the candidate has equated behavioural calm after olanzapine with resolution of psychosis and readiness for discharge.",
        modelWording: "Reassess Marcus when he is sufficiently alert, because sedation can suppress agitation without resolving psychosis or clarifying risk.",
        keywords: ["olanzapine", "sedated", "observation period", "mental state", "alert", "not resolved", "full assessment", "calm not equal to resolved"],
      },
      {
        id: "s5",
        name: "Risk assessment is required before discharge",
        category: "risk_self",
        severity: "important",
        clueInStem: "The ED senior registrar phones at 2 am requesting urgent review of Marcus, a 24-year-old man brought in by police after he was found agitated and shouting in a shopping centre carpark, insisting that strangers had \"inserted transmitters\" into his teeth.",
        whyItMatters: "Missing this signal means the candidate has considered discharge without assessing self-neglect, accidental harm and vulnerability arising from public psychotic behaviour.",
        modelWording: "Assess risk before any disposition decision, linking his police presentation, persecutory beliefs, insight, support, self-care and vulnerability in public settings.",
        keywords: ["risk assessment", "self-neglect", "alone", "carpark", "insight", "support at home", "public safety", "before discharge"],
      },
      {
        id: "s6",
        name: "First-episode psychosis pathway is required",
        category: "disposition",
        severity: "important",
        clueInStem: "He has no prior psychiatric history recorded on the hospital system.",
        whyItMatters: "Missing this signal means the candidate has failed to create a first-episode psychosis pathway for a patient at risk of being lost after ED discharge.",
        modelWording: "Arrange admission or urgent early psychosis follow-up with documented diagnostic uncertainty, because a first-presentation psychosis cannot leave ED without a clear pathway.",
        keywords: ["early psychosis", "follow-up", "CATT", "admission", "next-day review", "discharge plan", "first episode", "sister briefed"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `The critical diagnostic issue is the timeline. Marcus tells me that the transmitters have been monitoring him "for six months," while his sister says he has been deteriorating for eight months and only started using methamphetamine last week "to cope with the fear." That makes a primary psychotic disorder, including first-episode schizophrenia, the working diagnosis until proven otherwise. The positive urine drug screen may explain acute escalation, but it does not explain months of persecutory beliefs and functional decline.

I would not accept the proposed drug-psychosis discharge on the basis that he is now calmer. He received 10 mg of oral olanzapine 90 minutes ago, and behavioural calm after sedation is not the same as resolution of psychosis, restoration of insight, or safe disposition. I need to complete a full mental state examination when he is sufficiently alert and document the diagnostic uncertainty clearly.

The ED consultant's pressure to clear the bed is understandable but cannot determine the psychiatric decision. The statement "once he's settled he can go" is premature diagnostic closure under system pressure. I remain responsible for my assessment and, if disagreement persists, I would escalate to my own consultant or the on-call psychiatric consultant rather than providing a discharge endorsement that I do not believe is clinically safe.

My risk assessment would address self-neglect, vulnerability in public, risk of acting on persecutory beliefs, substance use, family supports, insight and willingness to accept follow-up. His sister's collateral is central to the formulation and should inform both the diagnosis and the safety plan.

Disposition would depend on the completed assessment, but admission is likely because this is probable first-episode psychosis with functional decline and uncertain insight. If discharge were considered, it would require a documented risk formulation, involvement of his sister, a specific safety plan, and urgent early psychosis or CATT review within 24–48 hours. Discharge with no first-episode psychosis pathway would be unsafe.`,
  },

  {
    id: "ED-002",
    questionNumber: "MEQ-029",
    topic: "ed",
    difficulty: "consultant",
    title: "Anorexia Nervosa Refusing NG Feeding — Capacity and Involuntary Treatment",
    candidateRole: "Consultant psychiatrist called urgently to ED",
    setting: "General hospital ED, late afternoon",
    stem: `You are the consultant psychiatrist on call. The ED consultant phones urgently about Eliza, a 22-year-old woman with a ten-year history of anorexia nervosa, brought by ambulance. Her current BMI is 12.5. Investigations show: heart rate 44 bpm, potassium 2.6 mmol/L, phosphate 0.55 mmol/L, and glucose 3.1 mmol/L. She is alert and articulate, making sustained eye contact, and declines nasogastric feeding, saying: "I understand exactly what you're telling me. I know the risks and I choose to go home. This is my life."

The ED consultant says he is willing to "accept her decision" because she is "calm, oriented, and not suicidal." Eliza says she does not want her parents, who are in the waiting room, to be involved. The treating ED team has commenced IV electrolyte replacement, which she is tolerating.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Capacity requires formal assessment beyond calm orientation",
        category: "capacity",
        severity: "critical",
        clueInStem: "The ED consultant says he is willing to \"accept her decision\" because she is \"calm, oriented, and not suicidal.\"",
        whyItMatters: "Missing this signal means the candidate has accepted a life-threatening refusal without assessing whether Eliza can use and weigh information distorted by anorexia nervosa.",
        modelWording: "Assess capacity formally for this specific refusal, because calmness, orientation and absence of suicidality do not establish the ability to use and weigh risk in severe anorexia nervosa.",
        keywords: ["capacity", "decision-specific", "use and weigh", "four criteria", "understand", "retain", "weigh", "communicate", "not just calm", "formal assessment"],
      },
      {
        id: "s2",
        name: "Medically unstable anorexia nervosa with refeeding risk",
        category: "physical_health",
        severity: "critical",
        clueInStem: "Investigations show: heart rate 44 bpm, potassium 2.6 mmol/L, phosphate 0.55 mmol/L, and glucose 3.1 mmol/L.",
        whyItMatters: "Missing this signal means the candidate has treated the problem as a psychiatric consent issue while overlooking immediate cardiac, electrolyte and refeeding risks.",
        relatedRisk: "Patients with anorexia nervosa and BMI below 13 have a mortality rate that may exceed 5–10% per admission; this is one of the highest mortality rates of any psychiatric illness.",
        modelWording: "Identify Eliza as medically unstable and requiring inpatient medical management with cardiac monitoring and refeeding precautions, regardless of the capacity outcome.",
        keywords: ["bradycardia", "HR 44", "potassium", "phosphate", "refeeding", "cardiac monitoring", "medical emergency", "BMI 12.5", "life-threatening"],
      },
      {
        id: "s3",
        name: "Illness-driven refusal may impair use-and-weigh capacity",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "I know the risks and I choose to go home. This is my life.",
        whyItMatters: "Missing this signal means the candidate has mistaken the ability to repeat risks for genuine weighing of a life-threatening refusal in severe anorexia nervosa.",
        modelWording: "Clarify whether the refusal is driven by anorexic cognitions, because articulating risk is not enough if fear of weight gain prevents Eliza from weighing that risk realistically.",
        keywords: ["ego-syntonic", "distorted", "use and weigh", "anorexia cognition", "illness-driven refusal", "fear weight gain", "impaired capacity", "probe weigh"],
      },
      {
        id: "s4",
        name: "Legal authority may be required for life-saving treatment",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "She is alert and articulate, making sustained eye contact, and declines nasogastric feeding, saying: \"I understand exactly what you're telling me. I know the risks and I choose to go home. This is my life.\"",
        whyItMatters: "Missing this signal means the candidate has not identified the need for a lawful treatment pathway if Eliza lacks capacity and continues to refuse life-saving feeding.",
        modelWording: "Consider the relevant Mental Health Act or guardianship framework if capacity is impaired, documenting why involuntary treatment is necessary and proportionate to the medical risk.",
        keywords: ["mental health act", "involuntary", "guardianship", "lacks capacity", "legislative threshold", "MHA", "jurisdiction", "document"],
      },
      {
        id: "s5",
        name: "Parents may be needed for collateral despite stated refusal",
        category: "family_carer",
        severity: "important",
        clueInStem: "Eliza says she does not want her parents, who are in the waiting room, to be involved.",
        whyItMatters: "Missing this signal means the candidate has accepted exclusion of family without considering collateral and safety needs in a potentially incapacitous medical emergency.",
        modelWording: "Explain transparently to Eliza why parental collateral may be necessary, limiting disclosure where possible while prioritising safety in a life-threatening presentation.",
        keywords: ["parents", "privacy", "collateral", "family", "life-threatening", "transparent", "consent to involve", "emergency exception"],
      },
      {
        id: "s6",
        name: "Specialist eating disorder management is required",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "The treating ED team has commenced IV electrolyte replacement, which she is tolerating.",
        whyItMatters: "Missing this signal means the candidate has left a medically severe eating disorder to ED and general psychiatry without specialist refeeding and multidisciplinary input.",
        modelWording: "Notify the specialist eating disorder team and dietetics urgently, because safe refeeding, medical monitoring and psychiatric formulation require coordinated expertise.",
        keywords: ["eating disorder specialist", "multidisciplinary", "dietitian", "refeeding", "specialist service", "consult", "expertise"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `Eliza is medically unstable. The heart rate of 44 bpm, potassium of 2.6 mmol/L, phosphate of 0.55 mmol/L and BMI of 12.5 indicate immediate risk of arrhythmia, collapse and refeeding complications. This is not primarily a question of whether she appears calm in conversation; she requires inpatient medical management, cardiac monitoring and specialist refeeding precautions.

The ED consultant's plan to "accept her decision" because she is "calm, oriented, and not suicidal" is not a capacity assessment. Capacity is decision-specific and requires assessment of understanding, retention, use and weighing of information, and communication of a decision. In anorexia nervosa, the key question is often not whether the patient can repeat the risk but whether anorexic cognitions prevent them from weighing that risk realistically.

I would assess what Eliza believes will happen if she goes home, how she understands the significance of her bradycardia and electrolyte abnormalities, what weight gain means to her, and whether her refusal is driven by fear of treatment rather than an autonomous values-based decision. Her statement "I know the risks and I choose to go home" must be tested, not accepted at face value.

If she lacks capacity for this decision and continues to refuse nasogastric feeding or admission, I would use the relevant legal pathway, whether Mental Health Act or guardianship legislation depending on jurisdiction, to authorise necessary treatment. The decision must be documented as necessary, proportionate and the least restrictive safe response to an immediately life-threatening illness.

I would involve the specialist eating disorder service, dietetics and the medical team urgently, because safe management requires coordinated refeeding expertise. I would also discuss parental involvement with Eliza transparently. Her wish for privacy matters, but in a medical emergency where capacity may be impaired, parental collateral about recent intake, weight trajectory and supports may be essential to safe treatment and disposition.`,
  },

  {
    id: "ED-003",
    questionNumber: "MEQ-030",
    topic: "ed",
    difficulty: "consultant",
    title: "Acute Confusional State in an Older Woman — Delirium Missed as Dementia",
    candidateRole: "Consultation-liaison psychiatry registrar called to ED",
    setting: "District general hospital ED, 10 pm",
    stem: `You are the consultation-liaison psychiatry registrar on call. ED asks you to review Nora, a 78-year-old woman brought by her daughter at 10 pm after two days of increasing confusion, calling out at night, and refusing to eat or take her medications. She lives alone in a granny flat behind her daughter's house. Her GP commenced oxybutynin 5 mg twice daily for urinary incontinence three weeks ago.

On assessment, Nora is alert but disoriented in time and place, has fluctuating attention, and is easily distracted. She cannot complete serial sevens. She scored 21 on her MMSE at the GP one month ago; her current MMSE is 12. She is distressed and repeatedly calls for her late husband. Her MSE is otherwise unremarkable, with no sustained psychotic phenomena and no perceptual disturbance on direct questioning.

The ED registrar tells you: "She's been here twice before for confusion — both times they said it was her dementia and she went home. Her daughter says she's been going downhill anyway."`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Delirium is the working diagnosis",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "On assessment, Nora is alert but disoriented in time and place, has fluctuating attention, and is easily distracted.",
        whyItMatters: "Missing this signal means the candidate has accepted dementia progression despite an acute fluctuating attentional disorder consistent with delirium.",
        modelWording: "Recognise delirium as the working diagnosis, because Nora has acute onset, fluctuating attention and disorientation rather than a simple progression of dementia.",
        keywords: ["delirium", "acute onset", "fluctuating", "attentional", "MMSE drop", "nine points", "primary diagnosis", "not dementia", "confusion"],
      },
      {
        id: "s2",
        name: "Oxybutynin is a likely anticholinergic precipitant",
        category: "physical_health",
        severity: "critical",
        clueInStem: "Her GP commenced oxybutynin 5 mg twice daily for urinary incontinence three weeks ago.",
        whyItMatters: "Missing this signal means the candidate has failed to identify a reversible medication precipitant for Nora's delirium in a vulnerable older adult.",
        relatedRisk: "Older adults with any baseline cognitive impairment have markedly increased vulnerability to anticholinergic delirium, which can be prolonged and associated with functional decline.",
        modelWording: "Cease oxybutynin and communicate the medication risk to ED and the GP, because its anticholinergic burden plausibly precipitated Nora's delirium.",
        keywords: ["oxybutynin", "anticholinergic", "precipitant", "cease", "three weeks ago", "medication review", "older adult", "cognitive impairment", "cause"],
      },
      {
        id: "s3",
        name: "Dementia label has obscured repeated acute deterioration",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "She's been here twice before for confusion — both times they said it was her dementia and she went home.",
        whyItMatters: "Missing this signal means the candidate has allowed a dementia label to absorb acute episodes that each require investigation for delirium.",
        modelWording: "Challenge the repeated dementia attribution, because prior similar ED presentations may have been missed delirium rather than inevitable cognitive decline.",
        keywords: ["dementia not explain", "acute deterioration", "prior missed", "delirium on dementia", "not baseline", "diagnostic work-up", "pattern", "repeated presentations"],
      },
      {
        id: "s4",
        name: "Discharge home is unsafe during active delirium",
        category: "immediate_safety",
        severity: "important",
        clueInStem: "ED asks you to review Nora, a 78-year-old woman brought by her daughter at 10 pm after two days of increasing confusion, calling out at night, and refusing to eat or take her medications.",
        whyItMatters: "Missing this signal means the candidate has considered discharge despite Nora being delirious, not eating, missing medication and living semi-independently.",
        modelWording: "Admit Nora for delirium investigation and management, because she cannot safely self-care while disoriented, refusing food and missing medications.",
        keywords: ["admit", "not safe to discharge", "delirium", "not eating", "lives alone", "supervision", "inpatient", "unsafe discharge"],
      },
      {
        id: "s5",
        name: "Daughter's collateral is needed to establish baseline and trajectory",
        category: "collateral",
        severity: "important",
        clueInStem: "Her daughter says she's been going downhill anyway.",
        whyItMatters: "Missing this signal means the candidate has accepted a vague decline narrative without clarifying Nora's baseline function, medication adherence and timing of acute change.",
        modelWording: "Clarify baseline and trajectory with Nora's daughter, because the distinction between chronic decline and acute delirium depends on precise collateral history.",
        keywords: ["daughter", "collateral", "baseline", "timeline", "interrogate", "medications", "function", "prior episodes", "informant"],
      },
      {
        id: "s6",
        name: "Systematic delirium work-up is required",
        category: "disposition",
        severity: "important",
        clueInStem: "She scored 21 on her MMSE at the GP one month ago; her current MMSE is 12.",
        whyItMatters: "Missing this signal means the candidate has focused on oxybutynin alone without screening for the multifactorial medical causes of delirium in an older adult.",
        modelWording: "Investigate delirium systematically with medication review, infection screen, metabolic tests and non-pharmacological management, because the MMSE decline indicates acute cerebral dysfunction.",
        keywords: ["delirium screen", "infection", "electrolytes", "FBC", "EUC", "MSU", "multifactorial", "non-pharmacological", "medication review", "hydration"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `Nora has delirium until proven otherwise. The acute two-day change, fluctuating attention, disorientation, inability to complete serial sevens and fall in MMSE from 21 to 12 are not explained by ordinary dementia progression. Calling this "her dementia" would miss an acute medical syndrome with significant morbidity and mortality.

The most likely contributor is oxybutynin, commenced three weeks ago. In a 78-year-old woman with probable baseline cognitive impairment, its anticholinergic effect is a plausible and reversible precipitant. I would recommend immediate cessation, communicate this clearly to ED and the GP, and review the rest of her medication chart for additional anticholinergic or sedating burden.

The previous ED presentations are important because they suggest a pattern of diagnostic closure. The statement that "both times they said it was her dementia and she went home" should prompt a careful review of whether prior episodes were also missed delirium. Dementia increases delirium risk; it does not remove the need to investigate each acute deterioration.

I would obtain detailed collateral from Nora's daughter about her true baseline, the timing of this episode, oral intake, medication adherence, falls, urinary symptoms, pain and previous recovery after similar events. Her daughter's comment that Nora has been "going downhill anyway" needs clarification rather than passive acceptance.

Nora should not be discharged tonight. She is confused, refusing food and medications, and lives semi-independently in a granny flat. I would recommend admission for delirium work-up, including infection screen, electrolytes, renal and liver function, medication review and hydration assessment, with non-pharmacological management such as orientation cues, sleep-wake support, family presence and avoidance of unnecessary sedation.`,
  },

  {
    id: "ED-004",
    questionNumber: "MEQ-031",
    topic: "ed",
    difficulty: "consultant",
    title: "Acute Behavioural Disturbance in ED — Restraint Demand Before Assessment",
    candidateRole: "Psychiatry registrar on call, 11 pm",
    setting: "Regional hospital ED",
    stem: `You receive an urgent call from the ED charge nurse at 11 pm. Jake, a 32-year-old man with a known history of schizophrenia, is in bay 4, shouting and has overturned a chair. He was brought in by his mother after two days of refusing his depot antipsychotic, refusing food, and making threatening comments to her at home. He is not currently assaulting anyone. He is shouting, "I know what you're all doing to me — I can see it." Security staff are present at a distance.

The ED consultant comes on the phone and says: "We need him sedated now before you assess him — he's not safe in the department." Jake's mother pulls you aside and says he had a "very bad experience six months ago — they held him down and injected him — he's been terrified of hospitals since." She says he has been "really well" on his depot until two days ago, when something happened at his supported accommodation that upset him. His last risperidone LAI was 22 days ago and is prescribed three-weekly.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "De-escalation is required before chemical restraint",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "He is not currently assaulting anyone.",
        whyItMatters: "Missing this signal means the candidate has accepted chemical restraint before attempting less restrictive de-escalation in a distressed but not currently assaultive patient.",
        modelWording: "Attempt verbal de-escalation first by reducing stimulation, approaching calmly and engaging Jake directly, because he is distressed and psychotic but not currently assaulting anyone.",
        keywords: ["de-escalation", "not assaulting", "verbal", "calm approach", "before sedation", "least restrictive", "premature restraint", "reduce stimulation"],
      },
      {
        id: "s2",
        name: "Prior restraint trauma must shape the ED approach",
        category: "trauma",
        severity: "critical",
        clueInStem: "Jake's mother pulls you aside and says he had a \"very bad experience six months ago — they held him down and injected him — he's been terrified of hospitals since.\"",
        whyItMatters: "Missing this signal means the candidate has repeated the intervention that previously traumatised Jake and is likely to escalate fear and future avoidance of care.",
        modelWording: "Use a trauma-informed approach by avoiding a crowd of staff, explaining each step honestly and seeking Jake's agreement wherever possible because prior restraint has made hospitals frightening for him.",
        keywords: ["trauma-informed", "prior restraint", "terrified", "re-traumatise", "damage relationship", "mother information", "honest", "agreement", "approach"],
      },
      {
        id: "s3",
        name: "Recent accommodation event may be the precipitant",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "She says he has been \"really well\" on his depot until two days ago, when something happened at his supported accommodation that upset him.",
        whyItMatters: "Missing this signal means the candidate has assumed relapse from depot refusal without clarifying the acute psychosocial or traumatic event that may have precipitated deterioration.",
        modelWording: "Clarify what happened at the supported accommodation, because the precipitant may alter formulation, risk and the immediate management plan.",
        keywords: ["precipitant", "accommodation", "what happened", "not just relapse", "stress response", "substance", "diagnosis first", "before sedation", "formulation"],
      },
      {
        id: "s4",
        name: "Depot is due and may contribute to breakthrough symptoms",
        category: "physical_health",
        severity: "important",
        clueInStem: "His last risperidone LAI was 22 days ago and is prescribed three-weekly.",
        whyItMatters: "Missing this signal means the candidate has not connected his missed depot interval with possible breakthrough psychosis and treatment planning.",
        modelWording: "Consider depot administration once Jake is settled, because he is at the end of his three-weekly dosing interval and may be experiencing breakthrough symptoms.",
        keywords: ["LAI", "depot due", "22 days", "three-weekly", "pharmacokinetic", "breakthrough", "plasma level", "administer with agreement"],
      },
      {
        id: "s5",
        name: "Mother's safety at home requires assessment",
        category: "risk_others",
        severity: "important",
        clueInStem: "He was brought in by his mother after two days of refusing his depot antipsychotic, refusing food, and making threatening comments to her at home.",
        whyItMatters: "Missing this signal means the candidate has considered ED tranquillisation without assessing the safety of the carer who has been receiving threats at home.",
        modelWording: "Assess his mother's safety directly, because threatening comments at home affect risk formulation and whether Jake can safely return to that environment.",
        keywords: ["threatening", "mother", "risk to others", "home safety", "prior two days", "direct assessment", "disposition", "carer safety"],
      },
      {
        id: "s6",
        name: "Mental Health Act assessment may be needed if engagement fails",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "We need him sedated now before you assess him — he's not safe in the department.",
        whyItMatters: "Missing this signal means the candidate has used informal coercion without considering the proper legal framework if Jake cannot engage voluntarily.",
        modelWording: "Initiate a formal Mental Health Act assessment if voluntary engagement fails, documenting the de-escalation attempts, risks and criteria for any involuntary intervention.",
        keywords: ["MHA", "mental health act", "involuntary", "criteria", "after de-escalation", "document", "explain to Jake", "formal assessment"],
      },
      {
        id: "s7",
        name: "Mother is both collateral source and distressed carer",
        category: "family_carer",
        severity: "important",
        clueInStem: "Jake's mother pulls you aside and says he had a \"very bad experience six months ago — they held him down and injected him — he's been terrified of hospitals since.\"",
        whyItMatters: "Missing this signal means the candidate has overlooked the person providing essential history, experiencing threats, and trying to keep Jake engaged with care.",
        modelWording: "Acknowledge Jake's mother as a distressed carer and key collateral source, because her account changes both the risk formulation and the safest engagement strategy.",
        keywords: ["mother", "acknowledge", "distress", "collateral", "carer", "direct", "information", "not left waiting", "thank"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6", "s7"],
      lowYield: [],
    },
    modelAnswer: `Jake is agitated and psychotic, but the stem is explicit that he is "not currently assaulting anyone." I would not accept sedation before assessment as the default response. The immediate task is to make the environment safer, reduce stimulation, keep security at a respectful distance, approach calmly with as few staff as possible, and attempt verbal de-escalation before pharmacological restraint.

The most important engagement issue is his previous restraint trauma. His mother says that six months ago "they held him down and injected him" and that he has been terrified of hospitals since. Repeating a forced injection without first attempting alternatives risks re-traumatising him, worsening the current agitation and making future presentations harder to manage.

I still need a diagnostic and risk formulation. The deterioration followed an event at supported accommodation two days ago and coincides with refusing food and depot antipsychotic. His last risperidone LAI was 22 days ago on a three-weekly schedule, so he may be experiencing breakthrough symptoms at the end of the dosing interval, but I would also assess for substance use, physical illness and trauma or conflict at the accommodation.

His mother is not only a collateral informant. She has brought him to ED after two days of threats at home and needs to be asked directly whether she feels safe, what he said, whether weapons or other risks are present, and whether he can return home if discharged. Her account should shape both the immediate safety plan and the final disposition.

If Jake settles, I would offer medication and depot discussion collaboratively and consider admission or intensive community follow-up depending on mental state, risk, accommodation context and carer safety. If de-escalation fails and he cannot engage safely, I would move to a formal Mental Health Act assessment rather than informal coercion, documenting the legal criteria, the attempts at least restrictive engagement, and why any medication or restraint is necessary and proportionate.`,
  },

  {
    id: "ED-005",
    questionNumber: "MEQ-032",
    topic: "ed",
    difficulty: "consultant",
    title: "Adolescent NSSI in ED — Safe Discharge, Parental Conflict, Child Protection",
    candidateRole: "On-call CAMHS registrar asked to review by paediatric ED",
    setting: "Paediatric ED, 9 pm on a weeknight",
    stem: `You are the on-call CAMHS registrar. The paediatric ED asks you to review Jade, a 15-year-old girl who presented with superficial lacerations to her forearms. She self-inflicted the cuts with scissors three hours ago. Jade tells you she "snapped" after an argument with her mother and "didn't actually want to die." She denies current suicidal ideation. She has no prior psychiatric presentations.

Her parents are separated. Her mother is crying in the waiting room and tells the nurse she has seen healed cuts before but thought Jade would stop if she kept the matter within the family. Her father arrived 20 minutes later and is demanding Jade be admitted "so the court can see what her mother is doing to her." The two parents are arguing loudly in the corridor. The paediatric ED consultant says: "If she's not suicidal, she should go home tonight — we need the bed."

When you speak to Jade alone, she tells you she has been cutting for approximately four months and has been hiding it. She shows you multiple healed scars. She says she "doesn't feel safe at home" but cannot say more. She becomes tearful when her mother's name is mentioned.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Chronic hidden NSSI requires structured risk assessment",
        category: "risk_self",
        severity: "critical",
        clueInStem: "When you speak to Jade alone, she tells you she has been cutting for approximately four months and has been hiding it.",
        whyItMatters: "Missing this signal means the candidate has treated denial of current suicidal ideation as low risk despite four months of concealed self-injury.",
        modelWording: "Assess the function, frequency, escalation and suicidal overlap of Jade's self-injury, because chronic hidden NSSI remains clinically significant even when she denies current suicidal intent.",
        keywords: ["NSSI", "non-suicidal", "four months", "hidden", "chronic", "healed scars", "significant distress", "not low risk", "predictor", "structured assessment"],
      },
      {
        id: "s2",
        name: "Home safety disclosure must be explored before discharge",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "She says she \"doesn't feel safe at home\" but cannot say more.",
        whyItMatters: "Missing this signal means the candidate has considered discharge to the very environment Jade identifies as unsafe without clarifying the nature of that risk.",
        modelWording: "Explore Jade's statement gently and privately, because discharge cannot be safe until the home safety concern is understood.",
        keywords: ["not feel safe", "home unsafe", "explore", "non-leading", "serious disclosure", "direct", "gentle", "clarify", "child protection trigger", "cannot dismiss"],
      },
      {
        id: "s3",
        name: "Child protection notification may be required",
        category: "child_protection",
        severity: "critical",
        clueInStem: "She becomes tearful when her mother's name is mentioned.",
        whyItMatters: "Missing this signal means the candidate has failed to recognise that an adolescent's unsafe-home disclosure and distress around a parent may meet the threshold for child protection action.",
        relatedRisk: "Returning Jade to an unsafe environment on the basis of 'no suicidal ideation' could place her at significant harm.",
        modelWording: "Consider mandatory child protection notification if assessment raises reasonable suspicion of harm, because certainty is not required before reporting an unsafe home concern.",
        keywords: ["child protection", "mandatory notification", "reasonable suspicion", "not certainty", "duty to notify", "safe home", "explore", "tonight", "authority"],
      },
      {
        id: "s4",
        name: "Parental conflict must not drive the clinical decision",
        category: "family_carer",
        severity: "important",
        clueInStem: "Her father arrived 20 minutes later and is demanding Jade be admitted \"so the court can see what her mother is doing to her.\"",
        whyItMatters: "Missing this signal means the candidate has allowed family court conflict to contaminate disposition rather than making a child-centred clinical decision.",
        modelWording: "Separate the parents and interview them individually, because parental conflict and court motives must be contained so Jade's clinical needs remain central.",
        keywords: ["separate parents", "parental conflict", "private space", "court not indication", "clinical decision", "Jade's needs", "separately", "manage environment"],
      },
      {
        id: "s5",
        name: "Mother's concealment of previous cutting is important collateral",
        category: "collateral",
        severity: "important",
        clueInStem: "Her mother is crying in the waiting room and tells the nurse she has seen healed cuts before but thought Jade would stop if she kept the matter within the family.",
        whyItMatters: "Missing this signal means the candidate has not explored why Jade's self-harm remained hidden and whether the family can respond safely after discharge.",
        modelWording: "Clarify with Jade's mother what she knew and why help was not sought earlier, because this informs family capacity, safety planning and possible child protection concerns.",
        keywords: ["mother aware", "concealed", "covering up", "why not seek help", "family dynamics", "separate", "collateral", "capacity to respond", "disclosure safe"],
      },
      {
        id: "s6",
        name: "Discharge requires confirmed home safety and urgent CAMHS follow-up",
        category: "disposition",
        severity: "important",
        clueInStem: "If she's not suicidal, she should go home tonight — we need the bed.",
        whyItMatters: "Missing this signal means the candidate has accepted a binary no-suicidality discharge despite chronic NSSI, unsafe-home disclosure and unresolved parental conflict.",
        modelWording: "Discharge Jade only if home safety is clarified, a collaborative safety plan is agreed and urgent CAMHS follow-up is arranged; otherwise admit for further assessment and protection.",
        keywords: ["discharge only if safe", "home safety clarified", "safety plan", "CAMHS follow-up", "urgent review", "48 hours", "not binary", "admission if unsafe", "robust plan"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `Jade's presentation cannot be reduced to "not suicidal, therefore discharge." She has been cutting for approximately four months, has multiple healed scars and has hidden the behaviour. Even if the current episode was not intended to end her life, chronic concealed NSSI in a 15-year-old requires assessment of function, escalation, emotional regulation, shame, suicidal overlap and protective supports.

The most important immediate issue is her statement that she "doesn't feel safe at home." That must be explored privately, gently and without leading questions. Her tearfulness when her mother's name is mentioned and the history of self-harm being kept within the family raise concern about whether home is emotionally or physically safe, and whether Jade can disclose distress there.

The child protection threshold depends on what further assessment reveals, but I would not wait for certainty if there is reasonable suspicion of harm, neglect or unsafe caregiving. The duty to notify sits with me, not with Jade, and I would explain the limits of confidentiality in developmentally appropriate language before taking action where possible.

The parents need to be separated and managed calmly. The father's demand for admission "so the court can see what her mother is doing to her" is not a clinical indication, and the mother's decision to keep previous cutting within the family requires careful exploration rather than blame. I would interview each parent separately, keep the focus on Jade's safety and avoid allowing family court conflict to determine disposition.

Discharge tonight is only appropriate if I can clarify the home safety concern, complete a credible safety plan with Jade and a safe adult, restrict access to means, and arrange urgent CAMHS follow-up within 48–72 hours. If home safety remains unclear, if Jade cannot speak safely, or if child protection planning cannot be completed, admission under CAMHS or paediatrics for further assessment and safeguarding is the safer disposition.`,
  },
];
