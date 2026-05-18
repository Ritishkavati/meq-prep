# MEQ Prep — Code Export Pack
**For ChatGPT — question generation and expansion**
Contains: TypeScript types, architecture answers, full marking engine, session store.

---

## ARCHITECTURE ANSWERS

### 1. Exact TopicKey union values

```typescript
type TopicKey =
  | "random"
  | "ed"
  | "perinatal"
  | "cl_psychiatry"
  | "forensic"
  | "old_age"
  | "child_adolescent"
  | "governance"
  | "cultural_safety"
  | "substance_use"
  | "risk"
  | "capacity_mha"
  | "quality_assurance"
  | "supervision"
  | "documentation"
  | "discharge_review"
  | "mdt_systems"
  | "rural"
  | "psychotherapy"
  | "ethics";
```

**Note:** `random` is a virtual topic meaning "all stems" — do NOT use `"random"` as the `topic` field on any stem. All real stems use one of the 19 specific topic keys above.

### 2. Exact DifficultyKey values

```typescript
type DifficultyKey = "standard" | "difficult" | "consultant";
```

All 27 existing stems use `"consultant"`. New stems should also use `"consultant"` unless specifically creating easier-level content.

### 3. ID convention — can topic-based IDs be used?

**Yes.** The `id` field is typed as `string`, not a sequential number. There is no auto-increment. Use topic-based IDs for all new questions. Recommended format:

```
"QA-001"   → quality_assurance
"QA-002"   → quality_assurance
"SUP-001"  → supervision
"DOC-001"  → documentation
"DIS-001"  → discharge_review
"ED-001"   → ed  (note: existing q2 uses id "q2", so start at "ED-002" to avoid collision)
"PER-001"  → perinatal  (existing q3 = "q3", so "PER-002" onward)
"CL-001"   → cl_psychiatry
"FOR-001"  → forensic
"OA-001"   → old_age
"CA-001"   → child_adolescent
"GOV-001"  → governance
"CS-001"   → cultural_safety
"SU-001"   → substance_use
"RISK-001" → risk
"CAP-001"  → capacity_mha
"MDT-001"  → mdt_systems
"RUR-001"  → rural
"PSY-001"  → psychotherapy
"ETH-001"  → ethics
```

**Existing IDs that must not be reused:** q1 through q27.

### 4. Can questions be split into separate TypeScript files?

**Yes — and it is recommended for scale.** The approach:

**Step A — Create topic files**, e.g.:

```
src/lib/questions/qaQuestions.ts
src/lib/questions/supervisionQuestions.ts
src/lib/questions/documentationQuestions.ts
src/lib/questions/edQuestions.ts
... etc
```

Each file exports a typed array:

```typescript
// src/lib/questions/qaQuestions.ts
import { QuizStem } from "../quizData";

export const QA_STEMS: QuizStem[] = [
  {
    id: "QA-001",
    topic: "quality_assurance",
    // ... rest of stem
  },
  // ...
];
```

**Step B — Import and merge in quizData.ts:**

```typescript
import { QA_STEMS } from "./questions/qaQuestions";
import { SUP_STEMS } from "./questions/supervisionQuestions";
// ...

export const QUIZ_STEMS: QuizStem[] = [
  ...ORIGINAL_STEMS,  // q1–q27
  ...QA_STEMS,
  ...SUP_STEMS,
  // ...
];
```

This keeps each topic file manageable (~50 questions × 30 lines = ~1500 lines per file vs 3000+ in one file).

---

## FULL TYPESCRIPT TYPES (src/lib/quizData.ts — lines 1–108)

