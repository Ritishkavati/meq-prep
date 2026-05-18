import { QuizStem, ExpectedSignal, QUIZ_STEMS, TOPIC_LABELS, SignalCategory } from "./quizData";
import {
  UploadedFile, ExtractedItem, SignalMap, KnowledgeChunk,
} from "./brainStore";

// ─── Valid signal categories (from quizData.ts union) ─────────────────────────
const VALID_CATEGORIES: SignalCategory[] = [
  "immediate_safety", "diagnosis_formulation", "risk_self", "risk_others",
  "risk_vulnerable", "substance_use", "physical_health", "capacity",
  "mental_health_act", "consent_refusal", "cultural_safety", "trauma",
  "family_carer", "child_protection", "collateral", "mdt_conflict",
  "system_pressure", "governance", "ethics", "disposition",
];

// ─── Topic file map (for import instructions) ─────────────────────────────────
export const TOPIC_FILE_MAP: Record<string, string> = {
  quality_assurance: "qaQuestions.ts → QA_STEMS",
  supervision: "supervisionQuestions.ts → SUP_STEMS",
  documentation: "documentationQuestions.ts → DOC_STEMS",
  discharge_review: "dischargeReviewQuestions.ts → DIS_STEMS",
  ed: "edQuestions.ts → ED_STEMS",
  perinatal: "perinatalQuestions.ts → PER_STEMS",
  capacity_mha: "capacityMhaQuestions.ts → CAP_STEMS",
  governance: "governanceQuestions.ts → GOV_STEMS",
  risk: "riskQuestions.ts → RISK_STEMS",
  mdt_systems: "mdtSystemsQuestions.ts → MDT_STEMS",
  cultural_safety: "quizData.ts → ORIGINAL_STEMS (inline)",
  cl_psychiatry: "quizData.ts → ORIGINAL_STEMS (inline)",
  forensic: "quizData.ts → ORIGINAL_STEMS (inline)",
  old_age: "quizData.ts → ORIGINAL_STEMS (inline)",
  child_adolescent: "quizData.ts → ORIGINAL_STEMS (inline)",
  substance_use: "quizData.ts → ORIGINAL_STEMS (inline)",
  psychotherapy: "quizData.ts → ORIGINAL_STEMS (inline)",
  ethics: "quizData.ts → ORIGINAL_STEMS (inline)",
  rural: "quizData.ts → ORIGINAL_STEMS (inline)",
};

// ─── Quality audit for a single stem ─────────────────────────────────────────
export interface StemAuditResult {
  stemId: string;
  stemTitle: string;
  topic: string;
  issues: string[];
  passCount: number;
  failCount: number;
  rating: "pass" | "warn" | "fail";
}

export function auditQuizStemQuality(stem: QuizStem): StemAuditResult {
  const issues: string[] = [];

  if (stem.signals.length < 4)
    issues.push(`Only ${stem.signals.length} signals — minimum 4 required`);

  const hasCritical = stem.signals.some((s) => s.severity === "critical");
  if (!hasCritical)
    issues.push("No critical signal — every consultant-level stem needs at least one");

  const hasComplexity = stem.signals.some((s) =>
    ["governance", "system_pressure", "cultural_safety", "mental_health_act",
      "ethics", "capacity", "consent_refusal"].includes(s.category)
  );
  if (!hasComplexity)
    issues.push("No governance / system / cultural / legal signal — stem may be registrar-level only");

  for (const sig of stem.signals) {
    if (!sig.clueInStem || sig.clueInStem.trim().length === 0)
      issues.push(`Signal "${sig.name}" has no clueInStem`);
    else if (!stem.stem.toLowerCase().includes(sig.clueInStem.toLowerCase().slice(0, 15)))
      issues.push(`Signal "${sig.name}" clueInStem may not match stem text — verify manually`);

    if (!VALID_CATEGORIES.includes(sig.category))
      issues.push(`Signal "${sig.name}" has invalid category: "${sig.category}"`);

    if (!sig.keywords || sig.keywords.length === 0)
      issues.push(`Signal "${sig.name}" has no marking keywords`);
  }

  if (!stem.modelAnswer || stem.modelAnswer.trim().length < 80)
    issues.push("Model answer is too short or missing");

  const genericPhrases = ["generic", "appropriate", "as needed", "manage accordingly"];
  if (genericPhrases.some((p) => stem.modelAnswer.toLowerCase().includes(p)))
    issues.push("Model answer contains generic phrasing — should be specific consultant-level content");

  const passCount = 8 - Math.min(issues.length, 8);
  const failCount = issues.length;
  const rating: StemAuditResult["rating"] =
    failCount === 0 ? "pass" : failCount <= 2 ? "warn" : "fail";

  return {
    stemId: stem.id,
    stemTitle: stem.title,
    topic: stem.topic,
    issues,
    passCount,
    failCount,
    rating,
  };
}

