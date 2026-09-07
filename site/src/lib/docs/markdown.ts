/**
 * Markdown -> HTML pipeline for the docs corpus.
 *
 * Deliberately build-time and framework-free: it takes a string and returns a
 * string, so it runs identically in a Next route, a script, or a test. The only
 * inputs that vary between deployments (`assetsPrefix`, `basePath`) are passed
 * in rather than read from the environment.
 */
import matter from 'gray-matter';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeRaw from 'rehype-raw';
import rehypeShiki from '@shikijs/rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { toString as hastToString } from 'hast-util-to-string';
import type { Element, ElementContent, Root as HastRoot } from 'hast';
import type { Root as MdastRoot } from 'mdast';

import { collapsedSourceFor } from './fold';
import { rehypeMermaid } from './mermaid';
import { rehypeThemedImages } from './themedImages';
import { stripWidgets } from './widgets';
import { gitbookToDirectives } from './gitbook';
import { resolveAssetPath, resolveDocLink } from './paths';
import { remarkWidgets } from './widgets';

export type Heading = { depth: number; id: string; text: string };

export type RenderedDoc = {
  title: string;
  description: string | null;
  html: string;
  headings: Heading[];
  /** Prose with markup and code stripped — the body of the search index. */
  text: string;
};

export type RenderOptions = {
  /** Content-root-relative path of the source file, e.g. `for-developers/x.md`. */
  filePath: string;
  /** Public URL prefix that serves the content tree's static assets. */
  assetsPrefix: string;
  /** Route prefix when the docs are mounted under a sub-path, e.g. `/docs`. */
  basePath: string;
  /**
   * Page title for a route, used to label content-ref cards the way GitBook
   * does. Omit to fall back to the link text authored in the markdown.
   */
  resolveTitle?: (route: string) => string | undefined;
};

const isExternal = (href: string) => /^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//');

/** Encode each path segment so spaces and parens survive as a valid URL. */
function encodePath(path: string): string {
  return path.split('/').map(encodeURIComponent).join('/');
}

/** Lift a leading h1 out of the tree; GitBook renders it as the page title. */
function remarkExtractTitle(store: { title?: string }) {
  return (tree: MdastRoot) => {
    const first = tree.children[0];
    if (first && first.type === 'heading' && first.depth === 1) {
      store.title = mdastText(first);
      tree.children.shift();
    }
  };
}

function mdastText(node: unknown): string {
  let out = '';
  visit(node as MdastRoot, (child: { type: string; value?: string }) => {
    if (child.type === 'text' || child.type === 'inlineCode') out += child.value ?? '';
  });
  return out.trim();
}

const GITBOOK_DIRECTIVES = new Set(['hint', 'content-ref', 'embed', 'file']);

/**
 * Turn directives the corpus never authored back into the text they came from.
 *
 * remark-directive reads any `:word` in prose as a text directive and would
 * drop it, so `badges:1:utoken` lost its `:utoken`. Only the directives
 * `gitbook.ts` emits are real; everything else is restored verbatim from the
 * source, so children keep the markdown they were written with.
 */
function remarkLiteralDirectives() {
  return (tree: MdastRoot, file: { value?: unknown }) => {
    const source = String(file.value ?? '');
    visit(tree, (node: any, index, parent: any) => {
      if (!parent || index === undefined) return;
      const kind = node.type as string;
      if (!kind.endsWith('Directive') || GITBOOK_DIRECTIVES.has(node.name)) return;

      const start = node.position?.start?.offset;
      const end = node.position?.end?.offset;
      const raw = start !== undefined && end !== undefined ? source.slice(start, end) : undefined;

      if (kind === 'textDirective') {
        const text = raw ?? `:${node.name}`;
        parent.children.splice(index, 1, { type: 'text', value: text });
        return index + 1;
      }

      // Leaf and container directives are block-level: keep the body and show
      // the opener (and closer) lines as plain paragraphs.
      const colons = kind === 'leafDirective' ? '::' : ':::';
      const firstLine = raw?.split('\n')[0] ?? `${colons}${node.name}`;
      const opener = { type: 'paragraph', children: [{ type: 'text', value: firstLine }] };
      const closer = { type: 'paragraph', children: [{ type: 'text', value: ':::' }] };
      const replacement = kind === 'leafDirective' ? [opener] : [opener, ...node.children, closer];
      parent.children.splice(index, 1, ...replacement);
      return index + replacement.length;
    });
  };
}

/**
 * Carry the fence info string (`fold=12-40`, `nofold`) through to hast.
 *
 * remark-rehype stores it on `data.meta`, which rehype-raw discards; an
 * element property survives the round trip.
 */
