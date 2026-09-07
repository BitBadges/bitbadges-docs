/**
 * Parser for GitBook's `SUMMARY.md` table of contents.
 *
 * Keeping SUMMARY.md as the single source of navigation means the site and the
 * existing GitBook space stay in lockstep — one nav file, no duplicate config.
 */
import { filePathToRoute } from './paths';

export type NavNode = {
  title: string;
  /** Site route for internal pages, verbatim url for external ones. */
  href: string;
  external: boolean;
  children: NavNode[];
};

export type NavGroup = {
  /** `null` for entries listed before the first `##` heading. */
  title: string | null;
  items: NavNode[];
};

const ITEM = /^(\s*)[*-]\s+\[(.+?)\]\((.+?)\)\s*$/;
const GROUP = /^##\s+(.+?)\s*$/;

function isExternal(target: string): boolean {
  return /^[a-z][a-z0-9+.-]*:/i.test(target) || target.startsWith('//');
}

export function parseSummary(markdown: string): NavGroup[] {
  const groups: NavGroup[] = [];
  let current: NavGroup | null = null;
  // stack[i] holds the most recent node at indent depth i, so a deeper item
  // attaches to the nearest shallower one rather than to a fixed parent.
  let stack: NavNode[] = [];

  const ensureGroup = (): NavGroup => {
    if (!current) {
      current = { title: null, items: [] };
      groups.push(current);
    }
    return current;
  };

  for (const line of markdown.split('\n')) {
    const group = GROUP.exec(line);
    if (group) {
      current = { title: group[1], items: [] };
      groups.push(current);
      stack = [];
      continue;
    }

    const item = ITEM.exec(line);
    if (!item) continue;

    const [, indent, title, rawTarget] = item;
    const target = rawTarget.trim();
    const external = isExternal(target);
    const node: NavNode = {
      title: title.trim(),
      href: external ? target : filePathToRoute(target),
      external,
      children: [],
    };

    const depth = Math.floor(indent.replace(/\t/g, '  ').length / 2);
    const parent = stack[depth - 1];
    if (depth > 0 && parent) parent.children.push(node);
    else ensureGroup().items.push(node);

    stack = stack.slice(0, depth);
    stack[depth] = node;
  }

  return groups.filter((g) => g.items.length > 0);
}

/** Internal pages in reading order — the sequence used for prev/next links. */
export function flattenNav(groups: NavGroup[]): NavNode[] {
  const out: NavNode[] = [];
  const walk = (nodes: NavNode[]) => {
    for (const node of nodes) {
      if (!node.external) out.push(node);
      walk(node.children);
    }
  };
  for (const group of groups) walk(group.items);
  return out;
}
