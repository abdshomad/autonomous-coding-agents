# Agent Instructions

You must follow these workflow rules strictly to support rapid, iterative enhancements of the platform:

## 1. Trigger "e" or "enhance"
If the user types "e", "enhance", or requests an enhancement plan:
- Read `/plan/next-enhancements.md` to understand the current platform structure, history, and active tasks.
- Overwrite or update the active tasks list inside `/plan/next-enhancements.md`.
- The plan must cover each main section/module of the application.
- Inside the tasks list, define **exactly 3 new enhancements per section** with:
  1. A unique number (e.g., `1.1`, `1.2`, `1.3`).
  2. A clear, specific description of the functional change.
  3. A status (initially set to `[TODO]`).
- Present this plan to the user in your final summary response.

## 2. Trigger "n" or "next"
If the user types "n", "next", or requests execution of the next enhancement task:
- Read `/plan/next-enhancements.md` to check the status of tasks.
- If all enhancement tasks in `/plan/next-enhancements.md` are marked `[DONE]` (or there are no tasks marked `[TODO]`), automatically execute the **Trigger "e" or "enhance"** workflow to generate a new set of tasks.
- Otherwise, identify and select the most impactful enhancement task currently marked `[TODO]` (evaluating which task has the highest strategic value, functional impact, or user experience contribution rather than just taking the first one in order).
- Implement that specific enhancement task fully in the codebase.
- Once completed:
  1. Update that specific task's status of `/plan/next-enhancements.md` to `[DONE]`.
  2. Document the new or updated feature in the `/docs/feature-list.md` file (maintaining an organized list of all platform features under the appropriate section heading).
- Verify the build integrity of the workspace.
- In your final response, state which task has been completed and inform the user of the exact menu or navigation path where they can view and interact with the new/updated feature.

