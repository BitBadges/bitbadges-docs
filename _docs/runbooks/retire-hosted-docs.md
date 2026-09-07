---
anchor: RB-RETIRE-HOSTED
title: Retire Stoplight, GitHub Pages, and GitBook
status: active
---

# Retire Stoplight, GitHub Pages, and GitBook

Three hosted documentation services predate this site. Each one still serves a
URL somebody has bookmarked, and each one is now fully replaced by a route this
repo renders. This runbook is the retirement order for all three.

The rule that governs every step below: **nothing gets switched off before its
in-site replacement is live at `docs.bitbadges.io` and linked from the
navigation.** Turning a service off early converts inbound links into 404s with
nothing to catch them, and search engines re-crawl faster than they forget.

`_docs/runbooks/docs-sync.md` [5] states the same intent from the sync-CI side.
This document supersedes it on sequencing detail; that section now points here.

> **Every `kubectl` command below runs on the k3s box, not locally.** The local
> kubeconfig's current context is a different DigitalOcean cluster, so a bare
> `kubectl apply` silently succeeds against the wrong place. Prefix each one:
>
> ```bash
> ssh -i ~/.ssh/bitbadges-mainnet-rpc root@138.197.122.4 "kubectl ..."
> ```
>
> The docs Service, Deployment and Ingress already exist there, so a rollout is
> `kubectl rollout restart deployment bitbadges-docs` and nothing needs applying.
> The image tag is mutable, so restart only after the image build has finished;
> restarting while it is still running pulls the previous build.

## [1] What replaced what

Verified in the worktree at the commit this runbook was written against.

| Retiring | Replacement route | Rendered from | Page count |
| --- | --- | --- | --- |
| `bitbadges.stoplight.io` (BitBadges API) | `/api-reference` | `site/openapi/openapi.json` via Scalar (`site/src/components/docs/ApiReference.tsx`) | 1 app, ~100 operations |
| `bitbadges.github.io/bitbadgesjs` (SDK TypeDoc) | `/sdk/reference` | `sdk/reference/**` markdown | 1647 pages |
| GitBook space at `docs.bitbadges.io` | the whole site | markdown in this repo | 216 pages |
| — (new) | `/chain-api-reference` | `site/openapi/chain-openapi.json` via Scalar | 1 app |
| — (new) | `/chain/proto` | `chain/proto/**` markdown | 68 pages |

`/chain-api-reference` and `/chain/proto` retire nothing by themselves. They
matter here because they remove the last reasons to send a reader off-site, and
because `lcd.bitbadges.io`'s embedded Swagger UI ([4.4]) is deliberately **not**
part of this retirement.

## [2] Stoplight

### [2.1] What still depends on it

| Dependency | Evidence | Live? |
| --- | --- | --- |
| `Push to Stoplight` step | `bitbadgesjs/.github/workflows/genapi.yml`, step `Push to Stoplight`, runs `bunx @stoplight/cli@6 push --ci-token "$STOPLIGHT_TOKEN" --branch main --directory ./openapitypes` | Yes — fires on every push to `main` touching `packages/bitbadgesjs-sdk/**` |
| `@stoplight/cli` install | same file, `bun install -g typescript ts-node @stoplight/cli` | Yes, and the push step is its only consumer |
| `STOPLIGHT_TOKEN` secret | same file, `environment: main` | Yes |
| Docs-repo content links | `grep -rn stoplight` over `about/ agents/ api/ chain/ cli/ guides/ sdk/ start/ token-standard/ README.md SUMMARY.md` returns **nothing** | No |
| Docs-repo tooling references | `_docs/architecture.md`, `_docs/runbooks/docs-sync.md`, `_docs/inventory/*`, `site/README.md`, `site/src/components/docs/ApiReference.tsx`, `site/tests/{openapi,tabs,summary}.test.ts` | Prose and parity comments only. `site/src/lib/docs/openapi.ts` reimplements Stoplight's `x-internal` hiding; it calls nothing |

