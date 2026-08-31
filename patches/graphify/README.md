# Patches: graphify

This directory contains overlay patches for `submodules/graphify/` adhering to the Submodule Immutability Rule in `AGENTS.md`.

## Immutability Rules:
1. Submodules are 100% READ-ONLY. Zero direct edits inside `submodules/graphify/`.
2. Any necessary patches or extensions must be stored here as unified diffs (e.g. `0001-feature.patch`).
3. Runtime runners and wrapper scripts in `scripts/` apply patches dynamically or wrap the binary.
