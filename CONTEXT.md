# Context — snayak27.github.io

> **This file is the shared "brain" for ALL AI assistants on this repo (Claude Code _and_ Antigravity).**
> It is git-tracked, so it travels with the repo and survives tool switches, fresh clones, and context resets.
> Both `CLAUDE.md` and `AGENTS.md` point here. **Read this first, every session. Update it before you stop.**

_Last synced: 2026-06-18 (IST)_

## Current Phase
Active Dev / Maintenance — content site is live on GitHub Pages; ongoing additions of project deep-dive pages and SEO/structured-data polish.

## Active Work
<!-- What is being built right now -->
- Cross-tool shared-context harness is fully wired (CONTEXT.md + CLAUDE.md + AGENTS.md + .antigravity/rules/). Both Antigravity and Claude Code now run under one harness pointing at this file.
- Project lives at `E:\3.githubclone\snayak27.github.io` (moved from `D:\claude code project\portfolio` to escape GitHub push/token issues). Pushes are manual via GitHub Desktop — assistants must NOT push.

## Recent Decisions
<!-- newest first, max 10 -->
- 2026-06-18: Wired Antigravity via its native `.antigravity/rules/00-shared-context.md` (always_on) rather than editing AppData/globalStorage (app-managed, corruption risk). Repo-tracked so it travels with clones.
- 2026-06-18: Adopted a single living-state file (`CONTEXT.md`) as the cross-tool source of truth; `CLAUDE.md` and `AGENTS.md` are thin pointers to it. Rationale: prevent context drift between Claude Code and Antigravity.
- 2026-06-18: Assistants do NOT run `git push` / `git pull` / remote ops. The user pushes via GitHub Desktop. Assistants only make clean, well-documented local commits.

## Blockers
<!-- Open questions, waiting-ons, known issues -->
- (To verify) Confirm Antigravity surfaces `.antigravity/rules/00-shared-context.md` as an active rule in its Rules panel; rename folder if its build differs.

## Next Up
<!-- Immediate next steps -->
- Optional cleanup: remove 3 `*.bak` files + duplicate resume PDF (`resume.pdf` vs `Sashibhusan_Nayak_Resume.pdf`).
- Continue per user request.

## Session Log
<!-- newest entries appended here by /sync; never delete past entries -->
- 2026-06-18: Initialized dual-tool scaffolding (CONTEXT.md shared brain, CLAUDE.md, AGENTS.md, .claude/ tooling).
- 2026-06-18: Added Antigravity workspace-rules harness (.antigravity/rules/) → unified both agents under one shared CONTEXT.md. 2 local commits, unpushed (user pushes via GitHub Desktop).