Conclusion: the only live dependency is one CI step in another repo. Nothing a
reader can click depends on Stoplight.

### [2.2] Order of operations

1. `/api-reference` is live on `docs.bitbadges.io` and reachable from the API
   tab navigation. Confirm with a real request, not a local build:
   `curl -sSf https://docs.bitbadges.io/api-reference -o /dev/null -w '%{http_code}\n'`
2. Confirm the served spec is current:
   `curl -sS https://docs.bitbadges.io/openapi.json | jq '.info.title, (.paths|length)'`
   → `"BitBadges API"` and ≥ 90 paths. Those are the same thresholds
   `genapi.yml`'s `Validate assembled spec before publish` step enforces.
3. Merge the `bitbadgesjs` PR that drops the push step and the CLI install.
   Proposal: `scratchpad/upstream-ci/bitbadgesjs-genapi-drop-stoplight.diff`.
4. Let one `genapi.yml` run go green without the step.
5. Delete the `STOPLIGHT_TOKEN` secret, then revoke the token ([7]).
6. Archive or delete the Stoplight project last, once nothing has referenced it
   for a full sync cycle.

No redirect is needed or possible. `bitbadges.stoplight.io` is a Stoplight-owned
host; there is no branch or bucket where a redirect could be published. Deep
links into the Stoplight project die with the project. Accept that, and lean on
`/api-reference` being the only reference the docs themselves link to.

### [2.3] Verify afterwards

- `grep -rn STOPLIGHT .github/ scripts/` in `bitbadgesjs` returns nothing.
- A push to `bitbadgesjs` `main` touching the SDK still opens the
  `update-openapi-hosted` PR (the step after the removed one).
- The docs repo's `sync-openapi.yml` still produces a `sync/openapi` PR from
  that file. Stoplight was never in this path.

### [2.4] Roll back

Revert the `bitbadgesjs` PR and re-add the secret with a freshly minted token.
The old token cannot be recovered once revoked, which is why [2.2] revokes only
after a green run. Nothing else has to be undone — no consumer moved.

## [3] GitHub Pages (`bitbadges.github.io/bitbadgesjs`)

### [3.1] What still depends on it

| Dependency | Evidence | Live? |
| --- | --- | --- |
| `docs.yml` | `bitbadgesjs/.github/workflows/docs.yml` runs `scripts/gendocs.sh` and deploys with `JamesIves/github-pages-deploy-action@v4` (`folder: packages/bitbadgesjs-sdk/docs`, `branch: gh-pages`, `clean: true`) | Yes, on every SDK push to `main` |
| `gh-pages` branch | `git ls-remote --heads origin gh-pages` → `e39864eb8a3f1e69363d7c5b6b9da1ffc26111a0`. Tree: `assets classes enums functions interfaces modules types variables .nojekyll hierarchy.html index.html modules.html` | Yes |
| Pages site setting | `bitbadgesjs` Settings → Pages, deploy-from-branch `gh-pages` | Yes |
| Links inside the API spec | `site/openapi/openapi.json` still carries `bitbadges.github.io` URLs in operation descriptions | **Neutralised at build time.** `repointSdkLinks` in `site/src/lib/docs/openapi.ts` rewrites them; `site/tests/openapi-fold.test.ts` asserts the served `public/openapi.json` contains no `bitbadges.github.io` |
| Links inside content markdown | none — the content grep in [2.1] also covers `bitbadges.github.io`; `site/tests/sdk-reference.test.ts` has a test named *no page still points at the retired github.io reference* | No |
| Inbound external links | search results, npm README, third-party blogs, Discord history | Yes, and unmeasurable — this is the only reason [3.3] exists |

### [3.2] The URL mapping is mechanical, but lossy

`repointSdkLinks` already encodes the transform, and `site/scripts/gen-sdk-reference.ts`'s
`kebab()` is the same function:

```
https://bitbadges.github.io/bitbadgesjs/classes/BitBadgesAPI.html#getaccount
                                     -> /sdk/reference/classes/bit-badges-api#getaccount
https://bitbadges.github.io/bitbadgesjs/interfaces/iGetAccountPayload
                                     -> /sdk/reference/interfaces/i-get-account-payload
```

