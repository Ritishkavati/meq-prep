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

export const ALL_NOTES: Note[] = [DISCHARGE_PLAN, CONFLICT_MANAGEMENT];
