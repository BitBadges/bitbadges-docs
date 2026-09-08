import { expect, test } from 'bun:test';
import fs from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';

import { docsConfig } from '../src/lib/docs/config';
import { getAllFiles } from '../src/lib/docs/content';

test('all JSON, TypeScript, JavaScript, and shell examples parse', async () => {
  const failures: string[] = [];
  let checked = 0;
  for (const file of await getAllFiles()) {
    const source = await fs.readFile(path.join(docsConfig.contentDir, file), 'utf8');
    const tree = unified().use(remarkParse).parse(source);
    visit(tree, 'code', (node) => {
      const language = node.lang ?? '';
      const location = `${file}:${node.position?.start.line}`;
      if (language === 'json') {
        checked++;
        try {
          JSON.parse(node.value);
        } catch (error) {
          failures.push(`${location}: ${error}`);
        }
      } else if (['ts', 'typescript', 'tsx', 'js', 'javascript', 'jsx'].includes(language)) {
        checked++;
        const result = ts.transpileModule(node.value, {
          fileName: `example.${language === 'tsx' || language === 'jsx' ? 'tsx' : 'ts'}`,
          compilerOptions: { target: ts.ScriptTarget.ESNext, module: ts.ModuleKind.ESNext, jsx: ts.JsxEmit.Preserve },
          reportDiagnostics: true,
        });
        for (const diagnostic of result.diagnostics ?? []) {
          failures.push(`${location}: ${ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')}`);
        }
      } else if (['bash', 'sh', 'shell'].includes(language)) {
        checked++;
        const result = Bun.spawnSync(['bash', '-n'], { stdin: Buffer.from(node.value), stdout: 'pipe', stderr: 'pipe' });
        if (result.exitCode !== 0) failures.push(`${location}: ${result.stderr.toString().trim()}`);
      }
    });
  }
  expect(checked).toBeGreaterThan(1000);
  expect(failures).toEqual([]);
});
