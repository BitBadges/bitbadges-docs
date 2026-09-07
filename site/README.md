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
| Top tabs | One per `##` group in `SUMMARY.md`; sidebar and prev/next scoped to the tab |
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

Deliberately **not** built: an AI chatbot, and a replacement for GitBook's MCP
endpoint (`docs.bitbadges.io/~gitbook/mcp`), which stopped existing at cutover.
References to it have been removed from the corpus. The repo already publishes
`llms.txt` and `for-llms.txt` for agent consumption.

## Tabs

`src/lib/docs/tabs.ts` turns the `##` groups of `SUMMARY.md` into top tabs: label
= group title minus its leading emoji, link = the group's first internal page,
phone label = the first word. The active tab is the longest route-prefix match
of the current path against the tab's pages; the first tab owns `/` and any
page no tab claims. The sidebar, the mobile drawer and prev/next pagination all
show only the active tab. `/api-reference` belongs to the tab labelled `API`
when the SUMMARY has one, otherwise it is appended as its own trailing tab.

## Redirects

Moved pages are listed in `../_docs/redirects/*.tsv` as `old<TAB>new` routes,
one per line, `#` comments allowed. `bun run sync` merges every file (deduped by
source, identity rows dropped) into `redirects.json`, which `next.config.ts`
serves as permanent redirects; Next adds `basePath` itself. `tests/redirects.test.ts`
checks that no source is still a live page and every destination resolves — it
only warns until the restructured content is swapped in; run it with
`DOCS_REDIRECTS_STRICT=1 bun test` to enforce.

## Images

Any image path containing `.gitbook/assets/` resolves from the content root,
whatever the page's depth or how many `../` it uses. Other relative paths
resolve from the page's directory.

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
| `DOCS_EXCLUDED_DIRS` | `_docs,_new,site,node_modules` | Directories never served |
| `DOCS_REDIRECTS_DIR` | `../_docs/redirects` | Folder of `*.tsv` redirect tables |

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

## Link integrity

`tests/content-issues.baseline.json` is the allowance for known-bad links and
images. **It is currently empty** — every internal link resolves and every image
exists. The corpus test fails if anything new breaks, so the count cannot creep
back up.

If a link legitimately has no target yet, regenerate the allowance with
`bun scripts/gen-baseline.ts` and say why in the commit. Shrink it; do not grow
it.

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
│       ├── tabs.ts               ## groups -> top tabs, active-tab matching
│       ├── redirects.ts          _docs/redirects/*.tsv -> redirects.json
│       ├── gitbook.ts            liquid blocks -> directives
│       ├── markdown.ts           the render pipeline
│       ├── openapi.ts            Stoplight-parity spec sanitizer
│       └── content.ts            filesystem access + search records
└── tests/                        87 tests
```

## Deploying to docs.bitbadges.io

Self-hosted on the BitBadges k3s cluster (`138.197.122.4`), following the same
pattern as `bitbadges-frontend`: a Docker Hub image, a ClusterIP service, and an
nginx ingress behind Cloudflare.

DNS is already in place — `docs.bitbadges.io` is an A record to `138.197.122.4`,
**proxied** (orange cloud). Because it is proxied, the ingress restricts the
origin to Cloudflare's IP ranges; direct-to-IP traffic would otherwise skip the
WAF.

### Build and push the image

The Docker build context is the **repository root**, not `site/` — the site
renders the markdown that lives above it:

```bash
docker build -f site/Dockerfile -t trevormil23/bitbadges-docs:latest .
docker push trevormil23/bitbadges-docs:latest
```

In CI, `.github/workflows/docker-publish-docs.yml` does the same on the
`bitbadges-actions` runner. It runs on `workflow_dispatch` and on pushes to
`master` that touch markdown, `.gitbook/`, or `site/` — content changes need a
rebuild because every page is prerendered.

### First deploy

```bash
kubectl apply -f site/k8s/service.yaml
kubectl apply -f site/k8s/deployment.yaml
kubectl apply -f site/k8s/ingress.yaml
kubectl rollout status deployment/bitbadges-docs
```

**Check the TLS certificate before applying the ingress.** It reuses
`bitbadges-cert`, the secret already serving `bitbadges.io`, `testnet.` and
`stagenet.`. That strongly suggests a `*.bitbadges.io` wildcard, but confirm:

```bash
kubectl get secret bitbadges-cert -o jsonpath='{.data.tls\.crt}' \
  | base64 -d | openssl x509 -noout -text | grep -A1 'Subject Alternative Name'
```

If `docs.bitbadges.io` is not covered, add a cert-manager `Certificate` for it
and point `secretName` at that instead.

### Subsequent deploys

The tag is mutable and `imagePullPolicy: Always`, so a restart pulls the new
image — no manifest changes needed:

```bash
kubectl rollout restart deployment bitbadges-docs
```

### Cutover

GitBook and Stoplight keep serving until the Cloudflare record for
`docs.bitbadges.io` is repointed at this cluster. To roll back, point it back;
nothing here modifies either service.

The two corpus links that advertised GitBook's MCP endpoint have been removed.
`for-llms.txt` still mentions it until CI regenerates that file.

### Resource footprint

Requests 25m CPU / 128Mi, limit 512Mi. The server only reads prerendered files
off disk. The image is ~672MB uncompressed, mostly the `node:22-slim` base plus
39MB of documentation images.
