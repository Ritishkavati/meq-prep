import type { QuizStem } from "../quizData";

export const CS_STEMS: QuizStem[] = [
  {
    id: "CS-001",
    questionNumber: "MEQ-079",
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
    modelAnswer: `Marlee's refusal of assessment must be understood in the context of cultural mistrust, police involvement, trauma and child-protection fear, rather than treated simply as non-compliance. Her statement, "You mob only come when police drag us in," is a direct signal that the route of presentation has already activated mistrust and shame. If the team responds by immediately escalating coercion without culturally safe engagement, it may intensify the very fear driving her distress. I would slow the interaction where safe, introduce myself clearly, acknowledge that being brought by police can feel threatening, and seek Aboriginal Liaison or Aboriginal health support as soon as possible even if not immediately on site.

At the same time, cultural safety does not mean ignoring risk. Marlee says, "If they try to take my babies, I'll fight anyone," and this has to be assessed as a risk-to-others statement in the context of fear of child removal, sleep deprivation, alcohol escalation and recent disturbance at home. I would ensure staff safety, reduce stimulation, avoid crowding her with police or security unless necessary, and assess whether she has access to weapons, whether threats are directed at specific people, and whether intoxication or psychosis is present. The consultant task is to reduce coercion while still preventing foreseeable harm.

The children are central, not peripheral. The stem says "Her two children are currently with her aunt." I would clarify immediately whether the aunt is a safe and willing carer tonight, whether the children witnessed violence or distress, whether there are injuries or neglect concerns, and whether child protection notification is required. I would explain to Marlee that checking the children's safety does not automatically mean removal, and I would explore kinship and family supports before assuming statutory intervention is the only solution. This is the balance between safeguarding and avoiding unnecessary re-traumatisation.

Her statement, "Hospitals took my sister away and she never came back right," suggests personal or family trauma associated with institutions. I would not challenge that belief directly or dismiss it as paranoia. I would acknowledge that hospitals and services can feel unsafe, ask what would help her feel safer, and avoid unnecessary physical control. The aunt's collateral that Marlee "has not slept for three nights" and "has been drinking more" after a recent funeral is clinically significant. It raises a differential including grief reaction, trauma activation, substance-related disturbance, mood episode, psychosis or acute stress response.

Disposition should not be based only on the fact that she is calmer now or that police want to leave. If she can engage voluntarily with culturally safe supports and a safe family plan, that may be least restrictive. If she remains acutely disturbed, intoxicated, psychotic, threatening or unable to collaborate with safety, then involuntary assessment may be required under the relevant law. I would make that decision transparently, explaining the reason as safety rather than punishment. My documentation would record cultural-safety steps, Aboriginal support attempts, child-safety arrangements, collateral from the aunt, alcohol and sleep factors, risk formulation, and why the final plan was the least restrictive safe option.`,
  },
  {
    id: "CS-002",
    questionNumber: "MEQ-080",
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
    modelAnswer: `Wiremu's presentation requires a cultural formulation before the team can safely conclude that all of his experiences are psychotic symptoms. His statement, "This is not sickness; my ancestors are calling me," cannot be interpreted outside cultural context. A consultant-level response is not to decide that ancestral experience is either entirely cultural or entirely delusional from a registrar note. It is to ask whether the experience is culturally congruent, whether the intensity and behavioural consequences are new, whether it is shared or understood by whānau, and whether it is associated with risk, disorganisation, mood disturbance or impaired functioning.

The involuntary admission remains a live legal issue. The stem says he was "admitted involuntarily" after walking onto a motorway, so there was serious safety concern. However, ongoing compulsory care must be reviewed in light of cultural assessment, current risk and least restrictive alternatives. I would assess whether he continues to meet Mental Health Act criteria, whether he can engage voluntarily with whānau and Māori health support, and whether treatment can be delivered in a less coercive way. The principle is not to remove involuntary status reflexively because culture is involved, nor to maintain it reflexively because the behaviour was risky.

The whānau request for "a kaumātua and Māori health worker to be involved" is clinically important, not an optional courtesy. I would facilitate that involvement urgently because it may improve engagement, clarify cultural meaning, reduce coercion and support risk planning. The night registrar's note of "poor insight, delusional, refusing treatment" without speaking to whānau is an incomplete formulation. I would supervise the registrar that cultural collateral is part of the diagnostic and risk assessment, especially in Māori mental health.

Wiremu's medication refusal also needs exploration. He says staff are "cutting me off from my whakapapa." If medication or admission is experienced as severing connection to identity, whānau and ancestry, then simply insisting on antipsychotics may worsen mistrust and resistance. I would ask what he fears the medication will do, whether he has had side effects, whether he sees any part of the experience as distressing, and whether a whānau-supported discussion can help. If medication is necessary because risk remains high, I would still present it in a culturally respectful and least restrictive way.

The physical and ward-care details matter. He is pacing, chanting at night and "not eating hospital food." That may reflect psychosis, distress, cultural discomfort, paranoia about food, sleep-wake disturbance or unfamiliar environment. I would assess hydration, nutrition, sleep, physical health and whether culturally acceptable food or family support can reduce distress. His mother's statement, "He needs help, but not like this," captures the central tension: the family is not denying need, but they are objecting to the form of care.

My plan would be to review Wiremu with Māori health support, whānau and a culturally informed formulation; reassess risk from the motorway incident and current mental state; consider voluntary or less restrictive options if safe; and if involuntary treatment remains necessary, document exactly why, how culture was considered, and how coercion will be minimised. The model answer should show that cultural safety is not separate from risk and law; it is part of making the diagnostic, legal and disposition decision valid.`,
  },
  {
    id: "CS-003",
    questionNumber: "MEQ-081",
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
    modelAnswer: `Ahmad's refusal of investigation and antibiotics cannot be assessed properly until the communication failure is corrected. The registrar has been using his cousin to interpret because "professional interpreters take too long." That is not acceptable for a complex refusal involving possible life-threatening infective endocarditis, trauma, substance use and capacity. A family interpreter may filter information, inhibit disclosure, misunderstand medical language or have their own interests. My first action would be to arrange a professional interpreter urgently, by phone or video if necessary, before concluding that Ahmad lacks capacity or is making a capacitous refusal.

His statement, "hospital makes papers for immigration," is a major trauma and cultural-safety clue. It may reflect a rational fear based on past detention experiences, a trauma response to institutions, misunderstanding about confidentiality, or psychotic/paranoid thinking. The cousin's collateral that Ahmad "was detained for months before arriving in Australia and avoids government offices" makes trauma-related mistrust highly plausible. I would not respond by surrounding him with security or treating refusal as wilful obstruction. I would explain confidentiality, the separation between health care and immigration as accurately as possible, involve refugee health or social work support, and reduce visible coercion.

The infectious diseases team says delayed antibiotics "may be life-threatening." That creates urgency, but urgency does not justify an invalid capacity assessment. I would ask the medical team to clarify the diagnosis, expected benefit of antibiotics, risks of delaying blood cultures/echocardiography, alternatives, and how long engagement can safely continue. If Ahmad has capacity after proper interpretation and explanation, he can refuse even life-saving treatment. If he lacks capacity because trauma, delirium, psychosis, intoxication or withdrawal prevents appreciation and weighing, and the risk is imminent, emergency or substitute decision pathways may be needed.

His spiritual statement, "Maybe Allah is punishing me; medicine cannot change this," should be explored respectfully. It may be a cultural or religious explanatory model, depressive guilt, demoralisation or misunderstanding of treatment. I would ask what he believes is happening, whether he thinks treatment is forbidden or simply futile, whether he wants an imam or spiritual support, and how medical treatment can sit alongside faith. Respecting religion does not mean accepting a refusal without assessing whether he understands the medical situation; equally, medical urgency does not mean dismissing his spiritual framework.

The distress when "security staff stand near the door" matters. Security may be necessary if there is immediate danger, but in this case visible containment may be re-traumatising and worsening refusal. I would ask staff to step back if safe, use a calm single spokesperson, avoid crowding, and address opioid withdrawal or pain because "intravenous heroin use" may mean withdrawal, craving or stigma is also driving distress. Addiction medicine input may help engagement and reduce absconding risk.

My final advice would be to correct communication, formulate trauma and explanatory beliefs, clarify medical urgency, assess capacity decision-specifically, and use the least restrictive lawful path. I would document interpreter use, what Ahmad understood, his appreciation of death or complications, the role of immigration fear and detention trauma, spiritual supports offered, addiction considerations, and the legal basis for any treatment against refusal. Without that, either accepting refusal or overriding it would be unsafe and potentially unlawful.`,
  },
];
