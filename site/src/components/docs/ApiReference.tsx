'use client';

// Imported statically so Next collects the stylesheet into this route's CSS
// chunk; a CSS import reached only through next/dynamic is not bundled.
import '@scalar/api-reference-react/style.css';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ChevronIcon } from './Icons';

// Scalar renders a Vue app internally; it must not run during SSR.
const ApiReferenceReact = dynamic(
  () => import('@scalar/api-reference-react').then((mod) => mod.ApiReferenceReact),
  {
    ssr: false,
    loading: () => (
      <div className="grid h-full place-items-center text-sm text-[var(--fg-faint)]">Loading API reference…</div>
    ),
  },
);

/**
 * Hide Scalar's AI affordances that carry no stable CSS hook.
 *
 * The sidebar "Ask AI" button is styled entirely with generated utility classes
 * (no id, no aria-label), so it can only be matched by its label. Scalar's other
 * AI/MCP surfaces do have stable classes and are hidden in globals.css. This
 * site ships no assistant, and the button points at a service we do not
 * configure, so it would fail if clicked.
 */
function useHideAiControls(ready: boolean) {
  useEffect(() => {
    if (!ready) return;
    const root = document.querySelector('.api-shell');
    if (!root) return;

    const hide = () => {
      for (const el of root.querySelectorAll<HTMLElement>('button, a')) {
        if (/^(ask ai|generate mcp)\b/i.test(el.textContent?.trim() ?? '')) el.style.display = 'none';
      }
    };

    hide();
    const observer = new MutationObserver(hide);
    observer.observe(root, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [ready]);
}

/** Where the back control returns to: the docs page this reference belongs to. */
export type BackTo = { href: string; label: string };

/**
 * Interactive OpenAPI reference — the self-hosted replacement for Stoplight.
 *
 * These routes render outside the `(docs)` group, so Scalar replaces the docs
 * sidebar entirely and there is no in-page way back to the prose. The bar above
 * the embed is that way back. It sits *above* Scalar rather than floating over
 * it because Scalar owns its own top-left corner at every width: the sidebar
 * search box on desktop, its own collapsed nav bar below `md`. It is a plain
 * link, so it works before (and without) the client bundle that draws Scalar.
 */
export function ApiReference({ specUrl, backTo }: { specUrl: string; backTo: BackTo }) {
  const [dark, setDark] = useState<boolean | null>(null);
  useHideAiControls(dark !== null);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setDark(root.classList.contains('dark'));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div id="doc-content" className="api-page">
      <div className="api-backbar">
        <Link href={backTo.href} className="api-back">
          <ChevronIcon className="h-[0.85rem] w-[0.85rem] rotate-180" />
          {backTo.label}
        </Link>
      </div>

      {/* Themed on mount; rendering the embed before the theme is known would
          flash the wrong palette and then remount. The bar renders regardless. */}
      <div className="api-shell">{dark === null ? null : <Embed specUrl={specUrl} dark={dark} />}</div>
    </div>
  );
}

function Embed({ specUrl, dark }: { specUrl: string; dark: boolean }) {
  return (
    <ApiReferenceReact
      // Remounting on theme change is the reliable way to re-theme the embed.
      key={dark ? 'dark' : 'light'}
      configuration={{
        url: specUrl,
        darkMode: dark,
        // The docs shell owns the theme toggle, and Scalar's own product chrome
        // (developer tools, share/deploy menus) has no place in self-hosted docs.
        hideDarkModeToggle: true,
        showDeveloperTools: 'never',
        // Never write an entered API key to the visitor's browser storage.
        persistAuth: false,
        documentDownloadType: 'json',
        withDefaultFonts: false,
        // Keep the snippet pane to clients this audience actually uses:
        // shell/curl, js/fetch, node/fetch, node/axios, python/requests and
        // go/native. Everything else — undici, unirest, jQuery, XHR, and the
        // long tail of languages — is noise on a TypeScript-first API.
        defaultHttpClient: { targetKey: 'shell', clientKey: 'curl' },
        hiddenClients: [
          'c',
          'clojure',
          'csharp',
          'dart',
          'fsharp',
          'http',
          'java',
          'julia',
          'kotlin',
          'objc',
          'ocaml',
          'php',
          'powershell',
          'r',
          'ruby',
          'rust',
          'swift',
          'js/jquery',
          'js/xhr',
          'js/ofetch',
          'js/axios',
          'node/undici',
          'node/ofetch',
          'python/python3',
          'python/aiohttp',
          'python/httpx_sync',
          'python/httpx_async',
          'shell/httpie',
          'shell/wget',
        ],
      }}
    />
  );
}
