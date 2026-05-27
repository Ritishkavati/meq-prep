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
  {
    id: "meq_014",
    title: "Youth Mental Health Service — Aboriginal Regional Area, Partnership and Safety",
    case: "Regional public mental health service, Aboriginal communities, fragmented youth care",
    examSource: "Generated — Governance / Systems / Leadership",
    topic: "Establishing a hybrid youth mental health service in a regional Aboriginal area; tests service model clarification, policy brief development, inter-agency partnership conflict management, and patient-safety review after a service pathway failure",
    primaryDomain: "Governance / Systems / Leadership",
    totalMarks: 32,
    totalTimeMinutes: 32,
    stems: [
      {
        stemNumber: "1.1",
        vignette: "The service director asks you to help establish a new youth mental health service for young people aged 12–25 years after increasing presentations of self-harm, substance use, school disengagement and family conflict. At present, young people under 18 are seen by CAMHS, those over 18 are referred to adult mental health, and young people with prominent AOD issues are usually referred to an NGO AOD service. The general hospital wants the new service attached to the emergency department. The local Aboriginal Community Controlled Health Organisation (ACCHO) wants it community-based. The service director asks you to advise before a model is decided.",
        question: "Outline — list and justify the key service needs and model-of-care issues you would clarify before recommending how the youth service should be established. A list without because-clauses specific to this situation will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "outline_justify",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Model-of-care first — recommending hospital-based or community-based before clarifying the service scope is a zero-mark structural error",
          "The 16–18 transition gap is the clinical hinge — this age group falls between CAMHS and adult services and is where most harm occurs",
          "AOD integration is non-negotiable — excluding young people with substance use from a youth mental health service produces service bouncing, not safety",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Clarify the target age range — because a 12–25 service must define adolescent, transition-age and young-adult scope before staffing, referral criteria and clinical governance can be determined",
              "Clarify the CAMHS interface — because under-18s require child-development, family, school and safeguarding expertise that differs from adult mental health; the boundary must be explicit, not assumed",
              "Clarify safe transfer from CAMHS at age 18 — because unsafe transition is a documented cause of disengagement and relapse in young people with mental illness; warm handover processes must be built into the model before it opens",
              "Clarify the adult mental health interface — because severe psychosis, bipolar disorder or high-risk young adults may require adult pathways; the new service must know its clinical ceiling and escalation route",
              "Clarify AOD integration — because splitting youth mental health and substance use produces service bouncing for young people with co-occurring presentations; the model must define whether AOD is integrated, co-located or pathway-linked",
              "Clarify whether the model is hospital-based, community-based or hybrid — because hospital governance may improve clinical safety but reduce Aboriginal family engagement; the ACCHO's concern is a clinical access issue, not merely a preference",
              "Clarify all referral sources and pathways — because GP, school, ED, ACCHO, NGO, CAMHS, adult team, family and self-referral each have different access needs, risk levels and consent requirements that must be specified before opening",
              "Clarify triage criteria for self-harm, psychosis, intoxication, family violence, homelessness, neurodevelopmental issues and child protection — because the same referral pathway cannot safely manage all of these without defined thresholds",
              "Clarify crisis and after-hours pathways — because a regional outpatient clinic cannot safely manage acute risk alone and must have explicit escalation to ED, on-call mental health and inpatient services",
              "Clarify cultural governance through ACCHO, Aboriginal workforce, Elders and youth and community consultation — because services designed without Aboriginal governance consistently fail to engage Aboriginal families and create the same access barriers they were meant to solve",
              "Clarify workforce requirements — because psychiatrist, nursing, psychology, social work, AOD, Aboriginal health worker, peer and youth worker, and telehealth functions all serve different roles and must be specified before the model is costed",
              "Clarify transport, outreach and digital-access issues — because distance, shame, and unreliable transport are primary barriers for Aboriginal young people in regional areas and must be designed around, not added later",
              "Clarify baseline data and evaluation measures — because without wait-time, re-presentation, non-attendance, Aboriginal youth access and self-harm follow-up data there is no way to demonstrate whether the service is working or failing",
            ],
          },
        ],
        zeroMarkTraps: [
          "Recommending a hospital-based or community-based model before clarifying service scope, age range and partnership requirements",
          "Treating the ACCHO's concern as a political issue rather than a clinical access and cultural safety issue requiring resolution before the model is designed",
          "Ignoring the AOD interface and designing a mental-health-only service for a population where co-occurring presentations are the norm",
        ],
        postExaminerNote: "Candidates who identified the 16–18 transition gap and AOD integration as structural design requirements rather than optional features, and who named ACCHO cultural governance as a clinical access issue rather than a stakeholder management problem, scored in the upper range. Candidates who recommended a model without clarifying scope first, or who treated the ACCHO concern as peripheral, scored in the lower range.",
      },
      {
        stemNumber: "1.2",
        vignette: "You review six months of local data. There are frequent ED presentations by 15–24-year-olds after self-harm or intoxication. Many Aboriginal young people attend once and do not return. GPs report long delays after referral. CAMHS and adult teams disagree about who should manage 17-year-olds close to transition. The NGO AOD service reports that young people with depression, trauma and cannabis use are being 'bounced between services.' The service director asks you to prepare a policy brief recommending a model of care.",
        question: "Describe — list and explain the key components you would include in your policy brief to the service director. A list without explanation will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Local data must drive the brief — generic service design without referencing the specific ED, re-presentation and Aboriginal disengagement data provided will not achieve the standard",
          "The brief must name the safety risks from current fragmentation — not just describe the service problem",
          "Implementation governance is a required component — a brief without a staged rollout plan, steering group and review timeline is incomplete",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "State the service problem clearly — explain that the brief must name the fragmentation across CAMHS, adult mental health, AOD, ED, GP and NGO systems as the primary structural problem driving repeated ED presentations and service disengagement",
              "Present local audit data — explain that the brief must reference the specific ED self-harm and intoxication presentation data, referral delays, non-attendance rates and Aboriginal youth disengagement rates as the evidence base for the recommendation",
              "Identify the safety risks from current fragmentation — explain that repeated ED presentations, unsafe CAMHS-to-adult transitions, and exclusion of young people with AOD presentations are foreseeable harm pathways, not service inefficiencies",
              "Recommend a hybrid rather than purely hospital-based model — explain that the data showing Aboriginal one-off attendance demonstrates that hospital-based-only services fail to engage this population, and a hybrid model with ACCHO and community locations is the evidence-informed response",
              "Define age criteria and transition rules — explain that explicit criteria for 16–25-year-olds and a defined warm-transfer process from CAMHS must be specified in the policy brief, not deferred to implementation",
              "Recommend warm transfer from CAMHS including joint appointments — explain that the current CAMHS-adult disagreement about 17-year-olds is a governance failure requiring a policy solution, not a clinical negotiation at each case",
              "Recommend integrated mental health and AOD pathways — explain that excluding young people with substance use from the youth mental health service replicates the service bouncing the brief is designed to solve",
              "Recommend tiered triage with defined thresholds — explain that a single referral pathway cannot safely manage crisis, urgent, moderate-complexity, early intervention and NGO-support presentations; triage criteria protect both patients and the service",
              "Recommend Aboriginal cultural governance embedded in structure — explain that ACCHO leadership in governance, not only consultation, is the evidence-based approach to sustainable Aboriginal community engagement",
              "Recommend referral and feedback standards for GPs, schools, ED, ACCHO and NGOs — explain that current GP frustration reflects the absence of defined response times and feedback pathways; these must be specified before opening",
              "Recommend outcome measures from day one — explain that wait time, engagement rates, self-harm follow-up completion, transition completion, GP satisfaction and cultural safety feedback must be collected from opening to demonstrate whether the service is achieving its purpose",
              "Recommend implementation governance — explain that a steering group with Aboriginal, NGO, school, GP, CAMHS and adult mental health representation, a risk register, a staged rollout and a three-to-six-month review are minimum governance requirements for a new service",
            ],
          },
        ],
        zeroMarkTraps: [
          "Writing a generic service design brief without referencing the specific local data provided in the stem",
          "Omitting the safety risk analysis — a policy brief that describes the problem without naming foreseeable harm pathways does not meet the standard",
          "Omitting implementation governance — a brief without a steering group, staged rollout and review timeline is not a consultant-level document",
        ],
        postExaminerNote: "Candidates who used the specific local data (ED presentations, Aboriginal disengagement, CAMHS-adult disagreement, service bouncing) as the evidence base for each recommendation, and who named implementation governance as a required brief component, scored in the upper range. Candidates who wrote a generic service description without engaging the local data or specifying governance arrangements did not achieve the standard.",
      },
      {
        stemNumber: "1.3",
        vignette: "The service launches as a hybrid model with one session at the hospital, one at the ACCHO and outreach to schools and the youth NGO. Three months later, conflict emerges. The youth NGO says the health service is 'medicalising normal distress' and taking over its clients. ACCHO staff say hospital clinicians are not following agreed cultural-consultation processes. School counsellors are frustrated that urgent referrals are still triaged through mental health intake. Some community leaders say the service is encouraging young people to speak privately with clinicians and excluding families.",
        question: "Discuss — list and debate how you would manage the partnership conflict while preserving clinical safety, cultural governance and service accountability. You must name the tensions explicitly and take a defensible consultant position. (8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "This is a Discuss question — listing stakeholder complaints without debating the tensions and taking a position does not achieve the standard",
          "Adolescent confidentiality vs family involvement is a distinct clinical and ethical tension, not just a community relations issue",
          "The meeting must begin with acknowledgement, not defence — defending the hospital model before hearing concerns is a leadership error",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "There is tension between medical governance and community ownership — a defensible position is that both are required; clinical safety governance cannot be delegated to community organisations, but the service cannot function without genuine community ownership and leadership",
              "There is tension between NGO autonomy and hospital accountability — the NGO should not be absorbed into the health service, but high-risk referral pathways require shared escalation protocols; the NGO's concern about medicalisation is a legitimate quality signal that requires engagement, not dismissal",
              "There is tension between cultural governance and clinical urgency — cultural consultation should be routine, but urgent suicide or psychosis pathways must remain clinically clear; cultural safety and clinical safety are not competing values but require explicit protocol agreement",
              "There is tension between school access and safe triage — school counsellors need rapid referral routes, but bypassing consent, risk assessment and safeguarding processes creates clinical and legal risk; the solution is a rapid-response pathway with agreed thresholds, not open direct access",
              "There is tension between adolescent confidentiality and family and community involvement — family-inclusive care should be promoted and is culturally appropriate in many Aboriginal communities, but automatic disclosure to families cannot be promised without compromising confidentiality and deterring disclosure of abuse",
              "Begin the meeting by acknowledging each partner's concerns before defending the service model — explain that opening defensively will destroy the collaborative foundation required to resolve the conflict; acknowledgement is a clinical leadership skill, not a concession",
              "Re-state the shared goals — explain that all partners share the aim of reducing harm, improving access and avoiding service bouncing; returning to this foundation reframes the conflict from territory to purpose",
              "Review and revise the partnership agreement — explain that the specific clauses on roles, referral criteria, consent, information sharing, cultural consultation obligations and escalation pathways must be reviewed against what is actually happening and corrected where they have broken down",
              "Develop a stepped-care pathway with explicit role boundaries — explain that NGO psychosocial support, ACCHO community care, youth mental health for moderate-to-severe illness and ED or hospital for acute risk are not competing services but sequential levels requiring defined handover criteria",
              "Create a joint triage or consultation forum for complex referrals — explain that a weekly or fortnightly multi-agency case consultation provides the shared decision-making space that reduces territorial conflict and improves care",
              "Embed ACCHO leadership in governance, not only consultation — explain that the ACCHO's concern about cultural process breaches reflects a governance participation deficit; ACCHO representation must be in the steering group with decision-making authority, not advisory status",
              "Agree measurable partnership indicators — explain that referral response times, joint care plan completion, family and youth feedback, cultural safety concerns and escalation pathway compliance are the accountability metrics that convert the partnership agreement from aspirational to operational",
            ],
          },
        ],
        zeroMarkTraps: [
          "Defending the hospital model before acknowledging partner concerns — this is a leadership error that will escalate rather than resolve the conflict",
          "Treating adolescent confidentiality and family involvement as the same issue rather than naming the tension between them explicitly",
          "Failing to take a defensible consultant position on the medical governance versus community ownership tension",
        ],
        postExaminerNote: "Candidates who named all four tensions explicitly, began with acknowledgement rather than defence, and took a clear position that both medical governance and community ownership are required simultaneously scored in the upper range. Candidates who listed stakeholder complaints without debating the tensions or taking a position did not achieve the standard.",
      },
      {
        stemNumber: "1.4",
        vignette: "A 16-year-old Aboriginal girl, Marli, is referred by her GP after escalating self-harm, cannabis use and school refusal. She was previously known to CAMHS but was discharged when her family moved between communities. Her referral is sent to the youth NGO because the GP believes the new service is for all youth problems. The NGO sees her once but does not refer to the youth mental health team because she says she does not want hospital people involved. Two weeks later, Marli presents to ED after an impulsive overdose while intoxicated. Her aunt says the family did not know who was responsible for her care. The service director asks you to review what happened and advise immediate actions.",
        question: "Discuss — list and debate how you would respond to this patient-safety concern as the consultant involved in establishing the youth service. You must name the tensions explicitly and take a defensible consultant position. (8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Immediate clinical safety comes first — system review cannot precede Marli's assessment and safety plan",
          "This is both an individual case review and a system review — separating them is a consultant-level clinical governance skill",
          "The GP and NGO require feedback without blame — feedback that damages the referral relationship makes future escalation less likely",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "There is tension between respecting Marli's wish to avoid hospital care and the duty to respond to foreseeable suicide risk — a defensible position is that her expressed preference is clinically relevant but does not override the obligation to ensure a named clinician carries responsibility for her care",
              "There is tension between NGO confidentiality and shared-care safety — the NGO's non-referral based on Marli's preference is understandable but may represent a clinical threshold failure; the partnership agreement must define when preference can be overridden by risk",
              "There is tension between individual case review and system review — both are required; Marli's immediate safety cannot wait for the system review, and the system review cannot be deferred because it is uncomfortable",
              "Ensure Marli's immediate safety — explain that ED assessment, intoxication management, post-overdose psychiatric assessment, culturally safe engagement with her aunt and Aboriginal health worker, and a specific safety plan with named clinical responsibility are the first clinical obligations",
              "Involve the aunt and Aboriginal health worker in the immediate management — explain that Marli's family not knowing who was responsible for her care is a safeguarding and cultural safety failure; the aunt's involvement in the safety plan is both clinically indicated and culturally appropriate",
              "Clarify current clinical responsibility — explain that the first governance question after ensuring immediate safety is which service now holds clinical responsibility for Marli; this must be resolved explicitly, not left ambiguous at ED discharge",
              "Review the GP's referral decision without blame — explain that the GP sent the referral to the NGO because the service model was not clearly communicated; feedback to the GP must be specific, educational and non-punitive to preserve the referral relationship",
              "Review the NGO's non-escalation decision — explain that the NGO's acceptance of Marli's preference without escalating to the mental health team requires review against the partnership agreement; this may reflect a threshold ambiguity in the agreed protocol rather than individual error",
              "Review the CAMHS discharge pathway — explain that Marli's discharge after family relocation without a warm handover to a receiving service is a systemic gap that predates this incident and must be addressed in the pathway redesign",
              "Notify through clinical governance — explain that the case reveals a pathway failure involving GP communication, NGO-mental-health escalation thresholds, and CAMHS discharge across communities; this is a reportable safety event, not an individual clinical decision",
              "Strengthen red-flag referral rules — explain that self-harm, intoxication, school refusal and prior CAMHS involvement in a 16-year-old Aboriginal girl must trigger youth mental health triage, not NGO-only management; this rule must be written into the referral protocol explicitly",
              "Re-audit other high-risk NGO-only referrals — explain that Marli's case may not be isolated; a rapid review of other young people currently seen only by the NGO without mental health triage is a required governance action",
            ],
          },
        ],
        zeroMarkTraps: [
          "Beginning with the system review before ensuring Marli's immediate clinical safety and naming a responsible clinician",
          "Treating the NGO's non-escalation as individual error without reviewing whether the partnership agreement provided clear threshold guidance",
          "Failing to name the CAMHS discharge-across-communities gap as a pre-existing systemic failure that contributed to this outcome",
        ],
        postExaminerNote: "Candidates who addressed immediate clinical safety first, named the three-layer system failure (GP communication, NGO threshold, CAMHS discharge), and took a defensible position on the tension between Marli's preference and clinical responsibility scored in the upper range. Candidates who began with the governance review before addressing Marli's safety, or who attributed the outcome to individual NGO error alone, did not achieve the standard.",
      },
    ],
  },
  {
    id: "meq_015",
    title: "Remote Youth Crisis — Telehealth, Workforce Risk and Pathway Failure",
    case: "Remote town, nurse practitioner, visiting GP, telehealth psychiatry, no local inpatient unit",
    examSource: "Generated — Governance / Systems / Leadership",
    topic: "Remote youth mental health crisis management and service governance; tests immediate risk assessment and triage via telehealth, workforce and supervision recommendations for remote youth services, competing stakeholder expectations around local autonomy and specialist oversight, and incident review after a 14-year-old girl is discharged to unsafe supervision and re-presents",
    primaryDomain: "Governance / Systems / Leadership",
    totalMarks: 32,
    totalTimeMinutes: 32,
    stems: [
      {
        stemNumber: "2.1",
        vignette: "You are contacted by a nurse practitioner about Liam, a 13-year-old boy who told a school counsellor he wanted to die. He lives 200 km from the nearest regional hospital. His mother is away caring for a relative. His grandfather, who is his main carer, is worried but says Liam will not speak to 'city doctors on a screen.' The nurse practitioner asks whether she can start an antidepressant and review him next week. A Stage 1 psychiatry registrar is available by telehealth but has not previously assessed a suicidal child alone.",
        question: "Outline — list and justify the immediate clinical and service steps you would take to ensure safe assessment and triage. A list without because-clauses specific to this case will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "outline_justify",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Same-day assessment is required — suicidal ideation in a 13-year-old cannot be deferred to next week regardless of distance",
          "Starting an antidepressant is not the first step — acute suicide risk needs assessment and safety planning before medication is considered",
          "The Stage 1 registrar cannot lead this assessment alone — direct consultant involvement is required",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Clarify immediate risk today — because suicidal ideation in a 13-year-old requires same-day clinical assessment, not routine review next week; distance does not change the clinical threshold",
              "Obtain more information before the telehealth assessment — because the nurse practitioner, school counsellor, and grandfather can each provide information about plan, intent, means, access to weapons, intoxication, trauma, family violence, and overnight supervision that is essential to risk formulation",
              "Ensure a senior child or youth mental health clinician leads the assessment — because the Stage 1 registrar has not previously assessed a suicidal child alone and remote high-risk child psychiatry is beyond their current competence; the consultant must either conduct or directly supervise the assessment in real time",
              "Adapt telehealth engagement through local supports — because Liam's grandfather says he will not speak to city doctors on a screen; the Aboriginal health worker, school counsellor or nurse practitioner should be physically present as a trusted local support person during the telehealth assessment",
              "Assess current safety comprehensively — because plan, intent, means access, intoxication, psychosis, trauma history, family violence, and the adequacy of overnight supervision with grandfather are all required components of the risk formulation",
              "Clarify whether Liam can be safely supervised overnight — because if grandfather cannot provide adequate supervision or the risk assessment identifies high risk, transport to the regional hospital is the clinically required response regardless of distance",
              "Consider transport to the regional hospital if imminent risk cannot be safely managed locally — because a remote service without inpatient capacity cannot safely manage high-risk suicidal ideation in a 13-year-old without a clear escalation pathway",
              "Do not start an antidepressant as the primary response — because acute suicidal ideation requires assessment, safety planning, family or carer involvement and follow-up as the first-line response; pharmacological initiation without a completed risk assessment and safety plan is not clinically safe",
              "Clarify consent and guardian involvement — because Liam's mother is absent and grandfather is the current carer; consent for assessment, information sharing with the school, and any planned interventions requires clarification of legal guardian status",
              "Assess child protection concerns if supervision is inadequate — because an absent mother and a concerned but potentially overwhelmed grandfather in a remote community may raise child protection threshold questions that must be addressed as part of the triage",
              "Document advice, risk reasoning, contingency plan and clinical responsibility — because remote consultations require clear contemporaneous documentation of who assessed, what was found, what plan was made, and who holds clinical responsibility until the next review",
              "Arrange follow-up within 24–72 hours — because a single remote assessment is insufficient for a 13-year-old with suicidal ideation; a specific follow-up plan with named clinical responsibility must be established before ending the consultation",
            ],
          },
        ],
        zeroMarkTraps: [
          "Agreeing to the nurse practitioner's plan to start an antidepressant and review next week — this defers same-day assessment of acute suicidal ideation in a 13-year-old",
          "Allowing the Stage 1 registrar to conduct the assessment unsupervised — remote high-risk child psychiatry requires direct consultant involvement",
          "Treating distance as a clinical justification for reduced standard of care",
        ],
        postExaminerNote: "Candidates who named same-day assessment as non-negotiable regardless of distance, who identified the registrar's supervision requirement as a clinical safety issue, and who addressed transport as a required contingency when local risk cannot be managed scored in the upper range. Candidates who endorsed the nurse practitioner's plan or who allowed the junior registrar to proceed unsupervised did not achieve the standard.",
      },
      {
        stemNumber: "2.2",
        vignette: "Over the next month, you review the service data. Several remote young people have waited more than two weeks for mental health review. School counsellors often contact the nurse practitioner directly because referral forms are confusing. Adult mental health clinicians are covering youth crises after hours despite limited child psychiatry training. The registrar tells you they feel unsafe making remote child-risk decisions without supervision. The clinical director asks you to advise on workforce, training and supervision arrangements for the remote youth pathway.",
        question: "Describe — list and explain the workforce, training and supervision arrangements you would recommend. A list without explanation will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Minimum competency requirements must be defined — vague training recommendations without specifying what adult clinicians must be able to do before covering youth crises will not achieve the standard",
          "The registrar's stated unsafety is a governance signal, not a performance issue — it requires structural response, not reassurance",
          "Role boundaries for the nurse practitioner must be explicit — she should be a clinical partner, not an independent specialist",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Define minimum competency requirements for youth risk assessment — explain that adult mental health training is insufficient for remote child and adolescent crisis management; specific competencies in child suicide risk assessment, child protection, family involvement and adolescent engagement must be defined before any clinician is rostered to cover youth crises",
              "Ensure senior consultant availability for all high-risk child and adolescent presentations — explain that the registrar's statement that they feel unsafe is a clinical safety signal requiring structural response; a named senior consultant must be available in real time for all high-risk remote youth assessments, not available only by subsequent review",
              "Provide structured pre-assessment and post-assessment supervision for the registrar — explain that supervision after a difficult remote assessment is insufficient; the registrar must have a pre-assessment consultation with a senior clinician to plan the approach before conducting remote child risk assessments",
              "Develop and implement explicit escalation thresholds — explain that adult clinicians covering youth crises after hours need defined clinical thresholds for escalation to specialist consultation, transport to hospital, and child protection notification; without these thresholds, individual clinicians make inconsistent and sometimes unsafe decisions",
              "Develop targeted training for nurse practitioner, school counsellors, Aboriginal health workers and adult team staff — explain that each group has a specific and limited role in the remote youth pathway; training must be role-specific, not generic mental health awareness",
              "Provide clear telehealth protocols — explain that telehealth assessment of a suicidal child requires specific protocols covering privacy, consent, identification of a local support person, documentation and emergency backup if connection fails or clinical deterioration occurs during the assessment",
              "Develop a decision aid for remote youth crises — explain that a structured on-call tool specifying assessment steps, risk thresholds, escalation contacts and transport criteria reduces clinical variation and supports junior clinicians in unfamiliar situations",
              "Clarify and document transport and retrieval pathways — explain that the absence of a local inpatient unit means transport to the regional hospital is a primary clinical tool that must have documented criteria, contacts, timelines and responsibilities, not be arranged ad hoc at the point of crisis",
              "Create scheduled case review meetings for remote youth cases — explain that regular multidisciplinary review of remote youth cases provides clinical oversight, identifies emerging patterns, supports junior clinicians and creates a learning culture",
              "Clarify role boundaries for the nurse practitioner — explain that the nurse practitioner is a clinical partner who supports assessment and monitoring but should not carry specialist child-risk responsibility independently; her role, scope and escalation obligations must be explicit in the service agreement",
              "Provide cultural supervision and local community consultation — explain that remote Aboriginal community mental health requires cultural supervision as a clinical standard, not an optional addition",
              "Monitor workforce fatigue and locum continuity — explain that a remote service relying on locums or fatigued clinicians for youth crisis coverage is a foreseeable safety risk that requires monitoring and escalation through governance channels",
            ],
          },
        ],
        zeroMarkTraps: [
          "Recommending training without specifying the minimum competencies adult clinicians must achieve before covering youth crises",
          "Treating the registrar's stated unsafety as a training gap rather than a structural supervision failure requiring immediate governance response",
          "Failing to clarify the nurse practitioner's role boundary and treating her as capable of independent child-risk management",
        ],
        postExaminerNote: "Candidates who defined minimum competency requirements before recommending training, who named the registrar's unsafety as a governance signal requiring structural response, and who specified pre-assessment supervision rather than only post-assessment debrief scored in the upper range. Candidates who listed generic training recommendations without role-specific competency definitions or explicit escalation thresholds scored in the lower range.",
      },
      {
        stemNumber: "2.3",
        vignette: "The nurse practitioner complains that the new pathway is 'city psychiatry taking control.' School counsellors say urgent referrals are still too slow. Aboriginal health workers say telehealth reviews can feel shameful and unsafe for some families. The hospital executive says the service cannot afford more specialist staff. The registrar says they are being used as the default youth psychiatrist for remote towns.",
        question: "Discuss — list and debate how you would manage these competing expectations while maintaining a safe remote youth service. You must name the tensions explicitly and take a defensible consultant position. (8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Local autonomy vs specialist governance is the central tension — neither extreme is defensible",
          "Resource constraints do not lower the standard of care — they create an escalation obligation",
          "The registrar's concern about role creep is a legitimate governance issue, not a performance complaint",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "There is tension between local clinical autonomy and specialist governance — a defensible position is that local clinicians know the community and relationships, but high-risk child and adolescent care requires specialist backup that cannot be replaced by local familiarity alone",
              "There is tension between rapid access and safe triage — school counsellors need faster referral routes, but unsafe allocation to undertrained clinicians is not an acceptable solution; a rapid-response pathway with agreed thresholds addresses both concerns",
              "There is tension between telehealth efficiency and cultural safety — telehealth should be available and accessible, but it cannot be assumed culturally safe for all Aboriginal families; culturally safe adaptations including local support persons, timing, language and relationship-building must be built into the protocol",
              "There is tension between resource constraints and minimum standards of care — the executive's position that no additional staff can be funded does not remove the clinical and governance obligation to escalate unsafe service gaps; if minimum safe standards cannot be met, the consultant must escalate through governance channels and document the escalation",
              "There is tension between the registrar's scope and patient safety — the registrar's concern about being used as the default youth psychiatrist for remote towns is a legitimate clinical governance issue that must be addressed structurally, not managed through individual supervision alone",
              "Support the nurse practitioner as a clinical partner rather than respond defensively to her concern — explain that engaging her concern about city psychiatry taking control as feedback about the collaboration model, rather than as resistance, is more likely to produce a workable shared-care arrangement",
              "Provide schools with a defined urgent referral pathway and a feedback loop — explain that school counsellors need to know what happens after a referral and how to escalate if a response is too slow; a named contact, a response time standard and a feedback protocol address this without bypassing triage",
              "Protect the registrar from independent specialist responsibility through supervision and explicit limits — explain that the registrar's role must be defined as supported assessment under direct consultation, not independent specialist provision; this protects both the registrar and patients",
              "Escalate resource constraints through governance channels if minimum safe standards cannot be met — explain that documenting the gap between required and available specialist staffing, and escalating this formally to the clinical director and executive, creates the governance record required if harm occurs",
              "Consider regional network solutions — explain that rotating child psychiatry clinics, tele-supervision arrangements, shared registrar pools across regional services, and scheduled outreach visits may address access needs within existing resources if escalation does not produce additional staffing",
              "Measure outcomes and use data to drive the escalation argument — explain that wait times, re-presentation rates, transport episodes, staff confidence ratings and family experience data are the evidence required to make a credible case for additional resourcing",
            ],
          },
        ],
        zeroMarkTraps: [
          "Accepting the executive's position that no additional staff can be funded without escalating the safety gap through governance channels",
          "Treating the registrar's concern as a performance issue rather than a governance issue about scope creep requiring structural resolution",
          "Treating telehealth as culturally neutral and failing to name the cultural safety adaptations required for Aboriginal families",
        ],
        postExaminerNote: "Candidates who named all five tensions explicitly, took a defensible position on local autonomy versus specialist governance, and identified the escalation obligation when resource constraints prevent minimum safe staffing scored in the upper range. Candidates who accepted resource constraints without escalation, or who treated all five concerns as equally resolvable through better communication, did not achieve the standard.",
      },
      {
        stemNumber: "2.4",
        vignette: "Three months later, a 14-year-old girl from a remote community is assessed after self-harm. Because there is no local bed and transport is unavailable overnight, she is sent home with her older cousin. She re-presents the next day after further self-harm. The registrar involved is distressed and says they felt pressured to make the least bad decision. The clinical director asks you to lead the review.",
        question: "Discuss — list and debate how you would respond to this incident and strengthen the remote youth crisis pathway. You must name the tensions explicitly and take a defensible consultant position. (8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Immediate clinical safety comes before the system review — the girl's current safety plan must be established first",
          "The registrar felt pressured — this is a moral injury signal and a governance signal simultaneously",
          "The tension between unavoidable rural constraints and preventable unsafe systems is the central debate point",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "There is tension between unavoidable rural constraints and preventable unsafe systems — a defensible position is that the absence of a local bed is a system constraint, but the absence of a protocol for high-risk discharge without safe supervision is a preventable system failure",
              "There is tension between individual clinician responsibility and organisational responsibility — the registrar made a clinical decision under system pressure without adequate protocol, supervision or escalation support; individual and organisational accountability must both be examined",
              "There is tension between least restrictive care and foreseeable harm — discharging a 14-year-old after self-harm to an older cousin rather than a parent or clinician-assessed safe adult is not least restrictive care; it is an inadequate safety plan created under resource pressure",
              "Ensure the girl's immediate clinical safety — explain that a current risk assessment, safety plan with specific crisis contacts, assessment of the cousin's capacity to provide supervision, and named clinical responsibility for the next 24 hours are the first clinical obligations before any governance action",
              "Communicate with family or carer in a culturally safe way — explain that the family's understanding of what happened, what to watch for and who to call if safety deteriorates must be established as part of the immediate response",
              "Support the registrar with supervision and structured debriefing — explain that the registrar's stated distress and sense of pressure constitutes a moral injury response that requires supervisory acknowledgement and psychological support; they must also be told clearly that the system failure is not theirs alone to carry",
              "Notify through clinical governance — explain that a 14-year-old re-presenting after self-harm following a high-risk discharge is a reportable safety event requiring an incident report, not an internal clinical team discussion",
              "Conduct a systems review examining risk assessment, supervision, transport, bed access, after-hours escalation and documentation — explain that the review must examine every point at which the system could have intervened differently, not only the final discharge decision",
              "Review whether safe adult supervision, child protection, ED or hospital alternatives were adequately considered before discharge — explain that discharge to a cousin without a completed safe-supervision assessment and documented consideration of alternatives represents a protocol gap",
              "Update the remote youth pathway for no-bed and no-transport scenarios — explain that the absence of a local bed and overnight transport is a foreseeable scenario in every remote service; a specific clinical protocol for this scenario must exist before the next high-risk presentation",
              "Establish senior consultant escalation as mandatory for all high-risk remote youth discharge decisions — explain that the registrar should not have been in a position to make this discharge decision without direct senior consultation; a mandatory escalation requirement protects both patients and junior clinicians",
              "Advocate for regional retrieval and transport protocols — explain that overnight transport unavailability in a remote area is a systemic infrastructure gap that requires advocacy at health executive and potentially government level; documenting and escalating this formally is a consultant governance obligation",
            ],
          },
        ],
        zeroMarkTraps: [
          "Beginning with the governance review before establishing the girl's immediate safety and named clinical responsibility",
          "Treating the registrar's distress as a personal response rather than simultaneously a moral injury signal and a governance signal about unsupported clinical decision-making",
          "Accepting the no-bed and no-transport constraints as clinical justification for the discharge without examining whether the protocol for this scenario existed or was followed",
        ],
        postExaminerNote: "Candidates who named the tension between unavoidable rural constraints and preventable system failures, who addressed the registrar's distress as both a support obligation and a governance signal, and who identified the absence of a no-bed protocol as the preventable system failure scored in the upper range. Candidates who attributed the outcome primarily to the registrar's clinical decision without examining the system pressure, or who began with governance before clinical safety, did not achieve the standard.",
      },
    ],
  },
  {
    id: "meq_016",
    title: "ECT Service Audit, Change Management and Consumer Complaint",
    case: "Metropolitan public hospital ECT service, audit and quality improvement",
    examSource: "Generated — Governance / Systems / Leadership",
    topic: "ECT service audit design and leadership; tests clinically meaningful audit design under staff resistance, governance and consumer communication after audit findings, change management balancing urgency and professional autonomy, and open disclosure response to a formal consumer complaint about memory problems and family exclusion",
    primaryDomain: "Governance / Systems / Leadership",
    totalMarks: 32,
    totalTimeMinutes: 32,
    stems: [
      {
        stemNumber: "3.1",
        vignette: "The clinical director asks you to lead a focused audit after informal concerns about ECT practice. A registrar reports that consent forms are sometimes incomplete, cognitive testing is not consistently recorded before and after treatment, and stimulus dosing rationale is unclear in the notes. The ECT nurse says the real problem is 'workload, not documentation.' Two senior psychiatrists say the service is safe and do not want 'another bureaucratic audit.'",
        question: "Outline — list and justify how you would design and lead the ECT audit so it is clinically meaningful, fair and likely to engage staff. A list without because-clauses specific to this situation will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "outline_justify",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Frame audit purpose first — stating that the purpose is safety and quality improvement, not discipline, before designing anything else determines whether staff engage or resist",
          "The nurse's workload concern is clinical information — workload as a barrier to documentation is a system problem, not a nursing performance problem, and must be incorporated into the audit design",
          "Consumer experience must be included — an ECT audit that does not measure patient experience of memory problems and communication is incomplete by contemporary governance standards",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Clarify and communicate the audit purpose as safety and quality improvement, not discipline — because senior psychiatrists who perceive audit as threat to clinical autonomy will not engage honestly; establishing the purpose upfront is the precondition for staff participation",
              "Identify the standards against which practice will be audited — because an audit without explicit standards is not an audit; the relevant standards include local ECT policy, RANZCP ECT guidance, legal capacity and consent requirements, and anaesthetic assessment policy",
              "Define the scope clearly — because an audit that tries to cover everything will produce resistance; recent ECT courses across voluntary and involuntary patients, acute and maintenance ECT, should be defined as the scope before data collection begins",
              "Audit indication, consent, capacity, legal status and discussion of alternatives — because these are the components most likely to create medicolegal exposure if inadequate and most directly connected to the registrar's concern about incomplete consent forms",
              "Audit cognitive baseline and post-treatment cognitive monitoring — because variable recording of cognitive adverse effects is the second identified gap and is directly relevant to the consumer complaints that have already been received informally",
              "Audit ECT prescription: electrode placement, dose, seizure quality and treatment response documentation — because unclear stimulus dosing rationale is the third identified gap and represents a clinical safety issue as well as a documentation problem",
              "Audit anaesthetic review and physical health risk assessment — because the anaesthetic interface is a distinct component of ECT governance that must be included, not assumed to be managed adequately",
              "Audit communication with treating teams, consumers and carers after treatment courses — because incomplete communication back to treating teams is a clinical continuity risk and is the most likely cause of poor GP and team awareness of ECT progress",
              "Include consumer experience and memory complaint data — because contemporary ECT governance standards require patient-reported experience measurement; an audit that does not include this will be criticised as incomplete and will not satisfy the consumer representative",
              "Use multiple data sources — because ECT register, medical record, consent forms, anaesthetic notes and incident and complaint data each provide different information that a single-source audit will miss",
              "Include psychiatry, nursing, anaesthetics, governance staff and a consumer representative in the audit team — because a credible audit team includes the people whose practice is being reviewed and the people whose experience is being measured",
              "Report aggregated rather than individually identified data — because aggregated reporting reduces the defensiveness of senior psychiatrists and focuses attention on system patterns rather than individual performance",
            ],
          },
        ],
        zeroMarkTraps: [
          "Designing the audit without first establishing its purpose as safety improvement rather than discipline",
          "Excluding consumer experience and memory complaints from the audit scope",
          "Treating the nurse's workload concern as a reason to modify the audit scope rather than as a finding to be assessed",
        ],
        postExaminerNote: "Candidates who established audit purpose before audit design, included consumer experience as a required audit component, and named the workload concern as a system finding rather than a deflection from the audit scored in the upper range. Candidates who designed a documentation-only audit without consumer experience measurement or who deferred to senior psychiatrists' resistance did not achieve the standard.",
      },
      {
        stemNumber: "3.2",
        vignette: "The audit identifies inconsistent capacity and consent documentation, variable recording of cognitive adverse effects, unclear anaesthetic review processes, incomplete communication back to treating teams after treatment courses, and no standard process for responding when consumers report persistent memory problems. No serious adverse event has occurred, but several consumers have complained informally.",
        question: "Describe — list and explain the immediate governance, clinical safety and consumer communication actions you would recommend. A list without explanation will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Informal consumer complaints are a governance signal, not background noise — they must be named as such in the action list",
          "Risk-rating the findings is required — not all five gaps carry equal clinical urgency; consent and cognitive monitoring are higher priority than communication templates",
          "A re-audit date is a required component of any quality improvement response",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Report findings through clinical governance — explain that repeated process gaps across five domains in an established ECT service are latent safety failures that require formal governance notification, not internal clinical team management",
              "Risk-rate the findings with capacity and consent and cognitive monitoring as highest priority — explain that capacity and consent documentation failure creates legal exposure for every ECT treatment administered, and absent cognitive monitoring means clinicians cannot detect or respond to adverse cognitive effects; these require the most urgent remediation",
              "Introduce minimum ECT documentation standards immediately — explain that the absence of agreed minimum standards is what allows individual variation to persist; a single-page minimum standard covering consent, cognitive monitoring, prescription and communication must be implemented before the next ECT course",
              "Standardise the capacity and consent documentation process — explain that a standard consent document with required fields and a capacity assessment component ensures that each clinician completes the legally required elements regardless of individual practice variation",
              "Implement cognitive monitoring before, during and after each ECT course — explain that cognitive testing at baseline, mid-course and post-course allows identification and documentation of cognitive adverse effects and provides the evidence base for clinical decisions about treatment continuation or modification",
              "Create a specific pathway for responding to persistent memory complaints — explain that the absence of any standard response to memory complaints means consumers currently have no clear pathway for having their concerns addressed; a defined process including clinical review, information provision and further assessment is required",
              "Clarify the anaesthetic review and physical health clearance process — explain that an unclear anaesthetic review process creates a clinical safety gap at the medical interface of ECT and requires a defined protocol agreed between psychiatry and anaesthetics",
              "Standardise communication with treating teams after treatment courses — explain that incomplete communication back to treating teams means the inpatient or community clinicians responsible for ongoing care cannot track ECT response or plan medication changes; a standard post-course summary template addresses this",
              "Provide consumers and carers with plain-language information about ECT, including cognitive risks — explain that informal complaints about memory problems partly reflect inadequate pre-treatment information; a consumer information document covering expected cognitive effects, who to contact if problems arise, and how to request a clinical review is both a clinical and a governance obligation",
              "Address workload and staffing barriers — explain that the nurse's concern about workload as the root cause of documentation gaps must be addressed through staffing review or workflow redesign; implementing documentation standards without addressing the workload barrier will produce compliance resistance",
              "Set a re-audit date and define quality indicators — explain that governance action without a defined review timeline and measurable indicators is not a quality improvement cycle; a re-audit within three to six months with defined targets for each gap completes the audit cycle",
            ],
          },
        ],
        zeroMarkTraps: [
          "Treating informal consumer complaints as background context rather than a governance signal requiring a specific response pathway",
          "Implementing all five gaps as equal priorities without risk-rating them",
          "Proposing governance actions without a re-audit date and quality indicators",
        ],
        postExaminerNote: "Candidates who risk-rated the findings with consent and cognitive monitoring as highest priority, named informal consumer complaints as a governance signal requiring a formal response pathway, and included a re-audit date as a required component scored in the upper range. Candidates who listed improvements without risk-rating or who omitted the consumer complaint response pathway did not achieve the standard.",
      },
      {
        stemNumber: "3.3",
        vignette: "When findings are presented, two senior psychiatrists become defensive and say the audit undermines clinical autonomy. Nursing staff say they have raised workflow concerns for years without being heard. A consumer representative asks why patient experience of ECT was not measured. The clinical director wants mandatory new documentation implemented within one week.",
        question: "Discuss — list and debate how you would lead the change process, balancing urgency, patient safety, professional autonomy, staff psychological safety and consumer partnership. You must name the tensions explicitly and take a defensible consultant position. (8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "The nursing staff's years of ignored concerns is a distinct governance finding — it must be named as such, not treated as a morale issue",
          "One-week mandatory implementation is clinically urgent but organisationally risky — the tension between urgency and engagement is the central debate",
          "The consumer representative's question is valid — the audit was incomplete without patient experience measurement",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "There is tension between urgency and staff engagement — a defensible position is that immediate high-risk safety items such as consent and cognitive monitoring documentation can be implemented without delay, while broader workflow redesign is co-developed with staff over a longer timeline",
              "There is tension between clinical autonomy and minimum safety documentation standards — explain that clinical judgement about ECT prescription and treatment decisions remains entirely with the treating psychiatrist, but minimum documentation requirements are not a matter of clinical preference; they are a legal and governance standard",
              "There is tension between staff psychological safety and accountability — explain that naming documentation gaps at an individual level will produce defensiveness and resistance; presenting aggregated system patterns and shared accountability produces more sustainable change",
              "There is tension between senior medical authority and nursing safety intelligence — explain that nursing staff who have raised workflow concerns for years without being heard represent both an unaddressed safety signal and a moral injury; the change process must explicitly acknowledge this and create a mechanism for ongoing nursing safety input",
              "There is tension between consumer partnership and professional defensiveness — explain that the consumer representative's question about patient experience is legitimate and correct; adding consumer-reported experience to the audit scope is both a quality improvement response and a signal that consumer partnership is taken seriously",
              "Implement staged change with immediate high-risk items first — explain that consent, capacity and cognitive monitoring documentation standards can be implemented within one week without requiring full team redesign; doing this visibly demonstrates safety responsiveness while workflow redesign proceeds more collaboratively",
              "Develop a shared case for change using patient safety and consumer trust as the framing — explain that framing the change as protecting patients and building community confidence in ECT is more likely to engage senior psychiatrists than framing it as audit compliance",
              "Identify clinical champions across psychiatry, nursing and anaesthetics — explain that change sustained by a respected clinical champion within each discipline is more durable than change imposed by governance alone",
              "Provide practical tools: training, templates and simplified workflows — explain that telling clinicians to document better without providing the tools to do so efficiently will produce frustration; the tools must accompany the standards",
              "Add consumer-reported experience and outcome measures as a direct response to the consumer representative — explain that the consumer representative's question should be explicitly acknowledged as a valid gap and a plan to add patient experience measurement to the re-audit should be committed to in the same meeting",
              "Re-audit and provide transparent feedback — explain that the change cycle is incomplete without a defined re-audit timeline, public reporting of improvement against the identified gaps, and recognition when standards are met",
            ],
          },
        ],
        zeroMarkTraps: [
          "Accepting one-week mandatory implementation as the primary change strategy without engaging the nursing and senior psychiatry concerns",
          "Treating nursing staff's years of ignored concerns as a morale issue rather than an unaddressed safety signal requiring structural response",
          "Failing to acknowledge the consumer representative's concern as a valid audit gap",
        ],
        postExaminerNote: "Candidates who named all five tensions, took a staged-change position distinguishing immediate safety actions from longer-term redesign, acknowledged the nursing safety signal as a governance finding, and responded directly to the consumer experience gap scored in the upper range. Candidates who either accepted one-week full implementation without engaging resistance or deferred all change to avoid conflict did not achieve the standard.",
      },
      {
        stemNumber: "3.4",
        vignette: "A month later, a consumer who received ECT makes a formal complaint. They say they were not told memory problems could persist, their family was not included despite their request, and the inpatient team could not explain the ECT plan or expected number of treatments. The hospital executive asks for your advice before responding.",
        question: "Discuss — list and debate how you would respond to the complaint and use it to strengthen the ECT service. You must name the tensions explicitly and take a defensible consultant position. (8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Defending staff and acknowledging consumer harm are not mutually exclusive — both are required simultaneously",
          "The complaint contains three specific clinical failures: memory information, family inclusion, and inpatient communication — each requires a specific response",
          "The complaint is a quality improvement input, not only a medico-legal risk — framing it as the latter alone is a governance error",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "There is tension between defending staff and acknowledging consumer harm — a defensible position is that both are possible and required; the review will determine what happened, but the consumer's experience of harm is real and requires acknowledgement now, before the review is complete",
              "There is tension between individual complaint management and system improvement — the complaint is both an individual grievance requiring a specific response and a quality signal that must feed into the ECT service redesign already underway",
              "There is tension between patient confidentiality and family involvement — the consumer requested family involvement and this was apparently not facilitated; the review must examine whether consent for family inclusion was sought and documented, and whether it was acted upon",
              "Review the clinical record for all three specific complaints — explain that consent discussion documentation, cognitive monitoring records, family contact documentation and treatment plan communication to the inpatient team must each be reviewed before any response is drafted",
              "Meet or write to the consumer respectfully and acknowledge their concerns — explain that a formal complaint requires a formal and respectful response that acknowledges the consumer's experience without premature defensiveness or admission of liability",
              "Offer open disclosure if communication or documentation was inadequate — explain that if the record review confirms that persistent memory risk was not discussed, family inclusion was not facilitated, or the inpatient team was not informed of the ECT plan, open disclosure to the consumer and family is both a legal and ethical obligation",
              "Arrange a clinical review of the consumer's current memory concerns and functional impact — explain that the complaint about persistent memory problems requires a clinical response, not only an administrative one; a specific review of cognitive function and its impact on the consumer's daily life is part of the duty of care",
              "Feed complaint themes directly into the ECT governance meeting and the ongoing audit — explain that the complaint confirms the audit findings about cognitive monitoring and communication and must be formally incorporated into the quality improvement process",
              "Update consumer information documents and the family communication process — explain that the complaint identifies specific gaps in what consumers are told before ECT about memory risks and in how family involvement is facilitated; these must be corrected in the written information and the clinical process",
              "Avoid attributing individual clinical blame before the review is complete — explain that naming individual clinicians in the executive response before the record review is complete is both legally and ethically premature and may prejudice the formal review",
              "Report improvement actions to the executive and include in the re-audit — explain that the executive needs to see that the complaint has produced specific, measurable improvements in the ECT service, not only a response to the individual complainant",
            ],
          },
        ],
        zeroMarkTraps: [
          "Responding to the complaint primarily as a medico-legal risk rather than simultaneously as a quality improvement input",
          "Attributing individual clinical blame in the executive advice before the record review is complete",
          "Failing to offer open disclosure if the record review confirms the specific gaps the consumer has identified",
        ],
        postExaminerNote: "Candidates who addressed all three specific complaints with specific responses, offered open disclosure contingent on record review findings, and named the complaint as a quality improvement input alongside an individual grievance scored in the upper range. Candidates who treated the complaint primarily as medico-legal risk management or who attributed blame without a record review did not achieve the standard.",
      },
    ],
  },
  {
    id: "meq_017",
    title: "Documentation, GP Liaison, Lithium Toxicity and Shared-Care Quality Assurance",
    case: "Community mental health team, high caseloads, GP complaints, lithium toxicity adverse outcome",
    examSource: "Generated — Governance / Systems / Leadership",
    topic: "Community mental health documentation and GP liaison quality assurance; tests just-culture problem assessment, governance and process change recommendations, consultant response to a lithium toxicity adverse outcome balancing accountability and psychological safety, and leading a shared-care meeting with GPs and consumers after an adverse event",
    primaryDomain: "Governance / Systems / Leadership",
    totalMarks: 32,
    totalTimeMinutes: 32,
    stems: [
      {
        stemNumber: "4.1",
        vignette: "Several GPs complain to the hospital executive about delayed discharge letters, unclear medication plans after inpatient episodes and difficulty contacting the community team. The clinical service manager asks you to investigate. Case managers say registrars do not complete plans properly. Registrars say they rewrite notes repeatedly under inconsistent instructions. Administrative staff say referral and discharge processes differ between consultants.",
        question: "Outline — list and justify how you would assess the documentation and GP liaison problem without prematurely attributing blame to one professional group. A list without because-clauses specific to this situation will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "outline_justify",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "This is a quality assurance task, not a disciplinary investigation — framing it as the latter before assessment is complete will produce defensive responses and incomplete information",
          "Multiple professional groups are pointing at each other — the assessment must map the whole workflow before attributing responsibility to anyone",
          "High-risk medications must be specifically included — lithium, clozapine, valproate and depot antipsychotics are the cases where documentation gaps cause patient harm",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Clarify the task as quality assurance rather than disciplinary investigation — because framing this as an investigation before the problem is understood will produce defensive responses from all professional groups and will prevent honest engagement with system failures",
              "Define the specific problem domains — because delay, unclear medication plans, poor contactability and missing risk and crisis plans are different problems requiring different solutions; conflating them produces unfocused remediation",
              "Map the workflow from inpatient discharge to community follow-up and GP communication — because the multiple conflicting accounts from different professional groups suggest a process fragmentation problem rather than individual performance failure; mapping the actual workflow identifies where the gaps occur",
              "Audit a representative sample of recent discharge cases — because self-report from professional groups is unreliable when each group believes the problem originates elsewhere; direct review of a structured sample provides objective evidence",
              "Specifically include high-risk medication cases in the audit — because lithium, clozapine, valproate and depot antipsychotic discharges carry the highest patient harm potential from documentation gaps and must be sampled separately",
              "Review risk formulation, crisis plans, follow-up arrangements and named clinical responsibility in each case — because GP complaints about unclear medication plans are often the surface presentation of deeper gaps in risk documentation and handover planning",
              "Interview all professional groups without triangulating them against each other — because GPs, registrars, case managers, consultants and administrative staff each have a partial view of the system; all views are required before conclusions are drawn",
              "Review existing policy, templates and consultant-level expectations — because registrars rewriting notes repeatedly under inconsistent instructions suggests the problem is absence of agreed standards rather than individual non-compliance",
              "Assess workload and electronic medical record barriers — because workload and EMR usability are common root-cause findings in documentation quality problems and must be assessed as system variables, not assumed to be individual performance issues",
              "Assess all communication channels — because phone, secure messaging and fax availability and reliability differ between clinicians and GPs and affect whether communication reaches its intended recipient",
              "Use a just-culture approach throughout — because premature attribution of blame to any professional group will reduce engagement with the quality improvement process and make sustainable change less likely",
            ],
          },
        ],
        zeroMarkTraps: [
          "Attributing the problem to any single professional group before the workflow assessment is complete",
          "Omitting high-risk medication cases from the audit scope",
          "Framing the task as a disciplinary investigation rather than a quality assurance process",
        ],
        postExaminerNote: "Candidates who mapped the entire workflow before drawing conclusions, specifically included high-risk medication cases in the audit, and named just culture as both an ethical approach and a practical engagement strategy scored in the upper range. Candidates who attributed the problem to registrar documentation failure or to consultant inconsistency without a structured assessment did not achieve the standard.",
      },
      {
        stemNumber: "4.2",
        vignette: "A structured review of 20 recent cases shows repeated gaps: risk plans are copied forward without review, medication changes are not communicated to GPs, crisis plans are missing from discharge summaries, and it is unclear who is responsible for contacting families after discharge. Staff describe too many templates, conflicting expectations between consultants and no agreed minimum standard for what a discharge summary must contain.",
        question: "Describe — list and explain the process and governance changes you would recommend to improve documentation standards, clinical handover and GP communication. A list without explanation will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Minimum standards before templates — agreeing what must be in every discharge summary is more important than which template is used",
          "Consultant-level accountability for high-risk discharges must be named explicitly — the absence of senior review for high-risk medication discharges is the most dangerous finding",
          "A monthly audit and feedback cycle is required — process change without monitoring is not quality improvement",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Define minimum discharge documentation standards agreed across all consultants — explain that the root cause of inconsistency is the absence of agreed standards; a single minimum standard for every discharge summary covering diagnosis, risk, medication, monitoring requirements, crisis plan, follow-up and responsible clinician must be agreed before any template redesign",
              "Create a standard discharge summary structure — explain that a consistent structure covering the minimum elements reduces variation, reduces the need for rewriting, and makes GP and community team use of the document easier",
              "Introduce specific high-risk medication prompts into the discharge process — explain that lithium, clozapine, valproate and depot antipsychotics each require specific monitoring instructions and GP communication that must be prompted in the discharge workflow, not left to individual clinician memory",
              "Require medication change rationale and monitoring instructions in every discharge summary — explain that GPs cannot safely continue monitoring or prescribing medications whose rationale they do not know; every medication change must be accompanied by an explanation and a clear monitoring plan",
              "Make crisis plans mandatory for all high-risk discharges — explain that missing crisis plans are a patient safety gap, not a documentation preference; mandatory inclusion with a named responsible clinician and specific escalation steps must be specified in the standard",
              "Clarify in writing who writes, checks and sends the discharge summary — explain that the current ambiguity about responsibility is the mechanism by which documentation gaps persist; a named responsibility at each step prevents any group assuming another is managing it",
              "Clarify who contacts the GP and who contacts family or carers — explain that these are clinical tasks requiring named ownership, not administrative tasks that can be left unassigned in the discharge process",
              "Simplify templates to reduce duplication — explain that the staff description of too many templates reflects a system that has accumulated complexity without reducing it; simplification that retains minimum safety elements will improve compliance",
              "Require consultant or senior clinician review for all high-risk medication discharges — explain that the most dangerous documentation gaps in this audit are in high-risk medication cases; mandatory consultant review before discharge creates a clinical safety check that addresses the risk directly",
              "Create a direct GP escalation contact pathway — explain that GPs who cannot contact the community team during working hours have no safe escalation option; a named contact with a defined response time standard is a clinical safety and partnership requirement",
              "Develop shared-care protocols for lithium, clozapine and depot medications — explain that these medications require long-term monitoring that spans inpatient, community and primary care settings; a documented shared-care agreement specifying who orders tests, who reviews results, and who acts on abnormal results is the clinical governance standard",
              "Implement a monthly audit and feedback cycle — explain that process change without monitoring produces temporary improvement followed by drift; monthly audit of a documentation sample with feedback to the team closes the improvement cycle and sustains change",
            ],
          },
        ],
        zeroMarkTraps: [
          "Recommending new templates without first establishing agreed minimum standards",
          "Omitting consultant-level accountability for high-risk medication discharges",
          "Proposing process changes without a monitoring and feedback mechanism",
        ],
        postExaminerNote: "Candidates who named agreed minimum standards as the prerequisite for any template redesign, who specified consultant review as mandatory for high-risk medication discharges, and who included a monthly audit and feedback cycle scored in the upper range. Candidates who focused only on template redesign or GP communication without addressing the accountability and monitoring dimensions did not achieve the standard.",
      },
      {
        stemNumber: "4.3",
        vignette: "The clinical service manager asks you to tell the team that non-compliance with documentation standards will be escalated to management. The team feels blamed and says management ignores workload pressures and electronic medical record limitations. The following week, a GP emails the hospital executive after a patient is discharged without clear lithium-monitoring advice. The patient's lithium level is found to be toxic at a GP blood test three weeks later.",
        question: "Discuss — list and debate how you would act as the consultant psychiatrist in this quality assurance role, balancing staff accountability, psychological safety, team culture, GP partnership and patient safety after this adverse outcome. You must name the tensions explicitly and take a defensible consultant position. (8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Immediate patient safety comes before the governance response — lithium toxicity is a medical emergency requiring clinical response first",
          "The clinical service manager's framing of non-compliance escalation is the wrong governance approach — it will worsen the team culture problem without improving safety",
          "The tension between accountability and psychological safety is the central debate — both are required and neither resolves the other",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "There is tension between accountability for a patient harmed by a documentation failure and the psychological safety required for the team to engage honestly with the quality improvement process — a defensible position is that both are required; accountability for the patient's care and safety does not preclude a just-culture approach to the system failure",
              "There is tension between the clinical service manager's escalation approach and sustainable quality improvement — threatening non-compliance escalation before addressing workload and EMR barriers is likely to produce defensive compliance rather than genuine practice change",
              "There is tension between workload explanations and minimum patient safety requirements — the team's concerns about workload and EMR limitations are legitimate system barriers that must be addressed, but they do not exempt the service from the obligation to ensure lithium monitoring advice reaches the GP",
              "Ensure the patient's immediate medical safety first — explain that lithium toxicity requires urgent medical assessment, monitoring and management; the clinical response to the patient cannot be deferred while governance and team culture issues are being managed",
              "Contact the GP respectfully and establish clear immediate clinical responsibilities — explain that the GP needs to know who is the responsible clinician, what the clinical plan is, and what monitoring is required; this contact repairs the GP relationship and ensures continuity of care",
              "Initiate open disclosure with the patient and family — explain that a patient harmed by a documentation failure that led to inadequate monitoring is entitled to an honest explanation of what happened, what the clinical consequences are and what is being done to address them",
              "Report the incident through governance — explain that lithium toxicity following discharge without monitoring advice is a reportable patient safety event requiring an incident report, a formal review and notification to the relevant governance body",
              "Conduct a systems review examining the discharge workflow, medication reconciliation, EMR, consultant review process and GP transmission — explain that the systems review must examine every point at which the failure could have been prevented, not only the final documentation step",
              "Resist the clinical service manager's non-compliance escalation framing — explain that threatening escalation before addressing workload and EMR barriers will worsen the team's sense of being blamed and reduce engagement with the quality improvement process; the consultant's role is to redirect this toward just-culture accountability",
              "Set non-negotiable minimum standards for high-risk medication discharges — explain that while workload and EMR concerns require systemic response, lithium, clozapine and valproate discharges must have monitoring instructions communicated to the GP before the patient leaves; this is a non-negotiable clinical safety standard",
              "Support staff with debriefing and supervision — explain that a patient harm event affecting team members who were managing high caseloads requires psychological support alongside accountability; both are required to maintain a functional team",
              "Implement fail-safes for high-risk medication discharges — explain that pharmacist medication reconciliation review, mandatory senior sign-off, and a direct GP phone call for lithium, clozapine and valproate discharges are system-level protections that do not rely on individual clinician memory",
            ],
          },
        ],
        zeroMarkTraps: [
          "Beginning with the governance response before addressing the patient's immediate lithium toxicity",
          "Endorsing the clinical service manager's non-compliance escalation framing without redirecting it toward just-culture accountability",
          "Accepting workload and EMR limitations as justification for the documentation failure rather than naming them as system barriers requiring response alongside non-negotiable safety standards",
        ],
        postExaminerNote: "Candidates who addressed lithium toxicity as an immediate medical emergency first, named the clinical service manager's escalation approach as counterproductive and redirected it, and identified fail-safes for high-risk medication discharges as the systemic prevention mechanism scored in the upper range. Candidates who began with governance before clinical safety, or who endorsed the blame framing, did not achieve the standard.",
      },
      {
        stemNumber: "4.4",
        vignette: "After the lithium incident, the GP liaison group asks to attend a team meeting. Some staff say this will become a 'GP complaint session.' One consultant says GPs should take more responsibility for monitoring once the patient is discharged. A consumer representative says patients often leave hospital without understanding medication risks or who to call. The service manager asks you to lead the meeting and propose a sustainable shared-care process.",
        question: "Discuss — list and debate how you would lead this meeting and develop a shared-care process with GPs, staff and consumers. You must name the tensions explicitly and take a defensible consultant position. (8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Frame the meeting as shared safety, not blame — the framing set before the meeting begins determines whether GPs, staff and consumers can have a productive conversation",
          "The specialist versus GP responsibility debate is the central clinical tension — it must be resolved with clear shared-care boundaries, not left as a philosophical disagreement",
          "Consumer understanding of medication risks is a named gap that must be addressed in the shared-care process",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "There is tension between specialist responsibility and GP responsibility for medication monitoring — a defensible position is that the specialist retains responsibility for psychiatric medication decisions until safe handover is confirmed; the GP cannot be expected to monitor medications they were not adequately briefed on",
              "There is tension between staff defensiveness and external GP feedback — staff who fear a complaint session will not engage productively; framing the meeting as shared problem-solving around a defined safety gap is the leadership precondition for useful conversation",
              "There is tension between service efficiency and consumer understanding — discharging patients quickly without ensuring they understand their medication risks creates downstream harms that cost the system more than the time invested in discharge education",
              "Frame the meeting explicitly as shared safety improvement, not complaint management — explain that opening the meeting by stating that the shared goal is preventing the next lithium toxicity case, rather than reviewing what went wrong last time, redirects energy from blame to problem-solving",
              "Invite GPs to describe the practical risks they encounter when discharge information is unclear — explain that giving GPs the opportunity to describe what it is like to receive an inadequate discharge letter, rather than only presenting the hospital's perspective, produces a more complete picture of the shared-care failure",
              "Invite the consumer representative to describe the patient experience at discharge — explain that consumer experience of medication understanding and knowing who to call is a required input to a shared-care process, not an afterthought",
              "Clarify shared-care boundaries explicitly — explain that a written shared-care agreement specifying who orders monitoring tests, who reviews results, who acts on abnormal results and who is responsible when a result is not reviewed must be the primary output of the meeting",
              "Develop high-risk medication communication templates for lithium, clozapine and valproate — explain that these medications require specific shared-care documentation that goes beyond a standard discharge letter; a template agreed with GPs that covers monitoring schedule, result thresholds and escalation contacts is the practical product",
              "Agree minimum communication timelines after discharge — explain that GPs need to know within a defined time after discharge what medications have changed and what monitoring is required; agreeing a timeline and format addresses the delay complaint",
              "Agree a direct contact pathway for urgent GP questions — explain that GPs who have an urgent question about a patient's psychiatric medication currently have no reliable escalation route; a named contact with a defined response time standard is a patient safety requirement",
              "Include patient-held medication and monitoring information — explain that consumers who leave hospital with their own copy of their medication plan, monitoring schedule and crisis contact are better positioned to manage their own safety; this directly addresses the consumer representative's concern",
              "Agree a feedback and audit cycle with GPs — explain that the shared-care process will only be sustained if both parties receive regular feedback on how it is working; an agreed audit of GP satisfaction and documentation completion rates maintains the partnership",
            ],
          },
        ],
        zeroMarkTraps: [
          "Allowing the meeting to proceed as a GP complaint session without redirecting it toward shared problem-solving",
          "Endorsing the consultant's position that GPs should take more responsibility without specifying what that means in a written shared-care agreement",
          "Failing to address consumer understanding of medication risks as a named output of the shared-care process",
        ],
        postExaminerNote: "Candidates who framed the meeting as shared safety improvement before it began, named the specialist-versus-GP responsibility tension and resolved it with specific shared-care boundaries, and included consumer medication understanding as a required output scored in the upper range. Candidates who allowed the blame framing to persist or who endorsed the consultant's position without specifying shared-care boundaries did not achieve the standard.",
      },
    ],
  },
  {
    id: "meq_018",
    title: "Alex — Gender-Diverse Patient, ED Stigma and Complaint",
    case: "Alex, 22, transgender man, ED presentation, self-harm and family conflict",
    examSource: "Generated — Ethics / Professionalism / Legal",
    topic: "ED assessment of a transgender man with depression, self-harm and family conflict; tests gender-affirming formulation, safety and confidentiality management, consultant response to ED staff stigma and discrimination, and complaint management after re-presentation following delayed help-seeking",
    primaryDomain: "Ethics / Professionalism / Legal",
    totalMarks: 32,
    totalTimeMinutes: 32,
    stems: [
      {
        stemNumber: "1.1",
        vignette: "Alex is a 22-year-old transgender man who presents to ED after superficial cutting to his forearm and escalating suicidal thoughts following several arguments with his family. He has a history of depression, recurrent self-harm, unstable relationships, and previous negative experiences with health services. He reports that his mood worsens when people use his birth name and he is distressed following recent family conflict about his gender identity. He is medically stable. He says he wants to leave before the psychiatric assessment is complete.",
        question: "Outline — list and justify the key diagnostic and formulation issues you would consider in assessing Alex. A list without because-clauses specific to this case will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "outline_justify",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Gender dysphoria is a formulation context, not the diagnosis — treating Alex's gender identity as the psychiatric problem is a zero-mark clinical error",
          "Minority stress drives the risk — family invalidation and misgendering are direct risk factors in this presentation, not background context",
          "Capacity to leave must be assessed — Alex wants to leave before assessment; this requires a structured response, not acceptance",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Assess current suicide risk and self-harm — because Alex presents after cutting with escalating suicidal thoughts and wants to leave before assessment; the combination of active ideation and departure intent requires urgent risk formulation before any disposition decision",
              "Assess for depressive disorder — because low mood, suicidality and withdrawal following interpersonal conflict may reflect a current major depressive episode or relapse requiring specific treatment beyond crisis management",
              "Formulate gender dysphoria as context, not pathology — because Alex's gender identity is not the clinical problem; his distress when misnamed and the family conflict about his identity are minority stress contributors to the crisis that must be named in the formulation without pathologising the identity itself",
              "Assess eating restriction and body-related distress — because longstanding concerns about physical appearance in a transgender man may indicate an eating disorder, body-image-driven food restriction, or gender dysphoria-related somatic distress that carries independent medical and psychiatric risk",
              "Assess for borderline personality traits and emotional dysregulation — because recurrent self-harm, unstable relationships, intense affect and fear of abandonment may contribute to crisis presentations and influence treatment planning",
              "Assess for trauma-related disorder — because prior trauma history and previous negative healthcare experiences may affect trust, risk, dissociation, avoidance and response to both admission and clinical engagement",
              "Assess substance use — because alcohol and cannabis use may worsen mood instability, impulsivity and self-harm risk and must be incorporated into the risk formulation",
              "Assess medical risk — because superficial cuts require wound assessment, and any food restriction or excessive exercise requires physical health review including electrolytes and cardiac monitoring",
              "Assess protective factors — because partner support, willingness to seek help and current clinical engagement may reduce but do not remove risk and must inform the safety plan",
              "Formulate minority stress and stigma as direct risk contributors — because misgendering, family rejection and previous health service discrimination directly worsen distress and may increase avoidance of future help-seeking after this presentation",
              "Formulate the family conflict specifically — because repeated use of Alex's birth name and parental invalidation of his gender identity are active precipitants of the current crisis that must be named in the formulation and addressed in the safety plan",
              "Assess capacity to leave and the need for least restrictive containment — because if suicide risk is high and Alex insists on leaving, decision-making capacity must be formally assessed and the least restrictive legal option considered before any discharge",
            ],
          },
        ],
        zeroMarkTraps: [
          "Treating Alex's gender identity or gender dysphoria as the diagnosis or primary psychiatric problem — this pathologises identity and is both clinically incorrect and ethically unacceptable",
          "Focusing only on suicide risk without formulating the minority stress, family invalidation and healthcare discrimination as direct risk contributors specific to this presentation",
          "Ignoring the request to leave — departure before psychiatric assessment in the context of active suicidal ideation requires a formal capacity assessment, not acceptance",
        ],
        postExaminerNote: "March 2025 MEQ 3 (Sandy, 17) tested this area and achieved only 46.8% average marks. Markers noted candidates showed a risk bias toward self-harm rather than gender concerns, and a tendency to equate gender dysphoria with pathology. Candidates who formulated minority stress and family invalidation as active risk drivers — not background information — and who explicitly avoided pathologising the gender identity itself scored in the upper range.",
      },
      {
        stemNumber: "1.2",
        vignette: "Alex agrees to speak with you. He says he does not want his parents contacted because they continue to use his birth name and say his gender identity is 'a phase.' His partner is present and says Alex has been more withdrawn, eating very little and threatening to overdose if his family keeps contacting him. Alex says he wants help but does not want admission because previous admissions made him feel unsafe. His mother phones ED and demands information, saying, 'I am his parent and I have a right to know.'",
        question: "Describe — list and explain how you would manage Alex's safety, confidentiality, family involvement, partner concerns and engagement in care. A list without explanation will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Alex is an adult — parental concern does not override confidentiality regardless of how it is framed",
          "The partner holds clinical information — partner collateral must be obtained with Alex's consent and engaged as a safety resource, not sidelined",
          "Previous admission trauma is a clinical variable — it does not mean admission is always wrong, but it must inform the engagement plan",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Engage Alex using his correct name and pronouns throughout — explain that respectful gender-affirming communication is both an ethical obligation and a clinical necessity; it is the precondition for a therapeutic relationship that may determine whether Alex accepts or refuses care",
              "Conduct a comprehensive suicide risk assessment — explain that plan, intent, access to means, intoxication, recent triggers including overdose threats, protective factors, and willingness to accept help must all be assessed before any disposition decision is made",
              "Assess eating restriction and physical risk from the partner's account — explain that the partner's report of Alex eating very little is clinically material collateral that requires specific physical health assessment including weight, electrolytes and cardiac monitoring independent of the psychiatric assessment",
              "Clarify Alex's consent regarding partner involvement — explain that the partner may hold important risk information but Alex's right to determine who is involved in his care must be respected; the partner's presence and their collateral should be used only with Alex's agreement",
              "Clarify the limits of confidentiality with Alex clearly and without threat — explain that he is entitled to know what information may need to be shared if there is serious imminent risk, so that the clinical relationship is built on transparency rather than discovery",
              "Do not disclose information to the mother — explain that Alex is an adult and parental concern, however genuine, does not override his right to confidentiality; the mother should be told only that he is being seen and that staff cannot confirm or deny clinical information without his consent",
              "Offer family involvement only on Alex's terms — explain that contact with invalidating parents may worsen risk rather than reduce it; family involvement should be offered as an option when and if Alex chooses, not imposed because a parent has phoned",
              "Acknowledge the partner's distress while maintaining Alex as the clinical focus — explain that the partner's information is useful and their distress is understandable, but the clinical engagement must remain centred on Alex and not be redirected to managing the partner's anxiety",
              "Explore admission alternatives before defaulting to admission — explain that given Alex's previous unsafe admission experiences, a crisis plan, safe accommodation, intensive follow-up, partner support and eating disorder review may be clinically preferable and more likely to be accepted",
              "Consider admission if risk or physical instability requires it — explain that Alex's expressed preference against admission is clinically relevant but does not remove the duty of care if eating restriction, overdose risk or active suicidal intent cannot be safely managed in the community",
              "Develop a collaborative safety plan — explain that means restriction, crisis contacts, specific follow-up for eating and physical health, and a clear return-to-ED plan must be developed with Alex's active participation to maximise the likelihood that he will use it",
              "Document consent decisions, confidentiality reasoning and risk formulation — explain that in a case involving family conflict, a demanding parent and a patient who does not want admission, contemporaneous documentation of every clinical and ethical decision is both professionally required and legally essential",
            ],
          },
        ],
        zeroMarkTraps: [
          "Providing information to the mother because she describes herself as his parent — parental status does not override adult confidentiality",
          "Excluding the partner entirely from the safety planning — partner collateral and partner as a safety resource are both clinically important with Alex's consent",
          "Accepting Alex's preference against admission as automatically valid without assessing current risk level and physical health status from the eating restriction",
        ],
        postExaminerNote: "Candidates who named family-inclusive but patient-consented care as the operating principle, who documented the reasoning for declining to inform the mother, and who engaged the partner's collateral as a clinical resource rather than a management problem scored in the upper range. Candidates who gave information to the mother or who excluded the partner entirely did not achieve the standard.",
      },
      {
        stemNumber: "1.3",
        vignette: "While waiting for review, Alex becomes distressed and asks to leave. He says ED staff repeatedly used his birth name despite correction, discussed his gender identity loudly at the nurses' desk, and that staff laughed after he corrected them. He says, 'This is why people like me don't come to hospital.' The ED nurse-in-charge says the department is busy and asks you to 'just assess the suicide risk and move him on.' A junior nurse privately tells you she heard staff laughing but is afraid to raise it because the senior nurse involved is influential.",
        question: "Discuss — list and debate the immediate clinical, ethical, communication and staff-culture issues raised by this situation. You must name the tensions explicitly and take a defensible consultant position. (8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "The communication failure is itself a risk issue — Alex's statement that this is why people like him do not come to hospital is a safety signal, not a complaint to be deferred",
          "The junior nurse's fear is a staff culture and psychological safety problem — it requires a specific response, not only the clinical response to Alex",
          "Rapid throughput and safe psychiatric care are in direct tension — the nurse-in-charge's framing must be named and rejected",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "There is tension between ED throughput pressure and Alex's need for safe, respectful psychiatric care — a defensible consultant position is that Alex's suicide risk and the alleged discrimination require immediate attention that cannot be subordinated to bed flow",
              "There is tension between staff workload and the obligation to provide respectful gender-affirming care — busyness may explain staff stress but does not justify misgendering, public disclosure of gender identity or mockery of a patient who is actively suicidal",
              "There is tension between Alex's request to leave and the duty of care — his desire to leave after an alleged dignity breach must be assessed in the context of his suicide risk and capacity, not accepted as a straightforward autonomous discharge decision",
              "The alleged privacy breach is a clinical and legal concern — discussing Alex's gender identity loudly at a nurses' desk in a public waiting area may constitute a breach of health information privacy that requires formal documentation regardless of whether a complaint is later lodged",
              "Misgendering is clinically relevant to this specific patient — it directly worsens distress, reduces therapeutic alliance, and in the context of active suicidal ideation may increase the risk of unsafe departure and delayed future help-seeking",
              "Staff laughter constitutes a patient safety and institutional culture issue — mockery of a patient's gender identity in an acute setting is not a minor interpersonal matter; it is a form of discrimination that affects immediate clinical safety and requires a specific consultant response",
              "The junior nurse's fear indicates a psychological safety deficit — a ward culture where junior staff cannot raise concerns about a senior colleague's conduct without fear of retaliation requires consultant-level acknowledgement and a clear pathway for safe escalation",
              "Acknowledge Alex's experience immediately and move him to a private space — explain that validating his account without premature attribution of blame, and ensuring physical containment in a private area, are the immediate clinical actions that may restore enough engagement to continue the assessment",
              "Escalate the conduct concern respectfully to ED leadership — explain that the nurse-in-charge's instruction to move Alex on does not resolve the conduct concern; the consultant must raise it with appropriate ED leadership as a patient safety and culture matter separate from the throughput pressure",
              "Document the reported incident factually and contemporaneously — explain that a complaint process, if one proceeds, requires a neutral factual record created at the time; defensive or minimising documentation created later would be both professionally and legally problematic",
              "Do not conduct a superficial suicide assessment to comply with throughput pressure — explain that the alleged discrimination is part of the current risk formulation because it has directly increased Alex's distress and his stated likelihood of avoiding future care; a thorough assessment is clinically required",
            ],
          },
        ],
        zeroMarkTraps: [
          "Accepting the nurse-in-charge's framing and conducting a rapid assessment to manage throughput — this subordinates clinical safety to operational convenience",
          "Dismissing Alex's account pending formal investigation — his experience of harm is real and clinically relevant regardless of what an investigation later finds",
          "Ignoring the junior nurse's disclosure — fear of raising concerns about a senior colleague is a staff culture and governance problem requiring a specific response",
        ],
        postExaminerNote: "Candidates who named the communication failure as a risk issue rather than only a conduct issue, who identified the junior nurse's fear as a psychological safety deficit requiring structural response, and who took a clear position that throughput pressure does not justify unsafe or discriminatory care scored in the upper range. Candidates who conducted a rapid assessment without addressing the conduct concern or who deferred all action pending a formal complaint did not achieve the standard.",
      },
      {
        stemNumber: "1.4",
        vignette: "The next day, Alex's partner submits a formal complaint alleging discrimination, breach of privacy and failure to provide gender-affirming care. The complaint investigation has not yet been completed. A week later, Alex re-presents after a more serious overdose. He says he delayed coming to hospital because of how he was treated in ED. ED staff feel blamed and defensive. The service director asks you to recommend immediate and longer-term actions.",
        question: "Discuss — list and debate how you would manage Alex's ongoing care and the complaint process, balancing patient safety, complaint fairness, staff accountability, psychological safety and service improvement. You must name the tensions explicitly and take a defensible consultant position. (8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Alex's delayed presentation is a direct clinical consequence of the discrimination — this connection must be named explicitly in both the clinical response and the complaint response",
          "Validating Alex's experience and maintaining a fair complaint process are not mutually exclusive — both are required simultaneously",
          "Staff defensiveness is a governance risk — it must be managed without colluding with it",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "There is tension between Alex's immediate clinical care and the complaint investigation — a defensible position is that clinical care is the first obligation and must not be compromised by the complaint process; equally, the complaint cannot be deferred until clinical care is resolved",
              "There is tension between validating Alex's experience and prejudging staff before the complaint investigation is complete — acknowledging his distress and the clinical impact of the discrimination does not require a finding of individual guilt before the process concludes",
              "There is tension between staff psychological safety and accountability — a just-culture response supports staff through the process without excusing discriminatory conduct; these are not competing obligations",
              "Reassess Alex's overdose risk, medical consequences, eating restriction and safe disposition — explain that the clinical response to the re-presentation is the first obligation; the overdose must be managed as a direct clinical event before governance actions are addressed",
              "Use consistent gender-affirming communication throughout Alex's current and future care — explain that repetition of the original harm during the current admission would compound the injury, increase the risk of further disengagement and constitute a further breach of the duty of care",
              "Offer open disclosure and acknowledgement of harm where the clinical facts support it — explain that failure to acknowledge Alex's experience may worsen avoidance of future care; the complaint process does not prevent an honest acknowledgement that he experienced distress that influenced his decision to delay treatment",
              "Explain the complaint pathway clearly to Alex and his partner — explain who investigates, what the process involves, what confidentiality protections apply, what feedback he will receive and what support options are available during the process",
              "Protect Alex from retaliation or dismissive care during the complaint process — explain that fear of worse treatment was a stated barrier to his re-presentation; the clinical team must be explicitly briefed that his care must not be affected by the complaint",
              "Preserve factual evidence relevant to the complaint — explain that triage records, name and pronoun documentation, staff rostering and waiting-room layout must be preserved before they are lost or altered; this protects both Alex and staff through the investigation",
              "Support the junior nurse to speak safely — explain that her account is material to the investigation and she must be able to provide it without fear of retaliation; the consultant must establish a safe pathway for her disclosure",
              "Debrief and support ED staff without colluding with defensiveness — explain that staff who feel blamed require supervisory acknowledgement and a clear explanation of the process, but this support must not take the form of minimising Alex's account or reinforcing the conduct that caused harm",
              "Recommend specific system changes — explain that correct name and pronoun documentation processes, privacy prompts at triage, staff training on gender-affirming care, a visible patient escalation pathway and a consumer-informed audit of complaints are the governance responses that prevent recurrence",
              "Include consumer and carer involvement in the service improvement plan — explain that changes to ED culture and processes for gender-diverse patients should be co-designed with consumer and community input, not developed solely by clinicians",
              "Plan Alex's follow-up care comprehensively — explain that a crisis plan, gender-affirming therapy pathway, eating disorder assessment, GP liaison and connection with LGBTQIA+ community supports must all be in place before discharge",
            ],
          },
        ],
        zeroMarkTraps: [
          "Deferring all clinical and governance action until the complaint investigation is complete — Alex's safety and the service improvement obligation cannot wait",
          "Attributing individual blame to named staff before the investigation is complete — this prejudges the process and creates legal exposure",
          "Treating the complaint as separate from the clinical risk — Alex's delayed re-presentation is a direct clinical consequence of the discrimination and must be named as such in both streams",
        ],
        postExaminerNote: "Candidates who named Alex's delayed presentation as a direct clinical consequence of the discrimination and incorporated this into both the clinical and governance response, who distinguished validating his experience from prejudging staff, and who recommended specific system changes including consumer involvement scored in the upper range. Candidates who deferred governance action until the investigation concluded, or who prioritised staff psychological safety over Alex's clinical safety, did not achieve the standard.",
      },
    ],
  },
  {
    id: "meq_019",
    title: "Donna — Acute Relapse, Discharge Barriers and Nurse–Social Worker Disagreement",
    case: "Donna, 39, inpatient, alcohol relapse, family violence, homelessness",
    examSource: "Generated — Management / Disposition",
    topic: "Acute inpatient management of a 39-year-old woman readmitted with alcohol relapse, suicidal ideation, family violence and homelessness; tests immediate risk and withdrawal assessment, management of nurse–social worker disagreement while preserving patient-centred care, and consultant-level discharge decision under simultaneous clinical risk and bed pressure",
    primaryDomain: "Management / Disposition",
    totalMarks: 30,
    totalTimeMinutes: 30,
    stems: [
      {
        stemNumber: "2.1",
        vignette: "Donna is a 39-year-old woman admitted from ED overnight after presenting intoxicated, agitated and expressing suicidal thoughts. She was discharged from the same unit two weeks ago after a short admission following an overdose. Since discharge, she has returned to heavy alcohol use, stopped taking sertraline, lost her temporary accommodation and had renewed contact with an ex-partner who has previously assaulted her. In ED she required security support after shouting that she 'might as well be dead.' She is now sober, ashamed and asking to leave. She says hospital 'makes everything worse.' The nurse coordinator believes Donna remains at high risk and should stay in hospital. The social worker says admission alone will not solve homelessness or family violence.",
        question: "Outline — list and justify your immediate assessment and management priorities for Donna on the ward. A list without because-clauses specific to this case will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "outline_justify",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Sobriety does not resolve risk — shame, the failed discharge, and ongoing stressors remain after intoxication clears",
          "Family violence is an active clinical risk driver — it is not a social issue to be handed to the social worker; it belongs in the psychiatric risk formulation",
          "Team disagreement must be kept away from Donna — open staff conflict in front of her is itself a clinical harm",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Reassess suicide risk after sobriety — because intoxication may have amplified the expressed risk but shame, a recent overdose, ongoing family violence and homelessness remain active contributors that require a sober reassessment, not acceptance of current denial",
              "Assess alcohol withdrawal and dependence — because heavy recent use after discharge creates risk of clinically significant withdrawal requiring CIWA-Ar monitoring, thiamine supplementation and pharmacological management independent of the psychiatric assessment",
              "Assess depressive symptoms and sertraline cessation — because stopping an antidepressant after a recent overdose may reflect relapse, side-effect intolerance, alcohol interaction or inadequate follow-up, each of which has different management implications",
              "Assess family violence risk as an immediate clinical priority — because renewed contact with the violent ex-partner may represent an active physical safety threat that changes the safety planning for discharge regardless of Donna's current mental state",
              "Assess housing instability as a clinical risk driver — because the loss of accommodation is not a social inconvenience but a direct contributor to relapse risk, medication non-adherence and inability to implement any discharge safety plan",
              "Clarify why the discharge two weeks ago failed — because readmission within two weeks from the same unit suggests a specific gap in the transition plan, follow-up arrangement or support structure that must be identified before the current admission plan repeats the same error",
              "Assess capacity and legal status if she insists on leaving — because Donna is asking to leave while her risk has not been fully reassessed; if imminent risk is confirmed, the least restrictive legal option must be considered and documented before any departure is facilitated",
              "Develop an immediate safety plan on the ward — because observation level, means restriction, alcohol management, de-escalation approach and trauma-informed engagement all require consultant-level decisions now, not deferred to the ward team",
              "Use a collaborative formulation with Donna — because her statement that hospital makes everything worse is a clinical signal about the therapeutic alliance that must be engaged directly; a formulation she recognises as accurate is more likely to support engagement with the plan",
              "Coordinate early MDT input — because nursing, social work, AOD, family violence services, pharmacy and the community team each have a specific role that must be allocated now, not at the discharge planning meeting",
              "Contain team disagreement away from Donna — because open conflict between the nurse and social worker in front of her is a clinical harm that directly undermines her confidence in the team and increases the risk of self-discharge",
            ],
          },
        ],
        zeroMarkTraps: [
          "Discharging because Donna is now sober and asking to leave — sobriety clears the intoxication but not the underlying risk factors that drove the presentation",
          "Treating family violence and homelessness as social issues outside the psychiatric risk formulation — both are active clinical risk drivers that belong in the consultant's assessment",
          "Allowing the nurse-social worker disagreement to continue in front of Donna — this is a clinical harm requiring immediate containment",
        ],
        postExaminerNote: "Candidates who reassessed risk after sobriety rather than accepting current denial, who named family violence and homelessness as clinical risk drivers rather than social referral items, and who identified team conflict containment as an immediate management priority scored in the upper range. Candidates who focused only on medication and observation without addressing the failed discharge, family violence or team dynamics scored in the lower range.",
      },
      {
        stemNumber: "2.2",
        vignette: "Over the next 48 hours, Donna's mental state improves but discharge planning becomes difficult. The nurse coordinator says Donna is minimising risk and that discharge would be unsafe. The social worker says the ward is using risk to compensate for lack of housing and family-violence services. Junior staff say the nurse and social worker have disagreed openly in front of Donna and that this has happened in several other complex discharge cases. Donna says, 'You people are arguing about me, not helping me.'",
        question: "Describe — list and explain the key barriers to safe discharge and how you would manage the staff disagreement while maintaining patient-centred care. A list without explanation will not be awarded any marks. (10 marks | 10 minutes)",
        commandWord: "describe_explain",
        marks: 10,
        timeMinutes: 10,
        stemSignals: [
          "Both clinicians are partially right — the nurse's risk concern and the social worker's structural concern each capture a real barrier; taking sides loses clinical information",
          "Team conflict is itself a discharge barrier — Donna's statement names this directly and it must be addressed as a clinical problem",
          "The pattern across several complex cases is a governance signal — this is not just about Donna",
        ],
        domains: [
          {
            name: "Award up to 10 marks from the following scorable points",
            marks: 10,
            keyPoints: [
              "Name the specific discharge barriers — explain that ongoing suicide and overdose risk, alcohol relapse risk, family violence risk from the ex-partner, loss of housing, recent failed discharge, medication non-adherence and therapeutic alliance rupture with the ward are each distinct barriers requiring specific responses, not a single problem",
              "Acknowledge that ongoing alcohol relapse risk is an active discharge barrier — explain that heavy alcohol use increases impulsivity, exposure to the violent ex-partner and medication non-adherence in ways that make the discharge environment more dangerous than the admission environment if not specifically addressed",
              "Acknowledge that family violence is an active discharge barrier — explain that renewed contact with the violent ex-partner means that discharge to her previous social environment without a specific safety plan creates a foreseeable risk of physical harm that psychiatric admission cannot address but must not ignore",
              "Acknowledge that housing instability is a clinical discharge barrier — explain that three nights of crisis accommodation is an inadequate foundation for a safe discharge plan for a woman with alcohol dependence, family violence exposure and a recent overdose; housing must be escalated as a clinical priority, not accepted as resolved",
              "Name the team conflict itself as a discharge barrier — explain that Donna's statement 'you are arguing about me, not helping me' is clinical evidence that the team disagreement has entered the therapeutic relationship and is now directly undermining her confidence in the plan",
              "Extract the valid clinical information from each position — explain that the nurse is identifying dynamic minimisation of ongoing risk and the social worker is identifying structural barriers that admission will not resolve; both observations are clinically accurate and must be incorporated into the formulation rather than treated as competing positions",
              "Hold a structured MDT meeting with the disagreement contained — explain that the nurse and social worker must discuss their positions without Donna present, with the consultant facilitating a shared formulation rather than adjudicating between them",
              "Set ground rules for team communication in front of patients — explain that repeated open conflict between staff members in front of Donna across multiple complex cases is a ward culture problem requiring consultant leadership, not only case management",
              "Separate bed pressure from clinical decision-making — explain that the discharge decision must be based on the risk formulation, not on bed availability; if these are being conflated the consultant must name and address this explicitly",
              "Involve Donna in the planning process — explain that her goals, fears, preferences and safety ideas must be incorporated into the discharge plan; patient-centred care in this context means that her perspective on what would make discharge safer is clinically material, not merely consultative",
              "Use a shared formulation — explain that a written formulation agreed across the MDT, covering risk, protective factors, social context, trauma, alcohol, family violence and housing, converts the disagreement from competing professional opinions into a shared clinical account that can be used to make and document the discharge decision",
            ],
          },
        ],
        zeroMarkTraps: [
          "Taking the nurse's side or the social worker's side rather than extracting valid information from both",
          "Treating team conflict as a personality issue rather than a clinical and governance problem requiring structural response",
          "Allowing bed pressure to drive the discharge decision without naming and addressing this explicitly",
        ],
        postExaminerNote: "The March 2026 post-exam report on Hayley (22) specifically noted that candidates failed to articulate the MDT approach to the overall management plan and gave only brief reference to outpatient referral. Candidates who extracted valid clinical information from both the nurse and social worker, named team conflict as a discharge barrier, and produced a shared written formulation scored in the upper range. Candidates who took sides or treated social issues as separate from the psychiatric risk formulation did not achieve the standard.",
      },
      {
        stemNumber: "2.3",
        vignette: "A discharge planning meeting is arranged. Donna wants to leave. The social worker has found crisis accommodation for three nights only. The nurse coordinator remains concerned about alcohol relapse and renewed contact with the violent ex-partner. The bed manager is pressuring the team to discharge because ED has three patients waiting. Donna agrees to follow-up only if she can avoid returning to the same unsafe accommodation. The team asks you to make the final consultant decision.",
        question: "Discuss — list and debate how you would decide whether to discharge Donna and outline a comprehensive discharge management plan. You must name the tensions explicitly and take a defensible consultant position. (12 marks | 12 minutes)",
        commandWord: "debate",
        marks: 12,
        timeMinutes: 12,
        stemSignals: [
          "Three nights of crisis accommodation is not a safe discharge plan — it is the starting point for an escalation conversation, not a solution",
          "Bed pressure is the hidden zero-mark trap — accepting it as a clinical justification for discharge is the most common examiner-cited failure in this domain",
          "A defensible discharge requires the environment to be safer than continued admission — this is the standard against which every element of the plan must be tested",
        ],
        domains: [
          {
            name: "Award up to 12 marks from the following scorable points",
            marks: 12,
            keyPoints: [
              "There is tension between Donna's autonomy and the foreseeable risk of overdose, intoxication and family violence — a defensible position is that her wish to leave is clinically relevant and must be respected where possible, but discharge is only defensible if the risk formulation has genuinely changed and the discharge environment is safer than continued admission",
              "There is tension between least restrictive care and an unsafe discharge environment — discharge to three nights of crisis accommodation with an active family violence risk and untreated alcohol dependence is not least restrictive care; it is transfer of risk to an environment with fewer protections",
              "There is tension between bed pressure and the standard of care — the bed manager's pressure is a legitimate operational concern but cannot determine a clinical decision; the consultant's reasoning must be documented as independent of bed availability",
              "There is tension between social determinants and psychiatric risk — housing instability and family violence are not social issues outside the psychiatric risk formulation; they are active risk drivers that make discharge unsafe if unaddressed, and they must be named as clinical obstacles to discharge",
              "Assess current dynamic risk before the discharge decision — explain that current suicidal intent, alcohol craving, access to means, ongoing contact with the ex-partner, capacity for safety planning and willingness to use follow-up supports must all be assessed at the time of the meeting, not inferred from the admission presentation",
              "Discharge is not defensible unless specific risks can be mitigated — explain that alcohol relapse risk, family violence risk and housing instability are each independently unsafe without specific plans; three nights of accommodation without addressing the other two does not constitute a safe plan",
              "Develop a specific family violence safety plan — explain that a domestic violence specialist referral, safe contact arrangements, awareness of protection order options, emergency contacts and a specific plan for what Donna does if the ex-partner makes contact are required clinical components of any discharge plan",
              "Arrange specific AOD support — explain that relapse prevention planning, withdrawal monitoring in the community, motivational engagement, pharmacotherapy consideration and a community AOD appointment are required; alcohol dependence cannot be addressed by psychiatric follow-up alone",
              "Review and restart medication with a specific plan for adherence and monitoring — explain that sertraline should be restarted with a clear rationale, dispensing in limited quantities, specific advice about alcohol interactions, and a GP and pharmacy contact included in the discharge summary",
              "Implement means restriction — explain that access to overdose quantities of medication must be specifically restricted in the discharge environment; this includes other household medications in any shared accommodation",
              "Escalate housing beyond three nights before discharge — explain that three nights of crisis accommodation is a starting point for housing escalation, not a discharge plan; the social worker must be asked to escalate to longer-term options with a specific contingency for what happens on day four",
              "Arrange rapid community follow-up within 24–72 hours — explain that community mental health review within one to three days, a GP appointment, a direct phone check and written crisis contacts are the minimum follow-up requirements",
              "Communicate one team decision to Donna — explain that whatever is decided, the team must present it to Donna as a single agreed clinical position; if the nurse and social worker have not reached agreement, the consultant must resolve the disagreement before the meeting with Donna, not during it",
              "Document the reasoning independently of bed pressure — explain that the clinical record must show that the discharge decision was based on the risk formulation, and must specifically record that bed pressure was received and not accepted as a clinical justification",
            ],
          },
        ],
        zeroMarkTraps: [
          "Discharging because three nights of accommodation exists — accommodation for three nights does not constitute a safe discharge plan when alcohol relapse risk, family violence risk and medication non-adherence are unaddressed",
          "Allowing bed pressure to determine the clinical decision without naming and rejecting this explicitly in the documentation",
          "Failing to name family violence and housing as clinical risk drivers that must be addressed in the discharge plan rather than referred to other services",
        ],
        postExaminerNote: "Candidates who named the three-tension structure explicitly — autonomy versus safety, least restrictive care versus unsafe environment, bed pressure versus clinical standard — took a clear consultant position that discharge is only defensible when the environment is safer than admission, and produced a plan that addressed alcohol, family violence, housing, medication and follow-up as distinct components scored in the upper range. Candidates who discharged because accommodation existed for three nights, or who allowed bed pressure to determine the decision without naming this, did not achieve the standard.",
      },
    ],
  },
  {
    id: "meq_020",
    title: "Sara — Community Care, NGO Collateral and Inter-Agency Conflict",
    case: "Sara, 31, schizoaffective disorder, community team, NGO support",
    examSource: "Generated — Management / Disposition",
    topic: "Community management of a 31-year-old woman with schizoaffective disorder; tests assessment of clinical and functional needs at first community review, evaluation of ethically problematic NGO collateral, management of case manager and support worker disagreement, and post-overdose risk management and inter-agency conflict resolution at a stakeholder meeting",
    primaryDomain: "Management / Disposition",
    totalMarks: 32,
    totalTimeMinutes: 32,
    stems: [
      {
        stemNumber: "3.1",
        vignette: "Sara is a 31-year-old woman with schizoaffective disorder, trauma history, intermittent cannabis use and repeated admissions related to medication non-adherence, self-harm threats and interpersonal conflict. She was discharged from the acute inpatient unit one week ago to the community mental health team. This is your first review with Sara and her case manager. Sara says she has 'no one' and expects the community team to provide daily practical support, transport, help with Centrelink, cleaning, shopping, emotional support and crisis contact whenever she feels unsafe. She has unstable housing and says she will stop medication if she feels abandoned. The case manager says the team cannot provide the level of support Sara expects.",
        question: "Outline — list and justify how you would assess Sara's current clinical needs, functional needs and support-resource requirements at this first community review. A list without because-clauses specific to this case will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "outline_justify",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Validate need before setting limits — challenging Sara's support expectations before assessing their clinical basis will rupture the alliance at the first appointment",
          "Medication-abandonment link is a clinical risk signal — Sara's statement that she will stop medication if she feels abandoned is a formulation clue about the relapse mechanism, not a threat to be managed",
          "Unrealistic expectations need assessment before correction — they may reflect genuine isolation, trauma, personality vulnerability or unmet NDIS eligibility",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Assess current mental state — because recent discharge after schizoaffective relapse requires review of mood, psychotic symptoms, insight, engagement and any early signs of deterioration before clinical responsibility is formally accepted by the community team",
              "Assess self-harm and suicide risk — because Sara links medication cessation to feeling abandoned, and self-harm threats and interpersonal conflict have driven previous admissions; abandonment-sensitive suicidal thinking requires specific risk formulation at the first review",
              "Assess medication adherence and side effects — because repeated admissions are linked to non-adherence and the basis of her medication-abandonment statement must be clarified; side effects, insight and ambivalence are each different clinical problems requiring different responses",
              "Assess cannabis use — because intermittent cannabis use may worsen mood instability, psychosis, motivation and interpersonal conflict, and its current frequency and function must be established before the community plan is developed",
              "Assess trauma history and interpersonal patterns — because high support demands and abandonment sensitivity may reflect trauma responses, attachment disruption or personality vulnerability that require specific clinical formulation rather than limit-setting alone",
              "Assess housing stability — because unstable accommodation increases relapse risk, crisis presentations and inability to sustain a community care plan; housing is a clinical priority, not a social referral",
              "Assess activities of daily living and functional capacity — because Sara's list of expected support items identifies real functional gaps that require assessment before the team can identify appropriate external supports; dismissing them as excessive misses the formulation",
              "Assess informal supports and social network — because Sara's statement that she has 'no one' requires assessment of whether this reflects objective isolation, conflict with available supports or distorted perception; each has different management implications",
              "Clarify realistic team capacity and what community mental health can provide — because overpromising at the first review creates a larger rupture later; an honest and compassionate clarification of team scope at the outset prevents the abandonment experience Sara fears",
              "Identify appropriate external supports — because NGO psychosocial support, housing assistance, support coordination, AOD services, GP, pharmacy and peer programs may address the functional gaps that the community team cannot fill",
              "Develop a collaborative relapse and crisis plan — because Sara's link between medication cessation and feeling abandoned must be incorporated into a crisis plan that specifies what she will do, and who she will contact, before stopping medication",
              "Use recovery-oriented language and a capacity-building frame — because the support plan should explicitly aim to build Sara's independent function and connection, not create service dependency that replicates the risk it is meant to prevent",
            ],
          },
        ],
        zeroMarkTraps: [
          "Agreeing to daily team support without assessing whether it is clinically indicated or operationally possible — overpromising at the first review is the most common cause of the abandonment rupture Sara fears",
          "Dismissing Sara's support requests as dependency or manipulation before assessing their clinical basis",
          "Focusing only on medication adherence without assessing functional capacity, housing, trauma and the specific mechanism linking abandonment to relapse",
        ],
        postExaminerNote: "Candidates who validated Sara's need before clarifying capacity, who formulated the medication-abandonment link as a clinical relapse mechanism rather than a threat, and who named housing as a clinical priority rather than a social referral scored in the upper range. Candidates who moved immediately to limit-setting without assessment, or who focused only on medication, did not achieve the standard.",
      },
      {
        stemNumber: "3.2",
        vignette: "You arrange additional psychosocial support through a local NGO. Over the next month, the NGO support worker sends frequent emails to Sara's case manager. The emails describe Sara as 'manipulative,' 'attention-seeking' and 'not trying hard enough.' The support worker also reports private conversations with Sara about trauma and family conflict, but it is unclear whether Sara consented to this information being shared. The case manager begins relying on these emails to update Sara's risk plan. Sara tells you she feels judged by the support worker and worries the team now sees her as 'a difficult borderline patient.'",
        question: "Describe — list and explain the factors you would consider in evaluating whether the NGO collateral is clinically useful, ethically appropriate and in Sara's best interests. A list without explanation will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Manipulative and attention-seeking are not clinical descriptions — they are countertransference signals requiring formulation, not clinical risk data",
          "Consent for information sharing is a legal and ethical requirement, not a formality — sharing private trauma conversations without consent is a potential breach",
          "Risk plans built on pejorative collateral are clinically unsafe — they bias future risk assessments against Sara",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Verify whether Sara consented to information sharing with the community team — explain that sharing private trauma and family conflict conversations without Sara's agreement may constitute a breach of health privacy that is both ethically unacceptable and legally problematic regardless of the NGO's good intentions",
              "Assess whether the collateral is factual or judgemental — explain that terms such as manipulative, attention-seeking and not trying hard enough are not behaviour-based clinical descriptions; they are interpretive judgements that reflect the support worker's emotional response rather than observable clinical events, and they cannot be incorporated into a risk plan as factual data",
              "Assess clinical relevance to risk and care planning — explain that collateral is clinically useful when it informs specific safety decisions, functional assessment or care planning; collateral that primarily expresses worker frustration without behavioural specificity does not meet this standard",
              "Clarify the NGO worker's training and role — explain that psychosocial support workers may not be trained to formulate trauma or personality dynamics; their observations about behaviour are potentially useful but their interpretations of clinical meaning require clinical supervision before being used in risk plans",
              "Consider whether the emails reflect countertransference or worker burnout — explain that language implying moral failure in a patient with schizoaffective disorder and trauma history is a clinical signal about worker distress that requires supervision, not a signal about Sara's character",
              "Assess the clinical impact on Sara's care — explain that pejorative collateral incorporated into the risk plan has already influenced Sara's perception that the team sees her as a difficult borderline patient; this represents a concrete clinical harm that may worsen her engagement and increase the abandonment risk the plan was designed to prevent",
              "Discuss the concern with the case manager directly — explain that the case manager's reliance on these emails to update the risk plan without questioning their quality is a clinical error that must be addressed; the case manager requires guidance on evaluating collateral quality, not only on documentation practice",
              "Seek Sara's account and engage her concern — explain that her report of feeling judged by the support worker and worried the team now sees her negatively is clinically material information that must be directly addressed in the therapeutic relationship, not minimised",
              "Clarify the information-sharing agreement with the NGO — explain that a written agreement specifying what information is shared, how, with whom and under what consent or risk conditions must be established; currently the emails are operating outside any documented framework",
              "Escalate to the NGO supervisor if the language continues — explain that repeated stigmatising language from a support worker about a client with a trauma history and schizoaffective disorder requires supervisory intervention; the team's clinical responsibility for Sara's care includes ensuring the NGO works within an acceptable professional standard",
            ],
          },
        ],
        zeroMarkTraps: [
          "Accepting pejorative labels such as manipulative and attention-seeking as clinical descriptions without requiring behavioural specificity",
          "Ignoring the consent question and treating information sharing as implicit in the referral to the NGO",
          "Allowing the case manager to continue using these emails in the risk plan without addressing the quality and consent concerns",
        ],
        postExaminerNote: "Candidates who named the pejorative language as a countertransference signal rather than clinical data, who identified the consent question as a legal and ethical requirement, and who addressed the downstream clinical harm — Sara already believes the team sees her negatively — scored in the upper range. Candidates who accepted the collateral as useful background information or who treated the consent question as a formality did not achieve the standard.",
      },
      {
        stemNumber: "3.3",
        vignette: "Two months later, the case manager and NGO support worker have developed strongly different views. The case manager believes Sara needs firmer boundaries, reduced contact and clearer consequences for repeated crisis calls. The NGO support worker believes the mental health team is abandoning Sara and escalating her distress by being too rigid. Sara says she trusts the NGO worker more than the case manager. The case manager says the NGO worker is reinforcing dependency. The NGO worker says the case manager is 'punitive and traumatising.' Both have started sending increasingly defensive emails to each other, copying in managers.",
        question: "Discuss — list and debate the competing perspectives of the case manager and NGO support worker, and how you would work toward resolving the disagreement. You must name the tensions explicitly and take a defensible consultant position. (8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Both positions contain risk — over-involvement and under-involvement each cause harm in different ways; a defensible position requires holding both",
          "Pejorative language from professionals about each other mirrors the pejorative language about Sara — this is a parallel process requiring clinical naming",
          "The email escalation to managers is a governance signal — it means the disagreement has left the clinical space and requires consultant-level containment",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "There is tension between the case manager's risk containment position and the NGO worker's relational engagement position — a defensible consultant position is that both positions contain valid clinical information and both carry risk; the case manager may be correctly identifying unsustainable dependency while the NGO worker may be correctly identifying abandonment-driven escalation",
              "There is tension between recovery-oriented care and clinical risk governance — the NGO's relational model may protect engagement but may underestimate clinical risk and medication relapse; the team's risk model may protect safety but may replicate the abandonment experience that drives Sara's crisis cycle",
              "There is tension between professional role boundaries and therapeutic effectiveness — the NGO worker's closer relational contact may be clinically useful but is operating without adequate supervision or boundary clarity; the case manager's boundary position may be clinically appropriate but is being implemented without a shared formulation",
              "Acknowledge both professionals' valid concerns before addressing the disagreement — explain that treating this as a performance dispute rather than a clinical disagreement will entrench the positions; acknowledging the valid clinical information each holds is the precondition for productive resolution",
              "Bring both parties back to Sara's formulation and specific observable events — explain that abstract positions about boundaries versus abandonment must be replaced by a shared review of actual clinical events: crisis call frequency, medication adherence, self-harm incidents, housing stability and engagement patterns",
              "Name the parallel process — explain that the pejorative language professionals are now using about each other mirrors the pejorative language that was previously used about Sara; this is a clinical phenomenon reflecting the emotional intensity of the case and requires naming in supervision",
              "Contain the email escalation — explain that defensive emails copied to managers are no longer clinical communications; they are a governance crisis that must be stopped by the consultant immediately and replaced with a structured clinical meeting",
              "Clarify clinical governance responsibility — explain that the community mental health team holds clinical risk governance for Sara; the NGO provides psychosocial support within a clinical framework determined by the team, not alongside it without coordination",
              "Agree specific, observable role boundaries for each professional — explain that both the case manager and the NGO worker must have written role descriptions specifying what contact, at what frequency, under what conditions, and what the escalation pathway is when either is concerned about safety",
              "Arrange separate reflective supervision for both professionals — explain that each is experiencing significant emotional strain that is influencing their clinical judgement; supervision is a clinical requirement, not optional",
            ],
          },
        ],
        zeroMarkTraps: [
          "Taking the case manager's side or the NGO worker's side — both positions contain valid clinical information and both carry risk",
          "Naming the conflict as a personality clash rather than identifying it as a parallel process requiring clinical formulation",
          "Accepting the email exchange to managers as an appropriate escalation rather than identifying it as a breakdown requiring immediate containment",
        ],
        postExaminerNote: "Candidates who held both clinical positions simultaneously without taking sides, who named the parallel process explicitly, and who identified the email escalation as a governance signal requiring clinical containment scored in the upper range. Candidates who endorsed one professional's position, or who treated the disagreement as a communication problem rather than a clinical and governance problem, did not achieve the standard.",
      },
      {
        stemNumber: "3.4",
        vignette: "The evening before a planned stakeholder meeting, Sara presents to ED after an impulsive overdose following an argument with the NGO support worker about boundaries. She is medically cleared overnight and returns to the community team the next morning. At the stakeholder meeting, Sara says she felt 'passed around and judged' and does not know who is actually responsible for helping her. The NGO team leader says their worker is distressed and the NGO may withdraw support because the mental health team has left them carrying unmanageable risk. The case manager says the NGO has blurred boundaries and contributed to the crisis. The housing worker says Sara may lose her temporary accommodation if there is no clear support plan. The GP is concerned about medication adherence and physical-health monitoring.",
        question: "Discuss — list and debate how you would manage Sara's immediate risk, disposition and support plan while addressing the conflict between the community mental health team and NGO. You must name the tensions explicitly and take a defensible consultant position. (8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "The overdose is both a clinical event and a shared-care governance signal — both must be named and responded to simultaneously",
          "NGO withdrawal would increase risk, not reduce it — the response to the NGO's threat must protect Sara's safety while addressing the legitimate boundary concern",
          "Sara does not know who is responsible for her care — this is the root clinical problem that the stakeholder meeting must resolve",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "There is tension between Sara's acute overdose risk and the team's inter-agency conflict — a defensible consultant position is that immediate safety is the first obligation and cannot be deferred while the inter-agency dispute is resolved; the clinical response and the governance response must run in parallel",
              "There is tension between the NGO's threatened withdrawal and Sara's continuity of care — abrupt withdrawal of NGO support after an overdose would increase the abandonment risk that is already central to Sara's relapse mechanism; the response to the NGO's threat must acknowledge the boundary concern while preventing care fragmentation",
              "There is tension between more support intensity and the risk of reinforcing dependency — structured support after an overdose is clinically indicated, but support that has no defined role boundaries or review criteria will replicate the conditions that produced the crisis",
              "Reassess Sara's immediate overdose risk and current mental state — explain that the post-overdose psychiatric assessment, including intent, regret, ongoing suicidal ideation, psychotic symptoms, medication status and access to means, must be conducted and documented before any disposition or meeting agenda is addressed",
              "Decide disposition based on the risk assessment — explain that if imminent risk remains high after the overdose, ED return or short admission may be required; if risk is containable, intensive community follow-up with named clinical responsibility is the least restrictive option",
              "Establish named clinical responsibility clearly in the meeting — explain that Sara's statement that she does not know who is responsible for helping her is the central clinical failure this meeting must resolve; the community mental health team holds clinical risk governance and this must be stated explicitly at the outset",
              "Prevent housing loss as an urgent clinical priority — explain that eviction during an acute post-overdose period would constitute a foreseeable and preventable escalation of risk; the housing worker must be engaged on an urgent basis before the meeting concludes",
              "Address the NGO's withdrawal threat by clarifying role and responsibilities, not by conceding the boundary dispute — explain that the NGO worker's distress is understandable and requires supervisory support, but abrupt withdrawal of a consumer's only psychosocial support after an overdose is clinically indefensible; a structured NGO role with explicit boundaries is the solution, not withdrawal",
              "Create a short-term crisis and medication safety plan with named responsibilities — explain that the plan must specify who provides what support, at what frequency, how after-hours crises are managed, and what triggers a step-up to clinical review; verbal agreements without documentation will not survive the next pressure point",
              "Use the overdose as a shared-care governance signal — explain that the incident report from the overdose should be used to convene a formal review of the shared-care arrangement between the community team and the NGO, including consent, information sharing, boundary clarity and escalation protocols",
              "Revise documentation standards and information-sharing agreements — explain that the absence of clear written agreements about what is shared, by whom and under what conditions is a systemic gap that contributed to this crisis and must be corrected as a formal output of the meeting",
            ],
          },
        ],
        zeroMarkTraps: [
          "Beginning with the governance and inter-agency conflict before completing Sara's post-overdose risk assessment and establishing named clinical responsibility",
          "Accepting the NGO's withdrawal threat as a clinical plan — abrupt removal of psychosocial support after an overdose increases risk and is clinically indefensible",
          "Conducting the stakeholder meeting as an unstructured blame session without a clinical agenda, named clinical responsibility, and specific written outputs",
        ],
        postExaminerNote: "Candidates who assessed Sara's post-overdose risk before addressing the inter-agency conflict, who named the community team as holding clinical risk governance at the outset of the meeting, and who produced specific written outputs including named responsibility, crisis plan, housing escalation and NGO role clarification scored in the upper range. Candidates who allowed the meeting to become an inter-agency blame session, or who accepted NGO withdrawal as a solution, did not achieve the standard.",
      },
    ],
  },
  {
    id: "meq_021",
    title: "Mia — Peer Worker Boundaries, Recovery-Oriented Care and Safety",
    case: "Mia, 19, community youth mental health, peer support worker, self-harm",
    examSource: "Generated — Communication / Collaboration",
    topic: "Community youth mental health management of a 19-year-old with emotional dysregulation, self-harm and trauma; tests peer support role assessment, boundary and safety management while preserving engagement, nurse-peer worker conflict management, and consultant response after overdose when peer worker was told not to respond to after-hours contact",
    primaryDomain: "Communication / Collaboration",
    totalMarks: 32,
    totalTimeMinutes: 32,
    stems: [
      {
        stemNumber: "4.1",
        vignette: "Mia is a 19-year-old woman referred after repeated ED presentations with self-harm, panic attacks, trauma symptoms and emotional dysregulation. She has no current psychosis or mania. She describes chronic emptiness, intense fear of abandonment and difficulty trusting clinicians. She lives with her older sister after leaving an unstable family home. Mia has recently started seeing Jordan, a peer support worker with lived experience of self-harm recovery. Mia tells her care coordinator nurse that Jordan 'actually understands me' and that she does not want to see 'clinical people who just write risk plans.' The nurse is concerned that Jordan has shared too much personal information and that Mia is becoming dependent on him.",
        question: "Outline — list and justify your immediate clinical and team priorities in reviewing Mia's care and the emerging concern about the peer support role. A list without because-clauses specific to this case will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "outline_justify",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Removing Jordan without assessment is the zero-mark response — Mia's engagement with him may be the only current therapeutic bridge",
          "The nurse's concern about personal disclosure is a clinical question requiring investigation, not a reason for immediate action",
          "Mia's statement that clinicians only write risk plans is feedback about the clinical relationship, not a boundary violation",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Assess Mia's current risk — because repeated self-harm and ED presentations in the context of abandonment fear, emotional dysregulation and trauma require a current risk formulation before any team or role changes are made",
              "Clarify the clinical formulation — because emotional dysregulation, trauma symptoms, abandonment sensitivity and difficulty trusting clinicians may reflect borderline personality features, complex PTSD, or both, and the formulation determines the appropriate therapeutic approach",
              "Assess the protective role of the peer support relationship — because Mia's engagement with Jordan may be the most significant therapeutic bridge currently available; removing it without assessment could directly increase her risk",
              "Assess the possible boundary and dependency risks of the relationship — because intense attachment to a peer worker in the context of abandonment sensitivity may create vulnerability to rupture; this requires assessment, not assumption",
              "Explore Mia's view of the relationship and of the clinical team — because her statement that clinicians only write risk plans is feedback about the therapeutic relationship that must be engaged directly, not dismissed as resistance",
              "Speak separately with the nurse and with Jordan — because both may have valid and different information; a shared meeting before individual accounts are heard risks foreclosing important clinical information",
              "Clarify Jordan's role description and the extent of personal self-disclosure — because peer work involves purposeful, bounded self-disclosure; the clinical question is whether Jordan's disclosure was purposeful and supervised or boundaryless and personal",
              "Review and revise the current safety plan — because Mia's statement that clinicians only write risk plans suggests the existing plan is not experienced as collaborative or useful, which is itself a safety risk",
              "Arrange supervision for Jordan — because peer workers working with self-harm themes require reflective support and clinical consultation; the nurse's concern, if valid, may reflect absence of supervision rather than Jordan's unsuitability",
              "Maintain a recovery-oriented stance — because high risk and repeated self-harm do not automatically exclude peer support; excluding lived-experience workers from high-risk care would contradict recovery-oriented practice and undermine Mia's trust in the service",
              "Document concerns neutrally — because early framing of the peer worker as a boundary-crossing problem before the assessment is complete may bias the clinical record against a potentially therapeutic relationship",
            ],
          },
        ],
        zeroMarkTraps: [
          "Removing Jordan from Mia's care immediately because the nurse has expressed a concern — this removes the only current therapeutic engagement without clinical assessment",
          "Accepting the nurse's concern as clinical evidence without investigating whether the boundary concerns are factual or reflect nurse-peer worker role confusion",
          "Treating Mia's preference for Jordan over the clinical team as a clinical problem rather than as feedback about the quality of the clinical relationship",
        ],
        postExaminerNote: "Candidates who named Jordan's relationship as a potentially protective clinical bridge requiring assessment before any change, who identified the absence of supervision as a more likely explanation for boundary concerns than Jordan's unsuitability, and who engaged Mia's feedback about risk plans as clinically material scored in the upper range. Candidates who immediately moved to remove Jordan or who treated the nurse's concern as a factual finding without investigation did not achieve the standard.",
      },
      {
        stemNumber: "4.2",
        vignette: "Over the next fortnight, Mia begins contacting Jordan by social media outside work hours. Jordan responds several times because he worries Mia might self-harm if ignored. The nurse says this is unsafe boundary crossing and asks that Jordan be removed from Mia's care. Jordan says peer work requires flexibility, relational trust and non-clinical language. Mia says she will disengage from the whole service if Jordan is removed. The team has no clear policy on after-hours contact between peer workers and consumers.",
        question: "Describe — list and explain how you would manage boundaries, safety planning, confidentiality, supervision and role clarity while preserving Mia's engagement. A list without explanation will not be awarded any marks. (8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Do not make Jordan the after-hours crisis plan — his personal availability cannot substitute for a clinical crisis pathway",
          "The disengagement threat is a clinical phenomenon requiring engagement, not a veto over necessary action",
          "The absence of a policy is a systems problem, not a reason to continue the current arrangement",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Acknowledge Mia's attachment to Jordan as a clinical variable — explain that her engagement with Jordan is currently the most active therapeutic relationship she has; any changes must be made in a way that does not replicate the abandonment experience that drives her self-harm",
              "Shift all contact to approved service channels — explain that social media contact creates an undocumented, unmonitored and unsupervised communication channel that removes Jordan's clinical protection, creates privacy risk, and makes crisis documentation impossible; this must be changed regardless of Mia's preference",
              "Update Mia's crisis plan collaboratively to include after-hours pathways — explain that Mia needs to have a crisis plan that she has co-created and that specifies who to contact and how in each risk scenario; Jordan cannot be the after-hours crisis responder and she must know who is available instead",
              "Clarify Jordan's clinical role explicitly — explain that Jordan's role is peer support, recovery modelling, connection and hope; it is not crisis response, clinical risk assessment or sole therapeutic contact; this must be written into his role description and shared with Mia",
              "Clarify the nurse's clinical role — explain that the nurse holds clinical risk monitoring, care coordination, medication and therapy coordination and safety planning; these are not Jordan's functions and the boundary between roles must be explicit to both Mia and the team",
              "Discuss confidentiality with Mia — explain that she needs to understand what Jordan will share with the clinical team, what remains within the peer support relationship, and what would require clinical escalation regardless of her wishes",
              "Provide Jordan with formal clinical supervision — explain that peer work involving self-harm themes and intense consumer attachment requires regular reflective support and clinical consultation; the current arrangement of responding to after-hours messages without supervision places Jordan at significant professional and personal risk",
              "Hold a nurse-peer joint discussion to establish shared expectations — explain that the nurse and Jordan need to agree on Mia's management plan, communication channels, escalation thresholds and documentation requirements; competing models operating simultaneously without agreement are clinically dangerous",
              "Avoid sudden removal of Jordan from Mia's care — explain that abrupt removal in the context of abandonment fear and active self-harm risk may directly precipitate a crisis; any role changes must be introduced gradually with Mia's involvement",
              "Create a stepped response plan — explain that routine peer support contact at agreed frequency, increased clinical contact when risk rises, and ED or crisis team for imminent danger creates a clinical structure that does not rely on Jordan's personal availability",
              "Develop or update team policy on peer worker after-hours contact — explain that the current absence of a policy is a systems problem that has created the conditions for this boundary confusion; a clear policy must be developed and applied consistently across all peer worker relationships in the service",
            ],
          },
        ],
        zeroMarkTraps: [
          "Allowing Jordan to continue after-hours social media contact because Mia has threatened to disengage — the disengagement threat is a clinical phenomenon requiring engagement, not a clinical justification for continuing an unsafe arrangement",
          "Removing Jordan immediately because social media contact has occurred — abrupt removal in the context of abandonment fear is clinically dangerous",
          "Accepting the absence of a policy as a reason to defer action rather than as a systems gap requiring immediate response",
        ],
        postExaminerNote: "Candidates who distinguished Jordan as a therapeutic resource from Jordan as an after-hours crisis responder, who developed a collaborative crisis plan that did not rely on Jordan's personal availability, and who named the policy absence as a systems problem requiring immediate correction scored in the upper range. Candidates who allowed the current arrangement to continue or who removed Jordan immediately without a transition plan did not achieve the standard.",
      },
      {
        stemNumber: "4.3",
        vignette: "The conflict escalates. The nurse says Jordan is 'over-identifying' with Mia and undermining clinical care. Jordan says the nurse is 'punitive' and uses risk language to control Mia rather than support recovery. Other team members take sides. Mia tells the psychologist that the team disagreement makes her feel like 'a problem everyone is fighting over.' The service manager asks you to review whether peer workers should continue to work with high-risk consumers.",
        question: "Discuss — list and debate the competing perspectives of the nurse and peer support worker, and how you would address the team conflict. You must name the tensions explicitly and take a defensible consultant position. (8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "The task is not nurse versus peer worker — it is safe integration of two legitimate professional roles",
          "Mia's statement that she is a problem everyone is fighting over is a risk signal, not a process observation",
          "Excluding peer workers from high-risk care would contradict recovery-oriented practice — the service manager's question requires a defensible clinical answer",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "There is tension between clinical risk governance and recovery-oriented care — a defensible position is that risk governance cannot be abandoned in the name of recovery, and recovery cannot be reduced to risk management; both are required and both must inform the care plan",
              "There is tension between relational flexibility and boundary safety — Jordan's relational model may genuinely engage Mia where the clinical team has not, but unbounded personal availability creates professional harm for Jordan and clinical risk for Mia",
              "There is tension between lived-experience expertise and clinical expertise — both are valid, different and necessary forms of professional knowledge; treating one as subordinate to the other produces the conflict that is currently occurring",
              "There is tension between connection and dependency — Mia's reliance on Jordan may be a clinical bridge to care or a vulnerability to harm if the relationship ruptures; holding both possibilities simultaneously is the clinical standard",
              "Acknowledge the nurse's concerns as clinically valid — explain that boundary crossing, dependency risk, documentation failures and clinical risk escalation are legitimate professional concerns that require response; dismissing them as anti-peer-worker bias misses the clinical content",
              "Acknowledge Jordan's concerns as clinically valid — explain that medicalising normal distress, using risk language as control rather than support, and the importance of non-clinical relational connection are legitimate recovery-oriented concerns that require response",
              "Bring the dispute back to Mia's formulation and specific observable events — explain that the conflict must be grounded in actual clinical events rather than abstract positions; what has happened, what has helped, what has escalated, and what each professional's role contribution has been",
              "Set team behavioural expectations — explain that no professional should undermine another in front of Mia, use pejorative language about colleagues, or allow team-side-taking to enter the therapeutic relationship; these are consultant-level expectations that require explicit statement",
              "Clarify decision-making authority — explain that the consultant and clinical team retain clinical risk governance; the peer worker contributes a recovery perspective that must be heard and incorporated but does not override clinical risk decisions",
              "Provide reflective supervision to both the nurse and Jordan — explain that the nurse may need support around risk anxiety and the peer worker may need support around over-identification; both are understandable responses to working with Mia that require supervisory acknowledgement rather than blame",
              "Answer the service manager's question with a defensible clinical position — explain that peer workers should not be categorically excluded from high-risk consumers; the evidence for peer support in complex presentations supports their inclusion when roles, supervision and boundaries are clear; the current problem is unsupported and unclearly bounded peer support, not peer support itself",
            ],
          },
        ],
        zeroMarkTraps: [
          "Taking the nurse's side and endorsing Jordan's removal or taking Jordan's side and endorsing the nurse's approach — both positions contain valid clinical information",
          "Accepting the service manager's question as implying that peer workers should not work with high-risk consumers — this is a clinical position requiring evidence-based refutation",
          "Failing to engage Mia's statement that she is a problem everyone is fighting over as a clinical risk signal",
        ],
        postExaminerNote: "Candidates who named all four tensions explicitly, held both professional positions simultaneously without taking sides, answered the service manager's question with a defensible clinical position supporting peer work with appropriate boundaries, and engaged Mia's experience of being fought over as a risk signal scored in the upper range. Candidates who endorsed either the nurse's or Jordan's position, or who concluded that peer workers should not work with high-risk consumers, did not achieve the standard.",
      },
      {
        stemNumber: "4.4",
        vignette: "A week later, Mia presents to ED after an overdose. She says she messaged Jordan beforehand but he did not reply because he had been told not to respond after hours. Jordan feels guilty and distressed. The nurse says this proves peer workers should not work with consumers who self-harm. Mia says she felt abandoned and no longer trusts the service. The service director asks you to recommend immediate and longer-term actions.",
        question: "Discuss — list and debate how you would respond as consultant psychiatrist, balancing Mia's safety, recovery-oriented care, peer worker role integrity, staff support, clinical governance and service improvement. You must name the tensions explicitly and take a defensible consultant position. (8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "The risk was not peer support itself — it was unsupported, unclearly bounded peer support without an adequate clinical crisis pathway",
          "Jordan's guilt is a moral injury signal requiring support, not a finding of clinical culpability",
          "The nurse's conclusion that peer workers should not work with self-harm is a clinical position requiring a defensible rebuttal",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "There is tension between Mia feeling abandoned by Jordan's non-response and the clinical necessity of the boundary — a defensible position is that Jordan correctly followed the instruction not to respond after hours, but the clinical system failed by not providing Mia with an adequate alternative crisis pathway before that boundary was implemented",
              "There is tension between protecting peer workers from unsafe independent practice and preserving the value of peer support in high-risk care — the overdose does not prove that peer workers should not work with self-harm; it proves that peer support without adequate boundaries, supervision and crisis pathway integration creates harm",
              "There is tension between Jordan's personal guilt and the actual attribution of clinical responsibility — Jordan followed a clinical instruction; the system failure was the instruction being implemented without ensuring Mia had a functional crisis plan first",
              "Reassess Mia's current overdose risk, intent, and safe disposition — explain that the post-overdose psychiatric assessment must occur before any governance or team actions are addressed; clinical safety is the first obligation",
              "Communicate with Mia about the crisis plan failure — explain that her experience of abandonment is real and must be validated; she must also understand that the boundary Jordan observed was clinical, not personal, and that the failure was the system not giving her an adequate alternative",
              "Support Jordan with clinical supervision and occupational debriefing — explain that Jordan followed a clinical instruction and his patient was subsequently harmed; this constitutes a foreseeable moral injury that requires structured supervisory acknowledgement, psychological support and a clear explanation that the system failure is not his personal culpability",
              "Provide support and debriefing to the nurse — explain that the nurse also requires acknowledgement and honest clinical discussion; their concern about peer worker boundaries may have contributed to an instruction that was implemented without adequate compensatory safety planning",
              "Decline to endorse the nurse's conclusion that peer workers should not work with self-harm — explain that this conclusion is not supported by the evidence and would remove a potentially protective element from the care of some of the most vulnerable consumers; the clinical response is to clarify role boundaries, improve supervision and ensure crisis pathway integration",
              "Review and correct the crisis plan failure — explain that the overdose reveals that Mia did not have an adequate after-hours crisis pathway that she was willing to use; the clinical review must identify why the revised plan was not functional and produce a co-created plan that she will use",
              "Conduct a systems review examining the policy implementation process — explain that a boundary instruction was given to Jordan without ensuring that Mia had a compensatory crisis pathway; the review must examine how this gap occurred and produce a protocol requiring crisis pathway verification before any boundary change is implemented",
              "Report as a clinical governance incident — explain that an overdose following implementation of a clinical boundary instruction without adequate crisis pathway compensation is a reportable patient safety event requiring formal governance review",
              "Involve peer-work leadership and consumer perspective in the service improvement response — explain that changes to peer worker boundaries and high-risk consumer involvement policies must be co-designed with people with lived experience and peer workforce leadership, not determined solely by clinicians following an adverse event",
            ],
          },
        ],
        zeroMarkTraps: [
          "Endorsing the nurse's conclusion that peer workers should not work with self-harm — this is not supported by evidence and would remove a potentially protective intervention",
          "Attributing the overdose to Jordan's behaviour — he followed a clinical instruction; the system failure was implementing the boundary without ensuring an adequate crisis pathway",
          "Beginning with the governance review before completing Mia's post-overdose risk assessment and safety plan",
        ],
        postExaminerNote: "Candidates who identified the system failure as implementing a boundary instruction without a compensatory crisis pathway, who supported Jordan without attributing personal culpability, who declined the nurse's conclusion with a defensible evidence-based rebuttal, and who named co-design with lived experience as a required component of the service improvement response scored in the upper range. Candidates who endorsed the nurse's position or who attributed primary responsibility to Jordan did not achieve the standard.",
      },
    ],
  },
  {
    id: "meq_022",
    title: "Leo — Early Childhood Crisis & Inter-Agency Governance",
    case: "Leo, 4 years old",
    examSource: "Generated — Governance / Systems / Leadership",
    topic: "Preschool behavioural crisis, family violence and early-childhood inter-agency pathway",
    primaryDomain: "Governance / Systems / Leadership",
    totalMarks: 32,
    totalTimeMinutes: 32,
    stems: [
      {
        stemNumber: "1.1",
        vignette: "Leo is a 4-year-old boy brought to ED by police and ambulance after a childcare centre called emergency services. Staff report that Leo threw chairs, bit another child, and screamed for 45 minutes after being told his mother was late. His mother, Talia, is a 27-year-old single parent who says Leo has 'always been intense' since his father left. Leo has delayed speech, avoids eye contact with unfamiliar adults, becomes distressed with noise, and has recently been excluded from two childcare centres. Talia says she cannot keep leaving work and asks for 'medication to calm him down.' The ED registrar asks whether Leo should be sedated and discharged.",
        question: "Outline — list and justify your immediate assessment and management priorities in ED.\\nA list without case-specific justification will not be awarded marks.\\n(8 marks | 8 minutes)",
        commandWord: "outline_justify",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "The ED registrar's suggestion to sedate and discharge is the examiner trap — candidates who endorse this score zero; the correct response is a developmental and trauma formulation before any intervention decision",
          "Leo's profile (delayed speech, poor eye contact, sensory distress, two childcare exclusions) is a neurodevelopmental red flag that must be named explicitly, not assumed",
          "Talia's request for medication signals her distress and limited support — the assessment must address parent capacity and family stressors, not only Leo's behaviour",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Reduce stimulation and use a child-friendly ED space — because Leo is 4 years old, distressed by noise and crowds, and standard ED crowding or security proximity will escalate rather than contain his dysregulation",
              "Decline reflexive sedation as first-line management — because this presentation is consistent with developmental vulnerability and trauma-related hyperarousal, not acute psychosis or intoxication requiring chemical restraint",
              "Assess immediate safety risk to Leo, Talia and others — because chair-throwing, biting and 45-minute sustained dysregulation create genuine injury risk and require proportionate environmental management",
              "Use Talia as co-regulator and keep her with Leo — because she is his primary attachment figure and parent-mediated calming is safer and more effective than separation or restraint in a preschool child",
              "Screen for neurodevelopmental disorder — because delayed speech, poor eye contact, sensory distress and exclusion from two childcare centres meet the threshold for autism spectrum disorder or developmental language disorder assessment",
              "Assess trauma and attachment triggers — because the crisis was precipitated by Talia being late, indicating separation anxiety and attachment-dependent regulation in a child exposed to paternal departure and family instability",
              "Assess physical contributors to dysregulation — because pain, sleep deprivation, hunger, infection or sensory overload in a 4-year-old may present clinically as aggression and must be excluded before behavioural or psychiatric formulation",
              "Obtain collateral from childcare staff and Talia about cross-setting pattern — because triggers, duration, recovery and frequency across settings are essential to distinguish developmental dysregulation from episodic aggression or acute psychiatric disorder",
              "Assess Talia's capacity and support needs for tonight — because her request for medication, missed work absences and apparent overwhelm raise questions about her coping threshold and safety if discharged without support",
              "Screen for family violence and child protection concerns — because the father's departure, single-parent stress, recurrent childcare exclusion and housing instability represent cumulative developmental risk requiring structured assessment",
              "Arrange follow-up with early childhood intervention, developmental paediatrics and CYMHS — because ED discharge without a care pathway for this profile will produce repeat crisis presentations without addressing the underlying need",
            ],
          },
        ],
        zeroMarkTraps: [
          "Endorsing sedation and discharge without developmental or safety formulation",
          "Performing a generic adult mental state examination on a 4-year-old",
          "Focusing only on risk to other children while ignoring Leo's developmental needs and family safety",
        ],
        postExaminerNote: "Candidates who sedate and discharge score zero. The examiner is assessing whether candidates can distinguish a developmental and trauma presentation from an acute psychiatric emergency, and whether they recognise family safety as part of the immediate plan.",
      },
      {
        stemNumber: "1.2",
        vignette: "During assessment, Talia becomes tearful and says she has been sleeping in her car with Leo for three nights after leaving her partner because he 'shouts and punches walls.' Leo clings to her and becomes more distressed when male security staff stand near the cubicle. The paediatric registrar says the ED is overcrowded and asks you to 'clear the behaviour problem' so the family can be discharged.",
        question: "Describe — list and explain the person, illness and system factors contributing to Leo's presentation and how these change your immediate plan.\\nA list without explanation will not be awarded marks.\\n(8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "The homelessness and family violence disclosure is new critical information — candidates who do not explicitly reframe the plan in response to it will lose marks",
          "The paediatric registrar's pressure to discharge is an ethical trap — candidates must resist flow-driven discharge into an unsafe situation",
          "Male security staff proximity as a trauma trigger must be identified and acted on — this is a specific, actionable clinical detail the examiner expects candidates to name and address",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Leo's age and developmental stage limit his capacity for verbal distress regulation — explain that a 4-year-old cannot name fear or use adult coping strategies; the plan must rely on environmental modification and adult co-regulation rather than expecting Leo to self-manage",
              "Possible neurodevelopmental disorder is central to the formulation — explain that delayed speech, sensory sensitivity and communication difficulties make ED transitions inherently more distressing for Leo, and any environment with noise and change will exceed his regulatory threshold",
              "Attachment insecurity and separation anxiety are likely maintaining factors — explain that Leo's dysregulation was precipitated by Talia's lateness and he clings to her in ED; interventions that separate them will worsen rather than resolve the crisis",
              "Male security proximity is a probable trauma trigger — explain that children exposed to domestic violence by male figures develop hyperarousal responses to unfamiliar men; removing or repositioning male security reduces Leo's physiological arousal without compromising safety",
              "Three nights sleeping in the car have compounded Leo's regulatory threshold — explain that sleep deprivation, disruption of routine and environmental instability lower a preschool child's tolerance for frustration and novel settings, making this ED presentation more severe than it would otherwise be",
              "Family violence exposure may be presenting as hyperarousal and survival response — explain that screaming, biting and prolonged dysregulation in preschool children can represent fear-based responses and learned vigilance rather than conduct disorder or primary psychiatric illness",
              "A premature psychiatric diagnosis should not be assigned in this context — explain that assigning a behavioural diagnosis to a child in acute trauma and homelessness without multi-setting assessment is clinically inaccurate and risks stigma and loss of developmental supports",
              "The immediate plan shifts from behaviour management to family safety — explain that the clinical priority is now securing safe overnight accommodation for Talia and Leo, not achieving behavioural compliance for discharge",
              "Urgent social work and family violence service activation is required — explain that the absence of safe shelter tonight constitutes an immediate welfare risk that social work and family violence services must address before discharge is considered",
              "Child protection consultation may be required — explain that Leo is exposed to domestic violence and homelessness; a safety-framed referral ensures his welfare is formally assessed and does not constitute blame toward Talia",
              "Paediatric short-stay or admission may be the safest immediate option — explain that it provides a contained, safe environment while crisis accommodation, family violence response and safety planning are arranged, preventing discharge into foreseeable harm",
            ],
          },
        ],
        zeroMarkTraps: [
          "Framing the presentation as bad parenting without addressing developmental or trauma contributors",
          "Ignoring Talia's safety and focusing only on Leo's behaviour",
          "Discharging because there is no psychiatric disorder, without addressing homelessness and family violence",
        ],
        postExaminerNote: "Candidates who do not reframe the plan in response to the homelessness and family violence disclosure will lose significant marks. The examiner expects explicit identification of how each new piece of information changes the management, not a generic list of factors.",
      },
      {
        stemNumber: "1.3",
        vignette: "The childcare director phones ED and says Leo cannot return unless you provide a written statement that he is 'safe around other children.' Talia begs you to write it because she will lose her job without childcare. The hospital social worker says crisis accommodation may not be available tonight. The paediatric team says Leo does not need medical admission.",
        question: "Discuss — list and debate the competing duties to Leo, Talia, the childcare centre, and the hospital. You must name the tensions explicitly and take a defensible consultant position.\\n(8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Writing the safety letter is the examiner trap — doing so scores zero because it provides a guarantee that cannot be supported by an ED crisis assessment alone",
          "The examiner wants explicit naming of each tension, not a generic ethics discussion — 'there is tension between X and Y' must appear in the answer",
          "A defensible consultant position must be stated and justified — candidates who list tensions without taking a position will lose marks on this stem",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "There is tension between Talia's employment need and Leo's safety — a defensible position is to support childcare access through a functional risk plan rather than providing a false safety guarantee that cannot be backed by an ED assessment",
              "There is tension between confidentiality and information-sharing with childcare — only relevant, consented and clinically necessary information should be shared with the childcare centre, not private family or psychiatric details",
              "There is tension between Leo's right to inclusion and the childcare centre's duty to other children — the consultant should recommend a risk-support and supervision plan rather than exclusion or blanket reassurance",
              "There is tension between hospital flow pressure and foreseeable harm if the family is discharged into homelessness and unresolved family violence — ED overcrowding does not justify discharge that creates predictable harm to a child",
              "There is tension between supporting Talia as a survivor of family violence and scrutinising her parenting — any child protection or welfare referral must be framed as safety support, not as blame for her circumstances",
              "The consultant must not write a statement certifying Leo as 'safe around other children' — because ED crisis assessment cannot predict contextual risk in childcare without a full developmental assessment and an implemented support plan",
              "The consultant can provide a functional ED summary — including documented triggers, recommended calming strategies, transition supports, sensory considerations and urgency of developmental assessment, without making a contextual safety guarantee",
              "The childcare centre may need inclusion support — because repeated exclusion worsens family instability, may breach equitable access principles and is not a sustainable response to developmental need",
              "The immediate defensible position prioritises Leo's safety, Talia's safety and honest communication — because these are more defensible than providing a misleading clearance letter to preserve employment or manage flow",
              "Recommending a multi-agency meeting with childcare, family violence services and early childhood intervention is the constructive consultant action — because collaborative safety planning is more sustainable than a certificate and addresses the underlying system gap",
            ],
          },
        ],
        zeroMarkTraps: [
          "Writing the requested safety letter without qualification",
          "Refusing all communication with childcare when collaborative safety planning is both appropriate and needed",
          "Prioritising bed pressure over child safety",
        ],
        postExaminerNote: "The examiner is testing whether candidates can hold an ethical position under pressure from multiple stakeholders. Candidates who write the letter, defer to Talia's request, or list tensions without a position will not demonstrate consultant-level reasoning.",
      },
      {
        stemNumber: "1.4",
        vignette: "Two weeks later, the clinical director asks you to review why three preschool children with developmental delay, family violence exposure and childcare exclusion have presented repeatedly to ED in the last month. The local early childhood service has a six-month waitlist. There is no agreed pathway between ED, paediatrics, child protection, early childhood intervention, family violence services and CYMHS.",
        question: "Describe — list and explain the governance and workforce actions you would recommend to build a safer early-childhood crisis pathway.\\nA list without explanation will not be awarded marks.\\n(8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Three similar presentations in one month is a system signal, not individual clinical failure — the examiner expects system-level analysis, not case-by-case clinical advice",
          "The six-month waitlist must be named as a governance failure and escalated — candidates who only recommend clinical actions without addressing service capacity will miss key marks",
          "The absence of an agreed pathway between six agencies is the root cause — the answer must address coordination, not just training",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Create a shared early-childhood crisis pathway with agreed roles across ED, paediatrics, CYMHS, early childhood intervention, child protection and family violence services — explain that repeated presentations show there is no agreed route for children with this profile and that unclear role ownership causes delayed discharge and repeat crises",
              "Define criteria for paediatric admission, short-stay and community diversion for preschool behavioural crises — explain that without criteria, each presentation is managed ad hoc and decisions about safe discharge are made inconsistently by whoever is rostered",
              "Introduce rapid multidisciplinary case review for repeat ED attenders in this age group — explain that three similar presentations in one month constitute a pattern requiring structured system review, not individual case management",
              "Train ED staff in trauma-informed and neurodevelopmentally informed de-escalation for preschool children — explain that standard adult security responses and adult-oriented mental state examinations are clinically inappropriate and may worsen dysregulation in this age group",
              "Embed family violence screening tools and scripts into the early-childhood ED pathway — explain that staff avoid asking unless structured screening is part of the workflow; safety inquiry must be systematic rather than clinician-dependent",
              "Build consultation links with speech therapy, occupational therapy and developmental paediatrics as part of the pathway — explain that Leo-type presentations require more than psychiatric risk assessment and ED cannot safely manage developmental need without allied health partners",
              "Nominate a clinical lead and escalation pathway for complex early-childhood presentations — explain that urgent decisions in cases involving developmental delay, family violence and housing instability need accountable senior oversight rather than on-call generalist management",
              "Track and audit repeat ED presentations, childcare exclusions, accommodation outcomes and follow-up completion — explain that governance requires measurable indicators and audit closes the loop between pathway design and actual outcomes",
              "Escalate the six-month waitlist for early childhood intervention to executive level — explain that a six-month wait for a child with Leo's profile creates foreseeable developmental harm and is a governance risk the service cannot manage at a clinical level alone",
              "Include lived-experience and family feedback in pathway design — explain that pathways designed without input from families who have used ED for this purpose may address clinician convenience rather than family and child safety needs",
            ],
          },
        ],
        zeroMarkTraps: [
          "Recommending only 'hire more staff' without governance or pathway actions",
          "Treating the problem as parenting education rather than system design failure",
          "Providing no audit or accountability mechanism",
        ],
        postExaminerNote: "This stem tests whether candidates can move from clinical to systems thinking. Candidates who only give clinical recommendations for individual children will not demonstrate the governance and leadership competency this stem requires.",
      },
    ],
  },
  {
    id: "meq_023",
    title: "Frances Morton — Dialysis Withdrawal & Capacity",
    case: "Frances Morton, 84 years old",
    examSource: "Generated — Ethics / Professionalism / Legal",
    topic: "Capacity to refuse dialysis, ethical tensions in palliative decision-making, family conflict and consultation protocol",
    primaryDomain: "Ethics / Professionalism / Legal",
    totalMarks: 30,
    totalTimeMinutes: 30,
    stems: [
      {
        stemNumber: "2.1",
        vignette: "Mrs Frances Morton is an 84-year-old retired nurse with end-stage kidney disease, chronic pain from osteoarthritis, and a past history of recurrent major depression. She has been receiving haemodialysis for 18 months. Over the last month she has missed two dialysis sessions and now says she wants to stop dialysis permanently because she is 'tired of living like a machine.' She is not psychotic, is calm, and says she understands she may die within weeks if dialysis stops. Her daughter insists this is 'just depression talking' and asks you to certify that Frances lacks capacity.",
        question: "Outline — list and justify the key issues you would assess before giving an opinion about Frances's capacity to refuse dialysis.\\nA list without case-specific justification will not be awarded marks.\\n(8 marks | 8 minutes)",
        commandWord: "outline_justify",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "The daughter's request to certify incapacity is the clinical and ethical pressure point — the examiner expects candidates to resist this and apply the four-ability capacity framework rigorously",
          "Depression history does not equal incapacity — candidates must distinguish between assessing depression as a potential factor and using it as an automatic disqualifier",
          "Capacity is decision-specific — candidates must assess capacity for this particular refusal, not general cognitive function or global capacity",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Assess decision-specific capacity for dialysis refusal — because capacity is decision-specific; Frances may retain capacity for this high-stakes refusal even if she has depression, chronic pain or intermittent cognitive fluctuation",
              "Assess understanding of dialysis and its function — because Frances must be able to explain what dialysis does and why stopping it is likely to cause death within weeks to meet the understanding criterion",
              "Assess appreciation of personal consequences — because she must apply the risk of death to herself specifically, not just acknowledge it abstractly; lack of appreciation is distinct from lack of understanding",
              "Assess reasoning and weighing of alternatives — because she should be able to compare ongoing dialysis, reduced-frequency dialysis, conservative renal management and palliative renal care, and explain why these do not accord with her values",
              "Assess communication of a stable and consistent decision — because the decision should not be impulsive, fluctuating, delirium-driven or reversible under conditions of better symptom control",
              "Assess depression severity, suicidality and its influence on decision-making — because treatable depression may distort values or drive self-destructive refusal; suicidal ideation must be distinguished from refusal of burdensome treatment",
              "Assess grief and demoralisation as contributors — because the recent death of her partner may influence Frances's current valuation of life without automatically making her decision pathological",
              "Screen for delirium, uraemic encephalopathy and cognitive impairment — because dialysis-related uraemia, medications, infection and medical illness can impair all four capacity domains and must be excluded or addressed before a final opinion",
              "Assess pain and symptom burden as potentially remediable drivers — because untreated or inadequately managed osteoarthritis pain may be contributing to a desire to stop treatment that would change if pain were better controlled",
              "Assess voluntariness and the possibility of coercion — because the daughter's insistence and emotional pressure may affect Frances's expressed choice; the psychiatrist must assess what Frances says when the daughter is not present",
              "Review prior values, preferences and advance care planning — because consistency with longstanding values is supportive of capacity and helps contextualise the refusal within Frances's broader life narrative",
            ],
          },
        ],
        zeroMarkTraps: [
          "Treating depression as automatically removing capacity without assessment",
          "Treating age or frailty as disqualifying capacity",
          "Conducting only a suicide risk assessment without addressing the four capacity domains",
        ],
        postExaminerNote: "Candidates who conclude Frances lacks capacity solely because she is depressed or old will score zero on the clinical reasoning component. The examiner expects systematic application of the four capacity abilities with case-specific justification for each.",
      },
      {
        stemNumber: "2.2",
        vignette: "You find Frances has low mood, poor sleep, pain, and grief about the recent death of her partner, but she can describe the nature of dialysis, the likely consequences of stopping, alternatives such as reduced-frequency dialysis and palliative renal care, and why these options do not meet her values. She says, 'I am not trying to kill myself; I am choosing not to keep prolonging this.' The renal team is uncomfortable and asks whether depression invalidates her decision.",
        question: "Discuss — list and debate how depression, grief, autonomy, beneficence and non-maleficence should be weighed in this situation. You must name the ethical tension and take a defensible consultant position.\\n(8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "The renal team's discomfort is clinically significant — the examiner expects candidates to address moral distress in treating clinicians as part of the ethical response",
          "Frances's statement distinguishes treatment refusal from suicidal intent — candidates who conflate these two will lose marks",
          "A defensible consultant position must be stated — candidates who only list ethical principles without applying them to this case will not demonstrate consultant-level reasoning",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "There is tension between autonomy and preservation of life in this case — a capacitous patient has the legal and ethical right to refuse life-sustaining treatment even when death is the foreseeable consequence, and this right is not diminished by age, depression or clinician discomfort",
              "There is tension between treating depression and respecting reasoned values — depression should be assessed and treatment offered, but a capacitous decision to stop dialysis after weighing alternatives cannot be overridden solely on the basis of a comorbid mood disorder",
              "Grief can inform a decision without invalidating it — Frances's bereavement may shape her current values and priorities without making her choice pathological; grief is not a psychiatric contraindication to capacity",
              "Beneficence supports offering symptom relief and exploring alternatives — reduced-frequency dialysis, palliative renal care, pain management and depression treatment should all be offered and their potential to change Frances's experience acknowledged",
              "Non-maleficence includes avoiding burdensome and unwanted treatment — continuing dialysis against Frances's consistent and reasoned values may prolong suffering and constitute harm in itself, not only a benefit",
              "Treatment refusal must be distinguished from suicidal ideation — Frances frames this as refusing a burdensome life-prolonging intervention rather than an active wish to die; this distinction is clinically and ethically significant",
              "A defensible consultant position is to respect the refusal if capacity is intact — because autonomy and bodily integrity are foundational ethical duties and there is no legal authority to override a capacitous adult's treatment refusal",
              "Respecting refusal does not mean abandoning Frances — because palliative renal care, pain management, depression treatment, family support and ongoing psychiatric contact remain ethically required after a decision to withdraw dialysis",
              "Uncertainty about mood or cognition should prompt review rather than coercion — if Frances's mental state fluctuates, repeat assessment is appropriate; uncertainty alone does not authorise overriding a currently capacitous decision",
              "Naming and addressing moral distress in the renal team is part of the consultant role — because clinician discomfort with anticipated death may drive pressure toward coercive treatment; the psychiatrist should facilitate team reflection without endorsing clinical override",
            ],
          },
        ],
        zeroMarkTraps: [
          "Treating this as a standard suicide prevention case and recommending involuntary psychiatric treatment",
          "Concluding dialysis must continue because Frances is depressed, without capacity assessment",
          "Failing to mention palliative care as part of the ethically required response to treatment withdrawal",
        ],
        postExaminerNote: "Candidates who recommend involuntary admission or psychiatric override of a capacitous refusal will score poorly. The examiner is testing whether candidates can hold an ethical position that respects autonomy while still discharging the duty of care through palliative and psychiatric support.",
      },
      {
        stemNumber: "2.3",
        vignette: "Frances's son arrives from interstate and demands dialysis continue. He says his sister is 'letting Mum die for convenience' and threatens to complain to the hospital executive. Frances asks you not to share details of the psychiatric assessment with him. The renal consultant asks you to attend a family meeting.",
        question: "Describe — list and explain how you would manage confidentiality, family conflict and communication with the renal team.\\nA list without explanation will not be awarded marks.\\n(7 marks | 7 minutes)",
        commandWord: "describe_explain",
        marks: 7,
        timeMinutes: 7,
        stemSignals: [
          "Frances's explicit request for confidentiality must be respected — candidates who share psychiatric details with the son because 'he is family' will score zero on the confidentiality component",
          "The threatened executive complaint signals legal and reputational risk — the examiner expects candidates to address documentation and governance, not only clinical communication",
          "The family meeting requires defined roles and structure — candidates who attend without a plan will miss marks",
        ],
        domains: [
          {
            name: "Award up to 7 marks from the following scorable points",
            marks: 7,
            keyPoints: [
              "Respect Frances's explicit request not to share psychiatric assessment details with her son — explain that Frances retains the right to control her private health information and that confidentiality is not waived by family membership or severity of illness",
              "Seek Frances's consent for limited communication within the family meeting — explain that general information about care planning, palliative options and the support available can be shared without disclosing the content of the private psychiatric assessment",
              "Clarify to the son what can and cannot be shared — explain that he can receive information about the care process, palliative renal care options and the support plan without receiving confidential psychiatric details; transparency about limits reduces frustration and partial misinformation",
              "Acknowledge the son's distress without colluding with demands to override Frances — explain that his anger likely reflects anticipatory grief and perceived powerlessness; validation of his experience does not require agreeing with his position",
              "Assess the family meeting for coercion or undue influence on Frances — explain that the son's presence and emotional pressure must be assessed as a potential threat to Frances's ongoing voluntariness, not only as a communication challenge",
              "Provide the renal team with a clear, practical capacity opinion and documented plan — explain that the team needs specific guidance about what the psychiatric assessment found, what it means for clinical decision-making and what the limits of psychiatric authority are in this case",
              "Recommend a structured family meeting with defined roles for renal medicine, palliative care and psychiatry — explain that clear role separation reduces mixed messages, prevents the psychiatrist being asked to arbitrate family conflict and ensures Frances's wishes remain central",
              "Document the meeting, the capacity opinion, confidentiality limits, agreements and any threats of complaint — explain that threatened executive complaints make clear contemporaneous records essential for legal protection and clinical governance",
              "Offer ethics committee referral or staff support if the team's moral distress persists — explain that the renal team may experience significant difficulty with a death following treatment withdrawal; clinical ethics consultation or reflective practice support is appropriate",
            ],
          },
        ],
        zeroMarkTraps: [
          "Sharing psychiatric assessment details with the son because he is family",
          "Excluding family entirely from care planning when Frances may benefit from support",
          "Telling the renal team only 'she has capacity' without a practical communication and management plan",
        ],
        postExaminerNote: "Candidates who breach Frances's confidentiality or fail to provide practical guidance to the renal team will lose marks on both domains. The examiner expects a structured, role-defined response to a complex family and team communication scenario.",
      },
      {
        stemNumber: "2.4",
        vignette: "After the family meeting, the renal unit asks you to help develop a protocol for psychiatric consultation when patients request withdrawal from dialysis. Recent cases show inconsistent capacity documentation, late palliative care referral, and family meetings occurring only after conflict escalates.",
        question: "Outline — list and justify the key components of a local protocol for psychiatric consultation in dialysis withdrawal decisions.\\nA list without case-specific justification will not be awarded marks.\\n(7 marks | 7 minutes)",
        commandWord: "outline_justify",
        marks: 7,
        timeMinutes: 7,
        stemSignals: [
          "Three documented system failures are named in the stem — each must be addressed in the protocol; generic psychiatric consultation guidance will miss marks",
          "The protocol is a quality-and-safety document, not just a clinical checklist — governance, audit and role clarity are required components",
          "Palliative care integration must be early and mandatory — late referral is named as the problem to be solved",
        ],
        domains: [
          {
            name: "Award up to 7 marks from the following scorable points",
            marks: 7,
            keyPoints: [
              "Define referral triggers for psychiatric consultation — because psychiatry should be involved consistently when there is capacity uncertainty, a mood disorder, family conflict, fluctuating cognition or a request inconsistent with prior expressed values; referral must not depend on individual clinical judgment",
              "Mandate a standardised capacity documentation template — because inconsistent documentation was identified as the primary safety problem; the template must record each of the four capacity domains with case-specific evidence, not just a conclusion",
              "Require structured assessment of remediable psychiatric and medical contributors — because depression, suicidality, delirium, pain and coercion can all be treated or modified and must be systematically assessed before a final capacity opinion is recorded",
              "Mandate early palliative care involvement as part of the protocol — because palliative renal care and symptom management are part of the ethical obligation to patients who request withdrawal; late referral was identified as a system failure and must be corrected by protocol",
              "Require structured family meetings to occur proactively — because waiting until conflict escalates before convening a family meeting worsens complaints, distress and clinical outcomes; the protocol should specify timing and composition of family meetings",
              "Clarify decision-making roles explicitly — because psychiatry advises on capacity and mental disorder while renal medicine retains authority over renal treatment options; role confusion contributes to coercive pressure and inconsistent decision-making",
              "Create escalation routes to ethics committee or legal advice — because cases with genuine disputes about capacity or family conflict require senior governance input, not ad hoc clinical override",
              "Include documentation of values, advance care planning and consistency of prior wishes — because a decision consistent with longstanding values is more defensible and must be captured systematically",
              "Provide education to renal staff about capacitous treatment refusal and moral distress — because clinician discomfort with death and perceived abandonment can drive unlawful paternalism if not addressed",
              "Audit protocol adherence, documentation quality, palliative care referral timing and outcomes annually — because governance requires measurable indicators and the protocol must be reviewed to determine whether it is producing safer and more consistent outcomes",
            ],
          },
        ],
        zeroMarkTraps: [
          "Designing a protocol that requires psychiatric clearance for all dialysis withdrawal decisions regardless of capacity",
          "Omitting palliative care from the protocol",
          "Producing a clinical checklist without audit or governance requirements",
        ],
        postExaminerNote: "Candidates who write a protocol that is purely clinical and does not address documentation standards, palliative integration, role clarity and audit will miss the governance register this stem requires. This is a quality-and-safety question, not a clinical management question.",
      },
    ],
  },
  {
    id: "meq_024",
    title: "Grace — Deaf Patient, IPV & Service Reform",
    case: "Grace, 32 years old",
    examSource: "Generated — Communication / Collaboration",
    topic: "Deaf patient communication access, family violence risk assessment, confidentiality and service reform in ED",
    primaryDomain: "Communication / Collaboration",
    totalMarks: 26,
    totalTimeMinutes: 26,
    stems: [
      {
        stemNumber: "3.1",
        vignette: "Grace is a 32-year-old Deaf woman brought to ED by ambulance after superficial cutting to her forearm during an argument with her partner. She communicates using Auslan. Her mother, who is hearing, begins interpreting for her and says, 'She does this for attention; just ask me.' The ED is busy and the registrar says a professional interpreter may take two hours. Grace is crying, refuses to write answers, and repeatedly signs something the staff do not understand.",
        question: "Outline — list and justify your immediate approach to communication, assessment validity and safety.\\nA list without case-specific justification will not be awarded marks.\\n(8 marks | 8 minutes)",
        commandWord: "outline_justify",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "The mother's dismissal of Grace as attention-seeking and her insertion as interpreter is the first clinical danger — candidates must identify and refuse this immediately",
          "Interpreter delay is a patient safety issue, not an inconvenience — candidates must escalate this as a clinical risk, not accept it as a workflow constraint",
          "Grace's refusal to write is not refusal to engage — candidates who treat it as such will miss the communication access point",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Arrange a professional Auslan interpreter urgently via video remote interpreting if in-person is unavailable — because a two-hour delay for a mental health and risk assessment involving self-harm is a patient safety failure, not an acceptable scheduling outcome",
              "Do not use Grace's mother as interpreter under any circumstances — because family interpretation in a mental health and risk assessment breaches privacy, may distort or censor content, and prevents honest disclosure of interpersonal or family violence",
              "Face Grace directly, maintain her visual attention and communicate with her as the primary participant — because speaking about Grace to others in her presence reinforces exclusion and may further distress and disengage her",
              "Use interim non-language-dependent communication for immediate safety and comfort needs while waiting for the interpreter — because basic needs, wound care consent and waiting information can be conveyed through gesture and visual information while the interpreter connects",
              "Delay definitive psychiatric and risk assessment conclusions until the interpreter is available — because Grace's refusal to write is a communication access problem, not a refusal to engage; a risk assessment conducted without accessible communication is clinically invalid",
              "Assess Grace's interpreter preference and modality — because some Deaf individuals prefer in-person interpreting and video remote interpreting may have lighting, camera positioning or connectivity limitations that affect communication quality",
              "Document all communication barriers encountered and every step taken to address them — because the validity of any risk assessment depends on the communication conditions under which it was conducted, and this documentation protects both Grace and the service",
              "Provide immediate wound care and proportionate safety observation in the interim — because Grace has self-harmed and requires physical care and observation that does not depend on full psychiatric assessment being completed",
              "Assess whether the mother's presence is safe and wanted by Grace — because the mother's minimising comment suggests a potentially invalidating dynamic; Grace may disclose differently with the mother removed",
              "Escalate the interpreter wait time as a clinical safety risk to the ED senior — because patient flow expectations do not override communication rights in a mental health assessment, and the delay must be formally flagged, not quietly accommodated",
            ],
          },
        ],
        zeroMarkTraps: [
          "Using written questions as the primary or only communication solution",
          "Allowing the mother to answer on Grace's behalf",
          "Completing or documenting a formal risk assessment before accessible communication is established",
        ],
        postExaminerNote: "Without accessible communication the assessment is not valid — this is the core principle this stem tests. Candidates who proceed to risk assessment through the mother or written notes alone have failed the communication access requirement.",
      },
      {
        stemNumber: "3.2",
        vignette: "When an Auslan interpreter joins by video, Grace says her partner has been controlling her phone, threatening to tell people she is 'crazy,' and preventing her from attending Deaf community events. She says she cut herself to 'make everything stop' but denies current intent to die. She does not want her mother told about the partner violence because her mother will confront him and 'make it worse.'",
        question: "Discuss — list and debate the competing duties around confidentiality, family involvement, family violence risk and discharge planning. You must name the tensions explicitly and take a defensible consultant position.\\n(10 marks | 10 minutes)",
        commandWord: "debate",
        marks: 10,
        timeMinutes: 10,
        stemSignals: [
          "Grace's phone is controlled by the abuser — standard crisis line discharge planning is unsafe and must be adapted; candidates who recommend generic crisis numbers without addressing phone control will miss a key mark",
          "Denial of current suicidal intent does not resolve the risk — coercive control is an ongoing danger that requires a safety plan, not just a risk rating",
          "Grace's explicit request not to tell her mother must be respected unless there is imminent serious risk — candidates who disclose to the mother 'for her safety' without applying the confidentiality test will lose marks",
        ],
        domains: [
          {
            name: "Award up to 10 marks from the following scorable points",
            marks: 10,
            keyPoints: [
              "There is tension between Grace's right to confidentiality and her mother's wish to be involved — Grace's explicit request not to disclose the partner violence to her mother must be respected unless there is imminent serious risk that cannot be managed by less intrusive means",
              "There is tension between respecting Grace's autonomy and protecting her from ongoing harm — Grace should be supported to make her own safety plan; taking control away from her replicates the coercive dynamic she is trying to escape",
              "There is tension between discharge and foreseeable ongoing risk — denial of current suicidal intent does not resolve the risk created by an ongoing coercive control relationship; discharge planning must address the safety context, not only the risk rating",
              "The partner's behaviour constitutes coercive control — controlling her phone, threatening stigma, isolating her from the Deaf community and monitoring her movements are established patterns of family violence that carry risk of escalation",
              "A defensible consultant position is to respect Grace's confidentiality and support her to develop a safety plan she controls — because autonomy-respecting safety planning is more effective than paternalistic disclosure in family violence situations",
              "Standard crisis hotline referral is unsafe in this context — because Grace's phone is controlled by her partner; the safety plan must include alternative communication options accessible to Deaf people and not dependent on a phone she cannot use privately",
              "Identify Deaf-accessible family violence services and provide information directly to Grace — because mainstream crisis services may not be accessible to Deaf individuals; Deaf-specific or Deaf-aware services must be identified as part of discharge planning",
              "Assess Grace's housing safety before discharge — because returning to a home with an abusive partner who controls her communications and monitors her movements constitutes foreseeable harm that must be addressed in the discharge plan",
              "Explore Grace's Deaf community supports as a safety resource — because her partner's isolation of her from the Deaf community is a coercive tactic; reconnecting with trusted Deaf community members or organisations may be part of her safety network",
              "Plan a follow-up appointment with a service that can provide Auslan-accessible mental health support — because Grace's self-harm and family violence exposure require ongoing support, not only an ED discharge plan",
            ],
          },
        ],
        zeroMarkTraps: [
          "Disclosing the partner violence to Grace's mother because Grace is at risk",
          "Providing a crisis hotline number without addressing that her phone is controlled",
          "Discharging Grace without addressing the ongoing family violence and housing safety",
        ],
        postExaminerNote: "This is a 10-mark discuss stem — at least three named tensions with case-specific debate and a clearly stated defensible position are required. Candidates who reach for the mother as the default support despite Grace's explicit objection have failed the confidentiality and autonomy test.",
      },
      {
        stemNumber: "3.3",
        vignette: "The registrar later says, 'This took too long because of the interpreter issue.' Nursing staff say they often rely on family members for Deaf patients because interpreters delay patient flow. Grace makes a complaint that staff spoke about her as if she was not present and did not explain wound care or follow-up in an accessible way.",
        question: "Describe — list and explain your consultant response to the complaint and the service changes needed to improve care for Deaf patients in ED.\\nA list without explanation will not be awarded marks.\\n(8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Grace's complaint is a clinical safety event, not a customer service complaint — the examiner expects governance language, not an apology alone",
          "The registrar's framing of the interpreter as a flow problem reveals a training and culture issue — this must be named and addressed, not defended",
          "Wound care and follow-up were not accessible — this is a consent and safety issue, not only a communication preference",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Acknowledge and apologise to Grace for the communication failures — explain that Grace experienced being spoken about rather than spoken to, and that this constitutes a failure of patient-centred care requiring genuine acknowledgment rather than procedural response",
              "Review whether informed consent for wound care and discharge instructions was legally valid — explain that wound care performed without accessible explanation of risks, procedure and follow-up does not meet consent standards, and this must be assessed and documented",
              "Offer Grace a follow-up explanation of wound care and follow-up instructions in Auslan — explain that remediation of the communication failure requires providing the missed information in an accessible format, not assuming she received adequate information through inadequate channels",
              "Treat the complaint as a clinical safety event and initiate a formal incident review — explain that systemic reliance on family interpreters in mental health assessments constitutes a recurring patient safety risk requiring root cause analysis, not only individual feedback",
              "Provide direct professional feedback to the registrar on communication rights and assessment validity — explain that the interpreter is not a delay to patient flow but a prerequisite for a valid assessment; the registrar's framing reflects a misconception that must be corrected formally",
              "Develop an ED protocol for Deaf and hard-of-hearing patients mandating professional interpreters for mental health, consent and risk assessment — explain that ad hoc reliance on family members is unsafe and inequitable; a protocol removes the decision from individual clinical judgment",
              "Train ED nursing and medical staff in Deaf cultural safety — explain that speaking about Grace in her presence, using family as interpreters and framing interpreter access as a flow problem reflect attitudinal and knowledge deficits that training must address",
              "Create visual and Auslan-accessible discharge information resources — explain that written English discharge letters may not meet communication needs for Deaf patients whose primary language is Auslan; accessible resources must be developed and made routinely available",
              "Audit interpreter access times and clinical outcomes for Deaf patients — explain that governance requires data; if delays are recurring, the service cannot demonstrate whether Deaf patients are receiving equitable and safe care",
              "Include Deaf consumer input in the design of the ED Deaf-access pathway — explain that service redesign without the perspective of Deaf people who have used emergency services will produce solutions that address staff convenience rather than patient safety",
            ],
          },
        ],
        zeroMarkTraps: [
          "Defending the service on the grounds that the ED was busy",
          "Attributing the problem to the interpreter service rather than to the service's planning and culture",
          "Providing no systemic action in response to a complaint that reflects a recurring pattern",
        ],
        postExaminerNote: "The complaint must be treated as a clinical governance event. Candidates who respond only at the interpersonal level without recommending protocol, training, audit and consumer input have not demonstrated the systems leadership this stem requires.",
      },
    ],
  },
  {
    id: "meq_025",
    title: "Ethan — ARFID, Medical Risk & Team Fidelity",
    case: "Ethan, 9 years old",
    examSource: "Generated — Formulation / Diagnostic Reasoning",
    topic: "ARFID versus anorexia nervosa, paediatric feeding refusal, parental conflict and ward treatment consistency",
    primaryDomain: "Formulation / Diagnostic Reasoning",
    totalMarks: 32,
    totalTimeMinutes: 32,
    stems: [
      {
        stemNumber: "4.1",
        vignette: "Ethan is a 9-year-old boy admitted to the paediatric ward with weight loss, dehydration and bradycardia. Three months ago he choked on a piece of meat at a family barbecue. Since then he has progressively restricted food, first avoiding meat, then solids, then most fluids. He says food will 'get stuck and kill me.' His parents have been sleeping beside him and offering preferred drinks through the night. The paediatric team asks whether this is anorexia nervosa and whether an SSRI should be started.",
        question: "Outline — list and justify your diagnostic formulation and immediate treatment priorities.\\nA list without case-specific justification will not be awarded marks.\\n(8 marks | 8 minutes)",
        commandWord: "outline_justify",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "The paediatric team's question about anorexia nervosa is the diagnostic trap — the timeline, trigger and cognitive content are distinctly ARFID, and candidates who diagnose AN will lose the formulation marks",
          "Bradycardia signals serious medical risk — candidates who begin with psychology before medical stabilisation have their priorities reversed",
          "Parental accommodation through the night is a maintaining factor that must be named — candidates who formulate only the individual pathology without the family system will miss marks",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "ARFID (Avoidant Restrictive Food Intake Disorder) is the leading diagnosis — because restriction followed a specific choking incident, is driven by fear of aversive consequences rather than body weight or shape concerns, and the cognitive content 'food will get stuck and kill me' is characteristically ARFID rather than anorexic",
              "Anorexia nervosa is unlikely at this stage — because there is no described overconcern with weight, shape or body image, and the restriction escalated in response to a traumatic food experience rather than through dietary control or weight-loss intent",
              "Specific phobia of choking or food bolus obstruction should be included in the formulation — because the central fear is of a specific catastrophic consequence rather than a generalised food aversion or sensory sensitivity",
              "Medical dysphagia must be excluded — because the choking narrative does not rule out structural oesophageal pathology, and a physical cause for swallowing difficulty must be investigated before the problem is fully attributed to psychology",
              "Parental accommodation is maintaining symptom severity — because parents sleeping beside Ethan and offering preferred drinks through the night reduces his exposure to feared foods and reinforces avoidance, which is the central maintaining mechanism in ARFID",
              "Medical stabilisation is the immediate priority — because bradycardia, weight loss and dehydration in a 9-year-old indicate physical danger that requires urgent paediatric management; psychological treatment cannot begin safely until medical risk is reduced",
              "Assess refeeding risk and electrolytes before beginning nutritional rehabilitation — because malnourished children can develop dangerous electrolyte shifts during refeeding; this must be assessed and monitored by the paediatric team",
              "An SSRI should not be initiated as the immediate treatment — because the first-line acute priority is medical stabilisation and exposure-based psychological intervention; there is no indication for SSRI in acute ARFID-related medical deterioration",
              "Begin parent psychoeducation about accommodation and its role in maintaining restriction — because reducing parental accommodation is essential to recovery and parents cannot begin reducing it until they understand why it is harmful",
              "Plan early child mental health involvement for exposure-based therapy — because ARFID requires a structured, evidence-based psychological approach involving graduated food exposure, fear hierarchy development and family involvement from early in the admission",
            ],
          },
        ],
        zeroMarkTraps: [
          "Diagnosing anorexia nervosa solely because Ethan has lost weight without addressing the choking trigger and absent body image pathology",
          "Starting an SSRI as the main or first intervention",
          "Proceeding to psychological treatment before addressing bradycardia and medical risk",
        ],
        postExaminerNote: "The distinction between ARFID and anorexia nervosa is the core diagnostic test in this stem. Candidates who diagnose anorexia without addressing the absence of body image pathology and the presence of a clear traumatic food trigger have not demonstrated diagnostic reasoning at consultant level.",
      },
      {
        stemNumber: "4.2",
        vignette: "Ethan becomes distressed when nasogastric feeding is discussed and hides under the bed. His father says forcing a tube will traumatise him and threatens to take him home. His mother says, 'We have tried being gentle and he is getting sicker.' The paediatric registrar says Ethan's electrolytes are borderline and feeding cannot wait for weeks of therapy.",
        question: "Discuss — list and debate how you would balance medical risk, psychological trauma, parental disagreement and least restrictive care. You must name the tensions explicitly and take a defensible consultant position.\\n(9 marks | 9 minutes)",
        commandWord: "debate",
        marks: 9,
        timeMinutes: 9,
        stemSignals: [
          "The father's threat to take Ethan home is a legal and child safety issue — candidates must identify this as requiring assessment of parental authority limits in the context of serious medical risk",
          "Both parents have a legitimate position — the examiner expects the tension to be genuinely debated, not one parent's view endorsed over the other",
          "Least restrictive does not mean ineffective — this principle must appear or be demonstrated in the answer",
        ],
        domains: [
          {
            name: "Award up to 9 marks from the following scorable points",
            marks: 9,
            keyPoints: [
              "There is tension between medical urgency and psychological trauma — borderline electrolytes and bradycardia may be life-threatening if untreated, but involuntary nasogastric feeding is a traumatic procedure that may worsen fear of invasive medical interventions and damage therapeutic trust",
              "There is tension between least restrictive care and clinically adequate treatment — the least restrictive option must still be medically safe; choosing psychological comfort over medical necessity when the threshold for physical danger has been reached is not ethically defensible",
              "There is tension between the parents' opposing positions — the father's priority of avoiding psychological harm and the mother's priority of preventing medical deterioration are both legitimate concerns that reflect genuine clinical uncertainty about the right balance",
              "A defensible consultant position is to implement the least coercive medically adequate feeding plan — because medical risk cannot be ignored when it reaches the threshold of bradycardia and electrolyte instability, but coercive feeding should be planned, humane and time-limited rather than reactive",
              "Explain the rationale to Ethan at a developmentally appropriate level — because predictability and a sense of control within the feeding plan reduce procedural trauma; a child who understands what is happening and why copes better than one who experiences sudden unexplained intervention",
              "Offer Ethan graded choices within firm non-negotiable medical boundaries — because he can choose flavour, temperature, timing and coping supports without being offered a choice about whether medically necessary nutrition occurs",
              "Use psychological and behavioural support around every feeding interaction — because nasogastric feeding implemented without formulation and psychological support is more traumatic and less effective than feeding embedded in a therapeutic plan",
              "Engage both parents jointly in a unified plan to prevent parental splitting — because a child with ARFID whose parents give conflicting signals about treatment will use the split to maintain avoidance, and parental disagreement will worsen distress at mealtimes",
              "Assess legal authority if parents refuse medically necessary care — because in Australian jurisdictions, parental refusal of necessary medical treatment for a child whose life is at risk can be overridden by the treating team or a court, and this pathway must be known and ready if necessary",
              "Review the level of restriction daily and step it down as soon as medically safe — because any element of compulsory or restrictive feeding must be minimised in duration; ongoing restriction beyond clinical necessity is ethically indefensible",
              "Document medical risk level, alternatives considered, clinical rationale and roles of each team member — because compulsory or invasive feeding decisions in children are ethically and legally high-stakes and require contemporaneous documentation",
            ],
          },
        ],
        zeroMarkTraps: [
          "Refusing nasogastric feeding under all circumstances because of trauma risk, without acknowledging the threshold of medical danger",
          "Ordering immediate restraint and tube insertion without psychological preparation or parental engagement",
          "Siding with one parent's position without a plan for parental alignment",
        ],
        postExaminerNote: "The principle 'least restrictive does not mean ineffective' should appear in or underlie the answer. Candidates who prioritise psychological comfort above life-threatening medical risk have failed to demonstrate the clinical hierarchy required.",
      },
      {
        stemNumber: "4.3",
        vignette: "After medical stabilisation, Ethan accepts small amounts of yoghurt and soup but refuses school attendance because he fears classmates will watch him eat. His parents disagree: his father wants home schooling until he is 'fully better,' while his mother wants a rapid return to normal routines. The school asks for written advice about lunchtime supervision.",
        question: "Describe — list and explain a medium-term treatment plan for Ethan, including family, school and psychological interventions.\\nA list without explanation will not be awarded marks.\\n(8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "School avoidance is a new extension of the same ARFID avoidance pattern — candidates who treat it as a separate problem rather than the same maintaining mechanism will miss the formulation link",
          "The father's home-schooling preference will worsen avoidance — this must be named and countered clinically with the ARFID formulation",
          "The school's request for written advice requires a practical functional response — generic mental health letters do not serve the school's operational need",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Use exposure-based therapy as the primary psychological intervention — explain that ARFID is maintained by avoidance of feared textures, foods and eating-related situations; graded exposure to feared foods in a supported hierarchy targets the maintaining mechanism directly",
              "Apply family-based principles with both parents supporting the nutrition plan — explain that parental consistency in expecting and supporting food intake, rather than accommodating avoidance, is essential to recovery and must replace the current pattern of overnight preferred-drink offering and ad hoc negotiation",
              "Establish a structured meal plan with consistent expectations — explain that predictable mealtimes, portion expectations and permitted choices reduce negotiation, decrease anticipatory anxiety and create the routine needed for exposure to be effective",
              "Reduce overnight accommodation of preferred drinks — explain that parents offering preferred drinks through the night reinforces avoidance, disrupts sleep and prevents Ethan from experiencing manageable hunger, which is required for treatment progress",
              "Align both parents around one plan to prevent splitting — explain that the father's avoidance instinct and the mother's urgency reflect understandable but opposing responses; the treatment team must help both parents understand why graduated exposure with support is safer than either extreme",
              "Plan graded school reintegration rather than home schooling — explain that home schooling until Ethan is fully better will extend avoidance indefinitely, because school-based eating situations must be practised rather than circumvented for recovery to generalise",
              "Develop a lunchtime support plan for the school with practical functional recommendations — explain that supervision should be structured to support Ethan's exposure without drawing attention to him in ways that increase self-consciousness; written advice should give specific strategies rather than generic mental health language",
              "Communicate with the school using Ethan's consent and limited clinically relevant information — explain that the school needs functional guidance about triggers, supported eating strategies and escalation plans without receiving private psychiatric or family details",
              "Monitor growth, vital signs and laboratory results throughout psychological recovery — explain that nutritional recovery must parallel psychological improvement; premature discharge from medical monitoring risks physical relapse during psychological treatment",
              "Plan relapse prevention around high-risk triggers — explain that choking cues such as illness, new food textures, peer comments about eating and stressful social situations may re-trigger restriction; a relapse plan gives Ethan, parents and the school a clear response pathway",
            ],
          },
        ],
        zeroMarkTraps: [
          "Recommending home schooling until Ethan is fully recovered",
          "Providing psychological therapy without ongoing nutritional and medical monitoring",
          "Writing a generic school letter with only 'watch him eat at lunch' as instruction",
        ],
        postExaminerNote: "Every intervention should be linked to the maintaining mechanism — fear, avoidance and accommodation. Candidates who recommend home schooling without recognising it as an extension of the avoidance pattern have failed to apply the ARFID formulation to the new context.",
      },
      {
        stemNumber: "4.4",
        vignette: "At the ward case review, nurses report that different staff give different messages about whether Ethan must finish meals. Some staff allow parents to negotiate alternatives; others insist on strict completion. Ethan has begun asking for the 'nice nurse' and refusing meals with others.",
        question: "Outline — list and justify how you would improve team consistency and treatment fidelity on the paediatric ward.\\nA list without case-specific justification will not be awarded marks.\\n(7 marks | 7 minutes)",
        commandWord: "outline_justify",
        marks: 7,
        timeMinutes: 7,
        stemSignals: [
          "Ethan asking for the 'nice nurse' is a textbook description of splitting driven by inconsistency — candidates must name this as a clinical phenomenon produced by the ward's inconsistency, not a character trait",
          "The problem is a systems failure, not a nursing failure — candidates who blame individual nurses without addressing the absence of a shared plan will miss marks",
          "Treatment fidelity plus humane flexibility is the examiner's target formulation — rigid rules and laissez-faire are both wrong",
        ],
        domains: [
          {
            name: "Award up to 7 marks from the following scorable points",
            marks: 7,
            keyPoints: [
              "Create a single written meal-support plan agreed by the full multidisciplinary team — because inconsistent staff responses are directly reinforcing Ethan's avoidance, and a written plan removes dependence on individual staff memory or preference",
              "Define explicitly what is negotiable and what is non-negotiable in each meal interaction — because Ethan needs predictable boundaries to reduce anticipatory anxiety; choices such as order, timing and flavour can be offered, but meal completion targets and the supported eating approach cannot vary by shift",
              "Standardise the language and tone used by all staff during meal support — because mixed messages from different nurses increase anxiety and create opportunities for Ethan to test which staff will accommodate avoidance",
              "Clarify parents' role during meals and set boundaries on in-meal negotiation — because parents may unintentionally undermine the plan by negotiating alternatives; their role in the meal plan must be specified and consistent with treatment goals",
              "Convene a multidisciplinary case conference with paediatrics, nursing, dietetics and child psychiatry — because a shared formulation of ARFID and accommodation must be agreed before the written plan can be implemented with fidelity",
              "Provide ward staff education on ARFID, accommodation and why offering alternatives maintains rather than reduces symptoms — because nurses who allow substitution out of compassion need to understand the clinical mechanism before they can change their approach",
              "Review meal outcomes and distress levels daily using a simple tracking tool — because the plan must be adjusted based on objective data rather than staff preference, and daily review enables early identification of regression",
              "Use structured debrief for difficult meal interactions — because staff anxiety during challenging meals drives inconsistency; a brief structured debrief restores team alignment and reduces avoidant behaviour in staff as well as patients",
              "Nominate a lead clinician responsible for plan updates and communicating changes to all staff — because ad hoc plan modifications made by different clinicians undermine fidelity; a single accountable lead ensures changes are made through a defined process",
            ],
          },
        ],
        zeroMarkTraps: [
          "Blaming individual nurses for inconsistency without addressing the absence of a shared plan",
          "Allowing each shift to decide how to manage meals",
          "Implementing rigid rules without daily review or any flexibility for individual clinical circumstances",
        ],
        postExaminerNote: "The examiner is looking for treatment fidelity combined with humane flexibility. Candidates who recommend either rigid inflexible rules or ongoing negotiation have not demonstrated understanding of how ARFID is maintained and treated in an inpatient setting.",
      },
    ],
  },
  {
    id: "meq_026",
    title: "Sione — Bipolar, Steroid Mania & Renal Transplant",
    case: "Sione, 38 years old",
    examSource: "Generated — Management / Disposition",
    topic: "Steroid-triggered bipolar relapse, cultural formulation, transplant adherence, compulsory treatment and shared care",
    primaryDomain: "Management / Disposition",
    totalMarks: 32,
    totalTimeMinutes: 32,
    stems: [
      {
        stemNumber: "5.1",
        vignette: "Sione is a 38-year-old Samoan man admitted under renal medicine with deteriorating kidney function six months after a renal transplant. The renal team is concerned he has missed immunosuppressant doses. Sione says the tablets are 'weakening my spirit' and that prayer and traditional healing will restore the kidney. His wife says he has been sleeping poorly, spending large amounts of money on church donations, and saying God gave him a 'second kidney for a purpose.' He is taking high-dose prednisolone and tacrolimus. The renal consultant asks whether Sione is manic, psychotic, or simply non-adherent.",
        question: "Outline — list and justify the key elements of your formulation of Sione's presentation.\\nA list without case-specific justification will not be awarded marks.\\n(8 marks | 8 minutes)",
        commandWord: "outline_justify",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Prednisolone is the most important clinical detail in the vignette — candidates who do not name steroid-induced or steroid-triggered mania early will lose the key formulation mark",
          "The renal consultant's three options are all wrong as single explanations — the examiner expects a multifactorial formulation that integrates all three possibilities",
          "Calling spiritual belief automatically psychotic is the cultural formulation trap — 'God gave me a purpose' must be contextualised before being pathologised",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Steroid-induced or steroid-triggered mania is the leading biological hypothesis — because high-dose prednisolone in a patient with reduced sleep, increased spending, grandiose religious purpose and possible bipolar history constitutes a well-recognised corticosteroid neuropsychiatric syndrome that must be investigated and treated",
              "Bipolar disorder relapse should be included in the formulation — because poor sleep, grandiosity, increased spending, elevated energy and possibly pressured speech are cardinal features of mania; a personal or family history of bipolar disorder would significantly strengthen this hypothesis",
              "Tacrolimus neuropsychiatric effects should be considered — because calcineurin inhibitors can cause neurotoxicity including mood change, confusion and psychosis; this is a less likely primary explanation but must not be excluded",
              "The distinction between culturally normative spiritual belief and psychiatric grandiosity requires careful culturally informed assessment — because 'God gave me a purpose' may represent culturally contextualised religious expression, an overvalued idea or frank grandiose delusion; this cannot be determined from the vignette alone",
              "Non-adherence to immunosuppressants should be formulated as multifactorial rather than volitional — because missed doses may reflect side effect intolerance, mania-driven poor judgment, health literacy gaps, spiritual beliefs about the medication, financial barriers or service access failures; 'non-compliance' is an inadequate explanation that closes off treatable causes",
              "The risk of irreversible transplant rejection from missed immunosuppression is the acute medical stake — because the formulation must be understood in the context of the clinical urgency it creates; this is not a stable outpatient question",
              "Cultural and spiritual formulation must be integrated alongside biological and psychological dimensions — because Sione's Samoan heritage, church affiliation and explanatory model for illness are central to the presentation and cannot be separated from the clinical formulation",
              "Collateral from Sione's wife, GP and renal pharmacist should be sought — because insight may be impaired, medication adherence history is unclear and the wife's report of behavioural change provides corroborative evidence for the mania hypothesis that Sione alone cannot provide",
              "Capacity assessment for renal biopsy and ongoing immunosuppression decisions must be planned — because if mania or psychosis is impairing Sione's reasoning, his refusal may not represent an autonomous capacitous decision",
            ],
          },
        ],
        zeroMarkTraps: [
          "Treating all spiritual beliefs as psychosis without cultural assessment",
          "Framing missed immunosuppression as simple wilful non-compliance",
          "Failing to name prednisolone as a major contributor to the presentation",
        ],
        postExaminerNote: "The steroid contribution must be named. Candidates who produce a formulation without prednisolone, or who dismiss spiritual beliefs as automatically psychotic without cultural assessment, have not demonstrated sufficient clinical and cultural sophistication for this MEQ.",
      },
      {
        stemNumber: "5.2",
        vignette: "Sione refuses a renal biopsy and says he will leave hospital to attend a church healing service. His wife wants you to 'make him stay.' His pastor arrives and asks to pray with the family before any further medical discussion. The renal team says biopsy delay may risk irreversible graft loss.",
        question: "Describe — list and explain your approach to capacity, engagement, cultural formulation and immediate risk management.\\nA list without explanation will not be awarded marks.\\n(8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "The pastor's arrival is an opportunity, not an obstacle — candidates who exclude the pastor automatically will miss the cultural engagement mark",
          "Capacity and engagement are separate questions — candidates must assess whether Sione's refusal is capacitous before deciding on management, not conflate refusal with incapacity",
          "The renal team's urgency is real and must be quantified — candidates who are only culturally sensitive without addressing the graft loss risk will miss the clinical balance mark",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Assess capacity for the renal biopsy decision specifically — explain that capacity is decision-specific and Sione's refusal requires formal assessment of whether he can understand the need for biopsy, appreciate the risk of irreversible graft loss if delayed, weigh this against his preference for healing prayer, and communicate a stable decision",
              "Assess whether mania is impairing capacity to weigh the medical risk — explain that grandiosity, reduced sleep and impaired judgment from a manic state may prevent Sione from realistically weighing the probability of graft loss, not merely from holding religious values that differ from clinical recommendations",
              "Welcome the pastor's involvement with Sione's consent — explain that the pastor may be a trusted figure who can help bridge between spiritual values and medical treatment; excluding him reflexively is both culturally unsafe and likely to entrench Sione's refusal",
              "Negotiate sequencing of prayer and medical discussion — explain that allowing prayer before the medical conversation acknowledges Sione's spiritual framework without delaying urgent care indefinitely; this approach is culturally respectful and practically feasible",
              "Explore the meaning of the renal biopsy within Sione's cultural and spiritual framework — explain that reluctance may be linked to specific beliefs about bodily integrity or spiritual consequence that have not been asked about; understanding these enables a more effective and respectful negotiation",
              "Ask the renal team to quantify the clinical urgency clearly — explain that psychiatric risk management depends on knowing whether biopsy delay means hours, days or weeks before irreversible harm; without this the psychiatric response cannot be calibrated",
              "Involve Sione's wife and cultural support with his consent as part of the engagement plan — explain that family and community are central to Samoan decision-making and a plan that excludes them is less likely to succeed than one that mobilises cultural support toward engagement with medical care",
              "Treat agitation and sleep disturbance acutely with renal-safe options — explain that symptom control of emerging mania may restore Sione's capacity to engage with medical decision-making; this is the least restrictive effective first step before considering compulsory measures",
              "Document capacity assessment, cultural formulation, engagement steps and clinical urgency — explain that biopsy refusal in the context of possible transplant rejection is a high-stakes clinical and legal situation requiring contemporaneous documentation of every step taken",
            ],
          },
        ],
        zeroMarkTraps: [
          "Excluding the pastor and treating his arrival as interference",
          "Treating biopsy refusal as evidence of incapacity without formal capacity assessment",
          "Being culturally sensitive at the expense of addressing the time-critical risk of graft loss",
        ],
        postExaminerNote: "The examiner expects cultural respect and clinical rigour simultaneously. Candidates who default to coercion without attempting engagement, or who defer indefinitely to spiritual preference without assessing capacity, have not demonstrated the clinical balance required.",
      },
      {
        stemNumber: "5.3",
        vignette: "Collateral from Sione's wife and GP suggests he has a history of bipolar disorder with previous steroid-triggered mania. He has stopped lithium because he feared kidney harm. He is now irritable, grandiose, pressured and has limited insight. The renal team asks whether they can treat him involuntarily to protect the transplant.",
        question: "Discuss — list and debate the competing clinical, legal and ethical duties in deciding whether compulsory psychiatric treatment or detention is justified. You must name the tensions explicitly and take a defensible consultant position.\\n(8 marks | 8 minutes)",
        commandWord: "debate",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "The renal team's question conflates psychiatric detention with authority to perform renal procedures — candidates must separate these two legal questions explicitly",
          "Lithium was stopped for renal safety — this is clinically important context demonstrating the history was not simple non-adherence; the treatment plan must address this gap",
          "A defensible position is required — candidates who list competing considerations without concluding will not demonstrate consultant-level reasoning",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "There is tension between Sione's autonomy and foreseeable medical harm — if mania is impairing his capacity, his current refusal of medical treatment may not represent an autonomous choice; but compulsion must be based on legal criteria, not clinical preference or transplant urgency alone",
              "There is tension between cultural respect and psychiatric pathologising — compulsory treatment must be based on evidence of mental disorder impairing decision-making, not on disagreement with Sione's spiritual values or treatment priorities",
              "There is tension between least restrictive care and the urgency of graft preservation — losing the transplant is a serious irreversible harm, but the legal threshold for psychiatric detention is not met simply because medical risk is high; proportionality must be maintained",
              "Compulsory psychiatric treatment may be justified if mania causes impaired capacity and serious risk of harm — because irritability, grandiosity, pressured speech, limited insight and collateral-confirmed mania in a patient who has stopped mood stabilisation constitute a treatable mental illness causing serious risk, meeting threshold for mental health legislation consideration in most Australian jurisdictions",
              "Mental health legislation authorises compulsory psychiatric assessment and treatment — but does not automatically authorise renal biopsy or forced immunosuppressant administration; these require separate legal authority through guardianship, substitute decision-making or court order",
              "Least restrictive voluntary alternatives must be attempted first if clinically safe — because engagement through wife, pastor, cultural support, explanation and oral medication offers may reduce or resolve the need for compulsion; these steps must be documented before a legal order is sought",
              "A defensible consultant position is that compulsory psychiatric assessment may be justified given mania with impaired capacity — but the renal team cannot use this authority to compel renal procedures; separate consent or substitute decision-making authority is required for each medical intervention",
              "If Sione is imminently leaving and this creates serious psychiatric and medical risk, short-term detention for assessment and treatment is defensible — because it allows treatment of the mania that is compromising capacity, after which Sione may make a more autonomous decision about renal care",
              "Review and step down compulsion as soon as risk and incapacity resolve — because psychiatric detention must not be sustained beyond the clinical and legal threshold that justified it; restoration of autonomy must be planned from the outset",
              "Senior psychiatry, renal medicine, legal and ethics consultation should be involved — because this case crosses psychiatric, renal and legal authority in ways that no single clinician should navigate without peer input and governance support",
            ],
          },
        ],
        zeroMarkTraps: [
          "Recommending use of the Mental Health Act to authorise renal biopsy without acknowledging the separate legal authority required",
          "Concluding Sione is psychotic because he holds religious beliefs without evidence of formal thought disorder",
          "Failing to name least restrictive alternatives before recommending compulsion",
        ],
        postExaminerNote: "The legal distinction between psychiatric detention and authority to perform renal procedures is the key examiner test. Candidates who collapse these into a single authority — or who refuse all compulsory treatment without acknowledging the threshold that mania and impaired capacity may meet — will lose marks.",
      },
      {
        stemNumber: "5.4",
        vignette: "Sione improves after treatment and agrees to continue immunosuppression, but the renal pharmacist says there is no shared protocol for psychiatric relapse prevention in transplant patients receiving high-dose steroids. Renal staff have been documenting 'non-compliance' without recording cultural, medication or mental-state contributors. The transplant unit asks you to recommend a safer shared-care process.",
        question: "Describe — list and explain the shared-care, documentation and governance changes you would recommend between renal medicine, psychiatry, pharmacy, GP, family and cultural supports.\\nA list without explanation will not be awarded marks.\\n(8 marks | 8 minutes)",
        commandWord: "describe_explain",
        marks: 8,
        timeMinutes: 8,
        stemSignals: [
          "Two specific system failures are named in the stem — absent relapse prevention protocol and reductive documentation; both must be directly addressed",
          "The word 'non-compliance' in documentation is itself identified as a system problem — the answer must replace this with an adherence formulation and explain why the distinction matters clinically",
          "Shared care means six named stakeholders — candidates who address only the psychiatry-renal dyad will miss marks",
        ],
        domains: [
          {
            name: "Award up to 8 marks from the following scorable points",
            marks: 8,
            keyPoints: [
              "Develop a transplant-psychiatry relapse prevention protocol for patients receiving high-dose steroids — explain that steroid-triggered mania is a predictable and preventable complication; Sione had a documented history of steroid-triggered mania and should have had a proactive psychiatric monitoring plan before prednisolone was escalated",
              "Identify patients at high psychiatric risk before steroid escalation — explain that prior bipolar disorder, prior steroid-triggered episodes and lithium-free status constitute a risk profile that should trigger pre-emptive psychiatric review and monitoring, not reactive referral after relapse",
              "Define and agree monitoring roles across renal medicine, psychiatry, pharmacy, GP and family — explain that adherence to immunosuppressants and mood stability cross multiple service boundaries; a shared care plan with named responsibilities prevents each service assuming another is monitoring the identified risks",
              "Include family and cultural supports with Sione's consent as formal components of the shared care plan — explain that Sione's wife identified behavioural changes before any clinical contact; incorporating family observation and cultural health worker involvement into the early warning system formalises an existing protective resource",
              "Develop renal-safe mood stabilisation guidance in collaboration with renal medicine and pharmacy — explain that lithium was appropriately stopped due to renal concerns, but this created a gap in relapse prevention; the protocol must identify renal-safe alternatives and a monitoring plan for whichever agent is chosen",
              "Create a medication interaction review process between psychiatry and transplant pharmacy — explain that tacrolimus, prednisolone and psychotropic medications have clinically relevant pharmacokinetic interactions requiring collaborative management, not sequential independent prescribing",
              "Embed early warning signs into Sione's transplant care plan — explain that poor sleep, church donation spending, grandiose spiritual framing and missed immunosuppressant doses were all present before the current crisis; the plan must document these early warning signs and assign monitoring and escalation responsibilities",
              "Replace 'non-compliance' with a descriptive adherence formulation in all documentation — explain that 'non-compliance' is a pejorative label that closes off clinical inquiry; it obscures cultural factors, medication side effects, psychiatric symptoms, financial barriers and service access failures that may all be remediable contributors to missed doses",
              "Conduct renal staff education on steroid psychiatric effects and the limitations of adherence framing — explain that renal nurses and doctors who document non-compliance without investigating contributors will continue to miss treatable causes of graft loss; education shifts the culture from blame to prevention",
              "Audit cases of missed immunosuppression for psychiatric, cultural and medication contributors retrospectively and prospectively — explain that multiple cases of reductive documentation suggest a system pattern; audit closes the loop between protocol design and actual clinical practice",
            ],
          },
        ],
        zeroMarkTraps: [
          "Addressing only Sione individually without recommending system-level changes",
          "Failing to involve pharmacy in the shared care plan",
          "Producing a relapse prevention plan that does not address the absent protocol for steroid dose escalation",
        ],
        postExaminerNote: "The word 'non-compliance' should not appear in the answer except as something to be critiqued. Candidates who replicate the reductive documentation language they have been asked to replace have not demonstrated the clinical leadership register this stem requires.",
      },
    ],
  }
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
    const meqsWithStats = MEQ_BANK.map((meq, idx) => ({
      meq,
      stats: getMEQStats(meq.id, allAttempts),
      globalIndex: idx + 1,
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

        <div className="space-y-2">
          {filteredMEQs.map(({ meq, stats, globalIndex }) => {
            const { status, inProgressAttempt } = stats;
            return (
              <div key={meq.id} className="bg-white border border-gray-200 rounded-xl px-5 py-3.5 shadow-sm flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-gray-900 flex-1 min-w-0">
                  {globalIndex}. {meq.title}
                </span>
                {status === "in_progress" && inProgressAttempt ? (
                  <button
                    onClick={() => startMEQ(meq, inProgressAttempt)}
                    className="px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-semibold hover:bg-amber-700 transition-colors whitespace-nowrap flex-shrink-0"
                  >
                    Continue MEQ →
                  </button>
                ) : (
                  <button
                    onClick={() => startMEQ(meq)}
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap flex-shrink-0"
                  >
                    Start MEQ →
                  </button>
                )}
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
    const meqGlobalIndex = MEQ_BANK.findIndex((m) => m.id === selectedMEQ.id) + 1;

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
          MEQ {meqGlobalIndex} — {selectedMEQ.title} · Stem {stem.stemNumber} of {selectedMEQ.stems.length}
        </div>

        {/* Vignette */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-3">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            MEQ {meqGlobalIndex} · Stem {stem.stemNumber}
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
