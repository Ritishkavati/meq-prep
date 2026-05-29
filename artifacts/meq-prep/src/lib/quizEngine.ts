import { QuizStem, ExpectedSignal, SignalCategory, TopicKey, TOPIC_LABELS } from "./quizData";

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

// ─── Scoring weights ──────────────────────────────────────────────────────────
const WEIGHTS: Record<string, number> = {
  critical: 2,
  important: 1,
  optional: 0.5,
};

// ─── PS-level domain labels ───────────────────────────────────────────────────
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

// ─── Generate PS-level reasoning for a signal ─────────────────────────────────
function generatePSReason(signal: ExpectedSignal): { reason: string; statement: string } | null {
  const { category } = signal;

  if (category === "cultural_safety") {
    return {
      reason:
        "The stem contains culturally specific details that are clinical variables, not background information. RANZCP position statements affirm that cultural safety is a clinical and systems obligation — not merely a communication preference or attitude. Candidates must identify cultural safety as a distinct clinical domain encompassing power imbalance, coercion risk, intergenerational trauma, distrust of services, community and kinship structures, and systemic discrimination. Stating 'use an interpreter' or 'consider cultural factors' without this framing is a registrar-level response. Consultant-level answers name the clinical impact of cultural unsafety on engagement, risk, coercion, family involvement, and treatment outcome.",
      statement:
        "RANZCP PS on Aboriginal and Torres Strait Islander Mental Health / Māori Mental Health — cultural safety as a clinical and systems obligation, not a communication preference.",
    };
  }

  if (category === "trauma") {
    return {
      reason:
        "RANZCP endorses trauma-informed practice as a universal clinical framework — not a specialist intervention for patients with a PTSD diagnosis. Identifying 'trauma history' in the stem is insufficient. Candidates must recognise re-traumatisation risk in the current clinical encounter (ED, inpatient admission, seclusion, coercive treatment, dismissive communication), apply the 5 trauma-informed principles (safety, trustworthiness, choice, collaboration, empowerment), and understand complex trauma as distinct from single-event PTSD. Candidates who omit this framing are not demonstrating consultant-level awareness.",
      statement:
        "RANZCP PS on Trauma-Informed Practice — universal clinical framework, not specialist intervention. Re-traumatisation risk in clinical settings is a clinical obligation to address.",
    };
  }

  if (category === "family_carer") {
    return {
      reason:
        "RANZCP affirms families and carers as clinical partners — not obstacles to patient autonomy and not passive recipients of information. Consultant-level candidates must: actively engage families; provide psychoeducation as a clinical obligation; navigate confidentiality without dismissing carer information needs; and assess carer burden as a separate clinical problem requiring its own response. Writing 'involve the family' or 'liaise with family' without this depth is insufficient. Candidates must also distinguish between family partnership and using family as a surveillance tool.",
      statement:
        "RANZCP PS on Families and Carers — partnership, psychoeducation obligation, carer burden assessment, and confidentiality navigation.",
    };
  }

  if (category === "mdt_conflict") {
    return {
      reason:
        "RANZCP defines the consultant psychiatrist as the accountable clinician for diagnosis, risk formulation, and treatment direction — this accountability cannot be fully delegated to the MDT, the team nurse, or the registrar. In MDT conflict or disagreement, the consultant psychiatrist must take a clear clinical position, articulate the clinical reasoning, document it, and lead the resolution. Facilitating a team discussion without taking a position, or deferring to team consensus on a medico-legal decision, demonstrates sub-consultant-level awareness. Candidates cannot receive marks for clinical leadership they did not demonstrate.",
      statement:
        "RANZCP PS on the Role of the Psychiatrist — non-delegable accountability for diagnosis, risk, and legal decisions; MDT leadership in conflict.",
    };
  }

  if (category === "governance") {
    return {
      reason:
        "RANZCP defines clinical governance participation as a professional obligation under the role of the psychiatrist framework — not optional, and not a secondary concern after the clinical encounter. Consultant-level candidates must demonstrate systems-level thinking: clinical incident identification and reporting, root cause analysis, systemic advocacy, quality improvement, and recognition that individual clinical errors are often systems failures. Candidates who manage only the individual clinical event without governance framing are not demonstrating consultant-level performance.",
      statement:
        "RANZCP PS on the Role of the Psychiatrist — clinical governance, advocacy, and systems leadership as professional obligations.",
    };
  }

  if (category === "system_pressure") {
    return {
      reason:
        "RANZCP affirms equity of access regardless of geographic location or resource constraints — rural and remote patients have the right to equivalent psychiatric care. Candidates must identify service inequity as a named clinical and systems problem, not merely adapt practice without naming the equity dimension. Telehealth, visiting psychiatrist models, GP consultation, and advocacy for systemic change are all expected at consultant level. Omitting the equity framing reduces what should be a consultant-level response to a logistics response.",
      statement:
        "RANZCP PS on Rural and Remote Psychiatry — service equity as a right; advocacy and systemic adaptation as consultant obligations.",
    };
  }

  if (category === "mental_health_act") {
    return {
      reason:
        "RANZCP affirms the principle of least restrictive care as a core clinical obligation — MHA use and compulsory treatment must be justified as the minimum necessary intervention, with active consideration of alternatives documented. Over-reliance on compulsory treatment without justifying it as the least restrictive option, or without naming the specific MHA criteria met, demonstrates sub-consultant-level reasoning. Candidates must show that voluntary alternatives were considered and why they were insufficient.",
      statement:
        "RANZCP PS on Seclusion and Restraint / Suicide Prevention — least restrictive principle; compulsory treatment requires active justification, not default use.",
    };
  }

  if (category === "risk_self") {
    return {
      reason:
        "RANZCP suicide prevention statement affirms that collaborative safety planning is more effective than admission alone, and must be the primary response in most cases. Means restriction is the single most evidence-based suicide prevention intervention and must always be explicitly assessed and addressed — not simply noted. Involuntary admission is not always the appropriate response to suicide risk and must be justified as the least restrictive option. Discharge is a period of elevated risk requiring documented safety planning and follow-up. Candidates who identify only 'high risk — admit' without collaborative safety planning, means restriction, family involvement, and discharge planning are not demonstrating consultant-level suicide prevention awareness.",
      statement:
        "RANZCP PS on Suicide Prevention — collaborative safety planning; means restriction; least restrictive principle; discharge as high-risk period.",
    };
  }

  if (category === "risk_others") {
    return {
      reason:
        "Public safety is a core duty, but at consultant level it must be framed within ethical, proportionate, and least-restrictive principles. Candidates must demonstrate that they have considered the full clinical picture — engagement, therapeutic alliance, cultural context, proportionality of response — not defaulted to restrictive or coercive responses without clinical justification. The examiner will not award marks for reflexive restriction without justification.",
      statement:
        "RANZCP PS on the Role of the Psychiatrist — public safety within an ethical, proportionate, and least-restrictive framework.",
    };
  }

  if (category === "consent_refusal" || category === "capacity") {
    return {
      reason:
        "Ethics and medico-legal reasoning are explicit consultant-level obligations. Candidates must demonstrate understanding of capacity as a decision-specific, time-specific, fluctuating assessment — not a binary label. The ethical framework (autonomy, beneficence, non-maleficence, justice), substitute decision-making hierarchy, and documentation obligations are all expected. Candidates cannot receive marks for ethical reasoning they did not write.",
      statement:
        "RANZCP PS on the Role of the Psychiatrist — ethics and medico-legal obligations as core consultant accountabilities.",
    };
  }

  // Signals with explicit cultural context
  if (signal.relatedCultural) {
    return {
      reason: `This signal has a cultural safety dimension. RANZCP affirms that cultural context is a clinical variable — not an administrative background factor. ${signal.relatedCultural} Candidates must name the cultural safety issue and its clinical implications explicitly.`,
      statement:
        "RANZCP PS on Cultural Safety — cultural safety as clinical and systems obligation, not a communication adjustment.",
    };
  }

  // Signals with explicit systems context
  if (signal.relatedSystem) {
    return {
      reason: `This signal has a systems and governance dimension. RANZCP affirms that consultant psychiatrists must demonstrate systems leadership — not only individual clinical management. ${signal.relatedSystem}`,
      statement:
        "RANZCP PS on the Role of the Psychiatrist — clinical governance and systems leadership as professional obligations.",
    };
  }

  return null;
}

