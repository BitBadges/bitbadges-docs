---
anchor: RB-DOCS-SYNC
title: Docs sync CI
status: active
---

# Docs sync CI

The self-hosted docs site carries generated content — an OpenAPI spec, an SDK
reference, a proto reference — whose source of truth lives in other repos. Four
workflows keep those copies honest. Every one of them opens a **pull request**;
none commits to `master`.

## [1] The workflows

All four live in `.github/workflows/` in this repo. All four share the same
shape: check out this repo, check out the upstream repo, produce the artifact,
gate it, open a PR, and no-op cleanly when there is no diff.

| Workflow | Produces | Upstream | Dispatch event | Weekly cron (UTC) |
| --- | --- | --- | --- | --- |
| `sync-openapi.yml` | `site/openapi/openapi.json` | `BitBadges/bitbadgesjs` @ `main` | `openapi-updated` | Mon 06:17 |
| `sync-sdk-reference.yml` | `sdk/reference/**` | `BitBadges/bitbadgesjs` @ `main` | `sdk-updated` | Mon 06:31 |
| `sync-proto-reference.yml` | `chain/proto/**` | `BitBadges/bitbadgeschain` @ `master` | `proto-updated` | Mon 06:45 |
| `sync-chain-openapi.yml` | `site/openapi/chain-openapi.json` | `BitBadges/bitbadgeschain` @ `master` | `chain-openapi-updated`, `proto-updated` | Mon 06:59 |

The cron is a **safety net**, not the mechanism. Normal operation is the
`repository_dispatch` fired by the upstream repo the moment a change lands, so
a docs sync PR usually appears within a minute or two. The weekly run catches
the cases the dispatch cannot: a revoked or expired PAT, a notifier workflow
that was disabled, a dispatch dropped during a GitHub incident.

### [1.1] `sync-openapi.yml` — the API spec

Copies `packages/bitbadgesjs-sdk/openapi-hosted/openapi.json` from
`bitbadgesjs` to `site/openapi/openapi.json`. That upstream file is produced by
`bitbadgesjs`'s own `genapi.yml`. At build time `site/scripts/sync-content.ts`
reads the committed copy, folds the `api/` prose pages into it, and sanitizes
it — so the committed file is the input to the site build, not the output.

Before anything can be committed the spec must pass four checks:

1. It parses as JSON.
2. `info.title` is exactly `BitBadges API`. A different title means the
   assembly step upstream handed us a raw typeconv output or a partial spec.
3. It has at least 90 paths. (It carries 92 today.)
4. Zero operations are marked `x-internal: true`. `bitbadgesjs` runs
   `assert_no_internal_routes.ts` for the same reason; this is the second
   fence, on the theory that internal routes leaking into public docs is worth
   checking twice.

Any failure fails the job and no PR is opened.

### [1.2] `sync-sdk-reference.yml` — the SDK reference

Runs `bun install --frozen-lockfile` and `bun run gen:sdk` inside `site/`, with
`BITBADGESJS_DIR` pointed at the `bitbadgesjs` checkout. The generator
(`site/scripts/gen-sdk-reference.ts`) writes TypeDoc markdown into
`sdk/reference/`, which is committed.

A **preflight** runs first and fails loudly rather than mysteriously: it checks
that `site/package.json` exists and declares a `gen:sdk` script, that
`site/scripts/gen-sdk-reference.ts` exists, and that the path
`BITBADGESJS_DIR` will point at actually contains the SDK package. If someone
renames the script or the SDK moves inside `bitbadgesjs`, the error message
says so.

A **shrink guard** runs after generation. It records the file count and total
byte size of `sdk/reference/` before generating and compares afterwards. If
either falls by more than 30 percent, the job fails. A generator that half
crashes should not quietly land a PR that deletes most of the reference. On a
first run, when the tree does not exist yet, the guard is skipped (there is no
baseline to shrink from) — it still fails if generation produced zero files.

