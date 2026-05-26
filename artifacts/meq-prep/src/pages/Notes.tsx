import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "wouter";
import {
  ChevronDown,
  ChevronRight,
  CheckCircle,
  BookOpen,
  ArrowLeft,
  Star,
  FileText,
  AlertTriangle,
  Lightbulb,
  Menu,
  X,
  PenLine,
  Clock,
  BarChart3,
} from "lucide-react";
import { useCandidate } from "@/lib/store";
import { ALL_NOTES } from "@/lib/notesData";
import type { Note, NoteSection, ColorTag } from "@/lib/notesData";
import {
  getProgress,
  getPersonalNotes,
  getHighlights,
  toggleSectionComplete,
  savePersonalNote,
  toggleHighlight,
  saveLastViewed,
  formatTimestamp,
  sectionKey,
  highlightKey,
} from "@/lib/notesStore";
import type { ProgressMap, PersonalNoteMap, HighlightMap } from "@/lib/notesStore";
import { loadTextHLs, saveTextHLs } from "@/lib/textHighlightStore";
import type { TextHL } from "@/lib/textHighlightStore";

// ── Colour system ────────────────────────────────────────────────────────────

const COLOR: Record<
  ColorTag,
  {
    headerBg: string;
    headerBorder: string;
    heading: string;
    badge: string;
    navDot: string;
    navActiveBg: string;
    navActiveBorder: string;
    navActiveText: string;
  }
> = {
  green: {
    headerBg: "bg-green-50",
    headerBorder: "border-green-200",
    heading: "text-green-900",
    badge: "bg-green-100 text-green-700",
    navDot: "bg-green-400",
    navActiveBg: "bg-green-50",
    navActiveBorder: "border-green-500",
    navActiveText: "text-green-800",
  },
  blue: {
    headerBg: "bg-blue-50",
    headerBorder: "border-blue-200",
    heading: "text-blue-900",
    badge: "bg-blue-100 text-blue-700",
    navDot: "bg-blue-400",
    navActiveBg: "bg-blue-50",
    navActiveBorder: "border-blue-500",
    navActiveText: "text-blue-800",
  },
  amber: {
    headerBg: "bg-amber-50",
    headerBorder: "border-amber-200",
    heading: "text-amber-900",
    badge: "bg-amber-100 text-amber-700",
    navDot: "bg-amber-400",
    navActiveBg: "bg-amber-50",
    navActiveBorder: "border-amber-500",
    navActiveText: "text-amber-800",
  },
  red: {
    headerBg: "bg-red-50",
    headerBorder: "border-red-200",
    heading: "text-red-900",
    badge: "bg-red-100 text-red-700",
    navDot: "bg-red-400",
    navActiveBg: "bg-red-50",
    navActiveBorder: "border-red-500",
    navActiveText: "text-red-800",
  },
  purple: {
    headerBg: "bg-purple-50",
    headerBorder: "border-purple-200",
    heading: "text-purple-900",
    badge: "bg-purple-100 text-purple-700",
    navDot: "bg-purple-400",
    navActiveBg: "bg-purple-50",
    navActiveBorder: "border-purple-500",
    navActiveText: "text-purple-800",
  },
  teal: {
    headerBg: "bg-teal-50",
    headerBorder: "border-teal-200",
    heading: "text-teal-900",
    badge: "bg-teal-100 text-teal-700",
    navDot: "bg-teal-400",
    navActiveBg: "bg-teal-50",
    navActiveBorder: "border-teal-500",
    navActiveText: "text-teal-800",
  },
  navy: {
    headerBg: "bg-slate-100",
    headerBorder: "border-slate-300",
    heading: "text-slate-900",
    badge: "bg-slate-200 text-slate-700",
    navDot: "bg-slate-400",
    navActiveBg: "bg-slate-50",
    navActiveBorder: "border-slate-500",
    navActiveText: "text-slate-800",
  },
};

const TAG_LABEL: Record<ColorTag, string> = {
  green: "Clinical Process",
  blue: "Clinical Reasoning",
  amber: "Caution",
  red: "Risk",
  purple: "Legal / Governance",
  teal: "Community / MDT",
  navy: "Framework",
};

// ── Text highlight helpers ────────────────────────────────────────────────────

const HL_STYLE: Record<TextHL["color"], React.CSSProperties> = {
  yellow:    { backgroundColor: "#fef08a", borderRadius: "2px", padding: "0 1px" },
  green:     { backgroundColor: "#bbf7d0", borderRadius: "2px", padding: "0 1px" },
  blue:      { backgroundColor: "#bfdbfe", borderRadius: "2px", padding: "0 1px" },
  pink:      { backgroundColor: "#fbcfe8", borderRadius: "2px", padding: "0 1px" },
  underline: { textDecoration: "underline 2px solid #475569", borderRadius: "2px", padding: "0 1px" },
};

