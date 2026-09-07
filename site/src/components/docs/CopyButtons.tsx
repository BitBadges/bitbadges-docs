'use client';

import { useEffect } from 'react';

/**
 * The text a code figure's copy button should put on the clipboard.
 *
 * Always the figure's `data-code-source` — the complete original source,
 * folded lines included — never the text that happens to be visible.
 */
export function codeSourceFor(button: Element | null): string | null {
  return button?.closest('figure')?.getAttribute('data-code-source') ?? null;
}

export type CodeView = 'collapsed' | 'full';

const VIEW_KEY = 'bb-docs:code-view';

/** Switch one folded figure between its two views and keep its tabs and ARIA in step. */
export function setCodeView(figure: Element, view: CodeView) {
  figure.setAttribute('data-view', view);
  for (const tab of figure.querySelectorAll<HTMLButtonElement>('button[data-view-tab]')) {
    tab.setAttribute('aria-selected', String(tab.getAttribute('data-view-tab') === view));
  }
  // The folded lines are rendered but clipped while collapsed, so without
  // this they would be read out alongside the elision row.
  for (const lines of figure.querySelectorAll('.code-fold-lines')) {
    if (view === 'full') lines.removeAttribute('aria-hidden');
    else lines.setAttribute('aria-hidden', 'true');
  }
}

function storedView(): CodeView | null {
  try {
    const value = localStorage.getItem(VIEW_KEY);
    return value === 'full' || value === 'collapsed' ? value : null;
  } catch {
    return null;
  }
}

/**
 * One delegated listener for every code block's copy button and view tabs.
 *
 * The buttons are part of the server-rendered markdown HTML, so there is no
 * per-block React component and no hydration cost. A reader who picks Full
 * once keeps it on every folded block, on this page and the next.
 */
export function CopyButtons() {
  useEffect(() => {
    const apply = (view: CodeView) => {
      for (const figure of document.querySelectorAll('figure[data-code][data-view]')) setCodeView(figure, view);
    };
    const remembered = storedView();
    if (remembered && remembered !== 'collapsed') apply(remembered);

    const onClick = async (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      const tab = target?.closest<HTMLButtonElement>('button[data-view-tab]');
      if (tab) {
        const view = tab.getAttribute('data-view-tab') === 'full' ? 'full' : 'collapsed';
        try {
          localStorage.setItem(VIEW_KEY, view);
        } catch {
          // Private mode or storage disabled: the choice still applies to this page.
        }
        apply(view);
        return;
      }

      const button = target?.closest<HTMLButtonElement>('button[data-copy]');
      if (!button) return;

      const source = codeSourceFor(button);
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
