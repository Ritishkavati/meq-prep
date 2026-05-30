import type { QuizStem } from "../quizData";

export const MDT_STEMS: QuizStem[] = [
  {
    id: "SYS-001",
    questionNumber: "MEQ-088",
    topic: "mdt_systems",
    difficulty: "consultant",
    title: "Treatment-Resistant Schizophrenia — NDIS, Carer Burnout and Recovery Goals",
    candidateRole: "Consultant psychiatrist, community rehabilitation team",
    setting: "Urban community mental health rehabilitation service",
    stem: `You are the consultant psychiatrist in a community rehabilitation psychiatry team.

Ethan is a 23-year-old Aboriginal man with treatment-resistant schizophrenia diagnosed at age 18. He has had four previous admissions for psychotic relapse associated with medication non-adherence. He currently lives with his parents on a large urban housing estate and receives NDIS funding for psychosocial support. He has persistent negative symptoms, social withdrawal and intermittent auditory hallucinations despite clozapine treatment.

Ethan says, "Everyone keeps talking about recovery but nobody thinks I can actually do anything." He recently stopped attending his supported employment placement after believing co-workers were mocking him. His father wants him to apply for a disability pension permanently, while Ethan says he wants "a normal life" and asks whether he can study graphic design. The occupational therapist believes Ethan needs graded vocational rehabilitation, but the NDIS support coordinator says the funding is "being wasted because he won't engage."

At a case conference, Ethan's mother becomes tearful and says, "We have organised every appointment for five years and we're exhausted." An Aboriginal health worker has not been involved in his care. The junior registrar asks whether the priority should be reducing relapse risk, increasing independence, or accepting Ethan's current limitations.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Treatment-resistant schizophrenia requires integrated rehabilitation",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "Ethan is a 23-year-old Aboriginal man with treatment-resistant schizophrenia diagnosed at age 18. He has had four previous admissions for psychotic relapse associated with medication non-adherence.",
        whyItMatters: "Missing this signal means the candidate has reduced Ethan's care to either relapse prevention or disability support rather than integrating illness severity, adherence and rehabilitation.",
        modelWording: "Formulate treatment-resistant schizophrenia longitudinally because relapse prevention, adherence support and rehabilitation goals must be planned together.",
        keywords: ["treatment-resistant schizophrenia", "relapse", "adherence", "rehabilitation", "longitudinal formulation"],
      },
      {
        id: "s2",
        name: "Persistent symptoms on clozapine need treatment optimisation",
        category: "physical_health",
        severity: "important",
        clueInStem: "He has persistent negative symptoms, social withdrawal and intermittent auditory hallucinations despite clozapine treatment.",
        whyItMatters: "Missing this signal means the candidate has accepted residual symptoms as fixed disability without reviewing clozapine optimisation or adjunctive supports.",
        modelWording: "Review clozapine response and tolerability because persistent negative symptoms and hallucinations may be limiting Ethan's functional recovery.",
        keywords: ["clozapine", "negative symptoms", "auditory hallucinations", "optimisation", "functional recovery"],
      },
      {
        id: "s3",
        name: "Recovery language has become demoralising",
        category: "disposition",
        severity: "important",
        clueInStem: "Ethan says, \"Everyone keeps talking about recovery but nobody thinks I can actually do anything.\"",
        whyItMatters: "Missing this signal means the candidate has not recognised Ethan's experience of services as pessimistic and invalidating despite using recovery language.",
        modelWording: "Rebuild recovery planning around Ethan's own goals because recovery language is unhelpful if the team does not believe he can do meaningful activity.",
        keywords: ["recovery", "hope", "demoralisation", "goals", "rehabilitation", "meaningful activity"],
      },
      {
        id: "s4",
        name: "Vocational withdrawal is linked to residual paranoia",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "He recently stopped attending his supported employment placement after believing co-workers were mocking him.",
        whyItMatters: "Missing this signal means the candidate has labelled non-engagement as lack of motivation rather than recognising psychosis interfering with employment.",
        modelWording: "Assess residual paranoia and workplace supports because Ethan's employment withdrawal appears illness-linked rather than simple refusal to engage.",
        keywords: ["supported employment", "paranoia", "mocking", "vocational rehabilitation", "psychosis"],
      },
      {
        id: "s5",
        name: "Graphic design goal should guide graded rehabilitation",
        category: "ethics",
        severity: "important",
        clueInStem: "His father wants him to apply for a disability pension permanently, while Ethan says he wants \"a normal life\" and asks whether he can study graphic design.",
        whyItMatters: "Missing this signal means the candidate has allowed family protection or pessimism to override Ethan's autonomy and recovery goals.",
        modelWording: "Support a graded graphic-design pathway because Ethan's wish for a normal life is a legitimate recovery goal requiring realistic scaffolding.",
        keywords: ["graphic design", "normal life", "disability pension", "autonomy", "graded rehabilitation"],
      },
      {
        id: "s6",
        name: "NDIS waste framing is clinically harmful",
        category: "system_pressure",
        severity: "important",
        clueInStem: "The occupational therapist believes Ethan needs graded vocational rehabilitation, but the NDIS support coordinator says the funding is \"being wasted because he won't engage.\"",
        whyItMatters: "Missing this signal means the candidate has allowed a funding-efficiency frame to replace disability-informed support planning.",
        modelWording: "Reframe the NDIS discussion because inconsistent engagement in severe mental illness should trigger plan adaptation, not moral judgement about waste.",
        keywords: ["NDIS", "support coordinator", "wasted", "engagement", "psychosocial disability", "plan adaptation"],
      },
      {
        id: "s7",
        name: "Parents are exhausted by years of over-functioning",
        category: "family_carer",
        severity: "important",
        clueInStem: "At a case conference, Ethan's mother becomes tearful and says, \"We have organised every appointment for five years and we're exhausted.\"",
        whyItMatters: "Missing this signal means the candidate has continued relying on parental coordination despite clear carer burnout and unsustainable dependence.",
        modelWording: "Address carer burnout and over-functioning because Ethan's parents cannot remain the sole organisers of his care indefinitely.",
        keywords: ["carer burnout", "parents", "appointments", "exhausted", "over-functioning", "family support"],
      },
      {
        id: "s8",
        name: "Aboriginal health worker absence is a cultural safety gap",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "An Aboriginal health worker has not been involved in his care.",
        whyItMatters: "Missing this signal means the candidate has overlooked a specific cultural safety omission in the rehabilitation care of a young Aboriginal man.",
        modelWording: "Involve an Aboriginal health worker because culturally safe rehabilitation should include identity, family, community and culturally appropriate engagement.",
        keywords: ["Aboriginal health worker", "cultural safety", "Aboriginal", "identity", "community", "engagement"],
      },
      {
        id: "s9",
        name: "Registrar presents a false choice between safety and recovery",
        category: "governance",
        severity: "important",
        clueInStem: "The junior registrar asks whether the priority should be reducing relapse risk, increasing independence, or accepting Ethan's current limitations.",
        whyItMatters: "Missing this signal means the candidate has accepted a false hierarchy instead of teaching integrated rehabilitation reasoning.",
        modelWording: "Teach the registrar that relapse prevention, independence and realistic limitations must be held together in one rehabilitation plan.",
        keywords: ["registrar", "false choice", "relapse prevention", "independence", "rehabilitation", "supervision"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s4", "s8"],
      secondary: ["s2", "s3", "s5", "s6", "s7", "s9"],
      lowYield: [],
    },
    modelAnswer: `Ethan requires an integrated rehabilitation formulation rather than a choice between relapse prevention, independence and acceptance of disability. He has treatment-resistant schizophrenia, repeated admissions associated with medication non-adherence, persistent negative symptoms and intermittent auditory hallucinations despite clozapine. I would review clozapine response, adherence, side effects, plasma level where relevant, substance use and psychosocial supports while keeping functional recovery as a core treatment aim.

Ethan's own voice is central. He says, "Everyone keeps talking about recovery but nobody thinks I can actually do anything," and he wants "a normal life" and to study graphic design. Those are not unrealistic distractions; they are legitimate recovery goals that need graded scaffolding. The occupational therapist's view that graded vocational rehabilitation is needed fits this better than a permanent-disability-only plan.

The supported employment problem should be formulated clinically. Ethan stopped attending after believing co-workers were mocking him, which suggests residual paranoia interfering with work rather than simple refusal to engage. The response should include mental state review, workplace supports, gradual exposure, supported employment adjustment and relapse-prevention planning.

The NDIS discussion needs consultant leadership. Describing psychosocial funding as "being wasted because he won't engage" is clinically harmful and misunderstands severe mental illness. I would reframe this with the support coordinator: inconsistent engagement should lead to adapting the plan to Ethan's cognition, motivation, culture and symptoms, not abandoning support.

The family and cultural dimensions are equally important. Ethan's mother is tearful and says the parents have organised every appointment for five years and are exhausted, so the plan must reduce parental over-functioning through respite, psychoeducation and gradual transfer of responsibility. An Aboriginal health worker has not been involved, which is a cultural safety gap; involving one may strengthen identity, trust, family work and engagement. I would use the registrar's question as a teaching moment: the consultant task is to hold relapse prevention, independence and realistic supports together in one recovery-oriented plan.`,
  },
  {
    id: "SYS-002",
    questionNumber: "MEQ-089",
    topic: "mdt_systems",
    difficulty: "consultant",
    title: "ED Physician Demands Discharge of High-Risk Patient — 2am Conflict",
    candidateRole: "Consultant psychiatrist on call",
    setting: "Metropolitan Emergency Department, 2am",
    stem: `You are the consultant psychiatrist on call. At 2am you receive a call from Dr James Walsh, a senior ED consultant, who is blunt and irritated. He tells you a psychiatric patient, Tyra, a 33-year-old woman, has been in the ED for eight hours. Tyra presented after an intentional overdose of venlafaxine 375mg — approximately 20 tablets. She has been medically cleared. Dr Walsh states: "She's stable now, she says she's fine and wants to go home, she's done this before, and I need the bed."

You review Tyra's file before calling back. She has had seven presentations to this ED in the past 18 months — five of them overdoses. Her last admission was six weeks ago following a serious attempt. She is not currently linked to any community mental health service. The previous attending consultant noted "high-frequency attender, likely personality disorder."

Dr Walsh is pressuring you to give "telephone clearance to discharge" without attending. Tyra's sister — her only social support — has told the nurse she is "terrified" and cannot take Tyra home tonight as she has young children.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Intentional venlafaxine overdose requires psychiatric risk assessment",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Tyra presented after an intentional overdose of venlafaxine 375mg — approximately 20 tablets.",
        whyItMatters: "Missing this signal means the candidate has treated medical clearance as equivalent to psychiatric safety after an intentional overdose.",
        modelWording: "Assess suicide risk directly because an intentional venlafaxine overdose remains clinically significant after medical clearance.",
        keywords: ["intentional overdose", "venlafaxine", "medical clearance", "suicide risk", "psychiatric assessment"],
      },
      {
        id: "s2",
        name: "ED pressure is explicitly shaping the discharge request",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "Dr Walsh states: \"She's stable now, she says she's fine and wants to go home, she's done this before, and I need the bed.\"",
        whyItMatters: "Missing this signal means the candidate has accepted a bed-pressure narrative as a clinical formulation.",
        modelWording: "Separate ED access pressure from risk formulation because needing the bed is not a psychiatric discharge criterion.",
        keywords: ["ED pressure", "need the bed", "discharge request", "clinical independence", "system pressure"],
      },
      {
        id: "s3",
        name: "Repeated overdoses increase rather than reduce concern",
        category: "risk_self",
        severity: "critical",
        clueInStem: "She has had seven presentations to this ED in the past 18 months — five of them overdoses.",
        whyItMatters: "Missing this signal means the candidate has fallen into habituation bias by treating repeated overdoses as less serious.",
        modelWording: "Treat repeated overdoses as escalating concern because high-frequency presentation can create dangerous habituation bias.",
        keywords: ["seven presentations", "five overdoses", "habituation bias", "repetition", "suicide risk"],
      },
      {
        id: "s4",
        name: "Recent serious attempt raises post-discharge risk",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Her last admission was six weeks ago following a serious attempt.",
        whyItMatters: "Missing this signal means the candidate has ignored a recent high-severity event that should raise the threshold for unsupervised discharge.",
        modelWording: "Incorporate the serious attempt six weeks ago because recent severe self-harm makes telephone clearance unsafe.",
        keywords: ["serious attempt", "six weeks", "recent admission", "post-discharge risk", "self-harm"],
      },
      {
        id: "s5",
        name: "No community linkage is a system failure",
        category: "system_pressure",
        severity: "important",
        clueInStem: "She is not currently linked to any community mental health service.",
        whyItMatters: "Missing this signal means the candidate has planned another ED discharge without addressing the absence of continuing care.",
        modelWording: "Arrange community mental health linkage because repeated ED overdoses without ongoing care show a failed service pathway.",
        keywords: ["community mental health", "linkage", "system failure", "continuity", "ED presentations"],
      },
      {
        id: "s6",
        name: "Personality disorder label risks therapeutic nihilism",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "The previous attending consultant noted \"high-frequency attender, likely personality disorder.\"",
        whyItMatters: "Missing this signal means the candidate has allowed a stigmatising shorthand to minimise repeated self-harm and current risk.",
        modelWording: "Challenge the personality-disorder shorthand because diagnostic labels must not be used to justify reduced assessment or premature discharge.",
        keywords: ["personality disorder", "high-frequency attender", "stigma", "therapeutic nihilism", "diagnostic shorthand"],
      },
      {
        id: "s7",
        name: "Telephone clearance would be unsafe delegation",
        category: "governance",
        severity: "critical",
        clueInStem: "Dr Walsh is pressuring you to give \"telephone clearance to discharge\" without attending.",
        whyItMatters: "Missing this signal means the candidate has allowed consultant accountability to be reduced to remote approval under colleague pressure.",
        modelWording: "Refuse telephone discharge clearance because Tyra requires direct psychiatric assessment and a documented consultant formulation.",
        keywords: ["telephone clearance", "without attending", "consultant accountability", "direct assessment", "governance"],
      },
      {
        id: "s8",
        name: "Sister cannot provide the proposed safety net",
        category: "family_carer",
        severity: "important",
        clueInStem: "Tyra's sister — her only social support — has told the nurse she is \"terrified\" and cannot take Tyra home tonight as she has young children.",
        whyItMatters: "Missing this signal means the candidate has discharged Tyra into a home plan that the only available support has explicitly refused.",
        modelWording: "Do not rely on the sister for supervision because she is terrified, unavailable tonight and has young children to protect.",
        keywords: ["sister", "terrified", "cannot take home", "young children", "social support", "safety net"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4", "s7"],
      secondary: ["s5", "s6", "s8"],
      lowYield: [],
    },
    modelAnswer: `I would not give telephone clearance to discharge Tyra. She presented after an intentional overdose of approximately 20 venlafaxine tablets, has had seven ED presentations in 18 months including five overdoses, and had a serious attempt six weeks ago. Medical clearance and current denial do not make this psychiatrically safe.

Dr Walsh's pressure is understandable in an overcrowded ED, but the statement "I need the bed" is not a clinical formulation. I would acknowledge his frustration, explain that I need to assess Tyra directly or arrange an equivalent safe senior review, and make clear that discharge will be based on psychiatric risk, supports and follow-up rather than access pressure.

The repeated presentations increase concern rather than reduce it. The phrase "she's done this before" risks habituation bias, and the previous note of "high-frequency attender, likely personality disorder" risks therapeutic nihilism. A personality-disorder formulation, if relevant, should guide structured and compassionate care, not justify a lower standard of assessment.

The system has also failed Tyra. She has no current community mental health linkage despite repeated overdoses and recent serious attempt. Regardless of whether she is admitted or discharged after assessment, she needs active linkage to community care, a safety plan, means restriction and clear follow-up.

Her sister cannot be used as the safety net tonight. She is Tyra's only social support, is terrified, cannot take her home and has young children. Any discharge plan relying on her would be unsafe. I would document the request for telephone clearance, my refusal, the direct assessment plan, the ED pressure, the risk formulation and the agreed disposition.`,
  },
  {
    id: "SYS-003",
    questionNumber: "MEQ-090",
    topic: "mdt_systems",
    difficulty: "consultant",
    title: "Inpatient Bed Pressure — Three Unsafe Discharges Requested by NUM",
    candidateRole: "Consultant psychiatrist, acute inpatient unit",
    setting: "Acute inpatient psychiatric unit — Monday morning ward meeting",
    stem: `It is Monday morning. During the ward team meeting, the Nursing Unit Manager Sandra announces that there are 22 patients in a 20-bed unit. She states the hospital has issued a "Code Yellow — Capacity Alert" and all teams must review patients for discharge by midday. She singles out your patients: "These three need to go — Greg, Nasrin, and William."

You review the three patients:

Greg, 52, admitted one week ago following a serious paracetamol overdose. Marked improvement documented by the registrar. Currently euthymic, denies SI. No safety plan documented. No community follow-up arranged. No family contact made.

Nasrin, 35, admitted 10 days ago for acute psychosis secondary to bipolar I. Still responding to antipsychotic medication. Thought-disordered with limited insight. Two young children at home. Husband is currently on a fly-in-fly-out rotation and unavailable for five days.

William, 67, admitted two weeks ago for severe psychotic depression. Halfway through an ECT course with early improvement. His wife told nursing staff last week she is "afraid to have him home" and cannot manage him alone.

Sandra tells you: "If you do not clear these three by midday, it will escalate to the Medical Director."`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Capacity alert creates real but non-clinical discharge pressure",
        category: "system_pressure",
        severity: "critical",
        clueInStem: "She states the hospital has issued a \"Code Yellow — Capacity Alert\" and all teams must review patients for discharge by midday.",
        whyItMatters: "Missing this signal means the candidate has allowed a hospital capacity alert to replace individual clinical discharge assessment.",
        modelWording: "Acknowledge the Code Yellow while maintaining that discharge decisions must remain individual clinical decisions.",
        keywords: ["Code Yellow", "capacity alert", "bed pressure", "discharge review", "clinical decision"],
      },
      {
        id: "s2",
        name: "NUM's named discharge list should not determine disposition",
        category: "governance",
        severity: "important",
        clueInStem: "She singles out your patients: \"These three need to go — Greg, Nasrin, and William.\"",
        whyItMatters: "Missing this signal means the candidate has accepted administrative selection of patients for discharge without clinical reasoning.",
        modelWording: "Review Greg, Nasrin and William clinically rather than accepting the NUM's list as a discharge directive.",
        keywords: ["NUM", "these three need to go", "administrative pressure", "clinical review", "disposition"],
      },
      {
        id: "s3",
        name: "Greg lacks minimum post-overdose discharge safeguards",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Greg, 52, admitted one week ago following a serious paracetamol overdose. Marked improvement documented by the registrar. Currently euthymic, denies SI. No safety plan documented. No community follow-up arranged. No family contact made.",
        whyItMatters: "Missing this signal means the candidate has accepted euthymia and denial of suicidal ideation despite absent safety planning after a serious overdose.",
        modelWording: "Do not discharge Greg until safety plan, family contact and community follow-up are completed because denial of SI is not enough after a serious overdose.",
        keywords: ["Greg", "paracetamol overdose", "no safety plan", "no follow-up", "family contact", "denies SI"],
      },
      {
        id: "s4",
        name: "Nasrin's psychosis and children create safeguarding risk",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "Nasrin, 35, admitted 10 days ago for acute psychosis secondary to bipolar I. Still responding to antipsychotic medication. Thought-disordered with limited insight. Two young children at home. Husband is currently on a fly-in-fly-out rotation and unavailable for five days.",
        whyItMatters: "Missing this signal means the candidate has considered discharge while Nasrin remains thought-disordered and unsupported with two young children at home.",
        modelWording: "Do not discharge Nasrin without child-safety and support planning because she remains thought-disordered and her husband is unavailable.",
        keywords: ["Nasrin", "thought-disordered", "children", "husband unavailable", "child safety", "bipolar"],
      },
      {
        id: "s5",
        name: "William is mid-ECT with an overwhelmed carer",
        category: "disposition",
        severity: "critical",
        clueInStem: "William, 67, admitted two weeks ago for severe psychotic depression. Halfway through an ECT course with early improvement. His wife told nursing staff last week she is \"afraid to have him home\" and cannot manage him alone.",
        whyItMatters: "Missing this signal means the candidate has accepted premature discharge during treatment for severe psychotic depression despite carer inability to manage.",
        modelWording: "Do not discharge William mid-ECT unless a safe treatment and carer-support plan is established because early improvement is not recovery.",
        keywords: ["William", "ECT", "psychotic depression", "wife afraid", "carer", "premature discharge"],
      },
      {
        id: "s6",
        name: "Medical Director escalation should be welcomed and documented",
        category: "governance",
        severity: "important",
        clueInStem: "Sandra tells you: \"If you do not clear these three by midday, it will escalate to the Medical Director.\"",
        whyItMatters: "Missing this signal means the candidate has treated escalation as a threat rather than an appropriate governance route for unsafe capacity pressure.",
        modelWording: "Document the clinical reasons and welcome Medical Director review because transparent escalation protects patient safety and consultant decision-making.",
        keywords: ["Medical Director", "escalation", "document", "clinical reasoning", "governance", "deadline"],
      },
      {
        id: "s7",
        name: "Overcapacity requires alternative safe flow actions",
        category: "system_pressure",
        severity: "important",
        clueInStem: "During the ward team meeting, the Nursing Unit Manager Sandra announces that there are 22 patients in a 20-bed unit.",
        whyItMatters: "Missing this signal means the candidate has refused unsafe discharges without helping solve the real unit overcapacity problem.",
        modelWording: "Lead safe flow planning because 22 patients in a 20-bed unit requires escalation, prioritisation and alternatives to unsafe discharge.",
        keywords: ["22 patients", "20-bed unit", "overcapacity", "flow", "safe alternatives", "leadership"],
      },
      {
        id: "s8",
        name: "Each patient needs an individual defensible discharge decision",
        category: "ethics",
        severity: "important",
        clueInStem: "You review the three patients:",
        whyItMatters: "Missing this signal means the candidate has responded globally to bed pressure rather than documenting individual risk, safeguards and least restrictive options.",
        modelWording: "Document an individual decision for each patient because bed pressure cannot justify group discharge without patient-specific reasoning.",
        keywords: ["individual decision", "defensible", "discharge", "patient-specific", "clinical reasoning"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s3", "s4", "s5"],
      secondary: ["s2", "s6", "s7", "s8"],
      lowYield: [],
    },
    modelAnswer: `I would acknowledge the Code Yellow and the reality that 22 patients in a 20-bed unit is unsafe, but I would not discharge Greg, Nasrin or William simply because a discharge list has been named by the NUM. The consultant role is to help patient flow while maintaining individual clinical responsibility for each discharge decision.

Greg is not safe for discharge on the information provided. He was admitted one week ago after a serious paracetamol overdose. Although he is currently euthymic and denies suicidal ideation, there is no safety plan, no community follow-up and no family contact. Those are minimum post-overdose discharge safeguards, so discharge by midday would be clinically indefensible.

Nasrin is also not safe for discharge. She remains thought-disordered with limited insight while still responding to antipsychotic medication. She has two young children at home and her husband is on fly-in-fly-out work and unavailable for five days. Discharge would create risk to Nasrin and potential child-safety concerns unless a robust alternative caregiving and support plan is established.

William should not be discharged simply because there is early improvement. He has severe psychotic depression and is halfway through an ECT course. His wife has told staff she is "afraid to have him home" and cannot manage him alone. A mid-ECT discharge would require a defensible treatment-continuity plan and carer-support plan, neither of which is present.

I would document the individual clinical reasons for each decision and tell Sandra that I welcome escalation to the Medical Director if needed. That should be framed as transparent governance, not personal conflict. At the same time, I would actively help with safe flow by reviewing all patients for those who are clinically ready, expediting discharge tasks, escalating overcapacity risk, considering step-down options and seeking executive support for alternatives to unsafe discharge.`,
  },
];
