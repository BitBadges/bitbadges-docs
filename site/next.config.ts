import type { NextConfig } from 'next';

/**
 * `DOCS_BASE_PATH` is the one knob that matters when these docs move from their
 * own domain to a sub-path of another app (e.g. bitbadges.io/docs). Keep it in
 * sync with the same variable read by src/lib/docs/config.ts.
 */
const basePath = (process.env.DOCS_BASE_PATH ?? '').replace(/\/$/, '');

const nextConfig: NextConfig = {
  basePath: basePath || undefined,
  reactStrictMode: true,
  // Every page is prerendered, so the runtime image only needs the server and
  // the built output — not the content tree or the full node_modules.
  output: 'standalone',
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
