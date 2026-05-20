// @ts-nocheck
// ============================================================
// DailyMEQMode — The MEQ Prep Brain
// Built from real RANZCP exam papers, post-examiner reports,
// and two-sitting performance analysis (RANZCP ID 21708)
// ============================================================

import { useState, useEffect, useRef } from "react";

// ============================================================
// SECTION 1: COMMAND WORD DEFINITIONS
// ============================================================

const COMMAND_WORDS = {
  list: {
    label: "List",
    short: "LIST",
    instruction: "Name items only. No explanation required or rewarded. Concise enumeration.",
    gate: false,
    color: "blue",
    bg: "bg-blue-50 border-blue-200",
    text: "text-blue-900",
  },
  outline_justify: {
    label: "Outline (List and Justify)",
    short: "OUTLINE",
    instruction: "Each point MUST include 'because [case-specific reason]'. List without justification = ZERO MARKS.",
    gate: true,
    color: "amber",
    bg: "bg-amber-50 border-amber-200",
    text: "text-amber-900",
  },
  describe_explain: {
    label: "Describe (List and Explain)",
    short: "DESCRIBE",
    instruction: "Each point MUST explain the mechanism, sequence, or clinical significance. List without explanation = ZERO MARKS.",
    gate: true,
    color: "amber",
    bg: "bg-amber-50 border-amber-200",
    text: "text-amber-900",
  },
  discuss: {
    label: "Discuss",
    short: "DISCUSS",
    instruction: "Present balanced considerations, advantages/disadvantages, competing clinical factors.",
    gate: false,
    color: "purple",
    bg: "bg-purple-50 border-purple-200",
    text: "text-purple-900",
  },
  debate: {
    label: "Discuss (List and Debate)",
    short: "DEBATE",
    instruction: "MUST argue both sides explicitly with named tension. One-sided answer = ZERO MARKS.",
    gate: true,
    color: "red",
    bg: "bg-red-50 border-red-200",
    text: "text-red-900",
  },
};

// ============================================================
// SECTION 2: QUESTION BANK
// ============================================================

