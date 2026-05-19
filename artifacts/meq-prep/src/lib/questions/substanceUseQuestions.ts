import type { QuizStem } from "../quizData";

export const SU_STEMS: QuizStem[] = [
  {
    id: "SU-001",
    topic: "substance_use",
    difficulty: "consultant",
    title: "Alcohol dependence with decompensated liver disease",
    candidateRole: "Consultant psychiatrist, consultation-liaison addiction psychiatry",
    setting: "Hepatology ward in tertiary hospital",
    stem: `You are the consultant psychiatrist asked to review Peter, a 57-year-old man with severe alcohol dependence and decompensated cirrhosis admitted with ascites, encephalopathy and variceal bleeding.

Peter is refusing lactulose, blood tests and alcohol withdrawal medication. He says, "I know I'm dying, so let me drink and leave me alone." His wife says, "He says this every time, but when he sobers up he wants treatment." The hepatology team says he is intermittently confused and may deteriorate without treatment.

Peter asks to self-discharge to attend his local pub. His adult daughter says the family cannot keep rescuing him and asks whether the team can "force rehab this time." The medical registrar asks whether Peter has capacity to refuse treatment.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Capacity affected by encephalopathy and intoxication/withdrawal",
        category: "capacity",
        severity: "critical",
        clueInStem: "intermittently confused",
        whyItMatters: "Capacity may fluctuate due to hepatic encephalopathy, intoxication or withdrawal, invalidating refusal.",
        modelWording: "Assess decision-specific and fluctuating capacity in relation to hepatic encephalopathy, intoxication and withdrawal.",
        keywords: ["capacity", "hepatic encephalopathy", "fluctuating cognition", "alcohol withdrawal", "intoxication", "refusal"],
      },
      {
        id: "s2",
        name: "Life-threatening medical risk",
        category: "physical_health",
        severity: "critical",
        clueInStem: "may deteriorate without treatment.",
        whyItMatters: "Medical urgency may require emergency treatment if capacity is absent.",
        modelWording: "Clarify immediate medical risk from variceal bleeding, encephalopathy and withdrawal before determining legal treatment options.",
        keywords: ["cirrhosis", "variceal bleeding", "ascites", "encephalopathy", "medical deterioration", "urgent treatment"],
      },
      {
        id: "s3",
        name: "Demoralisation versus capacitous refusal",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "I know I'm dying, so let me drink and leave me alone.",
        whyItMatters: "Hopelessness, depression or delirium may drive refusal and require assessment rather than accepting stated wish.",
        modelWording: "Assess whether hopelessness, depression, delirium or demoralisation is impairing Peter's treatment decisions.",
        keywords: ["demoralisation", "depression", "hopelessness", "treatment refusal", "end-stage liver disease"],
      },
      {
        id: "s4",
        name: "Collateral indicates reversibility of refusal",
        category: "collateral",
        severity: "important",
        clueInStem: "when he sobers up he wants treatment.",
        whyItMatters: "Past pattern suggests current refusal may not reflect stable values.",
        modelWording: "Use wife's collateral to assess whether refusal is stable or state-dependent on intoxication/encephalopathy.",
        keywords: ["collateral", "state-dependent refusal", "wife", "sobriety", "stable preference", "capacity"],
      },
      {
        id: "s5",
        name: "Family demand for forced rehabilitation",
        category: "family_carer",
        severity: "important",
        clueInStem: "force rehab this time.",
        whyItMatters: "Compulsory acute medical treatment differs from forced rehabilitation; family expectations require clarification.",
        modelWording: "Explain that emergency medical treatment and involuntary rehabilitation have different legal thresholds and aims.",
        keywords: ["family expectations", "forced rehab", "legal threshold", "addiction treatment", "psychoeducation"],
      },
      {
        id: "s6",
        name: "Harm reduction planning",
        category: "substance_use",
        severity: "optional",
        clueInStem: "attend his local pub.",
        whyItMatters: "If he has capacity or after stabilisation, harm reduction and relapse planning are essential.",
        modelWording: "Develop harm reduction and relapse prevention plan including withdrawal care, addiction medicine and realistic follow-up.",
        keywords: ["harm reduction", "relapse prevention", "addiction medicine", "alcohol dependence", "withdrawal", "self-discharge"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Capacity/medical:

Assess decision-specific capacity to refuse lactulose, bloods, withdrawal treatment and admission. Consider hepatic encephalopathy, intoxication and withdrawal as causes of fluctuating capacity. Clarify immediate medical risk with hepatology.

Risk/legal:

If capacity absent and deterioration risk is serious, consider emergency treatment authority. If capacity present, respect refusal while offering harm reduction.

Formulation:

Assess depression, demoralisation and suicidality. Use collateral about previous treatment wishes when sober.

Family:

Explain limits of forced rehabilitation versus urgent medical treatment. Support family boundaries and carer distress.

Management:

Addiction medicine input, withdrawal management, relapse prevention, realistic discharge planning and documentation.`,
  },
  {
    id: "SU-002",
    topic: "substance_use",
    difficulty: "consultant",
    title: "Methamphetamine psychosis versus primary psychosis",
    candidateRole: "Consultant psychiatrist, emergency psychiatry service",
    setting: "Metropolitan emergency department short-stay unit",
    stem: `You are the consultant psychiatrist supervising assessment of Kai, a 25-year-old man brought to ED by ambulance after barricading himself in his room.

Kai says, "The neighbours have installed cameras in the smoke alarm." Urine drug screen is positive for methamphetamine and cannabis. His father reports Kai has been increasingly withdrawn for six months, stopped working and has been muttering to himself even during periods when the family believe he was not using drugs.

Kai has not slept for four nights and punched a hole in the wall before ambulance arrived. He says, "If they come in again, I'll be ready." The ED registrar asks whether he can be discharged once he sleeps because this is probably just methamphetamine intoxication.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Primary psychosis versus substance-induced psychosis",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "increasingly withdrawn for six months",
        whyItMatters: "Longitudinal deterioration outside intoxication suggests possible primary psychotic disorder.",
        modelWording: "Formulate methamphetamine-induced psychosis versus emerging primary psychosis using longitudinal collateral and periods of abstinence.",
        keywords: ["methamphetamine psychosis", "primary psychosis", "six-month decline", "collateral", "functional deterioration", "differential diagnosis"],
      },
      {
        id: "s2",
        name: "Violence risk linked to persecutory beliefs",
        category: "risk_others",
        severity: "critical",
        clueInStem: "If they come in again, I'll be ready.",
        whyItMatters: "Persecutory threat perception plus recent aggression increases risk to others.",
        modelWording: "Assess violence risk driven by persecutory beliefs, sleep deprivation, stimulant use and recent property damage.",
        keywords: ["violence risk", "persecutory beliefs", "threat perception", "property damage", "sleep deprivation", "stimulant use"],
      },
      {
        id: "s3",
        name: "Recent methamphetamine use",
        category: "substance_use",
        severity: "important",
        clueInStem: "positive for methamphetamine and cannabis.",
        whyItMatters: "Substance use may precipitate, worsen or mimic psychosis and affects observation/disposition.",
        modelWording: "Assess methamphetamine and cannabis use patterns as precipitants and maintaining factors for psychosis and risk.",
        keywords: ["methamphetamine", "cannabis", "urine drug screen", "substance-induced", "psychosis", "risk"],
      },
      {
        id: "s4",
        name: "Sleep deprivation worsening risk",
        category: "physical_health",
        severity: "important",
        clueInStem: "has not slept for four nights",
        whyItMatters: "Sleep deprivation worsens psychosis, agitation and capacity to engage.",
        modelWording: "Treat sleep deprivation as a dynamic factor worsening psychosis and behavioural risk.",
        keywords: ["sleep deprivation", "agitation", "psychosis", "dynamic risk", "stabilisation", "behavioural disturbance"],
      },
      {
        id: "s5",
        name: "Collateral essential for diagnosis",
        category: "collateral",
        severity: "important",
        clueInStem: "even during periods when the family believe he was not using drugs.",
        whyItMatters: "Collateral helps distinguish substance-induced psychosis from primary psychosis.",
        modelWording: "Seek detailed family collateral about abstinent periods, prodrome, function and previous symptoms.",
        keywords: ["family collateral", "abstinence", "prodrome", "function", "diagnostic clarification", "father"],
      },
      {
        id: "s6",
        name: "Unsafe premature discharge",
        category: "disposition",
        severity: "optional",
        clueInStem: "discharged once he sleeps",
        whyItMatters: "Sleep alone does not resolve diagnostic uncertainty or violence risk.",
        modelWording: "Do not discharge solely after sleep; disposition depends on persisting psychosis, risk, supports and follow-up.",
        keywords: ["premature discharge", "short-stay", "risk reassessment", "supports", "follow-up", "ED"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Diagnosis:

Formulate methamphetamine-induced psychosis versus primary psychotic disorder. Six-month functional decline and symptoms during likely abstinence increase concern for primary psychosis.

Risk:

Assess violence risk from persecutory beliefs, recent property damage, sleep deprivation and stimulant use. Maintain safe containment until risk improves.

Substance/physical:

Assess intoxication, withdrawal, polysubstance use, sleep deprivation and medical complications.

Collateral:

Obtain detailed father/family collateral about timeline, abstinence, functioning and prior symptoms.

Disposition:

Do not discharge simply after sleep. Consider admission or intensive crisis/early psychosis follow-up depending on persistence of psychosis, risk and supports.

Treatment:

Low-stimulus environment, sleep restoration, antipsychotic if indicated, substance intervention and early psychosis referral.`,
  },
  {
    id: "SU-003",
    topic: "substance_use",
    difficulty: "consultant",
    title: "Pregnancy, methadone and neonatal planning",
    candidateRole: "Consultant psychiatrist, perinatal addiction psychiatry liaison",
    setting: "Public antenatal clinic and opioid treatment service",
    stem: `You are the consultant psychiatrist asked to review Alana, a 29-year-old woman who is 30 weeks pregnant and on methadone maintenance treatment.

Alana says, "If child protection hears I'm on methadone, they'll take my baby." She has missed two antenatal appointments but attends the dosing clinic regularly. Urine drug screens show intermittent benzodiazepine and cannabis use. Her partner is also using heroin and has recently become verbally aggressive at clinic.

The midwife wants a neonatal abstinence syndrome plan, but Alana says, "I don't want the baby labelled an addict." She becomes tearful and says methadone is the only thing stopping her from using heroin. The registrar asks whether methadone should be reduced before delivery to reduce fetal risk.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Methadone maintenance as protective treatment",
        category: "substance_use",
        severity: "critical",
        clueInStem: "methadone is the only thing stopping her from using heroin.",
        whyItMatters: "Reducing methadone in pregnancy may destabilise opioid use and increase fetal/maternal risk.",
        modelWording: "Maintain opioid substitution treatment as protective, avoiding destabilising dose reduction solely to prevent neonatal withdrawal.",
        keywords: ["methadone", "opioid substitution treatment", "pregnancy", "heroin relapse", "stabilisation", "harm reduction"],
      },
      {
        id: "s2",
        name: "Fear of child protection undermining engagement",
        category: "child_protection",
        severity: "critical",
        clueInStem: "they'll take my baby.",
        whyItMatters: "Fear may lead to disengagement from antenatal care and hidden substance use unless addressed transparently.",
        modelWording: "Address child protection fears transparently, explaining thresholds while emphasising engagement and safety planning.",
        keywords: ["child protection", "fear of removal", "engagement", "pregnancy", "transparency", "safety planning"],
      },
      {
        id: "s3",
        name: "Neonatal abstinence planning",
        category: "physical_health",
        severity: "important",
        clueInStem: "neonatal abstinence syndrome plan",
        whyItMatters: "NAS planning improves neonatal monitoring, maternal preparation and non-stigmatising care.",
        modelWording: "Coordinate NAS planning with maternity and paediatrics using non-stigmatising education and postnatal support.",
        keywords: ["neonatal abstinence syndrome", "NAS", "paediatrics", "maternity", "postnatal planning", "education"],
      },
      {
        id: "s4",
        name: "Benzodiazepine and cannabis use",
        category: "substance_use",
        severity: "important",
        clueInStem: "intermittent benzodiazepine and cannabis use.",
        whyItMatters: "Polysubstance use increases maternal, fetal and neonatal risk and may affect child protection planning.",
        modelWording: "Assess polysubstance use, especially benzodiazepines, because it increases overdose, sedation and neonatal risk.",
        keywords: ["benzodiazepines", "cannabis", "polysubstance use", "overdose risk", "neonatal risk", "pregnancy"],
      },
      {
        id: "s5",
        name: "Family violence and partner substance use",
        category: "risk_vulnerable",
        severity: "important",
        clueInStem: "verbally aggressive at clinic.",
        whyItMatters: "Partner aggression and heroin use may affect maternal safety, infant safety and treatment engagement.",
        modelWording: "Assess family violence and partner substance use as risks to Alana, the fetus and postnatal safety.",
        keywords: ["family violence", "partner substance use", "heroin", "maternal safety", "infant safety", "clinic aggression"],
      },
      {
        id: "s6",
        name: "Missed antenatal appointments",
        category: "collateral",
        severity: "optional",
        clueInStem: "missed two antenatal appointments",
        whyItMatters: "Missed antenatal care may reflect fear, instability or access barriers and should trigger supportive outreach.",
        modelWording: "Explore missed antenatal appointments as a signal of barriers, fear or instability rather than simple non-compliance.",
        keywords: ["antenatal care", "missed appointments", "barriers", "engagement", "outreach", "non-compliance"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Substance treatment:

Do not reduce methadone simply to prevent NAS. Maintain stable opioid substitution treatment because it reduces heroin relapse and chaotic use. Review dose adequacy, cravings and sedation.

Pregnancy/neonatal:

Coordinate with maternity, addiction medicine and paediatrics. Develop NAS plan with non-stigmatising education and postnatal monitoring.

Child protection/engagement:

Address fear of removal transparently. Explain that engagement, safety planning and stability are protective.

Risk:

Assess benzodiazepine/cannabis use, overdose risk, partner heroin use and family violence. Consider infant safety and postnatal supports.

MDT:

Involve midwife, opioid treatment service, social work, GP, paediatrics and child protection if thresholds met.

Documentation:

Record risk-benefit reasoning, engagement plan, NAS plan and child safety considerations.`,
  },
];
