# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static, offline-capable study website for the Bangladesh Bank Assistant Director (ICT) written exam. 18 subjects, each with notes, solved past questions, and original practice questions. No build step, no framework — plain HTML/CSS/JS served from `file://`.

## Key documents

- `BUILD-PLAN.md` — scope, design system, 4-phase timeline, open items. Read first.
- `CONTENT-STYLE.md` — **how notes are written.** Read before writing any subject page. Defines the five-move spine (ground it → show one concrete thing → demonstrate the mechanism → say why it works → recap), the component vocabulary, and the acceptance gate that rejects any topic which only states rules. Notes that merely list rules are the one failure this project has already made and corrected.
- `SYLLABUS.md` — authoritative topic inventory. A subject page is not done until every bullet under its heading is covered. Items marked `⚑` need fully worked examples, not just definitions.

## File structure

```
index.html              subject grid, coverage map, search, resume state
past-papers.html        solved real papers, cross-linked to subjects
css/style.css           tokens, typography, layout, components, motion, print
js/app.js               search, accordions, scroll reveal, progress, sidebar
js/search-index.js      heading index across all pages
subjects/*.html         18 subject pages (one per subject)
```

## Design constraints

- **Two colours only**: `#013e37` (deep teal/ink) and `#ffefb3` (cream). All other tokens are tints/shades of these two. No third hue.
- **Font stack**: sans (Styrene → Inter → system), serif (Tiempos → Lora → Georgia), mono (Berkeley Mono → JetBrains Mono → system). Serif for page titles and pull quotes only.
- **Motion**: all transitions gated on `@media (prefers-reduced-motion: no-preference)`.
- **Offline**: relative links only, must work from `file://`. Google Fonts are a progressive enhancement — layout must not shift without them.
- **Accessibility**: WCAG AA contrast (both colour directions pass), real keyboard support on every accordion, aria-current on active sidebar item.

## Content conventions

- **Notes teach, they do not list.** Every notes topic demonstrates its mechanism on a running example with intermediate states shown — see `CONTENT-STYLE.md`. A topic with no figure, no code block and no calculation fails the acceptance gate.
- Past questions tagged with paper and date, e.g. *(BB AD ICT, 07/02/2025)*. New questions tagged *(practice)*. Never invent a paper citation.
- Numerical answers: given-data block → numbered steps → formula → substitution → result with units → bold **final answer** line.
- Diagrams: inline SVG using palette colours only.
- Code blocks (C and Java): complete, compilable, with expected output beneath.
- Every numerical answer must be independently verified — do not trust inherited figures.

## Page template

Every `subjects/*.html` page follows this skeleton:
```
<header>  site title, search, progress
<nav>     sidebar with all 18 subjects, aria-current="page" on current
<main>
  <h1>    subject name
  <section#notes>     Notes
  <section#solved>    Solved past questions
  <section#practice>  New practice questions
<footer>  prev/next subject links
```

## Phased delivery

| Phase | Content |
|-------|---------|
| 1 | Shared CSS/JS/index + Data Structures, Algorithms, OS, Networking |
| 2 | Computer Fundamentals, C Programming, Database, OOP Java, Computer Architecture |
| 3 | Remaining 9 subjects (Telecom, Circuits, Discrete Math, SE, Security, Other, Banking ICT, Emerging Tech, Focus Writing) |
| 4 | Past papers page, search index finalization, coverage audit, verification sweep, README |

Each phase ends in a working state — no half-rendered pages between phases.

## Known blockers

Question PDF files (`previous it question*.pdf`) are unreadable due to disk space constraints on the PDF renderer. This is non-blocking — syllabus is derived from `probable topics.pdf` (already transcribed), and the two solved papers provide style/difficulty reference.