The generator also owns the tree's landing page. `sdk/reference/README.md` is
**not** a copy of the SDK package README any more: `rootIndex()` in the
generator writes a landing page whose page counts come from the emitted tree
and whose "Start here" table is the `START_HERE` list in the same file. Those
fifteen symbols are mirrored one level deep under **SDK Reference** in
`SUMMARY.md` by hand. Generation **fails** when a `START_HERE` symbol is no
longer exported — when that happens, fix `START_HERE` and the matching
`SUMMARY.md` entries together.

Known gap: the workflow does not install dependencies inside the `bitbadgesjs`
checkout before running TypeDoc. Generation is not verified against a
dependency-free upstream checkout; the shrink guard is what stands between a
degraded run and a merged PR.

### [1.3] `sync-proto-reference.yml` — the proto markdown

Same shape, with `bun run gen:proto`, `BITBADGESCHAIN_DIR`, target
`chain/proto/`, and the same preflight and 30 percent shrink guard.
`chain/proto/README.md` is generated too, module counts and the "Start here"
table included; the generator throws when a `START_HERE` proto file disappears.

**Defect — `add-paths` is incomplete.** The generator writes `chain/proto/**`
*and* rewrites the `proto-nav` block in `SUMMARY.md`, but the PR step lists only
`add-paths: chain/proto/**`. A run that adds or removes a proto file produces
pages with no sidebar entry, and the SUMMARY change is silently dropped from
the PR. `add-paths` needs `SUMMARY.md` as a second entry.

This workflow produces **human-readable markdown only**. It does not convert
any spec. The chain's machine-readable document is a separate concern — see
below.

### [1.4] `sync-chain-openapi.yml` — the chain's OpenAPI document

The chain repo generates and commits its own OpenAPI 3.1 document. This
workflow only copies and validates it; there is deliberately no conversion step
in this repo's CI.

Source: `docs/openapi/openapi.json` in `BitBadges/bitbadgeschain`.
Destination: `site/openapi/chain-openapi.json`.

**This workflow fails on every run today.** `bitbadgeschain@master` has no
`docs/openapi/openapi.json` and no `openapi.yml` workflow — its
`.github/workflows/` holds only `build.yml` and `release.yml`. Until that lands
upstream, the committed `site/openapi/chain-openapi.json` is produced locally by
`bun run gen:chain-openapi`, which converts `docs/static/openapi.yml`
(Swagger 2.0, 282 paths). Treat the local generator as the live path and this
workflow as staged for the upstream change, not as working automation.

**The source path is not `docs/static/`, and that is on purpose.** In
`bitbadgeschain`, `docs/docs.go` declares:

```go
//go:embed static
var Static embed.FS
```

The embed pattern is the whole directory, so every byte under `docs/static` is
compiled into the `bitbadgeschaind` release binary — and the node only ever
serves `/static/openapi.yml` (the Swagger 2.0 document). Putting a second ~1 MB
converted JSON in there would grow every release binary and every validator's
download for a file nothing reads at runtime. `docs/openapi/` sits outside the
embed and costs the binary nothing. If someone later "tidies" the converted
document back under `static/`, that is a regression; the chain workflow has an
explicit check that fails on `docs/static/openapi.json`.

Validation gates before commit:

1. Valid JSON.
2. `openapi` is a `3.x` string — not the Swagger 2.0 source.
3. More than 200 paths. (The Swagger source carries 282.)
4. Every `$ref` resolves. External `$ref`s are rejected too: the published
   document must be self-contained, and a dangling pointer renders as a blank
   schema instead of failing.
5. No operation is left tagged only `Query` or `Msg`. Straight out of
   `protoc-gen-openapiv2` every operation carries one of those two tags, which
   collapses the whole chain API into two sections. Upstream retags by module;
   this gate proves it ran.