function HighlightedText({ text, highlights }: { text: string; highlights: TextHL[] }) {
  if (!highlights.length) return <>{text}</>;

  type Range = { start: number; end: number; hl: TextHL };
  const ranges: Range[] = [];

  for (const hl of highlights) {
    let idx = 0;
    while (idx < text.length) {
      const pos = text.indexOf(hl.text, idx);
      if (pos === -1) break;
      ranges.push({ start: pos, end: pos + hl.text.length, hl });
      idx = pos + hl.text.length;
    }
  }

  if (!ranges.length) return <>{text}</>;
  ranges.sort((a, b) => a.start - b.start);

  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  for (const r of ranges) {
    if (r.start < cursor) continue;
    if (r.start > cursor) nodes.push(text.slice(cursor, r.start));
    nodes.push(
      <mark key={`${r.hl.id}-${r.start}`} style={HL_STYLE[r.hl.color]}>
        {text.slice(r.start, r.end)}
      </mark>,
    );
    cursor = r.end;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return <>{nodes}</>;
}

// ── Floating highlight toolbar ────────────────────────────────────────────────

interface ToolbarState {
  x: number;
  y: number;
  text: string;
}

const HL_OPTS: { color: TextHL["color"]; bg: string; label: string }[] = [
  { color: "yellow",    bg: "#fef08a", label: "Yellow" },
  { color: "green",     bg: "#bbf7d0", label: "Green" },
  { color: "blue",      bg: "#bfdbfe", label: "Blue" },
  { color: "pink",      bg: "#fbcfe8", label: "Pink" },
  { color: "underline", bg: "transparent", label: "Underline" },
];

function FloatingHighlightToolbar({
  toolbar,
  onApply,
  onClear,
}: {
  toolbar: ToolbarState;
  onApply: (color: TextHL["color"]) => void;
  onClear: () => void;
}) {
  const toolbarWidth = 228;
  const left = Math.min(Math.max(toolbar.x - toolbarWidth / 2, 8), window.innerWidth - toolbarWidth - 8);
  const top = toolbar.y - 52;

  return (
    <div
      id="hl-toolbar"
      style={{ position: "fixed", left, top, zIndex: 9999, width: toolbarWidth }}
      className="bg-white rounded-xl shadow-xl border border-slate-200 px-2 py-1.5 flex items-center gap-1"
      onMouseDown={(e) => e.preventDefault()}
    >
      <span className="text-[10px] text-slate-400 font-medium pr-1 shrink-0">Highlight</span>
      {HL_OPTS.map((opt) => (
        <button
          key={opt.color}
          title={opt.label}
          onClick={() => onApply(opt.color)}
          className="w-6 h-6 rounded-full border border-slate-300 hover:scale-110 transition-transform flex items-center justify-center shrink-0"
          style={{ backgroundColor: opt.bg }}
        >
          {opt.color === "underline" && (
            <span className="text-[9px] font-bold text-slate-600 underline leading-none">U</span>
          )}
        </button>
      ))}
      <div className="w-px h-4 bg-slate-200 mx-0.5 shrink-0" />
      <button
        title="Remove all highlights on this text"
        onClick={onClear}
        className="w-6 h-6 rounded-full bg-slate-100 hover:bg-red-100 border border-slate-200 hover:border-red-300 flex items-center justify-center transition-colors shrink-0"
      >
        <X className="w-3 h-3 text-slate-400 hover:text-red-500" />
      </button>
    </div>
  );
}

// ── Watermark ────────────────────────────────────────────────────────────────

function Watermark({ candidateId }: { candidateId: string }) {
  const text = `${candidateId} — CONFIDENTIAL — ${candidateId}`;
  const items = Array.from({ length: 40 });
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-[150]"
      aria-hidden="true"
    >
      {items.map((_, i) => {
        const row = Math.floor(i / 5);
        const col = i % 5;
        return (
          <span
            key={i}
            style={{
              position: "absolute",
              top: `${row * 12 + 4}%`,
              left: `${col * 22 - 5}%`,
              transform: "rotate(-35deg)",
              opacity: 0.035,
              fontSize: "11px",
              whiteSpace: "nowrap",
              color: "#1e2a4a",
              fontFamily: "monospace",
              letterSpacing: "0.05em",
            }}
          >
            {text}
          </span>
        );
      })}
    </div>
  );
}

// ── Left nav item ────────────────────────────────────────────────────────────

interface NavItemProps {
  section: NoteSection;
  isActive: boolean;
  isCompleted: boolean;
  hasNotes: boolean;
  hasHighlights: boolean;
  onClick: () => void;
}

function NavItem({ section, isActive, isCompleted, hasNotes, hasHighlights, onClick }: NavItemProps) {
  const c = COLOR[section.colorTag];
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2.5 rounded-lg border-l-4 transition-all text-xs leading-tight mb-0.5 ${
        isActive
          ? `${c.navActiveBg} ${c.navActiveBorder} ${c.navActiveText} font-semibold`
          : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-800"
      }`}
    >
      <div className="flex items-center gap-1.5 mb-0.5">
        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${c.navDot}`} />
        <span className="text-[10px] font-bold opacity-60 uppercase tracking-wide">
          {section.order}
        </span>
        {isCompleted && <CheckCircle className="w-3 h-3 text-green-500 ml-auto shrink-0" />}
        {!isCompleted && (hasNotes || hasHighlights) && (
          <span className="ml-auto flex gap-0.5 shrink-0">
            {hasNotes && <PenLine className="w-3 h-3 text-blue-400" />}
            {hasHighlights && <Star className="w-3 h-3 text-yellow-400" />}
          </span>
        )}
      </div>
      <span className="line-clamp-2">{section.title}</span>
    </button>
  );
}

// ── Key point row ────────────────────────────────────────────────────────────

