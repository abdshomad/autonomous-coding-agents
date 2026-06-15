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

## 2. Trigger "n", "next", or "n{x}"
If the user types "n", "next", "n{x}" (where `{x}` is a positive integer representing the number of enhancements, e.g., "n3"), or requests execution of the next enhancement task(s):
- Read `/plan/next-enhancements.md` to check the status of tasks.
- If all enhancement tasks in `/plan/next-enhancements.md` are marked `[DONE]` (or there are no tasks marked `[TODO]`), automatically execute the **Trigger "e" or "enhance"** workflow to generate a new set of tasks.
- Otherwise, identify and select the most impactful enhancement task(s) currently marked `[TODO]` (evaluating which tasks have the highest strategic value, functional impact, or user experience contribution). If `{x}` is specified, select the top `{x}` most impactful enhancement tasks and execute them sequentially.
- Implement the selected enhancement task(s) fully in the codebase.
- Once completed:
  1. Update the specific task(s) status of `/plan/next-enhancements.md` to `[DONE]`.
  2. Document the new or updated feature(s) in the `/docs/feature-list.md` file (maintaining an organized list of all platform features under the appropriate section heading).
- Verify the build integrity of the workspace.
- In your final response, state which task(s) have been completed and inform the user of the exact menu or navigation path where they can view and interact with the new/updated feature(s).

## 3. File Size & Refactoring Rules
- **Threshold Rule**: Any new or refactored file exceeding 256 lines of code (LOC) must be refactored and split into multiple smaller, modular, and logical components/files.

## 4. Ad-hoc Feature Requests
- For direct feature requests not using "n"/"next", implement the feature and document it in `/docs/feature-list.md`.

## 5. Mockup Data & Demo/Live Mode
- Store all mock/sample data in `/data/mockup/` — keep it separate from UI components and styling.
- Provide a mock API layer that reads from `/data/mockup/` and mirrors the real backend contract.
- Add a switcher control (icon) in the UI to toggle **Demo** (mock API + mock data) and **Live** (real API + real data).

## 6. Cloud vs Local (On-Premise)
- Provide a setting to choose **Cloud** or **Local (on-premise)** deployment.
- **Cloud**: use remote/cloud-hosted API endpoints and services.
- **Local**: use on-premise/self-hosted API endpoints and services.
- Persist the selection and route all backend/service calls to the chosen environment.

