# Vibe Coding with OpenHands Agent

OpenHands (formerly OpenDevin) is a sandbox-based autonomous software agent that interacts with terminal systems, files, and browsers to complete complex development objectives.

## 🚀 How to Run the Agent Loop

### 1. Setting Up the Workspace
1. Initialize the OpenHands container or web interface.
2. Select this repository folder as the project workspace directory.

### 2. Executing the Task Loop & Triggers
1. In the main task window, provide the high-level objective:
   * **Bootstrap**: `"Operate in Plan Mode with high reasoning: ingest docs/deep-research/, draft docs/prd/, and initialize workspace per AGENTS.md ('i')"`
   * **Plan**: `"Read AGENTS.md and generate next enhancement plan ('e')"`
   * **Execute**: `"Read AGENTS.md and execute next enhancement tasks ('n3')"`
   * **Milestone**: `"Read AGENTS.md and execute roadmap milestone ('m')"`

2. Press Enter to launch the loop.
3. OpenHands will spin up its agent loop, read `AGENTS.md` and `plans/next-enhancements.md`, write code files (keeping within 256 LOC and using proper folder nesting), execute terminal runs (builds/tests), document features under `docs/features/`, and self-correct if it encounters failures. You can monitor its progress in real-time via the web interface.
