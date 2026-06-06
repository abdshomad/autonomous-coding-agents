# Autonomous Coding Agents

Welcome to the **Autonomous Coding Agents** repository. This platform is designed to facilitate rapid, iterative, and automated software development orchestrated by autonomous AI agents.

By establishing strict workflow protocols and structured documentation, this repository enables AI agents to plan, implement, and document platform enhancements systematically.

---

## 🚀 How It Works

The development workflow is driven by two main triggers issued by the user:

### 1. **Enhancement Planning (`e` or `enhance`)**
When the user requests an enhancement plan (or types `e` or `enhance`), the agent will:
* Read `plan/next-enhancements.md` to understand the current platform structure, history, and active tasks.
* Overwrite or update the active tasks list inside `plan/next-enhancements.md`.
* The plan must cover each main section/module of the application.
* Inside the tasks list, define **exactly 3 new enhancements per section** with:
  1. A unique number (e.g., `1.1`, `1.2`, `1.3`).
  2. A clear, specific description of the functional change.
  3. A status (initially set to `[TODO]`).
* Present this plan to the user in the final summary response.

### 2. **Task Execution (`n` or `next`)**
When the user triggers the next enhancement (or types `n` or `next`), the agent will:
* Read `plan/next-enhancements.md` to identify and select the most impactful enhancement task currently marked `[TODO]` (evaluating which task has the highest strategic value, functional impact, or user experience contribution rather than just taking the first one in order).
* Implement that specific enhancement task fully in the codebase.
* Once completed:
  1. Update that specific task's status of `plan/next-enhancements.md` to `[DONE]`.
  2. Document the new or updated feature in the `docs/feature-list.md` file (maintaining an organized list of all platform features under the appropriate section heading).
* Verify the build integrity of the workspace.
* In the final response, state which task has been completed and inform the user of the exact menu or navigation path where they can view and interact with the new/updated feature.

---

## 📁 Repository Structure

* **[AGENTS.md](AGENTS.md)**: Workflow rules and triggers for autonomous coding agents.
* **`plan/`**:
  * **`plan/next-enhancements.md`** *(created/updated dynamically)*: Detailed plan of future platform features and enhancement tasks.
* **`docs/`**:
  * **`docs/feature-list.md`** *(created/updated dynamically)*: Chronological and structured feature log.

---

## 🛠️ Contribution Guidelines

* Keep docstrings, comments, and existing tests intact unless requested otherwise.
* Always verify the build and runtime integrity before finalizing tasks.
* Ensure documentation updates are clean, structured, and consistent with the existing documentation format.