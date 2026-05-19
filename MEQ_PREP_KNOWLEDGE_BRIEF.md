# MEQ Prep — AI Knowledge Brief
> Upload this file to Claude.ai or ChatGPT to give the AI a complete understanding of this project's content, structure, and goals before asking for help.

---

## What This App Is

**RANZCP MEQ Prep** is a self-study web application for psychiatry registrars preparing for the RANZCP (Royal Australian & New Zealand College of Psychiatrists) Written Examination — specifically the **Modified Essay Question (MEQ)** paper.

The MEQ exam gives candidates a clinical vignette and asks them to write free-text responses identifying clinical signals, risks, ethical issues, and management priorities. Examiners mark against a list of "expected signals" — key clinical concepts the candidate should identify.

This app simulates that exam format. The candidate reads a stem (clinical vignette), writes their response, and the app automatically scores it by detecting which key signals their answer covered.

---

## Target Audience

- Psychiatry registrars (trainees) in Australia and New Zealand
- Preparing for the RANZCP Written Examination (MEQ paper)
- Consultant-level clinical reasoning is the benchmark — not basic registrar knowledge

---

## App Structure (3 Study Modes)

### 1. Quiz Mode (`/signals`)
- Candidate selects a topic and difficulty
- Reads the MEQ stem
- Types a free-text answer
- App scores the response against expected signals
- Shows which signals were caught, missed, or partially identified
- Tracks performance over time

### 2. Daily MEQs
- A curated daily set of questions
- Simulates realistic exam pacing

### 3. Exam Mode
- Timed simulation of the full MEQ paper

---

## Question Data Structure

Each question (called a `QuizStem`) has this exact structure:

```typescript
{
  id: string,                    // e.g. "q1", "QA-001", "SUP-003"
  topic: TopicKey,               // see topic list below
  difficulty: "standard" | "difficult" | "consultant",
  title: string,                 // short descriptive title
  candidateRole: string,         // role the candidate is playing
  setting: string,               // clinical setting
  stem: string,                  // the clinical vignette (long form text)
  totalMarks: number,            // typically 22-25

  signals: ExpectedSignal[],     // array of scoreable signals (see below)

  priorityOrder: {
    urgent: string[],            // signal IDs — critical, must-mention
    secondary: string[],         // signal IDs — important but not highest priority
    lowYield: string[],          // signal IDs — bonus marks only
  },

  modelAnswer: string,           // the ideal consultant-level written answer
}
```

### Signal Structure

Each `ExpectedSignal` represents one scoreable clinical concept:

```typescript
{
  id: string,              // e.g. "s1", "s2"
  name: string,            // short name of the signal
  category: SignalCategory, // see category list below
  severity: "critical" | "important" | "optional",
  clueInStem: string,      // the exact text in the vignette that hints at this signal
  whyItMatters: string,    // why a consultant would raise this (teaching rationale)
  modelWording: string,    // ideal phrasing for a model answer
  keywords: string[],      // phrases the scoring engine detects in candidate's answer
  relatedRisk?: string,    // optional: related risk context
  relatedLegal?: string,   // optional: related legal framework
  relatedCultural?: string, // optional: cultural safety context
  relatedSystem?: string,  // optional: systems/governance context
}
```

### Scoring Logic

- `critical` signals = **2 marks each**
- `important` signals = **1 mark each**
- `optional` signals = **0.5 marks each**
- Scoring is keyword-based: the candidate's free-text answer is scanned for any of the `keywords` array phrases (case-insensitive)
- Partial credit is given if any keyword matches

---

## Signal Categories (20 total)