const QUESTION_BANK = [

  // ── NOVEMBER 2025 PILOT ─────────────────────────────────

  {
    id: "NOV25_1_1",
    examSource: "November 2025 Pilot",
    case: "Adil, 32",
    topic: "Consultation Liaison",
    subtopic: "Treatment refusal · Capacity · Cultural psychiatry · Dual diagnosis",
    difficulty: "core",
    fellowshipCompetencies: ["Medical Expert", "Communicator", "Health Advocate", "Professional"],
    vignette: `You are a junior consultant psychiatrist working on a Consultation Liaison team in a metropolitan hospital. Adil is a 32-year-old single Afghan refugee with a diagnosis of schizophrenia and intravenous heroin misuse. He is under a community mental health team and is prescribed depot antipsychotic medication. Adil initially agreed to be admitted to the medical ward for suspected infective endocarditis. However, he has since refused to have any tests done, and has tried to leave the medical ward. You have been asked to assess Adil as his medical team is concerned about his treatment refusal.`,
    stemAddition: null,
    question: `Outline (list and justify) the factors that might be contributing to Adil's treatment refusal.\n\nPlease note: a list without any justification will not be awarded any marks.`,
    commandWord: "outline_justify",
    marks: 10,
    timeMinutes: 10,
    stemSignals: [
      "Afghan refugee — cultural context, trauma, non-western explanatory models of illness",
      "IV heroin misuse — active withdrawal drives agitation and apparent refusal",
      "Schizophrenia on depot — possible psychosis, community team involved",
      "Metropolitan hospital — interpreter services should be available but may not be used",
      "Infective endocarditis — serious prognosis, potential implications for residency status",
      "Has tried to leave — active resistance, not passive non-engagement",
    ],
    domains: [
      {
        name: "Patient factors",
        marks: 4,
        keyPoints: [
          "Language barriers — interpreter absent or inadequate",
          "Cultural factors and non-western explanatory models of illness",
          "Health literacy — understanding of diagnosis and investigation",
          "Insight — how informed is he about his medical condition?",
          "Fears about residency status implications of serious illness",
          "Trauma-related triggers — hospitalisation, mistrust of state authorities",
          "External commitments or financial concerns with being in hospital",
        ],
      },
      {
        name: "Illness factors",
        marks: 3,
        keyPoints: [
          "Psychosis — inadequately treated or substance-induced",
          "Delirium — from infection, intoxication, or withdrawal",
          "Opiate withdrawal — agitation, restlessness, confusion",
          "Depression — hopelessness about prospects for treatment",
          "Physical illness — pain, malnourishment impairing engagement",
          "Cognitive impairment secondary to schizophrenia",
        ],
      },
      {
        name: "Systems factors",
        marks: 3,
        keyPoints: [
          "Paternalistic medical team approach",
          "Lack of culturally safe care — cultural incompetence",
          "Social isolation and restricted visiting policies",
          "Stigma from staff toward mental illness and substance use",
          "Negative countertransference in the treating team",
          "Refugee stigma",
        ],
      },
    ],
    zeroMarkTraps: [],
    postExaminerNote: "August 2024 report: candidates missed systems factors and countertransference. 'Cultural sensitivity' as a generic statement scored zero — justification must name specific cultural factors and how they change clinical action.",
  },

  {
    id: "NOV25_1_4",
    examSource: "November 2025 Pilot",
    case: "Adil, 32",
    topic: "Consultation Liaison",
    subtopic: "Discharge planning · Opioid replacement · Harm reduction · Safety planning",
    difficulty: "core",
    fellowshipCompetencies: ["Medical Expert", "Collaborator", "Health Advocate"],
    vignette: `You are a junior consultant psychiatrist on a Consultation Liaison team. Adil is a 32-year-old Afghan refugee with schizophrenia and IV heroin misuse. He has been treated for moderate-to-severe depression and infective endocarditis.`,
    stemAddition: `Three weeks later, Adil is ready to be discharged. You conduct a discharge assessment before he leaves the medical ward. He has been referred to a community opioid replacement programme and currently receives 60mg of methadone daily.`,
    question: `Outline (list and justify) the key points you would cover in your discharge planning meeting with Adil.\n\nPlease note: a list without any justification will not be awarded any marks.`,
    commandWord: "outline_justify",
    marks: 7,
    timeMinutes: 7,
    stemSignals: [
      "60mg methadone daily — accidental overdose risk if he uses heroin on top is catastrophic",
      "Community opioid replacement programme — specific coordination and handover required",
      "Afghan refugee — interpreter, cultural community supports, migration issues",
      "Depression treated — recognition of relapse, medication continuation",
      "Infective endocarditis — antibiotic completion, cardiac follow-up",
    ],
    domains: [
      {
        name: "Safety plan and harm reduction",
        marks: 3,
        keyPoints: [
          "Safety plan with early warning signs of mental state deterioration",
          "Crisis and emergency contacts",
          "Explicit warning: risk of accidental overdose and death if heroin used on top of methadone",
          "Naloxone provision and instruction",
          "Needle exchange and safe injection practices",
        ],
      },
      {
        name: "GP and community linkage",
        marks: 1,
        keyPoints: [
          "GP referral for holistic physical and mental health follow-up",
          "Community mental health team, addictions service appointments facilitated",
        ],
      },
      {
        name: "Social and cultural supports",
        marks: 2,
        keyPoints: [
          "Stable accommodation — housing advocacy",
          "Migration issues and cultural community links",
          "Interpreter arrangements ongoing",
          "Financial support access",
          "Recovery paradigm — self-agency and empowerment",
        ],
      },
      {
        name: "Trauma-informed psychological therapy",
        marks: 1,
        keyPoints: [
          "Recommend trauma-informed psychological therapy in medium-to-long term",
        ],
      },
    ],
    zeroMarkTraps: [],
    postExaminerNote: "Methadone overdose risk from concurrent heroin use is the highest-yield point — must be stated explicitly and justified. Naloxone provision is frequently omitted.",
  },

  {
    id: "NOV25_2_3",
    examSource: "November 2025 Pilot",
    case: "Daniel, 12",
    topic: "Child and Adolescent Psychiatry",
    subtopic: "Childhood bipolar disorder · Diagnostic debate · Developmental trauma",
    difficulty: "discriminating",
    fellowshipCompetencies: ["Medical Expert", "Scholar", "Professional"],
    vignette: `You are a junior consultant psychiatrist in a regional mental health centre. Daniel is a 12-year-old Indigenous boy in out-of-home care, currently in his tenth group home. He was brought to ED by police after property damage and self-harm threats. He is prescribed olanzapine, methylphenidate, sertraline, sodium valproate, and melatonin. His carer states he has childhood bipolar disorder and asks for advice about managing his behaviour.`,
    stemAddition: null,
    question: `Discuss (list and debate) the issues you would consider in relation to Daniel's diagnosis of childhood bipolar disorder.\n\nPlease note: a list with no debate will not be awarded any marks.`,
    commandWord: "debate",
    marks: 7,
    timeMinutes: 7,
    stemSignals: [
      "12-year-old — developmental stage affects diagnostic validity",
      "Indigenous background — intergenerational trauma, attachment, cultural context",
      "Tenth group home — severe instability drives presentation",
      "Five medications — polypharmacy may produce or mask symptoms",
      "Carer states diagnosis — second-hand information, not clinical assessment",
      "Currently settled playing cards — does not suggest acute mania",
    ],
    domains: [
      {
        name: "Clinical presentation — both affirming and contradicting",
        marks: 4,
        keyPoints: [
          "Current presentation (settled) does not suggest mania — but does not preclude diagnosis",
          "Diagnosis requires: sustained elevation/irritability, discrete episodes, full biopsychosocial formulation",
          "Alternative explanations: trauma/attachment, disruptive behaviour syndromes, anxiety, ADHD, dissociation",
          "Treatment response ambiguous — multiple contributing factors",
          "Family history may support diagnosis",
          "Exercise caution given trauma, marginalisation, and systemic history",
          "Drugs and alcohol role in presentation",
        ],
      },
      {
        name: "Sources of information",
        marks: 2,
        keyPoints: [
          "Daniel's own account",
          "Multiple carer accounts including previous carers",
          "Child protection services records",
          "Clinical reports — who made original diagnosis and on what basis?",
          "Different sources see different aspects — acknowledge limitation",
        ],
      },
      {
        name: "Literature debate on childhood bipolar",
        marks: 1,
        keyPoints: [
          "Diagnostic validity contested in literature",
          "Risk of diagnostic inflation and labelling",
          "Does not necessarily predict adult bipolar disorder",
          "Neurodevelopmental impact of early labelling",
        ],
      },
    ],
    zeroMarkTraps: [
      "Confidently asserting the diagnosis is correct or incorrect without debating both sides — zero marks",
    ],
    postExaminerNote: "Most candidates failed this question because they took one definitive position. Intellectual honesty about diagnostic uncertainty — explicitly arguing both sides — is the only path to full marks.",
  },

  {
    id: "NOV25_3_4",
    examSource: "November 2025 Pilot",
    case: "Nicolette — FEP",
    topic: "Physical Health in Psychiatry",
    subtopic: "QTc management · Antipsychotic safety · Open disclosure",
    difficulty: "core",
    fellowshipCompetencies: ["Medical Expert", "Professional", "Communicator"],
    vignette: `You are a junior consultant psychiatrist in an acute psychiatric inpatient unit. You have been considering prescribing an antipsychotic for Nicolette, a young female science student who has presented with first-episode psychosis. A baseline ECG was unremarkable. Nicolette has been prescribed an antipsychotic.`,
    stemAddition: `A week later, her repeat ECG reveals a QTc interval of 480ms.`,
    question: `Outline (list and justify) your approach to this finding.\n\nPlease note: a list without any justification will not be awarded any marks.`,
    commandWord: "outline_justify",
    marks: 8,
    timeMinutes: 8,
    stemSignals: [
      "Female — QTc threshold for concern is 470ms (not 500ms)",
      "480ms — above female threshold of 470ms, below absolute 500ms threshold",
      "Science student — likely capable of understanding technical explanation",
      "First-episode psychosis — early treatment, medication adjustment still possible",
      "Baseline ECG was unremarkable — this is a new change attributable to medication",
    ],
    domains: [
      {
        name: "Open disclosure to patient",
        marks: 1,
        keyPoints: [
          "Advise Nicolette of ECG changes",
          "Open disclosure and ethical obligation",
          "Psychoeducation about QTc (may need repeating given FEP)",
          "Include her in the decision about next steps",
        ],
      },
      {
        name: "Repeat ECG",
        marks: 1,
        keyPoints: [
          "Repeat ECG to confirm — may be affected by time of day, food, alcohol, physical activity",
        ],
      },
      {
        name: "Past ECG review and comparison",
        marks: 1,
        keyPoints: [
          "Review baseline ECG and compare",
          "May not be a medication effect — could be pre-existing",
        ],
      },
      {
        name: "Medication review",
        marks: 1,
        keyPoints: [
          "Review all current medications for QTc-prolonging interactions",
          "Including SSRIs that may inhibit antipsychotic metabolism",
        ],
      },
      {
        name: "Risk-benefit assessment",
        marks: 1,
        keyPoints: [
          "Weigh clinical benefit of antipsychotic against cardiac risk",
          "Especially if no other comorbidity or risk factors",
        ],
      },
      {
        name: "Dose reduction or medication change",
        marks: 1,
        keyPoints: [
          "Consider dose reduction or switch to lower QTc-risk antipsychotic",
          "Female with QTc >470ms — clinical threshold for action",
          "No-risk agents: lurasidone, brexpiprazole, cariprazine",
        ],
      },
      {
        name: "Ongoing monitoring",
        marks: 1,
        keyPoints: [
          "Routine ECG monitoring established",
          "At minimum annually; when dose increases; when new medications added",
        ],
      },
      {
        name: "Adjunctive options",
        marks: 1,
        keyPoints: [
          "Beta blocker or magnesium supplementation — acknowledge this may be outside typical psychiatric scope",
        ],
      },
    ],
    zeroMarkTraps: [
      "Immediate cardiology referral — ZERO MARKS (QTc <500ms, no other high-risk factors, cardiology not indicated at this threshold)",
      "Electrolyte investigation listed as primary management — ZERO MARKS (too basic for consultant level, listed separately in criteria)",
    ],
    postExaminerNote: "Cardiology referral was the most common zero-mark trap. Knowledge of the 470ms female threshold (not 500ms) is the discriminating piece of pharmacology.",
  },

  {
    id: "NOV25_4_1",
    examSource: "November 2025 Pilot",
    case: "Julia, 52",
    topic: "Psychopharmacology",
    subtopic: "Antidepressant withdrawal vs relapse · FINISH · DESS · Tapering",
    difficulty: "core",
    fellowshipCompetencies: ["Medical Expert", "Scholar"],
    vignette: `You are a junior consultant psychiatrist at a community mental health clinic. Julia is a 52-year-old woman referred by her GP. She is complaining of tearfulness, inability to sleep, and excessive anxiety. She recently considered stopping her prescribed sertraline 100mg daily because of weight gain and fatigue. The GP recommended a gradual reduction over four weeks. Julia's current symptoms occurred in week 3 of a reducing regimen, after she was reduced to a daily dose of 25mg. Her GP has diagnosed her with relapse of anxiety disorder but would like a second opinion.`,
    stemAddition: null,
    question: `Outline (list and justify) key considerations to distinguish relapse of an anxiety disorder from antidepressant withdrawal.\n\nPlease note: a list without any justification will not be awarded any marks.`,
    commandWord: "outline_justify",
    marks: 6,
    timeMinutes: 6,
    stemSignals: [
      "Sertraline — intermediate discontinuation risk (higher than fluoxetine, similar to paroxetine)",
      "Week 3 at 25mg — timing matches the 1-2 rule for withdrawal onset",
      "Gradual reduction over 4 weeks — relatively fast taper increases withdrawal risk",
      "52-year-old — likely long treatment duration, higher physiological dependence",
      "Weight gain and fatigue were the reasons — patient-driven, motivated reduction",
    ],
    domains: [
      {
        name: "Patient and symptom factors",
        marks: 2,
        keyPoints: [
          "FINISH mnemonic: Flu-like symptoms, Insomnia, Nausea, Imbalance, Sensory disturbances, Hyperarousal",
          "Somatic and neurocognitive symptoms most discriminating — not emotional symptoms",
          "Psychological apprehension about stopping is expected and non-diagnostic",
          "Past history of anxiety relapses — provides baseline",
        ],
      },
      {
        name: "Medication and temporal factors",
        marks: 3,
        keyPoints: [
          "The 1-2 Rule: withdrawal within 1-2 days of reduction, peaks at 1-2 weeks, resolves within 1-2 months",
          "Relapse: slower onset, once established remains undiminished",
          "Sertraline and paroxetine: higher discontinuation risk despite selectivity",
          "Fluoxetine: long half-life = inherently lowest risk",
          "Rate of taper: faster withdrawal = more likely discontinuation symptoms",
          "DESS checklist (Discontinuation-Emergent Signs and Symptoms — Rosenbaum 1998)",
        ],
      },
      {
        name: "Co-occurrence",
        marks: 1,
        keyPoints: [
          "Withdrawal and relapse are not mutually exclusive — can co-occur",
          "Important to consider managing both possibilities",
        ],
      },
    ],
    zeroMarkTraps: [],
    postExaminerNote: "The 1-2 rule timing is the clinical pearl. Candidates who listed symptoms without explaining how each distinguishes withdrawal from relapse scored poorly.",
  },

  {
    id: "NOV25_5_1",
    examSource: "November 2025 Pilot",
    case: "Hypnotics Audit",
    topic: "Quality Improvement and Governance",
    subtopic: "Audit implementation · Stakeholder engagement · Change management",
    difficulty: "discriminating",
    fellowshipCompetencies: ["Manager", "Leader", "Collaborator", "Scholar"],
    vignette: `You are a junior consultant psychiatrist in the inpatient unit at a large teaching hospital in a metropolitan city. The report from a recent audit of prescribing patterns of hypnotics in the MH inpatient unit recommends that the mental health department develops a non-pharmacological strategy for improving night-time sleep in patients admitted to the inpatient unit.`,
    stemAddition: null,
    question: `Describe (list and explain) how you would plan a strategy to implement the audit's recommendation.\n\nPlease note: a list without any explanation will not be awarded any marks.`,
    commandWord: "describe_explain",
    marks: 9,
    timeMinutes: 9,
    stemSignals: [
      "Inpatient unit — night nursing observations create specific competing priority",
      "Teaching hospital — research culture, education opportunities, academic buy-in",
      "Metropolitan — diverse patient population, lived experience workforce available",
      "Audit of prescribing patterns — existing baseline data, re-audit cycle possible",
    ],
    domains: [
      {
        name: "Stakeholder engagement with named roles",
        marks: 5,
        keyPoints: [
          "Nursing staff: night observations, competing responsibilities, ward culture",
          "Consumer consultant/peer worker: patient-centred barriers, individual factors",
          "Pharmacist: medication timing, sleep-disrupting drugs, interactions",
          "Occupational therapist: sensory modulation, activity scheduling, group programs, CBT-i delivery",
          "Medical staff: clinical oversight",
          "Hospital executive: resourcing, funding, facility upgrades, policy authority",
          "Sleep psychologist: CBT-i evidence base, barriers to implementation",
        ],
      },
      {
        name: "Literature review and benchmarking",
        marks: 1,
        keyPoints: [
          "Evidence base for non-pharmacological sleep interventions",
          "Benchmarking against other units and best practice",
        ],
      },
      {
        name: "Re-audit cycle and KPIs",
        marks: 1,
        keyPoints: [
          "Baseline data collection on sleep patterns",
          "Regular audit cycle to assess impact of implementation",
          "Agreed KPIs, IT and data analysis",
        ],
      },
      {
        name: "Leadership and change management",
        marks: 2,
        keyPoints: [
          "Step-by-step implementation plan with documentation",
          "Staff training on new protocols",
          "Identifying and responding to barriers",
          "Policy and procedure development",
          "Overseeing staff education — face-to-face vs online modules",
        ],
      },
    ],
    zeroMarkTraps: [
      "Doctor-centric answers listing only what the psychiatrist will do — misses majority of marks",
    ],
    postExaminerNote: "August 2024 report explicitly criticised doctor-centric responses. Named stakeholders with their specific contributions are required. 'Involve MDT' as a generic statement scores zero.",
  },

  {
    id: "NOV25_5_2",
    examSource: "November 2025 Pilot",
    case: "Hypnotics Audit",
    topic: "Quality Improvement and Governance",
    subtopic: "Barriers to implementation · Staff resistance · Change management",
    difficulty: "core",
    fellowshipCompetencies: ["Manager", "Leader", "Collaborator"],
    vignette: `You are a junior consultant psychiatrist in the inpatient unit at a large teaching hospital. You are implementing a non-pharmacological strategy for improving night-time sleep. Six months after commencing the strategy, you notice that staff are still frequently prescribing hypnotics.`,
    stemAddition: null,
    question: `Outline (list and justify) the barriers that might be contributing to continued hypnotic prescribing despite the new strategy.\n\nPlease note: a list without any justification will not be awarded any marks.`,
    commandWord: "outline_justify",
    marks: 7,
    timeMinutes: 7,
    stemSignals: [
      "Six months in — early implementation period, habits persist",
      "Staff still prescribing — prescriber behaviour, not patient preference",
      "Teaching hospital — competing educational demands on junior staff",
      "Inpatient unit — acuity, time pressure, overnight staffing",
    ],
    domains: [
      {
        name: "Prescriber-level barriers",
        marks: 3,
        keyPoints: [
          "Lack of awareness of new guidelines or training",
          "Habit — prescribing hypnotics is faster than behavioural alternatives",
          "Countertransference — difficulty tolerating patient distress at night",
          "Junior doctors not adequately supervised or trained in alternatives",
          "Fear of adverse events from sleep deprivation",
        ],
      },
      {
        name: "Organisational and systems barriers",
        marks: 2,
        keyPoints: [
          "Insufficient staffing to deliver non-pharmacological interventions overnight",
          "Physical environment not conducive to sleep — noise, light, observations",
          "Leadership not reinforcing the new strategy",
          "No audit feedback loop to clinicians",
        ],
      },
      {
        name: "Patient-level barriers",
        marks: 2,
        keyPoints: [
          "Patient demand and expectation for medication",
          "Underlying pain, anxiety or psychiatric symptoms driving insomnia",
          "Prior hypnotic dependence",
          "Difficulty engaging with behavioural strategies when acutely unwell",
        ],
      },
    ],
    zeroMarkTraps: [],
    postExaminerNote: "Candidates who only listed patient barriers scored poorly. The question asks about continued prescribing — the barrier is primarily in the prescriber and system, not the patient.",
  },

  {
    id: "NOV25_6_2",
    examSource: "November 2025 Pilot",
    case: "CBT Supervision",
    topic: "Psychotherapy",
    subtopic: "CBT homework non-completion · Supervision · Therapeutic relationship",
    difficulty: "discriminating",
    fellowshipCompetencies: ["Medical Expert", "Scholar", "Collaborator"],
    vignette: `You are a junior consultant psychiatrist supervising a psychiatric registrar who is delivering CBT for a 45-year-old man named John with severe depression. The registrar reports that John has not completed any homework tasks in the past four sessions despite agreeing to do them at the time. The registrar is frustrated and uncertain how to proceed.`,
    stemAddition: null,
    question: `Outline (list and justify) the factors you would explore with the registrar to understand John's homework non-completion.\n\nPlease note: a list without any justification will not be awarded any marks.`,
    commandWord: "outline_justify",
    marks: 11,
    timeMinutes: 11,
    stemSignals: [
      "Supervision context — this is a registrar learning question, not a patient management question",
      "Severe depression — anhedonia, anergia, hopelessness all impair homework completion",
      "Four sessions — not a one-off; persistent pattern requires formulation",
      "Agreed at the time — compliance in session does not predict out-of-session behaviour",
      "Registrar is frustrated — countertransference is clinically significant",
    ],
    domains: [
      {
        name: "Patient factors",
        marks: 4,
        keyPoints: [
          "Severity of depression — anhedonia, cognitive slowing, hopelessness, anergia",
          "Shame or embarrassment about non-completion",
          "Ambivalence about therapy or recovery",
          "Practical barriers — work, family, housing instability",
          "Cultural mismatch with CBT model",
          "Misunderstanding of homework task despite session agreement",
        ],
      },
      {
        name: "Therapist and technical factors",
        marks: 4,
        keyPoints: [
          "Homework not collaboratively designed — imposed rather than co-created",
          "Tasks not calibrated to patient's current capacity (too complex for severe depression)",
          "Insufficient time in session explaining rationale for homework",
          "Registrar not adequately reviewing homework at session start",
          "Registrar avoiding addressing non-completion directly — therapeutic avoidance",
          "Registrar's countertransference: over-responsible, anxious about lack of progress",
        ],
      },
      {
        name: "Therapeutic relationship factors",
        marks: 2,
        keyPoints: [
          "Alliance quality — does John trust and feel understood by the registrar?",
          "Homework non-completion may be communication about the relationship",
          "Cultural or values mismatch between patient and therapist approach",
        ],
      },
      {
        name: "Supervision system factors",
        marks: 1,
        keyPoints: [
          "Is the registrar receiving adequate and regular supervision?",
          "Is the registrar's CBT training sufficient for this level of complexity?",
          "Service pressure affecting session frequency or quality",
        ],
      },
    ],
    zeroMarkTraps: [],
    postExaminerNote: "September 2025: average 1/11. This is a supervision question, not a patient management question. The registrar's factors (countertransference, technique, training) matter as much as John's. Almost all candidates wrote only about what John was doing wrong.",
  },

  // ── MARCH 2025 ───────────────────────────────────────────

  {
    id: "MAR25_2_3",
    examSource: "March 2025",
    case: "Judy, 51",
    topic: "Ethics and Governance",
    subtopic: "Biomedical ethics in tension · ED governance · Staff stigma · Complaint",
    difficulty: "discriminating",
    fellowshipCompetencies: ["Professional", "Leader", "Health Advocate", "Manager"],
    vignette: `You are a junior consultant psychiatrist. Judy is a 51-year-old woman with schizoaffective disorder and methamphetamine dependence presenting to the Emergency Department in an agitated and threatening state. The ED nursing staff are frustrated and have made comments that Judy is "not a real psychiatric patient" and have suggested she should be removed from the department.`,
    stemAddition: null,
    question: `Outline (list and justify) the ethical and governance issues raised by this situation and your approach to managing them.\n\nPlease note: a list without any justification will not be awarded any marks.`,
    commandWord: "outline_justify",
    marks: 10,
    timeMinutes: 10,
    stemSignals: [
      "'Not a real psychiatric patient' — stigma, potential discrimination",
      "Staff suggest removal — potential abandonment of duty of care",
      "Methamphetamine dependence — dual diagnosis, most stigmatised presentation",
      "ED setting — medical governance structure, lines of responsibility",
      "Schizoaffective disorder — valid psychiatric diagnosis, not excluded by substance use",
    ],
    domains: [
      {
        name: "Ethical principles applied in tension — not listed",
        marks: 4,
        keyPoints: [
          "Autonomy: Judy's right to receive care without discrimination",
          "Beneficence: obligation to provide treatment — not overridden by staff discomfort",
          "Non-maleficence: removal from ED could cause serious harm",
          "Justice: equal treatment regardless of diagnosis or substance use",
          "CRITICAL: name the tension explicitly between these principles in this case",
          "Do NOT conflate duty of care (legal concept) with beneficence (ethical principle)",
        ],
      },
      {
        name: "Immediate governance actions",
        marks: 3,
        keyPoints: [
          "Escalate immediately to ED Director or Nurse Unit Manager",
          "Document staff conduct and your response in the medical record",
          "Ensure Judy's clinical management continues regardless of staff attitude",
          "Your role: contain the system response, maintain patient safety",
          "Do not allow clinical decisions to be driven by staff frustration",
        ],
      },
      {
        name: "Staff management",
        marks: 2,
        keyPoints: [
          "Address stigmatising language directly but not punitively",
          "Education about dual diagnosis presentation in ED",
          "Formal incident report if behaviour constitutes discrimination",
          "Debrief with staff about their distress — countertransference is real",
        ],
      },
      {
        name: "Structural governance",
        marks: 1,
        keyPoints: [
          "Adverse event reporting",
          "Quality improvement loop — systemic response, not individual blame",
          "Policy review for dual diagnosis ED presentations",
        ],
      },
    ],
    zeroMarkTraps: [
      "Listing the four principles without applying them to this specific case — ZERO MARKS",
      "Writing 'beneficence means doing good' without explaining how it applies to Judy — ZERO MARKS",
    ],
    postExaminerNote: "March 2025 average 2/10. Cohort confused beneficence with duty of care. Did not apply principles in tension. 'I would apply the four principles of biomedical ethics' without any specific application scored zero.",
  },

  {
    id: "MAR25_3_3",
    examSource: "March 2025",
    case: "Sandy, 17",
    topic: "Ethics and Governance",
    subtopic: "Complaint management · Governance process · Discrimination · Safeguarding",
    difficulty: "discriminating",
    fellowshipCompetencies: ["Professional", "Manager", "Leader", "Health Advocate"],
    vignette: `You are a junior consultant psychiatrist. Sandy is a 17-year-old transgender young person admitted to an inpatient psychiatric unit. Sandy's parents have lodged a formal complaint against a nurse, alleging the nurse made stigmatising comments about Sandy's gender identity. Sandy has told you they feel unsafe on the unit because of this.`,
    stemAddition: null,
    question: `Outline (list and justify) the steps you would take in addressing this complaint.\n\nPlease note: a list without any justification will not be awarded any marks.`,
    commandWord: "outline_justify",
    marks: 8,
    timeMinutes: 8,
    stemSignals: [
      "17-year-old — minor, specific obligations for parental involvement",
      "Transgender young person — specific vulnerability, heightened risk from stigma",
      "Formal complaint already lodged — governance process already activated",
      "Sandy feels unsafe — immediate clinical priority alongside process management",
      "Nurse is a colleague — dual obligation: fair process AND patient safety",
    ],
    domains: [
      {
        name: "Immediate patient safety",
        marks: 2,
        keyPoints: [
          "Sandy's immediate safety is the first and overriding priority",
          "Assess impact on mental state and self-harm risk",
          "Update safety plan",
          "May need environmental change — room or supervisor allocation",
        ],
      },
      {
        name: "Formal complaint process",
        marks: 3,
        keyPoints: [
          "Acknowledge complaint promptly — in writing",
          "Notify Nurse Unit Manager and Patient Liaison Officer",
          "Do NOT personally investigate — refer to appropriate governance structure",
          "Separate the investigation from Sandy's clinical care",
          "Written response within required timeframe",
          "Maintain confidentiality of all parties during investigation",
        ],
      },
      {
        name: "Interim staff management",
        marks: 2,
        keyPoints: [
          "Interim rostering change if Sandy's safety requires it",
          "Do not pre-judge nurse before investigation completes",
          "Document incident independently as clinical lead",
          "Support for nurse undergoing investigation — fair process",
        ],
      },
      {
        name: "Systemic governance response",
        marks: 1,
        keyPoints: [
          "This may indicate cultural competency gap across the unit",
          "Education about gender diversity and stigmatising language",
          "Quality improvement loop after investigation",
        ],
      },
    ],
    zeroMarkTraps: [],
    postExaminerNote: "March 2025 average 1/8. Candidates tried to personally investigate — procedurally incorrect. Sandy's safety and fair process for the nurse must BOTH be addressed. Most answered only one side.",
  },

  {
    id: "MAR25_1_3",
    examSource: "March 2025",
    case: "Danica, 34",
    topic: "Communication",
    subtopic: "Delivering bad news · Capacity to receive information · SPIKES · Perinatal psychiatry",
    difficulty: "core",
    fellowshipCompetencies: ["Communicator", "Medical Expert", "Professional"],
    vignette: `You are a junior consultant psychiatrist. Danica is a 34-year-old woman with bipolar disorder who is 16 weeks pregnant and has been well maintained on sodium valproate 1000mg daily throughout her pregnancy. Recent investigations have revealed fetal anomalies consistent with valproate embryopathy. Danica does not yet know the investigation results.`,
    stemAddition: null,
    question: `Describe (list and explain) how you would approach delivering this news to Danica.\n\nPlease note: a list without any explanation will not be awarded any marks.`,
    commandWord: "describe_explain",
    marks: 8,
    timeMinutes: 8,
    stemSignals: [
      "Bipolar disorder — mental state may be fluctuating, capacity to process may vary",
      "16 weeks pregnant — ongoing pregnancy, time-sensitive decisions remain possible",
      "Does not yet know — this is first disclosure, not a follow-up conversation",
      "Valproate embryopathy — serious, specific, predictable in mechanism",
      "On valproate — medication decision follows from this news, adds complexity",
    ],
    domains: [
      {
        name: "Pre-disclosure assessment — the most-missed domain",
        marks: 2,
        keyPoints: [
          "Assess Danica's current mental state BEFORE delivering news",
          "Capacity to receive and process complex distressing information",
          "What does she already know or suspect?",
          "Support person — does she want someone present?",
          "Setting: private, quiet, adequate time, no interruptions",
        ],
      },
      {
        name: "SPIKES framework",
        marks: 3,
        keyPoints: [
          "Setting: appropriate environment",
          "Perception: what does she currently understand?",
          "Invitation: ask permission to share news",
          "Knowledge: plain language, staged, no jargon",
          "Emotions: respond to emotional reaction BEFORE providing more information",
          "Strategy: collaboratively plan next steps",
        ],
      },
      {
        name: "Content of the news",
        marks: 2,
        keyPoints: [
          "Nature of valproate embryopathy clearly explained",
          "Specific anomalies identified honestly",
          "Acknowledge prognosis uncertainty",
          "Options: continuation, termination, palliative perinatal care — not pressured",
          "Next steps: obstetrics, genetics, specialist liaison",
        ],
      },
      {
        name: "Follow-up and review",
        marks: 1,
        keyPoints: [
          "Written summary of what was discussed",
          "Follow-up appointment — she may not retain today's information",
          "Mental health review after disclosure — this is a major psychological stressor",
          "Who she can contact between appointments",
        ],
      },
    ],
    zeroMarkTraps: [],
    postExaminerNote: "March 2025 average 2/8. Pre-disclosure assessment of Danica's capacity to receive news was almost universally missed — this domain was worth 2 marks and candidates went straight to delivery.",
  },

  {
    id: "MAR25_4_3",
    examSource: "March 2025",
    case: "Peter, 27",
    topic: "Psychopharmacology",
    subtopic: "Antipsychotic-induced hyperprolactinaemia · Risperidone · Management",
    difficulty: "core",
    fellowshipCompetencies: ["Medical Expert"],
    vignette: `You are a junior consultant psychiatrist. Peter is a 27-year-old man with schizophrenia prescribed risperidone 6mg daily. He attends his regular outpatient review and discloses decreased libido, erectile dysfunction, and that his partner has noticed white fluid from his nipple. He does not want to stop his antipsychotic.`,
    stemAddition: null,
    question: `Outline (list and justify) your management of antipsychotic-induced hyperprolactinaemia in Peter's case.\n\nPlease note: a list without any justification will not be awarded any marks.`,
    commandWord: "outline_justify",
    marks: 9,
    timeMinutes: 9,
    stemSignals: [
      "Risperidone 6mg — one of the highest prolactin-elevating antipsychotics",
      "Does not want to stop antipsychotic — patient preference must guide approach",
      "27-year-old male — bone density, sexual function, long-term metabolic consequences",
      "Galactorrhoea — confirms significant hyperprolactinaemia clinically",
      "Outpatient setting — monitoring and follow-up context",
    ],
    domains: [
      {
        name: "Investigation",
        marks: 2,
        keyPoints: [
          "Serum prolactin level to confirm and quantify",
          "Rule out other causes: TFTs, pituitary MRI if very elevated",
          "Baseline DEXA bone density (prolonged hyperprolactinaemia causes osteoporosis)",
        ],
      },
      {
        name: "Medication management options",
        marks: 4,
        keyPoints: [
          "Dose reduction of risperidone if clinically safe — lowest effective dose",
          "Switch to prolactin-sparing agent: aripiprazole, quetiapine, olanzapine, clozapine",
          "Add low-dose aripiprazole as augmentation — partial D2 agonist reduces prolactin WITHOUT switching",
          "Discuss trade-offs explicitly: switching risk (relapse) vs continuing (metabolic/bone/sexual harm)",
          "Peter does not want to stop — aripiprazole augmentation aligns with his preference",
        ],
      },
      {
        name: "Symptom management",
        marks: 2,
        keyPoints: [
          "Erectile dysfunction: PDE5 inhibitor while addressing underlying prolactin",
          "Bone health: calcium, vitamin D, weight-bearing exercise",
          "Address sexual health with sensitivity — document discussion",
        ],
      },
      {
        name: "Monitoring and follow-up",
        marks: 1,
        keyPoints: [
          "Repeat prolactin after medication change",
          "Ongoing DEXA monitoring",
          "Endocrinology referral if prolactin very elevated or not normalising",
        ],
      },
    ],
    zeroMarkTraps: [],
    postExaminerNote: "March 2025 average 1/9. One of the worst performing questions in the paper. Aripiprazole augmentation as prolactin-lowering strategy is the clinical pearl. Many candidates ran out of time or lacked specific pharmacological knowledge.",
  },

  {
    id: "MAR25_1_2",
    examSource: "March 2025",
    case: "Danica, 34",
    topic: "Ethics and Governance",
    subtopic: "Perinatal medication ethics · Competing duties · Fetal vs maternal welfare",
    difficulty: "discriminating",
    fellowshipCompetencies: ["Medical Expert", "Professional", "Communicator"],
    vignette: `You are a junior consultant psychiatrist. Danica is a 34-year-old woman with bipolar disorder who is 16 weeks pregnant. She has been well on sodium valproate 1000mg throughout her pregnancy and wishes to continue this medication. Recent fetal anomaly scan shows abnormalities consistent with valproate embryopathy. Danica has full capacity and understands the risk to the fetus. She wants to continue the pregnancy and the valproate.`,
    stemAddition: null,
    question: `Outline (list and justify) the ethical issues raised when a pregnant woman wishes to continue medication that could be harmful to the foetus.\n\nPlease note: a list without any justification will not be awarded any marks.`,
    commandWord: "outline_justify",
    marks: 9,
    timeMinutes: 9,
    stemSignals: [
      "Full capacity confirmed — autonomy is fully operative",
      "Understands the risk — informed consent is present",
      "Wishes to continue both pregnancy AND valproate — active choice, not passive",
      "Well on valproate — discontinuation poses real relapse risk to Danica",
      "16 weeks — fetal organ development substantially complete",
    ],
    domains: [
      {
        name: "Autonomy — the primary principle here",
        marks: 3,
        keyPoints: [
          "Danica has capacity and is making an informed decision",
          "Autonomy requires respecting her decision even if clinicians disagree",
          "She has a right to accept risk for herself and, by extension, her fetus",
          "Clinicians cannot override a capacitous patient's decision",
          "Document her decision and your clinical advice clearly",
        ],
      },
      {
        name: "Competing duties — beneficence and non-maleficence in tension",
        marks: 3,
        keyPoints: [
          "Beneficence to Danica: valproate maintains her mental health, prevents relapse",
          "Beneficence to fetus: fetal welfare is a clinical consideration",
          "Non-maleficence to Danica: stopping valproate risks severe relapse and harm to her",
          "Non-maleficence to fetus: continued valproate may compound existing anomalies",
          "These duties CONFLICT — this tension must be named explicitly",
          "The fetus has no legal personhood — Danica's autonomy takes precedence",
        ],
      },
      {
        name: "Justice and resource considerations",
        marks: 1,
        keyPoints: [
          "Justice in access: does Danica have equitable access to specialist perinatal psychiatric input?",
          "Resource allocation for complex perinatal cases",
        ],
      },
      {
        name: "Practical clinical response",
        marks: 2,
        keyPoints: [
          "Respect the decision, document thoroughly",
          "Perinatal psychiatry and obstetrics specialist input",
          "Regular review — circumstances and mental state may change",
          "Plan for postnatal period — valproate and breastfeeding",
          "Continued therapeutic relationship without abandonment",
        ],
      },
    ],
    zeroMarkTraps: [
      "Overriding Danica's decision because you disagree — this is illegal and ethically indefensible for a capacitous patient",
    ],
    postExaminerNote: "March 2025: candidates named principles but failed to show the tension between them in this specific case. Autonomy is the primary principle when capacity is confirmed — not one of four equal principles.",
  },

];

