export type ColorTag = "green" | "blue" | "amber" | "red" | "purple" | "teal" | "navy";

export interface NoteSection {
  id: string;
  order: number;
  title: string;
  colorTag: ColorTag;
  explanation: string;
  keyPoints: string[];
  commonTrap?: string;
  meqApplication?: string;
  examples?: string[];
}

export interface Note {
  id: string;
  title: string;
  category: string;
  description: string;
  sections: NoteSection[];
}

export const DISCHARGE_PLAN: Note = {
  id: "discharge_plan",
  title: "Comprehensive Psychiatric Discharge Plan Notes",
  category: "Management / Disposition",
  description:
    "A consultant-level framework for planning safe psychiatric discharge across inpatient, community, youth, adult, older adult, forensic, AOD and consultation-liaison settings.",
  sections: [
    {
      id: "s01",
      order: 1,
      title: "Discharge as a Process",
      colorTag: "green",
      explanation:
        "Discharge planning starts early in admission, not on the day the bed is needed. In psychiatry, discharge is a staged transition from a contained hospital environment to a less supervised community environment. The key question is whether the risk that brought the patient into hospital has reduced enough, and whether there is now a safe enough system outside hospital to manage the remaining risk. Most patients will still have some residual symptoms at discharge. The point is not perfect recovery — it is whether the remaining symptoms can be managed safely in the community with supports, monitoring and contingency planning.",
      keyPoints: [
        "What has improved since admission?",
        "What remains unresolved at the point of discharge?",
        "What risks remain — and who will monitor them?",
        "What happens if the community plan fails?",
        "Is community care now the least restrictive safe option?",
        "Discharge planning begins at admission, not when a bed is needed.",
        "Residual symptoms at discharge are expected — the question is manageability, not cure.",
      ],
      meqApplication:
        "Discharge should not be framed as 'symptoms improved, therefore home.' Frame it as a risk-managed transition with a named follow-up plan.",
      commonTrap:
        "Discharging because the patient looks settled on the ward, without testing whether the community triggers are managed.",
    },
    {
      id: "s02",
      order: 2,
      title: "Discharge Initiation",
      colorTag: "blue",
      explanation:
        "Discharge initiation is the point where the team begins actively testing whether the patient can move from inpatient containment to community care. This becomes appropriate when there is improvement in mental state, ward behaviour, sleep, routine, engagement, medication acceptance, risk profile, insight or cooperation with care, and when community supports are becoming available. It should not be started solely because the ward is full or because the patient requests discharge — bed pressure and patient preference are relevant but not sufficient on their own. At discharge initiation, identify the index event that led to admission. The discharge plan must address that index event directly.",
      keyPoints: [
        "Identify the index event that led to admission.",
        "The discharge plan must directly address the index risk — not just follow-up generally.",
        "Improvement in mental state, engagement, sleep, and medication acceptance signal readiness to begin discharge planning.",
        "Bed pressure and patient preference are relevant but are not sufficient reasons alone.",
        "Community supports must be becoming available, not merely promised.",
      ],
      examples: [
        "Overdose after family conflict",
        "Manic driving and taking children from school",
        "Psychotic threat to a neighbour",
        "Severe depression with refusal to eat",
        "Aggression in residential aged care",
        "Alcohol-related suicidal crisis",
        "Relapse after medication non-adherence",
      ],
      meqApplication:
        "Start your MEQ answer by stating what needs to be true before discharge can safely proceed — identify the index risk first.",
      commonTrap:
        "Starting with 'arrange GP follow-up' before explaining why discharge is now safe enough.",
    },
    {
      id: "s03",
      order: 3,
      title: "Pre-Discharge Clinical Stability",
      colorTag: "blue",
      explanation:
        "Clinical stability does not mean symptom-free. It means the patient's symptoms are no longer driving immediate unsafe behaviour, and there is enough engagement and structure for community treatment. Criteria differ significantly by diagnosis and must be applied specifically.",
      keyPoints: [
        "MANIA: sleep restored, reduced pressure of speech, reduced irritability and grandiosity, improved judgement, no ongoing risky plans, medication adherence accepted.",
        "MANIA WARNING: patient may appear calmer before judgement fully returns — grandiose plans, unsafe confidence about driving, spending, sex or parenting may persist.",
        "PSYCHOSIS: delusions less intense, hallucinations reduced, no command hallucinations, improved engagement, no delusional target in the community.",
        "PSYCHOSIS WARNING: discharge is risky if the delusional system still involves family, neighbours, children, workplace or a specific named person.",
        "DEPRESSION: suicidal ideation reduced, no current plan or intent, hopelessness improved, patient can identify reasons for living and engage in safety planning.",
        "PERSONALITY DISORDER / SELF-HARM: acute urge reduced, crisis trigger understood, patient can use coping strategies, admission has not become countertherapeutic.",
        "AOD: withdrawal completed, intoxication resolved, craving assessed, relapse triggers identified, harm-minimisation plan developed.",
      ],
      meqApplication:
        "Apply diagnosis-specific stability criteria. Generic 'improved mental state' is weak — state what specifically has changed and what specifically remains.",
      commonTrap:
        "Applying depression criteria to mania, or declaring stability without addressing the specific risk that caused admission.",
    },
    {
      id: "s04",
      order: 4,
      title: "Trial Leave Before Discharge",
      colorTag: "amber",
      explanation:
        "Trial leave tests whether inpatient improvement generalises to the community. It is a staged, graduated process — not a single pass/fail gate. It is especially useful in mania, psychosis, older adult discharge, family violence cases, substance relapse risk, child safety concerns and repeated failed discharges. Leave can lead to discharge, more leave, delayed discharge, revised safety plan or increased community supports.",
      keyPoints: [
        "Escorted ward leave → unescorted leave → short community leave → overnight leave → weekend leave.",
        "Leave with family or carer tests real-world interaction, not just ward presentation.",
        "After leave, always review: Did the patient return on time? Use substances? Sleep? Follow medication? Contact unsafe people?",
        "Test ability to use crisis plan in a real environment.",
        "Carer confidence during trial leave is clinically significant.",
        "Leave may identify need for child protection involvement, supported accommodation, or community order.",
        "Leave to RACF or residential setting requires specific coordination with that service.",
      ],
      meqApplication:
        "In MEQs asking about discharge planning for high-risk cases, describe trial leave as a structured testing phase — not just a courtesy step before going home.",
      commonTrap:
        "Treating trial leave as a formality rather than a genuine test of community readiness — failing to review leave outcomes systematically.",
    },
    {
      id: "s05",
      order: 5,
      title: "Direct Discharge vs Staged Discharge",
      colorTag: "navy",
      explanation:
        "Not all patients need a staged discharge, but the decision must be clinically justified. Direct discharge may be appropriate for brief, clearly resolved episodes with strong supports and simple follow-up. Staged discharge is preferable when risk was high, insight is partial, children are involved, or community services are not yet arranged.",
      keyPoints: [
        "DIRECT DISCHARGE: brief episode, clearly resolved risk, stable housing, confirmed follow-up, good insight, no major child or public safety issue.",
        "STAGED DISCHARGE: high risk, partial insight, children involved, violence or driving risk, medication non-adherence, repeated admissions, AOD relapse risk.",
        "Staged discharge may include: gradual leave, family meeting, home visit, OT assessment, pharmacy packing, depot before discharge, community team meeting, discharge conference.",
        "Compulsory community treatment order (CTO) may be considered as part of staged discharge where legal criteria are met.",
        "Step-down or subacute bed may bridge inpatient and full community discharge.",
        "NGO or housing support should commence before discharge where possible — not after.",
      ],
      meqApplication:
        "Explicitly justify your choice between direct and staged discharge. Do not assume staged is always better — it prolongs hospitalisation unnecessarily for low-risk cases.",
      commonTrap:
        "Defaulting to staged discharge for every case, or omitting the justification for whichever approach you choose.",
    },
    {
      id: "s06",
      order: 6,
      title: "Discharge Readiness",
      colorTag: "green",
      explanation:
        "Discharge readiness has four components: clinical readiness, risk readiness, practical readiness and service readiness. All four must be addressed. A plan that is clinically ready but practically impossible (no accommodation, no transport, no medication) is not a safe discharge.",
      keyPoints: [
        "CLINICAL READINESS: acute syndrome improved enough that community care is realistic, residual symptoms not causing immediate unsafe behaviour.",
        "RISK READINESS: index risk understood and actively managed — overdose risk, violence risk, child risk, driving risk, self-neglect risk each require specific management.",
        "PRACTICAL READINESS: accommodation, food, money, transport, medication, phone access, appointments, carer support, home care, mobility aids, culturally safe supports.",
        "SERVICE READINESS: receiving services know the plan and have accepted responsibility — CMHT, GP, pharmacy, AOD, housing, RACF, family, crisis team, legal orders.",
        "All four must be present before discharge — a gap in any one is a discharge risk.",
      ],
      meqApplication:
        "Structure your discharge answer using these four readiness domains. This prevents you from forgetting practical or service components.",
      commonTrap:
        "Assuming 'clinical readiness' is sufficient without checking practical and service readiness.",
    },
    {
      id: "s07",
      order: 7,
      title: "Risk Formulation for Discharge",
      colorTag: "red",
      explanation:
        "The discharge risk formulation compares risk at admission, risk now and risk after discharge — with the community plan named. Protective factors must be real, not assumed. 'Family support' is not protective if the family is frightened, burnt out, excluded or confused.",
      keyPoints: [
        "HISTORICAL RISK: previous suicide attempts, violence, stalking, unsafe driving, overdose, absconding, arson, severe neglect, child-safety incidents, repeated relapse after stopping medication.",
        "CURRENT CLINICAL RISK: residual psychosis, residual mania, depression, hopelessness, impulsivity, intoxication or craving, cognitive impairment, personality vulnerability, anger, poor insight, medication refusal.",
        "CONTEXTUAL RISK: returning to abusive partner, substance-using peers, homelessness, access to children, workplace conflict, driving, isolation, lack of GP, family burnout, rural distance.",
        "PROTECTIVE FACTORS (must be real): supportive partner who understands relapse signs, reliable family supervision, stable accommodation, depot medication, case manager, rapid follow-up, patient accepts medication, GP engaged, no access to means.",
        "Document risk comparison: risk at admission → risk now → expected risk after discharge with named plan.",
        "Do not list 'family support' as protective unless you have confirmed the family is able and willing.",
      ],
      meqApplication:
        "In MEQs: name the specific residual risks and the specific management strategy for each. A generic risk statement ('low risk') is clinically indefensible.",
      commonTrap:
        "Listing protective factors that are theoretical — family 'support' from a family that is burnt out or frightened does not reduce risk.",
    },
    {
      id: "s08",
      order: 8,
      title: "Medication Discharge Plan",
      colorTag: "purple",
      explanation:
        "Medication planning is not simply listing discharge medications. It should explain why each medication is prescribed, what changed during admission, what monitoring is required, what adverse effects are present, how adherence will be supported, what happens if a dose is missed, and who is responsible after discharge.",
      keyPoints: [
        "GENERAL: medication reconciliation, confirm allergies, check interactions, review PRN, simplify regimen, limit supply if overdose risk, involve pharmacy, confirm patient understanding.",
        "LITHIUM: current level, target range, renal and thyroid function, hydration advice, toxicity education, next blood-test date, named person to review result, patient action plan if vomiting or dehydrated.",
        "VALPROATE: dose and indication, LFTs, FBC, valproate level if relevant, weight monitoring, teratogenic counselling where indicated.",
        "CLOZAPINE: clinic registration, blood-test schedule, supply arrangement, constipation plan, smoking status, infection warning, missed-dose plan, GP and pharmacy handover.",
        "DEPOT ANTIPSYCHOTIC: name, dose, last injection date, next due date, who administers, side-effect monitoring, missed-dose plan, community team responsibility.",
        "BENZODIAZEPINES: clear indication, short-term duration only, taper plan, dependence discussion, sedation and falls warning, driving warning.",
        "Webster pack or blister pack if adherence is a concern.",
        "Capacity to self-administer must be assessed — consider supervised administration where needed.",
      ],
      meqApplication:
        "In MEQs, don't just list medications — explain monitoring, who is responsible, and what happens if there is a problem. This signals consultant-level thinking.",
      commonTrap:
        "Listing medications without naming who is responsible for monitoring and who reviews abnormal results.",
    },
    {
      id: "s09",
      order: 9,
      title: "Psychological and Psychosocial Plan",
      colorTag: "teal",
      explanation:
        "In the immediate post-discharge period, the focus is containment, symptom management, safety planning, psychoeducation, relapse prevention, practical supports and stabilisation. Avoid deep trauma work immediately after an acute crisis unless the patient is stable and supported.",
      keyPoints: [
        "Immediate needs: safety planning, psychoeducation, relapse-prevention skills, practical stabilisation.",
        "Longer-term: CBT for depression, anxiety or psychosis; DBT or skills therapy for self-harm; family-focused therapy for bipolar or psychosis.",
        "Trauma-focused therapy: only when stable — not immediately post-discharge from a crisis admission.",
        "Interpersonal and social rhythm therapy for bipolar disorder.",
        "Motivational interviewing for AOD.",
        "Relapse-prevention groups, occupational therapy, vocational rehabilitation, peer support.",
        "The discharge plan must distinguish immediate needs from longer-term therapy goals.",
      ],
      meqApplication:
        "Separate your psychological plan into 'now' (safety, stabilisation) and 'later' (therapy, rehabilitation). Examiners reward this distinction.",
      commonTrap:
        "Recommending intensive psychotherapy immediately post-discharge from a severe acute episode — this is premature and potentially destabilising.",
    },
    {
      id: "s10",
      order: 10,
      title: "Family and Carer Discharge Planning",
      colorTag: "teal",
      explanation:
        "Family and carers often hold the risk after discharge. Involve them appropriately and document what was shared and why. Confidentiality remains important — limited information sharing may be required if there is serious risk to children, partner, or public safety.",
      keyPoints: [
        "Obtain patient consent for family involvement where possible.",
        "Collateral can be received even if the patient refuses disclosure.",
        "Psychoeducation: relapse signs, medication warning signs, crisis contacts.",
        "Assess carer burden — a burnt-out carer is not a protective factor.",
        "Assess family conflict or violence before relying on family as a support.",
        "Confirm whether family can safely support discharge — not just whether they are willing.",
        "Document what was shared with family and the reason for sharing.",
        "Confidentiality exception: share minimum necessary information for child safety, partner safety, or identifiable public risk.",
      ],
      meqApplication:
        "In MEQs, explicitly name what information was shared with family and on what basis — this demonstrates understanding of confidentiality principles.",
      commonTrap:
        "Assuming family agreement to support discharge means the family is capable of doing so safely.",
    },
    {
      id: "s11",
      order: 11,
      title: "Community Mental Health Team Plan",
      colorTag: "teal",
      explanation:
        "The community team plan must be specific — naming the case manager, first contact date, appointment type, and escalation pathway. Passive referral after serious psychiatric presentations is clinically indefensible.",
      keyPoints: [
        "Name the case manager and their first contact date.",
        "Specify: psychiatrist review date, home visit or clinic appointment, depot date, medication monitoring schedule, risk-review frequency.",
        "Crisis plan: who to call, when, and what to do.",
        "Non-attendance plan: what happens if the patient does not show.",
        "HIGH-RISK DISCHARGE: phone contact within 24 hours, home visit within 48–72 hours, weekly reviews initially, outreach if non-attendance.",
        "Passive referral is insufficient after serious mania, psychosis, overdose, violence, child-risk incident or repeated non-adherence.",
        "Family contact plan: what the CMHT will share with family and under what circumstances.",
      ],
      meqApplication:
        "Name the specific follow-up contact — 'CMHT follow-up' alone is weak. State who, when, and what assertive steps will occur if the patient does not engage.",
      commonTrap:
        "Writing 'referred to CMHT' without specifying assertive follow-up for high-risk patients who are known to disengage.",
    },
    {
      id: "s12",
      order: 12,
      title: "GP and Primary Care Handover",
      colorTag: "teal",
      explanation:
        "The GP handover must be clinically useful and actionable — not a bureaucratic letter. When the GP is unavailable, do not discharge high-risk medication monitoring into a vacuum.",
      keyPoints: [
        "Include: diagnosis and formulation, reason for admission, risk issues, medication changes, monitoring plan, side effects, physical health results.",
        "Specify: who orders blood tests, who reviews results, what to do with abnormal results.",
        "Include relapse signs, CMHT contacts, crisis plan, and follow-up dates.",
        "If GP unavailable: arrange covering GP, hospital outpatient medical review, or CMHT medical review.",
        "Provide blood-test forms before discharge — do not leave monitoring in a void.",
        "Name the person responsible for reviewing abnormal results and provide a written contingency plan.",
      ],
      meqApplication:
        "In MEQs, stating 'GP follow-up arranged' is weak. Specify what the GP needs to do, monitor, and when — and who is responsible if the GP is unavailable.",
      commonTrap:
        "Discharging with complex medication (lithium, clozapine, depot) without a named plan for blood-test review and result follow-up.",
    },
    {
      id: "s13",
      order: 13,
      title: "Accommodation and Home Environment",
      colorTag: "amber",
      explanation:
        "Accommodation is part of risk management, not just logistics. The home environment must be assessed as part of the safety formulation. Discharging to an unsafe environment is a preventable adverse event.",
      keyPoints: [
        "Assess: stability, safety, who else is in the home, presence of children, family violence, substances, weapons, medication security.",
        "Assess: ability to manage ADLs, meals, transport, and whether support services can access the home.",
        "If home is unsafe: consider delayed discharge, crisis accommodation, step-down unit, supported residential service, or family meeting.",
        "Aged care placement, domestic violence services, or housing escalation may be required before discharge.",
        "Guardianship or administration may be relevant where the patient lacks capacity to make accommodation decisions.",
        "Homelessness at discharge is foreseeable and preventable — do not discharge to the street where this risk exists.",
      ],
      meqApplication:
        "In MEQs, explicitly address accommodation stability as part of the discharge risk formulation — not as an afterthought.",
      commonTrap:
        "Treating 'has somewhere to go' as sufficient without assessing the safety of that environment.",
    },
    {
      id: "s14",
      order: 14,
      title: "Social Recovery Plan",
      colorTag: "teal",
      explanation:
        "A discharge plan should address function, not only symptoms. Social recovery includes income, employment, parenting, legal matters, debt, cultural supports, NDIS, and social reconnection.",
      keyPoints: [
        "Consider: income, employment or education, parenting responsibilities, transport, legal matters, debt, social isolation.",
        "NDIS or support coordination if eligible — initiate before discharge, not after.",
        "Cultural supports, NGO involvement, domestic violence services, AOD services, peer support.",
        "WORK RETURN: assess symptom stability, cognitive function, medication side effects, occupational risk, stigma, and graded return plan.",
        "DRIVING: assess diagnosis, current symptoms, insight, sedation, benzodiazepine use, psychosis or mania status, substance use.",
        "Commercial driving has a higher safety threshold — the patient is responsible for public safety.",
        "Medical certificate for work absence should be provided with appropriate duration.",
      ],
      meqApplication:
        "Don't restrict your MEQ discharge answer to clinical issues. Name social and functional domains — this shows holistic consultant thinking.",
      commonTrap:
        "Ignoring driving advice despite prescribing sedating medication or managing psychosis — a direct medicolegal risk.",
    },
    {
      id: "s15",
      order: 15,
      title: "Legal, Ethical and Governance Issues",
      colorTag: "purple",
      explanation:
        "Before discharge, the legal status of the patient must be actively determined and documented. A community treatment order (CTO) may be considered where severe mental illness, relapse risk, past non-adherence and foreseeable harm make voluntary follow-up unreliable — provided legal criteria are met. A CTO should not be used merely for convenience or clinician anxiety.",
      keyPoints: [
        "Determine legal status: voluntary, requiring inpatient care, community treatment order, or compulsory community treatment.",
        "CAPACITY: assess for discharge decisions, treatment refusal, medication adherence, contact with children, finances, driving, and accommodation.",
        "CONFIDENTIALITY OVERRIDE (minimum necessary, for safety): child safety risk, domestic violence risk, serious threat to identifiable person, unsafe driving, weapons or firearms.",
        "CHILD PROTECTION: consider notification where children were exposed to dangerous behaviour, neglect risk exists, parent's psychosis or mania directly involved children, or other parent cannot protect.",
        "CTO criteria must be met — it is not a tool for managing clinician anxiety or patient non-cooperation without lawful grounds.",
        "Document the legal reasoning explicitly, including what alternatives were considered.",
      ],
      meqApplication:
        "In MEQs involving legal status, name the specific legal provision (MHA, CTO, guardianship), the criteria met, and what alternatives were considered.",
      commonTrap:
        "Recommending a CTO without specifying the legal criteria, or ignoring CTO when criteria are clearly met in a high-risk non-adherent patient.",
    },
    {
      id: "s16",
      order: 16,
      title: "Geriatric and Older Adult Discharge",
      colorTag: "blue",
      explanation:
        "Older adult discharge requires integration of psychiatric illness, cognition, frailty, physical health, carer capacity, and environment. The interaction between these domains creates a distinct risk profile that must be explicitly addressed.",
      keyPoints: [
        "CLINICAL: depression, psychosis, mania, anxiety, delirium resolution, dementia or cognitive impairment, sleep, pain, nutrition, hydration, continence, falls risk, mobility, sensory impairment.",
        "MEDICATION: anticholinergic burden, benzodiazepine falls and cognitive risk, lithium toxicity (renal impairment or dehydration), antipsychotic stroke/falls/parkinsonism, antidepressant hyponatraemia, polypharmacy interactions.",
        "CAPACITY: assess for accommodation, medication, finances, personal care, refusing services, driving, and substitute decision-making.",
        "If capacity is impaired: consider enduring power of attorney, guardian, administrator, advance care directive, or supported decision-making.",
        "FUNCTIONAL: ADLs, IADLs, home safety, OT assessment, equipment, meal support, personal care package.",
        "CARER: burden, health, capacity to supervise medication, risk of elder abuse, respite needs, family conflict, whether carer agrees with discharge.",
        "RACF DISCHARGE: confirm facility accepts return, provide behavioural management plan, medication chart, GP/nurse handover, falls plan, delirium prevention plan.",
      ],
      meqApplication:
        "For older adult MEQs, explicitly address all three domains: medical/psychiatric stability, functional assessment, and carer/accommodation readiness.",
      commonTrap:
        "Applying adult discharge criteria to an older adult without addressing falls risk, carer burden, capacity, or medication safety in an older physiology.",
    },
    {
      id: "s17",
      order: 17,
      title: "Documentation",
      colorTag: "navy",
      explanation:
        "Discharge documentation should be clinically useful — readable by the next treating clinician in an emergency. The risk documentation in particular should be detailed and defensible. Avoid lazy formulations that create medicolegal risk.",
      keyPoints: [
        "Include: reason for admission, diagnosis and formulation, treatment provided, mental state at discharge, residual symptoms, risk formulation.",
        "Include: medication changes, monitoring plan, legal status, family/carer involvement, child or public safety issues, driving/work advice.",
        "Include: follow-up appointments (named), crisis plan, contingency plan, responsible clinicians.",
        "RISK DOCUMENTATION: risk at admission, dynamic risk changes during admission, residual risk, protective factors, risk-management plan, rationale for discharge.",
        "AVOID: 'Denies suicidal ideation. Low risk. Discharge.' — this is clinically and medicolegally inadequate.",
        "Document the reasoning, not just the conclusion.",
        "Send discharge summary before or at discharge — not weeks later.",
      ],
      meqApplication:
        "In MEQs about documentation, structure your answer as what the discharge summary must contain — not just 'write a discharge summary'.",
      commonTrap:
        "Writing 'low risk' without specifying what risk was assessed, what has changed, and what residual risk management is in place.",
    },
    {
      id: "s18",
      order: 18,
      title: "Contingency Planning",
      colorTag: "amber",
      explanation:
        "Every discharge plan should anticipate predictable failure points. The plan should be explicit about what happens when things go wrong — not left to the next treating clinician to improvise.",
      keyPoints: [
        "MISSED APPOINTMENT: phone call, text reminder, family/carer check if consent or risk, home visit, welfare check if high risk, rebooking, crisis team escalation.",
        "MEDICATION NON-ADHERENCE: pharmacy alert, family/carer monitoring, depot option, community nurse, medication packing, early review, CTO review if criteria met.",
        "RELAPSE SIGNS: increase community contact, urgent psychiatric review, medication adjustment, crisis team, ED presentation pathway, family/carer escalation.",
        "SUBSTANCE RELAPSE: harm minimisation, AOD worker contact, avoid high-risk environments, treat relapse as a risk trigger — not a moral failure.",
        "HOUSING BREAKDOWN: crisis accommodation, social work, NGO, homelessness team, family meeting — avoid discharge to street where risk is foreseeable.",
        "FAMILY FEELS UNSAFE: family safety plan, police or ambulance if immediate danger, crisis team, domestic violence service, urgent review, child protection if children affected.",
      ],
      meqApplication:
        "In MEQs, close your discharge plan with a contingency section — 'If this plan fails because..., then...' This marks consultant-level thinking.",
      commonTrap:
        "Writing a discharge plan that assumes everything will go according to plan — failing to address the predictable failure points for that specific patient.",
    },
    {
      id: "s19",
      order: 19,
      title: "How to Write This in an MEQ Answer",
      colorTag: "green",
      explanation:
        "When the question asks for a comprehensive discharge plan, structure your answer systematically. Begin with discharge conditions — not the logistics. The examiner is testing whether you understand what makes discharge safe, not whether you can list services.",
      keyPoints: [
        "OPEN WITH DISCHARGE CONDITIONS: 'Discharge would depend on...' — state the criteria before the plan.",
        "ORGANISE UNDER DOMAINS: clinical stability → risk management → medication and physical health → community follow-up → family and social plan → legal and governance → contingency.",
        "BE SPECIFIC: name the case manager, the follow-up date, the monitoring responsibility, the crisis pathway.",
        "CONNECT TO THE CASE: every element should link back to the specific patient in the vignette — not a generic template.",
        "USE CLINICAL LANGUAGE: risk formulation, least restrictive option, proportionate response, safety planning — not lay descriptions.",
        "DO NOT LIST SERVICES WITHOUT JUSTIFICATION: 'refer to CMHT' is weak; 'assertive community follow-up within 48 hours given prior non-engagement' is strong.",
      ],
      examples: [
        "Example opening: 'Discharge would depend on sustained improvement in the acute syndrome, reduction of the index risks, safe accommodation, agreed medication and monitoring plan, family/carer involvement where appropriate, and confirmed community follow-up. I would consider whether voluntary discharge, community treatment order or continued admission is the least restrictive safe option.'",
      ],
      meqApplication:
        "Use the opening above verbatim or adapt it — it signals to the examiner that you understand discharge as a clinical process, not an administrative step.",
      commonTrap:
        "Opening with logistics ('arrange CMHT, GP referral, medication') before establishing whether discharge is appropriate at all.",
    },
    {
      id: "s20",
      order: 20,
      title: "Adapting the Framework to Different Cases",
      colorTag: "blue",
      explanation:
        "The framework adapts to diagnosis, age, setting and context. Each presentation has a different risk emphasis. Apply the general framework and then prioritise the domain-specific elements most relevant to the specific case.",
      keyPoints: [
        "MANIA: sleep, insight, medication adherence, lithium/valproate monitoring, driving, finances, sexual disinhibition, child safety, work, family relapse plan.",
        "PSYCHOSIS: residual delusions, target of delusions, adherence or depot, AOD, family psychoeducation, relapse signs, risk to others, CTO if needed.",
        "DEPRESSION: suicide risk, hopelessness, means restriction, medication supply, therapy, family support, rapid follow-up, safety plan.",
        "BPD / SELF-HARM: collaborative safety plan, avoid countertherapeutic admission, crisis alternatives, DBT/skills, boundaries, rapid follow-up, non-pejorative language.",
        "AOD: withdrawal completion, relapse prevention, AOD referral, pharmacotherapy, housing, harm reduction, intoxication-related violence or suicide risk.",
        "PERINATAL: mother's mental state, infant safety, bonding, sleep protection, medication in pregnancy or breastfeeding, partner/family support, perinatal community team.",
        "OLDER ADULT: cognition, delirium, falls, carer burden, medication simplification, home supports, capacity, guardianship, RACF or home-care package.",
        "FORENSIC / PUBLIC SAFETY: victim safety, weapons, driving, police/court conditions, community supervision, relapse signs, substance use, documentation.",
      ],
      meqApplication:
        "In the exam, read the vignette and immediately identify which adaptation applies — then prioritise those specific elements in your answer.",
      commonTrap:
        "Applying a generic adult discharge framework to perinatal, older adult or forensic cases without addressing the specific risk domains of that population.",
    },
    {
      id: "s21",
      order: 21,
      title: "Consultant-Level Discharge Statement",
      colorTag: "navy",
      explanation:
        "This is a synthesis statement that demonstrates you have considered all domains and can articulate the clinical rationale for discharge at a consultant level. Use it to open or close your discharge answer in an MEQ.",
      keyPoints: [
        "Proceed with discharge only if: acute illness improved, index risks reduced and actively managed, community plan is realistic.",
        "The plan must name: who is responsible for medication, monitoring, follow-up, family communication, crisis response and escalation.",
        "If elements are not in place: delay discharge, use further leave trials, increase community supports, or consider compulsory community treatment where justified.",
        "Least restrictive option: consider voluntary, CTO or continued admission explicitly.",
        "The plan must be proportionate to the risk — not driven by bed pressure or administrative convenience.",
        "Document the reasoning — not just the outcome.",
      ],
      examples: [
        "'I would proceed with discharge only if the acute illness has improved, the specific risks that led to admission have been reduced and actively managed, and the community plan is realistic. The plan must name who is responsible for medication, monitoring, follow-up, family communication, crisis response and escalation. If these elements are not in place, I would delay discharge, use further leave trials, increase community supports, or consider compulsory community treatment where clinically and legally justified.'",
      ],
      meqApplication:
        "Use this as a framing statement at the start or end of any discharge MEQ — it immediately signals consultant-level thinking to the examiner.",
      commonTrap:
        "Ending your discharge answer with logistics rather than a clinical rationale statement — leaving the examiner uncertain whether you understand why discharge is or is not safe.",
    },
  ],
};

