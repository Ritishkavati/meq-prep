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

export const ALL_NOTES: Note[] = [DISCHARGE_PLAN, CONFLICT_MANAGEMENT, COMPLAINT_PROCESS, INCIDENT_MANAGEMENT, CLINICAL_AUDIT, OPEN_DISCLOSURE, RESTRICTIVE_PRACTICES, RESTRICTIVE_PRACTICES_MEQ, CONFIDENTIALITY, CAPACITY_CONSENT];
