import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { useCandidate } from "@/lib/store";
import {
  TOPIC_LABELS, DIFFICULTY_LABELS, TopicKey, DifficultyKey,
  getRandomStem, QuizStem, ExpectedSignal,
} from "@/lib/quizData";
import {
  assessAnswer, createAttempt, saveAttempt, QuizResult,
  CATEGORY_LABELS,
} from "@/lib/quizEngine";
import {
  ArrowLeft, Play, Square, RotateCcw, Send, CheckCircle2,
  XCircle, AlertTriangle, ChevronDown, ChevronUp, Clock,
  RotateCw, ListChecks, ArrowRight,
} from "lucide-react";

type Phase = "setup" | "quiz" | "results";

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
}: {
  onGenerate: (topic: TopicKey, difficulty: DifficultyKey, timeSecs: number) => void;
}) {
  const [topic, setTopic] = useState<TopicKey>("random");
  const [difficulty, setDifficulty] = useState<DifficultyKey>("standard");
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
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-primary uppercase tracking-wider">
              Difficulty
            </label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value as DifficultyKey)}
              className="w-full h-11 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {(Object.entries(DIFFICULTY_LABELS) as [DifficultyKey, string][]).map(([k, v]) => (
                <option key={k} value={k}>{v}</option>
              ))}
            </select>
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
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800 leading-relaxed">
          <strong>Important:</strong> Do not consult notes or references during the quiz.
          The timer begins when you press Start. Submit your own unassisted signal list.
          Examiner feedback appears only after submission.
        </div>

        <button
          onClick={() => onGenerate(topic, difficulty, timeSecs)}
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
  stem, timeSecs, onSubmit,
}: {
  stem: QuizStem;
  timeSecs: number;
  onSubmit: (answer: string, timeUsed: number) => void;
}) {
  const [answer, setAnswer] = useState("");
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

  return (
    <div className="space-y-5 max-w-3xl mx-auto">
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

      {/* timer */}
      <div className={`bg-white rounded-2xl border shadow-sm p-5 ${urgent ? "border-red-300 bg-red-50" : "border-card-border"}`}>
        <div className="flex items-center gap-4 mb-3">
          <Clock className={`w-4 h-4 ${urgent ? "text-red-600" : "text-accent"}`} />
          <span className={`font-mono text-2xl font-bold ${urgent ? "text-red-700" : "text-primary"}`}>
            {fmtTime(timeLeft)}
          </span>
          {timeExpired && (
            <span className="text-xs font-semibold text-red-700 bg-red-100 border border-red-200 px-2 py-0.5 rounded-full">
              Time finished — you may still submit
            </span>
          )}
          <div className="ml-auto flex gap-2">
            {!started && (
              <button onClick={startTimer} className="flex items-center gap-1.5 bg-primary text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                <Play className="w-3.5 h-3.5" /> Start
              </button>
            )}
            {started && !paused && !timeExpired && (
              <button onClick={stopTimer} className="flex items-center gap-1.5 border border-border text-muted-foreground text-xs font-semibold px-4 py-2 rounded-lg hover:text-primary transition-colors">
                <Square className="w-3.5 h-3.5" /> Stop
              </button>
            )}
            {started && paused && (
              <button onClick={startTimer} className="flex items-center gap-1.5 bg-primary text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                <Play className="w-3.5 h-3.5" /> Resume
              </button>
            )}
            <button onClick={resetTimer} className="flex items-center gap-1.5 border border-border text-muted-foreground text-xs font-semibold px-3 py-2 rounded-lg hover:text-primary transition-colors">
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${urgent ? "bg-red-500" : "bg-accent"}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

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
          <p className="text-center text-xs text-muted-foreground mt-2">Press Start to begin timing before submitting</p>
        )}
      </div>
    </div>
  );
}