// ─── Examiner summary at PS level ─────────────────────────────────────────────
function generateExaminerSummary(matches: SignalMatch[]): string {
  const psRelevantMissed = matches.filter((m) => !m.identified && m.psLevelReason);
  const psRelevantIdentified = matches.filter((m) => m.identified && m.psLevelReason);

  if (psRelevantMissed.length === 0 && psRelevantIdentified.length > 0) {
    return `This candidate demonstrated consultant-level awareness of RANZCP position statement domains. ${psRelevantIdentified.length} PS-relevant signal${psRelevantIdentified.length !== 1 ? "s were" : " was"} correctly identified and framed at the appropriate level. The examiner notes this positively.`;
  }

  if (psRelevantMissed.length > 0 && psRelevantIdentified.length > 0) {
    const missedDomains = [...new Set(psRelevantMissed.map((m) => PS_DOMAIN_LABELS[m.signal.category] ?? m.signal.category))];
    return `This candidate identified some but not all RANZCP position-statement-level signals. ${psRelevantMissed.length} PS-relevant signal${psRelevantMissed.length !== 1 ? "s were" : " was"} missed. The examiner cannot award marks for PS-level reasoning that was not written. Missed consultant-level domains: ${missedDomains.join("; ")}. These are not optional — they are core professional obligations at the RANZCP fellowship level.`;
  }

  if (psRelevantMissed.length > 0 && psRelevantIdentified.length === 0) {
    const missedDomains = [...new Set(psRelevantMissed.map((m) => PS_DOMAIN_LABELS[m.signal.category] ?? m.signal.category))];
    return `This candidate did not demonstrate consultant-level awareness of any RANZCP position-statement-relevant domain in this stem. ${psRelevantMissed.length} PS-level signal${psRelevantMissed.length !== 1 ? "s were" : " was"} missed entirely. The examiner cannot award marks for reasoning that was not written. Missed domains: ${missedDomains.join("; ")}. At the RANZCP fellowship level, these are mandatory — not advanced extras.`;
  }

  return "This stem does not have explicit RANZCP position-statement-level signals beyond standard clinical marking.";
}

