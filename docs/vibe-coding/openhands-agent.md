# Vibe Coding with OpenHands Agent

OpenHands (formerly OpenDevin) is a sandbox-based autonomous software agent that interacts with terminal systems, files, and browsers to complete complex development objectives.

## 🚀 How to Run the Agent Loop

### 1. Setting Up the Workspace
1. Initialize the OpenHands container or web interface.
2. Select this repository folder as the project workspace directory.

### 2. Executing the Task Loop
1. In the main task window, provide the high-level objective:
   ```text
   Read AGENTS.md and execute the next enhancement task (trigger 'next')
   ```
2. Press Enter to launch the loop.
3. OpenHands will spin up its agent loop, read `AGENTS.md` and `plans/next-enhancements.md`, write code files, execute terminal runs (builds/tests), and self-correct if it encounters failures. You can monitor its progress in real-time via the web interface.
