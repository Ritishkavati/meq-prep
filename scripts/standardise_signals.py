#!/usr/bin/env python3
"""
Standardise s1-s6 signal fields in finalEliteMEQBank.ts.

Rewrites for every s1-s6 signal:
  - s1 name  → natural clinical language using the clueInStem
  - whyItMatters → starts with "Missing this signal means the candidate has..."
  - modelWording → starts with action verb, case-specific via name + clueInStem

Does NOT touch: ids, questionNumber, stems, clueInStem, s7, modelAnswer,
                priorityOrder, totalMarks, keywords, category, severity.
"""
import re, sys

FILEPATH = 'artifacts/meq-prep/src/lib/questions/finalEliteMEQBank.ts'

# ── Template generators ──────────────────────────────────────────────────────

def new_why(sig_id: str, name: str, clue: str) -> str:
    if sig_id == 's1':
        return (
            f"Missing this signal means the candidate has allowed \"{clue}\" to "
            f"substitute for clinical risk formulation and produced a disposition "
            f"that is neither safe nor defensible."
        )
    if sig_id == 's2':
        return (
            f"Missing this signal means the candidate has produced a generic "
            f"formulation without identifying {name} as the specific clinical pivot "
            f"that determines risk, capacity, and safe disposition in this case."
        )
    if sig_id == 's3':
        return (
            f"Missing this signal means the candidate has named a legal or policy "
            f"pathway without demonstrating how {name} applies to this patient and "
            f"what it specifically authorises or constrains."
        )
    if sig_id == 's4':
        return (
            f"Missing this signal means the candidate has focused only on the "
            f"identified patient and overlooked {name}, who face foreseeable harm "
            f"that demands an independent clinical and legal response."
        )
    if sig_id == 's5':
        return (
            f"Missing this signal means the candidate has produced a disposition "
            f"that ignores {name}, making the safety plan unrealistic or unsafe "
            f"for this specific patient in this context."
        )
    if sig_id == 's6':
        return (
            f"Missing this signal means the candidate has reached a clinical "
            f"decision without providing the documentation, legal reasoning, and "
            f"accountability trail that makes {name} defensible under review."
        )
    return ''


def new_model(sig_id: str, name: str, clue: str) -> str:
    if sig_id == 's1':
        return (
            f"Recognise that \"{clue}\" is a system or role pressure rather than "
            f"evidence of clinical safety, and require explicit risk formulation "
            f"before any disposition decision is reached or communicated."
        )
    if sig_id == 's2':
        return (
            f"Formulate {name} by treating \"{clue}\" as the pivotal clinical "
            f"signal and linking it to risk, capacity, treatment, and a "
            f"defensible disposition."
        )
    if sig_id == 's3':
        return (
            f"Clarify whether {name} applies to this situation, identify the "
            f"correct legal threshold and authority, and document the least "
            f"restrictive lawful pathway and the rationale for choosing it."
        )
    if sig_id == 's4':
        return (
            f"Identify {name} as an independent duty-of-care priority, act on "
            f"\"{clue}\", and document a safety plan that does not depend solely "
            f"on the primary patient's cooperation."
        )
    if sig_id == 's5':
        return (
            f"Address {name} directly, clarifying how it shapes realistic "
            f"engagement and safety planning without allowing it to override "
            f"clinical judgment about patient safety."
        )
    if sig_id == 's6':
        return (
            f"Document {name} comprehensively, recording the risks weighed, "
            f"the legal basis applied, alternatives rejected, and the escalation "
            f"plan that makes the disposition defensible."
        )
    return ''


def new_s1_name(old_name: str, clue: str) -> str:
    clue_s = clue.rstrip('.!?').strip()
    if len(clue_s) > 80:
        clue_s = clue_s[:77] + '...'
    return (
        f"Accepting \"{clue_s}\" as grounds to proceed "
        f"without formulating the core clinical risk"
    )


def escape_json(s: str) -> str:
    """Escape a plain Python string for embedding in a JSON double-quoted value."""
    return s.replace('\\', '\\\\').replace('"', '\\"')


# ── Pass 1: collect signal data per question ─────────────────────────────────

