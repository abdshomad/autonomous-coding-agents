---
name: archify
description: Generate interactive and verifiable technical diagrams (SVG/HTML) and architecture deltas.
---

# Archify Skill: Visual Architecture & Diagramming

Generate verifiable visual technical diagrams and architecture maps from codebase structures.

---

## ⚡ Command Invocation (`/archify`)

- `/archify <module|workflow>` — Generate visual architecture diagram or flow map.
- `/archify --delta` — Compare before/after architecture deltas across Git commits.

---

## 📁 Storage Conventions

- Persist SVG/HTML diagrams in `docs/features/<domain>/diagrams/`.
- Link diagrams in markdown docs using root-relative paths: `![Architecture](docs/features/core/diagrams/arch.svg)`.
- Use native Mermaid blocks for simple inline markdown; use Archify for detailed visual artifacts.

---

## 🛡️ Guidelines

- Keep node labels concise (Caveman brevity).
- Map exact root-relative source paths into node metadata.
- Avoid external CDNs; generate self-contained SVG/HTML artifacts.
