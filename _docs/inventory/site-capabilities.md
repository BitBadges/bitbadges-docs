# Site capabilities (findings)

- Nav: SUMMARY.md only -> parseSummary (site/src/lib/docs/summary.ts:30). `##` headings = NavGroup. 2-space indent nesting.
- Top tabs hardcoded in site/src/components/docs/Shell.tsx:55-58 (Documentation, API Reference). (docs)/layout.tsx passes ALL groups to Sidebar.
- To add tabs: derive tabs from NavGroup[] (group title or first path segment), pass into Shell, filter groups in Sidebar (client, has usePathname). Scope flattenNav per tab for prev/next. Keep /api-reference special case.
- GitBook syntax: hint, content-ref, embed, file, @org/... only. {% tabs %} dropped silently. No multi-lang code tabs.
- Frontmatter description: wired (subtitle, meta/OG, search 1.5x boost). Only 2 files use it.
- Tests: site/tests/corpus.test.ts gates: >300 pages, >200 nav entries, zero dangling SUMMARY entries, zero new broken links/images vs tests/content-issues.baseline.json (empty). No leaked {% %} or :::.
- Images: resolved relative to source file (paths.ts:82), no .gitbook/assets root fallback; excess `..` clamps silently. Moving .md breaks images. Fix: special-case `.gitbook/assets/` to resolve from content root.
- Redirects: none. Add site/redirects.json + next.config.ts redirects() + test that destinations resolve.
- for-llms.txt: CI find-walk of all *.md (ignores SUMMARY). llms.txt: hand-maintained absolute URLs.
- Routes: dir/README.md -> /dir; root README.md -> /. Route inventory = filesystem walk, not SUMMARY. Excluded dirs: _docs,site,node_modules, *.backup.*.
