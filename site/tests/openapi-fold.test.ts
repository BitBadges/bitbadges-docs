import { describe, expect, test } from 'bun:test';
import fs from 'node:fs/promises';
import path from 'node:path';

import { docsConfig } from '../src/lib/docs/config';
import { getNav } from '../src/lib/docs/content';
import {
  API_FOLD,
  demoteHeadings,
  foldApiDocs,
  foldedPageFiles,
  prepareFoldedPage,
  rewriteMarkdownLinks,
  sanitizeOpenApi,
  repointSdkLinks,
} from '../src/lib/docs/openapi';
import { filePathToRoute } from '../src/lib/docs/paths';
import { flattenNav } from '../src/lib/docs/summary';

describe('rewriteMarkdownLinks', () => {
  test('rewrites relative .md links to site routes, keeping anchors', () => {
    const md = 'See [setup](../agents/setup.md) and [plugins](claims/plugins.md#custom) or [index](claims/README.md).';
    expect(rewriteMarkdownLinks('api/README.md', md)).toBe(
      'See [setup](/agents/setup) and [plugins](/api/claims/plugins#custom) or [index](/api/claims).',
    );
  });

  test('leaves external, absolute and anchor-only links untouched', () => {
    const md = '[a](https://bitbadges.io/x) [b](/api-reference) [c](#section) [d](mailto:x@y.z)';
    expect(rewriteMarkdownLinks('api/swaps.md', md)).toBe(md);
  });

  test('prefixes internal routes with the base path when mounted under one', () => {
    const md = '[ref](/api-reference) [sdk](../sdk/README.md) [ext](https://x.y/z)';
    expect(rewriteMarkdownLinks('api/README.md', md, '/docs')).toBe(
      '[ref](/docs/api-reference) [sdk](/docs/sdk) [ext](https://x.y/z)',
    );
  });

  test('does not touch link-like text inside fenced code', () => {
    const md = '```ts\nconst x = [a](b.md);\n```\n[real](b.md)';
    expect(rewriteMarkdownLinks('api/a.md', md)).toBe('```ts\nconst x = [a](b.md);\n```\n[real](/api/b)');
  });
});

describe('prepareFoldedPage', () => {
  const source = `---
description: "Front matter."
---

# Pagination and views

Lead paragraph with a [link](README.md).

This page is also part of the [API reference](/api-reference).

<!-- an editor note -->

## How it works

{% hint style="info" %}
The \`views\` object is **planned** for deprecation.
{% endhint %}

### Deep

\`\`\`bash
# not a heading
\`\`\`
`;

  const page = prepareFoldedPage('api/pagination-and-views.md', source);

  test('takes the title from the H1 and drops front matter and the H1', () => {
    expect(page.title).toBe('Pagination and views');
    expect(page.body).not.toContain('Front matter');
    expect(page.body).not.toContain('# Pagination and views');
    expect(page.body).toContain('Lead paragraph with a [link](/api).');
  });

  test('drops the "also part of the API reference" line, comments and liquid tags', () => {
    expect(page.body).not.toContain('also part of the');
    expect(page.body).not.toContain('<!--');
    expect(page.body).not.toContain('{%');
  });

  test('turns a hint into a blockquote', () => {
    expect(page.body).toContain('> The `views` object is **planned** for deprecation.');
  });

  test('keeps headings at their authored level and fenced code verbatim', () => {
    expect(page.body).toContain('\n## How it works');
    expect(page.body).toContain('\n### Deep');
    expect(page.body).toContain('# not a heading');
  });

  test('an explicit title overrides the H1', () => {
    expect(prepareFoldedPage('api/claims/endpoints.md', '# Claims\n\nbody', 'Endpoints').title).toBe('Endpoints');
  });
});

describe('demoteHeadings', () => {
  test('shifts every heading one level, ignoring fenced code', () => {
    expect(demoteHeadings('# A\n\n## B\n\n```\n# code\n```\n')).toBe('## A\n\n### B\n\n```\n# code\n```\n');
  });
});

