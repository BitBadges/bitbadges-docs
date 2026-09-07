import { describe, expect, test } from 'bun:test';
import fs from 'node:fs/promises';
import path from 'node:path';
import { docsConfig } from '../src/lib/docs/config';
import { getAllFiles } from '../src/lib/docs/content';
import { collapsedSourceFor, pruneJson } from '../src/lib/docs/fold';
import { renderDoc } from '../src/lib/docs/markdown';

const opts = { filePath: 'token-standard/concepts/transferability.md', assetsPrefix: '/docs-assets', basePath: '' };
const fence = (info: string, body: string) => `# T\n\n\`\`\`${info}\n${body}\n\`\`\`\n`;

/** A long approval object: boilerplate members plus real ones, with the compact inline style the corpus uses. */
const approval = `{
  "fromListId": "Mint",
  "toListId": "All",
  "initiatedByListId": "All",
  "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "tokenIds": [{ "start": "1", "end": "100" }],
  "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "uri": "",
  "customData": "",
  "approvalId": "mint-to-all",
  "approvalCriteria": {
    "merkleChallenges": [],
    "predeterminedBalances": {
      "manualBalances": [],
      "incrementedBalances": {
        "startBalances": [{ "amount": "1", "tokenIds": [{ "start": "1", "end": "1" }] }],
        "incrementTokenIdsBy": "1",
        "incrementOwnershipTimesBy": "0",
        "durationFromTimestamp": "0",
        "allowOverrideTimestamp": false
      },
      "orderCalculationMethod": {
        "useOverallNumTransfers": true,
        "usePerToAddressNumTransfers": false,
        "usePerFromAddressNumTransfers": false
      }
    },
    "maxNumTransfers": {
      "overallMaxNumTransfers": "100",
      "perToAddressMaxNumTransfers": "0",
      "perFromAddressMaxNumTransfers": "0",
      "amountTrackerId": "mint"
    },
    "coinTransfers": [],
    "requireToEqualsInitiatedBy": false,
    "requireFromEqualsInitiatedBy": false,
    "overridesFromOutgoingApprovals": true,
    "overridesToIncomingApprovals": false,
    "mustOwnTokens": [],
    "userRoyalties": { "percentage": "0", "payoutAddress": "" }
  },
  "version": "0"
}`;

describe('pruneJson', () => {
  test('drops boilerplate members and leaves valid JSON', () => {
    const out = pruneJson(approval)!;
    expect(() => JSON.parse(out)).not.toThrow();
    expect(out).not.toContain('"merkleChallenges"');
    expect(out).not.toContain('"requireToEqualsInitiatedBy"');
    expect(out).not.toContain('"customData"');
    // `uri` is protected: an empty one says the metadata is inline, which a reader has to see.
    expect(out).toContain('"uri": ""');
    // Real values stay, whatever their nesting depth.
    expect(out).toContain('"approvalId": "mint-to-all"');
    expect(out).toContain('"overallMaxNumTransfers": "100"');
    expect(out).toContain('"overridesFromOutgoingApprovals": true');
    expect(out).toContain('"startBalances"');
  });

  test('the pruned document is a subset of the original, with identical values', () => {
    const full = JSON.parse(approval);
    const pruned = JSON.parse(pruneJson(approval)!);
    const walk = (a: any, b: any, at: string) => {
      for (const key of Object.keys(b)) {
        expect(`${at}.${key}`).toBe(`${at}.${key}`);
        expect(a).toHaveProperty(key);
        if (b[key] && typeof b[key] === 'object' && !Array.isArray(b[key])) walk(a[key], b[key], `${at}.${key}`);
        else expect(JSON.stringify(a[key])).toBe(JSON.stringify(b[key]));
      }
    };
    walk(full, pruned, '$');
  });

  test('keeps the original indentation and inline style of every line it keeps', () => {
    const kept = new Set(pruneJson(approval)!.split('\n').map((l) => l.replace(/,$/, '')));
    for (const line of kept) {
      if (!line.trim()) continue;
      expect(approval.split('\n').some((orig) => orig.replace(/,$/, '') === line)).toBe(true);
    }
  });

  test('leaves no empty object or array behind, however deeply nested', () => {
    // Dropping every member of a nested object would otherwise leave `{}`,
    // which is the noise this is supposed to remove.
    const out = pruneJson(approval)!;
    expect(out).not.toMatch(/:\s*\{\s*\}/);
    expect(out).not.toMatch(/:\s*\[\s*\]/);
    expect(out).not.toMatch(/\{\s*\n\s*\}/);
  });

  test('never leaves a trailing comma before a closing bracket', () => {
    expect(pruneJson(approval)!).not.toMatch(/,\s*[}\]]/);
  });

  test('returns null when there is nothing worth hiding', () => {
    expect(pruneJson('{\n  "a": "1",\n  "b": "2"\n}')).toBeNull();
  });

  test('returns null for input that is not JSON', () => {
    expect(pruneJson('const a = 1;')).toBeNull();
  });
});

