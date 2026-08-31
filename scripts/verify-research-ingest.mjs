// scripts/verify-research-ingest.mjs - Verify 8 research briefs exist with baseline markers
import fs from 'node:fs';

const BRIEFS = [
  'tts',
  'stt',
  's2s',
  'ocr',
  'object-detection',
  'segmentation',
  'object-counting',
  'grok-bot-use-cases'
];

const BASELINE_MARKER = '2026-08-31';

function verifyResearchIngest() {
  for (const name of BRIEFS) {
    const path = `docs/deep-research/${name}.md`;
    
    if (!fs.existsSync(path)) {
      console.error(`Error: missing brief: ${path}`);
      process.exit(1);
    }

    const content = fs.readFileSync(path, 'utf8');
    
    if (!content.includes(BASELINE_MARKER)) {
      console.error(`Error: ${path} lacks ${BASELINE_MARKER} baseline marker`);
      process.exit(1);
    }
  }

  console.log('ingest passed');
  process.exit(0);
}

verifyResearchIngest();