Two mismatches make the mapping imperfect, and both must be handled by the
fallback rather than pretended away:

- **Directory names differ.** Pages emits `enums/`, `types/`, `variables/`,
  `modules/`. The site emits `classes/`, `enumerations/`, `functions/`,
  `interfaces/`, `type-aliases/`. So `enums → enumerations`,
  `types → type-aliases`, and `variables` / `modules` have **no** in-site
  equivalent.
- **Page sets differ, and badly.** Measured by running `kebab()` over every
  `gh-pages` filename in the five mappable directories and testing each result
  against the real `sdk/reference` tree: **2460 old pages → 1103 resolve, 1357
  do not.** The misses are almost all proto-generated wrappers the new TypeDoc
  config no longer emits (`cosmos.auth.v1beta1.QueryParamsRequest`,
  `badges.MsgPurgeApprovals`, `wasmx.QueryParamsResponse`).

A 55% miss rate rules out a naive computed redirect — it would send more than
half of inbound deep links from one 404 to another. The shim therefore carries
a manifest (`pages.json`, 1598 entries, ~62 KB) of the slugs that actually
exist, redirects deep only on a hit, and falls back to `/sdk/reference` — a real
page with a search box — for everything else. Generation command and the
degradation behaviour are in the proposal file.

### [3.3] Order of operations

1. `/sdk/reference` is live and linked. Verify against production:
   `curl -sSf https://docs.bitbadges.io/sdk/reference -o /dev/null -w '%{http_code}\n'`
   and spot-check three deep pages, e.g.
   `/sdk/reference/classes/bit-badges-api`,
   `/sdk/reference/interfaces/i-get-account-payload`,
   `/sdk/reference/type-aliases` — one from each renamed directory.
2. Tag the current Pages content so it can be restored:
   `git tag gh-pages-typedoc-archive e39864eb8a3f1e69363d7c5b6b9da1ffc26111a0 && git push origin gh-pages-typedoc-archive`
   Do this **before** anything else. It is the entire rollback plan.
3. Merge the `bitbadgesjs` PR that deletes `.github/workflows/docs.yml`.
   Proposal: `scratchpad/upstream-ci/bitbadgesjs-retire-gh-pages.md`.
   Deleting the workflow first stops the next SDK push from re-deploying
   TypeDoc over the shim you are about to publish.
4. Replace the `gh-pages` branch content with the redirect shim from the same
   proposal (`index.html`, `404.html`, `pages.json`, `.nojekyll`). The commands
   are in that file. **Keep the branch.** Deleting it is what breaks inbound
   links.
5. Leave Pages **on**, still serving from `gh-pages`. The shim only works while
   Pages serves.
6. Wait for propagation (Pages builds take a minute or two; the CDN caches for
   ten). Verify [3.4].

Steps 4 and 5 are the whole point: the deliverable is *not* "turn Pages off",
it is "make Pages a redirect". Turning the site off is a separate, later, and
optional decision — see [3.5].

### [3.4] Verify afterwards

```bash
# Root and a deep link both land on the docs site.
curl -sSI https://bitbadges.github.io/bitbadgesjs/ | head -1
curl -sS  https://bitbadges.github.io/bitbadgesjs/classes/BitBadgesAPI.html | grep -o 'docs.bitbadges.io[^"]*'
# Expect: .../sdk/reference/classes/bit-badges-api
curl -sSf https://bitbadges.github.io/bitbadgesjs/pages.json | jq length
# ~1598
```

Then in a browser confirm three cases: a mapped page
(`/classes/BitBadgesAPI.html` → `/sdk/reference/classes/bit-badges-api`), an
unmapped directory (`/variables/Anything.html` → `/sdk/reference`), and a
dropped symbol (`/classes/cosmos.auth.v1beta1.QueryParamsRequest.html` →
`/sdk/reference`, **not** a computed 404).

