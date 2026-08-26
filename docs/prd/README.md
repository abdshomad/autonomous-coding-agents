# PRD Directory (`docs/prd/`)

Authoritative Product Requirements Documents synthesized from `docs/deep-research/`.

## Directives
* **Plan Mode**: Author and update PRD in Plan Mode with high reasoning model.
* **Modularity**:
  * Simple (<256 LOC): single `docs/prd/prd.md`.
  * Complex (>256 LOC): split by domain (`docs/prd/<domain>/<topic>.md`).
* **Execution**: PRD seeds `plans/next-enhancements.md` and `plans/roadmaps/`. Implementations must align with PRD.

