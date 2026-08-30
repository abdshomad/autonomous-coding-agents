// scripts/verify-graphify-orientation.mjs - Verification oracle for orientation query integration
import fs from 'node:fs';
import path from 'node:path';
import { buildGraph } from './lib/ast-graph.mjs';

function verifyOrientationIntegration() {
  const graph = buildGraph('.graphify');

  // Query entry point or core contract
  const agentsNode = graph.nodes.find(n => n.id === 'AGENTS.md');
  if (!agentsNode) {
    console.error('Error: AGENTS.md node missing in graph');
    process.exit(1);
  }

  // Query skills directory nodes
  const skillNodes = graph.nodes.filter(n => n.id.startsWith('skills/'));
  if (skillNodes.length === 0) {
    console.error('Error: Skill nodes missing in graph');
    process.exit(1);
  }

  // Query scripts directory nodes
  const scriptNodes = graph.nodes.filter(n => n.id.startsWith('scripts/'));
  if (scriptNodes.length === 0) {
    console.error('Error: Script nodes missing in graph');
    process.exit(1);
  }

  console.log('graphify-orientation passed');
  process.exit(0);
}

verifyOrientationIntegration();
