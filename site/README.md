# BitBadges Docs — self-hosted site

A Next.js documentation site that renders the markdown already in this repo and
the BitBadges OpenAPI document. It is a self-hosted replacement for the GitBook
space (`docs.bitbadges.io`) and the Stoplight API reference
(`bitbadges.stoplight.io`).

Deployment and retirement of the former hosted references are covered in
[`_docs/runbooks/docs-sync.md`](../_docs/runbooks/docs-sync.md) and
[`_docs/runbooks/retire-hosted-docs.md`](../_docs/runbooks/retire-hosted-docs.md).

## Quick start

```bash
cd site
bun install
bun run dev          # http://localhost:3000
```

`dev` and `build` both run `bun run sync` first, which copies images and the
OpenAPI document into `public/` and rebuilds the search index.

```bash
bun run build && bun run start   # production build and server
bun run sync                     # refresh generated assets before testing
bun test                         # includes rendering the entire corpus and example syntax
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

## Code folds

Long JSON examples are mostly boilerplate. A fence can collapse line ranges,
GitHub-review style, into a row reading `··· 29 lines hidden (12-40)` that opens
on click:

````markdown
```json fold=12-40,55-80
```
````

Ranges are 1-based and inclusive; `fold="12-40"` also works. `json` and `jsonc`
blocks longer than 40 lines fold automatically: every run of six or more
"boilerplate" lines (`[]`, `{}`, `false`, `"0"`, `""`, `0`, bare brackets, and
full-range `18446744073709551615` time objects) collapses, except the first and
last two lines and lines keyed `approvalId`, `collectionId`, `fromListId`,
`toListId`, `initiatedByListId`, `amount`, or `uri`. `nofold` turns that off for
a block; an explicit `fold=` replaces it. The heuristic is `autoFoldRanges` in
`src/lib/docs/fold.ts`.

Folds are native `<details>` elements, so they open one at a time with no
script. A figure that folded anything carries `data-folds="n"` and gets a
second chrome button, **Expand all**, immediately left of Copy: it opens every
fold in that block and relabels itself **Collapse all** (`aria-expanded`
tracks the state, and individual toggles keep the label honest). It is a
progressive enhancement — `CopyButtons` wires it up, and without JavaScript
the page still renders and the folds still toggle.

**Copying always yields the whole block.** The copy button reads the figure's
`data-code-source`, which is the complete pre-highlight source, folded lines
included. A mouse selection plus ⌘C gives the same text: a closed fold keeps
its lines in the DOM inside `span.code-fold-lines`, clipped to zero height
(`max-height: 0; overflow: hidden`) with `::details-content` overriding the
browser's own hiding, rather than being dropped from the box tree — content
the browser omits from a selection. The clipped span is `aria-hidden` while
closed so screen readers hear the "n lines hidden" summary instead of the
lines twice. On an engine without `::details-content` the native hiding still
applies, so there the drag-select is short and the copy button is the exact
path.

## Tabs

`src/lib/docs/tabs.ts` turns the `##` groups of `SUMMARY.md` into top tabs: label
= group title minus its leading emoji, link = the group's first internal page,
phone label = the first word. The active tab is the longest route-prefix match
of the current path against the tab's pages *and* its `prefixes` (the first
segment of its href plus a slug of its label, so the `API` tab owns `/api` and
`/api-reference`); the first tab owns `/` and any page no tab claims. The
sidebar, the mobile drawer and prev/next pagination all show only the active
tab. `/api-reference` belongs to the tab labelled `API` when the SUMMARY has
one, otherwise it is appended as its own trailing tab.

## The API tab is Scalar

The `## API` group in `SUMMARY.md` is a single entry, `/api-reference`, so the
tab lands on the Scalar reference and nothing else is listed. The markdown
under `api/` stays on disk and stays served (redirect targets, and the source
agents read), but it is not in the sidebar: an unlisted `api/*` page shows the
API group (just the reference link) and no prev/next.

At `sync`, `foldApiDocs` (in `src/lib/docs/openapi.ts`) folds those pages into
the OpenAPI document so everything reads in one place inside Scalar:

| Markdown | Lands in |
| --- | --- |
| `api/README.md` | `info.description`, as `# Overview` |
| `api/pagination-and-views.md`, `api/swaps.md`, `api/self-hosting.md` | `info.description`, one `# <title>` section each |
| `api/claims/{README,endpoints,plugins,dynamic-stores}.md` | the `Claims` tag description (lead body, then `## <title>` sections) |
| `api/sign-in/{README,setup,authorization-url,callback,verification,frameworks}.md` | the `Sign In with BitBadges` tag description |

