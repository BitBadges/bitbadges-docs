import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

import { Shell } from '@/components/docs/Shell';
import { themeScript } from '@/components/docs/ThemeToggle';
import { docsConfig } from '@/lib/docs/config';
import { getNav } from '@/lib/docs/content';
import { tabsFromNav } from '@/lib/docs/tabs';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = {
  // Absolute URLs for social cards and canonical links come from this.
  metadataBase: new URL(docsConfig.siteUrl),
  title: { default: docsConfig.siteName, template: `%s · ${docsConfig.siteName}` },
  description: docsConfig.siteDescription,
  applicationName: docsConfig.siteName,
  // Doc pages add their Markdown twin next to this; see (docs)/[[...slug]]/page.tsx.
  alternates: { types: { 'text/plain': `${docsConfig.basePath}/llms.txt` } },
  openGraph: {
    type: 'website',
    siteName: docsConfig.siteName,
    title: docsConfig.siteName,
    description: docsConfig.siteDescription,
    url: '/',
    images: [{ url: `${docsConfig.basePath}/og.png`, width: 1200, height: 630, alt: docsConfig.siteName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: docsConfig.siteName,
    description: docsConfig.siteDescription,
    images: [`${docsConfig.basePath}/og.png`],
    site: '@bitbadges_io',
  },
  // The circular mark, the same file the top bar renders.
  icons: {
    icon: [{ url: `${docsConfig.basePath}/icon.svg`, type: 'image/svg+xml' }],
    apple: [{ url: `${docsConfig.basePath}/apple-icon.png`, sizes: '180x180' }],
  },
  manifest: `${docsConfig.basePath}/manifest.webmanifest`,
};

/** Matches the dark and light page backgrounds so mobile browser chrome blends in. */
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0f1e' },
  ],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const tabs = tabsFromNav(await getNav());

  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Applies the stored theme before first paint to avoid a flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a
          href="#doc-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[var(--bg-raised)] focus:px-4 focus:py-2 focus:shadow-[var(--shadow-md)]"
        >
          Skip to content
        </a>
        <Shell
          tabs={tabs}
          basePath={docsConfig.basePath}
          searchIndexUrl={`${docsConfig.basePath}/search-index.json`}
        >
          {children}
        </Shell>
      </body>
    </html>
  );
}
