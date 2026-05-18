# MEQ Prep — App Review Pack
**For external AI quality review and question bank expansion**
Generated from live codebase — May 2026

---

## 1. Project Overview

**App name:** RANZCP MEQ Prep
**Purpose:** Signal-detection quiz tool for RANZCP Part B MEQ exam preparation
**Tech stack:** React + Vite, TypeScript, Tailwind CSS v4, wouter routing, local state only (no backend, no database, no AI generation)
**Study modes:**
- Quiz Mode (signal detection — the primary mode)
- Daily MEQ Practice
- Exam Mode (simulated exam)
- Knowledge Brain (admin — uploaded material management)

---

## 2. File Tree (relevant source files)

```
artifacts/meq-prep/src/
├── App.tsx                        — routing
├── main.tsx
├── index.css
├── components/
│   └── Header.tsx
├── lib/
│   ├── quizData.ts                — MASTER QUESTION BANK (all stems + signals)
│   ├── quizEngine.ts              — marking engine, PS-level reasoning, scoring
│   ├── quizSessionStore.ts        — no-repeat tracking (localStorage)
│   ├── brainStore.tsx             — Knowledge Brain state
│   ├── brainConstants.ts          — Brain section labels
│   ├── positionStatementStore.tsx — RANZCP PS storage
│   └── store.tsx                  — candidate registration state
└── pages/
    ├── Registration.tsx
    ├── Phases.tsx                 — study mode selector
    ├── QuizMode.tsx               — MAIN QUIZ INTERFACE
    ├── DailyPractice.tsx
    ├── FullExam.tsx
    ├── SignalQuiz.tsx
    └── brain/
        ├── BrainDashboard.tsx
        ├── BrainUpload.tsx
        ├── BrainReview.tsx
        └── PSBrainDashboard.tsx
```

**Question bank lives in:** `src/lib/quizData.ts`
**Marking engine lives in:** `src/lib/quizEngine.ts`
**No AI generation exists** — all questions are hardcoded TypeScript objects.

---

## 3. Data Schema

### Question (QuizStem)

```typescript
interface QuizStem {
  id: string;                    // e.g. "q1", "ED-001"
  topic: TopicKey;               // one of 20 topic keys (see below)
  difficulty: DifficultyKey;     // "standard" | "difficult" | "consultant"
  title: string;                 // short descriptive title
  candidateRole: string;         // exact role the candidate plays
  setting: string;               // clinical setting
  stem: string;                  // full scenario text (shown to candidate)
  totalMarks: number;            // total weighted marks available
  signals: ExpectedSignal[];     // expected signal map (see below)
  priorityOrder: {
    urgent: string[];            // signal IDs (critical — address first)
    secondary: string[];         // signal IDs (important — address second)
    lowYield: string[];          // signal IDs (optional — lower marks)
  };
  modelAnswer: string;           // full model answer for examiner display
}
```

### Expected Signal (ExpectedSignal)

```typescript
interface ExpectedSignal {
  id: string;                   // e.g. "s1", "s2"
  name: string;                 // signal name (examiner label)
  category: SignalCategory;     // see category list below
  severity: "critical" | "important" | "optional";
  clueInStem: string;           // EXACT text or phrase in the stem that triggers this signal
  whyItMatters: string;         // clinical/legal/system significance
  relatedRisk?: string;         // risk implication
  relatedLegal?: string;        // legal/MHA implication
  relatedCultural?: string;     // cultural safety implication
  relatedSystem?: string;       // systems/governance implication
  modelWording: string;         // exactly how the candidate should have written this signal
  keywords: string[];           // case-insensitive match phrases for marking engine
}
```

### Signal Categories (SignalCategory)