| Category Key | What it tests |
|---|---|
| `immediate_safety` | Acute risk to life requiring immediate action |
| `diagnosis_formulation` | Diagnostic reasoning, differential diagnosis |
| `risk_self` | Suicide/self-harm risk assessment |
| `risk_others` | Risk of violence to third parties |
| `risk_vulnerable` | Risk to vulnerable third parties (children, elderly, fetus) |
| `substance_use` | Alcohol/drug issues, OST management |
| `physical_health` | Medical comorbidity, physical safety |
| `capacity` | Decision-making capacity assessment |
| `mental_health_act` | Involuntary treatment, MHA criteria and documentation |
| `consent_refusal` | Consent, right to refuse, autonomous decision-making |
| `cultural_safety` | Cultural competence, interpreter use, ATSI care |
| `trauma` | Trauma-informed care, PTSD, re-traumatisation |
| `family_carer` | Carer burden, family engagement, collateral history |
| `child_protection` | Child safeguarding, mandatory reporting |
| `collateral` | Collateral information from family/police/records |
| `mdt_conflict` | Team conflict, interprofessional disagreement |
| `system_pressure` | Bed pressure, resource limitations, service constraints |
| `governance` | Clinical governance, documentation, incident review |
| `ethics` | Ethical dilemmas, professional conduct, boundaries |
| `disposition` | Discharge planning, follow-up, safety planning |

---

## Topics (20 total)

| Topic Key | Label | Questions Built | Target |
|---|---|---|---|
| `ed` | Emergency Department | 2 (q2, q11 partial) | 30 |
| `perinatal` | Perinatal Psychiatry | 2 (q3, q10) | 30 |
| `cl_psychiatry` | Consultation-Liaison | 2 (q1, q9) | 30 |
| `forensic` | Forensic Psychiatry | 1 (q6) | 30 |
| `old_age` | Old Age Psychiatry | 1 (q5) | 30 |
| `child_adolescent` | Child & Adolescent | 1 (q7) | 30 |
| `governance` | Governance & Leadership | 2 (q13, q14) | 30 |
| `cultural_safety` | Cultural Safety | 1 (q1) | 30 |
| `substance_use` | Substance Use | 1 (q10) | 30 |
| `risk` | Risk Assessment | 2 (q11, q22 rural) | 30 |
| `capacity_mha` | Capacity & Mental Health Act | 2 (q8, q9) | 30 |
| `quality_assurance` | Quality & Safety Review | 10 (QA-001–010) + 3 (q12–q14) | 30 |
| `supervision` | Supervision & Feedback | 10 (SUP-001–010) | 30 |
| `documentation` | Documentation & Communication | 0 — **EMPTY** | 30 |
| `discharge_review` | Discharge / Report Review | 0 — **EMPTY** | 30 |
| `mdt_systems` | MDT Conflict & Systems Pressure | 3 (q19–q21) | 30 |
| `rural` | Rural & Resource-Limited | 1 (q22) | 30 |
| `psychotherapy` | Psychotherapy & Boundaries | 1 (q23) | 30 |
| `ethics` | Ethics & Professionalism | 1 (q24) | 30 |

**Current total: ~47 questions across all topics**
**Goal: ~600 questions**

---

## Current Question Inventory (47 questions)

### Original Stems in quizData.ts (q1–q27)

| ID | Topic | Title | Difficulty |
|---|---|---|---|
| q1 | cultural_safety / cl | Sudanese Refugee — Medical Ward Refusal | consultant |
| q2 | ed | Young Man — High-Lethality Overdose in ED | difficult |
| q3 | perinatal | Postnatal Psychosis — Infant Safety | consultant |
| q4 | perinatal | Antenatal Antidepressant Decision | difficult |
| q5 | old_age | Elder Financial Abuse and Driving with Dementia | consultant |
| q6 | forensic | Violence Risk, Stalking and Mental Illness | consultant |
| q7 | child_adolescent | Aboriginal Adolescent — Complex Trauma and Polypharmacy | consultant |
| q8 | capacity_mha | CTO Review — Least Restrictive Principle | consultant |
| q9 | cl_psychiatry | Medical Ward — Refusal to Accept Treatment | difficult |
| q10 | substance_use | Opioid Substitution Therapy — Pregnancy | consultant |
| q11 | risk | Denied Suicidal Ideation — High-Risk Presentation | consultant |
| q12 | quality_assurance | Post-Discharge Suicide — Adverse Event Response | consultant |
| q13 | quality_assurance | Seclusion Documentation Failure | consultant |
| q14 | quality_assurance | Aboriginal Man — Seclusion Governance | consultant |
| q15 | ethics | Colleague Impairment — Reporting Obligation | consultant |
| q16 | governance | Registrar Working Without Supervision | consultant |
| q17 | governance | Media Inquiry — Patient Privacy | consultant |
| q18 | mdt_systems | Surgeon Refusing Psychiatric Consult | consultant |
| q19 | mdt_systems | Nursing Staff Withholding Psychiatric Information | consultant |
| q20 | mdt_systems | ED Physician Wants Patient Discharged — Consultant Disagrees | consultant |
| q21 | mdt_systems | Nursing Unit Manager Pressuring Premature Discharge | consultant |
| q22 | rural | Videoconference Consultation — Rural Patient, No Beds | consultant |
| q23 | psychotherapy | Difficult Termination — Patient Threatening Complaint | consultant |
| q24 | ethics | Dual Role Conflict — Treating and Forensic | consultant |
| q25 | cl_psychiatry | ICU Delirium — Capacity and Restraint | consultant |
| q26 | child_adolescent | Mandatory Report — Adolescent Disclosure | consultant |
| q27 | forensic | NGMI Defence — Court Report | consultant |

