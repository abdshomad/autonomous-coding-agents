// scripts/verify-ai-memory-engine.mjs - Verification oracle for scripts/lib/ai-memory-engine.mjs
import * as engine from './lib/ai-memory-engine.mjs';

function verifyEngine() {
  engine.initMemory();
  const res = engine.remember('procedures', 'Engine Verification Procedure', 'Automated engine validation workflow', ['engine', 'verification']);
  if (!res.path.includes('.ai-memory/procedures/engine-verification-procedure.md')) {
    console.error('Error: remember output path mismatch');
    process.exit(1);
  }

  const hits = engine.queryMemory('Engine Verification');
  if (hits.length === 0) {
    console.error('Error: query returned zero results');
    process.exit(1);
  }

  const handoff = engine.generateHandoff({ agent: 'antigravity', notes: 'Verification complete' });
  if (!handoff.path) {
    console.error('Error: generateHandoff failed');
    process.exit(1);
  }

  const final = engine.finalizeSession('antigravity');
  if (final.status !== 'consolidated') {
    console.error('Error: finalizeSession failed');
    process.exit(1);
  }

  const stats = engine.getStats();
  if (stats.total === 0) {
    console.error('Error: stats returned 0 total');
    process.exit(1);
  }

  console.log('ai-memory-engine passed');
  process.exit(0);
}

verifyEngine();