```typescript
type SignalCategory =
  | "immediate_safety"
  | "diagnosis_formulation"
  | "risk_self"
  | "risk_others"
  | "risk_vulnerable"
  | "substance_use"
  | "physical_health"
  | "capacity"
  | "mental_health_act"
  | "consent_refusal"
  | "cultural_safety"
  | "trauma"
  | "family_carer"
  | "child_protection"
  | "collateral"
  | "mdt_conflict"
  | "system_pressure"
  | "governance"
  | "ethics"
  | "disposition";
```

### Quiz Result (QuizResult — output of marking engine)

```typescript
interface QuizResult {
  score: number;
  maxScore: number;
  percentage: number;
  judgement: "strong" | "borderline" | "weak";
  matches: SignalMatch[];          // per-signal: identified? matched keyword?
  overcalled: OvercalledItem[];    // claims not supported by the stem
  criticalMissed: ExpectedSignal[];
  importantMissed: ExpectedSignal[];
  timeUsed: number;
  psDomainsIdentified: string[];   // RANZCP PS domains candidate addressed
  psDomainsMissed: string[];       // RANZCP PS domains candidate missed
  examinerSummary: string;
  hasPSLevel: boolean;             // whether any PS-level signals are present
}
```

### Attempt (QuizAttempt — saved to localStorage)

```typescript
interface QuizAttempt {
  id: string;
  candidateName: string;
  registrationNumber: string;
  topic: string;
  difficulty: string;
  stemId: string;
  stemTitle: string;
  candidateAnswer: string;        // raw free-text from candidate
  result: QuizResult;
  timestamp: Date;
}
```

### Scoring Weights

```
critical signal:  2 marks
important signal: 1 mark
optional signal:  0.5 marks
```

Judgement thresholds: strong ≥ 70%, borderline 50–69%, weak < 50%

---

## 4. Topic List and Current Question Counts

| # | Topic Key | Display Name | Questions |
|---|-----------|--------------|-----------|
| 1 | `random` | Random (all topics) | 27 total |
| 2 | `ed` | Emergency Department | 1 |
| 3 | `perinatal` | Perinatal Psychiatry | 1 |
| 4 | `cl_psychiatry` | Consultation-Liaison | 1 |
| 5 | `forensic` | Forensic Psychiatry | 1 |
| 6 | `old_age` | Old Age Psychiatry | 1 |
| 7 | `child_adolescent` | Child & Adolescent | 1 |
| 8 | `governance` | Governance & Leadership | 1 |
| 9 | `cultural_safety` | Cultural Safety | 1 |
| 10 | `substance_use` | Substance Use | 1 |
| 11 | `risk` | Risk Assessment | 1 |
| 12 | `capacity_mha` | Capacity & Mental Health Act | 1 |
| 13 | `quality_assurance` | Quality & Safety Review | 2 |
| 14 | `supervision` | Supervision & Feedback | 2 |
| 15 | `documentation` | Documentation & Communication | 2 |
| 16 | `discharge_review` | Discharge / Report Review | 2 |
| 17 | `mdt_systems` | MDT Conflict & Systems Pressure | 2 |
| 18 | `rural` | Rural & Resource-Limited | 2 |
| 19 | `psychotherapy` | Psychotherapy & Boundaries | 2 |
| 20 | `ethics` | Ethics & Professionalism | 2 |

**Target:** 30 questions per topic (currently 1–2 per topic; 27 total).

---

## 5. Marking Engine Logic (quizEngine.ts summary)

The marking engine is pure TypeScript — no AI.

**Matching algorithm:**
1. Candidate's free-text answer is lowercased
2. For each expected signal, iterate through its `keywords[]` array
3. If any keyword substring is found in the answer → signal is `identified`
4. Score is weighted sum of identified signals (critical ×2, important ×1, optional ×0.5)
5. Overcalled signals: candidate text is scanned for ~30 vague phrases ("consider everything", "standard care", "generic assessment", etc.) — flagged as overcalls with reason
6. PS-level reasoning is generated per signal category based on RANZCP position statements

