import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { useCandidate } from "@/lib/store";
import {
  TOPIC_LABELS, DIFFICULTY_LABELS, TopicKey, DifficultyKey,
  QuizStem, ExpectedSignal, QUIZ_STEMS,
} from "@/lib/quizData";

// DifficultyKey kept for store compatibility; difficulty UI removed from setup
import {
  assessAnswer, createAttempt, saveAttempt, QuizResult,
  CATEGORY_LABELS, hasStemBeenAttempted,
  getQuizModuleCompletion, QuizModuleCompletion,
  saveQuizResponse, deleteSavedResponse, isStemResponseSaved,
} from "@/lib/quizEngine";
import {
  getNextStem, getTopicStats, TopicStats,
} from "@/lib/quizSessionStore";
import {
  ArrowLeft, RotateCcw, Send, CheckCircle2,
  XCircle, AlertTriangle, ChevronDown, ChevronUp,
  RotateCw, ListChecks, ArrowRight, BookMarked,
  FileText, Bookmark, BookmarkCheck, Trash2, PenLine,
} from "lucide-react";

type Phase = "setup" | "quiz" | "selfmark" | "results";

// ─── helpers ──────────────────────────────────────────────────────────────────
function fmtTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

const SEVERITY_COLOURS = {
  critical: "text-red-700 bg-red-50 border-red-200",
  important: "text-amber-700 bg-amber-50 border-amber-200",
  optional: "text-slate-600 bg-slate-50 border-slate-200",
};

const SEVERITY_LABELS = {
  critical: "Critical",
  important: "Important",
  optional: "Optional",
};

