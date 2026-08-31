// scripts/lib/no-mistakes-engine.mjs - Core execution engine for no-mistakes validation pipeline
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

export function loadConfig(configPath = '.no-mistakes.yaml') {
  if (!fs.existsSync(configPath)) {
    return {
      agents: ['antigravity', 'claude', 'cursor', 'opencode'],
      pipeline: ['review', 'test', 'docs', 'lint', 'gate'],
      commands: {
        lint: 'node scripts/verify-no-absolute-paths.mjs',
        gate: 'node skills/unlazy/scripts/gate-lint.mjs GATES.md',
        test: 'node scripts/verify-no-mistakes-runner.mjs'
      },
      auto_fix: {
        review: 0,
        lint: 1,
        format: 1
      },
      push_target: 'origin'
    };
  }
  const content = fs.readFileSync(configPath, 'utf8');
  return {
    raw: content,
    agents: ['antigravity', 'claude', 'cursor', 'opencode'],
    pipeline: ['review', 'test', 'docs', 'lint', 'gate'],
    push_target: 'origin'
  };
}

export function runStep(stepName, cmd) {
  try {
    const out = execSync(cmd, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] });
    return { step: stepName, passed: true, output: out.trim() };
  } catch (err) {
    return {
      step: stepName,
      passed: false,
      output: (err.stdout || '') + (err.stderr || err.message),
      code: err.status || 1
    };
  }
}

export function runPipeline(options = {}) {
  const intent = options.intent || 'Automated pre-PR gate validation';
  const steps = [];
  
  // Step 1: Review & Complexity check (LOC ≤ 256)
  const files = getTrackedCodeFiles();
  const IGNORE_REVIEW_PREFIXES = ['submodules/', '.agents/', 'skills/unlazy/', 'node_modules/'];
  const oversizedFiles = [];
  for (const f of files) {
    if (fs.existsSync(f)) {
      if (IGNORE_REVIEW_PREFIXES.some(p => f.startsWith(p))) continue;
      const lines = fs.readFileSync(f, 'utf8').split('\n').length;
      if (lines > 256) {
        oversizedFiles.push({ file: f, lines });
      }
    }
  }

  if (oversizedFiles.length > 0) {
    steps.push({
      step: 'review',
      passed: false,
      findings: oversizedFiles.map(o => ({
        id: `rev-loc-${path.basename(o.file)}`,
        severity: 'warning',
        file: o.file,
        action: 'ask-user',
        description: `File exceeds 256 LOC limit (${o.lines} lines)`
      }))
    });
  } else {
    steps.push({ step: 'review', passed: true, output: 'Review passed: 0 oversized files' });
  }

  // Step 2: Absolute path lint
  const absPathCheck = runStep('lint-paths', 'node scripts/verify-no-absolute-paths.mjs');
  steps.push(absPathCheck);

  // Step 3: Gate linting if GATES.md exists
  if (fs.existsSync('GATES.md')) {
    const gateLint = runStep('gate-lint', 'node skills/unlazy/scripts/gate-lint.mjs GATES.md');
    steps.push(gateLint);
  }

  const allPassed = steps.every(s => s.passed);
  return {
    intent,
    allPassed,
    outcome: allPassed ? 'checks-passed' : 'failed',
    steps
  };
}

export function escalateFinding(finding, ledgerPath = 'issues/debt-ledger.md') {
  const dir = path.dirname(ledgerPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
  const entry = `\n- [ ] \`[DEBT-${Date.now().toString().slice(-4)}]\` (${timestamp}) **${finding.file || 'general'}**: ${finding.description} (Severity: ${finding.severity || 'medium'})`;
  
  if (!fs.existsSync(ledgerPath)) {
    fs.writeFileSync(ledgerPath, `# Debt Ledger\n\nTracked shortcuts, temporary simplifications, and deferred refactors.\n\n## Unresolved Debt Entries\n${entry}\n`);
  } else {
    fs.appendFileSync(ledgerPath, entry);
  }
  return true;
}

function getTrackedCodeFiles() {
  try {
    const out = execSync('git ls-files "*.js" "*.mjs" "*.sh" "*.py" "*.go"', { encoding: 'utf8' });
    return out.trim().split('\n').filter(Boolean);
  } catch {
    return [];
  }
}
