// @ts-nocheck
import { useState, useEffect, useRef } from "react";

// ============================================================
// COMMAND WORDS
// ============================================================
const COMMAND_WORDS = {
  list: {
    label: "List",
    short: "LIST",
    instruction: "Name items only. No explanation required or rewarded.",
    gate: false,
  },
  outline_justify: {
    label: "Outline (List and Justify)",
    short: "OUTLINE",
    instruction:
      "Each point MUST include 'because [case-specific reason]'. A list without justification = ZERO MARKS for that point.",
    gate: true,
  },
  describe_explain: {
    label: "Describe (List and Explain)",
    short: "DESCRIBE",
    instruction:
      "Each point MUST explain the mechanism, sequence, or clinical significance. A list without explanation = ZERO MARKS for that point.",
    gate: true,
  },
  discuss: {
    label: "Discuss",
    short: "DISCUSS",
    instruction: "Present balanced considerations. Name the tensions involved.",
    gate: false,
  },
  debate: {
    label: "Discuss (List and Debate)",
    short: "DEBATE",
    instruction:
      "MUST argue both sides explicitly with named tensions. A one-sided answer = ZERO MARKS.",
    gate: true,
  },
};

// ============================================================
// MEQ BANK
// ============================================================
const MEQ_BANK = [
  // ─────────────────────────────────────────────────────────
  // MEQ 001 — Adil, 32 — Consultation Liaison
  // ─────────────────────────────────────────────────────────
  {
    id: "meq_001",
    title: "Adil — Consultation Liaison",
    case: "Adil, 32",
    examSource: "November 2025 Pilot",
    topic: "Consultation Liaison",
    primaryDomain: "Management / Disposition",
    totalMarks: 30,
    totalTimeMinutes: 30,
    stems: [
      {
        stemNumber: "1.1",
        vignette:
          "You are a junior consultant psychiatrist working on a Consultation Liaison team in a metropolitan hospital. Adil is a 32-year-old single Afghan refugee with a diagnosis of schizophrenia and intravenous heroin misuse. He is under a community mental health team and is prescribed depot antipsychotic medication. Adil initially agreed to be admitted to the medical ward for suspected infective endocarditis. However, he has since refused to have any tests done, and has tried to leave the medical ward. You have been asked to assess Adil as his medical team is concerned about his treatment refusal.",
        question:
          "Outline (list and justify) the factors that might be contributing to Adil's treatment refusal.\n\nPlease note: a list without any justification will not be awarded any marks.",
        commandWord: "outline_justify",
        marks: 10,
        timeMinutes: 10,
        stemSignals: [
          "Afghan refugee — cultural context, trauma, non-western explanatory models of illness",
          "IV heroin misuse — active withdrawal drives agitation and apparent refusal",
          "Schizophrenia on depot — possible psychosis, community team involved",
          "Metropolitan hospital — interpreter services available but may not be used",
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
            ],
          },
          {
            name: "Systems factors",
            marks: 3,
            keyPoints: [
              "Paternalistic medical team approach",
              "Lack of culturally safe care",
              "Stigma from staff toward mental illness and substance use",
              "Negative countertransference in the treating team",
            ],
          },
        ],
        zeroMarkTraps: [],
        postExaminerNote:
          "Candidates missed systems factors and countertransference. 'Cultural sensitivity' as a generic statement scored zero — justification must name specific cultural factors and how they change clinical action.",
      },
      {
        stemNumber: "1.2",
        vignette:
          "Adil continues to refuse all investigations and attempted to leave the ward twice overnight. After opiate withdrawal management commenced, he appears more alert but remains resistant. The medical team is concerned he may lack capacity to refuse the investigations.",
        question:
          "Describe (list and explain) how you would assess Adil's capacity to refuse medical investigations.\n\nPlease note: a list without any explanation will not be awarded any marks.",
        commandWord: "describe_explain",
        marks: 7,
        timeMinutes: 7,
        stemSignals: [
          "Twice attempted to leave — active refusal, not passive disengagement",
          "More alert after withdrawal management — capacity may have changed",
          "Afghan refugee — qualified interpreter mandatory for formal capacity assessment",
          "Schizophrenia + active infection — two simultaneous impairments to capacity",
        ],
        domains: [
          {
            name: "Four-component capacity framework",
            marks: 3,
            keyPoints: [
              "Understand: comprehend the diagnosis, proposed investigations, and risks of refusal",
              "Appreciate: apply this information to his own situation",
              "Reason: weigh the risks and benefits of investigation versus refusal",
              "Express: state his decision consistently and clearly",
              "MacCAT-T or equivalent structured assessment tool",
              "Document formal assessment with time and date",
            ],
          },
          {
            name: "Clinical factors affecting capacity",
            marks: 2,
            keyPoints: [
              "Active psychosis may impair appreciation and reasoning",
              "Withdrawal status — assess timing and severity using COWS",
              "Delirium from infection — assess attention, consciousness, orientation",
              "Capacity is decision-specific and time-specific — not global",
              "Prior consent at admission does not substitute for current assessment",
            ],
          },
          {
            name: "Process and documentation",
            marks: 2,
            keyPoints: [
              "Qualified interpreter present — NOT a family member",
              "Document assessment in full in medical record, time-stamped",
              "Repeat assessment if clinical state changes",
              "Seek second opinion from senior colleague",
              "Distinguish incapacity from disagreement with clinical advice",
            ],
          },
        ],
        zeroMarkTraps: [
          "Performing capacity assessment without a qualified interpreter — professionally indefensible",
        ],
        postExaminerNote:
          "The most common error was failing to mention the qualified interpreter. Candidates also conflated incapacity with disagreement.",
      },
      {
        stemNumber: "1.3",
        vignette:
          "Three weeks later, Adil has been treated for moderate-to-severe depression and infective endocarditis. He is now ready for discharge. He has been referred to a community opioid replacement programme and is currently receiving 60mg of methadone daily.",
        question:
          "Outline (list and justify) the key points you would cover in your discharge planning meeting with Adil.\n\nPlease note: a list without any justification will not be awarded any marks.",
        commandWord: "outline_justify",
        marks: 7,
        timeMinutes: 7,
        stemSignals: [
          "60mg methadone daily — fatal overdose risk if heroin used on top",
          "Community opioid replacement — specific handover and coordination required",
          "Afghan refugee — interpreter, cultural community supports, migration issues",
          "Depression treated — recognition of relapse signs important",
          "Infective endocarditis — antibiotic completion, cardiac follow-up required",
        ],
        domains: [
          {
            name: "Safety plan and harm reduction",
            marks: 3,
            keyPoints: [
              "Explicit warning: fatal overdose risk if heroin used on top of methadone",
              "Naloxone provision and instruction — document you provided it",
              "Safety plan with early warning signs of mental state deterioration",
              "Crisis and emergency contacts clearly provided",
              "Needle exchange and safe injection practices",
            ],
          },
          {
            name: "Linkage and follow-up",
            marks: 2,
            keyPoints: [
              "GP referral for holistic physical and mental health follow-up",
              "Community mental health team appointment before discharge",
              "Opioid replacement programme appointment confirmed",
              "Cardiac and infectious disease follow-up arranged",
            ],
          },
          {
            name: "Social and cultural supports",
            marks: 2,
            keyPoints: [
              "Stable accommodation — housing advocacy if needed",
              "Migration and refugee support service links",
              "Interpreter arrangements for ongoing appointments",
              "Financial support access — Centrelink, community services",
            ],
          },
        ],
        zeroMarkTraps: [],
        postExaminerNote:
          "Methadone overdose risk from concurrent heroin use is the highest-yield point — must be stated and justified. Naloxone provision was frequently omitted. Candidates focused on mental health and missed the physical follow-up requirements.",
      },
      {
        stemNumber: "1.4",
        vignette:
          "During discharge planning, Adil discloses that if he returns to his previous accommodation he will resume using heroin. He expresses that life feels pointless and he is not sure he wants to be treated further. He has no fixed address. The medical team want to discharge him today as his bed is needed.",
        question:
          "Outline (list and justify) the ethical issues raised by this situation.\n\nPlease note: a list without any justification will not be awarded any marks.",
        commandWord: "outline_justify",
        marks: 6,
        timeMinutes: 6,
        stemSignals: [
          "Life feels pointless — suicidal ideation must be formally assessed before discharge",
          "No fixed address — homelessness creates immediate foreseeable harm",
          "Medical team pressure to discharge — institutional interest conflicts with clinical duty",
          "Will resume heroin — harm from discharge is foreseeable and specific",
          "Has capacity — this is an ethics issue, not a capacity issue",
        ],
        domains: [
          {
            name: "Competing ethical duties in tension",
            marks: 3,
            keyPoints: [
              "Beneficence to Adil: keeping him safe conflicts with discharging to homelessness",
              "Non-maleficence: foreseeable harm from discharge (heroin + methadone) must be named",
              "Autonomy: Adil has the right to make decisions with capacity, even unwise ones",
              "Justice: resource allocation driving discharge is a justice and equity issue",
              "The tension between these duties must be explicitly named — not just listed",
            ],
          },
          {
            name: "Duty of care and institutional obligations",
            marks: 2,
            keyPoints: [
              "Cannot discharge to a situation of foreseeable serious harm without documentation",
              "Bed pressure does NOT override clinical duty of care",
              "Discharge without housing plan is clinically and ethically indefensible",
              "Must escalate to medical director if institutional pressure continues",
              "Document the ethical conflict and your clinical position in the medical record",
            ],
          },
          {
            name: "Immediate clinical obligations",
            marks: 1,
            keyPoints: [
              "Suicidal ideation must be formally assessed before discharge",
              "Housing must be arranged before discharge can proceed",
              "Social work involvement is mandatory in this scenario",
            ],
          },
        ],
        zeroMarkTraps: [
          "Discharging Adil to homelessness because 'he has capacity' — capacity does not eliminate duty of care",
        ],
        postExaminerNote:
          "Candidates who said 'he has capacity, discharge him' failed this question. Capacity and duty of care are not mutually exclusive. The tension between autonomy and foreseeable harm in a vulnerable population is the core of this question.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // MEQ 002 — Danica, 34 — Perinatal Psychiatry
  // ─────────────────────────────────────────────────────────
  {
    id: "meq_002",
    title: "Danica — Perinatal Psychiatry",
    case: "Danica, 34",
    examSource: "March 2025",
    topic: "Perinatal Psychiatry / Ethics",
    primaryDomain: "Ethics / Professionalism / Legal",
    totalMarks: 25,
    totalTimeMinutes: 25,
    stems: [
      {
        stemNumber: "2.1",
        vignette:
          "You are a junior consultant psychiatrist. Danica is a 34-year-old woman with bipolar disorder who is 16 weeks pregnant and has been well maintained on sodium valproate 1000mg daily throughout her pregnancy. Recent investigations have revealed fetal anomalies consistent with valproate embryopathy. Danica does not yet know the investigation results.",
        question:
          "Describe (list and explain) how you would approach delivering this news to Danica.\n\nPlease note: a list without any explanation will not be awarded any marks.",
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
            name: "Pre-disclosure assessment",
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
              "Mental health review after disclosure",
            ],
          },
        ],
        zeroMarkTraps: [],
        postExaminerNote:
          "Pre-disclosure assessment of Danica's capacity to receive news was almost universally missed — worth 2 marks. Candidates went straight to SPIKES delivery without assessing her mental state first.",
      },
      {
        stemNumber: "2.2",
        vignette:
          "Danica has now been informed of the fetal anomalies. She has full capacity and understands the risk to the fetus. She wants to continue the pregnancy and the valproate, stating that stopping valproate would risk her mental health and she has 'been through this before'.",
        question:
          "Outline (list and justify) the ethical issues raised when a pregnant woman wishes to continue medication that could be harmful to the foetus.\n\nPlease note: a list without any justification will not be awarded any marks.",
        commandWord: "outline_justify",
        marks: 9,
        timeMinutes: 9,
        stemSignals: [
          "Full capacity confirmed — autonomy is fully operative",
          "Understands the risk — informed consent is present",
          "Wishes to continue both pregnancy AND valproate — active informed choice",
          "Well on valproate — discontinuation poses real relapse risk to Danica",
          "16 weeks — fetal organ development substantially complete",
        ],
        domains: [
          {
            name: "Autonomy — the primary principle",
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
            name: "Competing duties in tension",
            marks: 3,
            keyPoints: [
              "Beneficence to Danica: valproate maintains her mental health, prevents relapse",
              "Beneficence to fetus: fetal welfare is a clinical consideration",
              "Non-maleficence to Danica: stopping valproate risks severe relapse",
              "Non-maleficence to fetus: continued valproate may compound existing anomalies",
              "These duties CONFLICT — the tension must be named explicitly",
              "The fetus has no legal personhood — Danica's autonomy takes precedence",
            ],
          },
          {
            name: "Justice",
            marks: 1,
            keyPoints: [
              "Does Danica have equitable access to specialist perinatal psychiatric input?",
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
            ],
          },
        ],
        zeroMarkTraps: [
          "Overriding Danica's decision because you disagree — illegal and indefensible for a capacitous patient",
        ],
        postExaminerNote:
          "Candidates named principles but failed to show the tension between them in this specific case. Autonomy is the primary principle when capacity is confirmed.",
      },
      {
        stemNumber: "2.3",
        vignette:
          "Following your discussion, Danica agrees to continue the pregnancy on valproate with close monitoring. She is now 20 weeks pregnant. She asks about what the plan will be for her ongoing psychiatric care through the pregnancy and beyond.",
        question:
          "Outline (list and justify) your ongoing management plan for Danica through the remainder of her pregnancy and the postnatal period.\n\nPlease note: a list without any justification will not be awarded any marks.",
        commandWord: "outline_justify",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "20 weeks pregnant — second trimester, significant monitoring period ahead",
          "Continuing valproate — regular monitoring for toxicity and dose adjustment",
          "Bipolar disorder — postnatal period is very high risk for relapse",
          "Prior valproate embryopathy — specialist obstetric team already engaged",
          "Breastfeeding question will arise — valproate compatibility planning needed",
        ],
        domains: [
          {
            name: "Antenatal psychiatric monitoring",
            marks: 3,
            keyPoints: [
              "Regular psychiatric review — minimum monthly during pregnancy",
              "Valproate level monitoring — therapeutic drug levels, hepatic function",
              "Folate supplementation — standard for valproate use in pregnancy",
              "Early warning signs of mood episode — collaboratively defined",
              "Safety plan updated for pregnancy-specific risks",
            ],
          },
          {
            name: "Multidisciplinary antenatal coordination",
            marks: 2,
            keyPoints: [
              "Perinatal psychiatry team leadership of psychiatric care",
              "Obstetrics team — enhanced surveillance for fetal anomalies and growth",
              "Maternal-fetal medicine specialist — high-risk obstetric input",
              "Community midwifery and enhanced home visiting",
              "Social work assessment — support systems, partner involvement",
            ],
          },
          {
            name: "Postnatal planning",
            marks: 3,
            keyPoints: [
              "Postnatal period is the highest risk for bipolar relapse — explicitly name this",
              "Valproate dose review postnatally — levels change with pregnancy physiology",
              "Breastfeeding: valproate transfers in breast milk — risk-benefit discussion required",
              "Neonatal monitoring for valproate effects",
              "Mother-infant relationship and early attachment support",
              "Child protection awareness — proactive, not punitive",
              "Postnatal depression risk is elevated with bipolar disorder",
            ],
          },
        ],
        zeroMarkTraps: [],
        postExaminerNote:
          "Candidates focused only on the pregnancy and missed the postnatal period — worth 3 marks. The postnatal period is THE highest risk window for bipolar women and must be explicitly addressed.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  // MEQ 003 — Quality Improvement — Hypnotics
  // ─────────────────────────────────────────────────────────
  {
    id: "meq_003",
    title: "Hypnotics Quality Improvement",
    case: "Inpatient Unit QI",
    examSource: "November 2025 Pilot",
    topic: "Quality Improvement and Governance",
    primaryDomain: "Governance / Systems / Leadership",
    totalMarks: 26,
    totalTimeMinutes: 26,
    stems: [
      {
        stemNumber: "3.1",
        vignette:
          "You are a junior consultant psychiatrist in the inpatient unit at a large teaching hospital in a metropolitan city. The report from a recent audit of prescribing patterns of hypnotics in the MH inpatient unit recommends that the mental health department develops a non-pharmacological strategy for improving night-time sleep in patients admitted to the inpatient unit.",
        question:
          "Describe (list and explain) how you would plan a strategy to implement the audit's recommendation.\n\nPlease note: a list without any explanation will not be awarded any marks.",
        commandWord: "describe_explain",
        marks: 9,
        timeMinutes: 9,
        stemSignals: [
          "Inpatient unit — night nursing observations create competing priorities",
          "Teaching hospital — research culture, academic buy-in possible",
          "Metropolitan — diverse patient population, lived experience workforce available",
          "Audit of prescribing patterns — existing baseline data for re-audit cycle",
        ],
        domains: [
          {
            name: "Stakeholder engagement with named roles",
            marks: 5,
            keyPoints: [
              "Nursing staff: night observations, competing responsibilities, ward culture",
              "Consumer consultant/peer worker: patient-centred barriers",
              "Pharmacist: medication timing, sleep-disrupting drugs",
              "Occupational therapist: sensory modulation, CBT-i delivery",
              "Medical staff: clinical oversight",
              "Hospital executive: resourcing, funding, policy authority",
              "Sleep psychologist: evidence base for non-pharmacological interventions",
            ],
          },
          {
            name: "Literature review and benchmarking",
            marks: 1,
            keyPoints: [
              "Evidence base for non-pharmacological sleep interventions in inpatient settings",
              "Benchmarking against other units and national best practice",
            ],
          },
          {
            name: "Re-audit cycle and KPIs",
            marks: 1,
            keyPoints: [
              "Baseline data collection on sleep patterns and hypnotic prescribing rates",
              "Regular audit cycle to assess impact",
              "Agreed KPIs with IT and data analysis support",
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
            ],
          },
        ],
        zeroMarkTraps: [
          "Doctor-centric answers listing only what the psychiatrist will do — misses majority of marks",
        ],
        postExaminerNote:
          "August 2024 report explicitly criticised doctor-centric responses. Named stakeholders with specific contributions are required. 'Involve MDT' as a generic statement scores zero.",
      },
      {
        stemNumber: "3.2",
        vignette:
          "Six months after commencing the non-pharmacological sleep strategy, you notice that staff are still frequently prescribing hypnotics despite the new guidelines.",
        question:
          "Outline (list and justify) the barriers that might be contributing to continued hypnotic prescribing despite the new strategy.\n\nPlease note: a list without any justification will not be awarded any marks.",
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
              "Lack of awareness of new guidelines or insufficient training",
              "Habit — prescribing hypnotics is faster than behavioural alternatives",
              "Countertransference — difficulty tolerating patient distress at night",
              "Fear of adverse events from sleep deprivation in unwell patients",
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
        postExaminerNote:
          "Candidates who only listed patient barriers scored poorly. The question asks about continued prescribing — the barrier is primarily in the prescriber and system, not the patient.",
      },
      {
        stemNumber: "3.3",
        vignette:
          "The hospital executive has requested a formal report on the QI initiative's progress at 12 months.",
        question:
          "List the key metrics and data sources you would use to evaluate the effectiveness of the non-pharmacological sleep initiative at 12 months.",
        commandWord: "list",
        marks: 5,
        timeMinutes: 5,
        stemSignals: [
          "Hospital executive — needs governance-level metrics, not clinical detail",
          "12 months — sufficient time for meaningful trend analysis",
          "QI initiative — must show process metrics AND outcome metrics",
          "Sleep initiative — patient experience data as important as clinical data",
        ],
        domains: [
          {
            name: "Prescribing metrics",
            marks: 2,
            keyPoints: [
              "Rate of hypnotic prescribing per 100 admissions (pre vs post)",
              "PRN hypnotic administration rates",
              "Types of hypnotics prescribed (benzodiazepines vs z-drugs vs antihistamines)",
              "Duration of hypnotic prescriptions",
            ],
          },
          {
            name: "Outcome and experience metrics",
            marks: 2,
            keyPoints: [
              "Patient-reported sleep quality scores (PSQI or adapted ward measure)",
              "Staff satisfaction with new protocols",
              "Patient satisfaction surveys related to sleep care",
              "Length of stay — sleep improvement may affect recovery",
            ],
          },
          {
            name: "Process metrics",
            marks: 1,
            keyPoints: [
              "Staff training completion rates",
              "Compliance with non-pharmacological intervention documentation",
              "Protocol adherence audit results",
            ],
          },
        ],
        zeroMarkTraps: [],
        postExaminerNote:
          "This is a LIST question — justification is not required or rewarded. Most candidates over-wrote and missed easy marks by not listing enough distinct metrics.",
      },
      {
        stemNumber: "3.4",
        vignette:
          "Despite positive overall results, you identify that three consultant psychiatrists on the unit continue to prescribe hypnotics at high rates and have not engaged with the new protocols.",
        question:
          "Outline (list and justify) how you would approach addressing this issue with the non-compliant consultants.\n\nPlease note: a list without any justification will not be awarded any marks.",
        commandWord: "outline_justify",
        marks: 5,
        timeMinutes: 5,
        stemSignals: [
          "Three consultants — plural, systemic issue not individual outlier",
          "Continue to prescribe at high rates — specific data available to show",
          "Have not engaged — active disengagement, not ignorance",
          "Senior colleagues — approach must be professional, not punitive",
        ],
        domains: [
          {
            name: "Individual professional approach",
            marks: 2,
            keyPoints: [
              "One-to-one conversation — private, non-punitive, using their own data",
              "Share individualised prescribing data vs ward average",
              "Explore specific barriers to adoption — clinical concerns may be legitimate",
              "Offer support: training, mentoring, clinical supervision around protocol",
            ],
          },
          {
            name: "Governance escalation",
            marks: 2,
            keyPoints: [
              "Escalate to Medical Director if individual engagement fails",
              "Formal performance review process if non-compliance continues",
              "Documentation of all conversations and responses",
              "Present at clinical governance meeting — peer benchmarking",
            ],
          },
          {
            name: "Systemic approach",
            marks: 1,
            keyPoints: [
              "Review whether the protocol has legitimate clinical gaps",
              "Consider formal policy mandate with executive endorsement",
              "Peer benchmarking data can drive behaviour change",
            ],
          },
        ],
        zeroMarkTraps: [],
        postExaminerNote:
          "Candidates went straight to punitive action. Professional escalation must be graduated: individual conversation → peer review → governance → formal process.",
      },
    ],
  },
];