### Quality Assurance Topic (QA-001–010 in qaQuestions.ts)

| ID | Title |
|---|---|
| QA-001 | Lithium Toxicity Missed After Dose Increase |
| QA-002 | Clozapine Neutropenia Alert Not Acted On |
| QA-003 | Seclusion Injury and Incomplete Documentation |
| QA-004 | Absconding From ED After Delayed Psychiatric Review |
| QA-005 | Prescribing Error After Weekend Handover |
| QA-006 | Delirium Mismanaged as Psychiatric — Migrant Patient |
| QA-007 | Unsafe Weekend Discharge Under Bed Pressure |
| QA-008 | Child Protection Signal Missed in Perinatal Admission |
| QA-009 | ECT Consent and Wrong-Site Governance Failure |
| QA-010 | Registrar Working Beyond Competence After Hours |

### Supervision Topic (SUP-001–010 in supervisionQuestions.ts)

| ID | Title |
|---|---|
| SUP-001 | Stage 1 Registrar Wants to Discharge a High-Risk ED Patient |
| SUP-002 | Registrar Misses Capacity Issue in CL Psychiatry |
| SUP-003 | Registrar Writes Poor Mental Health Act Documentation |
| SUP-004 | Registrar Distressed After Patient Suicide |
| SUP-005 | Registrar Overconfident About Involuntary Admission |
| SUP-006 | Registrar Justifies Seclusion Using Trauma-Uninformed Reasoning |
| SUP-007 | Registrar Boundary Problem in Psychotherapy Case |
| SUP-008 | Bullying Allegation Against Senior Registrar |
| SUP-009 | Remote Supervision in Rural ED |
| SUP-010 | Registrar Provides Poor Feedback to Intern |

### EMPTY Topics (need questions built)

- `documentation` — Documentation & Communication (0 questions)
- `discharge_review` — Discharge / Report Review (0 questions)
- Also low: `forensic`, `old_age`, `child_adolescent`, `rural`, `psychotherapy`, `ethics`, `substance_use` (1 question each)

---

## What Good Questions Look Like

### Hallmarks of a Strong MEQ Stem

1. **Layered complexity** — multiple signals embedded, not telegraphed
2. **Realistic clinical setting** — specific roles, times, settings
3. **Exact quotes** — patient/family speech that hints at signals
4. **Competing priorities** — ethical tensions, system pressures vs. clinical need
5. **Consultant-level benchmark** — registrar-safe answers miss signals; consultant answers catch them all

### Hallmarks of a Strong Signal

1. **clueInStem** is a direct quote or specific detail from the vignette
2. **keywords** are realistic phrases a psychiatrist would actually write (not jargon)
3. **modelWording** reads like a consultant's real answer — specific, not generic
4. **whyItMatters** explains the teaching point clearly
5. **severity** is calibrated: only 2-4 signals should be `critical`

### Example of a Well-Written Signal

```
name: "Delayed disclosure — fear of losing child drives concealment"
category: "diagnosis_formulation"
severity: "critical"
clueInStem: "'I was worried you'd take the baby'"
whyItMatters: "Leanne's fear of punitive response has led to a 10-week delay in disclosure — the therapeutic relationship must explicitly address this"
modelWording: "Leanne's fear of losing her child has driven a 10-week delay in disclosure — this is a critical engagement issue. The therapeutic approach must explicitly address the non-punitive purpose of services and her motivation to parent"
keywords: ["fear", "concealment", "delayed disclosure", "worried", "take the baby", "engagement", "punitive", "therapeutic alliance"]
```