describe('collapsedSourceFor', () => {
  test('prunes a long json block', () => {
    const out = collapsedSourceFor('json', '', approval)!;
    expect(() => JSON.parse(out)).not.toThrow();
    expect(out.split('\n').length).toBeLessThan(approval.split('\n').length);
  });

  test('nofold opts out', () => {
    expect(collapsedSourceFor('json', 'nofold', approval)).toBeNull();
  });

  test('drops the marked lines for a non-json fence', () => {
    const ts = ['interface A {', '  a: string;', '  b: string;', '  c: string;', '}'].join('\n');
    expect(collapsedSourceFor('ts', 'fold=3-4', ts)).toBe('interface A {\n  a: string;\n}');
  });

  test('leaves a short json block alone', () => {
    expect(collapsedSourceFor('json', '', '{\n  "a": [],\n  "b": "1"\n}')).toBeNull();
  });
});

describe('renderDoc', () => {
  test('renders both views, collapsed selected, and no line markers', async () => {
    const html = (await renderDoc(fence('json', approval), opts)).html;
    expect(html).toContain('data-view="collapsed"');
    expect(html.match(/data-code-view="collapsed"/g)).toHaveLength(1);
    expect(html.match(/data-code-view="full"/g)).toHaveLength(1);
    expect(html).not.toContain('code-elision');
    expect(html).not.toContain('lines hidden');
    expect(html).not.toMatch(/···\s*\d+\s*lines?/);
  });

  test('carries both sources on the figure so copy matches the visible view', async () => {
    const html = (await renderDoc(fence('json', approval), opts)).html;
    expect(html).toContain('data-code-source="');
    expect(html).toContain('data-code-collapsed="');
  });

  test('a block with nothing to hide gets no tabs and one view', async () => {
    const html = (await renderDoc(fence('bash', 'echo hi'), opts)).html;
    expect(html).not.toContain('data-view-tab');
    expect(html).not.toContain('data-code-view');
  });
});

describe('every collapsed json block in the corpus', () => {
  test('parses', async () => {
    const files = await getAllFiles();
    const bad: string[] = [];
    let checked = 0;
    for (const file of files) {
      const text = await fs.readFile(path.join(docsConfig.contentDir, file), 'utf8');
      for (const match of text.matchAll(/```(json|jsonc)([^\n]*)\n([\s\S]*?)```/g)) {
        const collapsed = collapsedSourceFor(match[1], match[2], match[3].replace(/\n$/, ''));
        if (collapsed === null) continue;
        checked++;
        try {
          JSON.parse(collapsed);
        } catch (error) {
          bad.push(`${file}: ${String(error).split('\n')[0]}`);
        }
      }
    }
    expect(bad).toEqual([]);
    expect(checked).toBeGreaterThan(10);
  }, 120_000);
});