export const CONFLICT_MANAGEMENT: Note = {
  id: "conflict_management",
  title: "Managing Dynamic Conflict in Psychiatry Services",
  category: "Communication / Collaboration / Leadership / Governance",
  description:
    "A consultant-level framework for managing conflict between patients, families, staff, teams, NGOs, peer workers, legal agencies, senior and junior staff, and registrars in psychiatry settings.",
  sections: [
    {
      id: "s01",
      order: 1,
      title: "Core Principle",
      colorTag: "blue",
      explanation:
        "Managing conflict in psychiatry is not about making everyone happy. The consultant task is to keep the patient safe, preserve therapeutic relationships where possible, clarify roles, manage confidentiality, choose the correct governance process, and convert conflict into a workable care plan. Most conflicts in psychiatry contain a mixture of clinical risk, communication failure, unclear role boundaries, confidentiality uncertainty, family distress, staff anxiety, cultural misunderstanding, resource pressure, governance failure, unresolved trauma, countertransference, poor documentation or unclear leadership.",
      keyPoints: [
        "Slow the situation down before taking sides.",
        "Identify whether the conflict is clinical, interpersonal, legal, ethical, governance-related or system-related.",
        "Clarify immediate safety first.",
        "Gather facts from more than one source.",
        "Protect confidentiality.",
        "Clarify who has decision-making responsibility.",
        "Convert disagreement into a shared formulation and plan.",
      ],
      meqApplication:
        "In MEQs, do not answer only 'hold an MDT meeting.' Explain what the meeting is for: safety, formulation, role clarity, information sharing, escalation and a documented plan.",
      commonTrap:
        "Treating conflict as 'difficult personalities' rather than a signal of unclear formulation, poor communication or system failure.",
    },
    {
      id: "s02",
      order: 2,
      title: "First Approach to Any Conflict",
      colorTag: "green",
      explanation:
        "When conflict emerges, first decide what kind of problem it is. A consultant should contain risk, acknowledge distress, separate the people from the problem, avoid premature blame, and identify the shared clinical goal.",
      keyPoints: [
        "Is anyone unsafe now — is the patient at risk of leaving, self-harming, becoming violent, absconding or disengaging?",
        "Is another patient, child, family member, staff member or identifiable person at risk?",
        "Is this a clinical disagreement, interpersonal conflict, boundary issue, complaint, incident, legal issue, supervision issue or workplace conduct issue?",
        "Who needs to be heard before a decision is made? Who has decision-making authority?",
        "What must be documented now? Does this require escalation?",
        "FIRST RESPONSE: contain immediate risk, acknowledge distress, move heated conversations away from the patient, gather facts from several sources, clarify confidentiality and consent, identify the shared goal, set a time and place to resolve the issue, document neutrally.",
      ],
      examples: [
        "'Let's clarify what each person is worried will happen.'",
        "'I can hear there are different risk formulations here.'",
        "'Before we decide, I want to separate facts, concerns and assumptions.'",
        "'The shared aim is safe care for the patient.'",
        "'This may be a system issue, not only an individual issue.'",
      ],
      meqApplication:
        "Structure your first response using these steps. Examiners reward systematic thinking over reactive decision-making.",
      commonTrap:
        "Arguing in front of the patient or allowing different staff members to give contradictory messages.",
    },
    {
      id: "s03",
      order: 3,
      title: "Factors Behind Conflict",
      colorTag: "blue",
      explanation:
        "The visible disagreement is often not the real problem. Look underneath the conflict. Contributors usually span patient factors, family factors, staff factors and system factors simultaneously.",
      keyPoints: [
        "PATIENT FACTORS: psychosis, mania, depression, delirium or intoxication; fear, shame, trauma or mistrust; personality vulnerability; cultural or spiritual explanatory models; cognitive impairment; communication barriers; previous negative experiences with services; perceived coercion; stigma; disagreement about diagnosis or treatment.",
        "FAMILY FACTORS: fear for safety, carer fatigue, guilt or anger, family violence, cultural expectations, disagreement about diagnosis, frustration about confidentiality, conflicting collateral, children or dependent adults affected.",
        "STAFF FACTORS: role anxiety, fear of blame, burnout, workload pressure, different training backgrounds, hierarchy, countertransference, moral distress, unclear consultant direction, team splitting.",
        "SYSTEM FACTORS: poor handover, no shared care plan, no agreed escalation threshold, multiple teams involved, bed pressure, lack of after-hours support, no clear consultant ownership, EMR failures, NGO or peer-worker role not defined.",
      ],
      meqApplication:
        "When asked to 'manage conflict,' first formulate why the conflict has occurred. Then choose the right process to resolve it.",
    },
    {
      id: "s04",
      order: 4,
      title: "Procedure When Conflict Emerges",
      colorTag: "green",
      explanation:
        "A structured procedure prevents conflict from becoming reactive, personal or unsafe. Work through the steps in order — skipping stabilisation or fact-gathering leads to poor decisions.",
      keyPoints: [
        "STEP 1 — STABILISE SAFETY: see the patient, review mental state and risk, increase observation if required, separate patients if needed, call senior staff early, document the immediate safety plan.",
        "STEP 2 — CLARIFY TYPE: clinical disagreement, communication breakdown, boundary issue, confidentiality dispute, family conflict, interprofessional conflict, complaint, incident or adverse event, legal or safeguarding issue.",
        "STEP 3 — GATHER FACTS: patient interview, family collateral where appropriate, nursing and medical notes, risk assessments, incident reports, staff accounts, NGO documentation, GP, legal/child protection information if relevant.",
        "STEP 4 — CLARIFY CONFIDENTIALITY: seek consent, receive collateral even if disclosure is not permitted, share minimum necessary if safety requires, document what was shared and why.",
        "STEP 5 — CHOOSE CORRECT FORUM: bedside review, private staff discussion, MDT meeting, family meeting, case conference, consultant-to-consultant discussion, supervision, peer review, ethics consultation, incident review, complaint pathway or HR process.",
        "STEP 6 — MAKE INTERIM PLAN: cover risk, observation/leave status, medication, family contact, communication rules, roles and review time — patient care continues even while conflict is being resolved.",
        "STEP 7 — RESOLVE OR ESCALATE: shared formulation, agreed plan, named responsibilities, documentation, review point, escalation pathway.",
      ],
      commonTrap:
        "Using the wrong process. Bullying is not just 'team dynamics.' A serious adverse event is not just 'family distress.' A complaint is not simply 'staff feeling blamed.'",
    },
    {
      id: "s05",
      order: 5,
      title: "Mechanics of Resolving Conflict",
      colorTag: "teal",
      explanation:
        "Conflict resolution works best when the consultant separates positions from concerns. A position is what someone says they want. A concern is what they fear will happen. Often both sides are trying to manage risk but from different perspectives.",
      keyPoints: [
        "Separate positions (what someone wants) from concerns (what they fear will happen) — this reveals the shared aim underneath the disagreement.",
        "Convert pejorative labels into observable behaviours: not 'manipulative' but 'called crisis line six times overnight after a boundary was set'; not 'reckless' but 'recommended discharge with no confirmed accommodation or follow-up.'",
        "Clarify roles explicitly: who holds clinical responsibility, manages medication, manages risk review, provides psychosocial support, liaises with family, documents, makes discharge decisions, responds after hours.",
        "MEETING STRUCTURE: state purpose → name shared goal → summarise facts → hear each perspective → identify risks → identify disagreements → clarify roles → agree immediate plan → agree documentation → set review date → decide escalation pathway.",
        "State the shared aim before attempting to resolve disagreement — 'The shared aim is safe care for the patient.'",
      ],
      examples: [
        "NURSE POSITION: 'Do not discharge.' NURSE CONCERN: 'She will overdose if she returns to unsafe housing.'",
        "SOCIAL WORKER POSITION: 'Discharge her.' SOCIAL WORKER CONCERN: 'Admission is worsening dependency and housing is the real issue.'",
      ],
      meqApplication:
        "In MEQ answers about resolving conflict, show you can distinguish positions from concerns. This signals depth of analysis beyond 'hold a meeting.'",
      commonTrap:
        "Holding a meeting that becomes a blame session without producing a plan.",
    },
    {
      id: "s06",
      order: 6,
      title: "Conflict Between Patients",
      colorTag: "red",
      explanation:
        "Patient-to-patient conflict may occur under the same consultant, different consultants or different wards. Common scenarios include verbal threats, harassment, sexualised behaviour, racial or cultural abuse, assault, coercive relationships and sexual contact between inpatients.",
      keyPoints: [
        "IMMEDIATE: separate patients, review observation levels, assess injuries, assess mental state of both patients, check intoxication/psychosis, review risk to other patients, use security if immediate danger, preserve evidence if assault or serious allegation.",
        "SAME CONSULTANT: acknowledge potential role conflict, ensure both patients receive fair assessment, consider another consultant review if needed, document separate risk formulations, create no-contact plan.",
        "DIFFERENT CONSULTANTS: arrange consultant-to-consultant discussion early, agree who leads the incident review, avoid contradictory instructions to nursing staff, document shared decision-making.",
        "ASSAULT OR SEXUAL INCIDENT: provide immediate safety and medical care, preserve evidence, support both patients, notify senior staff, consider police involvement depending on capacity and consent, complete incident report, debrief staff.",
      ],
      meqApplication:
        "Treat patient-to-patient conflict as both a clinical risk and a governance issue.",
    },
    {
      id: "s07",
      order: 7,
      title: "Conflict Between Patient and Family",
      colorTag: "purple",
      explanation:
        "Family conflict is common in psychiatry and often sits at the boundary between confidentiality, safety and relapse prevention. Common scenarios include patient refusal of family involvement, family demands for information, disagreement about diagnosis, and allegations of family abuse.",
      keyPoints: [
        "Clarify patient capacity before involving family. Seek consent — but collateral can be received even if disclosure to family is not permitted.",
        "Assess family violence and identify children or dependent adults. This changes the confidentiality equation.",
        "Decide what information can be shared — limited disclosure is permitted where safety requires it. Document what was shared and why.",
        "FAMILY MEETING: obtain consent where possible, agree purpose before meeting, use private setting, set ground rules, explain confidentiality limits, discuss relapse signs, clarify post-discharge roles, document agreed plan.",
        "CHILDREN INVOLVED: assess immediate child safety, consider supervised contact, school/daycare pickup risk, child protection advice or notification, support the non-patient parent.",
        "CULTURAL ISSUES: explore family roles, migration history, shame, stigma, religious beliefs, gender roles, health literacy and interpreter need. Do not reduce unsafe behaviour to 'culture.'",
      ],
      commonTrap:
        "Either excluding family completely or giving family confidential information without consent or a safety basis.",
    },
    {
      id: "s08",
      order: 8,
      title: "Conflict Between Patient and Staff",
      colorTag: "amber",
      explanation:
        "Patient-staff conflict can involve communication failure, stigma, coercion, boundary issues, complaint risk or staff safety. Both the patient experience and the staff experience must be taken seriously.",
      keyPoints: [
        "IMMEDIATE: assess patient's current risk, assess staff safety, decide whether there is an allegation requiring formal process, consider temporary change of staff contact.",
        "Review communication breakdown — check whether restraint, seclusion or force was used, consider whether apology or acknowledgement is needed.",
        "RESPONSE TO PATIENT: 'I am sorry this has felt unsafe or disrespectful. I want to understand what happened, make sure you are safe now, and explain how we will address the concern.'",
        "RESPONSE TO STAFF: 'I understand the team has been under pressure. We still need to understand the patient's experience and ensure our response is clinically and professionally safe.'",
        "IF COMPLAINT IS LIKELY: explain complaint pathway, offer consumer liaison or patient advocate, document factually, notify senior staff, preserve records, continue clinical care, protect patient from retaliation, support staff, consider open disclosure if harm occurred.",
      ],
      commonTrap:
        "Taking the patient's concern as 'just symptoms' or treating staff defensiveness as proof nothing happened.",
    },
    {
      id: "s09",
      order: 9,
      title: "Conflict Between Staff",
      colorTag: "teal",
      explanation:
        "Staff conflict affects patient care and should not occur in front of patients. The consultant's role is to clarify the clinical question, identify each person's risk concern, convert value conflict into formulation, clarify roles and document decisions.",
      keyPoints: [
        "NURSE vs SOCIAL WORKER: nurse focuses on immediate risk and containment; social worker focuses on housing, practical supports and discharge barriers. Resolve through shared risk formulation and a single team message to the patient.",
        "NURSE vs OT: nurse focuses on symptoms and risk; OT focuses on function, cognition, ADLs and environmental needs. Use OT assessment to test discharge capacity, home safety and self-care.",
        "NURSE vs NGO: nurse may feel NGO is too permissive; NGO may feel team is coercive. Clarify NGO role, escalation triggers and communication pathway. Mental health team retains clinical risk governance.",
        "NURSE vs PEER WORKER: clarify peer role, after-hours contact, supervision, documentation and escalation. Do not make peer worker the crisis plan.",
        "CONSULTANT vs CONSULTANT: resolve through direct discussion, shared formulation, documentation and escalation to clinical director if unresolved.",
        "STAFF vs LEGAL AGENCY: clarify request, legal authority, consent, treating vs expert role and safety urgency. Provide factual information only, avoid 'no risk' guarantees, document all disclosures.",
      ],
      commonTrap:
        "Letting staff conflict become the patient's problem.",
    },
    {
      id: "s10",
      order: 10,
      title: "Conflict Between Different Teams",
      colorTag: "purple",
      explanation:
        "Different teams often conflict over responsibility, risk threshold or service boundaries. Common examples include ED vs psychiatry, CAMHS vs adult mental health, inpatient vs community, psychiatry vs AOD, forensic vs general psychiatry, and rural vs metropolitan services.",
      keyPoints: [
        "Clarify who currently has duty of care and what clinical decision is needed now.",
        "Identify risk if the patient falls between teams — eligibility disputes must not override safety.",
        "COMMON CAUSES: different risk thresholds, different definitions of 'medically clear', unclear ownership, bed pressure, exclusion criteria, no shared pathway, communication through junior staff only, poor transfer documentation.",
        "Arrange senior-to-senior discussion where junior communication has failed.",
        "Document responsibility and plan explicitly — do not leave ownership ambiguous.",
        "If service boundaries create unsafe care, escalate through clinical governance rather than continuing to argue eligibility.",
      ],
      meqApplication:
        "In MEQs involving inter-team conflict, name who holds current duty of care, what specific clinical decision is pending, and what escalation pathway you would use if the teams cannot agree.",
      commonTrap:
        "Allowing teams to argue eligibility while the patient remains unsafe.",
    },
    {
      id: "s11",
      order: 11,
      title: "Senior Staff vs Junior Staff",
      colorTag: "amber",
      explanation:
        "Hierarchy can silence safety concerns. Junior staff may notice risk but feel unable to challenge senior decisions. A psychologically safe team requires that junior concerns are welcomed, reviewed and acted on.",
      keyPoints: [
        "Listen to junior concerns — thank them for raising safety issues, review facts, support them emotionally.",
        "Provide immediate supervision, clarify what should happen next time, address unsafe senior behaviour separately.",
        "Escalate bullying, harassment or repeated unsafe practice through appropriate governance channels.",
        "FEEDBACK should be: private, timely, specific, based on observed behaviour, linked to patient safety, include the junior person's view, include a plan for improvement.",
        "Do not criticise junior staff publicly or use them as messengers between consultants.",
        "Psychological safety supports speaking up — it does not mean absence of accountability or clinical standards.",
      ],
      commonTrap:
        "Equating psychological safety with lack of accountability. Good supervision supports staff while maintaining clinical standards.",
    },
    {
      id: "s12",
      order: 12,
      title: "Registrar and Senior Staff Conflict",
      colorTag: "blue",
      explanation:
        "Registrar-senior conflict can involve clinical disagreement, supervision failure, workload pressure, complaint, error or unsafe delegation. The consultant must address patient safety before addressing the relationship.",
      keyPoints: [
        "IMMEDIATE: clarify patient safety, clarify registrar's level of experience, review what supervision was available, check whether instructions were clear, check workload and fatigue factors.",
        "IF REGISTRAR DISAGREES: ask them to explain their formulation, identify the specific risk they are worried about, explain your reasoning, invite challenge, decide clearly, document the plan, make escalation pathway clear. If the registrar is correct, acknowledge it.",
        "IF REGISTRAR ERROR OCCURS: ensure patient safety, inform clinical director if serious, complete incident report, support registrar, consider open disclosure, review supervision and system factors, document factual timeline.",
        "After-hours safety: ensure clear escalation pathway, explicit instructions for high-risk decisions and available supervising consultant.",
        "System analysis before individual blame — review supervision, handover, workload, fatigue and documentation standards before attributing error to individual failure.",
      ],
      commonTrap:
        "Blaming the registrar without reviewing supervision, fatigue, handover and system factors.",
    },
    {
      id: "s13",
      order: 13,
      title: "Conflict with NGO or Community Agency",
      colorTag: "teal",
      explanation:
        "NGO and community agency conflicts are common in complex community psychiatry and often arise from unclear role boundaries and unspoken risk transfer. The mental health team retains clinical risk governance.",
      keyPoints: [
        "Clarify what the NGO is funded and clinically competent to do, what information-sharing agreement exists, what consent the patient has given, who holds clinical risk responsibility.",
        "NGOs CAN PROVIDE: psychosocial and practical support, housing support, engagement, recovery-oriented work, appointment support, observation of deterioration.",
        "NGOs SHOULD NOT BE EXPECTED TO: carry sole suicide risk, make medication decisions, manage acute psychosis alone, act as after-hours crisis service unless contracted, substitute for clinical review.",
        "SHARED-CARE PLAN must include: clinical lead, NGO role, patient consent, family role, risk triggers, escalation pathway, communication method, documentation expectations, review frequency, plan if NGO withdraws.",
        "When NGO and CMHT disagree, arrange a shared-care meeting — do not communicate only through the patient.",
      ],
      meqApplication:
        "In MEQs involving NGO conflict, name the NGO's role limits, who holds clinical risk, and what the shared-care escalation pathway is.",
      commonTrap:
        "Either dismissing NGO input or expecting the NGO to carry clinical risk outside scope.",
    },
    {
      id: "s14",
      order: 14,
      title: "Conflict with Peer Support Workers",
      colorTag: "green",
      explanation:
        "Peer work is not junior clinical work. It brings lived-experience knowledge, recovery orientation and relational hope — but still requires boundaries, supervision and role clarity. Conflicts arise when these structures are absent.",
      keyPoints: [
        "Clarify peer worker role, supervision structure, boundaries, documentation expectations, after-hours contact rules, escalation triggers and confidentiality limits.",
        "How peer perspective enters care planning should be explicitly agreed — peer worker should have a voice in MDT without carrying clinical risk.",
        "Peer support can be part of safe care for high-risk consumers, but it must not become the crisis plan.",
        "When the peer worker observes deterioration, receives distressing messages or is placed in an unsafe role, the team must have a clear process for response.",
        "Do not remove peer worker from a patient's care after an incident without reviewing governance — the issue may be the system, not the peer worker.",
      ],
      commonTrap:
        "Banning peer support from high-risk patients after an incident, instead of fixing the governance and support around peer work.",
    },
    {
      id: "s15",
      order: 15,
      title: "Conflict Involving Legal Agencies",
      colorTag: "purple",
      explanation:
        "Legal agencies include police, courts, child protection, corrections, guardianship bodies, tribunals, immigration services and schools. Requests typically involve risk information, court reports or discharge decisions.",
      keyPoints: [
        "Clarify who is asking, what authority they have, what specific question they are asking, whether patient consent exists, whether there is immediate safety risk.",
        "Clarify whether you are acting as treating clinician or independent expert — these roles must remain separate.",
        "PRINCIPLES: provide factual information only, avoid guarantees of 'no risk', distinguish treatment opinion from forensic opinion, share minimum necessary information, document all disclosures, seek senior or legal advice if uncertain.",
        "Do not provide 'risk clearance' — no clinician can guarantee future safety.",
        "Document every disclosure to legal agencies: who requested it, what authority, what was shared and on what basis.",
      ],
      commonTrap:
        "Writing a risk clearance letter that overstates certainty or goes beyond the treating role.",
    },
    {
      id: "s16",
      order: 16,
      title: "Conflict and Complaints",
      colorTag: "red",
      explanation:
        "A complaint may indicate communication failure, privacy breach, discrimination, unsafe care, staff culture problem, poor handover, lack of explanation, unmet family need or system failure. Complaint handling should not be separate from clinical care.",
      keyPoints: [
        "Acknowledge concern, ensure immediate safety, explain complaint process, continue clinical care without retaliating.",
        "Preserve documentation, avoid defensive language, support staff, involve patient liaison or consumer advocate.",
        "Consider open disclosure if harm occurred — do not wait for a formal complaint before having this conversation.",
        "Report through governance if the complaint indicates a systemic or serious safety issue.",
        "Feed learning back into service improvement — complaints are clinical safety information, not administrative problems.",
        "A complaint related to safety, stigma or privacy may directly affect patient engagement and risk.",
      ],
      commonTrap:
        "Treating a complaint as an administrative nuisance rather than clinical safety information.",
    },
    {
      id: "s17",
      order: 17,
      title: "Conflict After Adverse Event or Incident",
      colorTag: "red",
      explanation:
        "After an adverse event, people often polarise. Family may want answers, the patient may feel harmed, staff may feel blamed, junior staff may feel ashamed, and senior staff may become defensive. The consultant's role is to hold the process together.",
      keyPoints: [
        "FIRST ACTIONS: ensure patient safety, support affected patient, support other patients if exposed, support family and carers, support staff, inform senior staff, document facts, complete incident report, preserve relevant records.",
        "Consider open disclosure — families and patients have the right to know what happened.",
        "Plan clinical review and debriefing of staff involved.",
        "ROOT CAUSE MINDSET: identify system contributors — staffing, handover, supervision, policy, workload, unclear roles, communication, documentation and escalation failure.",
        "Do not conduct individual blame before systems analysis is complete.",
        "Separate the incident review process from ongoing clinical care for the patient.",
      ],
      commonTrap:
        "Looking only for an individual to blame and missing the system that allowed the event to occur.",
    },
    {
      id: "s18",
      order: 18,
      title: "Difficult Conversation Structure",
      colorTag: "blue",
      explanation:
        "Use this structure for staff, family, registrar, NGO or legal-agency conversations. The structure prevents conversations from becoming reactive, personal or unproductive.",
      keyPoints: [
        "PREPARE: clarify purpose, review facts, know policy boundaries, choose private setting, allow enough time, decide whether support person is needed, anticipate emotion, know escalation options.",
        "START: 'I want to understand what happened and work out a safe way forward.' / 'This conversation is about patient safety and team functioning.'",
        "EXPLORE: 'What are you most worried about?' / 'What do you think will happen if we follow the current plan?' / 'What information are you using?' / 'What would make the plan safe enough?'",
        "CLARIFY: facts, concerns, assumptions, areas of agreement, unresolved disagreement.",
        "DECIDE: state the decision, rationale, responsibilities, timeline, documentation and review point.",
        "CLOSE: 'This is the plan for now. These are the points we will review. This is how to escalate if risk changes. I will document the plan and communicate it to the relevant people.'",
      ],
      meqApplication:
        "In MEQ answers about difficult conversations, structure your response using these phases. It demonstrates systematic rather than reactive management.",
    },
    {
      id: "s19",
      order: 19,
      title: "Documentation in Conflict Situations",
      colorTag: "purple",
      explanation:
        "Documentation protects patients, staff and the service. It should be factual, clinically relevant and non-pejorative. What is written can affect future care, complaint investigations and legal processes.",
      keyPoints: [
        "DOCUMENT: who raised the concern, what was reported, patient's account, staff/family/agency accounts, objective facts, mental state and risk assessment, confidentiality and consent decisions, advice given, decision made, who was informed, follow-up plan, escalation plan.",
        "AVOID: pejorative labels, speculation written as fact, blaming language, sarcastic comments, copying unverified accusations into plans without context.",
        "BETTER: 'The NGO worker reports concern that the patient has missed three appointments and is spending nights with substance-using peers.'",
        "POOR: 'NGO says patient is manipulative and non-compliant.'",
        "Documentation written during or after conflict should be contemporaneous, objective and clinically focused — not a record of your emotional response.",
      ],
      commonTrap:
        "Documenting conflict in a way that worsens stigma or undermines future patient care.",
    },
    {
      id: "s20",
      order: 20,
      title: "Common MEQ Traps in Conflict Questions",
      colorTag: "amber",
      explanation:
        "Candidates lose marks in conflict questions when they focus on only one dimension of the problem and fail to address safety, governance, documentation and escalation together.",
      keyPoints: [
        "Taking sides too early before gathering facts from multiple sources.",
        "Ignoring immediate patient safety while managing the interpersonal conflict.",
        "Focusing only on emotions and missing governance — or only on governance and missing therapeutic relationship.",
        "Allowing staff conflict to occur in front of the patient.",
        "Ignoring confidentiality or promising family information without consent.",
        "Dismissing NGO or peer workers rather than clarifying their role.",
        "Blaming junior staff without reviewing supervision, system and workload factors.",
        "Failing to document decisions — or documenting pejoratively.",
        "Failing to set role boundaries, or failing to escalate serious conduct, safeguarding or safety issues.",
        "Treating conflict as personality rather than formulation plus system.",
      ],
      meqApplication:
        "In any conflict stem, include: immediate safety, formulation of why the conflict occurred, role clarity, correct process or forum, communication pathway, documentation and escalation pathway.",
    },
    {
      id: "s21",
      order: 21,
      title: "Consultant-Level Summary",
      colorTag: "green",
      explanation:
        "A consultant should first ensure immediate safety, then clarify the nature of the conflict, gather information from relevant people, and separate facts from assumptions. The consultant identifies the underlying concerns behind each position, protects confidentiality, and brings the discussion back to the patient's formulation and safety. The correct process may be an MDT meeting, family meeting, supervision discussion, consultant-to-consultant discussion, incident review, complaint pathway, clinical governance review or HR pathway.",
      keyPoints: [
        "Ensure immediate safety before any other response.",
        "Clarify the nature of the conflict — clinical, interpersonal, legal, ethical, governance or system.",
        "Gather information from relevant people and separate facts from assumptions.",
        "Identify the underlying concern behind each stated position.",
        "Choose the correct process or forum for resolution.",
        "A good conflict-management plan includes: immediate safety plan, shared formulation, clarified roles, named responsibilities, communication plan, documentation, review point, escalation triggers and governance pathway if system issues are present.",
        "If the conflict reflects a system issue, escalate through clinical governance rather than treating it as an individual blame problem.",
      ],
      examples: [
        "'If the conflict reflects a system issue, escalate through clinical governance rather than treating it as an individual blame problem.'",
      ],
      meqApplication:
        "Close any conflict MEQ answer with a governance statement — this demonstrates that you understand conflict as a system signal, not only a personal or clinical problem.",
    },
  ],
};

