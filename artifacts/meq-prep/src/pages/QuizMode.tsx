import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useSearch } from "wouter";
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
  loadAttempts, getCompletedStemIds,
} from "@/lib/quizEngine";
import {
  getNextStem, getTopicStats, TopicStats,
} from "@/lib/quizSessionStore";
import {
  ArrowLeft, RotateCcw, Send, ChevronDown, ChevronUp,
  RotateCw, ListChecks, ArrowRight,
  FileText, Bookmark, BookmarkCheck, Trash2, PenLine, History, BarChart2,
} from "lucide-react";

type Phase = "setup" | "quiz" | "selfmark" | "results";

// ─── helpers ──────────────────────────────────────────────────────────────────
function fmtTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

// ─── Setup screen ─────────────────────────────────────────────────────────────
function SetupScreen({
  onGenerate,
  globalProgress,
  candidateNumber,
}: {
  onGenerate: (topic: TopicKey, timeSecs: number) => void;
  globalProgress: { completed: number; total: number };
  candidateNumber: string;
}) {
  const [topic, setTopic] = useState<TopicKey>("random");
  const savedCount = loadAttempts().filter(
    (a) => a.registrationNumber === candidateNumber
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
          <ListChecks className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h2 className="text-xl font-serif font-bold text-primary">Quiz Mode</h2>
          <p className="text-sm text-muted-foreground">
            Multiple MEQ stems across various domains — practice identifying the important information in pressured conditions.
          </p>
        </div>
      </div>

      {/* 3-card grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Card 1 — Start Quiz */}
        <div className="md:col-span-1 bg-card rounded-2xl border border-card-border shadow-sm p-5 flex flex-col gap-4">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">Topic</p>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value as TopicKey)}
              className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {(Object.entries(TOPIC_LABELS) as [TopicKey, string][]).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>
          </div>
          <button
            onClick={() => onGenerate(topic, 600)}
            className="w-full flex items-center justify-center gap-2 bg-primary text-white py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm mt-auto"
          >
            Generate Quiz Stem <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Card 2 — Progress */}
        <div className="bg-card rounded-2xl border border-card-border shadow-sm p-5 flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-1">
            <BarChart2 className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Your Progress</span>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-3">
            <div>
              <p className="text-3xl font-bold font-mono text-primary tabular-nums">
                {globalProgress.completed}
                <span className="text-lg font-normal text-muted-foreground">/{globalProgress.total}</span>
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">unique stems attempted</p>
            </div>
            {globalProgress.total > 0 && (
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all"
                  style={{ width: `${Math.min((globalProgress.completed / globalProgress.total) * 100, 100)}%` }}
                />
              </div>
            )}
            <p className="text-xs text-muted-foreground">
              {globalProgress.total > 0
                ? `${Math.round((globalProgress.completed / globalProgress.total) * 100)}% of question bank covered`
                : "No questions attempted yet"}
            </p>
          </div>
        </div>

        {/* Card 3 — Quiz History */}
        <div className="bg-card rounded-2xl border border-card-border shadow-sm p-5 flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-1">
            <History className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Quiz History</span>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-2">
            <p className="text-3xl font-bold font-mono text-primary tabular-nums">{savedCount}</p>
            <p className="text-xs text-muted-foreground">saved question attempts</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Review your written answers and compare against the marking guide.
            </p>
          </div>
          <Link
            href="/review"
            className="w-full flex items-center justify-center gap-2 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white py-2.5 rounded-lg font-semibold transition-colors text-sm mt-auto"
          >
            Review Previous Questions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

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
  const markSecs = stem.totalMarks * 60;
  const [skipDismissed, setSkipDismissed] = useState(false);
  const [answer, setAnswer] = useState(initialAnswer ?? "");
  const [answer2, setAnswer2] = useState("");
  const [timeLeft, setTimeLeft] = useState(markSecs);
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
    setTimeLeft(markSecs);
    setAnswer("");
    setAnswer2("");
    timeUsedRef.current = 0;
  }, [clearTick, markSecs]);

  useEffect(() => () => clearTick(), [clearTick]);

  const pct = ((markSecs - timeLeft) / markSecs) * 100;
  const urgent = timeLeft <= 60 && started && !paused;

  function handleSubmit() {
    clearTick();
    const used = markSecs - timeLeft;
    const combined = `BROAD DOMAINS:\n${answer}\n\nPOINTS IN EACH DOMAIN:\n${answer2}`;
    onSubmit(combined, used);
  }

  function handleTimerClick() {
    if (!started || paused) {
      startTimer();
    } else {
      stopTimer();
    }
  }

  return (
    <div className="space-y-4 max-w-3xl mx-auto">

      {/* ── UNIFIED CLOCK + INFO BOX ──────────────────────────────────────────── */}
      <div
        onClick={!timeExpired ? handleTimerClick : undefined}
        className={[
          "rounded-2xl select-none transition-all overflow-hidden",
          timeExpired ? "cursor-default" : "cursor-pointer active:scale-[0.99]",
        ].join(" ")}
        style={{ background: timeExpired ? "#450a0a" : urgent ? "#1e0a0a" : "#0f172a" }}
      >
        {/* top row: status label + reset */}
        <div className="flex items-center justify-between px-5 pt-4 pb-1">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
            {timeExpired ? "Time's up" : !started ? "Click to start" : paused ? "Paused — click to resume" : "Running — click to pause"}
          </span>
          <button
            onClick={(e) => { e.stopPropagation(); resetTimer(); }}
            className="flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-lg text-white/40 hover:text-white/80 transition-colors"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
        </div>

        {/* big clock */}
        <div className="flex items-center justify-center py-5">
          <span className={[
            "font-mono font-black tracking-tight tabular-nums text-7xl md:text-8xl",
            timeExpired ? "text-red-400" : urgent ? "text-red-400" : "text-white",
          ].join(" ")}>
            {fmtTime(timeLeft)}
          </span>
        </div>

        {/* progress bar */}
        <div className="h-[3px] bg-white/10">
          <div
            className={["h-full transition-all duration-1000", urgent || timeExpired ? "bg-red-500" : "bg-indigo-500"].join(" ")}
            style={{ width: `${100 - pct}%` }}
          />
        </div>

        {/* domain + marks row */}
        <div className="flex items-center gap-3 px-5 py-3 border-t border-white/10">
          <span className="text-sm font-bold text-white/90">{TOPIC_LABELS[stem.topic]}</span>
          <span className="text-white/30">·</span>
          <span className="text-sm text-white/60">
            <span className="font-semibold text-white/90">{stem.totalMarks}</span> marks
          </span>
        </div>
      </div>

      {/* ── QUESTION ─────────────────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6 md:p-7">
        <p className="text-xs font-mono text-muted-foreground mb-1">{stem.questionNumber}</p>
        <h3 className="text-base font-serif font-bold text-primary mb-1">{stem.title}</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Setting: {stem.setting}&nbsp;·&nbsp;Role: {stem.candidateRole}
        </p>
        <div className="bg-slate-50 rounded-xl p-5 text-sm text-primary leading-relaxed whitespace-pre-line border border-slate-100">
          {stem.stem}
        </div>
      </div>

      {/* Already-attempted notice */}
      {alreadyAttempted && !skipDismissed && (
        <div className="flex items-center justify-between gap-3 bg-violet-50 border border-violet-200 rounded-xl px-4 py-3">
          <div className="flex items-center gap-2 min-w-0">
            <RotateCw className="w-4 h-4 text-violet-500 flex-shrink-0" />
            <p className="text-sm text-violet-800 font-medium">You've already attempted this stem.</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={onSkipToNext}
              className="flex items-center gap-1.5 bg-violet-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-violet-700 transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5" /> Skip to Next
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

      {/* ── BROAD DOMAINS ────────────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6">
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
          Broad Domains
        </label>
        <p className="text-xs text-muted-foreground mb-3">
          List the broad clinical domains relevant to this question (e.g. risk, diagnosis, legal, family, disposition).
        </p>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-y leading-relaxed"
          placeholder="e.g. Risk assessment, Capacity / MHA, Family involvement, Disposition..."
        />
      </div>

      {/* ── POINTS IN EACH DOMAIN ────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6">
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
          Points in Each Domain
        </label>
        <p className="text-xs text-muted-foreground mb-3">
          Expand each domain with specific clinical points, actions and reasoning.
        </p>
        <textarea
          value={answer2}
          onChange={(e) => setAnswer2(e.target.value)}
          rows={7}
          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-y leading-relaxed"
          placeholder="e.g. Risk: high-lethality attempt, active intent, no safety plan — cannot discharge..."
        />
      </div>

      {/* ── SUBMIT / SKIP ─────────────────────────────────────────────────────── */}
      <div className="space-y-3 pb-6">
        <button
          onClick={handleSubmit}
          disabled={!started || (answer.trim().length + answer2.trim().length) < 10}
          className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3.5 rounded-xl font-semibold hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <Send className="w-4 h-4" /> Submit answer for marking
        </button>
        {!started && (
          <p className="text-center text-xs text-muted-foreground">Click the timer above to begin</p>
        )}
        <button
          onClick={onSkipToNext}
          className="w-full flex items-center justify-center gap-2 border-2 border-slate-200 text-muted-foreground py-2.5 rounded-xl text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
        >
          Skip — try a different question <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

// ─── Identified signal card ────────────────────────────────────────────────────
// ─── Self-Marking Screen ───────────────────────────────────────────────────────

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
  function handleSubmit() {
    onComplete([]);
  }

  return (
    <div className="max-w-6xl mx-auto space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
          <ListChecks className="w-5 h-5 text-violet-600" />
        </div>
        <div>
          <h2 className="text-xl font-serif font-bold text-primary">Self-Marking</h2>
          <p className="text-sm text-muted-foreground">Compare your answer against the marking key</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 items-start">
        {/* ── Left panel: candidate answer ──────────────────────────────────── */}
        <div className="lg:w-2/5 bg-white rounded-2xl border border-card-border shadow-sm p-5 space-y-3 lg:sticky lg:top-4">
          <p className="text-xs font-mono text-muted-foreground">{stem.questionNumber}</p>
          <h3 className="font-serif font-bold text-primary text-base">{stem.title}</h3>
          <p className="text-xs text-muted-foreground -mt-1">Your written answer</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-primary leading-relaxed whitespace-pre-wrap min-h-[200px] max-h-[60vh] overflow-y-auto">
            {candidateAnswer.trim() || <span className="text-muted-foreground italic">No response submitted.</span>}
          </div>
          <p className="text-xs text-muted-foreground">Time taken: <span className="font-semibold text-primary">{fmtTime(timeUsed)}</span></p>
        </div>

        {/* ── Right panel: marking key ───────────────────────────────────────── */}
        <div className="lg:w-3/5 space-y-4">
          <h3 className="font-serif font-bold text-primary text-base">Marking Key</h3>

          {/* Broad Domains box */}
          <div className="bg-white rounded-2xl border border-card-border shadow-sm p-5 space-y-2">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Broad Domains</p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-primary leading-relaxed whitespace-pre-wrap min-h-[100px]">
              {stem.broadDomains?.trim()
                ? stem.broadDomains
                : <span className="text-muted-foreground italic">Content coming soon.</span>
              }
            </div>
          </div>

          {/* Points in Each Domain box */}
          <div className="bg-white rounded-2xl border border-card-border shadow-sm p-5 space-y-2">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Points in Each Domain</p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-primary leading-relaxed whitespace-pre-wrap min-h-[140px]">
              {stem.pointsInEachDomain?.trim()
                ? stem.pointsInEachDomain
                : <span className="text-muted-foreground italic">Content coming soon.</span>
              }
            </div>
          </div>

          {/* Submit */}
          <div className="bg-white rounded-2xl border border-card-border shadow-sm p-5">
            <button
              onClick={handleSubmit}
              className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
            >
              <Send className="w-4 h-4" /> Submit Self-Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


// ─── Marking Guide Table ──────────────────────────────────────────────────────
function MarkingGuideTable({ sections }: { sections: { letter: string; heading: string; points: string[] }[] }) {
  return (
    <div className="border-2 border-pink-400 rounded-sm overflow-hidden text-sm">
      {sections.map((section, i) => (
        <div
          key={section.letter}
          className={`flex ${i < sections.length - 1 ? "border-b-2 border-pink-400" : ""}`}
        >
          {/* Letter cell */}
          <div className="w-10 flex-shrink-0 bg-pink-100 flex items-start justify-center pt-3 border-r-2 border-pink-400">
            <span className="font-bold text-pink-700 text-sm">{section.letter}.</span>
          </div>
          {/* Content cell */}
          <div className={`flex-1 px-4 py-3 ${i % 2 === 0 ? "bg-white" : "bg-pink-50"}`}>
            <p className="font-bold text-primary mb-1">{section.heading}</p>
            <ul className="space-y-1">
              {section.points.map((point, j) => (
                <li key={j} className="flex items-start gap-2 text-primary">
                  <span className="mt-1 text-pink-500 flex-shrink-0">·</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
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
              Response saved.{" "}
              <Link href="/review" className="underline font-semibold hover:text-emerald-900">
                View Quiz History →
              </Link>
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
  const [showMarkingGuide, setShowMarkingGuide] = useState(false);
  const [showConcept, setShowConcept] = useState(false);

  return (
    <div className="space-y-5 max-w-3xl mx-auto">

      {/* ── A) FEEDBACK SCORE CARD ──────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-serif font-bold text-primary">Feedback</h2>
          <p className="text-xs text-muted-foreground">Time used: {fmtTime(result.timeUsed)}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Domains Identified */}
          <div className="rounded-xl border border-card-border bg-slate-50 p-4 space-y-2">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Domains Identified</p>
            <div className="text-sm text-primary leading-relaxed whitespace-pre-wrap min-h-[60px]">
              {stem.broadDomains?.trim()
                ? stem.broadDomains
                : <span className="text-muted-foreground italic">Content coming soon.</span>
              }
            </div>
          </div>

          {/* Points Identified */}
          <div className="rounded-xl border border-card-border bg-slate-50 p-4 space-y-2">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Points Identified</p>
            <div className="text-sm text-primary leading-relaxed whitespace-pre-wrap min-h-[60px]">
              {stem.pointsInEachDomain?.trim()
                ? stem.pointsInEachDomain
                : <span className="text-muted-foreground italic">Content coming soon.</span>
              }
            </div>
          </div>

          {/* Missed Information */}
          <div className="rounded-xl border border-card-border bg-slate-50 p-4 space-y-2">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Missed Information</p>
            <div className="text-sm text-primary leading-relaxed whitespace-pre-wrap min-h-[60px]">
              {stem.missedInformation?.trim()
                ? stem.missedInformation
                : <span className="text-muted-foreground italic">Content coming soon.</span>
              }
            </div>
          </div>
        </div>
      </div>

      {/* ── YOUR WRITTEN RESPONSE ────────────────────────────────────────────── */}
      <YourResponsePanel
        stem={stem}
        candidateAnswer={candidateAnswer}
        result={result}
        onRewrite={onRewrite}
      />

      {/* ── NEXT CTA ────────────────────────────────────────────────────────── */}
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

      {/* ── MARKING GUIDE ───────────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-card-border shadow-sm overflow-hidden">
        <button
          onClick={() => setShowMarkingGuide((v) => !v)}
          className="w-full flex items-center justify-between px-5 py-4 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
        >
          <span className="text-sm font-semibold text-primary">Marking Guide</span>
          {showMarkingGuide
            ? <ChevronUp className="w-4 h-4 text-muted-foreground" />
            : <ChevronDown className="w-4 h-4 text-muted-foreground" />
          }
        </button>
        {showMarkingGuide && (
          <div className="p-5 border-t border-card-border">
            {stem.markingGuide && stem.markingGuide.length > 0
              ? <MarkingGuideTable sections={stem.markingGuide} />
              : <span className="text-sm text-muted-foreground italic">Content coming soon.</span>
            }
          </div>
        )}
      </div>

      {/* ── CONCEPT EXPLANATION ─────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-card-border shadow-sm overflow-hidden">
        <button
          onClick={() => setShowConcept((v) => !v)}
          className="w-full flex items-center justify-between px-5 py-4 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
        >
          <span className="text-sm font-semibold text-primary">Concept Explanation</span>
          {showConcept
            ? <ChevronUp className="w-4 h-4 text-muted-foreground" />
            : <ChevronDown className="w-4 h-4 text-muted-foreground" />
          }
        </button>
        {showConcept && (
          <div className="px-5 py-4 text-sm text-primary leading-relaxed whitespace-pre-line border-t border-card-border">
            {stem.conceptExplanation?.trim()
              ? stem.conceptExplanation
              : <span className="text-muted-foreground italic">Content coming soon.</span>
            }
          </div>
        )}
      </div>

      {/* ── COURSE PROGRESS ─────────────────────────────────────────────────── */}
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

      {/* ── SECONDARY NAV ───────────────────────────────────────────────────── */}
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

      {/* ── BOTTOM CTA ──────────────────────────────────────────────────────── */}
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
  const search = useSearch();
  const [phase, setPhase] = useState<Phase>("setup");
  const [currentStem, setCurrentStem] = useState<QuizStem | null>(null);
  const [currentTopic, setCurrentTopic] = useState<TopicKey>("random");
  const [currentTimeSecs, setCurrentTimeSecs] = useState(600);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [lastCandidateAnswer, setLastCandidateAnswer] = useState("");
  const [sessionProgress, setSessionProgress] = useState({ attempted: 0, available: 0 });
  const [stemAlreadyAttempted, setStemAlreadyAttempted] = useState(false);
  const [prefilledAnswer, setPrefilledAnswer] = useState<string | undefined>(undefined);
  const [pendingAnswer, setPendingAnswer] = useState("");
  const [pendingTimeUsed, setPendingTimeUsed] = useState(0);

  useEffect(() => {
    if (!candidateNumber) return;
    const params = new URLSearchParams(search);
    const reattemptId = params.get("reattempt");
    if (!reattemptId) return;
    const stem = QUIZ_STEMS.find((s) => s.id === reattemptId);
    if (!stem) return;
    setCurrentStem(stem);
    setCurrentTopic(stem.topic as TopicKey);
    setCurrentTimeSecs(180);
    setStemAlreadyAttempted(true);
    setPhase("quiz");
  }, [candidateNumber, search]);

  function refreshProgress(topic: TopicKey) {
    const stats = getTopicStats(topic);
    setSessionProgress({ attempted: stats.attempted, available: stats.available });
  }

  function handleGenerate(topic: TopicKey, timeSecs: number) {
    const completed = getCompletedStemIds(candidateNumber);
    const stem = getNextStem(topic, undefined, undefined, completed);
    setCurrentStem(stem);
    setCurrentTopic(topic);
    setCurrentTimeSecs(timeSecs);
    setStemAlreadyAttempted(hasStemBeenAttempted(stem.id, candidateNumber));
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
    const completed = getCompletedStemIds(candidateNumber);
    const stem = getNextStem(currentTopic, undefined, currentStem?.id, completed);
    setCurrentStem(stem);
    setResult(null);
    setStemAlreadyAttempted(hasStemBeenAttempted(stem.id, candidateNumber));
    refreshProgress(currentTopic);
    setPhase("quiz");
  }

  function handleNextRandom() {
    const completed = getCompletedStemIds(candidateNumber);
    const stem = getNextStem("random", undefined, currentStem?.id, completed);
    setCurrentStem(stem);
    setCurrentTopic("random");
    setResult(null);
    setStemAlreadyAttempted(hasStemBeenAttempted(stem.id, candidateNumber));
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
          candidateNumber={candidateNumber}
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
