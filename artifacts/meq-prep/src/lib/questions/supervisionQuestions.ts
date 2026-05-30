import type { QuizStem } from "../quizData";

export const SUP_STEMS: QuizStem[] = [
  {
    id: "SUP-001",
    questionNumber: "MEQ-043",
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
        name: "Motorway overpass behaviour remains high risk despite denial",
        category: "risk_self",
        severity: "critical",
        clueInStem: "A Stage 1 registrar phones at 2 am asking for permission to discharge Liam, a 23-year-old man brought to ED by police after standing on a motorway overpass.",
        whyItMatters: "Missing this signal means the candidate has allowed denial of suicidal ideation to outweigh a high-lethality behaviour immediately preceding ED presentation.",
        relatedRisk: "Risk of imminent self-harm remains elevated despite verbal denial.",
        modelWording: "Recognise standing on a motorway overpass as high-lethality suicidal behaviour because later denial cannot make the presentation safe for simple discharge.",
        keywords: ["overpass", "motorway", "high lethality", "denial", "suicidal", "risk", "not safe"],
      },
      {
        id: "s2",
        name: "Message to ex-partner suggests imminent risk",
        category: "risk_others",
        severity: "critical",
        clueInStem: "Police report Liam had sent his ex-partner a message saying, \"You will all be sorry tomorrow.\"",
        whyItMatters: "Missing this signal means the candidate has overlooked a possible farewell, threat or retaliatory communication that changes both self-harm and interpersonal risk.",
        relatedRisk: "It raises both self-harm and possible interpersonal violence concerns.",
        modelWording: "Treat the message to the ex-partner as an imminent risk signal because it may indicate suicidal communication, grievance or retaliatory intent.",
        keywords: ["sorry tomorrow", "message", "farewell", "threat", "retaliatory", "ex-partner", "imminent"],
      },
      {
        id: "s3",
        name: "Personality-language shortcut is stigmatising and unsafe",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "The registrar says Liam has \"borderline traits\" and that admission will \"reinforce behaviour.\"",
        whyItMatters: "Missing this signal means the candidate has accepted a stigmatising label as a formulation and used it to minimise acute high-risk behaviour.",
        relatedSystem: "This requires corrective supervision on formulation and stigma.",
        modelWording: "Challenge the borderline-traits formulation because it is not a risk assessment and may produce therapeutic nihilism under pressure.",
        keywords: ["borderline", "personality", "stigma", "formulation", "therapeutic nihilism", "traits"],
      },
      {
        id: "s4",
        name: "Mother's collateral must be received despite consent concerns",
        category: "collateral",
        severity: "critical",
        clueInStem: "The registrar has not spoken to the mother because \"he refused consent.\"",
        whyItMatters: "Missing this signal means the candidate has misunderstood confidentiality and lost critical collateral while considering discharge.",
        relatedLegal: "Confidentiality must be balanced with safety and duty of care.",
        modelWording: "Receive collateral from Liam's mother because clinicians can listen to family risk information even when disclosure back to family is limited.",
        keywords: ["mother", "collateral", "refused consent", "confidentiality", "listen", "family", "duty of care"],
      },
      {
        id: "s5",
        name: "Sleep loss, apprenticeship loss and alcohol are acute dynamic risks",
        category: "substance_use",
        severity: "important",
        clueInStem: "His mother is in the waiting room and says Liam has not slept for two nights, recently lost his apprenticeship, and has been drinking heavily.",
        whyItMatters: "Missing this signal means the candidate has ignored dynamic risk factors that increase impulsivity and make a crisis-number discharge unsafe.",
        relatedRisk: "Alcohol and sleep deprivation increase disinhibition.",
        modelWording: "Assess sleep deprivation, recent apprenticeship loss and heavy alcohol use because these acute factors increase impulsivity and near-term suicide risk.",
        keywords: ["not slept", "apprenticeship", "drinking", "alcohol", "dynamic risk", "sleep deprivation"],
      },
      {
        id: "s6",
        name: "Consultant must actively supervise rather than authorise by phone",
        category: "governance",
        severity: "critical",
        clueInStem: "The registrar asks, \"Can I just give him a crisis number and let him go?\"",
        whyItMatters: "Missing this signal means the candidate has rubber-stamped a junior registrar's unsafe plan rather than taking responsibility for direct supervision.",
        relatedSystem: "Consultant accountability cannot be delegated to a junior registrar under ED pressure.",
        modelWording: "Take active supervisory control because a Stage 1 registrar seeking approval for high-risk discharge needs direct consultant-led risk formulation.",
        keywords: ["permission to discharge", "Stage 1", "consultant", "supervision", "not authorise", "direct assessment"],
      },
      {
        id: "s7",
        name: "ED overcrowding and registrar irritation are system-pressure risks",
        category: "system_pressure",
        severity: "important",
        clueInStem: "The ED is overcrowded and the registrar sounds irritated.",
        whyItMatters: "Missing this signal means the candidate has not recognised that access pressure and registrar frustration are contaminating the discharge decision.",
        modelWording: "Name the ED pressure and registrar irritation as safety risks because emotional and system pressure can drive premature discharge.",
        keywords: ["ED overcrowded", "irritated", "system pressure", "premature discharge", "after hours", "access block"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s4", "s6"],
      secondary: ["s3", "s5", "s7"],
      lowYield: [],
    },
    modelAnswer: `This is not a safe telephone discharge. Liam was brought to ED by police after standing on a motorway overpass, which is a high-lethality behaviour regardless of his later statement that he was "just trying to clear my head." Denial of suicidal ideation cannot outweigh the behaviour, the police involvement and the acute context.

The message to his ex-partner, "You will all be sorry tomorrow," is another critical risk signal. It may be a farewell, a threat, a grievance communication or a marker of imminent self-harm and retaliatory thinking. I would ask the registrar to obtain and document the exact police account, the timing of the message, whether there are other communications, and whether the ex-partner or others need safety consideration.

The registrar's use of "borderline traits" and the statement that admission will "reinforce behaviour" require immediate corrective supervision. That language is not a risk formulation and risks stigmatising Liam while minimising a high-lethality presentation. I would redirect the registrar to formulate current dynamic risk: overpass behaviour, sleep deprivation, apprenticeship loss, alcohol use, relationship stress and possible threatening communication.

I would instruct the registrar to pause discharge and obtain collateral from the mother. Liam's refusal of consent does not prevent the team from receiving family information; it mainly limits what can be disclosed back to her. Her account that he has not slept for two nights, has lost his apprenticeship and has been drinking heavily materially changes the risk formulation.

As consultant, I would not simply authorise a crisis-number discharge by phone. The ED is overcrowded and the registrar sounds irritated, so system pressure and emotional fatigue are contaminating the decision. I would require further assessment, collateral, intoxication review, a documented risk formulation and consideration of involuntary assessment if Liam remains at imminent risk or tries to leave. I would either attend, review by video if feasible, or give explicit step-by-step supervision with a clear record of the consultant decision.`,
  },
  {
    id: "SUP-002",
    questionNumber: "MEQ-044",
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
        name: "Delirium makes the capacity conclusion unsafe",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "When you review the chart, you see nursing notes describing fluctuating alertness overnight, pulling out his IV line, and saying his dead brother was standing by the bed.",
        whyItMatters: "Missing this signal means the candidate has countersigned capacity despite clear chart evidence of fluctuating attention, behavioural disturbance and perceptual disturbance.",
        relatedRisk: "Missed delirium may lead to unsafe refusal of life-saving treatment.",
        modelWording: "Reassess for delirium before accepting capacity because fluctuating alertness, line-pulling and seeing a dead brother contradict a simple intact-capacity conclusion.",
        keywords: ["delirium", "fluctuat", "dead brother", "IV line", "capacity", "cognition", "confusion"],
      },
      {
        id: "s2",
        name: "Family interpretation makes the capacity assessment procedurally unsafe",
        category: "capacity",
        severity: "critical",
        clueInStem: "The registrar assessed him using his daughter as interpreter because \"formal interpreter would take too long.\"",
        whyItMatters: "Missing this signal means the candidate has accepted a high-stakes capacity assessment conducted without professional language support.",
        relatedLegal: "Procedurally unsafe assessment may not support refusal or treatment decisions.",
        relatedCultural: "Language access is part of culturally safe care.",
        modelWording: "Use a professional Mandarin interpreter because capacity to refuse surgery cannot be concluded through a family interpreter in a time-critical conflict.",
        keywords: ["daughter", "interpreter", "formal interpreter", "Mandarin", "capacity", "language", "too long"],
      },
      {
        id: "s3",
        name: "Cultural-beliefs explanation is unsupported and stereotyping",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "The registrar has written: \"Patient understands risks. Capacity intact. Refuses surgery due to cultural beliefs.\"",
        whyItMatters: "Missing this signal means the candidate has allowed vague cultural attribution to replace actual exploration of Mr Chen's values and reasoning.",
        relatedCultural: "Cultural formulation must be specific and elicited, not assumed.",
        modelWording: "Clarify the actual belief and reasoning because writing 'cultural beliefs' without evidence risks stereotyping and invalid capacity documentation.",
        keywords: ["cultural beliefs", "vague", "stereotype", "cultural formulation", "values", "specific"],
      },
      {
        id: "s4",
        name: "Refusal of life-saving surgery requires urgent lawful reassessment",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "Your registrar asks you to countersign a note for Mr Chen, a 69-year-old Mandarin-speaking man with bowel obstruction who is refusing surgery.",
        whyItMatters: "Missing this signal means the candidate has not recognised that a refusal of potentially life-saving surgery requires time-specific capacity and a lawful treatment pathway if capacity is absent.",
        relatedLegal: "May require emergency treatment or substitute decision-making depending urgency and jurisdiction.",
        modelWording: "Define the exact surgery decision and reassess capacity urgently because refusal of life-saving treatment requires defensible legal reasoning.",
        keywords: ["refusing surgery", "life-saving", "decision-specific", "legal pathway", "substitute", "emergency"],
      },
      {
        id: "s5",
        name: "Daughter's reluctance signals unsafe assessment dynamics",
        category: "family_carer",
        severity: "important",
        clueInStem: "The daughter says her father keeps asking why he is in hospital, but she does not want to contradict the registrar.",
        whyItMatters: "Missing this signal means the candidate has ignored collateral that undermines capacity while leaving the daughter inhibited by hierarchy.",
        modelWording: "Re-engage the daughter carefully because her reluctance to contradict the registrar suggests important collateral has not been safely elicited.",
        keywords: ["daughter", "contradict", "reluctant", "family", "collateral", "unsafe context"],
      },
      {
        id: "s6",
        name: "Consultant should not countersign an unsafe capacity note",
        category: "governance",
        severity: "critical",
        clueInStem: "Your registrar asks you to countersign a note for Mr Chen, a 69-year-old Mandarin-speaking man with bowel obstruction who is refusing surgery.",
        whyItMatters: "Missing this signal means the candidate has accepted consultant accountability for a procedurally flawed and clinically unsafe assessment.",
        relatedSystem: "Consultant must supervise, correct and document revised reasoning.",
        modelWording: "Refuse to countersign until capacity, delirium, interpreter use and legal pathway have been properly reassessed.",
        keywords: ["countersign", "supervision", "consultant accountability", "unsafe note", "reassess", "correct"],
      },
      {
        id: "s7",
        name: "Surgical anger must be managed without shortcutting rights",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "The surgical team is angry and says psychiatry is delaying life-saving treatment.",
        whyItMatters: "Missing this signal means the candidate has either colluded with an unsafe shortcut or failed to communicate that a lawful assessment protects urgent care.",
        modelWording: "Communicate with surgery about urgency and process because timely legal capacity work is part of safe life-saving treatment, not obstruction.",
        keywords: ["surgical team", "angry", "delaying", "life-saving", "liaison", "communication", "urgency"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s4", "s6"],
      secondary: ["s3", "s5", "s7"],
      lowYield: [],
    },
    modelAnswer: `I would not countersign the registrar's note. The conclusion "Patient understands risks. Capacity intact" is unsafe when the chart describes fluctuating alertness, pulling out an IV line and seeing his dead brother by the bed. Those features suggest delirium, and delirium can directly impair Mr Chen's ability to understand, retain, use and weigh information about bowel surgery.

The assessment process was also flawed because the registrar used Mr Chen's daughter as interpreter because a formal interpreter would take too long. A professional Mandarin interpreter is required for a high-stakes capacity assessment, especially when the decision concerns potentially life-saving surgery and the daughter may hold her own views, fears and family obligations.

The phrase "refuses surgery due to cultural beliefs" is not an adequate cultural formulation. It is vague, unsupported and risks stereotyping. With an interpreter, the registrar needs to document what Mr Chen actually believes, what he understands about bowel obstruction, what he thinks will happen without surgery, and whether any values or cultural concerns are genuinely driving the refusal.

The daughter's statement is important collateral. She says he keeps asking why he is in hospital, which further undermines the capacity conclusion, and she does not want to contradict the registrar, which means the assessment environment has inhibited important information. I would re-engage her respectfully and make clear that providing factual information is not contradicting the doctor.

The surgical team's anger must be managed directly. I would contact surgery, clarify the urgency of the operation and explain that psychiatry is not delaying treatment; we are ensuring the decision is lawful and clinically valid. If Mr Chen lacks capacity and surgery is required urgently to prevent serious harm, I would advise the team on the relevant emergency treatment or substitute decision pathway. I would supervise the registrar to rewrite the note with the exact decision, interpreter use, delirium assessment, capacity reasoning, collateral, urgency and legal plan.`,
  },
  {
    id: "SUP-003",
    questionNumber: "MEQ-045",
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
        name: "Bare labels do not evidence Mental Health Act criteria",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "The registrar's form states: \"Psychotic. Needs admission. Risk to baby. Detain.\"",
        whyItMatters: "Missing this signal means the candidate has accepted legal documentation that contains labels but no facts showing why detention criteria are met.",
        relatedLegal: "Poor documentation may make detention unlawful or indefensible.",
        modelWording: "Rewrite the form with factual criteria because labels such as psychotic, risk and detain do not justify compulsory treatment.",
        keywords: ["psychotic needs admission", "detain", "legal criteria", "MHA", "documentation", "facts", "behaviour"],
      },
      {
        id: "s2",
        name: "Infant-risk behaviour and belief must be documented specifically",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "A registrar asks you to review Mental Health Act paperwork for Sofia, a 31-year-old woman detained overnight after she tried to leave the ward while saying staff were poisoning her baby through breast milk.",
        whyItMatters: "Missing this signal means the candidate has allowed a generic risk-to-baby label to replace the specific maternal psychosis behaviour and infant safety concern.",
        relatedRisk: "Risk relates to maternal psychosis, infant care and refusal of support.",
        modelWording: "Document the poisoning-through-breast-milk belief and attempt to leave because they explain the specific risk to Sofia and her baby.",
        keywords: ["poisoning", "breast milk", "baby", "infant", "risk", "belief", "behaviour"],
      },
      {
        id: "s3",
        name: "Capacity reasoning is absent from compulsory treatment paperwork",
        category: "capacity",
        severity: "critical",
        clueInStem: "There is no description of the actual behaviour, no record of Sofia's views, no capacity reasoning, no explanation of less restrictive alternatives, and no reference to the baby being temporarily cared for by Sofia's partner on the maternity ward.",
        whyItMatters: "Missing this signal means the candidate has not required decision-specific reasoning about how psychosis affected Sofia's ability to understand and weigh admission and care.",
        relatedLegal: "Capacity reasoning supports least restrictive and rights-based decision-making.",
        modelWording: "Add capacity reasoning because the form must show how Sofia's mental state affected understanding, appreciation and weighing of admission and infant-care decisions.",
        keywords: ["capacity", "understand", "weigh", "use information", "reasoning", "decision-specific"],
      },
      {
        id: "s4",
        name: "Least restrictive alternatives are missing",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "There is no description of the actual behaviour, no record of Sofia's views, no capacity reasoning, no explanation of less restrictive alternatives, and no reference to the baby being temporarily cared for by Sofia's partner on the maternity ward.",
        whyItMatters: "Missing this signal means the candidate has ignored the legal requirement to explain why voluntary, family-supported or maternity-linked options were insufficient.",
        relatedLegal: "Least restrictive care is a core compulsory treatment principle.",
        modelWording: "Document less restrictive options considered because detention must be justified as necessary, not merely convenient or assumed.",
        keywords: ["least restrictive", "less restrictive", "voluntary", "alternatives", "legal", "threshold"],
      },
      {
        id: "s5",
        name: "Aboriginal kin-support request must be acted on",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "Sofia is Aboriginal and repeatedly asked for her aunt to be called; this is not mentioned in the form.",
        whyItMatters: "Missing this signal means the candidate has omitted a culturally important support request that may reduce distress and coercion.",
        relatedCultural: "Cultural safety requires recording and acting on nominated support requests.",
        modelWording: "Call and document Sofia's aunt or appropriate Aboriginal liaison support because culturally safe care is part of least restrictive engagement.",
        keywords: ["Aboriginal", "aunt", "called", "kin", "cultural safety", "support", "ALO"],
      },
      {
        id: "s6",
        name: "Registrar dismisses tribunal scrutiny and rights",
        category: "governance",
        severity: "important",
        clueInStem: "The registrar says, \"I wrote the key points — the tribunal won't read all the details anyway.\"",
        whyItMatters: "Missing this signal means the candidate has failed to address an unsafe professional attitude toward rights-based legal documentation.",
        relatedSystem: "Consultant must reinforce documentation standards and legal accountability.",
        modelWording: "Correct the registrar's attitude because tribunal documentation protects patient rights and must be detailed enough to justify detention.",
        keywords: ["tribunal", "won't read", "supervision", "attitude", "rights", "accountability"],
      },
      {
        id: "s7",
        name: "Nursing normalisation of poor paperwork requires team correction",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "The nurse in charge says the paperwork is \"probably fine\" because everyone knows Sofia is unwell.",
        whyItMatters: "Missing this signal means the candidate has overlooked a team culture in which clinical familiarity replaces lawful documentation.",
        modelWording: "Educate the team that knowing Sofia is unwell is not enough because MHA paperwork must evidence criteria for external scrutiny.",
        keywords: ["probably fine", "everyone knows", "nurse in charge", "team culture", "documentation", "legal scrutiny"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4"],
      secondary: ["s5", "s6", "s7"],
      lowYield: [],
    },
    modelAnswer: `The paperwork is not adequate and I would not allow the team to rely on it in its current form. "Psychotic. Needs admission. Risk to baby. Detain." is a series of labels, not evidence that Mental Health Act criteria are met. A tribunal or any external reviewer needs to understand the actual behaviour, the relevant risks, the capacity reasoning, the less restrictive alternatives and Sofia's own views.

The specific risk must be described. Sofia tried to leave the ward while saying staff were poisoning her baby through breast milk. That belief is clinically relevant because it may affect infant feeding, acceptance of maternity care, willingness to remain in hospital and risk to both Sofia and her baby. The form should also record that the baby is temporarily cared for by Sofia's partner on the maternity ward, because that fact affects immediate risk and less restrictive planning.

The absence of capacity reasoning and less restrictive reasoning is a major legal defect. The registrar needs to document how Sofia's mental state affected her ability to understand, appreciate and weigh admission and infant-care decisions, and why voluntary care, partner involvement, maternity liaison, increased observation or support from nominated people were insufficient.

Sofia's Aboriginal identity and repeated request for her aunt to be called must be documented and acted on. Contacting her aunt, and involving Aboriginal liaison or cultural support where available, may reduce distress, improve engagement and support a less restrictive plan. Omitting this makes the form clinically poorer and culturally unsafe.

I would give the registrar immediate corrective supervision. The statement that the tribunal will not read the details is unacceptable because compulsory treatment documentation is a rights-based clinical document, not an administrative shortcut. I would also correct the team culture reflected in the nurse's comment that the paperwork is probably fine because everyone knows Sofia is unwell. The rewritten form should be factual, specific, culturally safe, and clear about legal criteria, capacity, risk, alternatives and review plan.`,
  },
  {
    id: "SUP-004",
    questionNumber: "MEQ-046",
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
        name: "Distressed registrar needs immediate support and containment",
        category: "governance",
        severity: "critical",
        clueInStem: "The registrar is crying in your office and says, \"It is my fault. I should never be a psychiatrist.\"",
        whyItMatters: "Missing this signal means the candidate has failed to support a trainee in acute distress after a patient suicide.",
        relatedSystem: "Staff wellbeing is part of safe governance after adverse events.",
        modelWording: "Support and contain the registrar immediately because acute shame and self-blame can impair wellbeing and fitness for work.",
        keywords: ["crying", "my fault", "should never", "distressed", "support", "fitness", "containment"],
      },
      {
        id: "s2",
        name: "Discharge documentation omitted core suicide-risk safeguards",
        category: "governance",
        severity: "critical",
        clueInStem: "You review the note: there was no collateral from Ethan's partner, no updated safety plan, and no documentation of means restriction despite a previous overdose with prescribed medication.",
        whyItMatters: "Missing this signal means the candidate has avoided the clinical omissions most relevant to the death review.",
        relatedRisk: "Previous overdose with medication makes means restriction particularly important.",
        modelWording: "Identify the missing partner collateral, safety plan and medication means-restriction documentation because these are central discharge safeguards.",
        keywords: ["collateral", "partner", "safety plan", "means restriction", "overdose", "documentation"],
      },
      {
        id: "s3",
        name: "Corridor supervision creates consultant accountability concerns",
        category: "governance",
        severity: "critical",
        clueInStem: "The registrar had discussed the case briefly with you in the corridor on Friday, saying \"he seems fine now,\" but you did not review the file.",
        whyItMatters: "Missing this signal means the candidate has placed responsibility only on the registrar while ignoring the consultant's own supervision process.",
        relatedSystem: "Requires examination of supervision structure, not only trainee performance.",
        modelWording: "Include your own supervision role in the review because a corridor discussion without file review may be inadequate for service discharge.",
        keywords: ["corridor", "supervision", "consultant", "briefly", "review file", "accountability"],
      },
      {
        id: "s4",
        name: "Self-blame should not become premature causation",
        category: "ethics",
        severity: "important",
        clueInStem: "The registrar is crying in your office and says, \"It is my fault. I should never be a psychiatrist.\"",
        whyItMatters: "Missing this signal means the candidate has either agreed with blame or dismissed the event before facts are reviewed.",
        modelWording: "Acknowledge the registrar's distress without endorsing self-blame because causation requires structured fact-finding.",
        keywords: ["fault", "blame", "premature", "structured review", "accountability", "fact"],
      },
      {
        id: "s5",
        name: "Written statement must sit within formal incident process",
        category: "governance",
        severity: "important",
        clueInStem: "The service manager wants a written statement by 5 pm and asks whether the registrar should be removed from clinical duties immediately.",
        whyItMatters: "Missing this signal means the candidate has allowed a rushed defensive statement to replace proper incident reporting and review.",
        relatedSystem: "Requires incident reporting, open disclosure and coronial awareness where applicable.",
        modelWording: "Prepare a factual statement through the formal incident process because the response must be accurate, not rushed or blame-driven.",
        keywords: ["written statement", "5 pm", "incident", "formal", "factual", "coronial", "open disclosure"],
      },
      {
        id: "s6",
        name: "Fitness for work should be assessed proportionately",
        category: "disposition",
        severity: "important",
        clueInStem: "The service manager wants a written statement by 5 pm and asks whether the registrar should be removed from clinical duties immediately.",
        whyItMatters: "Missing this signal means the candidate has treated removal from duties as either automatic punishment or irrelevant despite acute distress.",
        modelWording: "Assess immediate fitness for work and arrange supported duties or leave if needed because patient safety and trainee wellbeing both matter.",
        keywords: ["removed", "clinical duties", "fitness for work", "leave", "supported duties", "not punitive"],
      },
      {
        id: "s7",
        name: "Service must review death disclosure and family/postvention needs",
        category: "family_carer",
        severity: "important",
        clueInStem: "Ethan died by suicide on Sunday.",
        whyItMatters: "Missing this signal means the candidate has focused only on staff management while neglecting family communication, open disclosure and postvention responsibilities.",
        modelWording: "Arrange appropriate family communication and postvention because a death by suicide requires compassionate disclosure and service-level follow-up.",
        keywords: ["suicide", "postvention", "family", "open disclosure", "bereavement", "communication", "support"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6", "s7"],
      lowYield: [],
    },
    modelAnswer: `My first responsibility is to support and contain the registrar. They are crying and saying, "It is my fault. I should never be a psychiatrist." I would acknowledge the distress, ensure they are not left alone if acutely overwhelmed, and assess immediate wellbeing and fitness for work without either blaming them or falsely reassuring them that nothing went wrong.

The clinical review still has to identify the discharge-process concerns. The note lacked collateral from Ethan's partner, an updated safety plan and documentation of means restriction despite a previous overdose with prescribed medication. Those omissions are highly relevant to any review of whether discharge from the service was safe and defensible.

I also need to include my own role. The registrar discussed the case briefly with me in a corridor, saying "he seems fine now," and I did not review the file. That raises a consultant supervision and governance issue, not simply a trainee performance issue. A serious review should examine how discharge decisions are escalated, what level of consultant review is expected, and whether corridor supervision is adequate for service closure.

The service manager's request for a statement by 5 pm should be handled through the formal incident process. I would provide a factual account, preserve records, avoid speculation, and ensure incident reporting, open disclosure, coronial awareness where relevant and staff-support processes are followed. A rushed defensive statement should not become the review.

The decision about removing the registrar from clinical duties should be proportionate. Immediate leave or supported duties may be appropriate if the registrar is too distressed to practise safely, but it should not be framed as punishment before fact-finding. The service also has obligations to Ethan's family through compassionate communication, bereavement support and postvention, while supporting staff and identifying system learning.`,
  },
  {
    id: "SUP-005",
    questionNumber: "MEQ-047",
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
        name: "Kaumātua support was dismissed as non-clinical",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "His whānau attend and ask whether kaumātua support can be included in care planning.",
        whyItMatters: "Missing this signal means the candidate has failed to recognise that culturally meaningful support may be central to engagement and care planning.",
        relatedCultural: "For Māori patients, whānau and kaumātua involvement may be central to care planning.",
        modelWording: "Include kaumātua support in care planning because culturally grounded support can strengthen engagement, not compete with evidence-based treatment.",
        keywords: ["cultural extras", "kaumātua", "Māori", "cultural safety", "whānau", "dismiss"],
      },
      {
        id: "s2",
        name: "Registrar's cultural-extras comment is unsafe",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "The registrar says, \"We need to focus on evidence-based treatment, not cultural extras,\"",
        whyItMatters: "Missing this signal means the candidate has not identified the explicit dismissal of Māori cultural support as culturally unsafe.",
        modelWording: "Correct the 'cultural extras' statement because it falsely separates cultural safety from evidence-based psychiatric care.",
        keywords: ["cultural extras", "evidence-based", "Māori", "dismissal", "cultural safety", "kaumātua"],
      },
      {
        id: "s3",
        name: "Blaming whānau harms engagement and formulation",
        category: "family_carer",
        severity: "critical",
        clueInStem: "and then tells the family that Wiremu's non-adherence is \"probably because your family system is too chaotic.\"",
        whyItMatters: "Missing this signal means the candidate has allowed blaming language to alienate key supports and replace collaborative formulation.",
        relatedCultural: "It risks stereotyping kinship structures and worsening distrust.",
        modelWording: "Reframe non-adherence collaboratively because blaming the whānau as chaotic is clinically harmful and culturally unsafe.",
        keywords: ["family system", "chaotic", "blaming", "stigma", "family", "whānau", "alienat"],
      },
      {
        id: "s4",
        name: "Wiremu's silence and departure show therapeutic rupture",
        category: "immediate_safety",
        severity: "important",
        clueInStem: "Wiremu becomes silent and leaves the room.",
        whyItMatters: "Missing this signal means the candidate has not recognised immediate disengagement that may worsen adherence, mania management and risk planning.",
        modelWording: "Respond to Wiremu leaving the room as a rupture because disengagement during mania can undermine treatment and safety planning.",
        keywords: ["silent", "leaves the room", "disengagement", "trust", "rupture", "repair"],
      },
      {
        id: "s5",
        name: "Sister's feedback identifies racialised harm",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "His sister later tells you, \"That doctor talked down to us and made it sound like being Māori is the problem.\"",
        whyItMatters: "Missing this signal means the candidate has not listened to the family's account of cultural harm and loss of trust.",
        relatedCultural: "Repair should include apology, listening and culturally appropriate support.",
        modelWording: "Acknowledge the sister's feedback and apologise for the harm because repair must start with the whānau's experience.",
        keywords: ["talked down", "Māori", "problem", "repair", "apologise", "whānau", "engagement"],
      },
      {
        id: "s6",
        name: "Registrar lacks reflective insight after the meeting",
        category: "governance",
        severity: "important",
        clueInStem: "The registrar says afterwards, \"I was just being direct. They needed psychoeducation.\"",
        whyItMatters: "Missing this signal means the candidate has reassured a registrar who is reframing harmful communication as education.",
        relatedSystem: "Supervisor must address communication, cultural safety and reflective capacity.",
        modelWording: "Provide structured corrective feedback because the registrar's defence shows poor insight into cultural safety and communication harm.",
        keywords: ["being direct", "psychoeducation", "insight", "feedback", "supervision", "reflect"],
      },
      {
        id: "s7",
        name: "Nurse's silence shows MDT psychological safety problem",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "The nurse facilitator is angry but says she did not want to challenge the registrar in front of the family.",
        whyItMatters: "Missing this signal means the candidate has overlooked a team hierarchy problem that prevented real-time repair of culturally unsafe communication.",
        relatedSystem: "Requires team culture allowing real-time safety challenge.",
        modelWording: "Address the nurse's inability to challenge because MDT psychological safety is needed for real-time correction and patient safety.",
        keywords: ["nurse", "challenge", "hierarchy", "psychological safety", "MDT", "facilitator"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6", "s7"],
      lowYield: [],
    },
    modelAnswer: `The registrar's comments were culturally unsafe and clinically harmful. Wiremu's whānau asked whether kaumātua support could be included in care planning, and the registrar reframed that as "cultural extras" competing with evidence-based treatment. That is wrong: culturally safe care and evidence-based psychiatric care are not opposites.

The statement that Wiremu's non-adherence was "probably because your family system is too chaotic" was also harmful. It blamed the whānau and replaced formulation with judgement. In a Māori patient admitted with mania, whānau and kaumātua support may be central to engagement, relapse planning and safe discharge.

Wiremu becoming silent and leaving the room is an immediate rupture. His sister's later comment that the doctor talked down to them and made it sound like being Māori was the problem should be taken seriously as feedback about racialised harm. I would meet Wiremu and his whānau, acknowledge what happened, apologise, invite kaumātua involvement and re-establish a collaborative care-planning process.

With the registrar, I would provide clear corrective feedback. Saying "I was just being direct" and calling it psychoeducation shows poor reflective insight. I would explain that psychoeducation is collaborative, respectful and culturally responsive; it is not dismissive or blaming.

I would also address the MDT issue. The nurse facilitator was angry but did not feel able to challenge the registrar in the meeting, which suggests hierarchy and psychological safety problems. The team needs a shared expectation that culturally unsafe or harmful communication can be paused and repaired in real time.`,
  },
  {
    id: "SUP-006",
    questionNumber: "MEQ-048",
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
        name: "Less restrictive alternatives were not documented",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "The chart shows no documented attempt at sensory modulation, female staff engagement, oral PRN, or contacting her nominated support person.",
        whyItMatters: "Missing this signal means the candidate has accepted seclusion without evidence that less restrictive options were tried or considered.",
        relatedLegal: "Seclusion must be necessary, proportionate and least restrictive.",
        modelWording: "Review seclusion necessity because the absence of documented alternatives means the least-restrictive threshold has not been demonstrated.",
        keywords: ["least restrictive", "seclusion", "sensory modulation", "female staff", "oral PRN", "support person"],
      },
      {
        id: "s2",
        name: "Male security appears to have triggered trauma re-enactment",
        category: "trauma",
        severity: "critical",
        clueInStem: "Aisha had been pacing and shouting that male security guards were \"the men from before.\"",
        whyItMatters: "Missing this signal means the candidate has ignored a trauma trigger that may be worsened by male security and confinement.",
        relatedRisk: "Trauma activation may escalate agitation and injury risk.",
        modelWording: "Use trauma-informed alternatives because Aisha's reference to male guards as 'the men from before' suggests re-traumatisation.",
        keywords: ["men from before", "male security", "trauma", "re-traumatisation", "complex trauma", "trigger"],
      },
      {
        id: "s3",
        name: "Current distress in seclusion requires urgent review",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "Aisha is now banging the seclusion room door and screaming, \"Don't lock me in again.\"",
        whyItMatters: "Missing this signal means the candidate has left an actively distressed patient in seclusion without reassessing injury risk, trauma escalation and ongoing necessity.",
        relatedRisk: "Risk of injury, worsening trauma and escalation.",
        modelWording: "Review Aisha immediately because banging the door and screaming indicate active distress and possible harm from continued seclusion.",
        keywords: ["banging", "don't lock me in", "seclusion room", "distress", "urgent review", "injury"],
      },
      {
        id: "s4",
        name: "Registrar's certainty ignores proportionality and trauma context",
        category: "governance",
        severity: "important",
        clueInStem: "The registrar says, \"She is psychotic and dangerous; seclusion is clearly indicated.\"",
        whyItMatters: "Missing this signal means the candidate has accepted premature certainty rather than supervising restrictive-practice reasoning.",
        relatedSystem: "Requires supervision on restrictive practice reasoning.",
        modelWording: "Challenge the registrar's certainty because psychosis and agitation do not automatically make seclusion necessary or proportionate.",
        keywords: ["clearly indicated", "overconfident", "premature", "supervision", "restrictive practice"],
      },
      {
        id: "s5",
        name: "Convenience is not a lawful seclusion rationale",
        category: "ethics",
        severity: "important",
        clueInStem: "The registrar says the unit was short-staffed and \"security were already there, so it was efficient.\"",
        whyItMatters: "Missing this signal means the candidate has allowed operational convenience to justify a restrictive practice.",
        relatedLegal: "Seclusion must be clinically necessary, not merely efficient.",
        modelWording: "Reject efficiency as a rationale because seclusion must be clinically necessary, proportionate and rights-based.",
        keywords: ["efficient", "security already", "convenience", "ethical", "lawful", "rationale"],
      },
      {
        id: "s6",
        name: "Short staffing is a systems contributor, not a justification",
        category: "system_pressure",
        severity: "important",
        clueInStem: "The registrar says the unit was short-staffed and \"security were already there, so it was efficient.\"",
        whyItMatters: "Missing this signal means the candidate has not escalated a staffing-pressure contributor to restrictive practice.",
        relatedSystem: "Requires governance review of staffing, acuity and restrictive practice rates.",
        modelWording: "Escalate the short-staffing issue because staffing pressure may contribute to restrictive practice but cannot justify it.",
        keywords: ["short-staffed", "staffing", "acuity", "system", "restrictive practice", "escalate"],
      },
      {
        id: "s7",
        name: "Water-throwing was aggression but not assaultive violence",
        category: "risk_others",
        severity: "important",
        clueInStem: "She threw a cup of water at a nurse but did not assault anyone.",
        whyItMatters: "Missing this signal means the candidate has not calibrated risk severity when deciding whether seclusion remains proportionate.",
        modelWording: "Calibrate the violence risk accurately because throwing water is concerning but the stem says she did not assault anyone.",
        keywords: ["cup of water", "did not assault", "risk calibration", "proportionate", "aggression", "nurse"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6", "s7"],
      lowYield: [],
    },
    modelAnswer: `I would urgently review Aisha in seclusion and decide whether it remains necessary, proportionate and least restrictive. The chart shows no documented attempt at sensory modulation, female staff engagement, oral PRN or contacting her nominated support person. Without those alternatives being tried or at least considered, the legal and clinical justification for seclusion is weak.

The trauma context is central. Aisha has complex trauma and was shouting that male security guards were "the men from before." Continued involvement of male security and confinement in a seclusion room may be re-traumatising and may worsen agitation rather than reduce risk.

Her current state also requires immediate review. She is banging the seclusion room door and screaming, "Don't lock me in again." That is a safety signal for injury, escalating distress and possible retraumatisation. I would consider whether seclusion can be safely ended or modified, with female staff engagement, a low-stimulus approach, sensory modulation, oral medication, support-person contact and close observation.

I would supervise the registrar to move beyond the phrase "psychotic and dangerous." Aisha did throw a cup of water at a nurse, which is concerning, but the stem says she did not assault anyone. Risk needs calibration, not automatic escalation to the most restrictive intervention.

Short staffing and the fact that security were already present are system contributors, not valid seclusion rationales. I would escalate the staffing issue separately, document the review, ensure observations and physical monitoring are in place, and use this as a supervision moment about restrictive practice, trauma-informed care and least-restrictive decision-making.`,
  },
  {
    id: "SUP-007",
    questionNumber: "MEQ-049",
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
        name: "Late-night texting has crossed the therapeutic frame",
        category: "ethics",
        severity: "critical",
        clueInStem: "The registrar tells you casually that Nadia has started sending long text messages between sessions and that he has replied late at night because \"she has no one else.\"",
        whyItMatters: "Missing this signal means the candidate has normalised out-of-session contact that may increase dependency and blur professional boundaries.",
        relatedRisk: "Creates risk to patient, registrar and therapeutic frame.",
        modelWording: "Stop ad hoc late-night texting because it blurs the therapeutic frame and reinforces dependence rather than safe containment.",
        keywords: ["late at night", "text", "boundary", "dependency", "therapeutic frame", "personal"],
      },
      {
        id: "s2",
        name: "Repeated session extensions destabilise endings",
        category: "ethics",
        severity: "critical",
        clueInStem: "He also agreed to extend the last three sessions by 25 minutes because Nadia became distressed at the end.",
        whyItMatters: "Missing this signal means the candidate has not recognised that repeated unplanned extensions may worsen attachment anxiety and undermine psychotherapy structure.",
        modelWording: "Re-establish consistent session endings because repeated extensions destabilise the frame and avoid necessary work on separation distress.",
        keywords: ["extend", "25 minutes", "session", "frame", "ending", "boundaries"],
      },
      {
        id: "s3",
        name: "Protective feelings suggest countertransference",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "In supervision, the registrar says he feels \"protective\" and worries that setting limits will \"repeat abandonment.\"",
        whyItMatters: "Missing this signal means the candidate has failed to use supervision to examine how countertransference is shaping boundary decisions.",
        modelWording: "Explore the registrar's protective feelings as countertransference because rescue impulses may be driving unsafe boundary relaxation.",
        keywords: ["protective", "countertransference", "rescue", "feelings", "supervision", "attachment"],
      },
      {
        id: "s4",
        name: "Undocumented texts create clinical and medico-legal risk",
        category: "governance",
        severity: "important",
        clueInStem: "He has not documented the text messages in the clinical record.",
        whyItMatters: "Missing this signal means the candidate has ignored clinically relevant out-of-session contact that affects continuity and risk management.",
        relatedSystem: "Creates medico-legal and continuity risk.",
        modelWording: "Document clinically relevant text contact because out-of-session communication affects risk, boundaries and continuity of care.",
        keywords: ["not documented", "text messages", "clinical record", "documentation", "medico-legal"],
      },
      {
        id: "s5",
        name: "Exclusive reliance on the registrar increases crisis risk",
        category: "risk_self",
        severity: "important",
        clueInStem: "Nadia recently told reception she only wants appointments when this registrar is available and refused crisis team contact when he was on leave.",
        whyItMatters: "Missing this signal means the candidate has not recognised dependency and service-splitting that may escalate risk during registrar absence.",
        relatedRisk: "Risk escalates during registrar absence or leave.",
        modelWording: "Broaden Nadia's care plan beyond one registrar because exclusive reliance and crisis-team refusal create predictable risk during leave.",
        keywords: ["only wants", "registrar available", "refused crisis team", "dependency", "splitting", "leave"],
      },
      {
        id: "s6",
        name: "Personal email would worsen the boundary breach",
        category: "ethics",
        severity: "critical",
        clueInStem: "The registrar asks whether he should give Nadia his personal email so she can \"feel secure.\"",
        whyItMatters: "Missing this signal means the candidate has allowed private communication to bypass service systems and deepen dependency.",
        modelWording: "Refuse personal email contact because communication must occur through agreed clinical channels with clear crisis contingencies.",
        keywords: ["personal email", "email", "boundary breach", "clinical channels", "not provide"],
      },
      {
        id: "s7",
        name: "A formal communication and crisis plan is needed",
        category: "disposition",
        severity: "important",
        clueInStem: "Nadia recently told reception she only wants appointments when this registrar is available and refused crisis team contact when he was on leave.",
        whyItMatters: "Missing this signal means the candidate has corrected the boundary problem without providing a safe alternative for distress between sessions.",
        modelWording: "Create a written communication and crisis plan because boundaries must be paired with predictable, safe support options.",
        keywords: ["communication plan", "crisis plan", "between sessions", "service channels", "safe alternative", "leave"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s6"],
      secondary: ["s3", "s4", "s5", "s7"],
      lowYield: [],
    },
    modelAnswer: `This is a psychotherapy supervision and boundary-risk case, not simply a helpful registrar being available. The registrar has replied to long text messages late at night because Nadia "has no one else," extended the last three sessions by 25 minutes, and is now considering giving his personal email. Together these behaviours show progressive erosion of the therapeutic frame.

The registrar's feelings are clinically important. He says he feels "protective" and worries that limits will "repeat abandonment." I would explore this as countertransference, because rescue impulses may be leading him to provide special access rather than helping Nadia tolerate and understand endings, separations and between-session distress.

The risk is also service-based. Nadia now only wants appointments when this registrar is available and refused crisis team contact when he was on leave. That indicates dependency and potential splitting of the service, with predictable risk when the registrar is away or unavailable.

I would advise the registrar not to provide personal email and to stop ad hoc late-night contact. This should be done thoughtfully, not abruptly or punitively. The team needs a written communication plan, agreed clinical channels, clear between-session limits, crisis-team contingencies and a plan for leave or absence.

The text messages must be documented in the clinical record because they are clinically relevant contact and may contain risk information. Supervision should focus on boundaries, endings, countertransference, documentation, crisis planning and safe therapeutic containment. The aim is not to abandon Nadia, but to provide reliable care through a professional frame rather than through personal availability.`,
  },
  {
    id: "SUP-008",
    questionNumber: "MEQ-050",
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
        name: "Public criticism suggests bullying and psychological unsafety",
        category: "governance",
        severity: "critical",
        clueInStem: "A Stage 1 registrar, Priyanka, tells you privately that the senior registrar repeatedly calls her \"too slow\" in front of nurses and told her, \"Maybe psychiatry is not for you.\"",
        whyItMatters: "Missing this signal means the candidate has treated humiliating behaviour as mere style rather than a training and patient-safety concern.",
        relatedSystem: "Training culture is a governance and patient safety issue.",
        modelWording: "Respond to the repeated public criticism as a bullying concern because psychological unsafety impairs learning and escalation.",
        keywords: ["too slow", "bullying", "public", "humiliation", "psychological safety", "trainee"],
      },
      {
        id: "s2",
        name: "Avoiding questions creates supervision safety risk",
        category: "governance",
        severity: "critical",
        clueInStem: "Priyanka says she now avoids asking questions and copied forward an old risk assessment because she was afraid of being criticised for staying late.",
        whyItMatters: "Missing this signal means the candidate has not recognised that bullying has already reduced help-seeking and escalation by a junior doctor.",
        relatedSystem: "Supervision environment is unsafe.",
        modelWording: "Restore a safe escalation pathway because Priyanka avoiding questions is a direct supervision and patient-safety problem.",
        keywords: ["avoids asking", "questions", "escalation", "supervision", "safety", "junior"],
      },
      {
        id: "s3",
        name: "Copied risk assessment missed a specific violence threat",
        category: "risk_others",
        severity: "critical",
        clueInStem: "A nurse separately tells you Priyanka looked tearful after ward round and that the copied risk assessment missed a new threat by a patient to stab his neighbour.",
        whyItMatters: "Missing this signal means the candidate has not acted on a clinical risk failure already linked to the unsafe supervision culture.",
        relatedRisk: "Threat to stab neighbour requires immediate risk review and safety action.",
        modelWording: "Review and correct the patient's risk assessment immediately because a new threat to stab a neighbour was missed.",
        keywords: ["stab his neighbour", "copied risk assessment", "threat", "risk to others", "missed", "neighbour"],
      },
      {
        id: "s4",
        name: "Senior registrar rationalises harmful behaviour as standards",
        category: "ethics",
        severity: "important",
        clueInStem: "The senior registrar says, \"I am just maintaining standards; she needs to toughen up.\"",
        whyItMatters: "Missing this signal means the candidate has accepted a professionalism problem being reframed as legitimate performance management.",
        modelWording: "Challenge the senior registrar's justification because maintaining standards does not permit humiliation or intimidation.",
        keywords: ["toughen up", "maintaining standards", "insight", "feedback", "professionalism"],
      },
      {
        id: "s5",
        name: "Operational reliance must not block action on bullying",
        category: "system_pressure",
        severity: "important",
        clueInStem: "The unit is short of consultants and the senior registrar is relied on heavily to run the ward.",
        whyItMatters: "Missing this signal means the candidate has allowed staffing dependence to inhibit a response to unsafe supervision and patient risk.",
        relatedSystem: "Requires consultant oversight despite staffing pressures.",
        modelWording: "Address the behaviour despite operational reliance because staffing pressure cannot excuse unsafe supervision culture.",
        keywords: ["relied on", "run the ward", "short of consultants", "staffing", "operational dependence"],
      },
      {
        id: "s6",
        name: "Private disclosure requires protection from retaliation",
        category: "governance",
        severity: "important",
        clueInStem: "A Stage 1 registrar, Priyanka, tells you privately that the senior registrar repeatedly calls her \"too slow\" in front of nurses and told her, \"Maybe psychiatry is not for you.\"",
        whyItMatters: "Missing this signal means the candidate has not protected the junior registrar's confidentiality, support needs and reporting pathway while facts are assessed.",
        modelWording: "Protect Priyanka from retaliation by offering support, explaining reporting options and limiting disclosure to what is necessary.",
        keywords: ["privately", "confidential", "retaliation", "support", "report", "complainant"],
      },
      {
        id: "s7",
        name: "Nurse collateral corroborates distress and patient-safety impact",
        category: "collateral",
        severity: "important",
        clueInStem: "A nurse separately tells you Priyanka looked tearful after ward round and that the copied risk assessment missed a new threat by a patient to stab his neighbour.",
        whyItMatters: "Missing this signal means the candidate has ignored independent collateral that confirms both trainee distress and clinical harm.",
        modelWording: "Use the nurse's collateral to guide fact-finding because it corroborates distress and identifies immediate patient-safety consequences.",
        keywords: ["nurse", "tearful", "collateral", "ward round", "patient safety", "corroborates", "fact-finding"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6", "s7"],
      lowYield: [],
    },
    modelAnswer: `This is not merely a personality clash or robust teaching style. Priyanka reports repeated public criticism, including being called "too slow" in front of nurses and being told, "Maybe psychiatry is not for you." That is potentially bullying and has created psychological unsafety in a Stage 1 registrar.

The patient-safety consequence is already visible. Priyanka now avoids asking questions and copied forward an old risk assessment because she feared criticism for staying late. A nurse reports that the copied assessment missed a new threat by a patient to stab his neighbour. My first clinical action would be to ensure that patient's risk is urgently reviewed, the record corrected and any safety steps taken.

Priyanka needs support, confidentiality as far as possible, and protection from retaliation. I would explain the limits of confidentiality, discuss formal and informal reporting pathways, document her concerns carefully and ensure she has a safe supervision arrangement that allows questions and escalation.

The senior registrar's response that he is maintaining standards and that she needs to toughen up is not adequate. Standards matter, but they must be taught through specific, respectful feedback, not humiliation or intimidation. I would provide clear feedback and follow the appropriate workplace or training process to assess the allegation fairly.

The fact that the unit is short of consultants and relies on the senior registrar cannot prevent action. It is precisely the kind of system pressure that allows unsafe culture to persist. I would use the nurse's collateral to inform fact-finding, increase consultant oversight of the ward, and ensure both trainee welfare and patient safety are addressed while the matter is investigated.`,
  },
  {
    id: "SUP-009",
    questionNumber: "MEQ-051",
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
        name: "Fever, incontinence and drowsiness suggest delirium",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "The nurse reports Grace is febrile, has new urinary incontinence, and keeps falling asleep during the interview.",
        whyItMatters: "Missing this signal means the candidate has accepted a dementia formulation while overlooking possible delirium, sepsis or acute medical deterioration.",
        relatedRisk: "Discharge could miss sepsis or other acute illness.",
        modelWording: "Escalate urgent medical assessment because fever, new incontinence and drowsiness suggest delirium or acute medical illness.",
        keywords: ["fever", "febrile", "incontinence", "falling asleep", "delirium", "medical", "sepsis"],
      },
      {
        id: "s2",
        name: "Neighbour may be unsafe because of exploitation allegation",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "Grace says the neighbour \"steals my pension,\" but the neighbour is pushing to take her home.",
        whyItMatters: "Missing this signal means the candidate has discharged a vulnerable older person to a potential exploiter without safeguarding assessment.",
        relatedRisk: "Risk of elder abuse, neglect and exploitation.",
        modelWording: "Prevent discharge to the neighbour until safeguarding is assessed because Grace alleges financial exploitation and the neighbour is pushing to take her home.",
        keywords: ["steals my pension", "neighbour", "elder abuse", "financial abuse", "safeguarding", "vulnerable"],
      },
      {
        id: "s3",
        name: "Rural bed and transfer limits are system pressures, not discharge reasons",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "The registrar tells you Grace is \"probably dementia with behavioural issues\" and plans discharge to the neighbour because there are no local beds and the ambulance transfer will take six hours.",
        whyItMatters: "Missing this signal means the candidate has allowed distance and lack of beds to justify unsafe discharge.",
        relatedSystem: "Requires escalation to retrieval, medical, aged care or regional duty systems.",
        modelWording: "Escalate the rural access problem because no local beds and a six-hour transfer do not make discharge to an unsafe carer acceptable.",
        keywords: ["no local beds", "six hours", "ambulance", "rural", "transfer", "system pressure", "escalation"],
      },
      {
        id: "s4",
        name: "Remote supervision must be active and accountable",
        category: "governance",
        severity: "critical",
        clueInStem: "The registrar asks, \"Given the distance, can I document that I supervised remotely and let the nurse manage it?\"",
        whyItMatters: "Missing this signal means the candidate has allowed remote supervision to become passive delegation in a high-risk vulnerable-patient scenario.",
        relatedSystem: "Consultant must set clear plan, escalation and documentation.",
        modelWording: "Take active consultant responsibility because remote supervision requires a clear plan, escalation pathway and documentation, not simply leaving the nurse to manage.",
        keywords: ["remote", "supervised remotely", "nurse manage", "consultant responsibility", "video", "active supervision"],
      },
      {
        id: "s5",
        name: "Loss of onsite medical cover increases urgency",
        category: "physical_health",
        severity: "important",
        clueInStem: "There is no onsite doctor after midnight.",
        whyItMatters: "Missing this signal means the candidate has delayed escalation until local medical assessment becomes unavailable.",
        relatedSystem: "Requires urgent escalation before medical cover disappears or retrieval advice.",
        modelWording: "Escalate before midnight because suspected delirium or sepsis needs medical assessment while onsite support remains available.",
        keywords: ["no onsite doctor", "midnight", "medical cover", "escalation", "retrieval", "urgent"],
      },
      {
        id: "s6",
        name: "Registrar's dementia formulation is premature",
        category: "governance",
        severity: "important",
        clueInStem: "The registrar tells you Grace is \"probably dementia with behavioural issues\" and plans discharge to the neighbour because there are no local beds and the ambulance transfer will take six hours.",
        whyItMatters: "Missing this signal means the candidate has not corrected diagnostic closure that ignores acute medical and safeguarding red flags.",
        modelWording: "Correct the dementia-with-behavioural-issues formulation because fever, drowsiness and new incontinence require delirium and medical assessment.",
        keywords: ["probably dementia", "behavioural issues", "premature", "diagnostic closure", "unsafe formulation"],
      },
      {
        id: "s7",
        name: "Highway wandering at night is an immediate vulnerability signal",
        category: "immediate_safety",
        severity: "important",
        clueInStem: "The nurse is assessing Grace, a 67-year-old woman brought in by her neighbour after she was found wandering on a highway at night.",
        whyItMatters: "Missing this signal means the candidate has underestimated immediate exposure, traffic and self-care risks before considering discharge.",
        modelWording: "Treat highway wandering at night as an immediate safety signal because it indicates severe vulnerability requiring containment and medical assessment.",
        keywords: ["wandering", "highway", "night", "vulnerability", "traffic", "older", "immediate safety"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4"],
      secondary: ["s5", "s6", "s7"],
      lowYield: [],
    },
    modelAnswer: `I would not support discharge to the neighbour. Grace was found wandering on a highway at night, which is already a serious vulnerability signal. The nurse now reports fever, new urinary incontinence and falling asleep during the interview, which should be treated as possible delirium, sepsis or other acute medical deterioration, not simply dementia with behavioural issues.

The proposed neighbour is not a safe discharge plan. Grace says the neighbour "steals my pension," while the neighbour is pushing to take her home. That combination raises concern about financial abuse, coercion or exploitation. Even if Grace is confused, the allegation must be safeguarded rather than dismissed.

The rural constraints are real but cannot determine safety. There are no local beds, the ambulance transfer will take six hours and there will be no onsite doctor after midnight. Those facts require escalation before medical cover disappears, not discharge to an unsafe or unassessed carer.

Remote supervision must be active. I would not allow the registrar to document supervision and leave the nurse to manage. I would give a clear consultant-led plan: keep Grace in ED or another safe clinical area, obtain urgent medical assessment, check observations, infection screen and delirium work-up, seek retrieval or regional advice, contact senior hospital management if needed, and prevent discharge to the neighbour pending safeguarding.

I would also correct the registrar's formulation. "Probably dementia with behavioural issues" is premature when fever, drowsiness, new incontinence, highway wandering and a financial exploitation allegation are present. The documentation should record the consultant plan, rural constraints, escalation attempts, safeguarding concerns and why discharge was unsafe despite distance and bed pressure.`,
  },
  {
    id: "SUP-010",
    questionNumber: "MEQ-052",
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
        name: "Humiliating public feedback damages learning culture",
        category: "governance",
        severity: "critical",
        clueInStem: "An intern approaches you after ward round and says your registrar told her, in front of the medical team, \"Your presentation was useless; you clearly don't understand psychiatry.\"",
        whyItMatters: "Missing this signal means the candidate has tolerated humiliating behaviour that undermines psychological safety and teaching.",
        relatedSystem: "Poor teaching culture affects referrals and patient care.",
        modelWording: "Correct the registrar's public humiliation because feedback must be respectful, behaviour-specific and educational.",
        keywords: ["useless", "humiliated", "feedback", "psychological safety", "teaching", "public"],
      },
      {
        id: "s2",
        name: "Reduced willingness to refer is a patient-safety issue",
        category: "system_pressure",
        severity: "important",
        clueInStem: "The intern is upset and says she is now reluctant to refer patients to psychiatry because \"I don't want to be humiliated again.\"",
        whyItMatters: "Missing this signal means the candidate has treated the incident as hurt feelings rather than a barrier to timely consultation-liaison care.",
        relatedSystem: "CL psychiatry depends on trust and accessibility.",
        modelWording: "Repair the referral relationship because reluctance to refer to psychiatry can delay assessment of capacity, delirium and risk.",
        keywords: ["reluctant to refer", "referrals", "patient safety", "CL", "interprofessional", "trust"],
      },
      {
        id: "s3",
        name: "Clinical standards and feedback method must be separated",
        category: "governance",
        severity: "important",
        clueInStem: "You observed that the intern's presentation was disorganised and did omit key points about capacity and delirium.",
        whyItMatters: "Missing this signal means the candidate has either ignored genuine clinical teaching needs or used them to justify humiliation.",
        modelWording: "Teach the missing capacity and delirium elements specifically because high standards require clear coaching, not shaming.",
        keywords: ["disorganised", "capacity", "delirium", "specific feedback", "standards", "behaviour"],
      },
      {
        id: "s4",
        name: "Registrar failed to give actionable feedback",
        category: "governance",
        severity: "important",
        clueInStem: "However, the registrar did not give specific feedback or invite questions.",
        whyItMatters: "Missing this signal means the candidate has not identified why the registrar's intervention could not improve the intern's performance.",
        modelWording: "Model actionable feedback because the registrar should have named the omitted capacity and delirium points and invited questions.",
        keywords: ["specific feedback", "invite questions", "actionable", "learning", "clarification"],
      },
      {
        id: "s5",
        name: "Medical team's view of psychiatry needs repair",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "Later, the medical consultant says psychiatry often seems \"elitist and unhelpful.\"",
        whyItMatters: "Missing this signal means the candidate has not recognised broader consultation-liaison trust damage beyond the intern interaction.",
        relatedSystem: "Poor cross-specialty relationships affect access to consultation.",
        modelWording: "Repair the relationship with the medical team because consultation-liaison psychiatry depends on being accessible and collaborative.",
        keywords: ["elitist", "unhelpful", "medical consultant", "MDT", "relationship", "reputation"],
      },
      {
        id: "s6",
        name: "Pressure does not excuse humiliating communication",
        category: "ethics",
        severity: "optional",
        clueInStem: "The registrar says, \"I was under pressure; they need to learn standards.\"",
        whyItMatters: "Missing this signal means the candidate has allowed workload stress to excuse behaviour that harms learning and interprofessional care.",
        modelWording: "Acknowledge pressure without excusing humiliation because professionalism is required even when teaching under time pressure.",
        keywords: ["under pressure", "does not justify", "excuse", "professionalism", "communication"],
      },
      {
        id: "s7",
        name: "Intern requires direct support and re-engagement",
        category: "family_carer",
        severity: "important",
        clueInStem: "The intern is upset and says she is now reluctant to refer patients to psychiatry because \"I don't want to be humiliated again.\"",
        whyItMatters: "Missing this signal means the candidate has corrected the registrar but failed to support the junior doctor harmed by the interaction.",
        modelWording: "Support and re-engage the intern because restoring safety and confidence is necessary for future referrals and learning.",
        keywords: ["intern", "upset", "support", "re-engage", "humiliated", "learning", "referral"],
      },
    ],
    priorityOrder: {
      urgent: ["s1"],
      secondary: ["s2", "s3", "s4", "s5", "s7"],
      lowYield: ["s6"],
    },
    modelAnswer: `The registrar's feedback was unacceptable. Telling an intern in front of the medical team, "Your presentation was useless; you clearly don't understand psychiatry," is humiliating and not educational. It damages psychological safety and makes psychiatry appear punitive rather than consultative.

The harm has already affected patient care. The intern says she is now reluctant to refer patients to psychiatry because she does not want to be humiliated again. In consultation-liaison work, reluctance to refer can delay assessment of capacity, delirium, suicide risk or behavioural disturbance, so this is a patient-safety and systems issue, not only an interpersonal problem.

I would still separate the feedback method from the clinical standard. The intern's presentation was disorganised and omitted key points about capacity and delirium, so teaching was needed. The registrar should have named the missing elements, explained why they mattered, invited questions and given a concrete structure for the next presentation.

I would support the intern directly, acknowledge that the feedback was inappropriate and help restore confidence to refer to psychiatry. I would also speak with the medical consultant, acknowledge the concern that psychiatry can seem "elitist and unhelpful," and repair the working relationship with the team.

With the registrar, I would give clear corrective supervision. Being under pressure may explain the context but does not excuse humiliating communication. The learning goal is to maintain clinical standards through respectful, specific, behaviour-based feedback that strengthens interprofessional collaboration rather than damaging it.`,
  },
];