Scalar turns the lowest heading level of `info.description` into sidebar
sections and the next level into their children, so the reader sees Overview,
Pagination and views, Swaps and Self-hosting above the tags. Because the fold
already shapes the description, `sync` no longer passes
`groupDescriptionUnder` to the sanitizer (the option still works for an
unfolded spec). While folding, front matter and the H1 are dropped, relative
links become absolute site routes (with `DOCS_BASE_PATH`), `{% hint %}` blocks
become blockquotes, HTML comments and the "also part of the API reference"
pointer line are removed. The fold list is `API_FOLD`; a test fails if a page
appears under `api/` that is not in it, and the fold throws if a page or tag is
missing.

## Chain API reference

A second Scalar reference, at `/chain-api-reference`, owned by the **Chain**
tab. It documents the chain **LCD** — the REST (gRPC-gateway) surface a
BitBadges node serves — while `/api-reference` documents the indexer API. The
playground points at `https://lcd.bitbadges.io`, so its `GET` routes issue real
read-only requests against mainnet.

The source is the chain's own swagger document,
`$BITBADGESCHAIN_DIR/docs/static/openapi.yml` (JSON despite the extension). It
is Swagger 2.0 with exactly two tags — `Query` and `Msg` — across 282 paths,
which is unusable as a reference. `scripts/gen-chain-openapi.ts` converts it to
OpenAPI 3.1 and retags every operation by the module its path belongs to:

```bash
BITBADGESCHAIN_DIR=../../bitbadgeschain bun run gen:chain-openapi
```

It writes **both** `openapi/chain-openapi.json` (committed source of record) and
`public/chain-openapi.json` (what the page fetches). `sync-content.ts` copies
only `openapi/openapi.json` into `public/`, so this script writes the served
copy itself; committing it is what lets `bun run build` work without the chain
checkout present. A test asserts the two files stay identical.

`BITBADGESCHAIN_DIR` defaults to `../../bitbadgeschain`. If that checkout
already holds a converted `docs/openapi/openapi.json` — the chain repo runs the
same script as `scripts/gen-openapi.ts` — the generator prefers it and copies it
through unchanged; otherwise it converts `docs/static/openapi.yml` itself.
Either way the summary line says which path it used. (The chain's output is
deliberately outside `docs/static/`: `docs/docs.go` `//go:embed`s that directory
into the node binary.) `DOCS_CHAIN_OPENAPI_URL` (default `/chain-openapi.json`)
is the URL the page fetches.

The script is deliberately **self-contained**: `node:` builtins only, no npm
dependency and no import from `src/lib`, so the same file body lives in the
chain repo and can be copied either way unchanged.

What the transform does, beyond the mechanical Swagger 2.0 → 3.1 conversion
(`definitions` → `components.schemas`, body parameters → `requestBody`,
`produces` → response `content`, `host`/`basePath`/`schemes` → `servers`,
`$ref` rewriting):

- Retags by path prefix into `Tokenization`, `GAMM`, `Pool manager`,
  `Send manager`, `Manager splitter`, `IBC rate limit`, `EVM`, `Cosmos SDK` and
  `IBC`, each with a one-line description; anything unattributable lands in
  `Other` rather than disappearing.
- Sorts the tags and the paths so the BitBadges modules come first. The
  superseded `tokenization.v27`–`v32` message routes are **kept** — old
  transactions must stay decodable — but grouped into
  `Legacy tokenization versions` at the very end.
- Names the 200+ `Msg` operations that ship with no `summary`, so the sidebar
  reads `TransferTokens` rather than a raw gRPC path.
- Runs the same defensive pass the indexer spec gets: schema cycles are broken
  at the back-edge and dangling `$ref`s are stubbed, because Scalar
  dereferences the whole document up front and one defect would blank the page.
  The current chain document needs neither fix; the guard is there for the next
  regeneration.

## Proto reference

`chain/proto/` is generated, not authored. `scripts/gen-proto-reference.ts` reads
the chain's `proto/` tree and emits one page per `.proto` file plus a module index
and a top-level index, so every message, field number, enum value, RPC and source
comment is readable in-site instead of behind a GitHub link.

```bash
BITBADGESCHAIN_DIR=../../bitbadgeschain bun run gen:proto
```

`BITBADGESCHAIN_DIR` defaults to `../../bitbadgeschain` (the sibling checkout).
The script wipes and rewrites `chain/proto/` on every run, so never hand-edit a
page there; change the generator or the chain source. The pages are committed as
content, which is what lets `bun run build` work without the chain checkout
present.

Two groups of proto files are deliberately not documented: `proto/tokenization/v27`
through `v32` (frozen per-consensus-version copies of the same types, kept so old
blocks stay decodable) and the legacy `proto/badges` package. Both are named in
the generated index.

