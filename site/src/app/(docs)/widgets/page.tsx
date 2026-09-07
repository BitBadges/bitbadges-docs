import type { Metadata } from 'next';

import { createWidgetElement, widgetNames, widgets } from '@/components/widgets';

/**
 * Every widget with every example on one page, for eyeballing after a change.
 * Not in the nav, not in the search index (which only reads markdown), and
 * marked noindex. `scripts/widget-gallery-screenshots.ts` reads it too.
 */
export const metadata: Metadata = {
  title: 'Widget gallery',
  robots: { index: false, follow: false },
};

export default function WidgetGalleryPage() {
  return (
    <article className="min-w-0 flex-1 py-9 lg:py-11 lg:pl-8">
      <div className="mx-auto max-w-[52rem]">
        <header className="mb-8">
          <h1 className="text-[2.1rem] font-bold leading-[1.18] tracking-[-0.022em] text-[var(--fg)]">Widget gallery</h1>
          <p className="mt-3 text-[1.05rem] leading-relaxed text-[var(--fg-muted)]">
            Read-only mocks of bitbadges.io UI, embeddable from markdown with <code>::widget</code>. One block per example.
          </p>
        </header>
        <div className="doc">
          {widgetNames.map((name) => (
            <section key={name} id={name}>
              <h2 className="text-xl font-bold">{name}</h2>
              <div className="flex flex-col gap-6">
                {widgets[name].examples.map((example) => (
                  <div key={example.name} className="rounded-xl border border-dashed border-[var(--border-strong)] p-4">
                    <div className="mb-3 font-mono text-xs text-[var(--fg-faint)]">
                      {name} / {example.name}
                    </div>
                    <div data-widget-example={`${name}/${example.name}`} className="[&>.widget]:mt-0">{createWidgetElement(name, example.props)}</div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