export const COMPLAINT_PROCESS: Note = {
  id: "complaint_process",
  title: "Complaint Process and Escalation in Psychiatry",
  category: "Governance / Professionalism / Communication / Supervision",
  description:
    "A consultant-level framework for handling complaints in psychiatry, including complaints about staff, junior doctors, consultants, patients, families, advocates, repeated complainants, discrimination, privacy, adverse events, and external escalation.",
  sections: [
    {
      id: "s01",
      order: 1,
      title: "Core Principle",
      colorTag: "blue",
      explanation:
        "A complaint is not only an administrative event. In psychiatry, a complaint may signal clinical risk, therapeutic rupture, stigma, privacy breach, staff distress, supervision failure, system failure, or a genuine professional-conduct concern. A good consultant response keeps three streams moving at the same time: clinical care continues safely, the complaint is handled fairly and transparently, and the system learns without premature blame.",
      keyPoints: [
        "Complaint does not automatically mean fault.",
        "Complaint does not automatically mean the complainant is wrong.",
        "Continue clinical care while the complaint is managed.",
        "Avoid defensive documentation.",
        "Support staff while maintaining accountability.",
        "Use the correct pathway: clinical, complaints, governance, HR, medicolegal, training, privacy or external regulator.",
      ],
      meqApplication:
        "In complaint questions, candidates should not only say 'follow complaint process.' They should show patient safety, fair process, documentation, staff support, escalation and quality improvement.",
      commonTrap:
        "Treating a complaint as a nuisance or treating it as proof of wrongdoing before facts are reviewed.",
    },
    {
      id: "s02",
      order: 2,
      title: "First Steps When a Complaint Is Received",
      colorTag: "green",
      explanation:
        "Start by reading the complaint carefully and separating the clinical, complaint, staff-support and governance streams. Each stream requires a different response and should run in parallel.",
      keyPoints: [
        "CLARIFY: who made the complaint, who it is about, what exactly is alleged, when and where it occurred, whether there is current patient safety risk, and whether there is alleged harm, discrimination, privacy breach, assault, boundary violation, medication error or delayed care.",
        "CLINICAL STREAM: is the patient safe now, does the patient need review, has the complaint affected engagement, is there risk of self-harm, absconding, aggression or disengagement, is there a re-presentation plan?",
        "COMPLAINT STREAM: acknowledge through the correct pathway, identify who should respond, preserve records, avoid informal side conversations once formal pathway starts.",
        "STAFF-SUPPORT STREAM: check how the staff member is coping, provide supervision, consider indemnity advice if formal or external complaint, avoid public blame.",
        "GOVERNANCE STREAM: consider incident report, open disclosure, privacy review, HR, training director, clinical director, Ahpra notification, child protection, police, legal, coroner or insurer.",
      ],
      commonTrap:
        "Responding emotionally or informally before understanding the complaint and the correct pathway.",
    },
    {
      id: "s03",
      order: 3,
      title: "Preserving Records and Notifying the Right People",
      colorTag: "purple",
      explanation:
        "Complaints require careful preservation of information. Do not retrospectively alter clinical notes. If clarification is required, add a dated addendum. What you preserve and who you notify reflects your governance awareness.",
      keyPoints: [
        "PRESERVE: clinical notes, medication charts, observation charts, incident reports, emails, complaint letter, roster or staffing information, phone-call records, CCTV if available under policy, text or social media material if relevant, handover notes, discharge summary, risk assessments.",
        "NOTIFY depending on seriousness: treating consultant, clinical director, nurse unit manager, service manager, hospital complaints unit, patient/consumer liaison, medicolegal/risk/governance unit, privacy officer, training director or supervisor.",
        "ALSO CONSIDER: medical indemnity organisation, HR/workplace relations, child protection, police or legal if required.",
        "Do not alter notes retrospectively — if an addendum is needed, add it as a clearly dated entry explaining what was added and why.",
        "Avoid informal private responses or 'managing it quietly' once a formal complaint pathway has been triggered.",
      ],
      meqApplication:
        "State who needs to know and why. This shows governance awareness and is one of the most reliable marks in complaint MEQ questions.",
      commonTrap:
        "Changing notes retrospectively, deleting messages, or responding privately without notifying governance.",
    },
    {
      id: "s04",
      order: 4,
      title: "Complaint Triage",
      colorTag: "amber",
      explanation:
        "Complaints should be triaged by seriousness. Not every complaint requires the same response, but serious complaints must never be managed as low-level concerns.",
      keyPoints: [
        "LOW-LEVEL COMPLAINTS (delay in appointment, rude tone, poor explanation, confusion about medication, late discharge summary): acknowledge, clarify facts, apologise for distress where appropriate, correct practical problem, document, feed back to team if pattern exists.",
        "MODERATE COMPLAINTS (poor risk assessment, missed follow-up, unclear discharge plan, staff disrespectful, patient stigmatised, privacy concern without major harm, medication monitoring gap): formal complaint pathway, senior clinician review, documentation review, risk review, response letter, local improvement action.",
        "SERIOUS COMPLAINTS (death or serious self-harm after care decision, alleged assault, sexual boundary issue, discriminatory conduct causing harm, serious privacy breach, child safety failure, major medication error, unsafe discharge, restraint/seclusion concern, supervision failure with harm, repeated concerns about same clinician): immediate safety action, incident report, senior escalation, open disclosure, governance review or RCA, medicolegal advice, possible external notification.",
        "Triage determines pace and pathway — not whether the complaint is valid.",
      ],
      commonTrap:
        "Managing a serious complaint as if it is a minor misunderstanding.",
    },
    {
      id: "s05",
      order: 5,
      title: "General Pathway: Start, Handle, Close",
      colorTag: "green",
      explanation:
        "Complaint handling has three phases: start, handle and close. Each phase has specific tasks. Skipping any phase leads to incomplete governance, ongoing risk or repeat complaints.",
      keyPoints: [
        "START: ensure safety, acknowledge complaint, clarify exact issue, use correct pathway, support staff, preserve records, identify whether open disclosure or incident reporting is required.",
        "HANDLE: communicate respectfully, review facts, avoid defensive language, avoid premature blame, maintain confidentiality, continue clinical care, provide timelines where possible, involve senior staff/complaints unit/governance/medicolegal as needed.",
        "CLOSE: provide written response or meeting, acknowledge specific concerns, explain what was reviewed, provide factual explanation where possible, apologise or express regret where appropriate, state actions taken, explain what cannot be disclosed, provide escalation options, document closure, feed service learning into governance.",
      ],
      examples: [
        "'I am sorry this has been distressing.'",
        "'I want to understand what happened and ensure your current care is safe.'",
        "'I cannot give a full conclusion before review, but I can explain the process.'",
        "'Your ongoing care will not be affected by making a complaint.'",
      ],
      meqApplication:
        "Structure your complaint answer using start/handle/close. Examiners reward candidates who show all three phases, not only the initial response.",
      commonTrap:
        "Thinking the complaint is closed because a letter was sent, without ensuring clinical care and service learning are complete.",
    },
    {
      id: "s06",
      order: 6,
      title: "Complaint About a Staff Member",
      colorTag: "teal",
      explanation:
        "Complaints about staff may come from patients, families, advocates, other staff, NGOs, junior doctors, peer workers, external agencies or consultants. The response must protect the patient, support the staff member through fair process, and address the conduct if required.",
      keyPoints: [
        "WHERE TO START: is the patient safe, does the patient need a different staff contact temporarily, is there alleged serious misconduct/assault/discrimination/privacy breach/boundary violation, does this require incident report/HR/clinical governance?",
        "LOW/MODERATE CONCERNS: speak with complainant, speak with staff member privately, review notes and context, consider workload and system pressures, clarify expected behaviour, provide feedback or education, document and monitor.",
        "SERIOUS CONCERNS: escalate to line manager/service manager/clinical director, consider temporary removal from patient care if safety or fairness requires, preserve records, follow HR/professional-conduct pathway, consider open disclosure if patient harmed, support staff member and team.",
        "CLOSE: complainant informed through correct channel, staff feedback handled privately, actions recorded, learning returned to team if relevant, policy/training updates if needed, repeated conduct monitored.",
      ],
      commonTrap:
        "Either protecting staff without review or assuming guilt before fair process.",
    },
    {
      id: "s07",
      order: 7,
      title: "Complaint About a Junior Doctor or Registrar",
      colorTag: "blue",
      explanation:
        "Complaints about junior doctors are common in MEQs. They require patient safety first, then supervision review, registrar support, complaint process and governance — not just referral to a complaints department.",
      keyPoints: [
        "WHERE TO START: is the patient safe, does the patient need welfare check or urgent review, what exactly is alleged, what is the registrar's account, what supervision was available, was the registrar working within competence, was the consultant available, did workload/fatigue/system pressure contribute?",
        "PATIENT CARE: arrange welfare contact if clinically indicated, review risk, contact GP or previous service if relevant, document re-presentation plan, arrange urgent review if complaint reveals ongoing risk.",
        "COMPLAINT PROCESS: read the complaint, clarify allegations, obtain registrar account, use hospital complaints or medicolegal pathway, consultant or clinical director may need to respond, do not let registrar send an unsupported defensive response.",
        "REGISTRAR WELLBEING: ask how they are coping, offer supervision and debrief, involve principal supervisor or Director of Training, consider peer support, advise contact with medical indemnity if formal or regulatory issue.",
        "IF REGISTRAR ERROR OCCURRED: do not jump to blame, consider supervision/task complexity/policies/fatigue/handover/system factors, complete incident report, support registrar, consider open disclosure, document factual timeline.",
      ],
      commonTrap:
        "Blaming the registrar without reviewing supervision, fatigue, workload and unclear instructions.",
    },
    {
      id: "s08",
      order: 8,
      title: "Complaint About Another Consultant",
      colorTag: "purple",
      explanation:
        "Complaints about another consultant are sensitive because of hierarchy, collegiality and patient safety. The duty to the patient overrides professional loyalty.",
      keyPoints: [
        "WHERE TO START: is this clinical disagreement, conduct, safety, supervision, discrimination, impairment or system pressure — is a patient unsafe now — are you treating consultant, covering consultant, colleague, supervisor or manager — do you have authority to intervene — does clinical director need involvement?",
        "IMMEDIATE PATIENT SAFETY: intervene to protect patient, arrange review, clarify interim care plan, escalate to clinical director if disagreement persists, document facts and rationale.",
        "PROFESSIONAL CONDUCT CONCERN: avoid corridor gossip, document concern factually, seek advice from clinical director or medical director, follow hospital policy, consider formal complaint/HR/professional standards pathway.",
        "CLINICAL DISAGREEMENT: speak consultant-to-consultant, focus on formulation, risk and standard of care, avoid using juniors or nurses as messengers, if unresolved escalate to clinical director.",
        "CLOSE: patient safety addressed, complainant receives appropriate response, consultant receives fair process, clinical director aware if needed, plan documented, peer review/remediation/governance outcome monitored.",
      ],
      commonTrap:
        "Colluding with a senior colleague due to hierarchy, or accusing without fair process.",
    },
    {
      id: "s09",
      order: 9,
      title: "Complaint About a Patient",
      colorTag: "amber",
      explanation:
        "Complaints may be made against patients by staff, other patients, families or services. This must be managed clinically and safely. The patient still has the right to complain; staff also have the right to safety.",
      keyPoints: [
        "WHERE TO START: is there immediate risk to staff, other patients or family — is behaviour driven by illness, intoxication, trauma, personality dynamics, cognitive impairment or antisocial behaviour — does the patient retain capacity/responsibility — is this a behavioural, clinical, legal, security or complaint issue?",
        "CLINICAL FORMULATION: consider mania, psychosis, intoxication, delirium, trauma response, fear, attachment threat, personality vulnerability, cognitive impairment, cultural misunderstanding, genuine grievance, or threatening behaviour.",
        "BEHAVIOURAL PLAN: clear boundaries, staff consistency, single communication point, written expectations where appropriate, de-escalation plan, no-contact plan if another patient involved, visitor restrictions if needed, security or police only when necessary.",
        "IMPORTANT PRINCIPLE: a patient who behaves poorly still has the right to complain. Staff also have a right to safety. These are not in conflict — both are managed in parallel.",
        "CLOSE: patient concerns addressed, behavioural expectations clear, staff safety plan documented, ongoing care pathway preserved, escalation plan if threats continue.",
      ],
      commonTrap:
        "Silencing complaints because the patient has BPD, mania, psychosis or AOD problems.",
    },
    {
      id: "s10",
      order: 10,
      title: "Complaint About Family or Carer",
      colorTag: "teal",
      explanation:
        "Sometimes the complaint concerns family behaviour, or staff have serious concerns about family involvement. The same person may be a carer, a source of information and a source of risk simultaneously.",
      keyPoints: [
        "WHERE TO START: is the family member a carer, support person, source of risk, or all three — does patient consent to involvement — is there family violence or coercive control — are children or vulnerable adults at risk — what information can be shared and what can be received?",
        "IF FAMILY HAS LEGITIMATE CONCERN: listen, validate distress, receive collateral, explain confidentiality limits, involve patient where possible, address care concerns through complaint pathway.",
        "IF FAMILY BEHAVIOUR IS UNSAFE: set boundaries, limit visits if needed, involve security if immediate risk, create staff communication plan, document behaviour, consider family violence or child protection pathways.",
        "Do not exclude family entirely just because their behaviour is problematic — carer support and appropriate family involvement are still part of good care.",
      ],
      examples: [
        "'I can listen to your concerns and include them in the care plan. I may not be able to share details without consent, unless there is a serious safety reason.'",
      ],
      commonTrap:
        "Either excluding family completely or sharing confidential information because family is distressed.",
    },
    {
      id: "s11",
      order: 11,
      title: "Complaint by Advocate or Consumer Representative",
      colorTag: "green",
      explanation:
        "Advocates may be patient advocates, mental health advocates, legal advocates, cultural advocates, disability advocates, peer advocates or consumer representatives. They are part of rights-based care, not obstacles to it.",
      keyPoints: [
        "WHERE TO START: who does the advocate represent — is there patient consent — what legal authority do they have — what issue are they raising — is there immediate safety concern — do they want explanation, review, meeting, records, formal complaint or legal process?",
        "HOW TO HANDLE: respect advocate role, confirm consent or authority, avoid defensiveness, provide appropriate information within confidentiality limits, arrange meeting if useful, explain clinical reasoning and legal basis, provide rights information, document communication, escalate if serious rights or safety issue identified.",
        "IF ADVOCATE CHALLENGES COMPULSORY CARE: explain legal criteria considered, explain risk formulation, explain least restrictive alternatives considered, explain review rights, explain tribunal/review process, explain how patient can access second opinion or legal support.",
        "CLOSE: clarify what was agreed, confirm what information was provided, document consent or authority, provide pathway for further review, ensure patient care continues respectfully.",
      ],
      commonTrap:
        "Treating advocates as enemies rather than as part of rights-based care.",
    },
    {
      id: "s12",
      order: 12,
      title: "Repeated Complaints by the Same Person or About the Same Clinician",
      colorTag: "amber",
      explanation:
        "Repeated complaints may be from the same patient, family or advocate, or may be repeated complaints directed at the same consultant. Repeated does not mean invalid.",
      keyPoints: [
        "Repeated complaints may reflect: unresolved harm, poor communication, personality or trauma dynamics, cultural shame, genuine unsafe pattern, litigation strategy, dissatisfaction with detention, complaint process failure, or vexatious/unreasonable conduct.",
        "WHERE TO START: what is new — what has already been answered — is there current clinical risk — is the therapeutic relationship ruptured — is the consultant still appropriate to provide care — is there risk of retaliatory care, defensive practice or staff harm?",
        "IF NEW SAFETY INFORMATION EXISTS: treat as new clinical information regardless of pattern — 'He is suicidal but you ignored me', 'She is being discharged to violence', 'Medication side effects were dismissed.'",
        "IF REPEATING ALREADY ANSWERED ISSUES: acknowledge receipt, summarise previous response, identify whether new information exists, avoid endless re-litigation, offer review or escalation option, set communication boundaries.",
        "IF THERAPEUTIC RELATIONSHIP DAMAGED: consider second consultant review, consider transfer of care, consider joint meeting with service manager, involve patient advocate, create clear written plan, avoid abandoning patient.",
        "IF COMPLAINT TARGETS CONSULTANT PERSONALLY: avoid emotional response, notify clinical director, seek indemnity advice, document factually, continue care or arrange safe transfer.",
      ],
      commonTrap:
        "Dismissing repeated complaints as vexatious without checking for new risk, rights or safety information.",
    },
    {
      id: "s13",
      order: 13,
      title: "Complaint Involving Discrimination, Stigma or Cultural Unsafety",
      colorTag: "red",
      explanation:
        "Complaints about discrimination, stigma or cultural unsafety are high-risk for engagement, patient safety and governance. They require a clinical and governance response, not just an interpersonal one.",
      keyPoints: [
        "EXAMPLES: transgender patient misgendered or mocked, Aboriginal patient feels culturally unsafe, refugee patient feels coerced, patient with BPD labelled manipulative, patient with addiction treated as drug-seeking, family says staff mocked religious or cultural beliefs, patient with disability not given communication support.",
        "WHERE TO START: ensure current clinical safety, acknowledge distress, protect patient from further harm, involve cultural liaison/interpreter/advocate if appropriate, preserve records, notify senior staff, review staff conduct and system process.",
        "HOW TO HANDLE: ask what happened from the patient's perspective, do not immediately debate lived experience, review staff accounts, consider privacy/dignity/discrimination, offer complaint pathway, consider open disclosure if harm occurred, provide staff education or system change if needed.",
        "CLOSE: explain findings and actions as much as privacy allows, document changes, support patient engagement, monitor re-presentation risk, include consumer feedback in service improvement.",
      ],
      meqApplication:
        "Discrimination and cultural safety complaints require you to address both the individual complaint and the system — examiners look for cultural humility, governance escalation and service improvement alongside clinical safety.",
      commonTrap:
        "Treating discrimination complaints as oversensitivity rather than clinical safety and governance concerns.",
    },
    {
      id: "s14",
      order: 14,
      title: "Complaint Involving Privacy, Records or Social Media",
      colorTag: "purple",
      explanation:
        "Privacy and social media complaints can rapidly become governance, legal and professional-conduct issues. The priority is to contain the breach, preserve evidence and notify the privacy or governance unit — not to manage it quietly.",
      keyPoints: [
        "COMMON SOURCES: family told information without consent, staff discussed patient loudly, wrong discharge summary sent, identifiable social media post, notes include pejorative language, patient wants records corrected, photo or video recording issue.",
        "WHERE TO START: contain ongoing breach, remove or secure material if needed under policy, preserve evidence, notify privacy/governance unit, assess patient safety and distress, consider open disclosure, review who received information, document.",
        "HOW TO HANDLE: do not delete evidence to conceal incident, follow privacy incident pathway, inform patient where required, review EMR/communication/staff conduct, provide education/remediation, escalate if serious or repeated.",
        "CLOSE: breach contained, patient informed through correct process, systems changed, staff action completed, documentation finalised.",
      ],
      commonTrap:
        "Trying to fix the issue quietly without privacy/governance advice.",
    },
    {
      id: "s15",
      order: 15,
      title: "External Complaint Pathways",
      colorTag: "purple",
      explanation:
        "Complaints may go outside the hospital or health service to regulatory, legal or oversight bodies. When this happens, the individual clinician should not respond alone.",
      keyPoints: [
        "EXTERNAL PATHWAYS may include: Ahpra, Medical Board, RANZCP complaints process, state or territory health complaints bodies, Privacy bodies, Ombudsman, Coroner, Court, Police, Child protection, New Zealand Health and Disability Commissioner where relevant.",
        "WHERE TO START: identify which external body is involved, notify clinical director/manager, contact indemnity organisation early, preserve records, do not respond alone if formal regulatory or legal process, continue clinical care, document all communication.",
        "PRINCIPLES: be factual, do not speculate, do not blame others, do not alter records, do not ignore deadlines, seek medicolegal advice, support staff involved.",
      ],
      meqApplication:
        "When an external pathway is identified in an MEQ stem, name the pathway, say who you would notify and confirm you would seek medicolegal advice before responding.",
      commonTrap:
        "Thinking an external complaint is only personal, when it may also reveal service governance issues requiring a broader response.",
    },
    {
      id: "s16",
      order: 16,
      title: "Insurance and Indemnity",
      colorTag: "amber",
      explanation:
        "Medical indemnity should be contacted early when a complaint is formal, external, legal, serious, regulatory, coronial or personally directed at the doctor. Contacting indemnity does not mean becoming defensive — it means getting appropriate support.",
      keyPoints: [
        "CONTACT INDEMNITY WHEN: Ahpra or health complaints body notification received, legal letter received, coroner involvement possible, serious incident or death, boundary or sexual misconduct allegation, privacy breach, social media issue, complaint personally names you, complaint involves your registrar under your supervision, complaint alleges negligence or harm, you are asked to provide a formal statement.",
        "INDEMNITY CAN ASSIST WITH: wording responses, avoiding admissions beyond facts, open disclosure advice, regulatory responses, legal privilege, coroner preparation, personal support.",
        "Contacting indemnity does not prevent you from apologising for distress, supporting the patient, participating in open disclosure or improving care — it ensures you do so safely.",
      ],
      commonTrap:
        "Writing a long defensive response before obtaining medicolegal advice.",
    },
    {
      id: "s17",
      order: 17,
      title: "Documentation in Complaint Escalation",
      colorTag: "blue",
      explanation:
        "Write complaint-related notes as if they may be read by the patient, family, complaint officer, Ahpra, coroner, court, clinical director, supervisor or another consultant. Every word reflects your professionalism.",
      keyPoints: [
        "DOCUMENT: complaint received, exact concern in neutral language, patient's current risk and care plan, who was informed, records reviewed, staff accounts sought, complaint pathway used, advice from governance or medicolegal team, open disclosure discussion, actions taken, follow-up plan.",
        "AVOID: 'Patient is manipulative', 'Family is difficult', 'Complaint is vexatious' without basis, 'Registrar stuffed up', defensive commentary, blaming language, speculation, retrospective rewriting.",
        "BETTER WORDING: 'The patient reported feeling dismissed during ED review. I acknowledged the concern, reviewed current risk, explained the complaint pathway, informed the nurse-in-charge and documented a plan for follow-up. Further review of staff accounts and notes will occur through the local complaints process.'",
        "Add a dated addendum if clarification of earlier notes is needed — do not overwrite or remove original entries.",
      ],
      commonTrap:
        "Using pejorative language in notes after receiving a complaint.",
    },
    {
      id: "s18",
      order: 18,
      title: "Open Disclosure vs Complaint Response",
      colorTag: "green",
      explanation:
        "Open disclosure and complaint response overlap but are not the same process. Both can and should run alongside ongoing clinical care.",
      keyPoints: [
        "OPEN DISCLOSURE: use when healthcare did not go to plan and harm occurred or may have occurred. Includes apology or expression of regret, facts known so far, hearing patient/family experience, consequences, steps for review, steps to prevent recurrence. Can occur in stages — does not have to wait until investigation is complete.",
        "COMPLAINT RESPONSE: addresses the issues raised, process followed, findings where appropriate, actions taken and review options. Separate from open disclosure but may overlap.",
        "CLINICAL CARE: ongoing care must continue regardless of either process. The patient should not feel punished for complaining.",
        "You can acknowledge distress and express regret without admitting liability — this is appropriate and expected in open disclosure.",
      ],
      meqApplication:
        "In MEQ stems involving harm, name both open disclosure and the complaints pathway as separate but concurrent processes alongside clinical care.",
      commonTrap:
        "Refusing to acknowledge distress because the investigation is incomplete.",
    },
    {
      id: "s19",
      order: 19,
      title: "Closing a Complaint Well",
      colorTag: "green",
      explanation:
        "A complaint is not closed simply because a letter was sent. Closure requires that patient care is safe, staff are supported, the system has learned, and the complainant knows what was done and what to do if dissatisfied.",
      keyPoints: [
        "A GOOD CLOSURE INCLUDES: patient/family knows outcome or next step, ongoing clinical care plan is safe, staff involved have been supported, documentation is complete, required incident report is completed, system learning is identified, actions are assigned, review or audit planned if needed.",
        "CLOSURE SHOULD ADDRESS: what concern was reviewed, what information was considered, what conclusion was reached where possible, what action was taken, what cannot be disclosed due to privacy, what the complainant can do if dissatisfied, how care will continue.",
        "Complainant should be told escalation options even if the service believes the complaint was addressed — this is part of a fair process.",
        "Feed learning back to the team and service — not as blame but as system improvement.",
      ],
      commonTrap:
        "No feedback to staff or service after complaint resolution, so the same problem recurs.",
    },
    {
      id: "s20",
      order: 20,
      title: "MEQ-Ready Answer Structure",
      colorTag: "blue",
      explanation:
        "When asked 'How would you respond to the complaint?' use this six-domain structure. It covers everything examiners look for in complaint questions.",
      keyPoints: [
        "1. IMMEDIATE SAFETY: review patient if ongoing risk, ensure care continues, consider welfare check if disengaged, ensure re-presentation plan.",
        "2. UNDERSTAND THE COMPLAINT: read complaint, clarify exact issues, speak to complainant if appropriate through correct pathway, obtain staff account, review notes.",
        "3. PROCESS: use local complaints policy, involve complaints unit/clinical director/medicolegal/risk team, preserve records, consider open disclosure if harm occurred, consider incident report if safety event.",
        "4. SUPPORT: support patient/family, support staff/junior doctor, offer supervisor/Director of Training/peer support for registrar, advise indemnity contact if formal or regulatory.",
        "5. GOVERNANCE: identify system issues, consider audit/QI/training, document decision-making, escalate serious conduct or mandatory-notification concerns.",
        "6. CLOSE: clear response, apology or regret where appropriate, actions taken, review options, follow-up and monitoring.",
      ],
      meqApplication:
        "Use these six domains as your answer headings in complaint MEQ questions. Candidates who cover all six domains reliably pass; candidates who stop at 'refer to complaints department' do not.",
      commonTrap:
        "Writing only 'refer to complaints department' without addressing clinical safety or staff support.",
    },
    {
      id: "s21",
      order: 21,
      title: "Consultant-Level Summary",
      colorTag: "green",
      explanation:
        "A consultant should first ensure the patient's current safety and continuity of care, then read the complaint carefully and clarify the exact concerns. The consultant should follow the local complaints pathway, preserve records, obtain relevant perspectives, and involve the clinical director, complaints unit, medicolegal/risk team or indemnity organisation as appropriate. If harm occurred, open disclosure should be considered. Staff or junior doctors involved should be supported while accountability is maintained. Documentation should be factual, non-defensive and non-pejorative. Complaints should be used to identify service improvements.",
      keyPoints: [
        "HIGH-YIELD MEQ TRIGGERS: 'Family says nobody listened', 'Patient re-presents after avoiding care', 'Registrar receives complaint email', 'Staff member says not to apologise', 'Senior consultant wants to handle it informally.'",
        "MORE HIGH-YIELD TRIGGERS: 'Delete the screenshots', 'Bed manager pressured discharge', 'Junior nurse afraid to speak up', 'Advocate alleges breach of rights', 'Wrong GP received discharge summary.'",
        "MORE HIGH-YIELD TRIGGERS: 'Patient was misgendered, culturally unsafe or mocked', 'Complaint before accreditation visit', 'Consumer representative asks why patient experience was ignored', 'Family says you discharged the bed, not the patient.'",
        "WHAT THE EXAMINER WANTS: patient safety, fair process, staff support, governance escalation, open disclosure where relevant, documentation and QI learning.",
      ],
      examples: [
        "'The examiner wants patient safety, fair process, staff support, governance escalation, open disclosure where relevant, documentation and QI learning.'",
      ],
      meqApplication:
        "In any complaint MEQ answer, close with a governance and QI statement — this signals that you understand complaints as system signals, not only individual events.",
    },
  ],
};

