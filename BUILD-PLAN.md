# Bangladesh Bank AD (ICT) — Written Prep Site

**Build plan and living context document.**
Any session picking this project up should read this file first, then `SYLLABUS.md`, then
continue from the first unchecked item in the Timeline.

---

## 1. Goal

A static, offline-capable study website covering every subject that appears in the
Bangladesh Bank Assistant Director (ICT) written exam, containing:

1. **Notes** — exam-oriented, per subject, dense enough to revise from without a textbook.
2. **Solved past questions** — real previous-year questions worked out step by step.
3. **New practice questions** — original questions written in the same style and difficulty
   as the previous-year papers, each with a full worked solution.

Answer style is modelled on the supplied *Cloud IT Solution* written solutions: numbered
steps, explicit given-data blocks, formula → substitution → result, and a stated final
answer. See §6.

---

## 2. Decisions already locked

| Decision | Value |
|---|---|
| Target exam | Bangladesh Bank AD (ICT). Content also serves Combined Bank Officer (IT). |
| Depth | Balanced — full notes + ~10 solved questions per subject. |
| Coverage | Exhaustive. No important topic omitted from any subject. See `SYLLABUS.md`. |
| Structure | Multi-page folder site, shared CSS + JS. No build step, no framework. |
| Language | English only. |
| Palette | `#ffefb3` (cream) and `#013e37` (deep teal). No third hue. |
| Typography | Claude font stack, Google-hosted fallback. See §5. |
| Motion | Smooth transitions throughout, gated on `prefers-reduced-motion`. |
| Delivery | Phased, 4 phases. See §7. |

---

## 3. Source materials

| File | Status | Use |
|---|---|---|
| `probable topics.pdf` | Read | Subject taxonomy and topic checklist. Fully transcribed into `SYLLABUS.md`. |
| `written solution .pdf` | Read | Answer-style reference. Contains BB AD (ICT) 07/02/2025 and Combined Officer (IT) 04/10/2024 with full solutions. |
| `previous it question.pdf` | **Blocked** | Raw previous-year question papers. |
| `previous it question1.pdf` / `2.pdf` | **Blocked** | Split attempt 1. |
| `previous it question1 (1).pdf` / `2 (1).pdf` | **Blocked** | Split attempt 2. |

### Known blocker — disk space

The PDF renderer writes temporary page images to local disk and fails with
`pdftoppm failed` when the drive is near full. The Linux sandbox fails to boot for the same
reason (`Not enough disk space to set up the workspace`). Splitting the PDF and re-uploading
did not help across two attempts, which confirms the cause is free space rather than file
size or file corruption.

**Effect on the build:** none of the phases below are blocked. The past-paper questions the
solution PDF already exposes are enough to seed style and difficulty, and `SYLLABUS.md` is
derived from the topics list rather than the papers. When space is freed, re-read the
question PDFs and fold the additional questions into `past-papers.html` and the matching
subject pages — this is additive, no rework.

**Consequence if never unblocked:** Phase 4's past-paper page covers 2 papers instead of the
full set. Everything else is unaffected.

---

## 4. Subjects

18 subjects. 16 carried from `probable topics.pdf`, 2 added, 1 renamed.

**The full topic inventory lives in `SYLLABUS.md`** — several hundred topics, grouped by
sub-area, with carried topics separated from added ones and high-frequency items flagged
`⚑`. That file is the acceptance checklist: a subject page is not done until every bullet
under its heading is covered.

| # | Subject | Origin |
|---|---|---|
| 1 | Computer Fundamentals | carried |
| 2 | C Programming | carried |
| 3 | Data Structures | carried |
| 4 | Algorithms | carried |
| 5 | Database | carried |
| 6 | OOP (Java) | carried |
| 7 | Data Communication and Networking | carried |
| 8 | Computer Architecture | carried |
| 9 | Telecommunication | carried |
| 10 | Circuit Analysis | carried |
| 11 | Operating System | carried |
| 12 | Discrete Math and Quantitative | carried, **renamed** |
| 13 | Software Engineering | carried |
| 14 | Security | carried |
| 15 | Other Topics | carried |
| 16 | Banking ICT and Bangladesh Context | **added** |
| 17 | Emerging Technology and Cloud | **added** |
| 18 | Focus Writing | carried |

