# Features & User Decisions Index

This directory contains modular domain documentation of platform features and authoritative architectural decisions made by users.

## 📖 Directory Structure Guidelines

1. **Domain Sub-Folders**: Group features into logical sub-folders by domain (e.g., `core/`, `ui/`, `services/`, `data/`).
2. **Concise File Names**: Keep file names short, specific, and focused (e.g., `architecture.md`, `controls.md`, `decisions.md`).
3. **256 LOC Limit**: Ensure individual feature list files never exceed 256 lines of code. Split into additional sub-files as the module expands.
4. **User Decisions (`[DECISION]`)**: Always tag permanent user choices with `[DECISION]` to ensure agents never reverse them.

## 🗂️ Domain Index

* [core/architecture.md](core/architecture.md): Core platform architecture, engine design, and environment contracts.