export const INCIDENT_MANAGEMENT: Note = {
  id: "incident_management",
  title: "Incident Management, Adverse Events and Near Misses in Psychiatry",
  category: "Clinical Governance / Patient Safety / Leadership",
  description:
    "A consultant-level framework for managing psychiatric incidents, adverse events and near misses, including inpatient suicide or near-miss, ligature events, absconding, assault, medication error, missed observations, delayed review, handover failure, death after discharge, restraint or seclusion injury and child-safety failure.",
  sections: [
    {
      id: "s01",
      order: 1,
      title: "Core Principle",
      colorTag: "blue",
      explanation:
        "An incident or near miss is not simply 'something bad happened.' In psychiatry, it tests whether the consultant can move from clinical reaction to governance response. A good consultant response does four things at the same time: protects people immediately, preserves facts, communicates transparently, and improves the system.",
      keyPoints: [
        "First priority is current safety, not assigning blame.",
        "Treat serious incidents as both clinical events and governance events.",
        "Preserve records early — before memories fade or documents are altered.",
        "Support patient, family, other patients and staff.",
        "Use just culture rather than blame culture.",
        "Close the loop with action and re-audit — not just an incident form.",
      ],
      meqApplication:
        "In incident stems, do not answer only 'assess the patient.' Add governance: incident notification, open disclosure, documentation, RCA or M&M, action plan and re-audit.",
      commonTrap:
        "Only completing an incident form without managing current safety and system learning.",
    },
    {
      id: "s02",
      order: 2,
      title: "What Counts as an Incident, Adverse Event or Near Miss",
      colorTag: "amber",
      explanation:
        "These three categories have different definitions but all require a response. Near misses matter because they reveal system vulnerability before major harm occurs.",
      keyPoints: [
        "INCIDENT: an event that affected, or could have affected, patient safety, staff safety, service quality or public safety. Examples: ligature attempt, absconding, assault, missed observations, wrong medication, delayed review, discharge without follow-up, restraint injury, privacy breach, child-safety failure.",
        "ADVERSE EVENT: an incident where harm actually occurred. Examples: wrong medication caused hypotension and fall, seclusion caused injury, patient attempted suicide after missed observation, lithium toxicity after unclear handover, patient died after discharge without assertive follow-up.",
        "NEAR MISS: an event that could have caused harm but did not because of chance, early detection or rescue. Examples: ligature found before loss of consciousness, wrong medication drawn up but not administered, patient absconded but returned safely.",
        "Near misses matter because they reveal system vulnerability before major harm occurs — they should be reported and reviewed with the same seriousness as adverse events.",
      ],
      commonTrap:
        "Not reporting near misses because 'no harm occurred.' Near misses are governance events.",
    },
    {
      id: "s03",
      order: 3,
      title: "Immediate Safety Response",
      colorTag: "red",
      explanation:
        "The first consultant question is: 'Who is unsafe now, and what must happen in the next 5 to 30 minutes?' Governance review comes after the clinical situation is stabilised.",
      keyPoints: [
        "AFFECTED PATIENT: review airway/breathing/circulation and physical injuries if relevant, arrange urgent medical review or transfer if needed, review mental state and risk, increase observations if needed, remove immediate means of harm, review leave and legal status.",
        "OTHER PATIENTS: check who witnessed the event, move distressed patients away from the scene, assess whether others are triggered or at risk, prevent rumours spreading, provide group or individual support if needed.",
        "STAFF: ensure staff are physically safe, remove from immediate danger, arrange debrief after containment, check for injury/shock/guilt/distress, offer supervision, EAP or time out where needed.",
        "FAMILY OR CARERS: identify next of kin or nominated contact, consider whether urgent contact is required, prepare for family meeting if serious harm or death occurred, communicate honestly and compassionately within confidentiality limits.",
      ],
      commonTrap:
        "Starting governance review before stabilising the immediate clinical situation.",
    },
    {
      id: "s04",
      order: 4,
      title: "Preserve Facts Early",
      colorTag: "purple",
      explanation:
        "Do not let the team reconstruct the story loosely from memory days later. Fact preservation is a governance responsibility, not a bureaucratic one.",
      keyPoints: [
        "PRESERVE: clinical notes, risk assessments, observation charts, nursing notes, medication chart, seclusion/restraint records, leave forms, handover notes, phone-call records, incident report, discharge summary, CCTV if available under policy, staff roster and staffing levels, patient belongings or ligature item if relevant, emails or messages, collateral from family/GP/police/ambulance/NGO.",
        "DO NOT: alter notes retrospectively, delete records, 'tidy up' documentation, blame individuals in the chart, ask staff to coordinate stories, delay reporting because 'no harm occurred.'",
        "If clarification is needed, add a clearly dated addendum — do not overwrite the original entry.",
        "Records that are altered, deleted or missing after a serious incident become a governance and legal problem independent of the original event.",
      ],
      commonTrap:
        "Retrospective rewriting or defensive documentation after an incident.",
    },
    {
      id: "s05",
      order: 5,
      title: "Incident Notification and Escalation",
      colorTag: "purple",
      explanation:
        "Incidents should be reported through the local incident-management system. Serious events need senior escalation. In MEQs, naming who you notify and why demonstrates clinical governance thinking.",
      keyPoints: [
        "NOTIFY DEPENDING ON SEVERITY: treating consultant, nurse unit manager, clinical director, service manager, hospital executive if serious, risk/governance unit, complaints unit if complaint likely, privacy officer if information breach, pharmacy if medication event, training director or supervisor if registrar involved.",
        "ALSO CONSIDER: medical indemnity or legal team if serious harm, death or regulatory risk; police, coroner or child protection where required.",
        "Serious incident = do not manage informally within the team to avoid embarrassment or blame. Informal management of serious incidents is itself a governance failure.",
        "The incident-management system creates a formal record that drives review, action and re-audit.",
      ],
      meqApplication:
        "State clearly who you would notify and why. This shows clinical governance thinking — it is consistently rewarded in MEQ scoring.",
      commonTrap:
        "Managing a serious incident informally within the team because everyone is embarrassed or afraid of blame.",
    },
    {
      id: "s06",
      order: 6,
      title: "Support for Patient, Family and Staff",
      colorTag: "teal",
      explanation:
        "Incident management is not only an investigation. It is also a containment process. Distressed staff make errors, withdraw from care, become defensive or document poorly — supporting them improves patient safety.",
      keyPoints: [
        "PATIENT SUPPORT: provide immediate physical and psychiatric care, explain what is happening, avoid blaming language, offer support person or advocate, reassess risk and care plan, continue care despite complaint or incident review.",
        "FAMILY SUPPORT: offer private meeting, acknowledge distress, allow questions/anger/grief, give facts known so far, avoid speculation, explain next steps, offer support services, arrange follow-up meeting.",
        "STAFF SUPPORT: immediate debrief once safe, check injuries and psychological distress, support junior staff and registrars, avoid public blame, offer supervision or EAP, clarify expectations for statements and documentation, encourage indemnity advice if formal process.",
        "KEY PRINCIPLE: staff support is not avoiding accountability. Distressed staff make errors, withdraw from care, become defensive or document poorly. Supporting them improves safety.",
      ],
      commonTrap:
        "Only supporting the patient/family and forgetting staff, or only protecting staff and forgetting the patient/family.",
    },
    {
      id: "s07",
      order: 7,
      title: "Open Disclosure",
      colorTag: "green",
      explanation:
        "Open disclosure is required when healthcare did not go to plan and harm occurred or may have occurred. It is not the same as admitting legal liability. It is a structured, transparent and compassionate discussion about what happened, what is known, what is not yet known and what will happen next.",
      keyPoints: [
        "OPEN DISCLOSURE SHOULD INCLUDE: acknowledgement that something happened, apology or expression of regret, facts known at the time, what is still being investigated, consequences for the patient, immediate treatment and support, how the review will occur, how the patient or family will be updated, what will be done to reduce recurrence.",
        "DO NOT: say nothing until legal clears it when immediate acknowledgement is needed, speculate, blame one staff member prematurely, promise outcomes before investigation, disappear after the first meeting.",
        "Open disclosure may happen in stages — early disclosure can acknowledge distress and known facts, later disclosure can address findings and system actions.",
        "Open disclosure is not a legal admission of liability. You can apologise for distress and acknowledge harm without making legal admissions — this is expected and appropriate.",
      ],
      meqApplication:
        "If harm occurred, mention open disclosure, family meeting, factual explanation, apology or expression of regret, ongoing support and review process. These are separate but concurrent with the clinical response.",
      commonTrap:
        "Avoiding open disclosure because of legal fear, or waiting until the entire investigation is complete before acknowledging distress.",
    },
    {
      id: "s08",
      order: 8,
      title: "Factual Documentation After an Incident",
      colorTag: "blue",
      explanation:
        "Documentation must be factual, contemporaneous and defensible. Write as if the note will be read by a coroner, Ahpra investigator, patient, family, clinical director, or court.",
      keyPoints: [
        "DOCUMENT: what happened, time and location, who found the patient/event, patient's physical and mental state, immediate actions taken, medical review, family/carer communication, staff informed, incident notification, legal and leave status, updated risk plan, follow-up plan, open disclosure plan if relevant.",
        "AVOID: 'Nurse failed to observe' before review, 'Patient manipulative', 'Family difficult', 'Registrar negligent', retrospective rewriting, speculation about motives, defensive commentary.",
        "GOOD EXAMPLE: 'At 14:20 the patient was found in the ensuite with a bedsheet tied to the shower rail. Nursing staff removed the ligature and commenced immediate assessment. Medical review was arranged. The patient was distressed and reported ongoing suicidal intent. Observations were increased to constant visual observation. Incident report completed and clinical director notified.'",
        "A note that reads as defensive or blaming is a governance problem in itself — it signals that documentation was used to protect the author rather than to record clinical facts.",
      ],
      commonTrap:
        "Using documentation to defend yourself rather than record facts and clinical reasoning.",
    },
    {
      id: "s09",
      order: 9,
      title: "Morbidity and Mortality Meeting or Case Conference",
      colorTag: "teal",
      explanation:
        "A serious incident should usually trigger a structured case review, M&M meeting, clinical review or RCA depending on severity. The purpose is system learning, not blame allocation.",
      keyPoints: [
        "PURPOSE: understand what happened, identify clinical and system contributors, support learning, avoid recurrence, ensure accountability without scapegoating.",
        "REVIEW SHOULD INCLUDE: timeline, index risk formulation, observation decisions, staffing level, handover, escalation, medication, physical environment, policy adherence, documentation, communication with family/GP/community team, supervision, discharge or leave decisions, cultural/family/trauma factors.",
        "SHOULD NOT BECOME: public humiliation of registrar or nurse, defensive meeting, blame allocation exercise, generic 'we need better communication' conclusion without action.",
        "The consultant's role in M&M is to model just culture — not to protect people from accountability, and not to scapegoat them.",
      ],
      commonTrap:
        "Holding a meeting that produces no measurable action — learning without action is incomplete governance.",
    },
    {
      id: "s10",
      order: 10,
      title: "Root Cause Analysis",
      colorTag: "purple",
      explanation:
        "Root cause analysis is used for serious, high-risk or high-impact events. It asks: 'How did the system allow this to happen?' It is focused on system contributors, not the last person in the chain.",
      keyPoints: [
        "RCA PRINCIPLES: thorough, fair, efficient, independent where appropriate, focused on system contributors not scapegoating.",
        "RCA TEAM may include: clinical risk manager, consultant psychiatrist or clinical director, nursing representative, pharmacist if medication issue, consumer/carer representative where appropriate, staff member indirectly involved, service manager, quality/safety officer.",
        "RCA STEPS: verify the incident → commission RCA team → map timeline → identify critical events → analyse causes and contributing factors → identify root causes → support findings with evidence → generate solutions → provide recommendations.",
        "COMMON ROOT CAUSES IN PSYCHIATRY: unclear observation policy, inadequate ligature audit, poor environmental safety, poor handover, delayed escalation, unclear consultant responsibility, registrar working beyond competence, inadequate supervision, bed pressure, staff shortage, poor medication reconciliation, poor discharge summary, no GP handover, no family/carer contact, no child-safety pathway, policy exists but not workable.",
      ],
      commonTrap:
        "Calling something an RCA but only blaming the last person involved — that is not RCA, it is scapegoating.",
    },
    {
      id: "s11",
      order: 11,
      title: "Just Culture and Avoiding Blame Culture",
      colorTag: "green",
      explanation:
        "A just culture is not 'no accountability.' It means fair accountability — distinguishing human error from at-risk behaviour from reckless behaviour, and examining the system that allowed each to occur.",
      keyPoints: [
        "JUST CULTURE ASKS: was this human error, at-risk behaviour, or reckless behaviour? Was the system unsafe? Was the person trained? Was the policy clear? Was supervision available? Were staffing levels safe? Was there pressure to take shortcuts? Would another reasonable clinician have acted similarly?",
        "AFTER AN INCIDENT, teams often polarise: nurses blame doctors, doctors blame nurses, staff blame bed pressure, managers blame documentation, families blame the whole service, registrars blame themselves.",
        "THE CONSULTANT MUST HOLD THE MIDDLE GROUND: support people, identify accountability, fix the system.",
        "Just culture accountability: console human error, coach at-risk behaviour, consider disciplinary action for reckless behaviour — but always examine the system that allowed each.",
      ],
      commonTrap:
        "Thinking 'no blame' means no one is accountable — just culture requires both support and proportionate accountability.",
    },
    {
      id: "s12",
      order: 12,
      title: "Action Plan After Incident Review",
      colorTag: "green",
      explanation:
        "A review without action is weak governance. Every recommendation needs a named owner, a timeframe and a re-audit date.",
      keyPoints: [
        "ACTION PLAN SHOULD INCLUDE: what will change, who is responsible, timeframe, resources required, how staff will be trained, how compliance will be measured, how outcome will be reviewed, how patient/family feedback is incorporated, when re-audit will occur.",
        "MISSED OBSERVATION INCIDENT: clarify observation policy, train staff, implement escalation prompt, audit observation charts weekly for 3 months, review staffing triggers, require consultant sign-off for reducing high-level observations.",
        "MEDICATION ERROR: medication reconciliation on admission, high-risk medication alert, pharmacist review, independent double-check, prescriber education, eMAR alert, open disclosure training, re-audit.",
        "DEATH AFTER DISCHARGE: review discharge decision, follow-up timeframe, safety plan quality, GP communication, family/carer involvement, missed-appointment policy, implement high-risk discharge checklist.",
      ],
      commonTrap:
        "Recommending 'staff education' only, without process change, named ownership and re-audit.",
    },
    {
      id: "s13",
      order: 13,
      title: "Re-Audit and Closing the Loop",
      colorTag: "green",
      explanation:
        "Re-audit proves whether the system actually changed. Without re-audit, recommendations remain aspirational. Closing the loop means feeding the result back to staff, governance and where appropriate the patient or family.",
      keyPoints: [
        "RE-AUDIT SHOULD ASK: did compliance improve, did incidents reduce, did documentation improve, did staff understand the new process, did patient/family experience improve, are changes sustainable, did we create new problems?",
        "EXAMPLES: re-audit observation charts after ligature near-miss; re-audit lithium monitoring after toxicity; re-audit seclusion documentation after restraint injury; re-audit discharge summaries after post-discharge death; re-audit handover after wrong-patient medication error.",
        "CLOSING THE LOOP MEANS: feedback to staff, feedback to patient/family where appropriate, governance committee review, action plan completed, repeat measurement, ongoing monitoring.",
        "Re-audit is the difference between governance that improves safety and governance that produces paperwork.",
      ],
      commonTrap:
        "Writing recommendations but never checking if they were implemented — incomplete governance loop.",
    },
    {
      id: "s14",
      order: 14,
      title: "Inpatient Suicide or Near-Miss",
      colorTag: "red",
      explanation:
        "Inpatient suicide or near-miss is one of the most serious governance events in psychiatry. The review must examine both clinical decision-making and system factors — not only whether the patient denied suicidal ideation.",
      keyPoints: [
        "EXAMPLES: hanging or ligature attempt, overdose with ward medication, jumping attempt, self-strangulation, severe cutting, concealed means.",
        "IMMEDIATE RESPONSE: emergency medical care, remove means, increase observation, reassess mental state and legal status, notify consultant/NUM/clinical director, preserve scene/items if serious, support witnesses, inform family as appropriate, complete incident report, consider open disclosure, trigger RCA or M&M.",
        "REVIEW SHOULD EXAMINE: risk formulation, observation level, room and environment, belongings search, ligature audit, leave status, medication access, staffing, handover, patient engagement, escalation when risk changed.",
        "Key governance signal: Was the environment ligature-safe? Was observation adequate? Was known risk communicated across handover? These are system questions, not personal blame questions.",
      ],
      commonTrap:
        "Focusing only on whether the patient denied suicidal ideation before the event — ignoring environment, observation, handover and system factors.",
    },
    {
      id: "s15",
      order: 15,
      title: "Ligature Event",
      colorTag: "red",
      explanation:
        "A ligature event requires both an urgent clinical response and an environmental governance response. The physical environment is a clinical governance responsibility.",
      keyPoints: [
        "IMMEDIATE RESPONSE: remove ligature safely, arrange medical assessment for airway or neck injury, assess consciousness and neurological signs, review mental state and suicide intent, remove potential ligature points/items, review observation level, document object/location/time, complete incident report.",
        "SYSTEM REVIEW: environmental ligature audit, room allocation, observation quality, staff response time, whether known risk was communicated, whether policy was followed.",
        "A ligature event always requires an environmental audit — not only review of the patient's clinical risk.",
        "Ligature-safe environments are a governance responsibility, not only a facilities management task.",
      ],
      meqApplication:
        "Mention both clinical care and environmental safety review — examiners look for both streams.",
      commonTrap:
        "Treating ligature event only as a patient-risk issue and missing environmental governance.",
    },
    {
      id: "s16",
      order: 16,
      title: "Absconding",
      colorTag: "amber",
      explanation:
        "An absconding event requires immediate risk-stratified action. For involuntary patients with serious suicide, violence or vulnerability risk, waiting passively for return is not acceptable.",
      keyPoints: [
        "IMMEDIATE RESPONSE: determine legal status and risk, search ward and hospital grounds, notify senior nurse and consultant, contact family/carer if appropriate, contact police if serious risk or legal requirement, document time last seen/clothing/risk/likely destination, update risk plan on return.",
        "REVIEW: observation or leave status, door/security procedures, patient triggers, staffing, handover, escalation before absconding, whether return plan was clear.",
        "Risk stratification drives urgency: involuntary patient with active suicide risk requires police notification and active search; voluntary patient with low risk may require monitoring and a return plan.",
      ],
      commonTrap:
        "Waiting passively for the patient to return when there is serious suicide, violence or vulnerability risk.",
    },
    {
      id: "s17",
      order: 17,
      title: "Assault on Ward",
      colorTag: "red",
      explanation:
        "Assault on a ward requires managing three simultaneous streams: the alleged perpetrator, the victim, and the ward environment. All three are governance responsibilities.",
      keyPoints: [
        "IMMEDIATE RESPONSE: separate people, treat injuries, assess victim and alleged perpetrator, ensure staff and patient safety, consider security or police, notify treating consultants, preserve evidence, complete incident report, support witnesses.",
        "REVIEW: antecedents, missed warning signs, staffing, de-escalation attempts, observation, ward mix, substance use, environmental triggers, trauma/cultural issues, whether restrictive practice was used appropriately.",
        "The victim, the alleged perpetrator and the witnesses all need individual clinical responses — not just management of the person who caused the assault.",
      ],
      commonTrap:
        "Only managing the perpetrator and forgetting the victim, witnesses and ward safety environment.",
    },
    {
      id: "s18",
      order: 18,
      title: "Medication Error, Wrong Patient or Wrong Medication",
      colorTag: "red",
      explanation:
        "Medication errors require immediate medical assessment, pharmacy involvement, incident reporting, open disclosure if harm occurred, and a system review covering prescribing, dispensing and administration — not just correction of the error.",
      keyPoints: [
        "IMMEDIATE RESPONSE: assess patient medically, identify medication/dose/route/time, contact pharmacy/toxicology/medical team if required, monitor vitals and investigations, stop or withhold further doses if needed, inform consultant and pharmacy, preserve medication chart or eMAR, complete incident report, consider open disclosure if harm or potential harm.",
        "REVIEW: prescribing, dispensing, administration, patient identification, handover, verbal orders, allergy alerts, high-risk medication policy, pharmacy staffing, eMAR design.",
        "HIGH-YIELD MEDICATIONS in psychiatry MEQs: lithium, clozapine, valproate, benzodiazepines, high-dose antipsychotics, depot medication.",
        "Medication error review must cover the whole chain — prescriber, pharmacist, nurse, system design — not only the person who administered the dose.",
      ],
      commonTrap:
        "Only correcting the medication and missing monitoring, disclosure, pharmacy review and system fix.",
    },
    {
      id: "s19",
      order: 19,
      title: "Missed Observation or Delayed Review",
      colorTag: "amber",
      explanation:
        "Missed observations and delayed reviews are frequent MEQ scenarios. Both require an immediate clinical response and a governance response examining why the gap occurred.",
      keyPoints: [
        "MISSED OBSERVATION — IMMEDIATE: check patient safety now, review risk, reinstate appropriate observation level, notify consultant and NUM, document gap honestly, complete incident report if harm or significant near miss.",
        "MISSED OBSERVATION — REVIEW: why was observation missed, staffing, acuity, handover, policy clarity, observation documentation, staff training, consultant sign-off process for reducing observations.",
        "DELAYED REVIEW — IMMEDIATE: review patient now, manage any harm, apologise for delay if appropriate, notify senior staff if serious, document timeline.",
        "DELAYED REVIEW — REVIEW: triage process, escalation rules, registrar workload, consultant availability, ED/ward communication, handover, after-hours cover.",
      ],
      commonTrap:
        "Saying 'review completed now' and ignoring why the delay occurred — the system that allowed the delay is the governance problem.",
    },
    {
      id: "s20",
      order: 20,
      title: "Failure of Handover",
      colorTag: "amber",
      explanation:
        "Handover failure is a patient safety event, not an administrative inconvenience. Critical information lost at handover creates discontinuity of risk management that can result in serious harm.",
      keyPoints: [
        "IMMEDIATE RESPONSE: clarify current treating responsibility, review patient risk now, correct missing plan, inform receiving team/GP/family if needed, document new plan.",
        "REVIEW: handover template, discharge summary, high-risk flags, verbal and written handover process, responsibility for follow-up, missed test results, cross-cover arrangements, consultant responsibility.",
        "EXAMPLES: GP not told lithium monitoring needed, community team not informed of suicide risk, registrar not told patient was on constant observation, wrong team assumes another team is responsible.",
        "Handover failure is often the final link in a chain of system failures — the review should map the whole chain, not only the person who received the handover.",
      ],
      commonTrap:
        "Treating handover failure as an administrative problem rather than a patient safety event requiring governance review.",
    },
    {
      id: "s21",
      order: 21,
      title: "Death After Discharge",
      colorTag: "red",
      explanation:
        "Death after discharge is a high-level governance event. It requires family support, staff support, record preservation, incident review, possible coroner involvement, M&M or RCA, and system action — not only a review of the discharge decision.",
      keyPoints: [
        "IMMEDIATE RESPONSE: confirm facts sensitively, inform clinical director and service manager, support family, support staff, preserve records, notify coroner or police according to local policy, complete incident report, seek medicolegal advice, plan team debrief.",
        "REVIEW: discharge decision, risk formulation, family/carer involvement, medication supply, follow-up timing, missed appointments, GP handover, safety plan quality, bed pressure contribution, documentation.",
        "Key governance questions: Was the discharge decision defensible? Was the follow-up timely? Was the safety plan specific? Was the GP briefed? Was family involved? Was bed pressure a factor?",
        "Death after discharge may trigger a mandatory notification, coroner's inquiry, or Ahpra investigation — medicolegal advice should be sought early.",
      ],
      meqApplication:
        "This is a high-level governance event. Mention family support, open disclosure, staff support, record preservation, incident review, possible coroner, M&M or RCA and system action alongside clinical review.",
      commonTrap:
        "Jumping straight to defending the discharge decision rather than managing family, staff, records and governance first.",
    },
    {
      id: "s22",
      order: 22,
      title: "Restraint or Seclusion Injury",
      colorTag: "red",
      explanation:
        "Restraint and seclusion injury requires a clinical response, a governance response and a service-improvement response. Justifying restraint because the ward was busy or understaffed is never an acceptable answer.",
      keyPoints: [
        "IMMEDIATE RESPONSE: stop restrictive practice as soon as safe, arrange medical assessment for injury, review mental state and triggers, inform senior staff, complete incident report, debrief patient and staff, consider complaint or open disclosure if harm occurred.",
        "REVIEW: was it last resort, were alternatives attempted, was legal and policy process followed, was monitoring adequate, were staff trained, was trauma-informed care used, was restraint prolonged unnecessarily, was there environmental or staffing contribution?",
        "SERVICE IMPROVEMENT: de-escalation training, restrictive-practice audit, post-incident debrief process, trauma-informed care, environmental changes, consumer/carer feedback, governance review.",
        "Seclusion and restraint are high-scrutiny interventions — every incident triggers mandatory reporting requirements in most Australian and New Zealand jurisdictions.",
      ],
      commonTrap:
        "Justifying restraint or seclusion because the ward was busy or understaffed — this is not a defence, it is a system failure requiring governance action.",
    },
    {
      id: "s23",
      order: 23,
      title: "Child-Safety Failure",
      colorTag: "red",
      explanation:
        "Child safety failures in psychiatry occur when the parenting risk of a patient is not adequately assessed, communicated or managed. They require immediate child safety action and a governance response — they are not family matters.",
      keyPoints: [
        "EXAMPLES: psychotic or manic parent removed child from school, unsafe discharge to home with children, child exposed to violence or overdose, mother with postpartum psychosis attempts to remove infant, adolescent discharged without safeguarding plan.",
        "IMMEDIATE RESPONSE: ensure child safety now, clarify who has care of children, consider child protection advice or notification, review patient's mental state and parenting risk, involve family/carer where safe, document confidentiality and information-sharing decisions, update discharge/contact plan.",
        "REVIEW: was child risk identified, was collateral obtained, was family included appropriately, were child protection thresholds considered, was school or daycare informed where necessary, was there a clear parenting/contact restriction plan?",
        "Child safety is a mandatory reporting area in all Australian and New Zealand jurisdictions — when in doubt, consult child protection services. Consultation is not the same as notification.",
      ],
      commonTrap:
        "Treating child safety as a family issue rather than a clinical governance and safeguarding issue with mandatory reporting obligations.",
    },
    {
      id: "s24",
      order: 24,
      title: "MEQ-Ready Response Structure",
      colorTag: "blue",
      explanation:
        "When asked 'How would you respond to this incident/adverse event/near miss?' use this eight-domain structure. Candidates who address all eight domains consistently pass; candidates who stop at clinical review do not.",
      keyPoints: [
        "1. IMMEDIATE SAFETY: review and treat affected patient, protect other patients/children/staff/public, increase observation or containment if needed, review legal status/leave/access to means, arrange physical examination if injury/overdose/restraint/ligature.",
        "2. COMMUNICATION AND SUPPORT: inform senior staff, support patient, support family/carer, support staff and registrar, offer debrief, consider advocate/interpreter/cultural support.",
        "3. NOTIFICATION AND GOVERNANCE: complete incident report, escalate to clinical director/risk/governance, notify pharmacy/privacy/child protection/police/coroner/legal as relevant, seek medicolegal or indemnity advice if serious.",
        "4. OPEN DISCLOSURE: acknowledge harm or distress, provide facts known, avoid speculation, explain review process, arrange follow-up meeting.",
        "5. DOCUMENTATION: factual timeline, current risk assessment, actions taken, people informed, updated plan, preserve records.",
        "6. REVIEW: M&M, case conference or RCA depending on severity — map timeline, identify critical events, identify system contributors, avoid scapegoating.",
        "7. ACTION PLAN: policy or process change, staff education, environmental change, role clarification, handover/observation/medication/discharge checklist.",
        "8. CLOSE THE LOOP: re-audit, feedback to staff, feedback to patient/family where appropriate, monitor outcomes, report to governance committee.",
      ],
      meqApplication:
        "Use these eight domains as answer headings. The examiner wants to see all eight — not just the clinical review in domain 1.",
      commonTrap:
        "Forgetting the final step: re-audit and feedback — a response without closing the loop is incomplete governance.",
    },
    {
      id: "s25",
      order: 25,
      title: "High-Yield Examiner Phrases",
      colorTag: "green",
      explanation:
        "These phrases signal governance thinking. Use them to open or close sections of your MEQ answer — they show the examiner you understand that incidents are both clinical events and system events.",
      keyPoints: [
        "'I would treat this as both an immediate clinical event and a clinical governance event.'",
        "'The first priority is current safety, not assigning blame.'",
        "'I would preserve records and document a factual timeline.'",
        "'I would support the patient, family, other patients and staff affected.'",
        "'If harm occurred, I would consider open disclosure through the appropriate pathway.'",
        "'The review should examine systems, supervision, workload, handover and policy, not only the last person involved.'",
        "'Recommendations should have named owners, timelines and re-audit.'",
        "'A just-culture response supports staff while maintaining accountability.'",
      ],
      commonTrap:
        "Common traps that cost marks: only reassessing the patient and missing governance; only completing an incident form and missing clinical care; blaming the registrar or nurse early; failing to support staff; avoiding open disclosure because of legal fear; giving speculative explanations; retrospectively altering notes; ignoring other patients who witnessed the event; ignoring child or public safety; failing to identify RCA or M&M; recommending education only without system change; failing to re-audit.",
    },
    {
      id: "s26",
      order: 26,
      title: "Consultant-Level Summary",
      colorTag: "green",
      explanation:
        "A consultant should first ensure immediate safety for the patient and others, provide urgent clinical and physical assessment, and update the risk and legal management plan. Senior staff should be notified, incident reporting completed, records preserved and a factual timeline documented. The consultant should support the patient, family, other patients and staff, and consider open disclosure if harm occurred. The incident should be reviewed through M&M, clinical governance or RCA depending on severity, with a just-culture focus on system contributors. The outcome should be a clear action plan with named responsibility, timelines and re-audit to confirm improvement.",
      keyPoints: [
        "IMMEDIATE: safety for all, clinical and physical assessment, risk and legal update, senior notification, records preserved.",
        "SUPPORT: patient, family, other patients, staff, registrar — simultaneous streams, not sequential.",
        "GOVERNANCE: incident report, escalation, open disclosure where indicated, M&M or RCA, just culture.",
        "CLOSE THE LOOP: named action plan, re-audit, feedback — the examiner's last mark is often here.",
      ],
      meqApplication:
        "Close every incident MEQ answer with a re-audit and governance statement. This is consistently where the highest-scoring candidates separate themselves.",
    },
  ],
};