// ============================================================
// SECTION 3: AI EVALUATION ENGINE
// ============================================================

const buildEvaluationPrompt = (question, candidateAnswer, timeTaken) => {
  const cw = COMMAND_WORDS[question.commandWord];
  const domainsText = question.domains
    .map(d => `  DOMAIN "${d.name}" (${d.marks} marks):\n${d.keyPoints.map(p => `    - ${p}`).join("\n")}`)
    .join("\n\n");
  const stemSignalsText = question.stemSignals.map(s => `  - ${s}`).join("\n");
  const zeroTrapsText = question.zeroMarkTraps.length
    ? question.zeroMarkTraps.map(z => `  - ${z}`).join("\n")
    : "  None specific to this question";
  const timeTarget = question.timeMinutes * 60;
  const timeStatus = timeTaken <= timeTarget
    ? `Within time (${Math.round(timeTaken / 60)} of ${question.timeMinutes} minutes used)`
    : `Over time by ${Math.round((timeTaken - timeTarget) / 60)} minutes`;

  return `You are an RANZCP MEQ examiner. Evaluate this candidate answer with the precision and standards of the actual examination. Do not soften feedback. Do not reward effort. Reward only what earns marks.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUESTION CONTEXT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Case: ${question.case}
Exam source: ${question.examSource}
Topic: ${question.topic} — ${question.subtopic}
Fellowship competencies: ${question.fellowshipCompetencies.join(", ")}
Marks available: ${question.marks}
Time allowed: ${question.timeMinutes} minutes
Time taken: ${timeStatus}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMMAND WORD: ${cw.label}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Rule: ${cw.instruction}
${cw.gate ? "⚠️ BINARY GATE: Command word non-compliance = ZERO MARKS for that section regardless of content quality. This is enforced without exception." : "No gate — marks awarded for content quality."}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUESTION ASKED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${question.question}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEM SIGNALS (details that should change the answer)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${stemSignalsText}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MARKING DOMAIN STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${domainsText}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ZERO-MARK TRAPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${zeroTrapsText}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
POST-EXAMINER INTELLIGENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${question.postExaminerNote}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CANDIDATE'S ANSWER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${candidateAnswer}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EVALUATION INSTRUCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Evaluate this answer exactly as the RANZCP examiner would.

Return ONLY a valid JSON object with this exact structure (no markdown, no preamble):

{
  "commandWordCompliance": true or false,
  "commandWordGateResult": "PASS" or "FAIL — [specific quoted example from answer showing non-compliance]",
  "estimatedMarks": number between 0 and ${question.marks},
  "markBreakdown": [
    {
      "domain": "exact domain name from marking criteria",
      "marksAvailable": number,
      "marksEarned": number,
      "reason": "Specific explanation — quote from answer if relevant. What was present, what was absent."
    }
  ],
  "stemSignalsUsed": ["signal 1 used", "signal 2 used"],
  "stemSignalsMissed": ["signal missed", "another missed"],
  "stemSignalImpact": "One sentence on how missed stem signals affected the mark.",
  "sentenceRewrites": [
    {
      "original": "exact quote from candidate answer",
      "rewrite": "consultant-level version",
      "reason": "why this rewrite earns more marks"
    }
  ],
  "criticalPointsMissed": [
    "High-yield point not covered",
    "Another missed point",
    "Another"
  ],
  "zeroMarkTrapHit": "Did the candidate write a zero-mark trap answer? Describe specifically. Or 'None identified.'",
  "timeManagement": "Analysis of whether answer length and depth match the marks and time. Specific observation.",
  "overallFeedback": "2-3 sentences. Honest consultant-to-candidate summary. Start with what specifically earns marks, then what specifically loses them. Quote from the answer. No platitudes.",
  "passMark": "yes" or "borderline" or "no",
  "priorityAction": "The single most important change this candidate needs to make — one specific, actionable instruction"
}`;
};