**Why the two additions.** Banking ICT covers BACH, BEFTN, RTGS, NPSB, SWIFT, ISO 8583,
MFS, PCI-DSS and the Bangladesh Bank ICT Security Guideline — heavily represented in this
specific exam and entirely absent from the source list. Emerging Technology and Cloud was
scattered across "Other Topics" as one-liners but now appears as full questions.

**Why the rename.** The 04/10/2024 paper asked a two-dice probability question that has no
home under a pure "Discrete Math" label; the renamed subject absorbs probability and
quantitative aptitude.

---

## 5. Design system

### 5.1 Colour

Only two source colours. Everything else is a tint or shade of them — no third hue.

```css
--ink:        #013e37;   /* primary surface, headings, text on cream        */
--cream:      #ffefb3;   /* page background, text on ink                    */
--ink-900:    #012b26;   /* deeper shade — headers, footer                  */
--ink-700:    #02564c;   /* hover state on ink surfaces                     */
--ink-500:    #0a7d6f;   /* mid-teal — links, accents, progress bar fill    */
--cream-300:  #fff7dd;   /* raised cards on cream                           */
--cream-600:  #f0dc95;   /* borders and hairlines on cream                  */
--focus:      #013e37;   /* focus ring, 2px offset                          */
```

Contrast: `#013e37` on `#ffefb3` and the reverse both clear WCAG AA comfortably, so both
directions are safe for body text.

### 5.2 Typography

```css
--font-sans: "Styrene B", "Styrene A", "Inter", ui-sans-serif, system-ui, sans-serif;
--font-serif: "Tiempos Text", "Copernicus", "Lora", Georgia, serif;
--font-mono: "Berkeley Mono", "JetBrains Mono", ui-monospace, monospace;
```

Claude's own faces are named first, so the site renders in the true Claude font on machines
that have them and falls back to a close Google-hosted match everywhere else. Inter and Lora
load from `fonts.googleapis.com`; if the file is opened fully offline the system stack takes
over and the layout must not shift — test this.

Serif is reserved for page titles and pull quotes. Body and all UI are sans. Code, formulas
and truth tables are mono.

### 5.3 Motion

Every transition wrapped in `@media (prefers-reduced-motion: no-preference)`.

- Page enter: 240 ms opacity and 8 px translate-Y.
- Section reveal on scroll: `IntersectionObserver`, staggered 60 ms.
- Solution accordions: animated `grid-template-rows` 0fr → 1fr, 280 ms, plus chevron rotate.
- Card hover: 2 px lift, border darken, 160 ms.
- Sidebar active-item indicator slides between entries.
- Syllabus progress bars animate width on first reveal.

### 5.4 Page template contract

Every page under `subjects/` shares the same skeleton so pages stay interchangeable:

```
<header>            site title, search box, progress summary
<nav aria-label>    sidebar — all 18 subjects, current one marked aria-current="page"
<main>
  <h1>              subject name
  <section#notes>       Notes
  <section#solved>      Solved past questions
  <section#practice>    New practice questions
<footer>            prev / next subject links
```

Rules: relative links only (must work from `file://`), no inline `<style>` beyond one-off
diagram sizing, every accordion has real keyboard support, and every page registers its
headings in `js/search-index.js`.

### 5.5 File tree

```
bb-ict-prep/
  BUILD-PLAN.md           this file
  CONTENT-STYLE.md        how notes are written — read before any subject page
  SYLLABUS.md             full topic inventory and acceptance checklist
  README.md               written in Phase 4 — how to open and navigate
  index.html              hub: subject grid, coverage map, search, progress
  past-papers.html        the real papers, solved end to end
  css/style.css
  js/app.js
  js/search-index.js
  subjects/*.html         18 pages
```

---

## 6. Content conventions

> **Read [`CONTENT-STYLE.md`](CONTENT-STYLE.md) before writing any subject page.** It
> defines how notes are written — the five-move spine (ground it → show one concrete thing
> → demonstrate the mechanism → say why it works → recap), the component vocabulary, and
> the acceptance gate that rejects any topic which only states rules. It exists because
> Phase 1's notes were first written as lookup cards and had to be rewritten from scratch;
> the rules below cover *questions and answers*, that file covers *notes*.

