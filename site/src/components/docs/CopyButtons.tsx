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

/** Reflect a fold's open state onto its clipped line container. */
function syncFold(details: HTMLDetailsElement) {
  const lines = details.querySelector(':scope > .code-fold-lines');
  if (!lines) return;
  // The lines are rendered but clipped when closed, so without this they would
  // be read out alongside the "n lines hidden" summary.
  if (details.open) lines.removeAttribute('aria-hidden');
  else lines.setAttribute('aria-hidden', 'true');
}

/** Relabel a figure's expand-all button from the state of its folds. */
function syncExpandAll(figure: Element) {
  const button = figure.querySelector<HTMLButtonElement>('button[data-expand-all]');
  if (!button) return;
  const folds = [...figure.querySelectorAll<HTMLDetailsElement>('details.code-fold')];
  const allOpen = folds.length > 0 && folds.every((fold) => fold.open);
  button.setAttribute('aria-expanded', String(allOpen));
  button.textContent = allOpen ? 'Collapse all' : 'Expand all';
}

/**
 * One delegated listener for every code block's copy and expand-all buttons.
 *
 * The buttons are part of the server-rendered markdown HTML, so there is no
 * per-block React component and no hydration cost. Everything here is a
 * progressive enhancement — the folds are native `<details>` and toggle
 * individually without it.
 */
export function CopyButtons() {
  useEffect(() => {
    const onClick = async (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      const expandAll = target?.closest<HTMLButtonElement>('button[data-expand-all]');
      if (expandAll) {
        const figure = expandAll.closest('figure');
        if (!figure) return;
        const open = expandAll.getAttribute('aria-expanded') !== 'true';
        for (const fold of figure.querySelectorAll<HTMLDetailsElement>('details.code-fold')) {
          fold.open = open;
          syncFold(fold);
        }
        syncExpandAll(figure);
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

    // `toggle` does not bubble, so it has to be caught in the capture phase.
    const onToggle = (event: Event) => {
      const details = event.target as HTMLDetailsElement | null;
      if (!details?.matches?.('details.code-fold')) return;
      syncFold(details);
      const figure = details.closest('figure');
      if (figure) syncExpandAll(figure);
    };

    document.addEventListener('click', onClick);
    document.addEventListener('toggle', onToggle, true);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('toggle', onToggle, true);
    };
  }, []);

  return null;
}