// ============================================================
// STORAGE UTILITIES
// ============================================================
const STORAGE_KEY = "meq_v3_attempts";

function loadAllAttempts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function persistAllAttempts(attempts) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts));
  } catch {}
}

function getMEQStats(meqId, allAttempts) {
  const meqAttempts = allAttempts.filter((a) => a.meqId === meqId);
  const evaluated = meqAttempts.filter(
    (a) => a.status === "evaluated" || a.status === "view_key"
  );
  const inProgressAttempt = meqAttempts.find((a) => a.status === "in_progress");
  const meq = MEQ_BANK.find((m) => m.id === meqId);

  let bestScore = null;
  let bestPct = null;
  const scoredAttempts = evaluated.filter((a) => a.evaluation);
  if (scoredAttempts.length && meq) {
    const scores = scoredAttempts.map((a) => a.evaluation?.totalMarksEarned ?? 0);
    bestScore = Math.max(...scores);
    bestPct = Math.round((bestScore / meq.totalMarks) * 100);
  }

  const status = inProgressAttempt
    ? "in_progress"
    : evaluated.length
    ? "completed"
    : "not_started";

  return { meqAttempts, evaluated, inProgressAttempt, bestScore, bestPct, status };
}

function createNewAttempt(meqId) {
  return {
    attemptId: `${meqId}_${Date.now()}`,
    meqId,
    startedAt: new Date().toISOString(),
    status: "in_progress",
    currentStemIndex: 0,
    answers: [],
    evaluation: null,
    completedAt: null,
  };
}

