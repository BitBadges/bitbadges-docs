'use client';

import { useEffect, useState } from 'react';
import type { Heading } from '@/lib/docs/markdown';

/** On-page contents with scroll spy. Hidden when a page has fewer than two headings. */
export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState<string | null>(headings[0]?.id ?? null);

  useEffect(() => {
    if (headings.length === 0) return;
    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    // Track the last heading above the reading line rather than whichever
    // element intersects, so short sections don't skip.
    const onScroll = () => {
      const line = window.scrollY + 140;
      let current = elements[0].id;
      for (const el of elements) {
        if (el.offsetTop <= line) current = el.id;
        else break;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="mb-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.09em] text-[var(--fg-faint)]">
        On this page
      </p>
      <ul className="border-l border-[var(--border)]">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              data-depth={heading.depth}
              data-active={active === heading.id}
              className="toc-link"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