describe('foldApiDocs — the generated introduction', () => {
  const spec = () => ({
    openapi: '3.1.0',
    info: { title: 'T', version: '1', description: '# Old intro\n\nreplaced' },
    tags: [
      { name: 'Assets', description: 'Assets and swaps' },
      { name: 'Claims', description: 'Endpoints for managing claims' },
      { name: 'Sign In with BitBadges', description: 'Auth' },
      { name: 'Tokens', description: 'Tokens' },
    ],
    paths: {},
  });

  const pages = new Map<string, string>([
    ['api/README.md', '# BitBadges API\n\nIntro text.\n\n## API Keys\n\nKeys.\n'],
    ['api/pagination-and-views.md', '# Pagination and Views\n\nPaging.\n\n## How it works\n\nSteps.\n'],
    ['api/swaps.md', '# Swaps\n\nSwapping.\n'],
    ['api/claims/README.md', '# Claims\n\nClaims intro.\n\n## Trust model\n\nTrust.\n'],
    ['api/claims/endpoints.md', '# Claims\n\nRoutes. See [plugins](plugins.md).\n\n## Complete a claim\n\nPOST.\n'],
    ['api/claims/plugins.md', '# Plugins\n\nPlugin ids.\n'],
    ['api/claims/dynamic-stores.md', '# Dynamic Stores\n\nStores.\n'],
    ['api/sign-in/README.md', '# Sign In with BitBadges\n\nSIWBB intro.\n'],
    ['api/sign-in/setup.md', '# Setup\n\nRegister.\n'],
    ['api/sign-in/authorization-url.md', '# Authorization URL\n\nBuild it.\n'],
    ['api/sign-in/callback.md', '# Callback\n\nHandle it.\n'],
    ['api/sign-in/verification.md', '# Verification\n\nExchange.\n'],
    ['api/sign-in/frameworks.md', '# Frameworks\n\nAuth0.\n'],
  ]);

  test('states the base URL and where to get an API key, linking the overview page', () => {
    const description = foldApiDocs(spec(), pages).spec.info.description as string;
    expect(description.startsWith('# BitBadges API')).toBe(true);
    expect(description).toContain('`https://api.bitbadges.io`');
    expect(description).toContain('`/api/v0`');
    expect(description).toContain('`x-api-key`');
    expect(description).toContain('https://bitbadges.io/developer');
    expect(description).toContain('[How to get an API key](/api#api-keys)');
    expect(description).not.toContain('Old intro');
  });

  test('links every page of the API tab, in order, titled from the page itself', () => {
    const description = foldApiDocs(spec(), pages).spec.info.description as string;
    const links = [...description.matchAll(/^\s*- \[([^\]]+)\]\(([^)]+)\)$/gm)].map((m) => [m[1], m[2]]);
    expect(links).toEqual([
      ['Overview', '/api'],
      ['Pagination and Views', '/api/pagination-and-views'],
      ['Swaps', '/api/swaps'],
      ['Claims', '/api/claims'],
      ['Endpoints', '/api/claims/endpoints'],
      ['Plugins', '/api/claims/plugins'],
      ['Dynamic Stores', '/api/claims/dynamic-stores'],
      ['Sign In with BitBadges', '/api/sign-in'],
      ['Setup', '/api/sign-in/setup'],
      ['Authorization URL', '/api/sign-in/authorization-url'],
      ['Callback', '/api/sign-in/callback'],
      ['Verification', '/api/sign-in/verification'],
      ['Frameworks', '/api/sign-in/frameworks'],
    ]);
    // Sub-pages sit under their group, the same shape as SUMMARY.md.
    expect(description).toContain('  - [Plugins](/api/claims/plugins)');
    expect(description).toContain('\n- [Swaps](/api/swaps)');
  });

  test('copies no page body into the document — the pages are served, not duplicated', () => {
    const { spec: out } = foldApiDocs(spec(), pages);
    const serialized = JSON.stringify(out);
    for (const body of ['Paging.', 'Swapping.', 'Claims intro.', 'SIWBB intro.', 'Plugin ids.', 'Complete a claim']) {
      expect(serialized).not.toContain(body);
    }
    expect((out.info.description as string).split('\n').length).toBeLessThan(30);
  });

  test('mounts every internal link under the base path', () => {
    const description = foldApiDocs(spec(), pages, { basePath: '/docs' }).spec.info.description as string;
    expect(description).toContain('[Swaps](/docs/api/swaps)');
    expect(description).toContain('[How to get an API key](/docs/api#api-keys)');
    expect(description).toContain('(https://bitbadges.io/developer)');
  });

  test('appends a guide link to the mapped tags and leaves the upstream text and other tags alone', () => {
    const { spec: out, report } = foldApiDocs(spec(), pages);
    const tags = Object.fromEntries(out.tags.map((t: { name: string; description: string }) => [t.name, t.description]));

    expect(tags.Claims).toBe('Endpoints for managing claims\n\nGuide: [Claims](/api/claims).');
    expect(tags['Sign In with BitBadges']).toBe(
      'Auth\n\nGuide: [Sign In with BitBadges](/api/sign-in).',
    );
    expect(tags.Tokens).toBe('Tokens');
    expect(report.tags).toEqual(['Claims', 'Sign In with BitBadges']);
  });

  test('fails loudly on a missing tag or a missing page', () => {
    const noClaims = spec();
    noClaims.tags = noClaims.tags.filter((t) => t.name !== 'Claims');
    expect(() => foldApiDocs(noClaims, pages)).toThrow(/Claims/);

    const partial = new Map(pages);
    partial.delete('api/swaps.md');
    expect(() => foldApiDocs(spec(), partial)).toThrow(/api\/swaps\.md/);
  });

  test('does not mutate its input', () => {
    const input = spec();
    foldApiDocs(input, pages);
    expect(input.info.description).toBe('# Old intro\n\nreplaced');
    expect(input.tags.find((t: { name: string }) => t.name === 'Claims')?.description).toBe(
      'Endpoints for managing claims',
    );
  });

  test('sanitising after the introduction leaves it intact when no grouping is requested', () => {
    const { spec: folded } = foldApiDocs(spec(), pages);
    const description = sanitizeOpenApi(folded).spec.info.description as string;
    expect(description.startsWith('# BitBadges API')).toBe(true);
    expect(description).toContain('- [Swaps](/api/swaps)');
  });
});

