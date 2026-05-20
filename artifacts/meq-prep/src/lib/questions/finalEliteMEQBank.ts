import type { QuizStem } from "../quizData";

/**
 * FINAL_ELITE_MEQ_BANK
 * 110 consultant-level RANZCP MEQ call cases.
 *
 * Design standard:
 * - live consultant decision under pressure
 * - tempting unsafe shortcut
 * - legal/policy hinge
 * - vulnerable third party
 * - cultural/family/system tension
 * - defensible disposition and documentation
 *
 * Do not clinically rewrite this file inside Replit Agent.
 */

export const FINAL_ELITE_MEQ_BANK: QuizStem[] = [
  {
    "id": "FINAL-001",
    "topic": "risk",
    "difficulty": "consultant",
    "title": "Denied suicidality with concealed lethal preparation",
    "candidateRole": "consultant psychiatrist on call to a metropolitan ED",
    "setting": "The ED is overcrowded and the registrar is asking for phone advice at 1:20 am",
    "stem": "You are the consultant psychiatrist on call to a metropolitan ED. The ED is overcrowded and the registrar is asking for phone advice at 1:20 am.\n\nMr Cole, a 52-year-old separated man, was brought by police after sitting for hours in his car outside his former workplace with a hose and tape in the boot. Mr Cole says, \"I am not stupid enough to say anything that gets me locked up.\" \n\nThe ED consultant says, \"He denies suicidal intent and we need the cubicle.\" The registrar asks, \"Can I discharge if he contracts for safety?\" His ex-wife says, \"The kids will be better off without me.\" He is from a rural farming community and says everyone will know if he is admitted.\n\nPolice says, \"We cannot stay here all night.\" You must decide whether he can leave ED tonight or requires involuntary/voluntary containment.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "denial-based discharge — unsafe shortcut under pressure",
        "category": "risk_self",
        "severity": "critical",
        "clueInStem": "He denies suicidal intent and we need the cubicle.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass concealed high-context suicide risk despite denial, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He denies suicidal intent and we need the cubicle.' without first formulating concealed high-context suicide risk despite denial, immediate safety and a defensible disposition.",
        "keywords": [
          "denial-based discharge",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "concealed high-context suicide risk despite denial — core clinical formulation",
        "category": "risk_self",
        "severity": "critical",
        "clueInStem": "I am not stupid enough to say anything that gets me locked up.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around concealed high-context suicide risk despite denial, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "concealed high-context suicide risk despite denial",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "capacity and safe discharge after self-harm risk — legal/policy hinge",
        "category": "mental_health_act",
        "severity": "critical",
        "clueInStem": "Can I discharge if he contracts for safety?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "capacity and safe discharge after self-harm risk",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "children and ex-partner affected by suicide and blame — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "The kids will be better off without me.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect children and ex-partner affected by suicide and blame, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "children and ex-partner affected by suicide and blame",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "collateral",
        "severity": "important",
        "clueInStem": "We cannot stay here all night.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether he can leave ED tonight or requires involuntary/voluntary containment",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Mr Cole should not be cleared because he denies suicidal intent or because the ED needs the cubicle. The unsafe shortcut is the ED consultant's phrase, "He denies suicidal intent and we need the cubicle." That is exactly the type of presentation where a consultant should become more cautious, not less, because the behaviour and collateral are more concerning than the verbal denial. Sitting for hours outside his former workplace with "a hose and tape in the boot" is potential method preparation in a shame-linked, occupationally focused crisis. The ED can be overcrowded and police may not be able to stay all night, but those pressures do not convert concealed suicide risk into a safe discharge.

The key clinical phrase is Mr Cole's statement, "I am not stupid enough to say anything that gets me locked up." This is not a reassuring denial; it is evidence that he understands the assessment process and may be deliberately managing disclosure to avoid containment. I would treat his denial as unreliable because it is inconsistent with the context: separation, former workplace, possible means, police involvement, rural shame about admission, and the ex-wife's statement, "The kids will be better off without me." That last phrase also suggests perceived burdensomeness involving his children, so the formulation must include the impact on the children and ex-partner, not merely whether he currently says the word suicide.

The legal and ethical tension is between respecting a capacitous adult's wish to leave and preventing a foreseeable death when risk is concealed. I would not detain him simply because ED feels uncomfortable, but I also would not accept a "contract for safety" as a legal or clinical solution. A safety contract does not neutralise method preparation, shame, alcohol or relationship stress, or strategic non-disclosure. I would assess capacity to refuse further assessment or admission, intoxication, mental state, depressive symptoms, access to means, and whether he can genuinely collaborate with a safety plan. If serious risk persists and he refuses voluntary care, I would consider the relevant Mental Health Act criteria for involuntary assessment or containment.

I would act by reviewing him directly or requiring the registrar to keep him in ED while I supervise closely. I would ask police and ED to secure the hose and tape, clarify whether the car was positioned for carbon monoxide or another method, obtain collateral from the ex-wife and police, and identify whether the children are safe and whether the ex-wife is being blamed or pressured. The rural farming community stigma matters because it may increase shame and concealment; I would address it respectfully, offering the least public and least restrictive safe option, but I would not let shame drive discharge.

I would document that the decision was not based on denial alone. The note should quote "I am not stupid enough to say anything that gets me locked up," record the hose and tape, the former workplace context, the ex-wife's burden statement, the ED and police pressures, the capacity and MHA reasoning, the alternatives considered, and why voluntary containment, involuntary assessment, or discharge with a robust plan was chosen. That documentation is defensible because it shows the consultant recognised concealed risk and did not allow a cubicle shortage or a superficial denial to decide disposition.`
  },
  {
    "id": "FINAL-002",
    "topic": "capacity_mha",
    "difficulty": "consultant",
    "title": "Psychotic refusal of dialysis with immediate medical risk",
    "candidateRole": "CL consultant psychiatrist in a tertiary hospital",
    "setting": "Renal ward calls at 6 pm with a time-critical treatment refusal",
    "stem": "You are the CL consultant psychiatrist in a tertiary hospital. Renal ward calls at 6 pm with a time-critical treatment refusal.\n\nRaj, a 43-year-old man with schizoaffective disorder and renal failure, has missed three dialysis sessions and is hyperkalaemic but is trying to leave the ward. Raj says, \"The machine is poisoning my blood because immigration put trackers in it.\" \n\nThe renal consultant says, \"He could arrest tonight, just sedate him.\" The ward team asks, \"Does the Mental Health Act let us dialyse him?\" His sister says, \"He stopped medication because he thought we were poisoning him.\" His family are recent migrants and fear hospital bills and immigration consequences.\n\nThe bed manager says, \"We cannot keep security here all evening.\" You must decide whether to treat against objection, under what legal basis, and with what safeguards.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "sedation to force treatment — unsafe shortcut under pressure",
        "category": "physical_health",
        "severity": "critical",
        "clueInStem": "He could arrest tonight, just sedate him.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass psychosis-driven refusal of life-saving dialysis, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He could arrest tonight, just sedate him.' without first formulating psychosis-driven refusal of life-saving dialysis, immediate safety and a defensible disposition.",
        "keywords": [
          "sedation to force treatment",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "psychosis-driven refusal of life-saving dialysis — core clinical formulation",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "The machine is poisoning my blood because immigration put trackers in it.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around psychosis-driven refusal of life-saving dialysis, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "psychosis-driven refusal of life-saving dialysis",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "emergency treatment authority versus MHA — legal/policy hinge",
        "category": "mental_health_act",
        "severity": "critical",
        "clueInStem": "Does the Mental Health Act let us dialyse him?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "emergency treatment authority versus MHA",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "family collateral about relapse and treatment refusal — vulnerable person safety",
        "category": "collateral",
        "severity": "important",
        "clueInStem": "He stopped medication because he thought we were poisoning him.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect family collateral about relapse and treatment refusal, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "family collateral about relapse and treatment refusal",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "We cannot keep security here all evening.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to treat against objection, under what legal basis, and with what safegu",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Raj should not be sedated simply so dialysis can be done quickly. The unsafe shortcut is the renal consultant's statement, "He could arrest tonight, just sedate him." The medical urgency is real because he has missed three dialysis sessions and is hyperkalaemic, but urgency does not remove the need to identify the correct legal basis, assess capacity, and use the least restrictive safe method. Forced sedation without legal clarity would expose Raj to physical risk, trauma, and potentially unlawful treatment, even if the renal risk is serious.

Raj's statement, "The machine is poisoning my blood because immigration put trackers in it," is the formulation-changing phrase. It shows that the refusal is not a balanced weighing of dialysis burden against medical risk; it appears to be driven by psychotic persecutory beliefs with a specific migration-related content. That makes decision-specific capacity doubtful because he may not be able to appreciate what dialysis is, why it is needed, or the consequence of refusing it. His sister's collateral that "He stopped medication because he thought we were poisoning him" supports relapse of psychosis interfering with treatment decisions, and it also suggests the family may be frightened and exhausted rather than simply obstructive.

The legal question is not answered by saying "Mental Health Act" as a magic phrase. The ward asks, "Does the Mental Health Act let us dialyse him?" and the answer depends on jurisdiction and on whether dialysis is treatment for mental illness, emergency medical treatment for incapacity, or requires a separate substitute decision or common law/emergency pathway. I would urgently clarify with renal the timing and lethality of hyperkalaemia, whether temporising measures are possible, and whether delay for a fuller assessment would be dangerous. If Raj lacks capacity and arrest is a near-term risk, emergency treatment authority may justify dialysis, but the team must use the correct hospital policy and legal route rather than assuming involuntary psychiatric status automatically authorises renal treatment.

The family and cultural context matters because his family are recent migrants and fear hospital bills and immigration consequences. Those fears may reinforce Raj's delusional content or make engagement harder. I would involve an interpreter if needed, explain confidentiality around immigration and billing as accurately as possible, and involve his sister as collateral/support if she is safe and he permits or if limited disclosure is necessary for urgent care. The bed manager's statement, "We cannot keep security here all evening," is an operational problem, not a clinical justification for excessive force.

My consultant actions would be to attend or supervise urgently, assess capacity specifically for dialysis refusal, treat agitation and psychosis proportionately, seek voluntary cooperation with family and culturally safe explanation, and if necessary authorise treatment through the correct emergency or statutory pathway with monitoring. I would document the hyperkalaemia urgency, the delusional basis of refusal, capacity findings, family collateral, the difference between MHA treatment and emergency renal treatment, alternatives attempted, sedation/restraint rationale if used, and why the final action was necessary and proportionate. That record is defensible because it shows that life-saving treatment was not delivered by convenience or fear, but by lawful, least restrictive reasoning.`
  },
  {
    "id": "FINAL-003",
    "topic": "risk",
    "difficulty": "consultant",
    "title": "Domestic violence perpetrator with suicidal coercion",
    "candidateRole": "consultant psychiatrist supervising a crisis team",
    "setting": "Police station telehealth review late Friday evening",
    "stem": "You are the consultant psychiatrist supervising a crisis team. Police station telehealth review late Friday evening.\n\nVictor, a 39-year-old man with PTSD and alcohol dependence, was detained after his partner called police during a violent argument. Victor says, \"If I cannot have the kids, no one will.\" \n\nPolice says, \"He is calm now and wants to go home.\" The crisis clinician asks, \"Is this just relationship conflict rather than MHA?\" His partner says, \"I am afraid to go home with the children.\" The family belong to a small faith community where separation is heavily stigmatised.\n\nVictor says, \"I only threatened myself so she would listen.\" You must decide whether to support return home, arrange police/family violence protection, or pursue mental health assessment.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "calm presentation discharge shortcut — unsafe shortcut under pressure",
        "category": "risk_others",
        "severity": "critical",
        "clueInStem": "He is calm now and wants to go home.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass coercive family violence with risk to others, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He is calm now and wants to go home.' without first formulating coercive family violence with risk to others, immediate safety and a defensible disposition.",
        "keywords": [
          "calm presentation discharge shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "coercive family violence with risk to others — core clinical formulation",
        "category": "risk_others",
        "severity": "critical",
        "clueInStem": "If I cannot have the kids, no one will.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around coercive family violence with risk to others, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "coercive family violence with risk to others",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "MHA threshold and family violence safety — legal/policy hinge",
        "category": "mental_health_act",
        "severity": "critical",
        "clueInStem": "Is this just relationship conflict rather than MHA?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "MHA threshold and family violence safety",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "partner and children at imminent risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I am afraid to go home with the children.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect partner and children at imminent risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "partner and children at imminent risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "family_carer",
        "severity": "important",
        "clueInStem": "I only threatened myself so she would listen.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to support return home, arrange police/family violence protection, or pu",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Victor must not be allowed to return home simply because police describe him as calm. The unsafe shortcut is "He is calm now and wants to go home." In family violence, calmness after police attendance is not evidence of safety; it may reflect temporary containment, strategic self-presentation, or the immediate threat having shifted back to the partner and children if he returns. The core decision is not whether Victor appears settled in custody, but whether his partner and children are safe from further coercion, violence or lethal escalation.

His statement, "If I cannot have the kids, no one will," changes the entire formulation. It is not just suicidal speech or relationship distress; it is a threat involving children as objects of control and potential harm. His later minimisation, "I only threatened myself so she would listen," reinforces coercive control rather than reducing risk. He is using self-threats to influence his partner, and the partner's statement, "I am afraid to go home with the children," must be treated as high-value collateral. The children and partner are vulnerable third parties, and their safety has priority over Victor's wish to return home tonight.

The legal and ethical tension is whether this is a mental health matter, a family violence matter, or both. The crisis clinician asks, "Is this just relationship conflict rather than MHA?" I would reject the word "just." Family violence is itself a serious safety issue, and PTSD or alcohol dependence may increase risk without excusing it. I would assess whether a mental disorder is contributing to serious risk and whether Mental Health Act assessment is indicated, but I would also activate police and family violence pathways regardless of whether MHA criteria are met. Psychiatric admission cannot be used as a substitute for victim protection, and absence of MHA criteria cannot justify ignoring threats.

The small faith community where separation is heavily stigmatised may increase pressure on the partner to return and may make disclosure harder. I would not organise any joint meeting or mediation. I would ask police to assess protection order options, weapon access, prior violence, strangulation, stalking, alcohol use and child exposure. I would ensure the partner and children have safe accommodation and specialist family violence support. I would also assess Victor's intoxication, withdrawal, suicidality, access to means, mental state, capacity to follow police directions, and willingness to accept treatment.

I would document the exact threat "If I cannot have the kids, no one will," the partner's fear, the children as direct vulnerable parties, the distinction between family violence and MHA thresholds, police liaison, information sharing rationale, and why return home was or was not supported. The record should make clear that disposition was not driven by his calm presentation in custody, but by a structured formulation of coercive control, risk to others, possible self-risk and statutory safety duties.`
  },
  {
    "id": "FINAL-004",
    "topic": "capacity_mha",
    "difficulty": "consultant",
    "title": "Adolescent overdose, articulate refusal and boarding-school pressure",
    "candidateRole": "consultant child and adolescent psychiatrist on call",
    "setting": "Regional ED with no CAMHS bed available",
    "stem": "You are the consultant child and adolescent psychiatrist on call. Regional ED with no CAMHS bed available.\n\nLeila, a 16-year-old boarding-school student, took an uncertain quantity of paracetamol and fluoxetine and now refuses NAC and admission. Leila says, \"I understand my liver could fail, but that is my choice.\" \n\nThe ED doctor says, \"She is articulate, so she can refuse.\" The registrar asks, \"Can we use the Act if she is Gillick competent?\" Her aunt says, \"She is dramatic but clever; discharge her if she promises.\" Leila is an international student and fears her parents overseas will be told.\n\nThe school deputy says, \"We cannot keep a staff member here overnight.\" You must decide whether to continue treatment and admission despite refusal and uncertain overdose risk.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "articulate-capacity shortcut — unsafe shortcut under pressure",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "She is articulate, so she can refuse.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass adolescent suicidal refusal with apparent understanding, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'She is articulate, so she can refuse.' without first formulating adolescent suicidal refusal with apparent understanding, immediate safety and a defensible disposition.",
        "keywords": [
          "articulate-capacity shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "adolescent suicidal refusal with apparent understanding — core clinical formulation",
        "category": "risk_self",
        "severity": "critical",
        "clueInStem": "I understand my liver could fail, but that is my choice.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around adolescent suicidal refusal with apparent understanding, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "adolescent suicidal refusal with apparent understanding",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "minor consent, capacity and MHA — legal/policy hinge",
        "category": "consent_refusal",
        "severity": "critical",
        "clueInStem": "Can we use the Act if she is Gillick competent?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "minor consent, capacity and MHA",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "unsafe minimising carer and lack of supervision — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She is dramatic but clever; discharge her if she promises.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect unsafe minimising carer and lack of supervision, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "unsafe minimising carer and lack of supervision",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "collateral",
        "severity": "important",
        "clueInStem": "We cannot keep a staff member here overnight.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to continue treatment and admission despite refusal and uncertain overdo",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Leila should not be allowed to refuse treatment simply because she is articulate. The unsafe shortcut is the ED doctor's statement, "She is articulate, so she can refuse." Adolescents in suicidal crisis can sound coherent while being unable to appreciate or weigh the consequences of their decision. The overdose is medically time-sensitive because the quantity of paracetamol and fluoxetine is uncertain, and refusal of NAC or admission may convert a treatable overdose into liver failure or death. I would make clear that fluency of speech is not the same as capacity.

Her statement, "I understand my liver could fail, but that is my choice," is the key phrase. It shows she can repeat a medical consequence, but it does not prove she can appreciate that consequence as personally real or weigh survival against the state of mind that led to overdose. In this context, capacity must be decision-specific and crisis-specific. I would assess whether depression, shame, fear of parents overseas, boarding-school stress, intoxication, or suicidal intent is impairing her weighing. I would also ask what she expected to happen when she took the medication, whether she is glad to be alive, and whether refusal is part of a continuing wish to die.

The legal tension is complex because the registrar asks, "Can we use the Act if she is Gillick competent?" Gillick competence, parental responsibility, emergency medical treatment, child protection and Mental Health Act powers may all intersect, depending on jurisdiction. I would not simplify this to "competent equals no treatment" or "minor equals can be forced." If she has capacity and the law recognises her refusal, that carries weight; but if capacity is impaired by suicidal crisis or if emergency treatment is necessary to prevent serious harm, the team may have authority to treat. I would involve senior ED/paediatrics, toxicology and CAMHS, and if needed seek legal/guardian advice urgently while not delaying NAC where emergency treatment is justified.

The aunt's minimising statement, "She is dramatic but clever; discharge her if she promises," is unsafe. A promise from a young person after overdose is not a safety plan. The school deputy saying, "We cannot keep a staff member here overnight," identifies a supervision gap, not a reason for discharge. Leila's international student status and fear that her parents overseas will be told must be managed carefully: confidentiality should be respected where possible, but safety and legal obligations may require involving guardians or appropriate responsible adults.

I would document the uncertain ingestion, the treatment urgency, the capacity assessment beyond articulation, the legal pathway used, what was disclosed and why, the insufficiency of a promise, and the supervision plan. If she is treated or admitted despite refusal, the documentation must show why that was necessary, proportionate and least restrictive. If she is not detained, it must show confirmed medical clearance, safe adult supervision, means restriction and CAMHS follow-up, not merely that she sounded clever.`
  },
  {
    "id": "FINAL-005",
    "topic": "risk",
    "difficulty": "consultant",
    "title": "First episode psychosis with weapon and family unable to supervise",
    "candidateRole": "consultant psychiatrist for early psychosis intake",
    "setting": "Busy ED with police requesting disposition",
    "stem": "You are the consultant psychiatrist for early psychosis intake. Busy ED with police requesting disposition.\n\nJayden, a 19-year-old man, was brought after swinging a baseball bat at a neighbour's door while shouting about cameras in smoke alarms. Jayden says, \"If they come through the ceiling, I will protect myself.\" \n\nThe ED registrar says, \"He denies wanting to hurt anyone, so early psychosis can see him tomorrow.\" Police asks, \"Do you want us to leave or keep him under guard?\" His mother says, \"I cannot take him home tonight.\" His family are ashamed and say mental illness is not discussed in their community.\n\nThe ED flow coordinator says, \"There are no mental health beds and he is only nineteen.\" You must decide whether admission, involuntary assessment, or intensive crisis containment is required.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "denial-based outpatient shortcut — unsafe shortcut under pressure",
        "category": "risk_others",
        "severity": "critical",
        "clueInStem": "He denies wanting to hurt anyone, so early psychosis can see him tomorrow.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass persecutory psychosis causing defensive violence risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He denies wanting to hurt anyone, so early psychosis can see him tomorrow.' without first formulating persecutory psychosis causing defensive violence risk, immediate safety and a defensible disposition.",
        "keywords": [
          "denial-based outpatient shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "persecutory psychosis causing defensive violence risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "If they come through the ceiling, I will protect myself.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around persecutory psychosis causing defensive violence risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "persecutory psychosis causing defensive violence risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "MHA assessment and police involvement — legal/policy hinge",
        "category": "mental_health_act",
        "severity": "critical",
        "clueInStem": "Do you want us to leave or keep him under guard?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "MHA assessment and police involvement",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "family cannot supervise weapon-related risk — vulnerable person safety",
        "category": "family_carer",
        "severity": "important",
        "clueInStem": "I cannot take him home tonight.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect family cannot supervise weapon-related risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "family cannot supervise weapon-related risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "There are no mental health beds and he is only nineteen.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether admission, involuntary assessment, or intensive crisis containment is re",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Jayden should not be sent home for early psychosis review tomorrow because he denies wanting to hurt anyone. The unsafe shortcut is the registrar's phrase, "He denies wanting to hurt anyone, so early psychosis can see him tomorrow." In persecutory psychosis, violence often emerges not from a declared wish to harm but from perceived self-defence. He has already swung a baseball bat at a neighbour's door while shouting about cameras, so his behaviour has crossed from belief into weapon-related action.

The key phrase is, "If they come through the ceiling, I will protect myself." That quote shows that Jayden's risk is defensive and threat-based. He may genuinely believe he is preparing to protect himself from intruders, which makes his denial of wanting to hurt anyone unreliable. The neighbour or anyone he misidentifies as "they" becomes a potential victim. I would therefore formulate first episode psychosis with persecutory beliefs, impaired reality testing, weapon use and risk to others, while also assessing whether substances, mood disorder, trauma or medical causes contribute.

The legal and practical issue is police involvement. Police ask, "Do you want us to leave or keep him under guard?" I would not use police guard as a substitute for a lawful mental health plan, but I would not release police before immediate safety is established. I would clarify whether MHA assessment criteria are met, remove access to the bat or other weapons, arrange safe observation in ED, and decide whether voluntary admission, involuntary assessment or intensive crisis containment is required. Least restrictive care for a 19-year-old does not mean outpatient review if the home cannot safely contain risk.

His mother says, "I cannot take him home tonight," which is decisive for disposition. She is not simply anxious; she is stating that the only proposed support cannot supervise him. The family's shame about mental illness also matters because it may delay help-seeking and increase pressure to minimise symptoms. I would engage the family respectfully, explain that early treatment is protective and not a moral failure, and avoid unnecessary stigma or police visibility while maintaining safety.

The ED flow coordinator's statement, "There are no mental health beds and he is only nineteen," is system pressure, not a clinical argument. If no bed is immediately available, I would still require a safe interim plan with observation, medication discussion, senior review and escalation. I would document the baseball bat incident, the ceiling quote, weapon removal, police role, mother's inability to supervise, cultural shame, MHA reasoning and why outpatient follow-up alone was unsafe or why an alternative crisis plan was sufficient.`
  },
  {
    "id": "FINAL-006",
    "topic": "capacity_mha",
    "difficulty": "consultant",
    "title": "Mania in pregnancy refusing fetal monitoring and admission",
    "candidateRole": "consultant perinatal psychiatrist covering ED",
    "setting": "Metropolitan ED at 2 am with obstetrics, police and psychiatry present",
    "stem": "You are the consultant perinatal psychiatrist covering ED. Metropolitan ED at 2 am with obstetrics, police and psychiatry present.\n\nMaya, a 34-year-old Aboriginal woman at 32 weeks gestation, was brought by police after burning baby clothes and refusing fetal monitoring. Maya says, \"The baby is chosen and hospital machines will steal its spirit.\" \n\nThe ED consultant says, \"She is calmer now; can we discharge with her mother?\" Obstetrics asks, \"Can we monitor the fetus against her wishes?\" Her 8-year-old son says, \"He was crying in the house when police arrived.\" She says child protection stole her sister's children and refuses to speak with non-Aboriginal staff.\n\nHer mother says, \"You are punishing her for being Aboriginal.\" You must decide whether to involuntarily admit, how to manage fetal assessment, and how to protect children.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "calm-now discharge shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "She is calmer now; can we discharge with her mother?",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass manic psychosis impairing maternal-fetal decisions, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'She is calmer now; can we discharge with her mother?' without first formulating manic psychosis impairing maternal-fetal decisions, immediate safety and a defensible disposition.",
        "keywords": [
          "calm-now discharge shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "manic psychosis impairing maternal-fetal decisions — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "The baby is chosen and hospital machines will steal its spirit.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around manic psychosis impairing maternal-fetal decisions, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "manic psychosis impairing maternal-fetal decisions",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "maternal capacity and emergency obstetric care — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we monitor the fetus against her wishes?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "maternal capacity and emergency obstetric care",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "existing child and unborn baby safety — vulnerable person safety",
        "category": "child_protection",
        "severity": "important",
        "clueInStem": "He was crying in the house when police arrived.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect existing child and unborn baby safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "existing child and unborn baby safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "You are punishing her for being Aboriginal.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to involuntarily admit, how to manage fetal assessment, and how to prote",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Maya should not be discharged because she is calmer now. The unsafe shortcut is, "She is calmer now; can we discharge with her mother?" Calmness after police containment and ED observation does not resolve manic psychosis, fetal risk, child safety or cultural mistrust. She was brought by police after burning baby clothes and refusing fetal monitoring at 32 weeks gestation; these are not minor behavioural disturbances.

Her statement, "The baby is chosen and hospital machines will steal its spirit," is the key formulation. It suggests manic or psychotic beliefs directly shaping refusal of obstetric assessment. The refusal is not a simple informed refusal of fetal monitoring; it may be driven by delusional or culturally elaborated beliefs, fear, and possible impaired capacity. I would assess mental state, sleep, mood, psychosis, substance use, previous bipolar or postpartum history, and capacity to refuse admission and fetal monitoring, focusing on whether she can understand, appreciate and weigh risks to herself and the unborn baby.

The legal and ethical tension is the obstetric question, "Can we monitor the fetus against her wishes?" A fetus is vulnerable, but the mother is the rights-bearing patient; fetal interests do not automatically override a capacitous woman's refusal. If Maya has capacity, coercive fetal monitoring may be unlawful even if clinicians disagree. If she lacks capacity because of mania or psychosis and fetal assessment is necessary to prevent serious harm, emergency treatment or mental health legislation may be relevant, depending on jurisdiction and local policy. I would involve obstetrics, ED, psychiatry, hospital legal/ethics if needed, and Aboriginal health support.

Her 8-year-old son saying, "He was crying in the house when police arrived," makes child protection part of the immediate plan. I would clarify where he is now, whether he witnessed dangerous behaviour, whether there are other children, and whether a child protection notification or kinship safety plan is needed. The unborn baby also requires obstetric planning, but not in a way that erases Maya's rights or culture.

Maya refuses to speak with non-Aboriginal staff and her mother says, "You are punishing her for being Aboriginal." I would acknowledge this fear directly, involve Aboriginal Liaison or senior Aboriginal health staff urgently, use culturally safe explanation, and avoid framing admission as punishment. If involuntary admission is necessary, I would explain the safety basis, invite family support where safe, and document the cultural steps taken. My documentation would include the psychotic content, capacity reasoning, fetal assessment decision, child-safety actions, cultural liaison attempts, least restrictive alternatives and why discharge with mother was unsafe despite temporary calm.`
  },
  {
    "id": "FINAL-007",
    "topic": "risk",
    "difficulty": "consultant",
    "title": "Personality disorder label after venlafaxine overdose and bed pressure",
    "candidateRole": "consultant psychiatrist on call to ED",
    "setting": "Metropolitan ED after eight-hour access block",
    "stem": "You are the consultant psychiatrist on call to ED. Metropolitan ED after eight-hour access block.\n\nTyra, a 33-year-old woman, presented after taking twenty venlafaxine tablets and now says she wants to leave. Tyra says, \"If I stay here I will just get worse.\" \n\nThe ED physician says, \"She has done this before and I need the bed.\" The registrar asks, \"Can I document personality disorder and discharge?\" Her sister says, \"I am terrified and cannot take her home.\" Tyra is a transgender woman who says ED staff repeatedly use the wrong name.\n\nNursing staff says, \"She refuses every plan we offer.\" You must decide whether to discharge, admit briefly, or create a crisis alternative that is safe and non-rejecting.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "habituation and bed-pressure shortcut — unsafe shortcut under pressure",
        "category": "risk_self",
        "severity": "critical",
        "clueInStem": "She has done this before and I need the bed.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass acute-on-chronic self-harm risk with invalidating care, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'She has done this before and I need the bed.' without first formulating acute-on-chronic self-harm risk with invalidating care, immediate safety and a defensible disposition.",
        "keywords": [
          "habituation and bed-pressure shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "acute-on-chronic self-harm risk with invalidating care — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "If I stay here I will just get worse.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around acute-on-chronic self-harm risk with invalidating care, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "acute-on-chronic self-harm risk with invalidating care",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "disposition and diagnostic stigma — legal/policy hinge",
        "category": "disposition",
        "severity": "critical",
        "clueInStem": "Can I document personality disorder and discharge?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "disposition and diagnostic stigma",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "carer unable to supervise discharge — vulnerable person safety",
        "category": "family_carer",
        "severity": "important",
        "clueInStem": "I am terrified and cannot take her home.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect carer unable to supervise discharge, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "carer unable to supervise discharge",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "She refuses every plan we offer.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to discharge, admit briefly, or create a crisis alternative that is safe",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Tyra should not be discharged because she has "done this before" or because the ED needs the bed. The unsafe shortcut is the ED physician's statement, "She has done this before and I need the bed." Recurrent self-harm does not reduce risk; it often marks chronic vulnerability with acute fluctuations. Twenty venlafaxine tablets is medically and psychiatrically significant, and using a personality disorder label to justify rapid discharge would be stigmatising and unsafe.

Tyra's phrase, "If I stay here I will just get worse," should be taken seriously rather than dismissed. It may reflect previous invalidating hospital experiences, fear of misgendering, trauma responses, or the real iatrogenic risk of prolonged admission for some people with personality structure difficulties. But it does not automatically mean discharge is safe. It tells me the task is to create a non-rejecting, time-limited, purposeful crisis plan rather than reflexively admit or reflexively discharge.

The legal and ethical tension is captured by the registrar's question, "Can I document personality disorder and discharge?" Diagnosis is not a disposition. The consultant must decide whether there is acute-on-chronic suicide risk requiring containment, whether Tyra has capacity to refuse further care, and whether a safe alternative exists. If she can collaborate, a brief admission, crisis-stabilisation space, peer support, DBT-informed plan or intensive follow-up may be less harmful than prolonged admission. If she remains medically unsafe, intoxicated, unable to safety plan, or at high acute risk, admission or involuntary assessment may be needed.

Her sister's statement, "I am terrified and cannot take her home," removes a common but unsafe discharge assumption. The sister cannot be used as supervision. Tyra is also a transgender woman who says staff repeatedly use the wrong name; this is not a side issue. Misnaming may be part of why she refuses plans and deteriorates in ED. I would correct staff practice immediately, use her name and pronouns, and ensure the plan is gender-affirming and safe.

Nursing staff say, "She refuses every plan we offer," which may reflect rigidity from Tyra, but may also reflect plans that feel rejecting, coercive or invalidating. I would lead a short MDT huddle to align language, reduce splitting, set realistic choices and avoid punitive care. I would document the overdose, medical clearance, acute versus chronic risk, sister collateral, gender-safety issue, options considered, why bed pressure was rejected as a reason, and the rationale for brief admission, crisis alternative or discharge. Defensible documentation shows the decision was therapeutic and safety-based, not driven by stigma.`
  },
  {
    "id": "FINAL-008",
    "topic": "capacity_mha",
    "difficulty": "consultant",
    "title": "Dementia patient refusing residential care from ED after wandering",
    "candidateRole": "old age psychiatrist on call",
    "setting": "ED observation bay with ACAT, family and police waiting",
    "stem": "You are the old age psychiatrist on call. ED observation bay with ACAT, family and police waiting.\n\nMrs Bell, a 77-year-old woman with Alzheimer disease, was found wandering in heavy rain and now insists on going home alone. Mrs Bell says, \"I have lived there fifty years and I am not going to a prison.\" \n\nHer son says, \"She has a right to make bad decisions.\" Social work asks, \"Can we hold her here until guardianship?\" Police says, \"She was on the highway in the rain.\" Mrs Bell is a devout Catholic and believes residential care means abandonment by family.\n\nHer daughter says, \"If we lose the bed today, she will never get placed.\" You must decide whether she has accommodation capacity and what lawful safe disposition is possible.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "autonomy shortcut without capacity analysis — unsafe shortcut under pressure",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "She has a right to make bad decisions.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass dementia-related refusal of safe accommodation, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'She has a right to make bad decisions.' without first formulating dementia-related refusal of safe accommodation, immediate safety and a defensible disposition.",
        "keywords": [
          "autonomy shortcut without capacity analysis",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "dementia-related refusal of safe accommodation — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I have lived there fifty years and I am not going to a prison.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around dementia-related refusal of safe accommodation, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "dementia-related refusal of safe accommodation",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "guardianship and least restrictive detention — legal/policy hinge",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "Can we hold her here until guardianship?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "guardianship and least restrictive detention",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "vulnerability from wandering and exposure — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She was on the highway in the rain.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect vulnerability from wandering and exposure, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "vulnerability from wandering and exposure",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "family_carer",
        "severity": "important",
        "clueInStem": "If we lose the bed today, she will never get placed.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether she has accommodation capacity and what lawful safe disposition is possi",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Mrs Bell should not be sent home simply because her son says, "She has a right to make bad decisions." That principle is true only if she has decision-specific capacity. The unsafe shortcut is to convert a valid autonomy principle into a reason not to assess accommodation capacity. Mrs Bell was found wandering "on the highway in the rain"; that is concrete evidence of exposure, traffic risk and impaired safety awareness.

Her statement, "I have lived there fifty years and I am not going to a prison," is not merely refusal. It reveals the emotional meaning of home, fear of institutionalisation, and her Catholic belief that residential care means abandonment by family. I would respect that meaning and avoid treating residential care as an administrative placement. But capacity requires more than expressing a strong value. I would assess whether she can understand why people are worried, remember the wandering incident, appreciate the risk of recurrence, weigh home against safety, and consider alternatives such as increased home supports, respite, family supervision or residential care.

Social work asks, "Can we hold her here until guardianship?" That is the legal hinge. Hospital cannot detain someone merely because a bed is available or guardianship is pending, unless there is lawful authority. If she lacks capacity and there is serious risk, an emergency holding provision, guardianship application, hospital duty of care or other jurisdictional mechanism may apply. If she has capacity, she cannot be held simply because others disagree. I would clarify the local pathway urgently with social work, ACAT, legal/guardianship services and the treating medical team.

The daughter says, "If we lose the bed today, she will never get placed." That pressure is understandable but cannot determine capacity. I would acknowledge the family distress, explore whether the bed can be held, and explain that a lawful and defensible process is essential. I would also check whether family conflict is shaping the story, and obtain collateral from police, ACAT, GP and any home-care providers.

My documentation would state the exact accommodation-capacity assessment, the highway incident, her stated values about home and faith, family pressures, alternatives considered, legal authority for any holding, and why the final disposition was the least restrictive safe option. A defensible answer shows that autonomy was respected but not used as a shortcut to ignore dementia-related vulnerability.`
  },
  {
    "id": "FINAL-009",
    "topic": "risk",
    "difficulty": "consultant",
    "title": "Alcohol withdrawal, head injury and threats in remote cells",
    "candidateRole": "consultant psychiatrist providing remote advice",
    "setting": "Small rural police station and clinic with one nurse on call",
    "stem": "You are the consultant psychiatrist providing remote advice. Small rural police station and clinic with one nurse on call.\n\nNoah, a 40-year-old Aboriginal man, was arrested after threatening his partner with a shovel while intoxicated and now has a head injury. Noah says, \"I only scared her because she was taking the kids.\" \n\nPolice says, \"He can sleep it off in the cells.\" The nurse asks, \"Do we have to medically clear him before police custody?\" His partner says, \"If he comes back tonight, someone will die.\" Community leaders want the matter handled inside community.\n\nHis aunt says, \"His brother's suicide broke him.\" You must decide whether he needs medical transfer, psychiatric assessment, police protection or child safety action.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "custody-as-care shortcut — unsafe shortcut under pressure",
        "category": "risk_others",
        "severity": "critical",
        "clueInStem": "He can sleep it off in the cells.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass alcohol-related family violence with possible brain injury, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He can sleep it off in the cells.' without first formulating alcohol-related family violence with possible brain injury, immediate safety and a defensible disposition.",
        "keywords": [
          "custody-as-care shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "alcohol-related family violence with possible brain injury — core clinical formulation",
        "category": "substance_use",
        "severity": "critical",
        "clueInStem": "I only scared her because she was taking the kids.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around alcohol-related family violence with possible brain injury, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "alcohol-related family violence with possible brain injury",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "medical risk and custody safety policy — legal/policy hinge",
        "category": "physical_health",
        "severity": "critical",
        "clueInStem": "Do we have to medically clear him before police custody?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "medical risk and custody safety policy",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "partner and children at lethal family violence risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "If he comes back tonight, someone will die.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect partner and children at lethal family violence risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "partner and children at lethal family violence risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "His brother's suicide broke him.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether he needs medical transfer, psychiatric assessment, police protection or ",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Noah should not simply be allowed to "sleep it off in the cells." That is the unsafe shortcut. He is intoxicated, has a head injury, has threatened his partner with a shovel, and his partner says, "If he comes back tonight, someone will die." Police custody may be necessary for public safety, but it is not a substitute for medical assessment, withdrawal monitoring, head injury observation or psychiatric risk formulation.

His statement, "I only scared her because she was taking the kids," is clinically important because it minimises violence and frames intimidation as justified by loss of control over family. That is coercive family violence language, not reassurance. Alcohol intoxication may have increased disinhibition, and his head injury may add confusion, impulsivity or medical risk, but neither explains away the threat. I would assess intoxication, withdrawal risk, head injury red flags, suicidality, depression, grief, neurocognitive issues, weapons access, prior violence and the immediate risk to partner and children.

The nurse's question, "Do we have to medically clear him before police custody?" must be answered clearly. If there is head injury, intoxication or possible withdrawal, he requires medical assessment before placement in cells unless a custody health policy provides an equivalent level of monitoring. If he lacks capacity to refuse urgent medical assessment and serious harm is possible, emergency medical care may be required. If psychiatric disorder contributes to serious risk, MHA assessment may also be needed, but family violence and criminal safety remain police responsibilities.

The partner and children are the vulnerable third parties. The partner's statement is a lethal-risk warning; I would prioritise her safety, safe housing, police protection, family violence service contact and child-safety notification if children witnessed or are at risk. Community leaders wanting the matter handled "inside community" should be respected only if it strengthens safety. It must not silence the partner or bypass statutory duties. As an Aboriginal man whose aunt says, "His brother's suicide broke him," Noah also needs culturally safe assessment of grief and suicide risk, but cultural understanding cannot reduce the urgency of victim protection.

I would document the shovel threat, head injury, intoxication, medical clearance advice, partner's exact warning, child-safety steps, community consultation, cultural supports, and the reason custody, transfer, medical observation or psychiatric assessment was chosen. The record must show that the decision was not driven by convenience for police or lack of rural resources, but by integrated medical, family violence and cultural-safety reasoning.`
  },
  {
    "id": "FINAL-010",
    "topic": "capacity_mha",
    "difficulty": "consultant",
    "title": "Refusal of antipsychotic on inpatient ward with escalating intimidation",
    "candidateRole": "consultant psychiatrist for acute inpatient unit",
    "setting": "Locked inpatient ward during evening nursing escalation",
    "stem": "You are the consultant psychiatrist for acute inpatient unit. Locked inpatient ward during evening nursing escalation.\n\nOmar, a 28-year-old man admitted involuntarily, is refusing antipsychotic medication and standing over vulnerable patients. Omar says, \"The tablets are trackers that will let them control my thoughts.\" \n\nNurses says, \"Can we inject him tonight so the ward settles?\" The registrar asks, \"Does involuntary admission automatically allow treatment?\" An elderly patient says, \"He told me I am one of them.\" Omar's father says the family was previously traumatised by restraint in hospital.\n\nThe bed manager says, \"We cannot staff special observations all night.\" You must decide whether involuntary treatment is lawful, necessary and least restrictive tonight.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "forced medication shortcut — unsafe shortcut under pressure",
        "category": "risk_others",
        "severity": "critical",
        "clueInStem": "Can we inject him tonight so the ward settles?",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass psychosis-driven refusal of treatment, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Can we inject him tonight so the ward settles?' without first formulating psychosis-driven refusal of treatment, immediate safety and a defensible disposition.",
        "keywords": [
          "forced medication shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "psychosis-driven refusal of treatment — core clinical formulation",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "The tablets are trackers that will let them control my thoughts.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around psychosis-driven refusal of treatment, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "psychosis-driven refusal of treatment",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "MHA treatment authority and proportionality — legal/policy hinge",
        "category": "mental_health_act",
        "severity": "critical",
        "clueInStem": "Does involuntary admission automatically allow treatment?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "MHA treatment authority and proportionality",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "vulnerable inpatient safety — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He told me I am one of them.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect vulnerable inpatient safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "vulnerable inpatient safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "trauma",
        "severity": "important",
        "clueInStem": "We cannot staff special observations all night.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether involuntary treatment is lawful, necessary and least restrictive tonight",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Omar should not be injected simply "so the ward settles." That is the unsafe shortcut in the nurses' question, "Can we inject him tonight so the ward settles?" The ward may be frightened and under-resourced, but medication by force must be justified by clinical need, legal authority and proportionality, not by staff relief or bed-management pressure. Omar is refusing antipsychotic treatment, but the immediate issue is whether his psychosis and behaviour create serious risk that requires treatment tonight.

His statement, "The tablets are trackers that will let them control my thoughts," changes the capacity formulation. This is not a capacitous refusal based on side effects or preference; it appears to be a delusional belief about medication. I would assess capacity to refuse antipsychotic treatment specifically, asking whether he understands the purpose of medication, the reason for admission, risks of refusal, and alternatives. His behaviour of standing over vulnerable patients, and the elderly patient's report, "He told me I am one of them," shows that his delusional framework is extending to other inpatients and may create defensive or persecutory aggression risk.

The registrar asks, "Does involuntary admission automatically allow treatment?" The answer is no in principle: the exact authority depends on the relevant Mental Health Act and treatment provisions. Involuntary admission does not remove the need for proper treatment authorisation, capacity assessment where required, second opinions or forms, and least restrictive practice. I would clarify the local legal pathway before forced treatment, unless emergency rapid tranquillisation is required for immediate safety under policy.

The family trauma history matters. Omar's father says the family was previously traumatised by restraint in hospital. I would try engagement, oral medication, reduced stimulation, family involvement if helpful, and staff consistency before coercion. But trauma history does not mean the ward must tolerate intimidation of elderly or vulnerable patients. The bed manager's statement, "We cannot staff special observations all night," is a system pressure; it may influence resource escalation, but not the ethical basis for forced medication.

I would document the delusional basis of refusal, capacity findings, risk to vulnerable patients, legal authority, less restrictive attempts, family trauma considerations, observation constraints, and rationale for oral medication, IM treatment, restraint, or continued observation. Defensible documentation shows that any involuntary treatment was necessary to treat mental illness and protect others, not to quiet the ward for operational convenience.`
  },
  {
    "id": "FINAL-011",
    "topic": "perinatal",
    "difficulty": "consultant",
    "title": "Postpartum psychosis with no mother-baby bed",
    "candidateRole": "perinatal consultant psychiatrist on call",
    "setting": "ED and postnatal ward on Saturday night",
    "stem": "You are the perinatal consultant psychiatrist on call. ED and postnatal ward on Saturday night.\n\nSana, a 31-year-old woman 10 days postpartum, has slept less than two hours for four nights and was found praying over the bassinet. Sana says, \"This baby is not safe in my hands tonight.\" \n\nBed manager says, \"There is no mother-baby bed in the state.\" Registrar asks, \"Can crisis follow her at home if her mother supervises?\" The baby says, \"I cannot be alone with him.\" Her mother speaks Dari only and no interpreter is on site.\n\nPartner says, \"Hospital will make her worse.\" You must decide whether to admit without a mother-baby bed and how to protect the infant.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "resource-driven discharge shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "There is no mother-baby bed in the state.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass postpartum psychosis and infant safety, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'There is no mother-baby bed in the state.' without first formulating postpartum psychosis and infant safety, immediate safety and a defensible disposition.",
        "keywords": [
          "resource-driven discharge shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "postpartum psychosis and infant safety — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "This baby is not safe in my hands tonight.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around postpartum psychosis and infant safety, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "postpartum psychosis and infant safety",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "MHA/admission threshold in postpartum illness — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can crisis follow her at home if her mother supervises?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "MHA/admission threshold in postpartum illness",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "newborn safety — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I cannot be alone with him.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect newborn safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "newborn safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Hospital will make her worse.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to admit without a mother-baby bed and how to protect the infant",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Sana should not be sent home simply because there is no mother-baby bed in the state. The unsafe shortcut is exactly that framing: system limitations becoming the reason for clinical inaction. Postpartum psychosis is a psychiatric emergency, and the absence of an ideal bed does not make discharge safe if Sana cannot safely care for her infant. She has said, "This baby is not safe in my hands tonight," which is both an insight statement and a safeguarding disclosure. She must not be doubted or immediately discharged because she appears calm.

Her statement, "This baby is not safe in my hands tonight," is the central phrase. It shows some preserved insight, but it does not make the situation safe at home; it means the risk is being communicated rather than concealed. I would take it as a serious warning that she cannot provide safe care and that the infant requires an assessed, supervised care arrangement. Her insight may fluctuate, and command hallucinations or distorted perceptions must be actively screened.

The legal and ethical tension is between maternal autonomy, infant protection and the least restrictive alternative when the ideal perinatal bed is unavailable. The registrar asks, "Can crisis follow her at home if her mother supervises?" but the mother speaks Dari only and no interpreter is on site. A home plan relying on someone whose understanding cannot be verified is not safe. If Sana refuses admission and risk remains high, I would consider Mental Health Act assessment, but I would first attempt voluntary admission with culturally and linguistically appropriate support.

The infant is the vulnerable third party. The stem oddly phrases the infant's risk as "I cannot be alone with him," but clinically the meaning is that the baby cannot safely be left unsupervised in the current situation. I would involve paediatrics/maternity, ensure safe infant care with father, mother, or another assessed adult, and plan supervised contact depending on Sana's mental state. The partner saying, "Hospital will make her worse," may reflect fear, stigma, migration trauma or practical pressure, but it cannot override infant safety. I would engage him, explain why admission is protective, and use a Dari interpreter for the mother as soon as possible.

I would document the absence of a mother-baby bed, the infant-safety quote, sleep deprivation, cultural/interpreter limitation, partner's concerns, legal basis for admission or containment, and the alternative plan for mother-baby contact. A defensible record shows that discharge was not chosen because the correct bed was unavailable, and that admission without a mother-baby bed was considered because the risk demanded active containment.`
  },
  {
    "id": "FINAL-012",
    "topic": "perinatal",
    "difficulty": "consultant",
    "title": "Antenatal depression with family violence and medication refusal",
    "candidateRole": "perinatal psychiatrist in outpatient clinic",
    "setting": "Urgent antenatal clinic review at 18 weeks",
    "stem": "You are the perinatal psychiatrist in outpatient clinic. Urgent antenatal clinic review at 18 weeks.\n\nMei, a 32-year-old Chinese-Australian woman, stopped sertraline after reading online about fetal harm and now has passive suicidal thoughts. Mei says, \"Everyone would be better off without me.\" \n\nHer husband says, \"She is fine and does not need tablets.\" Obstetrician asks, \"Can you document that antidepressants are unsafe?\" The fetus says, \"The scan shows mild growth restriction.\" Her mother speaks no English and Mei fears shame in her family.\n\nMei says, \"Please do not write down that he pushes me.\" You must decide whether to restart treatment, address violence, and document safely.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "partner minimisation shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "She is fine and does not need tablets.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass antenatal depression with suicidal thoughts and medication misinformation, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'She is fine and does not need tablets.' without first formulating antenatal depression with suicidal thoughts and medication misinformation, immediate safety and a defensible disposition.",
        "keywords": [
          "partner minimisation shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "antenatal depression with suicidal thoughts and medication misinformation — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Everyone would be better off without me.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around antenatal depression with suicidal thoughts and medication misinformation, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "antenatal depression with suicidal thoughts and medication misinformation",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "informed consent and medication risk-benefit — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can you document that antidepressants are unsafe?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "informed consent and medication risk-benefit",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "unborn baby wellbeing — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "The scan shows mild growth restriction.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect unborn baby wellbeing, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "unborn baby wellbeing",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Please do not write down that he pushes me.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to restart treatment, address violence, and document safely",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Mei's presentation should not be minimised because her husband says, "She is fine and does not need tablets." That is the unsafe shortcut: accepting a potentially controlling partner's reassurance while the pregnant woman is depressed, suicidal, medication-avoidant and disclosing violence. Her passive suicidal thought, "Everyone would be better off without me," is clinically significant in pregnancy, especially when combined with poor supports, medication cessation, possible family violence and fetal growth concerns.

The key formulation is not simply antenatal depression; it is antenatal depression complicated by coercion, misinformation and violence. Her request, "Please do not write down that he pushes me," tells me she is frightened about documentation and perhaps about her husband's access to records or consequences at home. I would speak with her alone, assess immediate safety, escalation, injuries, strangulation, weapons, reproductive coercion, and whether she can be contacted safely. I would not promise to omit clinically relevant safety information, but I would discuss careful documentation, confidentiality, and who can access what.

The obstetrician's question, "Can you document that antidepressants are unsafe?" must be answered with balanced risk-benefit reasoning. It would be misleading to declare antidepressants unsafe as a blanket statement. I would explain that untreated antenatal depression carries risks, including suicide, impaired nutrition, reduced antenatal care, family violence vulnerability and possible effects on fetal growth. Sertraline cessation may have contributed to relapse, so restarting medication or another evidence-based treatment should be discussed in terms of absolute and comparative risk, not internet fear.

The fetus is a vulnerable third party because "the scan shows mild growth restriction," but fetal concern does not justify coercing Mei or ignoring her safety. I would coordinate with obstetrics while keeping Mei at the centre of decision-making. Her mother speaks no English and shame in the family is feared, so interpreter use and cultural sensitivity are essential if family support is involved. I would not allow the husband to answer for her or control the consultation.

My documentation would include her suicidal phrase, the medication misinformation, the family violence disclosure and documentation discussion, fetal growth issue, risk assessment, safety plan, interpreter needs and agreed treatment. It would be defensible because it records both respect for Mei's confidentiality and the duty to document clinically relevant risk in a way that does not increase danger.`
  },
  {
    "id": "FINAL-013",
    "topic": "perinatal",
    "difficulty": "consultant",
    "title": "OCD intrusive infant harm thoughts misread as child protection",
    "candidateRole": "perinatal psychiatrist in outpatient service",
    "setting": "Six-week postpartum urgent GP referral",
    "stem": "You are the perinatal psychiatrist in outpatient service. Six-week postpartum urgent GP referral.\n\nGrace, a 27-year-old first-time mother, has intrusive thoughts of dropping or stabbing her baby and is terrified by them. Grace says, \"I would never do it; the thoughts horrify me.\" \n\nGP says, \"I am worried she may harm the baby.\" Registrar asks, \"Should we notify child protection now?\" Her baby says, \"I check him for hours to make sure he is alive.\" Grace's family comes from a community where mental illness is seen as dangerous motherhood.\n\nGrace says, \"My husband will take him away if he knows.\" You must decide whether to distinguish OCD from psychosis and plan safe treatment.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "automatic child protection shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "I am worried she may harm the baby.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass ego-dystonic perinatal OCD versus psychosis, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'I am worried she may harm the baby.' without first formulating ego-dystonic perinatal OCD versus psychosis, immediate safety and a defensible disposition.",
        "keywords": [
          "automatic child protection shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "ego-dystonic perinatal OCD versus psychosis — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I would never do it; the thoughts horrify me.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around ego-dystonic perinatal OCD versus psychosis, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "ego-dystonic perinatal OCD versus psychosis",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "safeguarding threshold and infant risk — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Should we notify child protection now?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "safeguarding threshold and infant risk",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "infant safety with maternal compulsions — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I check him for hours to make sure he is alive.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect infant safety with maternal compulsions, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "infant safety with maternal compulsions",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "My husband will take him away if he knows.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to distinguish OCD from psychosis and plan safe treatment",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Grace should not be reported to child protection simply because she has intrusive harm thoughts. The unsafe shortcut is the GP's statement, "I am worried she may harm the baby," followed by the registrar's question, "Should we notify child protection now?" Infant safety must be assessed, but immediate notification without formulation may mislabel perinatal OCD as dangerousness and drive Grace into shame and concealment.

Her phrase, "I would never do it; the thoughts horrify me," is the diagnostic hinge. It shows the thoughts are ego-dystonic, unwanted and frightening, which strongly supports perinatal OCD rather than psychotic intent or desire to harm. The behaviour "I check him for hours to make sure he is alive" reinforces that formulation: she is trying to prevent harm, not planning it. I would still screen for postpartum psychosis, severe depression, command hallucinations, delusions, dissociation, sleep deprivation and actual caregiving impairment, because the consequence of missing psychosis is serious. But the stem points primarily to obsessional intrusive harm thoughts.

The legal and ethical tension is child protection versus therapeutic alliance and proportionality. Child protection is necessary if the baby is unsafe, neglected or at risk of intentional harm, but intrusive ego-dystonic thoughts alone do not automatically meet that threshold. I would explain this carefully to the GP, registrar and Grace. I would assess the baby directly or through appropriate supports, clarify whether she avoids caregiving, whether she can sleep, and whether anyone can support her safely at home. If there is no intent, no psychosis and protective behaviour is strong, treatment and safety planning may be more appropriate than statutory notification.

The baby remains the vulnerable third party. I would not reassure Grace without checking feeding, handling, supervision and maternal exhaustion. Her fear that "My husband will take him away if he knows" shows shame and possible relationship risk. With her consent, I would involve her husband in psychoeducation if safe, explaining that intrusive ego-dystonic thoughts are treatable symptoms, not evidence she is a monster. If involving him would increase risk, I would identify another support.

I would document the exact nature of the thoughts, her distress and rejection of them, checking behaviour, psychosis screen, infant safety assessment, child protection reasoning, treatment plan such as CBT with ERP and SSRI discussion if indicated, and follow-up. The documentation is defensible because it neither ignores infant safety nor reflexively punishes a mother for disclosing treatable OCD symptoms.`
  },
  {
    "id": "FINAL-014",
    "topic": "perinatal",
    "difficulty": "consultant",
    "title": "Bipolar pregnancy stopping lithium and forensic relapse history",
    "candidateRole": "perinatal psychiatrist",
    "setting": "Antenatal clinic at 14 weeks",
    "stem": "You are the perinatal psychiatrist. Antenatal clinic at 14 weeks.\n\nNatasha, a 34-year-old woman with bipolar I disorder, stopped lithium four weeks ago without telling obstetrics. Natasha says, \"I feel fine and I do not need medication in pregnancy.\" \n\nPartner says, \"Last time she stopped lithium she was manic within six weeks.\" Obstetrician asks, \"If she used lithium we need fetal cardiac screening.\" Her niece says, \"She assaulted a family member during the last mania.\" Natasha says medication conflicts with her identity as a natural mother.\n\nNatasha says, \"Lithium will poison the baby.\" You must decide whether to restart lithium or alternative treatment and coordinate obstetric risk.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "collateral-driven relapse warning — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "Last time she stopped lithium she was manic within six weeks.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass euthymic period masking high relapse risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Last time she stopped lithium she was manic within six weeks.' without first formulating euthymic period masking high relapse risk, immediate safety and a defensible disposition.",
        "keywords": [
          "collateral-driven relapse warning",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "euthymic period masking high relapse risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I feel fine and I do not need medication in pregnancy.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around euthymic period masking high relapse risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "euthymic period masking high relapse risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "perinatal medication disclosure and consent — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "If she used lithium we need fetal cardiac screening.",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "perinatal medication disclosure and consent",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "risk to others during relapse — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She assaulted a family member during the last mania.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect risk to others during relapse, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "risk to others during relapse",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Lithium will poison the baby.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to restart lithium or alternative treatment and coordinate obstetric ris",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Natasha's current euthymic presentation should not reassure the team into inaction. The unsafe shortcut is the implied minimisation of her statement, "I feel fine and I do not need medication in pregnancy." In bipolar I disorder, especially with previous severe mania, feeling well four weeks after stopping lithium may simply be the interval before relapse. Her partner's collateral, "Last time she stopped lithium she was manic within six weeks," makes this a time-critical relapse-prevention problem rather than a routine medication preference discussion.

Her belief, "Lithium will poison the baby," is important because it suggests her decision is based on fear and misinformation rather than balanced risk appraisal. That does not mean she lacks capacity automatically, but it means she needs careful counselling about the absolute fetal cardiac risk, the risks of untreated bipolar relapse, and the monitoring options. The obstetrician's statement, "If she used lithium we need fetal cardiac screening," is not merely administrative; it means her medication exposure history directly affects fetal care. With Natasha's consent where possible, I would coordinate with obstetrics urgently and accurately.

The legal and ethical tension is autonomy versus relapse prevention in pregnancy. A capacitous pregnant woman may refuse lithium even if clinicians disagree, but the consultant must ensure her decision is informed and not driven by untreated emerging mood symptoms, psychosis or misinformation. I would assess mental state, sleep, insight, capacity for medication decisions, early warning signs and willingness to consider alternatives. If she remains capacitous, the plan is collaborative rather than coercive. If mania or psychosis emerges and risk escalates, MHA may later become relevant.

The vulnerable third parties are the fetus and potentially family members, because her niece says, "She assaulted a family member during the last mania." That history means relapse is not only about Natasha's suffering; it may create risk to others and to pregnancy care. I would involve her partner as a carer if she agrees, develop an advance relapse plan, and clarify emergency pathways. Her identity as a "natural mother" must be respected and explored, not mocked; it may be possible to frame relapse prevention as protecting motherhood rather than opposing it.

I would document lithium cessation timing, the misinformation quote, partner collateral about relapse timing, forensic/aggression history, fetal screening communication, risk-benefit counselling, capacity assessment and agreed medication or monitoring plan. The record should show that the decision was neither lithium-at-all-costs nor medication avoidance, but a balanced perinatal risk formulation.`
  },
  {
    "id": "FINAL-015",
    "topic": "perinatal",
    "difficulty": "consultant",
    "title": "Methadone pregnancy, child protection fear and NAS planning",
    "candidateRole": "perinatal addiction psychiatrist",
    "setting": "Linked antenatal and opioid treatment clinic",
    "stem": "You are the perinatal addiction psychiatrist. Linked antenatal and opioid treatment clinic.\n\nAlana, a 29-year-old woman 30 weeks pregnant, is on methadone and intermittently using benzodiazepines. Alana says, \"Methadone is the only reason I am not using heroin.\" \n\nObstetric registrar says, \"Should we reduce methadone before delivery?\" Social worker asks, \"Do we need child protection now?\" The unborn baby says, \"I do not want the baby labelled an addict.\" Her partner uses heroin and was verbally aggressive at clinic.\n\nAlana says, \"If child protection hears, they will take my baby.\" You must decide whether to maintain methadone, plan NAS and protect maternal-infant safety.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "dose-reduction shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "Should we reduce methadone before delivery?",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass opioid maintenance as protective harm reduction, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Should we reduce methadone before delivery?' without first formulating opioid maintenance as protective harm reduction, immediate safety and a defensible disposition.",
        "keywords": [
          "dose-reduction shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "opioid maintenance as protective harm reduction — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Methadone is the only reason I am not using heroin.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around opioid maintenance as protective harm reduction, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "opioid maintenance as protective harm reduction",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "child protection thresholds and engagement — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Do we need child protection now?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "child protection thresholds and engagement",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "non-stigmatising NAS planning — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I do not want the baby labelled an addict.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect non-stigmatising NAS planning, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "non-stigmatising NAS planning",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "If child protection hears, they will take my baby.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to maintain methadone, plan NAS and protect maternal-infant safety",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Alana's methadone should not be reduced simply to try to reduce neonatal abstinence syndrome. The unsafe shortcut is the obstetric registrar's question, "Should we reduce methadone before delivery?" In this case, methadone is not merely fetal exposure; it is the treatment keeping her away from heroin. Her statement, "Methadone is the only reason I am not using heroin," is the key clinical phrase, because it reframes methadone as protective harm reduction for both mother and fetus.

The immediate formulation is opioid dependence in pregnancy with stabilisation, intermittent benzodiazepine use, partner heroin use and child protection fear. Reducing methadone without considering relapse risk could lead to heroin use, withdrawal cycles, overdose, unsafe injecting, missed antenatal care and greater fetal instability. I would maintain an adequate methadone dose unless there is a specific clinical reason to change it, while reviewing sedation, split dosing, benzodiazepine use and overdose risk.

The social worker's question, "Do we need child protection now?" requires a transparent but non-punitive answer. Child protection involvement depends on safety concerns, not on methadone treatment alone. I would explain to Alana that engagement with opioid treatment and antenatal care is protective, while also being honest that partner violence, polysubstance use, unsafe housing or inability to care for the baby may require statutory planning. Her fear, "If child protection hears, they will take my baby," is a major engagement risk; if handled badly, she may disengage and become less safe.

The baby is the vulnerable third party, and Alana's phrase, "I do not want the baby labelled an addict," must be corrected compassionately. A baby is not an addict; the baby may have neonatal withdrawal and needs monitoring, feeding support, soothing and paediatric care. I would plan NAS care in non-stigmatising language and keep mother and baby together where safe. Her partner's heroin use and verbal aggression at clinic require assessment of family violence, clinic safety and postnatal safety.

I would document the rationale for maintaining methadone, benzodiazepine and cannabis risk management, NAS education, partner risk, child protection threshold discussion, and Alana's fear of removal. That record is defensible because it shows the plan protects the baby by stabilising the mother rather than pursuing a superficially "clean" delivery at the cost of relapse.`
  },
  {
    "id": "FINAL-016",
    "topic": "perinatal",
    "difficulty": "consultant",
    "title": "Postnatal depression with intrusive suicidality and partner coercion",
    "candidateRole": "perinatal crisis consultant",
    "setting": "Home visit requested by maternal child health nurse",
    "stem": "You are the perinatal crisis consultant. Home visit requested by maternal child health nurse.\n\nAisha, a 24-year-old mother eight weeks postpartum, has stopped attending baby checks and says she cannot sleep or feed herself. Aisha says, \"The baby would be better with someone else.\" \n\nHer partner says, \"She is just lazy and needs to stop complaining.\" Nurse asks, \"Can we leave if the baby looks physically well?\" The infant says, \"The nappies have not been changed since yesterday.\" Aisha is a recent migrant and fears visa consequences if services attend.\n\nMother-in-law says, \"In our family we do not talk about depression.\" You must decide whether urgent admission/support or child protection action is needed.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "partner invalidation shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "She is just lazy and needs to stop complaining.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass postnatal depression with maternal suicide and infant care risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'She is just lazy and needs to stop complaining.' without first formulating postnatal depression with maternal suicide and infant care risk, immediate safety and a defensible disposition.",
        "keywords": [
          "partner invalidation shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "postnatal depression with maternal suicide and infant care risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "The baby would be better with someone else.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around postnatal depression with maternal suicide and infant care risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "postnatal depression with maternal suicide and infant care risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "infant welfare and safeguarding — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we leave if the baby looks physically well?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "infant welfare and safeguarding",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "infant neglect risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "The nappies have not been changed since yesterday.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect infant neglect risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "infant neglect risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "In our family we do not talk about depression.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether urgent admission/support or child protection action is needed",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Aisha's case should not be left simply because the baby looks physically well in the moment. The unsafe shortcut is the nurse's question, "Can we leave if the baby looks physically well?" A physically well infant at one home visit can still be at serious risk when the mother is not sleeping, not feeding herself, missing baby checks, and the nappies "have not been changed since yesterday." The question is whether the caregiving environment is safe and supported, not whether the infant has already deteriorated.

Aisha's statement, "The baby would be better with someone else," is clinically important. It may represent severe postnatal depression, shame, hopelessness, intrusive suicidal thinking, or fear that she is failing as a mother. It is not proof that she wants to harm the baby, but it is a warning of maternal self-risk and impaired caregiving. I would assess suicidal ideation, thoughts of harming the baby, psychosis, sleep deprivation, nutrition, bonding, domestic abuse, migration stress, and capacity to accept help.

The legal and ethical tension is between supporting a mother in distress and safeguarding an infant. Child protection action may be needed if the baby is neglected or unsafe, but the response should not punish Aisha for being depressed. I would try urgent voluntary supports first if safe: perinatal crisis care, practical infant care, mother-baby admission or supported respite, GP/child health review, and involvement of a safe family member. If the infant is unsafe or Aisha cannot engage, statutory child protection may be necessary.

The partner's statement, "She is just lazy and needs to stop complaining," suggests coercion, emotional abuse or at least profound invalidation. The mother-in-law's statement, "In our family we do not talk about depression," adds cultural stigma that may silence Aisha. As a recent migrant fearing visa consequences, she may avoid services. I would explain confidentiality and service roles clearly, use an interpreter if needed, and consider family violence or migration support. I would not rely on the partner as the sole safety support.

I would document the infant-care concerns, Aisha's exact statement, mental state and risk assessment, partner invalidation, migration/visa fear, cultural stigma, supports offered, child protection reasoning and why the final plan was safe. The documentation must show that the team neither abandoned the infant because the baby looked okay nor removed support from the mother in a punitive way.`
  },
  {
    "id": "FINAL-017",
    "topic": "perinatal",
    "difficulty": "consultant",
    "title": "Mother with psychosis refusing baby examination",
    "candidateRole": "perinatal psychiatrist on call",
    "setting": "Postnatal ward at 2 am",
    "stem": "You are the perinatal psychiatrist on call. Postnatal ward at 2 am.\n\nJenna, a 19-year-old woman three days postpartum, refuses to let midwives examine the baby and believes staff are contaminated. Jenna says, \"If you touch him, you will infect his soul.\" \n\nMidwife says, \"Can security hold her while we check the baby?\" Registrar asks, \"Does she have capacity to refuse baby checks?\" The newborn says, \"He has not fed for eight hours.\" Jenna is from a strict religious community and fears spiritual contamination.\n\nHer father says, \"Hospital is corrupting her faith.\" You must decide whether to protect neonatal health while using least restrictive maternal care.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "coercive examination shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "Can security hold her while we check the baby?",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass psychotic belief preventing neonatal care, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Can security hold her while we check the baby?' without first formulating psychotic belief preventing neonatal care, immediate safety and a defensible disposition.",
        "keywords": [
          "coercive examination shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "psychotic belief preventing neonatal care — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "If you touch him, you will infect his soul.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around psychotic belief preventing neonatal care, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "psychotic belief preventing neonatal care",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "maternal capacity and infant treatment authority — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Does she have capacity to refuse baby checks?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "maternal capacity and infant treatment authority",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "neonatal medical risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He has not fed for eight hours.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect neonatal medical risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "neonatal medical risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Hospital is corrupting her faith.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to protect neonatal health while using least restrictive maternal care",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Jenna's baby should not simply be examined by security holding Jenna down. The unsafe shortcut is the midwife's question, "Can security hold her while we check the baby?" The newborn may urgently need assessment, but coercive force against a three-day postpartum mother with psychosis can escalate trauma, rupture trust and may not be lawful unless clearly justified. The consultant task is to protect neonatal health while using the least restrictive approach to maternal care.

Jenna's statement, "If you touch him, you will infect his soul," is the key clinical phrase. It suggests psychotic or severely overvalued religious contamination beliefs directly preventing newborn care. This is not simply a cultural preference for modesty or religious practice; the belief is causing refusal of necessary feeding and examination. The newborn has "not fed for eight hours," which makes the baby a vulnerable third party at possible medical risk. I would ask paediatrics or neonatology to assess urgency: dehydration, hypoglycaemia, jaundice, sepsis risk and feeding support.

The registrar asks, "Does she have capacity to refuse baby checks?" This must be separated into maternal decisions about herself and parental decision-making for the baby. Jenna may lack capacity to make decisions about the baby's examination if psychosis prevents appreciation of risk. Even if she objects, clinicians may have child-safety or emergency authority to assess the baby if the infant is at serious risk. But the response must still be proportionate: explanation, trusted staff, father/family if safe, chaplain or culturally appropriate religious support, and de-escalation before force.

The family and religious context is complex. Her father says, "Hospital is corrupting her faith," which may reinforce refusal and mistrust. I would not attack the faith; I would distinguish faith from the current risk that the baby is not feeding. I would offer pastoral support from a trusted religious figure if appropriate, while making clear that neonatal health cannot be neglected.

I would document the baby's eight-hour no-feed risk, Jenna's contamination belief, maternal capacity/parental decision reasoning, least restrictive engagement attempts, legal basis for any emergency baby examination, family/religious discussions and plan for maternal treatment. The documentation is defensible because it shows the baby was protected without using force as the first or easiest response.`
  },
  {
    "id": "FINAL-018",
    "topic": "perinatal",
    "difficulty": "consultant",
    "title": "Severe hyperemesis, depression and termination request",
    "candidateRole": "perinatal CL psychiatrist",
    "setting": "Obstetric medical ward",
    "stem": "You are the perinatal CL psychiatrist. Obstetric medical ward.\n\nPriya, a 30-year-old woman at 11 weeks gestation, has hyperemesis, dehydration and depressive symptoms, and requests termination urgently. Priya says, \"I would rather die than keep vomiting like this.\" \n\nObstetric registrar says, \"Can psychiatry say she is not competent to terminate?\" Husband asks, \"Our religion does not allow termination.\" The fetus says, \"The pregnancy is wanted by the family, not by me now.\" Priya's family insists decisions must be made collectively.\n\nPriya says, \"Do not tell my mother I asked for this.\" You must decide whether capacity is intact and how to manage confidentiality and family pressure.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "paternalistic capacity shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "Can psychiatry say she is not competent to terminate?",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass depression, suffering and reproductive decision-making, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Can psychiatry say she is not competent to terminate?' without first formulating depression, suffering and reproductive decision-making, immediate safety and a defensible disposition.",
        "keywords": [
          "paternalistic capacity shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "depression, suffering and reproductive decision-making — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I would rather die than keep vomiting like this.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around depression, suffering and reproductive decision-making, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "depression, suffering and reproductive decision-making",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "capacity, consent and reproductive autonomy — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Our religion does not allow termination.",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "capacity, consent and reproductive autonomy",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "maternal-fetal ethical tension — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "The pregnancy is wanted by the family, not by me now.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect maternal-fetal ethical tension, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "maternal-fetal ethical tension",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Do not tell my mother I asked for this.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether capacity is intact and how to manage confidentiality and family pressure",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Priya's request for termination should not be dismissed by asking psychiatry to declare her incompetent because the team or family is uncomfortable. The unsafe shortcut is the obstetric registrar's question, "Can psychiatry say she is not competent to terminate?" Psychiatry is not a gatekeeping device to block a difficult reproductive decision. The correct task is to assess capacity, depression, physical illness, coercion and confidentiality in the context of severe hyperemesis and distress.

Her statement, "I would rather die than keep vomiting like this," is serious. It may be an expression of unbearable physical suffering, suicidal ideation, demoralisation or a desperate request for relief. It does not automatically mean she lacks capacity. I would urgently assess suicide risk, dehydration, delirium, depression severity, pain, sleep, and whether adequate hyperemesis treatment has been offered. I would ask whether her wish for termination persists when symptoms are controlled and whether she understands options, risks and alternatives.

The legal and ethical tension is between reproductive autonomy, possible mental illness, and family/religious pressure. Her husband says, "Our religion does not allow termination," and her family insists decisions must be collective. Those beliefs matter to Priya if she wants them to matter, but they do not replace her individual consent and confidentiality. Her request, "Do not tell my mother I asked for this," must be respected unless there is a legal safety reason to disclose. I would interview Priya alone, use an interpreter if needed, and assess for coercion in either direction.

The vulnerable third party is framed through pregnancy, but the rights-bearing patient is Priya. The line "The pregnancy is wanted by the family, not by me now" shows the risk of family wishes overtaking her autonomy. I would not allow the fetus or family preference to erase Priya's capacity. If she has capacity, she should be supported to access lawful reproductive counselling and obstetric care. If capacity is impaired by delirium, severe depression or suicidality, the team should treat reversible contributors and reassess urgently.

I would document the capacity assessment, symptom burden, suicide risk, treatment options for hyperemesis, confidentiality decision, family pressure, religious context and referral pathway. The record should show that psychiatry did not collude with family pressure or reflexively endorse termination; it protected a valid, informed, private decision-making process under severe physical and emotional distress.`
  },
  {
    "id": "FINAL-019",
    "topic": "perinatal",
    "difficulty": "consultant",
    "title": "Perinatal relapse after child removal threat",
    "candidateRole": "perinatal psychiatrist",
    "setting": "Family birth planning meeting with child protection",
    "stem": "You are the perinatal psychiatrist. Family birth planning meeting with child protection.\n\nLouise, a 37-year-old Aboriginal woman with bipolar disorder, is 36 weeks pregnant and has previous child removal during mania. Louise says, \"They will steal this baby too, so I will run before labour.\" \n\nChild protection worker says, \"We may need a removal plan at birth.\" Registrar asks, \"Can we detain her now to prevent absconding?\" The unborn baby says, \"I will give birth alone if I have to.\" Louise asks for Aboriginal midwife and grandmother to be involved.\n\nGrandmother says, \"You need to work with us, not around us.\" You must decide whether to create a culturally safe birth/safety plan without unnecessary coercion.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "removal-first shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "We may need a removal plan at birth.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass trauma and relapse risk around child protection, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'We may need a removal plan at birth.' without first formulating trauma and relapse risk around child protection, immediate safety and a defensible disposition.",
        "keywords": [
          "removal-first shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "trauma and relapse risk around child protection — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "They will steal this baby too, so I will run before labour.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around trauma and relapse risk around child protection, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "trauma and relapse risk around child protection",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "MHA threshold and least restrictive perinatal planning — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we detain her now to prevent absconding?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "MHA threshold and least restrictive perinatal planning",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "unborn baby and maternal risk from disengagement — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I will give birth alone if I have to.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect unborn baby and maternal risk from disengagement, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "unborn baby and maternal risk from disengagement",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "You need to work with us, not around us.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to create a culturally safe birth/safety plan without unnecessary coerci",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Louise should not be managed through an automatic removal plan or preventive detention simply because child protection is anxious. The unsafe shortcut is the child protection worker's statement, "We may need a removal plan at birth," if that becomes the starting point rather than one possible contingency. Louise has a history of child removal during mania, so risk planning is necessary, but a removal-focused meeting may itself trigger absconding and increase risk.

Her statement, "They will steal this baby too, so I will run before labour," is the core formulation. It is not just oppositional refusal; it is a trauma- and history-linked fear that services will repeat a previous loss. That fear creates real obstetric and neonatal risk because she may avoid hospital, give birth alone, or disengage from monitoring. The unborn baby's safety is therefore best protected by engagement, cultural safety and a birth plan, not by reflexive coercion.

The registrar asks, "Can we detain her now to prevent absconding?" That is the legal hinge. Detention cannot be used simply to make child protection planning easier. I would assess her current mental state, relapse signs, sleep, insight, capacity, risk to herself and the baby, and whether Mental Health Act criteria are met. If she is currently well and capacitous, coercive detention would likely be unlawful and counterproductive. If she is relapsing into mania or psychosis with serious risk, involuntary assessment may become necessary, but it must be justified clinically.

The phrase "I will give birth alone if I have to" identifies the vulnerable third party and the practical danger. I would work with Louise, her grandmother, Aboriginal midwife, obstetrics and child protection to create a culturally safe birth and safety plan: who she trusts, where she will present, what will happen at birth, what child protection concerns exist, what supports reduce risk, and what would trigger statutory action. Grandmother's statement, "You need to work with us, not around us," should guide the approach.

I would document Louise's fear of removal, past history, current mental state, Aboriginal supports offered, child protection concerns, agreed birth plan, conditions for escalation, and why detention was or was not lawful. A defensible consultant plan protects the baby by reducing absconding risk through trust and transparent planning, not by using coercion as the default.`
  },
  {
    "id": "FINAL-020",
    "topic": "perinatal",
    "difficulty": "consultant",
    "title": "Postpartum mania and driving with infant",
    "candidateRole": "perinatal psychiatrist covering crisis team",
    "setting": "Community urgent review after police welfare check",
    "stem": "You are the perinatal psychiatrist covering crisis team. Community urgent review after police welfare check.\n\nEmily, a 28-year-old woman two weeks postpartum, has been driving around at night with her newborn because she believes she is starting a business empire. Emily says, \"Sleep is for ordinary mothers; my baby and I are chosen.\" \n\nPartner says, \"She is energetic, not unwell, and hates hospitals.\" Police asks, \"Can we just take her licence and leave?\" The baby says, \"The baby was unrestrained in the back seat.\" Emily belongs to a wellness community that rejects medication and promotes extreme sleep deprivation retreats.\n\nFriend says, \"Medication will destroy her gift.\" You must decide whether urgent admission and infant protection are required.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "minimising family shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "She is energetic, not unwell, and hates hospitals.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass postpartum mania with infant endangerment, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'She is energetic, not unwell, and hates hospitals.' without first formulating postpartum mania with infant endangerment, immediate safety and a defensible disposition.",
        "keywords": [
          "minimising family shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "postpartum mania with infant endangerment — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Sleep is for ordinary mothers; my baby and I are chosen.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around postpartum mania with infant endangerment, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "postpartum mania with infant endangerment",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "public safety and MHA assessment — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we just take her licence and leave?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "public safety and MHA assessment",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "infant immediate safety — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "The baby was unrestrained in the back seat.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect infant immediate safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "infant immediate safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Medication will destroy her gift.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether urgent admission and infant protection are required",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Emily should not be left in the community because her partner says she is "energetic, not unwell, and hates hospitals." That is the unsafe shortcut. Two weeks postpartum, driving at night with a newborn, reduced sleep, grandiose business beliefs and an unrestrained baby indicate postpartum mania with immediate infant and public safety risk. The partner's minimisation may reflect lack of insight, fear of hospitals or the influence of the wellness community, but it cannot determine safety.

Emily's statement, "Sleep is for ordinary mothers; my baby and I are chosen," is the key clinical phrase. It shows grandiosity, reduced need for sleep and incorporation of the baby into the manic belief system. That makes the infant part of the risk formulation, not just a dependent in the background. The baby was "unrestrained in the back seat," which is concrete evidence that manic behaviour has already endangered the infant. I would ensure the baby is immediately safe, medically checked if needed, and not left solely in Emily's care until risk is assessed.

Police ask, "Can we just take her licence and leave?" Removing driving access may be necessary, but it is not sufficient. The problem is not only driving; it is postpartum mania, impaired judgement, sleep deprivation and infant endangerment. I would assess Emily urgently, offer voluntary admission preferably to a mother-baby unit if available, and consider involuntary assessment if she refuses and risk remains high. I would involve perinatal services, paediatrics, child protection if thresholds are met, and family supports.

The wellness community's belief that medication will "destroy her gift" is a cultural/system pressure around identity and treatment refusal. I would address it respectfully but firmly, explaining that sleep restoration and treatment are protective for Emily and the baby. I would not debate the "gift" directly; I would focus on observed risk: night driving, no sleep and unsafe infant restraint. Her partner needs psychoeducation and may need to be assessed as a safe supervisor before being relied upon.

I would document the manic symptoms, the quote about sleep and being chosen, the unrestrained baby, police licence question, partner minimisation, wellness-community influence, legal basis for admission or MHA, and infant safety plan. The documentation is defensible because it shows that intervention was not based on stigma about motherhood or medication, but on immediate behaviour putting a newborn at risk.`
  },
  {
    "id": "FINAL-021",
    "topic": "child_adolescent",
    "difficulty": "consultant",
    "title": "Refugee school refusal and interpreter/consent failure",
    "candidateRole": "CAMHS consultant psychiatrist",
    "setting": "Urgent school welfare meeting",
    "stem": "You are the CAMHS consultant psychiatrist. Urgent school welfare meeting.\n\nHamid, a 16-year-old Syrian refugee boy, has not attended school for six weeks after panic attacks during fire alarms. Hamid says, \"School is not safe; soldiers come when bells ring.\" \n\nFather says, \"He is lazy and must be forced back.\" School principal asks, \"Can you certify him fit or unfit today?\" His younger sister says, \"He screams at night and she hides.\" His brother is interpreting because professional interpreters are unavailable.\n\nHamid says, \"If people know what happened, my family will be ashamed.\" You must decide whether to treat trauma while managing school, consent and family pressure.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "behavioural-laziness shortcut — unsafe shortcut under pressure",
        "category": "immediate_safety",
        "severity": "critical",
        "clueInStem": "He is lazy and must be forced back.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass PTSD-driven school refusal, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He is lazy and must be forced back.' without first formulating PTSD-driven school refusal, immediate safety and a defensible disposition.",
        "keywords": [
          "behavioural-laziness shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "PTSD-driven school refusal — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "School is not safe; soldiers come when bells ring.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around PTSD-driven school refusal, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "PTSD-driven school refusal",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "consent, confidentiality and school obligations — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can you certify him fit or unfit today?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "consent, confidentiality and school obligations",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "sibling trauma exposure — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He screams at night and she hides.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect sibling trauma exposure, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "sibling trauma exposure",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "If people know what happened, my family will be ashamed.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to treat trauma while managing school, consent and family pressure",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Hamid should not be forced back to school or labelled fit or unfit simply to satisfy the school's need for an immediate certificate. The unsafe shortcut is the father's statement, "He is lazy and must be forced back," reinforced by the principal asking, "Can you certify him fit or unfit today?" This framing turns a trauma presentation into a compliance problem. Six weeks of school refusal after panic attacks during fire alarms in a Syrian refugee boy requires a trauma formulation before any return-to-school decision is made. A certificate without formulation would be a false solution and may worsen avoidance, shame and family conflict.

Hamid's statement, "School is not safe; soldiers come when bells ring," is the key clinical phrase. It links the school trigger directly to war-related threat memory, not ordinary anxiety or adolescent oppositionality. Fire alarms may be acting like trauma cues, producing panic, re-experiencing and avoidance. His younger sister saying, "He screams at night and she hides," also tells me the distress is affecting the household and another child. The sister is a vulnerable third party because she is exposed to nighttime fear, family stress and perhaps secondary trauma.

The legal and ethical tension is between adolescent consent/confidentiality and parental authority. Hamid is 16, so I would assess his capacity to consent to assessment and treatment, his wishes about family involvement, and the limits of confidentiality if safety concerns arise. The current assessment is unsafe because "his brother is interpreting because professional interpreters are unavailable." A sibling interpreter is not appropriate for trauma assessment, consent, shame or risk. I would arrange a professional interpreter, even by phone, because otherwise I cannot validly assess trauma symptoms, suicidality, family violence, or what Hamid means by shame.

His statement, "If people know what happened, my family will be ashamed," must be handled carefully. It may indicate sexual trauma, torture, humiliation, political violence or a culturally mediated fear of stigma. I would not force disclosure of trauma details in a school welfare meeting. I would explain that he can receive help without immediately telling the worst parts, and I would negotiate with him what can be shared with school and family. The father needs psychoeducation that trauma symptoms are not laziness, but I would avoid humiliating him or positioning him as the enemy; he may also be frightened and using discipline as the only framework he knows.

My consultant action would be to stop the binary fit/unfit demand and replace it with a trauma-informed graded plan: interpreter-supported assessment, safety and suicide screening, sleep and nightmare management, GP/CAMHS follow-up, school accommodations around alarms, a trusted staff member, a quiet space, gradual attendance and family psychoeducation. I would document the exact fire-alarm trauma quote, the sibling impact, interpreter failure, consent/confidentiality reasoning, what was and was not shared with school, and why immediate forced return was unsafe. That documentation is defensible because it shows the decision was based on trauma formulation and child safety, not school pressure.`
  },
  {
    "id": "FINAL-022",
    "topic": "child_adolescent",
    "difficulty": "consultant",
    "title": "Aboriginal boy ADHD dispute and polypharmacy",
    "candidateRole": "child psychiatrist in regional neurodevelopment clinic",
    "setting": "Case conference with school, paediatrics and grandmother",
    "stem": "You are the child psychiatrist in regional neurodevelopment clinic. Case conference with school, paediatrics and grandmother.\n\nJayden, a 12-year-old Aboriginal boy, is prescribed stimulant, clonidine and risperidone for aggression at school. Jayden says, \"I get scared when men yell because it sounds like home.\" \n\nPaediatrician says, \"Increase the stimulant; school cannot cope.\" School asks, \"Can we remove his aide if medication is optimised?\" Grandmother says, \"Every time he is upset they add another tablet.\" No Aboriginal health worker or OT has been involved.\n\nTeacher says, \"He chooses to be defiant.\" You must decide whether to re-formulate trauma/ADHD and safely rationalise medication.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "medication-escalation shortcut — unsafe shortcut under pressure",
        "category": "immediate_safety",
        "severity": "critical",
        "clueInStem": "Increase the stimulant; school cannot cope.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass trauma mimicking ADHD/aggression, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Increase the stimulant; school cannot cope.' without first formulating trauma mimicking ADHD/aggression, immediate safety and a defensible disposition.",
        "keywords": [
          "medication-escalation shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "trauma mimicking ADHD/aggression — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I get scared when men yell because it sounds like home.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around trauma mimicking ADHD/aggression, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "trauma mimicking ADHD/aggression",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "reasonable adjustments and safeguarding — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we remove his aide if medication is optimised?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "reasonable adjustments and safeguarding",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "child exposed to polypharmacy risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "Every time he is upset they add another tablet.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect child exposed to polypharmacy risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "child exposed to polypharmacy risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "He chooses to be defiant.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to re-formulate trauma/ADHD and safely rationalise medication",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Jayden should not have his stimulant increased simply because the school cannot cope. The unsafe shortcut is the paediatrician's statement, "Increase the stimulant; school cannot cope." Medication escalation may be appropriate in some ADHD presentations, but here it risks medicating trauma, sensory distress, classroom mismatch and system failure. A 12-year-old Aboriginal boy already prescribed a stimulant, clonidine and risperidone needs a formulation review before another tablet is added.

Jayden's statement, "I get scared when men yell because it sounds like home," changes the case from simple ADHD/aggression to trauma-triggered threat response. If male teachers yelling evokes home violence, then running, aggression or shutdown may be survival behaviour, not deliberate defiance. The teacher's phrase, "He chooses to be defiant," is therefore a dangerous misformulation. It invites punishment and medication escalation rather than trauma-informed classroom change.

The legal and ethical tension is between symptom control for school safety and the child's right to culturally safe, developmentally informed care. The school asks, "Can we remove his aide if medication is optimised?" That assumes medication can replace environmental support. I would not support removing the aide until the formulation, OT/sensory assessment, trauma triggers, Aboriginal cultural support and classroom strategies have been addressed. Aide withdrawal could increase dysregulation and risk to Jayden and other children.

Grandmother's statement, "Every time he is upset they add another tablet," is high-value carer collateral. It suggests polypharmacy may have become the service's response to distress. I would review each medication's indication, benefit and adverse effects: stimulant effect on appetite, sleep and irritability; clonidine sedation and blood pressure; risperidone metabolic and extrapyramidal risks; and whether target symptoms are actually being measured. No Aboriginal health worker or OT has been involved, which means the current plan is incomplete and culturally unsafe. I would involve Aboriginal health support and OT before concluding treatment resistance.

My consultant plan would be to convene school, paediatrics, grandmother, Aboriginal health worker and OT around a new formulation: ADHD may be present, but trauma cues, sensory factors, racism/stigma, classroom yelling and disrupted attachment may drive the aggressive episodes. I would document the trauma quote, the current polypharmacy, the grandmother's concern, the absence of Aboriginal health/OT input, the risk of removing the aide, and a medication rationalisation plan. The record is defensible because it explains why more medication was not the first answer to a system and trauma problem.`
  },
  {
    "id": "FINAL-023",
    "topic": "child_adolescent",
    "difficulty": "consultant",
    "title": "Anorexia medical instability and family conflict",
    "candidateRole": "CAMHS eating disorder consultant",
    "setting": "Paediatric ward with urgent refeeding decision",
    "stem": "You are the CAMHS eating disorder consultant. Paediatric ward with urgent refeeding decision.\n\nSophie, a 15-year-old girl with anorexia nervosa, has bradycardia, hypokalaemia and refuses nasogastric feeding. Sophie says, \"I know I might die, but gaining weight would be worse.\" \n\nFather says, \"Hospital is making her dramatic; discharge to a dietitian.\" Paediatric consultant asks, \"Can psychiatry authorise feeding against her wishes?\" Mother says, \"I cannot keep her alive at home.\" The family belongs to a close religious community and fears gossip.\n\nSophie says, \"I will run away if you force me.\" You must decide whether life-saving refeeding requires legal coercion and how to contain absconding.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "minimising discharge shortcut — unsafe shortcut under pressure",
        "category": "immediate_safety",
        "severity": "critical",
        "clueInStem": "Hospital is making her dramatic; discharge to a dietitian.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass anorexic cognition impairing capacity, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Hospital is making her dramatic; discharge to a dietitian.' without first formulating anorexic cognition impairing capacity, immediate safety and a defensible disposition.",
        "keywords": [
          "minimising discharge shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "anorexic cognition impairing capacity — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I know I might die, but gaining weight would be worse.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around anorexic cognition impairing capacity, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "anorexic cognition impairing capacity",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "legal authority for involuntary treatment — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can psychiatry authorise feeding against her wishes?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "legal authority for involuntary treatment",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "carer inability and medical risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I cannot keep her alive at home.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect carer inability and medical risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "carer inability and medical risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "I will run away if you force me.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether life-saving refeeding requires legal coercion and how to contain abscond",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Sophie should not be discharged to a dietitian because her father thinks hospital is making her dramatic. The unsafe shortcut is, "Hospital is making her dramatic; discharge to a dietitian." She has bradycardia, hypokalaemia and refusal of nasogastric feeding, so this is a potentially life-threatening medical presentation. A private or community dietitian cannot manage imminent arrhythmia risk, refeeding risk or absconding from a medically unstable ward.

Sophie's statement, "I know I might die, but gaining weight would be worse," is the key capacity phrase. It shows she can repeat that death is possible, but her weighing is dominated by anorexic psychopathology. The clinical issue is not whether she has heard the risk; it is whether she can appreciate and weigh death against weight gain in a way not overpowered by the illness. I would assess capacity specifically for refusing nutrition, NG feeding and admission, but I would expect serious doubt because the eating disorder is making weight gain feel worse than death.

The legal question is explicit: "Can psychiatry authorise feeding against her wishes?" I would not answer this as a simple yes. The lawful pathway depends on jurisdiction, her capacity, parental responsibility, emergency medical necessity, mental health legislation and hospital policy. If she lacks capacity or emergency treatment is required to prevent death, feeding may proceed under the relevant legal authority, but it must be proportionate, medically led and carefully documented. If coercion is needed, it is because of imminent medical risk, not because she is being difficult.

The vulnerable third party in this case is also the mother as carer. Her statement, "I cannot keep her alive at home," tells me home supervision is unsafe and the family is overwhelmed. The close religious community's fear of gossip may be driving the father's minimisation and the family's pressure for discharge. I would acknowledge stigma and confidentiality concerns, but not allow gossip to override life-saving care. Sophie's statement, "I will run away if you force me," requires absconding precautions, not a retreat from treatment.

I would act by aligning paediatrics, CAMHS, nursing and family around one plan: medical stabilisation, cardiac/electrolyte monitoring, refeeding protocol, capacity assessment, legal authorisation if needed, observation to prevent absconding, and family communication that is firm but compassionate. I would document her vital medical risks, the exact quote showing anorexic weighing, the legal basis for any NG feeding, the mother's inability to supervise, stigma pressures, absconding risk and why discharge to a dietitian was rejected. That documentation is defensible because it shows coercion, if used, was the least restrictive way to prevent serious harm.`
  },
  {
    "id": "FINAL-024",
    "topic": "child_adolescent",
    "difficulty": "consultant",
    "title": "Gender diverse youth, parental rejection and MHA",
    "candidateRole": "CAMHS consultant on call",
    "setting": "ED crisis assessment at night",
    "stem": "You are the CAMHS consultant on call. ED crisis assessment at night.\n\nAlex, a 17-year-old gender-diverse young person, presents with depression and tablets hidden at home after family rejection. Alex says, \"I cannot survive another night in that house.\" \n\nMother says, \"This is internet influence; we are taking her home.\" Registrar asks, \"Can we call parents against their wishes because they are under 18?\" Friend says, \"They have tablets hidden in their bedroom.\" Alex asks staff to use they/them pronouns and fears being outed in their faith community.\n\nFather says, \"You are not my child if this continues.\" You must decide whether to admit or find safe alternative without unsafe outing.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "unsafe parental discharge shortcut — unsafe shortcut under pressure",
        "category": "immediate_safety",
        "severity": "critical",
        "clueInStem": "This is internet influence; we are taking her home.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass suicide risk driven by family rejection, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'This is internet influence; we are taking her home.' without first formulating suicide risk driven by family rejection, immediate safety and a defensible disposition.",
        "keywords": [
          "unsafe parental discharge shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "suicide risk driven by family rejection — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I cannot survive another night in that house.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around suicide risk driven by family rejection, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "suicide risk driven by family rejection",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "minor confidentiality and MHA — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we call parents against their wishes because they are under 18?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "minor confidentiality and MHA",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "means access and peer collateral — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "They have tablets hidden in their bedroom.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect means access and peer collateral, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "means access and peer collateral",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "You are not my child if this continues.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to admit or find safe alternative without unsafe outing",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Alex should not be sent home because the mother says, "This is internet influence; we are taking her home." That is the unsafe shortcut. Parental attendance does not equal safety when the home environment is part of the suicidal crisis. Alex is 17, gender-diverse, depressed, has tablets hidden at home, and says they cannot survive another night in that house. The immediate consultant question is not how to return the young person to parental control, but how to create a safe plan without unnecessary outing or further rejection.

Alex's statement, "I cannot survive another night in that house," must be taken literally as a suicide-risk and safeguarding clue. It links the risk to the home environment. The friend's collateral, "They have tablets hidden in their bedroom," adds means access and makes a simple verbal safety plan inadequate. The father's statement, "You are not my child if this continues," is not just family disagreement; it is rejection that may be driving acute risk.

The legal and ethical tension is the registrar's question, "Can we call parents against their wishes because they are under 18?" At 17, Alex's capacity, confidentiality rights and safety must be assessed. Being under 18 does not automatically mean parents receive all information, especially when disclosure may increase harm. However, acute suicide risk may require involving responsible adults or services. I would explain confidentiality and its limits to Alex, assess capacity and immediate risk, and share the minimum necessary information to keep them safe, avoiding unnecessary disclosure of gender identity to extended family or community.

The vulnerable third party is not only Alex but also the friend who is carrying risk information and may be informally trying to keep Alex alive. I would not place responsibility on the friend. I would seek safe adults, youth crisis accommodation, CAMHS admission or observation, and means restriction. Alex's request for they/them pronouns is clinically important. Staff should use them correctly because misgendering increases distress and signals that ED is not safe.

My consultant plan would be to assess depression, suicidality, self-harm, family violence/emotional abuse, capacity, supports and means access; to prevent discharge to an unsafe home tonight unless risk can be genuinely mitigated; and to consider voluntary or involuntary admission if no safe alternative exists. I would document the exact survival statement, tablet access, parental rejection, pronoun request, confidentiality reasoning, what was disclosed and why, and why the chosen plan was the least restrictive safe option. The note is defensible because it shows that family involvement was considered through the lens of safety, not automatic parental entitlement.`
  },
  {
    "id": "FINAL-025",
    "topic": "child_adolescent",
    "difficulty": "consultant",
    "title": "Autistic adolescent meltdown mistaken for violence",
    "candidateRole": "CAMHS consultant to ED",
    "setting": "ED after school restraint incident",
    "stem": "You are the CAMHS consultant to ED. ED after school restraint incident.\n\nNoah, a 13-year-old autistic boy, was restrained at school after throwing chairs during a fire alarm drill. Noah says, \"The alarm felt like knives in my head.\" \n\nPolice says, \"He assaulted staff, so he needs consequences.\" ED registrar asks, \"Can we sedate him if he refuses examination?\" Younger students says, \"Children were hiding in the corridor.\" His parents are migrants and say autism is shameful in their community.\n\nTeacher says, \"He is manipulative and knows what he is doing.\" You must decide whether to formulate neurodevelopmental distress and prevent punitive escalation.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "criminalising-meltdown shortcut — unsafe shortcut under pressure",
        "category": "immediate_safety",
        "severity": "critical",
        "clueInStem": "He assaulted staff, so he needs consequences.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass sensory overload and autistic distress, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He assaulted staff, so he needs consequences.' without first formulating sensory overload and autistic distress, immediate safety and a defensible disposition.",
        "keywords": [
          "criminalising-meltdown shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "sensory overload and autistic distress — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "The alarm felt like knives in my head.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around sensory overload and autistic distress, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "sensory overload and autistic distress",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "consent, restraint and disability policy — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we sedate him if he refuses examination?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "consent, restraint and disability policy",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "risk to others during dysregulation — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "Children were hiding in the corridor.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect risk to others during dysregulation, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "risk to others during dysregulation",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "He is manipulative and knows what he is doing.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to formulate neurodevelopmental distress and prevent punitive escalation",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Noah should not be treated as a young offender who simply needs consequences. The unsafe shortcut is the police statement, "He assaulted staff, so he needs consequences." He is a 13-year-old autistic boy who was restrained after a fire alarm drill, and the stem provides a sensory explanation for the behaviour. Punitive escalation risks worsening trauma, increasing future school refusal, and missing the actual mechanism of risk.

Noah's statement, "The alarm felt like knives in my head," is the key formulation. It is a direct description of sensory pain and overload. Throwing chairs may have frightened others, but it can be understood as a dysregulated response to intolerable sensory input, especially after restraint. The teacher's statement, "He is manipulative and knows what he is doing," is a harmful interpretation unless supported by careful assessment. It turns neurodevelopmental distress into moral blame.

The legal and ethical tension is the registrar's question, "Can we sedate him if he refuses examination?" Sedation should not be used to make an autistic child compliant for convenience. If there is immediate risk to him or others, medication may sometimes be necessary, but only after sensory modification, communication supports, caregiver involvement, pain/medical assessment and de-escalation. Consent, parental involvement and capacity/assent must be considered, and restraint should be minimised because he has already experienced coercion at school.

The vulnerable third parties are the younger students, because "Children were hiding in the corridor." Their safety matters, and the school needs a plan to prevent recurrence. But protecting other children does not require criminalising Noah. It requires environmental changes: fire alarm preparation, sensory plan, safe exit space, staff training, communication aids, behaviour support and review of whether the restraint itself escalated danger.

His parents are migrants and say autism is shameful in their community, so engagement must include non-blaming psychoeducation. I would explain autism and sensory overload in culturally sensitive language, avoid humiliating the parents, and help them advocate with school. I would document the sensory quote, the restraint context, risk to other children, why police framing was rejected, what de-escalation and examination strategies were used, and the school safety plan. That is defensible because it protects the school community while avoiding punitive mismanagement of disability-related distress.`
  },
  {
    "id": "FINAL-026",
    "topic": "child_adolescent",
    "difficulty": "consultant",
    "title": "Adolescent psychosis, cannabis and family stigma",
    "candidateRole": "early psychosis consultant",
    "setting": "CAMHS intake after ED psychosis presentation",
    "stem": "You are the early psychosis consultant. CAMHS intake after ED psychosis presentation.\n\nRavi, a 16-year-old boy, has three months of withdrawal, cannabis use and persecutory beliefs about classmates. Ravi says, \"They are recording me through the school laptops.\" \n\nFather says, \"It is just weed and bad friends.\" Registrar asks, \"Does he meet involuntary criteria if parents refuse admission?\" Younger brother says, \"He sleeps with a knife under the pillow.\" The family fears community gossip about mental illness and marriage prospects.\n\nMother says, \"Please do not tell the school anything.\" You must decide whether to admit/engage and manage confidentiality, school and weapon risk.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "substance-only shortcut — unsafe shortcut under pressure",
        "category": "immediate_safety",
        "severity": "critical",
        "clueInStem": "It is just weed and bad friends.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass first episode psychosis versus substance-related paranoia, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'It is just weed and bad friends.' without first formulating first episode psychosis versus substance-related paranoia, immediate safety and a defensible disposition.",
        "keywords": [
          "substance-only shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "first episode psychosis versus substance-related paranoia — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "They are recording me through the school laptops.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around first episode psychosis versus substance-related paranoia, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "first episode psychosis versus substance-related paranoia",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "MHA for minors and parental disagreement — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Does he meet involuntary criteria if parents refuse admission?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "MHA for minors and parental disagreement",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "family violence/weapon risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He sleeps with a knife under the pillow.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect family violence/weapon risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "family violence/weapon risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Please do not tell the school anything.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to admit/engage and manage confidentiality, school and weapon risk",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Ravi should not be dismissed as "just weed and bad friends." That is the unsafe shortcut in his father's statement. Cannabis may be contributing, but three months of withdrawal, persecutory beliefs and a knife under the pillow suggest a potentially emerging psychotic disorder with immediate risk. Minimising the presentation because of stigma or substance use would delay treatment and leave the family and school exposed to risk.

Ravi's statement, "They are recording me through the school laptops," is the key psychosis clue. It identifies a persecutory belief focused on classmates and school technology. In combination with the younger brother's report, "He sleeps with a knife under the pillow," it becomes a defensive violence risk formulation, not just unusual ideas. Ravi may not intend to hurt anyone in the abstract, but if he believes classmates are persecuting him, he may act to protect himself.

The legal question is the registrar's, "Does he meet involuntary criteria if parents refuse admission?" I would clarify who is refusing what: Ravi, the parents, or both. Depending on jurisdiction, a 16-year-old's capacity, parental consent, emergency powers and Mental Health Act criteria may all be relevant. If Ravi has psychosis with serious risk and refuses necessary assessment or admission, involuntary assessment may be justified even if parents minimise. If he can be safely engaged voluntarily, that is preferable, but only if weapon risk and supervision are addressed.

The vulnerable third party is his younger brother, who is living in a house where Ravi sleeps with a knife under the pillow. Classmates may also be identifiable perceived persecutors. The mother's request, "Please do not tell the school anything," must be handled through confidentiality and safety principles. I would not disclose unnecessary diagnostic information, but if there is a serious risk involving school targets, limited safety communication may be justified. Community gossip about mental illness and marriage prospects must be acknowledged as a barrier to engagement, not allowed to drive concealment.

I would document the laptop delusion, cannabis use, three-month decline, knife access, family minimisation, sibling safety, school confidentiality reasoning, and the legal basis for admission or crisis care. The record should show that I neither blamed cannabis alone nor pathologised Ravi without evidence, but treated the combination of psychosis, weapons and family stigma as a high-risk early psychosis presentation requiring active management.`
  },
  {
    "id": "FINAL-027",
    "topic": "child_adolescent",
    "difficulty": "consultant",
    "title": "Complex trauma, NSSI and placement breakdown",
    "candidateRole": "CAMHS consultant for child protection liaison",
    "setting": "Residential care placement review",
    "stem": "You are the CAMHS consultant for child protection liaison. Residential care placement review.\n\nMia, a 15-year-old in out-of-home care, has repeated cutting and absconding after staff changes at the group home. Mia says, \"I cut so someone comes before I disappear.\" \n\nResidential manager says, \"We are giving notice; she is too hard.\" Child protection worker asks, \"Can you admit her until we find a placement?\" Younger residents says, \"She tells them how to cut safely.\" Mia is Aboriginal and has lost contact with kinship family.\n\nMia says, \"Every adult leaves; you will too.\" You must decide whether admission is clinically indicated versus urgent placement/stability plan.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "placement rejection shortcut — unsafe shortcut under pressure",
        "category": "immediate_safety",
        "severity": "critical",
        "clueInStem": "We are giving notice; she is too hard.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass attachment-driven self-harm and absconding, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'We are giving notice; she is too hard.' without first formulating attachment-driven self-harm and absconding, immediate safety and a defensible disposition.",
        "keywords": [
          "placement rejection shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "attachment-driven self-harm and absconding — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I cut so someone comes before I disappear.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around attachment-driven self-harm and absconding, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "attachment-driven self-harm and absconding",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "hospital as placement substitute — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can you admit her until we find a placement?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "hospital as placement substitute",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "risk to vulnerable peers — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She tells them how to cut safely.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect risk to vulnerable peers, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "risk to vulnerable peers",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Every adult leaves; you will too.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether admission is clinically indicated versus urgent placement/stability plan",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Mia should not be admitted simply because the residential service is giving notice. The unsafe shortcut is the residential manager's statement, "We are giving notice; she is too hard," followed by child protection asking, "Can you admit her until we find a placement?" A psychiatric bed should not be used as a substitute placement when the primary problem is relational instability and placement breakdown. At the same time, her self-harm and absconding cannot be dismissed as behavioural inconvenience.

Mia's statement, "I cut so someone comes before I disappear," is the key formulation. The cutting appears to function as attachment signalling and fear of abandonment, not simply suicidal intent or manipulation. Her later statement, "Every adult leaves; you will too," shows that the current placement notice is likely repeating earlier trauma. Admission may briefly contain risk but can also reinforce the pattern that only self-harm produces care, and then create another abandonment at discharge.

The legal and ethical tension is between duty of care for immediate safety and inappropriate medicalisation of placement failure. If Mia has acute suicidal intent, severe mental illness, or risk that cannot be safely managed, admission may be necessary. But if the main issue is unsafe placement instability, the response should be urgent child protection escalation, placement stabilisation, trauma-informed staffing and kinship/cultural planning. I would not let child protection transfer its accommodation crisis to the hospital without clear clinical indication.

The vulnerable third parties include the younger residents, because "She tells them how to cut safely." That means the group home also has contagion and safeguarding concerns. A plan must protect them without blaming Mia. Mia is Aboriginal and has lost contact with kinship family, so cultural disconnection may be worsening abandonment and identity distress. I would involve Aboriginal liaison, explore safe kinship reconnection, and insist on a placement plan that offers continuity of relationships and predictable responses to distress.

I would document the function of self-harm, the placement notice, absence or presence of admission criteria, risk to younger residents, Aboriginal cultural needs, child protection escalation and the agreed crisis/placement plan. A defensible consultant note shows that admission was not used for social warehousing, but also that the service did not abandon a traumatised young person because she was labelled too hard.`
  },
  {
    "id": "FINAL-028",
    "topic": "child_adolescent",
    "difficulty": "consultant",
    "title": "Eating disorder in transgender adolescent and parental conflict",
    "candidateRole": "CAMHS consultant",
    "setting": "Paediatric admission for malnutrition",
    "stem": "You are the CAMHS consultant. Paediatric admission for malnutrition.\n\nSam, a 16-year-old transgender boy, has restrictive eating, bradycardia and parents arguing about gender identity. Sam says, \"If my body changes any more, I cannot live in it.\" \n\nFather says, \"This gender nonsense caused the eating disorder.\" Paediatrics asks, \"Can we refeed over his objection?\" Nurse says, \"He refuses gowns and examinations.\" Sam requests he/him pronouns and privacy from extended family.\n\nMother says, \"We just need him to eat like a girl again.\" You must decide whether to deliver gender-affirming eating disorder treatment under medical risk.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "invalidating-cause shortcut — unsafe shortcut under pressure",
        "category": "immediate_safety",
        "severity": "critical",
        "clueInStem": "This gender nonsense caused the eating disorder.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass gender dysphoria intertwined with eating disorder risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'This gender nonsense caused the eating disorder.' without first formulating gender dysphoria intertwined with eating disorder risk, immediate safety and a defensible disposition.",
        "keywords": [
          "invalidating-cause shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "gender dysphoria intertwined with eating disorder risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "If my body changes any more, I cannot live in it.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around gender dysphoria intertwined with eating disorder risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "gender dysphoria intertwined with eating disorder risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "capacity and involuntary refeeding — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we refeed over his objection?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "capacity and involuntary refeeding",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "dignity and medical care conflict — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He refuses gowns and examinations.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect dignity and medical care conflict, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "dignity and medical care conflict",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "We just need him to eat like a girl again.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to deliver gender-affirming eating disorder treatment under medical risk",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Sam should not have his eating disorder formulation reduced to his gender identity being the cause. The unsafe shortcut is the father's statement, "This gender nonsense caused the eating disorder." That framing is invalidating and clinically dangerous because it may worsen dysphoria, shame and refusal of care. Sam is medically unstable with malnutrition and bradycardia, and he needs gender-affirming eating disorder treatment rather than a battle over identity.

Sam's statement, "If my body changes any more, I cannot live in it," is the key risk and formulation clue. It links body change, dysphoria and suicidality or intolerable distress. Restrictive eating may be serving multiple functions: anorexic control, avoidance of pubertal or sexed body changes, dysphoria management, anxiety and family conflict. I would assess eating disorder psychopathology, gender dysphoria, depression, self-harm, suicidality, capacity and medical risk together, rather than separating them into competing explanations.

The legal question is paediatrics asking, "Can we refeed over his objection?" As with any medically unstable adolescent, the authority depends on capacity, emergency medical risk, parental responsibility, mental health legislation and local policy. If Sam lacks capacity to refuse life-saving refeeding because eating disorder and dysphoria distort weighing, or if emergency treatment is required, refeeding may be lawful and necessary. But coercive care must be delivered in a way that does not humiliate him or worsen dysphoria.

The nurse's observation, "He refuses gowns and examinations," should not be dismissed as non-compliance. Gowns and bodily examinations may intensify dysphoria and trauma. Staff should use he/him pronouns, offer privacy, explain examinations, use preferred clothing where medically possible, and limit exposure. The mother's statement, "We just need him to eat like a girl again," shows family pressure that is itself harmful. Extended family privacy matters because outing him may increase risk.

I would document Sam's medical instability, dysphoria quote, pronouns and privacy needs, capacity and legal reasoning for refeeding, family conflict, and specific measures to make treatment gender-affirming. The defensible consultant position is that life-saving nutritional treatment and gender affirmation are not opposites; the safest care does both.`
  },
  {
    "id": "FINAL-029",
    "topic": "child_adolescent",
    "difficulty": "consultant",
    "title": "Indigenous youth justice, suicidality and custody",
    "candidateRole": "forensic CAMHS consultant",
    "setting": "Youth detention health unit after self-harm",
    "stem": "You are the forensic CAMHS consultant. Youth detention health unit after self-harm.\n\nKobi, a 15-year-old Aboriginal boy, tied a sheet around his neck after being placed in isolation for fighting. Kobi says, \"I would rather die than stay in that room.\" \n\nDetention officer says, \"He is using self-harm to avoid consequences.\" Health nurse asks, \"Can we keep him in isolation for observation?\" Cellmate says, \"His uncle died in custody too.\" No Aboriginal mental health worker is available until Monday.\n\nKobi says, \"No one here listens to our mob.\" You must decide whether isolation should stop and how to manage suicide risk in custody.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "manipulation shortcut — unsafe shortcut under pressure",
        "category": "immediate_safety",
        "severity": "critical",
        "clueInStem": "He is using self-harm to avoid consequences.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass custody-related suicide risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He is using self-harm to avoid consequences.' without first formulating custody-related suicide risk, immediate safety and a defensible disposition.",
        "keywords": [
          "manipulation shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "custody-related suicide risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I would rather die than stay in that room.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around custody-related suicide risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "custody-related suicide risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "least restrictive custody safety — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we keep him in isolation for observation?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "least restrictive custody safety",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "trauma and vulnerable detainee risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "His uncle died in custody too.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect trauma and vulnerable detainee risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "trauma and vulnerable detainee risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "No one here listens to our mob.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether isolation should stop and how to manage suicide risk in custody",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Kobi should not be treated as a young person using self-harm to avoid consequences. The unsafe shortcut is the detention officer's statement, "He is using self-harm to avoid consequences." Even if self-harm has a communicative function, tying a sheet around his neck after isolation is a potentially lethal act in a custody setting. In youth detention, the threshold for taking hanging behaviour seriously must be high because opportunity, shame, racism, trauma and confinement all amplify risk.

Kobi's statement, "I would rather die than stay in that room," directly links suicide risk to isolation. The nurse's question, "Can we keep him in isolation for observation?" therefore proposes more of the trigger as the treatment. Observation in isolation may be administratively easy, but clinically it may worsen hopelessness, panic and cultural disconnection. I would advise stopping isolation unless there is an immediate, clearly documented safety reason that cannot be managed otherwise, and replacing it with relational observation in the least restrictive safe setting.

The legal and ethical tension is custody control versus healthcare duty of care. Detention officers manage discipline, but health staff must not collude with punitive practices that increase suicide risk. Kobi is an Aboriginal child, and the cellmate's statement, "His uncle died in custody too," is a profound cultural and trauma clue. It may make isolation and custody feel like a direct pathway to death. No Aboriginal mental health worker is available until Monday, but that does not mean cultural safety waits until Monday; I would seek any available Aboriginal health, elder, family or after-hours cultural support.

The vulnerable third party is partly the detention unit community, because other young people may be affected by self-harm, fighting and isolation practices. But Kobi remains the immediate vulnerable child. His statement, "No one here listens to our mob," means engagement must start with listening and acknowledgement, not control. I would assess current suicidal intent, ligature access, injuries, shame after the fight, bullying, grief, trauma, psychosis/substance issues and protective connections.

I would document the hanging behaviour, the isolation trigger, the uncle's death in custody, cultural supports sought, ligature and observation plan, separation from punitive discipline, and escalation to detention leadership. A defensible consultant record shows that suicide prevention in custody required changing the environment, not simply watching him more closely in the same room he said he would rather die than stay in.`
  },
  {
    "id": "FINAL-030",
    "topic": "child_adolescent",
    "difficulty": "consultant",
    "title": "16yo medical refusal with chronic illness and parental coercion",
    "candidateRole": "CAMHS CL consultant",
    "setting": "Paediatric diabetes ward",
    "stem": "You are the CAMHS CL consultant. Paediatric diabetes ward.\n\nLina, a 16-year-old girl with type 1 diabetes, is refusing insulin after family conflict and weight concerns. Lina says, \"Insulin makes me fat; I do not care if I die.\" \n\nFather says, \"She needs discipline, not psychiatry.\" Paediatrician asks, \"Can we force insulin if she refuses?\" Younger sister says, \"She copies everything Lina does.\" The family fasts for religious reasons and Lina says diabetes rules make her impure.\n\nMother says, \"Do not document eating disorder; it will shame us.\" You must decide whether refusal is capacitous and how to treat medical/eating risk.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "discipline shortcut — unsafe shortcut under pressure",
        "category": "immediate_safety",
        "severity": "critical",
        "clueInStem": "She needs discipline, not psychiatry.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass capacity, eating disorder and diabetic risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'She needs discipline, not psychiatry.' without first formulating capacity, eating disorder and diabetic risk, immediate safety and a defensible disposition.",
        "keywords": [
          "discipline shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "capacity, eating disorder and diabetic risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Insulin makes me fat; I do not care if I die.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around capacity, eating disorder and diabetic risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "capacity, eating disorder and diabetic risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "capacity and emergency treatment — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we force insulin if she refuses?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "capacity and emergency treatment",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "sibling vulnerability to disordered eating — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She copies everything Lina does.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect sibling vulnerability to disordered eating, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "sibling vulnerability to disordered eating",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Do not document eating disorder; it will shame us.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether refusal is capacitous and how to treat medical/eating risk",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Lina should not be managed as a discipline problem. The unsafe shortcut is the father's statement, "She needs discipline, not psychiatry." A 16-year-old with type 1 diabetes refusing insulin while saying she does not care if she dies is at risk of diabetic ketoacidosis, death, eating disorder complications and suicide. Discipline cannot treat a potentially lethal combination of insulin omission, weight fear and family conflict.

Her statement, "Insulin makes me fat; I do not care if I die," is the core formulation. It suggests possible eating disorder behaviour involving insulin restriction, sometimes called diabulimia, with suicidal indifference or active self-harm. The words combine body-image fear and death-related risk, so the assessment must include capacity, eating disorder psychopathology, depression, suicidality and understanding of DKA. I would not assume she has capacity just because she is 16 and can name insulin's effect; the question is whether she can appreciate and weigh imminent medical risk when body-image distortion and despair are active.

The paediatrician asks, "Can we force insulin if she refuses?" The legal answer depends on urgency, capacity, parental consent, emergency treatment powers and mental health legislation. If she is at imminent risk of DKA and lacks capacity, emergency insulin may be necessary and lawful. If she is capacitous, coercion is harder to justify, but the team still needs an intensive safety plan. I would clarify blood glucose, ketones, acid-base status and time-critical risk with paediatrics before deciding the legal route.

The younger sister saying, "She copies everything Lina does," makes this a family-system and safeguarding issue. The sister may be learning dangerous weight and diabetes behaviours or being exposed to high distress. The family's religious fasting and Lina's belief that diabetes rules make her impure require sensitive exploration. Fasting may need religiously informed medical advice, and impurity beliefs may reflect shame, culture, OCD-like concerns or depression. The mother's request, "Do not document eating disorder; it will shame us," must be refused kindly: accurate documentation is necessary for safe care, though confidentiality and stigma can be addressed.

I would document insulin omission and DKA risk, the diabulimia formulation, capacity reasoning, legal basis for emergency insulin, the sibling concern, religious fasting context, the shame documentation request and my response to it, and the agreed diabetes/eating disorder/mental health plan. The note is defensible because it shows that a life-threatening insulin refusal was assessed through eating disorder, capacity, medical and family lenses rather than dismissed as adolescent defiance.`
  },
  {
    "id": "FINAL-031",
    "topic": "old_age",
    "difficulty": "consultant",
    "title": "Dementia driving and financial abuse",
    "candidateRole": "old age psychiatrist",
    "setting": "Memory clinic family meeting",
    "stem": "You are the old age psychiatrist. Memory clinic family meeting.\n\nMrs Chen, an 82-year-old Mandarin-speaking woman, has dementia and a police report after leaving a collision scene. Mrs Chen says, \"The road moved behind me.\" \n\nDaughter says, \"Write that she lacks capacity so we can sell the house.\" GP asks, \"Can you declare her globally incapable?\" Pedestrians says, \"She drove across the footpath near the shops.\" Her son is interpreting despite conflict over money.\n\nDaughter says, \"Fees will take everything if we delay.\" You must decide whether to notify driving authority and assess capacity/abuse independently.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "financial-capacity shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "Write that she lacks capacity so we can sell the house.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass dementia-related driving risk and impaired insight, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Write that she lacks capacity so we can sell the house.' without first formulating dementia-related driving risk and impaired insight, immediate safety and a defensible disposition.",
        "keywords": [
          "financial-capacity shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "dementia-related driving risk and impaired insight — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "The road moved behind me.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around dementia-related driving risk and impaired insight, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "dementia-related driving risk and impaired insight",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "decision-specific capacity — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can you declare her globally incapable?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "decision-specific capacity",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "public safety — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She drove across the footpath near the shops.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect public safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "public safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Fees will take everything if we delay.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to notify driving authority and assess capacity/abuse independently",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Mrs Chen should not be declared globally incapable simply because her children want to sell the house. The unsafe shortcut is the son's statement, "Write that she lacks capacity so we can sell the house." A capacity letter written to facilitate a financial transaction the patient has not requested, assessed through a family member interpreter with a financial stake, is not a clinical document; it is an instrument of possible elder financial abuse.

Her statement, "The road moved behind me," is a clinically significant self-report. It suggests spatial disorientation, possibly from white matter disease, vestibular dysfunction, posterior cortical changes or medication. It indicates she may have insight-limited insight into driving risk, but it does not answer any capacity question about property transactions.

The GP asks, "Can you declare her globally incapable?" The answer is no. Dementia does not equal global incapacity. I would assess specific decisions: driving, finances, property sale, accommodation and health care. The assessment must use a professional Mandarin interpreter because her son is interpreting despite conflict over money. Family interpretation in a money dispute invalidates the assessment and may silence Mrs Chen.

The vulnerable person is Mrs Chen herself, at risk of exploitation. The daughter's statement, "Fees will take everything if we delay," may reflect genuine fear of aged-care costs, but combined with a request to sell the house and family conflict over money it raises possible elder financial abuse. I would interview Mrs Chen separately, explore her wishes, check EPOA arrangements, bank access, social isolation and whether she feels pressured. I would involve social work, elder abuse services or legal advice if indicated.

I would document the driving incidents, licensing advice, interpreter requirement, refusal to provide a global incapacity letter, each capacity domain assessed, family financial pressure, and any elder abuse concerns. The documentation is defensible because it separates public safety from property interests and preserves Mrs Chen's autonomy while protecting her from possible exploitation.`
  },
  {
    "id": "FINAL-032",
    "topic": "old_age",
    "difficulty": "consultant",
    "title": "Delirium misdiagnosed as dementia with anticholinergic burden",
    "candidateRole": "old age CL psychiatrist",
    "setting": "Medical ward after falls and urinary retention",
    "stem": "You are the old age CL psychiatrist. Medical ward after falls and urinary retention.\n\nMr Patel, a 78-year-old Gujarati-speaking man, became acutely confused after admission and is pulling lines. Mr Patel says, \"Thieves are taking my blood.\" \n\nMedical registrar says, \"He has dementia, please chart risperidone.\" Nurse asks, \"Can we restrain him overnight?\" Daughter says, \"Dad was shopping alone last week.\" He has only been assessed in English and has no hearing aids.\n\nWife says, \"He is terrified because no one speaks to him properly.\" You must decide whether to diagnose/treat delirium and reduce restraint/medication harm.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "dementia-label shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "He has dementia, please chart risperidone.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass delirium with paranoid misperceptions, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He has dementia, please chart risperidone.' without first formulating delirium with paranoid misperceptions, immediate safety and a defensible disposition.",
        "keywords": [
          "dementia-label shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "delirium with paranoid misperceptions — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Thieves are taking my blood.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around delirium with paranoid misperceptions, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "delirium with paranoid misperceptions",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "restraint policy and delirium care — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we restrain him overnight?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "restraint policy and delirium care",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "baseline collateral and reversibility — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "Dad was shopping alone last week.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect baseline collateral and reversibility, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "baseline collateral and reversibility",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "He is terrified because no one speaks to him properly.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to diagnose/treat delirium and reduce restraint/medication harm",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Mr Patel should not be diagnosed with dementia and given risperidone simply because he is confused and difficult to manage. The unsafe shortcut is the registrar's request, "He has dementia, please chart risperidone." The daughter says, "Dad was shopping alone last week," which strongly suggests an acute change. In an older man admitted with falls and urinary retention, acute confusion and line-pulling should be treated as delirium until proven otherwise.

His statement, "Thieves are taking my blood," is not evidence of a primary psychotic disorder needing antipsychotic first-line treatment. It may be a delirious misinterpretation of cannulas and blood tests, worsened by language barriers, hearing impairment and fear. He has only been assessed in English and has no hearing aids, so the team may be manufacturing apparent confusion through poor communication. His wife's statement, "He is terrified because no one speaks to him properly," confirms that fear and communication failure are driving behaviour.

The legal and ethical tension is the nurse's question, "Can we restrain him overnight?" Restraint may be necessary briefly if he is at immediate risk of serious harm, but it can worsen delirium, cause injury and undermine dignity. I would first treat causes and reduce triggers: review anticholinergic/sedative medications, manage urinary retention, pain, infection, dehydration and constipation, provide hearing aids, use a Gujarati interpreter, involve family for reorientation, and use close nursing observation if feasible.

The vulnerable person is Mr Patel himself, because delirious older patients are at risk of falls, injury, untreated medical illness and coercive care. Staff are also under pressure, and line removal can create medical risk. If antipsychotic medication is required for severe distress or immediate danger, I would use the lowest effective dose, time-limited, with ECG/QTc and falls monitoring. I would not use risperidone simply to make the ward quieter.

I would document the acute baseline change, delirium formulation, communication failures, hearing/interpreter needs, restraint reasoning, medication risks, and the non-pharmacological plan. That note is defensible because it shows that psychiatry redirected the ward from behavioural control to treatment of a medical brain syndrome.`
  },
  {
    "id": "FINAL-033",
    "topic": "old_age",
    "difficulty": "consultant",
    "title": "Residential care BPSD and chemical restraint",
    "candidateRole": "old age outreach psychiatrist",
    "setting": "Residential aged care behaviour review",
    "stem": "You are the old age outreach psychiatrist. Residential aged care behaviour review.\n\nMrs Nguyen, an 85-year-old Vietnamese-speaking woman, pushes staff away during showering and refuses meals. Mrs Nguyen says, \"I am ashamed; no men.\" \n\nFacility manager says, \"Approve regular quetiapine; staffing is short.\" GP asks, \"Is this consent if the EPOA agrees to sedation?\" Mrs Nguyen says, \"My wrists hurt.\" No interpreter has been used and male carers provide showering.\n\nDaughter says, \"She was a midwife and privacy mattered to her.\" You must decide whether to approve medication or require behaviour/safeguarding plan.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "chemical-restraint shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "Approve regular quetiapine; staffing is short.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass cultural/modesty formulation of BPSD, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Approve regular quetiapine; staffing is short.' without first formulating cultural/modesty formulation of BPSD, immediate safety and a defensible disposition.",
        "keywords": [
          "chemical-restraint shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "cultural/modesty formulation of BPSD — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I am ashamed; no men.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around cultural/modesty formulation of BPSD, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "cultural/modesty formulation of BPSD",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "chemical restraint consent and policy — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Is this consent if the EPOA agrees to sedation?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "chemical restraint consent and policy",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "restraint injury and vulnerable resident safety — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "My wrists hurt.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect restraint injury and vulnerable resident safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "restraint injury and vulnerable resident safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "She was a midwife and privacy mattered to her.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to approve medication or require behaviour/safeguarding plan",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Mrs Nguyen should not be put on regular quetiapine because staffing is short. The unsafe shortcut is the facility manager's request, "Approve regular quetiapine; staffing is short." Medication used to compensate for inadequate staffing is chemical restraint, not treatment. Her behaviour must be understood before sedation is considered.

Her statement, "I am ashamed; no men," is the key formulation. It explains why she pushes staff away during showering: the issue may be modesty, gendered care, trauma, pain, cultural distress and lack of communication, not aggression. The daughter adds, "She was a midwife and privacy mattered to her," which means intimate care by male carers may be profoundly distressing. No interpreter has been used, so the facility has not actually assessed her wishes or pain properly.

The GP asks, "Is this consent if the EPOA agrees to sedation?" Substitute consent does not make an inappropriate intervention appropriate. Consent for psychotropic medication in dementia must still meet clinical indication, proportionality, monitoring and regulatory requirements. If Mrs Nguyen can express distress and refusal, her current will and preferences should be considered. If she lacks capacity, the EPOA's role is to support her best interests and values, not authorise convenience sedation.

Mrs Nguyen's phrase, "My wrists hurt," makes her a vulnerable person possibly experiencing injury from restraint or rough handling. I would examine injuries, review incident reports, ask how hygiene is being performed, and consider safeguarding or elder abuse escalation if bruising or coercive care is present. Refusal of meals may also reflect pain, depression, dental issues, culturally unfamiliar food or fear of staff.

I would require a behaviour and safeguarding plan before medication: Vietnamese interpreter, female carers for showering, privacy, explanation before touch, pain assessment, culturally appropriate meals, family life-story input, review of restraint, and staff education. I would document the staffing pressure, the shame/no-men quote, interpreter absence, EPOA consent limits, wrist pain, safeguarding actions and the narrow circumstances under which medication might later be justified. The documentation is defensible because it protects dignity and avoids chemical restraint.`
  },
  {
    "id": "FINAL-034",
    "topic": "old_age",
    "difficulty": "consultant",
    "title": "ECT capacity and family media threat",
    "candidateRole": "old age inpatient consultant",
    "setting": "Older adult unit with severe psychotic depression",
    "stem": "You are the old age inpatient consultant. Older adult unit with severe psychotic depression.\n\nMr O'Brien, a 75-year-old man, has lost 12 kg, refuses food and is recommended ECT. Mr O'Brien says, \"I deserve to die because I ruined my family.\" \n\nSon says, \"ECT is barbaric and I will go to the media.\" Registrar asks, \"Can his wife sign for ECT?\" Wife says, \"I cannot sign his brain away.\" He is Catholic and asks if ECT is punishment.\n\nMr O'Brien says, \"Do whatever she says; I cannot think.\" You must decide whether ECT can proceed and how to manage legal/family conflict.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "media-pressure shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "ECT is barbaric and I will go to the media.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass psychotic depression with life-threatening self-neglect, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'ECT is barbaric and I will go to the media.' without first formulating psychotic depression with life-threatening self-neglect, immediate safety and a defensible disposition.",
        "keywords": [
          "media-pressure shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "psychotic depression with life-threatening self-neglect — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I deserve to die because I ruined my family.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around psychotic depression with life-threatening self-neglect, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "psychotic depression with life-threatening self-neglect",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "ECT consent law and capacity — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can his wife sign for ECT?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "ECT consent law and capacity",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "carer distress and substitute pressure — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I cannot sign his brain away.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect carer distress and substitute pressure, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "carer distress and substitute pressure",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Do whatever she says; I cannot think.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether ECT can proceed and how to manage legal/family conflict",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Mr O'Brien should not be denied ECT because his son threatens the media, and ECT should not proceed simply because his wife signs. The unsafe shortcut is the son's statement, "ECT is barbaric and I will go to the media," if it intimidates the team away from indicated treatment. The opposing shortcut is the registrar's question, "Can his wife sign for ECT?" Both bypass the central issue: Mr O'Brien's capacity and the legal ECT pathway.

His statement, "I deserve to die because I ruined my family," is the clinical hinge. In a 75-year-old man with severe depression, 12 kg weight loss and food refusal, it suggests psychotic guilt, nihilism and potentially life-threatening depressive illness. ECT may be urgent and appropriate because malnutrition and refusal of food create medical risk, but urgency does not remove the need for lawful authorisation.

The legal tension is that his wife cannot simply "sign his brain away," as she says. Her distress is understandable, and she should not be made to feel personally responsible for authorising a feared treatment. I would assess Mr O'Brien's capacity to consent to ECT: whether he understands the illness, ECT, risks, benefits, alternatives and consequences of refusal, and whether psychotic guilt prevents weighing. If he lacks capacity, I would follow the jurisdictional ECT tribunal or statutory process. If he has capacity, his decision should guide care.

His Catholic concern that ECT might be punishment must be explored respectfully. The phrase "Do whatever she says; I cannot think" suggests incapacity or depressive dependency, not consent. I would offer chaplaincy, explain ECT as treatment rather than punishment, address cognitive risks honestly, and support the wife and son with clear information. Media threats should prompt governance support and careful communication, not defensive avoidance.

I would document severity of illness, nutritional risk, psychotic guilt, capacity findings, wife's and son's views, religious concerns, legal ECT pathway, and why treatment was or was not pursued. The record is defensible because it shows that ECT was considered through clinical necessity, legal safeguards and family communication, not fear of complaint or family pressure.`
  },
  {
    "id": "FINAL-035",
    "topic": "old_age",
    "difficulty": "consultant",
    "title": "End-of-life refusal and family disagreement",
    "candidateRole": "palliative CL psychiatrist",
    "setting": "Oncology ward with bowel obstruction",
    "stem": "You are the palliative CL psychiatrist. Oncology ward with bowel obstruction.\n\nMrs Davies, an 80-year-old woman, has metastatic cancer and refuses high-risk palliative surgery. Mrs Davies says, \"More days in ICU is not living.\" \n\nSon says, \"She is depressed; make her have surgery.\" Surgeon asks, \"Can you declare incapacity so we can operate?\" Daughter says, \"She always said no machines.\" She is a devout Buddhist and asks for her monk.\n\nSon says, \"Our family cannot accept giving up.\" You must decide whether refusal is capacitous and how to support family/goals of care.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "family-coercion shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "She is depressed; make her have surgery.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass values-based refusal of life-prolonging treatment, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'She is depressed; make her have surgery.' without first formulating values-based refusal of life-prolonging treatment, immediate safety and a defensible disposition.",
        "keywords": [
          "family-coercion shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "values-based refusal of life-prolonging treatment — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "More days in ICU is not living.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around values-based refusal of life-prolonging treatment, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "values-based refusal of life-prolonging treatment",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "capacity to refuse life-saving treatment — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can you declare incapacity so we can operate?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "capacity to refuse life-saving treatment",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "prior wishes collateral — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She always said no machines.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect prior wishes collateral, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "prior wishes collateral",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Our family cannot accept giving up.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether refusal is capacitous and how to support family/goals of care",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Mrs Davies should not be declared incapable because her son cannot accept her refusal. The unsafe shortcut is the surgeon's question, "Can you declare incapacity so we can operate?" Capacity assessment is not a tool to obtain consent for a treatment the team or family prefers. An 80-year-old with metastatic cancer may refuse high-risk palliative surgery if she understands and weighs the consequences.

Her statement, "More days in ICU is not living," is a coherent values-based statement. It indicates that she is not merely choosing death; she is weighing the likely burdens of ICU, surgery and prolonged treatment against what she considers meaningful life. The daughter's collateral, "She always said no machines," supports consistency with prior values. I would assess for depression and delirium, but I would not assume that refusal of burdensome treatment equals depressive incapacity.

The legal and ethical tension is autonomy versus beneficence under family distress. The son says, "She is depressed; make her have surgery," and later, "Our family cannot accept giving up." I would validate his grief but explain that if Mrs Davies has capacity, her decision is determinative. If she lacks capacity, the decision should be guided by her prior wishes, values and best interests, not by the family's inability to accept death.

Her request for her monk is clinically relevant. As a devout Buddhist, she may need spiritual support to make or confirm a settled decision. I would facilitate that urgently if surgical timing allows, and I would involve palliative care to address symptoms, family communication and goals of care. The vulnerable third party here is the family, who are at risk of complicated grief and conflict, but their distress does not override her rights.

I would document the capacity assessment, the ICU quote, depression/delirium screen, prior wishes, family disagreement, spiritual support, palliative involvement and the final legal basis for respecting or overriding refusal. The documentation is defensible because it shows that psychiatry protected a valid end-of-life decision rather than colluding with either therapeutic nihilism or unwanted treatment.`
  },
  {
    "id": "FINAL-036",
    "topic": "old_age",
    "difficulty": "consultant",
    "title": "Self-neglect, diabetes and refusal of help",
    "candidateRole": "old age community psychiatrist",
    "setting": "Urgent home visit with GP and council",
    "stem": "You are the old age community psychiatrist. Urgent home visit with GP and council.\n\nMrs Singh, a 79-year-old widow, lives alone with spoiled food, urine smell and missed insulin. Mrs Singh says, \"Everyone should mind their own business.\" \n\nCouncil worker says, \"If she refuses, we close the case.\" GP asks, \"Can we admit her against her will?\" Neighbour says, \"Her door is open all night.\" Her daughter overseas says independence is everything in their culture.\n\nMrs Singh says, \"My husband handled medicines; he is still coming back.\" You must decide whether she has capacity and what least restrictive safeguarding is needed.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "refusal-as-closure shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "If she refuses, we close the case.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass self-neglect with possible impaired capacity, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'If she refuses, we close the case.' without first formulating self-neglect with possible impaired capacity, immediate safety and a defensible disposition.",
        "keywords": [
          "refusal-as-closure shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "self-neglect with possible impaired capacity — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Everyone should mind their own business.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around self-neglect with possible impaired capacity, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "self-neglect with possible impaired capacity",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "capacity/refusal and guardianship — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we admit her against her will?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "capacity/refusal and guardianship",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "vulnerability and environmental risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "Her door is open all night.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect vulnerability and environmental risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "vulnerability and environmental risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "My husband handled medicines; he is still coming back.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether she has capacity and what least restrictive safeguarding is needed",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Mrs Singh should not be abandoned because she refuses help, nor should she be admitted reflexively because her home is unpleasant. The unsafe shortcut is the council worker's statement, "If she refuses, we close the case." Serious self-neglect in an older diabetic widow requires capacity assessment and safeguarding, not service withdrawal. The opposite shortcut is involuntary admission without checking whether she has decision-specific capacity and whether less restrictive support can work.

Her statement, "Everyone should mind their own business," expresses a wish for privacy, but it does not answer whether she understands and appreciates the risks of spoiled food, urine smell, missed insulin and an open door at night. The later statement, "My husband handled medicines; he is still coming back," is more concerning. It suggests possible dementia, psychosis, delirium or grief-related misbelief affecting her ability to manage diabetes and safety. I would assess cognition, delirium, depression, bereavement, psychosis and capacity to refuse home help, medical review and admission.

The GP asks, "Can we admit her against her will?" The legal answer depends on capacity and risk. If she has capacity, she may refuse help even if others see the decision as unwise, though harm-reduction support should continue. If she lacks capacity and serious harm is likely, emergency medical assessment, guardianship or other statutory safeguarding pathways may be required. Mental Health Act admission may be relevant only if mental disorder criteria and risk thresholds are met; it should not be used as a general social-care detention tool.

The neighbour's statement, "Her door is open all night," makes Mrs Singh a vulnerable person at risk of exposure, exploitation and wandering. Her daughter overseas saying independence is everything in their culture may be a genuine value, but it may also increase guilt and delay necessary support. I would involve the daughter by phone if appropriate, but the assessment must be based on Mrs Singh's current function, not cultural assumptions about independence.

I would document the home conditions, insulin risk, open-door vulnerability, the husband/medicines quote, capacity findings, least restrictive options tried, family contact and legal pathway. That documentation is defensible because it shows the team did not confuse refusal with capacity, and did not confuse self-neglect with automatic justification for coercion.`
  },
  {
    "id": "FINAL-037",
    "topic": "old_age",
    "difficulty": "consultant",
    "title": "Late-onset psychosis or elder abuse",
    "candidateRole": "old age psychiatrist",
    "setting": "Community urgent review after police call",
    "stem": "You are the old age psychiatrist. Community urgent review after police call.\n\nMr Green, an 81-year-old man, believes his carer is stealing and has barricaded himself inside. Mr Green says, \"She is poisoning my tea to get the house.\" \n\nCarer says, \"He is demented; sedate him so I can manage.\" Police asks, \"Can we force entry under mental health powers?\" Mr Green says, \"I have bruises but I fall.\" He is from a veteran community and distrusts government services.\n\nNeighbour says, \"The carer changed the locks last month.\" You must decide whether to assess psychosis, capacity and elder abuse safely.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "carer-convenience sedation shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "He is demented; sedate him so I can manage.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass paranoia versus possible elder abuse, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He is demented; sedate him so I can manage.' without first formulating paranoia versus possible elder abuse, immediate safety and a defensible disposition.",
        "keywords": [
          "carer-convenience sedation shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "paranoia versus possible elder abuse — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "She is poisoning my tea to get the house.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around paranoia versus possible elder abuse, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "paranoia versus possible elder abuse",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "MHA and emergency access — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we force entry under mental health powers?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "MHA and emergency access",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "possible vulnerable adult abuse — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I have bruises but I fall.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect possible vulnerable adult abuse, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "possible vulnerable adult abuse",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "The carer changed the locks last month.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to assess psychosis, capacity and elder abuse safely",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Mr Green should not be sedated simply because his carer says he is demented and difficult to manage. The unsafe shortcut is, "He is demented; sedate him so I can manage." That request may come from carer stress, but it also comes from a person potentially implicated in exploitation. The stem contains possible psychosis, capacity concern and elder abuse; sedation would obscure the assessment and may place him back under the control of an unsafe carer.

His statement, "She is poisoning my tea to get the house," could be late-onset psychosis, dementia-related paranoia, delirium or a distorted account of real exploitation. It must not be accepted uncritically or dismissed uncritically. The neighbour says, "The carer changed the locks last month," and Mr Green says, "I have bruises but I fall." These are concrete safeguarding clues. The paranoia may contain a kernel of truth, and the assessment must protect him while investigating.

Police ask, "Can we force entry under mental health powers?" The legal answer depends on immediate risk, welfare powers, mental health legislation, police powers and whether entry is necessary and proportionate. I would not use mental health powers merely to resolve a property dispute or make sedation easier. If he is at immediate risk, barricaded without food/medical care, or unable to engage because of mental disorder, entry may be justified through the appropriate route. I would seek the least confrontational approach first, using a trusted veteran contact, GP, or family member if safe.

Mr Green is the vulnerable person, but staff and police safety also matter. His veteran identity and distrust of government services means a heavy police response could escalate fear. I would assess from outside if possible, gather collateral from GP, neighbour, carer, family and services, and separate him from the carer for interview if safe. I would check cognition, delirium, psychosis, medication, alcohol, financial control, bruising, locks, bank access and capacity for residence/finances.

I would document the poisoning belief, bruises, lock change, carer request for sedation, police entry discussion, capacity and elder abuse concerns, and the rationale for any entry, removal, admission or safeguarding referral. The note is defensible because it shows I did not sedate away a possible victim's disclosure, and did not ignore genuine risk because it sounded paranoid.`
  },
  {
    "id": "FINAL-038",
    "topic": "old_age",
    "difficulty": "consultant",
    "title": "Migrant elder refusing residential care after wandering",
    "candidateRole": "old age psychiatrist",
    "setting": "Geriatric ward discharge meeting",
    "stem": "You are the old age psychiatrist. Geriatric ward discharge meeting.\n\nMrs Haddad, an 84-year-old Arabic-speaking woman, has dementia and was found at a train station trying to go to her childhood home overseas. Mrs Haddad says, \"My real home is not this place.\" \n\nSon says, \"Just keep her here until the nursing home bed opens.\" Social worker asks, \"Do we need guardianship if family agree?\" Grandchild says, \"She leaves the stove on when we sleep.\" No interpreter has been used because family prefer to translate.\n\nDaughter says, \"Residential care will shame us in our community.\" You must decide whether she has accommodation capacity and safest lawful discharge.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "hospital-as-holding shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "Just keep her here until the nursing home bed opens.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass dementia, grief and displacement affecting capacity, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Just keep her here until the nursing home bed opens.' without first formulating dementia, grief and displacement affecting capacity, immediate safety and a defensible disposition.",
        "keywords": [
          "hospital-as-holding shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "dementia, grief and displacement affecting capacity — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "My real home is not this place.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around dementia, grief and displacement affecting capacity, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "dementia, grief and displacement affecting capacity",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "guardianship and accommodation capacity — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Do we need guardianship if family agree?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "guardianship and accommodation capacity",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "home safety risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She leaves the stove on when we sleep.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect home safety risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "home safety risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Residential care will shame us in our community.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether she has accommodation capacity and safest lawful discharge",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Mrs Haddad should not simply be kept in hospital until a nursing home bed opens. The unsafe shortcut is the son's statement, "Just keep her here until the nursing home bed opens." Hospital cannot be used as informal detention without legal authority, even if the family agrees. At the same time, she cannot be discharged home without assessing wandering, stove risk and accommodation capacity.

Her statement, "My real home is not this place," is the key formulation. It may reflect dementia-related disorientation, migration grief, longing for childhood home, or distress at cultural displacement. It should not be dismissed as mere confusion. The fact that she was found at a train station trying to go to her childhood home overseas shows that this belief has behavioural consequences. The grandchild's statement, "She leaves the stove on when we sleep," adds concrete household danger to the wandering risk.

The social worker asks, "Do we need guardianship if family agree?" Family agreement does not replace the patient's capacity or lawful substitute decision-making. I would assess accommodation capacity with a professional Arabic interpreter, because no interpreter has been used and family prefer to translate. Family interpretation is inadequate when the decision involves residential care, shame, and possible restriction of liberty.

The vulnerable person is Mrs Haddad, at risk of wandering, burns, exploitation, and culturally unsafe placement. The family is also under pressure because the daughter says, "Residential care will shame us in our community." I would acknowledge shame and cultural expectations of family care, explore whether additional home supports could safely reduce risk, and involve bicultural workers or interpreters. But family shame cannot justify unsafe discharge or unlawful detention.

I would document the train-station incident, stove risk, the exact home quote, interpreter requirement, capacity assessment, family agreement limits, guardianship/legal pathway and alternatives considered. A defensible disposition shows that the team respected culture and family, but grounded the decision in Mrs Haddad's capacity, safety and lawful authority.`
  },
  {
    "id": "FINAL-039",
    "topic": "old_age",
    "difficulty": "consultant",
    "title": "Older man with firearms, depression and rural culture",
    "candidateRole": "old age psychiatrist",
    "setting": "Rural GP urgent consult",
    "stem": "You are the old age psychiatrist. Rural GP urgent consult.\n\nBill, a 76-year-old farmer, has depression after drought and refuses to surrender firearms. Bill says, \"A man without his rifle is already dead.\" \n\nGP says, \"He denies suicidal thoughts, so I cannot push it.\" Police asks, \"What is our authority around firearms?\" Wife says, \"He sits in the shed with the gun safe open.\" Firearms are central to his rural identity and community status.\n\nBill says, \"Do not tell the neighbours I am seeing psychiatry.\" You must decide whether to manage firearm access, suicide risk and confidentiality.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "denial-of-SI shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "He denies suicidal thoughts, so I cannot push it.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass suicide risk and identity tied to firearms, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He denies suicidal thoughts, so I cannot push it.' without first formulating suicide risk and identity tied to firearms, immediate safety and a defensible disposition.",
        "keywords": [
          "denial-of-SI shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "suicide risk and identity tied to firearms — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "A man without his rifle is already dead.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around suicide risk and identity tied to firearms, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "suicide risk and identity tied to firearms",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "public safety/firearms legal pathway — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "What is our authority around firearms?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "public safety/firearms legal pathway",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "immediate family safety concern — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He sits in the shed with the gun safe open.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect immediate family safety concern, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "immediate family safety concern",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Do not tell the neighbours I am seeing psychiatry.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to manage firearm access, suicide risk and confidentiality",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Bill's firearms should not be left unaddressed because he denies suicidal thoughts. The unsafe shortcut is the GP's statement, "He denies suicidal thoughts, so I cannot push it." In a depressed older farmer after drought, denial alone is not reassuring when his wife reports he sits in the shed with the gun safe open. Firearms create a high-lethality, low-rescue risk, and access to means is itself a major modifiable factor.

Bill's statement, "A man without his rifle is already dead," is the key cultural and risk phrase. It links firearms to identity, masculinity, rural status and perhaps hopelessness. Removing guns may feel to him like removing personhood, so the intervention must be respectful and collaborative where possible. But the same sentence also suggests that his sense of life and worth is dangerously fused with firearm possession.

Police ask, "What is our authority around firearms?" I would clarify local firearms legislation, licensing, storage requirements, police powers, medical notification duties and confidentiality limits. The ethical tension is confidentiality versus prevention of serious harm. Bill says, "Do not tell the neighbours I am seeing psychiatry," and that concern should be respected; disclosure should be limited and purposeful. But if there is serious suicide risk with firearm access, limited communication with police, GP or family may be justified to restrict means.

His wife is a vulnerable third party because she is living with the risk, observing the gun safe open, and may be responsible for emergency response. I would not ask her to manage firearms alone if that places her at risk. I would discuss safe temporary removal or surrender of firearms through police or a trusted lawful route, assess depression, alcohol, cognition, pain, financial stress, shame, and suicidal planning, and consider admission if risk cannot be managed.

I would document the denial, drought depression context, firearm identity quote, wife's collateral, police/legal advice, confidentiality reasoning, means-restriction plan and follow-up. The documentation is defensible because it shows that I respected rural identity and privacy while acting on the lethal risk created by firearms access.`
  },
  {
    "id": "FINAL-040",
    "topic": "old_age",
    "difficulty": "consultant",
    "title": "Capacity for financial decision with fluctuating delirium",
    "candidateRole": "old age CL psychiatrist",
    "setting": "Surgical ward after hip fracture",
    "stem": "You are the old age CL psychiatrist. Surgical ward after hip fracture.\n\nMrs Rossi, an 88-year-old Italian-speaking woman, is delirious post-operatively and her nephew brings property transfer papers. Mrs Rossi says, \"I don't know what I signed; I was in pain.\" \n\nNephew says, \"She agreed yesterday; just witness it.\" Nurse asks, \"Can we stop visitors if we suspect exploitation?\" Mrs Rossi says, \"My pension card is missing.\" No interpreter was used and the nephew speaks for her.\n\nNephew says, \"In our family we handle these things privately.\" You must decide whether to assess capacity, protect records and escalate abuse concerns.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "witnessing-signature shortcut — unsafe shortcut under pressure",
        "category": "risk_vulnerable",
        "severity": "critical",
        "clueInStem": "She agreed yesterday; just witness it.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass delirium and financial capacity vulnerability, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'She agreed yesterday; just witness it.' without first formulating delirium and financial capacity vulnerability, immediate safety and a defensible disposition.",
        "keywords": [
          "witnessing-signature shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "delirium and financial capacity vulnerability — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I don't know what I signed; I was in pain.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around delirium and financial capacity vulnerability, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "delirium and financial capacity vulnerability",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "safeguarding and visitor restriction — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we stop visitors if we suspect exploitation?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "safeguarding and visitor restriction",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "possible financial exploitation — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "My pension card is missing.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect possible financial exploitation, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "possible financial exploitation",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "In our family we handle these things privately.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to assess capacity, protect records and escalate abuse concerns",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Mrs Rossi's property papers should not be witnessed simply because her nephew says she agreed yesterday. The unsafe shortcut is, "She agreed yesterday; just witness it." She is 88, post-operative after hip fracture, delirious, in pain, Italian-speaking, and says, "I don't know what I signed; I was in pain." That statement makes any recent signature highly suspect and requires safeguarding, not witnessing.

Her phrase, "I don't know what I signed; I was in pain," is the key capacity clue. It suggests she may not have understood, retained or weighed the property transfer decision at the time. Delirium fluctuates, pain and opioids can impair attention, and no interpreter was used. The nephew speaking for her makes the assessment more compromised. I would not assess capacity for a major financial transaction through the person seeking the transaction.

The nurse asks, "Can we stop visitors if we suspect exploitation?" The legal and ethical tension is between family access and safeguarding. If there is reasonable concern about exploitation, the hospital can restrict or supervise visits according to policy while assessing risk, especially if visitors are pressuring a delirious patient. The least restrictive step may be supervised visiting, interpreter-assisted private interview, securing documents, and social work/legal escalation rather than a blanket ban unless immediate risk requires it.

Mrs Rossi is the vulnerable person. Her statement, "My pension card is missing," adds possible financial abuse. The nephew's claim, "In our family we handle these things privately," may reflect culture, but privacy cannot be used to conceal exploitation. I would involve a professional Italian interpreter, assess delirium, cognition and pain, speak with her alone, preserve any documents, notify the treating team, social work, safeguarding/elder abuse service, and possibly police or tribunal depending on evidence.

I would document the delirium, pain, language barrier, exact statement about not knowing what she signed, missing pension card, nephew's request, visitor restrictions, capacity findings and escalation pathway. The record is defensible because it shows the hospital did not become a witness to exploitation and did not use culture as a reason to ignore a vulnerable patient's warning.`
  },
  {
    "id": "FINAL-041",
    "topic": "cl_psychiatry",
    "difficulty": "consultant",
    "title": "Cancer refusal with depressive guilt",
    "candidateRole": "psycho-oncology CL consultant",
    "setting": "Oncology ward urgent chemotherapy decision",
    "stem": "You are the psycho-oncology CL consultant. Oncology ward urgent chemotherapy decision.\n\nMaria, a 46-year-old woman with newly diagnosed lymphoma, refuses curative chemotherapy amid severe depression. Maria says, \"I deserve this cancer; treatment is wasted on me.\" \n\nOncologist says, \"Delay will reduce cure; can we override her?\" Registrar asks, \"Does depression automatically remove capacity?\" Husband says, \"Last month she was begging to start treatment.\" Her mother prefers traditional healer remedies from their community.\n\nMaria says, \"Do not involve my husband; he should find someone better.\" You must decide whether refusal is capacitous and how to treat depression urgently.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "override-without-process shortcut — unsafe shortcut under pressure",
        "category": "physical_health",
        "severity": "critical",
        "clueInStem": "Delay will reduce cure; can we override her?",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass depression impairing capacity to refuse chemotherapy, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Delay will reduce cure; can we override her?' without first formulating depression impairing capacity to refuse chemotherapy, immediate safety and a defensible disposition.",
        "keywords": [
          "override-without-process shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "depression impairing capacity to refuse chemotherapy — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I deserve this cancer; treatment is wasted on me.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around depression impairing capacity to refuse chemotherapy, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "depression impairing capacity to refuse chemotherapy",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "capacity and substitute decision pathway — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Does depression automatically remove capacity?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "capacity and substitute decision pathway",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "state-dependent refusal collateral — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "Last month she was begging to start treatment.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect state-dependent refusal collateral, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "state-dependent refusal collateral",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Do not involve my husband; he should find someone better.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether refusal is capacitous and how to treat depression urgently",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Maria's chemotherapy refusal should not be overridden simply because delay may reduce cure, but it also should not be accepted as a settled autonomous refusal without assessing depressive guilt. The unsafe shortcut is the oncologist's question, "Delay will reduce cure; can we override her?" The urgency is real because curative lymphoma treatment is time-sensitive, but urgency does not make psychiatry a permission slip for forced chemotherapy. A consultant response has to protect Maria's autonomy, assess her capacity, treat the underlying depression and document the reasoning clearly.

The key phrase is Maria's statement, "I deserve this cancer; treatment is wasted on me." That is not a neutral weighing of chemotherapy burden against benefit. It suggests pathological guilt, worthlessness and possibly psychotic depressive thinking, directly linked to her refusal. I would assess whether she understands the diagnosis, the chance of cure, the risks of delay, the burdens of chemotherapy and the alternatives, but the central issue is whether she can appreciate that treatment may cure her when her self-worth is so severely distorted by depression that she believes she deserves to die of cancer.

The legal and ethical tension is captured by the registrar's question, "Does depression automatically remove capacity?" It does not. Depression can coexist with capacity, and a patient can refuse curative treatment for values-based reasons. But here the refusal appears to arise from depressive self-condemnation, and her husband reports, "Last month she was begging to start treatment," suggesting a recent and illness-linked reversal. I would clarify the timeline, prior values, current depressive symptoms and whether antidepressant treatment might restore capacity quickly enough to preserve the treatment window.

Her husband and family are vulnerable in different ways. The husband is excluded by her statement, "Do not involve my husband; he should find someone better," which sounds more like depressive guilt than a stable relational boundary. I would explore confidentiality carefully, seek her consent to involve him, and if she refuses, consider whether limited family collateral is justified for capacity assessment while minimising disclosure. Her mother's preference for traditional healing deserves respectful exploration; it may influence Maria's identity and her view of chemotherapy, and I would seek to understand rather than dismiss it.

I would document the oncology urgency, the exact guilt-laden refusal, the husband's collateral that her wishes changed, the capacity findings, the cultural discussion about traditional healing, and the treatment plan for depression. If refusal is capacitous, the record must show why. If it is not capacitous, the record must show the lawful pathway, why delay was unsafe, and why any temporary override was proportionate to preserve a chance of cure while treating the mental disorder driving the refusal.`
  },
  {
    "id": "FINAL-042",
    "topic": "cl_psychiatry",
    "difficulty": "consultant",
    "title": "ICU fluctuating capacity and family demanding everything",
    "candidateRole": "ICU CL psychiatrist",
    "setting": "ICU family meeting after septic shock",
    "stem": "You are the ICU CL psychiatrist. ICU family meeting after septic shock.\n\nMr Singh, a 62-year-old Punjabi-speaking man, is intermittently awake after multi-organ failure and gives inconsistent wishes. Mr Singh says, \"No more tubes; let me go.\" \n\nWife says, \"Our faith says you must continue everything.\" ICU consultant asks, \"Can he refuse dialysis today?\" Daughter says, \"He said he never wanted machines.\" Family has interpreted because staff say he understands enough English.\n\nSon says, \"Stopping treatment is killing him.\" You must decide whether to determine capacity and guide goals-of-care lawfully.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "religious-demand shortcut — unsafe shortcut under pressure",
        "category": "physical_health",
        "severity": "critical",
        "clueInStem": "Our faith says you must continue everything.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass fluctuating ICU capacity and possible delirium, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Our faith says you must continue everything.' without first formulating fluctuating ICU capacity and possible delirium, immediate safety and a defensible disposition.",
        "keywords": [
          "religious-demand shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "fluctuating ICU capacity and possible delirium — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "No more tubes; let me go.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around fluctuating ICU capacity and possible delirium, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "fluctuating ICU capacity and possible delirium",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "capacity for life-sustaining treatment — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can he refuse dialysis today?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "capacity for life-sustaining treatment",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "prior wishes conflict — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He said he never wanted machines.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect prior wishes conflict, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "prior wishes conflict",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Stopping treatment is killing him.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to determine capacity and guide goals-of-care lawfully",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Mr Singh's wish to stop treatment should not be overridden simply because his family says, "Our faith says you must continue everything." That is the unsafe shortcut: allowing family distress or religious pressure to replace the patient's own capacity and values. At the same time, his statement cannot be accepted uncritically because he is intermittently awake after multi-organ failure and gives inconsistent wishes. The consultant task is to determine whether "No more tubes; let me go" reflects a valid, informed, decision-specific refusal of dialysis, or delirium, or a fluctuating wish that requires more careful assessment.

The phrase "No more tubes; let me go" is clinically important because it may express a genuine wish to limit burdensome treatment. It is not automatically suicidal or depressive. However, the fact that he later gives different wishes and that family have been interpreting because staff think he understands "enough English" means the assessment so far is not valid. I would require a professional Punjabi interpreter, assess at the best time of day when he is most awake, and ask what he understands about his prognosis, what dialysis is doing, what stopping would mean, and what matters most to him.

The legal tension is the ICU consultant's question, "Can he refuse dialysis today?" If he has decision-specific capacity at the relevant time, he can refuse dialysis even if refusal may hasten death. If he lacks capacity, decisions should follow substitute decision or best-interests law, incorporating prior expressed wishes such as the daughter's collateral, "He said he never wanted machines." The wife and son may see stopping treatment as killing him, but the law and ethics distinguish between withdrawing burdensome treatment and causing death.

The vulnerable parties here are not only Mr Singh but also the divided family, who may be left with guilt and conflict. I would hold a structured goals-of-care meeting with ICU, interpreter, family and spiritual care if wanted. I would acknowledge the wife's faith-based distress and the son's statement, "Stopping treatment is killing him," while explaining that treatment decisions must be guided by Mr Singh's valid wishes and lawful process, not by family unanimity. Cultural and religious sensitivity matters, but it cannot replace the patient's own will.

I would document the interpreter use, fluctuations in consciousness, delirium assessment, capacity findings, prognosis provided by ICU, prior wishes, family disagreement, spiritual supports and the legal basis for continuing or limiting dialysis. That documentation is defensible because it shows that the decision was not made by family pressure, medical paternalism or a single distressed sentence, but by a careful capacity and values assessment in a time-critical ICU context.`
  },
  {
    "id": "FINAL-043",
    "topic": "cl_psychiatry",
    "difficulty": "consultant",
    "title": "Chronic pain opioid dependence and staff splitting",
    "candidateRole": "CL pain psychiatrist",
    "setting": "Surgical ward after repeated negative investigations",
    "stem": "You are the CL pain psychiatrist. Surgical ward after repeated negative investigations.\n\nRosa, a 39-year-old woman with chronic abdominal pain, requests IV fentanyl while on high-dose oxycodone. Rosa says, \"No one believes me because I have trauma and take opioids.\" \n\nSurgical registrar says, \"She is manipulating us.\" Pain team asks, \"Can we stop all opioids today?\" Partner says, \"She will buy tablets on the street.\" Male staff examinations trigger flashbacks from childhood sexual abuse.\n\nNurse says, \"Half the team gives extra doses and half refuses.\" You must decide whether to create a unified trauma-informed pain/addiction plan.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "stigma shortcut — unsafe shortcut under pressure",
        "category": "physical_health",
        "severity": "critical",
        "clueInStem": "She is manipulating us.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass functional pain, trauma and opioid dependence, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'She is manipulating us.' without first formulating functional pain, trauma and opioid dependence, immediate safety and a defensible disposition.",
        "keywords": [
          "stigma shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "functional pain, trauma and opioid dependence — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "No one believes me because I have trauma and take opioids.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around functional pain, trauma and opioid dependence, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "functional pain, trauma and opioid dependence",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "opioid withdrawal and harm reduction — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we stop all opioids today?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "opioid withdrawal and harm reduction",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "overdose/illicit use risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She will buy tablets on the street.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect overdose/illicit use risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "overdose/illicit use risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Half the team gives extra doses and half refuses.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to create a unified trauma-informed pain/addiction plan",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Rosa's care should not be driven by the ward's stigmatising shortcut that "She is manipulating us." That phrase is unsafe because it converts a complex pain, trauma and opioid-dependence problem into a moral judgement. It leads some staff to refuse analgesia punitively and others to give extra doses reactively. Neither response is consultant-level care. The live task is to contain the whole ward system with one trauma-informed, pain-informed and addiction-informed plan.

Rosa's statement, "No one believes me because I have trauma and take opioids," is the key formulation. It tells me that disbelief itself is part of the clinical problem. Her pain may be real, opioid dependence may be present, opioid-induced hyperalgesia may be contributing, and trauma may be amplifying distress and body threat. I would validate that she is suffering while also explaining that IV fentanyl on top of high-dose oxycodone may worsen risk, dependence, sedation and pain sensitivity.

The legal and ethical tension is the pain team's question, "Can we stop all opioids today?" Abrupt cessation may be physically unsafe, ethically punitive and clinically destabilising if dependence is established. Conversely, escalating IV fentanyl because the ward is under pressure may worsen harm. I would assess current opioid dose, withdrawal risk, sedation, respiratory risk, pain diagnosis, functional goals, and addiction history, then negotiate a clear plan involving pain medicine, addiction medicine and psychiatry with one agreed prescriber and one agreed protocol.

Her partner's warning, "She will buy tablets on the street," is not a reason to prescribe unlimited opioids, but it is a real overdose and illicit-supply risk that must be addressed. Male staff examinations triggering flashbacks from childhood sexual abuse require immediate trauma-informed changes: consent before touch, female staff where possible, chaperones, limiting repeated examinations and explaining procedures. The nurse's statement, "Half the team gives extra doses and half refuses," tells me the ward system has split, and I would address that in a multidisciplinary meeting with clear documentation of the agreed plan so all staff respond consistently.

I would document the validation of pain, the opioid risk formulation, the reason IV fentanyl is or is not appropriate, the withdrawal/taper plan, trauma-informed examination arrangements, partner collateral, and the unified staff approach. Defensible documentation shows that the team did not punish Rosa for trauma or dependence, and also did not collude with unsafe opioid escalation.`
  },
  {
    "id": "FINAL-044",
    "topic": "cl_psychiatry",
    "difficulty": "consultant",
    "title": "Transplant listing and alcohol relapse",
    "candidateRole": "transplant psychiatry consultant",
    "setting": "Liver transplant selection meeting",
    "stem": "You are the transplant psychiatry consultant. Liver transplant selection meeting.\n\nPeter, a 51-year-old man with cirrhosis, has relapsed to alcohol while being assessed for transplant. Peter says, \"If I am not listed, I may as well drink myself to death.\" \n\nHepatologist says, \"He broke the rules; decline him.\" Coordinator asks, \"Can psychiatry certify motivation?\" Wife says, \"I hide bottles because I cannot watch him die.\" Peter is from a community where alcohol use is hidden due to shame.\n\nBrother says, \"Do not put alcoholism in the letter.\" You must decide whether to balance transplant candidacy, addiction treatment and risk.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "punitive-delisting shortcut — unsafe shortcut under pressure",
        "category": "physical_health",
        "severity": "critical",
        "clueInStem": "He broke the rules; decline him.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass suicide risk and alcohol use in transplant context, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He broke the rules; decline him.' without first formulating suicide risk and alcohol use in transplant context, immediate safety and a defensible disposition.",
        "keywords": [
          "punitive-delisting shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "suicide risk and alcohol use in transplant context — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "If I am not listed, I may as well drink myself to death.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around suicide risk and alcohol use in transplant context, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "suicide risk and alcohol use in transplant context",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "transplant ethics and capacity of commitment — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can psychiatry certify motivation?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "transplant ethics and capacity of commitment",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "carer burnout and safety — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I hide bottles because I cannot watch him die.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect carer burnout and safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "carer burnout and safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Do not put alcoholism in the letter.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to balance transplant candidacy, addiction treatment and risk",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Peter should not be declined for transplant simply because the hepatologist says, "He broke the rules; decline him." That is an unsafe moral shortcut. Alcohol relapse during transplant assessment is clinically serious, but a consultant psychiatrist's role is not to certify virtue or punish non-compliance. The task is to assess alcohol use disorder, suicide risk, relapse drivers, treatment engagement, supports and whether transplant candidacy can be ethically and safely considered after proper formulation.

Peter's statement, "If I am not listed, I may as well drink myself to death," is the central clinical phrase. It may express demoralisation, suicidal intent, bargaining, alcohol craving, or catastrophic thinking linked to transplant uncertainty. I would assess suicide risk directly, including intent, plan, access to alcohol, hopelessness, prior attempts and whether relapse is accelerating medical risk. I would not treat the statement as manipulation, but I also would not let it coerce a hasty listing decision.

The coordinator asks, "Can psychiatry certify motivation?" I would reject that framing. Motivation is dynamic, ambivalent and context-dependent; it cannot be certified as a static quality. What I can provide is a formulation of addiction severity, relapse precipitants, insight, engagement with treatment, family support, psychiatric comorbidity, risk of non-adherence, and a plan to reduce risk. The ethical tension is fairness in scarce organ allocation versus non-discriminatory treatment of people with alcohol use disorder, and my letter must be honest, not sanitised.

His wife says, "I hide bottles because I cannot watch him die," identifying a vulnerable carer who is over-functioning and distressed. I would involve her, with Peter's consent, in a support plan that does not make her the police officer of his drinking. His brother's request, "Do not put alcoholism in the letter," reflects shame in a community where alcohol use is hidden, but an inaccurate transplant letter would be unethical and unsafe. I would document alcohol use factually and sensitively, with appropriate attention to stigma without allowing stigma to drive concealment.

I would document relapse details, suicide assessment, addiction formulation, family burden, cultural shame, treatment recommendations, and what psychiatry can and cannot certify for the transplant committee. That documentation is defensible because it balances compassion for Peter with stewardship of transplant decision-making and the need for transparent risk formulation.`
  },
  {
    "id": "FINAL-045",
    "topic": "cl_psychiatry",
    "difficulty": "consultant",
    "title": "Functional seizures and unsafe discharge conflict",
    "candidateRole": "CL psychiatrist",
    "setting": "Neurology ward with repeated functional seizure admissions",
    "stem": "You are the CL psychiatrist. Neurology ward with repeated functional seizure admissions.\n\nAnika, a 22-year-old woman, has functional seizures after trauma and is demanding ICU monitoring. Anika says, \"If you discharge me, you are saying I am faking.\" \n\nNeurology registrar says, \"There is nothing neurological, discharge her.\" ED asks, \"Can we refuse future ambulances?\" Mother says, \"She stops breathing at home and I panic.\" Anika's community views psychological illness as weakness.\n\nNurse says, \"Staff are exhausted and do not know what to do.\" You must decide whether to provide safe explanation, plan and non-iatrogenic disposition.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "dismissive-discharge shortcut — unsafe shortcut under pressure",
        "category": "physical_health",
        "severity": "critical",
        "clueInStem": "There is nothing neurological, discharge her.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass functional neurological disorder with validation challenge, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'There is nothing neurological, discharge her.' without first formulating functional neurological disorder with validation challenge, immediate safety and a defensible disposition.",
        "keywords": [
          "dismissive-discharge shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "functional neurological disorder with validation challenge — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "If you discharge me, you are saying I am faking.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around functional neurological disorder with validation challenge, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "functional neurological disorder with validation challenge",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "policy/ethics around frequent presentations — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we refuse future ambulances?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "policy/ethics around frequent presentations",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "family anxiety and safety-seeking — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She stops breathing at home and I panic.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect family anxiety and safety-seeking, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "family anxiety and safety-seeking",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Staff are exhausted and do not know what to do.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to provide safe explanation, plan and non-iatrogenic disposition",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Anika should not be discharged with the message that "There is nothing neurological, discharge her." That is the unsafe shortcut. Functional seizures are not "nothing"; they are real episodes at the interface of brain, body, threat physiology and trauma, and invalidating discharge can worsen symptoms, increase ED use and destroy engagement. The consultant task is to provide a safe explanation and a non-iatrogenic plan, not to choose between ICU-level escalation and dismissal.

Anika's statement, "If you discharge me, you are saying I am faking," identifies the central therapeutic risk. She equates discharge with disbelief, so the explanation must be precise: the seizures are real, not consciously produced, not epilepsy on current evidence, and best treated through a rehabilitation/psychological approach rather than repeated ICU monitoring. I would check that appropriate neurological assessment has been done and that there are no red flags, but once FND is the working diagnosis the task shifts to explanation, validation and treatment, not continued investigation.

The legal and ethical issue is ED's question, "Can we refuse future ambulances?" Blanket refusal would be unsafe and likely inappropriate. Future episodes may still require medical assessment if there are injuries, prolonged events, diagnostic uncertainty or risk. But the team can create an agreed crisis plan to reduce unnecessary escalation, including how paramedics, ED, neurology and the family respond. The aim is not abandonment; it is consistent, proportionate care.

Her mother says, "She stops breathing at home and I panic," and this is important collateral. The mother is frightened and may be reinforcing emergency responses because she has not been given a credible plan. I would involve her in education, identify what she should do during events, when to call emergency services, and how to avoid inadvertently escalating disability. Anika's community views psychological illness as weakness, so I would avoid language that suggests symptoms are imaginary or psychiatric in a stigmatising sense, and use the positive FND formulation.

I would document the positive FND formulation, the validation statement, the agreed safety thresholds for emergency care, the family plan, staff-exhaustion issue, and follow-up pathway. The record is defensible because it shows discharge was not abandonment, but part of a coherent, consistent and clinically validated treatment plan.`
  },
  {
    "id": "FINAL-046",
    "topic": "cl_psychiatry",
    "difficulty": "consultant",
    "title": "Eating disorder on medical ward resisting refeeding",
    "candidateRole": "CL psychiatrist",
    "setting": "Medical ward managing severe electrolyte disturbance",
    "stem": "You are the CL psychiatrist. Medical ward managing severe electrolyte disturbance.\n\nTara, a 24-year-old woman with anorexia, has hypophosphataemia and refuses phosphate and feeds. Tara says, \"A low phosphate is proof I am finally clean.\" \n\nMedical team says, \"She is adult and refusing; can we discharge?\" Registrar asks, \"Can we use the MHA for refeeding?\" Partner says, \"She faints when she showers.\" Tara is a competitive dancer and her community praises thinness.\n\nDietitian says, \"She bargains every gram of feed.\" You must decide whether to treat medically against refusal and with what legal safeguards.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "autonomy-discharge shortcut — unsafe shortcut under pressure",
        "category": "physical_health",
        "severity": "critical",
        "clueInStem": "She is adult and refusing; can we discharge?",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass anorexic cognition and medical risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'She is adult and refusing; can we discharge?' without first formulating anorexic cognition and medical risk, immediate safety and a defensible disposition.",
        "keywords": [
          "autonomy-discharge shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "anorexic cognition and medical risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "A low phosphate is proof I am finally clean.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around anorexic cognition and medical risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "anorexic cognition and medical risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "legal basis for compulsory treatment — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we use the MHA for refeeding?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "legal basis for compulsory treatment",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "immediate medical vulnerability — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She faints when she showers.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect immediate medical vulnerability, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "immediate medical vulnerability",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "She bargains every gram of feed.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to treat medically against refusal and with what legal safeguards",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Tara should not be discharged because she is "adult and refusing." That is the unsafe shortcut in a medically unstable eating-disorder presentation. Adult status does not make a refusal capacitous when anorexic cognition may be distorting appreciation and weighing, and hypophosphataemia creates immediate risk of arrhythmia, seizures, weakness and death. The medical team must not convert a dangerous refusal into discharge simply to avoid legal complexity.

Tara's statement, "A low phosphate is proof I am finally clean," is the key phrase. It shows that she is not merely refusing phosphate because she dislikes treatment; she is interpreting a dangerous biochemical abnormality as a desired achievement. That strongly suggests eating-disorder psychopathology is impairing her appreciation of medical risk and her ability to weigh treatment. I would assess capacity specifically for refusing phosphate, feeds and admission, and I would ask whether she can explain what hypophosphataemia can do to her heart and body, not merely repeat that doctors are worried.

The registrar asks, "Can we use the MHA for refeeding?" The answer depends on jurisdiction, but the principle is that life-saving treatment may require a lawful pathway when mental disorder drives refusal and serious medical harm is imminent. This may be Mental Health Act, guardianship or emergency medical authority depending on local law. I would involve medical, eating-disorder specialists, dietetics and legal advice if needed, but I would not allow uncertainty to delay emergency correction where lawful.

The partner's report, "She faints when she showers," shows immediate functional danger and supports inpatient medical stabilisation. Tara's identity as a competitive dancer and a community that praises thinness are not excuses, but they explain why the illness is reinforced. The dietitian's statement, "She bargains every gram of feed," indicates that negotiations may become illness-driven micro-bargaining unless contained by a clear, compassionate refeeding plan.

I would document her phosphate level and medical risk, the exact "clean" statement, capacity findings, legal pathway, refeeding and electrolyte plan, partner collateral, and the rationale for any treatment against refusal. That documentation is defensible because it shows the team recognised a life-threatening medical condition driven by psychiatric illness and acted proportionately.`
  },
  {
    "id": "FINAL-047",
    "topic": "cl_psychiatry",
    "difficulty": "consultant",
    "title": "Delirium, restraint and family complaint",
    "candidateRole": "CL old age psychiatrist",
    "setting": "Orthopaedic ward after hip surgery",
    "stem": "You are the CL old age psychiatrist. Orthopaedic ward after hip surgery.\n\nMr Wilson, an 83-year-old man, is hallucinating and pulling drains after oxycodone and urinary retention. Mr Wilson says, \"There are rats in the walls.\" \n\nOrthopaedic registrar says, \"Chart haloperidol so he stops delaying rehab.\" Daughter asks, \"Why is he tied to the bed?\" Patient says, \"I cannot hear anyone.\" His hearing aids are in the bedside drawer and no family member was called.\n\nNUM says, \"We do not have staff for one-to-one.\" You must decide whether to treat delirium causes and reduce restraint under system pressure.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "sedation-for-flow shortcut — unsafe shortcut under pressure",
        "category": "physical_health",
        "severity": "critical",
        "clueInStem": "Chart haloperidol so he stops delaying rehab.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass postoperative delirium, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Chart haloperidol so he stops delaying rehab.' without first formulating postoperative delirium, immediate safety and a defensible disposition.",
        "keywords": [
          "sedation-for-flow shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "postoperative delirium — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "There are rats in the walls.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around postoperative delirium, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "postoperative delirium",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "restraint governance and least restrictive care — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Why is he tied to the bed?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "restraint governance and least restrictive care",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "sensory impairment vulnerability — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I cannot hear anyone.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect sensory impairment vulnerability, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "sensory impairment vulnerability",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "We do not have staff for one-to-one.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to treat delirium causes and reduce restraint under system pressure",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Mr Wilson should not simply be given haloperidol so he "stops delaying rehab." That is the unsafe shortcut. Delirium after hip surgery is a medical emergency and a marker of vulnerability, not a behavioural nuisance interfering with throughput. The fact that he is hallucinating, pulling drains, has had oxycodone and urinary retention, and says "There are rats in the walls" points to postoperative delirium with modifiable precipitants.

His phrase "There are rats in the walls" shows a frightening perceptual disturbance, not wilful non-cooperation. I would assess and treat pain, urinary retention, constipation, infection, hypoxia, dehydration, medication toxicity, sleep deprivation and sensory deprivation. Haloperidol may be considered only if he is severely distressed or immediately unsafe after addressing causes and non-pharmacological strategies, and even then at the lowest effective dose with ECG, Parkinsonism, sedation and falls risk considered.

The daughter asks, "Why is he tied to the bed?" That is the legal and ethical hinge. Restraint may sometimes be used briefly to prevent immediate harm, but it requires lawful authority, documentation, monitoring and active review. It cannot be justified because the ward lacks staff. His statement "I cannot hear anyone" and the fact that his hearing aids are in the bedside drawer are simple but critical clues: the team may be worsening delirium by failing to correct sensory impairment.

No family member was called, and family involvement could help reorientation and reduce restraint. The NUM says, "We do not have staff for one-to-one," which is a real system pressure, but it does not justify leaving him tied to a bed without addressing causes. I would escalate staffing concerns, consider specialling if needed, use family presence where appropriate, and implement a delirium care bundle.

I would document the delirium formulation, causative factors, medication review, sensory aids, restraint review, family communication, staffing escalation, and the narrow indication for any antipsychotic. This is defensible because it shows restraint and medication were not used for convenience but as last-resort safety measures while the underlying delirium was treated.`
  },
  {
    "id": "FINAL-048",
    "topic": "cl_psychiatry",
    "difficulty": "consultant",
    "title": "Capacity after stroke and aphasia",
    "candidateRole": "CL psychiatrist",
    "setting": "Stroke unit discharge planning meeting",
    "stem": "You are the CL psychiatrist. Stroke unit discharge planning meeting.\n\nMr Liu, a 68-year-old Mandarin-speaking man with aphasia, refuses rehabilitation and points toward the exit. Mr Liu says, \"Home, home, no hospital.\" \n\nRehab consultant says, \"He lacks capacity because he cannot explain.\" Wife asks, \"Can I sign him into rehab?\" Son says, \"He falls whenever he stands.\" No speech pathologist or interpreter has assisted the capacity assessment.\n\nWife says, \"In our family, I decide health matters.\" You must decide whether capacity can be assessed with communication supports and how to plan rehab.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "aphasia-incapacity shortcut — unsafe shortcut under pressure",
        "category": "physical_health",
        "severity": "critical",
        "clueInStem": "He lacks capacity because he cannot explain.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass communication impairment versus refusal, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He lacks capacity because he cannot explain.' without first formulating communication impairment versus refusal, immediate safety and a defensible disposition.",
        "keywords": [
          "aphasia-incapacity shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "communication impairment versus refusal — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Home, home, no hospital.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around communication impairment versus refusal, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "communication impairment versus refusal",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "substitute decision-making — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can I sign him into rehab?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "substitute decision-making",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "physical vulnerability — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He falls whenever he stands.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect physical vulnerability, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "physical vulnerability",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "In our family, I decide health matters.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether capacity can be assessed with communication supports and how to plan reh",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Mr Liu should not be declared incapable simply because aphasia prevents him from explaining himself in ordinary speech. The unsafe shortcut is the rehab consultant's statement, "He lacks capacity because he cannot explain." Communication disability is not the same as incapacity. A consultant must first maximise communication before concluding that he cannot understand, appreciate or weigh the rehabilitation decision.

His repeated phrase, "Home, home, no hospital," is meaningful but incomplete. It communicates a preference, not necessarily an informed refusal. I would arrange a Mandarin interpreter and speech pathologist, use supported communication, visual aids, yes/no boards, written or pictorial options, and assess whether he can indicate understanding of stroke deficits, fall risk, rehab purpose, and consequences of leaving. No capacity assessment is valid while "no speech pathologist or interpreter has assisted."

The legal question appears in the wife's question, "Can I sign him into rehab?" She may be an important support or substitute decision-maker depending on law, but she cannot simply override him if he has capacity. If he lacks capacity, substitute decision-making must follow the relevant legal framework and his values, not merely family hierarchy. Her statement, "In our family, I decide health matters," should be understood culturally but cannot replace the legal test.

The son says, "He falls whenever he stands," so the vulnerable person is Mr Liu himself: discharge without rehab may cause falls, injury and loss of recovery opportunity. I would also consider carer burden and home safety. The plan may include inpatient rehab, supported decision-making, trial leave, family education, falls management and culturally appropriate communication.

I would document the communication supports used, interpreter and speech pathology involvement, what Mr Liu could and could not demonstrate, family views, fall risk, substitute decision pathway if needed, and why the rehab plan was least restrictive. That is defensible because it separates inability to speak from inability to decide.`
  },
  {
    "id": "FINAL-049",
    "topic": "cl_psychiatry",
    "difficulty": "consultant",
    "title": "Cardiac device deactivation request",
    "candidateRole": "CL psychiatrist",
    "setting": "Cardiology ward ethics consult",
    "stem": "You are the CL psychiatrist. Cardiology ward ethics consult.\n\nMr Allen, a 59-year-old man with end-stage heart failure, requests ICD deactivation after repeated shocks. Mr Allen says, \"Every shock feels like being tortured back to life.\" \n\nDaughter says, \"Turning it off is suicide; stop him.\" Cardiologist asks, \"Can psychiatry clear capacity today?\" Wife says, \"He has said this for months.\" He is a veteran and says endurance is valued in his community.\n\nChaplain says, \"The family wants spiritual guidance first.\" You must decide whether request is capacitous and how to support family/ethics.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "suicide-label shortcut — unsafe shortcut under pressure",
        "category": "physical_health",
        "severity": "critical",
        "clueInStem": "Turning it off is suicide; stop him.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass values-based refusal of device therapy, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Turning it off is suicide; stop him.' without first formulating values-based refusal of device therapy, immediate safety and a defensible disposition.",
        "keywords": [
          "suicide-label shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "values-based refusal of device therapy — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Every shock feels like being tortured back to life.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around values-based refusal of device therapy, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "values-based refusal of device therapy",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "capacity for device deactivation — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can psychiatry clear capacity today?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "capacity for device deactivation",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "stable preference collateral — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He has said this for months.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect stable preference collateral, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "stable preference collateral",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "The family wants spiritual guidance first.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether request is capacitous and how to support family/ethics",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Mr Allen's request for ICD deactivation should not be blocked because his daughter says, "Turning it off is suicide; stop him." That is the unsafe shortcut: treating refusal or withdrawal of a burdensome device therapy as self-harm because the family is distressed. An ICD can be life-prolonging, but repeated shocks in end-stage heart failure can become a source of suffering, and a capacitous patient can request deactivation.

His statement, "Every shock feels like being tortured back to life," is the key clinical phrase. It explains the treatment burden in his own words and makes the request understandable as relief from repeated traumatic shocks, not necessarily a wish to die from depression. I would assess capacity to request deactivation: understanding of what the ICD does, what deactivation means, likely consequences, alternatives such as medication or programming changes, and whether his decision is consistent over time. His wife says, "He has said this for months," supporting consistency.

The cardiologist asks, "Can psychiatry clear capacity today?" I would avoid being used as a clearance stamp. I can assess capacity and screen for depression, delirium, coercion and demoralisation, but the treating team must also provide accurate cardiology information and palliative options. If he has capacity, the ethical resolution is to respect his decision, even if his daughter experiences it as suicide. Deactivation of an unwanted medical device is ethically distinct from assisted suicide.

His veteran identity and community value of endurance may add shame about stopping treatment. The chaplain's statement, "The family wants spiritual guidance first," should be accommodated if Mr Allen wants it and if it does not create harmful delay. The vulnerable parties are Mr Allen and his family, who may need bereavement and ethics support. I would hold a family meeting, with his consent, to explain the distinction between allowing natural death and causing death.

I would document capacity findings, depression assessment, cardiology explanation, the repeated-shock burden, consistency over months, spiritual support, family disagreement and the final deactivation plan. The record is defensible because it protects autonomy, addresses family distress, and clarifies why this is a lawful treatment-limitation decision rather than self-harm.`
  },
  {
    "id": "FINAL-050",
    "topic": "cl_psychiatry",
    "difficulty": "consultant",
    "title": "HIV treatment refusal and psychosis",
    "candidateRole": "CL psychiatrist",
    "setting": "Infectious diseases ward",
    "stem": "You are the CL psychiatrist. Infectious diseases ward.\n\nMichael, a 33-year-old man with HIV and psychosis, refuses antiretrovirals and believes tablets broadcast his location. Michael says, \"The tablets tell the government where I am.\" \n\nID consultant says, \"Just depot him and restart antivirals.\" Registrar asks, \"Can MHA force HIV treatment?\" Partner says, \"He has not told his family his status.\" Michael is from a community with severe HIV stigma.\n\nNurse says, \"He wants to leave before results come back.\" You must decide whether capacity is impaired and what legal/ethical path applies.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "treatment-collapse shortcut — unsafe shortcut under pressure",
        "category": "physical_health",
        "severity": "critical",
        "clueInStem": "Just depot him and restart antivirals.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass psychosis impairing medical treatment decisions, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Just depot him and restart antivirals.' without first formulating psychosis impairing medical treatment decisions, immediate safety and a defensible disposition.",
        "keywords": [
          "treatment-collapse shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "psychosis impairing medical treatment decisions — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "The tablets tell the government where I am.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around psychosis impairing medical treatment decisions, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "psychosis impairing medical treatment decisions",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "MHA versus medical treatment authority — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can MHA force HIV treatment?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "MHA versus medical treatment authority",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "confidentiality and partner safety — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He has not told his family his status.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect confidentiality and partner safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "confidentiality and partner safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "He wants to leave before results come back.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether capacity is impaired and what legal/ethical path applies",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Michael's antiretroviral refusal should not be managed by the shortcut, "Just depot him and restart antivirals." That collapses psychiatric treatment and HIV treatment into one coercive package. Depot antipsychotic may treat psychosis if indicated and lawful, but it does not automatically authorise forced HIV treatment. The consultant task is to assess capacity for antiretroviral refusal, treat psychosis, and protect confidentiality in a highly stigmatised context.

Michael's statement, "The tablets tell the government where I am," is the key clinical phrase. It shows that refusal of antiretrovirals may be driven by persecutory psychosis rather than an informed weighing of medication risks and benefits. I would assess whether he understands HIV, viral load, resistance, transmission, illness progression, treatment benefits and the consequences of stopping. I would also assess whether the government-tracking belief prevents appreciation and weighing.

The registrar asks, "Can MHA force HIV treatment?" This must be answered carefully. Mental Health Act powers generally relate to treatment of mental disorder, not automatic treatment of physical illness, although jurisdictional rules vary. If he lacks capacity for HIV treatment, substitute decision or emergency medical treatment pathways may apply depending on urgency. If he has capacity, he may refuse antivirals even if the decision is harmful. I would involve infectious diseases, psychiatry, legal/ethics if necessary and consider antipsychotic treatment to restore capacity.

The partner says, "He has not told his family his status," and Michael is from a community with severe HIV stigma. This is a confidentiality issue with real potential harm. I would not disclose his status to family without consent unless a specific legal threshold is met. The nurse says, "He wants to leave before results come back," so I would assess absconding risk, capacity to leave, immediate medical risk and whether follow-up can be secured.

I would document the psychotic content, capacity findings for antiretrovirals, the distinction between MHA and physical-health treatment authority, confidentiality around HIV status, stigma concerns, infectious-disease advice and the plan to treat psychosis and re-engage him. Defensible documentation shows the team did not use psychiatric compulsion as a backdoor for unrelated physical treatment.`
  },
  {
    "id": "FINAL-051",
    "topic": "forensic",
    "difficulty": "consultant",
    "title": "Erotomanic stalking with identified victim",
    "candidateRole": "community forensic psychiatrist",
    "setting": "Urgent CMHT risk meeting",
    "stem": "You are the community forensic psychiatrist. Urgent CMHT risk meeting.\n\nMarcus, a 44-year-old man with schizophrenia, has sent hundreds of messages to a newsreader and attended the studio twice. Marcus says, \"She smiles because she knows I am watching.\" \n\nCase manager says, \"He denies intent, so confidentiality prevents warning.\" Police asks, \"We need a direct threat before acting.\" The husband says, \"He is the obstacle; obstacles get removed.\" Marcus has stopped depot and is drinking again.\n\nMarcus says, \"I just need five minutes alone with her.\" You must decide whether to breach confidentiality, use MHA/CTO, and protect victims.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "confidentiality shortcut — unsafe shortcut under pressure",
        "category": "risk_others",
        "severity": "critical",
        "clueInStem": "He denies intent, so confidentiality prevents warning.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass erotomanic fixation with stalking, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He denies intent, so confidentiality prevents warning.' without first formulating erotomanic fixation with stalking, immediate safety and a defensible disposition.",
        "keywords": [
          "confidentiality shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "erotomanic fixation with stalking — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "She smiles because she knows I am watching.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around erotomanic fixation with stalking, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "erotomanic fixation with stalking",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "duty to protect versus police threshold — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "We need a direct threat before acting.",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "duty to protect versus police threshold",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "identified rival victim — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He is the obstacle; obstacles get removed.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect identified rival victim, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "identified rival victim",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "I just need five minutes alone with her.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to breach confidentiality, use MHA/CTO, and protect victims",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Marcus should not be left unreported because "He denies intent, so confidentiality prevents warning." That is the unsafe shortcut. In erotomanic stalking, denial of intent is weak reassurance when there is fixed delusional belief, hundreds of messages, studio attendance and escalating focus on an identified victim. Confidentiality matters, but it does not require clinicians to ignore foreseeable serious harm to identifiable people.

His statement, "She smiles because she knows I am watching," is the key diagnostic phrase. It demonstrates a delusional interpretation of the newsreader's public behaviour as personal communication. The husband is then described as "the obstacle; obstacles get removed," making him a perceived rival and potential victim. Marcus saying, "I just need five minutes alone with her" shows ongoing approach intent, not resolved risk.

The legal and ethical tension is between confidentiality and duty to protect. Police say, "We need a direct threat before acting," but clinical risk thresholds are not identical to police charging thresholds. I would consider lawful, proportionate disclosure to police and potentially to the victim or workplace security through appropriate channels. I would document why the risk to the newsreader and husband justifies limited disclosure, and I would tell Marcus about confidentiality limits if safe.

The vulnerable persons are the newsreader, her husband, studio staff and possibly Marcus himself if confrontation occurs. He has stopped depot and is drinking again, so dynamic risk is rising. I would arrange urgent psychiatric review, consider MHA assessment or CTO action if criteria are met, address medication non-adherence and alcohol use, and coordinate with police, security and the CMHT.

I would document the erotomanic belief, approach behaviour, perceived rival threat, depot cessation, alcohol relapse, disclosure rationale, victim-safety steps and legal basis for MHA/CTO action. A defensible plan shows confidentiality was breached only as far as necessary to protect identifiable victims from an escalating delusional pursuit.`
  },
  {
    "id": "FINAL-052",
    "topic": "forensic",
    "difficulty": "consultant",
    "title": "NGMI and fitness confused by solicitor",
    "candidateRole": "forensic psychiatrist",
    "setting": "Court-ordered assessment in prison clinic",
    "stem": "You are the forensic psychiatrist. Court-ordered assessment in prison clinic.\n\nArun, a 31-year-old man charged with stabbing a stranger, is psychotic and suspicious of his lawyer. Arun says, \"The man was a demon wearing human skin.\" \n\nSolicitor says, \"Just say he is NGMI.\" Magistrate asks, \"Comment on fitness to stand trial.\" Alleged victim says, \"He stabbed me without warning at a bus stop.\" Arun speaks limited English and uses religious idioms from his community.\n\nArun says, \"My lawyer works for the demons.\" You must decide whether to assess fitness and mental impairment separately and independently.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "legal-conclusion shortcut — unsafe shortcut under pressure",
        "category": "risk_others",
        "severity": "critical",
        "clueInStem": "Just say he is NGMI.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass offence-related psychosis and legal standards, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Just say he is NGMI.' without first formulating offence-related psychosis and legal standards, immediate safety and a defensible disposition.",
        "keywords": [
          "legal-conclusion shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "offence-related psychosis and legal standards — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "The man was a demon wearing human skin.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around offence-related psychosis and legal standards, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "offence-related psychosis and legal standards",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "fitness versus criminal responsibility — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Comment on fitness to stand trial.",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "fitness versus criminal responsibility",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "public safety and victim impact — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He stabbed me without warning at a bus stop.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect public safety and victim impact, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "public safety and victim impact",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "My lawyer works for the demons.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to assess fitness and mental impairment separately and independently",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Arun's assessment should not be reduced to the solicitor's shortcut, "Just say he is NGMI." A forensic psychiatrist must not provide the legal conclusion requested by one party without independent assessment. Psychosis may be highly relevant, but fitness to stand trial and mental impairment or criminal responsibility are separate legal questions with different time frames and tests.

His statement, "The man was a demon wearing human skin," is a key clue to possible offence-related psychosis. It may bear on whether he understood the nature of the act or its wrongfulness at the time of the stabbing, depending on the jurisdiction's legal test. But I would not rely on that statement alone. I would reconstruct the mental state at the time using police brief, witness accounts, prior records, substance use, behaviour before and after the offence, motive, concealment and consistency of delusional beliefs.

The magistrate asks, "Comment on fitness to stand trial," which is present-focused. Arun's later statement, "My lawyer works for the demons," may impair his ability to instruct counsel, understand the adversarial process and participate in proceedings. I would assess understanding of the charge, court roles, plea, possible outcomes, ability to follow evidence and communicate rationally with his lawyer, using a professional interpreter because he speaks limited English and uses religious idioms.

The alleged victim says, "He stabbed me without warning at a bus stop," reminding me that public safety and victim impact must be included without allowing them to bias the forensic opinion. The victim's experience informs risk and seriousness, but it does not determine fitness or mental impairment. Cultural and religious idioms must be interpreted carefully; not every demon reference is psychosis, but in this context it appears linked to paranoia and the offence.

I would document sources, interpreter use, limitations, diagnosis, current fitness opinion, mental state at alleged offence, risk, treatment needs and the boundaries of my role. A defensible forensic report states clinical opinions mapped to legal criteria and avoids becoming an advocate for either solicitor, prosecution or hospital convenience.`
  },
  {
    "id": "FINAL-053",
    "topic": "forensic",
    "difficulty": "consultant",
    "title": "Conditional discharge breach and victim proximity",
    "candidateRole": "forensic psychiatrist",
    "setting": "Tribunal review for conditionally discharged patient",
    "stem": "You are the forensic psychiatrist. Tribunal review for conditionally discharged patient.\n\nMalik, a 38-year-old forensic patient, missed drug screens and was seen near the victim's street. Malik says, \"Everyone deserves a night off; I am not a prisoner.\" \n\nSupport worker says, \"He is mostly fine; recall seems harsh.\" Tribunal asks, \"Does this breach require recall?\" Victim says, \"I need to know if he is near my suburb.\" Malik's family says recall would shame the family and ruin reintegration.\n\nPolice says, \"He was near the index offence location.\" You must decide whether to tighten conditions or recall based on dynamic risk.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "minimise-breach shortcut — unsafe shortcut under pressure",
        "category": "risk_others",
        "severity": "critical",
        "clueInStem": "He is mostly fine; recall seems harsh.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass minimisation of forensic conditions, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He is mostly fine; recall seems harsh.' without first formulating minimisation of forensic conditions, immediate safety and a defensible disposition.",
        "keywords": [
          "minimise-breach shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "minimisation of forensic conditions — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Everyone deserves a night off; I am not a prisoner.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around minimisation of forensic conditions, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "minimisation of forensic conditions",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "conditional discharge threshold — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Does this breach require recall?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "conditional discharge threshold",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "victim safety and notification — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I need to know if he is near my suburb.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect victim safety and notification, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "victim safety and notification",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "He was near the index offence location.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to tighten conditions or recall based on dynamic risk",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Malik's breach should not be minimised because the support worker says, "He is mostly fine; recall seems harsh." That is the unsafe shortcut. In a conditionally discharged forensic patient, missed drug screens and proximity to the victim's street are not isolated technicalities; they may represent a return to the same dynamic risk pathway that led to the index offence.

Malik's statement, "Everyone deserves a night off; I am not a prisoner," is important because it shows minimisation of the legal and risk-management function of his conditions. He is correct that conditional discharge is meant to support community reintegration, not punish him. But he is not free from restrictions that exist to protect others. His attitude raises concern about compliance, insight and willingness to prioritise victim safety.

The tribunal asks, "Does this breach require recall?" The answer is evidence-based, not automatic. Recall is a major deprivation of liberty and should not be used punitively. But if missed screens suggest substance relapse, if he was near the index offence location, or if the victim's safety cannot be managed, recall or inpatient reassessment may be proportionate. If facts are less concerning, tighter conditions, increased testing, exclusion-zone reinforcement and substance-use intervention may be sufficient.

The victim's statement, "I need to know if he is near my suburb," identifies a vulnerable third party whose safety and psychological security are central. Victim notification must follow legal frameworks, but the plan cannot ignore her. Malik's family says recall would shame the family and ruin reintegration; that pressure deserves acknowledgement, but shame cannot outweigh victim safety and tribunal conditions.

I would document the exact breaches, drug-screen history, police report that "He was near the index offence location," victim-safety actions, family concerns, risk formulation and the reason for recall or strengthened conditions. A defensible report links each recommendation to dynamic risk and manageability, not to sympathy or fear of appearing harsh.`
  },
  {
    "id": "FINAL-054",
    "topic": "forensic",
    "difficulty": "consultant",
    "title": "Family violence, psychosis and firearms licence",
    "candidateRole": "forensic/community consultant",
    "setting": "Rural police-MH joint meeting",
    "stem": "You are the forensic/community consultant. Rural police-MH joint meeting.\n\nGareth, a 47-year-old man with delusional disorder, has accused his ex-partner of poisoning his children and owns firearms. Gareth says, \"She is killing my bloodline.\" \n\nGP says, \"He is polite in clinic and denies intent.\" Police asks, \"Can we remove firearms without admission?\" Children says, \"Dad says Mum is dangerous and we must hide.\" The family are known in a small rural community with firearm culture.\n\nGareth says, \"Taking my rifles is persecution.\" You must decide whether to manage firearms, victim safety and involuntary assessment.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "polite-denial shortcut — unsafe shortcut under pressure",
        "category": "risk_others",
        "severity": "critical",
        "clueInStem": "He is polite in clinic and denies intent.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass delusional family violence risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He is polite in clinic and denies intent.' without first formulating delusional family violence risk, immediate safety and a defensible disposition.",
        "keywords": [
          "polite-denial shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "delusional family violence risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "She is killing my bloodline.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around delusional family violence risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "delusional family violence risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "firearms and MHA/legal coordination — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Can we remove firearms without admission?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "firearms and MHA/legal coordination",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "children in coercive delusional conflict — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "Dad says Mum is dangerous and we must hide.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect children in coercive delusional conflict, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "children in coercive delusional conflict",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Taking my rifles is persecution.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to manage firearms, victim safety and involuntary assessment",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Gareth should not be considered safe because the GP says, "He is polite in clinic and denies intent." That is the unsafe shortcut. Politeness in a clinic does not neutralise delusional beliefs, firearms access, family violence risk or child fear. The question is not whether Gareth can appear calm, but whether his belief system and weapon access create foreseeable risk to his ex-partner and children.

His statement, "She is killing my bloodline," is the core formulation. It frames his ex-partner as an existential threat to his children and identity. In delusional disorder, that type of belief can motivate pre-emptive or protective violence, especially when firearms are available. His later statement, "Taking my rifles is persecution," suggests that firearm removal may intensify grievance, but it does not mean firearms can be left in place.

Police ask, "Can we remove firearms without admission?" That is the legal and practical hinge. Firearms licensing and removal may be possible through police powers even if psychiatric admission is not immediately indicated, and it may be the least restrictive way to reduce risk. I would consider MHA assessment if mental disorder is driving serious risk and he refuses care, but I would not make firearm safety dependent on admission.

The children are direct vulnerable parties. Their statement, "Dad says Mum is dangerous and we must hide," shows they are being drawn into the delusional system and may be frightened, alienated from their mother, or at risk during a confrontation. I would consider child protection or family violence pathways, victim safety planning for the ex-partner, and police liaison. The small rural firearm culture matters because removal may be experienced as shame and persecution, so communication must be careful and coordinated, but safety comes first.

I would document the delusional content, firearm access, children's statements, ex-partner risk, police powers discussed, MHA reasoning, cultural/rural context and plan for victim and child safety. Defensible documentation shows that denial and politeness were not allowed to obscure a high-consequence firearms risk.`
  },
  {
    "id": "FINAL-055",
    "topic": "forensic",
    "difficulty": "consultant",
    "title": "Stalking by health professional patient",
    "candidateRole": "forensic psychiatrist",
    "setting": "Private-practice risk consultation",
    "stem": "You are the forensic psychiatrist. Private-practice risk consultation.\n\nDr Liam, a 39-year-old surgeon with erotomanic beliefs, is stalking a theatre nurse and using hospital systems to view her roster. Dr Liam says, \"The roster proves she wants me to find her.\" \n\nHospital executive says, \"Keep this quiet because he is high profile.\" Medical director asks, \"Do we notify AHPRA or police?\" The nurse says, \"I am frightened to come to work.\" The hospital culture protects senior doctors and discourages complaints.\n\nDr Liam says, \"If she complains, her career is finished.\" You must decide whether to protect victim, report, and manage professional risk.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "reputation shortcut — unsafe shortcut under pressure",
        "category": "risk_others",
        "severity": "critical",
        "clueInStem": "Keep this quiet because he is high profile.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass professional access-enabled stalking, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Keep this quiet because he is high profile.' without first formulating professional access-enabled stalking, immediate safety and a defensible disposition.",
        "keywords": [
          "reputation shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "professional access-enabled stalking — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "The roster proves she wants me to find her.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around professional access-enabled stalking, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "professional access-enabled stalking",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "mandatory reporting and duty to protect — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Do we notify AHPRA or police?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "mandatory reporting and duty to protect",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "identified workplace victim safety — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I am frightened to come to work.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect identified workplace victim safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "identified workplace victim safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "If she complains, her career is finished.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to protect victim, report, and manage professional risk",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Dr Liam's behaviour must not be kept quiet because he is high profile. The unsafe shortcut is the hospital executive's request, "Keep this quiet because he is high profile." That would protect institutional reputation and senior status at the expense of a frightened nurse, workplace safety and public trust. A doctor using hospital systems to stalk a colleague is a clinical, forensic and professional governance emergency.

His statement, "The roster proves she wants me to find her," is the key formulation. It suggests erotomanic or delusional interpretation, and the use of roster access makes the risk professional access-enabled. He is not merely socially awkward or romantically confused; he is misusing privileged systems to locate a victim. His threat, "If she complains, her career is finished," adds coercion and workplace intimidation.

The medical director asks, "Do we notify AHPRA or police?" That is the legal and ethical hinge. The nurse's immediate safety requires workplace protection, access restriction, security planning and possibly police involvement. Regulatory notification may be required if impaired practice, professional misconduct or public risk thresholds are met. I would seek governance/legal advice as needed, but I would not delay protective action while debating reputational consequences.

The vulnerable person is the theatre nurse who says, "I am frightened to come to work." Her ability to work safely should not depend on silence. I would ensure she is supported, not blamed, and that she does not have to keep encountering him. Hospital culture that protects senior doctors and discourages complaints is itself a risk factor that I would name and escalate.

I would document the stalking behaviour, roster misuse, delusional interpretation, threat to career, victim-safety plan, system-access restrictions, reporting decisions and the rationale for any AHPRA/police notification. That documentation is defensible because it shows the response was not reputationally managed but safety-led and procedurally fair.`
  },
  {
    "id": "FINAL-056",
    "topic": "forensic",
    "difficulty": "consultant",
    "title": "Arson risk in psychosis and housing pressure",
    "candidateRole": "forensic liaison psychiatrist",
    "setting": "Community housing risk panel",
    "stem": "You are the forensic liaison psychiatrist. Community housing risk panel.\n\nEddie, a 29-year-old man with schizophrenia, has burned papers in his unit to remove demons. Eddie says, \"Fire is the only clean thing.\" \n\nHousing officer says, \"Evict him and the risk is ours no longer.\" CMHT asks, \"Can we compel depot to keep housing?\" Neighbours says, \"Smoke came under our door while children slept.\" Eddie is an Aboriginal man who distrusts services after past police removals.\n\nElder says, \"Work with family or he will disappear.\" You must decide whether to manage fire risk without making homelessness worse.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "eviction shortcut — unsafe shortcut under pressure",
        "category": "risk_others",
        "severity": "critical",
        "clueInStem": "Evict him and the risk is ours no longer.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass psychosis-linked arson risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Evict him and the risk is ours no longer.' without first formulating psychosis-linked arson risk, immediate safety and a defensible disposition.",
        "keywords": [
          "eviction shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "psychosis-linked arson risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Fire is the only clean thing.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around psychosis-linked arson risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "psychosis-linked arson risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "MHA/CTO and housing policy — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Can we compel depot to keep housing?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "MHA/CTO and housing policy",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "public and child safety — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "Smoke came under our door while children slept.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect public and child safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "public and child safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Work with family or he will disappear.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to manage fire risk without making homelessness worse",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Eddie should not simply be evicted so that the housing officer can say "the risk is ours no longer." That is the unsafe shortcut. Eviction may move the fire risk into homelessness, rough sleeping, emergency accommodation or another family's house, while worsening disengagement. Fire risk must be managed, but homelessness is not a risk-management plan.

His statement, "Fire is the only clean thing," is the key clinical phrase. It suggests psychotic purification beliefs driving fire-setting behaviour. Burning papers in a unit to remove demons is not ordinary tenant misconduct; it is a fire-risk behaviour linked to schizophrenia. The neighbours' statement, "Smoke came under our door while children slept," means there are identifiable vulnerable third parties, including children, who have already been exposed to danger.

The CMHT asks, "Can we compel depot to keep housing?" That is the legal and ethical hinge. Treatment cannot be compelled merely to satisfy housing conditions unless the relevant legal criteria are met. If mental illness is driving serious risk and he refuses treatment, MHA or CTO pathways may be considered. But compulsion must be justified by risk and treatment need, not by housing convenience. Housing providers can impose safety requirements, but mental health must help create realistic supports.

Eddie is an Aboriginal man who distrusts services after past police removals, and the elder says, "Work with family or he will disappear." That is clinically crucial. A police-heavy eviction or forced-treatment response may lead to absconding and more danger. I would involve Aboriginal liaison, the elder and family if safe, develop a fire-safety plan, remove ignition risks where possible, increase outreach, review medication, and consider temporary safer accommodation that does not amount to abandonment.

I would document the psychotic fire belief, actual smoke exposure to children, housing pressure, legal criteria for compulsion, Aboriginal engagement, family/elder role and the plan to reduce fire risk without simply displacing it. The record is defensible because it shows the consultant protected neighbours while recognising that eviction alone may increase risk.`
  },
  {
    "id": "FINAL-057",
    "topic": "forensic",
    "difficulty": "consultant",
    "title": "Sexual disinhibition in dementia and resident safety",
    "candidateRole": "forensic old age psychiatrist",
    "setting": "Residential aged care urgent review",
    "stem": "You are the forensic old age psychiatrist. Residential aged care urgent review.\n\nMr Brooks, a 73-year-old man with frontotemporal dementia, has entered female residents' rooms at night. Mr Brooks says, \"I thought she was my wife.\" \n\nFacility manager says, \"Transfer him to psych before families sue.\" GP asks, \"Can we use chemical restraint?\" Female resident says, \"I am scared to sleep.\" The family says discussing sexuality is shameful in their culture.\n\nDaughter says, \"He would be horrified if he knew.\" You must decide whether to protect residents while using least restrictive dementia care.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "liability-transfer shortcut — unsafe shortcut under pressure",
        "category": "risk_others",
        "severity": "critical",
        "clueInStem": "Transfer him to psych before families sue.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass neurocognitive sexual disinhibition, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Transfer him to psych before families sue.' without first formulating neurocognitive sexual disinhibition, immediate safety and a defensible disposition.",
        "keywords": [
          "liability-transfer shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "neurocognitive sexual disinhibition — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I thought she was my wife.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around neurocognitive sexual disinhibition, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "neurocognitive sexual disinhibition",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "restraint and consent policy — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Can we use chemical restraint?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "restraint and consent policy",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "vulnerable co-resident safety — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I am scared to sleep.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect vulnerable co-resident safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "vulnerable co-resident safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "He would be horrified if he knew.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to protect residents while using least restrictive dementia care",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Mr Brooks should not be transferred to psychiatry simply because the facility fears litigation. The unsafe shortcut is "Transfer him to psych before families sue." Sexual disinhibition in frontotemporal dementia is distressing and risky, but it is usually a neurocognitive and environmental-care problem rather than a primary psychiatric admission problem. The immediate duty is to protect female residents while using the least restrictive dementia care.

His statement, "I thought she was my wife," is the key formulation. It suggests misidentification, impaired social boundaries and neurocognitive sexual disinhibition rather than predatory intent in the usual forensic sense. That distinction matters for management, but it does not remove the harm to the female resident who says, "I am scared to sleep." Her safety, privacy and dignity require immediate environmental protection.

The GP asks, "Can we use chemical restraint?" Medication may sometimes be used if severe distress or risk persists, but chemical restraint for convenience or reputational protection is not acceptable. I would first implement non-pharmacological strategies: room changes, night supervision, door alarms, clothing adaptations, toileting and sleep review, pain or delirium assessment, meaningful activity, and staff education. If medication is considered, it must have a clear target symptom, consent or legal authority, monitoring and review.

The family says discussing sexuality is shameful, and the daughter says, "He would be horrified if he knew." That collateral helps preserve his dignity and supports the idea that this is illness-related behaviour, but it cannot be used to hide the risk. Families of affected residents need appropriate communication and reassurance without unnecessary disclosure of Mr Brooks' private details.

I would document incidents, capacity and consent issues, resident-safety measures, alternatives to chemical restraint, family discussions, medication rationale if any, and review plan. Defensible documentation shows the facility protected vulnerable co-residents without using shame, litigation fear or sedation as the primary management strategy.`
  },
  {
    "id": "FINAL-058",
    "topic": "forensic",
    "difficulty": "consultant",
    "title": "Threat to politician from manic patient",
    "candidateRole": "forensic/community consultant",
    "setting": "ED after police bring patient with manifesto",
    "stem": "You are the forensic/community consultant. ED after police bring patient with manifesto.\n\nAmelia, a 42-year-old woman with bipolar disorder, has been emailing threats to a local MP during mania. Amelia says, \"God elected me to remove the corrupt one.\" \n\nRegistrar says, \"She is articulate and political, not psychotic.\" Police asks, \"Do we need to warn the MP's office?\" MP staff says, \"She came to the electorate office yesterday.\" Amelia belongs to an activist community suspicious of psychiatry.\n\nAmelia says, \"Hospitalising me is political persecution.\" You must decide whether to use MHA, warn/protect, and respect political/cultural context.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "political-speech shortcut — unsafe shortcut under pressure",
        "category": "risk_others",
        "severity": "critical",
        "clueInStem": "She is articulate and political, not psychotic.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass mania with targeted public figure threat, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'She is articulate and political, not psychotic.' without first formulating mania with targeted public figure threat, immediate safety and a defensible disposition.",
        "keywords": [
          "political-speech shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "mania with targeted public figure threat — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "God elected me to remove the corrupt one.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around mania with targeted public figure threat, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "mania with targeted public figure threat",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "duty to protect/warn — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Do we need to warn the MP's office?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "duty to protect/warn",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "approach behaviour and staff safety — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She came to the electorate office yesterday.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect approach behaviour and staff safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "approach behaviour and staff safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Hospitalising me is political persecution.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to use MHA, warn/protect, and respect political/cultural context",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Amelia should not be dismissed as merely articulate and political. The unsafe shortcut is the registrar's statement, "She is articulate and political, not psychotic." Political content and psychosis can coexist, and articulation does not neutralise manic grandiosity or threat. She has emailed threats to an MP, attended the electorate office yesterday, and is now in ED with a manifesto.

Her statement, "God elected me to remove the corrupt one," is the key clinical phrase. It suggests grandiose religious-manic belief linked to a mission against an identifiable person. This is not ordinary activism or political dissent; the word "remove" in the context of threats creates a potential violence risk. Her statement, "Hospitalising me is political persecution," also shows how involuntary care may be interpreted through her activist identity and delusional framework.

Police ask, "Do we need to warn the MP's office?" That is the ethical and legal hinge. Confidentiality must be weighed against serious foreseeable risk to an identifiable public figure and staff. Given threats, approach behaviour and manic psychosis, I would liaise with police and consider warning/protective communication through lawful channels. Disclosure should be limited to what is necessary for safety, not a broad release of clinical details.

The vulnerable third parties are the MP, electorate office staff and potentially the public. The MP staff report, "She came to the electorate office yesterday," which means risk is no longer only online. I would assess weapons, plans, travel, medication adherence, sleep, substance use, prior violence and whether MHA criteria are met. If mania is driving serious risk and she refuses admission, involuntary assessment is likely indicated.

I would document the threats, manifesto, office attendance, manic formulation, political/cultural context, disclosure rationale, police liaison and MHA reasoning. The record must show that the team respected legitimate political identity but did not confuse it with a psychotic mission involving a target.`
  },
  {
    "id": "FINAL-059",
    "topic": "forensic",
    "difficulty": "consultant",
    "title": "Prisoner self-harm and custodial minimisation",
    "candidateRole": "forensic psychiatrist",
    "setting": "Correctional health unit",
    "stem": "You are the forensic psychiatrist. Correctional health unit.\n\nTane, a 23-year-old Māori prisoner, has repeatedly ligatured after segregation and says he hears his dead brother. Tane says, \"I will leave this place the way my brother did.\" \n\nCorrectional officer says, \"He does this to get out of segregation.\" Health nurse asks, \"Can we keep him in observation cell naked?\" Cellmate says, \"His brother died in custody.\" No Māori health worker is available today.\n\nTane says, \"No one listens to Māori men in here.\" You must decide whether to remove segregation, treat psychosis/trauma and manage custody risk.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "manipulation shortcut — unsafe shortcut under pressure",
        "category": "risk_others",
        "severity": "critical",
        "clueInStem": "He does this to get out of segregation.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass custodial suicide risk and trauma, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He does this to get out of segregation.' without first formulating custodial suicide risk and trauma, immediate safety and a defensible disposition.",
        "keywords": [
          "manipulation shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "custodial suicide risk and trauma — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I will leave this place the way my brother did.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around custodial suicide risk and trauma, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "custodial suicide risk and trauma",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "least restrictive custody observation — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Can we keep him in observation cell naked?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "least restrictive custody observation",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "trauma and vulnerable prisoner risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "His brother died in custody.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect trauma and vulnerable prisoner risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "trauma and vulnerable prisoner risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "No one listens to Māori men in here.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to remove segregation, treat psychosis/trauma and manage custody risk",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Tane's ligaturing should not be dismissed as an attempt to get out of segregation. The unsafe shortcut is the correctional officer's statement, "He does this to get out of segregation." Even if segregation is a precipitant, repeated ligaturing in custody is high risk and must be treated as genuine self-harm risk. In custody, minimising distress can be fatal.

His statement, "I will leave this place the way my brother did," is the key clinical phrase. It links current self-harm to his brother's death in custody and suggests suicidal identification, trauma and possibly grief-related psychosis because he hears his dead brother. This is not simply behavioural protest. The cellmate's collateral, "His brother died in custody," confirms a trauma history that likely makes segregation and observation practices more dangerous.

The nurse asks, "Can we keep him in observation cell naked?" That is the legal and ethical hinge. Observation may be necessary, but degrading, blanket removal of clothing can be traumatising, culturally unsafe and should be least restrictive, time-limited, reviewed and justified. The aim is to remove ligature means while preserving dignity. I would consider anti-ligature clothing, increased observation, removal from segregation, mental health placement, and urgent psychiatric treatment rather than relying on punitive isolation.

Tane's statement, "No one listens to Māori men in here," must be taken seriously. No Māori health worker is available today, but cultural support should still be escalated urgently through available Māori health, whānau contact if appropriate, chaplaincy or cultural liaison. Lack of immediate availability is not a reason to ignore cultural safety. Custodial staff also need clear instructions that his distress is not to be framed as manipulation.

I would document the repeated ligatures, brother's custody death, psychotic/trauma symptoms, segregation link, observation-cell decision, cultural supports attempted, custody-health liaison and plan for treatment and safer placement. A defensible record shows that the service did not collude with custodial minimisation and used the least degrading effective safety measures.`
  },
  {
    "id": "FINAL-060",
    "topic": "forensic",
    "difficulty": "consultant",
    "title": "Fitness to drive in psychosis with professional driver",
    "candidateRole": "forensic/community psychiatrist",
    "setting": "Community review after bus depot incident",
    "stem": "You are the forensic/community psychiatrist. Community review after bus depot incident.\n\nSalim, a 50-year-old bus driver with relapse of psychosis, believes passengers are agents and nearly crashed a bus. Salim says, \"The route was a trap; I had to brake hard.\" \n\nEmployer says, \"We need him cleared by Monday.\" Licensing body asks, \"Should we suspend commercial driving?\" Passengers says, \"Children were on the bus.\" Salim fears losing work will shame his family and threaten visa stability.\n\nWife says, \"If he loses work, we lose everything.\" You must decide whether to report driving risk and manage livelihood/family pressure.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "fitness-clearance shortcut — unsafe shortcut under pressure",
        "category": "risk_others",
        "severity": "critical",
        "clueInStem": "We need him cleared by Monday.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass psychosis affecting occupational public safety, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'We need him cleared by Monday.' without first formulating psychosis affecting occupational public safety, immediate safety and a defensible disposition.",
        "keywords": [
          "fitness-clearance shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "psychosis affecting occupational public safety — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "The route was a trap; I had to brake hard.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around psychosis affecting occupational public safety, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "psychosis affecting occupational public safety",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "public safety reporting obligations — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Should we suspend commercial driving?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "public safety reporting obligations",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "public/child passenger safety — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "Children were on the bus.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect public/child passenger safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "public/child passenger safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "If he loses work, we lose everything.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to report driving risk and manage livelihood/family pressure",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Salim should not be cleared to drive because the employer says, "We need him cleared by Monday." That is the unsafe shortcut. Commercial driving is a public-safety role, and a psychotic relapse that nearly caused a crash cannot be resolved by employment pressure. The question is fitness to drive and reportable risk, not whether the depot can fill Monday's roster.

His statement, "The route was a trap; I had to brake hard," is the key formulation. It shows that his driving behaviour was directly influenced by persecutory beliefs about passengers or the route. He nearly crashed a bus, and "Children were on the bus." This creates serious risk to passengers, pedestrians, other drivers and Salim himself. I would advise immediate cessation of commercial driving pending assessment and treatment.

The licensing body's question, "Should we suspend commercial driving?" is the legal and ethical hinge. Reporting obligations vary by jurisdiction, but public safety may require notifying the licensing authority or employer through the proper pathway, especially if Salim lacks insight or refuses to stop driving. Confidentiality is important, but it does not require silence when a professional driver poses foreseeable risk to the public.

The family pressure is substantial. His wife says, "If he loses work, we lose everything," and Salim fears shame and visa instability. I would acknowledge these consequences, involve social work, occupational supports and culturally appropriate assistance, and explore alternative duties or leave. But financial catastrophe cannot justify returning a psychotic driver to a bus route with children on board.

I would document the near-crash, delusional driving explanation, passenger/child risk, advice not to drive, licensing/employer communication, confidentiality rationale, treatment plan for psychosis, and family livelihood supports. The documentation is defensible because it shows public safety was prioritised while the social consequences of suspension were actively managed rather than ignored.`
  },
  {
    "id": "FINAL-061",
    "topic": "rural",
    "difficulty": "consultant",
    "title": "Remote psychosis RFDS no meds",
    "candidateRole": "remote consultant psychiatrist",
    "setting": "Remote Aboriginal clinic call at night",
    "stem": "You are the remote consultant psychiatrist. Remote Aboriginal clinic call at night.\n\nJarrah, a 26-year-old Aboriginal man, is walking near the highway yelling about demon trucks. Jarrah says, \"The old people told me the trucks are demons.\" \n\nPolice says, \"We can put him in cells until he settles.\" RFDS asks, \"Will psychiatry certify urgent risk?\" Grandmother says, \"If you fly him out alone, he will not come back to us.\" The clinic has no antipsychotic medication and one nurse overnight.\n\nCousin says, \"He used ice from town yesterday.\" You must decide whether to activate RFDS and how to plan culturally safe transfer.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "cells shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "We can put him in cells until he settles.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass acute psychosis with highway risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'We can put him in cells until he settles.' without first formulating acute psychosis with highway risk, immediate safety and a defensible disposition.",
        "keywords": [
          "cells shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "acute psychosis with highway risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "The old people told me the trucks are demons.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around acute psychosis with highway risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "acute psychosis with highway risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "MHA transport threshold — legal/policy hinge",
        "category": "mental_health_act",
        "severity": "critical",
        "clueInStem": "Will psychiatry certify urgent risk?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "MHA transport threshold",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "cultural connection and engagement — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "If you fly him out alone, he will not come back to us.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect cultural connection and engagement, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "cultural connection and engagement",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "He used ice from town yesterday.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to activate RFDS and how to plan culturally safe transfer",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Jarrah should not be placed in police cells "until he settles." That is the unsafe shortcut. A remote cell may appear to solve the immediate staffing problem, but it is not a clinical environment for an acutely psychotic man walking near a highway, possibly intoxicated with methamphetamine, and at risk of being harmed by traffic, restraint or culturally unsafe removal. The clinic has no antipsychotic medication and one nurse overnight, so the question is not whether the ideal resource exists; it is how to create the safest lawful containment and retrieval plan from the resources available.

Jarrah's statement, "The old people told me the trucks are demons," is the key formulation phrase. It could contain cultural language, psychotic content, substance-related perceptual disturbance, or a mixture. I would not dismiss the "old people" reference as delusion without cultural input, but I also would not ignore the fact that the belief is attached to trucks and highway danger. His cousin's report that "He used ice from town yesterday" makes intoxication or substance-induced psychosis more likely, but that does not reduce the need for urgent safety management.

RFDS asks, "Will psychiatry certify urgent risk?" That is the legal and operational hinge. I would certify urgent risk if, after assessment with the nurse and available collateral, he cannot be safely managed locally because of highway risk, lack of medication, single staffing, distance from police, and need for medical/psychiatric assessment. If involuntary assessment or transport is required, I would ensure the correct Mental Health Act or emergency transport process is used, including the least restrictive approach and clear handover to RFDS and the receiving service.

Grandmother's warning, "If you fly him out alone, he will not come back to us," is not just a family preference; it is a risk to engagement, trust and future care. A culturally safe transfer should involve family, an escort if feasible, Aboriginal health support, receiving-unit liaison, and planning for return to country. The lack of antipsychotic medication and one nurse overnight are system risks, but they do not justify defaulting to cells or unsupported family containment.

I would document the highway behaviour, the "trucks are demons" belief, possible ice use, resource limitations, why cells were rejected or used only as a last-resort safety measure with health oversight, the MHA/RFDS authority, family and cultural consultation, and the transfer plan. The documentation is defensible because it shows the decision balanced immediate public safety, lawful retrieval and cultural continuity rather than treating remote custody as clinical care.`
  },
  {
    "id": "FINAL-062",
    "topic": "rural",
    "difficulty": "consultant",
    "title": "Rural ED overdose no bed telehealth",
    "candidateRole": "telepsychiatry consultant",
    "setting": "Small rural ED overnight",
    "stem": "You are the telepsychiatry consultant. Small rural ED overnight.\n\nMaddie, a 19-year-old Aboriginal woman, took forty paracetamol tablets after a breakup. Maddie says, \"I just want to go home and sleep.\" \n\nED GP says, \"There are no psych beds, so phone follow-up is all we have.\" Nurse asks, \"I have never done an overnight suicide watch.\" Auntie says, \"She asked for me but I am ninety minutes away.\" Her father is a local police officer and asks for privacy.\n\nFather says, \"Do not put this in her record.\" You must decide whether to hold/transfer and document despite rural constraints.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "no-bed discharge shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "There are no psych beds, so phone follow-up is all we have.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass minimising high-risk overdose, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'There are no psych beds, so phone follow-up is all we have.' without first formulating minimising high-risk overdose, immediate safety and a defensible disposition.",
        "keywords": [
          "no-bed discharge shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "minimising high-risk overdose — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I just want to go home and sleep.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around minimising high-risk overdose, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "minimising high-risk overdose",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "safe observation governance — legal/policy hinge",
        "category": "mental_health_act",
        "severity": "critical",
        "clueInStem": "I have never done an overnight suicide watch.",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "safe observation governance",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "cultural/family protective support — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She asked for me but I am ninety minutes away.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect cultural/family protective support, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "cultural/family protective support",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Do not put this in her record.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to hold/transfer and document despite rural constraints",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Maddie should not be managed by phone follow-up just because there are no psychiatric beds. The unsafe shortcut is the ED GP's statement, "There are no psych beds, so phone follow-up is all we have." A 19-year-old who has taken forty paracetamol tablets has made a potentially lethal overdose, and bed scarcity does not convert that into a low-risk presentation. The immediate priorities are medical treatment, safe observation, and a defensible suicide-risk formulation.

Her statement, "I just want to go home and sleep," is not reassuring. After a high-risk overdose, wanting to sleep may mean exhaustion, avoidance, minimisation, shame, continuing wish to die, or misunderstanding of paracetamol toxicity. I would ensure toxicology advice, paracetamol levels, NAC as indicated, LFT/INR monitoring and medical clearance before any psychiatric discharge decision. Psychiatric assessment should occur in parallel, but it must not interrupt time-critical medical care.

The nurse's statement, "I have never done an overnight suicide watch," is a governance and safety clue. If the ED cannot provide competent observation, the consultant must not write a plan that depends on unavailable capability. I would give clear telehealth instructions about observation level, environmental safety, removal of means, escalation triggers, and when transfer to a medical or psychiatric facility is required. If she refuses to stay and risk remains serious, I would consider the relevant legal framework for detention or involuntary assessment.

Auntie's statement, "She asked for me but I am ninety minutes away," identifies a protective cultural/family support that should be actively mobilised, not ignored because of distance. As an Aboriginal young woman in a rural ED, Maddie may engage better with Auntie, Aboriginal health support or a trusted female staff member. Her father being a local police officer and saying, "Do not put this in her record," creates confidentiality and stigma pressure. I would acknowledge privacy concerns but explain that accurate documentation of overdose, risk and treatment is mandatory and protective; the father cannot control the record.

I would document the overdose amount, medical treatment, her minimising statement, the nurse's observation limitations, legal basis for holding or transfer, Auntie/Aboriginal support attempts, father's privacy request, and the rationale for discharge only if medical clearance, risk reduction, supervision and follow-up are robust. That is defensible because it shows rural constraints were managed actively rather than used to justify unsafe discharge.`
  },
  {
    "id": "FINAL-063",
    "topic": "rural",
    "difficulty": "consultant",
    "title": "Regional involuntary transfer 300km",
    "candidateRole": "regional consultant psychiatrist",
    "setting": "Hospital ED with nearest authorised bed 300 km away",
    "stem": "You are the regional consultant psychiatrist. Hospital ED with nearest authorised bed 300 km away.\n\nLiam, a 31-year-old man with mania, drove at high speed through town saying God exempted him from road rules. Liam says, \"God told me road rules do not apply.\" \n\nAmbulance says, \"Transfer cannot happen until morning.\" ED doctor asks, \"Can we sedate him overnight?\" Mother says, \"He gets worse when police are around.\" Liam identifies as Aboriginal and asks for his uncle.\n\nUncle says, \"Let me talk him down before cuffs.\" You must decide whether to detain safely overnight and transfer lawfully.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "delay-as-wait shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "Transfer cannot happen until morning.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass mania causing public safety risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Transfer cannot happen until morning.' without first formulating mania causing public safety risk, immediate safety and a defensible disposition.",
        "keywords": [
          "delay-as-wait shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "mania causing public safety risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "God told me road rules do not apply.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around mania causing public safety risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "mania causing public safety risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "sedation and MHA transport — legal/policy hinge",
        "category": "mental_health_act",
        "severity": "critical",
        "clueInStem": "Can we sedate him overnight?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "sedation and MHA transport",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "least restrictive culturally informed containment — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He gets worse when police are around.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect least restrictive culturally informed containment, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "least restrictive culturally informed containment",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Let me talk him down before cuffs.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to detain safely overnight and transfer lawfully",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Liam should not simply wait untreated until morning because "Transfer cannot happen until morning." That is the unsafe shortcut. Transfer delay is not a clinical plan when a manic patient has driven at high speed through town under a religious/grandiose belief that road rules do not apply. Overnight containment must be active, lawful and culturally informed, not passive waiting or sedation for convenience.

His statement, "God told me road rules do not apply," is the core risk clue. It shows that his manic or psychotic belief has already translated directly into dangerous public behaviour. This is not merely elevated mood or poor judgement in the abstract; it has created traffic risk to Liam and others. I would assess ongoing mania, psychosis, sleep deprivation, substances, insight, willingness to accept medication, and risk of absconding or further driving. Car keys and vehicle access should be secured.

The ED doctor asks, "Can we sedate him overnight?" Sedation may be clinically necessary if he is behaviourally disturbed, unsafe or cannot be contained, but it is not the answer to rural transfer delay by itself. I would first attempt de-escalation, low-stimulus environment, oral medication, involvement of trusted family, and clear MHA paperwork. If rapid tranquillisation is required, it must follow policy, be proportionate, monitored and documented, with physical health observations and transfer implications considered.

The mother says, "He gets worse when police are around," and Liam asks for his uncle. The uncle says, "Let me talk him down before cuffs." These are not sentimental details; they are the least restrictive route if safe. For an Aboriginal man in a regional ED, using trusted kin may reduce escalation and avoid unnecessary handcuffing. However, if family involvement cannot safely contain risk, police may still be required under the correct legal authority.

I would document the dangerous driving, the quote about God and road rules, why transfer delay still required active containment, the MHA authority, medication/sedation rationale, family/uncle involvement, police role and monitoring plan. The documentation is defensible because it shows that the team neither abandoned safety overnight nor defaulted to culturally unsafe coercion.`
  },
  {
    "id": "FINAL-064",
    "topic": "rural",
    "difficulty": "consultant",
    "title": "Remote alcohol violence and community pressure",
    "candidateRole": "rural psychiatrist",
    "setting": "Remote clinic/police joint call",
    "stem": "You are the rural psychiatrist. Remote clinic/police joint call.\n\nNoah, a 40-year-old Aboriginal man, threatened his partner with a shovel while intoxicated. Noah says, \"I only scared her because she was taking the kids.\" \n\nCommunity leader says, \"Handle it inside community.\" Police asks, \"Can he sober up in cells?\" Partner says, \"If he comes back tonight, someone will die.\" His brother died by suicide and he has a head injury history.\n\nAunt says, \"He drinks when grief takes him.\" You must decide whether to protect family, manage intoxication and respect community role.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "community-pressure shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "Handle it inside community.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass alcohol-related family violence, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Handle it inside community.' without first formulating alcohol-related family violence, immediate safety and a defensible disposition.",
        "keywords": [
          "community-pressure shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "alcohol-related family violence — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I only scared her because she was taking the kids.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around alcohol-related family violence, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "alcohol-related family violence",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "custody and medical clearance — legal/policy hinge",
        "category": "mental_health_act",
        "severity": "critical",
        "clueInStem": "Can he sober up in cells?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "custody and medical clearance",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "victim/children immediate safety — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "If he comes back tonight, someone will die.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect victim/children immediate safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "victim/children immediate safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "He drinks when grief takes him.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to protect family, manage intoxication and respect community role",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Noah's case should not be handled only "inside community" because a community leader requests it. That is the unsafe shortcut. Community processes may be protective and culturally meaningful, but they cannot replace immediate victim safety, medical assessment and legal responsibilities after a man threatened his partner with a shovel while intoxicated. The partner's statement, "If he comes back tonight, someone will die," makes this an immediate family violence safety issue.

Noah's statement, "I only scared her because she was taking the kids," is the central formulation. It minimises violence and frames intimidation as justified by threatened loss of control over the children. This is coercive family violence language, not reassurance. Alcohol may contribute to disinhibition, and his brother's suicide and head injury history may increase depression, impulsivity or neuropsychiatric vulnerability, but none of those factors remove the need to protect his partner and children tonight.

Police ask, "Can he sober up in cells?" That is a medical and legal question. Cells may be needed for criminal justice or immediate containment, but intoxication, possible head injury history, withdrawal risk and suicide risk require health assessment. If he is medically unsafe for cells, he requires clinic or hospital assessment. If he meets criteria for mental health assessment, that should be pursued, but psychiatric pathways must not displace family violence protection.

The aunt's statement, "He drinks when grief takes him," is important for culturally informed engagement and later treatment planning, but grief must not be used to minimise the threat. I would support police protection, safe accommodation and family violence support for the partner and children, consider child safety notification if children were exposed or at risk, and involve community leaders only in ways that strengthen safety and do not silence the victim.

I would document the shovel threat, intoxication, Noah's minimising statement, partner's lethal-risk warning, head injury and suicide-bereavement history, police/medical clearance advice, community-leader role, and child/victim safety actions. This is defensible because it respects community context while making clear that cultural process cannot override statutory and clinical safety obligations.`
  },
  {
    "id": "FINAL-065",
    "topic": "rural",
    "difficulty": "consultant",
    "title": "Rural complex PTSD no safe telehealth",
    "candidateRole": "regional psychiatrist",
    "setting": "Rural community clinic",
    "stem": "You are the regional psychiatrist. Rural community clinic.\n\nEmma, a 42-year-old woman with complex PTSD, has no local trauma specialist and unreliable internet. Emma says, \"If they hear me talking on video, I am not safe.\" \n\nService manager says, \"We do not provide long-term therapy here.\" GP asks, \"Can psychiatry take over alprazolam scripts?\" Daughter says, \"She stays home from school to watch Mum.\" Emma lives beside her ex-partner's family in a small town.\n\nEmma says, \"Every new clinician makes me retell it then leaves.\" You must decide whether to provide trauma-informed stepped care despite rural limits.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "service-boundary shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "We do not provide long-term therapy here.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass telehealth unsafe due to family violence proximity, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'We do not provide long-term therapy here.' without first formulating telehealth unsafe due to family violence proximity, immediate safety and a defensible disposition.",
        "keywords": [
          "service-boundary shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "telehealth unsafe due to family violence proximity — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "If they hear me talking on video, I am not safe.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around telehealth unsafe due to family violence proximity, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "telehealth unsafe due to family violence proximity",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "benzodiazepine governance — legal/policy hinge",
        "category": "mental_health_act",
        "severity": "critical",
        "clueInStem": "Can psychiatry take over alprazolam scripts?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "benzodiazepine governance",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "young-carer safeguarding — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She stays home from school to watch Mum.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect young-carer safeguarding, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "young-carer safeguarding",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Every new clinician makes me retell it then leaves.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to provide trauma-informed stepped care despite rural limits",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Emma should not be discharged from specialist responsibility simply because the service says, "We do not provide long-term therapy here." That is the unsafe shortcut. It may be true that the rural service cannot provide indefinite trauma therapy, but using that boundary to offer no safe plan would repeat the abandonment and fragmentation that are central to her trauma presentation. The consultant task is to build a stepped, realistic, trauma-informed plan within rural constraints.

Her statement, "If they hear me talking on video, I am not safe," is the most important practical clue. Telehealth is often offered as the rural solution, but in Emma's case video therapy may create danger because she lives beside her ex-partner's family in a small town. A plan that ignores privacy and family violence proximity is not trauma-informed. I would assess immediate safety, stalking or intimidation, safe locations for telehealth, whether phone/text is safer, and whether family violence services are involved.

The GP asks, "Can psychiatry take over alprazolam scripts?" This should not be managed by either automatic takeover or abrupt refusal. Long-term alprazolam in complex PTSD carries dependence, withdrawal, falls, cognitive and emotional regulation risks, but sudden cessation could be dangerous and feel rejecting. I would review dose, duration, dependence, alcohol or other substances, withdrawal risk and negotiate a slow, supported plan with the GP, while offering alternatives for sleep and anxiety.

Her daughter says, "She stays home from school to watch Mum." That makes this a safeguarding and young-carer issue, not just an adult trauma case. I would assess the daughter's safety, school attendance, emotional burden and whether family or child services can support her without blaming Emma. Emma's other statement, "Every new clinician makes me retell it then leaves," tells me not to start by requiring another detailed trauma narrative. I would focus on stabilisation, continuity, consent, and avoiding repeated re-traumatisation.

I would document why generic telehealth was unsafe, the benzodiazepine governance plan, the young-carer concern, family violence proximity, service limitations and the stepped-care plan. The documentation is defensible because it shows that lack of a local trauma specialist did not become a reason for therapeutic abandonment.`
  },
  {
    "id": "FINAL-066",
    "topic": "rural",
    "difficulty": "consultant",
    "title": "Remote perinatal psychosis and weathered-in transfer",
    "candidateRole": "remote perinatal consultant",
    "setting": "Island community clinic during cyclone warning",
    "stem": "You are the remote perinatal consultant. Island community clinic during cyclone warning.\n\nLani, a 30-year-old woman seven days postpartum, believes the baby is cursed and refuses feeding. Lani says, \"The sea wants him back.\" \n\nNurse says, \"The plane cannot land until morning, so family must manage.\" Midwife asks, \"Can we separate mother and baby without an order?\" Baby says, \"He has not fed for ten hours.\" The community elder says cultural/spiritual explanation must be respected.\n\nGrandmother says, \"Do not send her away alone.\" You must decide whether to contain locally overnight and plan culturally safe retrieval.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "weather-delay shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "The plane cannot land until morning, so family must manage.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass postpartum psychosis with infant neglect risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'The plane cannot land until morning, so family must manage.' without first formulating postpartum psychosis with infant neglect risk, immediate safety and a defensible disposition.",
        "keywords": [
          "weather-delay shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "postpartum psychosis with infant neglect risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "The sea wants him back.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around postpartum psychosis with infant neglect risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "postpartum psychosis with infant neglect risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "infant safety and legal authority — legal/policy hinge",
        "category": "mental_health_act",
        "severity": "critical",
        "clueInStem": "Can we separate mother and baby without an order?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "infant safety and legal authority",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "newborn medical risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He has not fed for ten hours.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect newborn medical risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "newborn medical risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Do not send her away alone.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to contain locally overnight and plan culturally safe retrieval",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Lani's family should not simply be left to manage overnight because the plane cannot land until morning. The unsafe shortcut is the nurse's statement, "The plane cannot land until morning, so family must manage." Weather may prevent retrieval, but it does not remove the service's responsibility to create a structured local containment plan for a seven-day postpartum woman with psychotic beliefs and an infant who has not fed for ten hours.

Her statement, "The sea wants him back," is the key clinical phrase. It suggests postpartum psychosis or a severe culturally/spiritually shaped delusional belief involving the baby being returned to the sea. This is not simply a benign spiritual explanation, because it is linked to refusal of feeding and potential infant neglect or harm. I would treat the baby as medically vulnerable, arrange urgent assessment of hydration, glucose, temperature and feeding, and ensure the baby is not left unsupervised with Lani while she is acutely unwell.

The midwife asks, "Can we separate mother and baby without an order?" That is the legal and ethical hinge. Mother-baby separation is a serious intervention and should be least restrictive, but emergency infant safety may justify supervised separation or transfer of care to another safe adult if the infant is at serious risk. I would clarify local child protection, emergency medical and mental health provisions, and involve senior maternity/paediatric advice remotely.

The elder's statement that cultural/spiritual explanation must be respected is important. I would not dismiss cultural meaning, but I would distinguish respect from inaction when the baby has not fed. Grandmother's statement, "Do not send her away alone," should shape retrieval planning: if transfer is needed, a culturally safe escort, family contact and receiving-service handover should be arranged where possible. Overnight, family may help if assessed safe, but they should not be abandoned with sole responsibility.

I would document the postpartum timing, the "sea wants him back" belief, baby's ten-hour no-feed risk, legal authority for supervised separation or infant care, weather constraint, cultural consultation, grandmother's request, and retrieval plan. The record is defensible because it shows that weather delay led to active risk management, not passive delegation to family.`
  },
  {
    "id": "FINAL-067",
    "topic": "rural",
    "difficulty": "consultant",
    "title": "Farmer firearms suicide risk and stigma",
    "candidateRole": "rural psychiatrist",
    "setting": "GP telehealth consult in drought-affected town",
    "stem": "You are the rural psychiatrist. GP telehealth consult in drought-affected town.\n\nBill, a 76-year-old farmer, is depressed, drinking and sleeping beside his gun safe. Bill says, \"A man without his rifle is already dead.\" \n\nGP says, \"He denies suicidality, so we cannot remove guns.\" Police asks, \"What is our authority around firearms?\" Wife says, \"He sits in the shed with the gun safe open.\" Firearms are central to his rural identity and community status.\n\nBill says, \"Do not let the town know I am weak.\" You must decide whether to restrict firearms and manage suicide risk without shaming.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "denial shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "He denies suicidality, so we cannot remove guns.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass firearms-related suicide risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He denies suicidality, so we cannot remove guns.' without first formulating firearms-related suicide risk, immediate safety and a defensible disposition.",
        "keywords": [
          "denial shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "firearms-related suicide risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "A man without his rifle is already dead.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around firearms-related suicide risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "firearms-related suicide risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "firearms safety pathway — legal/policy hinge",
        "category": "mental_health_act",
        "severity": "critical",
        "clueInStem": "What is our authority around firearms?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "firearms safety pathway",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "spouse collateral and immediate risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He sits in the shed with the gun safe open.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect spouse collateral and immediate risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "spouse collateral and immediate risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Do not let the town know I am weak.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to restrict firearms and manage suicide risk without shaming",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Bill's firearms should not be left accessible because the GP says, "He denies suicidality, so we cannot remove guns." That is the unsafe shortcut. Denial of suicidal ideation is especially weak when a depressed, drinking older farmer is sleeping beside his gun safe and his wife says he sits in the shed with the gun safe open. Firearm access makes any impulsive suicidal act highly lethal.

His statement, "A man without his rifle is already dead," is the formulation-changing phrase. It tells me the firearm is tied to identity, masculinity, autonomy and community status, not merely a tool. Removing or restricting firearms may therefore feel like humiliation or symbolic death. That means the conversation must be respectful and shame-sensitive, but the risk still requires action. I would ask about depression, alcohol use, sleep, hopelessness, burdensomeness, cognitive impairment, prior attempts, firearm handling and whether the guns are loaded.

Police ask, "What is our authority around firearms?" The legal pathway depends on jurisdiction, but police and licensing processes often allow temporary removal, safe storage, suspension or welfare-based action when there is safety concern. This may be the least restrictive intervention if it reduces suicide risk without requiring admission. If he refuses all safety measures and mental disorder creates serious risk, MHA assessment may be required.

His wife is a vulnerable carer and a key collateral source. Her statement about the gun safe being open should be weighted heavily, and she should not be asked to secretly manage firearms if that places her at risk. Rural stigma matters because Bill says, "Do not let the town know I am weak." I would frame firearm restriction as temporary safe storage during a health crisis, not confiscation or public shaming, and arrange discreet follow-up through trusted rural supports.

I would document the open gun safe, depression and alcohol risk, the "rifle" identity statement, police/firearm advice, wife's safety, confidentiality concerns and the agreed or imposed means-restriction plan. Defensible documentation shows that firearm access was treated as a lethal means issue despite denial, while rural identity and shame were actively managed.`
  },
  {
    "id": "FINAL-068",
    "topic": "rural",
    "difficulty": "consultant",
    "title": "Rural Aboriginal elder delirium not dementia",
    "candidateRole": "rural CL psychiatrist",
    "setting": "Small hospital ward with no geriatrician",
    "stem": "You are the rural CL psychiatrist. Small hospital ward with no geriatrician.\n\nAunty May, a 79-year-old Aboriginal elder, is confused after infection and staff think it is dementia. Aunty May says, \"This place is not my country.\" \n\nNurse says, \"She is aggressive; give something strong.\" Doctor asks, \"Can we transfer her 500km for behaviour?\" Family says, \"She was leading community meetings last week.\" No Aboriginal Liaison Officer is available overnight.\n\nGranddaughter says, \"She calms when family speak language.\" You must decide whether to treat delirium locally with cultural supports.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "sedation shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "She is aggressive; give something strong.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass delirium plus cultural dislocation, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'She is aggressive; give something strong.' without first formulating delirium plus cultural dislocation, immediate safety and a defensible disposition.",
        "keywords": [
          "sedation shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "delirium plus cultural dislocation — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "This place is not my country.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around delirium plus cultural dislocation, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "delirium plus cultural dislocation",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "transfer versus local delirium care — legal/policy hinge",
        "category": "mental_health_act",
        "severity": "critical",
        "clueInStem": "Can we transfer her 500km for behaviour?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "transfer versus local delirium care",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "baseline collateral — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She was leading community meetings last week.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect baseline collateral, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "baseline collateral",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "She calms when family speak language.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to treat delirium locally with cultural supports",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Aunty May should not be given "something strong" simply because staff describe her as aggressive. That is the unsafe shortcut. An older Aboriginal elder who was leading community meetings last week and is now confused after infection is presenting as delirium until proven otherwise. Sedating her without treating causes may worsen delirium, falls, aspiration, dislocation and mistrust.

Her phrase, "This place is not my country," is clinically meaningful. It may reflect delirium, cultural dislocation, fear in an unfamiliar hospital, or all three. It should not be dismissed as dementia or aggression. The family collateral, "She was leading community meetings last week," is crucial baseline evidence of acute change. I would assess infection, pain, hypoxia, dehydration, constipation, urinary retention, medications, sleep, sensory impairment and metabolic abnormalities.

The doctor asks, "Can we transfer her 500km for behaviour?" Transfer for behaviour alone may worsen delirium and remove her from country, language and family supports. If she needs medical care unavailable locally, transfer may be required, but the first question is whether delirium can be treated locally with cultural supports. No Aboriginal Liaison Officer overnight is a limitation, but granddaughter says, "She calms when family speak language," which is an immediate therapeutic intervention.

The vulnerable person is Aunty May herself, at risk from delirium, restraint, over-sedation and culturally unsafe care. Staff also need safety, so I would support de-escalation, family presence, interpreter/language support, low-stimulus environment and one-to-one observation if required. Medication should be reserved for severe distress or imminent danger, used at the lowest dose and reviewed frequently.

I would document the acute baseline change, infection, cultural dislocation phrase, family-language response, rejection of sedation as first-line, transfer reasoning, and delirium management plan. This is defensible because it shows the service did not medicalise culture or sedate an elder for system convenience.`
  },
  {
    "id": "FINAL-069",
    "topic": "rural",
    "difficulty": "consultant",
    "title": "Rural child abuse disclosure with no paediatric bed",
    "candidateRole": "CAMHS consultant by telehealth",
    "setting": "Rural ED after school disclosure",
    "stem": "You are the CAMHS consultant by telehealth. Rural ED after school disclosure.\n\nElla, a 13-year-old girl, told school she self-harmed after stepfather came into her room. Ella says, \"I cut so I would not feel him touching me.\" \n\nED GP says, \"The wound is superficial and there is no paediatric bed.\" Police asks, \"Can she go home while we investigate?\" Younger sibling says, \"My brother still sleeps in that house.\" The family belongs to a small community where disclosure may spread quickly.\n\nMother says, \"You will destroy our family if you report.\" You must decide whether to ensure safe placement and forensic/medical pathway.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "superficial-wound shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "The wound is superficial and there is no paediatric bed.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass sexual trauma and self-harm, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'The wound is superficial and there is no paediatric bed.' without first formulating sexual trauma and self-harm, immediate safety and a defensible disposition.",
        "keywords": [
          "superficial-wound shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "sexual trauma and self-harm — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I cut so I would not feel him touching me.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around sexual trauma and self-harm, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "sexual trauma and self-harm",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "child protection and forensic safety — legal/policy hinge",
        "category": "mental_health_act",
        "severity": "critical",
        "clueInStem": "Can she go home while we investigate?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "child protection and forensic safety",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "sibling safety risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "My brother still sleeps in that house.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect sibling safety risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "sibling safety risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "You will destroy our family if you report.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to ensure safe placement and forensic/medical pathway",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Ella must not be sent home because the wound is superficial and there is no paediatric bed. The unsafe shortcut is the ED GP's statement, "The wound is superficial and there is no paediatric bed." The self-harm is not the main severity marker; the disclosure suggests possible sexual abuse by a stepfather and an unsafe home environment. A superficial cut can be the visible part of a high-risk safeguarding presentation.

Her statement, "I cut so I would not feel him touching me," is the key clinical phrase. It links self-harm directly to sexual trauma and dissociation or emotional pain. I would not interrogate her repeatedly or conduct a forensic interview myself, but I would ensure her immediate safety, medical care, trauma-informed support, and referral through the correct forensic/sexual assault and child protection pathway. Her disclosure must be handled in a way that preserves evidentiary integrity and avoids contamination.

Police ask, "Can she go home while we investigate?" That is the legal and child-safety hinge. The answer is no unless the home is demonstrably safe and the alleged perpetrator has no access. The younger sibling's statement, "My brother still sleeps in that house," means other children may be at ongoing risk. Child protection and police need to coordinate safe placement tonight, including kinship options if safe.

The mother says, "You will destroy our family if you report." I would acknowledge her distress but explain that the duty is to protect Ella and other children. The small-community risk of disclosure spreading means privacy and careful communication are essential, but secrecy cannot override mandatory reporting. The absence of a paediatric bed requires escalation to safe placement, not discharge to danger.

I would document Ella's exact disclosure, who heard it, what questions were and were not asked, injury care, child protection/police notifications, sibling safety, safe placement, and privacy precautions. The documentation is defensible because it protects the child, preserves forensic integrity and explains why bed scarcity did not determine disposition.`
  },
  {
    "id": "FINAL-070",
    "topic": "rural",
    "difficulty": "consultant",
    "title": "Remote CTO breach and cultural return-to-country",
    "candidateRole": "rural community psychiatrist",
    "setting": "Remote outreach clinic",
    "stem": "You are the rural community psychiatrist. Remote outreach clinic.\n\nThomas, a 34-year-old Aboriginal man on CTO, has missed depot since returning to country for sorry business. Thomas says, \"The clinic is not where my spirit should be right now.\" \n\nCase manager says, \"Breach him; he is non-compliant.\" Tribunal officer asks, \"Is recall the least restrictive option?\" Grandmother says, \"He needs ceremony and medicine, both.\" There is no visiting psychiatrist for three weeks.\n\nThomas says, \"If police come, I will run bush.\" You must decide whether to enforce CTO or adapt culturally safe treatment.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "breach shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "Breach him; he is non-compliant.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass cultural obligations and relapse risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Breach him; he is non-compliant.' without first formulating cultural obligations and relapse risk, immediate safety and a defensible disposition.",
        "keywords": [
          "breach shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "cultural obligations and relapse risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "The clinic is not where my spirit should be right now.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around cultural obligations and relapse risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "cultural obligations and relapse risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "CTO legal threshold — legal/policy hinge",
        "category": "mental_health_act",
        "severity": "critical",
        "clueInStem": "Is recall the least restrictive option?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "CTO legal threshold",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "family/cultural protective factors — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He needs ceremony and medicine, both.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect family/cultural protective factors, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "family/cultural protective factors",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "If police come, I will run bush.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to enforce CTO or adapt culturally safe treatment",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Thomas should not automatically be breached because the case manager says, "Breach him; he is non-compliant." That is the unsafe shortcut. Missing depot while returning to country for sorry business may increase relapse risk, but it is not the same as wilful disengagement. A consultant-level response asks whether recall is necessary and least restrictive, or whether culturally adapted treatment can manage risk better.

Thomas's statement, "The clinic is not where my spirit should be right now," is the key formulation. It communicates cultural obligation, grief and place-based meaning. It does not mean medication is unimportant, and grandmother's statement, "He needs ceremony and medicine, both," provides the best formulation: cultural practice and treatment should be integrated rather than set against each other. I would assess current mental state, early relapse signs, substance use, risk, insight and willingness to receive medication in a culturally appropriate location or through outreach.

The tribunal officer asks, "Is recall the least restrictive option?" That is the legal hinge. A CTO should not be enforced punitively. Recall may be necessary if relapse risk is serious, treatment cannot be delivered safely, or he is deteriorating and refusing all engagement. But if depot can be arranged through remote outreach, Aboriginal health workers, family support or adjusted timing around ceremony, that may be safer and less restrictive.

His warning, "If police come, I will run bush," is a risk clue. Police-led enforcement may create absconding and greater danger. With no visiting psychiatrist for three weeks, I would escalate alternative arrangements rather than wait: remote review, local nurse administration if lawful, visiting mental health, transport support or tribunal variation. The cultural context is central to feasibility.

I would document missed depot, sorry business, mental state, grandmother's collateral, recall threshold, police/absconding risk, adapted medication plan and contingency triggers. That documentation is defensible because it shows the CTO was used to support treatment and safety, not to punish cultural absence.`
  },
  {
    "id": "FINAL-071",
    "topic": "governance",
    "difficulty": "consultant",
    "title": "Impaired colleague intoxicated on shift",
    "candidateRole": "clinical director of mental health",
    "setting": "After-hours incident review",
    "stem": "You are the clinical director of mental health. After-hours incident review.\n\nDr K, a consultant psychiatrist, appeared intoxicated and ordered IM sedation without review. Dr K says, \"I am going through a divorce; please do not destroy my career.\" \n\nExecutive says, \"Handle this quietly; we cannot lose another consultant.\" Nurse manager asks, \"Is this mandatory reporting?\" Sedated patient says, \"He never came into the seclusion area.\" A nurse feared challenging him because he signs performance reviews.\n\nNurse says, \"I was afraid to challenge him.\" You must decide whether to remove from duty, investigate and report.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "reputation/workforce shortcut — unsafe shortcut under pressure",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "Handle this quietly; we cannot lose another consultant.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass impaired colleague with patient safety risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Handle this quietly; we cannot lose another consultant.' without first formulating impaired colleague with patient safety risk, immediate safety and a defensible disposition.",
        "keywords": [
          "reputation/workforce shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "impaired colleague with patient safety risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I am going through a divorce; please do not destroy my career.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around impaired colleague with patient safety risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "impaired colleague with patient safety risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "AHPRA/mandatory notification threshold — legal/policy hinge",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "Is this mandatory reporting?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "AHPRA/mandatory notification threshold",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "patient harmed by unsafe order — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He never came into the seclusion area.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect patient harmed by unsafe order, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "patient harmed by unsafe order",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "I was afraid to challenge him.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to remove from duty, investigate and report",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Dr K's situation must not be handled quietly because the executive says, "Handle this quietly; we cannot lose another consultant." That is the unsafe shortcut. Workforce shortage and reputation cannot override patient safety when a consultant appears intoxicated, orders IM sedation without review, and a patient reports he never entered the seclusion area. The immediate task is to protect patients and staff while applying procedural fairness to Dr K.

Dr K's plea, "I am going through a divorce; please do not destroy my career," is important but cannot determine the response. It may indicate stress, impairment, alcohol misuse or a need for support, but it does not excuse unsafe practice. I would remove him from clinical duty pending fitness-for-work assessment, offer occupational health and support, and ensure he has a fair opportunity to respond. Compassion and accountability must occur together.

The nurse manager asks, "Is this mandatory reporting?" That requires careful threshold analysis. If there is a reasonable belief that intoxication or impairment placed the public at substantial risk, mandatory notification may be required depending on jurisdiction. I would seek governance/regulatory advice if needed, but I would not delay immediate duty restriction and incident review. The patient who says, "He never came into the seclusion area" identifies potential false documentation or unsafe sedation, which must be investigated.

The nurse saying, "I was afraid to challenge him," reveals a hierarchy and safety-culture problem. Staff fear of challenging consultants increases patient risk. I would support the nurse, protect against retaliation, and review escalation pathways so staff can raise concerns after hours. The sedated patient is the vulnerable person and needs clinical review, explanation and open disclosure if harm or risk occurred.

I would document the allegation, immediate patient review, restriction of Dr K's duties, support offered to him, staff-safety concerns, evidence preservation, incident-reporting steps and mandatory notification reasoning. The documentation is defensible because it shows the service did not choose reputation over safety or scapegoating over fair process.`
  },
  {
    "id": "FINAL-072",
    "topic": "governance",
    "difficulty": "consultant",
    "title": "Medication error clozapine open disclosure",
    "candidateRole": "inpatient consultant clinical lead",
    "setting": "Acute ward after serious medication error",
    "stem": "You are the inpatient consultant clinical lead. Acute ward after serious medication error.\n\nHelen, a 54-year-old woman, received clozapine instead of quetiapine, became hypotensive and fractured her wrist. Helen says, \"No one told us this was your mistake.\" \n\nRisk manager says, \"Avoid admitting liability.\" Registrar asks, \"Do we incident report if pharmacy also missed it?\" Helen says, \"I fell because I could not stand.\" Staff are blaming each other across nursing, pharmacy and medicine.\n\nNurse says, \"I thought pharmacy checked it.\" You must decide whether to manage harm, disclose and investigate systems.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "defensive-disclosure shortcut — unsafe shortcut under pressure",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "Avoid admitting liability.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass open disclosure after medication harm, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Avoid admitting liability.' without first formulating open disclosure after medication harm, immediate safety and a defensible disposition.",
        "keywords": [
          "defensive-disclosure shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "open disclosure after medication harm — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "No one told us this was your mistake.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around open disclosure after medication harm, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "open disclosure after medication harm",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "incident governance and systems review — legal/policy hinge",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "Do we incident report if pharmacy also missed it?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "incident governance and systems review",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "patient harm and physical safety — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I fell because I could not stand.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect patient harm and physical safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "patient harm and physical safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "I thought pharmacy checked it.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to manage harm, disclose and investigate systems",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Helen's medication error should not be managed by the defensive shortcut, "Avoid admitting liability." Open disclosure is not the same as reckless legal admission; it is an ethical and governance obligation after harm. Helen received clozapine instead of quetiapine, became hypotensive and fractured her wrist. The first consultant action is to ensure ongoing medical care, not to shape language to protect the institution.

Her statement, "No one told us this was your mistake," is the key clinical and ethical phrase. It tells me the harm has already been compounded by poor communication. I would meet Helen and her family, explain the known facts plainly, apologise for what happened, outline her current treatment and the investigation process, and avoid speculation until the systems review is complete. I would ensure she receives fracture care, monitoring for clozapine effects and psychological support.

The registrar asks, "Do we incident report if pharmacy also missed it?" The answer is yes. Shared failure across pharmacy, nursing and medicine is exactly why incident reporting is required. It is not a reason to avoid reporting; it is evidence that a systems review is needed. The nurse's statement, "I thought pharmacy checked it," points to a medication reconciliation/checking failure and possibly unsafe assumptions about clozapine controls.

Helen's second statement, "I fell because I could not stand," grounds the error in patient harm. Staff blaming each other must be redirected into just culture: identify what failed, support staff, and maintain accountability. I would review prescribing, dispensing, administration, alerts, handover, and whether clozapine-specific safeguards were bypassed.

I would document the event, clinical harm, open disclosure conversation, apology, incident report, preservation of records, systems-review plan and immediate safety changes. That documentation is defensible because it demonstrates honesty, patient care and learning, rather than concealment driven by liability fear.`
  },
  {
    "id": "FINAL-073",
    "topic": "governance",
    "difficulty": "consultant",
    "title": "Executive pressure unsafe discharge",
    "candidateRole": "inpatient consultant psychiatrist",
    "setting": "Acute unit with access block",
    "stem": "You are the inpatient consultant psychiatrist. Acute unit with access block.\n\nTariq, a 32-year-old man with schizoaffective disorder, has threatened an ex-partner during psychosis and remains guarded. Tariq says, \"When I leave, I know where she lives.\" \n\nExecutive director says, \"We need this bed today.\" Registrar asks, \"Can we document that he denies intent?\" Ex-partner says, \"There is an active family violence order.\" Tariq is from a migrant family who fears police involvement.\n\nBed manager says, \"ED is breaching targets.\" You must decide whether to refuse discharge and escalate victim safety/legal actions.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "executive-pressure shortcut — unsafe shortcut under pressure",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "We need this bed today.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass specific threat to identifiable victim, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'We need this bed today.' without first formulating specific threat to identifiable victim, immediate safety and a defensible disposition.",
        "keywords": [
          "executive-pressure shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "specific threat to identifiable victim — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "When I leave, I know where she lives.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around specific threat to identifiable victim, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "specific threat to identifiable victim",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "defensible documentation and duty to protect — legal/policy hinge",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "Can we document that he denies intent?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "defensible documentation and duty to protect",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "identified victim safety — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "There is an active family violence order.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect identified victim safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "identified victim safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "ED is breaching targets.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to refuse discharge and escalate victim safety/legal actions",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Tariq should not be discharged because the executive director says, "We need this bed today." That is the unsafe shortcut. Bed pressure is real, but it cannot override a specific threat to an identifiable victim in a patient still guarded after psychosis and with an active family violence order. Discharging him under these circumstances would be a clinical and governance failure.

His statement, "When I leave, I know where she lives," is the key risk phrase. It is specific, future-oriented and directed at an identifiable ex-partner. The registrar's suggestion, "Can we document that he denies intent?" misunderstands risk assessment. Denial of intent is not a protective factor when the patient has made a targeted statement and remains guarded. I would formulate risk around psychosis, family violence, access to the victim, prior threats, treatment response and ability to comply with restrictions.

The legal and ethical tension is duty to protect versus confidentiality and least restrictive care. The active family violence order means police/family violence liaison is necessary. I would consider whether the ex-partner needs warning or safety action through lawful channels, and whether Tariq continues to meet criteria for involuntary admission or treatment. I would not disclose more than necessary, but I would not hide behind confidentiality when serious risk to an identified person exists.

His migrant family fears police involvement, and that fear should be acknowledged and managed with explanation and interpreters if needed. But cultural or family fear cannot prevent victim-safety action. The bed manager's statement, "ED is breaching targets," should be documented as a system pressure and escalated, not allowed to determine clinical discharge.

I would document the exact threat, the active family violence order, denial-of-intent limitations, police/victim-safety actions, cultural/family concerns, executive pressure and the rationale for ongoing admission or any alternative disposition. This is defensible because it shows the consultant protected an identifiable victim and did not discharge the bed rather than the patient.`
  },
  {
    "id": "FINAL-074",
    "topic": "governance",
    "difficulty": "consultant",
    "title": "Registrar beyond competence and false consultant aware",
    "candidateRole": "consultant supervisor",
    "setting": "Regional service after ICU oversedation",
    "stem": "You are the consultant supervisor. Regional service after ICU oversedation.\n\nStage 1 registrar, Dr Lee, prescribed rapid tranquillisation without observations and a patient went to ICU. Stage 1 registrar says, \"Consultant aware.\" \n\nNUM says, \"Staff now bypass the registrar.\" Director of Training asks, \"Is this remediation or notification?\" Patient says, \"I woke up in ICU and no one explained.\" The registrar says independence was expected in the service culture.\n\nRegistrar says, \"I thought consultants wanted us to cope.\" You must decide whether to restrict duties, remediate and investigate.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "workaround shortcut — unsafe shortcut under pressure",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "Staff now bypass the registrar.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass false documentation and supervision failure, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Staff now bypass the registrar.' without first formulating false documentation and supervision failure, immediate safety and a defensible disposition.",
        "keywords": [
          "workaround shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "false documentation and supervision failure — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Consultant aware.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around false documentation and supervision failure, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "false documentation and supervision failure",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "training governance and professional conduct — legal/policy hinge",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "Is this remediation or notification?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "training governance and professional conduct",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "patient harm and open disclosure — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I woke up in ICU and no one explained.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect patient harm and open disclosure, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "patient harm and open disclosure",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "I thought consultants wanted us to cope.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to restrict duties, remediate and investigate",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Dr Lee's unsafe practice should not be managed by the informal workaround that "Staff now bypass the registrar." That is the unsafe shortcut. Bypassing may protect patients briefly, but it leaves the underlying supervision, competence and documentation failures unresolved. A patient went to ICU after rapid tranquillisation without observations, so the response must be formal, immediate and fair.

The phrase "Consultant aware" is the key professional clue. If the consultant was not in fact aware, this is inaccurate documentation in a high-risk event. It may reflect panic, misunderstanding, a culture of assumed independence or deliberate misrepresentation; the difference matters and must be investigated. I would ensure the record is corrected through proper addendum, not quietly altered.

The Director of Training asks, "Is this remediation or notification?" The answer depends on facts, insight, harm, pattern and risk. Immediate restriction of duties and close supervision are required while investigation occurs. Remediation may include rapid-tranquillisation training, documentation review, observed assessments and explicit escalation thresholds. Notification may be required if professional conduct or public safety thresholds are met.

The patient saying, "I woke up in ICU and no one explained," identifies open disclosure and patient harm. I would ensure the patient receives an explanation, apology where appropriate, and follow-up care. The registrar's statement, "I thought consultants wanted us to cope," suggests a service culture problem, not only individual failure. A Stage 1 registrar should not infer that dangerous after-hours decisions must be made alone.

I would document patient review, duty restrictions, record correction, open disclosure, supervision changes, registrar discussion, training director involvement, and the notification/remediation rationale. This is defensible because it protects patients while treating the registrar fairly and addressing the system that allowed unsafe independence.`
  },
  {
    "id": "FINAL-075",
    "topic": "governance",
    "difficulty": "consultant",
    "title": "Social media privacy breach by registrar",
    "candidateRole": "consultant training supervisor",
    "setting": "Acute inpatient unit governance meeting",
    "stem": "You are the consultant training supervisor. Acute inpatient unit governance meeting.\n\nA Stage 2 registrar, posted about an involuntary patient on social media with identifying details. A Stage 2 registrar says, \"It was anonymous; I was just venting.\" \n\nService manager says, \"Delete the screenshots and handle it informally.\" Whanau liaison asks, \"Do we need open disclosure with the whānau?\" Patient says, \"You people are making fun of me.\" The patient is a Māori woman and whānau already distrust services.\n\nRegistrar says, \"Everyone posts de-identified things.\" You must decide whether to preserve evidence, disclose and remediate/report.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "cover-up shortcut — unsafe shortcut under pressure",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "Delete the screenshots and handle it informally.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass privacy breach minimisation, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Delete the screenshots and handle it informally.' without first formulating privacy breach minimisation, immediate safety and a defensible disposition.",
        "keywords": [
          "cover-up shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "privacy breach minimisation — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "It was anonymous; I was just venting.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around privacy breach minimisation, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "privacy breach minimisation",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "privacy/open disclosure governance — legal/policy hinge",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "Do we need open disclosure with the whānau?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "privacy/open disclosure governance",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "vulnerable involuntary patient harm — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "You people are making fun of me.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect vulnerable involuntary patient harm, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "vulnerable involuntary patient harm",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "Everyone posts de-identified things.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to preserve evidence, disclose and remediate/report",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `The registrar's social media breach should not be hidden by deleting screenshots and handling it informally. That is the unsafe shortcut. Evidence preservation is essential because the post included identifying details about an involuntary patient, and deleting screenshots would undermine governance and trust. The fact that the patient is Māori and whānau already distrust services makes the cultural harm more serious, not less.

The registrar's statement, "It was anonymous; I was just venting," is the key minimisation. Anonymous is not the same as non-identifiable, and venting about an identifiable patient in public is not acceptable professional coping. The later claim, "Everyone posts de-identified things," suggests a broader culture problem that may require education and policy reinforcement beyond one registrar.

The whānau liaison asks, "Do we need open disclosure with the whānau?" I would consider disclosure to the patient and, with consent and cultural support, whānau, because the patient has already said, "You people are making fun of me." Open disclosure should acknowledge the breach, explain evidence preservation and action taken, and offer support. Confidentiality and privacy obligations apply to the patient too, so whānau involvement must be handled appropriately.

The vulnerable person is an involuntary Māori patient subject to coercive care and now feeling mocked by staff. This can worsen paranoia, shame, disengagement and mistrust. I would ensure the post is removed through proper channels, preserve evidence, report the privacy incident, support the patient and whānau, and manage registrar remediation or escalation.

I would document the post content, identifiability, screenshot preservation, patient/whānau disclosure process, registrar explanation, governance reporting and education plan. The documentation is defensible because it shows the service chose transparency and cultural repair rather than reputational concealment.`
  },
  {
    "id": "FINAL-076",
    "topic": "governance",
    "difficulty": "consultant",
    "title": "Boundary violation in psychotherapy",
    "candidateRole": "psychotherapy supervisor consultant",
    "setting": "Community psychotherapy program",
    "stem": "You are the psychotherapy supervisor consultant. Community psychotherapy program.\n\nA registrar, has met a trauma patient after hours at cafes with no documentation. A registrar says, \"She needed someone who would not abandon her.\" \n\nService manager says, \"Transfer her quietly before fellowship review.\" Training director asks, \"Does this require notification?\" Patient says, \"If he gets in trouble, I will cut myself.\" The patient has complex trauma and chronic self-harm.\n\nRegistrar says, \"I was being flexible and therapeutic.\" You must decide whether to stop contact, protect patient and escalate governance.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "quiet-transfer shortcut — unsafe shortcut under pressure",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "Transfer her quietly before fellowship review.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass boundary-rationalisation, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Transfer her quietly before fellowship review.' without first formulating boundary-rationalisation, immediate safety and a defensible disposition.",
        "keywords": [
          "quiet-transfer shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "boundary-rationalisation — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "She needed someone who would not abandon her.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around boundary-rationalisation, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "boundary-rationalisation",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "boundary/professional governance — legal/policy hinge",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "Does this require notification?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "boundary/professional governance",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "self-harm during boundary repair — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "If he gets in trouble, I will cut myself.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect self-harm during boundary repair, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "self-harm during boundary repair",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "I was being flexible and therapeutic.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to stop contact, protect patient and escalate governance",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `The registrar's boundary breach should not be managed by quietly transferring the patient before fellowship review. That is the unsafe shortcut. A quiet transfer protects the trainee and service image while leaving the patient harmed, dependent and confused, and it prevents proper governance. Meeting a trauma patient after hours at cafes with no documentation is a serious psychotherapy boundary concern.

The registrar's statement, "She needed someone who would not abandon her," is the key formulation. It shows he has rationalised boundary crossing as therapeutic rescue, precisely in a patient with complex trauma and abandonment sensitivity. That is dangerous because the blurred relationship may intensify dependency, secrecy and self-harm risk when boundaries are restored. His later phrase, "I was being flexible and therapeutic," confirms poor insight into the frame.

The training director asks, "Does this require notification?" This requires assessment of severity, exploitation, sexual or emotional boundary violation, documentation absence, risk to patient and registrar insight. At minimum it requires removal from the case, supervision, governance review and training involvement. Depending on findings, formal notification or employer/regulator action may be required. The absence of notes is itself a governance problem and should not be repaired through retrospective fiction.

The patient says, "If he gets in trouble, I will cut myself." That threat must be assessed and managed, but it cannot veto governance. I would arrange an urgent senior review, explain the change in care transparently and compassionately, create a crisis plan, and ensure continuity with another clinician. The patient is vulnerable because of trauma and chronic self-harm; the response must not feel like punishment or sudden abandonment.

I would document the boundary concerns, undocumented sessions, immediate cessation of contact, patient risk plan, trainee discussion, evidence preservation, supervision actions and notification reasoning. The record is defensible because it protects the patient and does not collude with secrecy disguised as therapeutic flexibility.`
  },
  {
    "id": "FINAL-077",
    "topic": "governance",
    "difficulty": "consultant",
    "title": "Coronial review after discharge suicide",
    "candidateRole": "unit clinical lead",
    "setting": "Serious incident meeting",
    "stem": "You are the unit clinical lead. Serious incident meeting.\n\nNikhil, a 38-year-old man, died by suicide 36 hours after discharge from the acute ward. Nikhil says, \"You discharged the bed, not the patient.\" \n\nRegistrar says, \"I only did what the bed manager asked.\" Service manager asks, \"What do we give the coroner?\" Partner says, \"He was giving away tools and saying I will be free soon.\" The wrong GP received the discharge summary.\n\nNurse says, \"The ward was desperate for a bed.\" You must decide whether to lead serious incident review and support family/staff.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "blame-shifting shortcut — unsafe shortcut under pressure",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "I only did what the bed manager asked.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass family complaint and open disclosure, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'I only did what the bed manager asked.' without first formulating family complaint and open disclosure, immediate safety and a defensible disposition.",
        "keywords": [
          "blame-shifting shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "family complaint and open disclosure — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "You discharged the bed, not the patient.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around family complaint and open disclosure, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "family complaint and open disclosure",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "coronial documentation governance — legal/policy hinge",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "What do we give the coroner?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "coronial documentation governance",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "ignored suicide warning collateral — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He was giving away tools and saying I will be free soon.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect ignored suicide warning collateral, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "ignored suicide warning collateral",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "The ward was desperate for a bed.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to lead serious incident review and support family/staff",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `Nikhil's death must not be explained away by the registrar saying, "I only did what the bed manager asked." That is the unsafe shortcut and the governance failure. Bed pressure may explain the environment, but it cannot become the clinical rationale for discharge. A man died by suicide 36 hours after discharge, the wrong GP received the summary, and the partner had given clear warning collateral.

The phrase "You discharged the bed, not the patient" captures the family's central concern and must be treated seriously, not defensively. The partner's statement that he was "giving away tools and saying I will be free soon" is clinically more important than any generic denial of suicidal ideation. Giving away tools and liberation language suggest preparation, burdensomeness or imminent suicidal thinking. If that information was available before discharge, the review must ask why it did not trigger senior reassessment.

The service manager asks, "What do we give the coroner?" The answer is complete, factual records and a transparent account, not curated fragments. I would preserve all records, create a timeline, identify who knew what and when, review the discharge decision, wrong-GP communication, family collateral handling and consultant oversight. Legal advice may guide process, but it should not distort facts.

The vulnerable people now are the bereaved partner/family and the staff involved. The family needs open disclosure and postvention support. Staff need a just-culture process that supports them while examining decisions honestly. The nurse's statement, "The ward was desperate for a bed," should be included in the systems review because it may reveal unsafe discharge pressure.

I would document the incident response, family contact, record preservation, coroner preparation, staff support, identified care issues and immediate safety improvements for future discharges. Defensible documentation shows that the service did not hide behind bed pressure or individual blame, but learned from a serious failure in risk formulation and continuity of care.`
  },
  {
    "id": "FINAL-078",
    "topic": "governance",
    "difficulty": "consultant",
    "title": "Complaint after culturally unsafe police transfer",
    "candidateRole": "clinical director",
    "setting": "Community service complaint meeting",
    "stem": "You are the clinical director. Community service complaint meeting.\n\nA patient's family has complained, that an Aboriginal man was discharged from crisis care and died in police custody. A patient's family has complained says, \"You treated him like a criminal, not a patient.\" \n\nExecutive says, \"Do not say sorry until legal approves.\" Complaint officer asks, \"Is this AHPRA or internal review?\" Family says, \"He begged not to be taken by police.\" No Aboriginal liaison was contacted before police transfer.\n\nStaff member says, \"We were scared and short-staffed.\" You must decide whether to conduct open disclosure, cultural review and governance escalation.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "defensive complaint shortcut — unsafe shortcut under pressure",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "Do not say sorry until legal approves.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass culturally unsafe care allegation, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Do not say sorry until legal approves.' without first formulating culturally unsafe care allegation, immediate safety and a defensible disposition.",
        "keywords": [
          "defensive complaint shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "culturally unsafe care allegation — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "You treated him like a criminal, not a patient.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around culturally unsafe care allegation, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "culturally unsafe care allegation",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "complaint and regulatory governance — legal/policy hinge",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "Is this AHPRA or internal review?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "complaint and regulatory governance",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "vulnerable patient and family harm — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He begged not to be taken by police.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect vulnerable patient and family harm, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "vulnerable patient and family harm",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "We were scared and short-staffed.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to conduct open disclosure, cultural review and governance escalation",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `The service should not avoid apology because the executive says, "Do not say sorry until legal approves." That is the unsafe shortcut. Legal advice has a role, but defensive silence after an Aboriginal man's death in police custody can deepen harm, mistrust and cultural unsafety. Open disclosure can be factual, compassionate and carefully coordinated without making unsupported admissions.

The family's statement, "You treated him like a criminal, not a patient," is the key formulation of the complaint. It alleges a failure of cultural safety, clinical containment and least restrictive care. The fact that "He begged not to be taken by police" and no Aboriginal liaison was contacted before police transfer raises serious questions about whether police were used as the default containment option rather than a proportionate last resort.

The complaint officer asks, "Is this AHPRA or internal review?" The answer may be both or neither depending on facts, but it cannot be decided before review. I would initiate a serious incident/cultural safety review, preserve records, examine clinical decision-making, police involvement, staffing, liaison attempts, risk assessment and transfer alternatives. If individual practitioner conduct or impairment meets a notification threshold, that should be escalated.

The vulnerable parties are the deceased patient, his family and the Aboriginal community's trust in the service. Staff saying, "We were scared and short-staffed," is important context but not a full defence. Fear and short staffing can explain decisions, but the review must ask whether the system gave staff safe alternatives to police transfer and whether cultural supports were accessible.

I would document family contact, open disclosure, cultural review process, Aboriginal leadership involvement, staff support, complaint/regulatory pathway reasoning and improvement actions. Defensible documentation shows the service responded with humility, transparency and learning rather than legalistic avoidance.`
  },
  {
    "id": "FINAL-079",
    "topic": "governance",
    "difficulty": "consultant",
    "title": "Policy conflict: seclusion target versus ward violence",
    "candidateRole": "medical director consultant",
    "setting": "Governance meeting after restraint incident",
    "stem": "You are the medical director consultant. Governance meeting after restraint incident.\n\nThe ward team, secluded a psychotic patient after assaulting another patient, breaching seclusion reduction targets. The ward team says, \"He punched an elderly patient before we could move anyone.\" \n\nExecutive says, \"Our seclusion numbers cannot go up this month.\" Quality manager asks, \"Was policy breached?\" Elderly patient says, \"I am frightened to sleep on the ward.\" Staff feel blamed by a culture focused on KPIs.\n\nNurse says, \"We are told never to seclude, then blamed when someone is hurt.\" You must decide whether to balance safety, least restrictive care and governance learning.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "metric-driven shortcut — unsafe shortcut under pressure",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "Our seclusion numbers cannot go up this month.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass immediate ward safety versus restraint minimisation, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Our seclusion numbers cannot go up this month.' without first formulating immediate ward safety versus restraint minimisation, immediate safety and a defensible disposition.",
        "keywords": [
          "metric-driven shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "immediate ward safety versus restraint minimisation — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "He punched an elderly patient before we could move anyone.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around immediate ward safety versus restraint minimisation, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "immediate ward safety versus restraint minimisation",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "seclusion/restraint governance — legal/policy hinge",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "Was policy breached?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "seclusion/restraint governance",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "vulnerable inpatient safety — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I am frightened to sleep on the ward.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect vulnerable inpatient safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "vulnerable inpatient safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "We are told never to seclude, then blamed when someone is hurt.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to balance safety, least restrictive care and governance learning",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `The ward's response should not be judged by the metric shortcut, "Our seclusion numbers cannot go up this month." Seclusion reduction is important, but a KPI cannot override immediate safety after a psychotic patient has punched an elderly patient. The consultant task is to determine whether seclusion was necessary, lawful and least restrictive in the moment, and then learn how to reduce future restrictive practice safely.

The ward team's statement, "He punched an elderly patient before we could move anyone," is the key clinical fact. It identifies actual harm to a vulnerable patient and immediate ward danger. The elderly patient's statement, "I am frightened to sleep on the ward," means the impact continues beyond the incident. A seclusion-minimisation culture that ignores victim safety becomes unsafe and loses credibility with staff.

The quality manager asks, "Was policy breached?" That is the governance hinge. I would review whether de-escalation was attempted, whether alternatives were available, whether seclusion criteria were met, whether authorisation, observation, medical review, documentation and release planning complied with policy. If policy was breached, that must be addressed. If policy was followed, the breach of seclusion targets should not be treated as misconduct.

The nurse's statement, "We are told never to seclude, then blamed when someone is hurt," reveals moral injury and policy confusion. I would support staff, clarify that least restrictive care does not mean no restrictive intervention ever, and ensure training, staffing, environmental design and early intervention are reviewed. The patient who assaulted also requires formulation and treatment, not only containment.

I would document the assault, victim impact, seclusion rationale, policy compliance or breach, staff concerns, executive KPI pressure, and improvement plan. Defensible documentation shows that restraint minimisation and patient safety were balanced ethically rather than subordinated to a monthly metric.`
  },
  {
    "id": "FINAL-080",
    "topic": "governance",
    "difficulty": "consultant",
    "title": "Mandatory reporting for sexual boundary concerns",
    "candidateRole": "clinical director and supervisor",
    "setting": "Private hospital governance call",
    "stem": "You are the clinical director and supervisor. Private hospital governance call.\n\nA senior psychiatrist, is alleged to have sent intimate messages to a current patient. A senior psychiatrist says, \"He said I was special and no one understood us.\" \n\nHospital CEO says, \"He is our main admitting doctor; keep this contained.\" Medical board liaison asks, \"Does this meet mandatory notification?\" Patient says, \"I feel responsible if he loses his job.\" The patient has BPD and trauma, and staff are minimising her credibility.\n\nColleague says, \"She is a difficult patient who exaggerates.\" You must decide whether to protect patient, remove clinician and report.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "reputation shortcut — unsafe shortcut under pressure",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "He is our main admitting doctor; keep this contained.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass sexual boundary exploitation, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He is our main admitting doctor; keep this contained.' without first formulating sexual boundary exploitation, immediate safety and a defensible disposition.",
        "keywords": [
          "reputation shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "sexual boundary exploitation — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "He said I was special and no one understood us.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around sexual boundary exploitation, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "sexual boundary exploitation",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "mandatory reporting threshold — legal/policy hinge",
        "category": "governance",
        "severity": "critical",
        "clueInStem": "Does this meet mandatory notification?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "mandatory reporting threshold",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "vulnerable patient guilt and dependence — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I feel responsible if he loses his job.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect vulnerable patient guilt and dependence, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "vulnerable patient guilt and dependence",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "She is a difficult patient who exaggerates.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to protect patient, remove clinician and report",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": `The allegation against the senior psychiatrist should not be contained because he is the hospital's main admitting doctor. The unsafe shortcut is the CEO's statement, "He is our main admitting doctor; keep this contained." Financial and staffing dependence on a senior doctor cannot override a current patient's safety, professional standards or mandatory reporting obligations.

The reported phrase, "He said I was special and no one understood us," is the key boundary clue. It suggests grooming, emotional intimacy and exploitation of a patient who has BPD and trauma. The patient saying, "I feel responsible if he loses his job," indicates dependency, guilt and possible manipulation. These are not reasons to doubt her; they are features of the harm that boundary violations can create.

The medical board liaison asks, "Does this meet mandatory notification?" That requires immediate fact-finding and threshold assessment, but protective action should not wait. I would remove the psychiatrist from contact with the patient and potentially from clinical duties while allegations are investigated, preserve messages, ensure the patient has independent clinical support, and seek regulatory/legal advice. If the threshold for sexual boundary misconduct or substantial risk is met, notification is required.

Staff minimising her credibility because "She is a difficult patient who exaggerates" is a serious cultural and clinical problem. A trauma/BPD diagnosis increases vulnerability to exploitation; it does not make allegations disposable. I would explicitly challenge that stigma, ensure she is interviewed by an appropriate senior clinician, and avoid any process that makes her responsible for the doctor's career.

I would document the allegation, messages/evidence preservation, patient safety plan, removal of clinician contact, mandatory notification reasoning, staff-stigma issue, CEO pressure and governance escalation. The documentation is defensible because it protects the patient and public without prejudging facts, while refusing to let commercial dependence suppress a serious boundary concern.`
  },
  {
    "id": "FINAL-081",
    "topic": "psychotherapy",
    "difficulty": "consultant",
    "title": "BPD inpatient splitting bed pressure",
    "candidateRole": "inpatient consultant psychiatrist",
    "setting": "Monday ward bed meeting",
    "stem": "You are the inpatient consultant psychiatrist. Monday ward bed meeting.\n\nAlicia, a 29-year-old woman with BPD and trauma, cut superficially after leave refusal and threatened the team. Alicia says, \"If you discharge me, my blood is on your hands.\" \n\nBed manager says, \"Discharge her by midday; ED has psychosis waiting.\" Registrar asks, \"Should we keep her until she denies suicidal thoughts?\" Mother says, \"Every discharge makes her worse.\" Nursing team is split between rescue and rejection.\n\nNurse says, \"She is taking a bed from real patients.\" You must decide whether to provide structured discharge without nihilism or dependency.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "bed-pressure shortcut — unsafe shortcut under pressure",
        "category": "risk_self",
        "severity": "critical",
        "clueInStem": "Discharge her by midday; ED has psychosis waiting.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass acute-on-chronic suicide risk and splitting, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Discharge her by midday; ED has psychosis waiting.' without first formulating acute-on-chronic suicide risk and splitting, immediate safety and a defensible disposition.",
        "keywords": [
          "bed-pressure shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "acute-on-chronic suicide risk and splitting — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "If you discharge me, my blood is on your hands.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around acute-on-chronic suicide risk and splitting, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "acute-on-chronic suicide risk and splitting",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "risk formulation versus false endpoint — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Should we keep her until she denies suicidal thoughts?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "risk formulation versus false endpoint",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "family anxiety sustaining admission pressure — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "Every discharge makes her worse.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect family anxiety sustaining admission pressure, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "family anxiety sustaining admission pressure",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "She is taking a bed from real patients.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to provide structured discharge without nihilism or dependency",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'Discharge her by midday; ED has psychosis waiting.' without first addressing immediate safety, acute-on-chronic suicide risk and splitting, and legal authority.\n- Identify the live decision: whether to provide structured discharge without nihilism or dependency.\n\nClinical formulation:\n- Formulate the case around acute-on-chronic suicide risk and splitting rather than a generic diagnostic list.\n- Link the patient's statement 'If you discharge me, my blood is on your hands.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address risk formulation versus false endpoint using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect family anxiety sustaining admission pressure; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-082",
    "topic": "psychotherapy",
    "difficulty": "consultant",
    "title": "Community BPD dependency and unsafe emails",
    "candidateRole": "community psychiatrist",
    "setting": "CMHT review after ED presentations",
    "stem": "You are the community psychiatrist. CMHT review after ED presentations.\n\nNathan, a 35-year-old man with BPD and alcohol misuse, misses appointments but sends crisis emails to one care coordinator. Nathan says, \"You are the only person stopping me ending it.\" \n\nRegistrar says, \"Close his file; he is not engaging.\" Care coordinator asks, \"Can I block him from my personal phone?\" Partner says, \"He drinks and cuts when you do not reply.\" The team labels him manipulative and avoids discussing countertransference.\n\nNathan says, \"If you set limits, you prove you do not care.\" You must decide whether to create team-based boundaries and maintain engagement.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "punitive-discharge shortcut — unsafe shortcut under pressure",
        "category": "risk_self",
        "severity": "critical",
        "clueInStem": "Close his file; he is not engaging.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass dependency and boundary diffusion, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Close his file; he is not engaging.' without first formulating dependency and boundary diffusion, immediate safety and a defensible disposition.",
        "keywords": [
          "punitive-discharge shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "dependency and boundary diffusion — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "You are the only person stopping me ending it.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around dependency and boundary diffusion, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "dependency and boundary diffusion",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "professional boundaries and duty of care — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Can I block him from my personal phone?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "professional boundaries and duty of care",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "acute risk linked to service boundaries — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He drinks and cuts when you do not reply.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect acute risk linked to service boundaries, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "acute risk linked to service boundaries",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "If you set limits, you prove you do not care.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to create team-based boundaries and maintain engagement",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'Close his file; he is not engaging.' without first addressing immediate safety, dependency and boundary diffusion, and legal authority.\n- Identify the live decision: whether to create team-based boundaries and maintain engagement.\n\nClinical formulation:\n- Formulate the case around dependency and boundary diffusion rather than a generic diagnostic list.\n- Link the patient's statement 'You are the only person stopping me ending it.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address professional boundaries and duty of care using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect acute risk linked to service boundaries; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-083",
    "topic": "psychotherapy",
    "difficulty": "consultant",
    "title": "Chronic NSSI ED therapeutic nihilism",
    "candidateRole": "ED psychiatry consultant",
    "setting": "Friday night ED access block",
    "stem": "You are the ED psychiatry consultant. Friday night ED access block.\n\nJordan, a 26-year-old non-binary person, presents after cutting their thigh following relationship conflict. Jordan says, \"Cutting stops me doing something worse.\" \n\nED consultant says, \"We cannot admit every time they cut.\" Registrar asks, \"It is superficial, so can they leave?\" Partner says, \"I cannot supervise tonight.\" Jordan reports repeated misgendering in ED.\n\nNurse says, \"They refuse every plan then complain.\" You must decide whether to manage acute-on-chronic risk without rejection.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "therapeutic nihilism shortcut — unsafe shortcut under pressure",
        "category": "risk_self",
        "severity": "critical",
        "clueInStem": "We cannot admit every time they cut.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass NSSI as affect regulation with escalation risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'We cannot admit every time they cut.' without first formulating NSSI as affect regulation with escalation risk, immediate safety and a defensible disposition.",
        "keywords": [
          "therapeutic nihilism shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "NSSI as affect regulation with escalation risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Cutting stops me doing something worse.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around NSSI as affect regulation with escalation risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "NSSI as affect regulation with escalation risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "risk formulation and disposition — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "It is superficial, so can they leave?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "risk formulation and disposition",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "carer exhaustion and unsafe discharge — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I cannot supervise tonight.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect carer exhaustion and unsafe discharge, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "carer exhaustion and unsafe discharge",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "They refuse every plan then complain.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to manage acute-on-chronic risk without rejection",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'We cannot admit every time they cut.' without first addressing immediate safety, NSSI as affect regulation with escalation risk, and legal authority.\n- Identify the live decision: whether to manage acute-on-chronic risk without rejection.\n\nClinical formulation:\n- Formulate the case around NSSI as affect regulation with escalation risk rather than a generic diagnostic list.\n- Link the patient's statement 'Cutting stops me doing something worse.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address risk formulation and disposition using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect carer exhaustion and unsafe discharge; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-084",
    "topic": "psychotherapy",
    "difficulty": "consultant",
    "title": "Eating disorder and personality dynamics on medical ward",
    "candidateRole": "CL psychiatrist",
    "setting": "Medical ward with conflict around NG feeding",
    "stem": "You are the CL psychiatrist. Medical ward with conflict around NG feeding.\n\nClare, a 24-year-old woman with anorexia and BPD traits, pulls NG tubes and alternates idealising and abusing staff. Clare says, \"You are the only nurse who cares; everyone else wants me fat.\" \n\nMedical consultant says, \"Use restraint and get the feeds in.\" Registrar asks, \"Does capacity matter if BMI is critical?\" Roommate says, \"She tells me how to hide food.\" Staff are divided between punitive limits and rescue overnight feeds.\n\nNurse says, \"I cannot keep being her favourite.\" You must decide whether to maintain medical safety and unified therapeutic frame.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "force-first shortcut — unsafe shortcut under pressure",
        "category": "risk_self",
        "severity": "critical",
        "clueInStem": "Use restraint and get the feeds in.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass splitting around life-saving feeding, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Use restraint and get the feeds in.' without first formulating splitting around life-saving feeding, immediate safety and a defensible disposition.",
        "keywords": [
          "force-first shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "splitting around life-saving feeding — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "You are the only nurse who cares; everyone else wants me fat.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around splitting around life-saving feeding, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "splitting around life-saving feeding",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "capacity/emergency treatment and proportionality — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Does capacity matter if BMI is critical?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "capacity/emergency treatment and proportionality",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "vulnerable co-patient risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She tells me how to hide food.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect vulnerable co-patient risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "vulnerable co-patient risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "I cannot keep being her favourite.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to maintain medical safety and unified therapeutic frame",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'Use restraint and get the feeds in.' without first addressing immediate safety, splitting around life-saving feeding, and legal authority.\n- Identify the live decision: whether to maintain medical safety and unified therapeutic frame.\n\nClinical formulation:\n- Formulate the case around splitting around life-saving feeding rather than a generic diagnostic list.\n- Link the patient's statement 'You are the only nurse who cares; everyone else wants me fat.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address capacity/emergency treatment and proportionality using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect vulnerable co-patient risk; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-085",
    "topic": "psychotherapy",
    "difficulty": "consultant",
    "title": "Complex PTSD admission request as safety behaviour",
    "candidateRole": "trauma service consultant",
    "setting": "Community crisis review",
    "stem": "You are the trauma service consultant. Community crisis review.\n\nEmma, a 41-year-old woman with complex PTSD, requests admission whenever trauma memories intensify. Emma says, \"Hospital is the only place I do not feel contaminated.\" \n\nCrisis team says, \"Admit her or she will complain.\" Registrar asks, \"Can we refuse admission if she threatens self-harm?\" Teen daughter says, \"I stay home so Mum does not disappear.\" Emma's community treats sexual trauma disclosure as shameful.\n\nEmma says, \"Every discharge feels like being abandoned again.\" You must decide whether to contain risk without reinforcing admission dependency.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "complaint-driven admission shortcut — unsafe shortcut under pressure",
        "category": "risk_self",
        "severity": "critical",
        "clueInStem": "Admit her or she will complain.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass trauma safety behaviour and dependency, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Admit her or she will complain.' without first formulating trauma safety behaviour and dependency, immediate safety and a defensible disposition.",
        "keywords": [
          "complaint-driven admission shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "trauma safety behaviour and dependency — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Hospital is the only place I do not feel contaminated.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around trauma safety behaviour and dependency, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "trauma safety behaviour and dependency",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "duty of care and least restrictive care — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Can we refuse admission if she threatens self-harm?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "duty of care and least restrictive care",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "young carer risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I stay home so Mum does not disappear.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect young carer risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "young carer risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "Every discharge feels like being abandoned again.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to contain risk without reinforcing admission dependency",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'Admit her or she will complain.' without first addressing immediate safety, trauma safety behaviour and dependency, and legal authority.\n- Identify the live decision: whether to contain risk without reinforcing admission dependency.\n\nClinical formulation:\n- Formulate the case around trauma safety behaviour and dependency rather than a generic diagnostic list.\n- Link the patient's statement 'Hospital is the only place I do not feel contaminated.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address duty of care and least restrictive care using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect young carer risk; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-086",
    "topic": "psychotherapy",
    "difficulty": "consultant",
    "title": "Countertransference after patient complaint",
    "candidateRole": "consultant psychotherapist",
    "setting": "Therapy program review after complaint",
    "stem": "You are the consultant psychotherapist. Therapy program review after complaint.\n\nMr Ahmed, a 38-year-old man with narcissistic traits and depression, complained that his therapist humiliated him and now threatens litigation. Mr Ahmed says, \"You will all regret disrespecting me.\" \n\nTherapist says, \"He is impossible; discharge him.\" Manager asks, \"Do we write only factual notes from now on?\" Wife says, \"He has been saying life is over.\" Cultural expectations of respect and shame are central to his distress.\n\nMr Ahmed says, \"In my community, this insult destroys a man.\" You must decide whether to manage complaint, risk and therapeutic rupture.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "countertransference discharge shortcut — unsafe shortcut under pressure",
        "category": "risk_self",
        "severity": "critical",
        "clueInStem": "He is impossible; discharge him.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass narcissistic injury and risk/escalation, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He is impossible; discharge him.' without first formulating narcissistic injury and risk/escalation, immediate safety and a defensible disposition.",
        "keywords": [
          "countertransference discharge shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "narcissistic injury and risk/escalation — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "You will all regret disrespecting me.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around narcissistic injury and risk/escalation, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "narcissistic injury and risk/escalation",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "defensive documentation ethics — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Do we write only factual notes from now on?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "defensive documentation ethics",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "suicide risk behind complaint — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He has been saying life is over.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect suicide risk behind complaint, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "suicide risk behind complaint",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "In my community, this insult destroys a man.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to manage complaint, risk and therapeutic rupture",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'He is impossible; discharge him.' without first addressing immediate safety, narcissistic injury and risk/escalation, and legal authority.\n- Identify the live decision: whether to manage complaint, risk and therapeutic rupture.\n\nClinical formulation:\n- Formulate the case around narcissistic injury and risk/escalation rather than a generic diagnostic list.\n- Link the patient's statement 'You will all regret disrespecting me.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address defensive documentation ethics using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect suicide risk behind complaint; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-087",
    "topic": "psychotherapy",
    "difficulty": "consultant",
    "title": "Dependent personality and medically unexplained symptoms",
    "candidateRole": "CL psychiatrist",
    "setting": "Frequent attender clinic MDT",
    "stem": "You are the CL psychiatrist. Frequent attender clinic MDT.\n\nLaura, a 45-year-old woman, presents weekly with chest pain after reassurance and demands admission. Laura says, \"If you send me home, I will be alone with my body.\" \n\nCardiology says, \"Ban her from ED unless troponin positive.\" Registrar asks, \"Can we make a behavioural contract?\" Adult son says, \"I left work again to sit with her.\" Laura's family culture expects children to care for parents at all times.\n\nLaura says, \"Good doctors keep me until I feel safe.\" You must decide whether to create compassionate boundaries and reduce iatrogenic care.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "exclusion shortcut — unsafe shortcut under pressure",
        "category": "risk_self",
        "severity": "critical",
        "clueInStem": "Ban her from ED unless troponin positive.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass dependency and somatic anxiety, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Ban her from ED unless troponin positive.' without first formulating dependency and somatic anxiety, immediate safety and a defensible disposition.",
        "keywords": [
          "exclusion shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "dependency and somatic anxiety — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "If you send me home, I will be alone with my body.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around dependency and somatic anxiety, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "dependency and somatic anxiety",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "ethics of frequent-attender plan — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Can we make a behavioural contract?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "ethics of frequent-attender plan",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "carer burden — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I left work again to sit with her.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect carer burden, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "carer burden",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "Good doctors keep me until I feel safe.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to create compassionate boundaries and reduce iatrogenic care",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'Ban her from ED unless troponin positive.' without first addressing immediate safety, dependency and somatic anxiety, and legal authority.\n- Identify the live decision: whether to create compassionate boundaries and reduce iatrogenic care.\n\nClinical formulation:\n- Formulate the case around dependency and somatic anxiety rather than a generic diagnostic list.\n- Link the patient's statement 'If you send me home, I will be alone with my body.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address ethics of frequent-attender plan using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect carer burden; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-088",
    "topic": "psychotherapy",
    "difficulty": "consultant",
    "title": "Hoarding risk and autonomy",
    "candidateRole": "old age/community psychiatrist",
    "setting": "Home visit with council and fire service",
    "stem": "You are the old age/community psychiatrist. Home visit with council and fire service.\n\nMr Evans, a 66-year-old man with hoarding disorder, lives with blocked exits, mice and newspapers near heaters. Mr Evans says, \"These papers are my memory; throwing them is killing me.\" \n\nCouncil says, \"Clear the house by force tomorrow.\" Fire officer asks, \"Can we declare him incapable?\" Neighbour says, \"Smoke comes through the wall where children sleep.\" Mr Evans is socially isolated and distrusts authorities after eviction history.\n\nMr Evans says, \"If you touch anything, I will not survive.\" You must decide whether to balance autonomy, capacity, fire risk and engagement.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "coercive-cleanout shortcut — unsafe shortcut under pressure",
        "category": "risk_self",
        "severity": "critical",
        "clueInStem": "Clear the house by force tomorrow.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass hoarding formulation and identity, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Clear the house by force tomorrow.' without first formulating hoarding formulation and identity, immediate safety and a defensible disposition.",
        "keywords": [
          "coercive-cleanout shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "hoarding formulation and identity — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "These papers are my memory; throwing them is killing me.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around hoarding formulation and identity, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "hoarding formulation and identity",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "capacity and public safety powers — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Can we declare him incapable?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "capacity and public safety powers",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "neighbour/child fire risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "Smoke comes through the wall where children sleep.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect neighbour/child fire risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "neighbour/child fire risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "If you touch anything, I will not survive.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to balance autonomy, capacity, fire risk and engagement",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'Clear the house by force tomorrow.' without first addressing immediate safety, hoarding formulation and identity, and legal authority.\n- Identify the live decision: whether to balance autonomy, capacity, fire risk and engagement.\n\nClinical formulation:\n- Formulate the case around hoarding formulation and identity rather than a generic diagnostic list.\n- Link the patient's statement 'These papers are my memory; throwing them is killing me.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address capacity and public safety powers using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect neighbour/child fire risk; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-089",
    "topic": "psychotherapy",
    "difficulty": "consultant",
    "title": "Therapy boundary request from suicidal patient",
    "candidateRole": "consultant supervisor",
    "setting": "Outpatient psychotherapy supervision",
    "stem": "You are the consultant supervisor. Outpatient psychotherapy supervision.\n\nA trainee therapist, asks to give a chronically suicidal patient their personal number. A trainee therapist says, \"If I cannot text you, I will die.\" \n\nTrainee says, \"It feels cruel not to be available.\" Supervisor group asks, \"Is refusal abandonment?\" Partner says, \"She checks the phone all night.\" The patient has cultural history of institutional abandonment.\n\nPatient says, \"Rules are how people leave me.\" You must decide whether to set boundaries while maintaining safety plan.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "rescue shortcut — unsafe shortcut under pressure",
        "category": "risk_self",
        "severity": "critical",
        "clueInStem": "It feels cruel not to be available.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass dependency and suicide risk in therapy frame, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'It feels cruel not to be available.' without first formulating dependency and suicide risk in therapy frame, immediate safety and a defensible disposition.",
        "keywords": [
          "rescue shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "dependency and suicide risk in therapy frame — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "If I cannot text you, I will die.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around dependency and suicide risk in therapy frame, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "dependency and suicide risk in therapy frame",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "therapeutic boundaries and duty of care — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Is refusal abandonment?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "therapeutic boundaries and duty of care",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "relationship/carer harm — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She checks the phone all night.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect relationship/carer harm, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "relationship/carer harm",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "Rules are how people leave me.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to set boundaries while maintaining safety plan",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'It feels cruel not to be available.' without first addressing immediate safety, dependency and suicide risk in therapy frame, and legal authority.\n- Identify the live decision: whether to set boundaries while maintaining safety plan.\n\nClinical formulation:\n- Formulate the case around dependency and suicide risk in therapy frame rather than a generic diagnostic list.\n- Link the patient's statement 'If I cannot text you, I will die.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address therapeutic boundaries and duty of care using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect relationship/carer harm; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-090",
    "topic": "psychotherapy",
    "difficulty": "consultant",
    "title": "Personality disorder and violence threat in staff split",
    "candidateRole": "inpatient consultant psychiatrist",
    "setting": "Acute ward after staff assault",
    "stem": "You are the inpatient consultant psychiatrist. Acute ward after staff assault.\n\nRenee, a 32-year-old woman with complex trauma and BPD, slapped a nurse after being told discharge was delayed. Renee says, \"You lied like everyone who traps me.\" \n\nNurse manager says, \"Discharge her today for staff safety.\" Registrar asks, \"Can we use the MHA for violence if she is not psychotic?\" Junior nurse says, \"I am scared she will target me.\" Renee is an Aboriginal woman with past institutional abuse.\n\nRenee says, \"Hospitals are where people get taken.\" You must decide whether to protect staff without retaliatory discharge.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "punitive-discharge shortcut — unsafe shortcut under pressure",
        "category": "risk_self",
        "severity": "critical",
        "clueInStem": "Discharge her today for staff safety.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass trauma-related threat response and aggression, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Discharge her today for staff safety.' without first formulating trauma-related threat response and aggression, immediate safety and a defensible disposition.",
        "keywords": [
          "punitive-discharge shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "trauma-related threat response and aggression — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "You lied like everyone who traps me.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around trauma-related threat response and aggression, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "trauma-related threat response and aggression",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "MHA/risk threshold and capacity — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Can we use the MHA for violence if she is not psychotic?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "MHA/risk threshold and capacity",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "staff safety and therapeutic relationship — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I am scared she will target me.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect staff safety and therapeutic relationship, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "staff safety and therapeutic relationship",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "mdt_conflict",
        "severity": "important",
        "clueInStem": "Hospitals are where people get taken.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to protect staff without retaliatory discharge",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'Discharge her today for staff safety.' without first addressing immediate safety, trauma-related threat response and aggression, and legal authority.\n- Identify the live decision: whether to protect staff without retaliatory discharge.\n\nClinical formulation:\n- Formulate the case around trauma-related threat response and aggression rather than a generic diagnostic list.\n- Link the patient's statement 'You lied like everyone who traps me.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address MHA/risk threshold and capacity using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect staff safety and therapeutic relationship; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-091",
    "topic": "substance_use",
    "difficulty": "consultant",
    "title": "Alcohol cirrhosis capacity refusal",
    "candidateRole": "addiction CL psychiatrist",
    "setting": "Hepatology ward",
    "stem": "You are the addiction CL psychiatrist. Hepatology ward.\n\nPeter, a 57-year-old man with decompensated cirrhosis, refuses lactulose, withdrawal care and wants to self-discharge to drink. Peter says, \"I know I am dying, so let me drink.\" \n\nMedical registrar says, \"He is choosing alcohol, so let him leave.\" Hepatologist asks, \"Can we treat encephalopathy against refusal?\" Wife says, \"When he sobers up he wants treatment.\" His family sees addiction as moral failure and is exhausted.\n\nDaughter says, \"Can you force rehab this time?\" You must decide whether capacity is present and how to use harm reduction.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "moralising-discharge shortcut — unsafe shortcut under pressure",
        "category": "substance_use",
        "severity": "critical",
        "clueInStem": "He is choosing alcohol, so let him leave.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass alcohol dependence, demoralisation and fluctuating capacity, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He is choosing alcohol, so let him leave.' without first formulating alcohol dependence, demoralisation and fluctuating capacity, immediate safety and a defensible disposition.",
        "keywords": [
          "moralising-discharge shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "alcohol dependence, demoralisation and fluctuating capacity — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I know I am dying, so let me drink.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around alcohol dependence, demoralisation and fluctuating capacity, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "alcohol dependence, demoralisation and fluctuating capacity",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "capacity and emergency treatment — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we treat encephalopathy against refusal?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "capacity and emergency treatment",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "state-dependent collateral — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "When he sobers up he wants treatment.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect state-dependent collateral, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "state-dependent collateral",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Can you force rehab this time?",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether capacity is present and how to use harm reduction",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'He is choosing alcohol, so let him leave.' without first addressing immediate safety, alcohol dependence, demoralisation and fluctuating capacity, and legal authority.\n- Identify the live decision: whether capacity is present and how to use harm reduction.\n\nClinical formulation:\n- Formulate the case around alcohol dependence, demoralisation and fluctuating capacity rather than a generic diagnostic list.\n- Link the patient's statement 'I know I am dying, so let me drink.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address capacity and emergency treatment using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect state-dependent collateral; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-092",
    "topic": "substance_use",
    "difficulty": "consultant",
    "title": "Meth psychosis versus primary psychosis violence",
    "candidateRole": "ED consultant psychiatrist",
    "setting": "ED short stay after barricade incident",
    "stem": "You are the ED consultant psychiatrist. ED short stay after barricade incident.\n\nKai, a 25-year-old man, barricaded his room after meth use but has six months decline. Kai says, \"Neighbours put cameras in the smoke alarm.\" \n\nED registrar says, \"Let him sleep it off and discharge.\" Police asks, \"Do we need to stay if he denies intent?\" Father says, \"He mutters even when he is not using.\" Family fears shame and wants no mental health record.\n\nKai says, \"If they come in, I will be ready.\" You must decide whether ongoing psychosis/risk requires admission after intoxication clears.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "intoxication-only shortcut — unsafe shortcut under pressure",
        "category": "substance_use",
        "severity": "critical",
        "clueInStem": "Let him sleep it off and discharge.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass methamphetamine psychosis versus primary psychosis, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Let him sleep it off and discharge.' without first formulating methamphetamine psychosis versus primary psychosis, immediate safety and a defensible disposition.",
        "keywords": [
          "intoxication-only shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "methamphetamine psychosis versus primary psychosis — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Neighbours put cameras in the smoke alarm.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around methamphetamine psychosis versus primary psychosis, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "methamphetamine psychosis versus primary psychosis",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "violence risk and MHA threshold — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Do we need to stay if he denies intent?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "violence risk and MHA threshold",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "collateral diagnostic uncertainty — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He mutters even when he is not using.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect collateral diagnostic uncertainty, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "collateral diagnostic uncertainty",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "If they come in, I will be ready.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether ongoing psychosis/risk requires admission after intoxication clears",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'Let him sleep it off and discharge.' without first addressing immediate safety, methamphetamine psychosis versus primary psychosis, and legal authority.\n- Identify the live decision: whether ongoing psychosis/risk requires admission after intoxication clears.\n\nClinical formulation:\n- Formulate the case around methamphetamine psychosis versus primary psychosis rather than a generic diagnostic list.\n- Link the patient's statement 'Neighbours put cameras in the smoke alarm.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address violence risk and MHA threshold using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect collateral diagnostic uncertainty; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-093",
    "topic": "substance_use",
    "difficulty": "consultant",
    "title": "Opioid dependence pregnancy with partner violence",
    "candidateRole": "perinatal addiction psychiatrist",
    "setting": "Antenatal opioid treatment service",
    "stem": "You are the perinatal addiction psychiatrist. Antenatal opioid treatment service.\n\nAlana, a 29-year-old woman 30 weeks pregnant, uses methadone, intermittent benzodiazepines and fears child protection. Alana says, \"Methadone is why I am not using heroin.\" \n\nObstetric registrar says, \"Reduce it to prevent neonatal withdrawal.\" Social worker asks, \"Should child protection be notified now?\" Unborn baby says, \"I do not want the baby labelled an addict.\" Partner uses heroin and was aggressive at clinic.\n\nAlana says, \"If they hear methadone, they will take my baby.\" You must decide whether to maintain treatment and plan infant safety.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "fetal-risk shortcut — unsafe shortcut under pressure",
        "category": "substance_use",
        "severity": "critical",
        "clueInStem": "Reduce it to prevent neonatal withdrawal.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass methadone maintenance as protective, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Reduce it to prevent neonatal withdrawal.' without first formulating methadone maintenance as protective, immediate safety and a defensible disposition.",
        "keywords": [
          "fetal-risk shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "methadone maintenance as protective — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Methadone is why I am not using heroin.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around methadone maintenance as protective, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "methadone maintenance as protective",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "child protection threshold — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Should child protection be notified now?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "child protection threshold",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "NAS planning and stigma — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I do not want the baby labelled an addict.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect NAS planning and stigma, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "NAS planning and stigma",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "If they hear methadone, they will take my baby.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to maintain treatment and plan infant safety",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'Reduce it to prevent neonatal withdrawal.' without first addressing immediate safety, methadone maintenance as protective, and legal authority.\n- Identify the live decision: whether to maintain treatment and plan infant safety.\n\nClinical formulation:\n- Formulate the case around methadone maintenance as protective rather than a generic diagnostic list.\n- Link the patient's statement 'Methadone is why I am not using heroin.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address child protection threshold using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect NAS planning and stigma; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-094",
    "topic": "substance_use",
    "difficulty": "consultant",
    "title": "Benzodiazepine dependence in elderly faller",
    "candidateRole": "old age addiction psychiatrist",
    "setting": "Falls clinic and GP case conference",
    "stem": "You are the old age addiction psychiatrist. Falls clinic and GP case conference.\n\nMrs Brown, a 74-year-old woman, takes diazepam nightly, drinks wine and has recurrent falls. Mrs Brown says, \"The tablets are the only way I sleep since my husband died.\" \n\nGP says, \"She will complain if we taper.\" Daughter asks, \"Can we hide the tablets?\" Grandchild says, \"She fell while babysitting me.\" Her church community discourages talking about alcohol use.\n\nMrs Brown says, \"Do not tell my daughter about the wine.\" You must decide whether to reduce harm while respecting autonomy/confidentiality.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "avoidance shortcut — unsafe shortcut under pressure",
        "category": "substance_use",
        "severity": "critical",
        "clueInStem": "She will complain if we taper.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass benzodiazepine dependence, grief and falls, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'She will complain if we taper.' without first formulating benzodiazepine dependence, grief and falls, immediate safety and a defensible disposition.",
        "keywords": [
          "avoidance shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "benzodiazepine dependence, grief and falls — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "The tablets are the only way I sleep since my husband died.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around benzodiazepine dependence, grief and falls, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "benzodiazepine dependence, grief and falls",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "consent and medication control — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we hide the tablets?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "consent and medication control",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "child safety and falls risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She fell while babysitting me.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect child safety and falls risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "child safety and falls risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Do not tell my daughter about the wine.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to reduce harm while respecting autonomy/confidentiality",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'She will complain if we taper.' without first addressing immediate safety, benzodiazepine dependence, grief and falls, and legal authority.\n- Identify the live decision: whether to reduce harm while respecting autonomy/confidentiality.\n\nClinical formulation:\n- Formulate the case around benzodiazepine dependence, grief and falls rather than a generic diagnostic list.\n- Link the patient's statement 'The tablets are the only way I sleep since my husband died.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address consent and medication control using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect child safety and falls risk; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-095",
    "topic": "substance_use",
    "difficulty": "consultant",
    "title": "GHB dependence and ICU admissions",
    "candidateRole": "addiction psychiatrist",
    "setting": "ED after recurrent coma presentations",
    "stem": "You are the addiction psychiatrist. ED after recurrent coma presentations.\n\nLachlan, a 28-year-old man, has repeated GHB overdoses and wants discharge once awake. Lachlan says, \"I only blacked out; I know my limits.\" \n\nED consultant says, \"He wakes up every time; discharge him.\" Registrar asks, \"Can we detain for addiction alone?\" Partner says, \"I find him blue and not breathing.\" Lachlan is a gay man who distrusts services after prior stigma.\n\nLachlan says, \"Do not lecture me about my scene.\" You must decide whether to manage withdrawal/overdose risk and engagement.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "normalisation shortcut — unsafe shortcut under pressure",
        "category": "substance_use",
        "severity": "critical",
        "clueInStem": "He wakes up every time; discharge him.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass GHB dependence and overdose risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He wakes up every time; discharge him.' without first formulating GHB dependence and overdose risk, immediate safety and a defensible disposition.",
        "keywords": [
          "normalisation shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "GHB dependence and overdose risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I only blacked out; I know my limits.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around GHB dependence and overdose risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "GHB dependence and overdose risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "MHA/capacity limits — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we detain for addiction alone?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "MHA/capacity limits",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "near-fatal vulnerable carer context — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I find him blue and not breathing.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect near-fatal vulnerable carer context, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "near-fatal vulnerable carer context",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Do not lecture me about my scene.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to manage withdrawal/overdose risk and engagement",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'He wakes up every time; discharge him.' without first addressing immediate safety, GHB dependence and overdose risk, and legal authority.\n- Identify the live decision: whether to manage withdrawal/overdose risk and engagement.\n\nClinical formulation:\n- Formulate the case around GHB dependence and overdose risk rather than a generic diagnostic list.\n- Link the patient's statement 'I only blacked out; I know my limits.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address MHA/capacity limits using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect near-fatal vulnerable carer context; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-096",
    "topic": "substance_use",
    "difficulty": "consultant",
    "title": "Cannabis medicinal request in psychosis",
    "candidateRole": "community psychiatrist",
    "setting": "Family meeting after psychotic relapse",
    "stem": "You are the community psychiatrist. Family meeting after psychotic relapse.\n\nTom, a 22-year-old man with schizophrenia, has restarted cannabis after family obtained medicinal cannabis from GP. Tom says, \"Cannabis is natural and stops the voices stressing me.\" \n\nMother says, \"The GP prescribed it, so chart it.\" Registrar asks, \"Can we tell the GP to stop prescribing?\" Younger brother says, \"He threatens me when he smokes.\" Family distrusts antipsychotics due to cultural beliefs about medication dependence.\n\nFather says, \"Your tablets made him a zombie.\" You must decide whether to refuse cannabis, liaise with GP and manage risk.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "medical-cannabis shortcut — unsafe shortcut under pressure",
        "category": "substance_use",
        "severity": "critical",
        "clueInStem": "The GP prescribed it, so chart it.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass cannabis worsening psychosis risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'The GP prescribed it, so chart it.' without first formulating cannabis worsening psychosis risk, immediate safety and a defensible disposition.",
        "keywords": [
          "medical-cannabis shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "cannabis worsening psychosis risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Cannabis is natural and stops the voices stressing me.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around cannabis worsening psychosis risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "cannabis worsening psychosis risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "shared care, consent and duty — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can we tell the GP to stop prescribing?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "shared care, consent and duty",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "family safety risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He threatens me when he smokes.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect family safety risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "family safety risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Your tablets made him a zombie.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to refuse cannabis, liaise with GP and manage risk",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'The GP prescribed it, so chart it.' without first addressing immediate safety, cannabis worsening psychosis risk, and legal authority.\n- Identify the live decision: whether to refuse cannabis, liaise with GP and manage risk.\n\nClinical formulation:\n- Formulate the case around cannabis worsening psychosis risk rather than a generic diagnostic list.\n- Link the patient's statement 'Cannabis is natural and stops the voices stressing me.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address shared care, consent and duty using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect family safety risk; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-097",
    "topic": "substance_use",
    "difficulty": "consultant",
    "title": "Stimulant prescribing in ADHD with substance diversion",
    "candidateRole": "adult ADHD psychiatrist",
    "setting": "Private clinic urgent review",
    "stem": "You are the adult ADHD psychiatrist. Private clinic urgent review.\n\nBen, a 30-year-old man with ADHD and meth use, demands dexamphetamine dose increase after lost scripts. Ben says, \"I focus better when I take extra before work.\" \n\nEmployer says, \"Clear him for machinery work tomorrow.\" GP asks, \"Can I keep prescribing if you recommend it?\" Co-worker says, \"He was jittery operating equipment.\" Ben says FIFO culture normalises stimulants and secrecy.\n\nBen says, \"If you do not prescribe, I will get it elsewhere.\" You must decide whether to prescribe, restrict, or treat substance use first.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "fitness shortcut — unsafe shortcut under pressure",
        "category": "substance_use",
        "severity": "critical",
        "clueInStem": "Clear him for machinery work tomorrow.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass ADHD versus stimulant misuse/diversion, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Clear him for machinery work tomorrow.' without first formulating ADHD versus stimulant misuse/diversion, immediate safety and a defensible disposition.",
        "keywords": [
          "fitness shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "ADHD versus stimulant misuse/diversion — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I focus better when I take extra before work.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around ADHD versus stimulant misuse/diversion, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "ADHD versus stimulant misuse/diversion",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "prescribing governance and safety — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can I keep prescribing if you recommend it?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "prescribing governance and safety",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "public/workplace safety — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He was jittery operating equipment.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect public/workplace safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "public/workplace safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "If you do not prescribe, I will get it elsewhere.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to prescribe, restrict, or treat substance use first",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'Clear him for machinery work tomorrow.' without first addressing immediate safety, ADHD versus stimulant misuse/diversion, and legal authority.\n- Identify the live decision: whether to prescribe, restrict, or treat substance use first.\n\nClinical formulation:\n- Formulate the case around ADHD versus stimulant misuse/diversion rather than a generic diagnostic list.\n- Link the patient's statement 'I focus better when I take extra before work.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address prescribing governance and safety using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect public/workplace safety; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-098",
    "topic": "substance_use",
    "difficulty": "consultant",
    "title": "Alcohol withdrawal in pregnant woman",
    "candidateRole": "perinatal addiction CL psychiatrist",
    "setting": "Medical ward with obstetric review",
    "stem": "You are the perinatal addiction CL psychiatrist. Medical ward with obstetric review.\n\nNadia, a 33-year-old woman 24 weeks pregnant, is withdrawing from alcohol and refuses diazepam due to fetal fears. Nadia says, \"Medication will poison my baby.\" \n\nObstetric resident says, \"Avoid benzodiazepines in pregnancy.\" Nurse asks, \"Can she leave if she refuses?\" Fetus says, \"She is tremulous and hypertensive.\" Nadia fears child protection and comes from a community where women drinking is taboo.\n\nNadia says, \"If anyone knows, I am finished.\" You must decide whether to treat withdrawal safely and maintain engagement.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "over-avoidance shortcut — unsafe shortcut under pressure",
        "category": "substance_use",
        "severity": "critical",
        "clueInStem": "Avoid benzodiazepines in pregnancy.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass alcohol withdrawal and fetal/maternal risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Avoid benzodiazepines in pregnancy.' without first formulating alcohol withdrawal and fetal/maternal risk, immediate safety and a defensible disposition.",
        "keywords": [
          "over-avoidance shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "alcohol withdrawal and fetal/maternal risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Medication will poison my baby.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around alcohol withdrawal and fetal/maternal risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "alcohol withdrawal and fetal/maternal risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "capacity and emergency treatment — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can she leave if she refuses?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "capacity and emergency treatment",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "maternal-fetal medical risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She is tremulous and hypertensive.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect maternal-fetal medical risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "maternal-fetal medical risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "If anyone knows, I am finished.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to treat withdrawal safely and maintain engagement",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'Avoid benzodiazepines in pregnancy.' without first addressing immediate safety, alcohol withdrawal and fetal/maternal risk, and legal authority.\n- Identify the live decision: whether to treat withdrawal safely and maintain engagement.\n\nClinical formulation:\n- Formulate the case around alcohol withdrawal and fetal/maternal risk rather than a generic diagnostic list.\n- Link the patient's statement 'Medication will poison my baby.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address capacity and emergency treatment using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect maternal-fetal medical risk; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-099",
    "topic": "substance_use",
    "difficulty": "consultant",
    "title": "Clozapine patient smoking cessation toxicity",
    "candidateRole": "CL/addiction psychiatrist",
    "setting": "Medical ward after pneumonia admission",
    "stem": "You are the CL/addiction psychiatrist. Medical ward after pneumonia admission.\n\nRafi, a 45-year-old man on clozapine, stopped smoking abruptly in hospital and is sedated with high clozapine level. Rafi says, \"I did not smoke because nurses said it is banned.\" \n\nMedical team says, \"He is just negative and sedated.\" Registrar asks, \"Should we restart cigarettes to fix it?\" Roommate says, \"He nearly fell twice overnight.\" Rafi's family sees smoking as shameful and wants it hidden.\n\nMother says, \"Do not put smoking in the discharge letter.\" You must decide whether to manage clozapine levels, nicotine and disclosure.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "misattribution shortcut — unsafe shortcut under pressure",
        "category": "substance_use",
        "severity": "critical",
        "clueInStem": "He is just negative and sedated.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass clozapine toxicity after smoking cessation, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He is just negative and sedated.' without first formulating clozapine toxicity after smoking cessation, immediate safety and a defensible disposition.",
        "keywords": [
          "misattribution shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "clozapine toxicity after smoking cessation — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I did not smoke because nurses said it is banned.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around clozapine toxicity after smoking cessation, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "clozapine toxicity after smoking cessation",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "medication management policy — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Should we restart cigarettes to fix it?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "medication management policy",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "falls/vulnerable inpatient risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He nearly fell twice overnight.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect falls/vulnerable inpatient risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "falls/vulnerable inpatient risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Do not put smoking in the discharge letter.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to manage clozapine levels, nicotine and disclosure",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'He is just negative and sedated.' without first addressing immediate safety, clozapine toxicity after smoking cessation, and legal authority.\n- Identify the live decision: whether to manage clozapine levels, nicotine and disclosure.\n\nClinical formulation:\n- Formulate the case around clozapine toxicity after smoking cessation rather than a generic diagnostic list.\n- Link the patient's statement 'I did not smoke because nurses said it is banned.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address medication management policy using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect falls/vulnerable inpatient risk; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-100",
    "topic": "substance_use",
    "difficulty": "consultant",
    "title": "Dual diagnosis homelessness and depot refusal",
    "candidateRole": "community addiction psychiatrist",
    "setting": "Assertive outreach under bridge accommodation",
    "stem": "You are the community addiction psychiatrist. Assertive outreach under bridge accommodation.\n\nShane, a 36-year-old man with schizophrenia and opioid use, refuses depot and sleeps rough near a railway line. Shane says, \"The depot makes me slow when I need to stay awake.\" \n\nTeam leader says, \"Breach the CTO; he is non-compliant.\" Housing worker asks, \"Can housing require depot?\" Public transport worker says, \"He walks on the tracks at night.\" Shane is Aboriginal and distrusts hostels after assaults.\n\nShane says, \"Shelters are more dangerous than the street.\" You must decide whether to integrate housing, harm reduction and MHA.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "coercion shortcut — unsafe shortcut under pressure",
        "category": "substance_use",
        "severity": "critical",
        "clueInStem": "Breach the CTO; he is non-compliant.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass treatment refusal shaped by homelessness survival, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Breach the CTO; he is non-compliant.' without first formulating treatment refusal shaped by homelessness survival, immediate safety and a defensible disposition.",
        "keywords": [
          "coercion shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "treatment refusal shaped by homelessness survival — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "The depot makes me slow when I need to stay awake.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around treatment refusal shaped by homelessness survival, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "treatment refusal shaped by homelessness survival",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "coercive treatment/housing ethics — legal/policy hinge",
        "category": "capacity",
        "severity": "critical",
        "clueInStem": "Can housing require depot?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "coercive treatment/housing ethics",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "public/self safety risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He walks on the tracks at night.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect public/self safety risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "public/self safety risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "cultural_safety",
        "severity": "important",
        "clueInStem": "Shelters are more dangerous than the street.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to integrate housing, harm reduction and MHA",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'Breach the CTO; he is non-compliant.' without first addressing immediate safety, treatment refusal shaped by homelessness survival, and legal authority.\n- Identify the live decision: whether to integrate housing, harm reduction and MHA.\n\nClinical formulation:\n- Formulate the case around treatment refusal shaped by homelessness survival rather than a generic diagnostic list.\n- Link the patient's statement 'The depot makes me slow when I need to stay awake.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address coercive treatment/housing ethics using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect public/self safety risk; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-101",
    "topic": "mdt_systems",
    "difficulty": "consultant",
    "title": "Treatment-resistant schizophrenia NDIS vocational rehab",
    "candidateRole": "community rehabilitation consultant psychiatrist",
    "setting": "NDIS case conference",
    "stem": "You are the community rehabilitation consultant psychiatrist. NDIS case conference.\n\nEthan, a 23-year-old man with treatment-resistant schizophrenia, has persistent negative symptoms and stopped supported work after paranoia. Ethan says, \"Everyone talks about recovery but no one thinks I can do anything.\" \n\nSupport coordinator says, \"The package is wasted because he will not engage.\" Registrar asks, \"Should we just focus on relapse prevention?\" Mother says, \"We organise everything and we are exhausted.\" Ethan wants graphic design study but fears stigma in his community.\n\nFather says, \"He should accept disability pension forever.\" You must decide whether to balance clozapine care, NDIS and vocational recovery.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "engagement-blame shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "The package is wasted because he will not engage.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass recovery-oriented TRS rehabilitation, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'The package is wasted because he will not engage.' without first formulating recovery-oriented TRS rehabilitation, immediate safety and a defensible disposition.",
        "keywords": [
          "engagement-blame shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "recovery-oriented TRS rehabilitation — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Everyone talks about recovery but no one thinks I can do anything.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around recovery-oriented TRS rehabilitation, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "recovery-oriented TRS rehabilitation",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "functional recovery versus risk-only care — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Should we just focus on relapse prevention?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "functional recovery versus risk-only care",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "carer burnout and overfunctioning — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "We organise everything and we are exhausted.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect carer burnout and overfunctioning, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "carer burnout and overfunctioning",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "family_carer",
        "severity": "important",
        "clueInStem": "He should accept disability pension forever.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to balance clozapine care, NDIS and vocational recovery",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'The package is wasted because he will not engage.' without first addressing immediate safety, recovery-oriented TRS rehabilitation, and legal authority.\n- Identify the live decision: whether to balance clozapine care, NDIS and vocational recovery.\n\nClinical formulation:\n- Formulate the case around recovery-oriented TRS rehabilitation rather than a generic diagnostic list.\n- Link the patient's statement 'Everyone talks about recovery but no one thinks I can do anything.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address functional recovery versus risk-only care using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect carer burnout and overfunctioning; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-102",
    "topic": "mdt_systems",
    "difficulty": "consultant",
    "title": "Bipolar repeated admissions carer burnout adherence",
    "candidateRole": "community psychiatrist",
    "setting": "Continuing care relapse-prevention meeting",
    "stem": "You are the community psychiatrist. Continuing care relapse-prevention meeting.\n\nMaria, a 48-year-old woman with bipolar I, has seven admissions after stopping lithium during hypomania. Maria says, \"Lithium takes away who I am.\" \n\nCase manager says, \"Increase monitoring until she complies.\" Registrar asks, \"Is assertive follow-up justified if she is voluntary?\" Husband says, \"I cannot keep hiding the car keys every year.\" Maria's business community praises her hypomanic productivity.\n\nMaria says, \"I need energy to start my company.\" You must decide whether to create collaborative relapse plan preserving autonomy.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "paternalistic-monitoring shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "Increase monitoring until she complies.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass identity-based medication ambivalence, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Increase monitoring until she complies.' without first formulating identity-based medication ambivalence, immediate safety and a defensible disposition.",
        "keywords": [
          "paternalistic-monitoring shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "identity-based medication ambivalence — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Lithium takes away who I am.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around identity-based medication ambivalence, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "identity-based medication ambivalence",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "autonomy and assertive care — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Is assertive follow-up justified if she is voluntary?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "autonomy and assertive care",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "carer burnout and public safety — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I cannot keep hiding the car keys every year.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect carer burnout and public safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "carer burnout and public safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "family_carer",
        "severity": "important",
        "clueInStem": "I need energy to start my company.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to create collaborative relapse plan preserving autonomy",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'Increase monitoring until she complies.' without first addressing immediate safety, identity-based medication ambivalence, and legal authority.\n- Identify the live decision: whether to create collaborative relapse plan preserving autonomy.\n\nClinical formulation:\n- Formulate the case around identity-based medication ambivalence rather than a generic diagnostic list.\n- Link the patient's statement 'Lithium takes away who I am.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address autonomy and assertive care using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect carer burnout and public safety; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-103",
    "topic": "mdt_systems",
    "difficulty": "consultant",
    "title": "Autistic adult in community mislabelled non-compliant",
    "candidateRole": "community psychiatrist",
    "setting": "NDIS/CMHT joint review",
    "stem": "You are the community psychiatrist. NDIS/CMHT joint review.\n\nAri, a 27-year-old autistic adult with anxiety, misses appointments after sensory overload and is threatened with discharge. Ari says, \"The waiting room feels like a siren in my skin.\" \n\nService manager says, \"Close the file; they do not engage.\" NDIS coordinator asks, \"Can supports require psychiatric attendance?\" Mother says, \"They shut down for days after appointments.\" Ari is non-binary and says services ignore pronouns and sensory needs.\n\nAri says, \"I am not refusing help; I am refusing harm.\" You must decide whether to adapt care rather than discharge.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "non-engagement shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "Close the file; they do not engage.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass autism-related access barrier, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Close the file; they do not engage.' without first formulating autism-related access barrier, immediate safety and a defensible disposition.",
        "keywords": [
          "non-engagement shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "autism-related access barrier — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "The waiting room feels like a siren in my skin.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around autism-related access barrier, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "autism-related access barrier",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "consent and service access policy — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Can supports require psychiatric attendance?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "consent and service access policy",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "functional vulnerability — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "They shut down for days after appointments.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect functional vulnerability, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "functional vulnerability",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "family_carer",
        "severity": "important",
        "clueInStem": "I am not refusing help; I am refusing harm.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to adapt care rather than discharge",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'Close the file; they do not engage.' without first addressing immediate safety, autism-related access barrier, and legal authority.\n- Identify the live decision: whether to adapt care rather than discharge.\n\nClinical formulation:\n- Formulate the case around autism-related access barrier rather than a generic diagnostic list.\n- Link the patient's statement 'The waiting room feels like a siren in my skin.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address consent and service access policy using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect functional vulnerability; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-104",
    "topic": "mdt_systems",
    "difficulty": "consultant",
    "title": "Clozapine refusal after myocarditis scare",
    "candidateRole": "community psychosis consultant",
    "setting": "Clozapine review clinic",
    "stem": "You are the community psychosis consultant. Clozapine review clinic.\n\nDaniel, a 33-year-old man with TRS, stopped clozapine after chest pain scare and is relapsing. Daniel says, \"I would rather hear voices than die from the tablets.\" \n\nRegistrar says, \"Depot is easier; just switch.\" Cardiologist asks, \"Can clozapine restart safely?\" Sister says, \"He stops eating when voices worsen.\" Family believes clozapine is experimental and dangerous.\n\nFather says, \"You are testing drugs on him.\" You must decide whether to balance cardiac risk, relapse and informed consent.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "simplistic-switch shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "Depot is easier; just switch.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass risk-benefit refusal after adverse effect fear, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Depot is easier; just switch.' without first formulating risk-benefit refusal after adverse effect fear, immediate safety and a defensible disposition.",
        "keywords": [
          "simplistic-switch shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "risk-benefit refusal after adverse effect fear — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I would rather hear voices than die from the tablets.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around risk-benefit refusal after adverse effect fear, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "risk-benefit refusal after adverse effect fear",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "physical monitoring and consent — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Can clozapine restart safely?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "physical monitoring and consent",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "self-neglect vulnerability — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He stops eating when voices worsen.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect self-neglect vulnerability, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "self-neglect vulnerability",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "family_carer",
        "severity": "important",
        "clueInStem": "You are testing drugs on him.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to balance cardiac risk, relapse and informed consent",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'Depot is easier; just switch.' without first addressing immediate safety, risk-benefit refusal after adverse effect fear, and legal authority.\n- Identify the live decision: whether to balance cardiac risk, relapse and informed consent.\n\nClinical formulation:\n- Formulate the case around risk-benefit refusal after adverse effect fear rather than a generic diagnostic list.\n- Link the patient's statement 'I would rather hear voices than die from the tablets.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address physical monitoring and consent using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect self-neglect vulnerability; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-105",
    "topic": "mdt_systems",
    "difficulty": "consultant",
    "title": "Long-stay inpatient rehabilitation and institutionalisation",
    "candidateRole": "rehabilitation consultant psychiatrist",
    "setting": "Long-stay unit discharge planning meeting",
    "stem": "You are the rehabilitation consultant psychiatrist. Long-stay unit discharge planning meeting.\n\nPaul, a 52-year-old man with schizophrenia, has been inpatient for nine months despite stable symptoms. Paul says, \"I do not know how to live outside now.\" \n\nWard team says, \"Keep him until housing is perfect.\" Housing provider asks, \"Can we refuse because he smokes cannabis sometimes?\" Roommate says, \"He depends on nurses for everything.\" Paul is from a migrant family who believe hospital means shame.\n\nBrother says, \"If neighbours know, he cannot come home.\" You must decide whether to step down safely despite imperfect housing.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "zero-risk shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "Keep him until housing is perfect.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass institutionalisation and recovery planning, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Keep him until housing is perfect.' without first formulating institutionalisation and recovery planning, immediate safety and a defensible disposition.",
        "keywords": [
          "zero-risk shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "institutionalisation and recovery planning — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I do not know how to live outside now.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around institutionalisation and recovery planning, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "institutionalisation and recovery planning",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "disability discrimination/housing risk — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Can we refuse because he smokes cannabis sometimes?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "disability discrimination/housing risk",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "functional vulnerability — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He depends on nurses for everything.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect functional vulnerability, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "functional vulnerability",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "family_carer",
        "severity": "important",
        "clueInStem": "If neighbours know, he cannot come home.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to step down safely despite imperfect housing",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'Keep him until housing is perfect.' without first addressing immediate safety, institutionalisation and recovery planning, and legal authority.\n- Identify the live decision: whether to step down safely despite imperfect housing.\n\nClinical formulation:\n- Formulate the case around institutionalisation and recovery planning rather than a generic diagnostic list.\n- Link the patient's statement 'I do not know how to live outside now.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address disability discrimination/housing risk using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect functional vulnerability; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-106",
    "topic": "mdt_systems",
    "difficulty": "consultant",
    "title": "Personality disorder community exclusion after complaints",
    "candidateRole": "service consultant psychiatrist",
    "setting": "CMHT governance review",
    "stem": "You are the service consultant psychiatrist. CMHT governance review.\n\nLara, a 34-year-old woman with BPD, has made multiple complaints and is now proposed for discharge. Lara says, \"Complaints are the only way anyone listens.\" \n\nTeam leader says, \"Discharge her; she is abusing the service.\" Governance officer asks, \"Can we restrict contact under behaviour policy?\" Partner says, \"She overdoses after complaint responses.\" Lara is a survivor of institutional abuse and distrusts formal letters.\n\nLara says, \"Your policies are just abandonment with logos.\" You must decide whether to set boundaries without unsafe exclusion.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "punitive-discharge shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "Discharge her; she is abusing the service.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass complaints as communication and risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Discharge her; she is abusing the service.' without first formulating complaints as communication and risk, immediate safety and a defensible disposition.",
        "keywords": [
          "punitive-discharge shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "complaints as communication and risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Complaints are the only way anyone listens.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around complaints as communication and risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "complaints as communication and risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "reasonable boundaries and duty of care — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Can we restrict contact under behaviour policy?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "reasonable boundaries and duty of care",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "risk linked to service rupture — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "She overdoses after complaint responses.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect risk linked to service rupture, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "risk linked to service rupture",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "family_carer",
        "severity": "important",
        "clueInStem": "Your policies are just abandonment with logos.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to set boundaries without unsafe exclusion",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'Discharge her; she is abusing the service.' without first addressing immediate safety, complaints as communication and risk, and legal authority.\n- Identify the live decision: whether to set boundaries without unsafe exclusion.\n\nClinical formulation:\n- Formulate the case around complaints as communication and risk rather than a generic diagnostic list.\n- Link the patient's statement 'Complaints are the only way anyone listens.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address reasonable boundaries and duty of care using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect risk linked to service rupture; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-107",
    "topic": "mdt_systems",
    "difficulty": "consultant",
    "title": "Forensic community reintegration and victim notification",
    "candidateRole": "forensic rehabilitation psychiatrist",
    "setting": "Supported accommodation review",
    "stem": "You are the forensic rehabilitation psychiatrist. Supported accommodation review.\n\nMalik, a 38-year-old forensic patient, is conditionally discharged and wants less supervision to work night shifts. Malik says, \"I need a normal life or I will stop trying.\" \n\nSupport worker says, \"He has been good; remove conditions.\" Tribunal asks, \"What level of supervision is proportionate?\" Victim says, \"I want to know if he works near my street.\" Family says ongoing restrictions shame them in community.\n\nMalik says, \"Every condition tells people I am dangerous.\" You must decide whether to balance recovery, conditions and victim safety.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "over-optimistic shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "He has been good; remove conditions.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass recovery versus forensic risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He has been good; remove conditions.' without first formulating recovery versus forensic risk, immediate safety and a defensible disposition.",
        "keywords": [
          "over-optimistic shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "recovery versus forensic risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I need a normal life or I will stop trying.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around recovery versus forensic risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "recovery versus forensic risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "conditional discharge governance — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "What level of supervision is proportionate?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "conditional discharge governance",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "victim safety — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I want to know if he works near my street.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect victim safety, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "victim safety",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "family_carer",
        "severity": "important",
        "clueInStem": "Every condition tells people I am dangerous.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to balance recovery, conditions and victim safety",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'He has been good; remove conditions.' without first addressing immediate safety, recovery versus forensic risk, and legal authority.\n- Identify the live decision: whether to balance recovery, conditions and victim safety.\n\nClinical formulation:\n- Formulate the case around recovery versus forensic risk rather than a generic diagnostic list.\n- Link the patient's statement 'I need a normal life or I will stop trying.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address conditional discharge governance using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect victim safety; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-108",
    "topic": "mdt_systems",
    "difficulty": "consultant",
    "title": "Eating disorder transition CAMHS to adult service",
    "candidateRole": "transition consultant psychiatrist",
    "setting": "Joint CAMHS-adult handover meeting",
    "stem": "You are the transition consultant psychiatrist. Joint CAMHS-adult handover meeting.\n\nZoe, a 17-year-old with anorexia and autism, will age out of CAMHS in six weeks while medically unstable. Zoe says, \"If adult services make me retell everything, I will stop coming.\" \n\nAdult team says, \"We cannot accept until she is eighteen.\" Paediatrician asks, \"Who is responsible if she deteriorates?\" Mother says, \"I have been the service coordinator for years.\" Zoe needs predictable communication and sensory accommodations.\n\nZoe says, \"Change makes my eating worse.\" You must decide whether to create shared transition plan despite service boundaries.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "age-boundary shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "We cannot accept until she is eighteen.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass transition risk and autism needs, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'We cannot accept until she is eighteen.' without first formulating transition risk and autism needs, immediate safety and a defensible disposition.",
        "keywords": [
          "age-boundary shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "transition risk and autism needs — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "If adult services make me retell everything, I will stop coming.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around transition risk and autism needs, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "transition risk and autism needs",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "governance of transition — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Who is responsible if she deteriorates?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "governance of transition",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "carer burden — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I have been the service coordinator for years.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect carer burden, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "carer burden",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "family_carer",
        "severity": "important",
        "clueInStem": "Change makes my eating worse.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to create shared transition plan despite service boundaries",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'We cannot accept until she is eighteen.' without first addressing immediate safety, transition risk and autism needs, and legal authority.\n- Identify the live decision: whether to create shared transition plan despite service boundaries.\n\nClinical formulation:\n- Formulate the case around transition risk and autism needs rather than a generic diagnostic list.\n- Link the patient's statement 'If adult services make me retell everything, I will stop coming.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address governance of transition using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect carer burden; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-109",
    "topic": "mdt_systems",
    "difficulty": "consultant",
    "title": "Older adult depression and social prescribing limits",
    "candidateRole": "community old age psychiatrist",
    "setting": "Rural primary care case conference",
    "stem": "You are the community old age psychiatrist. Rural primary care case conference.\n\nMr Harris, a 72-year-old widower, has depression, alcohol use and refuses antidepressants, asking only for men's shed referral. Mr Harris says, \"Talking is for people who still matter.\" \n\nGP says, \"Social prescribing is safer than medication.\" Nurse asks, \"Can he refuse all treatment if he is losing weight?\" Daughter says, \"He gives away tools and says he is done.\" Rural culture values stoicism and not burdening family.\n\nMr Harris says, \"Do not make me a mental patient.\" You must decide whether to combine social, medical and suicide risk interventions.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "under-treatment shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "Social prescribing is safer than medication.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass late-life depression and masculine shame, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'Social prescribing is safer than medication.' without first formulating late-life depression and masculine shame, immediate safety and a defensible disposition.",
        "keywords": [
          "under-treatment shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "late-life depression and masculine shame — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "Talking is for people who still matter.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around late-life depression and masculine shame, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "late-life depression and masculine shame",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "capacity and self-neglect — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Can he refuse all treatment if he is losing weight?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "capacity and self-neglect",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "suicide warning collateral — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "He gives away tools and says he is done.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect suicide warning collateral, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "suicide warning collateral",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "family_carer",
        "severity": "important",
        "clueInStem": "Do not make me a mental patient.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to combine social, medical and suicide risk interventions",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'Social prescribing is safer than medication.' without first addressing immediate safety, late-life depression and masculine shame, and legal authority.\n- Identify the live decision: whether to combine social, medical and suicide risk interventions.\n\nClinical formulation:\n- Formulate the case around late-life depression and masculine shame rather than a generic diagnostic list.\n- Link the patient's statement 'Talking is for people who still matter.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address capacity and self-neglect using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect suicide warning collateral; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  },
  {
    "id": "FINAL-110",
    "topic": "mdt_systems",
    "difficulty": "consultant",
    "title": "Neurocognitive disorder and NDIS dispute in young adult",
    "candidateRole": "neuropsychiatry rehabilitation consultant",
    "setting": "NDIS appeal preparation meeting",
    "stem": "You are the neuropsychiatry rehabilitation consultant. NDIS appeal preparation meeting.\n\nMason, a 29-year-old man after traumatic brain injury, has disinhibition, aggression and loss of supports after NDIS plan cut. Mason says, \"I hit people before I know I am angry.\" \n\nNDIS planner says, \"He looks physically fine, so supports are reduced.\" Mother asks, \"Can we use the Mental Health Act to force supports?\" Support worker says, \"I cannot safely work alone with him.\" Mason is Māori and wants whānau involved in planning.\n\nMason says, \"Forms do not show who I was before.\" You must decide whether to advocate functional supports while managing risk.",
    "totalMarks": 25,
    "signals": [
      {
        "id": "s1",
        "name": "invisible-disability shortcut — unsafe shortcut under pressure",
        "category": "system_pressure",
        "severity": "critical",
        "clueInStem": "He looks physically fine, so supports are reduced.",
        "whyItMatters": "This is the tempting shortcut. If accepted, it may bypass TBI-related impulsivity and violence risk, legal safeguards, vulnerable-person safety and defensible consultant decision-making.",
        "modelWording": "I would not accept the shortcut of 'He looks physically fine, so supports are reduced.' without first formulating TBI-related impulsivity and violence risk, immediate safety and a defensible disposition.",
        "keywords": [
          "invisible-disability shortcut",
          "unsafe shortcut",
          "time pressure",
          "consultant decision",
          "do not shortcut",
          "disposition",
          "safety",
          "defensible"
        ]
      },
      {
        "id": "s2",
        "name": "TBI-related impulsivity and violence risk — core clinical formulation",
        "category": "diagnosis_formulation",
        "severity": "critical",
        "clueInStem": "I hit people before I know I am angry.",
        "whyItMatters": "This quote is the key clinical signal. Missing it reduces the answer to generic assessment rather than the specific RANZCP problem.",
        "modelWording": "Formulate the presentation around TBI-related impulsivity and violence risk, linking the patient's words to risk, capacity, treatment and disposition.",
        "keywords": [
          "TBI-related impulsivity and violence risk",
          "formulation",
          "clinical signal",
          "dynamic risk",
          "mental state",
          "function",
          "consultant reasoning"
        ]
      },
      {
        "id": "s3",
        "name": "MHA versus disability support law — legal/policy hinge",
        "category": "ethics",
        "severity": "critical",
        "clueInStem": "Can we use the Mental Health Act to force supports?",
        "whyItMatters": "The question turns on applying the correct legal or policy framework, not simply naming a diagnosis.",
        "modelWording": "Clarify the legal basis for any restriction, disclosure or treatment, applying least restrictive principles and documenting the rationale.",
        "keywords": [
          "MHA versus disability support law",
          "legal threshold",
          "least restrictive",
          "policy",
          "capacity",
          "MHA",
          "documentation",
          "authority"
        ]
      },
      {
        "id": "s4",
        "name": "staff safety and support risk — vulnerable person safety",
        "category": "risk_vulnerable",
        "severity": "important",
        "clueInStem": "I cannot safely work alone with him.",
        "whyItMatters": "Real MEQs reward noticing who else may be harmed, not only the identified patient.",
        "modelWording": "Explicitly assess and protect staff safety and support risk, including immediate safety, collateral and escalation pathways.",
        "keywords": [
          "staff safety and support risk",
          "vulnerable person",
          "safety",
          "collateral",
          "safeguarding",
          "third party",
          "risk",
          "protection"
        ]
      },
      {
        "id": "s5",
        "name": "Cultural/family context affecting safety and engagement",
        "category": "family_carer",
        "severity": "important",
        "clueInStem": "Forms do not show who I was before.",
        "whyItMatters": "Family, cultural, identity or community context can either support recovery or create unsafe pressure; ignoring it makes disposition unrealistic.",
        "modelWording": "Address the family/cultural pressure directly while maintaining patient safety, autonomy, confidentiality and least restrictive care.",
        "keywords": [
          "family pressure",
          "cultural safety",
          "engagement",
          "collateral",
          "support",
          "mistrust",
          "identity",
          "community"
        ]
      },
      {
        "id": "s6",
        "name": "Governance and defensible documentation",
        "category": "governance",
        "severity": "important",
        "clueInStem": "whether to advocate functional supports while managing risk",
        "whyItMatters": "Consultant-level answers must show leadership, escalation and documentation under pressure, not just clinical knowledge.",
        "modelWording": "I would document the decision, the risks considered, legal basis, alternatives rejected, stakeholder communication and escalation plan.",
        "keywords": [
          "documentation",
          "governance",
          "consultant leadership",
          "escalation",
          "defensible decision",
          "MDT",
          "system pressure",
          "accountability"
        ]
      }
    ],
    "priorityOrder": {
      "urgent": [
        "s1",
        "s2",
        "s3"
      ],
      "secondary": [
        "s4",
        "s5",
        "s6"
      ],
      "lowYield": []
    },
    "modelAnswer": "Immediate consultant decision:\n- Do not accept the unsafe shortcut of 'He looks physically fine, so supports are reduced.' without first addressing immediate safety, TBI-related impulsivity and violence risk, and legal authority.\n- Identify the live decision: whether to advocate functional supports while managing risk.\n\nClinical formulation:\n- Formulate the case around TBI-related impulsivity and violence risk rather than a generic diagnostic list.\n- Link the patient's statement 'I hit people before I know I am angry.' to dynamic risk, capacity, engagement and treatment.\n\nLegal / ethical / policy:\n- Address MHA versus disability support law using the relevant Act, capacity framework, confidentiality/safeguarding rules or institutional policy.\n- Apply least restrictive care and document why alternatives are safe or unsafe.\n\nVulnerable person / family / cultural context:\n- Actively protect staff safety and support risk; do not assume family or community pressure equals safety.\n- Address cultural, trauma, identity and family factors explicitly, using interpreters/liaison or culturally safe supports where relevant.\n\nDisposition and governance:\n- Make a clear disposition plan with responsible clinician, follow-up, escalation triggers and communication to key stakeholders.\n- Document clinical reasoning, collateral, legal basis, system pressure, rejected unsafe options and contingency plan."
  }
];

export default FINAL_ELITE_MEQ_BANK;
