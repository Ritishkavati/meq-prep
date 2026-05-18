import React, { useState } from "react";
import { useBrain, ExtractedItem, ExtractedItemStatus, UPLOAD_CATEGORY_LABELS } from "@/lib/brainStore";
import { BrainLayout } from "./BrainLayout";
import { CheckCircle, Archive, Trash2, Pencil, X, Save, ChevronDown, ChevronUp } from "lucide-react";

const STATUS_STYLES: Record<ExtractedItemStatus, string> = {
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  approved: "bg-emerald-50 text-emerald-700 border-emerald-200",
  archived: "bg-gray-100 text-gray-500 border-gray-200",
};

const STATUS_LABELS: Record<ExtractedItemStatus, string> = {
  pending: "Pending review",
  approved: "Approved",
  archived: "Archived",
};

interface EditState {
  examinerFocus: string;
  riskLegalCultural: string;
  candidatePitfalls: string;
  expectedSignalsRaw: string;
}

function ItemCard({ item }: { item: ExtractedItem }) {
  const { updateExtractedItem, deleteExtractedItem, uploadedFiles } = useBrain();
  const [expanded, setExpanded] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editState, setEditState] = useState<EditState>({
    examinerFocus: item.examinerFocus,
    riskLegalCultural: item.riskLegalCultural,
    candidatePitfalls: item.candidatePitfalls,
    expectedSignalsRaw: item.expectedSignals.join(", "),
  });

  const sourceFile = uploadedFiles.find((f) => f.id === item.fileId);

  function saveEdit() {
    updateExtractedItem(item.id, {
      examinerFocus: editState.examinerFocus,
      riskLegalCultural: editState.riskLegalCultural,
      candidatePitfalls: editState.candidatePitfalls,
      expectedSignals: editState.expectedSignalsRaw
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    });
    setEditing(false);
  }

  return (
    <div
      className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all ${
        item.status === "archived" ? "opacity-60" : ""
      } ${item.status === "approved" ? "border-emerald-200" : "border-card-border"}`}
    >
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {item.topic}
              </span>
              <span className="text-xs text-muted-foreground">
                Stem {item.stemNumber} &middot; {item.marks} marks
              </span>
              {sourceFile && (
                <span className="text-xs text-muted-foreground truncate max-w-[160px]">
                  {sourceFile.filename}
                </span>
              )}
            </div>
            <span
              className={`inline-flex text-xs font-medium border px-2 py-0.5 rounded-full ${
                STATUS_STYLES[item.status]
              }`}
            >
              {STATUS_LABELS[item.status]}
            </span>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {item.status !== "approved" && (
              <button
                title="Approve"
                onClick={() => updateExtractedItem(item.id, { status: "approved" })}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
              >
                <CheckCircle className="w-4 h-4" />
              </button>
            )}
            {item.status !== "archived" && (
              <button
                title="Archive"
                onClick={() => updateExtractedItem(item.id, { status: "archived" })}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Archive className="w-4 h-4" />
              </button>
            )}
            <button
              title="Edit"
              onClick={() => { setEditing((v) => !v); setExpanded(true); }}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
            >
              <Pencil className="w-4 h-4" />
            </button>
            <button
              title="Delete"
              onClick={() => deleteExtractedItem(item.id)}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="bg-primary/4 rounded-lg p-4 mb-3">
          <p className="text-sm text-primary leading-relaxed">{item.scenario}</p>
        </div>
        <p className="text-sm font-medium text-primary italic">{item.question}</p>

        <button
          className="mt-3 flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? (
            <>
              <ChevronUp className="w-3.5 h-3.5" /> Collapse details
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5" /> Show details
            </>
          )}
        </button>
      </div>

      {expanded && (
        <div className="border-t border-border px-5 pb-5 pt-4 space-y-4">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
              Expected signals
            </p>
            {editing ? (
              <textarea
                className="w-full text-sm border border-input rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                rows={3}
                value={editState.expectedSignalsRaw}
                onChange={(e) =>
                  setEditState((s) => ({ ...s, expectedSignalsRaw: e.target.value }))
                }
                placeholder="Comma-separated signals"
              />
            ) : (
              <ul className="space-y-1">
                {item.expectedSignals.map((sig) => (
                  <li key={sig} className="flex items-start gap-2 text-sm text-primary">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {sig}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Examiner focus", key: "examinerFocus" as keyof EditState },
              { label: "Risk / Legal / Cultural", key: "riskLegalCultural" as keyof EditState },
              { label: "Candidate pitfalls", key: "candidatePitfalls" as keyof EditState },
            ].map(({ label, key }) => (
              <div key={key}>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1.5">
                  {label}
                </p>
                {editing ? (
                  <textarea
                    className="w-full text-sm border border-input rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    rows={3}
                    value={editState[key]}
                    onChange={(e) =>
                      setEditState((s) => ({ ...s, [key]: e.target.value }))
                    }
                  />
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item[key as keyof ExtractedItem] as string}
                  </p>
                )}
              </div>
            ))}
          </div>

          {editing && (
            <div className="flex gap-2 pt-1">
              <button
                onClick={saveEdit}
                className="flex items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                <Save className="w-3.5 h-3.5" /> Save
              </button>
              <button
                onClick={() => setEditing(false)}
                className="flex items-center gap-1.5 border border-border px-4 py-2 rounded-lg text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <X className="w-3.5 h-3.5" /> Cancel
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function BrainReview() {
  const { extractedItems } = useBrain();
  const [filter, setFilter] = useState<"all" | ExtractedItemStatus>("all");

  const visible = filter === "all" ? extractedItems : extractedItems.filter((i) => i.status === filter);

  const counts = {
    all: extractedItems.length,
    pending: extractedItems.filter((i) => i.status === "pending").length,
    approved: extractedItems.filter((i) => i.status === "approved").length,
    archived: extractedItems.filter((i) => i.status === "archived").length,
  };

  return (
    <BrainLayout>
      <div className="space-y-5">
        <div>
          <h2 className="text-2xl font-serif font-bold text-primary mb-1">
            Review Extracted Content
          </h2>
          <p className="text-sm text-muted-foreground">
            Approve, edit, archive or delete content extracted from uploaded materials.
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {(["all", "pending", "approved", "archived"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                filter === s
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-muted-foreground border-card-border hover:border-primary hover:text-primary"
              }`}
            >
              {s === "all" ? "All" : STATUS_LABELS[s]}{" "}
              <span className="opacity-70">({counts[s]})</span>
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <div className="bg-white rounded-2xl border border-card-border shadow-sm p-10 text-center">
            <p className="text-muted-foreground text-sm">No items to display.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {visible.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </BrainLayout>
  );
}