```typescript
export type SignalSeverity = "critical" | "important" | "optional";

export type SignalCategory =
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

export interface ExpectedSignal {
  id: string;
  name: string;
  category: SignalCategory;
  severity: SignalSeverity;
  clueInStem: string;        // MUST quote exact words from the stem field
  whyItMatters: string;
  relatedRisk?: string;      // optional — for risk-bearing signals
  relatedLegal?: string;     // optional — MHA / legal implication
  relatedCultural?: string;  // optional — triggers extra PS-level cultural reasoning in UI
  relatedSystem?: string;    // optional — triggers extra PS-level governance reasoning in UI
  modelWording: string;      // consultant-level wording the candidate should have used
  keywords: string[];        // lowercase substring matches against candidate free text
}

export interface QuizStem {
  id: string;
  topic: TopicKey;
  difficulty: DifficultyKey;
  title: string;
  candidateRole: string;
  setting: string;
  stem: string;
  totalMarks: number;
  signals: ExpectedSignal[];
  priorityOrder: {
    urgent: string[];     // signal IDs — critical, address first
    secondary: string[];  // signal IDs — important, address second
    lowYield: string[];   // signal IDs — optional, lower marks
  };
  modelAnswer: string;
}

export type TopicKey =
  | "random"
  | "ed"
  | "perinatal"
  | "cl_psychiatry"
  | "forensic"
  | "old_age"
  | "child_adolescent"
  | "governance"
  | "cultural_safety"
  | "substance_use"
  | "risk"
  | "capacity_mha"
  | "quality_assurance"
  | "supervision"
  | "documentation"
  | "discharge_review"
  | "mdt_systems"
  | "rural"
  | "psychotherapy"
  | "ethics";

export type DifficultyKey = "standard" | "difficult" | "consultant";
```

---

## FULL MARKING ENGINE (src/lib/quizEngine.ts)

