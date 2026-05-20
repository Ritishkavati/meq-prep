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
    modelAnswer: `Peter's refusal cannot be treated as a stable autonomous end-of-life decision without first addressing the acute medical and cognitive context. The stem says he is admitted with "ascites, encephalopathy and variceal bleeding" and that the hepatology team finds him "intermittently confused" and worried he "may deteriorate without treatment." Those phrases make this a fluctuating-capacity problem in a life-threatening medical context, not simply a patient with alcohol dependence choosing to leave. I would first ask hepatology to clarify the immediate consequences of refusing lactulose, blood tests, alcohol withdrawal medication and admission, because capacity is decision-specific and the seriousness and imminence of harm shape both the explanation required and the legal threshold for emergency treatment.

The statement "I know I'm dying, so let me drink and leave me alone" needs careful interpretation. It may represent a capacitous values-based refusal in someone with end-stage liver disease, but it may also reflect hepatic encephalopathy, intoxication, withdrawal, depression, demoralisation or hopelessness. I would assess his ability to understand and retain the medical information, appreciate that the risks apply to him, and weigh the competing outcomes of treatment, deterioration, withdrawal and self-discharge. I would also assess suicidality and demoralisation, because a wish to drink and die may be clinically different from a settled palliative preference. If he is encephalopathic or withdrawing, I would expect capacity to fluctuate and would reassess when medically optimised if delay is safe.

His wife's collateral that "when he sobers up he wants treatment" is a critical clue. It suggests the refusal may be state-dependent rather than a long-standing stable value. I would speak with her, with Peter's consent where possible, to clarify prior wishes, previous episodes, what he says when sober, his pattern of relapse, and what treatment goals he has previously accepted. This collateral would not automatically override him, but it would strongly influence my judgement about whether the present refusal represents his authentic capacitous decision.

The daughter's request to "force rehab this time" needs a clear consultant response. I would explain that emergency treatment for a life-threatening medical deterioration, treatment of withdrawal, and compulsory long-term rehabilitation are legally and ethically different. The family may be exhausted and entitled to set boundaries, but their distress does not create a power to force rehabilitation. If Peter lacks capacity and deterioration risk is serious, emergency treatment may be justified; if he has capacity, his refusal must be respected even if the family disagrees. That is the core tension between autonomy and beneficence.

My actions would be to assess and document capacity for each refused intervention, clarify urgency with hepatology, treat delirium or withdrawal contributors, involve addiction medicine, and plan harm reduction. If he lacks capacity and faces imminent serious harm, I would support treatment under the applicable emergency or substitute decision framework. If he has capacity, I would not detain him simply because the decision is harmful; instead I would offer withdrawal care, relapse prevention, safer alcohol planning, follow-up, family support and a realistic discharge plan. I would document why the decision was or was not capacitous, how "intermittently confused" affected the assessment, how the wife's collateral was used, and why the final plan was the least restrictive lawful option.`,
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
    modelAnswer: `Kai should not be discharged simply because he may sleep and appear calmer after methamphetamine intoxication settles. The registrar's proposed shortcut, that this is "probably just methamphetamine intoxication," misses the longitudinal warning in the stem: his father reports Kai has been "increasingly withdrawn for six months," stopped working, and has been muttering to himself "even during periods when the family believe he was not using drugs." That history means I would formulate substance-induced psychosis versus emerging primary psychosis, not prematurely close the diagnosis on intoxication.

The immediate risk is also not resolved by diagnostic uncertainty. Kai says, "The neighbours have installed cameras in the smoke alarm," and then warns, "If they come in again, I'll be ready." Combined with not sleeping for four nights and punching a hole in the wall, that is a persecutory, threat-based violence formulation. He may not describe a wish to harm someone in general terms, but he is preparing to defend himself against people he believes are surveilling him. I would therefore ensure safe containment in ED, remove access to weapons or objects that could be used as weapons, place him in a low-stimulus area, and make sure staff do not inadvertently reinforce his persecutory beliefs through confrontational security measures.

The positive urine drug screen for "methamphetamine and cannabis" is important, but it should be treated as a risk modifier and diagnostic contributor rather than a full explanation. Methamphetamine and cannabis may precipitate or amplify psychosis, worsen paranoia, reduce sleep and increase impulsivity. I would assess amount, route, timing, pattern, withdrawal, previous episodes during abstinence, medical complications and co-use of alcohol or other substances. The sleep deprivation clue, "has not slept for four nights," is itself a dynamic risk factor because restoring sleep may reduce agitation, but it does not by itself settle the diagnosis or make discharge safe.

Collateral from the father is essential because the question turns on timeline. I would ask for detailed collateral about premorbid functioning, the first onset of social withdrawal, periods of abstinence, occupational decline, family history, trauma, mood symptoms, prior odd beliefs, and whether neighbours have been approached or threatened. I would also clarify whether the neighbours are identifiable targets and whether Kai has damaged property before. The phrase "even during periods when the family believe he was not using drugs" is not conclusive, but it is enough to require a careful early psychosis assessment.

The disposition decision should be based on persistence of psychosis, violence risk, sleep, supports and capacity to engage, not on a single period of sedation or sleep. If persecutory beliefs and threat readiness persist, or if his family cannot supervise safely, I would recommend admission or intensive crisis containment, using involuntary assessment if mental disorder and serious risk criteria are met. If he improves substantially after sleep and observation, discharge would still require family agreement, removal of weapons, early psychosis follow-up, substance-use intervention, relapse plan and clear return criteria. I would document why "discharged once he sleeps" is unsafe as a standalone plan, because sleep may reduce intoxication but does not erase six months of functional decline or the recent threat-based behaviour.`,
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
    modelAnswer: `Alana's treatment should be framed around stabilisation and harm reduction, not around making the pregnancy appear drug-free. The registrar's question about reducing methadone before delivery to reduce fetal risk is clinically understandable but potentially harmful. The most important protective clue is Alana's own statement that "methadone is the only thing stopping her from using heroin." That tells me methadone is not the problem to be removed; it is the intervention currently reducing chaotic opioid use, overdose risk, withdrawal cycling, infection risk and fetal instability. I would not reduce methadone solely to prevent neonatal abstinence syndrome if that reduction risks relapse to heroin.

The child protection fear is equally central. Alana says, "If child protection hears I'm on methadone, they'll take my baby." If the team responds punitively or vaguely, she may disengage from antenatal care, conceal substance use or avoid hospital at delivery. I would explain transparently that being on methadone maintenance is not itself a reason for removal and can be evidence of engagement and protective treatment. I would also be honest that safety concerns such as unstable housing, family violence, polysubstance use or inability to care for the infant may require child protection involvement. The consultant task is to build trust without making false promises.

The midwife's request for a "neonatal abstinence syndrome plan" is appropriate, but the language must be non-stigmatising because Alana says, "I don't want the baby labelled an addict." I would explain that the baby is not an addict; the baby may experience withdrawal or adaptation after birth and therefore needs monitoring, feeding support, soothing strategies, paediatric review and a plan that keeps mother and baby together where safe. This education should be done in a way that strengthens Alana's engagement rather than increasing shame.

The urine drug screens showing "intermittent benzodiazepine and cannabis use" change the risk formulation. Benzodiazepines with methadone increase sedation, overdose and neonatal risks, and intermittent use may indicate anxiety, trauma, partner influence, diversion or unstable prescribing. I would assess the source, frequency, dose, overdose history, sedation, driving, mental health symptoms and whether a gradual reduction or substitution plan is needed. I would also assess cannabis use without moralising, focusing on function, dependence and perinatal risks.

Her partner's heroin use and becoming "verbally aggressive at clinic" introduce maternal, fetal, staff and postnatal infant safety concerns. I would assess family violence, coercion around drug use, safety at home, clinic safety, whether he controls access to dosing or appointments, and whether Alana needs safe accommodation or family violence support. Missing this would lead to an overly narrow methadone/NAS plan while the actual risk to mother and baby remains unaddressed.

My actions would be to coordinate the opioid treatment service, midwifery, obstetrics, paediatrics, GP, addiction medicine and social work around one non-punitive plan. I would use the fact that she attends the dosing clinic regularly, despite having "missed two antenatal appointments," as a strength and build antenatal care around the service she already trusts. I would document the rationale for maintaining methadone, the discussion about NAS, the plan for benzodiazepine/cannabis use, the child protection threshold discussion, partner risk and the supports required to keep Alana and the baby safe.`,
  },
];
