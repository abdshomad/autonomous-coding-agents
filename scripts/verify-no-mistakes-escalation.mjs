// scripts/verify-no-mistakes-escalation.mjs - Verification oracle for debt escalation
import { execSync } from 'node:child_process';
import fs from 'node:fs';

function verifyEscalation() {
  const ledger = 'issues/debt-ledger.md';
  const testDesc = 'Automated gate check verification escalation item';
  
  execSync(`bash scripts/no-mistakes.sh escalate "${testDesc}"`, { encoding: 'utf8' });
  
  if (!fs.existsSync(ledger)) {
    console.error('Error: debt ledger missing after escalation');
    process.exit(1);
  }

  const content = fs.readFileSync(ledger, 'utf8');
  if (!content.includes(testDesc)) {
    console.error('Error: escalated finding not found in ledger');
    process.exit(1);
  }

  console.log('no-mistakes-escalation passed');
  process.exit(0);
}

verifyEscalation();
