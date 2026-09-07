import type { MetadataRoute } from 'next';

import { docsConfig } from '@/lib/docs/config';

/**
 * Everything is public documentation. The AI crawlers are named so a policy
 * that reads only the agent-specific rules still finds an explicit allow.
 */
export default function robots(): MetadataRoute.Robots {
  const allow = `${docsConfig.basePath}/`;
  return {
    rules: [
      { userAgent: '*', allow },
      { userAgent: 'GPTBot', allow },
      { userAgent: 'ClaudeBot', allow },
      { userAgent: 'PerplexityBot', allow },
      { userAgent: 'Google-Extended', allow },
    ],
  };
}
