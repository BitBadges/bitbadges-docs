'use client';

import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from './Icons';

const STORAGE_KEY = 'bb-docs-theme';

/** Applied before paint by the inline script in the layout; kept in sync here. */
export function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
    } catch {
      // Private mode or blocked storage: the choice just won't persist.
    }
    setDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--border)] bg-[var(--bg-raised)] text-[var(--fg-muted)] transition hover:text-[var(--fg)]"
    >
      {dark ? <SunIcon className="h-[1.05rem] w-[1.05rem]" /> : <MoonIcon className="h-[1.05rem] w-[1.05rem]" />}
    </button>
  );
}

export const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('${STORAGE_KEY}');
    var dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;