Note the status codes. The root `index.html` returns 200. Every deep link is
served by `404.html` with an HTTP **404** status, because that is how GitHub
Pages serves a missing path. Humans and browsers follow the redirect fine;
crawlers will drop the old URLs rather than pass authority to the new ones.
That is the accepted cost of not being able to send a 301 from Pages. If link
equity matters more than simplicity, the alternative is to keep the 1654 HTML
files in place and rewrite each one into a meta-refresh stub — more machinery,
same user-visible result, real 200s. Default to the shim.

### [3.5] Turning Pages off entirely (do not do this yet)

Only after twelve months of near-zero traffic to `bitbadges.github.io`
(Settings → Pages has no analytics; use Cloudflare referrer data on
`docs.bitbadges.io` as a proxy) should you consider Settings → Pages → Source →
None and deleting the branch. There is no upkeep cost to leaving the shim
running, so the default is to leave it forever.

### [3.6] Roll back

`git push --force origin gh-pages-typedoc-archive:gh-pages`, then revert the
`docs.yml` deletion. Pages rebuilds the old TypeDoc within minutes. This works
only if step 2 of [3.3] actually ran.

## [4] GitBook

### [4.1] What still depends on it

| Dependency | Evidence | Live? |
| --- | --- | --- |
| The hosted space serving `docs.bitbadges.io` | `site/README.md` "Cutover": GitBook keeps serving until the Cloudflare record for `docs.bitbadges.io` is repointed at the cluster. `site/k8s/ingress.yaml:24` claims `host: docs.bitbadges.io` | **Yes — this is the live production docs site today** |
| GitBook's GitHub sync | No `.gitbook.yaml` in the repo; the sync is configured in the GitBook UI against this repo's default branch (`origin/HEAD → master`) | Yes, and see the hazard in [4.2] |
| `.gitbook/assets/**` | 5 content files reference `.gitbook/assets/` paths | Yes, but these are **plain files in this repo**. `site/README.md:243` documents that the site resolves them from the content root. Not a GitBook dependency — do not delete the directory |
| GitBook-flavoured syntax (`{% hint %}`, `{% content-ref %}`) | `site/src/lib/docs/gitbook.ts` converts liquid blocks to directives | Not a dependency. Our own renderer owns this now |
| `docs.bitbadges.io/~gitbook/mcp` | `site/README.md:47` records it as deliberately not replaced. `grep -n '~gitbook'` over content, `llms.txt`, and `SUMMARY.md` returns nothing | No — the two corpus links that advertised it are already removed |
| `docker-publish-docs.yml` path filter `.gitbook/**` | `.github/workflows/docker-publish-docs.yml` | Correct as written — it watches the asset directory, not GitBook |

### [4.2] The sequencing hazard, stated plainly

GitBook renders the live site from this repo's default branch. **Merging the
rewrite to `master` republishes the GitBook space from rewritten content
immediately**, before any Cloudflare change. GitBook will render 216 pages
against a `SUMMARY.md` it did not expect, with a redirect table it cannot read
(`_docs/redirects/*.tsv` is a Next.js input, not a GitBook one). The result is a
broken live site for however long the cutover takes.

So the GitBook integration must be disconnected **before** the rewrite merges,
not after. That inverts the usual "replacement first" rule, and it is the one
place in this runbook where it is inverted, because GitBook is a *publisher* of
this repo rather than a consumer of it.

### [4.3] Order of operations

1. Bring the self-hosted site up on a temporary hostname on the cluster and
   verify it there. `site/k8s/ingress.yaml` currently claims
   `docs.bitbadges.io`; while GitBook still owns that record, deploy under a
   staging host so the ingress does not fight DNS.
2. **Disconnect the GitBook ↔ GitHub integration** (GitBook → space → Sync →
   disconnect). GitBook keeps serving its last-synced snapshot; it just stops
   following `master`.
3. Merge the rewrite to `master`. GitBook does not move. `docker-publish-docs.yml`
   fires and pushes `trevormil23/bitbadges-docs:latest`.
