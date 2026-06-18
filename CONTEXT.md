# Context — snayak27.github.io

> **This file is the shared "brain" for ALL AI assistants on this repo (Claude Code _and_ Antigravity).**
> It is git-tracked, so it travels with the repo and survives tool switches, fresh clones, and context resets.
> Both `CLAUDE.md` and `AGENTS.md` point here. **Read this first, every session. Update it before you stop.**

_Last synced: 2026-06-18 (IST)_

## Current Phase
Active Dev / Maintenance — content site is live on GitHub Pages; ongoing additions of project deep-dive pages and SEO/structured-data polish.

## Active Work
<!-- What is being built right now -->
- Project moved from `D:\claude code project\portfolio` to `E:\3.githubclone\snayak27.github.io` to escape GitHub push/token issues. Pushes are now done manually by the user via GitHub Desktop — assistants must NOT push.
- Just scaffolded shared-context system (this file + CLAUDE.md + AGENTS.md).

## Recent Decisions
<!-- newest first, max 10 -->
- 2026-06-18: Adopted a single living-state file (`CONTEXT.md`) as the cross-tool source of truth; `CLAUDE.md` and `AGENTS.md` are thin pointers to it. Rationale: prevent context drift between Claude Code and Antigravity.
- 2026-06-18: Assistants do NOT run `git push` / `git pull` / remote ops. The user pushes via GitHub Desktop. Assistants only make clean, well-documented local commits.

## Blockers
<!-- Open questions, waiting-ons, known issues -->
- None currently. (Historical: github.com DNS/push problems on the old location — resolved by relocating + manual GitHub Desktop pushes.)

## Next Up
<!-- Immediate next steps -->
- Continue per user request.

## Session Log
<!-- newest entries appended here by /sync; never delete past entries -->
- 2026-06-18: Initialized dual-tool scaffolding (CONTEXT.md shared brain, CLAUDE.md, AGENTS.md, .claude/ tooling).
