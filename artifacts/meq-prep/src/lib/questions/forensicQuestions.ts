import type { QuizStem } from "../quizData";

export const FOR_STEMS: QuizStem[] = [
  {
    id: "FOR-001",
    questionNumber: "MEQ-065",
    topic: "forensic",
    difficulty: "consultant",
    title: "Stalking and erotomania in community care",
    candidateRole: "Consultant psychiatrist, community forensic consultation service",
    setting: "Community mental health team risk review",
    stem: `You are the consultant psychiatrist asked to advise a community mental health team about Marcus, a 44-year-old man with schizophrenia and previous stalking convictions.

Marcus has been sending hundreds of messages to a local newsreader, believing she is communicating with him through television. He says, "She smiles at the end of the bulletin because she knows I'm watching." Police have warned him twice after he attended the television studio reception. Marcus says, "Her husband is the only thing keeping us apart."

His case manager says Marcus is taking medication inconsistently and has started drinking again. The team is unsure whether to breach confidentiality to warn the newsreader or rely on police. Marcus denies intent to harm and says, "I just need to explain our connection in person."`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Erotomanic delusion with fixation",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "She smiles at the end of the bulletin because she knows I'm watching.",
        whyItMatters: "Erotomanic fixation can drive persistent stalking and escalation despite denial of harmful intent.",
        modelWording: "Formulate erotomanic delusional belief with fixation and behavioural pursuit as central to risk.",
        keywords: ["erotomania", "delusional fixation", "stalking", "psychosis", "behavioural pursuit", "risk formulation"],
      },
      {
        id: "s2",
        name: "Identifiable victim and potential rival",
        category: "risk_others",
        severity: "critical",
        clueInStem: "Her husband is the only thing keeping us apart.",
        whyItMatters: "Identification of a rival increases risk to the victim and third parties.",
        modelWording: "Assess risk to the newsreader and perceived rival, including escalation, access and grievance.",
        keywords: ["identifiable victim", "rival", "violence risk", "stalking", "duty to protect", "grievance"],
      },
      {
        id: "s3",
        name: "Escalation from messages to approach behaviour",
        category: "risk_others",
        severity: "important",
        clueInStem: "attended the television studio reception.",
        whyItMatters: "Physical approach behaviour marks escalation and increases concern despite denial.",
        modelWording: "Treat attendance at the studio as escalation from ideation/messages to approach behaviour.",
        keywords: ["approach behaviour", "escalation", "studio attendance", "stalking behaviour", "proximity", "victim safety"],
      },
      {
        id: "s4",
        name: "Medication non-adherence",
        category: "collateral",
        severity: "important",
        clueInStem: "taking medication inconsistently",
        whyItMatters: "Non-adherence may worsen delusional intensity and reduce community manageability.",
        modelWording: "Review adherence and consider assertive treatment options because relapse may increase stalking risk.",
        keywords: ["medication adherence", "relapse", "assertive treatment", "psychosis", "community risk", "case manager"],
      },
      {
        id: "s5",
        name: "Alcohol relapse",
        category: "substance_use",
        severity: "important",
        clueInStem: "has started drinking again.",
        whyItMatters: "Alcohol increases disinhibition and risk of impulsive approach or confrontation.",
        modelWording: "Assess alcohol use as a dynamic risk factor for disinhibition and escalation.",
        keywords: ["alcohol", "disinhibition", "dynamic risk", "stalking escalation", "relapse", "impulsivity"],
      },
      {
        id: "s6",
        name: "Confidentiality versus duty to protect",
        category: "ethics",
        severity: "optional",
        clueInStem: "whether to breach confidentiality to warn the newsreader",
        whyItMatters: "The team must balance confidentiality with serious foreseeable risk to an identifiable person.",
        modelWording: "Consider lawful information sharing or warning where there is serious, imminent or foreseeable risk to identifiable people.",
        keywords: ["confidentiality", "duty to warn", "duty to protect", "information sharing", "victim safety", "ethics"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Marcus is presenting with erotomanic delusional fixation that has already moved from belief into behaviour, and the consultant task is to manage identifiable victim risk rather than simply describe a psychotic symptom. His statement, "She smiles at the end of the bulletin because she knows I'm watching," is the central diagnostic clue: he is interpreting ordinary public behaviour by the newsreader as personal communication. In a man with schizophrenia and previous stalking convictions, this is not a harmless fantasy. It is a delusional framework that can drive persistent pursuit, grievance and escalation even when he denies intent to harm.

The second critical clue is "Her husband is the only thing keeping us apart." That introduces a perceived rival and therefore widens the risk formulation beyond the newsreader herself. I would assess risk to the newsreader, her husband, workplace staff and anyone Marcus perceives as obstructing the relationship. His attendance at "the television studio reception" shows escalation from messages to approach behaviour, and his statement that "I just need to explain our connection in person" indicates an ongoing intention to gain proximity. Denial of intent to harm is not sufficient when the behavioural pattern is escalating and the belief is fixed.

I would urgently convene a risk meeting with the community team, forensic advice and police liaison. I would clarify the number and content of messages, whether there are threats, whether he knows the victim's home address, whether he has weapons, transport, money, substance use, prior breaches, and whether he has approached the studio since the warnings. I would also ask the team to review medication adherence because the case manager reports he is "taking medication inconsistently," and to assess alcohol because he "has started drinking again." Both increase risk by worsening delusional intensity, disinhibition and persistence.

The ethical tension is confidentiality versus duty to protect. The team is unsure whether to breach confidentiality "to warn the newsreader or rely on police." I would not frame this as an all-or-nothing betrayal of Marcus. I would explain to Marcus, where safe, that confidentiality has limits where there is serious foreseeable risk to identifiable people. I would then consider the minimum necessary lawful disclosure through police or other appropriate channels, including victim safety planning, workplace security advice and potentially warning the newsreader or her representative depending on local law and risk. The decision must be documented with the exact risk rationale and why disclosure was proportionate.

Treatment and legal options must be active, not passive. If Marcus is willing to engage, I would intensify follow-up, address alcohol use, review medication and consider depot or other adherence supports. If he refuses treatment or continues approach behaviour and mental illness is driving serious risk, I would consider Mental Health Act assessment or CTO review depending on jurisdiction and criteria. Behavioural restrictions, police orders or forensic community management may be required in parallel; psychiatric treatment alone does not replace victim protection.

My final advice would be that the team should not simply rely on police warnings or Marcus's denial. The stem contains delusional fixation, identified victim, perceived rival, approach behaviour, non-adherence and alcohol relapse. A defensible consultant plan must integrate psychiatric treatment, police liaison, victim safety, lawful information sharing, documentation and ongoing monitoring of escalation.`,
  },
  {
    id: "FOR-002",
    questionNumber: "MEQ-066",
    topic: "forensic",
    difficulty: "consultant",
    title: "NGMI report and fitness to stand trial",
    candidateRole: "Consultant psychiatrist, forensic psychiatry service",
    setting: "Court-ordered forensic assessment",
    stem: `You are a forensic consultant psychiatrist asked to prepare a court report for Arun, a 31-year-old man charged with aggravated assault after stabbing a stranger at a bus stop.

Arun says, "The man was a demon wearing human skin, and I had to stop him before he killed children." At interview he is disorganised, repeatedly asks what court is, and says, "My lawyer is part of the demon network." Prison health records show untreated psychosis for several months before the alleged offence.

The solicitor asks whether Arun is "not guilty by reason of mental illness." The magistrate has also requested comment on fitness to stand trial. The treating team asks whether you can include treatment recommendations in the same report.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Mental state at time of offence",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "The man was a demon wearing human skin",
        whyItMatters: "NGMI/mental impairment opinions require analysis of mental state at the time of alleged offence, not only current diagnosis.",
        modelWording: "Assess whether psychosis at the time of offence impaired understanding of nature/quality or wrongfulness of the act according to jurisdictional legal tests.",
        keywords: ["NGMI", "mental impairment", "psychosis", "offence mental state", "wrongfulness", "legal test"],
      },
      {
        id: "s2",
        name: "Fitness to stand trial concern",
        category: "capacity",
        severity: "critical",
        clueInStem: "repeatedly asks what court is",
        whyItMatters: "Fitness requires ability to understand proceedings, instruct counsel and participate, separate from NGMI.",
        modelWording: "Assess fitness to stand trial separately from criminal responsibility, focusing on understanding proceedings and ability to instruct counsel.",
        keywords: ["fitness to stand trial", "court understanding", "instruct counsel", "participation", "legal capacity", "forensic assessment"],
      },
      {
        id: "s3",
        name: "Paranoid belief about lawyer",
        category: "consent_refusal",
        severity: "important",
        clueInStem: "My lawyer is part of the demon network.",
        whyItMatters: "Paranoia toward counsel may impair ability to instruct and engage in defence.",
        modelWording: "Assess whether paranoid beliefs about his lawyer impair his ability to communicate rationally with counsel.",
        keywords: ["paranoia", "lawyer", "fitness", "instructing counsel", "rational communication", "delusion"],
      },
      {
        id: "s4",
        name: "Untreated psychosis predating offence",
        category: "collateral",
        severity: "important",
        clueInStem: "untreated psychosis for several months before the alleged offence.",
        whyItMatters: "Collateral timeline supports assessment of offence-related mental state.",
        modelWording: "Use collateral and prison health records to establish longitudinal psychosis before and during the alleged offence.",
        keywords: ["collateral records", "prison health", "timeline", "untreated psychosis", "offence", "longitudinal history"],
      },
      {
        id: "s5",
        name: "Clinical versus legal standard",
        category: "ethics",
        severity: "important",
        clueInStem: "not guilty by reason of mental illness.",
        whyItMatters: "The expert provides psychiatric opinion mapped to legal criteria, not a legal verdict.",
        modelWording: "Clarify that the psychiatrist gives an expert opinion addressing legal criteria but the court determines the legal outcome.",
        keywords: ["expert witness", "legal criteria", "court decision", "clinical opinion", "forensic report", "role clarity"],
      },
      {
        id: "s6",
        name: "Dual role risk",
        category: "governance",
        severity: "optional",
        clueInStem: "include treatment recommendations in the same report.",
        whyItMatters: "Forensic evaluator must avoid role confusion between treating and independent expert functions.",
        modelWording: "Maintain role clarity between independent forensic opinion and treating recommendations, while noting treatment needs where relevant.",
        keywords: ["dual role", "forensic report", "treatment recommendations", "independence", "role clarity", "governance"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Arun's report must separate two legal questions that are often confused: fitness to stand trial and criminal responsibility or mental impairment at the time of the alleged offence. The stem gives powerful evidence of psychosis, but a forensic consultant cannot simply write "psychotic, therefore NGMI." His statement about the alleged victim, "The man was a demon wearing human skin," is highly relevant to his mental state at the time of the stabbing because it suggests he may have misperceived the nature of the person and acted under a delusional belief. However, the legal question is jurisdiction-specific: whether the mental impairment affected his understanding of the nature and quality of the act, wrongfulness, or another statutory criterion. The court decides the legal outcome; I provide an expert psychiatric opinion mapped to the legal test.

Fitness is a separate present-focused question. Arun "repeatedly asks what court is" and says, "My lawyer is part of the demon network." These are not merely psychotic symptoms; they may directly impair his ability to understand proceedings, instruct counsel, follow evidence, participate rationally, and make decisions about plea or defence. I would assess whether he understands the charge, the roles of judge, magistrate, jury, prosecutor and defence lawyer, the possible outcomes, the adversarial nature of proceedings, and whether he can communicate with counsel in a rational way. His paranoid belief about his lawyer is particularly important because it may prevent him from giving instructions even if he can repeat some factual information.

The prison health records showing "untreated psychosis for several months before the alleged offence" are critical collateral. For an opinion on mental state at the time of the alleged offence, I would reconstruct the timeline using police facts, witness statements, clinical records, prison health records, family collateral, substance-use information and my interview. I would look for evidence of psychotic symptoms before, during and after the stabbing, as well as any motive, planning, concealment, intoxication or behaviour suggesting awareness of wrongfulness. The delusional statement about demons is highly relevant, but I would not rely on one interview statement alone.

The solicitor's request about "not guilty by reason of mental illness" requires role clarity. I would explain in the report that the psychiatrist does not determine guilt or the legal verdict. My opinion addresses diagnosis, mental state, capacities relevant to the legal test, fitness, risk and treatment needs within my expertise. I would state sources of information, limitations, inconsistencies and the degree of confidence. If information is insufficient, I would say so rather than overstate.

The treating team's question about including treatment recommendations in the same report raises a dual-role issue. A forensic report can include treatment needs if requested and relevant, especially if fitness restoration or risk management depends on treatment. However, I would maintain independence and avoid becoming the treating clinician within the same evaluative role. I would distinguish recommendations for mental health care, medication, hospital transfer or fitness restoration from the ultimate legal questions.

My report would therefore address current diagnosis, current fitness, mental state at the time of the offence, the relationship between psychosis and the alleged stabbing, sources and limitations, risk considerations and treatment recommendations if within the referral question. I would avoid conclusory statements unsupported by legal reasoning. The consultant-level task is to translate clinical facts into legal standards without collapsing clinical psychosis, incapacity, criminal responsibility and treatment need into one undifferentiated opinion.`,
  },
  {
    id: "FOR-003",
    questionNumber: "MEQ-067",
    topic: "forensic",
    difficulty: "consultant",
    title: "Conditional discharge of forensic patient",
    candidateRole: "Consultant forensic psychiatrist, community forensic service",
    setting: "Forensic tribunal conditional discharge review",
    stem: `You are the consultant forensic psychiatrist reviewing Malik, a 38-year-old forensic patient conditionally discharged after a serious assault during methamphetamine-induced psychosis.

Malik has been living in supported accommodation for nine months and attending appointments. His support worker reports he missed two urine drug screens and was seen with former drug-using peers. Malik says, "Everyone deserves a night off; I'm not a prisoner anymore." He denies psychotic symptoms and says medication makes him "slow and useless."

The victim lives in the same suburb and has requested notification if Malik's conditions change. Police report Malik was recently seen near the street where the assault occurred. The tribunal asks whether conditional discharge remains appropriate or whether recall is required.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Substance relapse risk linked to index offence",
        category: "substance_use",
        severity: "critical",
        clueInStem: "missed two urine drug screens",
        whyItMatters: "Missed screens may indicate relapse risk directly linked to prior serious violence.",
        modelWording: "Treat missed drug screens and contact with drug-using peers as dynamic risk factors given the index offence occurred during methamphetamine psychosis.",
        keywords: ["missed drug screens", "methamphetamine", "index offence", "dynamic risk", "relapse", "violence"],
      },
      {
        id: "s2",
        name: "Victim proximity and safety",
        category: "risk_others",
        severity: "critical",
        clueInStem: "The victim lives in the same suburb",
        whyItMatters: "Geographic proximity increases risk and requires victim safety planning and condition review.",
        modelWording: "Assess victim safety and geographic proximity, including whether exclusion zones or notification conditions remain adequate.",
        keywords: ["victim safety", "proximity", "exclusion zone", "conditional discharge", "violence risk", "notification"],
      },
      {
        id: "s3",
        name: "Poor insight into supervision",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "I'm not a prisoner anymore.",
        whyItMatters: "Minimising conditions may predict non-adherence and escalating risk.",
        modelWording: "Assess insight into forensic conditions and whether minimisation undermines community manageability.",
        keywords: ["insight", "forensic conditions", "minimisation", "community manageability", "supervision"],
      },
      {
        id: "s4",
        name: "Medication adherence ambivalence",
        category: "consent_refusal",
        severity: "important",
        clueInStem: `medication makes him "slow and useless."`,
        whyItMatters: "Side effects may drive non-adherence and relapse unless addressed.",
        modelWording: "Review medication adherence and side effects because treatment ambivalence may increase relapse risk.",
        keywords: ["medication adherence", "side effects", "relapse prevention", "forensic patient", "treatment ambivalence"],
      },
      {
        id: "s5",
        name: "Possible breach of geographic conditions",
        category: "governance",
        severity: "important",
        clueInStem: "seen near the street where the assault occurred.",
        whyItMatters: "Potential breach requires factual verification and tribunal/police liaison.",
        modelWording: "Verify possible condition breach and liaise with police, tribunal and supervising agencies.",
        keywords: ["condition breach", "police liaison", "tribunal", "geographic restriction", "supervision", "verification"],
      },
      {
        id: "s6",
        name: "Recall versus enhanced supervision",
        category: "disposition",
        severity: "optional",
        clueInStem: "whether recall is required.",
        whyItMatters: "Consultant must weigh proportional response: enhanced conditions, treatment adjustment or recall.",
        modelWording: "Recommend proportionate response ranging from intensified supervision to recall depending on verified risk escalation.",
        keywords: ["recall", "enhanced supervision", "conditional discharge", "proportionality", "community risk", "tribunal"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Malik's conditional discharge review must start from the index offence formulation. He was conditionally discharged after a serious assault during methamphetamine-induced psychosis, so missed drug screens are not a minor compliance issue. The support worker's report that he "missed two urine drug screens" and was seen with former drug-using peers is a dynamic risk warning directly linked to the mechanism of his previous violence. I would treat this as possible early relapse into the same risk pathway, not as ordinary socialising or harmless non-attendance.

The second critical issue is victim safety. The stem says, "The victim lives in the same suburb" and has requested notification if Malik's conditions change. That means geographic proximity is not abstract. Police also report Malik was "seen near the street where the assault occurred," which may represent a breach, an accidental encounter or emerging preoccupation; it must be verified urgently. I would liaise with police, the tribunal/supervising authority, supported accommodation and the case manager to clarify location, timing, conditions, exclusion zones, and whether the victim has been exposed to increased risk.

Malik's statement, "I'm not a prisoner anymore," suggests minimisation of the purpose of forensic conditions. It may reflect a reasonable desire for autonomy after nine months in the community, but in context it also raises concern that he does not understand or accept the risk-management function of supervision. Similarly, his complaint that medication makes him "slow and useless" should not be dismissed. Side effects can drive non-adherence and relapse, and a consultant response must address them actively rather than simply tighten surveillance. I would review medication effectiveness, side effects, adherence, mental state, emerging psychosis, sleep, mood, cognition and substance cravings.

The disposition question is not simply recall or ignore. The tribunal asks whether "recall is required," and the answer depends on whether risk escalation is verified and manageable. If missed screens reflect relapse, if he has breached geographic conditions, if psychosis is returning, if he is avoiding supervision, or if victim proximity cannot be managed, I would recommend recall or inpatient reassessment because community risk may no longer be containable. If investigation shows no substance use, no breach and good engagement, a proportionate alternative may be enhanced supervision, increased testing, substance-use treatment, medication review, reinforced exclusion zones and closer victim-safety planning.

The ethical tension is between Malik's liberty and public/victim safety. Conditional discharge is meant to be the least restrictive safe option, not a reward that continues regardless of risk. Equally, recall is a serious deprivation of liberty and should not be used punitively for minor uncertainty. I would make my recommendation based on evidence, dynamic risk and manageability, documenting uncertainty where it remains.

My tribunal report would explicitly link missed screens, former drug-using peers, medication ambivalence, possible geographic breach and victim proximity to the original violence formulation. It would state what has been verified, what remains uncertain, what immediate actions have been taken to protect the victim, and why recall or enhanced conditions are the proportionate response. That is the consultant role: not merely to list risks, but to advise the tribunal on whether the community plan still safely contains the known pathway to serious harm.`,
  },
];