4. Roll out the image; point the ingress at `docs.bitbadges.io`.
5. Repoint the Cloudflare record for `docs.bitbadges.io` at the cluster.
6. Verify [4.5]. Old GitBook paths must land via `redirects.json` — this is what
   `_docs/redirects/*.tsv` exists for, and it only starts working at this step.
7. Leave the GitBook space **published but unsynced** for 30 days, so a rollback
   is a DNS change and nothing more.
8. After 30 days, delete the space and cancel the subscription.

### [4.4] Explicitly not retired: `lcd.bitbadges.io`

`bitbadgeschain` embeds `docs/static/openapi.yml` into the node binary
(`docs/docs.go`: `//go:embed static`, served at `/static/openapi.yml` with a
Swagger console at `/`). That is a **node feature**, not a docs host — every
operator running `bitbadgeschaind` serves it. `/chain-api-reference` duplicates
the content for readers but does not replace the binary's endpoint. Content
markdown links `lcd.bitbadges.io` 40+ times as a live API host, correctly.
Do not touch it as part of this work.

The one live rule about that directory: the chain OpenAPI generator writes to
`docs/openapi/openapi.json`, **never** `docs/static/`, because `docs/static/` is
embedded into the release binary. See `_docs/architecture.md`'s upstream
follow-up table.

### [4.5] Verify afterwards

```bash
# The site is ours, not GitBook's.
curl -sSI https://docs.bitbadges.io/ | grep -i '^server\|^x-'
# A rewritten page renders.
curl -sSf https://docs.bitbadges.io/token-standard/concepts/balances -o /dev/null -w '%{http_code}\n'
# A legacy GitBook path redirects (301) rather than 404s.
curl -sSI https://docs.bitbadges.io/for-developers/bitbadges-api/concepts/managing-views | head -2
# Expect 301 -> /api/pagination-and-views
```

Then sample 10 rows at random out of the 387 in `_docs/redirects/*.tsv` and
confirm each returns 301 to a 200.

### [4.6] Roll back

Point the Cloudflare record for `docs.bitbadges.io` back at GitBook. The space
still holds its last-synced snapshot, so the old site returns intact. This is
why [4.3] step 7 keeps it published for 30 days and why step 2 disconnects the
sync rather than deleting the space.

## [5] The single ordered list

Across all three, the safe order is:

1. Self-hosted site verified on a staging host. (§[4.3].1)
2. The eight missing redirect rows landed, so the API reference's own prose
   does not 404 the moment the record moves. (§[6])
3. GitBook sync disconnected. (§[4.3].2) — *before* the merge, see [4.2]
4. Rewrite merged; image built and rolled out. (§[4.3].3–4)
5. Cloudflare repointed; `docs.bitbadges.io` is ours. (§[4.3].5–6)
6. `/api-reference` verified live → retire the Stoplight push. (§[2.2])
7. `/sdk/reference` verified live → archive `gh-pages`, delete `docs.yml`,
   publish the redirect shim. (§[3.3])
8. Secrets revoked. (§[7])
9. +30 days: delete the GitBook space.
10. +12 months, optional: turn Pages off. (§[3.5])

Steps 6 and 7 are independent of each other and can land in either order, but
each needs its own PR in `bitbadgesjs` so a rollback of one does not drag the
other back.

## [6] Links that must change before cutover

The content markdown is already clean: `grep -rniI -E 'stoplight|bitbadges\.github\.io|gitbook\.(io|com)|~gitbook'`
over `about/ agents/ api/ chain/ cli/ guides/ sdk/ start/ token-standard/ README.md SUMMARY.md`
returns **nothing**. The ~40 `lcd.bitbadges.io` hits are a live API host, not a
docs host — leave them ([4.4]).

What is *not* clean is the API spec's own prose. `site/openapi/openapi.json`
carries 13 absolute `https://docs.bitbadges.io/for-developers/...` links inside
operation descriptions. Five have a row in `_docs/redirects/*.tsv` and will
301 correctly. **Eight do not, and will 404 the moment `docs.bitbadges.io`
stops being GitBook.** They render inside `/api-reference`, so they are visible
to every API reader.

