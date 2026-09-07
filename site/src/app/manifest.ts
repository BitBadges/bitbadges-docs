import type { MetadataRoute } from 'next';
import { docsConfig } from '@/lib/docs/config';

/** Installable-app metadata. Icons are the same circular mark as the favicon and the top bar. */
export default function manifest(): MetadataRoute.Manifest {
  const base = docsConfig.basePath;
  return {
    name: docsConfig.siteName,
    short_name: 'BitBadges Docs',
    description: docsConfig.siteDescription,
    start_url: `${base}/`,
    display: 'standalone',
    background_color: '#0b0f1e',
    theme_color: '#0b0f1e',
    icons: [
      { src: `${base}/icon-192.png`, sizes: '192x192', type: 'image/png', purpose: 'maskable' },
      { src: `${base}/icon-512.png`, sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
