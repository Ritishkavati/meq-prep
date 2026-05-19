import type { QuizStem } from "../quizData";

export const FOR_STEMS: QuizStem[] = [
  {
    id: "FOR-001",
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
    modelAnswer: `Risk formulation:

Formulate erotomanic delusion, fixation, approach behaviour and perceived rival as key violence/stalking risks. Do not rely on denial of intent.

Immediate management:

Assess access to victim, weapons, substance use, medication adherence and escalation. Liaise with police and consider victim safety planning.

Legal/ethical:

Consider lawful information sharing/duty to protect if serious foreseeable risk to identifiable victim or rival. Document confidentiality reasoning.

Treatment/community:

Review medication adherence and relapse. Consider assertive follow-up, CTO/MHA review if criteria met, substance use intervention and behavioural restrictions.

MDT:

Convene risk meeting with CMHT, forensic advice and police as appropriate.`,
  },
  {
    id: "FOR-002",
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
    modelAnswer: `Forensic issues:

Address two separate questions: fitness to stand trial and mental impairment/NGMI. Apply jurisdiction-specific legal criteria, not merely diagnosis.

Fitness:

Assess understanding of charges, court roles, plea, ability to instruct counsel, follow proceedings and challenge jurors/witnesses as relevant. Paranoia about lawyer may impair ability to instruct.

Mental impairment:

Reconstruct mental state at time of alleged offence using interview, records and collateral. Assess whether psychosis affected understanding of act, wrongfulness or capacity according to legal test.

Report writing:

State sources, limitations, reasoning and opinion clearly. Maintain independence; court decides legal outcome.

Treatment:

Comment on treatment needs if requested but avoid becoming treating clinician within forensic opinion.`,
  },
  {
    id: "FOR-003",
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
    modelAnswer: `Risk formulation:

Reassess dynamic violence risk: missed drug screens, drug peers, victim proximity, possible breach and medication ambivalence. Link methamphetamine relapse risk to index offence.

Victim/public safety:

Review victim notification, exclusion zones and safety planning. Liaise with police and tribunal regarding possible breach.

Treatment/supervision:

Verify drug use, increase testing, review medication side effects and reinforce conditions. Consider substance treatment intensification.

Disposition:

If breaches or relapse are confirmed and risk is not manageable, recommend recall. If risk can be managed, recommend tightened conditions and enhanced supervision.

Documentation:

Provide structured tribunal opinion with evidence, uncertainties, risk formulation and recommendation.`,
  },
];
