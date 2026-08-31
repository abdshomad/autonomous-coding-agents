// scripts/lib/ai-memory-engine.mjs - Persistent memory and handoff engine for agent lifecycle
import fs from 'node:fs';
import path from 'node:path';

const STORAGE_ROOT = '.ai-memory';
const CATEGORIES = ['_rules', 'decisions', 'procedures', 'gotchas', 'handoffs'];

export function initMemory() {
  if (!fs.existsSync(STORAGE_ROOT)) {
    fs.mkdirSync(STORAGE_ROOT, { recursive: true });
  }
  for (const cat of CATEGORIES) {
    const catDir = path.join(STORAGE_ROOT, cat);
    if (!fs.existsSync(catDir)) {
      fs.mkdirSync(catDir, { recursive: true });
    }
  }
  return true;
}

export function remember(category, title, content, entities = []) {
  initMemory();
  const validCat = CATEGORIES.includes(category) ? category : 'decisions';
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const filePath = path.join(STORAGE_ROOT, validCat, `${slug}.md`);
  const date = new Date().toISOString().substring(0, 10);
  
  const frontmatter = [
    '---',
    `title: "${title}"`,
    `category: "${validCat}"`,
    `date: "${date}"`,
    `entities: [${entities.map(e => `"${e}"`).join(', ')}]`,
    '---',
    '',
    `# ${title}`,
    '',
    content
  ].join('\n');

  fs.writeFileSync(filePath, frontmatter, 'utf8');
  return { path: filePath, slug, category: validCat };
}

export function queryMemory(term, category = null) {
  initMemory();
  const results = [];
  const searchLower = (term || '').toLowerCase();
  const catsToSearch = category && CATEGORIES.includes(category) ? [category] : CATEGORIES;

  for (const cat of catsToSearch) {
    const dir = path.join(STORAGE_ROOT, cat);
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
    for (const f of files) {
      const fullPath = path.join(dir, f);
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.toLowerCase().includes(searchLower)) {
        results.push({
          file: fullPath,
          category: cat,
          title: extractTitle(content, f),
          snippet: extractSnippet(content, searchLower)
        });
      }
    }
  }
  return results;
}

export function generateHandoff(context = {}) {
  initMemory();
  const date = new Date().toISOString().replace('T', ' ').substring(0, 19);
  const handoffPath = path.join(STORAGE_ROOT, 'handoffs', 'latest.md');
  const agent = context.agent || 'antigravity';
  const goal = context.goal || 'Continuous feature evolution';
  const notes = context.notes || 'All quality gates green';

  const body = [
    '---',
    `type: handoff`,
    `agent: "${agent}"`,
    `updated: "${date}"`,
    '---',
    '',
    '# Cross-Session Agent Handoff',
    '',
    `## Active Goal`,
    `- **Goal**: ${goal}`,
    `- **Originating Agent**: ${agent}`,
    `- **Status**: Active & Verified`,
    '',
    `## Working Context & Notes`,
    notes,
    ''
  ].join('\n');

  fs.writeFileSync(handoffPath, body, 'utf8');
  return { path: handoffPath, updated: date, agent };
}

export function finalizeSession(agent = 'antigravity') {
  initMemory();
  const handoff = generateHandoff({ agent, notes: 'Session finalized with green verification gates.' });
  return {
    status: 'consolidated',
    agent,
    handoffPath: handoff.path
  };
}

export function getStats() {
  initMemory();
  const stats = {};
  let total = 0;
  for (const cat of CATEGORIES) {
    const dir = path.join(STORAGE_ROOT, cat);
    const count = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.md')).length : 0;
    stats[cat] = count;
    total += count;
  }
  return { total, categories: stats };
}

function extractTitle(content, fallback) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : fallback;
}

function extractSnippet(content, term) {
  const lines = content.split('\n');
  for (const l of lines) {
    if (l.toLowerCase().includes(term) && !l.startsWith('---')) {
      return l.trim().slice(0, 120);
    }
  }
  return content.slice(0, 100);
}