```typescript
import { QuizStem, ExpectedSignal, SignalCategory } from "./quizData";

export interface SignalMatch {
  signal: ExpectedSignal;
  identified: boolean;
  matchedKeyword?: string;
  psLevelReason?: string;
  psStatement?: string;
}

export interface OvercalledItem {
  text: string;
  reason: string;
  isPSLevel?: boolean;
}

export interface QuizResult {
  score: number;
  maxScore: number;
  percentage: number;
  judgement: "strong" | "borderline" | "weak";
  matches: SignalMatch[];
  overcalled: OvercalledItem[];
  criticalMissed: ExpectedSignal[];
  importantMissed: ExpectedSignal[];
  timeUsed: number;
  psDomainsIdentified: string[];
  psDomainsMissed: string[];
  examinerSummary: string;
  hasPSLevel: boolean;
}

export interface QuizAttempt {
  id: string;
  candidateName: string;
  registrationNumber: string;
  topic: string;
  difficulty: string;
  stemId: string;
  stemTitle: string;
  candidateAnswer: string;
  result: QuizResult;
  timestamp: Date;
}

const STORAGE_KEY = "meq_quiz_attempts";

// Scoring weights
const WEIGHTS: Record<string, number> = {
  critical: 2,
  important: 1,
  optional: 0.5,
};

// PS-level domain labels (used in UI and examiner summaries)
const PS_DOMAIN_LABELS: Partial<Record<SignalCategory, string>> = {
  cultural_safety: "Cultural Safety",
  trauma: "Trauma-Informed Care",
  family_carer: "Family / Whānau / Carer Partnership",
  mdt_conflict: "Psychiatrist Role & MDT Leadership",
  governance: "Governance & Service Standards",
  system_pressure: "Rural / Regional Inequity & Systems",
  mental_health_act: "Least Restrictive Care",
  risk_self: "Suicide Prevention Systems",
  risk_others: "Public Safety & Proportionality",
  consent_refusal: "Ethics & Medico-Legal Obligations",
  capacity: "Ethics & Medico-Legal Obligations",
};

// PS-level reasoning per signal category — displayed in results panel
function generatePSReason(signal: ExpectedSignal): { reason: string; statement: string } | null {
  const { category } = signal;

  if (category === "cultural_safety") {
    return {
      reason: "The stem contains culturally specific details that are clinical variables, not background information. RANZCP position statements affirm that cultural safety is a clinical and systems obligation — not merely a communication preference or attitude. Candidates must identify cultural safety as a distinct clinical domain encompassing power imbalance, coercion risk, intergenerational trauma, distrust of services, community and kinship structures, and systemic discrimination. Stating 'use an interpreter' or 'consider cultural factors' without this framing is a registrar-level response. Consultant-level answers name the clinical impact of cultural unsafety on engagement, risk, coercion, family involvement, and treatment outcome.",
      statement: "RANZCP PS on Aboriginal and Torres Strait Islander Mental Health / Māori Mental Health — cultural safety as a clinical and systems obligation, not a communication preference.",
    };
  }
  if (category === "trauma") {
    return {
      reason: "RANZCP endorses trauma-informed practice as a universal clinical framework — not a specialist intervention for patients with a PTSD diagnosis. Identifying 'trauma history' in the stem is insufficient. Candidates must recognise re-traumatisation risk in the current clinical encounter (ED, inpatient admission, seclusion, coercive treatment, dismissive communication), apply the 5 trauma-informed principles (safety, trustworthiness, choice, collaboration, empowerment), and understand complex trauma as distinct from single-event PTSD.",
      statement: "RANZCP PS on Trauma-Informed Practice — universal clinical framework, not specialist intervention. Re-traumatisation risk in clinical settings is a clinical obligation to address.",
    };
  }
  if (category === "family_carer") {
    return {
      reason: "RANZCP affirms families and carers as clinical partners — not obstacles to patient autonomy and not passive recipients of information. Consultant-level candidates must: actively engage families; provide psychoeducation as a clinical obligation; navigate confidentiality without dismissing carer information needs; and assess carer burden as a separate clinical problem requiring its own response.",
      statement: "RANZCP PS on Families and Carers — partnership, psychoeducation obligation, carer burden assessment, and confidentiality navigation.",
    };
  }
  if (category === "mdt_conflict") {
    return {
      reason: "RANZCP defines the consultant psychiatrist as the accountable clinician for diagnosis, risk formulation, and treatment direction — this accountability cannot be fully delegated to the MDT, the team nurse, or the registrar. In MDT conflict or disagreement, the consultant psychiatrist must take a clear clinical position, articulate the clinical reasoning, document it, and lead the resolution.",
      statement: "RANZCP PS on the Role of the Psychiatrist — non-delegable accountability for diagnosis, risk, and legal decisions; MDT leadership in conflict.",
    };
  }
  if (category === "governance") {
    return {
      reason: "RANZCP defines clinical governance participation as a professional obligation under the role of the psychiatrist framework — not optional, and not a secondary concern after the clinical encounter. Consultant-level candidates must demonstrate systems-level thinking: clinical incident identification and reporting, root cause analysis, systemic advocacy, quality improvement, and recognition that individual clinical errors are often systems failures.",
      statement: "RANZCP PS on the Role of the Psychiatrist — clinical governance, advocacy, and systems leadership as professional obligations.",
    };
  }
  if (category === "system_pressure") {
    return {
      reason: "RANZCP affirms equity of access regardless of geographic location or resource constraints — rural and remote patients have the right to equivalent psychiatric care. Candidates must identify service inequity as a named clinical and systems problem, not merely adapt practice without naming the equity dimension.",
      statement: "RANZCP PS on Rural and Remote Psychiatry — service equity as a right; advocacy and systemic adaptation as consultant obligations.",
    };
  }
  if (category === "mental_health_act") {
    return {
      reason: "RANZCP affirms the principle of least restrictive care as a core clinical obligation — MHA use and compulsory treatment must be justified as the minimum necessary intervention, with active consideration of alternatives documented. Over-reliance on compulsory treatment without justifying it as the least restrictive option demonstrates sub-consultant-level reasoning.",
      statement: "RANZCP PS on Seclusion and Restraint / Suicide Prevention — least restrictive principle; compulsory treatment requires active justification, not default use.",
    };
  }
  if (category === "risk_self") {
    return {
      reason: "RANZCP suicide prevention statement affirms that collaborative safety planning is more effective than admission alone, and must be the primary response in most cases. Means restriction is the single most evidence-based suicide prevention intervention and must always be explicitly assessed and addressed — not simply noted. Candidates who identify only 'high risk — admit' without collaborative safety planning, means restriction, family involvement, and discharge planning are not demonstrating consultant-level suicide prevention awareness.",
      statement: "RANZCP PS on Suicide Prevention — collaborative safety planning; means restriction; least restrictive principle; discharge as high-risk period.",
    };
  }
  if (category === "risk_others") {
    return {
      reason: "Public safety is a core duty, but at consultant level it must be framed within ethical, proportionate, and least-restrictive principles. Candidates must demonstrate that they have considered the full clinical picture — not defaulted to restrictive or coercive responses without clinical justification.",
      statement: "RANZCP PS on the Role of the Psychiatrist — public safety within an ethical, proportionate, and least-restrictive framework.",
    };
  }
  if (category === "consent_refusal" || category === "capacity") {
    return {
      reason: "Ethics and medico-legal reasoning are explicit consultant-level obligations. Candidates must demonstrate understanding of capacity as a decision-specific, time-specific, fluctuating assessment — not a binary label. The ethical framework (autonomy, beneficence, non-maleficence, justice), substitute decision-making hierarchy, and documentation obligations are all expected.",
      statement: "RANZCP PS on the Role of the Psychiatrist — ethics and medico-legal obligations as core consultant accountabilities.",
    };
  }
  if (signal.relatedCultural) {
    return {
      reason: `This signal has a cultural safety dimension. RANZCP affirms that cultural context is a clinical variable — not an administrative background factor. ${signal.relatedCultural}`,
      statement: "RANZCP PS on Cultural Safety — cultural safety as clinical and systems obligation, not a communication adjustment.",
    };
  }
  if (signal.relatedSystem) {
    return {
      reason: `This signal has a systems and governance dimension. RANZCP affirms that consultant psychiatrists must demonstrate systems leadership — not only individual clinical management. ${signal.relatedSystem}`,
      statement: "RANZCP PS on the Role of the Psychiatrist — clinical governance and systems leadership as professional obligations.",
    };
  }
  return null;
}

function generateExaminerSummary(matches: SignalMatch[]): string {
  const psRelevantMissed = matches.filter((m) => !m.identified && m.psLevelReason);
  const psRelevantIdentified = matches.filter((m) => m.identified && m.psLevelReason);

  if (psRelevantMissed.length === 0 && psRelevantIdentified.length > 0) {
    return `This candidate demonstrated consultant-level awareness of RANZCP position statement domains. ${psRelevantIdentified.length} PS-relevant signal${psRelevantIdentified.length !== 1 ? "s were" : " was"} correctly identified and framed at the appropriate level.`;
  }
  if (psRelevantMissed.length > 0 && psRelevantIdentified.length > 0) {
    const missedDomains = [...new Set(psRelevantMissed.map((m) => PS_DOMAIN_LABELS[m.signal.category] ?? m.signal.category))];
    return `This candidate identified some but not all RANZCP position-statement-level signals. ${psRelevantMissed.length} PS-relevant signal${psRelevantMissed.length !== 1 ? "s were" : " was"} missed. Missed consultant-level domains: ${missedDomains.join("; ")}. These are not optional — they are core professional obligations at the RANZCP fellowship level.`;
  }
  if (psRelevantMissed.length > 0 && psRelevantIdentified.length === 0) {
    const missedDomains = [...new Set(psRelevantMissed.map((m) => PS_DOMAIN_LABELS[m.signal.category] ?? m.signal.category))];
    return `This candidate did not demonstrate consultant-level awareness of any RANZCP position-statement-relevant domain in this stem. Missed domains: ${missedDomains.join("; ")}. At the RANZCP fellowship level, these are mandatory — not advanced extras.`;
  }
  return "This stem does not have explicit RANZCP position-statement-level signals beyond standard clinical marking.";
}

export function assessAnswer(stem: QuizStem, candidateAnswer: string, timeUsed: number): QuizResult {
  const normalized = candidateAnswer.toLowerCase();

  const matches: SignalMatch[] = stem.signals.map((signal) => {
    const matchedKeyword = signal.keywords.find((kw) => normalized.includes(kw.toLowerCase()));
    const psNote = generatePSReason(signal);
    return {
      signal,
      identified: !!matchedKeyword,
      matchedKeyword,
      psLevelReason: psNote?.reason,
      psStatement: psNote?.statement,
    };
  });

  let earned = 0;
  let possible = 0;
  for (const m of matches) {
    const w = WEIGHTS[m.signal.severity] ?? 1;
    possible += w;
    if (m.identified) earned += w;
  }

  const maxScore = stem.totalMarks;
  const rawPct = possible > 0 ? earned / possible : 0;
  const score = Math.round(rawPct * maxScore);
  const percentage = Math.round(rawPct * 100);

  let judgement: QuizResult["judgement"] = "weak";
  if (percentage >= 70) judgement = "strong";
  else if (percentage >= 50) judgement = "borderline";

  const criticalMissed = matches.filter((m) => !m.identified && m.signal.severity === "critical").map((m) => m.signal);
  const importantMissed = matches.filter((m) => !m.identified && m.signal.severity === "important").map((m) => m.signal);

  const psDomainsIdentified = [...new Set(matches.filter((m) => m.identified && m.psLevelReason).map((m) => PS_DOMAIN_LABELS[m.signal.category] ?? m.signal.category))];
  const psDomainsMissed = [...new Set(matches.filter((m) => !m.identified && m.psLevelReason).map((m) => PS_DOMAIN_LABELS[m.signal.category] ?? m.signal.category))];
  const hasPSLevel = matches.some((m) => !!m.psLevelReason);
  const examinerSummary = generateExaminerSummary(matches);
  const overcalled = detectOvercalled(normalized, matches);

  return { score, maxScore, percentage, judgement, matches, overcalled, criticalMissed, importantMissed, timeUsed, psDomainsIdentified, psDomainsMissed, examinerSummary, hasPSLevel };
}

// Vague / overcalled term detection — penalised in feedback panel
function detectOvercalled(normalized: string, matches: SignalMatch[]): OvercalledItem[] {
  const overcalled: OvercalledItem[] = [];

  const penalties: OvercalledItem[] = [
    { text: "everything", reason: "Vague and non-specific. 'Consider everything' is not a clinical signal.", isPSLevel: false },
    { text: "all risks", reason: "Too generic. Specific risks must be named and linked to the stem.", isPSLevel: false },
    { text: "medication review", reason: "Management step, not a signal, unless triggered by a specific stem clue.", isPSLevel: false },
    { text: "monitor closely", reason: "'Monitor closely' gives no information about what, how often, or what triggers change.", isPSLevel: false },
    { text: "consider cultural factors", reason: "Registrar-level phrase. Name the exact cultural safety issue and its clinical implications. 'Consider cultural factors' will not attract PS-level marks.", isPSLevel: true },
    { text: "cultural factors", reason: "Vague. Name the specific cultural safety issue, the clinical consequence, and the required response.", isPSLevel: true },
    { text: "culturally sensitive", reason: "Generic attitude language. Cultural safety is a systems and clinical obligation — not a personal disposition.", isPSLevel: true },
    { text: "culturally appropriate", reason: "Too vague. Name what culturally appropriate care specifically requires in this stem.", isPSLevel: true },
    { text: "explore trauma", reason: "Insufficient. Identify re-traumatisation risk in the current encounter, apply the 5 principles, distinguish complex from single-event PTSD.", isPSLevel: true },
    { text: "trauma history", reason: "Noting history is not trauma-informed practice. Name what creates re-traumatisation risk here.", isPSLevel: true },
    { text: "involve family", reason: "Vague. RANZCP standards require: active engagement, psychoeducation, confidentiality navigation, carer burden assessment.", isPSLevel: true },
    { text: "inform family", reason: "Below consultant level. Name what you will share, what you cannot share without consent, and why.", isPSLevel: true },
    { text: "consult the team", reason: "The consultant holds non-delegable accountability. State your own clinical position and how you will lead.", isPSLevel: true },
    { text: "refer to appropriate services", reason: "Non-specific. Name the service, the referral pathway, why it is indicated, and what you expect.", isPSLevel: true },
    { text: "safety plan", reason: "RANZCP standard is collaborative safety planning. Name the elements: coping strategies, means restriction, crisis contacts, family role, follow-up.", isPSLevel: true },
  ];

  for (const penalty of penalties) {
    if (normalized.includes(penalty.text)) {
      const alreadyCovered = matches.some((m) => m.identified && m.matchedKeyword?.includes(penalty.text));
      if (!alreadyCovered) overcalled.push(penalty);
    }
  }
  return overcalled;
}

export const CATEGORY_LABELS: Record<SignalCategory, string> = {
  immediate_safety: "Immediate Safety",
  diagnosis_formulation: "Diagnosis / Formulation",
  risk_self: "Risk to Self",
  risk_others: "Risk to Others",
  risk_vulnerable: "Risk to Vulnerable Person",
  substance_use: "Substance Use",
  physical_health: "Physical Health",
  capacity: "Capacity",
  mental_health_act: "Mental Health Act",
  consent_refusal: "Consent / Refusal",
  cultural_safety: "Cultural Safety",
  trauma: "Trauma-Informed Care",
  family_carer: "Family / Carer",
  child_protection: "Child Protection",
  collateral: "Collateral History",
  mdt_conflict: "MDT / Team Issues",
  system_pressure: "System / Resource Pressure",
  governance: "Governance",
  ethics: "Ethics & Professionalism",
  disposition: "Disposition Planning",
};

export function saveAttempt(attempt: QuizAttempt): void {
  try {
    const existing = loadAttempts();
    existing.unshift(attempt);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));
  } catch { /* localStorage unavailable */ }
}

export function loadAttempts(): QuizAttempt[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return parsed.map((a: QuizAttempt) => ({ ...a, timestamp: new Date(a.timestamp) }));
  } catch { return []; }
}

export function createAttempt(
  candidateName: string,
  registrationNumber: string,
  stem: QuizStem,
  answer: string,
  result: QuizResult
): QuizAttempt {
  return {
    id: Math.random().toString(36).slice(2, 10),
    candidateName,
    registrationNumber,
    topic: stem.topic,
    difficulty: stem.difficulty,
    stemId: stem.id,
    stemTitle: stem.title,
    candidateAnswer: answer,
    result,
    timestamp: new Date(),
  };
}
```