// ============================================================
// EVALUATION PROMPT BUILDER
// ============================================================
function buildFullMEQPrompt(meq, answers) {
  const stemsText = meq.stems
    .map((stem, idx) => {
      const cw = COMMAND_WORDS[stem.commandWord];
      const answer = answers[idx];
      const minutesUsed = answer ? Math.round((answer.timeUsedSeconds ?? 0) / 60) : 0;
      const timeNote =
        minutesUsed <= stem.timeMinutes
          ? `Used ${minutesUsed}/${stem.timeMinutes} minutes`
          : `OVER TIME by ${minutesUsed - stem.timeMinutes} minutes`;

      const domainsText = stem.domains
        .map(
          (d) =>
            `  DOMAIN "${d.name}" (${d.marks} marks):\n${d.keyPoints
              .map((p) => `    - ${p}`)
              .join("\n")}`
        )
        .join("\n\n");

      const signalsText = stem.stemSignals.map((s) => `  - ${s}`).join("\n");
      const trapsText = stem.zeroMarkTraps.length
        ? stem.zeroMarkTraps.map((z) => `  - ${z}`).join("\n")
        : "  None";

      return `
══════════════════════════════════════════
STEM ${stem.stemNumber} — ${stem.marks} marks / ${stem.timeMinutes} minutes
══════════════════════════════════════════
VIGNETTE:
${stem.vignette}

QUESTION:
${stem.question}

COMMAND WORD: ${cw.label}
Rule: ${cw.instruction}
${cw.gate ? "⚠️ GATE: Non-compliance = ZERO MARKS regardless of content." : "No binary gate."}

STEM SIGNALS (candidate should address these):
${signalsText}

MARKING DOMAINS:
${domainsText}

ZERO-MARK TRAPS:
${trapsText}

POST-EXAMINER INTELLIGENCE:
${stem.postExaminerNote}

TIME: ${timeNote}

CANDIDATE'S ANSWER FOR STEM ${stem.stemNumber}:
${answer?.answerText?.trim() || "[NO ANSWER WRITTEN]"}`;
    })
    .join("\n");

  return `You are an RANZCP MEQ examiner evaluating a complete MEQ paper. Evaluate ALL ${meq.stems.length} stems. Apply strict examiner standards.

MEQ: ${meq.title}
EXAM SOURCE: ${meq.examSource}
TOTAL MARKS AVAILABLE: ${meq.totalMarks}
${stemsText}

══════════════════════════════════════════
EVALUATION INSTRUCTIONS
══════════════════════════════════════════
For point classifications, use ONLY:
- "high_yield" = earns marks at this level
- "moderate" = partially correct or incomplete
- "no_yield" = too vague, generic, or listed without the required justification/explanation
- "zero_mark" = explicitly does not earn marks
- "unsafe" = incorrect or dangerous reasoning

For error types, use ONLY from:
knowledge_gap | command_word_error | poor_justification | poor_explanation | no_debate | wrong_timeframe | unsafe_reasoning | legal_policy_gap | cultural_system_omission | repetition_verbosity | poor_prioritisation

Return ONLY a valid JSON object with EXACTLY this structure (no markdown, no preamble):

{
  "totalMarksEarned": <number 0-${meq.totalMarks}>,
  "totalMarksAvailable": ${meq.totalMarks},
  "passMark": "yes" or "borderline" or "no",
  "stems": [
    {
      "stemNumber": "<e.g. 1.1>",
      "marksEarned": <number>,
      "marksAvailable": <number>,
      "commandWordCompliance": <boolean>,
      "commandWordGateResult": "PASS" or "FAIL — [specific reason with quoted example from candidate answer]",

      "box2_pointClassifications": [
        {
          "candidateText": "<exact phrase or sentence from candidate answer>",
          "yieldLevel": "high_yield" | "moderate" | "no_yield" | "zero_mark",
          "reason": "<one sentence why>"
        }
      ],

      "box2_yieldCallout": "<CONDITIONAL — omit this field (or set null) if commandWordCompliance is true. If this stem has a gated command word (outline_justify or describe_explain) AND the candidate failed it by listing points without the required because-clause or explanation, write one plain-language orange-banner sentence: name the command word and state the exact failure. Example for outline_justify failure: 'This stem used Outline — every point needed because [case-specific reason]. Points listed without a because-clause earn zero marks regardless of content.' Example for describe_explain failure: 'This stem used Describe — every point needed an explanation of mechanism or clinical significance. Listing without explaining earns zero marks.'  Do NOT include this field when commandWordCompliance is true.>",

      "box3_inlineCorrection": "<Take ONLY the candidate's exact answer text. Rewrite it inline. Use ~~strikethrough~~ around phrases that are weak, vague, generic, or lack justification. Immediately after each strikethrough insert [INSERT: specific case-relevant replacement]. Keep strong phrases unchanged with no markup. If a point is correct but needs a because-clause added, show: the point ~~without justification~~ [INSERT: because case-specific reason]. If the answer is empty, return: 'No answer submitted — a full answer would have covered: key points...'.",

      "box4_markingGuide": {
        "totalScorable": "<number — typically marks + 3 or 4 extra>",
        "domainGroups": [
          {
            "domainName": "<exact domain name from marking criteria>",
            "marks": "<number>",
            "markEarningLines": [
              "<Write each line as a complete exam-ready sentence in Outline format: Topic — because case-specific justification. Exactly how a candidate should write it in the exam. Minimum words, maximum meaning. One mark per line. E.g.: Language barrier — because Adil is an Afghan refugee and without a qualified interpreter he cannot understand the proposed investigations>",
              "<another mark-earning line>"
            ]
          }
        ],
        "zeroMarkTraps": ["<specific trap with explanation>"],
        "writingTip": "<One sentence on how to handle this stem under time pressure. E.g.: Write domain heading, then one because-clause sentence per mark — stop when you reach the mark allocation, do not add more.>"
      },

      "box5_feedback": {
        "timeManagement": "<apply 1-mark-per-minute rule specifically>",
        "commandWordError": "<null if compliant, otherwise specific explanation of what was missing>",
        "knowledgeGaps": ["<specific gap 1>", "<specific gap 2>"],
        "otherGaps": ["<e.g. stem signals not used>", "<e.g. no systems thinking>"]
      },

      "box6_conceptOfStem": "<2-3 sentences. What clinical reasoning principle does this stem test? Why does this case appear in the RANZCP exam? What does the examiner want to see a junior consultant demonstrate? Do NOT summarise the marking guide here — explain the underlying concept.>"
    }
  ],
  "overallFeedback": "<2-3 sentences. Honest consultant-to-candidate summary. Quote from answers. No platitudes.>",
  "priorityActions": ["<most impactful change>", "<second most impactful>"],
  "readingGuidance": "<specific revision advice based on identified gaps>"
}`;
}

