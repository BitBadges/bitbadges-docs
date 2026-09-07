import type { Metadata } from 'next';
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
  title: { default: docsConfig.siteName, template: `%s · ${docsConfig.siteName}` },
  description: docsConfig.siteDescription,
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
