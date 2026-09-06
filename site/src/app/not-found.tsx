import Link from 'next/link';
import { docsConfig } from '@/lib/docs/config';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center py-28 text-center">
      <p className="wordmark text-6xl font-bold">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-[var(--fg)]">Page not found</h1>
      <p className="mt-2 text-[var(--fg-muted)]">
        This page moved or never existed. Try the search (⌘K) or head back to the overview.
      </p>
      <Link
        href={docsConfig.basePath || '/'}
        className="mt-7 rounded-lg bg-[var(--brand)] px-4 py-2.5 text-sm font-semibold text-[var(--brand-contrast)] transition hover:opacity-90"
      >
        Back to the docs
      </Link>
    </div>
  );
}
