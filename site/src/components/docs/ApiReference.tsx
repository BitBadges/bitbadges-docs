'use client';

// Imported statically so Next collects the stylesheet into this route's CSS
// chunk; a CSS import reached only through next/dynamic is not bundled.
import '@scalar/api-reference-react/style.css';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

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
 * Hide Scalar's "Ask AI" control.
 *
 * Scalar exposes no configuration flag for it and its markup carries no stable
 * hook (no id, no aria-label, build-generated class names), so it is matched by
 * its label. If Scalar renames or removes the control this quietly does nothing,
 * which is the right failure mode.
 */
function useHideAskAi(ready: boolean) {
  useEffect(() => {
    if (!ready) return;
    const root = document.querySelector('.api-shell');
    if (!root) return;

    const hide = () => {
      for (const button of root.querySelectorAll('button')) {
        if (/^ask ai\b/i.test(button.textContent?.trim() ?? '')) button.style.display = 'none';
      }
    };

    hide();
    const observer = new MutationObserver(hide);
    observer.observe(root, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [ready]);
}

/** Interactive OpenAPI reference — the self-hosted replacement for Stoplight. */
export function ApiReference({ specUrl }: { specUrl: string }) {
  const [dark, setDark] = useState<boolean | null>(null);
  useHideAskAi(dark !== null);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setDark(root.classList.contains('dark'));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  if (dark === null) return null;

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
      }}
    />
  );
}
