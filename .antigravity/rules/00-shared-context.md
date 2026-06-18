---
trigger: always_on
description: Shared cross-tool context harness for snayak27.github.io (Antigravity + Claude Code)
---

# Shared-context harness (read this every session)

This repo is worked on by **multiple AI agents — Antigravity AND Claude Code**. To avoid context
drift, all agents share ONE living-state file.

## ⚑ Single source of truth
The living project state — current phase, active work, decisions, blockers, next steps, session log —
is in **`CONTEXT.md`** at the repo root.

1. **At the start of every session: read `CONTEXT.md`.** It is your handoff note from the previous
   session (which may have been Claude Code or a past Antigravity run).
2. **Before you finish a task/session: update `CONTEXT.md`** — append a Session Log line and record any
   new decisions/blockers. This is the handoff to whoever comes next.

`CONTEXT.md` is git-tracked, so it survives tool switches, fresh clones, and context resets.
(`AGENTS.md` and `CLAUDE.md` are thin entry points that also point here.)

## Project facts
- Static, hand-authored **HTML + CSS + JS** portfolio site. **No build step, no framework, no package manager.**
- Deployed via **GitHub Pages from the repo root** (`index.html`).
- Run locally: `python -m http.server 3333` → http://localhost:3333
- `index.html` = landing page; `*/index.html` = per-topic deep-dive pages; `*.bak` = milestone backups (don't edit).

## Working rules (apply to ALL agents)
1. **Never push.** No `git push` / `git pull` / clone / remote ops. The user pushes manually via
   **GitHub Desktop**. Make clean **local** commits only.
2. Commits: logical, single-concern, Conventional-Commits style (`feat:` / `fix:` / `docs:` / `chore:`).
3. Keep new/edited pages consistent with existing structure, inline styling, and meta/OG/JSON-LD blocks.
4. When adding/removing a page, update `sitemap.xml` and nav links in `index.html`.
5. Log your work in `CONTEXT.md` before ending the session.
