#!/usr/bin/env bash
set -euo pipefail

# scripts/ai-memory.sh - CLI wrapper for persistent memory wiki and agent handoffs
MARKER_FILE=".ai-memory.toml"
SUBMODULE_DIR="submodules/ai-memory"
PATCHES_DIR="patches/ai-memory"

show_help() {
  cat << 'HELP_EOF'
Usage: scripts/ai-memory.sh <command> [options]

Commands:
  init                           Initialize .ai-memory.toml and memory wiki structure
  query <term> [category]        Search persistent memory wiki by keyword or category
  remember <cat> <title> <text>  Record a rule, decision, procedure, or gotcha
  handoff [notes]                Generate or read cross-session handoff summary
  finalize [--agent <name>]      Consolidate session context and update handoff
  doctor                         Verify marker configuration, storage, and agent readiness
  status                         Display persistent memory index statistics
  help                           Show this help message

Categories:
  _rules, decisions, procedures, gotchas, handoffs
HELP_EOF
}

cmd_init() {
  echo "[ai-memory] Initializing persistent memory framework..."
  if [ ! -f "$MARKER_FILE" ]; then
    echo "[ai-memory] Creating default $MARKER_FILE..."
    cat << 'CONFIG_EOF' > "$MARKER_FILE"
[workspace]
name = "autonomous-coding-agents"
storage_path = ".ai-memory"

[project]
name = "inex-core"
description = "Autonomous Coding Agents & inex Lifecycle Framework"

[capture]
ignore_paths = [".git", "node_modules", ".graphify", ".secrets", "submodules"]

[slots]
per_user = false

[wiki]
categories = ["_rules", "decisions", "procedures", "gotchas", "handoffs"]
CONFIG_EOF
  fi
  mkdir -p "$PATCHES_DIR"
  node -e "import('./scripts/lib/ai-memory-engine.mjs').then(m => m.initMemory());"
  echo "[ai-memory] Initialization complete."
}

cmd_query() {
  local term="${1:-}"
  local category="${2:-}"
  if [ -z "$term" ]; then
    echo "[ai-memory] Error: Search term required for query." >&2
    exit 1
  fi
  node -e "
    import('./scripts/lib/ai-memory-engine.mjs')
      .then(m => {
        const hits = m.queryMemory('$term', '$category' || null);
        console.log('[ai-memory] Query results for \"$term\": ' + hits.length + ' matches');
        hits.forEach(h => {
          console.log('  • [' + h.category + '] ' + h.title + ' (' + h.file + ')');
          if (h.snippet) console.log('    \"' + h.snippet + '\"');
        });
      })
      .catch(err => {
        console.error('[ai-memory] Query error:', err.message);
        process.exit(1);
      });
  "
}

cmd_remember() {
  local cat="${1:-decisions}"
  local title="${2:-}"
  local content="${3:-}"
  if [ -z "$title" ] || [ -z "$content" ]; then
    echo "[ai-memory] Error: Category, title, and content required." >&2
    exit 1
  fi
  node -e "
    import('./scripts/lib/ai-memory-engine.mjs')
      .then(m => {
        const res = m.remember('$cat', '$title', '$content');
        console.log('[ai-memory] Stored memory page: ' + res.path);
      })
      .catch(err => {
        console.error('[ai-memory] Remember error:', err.message);
        process.exit(1);
      });
  "
}

cmd_handoff() {
  local notes="${1:-}"
  node -e "
    import('./scripts/lib/ai-memory-engine.mjs')
      .then(m => {
        if ('$notes') {
          const res = m.generateHandoff({ agent: 'antigravity', notes: '$notes' });
          console.log('[ai-memory] Handoff generated: ' + res.path);
        } else {
          const hits = m.queryMemory('', 'handoffs');
          if (hits.length > 0) {
            console.log('[ai-memory] Latest handoff: ' + hits[0].file);
          } else {
            const res = m.generateHandoff({ agent: 'antigravity', notes: 'Baseline initialization' });
            console.log('[ai-memory] Initial handoff created: ' + res.path);
          }
        }
      })
      .catch(err => {
        console.error('[ai-memory] Handoff error:', err.message);
        process.exit(1);
      });
  "
}

cmd_finalize() {
  local agent="antigravity"
  while [[ $# -gt 0 ]]; do
    case "$1" in
      --agent)
        agent="$2"
        shift 2
        ;;
      *)
        shift
        ;;
    esac
  done
  node -e "
    import('./scripts/lib/ai-memory-engine.mjs')
      .then(m => {
        const res = m.finalizeSession('$agent');
        console.log('[ai-memory] Session finalized for agent: ' + res.agent + ' (' + res.status + ')');
      })
      .catch(err => {
        console.error('[ai-memory] Finalize error:', err.message);
        process.exit(1);
      });
  "
}

cmd_doctor() {
  echo "[ai-memory] Running diagnostics..."
  local errors=0

  if [ -f "$MARKER_FILE" ]; then
    echo "  [OK] Marker file: $MARKER_FILE"
  else
    echo "  [FAIL] Marker file missing ($MARKER_FILE)"
    errors=$((errors + 1))
  fi

  if [ -d "$SUBMODULE_DIR" ]; then
    echo "  [OK] Submodule directory: $SUBMODULE_DIR"
  else
    echo "  [WARN] Submodule directory not initialized"
  fi

  if [ -d ".ai-memory" ]; then
    echo "  [OK] Storage directory: .ai-memory"
  else
    echo "  [FAIL] Storage directory missing"
    errors=$((errors + 1))
  fi

  if [ $errors -eq 0 ]; then
    echo "[ai-memory] Diagnostics passed."
    return 0
  else
    echo "[ai-memory] Diagnostics failed with $errors errors."
    return 1
  fi
}

cmd_status() {
  node -e "
    import('./scripts/lib/ai-memory-engine.mjs')
      .then(m => {
        const s = m.getStats();
        console.log('[ai-memory] Status: ' + s.total + ' total pages indexed');
        Object.entries(s.categories).forEach(([k, v]) => {
          console.log('  • ' + k + ': ' + v + ' pages');
        });
      })
      .catch(err => {
        console.error('[ai-memory] Status error:', err.message);
        process.exit(1);
      });
  "
}

# CLI Router
COMMAND="${1:-help}"
shift || true

case "$COMMAND" in
  init)
    cmd_init "$@"
    ;;
  query)
    cmd_query "$@"
    ;;
  remember)
    cmd_remember "$@"
    ;;
  handoff)
    cmd_handoff "$@"
    ;;
  finalize)
    cmd_finalize "$@"
    ;;
  doctor)
    cmd_doctor "$@"
    ;;
  status)
    cmd_status "$@"
    ;;
  help|--help|-h)
    show_help
    ;;
  *)
    echo "Unknown command: $COMMAND" >&2
    show_help >&2
    exit 1
    ;;
esac