// ─── Assess candidate answer against signal map ───────────────────────────────
export async function assessAnswer(stem: QuizStem, candidateAnswer: string, timeUsed: number): Promise<QuizResult> {
  // ── AI signal detection with keyword fallback ──
  const normalized = candidateAnswer.toLowerCase();
  let matches: SignalMatch[];

  try {
    const response = await fetch("/api/detect-signals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        signals: stem.signals.map((s) => ({ id: s.id, name: s.name, clueInStem: s.clueInStem })),
        candidateAnswer,
      }),
    });
    if (!response.ok) throw new Error(`detect-signals ${response.status}`);
    const data = await response.json();
    const identifiedIds: string[] = Array.isArray(data.identifiedIds) ? data.identifiedIds : [];

    matches = stem.signals.map((signal) => {
      const psNote = generatePSReason(signal);
      return {
        signal,
        identified: identifiedIds.includes(signal.id),
        psLevelReason: psNote?.reason,
        psStatement: psNote?.statement,
      };
    });
  } catch (e) {
    console.error("AI signal detection failed, falling back to keywords:", e);
    matches = stem.signals.map((signal) => {
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
  }

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

  // ── PS domains ──
  const psDomainsIdentified = [
    ...new Set(
      matches
        .filter((m) => m.identified && m.psLevelReason)
        .map((m) => PS_DOMAIN_LABELS[m.signal.category] ?? m.signal.category)
    ),
  ];
  const psDomainsMissed = [
    ...new Set(
      matches
        .filter((m) => !m.identified && m.psLevelReason)
        .map((m) => PS_DOMAIN_LABELS[m.signal.category] ?? m.signal.category)
    ),
  ];
  const hasPSLevel = matches.some((m) => !!m.psLevelReason);
  const examinerSummary = generateExaminerSummary(matches);

  // ── Overcalled ──
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
    psDomainsIdentified,
    psDomainsMissed,
    examinerSummary,
    hasPSLevel,
  };
}

