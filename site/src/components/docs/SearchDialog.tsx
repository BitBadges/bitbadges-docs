'use client';

import MiniSearch from 'minisearch';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { SearchIcon } from './Icons';

type Record_ = { id: string; route: string; title: string; section: string; description: string; text: string };

/**
 * Full-text search over a prebuilt index.
 *
 * The index (~1.3 MB) is fetched on first open rather than at page load, so it
 * costs nothing for readers who never search.
 */
function useIndex(active: boolean, indexUrl: string) {
  const [engine, setEngine] = useState<MiniSearch<Record_> | null>(null);
  const [loading, setLoading] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    setLoading(true);

    fetch(indexUrl)
      .then((res) => res.json() as Promise<Record_[]>)
      .then((records) => {
        const search = new MiniSearch<Record_>({
          fields: ['title', 'description', 'text', 'section'],
          storeFields: ['route', 'title', 'section', 'description'],
          searchOptions: {
            boost: { title: 4, section: 2, description: 1.5 },
            prefix: true,
            fuzzy: 0.15,
          },
        });
        search.addAll(records);
        setEngine(search);
      })
      .catch(() => setEngine(null))
      .finally(() => setLoading(false));
  }, [active, indexUrl]);

  return { engine, loading };
}

export function SearchDialog({
  indexUrl,
  basePath,
  enabled = true,
}: {
  indexUrl: string;
  basePath: string;
  /** Disabled on routes that provide their own search, so ⌘K opens one dialog. */
  enabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { engine, loading } = useIndex(open, indexUrl);

  const results = useMemo(() => {
    if (!engine || query.trim().length < 2) return [];
    return engine.search(query).slice(0, 25) as unknown as (Record_ & { score: number })[];
  }, [engine, query]);

  useEffect(() => setMounted(true), []);
  useEffect(() => setCursor(0), [query]);

  useEffect(() => {
    if (!enabled) return;
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (event.key === '/' && !open && !/^(INPUT|TEXTAREA)$/.test((event.target as HTMLElement)?.tagName ?? '')) {
        event.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [enabled, open]);

  useEffect(() => {
    if (open) requestAnimationFrame(() => inputRef.current?.focus());
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = useCallback(
    (route: string) => {
      setOpen(false);
      setQuery('');
      router.push(`${basePath}${route}`);
    },
    [basePath, router],
  );

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') return setOpen(false);
    if (!results.length) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setCursor((c) => (c + 1) % results.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setCursor((c) => (c - 1 + results.length) % results.length);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      go(results[cursor].route);
    }
  };

  if (!enabled) return null;

  const dialog = (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/45 px-4 pt-[8vh] backdrop-blur-sm"
      onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search documentation"
        className="flex max-h-[72vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-raised)] shadow-[var(--shadow-lg)]"
      >
        <div className="flex items-center gap-2.5 border-b border-[var(--border)] px-4">
          <SearchIcon className="h-4 w-4 shrink-0 text-[var(--fg-faint)]" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search the documentation…"
            aria-label="Search query"
            className="h-14 flex-1 bg-transparent text-[0.95rem] text-[var(--fg)] outline-none placeholder:text-[var(--fg-faint)]"
          />
          <kbd className="rounded border border-[var(--border)] px-1.5 py-0.5 font-mono text-[0.65rem] text-[var(--fg-faint)]">
            esc
          </kbd>
        </div>

        <div className="scroll-rail flex-1 overflow-y-auto p-2">
          {loading && <p className="px-3 py-6 text-center text-sm text-[var(--fg-faint)]">Loading index…</p>}

          {!loading && query.trim().length < 2 && (
            <p className="px-3 py-6 text-center text-sm text-[var(--fg-faint)]">
              Type at least two characters to search.
            </p>
          )}

          {!loading && query.trim().length >= 2 && results.length === 0 && (
            <p className="px-3 py-6 text-center text-sm text-[var(--fg-faint)]">No matches for “{query}”.</p>
          )}

          <ul>
            {results.map((result, index) => (
              <li key={result.id}>
                <Link
                  href={`${basePath}${result.route}`}
                  onClick={() => {
                    setOpen(false);
                    setQuery('');
                  }}
                  onMouseEnter={() => setCursor(index)}
                  data-active={index === cursor}
                  className="block rounded-lg px-3 py-2.5 transition data-[active=true]:bg-[var(--bg-inset)]"
                >
                  {result.section && (
                    <span className="text-[0.68rem] uppercase tracking-[0.07em] text-[var(--fg-faint)]">
                      {result.section}
                    </span>
                  )}
                  <span className="block truncate text-[0.92rem] font-medium text-[var(--fg)]">{result.title}</span>
                  {result.description && (
                    <span className="mt-0.5 block truncate text-[0.8rem] text-[var(--fg-muted)]">
                      {result.description}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 border-t border-[var(--border)] px-4 py-2 text-[0.7rem] text-[var(--fg-faint)]">
          <span>↑↓ navigate</span>
          <span>↵ open</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg-raised)] px-2.5 text-left text-[var(--fg-faint)] transition hover:border-[var(--border-strong)] sm:w-64 sm:flex-none"
      >
        <SearchIcon className="h-4 w-4 shrink-0" />
        <span className="flex-1 truncate text-sm">Search docs…</span>
        <kbd className="hidden shrink-0 rounded border border-[var(--border)] px-1.5 py-0.5 font-mono text-[0.65rem] sm:block">
          ⌘K
        </kbd>
      </button>

      {/*
        Portalled to the body on purpose: the top bar sets `backdrop-filter`,
        which makes it the containing block for `position: fixed` descendants.
        Rendered in place, the overlay resolved `inset-0` against the 60px-tall
        header instead of the viewport, so the backdrop covered only a strip.
      */}
      {open && mounted && createPortal(dialog, document.body)}
    </>
  );
}