// ============================================================
// SINGLE-STEM PROMPT BUILDER
// ============================================================
function buildStemPrompt(meq, stem, answer, stemIndex) {
  const cw = COMMAND_WORDS[stem.commandWord];
  const minutesUsed = answer ? Math.round((answer.timeUsedSeconds ?? 0) / 60) : 0;
  const timeNote = minutesUsed <= stem.timeMinutes
    ? `Used ${minutesUsed}/${stem.timeMinutes} minutes`
    : `OVER TIME by ${minutesUsed - stem.timeMinutes} minutes`;

  const domainsText = stem.domains
    .map((d) => `  DOMAIN "${d.name}" (${d.marks} marks):\n${d.keyPoints.map((p) => `    - ${p}`).join("\n")}`)
    .join("\n\n");

  const signalsText = stem.stemSignals.map((s) => `  - ${s}`).join("\n");
  const trapsText = stem.zeroMarkTraps?.length
    ? stem.zeroMarkTraps.map((z) => `  - ${z}`).join("\n")
    : "  None";

  return `You are an RANZCP MEQ examiner. Evaluate this single stem answer strictly.

MEQ: ${meq.title} | STEM ${stem.stemNumber} of ${meq.stems.length}
MARKS: ${stem.marks} | TIME: ${stem.timeMinutes} minutes | ${timeNote}

VIGNETTE:
${stem.vignette}

QUESTION:
${stem.question}

COMMAND WORD: ${cw.label}
Rule: ${cw.instruction}
${cw.gate ? "⚠️ GATE: Non-compliance = ZERO MARKS regardless of content." : "No binary gate."}

STEM SIGNALS:
${signalsText}

MARKING DOMAINS:
${domainsText}

ZERO-MARK TRAPS:
${trapsText}

POST-EXAMINER INTELLIGENCE:
${stem.postExaminerNote}

CANDIDATE'S ANSWER:
${answer?.answerText?.trim() || "[NO ANSWER SUBMITTED]"}

Return ONLY valid JSON — no markdown, no preamble:

{
  "stemNumber": "${stem.stemNumber}",
  "marksEarned": <number 0-${stem.marks}>,
  "marksAvailable": ${stem.marks},
  "commandWordCompliance": <boolean>,
  "commandWordGateResult": "PASS" or "FAIL — [reason]",
  "box2_yieldCallout": "<null or one-sentence orange warning if command word gate failed>",
  "box2_pointClassifications": [
    { "candidateText": "<exact quote>", "yieldLevel": "high_yield|moderate|no_yield|zero_mark", "reason": "<why>" }
  ],
  "box3_inlineCorrection": "<candidate's exact answer rewritten inline with ~~strikethrough~~ and [INSERT: replacement]>",
  "box4_markingGuide": {
    "totalScorable": <number>,
    "domainGroups": [
      { "domainName": "<name>", "marks": <number>, "markEarningLines": ["<+1 exam-ready sentence>"] }
    ],
    "zeroMarkTraps": ["<trap>"],
    "writingTip": "<one sentence on exam technique for this stem>"
  },
  "box5_feedback": {
    "timeManagement": "<1-mark-per-minute analysis>",
    "commandWordError": "<null or specific error>",
    "knowledgeGaps": ["<gap 1>", "<gap 2>"],
    "otherGaps": ["<gap>"]
  },
  "box6_conceptOfStem": "<2-3 sentences on what this stem tests and why it appears in RANZCP exam>"
}`;
}

