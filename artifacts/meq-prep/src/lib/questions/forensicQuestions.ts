import type { QuizStem } from "../quizData";

export const FOR_STEMS: QuizStem[] = [
  {
    id: "FOR-001",
    questionNumber: "MEQ-065",
    topic: "forensic",
    difficulty: "consultant",
    title: "Stalking and Erotomania in Community Care",
    candidateRole: "Consultant psychiatrist, community forensic consultation service",
    setting: "Community mental health team risk review",
    stem: `You are the consultant psychiatrist asked to advise a community mental health team about Marcus, a 44-year-old man with schizophrenia and previous stalking convictions.

Marcus has been sending hundreds of messages to a local newsreader, believing she is communicating with him through television. He says, "She smiles at the end of the bulletin because she knows I'm watching." Police have warned him twice after he attended the television studio reception. Marcus says, "Her husband is the only thing keeping us apart."

His case manager says Marcus is taking medication inconsistently and has started drinking again. The team is unsure whether to breach confidentiality to warn the newsreader or rely on police. Marcus denies intent to harm and says, "I just need to explain our connection in person."`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Erotomanic delusion is driving stalking behaviour",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "He says, \"She smiles at the end of the bulletin because she knows I'm watching.\"",
        whyItMatters: "Missing this signal means the candidate has not recognised that Marcus's pursuit is driven by fixed delusional interpretation rather than ordinary romantic interest.",
        modelWording: "Formulate erotomanic delusional fixation as central to risk because Marcus interprets a public television gesture as personal communication.",
        keywords: ["erotomania", "delusional fixation", "stalking", "psychosis", "behavioural pursuit", "risk formulation"],
      },
      {
        id: "s2",
        name: "Perceived husband rival increases risk to identifiable people",
        category: "risk_others",
        severity: "critical",
        clueInStem: "Marcus says, \"Her husband is the only thing keeping us apart.\"",
        whyItMatters: "Missing this signal means the candidate has not recognised that Marcus has identified a rival who may become a target of grievance or violence.",
        modelWording: "Assess risk to the newsreader, her husband and workplace staff because Marcus has named a perceived obstacle to the delusional relationship.",
        keywords: ["identifiable victim", "rival", "violence risk", "stalking", "duty to protect", "grievance"],
      },
      {
        id: "s3",
        name: "Approach behaviour shows escalation beyond messaging",
        category: "risk_others",
        severity: "important",
        clueInStem: "Police have warned him twice after he attended the television studio reception.",
        whyItMatters: "Missing this signal means the candidate has treated the behaviour as online harassment despite physical approach to the victim's workplace.",
        modelWording: "Treat attendance at the studio as escalation because Marcus has moved from messages to physical proximity despite police warnings.",
        keywords: ["approach behaviour", "escalation", "studio attendance", "stalking behaviour", "proximity", "victim safety"],
      },
      {
        id: "s4",
        name: "Inconsistent medication may worsen delusional intensity",
        category: "collateral",
        severity: "important",
        clueInStem: "His case manager says Marcus is taking medication inconsistently and has started drinking again.",
        whyItMatters: "Missing this signal means the candidate has not linked non-adherence with possible worsening psychosis and reduced community manageability.",
        modelWording: "Review adherence and treatment intensity because inconsistent medication may increase the intensity and persistence of stalking delusions.",
        keywords: ["medication adherence", "relapse", "assertive treatment", "psychosis", "community risk", "case manager"],
      },
      {
        id: "s5",
        name: "Alcohol relapse increases disinhibition and approach risk",
        category: "substance_use",
        severity: "important",
        clueInStem: "His case manager says Marcus is taking medication inconsistently and has started drinking again.",
        whyItMatters: "Missing this signal means the candidate has not accounted for alcohol-related disinhibition in a man already breaching proximity boundaries.",
        modelWording: "Assess alcohol use urgently because drinking may increase impulsivity, grievance and likelihood of further approach behaviour.",
        keywords: ["alcohol", "disinhibition", "dynamic risk", "stalking escalation", "relapse", "impulsivity"],
      },
      {
        id: "s6",
        name: "Confidentiality may need to yield to victim protection",
        category: "ethics",
        severity: "important",
        clueInStem: "The team is unsure whether to breach confidentiality to warn the newsreader or rely on police.",
        whyItMatters: "Missing this signal means the candidate has not balanced confidentiality against serious foreseeable risk to an identifiable person.",
        modelWording: "Consider lawful minimum-necessary information sharing because the newsreader and her husband are identifiable people at potential risk.",
        keywords: ["confidentiality", "duty to warn", "duty to protect", "information sharing", "victim safety", "ethics"],
      },
      {
        id: "s7",
        name: "Prior stalking convictions raise baseline forensic risk",
        category: "governance",
        severity: "important",
        clueInStem: "You are the consultant psychiatrist asked to advise a community mental health team about Marcus, a 44-year-old man with schizophrenia and previous stalking convictions.",
        whyItMatters: "Missing this signal means the candidate has ignored historical stalking behaviour that makes the current pattern more concerning and less dismissible.",
        modelWording: "Integrate the previous stalking convictions into the risk formulation because current erotomanic pursuit is occurring in a known pattern of offending.",
        keywords: ["previous stalking convictions", "forensic history", "baseline risk", "pattern", "recidivism", "community forensic"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5", "s6", "s7"],
      lowYield: [],
    },
    modelAnswer: `Marcus is presenting with erotomanic delusional fixation that has already moved from belief into behaviour. His statement, "She smiles at the end of the bulletin because she knows I'm watching," shows that he is interpreting ordinary public behaviour by the newsreader as personal communication. In a man with schizophrenia and previous stalking convictions, this is not a harmless fantasy; it is a recurrent forensic risk pattern.

The risk formulation must identify specific people. The newsreader is an identifiable victim, and Marcus's statement that "Her husband is the only thing keeping us apart" introduces a perceived rival. I would assess risk to the newsreader, her husband, reception staff, security staff and anyone Marcus believes is obstructing the relationship.

His behaviour has escalated beyond messages. Police have warned him twice after he attended the television studio reception, and he now says, "I just need to explain our connection in person." Denial of intent to harm is not sufficient when the delusional belief is fixed, the pursuit is persistent, and approach behaviour is continuing despite police warnings.

The dynamic risk factors also need active management. The case manager reports inconsistent medication and renewed alcohol use. I would review mental state, adherence, depot or other assertive treatment options, alcohol use, access to transport, weapons, online behaviour, knowledge of the victim's address and any further breaches or attempts to approach the studio.

The confidentiality question must be handled lawfully and proportionately. I would not treat warning the newsreader as an all-or-nothing breach. I would consider minimum-necessary information sharing through police or other appropriate channels, victim safety planning, workplace security advice and, where risk justifies it, direct or indirect warning depending on local law. The rationale should be documented clearly.

My advice would be that the team should not simply rely on Marcus's denial or on police having warned him. A defensible consultant plan integrates psychiatric treatment, alcohol intervention, forensic risk management, police liaison, victim safety, lawful information sharing and monitoring of escalation. If risk cannot be safely managed voluntarily, Mental Health Act assessment or CTO review may be required depending on jurisdiction and criteria.`,
  },
  {
    id: "FOR-002",
    questionNumber: "MEQ-066",
    topic: "forensic",
    difficulty: "consultant",
    title: "NGMI Report and Fitness to Stand Trial",
    candidateRole: "Consultant psychiatrist, forensic psychiatry service",
    setting: "Court-ordered forensic assessment",
    stem: `You are a forensic consultant psychiatrist asked to prepare a court report for Arun, a 31-year-old man charged with aggravated assault after stabbing a stranger at a bus stop.

Arun says, "The man was a demon wearing human skin, and I had to stop him before he killed children." At interview he is disorganised, repeatedly asks what court is, and says, "My lawyer is part of the demon network." Prison health records show untreated psychosis for several months before the alleged offence.

The solicitor asks whether Arun is "not guilty by reason of mental illness." The magistrate has also requested comment on fitness to stand trial. The treating team asks whether you can include treatment recommendations in the same report.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Offence mental state must be mapped to the legal test",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "Arun says, \"The man was a demon wearing human skin, and I had to stop him before he killed children.\"",
        whyItMatters: "Missing this signal means the candidate has not linked the delusional account to the legal criteria for criminal responsibility at the time of the alleged offence.",
        modelWording: "Assess the alleged offence mental state against the jurisdictional legal test because the demon belief may affect nature, quality or wrongfulness of the act.",
        keywords: ["NGMI", "mental impairment", "psychosis", "offence mental state", "wrongfulness", "legal test"],
      },
      {
        id: "s2",
        name: "Current understanding of court process is impaired",
        category: "capacity",
        severity: "critical",
        clueInStem: "At interview he is disorganised, repeatedly asks what court is, and says, \"My lawyer is part of the demon network.\"",
        whyItMatters: "Missing this signal means the candidate has conflated psychosis with NGMI while overlooking present fitness to participate in proceedings.",
        modelWording: "Assess fitness to stand trial separately because repeatedly asking what court is suggests impaired understanding of proceedings.",
        keywords: ["fitness to stand trial", "court understanding", "instruct counsel", "participation", "legal capacity", "forensic assessment"],
      },
      {
        id: "s3",
        name: "Paranoid belief about lawyer may impair instructions",
        category: "consent_refusal",
        severity: "important",
        clueInStem: "At interview he is disorganised, repeatedly asks what court is, and says, \"My lawyer is part of the demon network.\"",
        whyItMatters: "Missing this signal means the candidate has not assessed whether Arun can rationally communicate with the very person meant to represent him.",
        modelWording: "Assess ability to instruct counsel because the belief that his lawyer is part of the demon network may prevent rational communication.",
        keywords: ["paranoia", "lawyer", "fitness", "instructing counsel", "rational communication", "delusion"],
      },
      {
        id: "s4",
        name: "Collateral records support a longitudinal psychosis timeline",
        category: "collateral",
        severity: "important",
        clueInStem: "Prison health records show untreated psychosis for several months before the alleged offence.",
        whyItMatters: "Missing this signal means the candidate has relied only on current interview comments rather than reconstructing the mental state before and during the alleged offence.",
        modelWording: "Use prison health records and other collateral to establish the psychosis timeline before, during and after the alleged offence.",
        keywords: ["collateral records", "prison health", "timeline", "untreated psychosis", "offence", "longitudinal history"],
      },
      {
        id: "s5",
        name: "Psychiatrist provides expert opinion, not the legal verdict",
        category: "ethics",
        severity: "important",
        clueInStem: "The solicitor asks whether Arun is \"not guilty by reason of mental illness.\"",
        whyItMatters: "Missing this signal means the candidate has accepted the solicitor's wording as if the psychiatrist determines guilt or the legal outcome.",
        modelWording: "Clarify forensic role because the psychiatrist maps clinical evidence to legal criteria while the court determines the verdict.",
        keywords: ["expert witness", "legal criteria", "court decision", "clinical opinion", "forensic report", "role clarity"],
      },
      {
        id: "s6",
        name: "Treatment recommendations require role clarity",
        category: "governance",
        severity: "optional",
        clueInStem: "The treating team asks whether you can include treatment recommendations in the same report.",
        whyItMatters: "Missing this signal means the candidate has not managed potential confusion between independent forensic evaluation and treating-team advice.",
        modelWording: "Maintain role clarity when including treatment recommendations because independent forensic opinion must remain separate from treating responsibilities.",
        keywords: ["dual role", "forensic report", "treatment recommendations", "independence", "role clarity", "governance"],
      },
      {
        id: "s7",
        name: "Serious violence charge requires source-based factual analysis",
        category: "risk_others",
        severity: "important",
        clueInStem: "You are a forensic consultant psychiatrist asked to prepare a court report for Arun, a 31-year-old man charged with aggravated assault after stabbing a stranger at a bus stop.",
        whyItMatters: "Missing this signal means the candidate has not anchored the report in verified offence facts, seriousness of violence and limits of available evidence.",
        modelWording: "Base the opinion on verified offence facts because a serious stabbing charge requires source-based analysis rather than reliance on Arun's account alone.",
        keywords: ["aggravated assault", "stabbing", "stranger", "bus stop", "offence facts", "violence", "source-based"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5", "s7"],
      lowYield: ["s6"],
    },
    modelAnswer: `Arun's report must separate two legal questions that are often confused: criminal responsibility at the time of the alleged offence and current fitness to stand trial. He is charged with aggravated assault after stabbing a stranger at a bus stop, so the opinion must be anchored in verified offence facts, witness material, police information and clinical records, not only Arun's current account.

The mental-state-at-offence issue is raised by Arun's statement, "The man was a demon wearing human skin, and I had to stop him before he killed children." That may be highly relevant to whether psychosis affected his understanding of the nature or quality of the act, wrongfulness, or another jurisdiction-specific legal criterion. I would not simply write "psychotic, therefore NGMI"; the court decides the legal outcome, and my role is to map clinical evidence to the legal test.

Fitness is a separate present-focused question. Arun is disorganised, repeatedly asks what court is, and says, "My lawyer is part of the demon network." Those features may impair his ability to understand the proceedings, instruct counsel, follow evidence, participate rationally and make decisions about plea or defence. The paranoid belief about his lawyer is especially important because it may prevent rational communication with counsel.

The prison health records showing untreated psychosis for several months before the alleged offence are critical. I would reconstruct the timeline before, during and after the stabbing using prison health records, police facts, witness statements, family collateral, substance-use information and my interview. I would also consider evidence of planning, motive, concealment, intoxication or behaviour suggesting awareness of wrongfulness.

The solicitor's question about being "not guilty by reason of mental illness" and the treating team's request for treatment recommendations both require role clarity. A forensic report can include treatment needs if relevant to fitness restoration, risk or court disposal, but I would distinguish that from my independent opinion. The final report should state sources, limitations, uncertainties, diagnosis, fitness opinion, mental-state-at-offence opinion and any treatment recommendations within the referral question.`,
  },
  {
    id: "FOR-003",
    questionNumber: "MEQ-067",
    topic: "forensic",
    difficulty: "consultant",
    title: "Conditional Discharge of Forensic Patient",
    candidateRole: "Consultant forensic psychiatrist, community forensic service",
    setting: "Forensic tribunal conditional discharge review",
    stem: `You are the consultant forensic psychiatrist reviewing Malik, a 38-year-old forensic patient conditionally discharged after a serious assault during methamphetamine-induced psychosis.

Malik has been living in supported accommodation for nine months and attending appointments. His support worker reports he missed two urine drug screens and was seen with former drug-using peers. Malik says, "Everyone deserves a night off; I'm not a prisoner anymore." He denies psychotic symptoms and says medication makes him "slow and useless."

The victim lives in the same suburb and has requested notification if Malik's conditions change. Police report Malik was recently seen near the street where the assault occurred. The tribunal asks whether conditional discharge remains appropriate or whether recall is required.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Missed drug screens reactivate the index-violence pathway",
        category: "substance_use",
        severity: "critical",
        clueInStem: "His support worker reports he missed two urine drug screens and was seen with former drug-using peers.",
        whyItMatters: "Missing this signal means the candidate has treated missed screens as minor non-compliance despite the index assault occurring during methamphetamine-induced psychosis.",
        modelWording: "Treat missed drug screens as high-significance risk data because substance relapse is directly linked to Malik's serious assault pathway.",
        keywords: ["missed drug screens", "methamphetamine", "index offence", "dynamic risk", "relapse", "violence"],
      },
      {
        id: "s2",
        name: "Victim proximity requires active safety planning",
        category: "risk_others",
        severity: "critical",
        clueInStem: "The victim lives in the same suburb and has requested notification if Malik's conditions change.",
        whyItMatters: "Missing this signal means the candidate has not recognised an identifiable victim whose safety may be affected by any change in conditions.",
        modelWording: "Assess victim safety and proximity because the victim lives locally and has asked to be notified about condition changes.",
        keywords: ["victim safety", "proximity", "exclusion zone", "conditional discharge", "violence risk", "notification"],
      },
      {
        id: "s3",
        name: "Minimisation of conditions threatens community manageability",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "Malik says, \"Everyone deserves a night off; I'm not a prisoner anymore.\"",
        whyItMatters: "Missing this signal means the candidate has not recognised minimisation of forensic conditions as a predictor of non-adherence and escalating risk.",
        modelWording: "Assess insight into forensic conditions because minimising them as imprisonment may undermine community manageability.",
        keywords: ["insight", "forensic conditions", "minimisation", "community manageability", "supervision"],
      },
      {
        id: "s4",
        name: "Medication side effects may drive non-adherence",
        category: "consent_refusal",
        severity: "important",
        clueInStem: "He denies psychotic symptoms and says medication makes him \"slow and useless.\"",
        whyItMatters: "Missing this signal means the candidate has tightened control without addressing treatment burden that may drive relapse or disengagement.",
        modelWording: "Review medication efficacy and side effects because feeling slow and useless may lead to covert non-adherence and relapse.",
        keywords: ["medication adherence", "side effects", "relapse prevention", "forensic patient", "treatment ambivalence"],
      },
      {
        id: "s5",
        name: "Police sighting near offence location may indicate breach or preoccupation",
        category: "governance",
        severity: "important",
        clueInStem: "Police report Malik was recently seen near the street where the assault occurred.",
        whyItMatters: "Missing this signal means the candidate has not verified a possible geographic breach or return to a high-risk offence location.",
        modelWording: "Verify the police sighting urgently because proximity to the offence street may represent breach, relapse or renewed preoccupation.",
        keywords: ["condition breach", "police liaison", "tribunal", "geographic restriction", "supervision", "verification"],
      },
      {
        id: "s6",
        name: "Recall must be proportionate to verified risk escalation",
        category: "disposition",
        severity: "optional",
        clueInStem: "The tribunal asks whether conditional discharge remains appropriate or whether recall is required.",
        whyItMatters: "Missing this signal means the candidate has either ignored risk escalation or treated recall as a punitive response to uncertainty.",
        modelWording: "Recommend recall or enhanced conditions proportionately because the decision depends on verified risk escalation and community manageability.",
        keywords: ["recall", "enhanced supervision", "conditional discharge", "proportionality", "community risk", "tribunal"],
      },
      {
        id: "s7",
        name: "Supported accommodation and appointment attendance are protective but insufficient",
        category: "disposition",
        severity: "important",
        clueInStem: "Malik has been living in supported accommodation for nine months and attending appointments.",
        whyItMatters: "Missing this signal means the candidate has not balanced protective engagement against new dynamic risks before advising recall or continued discharge.",
        modelWording: "Weigh supported accommodation and appointment attendance as protective factors because they may support enhanced supervision if risk remains manageable.",
        keywords: ["supported accommodation", "appointments", "protective factors", "community manageability", "conditional discharge", "engagement"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5", "s7"],
      lowYield: ["s6"],
    },
    modelAnswer: `Malik's conditional discharge review must start from the index offence formulation. He was conditionally discharged after a serious assault during methamphetamine-induced psychosis, so missed urine drug screens are not a minor compliance issue. They may indicate relapse into the same pathway that previously led to serious violence.

There are important protective factors. Malik has lived in supported accommodation for nine months and has been attending appointments. Those factors may support continued community management if risk escalation can be verified, contained and reversed, but they do not erase the concern created by missed screens, former drug-using peers and minimisation of conditions.

Victim safety is central. The victim lives in the same suburb and has requested notification if conditions change. Police also report that Malik was recently seen near the street where the assault occurred. That may be accidental, a breach or a sign of renewed preoccupation, and it must be verified urgently through police, tribunal and supervising-agency liaison.

Malik's statement, "Everyone deserves a night off; I'm not a prisoner anymore," suggests minimisation of the purpose of forensic conditions. His complaint that medication makes him "slow and useless" also matters because side effects can drive covert non-adherence and relapse. I would review mental state, substance use, urine testing, medication adherence, side effects, sleep, psychotic symptoms, contact with peers and understanding of conditions.

The tribunal question is not simply recall or ignore. If the missed screens reflect relapse, if he has breached geographic conditions, if psychosis is returning, or if victim safety cannot be managed, recall or inpatient reassessment may be required. If investigation shows no substance use, no breach and good engagement, a proportionate alternative may be enhanced supervision, increased testing, substance-use treatment, medication review, reinforced exclusion zones and victim-safety planning.

My tribunal advice would explicitly link the new facts to the original violence pathway and state what is verified, what remains uncertain, and why recall or enhanced conditions are proportionate. Conditional discharge is the least restrictive safe option only while the community plan continues to contain the known pathway to serious harm.`,
  },
];
