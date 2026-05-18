import { QuizStem, ExpectedSignal, SignalCategory } from "./quizData";

export interface SignalMatch {
  signal: ExpectedSignal;
  identified: boolean;
  matchedKeyword?: string;
}

export interface OvercalledItem {
  text: string;
  reason: string;
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
  timeUsed: number; // seconds
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

// ─── Scoring weights ──────────────────────────────────────────────────────────
const WEIGHTS: Record<string, number> = {
  critical: 2,
  important: 1,
  optional: 0.5,
};

// ─── Assess candidate answer against signal map ───────────────────────────────
export function assessAnswer(stem: QuizStem, candidateAnswer: string, timeUsed: number): QuizResult {
  const normalized = candidateAnswer.toLowerCase();

  // ── Match signals ──
  const matches: SignalMatch[] = stem.signals.map((signal) => {
    const matchedKeyword = signal.keywords.find((kw) =>
      normalized.includes(kw.toLowerCase())
    );
    return { signal, identified: !!matchedKeyword, matchedKeyword };
  });

  // ── Score ──
  let earned = 0;
  let possible = 0;
  for (const m of matches) {
    const w = WEIGHTS[m.signal.severity] ?? 1;
    possible += w;
    if (m.identified) earned += w;
  }

  // Scale to marks
  const maxScore = stem.totalMarks;
  const rawPct = possible > 0 ? earned / possible : 0;
  const score = Math.round(rawPct * maxScore);
  const percentage = Math.round(rawPct * 100);

  // ── Judgement ──
  let judgement: QuizResult["judgement"] = "weak";
  if (percentage >= 70) judgement = "strong";
  else if (percentage >= 50) judgement = "borderline";

  // ── Missed ──
  const criticalMissed = matches
    .filter((m) => !m.identified && m.signal.severity === "critical")
    .map((m) => m.signal);
  const importantMissed = matches
    .filter((m) => !m.identified && m.signal.severity === "important")
    .map((m) => m.signal);

  // ── Overcalled (heuristic: check for vague generic terms not supported by stem) ──
  const overcalled = detectOvercalled(normalized, matches);

  return {
    score,
    maxScore,
    percentage,
    judgement,
    matches,
    overcalled,
    criticalMissed,
    importantMissed,
    timeUsed,
  };
}

function detectOvercalled(normalized: string, matches: SignalMatch[]): OvercalledItem[] {
  const overcalled: OvercalledItem[] = [];

  // Generic non-specific terms that attract penalties when used without specificity
  const genericPenalties = [
    {
      trigger: "everything",
      reason: "Vague and non-specific — 'consider everything' is not a clinical signal.",
    },
    {
      trigger: "all risks",
      reason: "Too generic — specific risks should be named and linked to stem content.",
    },
    {
      trigger: "psychotherapy",
      reason:
        "Not a signal — psychotherapy is a treatment, not an issue to be identified from the stem.",
    },
    {
      trigger: "medication review",
      reason:
        "Medication review is a management step, not a signal to identify — unless directly triggered by a specific stem clue.",
    },
  ];

  for (const gp of genericPenalties) {
    if (normalized.includes(gp.trigger)) {
      // Only flag if the stem's matched signals don't contain a matching keyword
      const alreadyCovered = matches.some(
        (m) => m.identified && m.matchedKeyword && m.matchedKeyword.includes(gp.trigger)
      );
      if (!alreadyCovered) {
        overcalled.push({ text: gp.trigger, reason: gp.reason });
      }
    }
  }

  return overcalled;
}

// ─── Category label mapping ───────────────────────────────────────────────────
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
  disposition: "Disposition Planning",
};

// ─── Persistence ──────────────────────────────────────────────────────────────
export function saveAttempt(attempt: QuizAttempt): void {
  try {
    const existing = loadAttempts();
    existing.unshift(attempt);
    // Keep last 50
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));
  } catch {
    // localStorage unavailable
  }
}

export function loadAttempts(): QuizAttempt[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return parsed.map((a: QuizAttempt) => ({
      ...a,
      timestamp: new Date(a.timestamp),
    }));
  } catch {
    return [];
  }
}

function uid(): string {
  return Math.random().toString(36).slice(2, 10);
}

export function createAttempt(
  candidateName: string,
  registrationNumber: string,
  stem: QuizStem,
  answer: string,
  result: QuizResult
): QuizAttempt {
  return {
    id: uid(),
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
