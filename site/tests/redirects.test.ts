import { describe, expect, test } from 'bun:test';
import { docsConfig } from '../src/lib/docs/config';
import { getAllRoutes } from '../src/lib/docs/content';
import { loadRedirects, parseRedirects } from '../src/lib/docs/redirects';

describe('parseRedirects', () => {
  test('parses tab-separated old/new rows, skipping comments and blank lines', () => {
    const tsv = `# old\tnew
/learn/permissions\t/token-standard/permissions

  # indented comment
/overview/use-cases\t/about/use-cases
`;
    expect(parseRedirects([tsv])).toEqual([
      { source: '/learn/permissions', destination: '/token-standard/permissions' },
      { source: '/overview/use-cases', destination: '/about/use-cases' },
    ]);
  });

  test('merges several files and dedupes by source, first file wins', () => {
    const a = '/a\t/x\n/b\t/y\n';
    const b = '/a\t/z\n/c\t/y\n';
    expect(parseRedirects([a, b])).toEqual([
      { source: '/a', destination: '/x' },
      { source: '/b', destination: '/y' },
      { source: '/c', destination: '/y' },
    ]);
  });

  test('drops rows where old equals new and rows without two columns', () => {
    expect(parseRedirects(['/same\t/same\n/only-one-column\n/ok\t/fine\n'])).toEqual([
      { source: '/ok', destination: '/fine' },
    ]);
  });

  test('normalises paths: leading slash added, trailing slash and whitespace removed', () => {
    expect(parseRedirects(['learn/x.md \t token-standard/x/ \n'])).toEqual([
      { source: '/learn/x', destination: '/token-standard/x' },
    ]);
  });

  test('empty input yields an empty list', () => {
    expect(parseRedirects([])).toEqual([]);
    expect(parseRedirects(['# nothing here\n'])).toEqual([]);
  });
});

/**
 * The redirect tables describe the restructured tree. Until that tree is
 * swapped in, every source is still a live page and no destination exists, so
 * both checks only warn. `DOCS_REDIRECTS_STRICT=1` turns them into failures.
 */
describe('redirects against the corpus', () => {
  const strict = process.env.DOCS_REDIRECTS_STRICT === '1';
  const mode = strict ? 'strict' : 'warn-only until the content swap';

  const check = (what: string, offenders: string[]) => {
    if (strict) expect(offenders).toEqual([]);
    else if (offenders.length) {
      console.warn(`redirects: ${offenders.length} ${what} (set DOCS_REDIRECTS_STRICT=1 to fail):\n  ${offenders.join('\n  ')}`);
    }
  };

  test(`no source is a live route (${mode})`, async () => {
    const routes = new Set(await getAllRoutes());
    const redirects = await loadRedirects(docsConfig.redirectsDir);
    check('source(s) are still live routes', redirects.map((r) => r.source).filter((s) => routes.has(s)));
  });

  test(`every destination resolves (${mode})`, async () => {
    const routes = new Set([...(await getAllRoutes()), '/api-reference']);
    const redirects = await loadRedirects(docsConfig.redirectsDir);
    if (redirects.length === 0) return;
    check(
      'destination(s) do not resolve yet',
      redirects.filter((r) => !routes.has(r.destination.replace(/#.*$/, ''))).map((r) => `${r.source} -> ${r.destination}`),
    );
  });
});
