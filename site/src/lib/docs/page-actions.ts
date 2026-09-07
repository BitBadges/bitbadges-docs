/**
 * What the per-page actions menu copies and opens. Framework-free so the
 * prompt is testable as a string and the client component stays thin.
 */

/** The page that explains the BitBadges builder MCP server and its harness configs. */
export const MCP_SETUP_ROUTE = '/agents/setup';

export type AgentPromptInput = {
  title: string;
  /** Absolute URL of the rendered page. */
  pageUrl: string;
  /** Absolute URL of the page's Markdown twin. */
  markdownUrl: string;
  /** Absolute URL of the llms.txt index. */
  llmsUrl: string;
};

/** A ready-to-paste prompt: read this page, use the index for more, then help. */
export function buildAgentPrompt({ title, pageUrl, markdownUrl, llmsUrl }: AgentPromptInput): string {
  return [
    `Read the BitBadges docs page "${title}" at ${markdownUrl} (the Markdown version of ${pageUrl}).`,
    `For related pages, use the docs index at ${llmsUrl}. Each entry links a page; add .md to a page URL to get its Markdown.`,
    'Then help me with my task using what these docs say.',
  ].join('\n');
}

/** Prefilled new-chat links that carry the prompt. */
export function agentLinks(prompt: string): { chatgpt: string; claude: string } {
  const q = encodeURIComponent(prompt);
  return {
    chatgpt: `https://chatgpt.com/?q=${q}`,
    claude: `https://claude.ai/new?q=${q}`,
  };
}