---

## Common Weaknesses in Current Questions (Areas for Improvement)

1. **Keyword arrays too narrow** — candidates use synonyms that don't match; need more keyword variants
2. **modelWording too generic** — some signals say "assess X" without specifying what the assessment should involve
3. **Signal count imbalance** — some stems have 6 signals, some 13; aim for 7-10 per stem
4. **Difficulty calibration** — some "consultant" questions are too easy; need more genuine complexity
5. **Missing topics** — documentation, discharge review, ethics, rural are underrepresented
6. **Keywords need clinical language variants** — e.g. for grief: ["grief", "bereave", "loss", "complicated grief", "mourning", "bereavement"]

---

## How the Scoring Engine Works

The app uses `quizEngine.ts` with the key `STORAGE_KEY = "meq_quiz_attempts"`.

When a candidate submits an answer:
1. Their text is lowercased
2. Each signal's `keywords` array is checked — if ANY keyword appears as a substring in the answer, the signal is scored as detected
3. Score = sum of (detected signals × severity weight)
4. Results stored in localStorage

**Implication for question writers:** Keywords must be phrases that naturally appear in a good clinical answer. They should NOT be obscure or require the candidate to use specific jargon — if a consultant would naturally write "the patient feared losing custody", then "feared losing" and "fear of losing" should both be in the keywords array.

---

## How to Help (Prompt for AI Assistants)

If you are an AI assistant reading this brief, here is how you can best help:

### Task 1: Improve Existing Questions
Review the attached question files and for each question:
- Expand the `keywords` array with more natural synonyms
- Improve `modelWording` to be more specific and clinically precise
- Verify `clueInStem` directly quotes text from the `stem`
- Check severity calibration (no more than 4 critical signals per stem)

### Task 2: Write New Questions
When writing new questions, follow this format exactly (TypeScript):
```typescript
{
  id: "XX-011",           // next sequential ID for the topic
  topic: "topic_key",
  difficulty: "consultant",
  title: "Short Clinical Title",
  candidateRole: "Consultant psychiatrist, [service]",
  setting: "[Specific clinical setting]",
  stem: `[3-4 paragraph vignette with embedded signal clues]`,
  totalMarks: 22,
  signals: [
    {
      id: "s1",
      name: "Signal name",
      category: "category_key",
      severity: "critical",
      clueInStem: "exact quote from stem",
      whyItMatters: "teaching rationale",
      modelWording: "ideal consultant phrasing",
      keywords: ["phrase1", "phrase2", "phrase3", "phrase4"],
    },
    // 6-9 more signals...
  ],
  priorityOrder: {
    urgent: ["s1", "s2", "s3"],
    secondary: ["s4", "s5", "s6"],
    lowYield: ["s7", "s8"],
  },
  modelAnswer: `Paragraph 1: Most critical issues\n\nParagraph 2: Secondary issues\n\nParagraph 3: Systems/governance`,
}
```

### Topics Most Needing New Questions
Priority order for writing new content:
1. `documentation` — 0 questions, needs 10-15 to be viable
2. `discharge_review` — 0 questions, needs 10-15 to be viable
3. `ed` — only 2 questions, high exam prevalence
4. `forensic` — only 1 question
5. `ethics` — only 1 question
6. `rural` — only 1 question
7. `old_age` — only 1 question

---

## Technical Notes for Integration

- All question files export a named array: `QA_STEMS`, `SUP_STEMS`, `ED_STEMS`, etc.
- The main `quizData.ts` imports all arrays and merges them into `QUIZ_STEMS`
- New question files should follow the naming pattern: `[topic]Questions.ts`
- TypeScript types (`QuizStem`, `ExpectedSignal`, `SignalCategory`, etc.) are defined at the top of `quizData.ts`
- When pasting improved or new questions back, maintain exact TypeScript syntax — no trailing commas on last array items, template literals for multi-line strings
