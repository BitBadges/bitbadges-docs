import { AgentFiles } from '@/components/docs/AgentFiles';
import { Sidebar } from '@/components/docs/Sidebar';
import { getNav } from '@/lib/docs/content';
import { tabsFromNav } from '@/lib/docs/tabs';

/** Two-rail documentation layout. Routes outside this group render full-bleed. */
export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  const tabs = tabsFromNav(await getNav());

  return (
    <div className="mx-auto flex max-w-[100rem] px-4 lg:px-6">
      <aside className="scroll-rail sticky top-[var(--shell-topbar)] hidden h-[calc(100dvh-var(--shell-topbar))] w-[var(--shell-sidebar)] shrink-0 overflow-y-auto py-7 pr-5 lg:block">
        <Sidebar tabs={tabs} />
        {/* Only the Agents tab: the corpus download is for people wiring an
            agent, and on every other tab it is noise in the rail. */}
        <AgentFiles className="pb-8" onlyTab="/agents" />
      </aside>
      <div className="min-w-0 flex-1">
        {children}
        {/* The sidebar carries this above lg; below it the rail is a drawer that
            closes on navigation, so the link rides under the page. */}
        <AgentFiles className="mx-auto mb-12 max-w-[46rem] lg:hidden" onlyTab="/agents" />
      </div>
    </div>
  );
}