export const CLINICAL_AUDIT: Note = {
  id: "clinical_audit",
  title: "Clinical Audit, Quality Improvement and Change Management in Psychiatry",
  category: "Clinical Governance / Quality Improvement / Leadership",
  description:
    "A consultant-level framework for conducting clinical audits, quality improvement projects and change management in psychiatry, including ECT audit, hypnotic prescribing audit, metabolic monitoring audit, clozapine monitoring, lithium monitoring, discharge-summary audit, seclusion/restraint audit, suicide-risk pathway audit, documentation audit and CAMHS transition audit.",
  sections: [
    {
      id: "s01",
      order: 1,
      title: "Core Principle",
      colorTag: "blue",
      explanation:
        "Clinical audit is not simply collecting data. It is a practice-improvement cycle. The purpose is to answer: 'Are we doing what we should be doing, according to an agreed standard, and if not, how will we change practice and check improvement?'",
      keyPoints: [
        "Audit measures actual practice against an agreed standard — without a standard it becomes opinion.",
        "Audit should lead to practical improvement, not just a report.",
        "Audit is part of clinical governance — it answers whether the system is working.",
        "Audit should not be framed as a disciplinary exercise.",
        "Re-audit is necessary to complete the cycle — data without change is incomplete.",
        "A good audit response has five parts: define the problem, choose standards, measure current practice, implement change, re-audit and report back.",
      ],
      meqApplication:
        "In audit questions, do not only say 'collect data.' Always add standards, baseline measurement, stakeholder engagement, change intervention, re-audit and governance reporting.",
      commonTrap:
        "Doing an audit that collects data but does not change practice — the cycle is incomplete without change and re-audit.",
    },
    {
      id: "s02",
      order: 2,
      title: "Audit as Clinical Governance",
      colorTag: "purple",
      explanation:
        "Clinical governance means the service has systems to maintain and improve safety, reliability and quality of care. Audit is one of the practical tools used to test whether the system is working. Audit is not separate from patient care — it is a way of improving patient safety, communication, consistency and accountability.",
      keyPoints: [
        "GOVERNANCE QUESTIONS AUDIT CAN ANSWER: Are ECT consent forms complete? Are lithium levels checked after discharge? Are clozapine bloods being monitored? Are discharge summaries reaching GPs on time? Are high-risk patients reviewed after missed appointments? Are seclusion episodes documented and reviewed? Are CAMHS-to-adult transitions completed with warm handover?",
        "Audit data feeds governance committees, quality reports and accreditation processes.",
        "Name the safety or governance issue that triggered the audit before describing the audit method — this shows examiners you understand why audit matters.",
        "Audit findings that are not reported to governance have limited impact — the committee provides authority, resources and accountability for change.",
      ],
      meqApplication:
        "Name the safety/governance issue that triggered the audit before describing the audit method — this is a consistent MEQ scoring cue.",
      commonTrap:
        "Treating audit as an academic task rather than a clinical governance tool linked to patient safety and system improvement.",
    },
    {
      id: "s03",
      order: 3,
      title: "Audit Versus Research",
      colorTag: "blue",
      explanation:
        "Audit and research have different purposes, methods and ethical requirements. Confusing them — particularly calling research an audit to avoid ethics review — is both a governance failure and a professional conduct issue.",
      keyPoints: [
        "AUDIT asks: 'Are we meeting an agreed standard?' It measures existing practice, compares against standards/policy/guidelines, uses existing clinical data, aims to improve local care, does not randomise, does not test new treatments, and requires re-audit.",
        "RESEARCH asks: 'What is the best practice or new knowledge?' It tests a hypothesis, aims to generate generalisable knowledge, may involve new interventions or randomisation, requires ethics committee review, informed consent, and considers publication/authorship/data governance.",
        "AUDIT EXAMPLES: audit whether lithium levels are documented before discharge; audit whether ECT consent and cognitive screening were completed; audit whether discharge summaries were sent within 48 hours; audit whether metabolic monitoring occurred for patients on antipsychotics.",
        "RESEARCH EXAMPLES: trialling a new psychological intervention, comparing two medication strategies prospectively, testing a new model of care to generate generalisable evidence.",
      ],
      commonTrap:
        "Calling research an audit to avoid ethics review — this is a governance and professional conduct failure, not just a technicality.",
    },
    {
      id: "s04",
      order: 4,
      title: "Choosing an Audit Topic",
      colorTag: "green",
      explanation:
        "Good audit topics are chosen because they matter, not because they are easy. Topics should be clinically important, high risk, common, measurable, linked to standards, and likely to improve patient outcomes.",
      keyPoints: [
        "CHOOSE TOPICS THAT ARE: clinically important, high risk, common, measurable, linked to standards, likely to improve patient outcomes, feasible to change, relevant to complaints or incidents, and important to patients/carers/staff.",
        "HIGH-YIELD PSYCHIATRY AUDIT TOPICS: ECT audit, hypnotic/benzodiazepine prescribing audit, metabolic monitoring audit, clozapine monitoring audit, lithium monitoring audit, discharge-summary audit, seclusion/restraint audit, suicide-risk pathway audit, documentation audit, CAMHS transition audit.",
        "If the stem includes a complaint, near miss, medication error, poor handover or inconsistent practice — frame the audit as a response to a patient-safety concern. This signals governance thinking.",
        "The best audit topic is often identified by a pattern in incident reports, complaints, accreditation findings or clinical observation — not by convenience.",
      ],
      meqApplication:
        "If the stem includes a complaint, near miss, medication error, poor handover or inconsistent practice, frame the audit as a response to a patient-safety concern.",
      commonTrap:
        "Choosing an audit topic without explaining why it matters for safety or quality — examiners expect a clear rationale.",
    },
    {
      id: "s05",
      order: 5,
      title: "Choosing Standards",
      colorTag: "purple",
      explanation:
        "Audit needs a standard. Without a standard, it becomes opinion. Standards provide the benchmark against which current practice is measured.",
      keyPoints: [
        "STANDARDS MAY COME FROM: local hospital policy, state mental health policy, NSQHS standards, RANZCP guidelines or position statements, medication safety guidelines, ECT standards, clozapine protocols, Mental Health Act requirements, national safety alerts, accreditation standards, accepted professional guidelines, service-level KPIs.",
        "ECT STANDARDS: consent/capacity documented before treatment, cognitive baseline documented, cognitive monitoring repeated during course, anaesthetic assessment completed, ECT prescription documented, treatment response reviewed, adverse effects documented and acted on.",
        "DISCHARGE SUMMARY STANDARDS: summary sent within required timeframe, medication changes explained, monitoring plan documented, follow-up appointment documented, crisis plan included, GP responsibility clearly stated.",
        "SECLUSION/RESTRAINT STANDARDS: last resort, alternatives attempted, legal criteria documented, medical review completed, observations documented, debrief completed, governance review completed.",
      ],
      commonTrap:
        "Auditing whether 'care was good' without measurable standards — vague criteria cannot be reliably measured or compared over time.",
    },
    {
      id: "s06",
      order: 6,
      title: "Baseline Data",
      colorTag: "blue",
      explanation:
        "Baseline data shows what is currently happening before change. It answers: how big is the problem, where is the gap, which patients are affected, and what is the starting point for improvement?",
      keyPoints: [
        "DATA SOURCES: EMR notes, medication charts, ECT register, clozapine register, incident reports, complaints, discharge summaries, GP feedback, consumer feedback, carer feedback, pharmacy records, ward observation charts, seclusion/restraint register, pathology results, referral/triage database, appointment attendance data.",
        "CHECK DATA QUALITY: sample size, timeframe, inclusion and exclusion criteria, missing data, reliability of data, need for manual review.",
        "EQUITY LENS: check whether consumer/carer experience is captured; check whether Aboriginal, CALD, older adult or youth subgroups are affected differently.",
        "Baseline data establishes the 'before' — without it, re-audit cannot demonstrate whether change occurred.",
      ],
      commonTrap:
        "Collecting easy data rather than the data that answers the safety question — convenience should not drive data selection.",
    },
    {
      id: "s07",
      order: 7,
      title: "Audit Criteria",
      colorTag: "green",
      explanation:
        "Audit criteria should be clear, measurable and linked to the standard. Weak criteria cannot be reliably assessed or compared. Strong criteria define who, what, when, and to what standard.",
      keyPoints: [
        "WEAK CRITERION: 'Good documentation.' — cannot be measured reliably.",
        "STRONG CRITERION: 'In 90% of discharges, the discharge summary includes medication changes, rationale, monitoring plan, follow-up date and crisis contact.'",
        "GOOD CRITERIA HAVE: defined population, measurable item, timeframe, expected standard (target), data source, responsible reviewer.",
        "LITHIUM AUDIT CRITERIA: lithium level documented within appropriate timeframe before discharge, renal function documented, thyroid function documented, calcium documented, next blood-test date documented, GP informed of monitoring responsibility, toxicity warning documented.",
        "CAMHS TRANSITION CRITERIA: transition meeting occurred before transfer, young person attended joint appointment, risk plan transferred, medication plan transferred, GP informed, adult follow-up occurred within agreed timeframe, non-attendance plan documented.",
      ],
      commonTrap:
        "Making criteria too vague to measure — if two reviewers looking at the same chart would disagree, the criterion is not strong enough.",
    },
    {
      id: "s08",
      order: 8,
      title: "Stakeholder Engagement",
      colorTag: "teal",
      explanation:
        "Audit fails when it is imposed on people. Engaging stakeholders before data collection builds trust, improves data quality, increases acceptance of findings and makes change more likely.",
      keyPoints: [
        "STAKEHOLDERS MAY INCLUDE: psychiatrists, registrars, nurses, psychologists, social workers, occupational therapists, pharmacists, anaesthetists (for ECT), GPs, NGOs, peer workers, consumers, carers, Aboriginal or cultural liaison workers, quality/governance staff, data analysts, service managers.",
        "WHY ENGAGEMENT MATTERS: people support change when they understand why the audit matters, how data will be used, that it is not a witch-hunt, what standard is being applied, how results will be fed back, and how they can shape the improvement plan.",
        "USEFUL PHRASES: 'This is a patient-safety and quality-improvement project.' / 'We are auditing the system, not hunting for individual blame.' / 'We will agree the criteria before data collection.' / 'Feedback will be aggregated unless there is an immediate safety concern.'",
        "Engaging stakeholders early also surfaces workflow barriers — information that is critical for designing realistic change interventions.",
      ],
      commonTrap:
        "Announcing an audit without involving the staff who need to change practice — this is a reliable way to produce resistance and incomplete data.",
    },
    {
      id: "s09",
      order: 9,
      title: "Consumer and Carer Involvement",
      colorTag: "teal",
      explanation:
        "Consumers and carers should not be added only at the end. They can identify what matters to patients, whether information was understandable, whether consent felt meaningful, whether discharge felt safe, and whether the service response was respectful.",
      keyPoints: [
        "ECT AUDIT: consumer input may identify poor explanation of memory risk, anxiety about anaesthetic process, lack of family involvement, stigma or unclear expected number of treatments.",
        "DISCHARGE AUDIT: consumer/carer input may identify that the plan was not understood, crisis number was unclear, GP did not receive summary, carer did not know relapse signs, or medication side effects were not explained.",
        "CAMHS TRANSITION AUDIT: young people may identify that the adult service felt intimidating, family involvement changed abruptly, appointment location was inaccessible, or confidentiality was poorly explained.",
        "Consumer involvement should shape audit criteria, not just validate findings — include patient experience measures from the design stage.",
      ],
      meqApplication:
        "Mention consumer/carer involvement when audit affects consent, communication, experience, safety planning or discharge — examiners look for this across governance answers.",
      commonTrap:
        "Using consumer involvement as tokenism rather than incorporating feedback into audit criteria and change design.",
    },
    {
      id: "s10",
      order: 10,
      title: "Audit Cycle",
      colorTag: "green",
      explanation:
        "Use a five-stage audit cycle. Stopping after stage 3 (measurement) and never implementing change is the most common audit failure in clinical practice and in MEQ answers.",
      keyPoints: [
        "STAGE 1 — PREPARE: clarify problem, purpose, standard, stakeholders, sample, data source, governance approval, resources, timeline, privacy/confidentiality, and who will do the work.",
        "STAGE 2 — SELECT CRITERIA: choose measurable indicators, target compliance, standards, inclusion/exclusion criteria, and data collection tool.",
        "STAGE 3 — MEASURE PERFORMANCE: collect baseline data, quantitative results, qualitative feedback if relevant, subgroup differences, and variation between units/teams if relevant.",
        "STAGE 4 — MAKE IMPROVEMENTS: develop education, prompts/templates, workflow redesign, checklist, policy update, role clarification, consumer information, supervision process, electronic alerts.",
        "STAGE 5 — SUSTAIN IMPROVEMENTS: use re-audit, dashboard, governance reporting, induction, regular feedback, policy embedding and accountability.",
      ],
      commonTrap:
        "Stopping after stage 3 and never implementing change — measurement without action is not clinical governance.",
    },
    {
      id: "s11",
      order: 11,
      title: "PDSA / PDCA Cycle",
      colorTag: "green",
      explanation:
        "PDSA (Plan, Do, Study, Act) or PDCA (Plan, Do, Check, Act) prevents large, untested changes being imposed across a service. It tests change on a small scale first, reviews the result, and then expands or adjusts.",
      keyPoints: [
        "PLAN: define the problem and intervention. Example: discharge summaries often omit lithium monitoring — plan to add a lithium-monitoring prompt to the discharge template.",
        "DO: test on a small scale. Example: use the prompt for 10 lithium discharges over one month.",
        "STUDY / CHECK: check what happened. Example: did summaries include lithium level, renal function, thyroid function, next blood-test date and responsible clinician?",
        "ACT: decide next step. Example: modify prompt, educate registrars, expand across the service and re-audit in three months.",
        "PDSA helps engage staff because changes can be tried, reviewed and improved — it is less threatening than a whole-service mandate.",
      ],
      commonTrap:
        "Trying to change the whole service at once without testing the process — large untested changes are harder to embed and easier to resist.",
    },
    {
      id: "s12",
      order: 12,
      title: "Feedback Without Blame",
      colorTag: "amber",
      explanation:
        "Feedback is central to audit, but feedback presented punitively creates resistance, defensiveness, poor documentation and disengagement. Good feedback is factual, system-focused and leads to practical support.",
      keyPoints: [
        "GOOD FEEDBACK IS: timely, uses agreed standards, factual, focused on systems, anonymised where possible, explains clinical significance, includes examples of good practice, asks staff what barriers exist, and leads to practical support.",
        "FEEDBACK STRUCTURE: (1) why we audited, (2) what standard we used, (3) what data we reviewed, (4) what we found, (5) what this means for patient care, (6) what staff think the barriers are, (7) what we will change, (8) when we will re-audit.",
        "AVOID: naming and shaming, 'gotcha' audit, blaming registrars, blaming nurses, blaming admin, presenting unexplained variation as incompetence, ignoring workload barriers.",
        "Feedback that feels punitive reliably produces defensive documentation, incomplete data in the next audit cycle, and disengagement from quality improvement.",
      ],
      commonTrap:
        "Using audit findings to embarrass staff rather than improve care — this destroys the psychological safety needed for honest audit data.",
    },
    {
      id: "s13",
      order: 13,
      title: "Implementing Change",
      colorTag: "green",
      explanation:
        "Audit only matters if it leads to change. Change can occur at individual, team, system and consumer levels. Implementation should address workflow barriers, not simply tell staff to do better.",
      keyPoints: [
        "INDIVIDUAL LEVEL: feedback, supervision, prescribing review, documentation education, peer review, reflective practice.",
        "TEAM LEVEL: MDT workflow change, nursing-medical handover template, shared checklist, pharmacist involvement, team education, case conference process.",
        "SYSTEM LEVEL: EMR prompt, policy update, high-risk medication register, governance dashboard, escalation pathway, mandatory checklist, new referral or triage process, resource allocation.",
        "CONSUMER LEVEL: patient information sheet, shared care plan, carer education, feedback process, culturally adapted information.",
      ],
      commonTrap:
        "Recommending only education when the real barrier is workflow, staffing, unclear roles or poor EMR design — education alone rarely sustains change.",
    },
    {
      id: "s14",
      order: 14,
      title: "Managing Resistant Senior Doctors",
      colorTag: "amber",
      explanation:
        "Senior doctors may resist audit because of fear of loss of autonomy, reputational concerns, extra workload or concern that standards are invalid. The approach requires respect, early involvement, fair process and — if necessary — governance escalation.",
      keyPoints: [
        "REASONS FOR RESISTANCE: fear of loss of autonomy, fear of criticism, fear of litigation, reputational concerns, extra workload, bureaucratic burden, concern standards are invalid, loss of professional ownership.",
        "START WITH RESPECT: frame as 'We need to check whether our system reliably meets agreed safety standards' — not 'You are doing unsafe practice.'",
        "INVOLVE THEM EARLY: ask senior doctors to help choose standards, refine criteria, identify meaningful data, interpret findings, design improvements and act as champions.",
        "PROTECT FAIRNESS: use agreed standards, present aggregated data initially, anonymise clinician-level data unless safety requires otherwise, adjust for case mix, offer right of reply, avoid public blame.",
        "ESCALATE IF NEEDED: if resistance blocks necessary safety improvement, involve clinical director, report through governance committee, set minimum safety standards, use policy mandates and monitor compliance.",
      ],
      commonTrap:
        "Either avoiding senior resistance completely (and the safety gap persists) or confronting it aggressively without engagement (and resistance escalates).",
    },
    {
      id: "s15",
      order: 15,
      title: "Change Management Principles",
      colorTag: "blue",
      explanation:
        "Audit tells you the gap. Change management closes it. Effective change requires a shared reason for change, a coalition of supporters, removal of barriers, and making the desired behaviour easy.",
      keyPoints: [
        "CREATE A SHARED REASON FOR CHANGE: memory complaints after ECT, lithium toxicity after discharge, repeated missed clozapine bloods, seclusion injuries, GP complaints about discharge summaries, young people lost during CAMHS transition.",
        "BUILD A COALITION: consultant champion, nursing lead, registrar representative, pharmacist, admin/data person, consumer/carer representative, quality manager, service manager.",
        "REMOVE BARRIERS: too many forms, EMR hard to use, no time for documentation, unclear ownership, no pharmacist support, no clinic slot for monitoring, no GP communication pathway.",
        "MAKE THE DESIRED BEHAVIOUR EASY: one-page template, auto-populated discharge summary, lithium prompt, ECT checklist, standard clinic pathway, shared-care protocol.",
        "MEASURE AND FEED BACK: use monthly dashboard, spot audit, re-audit, team feedback and governance report to maintain momentum.",
      ],
      commonTrap:
        "Creating a policy that looks good but is too hard for staff to use — implementation must remove barriers, not add steps.",
    },
    {
      id: "s16",
      order: 16,
      title: "Reporting to Governance Committee",
      colorTag: "purple",
      explanation:
        "Audit findings should go somewhere. Keeping findings within a small group limits impact and removes the authority, resources and accountability that governance committees provide.",
      keyPoints: [
        "REPORT TO: clinical governance committee, quality and safety committee, M&M meeting, ECT committee, medicines committee, seclusion/restraint reduction committee, CAMHS/adult transition governance group, or executive/service director if high risk.",
        "REPORT SHOULD INCLUDE: audit aim, standard used, sample and timeframe, data source, baseline compliance, key gaps, patient safety implications, stakeholder feedback, action plan, responsible owners, timeline, re-audit date, unresolved barriers requiring executive support.",
        "GOOD GOVERNANCE REPORT LANGUAGE: 'The audit identified a latent safety risk: high-risk medication monitoring was not reliably documented at discharge. The proposed response is a discharge-template prompt, pharmacist review for lithium/clozapine discharges, registrar education, GP shared-care letter and re-audit in three months.'",
        "Governance reporting creates accountability — named owners and timelines reported to a committee are far more likely to be acted on than informal agreements.",
      ],
      commonTrap:
        "Keeping audit findings within a small group and not reporting to the governance structure that can support, resource and mandate change.",
    },
    {
      id: "s17",
      order: 17,
      title: "Re-Audit",
      colorTag: "green",
      explanation:
        "Re-audit is not optional. Without re-audit, the audit cycle is incomplete. Re-audit proves whether the change actually worked, sustained, and did not create new problems.",
      keyPoints: [
        "RE-AUDIT ANSWERS: did compliance improve, did the change work, did staff use the new process, did patient outcomes improve, did unintended consequences occur, should the change be standardised/revised/abandoned?",
        "LITHIUM AUDIT AFTER 3 MONTHS: percentage of discharge summaries with next lithium level date, percentage with named clinician reviewing results, percentage with renal/thyroid/calcium documented, GP satisfaction.",
        "ECT AUDIT AFTER NEW CHECKLIST: percentage completed consent/capacity forms, percentage cognitive monitoring documented, percentage memory complaints pathway used, consumer experience feedback.",
        "CAMHS TRANSITION AUDIT AFTER PROTOCOL: percentage joint transition meetings, percentage adult appointments attended, percentage GP handover completed, percentage non-attendance followed up.",
      ],
      commonTrap:
        "Assuming the change worked without measuring it — implementation without re-audit is an incomplete governance cycle.",
    },
    {
      id: "s18",
      order: 18,
      title: "Barriers to Audit and Change",
      colorTag: "amber",
      explanation:
        "Common barriers are predictable. A good governance response identifies them in advance and proposes specific strategies — not just 'we will try harder.'",
      keyPoints: [
        "COMMON BARRIERS: lack of time, no data support, poor EMR access, unclear standards, too many competing priorities, defensive senior clinicians, junior staff turnover, no consumer involvement, poor leadership, fear of blame, audit fatigue, change fatigue, no resources, no re-audit.",
        "LACK OF TIME: choose focused audit, use small sample, involve quality team, delegate data collection, use existing registers.",
        "RESISTANCE: involve clinicians early, agree standards, anonymise initial feedback, emphasise patient safety, avoid blame.",
        "POOR DATA: improve documentation template, use manual review if needed, define data fields clearly, pilot data collection tool.",
        "NO RESOURCES: escalate to governance, prioritise high-risk areas, propose staged implementation, use cost/risk/benefit argument.",
        "CHANGE FATIGUE: choose one or two high-impact changes, stop low-value processes, show early wins, thank staff.",
      ],
      commonTrap:
        "Identifying barriers but not proposing how to overcome them — MEQ answers must include both problem and solution.",
    },
    {
      id: "s19",
      order: 19,
      title: "ECT Audit Template",
      colorTag: "red",
      explanation:
        "ECT is a high-risk, high-scrutiny intervention. An ECT audit must cover consent, cognitive monitoring, adverse effects, communication and consumer experience — not only whether the procedure was performed.",
      keyPoints: [
        "AIM: to assess whether ECT practice meets safety, consent, cognitive monitoring and communication standards.",
        "STANDARDS: consent and capacity documented, legal authority documented if applicable, anaesthetic review completed, baseline cognition documented, treatment parameters recorded, adverse effects monitored, post-course communication completed.",
        "DATA SOURCES: ECT register, medical record, consent forms, anaesthetic notes, cognitive screening, incident or complaint data, consumer feedback.",
        "STAKEHOLDERS: ECT psychiatrists, ECT nurse, anaesthetist, inpatient team, consumers and carers, governance.",
        "POSSIBLE INTERVENTIONS: ECT checklist, cognitive monitoring pathway, memory complaint pathway, consumer information sheet, team training, re-audit.",
      ],
      commonTrap:
        "Auditing only consent forms and ignoring cognition, adverse effects, communication and consumer experience.",
    },
    {
      id: "s20",
      order: 20,
      title: "Hypnotic Prescribing Audit Template",
      colorTag: "amber",
      explanation:
        "Hypnotic and benzodiazepine prescribing is a common safety concern in inpatient psychiatry. Audit must cover indication, duration, alternatives offered, and discharge continuation — not only whether a drug was prescribed.",
      keyPoints: [
        "AIM: to reduce inappropriate benzodiazepine or hypnotic prescribing.",
        "STANDARDS: indication documented, short-term use only unless justified, review date documented, non-pharmacological sleep strategies offered, older adult/falls risk considered, discharge continuation reviewed, driving and sedation warnings provided where relevant.",
        "DATA SOURCES: medication charts, discharge summaries, incident or falls data, pharmacy reports.",
        "POSSIBLE INTERVENTIONS: sleep protocol, PRN review in ward round, stop dates, pharmacist alerts, patient sleep hygiene sheet, re-audit prescribing.",
      ],
      commonTrap:
        "Reducing prescribing without offering sleep alternatives or managing withdrawal and dependence risk.",
    },
    {
      id: "s21",
      order: 21,
      title: "Metabolic Monitoring Audit Template",
      colorTag: "green",
      explanation:
        "Patients on antipsychotics are at high cardiometabolic risk. Metabolic monitoring audit must cover not only whether measurements were taken, but whether abnormal results were acted on and communicated to the GP.",
      keyPoints: [
        "AIM: to assess whether patients on antipsychotics receive appropriate metabolic monitoring and follow-up.",
        "STANDARDS: weight/BMI, waist circumference where used, blood pressure, glucose or HbA1c, lipids, smoking status, lifestyle advice, GP communication, action for abnormal results.",
        "DATA SOURCES: pathology, progress notes, medication chart, GP letters, metabolic clinic data.",
        "POSSIBLE INTERVENTIONS: metabolic monitoring form, nurse-led metabolic clinic, pathology prompts, GP template, pharmacist or nurse reminders, re-audit.",
      ],
      commonTrap:
        "Documenting abnormal metabolic results without assigning responsibility for follow-up — the result is documented but not acted on.",
    },
    {
      id: "s22",
      order: 22,
      title: "Clozapine Monitoring Audit Template",
      colorTag: "red",
      explanation:
        "Clozapine monitoring requires more than FBC checks. A comprehensive audit covers constipation, metabolic monitoring, smoking status, myocarditis risk during initiation, missed-dose risk, and GP communication.",
      keyPoints: [
        "AIM: to assess whether clozapine monitoring and side-effect management are reliable.",
        "STANDARDS: blood monitoring current, bowel chart or constipation assessment, smoking status recorded, metabolic monitoring, myocarditis monitoring during initiation, missed-dose plan, pharmacy handover, GP communication.",
        "POSSIBLE INTERVENTIONS: clozapine checklist, bowel protocol, pharmacy-led monitoring, smoking-status prompt, patient education, re-audit.",
      ],
      commonTrap:
        "Auditing FBC only and missing constipation, smoking status, myocarditis, metabolic monitoring and missed-dose risk — these are the clozapine complications that kill.",
    },
    {
      id: "s23",
      order: 23,
      title: "Lithium Monitoring Audit Template",
      colorTag: "red",
      explanation:
        "Lithium monitoring is especially critical around discharge, when responsibility for monitoring transfers from the inpatient team to the GP. The audit must check that someone specific is named to order and review results.",
      keyPoints: [
        "AIM: to assess whether lithium monitoring and patient education are reliable, especially around discharge.",
        "STANDARDS: serum lithium level documented, renal function documented, thyroid function documented, calcium documented, pregnancy status where relevant, toxicity education documented, interaction warnings documented, GP handover completed, next blood-test date documented, named person responsible for reviewing results.",
        "POSSIBLE INTERVENTIONS: lithium discharge checklist, GP shared-care letter, pathology request before discharge, pharmacist counselling, patient lithium information card, re-audit.",
      ],
      commonTrap:
        "Sending the patient to the GP without specifying who orders and reviews the lithium results — this is how lithium toxicity after discharge occurs.",
    },
    {
      id: "s24",
      order: 24,
      title: "Discharge-Summary Audit Template",
      colorTag: "teal",
      explanation:
        "A discharge summary audit must assess whether the summary contains clinically useful information for safe transfer of care — not merely whether a summary exists.",
      keyPoints: [
        "AIM: to improve safe transfer of care from inpatient unit to GP and community team.",
        "STANDARDS: sent within local timeframe, diagnosis and formulation included, risk plan included, medication changes and rationale included, monitoring instructions included, follow-up appointment included, crisis plan included, named responsible clinician included, family/carer plan included if relevant.",
        "POSSIBLE INTERVENTIONS: discharge summary template, consultant sign-off for high-risk discharges, pharmacist review, GP feedback loop, re-audit.",
      ],
      commonTrap:
        "Auditing whether a summary exists rather than whether it contains clinically useful information — an empty or generic summary is a governance failure.",
    },
    {
      id: "s25",
      order: 25,
      title: "Seclusion/Restraint Audit Template",
      colorTag: "red",
      explanation:
        "Seclusion and restraint audit is a mandatory governance process in most Australian and New Zealand mental health services. It must address culture, documentation, training and consumer experience — not only paperwork compliance.",
      keyPoints: [
        "AIM: to reduce restrictive practice and improve safety documentation.",
        "STANDARDS: last-resort rationale, alternatives attempted, legal criteria, observation and physical monitoring, senior review, debrief, consumer feedback, duration and review frequency.",
        "POSSIBLE INTERVENTIONS: de-escalation training, seclusion review form, post-event debrief, restrictive-practice dashboard, consumer review, re-audit.",
      ],
      commonTrap:
        "Treating seclusion/restraint audit as paperwork rather than culture and safety improvement — compliance with forms does not mean the culture has changed.",
    },
    {
      id: "s26",
      order: 26,
      title: "Suicide-Risk Pathway Audit Template",
      colorTag: "red",
      explanation:
        "A suicide-risk pathway audit must assess whether safety plans are specific and actionable, not merely whether a risk form was completed. A generic or blank safety plan is a safety failure regardless of whether the form exists.",
      keyPoints: [
        "AIM: to assess whether high-risk patients receive reliable risk formulation, safety planning and follow-up.",
        "STANDARDS: risk formulation documented, safety plan completed, means restriction discussed, family/carer involvement considered, follow-up within required timeframe, non-attendance escalation plan, GP/community handover, crisis contacts documented.",
        "POSSIBLE INTERVENTIONS: safety-plan template, post-discharge call within 24–72 hours, missed-appointment pathway, family/carer contact prompt, re-audit.",
      ],
      commonTrap:
        "Auditing whether a risk form was completed rather than whether the plan was specific and actionable.",
    },
    {
      id: "s27",
      order: 27,
      title: "CAMHS Transition Audit Template",
      colorTag: "teal",
      explanation:
        "CAMHS-to-adult transition is a high-risk period for disengagement and clinical deterioration. Transition must be treated as a staged handover, not a referral letter.",
      keyPoints: [
        "AIM: to improve transition from CAMHS to adult or youth services.",
        "STANDARDS: transition planning starts early, joint CAMHS/adult meeting documented, young person consent and confidentiality discussed, family involvement considered, risk plan transferred, medication plan transferred, first adult/youth appointment booked, non-attendance followed up, GP informed.",
        "POSSIBLE INTERVENTIONS: transition checklist, joint CAMHS/adult clinic, transition coordinator, young person information sheet, family meeting, re-audit.",
      ],
      commonTrap:
        "Treating transition as a referral letter rather than a staged handover — a referral letter does not ensure the young person actually attends or that risk information is transferred.",
    },
    {
      id: "s28",
      order: 28,
      title: "MEQ-Ready Answer Structure",
      colorTag: "blue",
      explanation:
        "When asked 'How would you conduct an audit or quality improvement project?' use this ten-domain structure. Candidates who describe data collection only and not the change process do not pass governance MEQ stems.",
      keyPoints: [
        "1. CLARIFY PURPOSE: what problem triggered the audit — patient safety, complaint, incident, accreditation, variation in care or service improvement?",
        "2. DEFINE SCOPE: which patients, timeframe, setting, pathway, data sources?",
        "3. CHOOSE STANDARDS: local policy, RANZCP/state guidance, NSQHS standards, medication/ECT/seclusion/clozapine policy, legal requirements.",
        "4. ENGAGE STAKEHOLDERS: consultants, nurses, registrars, pharmacists, consumers/carers, GPs/NGOs if relevant, quality/governance team.",
        "5. DEFINE CRITERIA: specific, measurable, linked to standards, relevant to patient safety.",
        "6. COLLECT BASELINE DATA: retrospective or prospective, clear sample, data tool, confidentiality/privacy.",
        "7. ANALYSE AND FEEDBACK: present findings, no-blame approach, explain patient-safety relevance, identify barriers.",
        "8. IMPLEMENT CHANGE: template/checklist, education, workflow redesign, policy update, role clarification, EMR prompt.",
        "9. RE-AUDIT: set timeframe, measure same criteria, compare results, adjust plan.",
        "10. REPORT AND SUSTAIN: governance committee, action owners, timeline, dashboard, embed in policy/induction.",
      ],
      meqApplication:
        "Use these ten domains as answer headings. The examiner wants to see all ten — not just data collection and findings.",
      commonTrap:
        "Describing data collection only and not describing the change process — this is the single most common failure in governance MEQ stems.",
    },
    {
      id: "s29",
      order: 29,
      title: "Examiner Phrases",
      colorTag: "green",
      explanation:
        "These phrases signal governance thinking and differentiate high-scoring candidates. Use them to open or close sections of your MEQ answer.",
      keyPoints: [
        "'I would frame this as a clinical governance and patient-safety audit, not a disciplinary exercise.'",
        "'The audit should measure current practice against explicit standards.'",
        "'The audit cycle is incomplete unless findings lead to change and re-audit.'",
        "'Feedback should be no-blame, factual and linked to patient outcomes.'",
        "'Senior clinicians should be engaged early in defining standards and interpreting results.'",
        "'Consumer and carer experience should be included where the process affects consent, communication or care experience.'",
        "'Implementation should address workflow barriers, not simply tell staff to do better.'",
        "'Results should be reported to the clinical governance committee with named actions, owners and timelines.'",
      ],
      commonTrap:
        "Common traps that cost marks: confusing audit with research; collecting data without choosing a standard; auditing too many things at once; ignoring stakeholders; ignoring consumer or carer experience; blaming individuals before understanding workflow; presenting feedback punitively; failing to implement change; failing to re-audit; saying 'educate staff' only; ignoring workload or resource barriers; ignoring resistant senior doctors; failing to report to governance; failing to link audit to patient outcomes.",
    },
    {
      id: "s30",
      order: 30,
      title: "Consultant-Level Summary",
      colorTag: "green",
      explanation:
        "A consultant should design audit as a clinical governance project. The process should define the patient-safety problem, agree explicit standards, collect baseline data, and involve the MDT, consumers and relevant external partners. Results should be fed back in a no-blame manner, practical changes implemented, findings reported to governance with named responsibilities, timelines and a re-audit date. The aim is to confirm that care has improved and that the change is sustained.",
      keyPoints: [
        "DESIGN: patient-safety problem, agreed standards, baseline data, MDT and consumer involvement.",
        "FEEDBACK: no-blame, factual, linked to patient outcomes, barriers identified.",
        "IMPLEMENT: templates, prompts, workflow redesign, training, role clarification, policy update — address barriers, not just intent.",
        "SUSTAIN: governance reporting, named owners, timelines, re-audit to confirm improvement, embed in induction and policy.",
      ],
      meqApplication:
        "Close every audit MEQ answer with a re-audit and governance reporting statement — this is consistently where the highest-scoring candidates separate themselves.",
    },
  ],
};