**PS-level domain mapping (auto-generated per signal category):**

| Signal Category | PS Domain |
|-----------------|-----------|
| `cultural_safety` | Cultural Safety — power imbalance, coercion risk, systemic discrimination |
| `trauma` | Trauma-Informed Practice — re-traumatisation risk, 5 principles |
| `family_carer` | Family/Carer Partnership — active partnership, psychoeducation obligation |
| `mdt_conflict` | Psychiatrist Role — non-delegable accountability |
| `governance` | Governance & Service Standards |
| `system_pressure` | Rural/Regional Equity & Systems |
| `mental_health_act` | Least Restrictive Care |
| `risk_self` | Suicide Prevention — collaborative safety planning, means restriction |
| `risk_others` | Public Safety & Proportionality |
| `consent_refusal` / `capacity` | Ethics & Medico-Legal Obligations |

---

## 6. Sample Question 1 — Risk Assessment (q11)

```json
{
  "id": "q11",
  "topic": "risk",
  "difficulty": "consultant",
  "title": "Denied Suicidal Ideation — Contextual High-Risk Presentation",
  "candidateRole": "Consultant psychiatrist on call",
  "setting": "Emergency Department",
  "stem": "You are the on-call consultant psychiatrist. At 10 pm you receive a call from the ED registrar about Marcus, a 41-year-old man brought in by ambulance after his neighbour called 000, concerned he had not been seen for three days. On arrival Marcus is calm, well-dressed, and explicitly denies suicidal ideation. He tells the ED team he 'just needed some time alone.'\n\nThe triage note documents: separated from his wife six weeks ago following his disclosure of a second extramarital affair; resigned from his job as a secondary school principal two weeks ago ('by mutual agreement'); his 17-year-old son has refused contact. His GP records show a recent consultation at which he collected a script for 100 tablets of temazepam — he cannot account for the whereabouts of these tablets. He denies alcohol use but there is a faint smell of alcohol noted by the ED nurse. He has no previous psychiatric history and no prior presentations.\n\nThe ED registrar has completed a brief risk screening tool which is scored 'low' and has phoned to ask if Marcus can be discharged with a GP follow-up letter.",
  "totalMarks": 25,
  "expected_signal_map": [
    {
      "id": "s1",
      "name": "Explicit denial of SI does not negate contextual risk — anchoring bias",
      "category": "risk_self",
      "severity": "critical",
      "clueInStem": "Explicitly denies suicidal ideation; ED registrar scores 'low' on screening tool",
      "whyItMatters": "Standardised risk tools used without clinical formulation produce false-negative results in high-stakes presentations; denial of SI is not sufficient to discharge",
      "modelWording": "Marcus's explicit denial of suicidal ideation cannot be taken at face value in the context of acute psychosocial collapse. Risk screening tools do not replace clinical formulation.",
      "keywords": ["denial", "explicit denial", "context", "formul", "screening tool", "false negative", "clinical judgment", "not sufficient"]
    },
    {
      "id": "s2",
      "name": "Unaccounted temazepam — means access",
      "category": "risk_self",
      "severity": "critical",
      "clueInStem": "Script for 100 tablets of temazepam — cannot account for whereabouts",
      "relatedRisk": "100 temazepam tablets represents a potentially lethal quantity; overdose is a common method in male mid-life suicides",
      "whyItMatters": "Access to a lethal means with no account of location is a significant risk factor; safe storage or removal of means is a non-negotiable safety step",
      "modelWording": "The whereabouts of 100 temazepam tablets must be established before any discharge decision. This is an immediate means restriction task.",
      "keywords": ["temazepam", "tablet", "means", "lethal", "accounted", "medication", "means restriction", "safe storage"]
    },
    {
      "id": "s3",
      "name": "Acute psychosocial collapse — multiple concurrent losses",
      "category": "risk_self",
      "severity": "critical",
      "clueInStem": "Separated from wife six weeks ago; resigned from job two weeks ago; son refuses contact",
      "whyItMatters": "Three concurrent identity-defining losses in six weeks represent a catastrophic psychosocial load — a recognised precursor to male mid-life suicide",
      "modelWording": "Marcus has experienced three simultaneous major losses in six weeks: marital separation, career termination, and rupture with his son. This acute psychosocial collapse in a middle-aged man with no previous psychiatric contact represents high contextual suicide risk.",
      "keywords": ["loss", "separation", "job", "career", "son", "psychosocial", "concurrent", "multiple loss", "identity"]
    },
    {
      "id": "s4",
      "name": "Three-day isolation — possible planning behaviour",
      "category": "risk_self",
      "severity": "critical",
      "clueInStem": "Neighbour called 000 — not been seen for three days",
      "whyItMatters": "Self-isolation lasting days is a red flag for suicidal planning",
      "modelWording": "Three days of uncharacteristic isolation prompted a welfare check — this must be interpreted as a possible indicator of suicidal planning, not 'needing time alone'.",
      "keywords": ["isolation", "three days", "welfare check", "planning", "uncharacteristic", "not seen"]
    },
    {
      "id": "s5",
      "name": "Alcohol — undisclosed, clinical note conflicts with denial",
      "category": "substance_use",
      "severity": "important",
      "clueInStem": "Denies alcohol use; faint smell of alcohol noted by nurse",
      "whyItMatters": "Alcohol use disinhibits suicidal behaviour; covert alcohol use in this context elevates risk further",
      "modelWording": "The nurse's observation of alcohol odour conflicts with Marcus's denial. Alcohol in the context of acute loss and means access significantly elevates immediate risk.",
      "keywords": ["alcohol", "smell", "deny", "covert", "substance", "disinhibit"]
    },
    {
      "id": "s6",
      "name": "Registrar supervision — inadequate risk assessment",
      "category": "governance",
      "severity": "important",
      "clueInStem": "ED registrar has scored 'low' and is asking for permission to discharge",
      "whyItMatters": "A consultant must not delegate risk judgment to a screening tool score; this is a non-delegable clinical decision requiring consultant assessment",
      "modelWording": "The registrar's use of a screening tool score to support discharge is a supervision and governance concern. This presentation requires direct consultant assessment, not a phone authorisation.",
      "keywords": ["registrar", "screening tool", "phone", "supervision", "consultant assessment", "non-delegable", "direct assessment"]
    },
    {
      "id": "s7",
      "name": "Shame and concealment — public identity, private collapse",
      "category": "diagnosis_formulation",
      "severity": "important",
      "clueInStem": "Principal of a secondary school; resigned by mutual agreement following disclosure of affair",
      "whyItMatters": "Shame is an independent predictor of suicide in mid-life men; high public identity makes concealment more likely",
      "modelWording": "The combination of public identity, private shame, and career termination creates a significant shame-based suicide risk that may make him less likely to disclose intent.",
      "keywords": ["shame", "principal", "public", "identity", "conceal", "affair", "status loss"]
    }
  ],
  "traps": [
    "Accepting the screening tool score as sufficient for discharge",
    "Accepting denial of SI as the primary clinical finding",
    "Not addressing the unaccounted temazepam explicitly",
    "Approving discharge by telephone without direct assessment"
  ],
  "examiner_focus": "Anchoring bias, means restriction, contextual risk formulation, supervisor non-delegation",
  "priorityOrder": {
    "urgent": ["s2", "s1", "s3", "s4"],
    "secondary": ["s5", "s6"],
    "lowYield": ["s7"]
  },
  "model_answer": "Immediate safety: Marcus's explicit denial of suicidal ideation cannot be accepted at face value. The contextual risk profile — three simultaneous major losses, three days of isolation, unaccounted lethal medication, covert alcohol use, and high public shame — constitutes a high-risk presentation requiring direct consultant assessment.\n\nMeans restriction: The whereabouts of 100 temazepam tablets must be established immediately. If they cannot be located, urgent safety measures including voluntary or involuntary admission must be considered.\n\nRisk formulation: This is not a 'low risk' presentation. The combination of acute psychosocial collapse, male sex, age 41, no previous psychiatric contact, means access, isolation, and denied ideation in a shame-prone person is a recognised pattern for high-lethality suicide attempts.\n\nSupervision: The registrar's telephone request for discharge authorisation based on a screening tool score is not acceptable. I will attend in person."
}
```

