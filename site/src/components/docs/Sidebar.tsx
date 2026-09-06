'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import type { NavGroup, NavNode } from '@/lib/docs/summary';
import { ChevronIcon, ExternalIcon } from './Icons';

/** Routes on the path from the tree root to the active page. */
function ancestryOf(groups: NavGroup[], pathname: string): Set<string> {
  const open = new Set<string>();
  const walk = (nodes: NavNode[], trail: string[]): boolean => {
    for (const node of nodes) {
      const hit = node.href === pathname || walk(node.children, [...trail, node.href]);
      if (hit) {
        if (node.children.length) open.add(node.href);
        for (const href of trail) open.add(href);
        return true;
      }
    }
    return false;
  };
  for (const group of groups) walk(group.items, []);
  return open;
}

function NavItem({ node, depth, expanded, onToggle, pathname }: {
  node: NavNode;
  depth: number;
  expanded: Set<string>;
  onToggle: (href: string) => void;
  pathname: string;
}) {
  const hasChildren = node.children.length > 0;
  const isOpen = expanded.has(node.href);
  const isCurrent = !node.external && node.href === pathname;

  return (
    <li>
      <div className="flex items-center gap-0.5">
        {node.external ? (
          <a
            href={node.href}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link flex flex-1 items-center gap-1.5"
          >
            <span className="truncate">{node.title}</span>
            <ExternalIcon className="h-3 w-3 shrink-0 opacity-55" />
          </a>
        ) : (
          <Link href={node.href} aria-current={isCurrent ? 'page' : undefined} className="nav-link flex-1 truncate">
            {node.title}
          </Link>
        )}

        {hasChildren && (
          <button
            type="button"
            onClick={() => onToggle(node.href)}
            aria-label={isOpen ? `Collapse ${node.title}` : `Expand ${node.title}`}
            aria-expanded={isOpen}
            className="grid h-6 w-6 shrink-0 place-items-center rounded text-[var(--fg-faint)] transition hover:bg-[var(--bg-inset)] hover:text-[var(--fg)]"
          >
            <ChevronIcon className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
          </button>
        )}
      </div>

      {hasChildren && isOpen && (
        <ul className="nav-branch mt-0.5 space-y-0.5">
          {node.children.map((child) => (
            <NavItem
              key={`${child.href}-${child.title}`}
              node={child}
              depth={depth + 1}
              expanded={expanded}
              onToggle={onToggle}
              pathname={pathname}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export function Sidebar({ groups, onNavigate }: { groups: NavGroup[]; onNavigate?: () => void }) {
  const pathname = usePathname();
  const ancestry = useMemo(() => ancestryOf(groups, pathname), [groups, pathname]);
  const [expanded, setExpanded] = useState<Set<string>>(ancestry);

  // Re-open the branch containing the page whenever navigation happens, while
  // leaving branches the reader opened by hand untouched.
  useEffect(() => {
    setExpanded((current) => new Set([...current, ...ancestry]));
  }, [ancestry]);

  const toggle = (href: string) =>
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(href)) next.delete(href);
      else next.add(href);
      return next;
    });

  return (
    <nav aria-label="Documentation" className="pb-16" onClick={onNavigate}>
      {groups.map((group, index) => (
        <div key={group.title ?? `group-${index}`} className={index === 0 ? '' : 'mt-7'}>
          {group.title && (
            <h2 className="mb-2 px-[0.7rem] text-[0.68rem] font-semibold uppercase tracking-[0.09em] text-[var(--fg-faint)]">
              {group.title}
            </h2>
          )}
          <ul className="space-y-0.5">
            {group.items.map((node) => (
              <NavItem
                key={`${node.href}-${node.title}`}
                node={node}
                depth={0}
                expanded={expanded}
                onToggle={toggle}
                pathname={pathname}
              />
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
