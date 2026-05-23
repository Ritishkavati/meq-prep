// @ts-nocheck
import React, { useMemo } from "react";
import { Link, useLocation } from "wouter";
import { useCandidate } from "@/lib/store";
import { loadAttempts, getQuizModuleCompletion } from "@/lib/quizEngine";
import { QUIZ_STEMS } from "@/lib/quizData";

const STORAGE_KEY = "meq_v3_attempts";
const MEQ_TOTAL = 3;

const MEQ_TITLE_MAP = {
  meq_001: "Adil — Consultation Liaison",
  meq_002: "Danica — Perinatal Psychiatry",
  meq_003: "Hypnotics Quality Improvement",
};

function loadMEQAttempts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function passLabelFromPct(pct) {
  if (pct >= 65) return { text: "Pass", cls: "bg-emerald-100 text-emerald-800 border-emerald-200" };
  if (pct >= 50) return { text: "Borderline", cls: "bg-amber-100 text-amber-800 border-amber-200" };
  return { text: "Fail", cls: "bg-red-100 text-red-800 border-red-200" };
}

function scoreColor(pct) {
  return pct >= 75 ? "text-emerald-700" : pct >= 55 ? "text-amber-600" : pct >= 35 ? "text-orange-600" : "text-red-700";
}

export default function MEQProgress() {
  const [, setLocation] = useLocation();
  const { candidateNumber } = useCandidate();

  // ── MEQ data ────────────────────────────────────────────────
  const allMEQAttempts = useMemo(() => loadMEQAttempts(), []);

  const evaluatedMEQAttempts = useMemo(
    () => allMEQAttempts.filter((a) => a.status === "evaluated" && a.evaluation),
    [allMEQAttempts]
  );

  const completedMEQAttempts = useMemo(
    () => allMEQAttempts.filter((a) => a.status === "evaluated" || a.status === "view_key"),
    [allMEQAttempts]
  );

  const completedMEQIds = useMemo(
    () => new Set(completedMEQAttempts.map((a) => a.meqId)),
    [completedMEQAttempts]
  );

  const sortedMEQAttempts = useMemo(
    () =>
      [...completedMEQAttempts].sort(
        (a, b) =>
          new Date(b.completedAt ?? 0).getTime() - new Date(a.completedAt ?? 0).getTime()
      ),
    [completedMEQAttempts]
  );

  // ── Quiz data ────────────────────────────────────────────────
  const quizCompletion = useMemo(
    () => getQuizModuleCompletion(candidateNumber ?? "", QUIZ_STEMS.length),
    [candidateNumber]
  );

  const recentQuizAttempts = useMemo(() => {
    if (!candidateNumber) return [];
    const all = loadAttempts().filter((a) => a.registrationNumber === candidateNumber);
    const latest = new Map();
    for (const a of all) {
      const ex = latest.get(a.stemId);
      if (!ex || new Date(a.timestamp) > new Date(ex.timestamp)) latest.set(a.stemId, a);
    }
    return Array.from(latest.values())
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 5);
  }, [candidateNumber]);

  // ── Domain performance (evaluated MEQ attempts only) ─────────
  const domainPerf = useMemo(() => {
    const map = {};
    for (const attempt of evaluatedMEQAttempts) {
      for (const stemEv of attempt.evaluation.stems ?? []) {
        const stemPct = stemEv.marksAvailable > 0 ? stemEv.marksEarned / stemEv.marksAvailable : 0;
        for (const dg of stemEv.box4_markingGuide?.domainGroups ?? []) {
          if (!dg.domainName) continue;
          if (!map[dg.domainName]) map[dg.domainName] = { earned: 0, available: 0 };
          map[dg.domainName].earned += dg.marks * stemPct;
          map[dg.domainName].available += dg.marks;
        }
      }
    }
    return Object.entries(map).map(([name, { earned, available }]) => ({
      name,
      pct: available > 0 ? Math.round((earned / available) * 100) : 0,
    }));
  }, [evaluatedMEQAttempts]);

  const strongDomains = domainPerf.filter((d) => d.pct >= 70);
  const focusDomains = domainPerf.filter((d) => d.pct < 50);

  // ── Score trends (per MEQ with multiple evaluated attempts) ──
  const meqTrends = useMemo(() => {
    const trends = [];
    for (const meqId of Object.keys(MEQ_TITLE_MAP)) {
      const attempts = evaluatedMEQAttempts
        .filter((a) => a.meqId === meqId)
        .sort((a, b) => new Date(a.completedAt ?? 0).getTime() - new Date(b.completedAt ?? 0).getTime());
      if (attempts.length >= 2) {
        const first = attempts[0];
        const last = attempts[attempts.length - 1];
        const firstPct =
          first.evaluation.totalMarksAvailable > 0
            ? Math.round((first.evaluation.totalMarksEarned / first.evaluation.totalMarksAvailable) * 100)
            : 0;
        const lastPct =
          last.evaluation.totalMarksAvailable > 0
            ? Math.round((last.evaluation.totalMarksEarned / last.evaluation.totalMarksAvailable) * 100)
            : 0;
        trends.push({
          title: MEQ_TITLE_MAP[meqId],
          firstPct,
          lastPct,
          improved: lastPct > firstPct,
          same: lastPct === firstPct,
        });
      }
    }
    return trends;
  }, [evaluatedMEQAttempts]);

  function viewMEQAttempt(attempt) {
    localStorage.setItem("meq_view_attempt", attempt.attemptId);
    setLocation("/meq-daily");
  }

  const quizPct =
    quizCompletion.totalStems > 0
      ? Math.round((quizCompletion.uniqueAttempted / quizCompletion.totalStems) * 100)
      : 0;

  const meqPct = Math.round((completedMEQIds.size / MEQ_TOTAL) * 100);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Progress</h1>
          <p className="text-sm text-gray-500 mt-0.5">Your performance across all study modules</p>
        </div>
        <Link href="/phases" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
          ← Home
        </Link>
      </div>

      {/* Section 1 — Quiz Mode */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-gray-900 text-sm">Quiz Mode</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              {quizCompletion.uniqueAttempted} of {QUIZ_STEMS.length} questions attempted
            </p>
          </div>
          <div className="text-right">
            <div className="text-xl font-black text-gray-900">{quizPct}%</div>
            <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden mt-1 ml-auto">
              <div
                className="h-full bg-emerald-500 rounded-full"
                style={{ width: `${quizPct}%` }}
              />
            </div>
          </div>
        </div>
        {recentQuizAttempts.length > 0 ? (
          <div className="divide-y divide-gray-50">
            {recentQuizAttempts.map((a) => {
              const pct = a.result.percentage;
              const date = new Date(a.timestamp).toLocaleDateString("en-AU", {
                day: "numeric", month: "short", year: "numeric",
              });
              return (
                <div key={a.stemId} className="flex items-center gap-3 px-5 py-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{a.stemTitle}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{date}</p>
                  </div>
                  <span className={`text-xs font-bold flex-shrink-0 ${scoreColor(pct)}`}>{pct}%</span>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="px-5 py-4 text-sm text-gray-400">No quiz attempts yet.</div>
        )}
        <div className="px-5 py-3 border-t border-gray-100">
          <Link href="/signals" className="text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors">
            Go to Quiz Mode →
          </Link>
        </div>
      </div>

      {/* Section 2 — Daily MEQ */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-gray-900 text-sm">Daily MEQ</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              {completedMEQIds.size} of {MEQ_TOTAL} MEQs completed
            </p>
          </div>
          <div className="text-right">
            <div className="text-xl font-black text-gray-900">{meqPct}%</div>
            <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden mt-1 ml-auto">
              <div
                className="h-full bg-emerald-500 rounded-full"
                style={{ width: `${meqPct}%` }}
              />
            </div>
          </div>
        </div>
        {sortedMEQAttempts.length > 0 ? (
          <div className="divide-y divide-gray-50">
            {sortedMEQAttempts.map((attempt) => {
              const isEvaluated = attempt.status === "evaluated" && attempt.evaluation;
              const pct =
                isEvaluated && attempt.evaluation.totalMarksAvailable > 0
                  ? Math.round(
                      (attempt.evaluation.totalMarksEarned / attempt.evaluation.totalMarksAvailable) * 100
                    )
                  : null;
              const pl = pct !== null ? passLabelFromPct(pct) : null;
              const title = MEQ_TITLE_MAP[attempt.meqId] ?? attempt.meqId;
              const date = attempt.completedAt
                ? new Date(attempt.completedAt).toLocaleDateString("en-AU", {
                    day: "numeric", month: "short", year: "numeric",
                  })
                : "—";
              return (
                <button
                  key={attempt.attemptId}
                  onClick={() => viewMEQAttempt(attempt)}
                  className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {date} · {attempt.status === "view_key" ? "View Key" : "Examiner Assessment"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {pct !== null ? (
                      <>
                        <span className={`text-sm font-bold ${scoreColor(pct)}`}>
                          {attempt.evaluation.totalMarksEarned}/{attempt.evaluation.totalMarksAvailable} ({pct}%)
                        </span>
                        {pl && (
                          <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold ${pl.cls}`}>
                            {pl.text}
                          </span>
                        )}
                      </>
                    ) : (
                      <span className="text-xs text-gray-400 border border-gray-200 rounded-full px-2 py-0.5">
                        View Key
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="px-5 py-4 text-sm text-gray-400">No completed MEQs yet.</div>
        )}
        <div className="px-5 py-3 border-t border-gray-100">
          <Link href="/meq-daily" className="text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors">
            Go to Daily MEQ →
          </Link>
        </div>
      </div>

      {/* Section 3 — Practice Exam */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 opacity-60">
        <h2 className="font-bold text-gray-500 text-sm">Practice Exam</h2>
        <p className="text-xs text-gray-400 mt-0.5">Coming soon</p>
      </div>

      {/* Section 4 — Overall performance feedback */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-900 text-sm">Overall Performance</h2>
          <p className="text-xs text-gray-400 mt-0.5">
            Based on examiner assessment results from your MEQ attempts
          </p>
        </div>
        <div className="px-5 py-4 space-y-4">
          {domainPerf.length === 0 ? (
            <p className="text-sm text-gray-400">
              Complete an MEQ and choose Examiner Assessment to see domain performance.
            </p>
          ) : (
            <>
              {strongDomains.length > 0 && (
                <div>
                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-2">
                    Strong areas
                  </p>
                  <div className="space-y-1.5">
                    {strongDomains.map((d) => (
                      <div
                        key={d.name}
                        className="flex items-center justify-between bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2"
                      >
                        <span className="text-sm text-emerald-900">{d.name}</span>
                        <span className="text-xs font-bold text-emerald-700 ml-3 flex-shrink-0">{d.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {focusDomains.length > 0 && (
                <div>
                  <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-2">
                    Focus areas
                  </p>
                  <div className="space-y-1.5">
                    {focusDomains.map((d) => (
                      <div
                        key={d.name}
                        className="flex items-center justify-between bg-amber-50 border border-amber-100 rounded-lg px-3 py-2"
                      >
                        <span className="text-sm text-amber-900">{d.name}</span>
                        <span className="text-xs font-bold text-amber-700 ml-3 flex-shrink-0">{d.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {strongDomains.length === 0 && focusDomains.length === 0 && (
                <p className="text-sm text-gray-500">
                  No domains clearly strong or weak yet — keep attempting MEQs.
                </p>
              )}

              {meqTrends.length > 0 && (
                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-2">
                    Score trends
                  </p>
                  <div className="space-y-1.5">
                    {meqTrends.map((t) => (
                      <p
                        key={t.title}
                        className={`text-sm ${
                          t.improved ? "text-emerald-700" : t.same ? "text-gray-500" : "text-red-600"
                        }`}
                      >
                        {t.title}: {t.firstPct}% → {t.lastPct}%
                        {t.improved ? " ↑ improved" : t.same ? " — no change" : " ↓ declined"}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 pb-8">
        All data is stored locally on your device.
      </div>
    </div>
  );
}