---

## 7. Sample Question 2 — Cultural Safety (q1)

```json
{
  "id": "q1",
  "topic": "cultural_safety",
  "difficulty": "consultant",
  "title": "Sudanese Refugee — Medical Ward Refusal",
  "candidateRole": "Junior consultant psychiatrist, consultation-liaison team",
  "setting": "Metropolitan general hospital, medical ward",
  "stem": "You are a junior consultant psychiatrist on the consultation-liaison (CL) team of a metropolitan general hospital. You are asked to review Amara, a 24-year-old Sudanese woman who arrived in Australia 14 months ago as a humanitarian refugee. She was admitted to the general medical ward three days ago with severe malnutrition and dehydration. She weighs 38 kg. The treating physician suspects she has been fasting for religious reasons but is uncertain.\n\nAmara has refused all oral intake since admission and declined insertion of a nasogastric tube. She speaks limited English and has been communicating through her 16-year-old daughter Fatima, who has been the sole interpreter throughout the admission. Amara becomes visibly distressed when male staff enter the room. The nursing staff report she cries frequently at night and does not sleep. One nurse documented 'possible depression or grief — husband died during boat crossing eighteen months ago.'\n\nThe medical team are requesting a capacity assessment and want to know if involuntary treatment with nasogastric feeding can proceed. The ward social worker has not yet been involved. No formal interpreter has been used.",
  "totalMarks": 25,
  "critical_signals": [
    "Fasting vs psychiatric illness vs trauma response — diagnostic uncertainty",
    "Inadequate interpretation — 16-year-old daughter as sole interpreter",
    "Capacity assessment — procedurally invalid without professional interpreter",
    "Complicated grief / traumatic bereavement (husband died on boat)",
    "PTSD — distress with male staff, gender-based trauma",
    "Risk to life — 38 kg, severe malnutrition",
    "Involuntary nasogastric feeding — legal authority required"
  ],
  "important_signals": [
    "Right to refuse if capacity retained",
    "Social isolation — no social worker involved",
    "Risk of pathologising religious/cultural fasting"
  ],
  "optional_signals": [
    "Impact on Fatima (child as interpreter burden)",
    "MDT communication failures — governance",
    "Night-time crying and insomnia (neurovegetative features)"
  ],
  "traps": [
    "Proceeding with capacity assessment via a child interpreter",
    "Accepting the medical team's framing without questioning it",
    "Labelling as depression without ruling out cultural/grief context",
    "Authorising involuntary feeding without legal authority"
  ],
  "examiner_focus": "Cultural safety, interpreter obligations, capacity procedure, trauma-informed care, legal authority for involuntary treatment"
}
```

