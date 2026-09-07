/**
 * The per-page actions menu: the agent prompt it copies, the prefilled links
 * it opens, and the guarantee that every doc page renders the control once and
 * advertises its Markdown twin in the head.
 */
import { describe, expect, test } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server';

import DocPage, { generateMetadata } from '../src/app/(docs)/[[...slug]]/page';
import { agentLinks, buildAgentPrompt, MCP_SETUP_ROUTE } from '../src/lib/docs/page-actions';
import { getAllRoutes } from '../src/lib/docs/content';

const sample = {
  title: 'Transferability',
  pageUrl: 'https://docs.bitbadges.io/token-standard/concepts/transferability',
  markdownUrl: 'https://docs.bitbadges.io/token-standard/concepts/transferability.md',
  llmsUrl: 'https://docs.bitbadges.io/llms.txt',
};

describe('buildAgentPrompt', () => {
  test('produces the expected plain-English prompt for a page', () => {
    expect(buildAgentPrompt(sample)).toBe(
      [
        'Read the BitBadges docs page "Transferability" at https://docs.bitbadges.io/token-standard/concepts/transferability.md (the Markdown version of https://docs.bitbadges.io/token-standard/concepts/transferability).',
        'For related pages, use the docs index at https://docs.bitbadges.io/llms.txt. Each entry links a page; add .md to a page URL to get its Markdown.',
        'Then help me with my task using what these docs say.',
      ].join('\n'),
    );
  });

  test('prefilled links carry the same prompt, encoded', () => {
    const prompt = buildAgentPrompt(sample);
    const links = agentLinks(prompt);
    expect(links.chatgpt).toBe(`https://chatgpt.com/?q=${encodeURIComponent(prompt)}`);
    expect(links.claude).toBe(`https://claude.ai/new?q=${encodeURIComponent(prompt)}`);
    expect(new URL(links.claude).searchParams.get('q')).toBe(prompt);
  });
});

describe('doc page', () => {
  const params = Promise.resolve({ slug: ['token-standard', 'concepts', 'transferability'] });

  test('renders the actions control exactly once', async () => {
    const html = renderToStaticMarkup(await DocPage({ params }));
    expect(html.match(/data-page-actions/g)).toHaveLength(1);
    expect(html).toContain('aria-haspopup="menu"');
    expect(html).toContain('href="/token-standard/concepts/transferability.md"');
    expect(html).toContain(`href="${MCP_SETUP_ROUTE}"`);
  });

  test('the MCP setup route is a real page', async () => {
    expect(await getAllRoutes()).toContain(MCP_SETUP_ROUTE);
  });

});
