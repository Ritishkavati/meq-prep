import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "wouter";
import { useCandidate } from "@/lib/store";
import { Header } from "@/components/Header";
import {
  ListChecks, BookOpen, ClipboardList, ArrowRight,
  TrendingUp, Target, AlertCircle, CheckCircle2, BarChart2,
  ChevronDown, ChevronUp, History, BrainCircuit,
} from "lucide-react";
import {
  getQuizModuleCompletion, getTotalQuizzesCompleted, getCandidateFeedback,
  loadAttempts, type QuizAttempt,
} from "@/lib/quizEngine";
import { QUIZ_STEMS, TOPIC_LABELS, type TopicKey } from "@/lib/quizData";

function getModeCount(key: string): number {
  try { return parseInt(localStorage.getItem(key) ?? "0", 10) || 0; } catch { return 0; }
}
function incrementModeCount(key: string): void {
  try { localStorage.setItem(key, String(getModeCount(key) + 1)); } catch {}
}

export default function Phases() {
  const { fullName, candidateNumber, examYear } = useCandidate();
  const [, setLocation] = useLocation();
  const [dailyCount, setDailyCount] = useState(0);
  const [examCount, setExamCount] = useState(0);

  const quizCompletion = getQuizModuleCompletion(candidateNumber ?? "", QUIZ_STEMS.length);
  const totalQuizzesCompleted = getTotalQuizzesCompleted(candidateNumber ?? "");
  const feedback = getCandidateFeedback(candidateNumber ?? "");
  const [showAllAttempted, setShowAllAttempted] = useState(false);

  const attemptedStems = useMemo(() => {
    if (!candidateNumber) return [] as QuizAttempt[];
    const all = loadAttempts().filter((a) => a.registrationNumber === candidateNumber);
    const latest = new Map<string, QuizAttempt>();
    for (const a of all) {
      const existing = latest.get(a.stemId);
      if (!existing || new Date(a.timestamp) > new Date(existing.timestamp)) {
        latest.set(a.stemId, a);
      }
    }
    return Array.from(latest.values()).sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
  }, [candidateNumber]);

  useEffect(() => {
    if (!fullName) setLocation("/");
  }, [fullName, setLocation]);

  useEffect(() => {
    if (candidateNumber) {
      setDailyCount(getModeCount(`meq_daily_${candidateNumber}`));
      setExamCount(getModeCount(`meq_exam_${candidateNumber}`));
    }
  }, [candidateNumber]);

  function handleDailyClick() {
    if (candidateNumber) {
      incrementModeCount(`meq_daily_${candidateNumber}`);
      setDailyCount((n) => n + 1);
    }
  }

  function handleExamClick() {
    if (candidateNumber) {
      incrementModeCount(`meq_exam_${candidateNumber}`);
      setExamCount((n) => n + 1);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8 pt-8 md:pt-12">
      <Header />

      {/* ── Candidate profile card ───────────────────────────────────────────── */}
      <div className="bg-card rounded-2xl border border-card-border shadow-sm px-6 py-5 mt-8 mb-4">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Candidate Profile
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 text-sm">
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Name</p>
            <p className="font-semibold text-primary">{fullName}</p>
          </div>
          {candidateNumber && (
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Registration number</p>
              <p className="font-semibold text-primary">{candidateNumber}</p>
            </div>
          )}
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Exam sitting</p>
            <p className="font-semibold text-primary">{examYear}</p>
          </div>
        </div>
      </div>

      {/* ── Overall progress bar ─────────────────────────────────────────────── */}
      <div className="bg-card rounded-2xl border border-card-border shadow-sm px-6 py-5 mb-6 space-y-3">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-primary flex items-center gap-2 text-sm">
            <TrendingUp className="w-4 h-4 text-accent" />
            Course Progress
          </p>
          <span className="text-2xl font-bold text-accent">
            {quizCompletion.courseContribution.toFixed(1)}%
          </span>
        </div>
        <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all"
            style={{ width: `${(quizCompletion.courseContribution / 30) * 100}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {quizCompletion.uniqueAttempted} of {quizCompletion.totalStems} total questions completed
          </span>
          <span>Quiz module = 30% of course</span>
        </div>
      </div>

      {/* ── Questions answered ───────────────────────────────────────────────── */}
      {attemptedStems.length > 0 && (() => {
        const PAGE = 8;
        const visible = showAllAttempted ? attemptedStems : attemptedStems.slice(0, PAGE);
        return (
          <div className="bg-card rounded-2xl border border-card-border shadow-sm mb-6 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-card-border">
              <p className="font-serif font-bold text-primary flex items-center gap-2 text-sm">
                <History className="w-4 h-4 text-accent" />
                Questions You've Answered
              </p>
              <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                {attemptedStems.length} of {QUIZ_STEMS.length}
              </span>
            </div>

            <div className="divide-y divide-card-border">
              {visible.map((a) => {
                const pct = a.result.percentage;
                const scoreColour =
                  pct >= 80 ? "text-emerald-700 bg-emerald-50 border-emerald-200"
                  : pct >= 60 ? "text-amber-700 bg-amber-50 border-amber-200"
                  : "text-red-700 bg-red-50 border-red-200";
                const dot =
                  pct >= 80 ? "bg-emerald-500"
                  : pct >= 60 ? "bg-amber-400"
                  : "bg-red-500";
                const date = new Intl.DateTimeFormat("en-AU", {
                  day: "numeric", month: "short", year: "numeric",
                }).format(new Date(a.timestamp));
                return (
                  <div key={a.stemId} className="flex items-center gap-3 px-6 py-3 hover:bg-slate-50/60 transition-colors">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dot}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-primary truncate">{a.stemTitle}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {TOPIC_LABELS[a.topic as TopicKey] ?? a.topic} · {date}
                      </p>
                    </div>
                    <span className={`flex-shrink-0 text-xs font-bold border px-2 py-0.5 rounded-full ${scoreColour}`}>
                      {pct}%
                    </span>
                  </div>
                );
              })}
            </div>

            {attemptedStems.length > PAGE && (
              <button
                onClick={() => setShowAllAttempted((v) => !v)}
                className="w-full flex items-center justify-center gap-1.5 py-3 text-xs font-semibold text-muted-foreground hover:text-primary border-t border-card-border hover:bg-slate-50 transition-colors"
              >
                {showAllAttempted ? (
                  <><ChevronUp className="w-3.5 h-3.5" /> Show less</>
                ) : (
                  <><ChevronDown className="w-3.5 h-3.5" /> Show all {attemptedStems.length} questions</>
                )}
              </button>
            )}
          </div>
        );
      })()}

      {/* ── Study mode cards ─────────────────────────────────────────────────── */}
      <h2 className="text-lg font-serif font-bold text-primary mb-3">
        Your Study Modes
      </h2>

      <div className="flex flex-col gap-3 mb-6">

        {/* Quiz Mode */}
        <div className="bg-card rounded-2xl border border-card-border shadow-sm px-6 py-5">
          <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
              <ListChecks className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-serif font-bold text-primary mb-0.5">Quiz Mode</h3>
              <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                Identify hidden signals in MEQ stems — clinical, risk, legal, cultural and systems issues.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span>
                  <span className="font-semibold text-accent">{totalQuizzesCompleted}</span> quizzes done
                </span>
                <span>·</span>
                <span>
                  <span className="font-semibold text-primary">{quizCompletion.uniqueAttempted}</span> unique stems
                </span>
                <span>·</span>
                <span className="font-semibold text-accent">
                  {quizCompletion.courseContribution.toFixed(1)}% of course
                </span>
              </div>
              {quizCompletion.totalStems > 0 && (
                <div className="mt-2 h-1.5 w-full max-w-xs bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{
                      width: `${Math.min((quizCompletion.uniqueAttempted / quizCompletion.totalStems) * 100, 100)}%`,
                    }}
                  />
                </div>
              )}
            </div>
            <Link
              href="/signals"
              className="flex-shrink-0 flex items-center gap-2 w-full sm:w-auto justify-center px-5 py-2.5 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white rounded-lg text-sm font-semibold transition-colors whitespace-nowrap"
            >
              Start Quiz <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Daily MEQs */}
        <div className="bg-card rounded-2xl border border-card-border shadow-sm px-6 py-5">
          <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-serif font-bold text-primary mb-0.5">Daily MEQs</h3>
              <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                A random daily MEQ-style question with timed answer practice — for regular short sessions.
              </p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>
                  <span className="font-semibold text-accent">{dailyCount}</span> sessions started
                </span>
              </div>
            </div>
            <Link
              href="/daily"
              onClick={handleDailyClick}
              className="flex-shrink-0 flex items-center gap-2 w-full sm:w-auto justify-center px-5 py-2.5 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white rounded-lg text-sm font-semibold transition-colors whitespace-nowrap"
            >
              Start Daily <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Real MEQ Practice (AI Feedback) */}
        <div className="bg-card rounded-2xl border border-card-border shadow-sm px-6 py-5">
          <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
              <BrainCircuit className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-serif font-bold text-primary mb-0.5">Real MEQ Practice</h3>
              <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                Write answers to real RANZCP exam questions and receive instant AI feedback at examiner standard — mark breakdowns, stem signal analysis, and sentence rewrites.
              </p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>
                  <span className="font-semibold text-primary">12</span> questions from recent papers
                </span>
                <span>·</span>
                <span className="font-semibold text-accent">AI-graded</span>
              </div>
            </div>
            <Link
              href="/meq-daily"
              className="flex-shrink-0 flex items-center gap-2 w-full sm:w-auto justify-center px-5 py-2.5 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white rounded-lg text-sm font-semibold transition-colors whitespace-nowrap"
            >
              Start Practice <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Exam Mode */}
        <div className="bg-card rounded-2xl border border-card-border shadow-sm px-6 py-5">
          <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
              <ClipboardList className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-serif font-bold text-primary mb-0.5">Exam Mode</h3>
              <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                Full MEQ simulation — 5 questions, 125 marks, timed conditions.
              </p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>
                  <span className="font-semibold text-accent">{examCount}</span> exams started
                </span>
              </div>
            </div>
            <Link
              href="/exam"
              onClick={handleExamClick}
              className="flex-shrink-0 flex items-center gap-2 w-full sm:w-auto justify-center px-5 py-2.5 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white rounded-lg text-sm font-semibold transition-colors whitespace-nowrap"
            >
              Start Exam <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Review answers ──────────────────────────────────────────────────── */}
      {totalQuizzesCompleted > 0 && (
        <Link
          href="/review"
          className="flex items-center justify-between bg-card rounded-2xl border border-card-border shadow-sm px-6 py-4 mb-4 hover:border-accent/40 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <BarChart2 className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="font-semibold text-primary text-sm">Review My Answers</p>
              <p className="text-xs text-muted-foreground">
                Browse all {totalQuizzesCompleted} past quiz responses — see what you identified and what you missed
              </p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 ml-4" />
        </Link>
      )}

      {/* ── Performance feedback ─────────────────────────────────────────────── */}
      <div className="bg-card rounded-2xl border border-card-border shadow-sm px-6 py-5 mb-8">
        <p className="font-serif font-bold text-primary flex items-center gap-2 text-sm mb-4">
          <Target className="w-4 h-4 text-accent" />
          Performance Feedback
        </p>

        {feedback.totalAttempts < 3 ? (
          <div className="flex items-start gap-3 text-sm text-muted-foreground bg-slate-50 border border-slate-200 rounded-xl px-4 py-4">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p>
              Complete at least 3 quizzes to generate personalised feedback on which signal
              categories and topics you should focus on.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Stats row */}
            <div className="flex flex-wrap gap-3">
              <div className="text-center bg-white border border-card-border rounded-xl px-5 py-3">
                <p className="text-2xl font-bold text-primary">{feedback.avgPercentage}%</p>
                <p className="text-xs text-muted-foreground mt-0.5">avg score</p>
              </div>
              <div className="text-center bg-white border border-card-border rounded-xl px-5 py-3">
                <p className="text-2xl font-bold text-primary">{feedback.totalAttempts}</p>
                <p className="text-xs text-muted-foreground mt-0.5">quizzes done</p>
              </div>
            </div>

            {/* Weak signal categories */}
            {feedback.weakCategories.length > 0 && (
              <div>
                <p className="text-xs font-bold text-red-700 uppercase tracking-wider mb-2">
                  Signal areas to focus on
                </p>
                <div className="space-y-1.5">
                  {feedback.weakCategories.map((c) => (
                    <div
                      key={c.label}
                      className="flex items-center justify-between bg-red-50 border border-red-100 rounded-lg px-3 py-2"
                    >
                      <span className="text-sm text-red-900">{c.label}</span>
                      <span className="text-xs font-semibold text-red-700 ml-4 flex-shrink-0">
                        {c.hitRate}% hit rate
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Weak topics */}
            {feedback.weakTopics.length > 0 && (
              <div>
                <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
                  Topics to prioritise
                </p>
                <div className="flex flex-wrap gap-2">
                  {feedback.weakTopics.map((t) => (
                    <span
                      key={t.topic}
                      className="bg-amber-50 border border-amber-200 text-amber-800 text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {t.label} — {t.avgScore}% avg
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Strong categories */}
            {feedback.strongCategories.length > 0 && (
              <div>
                <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                  Strong areas
                </p>
                <div className="space-y-1.5">
                  {feedback.strongCategories.map((c) => (
                    <div
                      key={c.label}
                      className="flex items-center justify-between bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mr-2" />
                      <span className="text-sm text-emerald-900 flex-1">{c.label}</span>
                      <span className="text-xs font-semibold text-emerald-700 flex-shrink-0">
                        {c.hitRate}% hit rate
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {feedback.weakCategories.length === 0 && feedback.weakTopics.length === 0 && (
              <div className="flex items-center gap-2 text-sm text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                Strong performance across all areas so far — keep going!
              </div>
            )}
          </div>
        )}
      </div>

      <div className="text-center text-xs text-muted-foreground pb-8">
        Educational preparation tool only. Not an official RANZCP product.
      </div>
    </div>
  );
}
