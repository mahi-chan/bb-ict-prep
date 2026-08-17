# CONTENT-STYLE.md

How the notes on every `subjects/*.html` page are written. **Read this before writing a
single topic.** It exists because Phase 1's notes were first written as lookup cards —
rules, formulas and comparison tables aimed at someone who already knew the material — and
had to be rewritten from scratch. The audit that caught it is at the bottom of this file
and is the acceptance gate for every page from Phase 2 onward.

The reader is preparing for an exam they have not sat, from material they do not yet know.
They cannot use a reference card. They need to be taught.

---

## 1. The five-move spine

Every notes topic follows the same shape. Consistency of shape is what fixes "I don't know
what I'm reading."

| # | Move | What it does |
|---|------|--------------|
| 1 | **Ground it** | 2–4 plain sentences: what this is, what problem it solves. No jargon that has not been introduced. |
| 2 | **Show one concrete thing** | Introduce a specific example — a drawn tree, a table with real keys, an actual array, one process set. One example per topic, reused throughout it. |
| 3 | **Demonstrate the mechanism** | Walk the operation on that example, step by step, with the intermediate states visible. This is the move that gets skipped, and skipping it is the whole failure mode. |
| 4 | **Say why it works** | The insight the reader should leave with, in an `.insight` block. Not a restatement of the rule — the reason behind it. |
| 5 | **Recap compactly** | The comparison table, *after* the demonstration, where it is now earned rather than a substitute for teaching. Then traps in `.insight--trap`. |

---

## 2. Rules that follow from the spine

- **Never state a rule before the reader has seen the thing it applies to.** Build before
  you delete. Insert before you search. Draw before you formulate. The original `n-bst`
  explained the three deletion cases of a tree it had never built — that is the error.
- **One running example per topic.** The reader compares like with like instead of
  re-orienting at every heading. Phase 1 examples worth copying: one process set through
  five schedulers (`n-scheduling`), one reference string through three replacement
  algorithms (`n-virtual`), one request queue through six disk schedulers (`n-disk`), one
  key set through three collision-resolution schemes (`n-hashing`).
- **Every `⚑` topic in `SYLLABUS.md` contains at least one full trace** with intermediate
  states — not a worked answer hidden in the solved section, a trace in the *notes*.
- **A table is a recap, never an explanation.** If a table is the only content under a
  heading, that heading is unfinished.
- **Show the failure, not just the rule.** The demonstrations that land are the ones with a
  visible cost: key 30 paying 4 probes under linear probing and 1 under double hashing;
  FIFO taking *more* faults with *more* frames; P3 waiting 7 units for a 1-unit burst.
- **Prose is written to a person.** Avoid the formulaic `**Why it matters.**` /
  `**The rule to state.**` lead-in tic — it was the main symptom of the robotic feel.
- **State conventions where they change the answer.** Whether C-SCAN's return jump counts
  as head movement, whether an arriving process queues before a preempted one — say which
  you used. A marker can follow stated arithmetic; they cannot follow a silent assumption.

---

## 3. Component vocabulary

All defined in `css/style.css`. Use these rather than inventing markup.

| Component | Use for |
|---|---|
| `.walk` + `.walk__what` | Numbered step sequences. `.walk__what` names *what we are doing*; the `<p>` does it. Add `.walk--final` to the last `<li>`. |
| `.calc` / `.calc__row` | Arithmetic. `formula → substitution → result`, one row each. `.calc__row--result` for the answer, `.calc__row--note` for an aside, `.sub` to highlight a substituted value. |
| `.formula.formula--tight` | Aligned multi-line derivations and formula sets only. It is a `<span>` and relies on `white-space: pre`. |
| `.insight` | Move 4 — the reason behind the rule. |
| `.insight--trap` | The mistake this topic invites. |
| `.figure` + inline SVG | Diagrams. Palette colours only, via the `dg-*` classes. |
| `.code-block` + `.output` | Complete, compilable C/Java, with real output beneath. |
| `.table--strong` | Opt-in dark header. **One or two tables per page**, for the ones carrying the answer. A page of dark bars reads as noise. |
| `.cell-hit` / `.cell-miss` | Highlight the cell that carries the point — the anomalous fault count, the chosen item, the failing parity check. |

