import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useAdmin } from "@/lib/adminStore";
import { Header } from "@/components/Header";
import {
  ShieldCheck, LogOut, Users, Activity, BarChart2,
  Trash2, RefreshCw, ChevronDown, ChevronUp,
} from "lucide-react";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

interface Candidate { id: string; count: number }
interface RecentAttempt {
  timestamp: string;
  questionId: string | null;
  candidateId: string;
  estimatedMarks: number | null;
  totalMarks: number | null;
}
interface AdminStats {
  totalAttempts: number;
  totalCandidates: number;
  candidates: Candidate[];
  recentAttempts: RecentAttempt[];
}

export default function AdminDashboard() {
  const { isAdmin, isLoading, logout, token } = useAdmin();
  const [, setLocation] = useLocation();
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [statsLoading, setStatsLoading] = useState(false);
  const [statsError, setStatsError] = useState("");
  const [showCandidates, setShowCandidates] = useState(false);
  const [showRecent, setShowRecent] = useState(true);
  const [clearing, setClearing] = useState(false);

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
      if (!r.ok) throw new Error("Failed to load stats");
      const data = await r.json() as AdminStats;
      setStats(data);
    } catch (e) {
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

  function handleLogout() {
    logout();
    setLocation("/");
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
    <div className="max-w-4xl mx-auto p-4 md:p-8 pt-8 md:pt-12">
      <Header />

      <div className="flex items-center justify-between mb-6 mt-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-serif font-bold text-primary">Admin Dashboard</h2>
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Master Admin</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-red-500 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <StatCard
          icon={<Activity className="w-5 h-5 text-blue-600" />}
          label="Total Attempts"
          value={statsLoading ? "…" : String(stats?.totalAttempts ?? 0)}
          bg="bg-blue-50"
        />
        <StatCard
          icon={<Users className="w-5 h-5 text-violet-600" />}
          label="Candidates"
          value={statsLoading ? "…" : String(stats?.totalCandidates ?? 0)}
          bg="bg-violet-50"
        />
        <StatCard
          icon={<BarChart2 className="w-5 h-5 text-emerald-600" />}
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

      {/* Actions */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={fetchStats}
          disabled={statsLoading}
          className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border border-input hover:bg-muted transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${statsLoading ? "animate-spin" : ""}`} />
          Refresh
        </button>
        <button
          onClick={clearLogs}
          disabled={clearing || !stats?.totalAttempts}
          className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
        >
          <Trash2 className="w-4 h-4" />
          {clearing ? "Clearing…" : "Clear Logs"}
        </button>
      </div>

      {/* Candidate list */}
      <div className="bg-card rounded-2xl shadow-sm border border-card-border mb-4 overflow-hidden">
        <button
          onClick={() => setShowCandidates((v) => !v)}
          className="w-full flex items-center justify-between p-4 hover:bg-muted/40 transition-colors"
        >
          <div className="flex items-center gap-2 font-semibold text-primary text-sm">
            <Users className="w-4 h-4" />
            Candidate Activity
          </div>
          {showCandidates ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
        </button>
        {showCandidates && (
          <div className="border-t border-card-border divide-y divide-card-border">
            {!stats?.candidates?.length ? (
              <p className="text-sm text-muted-foreground px-4 py-6 text-center">No data yet</p>
            ) : (
              stats.candidates.map((c) => (
                <div key={c.id} className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm font-mono text-primary">{c.id}</span>
                  <span className="text-xs text-muted-foreground">{c.count} attempt{c.count !== 1 ? "s" : ""}</span>
                </div>
              ))
            )}
          </div>
        )}
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
          {showRecent ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
        </button>
        {showRecent && (
          <div className="border-t border-card-border overflow-x-auto">
            {!stats?.recentAttempts?.length ? (
              <p className="text-sm text-muted-foreground px-4 py-6 text-center">No attempts logged yet</p>
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
                    const ts = a.timestamp ? new Date(a.timestamp).toLocaleString() : "—";
                    const pct =
                      a.estimatedMarks != null && a.totalMarks
                        ? Math.round((a.estimatedMarks / a.totalMarks) * 100)
                        : null;
                    return (
                      <tr key={i} className="hover:bg-muted/20">
                        <td className="px-4 py-2 text-muted-foreground whitespace-nowrap">{ts}</td>
                        <td className="px-4 py-2 font-mono">{a.candidateId}</td>
                        <td className="px-4 py-2 text-muted-foreground">{a.questionId ?? "—"}</td>
                        <td className="px-4 py-2 text-right font-medium">
                          {pct != null ? (
                            <span className={pct >= 60 ? "text-emerald-600" : pct >= 40 ? "text-amber-600" : "text-red-500"}>
                              {a.estimatedMarks}/{a.totalMarks} ({pct}%)
                            </span>
                          ) : "—"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-8">
        Session expires after 8 hours. Admin access is logged.
      </p>
    </div>
  );
}

function StatCard({ icon, label, value, bg }: { icon: React.ReactNode; label: string; value: string; bg: string }) {
  return (
    <div className={`${bg} rounded-xl p-4 flex items-center gap-3`}>
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-2xl font-bold text-primary">{value}</p>
      </div>
    </div>
  );
}
