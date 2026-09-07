'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

import { agentLinks, buildAgentPrompt, MCP_SETUP_ROUTE } from '@/lib/docs/page-actions';
import { markdownRoute } from '@/lib/docs/page-markdown';
import { ChevronIcon, CopyIcon, ExternalIcon, FileTextIcon, PlugIcon, SparkleIcon } from './Icons';

export type PageActionsProps = {
  title: string;
  /** Bare site route of the page, e.g. `/agents/setup`. */
  route: string;
  basePath: string;
  siteUrl: string;
};

type Feedback = 'idle' | 'copied' | 'failed';

/**
 * Put text on the clipboard, loading it lazily.
 *
 * Safari only honours a clipboard write that starts inside the click, so the
 * text is handed over as a promise where `ClipboardItem` allows it; the plain
 * `writeText` path covers everything else.
 */
async function copyToClipboard(load: () => Promise<string>): Promise<void> {
  if (typeof ClipboardItem !== 'undefined' && navigator.clipboard?.write) {
    try {
      const blob = load().then((text) => new Blob([text], { type: 'text/plain' }));
      await navigator.clipboard.write([new ClipboardItem({ 'text/plain': blob })]);
      return;
    } catch {
      // Older engines reject a promise-valued item; fall through.
    }
  }
  await navigator.clipboard.writeText(await load());
}

/**
 * The GitBook-style page menu: copy the page as Markdown, view it raw, or hand
 * it to an agent. The Markdown comes from the page's `.md` twin, fetched on
 * first use, so the copied text is exactly what an agent would read.
 */
export function PageActions({ title, route, basePath, siteUrl }: PageActionsProps) {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>('idle');
  const root = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  const markdown = useRef<Promise<string> | null>(null);

  const markdownHref = `${basePath}${markdownRoute(route)}`;
  const pageUrl = `${siteUrl}${basePath}${route === '/' ? '/' : route}`;
  const prompt = buildAgentPrompt({
    title,
    pageUrl,
    markdownUrl: `${siteUrl}${markdownHref}`,
    llmsUrl: `${siteUrl}${basePath}/llms.txt`,
  });
  const links = agentLinks(prompt);

  const loadMarkdown = useCallback(() => {
    markdown.current ??= fetch(markdownHref).then((res) => {
      if (!res.ok) {
        markdown.current = null;
        throw new Error(`${res.status} fetching ${markdownHref}`);
      }
      return res.text();
    });
    return markdown.current;
  }, [markdownHref]);

  const flash = (state: Feedback) => {
    setFeedback(state);
    setTimeout(() => setFeedback('idle'), 1600);
  };

  const copy = async (load: () => Promise<string>) => {
    setOpen(false);
    try {
      await copyToClipboard(load);
      flash('copied');
    } catch {
      flash('failed');
    }
  };

  const copyPage = () => copy(loadMarkdown);
  const copyPrompt = () => copy(() => Promise.resolve(prompt));

  // Close on a click outside or on Escape; give focus back to the trigger.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      setOpen(false);
      toggle.current?.focus();
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const items = () => Array.from(menu.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? []);

  const focusItem = (index: number) => {
    const all = items();
    if (all.length === 0) return;
    all[((index % all.length) + all.length) % all.length].focus();
  };

  const openAndFocus = (index: number) => {
    setOpen(true);
    // The menu mounts on the next render; focus once it is in the tree.
    requestAnimationFrame(() => focusItem(index));
  };

  const onToggleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      openAndFocus(0);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      openAndFocus(-1);
    }
  };

  const onMenuKeyDown = (event: React.KeyboardEvent) => {
    const all = items();
    const current = all.indexOf(document.activeElement as HTMLElement);
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        focusItem(current + 1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        focusItem(current - 1);
        break;
      case 'Home':
        event.preventDefault();
        focusItem(0);
        break;
      case 'End':
        event.preventDefault();
        focusItem(-1);
        break;
      case 'Tab':
        setOpen(false);
        break;
    }
  };

  const label = feedback === 'copied' ? 'Copied' : feedback === 'failed' ? 'Press ⌘C' : 'Copy';

  return (
    <div ref={root} data-page-actions className="page-actions">
      <div className="page-actions-split">
        <button type="button" onClick={copyPage} className="page-actions-copy" aria-live="polite">
          <CopyIcon className="h-[0.95rem] w-[0.95rem]" />
          <span>{label}</span>
        </button>
        <button
          ref={toggle}
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label="More page actions"
          onClick={() => setOpen((v) => !v)}
          onKeyDown={onToggleKeyDown}
          className="page-actions-toggle"
        >
          <ChevronIcon className="h-[0.9rem] w-[0.9rem] rotate-90" />
        </button>
      </div>

      {/* Always in the DOM (hidden when closed) so the Markdown link is there for
          crawlers and the menu has stable focus targets. */}
      <div
        ref={menu}
        role="menu"
        aria-label="Page actions"
        hidden={!open}
        onKeyDown={onMenuKeyDown}
        className="page-actions-menu"
      >
        <button type="button" role="menuitem" onClick={copyPage} className="page-actions-item">
          <CopyIcon className="page-actions-icon" />
          <span>
            <span className="page-actions-label">Copy page</span>
            <span className="page-actions-desc">Copy this page as Markdown for an LLM.</span>
          </span>
        </button>
        <a
          role="menuitem"
          href={markdownHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="page-actions-item"
        >
          <FileTextIcon className="page-actions-icon" />
          <span>
            <span className="page-actions-label">View as Markdown</span>
            <span className="page-actions-desc">Open the raw Markdown in a new tab.</span>
          </span>
        </a>
        <button type="button" role="menuitem" onClick={copyPrompt} className="page-actions-item">
          <SparkleIcon className="page-actions-icon" />
          <span>
            <span className="page-actions-label">Copy prompt</span>
            <span className="page-actions-desc">Copy a prompt that points an agent here.</span>
          </span>
        </button>
        <a
          role="menuitem"
          href={links.chatgpt}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="page-actions-item"
        >
          <ExternalIcon className="page-actions-icon" />
          <span>
            <span className="page-actions-label">Open in ChatGPT</span>
            <span className="page-actions-desc">Start a chat with this page loaded.</span>
          </span>
        </a>
        <a
          role="menuitem"
          href={links.claude}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="page-actions-item"
        >
          <ExternalIcon className="page-actions-icon" />
          <span>
            <span className="page-actions-label">Open in Claude</span>
            <span className="page-actions-desc">Start a chat with this page loaded.</span>
          </span>
        </a>
        <Link role="menuitem" href={MCP_SETUP_ROUTE} onClick={() => setOpen(false)} className="page-actions-item">
          <PlugIcon className="page-actions-icon" />
          <span>
            <span className="page-actions-label">Set up the BitBadges MCP</span>
            <span className="page-actions-desc">Use the builder tools from Claude Code, Codex, or Cursor.</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