**SVG conventions.** `dg-node` (cream fill, ink stroke), `dg-node-solid` + `dg-text-on-ink`
for emphasis, `dg-stroke-ink` / `dg-stroke-mid` / `dg-stroke-dash` for lines, `dg-label` /
`dg-label-start` for annotations. Define one `<marker>` per figure with a unique `id`.
Give every `<svg>` a `role="img"` and a descriptive `aria-label`; the `<figcaption>` says
what to notice, not what it is.

**Gantt charts and timelines** are plain SVG: a row of `dg-node` rects plus an axis line
with `dg-label` ticks. See `n-scheduling` and `n-switching` for the pattern.

---

## 4. Carried over from Phase 1

1. **Question tagging is honest.** Only questions actually recoverable from the supplied
   solution PDF carry a paper citation (`chip--past`). Everything else is `standard repeat`
   or `practice`. No question anywhere carries an invented attribution. Where a confirmed
   past question's data could not be recovered, the answer says so and states what it
   substitutes.
2. **Three bugs that only a render catches.** `.formula` is a `<span>` and needs
   `white-space: pre` or every derivation collapses to one line. The global
   `strong { color: ink }` rule makes bold invisible on ink-backed surfaces — the
   `color: inherit` override list must be extended when a new ink surface is added.
   Scroll-reveal must never be applied to `.qa` cards, which are deep-linked from search.
3. **Verify every number independently.** Do not trust inherited figures — the source PDF
   contains at least one arithmetic slip. Every table in a trace must reconcile: page-fault
   counts must equal references minus hits; Gantt charts must end at the sum of the bursts;
   a banker's safety check must finish with Work equal to the resource totals.

---

## 5. Acceptance gate

A page is not done until this reports nothing. It flags any notes subsection with no
figure, no code block and no calculation — i.e. a topic that only states rules.

```bash
cd D:/it_prep/bb-ict-prep && python -c "
import re, os
for f in sorted(os.listdir('subjects')):
    if not f.endswith('.html'): continue
    t = open('subjects/'+f, encoding='utf-8').read()
    notes = t[t.index('id=\"notes\"'):t.index('id=\"solved\"')]
    bad = []
    for m in re.finditer(r'<div class=\"subsection\" id=\"(n-[^\"]+)\">(.*?)(?=<div class=\"subsection\"|\Z)', notes, re.S):
        b = m.group(2)
        if not (b.count('<figure') or b.count('code-block__label') or b.count('class=\"calc\"')):
            bad.append(m.group(1))
    print('%-28s states-only=%-3d %s' % (f, len(bad), ' '.join(bad) or 'PASS'))
"
```

Passing this is necessary, not sufficient — it cannot tell whether the demonstration
actually teaches. The real test is the one the script cannot run:

> **Read one rewritten topic cold and ask whether someone who did not already know the
> material could follow it.**

Also required before a page is called done:

- **Render it.** Headless Chrome, and *look at the result* —
  `chrome --headless --disable-gpu --screenshot=out.png --window-size=1500,3000 "file:///…"`.
  All three bugs in §4.2 were invisible to code review.
- **Structure.** Balanced tags, no duplicate `id`s, every `href="#…"` resolves, every asset
  path exists, zero `Uncaught`/`TypeError`/`ReferenceError` in the console.
- **Search index.** Every `js/search-index.js` anchor still resolves; add entries for new
  sub-headings worth finding.

---

## 6. Phase 1 reference pages

Read one before starting a new subject. Closest models by kind of material:

| If the subject is… | Read |
|---|---|
| Procedural, table-driven, examinable by calculation | `operating-system.html` — `n-scheduling`, `n-virtual`, `n-disk` |
| Formula-heavy with unit conversions | `networking.html` — `n-delay`, `n-physical`, `n-network-layer` |
| Structural, needing diagrams | `data-structures.html` — `n-bst`, `n-hashing`, `n-trees` |
| Technique-driven, needing worked tables | `algorithms.html` — `n-dp`, `n-greedy`, `n-recurrence` |
