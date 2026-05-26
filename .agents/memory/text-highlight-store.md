---
name: Text highlight store
description: How the free-form text selection highlight feature is stored and applied in MEQ Prep Notes.
---

## Rule
`src/lib/textHighlightStore.ts` stores `TextHL[]` per noteId in `localStorage` key `meq_thl_v1_{candidateId}`.
This is completely separate from the existing star-highlight system (`notesStore.ts` / `highlightKey`).

**Why:** Star highlights mark whole key-point rows. Text highlights mark arbitrary selected text spans across any content field (explanation, key points, MEQ application, common trap, examples).

**How to apply:**
- `HighlightedText` component finds text occurrences and wraps in `<mark>` with inline styles from `HL_STYLE`.
- `FloatingHighlightToolbar` appears on `mouseup` within the reading area ref.
- The main reading column has `no-select` removed so text is selectable; copy/paste protection via `onCopy`/`onContextMenu` on the outer wrapper is preserved.