// ============================================================
// DISPLAY UTILITIES
// ============================================================
const formatTime = (s) => {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

const scoreColor = (pct) =>
  pct >= 75
    ? "text-emerald-700"
    : pct >= 55
    ? "text-amber-600"
    : pct >= 35
    ? "text-orange-600"
    : "text-red-700";

const scoreBg = (pct) =>
  pct >= 75
    ? "bg-emerald-50 border-emerald-200"
    : pct >= 55
    ? "bg-amber-50 border-amber-200"
    : pct >= 35
    ? "bg-orange-50 border-orange-200"
    : "bg-red-50 border-red-200";

const passLabel = (r) =>
  ({
    yes: { text: "Pass standard", cls: "bg-emerald-100 text-emerald-800 border-emerald-300" },
    borderline: { text: "Borderline", cls: "bg-amber-100 text-amber-800 border-amber-300" },
    no: { text: "Below pass mark", cls: "bg-red-100 text-red-800 border-red-300" },
  }[r] ?? { text: r ?? "—", cls: "bg-gray-100 text-gray-700 border-gray-200" });

const cwBadge = (cw) =>
  ({
    list: "bg-sky-50 border-sky-200 text-sky-800",
    outline_justify: "bg-amber-50 border-amber-200 text-amber-900",
    describe_explain: "bg-amber-50 border-amber-200 text-amber-900",
    discuss: "bg-violet-50 border-violet-200 text-violet-900",
    debate: "bg-rose-50 border-rose-200 text-rose-900",
  }[cw] ?? "bg-gray-50 border-gray-200 text-gray-800");

const classificationStyle = (cls) =>
  ({
    high_yield: "bg-emerald-50 border-emerald-200 text-emerald-800",
    moderate: "bg-amber-50 border-amber-200 text-amber-800",
    low_yield: "bg-gray-50 border-gray-200 text-gray-700",
    zero_mark: "bg-red-50 border-red-200 text-red-800",
    unsafe: "bg-red-100 border-red-300 text-red-900 font-semibold",
  }[cls] ?? "bg-gray-50 border-gray-200 text-gray-700");

const classificationLabel = (cls) =>
  ({
    high_yield: "✓ High-yield",
    moderate: "~ Moderate",
    low_yield: "Low-yield",
    zero_mark: "✗ Zero-mark",
    unsafe: "⚠ Unsafe",
  }[cls] ?? cls);

const errorTypeLabel = (t) =>
  ({
    knowledge_gap: "Knowledge gap",
    command_word_error: "Command-word error",
    poor_justification: "Poor justification",
    poor_explanation: "Poor explanation",
    no_debate: "No debate",
    wrong_timeframe: "Wrong timeframe",
    unsafe_reasoning: "Unsafe reasoning",
    legal_policy_gap: "Legal/policy gap",
    cultural_system_omission: "Cultural/system omission",
    repetition_verbosity: "Repetition/verbosity",
    poor_prioritisation: "Poor prioritisation",
  }[t] ?? t);

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function DailyMEQMode() {
  const [phase, setPhase] = useState("list"); // list | attempt_history | mode_select | stem | pathway_select | evaluating | view_key | assessment
  const [selectedMEQ, setSelectedMEQ] = useState(null);
  const [currentAttempt, setCurrentAttempt] = useState(null);
  const [currentStemIndex, setCurrentStemIndex] = useState(0);
  const [stemAnswer, setStemAnswer] = useState("");
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [timerMode, setTimerMode] = useState(null); // "practice" | "exam"
  const [stemStartTime, setStemStartTime] = useState(0);
  const [allAttempts, setAllAttempts] = useState([]);
  const [error, setError] = useState(null);
  const [evalError, setEvalError] = useState(null);
  const [evalElapsed, setEvalElapsed] = useState(0);
  const [evalStemIndex, setEvalStemIndex] = useState(0);
  const [expandedStems, setExpandedStems] = useState({});
  const timerRef = useRef(null);
  const evalTimerRef = useRef(null);
  const autoSubmitFiredRef = useRef(false);
  const autoSubmitHandlerRef = useRef(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [domainFilter, setDomainFilter] = useState("all");
  const [cameFromHistory, setCameFromHistory] = useState(false);

  useEffect(() => {
    setAllAttempts(loadAllAttempts());
  }, []);

  useEffect(() => {
    const requestedId = localStorage.getItem("meq_view_attempt");
    if (!requestedId) return;
    localStorage.removeItem("meq_view_attempt");
    const all = loadAllAttempts();
    const attempt = all.find((a) => a.attemptId === requestedId);
    if (attempt) {
      const meq = MEQ_BANK.find((m) => m.id === attempt.meqId);
      if (meq) {
        setAllAttempts(all);
        setSelectedMEQ(meq);
        setCurrentAttempt(attempt);
        setCameFromHistory(false);
        if (attempt.status === "view_key") {
          setPhase("view_key");
        } else if (attempt.evaluation) {
          setExpandedStems(
            Object.fromEntries(meq.stems.map((s) => [s.stemNumber, true]))
          );
          setPhase("assessment");
        }
      }
    }
  }, []);

  useEffect(() => {
    if (timerActive) {
      timerRef.current = setInterval(() => setTimer((t) => t + 1), 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [timerActive]);

  // Keep auto-submit handler fresh with latest state on every render
  autoSubmitHandlerRef.current = () => {
    if (autoSubmitFiredRef.current || !selectedMEQ || phase !== "stem") return;
    autoSubmitFiredRef.current = true;
    clearInterval(timerRef.current);
    setTimerActive(false);
    const stem = selectedMEQ.stems[currentStemIndex];
    const newAnswer = {
      stemNumber: stem.stemNumber,
      answerText: stemAnswer,
      timeUsedSeconds: timer - stemStartTime,
      submittedAt: new Date().toISOString(),
    };
    const updatedAnswers = [
      ...(currentAttempt?.answers ?? []).filter((a) => a.stemNumber !== stem.stemNumber),
      newAnswer,
    ];
    const finalAttempt = {
      ...currentAttempt,
      answers: updatedAnswers,
      currentStemIndex,
      status: "submitted",
      completedAt: new Date().toISOString(),
    };
    setCurrentAttempt(finalAttempt);
    updateAndPersistAttempt(finalAttempt);
    setPhase("pathway_select");
  };

  useEffect(() => {
    if (phase !== "stem" || timerMode !== "exam" || !selectedMEQ) return;
    const totalSeconds = selectedMEQ.totalTimeMinutes * 60;
    if (timer >= totalSeconds && timer > 0) {
      autoSubmitHandlerRef.current?.();
    }
  }, [timer, phase, timerMode, selectedMEQ]);

  function updateAndPersistAttempt(attempt) {
    const updated = allAttempts
      .filter((a) => a.attemptId !== attempt.attemptId)
      .concat(attempt);
    setAllAttempts(updated);
    persistAllAttempts(updated);
  }

  function startMEQ(meq, existingAttempt = null) {
    clearInterval(timerRef.current);
    setTimerActive(false);
    const attempt = existingAttempt ?? createNewAttempt(meq.id);
    const stemIdx = existingAttempt ? existingAttempt.currentStemIndex : 0;
    const savedAnswer =
      attempt.answers.find(
        (a) => a.stemNumber === meq.stems[stemIdx]?.stemNumber
      )?.answerText ?? "";
    setSelectedMEQ(meq);
    setCurrentAttempt(attempt);
    setCurrentStemIndex(stemIdx);
    setStemAnswer(savedAnswer);
    setTimer(0);
    setStemStartTime(0);
    autoSubmitFiredRef.current = false;
    setError(null);
    setTimerMode("exam");
    setTimerActive(true);
    setPhase("stem");
    if (!existingAttempt) updateAndPersistAttempt(attempt);
  }

  function confirmModeAndStart(mode) {
    setTimerMode(mode);
    setStemStartTime(0);
    setTimerActive(true);
    setPhase("stem");
  }

  function navigateToStem(targetIdx) {
    if (targetIdx === currentStemIndex) return;
    const stem = selectedMEQ.stems[currentStemIndex];
    const savedAnswer = {
      stemNumber: stem.stemNumber,
      answerText: stemAnswer,
      timeUsedSeconds: timer - stemStartTime,
      submittedAt: new Date().toISOString(),
    };
    const updatedAnswers = [
      ...currentAttempt.answers.filter((a) => a.stemNumber !== stem.stemNumber),
      savedAnswer,
    ];
    const updatedAttempt = { ...currentAttempt, answers: updatedAnswers };
    setCurrentAttempt(updatedAttempt);
    updateAndPersistAttempt(updatedAttempt);
    const targetStem = selectedMEQ.stems[targetIdx];
    const existingAnswer =
      updatedAnswers.find((a) => a.stemNumber === targetStem.stemNumber)?.answerText ?? "";
    setCurrentStemIndex(targetIdx);
    setStemAnswer(existingAnswer);
    setStemStartTime(timer);
    setError(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function saveCurrentStemAndAdvance() {
    const stem = selectedMEQ.stems[currentStemIndex];
    const newAnswer = {
      stemNumber: stem.stemNumber,
      answerText: stemAnswer,
      timeUsedSeconds: timer - stemStartTime,
      submittedAt: new Date().toISOString(),
    };
    const updatedAnswers = [
      ...currentAttempt.answers.filter((a) => a.stemNumber !== stem.stemNumber),
      newAnswer,
    ];
    const nextStemIndex = currentStemIndex + 1;
    const isLast = nextStemIndex >= selectedMEQ.stems.length;
    const updatedAttempt = {
      ...currentAttempt,
      answers: updatedAnswers,
      currentStemIndex: isLast ? currentStemIndex : nextStemIndex,
      status: isLast ? "submitted" : "in_progress",
      completedAt: isLast ? new Date().toISOString() : null,
    };
    setCurrentAttempt(updatedAttempt);
    updateAndPersistAttempt(updatedAttempt);
    if (isLast) {
      clearInterval(timerRef.current);
      setTimerActive(false);
      setPhase("pathway_select");
    } else {
      const nextStem = selectedMEQ.stems[nextStemIndex];
      const savedNext =
        updatedAttempt.answers.find(
          (a) => a.stemNumber === nextStem.stemNumber
        )?.answerText ?? "";
      setCurrentStemIndex(nextStemIndex);
      setStemAnswer(savedNext);
      setStemStartTime(timer);
      setError(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  async function submitForEvaluation(attempt) {
    setPhase("evaluating");
    setEvalError(null);
    setEvalStemIndex(0);

    try {
      const stemEvaluations = [];

      for (let i = 0; i < selectedMEQ.stems.length; i++) {
        setEvalStemIndex(i);
        const stem = selectedMEQ.stems[i];
        const answer = attempt.answers.find((a) => a.stemNumber === stem.stemNumber);
        const prompt = buildStemPrompt(selectedMEQ, stem, answer, i);

        const res = await fetch("/api/meq-evaluate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.detail?.message || `Stem ${stem.stemNumber} evaluation failed: ${res.status}`);
        }

        const data = await res.json();
        const text = data.text || "";
        const match = text.match(/\{[\s\S]*\}/);
        if (!match) throw new Error(`No JSON returned for stem ${stem.stemNumber}`);

        let stemResult;
        try {
          stemResult = JSON.parse(match[0]);
        } catch {
          let jsonText = match[0].trimEnd();
          if (jsonText.endsWith(",")) jsonText = jsonText.slice(0, -1);
          let opens = 0, openBrackets = 0;
          for (const ch of jsonText) {
            if (ch === "{") opens++;
            else if (ch === "}") opens--;
            else if (ch === "[") openBrackets++;
            else if (ch === "]") openBrackets--;
          }
          while (openBrackets > 0) { jsonText += "]"; openBrackets--; }
          while (opens > 0) { jsonText += "}"; opens--; }
          stemResult = JSON.parse(jsonText);
        }

        stemEvaluations.push(stemResult);
      }

      const totalMarksEarned = stemEvaluations.reduce((sum, s) => sum + (s.marksEarned ?? 0), 0);
      const totalMarksAvailable = selectedMEQ.totalMarks;
      const pct = Math.round((totalMarksEarned / totalMarksAvailable) * 100);
      const passMark = pct >= 65 ? "yes" : pct >= 50 ? "borderline" : "no";

      const evaluation = {
        totalMarksEarned,
        totalMarksAvailable,
        passMark,
        stems: stemEvaluations,
        overallFeedback: `Scored ${totalMarksEarned}/${totalMarksAvailable} (${pct}%). Review each stem's six-box feedback below for specific corrections.`,
        priorityActions: stemEvaluations
          .flatMap((s) => s.box5_feedback?.knowledgeGaps ?? [])
          .slice(0, 3),
        readingGuidance: stemEvaluations
          .flatMap((s) => s.box5_feedback?.otherGaps ?? [])
          .slice(0, 2)
          .join(" "),
      };

      const evaluatedAttempt = {
        ...attempt,
        status: "evaluated",
        evaluation,
        completedAt: new Date().toISOString(),
      };

      setCurrentAttempt(evaluatedAttempt);
      updateAndPersistAttempt(evaluatedAttempt);
      setExpandedStems(
        Object.fromEntries(selectedMEQ.stems.map((s) => [s.stemNumber, true]))
      );
      setPhase("assessment");
    } catch (err) {
      setEvalError(err.message ?? "Unknown error occurred during evaluation.");
    }
  }

  function goBackToList() {
    clearInterval(timerRef.current);
    setTimerActive(false);
    setPhase("list");
    setSelectedMEQ(null);
    setCurrentAttempt(null);
    setCurrentStemIndex(0);
    setStemAnswer("");
    setTimer(0);
    setStemStartTime(0);
    setTimerMode(null);
    autoSubmitFiredRef.current = false;
    setError(null);
    setCameFromHistory(false);
  }

  function showAttemptHistory(meq) {
    setSelectedMEQ(meq);
    setCurrentAttempt(null);
    setPhase("attempt_history");
  }

  function viewAttempt(attempt) {
    const meq = MEQ_BANK.find((m) => m.id === attempt.meqId);
    if (!meq) return;
    setSelectedMEQ(meq);
    setCurrentAttempt(attempt);
    setCameFromHistory(true);
    if (attempt.status === "view_key") {
      setPhase("view_key");
    } else if (attempt.evaluation) {
      setExpandedStems(
        Object.fromEntries(meq.stems.map((s) => [s.stemNumber, true]))
      );
      setPhase("assessment");
    }
  }

  function goBackToHistory() {
    setCurrentAttempt(null);
    setCameFromHistory(false);
    setPhase("attempt_history");
  }

  function viewLastAssessment(meqId) {
    const meq = MEQ_BANK.find((m) => m.id === meqId);
    const stats = getMEQStats(meqId, allAttempts);
    const latest = [...stats.evaluated].sort(
      (a, b) =>
        new Date(b.completedAt ?? 0).getTime() -
        new Date(a.completedAt ?? 0).getTime()
    )[0];
    if (latest && meq) {
      setSelectedMEQ(meq);
      setCurrentAttempt(latest);
      setExpandedStems(
        Object.fromEntries(meq.stems.map((s) => [s.stemNumber, true]))
      );
      setPhase("assessment");
    }
  }

  // ── ATTEMPT HISTORY PHASE ──────────────────────────────────
  if (phase === "attempt_history" && selectedMEQ) {
    const stats = getMEQStats(selectedMEQ.id, allAttempts);
    const sortedAttempts = [...stats.evaluated].sort(
      (a, b) =>
        new Date(b.completedAt ?? 0).getTime() -
        new Date(a.completedAt ?? 0).getTime()
    );
    return (
      <div className="max-w-3xl mx-auto px-4 py-6">
        <button
          onClick={goBackToList}
          className="text-xs text-gray-400 hover:text-gray-700 transition-colors mb-6 block"
        >
          ← MEQ List
        </button>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{selectedMEQ.title}</h2>
          <p className="text-sm text-gray-500 mt-1">
            {selectedMEQ.topic} · {selectedMEQ.totalMarks} marks · {selectedMEQ.totalTimeMinutes} minutes
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {sortedAttempts.length === 0 ? (
            <div className="text-sm text-gray-400 text-center py-8">No completed attempts yet.</div>
          ) : (
            sortedAttempts.map((attempt, idx) => {
              const pct = Math.round(
                ((attempt.evaluation?.totalMarksEarned ?? 0) / selectedMEQ.totalMarks) * 100
              );
              const attemptNum = sortedAttempts.length - idx;
              const pl = passLabel(attempt.evaluation?.passMark);
              const date = attempt.completedAt
                ? new Date(attempt.completedAt).toLocaleDateString("en-AU", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "—";
              return (
                <button
                  key={attempt.attemptId}
                  onClick={() => viewAttempt(attempt)}
                  className="w-full text-left bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-sm font-bold text-gray-900">Attempt {attemptNum}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold ${pl.cls}`}>
                          {pl.text}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">{date}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-xl font-black ${scoreColor(pct)}`}>
                        {attempt.evaluation?.totalMarksEarned}/{selectedMEQ.totalMarks}
                      </div>
                      <div className="text-xs text-gray-400">{pct}%</div>
                    </div>
                  </div>
                  {attempt.evaluation?.stems?.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-gray-100 flex flex-wrap gap-3 text-xs">
                      {attempt.evaluation.stems.map((s) => (
                        <span
                          key={s.stemNumber}
                          className={s.commandWordCompliance ? "text-emerald-600" : "text-red-500"}
                        >
                          {s.stemNumber}: {s.marksEarned}/{s.marksAvailable}M
                          {s.commandWordCompliance ? " ✓" : " ✗CW"}
                        </span>
                      ))}
                    </div>
                  )}
                </button>
              );
            })
          )}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => startMEQ(selectedMEQ)}
            className="flex-1 py-3 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Start New Attempt
          </button>
          <button
            onClick={goBackToList}
            className="flex-1 py-3 border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-gray-400 transition-colors"
          >
            Back to MEQ List
          </button>
        </div>
      </div>
    );
  }

  // ── MODE SELECT PHASE ──────────────────────────────────────
  if (phase === "mode_select" && selectedMEQ) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10">
        <button onClick={goBackToList} className="text-xs text-gray-400 hover:text-gray-700 transition-colors mb-6 block">
          ← MEQ List
        </button>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{selectedMEQ.title}</h2>
          <p className="text-sm text-gray-500 mt-1">
            {selectedMEQ.totalMarks} marks · {selectedMEQ.totalTimeMinutes} minutes · {selectedMEQ.stems.length} stems
          </p>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose your practice mode</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <button
            onClick={() => confirmModeAndStart("practice")}
            className="text-left p-5 bg-white border-2 border-gray-200 rounded-2xl hover:border-gray-900 hover:shadow-md transition-all group"
          >
            <div className="font-bold text-gray-900 text-base mb-2">Practice Mode</div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Timer runs but nothing is forced at zero. Keep writing and submit when ready.
            </p>
          </button>
          <button
            onClick={() => confirmModeAndStart("exam")}
            className="text-left p-5 bg-gray-900 border-2 border-gray-900 rounded-2xl hover:bg-gray-800 transition-all"
          >
            <div className="font-bold text-white text-base mb-2">Exam Mode</div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Auto-submits when time runs out. Exactly like the real exam.
            </p>
          </button>
        </div>
      </div>
    );
  }

  // ── LIST PHASE ─────────────────────────────────────────────
  if (phase === "list") {
    const DOMAIN_OPTIONS = [
      "All Domains",
      "Governance / Systems / Leadership",
      "Ethics / Professionalism / Legal",
      "Communication / Collaboration",
      "Treatment / Scholarship",
      "Management / Disposition",
      "Formulation / Diagnostic Reasoning",
      "Assessment Maintenance",
    ];
    const meqsWithStats = MEQ_BANK.map((meq) => ({
      meq,
      stats: getMEQStats(meq.id, allAttempts),
    }));
    const filteredMEQs = meqsWithStats.filter(({ meq }) => {
      if (domainFilter !== "all" && meq.primaryDomain !== domainFilter) return false;
      return true;
    });

    return (
      <div className="max-w-3xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Daily MEQ</h1>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.location.href = (import.meta.env.BASE_URL ?? "").replace(/\/$/, "") + "/meq-progress"; }}
            className="text-xs text-gray-400 hover:text-gray-700 transition-colors whitespace-nowrap"
          >
            View Progress →
          </a>
        </div>

        {/* Domain dropdown */}
        <div className="mb-5">
          <select
            value={domainFilter === "all" ? "All Domains" : domainFilter}
            onChange={(e) =>
              setDomainFilter(e.target.value === "All Domains" ? "all" : e.target.value)
            }
            className="w-full sm:w-72 text-sm border border-gray-300 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          >
            {DOMAIN_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {filteredMEQs.length === 0 && (
          <div className="text-center py-12 text-gray-400 text-sm">
            No MEQs available for the selected domain.
          </div>
        )}

        <div className="space-y-3">
          {filteredMEQs.map(({ meq, stats }) => {
            const { status, inProgressAttempt, bestScore, bestPct, evaluated } = stats;
            return (
              <div key={meq.id} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900">{meq.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                        status === "completed"
                          ? "bg-emerald-100 text-emerald-800"
                          : status === "in_progress"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {status === "completed" ? "Completed" : status === "in_progress" ? "In Progress" : "Not Started"}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{meq.primaryDomain}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                      <span><span className="font-semibold text-gray-700">{meq.stems.length}</span> stems</span>
                      <span><span className="font-semibold text-gray-700">{meq.totalMarks}</span> marks</span>
                      <span><span className="font-semibold text-gray-700">{meq.totalTimeMinutes}</span> min</span>
                      {bestScore !== null && bestPct !== null && (
                        <span>Best: <span className={`font-semibold ${scoreColor(bestPct)}`}>{bestScore}/{meq.totalMarks} ({bestPct}%)</span></span>
                      )}
                      {evaluated.length > 1 && (
                        <span>{evaluated.length} attempts</span>
                      )}
                    </div>
                    {status === "completed" && (
                      <button
                        onClick={() => showAttemptHistory(meq)}
                        className="text-xs text-gray-400 hover:text-gray-700 underline mt-2 block"
                      >
                        View history
                      </button>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 flex-shrink-0">
                    {status === "in_progress" && inProgressAttempt ? (
                      <button
                        onClick={() => startMEQ(meq, inProgressAttempt)}
                        className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-semibold hover:bg-amber-700 transition-colors whitespace-nowrap"
                      >
                        Continue MEQ →
                      </button>
                    ) : status === "completed" ? (
                      <>
                        <button
                          onClick={() => startMEQ(meq)}
                          className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
                        >
                          New Attempt
                        </button>
                        <button
                          onClick={() => showAttemptHistory(meq)}
                          className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors whitespace-nowrap"
                        >
                          View History
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => startMEQ(meq)}
                        className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
                      >
                        Start MEQ →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ── STEM PHASE ─────────────────────────────────────────────
  if (phase === "stem" && selectedMEQ && currentAttempt) {
    const stem = selectedMEQ.stems[currentStemIndex];
    const cw = COMMAND_WORDS[stem.commandWord];
    const isLastStem = currentStemIndex === selectedMEQ.stems.length - 1;
    const meqTimeRemaining = Math.max(0, selectedMEQ.totalTimeMinutes * 60 - timer);
    const isTimeUp = meqTimeRemaining === 0;
    const timerColor = meqTimeRemaining <= 120 ? "text-red-600" : "text-emerald-600";

    return (
      <div className="max-w-3xl mx-auto px-4 py-4">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
          <button onClick={goBackToList} className="text-xs text-gray-400 hover:text-gray-700 transition-colors">
            ← MEQ List
          </button>
          <div className="flex items-center gap-3">
            <span className={`text-2xl font-mono font-bold tabular-nums ${timerColor}`}>{formatTime(meqTimeRemaining)}</span>
            {isTimeUp && timerMode === "practice" && (
              <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">Time over — keep writing</span>
            )}
          </div>
        </div>

        {/* Progress stepper */}
        <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-1">
          {selectedMEQ.stems.map((s, idx) => {
            const isDone = idx < currentStemIndex;
            const isCurrent = idx === currentStemIndex;
            return (
              <div key={s.stemNumber} className="flex items-center gap-1 flex-shrink-0">
                {isDone ? (
                  <button
                    onClick={() => navigateToStem(idx)}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all bg-emerald-100 text-emerald-800 border-emerald-300 hover:bg-emerald-200 hover:border-emerald-400 cursor-pointer"
                    title={`Go back to Stem ${s.stemNumber}`}
                  >
                    ✓ {s.stemNumber} ({s.marks}M)
                  </button>
                ) : (
                  <div className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                    isCurrent ? "bg-gray-900 text-white border-gray-900"
                    : "bg-gray-50 text-gray-400 border-gray-200"
                  }`}>
                    {s.stemNumber} ({s.marks}M)
                  </div>
                )}
                {idx < selectedMEQ.stems.length - 1 && <span className="text-gray-300 text-xs">→</span>}
              </div>
            );
          })}
          <span className="text-gray-300 text-xs flex-shrink-0">→</span>
          <div className={`px-2.5 py-1 rounded-lg text-xs font-semibold border flex-shrink-0 ${
            isLastStem ? "border-gray-800 text-gray-800 bg-gray-50" : "bg-gray-50 text-gray-300 border-gray-200"
          }`}>
            Submit
          </div>
        </div>

        {/* MEQ context line */}
        <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-2">
          {selectedMEQ.title} · {selectedMEQ.totalMarks} marks · Stem {stem.stemNumber} of {selectedMEQ.stems.length}
        </div>

        {/* Vignette */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-3">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Clinical Vignette — Stem {stem.stemNumber}
          </div>
          <p className="text-gray-800 text-sm leading-relaxed">{stem.vignette}</p>
        </div>

        {/* Question + command word */}
        <div className={`border rounded-xl p-3 mb-3 ${cwBadge(stem.commandWord)}`}>
          <div className="text-xs font-semibold uppercase tracking-wide mb-1 opacity-60">
            {cw.label} · {stem.marks} marks · {stem.timeMinutes} min
          </div>
          <p className="text-sm font-semibold leading-relaxed">{stem.question.split("\n")[0]}</p>
        </div>

        {/* Answer textarea */}
        <textarea
          value={stemAnswer}
          onChange={(e) => setStemAnswer(e.target.value)}
          autoFocus
          className="w-full h-[420px] p-4 border border-gray-300 rounded-xl text-sm text-gray-800 leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          placeholder="Write your answer here"
        />

        {error && (
          <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>
        )}

        <button
          onClick={saveCurrentStemAndAdvance}
          className={`w-full mt-3 py-3.5 rounded-xl font-semibold text-sm transition-colors ${
            isLastStem
              ? "bg-gray-900 text-white hover:bg-gray-800"
              : "bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white"
          }`}
        >
          {isLastStem
            ? "Submit Full MEQ →"
            : `Save & Next Stem (${selectedMEQ.stems[currentStemIndex + 1]?.stemNumber}) →`}
        </button>

        <p className="text-xs text-gray-400 text-center mt-2">
          {isLastStem
            ? "You will choose how to review your answers after submitting."
            : "Your answer is saved. You cannot return to previous stems after proceeding."}
        </p>
      </div>
    );
  }

  // ── PATHWAY SELECT PHASE ───────────────────────────────────
  if (phase === "pathway_select" && currentAttempt && selectedMEQ) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">{selectedMEQ.title}</h2>
          <p className="text-sm text-gray-500 mt-1">
            {selectedMEQ.stems.length} stems · {selectedMEQ.totalMarks} marks — all answers saved
          </p>
        </div>

        {/* Stem answer preview */}
        <div className="mb-8 space-y-2">
          {selectedMEQ.stems.map((stem) => {
            const ans = currentAttempt.answers.find((a) => a.stemNumber === stem.stemNumber);
            const words = (ans?.answerText ?? "").trim().split(/\s+/);
            const preview = words.slice(0, 20).join(" ");
            const hasMore = words.length > 20;
            return (
              <div key={stem.stemNumber} className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5">
                <div className="text-xs font-semibold text-gray-500 mb-0.5">
                  Stem {stem.stemNumber} · {stem.marks}M
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {preview
                    ? `${preview}${hasMore ? "…" : ""}`
                    : <span className="italic text-gray-400">No answer submitted</span>}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-sm text-gray-600 text-center mb-6 font-medium">
          How would you like to review your answers?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => {
              const vkAttempt = {
                ...currentAttempt,
                status: "view_key",
                completedAt: new Date().toISOString(),
              };
              setCurrentAttempt(vkAttempt);
              updateAndPersistAttempt(vkAttempt);
              setPhase("view_key");
            }}
            className="flex flex-col items-center gap-3 p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-gray-900 hover:shadow-sm transition-all"
          >
            <div className="text-3xl">📋</div>
            <div className="font-bold text-gray-900 text-lg">View Key</div>
            <div className="text-xs text-gray-500 text-center leading-relaxed">
              See the model answer for each stem instantly
            </div>
          </button>

          <button
            onClick={() => submitForEvaluation(currentAttempt)}
            className="flex flex-col items-center gap-3 p-6 bg-gray-900 border-2 border-gray-900 rounded-2xl hover:bg-gray-800 transition-all"
          >
            <div className="text-3xl">🎓</div>
            <div className="font-bold text-white text-lg">Examiner Assessment</div>
            <div className="text-xs text-gray-300 text-center leading-relaxed">
              Receive detailed feedback on your answers — takes 10–15 minutes
            </div>
          </button>
        </div>

        <button
          onClick={goBackToList}
          className="mt-6 text-xs text-gray-400 hover:text-gray-600 transition-colors block mx-auto"
        >
          ← Cancel and go back
        </button>
      </div>
    );
  }

  // ── VIEW KEY PHASE ─────────────────────────────────────────
  if (phase === "view_key" && currentAttempt && selectedMEQ) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-5">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{selectedMEQ.title}</h2>
            <p className="text-sm text-gray-500">{selectedMEQ.examSource} · Model Answer Key</p>
          </div>
          <button
            onClick={cameFromHistory ? goBackToHistory : goBackToList}
            className="text-sm text-gray-400 hover:text-gray-700 flex-shrink-0"
          >
            ← Back
          </button>
        </div>

        {selectedMEQ.stems.map((stem) => {
          const ans = currentAttempt.answers.find((a) => a.stemNumber === stem.stemNumber);
          return (
            <div key={stem.stemNumber} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 bg-gray-50">
                <div className="text-sm font-bold text-gray-900 mb-0.5">
                  Stem {stem.stemNumber} · {stem.marks} mark{stem.marks !== 1 ? "s" : ""}
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {stem.question.split("\n")[0]}
                </p>
              </div>
              <div className="px-5 pb-5 pt-4 space-y-4">
                {/* Your Answer */}
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                    Your Answer
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    {ans?.answerText ? (
                      <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
                        {ans.answerText}
                      </p>
                    ) : (
                      <p className="text-sm text-gray-400 italic">No answer submitted</p>
                    )}
                    {ans && (
                      <div className="text-xs text-gray-400 mt-2">
                        {Math.round((ans.timeUsedSeconds ?? 0) / 60)} min used of {stem.timeMinutes} min
                      </div>
                    )}
                  </div>
                </div>

                {/* Model Answer */}
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                    Model Answer
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 space-y-3">
                    {stem.domains.map((domain) => (
                      <div key={domain.name}>
                        <div className="text-xs font-bold text-emerald-800 mb-1">
                          {domain.name.toUpperCase()} ({domain.marks} mark{domain.marks !== 1 ? "s" : ""})
                        </div>
                        <ul className="space-y-0.5">
                          {domain.keyPoints.map((pt, i) => (
                            <li key={i} className="text-xs text-emerald-900 flex gap-1.5">
                              <span className="flex-shrink-0 mt-0.5">•</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {stem.postExaminerNote && (
                      <div className="pt-2 border-t border-emerald-200">
                        <div className="text-xs font-semibold text-emerald-700 mb-1">Writing tip</div>
                        <p className="text-xs text-emerald-800 leading-relaxed">{stem.postExaminerNote}</p>
                      </div>
                    )}
                    {stem.zeroMarkTraps?.length > 0 && (
                      <div className="pt-2 border-t border-emerald-200">
                        <div className="text-xs font-semibold text-red-600 mb-1">Zero-mark traps</div>
                        <ul className="space-y-0.5">
                          {stem.zeroMarkTraps.map((trap, i) => (
                            <li key={i} className="text-xs text-red-700 flex gap-1.5">
                              <span className="flex-shrink-0">⚠</span>
                              <span>{trap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="flex gap-3 pb-8">
          <button
            onClick={() => startMEQ(selectedMEQ)}
            className="flex-1 py-3 border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-gray-400 transition-colors"
          >
            Retry MEQ
          </button>
          <button
            onClick={goBackToList}
            className="flex-1 py-3 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Next MEQ →
          </button>
        </div>
      </div>
    );
  }

  // ── EVALUATING PHASE ───────────────────────────────────────
  if (phase === "evaluating") {
    if (evalError) {
      return (
        <div className="max-w-3xl mx-auto px-4 py-24 flex flex-col items-center text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Evaluation failed</h2>
          <p className="text-gray-500 text-sm max-w-md mb-6">{evalError}</p>
          <div className="flex gap-3">
            <button
              onClick={() => submitForEvaluation(currentAttempt)}
              className="px-6 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={goBackToList}
              className="px-6 py-2.5 border border-gray-300 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Back to list
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-4">Your answers are saved — you won't lose any work.</p>
        </div>
      );
    }
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 flex flex-col items-center text-center">
        <div className="w-12 h-12 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mb-6" />
        <h2 className="text-xl font-bold text-gray-900 mb-2">Submitting for examiner assessment</h2>
        <p className="text-gray-500 text-sm">
          Reviewing your answers · {selectedMEQ?.stems.length} stems · {selectedMEQ?.totalMarks} marks
        </p>
        <p className="text-gray-400 text-xs mt-3">
          Results typically available within 10–15 minutes
        </p>
        <div className="mt-6 flex flex-col items-center gap-3">
          {selectedMEQ?.stems.map((s, idx) => (
            <div key={s.stemNumber} className="flex items-center gap-2 text-xs">
              {idx < evalStemIndex ? (
                <span className="text-emerald-600 font-bold">✓</span>
              ) : idx === evalStemIndex ? (
                <span className="w-3 h-3 border border-gray-900 border-t-transparent rounded-full animate-spin inline-block" />
              ) : (
                <span className="w-3 h-3 rounded-full border border-gray-200 inline-block" />
              )}
              <span className={idx < evalStemIndex ? "text-emerald-600" : idx === evalStemIndex ? "text-gray-900 font-semibold" : "text-gray-300"}>
                Stem {s.stemNumber} · {s.marks}M
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── ASSESSMENT PHASE ───────────────────────────────────────
  if (phase === "assessment" && currentAttempt?.evaluation && selectedMEQ) {
    const ev = currentAttempt.evaluation;
    const totalPct = Math.round(
      ((ev.totalMarksEarned ?? 0) / (ev.totalMarksAvailable ?? selectedMEQ.totalMarks)) * 100
    );
    const pl = passLabel(ev.passMark);

    return (
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{selectedMEQ.title}</h2>
            <p className="text-sm text-gray-500">{selectedMEQ.examSource} · Full MEQ Assessment</p>
          </div>
          <button
            onClick={cameFromHistory ? goBackToHistory : goBackToList}
            className="text-sm text-gray-400 hover:text-gray-700 flex-shrink-0"
          >
            ← Back
          </button>
        </div>

        {/* Overall score card */}
        <div className={`border rounded-2xl p-6 ${scoreBg(totalPct)}`}>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <div className={`text-6xl font-black ${scoreColor(totalPct)}`}>
                {ev.totalMarksEarned}
                <span className="text-3xl font-bold text-gray-400">/{ev.totalMarksAvailable ?? selectedMEQ.totalMarks}</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">{totalPct}% overall</div>
            </div>
            <div className="text-right space-y-2">
              <span className={`inline-block px-3 py-1.5 rounded-full text-sm font-bold border ${pl.cls}`}>{pl.text}</span>
              <div className="text-xs text-gray-400">{selectedMEQ.stems.length} stems · {selectedMEQ.totalMarks} marks</div>
            </div>
          </div>

          {/* Per-stem mini scores */}
          <div className="mt-4 pt-4 border-t border-black/10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {ev.stems?.map((stemEv) => {
                const p2 = Math.round((stemEv.marksEarned / stemEv.marksAvailable) * 100);
                return (
                  <div key={stemEv.stemNumber} className="bg-white/60 rounded-lg px-3 py-2 text-center">
                    <div className="text-xs text-gray-500 mb-0.5">Stem {stemEv.stemNumber}</div>
                    <div className={`text-lg font-bold ${scoreColor(p2)}`}>{stemEv.marksEarned}/{stemEv.marksAvailable}</div>
                    <div className="text-xs text-gray-400">{p2}%</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Priority actions */}
        {ev.priorityActions?.length > 0 && (
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-2">Priority actions</div>
            <ol className="space-y-1.5">
              {ev.priorityActions.map((a, i) => (
                <li key={i} className="text-sm text-amber-900 flex gap-2">
                  <span className="font-bold flex-shrink-0">{i + 1}.</span>
                  <span>{a}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Per-stem detail sections */}
        {ev.stems?.map((stemEv) => {
          const stemDef = selectedMEQ.stems.find((s) => s.stemNumber === stemEv.stemNumber);
          const stemAns = currentAttempt.answers.find((a) => a.stemNumber === stemEv.stemNumber);
          const p2 = Math.round((stemEv.marksEarned / stemEv.marksAvailable) * 100);
          const isExpanded = expandedStems[stemEv.stemNumber] !== false;

          return (
            <div key={stemEv.stemNumber} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setExpandedStems((p) => ({ ...p, [stemEv.stemNumber]: !isExpanded }))}
                className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors text-left"
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-bold text-gray-900">Stem {stemEv.stemNumber}</span>
                  <span className={`text-xs px-2 py-0.5 rounded border font-medium ${
                    stemEv.commandWordCompliance
                      ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                      : "bg-red-50 border-red-200 text-red-700"
                  }`}>
                    {stemEv.commandWordCompliance ? "✓ CW Pass" : "✗ CW Fail"}
                  </span>
                  {stemEv.errorTypes?.slice(0, 2).map((et) => (
                    <span key={et} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{errorTypeLabel(et)}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className={`text-lg font-black ${scoreColor(p2)}`}>{stemEv.marksEarned}/{stemEv.marksAvailable}</span>
                  <span className="text-gray-400 text-sm">{isExpanded ? "▲" : "▼"}</span>
                </div>
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 space-y-4 border-t border-gray-100">

                  {/* Command word gate failure */}
                  {!stemEv.commandWordCompliance && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-4">
                      <div className="text-xs font-bold text-red-800 mb-1">⚠ Command-word non-compliance</div>
                      <p className="text-xs text-red-700">{stemEv.commandWordGateResult}</p>
                    </div>
                  )}

                  {/* BOX 1 — What the candidate wrote */}
                  {stemAns && (
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                        Box 1 — What you wrote
                      </div>
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
                          {stemAns.answerText || <span className="italic text-gray-400">No answer submitted</span>}
                        </p>
                        <div className="text-xs text-gray-400 mt-2">
                          {Math.round((stemAns.timeUsedSeconds ?? 0) / 60)} min used of {stemDef?.timeMinutes} min
                        </div>
                      </div>
                    </div>
                  )}

                  {/* BOX 2 yieldCallout — orange command-word warning banner (only on gate failures) */}
                  {stemEv.box2_yieldCallout && (
                    <div className="bg-orange-50 border border-orange-300 rounded-lg p-3">
                      <div className="text-xs font-bold text-orange-800 mb-1">⚠ Command-word callout</div>
                      <p className="text-xs text-orange-900">{stemEv.box2_yieldCallout}</p>
                    </div>
                  )}

                  {/* BOX 2 — Point-by-point yield classification */}
                  {stemEv.box2_pointClassifications?.length > 0 && (
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                        Box 2 — Point-by-point yield
                      </div>
                      <div className="space-y-2">
                        {stemEv.box2_pointClassifications.map((p, i) => {
                          const styles = {
                            high_yield: "bg-emerald-50 border-emerald-200 text-emerald-800",
                            moderate: "bg-amber-50 border-amber-200 text-amber-800",
                            no_yield: "bg-gray-100 border-gray-200 text-gray-500 line-through",
                            zero_mark: "bg-red-50 border-red-200 text-red-700 line-through",
                          };
                          const labels = {
                            high_yield: "✓ High yield",
                            moderate: "~ Moderate",
                            no_yield: "✗ No yield",
                            zero_mark: "✗ Zero mark",
                          };
                          return (
                            <div key={i} className={`border rounded-lg px-3 py-2 ${styles[p.yieldLevel] || styles.no_yield}`}>
                              <div className="flex items-start justify-between gap-2">
                                <p className="text-xs flex-1">"{p.candidateText}"</p>
                                <span className="text-xs font-bold flex-shrink-0 whitespace-nowrap">
                                  {labels[p.yieldLevel] || p.yieldLevel}
                                </span>
                              </div>
                              {p.reason && <p className="text-xs opacity-70 mt-0.5">{p.reason}</p>}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* BOX 3 — Inline correction */}
                  {stemEv.box3_inlineCorrection && (
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                        Box 3 — Your answer corrected
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
                        {stemEv.box3_inlineCorrection
                          .split(/(\~\~[^~]+\~\~|\[INSERT:[^\]]+\])/g)
                          .map((part, i) => {
                            if (part.startsWith("~~") && part.endsWith("~~")) {
                              return (
                                <del key={i} className="text-red-400 bg-red-50 px-0.5 rounded decoration-red-400">
                                  {part.slice(2, -2)}
                                </del>
                              );
                            }
                            if (part.startsWith("[INSERT:") && part.endsWith("]")) {
                              return (
                                <span key={i} className="text-teal-700 font-semibold bg-teal-50 px-0.5 rounded">
                                  {part.slice(8, -1)}
                                </span>
                              );
                            }
                            return <span key={i}>{part}</span>;
                          })}
                      </div>
                    </div>
                  )}

                  {/* BOX 4 — Marking guide */}
                  {stemEv.box4_markingGuide && (
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                        Box 4 — Marking guide · {stemEv.box4_markingGuide.totalScorable} scorable points · write {stemDef?.marks} to pass
                      </div>
                      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 space-y-4">

                        {stemEv.box4_markingGuide.writingTip && (
                          <div className="bg-indigo-100 border border-indigo-200 rounded-lg px-3 py-2">
                            <span className="text-xs font-bold text-indigo-800">Exam tip: </span>
                            <span className="text-xs text-indigo-800">{stemEv.box4_markingGuide.writingTip}</span>
                          </div>
                        )}

                        {stemEv.box4_markingGuide.domainGroups?.map((domain, di) => (
                          <div key={di}>
                            <div className="text-xs font-bold text-indigo-700 mb-1.5">
                              {domain.domainName}
                              <span className="font-normal text-indigo-400 ml-1">({domain.marks} marks)</span>
                            </div>
                            <div className="space-y-1.5">
                              {domain.markEarningLines?.map((line, li) => (
                                <div key={li} className="flex gap-2 items-start">
                                  <span className="text-indigo-300 flex-shrink-0 text-xs mt-0.5 font-bold">+1</span>
                                  <p className="text-xs text-indigo-900 leading-relaxed">{line}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}

                        {stemEv.box4_markingGuide.zeroMarkTraps?.length > 0 && (
                          <div className="border-t border-indigo-200 pt-3">
                            <div className="text-xs font-bold text-red-600 mb-1.5">Zero-mark traps</div>
                            {stemEv.box4_markingGuide.zeroMarkTraps.map((trap, ti) => (
                              <div key={ti} className="flex gap-2 items-start">
                                <span className="text-red-400 flex-shrink-0 text-xs mt-0.5">⚠</span>
                                <p className="text-xs text-red-700">{trap}</p>
                              </div>
                            ))}
                          </div>
                        )}

                      </div>
                    </div>
                  )}

                  {/* BOX 5 — Feedback */}
                  {stemEv.box5_feedback && (
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                        Box 5 — Feedback
                      </div>
                      <div className="space-y-2">
                        {stemEv.box5_feedback.timeManagement && (
                          <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                            <div className="text-xs font-semibold text-slate-600 mb-1">⏱ Time management</div>
                            <p className="text-xs text-slate-700">{stemEv.box5_feedback.timeManagement}</p>
                          </div>
                        )}
                        {stemEv.box5_feedback.commandWordError && (
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                            <div className="text-xs font-semibold text-amber-700 mb-1">Command word error</div>
                            <p className="text-xs text-amber-800">{stemEv.box5_feedback.commandWordError}</p>
                          </div>
                        )}
                        {stemEv.box5_feedback.knowledgeGaps?.length > 0 && (
                          <div className="bg-red-50 border border-red-100 rounded-lg p-3">
                            <div className="text-xs font-semibold text-red-700 mb-1">Knowledge gaps</div>
                            <ul className="space-y-1">
                              {stemEv.box5_feedback.knowledgeGaps.map((g, i) => (
                                <li key={i} className="text-xs text-red-700 flex gap-1.5">
                                  <span className="flex-shrink-0">✗</span><span>{g}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {stemEv.box5_feedback.otherGaps?.length > 0 && (
                          <div className="bg-orange-50 border border-orange-100 rounded-lg p-3">
                            <div className="text-xs font-semibold text-orange-700 mb-1">Other gaps</div>
                            <ul className="space-y-1">
                              {stemEv.box5_feedback.otherGaps.map((g, i) => (
                                <li key={i} className="text-xs text-orange-700 flex gap-1.5">
                                  <span className="flex-shrink-0">→</span><span>{g}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* BOX 6 — Concept of the stem */}
                  {stemEv.box6_conceptOfStem && (
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                        Box 6 — What this stem is testing
                      </div>
                      <div className="bg-violet-50 border border-violet-100 rounded-lg p-4">
                        <p className="text-sm text-violet-900 leading-relaxed">{stemEv.box6_conceptOfStem}</p>
                        {stemDef?.postExaminerNote && (
                          <div className="mt-3 pt-3 border-t border-violet-200">
                            <div className="text-xs font-semibold text-violet-600 mb-1">RANZCP post-examiner intelligence</div>
                            <p className="text-xs text-violet-800">{stemDef.postExaminerNote}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                </div>
              )}
            </div>
          );
        })}

        {/* Overall feedback */}
        {ev.overallFeedback && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Examiner summary</div>
            <p className="text-sm text-gray-800 leading-relaxed">{ev.overallFeedback}</p>
          </div>
        )}

        {/* Reading guidance */}
        {ev.readingGuidance && (
          <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
            <div className="text-xs font-bold text-violet-700 uppercase tracking-wide mb-2">Revision focus</div>
            <p className="text-sm text-violet-900 leading-relaxed">{ev.readingGuidance}</p>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-3 pb-8">
          <button
            onClick={() => startMEQ(selectedMEQ)}
            className="flex-1 py-3 border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-gray-400 transition-colors"
          >
            Retry MEQ
          </button>
          <button
            onClick={goBackToList}
            className="flex-1 py-3 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Next MEQ →
          </button>
        </div>
      </div>
    );
  }

  return null;
}
