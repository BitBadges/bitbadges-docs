/**
 * Write each page's Markdown twin to public/<route>.md.
 *
 * `bun run sync` calls this before every dev and build, so the files are a
 * build artifact (gitignored) like the search index. The route shape matches
 * the HTML page plus `.md`; the root page is `index.md`.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { docsConfig } from '../src/lib/docs/config';
import { getAllFiles } from '../src/lib/docs/content';
import { markdownRoute, pageMarkdown } from '../src/lib/docs/page-markdown';
import { filePathToRoute } from '../src/lib/docs/paths';

export async function generate(): Promise<{ pages: number }> {
  const publicDir = path.resolve(process.cwd(), 'public');
  const files = await getAllFiles();
  let pages = 0;

  for (const file of files) {
    const source = await fs.readFile(path.join(docsConfig.contentDir, file), 'utf8');
    const text = pageMarkdown(source, {
      filePath: file,
      siteUrl: docsConfig.siteUrl,
      basePath: docsConfig.basePath,
      assetsPrefix: docsConfig.assetsPrefix,
    });
    const target = path.join(publicDir, markdownRoute(filePathToRoute(file)).slice(1));
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, text);
    pages += 1;
  }
  return { pages };
}

if (import.meta.main) {
  const { pages } = await generate();
  console.log(`markdown: ${pages} page(s) written to public/`);
}
