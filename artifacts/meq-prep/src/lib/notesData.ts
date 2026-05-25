export type ColorTag = "green" | "blue" | "amber" | "red" | "purple" | "teal" | "navy";

export interface NoteSection {
  id: string;
  order: number;
  title: string;
  colorTag: ColorTag;
  explanation: string;
  keyPoints: string[];
  commonTrap?: string;
  meqApplication: string;
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

export const ALL_NOTES: Note[] = [DISCHARGE_PLAN];