interface KeyPointRowProps {
  point: string;
  isHighlighted: boolean;
  textHighlights: TextHL[];
  onToggle: () => void;
}

function KeyPointRow({ point, isHighlighted, textHighlights, onToggle }: KeyPointRowProps) {
  return (
    <div
      className={`flex items-start gap-2 px-3 py-2.5 rounded-lg border transition-colors ${
        isHighlighted
          ? "bg-yellow-50 border-yellow-300"
          : "bg-slate-50 border-transparent hover:border-slate-200"
      }`}
    >
      <span className="text-accent mt-0.5 shrink-0 text-sm font-bold">→</span>
      <span className="text-sm text-slate-700 flex-1 leading-snug">
        <HighlightedText text={point} highlights={textHighlights} />
      </span>
      <button
        onMouseDown={(e) => e.preventDefault()}
        onClick={onToggle}
        title={isHighlighted ? "Remove highlight" : "Highlight this point"}
        className={`shrink-0 mt-0.5 transition-colors ${
          isHighlighted ? "text-yellow-500 hover:text-yellow-600" : "text-slate-300 hover:text-yellow-400"
        }`}
      >
        <Star className="w-3.5 h-3.5" fill={isHighlighted ? "currentColor" : "none"} />
      </button>
    </div>
  );
}

// ── Section card ─────────────────────────────────────────────────────────────

interface SectionCardProps {
  section: NoteSection;
  noteId: string;
  candidateId: string;
  isExpanded: boolean;
  isActive: boolean;
  isCompleted: boolean;
  hasPersonalNote: boolean;
  highlights: HighlightMap;
  textHighlights: TextHL[];
  onToggleExpand: () => void;
  onToggleComplete: () => void;
  onToggleHighlight: (idx: number) => void;
  onFocus: () => void;
}

