# Deep Research Directory (`docs/deep-research/`)

This directory houses technical feasibility reports, competitor and market benchmarks, and deep-dive technical research that informs the Product Requirements Document (PRD).

---

## 🧠 Operational Mode & Reasoning Tier

> **Mandatory Plan Mode**: All deep research activities (whether agent-conducted or grilled) must run in **Plan Mode** with the **highest-tier smart model** and **deep thinking / extended reasoning** enabled to ensure rigorous trade-off evaluations.

---

## 🔍 Ingestion & Generation Guidelines

1. **User-Provided Research**:
   - You can copy-paste output from external deep research engines (e.g., Gemini Deep Research, Perplexity, OpenAI Deep Research, whitepapers) directly into this directory (e.g. `docs/deep-research/research.md` or topic-specific files like `docs/deep-research/market-analysis.md`).
2. **Agent-Conducted Research**:
   - Triggering `i` or `init` in **Auto Mode** instructs the agent to perform web search and technical benchmarking in Plan Mode with high reasoning, saving research findings here.
   - Running `/grill-me` initiates an interactive interview to probe requirements and draft research findings.
3. **Synthesis**:
   - Once research is established in this folder, the AI agent transitions to authoring the PRD in `docs/prd/` while maintaining Plan Mode and deep reasoning.