export const OPEN_DISCLOSURE: Note = {
  id: "open_disclosure",
  title: "Open Disclosure in Psychiatry",
  category: "Clinical Governance / Communication / Patient Safety / Professionalism",
  description:
    "A consultant-level framework for open disclosure in psychiatry after adverse events, harm, potential harm, failed handover, medication error, restraint or seclusion injury, post-discharge suicide, delayed diagnosis, or registrar error.",
  sections: [
    {
      id: "s01",
      order: 1,
      title: "Core Principle",
      colorTag: "blue",
      explanation:
        "Open disclosure is separate from complaints. It is the health service response when healthcare did not go to plan and harm occurred, or may have occurred. It is a structured, transparent and compassionate communication process with the patient, family or carers — not an admission of liability, and not about allocating blame.",
      keyPoints: [
        "Open disclosure is NOT the same as a complaint response — it addresses the adverse event and its consequences, not the concern raised.",
        "Open disclosure is NOT an admission of legal liability — you can acknowledge harm and apologise for distress without making legal admissions.",
        "THE CONSULTANT TASK: ensure the patient is safe now, acknowledge what went wrong, communicate early and honestly, explain what is known and uncertain, listen to the patient/family, offer apology or expression of regret, arrange support, explain further investigation, document accurately, feed findings into governance.",
        "Open disclosure tests transparency, accountability, family communication, staff support and governance maturity — all of which are assessed in final MEQ stems.",
      ],
      meqApplication:
        "In final stems, open disclosure tests transparency, accountability, family communication, staff support and governance maturity. Address all of these — not just the clinical response.",
      commonTrap:
        "Confusing open disclosure with complaint handling, or avoiding disclosure because of medicolegal fear.",
    },
    {
      id: "s02",
      order: 2,
      title: "When Open Disclosure Is Triggered",
      colorTag: "red",
      explanation:
        "Open disclosure should be considered when care did not go to plan and there was actual harm, potential harm, major distress, unexpected escalation of care, significant near miss, loss of trust, serious family concern or an adverse event requiring governance review.",
      keyPoints: [
        "PSYCHIATRY EXAMPLES: medication adverse event, wrong dose or wrong-patient medication, lithium toxicity after poor discharge advice, clozapine monitoring failure, delayed diagnosis or delayed review, seclusion or restraint injury, patient assaulted on ward, ligature event or near miss, post-discharge suicide, failed handover to community team, registrar error causing harm, wrong discharge summary sent to GP, child-safety failure, privacy breach causing distress, failure to inform family after serious incident.",
        "HIGHER-LEVEL RESPONSE usually needed for: death, major harm, significant escalation of care, major psychological or emotional distress, serious family concern, serious complaint or loss of trust.",
        "LOWER-LEVEL RESPONSE may be enough for: no permanent harm, minor distress, near miss, no-harm incident.",
        "Do not wait for a complaint before initiating disclosure — the trigger is the adverse event or potential harm, not the family's response to it.",
      ],
      commonTrap:
        "Thinking open disclosure is only needed after death or severe physical harm — it applies to a broad range of psychiatric adverse events.",
    },
    {
      id: "s03",
      order: 3,
      title: "Open Disclosure Versus Complaint Response",
      colorTag: "purple",
      explanation:
        "Complaint response and open disclosure overlap but are not the same process. In MEQ stems where a family has complained after harm occurred, both processes should be addressed separately.",
      keyPoints: [
        "COMPLAINT RESPONSE answers: what concern was raised, how will the complaint be managed, who will review it, what is the outcome, what if the complainant is dissatisfied?",
        "OPEN DISCLOSURE answers: what happened, what harm occurred or may have occurred, what is known now, what is not yet known, what are we doing for the patient now, what review will happen, how will we prevent recurrence?",
        "KEY PHRASE: 'I would manage the complaint pathway separately from open disclosure: the complaint process addresses the concern raised, while open disclosure addresses the adverse event and its consequences for the patient and family.'",
        "Both processes run concurrently — one does not replace the other.",
      ],
      meqApplication:
        "If the stem says a family has complained after harm occurred, include both the complaint process and open disclosure — describe them as separate but concurrent streams.",
      commonTrap:
        "Saying 'refer to complaints unit' and failing to acknowledge the adverse event and harm — the complaint process does not substitute for open disclosure.",
    },
    {
      id: "s04",
      order: 4,
      title: "Who Should Lead Open Disclosure",
      colorTag: "teal",
      explanation:
        "For serious events, open disclosure should usually be led by the most senior clinician responsible for the patient's care — someone with enough knowledge to acknowledge harm, answer clinical questions and commit to review.",
      keyPoints: [
        "APPROPRIATE LEADS IN PSYCHIATRY: treating consultant, on-call consultant if event occurs after hours, clinical director for serious harm or death, service manager plus consultant for system-level event, nurse unit manager as co-lead if nursing process involved, cultural liaison or consumer liaison support where appropriate.",
        "USUALLY NOT APPROPRIATE TO LEAD ALONE: distressed junior doctor involved in the event, registrar without supervision, staff member accused in the complaint, manager with no clinical knowledge, clinician who does not know the patient and cannot answer clinical questions.",
        "KEY PHRASE: 'The meeting should be led by a senior clinician with knowledge of the event and enough authority to acknowledge harm, answer clinical questions and commit to review.'",
        "The lead clinician does not need to have all the answers — but they must be able to explain what is known, what is unknown, and what will happen next.",
      ],
      commonTrap:
        "Leaving the registrar or most junior person involved to speak to the family alone after a serious adverse event.",
    },
    {
      id: "s05",
      order: 5,
      title: "Preparation Before the First Meeting",
      colorTag: "green",
      explanation:
        "Open disclosure should not be improvised in the corridor. Preparation protects the patient, family and staff — and determines whether the meeting is productive or harmful.",
      keyPoints: [
        "CLARIFY BEFORE THE MEETING: what happened, what is definitely known, what is uncertain, what harm occurred, what is being done clinically now, what the patient or family already know, who should attend.",
        "SUPPORT NEEDS: does the patient need a support person, advocate, interpreter, cultural worker or carer? Does staff need support before the meeting? Is medicolegal or risk advice needed?",
        "REVIEW STATUS: is the incident under RCA, M&M, coroner, police or child protection review? This affects what can be said.",
        "PSYCHIATRY-SPECIFIC PREPARATION: current mental state and capacity, suicide or self-harm risk, family violence or coercive control concerns, confidentiality boundaries, whether disclosure could destabilise the patient, whether the patient wants family or carers present, whether family is bereaved/angry/frightened/blaming, whether staff are traumatised or defensive.",
      ],
      commonTrap:
        "Meeting family before knowing basic facts or before deciding who is allowed to receive information — this can cause additional harm.",
    },
    {
      id: "s06",
      order: 6,
      title: "What to Say Early",
      colorTag: "blue",
      explanation:
        "The early conversation should be clear, honest and limited to known facts. Acknowledge, apologise, explain what is known, state what is uncertain, and describe next steps — in that order.",
      keyPoints: [
        "USEFUL OPENING: 'I am sorry this has happened. I want to explain what we know so far, what we do not yet know, what we are doing now to keep [patient] safe, and how we will review what happened.'",
        "INCLUDE: acknowledgement, apology or expression of regret, factual information known so far, uncertainty, immediate care plan, support available, next review steps, contact person, follow-up meeting.",
        "AVOID: speculation, blaming staff, blaming patient, saying 'nothing went wrong' before review, giving guarantees, discussing confidential details about another patient, making legal admissions outside advice, defensive language.",
        "The first meeting does not need to explain everything — its purpose is to acknowledge, apologise, state what is known, and commit to a follow-up process.",
      ],
      commonTrap:
        "Trying to explain everything in the first meeting before the review has occurred — premature explanation of causation before investigation is both inaccurate and legally risky.",
    },
    {
      id: "s07",
      order: 7,
      title: "Apology or Expression of Regret",
      colorTag: "green",
      explanation:
        "Open disclosure should include a sincere apology or expression of regret. An apology acknowledges harm and distress — it does not require admitting personal negligence or legal liability.",
      keyPoints: [
        "APPROPRIATE WORDING: 'I am sorry this happened.' / 'I am sorry for the distress this has caused.' / 'We are sorry that care did not go as expected.' / 'I am sorry you were not informed earlier.'",
        "IMPORTANT DISTINCTION: you can say 'I am sorry this happened' without saying 'I personally caused this through negligence.' These are different statements.",
        "MEQ PHRASE: 'I would apologise for the harm and distress, while avoiding speculation or premature attribution of blame.'",
        "Avoiding all apology because of medicolegal fear is both clinically inappropriate and counterproductive — families who receive an early apology are less likely to litigate, not more.",
      ],
      meqApplication:
        "Always include an apology or expression of regret in open disclosure MEQ answers — its absence is a consistent mark-losing omission.",
      commonTrap:
        "Avoiding any apology because of fear that it will be treated as admission of liability.",
    },
    {
      id: "s08",
      order: 8,
      title: "Factual Explanation",
      colorTag: "blue",
      explanation:
        "Patients and families want to understand what happened. Factual explanation uses three categories: known facts, unknown facts (still under review), and next steps.",
      keyPoints: [
        "KNOWN FACTS: 'The medication was administered at 21:10.' / 'The lithium level was high when checked in ED.' / 'The discharge summary did not include a next blood-test date.' / 'The outpatient team had not received the handover.'",
        "UNKNOWN FACTS: 'We do not yet know why the handover did not occur.' / 'We need to review the medication chart and staff accounts.' / 'We need to check whether the policy was followed.'",
        "NEXT STEPS: 'This will be reviewed through the incident process.' / 'We will meet again when more information is available.' / 'You will be given a contact person.'",
        "Families typically want answers to: what happened, when, who was involved, what was done immediately, what is being done now, could it happen again, was it preventable, will someone be accountable, what will change.",
      ],
      commonTrap:
        "Speculating about causation or promising that the event was definitely preventable before the review has occurred.",
    },
    {
      id: "s09",
      order: 9,
      title: "Patient and Family Questions",
      colorTag: "teal",
      explanation:
        "A strong consultant does not just deliver information — they invite questions, listen, and remain non-defensive when family expresses anger or distress.",
      keyPoints: [
        "ASK: 'What is your understanding of what happened?' / 'What are your main concerns now?' / 'What questions do you want answered?' / 'Who else would you like involved?' / 'What support do you need today?' / 'What would help rebuild trust?'",
        "IF FAMILY IS ANGRY: acknowledge anger, allow emotion, avoid defensiveness, pause if needed, keep boundaries, offer follow-up. Anger is an expected response to harm — do not treat it as an obstacle.",
        "USEFUL PHRASE WHEN ANGRY: 'I can hear how angry and distressed you are. I cannot answer everything today, but I will explain what we know, what is being reviewed, and when we will meet again.'",
        "IF ASKED 'Was this your fault?': 'We are reviewing exactly what happened. I do not want to speculate before that review is complete. What I can say now is that we are sorry this happened, and we will look carefully at the clinical and system factors.'",
      ],
      commonTrap:
        "Becoming defensive when family expresses anger — defensiveness destroys trust and escalates conflict in open disclosure meetings.",
    },
    {
      id: "s10",
      order: 10,
      title: "Support Person, Advocate, Interpreter and Cultural Support",
      colorTag: "teal",
      explanation:
        "Open disclosure should be patient-centred and accessible. For patients with psychosis, mania, trauma, intellectual disability, youth or older adult cognitive impairment, repeat information and provide written summaries — do not assume the patient understood because the meeting occurred.",
      keyPoints: [
        "OFFER: family or carer involvement if patient consents or if patient is deceased/incapacitated, consumer liaison or patient advocate, interpreter, Aboriginal liaison worker, cultural worker, peer worker, spiritual care, GP or community provider where appropriate, legal or rights advocate if involuntary care context.",
        "MEQ PHRASE: 'I would offer a support person, advocate, interpreter or cultural worker and ask the patient or family who should be present.'",
        "For patients with cognitive or mental state impairment: repeat information, provide written summaries, and revisit disclosure when capacity improves.",
        "Do not assume the standard nuclear-family meeting format suits every patient — ask who should be present rather than deciding unilaterally.",
      ],
      meqApplication:
        "Mention support person, advocate, interpreter or cultural worker in any open disclosure MEQ answer — this signals patient-centred and culturally safe practice.",
      commonTrap:
        "Holding a disclosure meeting that the patient cannot understand because of language, cognitive, cultural or emotional barriers.",
    },
    {
      id: "s11",
      order: 11,
      title: "Further Investigation",
      colorTag: "purple",
      explanation:
        "Open disclosure does not replace investigation. It runs alongside it. Do not promise a conclusion before the investigation has occurred — and do not treat the disclosure meeting as the investigation.",
      keyPoints: [
        "INVESTIGATION MAY INCLUDE: incident report, ward review, medication review, pharmacy review, M&M meeting, clinical case review, root cause analysis, privacy review, restraint/seclusion review, child-safety review, coroner or police process, external regulatory process.",
        "USEFUL PHRASE: 'There will be a review of what happened. It will look at the timeline, clinical decisions, handover, documentation, staffing, supervision and system processes. We will update you as the review progresses.'",
        "Key governance point: do not promise a conclusion before the investigation has occurred — premature conclusions are inaccurate and can be legally damaging.",
        "Open disclosure and investigation are parallel processes — the disclosure meeting informs the family that review is occurring; the review itself generates the findings that inform the follow-up meeting.",
      ],
      commonTrap:
        "Treating open disclosure as the investigation itself — the disclosure meeting acknowledges and communicates; the investigation determines what happened and why.",
    },
    {
      id: "s12",
      order: 12,
      title: "Follow-Up Meeting",
      colorTag: "green",
      explanation:
        "Open disclosure usually needs more than one meeting, especially after serious harm. The first meeting acknowledges and explains; the follow-up meeting provides findings, explains contributing factors, and closes the loop.",
      keyPoints: [
        "FIRST MEETING PURPOSE: acknowledge event, apologise or express regret, explain known facts, explain immediate care, outline review process, offer support, agree contact person.",
        "FOLLOW-UP MEETING PURPOSE: answer questions, provide review findings, explain contributing factors, explain system changes, check ongoing support needs, provide written information, close or continue the process.",
        "FOLLOW-UP MEETING SHOULD INCLUDE: what has been found so far, what remains uncertain, what actions have been taken, what will change, how the patient/family can seek further review.",
        "A single meeting after serious harm is almost never sufficient — families need time to process and return with further questions.",
      ],
      commonTrap:
        "Having one meeting after serious harm and then providing no follow-up — this is an incomplete open disclosure process.",
    },
    {
      id: "s13",
      order: 13,
      title: "Documentation",
      colorTag: "purple",
      explanation:
        "Document open disclosure carefully. The documentation must record what was discussed, not just that a meeting occurred.",
      keyPoints: [
        "DOCUMENT: adverse event or potential harm, who was informed, who attended meeting, patient/family questions, facts explained, uncertainty explained, apology or expression of regret, immediate care plan, support offered, review or investigation process, contact person, follow-up meeting date, written information provided, medicolegal or risk advice sought, if disclosure delayed or limited — why.",
        "AVOID: speculation, blame, defensive notes, pejorative labels, retrospective alteration, 'family was difficult', 'patient demanding compensation', undocumented verbal conversations.",
        "The documentation should read as a clear factual record of what was discussed — not a defence of the clinician's actions.",
        "If the documentation shows only 'open disclosure completed,' it is inadequate — the specific content, questions, and follow-up arrangements must all be recorded.",
      ],
      commonTrap:
        "Documenting that 'open disclosure completed' without recording what was actually discussed and what follow-up was arranged.",
    },
    {
      id: "s14",
      order: 14,
      title: "Medicolegal and Indemnity Advice",
      colorTag: "amber",
      explanation:
        "Open disclosure is compatible with medicolegal advice. You can be transparent, empathetic and still respond carefully. Medicolegal advice should inform the process — not prevent timely acknowledgement and support.",
      keyPoints: [
        "SEEK MEDICOLEGAL ADVICE WHEN: death occurred, serious harm occurred, coroner likely, Ahpra or external complaint likely, legal letter received, sexual or boundary allegation, restraint or seclusion injury, serious medication adverse event, privacy breach, registrar error under your supervision, family threatens legal action, you are asked to provide formal statement.",
        "IMPORTANT BALANCE: do not use medicolegal advice as a reason to avoid empathy — seek advice early but proceed with acknowledgement, expression of regret, clinical care and support.",
        "DEFENSIBLE PHRASE: 'I would seek medicolegal advice early, but this should not prevent timely acknowledgement, expression of regret, clinical care and support.'",
        "Waiting for legal clearance before acknowledging obvious distress or harm is both clinically inappropriate and practically counterproductive.",
      ],
      commonTrap:
        "Waiting for legal advice before even acknowledging distress or harm — early acknowledgement and medicolegal advice are not mutually exclusive.",
    },
    {
      id: "s15",
      order: 15,
      title: "Staff Support",
      colorTag: "teal",
      explanation:
        "Open disclosure can be emotionally difficult for staff. Staff support does not remove accountability — it helps staff participate honestly and safely in review and repair. Distressed staff avoid patients, document defensively and make further errors.",
      keyPoints: [
        "STAFF MAY FEEL: guilt, shame, fear of blame, fear of litigation, anger, defensiveness, sadness, anxiety about career consequences, moral injury, avoidance of patient or family.",
        "SUPPORT SHOULD INCLUDE: debrief, supervision, EAP, peer support, registrar supervisor or Director of Training if trainee involved, indemnity advice, time out if distressed, clear instructions about documentation and statements, protection from scapegoating.",
        "Key point: staff support does not remove accountability — it enables honest participation in review and prevents secondary harm from stressed clinicians.",
        "The registrar or nurse involved in an adverse event is at high risk of burnout, withdrawal from care and documentation problems if not supported.",
      ],
      commonTrap:
        "Forgetting the registrar or nurse involved after an adverse event — they are a second victim of the incident and need structured support.",
    },
    {
      id: "s16",
      order: 16,
      title: "Medication Adverse Event",
      colorTag: "red",
      explanation:
        "Medication adverse events require both a clinical response and an open disclosure response. The medication must be corrected, but disclosure, documentation and system review are equally required.",
      keyPoints: [
        "EXAMPLES: wrong dose, wrong-patient medication, lithium toxicity after unclear discharge advice, haloperidol given despite Parkinsonism or QTc risk, clozapine missed bloods, valproate in pregnancy without counselling, benzodiazepine over-sedation and fall.",
        "IMMEDIATE ACTIONS: assess and treat patient, stop or withhold medication if needed, call medical team/pharmacy/toxicology, check vitals and investigations, clarify what was prescribed and administered, preserve medication chart or eMAR, notify consultant/pharmacy/NUM, complete incident report.",
        "OPEN DISCLOSURE CONTENT: what medication was involved, what effect occurred, what is being done medically, what is known and unknown about cause, what review will occur, what monitoring is planned, apology or regret, how recurrence will be reduced.",
        "EXAMPLE PHRASE: 'I am sorry this medication event occurred. We have stopped the medication, arranged medical monitoring, and involved pharmacy. We are reviewing the prescribing, dispensing and administration steps to understand how it happened.'",
      ],
      commonTrap:
        "Correcting the medication but failing to disclose, document or review the medication system.",
    },
    {
      id: "s17",
      order: 17,
      title: "Delayed Diagnosis or Delayed Review",
      colorTag: "amber",
      explanation:
        "Delayed diagnosis or review is a frequent psychiatric adverse event. Open disclosure must acknowledge the delay, avoid premature attribution of blame, and explain the review of triage, escalation, handover and supervision.",
      keyPoints: [
        "EXAMPLES: delirium missed, serotonin syndrome missed, NMS not recognised, sepsis dismissed as behavioural, high suicide risk not reviewed, child-safety concern not escalated, ED delay leading to harm.",
        "OPEN DISCLOSURE CONTENT: acknowledge delay, explain what is known, avoid blaming a single clinician prematurely, describe current treatment, explain review of triage/escalation/handover/supervision, offer apology or regret, outline future prevention.",
        "EXAMPLE PHRASE: 'I am sorry there was a delay in recognising and responding to the deterioration. The priority now is treatment and safety. We will review the timeline, handover, escalation process and supervision arrangements.'",
        "Calling the delay 'unavoidable' before reviewing the pathway is premature, factually unjustified, and likely to damage trust.",
      ],
      commonTrap:
        "Calling the delay 'unavoidable' before reviewing the pathway — this closes off accountability before the facts are known.",
    },
    {
      id: "s18",
      order: 18,
      title: "Seclusion or Restraint Injury",
      colorTag: "red",
      explanation:
        "Seclusion or restraint injury requires open disclosure focused on the injury, the review of last-resort criteria, and future reduction strategies — not a defence of the decision.",
      keyPoints: [
        "EXAMPLES: physical injury during restraint, prolonged seclusion without review, dignity failure, observation failure, trauma reaction, family not informed.",
        "IMMEDIATE ACTIONS: medical assessment, cease restrictive practice as soon as safe, review mental state and triggers, support patient, support staff, incident report, review legal and policy compliance.",
        "OPEN DISCLOSURE CONTENT: acknowledge injury or distress, explain why restrictive practice was used if known, explain what is being medically assessed, explain review process, apologise for harm or distress, avoid discussing confidential details of other patients, explain debrief and future reduction strategies.",
        "Do not disclose another patient's details to explain what triggered the restraint — focus on what happened to this patient and what is being reviewed.",
      ],
      commonTrap:
        "Defending restraint or seclusion because the ward was busy or the patient was difficult — these are not defences, they are system failures requiring governance action.",
    },
    {
      id: "s19",
      order: 19,
      title: "Post-Discharge Suicide",
      colorTag: "red",
      explanation:
        "Post-discharge suicide is one of the highest-yield MEQ scenarios. It requires an immediate multi-stream response: family support, staff support, record preservation, governance notification, medicolegal advice and structured open disclosure — not a defence of the discharge decision.",
      keyPoints: [
        "IMMEDIATE PRIORITIES: confirm facts sensitively, notify clinical director and service manager, preserve records, support family, support staff and registrar, consider coroner or police according to local policy, incident report, medicolegal advice, plan family meeting.",
        "OPEN DISCLOSURE CONTENT: condolences, acknowledge grief and anger, explain what is known about discharge and follow-up, avoid speculation about causation, acknowledge any known process failure, apologise or express regret appropriately, explain internal review or RCA, offer support, provide contact person, arrange follow-up meeting.",
        "KEY PHRASE: 'I would not speculate that closer follow-up would definitely have prevented the death, but I would acknowledge the failed handover and ensure it is reviewed transparently.'",
        "A post-discharge death may trigger mandatory coroner notification — seek medicolegal advice early.",
      ],
      commonTrap:
        "Jumping straight to defending the discharge decision rather than acknowledging grief, supporting family and staff, and committing to transparent review.",
    },
    {
      id: "s20",
      order: 20,
      title: "Failed Handover",
      colorTag: "amber",
      explanation:
        "Failed handover is a patient safety event, not an administrative error. Open disclosure must acknowledge what information should have been transferred, explain immediate corrective actions, and commit to a system review.",
      keyPoints: [
        "EXAMPLES: outpatient team unaware of discharge, GP not told lithium monitoring needed, CAMHS/adult transfer lost, NGO told to manage risk without escalation pathway, discharge summary sent late or to wrong provider.",
        "OPEN DISCLOSURE CONTENT: acknowledge the handover failure, explain what information should have been transferred, explain immediate corrective actions, apologise for distress or harm, clarify ongoing care plan, explain review of communication process, provide contact person.",
        "SYSTEM ACTIONS: handover template, high-risk discharge checklist, confirmation of receipt, named responsible clinician, GP/community escalation pathway, re-audit.",
        "Failed handover that causes clinical risk is a governance event requiring incident reporting and RCA — not just a process correction.",
      ],
      commonTrap:
        "Calling handover failure an administrative error when it caused clinical risk — this minimises a governance failure and signals poor understanding of patient safety.",
    },
    {
      id: "s21",
      order: 21,
      title: "Registrar Error",
      colorTag: "teal",
      explanation:
        "Open disclosure after registrar error must balance patient/family transparency with registrar support. The consultant must not scapegoat the registrar, but must also not hide the event to protect them.",
      keyPoints: [
        "IMMEDIATE ACTIONS: correct patient care, consultant review, preserve records, inform clinical director if serious, support registrar, obtain registrar account, incident report, consider indemnity advice, consider open disclosure.",
        "DURING OPEN DISCLOSURE — SAY: 'A review will look at the clinical decision, supervision, handover, workload and system factors.' DO NOT SAY: 'The registrar made a mistake and caused this.'",
        "STAFF-SUPPORT STREAM: supervision, debrief, training director if needed, welfare check, medical defence or indemnity advice, learning plan if required.",
        "The supervisor (consultant) has both a duty of care to the patient and a supervisory duty to the registrar — both must be addressed simultaneously.",
      ],
      commonTrap:
        "Blaming the registrar in front of the family (scapegoating) or hiding the event entirely to protect the registrar (covering up) — both are governance failures.",
    },
    {
      id: "s22",
      order: 22,
      title: "Lower-Level Versus Higher-Level Open Disclosure",
      colorTag: "blue",
      explanation:
        "Open disclosure is not a one-size-fits-all process. The level of response should match the severity of harm and distress.",
      keyPoints: [
        "LOWER-LEVEL RESPONSE is usually for: no permanent harm, no escalation in care, minor distress, near miss, no-harm incident. May involve: clinician directly involved, prompt explanation, apology or regret, documentation, local improvement, minimal follow-up unless requested.",
        "HIGHER-LEVEL RESPONSE is usually for: death, major harm, escalation of care, severe psychological distress, serious complaint, significant loss of trust, patient or family request. Requires: senior clinician, preparation meeting, formal open disclosure meeting, support person or advocate, written follow-up, investigation or RCA, governance reporting, further meeting after findings.",
        "Using a brief informal apology for a serious event that requires formal senior-led disclosure is a governance failure.",
        "Escalating to higher-level process when only lower-level is needed can also be harmful — it signals to families that the situation is more serious than it is.",
      ],
      commonTrap:
        "Using a brief informal apology for an event that needs formal senior-led disclosure — the level of response must match the severity of harm.",
    },
    {
      id: "s23",
      order: 23,
      title: "Patient Lacks Capacity or Is Deceased",
      colorTag: "purple",
      explanation:
        "Open disclosure must be adapted when the patient lacks capacity or has died. Do not exclude the patient entirely because capacity is impaired — adapt and revisit.",
      keyPoints: [
        "IF PATIENT LACKS CAPACITY: involve substitute decision-maker or guardian according to local law, involve family/carers if appropriate, provide information in a way the patient can understand where possible, repeat discussion when capacity improves if relevant, document why the disclosure pathway was adapted.",
        "IF PATIENT IS DECEASED: communicate with next of kin or family according to policy, offer condolences, preserve records, notify coroner or police where required, offer family meeting, support staff, explain review process.",
        "Capacity is often fluctuating in psychiatry — plan to revisit disclosure when mental state or capacity improves.",
        "Document specifically why capacity was impaired at the time and how the disclosure was adapted.",
      ],
      commonTrap:
        "Excluding the patient entirely because capacity is impaired, instead of adapting communication and revisiting later when capacity improves.",
    },
    {
      id: "s24",
      order: 24,
      title: "Cultural Safety in Open Disclosure",
      colorTag: "teal",
      explanation:
        "Open disclosure must be culturally safe. A standard meeting format may be inappropriate for Aboriginal and Torres Strait Islander patients, CALD families, Māori or Pasifika whānau, or patients from communities where shame, stigma and mistrust of health services are significant.",
      keyPoints: [
        "CONSIDER: interpreter, Aboriginal liaison worker, cultural worker, Māori/Pasifika whānau involvement in NZ context, spiritual care, family/community decision-making, gender of clinician where relevant, shame/stigma/mistrust, previous coercive experiences, culturally appropriate meeting format.",
        "MEQ PHRASE: 'I would offer culturally appropriate support and ask the patient or family who should be present, rather than assuming the usual nuclear-family meeting is adequate.'",
        "Cultural safety is not a box to tick — it requires asking what the patient and family need, not assuming the standard format works.",
        "Previous coercive psychiatric experiences (involuntary treatment, seclusion, historic over-representation in restrictive practices) may significantly affect trust and engagement in open disclosure.",
      ],
      commonTrap:
        "Holding a disclosure meeting in a standard format that does not fit the patient's cultural, linguistic or family context.",
    },
    {
      id: "s25",
      order: 25,
      title: "Confidentiality When Another Patient Is Involved",
      colorTag: "purple",
      explanation:
        "When an adverse event involves another patient (assault, sexual incident, ward incident), open disclosure must acknowledge the event without breaching the other patient's confidentiality.",
      keyPoints: [
        "YOU CAN: acknowledge distress, explain what happened to their family member, explain what is being done to keep them safe, explain incident review process.",
        "YOU CANNOT: disclose another patient's diagnosis, disclose another patient's legal status, disclose another patient's treatment, blame the other patient publicly.",
        "USEFUL PHRASE: 'I cannot discuss another patient's private clinical details, but I can explain what happened to your daughter, what we are doing for her safety, and how the incident will be reviewed.'",
        "This boundary applies even when the family is angry — confidentiality of the other patient does not yield to family pressure.",
      ],
      commonTrap:
        "Breaching another patient's confidentiality because the family is angry — anger does not create a right to another patient's clinical information.",
    },
    {
      id: "s26",
      order: 26,
      title: "Duty of Candour",
      colorTag: "purple",
      explanation:
        "Some jurisdictions have statutory duty of candour obligations for serious adverse events. The basic clinical approach remains the same: safety, acknowledgement, apology/regret, factual explanation, support, investigation, documentation and system learning.",
      keyPoints: [
        "MEQ PHRASE: 'I would follow local open disclosure policy and check whether statutory duty of candour requirements apply.'",
        "Duty of candour strengthens the obligation for transparent communication — it does not change the fundamental approach, but it makes disclosure legally required rather than professionally expected.",
        "Local legislation and health-service policy should be checked for specific notification timeframes, required documentation and reporting obligations.",
        "Ignoring local duty of candour or open disclosure policy in a serious harm event is itself a governance and professional conduct failure.",
      ],
      commonTrap:
        "Ignoring local duty of candour or open disclosure policy in a serious harm event — this adds a governance failure to the original clinical one.",
    },
    {
      id: "s27",
      order: 27,
      title: "Documentation Checklist",
      colorTag: "blue",
      explanation:
        "A clear documentation checklist ensures the open disclosure record is complete, defensible and useful for governance review.",
      keyPoints: [
        "DOCUMENT: adverse event or potential harm, date and time event identified, immediate clinical actions, patient condition and risk, who was informed, who attended disclosure discussion, what facts were explained, what uncertainty was explained, apology or expression of regret, questions asked by patient/family, support offered, advocate/interpreter/cultural worker involvement, investigation or review process explained, contact person, follow-up meeting date, medicolegal or risk advice, governance notifications, plan to update patient/family.",
        "DO NOT DOCUMENT: blame, speculation, defensive commentary, 'family unreasonable', 'patient threatening complaint', legal conclusions, retrospective changes without addendum.",
        "The documentation is a clinical record and a governance record — it should read as a factual account of a structured process, not a defence of decisions made.",
        "Failing to document the patient or family's questions and what follow-up was promised creates a gap that cannot be reconstructed later.",
      ],
      commonTrap:
        "Failing to document the patient or family's questions and what follow-up was promised — these are the items most commonly scrutinised in subsequent review.",
    },
    {
      id: "s28",
      order: 28,
      title: "MEQ-Ready Structure",
      colorTag: "blue",
      explanation:
        "When asked 'How would you conduct open disclosure?' use this six-domain structure. Stopping after apology and not arranging investigation or follow-up meeting is the most common failure.",
      keyPoints: [
        "1. IMMEDIATE SAFETY: treat patient harm, review risk, ensure current care is safe, prevent further harm.",
        "2. PREPARE: gather known facts, identify unknowns, notify senior staff or governance, seek medicolegal advice if serious, decide who should lead, arrange support person/interpreter/advocate, support staff involved.",
        "3. FIRST DISCLOSURE MEETING: private setting, acknowledge event, apologise or express regret, explain known facts, explain uncertainty, describe current care, invite patient/family questions, listen to their account, explain next steps, provide contact person.",
        "4. INVESTIGATION/REVIEW: incident report, M&M/RCA/case review as appropriate, review systems/supervision/handover/workload/policy, avoid blame.",
        "5. FOLLOW-UP MEETING: provide updates, share findings where appropriate, explain contributing factors, explain actions to prevent recurrence, provide written information, offer further support.",
        "6. DOCUMENTATION AND CLOSURE: document all discussions, record questions and answers, confirm follow-up, document when process is complete, feed learning into governance.",
      ],
      meqApplication:
        "Use these six domains as answer headings. The examiner wants to see all six — not just the first meeting.",
      commonTrap:
        "Stopping after apology and not arranging investigation or follow-up meeting — an apology without investigation and closure is not open disclosure.",
    },
    {
      id: "s29",
      order: 29,
      title: "Examiner Phrases",
      colorTag: "green",
      explanation:
        "These phrases signal governance maturity and consistently appear in high-scoring open disclosure MEQ answers.",
      keyPoints: [
        "'Open disclosure is separate from complaint management.'",
        "'I would acknowledge harm and apologise for distress without speculating or assigning blame before review.'",
        "'The meeting should be led by a senior clinician familiar with the case.'",
        "'I would explain what is known, what is not yet known, and what will be reviewed.'",
        "'I would invite the patient or family to ask questions and identify what they want answered.'",
        "'I would offer a support person, advocate, interpreter or cultural worker.'",
        "'I would support staff involved, especially junior doctors, while maintaining accountability.'",
        "'I would document the open disclosure discussion and arrange a follow-up meeting after investigation.'",
        "'The process should end with system learning, not only an apology.'",
      ],
      commonTrap:
        "Common traps that cost marks: confusing open disclosure with complaint handling; saying 'wait for investigation before speaking'; apologising defensively or not at all; speculating about causation; blaming the registrar or nurse; hiding behind medicolegal fear; forgetting staff support; failing to offer family support; disclosing another patient's confidential information; omitting follow-up meeting; omitting documentation; omitting governance or RCA; failing to explain what will change.",
    },
    {
      id: "s30",
      order: 30,
      title: "Consultant-Level Summary",
      colorTag: "green",
      explanation:
        "A consultant should treat open disclosure as a structured governance and communication process. After ensuring immediate patient safety, the consultant should prepare with the MDT, clarify known facts and uncertainties, notify senior governance and seek medicolegal advice if serious. A senior clinician familiar with the case should meet the patient and family in a private setting, acknowledge the event, apologise or express regret, explain what is known and unknown, invite questions, offer support, and describe the investigation and follow-up process. The discussion should be documented carefully. Staff involved should be supported. The review should lead to system learning, action and feedback to the patient or family where appropriate.",
      keyPoints: [
        "IMMEDIATE: patient safety, clinical care, fact preservation, senior notification, medicolegal advice if serious.",
        "FIRST MEETING: acknowledge, apologise, known facts, uncertainty, current care, questions, support, next steps, contact person.",
        "INVESTIGATION: incident report, M&M/RCA, system review, just culture — parallel to disclosure, not sequential.",
        "FOLLOW-UP AND CLOSURE: findings shared, contributing factors explained, system changes described, documentation complete, learning fed into governance.",
      ],
      meqApplication:
        "Close every open disclosure MEQ answer with system learning and governance feedback — this is where the highest-scoring candidates consistently separate themselves.",
    },
  ],
};

