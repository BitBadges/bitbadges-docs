# BitBadges Docs — self-hosted site

A Next.js documentation site that renders the markdown already in this repo and
the BitBadges OpenAPI document. It is a self-hosted replacement for the GitBook
space (`docs.bitbadges.io`) and the Stoplight API reference
(`bitbadges.stoplight.io`).

**Neither GitBook nor Stoplight is touched by this directory.** They keep running
exactly as before; this is a parallel implementation to evaluate.

## Quick start

```bash
cd site
bun install
bun run dev          # http://localhost:3000
```

`dev` and `build` both run `bun run sync` first, which copies images and the
OpenAPI document into `public/` and rebuilds the search index.

```bash
bun run build && bun run start   # production build (338 static pages)
bun test                         # 87 tests, including a render of every page
bun run typecheck
```

## What it does

| GitBook / Stoplight feature | How it works here |
| --- | --- |
| Navigation tree | Parsed from the existing `SUMMARY.md` — one source of truth |
| Page content | `remark`/`rehype` pipeline, rendered at build time |
| `{% hint %}` | Styled callouts (info / warning / danger / success) |
| `{% content-ref %}` | Cards labelled with the **target page's** title |
| `{% embed %}`, `{% file %}` | Link and download cards |
| `{% @github-files/... %}` | Rendered as an external link card |
| Full-text search | Prebuilt index + MiniSearch, `⌘K` / `/`, lazy-loaded on first open |
| API reference + playground | Scalar, reading `public/openapi.json` |
| Dark / light theme | Class-based, no flash, respects `prefers-color-scheme` |
| Code highlighting | Shiki dual-theme, with language chip and copy button |
| On-page contents | Scroll-spy table of contents from h2/h3 |
| Prev / next, edit links | Derived from `SUMMARY.md` order |

Deliberately **not** built: an AI chatbot, and the GitBook MCP endpoint
(`docs.bitbadges.io/~gitbook/mcp`). The repo already publishes `llms.txt` and
`for-llms.txt` for agent consumption.

## Moving it into bitbadges.io

Everything deployment-specific is in `src/lib/docs/config.ts`. To mount the docs
under `bitbadges.io/docs`:

1. Copy `src/lib/docs/` and `src/components/docs/` into the frontend.
2. Copy `src/app/(docs)/` and `src/app/api-reference/` as routes.
3. Copy `src/app/globals.css` (all tokens are CSS variables, no global resets).
4. Set the environment:

   ```bash
   DOCS_BASE_PATH=/docs
   DOCS_CONTENT_DIR=/path/to/bitbadges-docs
   ```

5. Run `scripts/sync-content.ts` in the frontend's build step.

`src/lib/docs/` imports nothing from Next — it is plain TypeScript over strings
and the filesystem, so it is portable as-is. The React components use only
`next/link` and `next/navigation`.

Stack matches `bitbadges-frontend` (Next 16, React 19, Tailwind v4), so there is
no version reconciliation to do.

## Environment variables

| Variable | Default | Purpose |
| --- | --- | --- |
| `DOCS_CONTENT_DIR` | `..` | Markdown root (the folder with `SUMMARY.md`) |
| `DOCS_BASE_PATH` | *(empty)* | Route prefix, e.g. `/docs` |
| `DOCS_ASSETS_PREFIX` | `/docs-assets` | Public URL prefix for images |
| `DOCS_OPENAPI_URL` | `/openapi.json` | Where the page fetches the spec |
| `DOCS_OPENAPI_SOURCE` | *(see below)* | Spec to copy during `sync` |
| `DOCS_EDIT_BASE_URL` | GitHub `edit/master` | "Edit this page" target; empty disables |
| `DOCS_EXCLUDED_DIRS` | `_docs,site,node_modules` | Directories never served |

`sync` looks for the spec at `DOCS_OPENAPI_SOURCE`, then `openapi/openapi.json`
(committed here so the site builds standalone), then the sibling SDK at
`../../bitbadgesjs/packages/bitbadgesjs-sdk/openapi-hosted/openapi.json`.

## Stoplight is not a plain OpenAPI renderer

`src/lib/docs/openapi.ts` closes the gap between what Stoplight publishes and
what a strict renderer shows. It runs during `sync` and reports what it changed.

1. **`x-internal`** — Stoplight hides items marked `x-internal: true` from
   published docs; Scalar ignores the extension entirely. The sanitizer removes
   them so the self-hosted reference exposes the same surface.
   *Current spec: all 67 occurrences are `x-internal: false`, so nothing is
   hidden today. The filter matters the moment one is flipped to `true`.*

2. **Self-referential schemas** — `NumberType`, `ParsedQs` and `iSatisfyMethod`
   contain a `$ref` back to themselves. Scalar's dereferencer recurses until the
   stack overflows and the page renders blank. The back-edge is replaced with a
   titled stub. Mutual cycles (`AndGroup` ↔ `OrGroup` ↔ `AssetConditionGroup`)
   are left intact; they render fine.

3. **Dangling `$ref`s** — seven schemas are referenced but never defined:
   `EvmTx`, `MultiChainMsg`, `iGetSwapActivitiesSuccessResponse`, and four
   `iGetOnChainDynamicStore*SuccessResponse` types. Each gets a placeholder that
   says so, rather than letting one broken reference blank the page.

Items 2 and 3 are **defects in the generated spec**, not in this site. Fixing
them in `bitbadgesjs-sdk` would let the sanitizer shrink.

## Inherited content rot

`tests/content-issues.baseline.json` records 48 dead internal links and 1 missing
image that already exist in the markdown — they 404 on GitBook today. The test
suite fails if the count grows, so migration cannot quietly add more. Shrink the
list; do not grow it. Regenerate with `bun scripts/gen-baseline.ts` after
deliberately changing it.

## Layout

```
site/
├── openapi/openapi.json          committed spec, keeps the build standalone
├── scripts/
│   ├── sync-content.ts           assets + spec + search index
│   └── gen-baseline.ts           refresh the content-rot baseline
├── src/
│   ├── app/
│   │   ├── (docs)/               sidebar layout + [[...slug]] pages
│   │   └── api-reference/        full-bleed Scalar reference
│   ├── components/docs/          portable React (next/link + next/navigation)
│   └── lib/docs/                 portable, framework-free
│       ├── config.ts             the deployment seam
│       ├── summary.ts            SUMMARY.md -> nav tree
│       ├── gitbook.ts            liquid blocks -> directives
│       ├── markdown.ts           the render pipeline
│       ├── openapi.ts            Stoplight-parity spec sanitizer
│       └── content.ts            filesystem access + search records
└── tests/                        87 tests
```