| File | Lines | Current target | Proposed target |
| --- | --- | --- | --- |
| `site/openapi/openapi.json` | 5, 2120, 2178, 2234, 2292 | `/for-developers/authenticating-with-bitbadges` | `/api/sign-in` |
| `site/openapi/openapi.json` | 82 | `/for-developers/bitbadges-api/concepts/native-chain-algorithm` | `/token-standard/concepts/accounts` |
| `site/openapi/openapi.json` | 146, 325 | `/for-developers/bitbadges-api/tutorials/managing-views` | `/api/pagination-and-views` |
| `site/openapi/openapi.json` | 2956 | `/for-developers/bitbadges-api/tutorials/getting-claims` | `/api/claims/endpoints` |
| `site/openapi/openapi.json` | 2956 | `/for-developers/bitbadges-api/tutorials/managing-claims` | `/api/claims/endpoints` |
| `site/openapi/openapi.json` | 1614, 1690, 1766, 1842, 2605, 2671, 2716, 2772, 2828 | `/for-developers/claim-builder/auto-complete-claims-w-bitbadges-api` | `/api/claims/endpoints` |
| `site/openapi/openapi.json` | 2883 | `/for-developers/claim-builder/universal-approach-claim-codes` | `/api/claims` |
| `site/openapi/openapi.json` | 1898, 1959 | `/for-developers/create-and-broadcast-txs` | `/sdk/transactions` |

Already covered, no action: `/for-developers/bitbadges-api/api` → `/api`,
`/for-developers/bitbadges-sdk/overview` → `/sdk`,
`/for-developers/claim-builder/dynamic-stores` → `/api/claims/dynamic-stores`,
`/for-developers/sign-in-with-bitbadges` → `/api/sign-in`, and
`/for-developers/claim-builder` (via `dropped-pages.tsv`).

Two ways to fix, pick one:

- **Add eight rows to `_docs/redirects/*.tsv`** (`api-tab.tsv` for the first
  seven, `sdk.tsv` for the last). Cheapest, keeps working even if the upstream
  descriptions never change, and the redirect test will then cover them.
- **Fix the descriptions upstream** in `bitbadgesjs`, so the spec stops
  emitting dead absolute URLs at all. Better long-term; the file here is
  regenerated by `sync-openapi.yml`, so an edit made only in this repo is
  overwritten on the next sync.

Doing both is the right answer: rows now so cutover is safe, upstream fix after.

## [7] Secrets to revoke

| Secret | Lives in | Becomes unused after | Action |
| --- | --- | --- | --- |
| `STOPLIGHT_TOKEN` | `BitBadges/bitbadgesjs` → Settings → Environments → `main` (the job declares `environment: main`; check repo-level secrets too) | §[2.2].4 | Delete the GitHub secret, then revoke the token in Stoplight. Deleting the GitHub copy does not invalidate it |
| Stoplight account / workspace seat | Stoplight | §[2.2].6 | Cancel the subscription after the project is archived |
| GitBook GitHub App installation | GitHub → Settings → Applications → GitBook | §[4.3].2 | Revoke the installation's access to this repo. Do not revoke it org-wide until no other space uses it |
| GitBook subscription | GitBook billing | §[4.3].8 | Cancel |

Explicitly **still in use** — do not touch:

- `ADMIN_PAT` (docs repo, `for--llms.yml`)
- `DOCKER_USERNAME` / `DOCKER_TOKEN` (docs repo, `docker-publish-docs.yml`)
- `DOCS_DISPATCH_PAT` (upstream repos, notify workflows)
- `PYPI_PASSWORD`, `INDEXER_READ_TOKEN` (`bitbadgesjs` `genapi.yml`)

No GitHub Pages secret exists to revoke — `docs.yml` uses the built-in
`GITHUB_TOKEN` with `pages: write`, which disappears with the workflow.
