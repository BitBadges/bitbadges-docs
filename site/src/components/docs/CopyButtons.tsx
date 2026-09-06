'use client';

import { useEffect } from 'react';

/**
 * One delegated listener for every code block's copy button.
 *
 * The buttons are part of the server-rendered markdown HTML, so there is no
 * per-block React component and no hydration cost.
 */
export function CopyButtons() {
  useEffect(() => {
    const onClick = async (event: MouseEvent) => {
      const button = (event.target as HTMLElement)?.closest<HTMLButtonElement>('button[data-copy]');
      if (!button) return;

      const source = button.closest('figure')?.getAttribute('data-code-source');
      if (!source) return;

      try {
        await navigator.clipboard.writeText(source);
        button.textContent = 'Copied';
      } catch {
        button.textContent = 'Press ⌘C';
      }
      setTimeout(() => {
        button.textContent = 'Copy';
      }, 1600);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
