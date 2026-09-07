import { describe, expect, test } from 'bun:test';
import { autoFoldRanges, parseFoldMeta } from '../src/lib/docs/fold';
import { renderDoc } from '../src/lib/docs/markdown';

const opts = { filePath: 'for-developers/getting-started.md', assetsPrefix: '/docs-assets', basePath: '' };

const numbered = (n: number) => Array.from({ length: n }, (_, i) => `line ${i + 1}`);
const fence = (info: string, lines: string[]) => `# T\n\n\`\`\`${info}\n${lines.join('\n')}\n\`\`\`\n`;

/** A 60-line JSON object: a real header, a long boilerplate permissions block, a second run, real data between. */
const boilerplateJson = [
  '{',
  '  "creator": "bb1abc...",',
  '  "collectionId": "0",',
  '  "collectionPermissions": {',
  '    "canDeleteCollection": [],',
  '    "canArchiveCollection": [],',
  '    "canUpdateStandards": [],',
  '    "canUpdateCustomData": [],',
  '    "canUpdateManager": [],',
  '    "canUpdateCollectionMetadata": [],',
  '    "canUpdateValidTokenIds": [],',
  '    "canUpdateTokenMetadata": [],',
  '    "canUpdateCollectionApprovals": [],',
  '    "canAddMoreAliasPaths": [],',
  '    "canAddMoreCosmosCoinWrapperPaths": []',
  '  },',
  '  "manager": "bb1abc...",',
  '  "validTokenIds": [{ "start": "1", "end": "100" }],',
  '  "collectionMetadata": { "uri": "https://example.com/collection.json", "customData": "" },',
  '  "tokenMetadata": [],',
  '  "collectionApprovals": [',
  '    {',
  '      "approvalId": "mint-all",',
  '      "fromListId": "Mint",',
  '      "toListId": "All",',
  '      "initiatedByListId": "All",',
  '      "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],',
  '      "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],',
  '      "tokenIds": [{ "start": "1", "end": "100" }],',
  '      "uri": "",',
  '      "customData": "",',
  '      "approvalCriteria": {',
  '        "requireToEqualsInitiatedBy": false,',
  '        "requireFromEqualsInitiatedBy": false,',
  '        "requireToDoesNotEqualInitiatedBy": false,',
  '        "requireFromDoesNotEqualInitiatedBy": false,',
  '        "overridesFromOutgoingApprovals": true,',
  '        "overridesToIncomingApprovals": false,',
  '        "mustOwnTokens": [],',
  '        "merkleChallenges": [],',
  '        "coinTransfers": [],',
  '        "dynamicStoreChallenges": [],',
  '        "userRoyalties": { "percentage": "0", "payoutAddress": "" },',
  '        "autoDeletionOptions": { "afterOneUse": false, "afterOverallMaxNumTransfers": false },',
  '        "predeterminedBalances": {',
  '          "manualBalances": [],',
  '          "incrementedBalances": {',
  '            "startBalances": [],',
  '            "incrementTokenIdsBy": "0",',
  '            "incrementOwnershipTimesBy": "0",',
  '            "durationFromTimestamp": "0",',
  '            "allowOverrideTimestamp": false,',
  '            "allowOverrideWithAnyValidToken": false',
  '          },',
  '          "orderCalculationMethod": { "useOverallNumTransfers": true }',
  '        }',
  '      }',
  '    }',
  '  ]',
  '}',
];

describe('parseFoldMeta', () => {
  test('parses comma-separated 1-based inclusive ranges', () => {
    expect(parseFoldMeta('fold=12-40,55-80')).toEqual({ ranges: [[12, 40], [55, 80]], nofold: false });
  });

  test('accepts a quoted value', () => {
    expect(parseFoldMeta('fold="12-40"')).toEqual({ ranges: [[12, 40]], nofold: false });
  });

  test('reports nofold', () => {
    expect(parseFoldMeta('nofold')).toEqual({ ranges: undefined, nofold: true });
  });

  test('ignores an unrelated info string', () => {
    expect(parseFoldMeta('title="x.json"')).toEqual({ ranges: undefined, nofold: false });
  });
});

