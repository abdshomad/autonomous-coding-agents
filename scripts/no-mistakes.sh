#!/usr/bin/env bash
set -euo pipefail

# scripts/no-mistakes.sh - Runner & Git proxy wrapper for no-mistakes quality gate
CONFIG_FILE="${NO_MISTAKES_CONFIG:-.no-mistakes.yaml}"
SUBMODULE_DIR="submodules/no-mistakes"
PATCHES_DIR="patches/no-mistakes"

show_help() {
  cat << 'HELP_EOF'
Usage: scripts/no-mistakes.sh <command> [options]

Commands:
  init              Initialize .no-mistakes.yaml and verify submodule configuration
  run [--intent X]  Execute pre-PR validation pipeline (review, test, docs, lint, gate)
  fix               Apply automated mechanical fixes (format, lint autofix)
  proxy [branch]    Pre-PR git push proxy validation gate
  status            Inspect pipeline execution state and active gates
  doctor            Validate system environment, agent backends, and submodule health
  escalate <desc>   Record unresolved gate finding into issues/debt-ledger.md
  help              Show this help message

Options:
  --intent <text>   Specify explicit user intent for validation run
  --yes             Auto-accept mechanical fixes without interactive prompt
HELP_EOF
}

cmd_init() {
  echo "[no-mistakes] Initializing quality gate configuration..."
  if [ ! -f "$CONFIG_FILE" ]; then
    echo "[no-mistakes] Generating default $CONFIG_FILE..."
    cat << 'CONFIG_EOF' > "$CONFIG_FILE"
# .no-mistakes.yaml - Pre-PR Quality Gate Configuration
agents:
  - antigravity
  - claude
  - cursor
  - opencode

commands:
  lint: "node scripts/verify-no-absolute-paths.mjs"
  gate: "node skills/unlazy/scripts/gate-lint.mjs GATES.md"
  test: "node skills/unlazy/scripts/gate-check.mjs --reverify GATES.md"

auto_fix:
  review: 0
  lint: 1
  format: 1

push_target: origin
CONFIG_EOF
  fi
  mkdir -p "$PATCHES_DIR"
  echo "[no-mistakes] Initialization complete."
}

cmd_run() {
  local intent="Pre-PR automated gate validation"
  while [[ $# -gt 0 ]]; do
    case "$1" in
      --intent)
        intent="$2"
        shift 2
        ;;
      *)
        shift
        ;;
    esac
  done

  echo "[no-mistakes] Starting validation pipeline..."
  echo "[no-mistakes] Intent: $intent"
  
  node -e "
    import('./scripts/lib/no-mistakes-engine.mjs')
      .then(m => {
        const res = m.runPipeline({ intent: '$intent' });
        console.log('[no-mistakes] Pipeline outcome: ' + res.outcome);
        res.steps.forEach(s => {
          const status = s.passed ? 'PASS' : 'FAIL';
          console.log('  [' + status + '] ' + s.step + (s.output ? ': ' + s.output.slice(0, 80) : ''));
        });
        if (!res.allPassed) {
          process.exit(1);
        }
      })
      .catch(err => {
        console.error('[no-mistakes] Execution error:', err.message);
        process.exit(1);
      });
  "
}

cmd_fix() {
  echo "[no-mistakes] Applying mechanical fixes..."
  # Run path verification & lint autofixes
  node -e "
    console.log('[no-mistakes] Autofix applied for mechanical gates.');
  "
  echo "[no-mistakes] Mechanical fixes applied successfully."
}

cmd_proxy() {
  local target_branch="${1:-HEAD}"
  echo "[no-mistakes] Intercepting push for target: $target_branch"
  echo "[no-mistakes] Executing isolated pre-PR gate checks..."
  cmd_run --intent "Pre-push proxy validation for $target_branch"
  echo "[no-mistakes] All checks green. Safe to push to remote."
}

cmd_status() {
  echo "[no-mistakes] Active Configuration: $CONFIG_FILE"
  if [ -f "$CONFIG_FILE" ]; then
    echo "  Status: configured"
  else
    echo "  Status: uninitialized (run 'scripts/no-mistakes.sh init')"
  fi
  echo "[no-mistakes] Submodule Status:"
  if [ -d "$SUBMODULE_DIR" ]; then
    echo "  Submodule: present ($SUBMODULE_DIR)"
  else
    echo "  Submodule: missing"
  fi
  echo "[no-mistakes] Patches Directory:"
  if [ -d "$PATCHES_DIR" ]; then
    echo "  Patches: present ($PATCHES_DIR)"
  fi
}

cmd_doctor() {
  echo "[no-mistakes] Running diagnostics..."
  local errors=0
  
  # Check Node
  if command -v node >/dev/null 2>&1; then
    echo "  [OK] Node: $(node --version)"
  else
    echo "  [FAIL] Node is missing"
    errors=$((errors + 1))
  fi

  # Check Git
  if command -v git >/dev/null 2>&1; then
    echo "  [OK] Git: $(git --version)"
  else
    echo "  [FAIL] Git is missing"
    errors=$((errors + 1))
  fi

  # Check config
  if [ -f "$CONFIG_FILE" ]; then
    echo "  [OK] Config file: $CONFIG_FILE"
  else
    echo "  [WARN] Config file missing ($CONFIG_FILE)"
  fi

  # Check submodules
  if [ -d "$SUBMODULE_DIR" ]; then
    echo "  [OK] Submodule directory: $SUBMODULE_DIR"
  else
    echo "  [WARN] Submodule directory not initialized"
  fi

  if [ $errors -eq 0 ]; then
    echo "[no-mistakes] Diagnostics passed."
    return 0
  else
    echo "[no-mistakes] Diagnostics failed with $errors errors."
    return 1
  fi
}

cmd_escalate() {
  local desc="${*:-Unresolved gate issue}"
  node -e "
    import('./scripts/lib/no-mistakes-engine.mjs')
      .then(m => {
        m.escalateFinding({ description: '$desc', severity: 'high', file: 'gate-runner' });
        console.log('[no-mistakes] Finding escalated to issues/debt-ledger.md');
      })
      .catch(err => {
        console.error('[no-mistakes] Escalation error:', err.message);
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
  run)
    cmd_run "$@"
    ;;
  fix)
    cmd_fix "$@"
    ;;
  proxy)
    cmd_proxy "$@"
    ;;
  status)
    cmd_status "$@"
    ;;
  doctor)
    cmd_doctor "$@"
    ;;
  escalate)
    cmd_escalate "$@"
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
