// @ts-nocheck
import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";

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
  {
    id: "meq_004",
    title: "Aaliyah — Postpartum Psychosis, Cultural Safety and System Failure",
    case: "Aaliyah, 24, Aboriginal woman, 10 days postpartum",
    examSource: "Generated — Ethics / Professionalism / Legal",
    topic: "Postpartum psychosis with hypertensive crisis, capacity and treatment refusal, Aboriginal cultural safety, discharge ethics, and bed unavailability",
    primaryDomain: "Ethics / Professionalism / Legal",
    totalMarks: 30,
    totalTimeMinutes: 30,
    stems: [
      {
        stemNumber: "1.1",
        vignette: "Aaliyah is a 24-year-old Aboriginal woman, 10 days postpartum after an emergency caesarean section for pre-eclampsia. She presents to ED with her aunt and partner after three nights of almost no sleep. She is restless, elated, irritable and says the baby has been 'chosen by old spirits to heal the family'. She has been repeatedly entering the special care nursery despite being asked to wait for staff. She has stopped taking labetalol because she believes it is 'poisoning her milk'. Her blood pressure is 168/104. She denies suicidal ideation but says she may need to 'take the baby away before the hospital interferes'.",
        question: "Outline — list and justify your immediate assessment priorities. A list without because-clauses specific to this case will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "outline_justify",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Medical before psychiatric — BP 168/104 postpartum means organic aetiology (eclampsia, PRES, delirium, infection) must be excluded before diagnosing functional postpartum psychosis",
          "Infanticidal risk — 'take the baby away before the hospital interferes' is not a discharge request; it is a risk statement requiring mandatory child protection notification now",
          "Cultural signal — 'chosen by spirits' requires Aboriginal Liaison Officer involvement before pathologising; misattributing cultural belief as psychosis is a zero-mark clinical error",
          "Parenting capacity is a distinct priority — the question is not only diagnosis but whether she can safely care for, feed and respond to the baby right now",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Assess immediate maternal physical risk — because severe postpartum hypertension after pre-eclampsia raises concern for hypertensive emergency, eclampsia, stroke, headache, visual symptoms or seizures that require urgent obstetric review in parallel with psychiatric assessment",
              "Assess medical contributors to mental state change — because postpartum agitation and psychosis-like symptoms may be caused or worsened by delirium, infection, anaemia, thyroid disturbance, medication effects, substance use or metabolic disturbance, and distinguishing these from functional postpartum psychosis changes management",
              "Clarify postpartum psychosis and bipolar features — because reduced sleep, elation, irritability, grandiose and spiritual beliefs, and disinhibited boundary breaches shortly postpartum are high-risk features of postpartum psychosis or mania requiring urgent psychiatric formulation",
              "Assess risk to the baby — because Aaliyah has stated she may take the baby away and has repeatedly entered the nursery against staff instruction, constituting an active and escalating risk to the infant that triggers mandatory child protection notification",
              "Assess risk to self — because postpartum psychosis carries elevated risk of suicide, accidental harm and severe self-neglect even when suicidal ideation is denied, particularly in the context of severe sleep deprivation and command-like experiences",
              "Assess risk to others and staff — because escalating irritability, suspiciousness and repeated boundary breaches in the nursery create risk to staff during any attempt to prevent her leaving with the baby, requiring a safety plan for clinical staff",
              "Assess capacity for each key decision — because refusal of antihypertensive medication and the possibility of her leaving with the baby each require decision-specific assessment of understanding, retention, weighing and communication, separately from a general incapacity assumption",
              "Seek collateral urgently from partner, aunt and maternity staff — because premorbid functioning, previous episodes, sleep deprivation, substance use, trauma history, cultural context and current supports can only be established from people who know her",
              "Assess parenting functioning and attachment context — because the immediate clinical question is not only diagnosis but whether Aaliyah can safely care for, feed, protect and respond to the baby, which requires specific assessment beyond her psychiatric state",
              "Use culturally safe engagement from the outset — because she is an Aboriginal woman in a medical system and involving her aunt, Aboriginal liaison staff or cultural support may improve trust, reduce coercion and improve the accuracy of assessment",
              "Review medication, breastfeeding and obstetric history — because treatment planning must account for labetalol refusal, breastfeeding status, caesarean recovery, pain, sleep deprivation and medication safety for both mother and infant",
              "Clarify legal and safeguarding context — because involuntary assessment or treatment, prevention of absconding with the baby and child protection duties may become necessary if risk is imminent, and understanding the applicable framework early prevents delay",
            ],
          },
        ],
        zeroMarkTraps: [
          "Writing 'do MSE, risk assessment and collateral' without case-specific justification — generic assessment lists without because-clauses score zero",
          "Ignoring the BP 168/104 and proceeding directly to psychiatric management — the medical-psychiatric interface is the defining feature of this stem",
          "Treating 'chosen by spirits' as self-evidently psychotic without noting the requirement to assess it within Aboriginal cultural context",
          "Ignoring the baby entirely or listing 'risk to baby' without naming the specific behaviour (nursery entry, stated intent to remove) as the justification",
        ],
        postExaminerNote: "High-scoring candidates identified medical risk, infant safety and cultural engagement as parallel priorities rather than a sequential checklist. Candidates who listed parenting capacity as a distinct priority — separate from psychiatric diagnosis — and who named risk to staff from nursery confrontation demonstrated the breadth expected at consultant level. Generic answers scored in the lower range.",
      },
      {
        stemNumber: "1.2",
        vignette: "After assessment, you consider postpartum psychosis with possible bipolar disorder, but the obstetric registrar is concerned about ongoing hypertensive risk and possible medical contributors. Aaliyah refuses blood tests, urine testing and antihypertensive medication. She says she will only speak with her aunt present and becomes suspicious when staff ask about the baby's safety. The maternity team asks whether she has capacity to refuse medical treatment and whether she can leave hospital.",
        question: "Describe — list and explain how you would approach capacity, medical treatment refusal and immediate management. A list without explanation will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Capacity is decision-specific — refusing blood tests and refusing antihypertensives are separate decisions requiring separate assessments; bundling them is a clinical error",
          "Optimise capacity before concluding incapacity — involving the aunt, plain language, and addressing fears may restore cooperation before legal frameworks are invoked",
          "A mental health order does not automatically authorise antihypertensive medication — this is the hidden legal trap",
          "Treatment initiation is a scorable management step — the stem asks about immediate management, not just legal frameworks",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Capacity is decision-specific and time-specific — because Aaliyah may have capacity for some decisions but not for refusing urgent antihypertensive treatment or leaving hospital with the baby; each refusal must be assessed individually rather than applying a blanket incapacity finding",
              "Explain the proposed tests and treatment in plain understandable language before assessing capacity — because capacity cannot be properly assessed unless she has first been given comprehensible information about hypertension, blood tests, urine tests and the consequences of refusal; this step is required before concluding she cannot weigh the decision",
              "Assess all four components: understanding, retention, weighing and communication — because psychosis, mania, fear or cultural mistrust may impair her ability to weigh immediate maternal and infant risks while leaving other components intact; the specific impaired component determines what can be treated as incapacitous",
              "Optimise capacity before concluding incapacity — because involving her aunt, Aboriginal liaison staff, a calm setting, repeated plain-language explanation and addressing her specific fear that labetalol is poisoning her milk may restore cooperation and should be attempted before invoking emergency or compulsory provisions",
              "Separate disagreement from incapacity — because refusal alone does not prove incapacity; the key clinical and legal question is whether her reasoning is driven by a delusional belief, severe mania or genuine misunderstanding rather than an informed autonomous choice",
              "Coordinate urgent obstetric and medical management jointly — because psychiatric assessment and admission should not displace the obstetric team's responsibility for treating severe postpartum hypertension; both streams must proceed in parallel with shared clinical communication",
              "Consider emergency treatment pathways if she lacks capacity and risk is serious — because if she cannot weigh the risks of untreated severe hypertension, urgent treatment may be justified under local consent, guardianship or emergency provisions rather than waiting for voluntary agreement",
              "Consider mental health legislation if criteria are met — because postpartum psychosis with impaired judgement and active risk of harm to herself or the baby may require involuntary assessment or treatment using the least restrictive option available in the jurisdiction",
              "Provide immediate containment and observation — because the risk of her attempting to leave or remove the baby requires safe staffing levels, environmental controls such as limiting her access to the nursery, and a clear escalation plan agreed across maternity, ED and mental health teams",
              "Start treatment for probable postpartum psychosis or mania — because sleep restoration, antipsychotic medication and mood stabiliser planning are clinically indicated and should not be deferred while legal and capacity questions are being resolved; medication choice must account for breastfeeding and obstetric factors",
              "Avoid unnecessary confrontation or coercion — because culturally safe, trauma-informed negotiation with the aunt present may reduce escalation, preserve therapeutic alliance and reduce the need for compulsory intervention",
              "Document reasoning carefully and contemporaneously — because capacity findings, the basis for any refusal override, the legal authority used, the baby-safety steps taken and the medical risk level must all be recorded in real time to be defensible",
            ],
          },
        ],
        zeroMarkTraps: [
          "Stating Aaliyah lacks capacity because she has a diagnosis of psychosis — capacity is decision-specific and must be assessed through all four components, not assumed from a diagnostic label",
          "Stating her refusal must be respected because she is an adult — failing to apply the weighing component in the context of a delusional belief driving the medication refusal",
          "Applying a mental health order as though it automatically authorises antihypertensive medication — conflating psychiatric treatment authority with the scope of medical treatment authority",
          "Addressing legal frameworks only without naming treatment initiation as a concurrent management step",
        ],
        postExaminerNote: "The central examiner trap was capacity equals diagnosis. Candidates who named the preparation step — explaining the information before assessing capacity — and who identified treatment initiation as a parallel management obligation alongside legal frameworks scored in the upper range. Candidates who provided a legal framework list without addressing optimisation, treatment or documentation scored in the lower range.",
      },
      {
        stemNumber: "1.3",
        vignette: "Aaliyah's partner tells you privately that she has previously become 'high and unstoppable' after periods of little sleep. He asks you not to tell her aunt because he is worried the family will blame him. The aunt says the family can keep Aaliyah and the baby safe at home with cultural support and asks for discharge today. Nursing staff report that Aaliyah tried to remove the baby from the nursery an hour ago, saying she had received a sign to 'hide him from doctors'.",
        question: "Discuss — list and debate the competing ethical, cultural, family and safety issues in deciding whether Aaliyah can be discharged. You must name the tensions explicitly and take a defensible consultant position. (8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "This is a Discuss question — listing tensions without debating both sides and taking a position does not achieve the standard",
          "The command psychotic experience ('received a sign') is the hinge point — it changes the risk from theoretical to immediate and is the reason family support cannot safely substitute for clinical supervision",
          "Medical risk vs psychiatric disposition is a distinct scorable tension — untreated hypertension makes discharge unsafe independently of the psychiatric picture",
          "Alliance vs compulsory care is a distinct scorable tension — involuntary care in an Aboriginal patient carries a specific cultural and historical weight that must be named",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Autonomy vs safety — Aaliyah has a right to refuse care, but this right is limited if postpartum psychosis or mania impairs her capacity and creates foreseeable risk to herself or the baby; the tension is between respecting her stated wishes and preventing harm she may not currently be able to anticipate",
              "Cultural respect vs clinical risk — the spiritual belief that the baby is chosen should not be automatically pathologised, and Aboriginal family-led care has genuine cultural legitimacy; however, this specific belief has already driven unsafe behaviour — attempted removal of the baby — making it clinically significant beyond its content alone",
              "Least restrictive care vs foreseeable harm — home with family is less restrictive and ordinarily preferable, but the active attempt to remove the baby from the nursery within the last hour means the risk is immediate and not theoretical; the least restrictive option must still be able to contain the identified risk",
              "Family support vs limits of family containment — the aunt and partner are protective resources who should be actively involved in care, but they may not be able to manage severe insomnia, uncontrolled hypertension, acute psychosis or sudden impulsive behaviour driven by a command-like experience without clinical backup",
              "Confidentiality vs use of collateral — the partner's disclosure of prior hypomanic or manic episodes is clinically relevant to diagnosis and risk formulation and should inform care planning; his request for confidentiality should be respected as far as possible, but cannot override the obligation to assess and manage the risk to the infant",
              "Partner's fear vs patient safety — the partner's request not to tell the aunt deserves sensitivity, but the consultant must not collude with secrecy in a way that compromises the safety plan or misleads the family about Aaliyah's risk level",
              "Maternal-infant bonding vs child protection — keeping mother and baby together supports bonding, breastfeeding and recovery and should be the default; the baby's immediate safety and supervision needs may require controlled rather than unrestricted contact if the mother is acutely psychotic with command experiences directing infant removal",
              "Medical risk vs psychiatric disposition — discharge is unsafe not only because of postpartum psychosis but because untreated severe postpartum hypertension independently risks maternal stroke or eclampsia; the medical instability is a separate ground for continued hospital care beyond the psychiatric presentation",
              "Alliance vs compulsory care — using involuntary psychiatric care may damage trust and therapeutic alliance, and carries particular weight for an Aboriginal woman given the history of coercive institutional practice; however, failing to intervene after an active attempt to remove the baby is a foreseeable harm that cannot be avoided by preserving alliance alone",
              "A defensible consultant position is not to discharge today — because there is active infant risk from a command-like psychotic experience, impaired judgement, untreated medical risk, and insufficient evidence that home supports can provide the clinical supervision required to contain the risk safely overnight",
              "Refusal of discharge must be paired with active cultural engagement — because declining to discharge Aaliyah should be accompanied by involving the aunt in the admission, engaging Aboriginal liaison, explaining the reasons transparently and finding ways to preserve family and cultural support within the hospital setting",
              "Safeguarding escalation is required regardless of the discharge decision — because the infant's exposure to risk from a mother with active command psychotic experiences directing infant removal requires formal child protection notification whether Aaliyah is admitted or discharged",
            ],
          },
        ],
        zeroMarkTraps: [
          "Listing ethical principles without naming the specific tensions as they apply to Aaliyah, the infant, the aunt and the partner — 'tension between autonomy and beneficence' without case-specific content scores zero for that line",
          "Failing to name the command psychotic experience as the specific mechanism that changes the risk from theoretical to immediate",
          "Concluding that discharge is appropriate because the family has offered support, without addressing the nursery removal attempt that occurred within the last hour",
          "Omitting either the medical risk tension or the alliance vs compulsory care tension — both are distinct scorable debate points in this case",
        ],
        postExaminerNote: "Candidates who named the medical risk as a separate ground for continued admission — independent of the psychiatric picture — and who explicitly addressed the alliance vs compulsory care tension in the Aboriginal context scored in the upper range. Candidates who addressed confidentiality and cultural respect but concluded discharge was acceptable because the family offered support, without engaging the command experience, did not achieve the standard.",
      },
      {
        stemNumber: "1.4",
        vignette: "There are no mother–baby psychiatric beds available in your state tonight. The adult inpatient unit will accept Aaliyah but not the baby. The maternity unit says they cannot provide one-to-one supervision overnight. The bed manager pressures you to 'make a decision quickly' because ED is overcrowded. A junior registrar asks whether they can document that the family declined admission and discharge Aaliyah against medical advice.",
        question: "Describe — list and explain your consultant-level management plan for safe disposition, documentation and system escalation. A list without explanation will not be awarded any marks. (6 marks | 6 minutes)",
        commandWord: "describe_explain",
        marks: 6,
        timeMinutes: 6,
        stemSignals: [
          "No MBU bed does not end the clinical obligation — it triggers a system escalation sequence, not a discharge decision",
          "AMA documentation is clinically inaccurate and legally dangerous when the patient likely lacks capacity — the junior registrar's suggestion must be corrected explicitly",
          "Bed manager pressure is a governance issue to be documented and escalated, not a clinical instruction to be followed",
          "Baby-safety plan and review arrangements are distinct scorable steps — not just psychiatric admission logistics",
        ],
        domains: [
          {
            name: "Award up to 6 marks from the following scorable points",
            marks: 6,
            keyPoints: [
              "State clearly that unsafe discharge is not acceptable because of bed pressure — because resource scarcity does not lower the standard of care when there is foreseeable maternal and infant harm; the absence of an ideal placement does not make discharge safe",
              "Escalate to senior hospital leadership, duty executive and bed management — because the absence of a mother-baby bed is a system-level problem that requires executive risk ownership and cannot be resolved by the on-call registrar alone; escalation creates a documented record that the gap was identified and reported",
              "Pursue the safest available placement actively — because options may include maternity ward with enhanced psychiatric observation and support, adult mental health unit with planned supervised baby contact, transfer to another mother-baby unit interstate, or continued high-dependency medical setting if hypertension remains uncontrolled; each option must be actively explored and documented",
              "Maintain obstetric and medical responsibility until Aaliyah is medically stable — because severe postpartum hypertension and possible eclampsia risk require ongoing maternity and medical management even if psychiatric detention proceeds; the medical team cannot hand over clinical responsibility until the physical risk is controlled",
              "Arrange an immediate baby-safety plan — because the infant requires safe supervision independent of the psychiatric disposition decision; this includes paediatric or maternity nursing involvement, controlled and supervised contact between mother and baby, family involvement where safe, and a clear plan for what happens if Aaliyah attempts to access the baby unsupervised overnight",
              "Use the least restrictive legal framework but do not avoid compulsory care if required — because voluntary care is preferable and should be offered first, but involuntary assessment or treatment is appropriate if Aaliyah lacks capacity and the risk to her or the infant is imminent; the legal authority used must be documented",
              "Correct the junior registrar's AMA suggestion and document that correction — because against-medical-advice documentation requires the patient to have capacity to refuse admission; Aaliyah likely lacks capacity in the context of active postpartum psychosis with a command delusion directing infant removal, making AMA documentation legally inaccurate and clinically dangerous",
              "Document contemporaneously: capacity findings, risk formulation, legal basis, escalation attempts and the bed manager's pressure — because decisions about detention, baby contact, treatment refusal and discharge refusal must be transparent and reviewable, and the record must show that operational pressure was not the driver of any clinical decision",
              "Communicate a shared plan to all stakeholders — because maternity, paediatrics, mental health nursing, Aboriginal liaison, security if required, the family and the registrar all need to know the overnight plan, their specific roles, and the escalation triggers",
              "Plan active review and safe handover — because overnight deterioration, medication response, blood pressure trends, sleep, breastfeeding and baby contact all require active clinical reassessment and cannot be left to nursing observation alone; the handover must specify who reviews Aaliyah and when",
            ],
          },
        ],
        zeroMarkTraps: [
          "Following or not correcting the junior registrar's AMA suggestion — this is both clinically inaccurate and legally dangerous when capacity is likely absent",
          "Treating the absence of an MBU bed as the endpoint of the disposition process rather than the trigger for escalation",
          "Responding to bed manager pressure by expediting discharge without documenting the pressure or escalating it to senior leadership",
          "Failing to name a baby-safety plan as a distinct step — the infant's overnight supervision is not covered by the psychiatric admission decision alone",
        ],
        postExaminerNote: "Candidates who corrected the AMA error explicitly, named a baby-safety plan as a distinct action, and described system escalation including documenting bed manager pressure demonstrated consultant-level thinking. Candidates who listed 'admit to psychiatry' and 'document' without addressing the governance layer, the baby-safety plan, the medical handover or the review arrangement scored in the lower range.",
      },
    ],
  },
  {
    id: "meq_005",
    title: "Mason — Inpatient Near-Miss, Observation Failure and Governance",
    case: "Mason, 31, voluntary inpatient, depression and alcohol use",
    examSource: "Generated — Governance / Systems / Leadership",
    topic: "Inpatient near-miss suicide attempt following observation reduction during a short-staffed shift; consultant response, legal status, governance review, M&M preparation and complaint management",
    primaryDomain: "Governance / Systems / Leadership",
    totalMarks: 28,
    totalTimeMinutes: 28,
    stems: [
      {
        stemNumber: "1.1",
        vignette: "Mason is a 31-year-old man admitted voluntarily three days ago with severe depression, daily alcohol use and escalating suicidal thoughts after separation from his partner. He has been placed on close observations overnight after telling nursing staff he 'would not make it to the weekend'. This morning you are told he was found in the bathroom with a torn bedsheet around his neck. He was physically unharmed. The night shift was short staffed, and his observations had been reduced from arm's length to 15-minute checks by the overnight registrar because of the staffing shortage. The registrar is not on shift today. Two agency nurses who were on overnight are not familiar with the ward observation policy.",
        question: "Outline — list and justify your immediate consultant response to this incident. A list without because-clauses specific to this case will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "outline_justify",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Attend in person — the consultant's physical presence is the first clinical obligation; delegating the initial response is not appropriate",
          "Observation reduction is the clinical hinge — who made the decision, what information was available, and what escalation pathway was followed must be established immediately",
          "The overnight farewell message to the ex-partner is clinically material — it must be obtained and incorporated into the risk formulation regardless of what Mason says now",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Attend the ward in person immediately — because a near-miss inpatient suicide attempt requires the senior clinician's physical presence to take clinical responsibility, conduct a direct assessment, and provide visible leadership to a distressed nursing team",
              "Physically assess Mason for injury — because strangulation with a bedsheet can cause carotid injury, petechiae, airway compromise, or neurological change that may not be immediately apparent, and medical review must precede psychiatric assessment",
              "Restore arm's length or one-to-one observations immediately — because the reduction to 15-minute observations was clinically unsafe given his stated intent the previous night, and the near-miss confirms the original risk level was underestimated; the observation level cannot remain at its current setting pending review",
              "Conduct a ligature-point audit and remove materials from Mason's environment — because bedsheets and other accessible ligature materials must be secured before Mason returns to his room, and the bathroom where the attempt occurred requires an environmental safety review",
              "Obtain the overnight message to the ex-partner as clinical collateral — because 'Tell the kids I'm sorry' is a farewell communication constituting escalating pre-suicidal intent; this collateral must be documented and incorporated into the risk formulation regardless of what Mason currently says about his state of mind",
              "Review the observation reduction decision and document who made it — because changing from arm's length to 15-minute observations during a short-staffed shift with agency nurses unfamiliar with the observation policy is a clinical decision that must be examined, and the rationale, information available, and escalation pathway must be recorded contemporaneously",
              "Brief and support the nursing staff — because the agency nurses and the junior nurse who felt unable to challenge the registrar require immediate acknowledgement of what occurred, reassurance about the review process, and clear guidance about the current management plan",
              "Notify the on-call consultant or clinical director — because a near-miss inpatient suicide attempt during a short-staffed shift is a critical incident requiring immediate senior clinical oversight and governance notification, which the ward registrar cannot manage alone",
              "Assess for alcohol withdrawal as a contributing factor — because Mason has daily alcohol use and an abrupt reduction in intake on admission may have contributed to agitation, altered judgement, or impaired sleep overnight; a Ciwa-Ar assessment and alcohol management plan must be initiated",
              "Complete an urgent post-incident suicide risk assessment — because the escalating ideation over three days, the farewell message, the method used, and his current denial of intent require a structured reassessment of risk level that cannot rely on his verbal report alone",
              "Open disclosure principles should be considered at an appropriate time — because this was a serious inpatient safety event and the service may have contributed to harm through the observation reduction",
            ],
          },
        ],
        zeroMarkTraps: [
          "Delegating the initial consultant response to the registrar — consultant attendance is required for a near-miss critical incident",
          "Accepting Mason's current denial of suicidal intent without incorporating the farewell message and the method used into the risk formulation",
          "Focusing only on Mason's immediate safety without addressing the observation reduction decision and the staffing context that created the near-miss",
        ],
        postExaminerNote: "Candidates who immediately named the farewell text message as a risk signal independent of Mason's current denial, and who identified the observation reduction and agency staffing as the governance issues requiring simultaneous attention, demonstrated consultant-level breadth. Candidates who only addressed Mason's immediate clinical management without the governance layer scored in the lower range.",
      },
      {
        stemNumber: "1.2",
        vignette: "Mason is now angry and ashamed. He says he only agreed to admission because he thought he would be treated respectfully, but he now wants to leave immediately. He denies current suicidal intent but refuses to discuss the attempt, saying, 'You people made it worse.' His ex-partner has phoned the ward and reports that Mason sent her a message last night saying, 'Tell the kids I'm sorry.' The registrar asks whether Mason can remain voluntary.",
        question: "Describe — list and explain your approach to Mason's ongoing risk, legal status and management on the ward. A list without explanation will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Denial after a near-lethal attempt is a common clinical finding — it does not reduce the risk formulation; the farewell message and the method used remain in the clinical picture",
          "Alliance rupture is a clinical problem requiring engagement before legal status discussion — confronting voluntary status before acknowledging his anger is likely to escalate rather than resolve the situation",
          "The ex-partner's collateral is legally and clinically material — it cannot be set aside because Mason has not consented to its use in the risk assessment",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Take the farewell text message seriously despite current denial — explain that denial of suicidal intent after a near-lethal attempt is a common clinical finding and does not constitute a change in risk level; the combination of a three-day escalation, a farewell message to his children, and a near-lethal method means the risk formulation cannot rely on verbal denial alone",
              "Engage the alliance rupture before discussing legal status — explain that Mason's statement 'you people made it worse' may reflect shame, therapeutic rupture, or a genuine experience of care failure; validating his anger without conceding that discharge is safe is more likely to rebuild cooperation than an immediate discussion of involuntary detention",
              "Assess capacity to make the decision to leave — explain that Mason's acute distress, shame, and anger in the immediate aftermath of a near-lethal attempt may impair his ability to weigh the consequences of discharge; capacity for this specific decision must be assessed before determining whether his request to leave can be granted as a voluntary patient",
              "Consider mental health legislation if criteria are met — explain that if Mason lacks capacity or meets criteria for imminent serious risk following a near-lethal attempt, the least restrictive legal provision available in the jurisdiction should be applied to retain him for assessment and treatment; the near-miss and the farewell message constitute significant evidence of risk",
              "Incorporate the ex-partner's collateral into the risk and legal formulation — explain that she has provided clinically relevant information about a farewell communication, and the treating team is entitled to incorporate collateral evidence into a risk assessment; Mason's refusal to discuss the attempt does not prevent the use of information already provided",
              "Maintain arm's length or one-to-one observation until the post-incident assessment is complete — explain that following a near-lethal attempt the observation level cannot be safely reduced until a documented clinical review has concluded that risk is lower; the current denial is insufficient justification for any reduction",
              "Begin treatment for depression and manage alcohol withdrawal — explain that Mason's severe depression and daily alcohol use have not received specific clinical management; initiating appropriate pharmacological treatment and an alcohol management plan is a clinical obligation that should run in parallel with risk management, not be deferred until risk is resolved",
              "Involve the ex-partner in the safety planning with Mason's consent — explain that she has demonstrated both concern and access to clinically relevant information; with his consent she may be a protective resource, and her concerns about the children and his welfare should be incorporated into the safety and discharge planning as it develops",
              "Address the children's welfare as a distinct clinical consideration — explain that Mason's farewell message naming the children creates a duty to consider their safety and welfare; if there are child protection concerns related to Mason's risk and the access arrangements, these must be assessed separately from his individual management plan",
              "Document the post-incident risk assessment contemporaneously and comprehensively — explain that the clinical reasoning for maintaining admission, the legal authority if compulsory care is used, the observation level, and the response to Mason's request to leave must all be documented in real time to be clinically and legally defensible",
              "Develop a collaborative safety plan with Mason — because coercion alone may worsen shame and disengagement, and a plan he has contributed to is more likely to be honoured",
              "Review bathroom access, leave conditions and remaining ligature points — because the ward environment has already failed to contain risk once and must be specifically reassessed, not assumed safe",
            ],
          },
        ],
        zeroMarkTraps: [
          "Accepting Mason's denial of suicidal intent as sufficient to support voluntary discharge after a near-lethal attempt the same morning",
          "Discussing legal status before engaging the alliance rupture — 'you people made it worse' signals a therapeutic crisis that must be acknowledged before any coercive discussion",
          "Ignoring the ex-partner's collateral because Mason has not explicitly consented to its use in the current assessment",
        ],
        postExaminerNote: "Candidates who identified alliance repair as a clinical precondition for any useful legal status discussion, and who named the farewell text message as evidence that overrides the current verbal denial, performed in the upper range. Candidates who moved immediately to 'use the Mental Health Act' without addressing engagement, capacity assessment, or the treatment of the underlying depression and alcohol withdrawal scored in the lower range.",
      },
      {
        stemNumber: "1.3",
        vignette: "The nurse unit manager tells you there were two agency nurses on overnight, both unfamiliar with the observation policy. A junior nurse says she was uncomfortable with reducing Mason's observations but did not feel able to challenge the registrar. The hospital bed manager is requesting Mason be transferred to a lower-acuity unit because the acute ward is full and 'he has already been medically cleared'.",
        question: "Discuss — list and debate the competing clinical, staff-safety, governance and bed-management issues in deciding Mason's disposition. You must name the tensions explicitly and take a defensible consultant position. (7 marks | 7 minutes)",
        commandWord: "debate",
        marks: 7,
        timeMinutes: 7,
        stemSignals: [
          "Medical clearance does not equal psychiatric safety — 'he has been medically cleared' is a non-sequitur for a patient who attempted strangulation hours ago; this framing must be corrected",
          "The junior nurse's account is a governance signal — a ward culture where junior staff cannot challenge a clinical decision is a systemic problem, not an individual failing",
          "Transfer under bed pressure is the hidden clinical trap — disposition must follow risk, not bed availability",
        ],
        domains: [
          {
            name: "Award up to 7 marks from the following scorable points",
            marks: 7,
            keyPoints: [
              "Clinical safety vs bed pressure — the bed manager's framing that Mason has been 'medically cleared' misrepresents the clinical situation; a patient who attempted strangulation within the last few hours with a documented farewell message and ongoing suicidal risk is not a candidate for lower-acuity care by virtue of physical recovery, and transfer to a lower-resource environment increases risk",
              "Systemic failure vs individual blame — the junior nurse's account that she felt unable to challenge the registrar's observation reduction represents a ward culture problem, not an individual failure; a service where junior staff cannot raise safety concerns without fear of consequence has a structural governance deficit that must be addressed, not punished at the individual level",
              "Agency nursing unfamiliarity as a foreseeable system risk — assigning agency nurses unfamiliar with the observation policy to a short-staffed overnight shift caring for a high-risk patient is a foreseeable service failure; responsibility for ensuring agency staff understand critical policies rests with the service, and the governance review must examine how this occurred",
              "Open disclosure to Mason is both ethical and therapeutic — Mason is entitled to an honest explanation of what happened overnight, including that his observations were changed and that this change created an opportunity for the attempt; this is an ethical obligation and a clinical step in repairing the therapeutic alliance that cannot be deferred",
              "Transfer is not appropriate while risk is unresolved — a defensible consultant position is that Mason must remain on the acute unit under appropriate observations until the post-incident risk assessment is documented and the clinical risk has demonstrably changed; transferring under bed pressure before that assessment is complete is clinically indefensible and would create medicolegal exposure",
              "Governance obligations are mandatory regardless of outcome — because the near-miss constitutes a critical incident, the service has governance obligations including an incident report, a review of the observation decision, an assessment of the staffing and agency nurse policy, and a structured post-incident review; these cannot be deferred or deprioritised because the patient survived",
              "The children's welfare must be considered as part of the disposition — the farewell message naming Mason's children means their welfare and the access arrangements must be assessed; this may require a separate child protection inquiry that runs in parallel with Mason's clinical management and cannot be delegated to the ward team alone",
              "The bed manager's framing must be corrected in writing — the clinical response to the transfer request must document that the request was received, that it was assessed as clinically inappropriate, the reasons for that assessment, and that the decision was escalated to the clinical director; this protects the consultant and creates the governance record",
              "There is tension between Mason's distress on the ward and the need for containment — the ward environment may be imperfect and aversive to him, but it remains safer than premature transfer to a lower-acuity setting where risk cannot be monitored",
            ],
          },
        ],
        zeroMarkTraps: [
          "Agreeing to transfer Mason to a lower-acuity unit because ED is full — bed pressure is not a clinical rationale for transfer after a near-miss",
          "Treating the junior nurse's discomfort as an individual performance issue rather than a ward culture and governance problem",
          "Addressing only Mason's clinical management without naming the systemic tensions created by the agency staffing, the observation policy breach, and the bed manager's pressure",
        ],
        postExaminerNote: "Strongest answers named the medical clearance framing as a clinical error, identified the ward culture problem in the junior nurse's account, and took a clear consultant position that transfer was inappropriate before the post-incident assessment was complete. Candidates who engaged the governance layer — incident reporting, agency staffing policy, open disclosure — alongside the clinical disposition scored in the upper range.",
      },
      {
        stemNumber: "1.4",
        vignette: "Mason's ex-partner submits a complaint alleging the service failed to protect him and failed to notify family despite knowing he had children. The registrar involved in reducing observations is distressed and asks whether they will be blamed. The service director asks you to provide an initial consultant summary for the morbidity and mortality meeting.",
        question: "Describe — list and explain the key governance, documentation and supervision actions you would take after this near-miss event. A list without explanation will not be awarded any marks. (5 marks | 5 minutes)",
        commandWord: "describe_explain",
        marks: 5,
        timeMinutes: 5,
        stemSignals: [
          "M&M summary must be factual and system-focused, not defensive or blame-attributing — the consultant's summary sets the tone for the review",
          "Registrar support is a supervision obligation, not optional — distressed clinicians after near-miss events require prompt support and honest guidance about the review process",
          "The complaint is a governance process requiring a formal response — it cannot be managed informally or pre-empted with a defensive explanation",
        ],
        domains: [
          {
            name: "Award up to 5 marks from the following scorable points",
            marks: 5,
            keyPoints: [
              "File a critical incident report immediately — explain that the near-miss constitutes a reportable event requiring a formal incident report documenting the observation reduction decision, the staffing context, the warning signals present, and the near-miss outcome; this creates the governance record that activates the review process and prevents the event from being managed informally",
              "Support the registrar without premature attribution of blame — explain that the registrar's distress is understandable and requires supervisory acknowledgement, psychological support, and honest guidance about the review process; they should be told they will have the opportunity to provide their account, that the purpose of the review is learning and prevention rather than individual blame, and that the consultant is available to support them through it",
              "Prepare a factual, system-focused summary for the M&M meeting — explain that the consultant's M&M summary must be chronological and factual, covering the timeline of events, the clinical decisions made and their basis, the staffing context, the warning signals present, and the preliminary system lessons; it must not be defensive, must not pre-emptively attribute blame, and must not minimise the significance of the near-miss",
              "Respond to the complaint through the formal complaints process — explain that the ex-partner's complaint requires a formal response coordinated with the service director and complaints management team, including an open disclosure of what occurred, what is being done to prevent recurrence, and who the appropriate contact person is; the response must not be premature, must not be defensive, and must not identify the registrar as the responsible party before the review is complete",
              "Conduct a root-cause analysis examining systemic factors — explain that the structured review must examine why arm's length observations were changed during a short-staffed shift, why agency nurses were unfamiliar with the observation policy, why the junior nurse felt unable to challenge the registrar, and what system changes can prevent recurrence; the RCA must result in actionable recommendations, not a conclusion that it was an individual error",
              "Notify the clinical director and hospital risk management — explain that a near-miss inpatient strangulation during a short-staffed shift may require notification to the hospital executive and risk management team depending on local policy; the consultant cannot make this determination alone and must escalate through the appropriate governance chain rather than managing it within the clinical team",
              "Review and update the observation policy and agency nurse orientation — explain that a systemic response to the near-miss must include review of the observation reduction policy, formalisation of the agency nurse orientation process to include critical policies, and an explicit addressing of the ward culture around junior staff raising safety concerns",
            ],
          },
        ],
        zeroMarkTraps: [
          "Providing a defensive M&M summary that minimises the systemic factors or attributes the near-miss to individual error alone",
          "Telling the registrar they will not be blamed before the review has occurred — premature reassurance undermines the integrity of the review process",
          "Responding to the ex-partner's complaint informally rather than through the formal complaints process",
        ],
        postExaminerNote: "Candidates who named the RCA as a systemic review rather than an individual accountability process, and who distinguished the M&M summary from the complaints process as two separate governance obligations, demonstrated consultant-level governance thinking. Candidates who focused only on supporting the registrar or only on Mason's clinical management without the documentation and reporting layer scored in the lower range.",
      },
    ],
  },
  {
    id: "meq_006",
    title: "Nina — Adolescent Trauma, Competing Duties and Post-Overdose Disposition",
    case: "Nina, 15, Year 10 student, pending court evidence, self-harm and cannabis use",
    examSource: "Generated — Ethics / Professionalism / Legal",
    topic: "CAMHS assessment of a 15-year-old sexual assault witness with self-harm, suicidal ideation, and cannabis use; adolescent confidentiality, Gillick competence, competing duties to family, school, and justice system, and post-overdose disposition without adolescent beds",
    primaryDomain: "Ethics / Professionalism / Legal",
    totalMarks: 30,
    totalTimeMinutes: 30,
    stems: [
      {
        stemNumber: "2.1",
        vignette: "Nina is a 15-year-old Year 10 student referred urgently by her school counsellor after writing online that she 'doesn't want to be alive after the hearing'. Nina is due to give evidence next month in a sexual assault matter involving her mother's former partner. She lives with her mother and two younger siblings. She presents as guarded, exhausted and hypervigilant. She has superficial cuts on her forearm and says cannabis is the only thing that helps her sleep. She asks you not to tell her mother anything because 'Mum will fall apart again'.",
        question: "Outline — list and justify the key areas you would assess at the first appointment. A list without because-clauses specific to this case will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "outline_justify",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Confidentiality framing at the outset determines engagement — how the limits of confidentiality are explained to Nina at the start of the appointment shapes what she will and will not disclose",
          "The online statement is not a passing comment — 'doesn't want to be alive after the hearing' links suicidal ideation to a concrete future event requiring specific risk formulation",
          "Trauma presentation, not primary mood disorder — hypervigilance, exhaustion, self-harm and cannabis use in a sexual assault witness are symptoms of a trauma response requiring a trauma-informed assessment frame",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Clarify the limits of confidentiality at the outset — because Nina's opening request 'don't tell my mother anything' must be addressed directly before assessment begins; explaining that confidentiality is not absolute and is limited by serious safety concerns, in plain language and without threat, determines whether she will engage genuinely or withhold clinically material information",
              "Assess suicidal ideation, intent, plan and protective factors — because the online statement linking not wanting to be alive to the court hearing represents suicidal ideation connected to a concrete future stressor; the assessment must determine whether there is current ideation, whether there is a plan, what access she has to means, and what reasons for living are present",
              "Assess the self-harm — because superficial cuts may represent chronic emotion-regulation self-harm or may signal escalation toward a more lethal method; assessing frequency, onset, escalation trajectory, method, function, and relationship to the court date is essential to formulation and risk planning",
              "Assess for trauma-related psychopathology — because Nina is a sexual assault victim preparing to give evidence against the perpetrator; she may have PTSD symptoms including re-experiencing, avoidance, hypervigilance, and dissociation that explain her presentation and require specific trauma-informed formulation beyond a general mood assessment",
              "Assess the cannabis use — because cannabis is her stated primary coping strategy for sleep and distress; assessing frequency, quantity, onset, dependence features, and function in the context of trauma and a pending court appearance determines the risk it contributes and the intervention required, including the risk of cannabis-related psychosis in an adolescent",
              "Assess the impact of the upcoming court hearing — because the hearing is a concrete identified stressor with a specific date; assessing what Nina understands about the process, what supports are in place, what she fears, and how she is preparing allows identification of modifiable risk and connection with legal and witness support services",
              "Assess family functioning and the mother's capacity — because Nina's statement 'Mum will fall apart again' signals concern about the mother's emotional availability and possible role-reversal; assessing the mother's own mental health, the parenting environment, and the welfare of the two younger siblings is essential",
              "Assess school functioning and social supports — because Nina's statement that she may stop attending school until the hearing represents withdrawal from a significant protective structure; understanding peer relationships, teacher support, and academic functioning informs the engagement plan and identifies additional protective resources",
              "Conduct a comprehensive mental state examination — because the presentation of guarded, exhausted and hypervigilant requires characterisation of mood, affect, perceptual experiences, thought content, and cognition to determine whether there is a clinical disorder beyond reactive distress requiring specific treatment",
              "Obtain collateral from the school counsellor — because the referral source has direct knowledge of Nina's school presentation, recent online statements, and the deterioration that prompted referral; this collateral contextualises the presentation and fills gaps where Nina may withhold information",
              "Assess sleep, appetite, concentration and vegetative depressive symptoms — because exhaustion and withdrawal from school may signal a major depressive episode requiring specific treatment beyond trauma-focused intervention",
              "Assess cultural, developmental and identity factors — because these influence shame, help-seeking behaviour, engagement with the legal process and the meaning Nina attaches to the assault and the upcoming hearing",
            ],
          },
        ],
        zeroMarkTraps: [
          "Beginning the clinical assessment before addressing Nina's confidentiality request — proceeding without clarifying limits creates a false contract that will either limit disclosure or damage the alliance when limits are later applied",
          "Treating the self-harm as the primary risk without assessing the suicidal ideation connected to the specific future stressor of the court hearing",
          "Framing the presentation as depression rather than a trauma response — the hypervigilance, exhaustion, and avoidance in the context of a sexual assault history and pending evidence require a trauma-informed formulation as the primary frame",
        ],
        postExaminerNote: "Candidates who addressed confidentiality framing as a clinical priority at the start of the assessment, formulated the presentation as trauma-related rather than primary depression, and assessed the court hearing as a specific modifiable risk factor scored in the upper range. Candidates who listed generic risk assessment domains without case-specific justification scored in the lower range.",
      },
      {
        stemNumber: "2.2",
        vignette: "During the assessment, Nina says she has had daily suicidal thoughts but no fixed plan today. She refuses to allow you to contact her mother, police witness support worker or GP. She says she will disengage if you 'break confidentiality'. She appears able to describe the risks and benefits of treatment, but she minimises the impact of cannabis and says she may stop attending school until the hearing is over.",
        question: "Describe — list and explain your approach to confidentiality, capacity, engagement and safety planning. A list without explanation will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Gillick competence is decision-specific — Nina's ability to describe risks and benefits does not mean she has competence for every decision she is making",
          "The disengagement threat is a clinical phenomenon requiring engagement, not compliance — treating it as a reason to avoid necessary clinical action is itself a clinical error",
          "Do not promise absolute confidentiality — a promise of confidentiality without limits to a 15-year-old with daily suicidal ideation is clinically and legally inappropriate",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Do not promise absolute confidentiality — explain that making a promise of absolute confidentiality to a 15-year-old with daily suicidal ideation and active self-harm would be clinically and legally inappropriate; the limits of confidentiality — specifically that serious risk of harm may require disclosure — must be maintained clearly, not abandoned to preserve engagement",
              "Apply Gillick competence to each specific decision separately — explain that Nina's ability to describe the risks and benefits of treatment demonstrates competence in that domain, but her minimisation of cannabis risk and her plan to withdraw from school may indicate impaired judgement in those specific areas; Gillick competence is decision-specific and cannot be applied globally to validate all her refusals simultaneously",
              "Engage the disengagement threat as a clinical problem rather than a compliance demand — explain that Nina's statement that she will disengage if confidentiality is broken must be acknowledged empathetically, not accepted as a reason to abandon necessary clinical action; exploring what she fears will happen if her mother or GP is contacted allows targeted problem-solving and may reveal a specific barrier that can be addressed",
              "Develop a collaborative safety plan — explain that a safety plan co-created with Nina — identifying her warning signs, coping strategies, people she can contact, and what she will do if urges escalate — is clinically more effective and more likely to be used than a plan imposed without her input; her engagement in creating it is itself part of the therapeutic intervention",
              "Assess the specific barrier to each refused contact separately — explain that Nina's refusal to allow contact with her mother, her GP, and the police witness support worker may reflect different fears for each; understanding the specific concern about each contact allows targeted negotiation and may reveal that some contacts are more negotiable than others",
              "Do not contact the mother, GP or witness support worker against Nina's explicit refusal unless the risk threshold is met — explain that immediate contact against her refusal would destroy the therapeutic alliance without clinical justification if her daily suicidal ideation remains without plan; the clinical obligation is to maintain the alliance while continuing to assess whether the risk threshold for mandatory disclosure has been reached",
              "Address the cannabis use directly as a clinical priority, not a lifestyle choice — explain that cannabis is being used as the primary coping strategy for sleep and trauma distress by a 15-year-old with daily suicidal ideation; it carries specific risks in this context including cannabis-related psychosis, dependence, and impaired decision-making, and must be addressed clinically even while maintaining alliance",
              "Assess school withdrawal as a risk amplifier requiring active response — explain that Nina's plan to stop attending school until the hearing removes a major protective structure including routine, peer contact, teacher observation, and school counsellor access; this should be engaged as a clinical concern, not accepted as a reasonable plan, and alternatives such as reduced attendance or modified engagement should be explored",
              "Document the capacity assessment and the risk threshold analysis — explain that the clinical reasoning for maintaining confidentiality at this point, the assessment of capacity for each specific decision, and the basis for not yet disclosing must be documented contemporaneously; if the risk threshold is reached and disclosure occurs, the same documentation protects the clinician and provides a reviewable record",
              "Implement means restriction — because impulsive self-harm and overdose risk may involve medications, blades or substances accessible at home; specific means restriction is a clinical safety action, not an assumption",
              "Arrange timely follow-up and provide crisis contact numbers — because the court hearing is an imminent risk amplifier with a specific date, and Nina must have a clear escalation pathway before leaving the appointment",
            ],
          },
        ],
        zeroMarkTraps: [
          "Promising absolute confidentiality to maintain engagement — this is both clinically inaccurate and legally inappropriate for a 15-year-old with daily suicidal ideation",
          "Applying Gillick competence globally to validate all of Nina's refusals because she can describe treatment risks and benefits — competence is decision-specific",
          "Treating the disengagement threat as a clinical veto that prevents necessary actions when the risk threshold is met",
        ],
        postExaminerNote: "Candidates who distinguished Gillick competence as decision-specific rather than global, who named the disengagement threat as a clinical phenomenon requiring engagement rather than compliance, and who explained why absolute confidentiality cannot be promised scored in the upper range. Candidates who either promised confidentiality to preserve the alliance, or immediately disclosed without engaging the specific barriers, did not achieve the standard.",
      },
      {
        stemNumber: "2.3",
        vignette: "Nina's mother arrives unexpectedly and demands to know whether Nina has been self-harming. She says Nina has been leaving the house at night and returning intoxicated. Nina becomes tearful and says her mother is 'making it about herself'. The school principal separately emails the service asking for a written risk rating because teachers are worried Nina may harm herself at school. The police witness support worker asks whether Nina is mentally fit to give evidence.",
        question: "Discuss — list and debate the competing duties to Nina, her family, the school and the justice process. You must name the tensions explicitly and take a defensible consultant position. (8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "The school's written risk rating request is a confidentiality trap — providing a written risk rating to a third party without Nina's consent is a breach regardless of good intentions",
          "Fitness to give evidence is not a CAMHS determination — the treating clinician is not positioned to answer this question; it requires a specific forensic assessment",
          "The mother's unexpected arrival must be managed without disclosure and without deception — the consultant must respond in a way that is honest, non-disclosing, and that does not put Nina in further distress",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Duty to Nina vs duty to disclose to the mother — Nina has Gillick competence for some decisions and her right to confidentiality is real; however, the mother's account that Nina is leaving the house at night and returning intoxicated is a safety concern that is clinically material; the tension is between respecting Nina's confidentiality and ensuring the mother has enough information to provide safe oversight at home",
              "Responding to the mother in the moment without breaching confidentiality — a defensible consultant approach is to meet with the mother in Nina's presence, acknowledge her concern without confirming or denying specific clinical content, and facilitate Nina deciding what she wishes her mother to know; this is honest, non-deceptive, and preserves the alliance",
              "The mother's nocturnal observations are clinically material collateral — Nina leaving the house at night and returning intoxicated is a safety concern provided in good faith by a parent; this information should inform the risk assessment regardless of whether Nina disclosed it directly, and does not require Nina's consent to incorporate into the clinical formulation",
              "The school principal's written risk rating request must be declined — providing a written risk rating to a third party without Nina's consent is a breach of confidentiality regardless of the school's genuine concern; the consultant should instead offer to participate in a school meeting with Nina's consent, where guidance can be provided without creating a document that discloses clinical information",
              "Fitness to give evidence is not a determination the treating CAMHS clinician can make — explaining to the police witness support worker that determining legal fitness to give evidence requires a specific forensic medico-legal assessment that cannot be provided by the treating clinician; the treating clinician's role is Nina's therapeutic wellbeing, not her legal competence, and conflating these roles would compromise both the therapeutic relationship and the legal process",
              "Competing duties become convergent when safety is at risk — if Nina's risk escalates to the point where disclosure is necessary to prevent serious harm, the duty to disclose to the mother and potentially to child protection supersedes the duty of confidentiality; this is not a conflict between competing duties but an application of the correct threshold",
              "The sibling welfare is a distinct clinical concern — Nina lives with two younger siblings whose welfare may be affected by both Nina's distress and the mother's capacity; if the mother is struggling to manage the home, the siblings' safety may require a separate child and family services referral",
              "A defensible consultant position is to work within Nina's confidentiality rights while actively preparing for the threshold — maintain confidentiality for now while intensifying the assessment of risk, working toward Nina consenting to family involvement, and documenting the clinical reasoning for each disclosure decision; this is not passive — it is active risk management within an ethical framework",
              "The court process may require reasonable adjustments or timing support — but providing these should not compromise the therapeutic relationship or place the treating clinician in a forensic role; the distinction between therapeutic and forensic functions must be maintained explicitly",
            ],
          },
        ],
        zeroMarkTraps: [
          "Providing a written risk rating to the school principal without Nina's consent — this is a confidentiality breach regardless of the principal's good intentions or the school's duty of care",
          "Attempting to answer the fitness to give evidence question as the treating CAMHS clinician — this conflates the therapeutic and forensic roles in a way that damages both",
          "Excluding the mother from the appointment rather than facilitating a managed encounter that allows Nina to decide what she shares",
        ],
        postExaminerNote: "Candidates who declined the school's written risk rating request and explained why, who identified fitness to give evidence as a forensic question outside the treating clinician's role, and who named a managed joint meeting with the mother as the approach to the arrival scored in the upper range. Candidates who agreed to provide a risk rating to the school, or who attempted to answer the fitness question, did not achieve the standard.",
      },
      {
        stemNumber: "2.4",
        vignette: "Two weeks later, Nina presents to ED after taking an impulsive overdose of her mother's medication following a social media post about the court case. She is medically cleared. There are no adolescent inpatient beds available, and the ED consultant asks whether she can be discharged with daily CAMHS follow-up. Nina says she feels safer at home only if her mother does not ask questions.",
        question: "Describe — list and explain your management and disposition plan. A list without explanation will not be awarded any marks. (6 marks | 6 minutes)",
        commandWord: "describe_explain",
        marks: 6,
        timeMinutes: 6,
        stemSignals: [
          "Medical clearance does not equal psychiatric clearance — a full post-overdose psychiatric assessment is required before any disposition decision",
          "A conditional safety plan is not a safety plan — 'safer at home only if Mum doesn't ask questions' places the safety condition on an uncontrollable variable; this must be corrected before discharge",
          "No adolescent bed does not make discharge safe — disposition must follow risk, not bed availability",
        ],
        domains: [
          {
            name: "Award up to 6 marks from the following scorable points",
            marks: 6,
            keyPoints: [
              "Conduct a full post-overdose psychiatric assessment before any disposition decision — explain that medical clearance addresses physical toxicity only; a psychiatric assessment must address the change in risk following the overdose, Nina's insight into the act, the current level of suicidal ideation and intent, access to further means, protective factors, and what has changed since the attempt, before any discharge can be considered",
              "Correct the conditional safety plan before discharge — explain that Nina's statement that she feels safer at home 'only if her mother does not ask questions' is not a safety plan; it is a conditional avoidance strategy that places the responsibility for her safety on her mother's behaviour, which cannot be guaranteed; a genuine safety plan must be specific, actionable, and robust without conditions the clinician cannot control",
              "Secure medications in the home before discharge — explain that the overdose involved the mother's medications; before any discharge, the mother must be involved in securing all medications in the household including her own prescriptions, and this must be verified and documented rather than assumed",
              "Do not discharge solely because no adolescent bed is available — explain that the absence of an inpatient bed does not make discharge clinically safe; the risk level following an impulsive overdose triggered by a specific social media stressor must drive the disposition decision; if no bed is available, the consultant must escalate to the service director, explore interstate options, and consider extended ED observation as an alternative to unsafe discharge",
              "Involve the consultant and the mother in the disposition decision — explain that a post-overdose disposition decision for a 15-year-old cannot be made by the CAMHS team without senior clinical oversight; the CAMHS consultant must be involved, the mother must be engaged as a safety resource with a clearly defined role, and the home safety plan must be agreed collaboratively between Nina, the mother, and the clinical team",
              "Implement intensive community follow-up if discharge proceeds — explain that if the risk assessment supports discharge, it must be accompanied by daily CAMHS contact, an agreed safety plan, clear escalation criteria back to ED, secured medications at home, immediate re-engagement with the school counsellor, and specific attention to the court hearing as an imminent stressor",
              "Address the court process as an active risk factor — explain that the overdose was directly triggered by a social media post about the court case; the clinician must address this specific stressor by connecting Nina with the police witness support service, exploring what the post contained, and developing a specific plan for managing the pre-hearing period",
              "Reassess confidentiality in the post-overdose context — explain that a medically cleared overdose after a period of daily suicidal ideation represents an escalation that may meet the threshold for involving the mother more formally; the previous confidentiality framework must be reassessed in the light of the overdose, and the rationale for any decision documented",
            ],
          },
        ],
        zeroMarkTraps: [
          "Accepting the conditional safety plan as sufficient for discharge — 'safer at home only if Mum doesn't ask questions' cannot form the basis of a clinically defensible safety plan",
          "Agreeing to discharge because there are no adolescent beds — absence of the ideal placement does not make discharge safe",
          "Failing to address the court hearing as the specific precipitating stressor requiring targeted clinical intervention",
        ],
        postExaminerNote: "Candidates who named the conditional safety plan as clinically inadequate and explained why, who distinguished medical clearance from psychiatric clearance, and who addressed the court hearing as a concrete modifiable risk factor scored in the upper range. Candidates who accepted the conditional plan or who agreed to discharge solely because no bed was available did not achieve the standard.",
      },
    ],
  },
  {
    id: "meq_007",
    title: "Hemi Thompson — Delirium, Parkinson's Polypharmacy and Adverse Medication Event",
    case: "Hemi Thompson, 76, Māori man, Parkinson's disease, delirium, haloperidol adverse event",
    examSource: "Generated — Governance / Systems / Leadership",
    topic: "CL psychiatry assessment of delirium in a Māori elder with Parkinson's disease and polypharmacy; delirium management with multiple pharmacological contraindications, discharge capacity with whānau involvement, and open disclosure after an adverse haloperidol medication event",
    primaryDomain: "Governance / Systems / Leadership",
    totalMarks: 32,
    totalTimeMinutes: 32,
    stems: [
      {
        stemNumber: "3.1",
        vignette: "Mr Hemi Thompson is a 76-year-old Māori man admitted with pneumonia, dehydration and worsening confusion. He has Parkinson's disease, chronic kidney disease and mild cognitive impairment. Nursing staff report that overnight he became frightened, struck out at staff and said insects were crawling over the walls. His daughter says he is usually gentle and independent with support from whānau. The medical registrar asks for 'something strong to sedate him' because staff are worried about another violent episode.",
        question: "Outline — list and justify your assessment priorities in this presentation. A list without because-clauses specific to this case will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "outline_justify",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Decline the sedation request until assessment is complete — prescribing before assessing the cause risks masking the aetiology and worsening the delirium",
          "Parkinson's disease changes every pharmacological decision — the choice of any sedating agent must account for dopaminergic contraindications and possible Lewy body sensitivity",
          "Whānau involvement is a clinical priority, not an optional adjunct — the daughter's account of baseline establishes the acuity and cultural context of the presentation",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Assess for delirium as the primary diagnosis before prescribing anything — because Hemi's acute onset of confusion, visual hallucinations, and agitation in a previously gentle man after hospital admission for infection and dehydration is a classic delirium presentation; a cognitive screen including orientation, attention, and fluctuation in arousal must be completed before any pharmacological intervention is given",
              "Decline the request for 'something strong' until assessment is complete — because prescribing sedation before establishing the cause of agitation risks masking the aetiology, causing respiratory depression, and worsening the delirium; the request must be acknowledged and redirected toward an assessment-first approach",
              "Conduct an urgent medication review — because Hemi is on levodopa, oxycodone, and a dopamine agonist, and received promethazine; promethazine is a dopamine antagonist that directly worsens Parkinson's disease and may be causing or contributing to the agitation; oxycodone has anticholinergic and CNS depressant properties that worsen delirium; this review must precede any additional prescribing",
              "Review the ECG and assess QTc before any pharmacological treatment of agitation — because QTc prolongation is documented and is a contraindication to many antipsychotics used in delirium, including haloperidol; the QTc must be formally reviewed and the significance of prolongation assessed before any agent is selected",
              "Identify and treat the underlying medical cause — because delirium is a syndrome requiring treatment of the precipitant; in Hemi's case this includes active pneumonia, dehydration, opioid load, and promethazine, all of which are modifiable; treating the underlying causes is the primary intervention and may resolve the delirium without pharmacological sedation",
              "Assess for Lewy body dementia as an underlying diagnosis — because Hemi has Parkinson's disease, pre-existing mild cognitive impairment, and now presents with visual hallucinations; Lewy body dementia confers extreme antipsychotic sensitivity and would make most agents used in delirium management potentially fatal; this possibility must be assessed before any antipsychotic is considered",
              "Assess and modify the ward environment — because Hemi lacks his hearing aids in a noisy, unfamiliar ward at night; sensory deprivation, disorientation, and environmental unfamiliarity are established precipitants and perpetuating factors for nocturnal delirium in older patients, and addressing them is an evidence-based non-pharmacological intervention",
              "Involve the daughter and whānau in the assessment immediately — because the daughter's account that Hemi is 'usually gentle and independent' establishes the acuity of the change, provides premorbid baseline, and reflects the Māori model of whānau as central to the assessment and care of an elder; their involvement is a clinical priority, not a courtesy",
              "Request Māori cultural support — because Hemi is a Māori elder and his distress may include cultural and spiritual dimensions that a biomedical assessment alone will not capture; a hospital Māori health worker or kaumātua can help contextualise his experience, communicate in culturally appropriate ways, and reduce fear that may be amplifying the agitation",
              "Assess the infection thoroughly — because the pneumonia precipitating the admission may be inadequately treated; undertreated infection is the most common and reversible cause of delirium in older adults, and antibiotic adequacy, oxygenation, and fluid status must be assessed and optimised as the primary medical intervention",
              "Assess pain, urinary retention, constipation, hypoxia and sleep deprivation — because these are modifiable and frequently overlooked delirium drivers in older hospitalised patients that can be corrected without pharmacological intervention",
            ],
          },
        ],
        zeroMarkTraps: [
          "Prescribing a sedating agent before completing an assessment — the request for 'something strong' must be redirected, not fulfilled, until the cause of the agitation is established",
          "Recommending haloperidol for delirium without first identifying the Parkinson's disease as a contraindication and reviewing the QTc",
          "Treating the presentation as primary psychiatric agitation without first identifying delirium as the most likely diagnosis and the medical precipitants as the primary intervention target",
        ],
        postExaminerNote: "Candidates who declined the sedation request and named the reason — assessment before prescribing — and who identified Lewy body dementia as a possibility requiring antipsychotic caution before any agent was selected, demonstrated the clinical standard. Candidates who recommended haloperidol or another typical antipsychotic without acknowledging the Parkinson's disease contraindication scored zero for that recommendation.",
      },
      {
        stemNumber: "3.2",
        vignette: "You assess Mr Thompson and think delirium is likely. He is febrile, intermittently inattentive and visually hallucinating. His ECG shows QTc prolongation. He is on levodopa, oxycodone for pleuritic pain, a dopamine agonist and recently received promethazine for sleep. The ward is noisy and he has no hearing aids. His daughter asks that he not be 'drugged into silence'.",
        question: "Describe — list and explain your immediate management of agitation, psychosis and delirium. A list without explanation will not be awarded any marks. (9 marks | 9 minutes)",
        commandWord: "describe_explain",
        marks: 9,
        timeMinutes: 9,
        stemSignals: [
          "Non-pharmacological first — environmental and sensory modification are evidence-based first-line interventions and must precede pharmacological management",
          "Promethazine must be ceased — it is a dopamine antagonist and should not have been prescribed in Parkinson's disease; this is an immediate medication safety action",
          "Haloperidol and typical antipsychotics are contraindicated — dopamine receptor blockade in Parkinson's disease worsens motor function and risks antipsychotic hypersensitivity in Lewy body disease",
        ],
        domains: [
          {
            name: "Award up to 9 marks from the following scorable points",
            marks: 9,
            keyPoints: [
              "Implement non-pharmacological delirium management as the first-line intervention — explain that reorientation by familiar whānau, low lighting at night, orientation aids including clocks and calendars, familiar objects from home, noise reduction, and consistent nursing staff are evidence-based first-line interventions for delirium that should be implemented before any pharmacological approach in a patient with Parkinson's disease and QTc prolongation",
              "Restore hearing aids immediately — explain that sensory deprivation in a noisy, unfamiliar ward at night is a modifiable precipitant of nocturnal agitation; hearing aids allow Hemi to hear reassurance and reorientation, reducing fear-driven confusion and agitation that may be amplifying the delirium",
              "Facilitate extended whānau presence — explain that continuous or extended whānau presence is consistent with Māori models of collective elder care and provides the familiarity, cultural safety, and trust that nursing staff cannot replicate; this is an evidence-based environmental intervention as well as a culturally appropriate response to the daughter's concern about over-sedation",
              "Cease promethazine immediately — explain that promethazine is a dopamine antagonist that directly worsens Parkinson's disease motor symptoms, can precipitate dangerous antipsychotic sensitivity reactions in Lewy body disease, and should not have been prescribed for sleep in a patient with Parkinson's disease; its cessation is an urgent medication safety action that may itself reduce the agitation",
              "Review oxycodone dosing with the pain team — explain that opioids including oxycodone have anticholinergic and CNS depressant properties that worsen delirium in older adults with renal impairment; the minimum effective dose consistent with adequate analgesia for pleuritic pain must be determined in consultation with the palliative or pain team, balancing undertreated pain as a delirium contributor against opioid-related worsening",
              "Do not use haloperidol or other typical antipsychotics — explain that haloperidol and other typical antipsychotics are contraindicated in Parkinson's disease because dopamine receptor blockade worsens motor function, can cause dangerous antipsychotic hypersensitivity reactions including severe rigidity and aspiration in Lewy body disease, and is further contraindicated by the documented QTc prolongation; recommending haloperidol in this patient would cause harm",
              "If pharmacological management is required for agitation, consider low-dose quetiapine — explain that quetiapine has relatively low D2 receptor affinity and is the preferred atypical antipsychotic in Parkinson's disease-related psychosis; it should be used at the lowest effective dose with close monitoring and is not a first-line intervention pending the non-pharmacological measures",
              "Continue levodopa and review with neurology before any change — explain that abrupt reduction or cessation of levodopa carries risk of severe motor deterioration and a neuroleptic malignant syndrome-like presentation; the dopaminergic medication regimen must not be reduced without neurology input and must be maintained through the delirium episode unless there is a specific neurological reason to change",
              "Respond to the daughter's concern about over-sedation as a clinical obligation — explain that the daughter's request not to 'drug him into silence' reflects legitimate concern about iatrogenic harm in a vulnerable elder and must be engaged seriously; she should be told the priority is to identify why her father is distressed, modify the environment and medications causing harm, and use the minimum pharmacological intervention consistent with safety — this conversation is part of the clinical plan, not an obstacle to it",
              "Treat the infection and dehydration as the primary causal intervention — explain that optimising antibiotics, hydration, and oxygenation for the underlying pneumonia is the most important intervention in delirium management; if the precipitant is not treated, all other measures are palliative rather than curative",
              "Monitor closely for aspiration risk — explain that Parkinson's disease already creates dysphagia risk, and delirium with agitation further impairs swallowing safety; a speech pathology review for swallowing assessment and a modified diet plan should be requested urgently to prevent aspiration pneumonia as a complication of the current delirium",
              "Manage staff safety through de-escalation, observation and a clear behavioural plan — because Hemi's aggression is fear-driven in the context of delirium and not wilful violence; staff require a shared understanding of this to avoid coercive responses that worsen agitation",
            ],
          },
        ],
        zeroMarkTraps: [
          "Recommending haloperidol or any typical antipsychotic for this patient — this is a pharmacological error with potentially fatal consequences in Parkinson's disease with possible Lewy body pathology and documented QTc prolongation",
          "Beginning with pharmacological management before implementing non-pharmacological interventions",
          "Failing to cease promethazine — continuing a dopamine antagonist in a patient with Parkinson's disease is an ongoing medication error that must be corrected immediately",
        ],
        postExaminerNote: "Candidates who named non-pharmacological management first, ceased promethazine as an urgent safety action, and explicitly stated that haloperidol is contraindicated in this patient with Parkinson's disease and QTc prolongation scored in the upper range. Candidates who recommended haloperidol scored zero for that recommendation and lost the marks associated with the correct pharmacological reasoning.",
      },
      {
        stemNumber: "3.3",
        vignette: "After 48 hours, Mr Thompson's infection is improving but he remains intermittently confused at night. The physiotherapy team says he is unsafe to mobilise independently. His daughter wants him discharged home with whānau support and says hospital is making him worse. The medical team wants transfer to residential respite. Mr Thompson says he wants to go home but cannot consistently explain the risks of falls, medication changes or overnight supervision.",
        question: "Discuss — list and debate the competing issues in deciding discharge destination and decision-making authority. You must name the tensions explicitly and take a defensible consultant position. (8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Capacity must be assessed at multiple time points in fluctuating delirium — a single assessment in a delirious patient is unreliable; the assessment must be repeated when he is clearest",
          "Residential respite may be culturally inappropriate for a Māori elder — the medical team's preference must be weighed against the cultural consequences of placement against family wishes",
          "Whānau home care has genuine clinical legitimacy — it should be assessed as a real option, not dismissed as inadequate by default",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Capacity must be assessed at multiple time points — the delirium is not resolved; capacity fluctuates in delirium and a single assessment that finds him unable to explain the risks cannot be taken as a final finding; capacity must be assessed during his clearest periods and the assessment repeated before any discharge decision is made",
              "Hemi's expressed wish to go home is clinically significant and must be taken seriously — his preference for home is consistent with his baseline values and with Māori tikanga regarding the care of elders within whānau; dismissing this preference as a product of delirium without a formal capacity assessment at his clearest is both clinically premature and culturally inappropriate",
              "The daughter's preference for whānau home care has genuine cultural and clinical legitimacy — whānau care of elders is a central Māori value and should be assessed as a genuine option, with the daughter's willingness and the whānau's capacity to provide the required care evaluated seriously rather than assumed to be inadequate",
              "Residential respite may be culturally inappropriate and itself harmful — residential care facilities are often experienced as culturally unsafe for Māori elders, and placement against Hemi's and his family's wishes may cause psychological harm, cultural distress, and loss of identity that outweigh the safety benefits; this possibility must be incorporated into the clinical decision rather than dismissed",
              "Physiotherapy safety concerns are clinically relevant and must be incorporated into any home discharge plan — if Hemi is unsafe to mobilise independently, a home discharge requires a specific falls risk assessment, home modification, whānau training in safe mobility assistance, and home physiotherapy services before it can be considered safe",
              "A defensible consultant position is to defer the discharge decision until delirium has resolved and a repeat capacity assessment demonstrates consistent understanding — the key clinical issue is that a patient who cannot consistently explain the risks of falls and overnight supervision does not currently demonstrate capacity for this decision; imposing discharge or residential transfer before a repeat assessment is premature and potentially harmful",
              "Pursue a structured whānau meeting with Māori cultural support — the competing views of Hemi, his daughter, and the medical team are best resolved through a structured family meeting facilitated with a Māori health worker or kaumātua, where each perspective is heard, cultural values are respected, and a shared plan is developed that all parties can commit to",
              "Assess the whānau's specific capacity to provide care before defaulting to residential placement — the medical team must not assume that home discharge is unsafe without assessing what the whānau can actually provide; the daughter's offer should be followed up with specific questions about overnight supervision, medication management, falls response, and access to GP and specialist follow-up",
              "Consider advanced care planning and his baseline wishes — because discharge destination should align with his values and prior expressed preferences, not only current fluctuating capacity",
              "If he lacks capacity, apply substitute decision-making and best-interests processes consistent with local guardianship law — because a patient who cannot consistently weigh discharge risks requires a formal legal framework, not an informal family consensus",
            ],
          },
        ],
        zeroMarkTraps: [
          "Conducting a single capacity assessment during a delirious episode and treating it as a final determination — capacity must be assessed at multiple time points",
          "Defaulting to residential respite without considering the cultural harm this may cause for a Māori elder or without exploring the whānau home care option",
          "Accepting the physiotherapy safety concerns as an absolute barrier to home discharge without assessing what modifications and supports would make home discharge safe",
        ],
        postExaminerNote: "Candidates who named capacity reassessment at multiple time points as a prerequisite for any discharge decision, who engaged whānau home care as a genuine option requiring assessment rather than dismissal, and who named residential respite as potentially culturally harmful scored in the upper range. Candidates who resolved the tension by simply accepting the medical team's preference for residential care without engaging the cultural and autonomy dimensions did not achieve the standard.",
      },
      {
        stemNumber: "3.4",
        vignette: "A medication review shows Mr Thompson received haloperidol overnight despite Parkinson's disease and prolonged QTc. The nurse says it was given after a verbal order from a covering doctor who had not read the CL note. Mr Thompson developed marked rigidity and aspiration risk the next morning. His daughter is upset and asks whether the hospital has harmed him.",
        question: "Describe — list and explain your consultant-level response to the adverse medication event. A list without explanation will not be awarded any marks. (7 marks | 7 minutes)",
        commandWord: "describe_explain",
        marks: 7,
        timeMinutes: 7,
        stemSignals: [
          "Open disclosure is a legal and ethical obligation — the daughter must be told honestly what happened; a defensive or evasive response compounds the harm",
          "This is a systems failure, not just an individual error — the verbal order without reading the CL note reveals multiple system gaps; the root cause analysis must identify these, not attribute blame to the nurse who followed the order",
          "Aspiration in a patient with Parkinson's and existing pneumonia is a medical emergency — the clinical response to the adverse event must precede the governance response",
        ],
        domains: [
          {
            name: "Award up to 7 marks from the following scorable points",
            marks: 7,
            keyPoints: [
              "Conduct an immediate clinical assessment of Mr Thompson's current respiratory and motor status — explain that the haloperidol-induced rigidity and aspiration risk in a patient with existing pneumonia and Parkinson's disease represents a potentially life-threatening complication requiring urgent assessment of respiratory function, swallowing safety, and motor rigidity before governance actions are taken; clinical stabilisation precedes documentation",
              "Escalate to the medical team for emergency management — explain that aspiration risk on top of active pneumonia in a Parkinson's patient given a contraindicated antipsychotic is a medical emergency; the admitting medical team must be notified immediately, a nil-by-mouth order and nasogastric or IV fluid assessment may be required, and speech pathology must urgently reassess swallowing",
              "Engage in open disclosure with the daughter — explain that open disclosure is both a legal obligation and an ethical standard; the daughter must be told honestly what happened, including that haloperidol was given via a verbal order by a covering doctor who had not read the CL note, that this medication is contraindicated in Parkinson's disease, what clinical consequences have resulted, and what is being done to address them; the conversation must be respectful, factual, and not defensive",
              "Do not attribute individual blame in the open disclosure conversation — explain that the open disclosure conversation must focus on what occurred and what is being done, without identifying the covering doctor or the nurse as responsible individuals; the governance review will determine accountability; premature attribution of blame in a family conversation is inappropriate, legally problematic, and undermines the integrity of the review",
              "File a critical incident report immediately — explain that the administration of a clearly contraindicated medication through a verbal order without reading the clinical handover constitutes a serious medication error and a critical incident; the incident report activates the risk management process, creates the governance record, and ensures the event is reviewed at the appropriate level",
              "Conduct a root-cause analysis examining systemic factors — explain that the RCA must examine why a verbal order for a psychiatric medication was accepted without the prescribing doctor reading the CL note; whether the ward has a policy requiring CL notes to be reviewed before psychotropic prescribing; whether the covering doctor had adequate access to the medication history; and what system changes will prevent recurrence; the root cause is the system, not the individual",
              "Support the nurse who received and administered the verbal order — explain that the nurse followed a verbal order from a doctor under clinical pressure; while the administration was an error, the nurse is not the root cause of the systemic failure; they require support, an honest explanation of the review process, and clear guidance that the purpose is learning rather than punishment unless a conduct concern emerges from the review",
              "Notify the clinical director and hospital risk management — explain that an adverse medication event causing clinical harm — rigidity and aspiration in a patient with documented contraindications — requires notification to the clinical director and hospital risk management team; the consultant cannot manage this event within the clinical team and must escalate through the appropriate governance channel",
              "Implement a systemic change to the CL communication process — explain that the adverse event demonstrates a gap in how CL recommendations reach covering doctors who did not attend the original consultation; a systemic change requiring the CL note to be reviewed and acknowledged before any psychotropic medication is prescribed for a documented patient must be recommended as a direct outcome of this review",
              "Update the medication chart with a clear haloperidol contraindication alert — because prevention of recurrence requires a visible system-level safeguard, not reliance on the next covering clinician reading the CL note",
            ],
          },
        ],
        zeroMarkTraps: [
          "Responding to the daughter's question with a defensive or evasive answer — 'the doctor made a mistake' or 'we're looking into it' without honest open disclosure does not meet the standard",
          "Attributing the error solely to the covering doctor or the nurse without identifying the verbal order policy and CL communication process as the systemic root cause",
          "Delaying the clinical stabilisation response to focus on governance — aspiration in a Parkinson's patient with existing pneumonia is an emergency that must be addressed before the documentation and reporting actions",
        ],
        postExaminerNote: "Candidates who distinguished the immediate clinical response (respiratory assessment, medical escalation) from the governance response (open disclosure, incident report, RCA), and who framed the root cause as a systemic gap in verbal order policy and CL communication rather than individual error, demonstrated consultant-level governance thinking. Candidates who focused only on open disclosure without the RCA layer, or who attributed blame to the nurse without identifying the system failure, scored in the lower range.",
      },
    ],
  },
  {
    id: "meq_008",
    title: "Mika — Aboriginal Adolescent, Psychosis Risk and Cultural Re-engagement",
    case: "Mika, 15, Aboriginal boy, CAMHS and ED interface",
    examSource: "Generated — Communication / Collaboration",
    topic: "CAMHS assessment of a 15-year-old Aboriginal boy with possible psychosis, cannabis use, risk to others and cultural mistrust; cultural formulation of voices, competing duties around refusal and information sharing, and consultant re-engagement after disengagement with refusal of a no-risk certificate to the school",
    primaryDomain: "Communication / Collaboration",
    totalMarks: 30,
    totalTimeMinutes: 30,
    stems: [
      {
        stemNumber: "2.1",
        vignette: "Mika, a 15-year-old Aboriginal boy, is brought to the emergency department by police after posting online that he would 'make everyone pay' after being suspended from school. He has been increasingly withdrawn, sleeping during the day, using cannabis most evenings, and refusing to attend school. His grandmother, who is his kinship carer, says he has been hearing the voice of his deceased uncle telling him he is 'weak.' Mika says he will not speak to 'government people.' The school has called ahead asking for a written statement about whether Mika is safe to return.",
        question: "Outline — list and justify the key information you would seek to clarify Mika's diagnosis and immediate risk. A list without because-clauses specific to this case will not be awarded any marks. (10 marks | 10 minutes)",
        commandWord: "outline_justify",
        marks: 10,
        timeMinutes: 10,
        stemSignals: [
          "The voice of the deceased uncle must not be automatically treated as psychosis — cultural and grief assessment with an Aboriginal health worker is required before any psychiatric label is applied",
          "The online threat requires specific risk assessment — content, target, means, planning and access to weapons must be clarified before any disposition decision",
          "Do not provide the school with written risk advice today — this cannot be done responsibly without a completed assessment",
        ],
        domains: [
          {
            name: "Award up to 10 marks from the following scorable points",
            marks: 10,
            keyPoints: [
              "Clarify the online threat's content, target, access to weapons and degree of planning — because risk to others depends on the specificity of the threat, the credibility of the means and whether Mika has a plan rather than an expression of general distress after a significant loss of face",
              "Explore suicidal ideation and self-directed risk — because 'make everyone pay' may mask despair, shame or hopelessness after suspension; the risk assessment must cover both directions of risk",
              "Assess psychotic symptoms systematically — because hearing the deceased uncle's voice may represent a first episode of psychosis, a grief experience, cannabis-related phenomena, trauma, or a culturally meaningful experience; each has different management implications and conflating them causes harm",
              "Ask about the cultural and spiritual meaning of the voice with Aboriginal health worker involvement — because mislabelling a culturally meaningful expression of grief or spiritual connection as a psychotic hallucination is a serious clinical error; the Aboriginal health worker is essential to this differentiation and cannot be substituted by the clinician's own judgement",
              "Assess cannabis pattern, intoxication and withdrawal — because cannabis can precipitate or worsen paranoia, anxiety and psychosis in an adolescent, and current intoxication may be altering both Mika's behaviour and the reliability of any risk assessment conducted now",
              "Clarify mood symptoms — because depression, irritability, sleep reversal, day sleeping and school withdrawal may indicate a primary mood disorder that underlies the risk presentation and responds to treatment",
              "Assess trauma, bullying, racism and contextual injury — because the school suspension and named peer conflict may be part of a wider pattern of psychosocial harm, racial exclusion or bullying that is driving the distress and the online threat",
              "Obtain grandmother's account — because she knows Mika's baseline behaviour, kinship supports, cultural context, safety concerns and what has changed; her perspective is indispensable to both diagnosis and engagement planning and she is his legal carer",
              "Seek school collateral — because the precipitant, the named peer, prior behavioural patterns and the context of the suspension are central to the violence risk assessment and cannot be reconstructed from the ED presentation alone",
              "Consider neurodevelopmental issues — because school refusal, peer conflict, cannabis use and social withdrawal may coexist with undiagnosed ADHD, ASD or learning difficulty that has not been identified or supported",
              "Assess protective factors — because connection to grandmother, culture, Elders, community, sport or Country are active clinical resources that may support safety planning; protective factors must be assessed with the same rigour as risk factors",
              "Assess capacity and maturity to consent or refuse care — because adolescent decision-making varies by issue and developmental maturity, and Mika's refusal to speak to government people must be understood and engaged as a clinical phenomenon with a specific cultural history",
              "Clarify prior service involvement, police contact and child protection history — because prior aggression, self-harm or child protection involvement changes the risk formulation and may indicate a pattern that requires a specific systemic response",
              "Assess family safety and grandmother's supervisory capacity at home — because any disposition toward home requires an honest assessment of what supervision and containment grandmother can realistically provide, not a reassurance-based discharge plan",
            ],
          },
        ],
        zeroMarkTraps: [
          "Treating the voice of the deceased uncle as self-evidently psychotic without assessing its cultural and spiritual meaning with an Aboriginal health worker",
          "Providing written risk advice to the school today without completing a clinical assessment — the school's urgency does not create clinical certainty",
          "Using a generic HEADSS framework without tying each item to diagnosis or specific risk formulation for this case",
        ],
        postExaminerNote: "Candidates who named the cultural differentiation of the voice as a clinical priority requiring Aboriginal health worker involvement before any psychosis diagnosis, and who specifically assessed the threat for content, target and means rather than treating it as generically high or low risk, scored in the upper range. Candidates who diagnosed psychosis based on the voice alone, or who agreed to provide the school with written advice before assessment was complete, demonstrated unsafe clinical reasoning.",
      },
      {
        stemNumber: "2.2",
        vignette: "Mika refuses admission and says he will run away if kept in hospital. His grandmother wants him home with family. The ED paediatrician is worried about psychosis and cannabis intoxication. The police officer asks whether the online threat needs to be reported to the school and the family of a named peer who Mika says 'deserves what is coming.'",
        question: "Discuss — list and debate your immediate management of Mika's refusal, risk to others, and information-sharing. You must name the tensions explicitly and take a defensible consultant position. (12 marks | 12 minutes)",
        commandWord: "debate",
        marks: 12,
        timeMinutes: 12,
        stemSignals: [
          "The named peer creates a specific duty to consider third-party protection — confidentiality is not absolute when there is an identified potential victim",
          "Refusal triggers capacity and risk assessment, not automatic detention — the question is whether the refusal is capacitous and whether risk can be safely managed at home",
          "Culturally safe home management with intensive follow-up may be less restrictive and more effective than mainstream inpatient admission for this specific patient",
        ],
        domains: [
          {
            name: "Award up to 12 marks from the following scorable points",
            marks: 12,
            keyPoints: [
              "There is tension between Mika's autonomy and foreseeable harm to himself or others — a defensible position is to use the least restrictive safe option, which may be culturally supported intensive home follow-up if risk can be adequately contained with grandmother and the Aboriginal health worker",
              "Refusal should trigger assessment of capacity, maturity, mental state and intoxication — because the clinical and legal question is not simply whether he refuses but whether his refusal is capacitous in the context of possible psychosis and cannabis intoxication",
              "If imminent serious risk cannot be safely managed at home, compulsory assessment may be justified under the relevant mental health legislation — because the online threat, the named peer, and possible psychosis may meet criteria for involuntary assessment as a last resort when voluntary options are exhausted",
              "If risk can be managed with grandmother and intensive follow-up, home care may be less restrictive and more culturally safe — because admission to a mainstream inpatient unit may worsen Mika's mistrust of government institutions and produce a more dangerous disengagement from services that makes future risk management impossible",
              "The named peer creates a duty to consider protection of an identifiable third party — because confidentiality is not absolute when there is a specific, credible and foreseeable threat to an identified person; the duty to warn or protect may apply depending on the jurisdiction and the credibility of the threat",
              "Information-sharing must be limited to what is necessary for safety — because over-disclosure may stigmatise Mika, damage trust with his community, and make future engagement with mental health services impossible for him and for other Aboriginal young people in the region",
              "The school may need practical safety advice but not a diagnostic report or risk prediction — because schools need specific adjustments, warning signs and escalation pathways, not a clinical formulation that breaches confidentiality or falsely implies psychiatric certainty about future violence",
              "Police involvement should be proportionate and clinically justified — because criminalising a distressed 15-year-old Aboriginal boy carries specific risks of entrenching a pattern of justice system contact, and the threshold for involving police must be clinical necessity not administrative convenience",
              "An Aboriginal health worker must be involved as the primary engagement resource — because Mika's refusal to speak to government people is a clinically relevant cultural response with a specific historical basis, and the Aboriginal health worker may establish an alliance that mainstream clinicians cannot",
              "A collaborative safety plan should include grandmother's supervision structure, cannabis reduction, removal of access to weapons, crisis contacts and a specific escalation protocol — because a safety plan co-created with Mika, his grandmother and the Aboriginal health worker is clinically more effective than one imposed by the clinical team",
              "The named peer and family may need warning via appropriate channels if the threat is specific and credible — because confidentiality has limits when there is an identifiable risk to a third party; this warning must be proportionate to the assessed credibility of the threat, not triggered by the mention of a name alone",
              "Mika should be told what information will be shared unless doing so increases danger — because transparency about the limits of confidentiality preserves therapeutic alliance and respects his dignity even when disclosure is necessary",
              "Assessment reliability may be limited by cannabis intoxication — because a risk assessment conducted under intoxication may not reflect Mika's baseline, and the formulation may need to be revised once he is sober and rested",
              "Short-term medication may be indicated if severe psychosis or agitation is driving the risk — because if there is clear evidence of psychosis rather than cultural grief, antipsychotic treatment may reduce risk more effectively than detention alone and should be offered before compulsion is applied",
              "If admission is required, it must include family contact and cultural support from the outset — because culturally unsafe isolation in a mainstream inpatient unit may cause more harm than the risk being managed, and Aboriginal cultural supports must be embedded from admission, not arranged as an afterthought",
              "Document the reasoning for all competing duty decisions — because decisions about information sharing, detention, third-party warning and cultural engagement in this case involve competing duties that will receive later scrutiny",
            ],
          },
        ],
        zeroMarkTraps: [
          "Treating Mika's refusal as automatically resolving the clinical question — refusal triggers capacity assessment, not discharge",
          "Sharing full clinical details with the school or police without assessing the specificity and credibility of the threat or considering the minimum necessary information principle",
          "Ignoring grandmother's protective role and treating her preference for home care as clinically irrelevant",
        ],
        postExaminerNote: "Candidates who named the tension between Mika's autonomy and third-party protection explicitly, identified home care with intensive support as a potentially less restrictive and more culturally safe option than mainstream admission, and engaged the named peer as a specific duty to protect rather than a generic confidentiality question scored in the upper range. Candidates who immediately moved to compulsory admission without exploring culturally safe alternatives, or who disclosed clinical details to the school without applying the minimum necessary information principle, did not achieve the standard.",
      },
      {
        stemNumber: "2.3",
        vignette: "Two weeks later, Mika has been discharged home with intensive follow-up. He misses two appointments. His school refuses re-entry unless your service provides a 'no-risk certificate.' The Aboriginal health worker tells you the family feels blamed and may disengage. Your registrar asks whether to close the case because Mika is 'non-compliant.'",
        question: "Describe — list and explain your consultant response to the registrar and the school. A list without explanation will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Do not close the case — missed appointments in a high-risk Aboriginal adolescent are a clinical signal requiring re-engagement, not a reason for closure",
          "Do not provide a no-risk certificate — psychiatrists cannot certify the absence of future risk; this is a zero-mark clinical error regardless of how the school frames the request",
          "Replace 'non-compliance' with 'engagement barriers and service responsibility' — the language the registrar uses reveals the clinical framing that must be corrected",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Advise the registrar not to close the case — explain that missed appointments in a high-risk adolescent with possible psychosis, recent online threats and a named peer may signal disengagement driven by shame, cultural mistrust or practical barriers; premature closure may directly increase risk and is clinically indefensible in this context",
              "Reframe the task as assertive engagement rather than waiting for compliance — explain that when risk and cultural mistrust are present, the service must adapt its approach to reach the young person; the burden of engagement cannot be placed on a 15-year-old Aboriginal boy who has already told the service he does not trust government institutions",
              "Ask the Aboriginal health worker how to repair the relationship with the family — explain that the AHW is the most important re-engagement resource in this case; their knowledge of Mika, his grandmother and the community's concerns about being blamed is essential and cannot be replicated by the clinical team",
              "Contact grandmother respectfully and directly — explain that grandmother is the key protective adult and kinship carer; a respectful, non-blaming contact may reveal why appointments were missed and provide a re-engagement pathway that does not further alienate the family",
              "Offer flexible follow-up including home visits or community-based contact — explain that clinic attendance may itself be the engagement barrier; offering Mika's preferred location, timing and format demonstrates service adaptation rather than a demand for compliance with a system that already mistrusts him",
              "Review current risk before any school re-entry advice is given — explain that two weeks have passed and two appointments have been missed; the ED risk formulation is now outdated and a current risk review must occur before any advice about school return is provided to anyone",
              "Refuse to provide a no-risk certificate — explain that psychiatrists cannot certify the absence of future risk; providing such a document would be clinically dishonest, legally dangerous and would create a false impression of predictive certainty that psychiatry does not have and has never claimed",
              "Provide a formulation-based school safety and return plan instead — explain that the school's legitimate concern can be addressed with a practical plan specifying warning signs, classroom supports, environmental adjustments, escalation pathways and who to contact; this meets the school's actual need without disclosing confidential clinical information or making an impossible guarantee",
              "Seek Mika's consent for school liaison where possible — explain that collaborative planning with Mika's agreement is clinically and ethically better than information exchange conducted without him; his participation in the plan increases both its effectiveness and his sense of agency",
              "Share limited information without consent only if necessary to manage serious foreseeable risk — explain that the threshold for sharing without consent is serious foreseeable harm, not the school's administrative preference or re-entry policy",
              "Supervise the registrar to address the clinical reasoning behind the case closure suggestion — explain that the registrar's suggestion may reflect therapeutic pessimism, service pressure or anxiety about non-engagement; supervision should address the ethical obligation of assertive re-engagement, the risk threshold for closure, and the language of compliance versus engagement barriers",
              "Consider a network meeting with family, school, Aboriginal health worker and CAMHS — explain that fragmented responses from multiple parties are increasing the family's sense of blame and the risk of full disengagement; a coordinated network meeting facilitated with cultural support is more likely to produce a sustainable plan than separate conversations with each stakeholder",
            ],
          },
        ],
        zeroMarkTraps: [
          "Providing or drafting a no-risk certificate for the school — this is a zero-mark clinical and professional error regardless of how the school frames the request",
          "Agreeing to close the case because of two missed appointments — non-attendance in a high-risk Aboriginal adolescent is a re-engagement signal, not a closure criterion",
          "Failing to address the registrar's use of 'non-compliant' as a framing problem that reflects the clinical approach requiring correction",
        ],
        postExaminerNote: "Candidates who refused the no-risk certificate and explained why, who reframed missed appointments as engagement barriers requiring assertive outreach rather than case closure, and who named the Aboriginal health worker as the primary re-engagement resource scored in the upper range. Candidates who agreed to provide a risk certificate or who closed the case after two missed appointments did not achieve the standard.",
      },
    ],
  },
  {
    id: "meq_009",
    title: "Amara — Seclusion, Trauma-Informed Care and Governance",
    case: "Amara, 29, involuntary admission, bipolar disorder manic with psychotic features, childhood sexual trauma",
    examSource: "Generated — Governance / Systems / Leadership",
    topic: "Acute inpatient mania with psychotic features and childhood sexual trauma; tests trauma-informed rapid tranquillisation decision, unsafe seclusion governance, dignity in seclusion, and consultant leadership under institutional staffing pressure with retrospective documentation disclosure",
    primaryDomain: "Governance / Systems / Leadership",
    totalMarks: 32,
    totalTimeMinutes: 32,
    stems: [
      {
        stemNumber: "1.1",
        vignette: "Amara is a 29-year-old woman admitted involuntarily with a relapse of bipolar disorder, current episode manic with psychotic features. She is pacing, shouting that staff are 'poisoning women,' and repeatedly entering other patients' rooms. She has a history of childhood sexual trauma and becomes highly distressed when approached by male staff. The unit is full. The HDU has two occupied beds and only one senior mental health nurse is rostered overnight because of staff sick leave. The registrar phones to ask whether to sedate Amara immediately.",
        question: "Outline — list and justify your immediate consultant-level priorities in managing this situation. A list without because-clauses specific to this case will not be awarded any marks. (10 marks | 10 minutes)",
        commandWord: "outline_justify",
        marks: 10,
        timeMinutes: 10,
        stemSignals: [
          "Trauma history changes the clinical approach — male staff approaching Amara may worsen agitation and re-traumatise; this is not background information, it is a management directive",
          "Rapid tranquillisation is not the first intervention — it is a last resort when least restrictive options have failed; the registrar's framing requires direct clinical supervision and redirection",
          "Unsafe staffing is part of the clinical risk — the roster is not a background inconvenience; it must be escalated as a patient safety issue",
        ],
        domains: [
          {
            name: "Award up to 10 marks from the following scorable points",
            marks: 10,
            keyPoints: [
              "Immediate safety must be prioritised — because Amara is entering other patients' rooms and the risk to her, to staff, and to other patients is actively escalating; the first obligation is to prevent harm while the clinical assessment is being made",
              "Formulate the behaviour as mania with psychosis plus trauma activation, not simply violence — because Amara's distress when approached by male staff is directly linked to her childhood sexual trauma history, and misattributing her agitation as straightforward aggression will lead to coercive responses that worsen re-traumatisation and escalate risk",
              "Attempt a female-led engagement approach first — because her stated fear of male staff is clinically material and a female-led, low-stimulus, relational de-escalation approach is both the least restrictive and the most clinically appropriate first-line intervention",
              "Attempt least restrictive effective intervention before medication — because coercion may re-traumatise Amara, damage the therapeutic relationship, and worsen the agitation it is intended to address; de-escalation, environmental modification, and female-led engagement must be attempted before any pharmacological intervention is initiated",
              "Modify the environment — because reducing stimulation, moving other vulnerable patients away from the area, and increasing space for Amara reduces the risk to others without requiring coercive intervention",
              "Medication may be indicated if imminent harm persists despite de-escalation — because mania with psychosis can escalate rapidly and if verbal and environmental approaches have failed and harm is imminent, pharmacological intervention becomes clinically justified",
              "Medication choice must be individualised — because rapid tranquillisation is not a generic intervention; it requires consideration of medical risk, previous response, pregnancy possibility, current intoxication, adverse effects, and trauma history before an agent and route are selected",
              "The registrar requires direct consultant supervision — because after-hours decisions about coercion, sedation, and seclusion carry significant clinical and legal risk that a registrar should not bear alone; the consultant must be directly involved, not managing by phone only",
              "Unsafe staffing must be escalated immediately — because a single senior nurse on an overnight shift with a full unit and an acutely agitated involuntary patient is a foreseeable safety failure; this requires escalation to the on-call executive and nursing management, not acceptance as a background constraint",
              "HDU use should be reviewed — because Amara's acuity may require higher-observation care even if HDU beds are occupied; the clinical need must drive the bed decision, not the current occupancy",
              "Trauma-informed care must be explicit throughout — because humiliation, male-staff approaches, and physical confrontation may compound Amara's trauma and create lasting clinical harm beyond the acute episode",
              "Consider physical contributors or complicating factors — because intoxication, pain, sleep deprivation, or postpartum or pregnancy status could worsen agitation and must be excluded before attributing the presentation entirely to mania",
              "Document the rationale for every intervention — because restrictive interventions including medication, physical restraint, and seclusion require contemporaneous documentation of the risks assessed, alternatives attempted, legal basis, clinical rationale, and review plan",
            ],
          },
        ],
        zeroMarkTraps: [
          "Instructing the registrar to sedate and seclude without attempting female-led de-escalation first — rapid tranquillisation is a last resort, not a first response to nursing anxiety",
          "Ignoring the trauma history and managing Amara as a generic agitated patient — male staff approaches in the context of childhood sexual trauma are a clinical contraindication, not a preference",
          "Treating the staffing shortage as background context rather than an active patient safety risk requiring escalation",
        ],
        postExaminerNote: "Candidates who named the trauma history as a management directive rather than background information, who redirected the registrar toward female-led de-escalation before pharmacology, and who simultaneously escalated the unsafe roster as a governance issue demonstrated consultant-level breadth. Candidates who approved rapid tranquillisation as the first response, or who ignored the staffing context, scored in the lower range.",
      },
      {
        stemNumber: "1.2",
        vignette: "Two hours later, Amara is placed in seclusion after striking a nurse who blocked the exit. The seclusion room camera is working intermittently. The agency nurse says she is not credentialed in seclusion observations but was told to 'just watch the door.' Amara is menstruating and is calling out that she needs a female nurse.",
        question: "Describe — list and explain how you would manage the ongoing seclusion and ward safety issues. A list without explanation will not be awarded any marks. (10 marks | 10 minutes)",
        commandWord: "describe_explain",
        marks: 10,
        timeMinutes: 10,
        stemSignals: [
          "Seclusion is not a location — it is an active treatment requiring continuous clinical review; once started it cannot simply continue",
          "An uncredentialed observer and an intermittent camera make this seclusion legally and clinically unsafe — these are not minor inconveniences",
          "Menstruation is a dignity issue, not a nursing inconvenience — failing to respond is a human rights failure",
        ],
        domains: [
          {
            name: "Award up to 10 marks from the following scorable points",
            marks: 10,
            keyPoints: [
              "Review whether ongoing seclusion remains clinically necessary — explain that seclusion must not continue simply because it has been initiated; continuing to seclude Amara requires active current clinical justification based on her present mental state and risk level, not the risk level at the time seclusion was initiated",
              "Assess Amara directly if clinically safe — explain that continued seclusion requires the clinician to form a current view of her mental state, distress level, and whether the seclusion is reducing or worsening her agitation; clinical review cannot be conducted through an intermittent camera and an uncredentialed observer",
              "Restore proper observation immediately — explain that an unreliable camera and a nurse who is not credentialed in seclusion observations make this seclusion clinically and legally unsafe; the observation failure must be corrected before anything else proceeds, including by redeploying credentialed staff or escalating to executive management",
              "Escalate to senior nursing management and the on-call executive — explain that the service is currently unable to meet the minimum safe requirements for seclusion and this constitutes a critical safety gap requiring immediate executive-level response, not a problem to be managed within the existing roster",
              "Provide a female staff member to respond to Amara's request — explain that Amara has childhood sexual trauma, is menstruating, and has specifically requested female staff; failing to provide this is both a clinical failure and a human rights issue that may worsen her trauma response and escalate agitation",
              "Attend to menstrual hygiene, toileting, hydration, food, and privacy — explain that dignity is a clinical and human-rights obligation that does not pause during seclusion; failure to meet these needs is not a nursing inconvenience but a form of institutional harm to a vulnerable patient",
              "Assess whether seclusion is worsening Amara's agitation — explain that for a patient with childhood sexual trauma, confinement may increase fear, dissociation, and distress rather than reduce risk; if seclusion is escalating her distress, it may be counterproductive and an alternative containment approach must be considered",
              "Use medication only with a clear documented rationale — explain that chemical restraint should not be used as a substitute for inadequate staffing or as a way to manage the clinical consequences of a deficient seclusion process",
              "Maintain regular medical review — explain that prolonged agitation, dehydration, inadequate nutrition, sedation effects, and the risk of physical injury are all active clinical concerns during seclusion that require medical oversight, not nursing observation alone",
              "Debrief the assaulted nurse and involved staff — explain that staff who have been physically assaulted and who are managing a complex clinical situation understaffed and under-skilled require immediate acknowledgement, psychological support, and clear guidance; staff fear may lead to punitive or avoidant care if not addressed",
              "Develop a clear exit plan from seclusion — explain that the goal of seclusion is reintegration to the least restrictive environment and a documented exit plan with specific clinical criteria for ending seclusion must be in place from the time seclusion begins",
              "Document all observation failures and corrective actions contemporaneously — explain that the camera failure, the uncredentialed observer, and the escalation steps taken must all be recorded in real time because the governance risk is already evident and the documentation will be essential for any review",
              "Ensure the safety of other patients — explain that Amara's agitation, the seclusion process, and the under-staffed ward environment are affecting the entire unit and other patients require a specific safety plan for the overnight period",
            ],
          },
        ],
        zeroMarkTraps: [
          "Allowing seclusion to continue without clinical review because it has already been initiated — seclusion requires active ongoing justification, not passive continuation",
          "Ignoring the camera failure and uncredentialed observer as minor operational issues — these failures make the current seclusion legally and clinically indefensible",
          "Failing to respond to Amara's request for a female nurse and menstrual care — this is a human rights and clinical obligation, not an optional nursing task",
        ],
        postExaminerNote: "Candidates who treated seclusion as an active treatment requiring immediate review rather than a location to be managed, who named the camera and credentialing failures as governance risks requiring escalation, and who addressed menstrual care and dignity as clinical obligations scored in the upper range. Candidates who continued seclusion without review or who listed observation requirements without addressing the specific failures in this case scored in the lower range.",
      },
      {
        stemNumber: "1.3",
        vignette: "The next morning, Amara's sister complains that Amara was 'locked in a room all night without dignity.' The nursing unit manager tells you the ward had no safe alternative because executive management has refused extra staffing for months. A junior registrar also tells you privately that staff routinely document seclusion reviews retrospectively because 'there is no time to do them properly.'",
        question: "Discuss — list and debate the governance, ethical, and leadership issues raised. You must name the tensions explicitly and take a defensible consultant position. (12 marks | 12 minutes)",
        commandWord: "debate",
        marks: 12,
        timeMinutes: 12,
        stemSignals: [
          "Retrospective seclusion documentation is not a time-management problem — it is a professional and legal integrity issue that the registrar has disclosed in confidence; both the practice and the disclosure require specific consultant responses",
          "The NUM's framing converts this from an individual incident to a governance failure — repeated executive refusals of staffing requests are the root cause, not individual nursing decisions",
          "Do not collude with minimisation — the consultant's professional obligation to escalate unsafe practice does not change because the system created the conditions",
        ],
        domains: [
          {
            name: "Award up to 12 marks from the following scorable points",
            marks: 12,
            keyPoints: [
              "There is tension between staff safety and Amara's right to lawful, dignified, least-restrictive care — a defensible consultant position is that both must be addressed simultaneously and neither can be sacrificed for the other; unsafe staffing cannot justify unsafe or undignified seclusion",
              "The sister's complaint requires an open, respectful, and non-defensive response — because Amara may have experienced avoidable loss of dignity and the complaint reflects a legitimate concern that the service has an obligation to take seriously rather than manage defensively",
              "Retrospective seclusion documentation is a serious professional and legal issue — because seclusion reviews must be contemporaneous to be clinically valid and legally defensible; retrospective documentation creates a false record that misrepresents what occurred and may constitute professional misconduct",
              "The registrar's disclosure requires a supportive and non-punitive response — because the registrar has disclosed a systemic practice in confidence and likely felt trapped in a normalised unsafe system; they require supervisory support, an honest explanation of why the practice must change, and protection from retaliation for raising a safety concern",
              "The executive's repeated refusal of staffing requests converts a single incident into a systemic governance failure — because if management has been warned repeatedly that staffing is unsafe and has not responded, the responsibility for the conditions that produced this incident extends to executive leadership and cannot be attributed solely to the clinical team",
              "The consultant must not collude with minimisation — because the NUM's framing that there was no alternative is understandable given the pressure but clinically and professionally unacceptable as a reason to avoid governance escalation; the consultant's professional obligation to escalate unsafe practice is not suspended by institutional pressure",
              "Staff should not be scapegoated individually if the system knowingly created unsafe conditions — because individual nurses responding to a critically short-staffed overnight shift with an acutely agitated patient are not the root cause of the governance failure; the review must examine the system, not punish individuals",
              "Documentation must be corrected transparently — because inaccurate retrospective seclusion records create clinical, legal, and ethical harm; the correction process must be transparent and must acknowledge the discrepancy rather than simply overwriting the existing records",
              "Amara's care plan must be revised — because future management must account for her trauma history, gender of staff, the seclusion experience, and the clinical impact of the overnight events on her therapeutic relationship with the service",
              "The assaulted nurse also requires formal acknowledgement and support — because staff injury is a legitimate harm that must be documented, reported, and followed up clinically and through the appropriate workplace health process",
              "The complaint should trigger a formal review of seclusion governance — because the camera failure, the uncredentialed observer, the staffing shortage, the dignity failure, and the retrospective documentation all represent multiple simultaneous seclusion governance failures requiring audit, training, and systemic response",
              "There may be a duty to notify relevant internal governance bodies — because restrictive-practice breaches with documented dignity failures and documentation integrity concerns carry organisational reporting obligations that cannot be managed within the clinical team",
              "The service must consider whether admissions should continue if minimum safe staffing cannot be provided — because accepting involuntary patients into a unit that cannot meet minimum safe seclusion requirements creates a foreseeable risk of harm that may not be clinically or legally justifiable",
              "The registrar requires supervision and moral injury support — because believing they have participated in or failed to prevent harm may impair future clinical practice and requires structured supervisory support, not just reassurance",
            ],
          },
        ],
        zeroMarkTraps: [
          "Treating retrospective documentation as a time-management problem rather than a professional integrity and legal validity issue",
          "Colluding with the NUM's framing that there was no alternative — accepting institutional pressure to minimise is a consultant-level governance failure",
          "Scapegoating individual nurses without examining the system failure created by repeated executive refusals of staffing requests",
        ],
        postExaminerNote: "Candidates who named both individual accountability and system accountability explicitly, who treated retrospective documentation as a professional integrity issue rather than a documentation tip, and who identified the executive staffing refusal as the root-cause governance failure scored in the upper range. Candidates who focused only on Amara's clinical management without engaging the governance layer, or who accepted the NUM's framing uncritically, did not achieve the standard.",
      },
    ],
  },
  {
    id: "meq_010",
    title: "Dr Ethan K — Impaired Practitioner, Opioid Dependence and Professional Certification",
    case: "Dr Ethan K, 45, emergency physician, depression and opioid dependence",
    examSource: "Generated — Ethics / Professionalism / Legal",
    topic: "Private psychiatric assessment of an impaired emergency physician with depression and opioid dependence obtained from multiple prescribers; tests dual role of treating doctor and public safety professional, confidentiality limits with third-party information, and resistance to institutional pressure to falsify certification",
    primaryDomain: "Ethics / Professionalism / Legal",
    totalMarks: 30,
    totalTimeMinutes: 30,
    stems: [
      {
        stemNumber: "2.1",
        vignette: "Dr Ethan K is a 45-year-old emergency physician referred urgently by his GP for worsening depression, insomnia, and escalating use of oxycodone obtained from multiple prescribers after a back injury. He says he has been 'barely functioning' but is rostered for overnight ED shifts this week. He asks you not to contact anyone because disclosure would 'destroy my career.' He denies suicidal intent but says, 'If the Board finds out, I'm finished.'",
        question: "Outline — list and justify the key ethical and clinical issues you would identify in this assessment. A list without because-clauses specific to this case will not be awarded any marks. (10 marks | 10 minutes)",
        commandWord: "outline_justify",
        marks: 10,
        timeMinutes: 10,
        stemSignals: [
          "The dual role is the defining clinical frame — treating doctor and public safety professional simultaneously; these cannot be separated",
          "Shame and career fear are clinical risk factors, not just contextual background — they elevate suicide risk and drive concealment",
          "Confidentiality is not absolute — patient safety and public safety may override privacy when impairment is active",
        ],
        domains: [
          {
            name: "Award up to 10 marks from the following scorable points",
            marks: 10,
            keyPoints: [
              "Assess depression severity and suicide risk — because Ethan's statement 'if the Board finds out I'm finished' combined with hopelessness, insomnia, and shame represents a significant suicide risk that must be assessed immediately and not subordinated to the professional conduct issues",
              "Characterise the opioid use pattern — because multiple prescribers suggests loss of control, dependence, or deliberate circumvention of prescribing safeguards; establishing the degree of dependence, daily dose, route, and functional impairment determines both the clinical and the public safety response",
              "Fitness to practise is the central clinical and ethical issue — because Ethan is rostered for overnight ED shifts this week while possibly cognitively impaired by opioids; the question of whether he can safely practise is not peripheral but the primary issue driving every other decision in this assessment",
              "Confidentiality is important but not absolute — because patient safety and the safety of Ethan's ED patients may override his right to privacy if active impairment creates a foreseeable risk of harm to identifiable others; this limit must be explained to him transparently, not discovered later",
              "Shame and career fear are clinically relevant risk amplifiers — because they increase suicide risk, drive concealment and continued unsafe practice, and must be acknowledged as clinical phenomena rather than simply respected as a preference for privacy",
              "Medical comorbidity and pain must be assessed — because the opioid use began with a back injury and untreated or undertreated pain may be maintaining opioid dependence; addressing the pain management creates an alternative pathway that supports recovery",
              "Medication access and prescribing behaviour must be explored — because doctors may obtain, self-prescribe, or divert controlled medications in ways that are not apparent from self-report; the multiple-prescriber pattern requires specific exploration of how much medication Ethan has access to and in what clinical settings",
              "Work performance and medication errors require clarification — because public safety risk depends on actual functional impairment at work, not merely the presence of dependence; Ethan's self-report of 'barely functioning' must be explored in terms of specific clinical errors or near-misses",
              "Protective factors and supports must be identified — because safe treatment depends on containment outside clinical sessions; family support, colleague awareness, and alternative accommodation during acute risk all affect the feasibility of outpatient management",
              "Capacity and insight must be assessed — because opioid intoxication, withdrawal, depression, and shame may each impair judgement in different ways; the reliability of Ethan's self-report and his ability to make decisions about treatment and work must be assessed directly",
              "Immediate removal from clinical duties is required if impairment is confirmed — because monitoring alone is clinically and professionally insufficient when a doctor may be making life-and-death decisions for patients while opioid-impaired",
              "Professional obligations should be discussed transparently with Ethan — because explaining the limits of confidentiality and the potential notification pathway at the outset preserves trust and gives Ethan the opportunity to act voluntarily before the threshold for mandatory disclosure is reached",
            ],
          },
        ],
        zeroMarkTraps: [
          "Promising total confidentiality to Ethan at the outset — this is both clinically inaccurate and professionally dangerous in the context of active impairment and patient safety risk",
          "Treating Ethan only as a depressed patient without identifying the fitness-to-practise and public safety dimensions as the primary clinical and ethical issue",
          "Deferring the question of his rostered ED shifts — Ethan is working this week; the immediate safety question cannot be deferred to a later appointment",
        ],
        postExaminerNote: "Candidates who named the dual role explicitly — treating doctor and public safety professional — and who assessed suicide risk alongside fitness to practise rather than treating these as separate problems scored in the upper range. Candidates who focused only on depression and opioid dependence without addressing the rostered ED shifts and the public safety obligation did not achieve the standard.",
      },
      {
        stemNumber: "2.2",
        vignette: "Ethan's partner phones your rooms without Ethan's knowledge. She says he has been drowsy while driving their two children, has fallen asleep during dinner, and has made several medication errors at work. She begs you not to tell him she called because she is afraid he will leave the family.",
        question: "Discuss — list and debate how you would manage confidentiality, third-party information, and potential risk to patients and children. You must name the tensions explicitly and take a defensible consultant position. (12 marks | 12 minutes)",
        commandWord: "debate",
        marks: 12,
        timeMinutes: 12,
        stemSignals: [
          "Receiving information is not the same as disclosing information — these are two separate clinical and ethical acts with different thresholds",
          "Drowsy driving with children in the car is a child safety concern independent of the professional conduct issue",
          "The partner's fear of abandonment is real and must be acknowledged — but it cannot override child safety or patient safety",
        ],
        domains: [
          {
            name: "Award up to 12 marks from the following scorable points",
            marks: 12,
            keyPoints: [
              "There is tension between Ethan's right to confidentiality and the foreseeable harm to his ED patients and children — a defensible position is that confidentiality is not absolute and the combination of reported medication errors at work and drowsy driving with children may reach the threshold for limited disclosure",
              "Receiving information from the partner does not breach Ethan's confidentiality — explain that listening to the partner's account is not a disclosure of Ethan's clinical information; clinicians may receive third-party information without consent and should do so when the information is material to safety",
              "The partner's clinical information materially changes the risk assessment — explain that drowsy driving with children and reported medication errors in an ED doctor using opioids are not low-level concerns; they represent specific, credible, and foreseeable harm to identifiable people that must be incorporated into the risk formulation",
              "Ethan's clinical details should not be disclosed to the partner without consent — explain that receiving information is ethically separate from disclosing information; the partner should be told only that her concerns have been heard and that safety is being addressed, not given information about Ethan's diagnosis or treatment",
              "Encourage Ethan to involve his partner voluntarily — explain that family support may improve safety, reduce concealment, and facilitate treatment engagement; encouraging voluntary disclosure preserves both Ethan's autonomy and the therapeutic alliance while achieving the safety objective",
              "Be transparent with Ethan that safety concerns have been raised — explain that Ethan should generally be told that someone has expressed concern about safety unless doing so would increase risk to the partner; in this case there is no indication of domestic danger, so transparency with Ethan is appropriate",
              "Child safety must be assessed as a distinct concern — explain that drowsy driving with children creates a reportable child safety risk that must be assessed and addressed independently of the professional conduct issue; if this risk meets the mandatory notification threshold in the jurisdiction it requires action regardless of Ethan's preferences",
              "Patient safety must be addressed urgently — explain that medication errors in an ED context can harm multiple unidentified patients; the risk to Ethan's patients is not speculative but supported by the partner's specific account and must drive an immediate decision about his fitness to work",
              "Work restrictions may be required immediately — explain that waiting for Ethan to voluntarily agree to stop working while patient harm is ongoing is clinically and professionally indefensible; the least restrictive appropriate step is removal from clinical duties pending assessment",
              "Mandatory or professional notification pathways must be considered — explain that the combination of active impairment, reported medication errors, and child safety concerns may reach the threshold for notification to the medical board or health practitioner authority depending on local requirements",
              "The least disclosing option consistent with safety management should be used — explain that confidentiality should be breached only to the extent necessary to prevent the identified harm; a blanket disclosure to the partner or employer without this analysis is not appropriate",
              "A crisis plan must address driving, medication access, supervision of children, and clinical risk — explain that an immediate practical safety plan covering these specific risks is more protective than a general plan to engage Ethan in treatment over the coming weeks",
              "The partner's fear of abandonment must be acknowledged but cannot override child or public safety — explain that her concern is understandable and clinically relevant to her own welfare, but the threshold for child safety notification is not altered by the consequences for the family relationship",
              "Advice should be sought from medico-legal or governance bodies if uncertainty remains — explain that impaired-practitioner cases carry complex intersecting legal and professional obligations that may require specialist advice before final decisions are made",
            ],
          },
        ],
        zeroMarkTraps: [
          "Refusing to receive the partner's call — clinicians may receive third-party safety information without breaching the patient's confidentiality",
          "Disclosing Ethan's clinical details to the partner — receiving information and disclosing information are ethically distinct acts with different thresholds",
          "Ignoring the child safety concern because it is secondary to the professional conduct issue — drowsy driving with children is a mandatory notification concern in its own right",
        ],
        postExaminerNote: "Candidates who explicitly separated receiving information from disclosing information as two distinct ethical acts, who named child safety and patient safety as separate actionable concerns, and who took a defensible position on the limits of confidentiality without disclosing clinical details to the partner scored in the upper range. Candidates who refused to take the call, or who treated all confidentiality concerns as equivalent, did not achieve the standard.",
      },
      {
        stemNumber: "2.3",
        vignette: "Ethan agrees to admission but insists it be recorded as 'stress leave' only. He asks you to write a certificate stating he is fit to return to clinical duties after three days because he cannot afford unpaid leave. The hospital CEO informally asks whether this can be 'handled discreetly' because Ethan is well known locally.",
        question: "Describe — list and explain your professional response. A list without explanation will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "A false certificate is a zero-mark action regardless of the compassionate framing — financial hardship cannot determine clinical certification",
          "The CEO's request is a conflict of interest that must be documented — informal institutional pressure is itself a governance issue",
          "Discreet treatment is not the same as unsafe concealment — this distinction is the clinical and professional hinge of the stem",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Decline to write a misleading certificate — explain that medical certification must be truthful and clinically defensible; certifying Ethan as fit to return after three days when he has opioid dependence, depression, and documented impairment would be both clinically inaccurate and professionally dishonest",
              "'Stress leave' alone is an inaccurate diagnosis — explain that recording the admission as stress leave when opioid dependence, depression, and impaired clinical practice are present misrepresents the clinical reality and creates a false medical record",
              "Return-to-work fitness requires functional recovery, not time elapsed — explain that three days of admission is insufficient to establish that Ethan's opioid dependence is treated, his depression is remitting, and his clinical judgement is restored; fitness certification must be based on clinical criteria, not duration of leave or financial need",
              "Ethan's financial hardship must be acknowledged compassionately — explain that his financial concern is real and requires a compassionate response; however, the solution is to help him access appropriate sick leave entitlements, occupational support services, or financial assistance rather than to falsify clinical documentation",
              "The CEO's request creates a conflict of interest — explain that an informal request from hospital leadership to handle an impaired doctor's case 'discreetly' creates pressure that may compromise clinical independence; this request must be acknowledged, declined where it conflicts with professional obligations, and documented",
              "Discreet treatment does not mean unsafe concealment — explain that maintaining appropriate clinical privacy for Ethan's treatment is both possible and appropriate; however, discretion about the existence of treatment cannot extend to falsifying records, suppressing mandatory notifications, or certifying fitness that has not been established",
              "An independent occupational or fitness-for-work assessment should be recommended before return to ED duties — explain that return to a high-acuity clinical role after opioid dependence and depression requires independent functional assessment, not a certificate from the treating psychiatrist who has a therapeutic relationship with Ethan",
              "Coordinate with Ethan's GP, addiction specialist, and relevant health practitioner program with consent — explain that a safe return-to-work plan requires multidisciplinary coordination, monitoring, and a graduated return that cannot be managed by one clinician in isolation",
              "If mandatory notification threshold is met, act despite Ethan's preference — explain that the public safety obligation overrides Ethan's reputational concern and the CEO's preference for discretion; notification must occur if the legal and professional threshold has been reached",
              "Document the certificate request, the CEO's request, and the clinical reasoning for declining both — explain that informal pressure from institutional leadership is itself a governance event that must be recorded; the documentation protects the treating clinician and creates a reviewable record of the decisions made",
            ],
          },
        ],
        zeroMarkTraps: [
          "Writing the certificate — this is a zero-mark professional error regardless of the compassionate framing around financial hardship",
          "Complying with or not documenting the CEO's informal request — institutional pressure to handle a case discreetly is a conflict of interest requiring documentation, not compliance",
          "Treating discreet management as equivalent to unsafe concealment — appropriate clinical privacy for Ethan's treatment is legitimate; falsifying records and suppressing notifications is not",
        ],
        postExaminerNote: "Candidates who declined the certificate clearly and explained why time-based rather than function-based certification is clinically indefensible, who named the CEO's request as a conflict of interest requiring documentation, and who distinguished legitimate clinical privacy from unsafe concealment scored in the upper range. Candidates who wrote the certificate or who agreed to the CEO's request without identifying it as a governance concern did not achieve the standard.",
      },
    ],
  },
  {
    id: "meq_011",
    title: "Nadia — Syrian Refugee, CAMHS, Family Conflict and Online Exploitation",
    case: "Nadia, 13, Syrian refugee girl, CAMHS, self-harm, online sexual exploitation",
    examSource: "Generated — Communication / Collaboration",
    topic: "CAMHS assessment of a 13-year-old Syrian refugee with panic, self-harm, and online sexual exploitation by a male relative; tests culturally sensitive first assessment, confidentiality limits with child protection obligations, managing competing duties to family, school, and religious healer, and collaborative management when father refuses further appointments",
    primaryDomain: "Communication / Collaboration",
    totalMarks: 28,
    totalTimeMinutes: 28,
    stems: [
      {
        stemNumber: "3.1",
        vignette: "Nadia is a 13-year-old girl who arrived in Australia with her parents as refugees from Syria four years ago. She is referred by her school after panic episodes, refusing to attend class, and superficial cutting on her forearm. Her father says mental health services will bring shame on the family. Her mother speaks limited English and appears tearful but says very little. Nadia asks to speak to you alone and says, 'Please don't tell Dad everything.'",
        question: "Outline — list and justify how you would approach the first family assessment. A list without because-clauses specific to this case will not be awarded any marks. (10 marks | 10 minutes)",
        commandWord: "outline_justify",
        marks: 10,
        timeMinutes: 10,
        stemSignals: [
          "Confidentiality framing must happen before sensitive questions — Nadia has told you she wants privacy before the assessment begins; this must be addressed directly",
          "The mother's silence is clinical data — limited English, tears, and little speech in the presence of the father require specific attention",
          "The father's shame concern is a clinical engagement problem, not an obstacle — it must be explored respectfully as it will determine whether the family returns",
        ],
        domains: [
          {
            name: "Award up to 10 marks from the following scorable points",
            marks: 10,
            keyPoints: [
              "Establish safety and engagement before clinical assessment — because shame, fear, and cultural mistrust may prevent disclosure if the family does not feel the clinical encounter is safe; building enough trust for Nadia and her parents to engage honestly is a prerequisite for accurate assessment",
              "Use a professional interpreter for the mother — because relying on Nadia or her father to interpret distorts the accuracy of the mother's account, compromises her privacy, and places an inappropriate burden on a 13-year-old or creates a power dynamic that silences the mother further",
              "Explain confidentiality and its limits at the outset — because Nadia has explicitly asked that her father not be told everything; this expectation must be addressed honestly before assessment begins, explaining that serious safety concerns may require disclosure while other information will remain private",
              "See Nadia alone as part of the assessment — because adolescents require individual space to disclose trauma, abuse, bullying, or self-harm that they would not share in a family context; this is developmentally appropriate and should be explained to the parents as standard practice",
              "Include parents respectfully in the assessment — because family support is central to both safety and treatment in this context and the parents' understanding and cooperation are essential for any plan to succeed",
              "Explore the father's concerns about shame — because his stated concern about shame will determine whether the family re-engages with the service; understanding what specifically he fears and addressing those concerns respectfully may be the most important engagement task of the first appointment",
              "Attend to the mother's silence — because her limited English, tears, and minimal speech in the father's presence may reflect trauma, depression, domestic coercion, or language isolation; her wellbeing is a separate clinical concern requiring specific attention",
              "Assess the self-harm in detail — because superficial cuts may indicate a chronic emotion-regulation pattern, escalating risk, or suicidal ideation; onset, frequency, escalation, function, and relationship to specific triggers must all be established",
              "Assess trauma and refugee detention experiences sensitively — because Nadia's panic episodes and nightmares may be PTSD symptoms linked to experiences in detention or displacement that require trauma-informed formulation rather than a primary anxiety disorder diagnosis",
              "Assess school bullying and racism — because school refusal in a refugee adolescent may reflect ongoing racial bullying or exclusion rather than avoidance alone; understanding the school environment is essential to formulation",
              "Clarify family safety and power dynamics — because cultural respect must not prevent identification of coercion, domestic violence, or child protection concerns within the family system",
              "Assess protective factors including faith, community, school connection, and family care — because these are active resources for treatment and safety planning and must be assessed with the same rigour as risk factors",
              "Build a shared formulation in plain language with the family — because early psychoeducation delivered respectfully in the family's terms may reduce stigma and create a foundation for ongoing engagement",
            ],
          },
        ],
        zeroMarkTraps: [
          "Interviewing the father only and accepting his account as representative of the family — Nadia's and the mother's voices must be heard independently",
          "Breaching Nadia's confidentiality immediately at the father's request — the limits of confidentiality must be applied, not abandoned because the father expects full disclosure",
          "Using Nadia or her father as interpreter for the mother — this creates clinical, ethical, and practical distortions that undermine the accuracy and safety of the assessment",
        ],
        postExaminerNote: "Candidates who addressed the confidentiality framing as a clinical priority before assessment began, who arranged a professional interpreter for the mother and attended to her silence as a distinct clinical concern, and who explored the father's shame concern as an engagement problem rather than an obstacle scored in the upper range. Candidates who relied on family members as interpreters or who breached confidentiality immediately at the father's request did not achieve the standard.",
      },
      {
        stemNumber: "3.2",
        vignette: "During the individual interview, Nadia says she is not suicidal but cuts when she has nightmares about detention and bullying. She says a male relative overseas has been messaging her sexually explicit comments. She begs you not to tell her parents because her father will blame her and stop her going to school.",
        question: "Discuss — list and debate how you would manage confidentiality, safety, culture, and family communication. You must name the tensions explicitly and take a defensible consultant position. (10 marks | 10 minutes)",
        commandWord: "debate",
        marks: 10,
        timeMinutes: 10,
        stemSignals: [
          "Online sexual exploitation by an adult male relative is a child protection matter — it cannot be kept confidential regardless of Nadia's fear of blame",
          "Collaborative disclosure is safer than unilateral disclosure — involving Nadia in how and when parents are told reduces shame, risk of self-harm escalation, and disengagement",
          "Culture must not be used to excuse inaction — the father's anticipated blame does not reduce the child protection obligation",
        ],
        domains: [
          {
            name: "Award up to 10 marks from the following scorable points",
            marks: 10,
            keyPoints: [
              "There is tension between respecting Nadia's confidentiality and protecting her from ongoing sexual exploitation and self-harm escalation — a defensible position is that the sexual messaging from an adult male relative cannot remain confidential because it constitutes potential abuse requiring safeguarding action",
              "Clarify the details of the online contact before acting — because risk depends on specifics: the relative's age, access to Nadia, whether images have been sent or requested, threats, and whether contact is ongoing; these details determine the urgency and pathway of the safeguarding response",
              "Tell Nadia that some information cannot remain secret — explain that sexual exploitation by an adult cannot be kept confidential because her safety requires action; this must be said clearly but without punishing her for disclosing",
              "Involve Nadia in how disclosure occurs — explain that collaborative disclosure where Nadia has some agency in how and when the information is shared with her parents reduces shame, preserves the therapeutic relationship, and is less likely to trigger impulsive self-harm or disengagement",
              "Reassess immediate suicide risk — explain that Nadia's fear that her father will blame her and stop her attending school creates an acute escalation of risk at the point of disclosure; a specific safety plan addressing the post-disclosure period must be in place before disclosure occurs",
              "Implement digital safety measures — explain that blocking or securing the relative's contact channel is an immediate harm-reduction action that must occur in parallel with the disclosure planning and does not require parental consent",
              "Consider child protection and police pathways — explain that online sexual exploitation by an adult male relative may engage mandatory reporting obligations and potentially police notification; the specific threshold depends on jurisdiction and the content of the messages",
              "Limit disclosure to parents to necessary protective information — explain that the father does not need to know the full content of the messages; disclosure should be framed around Nadia's safety and the need for parental protection rather than around the content of the exploitation in a way that invites blame",
              "Explore safe adult supports — explain that the mother, a trusted female relative, the school counsellor, or a community worker may be a safer initial disclosure recipient than the father if his response is likely to be blaming rather than protective",
              "Cultural formulation is required but culture cannot excuse inaction — explain that the father's anticipated blame is a culturally and clinically relevant concern that should shape how disclosure is delivered; it does not reduce the child protection obligation or justify inaction",
              "Trauma treatment should not be initiated while active safety threats remain unresolved — explain that trauma-focused therapy conducted while Nadia is still receiving sexual messages and fearing parental blame would be clinically counterproductive and potentially harmful",
              "Use a community-safe interpreter for clinical conversations — explain that a community interpreter may know the family or share social networks; interpreter choice must protect Nadia's privacy",
            ],
          },
        ],
        zeroMarkTraps: [
          "Promising Nadia that nothing will be disclosed — online sexual exploitation by an adult cannot be kept confidential regardless of her fear of parental blame",
          "Telling the father everything immediately without a collaborative disclosure plan — unilateral disclosure without Nadia's preparation increases the risk of self-harm, school withdrawal, and family harm",
          "Using culture as a reason to delay safeguarding action — the anticipated blame does not alter the child protection threshold",
        ],
        postExaminerNote: "Candidates who named the tension between confidentiality and safeguarding explicitly, who proposed collaborative disclosure with Nadia rather than unilateral disclosure to the father, and who named digital safety as an immediate harm-reduction action scored in the upper range. Candidates who promised confidentiality, disclosed immediately without a plan, or treated the father's anticipated blame as a reason to delay child protection action did not achieve the standard.",
      },
      {
        stemNumber: "3.3",
        vignette: "The school principal asks for a written letter stating Nadia is 'safe to remain at school.' The school counsellor wants to run trauma therapy immediately. Nadia's father refuses further CAMHS appointments, saying the family will instead see a religious healer. The GP asks you what role CAMHS should take.",
        question: "Describe — list and explain your collaborative management plan. A list without explanation will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "A safety certificate cannot be provided — future risk cannot be guaranteed and providing one is a professional error regardless of the school's framing",
          "Immediate trauma therapy is contraindicated while safeguarding and stabilisation are incomplete — the school counsellor's plan must be redirected",
          "Father refusal is a re-engagement challenge, not a discharge criterion — assertive culturally sensitive engagement must continue",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Decline to provide a written letter certifying Nadia as safe to remain at school — explain that future risk cannot be guaranteed and a written certificate creates a false impression of clinical certainty that psychiatry does not have; providing one would be professionally dishonest and would misrepresent the clinical situation to the school",
              "Provide a formulation-based school support plan instead — explain that the school's legitimate concern about Nadia's welfare can be addressed with a practical plan specifying warning signs, identification of a trusted staff member, a safe space during panic episodes, bullying response protocols, and re-entry steps; this meets the school's clinical need without providing false reassurance",
              "Address bullying specifically in the school plan — explain that school refusal in Nadia's case may reflect ongoing bullying or racial exclusion; the school support plan must address these environmental factors, not only Nadia's internal distress",
              "Advise the school counsellor not to commence trauma therapy yet — explain that trauma-focused therapy while active safeguarding concerns remain unresolved, the family is disengaging, and Nadia has not been stabilised is clinically contraindicated; premature trauma processing may worsen symptoms and destabilise Nadia at a critical point",
              "Continue assertive CAMHS engagement despite the father's refusal — explain that a father's refusal of CAMHS appointments in the context of an active child protection concern and ongoing risk does not constitute grounds for case closure; the service must continue to attempt engagement through culturally appropriate channels",
              "Respect the religious healer if the involvement is safe — explain that spiritual and faith-based support may be genuinely helpful and should be respected as complementary rather than competing care; CAMHS should make clear it is willing to collaborate with the healer where this is safe",
              "Clarify that religious healing is not a substitute for safeguarding and mental health treatment — explain that the child protection obligations and the clinical management of self-harm cannot be delegated to a religious healer; CAMHS must maintain its protective role even if the family prefers alternative support",
              "Support the GP as the continuity holder — explain that Nadia's family may trust the GP more than CAMHS; the GP can maintain the therapeutic relationship, monitor safety, and provide a re-engagement pathway back to CAMHS if the family's position changes",
              "Protect Nadia's confidentiality in school communication — explain that the school's right to a support plan does not extend to full trauma disclosure; communication with the school should be limited to what is necessary for practical support without disclosing the safeguarding content or trauma details",
              "If parents refuse necessary care and risk remains high, safeguarding escalation may be required — explain that if the father's refusal of CAMHS results in Nadia receiving no clinical support while an active safeguarding concern remains unresolved, a formal child protection referral may be required to ensure her safety is addressed by the appropriate authority",
            ],
          },
        ],
        zeroMarkTraps: [
          "Providing the school with a written safety certificate — this is a professional error regardless of the school's urgency",
          "Supporting immediate trauma therapy commencement while safeguarding concerns are unresolved — premature trauma processing is contraindicated in this clinical context",
          "Closing the CAMHS case because the father has refused further appointments — refusal is a re-engagement challenge requiring assertive culturally sensitive outreach, not a discharge criterion",
        ],
        postExaminerNote: "Candidates who declined the safety certificate and explained why, who explicitly advised against premature trauma therapy, and who named assertive re-engagement through the GP and culturally appropriate channels as the response to father refusal scored in the upper range. Candidates who provided the certificate, commenced trauma therapy, or closed the case after father refusal did not achieve the standard.",
      },
    ],
  },
  {
    id: "meq_012",
    title: "Jane — Postpartum Bipolar Psychosis, Treatment and Placement",
    case: "Jane, 34, bipolar I disorder, 10 days postpartum, lithium cessation in pregnancy",
    examSource: "Generated — Treatment / Scholarship",
    topic: "Perinatal psychiatry management of postpartum manic psychosis after lithium cessation; tests risk formulation with infant safety, treatment planning including breastfeeding pharmacology and ECT, and competing placement decisions when paranoia escalates in a mother-baby unit without HDU capacity",
    primaryDomain: "Treatment / Scholarship",
    totalMarks: 32,
    totalTimeMinutes: 32,
    stems: [
      {
        stemNumber: "4.1",
        vignette: "Jane is a 34-year-old woman, 10 days postpartum after an emergency caesarean section. She has bipolar I disorder and stopped lithium during pregnancy. Her partner reports she has slept less than two hours per night for four nights, is saying the baby has 'a divine mission,' and has tried to leave the house at night carrying the baby. She is breastfeeding and says medication will 'poison the baby.'",
        question: "Outline — list and justify your immediate formulation and risk priorities. A list without because-clauses specific to this case will not be awarded any marks. (10 marks | 10 minutes)",
        commandWord: "outline_justify",
        marks: 10,
        timeMinutes: 10,
        stemSignals: [
          "Postpartum psychosis until proven otherwise — bipolar I with lithium cessation, four nights of minimal sleep, grandiose beliefs and nocturnal infant removal is a psychiatric emergency",
          "Infant safety is a distinct priority — the nocturnal attempt to leave with the baby is an active risk event, not a theoretical concern",
          "Breastfeeding belief about medication may be delusional — it must be assessed as a possible delusional belief affecting capacity, not accepted as an informed refusal",
        ],
        domains: [
          {
            name: "Award up to 10 marks from the following scorable points",
            marks: 10,
            keyPoints: [
              "Postpartum manic psychosis is the leading clinical formulation — because Jane has bipolar I disorder, stopped lithium during pregnancy, has had less than two hours of sleep per night for four nights, and is expressing grandiose religious beliefs about the baby; this constellation represents postpartum psychosis or manic relapse and is a psychiatric emergency requiring urgent action",
              "The presentation is a psychiatric emergency — because postpartum psychosis can escalate rapidly, is associated with significant suicide risk, and carries risk of accidental harm to the infant from impaired judgement; the urgency cannot be deferred",
              "Infant safety is a central and immediate risk priority — because Jane has already attempted to leave the house at night carrying the baby while acutely psychotic and sleep deprived; this is an active risk event, not a theoretical concern, and requires immediate practical safeguards",
              "Risk to Jane includes suicide, accidental harm from impaired judgement, exhaustion, poor wound recovery after caesarean, and psychosis-driven unsafe behaviour — because each of these is independently elevated in the postpartum psychosis context and must be assessed separately",
              "Risk to the baby includes accidental injury, unsafe carrying, disrupted feeding, neglect, and psychotically-driven actions — because a manic psychotic mother with a belief about the baby's divine mission may take actions that endanger the infant that she does not experience as harmful",
              "Sleep deprivation is both a symptom and an active driver of worsening mania — because four nights of minimal sleep in a patient with bipolar disorder is itself a physiological trigger for further manic escalation; sleep restoration is an urgent clinical target independent of other treatment",
              "The belief that medication will poison the baby must be assessed as possibly delusional — because it may represent a fixed false belief that impairs Jane's capacity for medication decisions rather than an informed autonomous refusal; the belief requires structured capacity assessment for each medication decision separately",
              "Lithium cessation is directly relevant to the relapse — because discontinuing a highly effective mood stabiliser during pregnancy is a known precipitant of postpartum bipolar relapse; this must be incorporated into the formulation and informs both the immediate management and the future medication plan",
              "Partner collateral is essential — because Jane may lack insight and her symptoms fluctuate; the partner is the most accurate source of information about baseline, the trajectory of deterioration, and the specific infant safety incidents",
              "Physical postpartum factors must be assessed — because infection, anaemia, pain, thyroid disturbance, and surgical complications after emergency caesarean can worsen mental state and affect treatment safety; these must be excluded or treated in parallel",
              "Capacity for admission and treatment decisions must be assessed — because psychosis may impair Jane's ability to appreciate the consequences of refusing admission and treatment, making this a capacity question rather than a simple refusal",
              "Mother-baby unit admission should be prioritised — because it treats the psychiatric illness while preserving the mother-infant relationship and supporting breastfeeding where safe; separation should not be the default response to postpartum psychosis",
            ],
          },
        ],
        zeroMarkTraps: [
          "Treating sleep deprivation as the primary problem rather than a symptom and driver of postpartum manic psychosis in a patient with bipolar I disorder and lithium cessation",
          "Accepting the breastfeeding medication belief as an informed autonomous refusal without assessing whether it represents a delusional belief impairing capacity",
          "Failing to name infant safety as an immediate and specific risk priority given the documented nocturnal attempt to leave with the baby",
        ],
        postExaminerNote: "Candidates who formulated the presentation as postpartum psychosis until proven otherwise, named infant safety as an immediate active risk rather than a theoretical concern, and identified the medication belief as potentially delusional requiring capacity assessment scored in the upper range. Candidates who treated this as an insomnia or breastfeeding concern without a psychiatric emergency formulation did not achieve the standard.",
      },
      {
        stemNumber: "4.2",
        vignette: "Jane agrees to admission to a mother-baby unit if she can continue breastfeeding. She refuses lithium because she previously developed tremor and weight gain. Her partner asks whether ECT is 'barbaric.' The obstetric registrar is concerned about wound infection and anaemia.",
        question: "Describe — list and explain your treatment plan, including biological, psychological, and physical-health considerations. A list without explanation will not be awarded any marks. (12 marks | 12 minutes)",
        commandWord: "describe_explain",
        marks: 12,
        timeMinutes: 12,
        stemSignals: [
          "ECT is not barbaric — it is a first-line evidence-based treatment for severe postpartum mood disorder and the partner deserves an honest clinical explanation",
          "Breastfeeding and medication are not mutually exclusive — the clinical task is to find the safest pharmacological approach compatible with breastfeeding, not to stop breastfeeding by default",
          "Obstetric co-morbidity changes the treatment risk profile — wound infection and anaemia must be treated in parallel, not handed back to obstetrics",
        ],
        domains: [
          {
            name: "Award up to 12 marks from the following scorable points",
            marks: 12,
            keyPoints: [
              "Admit to a specialist mother-baby unit with high-level observation — explain that this setting treats the acute psychiatric illness while preserving the mother-infant relationship and supporting breastfeeding; it is the least restrictive appropriate placement and avoids unnecessary separation",
              "Establish high observation from the outset — explain that psychosis, severe sleep deprivation, and infant access create a risk configuration requiring close monitoring of Jane's interactions with the baby until her mental state stabilises",
              "Sleep restoration is an immediate biological treatment priority — explain that ongoing sleep deprivation is a physiological driver of manic escalation in bipolar disorder and must be addressed urgently through environmental measures, structured sleep periods, and pharmacological support where necessary",
              "Offer antipsychotic treatment for acute mania and psychosis — explain that acute manic psychosis requires rapid symptom control and an antipsychotic is the appropriate first-line pharmacological intervention; agent selection must account for breastfeeding safety, sedation, metabolic risk, QTc effects, and Jane's previous medication experiences",
              "Address lithium refusal therapeutically rather than accepting it immediately — explain that Jane's previous tremor and weight gain are real and modifiable adverse effects; dose adjustment, slow-release formulation, and timing changes may address these, and lithium's proven efficacy in postpartum bipolar relapse prevention makes a therapeutic exploration of this refusal clinically important",
              "If lithium is used, provide specific monitoring — explain that lithium levels, renal and thyroid function, hydration status, toxicity symptoms, and advice about infant serum lithium exposure via breastfeeding are all required components of a lithium plan in a postpartum breastfeeding patient",
              "Avoid valproate — explain that valproate is generally contraindicated in women of childbearing age because of teratogenic risk and developmental harm, and is not appropriate in a breastfeeding mother unless exceptional circumstances exist and the benefits clearly outweigh the documented reproductive and developmental risks",
              "Explain ECT honestly to the partner as an effective and rapid treatment option — explain that ECT is evidence-based, effective for severe postpartum mood disorder and psychosis, and can produce rapid response; it is not barbaric and the partner deserves an honest, non-defensive clinical explanation that addresses his specific concern rather than dismissing it",
              "ECT is particularly relevant if severe psychosis, food or fluid refusal, catatonia, suicidality, or need for rapid response emerges — explain that in any of these clinical scenarios ECT may be the most appropriate and most rapidly effective treatment available and should not be withheld because of the partner's initial reaction",
              "Support breastfeeding where clinically safe — explain that breastfeeding is important for bonding, infant nutrition, and Jane's recovery motivation; it should be supported where the medication safety profile permits and the infant's exposure is monitored; it should not be stopped automatically as a first response to medication initiation",
              "Provide partner psychoeducation — explain that the partner needs to understand the diagnosis, the treatment rationale, the role of sleep, the medication choices and their safety profile, the relapse signs to watch for, and what to do in a crisis; his involvement is clinically protective and he needs information to participate effectively",
              "Obstetric review is required for wound infection and anaemia — explain that infection and anaemia can worsen psychiatric symptoms, impair treatment response, and affect the safety profile of some medications; these must be treated by obstetrics as concurrent priorities, not as separate concerns to be managed after psychiatric stabilisation",
              "Psychological care should be supportive and stabilising initially — explain that acute psychosis is not the time for intensive psychotherapy; the psychological component of early treatment is establishing safety, supporting the therapeutic relationship, and providing simple psychoeducation to Jane and her partner",
              "Develop a written relapse and infant-safety plan — explain that risk fluctuates rapidly in postpartum bipolar disorder and a documented plan specifying early warning signs, medication triggers, escalation criteria, and infant safety steps must be in place from admission",
            ],
          },
        ],
        zeroMarkTraps: [
          "Stopping breastfeeding as a default response to medication initiation without exploring which agents are compatible with breastfeeding",
          "Dismissing ECT as barbaric or deferring the conversation with the partner — ECT is a first-line treatment for severe postpartum psychosis and the partner deserves an honest clinical explanation",
          "Ignoring the wound infection and anaemia — obstetric comorbidities affect psychiatric treatment response and medication safety and must be actively managed in parallel",
        ],
        postExaminerNote: "Candidates who addressed all three biological priorities simultaneously — antipsychotic for acute mania, sleep restoration, and lithium discussion — and who explained ECT as evidence-based rather than defending it defensively, and who integrated obstetric comorbidities into the treatment plan scored in the upper range. Candidates who stopped breastfeeding by default, dismissed ECT, or returned obstetric management to the obstetric team without a collaborative plan scored in the lower range.",
      },
      {
        stemNumber: "4.3",
        vignette: "After two days, Jane becomes more paranoid and says staff are trying to abduct the baby. She refuses all oral medication. The partner wants the baby removed from the unit immediately. The mother-baby unit has no HDU capacity, and the adult acute unit has no facilities for infants.",
        question: "Discuss — list and debate the competing treatment, safety, attachment, and service-placement issues. You must name the tensions explicitly and take a defensible consultant position. (10 marks | 10 minutes)",
        commandWord: "debate",
        marks: 10,
        timeMinutes: 10,
        stemSignals: [
          "The partner's request to remove the baby must be taken seriously but not accepted automatically — the decision must be based on infant safety and Jane's treatment needs, not partner distress",
          "Temporary separation with a reunification plan is different from permanent separation — this language matters clinically and ethically",
          "Service limitation must be escalated — the absence of perinatal HDU capacity is a system failure requiring governance response, not clinical acceptance",
        ],
        domains: [
          {
            name: "Award up to 10 marks from the following scorable points",
            marks: 10,
            keyPoints: [
              "There is tension between preserving the mother-infant relationship and protecting the infant from harm driven by Jane's paranoid belief that staff are trying to abduct the baby — a defensible position is that infant safety is the primary obligation when active paranoia is directing Jane's actions toward the infant",
              "Continued mother-baby unit admission may be unsafe if Jane is actively paranoid and the unit cannot provide HDU-level containment — explain that a setting without the capacity to safely manage a patient whose refusal of medication is escalating paranoia and whose beliefs are centred on the baby requires a clinical decision about placement, not an acceptance of the current risk level",
              "Removing the baby may reduce immediate risk but can worsen Jane's distress, paranoia, and attachment disruption — explain that separation is not a neutral intervention; it carries clinical consequences including escalating agitation, maternal grief, and prolonged attachment disruption that must be weighed against the infant safety benefit",
              "The partner's request must be taken seriously but not accepted automatically — explain that the partner's distress is understandable and clinically relevant, but the decision about the baby's placement must be based on an assessment of infant safety and Jane's treatment needs, not the partner's emotional threshold",
              "Refusal of oral medication requires reassessment of capacity and legal authority for treatment — explain that Jane's refusal of all oral medication in the context of active paranoia requires a formal capacity assessment and consideration of the legal framework for non-consensual treatment in the jurisdiction",
              "Non-oral medication may be justified if legally authorised and necessary to prevent serious risk — explain that if Jane lacks capacity for medication decisions and the risk to herself or the infant is imminent, intramuscular medication may be appropriate under the relevant legal authority",
              "If severe risk persists, transfer to an adult acute or HDU setting may be necessary even without infant facilities — explain that if the mother-baby unit cannot safely contain Jane's current level of risk, the clinical obligation is to provide safe care, which may require separation and transfer even though this is not the preferred outcome",
              "Separation should be temporary, planned, and supported — explain that if separation becomes necessary it should be framed as a time-limited clinical intervention with explicit reunification criteria, ongoing maternal contact where safe, expressed milk provision, and a clear plan for reintroduction of the infant as Jane's mental state stabilises",
              "Child protection or infant safeguarding input may be required — explain that the infant's safety is now a contested clinical question requiring formal safeguarding assessment independent of the clinical team's view",
              "The absence of perinatal HDU capacity must be escalated as a system failure — explain that a mother-baby unit without the capacity to safely manage postpartum psychosis that escalates to require HDU-level care represents a critical gap in the perinatal mental health service that requires immediate escalation to the service director and governance reporting",
              "The clinical rationale for any placement decision must be communicated transparently to the partner — explain that the partner is experiencing significant distress and may interpret placement decisions as punitive toward Jane; a clear, compassionate explanation of the clinical reasoning is both ethically required and clinically protective",
            ],
          },
        ],
        zeroMarkTraps: [
          "Accepting the partner's request to remove the baby immediately without a clinical assessment of infant safety and the implications for Jane's treatment",
          "Keeping the baby in the unit at all costs when Jane is actively paranoid and the unit lacks the capacity to safely contain the risk",
          "Accepting the absence of perinatal HDU capacity as a clinical constraint rather than escalating it as a governance failure",
        ],
        postExaminerNote: "Candidates who named the tension between attachment preservation and infant safety explicitly, who used the language of temporary separation with reunification criteria rather than separation as a punitive or permanent measure, and who identified the HDU capacity gap as a governance escalation issue scored in the upper range. Candidates who deferred entirely to the partner's request or who maintained the current placement without addressing the escalating risk did not achieve the standard.",
      },
    ],
  },
  {
    id: "meq_013",
    title: "Wiremu — Dialysis Refusal, Spiritual Belief and Capacitous Autonomy",
    case: "Wiremu, 58, Māori man, end-stage renal disease, schizophrenia, dialysis refusal",
    examSource: "Generated — Ethics / Professionalism / Legal",
    topic: "CL psychiatry assessment of a Māori man with schizophrenia and end-stage renal disease refusing dialysis based on spiritual belief and dream communication from his deceased father; tests culturally safe capacity assessment, ethics of forced dialysis when refusal may be capacitous, discharge planning with whānau and Māori health supports, and open governance response after death",
    primaryDomain: "Ethics / Professionalism / Legal",
    totalMarks: 34,
    totalTimeMinutes: 34,
    stems: [
      {
        stemNumber: "5.1",
        vignette: "Wiremu is a 58-year-old Māori man with end-stage kidney disease admitted for urgent dialysis after missing several sessions. He has diabetes, ischaemic heart disease, and a past diagnosis of schizophrenia. He tells the renal team dialysis is 'spiritually wrong now' because his late father has told him in dreams to return to Country. He is refusing dialysis and asking to leave. His adult daughter says he is usually deeply connected to culture but has recently stopped antipsychotic medication and has been talking to unseen people.",
        question: "Outline — list and justify the key factors you would consider in assessing Wiremu's refusal of dialysis. A list without because-clauses specific to this case will not be awarded any marks. (10 marks | 10 minutes)",
        commandWord: "outline_justify",
        marks: 10,
        timeMinutes: 10,
        stemSignals: [
          "Schizophrenia does not equal incapacity — capacity must be assessed decision-specifically and cannot be assumed from diagnosis",
          "Cultural belief about the deceased father must be assessed with Māori health input before being labelled psychotic — the two possibilities have opposite management implications",
          "Uraemia may itself impair cognition — medical causes of cognitive impairment must be excluded before concluding the refusal is driven by psychosis or values",
        ],
        domains: [
          {
            name: "Award up to 10 marks from the following scorable points",
            marks: 10,
            keyPoints: [
              "Assess decision-specific capacity for the refusal of dialysis — because capacity is not determined by diagnosis alone; Wiremu may have capacity to refuse dialysis even with a schizophrenia diagnosis, and this must be established through a structured assessment of understanding, retention, weighing of consequences, and communication of a choice",
              "Clarify whether Wiremu understands that kidney failure without dialysis is likely to cause death — because appreciation of the consequences of refusal is a central component of capacity; if he understands this and still chooses refusal based on his values, this may be a capacitous autonomous decision",
              "Assess whether the father's voice in dreams is a culturally meaningful experience, a grief response, or a psychotic symptom — because the management implications are opposite; a culturally shared spiritual experience does not impair capacity, while a command hallucination driven by untreated psychosis may do so; this distinction must be made with Māori cultural expertise",
              "Involve the Māori health liaison worker immediately — because cultural formulation of Wiremu's experience requires culturally safe expertise that the clinical team cannot provide from a biomedical framework alone; the Māori health worker is essential to this assessment, not an optional adjunct",
              "Obtain collateral from the daughter — because she reports recent antipsychotic cessation and Wiremu talking to unseen people; this is directly relevant to whether his current mental state represents a relapse that is influencing the refusal",
              "Assess current psychotic symptoms directly — because if command hallucinations or delusions are driving the refusal of life-saving treatment, the refusal may not be autonomous and may be amenable to treatment that would restore capacity",
              "Assess for uraemia, metabolic disturbance, delirium, and cognitive impairment — because end-stage renal disease with missed dialysis sessions creates significant metabolic derangement that can impair cognition and mimic or worsen psychiatric symptoms; organic causes of cognitive impairment must be assessed before attributing the refusal to psychosis or values",
              "Review antipsychotic adherence and relapse history — because the daughter reports recent medication cessation; if this has precipitated a relapse, it may be reversible with treatment that could restore capacity for the dialysis decision",
              "Clarify Wiremu's values and spiritual beliefs about death and Country — because a capacitous refusal of dialysis may be based on deeply held Māori values about dying on Country, completing spiritual obligations, or the meaning of dialysis dependence; these values deserve respect if the decision is capacitous",
              "Avoid assuming that cultural belief equals incapacity — because misattributing a culturally grounded decision as a symptom of psychosis pathologises Wiremu's identity and may constitute a form of cultural harm; the assessment must hold both possibilities simultaneously until cultural expertise can clarify",
              "Identify the substitute decision-maker or advance care preferences if capacity is found to be impaired — because if Wiremu lacks capacity, decisions must follow an appropriate legal framework that incorporates his previously expressed values and the views of his whānau",
              "Document the reasoning carefully — because the outcome of this assessment is potentially life and death and the clinical, cultural, and legal reasoning must be transparent and reviewable",
            ],
          },
        ],
        zeroMarkTraps: [
          "Concluding Wiremu lacks capacity because he has schizophrenia — capacity is decision-specific and cannot be assumed from a psychiatric diagnosis",
          "Treating the father's voice in dreams as self-evidently psychotic without Māori cultural assessment — this conflates cultural experience with psychotic symptoms in a way that causes cultural harm",
          "Ignoring uraemia and metabolic disturbance as potential organic causes of cognitive impairment that must be excluded before attributing the refusal to psychosis",
        ],
        postExaminerNote: "Candidates who named the cultural-versus-psychotic distinction as the central clinical and ethical question requiring Māori health input, who identified uraemia as a reversible organic cause of cognitive impairment, and who explicitly stated that schizophrenia does not equal incapacity scored in the upper range. Candidates who concluded incapacity from the diagnosis alone or who labelled the cultural experience as psychosis without cultural assessment did not achieve the standard.",
      },
      {
        stemNumber: "5.2",
        vignette: "Wiremu is found to have hyperkalaemia with ECG changes. The renal consultant says he may die without urgent dialysis and asks whether you can 'declare him incompetent.' Wiremu says he understands death may occur but says dying on dialysis would be a worse spiritual harm. His daughter wants dialysis given against his will.",
        question: "Discuss — list and debate your approach to capacity, culture, urgency, and involuntary treatment. You must name the tensions explicitly and take a defensible consultant position. (12 marks | 12 minutes)",
        commandWord: "debate",
        marks: 12,
        timeMinutes: 12,
        stemSignals: [
          "'Declare him incompetent' is the wrong clinical and legal framing — capacity must be assessed for this decision at this time, not declared globally",
          "Understanding that death may occur does not by itself prove capacity — appreciation and reasoning must also be assessed",
          "Mental health legislation cannot be used to authorise dialysis unless specific criteria linking psychiatric disorder to the medical treatment are met",
        ],
        domains: [
          {
            name: "Award up to 12 marks from the following scorable points",
            marks: 12,
            keyPoints: [
              "There is tension between respecting Wiremu's autonomy and preventing his foreseeable death from reversible hyperkalaemia — a defensible position is that if his refusal is capacitous it must generally be respected, while if psychosis or uraemia has removed capacity the appropriate legal framework may authorise emergency treatment",
              "'Declare him incompetent' is the wrong clinical and legal framing — explain that capacity must be assessed for this specific decision at this specific time; global incompetence declarations are not how capacity law operates in Australia or New Zealand, and the renal consultant's request requires redirection to a decision-specific capacity assessment",
              "Understanding that death may occur does not by itself establish capacity — explain that appreciation and reasoning must also be assessed; Wiremu may understand the outcome intellectually while a delusion or uraemic encephalopathy prevents him from appreciating what death means for his specific situation and weighing it against his alternatives",
              "A spiritually based refusal may be capacitous if it is consistent, values-based, and not driven by psychosis or delirium — explain that deeply held Māori beliefs about dying on Country or the spiritual meaning of dialysis dependence may represent a genuine autonomous choice that, if capacitous, must be respected even if the clinical team disagrees with it",
              "Psychotic influence must be assessed because recent antipsychotic cessation and responding to unseen people may mean the refusal is illness-driven — explain that if command hallucinations or paranoid delusions are determining the refusal of dialysis, the refusal may not represent Wiremu's authentic values and may be amendable to psychiatric treatment that would restore capacity",
              "Uraemia or metabolic disturbance from missed dialysis may independently impair cognition — explain that the hyperkalaemia and renal failure may themselves be causing cognitive impairment that constitutes a reversible cause of incapacity independent of the schizophrenia",
              "Māori cultural consultation is essential before any forced treatment decision — explain that clinicians must not pathologise spiritual meanings without culturally safe expertise; the Māori health worker and if possible a kaumātua must be involved in the assessment before a forced treatment decision is made",
              "The daughter's wish for dialysis is important collateral but does not override a capacitous refusal — explain that the daughter's view is clinically and culturally relevant and should inform the assessment, but substitute decision-making authority applies only if Wiremu lacks capacity; her preference cannot override his autonomous choice",
              "If Wiremu lacks capacity, urgent dialysis may be provided under emergency or substitute decision frameworks according to local law — explain that if the assessment concludes he lacks capacity, the appropriate legal framework for emergency medical treatment in the jurisdiction authorises dialysis without consent; this is distinct from using mental health legislation",
              "Mental health legislation should not be misused to authorise dialysis — explain that a mental health order covers psychiatric treatment; it does not automatically extend to authorising dialysis for renal failure unless the specific legal criteria linking the psychiatric disorder to the medical treatment are clearly met in the jurisdiction",
              "Least-restrictive negotiation should continue while legal frameworks are being considered — explain that a hui involving Wiremu, his daughter, a kaumātua, the Māori health worker, and both clinical teams may achieve a negotiated agreement for time-limited dialysis without coercion; this possibility must be fully explored before forced treatment is imposed",
              "If forced treatment is considered, proportionality, trauma, dignity, and restraint risks must be assessed — explain that forcing dialysis on a conscious, distressed Māori elder carries significant risks of physical harm, psychological trauma, and lasting damage to the therapeutic relationship and the family's trust in the health system",
              "Palliative care must be considered if refusal is capacitous — explain that respecting a capacitous refusal of dialysis includes an obligation to plan for a dignified death; palliative care consultation is not a failure but a clinical obligation if the refusal is upheld",
              "The renal consultant remains responsible for the dialysis decision — explain that psychiatry advises on capacity and the influence of mental disorder on decision-making; it does not assume clinical responsibility for the dialysis decision itself, which remains with the medical team",
            ],
          },
        ],
        zeroMarkTraps: [
          "Using mental health legislation to authorise dialysis automatically — a mental health order does not authorise medical treatment for renal disease without specific legal criteria being met",
          "Treating the daughter's wish for dialysis as overriding Wiremu's refusal when capacity has not been established as absent",
          "Accepting that understanding death may occur proves capacity without assessing appreciation and reasoning",
        ],
        postExaminerNote: "Candidates who corrected the 'declare him incompetent' framing, named the specific components of capacity that remain to be assessed beyond understanding alone, and identified that mental health legislation cannot automatically authorise dialysis scored in the upper range. Candidates who used the mental health act to force dialysis without legal analysis, or who deferred to the daughter's wish without a capacity assessment, did not achieve the standard.",
      },
      {
        stemNumber: "5.3",
        vignette: "Wiremu accepts one emergency dialysis session after a hui with his daughter, kaumātua, Māori health worker, renal consultant, and psychiatry registrar. He now wants discharge to his remote community. The renal team worries he will not attend dialysis. His daughter says she cannot keep taking leave from work to bring him.",
        question: "Describe — list and explain your discharge and relapse-prevention plan. A list without explanation will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "One accepted dialysis session does not resolve the refusal risk — discharge planning must address the ongoing risk of future refusal",
          "Daughter carer burden must be supplemented, not assumed — making her solely responsible for his attendance is clinically and ethically inadequate",
          "The plan must be operationally realistic for a remote community — aspirational plans that do not account for distance, transport, and local health resources will fail",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Base discharge on a shared risk formulation — explain that one accepted dialysis session does not resolve the underlying refusal risk; the discharge plan must explicitly address what will happen if Wiremu again refuses dialysis in the community and who has clinical responsibility for that situation",
              "Develop a culturally informed plan involving Māori health worker, kaumātua, and community supports — explain that the hui approach worked and should be formalised into the ongoing care structure; Māori health supports must be embedded in the community plan, not only available at the hospital",
              "Ensure renal follow-up is practically accessible — explain that remote distance and transport barriers are likely contributors to missed dialysis sessions; the discharge plan must include specific transport arrangements, appointment scheduling that accounts for community access, and local health service coordination rather than assuming Wiremu will independently attend",
              "Supplement the daughter's carer role rather than relying on her — explain that making the daughter solely responsible for Wiremu's dialysis attendance is clinically inadequate and places an unsustainable burden on her; social work, community health workers, and Māori health supports must provide additional practical assistance",
              "Arrange community mental health follow-up for antipsychotic adherence — explain that antipsychotic cessation precipitated the relapse that drove dialysis refusal; a specific medication adherence plan with community mental health monitoring must be part of the discharge plan",
              "Address antipsychotic choice for adherence, tolerability, renal disease, and Wiremu's preferences — explain that the antipsychotic selected must be renally safe, have a tolerable side-effect profile for Wiremu, and if possible be available in a long-acting injectable formulation to address adherence risk in a remote setting",
              "Develop a relapse plan identifying specific early warning signs — explain that voices, missed dialysis, spiritual preoccupation, withdrawal from community, sleep change, or medication refusal should be explicitly named as early warning signs that trigger a specific response pathway for both the family and the health team",
              "Initiate advance care planning while Wiremu is stable — explain that future dialysis refusal is foreseeable and an advance care plan documenting his wishes about dialysis, resuscitation, and dying on Country should be developed now when he has capacity, so that future decisions are guided by his authentic values",
              "Establish explicit communication pathways between renal, GP, community mental health, and Māori health services — explain that fragmented care between multiple services in a remote setting is a foreseeable failure point; a named coordinator and explicit communication protocols must be documented in the discharge summary",
              "Respect Wiremu's connection to Country and culture in the care plan — explain that a care plan that does not accommodate his cultural identity and his wish to be connected to Country will not be sustained; cultural safety must be built into the practical structure of the plan, not added as a courtesy statement",
            ],
          },
        ],
        zeroMarkTraps: [
          "Discharging with a renal outpatient appointment only — this does not address the underlying refusal risk, the antipsychotic adherence issue, or the practical barriers to dialysis attendance",
          "Making the daughter solely responsible for Wiremu's dialysis attendance without supplementary support",
          "Failing to initiate advance care planning while Wiremu has capacity — future refusal is foreseeable and must be anticipated",
        ],
        postExaminerNote: "Candidates who addressed transport and practical access as clinical components of the discharge plan rather than assuming self-attendance, who named the daughter's carer burden as requiring supplementation, and who initiated advance care planning while Wiremu was stable demonstrated operational consultant-level thinking. Candidates who listed renal follow-up and community mental health without addressing the practical and cultural barriers to attendance scored in the lower range.",
      },
      {
        stemNumber: "5.4",
        vignette: "One week later, Wiremu dies after missing dialysis. His daughter lodges a complaint saying the hospital 'let culture override medical care.' The renal consultant says psychiatry should have detained him. The registrar is distressed and asks whether they caused his death.",
        question: "Discuss — list and debate your consultant response to the complaint, team distress, and governance review. (4 marks | 4 minutes)",
        commandWord: "debate",
        marks: 4,
        timeMinutes: 4,
        stemSignals: [
          "A bad outcome does not prove negligence — the registrar needs to hear this clearly and early",
          "The complaint reflects grief, not necessarily a valid finding — engage with compassion before any defence",
          "The governance review must examine systems, not assign individual blame",
        ],
        domains: [
          {
            name: "Award up to 4 marks from the following scorable points",
            marks: 4,
            keyPoints: [
              "Respond to the daughter with openness and empathy — explain that her complaint reflects grief and a sense that Wiremu was not protected; the response must acknowledge her loss and her concern without being defensive, and must explain what review process will follow and how she can participate in it",
              "Support the registrar and explain that a bad outcome does not prove negligence — explain that a patient dying after a capacitous refusal of life-saving treatment, with a documented culturally safe capacity assessment and a reasonable discharge plan, does not constitute clinical negligence; the registrar requires this explanation clearly and early to prevent moral injury from distorting their future practice",
              "Conduct a multidisciplinary mortality and governance review — explain that the review must examine the capacity assessment, cultural consultation, discharge planning, transport access, follow-up coordination, antipsychotic adherence monitoring, and escalation pathways; it must involve renal, psychiatry, Māori health, and community services, and must be focused on learning rather than attributing individual blame",
              "Avoid defensive blame-shifting to culture — explain that the complaint that culture overrode medical care must be engaged honestly; the clinical and legal question is whether the care was clinically sound, legally defensible, and culturally safe, not whether culture was given too much weight; the review must assess this question transparently",
              "Identify system improvements rather than scapegoats — explain that the review should examine whether transport barriers, follow-up coordination, or antipsychotic adherence monitoring failed, and should produce specific system improvements that protect future patients; individual blame in the absence of clear conduct failures is not an appropriate governance outcome",
              "Acknowledge to the daughter that the outcome is deeply sad and that the service will examine whether it could have done more — explain that honest, compassionate open disclosure that does not prejudge the review findings is both ethically required and clinically appropriate; defensive or legalistic responses compound the family's grief and damage institutional trust",
            ],
          },
        ],
        zeroMarkTraps: [
          "Telling the registrar that psychiatry is not responsible — premature reassurance that avoids the honest examination of whether the care was adequate is not appropriate supervision",
          "Blaming culture or the daughter for Wiremu's death — the governance review must assess whether the care was clinically and legally sound, not attribute the death to cultural factors",
          "Conducting the review within the clinical team without multidisciplinary and Māori health involvement",
        ],
        postExaminerNote: "Candidates who responded to the daughter with compassion before any defence, who gave the registrar a clear explanation that a bad outcome does not equal negligence, and who named the multidisciplinary governance review as examining systems rather than assigning individual blame scored in the upper range. Candidates who accepted the renal consultant's framing that psychiatry should have detained Wiremu without examining the legal and ethical basis for that claim did not achieve the standard.",
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
  const [, setLocation] = useLocation();
  const [phase, setPhase] = useState("list"); // list | attempt_history | stem | pathway_select | evaluating | view_key | assessment
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
          <button
            onClick={() => setLocation("/phases")}
            className="text-xs text-gray-400 hover:text-gray-700 transition-colors whitespace-nowrap"
          >
            ← Back to study modes
          </button>
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