---

## 8. Sample Question 3 — Quality & Safety Review (q12)

```json
{
  "id": "q12",
  "topic": "quality_assurance",
  "difficulty": "consultant",
  "title": "Post-Discharge Suicide — Adverse Event Response",
  "candidateRole": "Director of psychiatry / senior consultant",
  "setting": "Inpatient psychiatric unit, metropolitan hospital",
  "stem": "It is Monday morning. You are the director of a 20-bed acute inpatient psychiatric unit. The clinical nurse consultant informs you that Kevin, a 38-year-old man admitted two weeks ago following a serious suicide attempt, was discharged on Friday afternoon by the on-call registrar without your knowledge. Kevin was found dead on Saturday night — his wife discovered him; he had hanged himself in the garage.\n\nYou review the Friday discharge note: the registrar documented that Kevin 'expressed readiness to go home' and 'denied current suicidal ideation.' The risk assessment section is a single line: 'SI denied. Agreed to follow up with GP.' There is no documentation of collateral contact with Kevin's wife, no safety plan, no relapse prevention plan, no next-of-kin notification, and no consultant review. The GP had not been notified. Kevin's wife says she was not contacted before discharge and was 'shocked' when he arrived home on Friday.\n\nYour staff are distressed. A junior nurse who was on shift Friday tells you she had raised concerns to the registrar about Kevin's flat affect and early discharge.",
  "totalMarks": 25,
  "critical_signals": [
    "Open disclosure — immediate obligation to family",
    "Mandatory critical incident reporting — coronial notification",
    "Documentation failure — inadequate discharge note",
    "Nursing escalation not acted on — safety culture failure"
  ],
  "important_signals": [
    "Staff wellbeing — critical incident debriefing required",
    "Root cause analysis — systems failure, not individual error"
  ],
  "traps": [
    "Focusing only on the registrar's individual error without systems framing",
    "Delaying family contact",
    "Failing to name the nursing escalation as a systems failure"
  ],
  "examiner_focus": "Open disclosure, mandatory reporting, governance systems, staff wellbeing, RCA"
}
```

