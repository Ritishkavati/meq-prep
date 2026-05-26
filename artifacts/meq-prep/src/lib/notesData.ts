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

export const ALL_NOTES: Note[] = [DISCHARGE_PLAN, CONFLICT_MANAGEMENT, COMPLAINT_PROCESS, INCIDENT_MANAGEMENT];