Derived from the supplied written-solution sample so the site reads like the book the exam
is prepared from.

**Questions.** Numbered. Where a past question is reproduced, tag it with the paper and date,
for example *(BB AD ICT, 07/02/2025)*. New questions are tagged *(practice)* and must be
plausible as an exam question — same command verbs, same marks weight, no trick framing.

**Answers.** Follow the sample's shape:

1. Restate what is being asked in one line where the question is long.
2. **Given data** block for any numerical question — every quantity with units, converted
   into base units up front.
3. Numbered steps. Formula stated, then substitution, then result. Units carried throughout.
4. Diagrams for heaps, trees, use cases, network topologies and datapaths — inline SVG, using
   the two palette colours only.
5. Tables for truth tables, Banker's algorithm matrices, page-replacement traces, scheduling
   Gantt charts.
6. A bold **final answer** line closing every numerical question.

**Coverage rule.** Every `⚑` item in `SYLLABUS.md` needs a fully worked example on its page,
not just a definition. Non-flagged items need at least a definition and, where they are
comparative, a table.

**Code.** C and Java both appear in past papers. Code blocks are complete and compilable,
commented in the sample's style, with expected output shown beneath.

**Verification rule.** Every numerical answer is recomputed independently in Phase 4 before
the site is called done. The sample PDF itself contains at least one arithmetic slip
(a router-delay figure that does not reconcile with the stated RTT), so inherited numbers
are not trusted — they are recomputed.

---

## 7. Timeline

Each phase ends in a reviewable state: the site opens and works, just with fewer subjects
filled in. Nothing is left half-rendered between phases.

### Phase 1 — Shell and core subjects
> The four highest-yield subjects, plus every piece of shared infrastructure.

- [x] `css/style.css` — tokens, typography, layout, components, motion, print styles
- [x] `js/app.js` — search, accordions, scroll reveal, progress, sidebar state
- [x] `js/search-index.js` — schema defined, seeded with Phase 1 pages (137 entries)
- [x] `index.html` — subject grid, syllabus coverage map, search, resume-where-you-left-off
- [x] `subjects/data-structures.html` — 15 topics, 10 solved, 10 practice
- [x] `subjects/algorithms.html` — 10 topics, 10 solved, 10 practice
- [x] `subjects/operating-system.html` — 13 topics, 10 solved, 10 practice
- [x] `subjects/networking.html` — 14 topics, 10 solved, 10 practice

**Done when:** the site opens from `file://`, all four pages render, search finds content
across them, accordions animate, reduced-motion is honoured, and every `⚑` item in those
four `SYLLABUS.md` sections has a worked example.

**Status: complete.** Verified by rendering every page in headless Chrome — no console
errors, no unbalanced tags, no duplicate ids, 0 broken links, and all 137 search-index
anchors resolve.

### Phase 1 addenda — conventions established here, carry them into Phase 2

1. **Question tagging is honest.** Only questions actually recoverable from the supplied
   solution PDF carry a paper citation (`chip--past`). Everything else is tagged
   `standard repeat` or `practice`. No question anywhere carries an invented attribution.
   Where a confirmed past question's numeric data could not be recovered — the
   Dhaka–Rangpur latency question — the answer says so explicitly and states the figures
   it substitutes. Keep this rule.
2. **Worked answers use `.walk` / `.steps` + `.calc`.** A step separates *what we are
   doing* from *formula → substitution → result*. `.formula` is reserved for aligned
   multi-line derivations. Do not go back to bare monospace blobs for arithmetic.
3. **Three bugs found by rendering, not by reading.** Recorded so they are not
   reintroduced: `.formula` is a `<span>` and needs `white-space: pre` or every
   derivation collapses to one line; the global `strong { color: ink }` rule makes bold
   text invisible on every ink-backed surface; and scroll-reveal must never be applied to
   `.qa` question cards, because they are deep-linked from search and would land the user
   on a blank page.
4. **Default table headers are quiet.** `.table--strong` is the opt-in dark header, used
   only for the one or two tables per page that carry the answer. A page of dark header
   bars reads as noise.
5. **Notes must teach, not list.** The single most important lesson of Phase 1. The notes
   were first written as lookup cards — every demonstration lived in the *solved* section,
   so the notes taught nothing and the reader had to reverse-engineer understanding out of
   the answers. All 52 topics were rewritten. The standard is now
   [`CONTENT-STYLE.md`](CONTENT-STYLE.md); **read it before writing any Phase 2 page.**