export function auditAllQuizStems(): StemAuditResult[] {
  return QUIZ_STEMS.map(auditQuizStemQuality);
}

// ─── Topic counts ─────────────────────────────────────────────────────────────
function topicCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const s of QUIZ_STEMS) {
    counts[s.topic] = (counts[s.topic] ?? 0) + 1;
  }
  return counts;
}

// ─── Main Markdown builder ────────────────────────────────────────────────────
export interface BuildExportOptions {
  uploadedFiles: UploadedFile[];
  knowledgeChunks: KnowledgeChunk[];
  extractedItems: ExtractedItem[];
  signalMaps: SignalMap[];
}

export function buildAIReviewExport(opts: BuildExportOptions): string {
  const now = new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" });
  const audit = auditAllQuizStems();
  const counts = topicCounts();

  const passCount = audit.filter((a) => a.rating === "pass").length;
  const warnCount = audit.filter((a) => a.rating === "warn").length;
  const failCount = audit.filter((a) => a.rating === "fail").length;

  const hasKnowledge =
    opts.uploadedFiles.length > 0 || opts.knowledgeChunks.length > 0 || opts.extractedItems.length > 0;

  const lines: string[] = [];

  // ── A. App overview ──────────────────────────────────────────────────────────
  lines.push("# MEQ Prep — AI Review Export");
  lines.push("");
  lines.push(`**Generated:** ${now} (AEST)`);
  lines.push(`**App:** RANZCP MEQ Prep — Signal Detection Training`);
  lines.push("");
  lines.push("## A. App Overview");
  lines.push("");
  lines.push(`| Metric | Value |`);
  lines.push(`|--------|-------|`);
  lines.push(`| Total quiz stems | ${QUIZ_STEMS.length} |`);
  lines.push(`| Uploaded files (Brain) | ${opts.uploadedFiles.length} |`);
  lines.push(`| Knowledge chunks | ${opts.knowledgeChunks.length} |`);
  lines.push(`| Extracted questions | ${opts.extractedItems.length} |`);
  lines.push(`| Signal maps | ${opts.signalMaps.length} |`);
  lines.push(`| Audit — Pass | ${passCount} |`);
  lines.push(`| Audit — Warn | ${warnCount} |`);
  lines.push(`| Audit — Fail | ${failCount} |`);
  lines.push("");
  lines.push("### Topic Distribution");
  lines.push("");
  for (const [topic, count] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
    const label = TOPIC_LABELS[topic as keyof typeof TOPIC_LABELS] ?? topic;
    lines.push(`- **${label}:** ${count} stem${count !== 1 ? "s" : ""}`);
  }
  lines.push("");
  lines.push("### Known Limitations");
  lines.push("");
  lines.push("- No backend or AI: all content is hardcoded in TypeScript source files.");
  lines.push("- Knowledge Brain material has been uploaded but not yet auto-transformed into quiz stems.");
  lines.push("- Marking is keyword-based, not semantic — model answers and keyword lists must be thorough.");
  lines.push("- Question bank is at ~47 stems against a 600-stem target.");
  lines.push("- No peer review of signal lists or model answers has been completed.");
  lines.push("");

  // ── B. Uploaded material summary ────────────────────────────────────────────
  lines.push("---");
  lines.push("");
  lines.push("## B. Uploaded Material Summary");
  lines.push("");
  if (!hasKnowledge || opts.uploadedFiles.length === 0) {
    lines.push("> **Note:** Uploaded material has not yet been transformed into knowledge concepts.");
    lines.push("");
  } else {
    for (const f of opts.uploadedFiles) {
      lines.push(`### ${f.filename}`);
      lines.push(`- **Type:** ${f.fileType}`);
      lines.push(`- **Category:** ${f.uploadCategory.replace(/_/g, " ")}`);
      lines.push(`- **Source:** ${f.sourceName || "—"}`);
      lines.push(`- **Year:** ${f.year || "—"}`);
      lines.push(`- **Permission:** ${f.permissionStatus.replace(/_/g, " ")}`);
      lines.push(`- **Status:** ${f.processingStatus}`);
      lines.push(`- **Topic tags:** ${f.topicTags.join(", ") || "none"}`);
      lines.push("");
    }
  }

  // ── C. Extracted knowledge concepts ─────────────────────────────────────────
  lines.push("---");
  lines.push("");
  lines.push("## C. Extracted Knowledge Concepts");
  lines.push("");
  if (opts.extractedItems.length === 0) {
    lines.push("> No extracted knowledge concepts yet. Uploaded material has not been processed into concepts.");
    lines.push("");
  } else {
    for (const item of opts.extractedItems) {
      lines.push(`### ${item.id} — ${item.topic}`);
      lines.push(`- **Scenario:** ${item.scenario}`);
      lines.push(`- **Question:** ${item.question}`);
      lines.push(`- **Marks:** ${item.marks}`);
      lines.push(`- **Expected signals:** ${item.expectedSignals.join(", ") || "none"}`);
      lines.push(`- **Examiner focus:** ${item.examinerFocus || "—"}`);
      lines.push(`- **Risk / Legal / Cultural:** ${item.riskLegalCultural || "—"}`);
      lines.push(`- **Candidate pitfalls:** ${item.candidatePitfalls || "—"}`);
      lines.push(`- **Status:** ${item.status}`);
      lines.push("");
    }
  }

  // ── D. Quiz Mode question bank ───────────────────────────────────────────────
  lines.push("---");
  lines.push("");
  lines.push("## D. Current Quiz Mode Question Bank");
  lines.push("");
  lines.push(`Total stems: **${QUIZ_STEMS.length}**`);
  lines.push("");
  for (const stem of QUIZ_STEMS) {
    lines.push(`### [${stem.id}] ${stem.title}`);
    lines.push(`- **Topic:** ${TOPIC_LABELS[stem.topic] ?? stem.topic}`);
    lines.push(`- **Difficulty:** ${stem.difficulty}`);
    lines.push(`- **Role:** ${stem.candidateRole}`);
    lines.push(`- **Setting:** ${stem.setting}`);
    lines.push(`- **Total marks:** ${stem.totalMarks}`);
    lines.push("");
    lines.push("**Stem:**");
    lines.push("");
    lines.push(stem.stem.trim());
    lines.push("");
    lines.push(`**Signals (${stem.signals.length}):**`);
    lines.push("");
    for (const sig of stem.signals) {
      lines.push(`- **[${sig.severity.toUpperCase()}] ${sig.name}** *(${sig.category})*`);
      lines.push(`  - Clue in stem: ${sig.clueInStem || "⚠️ MISSING"}`);
      lines.push(`  - Why it matters: ${sig.whyItMatters}`);
      lines.push(`  - Model wording: ${sig.modelWording}`);
      lines.push(`  - Keywords: ${sig.keywords.join(", ") || "⚠️ NONE"}`);
    }
    lines.push("");
    lines.push("**Model Answer:**");
    lines.push("");
    lines.push(stem.modelAnswer.trim());
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  // ── E. Quality audit ─────────────────────────────────────────────────────────
  lines.push("## E. Question Quality Audit");
  lines.push("");
  lines.push(`| # | ID | Title | Issues | Rating |`);
  lines.push(`|---|----|-------|--------|--------|`);
  for (const a of audit) {
    const issueCount = a.issues.length === 0 ? "✓ None" : `${a.issues.length} issue${a.issues.length > 1 ? "s" : ""}`;
    const emoji = a.rating === "pass" ? "✅" : a.rating === "warn" ? "⚠️" : "❌";
    lines.push(`| — | ${a.stemId} | ${a.stemTitle} | ${issueCount} | ${emoji} ${a.rating.toUpperCase()} |`);
  }
  lines.push("");
  for (const a of audit.filter((x) => x.issues.length > 0)) {
    lines.push(`#### ${a.stemId} — ${a.stemTitle}`);
    for (const issue of a.issues) {
      lines.push(`- ⚠️ ${issue}`);
    }
    lines.push("");
  }

  // ── F. External AI instructions ───────────────────────────────────────────────
  lines.push("---");
  lines.push("");
  lines.push("## F. Instructions for ChatGPT / Claude");
  lines.push("");
  lines.push(
    "Please review this MEQ Prep app content. Focus only on Quiz Mode. " +
    "Do not create Daily Practice or Full Exam content yet. " +
    "Assess whether the question bank is consultant-level, " +
    "whether each signal is supported by exact stem clues, " +
    "whether marking keywords are adequate, " +
    "and whether uploaded knowledge concepts are being transformed rather than copied. " +
    "Reorganise the material into three modules: " +
    "1. Knowledge Extraction, 2. Original Quiz Case Generation, 3. Strict Signal-Based Marking."
  );
  lines.push("");
  lines.push("**Your review should cover:**");
  lines.push("1. Is each question genuinely consultant-level (not registrar-level)?");
  lines.push("2. Does every signal have an unambiguous clue physically present in the stem text?");
  lines.push("3. Are keyword lists comprehensive enough for fair keyword-based marking?");
  lines.push("4. Are model answers specific (named treatments, legal frameworks, cultural principles)?");
  lines.push("5. Does the topic distribution reflect the real RANZCP MEQ blueprint?");
  lines.push("6. Which questions should be rewritten, expanded, or retired?");
  lines.push("7. What new stems should be created for under-represented topics?");
  lines.push("");

  // ── G. Replit import instructions ─────────────────────────────────────────────
  lines.push("---");
  lines.push("");
  lines.push("## G. Replit Import Instructions");
  lines.push("");
  lines.push("When improved content is returned from ChatGPT/Claude, paste it into the following files:");
  lines.push("");
  for (const [topic, fileInfo] of Object.entries(TOPIC_FILE_MAP)) {
    const label = TOPIC_LABELS[topic as keyof typeof TOPIC_LABELS] ?? topic;
    lines.push(`- **${label}** → \`artifacts/meq-prep/src/lib/questions/${fileInfo}\``);
  }
  lines.push("");
  lines.push("**Important rules:**");
  lines.push("- Each stem must have a unique `id` string (format: QA-001, SUP-001, etc.).");
  lines.push("- All signals must use only the valid `SignalCategory` union values.");
  lines.push("- All stems must export as `const <NAME>_STEMS: QuizStem[] = [...]`.");
  lines.push("- Run `pnpm --filter @workspace/meq-prep run typecheck` after pasting.");
  lines.push("- Do not add new `TopicKey` values without updating `quizData.ts` and `TOPIC_LABELS`.");
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("*End of AI Review Export — MEQ Prep*");

  return lines.join("\n");
}

// ─── JSON export ──────────────────────────────────────────────────────────────
export function buildAIReviewJSON(opts: BuildExportOptions): object {
  const audit = auditAllQuizStems();
  const counts = topicCounts();
  return {
    meta: {
      generatedAt: new Date().toISOString(),
      app: "RANZCP MEQ Prep",
      totalStems: QUIZ_STEMS.length,
      uploadedFiles: opts.uploadedFiles.length,
      knowledgeChunks: opts.knowledgeChunks.length,
      extractedItems: opts.extractedItems.length,
      signalMaps: opts.signalMaps.length,
    },
    topicCounts: counts,
    uploadedFiles: opts.uploadedFiles.map((f) => ({
      id: f.id,
      filename: f.filename,
      fileType: f.fileType,
      uploadCategory: f.uploadCategory,
      sourceName: f.sourceName,
      year: f.year,
      permissionStatus: f.permissionStatus,
      processingStatus: f.processingStatus,
      topicTags: f.topicTags,
    })),
    extractedItems: opts.extractedItems,
    signalMaps: opts.signalMaps,
    questionBank: QUIZ_STEMS.map((stem) => ({
      id: stem.id,
      topic: stem.topic,
      difficulty: stem.difficulty,
      title: stem.title,
      candidateRole: stem.candidateRole,
      setting: stem.setting,
      stem: stem.stem,
      totalMarks: stem.totalMarks,
      signals: stem.signals.map((s) => ({
        id: s.id,
        name: s.name,
        category: s.category,
        severity: s.severity,
        clueInStem: s.clueInStem,
        whyItMatters: s.whyItMatters,
        modelWording: s.modelWording,
        keywords: s.keywords,
      })),
      priorityOrder: stem.priorityOrder,
      modelAnswer: stem.modelAnswer,
    })),
    qualityAudit: audit,
    importInstructions: TOPIC_FILE_MAP,
  };
}
