import type { QuizStem } from "../quizData";

export const CAP_STEMS: QuizStem[] = [
  {
    id: "CAP-001",
    topic: "capacity_mha",
    difficulty: "consultant",
    title: "Elderly patient refusing dialysis",
    candidateRole: "Consultant psychiatrist, consultation-liaison service",
    setting: "Renal ward in a tertiary hospital",
    stem: `You are the consultant psychiatrist asked to urgently review Mr Howard, an 81-year-old man with vascular dementia, chronic kidney disease and recurrent delirium, admitted with fluid overload and hyperkalaemia. The renal team recommends urgent dialysis, but Mr Howard is refusing and repeatedly pulling at his cannula.

Mr Howard says, "The dialysis machine is a punishment device and you are trying to drain me dry." He cannot explain what potassium is or what may happen without dialysis. At times he recognises his daughter but later asks why his deceased wife has not visited.

His daughter holds enduring power of attorney and says, "Dad always said he never wanted machines keeping him alive." His son disagrees and says, "You have to do everything or I'll complain." The renal consultant says dialysis is needed tonight, but the ward team is unsure whether to proceed against Mr Howard's objection.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Decision-specific capacity impaired by cognition and beliefs",
        category: "capacity",
        severity: "critical",
        clueInStem: "The dialysis machine is a punishment device and you are trying to drain me dry.",
        whyItMatters: "Delusional or confused beliefs may impair appreciation and weighing of dialysis risks; missing this may lead to wrongly treating refusal as capacitous.",
        modelWording: "Assess decision-specific capacity to refuse dialysis, focusing on understanding, retention, appreciation and weighing of the immediate medical risks.",
        keywords: ["decision-specific capacity", "dialysis refusal", "appreciation", "weighing information", "vascular dementia", "delirium"],
      },
      {
        id: "s2",
        name: "Immediate life-threatening physical risk",
        category: "physical_health",
        severity: "critical",
        clueInStem: "dialysis is needed tonight",
        whyItMatters: "Urgent hyperkalaemia may require emergency treatment authority rather than prolonged family debate.",
        modelWording: "Clarify medical urgency with renal team because imminent risk from hyperkalaemia may justify emergency treatment if capacity is absent.",
        keywords: ["hyperkalaemia", "urgent dialysis", "medical emergency", "renal failure", "emergency treatment", "life-threatening risk"],
      },
      {
        id: "s3",
        name: "Substitute decision-maker conflict",
        category: "family_carer",
        severity: "important",
        clueInStem: "Dad always said he never wanted machines keeping him alive.",
        whyItMatters: "Past wishes are relevant but must be interpreted in context of current reversibility, urgency and legal authority.",
        modelWording: "Clarify the daughter's legal authority and explore prior expressed wishes while distinguishing chronic end-of-life preferences from reversible emergency treatment.",
        keywords: ["enduring power of attorney", "substitute decision-maker", "prior wishes", "advance care planning", "family conflict"],
      },
      {
        id: "s4",
        name: "Possible delirium causing fluctuating capacity",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "later asks why his deceased wife has not visited.",
        whyItMatters: "Delirium can fluctuate and may temporarily remove capacity, requiring reassessment after medical stabilisation.",
        modelWording: "Assess for delirium superimposed on dementia because fluctuating cognition may be driving refusal and behavioural disturbance.",
        keywords: ["delirium", "fluctuating cognition", "dementia", "orientation", "medical precipitants", "capacity fluctuation"],
      },
      {
        id: "s5",
        name: "Least restrictive approach to treatment",
        category: "ethics",
        severity: "important",
        clueInStem: "pulling at his cannula",
        whyItMatters: "Treatment against objection may require sedation or restraint; consultant must minimise harm and coercion.",
        modelWording: "Use the least restrictive method to deliver urgent care, including reassurance, family presence, analgesia and restraint only if necessary and proportionate.",
        keywords: ["least restrictive", "restraint", "sedation", "proportionality", "dignity", "urgent care"],
      },
      {
        id: "s6",
        name: "Documentation of defensible legal reasoning",
        category: "governance",
        severity: "optional",
        clueInStem: "I'll complain.",
        whyItMatters: "Family dispute increases medico-legal risk and requires clear documentation of capacity, urgency and legal basis.",
        modelWording: "Document capacity findings, medical urgency, substitute decision-maker discussions and legal rationale for proceeding or not proceeding.",
        keywords: ["documentation", "legal basis", "complaint risk", "family disagreement", "defensible decision", "capacity record"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Mr Howard's refusal of dialysis cannot be treated as a simple autonomous refusal, because the stem shows several reasons why his decision-making is likely impaired and time-critical. The phrase "The dialysis machine is a punishment device and you are trying to drain me dry" is not merely an eccentric way of describing treatment; it suggests that his refusal is being shaped by confused or persecutory beliefs about the nature and purpose of dialysis. He also "cannot explain what potassium is or what may happen without dialysis," which means the assessment must focus on decision-specific capacity to refuse dialysis, especially understanding, retention, appreciation and weighing of the immediate risk. I would not ask the renal team to accept or override the refusal until I had made that capacity judgement in relation to this specific decision at this specific time.

The medical urgency matters because the renal consultant says dialysis is "needed tonight." In a patient admitted with fluid overload and hyperkalaemia, delay may carry a risk of arrhythmia, death or irreversible harm. I would therefore immediately clarify with the renal team the exact urgency, alternatives to dialysis, likely outcome if delayed, whether temporising measures are possible, and whether there is time to optimise Mr Howard's cognition before treatment. The capacity assessment cannot be conducted in isolation from the medical facts, because a person may need a different level of appreciation to refuse a treatment that is optional next week compared with one that may prevent death tonight.

I would also assess for delirium superimposed on dementia, because the stem states that at times he recognises his daughter but "later asks why his deceased wife has not visited." That fluctuation strongly suggests an acute confusional component, especially in a medically unwell older man. If delirium is contributing, I would ask the medical team to address reversible precipitants such as infection, uraemia, electrolyte disturbance, pain, constipation, hypoxia and medication effects, while recognising that the emergency may not allow prolonged delay. Capacity may fluctuate, but if dialysis is required tonight and he currently lacks capacity, the team needs a lawful emergency or substitute decision pathway rather than waiting passively.

The family conflict must be managed but not allowed to replace the capacity assessment. The daughter holds enduring power of attorney and says, "Dad always said he never wanted machines keeping him alive." That is clinically and ethically relevant, but I would explore whether that prior statement referred to burdensome long-term life support in an end-of-life context or to potentially reversible emergency dialysis in acute renal deterioration. The son says, "You have to do everything or I'll complain." That increases medico-legal pressure but does not alter the clinical or legal test. I would meet or speak with both children, clarify the daughter's legal authority and the scope of the EPOA, explain the medical urgency, and make clear that the decision will be based on Mr Howard's capacity, best interests or substituted judgement under the relevant law, not on whichever family member applies most pressure.

If Mr Howard lacks capacity and dialysis is immediately necessary to prevent serious harm, I would advise the team to proceed under the appropriate emergency treatment or substitute decision framework in the jurisdiction, while using the least restrictive and most dignified method possible. The clue that he is "repeatedly pulling at his cannula" means coercion, restraint or sedation may become part of the practical treatment question, not just the legal one. I would first attempt explanation in simple language, a calm environment, familiar staff or daughter presence if helpful, attention to pain and distress, and de-escalation. If restraint or sedation is required to deliver life-saving treatment, it should be proportionate, time-limited, monitored, documented and reviewed, not used simply because the ward is frustrated.

My role as consultant is to make the reasoning explicit and defensible under pressure. I would document the exact capacity findings, the medical urgency behind "dialysis is needed tonight," the delirium features, the discussion with the EPOA daughter and disagreeing son, the legal basis for proceeding or not proceeding, the least restrictive measures attempted, and the risks of both treatment and non-treatment. The son's threat "I'll complain" should prompt better documentation and communication, not defensive medicine. The ethically correct position is to respect capacitous refusal if present, but if capacity is absent and the risk is imminent, to act lawfully and proportionately to prevent avoidable death while still honouring Mr Howard's dignity and previously expressed values as far as possible.`,
  },
  {
    id: "CAP-002",
    topic: "capacity_mha",
    difficulty: "consultant",
    title: "Adolescent refusing admission after overdose",
    candidateRole: "Consultant psychiatrist, child and adolescent consultation-liaison service",
    setting: "Regional emergency department",
    stem: `You are supervising a Stage 2 registrar assessing Leila, a 16-year-old boarding school student brought to ED after ingesting an uncertain quantity of fluoxetine and paracetamol. She initially denied overdose but later told nursing staff, "I took enough to sleep and maybe not wake up."

Leila refuses blood tests, NAC treatment and mental health admission. She says, "I understand my liver could fail, but that is my choice." She becomes angry when staff contact her aunt and says, "No one has the right to lock me up." Her teacher has returned to the boarding school, and her aunt says Leila is "dramatic but clever" and should be discharged if she promises to be safe.

The ED consultant is concerned because the timing of ingestion is unclear. The registrar asks whether Leila is Gillick competent because she is articulate and can repeat the medical risks.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Apparent understanding does not equal capacity",
        category: "capacity",
        severity: "critical",
        clueInStem: "I understand my liver could fail, but that is my choice.",
        whyItMatters: "A suicidal adolescent may repeat information but be unable to weigh consequences due to hopelessness, ambivalence or acute crisis.",
        modelWording: "Assess Gillick competence/capacity by testing appreciation and weighing, not merely factual repetition of risk.",
        keywords: ["Gillick competence", "adolescent capacity", "weighing information", "suicidal crisis", "treatment refusal"],
      },
      {
        id: "s2",
        name: "Unclear overdose timing requires urgent medical treatment",
        category: "physical_health",
        severity: "critical",
        clueInStem: "the timing of ingestion is unclear.",
        whyItMatters: "Delayed paracetamol treatment may cause hepatic failure; medical stabilisation cannot wait for a perfect psychiatric assessment.",
        modelWording: "Prioritise urgent toxicology assessment and NAC where indicated because uncertain paracetamol timing creates potentially life-threatening risk.",
        keywords: ["paracetamol overdose", "NAC", "toxicology", "hepatic failure", "uncertain timing", "medical stabilisation"],
      },
      {
        id: "s3",
        name: "Suicidal intent and concealment",
        category: "risk_self",
        severity: "important",
        clueInStem: "I took enough to sleep and maybe not wake up.",
        whyItMatters: "Ambivalent suicidal intent and initial denial increase concern about ongoing risk and unreliable self-report.",
        modelWording: "Formulate risk based on ambivalent suicidal intent, concealment, overdose uncertainty and current refusal of treatment.",
        keywords: ["suicidal intent", "ambivalence", "concealment", "overdose risk", "unreliable history", "acute risk"],
      },
      {
        id: "s4",
        name: "MHA/minor treatment pathway",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "No one has the right to lock me up.",
        whyItMatters: "Refusal of life-saving care may require use of mental health, guardianship or emergency medical powers depending on jurisdiction.",
        modelWording: "Consider applicable minor consent, emergency treatment and Mental Health Act pathways if acute mental disorder impairs safe refusal.",
        keywords: ["Mental Health Act", "minor consent", "emergency treatment", "involuntary assessment", "legal framework"],
      },
      {
        id: "s5",
        name: "Collateral minimisation",
        category: "collateral",
        severity: "important",
        clueInStem: "dramatic but clever",
        whyItMatters: "Family minimisation may lead to unsafe discharge unless balanced with objective risk and school collateral.",
        modelWording: "Seek broader collateral from school, family and GP while not relying on minimising collateral to justify discharge.",
        keywords: ["collateral", "family minimisation", "school", "GP", "discharge risk", "boarding school"],
      },
      {
        id: "s6",
        name: "Discharge pressure without supervision",
        category: "disposition",
        severity: "optional",
        clueInStem: "should be discharged if she promises to be safe.",
        whyItMatters: "A safety promise is not a discharge plan, especially after overdose and treatment refusal.",
        modelWording: "Do not rely on a promise of safety; disposition requires medical clearance, risk formulation, supervision and follow-up.",
        keywords: ["promise of safety", "safe discharge", "supervision", "follow-up", "risk formulation"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Leila's presentation should be managed as a medically dangerous overdose with an unreliable refusal, not as a straightforward question of whether an articulate 16-year-old can repeat information. The registrar's question about Gillick competence is appropriate, but the conclusion cannot be based on the fact that she is articulate. Her statement, "I understand my liver could fail, but that is my choice," shows factual repetition of risk, but capacity in this context requires more than repeating the words "liver could fail." I would assess whether she can appreciate that this risk applies personally to her, weigh survival against the wish not to wake up, and make a stable decision not driven by acute suicidal crisis, shame, fear or hopelessness.

The medical issue is urgent because "the timing of ingestion is unclear." With an uncertain paracetamol overdose, delayed blood tests or delayed NAC can result in preventable hepatic failure. I would therefore advise the ED team that medical stabilisation and toxicology management must proceed in parallel with psychiatric assessment. I would not allow the search for a perfect capacity opinion to delay time-critical treatment. The immediate actions are safe observation, prevention of absconding, toxicology advice, paracetamol level and relevant bloods, NAC if indicated, and senior ED/paediatric involvement. If she refuses these interventions and lacks capacity, or if emergency treatment law applies because of imminent serious harm, the team should use the appropriate legal pathway to provide life-saving care.

Her risk cannot be minimised because she later told nursing staff, "I took enough to sleep and maybe not wake up." That phrase is clinically important because it shows at least ambivalent suicidal intent after an initial denial of overdose. Initial concealment followed by partial disclosure makes self-report less reliable, and her current refusal of treatment may be part of the same wish not to survive. I would assess intent, planning, access to further medication, triggers, shame, bullying or abuse, family conflict, mood symptoms, substance use, prior self-harm, protective factors and her ability to collaborate with safety. I would also clarify whether the boarding school context creates isolation, access to medication, academic pressure or family separation issues.

The legal tension is between respecting the developing autonomy of a 16-year-old and protecting her from a state-dependent refusal following a potentially lethal overdose. Her anger that "No one has the right to lock me up" should be acknowledged, not dismissed, because coercion can damage trust. However, if her ability to weigh information is impaired by suicidal intent or acute mental disorder, then her refusal of blood tests, NAC and admission may not be capacitous. Depending on the jurisdiction, the team may need to consider Gillick competence, parental or guardian involvement, emergency medical treatment powers, child protection or Mental Health Act assessment. I would supervise the registrar to frame this as lawful least-restrictive protection, not punishment.

Collateral needs to be broadened because the aunt's view that Leila is "dramatic but clever" and should be discharged if she promises to be safe is not an adequate safety assessment. A promise of safety is especially weak when the patient has taken an uncertain overdose, initially denied it and is refusing treatment. I would obtain collateral from the aunt, school, GP, parents or guardians where appropriate, and any prior mental health providers, while considering Leila's confidentiality and safety. The teacher has returned to the boarding school, which means the immediate support structure may be thin; I would clarify who can actually supervise her tonight and whether discharge would return her to a safe environment.

I would not discharge Leila simply because she can repeat medical risks or promises to be safe. Disposition requires medical clearance, completion of necessary overdose treatment, a defensible suicide-risk formulation, a safe adult supervision plan, means restriction, communication with guardians or statutory supports as required, and CAMHS follow-up or admission depending on ongoing risk. If she continues to refuse life-saving treatment and the assessment indicates impaired capacity, I would support proportionate treatment under the relevant emergency or mental health legal framework. My documentation would explicitly state why "I understand my liver could fail" did or did not amount to capacity, why the unclear ingestion timing changed urgency, how her statement "maybe not wake up" affected suicide-risk formulation, what collateral was obtained, and why the final disposition was the least restrictive safe option.`,
  },
  {
    id: "CAP-003",
    topic: "capacity_mha",
    difficulty: "consultant",
    title: "CTO renewal and least restrictive care",
    candidateRole: "Consultant psychiatrist, community treatment team",
    setting: "Urban community mental health service",
    stem: `You are the consultant psychiatrist reviewing a community treatment order renewal for Sam, a 37-year-old man with schizophrenia and past relapses associated with stopping depot antipsychotic medication. He has been stable for 18 months on a CTO, lives independently and works part-time.

Sam says, "I only take the injection because you people threaten me with hospital." He reports tiredness, sexual dysfunction and weight gain. His case manager supports renewal because "he will definitely relapse if we remove it." Sam's sister says he has been reliable with appointments and has not used cannabis for over a year.

The registrar asks whether renewal is justified because Sam still lacks insight and says he would prefer tablets. The tribunal hearing is in one week, and the team has not documented any recent attempt at a voluntary treatment plan.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Least restrictive principle central to CTO renewal",
        category: "mental_health_act",
        severity: "critical",
        clueInStem: "the team has not documented any recent attempt at a voluntary treatment plan.",
        whyItMatters: "A CTO must not be renewed by inertia; failure to test voluntary care undermines legal defensibility.",
        modelWording: "Review whether ongoing CTO is the least restrictive option and document attempts to negotiate voluntary treatment.",
        keywords: ["CTO renewal", "least restrictive", "voluntary treatment", "legal threshold", "tribunal", "defensibility"],
      },
      {
        id: "s2",
        name: "Coercion affecting alliance and consent",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "I only take the injection because you people threaten me with hospital.",
        whyItMatters: "Perceived coercion may damage engagement and requires explicit consideration of autonomy and alternatives.",
        modelWording: "Explore perceived coercion and seek collaborative consent to treatment where possible despite CTO history.",
        keywords: ["coercion", "treatment alliance", "consent", "autonomy", "collaborative care", "depot"],
      },
      {
        id: "s3",
        name: "Relapse history relevant but not sufficient",
        category: "risk_self",
        severity: "important",
        clueInStem: "past relapses associated with stopping depot antipsychotic medication.",
        whyItMatters: "Historical relapse risk is relevant, but current functioning and supports must also be weighed.",
        modelWording: "Balance historical relapse risk against current stability, adherence, supports and willingness to consider alternatives.",
        keywords: ["relapse history", "medication non-adherence", "current stability", "risk formulation", "supports"],
      },
      {
        id: "s4",
        name: "Medication side effects driving refusal",
        category: "physical_health",
        severity: "important",
        clueInStem: "tiredness, sexual dysfunction and weight gain.",
        whyItMatters: "Ignoring adverse effects increases resistance and weakens least restrictive treatment planning.",
        modelWording: "Address side effects and consider dose, medication or formulation changes to improve voluntary adherence.",
        keywords: ["side effects", "weight gain", "sexual dysfunction", "metabolic risk", "adherence", "shared decision-making"],
      },
      {
        id: "s5",
        name: "Collateral supports possible step-down",
        category: "collateral",
        severity: "important",
        clueInStem: "reliable with appointments",
        whyItMatters: "Reliable engagement and abstinence may support a trial of less restrictive care.",
        modelWording: "Use collateral about sustained appointment attendance and cannabis abstinence to assess feasibility of voluntary treatment.",
        keywords: ["collateral", "sister", "appointment adherence", "cannabis abstinence", "step-down", "community supports"],
      },
      {
        id: "s6",
        name: "Team inertia and risk aversion",
        category: "mdt_conflict",
        severity: "optional",
        clueInStem: "he will definitely relapse if we remove it.",
        whyItMatters: "Overconfident prediction may reflect team risk aversion rather than evidence-based legal reasoning.",
        modelWording: "Challenge risk-averse assumptions and require evidence-based justification for ongoing coercion.",
        keywords: ["risk aversion", "team inertia", "evidence", "coercion", "clinical justification", "MDT"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Sam's CTO renewal should not proceed by habit or defensive practice, because the stem contains strong evidence that the least restrictive question has not been properly tested. He has been "stable for 18 months," lives independently and works part-time, and his sister reports that he has been "reliable with appointments" and abstinent from cannabis for over a year. Those facts do not prove that the CTO should end, but they make automatic renewal legally and ethically weak. The most important governance clue is that "the team has not documented any recent attempt at a voluntary treatment plan." A CTO is coercive treatment in the community, and the tribunal will expect evidence that less restrictive alternatives have been actively considered rather than assumed to fail.

Sam's own words, "I only take the injection because you people threaten me with hospital," are central. They show that the treatment may be technically effective but experienced as coercive and alienating. I would explore this directly with him rather than treating it as simply poor insight. I would ask what he understands about his illness, what he thinks happened during previous relapses, what he fears about depot medication, what he would accept voluntarily, and what early warning signs or relapse plan he would agree to. The aim is not to pretend there is no relapse risk, but to see whether a collaborative plan can manage that risk without ongoing compulsion.

The relapse history remains relevant because the stem states there were "past relapses associated with stopping depot antipsychotic medication." A consultant-level answer must not swing from coercion to naïve autonomy. I would review the severity of those relapses, whether there was violence, self-neglect, hospitalisation, substance use, time to relapse, response to treatment and whether he had capacity during relapse. Historical risk is part of the statutory and clinical formulation. However, historical risk alone is not sufficient if current circumstances have changed and if a monitored voluntary plan is feasible. The team must weigh past relapse against current stability, work, abstinence, appointment adherence, supports and Sam's willingness to consider tablets.

His side effects also need to be treated as legitimate clinical issues, not obstacles to compliance. He reports "tiredness, sexual dysfunction and weight gain," all of which can erode quality of life, autonomy, physical health and engagement. Ignoring these side effects would make the CTO less defensible because it would suggest the service is imposing treatment without actively reducing burden. I would consider dose review, metabolic monitoring, sexual side-effect management, alternative antipsychotic options, depot versus oral formulation, and a negotiated trial of oral medication if the risk can be managed. If a CTO is still recommended, I would explain why the benefits outweigh these burdens and what is being done to reduce them.

The case manager's statement that "he will definitely relapse if we remove it" needs careful handling. It may reflect genuine concern, but the certainty and the phrase "definitely" also suggest risk aversion and fear of blame. I would lead an MDT review before the tribunal, asking the team to identify evidence rather than predictions: what exactly happened previously, what has changed, what early warning signs can be monitored, what supports exist, and what contingency plan would trigger rapid review. The ethical tension is between preventing relapse and avoiding unnecessary coercion. A consultant has to hold both, not simply choose the least risky option for the service.

My tribunal position would depend on this updated assessment. If the statutory criteria remain met because relapse risk is severe, insight is poor, voluntary adherence is not realistic and consequences of relapse are serious, I would recommend renewal but only with a clear plan to address side effects and move toward voluntary care. If the evidence supports a less restrictive plan, I would recommend step-down or non-renewal with intensive voluntary follow-up, relapse plan, sister involvement if Sam agrees, and rapid re-entry pathway. In either case, I would not tell the registrar that poor insight alone is enough. My documentation would record Sam's views, the coercion concern, side effects, relapse history, sister's collateral, voluntary alternatives considered, least restrictive reasoning and the precise rationale for whatever recommendation is made to the tribunal.`,
  },
  {
    id: "CAP-004",
    topic: "capacity_mha",
    difficulty: "consultant",
    title: "Psychotic patient refusing antipsychotic treatment",
    candidateRole: "Consultant psychiatrist, acute inpatient unit",
    setting: "Locked acute psychiatric ward",
    stem: `You are the consultant psychiatrist responsible for an acute inpatient unit.

Omar is a 28-year-old man admitted involuntarily after threatening neighbours with a metal pole. He has persecutory delusions and auditory hallucinations. He refuses antipsychotic medication, saying, "The tablets are trackers that will let them control my thoughts." He accepts food and physical observations but refuses all psychiatric medication.

His father says Omar became unwell after stopping risperidone depot three months ago. The registrar asks whether Omar's refusal means he has capacity because he can clearly say "no." Nursing staff report escalating intimidation of other patients, including standing over an elderly patient and saying, "You are one of them."

The unit is full, and staff are asking whether medication can be given by force tonight.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Refusal driven by psychotic belief",
        category: "capacity",
        severity: "critical",
        clueInStem: "The tablets are trackers that will let them control my thoughts.",
        whyItMatters: "A clear refusal does not equal capacity if delusions impair appreciation and reasoning.",
        modelWording: "Assess whether persecutory delusions impair Omar's capacity to refuse antipsychotic treatment.",
        keywords: ["psychotic refusal", "persecutory delusion", "capacity", "appreciation", "reasoning", "antipsychotic"],
      },
      {
        id: "s2",
        name: "Risk to others on ward",
        category: "risk_others",
        severity: "critical",
        clueInStem: "You are one of them.",
        whyItMatters: "Threatening behaviour toward vulnerable inpatients increases urgency for containment and treatment.",
        modelWording: "Assess immediate risk to others, especially vulnerable patients, and adjust observation and containment accordingly.",
        keywords: ["risk to others", "threatening behaviour", "vulnerable patients", "ward safety", "containment"],
      },
      {
        id: "s3",
        name: "Mental Health Act treatment authority",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "admitted involuntarily",
        whyItMatters: "Involuntary status may permit treatment under statutory criteria but does not remove need for proportionality and documentation.",
        modelWording: "Clarify statutory authority for involuntary treatment and ensure treatment is necessary, proportionate and least restrictive.",
        keywords: ["involuntary treatment", "Mental Health Act", "treatment authority", "least restrictive", "statutory criteria"],
      },
      {
        id: "s4",
        name: "Collateral evidence of relapse after depot cessation",
        category: "collateral",
        severity: "important",
        clueInStem: "stopping risperidone depot three months ago.",
        whyItMatters: "Collateral links non-adherence to relapse and informs treatment choice and relapse planning.",
        modelWording: "Use collateral regarding depot cessation and relapse to support formulation and treatment planning.",
        keywords: ["collateral", "depot cessation", "relapse", "risperidone", "family information", "treatment planning"],
      },
      {
        id: "s5",
        name: "Force medication threshold",
        category: "ethics",
        severity: "important",
        clueInStem: "medication can be given by force tonight.",
        whyItMatters: "Forced medication is high-risk and should not be driven by staff anxiety alone.",
        modelWording: "Use forced medication only if legally authorised, clinically necessary, proportionate and after less restrictive options fail.",
        keywords: ["forced medication", "proportionality", "staff anxiety", "least restrictive", "coercion", "restraint"],
      },
      {
        id: "s6",
        name: "System pressure should not drive coercion",
        category: "system_pressure",
        severity: "optional",
        clueInStem: "The unit is full",
        whyItMatters: "Bed pressure must not become the rationale for coercive treatment.",
        modelWording: "Acknowledge unit pressure but base treatment decisions on clinical risk, legal authority and necessity.",
        keywords: ["unit full", "bed pressure", "coercion", "clinical necessity", "governance"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Omar's refusal of antipsychotic medication should be taken seriously, but it should not be mistaken for capacitous refusal simply because he can clearly say "no." The registrar's question is a common but dangerous simplification. The key stem clue is Omar's explanation that "The tablets are trackers that will let them control my thoughts." That is not a reasoned refusal based on side effects, past values or a balanced understanding of treatment. It strongly suggests that persecutory delusions are impairing his appreciation of what the medication is and his ability to weigh risks and benefits. I would therefore assess capacity specifically for refusing antipsychotic treatment, focusing on whether psychosis prevents him from understanding the nature and purpose of medication, the consequences of refusal, and the relationship between treatment and his current admission.

The urgency is increased because risk to others is already active on the ward. Omar was admitted involuntarily after "threatening neighbours with a metal pole," and nursing staff now report that he is standing over an elderly patient and saying, "You are one of them." That phrase suggests that his persecutory beliefs are being applied to vulnerable inpatients, which increases risk of defensive or pre-emptive aggression. I would not wait for a physical assault before acting. My immediate actions would be to review him urgently, increase observation, separate him from vulnerable patients where possible, reduce stimulation, ensure staff safety, and create a clear ward risk plan. The elderly patient and other inpatients are vulnerable third parties, so the decision is not only about Omar's autonomy.

Because he is "admitted involuntarily," I would clarify the statutory authority for treatment under the local Mental Health Act. Involuntary status may permit treatment for mental illness, but it does not remove the need for clinical necessity, proportionality, least restrictive practice and correct procedure. I would check whether additional second opinions, treatment authorisations, capacity documentation, medication forms or senior approvals are required locally. I would also ensure the team understands that forced medication is not justified merely because the unit is under pressure or staff are anxious. The question is whether medication is legally authorised, clinically necessary to treat mental illness and manage risk, and whether less restrictive options have been attempted.

I would use the father's collateral that Omar became unwell after "stopping risperidone depot three months ago" to build the treatment formulation, not as a substitute for Omar's current assessment. It suggests a relapse pattern after depot cessation and may inform medication choice, but I would still ask about prior response, side effects, reasons for stopping, physical health, substance use, and whether depot treatment remains appropriate. A consultant-level plan should not simply restart the old depot by force; it should consider therapeutic engagement, oral options, side-effect concerns, and a longer-term relapse-prevention strategy.

The team is asking whether "medication can be given by force tonight," and this is the ethical hinge. I would first attempt oral medication with a clear, non-argumentative explanation, offering choices where possible and avoiding confrontation with the delusion. If Omar refuses and continues to pose serious risk to others or is deteriorating, involuntary medication may be justified if the legal criteria are met. If physical restraint or IM medication is required, it must be the least restrictive effective intervention, properly staffed, physically monitored and documented. It should never be framed as punishment for refusal or as a way to make a full unit easier to manage.

The phrase "The unit is full" is relevant to operational stress but must not drive coercion. I would acknowledge staff strain while explicitly basing the decision on Omar's psychosis, impaired capacity, treatment need and risk to vulnerable patients. I would lead an MDT discussion so nursing staff, registrar and security understand the agreed plan, observation level, de-escalation approach, medication pathway and review timetable. My documentation would record the delusional basis of refusal, capacity reasoning, risk to others, legal authority, less restrictive attempts, collateral from father, rationale for any forced treatment, monitoring arrangements and review plan. That is what makes the decision clinically and legally defensible.`,
  },
  {
    id: "CAP-005",
    topic: "capacity_mha",
    difficulty: "consultant",
    title: "Dementia patient refusing residential care",
    candidateRole: "Consultant psychiatrist, old age psychiatry service",
    setting: "Geriatric assessment ward",
    stem: `You are the old age psychiatry consultant asked to assess Mrs Bell, a 77-year-old woman with Alzheimer's disease admitted after being found wandering at night in heavy rain. OT assessment shows she leaves the stove on, misses medications and cannot manage finances.

Mrs Bell insists on returning home and says, "I have lived there for fifty years and I am not going to a prison." She cannot recall being found by police and repeatedly asks when her husband is coming, although he died six years ago. Her daughter wants residential care, but her son says, "She has a right to make bad decisions."

The geriatrician believes discharge home alone is unsafe. Social work says guardianship may be required, but the family wants a decision today because the residential care bed may be lost.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Accommodation capacity impaired by memory and appreciation",
        category: "capacity",
        severity: "critical",
        clueInStem: "She cannot recall being found by police",
        whyItMatters: "Inability to retain and appreciate recent risk events undermines capacity for accommodation decisions.",
        modelWording: "Assess decision-specific capacity regarding accommodation, focusing on retention and appreciation of home safety risks.",
        keywords: ["accommodation capacity", "Alzheimer disease", "retention", "appreciation", "home safety", "decision-specific"],
      },
      {
        id: "s2",
        name: "High vulnerability if discharged home",
        category: "risk_vulnerable",
        severity: "critical",
        clueInStem: "wandering at night in heavy rain.",
        whyItMatters: "Wandering, medication mismanagement and stove risk create serious foreseeable harm.",
        modelWording: "Recognise high vulnerability from wandering, self-neglect, medication mismanagement and environmental hazards.",
        keywords: ["wandering", "self-neglect", "home risk", "medication mismanagement", "vulnerability", "unsafe discharge"],
      },
      {
        id: "s3",
        name: "Guardianship pathway",
        category: "governance",
        severity: "important",
        clueInStem: "guardianship may be required",
        whyItMatters: "Restrictive placement requires proper legal process if capacity is absent and family disagreement persists.",
        modelWording: "Consider guardianship/tribunal pathway for accommodation decisions if Mrs Bell lacks capacity and no valid substitute decision-maker can decide.",
        keywords: ["guardianship", "tribunal", "substitute decision-maker", "residential care", "legal process"],
      },
      {
        id: "s4",
        name: "Autonomy versus safety conflict",
        category: "ethics",
        severity: "important",
        clueInStem: "She has a right to make bad decisions.",
        whyItMatters: "Consultant must distinguish capacitous unwise decisions from incapacitous decisions with serious risk.",
        modelWording: "Differentiate an unwise capacitous decision from incapacity due to dementia impairing appreciation of risk.",
        keywords: ["autonomy", "unwise decision", "incapacity", "safety", "ethical balance", "least restrictive"],
      },
      {
        id: "s5",
        name: "Time pressure from residential bed",
        category: "system_pressure",
        severity: "important",
        clueInStem: "the residential care bed may be lost.",
        whyItMatters: "System pressure should not shortcut capacity assessment or legal process.",
        modelWording: "Acknowledge placement pressure but ensure capacity assessment and legal steps are completed defensibly.",
        keywords: ["placement pressure", "residential bed", "capacity assessment", "legal process", "defensible decision"],
      },
      {
        id: "s6",
        name: "Family disagreement affecting disposition",
        category: "family_carer",
        severity: "optional",
        clueInStem: "Her daughter wants residential care, but her son says",
        whyItMatters: "Family conflict may delay safe discharge planning and requires structured communication.",
        modelWording: "Hold a family meeting to explain capacity, risk and least restrictive options while avoiding alignment with one relative.",
        keywords: ["family disagreement", "family meeting", "communication", "disposition", "least restrictive", "neutrality"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Mrs Bell's wish to return home must be heard respectfully, but the consultant task is to decide whether this is an unwise capacitous decision or an incapacitous decision driven by dementia-related inability to appreciate risk. Her statement, "I have lived there for fifty years and I am not going to a prison," expresses a powerful attachment to home and fear of institutionalisation. That does not by itself prove incapacity. Older adults are allowed to value home over safety if they can understand and weigh the risks. However, the stem then gives concrete evidence that she may not be able to do that: she was found "wandering at night in heavy rain," leaves the stove on, misses medications, cannot manage finances and "cannot recall being found by police." Those details point to impaired retention and appreciation of recent serious harm.

I would assess capacity decision-specifically for accommodation and care, not globally. I would ask Mrs Bell what happened before admission, what concerns others have about home, what could happen if she wanders at night or leaves the stove on, how she would manage medications, food, finances and emergencies, and what alternatives exist such as increased home supports, respite or residential care. The fact that she repeatedly asks when her husband is coming although he died six years ago suggests significant memory impairment and possible disorientation, which may interfere with her ability to retain and use information. If she cannot remember the police incident or appreciate that it could recur, she is unlikely to have capacity for the accommodation decision, even though her emotional preference for home is understandable.

The ethical tension is captured by the son's statement, "She has a right to make bad decisions." He is correct as a general principle, and I would acknowledge that. The question is whether Mrs Bell is making a bad decision with capacity or whether Alzheimer's disease is preventing her from understanding and weighing foreseeable harm. I would explain this distinction to the family. I would also avoid aligning automatically with the daughter who wants residential care, because family disagreement can distort the assessment. The consultant role is to provide an independent opinion based on functional evidence, not to vote with one sibling.

The risk if discharged home alone is not theoretical. The OT assessment shows stove risk, medication non-adherence and inability to manage finances; the police incident shows wandering in dangerous conditions. The geriatrician believes discharge home alone is unsafe, and I would integrate that multidisciplinary evidence into the capacity and disposition formulation. I would still consider least restrictive alternatives before concluding that residential care is required. Could intensive home care, meals, medication supervision, stove isolation, door sensors, family support, community nursing or respite reduce risk to an acceptable level? If not, and if capacity is absent, then guardianship or tribunal involvement may be required to authorise accommodation decisions.

The system pressure is explicit: "the residential care bed may be lost." I would not allow that pressure to shortcut the assessment or legal process. Losing a bed is frustrating and may have practical consequences, but it is not a lawful reason to declare someone incapable or move them without authority. I would tell the team and family that if the bed can be held while urgent capacity and guardianship steps occur, that should be explored, but the process must remain defensible. If there is immediate risk and she cannot return home while legal processes are pending, the team may need an interim lawful placement or hospital stay depending on local legislation.

My actions would include reviewing Mrs Bell directly, obtaining OT, geriatric, nursing and family collateral, assessing cognition and function, holding a family meeting, clarifying whether any valid substitute decision-maker exists, and involving social work/guardianship services. If she lacks capacity and no less restrictive home option is realistically safe, I would support a guardianship or tribunal pathway for accommodation and care. If she retains capacity, I would respect her decision but intensify risk mitigation and document that she understands the consequences. In either scenario, the model answer must not reduce the case to "dementia equals residential care." The defensible consultant formulation is that her values are real, the risks are concrete, capacity is decision-specific, family pressure cuts both ways, and the legal pathway must not be bypassed because a bed may be lost.`,
  },
];