// ============================================================
// SECTION 4: UTILITY FUNCTIONS
// ============================================================

const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const getScorePct = (earned, max) => Math.round((earned / max) * 100);

const scoreColor = (pct) => {
  if (pct >= 75) return "text-emerald-700";
  if (pct >= 55) return "text-amber-600";
  if (pct >= 35) return "text-orange-600";
  return "text-red-700";
};

const scoreBg = (pct) => {
  if (pct >= 75) return "bg-emerald-50 border-emerald-200";
  if (pct >= 55) return "bg-amber-50 border-amber-200";
  if (pct >= 35) return "bg-orange-50 border-orange-200";
  return "bg-red-50 border-red-200";
};

const passLabel = (result) => ({
  yes: { text: "Pass standard", cls: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  borderline: { text: "Borderline", cls: "bg-amber-100 text-amber-800 border-amber-200" },
  no: { text: "Below pass mark", cls: "bg-red-100 text-red-800 border-red-200" },
}[result] || { text: result, cls: "bg-gray-100 text-gray-800 border-gray-200" });

const cwStyle = (cw) => ({
  list: "bg-sky-50 border-sky-200 text-sky-900",
  outline_justify: "bg-amber-50 border-amber-200 text-amber-900",
  describe_explain: "bg-amber-50 border-amber-200 text-amber-900",
  discuss: "bg-violet-50 border-violet-200 text-violet-900",
  debate: "bg-rose-50 border-rose-200 text-rose-900",
}[cw] || "bg-gray-50 border-gray-200 text-gray-900");

const difficultyBadge = (d) => ({
  core: "bg-sky-100 text-sky-800",
  high: "bg-amber-100 text-amber-800",
  discriminating: "bg-rose-100 text-rose-800",
}[d] || "bg-gray-100 text-gray-700");

// ============================================================
// SECTION 5: MAIN COMPONENT
// ============================================================

export default function DailyMEQMode() {
  const [phase, setPhase] = useState("home");
  const [currentQ, setCurrentQ] = useState(null);
  const [topicFilter, setTopicFilter] = useState("all");
  const [answer, setAnswer] = useState("");
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);
  const timerRef = useRef(null);

  useEffect(() => { loadHistory(); }, []);

  useEffect(() => {
    if (timerActive) {
      timerRef.current = setInterval(() => setTimer(t => t + 1), 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [timerActive]);

  const loadHistory = () => {
    try {
      const r = localStorage.getItem("meq_history_v2");
      if (r) setHistory(JSON.parse(r));
    } catch { setHistory([]); }
  };

  const saveHistory = (entry) => {
    try {
      const updated = [entry, ...history].slice(0, 100);
      setHistory(updated);
      localStorage.setItem("meq_history_v2", JSON.stringify(updated));
    } catch (e) { console.error(e); }
  };

  const startQuestion = (q) => {
    setCurrentQ(q);
    setAnswer("");
    setTimer(0);
    setFeedback(null);
    setError(null);
    setPhase("reading");
  };

  const beginWriting = () => {
    setPhase("writing");
    setTimerActive(true);
  };

  const submitAnswer = async () => {
    const words = answer.trim().split(/\s+/).length;
    if (words < 30) {
      setError("Please write a more complete answer before submitting.");
      return;
    }
    setTimerActive(false);
    setLoading(true);
    setFeedback(null);
    setError(null);
    setPhase("feedback");

    try {
      const prompt = buildEvaluationPrompt(currentQ, answer, timer);
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 2500,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = await res.json();
      const text = data.content?.map(i => i.text || "").join("") || "";
      const match = text.match(/\{[\s\S]*\}/);
      if (!match) throw new Error("No JSON returned");
      const fb = JSON.parse(match[0]);
      setFeedback(fb);
      saveHistory({
        id: Date.now(),
        qId: currentQ.id,
        case: currentQ.case,
        topic: currentQ.topic,
        examSource: currentQ.examSource,
        marks: currentQ.marks,
        earned: fb.estimatedMarks,
        pass: fb.passMark,
        commandPass: fb.commandWordCompliance,
        timeTaken: timer,
        date: new Date().toISOString(),
      });
    } catch (err) {
      setError("Evaluation failed. Check API connection. " + err.message);
      setPhase("writing");
      setTimerActive(false);
    }
    setLoading(false);
  };

  const topics = ["all", ...new Set(QUESTION_BANK.map(q => q.topic))];
  const filtered = topicFilter === "all" ? QUESTION_BANK : QUESTION_BANK.filter(q => q.topic === topicFilter);

  const stats = history.length > 0 ? {
    attempts: history.length,
    avgPct: Math.round(history.reduce((s, h) => s + getScorePct(h.earned, h.marks), 0) / history.length),
    passing: history.filter(h => h.pass === "yes").length,
    commandFails: history.filter(h => !h.commandPass).length,
  } : null;

  // ── HOME ─────────────────────────────────────────────────
  if (phase === "home") return (
    <div className="max-w-4xl mx-auto px-4 py-6">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">Daily MEQ Practice</h1>
        <p className="text-gray-500">Real RANZCP exam questions · AI feedback at examiner standard · {QUESTION_BANK.length} questions from recent papers</p>
      </div>

      {stats && (
        <div className="grid grid-cols-4 gap-3 mb-8">
          {[
            { label: "Attempts", value: stats.attempts, color: "text-gray-900" },
            { label: "Avg score", value: `${stats.avgPct}%`, color: scoreColor(stats.avgPct) },
            { label: "Pass standard", value: stats.passing, color: "text-emerald-700" },
            { label: "Command word fails", value: stats.commandFails, color: stats.commandFails > 0 ? "text-red-700" : "text-gray-400" },
          ].map(s => (
            <div key={s.label} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-5">
        {topics.map(t => (
          <button key={t} onClick={() => setTopicFilter(t)}
            className={`px-3 py-1.5 rounded-full text-sm border transition-all ${topicFilter === t ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-200 hover:border-gray-500"}`}>
            {t === "all" ? `All (${QUESTION_BANK.length})` : `${t} (${QUESTION_BANK.filter(q => q.topic === t).length})`}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map(q => {
          const past = history.filter(h => h.qId === q.id);
          const best = past.length ? Math.max(...past.map(h => getScorePct(h.earned, h.marks))) : null;
          const cw = COMMAND_WORDS[q.commandWord];
          return (
            <div key={q.id} onClick={() => startQuestion(q)}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm cursor-pointer transition-all group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="font-semibold text-gray-900 text-sm">{q.case}</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-xs text-gray-500">{q.examSource}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${difficultyBadge(q.difficulty)}`}>{q.difficulty}</span>
                    {past.length > 0 && <span className="text-xs text-gray-400">{past.length}x attempted</span>}
                  </div>
                  <p className="text-sm text-gray-700 mb-2 line-clamp-2">{q.question.split("\n")[0]}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className={`text-xs px-2 py-0.5 rounded-md border font-medium ${cwStyle(q.commandWord)}`}>{cw.short}</span>
                    <span className="text-xs text-gray-500">{q.marks} marks · {q.timeMinutes} min</span>
                    <span className="text-xs text-gray-400">{q.topic}</span>
                  </div>
                </div>
                {best !== null && (
                  <div className="text-right flex-shrink-0">
                    <div className={`text-xl font-bold ${scoreColor(best)}`}>{best}%</div>
                    <div className="text-xs text-gray-400">best</div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // ── READING ──────────────────────────────────────────────
  if (phase === "reading" && currentQ) {
    const cw = COMMAND_WORDS[currentQ.commandWord];
    return (
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-5">
          <button onClick={() => setPhase("home")} className="text-sm text-gray-500 hover:text-gray-800">← Back</button>
          <span className="text-sm text-gray-500">Reading time — extract stem signals before writing</span>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Clinical Vignette</div>
          <p className="text-gray-800 text-sm leading-relaxed">{currentQ.vignette}</p>
          {currentQ.stemAddition && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-gray-800 text-sm leading-relaxed italic">{currentQ.stemAddition}</p>
            </div>
          )}
        </div>

        <div className={`border rounded-xl p-4 mb-4 ${cwStyle(currentQ.commandWord)}`}>
          <div className="text-xs font-semibold uppercase tracking-wide mb-1 opacity-70">{cw.label} · {currentQ.marks} marks · {currentQ.timeMinutes} min</div>
          <p className="text-sm font-medium leading-relaxed">{currentQ.question.split("\n")[0]}</p>
          {cw.gate && (
            <div className="mt-2 pt-2 border-t border-current border-opacity-20 text-xs font-medium">
              ⚠️ {cw.instruction}
            </div>
          )}
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
          <div className="text-xs font-semibold text-blue-800 uppercase tracking-wide mb-2">Stem signals — use these in your answer</div>
          <ul className="space-y-1.5">
            {currentQ.stemSignals.map((s, i) => (
              <li key={i} className="text-xs text-blue-800 flex gap-2">
                <span className="text-blue-400 flex-shrink-0 mt-0.5">→</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <button onClick={beginWriting}
          className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-colors text-sm">
          Start Writing — Timer Begins Now
        </button>
      </div>
    );
  }

  // ── WRITING ──────────────────────────────────────────────
  if (phase === "writing" && currentQ) {
    const isOver = timer > currentQ.timeMinutes * 60;
    const ratio = timer / (currentQ.timeMinutes * 60);
    const timeColor = ratio < 0.7 ? "text-emerald-600" : ratio < 0.9 ? "text-amber-500" : "text-red-600";
    const words = answer.trim() ? answer.trim().split(/\s+/).length : 0;

    return (
      <div className="max-w-3xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700">{currentQ.case}</span>
            <span className={`text-xl font-mono font-bold ${timeColor}`}>{formatTime(timer)}</span>
            {isOver && <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">Over time</span>}
          </div>
          <span className="text-xs text-gray-400">{currentQ.marks} marks · {words} words</span>
        </div>

        <div className={`border rounded-lg px-3 py-2 mb-3 text-xs font-medium ${cwStyle(currentQ.commandWord)}`}>
          {COMMAND_WORDS[currentQ.commandWord].label}: {currentQ.question.split("\n")[0]}
        </div>

        <textarea
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          autoFocus
          className="w-full h-[400px] p-4 border border-gray-300 rounded-xl text-sm text-gray-800 leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          placeholder={`Write your answer here...\n\n${COMMAND_WORDS[currentQ.commandWord].instruction}`}
        />

        {error && <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}

        <button onClick={submitAnswer} disabled={loading}
          className="w-full mt-3 bg-gray-900 text-white py-3 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-colors disabled:opacity-40">
          Submit for RANZCP Examiner Feedback
        </button>
      </div>
    );
  }

  // ── FEEDBACK ─────────────────────────────────────────────
  if (phase === "feedback" && currentQ) {

    if (loading) return (
      <div className="max-w-3xl mx-auto px-4 py-20 flex flex-col items-center text-center">
        <div className="w-10 h-10 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mb-5" />
        <p className="text-gray-700 font-medium">Evaluating at RANZCP examiner standard...</p>
        <p className="text-gray-400 text-sm mt-2">Checking command word · domain coverage · justification · stem usage</p>
      </div>
    );

    if (!feedback) return (
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700 mb-3">{error}</div>
        <button onClick={() => { setPhase("writing"); setTimerActive(true); }}
          className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm">Return to answer</button>
      </div>
    );

    const pct = getScorePct(feedback.estimatedMarks, currentQ.marks);
    const pl = passLabel(feedback.passMark);

    return (
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">

        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900">{currentQ.case} — Feedback</h2>
            <p className="text-sm text-gray-500">{currentQ.examSource} · {currentQ.topic}</p>
          </div>
          <button onClick={() => setPhase("home")} className="text-sm text-gray-500 hover:text-gray-700">← Questions</button>
        </div>

        {/* Score card */}
        <div className={`border rounded-xl p-5 ${scoreBg(pct)}`}>
          <div className="flex items-center justify-between">
            <div>
              <div className={`text-5xl font-black ${scoreColor(pct)}`}>
                {feedback.estimatedMarks}/{currentQ.marks}
              </div>
              <div className="text-sm text-gray-500 mt-1">{pct}% · {formatTime(timer)}</div>
            </div>
            <div className="text-right space-y-2">
              <span className={`inline-block px-3 py-1.5 rounded-full text-sm font-semibold border ${pl.cls}`}>{pl.text}</span>
              <div className={`text-sm font-semibold ${feedback.commandWordCompliance ? "text-emerald-700" : "text-red-700"}`}>
                {feedback.commandWordCompliance ? "✓ Command word compliant" : "✗ " + feedback.commandWordGateResult}
              </div>
            </div>
          </div>
        </div>

        {/* Priority action */}
        {feedback.priorityAction && (
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">Most important fix</div>
            <p className="text-sm text-amber-900 font-medium">{feedback.priorityAction}</p>
          </div>
        )}

        {/* Domain breakdown */}
        {feedback.markBreakdown?.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <h3 className="text-sm font-bold text-gray-900 mb-3">Mark breakdown</h3>
            <div className="space-y-3">
              {feedback.markBreakdown.map((d, i) => {
                const dpct = getScorePct(d.marksEarned, d.marksAvailable);
                return (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-6 text-center text-sm mt-0.5">
                      {dpct === 100 ? "✓" : dpct === 0 ? <span className="text-red-500">✗</span> : <span className="text-amber-500">~</span>}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-800">{d.domain}</span>
                        <span className={`text-sm font-bold ${scoreColor(dpct)}`}>{d.marksEarned}/{d.marksAvailable}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{d.reason}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Stem signal usage */}
        {(feedback.stemSignalsMissed?.length > 0 || feedback.stemSignalsUsed?.length > 0) && (
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <h3 className="text-sm font-bold text-gray-900 mb-3">Stem signal usage</h3>
            {feedback.stemSignalsUsed?.length > 0 && (
              <div className="mb-3">
                <div className="text-xs font-medium text-emerald-700 mb-1.5">Used ✓</div>
                <ul className="space-y-1">
                  {feedback.stemSignalsUsed.map((s, i) => (
                    <li key={i} className="text-xs text-emerald-700 flex gap-1.5"><span>✓</span><span>{s}</span></li>
                  ))}
                </ul>
              </div>
            )}
            {feedback.stemSignalsMissed?.length > 0 && (
              <div>
                <div className="text-xs font-medium text-red-700 mb-1.5">Missed — marks left in the stem ✗</div>
                <ul className="space-y-1">
                  {feedback.stemSignalsMissed.map((s, i) => (
                    <li key={i} className="text-xs text-red-700 flex gap-1.5"><span>✗</span><span>{s}</span></li>
                  ))}
                </ul>
              </div>
            )}
            {feedback.stemSignalImpact && (
              <p className="text-xs text-gray-400 mt-2 italic">{feedback.stemSignalImpact}</p>
            )}
          </div>
        )}

        {/* Sentence rewrites */}
        {feedback.sentenceRewrites?.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <h3 className="text-sm font-bold text-gray-900 mb-3">Sentence rewrites</h3>
            <div className="space-y-4">
              {feedback.sentenceRewrites.map((r, i) => (
                <div key={i} className="space-y-2">
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                    <div className="text-xs font-medium text-blue-600 mb-1">Your version</div>
                    <p className="text-sm text-blue-900 italic">"{r.original}"</p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3">
                    <div className="text-xs font-medium text-emerald-600 mb-1">Consultant version</div>
                    <p className="text-sm text-emerald-900">"{r.rewrite}"</p>
                  </div>
                  <p className="text-xs text-gray-500 pl-1">{r.reason}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Critical points missed */}
        {feedback.criticalPointsMissed?.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <h3 className="text-sm font-bold text-gray-900 mb-2">High-yield points not covered</h3>
            <ul className="space-y-2">
              {feedback.criticalPointsMissed.map((p, i) => (
                <li key={i} className="text-sm text-gray-700 flex gap-2 items-start">
                  <span className="text-red-500 flex-shrink-0 mt-0.5">✗</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Zero mark trap */}
        {feedback.zeroMarkTrapHit && feedback.zeroMarkTrapHit !== "None identified." && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="text-xs font-bold text-red-800 uppercase tracking-wide mb-1">⚠ Zero-mark trap hit</div>
            <p className="text-sm text-red-800">{feedback.zeroMarkTrapHit}</p>
          </div>
        )}

        {/* Overall feedback */}
        {feedback.overallFeedback && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Examiner summary</div>
            <p className="text-sm text-gray-800 leading-relaxed">{feedback.overallFeedback}</p>
          </div>
        )}

        {/* Post-examiner note */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4">
          <div className="text-xs font-bold text-indigo-700 uppercase tracking-wide mb-1">RANZCP post-examiner intelligence</div>
          <p className="text-xs text-indigo-800 leading-relaxed">{currentQ.postExaminerNote}</p>
        </div>

        {/* Your answer collapsible */}
        <details className="bg-white border border-gray-200 rounded-xl">
          <summary className="px-4 py-3 text-sm font-medium text-gray-700 cursor-pointer">Your answer ({answer.trim().split(/\s+/).length} words)</summary>
          <div className="px-4 pb-4">
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap mt-2">{answer}</p>
          </div>
        </details>

        <div className="flex gap-3 pb-6">
          <button onClick={() => startQuestion(currentQ)}
            className="flex-1 py-3 border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-gray-400 transition-colors">
            Retry this question
          </button>
          <button onClick={() => setPhase("home")}
            className="flex-1 py-3 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors">
            Next question →
          </button>
        </div>

      </div>
    );
  }

  return null;
}