function SectionCard({
  section,
  noteId,
  isExpanded,
  isActive,
  isCompleted,
  hasPersonalNote,
  highlights,
  textHighlights,
  onToggleExpand,
  onToggleComplete,
  onToggleHighlight,
  onFocus,
}: SectionCardProps) {
  const c = COLOR[section.colorTag];

  const sectionHighlightsCount = section.keyPoints.filter((_, idx) =>
    highlights[highlightKey(noteId, section.id, idx)],
  ).length;

  return (
    <div
      id={`section-${section.id}`}
      className={`mb-5 rounded-2xl border overflow-hidden shadow-sm transition-shadow ${
        isActive ? "shadow-md" : ""
      }`}
      onClick={onFocus}
    >
      {/* Coloured header */}
      <button
        className={`w-full text-left ${c.headerBg} border-b ${c.headerBorder} px-5 py-4`}
        onClick={onToggleExpand}
      >
        <div className="flex items-start gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${c.badge}`}
              >
                {TAG_LABEL[section.colorTag]}
              </span>
              {isCompleted && (
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                  <CheckCircle className="w-2.5 h-2.5" /> Completed
                </span>
              )}
              {sectionHighlightsCount > 0 && (
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded-full">
                  <Star className="w-2.5 h-2.5" fill="currentColor" /> {sectionHighlightsCount} highlighted
                </span>
              )}
              {hasPersonalNote && (
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                  <PenLine className="w-2.5 h-2.5" /> Notes added
                </span>
              )}
            </div>
            <h2 className={`text-base font-bold ${c.heading} leading-snug`}>
              {section.order}. {section.title}
            </h2>
          </div>
          {isExpanded ? (
            <ChevronDown className={`w-5 h-5 mt-1 shrink-0 ${c.heading} opacity-60`} />
          ) : (
            <ChevronRight className={`w-5 h-5 mt-1 shrink-0 ${c.heading} opacity-60`} />
          )}
        </div>
      </button>

      {/* Collapsible body */}
      {isExpanded && (
        <div className="bg-white px-5 py-5">
          {/* Explanation */}
          <p className="text-sm text-slate-700 leading-relaxed mb-5">
            <HighlightedText text={section.explanation} highlights={textHighlights} />
          </p>

          {/* Examples */}
          {section.examples && section.examples.length > 0 && (
            <div className="mb-5 bg-slate-50 border border-slate-200 rounded-xl p-4">
              <div className="flex items-center gap-1.5 mb-2">
                <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Examples</span>
              </div>
              <ul className="space-y-1.5">
                {section.examples.map((ex, i) => (
                  <li key={i} className="text-sm text-slate-600 leading-relaxed">
                    {ex.startsWith("'") ? (
                      <blockquote className="border-l-4 border-slate-300 pl-3 italic text-slate-700">
                        <HighlightedText text={ex} highlights={textHighlights} />
                      </blockquote>
                    ) : (
                      <span>• <HighlightedText text={ex} highlights={textHighlights} /></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key points */}
          <div className="mb-5">
            <div className="flex items-center gap-1.5 mb-2.5">
              <Lightbulb className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                Key Clinical Points
              </span>
              <span className="text-[10px] text-slate-400 ml-1">(click ★ to highlight)</span>
            </div>
            <div className="space-y-1.5">
              {section.keyPoints.map((point, idx) => (
                <KeyPointRow
                  key={idx}
                  point={point}
                  isHighlighted={!!highlights[highlightKey(noteId, section.id, idx)]}
                  textHighlights={textHighlights}
                  onToggle={() => onToggleHighlight(idx)}
                />
              ))}
            </div>
          </div>

          {/* MEQ application box */}
          {section.meqApplication && (
            <div className="mb-4 bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center gap-1.5 mb-2">
                <FileText className="w-3.5 h-3.5 text-green-600" />
                <span className="text-xs font-bold text-green-700 uppercase tracking-wide">
                  Use This in MEQs
                </span>
              </div>
              <p className="text-sm text-green-800 leading-relaxed">
                <HighlightedText text={section.meqApplication} highlights={textHighlights} />
              </p>
            </div>
          )}

          {/* Common trap */}
          {section.commonTrap && (
            <div className="mb-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-center gap-1.5 mb-2">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wide">
                  Common Trap
                </span>
              </div>
              <p className="text-sm text-amber-800 leading-relaxed">
                <HighlightedText text={section.commonTrap} highlights={textHighlights} />
              </p>
            </div>
          )}

          {/* Mark complete */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
            <button
              onMouseDown={(e) => e.preventDefault()}
              onClick={onToggleComplete}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border transition-colors ${
                isCompleted
                  ? "bg-green-100 border-green-300 text-green-700"
                  : "bg-white border-slate-200 text-slate-600 hover:border-green-300 hover:text-green-700"
              }`}
            >
              <CheckCircle className="w-4 h-4" />
              {isCompleted ? "Completed ✓" : "Mark as complete"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── My Notes panel ───────────────────────────────────────────────────────────

interface MyNotesPanelProps {
  candidateId: string;
  noteId: string;
  activeSectionId: string;
  sections: NoteSection[];
  personalNotes: PersonalNoteMap;
  onNotesChange: (sectionId: string, content: string) => void;
  onJumpToSection: (sectionId: string) => void;
}

function MyNotesPanel({
  candidateId,
  noteId,
  activeSectionId,
  sections,
  personalNotes,
  onNotesChange,
  onJumpToSection,
}: MyNotesPanelProps) {
  const sk = sectionKey(noteId, activeSectionId);
  const activeNote = personalNotes[sk];
  const activeSection = sections.find((s) => s.id === activeSectionId);
  const [saveIndicator, setSaveIndicator] = useState<"idle" | "saving" | "saved">("idle");
  const saveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onNotesChange(activeSectionId, e.target.value);
    setSaveIndicator("saving");
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => setSaveIndicator("saved"), 700);
  };

  const sectionsWithNotes = sections.filter((s) => {
    const k = sectionKey(noteId, s.id);
    return personalNotes[k]?.content?.trim();
  });

  return (
    <div className="flex flex-col h-full">
      {/* Panel header */}
      <div className="px-4 pt-4 pb-3 border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-2 mb-1">
          <PenLine className="w-4 h-4 text-primary" />
          <h3 className="text-sm font-bold text-primary">My Notes</h3>
        </div>
        {activeSection && (
          <p className="text-[11px] text-muted-foreground truncate">{activeSection.title}</p>
        )}
      </div>

      {/* Textarea */}
      <div className="px-4 py-3 shrink-0">
        <textarea
          value={activeNote?.content ?? ""}
          onChange={handleChange}
          placeholder="Add your notes for this section..."
          rows={7}
          className="w-full text-xs text-slate-700 placeholder-slate-400 border border-slate-200 rounded-lg p-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent leading-relaxed"
          style={{ userSelect: "text" }}
        />
        <div className="flex items-center justify-between mt-1.5">
          {saveIndicator === "saving" && (
            <span className="text-[10px] text-slate-400">Saving…</span>
          )}
          {saveIndicator === "saved" && (
            <span className="text-[10px] text-green-500">Saved ✓</span>
          )}
          {saveIndicator === "idle" && activeNote?.updatedAt && (
            <span className="text-[10px] text-slate-400 flex items-center gap-1">
              <Clock className="w-2.5 h-2.5" /> {formatTimestamp(activeNote.updatedAt)}
            </span>
          )}
          {saveIndicator === "idle" && !activeNote?.updatedAt && (
            <span className="text-[10px] text-slate-300">Auto-saves as you type</span>
          )}
        </div>
      </div>

      {/* Notes in other sections */}
      {sectionsWithNotes.length > 0 && (
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          <div className="border-t border-slate-100 pt-3">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-2">
              Notes in other sections
            </p>
            <div className="space-y-1.5">
              {sectionsWithNotes
                .filter((s) => s.id !== activeSectionId)
                .map((s) => {
                  const k = sectionKey(noteId, s.id);
                  const n = personalNotes[k];
                  const c = COLOR[s.colorTag];
                  return (
                    <button
                      key={s.id}
                      onClick={() => onJumpToSection(s.id)}
                      className="w-full text-left p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className={`w-1.5 h-1.5 rounded-full ${c.navDot}`} />
                        <span className="text-[10px] font-semibold text-slate-600 line-clamp-1">
                          {s.order}. {s.title}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed">
                        {n?.content}
                      </p>
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Per-note stats helper ─────────────────────────────────────────────────────

function getNoteStats(candidateId: string, note: Note) {
  const progress = getProgress(candidateId);
  const personalNotes = getPersonalNotes(candidateId);
  const highlights = getHighlights(candidateId);
  const completedCount = note.sections.filter(
    (s) => progress[sectionKey(note.id, s.id)]?.completed,
  ).length;
  const notesCount = note.sections.filter((s) =>
    personalNotes[sectionKey(note.id, s.id)]?.content?.trim(),
  ).length;
  const highlightsCount = note.sections.reduce((acc, s) => {
    return (
      acc +
      s.keyPoints.filter((_, idx) => highlights[highlightKey(note.id, s.id, idx)]).length
    );
  }, 0);
  return {
    completedCount,
    notesCount,
    highlightsCount,
    totalSections: note.sections.length,
    progressPct: Math.round((completedCount / note.sections.length) * 100),
  };
}

// ── Note dashboard card ───────────────────────────────────────────────────────

const CHAPTER_TITLES: Record<string, string> = {
  confidentiality: "Confidentiality, Privacy & Information Sharing",
  capacity_consent: "Capacity, Consent & Treatment Refusal",
  open_disclosure: "Open Disclosure",
  incident_management: "Incident Management",
  complaint_process: "Complaint Process",
  conflict_management: "Conflict Resolution – Dynamics in Mental Health",
  restrictive_practices: "Restrictive Practices – 1",
  restrictive_practices_meq: "Restrictive Practices – 2",
  discharge_plan: "Comprehensive Psychiatry Discharge Plan",
  clinical_audit: "Clinical Audit, Quality Improvement & Change Management",
  supervision_training: "Supervision & Training – Trainee Governance",
  whs_staff_safety: "Staff Safety in Psychiatry",
  cultural_safety: "Cultural Safety & Supervision",
  resource_allocation_ethics: "Resource Allocation & Ethics in Psychiatry",
  research_governance: "Research & Audit Governance",
  ethics_overriding_principles: "Ethics in Psychiatry: Overriding Principles & MEQ Framework",
};

function NoteCard({
  note,
  index,
  candidateId,
  onClick,
}: {
  note: Note;
  index: number;
  candidateId: string;
  onClick: () => void;
}) {
  const { completedCount, notesCount, highlightsCount, totalSections, progressPct } =
    getNoteStats(candidateId, note);
  const accent = COLOR[note.sections[0].colorTag];
  const chapterTitle = CHAPTER_TITLES[note.id] ?? note.title;

  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white rounded-xl border border-slate-200 shadow-sm px-5 py-4 hover:shadow-md hover:border-accent transition-all group flex items-center gap-4"
    >
      <span
        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold ${accent.headerBg} ${accent.heading} border ${accent.headerBorder}`}
      >
        {index + 1}
      </span>
      <span className="flex-1 min-w-0 text-sm font-semibold text-primary group-hover:text-accent transition-colors leading-snug">
        {chapterTitle}
      </span>
      <div className="flex items-center gap-2 shrink-0">
        {progressPct > 0 && (
          <span className="text-[10px] text-slate-400">{progressPct}%</span>
        )}
        {notesCount > 0 && <PenLine className="w-3 h-3 text-blue-400" />}
        {highlightsCount > 0 && <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />}
        {completedCount === totalSections && totalSections > 0 && (
          <CheckCircle className="w-3.5 h-3.5 text-green-500" />
        )}
      </div>
      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-accent shrink-0 transition-colors" />
    </button>
  );
}

// ── Notes dashboard ───────────────────────────────────────────────────────────

function NotesDashboard({
  candidateId,
  onSelectNote,
  onBack,
}: {
  candidateId: string;
  onSelectNote: (noteId: string) => void;
  onBack: () => void;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="sticky top-0 z-30 bg-primary text-white shadow-md">
        <div className="px-4 py-3 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1.5 rounded-lg hover:bg-white/20 transition-colors shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-sm font-bold leading-tight">Study Notes</h1>
            <p className="text-[11px] text-white/60">RANZCP MEQ Preparation</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-serif font-bold text-primary mb-1">Study Notes</h2>
        </div>

        <div className="space-y-2">
          {ALL_NOTES.map((note, index) => (
            <NoteCard
              key={note.id}
              note={note}
              index={index}
              candidateId={candidateId}
              onClick={() => onSelectNote(note.id)}
            />
          ))}
        </div>

        <div className="mt-10 text-center text-xs text-slate-300">
          {candidateId} — Educational preparation tool only
        </div>
      </div>
    </div>
  );
}

// ── Main page ────────────────────────────────────────────────────────────────

export default function Notes() {
  const { candidateNumber } = useCandidate();
  const [, setLocation] = useLocation();
  const candidateId = candidateNumber || "unknown";

  // Which note is open (null = dashboard)
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
  const note = ALL_NOTES.find((n) => n.id === selectedNoteId) ?? ALL_NOTES[0];

  const [progress, setProgressState] = useState<ProgressMap>(() =>
    getProgress(candidateId),
  );
  const [personalNotes, setPersonalNotesState] = useState<PersonalNoteMap>(() =>
    getPersonalNotes(candidateId),
  );
  const [highlights, setHighlightsState] = useState<HighlightMap>(() =>
    getHighlights(candidateId),
  );

  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set([note.sections[0].id]),
  );
  const [activeSectionId, setActiveSectionId] = useState<string>(note.sections[0].id);
  const [isBlurred, setIsBlurred] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [showMobileNotes, setShowMobileNotes] = useState(false);

  // Text highlight state
  const [textHLsByNote, setTextHLsByNote] = useState<Record<string, TextHL[]>>(() =>
    loadTextHLs(candidateId),
  );
  const [toolbar, setToolbar] = useState<ToolbarState | null>(null);
  const readingAreaRef = useRef<HTMLDivElement>(null);

  const noteSaveTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Redirect if not registered
  useEffect(() => {
    if (!candidateNumber) setLocation("/");
  }, [candidateNumber, setLocation]);

  // Reset viewer state when switching notes
  useEffect(() => {
    if (selectedNoteId) {
      const n = ALL_NOTES.find((nn) => nn.id === selectedNoteId);
      if (n) {
        setExpandedSections(new Set([n.sections[0].id]));
        setActiveSectionId(n.sections[0].id);
        setShowMobileNav(false);
        setShowMobileNotes(false);
        // Re-read localStorage for fresh state
        setProgressState(getProgress(candidateId));
        setPersonalNotesState(getPersonalNotes(candidateId));
        setHighlightsState(getHighlights(candidateId));
      }
    }
  }, [selectedNoteId, candidateId]);

  // Save last viewed
  useEffect(() => {
    if (selectedNoteId) saveLastViewed(candidateId, note.id);
  }, [candidateId, note.id, selectedNoteId]);

  // Tab blur — 3-second grace period before activating overlay
  useEffect(() => {
    let blurTimer: ReturnType<typeof setTimeout> | null = null;
    const handler = () => {
      if (document.hidden) {
        blurTimer = setTimeout(() => setIsBlurred(true), 3000);
      } else {
        if (blurTimer !== null) {
          clearTimeout(blurTimer);
          blurTimer = null;
        }
        setIsBlurred(false);
      }
    };
    document.addEventListener("visibilitychange", handler);
    return () => {
      document.removeEventListener("visibilitychange", handler);
      if (blurTimer !== null) clearTimeout(blurTimer);
    };
  }, []);

  // IntersectionObserver: track active section as user scrolls
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    note.sections.forEach((s) => {
      const el = document.getElementById(`section-${s.id}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSectionId(s.id);
        },
        { threshold: 0.25, rootMargin: "-10% 0px -60% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [expandedSections]);

  // ── Handlers (must be before any early return — Rules of Hooks) ─────────

  const handleToggleExpand = useCallback((sectionId: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) next.delete(sectionId);
      else next.add(sectionId);
      return next;
    });
    setActiveSectionId(sectionId);
  }, []);

  const handleToggleComplete = useCallback(
    (sectionId: string) => {
      const sk = sectionKey(note.id, sectionId);
      setProgressState((prev) => toggleSectionComplete(candidateId, sk, prev));
    },
    [candidateId, note.id],
  );

  const handleToggleHighlight = useCallback(
    (sectionId: string, idx: number) => {
      const hk = highlightKey(note.id, sectionId, idx);
      setHighlightsState((prev) => toggleHighlight(candidateId, hk, prev));
    },
    [candidateId, note.id],
  );

  const handlePersonalNoteChange = useCallback(
    (sectionId: string, content: string) => {
      const sk = sectionKey(note.id, sectionId);
      clearTimeout(noteSaveTimers.current[sectionId]);
      noteSaveTimers.current[sectionId] = setTimeout(() => {
        setPersonalNotesState((prev) => savePersonalNote(candidateId, sk, content, prev));
      }, 500);
      setPersonalNotesState((prev) => ({
        ...prev,
        [sk]: { content, updatedAt: new Date().toISOString() },
      }));
    },
    [candidateId, note.id],
  );

  const handleJumpToSection = useCallback((sectionId: string) => {
    setActiveSectionId(sectionId);
    setExpandedSections((prev) => new Set([...prev, sectionId]));
    setShowMobileNav(false);
    setShowMobileNotes(false);
    setTimeout(() => {
      const el = document.getElementById(`section-${sectionId}`);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  const handleNavClick = useCallback(
    (sectionId: string) => {
      handleJumpToSection(sectionId);
    },
    [handleJumpToSection],
  );

  const preventCopy = useCallback((e: React.ClipboardEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "TEXTAREA" || target.tagName === "INPUT") return;
    e.preventDefault();
  }, []);

  const preventContextMenu = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "TEXTAREA" || target.tagName === "INPUT") return;
    e.preventDefault();
  }, []);

  // ── Text highlight handlers ──────────────────────────────────────────────

  const handleReadingMouseUp = useCallback(() => {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !sel.toString().trim()) return;
    if (!readingAreaRef.current?.contains(sel.anchorNode)) {
      setToolbar(null);
      return;
    }
    const range = sel.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    setToolbar({
      x: rect.left + rect.width / 2,
      y: rect.top,
      text: sel.toString().trim(),
    });
  }, []);

  const handleAddHL = useCallback(
    (color: TextHL["color"]) => {
      if (!toolbar) return;
      const hl: TextHL = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        text: toolbar.text,
        color,
      };
      setTextHLsByNote((prev) => {
        const existing = prev[note.id] || [];
        if (existing.some((h) => h.text === hl.text && h.color === hl.color)) return prev;
        const next = { ...prev, [note.id]: [...existing, hl] };
        saveTextHLs(candidateId, next);
        return next;
      });
      setToolbar(null);
      window.getSelection()?.removeAllRanges();
    },
    [toolbar, note.id, candidateId],
  );

  const handleClearHL = useCallback(() => {
    if (!toolbar) return;
    const selText = toolbar.text;
    setTextHLsByNote((prev) => {
      const next = {
        ...prev,
        [note.id]: (prev[note.id] || []).filter((h) => h.text !== selText),
      };
      saveTextHLs(candidateId, next);
      return next;
    });
    setToolbar(null);
    window.getSelection()?.removeAllRanges();
  }, [toolbar, note.id, candidateId]);

  // Close toolbar when clicking outside it
  useEffect(() => {
    if (!toolbar) return;
    const handler = (e: MouseEvent) => {
      const el = document.getElementById("hl-toolbar");
      if (el && !el.contains(e.target as Node)) setToolbar(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [toolbar]);

  // ── Dashboard early return (now truly after all hooks) ───────────────────

  if (!selectedNoteId) {
    return (
      <NotesDashboard
        candidateId={candidateId}
        onSelectNote={setSelectedNoteId}
        onBack={() => setLocation("/phases")}
      />
    );
  }

  // ── Computed stats ──────────────────────────────────────────────────────

  const completedCount = note.sections.filter(
    (s) => progress[sectionKey(note.id, s.id)]?.completed,
  ).length;
  const totalSections = note.sections.length;
  const progressPct = Math.round((completedCount / totalSections) * 100);
  const notesCount = note.sections.filter((s) => {
    const k = sectionKey(note.id, s.id);
    return personalNotes[k]?.content?.trim();
  }).length;
  const highlightsCount = Object.values(highlights).filter(Boolean).length;

  // ── Left nav ────────────────────────────────────────────────────────────

  const NavContent = (
    <div className="py-3 px-2">
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide px-2 mb-2">
        {completedCount}/{totalSections} sections
      </p>
      {note.sections.map((s) => {
        const sk = sectionKey(note.id, s.id);
        const isCompleted = !!progress[sk]?.completed;
        const hasNotes = !!personalNotes[sk]?.content?.trim();
        const hasHighlightsForSection = s.keyPoints.some(
          (_, idx) => !!highlights[highlightKey(note.id, s.id, idx)],
        );
        return (
          <NavItem
            key={s.id}
            section={s}
            isActive={activeSectionId === s.id}
            isCompleted={isCompleted}
            hasNotes={hasNotes}
            hasHighlights={hasHighlightsForSection}
            onClick={() => handleNavClick(s.id)}
          />
        );
      })}
    </div>
  );

  return (
    <>
      {/* Print blocking */}
      <style>{`
        @media print {
          body > * { display: none !important; }
          .print-message { display: flex !important; }
        }
        .no-select { user-select: none; -webkit-user-select: none; }
      `}</style>

      {/* Print message (only visible when printing) */}
      <div
        className="print-message hidden fixed inset-0 items-center justify-center bg-white z-[999]"
        style={{ display: "none" }}
      >
        <p className="text-lg font-bold text-slate-700">
          Printing is disabled for this content.
        </p>
      </div>

      <div
        className="min-h-screen bg-slate-50 relative"
        onContextMenu={preventContextMenu}
        onCopy={preventCopy}
        onDragStart={(e) => {
          const target = e.target as HTMLElement;
          if (target.tagName !== "TEXTAREA" && target.tagName !== "INPUT") e.preventDefault();
        }}
      >
        {/* Watermark */}
        <Watermark candidateId={candidateId} />

        {/* Tab-blur overlay */}
        {isBlurred && (
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center"
            style={{ backdropFilter: "blur(12px)", backgroundColor: "rgba(255,255,255,0.85)" }}
          >
            <div className="text-center">
              <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <p className="text-base font-semibold text-slate-600">Return to this tab to continue reading.</p>
              <p className="text-sm text-slate-400 mt-1">{candidateId}</p>
            </div>
          </div>
        )}

        {/* Sticky header */}
        <div className="sticky top-0 z-30 bg-primary text-white shadow-md">
          <div className="px-4 py-3 flex items-center gap-3">
            <button
              onClick={() => setSelectedNoteId(null)}
              className="p-1.5 rounded-lg hover:bg-white/20 transition-colors shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Mobile nav toggle */}
            <button
              className="md:hidden p-1.5 rounded-lg hover:bg-white/20 transition-colors shrink-0"
              onClick={() => {
                setShowMobileNav((v) => !v);
                setShowMobileNotes(false);
              }}
            >
              <Menu className="w-4 h-4" />
            </button>

            <div className="flex-1 min-w-0">
              <h1 className="text-sm font-bold truncate leading-tight">{note.title}</h1>
              <div className="flex items-center gap-3 mt-0.5">
                {/* Progress bar */}
                <div className="flex items-center gap-1.5">
                  <div className="w-24 h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                  <span className="text-[11px] text-white/80">{progressPct}%</span>
                </div>
                <span className="text-white/40 hidden sm:inline">·</span>
                <span className="text-[11px] text-white/70 hidden sm:inline">
                  <PenLine className="w-3 h-3 inline mr-0.5" />
                  {notesCount} notes
                </span>
                <span className="text-white/40 hidden sm:inline">·</span>
                <span className="text-[11px] text-white/70 hidden sm:inline">
                  <Star className="w-3 h-3 inline mr-0.5" />
                  {highlightsCount} highlighted
                </span>
              </div>
            </div>

            {/* Mobile notes toggle */}
            <button
              className="lg:hidden p-1.5 rounded-lg hover:bg-white/20 transition-colors shrink-0"
              onClick={() => {
                setShowMobileNotes((v) => !v);
                setShowMobileNav(false);
              }}
            >
              <PenLine className="w-4 h-4" />
            </button>
          </div>

          {/* Progress stat bar */}
          <div className="px-4 pb-2.5 flex items-center gap-4 text-[11px] text-white/60">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> {completedCount} of {totalSections} completed
            </span>
            <span className="flex items-center gap-1">
              <BarChart3 className="w-3 h-3" /> {note.category}
            </span>
          </div>
        </div>

        {/* Mobile nav drawer */}
        {showMobileNav && (
          <div className="md:hidden fixed inset-0 z-40 flex">
            <div
              className="absolute inset-0 bg-black/30"
              onClick={() => setShowMobileNav(false)}
            />
            <div className="relative w-72 bg-white shadow-xl overflow-y-auto">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                <h3 className="text-sm font-bold text-primary">Sections</h3>
                <button onClick={() => setShowMobileNav(false)}>
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              </div>
              {NavContent}
            </div>
          </div>
        )}

        {/* Mobile notes drawer */}
        {showMobileNotes && (
          <div className="lg:hidden fixed inset-0 z-40 flex justify-end">
            <div
              className="absolute inset-0 bg-black/30"
              onClick={() => setShowMobileNotes(false)}
            />
            <div className="relative w-80 bg-white shadow-xl overflow-y-auto">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                <h3 className="text-sm font-bold text-primary">My Notes</h3>
                <button onClick={() => setShowMobileNotes(false)}>
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              </div>
              <MyNotesPanel
                candidateId={candidateId}
                noteId={note.id}
                activeSectionId={activeSectionId}
                sections={note.sections}
                personalNotes={personalNotes}
                onNotesChange={handlePersonalNoteChange}
                onJumpToSection={(id) => {
                  handleJumpToSection(id);
                  setShowMobileNotes(false);
                }}
              />
            </div>
          </div>
        )}

        {/* 3-column layout */}
        <div className="flex max-w-[1400px] mx-auto">
          {/* Left nav — desktop only */}
          <div className="hidden md:block w-56 lg:w-60 shrink-0 sticky top-[88px] h-[calc(100vh-88px)] overflow-y-auto border-r border-slate-200 bg-white">
            {NavContent}
          </div>

          {/* Main content */}
          <div
            className="flex-1 min-w-0 p-4 md:p-6"
            ref={(el) => {
              sectionRefs.current["root"] = el;
              (readingAreaRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
            }}
            onMouseUp={handleReadingMouseUp}
          >
            {/* Note intro card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 mb-6">
              <h2 className="text-xl font-serif font-bold text-primary mb-1">{note.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{note.description}</p>
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                <span className="bg-slate-100 px-2.5 py-1 rounded-full">{note.category}</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-full">
                  {totalSections} sections
                </span>
                <span className="bg-green-50 text-green-700 px-2.5 py-1 rounded-full">
                  {progressPct}% complete
                </span>
              </div>
            </div>

            {/* Section cards */}
            {note.sections.map((section) => {
              const sk = sectionKey(note.id, section.id);
              return (
                <SectionCard
                  key={section.id}
                  section={section}
                  noteId={note.id}
                  candidateId={candidateId}
                  isExpanded={expandedSections.has(section.id)}
                  isActive={activeSectionId === section.id}
                  isCompleted={!!progress[sk]?.completed}
                  hasPersonalNote={!!personalNotes[sk]?.content?.trim()}
                  highlights={highlights}
                  textHighlights={textHLsByNote[note.id] || []}
                  onToggleExpand={() => handleToggleExpand(section.id)}
                  onToggleComplete={() => handleToggleComplete(section.id)}
                  onToggleHighlight={(idx) => handleToggleHighlight(section.id, idx)}
                  onFocus={() => setActiveSectionId(section.id)}
                />
              );
            })}

            {/* Completion banner */}
            {completedCount === totalSections && (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center mb-6">
                <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-2" />
                <h3 className="text-base font-bold text-green-800 mb-1">
                  All sections completed
                </h3>
                <p className="text-sm text-green-700">
                  You have worked through all {totalSections} sections of this note. Review your
                  highlights and personal notes to consolidate your learning.
                </p>
              </div>
            )}

            <div className="pb-12 text-center text-xs text-slate-300">
              {candidateId} — Educational preparation tool only
            </div>
          </div>

          {/* Right panel — desktop only */}
          <div className="hidden lg:block w-72 xl:w-80 shrink-0 sticky top-[88px] h-[calc(100vh-88px)] overflow-y-auto border-l border-slate-200 bg-white">
            <MyNotesPanel
              candidateId={candidateId}
              noteId={note.id}
              activeSectionId={activeSectionId}
              sections={note.sections}
              personalNotes={personalNotes}
              onNotesChange={handlePersonalNoteChange}
              onJumpToSection={handleJumpToSection}
            />
          </div>
        </div>
      </div>

      {/* Floating text highlight toolbar */}
      {toolbar && (
        <FloatingHighlightToolbar
          toolbar={toolbar}
          onApply={handleAddHL}
          onClear={handleClearHL}
        />
      )}
    </>
  );
}