function remarkCodeMeta() {
  return (tree: MdastRoot) => {
    visit(tree, 'code', (node: any) => {
      if (!node.meta) return;
      node.data = { ...node.data, hProperties: { ...node.data?.hProperties, 'data-meta': node.meta } };
    });
  };
}

/** Map GitBook-derived directives onto the elements the stylesheet knows about. */
function remarkGitbookDirectives() {
  return (tree: MdastRoot) => {
    visit(tree, (node: any) => {
      if (node.type === 'containerDirective') {
        if (node.name === 'hint') {
          node.data = {
            ...node.data,
            hName: 'div',
            hProperties: { 'data-callout': node.attributes?.style || 'info' },
          };
        } else if (node.name === 'content-ref') {
          node.data = { ...node.data, hName: 'div', hProperties: { 'data-content-ref': '' } };
        }
        return;
      }

      if (node.type === 'leafDirective') {
        const url = node.attributes?.url ?? node.attributes?.src ?? '';
        const kind = node.name === 'file' ? 'data-file' : 'data-embed';
        if (node.name !== 'embed' && node.name !== 'file') return;
        node.data = { ...node.data, hName: 'div', hProperties: { [kind]: '' } };
        node.children = [
          { type: 'link', url, title: null, children: [{ type: 'text', value: url }] } as never,
        ];
      }
    });
  };
}

/** Rewrite links and assets, harden external links, and collect the TOC. */
function rehypeRewrite(options: RenderOptions, headings: Heading[]) {
  const { filePath, assetsPrefix, basePath } = options;

  const toRoute = (route: string) => (route.startsWith('/') ? `${basePath}${route}` : route);

  return (tree: HastRoot) => {
    visit(tree, 'element', (node: Element) => {
      if (node.tagName === 'a') {
        const href = String(node.properties?.href ?? '');
        if (!href) return;
        if (isExternal(href)) {
          node.properties!.target = '_blank';
          node.properties!.rel = ['noopener', 'noreferrer'];
          return;
        }
        const resolved = resolveDocLink(filePath, href);
        node.properties!.href = resolved.startsWith('/') ? toRoute(resolved) : resolved;
        return;
      }

      if (node.tagName === 'img') {
        const src = String(node.properties?.src ?? '');
        if (!src || isExternal(src)) return;
        // Widget logos live in the site's own public/ and are already basePath-prefixed.
        if (node.properties?.dataSiteAsset !== undefined) return;
        const asset = resolveAssetPath(filePath, src);
        if (asset) node.properties!.src = `${assetsPrefix}/${encodePath(asset)}`;
        node.properties!.loading ??= 'lazy';
        return;
      }

      if (/^h[23]$/.test(node.tagName)) {
        const id = String(node.properties?.id ?? '');
        if (id) headings.push({ depth: Number(node.tagName[1]), id, text: hastToString(node) });
      }
    });
  };
}


/**
 * Wrap code blocks and tables in the chrome the stylesheet expects.
 *
 * Runs before Shiki: Shiki replaces the `pre` element itself, so the figure has
 * to exist around it first, and the raw source has to be captured before
 * highlighting turns it into spans.
 */
