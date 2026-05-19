import React, { useState, useMemo } from "react";
import { Link, useLocation } from "wouter";
import { Header } from "@/components/Header";
import { useCandidate } from "@/lib/store";
import {
  loadAttempts, QuizAttempt, CATEGORY_LABELS,
} from "@/lib/quizEngine";
import { QUIZ_STEMS, TOPIC_LABELS, TopicKey } from "@/lib/quizData";
import {
  ArrowLeft, CheckCircle2, XCircle, AlertTriangle,
  ChevronDown, ChevronUp, Clock, BookOpen, Search,
  Filter, Calendar, BarChart2,
} from "lucide-react";

function fmtTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function fmtDate(d: Date) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  }).format(d);
}

const SEVERITY_COLOURS = {
  critical: "text-red-700 bg-red-50 border-red-200",
  important: "text-amber-700 bg-amber-50 border-amber-200",
  optional: "text-slate-600 bg-slate-50 border-slate-200",
};

// ─── Single attempt card ───────────────────────────────────────────────────────
function AttemptCard({ attempt, index }: { attempt: QuizAttempt; index: number }) {
  const [open, setOpen] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showModel, setShowModel] = useState(false);

  const stem = useMemo(
    () => QUIZ_STEMS.find((s) => s.id === attempt.stemId),
    [attempt.stemId]
  );

  const identified = attempt.result.matches.filter((m) => m.identified);
  const missed = attempt.result.matches.filter((m) => !m.identified);
  const criticalMissed = missed.filter((m) => m.signal.severity === "critical");

  let ratingStyle: string;
  let ratingLabel: string;
  if (attempt.result.percentage >= 80) {
    ratingStyle = "text-emerald-700 bg-emerald-50 border-emerald-300";
    ratingLabel = "Strong";
  } else if (attempt.result.percentage >= 60) {
    ratingStyle = "text-amber-700 bg-amber-50 border-amber-300";
    ratingLabel = "Borderline";
  } else {
    ratingStyle = "text-red-700 bg-red-50 border-red-300";
    ratingLabel = "Needs work";
  }

  return (
    <div className="bg-card rounded-2xl border border-card-border shadow-sm overflow-hidden">
      {/* Header row — always visible */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-5 py-4 flex flex-wrap gap-3 items-center hover:bg-slate-50/60 transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-0.5">
            <span className="text-xs font-semibold text-muted-foreground">#{index + 1}</span>
            <span className="text-sm font-serif font-bold text-primary truncate">
              {attempt.stemTitle}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="font-medium text-accent">
              {TOPIC_LABELS[attempt.topic as TopicKey] ?? attempt.topic}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {fmtDate(attempt.timestamp)}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {fmtTime(attempt.result.timeUsed)}
            </span>
          </div>
        </div>

        {/* Score + rating */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="text-right">
            <p className="text-xl font-bold text-primary leading-none">{attempt.result.percentage}%</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {identified.length}/{attempt.result.matches.length} signals
            </p>
          </div>
          <span className={`text-xs font-semibold border px-2 py-1 rounded-full ${ratingStyle}`}>
            {ratingLabel}
          </span>
          {criticalMissed.length > 0 && (
            <span className="text-xs font-semibold text-red-700 bg-red-50 border border-red-200 px-2 py-1 rounded-full">
              {criticalMissed.length} critical missed
            </span>
          )}
          {open
            ? <ChevronUp className="w-4 h-4 text-muted-foreground" />
            : <ChevronDown className="w-4 h-4 text-muted-foreground" />
          }
        </div>
      </button>

      {/* Expanded body */}
      {open && (
        <div className="border-t border-card-border px-5 pb-5 pt-4 space-y-4">

          {/* Stem */}
          {stem && (
            <div className="bg-primary/4 rounded-xl p-4 text-sm text-primary leading-relaxed whitespace-pre-line">
              {stem.stem}
            </div>
          )}

          {/* Candidate's answer */}
          <div>
            <button
              onClick={() => setShowAnswer((v) => !v)}
              className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-2"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Your answer
              {showAnswer
                ? <ChevronUp className="w-3.5 h-3.5" />
                : <ChevronDown className="w-3.5 h-3.5" />
              }
            </button>
            {showAnswer && (
              <div className="bg-white border border-card-border rounded-xl px-4 py-3 text-sm text-primary leading-relaxed whitespace-pre-line">
                {attempt.candidateAnswer || <em className="text-muted-foreground">No answer recorded.</em>}
              </div>
            )}
          </div>

          {/* Signals — identified */}
          {identified.length > 0 && (
            <div>
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Signals identified ({identified.length})
              </p>
              <div className="flex flex-wrap gap-2">
                {identified.map((m) => (
                  <span
                    key={m.signal.id}
                    className="text-xs bg-emerald-50 border border-emerald-200 text-emerald-800 px-2.5 py-1 rounded-full"
                  >
                    {m.signal.name}
                    <span className={`ml-1.5 text-xs font-semibold border px-1.5 py-0.5 rounded-full ${SEVERITY_COLOURS[m.signal.severity]}`}>
                      {m.signal.severity}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Signals — missed */}
          {missed.length > 0 && (
            <div>
              <p className="text-xs font-bold text-red-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5" />
                Signals missed ({missed.length})
              </p>
              <div className="space-y-2">
                {/* Critical first */}
                {[...missed]
                  .sort((a, b) => {
                    const order = { critical: 0, important: 1, optional: 2 };
                    return order[a.signal.severity] - order[b.signal.severity];
                  })
                  .map((m) => (
                    <div
                      key={m.signal.id}
                      className={`rounded-xl border p-3 space-y-1.5 ${
                        m.signal.severity === "critical"
                          ? "bg-red-50 border-red-200"
                          : m.signal.severity === "important"
                          ? "bg-amber-50 border-amber-200"
                          : "bg-slate-50 border-slate-200"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        {m.signal.severity === "critical"
                          ? <XCircle className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                          : <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                        }
                        <span className={`text-sm font-semibold ${
                          m.signal.severity === "critical" ? "text-red-900"
                          : m.signal.severity === "important" ? "text-amber-900"
                          : "text-slate-800"
                        }`}>
                          {m.signal.name}
                        </span>
                        <span className={`ml-auto text-xs font-bold ${
                          m.signal.severity === "critical" ? "text-red-700"
                          : m.signal.severity === "important" ? "text-amber-700"
                          : "text-slate-600"
                        }`}>
                          {m.signal.severity.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-xs italic text-muted-foreground ml-5">
                        Clue: "{m.signal.clueInStem}"
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed ml-5">
                        {m.signal.whyItMatters}
                      </p>
                      <div className="ml-5 bg-white rounded-lg px-3 py-2 border border-slate-200">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                          Model wording
                        </p>
                        <p className="text-xs text-slate-800 italic leading-relaxed">
                          {m.signal.modelWording}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Vague terms */}
          {attempt.result.overcalled.length > 0 && (
            <div>
              <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                Vague/overcalled terms ({attempt.result.overcalled.length})
              </p>
              <div className="space-y-1.5">
                {attempt.result.overcalled.map((oc, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-2 rounded-lg px-3 py-2 border text-xs ${
                      oc.isPSLevel ? "bg-violet-50 border-violet-200" : "bg-amber-50 border-amber-200"
                    }`}
                  >
                    <AlertTriangle className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${oc.isPSLevel ? "text-violet-500" : "text-amber-500"}`} />
                    <div>
                      <span className="font-semibold">"{oc.text}"</span>
                      <p className="mt-0.5 leading-relaxed text-muted-foreground">{oc.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Model answer */}
          {stem?.modelAnswer && (
            <div className="border border-card-border rounded-xl overflow-hidden">
              <button
                onClick={() => setShowModel((v) => !v)}
                className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
              >
                <span className="text-sm font-semibold text-primary">Consultant model answer</span>
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
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────
export default function ReviewMode() {
  const { fullName, candidateNumber } = useCandidate();
  const [, setLocation] = useLocation();
  const [search, setSearch] = useState("");
  const [filterTopic, setFilterTopic] = useState<"all" | TopicKey>("all");
  const [filterResult, setFilterResult] = useState<"all" | "strong" | "borderline" | "weak">("all");

  React.useEffect(() => {
    if (!fullName) setLocation("/");
  }, [fullName, setLocation]);

  const allAttempts = useMemo(() => {
    if (!candidateNumber) return [];
    return loadAttempts()
      .filter((a) => a.registrationNumber === candidateNumber)
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }, [candidateNumber]);

  const filtered = useMemo(() => {
    return allAttempts.filter((a) => {
      if (filterTopic !== "all" && a.topic !== filterTopic) return false;
      if (filterResult !== "all") {
        const pct = a.result.percentage;
        if (filterResult === "strong" && pct < 80) return false;
        if (filterResult === "borderline" && (pct < 60 || pct >= 80)) return false;
        if (filterResult === "weak" && pct >= 60) return false;
      }
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          a.stemTitle.toLowerCase().includes(q) ||
          a.topic.toLowerCase().includes(q) ||
          a.candidateAnswer.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [allAttempts, filterTopic, filterResult, search]);

  // Summary stats
  const avgScore = allAttempts.length
    ? Math.round(allAttempts.reduce((s, a) => s + a.result.percentage, 0) / allAttempts.length)
    : 0;
  const weakCount = allAttempts.filter((a) => a.result.percentage < 60).length;
  const strongCount = allAttempts.filter((a) => a.result.percentage >= 80).length;

  // Topics with attempts for filter dropdown
  const usedTopics = useMemo(() => {
    const topics = new Set(allAttempts.map((a) => a.topic as TopicKey));
    return [...topics];
  }, [allAttempts]);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 pt-8 md:pt-12">
      <Header />

      <div className="mt-6 mb-5">
        <Link
          href="/phases"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to profile
        </Link>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
          <BarChart2 className="w-5 h-5 text-accent" />
        </div>
        <div>
          <h2 className="text-xl font-serif font-bold text-primary">My Quiz Responses</h2>
          <p className="text-sm text-muted-foreground">
            Review every answer you've submitted — see what you identified and what you missed.
          </p>
        </div>
      </div>

      {allAttempts.length === 0 ? (
        <div className="bg-card rounded-2xl border border-card-border shadow-sm px-6 py-12 text-center">
          <BookOpen className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
          <p className="font-serif font-bold text-primary text-lg mb-1">No quiz responses yet</p>
          <p className="text-sm text-muted-foreground mb-5">
            Complete at least one quiz to start building your review history.
          </p>
          <Link
            href="/signals"
            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Start a Quiz
          </Link>
        </div>
      ) : (
        <>
          {/* Summary stats */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="bg-card rounded-xl border border-card-border px-4 py-3 text-center">
              <p className="text-2xl font-bold text-primary">{allAttempts.length}</p>
              <p className="text-xs text-muted-foreground mt-0.5">quizzes submitted</p>
            </div>
            <div className="bg-card rounded-xl border border-card-border px-4 py-3 text-center">
              <p className="text-2xl font-bold text-accent">{avgScore}%</p>
              <p className="text-xs text-muted-foreground mt-0.5">avg score</p>
            </div>
            <div className="bg-card rounded-xl border border-card-border px-4 py-3 text-center">
              <p className="text-2xl font-bold text-red-600">{weakCount}</p>
              <p className="text-xs text-muted-foreground mt-0.5">need reviewing</p>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-card rounded-xl border border-card-border shadow-sm px-4 py-3 mb-5 flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by title or topic…"
                className="w-full h-9 pl-9 pr-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Topic filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <select
                value={filterTopic}
                onChange={(e) => setFilterTopic(e.target.value as "all" | TopicKey)}
                className="h-9 px-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="all">All topics</option>
                {usedTopics.map((t) => (
                  <option key={t} value={t}>{TOPIC_LABELS[t] ?? t}</option>
                ))}
              </select>
            </div>

            {/* Result filter */}
            <select
              value={filterResult}
              onChange={(e) => setFilterResult(e.target.value as typeof filterResult)}
              className="h-9 px-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="all">All results</option>
              <option value="strong">Strong (≥80%)</option>
              <option value="borderline">Borderline (60–79%)</option>
              <option value="weak">Needs work (&lt;60%)</option>
            </select>
          </div>

          {/* Result count */}
          <p className="text-xs text-muted-foreground mb-3">
            Showing <span className="font-semibold text-primary">{filtered.length}</span> of {allAttempts.length} attempts
            {weakCount > 0 && filterResult === "all" && (
              <button
                onClick={() => setFilterResult("weak")}
                className="ml-3 text-red-600 font-semibold hover:underline"
              >
                Show {weakCount} that need work →
              </button>
            )}
          </p>

          {/* Attempt cards */}
          <div className="space-y-3 mb-8">
            {filtered.length === 0 ? (
              <div className="bg-card rounded-2xl border border-card-border px-6 py-8 text-center text-sm text-muted-foreground">
                No attempts match this filter.
              </div>
            ) : (
              filtered.map((attempt, i) => (
                <AttemptCard key={attempt.id} attempt={attempt} index={allAttempts.indexOf(attempt)} />
              ))
            )}
          </div>
        </>
      )}

      <p className="text-center text-xs text-muted-foreground pb-8">
        Educational preparation tool only. Not an official RANZCP product.
      </p>
    </div>
  );
}
