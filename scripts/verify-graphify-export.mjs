// scripts/verify-graphify-export.mjs - Verification oracle for graph visual export
import { execSync } from 'node:child_process';
import fs from 'node:fs';

function verifyExport() {
  const exportOut = execSync('bash scripts/graphify.sh export-html', { encoding: 'utf8' });
  if (!exportOut.includes('[graphify] Exported interactive visual')) {
    console.error('Error: export command failed');
    process.exit(1);
  }

  const htmlPath = 'docs/features/core/diagrams/graph.html';
  if (!fs.existsSync(htmlPath)) {
    console.error('Error: graph.html does not exist');
    process.exit(1);
  }

  const content = fs.readFileSync(htmlPath, 'utf8');
  if (!content.includes('Codebase Knowledge Graph') || !content.includes('Total Nodes:')) {
    console.error('Error: HTML structure invalid');
    process.exit(1);
  }

  console.log('graphify-export passed');
  process.exit(0);
}

verifyExport();
