import Link from 'next/link';
import type { NavNode } from '@/lib/docs/summary';
import { ChevronIcon } from './Icons';

export function Pagination({ prev, next, basePath }: { prev: NavNode | null; next: NavNode | null; basePath: string }) {
  if (!prev && !next) return null;

  return (
    <nav aria-label="Page navigation" className="mt-16 grid gap-3 border-t border-[var(--border)] pt-7 sm:grid-cols-2">
      {prev ? (
        <Link
          href={`${basePath}${prev.href}`}
          className="group flex flex-col gap-1 rounded-xl border border-[var(--border)] bg-[var(--bg-raised)] p-4 transition hover:border-[color-mix(in_oklab,var(--brand)_50%,var(--border))] hover:shadow-[var(--shadow-md)]"
        >
          <span className="flex items-center gap-1 text-[0.72rem] uppercase tracking-[0.08em] text-[var(--fg-faint)]">
            <ChevronIcon className="h-3 w-3 rotate-180" />
            Previous
          </span>
          <span className="truncate font-medium text-[var(--fg)] group-hover:text-[var(--brand)]">{prev.title}</span>
        </Link>
      ) : (
        <span />
      )}

      {next && (
        <Link
          href={`${basePath}${next.href}`}
          className="group flex flex-col items-end gap-1 rounded-xl border border-[var(--border)] bg-[var(--bg-raised)] p-4 text-right transition hover:border-[color-mix(in_oklab,var(--brand)_50%,var(--border))] hover:shadow-[var(--shadow-md)] sm:col-start-2"
        >
          <span className="flex items-center gap-1 text-[0.72rem] uppercase tracking-[0.08em] text-[var(--fg-faint)]">
            Next
            <ChevronIcon className="h-3 w-3" />
          </span>
          <span className="truncate font-medium text-[var(--fg)] group-hover:text-[var(--brand)]">{next.title}</span>
        </Link>
      )}
    </nav>
  );
}
