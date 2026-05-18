import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useCandidate } from "@/lib/store";
import { Header } from "@/components/Header";
import { format } from "date-fns";
import { ListChecks, BookOpen, ClipboardList, ArrowRight, Brain, TrendingUp } from "lucide-react";
import { getQuizModuleCompletion, getTotalQuizzesCompleted } from "@/lib/quizEngine";
import { QUIZ_STEMS } from "@/lib/quizData";

const modes = [
  {
    icon: ListChecks,
    title: "Quiz Mode",
    description:
      "Practise identifying the hidden signals in an MEQ stem: clinical issues, risk, capacity, Mental Health Act, cultural factors, family issues, MDT conflict and systems problems.",
    buttonLabel: "Start Quiz Mode",
    href: "/signals",
  },
  {
    icon: BookOpen,
    title: "Daily MEQs for Practice",
    description:
      "Attempt a random daily MEQ-style question with a timed answer box. This mode is for regular short practice.",
    buttonLabel: "Start Daily Practice",
    href: "/daily",
  },
  {
    icon: ClipboardList,
    title: "Exam Mode",
    description:
      "Simulate a full MEQ exam with 5 questions and 125 marks total. Each MEQ will have 2–4 staged stems.",
    buttonLabel: "Start Exam Mode",
    href: "/exam",
  },
];

export default function Phases() {
  const { fullName, candidateNumber, examYear } = useCandidate();
  const [, setLocation] = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());

  const quizCompletion = getQuizModuleCompletion(candidateNumber ?? "", QUIZ_STEMS.length);
  const totalQuizzesCompleted = getTotalQuizzesCompleted(candidateNumber ?? "");

  useEffect(() => {
    if (!fullName) {
      setLocation("/");
    }
  }, [fullName, setLocation]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8 pt-8 md:pt-12">
      <Header />

      <div className="mt-8 mb-8">
        <h2 className="text-2xl md:text-3xl font-serif text-primary font-bold mb-1">
          Choose Your Study Mode
        </h2>
        <p className="text-muted-foreground text-sm">
          Select one of the three MEQ preparation modes.
        </p>
      </div>

      <div className="flex flex-col gap-4 mb-10">
        {modes.map(({ icon: Icon, title, description, buttonLabel, href }) => (
          <div
            key={title}
            className="bg-card rounded-2xl shadow-sm border border-card-border px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-base font-serif font-bold text-primary mb-1">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            <div className="sm:flex-shrink-0 w-full sm:w-auto">
              <Link
                href={href}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white rounded-lg text-sm font-semibold transition-colors duration-200 whitespace-nowrap"
              >
                {buttonLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-2xl shadow-sm border border-card-border px-6 py-5">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Session Summary
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-4 text-sm">
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Candidate</p>
            <p className="font-medium text-primary">{fullName}</p>
          </div>
          {candidateNumber && (
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Registration number</p>
              <p className="font-medium text-primary">{candidateNumber}</p>
            </div>
          )}
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Exam sitting year</p>
            <p className="font-medium text-primary">{examYear}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Session date &amp; time</p>
            <p className="font-medium text-primary">
              {format(currentTime, "d MMM yyyy, h:mm:ss a")}
            </p>
          </div>
        </div>
      </div>

      {/* Quiz Progress Card */}
      <div className="bg-card rounded-2xl shadow-sm border border-card-border px-6 py-5 mt-4 space-y-4">
        <div className="flex items-center justify-between">
          <p className="font-serif font-bold text-primary flex items-center gap-2 text-sm">
            <TrendingUp className="w-4 h-4 text-accent" />
            Your Quiz Progress
          </p>
          <Link
            href="/signals"
            className="text-xs font-semibold text-accent hover:text-accent/80 flex items-center gap-1 transition-colors"
          >
            Continue <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-white rounded-xl border border-card-border px-3 py-3">
            <p className="text-2xl font-bold text-primary">{totalQuizzesCompleted}</p>
            <p className="text-xs text-muted-foreground mt-0.5">Quizzes completed</p>
          </div>
          <div className="bg-white rounded-xl border border-card-border px-3 py-3">
            <p className="text-2xl font-bold text-primary">{quizCompletion.uniqueAttempted}</p>
            <p className="text-xs text-muted-foreground mt-0.5">Unique stems tried</p>
          </div>
          <div className="bg-white rounded-xl border border-card-border px-3 py-3">
            <p className="text-2xl font-bold text-accent">{quizCompletion.courseContribution.toFixed(1)}%</p>
            <p className="text-xs text-muted-foreground mt-0.5">Course contribution</p>
          </div>
        </div>

        {/* Progress bar toward 30% */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{quizCompletion.uniqueAttempted} of {quizCompletion.totalStems} questions attempted</span>
            <span className="font-medium text-primary">{quizCompletion.courseContribution.toFixed(1)} / 30% of course</span>
          </div>
          <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all"
              style={{ width: `${(quizCompletion.courseContribution / 30) * 100}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Quiz Mode accounts for 30% of total course completion. Progress is saved to your registration number.
          </p>
        </div>
      </div>

      <div className="bg-card rounded-2xl shadow-sm border border-card-border px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
        <div>
          <p className="font-serif font-bold text-primary flex items-center gap-2">
            <Brain className="w-4 h-4 text-accent" />
            Knowledge Brain
          </p>
          <p className="text-sm text-muted-foreground mt-0.5">
            Upload MEQ questions, marking guides and clinical frameworks to power your study sessions.
          </p>
        </div>
        <Link
          href="/brain"
          className="flex-shrink-0 flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 whitespace-nowrap"
        >
          Open Knowledge Brain
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="text-center text-xs text-muted-foreground py-8">
        Educational preparation tool only. Not an official RANZCP product.
      </div>
    </div>
  );
}