---

## 9. Current Marking Engine Feedback — Sample Output Structure

After submission, the candidate sees:

```
SCORE CARD
  X / Y marks (Z%)
  Judgement: Strong / Borderline / Weak
  Time used: X min Y sec

RANZCP PS-LEVEL MARKING PANEL (appears if any PS-level signals exist)
  Domains identified: [list]
  Domains missed: [list]
  Marking rule: Marks are given only for what was written.

PER-SIGNAL FEEDBACK (for each signal, identified or missed):
  Part 1 — Exact clue in the stem that triggered this signal
  Part 2 — Why this signal was expected (clinical significance)
  Part 3 — Clinical/legal/cultural/system implication (expandable)
  Part 4 — Why it matters at RANZCP/consultant level (PS reasoning, expandable, violet styling)
  Part 5 — How the candidate should have written it (model wording)

OVERCALLED SIGNALS
  Candidate claim → Why it was not supported by the stem

MODEL ANSWER (expandable)
```

---

## 10. AI / Generation Prompts

**There are none.** The app contains no AI generation, no OpenAI/Anthropic API calls, and no generation prompts. All questions are hardcoded TypeScript objects. The marking engine is deterministic keyword matching, not AI-based.

---

## 11. Current Limitations

1. **Question bank depth:** 1–2 questions per topic (27 total). Target is 30 per topic (600 total). The architecture supports adding more — each additional stem is one TypeScript object appended to the `QUIZ_STEMS` array in `quizData.ts`.

2. **Keyword matching only:** The marking engine matches candidate answers using substring keyword matching. It does not use semantic or embedding-based matching. Synonyms not in the `keywords[]` array will be missed.

3. **No image/document review questions:** The attached spec requested a "document review" question type (e.g. reviewing a discharge summary screenshot). This question type exists in the spec but is not yet implemented. The schema supports it but no stems of this type exist.

4. **Difficulty filter:** All current stems are `"consultant"` difficulty. Selecting "Standard" or "Difficult" in the setup screen returns no stems with that difficulty level (falls back to all difficulties). More stems at each difficulty level are needed.

5. **No admin quality review:** A question bank quality review admin page (approve / archive / regenerate) was specified but not yet built.

6. **No AI generation button:** A "Generate 30 cases for this topic" admin button was specified but not yet built. Currently all questions are written manually.

7. **Session tracking:** Progress tracking resets on browser close if `localStorage` is cleared.

---

## 12. How to Add More Questions (for the developer)

