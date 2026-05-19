import type { QuizStem } from "../quizData";

export const CS_STEMS: QuizStem[] = [
  {
    id: "CS-001",
    topic: "cultural_safety",
    difficulty: "consultant",
    title: "Aboriginal woman refusing ED mental health assessment",
    candidateRole: "Consultant psychiatrist, rural emergency psychiatry service",
    setting: "Rural emergency department after police attendance",
    stem: `You are the consultant psychiatrist on call for a rural emergency department.

Marlee is a 36-year-old Aboriginal woman brought to ED by police after neighbours reported shouting and smashing sounds from her house. Police say she was distressed, holding a broken picture frame and yelling that "everyone is coming to take my kids again." Her two children are currently with her aunt. Marlee refuses to speak with the mental health nurse and says, "You mob only come when police drag us in."

Marlee has a history of depression, family violence and previous child protection involvement. She says, "Hospitals took my sister away and she never came back right." She denies suicidal intent but says, "If they try to take my babies, I'll fight anyone." The police want to leave because she is now calmer, but ED staff are worried she may abscond.

Her aunt is in the waiting room and says Marlee has not slept for three nights and has been drinking more since a recent family funeral. The ED nurse asks whether Marlee can be assessed involuntarily because she is refusing to engage.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Cultural mistrust and service trauma",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "You mob only come when police drag us in.",
        whyItMatters: "Mistrust linked to police and services may escalate refusal and distress if approached coercively.",
        modelWording: "Use culturally safe, trauma-informed engagement recognising mistrust of police and health systems before escalating coercion.",
        keywords: ["cultural safety", "Aboriginal health", "police involvement", "mistrust", "trauma-informed care", "engagement"],
      },
      {
        id: "s2",
        name: "Threat linked to child removal fear",
        category: "risk_others",
        severity: "critical",
        clueInStem: "If they try to take my babies, I'll fight anyone.",
        whyItMatters: "Threats linked to child protection fear create risk to staff, police, family and children if poorly managed.",
        modelWording: "Assess risk to others in the context of perceived child removal, fear, intoxication and sleep deprivation.",
        keywords: ["risk to others", "child removal fear", "family violence", "staff safety", "dynamic risk", "threats"],
      },
      {
        id: "s3",
        name: "Children as vulnerable dependants",
        category: "child_protection",
        severity: "important",
        clueInStem: "Her two children are currently with her aunt.",
        whyItMatters: "The children's safety and care arrangements must be clarified without assuming removal is required.",
        modelWording: "Clarify immediate safety and care arrangements for the children while avoiding unnecessarily punitive child protection framing.",
        keywords: ["child protection", "children safety", "kinship care", "aunt", "family context", "safeguarding"],
      },
      {
        id: "s4",
        name: "Trauma history shaping presentation",
        category: "trauma",
        severity: "important",
        clueInStem: "Hospitals took my sister away and she never came back right.",
        whyItMatters: "Historical and personal trauma may explain fear of assessment and need for careful communication.",
        modelWording: "Acknowledge trauma associated with hospitals and family separation, and avoid re-traumatising assessment practices.",
        keywords: ["trauma history", "hospital mistrust", "family separation", "re-traumatisation", "distress", "engagement"],
      },
      {
        id: "s5",
        name: "Collateral from trusted family",
        category: "collateral",
        severity: "important",
        clueInStem: "has not slept for three nights",
        whyItMatters: "Collateral suggests possible mood, trauma or substance-related deterioration not captured by current calmness.",
        modelWording: "Use aunt's collateral to assess sleep loss, alcohol use, recent bereavement and baseline functioning.",
        keywords: ["collateral", "aunt", "sleep deprivation", "bereavement", "alcohol", "baseline"],
      },
      {
        id: "s6",
        name: "Substance use as dynamic risk factor",
        category: "substance_use",
        severity: "optional",
        clueInStem: "has been drinking more",
        whyItMatters: "Alcohol may increase impulsivity, disinhibition and risk during an acute family crisis.",
        modelWording: "Assess intoxication and recent alcohol escalation because it may increase impulsivity and impair judgement.",
        keywords: ["alcohol", "intoxication", "disinhibition", "impulsivity", "dynamic risk", "bereavement"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Immediate safety:

Ensure Marlee, staff, police and children are safe while avoiding unnecessarily coercive escalation. Assess risk to others linked to child removal fears, alcohol use and sleep deprivation.

Cultural safety/trauma:

Involve Aboriginal liaison/health worker if available. Acknowledge mistrust of police, hospitals and child protection. Use calm, non-confrontational, trauma-informed engagement.

Assessment/formulation:

Assess mood, psychosis, trauma response, intoxication, grief and sleep deprivation. Obtain collateral from aunt regarding baseline, children's safety, funeral stress and alcohol use.

Legal/disposition:

Consider involuntary assessment only if statutory criteria are met and least restrictive engagement fails. Clarify children's immediate care without reflexive child protection escalation.

Documentation:

Record cultural safety steps, risk formulation, collateral, legal rationale and child safety plan.`,
  },
  {
    id: "CS-002",
    topic: "cultural_safety",
    difficulty: "consultant",
    title: "Māori man admitted involuntarily with cultural formulation needs",
    candidateRole: "Consultant psychiatrist, acute inpatient unit",
    setting: "Involuntary admission to metropolitan inpatient unit in Aotearoa New Zealand",
    stem: `You are the consultant psychiatrist reviewing Wiremu, a 27-year-old Māori man admitted involuntarily after walking onto a motorway saying he was following messages from his tūpuna.

Wiremu says, "This is not sickness; my ancestors are calling me." He refuses antipsychotic medication and says staff are "cutting me off from my whakapapa." His whānau arrive and ask for a kaumātua and Māori health worker to be involved. The night registrar documented "poor insight, delusional, refusing treatment" but did not speak with whānau.

Nursing staff are concerned because Wiremu is pacing, chanting at night and not eating hospital food. His mother says, "He needs help, but not like this." The team asks whether his beliefs are psychosis, cultural experience or both, and whether involuntary treatment should continue.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Cultural explanation versus psychosis",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "This is not sickness; my ancestors are calling me.",
        whyItMatters: "Misclassifying cultural/spiritual experience as psychosis can cause harm, while missing psychosis can increase risk.",
        modelWording: "Formulate whether ancestral experiences are culturally congruent, psychotic, or both by involving whānau and cultural expertise.",
        keywords: ["cultural formulation", "tūpuna", "psychosis", "spiritual experience", "whānau", "Māori mental health"],
      },
      {
        id: "s2",
        name: "Least restrictive involuntary care",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "admitted involuntarily",
        whyItMatters: "Ongoing compulsory care must remain justified, culturally safe and least restrictive.",
        modelWording: "Review whether involuntary treatment remains necessary and least restrictive after culturally informed assessment.",
        keywords: ["Mental Health Act", "least restrictive", "involuntary treatment", "culturally safe care", "legal criteria"],
      },
      {
        id: "s3",
        name: "Whānau involvement",
        category: "family_carer",
        severity: "important",
        clueInStem: "His whānau arrive and ask for a kaumātua and Māori health worker to be involved.",
        whyItMatters: "Whānau participation may improve engagement, formulation and safety planning.",
        modelWording: "Involve whānau, kaumātua and Māori health worker to support engagement, cultural formulation and care planning.",
        keywords: ["whānau", "kaumātua", "Māori health worker", "family involvement", "engagement", "care planning"],
      },
      {
        id: "s4",
        name: "Medication refusal linked to cultural disconnection",
        category: "consent_refusal",
        severity: "important",
        clueInStem: "cutting me off from my whakapapa.",
        whyItMatters: "Refusal may reflect fear of cultural disconnection as well as illness-related beliefs.",
        modelWording: "Explore medication refusal in relation to identity, whakapapa, side effects and illness beliefs rather than treating it as simple non-compliance.",
        keywords: ["medication refusal", "whakapapa", "identity", "consent", "engagement", "shared decision-making"],
      },
      {
        id: "s5",
        name: "Failure to obtain whānau collateral",
        category: "collateral",
        severity: "important",
        clueInStem: "did not speak with whānau.",
        whyItMatters: "Without whānau collateral, diagnosis, risk and cultural meaning may be misformulated.",
        modelWording: "Obtain whānau collateral about baseline beliefs, recent change, risk, substance use and culturally meaningful supports.",
        keywords: ["collateral", "whānau", "baseline", "risk", "substance use", "cultural meaning"],
      },
      {
        id: "s6",
        name: "Physical health and nutrition concern",
        category: "physical_health",
        severity: "optional",
        clueInStem: "not eating hospital food.",
        whyItMatters: "Poor intake may worsen mental state and require culturally appropriate food/support.",
        modelWording: "Assess nutrition, hydration and reasons for refusing hospital food, including cultural or paranoid concerns.",
        keywords: ["nutrition", "hydration", "hospital food", "physical health", "cultural needs"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Cultural formulation:

Do not assume ancestral experiences are automatically delusional. Involve whānau, kaumātua and Māori health worker to understand cultural congruence, baseline beliefs and recent change.

Risk/legal:

Review risk from motorway behaviour, sleep, eating and current mental state. Reassess whether involuntary care remains necessary and least restrictive.

Engagement/treatment:

Explore refusal of medication in relation to whakapapa, identity, side effects and coercion. Offer culturally safe explanation, whānau-supported discussions and least restrictive treatment options.

Collateral:

Obtain whānau collateral regarding onset, substance use, function, previous episodes and supports.

Disposition/governance:

Document cultural formulation, whānau involvement, legal reasoning and care plan.`,
  },
  {
    id: "CS-003",
    topic: "cultural_safety",
    difficulty: "consultant",
    title: "Afghan refugee refusing medical treatment in CL psychiatry",
    candidateRole: "Consultant psychiatrist, consultation-liaison psychiatry service",
    setting: "Metropolitan medical ward",
    stem: `You are the consultant psychiatrist asked to review Ahmad, a 33-year-old Afghan refugee admitted to the medical ward with suspected infective endocarditis related to intravenous heroin use.

Ahmad initially agreed to investigations but now refuses blood cultures, echocardiography and antibiotics. He says in limited English, "No more tests; hospital makes papers for immigration." The medical registrar has been using Ahmad's cousin to interpret because "professional interpreters take too long." Ahmad becomes visibly distressed when security staff stand near the door.

His cousin says Ahmad was detained for months before arriving in Australia and avoids government offices. Ahmad says, "Maybe Allah is punishing me; medicine cannot change this." The infectious diseases team says delayed antibiotics may be life-threatening, and the ward team asks whether he lacks capacity or is simply refusing treatment.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Interpreter failure affecting consent and capacity assessment",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "professional interpreters take too long.",
        whyItMatters: "Capacity and consent cannot be reliably assessed through an ad hoc family interpreter in a complex refusal.",
        modelWording: "Use a professional interpreter before assessing capacity, consent or refusal because language barriers may invalidate the assessment.",
        keywords: ["professional interpreter", "capacity assessment", "language barrier", "consent", "ad hoc interpreter", "refugee"],
      },
      {
        id: "s2",
        name: "Trauma-related mistrust of authorities",
        category: "trauma",
        severity: "critical",
        clueInStem: "hospital makes papers for immigration.",
        whyItMatters: "Refusal may be driven by trauma and fear of authority rather than psychosis or incapacity alone.",
        modelWording: "Formulate treatment refusal in the context of refugee trauma, detention and fear of immigration consequences.",
        keywords: ["refugee trauma", "detention", "mistrust", "immigration fear", "authority", "treatment refusal"],
      },
      {
        id: "s3",
        name: "Life-threatening medical illness",
        category: "physical_health",
        severity: "important",
        clueInStem: "delayed antibiotics may be life-threatening",
        whyItMatters: "Urgency determines how long engagement can continue before emergency treatment pathways are considered.",
        modelWording: "Clarify medical urgency and consequences of delayed antibiotics with infectious diseases before deciding legal options.",
        keywords: ["infective endocarditis", "antibiotics", "medical urgency", "life-threatening", "infectious diseases"],
      },
      {
        id: "s4",
        name: "Cultural explanatory model",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "Maybe Allah is punishing me; medicine cannot change this.",
        whyItMatters: "Spiritual explanatory models may affect acceptance of treatment and require respectful exploration.",
        modelWording: "Explore Ahmad's religious explanatory model and integrate spiritual supports if acceptable while explaining biomedical treatment.",
        keywords: ["cultural explanatory model", "spiritual belief", "Islam", "illness meaning", "engagement", "psychoeducation"],
      },
      {
        id: "s5",
        name: "Security presence may re-traumatise",
        category: "immediate_safety",
        severity: "important",
        clueInStem: "visibly distressed when security staff stand near the door.",
        whyItMatters: "Security may worsen trauma response and refusal unless safety needs justify their presence.",
        modelWording: "Minimise visible coercion and security presence unless required for immediate safety, using trauma-informed engagement.",
        keywords: ["security", "trauma-informed care", "re-traumatisation", "coercion", "engagement", "safety"],
      },
      {
        id: "s6",
        name: "Substance use and stigma",
        category: "substance_use",
        severity: "optional",
        clueInStem: "intravenous heroin use.",
        whyItMatters: "Stigma and withdrawal may contribute to distress, absconding risk and refusal.",
        modelWording: "Assess opioid withdrawal, cravings and stigma because these may worsen refusal and engagement failure.",
        keywords: ["heroin use", "opioid withdrawal", "stigma", "craving", "absconding", "harm reduction"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Communication/cultural safety:

Stop relying on cousin as interpreter for capacity/refusal. Use professional interpreter and culturally safe, trauma-informed approach.

Formulation:

Explore refugee trauma, detention history, fear of immigration consequences and religious explanatory model. Avoid assuming refusal equals psychosis or incapacity without valid communication.

Medical/legal:

Clarify urgency of suspected endocarditis and consequences of delay. Assess capacity after interpreter-assisted explanation. If capacity absent and risk imminent, consider emergency treatment pathways.

Engagement:

Reduce visible security unless necessary. Offer social work, transcultural worker, spiritual support and addiction medicine input.

Documentation:

Record interpreter use, capacity reasoning, cultural formulation, medical urgency and least restrictive steps.`,
  },
];
