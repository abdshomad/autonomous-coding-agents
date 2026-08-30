// scripts/verify-graphify-ast.mjs - Verification oracle for AST parsing & graph cache
import fs from 'node:fs';
import path from 'node:path';
import { buildGraph } from './lib/ast-graph.mjs';

function verifyAst() {
  const cacheDir = '.graphify';
  const graph = buildGraph(cacheDir);

  if (!graph || !Array.isArray(graph.nodes) || !Array.isArray(graph.edges)) {
    console.error('Error: Graph format invalid');
    process.exit(1);
  }

  if (graph.nodes.length === 0) {
    console.error('Error: No nodes extracted');
    process.exit(1);
  }

  const cacheFile = path.join(cacheDir, 'graph.json');
  if (!fs.existsSync(cacheFile)) {
    console.error('Error: Cache file was not created');
    process.exit(1);
  }

  const fileContent = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
  if (fileContent.nodes.length !== graph.nodes.length) {
    console.error('Error: Cache file content mismatch');
    process.exit(1);
  }

  console.log('graphify-ast passed');
  process.exit(0);
}

verifyAst();
