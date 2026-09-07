import { describe, expect, test } from 'bun:test';

import { renderCorpus } from '../scripts/gen-for-llms';

describe('for-llms corpus dump', () => {
  test('emits one File section per page, in the order given', () => {
    const out = renderCorpus([
      { file: 'README.md', body: '# BitBadges\n\nIntro.\n' },
      { file: 'cli/build.md', body: '# bb build\n\nBuilders.\n' },
    ]);
    expect(out).toContain('## File: README.md');
    expect(out).toContain('## File: cli/build.md');
    expect(out.indexOf('README.md')).toBeLessThan(out.indexOf('cli/build.md'));
    expect(out).toContain('Builders.');
  });

  test('the header states the page count and the exclusions', () => {
    const out = renderCorpus([{ file: 'a.md', body: 'x' }]);
    expect(out.startsWith('# BitBadges documentation, every page in one file')).toBe(true);
    expect(out).toContain('Page count: 1');
    expect(out).toContain('/sdk/reference');
  });

  test('the built file is served and excludes the generated trees', async () => {
    const file = Bun.file(new URL('../public/for-llms.txt', import.meta.url));
    expect(await file.exists()).toBe(true);
    const text = await file.text();
    expect(text).toContain('## File: README.md');
    expect(text).not.toContain('## File: sdk/reference/');
    expect(text).not.toContain('## File: chain/proto/');
  });
});
