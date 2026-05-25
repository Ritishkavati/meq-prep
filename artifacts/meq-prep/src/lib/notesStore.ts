const key = (suffix: string, candidateId: string) =>
  `notes_${suffix}_${candidateId}`;

// ── Types ──────────────────────────────────────────────────────────────

export interface SectionProgress {
  completed: boolean;
  lastViewedAt: string;
}

export interface PersonalNote {
  content: string;
  updatedAt: string;
}

// key format: `${noteId}_${sectionId}_${keyPointIndex}` → true/false
export type HighlightMap = Record<string, boolean>;
// key format: `${noteId}_${sectionId}`
export type ProgressMap = Record<string, SectionProgress>;
export type PersonalNoteMap = Record<string, PersonalNote>;

// ── Progress ───────────────────────────────────────────────────────────

export function getProgress(candidateId: string): ProgressMap {
  try {
    const raw = localStorage.getItem(key("progress", candidateId));
    return raw ? (JSON.parse(raw) as ProgressMap) : {};
  } catch {
    return {};
  }
}

export function setProgress(candidateId: string, map: ProgressMap): void {
  try {
    localStorage.setItem(key("progress", candidateId), JSON.stringify(map));
  } catch {}
}

export function toggleSectionComplete(
  candidateId: string,
  sectionKey: string,
  current: ProgressMap,
): ProgressMap {
  const was = current[sectionKey]?.completed ?? false;
  const next: ProgressMap = {
    ...current,
    [sectionKey]: { completed: !was, lastViewedAt: new Date().toISOString() },
  };
  setProgress(candidateId, next);
  return next;
}

export function touchSection(
  candidateId: string,
  sectionKey: string,
  current: ProgressMap,
): ProgressMap {
  const prev = current[sectionKey];
  if (prev) return current;
  const next: ProgressMap = {
    ...current,
    [sectionKey]: { completed: false, lastViewedAt: new Date().toISOString() },
  };
  setProgress(candidateId, next);
  return next;
}

// ── Personal Notes ─────────────────────────────────────────────────────

export function getPersonalNotes(candidateId: string): PersonalNoteMap {
  try {
    const raw = localStorage.getItem(key("personal", candidateId));
    return raw ? (JSON.parse(raw) as PersonalNoteMap) : {};
  } catch {
    return {};
  }
}

export function savePersonalNote(
  candidateId: string,
  sectionKey: string,
  content: string,
  current: PersonalNoteMap,
): PersonalNoteMap {
  const next: PersonalNoteMap = {
    ...current,
    [sectionKey]: { content, updatedAt: new Date().toISOString() },
  };
  try {
    localStorage.setItem(key("personal", candidateId), JSON.stringify(next));
  } catch {}
  return next;
}

// ── Highlights ─────────────────────────────────────────────────────────

export function getHighlights(candidateId: string): HighlightMap {
  try {
    const raw = localStorage.getItem(key("highlights", candidateId));
    return raw ? (JSON.parse(raw) as HighlightMap) : {};
  } catch {
    return {};
  }
}

export function toggleHighlight(
  candidateId: string,
  highlightKey: string,
  current: HighlightMap,
): HighlightMap {
  const next: HighlightMap = { ...current, [highlightKey]: !current[highlightKey] };
  try {
    localStorage.setItem(key("highlights", candidateId), JSON.stringify(next));
  } catch {}
  return next;
}

// ── Helper: section storage key ────────────────────────────────────────

export function sectionKey(noteId: string, sectionId: string): string {
  return `${noteId}_${sectionId}`;
}

export function highlightKey(noteId: string, sectionId: string, idx: number): string {
  return `${noteId}_${sectionId}_${idx}`;
}

// ── Last viewed ────────────────────────────────────────────────────────

export function saveLastViewed(candidateId: string, noteId: string): void {
  try {
    localStorage.setItem(
      key("last_viewed", candidateId),
      JSON.stringify({ noteId, at: new Date().toISOString() }),
    );
  } catch {}
}

export function getLastViewed(candidateId: string): { noteId: string; at: string } | null {
  try {
    const raw = localStorage.getItem(key("last_viewed", candidateId));
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

// ── Formatting ─────────────────────────────────────────────────────────

export function formatTimestamp(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