---

## FULL SESSION STORE (src/lib/quizSessionStore.ts)

```typescript
import { QuizStem, TopicKey, DifficultyKey, QUIZ_STEMS } from "./quizData";

const STORAGE_KEY = "meq_quiz_session_v2";

interface SessionState {
  seenByTopic: Record<string, string[]>;
}

function load(): SessionState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { seenByTopic: {} };
}

function save(state: SessionState) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
}

function poolFor(topic: TopicKey, difficulty?: DifficultyKey): QuizStem[] {
  let pool = topic === "random" ? [...QUIZ_STEMS] : QUIZ_STEMS.filter((s) => s.topic === topic);
  if (difficulty) {
    const filtered = pool.filter((s) => s.difficulty === difficulty);
    if (filtered.length > 0) pool = filtered;
  }
  return pool;
}

export interface TopicStats {
  available: number;
  attempted: number;
  remaining: number;
}

// Returns total counts regardless of difficulty (for display purposes)
export function getTopicStats(topic: TopicKey, difficulty?: DifficultyKey): TopicStats {
  const pool = poolFor(topic, difficulty);
  const state = load();
  const seen = state.seenByTopic[topic] ?? [];
  const attempted = seen.filter((id) => pool.some((s) => s.id === id)).length;
  const remaining = pool.filter((s) => !seen.includes(s.id)).length;
  return { available: pool.length, attempted, remaining };
}

// Returns a stem not yet seen in this session; resets cycle when all exhausted
export function getNextStem(topic: TopicKey, difficulty?: DifficultyKey, currentStemId?: string): QuizStem {
  const pool = poolFor(topic, difficulty);
  if (pool.length === 0) return QUIZ_STEMS[0];

  const state = load();
  const topicKey = topic + (difficulty ? `:${difficulty}` : "");
  const seen: string[] = state.seenByTopic[topicKey] ?? [];

  let unseen = pool.filter((s) => !seen.includes(s.id) && s.id !== currentStemId);

  if (unseen.length === 0) {
    state.seenByTopic[topicKey] = currentStemId ? [currentStemId] : [];
    save(state);
    unseen = pool.filter((s) => s.id !== currentStemId);
    if (unseen.length === 0) unseen = pool;
  }

  const stem = unseen[Math.floor(Math.random() * unseen.length)];
  const newSeen = [...(state.seenByTopic[topicKey] ?? [])];
  if (!newSeen.includes(stem.id)) newSeen.push(stem.id);
  state.seenByTopic[topicKey] = newSeen;
  save(state);
  return stem;
}

export function resetTopicProgress(topic: TopicKey) {
  const state = load();
  Object.keys(state.seenByTopic).forEach((k) => {
    if (k === topic || k.startsWith(topic + ":")) delete state.seenByTopic[k];
  });
  save(state);
}

export function resetAllProgress() {
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
}
```

