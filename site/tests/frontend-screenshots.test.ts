/**
 * Keeps the frontend screenshots honest without a browser: every manifest
 * entry has a committed light PNG and its dark twin, an embedding page that
 * references the light file, and no page embeds a PNG the manifest does not
 * know about.
 */
import { describe, expect, test } from 'bun:test';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { docsConfig } from '../src/lib/docs/config';
import { checkScreenshots, imageRefs } from '../scripts/frontend-screenshots/check';
import { SCREENSHOTS, themedFile, type Screenshot } from '../scripts/frontend-screenshots/manifest';

/** A throwaway content root with the given PNGs and one README embedding `refs`. */
function corpus(pngs: string[], readme: string): string {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'docs-shots-'));
  fs.mkdirSync(path.join(root, '.gitbook/assets/frontend'), { recursive: true });
  fs.mkdirSync(path.join(root, 'using-the-frontend'), { recursive: true });
  for (const png of pngs) fs.writeFileSync(path.join(root, '.gitbook/assets/frontend', png), '');
  fs.writeFileSync(path.join(root, 'using-the-frontend/README.md'), readme);
  return root;
}

const HOME: Screenshot = { file: 'home.png', route: '/', page: 'using-the-frontend/README.md' };

describe('frontend screenshots', () => {
  test('the committed corpus passes the manifest check', () => {
    const result = checkScreenshots(docsConfig.contentDir);
    expect(result.problems).toEqual([]);
    expect(result.ok).toBe(true);
  });

  test('every manifest entry is embedded by a page under using-the-frontend/ and names the light file', () => {
    for (const shot of SCREENSHOTS) {
      expect(shot.page.startsWith('using-the-frontend/')).toBe(true);
      expect(shot.file.endsWith('--dark.png')).toBe(false);
    }
  });

  test('themedFile derives the dark twin by name', () => {
    expect(themedFile('home.png', 'light')).toBe('home.png');
    expect(themedFile('home.png', 'dark')).toBe('home--dark.png');
  });

  test('imageRefs finds only frontend PNG references', () => {
    const md = '![a](../.gitbook/assets/frontend/home.png) ![b](../.gitbook/assets/other.png) ![c](../.gitbook/assets/frontend/x.png)';
    expect(imageRefs(md)).toEqual(['home.png', 'x.png']);
  });

  test('both themes present and the light file referenced passes', () => {
    const root = corpus(['home.png', 'home--dark.png'], '![home](../.gitbook/assets/frontend/home.png)\n');
    try {
      expect(checkScreenshots(root, [HOME]).problems).toEqual([]);
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });

  test('a missing dark twin fails the check and names the entry to recapture', () => {
    const root = corpus(['home.png'], '![home](../.gitbook/assets/frontend/home.png)\n');
    try {
      const result = checkScreenshots(root, [HOME]);
      expect(result.ok).toBe(false);
      expect(result.problems).toEqual([expect.stringContaining('missing dark PNG home--dark.png for manifest entry home.png')]);
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });

  test('a page that references the dark twin directly fails the check', () => {
    const root = corpus(['home.png', 'home--dark.png'], '![home](../.gitbook/assets/frontend/home--dark.png)\n');
    try {
      const problems = checkScreenshots(root, [HOME]).problems;
      expect(problems.some((p) => p.includes('references home--dark.png directly'))).toBe(true);
      expect(problems.some((p) => p.includes('does not embed home.png'))).toBe(true);
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });

  test('a stale reference, a missing PNG, and an orphan PNG each fail the check', () => {
    const root = corpus(['orphan.png'], '![home](../.gitbook/assets/frontend/home.png)\n![gone](../.gitbook/assets/frontend/gone.png)\n');
    try {
      const result = checkScreenshots(root, [HOME]);
      expect(result.ok).toBe(false);
      expect(result.problems.some((p) => p.includes('missing light PNG home.png for manifest entry home.png'))).toBe(true);
      expect(result.problems.some((p) => p.includes('references gone.png'))).toBe(true);
      expect(result.problems.some((p) => p.includes('orphan PNG'))).toBe(true);
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });
});