export const RESTRICTIVE_PRACTICES: Note = {
  id: "restrictive_practices",
  title: "Restrictive Practices: Seclusion, Restraint and Forced Medication",
  category: "Clinical Governance / Patient Safety / Legal-Ethical Practice / Leadership",
  description:
    "A consultant-level framework for managing restrictive practices in psychiatry, including seclusion, physical restraint, mechanical restraint, chemical restraint, forced medication, rapid tranquillisation, ED restrictive practice, youth/older adult/ID settings, patient/family complaints, post-seclusion debrief and service-level reduction strategies.",
  sections: [
    {
      id: "s01",
      order: 1,
      title: "Core Principle",
      colorTag: "blue",
      explanation:
        "Restrictive practice is not a treatment plan. It is an emergency safety intervention. Seclusion, restraint and forced medication may be necessary in rare emergencies to prevent serious harm, but they must be last resort, least restrictive, legally authorised, time-limited, closely monitored, documented, reviewed and followed by debrief and prevention planning.",
      keyPoints: [
        "Restrictive practice must NEVER be used: as punishment, for staff convenience, because the ward is short-staffed, to compensate for poor facilities, to enforce compliance, to make a patient 'learn a lesson', or as a threat to coerce behaviour.",
        "Restrictive practice is high-risk clinical governance — it requires legal authority, monitoring and review.",
        "It must be safety-focused, not behaviour-control-focused.",
        "Every episode should trigger debrief and prevention planning.",
      ],
      commonTrap:
        "Treating seclusion or restraint as routine ward management rather than a last-resort emergency safety intervention.",
    },
    {
      id: "s02",
      order: 2,
      title: "Definitions",
      colorTag: "blue",
      explanation:
        "Understanding precise definitions matters in MEQs and clinical practice — particularly the distinction between medication used to treat illness and medication used primarily to restrict movement.",
      keyPoints: [
        "SECLUSION: confinement of a person alone in a room or area from which free exit is prevented.",
        "PHYSICAL RESTRAINT: use of bodily force to restrict movement.",
        "CHEMICAL RESTRAINT: medication used primarily to restrict movement or behaviour rather than to treat illness.",
        "MECHANICAL RESTRAINT: use of a device to restrict movement.",
        "FORCED MEDICATION / EMERGENCY SEDATION: medication administered without consent in an emergency or under relevant legal authority.",
        "RESTRICTIVE PRACTICE: broader term covering seclusion, physical restraint, mechanical restraint, chemical restraint, environmental restriction and forced treatment.",
      ],
      commonTrap:
        "Calling all emergency medication 'treatment' without considering whether it is functioning as chemical restraint.",
    },
    {
      id: "s03",
      order: 3,
      title: "Ethical Frame",
      colorTag: "purple",
      explanation:
        "Restrictive practice creates immediate ethical tension. A defensible consultant position names the tension and resolves it with a least-restrictive, time-limited, dignity-preserving approach.",
      keyPoints: [
        "COMMON TENSIONS: autonomy vs safety, dignity vs emergency containment, least restrictive care vs foreseeable harm, staff safety vs coercion minimisation, rapid control vs trauma-informed care, legal authority vs therapeutic alliance, individual safety vs ward safety.",
        "DEFENSIBLE CONSULTANT POSITION: 'I would use the least restrictive intervention likely to maintain immediate safety, for the shortest possible duration, with active review and a plan to return to collaborative care.'",
        "Restrictive practice has human-rights implications — it can feel humiliating, disempowering, frightening, punitive or re-traumatising.",
        "In 'Discuss' questions: name the tension, take a defensible position, do not simply describe what you would do.",
      ],
      meqApplication:
        "For 'Discuss' questions, name the ethical tension and take a defensible consultant position — examiners are looking for ethical reasoning, not just clinical description.",
      commonTrap:
        "Discussing staff safety only and ignoring dignity, autonomy and trauma.",
    },
    {
      id: "s04",
      order: 4,
      title: "Last Resort Principle",
      colorTag: "amber",
      explanation:
        "Restrictive practice is justified only when specific conditions are met. Each condition must be satisfied — not just imminent risk alone.",
      keyPoints: [
        "REQUIRED CONDITIONS: imminent or serious risk of harm, less restrictive alternatives have failed or are not feasible, intervention is proportionate to the risk, authorised under law and policy, trained staff are available, monitoring and review can occur, environment is safe, aim is safety — not punishment or convenience.",
        "MEQ PHRASE: 'I would ensure restraint or seclusion is used only as a last resort after de-escalation, environmental modification, oral medication and collaborative options have failed or are unsafe.'",
        "Proportionality matters — the level of restriction must match the level and immediacy of risk.",
        "Faster is not safer — using restraint because it is quicker than de-escalation is a governance failure.",
      ],
      meqApplication:
        "Always name the last resort principle before describing any restrictive intervention — it frames the entire response as governance-aware.",
      commonTrap:
        "Using restraint because it is faster than de-escalation.",
    },
    {
      id: "s05",
      order: 5,
      title: "Least Restrictive Care",
      colorTag: "green",
      explanation:
        "Least restrictive care means using the minimum necessary restriction to manage the immediate risk. It does not mean doing nothing — it means matching the intervention to the level and immediacy of risk.",
      keyPoints: [
        "ESCALATION PATHWAY: (1) engagement and verbal de-escalation → (2) quiet space or low-stimulus environment → (3) sensory modulation → (4) trusted staff or family involvement → (5) address pain/hunger/fear/intoxication/withdrawal → (6) oral medication → (7) increased observation → (8) brief physical intervention to prevent immediate harm → (9) emergency IM medication if necessary → (10) seclusion or restraint only when unavoidable.",
        "Least restrictive care is not passive — it is active, structured and documented.",
        "Each step should be tried or explicitly justified as unsafe before escalating.",
        "The order is a guide, not a rigid protocol — immediate severe violence may require skipping early steps.",
      ],
      commonTrap:
        "Equating 'least restrictive' with unsafe passivity — failure to act when risk is immediate is also a governance failure.",
    },
    {
      id: "s06",
      order: 6,
      title: "De-Escalation First",
      colorTag: "green",
      explanation:
        "De-escalation is the default first-line intervention unless there is immediate danger. It requires skill, environment and time — all of which can be structured.",
      keyPoints: [
        "USE: calm voice, non-threatening posture, enough space and clear exit route, reduced audience and stimulation, listening to grievance, offering choices, offering food/drink/blanket/quiet room, addressing pain/fear/withdrawal/intoxication/confusion, involving trusted person if safe, offering oral medication.",
        "AVOID: arguing with delusions, cornering/crowding/prolonged eye contact, setting ultimatums early, raising voice, showing frustration, threatening restraint.",
        "SET clear, respectful limits — not ultimatums that escalate the situation.",
        "De-escalation is a clinical skill — lack of training is a workforce development gap, not a justification for skipping it.",
      ],
      meqApplication:
        "In agitation stems, always mention de-escalation before restrictive practice unless the risk is immediate and severe — its omission is a consistent mark-losing gap.",
      commonTrap:
        "Going straight to IM medication without trying or considering de-escalation.",
    },
    {
      id: "s07",
      order: 7,
      title: "Legal Criteria and Authority",
      colorTag: "purple",
      explanation:
        "Restrictive practice must comply with local legislation and service policy. Jurisdiction-specific wording differs, but the general principles are stable. Involuntary legal status alone does not automatically authorise any restraint or forced medication.",
      keyPoints: [
        "CONSIDER: voluntary or involuntary legal status, decision-making capacity, emergency treatment provisions, Mental Health Act authority, duty of care, legal authority for forced medication, whether seclusion/restraint is permitted in that setting, who can authorise it.",
        "ALSO CONSIDER: required review frequency, required documentation or register, patient rights information, notification to nominated person/family/guardian if required, tribunal/reporting obligations where relevant.",
        "MEQ PHRASE: 'I would check local Mental Health Act and service policy because seclusion, restraint and forced medication require specific legal authority, documentation and review.'",
        "Emergency treatment provisions allow short-term action — they do not replace the requirement for legal review and documentation.",
      ],
      commonTrap:
        "Assuming involuntary status automatically authorises any restraint or forced medication — each type of restrictive practice has its own legal threshold.",
    },
    {
      id: "s08",
      order: 8,
      title: "Dignity and Trauma-Informed Approach",
      colorTag: "green",
      explanation:
        "Restrictive practice can be traumatic for patients and staff. Trauma-informed care requires assuming trauma may be present and structuring the intervention to minimise re-traumatisation — even when restraint is unavoidable.",
      keyPoints: [
        "TRAUMA-INFORMED CARE MEANS: assume trauma may be present, reduce coercion where possible, explain what is happening, preserve dignity, offer choice wherever possible, avoid unnecessary exposure, avoid humiliating language, use culturally safe approaches, avoid gender-insensitive staffing where possible.",
        "ALSO: avoid prolonged prone restraint, attend to toileting/hydration/pain/clothing/menstrual care, return control to the patient as soon as safe, debrief afterwards.",
        "MEQ PHRASE: 'Even if restraint is unavoidable, the manner of restraint must remain trauma-informed: explain, protect dignity, monitor, minimise duration and debrief.'",
        "How restrictive practice is conducted is as important as whether it was clinically justified.",
      ],
      commonTrap:
        "Justifying rough or humiliating practice because the patient was aggressive — the manner of restraint is a governance issue independent of the clinical justification.",
    },
    {
      id: "s09",
      order: 9,
      title: "Monitoring During Restraint, Seclusion and Forced Medication",
      colorTag: "red",
      explanation:
        "Monitoring is not optional — it is part of the intervention. Sedating a patient and leaving them unmonitored is a serious clinical and governance failure.",
      keyPoints: [
        "PHYSICAL RESTRAINT MONITORING: airway, breathing, circulation, consciousness, oxygen saturation, pulse, blood pressure, respiratory rate, temperature if indicated, signs of positional asphyxia, pain or injury, agitation level, need to cease as soon as possible.",
        "AFTER IM MEDICATION / RAPID TRANQUILLISATION: respiratory rate, oxygen saturation, pulse, blood pressure, temperature, level of consciousness, airway protection, extrapyramidal symptoms, QTc/cardiac risk where relevant, over-sedation, need for medical transfer.",
        "SECLUSION MONITORING: mental state, risk to self, physical state, distress, hydration, toileting, temperature and comfort, injury, medication effects, readiness to end seclusion, review frequency.",
        "Monitoring frequency and documentation requirements are set by local policy — know your policy and document compliance.",
      ],
      commonTrap:
        "Sedating a patient and leaving them unmonitored — this is a patient safety failure that can be fatal.",
    },
    {
      id: "s10",
      order: 10,
      title: "Medical Review",
      colorTag: "red",
      explanation:
        "Medical review is required after or during restrictive practice in a range of situations. Treating restraint as a purely behavioural event and missing physical-health risk is a consistent MEQ failure.",
      keyPoints: [
        "MEDICAL REVIEW IS REQUIRED WHEN: physical restraint occurred, IM sedation or forced medication was used, injury occurred, patient is heavily sedated, prolonged seclusion or restraint occurred, patient has medical comorbidity.",
        "ALSO REQUIRED WHEN: intoxication/withdrawal/delirium is possible, patient is an older adult/young person/pregnant/has intellectual disability, there is respiratory/cardiac/neurological risk, patient complains of pain or distress.",
        "MEQ PHRASE: 'I would arrange prompt medical review because restraint, seclusion and emergency sedation carry physical risks, particularly respiratory compromise, injury, delirium, intoxication and medication adverse effects.'",
        "Medical review is both a clinical and governance requirement — its absence after a significant episode is a documentation and policy gap.",
      ],
      commonTrap:
        "Treating restraint as a purely behavioural event and missing physical-health risk.",
    },
    {
      id: "s11",
      order: 11,
      title: "Documentation",
      colorTag: "purple",
      explanation:
        "Documentation must be contemporaneous, factual and specific. Documenting the event without documenting alternatives tried or legal authority is the most common documentation failure in restrictive practice.",
      keyPoints: [
        "DOCUMENT: reason for restrictive practice, immediate risk, alternatives tried or considered, why less restrictive options were insufficient, legal authority, who authorised the intervention, time commenced, staff involved, type of restraint/seclusion/medication, medication dose/route/time.",
        "ALSO DOCUMENT: physical and mental-state monitoring, injuries, medical review, duration, reviews and decision to continue or end, family/nominated person contact where relevant, debrief offered, incident report, plan to prevent recurrence.",
        "AVOID: 'patient was difficult', 'staff had no choice' without evidence, 'for behaviour management', retrospective notes, pejorative labels, vague 'risk to others' without specifics.",
        "Good documentation answers: what was the risk, what was tried first, who authorised it, how long did it last, what was monitored, and what happens next.",
      ],
      commonTrap:
        "Documenting the event without documenting alternatives tried or legal authority — these are the two elements most scrutinised in governance review.",
    },
    {
      id: "s12",
      order: 12,
      title: "Reporting and Review",
      colorTag: "purple",
      explanation:
        "Restrictive practice events should trigger service-level review, not just clinical note completion. Completing the seclusion register without reviewing preventability is incomplete governance.",
      keyPoints: [
        "REPORT THROUGH: seclusion/restraint register, incident reporting system, nurse unit manager, treating consultant, clinical director if serious, restrictive-practice committee, quality and safety committee, complaints unit if complaint arises, legal/risk team if injury or serious harm, external statutory reporting where required.",
        "REVIEW SHOULD ASK: was it necessary, was it lawful, were alternatives attempted, was it proportionate, was it the shortest duration possible, was dignity protected, was monitoring adequate, was medical review timely, was family/carer informed appropriately, what can prevent recurrence?",
        "Reporting obligations vary by jurisdiction — some require statutory notification for any seclusion episode.",
        "The review is not a blame exercise — it is a learning and prevention process.",
      ],
      commonTrap:
        "Completing the seclusion register but not reviewing preventability — the register records what happened; the review determines what should change.",
    },
    {
      id: "s13",
      order: 13,
      title: "Debrief Patient and Staff",
      colorTag: "teal",
      explanation:
        "Debrief is both a clinical and governance intervention. It must involve both the patient and staff — and must lead to an updated care plan and prevention plan.",
      keyPoints: [
        "PATIENT DEBRIEF — ASK: what happened from your perspective, what made you feel unsafe or angry, what helped, what made it worse, were you injured, was anything humiliating or frightening, what can we do differently next time, what early warning signs should staff notice, what alternatives would you prefer?",
        "STAFF DEBRIEF — ASK: what was the trigger, what alternatives were tried, what worked, what escalated the situation, was anyone injured, was policy followed, was monitoring adequate, did staffing or environment contribute, what should change?",
        "Debrief should lead to an updated care plan and individual prevention plan — not just a conversation.",
        "Debriefing staff only and not the patient is a consistent failure — the patient's perspective is both clinically valuable and an open disclosure obligation.",
      ],
      commonTrap:
        "Debriefing staff only and not the patient — and debriefing without translating findings into a changed care plan.",
    },
    {
      id: "s14",
      order: 14,
      title: "Patient/Family Complaint After Restraint or Seclusion",
      colorTag: "red",
      explanation:
        "This is a classic RANZCP MEQ scenario. The response requires both open disclosure (if harm occurred) and complaint management — as parallel streams, not sequential ones.",
      keyPoints: [
        "IMMEDIATE APPROACH: ensure patient is safe now, review physical and psychological harm, acknowledge distress, explain complaint and open disclosure pathways, preserve records, review incident report and policy, speak with staff involved, offer meeting with patient/family, involve senior nurse or clinical director where appropriate, avoid defensiveness.",
        "IN THE MEETING: apologise or express regret where appropriate, explain known facts, acknowledge suboptimal care if clear, explain what is still being reviewed, avoid blaming individuals early, explain future prevention, offer further support, mitigate risk of future disengagement.",
        "Both the complaint pathway and open disclosure run concurrently — one does not replace the other.",
        "Defending staff immediately rather than acknowledging harm destroys trust and escalates the complaint.",
      ],
      meqApplication:
        "Mention complaint process, open disclosure if harm occurred, incident review and system improvement — all four streams should appear in the MEQ answer.",
      commonTrap:
        "Defending staff immediately rather than acknowledging harm and reviewing the incident fairly.",
    },
    {
      id: "s15",
      order: 15,
      title: "Staff Using Threat of Restraint",
      colorTag: "amber",
      explanation:
        "Threatening restraint is itself a governance problem — even when no restraint actually occurs. It escalates fear and aggression, damages trust, may be coercive and unlawful, and normalises restrictive practice.",
      keyPoints: [
        "EXAMPLES: 'If you do not take medication, we will restrain you.' / 'Stop yelling or you will go to seclusion.' / 'If you refuse observations, we will hold you down.' / 'Security will sort you out.'",
        "WHY THIS IS UNSAFE: escalates fear and aggression, damages trust, may be coercive and unlawful, is not trauma-informed, normalises restrictive practice, may reflect staff anxiety or poor skill, may lead to complaints.",
        "CONSULTANT RESPONSE: stop the practice, clarify expectations with staff, provide de-escalation training, review ward culture, support anxious staff, audit incidents, reinforce that restrictive practice is not punishment or a negotiation tool.",
        "Coercive language is a ward culture indicator — its presence signals a need for workforce development and leadership intervention.",
      ],
      commonTrap:
        "Ignoring coercive language because 'no restraint actually happened' — the threat itself is a governance problem.",
    },
    {
      id: "s16",
      order: 16,
      title: "Restrictive Practice in ED",
      colorTag: "red",
      explanation:
        "ED restrictive practice is high risk because of noise, crowding, intoxication, delirium, unclear legal authority and rushed sedation. The most important first step is ruling out medical causes of agitation.",
      keyPoints: [
        "HIGH-RISK FACTORS IN ED: noise and crowding, long waits, intoxication, delirium or medical illness, limited psychiatric spaces, security presence, unclear legal authority, rushed sedation, poor monitoring after sedation, stigma and discrimination, handover gaps.",
        "CONSULTANT APPROACH: prioritise de-escalation and medical assessment, assess delirium/intoxication/withdrawal/pain/hypoxia/head injury/hypoglycaemia, use quiet area if possible, involve family or support person if safe, offer oral medication first, use IM medication only when necessary.",
        "ALSO: ensure resuscitation and monitoring capacity, clarify legal authority, document rationale and monitoring, ensure handover to psychiatry or inpatient team, review restraint/seclusion episode after transfer.",
        "Treating ED agitation as purely psychiatric and missing delirium, intoxication or medical deterioration is both a clinical and governance failure.",
      ],
      commonTrap:
        "Treating ED agitation as purely psychiatric and missing delirium, intoxication or medical deterioration.",
    },
    {
      id: "s17",
      order: 17,
      title: "Youth Setting",
      colorTag: "teal",
      explanation:
        "Restrictive practice in children and adolescents carries extra risk because of developmental trauma, attachment disruption, and the high potential for retraumatisation. An adult restrictive-practice response is rarely appropriate.",
      keyPoints: [
        "CONSIDER: developmental trauma, attachment disruption, child protection involvement, family/whānau involvement, school or care setting, capacity and consent, developmental communication, risk of retraumatisation, cultural safety, need for paediatric medical review.",
        "USE FIRST: trusted adult, family/whānau/cultural worker, quiet child-safe space, sensory tools, verbal containment, food/blanket/comfort items, time, safe oral medication if needed, medical review.",
        "Consent and capacity must be assessed developmentally — not using adult standards.",
        "Child protection obligations apply — if restrictive practice involves child protection concerns, notify accordingly.",
      ],
      commonTrap:
        "Using an adult restrictive-practice response in a young person without developmental or trauma formulation.",
    },
    {
      id: "s18",
      order: 18,
      title: "Older Adult Setting",
      colorTag: "teal",
      explanation:
        "Restrictive practice in older adults is high risk because agitation often reflects an underlying medical cause — not a primary psychiatric emergency. Sedating without identifying the cause is both clinically inappropriate and dangerous.",
      keyPoints: [
        "AGITATION MAY REFLECT: delirium, pain, infection, constipation, urinary retention, hypoxia, medication side effects, dementia, sensory impairment, fear.",
        "RISKS OF RESTRICTIVE PRACTICE IN OLDER ADULTS: falls, delirium worsening, pressure injury, aspiration, stroke/cardiac events, over-sedation, loss of mobility, death, carer distress.",
        "FIRST APPROACH: diagnose cause of behaviour, pain relief, hydration, toileting, sensory aids, familiar staff or family, reduce noise, behavioural analysis, avoid anticholinergic/sedating burden, medication only as last resort at lowest effective dose.",
        "Any sedating medication in an older adult requires careful dose selection, monitoring and medical review.",
      ],
      commonTrap:
        "Sedating an older adult with 'behavioural disturbance' without looking for delirium, pain or medical cause.",
    },
    {
      id: "s19",
      order: 19,
      title: "Intellectual Disability / Neurodevelopmental Setting",
      colorTag: "teal",
      explanation:
        "Restrictive practice risk is increased when staff misinterpret communication as 'behaviour.' Most escalation in this population represents unmet needs, not treatment-resistant agitation.",
      keyPoints: [
        "CONSIDER: communication needs, sensory overload, pain or medical cause, routine disruption, trauma, unmet needs, autism/ID support plan, positive behaviour support, carer input, environmental triggers.",
        "PLAN: communication aids, sensory profile, known calming strategies, positive behaviour support plan, carer/family involvement, avoid repeated coercion, medication only with clear indication and monitoring, report and review any restrictive practice.",
        "Positive behaviour support is the evidence-based framework for this population — it replaces reactive restrictive practice with proactive strategy.",
        "Restricting a person with ID who is distressed without understanding the communicative function of the behaviour is a clinical governance failure.",
      ],
      commonTrap:
        "Attributing distress to 'challenging behaviour' without assessing communication, sensory and medical needs.",
    },
    {
      id: "s20",
      order: 20,
      title: "Forced Medication / Rapid Tranquillisation",
      colorTag: "red",
      explanation:
        "Forced medication is high-stakes. It requires a clinical indication, legal authority, safety checks, appropriate drug selection, post-administration monitoring and review. Using IM sedation as a shortcut when oral medication was possible is a governance failure.",
      keyPoints: [
        "BEFORE GIVING — CHECK: indication, immediate risk, alternatives attempted, capacity and consent, legal authority, allergies, medical comorbidity, intoxication, pregnancy where relevant, current medications, QTc/cardiac risk, respiratory risk, elderly/frail/youth status, staffing and monitoring capacity, resuscitation availability.",
        "PREFER: oral medication, familiar medication if known, lowest effective dose, avoid unnecessary polypharmacy, avoid excessive benzodiazepine/antipsychotic combination, rapid review after effect.",
        "Parenteral psychotropics require monitoring because of respiratory, cardiovascular and airway risks — resuscitation equipment and trained staff must be immediately available.",
        "Key distinction: medication to treat acute illness vs medication used primarily to restrict movement — the second is chemical restraint and requires chemical restraint documentation and authority.",
      ],
      commonTrap:
        "Using IM sedation as a shortcut when the patient could have accepted oral medication.",
    },
    {
      id: "s21",
      order: 21,
      title: "Service-Level Reduction Strategies",
      colorTag: "green",
      explanation:
        "Restrictive practice reduction is a leadership and change-management task, not only a bedside skill. Telling staff to 'do better' without structural change reliably fails.",
      keyPoints: [
        "LEADERSHIP AND CULTURE: set expectation that restrictive practice is last resort, senior review of every episode, speak up against threats or punitive use, include restrictive practice in governance meetings, support staff without blaming staff.",
        "DATA: measure seclusion/restraint rates, duration, time of day, patient group, ward, staff mix, injuries, repeat episodes, ethnicity/cultural disparities, complaints, debrief completion.",
        "WORKFORCE DEVELOPMENT: de-escalation training, trauma-informed care, cultural safety, safe restraint technique, rapid tranquillisation monitoring, reflective practice, simulation training.",
        "INDIVIDUAL PREVENTION TOOLS: sensory modulation plans, advance statements, early warning signs, patient preference plans, aggression prevention plan, post-incident review, relapse plan, medication plan.",
        "ENVIRONMENT: low-stimulus spaces, sensory rooms, natural light, quiet areas, safe outdoor access, less crowding, culturally safe spaces, dignity-preserving facilities.",
        "CONSUMER/CARER INVOLVEMENT: co-design policy, consumer consultants, family/carer feedback, lived-experience workforce, review incidents with patient perspective, avoid tokenism.",
      ],
      commonTrap:
        "Trying to reduce restrictive practice only by telling staff to 'do better' — structural, environmental and cultural change is required.",
    },
    {
      id: "s22",
      order: 22,
      title: "Six Core Strategies",
      colorTag: "green",
      explanation:
        "The Six Core Strategies are commonly referenced in seclusion and restraint reduction. They provide a compact, evidence-based framework for service-level MEQ answers.",
      keyPoints: [
        "1. LEADERSHIP TOWARDS ORGANISATIONAL CHANGE — senior clinicians model and mandate last-resort use.",
        "2. USE OF DATA TO INFORM PRACTICE — measure rates, duration, triggers, disparities and debrief completion.",
        "3. WORKFORCE DEVELOPMENT — de-escalation, trauma-informed care, cultural safety, safe restraint technique.",
        "4. USE OF PREVENTION TOOLS — sensory plans, advance statements, individual prevention plans.",
        "5. CONSUMER ROLES IN INPATIENT SETTINGS — consumer consultants, co-design, lived-experience workforce.",
        "6. DEBRIEFING TECHNIQUES — structured post-incident patient and staff debrief linked to care-plan revision.",
      ],
      meqApplication:
        "If asked how to reduce seclusion rates, mention all six: leadership, data, workforce training, prevention tools, consumer involvement and debrief — omitting any of the six is a mark-losing gap.",
      commonTrap:
        "Offering only staff education and missing leadership, data and consumer involvement.",
    },
    {
      id: "s23",
      order: 23,
      title: "Safewards",
      colorTag: "green",
      explanation:
        "Safewards is a practical ward-level model to reduce conflict and containment by modifying the social environment and staff responses to flashpoints. It is useful when asked how to reduce seclusion rates or change ward culture.",
      keyPoints: [
        "SAFEWARDS AIMS TO: reduce conflict, reduce containment, improve safety, increase mutual support between staff and patients, modify staff responses to flashpoints.",
        "SAFEWARDS-STYLE INTERVENTIONS: clear mutual expectations, calm communication, talk-down/de-escalation, positive words, discharge messages, reassurance, soft words, bad-news mitigation, knowing each other, mutual help meetings.",
        "Safewards works at the ward culture level — it changes what staff routinely do, not just what they do in crises.",
        "Mentioning Safewards by name without explaining practical ward-level changes is a superficial answer — describe what it actually involves.",
      ],
      meqApplication:
        "Safewards is useful when asked how to reduce seclusion rates or change ward culture — pair the name with specific examples of what changes.",
      commonTrap:
        "Mentioning Safewards by name without explaining practical ward-level changes.",
    },
    {
      id: "s24",
      order: 24,
      title: "Reducing Seclusion Rates: Audit and QI Plan",
      colorTag: "purple",
      explanation:
        "A consultant-level QI plan for seclusion reduction goes beyond staff training. It requires baseline data, standards review, stakeholder engagement, consumer input, incident review, environmental change and re-audit.",
      keyPoints: [
        "QI PLAN STEPS: (1) baseline data, (2) standards/policy review, (3) stakeholder engagement, (4) consumer/carer input, (5) incident review of recent episodes, (6) staff training, (7) de-escalation and trauma-informed care, (8) environmental changes, (9) individual prevention plans, (10) debrief process, (11) dashboard/governance reporting, (12) re-audit.",
        "AUDIT MEASURES: number of seclusion events, duration, repeat consumers, time of day, diagnosis/age/cultural group, precipitating factors, alternatives tried, medical review time, debrief completion, injuries, complaints, staff injury or distress.",
        "Reporting seclusion numbers only without looking at duration, repeat episodes, triggers and debrief completion is superficial governance.",
        "Ethnicity and cultural group data must be collected — over-representation of First Nations and CALD patients in restrictive practice is a documented systemic issue.",
      ],
      commonTrap:
        "Reporting seclusion numbers only, without looking at duration, repeat episodes, triggers and debrief completion.",
    },
    {
      id: "s25",
      order: 25,
      title: "Responding to Restraint After Aggression",
      colorTag: "red",
      explanation:
        "Restraint after aggression requires a multi-stream simultaneous response: the patient, the staff involved, other patients and governance review — not just management of the person who was restrained.",
      keyPoints: [
        "IMMEDIATE RESPONSE: ensure patient/staff/other patients are safe, treat injuries, assess mental state and physical state, consider delirium/intoxication/withdrawal/pain, reduce stimulation, end restraint as soon as safe, monitor vitals and airway, arrange medical review, document, notify consultant and NUM, complete incident report.",
        "AFTER EPISODE: review whether restraint was necessary, review alternatives attempted, debrief patient and staff, update formulation and care plan, identify triggers and prevention strategies, consider trauma and cultural factors, support injured staff or patients, communicate with family where appropriate.",
        "Governance review is required if there was injury, prolonged restraint, complaint or policy breach.",
        "The other patients who witnessed the event are also affected — they need assessment and support.",
      ],
      commonTrap:
        "Only managing the aggressive patient and forgetting staff injury, other patients and governance review.",
    },
    {
      id: "s26",
      order: 26,
      title: "Seclusion Review",
      colorTag: "purple",
      explanation:
        "When reviewing a seclusion episode, the clinical and governance questions are equally important. The key consultant question is: 'What needs to change so that this person is less likely to be secluded again?'",
      keyPoints: [
        "REVIEW ASKS: why was seclusion commenced, was there imminent risk, what alternatives were attempted, who authorised it, was legal/policy process followed, how long did it last, was the patient monitored physically and psychologically, was medical review completed, were dignity needs met, was the patient reviewed for release regularly, was family/nominated person informed, was debrief completed, what prevention plan now exists?",
        "POSSIBLE CHANGES AFTER REVIEW: medication review, leave review, sensory plan, staff approach, cultural support, trauma formulation, ward environment, family input, transfer to safer setting.",
        "The consultant should actively drive prevention planning — not simply sign off that the seclusion was documented correctly.",
        "Reviewing whether seclusion was lawful but not asking how to prevent recurrence is incomplete governance.",
      ],
      commonTrap:
        "Reviewing whether seclusion was lawful but not asking how to prevent recurrence.",
    },
    {
      id: "s27",
      order: 27,
      title: "Post-Seclusion / Post-Restraint Debrief Template",
      colorTag: "teal",
      explanation:
        "A structured debrief template ensures both patient and staff perspectives are captured and translated into governance output. Debriefing without a changed care plan is incomplete.",
      keyPoints: [
        "PATIENT DEBRIEF: 'Can you tell me what happened from your perspective?' / 'What were you feeling before it escalated?' / 'What did staff do that helped?' / 'What made things worse?' / 'Were you hurt or frightened?' / 'Was there anything humiliating?' / 'What would help next time?' / 'Can we write a plan together?'",
        "STAFF DEBRIEF: 'What was the trigger?' / 'What alternatives were tried?' / 'What warning signs were missed?' / 'Was staffing/environment a factor?' / 'Was policy followed?' / 'Was monitoring adequate?' / 'Was anyone injured?' / 'What should we change?'",
        "GOVERNANCE OUTPUT: updated care plan, individual prevention plan, staff learning, environmental changes, audit data, incident report, governance review if serious.",
        "The debrief template is reusable for every episode — it standardises both the learning and the governance record.",
      ],
      commonTrap:
        "Debriefing without translating it into a changed care plan and prevention strategy.",
    },
    {
      id: "s28",
      order: 28,
      title: "MEQ-Ready Answer Structure",
      colorTag: "blue",
      explanation:
        "When asked 'How would you manage seclusion/restraint/forced medication?' use this seven-domain structure. Forgetting the post-event debrief and prevention plan is the most common final-stem failure.",
      keyPoints: [
        "1. IMMEDIATE SAFETY: protect patient/staff/others, assess imminent risk, call trained staff/security only as needed, remove weapons or means, maintain safe environment.",
        "2. DE-ESCALATION AND LEAST RESTRICTIVE ALTERNATIVES: verbal de-escalation, quiet space, reduce stimulation, offer choices, address medical causes, involve trusted person, offer oral medication.",
        "3. LEGAL AND ETHICAL THRESHOLD: capacity, consent/refusal, legal status, Mental Health Act or policy authority, proportionality, last resort, shortest duration.",
        "4. IF RESTRICTIVE PRACTICE UNAVOIDABLE: trained staff, approved protocol, safe environment, dignity and trauma-informed approach, monitoring, medical review, end as soon as safe.",
        "5. DOCUMENTATION AND REPORTING: rationale, alternatives tried, legal authority, time/duration, monitoring, medication, injuries, medical review, register/incident report.",
        "6. DEBRIEF AND CARE-PLAN REVISION: patient debrief, staff debrief, family/carer communication, update formulation and prevention plan.",
        "7. GOVERNANCE AND REDUCTION: review episode, identify system factors, audit rates, staff training, consumer/carer involvement, environmental changes, re-audit.",
      ],
      meqApplication:
        "Use these seven domains as answer headings. The examiner wants to see all seven — not just the clinical intervention.",
      commonTrap:
        "Forgetting the post-event debrief and prevention plan — these are the domains that separate competent from consultant-level answers.",
    },
    {
      id: "s29",
      order: 29,
      title: "Examiner Phrases",
      colorTag: "green",
      explanation:
        "These phrases signal consultant-level governance thinking. Use them to open or close sections of your MEQ answer.",
      keyPoints: [
        "'Restrictive practice is an emergency safety intervention, not a treatment plan.'",
        "'I would use the least restrictive option likely to prevent immediate harm.'",
        "'Seclusion/restraint should never be used as punishment, convenience or a substitute for staffing.'",
        "'I would document alternatives attempted or why they were unsafe.'",
        "'The manner of restraint must preserve dignity and minimise trauma.'",
        "'Forced medication requires legal authority, clinical indication, monitoring and review.'",
        "'Every episode should lead to debrief and an individual prevention plan.'",
        "'Reducing seclusion requires leadership, data, workforce development, consumer involvement and governance review.'",
      ],
      commonTrap:
        "Not using consultant-level governance language in final stems — clinical description without governance framing signals junior-doctor thinking.",
    },
    {
      id: "s30",
      order: 30,
      title: "Common Traps",
      colorTag: "amber",
      explanation:
        "Use this section as a checklist before submitting any MEQ answer on restrictive practice. Each item below represents a documented mark-losing gap.",
      keyPoints: [
        "Going straight to IM medication without mentioning de-escalation.",
        "Omitting medical causes of agitation (delirium, intoxication, pain, withdrawal).",
        "Failing to mention legal authority for restraint, seclusion or forced medication.",
        "Failing to monitor airway and vitals after sedation.",
        "Ignoring trauma-informed care and dignity.",
        "Treating seclusion as routine ward management rather than last resort.",
        "Justifying restraint because of staff shortage or ward busyness.",
        "Using or tolerating restraint as a threat or negotiation tool.",
        "Failing to debrief both patient and staff.",
        "Failing to involve family/carers after serious incident.",
        "Ignoring staff support needs after a significant episode.",
        "Missing complaint/open disclosure pathway after harm.",
        "Recommending education only without audit, governance change or structural intervention.",
      ],
      meqApplication:
        "Use this section as a checklist before submitting an answer on restrictive practice — any item present in the stem that is absent from your answer is a lost mark.",
    },
    {
      id: "s31",
      order: 31,
      title: "Consultant-Level Summary",
      colorTag: "green",
      explanation:
        "This paragraph is reusable in MEQ final stems involving seclusion, restraint, forced medication, ED aggression, complaint after restraint or reducing restrictive practice rates.",
      keyPoints: [
        "IMMEDIATE: last-resort safety intervention, legal authority, least restrictive reasoning, trained staff, trauma-informed dignity.",
        "DURING: close physical and mental-state monitoring, medical review, documentation and incident reporting.",
        "AFTER: debrief patient and staff, communicate with family/carers where appropriate, update individual prevention plan, review episode through governance.",
        "SERVICE LEVEL: leadership, data monitoring, staff training, consumer involvement, Safewards/Six Core Strategies, environmental changes, re-audit.",
      ],
      meqApplication:
        "'I would approach restrictive practice as a last-resort safety intervention requiring legal authority, least restrictive reasoning, trained staff, trauma-informed dignity, close physical and mental-state monitoring, medical review, documentation and incident reporting. After the event I would debrief the patient and staff, communicate with family/carers where appropriate, update the individual prevention plan and review the episode through governance. At service level, I would reduce restrictive practice through leadership, data monitoring, staff training, consumer involvement, Safewards/Six Core Strategies, environmental changes and re-audit.'",
    },
  ],
};

export const ALL_NOTES: Note[] = [DISCHARGE_PLAN, CONFLICT_MANAGEMENT, COMPLAINT_PROCESS, INCIDENT_MANAGEMENT, CLINICAL_AUDIT, OPEN_DISCLOSURE, RESTRICTIVE_PRACTICES];
