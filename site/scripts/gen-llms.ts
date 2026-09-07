/**
 * Regenerate ../llms.txt from SUMMARY.md and each page's `description:`.
 * Run after any nav change: `bun scripts/gen-llms.ts`.
 *
 * llms.txt is a curated index an agent reads whole, so the generated
 * reference trees are collapsed to one line each: `sdk/reference` alone is
 * 1666 nav entries of TypeDoc and `chain/proto` another 68, which would bury
 * the hand-written corpus and change on every regeneration of those trees.
 * Both stay browsable on the site and reachable from the line that replaces
 * them. `site/tests/llms.test.ts` fails when the committed file drifts from
 * what this writes.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

import { docsConfig } from '../src/lib/docs/config';
import { parseSummary, type NavNode } from '../src/lib/docs/summary';

const SITE = docsConfig.siteUrl;
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

/**
 * Generated trees: the route that keeps its own entry, and the note that
 * replaces every page below it.
 */
const COLLAPSED: { prefix: string; note: string }[] = [
  { prefix: '/sdk/reference', note: 'Generated TypeDoc for every exported class, function and type. Browse on the site; the full corpus dump excludes it too.' },
  { prefix: '/chain/proto', note: 'Generated reference for every protobuf message and service in the chain modules. Browse on the site.' },
];

export async function lines(nodes: NavNode[], depth = 0): Promise<string[]> {
  const out: string[] = [];
  for (const n of nodes) {
    const url = n.external ? n.href : `${SITE}${n.href}`;
    const collapsed = n.external ? undefined : COLLAPSED.find((c) => c.prefix === n.href);
    const desc = collapsed ? collapsed.note : n.external ? '' : await describe(n.href);
    out.push(`${'  '.repeat(depth)}- [${n.title}](${url})${desc ? `: ${desc}` : ''}`);
    if (collapsed) continue;
    out.push(...(await lines(n.children, depth + 1)));
  }
  return out;
}

export async function render(): Promise<string> {
const body: string[] = [
  '# BitBadges',
  '',
  '> BitBadges is a Cosmos SDK L1 with a native token standard (x/tokenization): collections, time-based balances, three-level transfer approvals with on-chain criteria, manager permissions, IBC wrapping, and EVM precompiles. Off-chain: a REST API, a TypeScript SDK, a CLI (`bb`), claims with plugins, Sign In with BitBadges, and MCP builder tools for AI agents.',
  '',
  `Full corpus as one file: ${SITE}/llms-full.txt (also served as ${SITE}/for-llms.txt). Every page is also served as Markdown at its URL plus .md, for example ${SITE}/agents/setup.md. OpenAPI: ${SITE}/openapi.json. API reference: ${SITE}/api-reference.`,
  '',
  'URL patterns: /token-standard/messages/msg-<kebab>, /token-standard/queries/<kebab>, /token-standard/approval-criteria/<kebab>, /cli/<group>, /api/..., /agents/skills/<skill-id>.',
  '',
];
for (const g of groups) {
  body.push(`## ${g.title ?? 'Docs'}`, '', ...(await lines(g.items)), '');
}
  return body.join('\n');
}

export const LLMS_PATH = path.join(docsConfig.contentDir, 'llms.txt');

if (import.meta.main) {
  const text = await render();
  await fs.writeFile(LLMS_PATH, text);
  console.log(`llms.txt: ${groups.length} sections, ${text.split('\n').length} lines written`);
}