// ─── Vague and overcalled term detection ─────────────────────────────────────
function detectOvercalled(normalized: string, matches: SignalMatch[]): OvercalledItem[] {
  const overcalled: OvercalledItem[] = [];

  // Standard generic penalties
  const genericPenalties: OvercalledItem[] = [
    {
      text: "everything",
      reason:
        "Vague and non-specific. 'Consider everything' is not a clinical signal and attracts no marks.",
    },
    {
      text: "all risks",
      reason:
        "Too generic. Specific risks must be named, linked to the stem, and explained clinically.",
    },
    {
      text: "psychotherapy",
      reason:
        "Not a signal — psychotherapy is a treatment option, not an issue to identify from the stem.",
    },
    {
      text: "medication review",
      reason:
        "Medication review is a management step, not a signal, unless directly triggered by a specific stem clue.",
    },
  ];

  // PS-level vague term penalties — examiner will not award marks for these without depth
  const psPenalties: OvercalledItem[] = [
    {
      text: "consider cultural factors",
      reason:
        "This is a registrar-level phrase that will not be awarded PS-level marks. The stem provides specific cultural details. Name the exact cultural safety issue, its clinical implications, and how it affects engagement, coercion, risk, and family involvement. 'Consider cultural factors' without this analysis demonstrates surface-level awareness only.",
      isPSLevel: true,
    },
    {
      text: "cultural factors",
      reason:
        "Vague. Does not demonstrate consultant-level awareness. RANZCP position statements require cultural safety to be named as a clinical domain — not a background consideration. Name the specific issue, the clinical consequence, and the required response.",
      isPSLevel: true,
    },
    {
      text: "culturally sensitive",
      reason:
        "Generic personal-attitude language. Cultural safety is a systems and clinical obligation — not a personal disposition. The examiner will not award PS-level marks for this phrase. Explain what cultural unsafety means clinically in this context.",
      isPSLevel: true,
    },
    {
      text: "culturally appropriate",
      reason:
        "Too vague for consultant level. Name what culturally appropriate care specifically requires in this stem — interpreter, Aboriginal health worker, community liaison, family inclusion, specific communication approach.",
      isPSLevel: true,
    },
    {
      text: "explore trauma",
      reason:
        "Insufficient for RANZCP-level marking. Trauma-informed practice requires: identifying re-traumatisation risk in the current clinical setting, applying the 5 trauma-informed principles, and distinguishing complex trauma from single-event PTSD. 'Explore trauma' is a registrar-level phrase.",
      isPSLevel: true,
    },
    {
      text: "trauma history",
      reason:
        "Noting trauma history is not the same as trauma-informed practice. RANZCP standards require identifying re-traumatisation risk in the clinical encounter itself — not just the past history. Name what creates that risk here, and what the clinical response is.",
      isPSLevel: true,
    },
    {
      text: "involve family",
      reason:
        "Vague. RANZCP family/carer standards require: active engagement, psychoeducation, confidentiality navigation, and carer burden assessment. 'Involve the family' without this structure will not attract PS-level marks.",
      isPSLevel: true,
    },
    {
      text: "inform family",
      reason:
        "Below consultant level. Informing the family is a minimum — RANZCP standards require partnership, psychoeducation, carer burden assessment, and explicit confidentiality navigation. Name what you will share, what you cannot share without consent, and why.",
      isPSLevel: true,
    },
    {
      text: "consult the team",
      reason:
        "The consultant psychiatrist holds non-delegable accountability. 'Consult the team' without stating your own clinical position and accountability demonstrates sub-consultant-level reasoning. Name your clinical stance and how you will lead the team.",
      isPSLevel: true,
    },
    {
      text: "refer to appropriate services",
      reason:
        "Non-specific and will not attract marks. Name the specific service, the referral pathway, why it is indicated, and what you expect from it.",
      isPSLevel: true,
    },
    {
      text: "safety plan",
      reason:
        "RANZCP standard is collaborative safety planning — not a safety plan as a document. Name the elements: patient-agreed coping strategies, means restriction, crisis contacts, family role, and follow-up. A generic 'safety plan' without these elements is insufficient.",
      isPSLevel: true,
    },
    {
      text: "monitor closely",
      reason:
        "Not a clinical signal or plan. 'Monitor closely' gives the examiner no information about what you are monitoring, how, how often, or what triggers would change your management.",
      isPSLevel: false,
    },
  ];

  for (const penalty of [...genericPenalties, ...psPenalties]) {
    if (normalized.includes(penalty.text)) {
      const alreadyCovered = matches.some(
        (m) => m.identified && m.matchedKeyword?.includes(penalty.text)
      );
      if (!alreadyCovered) {
        overcalled.push(penalty);
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
  ethics: "Ethics & Professionalism",
  disposition: "Disposition Planning",
};

// ─── Persistence ──────────────────────────────────────────────────────────────
export function saveAttempt(attempt: QuizAttempt): void {
  try {
    const existing = loadAttempts();
    existing.unshift(attempt);
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

export interface QuizModuleCompletion {
  uniqueAttempted: number;
  totalStems: number;
  quizModulePct: number;   // 0–100 within the quiz module itself
  courseContribution: number; // 0–30 course %
}

export function getQuizModuleCompletion(
  registrationNumber: string,
  totalStems: number
): QuizModuleCompletion {
  if (!registrationNumber || totalStems === 0) {
    return { uniqueAttempted: 0, totalStems, quizModulePct: 0, courseContribution: 0 };
  }
  const attempts = loadAttempts().filter(
    (a) => a.registrationNumber === registrationNumber
  );
  const uniqueAttempted = new Set(attempts.map((a) => a.stemId)).size;
  const quizModulePct = Math.min((uniqueAttempted / totalStems) * 100, 100);
  const courseContribution = Math.min((uniqueAttempted / totalStems) * 30, 30);
  return { uniqueAttempted, totalStems, quizModulePct, courseContribution };
}

export function getTotalQuizzesCompleted(registrationNumber: string): number {
  if (!registrationNumber) return 0;
  try {
    return loadAttempts().filter((a) => a.registrationNumber === registrationNumber).length;
  } catch {
    return 0;
  }
}

export function hasStemBeenAttempted(stemId: string): boolean {
  try {
    return loadAttempts().some((a) => a.stemId === stemId);
  } catch {
    return false;
  }
}

// ─── Saved responses (explicit profile saves) ──────────────────────────────────
export interface SavedResponse {
  stemId: string;
  stemTitle: string;
  topic: string;
  answer: string;
  score: number;         // percentage 0–100
  estimatedMarks: number;
  totalMarks: number;
  savedAt: string;       // ISO string
}

const SAVED_RESPONSES_KEY = "meq_saved_responses";

export function saveQuizResponse(data: SavedResponse): void {
  try {
    const existing = loadSavedResponses().filter((r) => r.stemId !== data.stemId);
    existing.unshift(data);
    localStorage.setItem(SAVED_RESPONSES_KEY, JSON.stringify(existing.slice(0, 200)));
  } catch {
    // localStorage unavailable
  }
}

export function loadSavedResponses(): SavedResponse[] {
  try {
    const raw = localStorage.getItem(SAVED_RESPONSES_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as SavedResponse[];
  } catch {
    return [];
  }
}

export function deleteSavedResponse(stemId: string): void {
  try {
    const existing = loadSavedResponses().filter((r) => r.stemId !== stemId);
    localStorage.setItem(SAVED_RESPONSES_KEY, JSON.stringify(existing));
  } catch {
    // localStorage unavailable
  }
}

export function isStemResponseSaved(stemId: string): boolean {
  try {
    return loadSavedResponses().some((r) => r.stemId === stemId);
  } catch {
    return false;
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

// ─── Candidate performance feedback ───────────────────────────────────────────

export interface CandidateFeedback {
  weakCategories: { label: string; hitRate: number }[];
  strongCategories: { label: string; hitRate: number }[];
  weakTopics: { topic: string; label: string; avgScore: number }[];
  avgPercentage: number;
  totalAttempts: number;
}

export function getCandidateFeedback(registrationNumber: string): CandidateFeedback {
  const empty: CandidateFeedback = {
    weakCategories: [],
    strongCategories: [],
    weakTopics: [],
    avgPercentage: 0,
    totalAttempts: 0,
  };
  if (!registrationNumber) return empty;

  const attempts = loadAttempts().filter(
    (a) => a.registrationNumber === registrationNumber
  );
  if (attempts.length === 0) return empty;

  const catStats: Record<string, { hits: number; total: number }> = {};
  const topicStats: Record<string, { scoreSum: number; count: number }> = {};
  let scoreSum = 0;

  for (const attempt of attempts) {
    scoreSum += attempt.result.percentage;
    for (const match of attempt.result.matches) {
      const cat = match.signal.category;
      if (!catStats[cat]) catStats[cat] = { hits: 0, total: 0 };
      catStats[cat].total++;
      if (match.identified) catStats[cat].hits++;
    }
    const t = attempt.topic;
    if (!topicStats[t]) topicStats[t] = { scoreSum: 0, count: 0 };
    topicStats[t].scoreSum += attempt.result.percentage;
    topicStats[t].count++;
  }

  const avgPercentage = Math.round(scoreSum / attempts.length);

  const allCats = Object.entries(catStats)
    .filter(([, v]) => v.total >= 2)
    .map(([cat, v]) => ({
      label: CATEGORY_LABELS[cat as SignalCategory] ?? cat,
      hitRate: Math.round((v.hits / v.total) * 100),
    }))
    .sort((a, b) => a.hitRate - b.hitRate);

  const weakCategories = allCats.filter((c) => c.hitRate < 55).slice(0, 5);
  const strongCategories = allCats
    .filter((c) => c.hitRate >= 75)
    .slice(-3)
    .reverse();

  const weakTopics = Object.entries(topicStats)
    .map(([topic, v]) => ({
      topic,
      label: TOPIC_LABELS[topic as TopicKey] ?? topic,
      avgScore: Math.round(v.scoreSum / v.count),
    }))
    .filter((t) => t.avgScore < 60)
    .sort((a, b) => a.avgScore - b.avgScore)
    .slice(0, 4);

  return {
    weakCategories,
    strongCategories,
    weakTopics,
    avgPercentage,
    totalAttempts: attempts.length,
  };
}
