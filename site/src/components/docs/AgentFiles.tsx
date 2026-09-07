import fs from 'node:fs/promises';
import path from 'node:path';

import { docsConfig, withBasePath } from '@/lib/docs/config';

/** Where the "how agents read these docs" page lives. */
export const AGENT_GUIDE_ROUTE = '/agents/reading-the-docs';

/** The corpus files `bun run sync` copies into public/, in the order to offer them. */
export const AGENT_FILE_SPECS = [
  { name: 'llms.txt', summary: 'Curated index of every page' },
  { name: 'for-llms.txt', summary: 'Every page in one file' },
] as const;

export type AgentFile = {
  name: string;
  summary: string;
  /** Public URL, base-path aware. */
  href: string;
  /** Human-readable size, or null when the file is not on disk. */
  size: string | null;
};

/**
 * Round a byte count the way the docs talk about these files: two significant
 * figures, so a page of prose landing in the corpus never changes the label.
 */
export function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${Math.round(kb)} KB`;
  const mb = kb / 1024;
  return `${mb < 10 ? mb.toFixed(1) : Math.round(mb)} MB`;
}

/**
 * Measure the agent corpus files at build time.
 *
 * Sizes are read rather than written down, so the numbers in the UI cannot go
 * stale as the corpus grows. A missing file degrades to a link with no size
 * instead of failing the build.
 */
export async function readAgentFiles(options: { dir?: string; basePath?: string } = {}): Promise<AgentFile[]> {
  // Measure what the site actually serves. `llms.txt` is committed in the
  // content root and copied into public/ by sync; `for-llms.txt` is generated
  // straight into public/ and never committed, so the content root is not a
  // reliable place to find either one.
  const dir = options.dir ?? path.resolve(process.cwd(), 'public');
  const basePath = options.basePath ?? docsConfig.basePath;

  return Promise.all(
    AGENT_FILE_SPECS.map(async ({ name, summary }) => {
      // turbopackIgnore, as in config.ts: the size is read at build time, so the
      // content repo must not be traced into the server output.
      const stat = await fs
        .stat(/* turbopackIgnore: true */ path.join(/* turbopackIgnore: true */ dir, name))
        .catch(() => null);
      return {
        name,
        summary,
        href: `${basePath}/${name}`,
        size: stat ? formatSize(stat.size) : null,
      };
    }),
  );
}

/**
 * Sidebar-footer affordance: download the corpus, or read how to use it.
 *
 * Plain anchors with `download`, server-rendered — it works with JavaScript
 * off, tabs in document order, and each link names its own file.
 */
export async function AgentFiles({ className = '' }: { className?: string }) {
  const files = await readAgentFiles();

  // Labelled by attribute rather than by id: the layout renders this twice (one
  // visible per breakpoint), and two of the same id is invalid HTML.
  return (
    <section aria-label="For agents" className={`border-t border-[var(--border)] pt-4 ${className}`}>
      <h2 className="mb-2 px-[0.7rem] text-[0.68rem] font-semibold uppercase tracking-[0.09em] text-[var(--fg-faint)]">
        For agents
      </h2>
      <ul className="space-y-1.5 px-[0.7rem]">
        {files.map((file) => (
          <li key={file.name}>
            <a
              href={file.href}
              download
              aria-label={`Download ${file.name} — ${file.summary}${file.size ? `, ${file.size}` : ''}`}
              className="copy-button w-full justify-between"
            >
              <span className="font-mono normal-case tracking-normal">{file.name}</span>
              {file.size && <span className="text-[var(--fg-faint)]">{file.size}</span>}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-2 px-[0.7rem] text-[0.75rem] leading-snug text-[var(--fg-faint)]">
        <a
          href={withBasePath(AGENT_GUIDE_ROUTE)}
          className="underline-offset-4 transition hover:text-[var(--brand)] hover:underline"
        >
          How agents read these docs
        </a>
      </p>
    </section>
  );
}