// ─── Signal result card ───────────────────────────────────────────────────────
function SignalCard({ signal, identified }: { signal: ExpectedSignal; identified: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-xl border ${identified ? "border-emerald-200 bg-emerald-50" : signal.severity === "critical" ? "border-red-200 bg-red-50" : "border-amber-200 bg-amber-50"} overflow-hidden`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start gap-3 p-4 text-left"
      >
        <div className="mt-0.5 flex-shrink-0">
          {identified
            ? <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            : signal.severity === "critical"
            ? <XCircle className="w-4 h-4 text-red-600" />
            : <AlertTriangle className="w-4 h-4 text-amber-600" />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-0.5">
            <span className={`text-xs font-semibold border px-2 py-0.5 rounded-full ${SEVERITY_COLOURS[signal.severity]}`}>
              {SEVERITY_LABELS[signal.severity]}
            </span>
            <span className="text-xs text-muted-foreground">{CATEGORY_LABELS[signal.category]}</span>
          </div>
          <p className="text-sm font-medium text-primary">{signal.name}</p>
        </div>
        <div className="flex-shrink-0 ml-2">
          {open ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
        </div>
      </button>
      {open && (
        <div className="px-4 pb-4 pt-0 space-y-3 border-t border-current/10">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Clue in stem</p>
            <p className="text-xs italic text-muted-foreground">"{signal.clueInStem}"</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Why it matters</p>
            <p className="text-xs text-primary leading-relaxed">{signal.whyItMatters}</p>
          </div>
          {(signal.relatedRisk || signal.relatedLegal || signal.relatedCultural || signal.relatedSystem) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {signal.relatedRisk && <div><p className="text-xs font-semibold text-muted-foreground mb-0.5">Risk</p><p className="text-xs">{signal.relatedRisk}</p></div>}
              {signal.relatedLegal && <div><p className="text-xs font-semibold text-muted-foreground mb-0.5">Legal</p><p className="text-xs">{signal.relatedLegal}</p></div>}
              {signal.relatedCultural && <div><p className="text-xs font-semibold text-muted-foreground mb-0.5">Cultural</p><p className="text-xs">{signal.relatedCultural}</p></div>}
              {signal.relatedSystem && <div><p className="text-xs font-semibold text-muted-foreground mb-0.5">System</p><p className="text-xs">{signal.relatedSystem}</p></div>}
            </div>
          )}
          <div className="bg-white rounded-lg p-3 border border-current/10">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Model wording</p>
            <p className="text-xs text-primary italic leading-relaxed">{signal.modelWording}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Results screen ───────────────────────────────────────────────────────────
function ResultsScreen({
  stem, result, onTryAnother, onRepeatTopic, topic,
}: {
  stem: QuizStem;
  result: QuizResult;
  onTryAnother: () => void;
  onRepeatTopic: () => void;
  topic: TopicKey;
}) {
  const [showModel, setShowModel] = useState(false);

  const identified = result.matches.filter((m) => m.identified);
  const missed = result.matches.filter((m) => !m.identified);

  const judgementStyles = {
    strong: "text-emerald-700 bg-emerald-50 border-emerald-200",
    borderline: "text-amber-700 bg-amber-50 border-amber-200",
    weak: "text-red-700 bg-red-50 border-red-200",
  };
  const judgementLabels = {
    strong: "Strong",
    borderline: "Borderline",
    weak: "Weak",
  };

  return (
    <div className="space-y-5 max-w-3xl mx-auto">
      {/* Score card */}
      <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6">
        <h2 className="text-xl font-serif font-bold text-primary mb-4">Examiner Marking — Results</h2>
        <div className="flex flex-wrap gap-4 items-start">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">{result.score}</p>
            <p className="text-xs text-muted-foreground">/ {result.maxScore} marks</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">{result.percentage}%</p>
            <p className="text-xs text-muted-foreground">signals identified</p>
          </div>
          <div>
            <span className={`inline-flex text-sm font-semibold border px-3 py-1 rounded-full ${judgementStyles[result.judgement]}`}>
              {judgementLabels[result.judgement]} performance
            </span>
            <p className="text-xs text-muted-foreground mt-1">
              Time used: {fmtTime(result.timeUsed)}
            </p>
          </div>
        </div>

        {result.criticalMissed.length > 0 && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-xs font-semibold text-red-700">
              {result.criticalMissed.length} critical signal{result.criticalMissed.length > 1 ? "s" : ""} missed —
              in a real MEQ this would significantly affect your mark.
            </p>
          </div>
        )}
      </div>

      {/* Priority ranking */}
      <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6">
        <h3 className="font-serif font-bold text-primary mb-3">Signal Priority Ranking</h3>
        <div className="grid md:grid-cols-3 gap-4 text-xs">
          <div>
            <p className="font-semibold text-red-700 uppercase tracking-wider mb-2">Urgent</p>
            <ul className="space-y-1">
              {stem.priorityOrder.urgent.map((id) => {
                const sig = stem.signals.find((s) => s.id === id);
                if (!sig) return null;
                const found = result.matches.find((m) => m.signal.id === id)?.identified;
                return (
                  <li key={id} className={`flex items-start gap-1.5 ${found ? "text-primary" : "text-red-600"}`}>
                    <span className="mt-0.5">{found ? "✓" : "✗"}</span>
                    <span>{sig.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-amber-700 uppercase tracking-wider mb-2">Secondary</p>
            <ul className="space-y-1">
              {stem.priorityOrder.secondary.map((id) => {
                const sig = stem.signals.find((s) => s.id === id);
                if (!sig) return null;
                const found = result.matches.find((m) => m.signal.id === id)?.identified;
                return (
                  <li key={id} className={`flex items-start gap-1.5 ${found ? "text-primary" : "text-amber-700"}`}>
                    <span className="mt-0.5">{found ? "✓" : "–"}</span>
                    <span>{sig.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-muted-foreground uppercase tracking-wider mb-2">Low yield</p>
            <ul className="space-y-1 text-muted-foreground">
              {stem.priorityOrder.lowYield.map((id) => {
                const sig = stem.signals.find((s) => s.id === id);
                if (!sig) return null;
                const found = result.matches.find((m) => m.signal.id === id)?.identified;
                return (
                  <li key={id} className="flex items-start gap-1.5">
                    <span className="mt-0.5">{found ? "✓" : "·"}</span>
                    <span>{sig.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Correctly identified */}
      {identified.length > 0 && (
        <div>
          <h3 className="font-serif font-bold text-primary mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Correctly identified signals ({identified.length})
          </h3>
          <div className="space-y-2">
            {identified.map((m) => (
              <SignalCard key={m.signal.id} signal={m.signal} identified />
            ))}
          </div>
        </div>
      )}

      {/* Critical missed */}
      {result.criticalMissed.length > 0 && (
        <div>
          <h3 className="font-serif font-bold text-red-700 mb-3 flex items-center gap-2">
            <XCircle className="w-4 h-4" />
            Critical missed signals ({result.criticalMissed.length})
          </h3>
          <div className="space-y-2">
            {result.criticalMissed.map((sig) => (
              <SignalCard key={sig.id} signal={sig} identified={false} />
            ))}
          </div>
        </div>
      )}

      {/* Important missed */}
      {result.importantMissed.length > 0 && (
        <div>
          <h3 className="font-serif font-bold text-amber-700 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Missed signals ({result.importantMissed.length})
          </h3>
          <div className="space-y-2">
            {result.importantMissed.map((sig) => (
              <SignalCard key={sig.id} signal={sig} identified={false} />
            ))}
          </div>
        </div>
      )}

      {/* Overcalled */}
      {result.overcalled.length > 0 && (
        <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6">
          <h3 className="font-serif font-bold text-primary mb-3">Overcalled / vague terms noted</h3>
          <ul className="space-y-2">
            {result.overcalled.map((oc, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-primary">"{oc.text}"</span>
                  <span className="text-muted-foreground"> — {oc.reason}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Model answer */}
      <div className="bg-white rounded-2xl border border-card-border shadow-sm p-6">
        <button
          onClick={() => setShowModel((v) => !v)}
          className="w-full flex items-center justify-between text-left"
        >
          <h3 className="font-serif font-bold text-primary">Examiner correction — model answer</h3>
          {showModel ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
        </button>
        {showModel && (
          <div className="mt-4 bg-primary/4 rounded-xl p-5 text-sm text-primary leading-relaxed whitespace-pre-line">
            {stem.modelAnswer}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 pb-8">
        <button
          onClick={onTryAnother}
          className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          <RotateCw className="w-4 h-4" /> Try another stem
        </button>
        <button
          onClick={onRepeatTopic}
          className="flex items-center gap-2 border-2 border-primary text-primary px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-colors"
        >
          Repeat same topic
        </button>
        <Link
          href="/phases"
          className="flex items-center gap-2 border border-card-border text-muted-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to study modes
        </Link>
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
  const [currentDifficulty, setCurrentDifficulty] = useState<DifficultyKey>("standard");
  const [currentTimeSecs, setCurrentTimeSecs] = useState(180);
  const [result, setResult] = useState<QuizResult | null>(null);

  function handleGenerate(topic: TopicKey, difficulty: DifficultyKey, timeSecs: number) {
    const stem = getRandomStem(topic, difficulty);
    setCurrentStem(stem);
    setCurrentTopic(topic);
    setCurrentDifficulty(difficulty);
    setCurrentTimeSecs(timeSecs);
    setPhase("quiz");
  }

  function handleSubmit(answer: string, timeUsed: number) {
    if (!currentStem) return;
    const r = assessAnswer(currentStem, answer, timeUsed);
    setResult(r);
    const attempt = createAttempt(fullName, candidateNumber, currentStem, answer, r);
    saveAttempt(attempt);
    setPhase("results");
  }

  function handleTryAnother() {
    setCurrentStem(null);
    setResult(null);
    setPhase("setup");
  }

  function handleRepeatTopic() {
    if (!currentStem) { setPhase("setup"); return; }
    const stem = getRandomStem(currentTopic, currentDifficulty);
    setCurrentStem(stem);
    setResult(null);
    setPhase("quiz");
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

      {phase === "setup" && <SetupScreen onGenerate={handleGenerate} />}
      {phase === "quiz" && currentStem && (
        <QuizScreen stem={currentStem} timeSecs={currentTimeSecs} onSubmit={handleSubmit} />
      )}
      {phase === "results" && currentStem && result && (
        <ResultsScreen
          stem={currentStem}
          result={result}
          topic={currentTopic}
          onTryAnother={handleTryAnother}
          onRepeatTopic={handleRepeatTopic}
        />
      )}

      <p className="text-center text-xs text-muted-foreground pb-8 mt-4">
        Educational preparation tool only. Not an official RANZCP product.
      </p>
    </div>
  );
}
