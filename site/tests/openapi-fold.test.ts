import { describe, expect, test } from 'bun:test';
import fs from 'node:fs/promises';
import path from 'node:path';

import { docsConfig } from '../src/lib/docs/config';
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

describe('foldApiDocs', () => {
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
    ['api/README.md', '# BitBadges API\n\nIntro text.\n\n## API keys\n\nKeys.\n'],
    ['api/pagination-and-views.md', '# Pagination and views\n\nPaging.\n\n## How it works\n\nSteps.\n'],
    ['api/swaps.md', '# Swaps\n\nSwapping.\n'],
    ['api/self-hosting.md', '# Self-hosting\n\nHosting.\n\n## Docker\n\nRun.\n'],
    ['api/claims/README.md', '# Claims\n\nClaims intro.\n\n## Trust model\n\nTrust.\n'],
    ['api/claims/endpoints.md', '# Claims\n\nRoutes. See [plugins](plugins.md).\n\n## Complete a claim\n\nPOST.\n'],
    ['api/claims/plugins.md', '# Plugins\n\nPlugin ids.\n'],
    ['api/claims/dynamic-stores.md', '# Dynamic stores\n\nStores.\n'],
    ['api/sign-in/README.md', '# Sign In with BitBadges\n\nSIWBB intro.\n'],
    ['api/sign-in/setup.md', '# Setup\n\nRegister.\n'],
    ['api/sign-in/authorization-url.md', '# Authorization URL\n\nBuild it.\n'],
    ['api/sign-in/callback.md', '# Callback\n\nHandle it.\n'],
    ['api/sign-in/verification.md', '# Verification\n\nExchange.\n'],
    ['api/sign-in/frameworks.md', '# Frameworks\n\nAuth0.\n'],
  ]);

  test('info.description is one section per intro page, in order, each with its own H1', () => {
    const { spec: out } = foldApiDocs(spec(), pages);
    const description = out.info.description as string;
    // Scalar shows the lowest heading level plus one below it. Keeping a `#`
    // per page means the page is an entry and its `##` sections nest under it.
    const order = ['# Overview', 'Intro text.', '## API keys', '# Pagination and views', '## How it works', '# Swaps', '# Self-hosting', '## Docker'];
    const positions = order.map((s) => description.indexOf(s));
    expect(positions.every((p) => p >= 0)).toBe(true);
    expect([...positions].sort((a, b) => a - b)).toEqual(positions);
    expect(description.startsWith('# Overview')).toBe(true);
    expect(description).not.toContain('Old intro');
    expect(description).not.toContain('# BitBadges API');
  });

  test('sets the Claims and Sign In tag descriptions from their page groups', () => {
    const { spec: out } = foldApiDocs(spec(), pages);
    const tags = Object.fromEntries(out.tags.map((t: { name: string; description: string }) => [t.name, t.description]));

    expect(tags.Claims.startsWith('Claims intro.')).toBe(true);
    for (const s of ['## Trust model', '## Endpoints', '### Complete a claim', '## Plugins', '## Dynamic stores']) {
      expect(tags.Claims).toContain(s);
    }
    expect(tags.Claims.indexOf('## Endpoints')).toBeLessThan(tags.Claims.indexOf('## Plugins'));
    expect(tags.Claims).toContain('[plugins](/api/claims/plugins)');

    expect(tags['Sign In with BitBadges'].startsWith('SIWBB intro.')).toBe(true);
    const signIn = ['## Setup', '## Authorization URL', '## Callback', '## Verification', '## Frameworks'];
    const positions = signIn.map((s) => tags['Sign In with BitBadges'].indexOf(s));
    expect(positions.every((p) => p >= 0)).toBe(true);
    expect([...positions].sort((a, b) => a - b)).toEqual(positions);

    expect(tags.Tokens).toBe('Tokens');
  });

  test('reports which tags received folded text and fails loudly on a missing tag', () => {
    const { report } = foldApiDocs(spec(), pages);
    expect(report.tags).toEqual(['Claims', 'Sign In with BitBadges']);
    const noClaims = spec();
    noClaims.tags = noClaims.tags.filter((t) => t.name !== 'Claims');
    expect(() => foldApiDocs(noClaims, pages)).toThrow(/Claims/);
  });

  test('fails loudly when a page listed in the fold is missing', () => {
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

  test('sanitising after the fold keeps the folded sections when no grouping is requested', () => {
    const { spec: folded } = foldApiDocs(spec(), pages);
    const { spec: out } = sanitizeOpenApi(folded);
    const description = out.info.description as string;
    expect(description.startsWith('# Overview')).toBe(true);
    expect(description).toContain('\n# Swaps');
    expect(description).toContain('\n# Self-hosting');
  });
});

describe('fold guard — every api/*.md page on disk is folded', () => {
  test('no page under api/ is missing from API_FOLD', async () => {
    const root = path.join(docsConfig.contentDir, 'api');
    const onDisk: string[] = [];
    const walk = async (dir: string) => {
      for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) await walk(full);
        else if (entry.name.endsWith('.md')) onDisk.push(path.relative(docsConfig.contentDir, full));
      }
    };
    await walk(root);
    expect(onDisk.sort()).toEqual(foldedPageFiles(API_FOLD).sort());
  });

  test('the real corpus folds without error and lands on real tags', async () => {
    const pages = new Map<string, string>();
    for (const file of foldedPageFiles(API_FOLD)) {
      pages.set(file, await fs.readFile(path.join(docsConfig.contentDir, file), 'utf8'));
    }
    const source = JSON.parse(await fs.readFile(path.resolve(process.cwd(), 'openapi/openapi.json'), 'utf8'));
    const { spec, report } = foldApiDocs(source, pages);
    expect(report.tags).toEqual(['Claims', 'Sign In with BitBadges']);
    expect(spec.info.description).toContain('# Pagination and views');
    expect(spec.info.description).not.toContain('](README.md)');
    expect(spec.info.description).not.toContain('also part of the');
    expect(spec.info.description).not.toContain('{%');
    const claims = spec.tags.find((t: { name: string }) => t.name === 'Claims').description as string;
    expect(claims).toContain('## Endpoints');
    expect(claims).not.toMatch(/\]\([^)]*\.md[)#]/);
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
