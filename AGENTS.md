# AGENTS.md — snayak27.github.io

> Cross-tool agent guide. **Antigravity, Claude Code, and any other AI assistant: start here.**

## ⚑ Single source of truth
The **living project state** — current phase, active work, decisions, blockers, next steps — lives in
[`CONTEXT.md`](CONTEXT.md). **Read `CONTEXT.md` at the start of every session and update it before you stop.**
This is how context/"consciousness" is preserved across tool switches (Antigravity ⇄ Claude Code) and fresh clones.

Claude Code users also have [`CLAUDE.md`](CLAUDE.md) (Claude-specific reference); it points back here and to CONTEXT.md.

## Project in one line
Static, hand-authored HTML/CSS/JS portfolio site for Sashibhusan Nayak, deployed via GitHub Pages from the repo root. No build step, no framework, no package manager.

## How to run
```
python -m http.server 3333    # then open http://localhost:3333
```

## Layout
- `index.html` — main landing page.
- `*/index.html` — per-topic deep-dive pages (behavioral-rules, hive, sap-landscape, second-brain, uac, etc.).
- Site assets/SEO: `404.html`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `og-image.png`.
- `*.bak` — milestone backups of `index.html`; do not edit.

## Working rules (apply to ALL assistants)
1. **Never push.** No `git push` / `git pull` / clone / remote operations. The user pushes manually via **GitHub Desktop**. Make clean local commits only.
2. **Commits:** logical, single-concern, Conventional-Commits style (`feat:`/`fix:`/`docs:`/`chore:`), with clear messages.
3. **Keep pages consistent** with existing structure, inline styling, and meta/OG/JSON-LD blocks.
4. When adding/removing a page, update `sitemap.xml` and nav links in `index.html`.
5. **Log your work** in `CONTEXT.md` (Session Log + any decisions/blockers) before ending — this is the handoff to the next tool/session.
