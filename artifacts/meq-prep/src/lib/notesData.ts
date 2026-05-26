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

export const RESTRICTIVE_PRACTICES_MEQ: Note = {
  id: "restrictive_practices_meq",
  title: "Restrictive Practices: Seclusion, Restraint, Forced Medication and MEQ Traps",
  category: "Clinical Governance / Patient Safety / Legal-Ethical Practice / Leadership",
  description:
    "A detailed consultant-level framework for managing restrictive practices in psychiatry, with MEQ traps, worked examples, command-word discipline, Before/During/After framework, zero-mark phrases to avoid and consultant upgrade boxes.",
  sections: [
    {
      id: "s01",
      order: 1,
      title: "How to Think About Restrictive Practice in MEQs",
      colorTag: "blue",
      explanation:
        "Restrictive practice questions are not asking 'how do you control the patient?' They ask whether the candidate can balance safety, autonomy, legal authority, dignity, trauma-informed care, physical health, staff safety, documentation, complaint/open disclosure, governance review and service-level reduction.",
      keyPoints: [
        "STRONG MEQ ANSWER: 'I would treat restrictive practice as a last-resort safety intervention, not a treatment plan. I would first attempt de-escalation and least restrictive options, check legal authority, preserve dignity, monitor physical and mental state, document clearly, debrief patient and staff, and review the episode through governance to prevent recurrence.'",
        "Restrictive practice is high-yield governance, not just acute behavioural management.",
        "Examiners are looking for ALL of: safety, legal authority, dignity, monitoring, debrief AND governance — not just the clinical intervention.",
        "REGISTRAR TRAP: writing only 'manage aggression' or 'give IM medication' — these answers miss governance, dignity, monitoring and review.",
      ],
      commonTrap:
        "Only writing 'manage aggression' or 'give IM medication' without governance, dignity, monitoring or review.",
    },
    {
      id: "s02",
      order: 2,
      title: "Central Consultant Tension",
      colorTag: "purple",
      explanation:
        "Every restrictive-practice answer should name the tension. A 'Discuss' answer must name competing duties and take a defensible position — not just list what you would do.",
      keyPoints: [
        "USE THIS SENTENCE: 'There is tension between staff/patient safety and minimising coercion. A defensible consultant position is to use the least restrictive intervention likely to prevent immediate serious harm, for the shortest time, with legal authority, monitoring, debrief and governance review.'",
        "POOR ANSWER: 'Use restraint if needed.'",
        "BETTER ANSWER: 'Use restraint only if imminent serious harm cannot be safely managed through less restrictive options, because restraint itself can cause physical and psychological harm.'",
        "The 'tension' framing shows the examiner you understand competing ethical duties — this is what distinguishes consultant-level from registrar-level answers.",
      ],
      meqApplication:
        "Use the 'There is tension between X and Y...' sentence in any Discuss stem involving restraint, seclusion or forced medication — it immediately signals consultant-level ethical reasoning.",
      commonTrap:
        "Writing a list when the command word requires debate — 'Discuss' means name the tension and take a defensible position.",
    },
    {
      id: "s03",
      order: 3,
      title: "Last Resort Principle",
      colorTag: "amber",
      explanation:
        "Restrictive practice is justified only when there is imminent or serious risk AND less restrictive options have failed, are impossible or are unsafe. Pre-emptive seclusion because a patient 'always calms down after' is a governance failure.",
      keyPoints: [
        "NEVER JUSTIFIED: as punishment, to make the patient comply, to save time, because staff are frustrated, because there are not enough staff, because the patient is annoying, because ward culture normalises it, as a threat.",
        "MEQ TRAP — STEM: 'A nurse says, He always calms down after seclusion. Let's put him in now before he escalates.' POOR: 'Agree if the nurse thinks it works.' BETTER: 'I would not use seclusion pre-emptively unless there is imminent risk — I would review the patient, attempt de-escalation, identify triggers, offer oral medication and only consider seclusion if less restrictive options are unsafe or fail.'",
        "Pre-emptive or routine seclusion is a ward culture problem requiring governance intervention, not clinical endorsement.",
        "Speed is not a clinical justification — using restraint because it is faster than de-escalation is a governance failure.",
      ],
      commonTrap:
        "Using restraint because it is faster than de-escalation.",
    },
    {
      id: "s04",
      order: 4,
      title: "Least Restrictive Care",
      colorTag: "green",
      explanation:
        "Least restrictive care means using the minimum restriction needed to manage the current risk. It is not passivity — it is a structured, documented escalation from least to most restrictive.",
      keyPoints: [
        "ESCALATION LADDER: (1) Engage calmly → (2) Reduce stimulation → (3) Move to quiet space → (4) Offer food/drink/blanket/sensory item → (5) Trusted staff/family/cultural worker → (6) Address pain/intoxication/withdrawal/delirium/fear/confusion → (7) Offer oral medication → (8) Increase observation → (9) Brief physical intervention to prevent immediate harm → (10) Forced medication/seclusion/restraint only when unavoidable.",
        "MEQ TRAP — STEM: 'Patient is shouting, pacing and swearing but has not threatened anyone.' POOR: 'Give IM sedation.' BETTER: 'Assess for medical causes and immediate risk; use verbal de-escalation, low-stimulus space, offer oral medication, clarify needs and triggers, and reserve IM medication/restraint for escalation to imminent harm.'",
        "Shouting and pacing is not the same as imminent serious physical harm — the threshold for restrictive practice is imminent harm, not distress.",
        "Document what was tried and why it was insufficient before escalating.",
      ],
      commonTrap:
        "Equating 'least restrictive' with unsafe passivity — least restrictive care is active and structured, not 'doing nothing.'",
    },
    {
      id: "s05",
      order: 5,
      title: "De-Escalation First",
      colorTag: "green",
      explanation:
        "De-escalation should be active, skilled and intentional. It has specific techniques that work and specific behaviours that make things worse.",
      keyPoints: [
        "GOOD DE-ESCALATION: calm voice, non-threatening posture, avoid crowding, clear exit route, one lead communicator, reduced audience, remove unnecessary staff, listen to grievance, avoid arguing with delusions, offer choices, offer oral medication, offer quiet area, involve trusted person, set respectful limits.",
        "BAD DE-ESCALATION: multiple staff talking at once, threatening seclusion, blocking the door, arguing, humiliating the patient, using sarcasm, repeatedly saying 'calm down,' making promises that cannot be kept.",
        "De-escalation failure is not always the patient failing to respond — it is often the technique, environment or approach that fails.",
        "A de-escalation attempt must be genuine — brief token attempts before proceeding to IM medication are not sufficient and will not score marks.",
      ],
      commonTrap:
        "Going straight to IM medication without trying or considering de-escalation.",
    },
    {
      id: "s06",
      order: 6,
      title: "Legal Authority",
      colorTag: "purple",
      explanation:
        "Restrictive practice must be lawful. In an MEQ, do not recite one jurisdiction's Act unless asked. Say: 'I would check local Mental Health Act and service policy.' Voluntary status does not automatically prohibit emergency intervention — but it does not automatically permit it either.",
      keyPoints: [
        "ALWAYS CONSIDER: voluntary or involuntary status, decision-making capacity, emergency authority provisions, whether forced medication is permitted, who can authorise restraint or seclusion, required review frequency, required documentation/register, who must be notified.",
        "ALSO CONSIDER: whether this setting is authorised to use seclusion (hospital, ED, aged care, disability, youth and custodial settings have different rules).",
        "MEQ TRAP — STEM: 'A voluntary patient refuses IM medication but is shouting and throwing objects.' POOR: 'Because he is voluntary, you cannot restrain him.' BETTER: 'Voluntary status matters, but emergency duty of care and local legal provisions may allow brief intervention if there is immediate serious risk — attempt de-escalation first, assess capacity and risk, use least restrictive intervention, document legal basis and review urgently.'",
        "Voluntary status ≠ no emergency authority. Involuntary status ≠ unlimited authority. Both require documentation and review.",
      ],
      commonTrap:
        "Assuming involuntary status automatically authorises any restraint or forced medication.",
    },
    {
      id: "s07",
      order: 7,
      title: "Trauma-Informed Dignity",
      colorTag: "green",
      explanation:
        "Restrictive practice is often experienced as humiliating, frightening and re-traumatising. The manner of restraint is a governance issue independent of whether the clinical justification was sound.",
      keyPoints: [
        "DURING RESTRAINT/SECLUSION: explain what is happening, use calm language, protect privacy, avoid unnecessary exposure, avoid rough handling, avoid gender-insensitive staffing where possible, attend to toileting/hydration/menstrual care/clothing/pain, minimise duration, tell the patient what needs to happen for release, return control as soon as safe.",
        "MEQ TRAP — STEM: 'Staff restrain a young woman in mixed-gender staff presence after she discloses sexual trauma.' POOR: 'Safety comes first, so proceed.' BETTER: 'Safety remains essential, but the intervention should be trauma-informed: use the minimum staff required, explain actions, preserve dignity, consider gender of staff where possible, minimise exposure, end as soon as safe, and debrief specifically about trauma impact.'",
        "Safety and dignity are not mutually exclusive — both must be addressed simultaneously.",
        "Rough or humiliating restraint that was clinically justified is still a governance problem.",
      ],
      commonTrap:
        "Justifying rough or humiliating practice because the patient was aggressive.",
    },
    {
      id: "s08",
      order: 8,
      title: "Monitoring During Restraint or Forced Medication",
      colorTag: "red",
      explanation:
        "This is a major mark area. After restraint or IM sedation, the patient can die from respiratory compromise, positional asphyxia, aspiration, arrhythmia, over-sedation or unrecognised medical illness. 'Sedated' does not mean 'safe.'",
      keyPoints: [
        "MONITOR: airway, breathing, circulation, pulse, blood pressure, respiratory rate, oxygen saturation, temperature if indicated, consciousness, sedation level, pain or injury, extrapyramidal symptoms, QTc risk where relevant, hydration, ongoing need for restriction.",
        "MEQ TRAP — STEM: 'A patient receives IM olanzapine and diazepam after aggression and is sleeping heavily.' POOR: 'Let him sleep it off.' BETTER: 'Arrange physical observations, airway/respiratory monitoring, level of consciousness monitoring, medical review, review medication interactions and document rapid tranquillisation monitoring.'",
        "EXAM TRAP FLIP: FRONT: 'Patient is sedated after IM medication. What is the trap?' BACK: 'Sedated does not mean safe. Monitor airway, breathing, oxygen saturation, circulation, consciousness and medication adverse effects.'",
        "Monitoring must be documented with times and values — 'patient observed' is not sufficient documentation.",
      ],
      commonTrap:
        "Thinking 'sedated' means 'safe' — sedated patients can die from airway compromise, positional asphyxia and over-sedation.",
    },
    {
      id: "s09",
      order: 9,
      title: "Medical Review",
      colorTag: "red",
      explanation:
        "Medical review is required after physical restraint, IM sedation, injury, prolonged seclusion, heavy sedation, and in high-risk populations. The examiner wants physical-health risk, not just behavioural follow-up.",
      keyPoints: [
        "REQUIRED AFTER/DURING: physical restraint, IM sedation, injury, prolonged seclusion, heavy sedation, older adult restraint, youth restraint, pregnancy, intellectual disability, intoxication, delirium, medical comorbidity, chest pain/shortness of breath/collapse/pain/head injury.",
        "MEQ TRAP — STEM: 'An older adult with dementia is restrained after hitting a nurse and is now drowsy.' POOR: 'Continue observations and review behaviour chart.' BETTER: 'Urgently assess for delirium, pain, infection, hypoxia, urinary retention, constipation, injury and medication adverse effects; older adults are high-risk for over-sedation, aspiration, falls and delirium worsening.'",
        "Drowsiness after restraint in an older adult is a medical emergency until proven otherwise.",
        "The trap is treating restrictive practice as a behavioural issue — the examiner wants physical-health risk thinking.",
      ],
      commonTrap:
        "Missing medical causes and medical harms — treating restrictive practice as purely behavioural.",
    },
    {
      id: "s10",
      order: 10,
      title: "Documentation",
      colorTag: "purple",
      explanation:
        "Documentation is not bureaucracy. It is the evidence that the intervention was lawful, necessary, proportionate and safe. 'Patient aggressive, secluded for safety' is inadequate and indefensible.",
      keyPoints: [
        "DOCUMENT: what happened, immediate risk, alternatives tried, why alternatives failed or were unsafe, legal authority, who authorised, time started/ended, staff involved, type of restraint/seclusion/medication, dose/route/time, physical monitoring, mental-state review, injuries, medical review, patient's response, family/nominated person contact, debrief offered, incident report, prevention plan.",
        "AVOID: 'Patient difficult,' 'Patient manipulative,' 'Needed controlling,' 'Staff had no choice' without facts, 'Behavioural management' as sole rationale.",
        "MEQ TRAP — STEM: 'Notes say patient aggressive, secluded for safety.' POOR: 'Documentation completed.' BETTER: 'This is inadequate — it needs specific risk, alternatives attempted, legal authority, time/duration, observations, review, medical assessment, debrief and prevention plan.'",
        "Good documentation answers six questions: what was the risk, what was tried first, who authorised it, how long did it last, what was monitored, and what happens next.",
      ],
      commonTrap:
        "Documenting the event without documenting alternatives tried or legal authority.",
    },
    {
      id: "s11",
      order: 11,
      title: "Debrief",
      colorTag: "teal",
      explanation:
        "Debrief must happen with both patient and staff. If the patient refuses immediately, offer it later — the refusal does not remove the obligation.",
      keyPoints: [
        "PATIENT DEBRIEF PURPOSE: repair therapeutic rupture, understand triggers, identify what helped or harmed, check injury/trauma, create a prevention plan.",
        "PATIENT DEBRIEF QUESTIONS: 'What happened from your perspective?' / 'What made it worse?' / 'What helped?' / 'Were you hurt or frightened?' / 'What should we do differently next time?' / 'Who helps you calm down?' / 'What early warning signs should staff notice?'",
        "STAFF DEBRIEF PURPOSE: support staff, learn from event, identify system factors, prevent normalising coercion. QUESTIONS: 'What was the trigger?' / 'What alternatives were tried?' / 'Was policy followed?' / 'Was monitoring adequate?' / 'Was staffing or environment a factor?' / 'What needs to change?'",
        "MEQ TRAP — STEM: 'Patient is released from seclusion and refuses to talk.' POOR: 'Document refusal.' BETTER: 'Offer debrief later when settled, explain it is not punitive, ask preferred staff/support person, and still update the prevention plan from staff observations.'",
      ],
      commonTrap:
        "Debriefing staff only and not the patient — and accepting patient refusal as closing the debrief obligation.",
    },
    {
      id: "s12",
      order: 12,
      title: "Complaint After Restraint",
      colorTag: "red",
      explanation:
        "This is one of the most important exam patterns. Defending the team without investigating is both clinically wrong and mark-losing.",
      keyPoints: [
        "WHAT TO DO: ensure patient safe now, review physical and psychological harm, acknowledge distress, offer open disclosure if harm occurred, explain complaint process, preserve records, review incident report/notes/policy, speak with staff involved, avoid blaming before review, meet patient/family with senior staff.",
        "ALSO: explain what is known and unknown, apologise or express regret where appropriate, identify service improvements, document and close loop.",
        "MEQ TRAP — STEM: 'Parents complain their son was pinned down by six staff and not medically reviewed.' POOR: 'Explain staff acted for safety.' BETTER: 'Acknowledge distress; review whether alternatives were attempted, restraint duration, sedation monitoring, medical review and family communication; apologise for suboptimal aspects if clear; explain review and action plan.'",
        "Open disclosure runs concurrently with the complaint process — not after it is resolved.",
      ],
      meqApplication:
        "Mention complaint process, open disclosure if harm occurred, incident review, staff support and system improvement — all five streams should appear in the MEQ answer.",
      commonTrap:
        "Defending the team without investigating.",
    },
    {
      id: "s13",
      order: 13,
      title: "Staff Using Threat of Restraint",
      colorTag: "amber",
      explanation:
        "Threatening restraint is not de-escalation. It is coercive and often escalates conflict. Calling it 'communication style' understates a governance problem.",
      keyPoints: [
        "EXAMPLES: 'Take this or we will hold you down.' / 'Stop shouting or you'll go to seclusion.' / 'Security will sort you out.' / 'You know what happens if you don't cooperate.'",
        "CONSULTANT RESPONSE: stop the practice, speak privately with staff, understand staff fear or resource pressure, reinforce policy, teach de-escalation scripts, support staff safety, audit restrictive-practice language and culture, address repeated conduct through supervision or management.",
        "MEQ TRAP — STEM: 'A nurse says threatening seclusion works.' POOR: 'Discuss communication style.' BETTER: 'Name it as coercive practice and a governance concern — it may damage trust, escalate aggression and breach trauma-informed/least restrictive principles. Provide immediate correction, training and culture review.'",
        "If one nurse is doing this, it may be individual anxiety. If multiple staff are doing this, it is a ward culture problem requiring leadership intervention.",
      ],
      commonTrap:
        "Ignoring coercive language because 'no restraint actually happened.'",
    },
    {
      id: "s14",
      order: 14,
      title: "ED Restrictive Practice",
      colorTag: "red",
      explanation:
        "ED is high risk because agitation may be psychiatric, medical, substance-related or environmental. The most dangerous trap is treating intoxication or delirium as simple psychiatric agitation.",
      keyPoints: [
        "ALWAYS CONSIDER IN ED: delirium, intoxication, withdrawal, head injury, hypoxia, hypoglycaemia, pain, sepsis, medication toxicity, trauma, communication barriers.",
        "IN ED: reduce stimulation, use one communicator, assess medical causes, involve family/support person if safe, offer oral medication, ensure resuscitation and monitoring capacity before IM sedation, clarify legal authority, document and hand over to inpatient/community team.",
        "MEQ TRAP — STEM: 'ED asks psychiatry to sedate and clear an aggressive patient.' POOR: 'Give IM medication and arrange psych admission.' BETTER: 'Clarify immediate safety, assess medical causes of agitation, ensure ED monitoring/resuscitation, attempt de-escalation/oral medication, use least restrictive emergency sedation only if necessary, and document legal/clinical rationale.'",
        "Psychiatry cannot authorise sedation in ED without first ruling out medical causes — 'sedate and clear' is not a clinical order.",
      ],
      commonTrap:
        "Treating intoxication or delirium as simple psychiatric agitation.",
    },
    {
      id: "s15",
      order: 15,
      title: "Youth Setting",
      colorTag: "teal",
      explanation:
        "Restrictive practice in youth requires extra caution because of developmental stage, trauma history, child protection involvement, family/whānau role and higher risk of long-term service mistrust.",
      keyPoints: [
        "CONSIDER: developmental stage, trauma history, child protection involvement, family/whānau role, attachment needs, sensory needs, school/care context, consent/capacity complexity, higher risk of long-term service mistrust.",
        "TRY FIRST: trusted adult, parent/guardian/whānau if safe, cultural worker, quiet safe room, sensory strategies, food/blanket, time and explanation, oral medication where appropriate, paediatric review.",
        "MEQ TRAP — STEM: 'A 15-year-old with first episode psychosis is restrained and parents complain.' POOR: 'Explain psychosis causes aggression.' BETTER: 'Review trauma/developmental needs, whether less restrictive alternatives were tried, whether parents were informed appropriately, medical review after restraint, future engagement risk and youth-specific prevention plan.'",
        "Child protection obligations apply — parents have legal rights regarding notification that differ from adult settings.",
      ],
      commonTrap:
        "Using an adult restrictive-practice response in a young person without developmental or trauma formulation.",
    },
    {
      id: "s16",
      order: 16,
      title: "Older Adult Setting",
      colorTag: "teal",
      explanation:
        "Agitation in an older adult is delirium until proven otherwise. Restraint may worsen the very thing it is intended to manage.",
      keyPoints: [
        "RESTRICTIVE PRACTICE MAY WORSEN: delirium, falls, aspiration, pressure injury, immobility, fear, cognitive decline, carer distress.",
        "ASSESS FIRST: pain, infection, constipation, urinary retention, hypoxia, medication side effects, dehydration, sensory impairment, sleep deprivation.",
        "MEQ TRAP — STEM: 'An 82-year-old in ED is restrained for wandering and trying to leave.' POOR: 'Use restraint for falls prevention.' BETTER: 'Restraint may worsen harm — assess delirium/medical causes, use close observation, family presence, sensory aids, low-stimulus environment and medical treatment; restraint only if immediate serious harm cannot be managed otherwise.'",
        "Falls prevention is not a clinical justification for restraint — it may increase falls and injury.",
      ],
      commonTrap:
        "Using restraint for convenience or falls prevention in an older adult.",
    },
    {
      id: "s17",
      order: 17,
      title: "Intellectual Disability, Autism and Neurodevelopmental Settings",
      colorTag: "teal",
      explanation:
        "In intellectual disability and autism, behaviour is often communication. Attributing distress to 'challenging behaviour' without functional assessment is both clinically wrong and a governance failure.",
      keyPoints: [
        "ASSESS: pain, sensory overload, change in routine, communication difficulty, fear, trauma, constipation, seizure, medication adverse effect, unmet need, environmental trigger.",
        "USE: communication aids, carer input, sensory profile, positive behaviour support plan, familiar staff, predictable routine, low-arousal approach.",
        "MEQ TRAP — STEM: 'A patient with autism repeatedly hits the wall and is restrained.' POOR: 'Use restraint to prevent property damage.' BETTER: 'Assess sensory overload, pain, communication needs and environmental triggers — use low-arousal approach, sensory plan, carer input and positive behaviour support. Restraint only if immediate harm risk.'",
        "Property damage alone is not sufficient justification for restraint — immediate harm to self or others is the threshold.",
      ],
      commonTrap:
        "Attributing distress to 'challenging behaviour' without assessing communication, sensory and medical needs.",
    },
    {
      id: "s18",
      order: 18,
      title: "Forced Medication / Rapid Tranquillisation",
      colorTag: "red",
      explanation:
        "Forced medication is one of the highest-risk areas. Pacing and refusing oral medication alone is not sufficient justification for IM sedation.",
      keyPoints: [
        "BEFORE GIVING IM MEDICATION CHECK: indication, immediate risk, alternatives tried, consent and capacity, legal authority, allergies, current medications, intoxication, pregnancy, respiratory risk, cardiac/QTc risk, older adult/frailty, monitoring capacity, resuscitation availability.",
        "PREFER: oral medication, known effective medication, lowest effective dose, avoid unnecessary combinations, rapid review after effect.",
        "MEQ TRAP — STEM: 'A patient refuses oral olanzapine and is pacing. Staff ask for IM medication.' POOR: 'Give IM olanzapine.' BETTER: 'Pacing alone is not enough — assess immediate risk, attempt de-escalation and oral alternatives, check legal basis, medical risks and monitoring capacity; use IM only if imminent serious harm.'",
        "Oral refusal does not automatically justify IM administration — the clinical threshold is imminent serious harm, not patient non-compliance.",
      ],
      commonTrap:
        "Using IM sedation as a shortcut when oral medication was possible.",
    },
    {
      id: "s19",
      order: 19,
      title: "Reducing Seclusion Rates",
      colorTag: "green",
      explanation:
        "Seclusion rate reduction is the governance version of this topic. It is a service-level leadership task, not an individual nursing issue.",
      keyPoints: [
        "SIX CORE STRATEGIES: (1) Leadership towards organisational change, (2) Use of data, (3) Workforce development, (4) Prevention tools, (5) Consumer roles, (6) Debriefing.",
        "GOOD SERVICE-LEVEL PLAN: collect baseline data, identify high-use times/wards/patient groups, review recent incidents, involve consumers and carers, train staff in de-escalation, introduce sensory modulation, improve ward environment, implement individual prevention plans, require post-incident debrief, review every episode in governance, re-audit rates/duration/harm.",
        "MEQ TRAP — STEM: 'Service director asks how to reduce seclusion rates.' POOR: 'Educate staff.' BETTER: 'Use leadership, data, workforce training, consumer involvement, prevention tools, debrief, environmental change and re-audit.'",
        "Staff education alone reliably fails without structural, environmental and cultural change.",
      ],
      meqApplication:
        "If asked how to reduce seclusion rates, name all Six Core Strategies plus Safewards plus environmental and consumer involvement — any gap is a lost mark.",
      commonTrap:
        "Treating seclusion reduction as an individual nursing issue rather than a service culture and governance issue.",
    },
    {
      id: "s20",
      order: 20,
      title: "Hidden Examiner Traps",
      colorTag: "amber",
      explanation:
        "These are the ten most common reasoning errors in restrictive practice MEQs. Each represents a specific cognitive shortcut that loses marks.",
      keyPoints: [
        "TRAP 1: 'The patient was aggressive, so restraint is obviously justified.' CORRECTION: Show imminent risk, alternatives attempted, proportionality, legal authority, monitoring and review.",
        "TRAP 2: 'Staff safety means use restraint.' CORRECTION: Staff safety matters, but include de-escalation, least restrictive option, dignity, trauma, physical-health monitoring and governance.",
        "TRAP 3: 'Involuntary patient means forced medication is allowed.' CORRECTION: You still need legal authority, indication, capacity/refusal, emergency threshold, monitoring and documentation.",
        "TRAP 4: 'Sedated means safe.' CORRECTION: Sedated patients can die — monitor airway, breathing, circulation, oxygen saturation and consciousness.",
        "TRAP 5: 'Debrief is optional.' CORRECTION: Debrief is part of repair and prevention — it is a clinical and governance obligation.",
        "TRAP 6: 'Complaint after restraint means defend staff.' CORRECTION: Support staff, but review fairly and acknowledge harm if present.",
        "TRAP 7: 'Reducing seclusion is about individual nurse behaviour.' CORRECTION: It is culture, data, environment, staffing, training, leadership, consumer involvement and governance.",
        "TRAP 8: 'Older adult agitation is psychiatric.' CORRECTION: Often medical — think delirium, pain, infection, urinary retention, constipation and medication effects.",
        "TRAP 9: 'Youth restraint is same as adult restraint.' CORRECTION: Add development, trauma, family/whānau, child protection, paediatric review and long-term engagement.",
        "TRAP 10: 'List-only answers are enough.' CORRECTION: For Describe, Outline and Discuss stems, explain and justify.",
      ],
      meqApplication:
        "Use this section as a checklist before submitting any restrictive practice answer — if your answer contains any of these ten reasoning shortcuts, revise it.",
    },
    {
      id: "s21",
      order: 21,
      title: "MEQ Example 1: Restraint After Aggression",
      colorTag: "blue",
      explanation:
        "Stem: A 28-year-old man with schizophrenia assaults another patient. Staff restrain him prone for 20 minutes and give IM medication. He is now sedated. Question: Describe your immediate management.",
      keyPoints: [
        "EXAMINER WANTS: safety of victim, patient and ward; physical review after restraint; monitoring after IM sedation; review of psychosis/intoxication/delirium; legal and policy basis; documentation; family/carer if appropriate; incident report; debrief later.",
        "TRAP: only focusing on medication for psychosis.",
        "MODEL ANSWER DIRECTION: 'I would first ensure everyone is safe, treat injuries, review both the victim and the restrained patient, monitor airway/breathing/circulation after sedation, check legal authority and documentation, notify senior staff, complete incident reporting and plan patient/staff debrief.'",
        "Prone restraint for 20 minutes requires immediate medical review — positional asphyxia risk.",
      ],
    },
    {
      id: "s22",
      order: 22,
      title: "MEQ Example 2: Complaint After Restraint",
      colorTag: "blue",
      explanation:
        "Stem: Parents complain their son was 'pinned down by six staff' and not medically reviewed. Question: Discuss how you would respond.",
      keyPoints: [
        "EXAMINER WANTS: acknowledge distress, open disclosure if harm occurred, complaint pathway, review incident report and policy, identify suboptimal care, support staff, prevent disengagement, action plan, governance review.",
        "TRAP: defending the team without investigating.",
        "MODEL ANSWER DIRECTION: 'I would acknowledge the parents' distress, ensure the patient is safe, review for injury/trauma, explain the complaint and open disclosure pathways, review notes and policy, speak to staff, avoid premature blame, and identify governance actions to prevent recurrence.'",
        "Open disclosure is triggered by harm — not by whether the complaint is valid.",
      ],
    },
    {
      id: "s23",
      order: 23,
      title: "MEQ Example 3: Staff Threaten Seclusion",
      colorTag: "blue",
      explanation:
        "Stem: You hear a nurse tell a patient, 'If you don't behave, you'll be secluded again.' Question: Outline your response.",
      keyPoints: [
        "EXAMINER WANTS: immediate correction if unsafe, private staff feedback, recognition of coercive language, support for staff anxiety, de-escalation training, culture change, documentation if repeated or serious, governance if systemic.",
        "TRAP: calling it 'communication style' only.",
        "MODEL ANSWER DIRECTION: 'I would stop the coercive language, ensure the patient is settled, speak privately with the nurse, validate staff safety concerns, clarify that seclusion cannot be used as threat or punishment, and address training/culture if this reflects ward practice.'",
        "One incident may reflect individual anxiety — a pattern reflects ward culture requiring leadership intervention.",
      ],
    },
    {
      id: "s24",
      order: 24,
      title: "MEQ Example 4: ED Forced Medication",
      colorTag: "blue",
      explanation:
        "Stem: ED staff ask you to authorise IM sedation for an intoxicated patient yelling at security. Question: Describe your approach.",
      keyPoints: [
        "EXAMINER WANTS: immediate risk assessment, medical causes and intoxication, de-escalation, oral medication, legal authority, monitoring and resuscitation capacity, careful prescribing, handover, documentation.",
        "TRAP: treating intoxication as simple psychiatric agitation.",
        "MODEL ANSWER DIRECTION: 'I would clarify immediate risk, assess for delirium/intoxication/medical causes, reduce stimulation, use one communicator, offer oral medication if safe, check legal authority, ensure monitoring/resuscitation capacity before IM sedation, and document rationale and handover.'",
        "Intoxication changes the pharmacology — benzodiazepines and antipsychotics carry higher respiratory risk with alcohol or other sedating substances.",
      ],
    },
    {
      id: "s25",
      order: 25,
      title: "MEQ Example 5: Older Adult Restraint",
      colorTag: "blue",
      explanation:
        "Stem: An 85-year-old with dementia is restrained overnight after wandering and calling out. Question: Discuss concerns and management.",
      keyPoints: [
        "EXAMINER WANTS: delirium/pain/medical assessment, restraint harms, family/familiar staff, sensory aids, behavioural plan, medication review, least restrictive alternatives, governance review.",
        "TRAP: using restraint for falls prevention.",
        "MODEL ANSWER DIRECTION: 'I would treat this as a high-risk restrictive practice in a vulnerable older person — I would assess delirium/pain/infection/retention/constipation, review medication burden, use family/sensory/environmental alternatives, review injury and document/report the event.'",
        "Overnight restraint in an older adult is a serious governance event — it requires incident reporting and medical review regardless of whether injury occurred.",
      ],
    },
    {
      id: "s26",
      order: 26,
      title: "MEQ Example 6: Seclusion Rate Reduction",
      colorTag: "blue",
      explanation:
        "Stem: A new ward has double the state average seclusion rate. Staff say the patients are 'more acute.' Question: Describe your consultant leadership plan.",
      keyPoints: [
        "EXAMINER WANTS: baseline data, compare case mix, review incidents, consumer/carer input, staff training, trauma-informed care, Safewards/Six Core Strategies, environmental review, debrief compliance, governance dashboard, re-audit.",
        "TRAP: accepting 'more acute patients' without data.",
        "MODEL ANSWER DIRECTION: 'I would frame this as a clinical governance issue, review seclusion data and case mix, engage staff and consumers, implement Six Core Strategies/Safewards, improve prevention plans and debrief, report to governance and re-audit rates, duration and harm.'",
        "Case mix is a hypothesis, not an explanation — the data either supports or refutes it. Act on data, not narrative.",
      ],
    },
    {
      id: "s27",
      order: 27,
      title: "Command Word Discipline",
      colorTag: "amber",
      explanation:
        "Restrictive-practice stems often include command-word traps. Writing a list when the question says 'Discuss' is the most common mark-losing error.",
      keyPoints: [
        "LIST: write concise items only — e.g. 'De-escalation. Legal authority. Medical review. Incident report. Debrief.'",
        "OUTLINE (list and justify): each point needs a because-clause — e.g. 'Arrange medical review — because physical restraint and IM sedation can cause injury, respiratory compromise and over-sedation.'",
        "DESCRIBE (list and explain): explain mechanism or relevance — e.g. 'Monitor airway, breathing and consciousness — because rapid tranquillisation and prone restraint can cause respiratory compromise, aspiration and positional asphyxia.'",
        "DISCUSS (name tension and take position): e.g. 'There is tension between staff safety and coercion minimisation. A defensible position is brief, legally authorised restraint only if imminent harm cannot be managed by less restrictive means, because restraint itself can cause physical and psychological harm.'",
      ],
      commonTrap:
        "Giving a list when the question asks to describe, outline or discuss — command-word mismatch reliably loses marks.",
    },
    {
      id: "s28",
      order: 28,
      title: "Before / During / After Framework",
      colorTag: "green",
      explanation:
        "Use this framework for every restrictive-practice scenario. Only describing 'during' and missing before/after responsibilities is a consistent structure failure.",
      keyPoints: [
        "BEFORE: assess immediate risk, assess medical causes, attempt de-escalation, offer least restrictive alternatives, check capacity/consent/legal authority, consider trauma/culture/vulnerability, ensure trained staff and safe environment.",
        "DURING: use minimum force for shortest time, preserve dignity, explain what is happening, monitor airway/breathing/circulation/mental state, avoid unsafe positioning, use medication carefully, review continuously for release.",
        "AFTER: arrange medical review, document rationale/alternatives/monitoring, complete incident/seclusion/restraint reporting, debrief patient, debrief staff, inform family/carer where appropriate, update prevention plan, review through governance if serious, re-audit and improve system if pattern.",
        "The After phase is where most marks are lost — it contains at least five separate obligations each worth independent marks.",
      ],
      commonTrap:
        "Only describing 'during' and missing before/after responsibilities.",
    },
    {
      id: "s29",
      order: 29,
      title: "Zero-Mark Phrases to Avoid",
      colorTag: "red",
      explanation:
        "These phrases signal registrar-level thinking or governance blindness. Replace every one with consultant-level language.",
      keyPoints: [
        "AVOID: 'Control the patient.' → USE: 'Immediate safety using least restrictive option.'",
        "AVOID: 'Put them in seclusion until calm.' → USE: 'Least restrictive intervention with continuous review for release.'",
        "AVOID: 'Staff had no choice.' → USE: Document alternatives attempted and why insufficient.",
        "AVOID: 'Behavioural management.' → USE: 'Clinical and governance intervention.'",
        "AVOID: 'Sedate PRN.' → USE: Specify indication, legal authority, dose, monitoring and review.",
        "AVOID: 'Patient manipulative.' → USE: Functional formulation and least restrictive plan.",
        "AVOID: 'No need to debrief because patient refused.' → USE: Offer debrief later; update prevention plan from staff observations regardless.",
        "AVOID: 'Use restraint because the ward is short-staffed.' → NEVER justified.",
        "AVOID: 'The patient is involuntary so forced medication is fine.' → Still requires legal authority, indication, capacity/refusal, emergency threshold, monitoring.",
        "AVOID: 'Let them sleep it off.' → USE: Airway, breathing, monitoring, medical review.",
        "AVOID: 'Seclusion works for him.' → USE: Last resort only — pre-emptive seclusion is a governance failure.",
      ],
    },
    {
      id: "s30",
      order: 30,
      title: "Consultant Upgrade Box",
      colorTag: "green",
      explanation:
        "These pairs show the difference between registrar-level and consultant-level answers. The upgrade adds legal authority, monitoring, debrief and governance to every clinical response.",
      keyPoints: [
        "REGISTRAR: 'Use IM medication and observe.' CONSULTANT: 'Use least restrictive emergency intervention only if necessary, with legal authority, trained staff, monitoring, medical review, documentation, debrief and governance review.'",
        "REGISTRAR: 'Seclude because he is aggressive.' CONSULTANT: 'Assess imminent risk, attempt de-escalation and alternatives, use seclusion only if necessary and lawful, monitor/review frequently, end as soon as safe and update prevention plan.'",
        "REGISTRAR: 'Explain to family that staff acted for safety.' CONSULTANT: 'Acknowledge distress, review harm and incident records, offer open disclosure if harm occurred, explain what is known and unknown, support staff, and implement service learning.'",
        "The upgrade is not about adding more words — it is about adding the governance and dignity layer that the examiner is specifically looking for.",
      ],
      meqApplication:
        "Before submitting any restrictive practice answer, ask: 'Does this read like registrar or consultant level?' If registrar, add: legal authority, monitoring, debrief and governance review.",
    },
    {
      id: "s31",
      order: 31,
      title: "Final Summary to Memorise",
      colorTag: "green",
      explanation:
        "This paragraph is reusable in MEQ stems about restraint after aggression, ED sedation, seclusion review, family complaint, youth restraint, older adult restraint and seclusion-rate reduction.",
      keyPoints: [
        "BEFORE: 'I would first attempt de-escalation and least restrictive alternatives, assess medical causes, check capacity and legal authority, and use trained staff only if immediate harm cannot otherwise be prevented.'",
        "DURING: 'I would preserve dignity, minimise trauma and monitor physical and mental state.'",
        "AFTER: 'I would arrange medical review, document clearly, report the incident, debrief patient and staff, communicate with family where appropriate, update the prevention plan and review the episode through governance.'",
        "SERVICE LEVEL: 'Reduction requires leadership, data, trauma-informed training, consumer involvement, Safewards/Six Core Strategies, environmental improvements and re-audit.'",
        "FULL PARAGRAPH: 'Restrictive practice is an emergency safety intervention, not treatment. I would first attempt de-escalation and least restrictive alternatives, assess medical causes, check capacity and legal authority, and use trained staff only if immediate harm cannot otherwise be prevented. During the intervention I would preserve dignity, minimise trauma and monitor physical and mental state. Afterward I would arrange medical review, document clearly, report the incident, debrief patient and staff, communicate with family where appropriate, update the prevention plan and review the episode through governance. At service level, reduction requires leadership, data, trauma-informed training, consumer involvement, Safewards/Six Core Strategies, environmental improvements and re-audit.'",
      ],
      meqApplication:
        "This paragraph should be reusable in MEQ stems about restraint after aggression, ED sedation, seclusion review, family complaint, youth restraint, older adult restraint and seclusion-rate reduction.",
    },
  ],
};

export const CONFIDENTIALITY: Note = {
  id: "confidentiality",
  title: "Confidentiality, Privacy and Information Sharing in Psychiatry",
  category: "Ethics / Legal Reasoning / Communication / Clinical Governance",
  description:
    "A consultant-level framework for managing confidentiality, privacy and information sharing in psychiatry, including family requests, GP handover, NGO collateral, school risk requests, police requests, third-party warning, child protection, wrong-recipient discharge summaries, ED privacy breaches, social media breaches and patient recording staff.",
  sections: [
    {
      id: "s01",
      order: 1,
      title: "Core Principle",
      colorTag: "blue",
      explanation:
        "Confidentiality is central to psychiatric care because patients disclose highly sensitive information: trauma, sexuality, violence, self-harm, psychosis, substance use, family conflict, forensic history and shame. But confidentiality is not absolute.",
      keyPoints: [
        "GOOD CONSULTANT ANSWER: 'I would seek the patient's consent first wherever possible, clarify what information is needed and why, share only the minimum necessary information, and document the rationale. If there is serious risk to the patient, children, identifiable others or public safety, limited disclosure may be justified or required.'",
        "Consent first where possible — confidentiality supports therapeutic alliance.",
        "Confidentiality is not absolute — safety and legal duties may justify limited disclosure.",
        "Disclosure should be proportionate and documented.",
        "CRITICAL DISTINCTION: receiving collateral and disclosing information are different tasks with different thresholds.",
      ],
      commonTrap:
        "Either over-sharing everything or refusing all communication because of confidentiality — both extremes lose marks.",
    },
    {
      id: "s02",
      order: 2,
      title: "MEQ Decision Framework",
      colorTag: "blue",
      explanation:
        "Whenever information sharing appears in a stem, work through five questions: who is asking, what are they asking for, what is the legal or clinical basis, what is the minimum necessary disclosure, and what must be documented.",
      keyPoints: [
        "A. WHO IS ASKING? Patient, family/carer, parent/guardian, partner, GP, NGO/support worker, school, police, employer, legal agency, advocate, another treating team, media, social media/public forum.",
        "B. WHAT ARE THEY ASKING FOR? General update, diagnosis, medication, risk assessment, discharge plan, admission confirmation, capacity opinion, fitness to drive/work/school, risk clearance, records, collateral exchange, third-party warning, child-safety information.",
        "C. LEGAL/CLINICAL BASIS? Patient consent, implied consent for direct healthcare, serious risk, child protection, required by law, court/subpoena, Mental Health Act process, duty to protect/warn, clinical handover, privacy breach response, or no lawful basis.",
        "D. MINIMUM NECESSARY DISCLOSURE: share only what is needed. Do NOT disclose full diagnosis if not needed, trauma history if not relevant, unrelated substance/sexual/forensic history, another patient's details, speculative risk opinions, family gossip, staff opinions or pejorative labels.",
        "E. DOCUMENT: request received, requester identity/role, information requested, patient consent or refusal, capacity if relevant, collateral received, risk assessment, legal/safety basis, what was and wasn't disclosed, to whom, when, advice sought, patient informed, follow-up plan.",
      ],
      commonTrap:
        "Answering 'yes' or 'no' to disclosure without clarifying purpose, authority and minimum necessary information.",
    },
    {
      id: "s03",
      order: 3,
      title: "Consent First",
      colorTag: "green",
      explanation:
        "The default position is to seek the patient's consent before disclosing information. Consent is not all-or-nothing — patients can consent to some disclosures and not others.",
      keyPoints: [
        "CONSENT MUST BE: informed, specific enough, current, voluntary, capacity-based and documented.",
        "ASK: 'Who can we speak to?' / 'What can we share?' / 'What should we not share?' / 'Can we receive information from them even if you do not want us to disclose details?' / 'Are there safety concerns if we contact them?'",
        "NUANCED CONSENT EXAMPLES: patient may agree for GP to know about medication but not tell family about trauma; young person may agree to school supports but not disclosure of self-harm details.",
        "MEQ TRAP — STEM: 'Patient says Do not tell my wife anything.' POOR: 'Do not speak to the wife.' BETTER: 'Respect refusal of disclosure but clarify whether collateral can be received; explain confidentiality limits; consider limited disclosure only if serious safety risk to wife, children or public.'",
      ],
      commonTrap:
        "Treating consent as all-or-nothing — a patient's refusal of disclosure does not prevent receiving collateral.",
    },
    {
      id: "s04",
      order: 4,
      title: "Receiving Collateral vs Disclosing Information",
      colorTag: "teal",
      explanation:
        "This is one of the highest-yield MEQ distinctions. You can usually receive information from family, GP, school, NGO or police without disclosing confidential patient information — these are two entirely different actions with different thresholds.",
      keyPoints: [
        "RECEIVING COLLATERAL: you can usually listen to information from family, GP, school, NGO or police without breaching confidentiality. USEFUL PHRASE: 'I may not be able to share details without the patient's consent, but I can listen to your concerns and include them in the risk assessment.'",
        "COLLATERAL IS ESPECIALLY IMPORTANT WHEN: family reports suicide risk, partner reports violence, school reports child-safety concerns, NGO reports deterioration, GP reports medication non-adherence, police report threats, pharmacy reports unsafe medication use.",
        "DISCLOSING INFORMATION requires consent or another lawful/ethical basis: continuity of care, serious risk, child protection, public safety, legal requirement, Mental Health Act process, duty to warn/protect, or approved internal governance.",
        "MEQ TRAP — STEM: 'A mother phones saying her son is psychotic and threatening his neighbour. Patient refused family contact.' POOR: 'Cannot speak to mother due to confidentiality.' BETTER: 'Receive her collateral, clarify the threat, assess risk urgently, document, and consider limited disclosure or action if there is serious risk to an identifiable person.'",
      ],
      commonTrap:
        "Refusing to receive collateral because the patient refused disclosure — these are separate obligations.",
    },
    {
      id: "s05",
      order: 5,
      title: "Minimum Necessary Disclosure",
      colorTag: "green",
      explanation:
        "When disclosure is justified, share the least information needed to achieve the safety or care purpose. A valid reason to disclose is not permission to disclose everything.",
      keyPoints: [
        "GP DISCHARGE PLAN — APPROPRIATE: diagnosis/formulation, medication changes, monitoring requirements, side effects, risk plan, relapse signs, follow-up responsibilities. NOT APPROPRIATE: unnecessary trauma/sexuality/family conflict/unrelated forensic details.",
        "SCHOOL — APPROPRIATE: safety plan, supervision needs, re-entry plan, who to contact if risk escalates, reasonable adjustments. USUALLY NOT APPROPRIATE: full diagnosis, detailed trauma history, medication details unless necessary, family allegations.",
        "POLICE — APPROPRIATE: immediate risk information, identifiable threat, relevant description/location, legal status needed for safe return, minimum information to prevent harm. USUALLY NOT APPROPRIATE: full psychiatric history, irrelevant personal details, speculative labels.",
        "The valid reason for disclosure (safety, child protection, legal requirement) defines the scope — it does not expand the scope to the whole file.",
      ],
      commonTrap:
        "Treating a valid reason to disclose as permission to disclose everything.",
    },
    {
      id: "s06",
      order: 6,
      title: "Serious and Imminent Risk / Serious Threat",
      colorTag: "red",
      explanation:
        "Confidentiality can be overridden when disclosure is necessary to lessen or prevent a serious threat to life, health or safety. This requires structured reasoning — not reflexive disclosure.",
      keyPoints: [
        "POSSIBLE TARGETS OF RISK: patient, child, partner, identifiable third party, staff, public, school community, driving/transport users, vulnerable adult.",
        "QUESTIONS BEFORE DISCLOSURE: Is the risk serious? Is it imminent or foreseeable? Is the person identifiable? Can risk be managed by less intrusive means? Can the patient be persuaded to consent? What information is strictly necessary? Who is best placed to reduce the risk? Should police/child protection/family/school/victim be notified? Have I sought senior/legal advice if time allows? Have I documented the reasoning?",
        "MEQ PHRASE: 'I would first seek consent, but if there is a serious and foreseeable risk to an identifiable person, confidentiality is not absolute. I would make a proportionate disclosure to the person or agency best able to reduce the risk and document the rationale.'",
        "Serious + foreseeable + identifiable = the three tests for overriding confidentiality on safety grounds.",
      ],
      commonTrap:
        "Hiding behind confidentiality when there is serious foreseeable harm to an identifiable person.",
    },
    {
      id: "s07",
      order: 7,
      title: "Duty to Warn / Duty to Protect",
      colorTag: "red",
      explanation:
        "This appears in many psychiatry exams because it tests autonomy, confidentiality and public safety simultaneously. The duty to warn/protect requires structured decision-making, not automatic disclosure.",
      keyPoints: [
        "WHEN TO CONSIDER: specific threat, identifiable victim, escalating psychosis or paranoia, access to weapons, history of violence, stalking or domestic violence, command hallucinations, fixation on school/workplace/person, loss of impulse control, substance intoxication, discharge or leave increases opportunity.",
        "POSSIBLE ACTIONS: urgent review, increase observation, cancel leave or discharge, use Mental Health Act if criteria met, notify clinical director/senior, notify police, warn identifiable victim if necessary, inform relevant mental health team, involve family/carer if safety requires, document decision-making, seek medicolegal advice if time allows.",
        "MEQ TRAP — STEM: 'Patient says When I leave, I will kill my ex-partner but refuses consent.' POOR: 'Maintain confidentiality.' BETTER: 'This is a serious threat to an identifiable person — urgently assess risk, consider compulsory treatment/leave restriction, notify senior staff, consider police and warning the ex-partner if necessary, share minimum information required for safety and document the rationale.'",
        "DUTY TO PROTECT BOX: 'There is tension between confidentiality and duty to protect. A defensible consultant position is to seek consent first, but if there is serious foreseeable harm to an identifiable person, make a proportionate disclosure to the person or agency best able to reduce risk.'",
      ],
      commonTrap:
        "Only documenting the threat but not acting to protect the identifiable person.",
    },
    {
      id: "s08",
      order: 8,
      title: "Child Protection and Child-Safety Information Sharing",
      colorTag: "red",
      explanation:
        "Child safety is a major confidentiality exception. A child's safety may override the parent's preference for non-disclosure. Treating child safety as a family preference issue rather than a safeguarding issue is a consistent mark-losing error.",
      keyPoints: [
        "CONSIDER CHILD PROTECTION ADVICE OR NOTIFICATION WHEN: child exposed to violence/overdose/psychosis/intoxication/unsafe driving, child incorporated into delusions, unsafe school pick-up, neglect risk, family violence, parent's relapse affects caregiving, other parent cannot protect, adolescent at risk of exploitation or abuse, young person refuses family contact but safety risk is serious.",
        "MEQ PHRASE: 'I would explain confidentiality limits and consider child-protection advice or notification because the child's safety may override the parent's preference for non-disclosure.'",
        "SCHOOL LIAISON — CLARIFY: what school needs to know to keep the child safe, whether consent is available, whether child protection or safety overrides consent, who should communicate, what should not be disclosed. Do not give school a broad psychiatric report unless there is a clear basis.",
        "Child protection notification is mandatory in most jurisdictions once a threshold is reached — discretion ends at that point.",
      ],
      commonTrap:
        "Treating child safety as a family preference issue rather than a safeguarding issue.",
    },
    {
      id: "s09",
      order: 9,
      title: "Family Wants Information",
      colorTag: "teal",
      explanation:
        "This is the commonest practical scenario. Start with patient consent and capacity, then consider family role, safety issues and what family actually needs to know.",
      keyPoints: [
        "START WITH: patient consent, patient capacity, family role (carer/support/collateral source/potential victim/source of risk), safety issues, what family needs to know, what patient does not want shared.",
        "WITHOUT CONSENT — YOU CAN USUALLY SAY: 'I can listen to your concerns.' / 'I will pass this to the treating team.' / 'If there is an immediate risk, call emergency services.' / 'I cannot confirm details without consent.' / 'I can explain general service processes.'",
        "WITH CONSENT — MAY SHARE: diagnosis/formulation, relapse signs, medication purpose/side effects, crisis plan, follow-up, how family can support, when to escalate.",
        "WITHOUT CONSENT BUT SERIOUS RISK EXISTS — share only what is needed for safety, e.g.: 'Do not allow unsupervised child pickup.' / 'Call emergency services if he attends intoxicated and threatening.' / 'Contact crisis team if he stops sleeping and becomes threatening.'",
        "MEQ TRAP — STEM: 'Family asks for diagnosis and medication because patient is refusing discharge planning.' POOR: 'Tell them everything because they are family.' BETTER: 'Seek consent; if refused, receive collateral and provide general support, but only share specific information if required for serious safety or legal reasons.'",
      ],
      commonTrap:
        "Confusing family distress with automatic permission to disclose.",
    },
    {
      id: "s10",
      order: 10,
      title: "GP Wants Discharge Plan",
      colorTag: "green",
      explanation:
        "This is not usually a privacy problem if the GP is part of ongoing care — it is a safe handover requirement. Treating GP handover as optional despite high-risk medication or risk follow-up is a clinical governance failure.",
      keyPoints: [
        "SHARE WITH GP: diagnosis and formulation, admission reason, risk formulation, medication changes, monitoring requirements, abnormal results, side effects to monitor, relapse signs, follow-up dates, crisis plan, who is responsible for bloods/results, contact details for urgent advice.",
        "MEQ TRAP — STEM: 'Patient refuses GP letter after discharge on lithium.' POOR: 'Respect refusal and discharge.' BETTER: 'Explore reasons, explain that GP communication is needed for safe monitoring, assess capacity, consider whether limited disclosure is necessary to prevent serious harm, arrange alternative monitoring if GP contact is refused, and document the risk-benefit decision.'",
        "Lithium, clozapine, high-dose antipsychotics and other high-risk medications require monitoring — refusing GP communication is a clinical risk, not just a preference.",
        "If the patient lacks capacity or the risk is serious enough, limited disclosure for safe medical follow-up may be justified without consent.",
      ],
      commonTrap:
        "Treating GP handover as optional despite high-risk medication or risk follow-up needs.",
    },
    {
      id: "s11",
      order: 11,
      title: "NGO / Support Worker Emails Collateral",
      colorTag: "teal",
      explanation:
        "NGOs often provide valuable information but may blur clinical roles. The response involves receiving their collateral appropriately and sharing only what the NGO needs for safe support — not the full clinical record.",
      keyPoints: [
        "RECEIVING NGO INFORMATION — CAN RECEIVE: missed appointments, functional decline, housing risk, substance use, threats, disengagement, child-safety concerns, medication non-adherence, deterioration in self-care.",
        "DISCLOSING TO NGO — CLARIFY: patient consent, NGO role, information-sharing agreement, what the NGO needs for safe support, what clinical information is unnecessary, escalation pathway, whether NGO is being asked to carry clinical risk.",
        "GOOD SHARED-CARE DISCLOSURE — APPROPRIATE: risk triggers, what to do if deterioration occurs, crisis team number, appointment plan, boundaries and after-hours rules, safe engagement strategies. USUALLY INAPPROPRIATE: full trauma history, detailed diagnosis if not needed, family secrets, forensic details not relevant, speculative formulation.",
        "MEQ TRAP — STEM: 'NGO worker sends repeated emails saying patient is manipulative and dangerous, asking for full file.' POOR: 'Send file to keep them informed.' BETTER: 'Receive concerns, clarify factual observations, seek patient consent for information sharing, share only what is necessary for the NGO role and risk escalation, and avoid transferring clinical risk to NGO.'",
      ],
      commonTrap:
        "Either ignoring NGO collateral or giving the NGO the whole file.",
    },
    {
      id: "s12",
      order: 12,
      title: "School Asks for Risk Clearance",
      colorTag: "amber",
      explanation:
        "Schools often ask for 'clearance' after self-harm, aggression, psychosis, eating disorder or threats. Do not provide 'no risk' guarantees — provide a functional safety plan instead.",
      keyPoints: [
        "DO NOT PROVIDE 'no risk' guarantees. INSTEAD PROVIDE: current clinical opinion within limits, functional recommendations, safety plan, warning signs, supervision needs, return-to-school plan, who to contact if concerns arise, review timeframe.",
        "WITH CONSENT — SHARE RELEVANT: attendance plan, safety supports, medication side effects affecting learning if necessary, crisis plan, accommodations, parent/guardian involvement.",
        "WITHOUT CONSENT — only share if safety/legal threshold is met: child protection, serious threat to student/staff, unsafe behaviour involving school, safeguarding issue.",
        "MEQ TRAP — STEM: 'School principal asks whether student is safe to return after threatening another student.' POOR: 'Tell school he has psychosis and is now low risk.' BETTER: 'With consent, provide a functional safety/re-entry plan; if serious risk to identifiable student, consider limited disclosure/police/school safety action; avoid blanket risk clearance.'",
      ],
      commonTrap:
        "Giving a 'safe to return' letter that overstates certainty.",
    },
    {
      id: "s13",
      order: 13,
      title: "Police Ask for Details",
      colorTag: "purple",
      explanation:
        "Police requests vary significantly. Do not automatically disclose everything — clarify the legal basis and safety purpose before deciding what to share.",
      keyPoints: [
        "CLARIFY: what information police request, whether there is consent, whether there is a warrant/subpoena/legal requirement, whether there is immediate serious risk, whether patient is missing or absconded, whether patient is involuntary and absent without leave, whether there is an identifiable threat, whether disclosure is necessary for enforcement or safety, whether senior/legal advice is needed.",
        "APPROPRIATE DISCLOSURE: patient description/location risk if absconded and high risk, information needed to locate missing high-risk patient, specific threat information, legal status relevant to safe return, immediate risk to officers/public.",
        "USUALLY AVOID: full history, unrelated trauma/sexual/substance details, speculative diagnosis, another patient's information.",
        "MEQ TRAP — STEM: 'Police ask Is he a schizophrenic? We need his full history.' POOR: 'Give diagnosis because police asked.' BETTER: 'Clarify legal basis and safety purpose; share only minimum necessary information for immediate risk management; document disclosure; seek senior/legal advice if not urgent.'",
      ],
      commonTrap:
        "Treating police request as automatic authority for full disclosure.",
    },
    {
      id: "s14",
      order: 14,
      title: "Patient Recording Staff",
      colorTag: "amber",
      explanation:
        "Patients may record consultations or staff interactions. The response must be proportionate — reacting punitively and escalating conflict is a governance problem in itself.",
      keyPoints: [
        "FIRST RESPONSE: stay calm, ask why they are recording, check local policy, clarify consent of staff/patients present, avoid discussing other patients, offer written summary if trust issue, consider whether recording escalates risk, document.",
        "IF RECORDING IN SHARED WARD OR ED — concern is higher because it may capture other patients, confidential conversations, staff identifiers, clinical information and distressed people.",
        "YOU MAY NEED TO: move to private area, ask them to stop recording others, explain privacy of other patients, involve senior nurse/security only if necessary and proportionate, avoid coercive response.",
        "MEQ TRAP — STEM: 'Patient records the ward round and captures another patient in distress.' POOR: 'Confiscate phone.' BETTER: 'Explain privacy concerns, move to private setting, ask recording to stop/delete content involving others according to policy, document, and escalate if there is ongoing privacy/safety risk.'",
      ],
      commonTrap:
        "Reacting punitively and escalating conflict rather than addressing privacy proportionately.",
    },
    {
      id: "s15",
      order: 15,
      title: "Staff Talking Loudly in ED or Waiting Room",
      colorTag: "red",
      explanation:
        "This is a privacy breach and dignity issue. Treating privacy humiliation as minor because no physical harm occurred is a consistent mark-losing error.",
      keyPoints: [
        "EXAMPLES: staff use birth name loudly after patient requested affirmed name, staff discuss diagnosis in waiting area, staff mention self-harm or sexual assault in corridor, family overhears medication details, security/triage loudly discuss risk history.",
        "RESPONSE: stop the conversation, move to private area, apologise or acknowledge distress, assess whether harm occurred, notify senior staff if significant, document, consider complaint/open disclosure pathway, staff education, review ED privacy processes.",
        "MEQ TRAP — STEM: 'Patient says Everyone heard them call me borderline and drug-seeking.' POOR: 'Reassure patient staff were busy.' BETTER: 'Acknowledge privacy and stigma concerns, move to private space, ensure clinical care continues, document, inform senior staff, offer complaint pathway and address staff culture.'",
        "Stigmatising language in a public space is both a privacy breach and a dignity/discrimination issue — both streams require response.",
      ],
      commonTrap:
        "Treating privacy humiliation as minor because no physical harm occurred.",
    },
    {
      id: "s16",
      order: 16,
      title: "Wrong-Recipient Discharge Summary",
      colorTag: "red",
      explanation:
        "This is both a privacy breach and a patient-safety risk. Correcting the clinical handover but ignoring the privacy breach is incomplete governance.",
      keyPoints: [
        "IMMEDIATE ACTIONS: identify what was sent and who received it, ask recipient to delete/return securely according to policy, notify privacy/governance unit, inform treating consultant or manager, assess risk of serious harm, notify patient if required by policy, resend correct summary, document, review system cause.",
        "SYSTEM CAUSES TO REVIEW: wrong patient selected, outdated GP details, no verification process, admin workload, EMR auto-fill problem, no second check for high-risk summaries, unclear responsibility.",
        "MEQ TRAP — STEM: 'Discharge summary with psychosis, AOD and forensic history sent to wrong GP.' POOR: 'Send correct one now.' BETTER: 'Contain breach, notify privacy/governance, assess serious harm, inform patient as required, correct handover, document, incident report and review EMR/verification process.'",
        "The disclosure of psychosis, AOD and forensic history to the wrong recipient may meet the notifiable data breach threshold — this requires privacy officer assessment.",
      ],
      commonTrap:
        "Correcting the clinical handover but ignoring the privacy breach governance stream.",
    },
    {
      id: "s17",
      order: 17,
      title: "Social Media Breach",
      colorTag: "red",
      explanation:
        "Social media is high-risk because 'de-identified' cases can still be identifiable. Deleting the post does not fix the breach — the information has already been disclosed.",
      keyPoints: [
        "EXAMPLES: staff posts 'wild night on psych ward' with details, clinician discusses rare case online, photo from ward includes patient, staff comments on patient complaint online, psychiatrist engages with patient on social media, patient identified through location/time/context.",
        "RESPONSE: preserve evidence, stop further disclosure, ask staff NOT to delete evidence before governance advice, notify manager/privacy/governance, assess patient harm, inform patient if required, offer complaint/open disclosure if distress or harm, HR/professional conduct pathway if serious, staff education, social media policy review.",
        "MEQ TRAP — STEM: 'Registrar posted a de-identified case online but patient recognised themselves.' POOR: 'Tell registrar to delete it.' BETTER: 'Preserve evidence, contain further disclosure, notify senior/privacy/governance, support patient, consider complaint/open disclosure, support registrar while addressing conduct, review social media policy/training.'",
        "Ask staff NOT to delete before governance advice — preservation of evidence is required for investigation.",
      ],
      commonTrap:
        "Thinking deleting the post fixes the breach — the disclosure has already occurred and requires governance response.",
    },
    {
      id: "s18",
      order: 18,
      title: "Privacy Breach Response",
      colorTag: "purple",
      explanation:
        "Privacy breach response follows a four-step logic: contain, assess, notify and prevent. Treating a privacy breach as only an administrative problem misses the clinical and governance dimensions.",
      keyPoints: [
        "STEP 1 — CONTAIN: stop further disclosure, recall email or fax if possible, secure records, remove online material according to governance advice, restrict access, inform manager/privacy officer.",
        "STEP 2 — ASSESS: what information was disclosed, who received it, did it include sensitive mental health/AOD/sexual/forensic/trauma/child-safety data, what is the likelihood of serious harm, does remedial action reduce harm, is notifiable data breach threshold met?",
        "STEP 3 — NOTIFY (depending on severity and policy): patient, privacy officer, clinical director/service manager, OAIC if required, digital health agency if My Health Record involved, insurer/legal if serious, AHPRA if professional conduct threshold.",
        "STEP 4 — PREVENT RECURRENCE: EMR verification, staff training, privacy reminders, role-based access review, audit access logs, secure email/fax protocol, social media policy, handover process.",
      ],
      commonTrap:
        "Treating a privacy breach as only an administrative problem.",
    },
    {
      id: "s19",
      order: 19,
      title: "Information Sharing With Treating Colleagues",
      colorTag: "green",
      explanation:
        "Sharing with treating colleagues is usually appropriate when needed for care. Under-sharing with treating teams creates unsafe care — the psychiatric confidentiality instinct must not override clinical handover obligations.",
      keyPoints: [
        "EXAMPLES: inpatient to community team, ED to CL psychiatry, CAMHS to adult mental health, GP to psychiatrist, psychiatrist to pharmacist, mental health to medical team, psychiatrist to ECT team.",
        "SHARE INFORMATION NEEDED FOR SAFE CARE: diagnosis/formulation, current risk, medication, monitoring needs, legal status, follow-up, crisis plan, handover responsibilities.",
        "MEQ TRAP — STEM: 'Psychiatric team does not tell medical team about overdose intent because confidentiality.' POOR: 'Maintain psychiatric confidentiality.' BETTER: 'Share relevant risk and treatment information with the treating medical team because it is necessary for safe care, while limiting disclosure to clinically relevant information.'",
        "Implied consent for direct healthcare covers information sharing between treating clinicians — this does not require explicit consent for every handover.",
      ],
      commonTrap:
        "Under-sharing with treating teams and creating unsafe care in the name of confidentiality.",
    },
    {
      id: "s20",
      order: 20,
      title: "Information Sharing With Advocates",
      colorTag: "teal",
      explanation:
        "Advocates may be legal, consumer, cultural, disability or mental health advocates. Seeing advocacy as interference rather than part of rights-based care is a governance failure.",
      keyPoints: [
        "CLARIFY: who they represent, patient consent, authority, what information they request, whether they need records or a meeting, whether patient wants them present.",
        "SHARE: with consent — relevant information for advocacy. Without consent — usually only general process information unless safety/legal basis exists.",
        "DO NOT: treat advocate as enemy, disclose more than authorised, ignore rights-based concern, withhold information the patient has authorised.",
        "Advocacy is a patient right in most mental health legislation — obstruction of legitimate advocacy may be a rights violation.",
      ],
      commonTrap:
        "Seeing advocacy as interference rather than part of rights-based care.",
    },
    {
      id: "s21",
      order: 21,
      title: "Capacity, Young People and Substitute Decision-Making",
      colorTag: "purple",
      explanation:
        "Information sharing depends on decision-making capacity and, for young people, on developmental maturity. Age alone does not determine confidentiality.",
      keyPoints: [
        "ADULTS WITH CAPACITY INTACT: the patient generally controls disclosure unless serious safety/legal exceptions apply.",
        "ADULTS WITH IMPAIRED CAPACITY: involve substitute decision-maker or guardian where lawful, provide information needed for decisions, still involve patient as much as possible, document capacity and basis for disclosure.",
        "YOUNG PEOPLE — CONSIDER: maturity/Gillick competence, parent/guardian role, child protection, confidentiality needed for engagement, safety threshold, school/family involvement, family violence or coercion.",
        "MEQ TRAP — STEM: 'A 15-year-old refuses parent disclosure after self-harm but plans to return home where abuse is alleged.' POOR: 'Tell parents because she is under 18.' BETTER: 'Assess maturity/capacity, safety, abuse risk and child protection duties; do not automatically disclose to parents if this may increase risk, but act to protect the young person.'",
      ],
      commonTrap:
        "Assuming age alone determines confidentiality — a mature young person may have confidentiality rights, and parental disclosure may increase risk if abuse is present.",
    },
    {
      id: "s22",
      order: 22,
      title: "Third-Party Warning: Practical Steps",
      colorTag: "red",
      explanation:
        "When serious third-party risk exists, a structured response is required — clinical management of the patient AND warning/protection of the identifiable victim run simultaneously.",
      keyPoints: [
        "STEPS: (1) Reassess patient immediately, (2) Clarify threat specificity, (3) Identify victim or group, (4) Assess access to means, (5) Review psychosis/intoxication/impulse control, (6) Consider admission/compulsory treatment/leave cancellation, (7) Seek senior or medicolegal advice if time permits, (8) Notify police if necessary, (9) Warn victim or agency if necessary and proportionate, (10) Share minimum necessary information, (11) Document fully.",
        "DOCUMENTATION MUST INCLUDE: exact threat, risk formulation, alternatives considered, consent discussion, why disclosure was necessary, who was informed, what was disclosed, advice sought, ongoing plan.",
        "Warning the victim without also managing the patient's clinical risk and legal status is incomplete — both streams are required simultaneously.",
        "Minimum necessary information for a third-party warning: 'There is a serious threat to your safety from X — please contact police and take safety precautions.' The clinical history does not need to be disclosed.",
      ],
      commonTrap:
        "Warning the victim without also managing the patient's clinical risk and legal status.",
    },
    {
      id: "s23",
      order: 23,
      title: "MEQ Example Traps",
      colorTag: "blue",
      explanation:
        "Seven worked examples covering the most common confidentiality/information-sharing scenarios in MEQ stems. In each, the real examiner issue is information sharing, not only clinical risk.",
      keyPoints: [
        "EXAMPLE 1 — FAMILY WANTS INFO: Wife phones asking whether husband is admitted and what medication he is on. He refuses consent. TRAP: give full update or refuse all contact. BETTER: receive collateral, encourage patient consent, provide general support, explain confidentiality limits, disclose only if serious safety risk.",
        "EXAMPLE 2 — SCHOOL RISK CLEARANCE: School asks if student is 'safe' after threats. TRAP: provide blanket clearance. BETTER: with consent, provide functional safety plan; if identifiable risk exists, disclose minimum necessary; avoid no-risk guarantees.",
        "EXAMPLE 3 — POLICE FULL HISTORY: Police ask for diagnosis and full file after neighbourhood disturbance. TRAP: treat police request as automatic authority. BETTER: clarify legal basis and safety purpose, provide minimum necessary for serious risk/enforcement if justified, document.",
        "EXAMPLE 4 — NGO ASKS FOR FILE: NGO says they need the file to support housing. TRAP: send full notes. BETTER: clarify role and consent; share functional supports, crisis triggers and escalation plan, not full psychiatric record.",
        "EXAMPLE 5 — WRONG GP DISCHARGE SUMMARY: Discharge summary sent to wrong GP. TRAP: just resend correctly. BETTER: contain breach, notify privacy/governance, assess serious harm, inform patient if required, correct handover, incident report and system fix.",
        "EXAMPLE 6 — PATIENT RECORDS STAFF: Patient records ward interaction with another patient visible. TRAP: confiscate phone or ignore. BETTER: explain privacy issue, move to private area, ask recording stop, follow policy, protect other patient privacy and document.",
        "EXAMPLE 7 — THREAT TO EX-PARTNER: Patient says he will kill his ex-partner after discharge and refuses consent. TRAP: maintain confidentiality. BETTER: serious identifiable threat may justify disclosure/action — reassess risk, restrict leave/discharge, notify senior/police/victim if necessary, document.",
      ],
      commonTrap:
        "Missing that the real examiner issue is information sharing governance, not only clinical risk management.",
    },
    {
      id: "s24",
      order: 24,
      title: "Command-Word Discipline",
      colorTag: "amber",
      explanation:
        "Confidentiality stems frequently carry command-word traps. Writing generic confidentiality statements without case-specific justification loses marks regardless of whether the content is correct.",
      keyPoints: [
        "LIST: give items only — 'Seek consent. Receive collateral. Share minimum necessary information. Document. Escalate if serious risk.'",
        "OUTLINE (list and justify): each point needs a because-clause — 'Seek consent from the patient — because disclosure to family or school should occur with consent unless safety or legal exceptions apply. Receive collateral from the family — because their information may materially change risk assessment even if disclosure back to them is limited.'",
        "DESCRIBE (list and explain): explain mechanism — 'Limit disclosure to minimum necessary information — because the ethical/legal exception is safety-based and does not justify broad release of unrelated clinical history.'",
        "DISCUSS (name the tension): 'There is tension between confidentiality and duty to protect. A defensible consultant position is to seek consent first, but if there is serious foreseeable harm to an identifiable person, make a proportionate disclosure to the agency/person best able to reduce risk.'",
      ],
      commonTrap:
        "Writing generic confidentiality statements without case-specific justification.",
    },
    {
      id: "s25",
      order: 25,
      title: "Documentation Checklist",
      colorTag: "purple",
      explanation:
        "For any confidentiality or information-sharing issue, documentation must capture both the conversation and the consent/risk basis for the decision. 'Spoke to wife' is not sufficient documentation.",
      keyPoints: [
        "DOCUMENT: request received, requester identity and role, information requested, patient consent or refusal, capacity if relevant, collateral received, risk assessment, legal/safety basis for disclosure, what was disclosed, what was not disclosed, to whom, when, senior/legal/privacy advice, patient informed where appropriate, follow-up plan.",
        "POOR NOTE: 'Spoke to wife.'",
        "BETTER NOTE: 'Wife phoned reporting patient had threatened to take children from school and drive interstate. Patient had refused disclosure to wife earlier. I received collateral only, reviewed child-safety risk, discussed with consultant, and provided wife with crisis contact advice without disclosing clinical details. Child protection advice sought due to potential child-safety risk.'",
        "The documentation should answer: what was the request, what was the consent/risk basis, what was and wasn't shared, why, and what happens next.",
      ],
      commonTrap:
        "Documenting the conversation but not the consent/risk basis for disclosure or non-disclosure.",
    },
    {
      id: "s26",
      order: 26,
      title: "Governance Response to Repeated Privacy Problems",
      colorTag: "purple",
      explanation:
        "If the service has repeated issues — wrong summaries, corridor conversations, social media posts, insecure emails — treat it as clinical governance, not isolated admin errors.",
      keyPoints: [
        "ACTIONS: incident reports, privacy officer review, audit of breaches, staff education, EMR access audit, discharge-summary verification process, secure email protocol, ED privacy redesign, signage and private rooms, social media policy education, role-based access review, consumer feedback, re-audit.",
        "MEQ PHRASE: 'I would treat repeated privacy breaches as a clinical governance issue, not isolated admin errors.'",
        "Repeated breaches indicate a system problem — governance response must include data collection, root cause analysis, environmental/process change and re-audit.",
        "Consumer feedback is essential — patients and families often identify privacy risks that staff do not notice.",
      ],
      commonTrap:
        "Treating each privacy breach as a one-off without system review.",
    },
    {
      id: "s27",
      order: 27,
      title: "Examiner Phrases",
      colorTag: "green",
      explanation:
        "Use these phrases to signal consultant-level confidentiality reasoning. They should appear in answers involving families, GP handover, NGOs, schools, police, third-party risk, discharge summaries and social media.",
      keyPoints: [
        "'I would seek consent first, but confidentiality is not absolute.'",
        "'I can receive collateral without necessarily disclosing information.'",
        "'If disclosure is required, I would share the minimum necessary information for the safety or care purpose.'",
        "'I would document the request, consent decision, risk basis and exact information shared.'",
        "'Family involvement is clinically important, but it must respect confidentiality unless serious safety concerns justify limited disclosure.'",
        "'A school or employer should not receive a broad psychiatric report when a functional safety plan would suffice.'",
        "'Police involvement does not automatically authorise full disclosure.'",
        "'Wrong-recipient discharge summary is both a privacy breach and a patient-safety issue.'",
        "'Social media obligations are the same as professional obligations in person.'",
        "'Where a serious identifiable threat exists, confidentiality may yield to duty to protect.'",
      ],
      commonTrap:
        "Failing to use the language of proportionality, minimum necessary disclosure and documentation.",
    },
    {
      id: "s28",
      order: 28,
      title: "Common Traps",
      colorTag: "amber",
      explanation:
        "Use this as a checklist before finalising any answer involving information sharing. Each item represents a documented mark-losing gap.",
      keyPoints: [
        "Saying 'confidentiality means I cannot talk to family' — you can always receive collateral.",
        "Disclosing full diagnosis to school/employer unnecessarily.",
        "Giving police full history without clarifying authority/purpose.",
        "Ignoring NGO collateral because patient refused disclosure.",
        "Failing to document disclosure reasoning.",
        "Failing to inform GP/community team of essential risk/medication information.",
        "Overlooking child protection.",
        "Giving blanket 'safe to return' letters.",
        "Ignoring privacy breach after wrong discharge summary.",
        "Treating social media breach as minor.",
        "Forgetting duty to warn/protect.",
        "Forgetting that other patients' confidentiality still matters after ward incidents.",
      ],
      meqApplication:
        "Use this as a checklist before finalising any answer involving information sharing — any item present in the stem that is absent from your answer is a lost mark.",
    },
    {
      id: "s29",
      order: 29,
      title: "Consultant-Level Summary",
      colorTag: "green",
      explanation:
        "This paragraph is reusable in MEQ stems involving families, GP handover, NGOs, school requests, police requests, third-party risk, wrong-recipient discharge summaries, social media breaches and staff privacy breaches.",
      keyPoints: [
        "CONSENT/COLLATERAL: 'I would start by clarifying who is requesting information, what they need, and the purpose of disclosure. I would seek the patient's consent first and assess capacity where relevant. I can receive collateral even when disclosure is not permitted.'",
        "DISCLOSURE THRESHOLD: 'If information must be shared for safe care, child protection, legal requirement or serious risk to an identifiable person, I would disclose only the minimum necessary information to the person or agency best able to reduce risk.'",
        "DOCUMENTATION: 'I would document the consent decision, risk basis, information shared and follow-up plan.'",
        "PRIVACY BREACH: 'Privacy breaches should be contained, escalated to governance/privacy processes, disclosed where required, and used for system improvement.'",
        "FULL PARAGRAPH: 'I would start by clarifying who is requesting information, what they need, and the purpose of disclosure. I would seek the patient's consent first and assess capacity where relevant. I can receive collateral even when disclosure is not permitted. If information must be shared for safe care, child protection, legal requirement or serious risk to an identifiable person, I would disclose only the minimum necessary information to the person or agency best able to reduce risk, and document the consent decision, risk basis, information shared and follow-up plan. Privacy breaches should be contained, escalated to governance/privacy processes, disclosed where required, and used for system improvement.'",
      ],
      meqApplication:
        "This paragraph should be reusable in MEQ stems involving families, GP handover, NGOs, school requests, police requests, third-party risk, wrong-recipient discharge summaries, social media breaches and staff privacy breaches.",
    },
  ],
};

export const CAPACITY_CONSENT: Note = {
  id: "capacity_consent",
  title: "Capacity, Consent and Treatment Refusal Governance",
  category: "Legal Reasoning / Ethics / Clinical Governance / Mental Health Act",
  description:
    "A consultant-level framework for assessing capacity, obtaining consent and managing treatment refusal in psychiatry, including refusal of medical treatment on psychiatric wards, psychotic refusal of antibiotics, ECT consent, adolescent consent, older adult placement refusal, delirium and fluctuating capacity, family demands, substitute decision-maker conflict, advance directives and Mental Health Act interface.",
  sections: [
    {
      id: "s01",
      order: 1,
      title: "Core Principle",
      colorTag: "blue",
      explanation:
        "Capacity is functional, decision-specific and time-specific. A patient may have capacity to consent to routine medication but not to refuse life-saving antibiotics while psychotic or delirious. A person can make an unwise decision and still have capacity.",
      keyPoints: [
        "DO NOT WRITE: 'The patient lacks capacity.' WRITE: 'I would assess whether the patient has capacity to refuse this specific treatment at this specific time, after optimising communication and treating reversible causes.'",
        "CAPACITY FORMULA: decision-specific + time-specific + functional + supported before substituted.",
        "Capacity is NOT global — one incapacitous decision does not mean incapacity for all decisions.",
        "REFUSAL ≠ INCAPACITY: a patient can make an unwise or risky decision and still have full capacity.",
        "MHA IS NOT A BLANKET AUTHORITY: involuntary status does not automatically authorise all medical treatment, ECT, restraint, information disclosure or convenience sedation.",
      ],
      commonTrap:
        "Calling the patient 'incapable' globally rather than assessing the specific decision at the specific time.",
    },
    {
      id: "s02",
      order: 2,
      title: "Functional Capacity Assessment",
      colorTag: "blue",
      explanation:
        "A practical capacity assessment asks four functional questions. In psychiatry, the key step is often 'use or weigh' — a patient may repeat facts correctly but be unable to apply them to their own situation due to delusion, severe depression or delirium.",
      keyPoints: [
        "FUNCTIONAL 4-STEP: (1) UNDERSTAND the relevant information, (2) RETAIN it long enough to decide, (3) USE OR WEIGH the information in relation to their own situation, (4) COMMUNICATE a decision by speech, writing, gesture, behaviour or assisted communication.",
        "PSYCHOSIS EXAMPLE: a psychotic patient may repeat facts about antibiotics but refuse because they believe antibiotics are poisoned — they understand but cannot weigh.",
        "DEPRESSION EXAMPLE: a severely depressed patient may understand ECT but be unable to weigh benefits because of nihilistic guilt.",
        "DELIRIUM EXAMPLE: a delirious patient may agree at one moment and refuse the next — fluctuating capacity, not a stable decision.",
        "ADOLESCENT EXAMPLE: an articulate young person may make a refusal dominated by acute suicidality — verbal fluency is not capacity.",
      ],
      meqApplication:
        "Always explain capacity using the four functional elements — not only 'has insight' or 'understands.' Factual repetition is not the same as valid capacity.",
      commonTrap:
        "Equating factual repetition with valid capacity — the examiner is looking for the 'use or weigh' element.",
    },
    {
      id: "s03",
      order: 3,
      title: "Decision-Specific Capacity",
      colorTag: "green",
      explanation:
        "Always name the exact decision being assessed. Capacity for one decision does not mean capacity for all decisions.",
      keyPoints: [
        "CAPACITY CAN BE ASSESSED FOR: antibiotics, ECT, lithium, depot medication, admission, discharge, leave, surgery, dialysis, placement, information sharing, family contact, return to driving/work, refusing home supports, appointing a substitute decision-maker, making or applying an advance directive.",
        "THE WRONG QUESTION: 'Does he have capacity?' THE RIGHT QUESTION: 'Does he have capacity to refuse IV antibiotics for sepsis today, given his paranoid belief that staff are poisoning him?'",
        "A patient with dementia may lack capacity for financial decisions but retain capacity for personal care decisions.",
        "A patient in a manic episode may retain capacity for some low-stakes decisions but lose it for high-stakes irreversible ones.",
      ],
      commonTrap:
        "Assuming capacity for one decision means capacity for all decisions.",
    },
    {
      id: "s04",
      order: 4,
      title: "Time-Specific and Fluctuating Capacity",
      colorTag: "amber",
      explanation:
        "Capacity can fluctuate — assess at the best time and repeat if the clinical state changes. One confused refusal during delirium is not a stable capacitous refusal.",
      keyPoints: [
        "CAUSES OF FLUCTUATING CAPACITY: delirium, intoxication, withdrawal, mania, psychosis, severe depression, pain, sedation, sleep deprivation, infection, hypoxia, metabolic disturbance, cognitive impairment, language barrier, fear or trauma.",
        "ASSESS AT THE BEST TIME: after pain relief, after delirium treatment, when most alert, with interpreter, with hearing aids or glasses, after sleep, after medication side effects settle, with trusted support person.",
        "Do NOT make a permanent incapacity decision based on a temporary reversible state.",
        "MEQ TRAP — 'He refused dialysis this morning but agreed yesterday.' BETTER: 'This may be fluctuating capacity due to delirium/sepsis/sedation — assess at the best alert period, clarify understanding and values, and avoid a final decision from one inconsistent statement.'",
      ],
      commonTrap:
        "Treating one confused refusal during delirium as a stable capacitous refusal — delirium requires treatment and reassessment, not acceptance of the refusal.",
    },
    {
      id: "s05",
      order: 5,
      title: "Optimising Capacity",
      colorTag: "green",
      explanation:
        "Before concluding incapacity, try to improve the person's ability to decide. Declaring incapacity without first addressing communication, delirium, pain or language barriers is a governance failure.",
      keyPoints: [
        "OPTIMISE BY: treating delirium/pain/hypoxia/intoxication/withdrawal, reducing sedation, using professional interpreter, using hearing aids/glasses/communication aids, using simple language, giving written or visual information, repeating information, allowing time, choosing quiet/private setting.",
        "ALSO: involving trusted support person if patient agrees, addressing fear/stigma/cultural concerns, explaining alternatives, checking understanding, revisiting decision when mental state improves.",
        "MEQ PHRASE: 'I would optimise capacity before concluding incapacity.'",
        "Each optimisation step should be documented — 'interpreter present, hearing aids used, quiet room, simple language, repeated twice' demonstrates due process.",
      ],
      commonTrap:
        "Declaring incapacity without first addressing communication, delirium, pain or language barriers.",
    },
    {
      id: "s06",
      order: 6,
      title: "Interpreter and Communication Aids",
      colorTag: "teal",
      explanation:
        "A capacity assessment is invalid if the person could not properly understand due to language, hearing, cognitive, cultural or communication barriers. Use a professional interpreter, not family, for significant decisions.",
      keyPoints: [
        "USE: professional interpreter (not family) for significant decisions, culturally appropriate explanation, visual aids, easy-read material, communication boards, hearing aids or glasses, speech pathology if needed, disability liaison, Aboriginal liaison or cultural worker where appropriate.",
        "Do NOT assume capacity is absent because the patient cannot express themselves in English.",
        "Do NOT assume capacity is present because the patient nods politely.",
        "Using a family member as interpreter for high-stakes consent/refusal decisions is both clinically and legally inadequate — family may have conflicts of interest, may filter information, or may not be trained.",
      ],
      commonTrap:
        "Using family as interpreter for high-stakes consent/refusal decisions.",
    },
    {
      id: "s07",
      order: 7,
      title: "Supported Decision-Making",
      colorTag: "green",
      explanation:
        "Supported decision-making means helping the person make their own decision rather than replacing their decision too early. The aim is not to persuade the patient to agree with the team — the aim is to help them make a valid decision.",
      keyPoints: [
        "SUPPORTS MAY INCLUDE: family/carer if patient agrees, nominated person, peer worker, advocate, cultural worker, interpreter, written information, repeated discussions, clinician explanation, spiritual care, trusted GP or case manager.",
        "ESPECIALLY IMPORTANT FOR: intellectual disability, autism, older adults, adolescents, psychosis with partial insight, trauma or mistrust, culturally complex decisions, ECT fear, treatment refusal in medical wards.",
        "Supported decision-making comes before substituted decision-making — exhaust support options before concluding a substitute is needed.",
        "Supporting someone to make a decision they have the right to make (including a risky one) is different from persuading them to make the 'right' decision.",
      ],
      commonTrap:
        "Jumping to substitute decision-making before trying supported decision-making.",
    },
    {
      id: "s08",
      order: 8,
      title: "Informed Consent",
      colorTag: "purple",
      explanation:
        "Valid informed consent requires capacity, adequate information, voluntariness and documentation. Documenting 'consented' without showing what information was provided or whether capacity and voluntariness were assessed is inadequate.",
      keyPoints: [
        "VALID INFORMED CONSENT REQUIRES: capacity, adequate information, voluntariness, opportunity to ask questions, understanding of risks/benefits/alternatives, understanding of consequences of refusal, no coercion, documentation.",
        "IN PSYCHIATRY, INFORMED CONSENT SHOULD COVER: diagnosis/formulation, proposed treatment, expected benefits, common and serious risks, side effects, alternatives, no-treatment option, consequences of refusal, monitoring, duration, withdrawal of consent, legal framework if involuntary.",
        "Voluntariness is often underassessed — a patient who agrees under pressure from family, fear of seclusion or desperation for discharge may not be giving truly voluntary consent.",
        "Consent is a process, not a signature — ongoing discussion, answered questions and documented understanding are required.",
      ],
      commonTrap:
        "Documenting 'consented' without showing what information was provided or whether capacity and voluntariness were assessed.",
    },
    {
      id: "s09",
      order: 9,
      title: "Treatment Refusal",
      colorTag: "amber",
      explanation:
        "A capacitous patient can refuse treatment, even if the refusal seems unwise, risky or distressing to family and staff. Refusing is not the same as lacking capacity.",
      keyPoints: [
        "ASSESS: what treatment is refused, reason for refusal, understanding of illness, understanding of treatment, appreciation of personal consequences, ability to weigh risks and benefits, consistency with values, mental illness effect on reasoning, delirium/intoxication/sedation, coercion or family pressure, urgency and reversibility.",
        "MEQ PHRASE: 'An unwise decision is not necessarily an incapacitous decision.'",
        "MEQ TENSION BOX: 'There is tension between autonomy and duty of care. A defensible consultant position is to respect a capacitous refusal, even if risky, but to use the least restrictive lawful pathway if incapacity from mental disorder or delirium creates serious preventable harm.'",
        "When a capacitous refusal is accepted, care planning continues — safety planning, palliative input, family meeting, risk discussion, follow-up and review if capacity changes are all still required.",
      ],
      commonTrap:
        "Declaring incapacity because the patient refuses what clinicians recommend.",
    },
    {
      id: "s10",
      order: 10,
      title: "Refusal and Risk",
      colorTag: "red",
      explanation:
        "When refusal creates risk, use a structured ten-step approach. Respecting a capacitous refusal does not mean no further care planning — it means working around the refusal safely.",
      keyPoints: [
        "STRUCTURED APPROACH: (1) Assess capacity for the specific refusal, (2) Optimise capacity and communication, (3) Clarify the risk if refusal is accepted, (4) Clarify whether delay is possible, (5) Seek second opinion or senior advice if high stakes, (6) Use substitute decision-maker if incapacity confirmed, (7) Use emergency treatment powers if urgent and lawful, (8) Use MHA only if criteria fit mental-health treatment or mental illness-related risk, (9) Document reasoning, (10) Continue therapeutic engagement.",
        "A VALID REFUSAL MAY STILL REQUIRE: safety planning, palliative care, family meeting, risk discussion, follow-up, review if capacity changes.",
        "The risk of the refusal must be weighed against the risk and burden of overriding it — both are clinical decisions requiring documentation.",
        "A second opinion is good practice when refusal is high stakes, capacity is borderline, or legal challenge is foreseeable.",
      ],
      commonTrap:
        "Thinking respect for refusal means no further care planning — the care obligation continues around the refusal.",
    },
    {
      id: "s11",
      order: 11,
      title: "Refusal of Medical Treatment on Psychiatric Ward",
      colorTag: "red",
      explanation:
        "An inpatient with schizophrenia refusing insulin, antibiotics, anticoagulation or wound care requires a separate capacity and legal analysis — the Mental Health Act does not automatically authorise physical treatment.",
      keyPoints: [
        "ASSESS: capacity for this medical decision, whether refusal is caused by delusion/mania/depression/delirium, urgency of medical risk, whether the person understands consequences, whether medical team has explained treatment, whether treatment can wait.",
        "ALSO CONSIDER: whether substitute decision-maker/guardian can decide, emergency treatment authority, MHA interface if mental illness is driving refusal, need for transfer to medical ward, least restrictive option.",
        "MEQ TRAP: 'He is involuntary, so we can give antibiotics.' BETTER: 'Involuntary status may authorise psychiatric treatment under the relevant Act, but refusal of antibiotics requires separate assessment of capacity, medical urgency and lawful authority for non-psychiatric treatment.'",
        "Get legal or ethics advice early in high-stakes cases — the intersection of MHA, guardianship legislation and emergency treatment provisions is complex and jurisdiction-specific.",
      ],
      commonTrap:
        "Using psychiatric detention as a blanket authority for physical healthcare.",
    },
    {
      id: "s12",
      order: 12,
      title: "Psychotic Refusal of Antibiotics",
      colorTag: "red",
      explanation:
        "Classic CL psychiatry stem: a patient with pneumonia refuses antibiotics because 'the nurses are poisoning me.' The key issue is whether the delusional belief prevents the 'use or weigh' step — not whether the patient can repeat the word 'antibiotic.'",
      keyPoints: [
        "APPROACH: assess mental state and psychotic basis of refusal, assess capacity for antibiotic refusal, ask patient to explain illness/antibiotic purpose/consequences of refusal, determine whether delusion prevents weighing.",
        "THEN: treat psychosis or agitation where appropriate, optimise communication, involve medical team, consider less restrictive options (oral alternative, trusted clinician, family support, explanation).",
        "IF LACKS CAPACITY AND TREATMENT URGENT: use lawful substitute or emergency pathway; if mental illness criteria met, consider MHA for psychiatric treatment and detention if needed; document capacity and legal basis.",
        "KEY SENTENCE: 'He may understand the words infection and antibiotic but lack capacity if delusional poisoning beliefs prevent him from weighing the treatment's personal benefits and risks.'",
      ],
      commonTrap:
        "Assuming factual understanding equals capacity despite delusional appraisal — the 'use or weigh' step is where capacity fails in this scenario.",
    },
    {
      id: "s13",
      order: 13,
      title: "Emergency Treatment",
      colorTag: "red",
      explanation:
        "Emergency treatment may be used when delay risks death or serious deterioration, the patient lacks capacity, no substitute is available in time, treatment is necessary and proportionate, and local legislation permits it. It is not a convenience pathway.",
      keyPoints: [
        "INDICATIONS: antibiotics for sepsis, airway/ventilation after overdose, urgent surgery after trauma, treatment of NMS or serotonin syndrome, severe lithium toxicity, hypoglycaemia, urgent sedation only for immediate safety.",
        "EMERGENCY TREATMENT MUST BE: least restrictive, time-limited, proportionate, reviewed once immediate danger passes, documented clearly, followed by capacity reassessment.",
        "Emergency treatment powers do not authorise treatment for staff convenience, routine care while 'capacity is unclear', or treatment the patient has previously refused with capacity.",
        "Once the emergency passes, reassess capacity and restart the consent process.",
      ],
      commonTrap:
        "Using emergency treatment powers for non-urgent convenience — these powers have a high threshold and require documentation.",
    },
    {
      id: "s14",
      order: 14,
      title: "ECT Consent",
      colorTag: "purple",
      explanation:
        "ECT consent questions are frequent because they combine severity, capacity, family pressure, stigma, law, risk and governance. Family views are important but do not bypass the jurisdictional ECT consent and authorisation pathway.",
      keyPoints: [
        "DO NOT: proceed with ECT because family agrees, avoid ECT because family threatens complaint/media, assume severe depression automatically removes capacity, assume a substitute decision-maker can simply sign for ECT.",
        "ASSESS: severity and urgency, diagnosis and indication, suicide/nutritional/catatonia risk, capacity to consent/refuse ECT, psychotic guilt or nihilism affecting weighing, patient's prior wishes, advance directive, family views, religious or cultural meaning.",
        "PROCESS: explore reasons for refusal, address misinformation and fear, discuss risks/benefits/alternatives, consider advance directive, involve family with consent, obtain second opinion or legal pathway where required, tribunal or statutory approval if lacking capacity or involuntary pathway requires it, document.",
        "MEQ PHRASE: 'Family views are important, but they do not bypass the jurisdictional ECT consent and authorisation pathway.'",
      ],
      commonTrap:
        "Letting family consent or family objection determine ECT instead of capacity assessment and the legal pathway.",
    },
    {
      id: "s15",
      order: 15,
      title: "Adolescent Consent and Refusal",
      colorTag: "teal",
      explanation:
        "Adolescent cases are high yield because the patient may be articulate, risky and legally complex. Apparent intelligence is not enough — articulation is not capacity.",
      keyPoints: [
        "CONSIDER: maturity/Gillick competence, decision-specific capacity, suicidality/self-harm, intoxication or delirium after overdose, family involvement, child protection, school/guardian role, confidentiality, cultural/family issues, immediate medical risk, whether refusal is stable or crisis-driven, local child/mental health legislation.",
        "MEQ TRAP: 'She is articulate, so she can refuse.' BETTER: 'I would not accept articulation as capacity — I would assess decision-specific capacity, suicidality, overdose consequences, family/safeguarding context, and legal authority for continued treatment or admission.'",
        "A 15-year-old may have Gillick competence for some decisions (GP consultation, contraception) but lack capacity for others (refusing life-saving treatment while acutely suicidal).",
        "Acutely suicidal refusal may itself indicate impaired capacity to weigh — suicidality can prevent realistic personal appraisal of risk.",
      ],
      commonTrap:
        "Assuming chronological age or verbal fluency settles capacity.",
    },
    {
      id: "s16",
      order: 16,
      title: "Older Adult Refusing Placement",
      colorTag: "teal",
      explanation:
        "Older adult placement cases test autonomy versus safety. Dementia does not automatically mean incapacity for placement — assess the accommodation decision specifically.",
      keyPoints: [
        "ASSESS CAPACITY FOR: accommodation decision, accepting home supports, medication management, finances, personal care, driving, appointing substitute decision-maker.",
        "EXPLORE: values (independence, home, pets, spouse memories), cognition or dementia, delirium or depression, functional ability, ADLs/IADLs, home safety, carer capacity, risk of neglect or exploitation, least restrictive alternatives, home-care package, supported decision-making, guardian/administrator if lacking capacity and no safe plan.",
        "A person with mild dementia may retain capacity to refuse placement while accepting home supports — capacity is decision-specific.",
        "Values matter — a person who accepts falls risk to remain at home with their dog may be making a capacitous decision consistent with lifelong values.",
      ],
      commonTrap:
        "Assuming dementia automatically means incapacity for placement — assess the specific accommodation decision.",
    },
    {
      id: "s17",
      order: 17,
      title: "Delirium and Fluctuating Capacity",
      colorTag: "amber",
      explanation:
        "Delirium is a capacity red flag. Features include fluctuating consciousness, inattention, disorientation and perceptual disturbance. A delirious refusal requires treatment of the delirium and reassessment — not acceptance of the refusal.",
      keyPoints: [
        "DELIRIUM FEATURES: fluctuating consciousness, inattention, disorientation, perceptual disturbance, sleep-wake disturbance, medical precipitants, waxing and waning capacity.",
        "APPROACH: treat delirium cause, delay non-urgent decisions, assess at best time, repeat assessment, use interpreter/hearing aids/glasses, involve family for baseline and values, use substitute or emergency decision-making if urgent, avoid relying on a single lucid or confused statement.",
        "MEQ TRAP: 'He refused dialysis this morning but agreed yesterday.' BETTER: 'This may be fluctuating capacity due to delirium/sepsis/sedation — assess at the best alert period with interpreter, clarify understanding and values, avoid making a final decision from one inconsistent statement.'",
        "Even a moment of lucidity during delirium may not constitute valid capacity — assess systematically using the functional four steps.",
      ],
      commonTrap:
        "Taking a delirious refusal at face value without reassessment.",
    },
    {
      id: "s18",
      order: 18,
      title: "Family Demanding Treatment",
      colorTag: "teal",
      explanation:
        "Family distress does not replace patient consent. If the patient has capacity, family cannot override. If the patient lacks capacity, family should reflect the patient's values and best interests — not their own fear or grief.",
      keyPoints: [
        "COMMON FAMILY DEMANDS: 'Make her have ECT.' / 'He must continue dialysis.' / 'She cannot refuse surgery.' / 'Give sedation; we cannot manage.' / 'Do not tell him the diagnosis.' / 'We want him admitted.' / 'We refuse discharge.'",
        "APPROACH: validate distress, explain patient autonomy and capacity, assess whether family are giving collateral or applying pressure, explore patient's values, hold family meeting, involve ethics/palliative/medical team if needed, clarify substitute decision-maker role, document.",
        "If patient has capacity, family cannot override — document this clearly.",
        "If patient lacks capacity and family have legal substitute authority, their decision must still reflect the patient's known values and best interests — not what the family prefers.",
      ],
      commonTrap:
        "Letting family anxiety become the treatment plan.",
    },
    {
      id: "s19",
      order: 19,
      title: "Substitute Decision-Maker",
      colorTag: "purple",
      explanation:
        "A substitute decision-maker holds legal authority to make decisions when a patient lacks capacity — but their authority is specific, not unlimited. Substitute consent does not make clinically inappropriate treatment appropriate.",
      keyPoints: [
        "MAY BE: guardian, enduring guardian, person responsible, medical treatment decision-maker, parent/guardian for child, tribunal-appointed decision-maker, statutory health attorney (jurisdiction-specific).",
        "CLARIFY: who legally holds authority, what decisions they can make, whether authority covers this treatment, whether patient currently has capacity, whether advance directive exists, whether decision reflects patient's values, whether there is conflict of interest, whether decision is clinically appropriate, whether emergency or tribunal pathway is needed.",
        "KEY POINT: substitute consent does not make clinically inappropriate treatment appropriate — a guardian cannot authorise unnecessary sedation, futile surgery or punishment-based restraint.",
        "The nearest relative is not automatically the legal decision-maker — confirm legal authority before proceeding.",
      ],
      commonTrap:
        "Assuming the nearest relative automatically has legal decision-making authority.",
    },
    {
      id: "s20",
      order: 20,
      title: "Substitute Decision-Maker Conflict",
      colorTag: "amber",
      explanation:
        "Conflicts occur when family disagree, substitute decision-maker conflicts with patient's known wishes, or there is uncertainty about legal authority. The response requires confirming legal authority before mediating content.",
      keyPoints: [
        "CONFLICTS MAY ARISE WHEN: family disagree with each other, substitute decision-maker conflicts with patient's known wishes, family demand futile treatment, family refuse necessary treatment, guardian/EPOA appears influenced by burden or finances, cultural or religious values are used to override patient values, staff are uncertain who has authority.",
        "APPROACH: confirm legal authority, clarify patient's prior wishes and values, seek collateral from multiple sources, involve treating team, involve ethics/legal/guardianship tribunal if needed, use interim safety plan, do not ask psychiatry to 'pick a family member,' document rationale.",
        "An EPOA's authority may be challenged if there is evidence of undue influence, financial conflict of interest or decisions clearly contrary to the patient's known values.",
        "The guardianship tribunal is the appropriate body to resolve authority disputes — not the treating team.",
      ],
      commonTrap:
        "Mediating family conflict without first confirming legal authority.",
    },
    {
      id: "s21",
      order: 21,
      title: "Advance Directives",
      colorTag: "purple",
      explanation:
        "Advance directives record a person's future wishes when they have capacity. They should be sought proactively and treated as strong evidence of values — not ignored because the patient is currently unwell.",
      keyPoints: [
        "MAY INCLUDE: medications preferred or refused, ECT preference or refusal, admission preferences, nominated contacts, children/pets/work arrangements, early warning signs, preferred hospital, cultural or spiritual needs, information-sharing preferences.",
        "GOOD ADVANCE DIRECTIVES ARE: clear, specific, made when the person had capacity, voluntary, current, accessible to clinicians, shared with relevant supports.",
        "Ask about advance directives as part of every admission or care plan — proactive, not reactive.",
        "Ignoring an advance directive because the patient is currently unwell misses the entire purpose of the directive — it exists precisely for this situation.",
      ],
      commonTrap:
        "Ignoring an advance directive because the patient is currently unwell.",
    },
    {
      id: "s22",
      order: 22,
      title: "Limits of Advance Directives",
      colorTag: "amber",
      explanation:
        "Advance directives are important but not always determinative. Check validity, applicability and the statutory framework before deciding whether the directive is binding.",
      keyPoints: [
        "CHECK: did the person have capacity when making it, was it voluntary, was it informed, is it clear and specific, does it apply to current circumstances, is it current or outdated, does local MHA override it in compulsory treatment, does tribunal/guardian authority affect it, is emergency treatment required?",
        "MEQ PHRASE: 'I would treat the advance directive as strong evidence of wishes and values, but check validity, applicability and the relevant statutory framework before deciding whether it is binding.'",
        "An advance directive refusing ECT may be overridden by a tribunal decision in some jurisdictions — know the local rules.",
        "An outdated advance directive (written years ago before effective treatment was available) should be weighed, not automatically followed or ignored.",
      ],
      commonTrap:
        "Treating all advance directives as either automatically binding or automatically irrelevant.",
    },
    {
      id: "s23",
      order: 23,
      title: "MHA Interface: What Examiners Commonly Test",
      colorTag: "purple",
      explanation:
        "Mental Health Act questions often test whether you know that compulsory care is not simply 'patient refuses.' Using the MHA as a shortcut rather than applying criteria is the most common MHA mark-losing error.",
      keyPoints: [
        "FREQUENT MHA ISSUES: criteria for involuntary treatment, inpatient treatment order, community treatment order, referral/assessment/examination pathway, capacity and informed consent, least restrictive alternative, risk of serious harm or deterioration, no less restrictive safe option.",
        "ALSO TESTED: rights/advocacy/tribunal review, treatment/support/discharge plan, ECT special pathway, seclusion/restraint separate safeguards, urgent non-psychiatric treatment interface, children/adolescents, Aboriginal/cultural assessment considerations, confidentiality/information sharing, revocation/variation of CTO, transport orders/police assistance.",
        "The MHA is not a blanket authority — it authorises specific psychiatric treatment in specific circumstances, with specific review rights.",
        "Every MHA use should be accompanied by: least restrictive alternative reasoning, legal criteria application, documentation, rights information and tribunal/review timeline.",
      ],
      commonTrap:
        "Using the Mental Health Act as a shortcut rather than applying criteria.",
    },
    {
      id: "s24",
      order: 24,
      title: "Involuntary Treatment: Exam Logic",
      colorTag: "purple",
      explanation:
        "A person may require compulsory treatment only when specific criteria are met. 'Poor insight' alone without risk and treatment need does not meet compulsory treatment criteria.",
      keyPoints: [
        "COMPULSORY TREATMENT BROADLY REQUIRES: mental illness present, treatment is needed, serious risk or deterioration if untreated, person lacks capacity or does not consent as required under the Act, no less restrictive safe option, legal criteria are met.",
        "DO NOT USE MHA BECAUSE OF: bed pressure, family anxiety, treatment non-preference alone, homelessness alone, personality conflict, clinician convenience, 'poor insight' without risk and treatment need, refusal of social supports alone.",
        "Least restrictive alternative must be genuinely considered and documented — voluntary treatment, CTO, home treatment, supported accommodation and crisis plans should all be weighed.",
        "Rights information must be provided when MHA status changes — the patient has the right to know their legal status, to seek review and to access an advocate.",
      ],
      meqApplication:
        "Always mention least restrictive option and legal criteria in any MHA answer — their absence signals registrar-level thinking.",
      commonTrap:
        "Equating 'poor insight' with compulsory treatment criteria.",
    },
    {
      id: "s25",
      order: 25,
      title: "CTO / Community Treatment Order",
      colorTag: "purple",
      explanation:
        "A CTO may be appropriate for severe mental illness with relapse risk, non-adherence and repeated admissions — but it is not a discharge tool for team anxiety.",
      keyPoints: [
        "A CTO MAY BE RELEVANT WHEN: severe mental illness, relapse with non-adherence, repeated admissions, treatment works when taken, patient disengages when unwell, risk can be managed in community if treatment continues, inpatient detention is not necessary, community order is least restrictive lawful option.",
        "A CTO SHOULD NOT BE USED: to solve housing, to force social compliance, because team is anxious, as punishment for non-adherence, when voluntary engagement is realistic, without community resources to implement it.",
        "A CTO requires community infrastructure — assertive outreach, depot clinic, case manager, crisis plan, housing stability — without these it is an order without a plan.",
        "CTO revocation/recall must be considered when the patient deteriorates — the CTO is not set and forget.",
      ],
      commonTrap:
        "Using CTO as a discharge tool because the team is anxious, rather than because legal criteria and least restrictive care support it.",
    },
    {
      id: "s26",
      order: 26,
      title: "ECT and MHA Interface",
      colorTag: "purple",
      explanation:
        "ECT questions commonly combine capacity, urgency, family disagreement, advance directives, media pressure and statutory pathway. Urgency increases the need for senior/legal clarity — it does not erase capacity and statutory requirements.",
      keyPoints: [
        "COMMON ECT STEM ELEMENTS: severe depression with psychotic guilt, refusal due to fear or prior trauma, family disagreement, capacity uncertainty, urgent medical risk from refusal of food/fluids, advance directive, tribunal or second-opinion pathway, media complaint pressure.",
        "APPROACH: assess indication and urgency, assess capacity to consent/refuse ECT, explore reasons for refusal, address misinformation and fear, discuss risks/benefits/alternatives, consider advance directive, involve family with consent, obtain second opinion or legal pathway where required, tribunal or statutory approval if lacking capacity or involuntary pathway requires it, document.",
        "TRAP 5 FROM SECTION 30: urgency equals skip legal pathway. CORRECTION: urgency increases need for senior/legal clarity — it does not erase capacity and statutory requirements.",
        "The ECT statutory pathway (second opinion, tribunal, authorisation) exists precisely for urgent situations — use it, don't bypass it.",
      ],
      commonTrap:
        "Skipping the legal pathway because ECT is clinically indicated — urgency clarifies the process, it does not remove it.",
    },
    {
      id: "s27",
      order: 27,
      title: "Medical Treatment vs Psychiatric Treatment",
      colorTag: "red",
      explanation:
        "The MHA usually governs treatment for mental illness. Medical treatment refusal (antibiotics, surgery, dialysis, blood transfusion, insulin) requires separate legal analysis. Treating non-psychiatric treatment as automatically covered by psychiatric involuntary status is a consistent mark-losing error.",
      keyPoints: [
        "MEDICAL TREATMENT REFUSAL MAY REQUIRE: ordinary capacity law, substitute decision-maker, guardianship legislation, emergency treatment provisions, public health legislation, court order, common law necessity, hospital policy.",
        "EXAMPLES OF MEDICAL TREATMENT NOT COVERED BY MHA ALONE: antibiotics, surgery, dialysis, blood transfusion, nutrition/hydration, insulin, anticoagulation.",
        "If the refusal is caused by mental illness, the MHA may help with detention or psychiatric treatment, but it may not automatically authorise the medical procedure.",
        "Get legal or ethics advice in high-stakes cases — the intersection of MHA, guardianship, emergency treatment and common law is complex and jurisdiction-specific.",
      ],
      commonTrap:
        "Treating non-psychiatric treatment as automatically covered by psychiatric involuntary status.",
    },
    {
      id: "s28",
      order: 28,
      title: "Capacity and Chemical Restraint / Convenience Sedation",
      colorTag: "red",
      explanation:
        "Substitute consent cannot justify poor clinical practice. Medication used to compensate for inadequate staffing may be chemical restraint, not treatment — even if a family member agrees.",
      keyPoints: [
        "EXAMPLE: residential aged care facility asks for regular quetiapine because staffing is short, and EPOA agrees.",
        "KEY POINTS: substitute consent does not make inappropriate intervention appropriate, medication used to compensate for inadequate staffing may be chemical restraint, psychotropic medication needs a valid clinical indication, use non-pharmacological and environmental strategies first, assess pain/delirium/infection/trauma/communication/unmet needs, monitor side effects, document rationale and review plan.",
        "EXAM PHRASE: 'Even if a substitute decision-maker agrees, the intervention must still have a valid clinical indication, be proportionate, monitored, and not be used for staff convenience.'",
        "The standard for prescribing does not change because the patient lacks capacity — if anything, it increases, because the patient cannot protect themselves from inappropriate treatment.",
      ],
      commonTrap:
        "Accepting family or facility pressure for sedation without clinical indication.",
    },
    {
      id: "s29",
      order: 29,
      title: "Documentation",
      colorTag: "purple",
      explanation:
        "Capacity documentation must be defensible — it should show the reasoning, not just the conclusion. 'Lacks capacity. Treat.' is inadequate and potentially indefensible.",
      keyPoints: [
        "DOCUMENT: exact decision, information provided, risks/benefits/alternatives explained, patient's words, understanding, appreciation of personal consequences, ability to weigh, communication method, interpreter or communication aids, supports used, mental state factors affecting capacity, delirium/intoxication/pain/sedation assessment, collateral and prior wishes, advance directive.",
        "ALSO DOCUMENT: substitute decision-maker details, legal basis for proceeding/refusing/overriding, second opinion or legal advice, follow-up/reassessment plan.",
        "POOR DOCUMENTATION: 'Lacks capacity. Treat.'",
        "BETTER DOCUMENTATION: 'Capacity assessed for refusal of IV antibiotics for pneumonia. Patient can repeat that antibiotics treat infection but states antibiotics are poison placed by ASIO and cannot weigh risk of untreated pneumonia. No delirium on assessment; interpreter used. Lacks capacity for this decision at this time. Medical team informed; substitute/emergency treatment pathway discussed; review planned tomorrow.'",
      ],
      commonTrap:
        "Documenting conclusion without reasoning — 'lacks capacity' is a conclusion, not a capacity assessment.",
    },
    {
      id: "s30",
      order: 30,
      title: "MEQ Example Traps",
      colorTag: "amber",
      explanation:
        "Eight common reasoning errors in capacity and consent MEQ stems. Each represents a specific cognitive shortcut that loses marks.",
      keyPoints: [
        "TRAP 1: Articulate patient equals capacity. CORRECTION: A patient can speak fluently and still lack capacity if delusion, depression, suicidality or delirium prevents weighing.",
        "TRAP 2: Refusal equals incapacity. CORRECTION: A capacitous person may refuse treatment, even life-sustaining treatment.",
        "TRAP 3: Family wants treatment equals consent. CORRECTION: Family views are collateral/support unless they have legal substitute authority, and even then they must act within patient's values/best interests.",
        "TRAP 4: Involuntary patient equals can force anything. CORRECTION: MHA authority is specific — it does not automatically authorise all medical procedures, ECT, restraint or information disclosure.",
        "TRAP 5: ECT urgency equals skip legal pathway. CORRECTION: Urgency increases need for senior/legal clarity — it does not erase capacity and statutory requirements.",
        "TRAP 6: Older adult refusing placement equals dementia incapacity. CORRECTION: Assess the accommodation decision specifically — they may value independence and accept risk.",
        "TRAP 7: Delirious refusal equals valid refusal. CORRECTION: Treat delirium and reassess; use emergency/substitute pathway if urgent.",
        "TRAP 8: Advance directive equals always binding. CORRECTION: Check capacity at creation, specificity, applicability, currency and statutory limits.",
      ],
      commonTrap:
        "Thinking capacity is a diagnosis rather than a functional decision-specific assessment.",
    },
    {
      id: "s31",
      order: 31,
      title: "MEQ-Ready Answer Structure",
      colorTag: "blue",
      explanation:
        "When asked 'How would you assess capacity / respond to refusal?' use this ten-domain structure. Not defining the exact decision before assessing capacity is the most common opening error.",
      keyPoints: [
        "1. DEFINE THE DECISION: what is being accepted or refused?",
        "2. ASSESS URGENCY AND SAFETY: can the decision wait, or is emergency treatment needed?",
        "3. OPTIMISE CAPACITY: interpreter, communication aids, treat delirium/pain/intoxication, allow time.",
        "4. GIVE INFORMED EXPLANATION: nature, purpose, benefits, risks, alternatives, consequences of refusal.",
        "5. FUNCTIONAL ASSESSMENT: understand, retain, use/weigh, communicate.",
        "6. EXPLORE VALUES AND REASONS: fear, culture, trauma, religion, delusion, depression, family pressure.",
        "7. CONSIDER LEGAL FRAMEWORK: consent law, substitute decision-maker, MHA, emergency treatment, ECT pathway, guardianship.",
        "8. MAKE LEAST RESTRICTIVE PLAN: respect capacitous refusal or use lawful override if incapacity/serious risk.",
        "9. COMMUNICATE: patient, family, treating team, advocate, tribunal/legal where relevant.",
        "10. DOCUMENT AND REVIEW: capacity may change; reassess if fluctuating.",
      ],
      meqApplication:
        "Use these ten domains as answer headings — the examiner is looking for all ten, not just the clinical assessment.",
      commonTrap:
        "Not defining the exact decision before assessing capacity.",
    },
    {
      id: "s32",
      order: 32,
      title: "Command-Word Discipline",
      colorTag: "amber",
      explanation:
        "Capacity stems frequently carry command-word traps. Giving a capacity definition without applying it to the case loses marks regardless of whether the definition is correct.",
      keyPoints: [
        "LIST: concise items only — 'Decision-specific capacity. Interpreter. Risks/benefits. Alternatives. Substitute decision-maker. MHA pathway. Documentation.'",
        "OUTLINE (list and justify): 'Use interpreter — because language barriers can falsely appear as incapacity. Assess decision-specific capacity — because capacity for placement differs from capacity for antibiotics or ECT. Document reasoning — because treatment refusal decisions are legally and clinically high risk.'",
        "DESCRIBE (list and explain): 'Assess ability to use and weigh information — because psychosis or severe depression may let the patient repeat facts while preventing realistic personal appraisal of risk.'",
        "DISCUSS (name tension and take position): 'There is tension between autonomy and duty of care. A defensible consultant position is to respect a capacitous refusal, even if risky, but to use the least restrictive lawful pathway if incapacity from mental disorder or delirium creates serious preventable harm.'",
      ],
      commonTrap:
        "Giving a capacity definition without applying it to the case.",
    },
    {
      id: "s33",
      order: 33,
      title: "Examiner Phrases",
      colorTag: "green",
      explanation:
        "Use these phrases to signal consultant-level capacity reasoning. They should appear in answers involving treatment refusal, medical ward liaison, ECT, adolescent refusal, delirium, older adult placement and MHA pathways.",
      keyPoints: [
        "'Capacity is decision-specific and time-specific.'",
        "'An unwise decision is not necessarily an incapacitous decision.'",
        "'I would optimise capacity before concluding incapacity.'",
        "'The key question is whether the patient can use and weigh the information in relation to their own situation.'",
        "'Family distress does not replace the patient's valid consent.'",
        "'Substitute consent does not make clinically inappropriate treatment appropriate.'",
        "'The Mental Health Act is not a blanket authority for all medical treatment.'",
        "'ECT requires the specific statutory pathway if the patient lacks capacity or is involuntary.'",
        "'If refusal is capacitous, I would respect it and manage risk around it.'",
        "'If capacity is fluctuating, I would reassess at the best time and use emergency/substitute pathways only if delay is unsafe.'",
      ],
      commonTrap:
        "Missing consultant-level legal/governance language — clinical description without legal framing signals registrar-level thinking.",
    },
    {
      id: "s34",
      order: 34,
      title: "Consultant-Level Summary",
      colorTag: "green",
      explanation:
        "This paragraph is reusable in MEQ stems involving treatment refusal, medical ward liaison, ECT, adolescent refusal, delirium, older adult placement, family demands, substitute decision-maker conflict and MHA pathways.",
      keyPoints: [
        "DEFINE AND ASSESS: 'I would treat capacity as functional, decision-specific and time-specific. I would first define the exact decision, assess urgency, optimise communication and capacity, explain the proposed treatment including risks, benefits, alternatives and consequences of refusal.'",
        "FUNCTIONAL ASSESSMENT: 'I would then assess whether the patient can understand, retain, use or weigh the information and communicate a choice.'",
        "IF CAPACITY PRESENT: 'If the patient has capacity, their refusal should generally be respected even if risky.'",
        "IF CAPACITY IMPAIRED: 'If capacity is impaired and delay is unsafe, I would use the least restrictive lawful pathway, such as substitute decision-making, emergency treatment provisions, Mental Health Act processes or tribunal/statutory ECT approval.'",
        "FULL PARAGRAPH: 'I would treat capacity as functional, decision-specific and time-specific. I would first define the exact decision, assess urgency, optimise communication and capacity, explain the proposed treatment including risks, benefits, alternatives and consequences of refusal, and then assess whether the patient can understand, retain, use or weigh the information and communicate a choice. If the patient has capacity, their refusal should generally be respected even if risky. If capacity is impaired and delay is unsafe, I would use the least restrictive lawful pathway, such as substitute decision-making, emergency treatment provisions, Mental Health Act processes or tribunal/statutory ECT approval. I would document the assessment, patient's words, supports used, legal basis, family/substitute views and review plan.'",
      ],
      meqApplication:
        "This paragraph should be reusable in MEQ stems involving treatment refusal, medical ward liaison, ECT, adolescent refusal, delirium, older adult placement, family demands, substitute decision-maker conflict and Mental Health Act pathways.",
    },
  ],
};

export const SUPERVISION_TRAINING: Note = {
  id: "supervision_training",
  title: "Supervision, Training and Registrar Governance",
  category: "Clinical Governance / Leadership / Supervision / Professionalism",
  description:
    "A consultant-level framework for supervision, training and registrar governance in psychiatry, including registrar working beyond competence, poor after-hours supervision, consultant unavailable, unsafe discharge by trainee, trainee burnout, bullying by senior staff, exam/training difficulty, impaired trainee, registrar complaint and supervision failure after an adverse event.",
  sections: [
    {
      id: "s01",
      order: 1,
      title: "Core Principle",
      colorTag: "blue",
      explanation:
        "Supervision is not only education. In psychiatry, supervision is a patient-safety, professional-development and governance process. A consultant supervising a registrar has three simultaneous duties.",
      keyPoints: [
        "THREE DUTIES OF SUPERVISOR: (1) DUTY TO THE PATIENT — ensure safe, ethical and clinically appropriate care. (2) DUTY TO THE TRAINEE — provide teaching, support, feedback and a safe learning environment. (3) DUTY TO THE SYSTEM — ensure clear escalation, documentation, governance and role clarity.",
        "GOOD MEQ ANSWER: 'I would treat this as both a clinical safety issue and a supervision governance issue. I would ensure the patient is safe now, clarify the registrar's level of competence and supervision needs, provide immediate support and feedback, escalate to the supervisor/DOT if required, and document the supervision and patient-care plan.'",
        "Supervision is a patient-safety function first — educational and supportive functions operate within that frame.",
        "The three duties run simultaneously — neglecting any one creates a governance gap.",
      ],
      commonTrap:
        "Seeing supervision as only trainee education and missing patient-safety governance.",
    },
    {
      id: "s02",
      order: 2,
      title: "Supervision Is Not Friendship, Therapy or Performance Punishment",
      colorTag: "purple",
      explanation:
        "Supervision should be regular, planned, private, educational, clinically relevant, supportive, honest, culturally safe, documented where needed and linked to patient safety. Being 'supportive' by avoiding direct feedback or necessary escalation is not supervision — it is avoidance.",
      keyPoints: [
        "SUPERVISION IS: regular, planned, private, educational, clinically relevant, supportive, honest, culturally safe, documented where needed, linked to patient safety.",
        "SUPERVISION IS NOT: casual corridor reassurance only, using the registrar to cover service gaps without support, humiliating correction, therapy for the trainee, a place to hide safety concerns, a substitute for employer HR processes, a way to avoid formal escalation when patients are unsafe.",
        "KEY POINT: supervision should support learning but cannot hide serious patient-safety, conduct or impairment concerns.",
        "A supervisor who protects a trainee from accountability to avoid conflict is creating a governance failure, not providing support.",
      ],
      commonTrap:
        "Being 'supportive' by avoiding direct feedback or necessary escalation.",
    },
    {
      id: "s03",
      order: 3,
      title: "Three Functions of Supervision",
      colorTag: "teal",
      explanation:
        "Use the three functions of supervision framework in MEQ answers. Providing education only and missing patient safety or trainee wellbeing is a consistent mark-losing gap.",
      keyPoints: [
        "1. NORMATIVE — monitoring safe, ethical and professional practice. Ask: Is the registrar practising safely? Are patients being reviewed appropriately? Are risk decisions defensible? Is the registrar escalating? Is documentation adequate? Are legal/MHA decisions correct?",
        "2. EDUCATIVE/FORMATIVE — developing skill, knowledge, attitudes and understanding. Ask: What does the registrar need to learn? What feedback is needed? What cases should be reviewed together? Is direct observation needed? Are WBAs, EPAs or ITAs relevant?",
        "3. SUPPORTIVE/RESTORATIVE — providing a safe space for reflection on experiences and learning. Ask: Is the registrar distressed, burnt out, ashamed after an adverse event, overwhelmed after-hours, experiencing bullying, impaired or avoiding supervision?",
        "MEQ PHRASE: 'I would hold all three functions of supervision: patient-safety oversight, educational feedback and trainee support.'",
      ],
      meqApplication:
        "Name all three functions explicitly when asked how you supervise — the examiner is looking for normative (safety), formative (education) and restorative (wellbeing).",
      commonTrap:
        "Providing education only and missing patient safety or trainee wellbeing.",
    },
    {
      id: "s04",
      order: 4,
      title: "Supervision Structure",
      colorTag: "purple",
      explanation:
        "A safe supervision structure requires named responsibility, clear escalation and protected time. Assuming supervision exists because a consultant is nominally attached to the team is a governance failure.",
      keyPoints: [
        "SAFE SUPERVISION STRUCTURE INCLUDES: named principal supervisor, clear consultant line of clinical responsibility, regular supervision time, after-hours escalation pathway, case review process, direct observation where needed, feedback and assessment process, trainee welfare check, documentation of supervision concerns, DOT/Training Director involvement if needed.",
        "PRACTICAL SUPERVISION QUESTIONS: Does the registrar know who supervises them? Can they contact a consultant during business hours? Can they contact a consultant after hours? Which decisions need consultant discussion? Which decisions need direct consultant review? What happens if the consultant is unavailable? Is supervision protected or repeatedly cancelled?",
        "A nominally attached consultant who is perpetually unavailable is not a supervision structure — it is a gap with a name on it.",
        "Repeatedly cancelled supervision creates risk that should be escalated to the clinical director.",
      ],
      commonTrap:
        "Assuming supervision exists because a consultant is nominally attached to the team.",
    },
    {
      id: "s05",
      order: 5,
      title: "Direct Versus Indirect Supervision",
      colorTag: "blue",
      explanation:
        "The level of supervision should match the registrar's competence and the clinical risk — not simply their year of training. Senior registrars still require direct supervision for high-risk or unfamiliar situations.",
      keyPoints: [
        "USE DIRECT SUPERVISION WHEN: junior trainee, new rotation, high-risk patient, unfamiliar setting, MHA/capacity/ECT/seclusion decision, complex discharge, serious medication decision, patient complaint, registrar has performance concern, registrar is distressed or impaired, prior unsafe decision, after-hours escalation reveals difficulty.",
        "EXAMPLES OF DIRECT SUPERVISION: consultant reviews patient before discharge, observes family meeting, joins ED assessment, reviews capacity assessment, checks lithium/ECT/clozapine plan, observes registrar interview.",
        "INDIRECT SUPERVISION IS APPROPRIATE WHEN: registrar has demonstrated competence, risk is routine or moderate, decision is reversible, escalation pathway is clear, consultant is contactable, patient is not high risk, documentation is reviewed.",
        "MEQ PHRASE: 'The level of supervision should match the registrar's competence and the clinical risk, not simply their year of training.'",
      ],
      commonTrap:
        "Letting a senior registrar work independently in a high-risk situation just because they are senior.",
    },
    {
      id: "s06",
      order: 6,
      title: "Assessing Registrar Competence",
      colorTag: "blue",
      explanation:
        "Do not assume competence from seniority. Competence is task-specific, setting-specific and state-specific — a senior registrar may lack competence for an unfamiliar decision or may be impaired.",
      keyPoints: [
        "ASSESS: stage of training, experience in setting, familiarity with MHA/legal processes, prior performance, ability to formulate risk, ability to escalate uncertainty, documentation quality, prescribing safety, communication with families/MDT, response to feedback, professionalism, fatigue or burnout, cultural safety, ability to manage after-hours pressure.",
        "EVIDENCE OF COMPETENCE MAY INCLUDE: direct observation, case-based discussion, WBA/EPA/ITA feedback, MDT feedback, documentation review, prescribing review, patient/family feedback, pattern of escalation and judgement.",
        "Competence is not a fixed trait — a competent registrar under good conditions may be incompetent when fatigued, after an adverse event, or in an unfamiliar setting.",
        "The entrustment question: 'Can this registrar safely perform this task at this time, in this setting, with this level of supervision?'",
      ],
      commonTrap:
        "Assuming 'senior registrar' means safe for all complex decisions.",
    },
    {
      id: "s07",
      order: 7,
      title: "Entrustment Thinking",
      colorTag: "green",
      explanation:
        "Entrustment is dynamic — it changes with patient risk, registrar state, setting and available supports. Ignoring setting and risk when deciding supervision level is the classic entrustment error.",
      keyPoints: [
        "ENTRUSTMENT QUESTION: 'Can this registrar safely perform this task at this time, in this setting, with this level of supervision?'",
        "ENTRUSTMENT CHANGES WITH: patient risk, complexity, registrar fatigue, after-hours setting, available supports, previous performance, consultant familiarity with registrar, system pressure.",
        "EXAMPLE: a registrar may be entrusted to discharge a low-risk patient in business hours but NOT a high-risk suicidal adolescent at midnight with no family meeting and no bed.",
        "MEQ TRAP — STEM: 'Stage 3 registrar says I can discharge her; I'm senior.' POOR: 'Agree because senior registrar.' BETTER: 'Seniority informs but does not determine entrustment — review the risk, complexity, registrar's previous competence and whether consultant review is needed before discharge.'",
      ],
      commonTrap:
        "Ignoring setting and risk when deciding supervision level.",
    },
    {
      id: "s08",
      order: 8,
      title: "Escalation Pathways",
      colorTag: "purple",
      explanation:
        "Safe supervision requires explicit escalation. Telling the registrar to 'call if worried' without defining what must be escalated is not a supervision plan — it is a gap.",
      keyPoints: [
        "THE REGISTRAR SHOULD KNOW: who to call, when to call, which decisions require consultant discussion, which require direct review, which require MHA/legal advice, which require ED/medical escalation, which require clinical director involvement, which require incident reporting.",
        "ESCALATE FOR: suicidal or homicidal risk, child safety, involuntary treatment decisions, seclusion/restraint, ECT/capacity, complex discharge, complaint, adverse event, medication error, high-risk prescribing, family/media/legal pressure, registrar distress or impairment, uncertainty.",
        "Escalation thresholds must be explicit and agreed — 'call if you're worried' leaves the threshold entirely to the registrar's judgement in a high-pressure moment.",
        "Escalation pathways should be written into the on-call handover, orientation pack and supervision plan.",
      ],
      commonTrap:
        "Telling the registrar to 'call if worried' without defining what must be escalated.",
    },
    {
      id: "s09",
      order: 9,
      title: "Consultant Unavailable",
      colorTag: "red",
      explanation:
        "Consultant unavailability is a governance failure, not a registrar weakness. The registrar should not be left carrying consultant-level risk without a clear line of senior responsibility.",
      keyPoints: [
        "IF CONSULTANT IS UNAVAILABLE: identify immediate patient safety issues, obtain alternative consultant or on-call support, notify clinical director if repeated or unsafe, clarify interim decision-making authority, document attempts to contact and advice obtained, ensure registrar is not left carrying consultant-level risk, review roster and escalation policy, feed into governance if systemic.",
        "MEQ PHRASE: 'A registrar should not be left as the de facto consultant for high-risk decisions without a clear line of senior responsibility.'",
        "A culture where consultants discourage calls, or are systematically unavailable, is a patient-safety and governance problem requiring clinical director escalation.",
        "Document every failed escalation attempt — time, method, outcome — both for patient safety and for the governance review.",
      ],
      commonTrap:
        "Blaming the registrar for not escalating when no reliable consultant escalation pathway existed.",
    },
    {
      id: "s10",
      order: 10,
      title: "Poor After-Hours Supervision",
      colorTag: "red",
      explanation:
        "After-hours supervision failures are systemic, not simply individual registrar errors. Treating after-hours unsafe decisions as only registrar judgement problems misses the governance dimension.",
      keyPoints: [
        "AFTER-HOURS SUPERVISION FAILS WHEN: consultant not contactable, registrar afraid to call, 'call only if desperate' culture, unclear thresholds, high ED/bed pressure, no handover of high-risk patients, registrar covering unfamiliar wards, no backup for MHA decisions, fatigue.",
        "IMMEDIATE ACTIONS: ensure current patients are safe, contact on-call consultant or second consultant, clarify decisions requiring direct consultant review, support registrar, document advice and escalation, review after-hours policy, improve handover and escalation criteria.",
        "MEQ TRAP — STEM: 'Registrar discharged suicidal patient at 2 am because consultant does not like being called.' POOR: 'Teach registrar to call next time.' BETTER: 'Review patient safety, support registrar, investigate call culture, clarify escalation and consultant availability, involve clinical director, audit after-hours high-risk discharges.'",
        "The 'consultant does not like being called' culture is a governance failure requiring clinical director escalation — not a registrar communication problem.",
      ],
      commonTrap:
        "Treating after-hours unsafe decisions as only registrar judgement problems.",
    },
    {
      id: "s11",
      order: 11,
      title: "Registrar Working Beyond Competence",
      colorTag: "red",
      explanation:
        "Delegation does not remove consultant accountability for ensuring the task is within the registrar's competence. Calling unsafe delegation a 'learning opportunity' is a patient-safety failure.",
      keyPoints: [
        "EXAMPLES: first-year registrar making complex MHA decision alone, registrar asked to lead ECT consent/capacity assessment without support, registrar discharging high-risk patient after overdose, registrar covering PICU/HDU without senior backup, registrar managing clozapine myocarditis concern alone, registrar chairing hostile family meeting alone, registrar reviewing forensic threat without consultant input.",
        "RESPONSE: stop unsafe delegation, review the patient, clarify registrar's competence, provide direct supervision, adjust workload, set escalation rules, document supervision plan, discuss with principal supervisor/DOT if pattern, review service rostering if systemic.",
        "MEQ PHRASE: 'Delegation does not remove consultant accountability for ensuring the task is within the registrar's competence and that appropriate supervision is available.'",
        "A 'learning opportunity' framing is only valid when the registrar has adequate support — solo high-stakes decisions without backup are not educational, they are unsafe.",
      ],
      commonTrap:
        "Calling unsafe delegation a 'learning opportunity.'",
    },
    {
      id: "s12",
      order: 12,
      title: "Unsafe Discharge by Trainee",
      colorTag: "red",
      explanation:
        "This is a very common MEQ pattern. The immediate priority is patient safety, then understanding what supervision was available — not immediate blame.",
      keyPoints: [
        "EXAMPLES: registrar discharges after overdose without family contact, documents 'denies SI, low risk,' no GP/community handover, no medication monitoring plan, no child-safety plan, no consultant discussion, patient re-presents or self-harms.",
        "IMMEDIATE RESPONSE: locate/review patient if possible, arrange welfare check if needed, contact community team/GP/family if appropriate, update risk plan, discuss with registrar, clarify what advice was sought, review notes and handover, inform consultant/clinical director if serious, incident report if harm/near miss, support registrar, identify supervision/system gaps.",
        "BEFORE ATTRIBUTING BLAME, ASK: Was the registrar supervised? Was consultant contact available? Was there bed pressure? Was documentation template poor? Was handover inadequate? Was the registrar working beyond competence? Were escalation criteria unclear?",
        "The unsafe discharge is always the immediate problem — the supervision failure is the governance problem that must be investigated in parallel.",
      ],
      commonTrap:
        "Blaming the trainee without reviewing supervision, handover and system pressure.",
    },
    {
      id: "s13",
      order: 13,
      title: "Feedback",
      colorTag: "teal",
      explanation:
        "Feedback should be timely, specific, behavioural, linked to patient safety, balanced, private, respectful, documented if significant and followed by an action plan. Giving vague reassurance after a serious safety concern is not feedback — it is avoidance.",
      keyPoints: [
        "FEEDBACK STRUCTURE: 'When X happened, the clinical risk was Y. In future, I expect Z. I will support you by doing A, and we will review progress by B.'",
        "FEEDBACK MUST BE: timely, specific, behavioural, linked to patient safety, balanced, private, respectful, documented if significant, followed by an action plan.",
        "AVOID: humiliation, vague criticism ('you are unsafe' without examples), saving all feedback for end of term, giving only reassurance after serious error, giving only criticism to a distressed trainee.",
        "Significant feedback (especially after a safety concern) must be documented — a verbal conversation with no record provides no governance trail and no accountability.",
      ],
      commonTrap:
        "Giving vague reassurance after a serious safety concern instead of clear feedback and a supervision plan.",
    },
    {
      id: "s14",
      order: 14,
      title: "Supporting Distressed Trainee",
      colorTag: "green",
      explanation:
        "A distressed trainee requires support, referral and safe work planning — not the supervisor becoming their treating psychiatrist. Maintaining the boundary between supervisor and treating clinician is essential.",
      keyPoints: [
        "DISTRESSED TRAINEE MAY PRESENT WITH: crying, shame after adverse event, avoidance of patients, insomnia, panic, irritability, reduced concentration, errors, cynicism, hopelessness, suicidal ideation, substance use, exam failure distress, bullying impact.",
        "IMMEDIATE APPROACH: private conversation, empathic non-judgemental enquiry, assess immediate safety (including suicidal ideation if concerned), ask about impairment at work, reduce clinical load temporarily if needed, arrange cover if unsafe to continue.",
        "SUPPORT PATHWAY: encourage GP or independent treating doctor, offer EAP/peer support, involve supervisor/DOT if training impacted, maintain boundaries (supervisor is not the treating psychiatrist), document only necessary work/safety actions.",
        "The boundary exists to protect both the trainee and the supervisor — treating your own supervisee creates dual-role conflicts and undermines safe care for both.",
      ],
      commonTrap:
        "Becoming the trainee's therapist rather than supporting referral and safe work planning.",
    },
    {
      id: "s15",
      order: 15,
      title: "Trainee Burnout",
      colorTag: "amber",
      explanation:
        "Burnout is not just a personal weakness. It may signal unsafe workload, poor supervision, rota gaps, moral injury or workplace culture. Treating burnout as only a resilience problem misses the governance dimension.",
      keyPoints: [
        "ASSESS FOR BURNOUT: workload and hours, after-hours burden, complexity of cases, sleep, leave, supervision access, exam pressure, bullying or discrimination, family stress, substance use, errors or near misses, patient safety impact.",
        "MANAGEMENT: immediate safety review of clinical duties, reduce workload or remove from high-risk role if needed, ensure leave/rest, GP/EAP/independent care, supervision review, DOT/training director if training affected, roster/workload escalation to clinical director, monitor return to full duties.",
        "MEQ TRAP — STEM: 'Trainee says I'm just tired, I'll be fine after repeated errors.' POOR: 'Offer supportive words.' BETTER: 'Assess impairment and patient safety, reduce duties if unsafe, arrange support/medical care, review workload and supervision, involve supervisor/DOT if training or safety is affected.'",
        "Burnout-related impairment is a patient-safety concern — clinical duties must be adjusted until the trainee is safe to work at full capacity.",
      ],
      commonTrap:
        "Treating burnout as only a resilience problem.",
    },
    {
      id: "s16",
      order: 16,
      title: "Impaired Trainee",
      colorTag: "red",
      explanation:
        "Impairment requires immediate removal from clinical duties and support — having a quiet word and allowing the trainee to keep working is patient-unsafe and professionally indefensible.",
      keyPoints: [
        "IMPAIRMENT MAY BE DUE TO: alcohol/substance use, depression, mania/hypomania, psychosis, cognitive disorder, medication effects, sleep deprivation, burnout, physical illness.",
        "RED FLAGS: smell of alcohol, dishevelled appearance, lateness, inappropriate comments to patients, prescribing errors, unexplained absence, emotional volatility, unsafe judgement, complaints, colleagues covering for them.",
        "IMMEDIATE ACTIONS: (1) protect patients now, (2) remove trainee from clinical duties if impaired, (3) arrange safe transport home or medical assessment, (4) do not allow driving if intoxicated, (5) notify appropriate senior/clinical director/supervisor, (6) encourage independent medical care, (7) consider mandatory notification if threshold met, (8) document facts — not diagnoses or gossip, (9) plan supported return only when safe.",
        "Mandatory notification to AHPRA must be considered when impairment places the public at risk — this is a legal obligation, not a discretionary act.",
      ],
      commonTrap:
        "Having a quiet word and allowing the trainee to keep working despite impairment.",
    },
    {
      id: "s17",
      order: 17,
      title: "Bullying by Senior Staff",
      colorTag: "red",
      explanation:
        "Bullying by senior staff is both a trainee welfare issue and a patient-safety/culture issue. Framing bullying as trainee weakness rather than workplace governance risk is a consistent mark-losing error.",
      keyPoints: [
        "EXAMPLES: humiliation in ward round, shouting, racist or sexist comments, threats about assessment, exclusion from learning, unreasonable workloads, retaliatory rosters, undermining after exam failure, sexual harassment.",
        "RESPONSE: ensure trainee immediate safety, listen and validate, clarify facts/pattern/witnesses, assess patient-safety impact, offer support and reporting options, involve supervisor/DOT/medical education unit if appropriate, use employer bullying/HR pathway, escalate serious conduct, protect trainee from retaliation, document factually.",
        "MEQ TRAP — STEM: 'Senior consultant says registrar is too fragile after she reports being shouted at.' POOR: 'Encourage resilience.' BETTER: 'Assess bullying/harassment, support trainee, ensure fair process, protect from retaliation, involve DOT/HR as appropriate and address patient-safety/culture implications.'",
        "Bullying creates a culture where registrars do not escalate clinical concerns — it is therefore directly linked to patient safety, not only trainee welfare.",
      ],
      commonTrap:
        "Framing bullying as trainee weakness rather than workplace governance risk.",
    },
    {
      id: "s18",
      order: 18,
      title: "Exam or Training Difficulty",
      colorTag: "amber",
      explanation:
        "Exam failure or training difficulty may be educational, wellbeing-related or performance-related. Treating it as purely personal failure or purely a service problem, without a targeted learning plan, loses marks.",
      keyPoints: [
        "ASSESS: which requirement failed, pattern or isolated event, clinical competence concerns, exam anxiety, language or cultural issues, neurodiversity, burnout, supervision quality, protected teaching time, workplace stress, bullying or discrimination, personal stressors, insight and learning plan.",
        "MANAGEMENT: supportive meeting, normalise difficulty without minimising, identify specific gaps, targeted learning plan, supervisor and DOT involvement, adjust cases and learning opportunities, exam preparation strategy, consider leave or reduced load if burnt out, document agreed plan, monitor progress.",
        "A targeted learning plan must identify specific gaps, set measurable goals, assign responsibilities, set a review date and document progress — not simply offer 'more supervision.'",
        "Language and cultural barriers, neurodiversity and discrimination are system factors that may require adjustments — not only personal remediation.",
      ],
      commonTrap:
        "Treating exam failure as either purely personal failure or purely a service problem, without a targeted learning plan.",
    },
    {
      id: "s19",
      order: 19,
      title: "Managing Performance Concerns",
      colorTag: "purple",
      explanation:
        "Performance concerns should be addressed early and fairly — waiting until end-of-rotation to disclose concerns is a governance failure for the trainee, future patients and the training program.",
      keyPoints: [
        "EXAMPLES: poor risk formulation, unsafe prescribing, poor documentation, repeated lateness, poor MDT communication, failure to escalate, boundary issues, poor professionalism, repeated complaints, inadequate capacity/MHA decisions.",
        "PROCESS: (1) clarify facts and examples, (2) separate patient safety from education, (3) give direct feedback, (4) ask trainee's perspective, (5) explore wellbeing/impairment/system factors, (6) set clear expectations, (7) create learning/remediation plan, (8) increase supervision if needed, (9) involve principal supervisor/DOT early if significant, (10) document agreed plan, (11) review progress, (12) escalate to employer/HR where conduct, safety or employment issue requires it.",
        "Patient-safety concerns within a performance process must be managed immediately — the performance process does not suspend the duty to protect patients.",
        "Informal management of serious performance concerns (no documentation, no DOT involvement, no review date) creates risk for the trainee, future patients and the supervisor.",
      ],
      commonTrap:
        "Waiting until end-of-rotation to disclose concerns.",
    },
    {
      id: "s20",
      order: 20,
      title: "Training Director / DOT Involvement",
      colorTag: "purple",
      explanation:
        "DOT involvement is not punishment — it provides training governance, fairness and support. Trying to manage repeated serious training concerns informally without DOT involvement is a governance failure.",
      keyPoints: [
        "INVOLVE DOT/TRAINING GOVERNANCE WHEN: trainee is working beyond competence, supervision requirements are not being met, repeated performance concerns, trainee in difficulty, exam or training failure with service impact, bullying/harassment affects training, supervisor-trainee conflict, supervision relationship breaks down, significant illness or impairment, adverse event involving registrar, unsafe training post, remote supervision concerns, need for targeted learning plan.",
        "KEY POINT: DOT involvement is not punishment — it provides training governance, fairness and support for both the trainee and the supervisor.",
        "Early DOT involvement allows a fair process, protects the trainee from informal management and ensures the training program meets its accreditation obligations.",
        "Trying to manage repeated serious concerns informally exposes the supervisor, the service and the training program to governance and accreditation risk.",
      ],
      commonTrap:
        "Trying to manage repeated serious training concerns informally without DOT involvement.",
    },
    {
      id: "s21",
      order: 21,
      title: "Duty to Patient vs Duty to Trainee",
      colorTag: "purple",
      explanation:
        "This is the central MEQ tension in supervision questions. Choosing either patient safety or trainee support instead of doing both is the core mark-losing error.",
      keyPoints: [
        "MEQ TENSION SENTENCE: 'There is tension between supporting the trainee and protecting patients. A defensible consultant position is to support the trainee compassionately while ensuring patient safety, direct supervision, escalation and accountability.'",
        "EXAMPLES WHERE TENSION APPEARS: trainee made unsafe discharge, registrar intoxicated at work, registrar bullied and avoiding work, registrar error caused adverse event, registrar refuses feedback, registrar asks you not to tell DOT, patient complains about registrar.",
        "Patient safety comes first — but trainee support still matters. Do not scapegoat the trainee, hide unsafe practice to protect them, ignore system/supervision factors, or abandon them after an error.",
        "DUTY TO PATIENT VS DUTY TO TRAINEE BOX: 'I would support the trainee compassionately while ensuring patient safety, direct supervision, escalation and accountability — these are not in conflict if approached correctly.'",
      ],
      commonTrap:
        "Choosing either patient safety or trainee support instead of doing both.",
    },
    {
      id: "s22",
      order: 22,
      title: "Supervision Failure After Adverse Event",
      colorTag: "red",
      explanation:
        "After an adverse event involving a registrar, the review must examine both the registrar's decision-making and the supervision system that allowed the decision to occur. Reviewing only the registrar's error and missing the supervision system is a governance failure.",
      keyPoints: [
        "EXAMPLES: registrar discharged patient who later suicided, registrar missed delirium, registrar prescribed unsafe medication, registrar failed to notify community team, registrar reduced observations without consultant review, registrar managed restraint/ECT/capacity decision alone.",
        "IMMEDIATE RESPONSE: ensure patient/family safety, support staff and registrar, preserve records, review what supervision was available, ask what advice was sought, incident report/open disclosure if harm, involve clinical director if serious, involve supervisor/DOT if training issue, review after-hours/consultant availability, identify system contributors, avoid blame culture, create action plan.",
        "SUPERVISION FAILURE WARNING: 'The review should examine both the registrar's decision-making and the supervision system that allowed the decision to occur.'",
        "The system review must ask: Was the supervision structure adequate? Were escalation thresholds clear? Was the consultant available? Was there bed or time pressure that overrode clinical judgement? Were expectations of the registrar realistic for their stage?",
      ],
      commonTrap:
        "Reviewing only the registrar's error and missing the supervision system.",
    },
    {
      id: "s23",
      order: 23,
      title: "Registrar Complaint",
      colorTag: "purple",
      explanation:
        "A complaint about a registrar requires four parallel streams: patient-care, complaint process, registrar support and governance. Either protecting the registrar from all accountability or blaming them without support and process are both failures.",
      keyPoints: [
        "PATIENT-CARE STREAM: ensure current patient safety, review risk, arrange follow-up or welfare check, correct any care gap.",
        "COMPLAINT STREAM: read complaint, clarify allegations, use hospital complaints pathway, obtain registrar account, preserve records, involve consultant or clinical director.",
        "REGISTRAR-SUPPORT STREAM: private discussion, check distress, supervisor/DOT if needed, indemnity advice if formal or external complaint, learning plan if performance issue.",
        "GOVERNANCE STREAM: supervision review, documentation review, workload and after-hours review, policy/process improvement.",
      ],
      commonTrap:
        "Either protecting the registrar from all accountability or blaming them without support and process.",
    },
    {
      id: "s24",
      order: 24,
      title: "Documentation of Supervision",
      colorTag: "purple",
      explanation:
        "Giving advice but leaving no record after a high-risk supervision decision is a governance failure. Documentation provides accountability, a governance trail and a basis for review.",
      keyPoints: [
        "DOCUMENT SUPERVISION WHEN: high-risk patient decision discussed, consultant advice given, trainee instructed to review or escalate, performance concern raised, trainee distressed or impaired, patient complaint, adverse event, supervision plan changed, DOT or clinical director involved.",
        "DOCUMENT: date and time, participants, patient/case discussed if relevant, advice given, decisions made, supervision level required, follow-up actions, trainee's response, welfare/support offered if relevant, escalation to supervisor/DOT/clinical director, review date.",
        "AVOID: pejorative comments, diagnosing trainee in supervision note, gossip, blaming language, vague 'spoken to registrar,' hidden informal warnings.",
        "BETTER NOTE: 'Discussed with Dr X after discharge concern. Reviewed case facts, risk formulation and need for consultant discussion for high-risk overdose discharges. Dr X was distressed and accepted feedback. Patient follow-up arranged today. Increased supervision for discharge decisions for two weeks. Principal supervisor informed.'",
      ],
      commonTrap:
        "Giving advice but leaving no record after a high-risk supervision decision.",
    },
    {
      id: "s25",
      order: 25,
      title: "Remote/Rural Supervision",
      colorTag: "amber",
      explanation:
        "Remote supervision requires extra structure. Assuming phone availability is adequate supervision without reliability, escalation and onsite backup is a governance failure.",
      keyPoints: [
        "REMOTE SUPERVISION NEEDS: approved training post, named principal supervisor, supplementary onsite supervisor if needed, orientation, risk-management matrix, clear escalation pathway, scheduled supervision, protected time, reliable phone/video contact, after-hours cover, local emergency support, documentation, review of training quality.",
        "MEQ TRAP — STEM: 'Rural registrar says consultant is available by phone but rarely answers.' POOR: 'Encourage registrar to call earlier.' BETTER: 'Clarify consultant availability, create formal escalation pathway, appoint supplementary supervisor, review safety of the training post and escalate to DOT/clinical director if supervision is unreliable.'",
        "A rural registrar with unreliable phone-only supervision and no onsite backup is working in an unsafe training post — this requires DOT escalation, not individual problem-solving.",
        "Remote posts require explicit onsite emergency support arrangements — what happens if a patient deteriorates acutely and the remote consultant is unreachable?",
      ],
      commonTrap:
        "Assuming phone availability is adequate supervision without reliability, escalation and onsite backup.",
    },
    {
      id: "s26",
      order: 26,
      title: "Difficult Conversation With Registrar",
      colorTag: "teal",
      explanation:
        "Difficult conversations require structure. Being kind but unclear, or being direct but humiliating, are both supervision failures.",
      keyPoints: [
        "START: private setting, clarify purpose, supportive but direct tone. EXPLORE: 'Can you tell me what happened?' / 'How are you going?' / 'What was your understanding of the risk?' / 'What support did you have?' / 'Were there workload or personal factors?'",
        "FEEDBACK: specific behaviour, patient-safety impact, expected standard.",
        "PLAN: immediate patient action, supervision level, learning goals, wellbeing support, review date, escalation if needed.",
        "CLOSE: summarise, check understanding, document. DO NOT: ambush, shame, minimise, avoid direct feedback, turn supervision into therapy.",
      ],
      commonTrap:
        "Being kind but unclear, or being direct but humiliating.",
    },
    {
      id: "s27",
      order: 27,
      title: "MEQ Example Traps",
      colorTag: "blue",
      explanation:
        "Seven worked examples covering the most common supervision and registrar governance MEQ stems. In each, the core error is treating a system problem as only an individual problem.",
      keyPoints: [
        "EXAMPLE 1 — REGISTRAR BEYOND COMPETENCE: first-year registrar asked to assess ECT capacity alone. TRAP: 'They should learn by doing.' BETTER: Direct consultant supervision, legal/ECT pathway, observe and teach, document supervision.",
        "EXAMPLE 2 — POOR AFTER-HOURS SUPERVISION: registrar discharged high-risk overdose at 2 am without consultant call. TRAP: Blame registrar only. BETTER: Review patient safety, support registrar, investigate call culture, clarify escalation and consultant availability.",
        "EXAMPLE 3 — CONSULTANT UNAVAILABLE: registrar repeatedly cannot contact consultant. TRAP: Tell registrar to keep trying. BETTER: Immediate alternate consultant cover, clinical director escalation, supervision pathway review.",
        "EXAMPLE 4 — TRAINEE BURNOUT: registrar crying after multiple complex on-calls. TRAP: Reassure and send back to work. BETTER: Assess safety/impairment, reduce load if needed, GP/EAP, supervisor/DOT, workload review.",
        "EXAMPLE 5 — BULLYING BY SENIOR STAFF: registrar says consultant humiliates them in ward rounds. TRAP: 'Develop thicker skin.' BETTER: Support trainee, assess facts/risk, protect from retaliation, use HR/DOT process, address culture.",
        "EXAMPLE 6 — IMPAIRED TRAINEE: registrar smells of alcohol and upset a patient. TRAP: 'Have a quiet word and let them finish shift.' BETTER: Remove from clinical duties, ensure patient safety, arrange safe transport/support, notify senior, consider mandatory notification threshold.",
        "EXAMPLE 7 — SUPERVISION FAILURE AFTER ADVERSE EVENT: medication error after verbal order from covering registrar. TRAP: Blame registrar. BETTER: Treat patient, open disclosure if harm, support registrar, review supervision/handover/workload/verbal-order policy.",
      ],
      commonTrap:
        "Missing that registrar problems are often also supervision-system problems.",
    },
    {
      id: "s28",
      order: 28,
      title: "Command-Word Discipline",
      colorTag: "amber",
      explanation:
        "Supervision stems carry command-word traps. Listing 'support registrar' without explaining how or why loses marks — the examiner is looking for mechanism and rationale.",
      keyPoints: [
        "LIST: concise items — 'Patient safety. Registrar support. Supervision review. DOT involvement. Documentation.'",
        "OUTLINE (list and justify): 'Review patient safety — because supervision concerns are governance issues only if current care is safe. Support the registrar — because distress or impairment may worsen risk and prevent honest learning. Involve DOT — because repeated competence concerns affect training progression and require formal oversight.'",
        "DESCRIBE (list and explain): 'Increase direct supervision temporarily — because the registrar has demonstrated difficulty with high-risk discharge decisions and needs consultant review before repeating the task.'",
        "DISCUSS (name the tension): 'There is tension between supporting a trainee's learning and protecting patients from foreseeable harm. A defensible position is to provide compassionate support and targeted supervision while escalating significant safety or performance concerns through the appropriate training and employer pathways.'",
      ],
      commonTrap:
        "Listing 'support registrar' without explaining how or why.",
    },
    {
      id: "s29",
      order: 29,
      title: "Examiner Phrases",
      colorTag: "green",
      explanation:
        "Use these phrases to signal consultant-level supervision reasoning. Missing the words 'supervision governance,' 'direct supervision,' 'escalation pathway' and 'DOT' signals registrar-level thinking.",
      keyPoints: [
        "'This is both a patient-safety issue and a supervision governance issue.'",
        "'The registrar should not be carrying consultant-level risk without clear supervision.'",
        "'The level of supervision should match competence and clinical risk.'",
        "'I would support the trainee while maintaining accountability.'",
        "'I would separate training support from employer disciplinary processes.'",
        "'I would involve the principal supervisor and DOT early if there are repeated or serious concerns.'",
        "'I would not wait until the end-of-rotation ITA to raise significant performance concerns.'",
        "'After an adverse event, I would review the supervision system, not only the registrar's decision.'",
        "'Bullying and discrimination are patient-safety issues as well as trainee-welfare issues.'",
      ],
      commonTrap:
        "Missing the words supervision governance, direct supervision, escalation pathway and DOT.",
    },
    {
      id: "s30",
      order: 30,
      title: "Common Traps",
      colorTag: "amber",
      explanation:
        "Use this as a pre-submit checklist for any registrar/supervision MEQ question. Each item is a documented mark-losing gap.",
      keyPoints: [
        "Focus only on patient care and miss supervision governance.",
        "Focus only on trainee support and miss patient safety.",
        "Blame the registrar without reviewing supervision.",
        "Fail to involve DOT/principal supervisor.",
        "Ignore after-hours consultant availability.",
        "Ignore bullying or burnout.",
        "Treat impairment as a private matter only.",
        "Over-document personal health details unnecessarily.",
        "Fail to document supervision advice.",
        "Confuse supervision with therapy.",
        "Wait until end of term to raise concerns.",
        "Let service pressure override training safety.",
        "Fail to escalate repeated unsafe practice.",
      ],
      meqApplication:
        "Use this section as a pre-submit checklist for registrar/supervision questions — any item present in the stem that is absent from your answer is a lost mark.",
    },
    {
      id: "s31",
      order: 31,
      title: "Consultant-Level Summary",
      colorTag: "green",
      explanation:
        "This paragraph is reusable in MEQ stems involving registrar error, unsafe discharge, poor supervision, consultant unavailable, after-hours decisions, trainee distress, burnout, bullying, impaired trainee and adverse events.",
      keyPoints: [
        "PATIENT SAFETY AND GOVERNANCE: 'I would treat registrar supervision as a clinical governance function. My first priority is patient safety, followed by timely support, feedback and education for the registrar.'",
        "COMPETENCE AND ESCALATION: 'I would clarify the registrar's competence, supervision needs and escalation pathway, increase direct supervision for high-risk decisions if needed, and ensure the principal supervisor and DOT are involved for repeated or serious concerns.'",
        "DISTRESS AND IMPAIRMENT: 'If the registrar is distressed, bullied or impaired, I would provide immediate support, adjust duties if safety is affected, and use appropriate training, employer or regulatory pathways.'",
        "DOCUMENTATION: 'Supervision advice and significant concerns should be documented factually, with a clear plan, review date and accountability.'",
        "FULL PARAGRAPH: 'I would treat registrar supervision as a clinical governance function. My first priority is patient safety, followed by timely support, feedback and education for the registrar. I would clarify the registrar's competence, supervision needs and escalation pathway, increase direct supervision for high-risk decisions if needed, and ensure the principal supervisor and DOT are involved for repeated or serious concerns. If the registrar is distressed, bullied or impaired, I would provide immediate support, adjust duties if safety is affected, and use appropriate training, employer or regulatory pathways. Supervision advice and significant concerns should be documented factually, with a clear plan, review date and accountability.'",
      ],
      meqApplication:
        "This paragraph should be reusable in MEQ stems involving registrar error, unsafe discharge, poor supervision, consultant unavailable, after-hours decisions, trainee distress, burnout, bullying, impaired trainee and adverse events.",
    },
  ],
};

export const WHS_STAFF_SAFETY: Note = {
  id: "whs_staff_safety",
  title: "Work Health and Safety / Staff Safety in Psychiatry",
  category: "Clinical Governance / Leadership / WHS / Staff Safety",
  description:
    "A consultant-level framework for managing work health and safety and staff safety in psychiatry, including assault on staff, threats from patients or families, stalking of clinicians, unsafe home visits, lone-worker risk, staff psychological injury after incidents, bullying, fatigue, burnout and unsafe facilities.",
  sections: [
    {
      id: "s01",
      order: 1,
      title: "Core Principle",
      colorTag: "blue",
      explanation:
        "Staff safety is not separate from patient care. The consultant must simultaneously balance patient-centred care, least restrictive practice, staff safety, public safety, legal duties, therapeutic alliance and service governance.",
      keyPoints: [
        "GOOD CONSULTANT ANSWER: 'I would treat this as both an immediate safety issue and a WHS governance issue. I would first make the environment safe, ensure injured or threatened staff receive medical and psychological support, report and document the incident, review patient risk and treatment, and then address system contributors such as staffing, facilities, lone-worker procedures, duress systems and occupational violence training.'",
        "KEY POINT: staff safety is a patient-safety issue — an understaffed, threatened or traumatised workforce cannot deliver safe care.",
        "IMMEDIATE SAFETY FIRST: (1) Who is unsafe now? (2) Remove staff from danger. (3) Call security or police if needed. (4) Treat injuries. (5) Protect other patients. (6) Notify senior staff. (7) Report and document.",
        "OCCUPATIONAL VIOLENCE IS NOT NORMAL: occupational violence should not be normalised as part of psychiatric work — it requires immediate containment, staff support, reporting, review and system controls.",
      ],
      commonTrap:
        "Treating staff assault or threats as 'part of the job.'",
    },
    {
      id: "s02",
      order: 2,
      title: "What Counts as a WHS / Staff Safety Issue?",
      colorTag: "purple",
      explanation:
        "WHS in psychiatry extends far beyond 'call security.' It includes prevention, risk assessment, safe systems of work, reporting, support and return-to-work. Only managing the immediate incident and missing WHS governance loses marks.",
      keyPoints: [
        "PHYSICAL HAZARDS: physical assault on staff, threats from patient/family/visitor, stalking of clinician, unsafe home visit, lone-worker risk, lack of duress alarm, inadequate security response, poor manual handling or environmental hazards, unsafe transport or rural outreach.",
        "PSYCHOSOCIAL HAZARDS: staff psychological injury after suicide/restraint/assault/complaint, bullying/harassment/discrimination, fatigue/burnout/unsafe rosters, repeated occupational violence, excessive caseload or unrealistic demand, unsafe culture where staff do not report incidents.",
        "ENVIRONMENTAL HAZARDS: unsafe ED or ward layout, unsafe facilities, poor lighting, inadequate secure doors, unsafe home-visit vehicles.",
        "KEY POINT: do not reduce WHS to 'call security' — it includes prevention, risk assessment, safe systems of work, reporting, support and return-to-work.",
      ],
      commonTrap:
        "Only managing the immediate incident and missing WHS governance.",
    },
    {
      id: "s03",
      order: 3,
      title: "Immediate Safety Response",
      colorTag: "red",
      explanation:
        "For any staff-safety incident, ask 'Who is unsafe now?' first. Starting with a policy review before making the environment safe is a classic mark-losing error.",
      keyPoints: [
        "IMMEDIATE STEPS: remove staff from immediate danger, call security/code black according to local policy, call police if serious threat/weapon/assault/stalking/public risk, separate patient/family/visitor from staff where possible, attend to injured staff and patients.",
        "ALSO: arrange medical assessment, preserve scene/evidence if serious, ensure other patients are safe, increase observation or review legal status if patient-related, notify senior nurse/consultant/manager, document and complete incident report.",
        "This is not about punishing the patient — it is about containing immediate risk and preventing further harm.",
        "Immediate safety and ongoing therapeutic care are not mutually exclusive — contain the risk first, then re-engage therapeutically from a safer structure.",
      ],
      commonTrap:
        "Starting with a policy review before making the environment safe.",
    },
    {
      id: "s04",
      order: 4,
      title: "Balancing Patient Care and Staff Safety",
      colorTag: "purple",
      explanation:
        "This is the central MEQ tension. Choosing either patient care or staff safety instead of creating a safer model of care is the core mark-losing error.",
      keyPoints: [
        "MEQ TENSION: 'There is tension between maintaining therapeutic engagement and protecting staff from foreseeable harm. A defensible consultant position is to continue patient care in the least restrictive safe manner, while not requiring staff to accept preventable violence, stalking or psychological injury as part of the job.'",
        "STAFF SAFETY DOES NOT JUSTIFY: punitive care, retaliatory discharge, excessive restraint, stigma, abandoning the patient, refusal to assess someone in genuine crisis.",
        "PATIENT-CENTRED CARE DOES NOT JUSTIFY: sending staff alone into unsafe homes, ignoring stalking, tolerating threats, minimising assault, pressuring staff to return before fit, hiding incidents to avoid complaints.",
        "The solution is always a safer model of care — clinic review instead of home visit, two-person visit, security support, telehealth, modified contact arrangements — not a forced choice between care and safety.",
      ],
      commonTrap:
        "Choosing either patient care or staff safety instead of creating a safer model of care.",
    },
    {
      id: "s05",
      order: 5,
      title: "Assault on Staff",
      colorTag: "red",
      explanation:
        "Assault requires an immediate response and a follow-up governance response. Normalising assault because the patient was unwell is a patient-safety and WHS failure.",
      keyPoints: [
        "IMMEDIATE RESPONSE: ensure scene is safe, separate patient and staff member, provide first aid and medical review, assess staff injuries and psychological distress, assess patient's mental state/intoxication/delirium/violence risk, protect other patients and staff, consider security/police depending on severity, review observation/leave/legal status, notify senior staff/manager, complete incident report.",
        "FOLLOW-UP: staff debrief, psychological support/EAP, workers compensation pathway if needed, police report if staff wishes or serious assault, open disclosure/complaint process if patient also injured, review antecedents and preventability.",
        "GOVERNANCE FOLLOW-UP: update patient formulation and violence prevention plan, review ward staffing/environment/security, governance review for repeated assaults.",
        "A patient's mental illness explains the assault — it does not excuse the absence of a prevention plan, adequate staffing or safe environment.",
      ],
      commonTrap:
        "Normalising assault because the patient was unwell.",
    },
    {
      id: "s06",
      order: 6,
      title: "Threats From Patient, Family or Visitor",
      colorTag: "red",
      explanation:
        "Threats may be verbal, written, online, in person or through repeated calls. All must be taken seriously and assessed for immediacy and credibility — reassuring staff that the family is 'just distressed' without assessing the threat is inadequate.",
      keyPoints: [
        "EXAMPLES: 'I know where you live.' / 'I will wait for you after work.' / Family member threatens to sue or attack staff. / Visitor becomes aggressive on ward. / Patient sends threatening emails. / Ex-partner threatens clinician involved in family violence assessment.",
        "RESPONSE: take threats seriously, assess immediacy/specificity/means/history, ensure staff member is not left alone with person, notify senior nurse/manager/security, consider police if credible threat, restrict visitor access if needed, set behavioural expectations, review patient risk formulation.",
        "ALSO: document exact words (this is evidence), support staff psychologically, develop safety plan.",
        "MEQ TRAP — POOR: 'Reassure staff the family is distressed.' BETTER: 'Validate distress but assess threat credibility, protect staff, use security/police if needed, set boundaries, document exact words and review patient/family contact plan.'",
      ],
      commonTrap:
        "Reassuring staff without assessing threat credibility.",
    },
    {
      id: "s07",
      order: 7,
      title: "Stalking of Clinician",
      colorTag: "red",
      explanation:
        "Stalking is a serious staff-safety issue requiring a structured clinical and governance response. Calling stalking 'transference' and failing to manage staff safety is a consistent mark-losing error.",
      keyPoints: [
        "EXAMPLES: patient repeatedly waits outside clinic, follows clinician to car, sends repeated emails/messages, contacts clinician's family, posts about clinician online, attends clinician's private practice or home, threatens after boundary setting.",
        "RESPONSE: do not minimise, preserve evidence (messages/emails/screenshots/dates/times), inform manager/clinical director/security, risk assess patient, avoid clinician meeting patient alone, consider transfer of care if therapeutic boundary is unsafe.",
        "ALSO: consider police intervention or restraining order depending on threat, check confidentiality and digital footprint, support clinician, document, governance review if service systems exposed staff details.",
        "MEQ PHRASE: 'I would treat stalking as a foreseeable staff-safety and boundary risk, not as ordinary transference or therapeutic attachment.'",
      ],
      commonTrap:
        "Calling stalking 'transference' and failing to manage staff safety.",
    },
    {
      id: "s08",
      order: 8,
      title: "Unsafe Home Visits",
      colorTag: "amber",
      explanation:
        "Home visits are high-yield in community psychiatry MEQs. The error is sending staff on a home visit because 'engagement matters' without completing a structured risk assessment and adjusting the plan.",
      keyPoints: [
        "BEFORE A HOME VISIT, ASSESS — PATIENT FACTORS: recent aggression, psychosis/paranoia, intoxication, threats, weapons, domestic violence, animals, other people in home, past unsafe visits.",
        "BEFORE A HOME VISIT, ASSESS — ENVIRONMENT: location known, phone reception, remote area, safe parking, exits, lighting, time of day, neighbourhood risk.",
        "BEFORE A HOME VISIT, ASSESS — STAFF FACTORS: lone worker, new staff, trainee, fatigue, gender/cultural safety issue, staff previously threatened.",
        "CONTROLS: two-person visit for high risk, clear itinerary and check-in/check-out, duress alarm or mobile phone, park for quick exit, sit near exit, do not enter if unsafe, leave if risk escalates, notify team if plans change, consider police welfare check if imminent risk, document risk assessment.",
        "MEQ TRAP — POOR: 'Send case manager to assess.' BETTER: 'Conduct home-visit risk assessment, consider two staff/police/clinic review, check-in system, duress alarm and do not send lone worker into foreseeable danger.'",
      ],
      commonTrap:
        "Completing risk assessment but not changing the visit plan when risk is identified.",
    },
    {
      id: "s09",
      order: 9,
      title: "Lone-Worker Risk",
      colorTag: "amber",
      explanation:
        "Lone work occurs across many psychiatry settings and requires explicit risk controls. Allowing lone work because 'that is how the service has always operated' is a governance failure.",
      keyPoints: [
        "LONE WORK OCCURS IN: rural outreach, home visits, after-hours ED consults, community crisis response, telehealth from remote clinic, overnight inpatient cover, transport with patient, isolated interview rooms.",
        "RISK CONTROLS: avoid lone work for high-risk assessments, roster second staff or security, duress alarm, check-in/check-out protocol, safe interview room, clear exit, phone/radio coverage, staff location known, escalation plan, transport plan, fatigue management.",
        "'That is how the service has always operated' is not a defence — foreseeable risk that has been accepted as normal is still a WHS liability.",
        "Even in settings where some lone work is unavoidable, explicit controls must be in place — not left to individual staff judgement.",
      ],
      commonTrap:
        "Allowing lone work because 'that is how the service has always operated.'",
    },
    {
      id: "s10",
      order: 10,
      title: "Security and Police",
      colorTag: "red",
      explanation:
        "Security and police are safety resources, not clinical substitutes. The response must be proportionate, least restrictive and culturally safe — but serious imminent risk cannot go unaddressed.",
      keyPoints: [
        "USE SECURITY WHEN: immediate violence or threat, unsafe visitor, staff need safe escort, ward containment issue, weapon concern, patient absconding with immediate safety risk, ED violence.",
        "USE POLICE WHEN: serious assault, weapon, credible threat to staff/family/public, stalking, serious property damage, patient missing with serious risk, family violence risk, criminal behaviour requiring police response.",
        "CULTURAL SAFETY: for Aboriginal, refugee, trauma, youth or forensic patients, consider risk of retraumatisation and use cultural/advocacy support where possible — but do not avoid police where serious imminent safety risk exists.",
        "Either overusing police for behavioural control or avoiding police despite serious credible threat are both governance failures.",
      ],
      commonTrap:
        "Either overusing police for behavioural control or avoiding police despite a serious credible threat.",
    },
    {
      id: "s11",
      order: 11,
      title: "Duress Alarms and Safe Facilities",
      colorTag: "purple",
      explanation:
        "Safe facilities are a governance responsibility. Placing responsibility on individual staff vigilance rather than system safety is the core facility-governance error.",
      keyPoints: [
        "CHECK: duress alarms work and staff know how to use them, response time is tested, interview rooms have two exits where possible, furniture not usable as weapons, clear sightlines, safe waiting rooms, CCTV policy, secure doors, safe parking, lighting, reception screens where needed, after-hours access control, safe room for de-escalation, personal alarms for outreach, rural/remote communication systems.",
        "MEQ TRAP — POOR: 'Remind staff to be careful.' BETTER: 'Review environmental controls, duress alarm function, response drills, staffing, interview-room layout and escalation procedures.'",
        "A duress alarm that nobody has tested and nobody knows how to use is not a safety control — it is a false reassurance.",
        "After any incident, audit whether the existing controls actually worked — not just whether they were in place on paper.",
      ],
      commonTrap:
        "Placing responsibility on individual staff vigilance rather than system safety controls.",
    },
    {
      id: "s12",
      order: 12,
      title: "Staffing Ratios and Workload Risk",
      colorTag: "amber",
      explanation:
        "Unsafe staffing is both a WHS and a patient-safety issue. Using restrictive practice or rushed discharge to compensate for unsafe staffing is a clinical governance failure.",
      keyPoints: [
        "RISKS INCREASE WITH: high acuity, inexperienced staff mix, frequent seclusion/restraint, ED boarding, high leave observations, multiple admissions, staff sickness, locum gaps, overtime, poor handover, no security, high community caseload, rural travel, no after-hours consultant support.",
        "CONSULTANT ROLE: name the operational risk, prioritise urgent work, escalate to nurse manager or service director, document unsafe staffing concerns, adjust admissions/leave where clinically justified, request additional staff or security, use bed-management escalation.",
        "ALSO: avoid using seclusion/restraint to compensate for staffing, review incidents and near misses, contribute to workforce planning.",
        "Documenting 'unsafe staffing' formally protects the consultant and the team — and creates a governance paper trail for escalation.",
      ],
      commonTrap:
        "Using restrictive practice or rushed discharge to compensate for unsafe staffing.",
    },
    {
      id: "s13",
      order: 13,
      title: "Post-Incident Debrief",
      colorTag: "teal",
      explanation:
        "Debrief is required after assault, threats, restraint, suicide, serious self-harm, death, stalking, critical incident or major complaint. Saying 'debrief staff' without defining psychological support, system learning or action is insufficient.",
      keyPoints: [
        "IMMEDIATE DEFUSING (right after incident): brief, voluntary, safety-focused, check injuries, identify immediate support, ensure staffing cover, identify urgent risk controls.",
        "FORMAL DEBRIEF (later, when safe): multidisciplinary, includes psychological support, reviews what happened, identifies system factors, avoids blame, updates safety plans, leads to documented actions.",
        "Defusing and formal debrief are two distinct processes with different timing, format and purposes — conflating them into a single 'debrief' misses both.",
        "The formal debrief should produce documented actions with owners and timelines — not just a conversation.",
      ],
      commonTrap:
        "Saying 'debrief staff' but not defining psychological support, system learning or action.",
    },
    {
      id: "s14",
      order: 14,
      title: "Psychological Support After Incident",
      colorTag: "green",
      explanation:
        "Staff may develop acute stress reactions, PTSD symptoms, moral injury or burnout after incidents. Treating psychological injury as weakness rather than work-related harm is a WHS governance failure.",
      keyPoints: [
        "STAFF MAY DEVELOP: acute stress reaction, guilt, shame, fear, anger, sleep disturbance, hypervigilance, avoidance, PTSD symptoms, depression, moral injury, burnout.",
        "SUPPORT OPTIONS: immediate check-in, time out from clinical area, EAP, peer support, supervisor support, GP or independent care, trauma-informed support, workers compensation if injured, graduated return to work, review of workload.",
        "AVOID: pressuring staff to discuss details repeatedly — this can re-traumatise and create secondary harm.",
        "MEQ TRAP — POOR: 'Debrief staff.' BETTER: 'Check immediate psychological injury, offer EAP/GP/peer support, adjust duties if needed, document workplace injury pathway and review return-to-work plan.'",
      ],
      commonTrap:
        "Treating psychological injury as weakness rather than work-related harm.",
    },
    {
      id: "s15",
      order: 15,
      title: "Reporting",
      colorTag: "purple",
      explanation:
        "Reporting is not blame — it allows the service to identify hazards, support staff and prevent recurrence. Completing only a clinical incident report and missing WHS reporting is incomplete governance.",
      keyPoints: [
        "REPORT THROUGH: incident management system, WHS/occupational violence reporting, line manager or NUM, clinical director/service manager, security report, police report if indicated, workers compensation process, risk register.",
        "ALSO REPORT TO: health and safety representative/committee, occupational violence committee, regulator notification if notifiable incident, governance committee for patterns.",
        "Occupational violence is both a clinical incident and a WHS incident — both streams require separate reports.",
        "Patterns of unreported incidents represent a cultural failure ('they didn't report it because nothing ever happens') as much as an individual failure — culture change is part of the governance response.",
      ],
      commonTrap:
        "Completing only a clinical incident report and missing the WHS reporting stream.",
    },
    {
      id: "s16",
      order: 16,
      title: "Occupational Violence Policy",
      colorTag: "purple",
      explanation:
        "An occupational violence policy means the service actively prevents and responds to violence — it does not mean abandoning clinically unwell patients. Using 'zero tolerance' to justify punitive care or exclusion is a misapplication.",
      keyPoints: [
        "POLICY SHOULD COVER: definition of violence and aggression, zero tolerance of violence (not zero care of patients), risk assessment, de-escalation, code black/security response, police criteria, duress alarm use, home-visit safety, lone-worker procedure, post-incident medical and psychological support.",
        "POLICY SHOULD ALSO COVER: reporting requirements, investigation and feedback, staff training, visitor restrictions, patient behavioural agreements where appropriate, review of repeated incidents.",
        "KEY PHRASE: 'Zero tolerance means the service actively prevents and responds to violence; it does not mean abandoning clinically unwell patients.'",
        "A behavioural agreement with a patient who has been violent can be therapeutic and safety-promoting — it sets expectations and gives the patient agency, while documenting the clinical risk.",
      ],
      commonTrap:
        "Using 'zero tolerance' to justify punitive care or exclusion without safe alternative care.",
    },
    {
      id: "s17",
      order: 17,
      title: "Staff Psychological Injury as WHS",
      colorTag: "amber",
      explanation:
        "Psychological hazards are WHS issues requiring prevention, support, reporting and system review. Seeing psychological injury as personal resilience failure rather than a workplace hazard misses the governance dimension.",
      keyPoints: [
        "PSYCHOLOGICAL INJURY MAY ARISE FROM: occupational violence, repeated threats, bullying, sexual harassment, racism, moral injury, repeated suicide exposure, poor support, high workload, unsafe rosters, poor organisational justice, role conflict, traumatic material.",
        "KEY POINT: psychological hazards are work health and safety issues — they require prevention, support, reporting and system review, not just individual resilience.",
        "Moral injury (the harm from doing or witnessing something that violates one's moral code — such as unsafe staffing forcing poor care) is increasingly recognised as a distinct psychological hazard in psychiatry.",
        "A service with high rates of psychological injury claims should treat this as a system signal requiring governance review — not individual management of affected staff.",
      ],
      commonTrap:
        "Seeing psychological injury as personal resilience failure rather than a workplace hazard.",
    },
    {
      id: "s18",
      order: 18,
      title: "Bullying, Harassment and Discrimination",
      colorTag: "red",
      explanation:
        "Bullying is a WHS issue, not merely 'interpersonal conflict.' Calling bullying a 'personality clash' and missing governance responsibility is a consistent mark-losing error.",
      keyPoints: [
        "EXAMPLES: repeated humiliation, shouting or intimidation, racist or sexist comments, exclusion, unreasonable work demands, retaliation after complaint, sexual harassment, belittling junior staff, targeting peer workers or cultural workers.",
        "RESPONSE: ensure immediate safety, listen and validate, document factual pattern, use local bullying/HR process, protect from retaliation, support affected staff, consider patient-safety impact, address culture not only individuals, escalate serious or repeated conduct, monitor outcomes.",
        "Bullying creates a culture where staff do not raise safety concerns or incident reports — it is therefore a patient-safety risk, not only a staff-welfare issue.",
        "The response must address both the individual conduct and the cultural/systemic factors — an HR process for the perpetrator alone does not fix the culture.",
      ],
      commonTrap:
        "Calling bullying a 'personality clash' and missing governance responsibility.",
    },
    {
      id: "s19",
      order: 19,
      title: "Fatigue and Burnout",
      colorTag: "amber",
      explanation:
        "Fatigue and burnout create safety risks for staff and patients. Treating burnout as an individual coping problem only misses the system/governance dimension.",
      keyPoints: [
        "RISK FACTORS: long shifts, repeated nights/on-calls, insufficient breaks, overtime, high acuity, moral distress, repeated trauma, bullying, poor control, inadequate supervision, service gaps, rural travel, exam/training pressures.",
        "CONSULTANT RESPONSE: identify fatigue as operational risk, check immediate fitness for duty, remove staff from unsafe duties if impaired, ensure rest breaks, escalate unsafe roster, review workload, support leave, EAP/GP support, monitor return, do not normalise chronic exhaustion.",
        "MEQ TRAP — POOR: 'Encourage resilience.' BETTER: 'Address fatigue as a work-system hazard: workload, roster, breaks, supervision, staffing and psychological support.'",
        "A fatigued consultant or registrar making high-stakes decisions at the end of a long shift is a patient-safety risk — not a personal performance issue.",
      ],
      commonTrap:
        "Treating burnout as an individual coping problem only.",
    },
    {
      id: "s20",
      order: 20,
      title: "Unsafe Facilities",
      colorTag: "purple",
      explanation:
        "Unsafe facilities are a consultant governance responsibility. Telling staff to compensate for unsafe design by being more vigilant places system responsibility on individuals.",
      keyPoints: [
        "UNSAFE FACILITIES INCLUDE: no safe interview rooms, no or broken duress alarms, poor lighting or parking, overcrowded ED, mixed acuity ward, poor sightlines, unsafe furniture, no safe outdoor space, inadequate secure doors, no staff retreat area, no private family room, unsafe home-visit fleet or vehicles, poor phone coverage.",
        "CONSULTANT GOVERNANCE RESPONSE: document hazards, escalate to service manager, add to risk register, use interim controls, conduct environmental audit, consult staff/HSR, consumer/carer input if relevant, capital works or business case if needed, use incident data to support case, monitor actions.",
        "Interim controls while waiting for capital works are mandatory — interim = not acceptable permanently, but essential now.",
        "Incident data is the strongest lever for capital works arguments — aggregate near-misses and incidents to build the governance case.",
      ],
      commonTrap:
        "Telling staff to compensate for unsafe design by being more vigilant.",
    },
    {
      id: "s21",
      order: 21,
      title: "Home Visit Risk Assessment Template",
      colorTag: "teal",
      explanation:
        "A structured pre-visit risk assessment must change the visit plan when risk is identified — completing the checklist but proceeding unchanged defeats its purpose.",
      keyPoints: [
        "PATIENT FACTORS: recent aggression, psychosis/paranoia, intoxication, threats, weapons, domestic violence, animals, unknown visitors, past unsafe visits.",
        "ENVIRONMENT: location known, phone reception, remote area, safe parking, exits, lighting, time of day, neighbourhood risk.",
        "STAFF FACTORS: lone worker, new staff, trainee, fatigue, gender/cultural safety issue, staff previously threatened by this patient.",
        "CONTROLS: two staff, police/ambulance if needed, duress alarm, check-in/check-out, clinic appointment instead, telehealth, daylight visit, clear exit plan, do not enter if unsafe.",
      ],
      meqApplication:
        "The home visit risk assessment is reusable in any community psychiatry stem — cite patient, environment and staff factors, then name the specific controls you would implement.",
      commonTrap:
        "Completing risk assessment but not changing the visit plan when risk is identified.",
    },
    {
      id: "s22",
      order: 22,
      title: "Return to Work After Incident",
      colorTag: "green",
      explanation:
        "Return-to-work planning may be needed after assault, stalking, psychological injury, serious complaint or critical incident. Expecting staff to return to the same unsafe environment without changes is a WHS governance failure.",
      keyPoints: [
        "RETURN TO WORK — CONSIDER: medical clearance, psychological readiness, worker preference, graded return, modified duties, avoiding contact with perpetrator if needed, security escort or parking.",
        "ALSO CONSIDER: supervision support, debrief and reflective practice, workers compensation process, review of workplace controls, regular check-ins, confidentiality of staff health details.",
        "RETURN TO WORK CARD: medical and psychological readiness + modified duties + avoid contact with perpetrator if needed + regular check-ins + confidentiality of staff health details + review of workplace controls.",
        "Return to work should not occur by pressure or guilt — it should be safe, supported and planned.",
      ],
      commonTrap:
        "Expecting staff to return to the same unsafe environment without changes.",
    },
    {
      id: "s23",
      order: 23,
      title: "MEQ Example Traps",
      colorTag: "blue",
      explanation:
        "Six worked examples covering the most common WHS/staff-safety MEQ stems. In each, the core error is seeing WHS as human resources only rather than clinical governance.",
      keyPoints: [
        "EXAMPLE 1 — ASSAULT ON NURSE: nurse punched by involuntary patient; team says 'it happens.' TRAP: normalising violence. BETTER: ensure immediate safety, treat staff injury, review patient risk/legal status, report occupational violence, support nurse, review antecedents and staffing/environment.",
        "EXAMPLE 2 — UNSAFE HOME VISIT: case manager asked to visit paranoid patient alone after threats. TRAP: sending staff because 'engagement matters.' BETTER: home-visit risk assessment, consider two staff/police/clinic review, check-in system, duress alarm — do not send lone worker into foreseeable danger.",
        "EXAMPLE 3 — STALKING CLINICIAN: patient waits near psychiatrist's car park and sends personal messages. TRAP: calling it transference only. BETTER: treat as stalking/boundary/WHS risk — preserve evidence, inform manager/security, risk assess patient, change contact arrangements, consider police, support clinician.",
        "EXAMPLE 4 — STAFF PSYCHOLOGICAL INJURY: registrar avoids ward after patient suicide. TRAP: 'Attend debrief.' BETTER: assess acute stress, fitness for duty and suicide risk if concerned; offer GP/EAP/peer support, adjust workload and plan return.",
        "EXAMPLE 5 — BULLYING: NUM repeatedly humiliates junior nurses and peer workers. TRAP: 'Personality clash.' BETTER: treat as WHS and culture issue — listen, document pattern, use HR/WHS pathway, protect from retaliation, address patient-safety impact.",
        "EXAMPLE 6 — UNSAFE FACILITY: interview room has no alarm and patient blocks the door. TRAP: tell staff to be careful. BETTER: remove immediate risk, stop use of unsafe room, escalate facility hazard, arrange controls and document on risk register.",
      ],
      commonTrap:
        "Seeing WHS as human resources only rather than clinical governance.",
    },
    {
      id: "s24",
      order: 24,
      title: "Command-Word Discipline",
      colorTag: "amber",
      explanation:
        "WHS stems require mechanism and rationale, not generic 'support staff.' Answering with generic support without explaining safety mechanism, reporting and system controls loses marks.",
      keyPoints: [
        "LIST: concise items — 'Immediate safety. Medical review. Security/police. Incident report. Staff support. WHS review.'",
        "OUTLINE (list and justify): 'Remove staff from danger — because the immediate duty is to prevent further harm. Report as occupational violence — because assault is a WHS incident, not merely challenging behaviour. Review system controls — because repeated violence may reflect staffing, facility or training gaps.'",
        "DESCRIBE (list and explain): 'Conduct home-visit risk assessment — because community staff may be exposed to foreseeable violence, weapons, intoxication, domestic violence or isolation without immediate backup.'",
        "DISCUSS (name the tension): 'There is tension between maintaining patient access to care and protecting staff from foreseeable harm. A defensible position is to continue care through a safer model — clinic review, two-person visit, security/police support or telehealth — rather than sending staff into avoidable danger.'",
      ],
      commonTrap:
        "Answering with generic 'support staff' without explaining safety mechanism, reporting and system controls.",
    },
    {
      id: "s25",
      order: 25,
      title: "Examiner Phrases",
      colorTag: "green",
      explanation:
        "Use these phrases to signal consultant-level WHS reasoning. Missing the language of WHS governance, occupational violence, psychosocial hazard and system controls signals registrar-level thinking.",
      keyPoints: [
        "'I would treat this as both an immediate safety issue and a WHS governance issue.'",
        "'Staff safety is a patient-safety issue.'",
        "'Occupational violence should not be normalised as part of psychiatric work.'",
        "'I would not send staff alone into a foreseeable unsafe home visit.'",
        "'Zero tolerance of violence does not mean zero care for the patient.'",
        "'The response should include immediate containment, staff support, reporting, investigation and system controls.'",
        "'Debrief should address staff psychological injury, not only operational learning.'",
        "'Bullying and fatigue are psychosocial hazards and should be managed as WHS risks.'",
        "'Unsafe facilities require escalation through risk register, management and governance structures.'",
      ],
      commonTrap:
        "Missing the language of WHS governance, occupational violence, psychosocial hazard and system controls.",
    },
    {
      id: "s26",
      order: 26,
      title: "Common Traps",
      colorTag: "amber",
      explanation:
        "Use this as a pre-submit checklist for any WHS/staff-safety MEQ stem. Each item is a documented mark-losing gap.",
      keyPoints: [
        "Normalising staff assault.",
        "Focusing only on patient risk and ignoring staff injury.",
        "Calling security but omitting follow-up and reporting.",
        "Sending staff on unsafe home visits.",
        "Failing to mention duress/check-in systems.",
        "Ignoring police where credible serious threat exists.",
        "Treating stalking as transference only.",
        "Saying 'debrief' without psychological support.",
        "Ignoring workers compensation or return-to-work.",
        "Reducing burnout to resilience training.",
        "Treating bullying as interpersonal conflict.",
        "Ignoring unsafe facilities.",
        "Using restrictive practice as substitute for staffing.",
        "Failing to escalate repeated occupational violence to governance.",
      ],
      meqApplication:
        "Use this as a pre-submit checklist for WHS/staff-safety stems — any item present in the stem that is absent from your answer is a lost mark.",
    },
    {
      id: "s27",
      order: 27,
      title: "Consultant-Level Summary",
      colorTag: "green",
      explanation:
        "This paragraph is reusable in MEQ stems involving assault on staff, threats, stalking, unsafe home visits, lone-worker risk, staff psychological injury, bullying, fatigue, burnout and unsafe facilities.",
      keyPoints: [
        "IMMEDIATE SAFETY: 'I would treat staff safety as a clinical governance and WHS issue. My first priority is immediate safety: remove staff from danger, call security or police if needed, provide medical care and protect other patients.'",
        "CLINICAL AND STAFF SUPPORT: 'I would then review the patient's clinical risk and care plan while ensuring the affected staff member receives debrief, psychological support, reporting and return-to-work planning if needed.'",
        "GOVERNANCE: 'I would document and report the incident, review occupational violence, staffing, facility, duress and lone-worker controls, and escalate repeated or serious hazards through WHS, risk register and governance processes.'",
        "FULL PARAGRAPH: 'I would treat staff safety as a clinical governance and WHS issue. My first priority is immediate safety: remove staff from danger, call security or police if needed, provide medical care and protect other patients. I would then review the patient's clinical risk and care plan while ensuring the affected staff member receives debrief, psychological support, reporting and return-to-work planning if needed. I would document and report the incident, review occupational violence, staffing, facility, duress and lone-worker controls, and escalate repeated or serious hazards through WHS, risk register and governance processes. The aim is to continue patient care through a safe model, not normalise preventable harm to staff.'",
      ],
      meqApplication:
        "This paragraph should be reusable in MEQ stems involving assault on staff, threats, stalking, unsafe home visits, lone-worker risk, staff psychological injury, bullying, fatigue, burnout and unsafe facilities.",
    },
  ],
};

export const CULTURAL_SAFETY: Note = {
  id: "cultural_safety",
  title: "Cultural Safety, Institutional Racism, Interpreters and Conflict Governance",
  category: "Clinical Governance / Cultural Safety / Communication / Ethics",
  description:
    "A consultant-level framework for system-level cultural safety and institutional racism governance in psychiatry, with detailed interpreter and conflict-management guidance covering Aboriginal patient disengagement, refugee mistrust, interpreter access, family interpreter conflict, small-community confidentiality, ACCHO partnership, cultural supervision, data monitoring and racism complaints.",
  sections: [
    {
      id: "s01",
      order: 1,
      title: "Core Principle",
      colorTag: "blue",
      explanation:
        "Cultural safety is judged by the patient, family and community — not by the service's intention. A service is not culturally safe because it says 'we treat everyone the same.' Writing only 'be culturally sensitive' without governance actions is the core mark-losing error.",
      keyPoints: [
        "CULTURAL SAFETY ASKS: 'Who is not engaging, who is being harmed, who is being misdiagnosed, who feels unsafe, and what must change in our service?' — not 'do our staff have good intentions?'",
        "CULTURAL SAFETY vs CULTURAL COMPETENCE: cultural competence = staff knowledge and skills. Cultural safety = patient, family and community experience of respectful, safe, accountable care.",
        "STRONG MEQ ANSWER: 'I would treat this as both a clinical-safety and cultural-governance issue. I would respond to the immediate patient concern, acknowledge the possibility of culturally unsafe care or racism, involve Aboriginal liaison/cultural workers and community-controlled partners where appropriate, review interpreter and communication systems, examine service data and complaints, and implement changes with community governance rather than relying only on staff education.'",
        "GOVERNANCE UPGRADE — WEAK: 'Provide cultural awareness training.' CONSULTANT: 'Review cultural safety through community partnership, interpreter access, Aboriginal liaison, data monitoring, complaints, workforce, cultural supervision, pathway redesign and re-audit.'",
      ],
      commonTrap:
        "Writing only 'be culturally sensitive' without governance actions.",
    },
    {
      id: "s02",
      order: 2,
      title: "Why This Is Examinable",
      colorTag: "blue",
      explanation:
        "The examiner wants you to see both the patient-level issue and the system-level cultural safety issue. Answering only with individual cultural formulation and missing service governance loses marks.",
      keyPoints: [
        "MEQ STEM PATTERNS: Aboriginal patient disengages after culturally unsafe care, refugee patient refuses treatment due to mistrust, interpreter not used, service excludes Elders/community, misdiagnosis of culturally meaningful experience, family/community not consulted.",
        "MORE PATTERNS: complaint of racism, Aboriginal youth clinic planned without ACCHO consultation, ED staff misgender/stereotype/shame or expose a culturally vulnerable patient, discharge plan ignores cultural/community support.",
        "The examiner expects both an immediate clinical response and a service governance response — candidates who give only one dimension lose half the marks.",
        "KEY POINT: the examiner wants you to see both the patient-level issue and the system-level cultural safety issue.",
      ],
      commonTrap:
        "Answering only with individual cultural formulation and missing service governance.",
    },
    {
      id: "s03",
      order: 3,
      title: "Cultural Safety Versus Cultural Competence",
      colorTag: "purple",
      explanation:
        "Cultural competence is staff knowledge. Cultural safety is the patient and community experience of care, supported by governance, accountability and service redesign. Thinking cultural safety is achieved by one-off staff education is a persistent mark-losing error.",
      keyPoints: [
        "CULTURAL COMPETENCE OFTEN MEANS: knowledge of cultural groups, awareness of traditions, communication skills, interpreter use, avoiding stereotypes.",
        "CULTURAL SAFETY ASKS: was the person respected, was power shared, was racism identified and addressed, did the service adapt, was the community involved, did the patient/family feel safe, did outcomes improve, did complaints lead to change?",
        "EXAM PHRASE: 'Cultural competence is staff knowledge; cultural safety is the patient and community experience of care, supported by governance, accountability and service redesign.'",
        "A service can have well-trained staff and still produce culturally unsafe outcomes — the difference lies in accountability, power-sharing and system-level change.",
      ],
      commonTrap:
        "Thinking cultural safety is achieved by one-off staff education.",
    },
    {
      id: "s04",
      order: 4,
      title: "Institutional Racism",
      colorTag: "red",
      explanation:
        "Institutional racism means service policies, routines, culture, data, staffing, access pathways or decision-making structures produce inequitable or unsafe outcomes — even if individuals do not intend harm. Looking only for individual racist intent and missing systemic patterns is the core error.",
      keyPoints: [
        "EXAMPLES: Aboriginal families labelled 'non-compliant' when service model is inaccessible, interpreter not booked because 'their English is good enough,' refugee mistrust framed as paranoia without trauma context, Elders/community excluded from youth-service design.",
        "MORE EXAMPLES: Aboriginal health workers used informally but not paid/supported/included in governance, complaints of racism handled as 'miscommunication' only, cultural leave/Sorry Business/family obligations treated as poor engagement.",
        "DATA-LEVEL EXAMPLES: seclusion/restraint rates not monitored by Aboriginality or ethnicity, admission/discharge data not reviewed for inequity, service policies require hospital attendance when community-based care would be safer.",
        "Institutional racism does not require a racist individual — it operates through the accumulated effect of policies, norms and structures that were designed without equity in mind.",
      ],
      commonTrap:
        "Looking only for individual racist intent and missing systemic patterns.",
    },
    {
      id: "s05",
      order: 5,
      title: "Cultural Governance",
      colorTag: "purple",
      explanation:
        "Cultural governance means cultural safety is built into how the service is led, measured and improved. Adding cultural training but leaving the same unsafe service pathway unchanged is the consistent governance gap.",
      keyPoints: [
        "CULTURAL GOVERNANCE INCLUDES: Aboriginal and Torres Strait Islander leadership, ACCHO partnership, community consultation, cultural advisory group, Aboriginal liaison/health workers embedded in pathways, interpreter governance, cultural supervision.",
        "ALSO INCLUDES: cultural safety audit, racism complaint process, data monitoring by Aboriginality/language/ethnicity, staff training with accountability, consumer/carer/community feedback, service redesign.",
        "MEQ PHRASE: 'I would treat this as cultural governance, not only cultural awareness training.'",
        "The word 'governance' signals to the examiner that you understand accountability, measurability and system-level change — not just good intentions.",
      ],
      commonTrap:
        "Adding cultural training but leaving the same unsafe service pathway unchanged.",
    },
    {
      id: "s06",
      order: 6,
      title: "Aboriginal Patient Disengages After Culturally Unsafe Care",
      colorTag: "green",
      explanation:
        "Disengagement should be documented as a service-related barrier until proven otherwise. Labelling it as non-compliance before reviewing service barriers is a governance failure.",
      keyPoints: [
        "IMMEDIATE CLINICAL RESPONSE: contact patient/family in a respectful non-blaming way, ask whether they want Aboriginal liaison/health worker involvement, clarify current risk and safety, offer choice of location (clinic, ACCHO, home visit, community setting, telehealth).",
        "ALSO: ask who should be involved (family, Elder, trusted worker, cultural support), avoid 'DNA/non-compliant' language, document engagement barrier as service-related until proven otherwise.",
        "GOVERNANCE RESPONSE: review what happened, ask whether the service failed to ask about family/community decision-making, check whether Aboriginal liaison was offered, review staff communication, review appointment location/transport/cost/stigma/confidentiality.",
        "ALSO: discuss with ACCHO or cultural governance group, update pathway so future disengagement triggers culturally safe outreach.",
      ],
      commonTrap:
        "Labelling disengagement as non-compliance before reviewing service barriers.",
    },
    {
      id: "s07",
      order: 7,
      title: "Refugee Patient Refuses Treatment Due to Mistrust",
      colorTag: "amber",
      explanation:
        "Refugee mistrust may reflect trauma, detention, torture, authority fear, prior coercion, racism, visa insecurity, language barriers or stigma. Treating mistrust as psychosis only is the core error.",
      keyPoints: [
        "DO NOT immediately pathologise mistrust. Assess: psychosis, delirium, depression, PTSD, substance use, trauma triggers in hospital, fear of authorities, fear of information affecting visa/residency, shame/stigma, health literacy, language needs, family/community supports, previous experiences with services.",
        "RESPONSE: use professional interpreter, explain role and confidentiality, avoid coercive or paternalistic tone, offer refugee health/cultural liaison, validate mistrust without colluding with delusion, separate clinical treatment from immigration/police processes where possible.",
        "ALSO: involve trusted GP/community organisation if consented, allow time and repeated explanations.",
        "Mistrust of services is a rational response to prior coercive care, detention, or systematic violence — distinguishing between mistrust-as-trauma and mistrust-as-psychosis requires time, interpreter support and cultural consultation.",
      ],
      commonTrap:
        "Treating mistrust as psychosis only.",
    },
    {
      id: "s08",
      order: 8,
      title: "Interpreter Use Is Patient Safety",
      colorTag: "teal",
      explanation:
        "Interpreter use is not just courtesy — it is a patient-safety and clinical-safety intervention. Thinking interpreter use is optional if the patient has some conversational English is a consistent mark-losing error.",
      keyPoints: [
        "INTERPRETER USE AFFECTS: diagnosis, risk assessment, capacity, consent, trauma disclosure, child safety, domestic violence assessment, medication counselling, Mental Health Act explanations, discharge planning.",
        "STRONG MEQ ANSWER: 'I would use a professional interpreter as a patient-safety and cultural-safety intervention, because inaccurate communication can invalidate capacity assessment, distort mental-state findings, conceal risk, worsen mistrust and lead to unsafe treatment or discharge.'",
        "Acute illness, fear, delirium, psychosis or trauma may reduce second-language ability — a patient who speaks conversational English when well may be unable to communicate accurately when distressed or unwell.",
        "NSQHS Partnering with Consumers Standard supports interpreter access as a communication and partnership system, not an optional add-on.",
      ],
      commonTrap:
        "Thinking interpreter use is optional if the patient has some conversational English.",
    },
    {
      id: "s09",
      order: 9,
      title: "Interpreter Three-Phase Model",
      colorTag: "teal",
      explanation:
        "Use this structure in any MEQ involving interpreter use. Using the interpreter as a cultural expert or decision-maker rather than a communication professional conflates roles inappropriately.",
      keyPoints: [
        "BEFORE: check whether interpreter is needed, confirm language and dialect, check gender preference, check whether interpreter from small community creates confidentiality concern, obtain patient consent where possible, brief interpreter on purpose of interview, explain need for accurate and verbatim translation, clarify confidentiality, consider phone/video interpreter if local community issue, arrange urgent triage first if waiting would be unsafe.",
        "DURING: speak to patient not interpreter, use short sentences, avoid jargon, ask one question at a time, pause for interpretation, clarify confusing responses, ask for verbatim translation where mental state matters, observe non-verbal behaviour, check understanding.",
        "AFTER: ask interpreter about language clarity/idioms of distress/communication issues, ask whether patient sounded coherent or disorganised in their own language, ask about cultural or linguistic misunderstandings, document interpreter name/ID/language/mode/limitations, do not ask interpreter to diagnose.",
        "INTERPRETER CONFLICT MATRIX — PATIENT REFUSES: risk = invalid assessment; response = explore reason, offer alternatives; document = refusal and alternatives offered. FAMILY INTERPRETS: risk = distorted information, invalid capacity; response = use professional interpreter; document = why family was not used for high-stakes assessment. SMALL COMMUNITY: risk = confidentiality breach, refusal of care; response = phone/video from outside community. INTERPRETER BIASED: risk = invalid assessment; response = pause, restate role, switch interpreter. DV/TRAUMA: risk = safety breach, retelling harm; response = professional female interpreter if preferred, private space. URGENT MEDICAL RISK: risk = delay causes harm; response = limited triage assessment, then interpreter asap.",
      ],
      commonTrap:
        "Using interpreter as a cultural expert or decision-maker rather than a communication professional.",
    },
    {
      id: "s10",
      order: 10,
      title: "Patient Refuses Interpreter",
      colorTag: "amber",
      explanation:
        "Interpreter refusal must be explored, not accepted at face value and documented. Continuing in English without documenting limitations or offering alternatives is an inadequate response.",
      keyPoints: [
        "REASONS FOR REFUSAL: shame, confidentiality fear, small community gossip, political/religious/community conflict, fear interpreter is linked to past oppressors, fear immigration/police involvement, paranoia, trauma, gender mismatch, family pressure, preference to speak English to avoid stigma.",
        "RESPONSE: explore reason for refusal, explain interpreter confidentiality and professional role, offer telephone/video interpreter, offer different dialect or gender interpreter, offer interpreter from outside the local community, assess capacity to refuse interpreter if high-stakes decision, do limited urgent assessment if medically unsafe to wait, document refusal/alternatives offered/limitations.",
        "MEQ PHRASE: 'I would explore interpreter refusal rather than assuming non-engagement.'",
        "Interpreter refusal due to community fear may be the most important clinical finding of the encounter — it signals the level of trust the patient has in the service and shapes the entire therapeutic relationship.",
      ],
      commonTrap:
        "Continuing in English without documenting limitations or offering alternatives.",
    },
    {
      id: "s11",
      order: 11,
      title: "Family Wants to Interpret",
      colorTag: "amber",
      explanation:
        "Family interpreting may feel acceptable to the patient and can support engagement, but it can seriously distort assessment. Using a son/daughter/spouse as interpreter for trauma, family violence, capacity or consent is a consistent mark-losing error.",
      keyPoints: [
        "RISKS: family edits or censors information, patient withholds trauma/domestic violence/sexuality/self-harm/psychosis, child becomes interpreter for adult distress, family conflict or coercion, shame, inaccurate medical vocabulary, loss of confidentiality, family controls narrative, capacity assessment becomes invalid.",
        "CONSULTANT POSITION: 'I would use a professional interpreter for assessment, capacity, risk and consent. Family can still be involved as collateral and support with the patient's consent, but should not be the main interpreter for high-stakes or sensitive clinical decisions.'",
        "The most dangerous family interpreter scenario is a spouse interpreting a domestic violence assessment — the patient cannot disclose safely, the interpreter controls what is communicated, and the clinician may have no way of knowing what is being omitted.",
        "ROLE SEPARATION: interpreter translates. Family provides collateral/support with consent. Cultural worker advises on cultural safety. Aboriginal liaison/health worker supports engagement and cultural pathway. Clinician remains responsible for diagnosis, risk, capacity and treatment decisions.",
      ],
      commonTrap:
        "Using a son/daughter/spouse as interpreter for trauma, family violence, capacity or consent.",
    },
    {
      id: "s12",
      order: 12,
      title: "Interpreter From Small Community",
      colorTag: "amber",
      explanation:
        "Small-community interpreter conflict is common in refugee, Aboriginal, rural, islander or small migrant communities. Assuming confidentiality statement alone removes small-community fear misses the lived reality of these communities.",
      keyPoints: [
        "RISKS: patient fears gossip, interpreter knows family, community politics, shame, trauma disclosure blocked, family violence risk, patient refuses care, interpreter bias or discomfort.",
        "MANAGEMENT: ask patient privately if interpreter is acceptable, offer phone/video interpreter from another region, check dialect and gender preference, document concern and alternative offered, do not force local interpreter if it destroys trust unless emergency requires temporary pragmatic communication, arrange follow-up with suitable interpreter.",
        "In a small refugee community, a formal confidentiality statement does not overcome the lived reality that the interpreter will see the patient's family at community events — the patient's fear is rational, not paranoid.",
        "Telephone and video interpreter services remove the community overlap — this is the practical solution, not a reassurance that confidentiality will be maintained.",
      ],
      commonTrap:
        "Assuming confidentiality statement alone removes small-community fear.",
    },
    {
      id: "s13",
      order: 13,
      title: "Interpreter Bias or Inaccurate Translation",
      colorTag: "red",
      explanation:
        "Warning signs must be acted upon — not noted and continued. Accepting a capacity or risk assessment when interpreter accuracy was doubtful is a patient-safety failure.",
      keyPoints: [
        "WARNING SIGNS: interpreter answers for patient, interpreter summarises long answers briefly, interpreter argues with patient, interpreter appears shocked or embarrassed, interpreter gives advice, interpreter speaks to family rather than patient, interpreter refuses to translate taboo content, patient becomes more fearful.",
        "MANAGEMENT: pause interview, restate interpreter role, ask for verbatim translation, clarify confusing answers, switch interpreter if needed, document limitations, repeat high-stakes assessment if accuracy doubtful.",
        "A capacity assessment or suicide risk assessment conducted through a biased or inaccurate interpreter is clinically unreliable — it must be repeated, not just noted.",
        "Documenting interpreter limitations protects the clinician and creates a record for any subsequent review — always document interpreter name/ID, language, mode and any concerns.",
      ],
      commonTrap:
        "Accepting a capacity or risk assessment when interpreter accuracy was doubtful.",
    },
    {
      id: "s14",
      order: 14,
      title: "Domestic Violence and Sexual Trauma Interpreter Conflict",
      colorTag: "red",
      explanation:
        "Family interpreters are unsafe in domestic violence or sexual trauma. Allowing spouse, parent or older child to interpret because they are available is a patient-safety failure.",
      keyPoints: [
        "USE: professional interpreter, female interpreter if patient prefers, female staff where possible, private space, no partner/family in room unless patient freely wants it and safety permits, explanation of confidentiality limits, child-safety assessment, trauma-informed pace.",
        "AVOID: repeated retelling of trauma where possible — each retelling in an unsafe setting adds to harm, not assessment.",
        "A domestic violence patient interpreting through their partner cannot safely disclose abuse — the interpreter controls both what is asked and what is reported.",
        "In ED settings, ensure male security staff are not the primary contact with a traumatised female refugee patient — gender-sensitive care, female staff presence, covering body, proceeding slowly and explaining each step are basic dignity requirements.",
      ],
      commonTrap:
        "Allowing spouse, parent or older child to interpret because they are available.",
    },
    {
      id: "s15",
      order: 15,
      title: "Capacity and Consent With Interpreters",
      colorTag: "red",
      explanation:
        "Capacity assessment through poor language support is weak or invalid. Accepting 'yes doctor' as informed consent is a consistent mark-losing error.",
      keyPoints: [
        "A PATIENT MAY APPEAR: thought disordered when actually language-discordant, cognitively impaired when unable to understand English, consenting when only nodding politely, refusing when they do not understand, paranoid when mistrust is trauma/cultural/authority-related.",
        "MEQ PHRASE: 'I would not rely on an English-language capacity assessment if the patient's preferred language is different. I would repeat the assessment with an appropriate interpreter and document the language limitations of any earlier assessment.'",
        "Polite nodding is not consent — in many cultures, direct disagreement with a doctor is considered disrespectful, and 'yes' may mean 'I hear you' rather than 'I agree and understand.'",
        "Any capacity or consent decision made without adequate language support must be reviewed — document the limitation clearly, and do not treat it as final.",
      ],
      commonTrap:
        "Accepting 'yes doctor' as informed consent.",
    },
    {
      id: "s16",
      order: 16,
      title: "Urgent Medical Risk Versus Waiting for Interpreter",
      colorTag: "red",
      explanation:
        "Urgent care and adequate language support are not mutually exclusive — triage now, then complete the proper assessment with an interpreter. Either delaying urgent care or treating a limited emergency conversation as a complete assessment are both errors.",
      keyPoints: [
        "EXAMPLES WHERE WAITING IS UNSAFE: head injury, sepsis, delirium, overdose, lithium toxicity, domestic violence injury, severe agitation, child safety emergency.",
        "APPROACH: do not delay urgent medical stabilisation, conduct limited immediate safety/medical assessment using best available communication, use bilingual staff only as emergency bridge if policy permits, arrange professional interpreter as soon as possible.",
        "ALSO: repeat full psychiatric/capacity/risk assessment once interpreter available, document limitations of the urgent assessment.",
        "MEQ PHRASE: 'I would not delay urgent medical care while waiting for an interpreter, but I would not treat a limited emergency conversation as a complete psychiatric or capacity assessment.'",
      ],
      commonTrap:
        "Either delaying urgent care or completing a full assessment without an interpreter.",
    },
    {
      id: "s17",
      order: 17,
      title: "Child/Adolescent Interpreter Conflict",
      colorTag: "teal",
      explanation:
        "Never use a child as interpreter for adult mental health, domestic violence, trauma, sexual matters, suicide risk or family violence. Allowing parents to interpret a young person's self-harm, sexual exploitation or trauma disclosure is a child-safety failure.",
      keyPoints: [
        "NEVER: use a child as interpreter for adult mental health, domestic violence, trauma, sexual matters, suicide risk or family violence.",
        "IN CAMHS, ALSO CONSIDER: young person's confidentiality, parent control of narrative, family shame, mature minor capacity, child protection, school demands, gender preference, interpreter neutrality, need to interview young person alone.",
        "MEQ PHRASE: 'I would separate the need for family involvement from the need for independent communication with the young person.'",
        "A child interpreting their parent's suicidality, psychosis or family violence is exposed to traumatic material they should not carry — it is both a clinical and a child-protection issue.",
      ],
      commonTrap:
        "Allowing parents to interpret a young person's self-harm, sexual exploitation or trauma disclosure.",
    },
    {
      id: "s18",
      order: 18,
      title: "Role Separation in Complex Cultural Assessments",
      colorTag: "teal",
      explanation:
        "Separate roles clearly in complex cultural assessments. Expecting interpreter or cultural worker to make clinical decisions transfers clinical responsibility inappropriately.",
      keyPoints: [
        "INTERPRETER: translates accurately, maintains confidentiality, does not diagnose, does not advocate unless separately appointed, does not censor.",
        "FAMILY: provides collateral, supports patient if patient consents, may help with values/history, should not control the narrative.",
        "CULTURAL WORKER / ABORIGINAL LIAISON: supports cultural safety, advises on engagement/family/community pathway and cultural context, helps bridge service/community, should not be asked to carry clinical responsibility alone.",
        "CLINICIAN: retains responsibility for diagnosis, risk, capacity, consent, treatment and documentation — this responsibility cannot be delegated to the interpreter, cultural worker or family.",
      ],
      commonTrap:
        "Expecting interpreter or cultural worker to make clinical decisions.",
    },
    {
      id: "s19",
      order: 19,
      title: "Interpreter Access as Governance",
      colorTag: "purple",
      explanation:
        "Interpreter access is a service-safety system, not an individual clinician responsibility. Treating interpreter failures as one-off clinician errors rather than system problems is a governance gap.",
      keyPoints: [
        "GOVERNANCE QUESTIONS: are interpreters available after hours, are clinicians trained to work with interpreters, are family members being used inappropriately, are gender/dialect/confidentiality issues considered, are interpreter refusals explored respectfully, are interpreter delays causing unsafe care?",
        "MORE GOVERNANCE QUESTIONS: are interpreter needs recorded in the file, are written materials translated, are cognitive/capacity/risk assessments being done without adequate language support?",
        "GOVERNANCE ACTIONS: interpreter booking pathway, after-hours interpreter access, documentation template for interpreter use/refusal, audit capacity/risk assessments in CALD patients, staff training, translated medication/discharge information, incident review when interpreter failure causes harm.",
        "A service that has no after-hours interpreter access is systematically exposing CALD patients to unsafe care — this is a governance failure, not a series of individual clinician errors.",
      ],
      commonTrap:
        "Treating interpreter failures as one-off clinician errors rather than system problems.",
    },
    {
      id: "s20",
      order: 20,
      title: "Aboriginal Liaison and Aboriginal Health Workers",
      colorTag: "green",
      explanation:
        "Aboriginal liaison officers, Aboriginal mental health workers and Aboriginal health practitioners are governance partners, not a fix for institutional racism. Calling Aboriginal liaison only after the patient disengages, instead of embedding them in the pathway, is tokenism.",
      keyPoints: [
        "THEY MAY SUPPORT: engagement and trust-building, cultural consultation, family/community liaison, explaining service processes, helping staff understand local context, culturally safe risk assessment, discharge planning, Sorry Business/kinship/local community dynamics, complaints and open disclosure.",
        "AVOID TOKENISM: do not expect Aboriginal staff to fix institutional racism alone, do not use them only after conflict, do not ask them to carry unpaid community labour, do not expose them to racism without support, do not exclude them from decision-making, do not ignore cultural supervision needs.",
        "Aboriginal health workers must be paid appropriately, included in governance decisions, protected from vicarious trauma and supported with cultural supervision — not used only when the mainstream service has already failed.",
        "Early embedding (before disengagement) is more effective than crisis deployment after the therapeutic relationship is damaged.",
      ],
      commonTrap:
        "Calling Aboriginal liaison only after the patient disengages, instead of embedding them in the pathway.",
    },
    {
      id: "s21",
      order: 21,
      title: "ACCHO Partnership",
      colorTag: "green",
      explanation:
        "Aboriginal Community Controlled Health Organisations are key governance partners, not just referral options. Designing a hospital model first and then asking ACCHO to endorse it is tokenism.",
      keyPoints: [
        "ACCHO PARTNERSHIP MAY INVOLVE: co-designing youth clinics, shared triage pathways, joint care planning, warm referral, culturally safe outreach, shared training, governance committee representation, data-sharing agreements, community feedback, crisis pathways, social and emotional wellbeing model integration.",
        "MEQ PHRASE: 'ACCHO partnership should occur before service design, not after the model is already decided.'",
        "Co-design is not the same as consultation — co-design means community and ACCHO are decision-making partners from the beginning, not stakeholders asked to approve a pre-determined plan.",
        "ACCHO partnership legitimises the service in the community — services that bypass it may be technically available but practically inaccessible, especially to young people and families who have experienced prior institutional harm.",
      ],
      commonTrap:
        "Designing a hospital model first and then asking ACCHO to endorse it.",
    },
    {
      id: "s22",
      order: 22,
      title: "Elders, Family and Community Consultation",
      colorTag: "teal",
      explanation:
        "Family and community involvement may be central to safety and engagement, but must be balanced with confidentiality, adolescent autonomy and immediate risk. Assuming cultural safety means automatic broad family disclosure is an error.",
      keyPoints: [
        "ASK: who does the patient want involved, are there Elders/Aunties/Uncles/cultural supports they trust, are there family violence or coercion concerns, what information can be shared, can collateral be received even if disclosure is limited, are child-safety thresholds met, is there a cultural/community decision-making process relevant to care?",
        "MEQ PHRASE: 'I would seek consent to involve family/Elders/community supports where culturally appropriate, but still respect confidentiality and make limited safety disclosures only where serious risk requires it.'",
        "In many Aboriginal and Torres Strait Islander communities, family and community decision-making is culturally central — excluding Elders from a discharge plan may directly undermine recovery.",
        "Family involvement is beneficial where the family is a support; it is harmful where the family is a source of risk — distinguishing these requires asking the patient directly, not assuming.",
      ],
      commonTrap:
        "Assuming cultural safety means automatic broad family disclosure.",
    },
    {
      id: "s23",
      order: 23,
      title: "Misdiagnosis of Culturally Meaningful Experience",
      colorTag: "amber",
      explanation:
        "Culturally meaningful experiences may be mistaken for psychosis, dissociation, personality pathology or 'non-compliance.' Over-pathologising culturally meaningful experience without cultural consultation is a clinical and governance failure.",
      keyPoints: [
        "EXAMPLES: spiritual experiences, hearing or sensing ancestors, grief practices, Sorry Business, culturally specific distress language, shame/silence in trauma, avoidance of eye contact, family decision-making, mistrust of authorities after trauma, refugee religious healing preference, Indigenous connection to Country.",
        "CLINICAL GOVERNANCE RISKS: unnecessary antipsychotic medication, coercive care, seclusion/restraint, disengagement, complaint, family/community harm, poor outcomes.",
        "The question is not whether the experience is real but whether it causes distress, impairs function, breaches reality testing or poses risk — cultural consultation and collateral information from family/community are essential before pathologising.",
        "Misdiagnosis of cultural experience as psychosis may result in unnecessary antipsychotic medication, forced treatment, and permanent damage to the therapeutic relationship.",
      ],
      commonTrap:
        "Over-pathologising culturally meaningful experience without cultural consultation.",
    },
    {
      id: "s24",
      order: 24,
      title: "Cultural Formulation Is Still Required",
      colorTag: "blue",
      explanation:
        "Governance does not replace clinical formulation. Writing 'cultural safety' but not asking what the patient believes is happening misses the formulation entirely.",
      keyPoints: [
        "INCLUDE IN FORMULATION: identity and language, migration/refugee/colonisation history, connection to Country/community, explanatory model, family and kinship, spirituality, stigma/shame, racism/discrimination exposure, trauma, social determinants.",
        "ALSO INCLUDE: help-seeking pathway, service barriers, preferred supports, risks of coercion or misdiagnosis.",
        "The explanatory model question — 'what do you think is happening?' — is the most powerful single question in cultural formulation, and the one most often omitted.",
        "Cultural formulation and cultural governance are both required — formulation informs the individual treatment plan; governance changes the service for future patients.",
      ],
      commonTrap:
        "Writing 'cultural safety' but not asking what the patient believes is happening.",
    },
    {
      id: "s25",
      order: 25,
      title: "Responding to Racism Complaints",
      colorTag: "red",
      explanation:
        "A racism complaint is not merely a communication problem — it requires acknowledgement, patient support, fair investigation, cultural governance and service learning. Explaining that staff 'did not mean it' rather than addressing impact and system response is the core error.",
      keyPoints: [
        "IMMEDIATE RESPONSE: acknowledge complaint seriously, ensure patient safety and ongoing care, offer Aboriginal liaison/cultural support/interpreter/advocate/consumer liaison, prevent retaliation or defensive behaviour, separate immediate clinical care from complaint investigation, document factual account, escalate to manager/clinical director/complaints unit, offer open disclosure if harm occurred, support staff but do not minimise racism.",
        "REVIEW: speak with patient/family in culturally safe setting, identify what happened and its impact, obtain staff accounts, review records/CCTV/ED logs if relevant, examine whether similar complaints exist, assess whether racism was individual/systemic/both, agree actions and follow-up.",
        "CLOSE THE LOOP: apologise where appropriate, explain findings, describe changes, offer ongoing care choices, review whether trust can be repaired, report to cultural governance/quality committee.",
        "RACISM COMPLAINT RESPONSE: racism complaints are not just communication problems — they require acknowledgement, patient support, fair investigation, cultural governance and service learning. Intent does not erase impact.",
      ],
      commonTrap:
        "Explaining that staff 'did not mean it' rather than addressing impact and system response.",
    },
    {
      id: "s26",
      order: 26,
      title: "Staff Training",
      colorTag: "green",
      explanation:
        "Staff training is necessary but weak if used alone. Writing 'provide cultural awareness training' as the whole governance plan is the most common and most penalised error in this topic.",
      keyPoints: [
        "TRAINING SHOULD COVER: cultural safety (not just cultural awareness), racism and unconscious bias, local history and colonisation, social and emotional wellbeing, trauma-informed care, interpreter use, working with Aboriginal liaison/health workers, working with ACCHOs, refugee trauma and settlement stress, family/community decision-making, confidentiality and cultural supports, misdiagnosis risks, responding to racism complaints.",
        "TRAINING MUST BE LINKED TO: supervision, audit, data, performance expectations, consumer feedback, service redesign.",
        "Training without accountability is education theatre — it generates good will but does not change the system.",
        "GOVERNANCE UPGRADE: training is one element of a multi-component governance response, not the entire response.",
      ],
      commonTrap:
        "Writing 'provide cultural awareness training' as the whole governance plan.",
    },
    {
      id: "s27",
      order: 27,
      title: "Cultural Supervision",
      colorTag: "green",
      explanation:
        "Cultural supervision provides structured reflection on cultural safety, power, racism and culturally informed practice. Outsourcing responsibility to the cultural supervisor is inappropriate — the treating team remains clinically accountable.",
      keyPoints: [
        "CULTURAL SUPERVISION MAY INVOLVE: Aboriginal senior clinician/health worker where appropriate, cultural consultant, transcultural mental health service, refugee health clinician, peer/lived experience worker, clinical supervisor trained in cultural safety.",
        "USE CULTURAL SUPERVISION FOR: complex Aboriginal family/community decision-making, repeated disengagement, clinician uncertainty about spiritual experiences, racism complaints, refugee trauma/mistrust, boundary/confidentiality concerns in small communities, service-design decisions.",
        "KEY POINT: cultural supervision supports the team, but the treating team remains clinically accountable.",
        "Cultural supervision is not a one-off consult — for complex ongoing presentations, it should be embedded as a regular part of team supervision, not accessed only in crisis.",
      ],
      commonTrap:
        "Outsourcing responsibility to the cultural supervisor.",
    },
    {
      id: "s28",
      order: 28,
      title: "Cultural Safety Audit",
      colorTag: "purple",
      explanation:
        "Audit without redesign is data collection without change. Collecting audit data but not redesigning the pathway misses the purpose of the audit.",
      keyPoints: [
        "AUDIT QUESTIONS: are Aboriginal and Torres Strait Islander patients identified respectfully and accurately, are interpreters used when needed, are Aboriginal liaison referrals offered and documented, are ACCHO referrals or warm handovers occurring, are family/Elder/community supports offered with consent?",
        "MORE AUDIT QUESTIONS: are seclusion/restraint rates monitored by Aboriginality/ethnicity, are complaints of racism recorded and acted on, are discharge outcomes equitable, are no-show/disengagement rates higher for particular groups, are consumer/family experiences measured, is cultural safety included in M&M/adverse event review?",
        "An audit that finds disproportionate seclusion rates for Aboriginal patients but produces no policy change is worse than no audit — it documents awareness without action.",
        "Audit findings should be returned to the cultural governance group, ACCHO partners and consumer/community representatives — closing the loop on data is part of the accountability.",
      ],
      commonTrap:
        "Collecting audit data but not redesigning the pathway.",
    },
    {
      id: "s29",
      order: 29,
      title: "Data Monitoring",
      colorTag: "purple",
      explanation:
        "Data should be used to reveal inequity, not to blame communities. Using data to blame patient groups for disengagement reverses the governance logic.",
      keyPoints: [
        "MONITOR: access/referral rates, wait times, acceptance rates, no-show/disengagement, involuntary treatment, seclusion/restraint, medication use, diagnosis patterns, ED presentations, readmissions, discharge against medical advice, follow-up after discharge, complaint themes, interpreter use, Aboriginal liaison referrals.",
        "ALSO MONITOR: outcomes by Aboriginality, ethnicity, preferred language and refugee background.",
        "MEQ PHRASE: 'I would review service data for inequity and combine it with community and consumer experience, because numbers alone do not define cultural safety.'",
        "Data disaggregated by Aboriginality and ethnicity is essential — aggregate data hides inequity, which is why many services do not see the problem until they stratify the data.",
      ],
      commonTrap:
        "Using data to blame patient groups for disengagement.",
    },
    {
      id: "s30",
      order: 30,
      title: "Service Redesign",
      colorTag: "green",
      explanation:
        "Culturally safe service redesign co-designs the solution with the community. Creating a service that is technically available but practically inaccessible is the outcome of redesign without genuine community partnership.",
      keyPoints: [
        "REDESIGN MAY INCLUDE: co-location with ACCHO, outreach rather than hospital-only clinic, Aboriginal-led intake options, drop-in plus triage model, flexible appointment times, transport support, family/community meeting spaces, interpreter availability, culturally safe waiting rooms, recruitment and retention of Aboriginal workforce.",
        "ALSO: youth confidentiality pathway, school/ACCHO/shared-care model, trauma-informed ED pathway, referral criteria that do not exclude culturally complex presentations, culturally safe complaint process.",
        "GOVERNANCE POINT: do not design the service first and 'consult' later — that is tokenism.",
        "A service in the right location with wrong community ownership will be avoided — community control of design is the single most important predictor of engagement.",
      ],
      commonTrap:
        "Creating a service that is technically available but practically inaccessible.",
    },
    {
      id: "s31",
      order: 31,
      title: "Aboriginal Youth Service Governance",
      colorTag: "green",
      explanation:
        "For a youth clinic in an Aboriginal regional area, the service must be built with — not for — the community. Starting a youth clinic quickly because funding is available, without cultural governance and community trust, is a governance failure.",
      keyPoints: [
        "ADDRESS BEFORE OPENING: ACCHO partnership, Elders/community consultation, Aboriginal youth voice, confidentiality for young people, family/kinship decision-making, self-harm triage and crisis response, school referral pathways, AOD integration, hospital/ED interface.",
        "ALSO BEFORE OPENING: child protection interface, cultural workforce, transport and outreach, data and evaluation, funding accountability.",
        "Fast implementation driven by funding timelines, without community consultation, produces services that are distrusted, underused and potentially harmful — the funding itself creates a governance risk.",
        "MEQ PHRASE: 'I would not open the service until ACCHO partnership, Elders consultation and Aboriginal youth voice are embedded in both governance and design.'",
      ],
      commonTrap:
        "Starting a youth clinic quickly because funding is available, without cultural governance and community trust.",
    },
    {
      id: "s32",
      order: 32,
      title: "Refugee and CALD Governance",
      colorTag: "teal",
      explanation:
        "Refugee/CALD cultural safety requires a systematic, not opportunistic, response. Treating refugee mistrust as poor insight only misses the governance dimension.",
      keyPoints: [
        "REQUIRES: professional interpreter access, translated materials, trauma-informed care, careful confidentiality explanation, awareness of authority/police/detention trauma, collaboration with refugee health/community organisations, avoidance of family interpreters for sensitive issues.",
        "ALSO REQUIRES: understanding stigma and shame, assessment of settlement stress/visa insecurity/family disruption, school/community collaboration when appropriate.",
        "Many CALD communities have had prior experiences with authorities using shared information against them — visa insecurity, detention and deportation are real fears that make confidentiality assurances harder to accept.",
        "Refugee health is not a sub-specialty — all psychiatrists seeing CALD patients need interpreter governance, trauma-informed practice and community partnership skills.",
      ],
      commonTrap:
        "Treating refugee mistrust as poor insight only.",
    },
    {
      id: "s33",
      order: 33,
      title: "Complaint of Interpreter Failure",
      colorTag: "red",
      explanation:
        "Interpreter failure requires an immediate clinical review, not just an administrative response. Defending the earlier assessment rather than repeating it safely is a patient-safety failure.",
      keyPoints: [
        "INTERPRETER FAILURE MAY INVOLVE: interpreter not used, wrong dialect, family member used for domestic violence/trauma, confidentiality breach in small community, interpreter appears biased, clinician talks to interpreter not patient, consent/capacity assessed in English despite limited proficiency, discharge instructions not translated.",
        "RESPONSE: assess immediate clinical harm, repeat assessment with appropriate interpreter, apologise or acknowledge concern, document limitations of prior assessment, revise diagnosis/capacity/risk plan if needed, complete incident/complaint report if harm, review interpreter access system, arrange staff training.",
        "The patient complaint about interpreter failure is also a signal about the system — review whether this was an individual failure or a systemic gap in after-hours or dialect-specific access.",
        "Any clinical decision based on an inadequate interpreter — including capacity assessment, risk assessment or informed consent — must be reviewed and potentially revised.",
      ],
      commonTrap:
        "Defending the earlier assessment rather than repeating it safely.",
    },
    {
      id: "s34",
      order: 34,
      title: "Family/Community Not Consulted",
      colorTag: "amber",
      explanation:
        "'Not consulted' may mean different things — the response requires clarification before action. Assuming family/community involvement is always appropriate without checking consent and safety is the core error.",
      keyPoints: [
        "CLARIFY: did patient consent to family/community involvement, is the patient an adolescent or adult, are there confidentiality limits, is family a support/source of risk/source of coercion, is child protection involved, did service ask who the patient wanted involved, were cultural decision-making processes ignored?",
        "MEQ PHRASE: 'Family/community consultation is culturally important, but it must occur with attention to consent, confidentiality, safety and the patient's own preferences.'",
        "The failure may be that the service did not ask — 'who would you like involved in your care?' is a basic question that is routinely omitted in busy ED and inpatient settings.",
        "In Aboriginal and Torres Strait Islander communities, family and community consultation may be culturally required for major decisions — the service failure may be structural (forms designed without a section for family/community preferences) rather than individual.",
      ],
      commonTrap:
        "Assuming family/community involvement is always appropriate without checking consent and safety.",
    },
    {
      id: "s35",
      order: 35,
      title: "Cultural Safety in ED/Inpatient Settings",
      colorTag: "red",
      explanation:
        "High-acuity settings produce the highest risk of cultural safety failures. Focusing on risk control and missing dignity, trauma and cultural safety is the consistent error.",
      keyPoints: [
        "HIGH-RISK FAILURES: loud discussion of identity/diagnosis in waiting room, no interpreter, male security with traumatised female refugee patient, patient in revealing gown without dignity, staff dismissing spiritual explanation as psychosis, Aboriginal patient placed in seclusion without cultural support, family/Elder excluded, racist comments by staff or other patients, discharge before cultural/community safety plan.",
        "RESPONSE: address immediate dignity and safety, use interpreter/cultural support, reduce unnecessary staff/security, use gender-sensitive care where possible, explain each step, review privacy and trauma triggers, document and escalate if harm or racism occurred.",
        "The ED is where cultural safety failures are most acute and most consequential — a traumatised refugee patient exposed to male security, bright lights, confiscated clothing and repeated strangers asking questions in an incomprehensible language may re-experience detention.",
        "Culturally unsafe inpatient care is not just uncomfortable — it can trigger PTSD, worsen psychosis, destroy therapeutic trust and lead to discharge against advice.",
      ],
      commonTrap:
        "Focusing on risk control and missing dignity, trauma and cultural safety.",
    },
    {
      id: "s36",
      order: 36,
      title: "Responding to Staff Racism",
      colorTag: "red",
      explanation:
        "Intent does not erase impact. Minimising racism as humour, stress or misunderstanding avoids the governance responsibility.",
      keyPoints: [
        "IF STAFF MAKE RACIST COMMENTS OR BEHAVE IN A RACIST WAY: stop immediate harm, support patient/family, document facts, escalate to manager/clinical director, use complaint and HR/professional conduct pathways, offer open disclosure if harm occurred, support other staff affected (especially Aboriginal staff), review whether behaviour reflects broader team culture, provide training and supervision, monitor recurrence.",
        "DO NOT SAY: 'They did not mean it.' Intent does not erase impact.",
        "Aboriginal staff who witness racism towards patients also experience harm — they need support, not to be expected to manage the aftermath alone.",
        "A single racist incident may be an individual failure; repeated incidents without governance action signal a cultural and leadership failure at service level.",
      ],
      commonTrap:
        "Minimising racism as humour, stress or misunderstanding.",
    },
    {
      id: "s37",
      order: 37,
      title: "Cultural Safety and Restrictive Practice",
      colorTag: "purple",
      explanation:
        "Cultural safety governance should review whether Aboriginal, refugee or CALD patients are disproportionately subject to restrictive practices. Reviewing restrictive practice rates without looking at Aboriginality, ethnicity, language or refugee background conceals inequity.",
      keyPoints: [
        "REVIEW WHETHER DISPROPORTIONATE: security presence, restraint, seclusion, forced medication, involuntary orders, police transport, ED boarding, discharge against advice, complaints about disrespect.",
        "IF DISPARITY EXISTS, REVIEW: staff bias, communication barriers, interpreter use, trauma triggers, lack of cultural support, environmental factors, policy thresholds, escalation practices, data quality.",
        "Disproportionate seclusion of Aboriginal patients is both a rights issue and a governance failure — it signals that de-escalation approaches are not being adapted for cultural context.",
        "Collecting seclusion data without Aboriginality disaggregation is complicit in hiding the inequity — it is a governance choice, not an administrative oversight.",
      ],
      commonTrap:
        "Reviewing restrictive practice rates without looking at Aboriginality, ethnicity, language or refugee background.",
    },
    {
      id: "s38",
      order: 38,
      title: "Cultural Safety and Diagnosis",
      colorTag: "blue",
      explanation:
        "Cultural safety does not mean avoiding diagnosis — it means diagnosing carefully. Either pathologising culture or excusing serious illness as culture are both clinical failures.",
      keyPoints: [
        "ASK: is this experience culturally meaningful, is there distress/impairment/loss of reality testing/risk, what do family/community say is normal or concerning, is there trauma/dissociation/delirium, could interpreter/language issues be mistaken for thought disorder, could racism or service mistrust be mistaken for paranoia, have we used collateral and cultural consultation?",
        "MEQ PHRASE: 'I would avoid both over-pathologising culturally meaningful experiences and under-treating serious mental illness because of cultural assumptions.'",
        "Under-treating serious mental illness as 'cultural' is as dangerous as over-treating cultural experience as psychosis — the balance requires cultural consultation, collateral and time.",
        "Cultural consultation does not transfer clinical responsibility — the treating clinician must integrate cultural consultation into the formulation and treatment plan.",
      ],
      commonTrap:
        "Either pathologising culture or excusing serious illness as culture.",
    },
    {
      id: "s39",
      order: 39,
      title: "MEQ Example Traps",
      colorTag: "blue",
      explanation:
        "Seven worked examples covering the most common cultural safety MEQ stems. In each, the core error is missing that the real issue is cultural safety governance, not just rapport.",
      keyPoints: [
        "EXAMPLE 1 — ABORIGINAL DISENGAGES: staff dismiss family concerns; man misses appointments. TRAP: label non-compliance. BETTER: explore culturally unsafe care, involve Aboriginal liaison/ACCHO, review family engagement with consent, adapt pathway and audit disengagement.",
        "EXAMPLE 2 — REFUGEE REFUSES TREATMENT: patient says hospital cannot be trusted. TRAP: treat mistrust as delusion only. BETTER: assess psychosis/delirium but also trauma/authority fear/interpreter needs/health literacy and culturally safe engagement.",
        "EXAMPLE 3 — INTERPRETER NOT USED: capacity done in English because patient 'seemed okay.' TRAP: accept assessment. BETTER: repeat with professional interpreter, document limitation, review harm and system access to interpreters.",
        "EXAMPLE 4 — ACCHO EXCLUDED: hospital opens youth clinic without ACCHO consultation. TRAP: add cultural training after opening. BETTER: pause/revise model, partner with ACCHO/Elders/youth, redesign governance and evaluation.",
        "EXAMPLE 5 — RACISM COMPLAINT: family says staff treated them as 'dangerous Aboriginal relatives.' TRAP: reassure that staff meant well. BETTER: acknowledge impact, investigate, offer cultural support, review staff conduct/system practice and close loop with changes.",
        "EXAMPLE 6 — FAMILY INTERPRETER CONFLICT: adult son insists on interpreting capacity assessment. TRAP: accept because family knows patient. BETTER: use professional interpreter for capacity, involve son as support/collateral with consent, document reasons.",
        "EXAMPLE 7 — SMALL COMMUNITY INTERPRETER: refugee patient refuses interpreter because interpreter knows her husband's family. TRAP: record refusal and proceed in English. BETTER: offer phone/video interpreter from outside community, explore safety and confidentiality fears, document limitations.",
      ],
      commonTrap:
        "Missing that the real issue is cultural safety governance, not just rapport.",
    },
    {
      id: "s40",
      order: 40,
      title: "Command-Word Discipline",
      colorTag: "amber",
      explanation:
        "Cultural safety questions require case-specific justification, not generic lists. Listing cultural strategies without case-specific justification loses marks even when the strategies are correct.",
      keyPoints: [
        "LIST: ACCHO partnership, Aboriginal liaison, interpreter access, community consultation, cultural safety audit, staff training, data monitoring, complaint pathway.",
        "OUTLINE (list and justify): 'Involve ACCHO early — because service legitimacy and engagement depend on community-controlled partnership, not hospital-only planning. Audit interpreter use — because missed interpreter access can invalidate consent, capacity and risk assessment. Monitor seclusion by Aboriginality/ethnicity — because inequitable restrictive practice may reveal institutional racism.'",
        "DESCRIBE (list and explain): 'Create cultural governance group — because cultural safety needs ongoing community oversight, not one-off consultation. Respond to racism complaint through complaint and governance pathways — because racism can be both individual misconduct and system failure.'",
        "DISCUSS (name the tension): 'There is tension between urgent clinical service delivery and genuine community partnership. A defensible consultant position is to avoid tokenistic rapid implementation and instead co-design a safe model with ACCHO, Elders, young people and families, because culturally unsafe services may increase disengagement and risk.'",
      ],
      commonTrap:
        "Listing cultural strategies without case-specific justification.",
    },
    {
      id: "s41",
      order: 41,
      title: "Examiner Phrases",
      colorTag: "green",
      explanation:
        "Use these phrases to signal consultant-level cultural safety reasoning. Missing the words governance, partnership, interpreter safety, data and redesign signals registrar-level thinking.",
      keyPoints: [
        "'Cultural safety is judged by the patient, family and community, not by the service's intention.'",
        "'I would treat this as cultural governance, not only cultural awareness training.'",
        "'I would avoid labelling disengagement as non-compliance until service barriers and cultural safety have been reviewed.'",
        "'Interpreter access is a patient-safety system.'",
        "'A professional interpreter is required for high-stakes assessment, capacity, consent, risk and trauma.'",
        "'Family can support and provide collateral, but should not replace a professional interpreter for sensitive assessments.'",
        "'ACCHO partnership should occur before service design, not after the model is already decided.'",
        "'Racism complaints require acknowledgement, fair investigation, patient support and system learning.'",
        "'I would use data to identify inequity but community experience to understand it.'",
        "'I would avoid both over-pathologising cultural experience and under-treating serious illness.'",
        "'Cultural safety includes governance, workforce, data, complaint response and service redesign.'",
      ],
      commonTrap:
        "Missing the words governance, partnership, interpreter safety, data and redesign.",
    },
    {
      id: "s42",
      order: 42,
      title: "Consultant-Level Summary",
      colorTag: "green",
      explanation:
        "This paragraph is reusable in MEQ stems involving Aboriginal disengagement, refugee mistrust, interpreter conflict, racism complaint, ACCHO exclusion, culturally unsafe ED/inpatient care and service redesign.",
      keyPoints: [
        "IMMEDIATE PRIORITY: 'I would treat cultural safety as a clinical governance issue, not simply a cultural-awareness issue. My first priority is to ensure the patient is clinically safe and respectfully re-engaged, using professional interpreter, Aboriginal liaison, cultural worker, family or Elder involvement with consent where appropriate.'",
        "GOVERNANCE: 'I would acknowledge and investigate culturally unsafe care, interpreter failure or racism through complaint and governance pathways, while maintaining ongoing care.'",
        "SERVICE LEVEL: 'At service level, I would partner with ACCHOs/community leaders, embed cultural supervision, monitor interpreter use, disengagement, restrictive practice and complaints data, and redesign pathways with consumer, family and community input.'",
        "FULL PARAGRAPH: 'I would treat cultural safety as a clinical governance issue, not simply a cultural-awareness issue. My first priority is to ensure the patient is clinically safe and respectfully re-engaged, using professional interpreter, Aboriginal liaison, cultural worker, family or Elder involvement with consent where appropriate. I would acknowledge and investigate culturally unsafe care, interpreter failure or racism through complaint and governance pathways, while maintaining ongoing care. At service level, I would partner with ACCHOs/community leaders, embed cultural supervision, monitor interpreter use, disengagement, restrictive practice and complaints data, and redesign pathways with consumer, family and community input. The aim is a service that is accessible, anti-racist, clinically safe and accountable to the people it serves.'",
      ],
      meqApplication:
        "This paragraph should be reusable in MEQ stems involving Aboriginal disengagement, refugee mistrust, interpreter conflict, racism complaint, ACCHO exclusion, culturally unsafe ED/inpatient care and service redesign.",
    },
  ],
};

export const RESEARCH_GOVERNANCE: Note = {
  id: "research_governance",
  title: "Research Governance versus Audit Governance in Psychiatry",
  category: "Clinical Governance / Research Ethics / Audit / Quality Improvement",
  description:
    "A consultant-level framework for distinguishing research, audit, quality improvement and service evaluation in psychiatry, including observational studies in schizophrenia, vulnerable participants, consent and capacity, ethics approval, data privacy, conflicts of interest, authorship, adverse findings during a study, cultural consultation and publication governance.",
  sections: [
    {
      id: "s01",
      order: 1,
      title: "Core Principle",
      colorTag: "blue",
      explanation:
        "Research, audit and quality improvement are all part of good psychiatry — but they are governed differently. The first job is to classify the project correctly, then match the governance pathway to its risk, participants and intent.",
      keyPoints: [
        "AUDIT AND QI ASK: 'Are we providing care according to accepted standards, and how can we improve local practice?' RESEARCH ASKS: 'What new knowledge can we generate that may apply beyond this local service?'",
        "GOOD MEQ ANSWER: 'I would first clarify whether the proposal is audit, quality improvement, service evaluation or research. I would then match the governance pathway to the project risk, participants, consent requirements, data privacy, vulnerability, cultural considerations, publication intent and need to act on adverse findings.'",
        "KEY POINT: do not block useful audit by over-medicalising governance, but do not call research an audit to avoid ethics approval.",
        "MEQ TENSION: 'There is tension between generating useful knowledge and protecting vulnerable participants. A defensible consultant position is to support research or audit that has clear value, proportionate ethics/governance review, valid consent or lawful waiver, privacy safeguards, cultural consultation where relevant, and a plan to act on clinically significant findings.'",
      ],
      commonTrap:
        "Assuming that because a project uses existing records it does not need governance review.",
    },
    {
      id: "s02",
      order: 2,
      title: "Why This Is Examinable",
      colorTag: "blue",
      explanation:
        "The examiner wants to see governance maturity across ethics, consent, privacy, culture, publication integrity and patient safety. Answering only with 'get ethics approval' and missing consent, vulnerability, privacy, adverse findings and authorship loses marks.",
      keyPoints: [
        "MEQ STEM PATTERNS: audit versus research, ECT audit, metabolic monitoring audit, discharge-summary audit, observational study in schizophrenia, research with involuntary inpatients, consent and capacity for research, publication based on patient data.",
        "MORE PATTERNS: vulnerable participants, cultural consultation, authorship disputes, adverse findings during study, researcher conflict of interest, trainee pressured to collect data, pharmaceutical-sponsored study, patient complains they did not know their records were used.",
        "KEY POINT: the examiner wants to see governance maturity — ethics, consent, privacy, culture, publication integrity and patient safety.",
        "Governance maturity means knowing which pathway applies, why it applies, and what to do when something goes wrong during a study — not just 'seek HREC approval.'",
      ],
      commonTrap:
        "Answering only with 'get ethics approval' and missing consent, vulnerability, privacy, adverse findings and authorship.",
    },
    {
      id: "s03",
      order: 3,
      title: "Audit Versus Research",
      colorTag: "purple",
      explanation:
        "The label attached to a project does not determine its governance pathway — its purpose and methods do. Calling a project an audit just because it uses local data, even when it is designed to answer a new generalisable research question, is the core classification error.",
      keyPoints: [
        "AUDIT: measures current practice against explicit standards, uses accepted guidelines/policy/benchmarks, aims to improve local care, usually involves existing practice or records, should lead to action and re-audit.",
        "QUALITY IMPROVEMENT: tests or implements changes to improve local systems, may use PDSA/PDCA cycles, focuses on service performance and patient outcomes, needs governance and risk review.",
        "SERVICE EVALUATION: assesses whether a service or program is working as intended, may examine access/outcomes/patient experience/efficiency, may overlap with audit or QI.",
        "RESEARCH: uses systematic methods to generate new knowledge, may test hypotheses, may involve intervention/randomisation/data linkage/novel measures, usually aims for generalisable findings, requires research ethics and governance review.",
        "AUDIT vs RESEARCH COMPARISON: Audit = measures current practice against existing standards to improve local care. QI = tests or implements changes to improve local systems. Service evaluation = assesses whether a service is working as intended. Research = generates new, generalisable knowledge using systematic methods. Publication intent alone does not automatically make something research, but public dissemination increases governance and ethics scrutiny.",
      ],
      commonTrap:
        "Calling a project an audit just because it uses local data, even when it is designed to answer a new generalisable research question.",
    },
    {
      id: "s04",
      order: 4,
      title: "Audit Is Still Governance",
      colorTag: "green",
      explanation:
        "Audit does not mean 'no governance.' Collecting audit data but not acting on findings or re-auditing defeats the purpose of the audit.",
      keyPoints: [
        "A GOOD AUDIT SHOULD HAVE: clear aim, explicit standard or benchmark, defined population, data items, data privacy plan, approval through local audit/QI governance, consumer or carer input where relevant, feedback to clinicians, action plan, re-audit.",
        "AUDIT EXAMPLES IN PSYCHIATRY: ECT consent documentation audit, clozapine blood monitoring audit, lithium monitoring audit, metabolic monitoring audit, seclusion/restraint audit, discharge summary completion audit, CAMHS transition audit, suicide-risk pathway audit.",
        "The 'audit cycle' — measure, compare to standard, change, re-measure — is what distinguishes a real audit from a data extraction exercise.",
        "ETHICS/GOVERNANCE DECISION TREE: (1) Is this research, audit, QI or service evaluation? (2) Does it involve patients/staff/records/tissue/genetic data/linkage? (3) Is there more than low risk? (4) Are participants vulnerable? (5) Is consent required or waived? (6) Is HREC review required? (7) Is site governance approval required? (8) Is cultural review required? (9) Will findings be published? (10) Who owns data and authorship?",
      ],
      commonTrap:
        "Collecting audit data but not acting on findings or re-auditing.",
    },
    {
      id: "s05",
      order: 5,
      title: "Publication Intent and Blurred Boundaries",
      colorTag: "amber",
      explanation:
        "Publication intent alone does not automatically make a project research, but it increases governance and ethics scrutiny. Starting as 'audit' then publishing as research without ethics/governance clearance is a research integrity breach.",
      keyPoints: [
        "ASK WHEN BOUNDARIES ARE BLURRED: was the project designed from the start to create generalisable knowledge, are methods beyond routine audit, is there randomisation/intervention/novel hypothesis, are identifiable or sensitive data used, are vulnerable participants included, is consent needed or waived?",
        "ALSO ASK: does local policy require HREC or low-risk review before publication, have participants or governance bodies been told about dissemination?",
        "MEQ PHRASE: 'I would not rely on labels. I would ask the ethics/governance office to confirm the correct pathway before data collection or publication.'",
        "Many services have a policy that any project intended for publication must be registered with the research governance office before data collection — 'we started as audit' is not a defence if the project was designed to publish.",
      ],
      commonTrap:
        "Starting as 'audit' then publishing as research without ethics/governance clearance.",
    },
    {
      id: "s06",
      order: 6,
      title: "Ethics Approval Versus Governance Approval",
      colorTag: "purple",
      explanation:
        "Ethics approval and site governance approval are separate processes. Thinking HREC approval alone means the hospital/service must allow the project to proceed is incorrect.",
      keyPoints: [
        "ETHICS APPROVAL ASKS: 'Is this ethically acceptable for participants?' It considers scientific merit, risk-benefit balance, consent, vulnerable participants, privacy, data management, cultural safety, participant information, complaints and adverse-event response.",
        "SITE GOVERNANCE APPROVAL ASKS: 'Can this be safely and properly conducted at this site?' It considers local resources, staff workload, access to records, indemnity/insurance, contracts, data storage, local policies, credentialing, conflict of interest and impact on clinical care.",
        "Both approvals are required for research conducted in a health service — HREC approval does not authorise site access.",
        "VULNERABLE PARTICIPANT WARNING: psychiatric diagnosis alone does not remove capacity, but psychosis/mania/depression/cognitive impairment/coercion/dependency/involuntary status/homelessness/trauma/forensic status/youth and Aboriginal/refugee status may increase vulnerability and require extra safeguards.",
      ],
      commonTrap:
        "Thinking HREC approval alone means the hospital/service must allow the project to proceed.",
    },
    {
      id: "s07",
      order: 7,
      title: "HREC and Low-Risk Review",
      colorTag: "purple",
      explanation:
        "Not all projects require full HREC review, but every project should be triaged through the correct governance pathway. Assuming retrospective chart review never requires ethics review is incorrect.",
      keyPoints: [
        "POSSIBLE PATHWAYS: local audit/QI registration, low-risk ethics review, full HREC review, site-specific assessment, Aboriginal ethics review or cultural governance review, research governance office review, data custodian approval, consent waiver request, clinical trials governance if applicable.",
        "FACTORS INCREASING ETHICS SCRUTINY: vulnerable participants, involuntary patients, impaired capacity, sensitive mental health/AOD/forensic data, identifiable data, data linkage, genetic/tissue data, intervention beyond usual care, randomisation, deception, more than low risk.",
        "MORE FACTORS: Aboriginal and Torres Strait Islander participants or communities, publication of potentially identifiable case material.",
        "The National Statement (NHMRC) distinguishes low-risk, negligible-risk and greater-than-low-risk research — the pathway depends on the level of risk, not only the type of project.",
      ],
      commonTrap:
        "Assuming retrospective chart review never requires ethics review.",
    },
    {
      id: "s08",
      order: 8,
      title: "Consent in Research",
      colorTag: "teal",
      explanation:
        "Research consent is distinct from clinical treatment consent. Assuming a patient can be included in research because they are already receiving care from the service conflates clinical and research relationships.",
      keyPoints: [
        "RESEARCH CONSENT SHOULD BE: voluntary, informed, specific enough, capacity-based, free from coercion, documented, able to be withdrawn where possible.",
        "PARTICIPANTS SHOULD UNDERSTAND: purpose of study, what participation involves, risks and benefits, alternatives (including non-participation), confidentiality and data use, who will access data, whether treatment is affected, who funds the study, how complaints are made, what happens if concerning findings emerge.",
        "MEQ PHRASE: 'Consent for clinical treatment is not the same as consent for research.'",
        "ADVERSE FINDING DURING STUDY: research role does not remove clinical duty — serious risk, suicidality, psychosis, abuse, child safety, medication toxicity or medical deterioration must trigger a pre-defined safety pathway.",
      ],
      commonTrap:
        "Assuming a patient can be included in research because they are already receiving care from the service.",
    },
    {
      id: "s09",
      order: 9,
      title: "Capacity to Consent to Research",
      colorTag: "amber",
      explanation:
        "Capacity for research consent is decision-specific and time-specific. Excluding all people with schizophrenia as incapable, or assuming all have capacity without checking, are both errors.",
      keyPoints: [
        "ASSESS WHETHER THE PERSON CAN: understand the study purpose, understand what participation involves, understand risks/benefits/alternatives, understand voluntary nature, understand withdrawal rights, weigh information in relation to their own situation, communicate a choice.",
        "PSYCHIATRIC DIAGNOSIS ALONE DOES NOT REMOVE CAPACITY. Capacity may be impaired by: psychosis, mania, severe depression, cognitive impairment, delirium, intoxication, sedation, intellectual disability, acute distress, therapeutic misconception.",
        "Capacity can fluctuate — a person may not have capacity during acute psychosis but regain it when stabilised, and assessment should be timed accordingly.",
        "Where capacity is impaired, supported decision-making, substitute consent or ethics-approved waiver may be options — exclusion of all people with impaired capacity is rarely justified and may constitute unjust exclusion from potentially beneficial research.",
      ],
      commonTrap:
        "Excluding all people with schizophrenia as incapable, or assuming all have capacity without checking.",
    },
    {
      id: "s10",
      order: 10,
      title: "Therapeutic Misconception",
      colorTag: "amber",
      explanation:
        "Therapeutic misconception occurs when a participant misunderstands research as treatment designed primarily for their personal benefit. Recruiting an inpatient without addressing perceived coercion is the core error.",
      keyPoints: [
        "HIGH-RISK SITUATIONS: treating psychiatrist recruits own patient, patient is involuntary, patient hopes participation improves discharge chances, patient believes refusal will affect care, study uses clinical language, research visit occurs in ward setting, participant has psychosis/cognitive impairment/low health literacy.",
        "PREVENTION: separate clinical care from research recruitment where possible, explain voluntary nature clearly, state that refusal will not affect treatment, use plain language, allow time, use interpreter/advocate where needed, check understanding, document consent process.",
        "Therapeutic misconception is not the participant's failure — it is a foreseeable effect of recruiting in a clinical setting, where power imbalance is inherent.",
        "Even when a participant correctly understands the research purpose, they may still believe (incorrectly) that participation will improve their care — this belief must be explored explicitly, not assumed to be absent.",
      ],
      commonTrap:
        "Recruiting an inpatient without addressing perceived coercion.",
    },
    {
      id: "s11",
      order: 11,
      title: "Vulnerable Populations in Psychiatry",
      colorTag: "red",
      explanation:
        "Vulnerability does not mean automatic exclusion — it means extra safeguards are required. Either exploiting vulnerability or excluding vulnerable groups without justification are both ethical failures.",
      keyPoints: [
        "VULNERABLE PARTICIPANTS MAY INCLUDE: involuntary patients, acutely psychotic or manic patients, severe depression or suicidality, cognitive impairment or delirium, intellectual disability or autism, children and adolescents, older adults, Aboriginal and Torres Strait Islander peoples, refugees and asylum seekers, homeless people, forensic or prisoners.",
        "ALSO VULNERABLE: people with substance dependence, people dependent on the service for care/housing/legal reports, people with limited English proficiency.",
        "SAFEGUARDS: independent consent process, supported decision-making, interpreter, advocate, delay recruitment until clinically stable if possible, clear statement that care is unaffected, minimise burden, monitor distress, ethics review, cultural consultation where relevant.",
        "Excluding all vulnerable participants from research perpetuates a knowledge gap — the people most affected by a condition are underrepresented in the evidence base that guides their treatment.",
      ],
      commonTrap:
        "Either exploiting vulnerability or excluding vulnerable groups without justification.",
    },
    {
      id: "s12",
      order: 12,
      title: "Observational Study in Schizophrenia",
      colorTag: "blue",
      explanation:
        "Classic MEQ scenario: consultant wants to conduct an observational study of relapse predictors using clinic records and optional interviews. Thinking 'observational' means no ethical risk misses the full governance picture.",
      keyPoints: [
        "GOVERNANCE ISSUES: is this research or audit, HREC/low-risk review, site governance, consent or waiver of consent for records, capacity to consent for interviews, risk of coercion if treating team recruits, privacy and data de-identification, data security.",
        "ALSO: how to manage relapse/suicide/violence disclosures during interview, cultural and interpreter access, consumer input into design, authorship and trainee role, plan for dissemination.",
        "Observational does not mean low-risk — sensitive psychiatric records combined with interviews of involuntary or recently relapsed patients involves consent, privacy, capacity and adverse-finding risks.",
        "AUTHORSHIP AND PUBLICATION INTEGRITY: authorship requires substantial contribution, accountability and approval of final work — do not offer authorship as favour, coercion or reward, do not exclude junior contributors unfairly.",
      ],
      commonTrap:
        "Thinking 'observational' means no ethical risk.",
    },
    {
      id: "s13",
      order: 13,
      title: "Use of Existing Records",
      colorTag: "purple",
      explanation:
        "Using existing clinical records still requires governance. Letting a registrar or researcher browse records without approval or role-based need is both a privacy breach and a governance failure.",
      keyPoints: [
        "CONSIDER: are data identifiable/re-identifiable/de-identified, who will access records, is access within normal role, is patient consent required, is waiver of consent appropriate, who is data custodian, where will data be stored, will data leave the health service, will data be linked.",
        "ALSO CONSIDER: will results identify small groups, is publication planned.",
        "MINIMUM NECESSARY DATA: collect only what is needed — data minimisation is both a privacy requirement and a governance principle.",
        "Role-based access controls mean that accessing records for research when not in a treating role is a breach, even if the clinician has general access to the system.",
      ],
      commonTrap:
        "Letting a registrar or researcher browse records without approval or role-based need.",
    },
    {
      id: "s14",
      order: 14,
      title: "Privacy and Data Management",
      colorTag: "purple",
      explanation:
        "Psychiatry data are among the most sensitive in healthcare. Assuming de-identification is adequate when small local samples are easily re-identifiable is a common privacy governance failure.",
      keyPoints: [
        "DATA GOVERNANCE SHOULD INCLUDE: data minimisation, de-identification or coding, secure storage, access controls, data custodian approval, data transfer agreement if external, retention and destruction plan, audit trail, password protection/encryption, separation of identifiers from dataset, plan for publications involving small numbers, breach response plan.",
        "PSYCHIATRY DATA ARE HIGHLY SENSITIVE: diagnosis, AOD history, trauma, forensic history, suicidality, family violence, sexuality/gender identity, child protection, involuntary treatment.",
        "Small sample sizes in psychiatry research (e.g. a rural service with 3 inpatients of a particular cultural background) mean de-identified data can be re-identified by local readers — additional protection or aggregation is required.",
        "A data breach involving psychiatric records can cause significant harm — employment discrimination, relationship breakdown, legal consequences — and must be treated as a serious adverse event.",
      ],
      commonTrap:
        "Assuming de-identification is adequate when small local samples are easily re-identifiable.",
    },
    {
      id: "s15",
      order: 15,
      title: "Waiver of Consent",
      colorTag: "amber",
      explanation:
        "A waiver of consent may be appropriate in some circumstances but must be approved through the correct pathway. Self-authorising a waiver of consent because obtaining consent is inconvenient is a research ethics breach.",
      keyPoints: [
        "WAIVER MAY BE CONSIDERED FOR: low-risk retrospective record review where consent is impracticable and privacy protections are strong — but this must be approved through the appropriate ethics/governance pathway.",
        "QUESTIONS FOR WAIVER CONSIDERATION: why is consent impracticable, what is the public or service benefit, what is the risk of harm, can data be de-identified, are vulnerable groups involved, could patients reasonably object, is there a mechanism for opt-out if appropriate, is data access limited, is publication planned?",
        "The ethical justification for a waiver is that the public benefit outweighs the interference with autonomy — not that consent is difficult to obtain.",
        "Even when a waiver is approved, participants should be able to opt out of their data being used, wherever this is practicable.",
      ],
      commonTrap:
        "Self-authorising a waiver of consent because obtaining consent is inconvenient.",
    },
    {
      id: "s16",
      order: 16,
      title: "Consent and Capacity in Audit/QI",
      colorTag: "amber",
      explanation:
        "Audit and QI may not always require individual consent, but ethical issues still exist. Assuming audit never involves consent questions is incorrect.",
      keyPoints: [
        "CONSIDER CONSENT OR EXTRA REVIEW IF: patients are contacted directly, interviews/surveys are used, identifiable sensitive data are used, vulnerable groups are involved, results may affect care, data leave the service, small groups may be identifiable, publication is planned, there is more than low risk.",
        "Routine de-identified service data used solely for local improvement is the clearest case for no consent requirement — but each departure from this baseline requires consideration.",
        "Consumer involvement in designing the audit (not just the results) improves relevance and increases trust in the process.",
        "Even if no individual consent is required, the service should have a clear policy on how patients are informed that their data may be used for audit purposes — usually through the admission information/consent form.",
      ],
      commonTrap:
        "Assuming audit never involves consent questions.",
    },
    {
      id: "s17",
      order: 17,
      title: "Research With Children and Adolescents",
      colorTag: "red",
      explanation:
        "Children and adolescents are a vulnerable group requiring extra safeguards and independent voice. Getting parent consent but ignoring the young person's assent, distress or refusal is an ethical failure.",
      keyPoints: [
        "CONSIDER: child/adolescent capacity and maturity, parent/guardian consent, young person assent, confidentiality, self-harm disclosures, abuse/child protection, school involvement, family coercion, cultural factors, burden of participation, whether participation affects care.",
        "MEQ PHRASE: 'I would ensure the young person is not treated as merely an object of parent or school consent.'",
        "A child who assents to participation but whose parent refuses should not be enrolled — but a child who refuses participation, even if parents consent, should not be enrolled either.",
        "Self-harm or abuse disclosures during research with a young person trigger the same child-protection obligations as in clinical settings — the research relationship does not alter mandatory reporting duties.",
      ],
      commonTrap:
        "Getting parent consent but ignoring the young person's assent, distress or refusal.",
    },
    {
      id: "s18",
      order: 18,
      title: "Aboriginal and Torres Strait Islander Research Governance",
      colorTag: "green",
      explanation:
        "Research involving Aboriginal and Torres Strait Islander peoples, communities, data, knowledge or services requires cultural governance, not only standard ethics. Adding an Aboriginal variable to a dataset without cultural governance or community benefit is extractive research.",
      keyPoints: [
        "CONSIDER: Indigenous leadership, community benefit, ACCHO partnership, community consultation before design, data sovereignty, cultural safety, ownership and control of data, local approval pathways, avoiding deficit framing, Aboriginal workforce involvement, feedback of results to community, sustainability and accountability, cultural review/Aboriginal ethics committee where required.",
        "MEQ PHRASE: 'I would not treat Aboriginal participants as a subgroup added after design. I would seek Aboriginal governance and partnership from the beginning.'",
        "The AIATSIS Code of Ethics requires community consent, not only individual consent, for research involving Aboriginal and Torres Strait Islander peoples — this is a higher standard than standard HREC consent.",
        "Data sovereignty means communities have the right to govern collection, ownership and application of data about their people — hospital data ownership does not override this right.",
      ],
      commonTrap:
        "Adding an Aboriginal variable to a dataset without cultural governance or community benefit.",
    },
    {
      id: "s19",
      order: 19,
      title: "Refugee, CALD and Interpreter Governance in Research",
      colorTag: "teal",
      explanation:
        "CALD and refugee participants require specific protections in research. Using English-only consent forms for participants with limited English is a consent validity failure.",
      keyPoints: [
        "CONSIDER: professional interpreter for consent and interviews, translated participant information sheets, literacy and health literacy, fear of authorities, visa/residency concerns, torture/trauma triggers, confidentiality in small communities, family interpreter risks, cultural meaning of research, community organisation consultation, avoiding coercion through treating clinicians.",
        "Translated consent forms must be translated by a professional, not a family member or bilingual staff member — and must be back-translated to verify accuracy.",
        "Fear that research data will be shared with immigration authorities is a rational concern for refugee and asylum-seeker participants — the consent process must address this explicitly.",
        "Avoiding coercion through treating clinicians applies with particular force for refugees who may fear that refusing research will affect their clinical care or legal reports.",
      ],
      commonTrap:
        "Using English-only consent forms for participants with limited English.",
    },
    {
      id: "s20",
      order: 20,
      title: "Conflicts of Interest",
      colorTag: "purple",
      explanation:
        "Conflicts of interest may be financial, professional, academic, relational or service-based. Assuming conflict of interest matters only when money is involved misses the full range of governance risks.",
      keyPoints: [
        "EXAMPLES: pharmaceutical-sponsored study, consultant wants publication for promotion, registrar pressured to collect data, service director wants favourable audit result, researcher is treating psychiatrist, NGO partner wants positive evaluation, research funding linked to recruitment numbers, authorship promised for loyalty rather than contribution.",
        "MANAGE BY: declare conflicts, separate clinical care from recruitment where possible, independent consent process, oversight committee, transparent analysis plan, data access controls, authorship agreement, independent statistician if needed, report negative findings honestly.",
        "Financial conflict of interest (pharmaceutical sponsorship) is the most visible — but academic conflict (wanting a positive result for career advancement) and relational conflict (treating team recruiting own patients) are equally important in psychiatry.",
        "A research funding agreement that links payment to recruitment numbers creates a direct conflict between participant welfare and research income — this must be disclosed and managed through independent oversight.",
      ],
      commonTrap:
        "Assuming conflict of interest matters only when money is involved.",
    },
    {
      id: "s21",
      order: 21,
      title: "Treating Clinician as Researcher",
      colorTag: "amber",
      explanation:
        "When the treating psychiatrist recruits their own patient, the risk of perceived coercion is inherent. Saying 'I know the patient well, so recruitment is easier' without recognising the power imbalance is the core error.",
      keyPoints: [
        "RISKS: perceived pressure, therapeutic misconception, patient believes refusal affects care, boundary confusion, selective recruitment, over-disclosure by patient, difficulty managing adverse findings.",
        "SAFEGUARDS: independent recruiter where possible, clear voluntary explanation, written information, cooling-off time, capacity assessment, documentation, option to decline without consequences, separate research and clinical notes where appropriate, protocol for clinical risk discovered in research.",
        "'I know the patient well' is a risk factor for therapeutic misconception, not a protection against it — familiarity may increase the patient's trust that participation will help them personally.",
        "Where independent recruitment is not possible, at minimum the consent conversation should be conducted by a team member who is not the primary treating psychiatrist.",
      ],
      commonTrap:
        "Saying 'I know the patient well, so recruitment is easier' without recognising power imbalance.",
    },
    {
      id: "s22",
      order: 22,
      title: "Governance Support and Research Feasibility",
      colorTag: "green",
      explanation:
        "Research feasibility includes governance, not just clinical logistics. Starting data collection before approvals, protocol and data plan are finalised is a research integrity breach.",
      keyPoints: [
        "BEFORE STARTING, ENSURE: supervisor/principal investigator identified, project protocol, ethics/governance pathway, data custodian approval, statistics/methodology support, consumer input, cultural consultation if relevant, funding and resources, research training for staff.",
        "ALSO ENSURE: time allocation, storage and privacy plan, adverse finding protocol, publication and authorship plan.",
        "A project that is clinically feasible but lacks ethics approval, data governance or an adverse-finding protocol should not commence — the approval process is not a formality.",
        "Research training for staff collecting data is part of governance — a researcher who does not understand consent validity or adverse-finding protocols is a governance risk.",
      ],
      commonTrap:
        "Starting data collection before approvals, protocol and data plan are finalised.",
    },
    {
      id: "s23",
      order: 23,
      title: "Scientific Merit and Poor Research",
      colorTag: "purple",
      explanation:
        "Ethical research must have value and methodological quality. Approving a weak project because 'it is only observational' is unethical — it exposes participants to burden or risk without meaningful benefit.",
      keyPoints: [
        "CHECK: clear research question, appropriate design, adequate sample, valid measures, feasible recruitment, bias minimisation, analysis plan, consumer/community relevance, plan for dissemination, plan to act on findings if clinically relevant.",
        "Poor-quality research is unethical because it exposes participants to burden or risk without meaningful benefit — scientific merit is therefore an ethics requirement, not just an academic standard.",
        "A study that is too small to answer its own question definitively is wasting participant time and creating risk without producing usable evidence — power calculation is an ethics matter.",
        "HREC review includes scientific merit assessment — a methodologically weak study can and should be rejected on ethics grounds, not only on scientific ones.",
      ],
      commonTrap:
        "Approving a weak project because 'it is only observational.'",
    },
    {
      id: "s24",
      order: 24,
      title: "Authorship",
      colorTag: "purple",
      explanation:
        "Authorship should reflect genuine contribution and accountability — not hierarchy, loyalty or favour. Offering authorship as favour, reward or hierarchy entitlement is a research integrity violation.",
      keyPoints: [
        "AUTHORSHIP SHOULD REFLECT: substantial contribution to conception/design/data/analysis/interpretation, drafting or critical revision, approval of final version, accountability for the work.",
        "AUTHORSHIP INTEGRITY: order discussed early, contributors acknowledged appropriately, junior staff not exploited, senior staff not given honorary authorship, data collectors not automatically authors unless contribution meets criteria.",
        "AUTHORSHIP AND PUBLICATION INTEGRITY CARD: authorship requires substantial contribution, accountability and approval of final work — do not offer authorship as favour, coercion or reward, do not exclude junior contributors unfairly.",
        "Ghost authorship (unnamed contributors who did the work) and gift/honorary authorship (named non-contributors) are both research integrity violations — the ICMJE criteria are the standard reference.",
      ],
      commonTrap:
        "Offering authorship as favour, reward or hierarchy entitlement.",
    },
    {
      id: "s25",
      order: 25,
      title: "Publication and Dissemination",
      colorTag: "green",
      explanation:
        "Publication should be honest, responsible and respectful of participants. Publishing a 'de-identified' case report that local readers can identify is a privacy breach and an ethics violation.",
      keyPoints: [
        "BEFORE PUBLICATION: confirm ethics/governance approval permits dissemination, de-identify data, avoid small-cell re-identification, obtain consent for case details if identifiable, report methods honestly, declare conflicts, include negative findings, avoid overstating conclusions.",
        "ALSO BEFORE PUBLICATION: share results with service/community where appropriate, acknowledge contributors, follow journal and institutional policy.",
        "Negative findings must be published — selective publication of positive results distorts the evidence base and misleads clinicians who rely on published literature.",
        "Case reports of rare presentations require particular care — even with name removal, details such as location, cultural background, age, occupation and treatment combination may identify a patient to local colleagues.",
      ],
      commonTrap:
        "Publishing a 'de-identified' case report that local readers can identify.",
    },
    {
      id: "s26",
      order: 26,
      title: "Adverse Findings During Study",
      colorTag: "red",
      explanation:
        "Research role does not remove clinical duty. Treating concerning disclosures as 'research data only' is a patient-safety failure and an ethics violation.",
      keyPoints: [
        "ADVERSE FINDINGS MAY INCLUDE: suicidal intent, homicidal threat, psychotic relapse, severe depression, child abuse or neglect, family violence, medication toxicity, serious physical-health abnormality, cognitive deterioration, unsafe driving, intoxication/withdrawal, capacity concerns, participant distress during interview.",
        "RESPONSE: have protocol before study starts, inform participant of limits of confidentiality during consent, assess immediate risk, notify treating team according to protocol, escalate child protection/police if legal threshold met, arrange urgent clinical review if needed, document clinical and research actions, report serious adverse events if required, review whether study procedures caused harm.",
        "The protocol for managing adverse findings must exist before the study starts — it cannot be improvised when a participant discloses active suicidal planning.",
        "Participants should be told during consent that if they disclose serious risk to themselves or others, the research team has obligations that override research confidentiality — this is not optional, it is required.",
      ],
      commonTrap:
        "Treating concerning disclosures as 'research data only.'",
    },
    {
      id: "s27",
      order: 27,
      title: "Adverse Events and Safety Reporting",
      colorTag: "red",
      explanation:
        "For interventional studies or clinical trials, safety reporting must be explicit and pre-defined. Having ethics approval but no practical pathway for deteriorating participants is a governance failure.",
      keyPoints: [
        "PLAN: define adverse event and serious adverse event, reporting timelines, who is notified, participant withdrawal criteria, emergency unblinding if applicable, clinical responsibility, insurance/indemnity, trial steering or safety monitoring, incident reporting if patient harmed, governance committee reporting.",
        "The National Clinical Trials Governance Framework requires that sites have active oversight of participant safety, not just paper approvals.",
        "Serious adverse events must be reported to the HREC within defined timelines (often 72 hours) — late reporting is a governance breach, not just an administrative error.",
        "Participant withdrawal criteria must be defined in advance — a participant who deteriorates during an interventional study should have a clear pathway to exit safely, with continued access to clinical care.",
      ],
      commonTrap:
        "Having ethics approval but no practical pathway for deteriorating participants.",
    },
    {
      id: "s28",
      order: 28,
      title: "Acting on Audit Adverse Findings",
      colorTag: "red",
      explanation:
        "Audit findings may reveal immediate patient-safety problems. Treating audit findings as academic data rather than current patient-safety risks is a clinical governance failure.",
      keyPoints: [
        "EXAMPLES: ECT given without proper consent documentation, clozapine blood monitoring missed, lithium levels overdue, discharge summaries not sent, suicide-risk follow-up not completed, seclusion reviews overdue, high metabolic risk not monitored, child-safety documentation missing.",
        "RESPONSE: do not wait until final report if current patients are at risk, notify clinical lead, fix urgent patient-safety gaps, document escalation, prepare action plan, give feedback without blame, re-audit after changes.",
        "An audit finding that identifies a current patient at risk (e.g. clozapine blood not checked in the required timeframe) triggers an immediate clinical obligation — the audit process does not suspend clinical duty.",
        "The action plan from an audit should have named owners, timelines and a re-audit date — without these three elements, the audit cycle is incomplete.",
      ],
      commonTrap:
        "Treating audit findings as academic data rather than current patient-safety risks.",
    },
    {
      id: "s29",
      order: 29,
      title: "Research Misconduct and Integrity Concerns",
      colorTag: "red",
      explanation:
        "Research misconduct requires formal governance response, not informal management. Trying to manage suspected misconduct informally because the researcher is senior protects the institution, not participants.",
      keyPoints: [
        "RESEARCH INTEGRITY CONCERNS INCLUDE: fabrication, falsification, plagiarism, selective reporting, undeclared conflicts, data manipulation, duplicate publication, guest/honorary authorship, suppressing negative findings, recruiting without consent, using records without approval, breaching privacy, coercing junior staff, misrepresenting audit as research.",
        "RESPONSE: preserve records, seek advice from research governance office, escalate to research integrity advisor if available, protect participants, protect whistleblowers, avoid informal cover-up, document factually, follow institutional process.",
        "The Australian Code for Responsible Conduct of Research requires institutions to respond to research integrity concerns through a formal process — informal mediation is not an appropriate response to fabrication or falsification.",
        "Protecting whistleblowers is a governance obligation — a junior researcher who raises concerns about a senior colleague's data must be protected from retaliation.",
      ],
      commonTrap:
        "Trying to manage suspected misconduct informally because the researcher is senior.",
    },
    {
      id: "s30",
      order: 30,
      title: "Trainees and Research Pressure",
      colorTag: "amber",
      explanation:
        "Trainees may be exploited in research contexts under the guise of career development. Calling exploitative research pressure 'career development' is the core framing error.",
      keyPoints: [
        "TRAINEES MAY BE PRESSURED TO: collect data without approval, recruit their own patients, add a supervisor as author, work unpaid hours, ignore privacy concerns, produce publishable results, avoid reporting negative findings.",
        "CONSULTANT RESPONSE: clarify governance approval, protect trainee from coercion, ensure supervision, clarify authorship early, ensure workload is reasonable, escalate misconduct or bullying, support research training, separate training opportunity from exploitation.",
        "A trainee who collects data without ethics approval is exposed to personal professional risk — the consultant who directed this is accountable for the governance failure.",
        "Authorship promised to a trainee for recruiting patients is a conflict of interest — it creates pressure to recruit regardless of participant welfare.",
      ],
      commonTrap:
        "Calling exploitative research pressure 'career development.'",
    },
    {
      id: "s31",
      order: 31,
      title: "Consumer and Carer Involvement",
      colorTag: "green",
      explanation:
        "Consumer and carer involvement improves relevance and acceptability of research and audit. Adding consumer review after the protocol is already finalised is tokenism.",
      keyPoints: [
        "USE CONSUMER INVOLVEMENT FOR: research question development, participant information sheets, consent process, outcome measures, burden of participation, safety protocols, dissemination, service redesign after audit.",
        "Involve consumers meaningfully, not tokenistically.",
        "Consumer involvement in developing the participant information sheet consistently improves readability and reduces misunderstanding — it is not just procedurally required, it improves the consent process.",
        "Consumers with lived experience of the condition being studied can identify outcome measures that matter to patients, not just to researchers — this is a quality and ethics improvement, not only a governance box-tick.",
      ],
      commonTrap:
        "Adding consumer review after protocol is already finalised.",
    },
    {
      id: "s32",
      order: 32,
      title: "Governance After Study Completion",
      colorTag: "green",
      explanation:
        "Research and audit obligations continue after data collection ends. Completing a study for publication but not feeding learning back into clinical care misses the purpose of the work.",
      keyPoints: [
        "AFTER COMPLETION: analyse according to plan, protect data, report findings honestly, share results with service, share results with participants/community where appropriate, implement audit/QI recommendations, re-audit, publish responsibly, close ethics/governance reporting requirements, retain/destroy data according to approval, update policies if needed.",
        "Data retention and destruction must follow the approved plan — retaining identifiable research data beyond the approved period is a privacy governance breach.",
        "Feeding findings back to the service closes the governance loop — research that improves academic knowledge without improving local practice has failed one of its core ethical justifications.",
        "If results are shared with participants or communities, plain language summaries that are actually readable are required — not a copy of the published paper.",
      ],
      commonTrap:
        "Completing a study for publication but not feeding learning back into clinical care.",
    },
    {
      id: "s33",
      order: 33,
      title: "MEQ Example Traps",
      colorTag: "blue",
      explanation:
        "Seven worked examples covering the most common research governance MEQ stems. In each, the core error is missing that research governance includes ethics, privacy, consent, authorship, culture and adverse findings.",
      keyPoints: [
        "EXAMPLE 1 — AUDIT VS RESEARCH: consultant wants to review schizophrenia admissions and publish relapse predictors. TRAP: call it audit. BETTER: clarify it is research (generalisable knowledge); seek ethics/governance review, consent/waiver and privacy plan.",
        "EXAMPLE 2 — ECT AUDIT: audit finds missing consent documentation in current ECT patients. TRAP: wait until report. BETTER: escalate current safety issue, review affected patients, fix documentation/consent pathway, report through governance and re-audit.",
        "EXAMPLE 3 — INVOLUNTARY PATIENT RESEARCH: involuntary patient asked to join medication study. TRAP: assume incapacity or assume consent valid. BETTER: assess capacity, voluntariness, coercion risk, independent consent, ethics approval and treatment unaffected by refusal.",
        "EXAMPLE 4 — ABORIGINAL RESEARCH CONSULTATION: team wants Aboriginal youth data without ACCHO involvement. TRAP: use data because hospital owns it. BETTER: seek Aboriginal cultural governance, ACCHO/community consultation, data sovereignty and ethics approval.",
        "EXAMPLE 5 — ADVERSE FINDING: participant discloses active suicidal plan during research interview. TRAP: treat as confidential research data. BETTER: follow safety protocol, assess risk, notify treating team/emergency pathway, document and report if required.",
        "EXAMPLE 6 — AUTHORSHIP: senior consultant asks to be first author despite little contribution. TRAP: agree due to hierarchy. BETTER: discuss authorship criteria, contribution, accountability and institutional policy.",
        "EXAMPLE 7 — PUBLICATION: registrar wants to publish a rare case from a small town. TRAP: remove name only. BETTER: assess identifiability, obtain consent if needed, consult governance, disguise non-essential details and avoid harm.",
      ],
      commonTrap:
        "Missing that research governance includes ethics, privacy, consent, authorship, culture and adverse findings.",
    },
    {
      id: "s34",
      order: 34,
      title: "Command-Word Discipline",
      colorTag: "amber",
      explanation:
        "Research governance questions require structured, justified responses. Writing 'get ethics approval' without explaining why or what else is needed loses marks.",
      keyPoints: [
        "LIST: clarify audit versus research, ethics/governance review, consent or waiver, privacy plan, vulnerable participant safeguards, conflict declaration, adverse finding protocol, authorship plan.",
        "OUTLINE (list and justify): 'Clarify project type — because audit, QI and research have different governance pathways. Seek HREC/governance advice — because psychiatric participants and sensitive records create ethical and privacy risks. Plan adverse finding response — because research interviews may reveal suicide, abuse, psychosis or medical risk.'",
        "DESCRIBE (list and explain): 'Assess capacity and voluntariness — because psychiatric patients may understand information but feel coerced if their treating team is recruiting them. De-identify and restrict data access — because mental health records contain highly sensitive and potentially re-identifiable information.'",
        "DISCUSS (name the tension): 'There is tension between generating useful knowledge and protecting vulnerable participants. A defensible consultant position is to support research or audit that has clear value, proportionate ethics/governance review, valid consent or lawful waiver, privacy safeguards, cultural consultation where relevant, and a plan to act on clinically significant findings.'",
      ],
      commonTrap:
        "Writing 'get ethics approval' without explaining why or what else is needed.",
    },
    {
      id: "s35",
      order: 35,
      title: "Examiner Phrases",
      colorTag: "green",
      explanation:
        "Use these phrases to signal consultant-level research governance reasoning. Missing governance language — HREC, site governance, consent/waiver, data custodian, vulnerability, adverse findings and authorship — signals registrar-level thinking.",
      keyPoints: [
        "'I would first clarify whether this is audit, quality improvement, service evaluation or research.'",
        "'Audit measures care against existing standards and must lead to action and re-audit.'",
        "'Research aims to generate generalisable knowledge and requires ethics and governance review.'",
        "'Publication intent increases governance scrutiny, even if the project began as audit.'",
        "'Psychiatric diagnosis alone does not remove capacity, but vulnerability requires safeguards.'",
        "'Consent for treatment is not consent for research.'",
        "'The treating relationship may create perceived coercion, so independent recruitment should be considered.'",
        "'I would collect the minimum necessary data and protect against re-identification.'",
        "'Research does not remove clinical duty when serious risk is discovered.'",
        "'Authorship should reflect genuine contribution and accountability.'",
        "'Aboriginal and Torres Strait Islander research requires cultural governance and community benefit, not tokenistic consultation.'",
      ],
      commonTrap:
        "Missing governance language: HREC, site governance, consent/waiver, data custodian, vulnerability, adverse findings and authorship.",
    },
    {
      id: "s36",
      order: 36,
      title: "Consultant-Level Summary",
      colorTag: "green",
      explanation:
        "This paragraph is reusable in MEQ stems involving audit versus research, schizophrenia observational studies, vulnerable participants, consent/capacity, ethics approval, publication, authorship disputes and adverse findings during study.",
      keyPoints: [
        "CLASSIFICATION AND GOVERNANCE: 'I would first clarify whether the project is audit, QI, service evaluation or research, because each has different governance requirements. Audit should measure practice against explicit standards, lead to action and re-audit; research aiming to generate generalisable knowledge requires ethics and site governance review.'",
        "PARTICIPANT PROTECTION: 'I would ensure scientific merit, proportional risk review, valid consent or lawful waiver, capacity and voluntariness safeguards, privacy and data-custodian approval, conflict-of-interest declarations, cultural governance where relevant, and a protocol for adverse findings such as suicidality, abuse or medical deterioration.'",
        "INTEGRITY AND FEEDBACK: 'Publication and authorship should follow research integrity principles, and findings should be fed back to the service, participants or community where appropriate.'",
        "FULL PARAGRAPH: 'I would first clarify whether the project is audit, QI, service evaluation or research, because each has different governance requirements. Audit should measure practice against explicit standards, lead to action and re-audit; research aiming to generate generalisable knowledge requires ethics and site governance review. I would ensure scientific merit, proportional risk review, valid consent or lawful waiver, capacity and voluntariness safeguards, privacy and data-custodian approval, conflict-of-interest declarations, cultural governance where relevant, and a protocol for adverse findings such as suicidality, abuse or medical deterioration. Publication and authorship should follow research integrity principles, and findings should be fed back to the service, participants or community where appropriate.'",
      ],
      meqApplication:
        "This paragraph should be reusable in MEQ stems involving audit versus research, schizophrenia observational studies, vulnerable participants, consent/capacity, ethics approval, publication, authorship disputes and adverse findings during study.",
    },
  ],
};

export const RESOURCE_ALLOCATION_ETHICS: Note = {
  id: "resource_allocation_ethics",
  title: "Financial / Resource Allocation and Ethics in Psychiatry",
  category: "Ethics in Psychiatry / Clinical Governance / Leadership / Resource Allocation",
  description:
    "A consultant-level framework for ethical resource allocation in psychiatry, including bed scarcity, expensive treatment, rural resources, staffing allocation, ECT theatre access, one adolescent bed available, long-stay patients occupying acute beds, and service director requests for rationing.",
  sections: [
    {
      id: "s01",
      order: 1,
      title: "Core Principle",
      colorTag: "blue",
      explanation:
        "Resource scarcity does not remove duty of care. The consultant must not silently accept unsafe care — the response is transparent clinical prioritisation, honest communication, escalation and advocacy.",
      keyPoints: [
        "STRONG CONSULTANT ANSWER: 'I would not silently lower the standard of care because resources are limited. I would make a clinically prioritised, transparent, documented decision using fair criteria, provide the safest available alternative care, escalate the resource gap, communicate honestly with patients/families/staff, and advocate for the resources required to meet the expected standard.'",
        "THE CONSULTANT MUST BALANCE: duty to the individual patient, duty to other patients waiting, duty to staff safety, duty to the service, fairness and non-discrimination, clinical urgency, least restrictive care, transparency, accountability and advocacy.",
        "SCARCE RESOURCE ETHICAL TENSION: 'There is tension between my duty of care to the patient in front of me and my duty of justice to other patients who also need scarce resources. A defensible consultant position is to prioritise according to transparent clinical criteria, provide the safest available alternative, document the reasoning, and escalate the resource gap rather than quietly accepting unsafe care.'",
        "DO NOT SILENTLY LOWER STANDARD: resource scarcity does not remove duty of care — do not quietly lower observation, discharge, admission, ECT, follow-up or staffing standards to fit the resource gap.",
      ],
      commonTrap:
        "Saying 'no beds' or 'no resources' as if duty of care ends.",
    },
    {
      id: "s02",
      order: 2,
      title: "Central Ethical Tension",
      colorTag: "purple",
      explanation:
        "The examiner is testing consultant ethical judgement, not bed management alone. Presenting an operational shortcut as an ethical decision is the core mark-losing error.",
      keyPoints: [
        "MEQ PHRASE: 'There is tension between my duty of care to the patient in front of me and my duty of justice to other patients who also need scarce resources. A defensible consultant position is to prioritise according to transparent clinical criteria, provide the safest available alternative, document the reasoning, and escalate the resource gap rather than quietly accepting unsafe care.'",
        "This is stronger than: 'There are no beds, so discharge the least unwell patient.'",
        "KEY POINT: the examiner is testing consultant ethical judgement, not bed management alone.",
        "RESOURCE ESCALATION LADDER: bed manager → clinical director → service director → executive on-call → statewide/regional coordinator → private/regional options → ethics/legal/governance if unresolved risk.",
      ],
      commonTrap:
        "Presenting an operational shortcut as an ethical decision.",
    },
    {
      id: "s03",
      order: 3,
      title: "Four Ethical Principles in Resource Allocation",
      colorTag: "purple",
      explanation:
        "Resource allocation requires all four principles simultaneously. Only discussing beneficence to one patient and ignoring justice to others is a consistent mark-losing error.",
      keyPoints: [
        "AUTONOMY: respect the patient's preferences, informed consent, values and choices. Autonomy does not mean the patient can demand any scarce resource regardless of clinical priority.",
        "BENEFICENCE: act in the patient's best interests. Example: a suicidal adolescent may benefit from the only adolescent bed.",
        "NON-MALEFICENCE: avoid preventable harm. Example: discharging a still-psychotic patient because of bed pressure may create foreseeable harm.",
        "JUSTICE: allocate resources fairly. Example: the only adolescent bed should be allocated by clinical urgency, risk, likely benefit, vulnerability and alternatives — not by which family shouts loudest.",
      ],
      commonTrap:
        "Only discussing beneficence to one patient and ignoring justice to others.",
    },
    {
      id: "s04",
      order: 4,
      title: "Distributive Justice",
      colorTag: "purple",
      explanation:
        "Fairness does not always mean first come, first served — in healthcare, fairness means priority according to clinical need, urgency and likely benefit. Using first come, first served when another patient has more urgent preventable harm is unjust.",
      keyPoints: [
        "DISTRIBUTIVE JUSTICE REQUIRES: consistent criteria, clinical prioritisation, transparency, documentation, avoidance of discrimination, review of inequity, appeal/escalation pathways, consumer/carer communication, system advocacy.",
        "FAIR CRITERIA: severity of illness, immediacy of risk, vulnerability, likelihood of benefit, lack of safe alternatives, reversibility/preventability of harm, duration of need, impact on others (including children/public safety), least restrictive safe option, equity considerations (rurality, disability, culture, language barriers).",
        "FAIR CRITERIA / UNFAIR CRITERIA — FAIR: clinical urgency, risk, vulnerability, likely benefit, lack of alternatives, preventability of harm. UNFAIR: diagnosis stigma, family pressure, media risk, private status, staff preference, clinician convenience, ethnicity, disability, gender, cultural background or 'difficult patient' labels.",
        "Fairness is not sameness — equity may require additional or different resources to achieve fair access and safe outcomes.",
      ],
      commonTrap:
        "Using first come, first served when another patient has more urgent preventable harm.",
    },
    {
      id: "s05",
      order: 5,
      title: "Unfair Allocation Criteria",
      colorTag: "red",
      explanation:
        "Unfair allocation criteria masquerade as clinical judgement. Denying admission or resources because the patient is labelled 'borderline,' 'manipulative,' 'frequent presenter' or 'non-compliant' is discriminatory.",
      keyPoints: [
        "UNFAIR CRITERIA: social worth, popularity with staff, family pressure, media risk, private insurance status in a public allocation decision, ethnicity, gender, disability, diagnosis stigma, personality disorder label, 'difficult patient' label, clinician convenience, bed manager pressure alone, fear of complaint alone.",
        "A DEFENSIBLE CONSULTANT ASKS: 'What is the clinical need, risk, likely benefit, vulnerability and available alternative for this person now?'",
        "Personality disorder, frequent presentation and voluntary legal status are not fair grounds for denying admission or resources when clinical need, risk and safety alternatives are the correct criteria.",
        "Media risk (high-profile patient or family) and family pressure are symmetrically unfair — neither should inflate or deflate clinical priority.",
      ],
      commonTrap:
        "Denying admission or resources because the patient is labelled 'borderline,' 'manipulative,' 'frequent presenter' or 'non-compliant.'",
    },
    {
      id: "s06",
      order: 6,
      title: "Duty of Care Under Scarcity",
      colorTag: "blue",
      explanation:
        "Duty of care does not mean you can always provide the ideal resource — it means you must provide a reasonable, safe, clinically defensible response. Equating lack of resource with permission to provide no plan is the core error.",
      keyPoints: [
        "WHEN THE IDEAL RESOURCE IS UNAVAILABLE, DUTY OF CARE REQUIRES: reassessing clinical risk, identifying the safest available option, increasing observation or outreach if needed, using interim supports, communicating the limitation honestly, documenting why ideal care was unavailable, escalating to the person with operational authority, advocating for additional resources, reviewing frequently, not abandoning the patient.",
        "USEFUL PHRASE: 'The absence of the ideal resource does not justify absence of care.'",
        "Duty of care is not an all-or-nothing standard — when the ideal is unavailable, the obligation is to provide the safest available alternative, not to stop caring.",
        "Documenting why the ideal care was unavailable is both clinically and medico-legally important — it shows the decision was not negligent but was a reasoned response to a constrained environment.",
      ],
      commonTrap:
        "Equating lack of resource with permission to provide no plan.",
    },
    {
      id: "s07",
      order: 7,
      title: "Do Not Silently Lower the Standard of Care",
      colorTag: "red",
      explanation:
        "Naming the gap, managing the risk, escalating the gap and documenting the decision are the four required steps. Pretending an unsafe workaround is normal care is one of the most important examiner points.",
      keyPoints: [
        "UNSAFE ANSWER: 'No adolescent bed, so admit to adult ward and monitor.'",
        "BETTER ANSWER: 'If an adolescent bed is unavailable, I would document that the standard pathway is not available, escalate to the clinical director/bed manager, seek regional/private/interstate alternatives if appropriate, and if temporary adult admission is unavoidable, implement enhanced safeguards, CAMHS input, family involvement, child-safe environment, observation and rapid review.'",
        "THE FOUR STEPS: name the gap → manage the risk → escalate the gap → document the decision.",
        "The 'silent workaround' is ethically worse than an acknowledged gap — it hides the resource failure from governance, prevents advocacy and exposes the clinician to individual accountability for a system-level problem.",
      ],
      commonTrap:
        "Pretending an unsafe workaround is normal care.",
    },
    {
      id: "s08",
      order: 8,
      title: "Transparent Criteria",
      colorTag: "purple",
      explanation:
        "Resource allocation must be based on criteria that can be explained to patients, families, staff and executives. Making allocation decisions privately without criteria or documentation is a governance failure.",
      keyPoints: [
        "GOOD CRITERIA ARE: clinically relevant, consistent, documented, known to the team, open to review, not discriminatory, linked to policy where possible, flexible enough for unusual risk.",
        "EXAMPLES OF BED ALLOCATION CRITERIA: acute risk to self/others, severe mental illness requiring containment/treatment, need for involuntary care, inability to be safely managed in community, lack of supervision/support, medical/psychiatric complexity, child/public safety risk, likely benefit from admission.",
        "Transparency protects both patients (from arbitrary decisions) and clinicians (from accusations of discrimination or bias) — it is both an ethical and a medico-legal requirement.",
        "BUSINESS CASE THINKING: problem, demand, risk, incidents, options, preferred solution, cost, workforce, implementation, metrics and consumer impact.",
      ],
      commonTrap:
        "Making allocation decisions privately without criteria or documentation.",
    },
    {
      id: "s09",
      order: 9,
      title: "Clinical Prioritisation",
      colorTag: "blue",
      explanation:
        "Clinical prioritisation is not the same as 'who arrived first.' Prioritising the loudest referral source rather than clinical risk is unjust.",
      keyPoints: [
        "PRIORITISE USING: urgency, severity, likelihood of deterioration, preventability of harm, vulnerability, whether delay is safe, whether another safe pathway exists, intensity/duration of resource needed, likely benefit, impact on other patients.",
        "EXAMPLE: two patients need the only acute bed. Patient A has chronic suicidal ideation, is settled, has family and can engage with crisis team. Patient B has severe psychotic depression, is not eating, has high suicide risk and family cannot supervise. Patient B likely has higher priority because of imminent risk, medical deterioration and lack of safe alternative. Patient A still needs a documented safety plan, follow-up and contingency pathway.",
        "Even the patient who does not receive the scarce resource still has a duty of care obligation — they need a documented safety plan, follow-up and contingency pathway.",
        "Clinical prioritisation must be documented — if the decision is later questioned, the record must show which criteria were used and why one patient's need was more urgent than another's.",
      ],
      commonTrap:
        "Prioritising the loudest referral source rather than clinical risk.",
    },
    {
      id: "s10",
      order: 10,
      title: "Avoiding Discrimination",
      colorTag: "red",
      explanation:
        "Resource allocation can easily become discriminatory when teams use labels rather than clinical criteria. Using diagnosis, behaviour or stigma as a proxy for clinical priority is discrimination.",
      keyPoints: [
        "WATCH FOR: 'Borderline patients should not get beds.' / 'He always presents.' / 'She is too difficult.' / 'Older adults do not benefit.' / 'Forensic patients are dangerous, keep them longer.' / 'Refugee family is too complex.' / 'Aboriginal family never attends.' / 'Intellectual disability is not our job.' / 'Substance use means self-inflicted.'",
        "These are not fair allocation criteria — they are diagnoses, behaviours or demographic characteristics masquerading as clinical reasoning.",
        "Substance use does not mean the harm is self-inflicted and therefore lower priority — the ethical question is current clinical need, risk and likely benefit, not causation.",
        "Frequent presentation is a clinical signal (unmet need, poor community follow-up, service system gap) — not a ground for lower priority in the current acute episode.",
      ],
      commonTrap:
        "Using diagnosis, behaviour or stigma as a proxy for clinical priority.",
    },
    {
      id: "s11",
      order: 11,
      title: "Bed Scarcity",
      colorTag: "red",
      explanation:
        "Bed scarcity is the most common resource-allocation MEQ stem. Treating voluntary legal status as a safe discharge criterion is the most common mark-losing shortcut.",
      keyPoints: [
        "GOOD RESPONSE: assess current clinical need of the patient needing admission, review all current inpatients for safe discharge or step-down (not rushed discharge), consider leave beds/transfer/step-up/step-down/crisis accommodation/private/regional options, increase community/crisis support if admission unavailable, escalate to bed manager/clinical director/executive on-call, document resource constraint and clinical reasoning, communicate honestly with patient/family, review frequently.",
        "UNSAFE SHORTCUTS: discharge the 'least popular' patient, discharge because they are voluntary, refuse admission because the patient has BPD/personality disorder, place adolescent in adult ward without safeguards, keep patient in ED without psychiatric review, say 'no beds' without escalation.",
        "Voluntary status means the patient can technically leave — it does not mean they are clinically safe to be discharged under bed pressure.",
        "A 'safe discharge' requires the same clinical standards under bed pressure as at any other time — the presence of bed pressure does not lower the clinical threshold for safe discharge.",
      ],
      commonTrap:
        "Treating voluntary legal status as a safe discharge criterion.",
    },
    {
      id: "s12",
      order: 12,
      title: "One Adolescent Bed Available",
      colorTag: "red",
      explanation:
        "This is classic exam material. Using adult ward admission as a routine solution rather than last resort with safeguards is the core error.",
      keyPoints: [
        "PRIORITISE USING: immediate suicide/self-harm risk, psychosis/mania/severe depression, eating disorder medical/psychiatric risk, family capacity to supervise, child protection risk, developmental vulnerability, ability to use alternative care, risk of adult ward admission, distance/rurality, school/community supports, likely benefit from admission.",
        "IF ADOLESCENT BED UNAVAILABLE: regional child/adolescent bed search, private bed if appropriate/funded, paediatric ward with CAMHS consultation, adult ward only as last resort with safeguards, crisis team daily contact, family safety plan, means removal, school/GP involvement, child protection if supervision unsafe, senior escalation.",
        "Adult ward admission of an adolescent requires enhanced safeguards — named CAMHS contact, daily review, child-safe environment, family involvement, separate observation, rapid transfer plan — not just a standard admission.",
        "The adolescent who does not receive the bed still needs a documented risk assessment, safety plan and follow-up — they have not been discharged from clinical responsibility.",
      ],
      commonTrap:
        "Using adult ward admission as a routine solution rather than last resort with safeguards.",
    },
    {
      id: "s13",
      order: 13,
      title: "Long-Stay Patient Occupying Acute Bed",
      colorTag: "amber",
      explanation:
        "Long-stay patients have rights to safe, appropriate discharge planning — and acute patients have rights to timely admission. Unsafe discharge of the long-stay patient to solve bed pressure is a clinical and ethical failure.",
      keyPoints: [
        "AVOID DEHUMANISING LANGUAGE: do not say 'bed blocker.' Say: 'a patient with prolonged admission whose current care needs may no longer be best met in an acute inpatient unit.'",
        "ASSESS: current mental state and risk, ongoing need for acute admission, functional needs, housing/NDIS/aged-care barriers, guardianship/administration, family/carer capacity, occupational therapy assessment, community provider availability, step-down/rehabilitation options, patient's preferences and rights, risk if discharged prematurely, harm from prolonged admission.",
        "ETHICAL TENSION: 'There is tension between the long-stay patient's right to safe, appropriate discharge planning and the acute needs of patients waiting for admission.'",
        "Prolonged acute admission may itself cause harm (institutionalisation, loss of community links, exposure to acute ward environment) — the ethical case for transition is not only about freeing the bed, but about the long-stay patient's own interests.",
      ],
      commonTrap:
        "Unsafe discharge of the long-stay patient to solve bed pressure.",
    },
    {
      id: "s14",
      order: 14,
      title: "Expensive Treatment",
      colorTag: "purple",
      explanation:
        "Expensive treatment decisions must be based on evidence, clinical necessity, urgency, likely benefit and fair criteria. Saying yes because of family pressure or no because it is expensive, without clinical/evidence/fairness analysis, are both errors.",
      keyPoints: [
        "EXAMPLES: ECT access, rTMS or ketamine, clozapine monitoring resources, psychological therapy package, specialist neurodevelopmental assessment, intensive community package, inpatient eating disorder bed, private transfer, interstate specialist service.",
        "ASK: is treatment evidence-based for this indication, is it clinically necessary or optional, are standard treatments exhausted, what is urgency, what is likely benefit, what are risks, are cheaper safe alternatives available, is there policy/funding pathway, are criteria applied consistently, is there conflict of interest, has patient been informed honestly, is appeal/second opinion available?",
        "Expensive treatments that are evidence-based, clinically necessary and without safe cheaper alternatives should not be withheld solely on cost — that is distributive injustice.",
        "Where funding pathway requires specific criteria, apply those criteria consistently — not based on which family advocates most effectively.",
      ],
      commonTrap:
        "Saying yes because of family pressure or no because it is expensive, without clinical/evidence/fairness analysis.",
    },
    {
      id: "s15",
      order: 15,
      title: "Rural Resource Scarcity",
      colorTag: "amber",
      explanation:
        "Rurality changes the delivery model — it does not change the ethical obligation to provide safe, timely and culturally appropriate care. Accepting a lower standard of care because the patient lives rurally is unjust.",
      keyPoints: [
        "PROBLEMS: no local psychiatrist, no adolescent bed, no ECT theatre, no interpreter, no AOD service, no crisis team, long transport distances, limited GP cover, limited private options, cultural/community constraints, police/ambulance as default transport, telehealth limitations.",
        "CONSULTANT RESPONSE: use telepsychiatry where appropriate, support GP/local team, clarify escalation pathway, use regional hub referral, arrange safe transport if needed, involve family/community supports with consent, involve ACCHO/cultural services where relevant, document unavailable resources, escalate inequity, develop business case if recurrent, do not accept rurality as justification for unsafe care.",
        "MEQ PHRASE: 'Rurality changes the delivery model, not the ethical obligation to provide safe, timely and culturally appropriate care.'",
        "Rural resource scarcity should be escalated and documented — pattern documentation is the basis for business cases and workforce planning.",
      ],
      commonTrap:
        "Accepting a lower standard of care because the patient lives rurally.",
    },
    {
      id: "s16",
      order: 16,
      title: "Staffing Allocation",
      colorTag: "red",
      explanation:
        "Staffing is both a resource and a safety issue. Changing the clinical care standard to fit unsafe staffing is a patient-safety failure.",
      keyPoints: [
        "ALLOCATE BASED ON: patient acuity, observation requirements, seclusion/restraint risk, new admissions, staff skill mix, junior staff supervision, physical health complexity, language/cultural needs, gender/trauma safety, home-visit risk, after-hours risk, fatigue.",
        "AVOID: leaving junior staff unsupported, using restrictive practice to compensate for low staffing, sending lone workers into high-risk homes, ignoring staff fatigue, reducing observations only because staffing is short.",
        "Observations are based on clinical risk, not available staff — if staffing is insufficient for required observation level, escalate the staffing gap, do not lower the observation level to match the available staff.",
        "Using restrictive practice (seclusion, restraint) to compensate for low staffing is both an ethical failure and a clinical governance breach.",
      ],
      commonTrap:
        "Changing the clinical care standard to fit unsafe staffing.",
    },
    {
      id: "s17",
      order: 17,
      title: "ECT Theatre Access",
      colorTag: "purple",
      explanation:
        "ECT theatre scarcity requires transparent clinical prioritisation. Giving the theatre slot to the most senior consultant's patient instead of the most clinically urgent patient is unjust.",
      keyPoints: [
        "PRIORITISE: catatonia, severe psychotic depression, life-threatening refusal of food/fluids, high suicide risk, severe treatment-resistant illness with functional collapse, continuation ECT where relapse risk is severe, anaesthetic/medical urgency, patients whose delay creates foreseeable serious harm.",
        "ALSO CONSIDER: consent/capacity/tribunal pathway, anaesthetic safety, cognitive adverse effects, patient travel burden, equity across public/private/rural patients, waiting list transparency, documentation of priority decision.",
        "Continuation ECT for a patient at very high relapse risk may be clinically as urgent as acute ECT for a new presentation — the priority decision must be based on clinical consequences of delay, not treatment history.",
        "A transparent waiting list with documented clinical priority decisions is the governance standard — verbal queue management between consultants is not.",
      ],
      commonTrap:
        "Giving theatre slot to the most senior consultant's patient instead of the most clinically urgent patient.",
    },
    {
      id: "s18",
      order: 18,
      title: "Service Director Asks for Rationing",
      colorTag: "purple",
      explanation:
        "Rationing, if unavoidable, should be explicit, ethically justified, clinically governed and monitored — not hidden inside individual discharge decisions. Quietly raising admission thresholds without governance or monitoring is covert rationing.",
      keyPoints: [
        "EXAMPLE STEM: 'The service director asks consultants to reduce admissions by 20% and restrict long admissions due to budget pressure.'",
        "STRONG RESPONSE: ask for explicit policy/criteria, ensure clinical governance input, involve consumer/carer perspectives, assess patient safety impact, avoid covert rationing by individual clinicians, develop transparent prioritisation criteria, monitor adverse outcomes, escalate unsafe consequences, document decisions, advocate for funding/staffing, ensure legal/MHA duties are met, do not misrepresent service availability to patients.",
        "KEY PHRASE: 'Rationing, if unavoidable, should be explicit, ethically justified, clinically governed and monitored — not hidden inside individual discharge decisions.'",
        "When a service director's instruction conflicts with individual patient duty of care, the consultant has an obligation to raise the conflict formally — this is not insubordination, it is governance.",
      ],
      commonTrap:
        "Quietly raising admission thresholds without governance or monitoring.",
    },
    {
      id: "s19",
      order: 19,
      title: "Transparent Communication With Patients and Families",
      colorTag: "teal",
      explanation:
        "Communicate honestly without blaming the system helplessly. Being honest about scarcity but not offering an interim plan is insufficient — honesty plus action is required.",
      keyPoints: [
        "SAY: 'The clinically preferred option is an adolescent inpatient bed. That bed is not currently available. I am escalating this and searching for alternatives. While that occurs, we will put in place the safest interim plan: observation, family support, crisis review and daily reassessment.'",
        "AVOID: 'There is nothing we can do.' / 'You are not sick enough.' / 'No beds, go home.' / 'The manager said no.' / 'Try ED again if worse.' / 'This is just how the system is.'",
        "Blaming the system without offering an interim plan abandons the patient — the consultant's role is to maximise safety within the constrained system, not to report constraints as an outcome.",
        "Honest communication about resource constraints, combined with a clear interim plan, maintains therapeutic alliance and reduces the risk of the patient or family disengaging.",
      ],
      commonTrap:
        "Being honest about scarcity but not offering an interim plan.",
    },
    {
      id: "s20",
      order: 20,
      title: "Documentation",
      colorTag: "purple",
      explanation:
        "Documentation must capture both the clinical reasoning and the resource constraint and escalation steps. Documenting the resource outcome but not the clinical reasoning or escalation is inadequate.",
      keyPoints: [
        "DOCUMENT: clinical assessment, risk formulation, resource requested, why it was clinically indicated, resource unavailable, alternatives considered, prioritisation criteria used, who was consulted, escalation steps, patient/family communication, interim safety plan, review timeframe, unresolved risk, advocacy/business case if systemic.",
        "POOR NOTE: 'No beds. Discharge with crisis number.'",
        "BETTER NOTE: 'Admission clinically indicated due to escalating psychotic depression, refusal of food and active suicidal intent. No adolescent bed available statewide at 18:00 despite escalation to bed manager and clinical director. Paediatric admission with CAMHS daily review arranged as interim; parents informed; 1:1 nursing, means restriction and transfer request active. Reassess in morning.'",
        "Good documentation of resource scarcity and escalation protects the clinician — it demonstrates that the decision was not negligent but was the best available response to a constrained environment.",
      ],
      commonTrap:
        "Documenting the resource outcome but not the clinical reasoning or escalation.",
    },
    {
      id: "s21",
      order: 21,
      title: "Escalation",
      colorTag: "purple",
      explanation:
        "Escalation recognises that some resource decisions exceed individual consultant authority. Keeping system-level risk at individual consultant level is both unsafe and unfair.",
      keyPoints: [
        "ESCALATION MAY INCLUDE: bed manager, clinical director, service director, executive on-call, risk manager, child/adolescent network, statewide bed coordinator, private provider, transfer centre, ethics committee, legal/MHA advice, funding panel, coroner/critical incident governance after harm, business case to executive.",
        "KEY POINT: escalation is not dumping the problem — it recognises that some resource decisions exceed individual consultant authority.",
        "RESOURCE ESCALATION LADDER: bed manager → clinical director → service director → executive on-call → statewide/regional coordinator → private/regional options → ethics/legal/governance if unresolved risk.",
        "When escalation fails to resolve the resource gap, the consultant must document that escalation occurred, what response was received, and what interim plan was implemented — this creates accountability at the appropriate governance level.",
      ],
      commonTrap:
        "Keeping system-level risk at individual consultant level.",
    },
    {
      id: "s22",
      order: 22,
      title: "Resource Advocacy",
      colorTag: "green",
      explanation:
        "Consultants should advocate for safe service resources using data, pathway and governance routes. Writing 'advocate for more resources' without data, pathway or governance route is insufficient.",
      keyPoints: [
        "ADVOCACY MAY INCLUDE: incident reports showing harm/near misses, audit data, waiting-list data, ED boarding data, seclusion/restraint data, staff injury data, delayed discharge data, readmission rates, consumer/carer complaints, rural travel burden, business case, committee submission, partnership with NGOs/ACCHOs/GPs, workforce proposal.",
        "Incident data is the most powerful advocacy lever — a series of documented adverse outcomes or near-misses attributable to resource scarcity is the governance case for investment.",
        "Advocacy through the correct governance channel is more effective than individual complaint — consumer/carer committees, quality/safety committees, clinical governance forums and media submissions are the legitimate pathways.",
        "BUSINESS CASE THINKING: problem definition, patient-safety risk, current demand, gap between demand and capacity, impact on outcomes, incidents/complaints/near misses, options considered, preferred option, cost estimate, workforce implications, risks of not acting, implementation plan, evaluation metrics, consumer/carer input, equity/cultural/rural impact.",
      ],
      commonTrap:
        "Writing 'advocate for more resources' without data, pathway or governance route.",
    },
    {
      id: "s23",
      order: 23,
      title: "Business Case Thinking",
      colorTag: "green",
      explanation:
        "A business case is not just 'we need more money.' Asking for resources without linking the request to safety, demand, outcomes and evaluation will not succeed.",
      keyPoints: [
        "INCLUDE: problem definition, patient-safety risk, current demand, gap between demand and capacity, impact on outcomes, incidents/complaints/near misses, options considered, preferred option, cost estimate, workforce implications, risks of not acting, implementation plan, evaluation metrics, consumer/carer input, equity/cultural/rural impact.",
        "RURAL ECT ACCESS EXAMPLE: current waiting time, number of patients transferred, costs of transfer, adverse outcomes from delay, theatre/anaesthetic constraints, staffing model, patient/carer burden, proposed session expansion, audit metrics.",
        "Executives respond to safety risk and cost of inaction — framing the business case as 'current practice is creating preventable harm and costing more in transfers/readmissions than the proposed solution' is more persuasive than 'we need more resources.'",
        "Evaluation metrics in the business case create accountability — they allow the service to demonstrate that the investment produced the expected improvement.",
      ],
      commonTrap:
        "Asking for resources without linking the request to safety, demand, outcomes and evaluation.",
    },
    {
      id: "s24",
      order: 24,
      title: "Not Every Resource Request Should Be Granted",
      colorTag: "amber",
      explanation:
        "Ethical allocation also means saying no when a request is not justified. Equating patient/family request with ethical entitlement to a scarce resource ignores distributive justice.",
      keyPoints: [
        "REASONS TO DECLINE: not clinically indicated, poor evidence for indication, disproportionate burden compared with likely benefit, safer alternative available, patient preference unsupported by clinical need, request would unfairly deny urgent care to others, conflict of interest, service not commissioned for that care, risk cannot be safely managed in that setting.",
        "THE 'NO' MUST BE: reasoned, documented, communicated respectfully, paired with an alternative plan, open to review/second opinion where appropriate.",
        "A reasoned 'no' with an alternative plan is ethically superior to a reluctant 'yes' that uses resources needed by higher-priority patients.",
        "Second opinion should be offered when a request is declined — this is both a fairness and a transparency requirement, and protects the consultant from accusations of arbitrary denial.",
      ],
      commonTrap:
        "Equating patient/family request with ethical entitlement to a scarce resource.",
    },
    {
      id: "s25",
      order: 25,
      title: "Resource Allocation and Compulsory Care",
      colorTag: "purple",
      explanation:
        "Do not use the Mental Health Act to solve resource problems. Using legal compulsion to compensate for missing social or community resources is a misuse of MHA powers.",
      keyPoints: [
        "EXAMPLES OF MISUSE: keeping someone involuntary because housing is unavailable, using CTO because community team has no capacity for voluntary outreach, delaying discharge because no NGO package exists despite no MHA criteria, detaining someone because family refuses to take them home.",
        "If compulsory care is needed, it must meet legal criteria. Resource limitations may affect the discharge plan, but they cannot create legal criteria by themselves.",
        "Keeping a patient involuntary beyond the period when MHA criteria are met — because there is no housing — exposes the patient to unlawful deprivation of liberty and the clinician to legal liability.",
        "The correct response to missing community resources is escalation and advocacy for those resources — not extending compulsory care to compensate for a service gap.",
      ],
      commonTrap:
        "Using legal compulsion to compensate for missing social or community resources.",
    },
    {
      id: "s26",
      order: 26,
      title: "Resource Allocation and Restrictive Practice",
      colorTag: "red",
      explanation:
        "Do not use restrictive practice because of resource scarcity. Using seclusion, restraint or forced medication as resource management is both clinically and ethically wrong.",
      keyPoints: [
        "UNSAFE: seclusion because ward short-staffed, restraint because no quiet room, forced medication because staff cannot provide de-escalation, denying leave because no escort staff without reviewing risk, confining patient because no step-down bed.",
        "Restrictive practice requires its own last-resort safety criteria, not staffing convenience.",
        "Seclusion to compensate for low staffing is a governance breach, a rights violation and a safety risk — it does not protect the patient, it harms them.",
        "The correct response to insufficient staffing for required de-escalation is to escalate the staffing gap — not to substitute restraint for the de-escalation that cannot be provided.",
      ],
      commonTrap:
        "Using seclusion, restraint or forced medication as resource management.",
    },
    {
      id: "s27",
      order: 27,
      title: "Resource Allocation and Cultural Equity",
      colorTag: "green",
      explanation:
        "Scarcity can worsen inequity. Providing the same pathway to everyone even when that pathway is inaccessible to some groups is inequitable, not fair.",
      keyPoints: [
        "WATCH FOR: rural Aboriginal community lacking youth service, interpreter unavailable after hours, refugee patient excluded due to 'complexity,' culturally unsafe hospital pathway causing disengagement, ACCHO not funded for mental health partnership, telehealth offered where no privacy or internet exists.",
        "USEFUL PHRASE: 'Equity is not sameness. It may require additional or different resources to achieve fair access and safe outcomes.'",
        "Fair allocation may require more support, not identical support, for groups facing higher barriers.",
        "A telehealth appointment offered to a patient in a rural community with no private space, no reliable internet and no digital literacy is not equitable access — it is the appearance of access without the reality.",
      ],
      commonTrap:
        "Providing the same pathway to everyone even when that pathway is inaccessible to some groups.",
    },
    {
      id: "s28",
      order: 28,
      title: "Resource Allocation and Private/Public Interface",
      colorTag: "purple",
      explanation:
        "Private/public status should not influence clinical prioritisation. Allowing private/public status to influence clinical prioritisation unfairly is discrimination.",
      keyPoints: [
        "POTENTIAL ISSUES: public patient asked to pay privately for urgent care, private patient gets faster ECT, private bed considered because public bed unavailable, consultant has private interest in service, pressure to transfer 'easy' patients privately, mixed incentives.",
        "PRINCIPLES: declare conflicts, use clinical criteria, do not disadvantage public patients unfairly, do not pressure patients financially, document rationale, follow local policy, maintain standard public-care advocacy.",
        "A conflict of interest exists when the consultant has a financial interest in a private facility to which they are considering transferring a patient — this must be declared and managed.",
        "Using a private bed for a public patient when no public bed is available may be appropriate as a last resort — but it should be clinically driven, documented and not used to benefit the consultant financially.",
      ],
      commonTrap:
        "Allowing private/public status to influence clinical prioritisation unfairly.",
    },
    {
      id: "s29",
      order: 29,
      title: "Long Waiting Lists",
      colorTag: "amber",
      explanation:
        "Waiting lists are resource-allocation systems requiring active governance. Treating waitlisting as a safe endpoint rather than an active risk-management process is a patient-safety failure.",
      keyPoints: [
        "GOVERNANCE REQUIRES: triage criteria, risk review intervals, escalation for deterioration, communication with referrers, crisis pathway, documentation, active management not passive list, audit of waiting times and harm, equity monitoring, consumer/carer information.",
        "UNSAFE: 'Patient is on waitlist.'",
        "BETTER: 'Patient is on waitlist with risk category, review date, crisis plan, GP advice, escalation criteria and named responsible service.'",
        "A patient on a waiting list is still the service's clinical responsibility — if their risk escalates while waiting, the service must have a mechanism to detect and respond to that escalation.",
      ],
      commonTrap:
        "Treating waitlisting as a safe endpoint rather than an active risk-management process.",
    },
    {
      id: "s30",
      order: 30,
      title: "MEQ Examples and Traps",
      colorTag: "blue",
      explanation:
        "Eight worked examples covering the most common resource allocation MEQ stems. In each, the core error is ignoring the patient who does not receive the scarce resource.",
      keyPoints: [
        "EXAMPLE 1 — BED SCARCITY: ED has suicidal patient needing admission; ward full; bed manager asks to discharge a voluntary patient. TRAP: discharge voluntary patient because voluntary equals safer. BETTER: review all patients clinically, discharge only if safe, escalate bed shortage, create interim ED safety plan, document criteria and avoid legal-status-based discrimination.",
        "EXAMPLE 2 — ONE ADOLESCENT BED: two adolescents need the only bed: one after overdose with family support, one psychotic and refusing food. TRAP: admit first referred. BETTER: prioritise by acuity, risk, medical compromise, family capacity, alternatives and likely benefit; document and provide safe plan for the other.",
        "EXAMPLE 3 — EXPENSIVE TREATMENT: family demands ketamine/rTMS/ECT access for treatment-resistant depression. TRAP: say yes because family pressure or no because expensive. BETTER: assess evidence, indication, urgency, alternatives, capacity/consent, funding criteria, second opinion and interim standard care.",
        "EXAMPLE 4 — LONG-STAY PATIENT: executive pressures discharge of long-stay psychosis patient to free bed. TRAP: discharge to unsafe housing. BETTER: review current need, functional/housing barriers, step-down options, guardianship/NDIS, executive escalation and safe transition plan.",
        "EXAMPLE 5 — RURAL RESOURCE: no local psychiatrist/ECT/adolescent bed. TRAP: accept lower standard because rural. BETTER: use telehealth/regional pathway/transfer/escalation, document gap, safety-plan locally and advocate for recurring resource solution.",
        "EXAMPLE 6 — ECT THEATRE ACCESS: two consultants compete for ECT slot. TRAP: give slot to senior consultant's patient. BETTER: prioritise by transparent clinical urgency — catatonia, life-threatening depression, suicide/nutrition risk, likely benefit and delay risk.",
        "EXAMPLE 7 — STAFFING ALLOCATION: nurse-in-charge says staffing too low for observations. TRAP: reduce observations to match staffing. BETTER: observations are based on clinical risk — escalate staffing gap, request additional staff/security, prioritise tasks and document unresolved risk.",
        "EXAMPLE 8 — SERVICE DIRECTOR ASKS FOR RATIONING: director asks consultants to reduce admissions due to budget. TRAP: quietly raise threshold without telling anyone. BETTER: develop explicit criteria, governance oversight, risk monitoring, consumer communication, escalation and advocacy.",
      ],
      commonTrap:
        "Ignoring the patient who does not receive the scarce resource.",
    },
    {
      id: "s31",
      order: 31,
      title: "Command-Word Discipline",
      colorTag: "amber",
      explanation:
        "Resource allocation answers require fairness with explanation of how the decision is made. Listing fairness without explaining how the decision is made loses marks.",
      keyPoints: [
        "LIST: distributive justice, clinical prioritisation, transparent criteria, avoid discrimination, document decision, escalate resource gap, provide safest alternative, advocate for resources.",
        "OUTLINE (list and justify): 'Use transparent criteria — because scarce resources must be allocated fairly and consistently, not by pressure or clinician preference. Escalate the shortage — because individual consultants should not silently absorb system-level risk. Document alternatives — because the record must show why the chosen plan was the safest available option.'",
        "DESCRIBE (list and explain): 'Prioritise by clinical urgency and likely benefit — because first-come-first-served allocation may be unfair when another patient has more immediate preventable harm. Communicate constraints honestly — because patients and families need to know what is clinically preferred, what is unavailable, and what interim safety plan is being used.'",
        "DISCUSS (name the tension): 'There is tension between duty to the individual patient and justice for other patients needing the same scarce resource. A defensible position is to use transparent clinical criteria, avoid discrimination, provide the safest alternative, document reasoning and escalate the resource deficit.'",
      ],
      commonTrap:
        "Listing fairness without explaining how the decision is made.",
    },
    {
      id: "s32",
      order: 32,
      title: "Examiner Phrases",
      colorTag: "green",
      explanation:
        "Use these phrases to signal consultant-level resource allocation reasoning. Missing the language of justice, transparency, escalation and documentation signals registrar-level thinking.",
      keyPoints: [
        "'Resource scarcity does not remove duty of care.'",
        "'I would not silently lower the standard of care.'",
        "'The decision should be based on transparent clinical criteria, not who shouts loudest.'",
        "'Fairness is not always first come, first served.'",
        "'Legal status alone is not a fair bed-allocation criterion.'",
        "'I would provide the safest available alternative while escalating the unavailable ideal resource.'",
        "'Rationing should be explicit, ethically justified, clinically governed and monitored.'",
        "'Equity is not sameness; some groups need additional support to achieve fair access.'",
        "'The absence of a bed does not justify unsafe discharge.'",
        "'I would document the resource constraint, alternatives considered, escalation and review plan.'",
      ],
      commonTrap:
        "Missing the language of justice, transparency, escalation and documentation.",
    },
    {
      id: "s33",
      order: 33,
      title: "Consultant-Level Summary",
      colorTag: "green",
      explanation:
        "This paragraph is reusable in MEQ stems involving bed scarcity, one adolescent bed, ECT theatre access, rural resource shortage, staffing allocation, long-stay patients and service-level rationing.",
      keyPoints: [
        "ETHICAL FRAMING: 'I would treat resource allocation as an ethical and clinical governance decision. Resource scarcity does not remove duty of care, and I would not silently lower the standard of care.'",
        "ALLOCATION: 'I would assess clinical urgency, risk, vulnerability, likely benefit and safe alternatives, then allocate the scarce resource using transparent, non-discriminatory criteria.'",
        "INTERIM CARE AND ESCALATION: 'For patients who do not receive the preferred resource, I would provide the safest available interim plan, communicate honestly, document the reasoning and review frequently. If the shortage creates unsafe care, I would escalate through bed management, clinical director or executive pathways and advocate using data, incidents, waiting times and consumer impact.'",
        "FULL PARAGRAPH: 'I would treat resource allocation as an ethical and clinical governance decision. Resource scarcity does not remove duty of care, and I would not silently lower the standard of care. I would assess clinical urgency, risk, vulnerability, likely benefit and safe alternatives, then allocate the scarce resource using transparent, non-discriminatory criteria. For patients who do not receive the preferred resource, I would provide the safest available interim plan, communicate honestly, document the reasoning and review frequently. If the shortage creates unsafe care, I would escalate through bed management, clinical director or executive pathways and advocate using data, incidents, waiting times and consumer impact. The aim is fair, accountable allocation while maintaining individual care and system-level advocacy.'",
      ],
      meqApplication:
        "This paragraph should be reusable in MEQ stems involving bed scarcity, one adolescent bed, ECT theatre access, rural resource shortage, staffing allocation, long-stay patients and service-level rationing.",
    },
  ],
};

export const ETHICS_OVERRIDING_PRINCIPLES: Note = {
  id: "ethics_overriding_principles",
  title: "Ethics in Psychiatry: Overriding Principles and MEQ Framework",
  category: "Ethics in Psychiatry / Professionalism / Legal-Ethical Reasoning / Governance",
  description:
    "A comprehensive ethics framework for RANZCP MEQ answers, covering autonomy, beneficence, non-maleficence, justice, dignity, capacity, confidentiality, duty to protect, least restrictive care, cultural safety, child safety, resource fairness, professional boundaries, open disclosure and governance accountability.",
  sections: [
    {
      id: "s01",
      order: 1,
      title: "Core Principle",
      colorTag: "blue",
      explanation:
        "Ethics in psychiatry is not abstract philosophy — it is how the consultant makes defensible decisions when duties conflict. Writing values words without a practical consultant decision is the core mark-losing error.",
      keyPoints: [
        "A GOOD ETHICS ANSWER: names the ethical tension, identifies affected parties, applies clinical facts, assesses capacity and consent, considers law and policy, balances autonomy and safety, uses least restrictive care, communicates transparently, documents reasoning, reviews the decision.",
        "MEQ PHRASE: 'There is tension between X and Y. A defensible consultant position is Z because...'",
        "ETHICAL TENSION SENTENCE BUILDER: 'There is tension between [autonomy/confidentiality/beneficence/justice] and [safety/duty to protect/child safety/resource fairness]. A defensible consultant position is [specific action] because [specific clinical/legal/ethical rationale].'",
        "ETHICS IS NOT VALUES TALK ONLY: an ethics answer must include clinical facts, capacity, law/policy, risk, proportionality, communication, documentation and review — not just a list of principles.",
      ],
      commonTrap:
        "Writing values words without a practical consultant decision.",
    },
    {
      id: "s02",
      order: 2,
      title: "The Four Principles",
      colorTag: "purple",
      explanation:
        "The four principles must be applied together, not in isolation. Applying one principle in isolation and ignoring the others is the classic mark-losing approach.",
      keyPoints: [
        "AUTONOMY: respect the patient's right to make informed decisions, including risky or unwise decisions if they have capacity.",
        "BENEFICENCE: act to benefit the patient and promote recovery, relief of suffering and wellbeing.",
        "NON-MALEFICENCE: avoid preventable harm, including harm from treatment, coercion, stigma, neglect or unsafe discharge.",
        "JUSTICE: treat people fairly and allocate resources equitably, without discrimination or stigma.",
        "FOUR PRINCIPLES CORE CARD: autonomy — beneficence — non-maleficence — justice. In any MEQ ethics stem, name all four and explain how they apply to this specific situation.",
      ],
      commonTrap:
        "Applying one principle in isolation and ignoring the others.",
    },
    {
      id: "s03",
      order: 3,
      title: "Overriding Principles in Psychiatry",
      colorTag: "red",
      explanation:
        "Some duties may override ordinary autonomy or confidentiality — but only under strict, proportionate, lawful and time-limited conditions. Thinking 'safety overrides autonomy' means any restrictive action is justified is incorrect.",
      keyPoints: [
        "EXAMPLES: serious and imminent risk to patient or others, child protection, duty to warn/protect identifiable person, emergency treatment when patient lacks capacity, compulsory treatment under Mental Health Act criteria, court order or lawful requirement, public safety, lack of capacity with serious preventable harm, protection from exploitation/abuse/coercion.",
        "OVERRIDING MUST BE: lawful, necessary, proportionate, least restrictive, time-limited, documented, reviewed.",
        "OVERRIDING DUTIES CARD: serious and imminent risk, child protection, duty to warn/protect, emergency treatment, incapacity with serious preventable harm, court/legal requirement, public safety, least restrictive lawful compulsory treatment.",
        "Overriding is not a blank cheque — each action must be proportionate to the specific risk, and must be the least restrictive means of managing that risk.",
      ],
      commonTrap:
        "Thinking 'safety overrides autonomy' means any restrictive action is justified.",
    },
    {
      id: "s04",
      order: 4,
      title: "Autonomy",
      colorTag: "blue",
      explanation:
        "Autonomy means respecting the person's values, preferences, choices, dignity and right to self-determination — including risky or unwise choices when capacity is present. Equating autonomy with doing whatever the patient requests, even when capacity, risk or legality are not established, misapplies the principle.",
      keyPoints: [
        "IN PSYCHIATRY, AUTONOMY APPEARS IN: refusing medication, refusing admission, refusing family involvement, refusing ECT, choosing discharge, advance directives, gender identity, cultural/spiritual care preferences, end-of-life decisions, information sharing preferences.",
        "AUTONOMY REQUIRES: capacity, adequate information, voluntariness, no coercion, understanding of consequences.",
        "An unwise decision is not necessarily an incapacitous decision — a patient who understands the consequences of refusing medication and chooses to refuse has exercised autonomy, even if clinicians disagree with the choice.",
        "Advance directives express autonomy across time — a patient who has capacity now can direct their future care, including specifying treatments they do not want if they lose capacity.",
      ],
      commonTrap:
        "Equating autonomy with doing whatever the patient requests, even when capacity, risk or legality are not established.",
    },
    {
      id: "s05",
      order: 5,
      title: "Beneficence",
      colorTag: "green",
      explanation:
        "Beneficence means acting for the patient's benefit — and must be balanced with autonomy. Using 'best interests' to override a capacitous refusal misapplies beneficence.",
      keyPoints: [
        "EXAMPLES: treating psychosis, preventing suicide, providing ECT for life-threatening depression, engaging family/supports with consent, advocating for resources, offering trauma-informed care, treating physical health, supporting recovery and autonomy.",
        "Beneficence must be balanced with autonomy. A treatment that benefits the patient clinically may still require consent or legal authority.",
        "'Best interests' is the correct framework for patients who lack capacity — it is not a justification for overriding capacitous refusal.",
        "Beneficence includes long-term benefit — sometimes the most beneficial action is to respect an informed refusal and maintain therapeutic trust, rather than forcing a treatment that the patient will disengage from.",
      ],
      commonTrap:
        "Using 'best interests' to override a capacitous refusal.",
    },
    {
      id: "s06",
      order: 6,
      title: "Non-Maleficence",
      colorTag: "red",
      explanation:
        "Non-maleficence means avoiding preventable harm — including harm from the service or treatment, not only from illness. Only thinking of harm from illness and not harm from the service or treatment misses half the principle.",
      keyPoints: [
        "HARMS IN PSYCHIATRY INCLUDE: suicide or violence, medication adverse effects, coercion and trauma, seclusion/restraint injury, stigma, privacy breach, cultural harm, family/child harm, unsafe discharge, over-treatment, under-treatment, diagnostic error, staff injury.",
        "Harm from unnecessary seclusion, coercive medication or premature discharge is as real as harm from untreated psychosis — the principle of non-maleficence applies to both.",
        "Stigma and diagnostic labelling are harms — applying a diagnosis that is inaccurate, premature or used to justify resource denial causes real and sometimes irreversible harm to the patient's life and treatment.",
        "Privacy breach is harm — disclosure of psychiatric history to an employer, insurer or family member without consent can have serious consequences for the patient's livelihood, relationships and safety.",
      ],
      commonTrap:
        "Only thinking of harm from illness and not harm from the service or treatment.",
    },
    {
      id: "s07",
      order: 7,
      title: "Justice",
      colorTag: "purple",
      explanation:
        "Justice means fairness — which is not always sameness. Treating identical access as fair access when some patients face greater barriers misapplies justice.",
      keyPoints: [
        "IN PSYCHIATRY, JUSTICE APPEARS IN: bed allocation, access to ECT, rural service gaps, interpreter access, cultural equity, disability access, avoiding discrimination by diagnosis, public/private interface, waiting lists, staff workload and safety, compulsory treatment safeguards.",
        "Justice is not always sameness — equity may require extra support to overcome barriers.",
        "Compulsory treatment safeguards (tribunal review, advocacy, rights information) are a justice mechanism — they ensure that deprivation of liberty occurs through a fair and reviewable process.",
        "Justice applies to staff as well as patients — fair workload, safe rostering, protection from occupational violence and equitable access to supervision are justice issues.",
      ],
      commonTrap:
        "Treating identical access as fair access when some patients face greater barriers.",
    },
    {
      id: "s08",
      order: 8,
      title: "Dignity and Respect",
      colorTag: "green",
      explanation:
        "Dignity is central in psychiatry because patients may be frightened, disinhibited, psychotic, intoxicated, traumatised or dependent on services. Focusing only on risk containment and missing humiliation, stigma or cultural harm neglects this principle.",
      keyPoints: [
        "PRESERVE DIGNITY BY: private conversations, respectful language, correct name/pronouns, cultural safety, trauma-informed examination, least restrictive care, avoiding humiliation, explaining decisions, involving supports with consent, protecting privacy.",
        "Dignity under compulsory treatment is both a legal and ethical requirement — even when a patient is being detained or treated without consent, they retain the right to respectful, trauma-informed care.",
        "Using correct name and pronouns for transgender and gender-diverse patients is a basic dignity requirement, not an optional courtesy.",
        "Explaining each clinical step to a frightened, psychotic or intoxicated patient — even when they appear not to understand — is a dignity practice that also reduces escalation risk.",
      ],
      commonTrap:
        "Focusing only on risk containment and missing humiliation, stigma or cultural harm.",
    },
    {
      id: "s09",
      order: 9,
      title: "Capacity as an Ethics Gateway",
      colorTag: "amber",
      explanation:
        "Many ethical decisions depend on capacity assessment. Declaring incapacity because the patient disagrees with clinicians conflates disagreement with impaired capacity.",
      keyPoints: [
        "CAPACITY IS: decision-specific, time-specific, functional, supported before substituted.",
        "ASK WHETHER THE PATIENT CAN: understand, retain, use or weigh, communicate.",
        "If capacity is present, respect refusal even if unwise. If capacity is impaired and harm is serious, consider substitute decision-making, emergency treatment or Mental Health Act pathway.",
        "MEQ ETHICS TRAP CARD: never write only 'respect autonomy' or only 'ensure safety.' Good answers balance autonomy, safety, law, culture, family, system and documentation.",
      ],
      commonTrap:
        "Declaring incapacity because the patient disagrees with clinicians.",
    },
    {
      id: "s10",
      order: 10,
      title: "Informed Consent",
      colorTag: "purple",
      explanation:
        "Valid informed consent requires capacity, information, voluntariness and documentation. Documenting 'consented' without explaining what was discussed or whether consent was voluntary is inadequate.",
      keyPoints: [
        "VALID INFORMED CONSENT REQUIRES: capacity, information about nature and purpose, benefits, risks, alternatives, no-treatment option, consequences of refusal, voluntariness, opportunity for questions, documentation.",
        "IN PSYCHIATRY, INFORMED CONSENT MAY BE COMPLEX DUE TO: psychosis, mania, depression, cognitive impairment, language barriers, family pressure, trauma, MHA status, ECT safeguards.",
        "Consent is a process, not a signature — a single information session is insufficient if the patient was acutely unwell, frightened or under pressure at the time.",
        "ECT consent requires specific safeguards — capacity assessment, voluntary or tribunal authorisation, ongoing consent at each treatment, right to withdraw.",
      ],
      commonTrap:
        "Documenting 'consented' without explaining what was discussed or whether consent was voluntary.",
    },
    {
      id: "s11",
      order: 11,
      title: "Refusal of Treatment",
      colorTag: "amber",
      explanation:
        "A capacitous patient can refuse treatment even if the refusal is risky or distressing. Treating refusal as proof of poor insight or incapacity conflates clinical disagreement with legal incapacity.",
      keyPoints: [
        "RESPONSE: assess decision-specific capacity, optimise communication, explore reasons, explain consequences, offer alternatives, address fear/culture/trauma, involve supports with consent, assess risk, respect capacitous refusal, use lawful pathway if incapacity and serious harm, document.",
        "Exploring the reasons for refusal often resolves it — fear of side effects, past trauma with treatment, cultural beliefs and misinformation are all addressable reasons that may change with time and good communication.",
        "A patient who refuses lithium despite knowing the relapse risk has made an informed, capacitous decision — the appropriate response is to respect it, explore it, offer alternatives and maintain engagement.",
        "The legal pathway (MHA, guardianship) applies only when capacity is impaired and legal criteria are met — it is not a tool for overriding unwise capacitous decisions.",
      ],
      commonTrap:
        "Treating refusal as proof of poor insight or incapacity.",
    },
    {
      id: "s12",
      order: 12,
      title: "Least Restrictive Care",
      colorTag: "green",
      explanation:
        "Least restrictive care means using the minimum restriction necessary to manage risk. Using restrictive care because it is easier, faster or preferred by staff/family misapplies this principle.",
      keyPoints: [
        "LEAST RESTRICTIVE CARE APPLIES TO: admission versus community care, voluntary versus involuntary care, observation levels, seclusion/restraint, forced medication, CTOs, information sharing, discharge restrictions, child/family involvement.",
        "Least restrictive does not mean no care — a patient who is acutely suicidal and lacks capacity may need compulsory admission, which is the least restrictive option that adequately manages the risk.",
        "Restrictive care that is faster and easier for staff (routine seclusion, sedation for agitation) is not least restrictive — it is a staff preference masquerading as clinical practice.",
        "CTO is a restrictive care measure — its use should be proportionate to relapse risk and least restrictive alternatives should be documented before deciding a CTO is necessary.",
      ],
      commonTrap:
        "Using restrictive care because it is easier, faster or preferred by staff/family.",
    },
    {
      id: "s13",
      order: 13,
      title: "Confidentiality",
      colorTag: "purple",
      explanation:
        "Confidentiality supports trust and engagement. Either sharing everything with family or refusing to receive collateral are both errors.",
      keyPoints: [
        "START WITH CONSENT: who can we speak to, what can we share, what should not be shared, can we receive collateral?",
        "CONFIDENTIALITY IS NOT ABSOLUTE. Limited disclosure may be justified for: serious risk, child protection, duty to warn/protect, legal requirement, safe clinical handover, emergency care.",
        "Receiving collateral from family does not require the patient's consent — but sharing clinical information with family usually does.",
        "Sharing minimum necessary information means disclosing only the specific details needed to address the specific risk — not a general handover of the clinical history.",
      ],
      commonTrap:
        "Either sharing everything with family or refusing to receive collateral.",
    },
    {
      id: "s14",
      order: 14,
      title: "Duty to Warn and Protect",
      colorTag: "red",
      explanation:
        "Duty to protect may arise when there is a specific, identifiable threat. Maintaining confidentiality despite serious identifiable threat is a patient-safety and governance failure.",
      keyPoints: [
        "DUTY TO PROTECT MAY ARISE WHEN THERE IS: specific threat, identifiable victim, access to means, history of violence, psychosis or intoxication, domestic violence/stalking, imminent discharge/leave increasing opportunity.",
        "ACTIONS MAY INCLUDE: reassess risk, restrict leave/discharge, notify senior staff, use MHA if criteria met, notify police, warn victim if necessary, share minimum necessary information, document reasoning.",
        "The Tarasoff principle is contextualised in Australian law — there is no universal statutory duty to warn, but there may be a duty to protect through reasonable steps, which may include notification.",
        "Disclosure to warn a victim should be the minimum necessary — identity of the patient, nature of the threat, actions being taken — not a complete clinical handover.",
      ],
      commonTrap:
        "Maintaining confidentiality despite serious identifiable threat.",
    },
    {
      id: "s15",
      order: 15,
      title: "Child Safety",
      colorTag: "red",
      explanation:
        "Child safety can override ordinary confidentiality and adult preferences. Treating child safety as a family issue rather than a safeguarding duty is a mandatory reporting failure.",
      keyPoints: [
        "CONSIDER CHILD PROTECTION WHEN: child exposed to violence/psychosis/intoxication/unsafe driving, child incorporated into delusions, parent's relapse affects caregiving, family violence, neglect risk, unsafe school pickup, adolescent self-harm/abuse/exploitation, other parent cannot protect.",
        "Mandatory reporting obligations vary by jurisdiction and professional role — know your state/territory obligations and the threshold for reporting in your setting.",
        "Reporting to child protection does not end clinical involvement — the treating team continues to engage with the parent and the child as part of the safety plan.",
        "An assessment that a parent's mental illness poses risk to a child must be based on specific clinical findings, not diagnostic stereotyping — having a mental illness does not automatically make someone an unsafe parent.",
      ],
      commonTrap:
        "Treating child safety as a family issue rather than a safeguarding duty.",
    },
    {
      id: "s16",
      order: 16,
      title: "Family and Carer Ethics",
      colorTag: "teal",
      explanation:
        "Family/carers play multiple roles and must be engaged ethically. Either excluding family completely or allowing family wishes to override patient autonomy are both errors.",
      keyPoints: [
        "FAMILY/CARERS MAY BE: supportive, source of collateral, essential for discharge, distressed, coercive, source of risk, potential victims, culturally important, legally authorised substitute decision-makers.",
        "ETHICAL APPROACH: seek patient consent, receive collateral, share minimum necessary information, balance autonomy/safety/family involvement, avoid family pressure replacing patient decision-making, document.",
        "Distressed family members need support and information — but their distress does not give them authority to override a capacitous patient's decisions.",
        "A legally appointed substitute decision-maker (guardian, enduring power of attorney for health) has authority only within the scope of their appointment — and must act according to the patient's values and best interests, not their own preferences.",
      ],
      commonTrap:
        "Either excluding family completely or allowing family wishes to override patient autonomy.",
    },
    {
      id: "s17",
      order: 17,
      title: "Cultural Safety",
      colorTag: "green",
      explanation:
        "Cultural safety is ethical practice. Writing 'respect culture' but not changing communication, pathway, governance or power misses the governance dimension.",
      keyPoints: [
        "CULTURAL SAFETY INCLUDES: interpreter access, Aboriginal liaison/health worker involvement, ACCHO partnership, Elders/family/community involvement with consent, avoiding racism, avoiding pathologising cultural experiences, understanding refugee trauma and mistrust, monitoring inequity, responding to racism complaints.",
        "Cultural safety is judged by the patient, family and community — not by the service's intention.",
        "Racism is a harm — experiencing racism in a healthcare setting causes psychological injury, reduces trust and increases the risk of future disengagement from services.",
        "Cultural safety and clinical safety are not in competition — they reinforce each other. A culturally unsafe service produces poorer clinical outcomes.",
      ],
      commonTrap:
        "Writing 'respect culture' but not changing communication, pathway, governance or power.",
    },
    {
      id: "s18",
      order: 18,
      title: "Professional Boundaries",
      colorTag: "purple",
      explanation:
        "Boundaries protect patients, clinicians and therapeutic integrity. Normalising boundary crossing because the clinician intended kindness misses the harm it causes.",
      keyPoints: [
        "BOUNDARY RISKS: gifts, social media contact, dual relationships, sexual/romantic conduct, treating friends/family, over-disclosure, favouritism, forensic/treating role conflict, staff-patient relationships, dependency.",
        "Boundary crossings exist on a spectrum from minor (accepting a small gift) to major (sexual contact) — all require reflection, and most require documentation or supervision discussion.",
        "Social media contact with patients blurs the professional boundary even when the contact appears benign — patients may access personal information about the clinician and the asymmetry of the therapeutic relationship is compromised.",
        "'I intended kindness' is not a defence against boundary violations — the therapeutic harm of boundary crossing is caused by the crossing itself, not by intent.",
      ],
      commonTrap:
        "Normalising boundary crossing because the clinician intended kindness.",
    },
    {
      id: "s19",
      order: 19,
      title: "Dual Roles: Treating Versus Forensic",
      colorTag: "amber",
      explanation:
        "Psychiatrists may face conflict between treating role and assessment for court, employer, insurer, tribunal or risk report. Using therapeutic information for forensic purpose without role clarity is an ethical breach.",
      keyPoints: [
        "PRINCIPLES: clarify role, explain limits of confidentiality, obtain consent where required, avoid misleading patient, avoid treating/forensic role conflict where possible, document, use independent assessor if needed.",
        "A treating psychiatrist should generally not also provide a forensic or medico-legal report on the same patient — the roles create conflicting obligations (therapeutic alliance versus impartial assessment).",
        "When dual roles are unavoidable, the patient must be explicitly informed which hat the clinician is wearing at each interaction — and which confidentiality rules apply.",
        "Information obtained in a treating context (e.g. disclosures made under the expectation of therapeutic confidentiality) should not be used in a forensic report without the patient's informed consent.",
      ],
      commonTrap:
        "Using therapeutic information for forensic purpose without role clarity.",
    },
    {
      id: "s20",
      order: 20,
      title: "Truthfulness and Transparency",
      colorTag: "green",
      explanation:
        "Ethical psychiatry requires honesty with patients about diagnosis, risk, treatment limits and resource constraints. Avoiding honest discussion to preserve alliance creates later mistrust.",
      keyPoints: [
        "ETHICAL HONESTY INCLUDES: diagnosis and formulation, risks and uncertainty, treatment benefits and harms, resource constraints, adverse events, complaint process, open disclosure, limits of confidentiality, legal status.",
        "Honest uncertainty is more ethical than false reassurance — 'I am not sure yet but here is what I know and what I am doing' is a more defensible position than overconfident prognosis.",
        "Disclosing resource constraints ('the clinical ideal is X, but what is available is Y, and here is why and what I am doing about it') is both honest and clinically appropriate.",
        "Transparency about legal status — informing a patient that they are being detained, on a CTO or subject to a tribunal hearing — is a rights requirement, not optional.",
      ],
      commonTrap:
        "Avoiding honest discussion to preserve alliance, creating later mistrust.",
    },
    {
      id: "s21",
      order: 21,
      title: "Open Disclosure",
      colorTag: "green",
      explanation:
        "Open disclosure is required when care did not go to plan and harm occurred or may have occurred. Referring to complaints unit without acknowledging harm misses the open disclosure obligation.",
      keyPoints: [
        "OPEN DISCLOSURE INCLUDES: patient safety now, acknowledge event, apology or regret, known facts, unknowns, immediate care plan, support person, investigation, follow-up meeting, documentation, staff support, system learning.",
        "An apology in open disclosure does not constitute an admission of liability — in most Australian jurisdictions, apologies made as part of open disclosure are protected.",
        "Open disclosure is a conversation, not a letter — it requires a face-to-face meeting in a private setting, a support person for the patient/family, and time for questions.",
        "Staff support after open disclosure is part of the process — clinicians involved in an adverse event also experience distress, and the open disclosure process should include debrief and support for the team.",
      ],
      commonTrap:
        "Referring to complaints unit without acknowledging harm.",
    },
    {
      id: "s22",
      order: 22,
      title: "Restrictive Practice Ethics",
      colorTag: "red",
      explanation:
        "Seclusion, restraint and forced medication create ethical tension between safety and coercion minimisation. Using restrictive practice as punishment, convenience or substitute for staffing is an ethical and governance violation.",
      keyPoints: [
        "PRINCIPLES: last resort, least restrictive, legal authority, proportionality, dignity, trauma-informed approach, monitoring, medical review, documentation, debrief, governance review.",
        "Seclusion and restraint should never be punitive — punishing a patient for behaviour driven by psychosis, mania or delirium through restrictive practice is both unethical and unlawful.",
        "Trauma-informed restrictive practice acknowledges that restraint and seclusion are inherently traumatising and may re-traumatise patients with prior trauma histories — every episode requires debrief and review.",
        "Governance review of every seclusion/restraint episode is not bureaucratic overhead — it is the mechanism by which the service learns whether it is reducing restrictive practice and whether individual episodes met the last-resort threshold.",
      ],
      commonTrap:
        "Using restrictive practice as punishment, convenience or substitute for staffing.",
    },
    {
      id: "s23",
      order: 23,
      title: "Resource Justice",
      colorTag: "purple",
      explanation:
        "Resource scarcity requires distributive justice. Silently lowering standard of care because resources are scarce is an ethical failure.",
      keyPoints: [
        "USE: transparent criteria, clinical urgency, likely benefit, vulnerability, lack of alternatives, avoid discrimination, document, escalate, advocate.",
        "Resource justice connects to cultural justice — scarcity disproportionately affects already disadvantaged groups, and this inequity must be named, monitored and addressed.",
        "Distributive justice in resources is not only about individual allocation decisions — it is also about advocacy for equitable service design, funding and workforce.",
        "Silent acceptance of resource scarcity normalises unsafe care and prevents governance from identifying and responding to the problem.",
      ],
      commonTrap:
        "Silently lowering standard of care because resources are scarce.",
    },
    {
      id: "s24",
      order: 24,
      title: "Staff Safety Ethics",
      colorTag: "red",
      explanation:
        "Staff safety is an ethical issue — not separate from patient care ethics. Treating assault, stalking or burnout as normal psychiatric work is an ethical and governance failure.",
      keyPoints: [
        "ETHICAL BALANCE: continue patient care, protect staff from foreseeable harm, avoid punitive response, do not normalise occupational violence, use safer model of care, report and review WHS risk, support staff after harm.",
        "Staff safety is a patient safety issue — a traumatised, threatened or exhausted workforce cannot deliver safe, therapeutic care.",
        "The 'safer model of care' — clinic instead of home visit, two-person visit, security support, telehealth — protects staff without abandoning the patient.",
        "Burnout and moral injury are foreseeable harms of poorly resourced, high-acuity psychiatric work — they are organisational and governance failures, not individual resilience failures.",
      ],
      commonTrap:
        "Treating assault, stalking or burnout as normal psychiatric work.",
    },
    {
      id: "s25",
      order: 25,
      title: "Trainee Supervision Ethics",
      colorTag: "purple",
      explanation:
        "Supervision involves three simultaneous duties — to the patient, to the trainee and to the system. Protecting trainee by hiding unsafe practice, or protecting patient by abandoning trainee, are both ethical failures.",
      keyPoints: [
        "SUPERVISION INVOLVES: duty to patient, duty to trainee, duty to system.",
        "ETHICAL APPROACH: ensure patient safety, support trainee, provide feedback, match supervision to competence/risk, escalate serious concerns, avoid scapegoating, document supervision.",
        "A consultant who allows an unsafe trainee to continue practising without escalation is failing both the trainee (who needs intervention and support) and the patient (who deserves competent care).",
        "Supervision documentation protects the trainee (evidence of guidance received) and the consultant (evidence that appropriate oversight was provided) — it is a governance requirement, not optional.",
      ],
      commonTrap:
        "Protecting trainee by hiding unsafe practice, or protecting patient by abandoning trainee.",
    },
    {
      id: "s26",
      order: 26,
      title: "Ethics and Law",
      colorTag: "purple",
      explanation:
        "Ethics and law overlap but are not identical. Assuming legal compliance is enough for ethical practice ignores the higher standard that ethics demands.",
      keyPoints: [
        "LAW SETS MINIMUM REQUIREMENTS: MHA, capacity law, guardianship, privacy, child protection, duty of care, court orders.",
        "ETHICS ASKS: is this respectful, is it fair, is it least restrictive, is it transparent, is it culturally safe, is it clinically proportionate, is it accountable?",
        "Lawful care is necessary but not sufficient — involuntary admission that meets legal criteria but is conducted without dignity, without cultural safety and without least restrictive principle is legally defensible but ethically inadequate.",
        "Ethics provides the standard above the legal floor — it is what distinguishes care that is merely permitted from care that is good.",
      ],
      commonTrap:
        "Assuming legal compliance is enough for ethical practice.",
    },
    {
      id: "s27",
      order: 27,
      title: "Ethical Decision-Making Framework",
      colorTag: "blue",
      explanation:
        "Use this structured framework in any ethics MEQ. Jumping to a decision without naming the competing duties misses the reasoning the examiner is looking for.",
      keyPoints: [
        "STEP 1-6: (1) define the ethical problem, (2) identify stakeholders, (3) clarify clinical facts, (4) assess capacity and consent, (5) identify risks, (6) identify applicable law/policy.",
        "STEP 7-12: (7) identify ethical principles in tension, (8) consider options, (9) choose least restrictive proportionate option, (10) communicate transparently, (11) document reasoning, (12) review outcome.",
        "The framework is a thinking tool, not a rigid script — in an MEQ, you demonstrate that you have worked through each step, even if you do not label them explicitly.",
        "Naming the competing principles ('there is tension between autonomy and safety because...') demonstrates the ethical reasoning the examiner is looking for — not just the decision reached.",
      ],
      commonTrap:
        "Jumping to a decision without naming the competing duties.",
    },
    {
      id: "s28",
      order: 28,
      title: "Overriding Autonomy",
      colorTag: "red",
      explanation:
        "Autonomy may be overridden only under strict conditions. Overriding autonomy because the patient is making a decision clinicians dislike misapplies the override.",
      keyPoints: [
        "EXAMPLES WHERE AUTONOMY MAY BE OVERRIDDEN: serious risk with MHA criteria, emergency treatment when lacking capacity, child protection, public safety, duty to protect, court order, incapacity with serious preventable harm.",
        "SAFEGUARDS: legal authority, least restrictive option, proportionality, time limitation, review, documentation, appeal/rights information.",
        "Overriding autonomy without legal authority is unlawful — 'clinical necessity' is not a legal authority for compulsory treatment in Australian jurisdictions.",
        "Rights information must be provided when autonomy is overridden — the patient must know what authority is being used, what their rights are, how to appeal and who can advocate for them.",
      ],
      commonTrap:
        "Overriding autonomy because the patient is making a decision clinicians dislike.",
    },
    {
      id: "s29",
      order: 29,
      title: "Overriding Confidentiality",
      colorTag: "red",
      explanation:
        "Confidentiality may be overridden in specific circumstances but only with proportionate disclosure. Sharing more than necessary once an exception applies is a privacy breach.",
      keyPoints: [
        "CONFIDENTIALITY MAY BE OVERRIDDEN FOR: serious and imminent risk, duty to warn/protect, child protection, legal requirement, safe clinical handover, emergency care.",
        "SAFEGUARDS: seek consent first if possible, share minimum necessary information, disclose to person/agency best able to reduce risk, document rationale, inform patient where safe/appropriate.",
        "Minimum necessary information means disclosing what is needed to address the specific risk — for a threat of violence, this is the nature of the threat and the identity of the person making it, not the complete psychiatric history.",
        "Where confidentiality is breached without consent, the patient should be informed after the fact (where safe) — transparency is a governance and trust requirement even in emergency situations.",
      ],
      commonTrap:
        "Sharing more than necessary once an exception applies.",
    },
    {
      id: "s30",
      order: 30,
      title: "Overriding Family Wishes",
      colorTag: "amber",
      explanation:
        "Family wishes may be overridden in specific circumstances. Letting distressed family become the decision-maker when patient has capacity is a violation of autonomy.",
      keyPoints: [
        "FAMILY WISHES MAY BE OVERRIDDEN WHEN: patient has capacity and chooses differently, family request is unsafe or coercive, family demand breaches confidentiality, family refuse necessary care without authority, child safety is at risk, substitute decision-maker is not acting according to patient's values/best interests.",
        "Distress is not authority — a distressed family member who demands information, demands a particular treatment or demands that the patient be detained does not have legal authority to override a capacitous patient's wishes.",
        "A substitute decision-maker who appears to be acting in their own interests rather than the patient's interests should be challenged — through advocacy, guardianship tribunal or clinical governance.",
        "Family conflict over treatment decisions may require mediation, ethics consultation or legal clarification — it should not be resolved by clinicians taking sides.",
      ],
      commonTrap:
        "Letting distressed family become the decision-maker when patient has capacity.",
    },
    {
      id: "s31",
      order: 31,
      title: "Overriding Patient Preference for Discharge",
      colorTag: "red",
      explanation:
        "A patient's wish to leave may be overridden only if legal criteria are met. Keeping the patient because family or staff are anxious, without legal criteria, is unlawful detention.",
      keyPoints: [
        "ASSESS: capacity, mental illness, risk, less restrictive options, supports, legal criteria, MHA pathway, documentation, rights information.",
        "A voluntary patient who wants to leave must be allowed to leave unless legal criteria for involuntary detention are met — staff anxiety or family request are not legal criteria.",
        "Before initiating MHA criteria for a patient wishing to leave, consider whether there are less restrictive alternatives — safety plan with family, crisis team involvement, GP follow-up — that manage the risk without deprivation of liberty.",
        "If MHA criteria are met, the process must include rights information, advocacy access, documented clinical reasoning and clear review timeframes.",
      ],
      commonTrap:
        "Keeping the patient because family or staff are anxious, without legal criteria.",
    },
    {
      id: "s32",
      order: 32,
      title: "MEQ Ethics Examples",
      colorTag: "blue",
      explanation:
        "Six worked examples covering the most common ethics MEQ stems. In each, failing to state the ethical tension explicitly is the core mark-losing error.",
      keyPoints: [
        "EXAMPLE 1 — CONFIDENTIALITY vs DUTY TO PROTECT: patient threatens ex-partner and refuses disclosure. ETHICAL ISSUE: confidentiality versus serious identifiable risk. DEFENSIBLE POSITION: seek consent if safe, but disclose minimum necessary to police/victim if serious foreseeable harm.",
        "EXAMPLE 2 — AUTONOMY vs BENEFICENCE: capacitous patient refuses lithium despite relapse risk. ETHICAL ISSUE: autonomy versus relapse prevention. DEFENSIBLE POSITION: respect refusal, explore reasons, offer alternatives, relapse plan and follow-up.",
        "EXAMPLE 3 — FAMILY WISHES vs PATIENT AUTONOMY: family demands ECT but patient refuses and has capacity. ETHICAL ISSUE: family distress versus patient autonomy. DEFENSIBLE POSITION: respect capacitous refusal, address family distress and revisit if capacity changes.",
        "EXAMPLE 4 — LEAST RESTRICTIVE CARE vs SAFETY: psychotic patient refuses admission and threatens self. ETHICAL ISSUE: autonomy/least restrictive care versus serious harm. DEFENSIBLE POSITION: consider involuntary admission only if criteria met and no safe less restrictive option.",
        "EXAMPLE 5 — JUSTICE vs INDIVIDUAL BENEFIT: one adolescent bed available. ETHICAL ISSUE: duty to individual versus fair allocation. DEFENSIBLE POSITION: transparent clinical prioritisation and safe alternative plan for other patient.",
        "EXAMPLE 6 — CULTURAL SAFETY vs URGENT RISK: refugee patient refuses interpreter and appears medically unwell. ETHICAL ISSUE: autonomy/cultural trust versus urgent safety. DEFENSIBLE POSITION: urgent medical triage with best available communication, then full assessment with acceptable interpreter.",
      ],
      commonTrap:
        "Not stating the ethical tension explicitly.",
    },
    {
      id: "s33",
      order: 33,
      title: "Command-Word Discipline",
      colorTag: "amber",
      explanation:
        "Ethics answers require case-specific justification, not generic ethical words. Using ethical words without case-specific justification loses marks even when the principles are correct.",
      keyPoints: [
        "LIST: autonomy, beneficence, non-maleficence, justice, capacity, least restrictive care, duty to protect, documentation.",
        "OUTLINE (list and justify): 'Assess capacity — because autonomy depends on ability to make this specific decision. Use least restrictive care — because safety interventions should not exceed what is necessary. Document reasoning — because ethical decisions must be accountable.'",
        "DESCRIBE (list and explain): 'Share minimum necessary information — because confidentiality exceptions permit proportionate safety disclosure, not unrestricted release.'",
        "DISCUSS (name the tension): 'There is tension between X and Y. A defensible consultant position is Z because...'",
      ],
      commonTrap:
        "Using ethical words without case-specific justification.",
    },
    {
      id: "s34",
      order: 34,
      title: "Examiner Phrases",
      colorTag: "green",
      explanation:
        "Use these phrases to signal consultant-level ethics reasoning. Writing generic 'ethical principles' without taking a consultant position signals registrar-level thinking.",
      keyPoints: [
        "'There is tension between autonomy and safety.'",
        "'A defensible consultant position is...'",
        "'Capacity is decision-specific and time-specific.'",
        "'An unwise decision is not necessarily an incapacitous decision.'",
        "'Confidentiality is not absolute, but disclosure must be minimum necessary.'",
        "'Least restrictive care does not mean no care.'",
        "'Family involvement is important but does not replace patient autonomy.'",
        "'Resource scarcity does not remove duty of care.'",
        "'Cultural safety is judged by the patient, family and community.'",
        "'Open disclosure is a transparency and governance duty.'",
        "'Lawfulness is necessary but not always sufficient for ethical care.'",
        "'I would document the reasoning, not only the decision.'",
      ],
      commonTrap:
        "Writing generic 'ethical principles' without taking a consultant position.",
    },
    {
      id: "s35",
      order: 35,
      title: "Common Ethics Traps",
      colorTag: "amber",
      explanation:
        "Use this as a pre-submit checklist for any ethics MEQ stem. Answering 'it depends' without deciding what you would do is the most common mark-losing approach.",
      keyPoints: [
        "Respecting autonomy without assessing capacity.",
        "Ensuring safety without considering least restrictive care.",
        "Sharing with family without consent or safety basis.",
        "Maintaining confidentiality despite serious identifiable threat.",
        "Using MHA for housing/resource problems.",
        "Letting family override capacitous patient.",
        "Ignoring cultural safety.",
        "Ignoring staff safety.",
        "Ignoring justice/resource fairness.",
        "Failing to name the ethical tension.",
        "Failing to document reasoning.",
        "Treating legal compliance as the whole ethical answer.",
        "Avoiding taking a defensible position.",
      ],
      meqApplication:
        "Use this as a pre-submit checklist for any ethics MEQ stem — any item relevant to the stem that is absent from your answer is a lost mark.",
    },
    {
      id: "s36",
      order: 36,
      title: "Consultant-Level Summary",
      colorTag: "green",
      explanation:
        "This paragraph is reusable in almost any RANZCP ethics/governance MEQ stem — it is the template for a defensible consultant ethics answer.",
      keyPoints: [
        "CLINICAL AND CAPACITY: 'I would approach this as an ethical decision requiring clinical facts, capacity assessment, legal awareness and transparent reasoning.'",
        "PRINCIPLES AND POSITION: 'I would identify the competing duties — usually autonomy, beneficence, non-maleficence, justice, confidentiality, safety, cultural respect or resource fairness — and take a defensible consultant position.'",
        "OVERRIDES AND DOCUMENTATION: 'If autonomy or confidentiality must be overridden, I would ensure the action is lawful, necessary, proportionate, least restrictive, time-limited and documented.'",
        "FULL PARAGRAPH: 'I would approach this as an ethical decision requiring clinical facts, capacity assessment, legal awareness and transparent reasoning. I would identify the competing duties — usually autonomy, beneficence, non-maleficence, justice, confidentiality, safety, cultural respect or resource fairness — and take a defensible consultant position. If autonomy or confidentiality must be overridden, I would ensure the action is lawful, necessary, proportionate, least restrictive, time-limited and documented. I would communicate honestly with the patient, family and team, provide support and alternatives where possible, and review the decision through appropriate clinical or governance pathways. The aim is not simply to choose safety or autonomy, but to make a fair, accountable and clinically safe decision.'",
      ],
      meqApplication:
        "This paragraph should be reusable in almost any RANZCP ethics/governance MEQ stem.",
    },
  ],
};

export const ALL_NOTES: Note[] = [DISCHARGE_PLAN, CONFLICT_MANAGEMENT, COMPLAINT_PROCESS, INCIDENT_MANAGEMENT, CLINICAL_AUDIT, OPEN_DISCLOSURE, RESTRICTIVE_PRACTICES, RESTRICTIVE_PRACTICES_MEQ, CONFIDENTIALITY, CAPACITY_CONSENT, SUPERVISION_TRAINING, WHS_STAFF_SAFETY, CULTURAL_SAFETY, RESEARCH_GOVERNANCE, RESOURCE_ALLOCATION_ETHICS, ETHICS_OVERRIDING_PRINCIPLES];
