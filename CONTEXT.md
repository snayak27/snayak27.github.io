# Context — snayak27.github.io

> **This file is the shared "brain" for ALL AI assistants on this repo (Claude Code _and_ Antigravity).**
> It is git-tracked, so it travels with the repo and survives tool switches, fresh clones, and context resets.
> Both `CLAUDE.md` and `AGENTS.md` point here. **Read this first, every session. Update it before you stop.**

_Last synced: 2026-06-19 (IST) - Landing Page (index.html) Interactive Enhancements_

## Current Phase
Active Dev / Maintenance — content site is live on GitHub Pages; ongoing additions of project deep-dive pages and SEO/structured-data polish.

## Active Work
<!-- What is being built right now -->
- `index.html` Visual & Interactive Enhancements: added a visual dot grid, hover card glows, and custom scrollbar styles within current color palette. Integrated scroll-triggered count-up animation for stats. Implemented search/filter deck for project cards. Added hover connections between Skills Matrix and project card chips. Added Ecosystem nav links and fixed mobile menu divider borders.
- `computer-science/floors/` content enrichment & timeline sync: added 18 missing milestones to floor pages to match the timeline's density, synchronized milestone metadata, aligned subtitles/emojis, and wired 100% valid bidirectional linking. Enriched floor pages with student-friendly explanations, integrated cross-floor connection callouts, and added 8+ historical images.
- `computer-science/timeline.html` causal-graph timeline: enriched with new milestone nodes, deep-linking, a11y, and Wikimedia images. Graph integrity verified (86 nodes, 0 broken/one-way refs).
- `computer-science/glossary.html` glossary page: enhanced with a real-time local search input, floor filtering deck, dynamic count badges, and 7 new terms mapped across all 7 floors.
- Mobile Responsiveness Polish: optimized landing page and 10+ subpages for mobile (375px) and tablet (768px) layout scaling.
- SEO and Head Metadata Standardization: resolved missing canonical links, trimmed meta descriptions, mapped social preview OG tags, and added robots.txt crawl definitions.

## Recent Decisions
<!-- newest first, max 10 -->
- 2026-06-19: Landing Page Visual & Interactive Enhancements: Added dot grid background, hover card glows, and custom scrollbar styles within current color palette. Integrated scroll-triggered count-up animation for stats. Implemented search/filter deck for project cards. Added hover connections between Skills Matrix and project card chips. Added Ecosystem nav links and fixed mobile menu divider borders. Cleaned up duplicate resume file.
- 2026-06-18: Floor Content Enrichment & Timeline Sync: Audited, aligned, and enriched visual/content layouts across all 7 Floor pages. Expanded concepts with student-friendly analogies (lockers, treasure hunts, voting neurons, and magnets), simplified formulas (entropy, cosine similarity, neurons, attention), and custom tables. Added 8+ historical images (Ada Lovelace, Boole, Grace Hopper, Backus, Lisp, Rust, Altair, VisiCalc, Deep Blue, AlphaGo, Transformer architecture, Stable Diffusion). Added cross-floor connection callouts for integrated evolution tracking. Established 100% valid bidirectional navigation with 0 broken links.
- 2026-06-18: SEO & Metadata Standardization: added canonical references across 11 project/hub directories, trimmed descriptions on landing/CS tower/floor files under 160 characters, integrated og:image and og:description previews, and added sap-landscape/sitemap.xml into robots.txt.
- 2026-06-18: Portfolio-wide Mobile Responsiveness: added hamburger navigation menu to main page with simple JS toggle, stacked stats rows into clean grid segments on mobile/tablet views, stacked project details subpage links, wrapped ecosystem and community grid blocks, and resolved card grid width overflow across shared stylesheet classes.
- 2026-06-18: Glossary Page Enhancements: added local search input with clear-box control, floor filtering deck with dynamic count badges, and a custom no-results empty state (with Reset button). Also inserted 7 new terms (Assembly language, Deep learning, GUI, Halting problem, HTTP, Integrated circuit, SQL) to fill knowledge gaps across all floors, and fixed navigation link active highlighting bug.
- 2026-06-18: Added 6 high-value gap milestones to the CS timeline (CMOS 1963, GPS 1978, VLSI Design 1980, the GUI/Xerox Star 1981, Word2Vec 2013, Stable Diffusion 2022), each with simple explanations and bidirectional causal wiring to existing nodes. Also added deep-linking (`?focus=`/`#id` + Copy-link), causal-drawer a11y (role=dialog, focus trap, aria-labels), and Wikimedia Commons images for the new + previously image-less nodes. Verified via a Python graph-integrity check + browser preview.
- 2026-06-18: Wired Antigravity via its native `.antigravity/rules/00-shared-context.md` (always_on) rather than editing AppData/globalStorage (app-managed, corruption risk). Repo-tracked so it travels with clones.
- 2026-06-18: Adopted a single living-state file (`CONTEXT.md`) as the cross-tool source of truth; `CLAUDE.md` and `AGENTS.md` are thin pointers to it. Rationale: prevent context drift between Claude Code and Antigravity.
- 2026-06-18: Assistants do NOT run `git push` / `git pull` / remote ops. The user pushes via GitHub Desktop. Assistants only make clean, well-documented local commits.

## Blockers
<!-- Open questions, waiting-ons, known issues -->
- (To verify) Confirm Antigravity surfaces `.antigravity/rules/00-shared-context.md` as an active rule in its Rules panel; rename folder if its build differs.

## Next Up
<!-- Immediate next steps -->
- Continue per user request.

## Session Log
<!-- newest entries appended here by /sync; never delete past entries -->
- 2026-06-19: Landing Page (index.html) Audit & Interactive Enhancements — fixed undefined CSS variables, navigation border bugs, and certifications strip overlapping layout issue; added a fixed radial dot grid, hover glows, and scrollbar styles; implemented animated stats counter, a category search/filter deck, and empty states; wired bidirectional hover highlighting between Skills Matrix and Project Cards; removed duplicate `Sashibhusan_Nayak_Resume.pdf` file.
- 2026-06-18: Floor Content Enrichment and Timeline Sync sprint — aligned floor headers and emojis, added 18 milestones to match timeline density, and wired up bidirectional linking across 7 floor files, timeline.html, and cs.css. Verified 100% link integrity (0 broken links) via verify_links.py.
- 2026-06-18: Cleaned up legacy backup files index.html.bak and index.html.pre-sapls.bak from root.
- 2026-06-18: SEO & Metadata Standardization sprint — resolved canonical gaps, description length warnings, and missing social preview cards. 17 files modified.
- 2026-06-18: Mobile responsiveness sprint — resolved layout issues on small/narrow screens across index, 10 project pages, ecosystem page, community hub, and shared stylesheets. 16 files modified.
- 2026-06-18: Glossary page enhancement sprint — added interactive search and floor filtering, alphabetized and added 7 new terms, fixed nav link bugs. Staged and committed locally.
- 2026-06-18: Initialized dual-tool scaffolding (CONTEXT.md shared brain, CLAUDE.md, AGENTS.md, .claude/ tooling).
- 2026-06-18: Added Antigravity workspace-rules harness (.antigravity/rules/) → unified both agents under one shared CONTEXT.md. 2 local commits, unpushed (user pushes via GitHub Desktop).
- 2026-06-18: CS timeline enhancement sprint — 6 commits (CMOS, GPS, VLSI+GUI, Word2Vec+Stable Diffusion, image attachments) on top of earlier deep-link/a11y/portrait work. Graph clean at 86 nodes; all committed locally only.