### Phase 2 — Programming and systems
> **Before writing anything: read `CONTENT-STYLE.md`.** Every page below must pass its
> acceptance gate (zero `states-only` topics) before it is ticked.

- [x] `subjects/computer-fundamentals.html`
- [x] `subjects/c-programming.html`
- [x] `subjects/database.html`
- [x] `subjects/oop-java.html`
- [x] `subjects/computer-architecture.html`
- [x] Extend `search-index.js`

**Done when:** 9 of 18 subjects complete and indexed; index page coverage map reflects it,
and the `CONTENT-STYLE.md` gate reports `PASS` for all five new pages.

### Phase 3 — Theory, domain and writing
> Same rule: `CONTENT-STYLE.md` first, gate must pass before ticking.

- [x] `subjects/telecommunication.html`
- [x] `subjects/circuit-analysis.html`
- [x] `subjects/discrete-math.html`
- [x] `subjects/software-engineering.html`
- [x] `subjects/security.html`
- [x] `subjects/other-topics.html`
- [x] `subjects/banking-ict.html`
- [x] `subjects/emerging-tech.html`
- [x] `subjects/focus-writing.html`
- [x] Extend `search-index.js`
- [x] Update all Phase 1+2 sidebars to active links

**Done when:** all 18 subjects complete, every sidebar link resolves, prev/next chain
closes, and the `CONTENT-STYLE.md` gate reports `PASS` for all 18 pages.

### Phase 4 — Past papers, search, verification
- [ ] `past-papers.html` — BB AD (ICT) 07/02/2025 and Combined Officer (IT) 04/10/2024,
      solved end to end, cross-linked to the relevant subject sections
- [ ] Fold in the blocked question PDFs if disk space has been freed by this point
- [ ] Final `search-index.js` pass across every heading on every page
- [ ] **Coverage audit** — walk `SYLLABUS.md` top to bottom, tick the tracking table, and
      fix any bullet that has no corresponding content
- [ ] **Verification sweep** — recompute every numerical answer; check every internal link;
      keyboard-test every accordion; confirm reduced-motion; confirm offline rendering
- [ ] **Content-style gate** — run the audit in `CONTENT-STYLE.md` §5 across all 18 pages;
      it must report `PASS` on every one
- [ ] `README.md` for the user explaining how to open and navigate the site

**Done when:** the coverage audit and verification sweep both pass with no open defects.

---

## 8. Open items

| # | Item | Owner | Status |
|---|---|---|---|
| 1 | Question PDFs unreadable pending free disk space | user | Open, non-blocking |
| 2 | Confirm whether Styrene/Tiempos are installed locally, else fallback is what ships | user | Open, cosmetic |

---

## 9. Change log

| Date | Change |
|---|---|
| 2026-08-06 | Initial plan. Scope, 18-subject taxonomy, design system, 4-phase timeline. |
| 2026-08-06 | Topic coverage expanded to exhaustive and moved into `SYLLABUS.md`. §4 reduced to a subject index. Added coverage rule to §6 and a coverage audit to Phase 4. |
| 2026-08-11 | **Phase 1 delivered.** Shared CSS/JS/index plus Data Structures, Algorithms, Operating System and Networking — 52 note topics, 40 solved and 40 practice questions, 120 inline SVG diagrams. Search index seeded with 137 entries. |
| 2026-08-11 | Design system revised after review: added `.walk` step-with-rail, `.calc` formula/substitution/result block, `.insight`, `.termgrid` and per-page `.topics` index; softened default table headers; unified `.steps` with `.walk`. Fixed three rendering bugs (see Phase 1 addenda §3). |
| 2026-08-12 | **Notes rewritten to teach.** User review found the notes were lookup cards, not preparation material — an audit confirmed 42 of 52 topics stated rules with no worked demonstration. All 52 rewritten to the five-move spine: every topic now demonstrates its mechanism on a running example. Gate now reports 0 states-only on all four pages (was 42). Standard written down in `CONTENT-STYLE.md` and referenced from §6 and the Phase 2/3/4 checklists so later phases follow it. |