The parser is a small proto3 reader in the same file rather than a dependency;
`tests/proto-reference.test.ts` covers it with a fixture and then asserts over the
generated tree. Anything the parser does not recognise is printed as an
`unparsed declaration` at the end of a run rather than dropped, so a new proto
construct shows up loudly.

## SDK reference

`sdk/reference/` is generated, not authored. It replaces the TypeDoc HTML that
used to be published to `bitbadges.github.io/bitbadgesjs`, so the whole
TypeScript SDK surface is in-site, searchable, and readable by agents.
`scripts/gen-sdk-reference.ts` runs TypeDoc with `typedoc-plugin-markdown` over
`packages/bitbadgesjs-sdk/src`, then rewrites the raw output for this corpus:
breadcrumbs stripped so the H1 opens each page, a one-line `description:` in
frontmatter, relative `*.md` links turned into `/sdk/reference/...` routes,
lowercase-kebab filenames, and a `README.md` index per group.

```bash
BITBADGESJS_DIR=../../bitbadgesjs bun run gen:sdk
```

`BITBADGESJS_DIR` defaults to `../../bitbadgesjs` (the sibling checkout).
Regenerate after an SDK release or any change to the SDK's exported surface or
doc comments — not on every docs edit. The script wipes and rewrites
`sdk/reference/` on every run, so never hand-edit a page there. The pages are
committed as content, which is what lets `bun run build` work without the SDK
checkout present, and why `gen:sdk` is deliberately not part of `sync`.

`SUMMARY.md` lists the six group indexes and nothing else — the ~1600 symbol
pages stay reachable by link and by search, and out of the sidebar. The vendored
protobuf namespaces re-exported as `proto.cosmos`, `proto.google`,
`proto.tendermint` and friends are not documented: another ~1600 pages of
third-party generated scaffolding that would double the corpus and the
client-side search index. `tests/sdk-reference.test.ts` asserts over the
generated tree and skips with a pointer at this command when it is absent.

## Redirects

Moved pages are listed in `../_docs/redirects/*.tsv` as `old<TAB>new` routes,
one per line, `#` comments allowed. `bun run sync` merges every file (deduped by
source, identity rows dropped) into `redirects.json`, which `next.config.ts`
serves as permanent redirects; Next adds `basePath` itself. `tests/redirects.test.ts`
checks that no source is still a live page and every destination resolves — it
only warns until the restructured content is swapped in; run it with
`DOCS_REDIRECTS_STRICT=1 bun test` to enforce.

## Agent corpus downloads

`bun run sync` copies `../llms.txt` (curated index) and `../for-llms.txt` (the
whole corpus in one file) into `public/`, so the built site serves them at
`/llms.txt` and `/for-llms.txt`. `src/components/docs/AgentFiles.tsx` renders the
**For agents** block in the docs sidebar footer — plain `<a download>` links plus
a pointer at `/agents/reading-the-docs`. It `stat`s the two files at build time
rather than quoting a size, so the labels cannot go stale; a missing file drops
to a link with no size. Regenerate the index itself with `bun run gen:llms`.

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
│       ├── fold.ts               collapsible line ranges in code blocks
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

The ingress reuses `bitbadges-cert`. That secret is not a wildcard, but it
already lists `docs.bitbadges.io` (and `www.docs.bitbadges.io`) among its SANs,
so no cert-manager change is needed. Re-check after any certificate rotation:

```bash
kubectl get secret bitbadges-cert -o jsonpath='{.data.tls\.crt}' \
  | base64 -d | openssl x509 -noout -text | grep -A1 'Subject Alternative Name'
```

If a future rotation drops the host, add a cert-manager `Certificate` for
`docs.bitbadges.io` and point `secretName` at that instead.

### Subsequent deploys

The tag is mutable and `imagePullPolicy: Always`, so a restart pulls the new
image — no manifest changes needed:

```bash
kubectl rollout restart deployment bitbadges-docs
```

### Cutover

**Done — `docs.bitbadges.io` is served by this cluster.** The Cloudflare record
was already repointed before the deployment, which is why the host returned 526
(no ingress claimed it, so nginx answered with its default certificate and
Cloudflare rejected the origin) until the ingress was applied.

GitBook and Stoplight are still running and unmodified; rolling back is a
Cloudflare change, not a redeploy.

Measured after the first rollout: 2m CPU and 59Mi memory, against a 128Mi
request. The node runs hot (~71% memory), so the headroom matters.

The two corpus links that advertised GitBook's MCP endpoint have been removed.
`for-llms.txt` still mentions it until CI regenerates that file.

### Resource footprint

Requests 25m CPU / 128Mi, limit 512Mi. The server only reads prerendered files
off disk. The image is ~672MB uncompressed, mostly the `node:22-slim` base plus
39MB of documentation images.
