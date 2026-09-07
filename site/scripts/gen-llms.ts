/**
 * Regenerate ../llms.txt from SUMMARY.md and each page's `description:`.
 * Run after any nav change: `bun scripts/gen-llms.ts`.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

import { docsConfig } from '../src/lib/docs/config';
import { parseSummary, type NavNode } from '../src/lib/docs/summary';

const SITE = 'https://docs.bitbadges.io';
const summary = await fs.readFile(path.join(docsConfig.contentDir, 'SUMMARY.md'), 'utf8');
const groups = parseSummary(summary);

async function describe(route: string): Promise<string> {
  const rel = route === '/' ? 'README.md' : route.slice(1);
  for (const candidate of [`${rel}.md`, path.join(rel, 'README.md')]) {
    try {
      const raw = await fs.readFile(path.join(docsConfig.contentDir, candidate), 'utf8');
      const desc = matter(raw).data.description;
      return typeof desc === 'string' ? desc.trim() : '';
    } catch {}
  }
  return '';
}

async function lines(nodes: NavNode[], depth = 0): Promise<string[]> {
  const out: string[] = [];
  for (const n of nodes) {
    const url = n.external ? n.href : `${SITE}${n.href}`;
    const desc = n.external ? '' : await describe(n.href);
    out.push(`${'  '.repeat(depth)}- [${n.title}](${url})${desc ? `: ${desc}` : ''}`);
    out.push(...(await lines(n.children, depth + 1)));
  }
  return out;
}

const body: string[] = [
  '# BitBadges',
  '',
  '> BitBadges is a Cosmos SDK L1 with a native token standard (x/tokenization): collections, time-based balances, three-level transfer approvals with on-chain criteria, manager permissions, IBC wrapping, and EVM precompiles. Off-chain: a REST API, a TypeScript SDK, a CLI (`bb`), claims with plugins, Sign In with BitBadges, and MCP builder tools for AI agents.',
  '',
  `Full corpus as one file: ${SITE}/for-llms.txt. OpenAPI: ${SITE}/openapi.json. API reference: ${SITE}/api-reference.`,
  '',
  'URL patterns: /token-standard/messages/msg-<kebab>, /token-standard/queries/<kebab>, /token-standard/approval-criteria/<kebab>, /cli/<group>, /api/..., /agents/skills/<skill-id>.',
  '',
];
for (const g of groups) {
  body.push(`## ${g.title ?? 'Docs'}`, '', ...(await lines(g.items)), '');
}
await fs.writeFile(path.join(docsConfig.contentDir, 'llms.txt'), body.join('\n'));
console.log(`llms.txt: ${groups.length} sections written`);