function rehypeContentChrome() {
  return (tree: HastRoot) => {
    visit(tree, 'element', (node: Element, index, parent) => {
      if (!parent || index === undefined) return;

      if (node.tagName === 'table') {
        parent.children[index] = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['table-scroll'] },
          children: [node],
        };
        return;
      }

      if (node.tagName !== 'pre') return;
      const code = node.children.find(
        (child): child is Element => child.type === 'element' && child.tagName === 'code',
      );
      if (!code) return;

      const classes = (code.properties?.className ?? []) as string[];
      const lang = classes.map(String).find((c) => c.startsWith('language-'))?.slice(9) ?? 'text';
      const meta = String(code.properties?.['data-meta'] ?? code.properties?.dataMeta ?? '');
      delete code.properties?.['data-meta'];
      delete code.properties?.dataMeta;
      const source = hastToString(code).replace(/\n$/, '');
      const collapsed = collapsedSourceFor(lang, meta, source);

      // Two complete listings rather than one with pieces spliced out: the
      // collapsed JSON is then a document in its own right, and there is
      // nothing to mark where a member was dropped.
      // The wrapper carries the view name because Shiki replaces the `pre` it
      // highlights, and any attribute set on that `pre` goes with it.
      const view = (text: string, name: 'collapsed' | 'full'): Element => ({
        type: 'element',
        tagName: 'div',
        properties: { 'data-code-view': name },
        children: [
          {
            type: 'element',
            tagName: 'pre',
            properties: {},
            children: [
              {
                type: 'element',
                tagName: 'code',
                properties: { className: [`language-${lang}`] },
                children: [{ type: 'text', value: `${text}\n` }],
              },
            ],
          },
        ],
      });

      const caption: ElementContent[] = [
        { type: 'element', tagName: 'span', properties: {}, children: [{ type: 'text', value: lang }] },
      ];
      if (collapsed !== null) {
        const tab = (name: 'collapsed' | 'full', label: string): Element => ({
          type: 'element',
          tagName: 'button',
          properties: {
            type: 'button',
            role: 'tab',
            className: ['code-view-tab'],
            'data-view-tab': name,
            'aria-selected': name === 'collapsed' ? 'true' : 'false',
          },
          children: [{ type: 'text', value: label }],
        });
        caption.push({
          type: 'element',
          tagName: 'span',
          properties: { className: ['code-view'], role: 'tablist', 'aria-label': 'Code view' },
          children: [tab('collapsed', 'Collapsed'), tab('full', 'Full')],
        });
      }
      caption.push({
        type: 'element',
        tagName: 'button',
        properties: { type: 'button', className: ['copy-button'], 'data-copy': '' },
        children: [{ type: 'text', value: 'Copy' }],
      });

      parent.children[index] = {
        type: 'element',
        tagName: 'figure',
        properties: {
          'data-code': '',
          'data-code-source': source,
          ...(collapsed !== null ? { 'data-code-collapsed': collapsed, 'data-view': 'collapsed' } : {}),
        },
        children: [
          { type: 'element', tagName: 'figcaption', properties: {}, children: caption },
          ...(collapsed !== null ? [view(collapsed, 'collapsed'), view(source, 'full')] : [node]),
        ],
      };
      return 'skip';
    });
  };
}

/**
 * Label content-ref cards with the target page's title.
 *
 * The authored link text is normally just the file slug (`installation.md`),
 * which reads poorly on a card. Runs after link rewriting so the href is
 * already a site route.
 */
function rehypeContentRefTitles(options: RenderOptions) {
  const { basePath, resolveTitle } = options;

  return (tree: HastRoot) => {
    if (!resolveTitle) return;
    visit(tree, 'element', (node: Element) => {
      // remark-rehype may keep the literal attribute name or camel-case it.
      const props = node.properties ?? {};
      const isContentRef = 'data-content-ref' in props || 'dataContentRef' in props;
      if (node.tagName !== 'div' || !isContentRef) return;

      visit(node, 'element', (anchor: Element) => {
        if (anchor.tagName !== 'a') return;
        const href = String(anchor.properties?.href ?? '');
        const route = basePath && href.startsWith(basePath) ? href.slice(basePath.length) : href;
        const title = resolveTitle(route.split('#')[0] || '/');
        if (title) anchor.children = [{ type: 'text', value: title }];
      });
    });
  };
}

/** Strip code blocks and markup down to prose, for the search index. */
function plainText(markdown: string): string {
  return stripWidgets(markdown)
    .replace(/^---\n[\s\S]*?\n---\n/, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/~~~[\s\S]*?~~~/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^\s{0,3}#{1,6}\s+/gm, '')
    .replace(/[*_`>|]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export async function renderDoc(source: string, options: RenderOptions): Promise<RenderedDoc> {
  const { data, content } = matter(source);
  const store: { title?: string } = {};
  const headings: Heading[] = [];

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkDirective)
    .use(remarkWidgets, options)
    .use(remarkLiteralDirectives)
    .use(remarkCodeMeta)
    .use(remarkExtractTitle, store)
    .use(remarkGitbookDirectives)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeRewrite, options, headings)
    .use(rehypeThemedImages, options)
    .use(rehypeContentRefTitles, options)
    .use(rehypeAutolinkHeadings, {
      behavior: 'append',
      properties: { class: 'heading-anchor', ariaHidden: 'true', tabIndex: -1 },
      content: { type: 'text', value: '#' },
    })
    .use(rehypeMermaid, { filePath: options.filePath })
    .use(rehypeContentChrome)
    .use(rehypeShiki, {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultLanguage: 'text',
      fallbackLanguage: 'text',
      transformers: [
        {
          name: 'stamp-language',
          pre(this: { options: { lang: string } }, node: Element) {
            node.properties['data-lang'] = this.options.lang;
          },
        },
      ],
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(gitbookToDirectives(content));

  const fallbackTitle = options.filePath.split('/').pop()!.replace(/\.md$/i, '');
  const frontmatterTitle = typeof data.title === 'string' ? data.title : undefined;
  const description = typeof data.description === 'string' ? data.description.trim() : null;

  return {
    title: store.title || frontmatterTitle || fallbackTitle,
    description,
    html: String(file),
    headings,
    text: plainText(content),
  };
}
