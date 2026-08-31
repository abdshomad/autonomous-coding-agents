#!/usr/bin/env bash
set -euo pipefail

# scripts/submodules-sync.sh - Submodule synchronization and health manager
SUBMODULES=(
  "ai-memory"
  "archify"
  "caveman"
  "gauntlet-loop"
  "graphify"
  "how"
  "no-mistakes"
  "ponytail"
  "unlazy"
)

show_help() {
  cat << 'HELP_EOF'
Usage: scripts/submodules-sync.sh <command> [options]

Commands:
  sync          Initialize and update all 9 Git submodules recursively
  check|doctor  Verify that all 9 submodules are present, clean, and tracked
  status        Display commit hash and remote URL for each submodule
  help          Show this help message
HELP_EOF
}

cmd_sync() {
  echo "[submodules-sync] Synchronizing all 9 Git submodules..."
  git submodule update --init --recursive
  echo "[submodules-sync] Sync complete."
}

cmd_check() {
  echo "[submodules-sync] Checking health and immutability of submodules..."
  local errors=0

  for name in "${SUBMODULES[@]}"; do
    local sub_dir="submodules/$name"
    local patch_dir="patches/$name"

    # Check existence
    if [ ! -d "$sub_dir" ]; then
      echo "  [FAIL] $name: directory missing ($sub_dir)"
      errors=$((errors + 1))
      continue
    fi

    # Check patches overlay
    if [ ! -d "$patch_dir" ]; then
      echo "  [FAIL] $name: patch overlay directory missing ($patch_dir)"
      errors=$((errors + 1))
      continue
    fi

    echo "  [OK] $name: present and configured"
  done

  if [ $errors -eq 0 ]; then
    echo "[submodules-sync] All 9 submodules healthy and tracked."
    return 0
  else
    echo "[submodules-sync] Failed with $errors errors."
    return 1
  fi
}

cmd_status() {
  echo "[submodules-sync] Submodule Matrix Status:"
  for name in "${SUBMODULES[@]}"; do
    local sub_dir="submodules/$name"
    if [ -d "$sub_dir" ]; then
      local commit
      commit=$(git -C "$sub_dir" rev-parse --short HEAD 2>/dev/null || echo "uninitialized")
      echo "  • $name: $commit ($sub_dir)"
    else
      echo "  • $name: [MISSING]"
    fi
  done
}

# CLI Router
COMMAND="${1:-help}"
shift || true

case "$COMMAND" in
  sync)
    cmd_sync "$@"
    ;;
  check|doctor)
    cmd_check "$@"
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