**One trap worth knowing.** The converter, `scripts/gen-openapi.ts` in the
chain repo, **defaults its `--out` to `docs/static/openapi.json`** — the
embedded path. The chain workflow therefore always passes `--out
docs/openapi/openapi.json` explicitly and never invokes the script bare. If you
run the converter by hand, pass `--out` too, or you will stage a megabyte into
the release binary.

**Offline fallback.** `site/scripts/gen-proto-reference.ts` can generate
locally from a `bitbadgeschain` checkout without any of this CI. That is the
path for working on a plane or before the chain-side workflow lands — it is not
the CI path, and its output should not be committed as if it were the synced
document.

## [2] Secrets

Set all of these as **repository secrets** (Settings → Secrets and variables →
Actions → New repository secret) unless noted.

### [2.1] In this repo (`BitBadges/bitbadges-docs`)

| Secret | Required? | Scope | Used by |
| --- | --- | --- | --- |
| `BITBADGESJS_READ_TOKEN` | Only while `bitbadgesjs` is private | Fine-grained PAT, `Contents: read` on `BitBadges/bitbadgesjs` | `sync-openapi.yml`, `sync-sdk-reference.yml` |
| `BITBADGESCHAIN_READ_TOKEN` | Only while `bitbadgeschain` is private | Fine-grained PAT, `Contents: read` on `BitBadges/bitbadgeschain` | `sync-proto-reference.yml`, `sync-chain-openapi.yml` |
| `DOCS_SYNC_PAT` | Optional but recommended | Fine-grained PAT on this repo, `Contents: read-write` + `Pull requests: read-write` | all four, for PR creation |

Both read tokens fall back to `GITHUB_TOKEN`, so if the upstream repo is public
the workflow needs no secret at all. `GITHUB_TOKEN` cannot read a *private*
sibling repo, which is the only reason the PATs exist.

`DOCS_SYNC_PAT` also falls back to `GITHUB_TOKEN`. The fallback works, with one
known limitation: **a PR authored by `GITHUB_TOKEN` does not trigger this
repo's other workflows.** A sync PR opened that way will not kick off
`docker-publish-docs.yml` or any check, so it merges unverified. Set
`DOCS_SYNC_PAT` if you want CI to run on sync PRs. If you rely on the fallback,
you must also enable Settings → Actions → General → *Allow GitHub Actions to
create and approve pull requests*, or `create-pull-request` fails with a
permissions error.

This repo already has an `ADMIN_PAT` secret (used by `for--llms.yml`). It is
deliberately **not** reused here: these workflows want the narrowest token that
does the job, and `ADMIN_PAT` is broader than that.

### [2.2] In the upstream repos

| Secret | Repo | Scope | Used by |
| --- | --- | --- | --- |
| `DOCS_DISPATCH_PAT` | `BitBadges/bitbadgesjs` | Fine-grained PAT on `BitBadges/bitbadges-docs`, `Contents: read-write` + `Pull requests: read-write` | the proposed `notify-docs.yml` |
| `DOCS_DISPATCH_PAT` | `BitBadges/bitbadgeschain` | same | the proposed `notify-docs.yml` |

`Contents: read-write` is what actually authorizes `repository_dispatch`;
`Pull requests: read-write` is needed because the workflow it triggers opens a
PR. There is no fallback: `GITHUB_TOKEN` cannot dispatch into another repo. If
this secret is absent or expired, the fast path silently stops and the weekly
cron becomes the only sync. That is the failure mode the cron exists for.

**Set an expiry reminder.** A fine-grained PAT expires. When
`DOCS_DISPATCH_PAT` lapses, nothing goes red in the docs repo — dispatches just
stop arriving, and the docs drift for up to a week before the cron notices.

## [3] Triggering a sync by hand

From the GitHub UI: Actions → pick the workflow → *Run workflow* → `master` →
Run.

From the CLI:

```sh
gh workflow run sync-openapi.yml         --repo BitBadges/bitbadges-docs --ref master
gh workflow run sync-sdk-reference.yml   --repo BitBadges/bitbadges-docs --ref master
gh workflow run sync-proto-reference.yml --repo BitBadges/bitbadges-docs --ref master
gh workflow run sync-chain-openapi.yml   --repo BitBadges/bitbadges-docs --ref master
```

To simulate the upstream signal instead of the manual trigger (useful when
testing the dispatch wiring itself), fire the `repository_dispatch` directly.
This needs a token with `Contents: read-write` on the docs repo:

```sh
gh api repos/BitBadges/bitbadges-docs/dispatches \
  -f event_type=openapi-updated \
  -f 'client_payload[source]=manual'
```

Valid `event_type` values: `openapi-updated`, `sdk-updated`, `proto-updated`,
`chain-openapi-updated`.

Watch a run:

```sh
gh run list  --repo BitBadges/bitbadges-docs --workflow sync-openapi.yml --limit 5
gh run watch --repo BitBadges/bitbadges-docs <run-id>
```

A run that ends green with no PR is the normal, expected outcome when nothing
upstream changed. The final `Report` step says so explicitly.

## [4] When a sync PR looks wrong

Work down this list; it is ordered by how often each thing is the cause.

**The PR is enormous / touches far more than expected.**
Usually an upstream reformat, not a content change. Check the upstream commit
the PR body links to. For the SDK and proto references, a TypeDoc or generator
version bump reflows every file. Confirm the *semantic* content still matches
by spot-checking three or four pages, then merge — the diff size is noise. If
the reflow is unwanted, pin the generator version in `site/package.json`
instead of hand-editing the PR.

**The PR deletes a lot.**
The shrink guard already blocks a loss over 30 percent, so anything that got
through is a smaller deletion — often legitimate (a module was removed
upstream). Verify against the upstream repo before merging. If the guard *did*
fire and you believe the deletion is correct, do not raise the threshold: run
the generator locally, confirm the output, and land it as a normal reviewed PR.

**The job failed on a validation gate.**
The gate message names the exact problem. These are upstream bugs, not docs
bugs — fix them in the source repo rather than working around them here:

- `info.title is ...` — `bitbadgesjs` published a raw or partial spec. Its
  `genapi.yml` has the same gate, so check why that one passed.
- `only N paths` — truncated generation upstream.
- `N operation(s) marked x-internal` — an internal route reached the public
  spec. This is a disclosure issue; treat it as urgent.
- `openapi is "undefined"` / `still Swagger 2.0` — the chain's conversion step
  did not run.
- `unresolvable $ref` — the conversion dropped definitions.
- `carry no module tag beyond Query/Msg` — the chain's retag step did not run
  or missed routes.

**The job failed on preflight.**
A generator script or env path is missing. The message names which. Most likely
someone renamed `gen:sdk` / `gen:proto` in `site/package.json`, or the SDK or
`proto/` directory moved inside the upstream repo. Update the workflow to match
reality.

**The API reference page renders empty after merging a spec sync.**
`site/scripts/sync-content.ts` resolves the spec from `DOCS_OPENAPI_SOURCE`,
then `site/openapi/openapi.json`, then a sibling `bitbadgesjs` checkout. Its
build log prints which one it used and how many operations it hid or stubbed.
Read that log first.

**Two sync PRs are open against the same branch.**
Should not happen — each workflow has a `concurrency` group and
`create-pull-request` reuses its fixed branch (`sync/openapi`,
`sync/sdk-reference`, `sync/proto-reference`, `sync/chain-openapi`). A second
run force-updates the existing PR rather than opening another. If you genuinely
see two, one was opened by hand; close it.

**Nothing has synced in a while and no runs appear.**
Check that `DOCS_DISPATCH_PAT` has not expired in the upstream repos (see
[2.2]). Also check Settings → Actions: GitHub disables scheduled workflows in a
repository with no activity for 60 days, and re-enabling them is manual.

