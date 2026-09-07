'use client';

import { usePathname } from 'next/navigation';

/**
 * Render children only under a route prefix.
 *
 * Server components in the layout cannot see the pathname, so this is the
 * smallest client boundary that lets a rail item belong to one tab. The
 * children are still server-rendered and shipped in the HTML; this only
 * decides whether they are shown, so there is no hydration flash of content
 * that then disappears on other tabs.
 */
export function OnTab({ prefix, children }: { prefix: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const inTab = pathname === prefix || pathname.startsWith(`${prefix}/`);
  return inTab ? <>{children}</> : null;
}