Append new stems to the `QUIZ_STEMS` array in `src/lib/quizData.ts`.

Each stem follows this pattern:

```typescript
{
  id: "q28",                          // next sequential ID
  topic: "ed",                        // from TopicKey union
  difficulty: "consultant",
  title: "Short descriptive title",
  candidateRole: "Consultant psychiatrist on call",
  setting: "Metropolitan Emergency Department",
  stem: `Full scenario text here...`,
  totalMarks: 22,
  signals: [
    {
      id: "s1",
      name: "Signal name — short descriptor",
      category: "immediate_safety",   // from SignalCategory union
      severity: "critical",           // "critical" | "important" | "optional"
      clueInStem: "Exact phrase from the stem that triggers this signal",
      whyItMatters: "Clinical, legal, cultural, or system significance",
      relatedRisk: "Optional — risk implication",
      relatedLegal: "Optional — legal/MHA implication",
      relatedCultural: "Optional — cultural safety implication",
      relatedSystem: "Optional — systems implication",
      modelWording: "Exactly how the candidate should have written this signal",
      keywords: ["keyword1", "keyword2", "partial match ok"],
    },
    // ... more signals
  ],
  priorityOrder: {
    urgent: ["s1", "s2"],
    secondary: ["s3", "s4"],
    lowYield: ["s5"],
  },
  modelAnswer: `Full model answer text...`,
},
```

**Quality rules for every signal:**
- `clueInStem` must quote actual words or phrases from the `stem`
- `keywords[]` must include realistic substrings a candidate might write (not exact phrases)
- Signal must be justified by the stem — not generic psychiatric teaching
- Do not add signals not supported by the stem content

---

## 13. Requested Expansion Format (for question generation)

To add generated questions, use this exact TypeScript structure and append to `QUIZ_STEMS`:

```typescript
{
  id: "ED-002",
  topic: "ed",
  difficulty: "consultant",
  title: "[Short title]",
  candidateRole: "Consultant psychiatrist on call",
  setting: "[Specific ED setting]",
  stem: `[Full scenario — 150–300 words — include: diagnostic uncertainty, safety issue, capacity/MHA question, MDT or family complexity, and at least one of: cultural safety, trauma, governance, or resource limitation]`,
  totalMarks: 22,
  signals: [
    {
      id: "s1",
      name: "[Signal name]",
      category: "immediate_safety",
      severity: "critical",
      clueInStem: "[Exact phrase from stem above]",
      whyItMatters: "[Clinical/legal/system significance — no generic teaching]",
      relatedLegal: "[Optional]",
      relatedCultural: "[Optional]",
      relatedSystem: "[Optional]",
      modelWording: "[Exact consultant-level wording]",
      keywords: ["keyword1", "keyword2", "partial phrase"],
    },
    // 4–7 signals per stem recommended
  ],
  priorityOrder: {
    urgent: ["s1", "s2"],
    secondary: ["s3", "s4"],
    lowYield: ["s5"],
  },
  modelAnswer: `[Full model answer — structured by domain — 200–400 words]`,
},
```

---

## 14. Summary for ChatGPT

**What exists:** A real, working question bank with 27 fully structured consultant-level questions. Each question has a complete signal map with exact stem clues, severity weights, model wording, keyword matching arrays, and PS-level RANZCP reasoning. The marking engine is live.

**What is missing:** Volume. Each topic needs ~28–29 more questions. The architecture is ready — just append TypeScript objects to `QUIZ_STEMS`.

**What ChatGPT should generate:** TypeScript objects matching the schema above, in blocks of 5–10 questions per response, for each topic. Every signal must cite a specific phrase from the stem. No generic teaching. No hints before submission. Consultant-level only.

**Critical quality rule:** Every `clueInStem` field must quote actual words from the `stem` field of the same question. If no exact clue exists in the stem, either add the clue to the stem or remove the signal.