// ─── Setup screen ─────────────────────────────────────────────────────────────
function SetupScreen({
  onGenerate,
  globalProgress,
}: {
  onGenerate: (topic: TopicKey, timeSecs: number) => void;
  globalProgress: { completed: number; total: number };
}) {
  const [topic, setTopic] = useState<TopicKey>("random");
  const [timeSecs, setTimeSecs] = useState(180);

  return (
    <div className="bg-card rounded-2xl border border-card-border shadow-sm p-6 md:p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <ListChecks className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h2 className="text-xl font-serif font-bold text-primary">Quiz Mode — Setup</h2>
          <p className="text-sm text-muted-foreground">Identify the hidden signals in an MEQ stem</p>
        </div>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-primary uppercase tracking-wider">
            Topic
          </label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value as TopicKey)}
            className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {(Object.entries(TOPIC_LABELS) as [TopicKey, string][]).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>

          {/* Global progress */}
          <div className="flex items-center gap-2 px-1 pt-1">
            <span className="text-xs text-muted-foreground">
              Your progress:{" "}
              <span className="font-semibold text-primary">{globalProgress.completed}</span>
              {" "}of{" "}
              <span className="font-semibold text-primary">{globalProgress.total}</span>
              {" "}questions completed
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-semibold text-primary uppercase tracking-wider">
            Time limit
          </label>
          <select
            value={timeSecs}
            onChange={(e) => setTimeSecs(Number(e.target.value))}
            className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value={120}>2 minutes</option>
            <option value={180}>3 minutes</option>
          </select>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800 leading-relaxed">
          <strong>Important:</strong> Do not consult notes or references during the quiz.
          The timer begins when you press Start. Submit your own unassisted signal list.
          Examiner feedback appears only after submission.
        </div>

        <button
          onClick={() => onGenerate(topic, timeSecs)}
          className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Generate Quiz Stem <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// ─── Quiz screen ──────────────────────────────────────────────────────────────
function QuizScreen({
  stem, timeSecs, onSubmit, alreadyAttempted, onSkipToNext, initialAnswer,
}: {
  stem: QuizStem;
  timeSecs: number;
  onSubmit: (answer: string, timeUsed: number) => void;
  alreadyAttempted: boolean;
  onSkipToNext: () => void;
  initialAnswer?: string;
}) {
  const [skipDismissed, setSkipDismissed] = useState(false);
  const [answer, setAnswer] = useState(initialAnswer ?? "");
  const [timeLeft, setTimeLeft] = useState(timeSecs);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeUsedRef = useRef(0);

  const clearTick = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const startTimer = useCallback(() => {
    setStarted(true);
    setPaused(false);
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearTick();
          setTimeExpired(true);
          return 0;
        }
        timeUsedRef.current += 1;
        return prev - 1;
      });
    }, 1000);
  }, [clearTick]);

  const stopTimer = useCallback(() => {
    clearTick();
    setPaused(true);
  }, [clearTick]);

  const resetTimer = useCallback(() => {
    clearTick();
    setStarted(false);
    setPaused(false);
    setTimeExpired(false);
    setTimeLeft(timeSecs);
    setAnswer("");
    timeUsedRef.current = 0;
  }, [clearTick, timeSecs]);

  useEffect(() => () => clearTick(), [clearTick]);

  const pct = ((timeSecs - timeLeft) / timeSecs) * 100;
  const urgent = timeLeft <= 30 && started && !paused;

  function handleSubmit() {
    clearTick();
    const used = timeSecs - timeLeft;
    onSubmit(answer, used);
  }

  function handleTimerClick() {
    if (!started || paused) {
      startTimer();
    } else {
      stopTimer();
    }
  }

  return (
    <div className="space-y-5 max-w-3xl mx-auto">

      {/* ── DIGITAL TIMER — top, click to start / click to stop ──────────────── */}
      <div
        onClick={!timeExpired ? handleTimerClick : undefined}
        className={[
          "rounded-2xl border shadow-sm select-none transition-all",
          timeExpired
            ? "bg-red-50 border-red-300 cursor-default"
            : urgent
            ? "bg-red-50 border-red-300 cursor-pointer hover:brightness-95 active:scale-[0.99]"
            : !started
            ? "bg-primary border-primary cursor-pointer hover:bg-primary/90 active:scale-[0.99]"
            : "bg-white border-card-border cursor-pointer hover:bg-slate-50 active:scale-[0.99]",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-5 pt-4 pb-1">
          {/* left label */}
          <span className={[
            "text-xs font-semibold uppercase tracking-widest",
            timeExpired ? "text-red-500" : urgent ? "text-red-500" : !started ? "text-white/70" : "text-muted-foreground",
          ].join(" ")}>
            {timeExpired ? "Time's up" : !started ? "Click to start" : paused ? "Paused — click to resume" : "Running — click to stop"}
          </span>
          {/* reset */}
          <button
            onClick={(e) => { e.stopPropagation(); resetTimer(); }}
            className={[
              "flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors",
              !started ? "text-white/60 hover:text-white" : "text-muted-foreground hover:text-primary border border-slate-200 hover:border-primary",
            ].join(" ")}
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
        </div>

        {/* Big clock */}
        <div className="flex items-center justify-center py-5">
          <span className={[
            "font-mono font-bold tracking-tight tabular-nums",
            "text-6xl md:text-7xl",
            timeExpired ? "text-red-600" : urgent ? "text-red-700" : !started ? "text-white" : "text-primary",
          ].join(" ")}>
            {fmtTime(timeLeft)}
          </span>
        </div>

        {timeExpired && (
          <div className="px-5 pb-4 text-center">
            <span className="text-xs font-semibold text-red-700">
              Time finished — you can still submit your answer below
            </span>
          </div>
        )}
      </div>

      {/* meta */}
      <div className="bg-white rounded-2xl border border-card-border shadow-sm px-5 py-4 flex flex-wrap gap-3 items-center text-xs text-muted-foreground">
        <span className="font-semibold text-primary">{TOPIC_LABELS[stem.topic]}</span>
        <span>·</span>
        <span>{DIFFICULTY_LABELS[stem.difficulty]}</span>
        <span>·</span>
        <span>{stem.totalMarks} marks</span>
        <span className="ml-auto font-mono text-xs text-muted-foreground">{stem.candidateRole}</span>
      </div>

      {/* stem */}
      <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6 md:p-8">
        <h3 className="text-base font-serif font-bold text-primary mb-1">{stem.title}</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Setting: {stem.setting} &nbsp;·&nbsp; Role: {stem.candidateRole}
        </p>
        <div className="bg-primary/4 rounded-xl p-5 text-sm text-primary leading-relaxed whitespace-pre-line">
          {stem.stem}
        </div>
      </div>

      {/* Already-attempted notice */}
      {alreadyAttempted && !skipDismissed && (
        <div className="flex items-center justify-between gap-3 bg-violet-50 border border-violet-200 rounded-xl px-4 py-3">
          <div className="flex items-center gap-2 min-w-0">
            <RotateCw className="w-4 h-4 text-violet-500 flex-shrink-0" />
            <p className="text-sm text-violet-800 font-medium">
              You've already attempted this stem.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={onSkipToNext}
              className="flex items-center gap-1.5 bg-violet-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-violet-700 transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5" /> Skip to Next Quiz
            </button>
            <button
              onClick={() => setSkipDismissed(true)}
              className="text-xs text-violet-500 hover:text-violet-700 px-2 py-1.5 rounded transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* answer */}
      <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6">
        <label className="block text-sm font-semibold text-primary mb-1">
          List all signals and issues you identify from this stem
        </label>
        <p className="text-xs text-muted-foreground mb-3">
          Write freely. Cover clinical, risk, legal, capacity, cultural, family, MDT and system signals.
          Do not use bullet points artificially — write what you genuinely identify.
        </p>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows={10}
          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-y leading-relaxed"
          placeholder="Begin writing your signal list here..."
        />
        <button
          onClick={handleSubmit}
          disabled={!started || answer.trim().length < 10}
          className="mt-4 w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <Send className="w-4 h-4" /> Submit answer for marking
        </button>
        {!started && (
          <p className="text-center text-xs text-muted-foreground mt-2">Click the timer above to begin</p>
        )}

        {/* Skip */}
        <button
          onClick={onSkipToNext}
          className="mt-3 w-full flex items-center justify-center gap-2 border-2 border-slate-300 text-muted-foreground py-2.5 rounded-lg text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
        >
          Skip — try a different question <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

// ─── Identified signal card ────────────────────────────────────────────────────
function IdentifiedCard({ signal }: { signal: ExpectedSignal }) {
  return (
    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 space-y-2.5">
      <div className="flex flex-wrap items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
        <span className="text-sm font-semibold text-emerald-900">{signal.name}</span>
        <span className={`ml-auto text-xs font-semibold border px-2 py-0.5 rounded-full ${SEVERITY_COLOURS[signal.severity]}`}>
          {SEVERITY_LABELS[signal.severity]}
        </span>
      </div>
      <div className="bg-white/60 rounded-lg px-3 py-2 border border-emerald-100">
        <p className="text-xs font-semibold text-emerald-700 mb-0.5 uppercase tracking-wider">Clue in stem</p>
        <p className="text-xs text-emerald-900 italic">"{signal.clueInStem}"</p>
      </div>
      <p className="text-xs text-emerald-900 leading-relaxed">{signal.whyItMatters}</p>
    </div>
  );
}

// ─── Missed signal card ────────────────────────────────────────────────────────
function MissedCard({ signal }: { signal: ExpectedSignal }) {
  const isCritical = signal.severity === "critical";
  return (
    <div className={`rounded-xl border p-4 space-y-2.5 ${isCritical ? "border-red-200 bg-red-50" : "border-amber-200 bg-amber-50"}`}>
      <div className="flex flex-wrap items-center gap-2">
        {isCritical ? (
          <XCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
        ) : (
          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
        )}
        <span className={`text-sm font-semibold ${isCritical ? "text-red-900" : "text-amber-900"}`}>
          {signal.name}
        </span>
        {isCritical && (
          <span className="text-xs font-bold text-red-700 ml-auto">⚠️ CRITICAL</span>
        )}
        {!isCritical && (
          <span className={`ml-auto text-xs font-semibold border px-2 py-0.5 rounded-full ${SEVERITY_COLOURS[signal.severity]}`}>
            {SEVERITY_LABELS[signal.severity]}
          </span>
        )}
      </div>

      <div className={`rounded-lg px-3 py-2 border ${isCritical ? "bg-white/60 border-red-100" : "bg-white/60 border-amber-100"}`}>
        <p className={`text-xs font-semibold mb-0.5 uppercase tracking-wider ${isCritical ? "text-red-700" : "text-amber-700"}`}>
          Clue you should have spotted
        </p>
        <p className={`text-xs italic ${isCritical ? "text-red-900" : "text-amber-900"}`}>"{signal.clueInStem}"</p>
      </div>

      <p className={`text-xs leading-relaxed ${isCritical ? "text-red-900" : "text-amber-900"}`}>{signal.whyItMatters}</p>

      <div className="bg-white rounded-lg px-3 py-2.5 border border-slate-200">
        <p className="text-xs font-semibold text-slate-600 mb-0.5 uppercase tracking-wider">What a consultant would say</p>
        <p className="text-xs text-slate-800 italic leading-relaxed">{signal.modelWording}</p>
      </div>
    </div>
  );
}

// ─── Self-Marking Screen ───────────────────────────────────────────────────────
const SEVERITY_ORDER = { critical: 0, important: 1, optional: 2 };

function SelfMarkScreen({
  stem,
  candidateAnswer,
  timeUsed,
  onComplete,
}: {
  stem: QuizStem;
  candidateAnswer: string;
  timeUsed: number;
  onComplete: (identifiedIds: string[]) => void;
}) {
  const [marks, setMarks] = useState<Record<string, boolean | null>>(() => {
    const init: Record<string, boolean | null> = {};
    for (const s of stem.signals) init[s.id] = null;
    return init;
  });

  const sortedSignals = [...stem.signals].sort(
    (a, b) => SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]
  );

  const markedCount = Object.values(marks).filter((v) => v !== null).length;
  const total = stem.signals.length;
  const allMarked = markedCount === total;

  function setMark(id: string, val: boolean) {
    setMarks((prev) => ({ ...prev, [id]: prev[id] === val ? null : val }));
  }

  function handleSubmit() {
    const identifiedIds = Object.entries(marks)
      .filter(([, v]) => v === true)
      .map(([id]) => id);
    onComplete(identifiedIds);
  }

  return (
    <div className="max-w-6xl mx-auto space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
          <ListChecks className="w-5 h-5 text-violet-600" />
        </div>
        <div>
          <h2 className="text-xl font-serif font-bold text-primary">Self-Marking</h2>
          <p className="text-sm text-muted-foreground">Go through the marking key and mark each signal honestly</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 items-start">
        {/* ── Left panel: candidate answer ──────────────────────────────────── */}
        <div className="lg:w-2/5 bg-white rounded-2xl border border-card-border shadow-sm p-5 space-y-3 lg:sticky lg:top-4">
          <h3 className="font-serif font-bold text-primary text-base">Your Answer</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-primary leading-relaxed whitespace-pre-wrap min-h-[200px] max-h-[60vh] overflow-y-auto">
            {candidateAnswer.trim() || <span className="text-muted-foreground italic">No response submitted.</span>}
          </div>
          <p className="text-xs text-muted-foreground">Time taken: <span className="font-semibold text-primary">{fmtTime(timeUsed)}</span></p>
        </div>

        {/* ── Right panel: marking key ───────────────────────────────────────── */}
        <div className="lg:w-3/5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-primary text-base">Marking Key — Did you identify this?</h3>
            <span className="text-xs font-semibold text-muted-foreground bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
              {markedCount} of {total} marked
            </span>
          </div>

          {sortedSignals.map((signal) => {
            const mark = marks[signal.id];
            return (
              <div
                key={signal.id}
                className={`rounded-xl border p-4 space-y-3 transition-all ${
                  mark === true
                    ? "border-emerald-300 bg-emerald-50"
                    : mark === false
                    ? "border-red-200 bg-red-50"
                    : "border-card-border bg-white"
                }`}
              >
                {/* Signal header */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-bold text-primary">{signal.name}</span>
                  <span
                    className={`ml-auto text-xs font-semibold border px-2 py-0.5 rounded-full ${SEVERITY_COLOURS[signal.severity]}`}
                  >
                    {SEVERITY_LABELS[signal.severity]}
                  </span>
                </div>

                {/* Clue in stem */}
                <div className="bg-white/70 rounded-lg px-3 py-2 border border-slate-200">
                  <p className="text-xs font-semibold text-slate-500 mb-0.5 uppercase tracking-wider">Clue in stem</p>
                  <p className="text-xs text-primary italic">"{signal.clueInStem}"</p>
                </div>

                {/* Why it matters */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 mb-0.5 uppercase tracking-wider">Why it matters</p>
                  <p className="text-xs text-slate-700 leading-relaxed">{signal.whyItMatters}</p>
                </div>

                {/* Consultant wording */}
                <div className="bg-slate-50 rounded-lg px-3 py-2 border border-slate-200">
                  <p className="text-xs font-semibold text-slate-500 mb-0.5 uppercase tracking-wider">Consultant would say</p>
                  <p className="text-xs text-slate-800 italic leading-relaxed">{signal.modelWording}</p>
                </div>

                {/* ✓ / ✗ buttons */}
                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => setMark(signal.id, true)}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-semibold border-2 transition-all ${
                      mark === true
                        ? "bg-emerald-600 border-emerald-600 text-white"
                        : "border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" /> I identified this
                  </button>
                  <button
                    onClick={() => setMark(signal.id, false)}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-sm font-semibold border-2 transition-all ${
                      mark === false
                        ? "bg-red-600 border-red-600 text-white"
                        : "border-red-300 text-red-700 hover:bg-red-50"
                    }`}
                  >
                    <XCircle className="w-4 h-4" /> I missed this
                  </button>
                </div>
              </div>
            );
          })}

          {/* Submit */}
          <div className="bg-white rounded-2xl border border-card-border shadow-sm p-5 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Mark every signal before submitting
              </span>
              <span className={`font-semibold ${allMarked ? "text-emerald-700" : "text-muted-foreground"}`}>
                {markedCount} / {total} marked
              </span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent rounded-full transition-all"
                style={{ width: `${total > 0 ? (markedCount / total) * 100 : 0}%` }}
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!allMarked}
              className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4" /> Submit Self-Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PS Marking Panel ─────────────────────────────────────────────────────────
function PSMarkingPanel({ result }: { result: import("@/lib/quizEngine").QuizResult }) {
  const [open, setOpen] = useState(true);

  if (!result.hasPSLevel) return null;

  const allGood = result.psDomainsMissed.length === 0 && result.psDomainsIdentified.length > 0;

  return (
    <div
      className={`rounded-2xl border shadow-sm overflow-hidden ${
        allGood
          ? "border-violet-200 bg-violet-50"
          : result.psDomainsMissed.length > 0
          ? "border-violet-300 bg-violet-50"
          : "border-card-border bg-white"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
      >
        <div className="flex items-center gap-3">
          <BookMarked className="w-5 h-5 text-violet-600" />
          <div>
            <h3 className="font-serif font-bold text-primary text-base">
              RANZCP Position Statement Level Marking
            </h3>
            <p className="text-xs text-muted-foreground">
              Consultant-level awareness of RANZCP policy domains
            </p>
          </div>
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        )}
      </button>

      {open && (
        <div className="px-6 pb-5 space-y-4 border-t border-violet-200">
          {/* Examiner summary */}
          <div className="pt-4">
            <p className="text-xs font-bold text-violet-800 uppercase tracking-wider mb-2">
              Examiner assessment
            </p>
            <p className="text-sm text-violet-900 leading-relaxed">{result.examinerSummary}</p>
          </div>

          {/* PS domains grid */}
          <div className="grid sm:grid-cols-2 gap-3">
            {result.psDomainsIdentified.length > 0 && (
              <div>
                <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                  PS domains — identified
                </p>
                <ul className="space-y-1.5">
                  {result.psDomainsIdentified.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-emerald-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {result.psDomainsMissed.length > 0 && (
              <div>
                <p className="text-xs font-bold text-red-700 uppercase tracking-wider mb-2">
                  PS domains — missed
                </p>
                <ul className="space-y-1.5">
                  {result.psDomainsMissed.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-red-800">
                      <XCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Examiner rule reminder */}
          <div className="bg-white rounded-lg border border-violet-200 px-4 py-3">
            <p className="text-xs text-violet-800 leading-relaxed">
              <strong>Examiner marking rule:</strong> The examiner marks only what the candidate wrote.
              PS-level reasoning that is absent from the answer cannot be inferred or awarded.
              Vague phrases such as "consider cultural factors," "involve the family," or "safety plan"
              without substantive content will not attract PS-level marks.
            </p>
          </div>

          {result.psDomainsMissed.length > 0 && (
            <p className="text-xs text-violet-700 italic">
              Expand the missed signal cards below to see the exact clue, expected signal,
              clinical significance, PS-level reasoning, and model wording for each missed domain.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Your Written Response panel ──────────────────────────────────────────────
function YourResponsePanel({
  stem, candidateAnswer, result, onRewrite,
}: {
  stem: QuizStem;
  candidateAnswer: string;
  result: QuizResult;
  onRewrite: () => void;
}) {
  const [open, setOpen] = useState(true);
  const [savedState, setSavedState] = useState<"unsaved" | "saved" | "deleted">(
    () => isStemResponseSaved(stem.id) ? "saved" : "unsaved"
  );

  // Weighted marks for the save payload
  const WEIGHTS: Record<string, number> = { critical: 2, important: 1, optional: 0.5 };
  const totalWeighted = result.matches.reduce((s, m) => s + (WEIGHTS[m.signal.severity] ?? 1), 0);
  const earnedWeighted = result.matches.filter((m) => m.identified).reduce((s, m) => s + (WEIGHTS[m.signal.severity] ?? 1), 0);
  const estimatedMarks = totalWeighted > 0 ? Math.round((earnedWeighted / totalWeighted) * stem.totalMarks) : 0;

  function handleSave() {
    saveQuizResponse({
      stemId: stem.id,
      stemTitle: stem.title,
      topic: stem.topic,
      answer: candidateAnswer,
      score: result.percentage,
      estimatedMarks,
      totalMarks: stem.totalMarks,
      savedAt: new Date().toISOString(),
    });
    setSavedState("saved");
  }

  function handleDelete() {
    deleteSavedResponse(stem.id);
    setSavedState("deleted");
  }

  return (
    <div className="bg-white rounded-2xl border border-card-border shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-accent flex-shrink-0" />
          <div>
            <h3 className="font-serif font-bold text-primary text-base">Your Written Response</h3>
            <p className="text-xs text-muted-foreground">Review what you submitted — then rewrite, save, or delete</p>
          </div>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
      </button>

      {open && (
        <div className="px-6 pb-5 space-y-4 border-t border-card-border">
          {/* The candidate's answer */}
          <div className="mt-4 bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-sm text-primary leading-relaxed whitespace-pre-wrap min-h-[80px]">
            {candidateAnswer.trim() || <span className="text-muted-foreground italic">No response submitted.</span>}
          </div>

          {/* Action row */}
          <div className="flex flex-wrap gap-2">
            {/* Rewrite */}
            <button
              onClick={onRewrite}
              className="flex items-center gap-2 border-2 border-primary text-primary text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary/5 transition-colors"
            >
              <PenLine className="w-4 h-4" /> Rewrite Response
            </button>

            {/* Save / Saved */}
            {savedState !== "saved" && (
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-accent text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors"
              >
                <Bookmark className="w-4 h-4" /> Save to Profile
              </button>
            )}
            {savedState === "saved" && (
              <span className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-lg">
                <BookmarkCheck className="w-4 h-4" /> Saved to Profile
              </span>
            )}

            {/* Delete */}
            {savedState !== "deleted" && (
              <button
                onClick={handleDelete}
                className="flex items-center gap-2 border border-red-200 text-red-600 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
              >
                <Trash2 className="w-4 h-4" /> Delete Response
              </button>
            )}
            {savedState === "deleted" && (
              <span className="flex items-center gap-2 text-muted-foreground text-sm px-2 py-2">
                Response deleted.
              </span>
            )}
          </div>

          {savedState === "saved" && (
            <p className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2">
              This response is saved to your profile under <strong>Quiz History</strong>. You can review all saved responses in the Review section.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Results screen ───────────────────────────────────────────────────────────
function ResultsScreen({
  stem, result, candidateAnswer, topic, progress,
  onNextRandom, onNextQuestion, onRepeatStem, onChangeTopic, onBackToModes,
  onRewrite, courseCompletion,
}: {
  stem: QuizStem;
  result: QuizResult;
  candidateAnswer: string;
  topic: TopicKey;
  progress: { attempted: number; available: number };
  onNextRandom: () => void;
  onNextQuestion: () => void;
  onRepeatStem: () => void;
  onChangeTopic: () => void;
  onBackToModes: () => void;
  onRewrite: () => void;
  courseCompletion: QuizModuleCompletion;
}) {
  const [showModel, setShowModel] = useState(false);
  const [showIdentified, setShowIdentified] = useState(false);
  const [showMissed, setShowMissed] = useState(false);

  const identified = result.matches.filter((m) => m.identified);
  const missed = result.matches.filter((m) => !m.identified);
  const totalSignals = result.matches.length;

  const criticalTotal = result.matches.filter((m) => m.signal.severity === "critical").length;
  const criticalFound = result.matches.filter((m) => m.identified && m.signal.severity === "critical").length;

  // Weighted marks: critical=2, important=1, optional=0.5
  const WEIGHTS: Record<string, number> = { critical: 2, important: 1, optional: 0.5 };
  const totalWeighted = result.matches.reduce((s, m) => s + (WEIGHTS[m.signal.severity] ?? 1), 0);
  const earnedWeighted = result.matches.filter((m) => m.identified).reduce((s, m) => s + (WEIGHTS[m.signal.severity] ?? 1), 0);
  const estimatedMarks = totalWeighted > 0
    ? Math.round((earnedWeighted / totalWeighted) * stem.totalMarks)
    : 0;

  // Rating thresholds per spec
  let ratingLabel: string;
  let ratingStyle: string;
  if (result.percentage >= 80) {
    ratingLabel = "Examiner-level thinking ✓";
    ratingStyle = "text-emerald-700 bg-emerald-50 border-emerald-300";
  } else if (result.percentage >= 60) {
    ratingLabel = "Borderline pass — review missed signals";
    ratingStyle = "text-amber-700 bg-amber-50 border-amber-300";
  } else {
    ratingLabel = "Needs work — study the missed signals below";
    ratingStyle = "text-red-700 bg-red-50 border-red-300";
  }

  return (
    <div className="space-y-5 max-w-3xl mx-auto">

      {/* ── A) SCORE BANNER ─────────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6 space-y-4">
        <h2 className="text-xl font-serif font-bold text-primary">Examiner Marking — Results</h2>

        {/* Main counts */}
        <div className="flex flex-wrap gap-6 items-center">
          <div>
            <p className="text-4xl font-bold text-primary">{identified.length}<span className="text-2xl text-muted-foreground font-normal"> / {totalSignals}</span></p>
            <p className="text-xs text-muted-foreground mt-0.5">signals identified</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">{result.percentage}<span className="text-2xl text-muted-foreground font-normal">%</span></p>
            <p className="text-xs text-muted-foreground mt-0.5">signal coverage</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className={`inline-flex text-sm font-semibold border px-3 py-1 rounded-full ${ratingStyle}`}>
              {ratingLabel}
            </span>
            <p className="text-xs text-muted-foreground">Time used: {fmtTime(result.timeUsed)}</p>
          </div>
        </div>

        {/* Critical signals summary */}
        <div className={`flex items-center gap-3 rounded-lg px-4 py-3 border text-sm ${
          criticalFound === criticalTotal
            ? "bg-emerald-50 border-emerald-200"
            : "bg-red-50 border-red-200"
        }`}>
          {criticalFound === criticalTotal ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          ) : (
            <XCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
          )}
          <p className={`font-semibold ${criticalFound === criticalTotal ? "text-emerald-800" : "text-red-800"}`}>
            {criticalFound}/{criticalTotal} critical signals found
            {criticalFound < criticalTotal && " — missing critical signals significantly affects your mark"}
          </p>
        </div>
      </div>

      {/* ── YOUR WRITTEN RESPONSE ────────────────────────────────────────────── */}
      <YourResponsePanel
        stem={stem}
        candidateAnswer={candidateAnswer}
        result={result}
        onRewrite={onRewrite}
      />

      {/* ── NEXT CTA — shown immediately after results ──────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={onNextRandom}
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
        >
          <ArrowRight className="w-4 h-4" /> Next Quiz — Random
        </button>
        <button
          onClick={onNextQuestion}
          className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-primary text-primary py-3 rounded-xl font-semibold hover:bg-primary/5 transition-colors"
        >
          <ArrowRight className="w-4 h-4" /> Next — Same Topic
        </button>
      </div>

      {/* ── B) SIGNALS YOU IDENTIFIED ───────────────────────────────────────── */}
      {identified.length > 0 && (
        <div className="bg-white rounded-2xl border border-card-border shadow-sm overflow-hidden">
          <button
            onClick={() => setShowIdentified((v) => !v)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors"
          >
            <span className="font-serif font-bold text-primary flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Signals you identified ✅ ({identified.length})
            </span>
            {showIdentified
              ? <ChevronUp className="w-4 h-4 text-muted-foreground" />
              : <ChevronDown className="w-4 h-4 text-muted-foreground" />
            }
          </button>
          {showIdentified && (
            <div className="px-5 pb-5 space-y-2.5 border-t border-card-border pt-4">
              {identified.map((m) => (
                <IdentifiedCard key={m.signal.id} signal={m.signal} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── C) SIGNALS YOU MISSED ───────────────────────────────────────────── */}
      {missed.length > 0 && (
        <div className="bg-white rounded-2xl border border-card-border shadow-sm overflow-hidden">
          <button
            onClick={() => setShowMissed((v) => !v)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors"
          >
            <span className="font-serif font-bold text-red-700 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              Signals you missed ❌ ({missed.length})
            </span>
            {showMissed
              ? <ChevronUp className="w-4 h-4 text-muted-foreground" />
              : <ChevronDown className="w-4 h-4 text-muted-foreground" />
            }
          </button>
          {showMissed && (
            <div className="px-5 pb-5 space-y-2.5 border-t border-card-border pt-4">
              {missed
                .filter((m) => m.signal.severity === "critical")
                .map((m) => (
                  <MissedCard key={m.signal.id} signal={m.signal} />
                ))}
              {missed
                .filter((m) => m.signal.severity !== "critical")
                .map((m) => (
                  <MissedCard key={m.signal.id} signal={m.signal} />
                ))}
            </div>
          )}
        </div>
      )}

      {/* Overcalled vague terms */}
      {result.overcalled.length > 0 && (
        <div className="bg-white rounded-2xl border border-card-border shadow-sm p-5">
          <h3 className="font-serif font-bold text-primary mb-1 text-sm">Vague / overcalled terms in your answer</h3>
          <p className="text-xs text-muted-foreground mb-3">
            These phrases were too generic to attract marks without substantive elaboration.
          </p>
          <ul className="space-y-2.5">
            {result.overcalled.map((oc, i) => (
              <li
                key={i}
                className={`flex items-start gap-3 rounded-lg px-3 py-2.5 border text-xs ${
                  oc.isPSLevel ? "bg-violet-50 border-violet-200" : "bg-amber-50 border-amber-200"
                }`}
              >
                <AlertTriangle className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${oc.isPSLevel ? "text-violet-500" : "text-amber-500"}`} />
                <div>
                  <span className={`font-semibold ${oc.isPSLevel ? "text-violet-900" : "text-primary"}`}>"{oc.text}"</span>
                  {oc.isPSLevel && (
                    <span className="ml-2 text-xs font-semibold text-violet-700 bg-violet-100 border border-violet-200 px-1.5 py-0.5 rounded-full">PS-level</span>
                  )}
                  <p className={`mt-0.5 leading-relaxed ${oc.isPSLevel ? "text-violet-800" : "text-muted-foreground"}`}>{oc.reason}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* PS-level marking panel */}
      <PSMarkingPanel result={result} />

      {/* ── D) EXAMINER FEEDBACK SUMMARY ────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6 space-y-4">
        <h3 className="font-serif font-bold text-primary">Examiner Feedback Summary</h3>

        {/* Marks grid */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-slate-50 rounded-xl border border-slate-200 px-3 py-4">
            <p className="text-2xl font-bold text-primary">{stem.totalMarks}</p>
            <p className="text-xs text-muted-foreground mt-0.5">marks available</p>
          </div>
          <div className="bg-accent/8 rounded-xl border border-accent/20 px-3 py-4">
            <p className="text-2xl font-bold text-accent">{estimatedMarks}</p>
            <p className="text-xs text-muted-foreground mt-0.5">estimated marks</p>
          </div>
          <div className="bg-slate-50 rounded-xl border border-slate-200 px-3 py-4">
            <p className="text-2xl font-bold text-primary">{result.percentage}%</p>
            <p className="text-xs text-muted-foreground mt-0.5">signal hit rate</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          Estimated marks weighted: Critical = 2 pts · Important = 1 pt · Optional = 0.5 pt
        </p>

        {/* Collapsible model answer */}
        <div className="border border-card-border rounded-xl overflow-hidden">
          <button
            onClick={() => setShowModel((v) => !v)}
            className="w-full flex items-center justify-between px-4 py-3 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
          >
            <span className="text-sm font-semibold text-primary">Show consultant model answer</span>
            {showModel
              ? <ChevronUp className="w-4 h-4 text-muted-foreground" />
              : <ChevronDown className="w-4 h-4 text-muted-foreground" />
            }
          </button>
          {showModel && (
            <div className="px-5 py-4 bg-primary/3 text-sm text-primary leading-relaxed whitespace-pre-line border-t border-card-border">
              {stem.modelAnswer}
            </div>
          )}
        </div>
      </div>

      {/* Course progress */}
      <div className="bg-white rounded-2xl border border-card-border shadow-sm p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-serif font-bold text-primary text-sm">Course Completion — Quiz Module</h3>
            <p className="text-xs text-muted-foreground mt-0.5">Quiz Mode contributes 30% of total course completion</p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-accent">{courseCompletion.courseContribution.toFixed(1)}%</span>
            <p className="text-xs text-muted-foreground">of course</p>
          </div>
        </div>
        <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-accent rounded-full transition-all"
            style={{ width: `${(courseCompletion.courseContribution / 30) * 100}%` }}
          />
          <div className="absolute right-0 top-0 h-full w-0.5 bg-slate-300" />
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{courseCompletion.uniqueAttempted} of {courseCompletion.totalStems} questions attempted</span>
          <span className="text-accent font-medium">{courseCompletion.quizModulePct.toFixed(0)}% of quiz bank</span>
        </div>
      </div>

      {/* Secondary nav */}
      <div className="bg-card rounded-2xl border border-card-border shadow-sm p-5 space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium text-primary">
              {TOPIC_LABELS[topic === "random" ? stem.topic : topic]}
            </span>
            <span>{progress.attempted} of {progress.available} attempted</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all"
              style={{ width: `${progress.available > 0 ? (progress.attempted / progress.available) * 100 : 0}%` }}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            onClick={onRepeatStem}
            className="flex items-center justify-center gap-2 border border-card-border text-primary px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/5 transition-colors"
          >
            <RotateCw className="w-4 h-4" /> Repeat Stem
          </button>
          <button
            onClick={onChangeTopic}
            className="flex items-center justify-center gap-2 border border-card-border text-primary px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/5 transition-colors"
          >
            <ListChecks className="w-4 h-4" /> Change Topic
          </button>
          <button
            onClick={onBackToModes}
            className="flex items-center justify-center gap-2 border border-card-border text-muted-foreground px-4 py-2.5 rounded-xl text-sm font-semibold hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Study Modes
          </button>
        </div>
      </div>

      {/* Next Quiz CTA */}
      <div className="bg-primary rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-white font-serif font-bold text-lg">Ready for the next challenge?</p>
          <p className="text-white/70 text-sm mt-0.5">Generates a new random question from any topic.</p>
        </div>
        <button
          onClick={onNextRandom}
          className="flex-shrink-0 flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors shadow-sm text-sm"
        >
          <ArrowRight className="w-4 h-4" /> Next Quiz (Random)
        </button>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function QuizMode() {
  const { fullName, candidateNumber } = useCandidate();
  const [phase, setPhase] = useState<Phase>("setup");
  const [currentStem, setCurrentStem] = useState<QuizStem | null>(null);
  const [currentTopic, setCurrentTopic] = useState<TopicKey>("random");
  const [currentTimeSecs, setCurrentTimeSecs] = useState(180);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [lastCandidateAnswer, setLastCandidateAnswer] = useState("");
  const [sessionProgress, setSessionProgress] = useState({ attempted: 0, available: 0 });
  const [stemAlreadyAttempted, setStemAlreadyAttempted] = useState(false);
  const [prefilledAnswer, setPrefilledAnswer] = useState<string | undefined>(undefined);
  const [pendingAnswer, setPendingAnswer] = useState("");
  const [pendingTimeUsed, setPendingTimeUsed] = useState(0);

  function refreshProgress(topic: TopicKey) {
    const stats = getTopicStats(topic);
    setSessionProgress({ attempted: stats.attempted, available: stats.available });
  }

  function handleGenerate(topic: TopicKey, timeSecs: number) {
    const stem = getNextStem(topic);
    setCurrentStem(stem);
    setCurrentTopic(topic);
    setCurrentTimeSecs(timeSecs);
    setStemAlreadyAttempted(hasStemBeenAttempted(stem.id));
    refreshProgress(topic);
    setPhase("quiz");
  }

  function handleSubmit(answer: string, timeUsed: number) {
    if (!currentStem) return;
    setPendingAnswer(answer);
    setPendingTimeUsed(timeUsed);
    setPhase("selfmark");
  }

  function handleSelfMarkComplete(identifiedIds: string[]) {
    if (!currentStem) return;
    const r = assessAnswer(currentStem, identifiedIds, pendingTimeUsed);
    setResult(r);
    setLastCandidateAnswer(pendingAnswer);
    const attempt = createAttempt(fullName, candidateNumber, currentStem, pendingAnswer, r);
    saveAttempt(attempt);
    refreshProgress(currentTopic);
    setPhase("results");
  }

  function handleNextQuestion() {
    const stem = getNextStem(currentTopic, undefined, currentStem?.id);
    setCurrentStem(stem);
    setResult(null);
    setStemAlreadyAttempted(hasStemBeenAttempted(stem.id));
    refreshProgress(currentTopic);
    setPhase("quiz");
  }

  function handleNextRandom() {
    const stem = getNextStem("random", undefined, currentStem?.id);
    setCurrentStem(stem);
    setCurrentTopic("random");
    setResult(null);
    setStemAlreadyAttempted(hasStemBeenAttempted(stem.id));
    refreshProgress("random");
    setPhase("quiz");
  }

  function handleRepeatStem() {
    setPrefilledAnswer(undefined);
    setResult(null);
    setPhase("quiz");
  }

  function handleRewrite() {
    setPrefilledAnswer(lastCandidateAnswer);
    setResult(null);
    setPhase("quiz");
  }

  function handleChangeTopic() {
    setCurrentStem(null);
    setResult(null);
    setPhase("setup");
  }

  function handleBackToModes() {
    window.location.href = "/phases";
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 pt-8 md:pt-12">
      <Header />

      <div className="mt-6 mb-5">
        <Link
          href="/phases"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to study modes
        </Link>
      </div>

      {phase === "setup" && (
        <SetupScreen
          onGenerate={handleGenerate}
          globalProgress={{
            completed: getQuizModuleCompletion(candidateNumber, QUIZ_STEMS.length).uniqueAttempted,
            total: QUIZ_STEMS.length,
          }}
        />
      )}

      {phase === "quiz" && currentStem && (
        <QuizScreen
          stem={currentStem}
          timeSecs={currentTimeSecs}
          onSubmit={handleSubmit}
          alreadyAttempted={stemAlreadyAttempted}
          onSkipToNext={handleNextQuestion}
          initialAnswer={prefilledAnswer}
        />
      )}
      {phase === "selfmark" && currentStem && (
        <SelfMarkScreen
          stem={currentStem}
          candidateAnswer={pendingAnswer}
          timeUsed={pendingTimeUsed}
          onComplete={handleSelfMarkComplete}
        />
      )}

      {phase === "results" && currentStem && result && (
        <ResultsScreen
          stem={currentStem}
          result={result}
          candidateAnswer={lastCandidateAnswer}
          topic={currentTopic}
          progress={sessionProgress}
          onNextRandom={handleNextRandom}
          onNextQuestion={handleNextQuestion}
          onRepeatStem={handleRepeatStem}
          onChangeTopic={handleChangeTopic}
          onBackToModes={handleBackToModes}
          onRewrite={handleRewrite}
          courseCompletion={getQuizModuleCompletion(candidateNumber, QUIZ_STEMS.length)}
        />
      )}

      <p className="text-center text-xs text-muted-foreground pb-8 mt-4">
        Educational preparation tool only. Not an official RANZCP product.
      </p>
    </div>
  );
}