describe('autoFoldRanges', () => {
  test('folds two separate boilerplate runs in a long JSON block', () => {
    expect(boilerplateJson).toHaveLength(60);
    const ranges = autoFoldRanges(boilerplateJson);
    // Permissions block: lines 5-16 are all `[]` values and closing braces.
    // In approvalCriteria the false/[] run after `overridesFromOutgoingApprovals: true`
    // is only five lines (38-42), so it stays visible; the incrementedBalances
    // body plus its closing brace (48-54) is the second qualifying run.
    expect(ranges).toEqual([[5, 16], [48, 54]]);
    // Every folded line really is boilerplate.
    for (const [start, end] of ranges) {
      for (let i = start; i <= end; i++) {
        expect(boilerplateJson[i - 1]).toMatch(/(\[\]|\{\}|false|"0"|""|^\s*[\[\]{}]+,?\s*$)/);
      }
    }
  });

  test('never folds protected keys or the first and last two lines', () => {
    const lines = [
      '{',
      '  "collectionId": "0",',
      '  "approvalId": "",',
      '  "fromListId": "",',
      '  "toListId": "",',
      '  "initiatedByListId": "",',
      '  "amount": "0",',
      '  "uri": "",',
      ...Array.from({ length: 40 }, (_, i) => `  "k${i}": "real value ${i}",`),
      '  "a": [],',
      '  "b": [],',
      '  "c": [],',
      '  "d": [],',
      '  "e": [],',
      '  "f": [],',
      '  "g": [],',
      '}',
    ];
    expect(lines.length).toBeGreaterThan(40);
    const ranges = autoFoldRanges(lines);
    // Protected keys (lines 3-8) must not fold even though they are all boilerplate values.
    expect(ranges.find(([s]) => s <= 8)).toBeUndefined();
    // The trailing run: "a".."g" are lines 49-55, "}" is 56. Last two lines (55, 56) are exempt.
    expect(ranges).toEqual([[49, 54]]);
  });

  test('does not fold a block of 40 lines or fewer', () => {
    const lines = ['{', ...Array.from({ length: 37 }, (_, i) => `  "k${i}": [],`), '  "z": 1', '}'];
    expect(lines).toHaveLength(40);
    expect(autoFoldRanges(lines)).toEqual([]);
  });

  test('does not fold runs shorter than six lines', () => {
    const lines = [
      '{',
      ...Array.from({ length: 50 }, (_, i) => (i % 6 === 5 ? `  "real${i}": "value",` : `  "k${i}": [],`)),
      '}',
    ];
    expect(autoFoldRanges(lines)).toEqual([]);
  });

  test('treats trailing commas and indentation as noise', () => {
    const lines = ['{', '  "x": {', ...Array.from({ length: 45 }, () => '      "deep": {},'), '  }', '}'];
    expect(autoFoldRanges(lines)).toEqual([[3, 47]]);
  });
});

describe('renderDoc — explicit code folds', () => {
  test('renders one details per range with the hidden count and line range', async () => {
    const doc = await renderDoc(fence('text fold=3-5,8-9', numbered(12)), opts);
    expect(doc.html).toContain('data-folds="2"');
    expect(doc.html.match(/<details class="code-fold">/g)).toHaveLength(2);
    expect(doc.html).toContain('<summary>··· 3 lines hidden (3-5)</summary>');
    expect(doc.html).toContain('<summary>··· 2 lines hidden (8-9)</summary>');
    // The folded lines live inside the details; the rest are untouched siblings.
    expect(doc.html).toMatch(/<summary>··· 3 lines hidden \(3-5\)<\/summary><span class="line">[^]*?line 3[^]*?line 5[^]*?<\/details>/);
    expect(doc.html).toMatch(/line 2<\/span><\/span>\n<details/);
    expect(doc.html).toMatch(/<\/details><span class="line">[^]*?line 6/);
  });

  test('accepts the quoted form and clamps out-of-range lines', async () => {
    const doc = await renderDoc(fence('text fold="2-99"', numbered(5)), opts);
    expect(doc.html).toContain('data-folds="1"');
    expect(doc.html).toContain('<summary>··· 4 lines hidden (2-5)</summary>');
  });

  test('keeps the full source on the copy attribute', async () => {
    const lines = numbered(12);
    const doc = await renderDoc(fence('text fold=3-5', lines), opts);
    expect(doc.html).toContain(`data-code-source="${lines.join('\n')}"`);
  });

  test('keeps every line in the html so the page still carries the full text', async () => {
    const doc = await renderDoc(fence('text fold=3-5', numbered(12)), opts);
    for (const line of numbered(12)) expect(doc.html).toContain(line);
  });

  test('applies to any language, not only json', async () => {
    const doc = await renderDoc(fence('ts fold=2-3', ['const a = 1;', 'const b = 2;', 'const c = 3;', 'export {};']), opts);
    expect(doc.html).toContain('data-folds="1"');
  });
});

describe('renderDoc — automatic json folds', () => {
  test('folds boilerplate runs in a long json block', async () => {
    const doc = await renderDoc(fence('json', boilerplateJson), opts);
    expect(doc.html).toContain('data-folds="2"');
    expect(doc.html).toContain('<summary>··· 12 lines hidden (5-16)</summary>');
    expect(doc.html).toContain('data-lang="json"');
  });

  test('also folds jsonc', async () => {
    const doc = await renderDoc(fence('jsonc', boilerplateJson), opts);
    expect(doc.html).toContain('data-folds="2"');
  });

  test('nofold suppresses the automatic folds', async () => {
    const doc = await renderDoc(fence('json nofold', boilerplateJson), opts);
    expect(doc.html).not.toContain('data-folds');
    expect(doc.html).not.toContain('code-fold');
  });

  test('an explicit fold= replaces the automatic ranges', async () => {
    const doc = await renderDoc(fence('json fold=20-30', boilerplateJson), opts);
    expect(doc.html).toContain('data-folds="1"');
    expect(doc.html).toContain('<summary>··· 11 lines hidden (20-30)</summary>');
  });

  test('leaves a short json block untouched', async () => {
    const doc = await renderDoc(fence('json', boilerplateJson.slice(0, 16).concat('}')), opts);
    expect(doc.html).not.toContain('data-folds');
    expect(doc.html).not.toContain('<details');
  });

  test('does not auto-fold other languages', async () => {
    const doc = await renderDoc(fence('ts', boilerplateJson), opts);
    expect(doc.html).not.toContain('data-folds');
  });
});
