'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import type { NavGroup } from '@/lib/docs/summary';
import { CloseIcon, MenuIcon } from './Icons';
import { SearchDialog } from './SearchDialog';
import { Sidebar } from './Sidebar';
import { ThemeToggle } from './ThemeToggle';

export type ShellProps = {
  groups: NavGroup[];
  basePath: string;
  searchIndexUrl: string;
  children: React.ReactNode;
};

/** The brand mark, shared by the top bar and the mobile drawer. */
function Wordmark({ basePath }: { basePath: string }) {
  return (
    <Link href={basePath || '/'} className="flex shrink-0 items-center gap-2">
      <img src={`${basePath}/bitbadges-logo.svg`} alt="" width={26} height={26} className="h-[1.6rem] w-[1.6rem]" />
      <span className="text-[0.95rem] font-bold tracking-tight">
        <span className="wordmark">BitBadges</span>
        <span className="ml-1.5 hidden font-medium text-[var(--fg-faint)] sm:inline">Docs</span>
      </span>
    </Link>
  );
}

/**
 * Top bar and mobile navigation, shared by every route.
 *
 * The desktop sidebar belongs to the (docs) route group only, so the API
 * reference can render full-bleed with its own operation rail.
 */
export function Shell({ groups, basePath, searchIndexUrl, children }: ShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const apiHref = `${basePath}/api-reference`;
  const onApiReference = pathname === apiHref;

  const tabs = [
    { href: basePath || '/', label: 'Documentation', active: !onApiReference },
    { href: apiHref, label: 'API Reference', active: onApiReference },
  ];

  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-40 h-[var(--shell-topbar)] border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--bg)_82%,transparent)] backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-[100rem] items-center gap-3 px-4 lg:px-6">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[var(--border)] text-[var(--fg-muted)] lg:hidden"
          >
            <MenuIcon className="h-[1.05rem] w-[1.05rem]" />
          </button>

          <Wordmark basePath={basePath} />

          <nav aria-label="Sections" className="ml-2 hidden md:block">
            <div className="segmented">
              {tabs.map((tab) => (
                <Link
                  key={tab.href}
                  href={tab.href}
                  aria-current={tab.active ? 'page' : undefined}
                  className="segmented-tab"
                >
                  {tab.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="ml-auto flex min-w-0 items-center justify-end gap-2">
            {/* On the API reference, Scalar owns ⌘K for searching operations. */}
            <SearchDialog indexUrl={searchIndexUrl} basePath={basePath} enabled={!onApiReference} />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {children}

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/45 backdrop-blur-sm"
          />
          <div className="scroll-rail absolute inset-y-0 left-0 w-[min(20rem,85vw)] overflow-y-auto border-r border-[var(--border)] bg-[var(--bg)] px-4 py-5 shadow-[var(--shadow-lg)]">
            <div className="mb-5 flex items-center justify-between">
              <Wordmark basePath={basePath} />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[var(--border)] text-[var(--fg-muted)]"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="segmented mb-5 w-full">
              {tabs.map((tab) => (
                <Link
                  key={tab.href}
                  href={tab.href}
                  aria-current={tab.active ? 'page' : undefined}
                  className="segmented-tab flex-1 text-center"
                >
                  {tab.label}
                </Link>
              ))}
            </div>

            <Sidebar groups={groups} onNavigate={() => setMenuOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