---

## HOW THE MARKING ENGINE USES keywords[]

The matching algorithm is pure substring search, case-insensitive:

```typescript
const matchedKeyword = signal.keywords.find((kw) =>
  candidateAnswer.toLowerCase().includes(kw.toLowerCase())
);
```

**Implications for keyword design:**

1. **Partial matches work.** `"formul"` matches "formulation", "formulating", "clinical formulation".
2. **Multi-word phrases work.** `"means restriction"` only matches if candidate writes that exact phrase.
3. **Short strings over-match.** `"risk"` would match almost any answer. Use `"contextual risk"`, `"risk formulation"`, `"risk factor"` instead.
4. **Design keywords to catch paraphrasing.** If the signal is "Temazepam means access", keywords should include: `["temazepam", "tablet", "means", "lethal", "means restriction", "medication safety", "safe storage", "counted"]`.
5. **5–8 keywords per signal is optimal.** Too few = false negatives. Too many = no benefit.
6. **Never include the signal name as a keyword.** The candidate won't write "Unaccounted temazepam — means access" — they'll write "the tablets need to be located".

---

## RECOMMENDED GENERATION ORDER (Phase 1 priority)

Based on current topic counts (1–2 questions each) and exam relevance:

| Priority | Topic key | Current count | Target | Prefix |
|----------|-----------|--------------|--------|--------|
| 1 | `quality_assurance` | 2 | 30 | QA- |
| 2 | `supervision` | 2 | 30 | SUP- |
| 3 | `documentation` | 2 | 30 | DOC- |
| 4 | `discharge_review` | 2 | 30 | DIS- |
| 5 | `ed` | 1 | 30 | ED- |
| 6 | `perinatal` | 1 | 30 | PER- |
| 7 | `capacity_mha` | 1 | 30 | CAP- |
| 8 | `governance` | 1 | 30 | GOV- |
| 9 | `risk` | 1 | 30 | RISK- |
| 10 | `mdt_systems` | 2 | 30 | MDT- |

