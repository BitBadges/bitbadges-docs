/**
 * Translate GitBook's liquid-style blocks into remark container/leaf directives.
 *
 * Running this before the markdown parser (rather than as a remark plugin) keeps
 * the block bodies as ordinary markdown, so `**bold**` inside a hint still
 * renders. Anything inside a fenced code block is left verbatim — docs that
 * *document* GitBook syntax must keep showing it.
 */

const FENCE = /^\s{0,3}(`{3,}|~{3,})/;

/** Pull `key="value"` pairs out of a liquid tag body. */
function parseAttrs(body: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  for (const match of body.matchAll(/([a-zA-Z_][\w-]*)\s*=\s*"([^"]*)"/g)) {
    attrs[match[1]] = match[2];
  }
  return attrs;
}

function serializeAttrs(attrs: Record<string, string>): string {
  const pairs = Object.entries(attrs).map(([k, v]) => `${k}="${v}"`);
  return pairs.length ? `{${pairs.join(' ')}}` : '';
}

const OPEN_CONTAINERS: Record<string, (attrs: Record<string, string>) => string> = {
  hint: (attrs) => `:::hint${serializeAttrs({ style: attrs.style || 'info' })}`,
  'content-ref': (attrs) => `:::content-ref${serializeAttrs({ url: attrs.url ?? '' })}`,
};

const LEAVES: Record<string, (attrs: Record<string, string>) => string> = {
  embed: (attrs) => `::embed${serializeAttrs({ url: attrs.url ?? '' })}`,
  file: (attrs) => `::file${serializeAttrs({ src: attrs.src ?? '' })}`,
};

export function gitbookToDirectives(source: string): string {
  const lines = source.split('\n');
  const out: string[] = [];
  let fence: string | null = null;
  const openTags: string[] = [];

  for (const line of lines) {
    const fenceMatch = FENCE.exec(line);
    if (fenceMatch) {
      const marker = fenceMatch[1];
      if (fence === null) fence = marker[0];
      else if (marker[0] === fence) fence = null;
      out.push(line);
      continue;
    }
    if (fence !== null) {
      out.push(line);
      continue;
    }

    const tag = /^\s*\{%\s*([@\w][\w./-]*)([\s\S]*?)%\}\s*$/.exec(line);
    if (!tag) {
      out.push(line);
      continue;
    }

    const name = tag[1];
    const attrs = parseAttrs(tag[2]);

    if (name.startsWith('end')) {
      const opened = name.slice(3);
      // Only close containers we actually opened; drop strays.
      if (openTags[openTags.length - 1] === opened) {
        openTags.pop();
        out.push(':::');
      }
      continue;
    }

    if (name in OPEN_CONTAINERS) {
      openTags.push(name);
      out.push(OPEN_CONTAINERS[name](attrs));
      continue;
    }

    if (name in LEAVES) {
      out.push(LEAVES[name](attrs));
      continue;
    }

    // GitBook integration blocks (`{% @org/widget url="..." %}`) have no
    // self-hosted equivalent; surface the target as an embed card.
    if (name.startsWith('@') && attrs.url) {
      out.push(LEAVES.embed(attrs));
      continue;
    }

    // Unrecognised tag: drop the line so no liquid leaks into the page.
  }

  return out.join('\n');
}
