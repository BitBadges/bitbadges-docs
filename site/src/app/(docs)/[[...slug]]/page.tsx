import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { CopyButtons } from '@/components/docs/CopyButtons';
import { Pagination } from '@/components/docs/Pagination';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { docsConfig } from '@/lib/docs/config';
import { getAllRoutes, getDoc } from '@/lib/docs/content';

type PageProps = { params: Promise<{ slug?: string[] }> };

const routeOf = (slug?: string[]) => (slug?.length ? `/${slug.join('/')}` : '/');

/**
 * Every page is generated at build time from the markdown tree, so the content
 * directory is never read at runtime and does not need to ship with the server.
 * Unknown routes render the 404 page instead of attempting a live render.
 */
export const dynamicParams = false;

export async function generateStaticParams() {
  const routes = await getAllRoutes();
  return routes.map((route) => ({ slug: route === '/' ? [] : route.slice(1).split('/') }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const doc = await getDoc(routeOf((await params).slug));
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.description ?? docsConfig.siteDescription,
    openGraph: { title: doc.title, description: doc.description ?? docsConfig.siteDescription },
  };
}

export default async function DocPage({ params }: PageProps) {
  const doc = await getDoc(routeOf((await params).slug));
  if (!doc) notFound();

  return (
    <div className="flex gap-8">
      <article id="doc-content" className="min-w-0 flex-1 py-9 lg:py-11 lg:pl-8">
        <div className="mx-auto max-w-[46rem]">
          <header className="mb-8">
            <h1 className="text-[2.1rem] font-bold leading-[1.18] tracking-[-0.022em] text-[var(--fg)]">
              {doc.title}
            </h1>
            {doc.description && (
              <p className="mt-3 text-[1.05rem] leading-relaxed text-[var(--fg-muted)]">{doc.description}</p>
            )}
          </header>

          <div className="doc" dangerouslySetInnerHTML={{ __html: doc.html }} />

          <Pagination prev={doc.prev} next={doc.next} basePath={docsConfig.basePath} />

          {doc.editUrl && (
            <p className="mt-8 text-sm">
              <a
                href={doc.editUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--fg-faint)] underline-offset-4 transition hover:text-[var(--brand)] hover:underline"
              >
                Edit this page on GitHub
              </a>
            </p>
          )}
        </div>
      </article>

      <aside className="scroll-rail sticky top-[var(--shell-topbar)] hidden h-[calc(100dvh-var(--shell-topbar))] w-[var(--shell-toc)] shrink-0 overflow-y-auto py-11 xl:block">
        <TableOfContents headings={doc.headings} />
      </aside>

      <CopyButtons />
    </div>
  );
}
