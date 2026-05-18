import React, { useState } from "react";
import { Link } from "wouter";
import {
  usePS,
  STATUS_LABELS,
  REGION_LABELS,
  PS_TOPIC_TAGS,
  isOlderThan3Years,
  type PSStatus,
  type PSRegion,
} from "@/lib/positionStatementStore";
import { PSBrainLayout } from "./PSBrainLayout";
import {
  BookMarked, CheckCircle, AlertTriangle, XCircle, HelpCircle,
  Plus, ChevronDown, ChevronUp, ExternalLink, Trash2, Filter,
} from "lucide-react";
import { format } from "date-fns";

function StatusBadge({ status }: { status: PSStatus }) {
  if (status === "current")
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
        <CheckCircle className="w-3 h-3" /> Current
      </span>
    );
  if (status === "rescinded")
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
        <XCircle className="w-3 h-3" /> Rescinded
      </span>
    );
  if (status === "archived")
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-full">
        <HelpCircle className="w-3 h-3" /> Archived
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
      <HelpCircle className="w-3 h-3" /> Unknown
    </span>
  );
}

function StatementCard({
  s,
  onDelete,
}: {
  s: ReturnType<typeof usePS>["statements"][number];
  onDelete: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const stale = isOlderThan3Years(s.lastUpdated);
  const isRescinded = s.status === "rescinded";

  return (
    <div
      className={`bg-white rounded-2xl border shadow-sm p-5 ${
        isRescinded
          ? "border-red-200 bg-red-50/30"
          : stale
          ? "border-amber-200"
          : "border-card-border"
      }`}
    >
      <div className="flex items-start gap-3">
        <BookMarked className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-start gap-2 mb-1">
            <span className="text-xs font-mono font-bold text-muted-foreground bg-gray-100 px-2 py-0.5 rounded">
              {s.referenceNumber || "PS #—"}
            </span>
            <StatusBadge status={s.status} />
            <span className="text-xs text-muted-foreground">{REGION_LABELS[s.publishedRegion as PSRegion]}</span>
            {stale && !isRescinded && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                <AlertTriangle className="w-3 h-3" /> Older than 3 years — verify currency
              </span>
            )}
            {isRescinded && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-red-700 bg-red-100 border border-red-200 px-2 py-0.5 rounded-full">
                <XCircle className="w-3 h-3" /> Rescinded — do not rely on this
              </span>
            )}
          </div>

          <h3 className="font-serif font-bold text-primary text-base leading-snug">{s.title}</h3>
          {s.lastUpdated && s.lastUpdated !== "unknown" && (
            <p className="text-xs text-muted-foreground mt-0.5">
              Last updated: {s.lastUpdated}
            </p>
          )}

          <p className="text-sm text-foreground/80 mt-2 leading-relaxed">{s.shortSummary}</p>

          {s.topicTags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2.5">
              {s.topicTags.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0 ml-2">
          {s.sourceUrl && (
            <a
              href={s.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Open source"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <button
            onClick={onDelete}
            className="text-muted-foreground hover:text-red-500 transition-colors"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-muted-foreground hover:text-primary transition-colors"
            title={expanded ? "Collapse" : "Expand"}
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-border space-y-4">
          {s.keyPrinciples.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                Key Principles
              </h4>
              <ul className="space-y-1.5">
                {s.keyPrinciples.map((p, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex gap-2">
                    <span className="text-accent font-bold mt-0.5">—</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {s.meqRelevance && (
            <div>
              <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                MEQ Relevance
              </h4>
              <p className="text-sm text-foreground/80">{s.meqRelevance}</p>
            </div>
          )}

          {s.consultantLevelImplications && (
            <div>
              <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                Consultant-Level Implications
              </h4>
              <p className="text-sm text-foreground/80">{s.consultantLevelImplications}</p>
            </div>
          )}

          {s.commonExamSignals.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                Common Exam Signals
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {s.commonExamSignals.map((sig, i) => (
                  <span
                    key={i}
                    className="text-xs bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-full"
                  >
                    {sig}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-3">
            {s.relatedRiskDomains.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-red-700 uppercase tracking-wider mb-1">Risk</h4>
                <ul className="text-xs text-muted-foreground space-y-0.5">
                  {s.relatedRiskDomains.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </div>
            )}
            {s.relatedLegalDomains.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">Legal</h4>
                <ul className="text-xs text-muted-foreground space-y-0.5">
                  {s.relatedLegalDomains.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </div>
            )}
            {s.relatedCulturalDomains.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">Cultural</h4>
                <ul className="text-xs text-muted-foreground space-y-0.5">
                  {s.relatedCulturalDomains.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </div>
            )}
            {s.relatedSystemDomains.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold text-purple-700 uppercase tracking-wider mb-1">Systems</h4>
                <ul className="text-xs text-muted-foreground space-y-0.5">
                  {s.relatedSystemDomains.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function PSBrainDashboard() {
  const { statements, deleteStatement } = usePS();
  const [filterStatus, setFilterStatus] = useState<PSStatus | "all">("all");
  const [filterTag, setFilterTag] = useState<string>("all");
  const [filterRegion, setFilterRegion] = useState<PSRegion | "all">("all");
  const [showFilters, setShowFilters] = useState(false);

  const warnings = statements.filter(
    (s) =>
      (s.status === "current" && isOlderThan3Years(s.lastUpdated)) ||
      s.status === "rescinded"
  );

  const total = statements.length;
  const current = statements.filter((s) => s.status === "current").length;
  const rescinded = statements.filter((s) => s.status === "rescinded").length;
  const stale = statements.filter(
    (s) => s.status === "current" && isOlderThan3Years(s.lastUpdated)
  ).length;

  const filtered = statements.filter((s) => {
    if (filterStatus !== "all" && s.status !== filterStatus) return false;
    if (filterTag !== "all" && !s.topicTags.includes(filterTag)) return false;
    if (filterRegion !== "all" && s.publishedRegion !== filterRegion && s.publishedRegion !== "Both") return false;
    return true;
  });

  const allTags = Array.from(new Set(statements.flatMap((s) => s.topicTags))).sort();

  return (
    <PSBrainLayout>
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-1">
              Position Statements
            </h2>
            <p className="text-sm text-muted-foreground">
              Official RANZCP policy positions used to inform consultant-level clinical reasoning.
            </p>
          </div>
          <Link
            href="/brain/ps/add"
            className="flex-shrink-0 flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Statement
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total statements", value: total, color: "text-primary" },
            { label: "Current", value: current, color: "text-emerald-600" },
            { label: "Rescinded", value: rescinded, color: "text-red-600" },
            { label: "Needs review", value: stale, color: "text-amber-600" },
          ].map(({ label, value, color }) => (
            <div
              key={label}
              className="bg-white rounded-2xl border border-card-border shadow-sm p-5"
            >
              <p className={`text-3xl font-bold ${color}`}>{value}</p>
              <p className="text-xs text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </div>

        {warnings.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <h3 className="font-semibold text-amber-800 text-sm flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4" /> Currency warnings
            </h3>
            <ul className="space-y-1.5">
              {warnings.map((s) => (
                <li key={s.id} className="text-sm text-amber-800 flex items-start gap-2">
                  <span className="mt-0.5">
                    {s.status === "rescinded" ? <XCircle className="w-4 h-4 text-red-500" /> : <AlertTriangle className="w-4 h-4" />}
                  </span>
                  <span>
                    <strong>{s.referenceNumber}</strong> — {s.title}
                    {s.status === "rescinded" ? (
                      <span className="ml-2 text-red-700 font-semibold">Rescinded</span>
                    ) : (
                      <span className="ml-2">last updated {s.lastUpdated} — verify at ranzcp.org</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="bg-white rounded-2xl border border-card-border shadow-sm p-4">
          <button
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
            onClick={() => setShowFilters((v) => !v)}
          >
            <Filter className="w-4 h-4" />
            {showFilters ? "Hide filters" : "Filter statements"}
            {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showFilters && (
            <div className="mt-4 grid sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-primary uppercase tracking-wider">Status</label>
                <select
                  className="w-full h-9 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value as PSStatus | "all")}
                >
                  <option value="all">All statuses</option>
                  <option value="current">Current</option>
                  <option value="rescinded">Rescinded</option>
                  <option value="archived">Archived</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-primary uppercase tracking-wider">Topic</label>
                <select
                  className="w-full h-9 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  value={filterTag}
                  onChange={(e) => setFilterTag(e.target.value)}
                >
                  <option value="all">All topics</option>
                  {allTags.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-primary uppercase tracking-wider">Region</label>
                <select
                  className="w-full h-9 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  value={filterRegion}
                  onChange={(e) => setFilterRegion(e.target.value as PSRegion | "all")}
                >
                  <option value="all">All regions</option>
                  <option value="Australia">Australia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Both">Both</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="bg-white rounded-2xl border border-card-border shadow-sm p-8 text-center">
              <BookMarked className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">No position statements match the current filters.</p>
              <Link href="/brain/ps/add" className="mt-3 inline-flex items-center gap-1.5 text-sm text-accent font-semibold hover:underline">
                <Plus className="w-4 h-4" /> Add one now
              </Link>
            </div>
          ) : (
            filtered.map((s) => (
              <StatementCard key={s.id} s={s} onDelete={() => deleteStatement(s.id)} />
            ))
          )}
        </div>

        <p className="text-center text-xs text-muted-foreground pb-4 max-w-xl mx-auto leading-relaxed">
          RANZCP position statement reference numbers and last-updated dates should always be
          verified at{" "}
          <a
            href="https://www.ranzcp.org/clinical-guidelines-publications/position-statements"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            ranzcp.org
          </a>
          . Seeded entries are for study orientation only.
        </p>
      </div>
    </PSBrainLayout>
  );
}