## [5] Retirement: Stoplight and GitHub Pages

> **Full contract moved.** Evidence, sequencing, redirects, verification, and
> rollback for Stoplight, GitHub Pages, **and GitBook** now live in
> [`retire-hosted-docs.md`](./retire-hosted-docs.md) (`RB-RETIRE-HOSTED`).
> This section is the short sync-CI-side view. Where the two differ, the
> retirement runbook wins.

Both of these are being retired as this repo becomes the single place API and
SDK documentation is published. **Each needs its own separate PR in
`BitBadges/bitbadgesjs` — neither is part of the docs-repo change.**

### [5.1] Stoplight

`bitbadgesjs`'s `genapi.yml` currently has a `Push to Stoplight` step that runs
`bunx @stoplight/cli@6 push`. Once `sync-openapi.yml` is live and the API
reference renders from `site/openapi/openapi.json`, Stoplight has no consumer.

To retire it, in a PR against `bitbadgesjs`:

1. Delete the `Push to Stoplight` step from `.github/workflows/genapi.yml`.
2. Drop `@stoplight/cli` from the `bun install -g` line in the same file — that
   step is its only user.
3. Delete the `STOPLIGHT_TOKEN` secret from that repo. Confirm nothing else
   references it: `grep -rn STOPLIGHT .github/ scripts/` should come back
   empty.
4. Revoke the token on the Stoplight side. Deleting the GitHub secret does not
   invalidate it.

### [5.2] GitHub Pages and the `gh-pages` branch

`bitbadgesjs` also has `.github/workflows/docs.yml`, which runs
`scripts/gendocs.sh` and deploys to a `gh-pages` branch via
`JamesIves/github-pages-deploy-action`. That published SDK reference is
superseded by `/sdk/reference` on this site, generated by
`sync-sdk-reference.yml` from the same source.

**Once `/sdk/reference` is live and verified, `docs.yml` and the `gh-pages`
branch in `bitbadgesjs` should both be retired.** Stating that plainly so it
does not linger: keeping two SDK references means one of them is always wrong,
and the stale one is the one people find in search results.

To retire it, in a **separate** PR against `bitbadgesjs` (separate from the
Stoplight one, so a rollback of either does not drag the other back):

1. Archive the current `gh-pages` tip as a tag — this is the whole rollback.
2. Delete `.github/workflows/docs.yml`, so the next SDK push cannot redeploy
   TypeDoc over the shim.
3. Replace the `gh-pages` branch content with a redirect shim
   (`index.html` + `404.html`) that sends old Pages URLs to `/sdk/reference`.

**Keep the branch and leave Pages switched on.** An earlier draft of this
section said to delete the branch and add rows to `_docs/redirects/*.tsv`;
both were wrong. That table drives `next.config.ts` on `docs.bitbadges.io`
and cannot catch a request to `bitbadges.github.io` — a different origin. The
only place a redirect for those URLs can live is the `gh-pages` branch itself.
Exact commands, the directory-name mismatches (`enums` → `enumerations`,
`types` → `type-aliases`, `variables`/`modules` with no equivalent), and the
404-status caveat are in [RB-RETIRE-HOSTED#3].

### [5.3] Order of operations

1. Land the four sync workflows in this repo.
2. Land `notify-docs.yml` in `bitbadgesjs` and `bitbadgeschain`; create
   `DOCS_DISPATCH_PAT` in both.
3. Land `openapi.yml` in `bitbadgeschain` so `docs/openapi/openapi.json`
   exists. Until it does, `sync-chain-openapi.yml` fails by design with a
   message naming the missing file.
4. Verify a real sync end to end: push a trivial proto or SDK change upstream
   and confirm a PR appears here.
5. Only then retire Stoplight ([5.1]).
6. Only after `/sdk/reference` is live and verified, retire Pages ([5.2]).
