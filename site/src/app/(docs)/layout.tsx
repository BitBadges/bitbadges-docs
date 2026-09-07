import { Sidebar } from '@/components/docs/Sidebar';
import { getNav } from '@/lib/docs/content';

/** Two-rail documentation layout. Routes outside this group render full-bleed. */
export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  const groups = await getNav();

  return (
    <div className="mx-auto flex max-w-[100rem] px-4 lg:px-6">
      <aside className="scroll-rail sticky top-[var(--shell-topbar)] hidden h-[calc(100dvh-var(--shell-topbar))] w-[var(--shell-sidebar)] shrink-0 overflow-y-auto py-7 pr-5 lg:block">
        <Sidebar groups={groups} />
      </aside>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
