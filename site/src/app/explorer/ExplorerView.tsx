import Link from 'next/link';

import { ExternalIcon } from '@/components/docs/Icons';
import { EXPLORERS, EXPLORER_SANDBOX, getExplorer, type ExplorerId } from './explorers';

/**
 * Full-height chrome around a framed explorer.
 *
 * Server-rendered end to end: the sub-tabs are ordinary links to the two
 * explorer routes, so the choice lives in the URL and a link to one explorer
 * opens that one.
 */
export function ExplorerView({ id }: { id: ExplorerId }) {
  const explorer = getExplorer(id);

  return (
    <div id="doc-content" className="explorer-shell">
      <div className="explorer-bar">
        <nav aria-label="Explorers" className="segmented">
          {EXPLORERS.map((target) => (
            <Link
              key={target.id}
              href={target.route}
              aria-current={target.id === id ? 'page' : undefined}
              className="segmented-tab"
            >
              {target.label}
            </Link>
          ))}
        </nav>

        {/*
          The parent page cannot tell a framed site apart from one the browser
          refused to frame: both fire `load`, both report cross-origin, and a
          refused frame paints an opaque canvas rather than staying transparent.
          So the escape hatch is stated unconditionally instead of being
          switched on by a detector that would guess wrong.
        */}
        <p className="explorer-caption">
          Embedded from <span className="explorer-origin">{explorer.origin}</span> — a separate BitBadges site.{' '}
          <span className="explorer-caption-hint">If it does not appear, open it in a new tab.</span>
        </p>

        <a className="explorer-open" href={explorer.url} target="_blank" rel="noopener">
          Open in new tab
          <ExternalIcon className="h-[0.85rem] w-[0.85rem]" />
        </a>
      </div>

      <div className="explorer-frame">
        {/*
          A placeholder behind the frame, so the panel is never an empty
          rectangle while the explorer boots. It is not a failure state: a
          refused frame paints over it, which is why the caption above carries
          the escape hatch permanently.
        */}
        <div className="explorer-frame-fallback">
          <p>
            Loading <span className="explorer-origin">{explorer.origin}</span>…
          </p>
          <a className="explorer-open" href={explorer.url} target="_blank" rel="noopener">
            Open in new tab
            <ExternalIcon className="h-[0.85rem] w-[0.85rem]" />
          </a>
        </div>

        <iframe
          src={explorer.url}
          title={`${explorer.title} (${explorer.origin})`}
          sandbox={EXPLORER_SANDBOX}
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
