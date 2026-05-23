// @ts-nocheck
import React, { useMemo } from "react";
import { Link, useLocation } from "wouter";

const STORAGE_KEY = "meq_v3_attempts";
const MEQ_TOTAL = 3;

const MEQ_TITLE_MAP = {
  meq_001: { title: "Adil — Consultation Liaison", topic: "Consultation Liaison" },
  meq_002: { title: "Danica — Perinatal Psychiatry", topic: "Perinatal Psychiatry / Ethics" },
  meq_003: { title: "Hypnotics Quality Improvement", topic: "Quality Improvement and Governance" },
};

function loadAttempts() {
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
  return pct >= 75
    ? "text-emerald-700"
    : pct >= 55
    ? "text-amber-600"
    : pct >= 35
    ? "text-orange-600"
    : "text-red-700";
}

export default function MEQProgress() {
  const [, setLocation] = useLocation();

  const allAttempts = useMemo(() => loadAttempts(), []);
  const evaluated = useMemo(
    () => allAttempts.filter((a) => a.status === "evaluated" && a.evaluation),
    [allAttempts]
  );

  const meqsCompleted = useMemo(
    () => new Set(evaluated.map((a) => a.meqId)).size,
    [evaluated]
  );

  const totalStemsAttempted = useMemo(
    () => evaluated.reduce((sum, a) => sum + (a.evaluation.stems?.length ?? 0), 0),
    [evaluated]
  );

  const avgPct = useMemo(() => {
    if (!evaluated.length) return 0;
    return Math.round(
      evaluated.reduce((sum, a) => {
        const pct =
          a.evaluation.totalMarksAvailable > 0
            ? (a.evaluation.totalMarksEarned / a.evaluation.totalMarksAvailable) * 100
            : 0;
        return sum + pct;
      }, 0) / evaluated.length
    );
  }, [evaluated]);

  const cwCompliance = useMemo(() => {
    const allStems = evaluated.flatMap((a) => a.evaluation.stems ?? []);
    if (!allStems.length) return 0;
    const compliant = allStems.filter((s) => s.commandWordCompliance).length;
    return Math.round((compliant / allStems.length) * 100);
  }, [evaluated]);

  const domainPerf = useMemo(() => {
    const map = {};
    for (const attempt of evaluated) {
      for (const stemEv of attempt.evaluation.stems ?? []) {
        const stemPct =
          stemEv.marksAvailable > 0 ? stemEv.marksEarned / stemEv.marksAvailable : 0;
        for (const dg of stemEv.box4_markingGuide?.domainGroups ?? []) {
          if (!dg.domainName) continue;
          if (!map[dg.domainName]) map[dg.domainName] = { earned: 0, available: 0 };
          map[dg.domainName].earned += dg.marks * stemPct;
          map[dg.domainName].available += dg.marks;
        }
      }
    }
    return Object.entries(map)
      .map(([name, { earned, available }]) => ({
        name,
        pct: available > 0 ? Math.round((earned / available) * 100) : 0,
        available: Math.round(available),
      }))
      .sort((a, b) => a.pct - b.pct);
  }, [evaluated]);

  const weakest = domainPerf.slice(0, 3);

  const sortedAttempts = useMemo(
    () =>
      [...evaluated].sort(
        (a, b) =>
          new Date(b.completedAt ?? 0).getTime() -
          new Date(a.completedAt ?? 0).getTime()
      ),
    [evaluated]
  );

  function viewAttempt(attempt) {
    localStorage.setItem("meq_view_attempt", attempt.attemptId);
    setLocation("/meq-daily");
  }

  if (!evaluated.length) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <Link
          href="/meq-daily"
          className="text-xs text-gray-400 hover:text-gray-700 mb-8 block text-left"
        >
          ← Back to MEQ List
        </Link>
        <div className="text-5xl mb-4">📊</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">MEQ Progress</h1>
        <p className="text-gray-500 text-sm max-w-sm mx-auto">
          Complete your first MEQ and submit for examiner assessment to start tracking your
          progress across domains, command words, and attempts.
        </p>
        <Link
          href="/meq-daily"
          className="mt-6 inline-block px-6 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          Start a MEQ →
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">MEQ Progress</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {evaluated.length} evaluated attempt{evaluated.length !== 1 ? "s" : ""} across{" "}
            {meqsCompleted} MEQ{meqsCompleted !== 1 ? "s" : ""}
          </p>
        </div>
        <Link
          href="/meq-daily"
          className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
        >
          ← MEQ List
        </Link>
      </div>

      {/* Section 1 — Summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "MEQs completed", value: `${meqsCompleted}/${MEQ_TOTAL}`, sub: "unique MEQs" },
          {
            label: "Avg score",
            value: `${avgPct}%`,
            sub: "per attempt",
            colored: true,
          },
          { label: "CW compliance", value: `${cwCompliance}%`, sub: "of stems" },
          { label: "Stems attempted", value: totalStemsAttempted, sub: "evaluated" },
        ].map((card) => (
          <div
            key={card.label}
            className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm"
          >
            <div
              className={`text-2xl font-black ${
                card.colored ? scoreColor(avgPct) : "text-gray-900"
              }`}
            >
              {card.value}
            </div>
            <div className="text-xs text-gray-600 mt-1 font-medium">{card.label}</div>
            <div className="text-xs text-gray-400">{card.sub}</div>
          </div>
        ))}
      </div>

      {/* Section 2 — Domain performance */}
      {domainPerf.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-bold text-gray-900 text-sm">Domain Performance</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Marks earned estimated from per-stem scores distributed across domains
            </p>
          </div>
          <div className="divide-y divide-gray-50">
            {domainPerf.map((d) => (
              <div key={d.name} className="flex items-center gap-4 px-5 py-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{d.name}</p>
                  <div className="mt-1.5 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        d.pct >= 75
                          ? "bg-emerald-500"
                          : d.pct >= 50
                          ? "bg-amber-400"
                          : "bg-red-400"
                      }`}
                      style={{ width: `${d.pct}%` }}
                    />
                  </div>
                </div>
                <span
                  className={`text-sm font-bold flex-shrink-0 w-10 text-right ${
                    d.pct >= 75
                      ? "text-emerald-700"
                      : d.pct >= 50
                      ? "text-amber-600"
                      : "text-red-600"
                  }`}
                >
                  {d.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section 3 — All attempts */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-900 text-sm">All Attempts</h2>
          <p className="text-xs text-gray-400 mt-0.5">
            Most recent first — click any row to view full six-box feedback
          </p>
        </div>
        <div className="divide-y divide-gray-50">
          {sortedAttempts.map((attempt) => {
            const pct =
              attempt.evaluation.totalMarksAvailable > 0
                ? Math.round(
                    (attempt.evaluation.totalMarksEarned /
                      attempt.evaluation.totalMarksAvailable) *
                      100
                  )
                : 0;
            const pl = passLabelFromPct(pct);
            const info = MEQ_TITLE_MAP[attempt.meqId] ?? {
              title: attempt.meqId,
              topic: "",
            };
            const date = attempt.completedAt
              ? new Date(attempt.completedAt).toLocaleDateString("en-AU", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              : "—";
            return (
              <button
                key={attempt.attemptId}
                onClick={() => viewAttempt(attempt)}
                className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors text-left"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {info.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{date}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={`text-sm font-bold ${scoreColor(pct)}`}>
                    {attempt.evaluation.totalMarksEarned}/
                    {attempt.evaluation.totalMarksAvailable} ({pct}%)
                  </span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full border font-semibold ${pl.cls}`}
                  >
                    {pl.text}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Section 4 — Weakest areas */}
      {weakest.length > 0 && (
        <div className="bg-red-50 border border-red-100 rounded-2xl overflow-hidden">
          <div className="px-5 py-4 border-b border-red-100">
            <h2 className="font-bold text-red-800 text-sm">
              Weakest Areas — Priority Revision
            </h2>
            <p className="text-xs text-red-500 mt-0.5">
              Domains with the lowest average score — focus your revision here first
            </p>
          </div>
          <div className="divide-y divide-red-100">
            {weakest.map((d, i) => (
              <div key={d.name} className="px-5 py-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-red-800">{d.name}</span>
                  <span className="text-sm font-bold text-red-600">{d.pct}%</span>
                </div>
                <p className="text-xs text-red-600">
                  {i === 0
                    ? "Highest priority — review marking guide key points and practise structured answers for this domain."
                    : i === 1
                    ? "Re-read domain marking guides and check your answers cover all required content areas."
                    : "Review your examination approach — ensure answers address all key points in this domain."}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-center text-xs text-gray-400 pb-8">
        All data is stored locally on your device.
      </div>
    </div>
  );
}
