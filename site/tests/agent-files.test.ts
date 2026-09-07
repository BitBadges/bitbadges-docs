/**
 * The agent corpus download affordance: size formatting, base-path-aware URLs,
 * and the guarantee that the files it offers actually exist in the corpus.
 */
import { describe, expect, test } from 'bun:test';
import fs from 'node:fs/promises';
import path from 'node:path';

import { AGENT_FILE_SPECS, AGENT_GUIDE_ROUTE, formatSize, readAgentFiles } from '../src/components/docs/AgentFiles';
import { getAllRoutes } from '../src/lib/docs/content';
import { docsConfig } from '../src/lib/docs/config';

describe('formatSize', () => {
  test('reports bytes below a kilobyte', () => {
    expect(formatSize(0)).toBe('0 B');
    expect(formatSize(1023)).toBe('1023 B');
  });

  test('reports whole kilobytes', () => {
    expect(formatSize(1024)).toBe('1 KB');
    expect(formatSize(46783)).toBe('46 KB');
    expect(formatSize(1024 * 1023)).toBe('1023 KB');
  });

  test('reports megabytes with one decimal until ten', () => {
    expect(formatSize(1024 * 1024)).toBe('1.0 MB');
    expect(formatSize(1654298)).toBe('1.6 MB');
    expect(formatSize(1024 * 1024 * 12.4)).toBe('12 MB');
  });
});

describe('readAgentFiles', () => {
  test('measures the real corpus files rather than quoting a fixed number', async () => {
    const files = await readAgentFiles({ basePath: '' });
    expect(files.map((f) => f.name)).toEqual(AGENT_FILE_SPECS.map((s) => s.name));

    for (const file of files) {
      const stat = await fs.stat(path.join(process.cwd(), 'public', file.name));
      expect(stat.size).toBeGreaterThan(1024);
      expect(file.size).toBe(formatSize(stat.size));
    }
  });

  test('the full dump is much larger than the index', async () => {
    const [index, dump] = await readAgentFiles({ basePath: '' });
    const sizeOf = async (name: string) => (await fs.stat(path.join(process.cwd(), 'public', name))).size;
    expect(await sizeOf(dump.name)).toBeGreaterThan((await sizeOf(index.name)) * 5);
  });

  test('links are bare routes at the site root', async () => {
    const files = await readAgentFiles({ basePath: '' });
    expect(files.map((f) => f.href)).toEqual(['/llms.txt', '/for-llms.txt']);
  });

  test('links carry the mount point when the docs live under a sub-path', async () => {
    const files = await readAgentFiles({ basePath: '/docs' });
    expect(files.map((f) => f.href)).toEqual(['/docs/llms.txt', '/docs/for-llms.txt']);
  });

  test('a missing file degrades to a link with no size', async () => {
    const dir = path.join(process.cwd(), '.test-empty-corpus');
    await fs.mkdir(dir, { recursive: true });
    try {
      const files = await readAgentFiles({ dir, basePath: '' });
      expect(files.map((f) => f.size)).toEqual([null, null]);
      expect(files.map((f) => f.href)).toEqual(['/llms.txt', '/for-llms.txt']);
    } finally {
      await fs.rm(dir, { recursive: true, force: true });
    }
  });
});

describe('agent guide', () => {
  test('the page the affordance points at is a real route', async () => {
    expect(await getAllRoutes()).toContain(AGENT_GUIDE_ROUTE);
  });

  test('the guide links both corpus files', async () => {
    const guide = await fs.readFile(
      path.join(docsConfig.contentDir, `${AGENT_GUIDE_ROUTE.slice(1)}.md`),
      'utf8',
    );
    for (const { name } of AGENT_FILE_SPECS) expect(guide).toContain(`/${name}`);
  });
});
