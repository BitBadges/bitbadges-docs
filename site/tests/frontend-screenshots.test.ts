/**
 * Keeps the frontend screenshots honest without a browser: every manifest
 * entry has a committed PNG and an embedding page, and no page embeds a PNG the
 * manifest does not know about.
 */
import { describe, expect, test } from 'bun:test';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { docsConfig } from '../src/lib/docs/config';
import { checkScreenshots, imageRefs } from '../scripts/frontend-screenshots/check';
import { SCREENSHOTS } from '../scripts/frontend-screenshots/manifest';

describe('frontend screenshots', () => {
  test('the committed corpus passes the manifest check', () => {
    const result = checkScreenshots(docsConfig.contentDir);
    expect(result.problems).toEqual([]);
    expect(result.ok).toBe(true);
  });

  test('every manifest entry is embedded by a page under using-the-frontend/', () => {
    for (const shot of SCREENSHOTS) expect(shot.page.startsWith('using-the-frontend/')).toBe(true);
  });

  test('imageRefs finds only frontend PNG references', () => {
    const md = '![a](../.gitbook/assets/frontend/home.png) ![b](../.gitbook/assets/other.png) ![c](../.gitbook/assets/frontend/x.png)';
    expect(imageRefs(md)).toEqual(['home.png', 'x.png']);
  });

  test('a stale reference, a missing PNG, and an orphan PNG each fail the check', () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'docs-shots-'));
    try {
      fs.mkdirSync(path.join(root, '.gitbook/assets/frontend'), { recursive: true });
      fs.mkdirSync(path.join(root, 'using-the-frontend'), { recursive: true });
      fs.writeFileSync(path.join(root, '.gitbook/assets/frontend/orphan.png'), '');
      fs.writeFileSync(
        path.join(root, 'using-the-frontend/README.md'),
        '![home](../.gitbook/assets/frontend/home.png)\n![gone](../.gitbook/assets/frontend/gone.png)\n'
      );
      const result = checkScreenshots(root, [{ file: 'home.png', route: '/', page: 'using-the-frontend/README.md' }]);
      expect(result.ok).toBe(false);
      expect(result.problems.some((p) => p.includes('missing PNG for manifest entry home.png'))).toBe(true);
      expect(result.problems.some((p) => p.includes('references gone.png'))).toBe(true);
      expect(result.problems.some((p) => p.includes('orphan PNG'))).toBe(true);
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });
});
