import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "wouter";
import { useCandidate } from "@/lib/store";
import { Header } from "@/components/Header";
import {
  ListChecks, BookOpen, ClipboardList, ArrowRight, BarChart2,
} from "lucide-react";
import {
  getQuizModuleCompletion, getTotalQuizzesCompleted,
} from "@/lib/quizEngine";
import { QUIZ_STEMS } from "@/lib/quizData";

function getModeCount(key: string): number {
  try { return parseInt(localStorage.getItem(key) ?? "0", 10) || 0; } catch { return 0; }
}
function incrementModeCount(key: string): void {
  try { localStorage.setItem(key, String(getModeCount(key) + 1)); } catch {}
}

function loadMEQAttempts(): Array<{ status: string; meqId: string }> {
  try {
    const raw = localStorage.getItem("meq_v3_attempts");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function Phases() {
  const { candidateNumber } = useCandidate();
  const [, setLocation] = useLocation();
  const [examCount, setExamCount] = useState(0);

  const quizCompletion = getQuizModuleCompletion(candidateNumber ?? "", QUIZ_STEMS.length);
  const totalQuizzesCompleted = getTotalQuizzesCompleted(candidateNumber ?? "");

  const meqProgress = useMemo(() => {
    const attempts = loadMEQAttempts();
    const completedIds = new Set(
      attempts
        .filter((a) => a.status === "evaluated" || a.status === "view_key")
        .map((a) => a.meqId)
    );
    return Math.min(completedIds.size / 3, 1.0);
  }, []);

  const quizFraction =
    quizCompletion.totalStems > 0
      ? Math.min(quizCompletion.uniqueAttempted / quizCompletion.totalStems, 1)
      : 0;
  const quizContribution = quizFraction * 70;
  const meqContribution = meqProgress * 30;

  useEffect(() => {
    if (!candidateNumber) setLocation("/");
  }, [candidateNumber, setLocation]);

  useEffect(() => {
    if (candidateNumber) {
      setExamCount(getModeCount(`meq_exam_${candidateNumber}`));
    }
  }, [candidateNumber]);

  function handleExamClick() {
    if (candidateNumber) {
      incrementModeCount(`meq_exam_${candidateNumber}`);
      setExamCount((n) => n + 1);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8 pt-8 md:pt-12">
      <Header />

      <h2 className="text-lg font-serif font-bold text-primary mt-8 mb-3">
        Your Study Modules
      </h2>

      <div className="flex flex-col gap-3 mb-8">

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
                  {quizContribution.toFixed(1)}% of course
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

        {/* Daily MEQ */}
        <div className="bg-card rounded-2xl border border-card-border shadow-sm px-6 py-5">
          <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-serif font-bold text-primary mb-0.5">Daily MEQ</h3>
              <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                Complete staged MEQ papers — 3–4 progressive stems, 1 mark per minute, full examiner assessment at the end.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span>
                  <span className="font-semibold text-primary">{Math.round(meqProgress * 3)}</span> of 3 MEQs completed
                </span>
                <span>·</span>
                <span className="font-semibold text-accent">
                  {meqContribution.toFixed(1)}% of course
                </span>
              </div>
              {meqProgress > 0 && (
                <div className="mt-2 h-1.5 w-full max-w-xs bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: `${meqProgress * 100}%` }}
                  />
                </div>
              )}
            </div>
            <Link
              href="/meq-daily"
              className="flex-shrink-0 flex items-center gap-2 w-full sm:w-auto justify-center px-5 py-2.5 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white rounded-lg text-sm font-semibold transition-colors whitespace-nowrap"
            >
              Start MEQ <ArrowRight className="w-4 h-4" />
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

        {/* Progress */}
        <div className="bg-card rounded-2xl border border-card-border shadow-sm px-6 py-5">
          <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
              <BarChart2 className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-serif font-bold text-primary mb-0.5">Progress</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Track your performance across Quiz Mode and Daily MEQ — domain scores, attempt history, and focus areas.
              </p>
            </div>
            <Link
              href="/meq-progress"
              className="flex-shrink-0 flex items-center gap-2 w-full sm:w-auto justify-center px-5 py-2.5 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white rounded-lg text-sm font-semibold transition-colors whitespace-nowrap"
            >
              View Progress <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

      <div className="text-center text-xs text-muted-foreground pb-8">
        Educational preparation tool only. Not an official RANZCP product.
      </div>
    </div>
  );
}