with open(FILEPATH, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# q_data[qid][sid] = {'name': str, 'clue': str}
q_data: dict = {}
cur_q: str | None = None
cur_sig: str | None = None
in_ma = False  # inside modelAnswer backtick literal

for raw_line in lines:
    raw = raw_line.rstrip('\n')

    # ── modelAnswer backtick literal tracking ──
    if not in_ma:
        if '"modelAnswer"' in raw and '`' in raw:
            in_ma = True
            if raw.count('`') >= 2:   # opens and closes on same line
                in_ma = False
            continue
    else:
        if '`' in raw:                # closing backtick (at end of last content line)
            in_ma = False
        continue

    # ── question id ──
    qm = re.search(r'"id":\s*"(FINAL-\d+)"', raw)
    if qm:
        cur_q = qm.group(1)
        q_data.setdefault(cur_q, {})
        cur_sig = None
        continue

    # ── signal id ──
    sm = re.search(r'"id":\s*"(s\d+)"', raw)
    if sm and cur_q:
        cur_sig = sm.group(1)
        q_data[cur_q].setdefault(cur_sig, {'name': None, 'clue': None})
        continue

    # ── collect name + clueInStem for s1-s6 ──
    if cur_q and cur_sig and cur_sig not in ('s7',):
        nm = re.match(r'\s*"name":\s*"((?:[^"\\]|\\.)*)"', raw)
        if nm and q_data[cur_q][cur_sig]['name'] is None:
            q_data[cur_q][cur_sig]['name'] = nm.group(1)

        cm = re.match(r'\s*"clueInStem":\s*"((?:[^"\\]|\\.)*)"', raw)
        if cm:
            q_data[cur_q][cur_sig]['clue'] = cm.group(1)

print(f"Pass 1: {len(q_data)} questions collected")

# Warn about any gaps
missing = [
    (q, s, d)
    for q, sigs in q_data.items()
    for s, d in sigs.items()
    if s != 's7' and (d['name'] is None or d['clue'] is None)
]
if missing:
    print(f"WARNING — {len(missing)} signal(s) with incomplete data:")
    for q, s, d in missing[:20]:
        print(f"  {q} {s}  name={d['name']!r}  clue={d['clue']!r}")
else:
    print("All signals have name + clue — proceeding to rewrite.")


# ── Pass 2: rewrite ──────────────────────────────────────────────────────────

S1_TO_S6 = ('s1', 's2', 's3', 's4', 's5', 's6')

out = []
cur_q = None
cur_sig = None
in_ma = False
counts = {'name': 0, 'why': 0, 'model': 0, 'skipped_no_data': 0}

for raw_line in lines:
    raw = raw_line.rstrip('\n')

    # ── modelAnswer backtick literal tracking ──
    if not in_ma:
        if '"modelAnswer"' in raw and '`' in raw:
            in_ma = True
            out.append(raw_line)
            if raw.count('`') >= 2:
                in_ma = False
            continue
    else:
        out.append(raw_line)
        if '`' in raw:
            in_ma = False
        continue

    # ── question id ──
    qm = re.search(r'"id":\s*"(FINAL-\d+)"', raw)
    if qm:
        cur_q = qm.group(1)
        cur_sig = None
        out.append(raw_line)
        continue

    # ── signal id ──
    sm = re.search(r'"id":\s*"(s\d+)"', raw)
    if sm and cur_q:
        cur_sig = sm.group(1)
        out.append(raw_line)
        continue

    # ── only modify s1-s6 ──
    if cur_q and cur_sig and cur_sig in S1_TO_S6:
        sd = q_data.get(cur_q, {}).get(cur_sig, {})
        name: str = sd.get('name') or ''
        clue: str = sd.get('clue') or ''

        if name and clue:
            # ── s1 name rewrite ──
            if cur_sig == 's1':
                nm_m = re.match(r'^(\s*)"name":\s*"((?:[^"\\]|\\.)*)"(,?)$', raw)
                if nm_m:
                    indent, comma = nm_m.group(1), nm_m.group(3)
                    new_n = escape_json(new_s1_name(name, clue))
                    out.append(f'{indent}"name": "{new_n}"{comma}\n')
                    counts['name'] += 1
                    continue

            # ── whyItMatters rewrite ──
            why_m = re.match(r'^(\s*)"whyItMatters":\s*"((?:[^"\\]|\\.)*)"(,?)$', raw)
            if why_m:
                indent, comma = why_m.group(1), why_m.group(3)
                new_w = escape_json(new_why(cur_sig, name, clue))
                out.append(f'{indent}"whyItMatters": "{new_w}"{comma}\n')
                counts['why'] += 1
                continue

            # ── modelWording rewrite ──
            mdl_m = re.match(r'^(\s*)"modelWording":\s*"((?:[^"\\]|\\.)*)"(,?)$', raw)
            if mdl_m:
                indent, comma = mdl_m.group(1), mdl_m.group(3)
                new_m = escape_json(new_model(cur_sig, name, clue))
                out.append(f'{indent}"modelWording": "{new_m}"{comma}\n')
                counts['model'] += 1
                continue
        else:
            counts['skipped_no_data'] += 1

    out.append(raw_line)

with open(FILEPATH, 'w', encoding='utf-8') as f:
    f.writelines(out)

print(f"\nPass 2 complete:")
print(f"  s1 names rewritten : {counts['name']}  (expected 110)")
print(f"  whyItMatters       : {counts['why']}  (expected 660)")
print(f"  modelWording       : {counts['model']}  (expected 660)")
print(f"  skipped (no data)  : {counts['skipped_no_data']}")
total = counts['name'] + counts['why'] + counts['model']
print(f"  Total changes      : {total}")