/** Every markdown page under `api/`, content-relative and sorted. */
const onDisk = await (async () => {
  const root = path.join(docsConfig.contentDir, 'api');
  const found: string[] = [];
  const walk = async (dir: string) => {
    for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (entry.name.endsWith('.md')) found.push(path.relative(docsConfig.contentDir, full));
    }
  };
  await walk(root);
  return found.sort();
})();

describe('orphan guard — no api/*.md page disappears', () => {

  test('every page on disk is reachable from SUMMARY.md or from the introduction', async () => {
    const navRoutes = new Set(flattenNav(await getNav()).map((n) => n.href));
    const linked = new Set(foldedPageFiles(API_FOLD));
    const orphans = onDisk.filter((file) => !linked.has(file) && !navRoutes.has(filePathToRoute(file)));
    expect(orphans).toEqual([]);
  });

  test('the API tab of SUMMARY.md lists every page under api/, plus the reference', async () => {
    const api = (await getNav()).find((group) => group.title === 'API');
    expect(api).toBeDefined();
    const hrefs = flattenNav([api!]).map((n) => n.href);
    expect([...hrefs].sort()).toEqual([...onDisk.map(filePathToRoute), '/api-reference'].sort());
    // Overview first, then the Scalar reference: a reader looking for the
    // route list should not have to scroll past every guide to find it.
    expect(hrefs[0]).toBe('/api');
    expect(hrefs[1]).toBe('/api-reference');
  });

  test('the introduction links only to pages that exist on disk', () => {
    expect(foldedPageFiles(API_FOLD).sort()).toEqual(onDisk);
  });

  test('the real corpus and the real spec produce the introduction and the tag pointers', async () => {
    const pages = new Map<string, string>();
    for (const file of foldedPageFiles(API_FOLD)) {
      pages.set(file, await fs.readFile(path.join(docsConfig.contentDir, file), 'utf8'));
    }
    const source = JSON.parse(await fs.readFile(path.resolve(process.cwd(), 'openapi/openapi.json'), 'utf8'));
    const { spec, report } = foldApiDocs(source, pages);
    expect(report.tags).toEqual(['Claims', 'Sign In with BitBadges']);

    const description = spec.info.description as string;
    expect(description).toContain('- [Pagination and Views](/api/pagination-and-views)');
    expect(description).toContain('[How to get an API key](/api#api-keys)');
    expect(description).not.toMatch(/\]\([^)]*\.md[)#]/);
    expect(description).not.toContain('{%');

    const claims = spec.tags.find((t: { name: string }) => t.name === 'Claims').description as string;
    expect(claims.endsWith('Guide: [Claims](/api/claims).')).toBe(true);
  });
});

describe('sdk link repointing', () => {
  test('rewrites GitHub Pages TypeDoc links at the in-site SDK reference', () => {
    const { value, count } = repointSdkLinks({
      a: '[Payload](https://bitbadges.github.io/bitbadgesjs/interfaces/iGetAccountPayload)',
      b: ['[Fn](https://bitbadges.github.io/bitbadgesjs/classes/BitBadgesAPI.html#getaccount)'],
      c: 'https://github.com/BitBadges/bitbadgesjs stays',
    });
    expect(count).toBe(2);
    expect(value.a).toBe('[Payload](/sdk/reference/interfaces/i-get-account-payload)');
    expect(value.b[0]).toBe('[Fn](/sdk/reference/classes/bit-badges-api#getaccount)');
    expect(value.c).toContain('github.com/BitBadges/bitbadgesjs');
  });

  test('the served spec carries no GitHub Pages links', async () => {
    const spec = await Bun.file(new URL('../public/openapi.json', import.meta.url)).text();
    expect(spec).not.toContain('bitbadges.github.io');
  });
});
