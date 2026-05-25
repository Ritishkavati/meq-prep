import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useAdmin } from "@/lib/adminStore";
import { Header } from "@/components/Header";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
} from "recharts";
import {
  ShieldCheck, LogOut, Users, Activity, BarChart2,
  Trash2, RefreshCw, ChevronDown, ChevronUp, TrendingUp,
  Calendar, Award, BookOpen, Eye,
} from "lucide-react";
import { useCandidate } from "@/lib/store";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

// ── Types ────────────────────────────────────────────────────────────────────

interface CandidateAttempt {
  timestamp: string;
  questionId: string | null;
  estimatedMarks: number | null;
  totalMarks: number | null;
  pct: number | null;
}

interface Candidate {
  id: string;
  count: number;
  avgScore: number | null;
  lastActive: string | null;
  attempts: CandidateAttempt[];
}

interface RecentAttempt {
  timestamp: string;
  questionId: string | null;
  candidateId: string;
  estimatedMarks: number | null;
  totalMarks: number | null;
}

interface QuestionStat {
  questionId: string;
  count: number;
  avgScore: number | null;
}

interface AdminStats {
  totalAttempts: number;
  totalCandidates: number;
  avgScore: number | null;
  candidates: Candidate[];
  recentAttempts: RecentAttempt[];
  questionStats?: QuestionStat[];
  scoreDistribution?: Array<{ label: string; count: number }>;
  dailyActivity?: Array<{ date: string; count: number }>;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function fmtTs(ts: string | null | undefined) {
  if (!ts) return "—";
  const d = new Date(ts);
  return d.toLocaleString(undefined, { dateStyle: "short", timeStyle: "short" });
}

function fmtDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function scoreBadge(pct: number | null) {
  if (pct == null) return <span className="text-muted-foreground text-xs">—</span>;
  const cls =
    pct >= 70 ? "bg-emerald-100 text-emerald-700" :
    pct >= 50 ? "bg-amber-100 text-amber-700" :
                "bg-red-100 text-red-600";
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cls}`}>
      {pct}%
    </span>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

type Tab = "overview" | "candidates" | "metrics";

export default function AdminDashboard() {
  const { isAdmin, isLoading, logout, token } = useAdmin();
  const { setCandidateNumber } = useCandidate();
  const [, setLocation] = useLocation();
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [statsLoading, setStatsLoading] = useState(false);
  const [statsError, setStatsError] = useState("");
  const [clearing, setClearing] = useState(false);
  const [tab, setTab] = useState<Tab>("overview");

  useEffect(() => {
    if (!isLoading && !isAdmin) setLocation("/admin/login");
  }, [isAdmin, isLoading, setLocation]);

  useEffect(() => {
    if (isAdmin) fetchStats();
  }, [isAdmin]);

  async function fetchStats() {
    if (!token) return;
    setStatsLoading(true);
    setStatsError("");
    try {
      const r = await fetch(`${BASE}/api/admin/stats`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!r.ok) throw new Error("Failed");
      setStats(await r.json() as AdminStats);
    } catch {
      setStatsError("Could not load stats — ensure the API server is running.");
    } finally {
      setStatsLoading(false);
    }
  }

  async function clearLogs() {
    if (!token) return;
    if (!window.confirm("Clear all attempt logs? This cannot be undone.")) return;
    setClearing(true);
    try {
      await fetch(`${BASE}/api/admin/logs`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      await fetchStats();
    } finally {
      setClearing(false);
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="animate-pulse text-muted-foreground">Checking session…</span>
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto p-4 md:p-8 pt-8 md:pt-12">
        <Header />

        {/* Title bar */}
        <div className="flex items-center justify-between mb-6 mt-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-serif font-bold text-primary">Admin Dashboard</h2>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
              Master Admin
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setCandidateNumber("ADMIN-PREVIEW");
                setLocation("/phases");
              }}
              className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border border-teal-300 bg-teal-50 text-teal-700 hover:bg-teal-100 transition-colors font-medium"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview App</span>
            </button>
            <button
              onClick={fetchStats}
              disabled={statsLoading}
              title="Refresh"
              className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border border-input hover:bg-muted transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${statsLoading ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
            <button
              onClick={() => { logout(); setLocation("/"); }}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-red-500 transition-colors px-3 py-1.5"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <StatCard
            icon={<Activity className="w-4 h-4 text-blue-600" />}
            label="Total Attempts"
            value={statsLoading ? "…" : String(stats?.totalAttempts ?? 0)}
            bg="bg-blue-50"
          />
          <StatCard
            icon={<Users className="w-4 h-4 text-violet-600" />}
            label="Candidates"
            value={statsLoading ? "…" : String(stats?.totalCandidates ?? 0)}
            bg="bg-violet-50"
          />
          <StatCard
            icon={<Award className="w-4 h-4 text-amber-600" />}
            label="Avg Score"
            value={statsLoading ? "…" : stats?.avgScore != null ? `${stats.avgScore}%` : "—"}
            bg="bg-amber-50"
          />
          <StatCard
            icon={<BookOpen className="w-4 h-4 text-emerald-600" />}
            label="MEQs in Bank"
            value="21"
            bg="bg-emerald-50"
          />
        </div>

        {statsError && (
          <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-4">
            {statsError}
          </p>
        )}

        {/* Tabs */}
        <div className="flex gap-1 bg-muted/50 rounded-xl p-1 mb-6 w-full max-w-xs">
          {(["overview", "candidates", "metrics"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 text-xs font-medium py-1.5 rounded-lg transition-all capitalize ${
                tab === t
                  ? "bg-white shadow-sm text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {tab === "overview" && (
          <OverviewTab
            stats={stats}
            statsLoading={statsLoading}
            clearing={clearing}
            onClear={clearLogs}
          />
        )}
        {tab === "candidates" && (
          <CandidatesTab stats={stats} statsLoading={statsLoading} />
        )}
        {tab === "metrics" && (
          <MetricsTab stats={stats} statsLoading={statsLoading} />
        )}

        <p className="text-center text-xs text-muted-foreground mt-8">
          Session expires after 8 hours. Admin access is logged.
        </p>
      </div>
    </div>
  );
}

// ── Overview tab ──────────────────────────────────────────────────────────────

function OverviewTab({
  stats,
  statsLoading,
  clearing,
  onClear,
}: {
  stats: AdminStats | null;
  statsLoading: boolean;
  clearing: boolean;
  onClear: () => void;
}) {
  const [showRecent, setShowRecent] = useState(true);

  return (
    <div className="space-y-4">
      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={onClear}
          disabled={clearing || !stats?.totalAttempts}
          className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
        >
          <Trash2 className="w-4 h-4" />
          {clearing ? "Clearing…" : "Clear Logs"}
        </button>
      </div>

      {/* Recent attempts */}
      <div className="bg-card rounded-2xl shadow-sm border border-card-border overflow-hidden">
        <button
          onClick={() => setShowRecent((v) => !v)}
          className="w-full flex items-center justify-between p-4 hover:bg-muted/40 transition-colors"
        >
          <div className="flex items-center gap-2 font-semibold text-primary text-sm">
            <Activity className="w-4 h-4" />
            Recent Attempts (last 50)
          </div>
          {showRecent ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
        {showRecent && (
          <div className="border-t border-card-border overflow-x-auto">
            {!stats?.recentAttempts?.length || statsLoading ? (
              <p className="text-sm text-muted-foreground px-4 py-6 text-center">
                {statsLoading ? "Loading…" : "No attempts logged yet"}
              </p>
            ) : (
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-muted/30 text-muted-foreground">
                    <th className="text-left px-4 py-2 font-medium">Time</th>
                    <th className="text-left px-4 py-2 font-medium">Candidate</th>
                    <th className="text-left px-4 py-2 font-medium">Question</th>
                    <th className="text-right px-4 py-2 font-medium">Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-card-border">
                  {stats.recentAttempts.map((a, i) => {
                    const pct =
                      a.estimatedMarks != null && a.totalMarks
                        ? Math.round((a.estimatedMarks / a.totalMarks) * 100)
                        : null;
                    return (
                      <tr key={i} className="hover:bg-muted/20">
                        <td className="px-4 py-2 text-muted-foreground whitespace-nowrap">
                          {fmtTs(a.timestamp as string)}
                        </td>
                        <td className="px-4 py-2 font-mono">{a.candidateId}</td>
                        <td className="px-4 py-2 text-muted-foreground">{a.questionId ?? "—"}</td>
                        <td className="px-4 py-2 text-right">{scoreBadge(pct)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Candidates tab ─────────────────────────────────────────────────────────────

function CandidatesTab({
  stats,
  statsLoading,
}: {
  stats: AdminStats | null;
  statsLoading: boolean;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (statsLoading) {
    return <div className="text-sm text-muted-foreground py-10 text-center">Loading…</div>;
  }

  if (!stats?.candidates?.length) {
    return (
      <div className="bg-card rounded-2xl border border-card-border p-10 text-center">
        <Users className="w-8 h-8 text-muted-foreground mx-auto mb-3 opacity-40" />
        <p className="text-sm text-muted-foreground">No candidate data yet</p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl shadow-sm border border-card-border overflow-hidden">
      {/* Table header */}
      <div className="grid grid-cols-12 text-xs font-medium text-muted-foreground bg-muted/30 px-4 py-2.5 border-b border-card-border">
        <div className="col-span-4">Candidate</div>
        <div className="col-span-2 text-center">Attempts</div>
        <div className="col-span-2 text-center">Avg Score</div>
        <div className="col-span-3 text-right">Last Active</div>
        <div className="col-span-1" />
      </div>

      <div className="divide-y divide-card-border">
        {stats.candidates.map((c) => {
          const isOpen = expanded === c.id;
          return (
            <div key={c.id}>
              {/* Row */}
              <button
                onClick={() => setExpanded(isOpen ? null : c.id)}
                className="w-full grid grid-cols-12 items-center px-4 py-3 hover:bg-muted/30 transition-colors text-left"
              >
                <div className="col-span-4 font-mono text-sm text-primary truncate">{c.id}</div>
                <div className="col-span-2 text-center">
                  <span className="text-sm font-semibold text-primary">{c.count}</span>
                </div>
                <div className="col-span-2 text-center">{scoreBadge(c.avgScore)}</div>
                <div className="col-span-3 text-right text-xs text-muted-foreground whitespace-nowrap">
                  {fmtTs(c.lastActive)}
                </div>
                <div className="col-span-1 flex justify-end">
                  {isOpen ? (
                    <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                  )}
                </div>
              </button>

              {/* Expanded attempt history */}
              {isOpen && (
                <div className="bg-muted/20 border-t border-card-border px-4 py-3">
                  <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                    Attempt history
                  </p>
                  {c.attempts.length === 0 ? (
                    <p className="text-xs text-muted-foreground">No recorded attempts</p>
                  ) : (
                    <div className="space-y-1.5">
                      {c.attempts.map((a, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-xs"
                        >
                          <span className="text-muted-foreground whitespace-nowrap mr-3">
                            {fmtTs(a.timestamp)}
                          </span>
                          <span className="font-mono text-muted-foreground flex-1 truncate">
                            {a.questionId ?? "—"}
                          </span>
                          <span className="ml-3">{scoreBadge(a.pct)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Metrics tab ───────────────────────────────────────────────────────────────

const DIST_COLOURS = ["#ef4444", "#f59e0b", "#3b82f6", "#10b981", "#6366f1"];

function MetricsTab({
  stats,
  statsLoading,
}: {
  stats: AdminStats | null;
  statsLoading: boolean;
}) {
  if (statsLoading) {
    return <div className="text-sm text-muted-foreground py-10 text-center">Loading…</div>;
  }

  const dailyActivity = stats?.dailyActivity ?? [];
  const scoreDistribution = stats?.scoreDistribution ?? [];
  const questionStats = stats?.questionStats ?? [];

  if (!stats?.totalAttempts) {
    return (
      <div className="bg-card rounded-2xl border border-card-border p-10 text-center">
        <BarChart2 className="w-8 h-8 text-muted-foreground mx-auto mb-3 opacity-40" />
        <p className="text-sm text-muted-foreground">No data yet — metrics will appear after candidates attempt questions</p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Daily activity */}
      <div className="bg-card rounded-2xl shadow-sm border border-card-border p-4 md:p-5">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4 text-blue-500" />
          <h3 className="text-sm font-semibold text-primary">Daily Activity — last 14 days</h3>
        </div>
        <div className="h-36">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dailyActivity} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <XAxis
                dataKey="date"
                tickFormatter={fmtDate}
                tick={{ fontSize: 9, fill: "#94a3b8" }}
                tickLine={false}
                axisLine={false}
                interval={2}
              />
              <YAxis
                tick={{ fontSize: 9, fill: "#94a3b8" }}
                tickLine={false}
                axisLine={false}
                allowDecimals={false}
              />
              <Tooltip
                formatter={(v) => [`${v} attempt${Number(v) !== 1 ? "s" : ""}`, ""]}
                labelFormatter={fmtDate}
                contentStyle={{ fontSize: 11, borderRadius: 8 }}
              />
              <Bar dataKey="count" fill="#3b82f6" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Score distribution */}
      <div className="bg-card rounded-2xl shadow-sm border border-card-border p-4 md:p-5">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-4 h-4 text-emerald-500" />
          <h3 className="text-sm font-semibold text-primary">Score Distribution</h3>
        </div>
        {scoreDistribution.every((b) => b.count === 0) ? (
          <p className="text-xs text-muted-foreground py-4 text-center">No scored attempts yet</p>
        ) : (
          <div className="h-36">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={scoreDistribution} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <XAxis
                  dataKey="label"
                  tick={{ fontSize: 9, fill: "#94a3b8" }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  tick={{ fontSize: 9, fill: "#94a3b8" }}
                  tickLine={false}
                  axisLine={false}
                  allowDecimals={false}
                />
                <Tooltip
                  formatter={(v) => [`${v} attempt${Number(v) !== 1 ? "s" : ""}`, ""]}
                  contentStyle={{ fontSize: 11, borderRadius: 8 }}
                />
                <Bar dataKey="count" radius={[3, 3, 0, 0]}>
                  {scoreDistribution.map((_, i) => (
                    <Cell key={i} fill={DIST_COLOURS[i % DIST_COLOURS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Question performance table */}
      {questionStats.length > 0 && (
        <div className="bg-card rounded-2xl shadow-sm border border-card-border overflow-hidden">
          <div className="flex items-center gap-2 p-4 border-b border-card-border">
            <BookOpen className="w-4 h-4 text-violet-500" />
            <h3 className="text-sm font-semibold text-primary">Question Performance</h3>
            <span className="text-xs text-muted-foreground ml-auto">top 20 by attempts</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-muted/30 text-muted-foreground">
                  <th className="text-left px-4 py-2 font-medium">Question ID</th>
                  <th className="text-center px-4 py-2 font-medium">Attempts</th>
                  <th className="text-right px-4 py-2 font-medium">Avg Score</th>
                  <th className="text-right px-4 py-2 font-medium w-32">Bar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-card-border">
                {questionStats.map((q) => {
                  const barPct = q.avgScore ?? 0;
                  const barColour =
                    barPct >= 70 ? "bg-emerald-400" :
                    barPct >= 50 ? "bg-amber-400" :
                                  "bg-red-400";
                  const maxCount = Math.max(...questionStats.map((x) => x.count), 1);
                  return (
                    <tr key={q.questionId} className="hover:bg-muted/20">
                      <td className="px-4 py-2 font-mono text-primary">{q.questionId}</td>
                      <td className="px-4 py-2 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <div
                            className="h-1.5 rounded-full bg-blue-300"
                            style={{ width: `${Math.round((q.count / maxCount) * 40)}px`, minWidth: 2 }}
                          />
                          <span>{q.count}</span>
                        </div>
                      </td>
                      <td className="px-4 py-2 text-right">{scoreBadge(q.avgScore)}</td>
                      <td className="px-4 py-2 text-right">
                        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                          <div
                            className={`h-full rounded-full ${barColour} transition-all`}
                            style={{ width: `${barPct}%` }}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Summary row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-blue-50 rounded-xl p-4 text-center">
          <p className="text-xs text-muted-foreground mb-1">Total Attempts</p>
          <p className="text-2xl font-bold text-blue-700">{stats.totalAttempts}</p>
        </div>
        <div className="bg-violet-50 rounded-xl p-4 text-center">
          <p className="text-xs text-muted-foreground mb-1">Candidates</p>
          <p className="text-2xl font-bold text-violet-700">{stats.totalCandidates}</p>
        </div>
        <div className="bg-amber-50 rounded-xl p-4 text-center">
          <p className="text-xs text-muted-foreground mb-1">Overall Avg</p>
          <p className="text-2xl font-bold text-amber-700">
            {stats.avgScore != null ? `${stats.avgScore}%` : "—"}
          </p>
        </div>
      </div>

      {/* Activity heatmap legend */}
      <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground">
        <span>Attempts per day:</span>
        {[0, 1, 3, 6, 10].map((n, i) => (
          <div key={i} className="flex items-center gap-1">
            <div
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: `rgba(59,130,246,${i === 0 ? 0.1 : 0.2 + i * 0.2})` }}
            />
            <span>{n === 10 ? "10+" : n}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Shared ────────────────────────────────────────────────────────────────────

function StatCard({
  icon, label, value, bg,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  bg: string;
}) {
  return (
    <div className={`${bg} rounded-xl p-3 md:p-4 flex items-center gap-2.5`}>
      <div className="flex-shrink-0">{icon}</div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground truncate">{label}</p>
        <p className="text-xl md:text-2xl font-bold text-primary">{value}</p>
      </div>
    </div>
  );
}
