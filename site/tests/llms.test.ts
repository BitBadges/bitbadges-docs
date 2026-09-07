import { describe, expect, test } from 'bun:test';
import fs from 'node:fs/promises';
import { LLMS_PATH, render } from '../scripts/gen-llms';

describe('llms.txt', () => {
  test('matches what the generator writes, so the index cannot drift from SUMMARY.md', async () => {
    const committed = await fs.readFile(LLMS_PATH, 'utf8');
    expect(committed).toBe(await render());
  }, 60_000);

  test('collapses the generated reference trees to one line each', async () => {
    const text = await fs.readFile(LLMS_PATH, 'utf8');
    // A page under either tree would mean the whole tree is listed.
    expect(text).not.toMatch(/sdk\/reference\/\S/);
    expect(text).not.toMatch(/chain\/proto\/\S/);
    // The trees themselves stay reachable.
    expect(text).toContain('/sdk/reference)');
    expect(text).toContain('/chain/proto)');
  });

  test('stays small enough for an agent to read whole', async () => {
    const text = await fs.readFile(LLMS_PATH, 'utf8');
    expect(text.split('\n').length).toBeLessThan(400);
    expect(Buffer.byteLength(text)).toBeLessThan(64 * 1024);
  });
});