---

## HOW TO PASTE GENERATED QUESTIONS INTO REPLIT

**Option A (simplest, no restructuring):** Paste new stems directly into `src/lib/quizData.ts` inside the `QUIZ_STEMS` array, before the closing `];`.

**Option B (recommended for 300+ questions):** Create topic files and import them:

1. Create `src/lib/questions/qaQuestions.ts`
2. Paste QA stems there as `export const QA_STEMS: QuizStem[] = [ ... ]`
3. In `quizData.ts`, add: `import { QA_STEMS } from "./questions/qaQuestions";`
4. Spread into `QUIZ_STEMS`: `export const QUIZ_STEMS: QuizStem[] = [...ORIGINAL_STEMS, ...QA_STEMS, ...]`

**Replit AI will handle the import wiring** — ChatGPT only needs to produce the array content.

---

## QUALITY CHECKLIST FOR EVERY GENERATED STEM

Before finalising each stem, verify:

- [ ] `clueInStem` quotes actual words from `stem` — not a paraphrase
- [ ] `keywords[]` includes 5–8 realistic paraphrase substrings
- [ ] No signal exists without a corresponding clue in the stem
- [ ] At least 2 critical signals, 2–3 important, 1–2 optional
- [ ] `totalMarks` = reasonable given signal count (typically 18–28)
- [ ] `priorityOrder.urgent` lists only critical signal IDs
- [ ] `modelAnswer` is structured by clinical domain (safety → formulation → legal → systems)
- [ ] Stem contains: diagnostic uncertainty + safety issue + complexity (MDT/family/capacity/cultural/governance) — at least 2 of these
- [ ] `candidateRole` is specific (not just "psychiatrist")
- [ ] No generic textbook phrasing in the stem — every detail must be clinically purposeful
