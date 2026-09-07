# BitBadges docs rewrite: information architecture

Status: working spec for the `feat/docs-rewrite` branch. Every writer agent works from this file. Paths here are final; link to them even if the target does not exist yet.

## Principles

1. Task first, surface second. A reader arrives with a job (create a token, distribute it, gate access, sign users in). Guides answer the job in the primary surface (`bb` CLI, then TypeScript where it adds something). Reference tabs document each surface exhaustively and tersely.
2. One canonical page per concept. Concepts live in the Token Standard tab only. Guides link to them; they never re-explain.
3. Reference is generated-shaped. One page per message, query, CLI command group, MCP tool group, plugin. Predictable URLs so agents can guess them.
4. Nothing is lost. Every old page maps to a new page in the table below. Unique content is moved, not dropped. Only true duplicates and empty stubs are dropped. Every old URL gets a redirect.
5. Write for agents too. Flat, predictable paths. `description:` frontmatter on every page. Code before prose. No content that exists only in images.

## Top tabs

`##` groups in SUMMARY.md map to tabs (site change in `site/`). Six tabs (the Chain tab was split out of Token Standard after review; paths under token-standard/{network,modules,evm}, ibc/rate-limits, ibc/cross-chain-queries moved to chain/):

| Tab | URL prefix | Audience | Contents |
| --- | --- | --- | --- |
| Docs | `/`, `/start`, `/guides`, `/about` | everyone | landing, quickstart, task guides, positioning, links, FAQ |
| Token Standard | `/token-standard` | protocol developers | concepts, approval criteria, messages, queries, wrapping and IBC hooks, integrate, BB-402 |
| Chain | `/chain` | chain and infra developers | network constants and endpoints, modules (x/tokenization links back), EVM precompiles, rate limits, ICQ, nodes, testnet, websocket |
| API | `/api`, `/api-reference` | app backends | REST API concepts, sign in with BitBadges, claims API, the Scalar reference |
| SDK & CLI | `/sdk`, `/cli` | TypeScript and terminal users | bitbadgesjs reference and snippets, `bb` command reference, signing and broadcasting |
| Agents | `/agents` | AI agents and people wiring them | install paths, MCP tools, plugin, CLI for agents, skills, agent patterns |

Why MCP gets a tab: it is the priority developer path and has its own audience. Why SDK & CLI is separate from API: the API is a hosted service with credits and auth; the SDK and CLI are local tools. Why concepts are not under Docs: keeping them in one place removes the learn/ vs concepts/ vs examples/ triplication.

## Facts writers must respect

- Testnet is offline (503 as of 2026-09-06). Mainnet LCD `https://lcd.bitbadges.io` works. Examples target mainnet. Keep exactly one testnet status page (`token-standard/network/testnet.md`). Do not tell readers to hit the testnet faucet as a live step.
- `bb` is the CLI alias for `bitbadgeschaind`. Never teach `bb cli <subcmd>` (deprecated alias).
- Real MCP tool list (53) is in `bitbadgesjs/packages/bitbadgesjs-sdk/src/builder/tools/` (registry). `build_address_list` does not exist. `get_review_url`, `BuildResult.reviewUrl`, and `bb preview --open` are on master (bitbadgesjs #288, #289, merged). `get_review_url` returns `reviewUrl` only; `previewUrl` and `buildPreviewUrlFromCode` were removed with the read-only preview page. `add_preset_approval`, `list_presets`, `flag_review_item`, `generate_placeholder_art`, `search` exist on master.
- Bring your own AI is the only builder path. The in-site AI builder is deleted (indexer #242 merged, frontend #328): no hosted LLM, no `/mint/ai-mint`, no `/api/v0/builder/ai-build*`. Community prompt skills went with it (bitbadgesjs #296, merged): no `/api/v0/promptSkills*`, no `/builder/community-skills`, no `createBitBadgesCommunitySkillsFetcher`, no `promptSkillIds`. Curated skills live in the SDK's `skillInstructions` and the Claude Code plugin.
- `sdk/reference/` is committed generated content (`bun run gen:sdk` in `site/`). It still carries prompt-skill pages until the next regeneration against a released SDK; do not hand-edit those pages. Never document it as an entry point or a fallback. `bitbadges.io/mint/local-builder` accepts `#tx=<base64url JSON>`, `?code=prv_...`, and pasted JSON for review and sign. `bb preview` prints one link; `/builder/preview` is now only a redirect to the builder.
- Real CLI commands are in `bitbadgesjs/packages/bitbadgesjs-sdk/src/cli/commands/`. 21 `build` subcommands, 13 standards groups plus `custom-2fa`. Undocumented groups to add: `amount`, `balances`, `assets`, `pools`, `pairs`, `price`, `swap`, `url`, `gen-pub-key`, `sign-with-browser`.
- Claims plugin ids in the indexer (16): anonymous, codes, discord, github, github-contributions, google, halt, initiatedBy, min-badge, must-own-badges, numUses, password, transferTimes, twitch, twitter, whitelist. Verify url-clicker, custom-instructions, satisfies-claim, username-set against `bitbadges-frontend` before documenting them.
- tokenization Msgs (27) and Queries (16): see inventory-B. All must have a page. `x/pot` does not exist; the proof-of-token page must say it is app-level integration guidance (verify against chain source) or be dropped.
- Three EVM precompiles: tokenization `0x…1001`, gamm `0x…1002`, sendmanager `0x…1003`. sendmanager exposes `send`, not `sendTokens`. Regenerate tokenization ABI reference from `x/tokenization/precompile/abi.json`.
- The 23 skill pages are dumps of `bitbadgesjs-sdk/src/builder/resources/skillInstructions.ts`. That file is the source. Re-derive from it, fix fences and leaked backticks, strip em-dashes and shouting.
- Images stay in `.gitbook/assets/`. Reference them with a relative path that contains `.gitbook/assets/`; the site resolves that from the repo root regardless of depth (site change).
- Hint syntax supported: `{% hint style="info|warning|danger|success" %}`. No `{% tabs %}`.

## New tree

Legend: `<-` lists the old files whose content feeds the page. `NEW` means write from source. Word targets are guidance.

### Docs tab

```
README.md                          <- README.md (lead only), overview/what-is-bitbadges.md (harvest), getting-started.md (paths). Landing: one paragraph what it is, four entry cards (Quickstart, Token Standard, API, Agents), one code block (bb install + first query). ~350 words.
start/quickstart.md                <- for-developers/getting-started.md, cli/installation.md (install part), ai-agents/README.md (5-min quickstart), bitbadges-sdk/react-quickstart.md (lead). Paths: CLI, TypeScript, no-code site, AI agent. First query, first tx. ~900 words.
guides/README.md                   NEW. Table of guides: task, surface, time.
guides/create-a-collection.md      <- x-tokenization/examples/base-collection-details.md, examples/txs/msgcreatecollection/*, examples/skills/nft-collection.md + fungible-token.md (configs), cli/build-commands.md (walkthrough portion). bb build + SDK + JSON for NFT and fungible.
guides/mint-and-distribute.md      <- examples/mint-all-to-self-tutorial.md, examples/defining-circulating-supply.md, examples/msg-transfer/*, skills/minting.md, skills/auto-mint.md.
guides/set-transferability.md      <- examples/building-collection-approvals.md, examples/approvals/* (5 snippets), examples/building-user-approvals.md, examples/txs/msgupdate-user-approvals/*, skills/tradable.md, skills/burnable.md, examples/empty-approval-criteria.md.
guides/lock-permissions.md         <- examples/building-collection-permissions.md, building-user-permissions.md, examples/permissions/* (4), skills/immutability.md. Locking patterns.
guides/distribute-with-claims.md   <- claims/examples.md, claims/designing-claims.md, claims/gating-approvals.md (guide half), claim-builder/other-tutorials/in-site-guides.md.
guides/build-a-claim-plugin.md     <- claims/custom-plugins.md (tutorial half), claim-builder/plugins/creating-a-custom-plugin/** (re-home api-handler, design-considerations, hook-types, user-inputs, managing, testing).
guides/gate-access.md              <- token-standard/bb-402/overview.md (guide half), bb-402/middleware-recipes.md, sdk snippets balance-lookups (verify ownership), skills/bb-402.md.
guides/sign-in-users.md            <- sign-in-with-bitbadges/overview.md + setting-up-an-app.md + authorization-url/* (the short path). Links API tab for reference.
guides/wrap-to-an-ibc-denom.md     <- examples/cosmos-coin-wrapper-example.md, examples/approvals/cosmos-wrapper-approval.md + cosmos-unwrapper-approval.md.
guides/trade-on-the-dex.md         <- x-gamm README (user half), bitbadges-api/estimating-swaps.md (guide part), cli swap/pools/pairs/price (from source). Pools, swaps, liquidity.
guides/subscriptions-and-time-based-tokens.md <- skills/subscription.md, learn balance-system (time part, link only), skills/credit-token.md (config).
guides/smart-tokens-and-vaults.md  <- skills/smart-token.md, ai-agents/openclaw-vault-tutorial.md, learn/ibc-backed-minting.md (link only), ai-agents/smart-token-type-detection.md (the type table).
using-the-frontend/README.md + 8 pages  NEW. Walkthrough of bitbadges.io with captured screenshots (see "Frontend screenshots" under Site changes).
about/README.md                    <- README.md (why), overview/what-is-bitbadges.md, x-tokenization/README.md (features list). "Why BitBadges": theses, design decisions. No hype multipliers. ~900 words.
about/use-cases.md                 <- overview/use-cases.md. Cut the templated restatements.
about/comparisons.md               <- overview/bitbadges-vs-erc3643.md, overview/comparing-bitbadges-to-other-protocols.md.
about/badge-token.md               <- overview/badge.md. Verify the rewards-program dates.
about/links.md                     <- overview/official-links.md, overview/link-sharing.md, overview/contributing.md. Fix the Stoplight link, list npm once.
about/faq.md                       <- overview/faq.md (fix typo). Fee schedule stays here.
```

### Token Standard tab

```
token-standard/README.md                       <- x-tokenization/README.md, README.md (module description), learn/README.md. What x/tokenization is, module map, reading order. No link lists that duplicate the sidebar.
token-standard/concepts/README.md              <- learn/pre-readings.md, token-standard/pre-readings.md. The mental model on one page: collection, tokens, balances, approvals, permissions. Reading order in dependency order.
token-standard/concepts/accounts.md            <- for-developers/concepts/accounts.md, sdk snippets address-conversions (concept part only).
token-standard/concepts/uint-ranges.md         <- token-standard/learn/uintrange.md, for-developers/concepts/uint-ranges.md.
token-standard/concepts/balances.md            <- token-standard/learn/balance-system.md, for-developers/concepts/balances.md (expansion rules).
token-standard/concepts/collections.md         <- token-standard/learn/collection-setup-fields.md, overview/learn/badge-concepts/standards.md (standards field). Fields, metadata, customData inline metadata, standards, validTokenIds, invariants pointer.
token-standard/concepts/minting-and-supply.md  <- learn/minting-and-circulating-supply.md, x-tokenization/concepts/total-supply.md.
token-standard/concepts/address-lists.md       <- token-standard/learn/address-lists.md, for-developers/concepts/address-mappings-lists.md (inversion section).
token-standard/concepts/transferability.md     <- learn/transferability.md.
token-standard/concepts/prioritized-approvals.md <- learn/auto-scan-and-prioritized-approvals.md, x-tokenization/concepts/approval-criteria/must-prioritize.md.
token-standard/concepts/permissions.md         <- learn/permissions.md, x-tokenization/concepts/manager.md.
token-standard/concepts/compliance-zones.md    <- overview/compliance-zone-architecture.md (remove em-dashes, keep the mechanism).
token-standard/approval-criteria/README.md     <- token-standard/learn/approval-criteria/README.md, requires.md. The full interface, a table of every criterion with one line and a link, the `require*` flags.
token-standard/approval-criteria/address-checks.md
token-standard/approval-criteria/alt-time-checks.md   <- x-tokenization/concepts/approval-criteria/alt-time-checks.md
token-standard/approval-criteria/approval-trackers.md <- approval-trackers.md, max-number-of-transfers.md, tallied-approval-amounts.md
token-standard/approval-criteria/auto-deletion.md     <- auto-deletion-options.md
token-standard/approval-criteria/coin-transfers.md    <- usdbadge-transfers.md
token-standard/approval-criteria/dynamic-store-challenges.md
token-standard/approval-criteria/eth-signature-challenges.md
token-standard/approval-criteria/evm-query-challenges.md  (criteria half)
token-standard/approval-criteria/invariants.md        <- evm-query-challenges.md (invariants half), collection-setup-fields.md (invariants section)
token-standard/approval-criteria/merkle-challenges.md
token-standard/approval-criteria/overrides.md
token-standard/approval-criteria/predetermined-balances.md
token-standard/approval-criteria/special-address-flags.md
token-standard/approval-criteria/token-ownership.md   <- badge-ownership.md
token-standard/approval-criteria/user-approval-settings.md <- user-approval-settings.md, user-royalties.md
token-standard/approval-criteria/voting-challenges.md
token-standard/messages/README.md              <- x-tokenization/messages/README.md. Table: message, who signs, one line. Grouped.
token-standard/messages/msg-<kebab>.md         one per Msg, 27 pages. Existing 25 (incl. orphans msg-cast-vote, msg-set-token-metadata) + NEW msg-set-reserved-protocol-address.md, msg-update-params.md. Filenames: msg-universal-update-collection, msg-create-collection, msg-update-collection, msg-delete-collection, msg-transfer-tokens, msg-update-user-approvals, msg-set-incoming-approval, msg-delete-incoming-approval, msg-set-outgoing-approval, msg-delete-outgoing-approval, msg-purge-approvals, msg-create-address-lists, msg-create-dynamic-store, msg-update-dynamic-store, msg-delete-dynamic-store, msg-set-dynamic-store-value, msg-set-valid-token-ids, msg-set-manager, msg-set-collection-metadata, msg-set-token-metadata, msg-set-custom-data, msg-set-standards, msg-set-collection-approvals, msg-set-is-archived, msg-set-reserved-protocol-address, msg-cast-vote, msg-update-params.
token-standard/queries/README.md               <- x-tokenization/queries/README.md
token-standard/queries/<kebab>.md              one per Query, 16 pages: params, get-collection, get-address-list, get-approval-tracker, get-challenge-tracker, get-eth-signature-tracker, get-balance, get-balance-for-token (NEW), get-dynamic-store, get-dynamic-store-value, get-wrappable-balances, is-address-reserved-protocol (NEW), get-all-reserved-protocol-addresses (NEW), get-vote (NEW), get-votes (NEW), get-collection-stats.
token-standard/ibc/README.md                   NEW short: how tokens cross into x/bank and IBC. Map of the four mechanisms.
token-standard/ibc/alias-denoms.md             <- learn/alias-compatibility.md
token-standard/ibc/cosmos-coin-wrapper-paths.md <- learn/cosmos-coin-wrapper-paths.md
token-standard/ibc/backed-minting.md           <- learn/ibc-backed-minting.md, x-tokenization/concepts/ibc-backed-paths.md
token-standard/ibc/transfer-tokens-hook.md     <- learn/ibc-transfer-tokens-hook.md, x-custom-ibc-hooks/README.md + overview.md
token-standard/ibc/rate-limits.md              <- x-ibc-rate-limit/README.md + overview.md, plus MsgUpdateRateLimit / MsgUpdateParams from proto.
token-standard/ibc/cross-chain-queries.md      <- bitbadges-blockchain/cross-chain-queries.md
token-standard/modules/README.md               <- other-modules/README.md. Table of the modules.
token-standard/modules/gamm/README.md          <- x-gamm/README.md + introduction.md
token-standard/modules/gamm/messages.md        <- x-gamm/messages/** (all 5) + NEW rows for the 7 undocumented Msgs from proto. One page, one section per Msg.
token-standard/modules/gamm/queries.md         NEW from proto (16 queries, table + one example).
token-standard/modules/manager-splitter/README.md <- x-managersplitter/README.md + overview.md
token-standard/modules/manager-splitter/messages.md <- x-managersplitter/messages/** + MsgUpdateParams; queries section from proto.
token-standard/modules/send-manager.md         NEW from proto (SendWithAliasRouting) + sendmanager precompile link.
token-standard/modules/pool-manager.md         NEW short from proto.
token-standard/evm/README.md                   <- evm/EVM_INTEGRATION.md, evm/evm-precompiles/README.md
token-standard/evm/solidity-quickstart.md      <- evm/evm-precompiles/solidity-quickstart.md
token-standard/evm/setup.md                    <- setup-and-configuration.md
token-standard/evm/developer-guide.md          <- developer-guide.md
token-standard/evm/architecture.md             <- architecture.md
token-standard/evm/tokenization-precompile/README.md
token-standard/evm/tokenization-precompile/api.md      regenerate from abi.json, keep the prose per function
token-standard/evm/tokenization-precompile/gas.md      rewrite from x/tokenization/precompile gas source
token-standard/evm/tokenization-precompile/errors.md
token-standard/evm/tokenization-precompile/security.md rewrite from security source
token-standard/evm/gamm-precompile/README.md
token-standard/evm/gamm-precompile/api.md
token-standard/evm/gamm-precompile/gotchas.md
token-standard/evm/send-manager-precompile.md  <- sendmanager-precompile/README.md (fix `send`)
token-standard/evm/cosmos-precompiles.md
token-standard/evm/rpc-endpoints.md            <- bitbadges-blockchain/evm-rpc-endpoints.md
token-standard/integrate/README.md             <- integrating-the-module/README.md (stub) NEW intro.
token-standard/integrate/multiple-standards.md
token-standard/integrate/extension-hooks.md
token-standard/integrate/ante-handler-token-gates.md
token-standard/integrate/proof-of-token-voting-power.md  (verify; label app-level)
token-standard/bb-402/README.md                <- bb-402/README.md + overview.md (spec-side half)
token-standard/bb-402/spec.md
token-standard/bb-402/collection-recipes.md
token-standard/network/README.md               <- bitbadges-blockchain/README.md + overview.md, for-developers/concepts/chain-details.md. Chain IDs, denoms, decimals, endpoints table (RPC, LCD, EVM RPC, explorer, registry).
token-standard/network/supported-denoms.md
token-standard/network/run-a-node.md           <- run-a-mainnet-node.md
token-standard/network/testnet.md              <- testnet-mode.md, ai-agents/testnet-faucet.md. Status: offline. Keep the faucet API shape for when it returns.
token-standard/network/websocket-events.md     <- ai-agents/websocket-events.md
```

### API tab

```
api/README.md                      <- bitbadges-api/README.md, api.md, credits.md, concepts/limits-restrictions.md, concepts/refresh-queue.md. Base URL, keys, credits and pricing, limits, number types, errors, refresh queue. Link to /api-reference.
api/pagination-and-views.md        <- concepts/managing-views.md
api/swaps.md                       <- estimating-swaps.md
api/claims.md                      <- claims/api-reference.md, ai-agents/claims-for-agents.md, claim-builder/bitbadges-api-claims/*
api/plugins.md                     <- claims/built-in-plugins.md (+6 social plugins from indexer source), claims/custom-plugins.md (reference half: request and response contract), claim-builder api-handler.md
api/sign-in/README.md              <- sign-in-with-bitbadges/README.md + overview.md
api/sign-in/setup.md               <- setting-up-an-app.md (fix typo)
api/sign-in/authorization-url.md   <- authorization-url/README.md + configuration.md + generating-the-url.md
api/sign-in/callback.md            <- approaches/redirected-callback.md
api/sign-in/verification.md        <- verification/README.md + verification-flow.md + access-tokens.md + security-considerations.md
api/sign-in/frameworks.md          <- templates-and-frameworks/** (auth0, wordpress, supabase, discourse, others; expressjs only if it has content)
api/self-hosting.md                <- bitbadges-api/indexer.md (fix CouchDB vs MongoDB against bitbadges-indexer source)
(/api-reference stays the Scalar page)
```

### SDK & CLI tab

```
sdk/README.md                      <- bitbadges-sdk/README.md + overview.md, bitbadges-api/api.md (client part). Install, BitBadgesAPI client, signing client, links.
sdk/react-quickstart.md
sdk/types.md                       <- sdk-types.md, common-snippets/numbertype-conversions.md
sdk/snippets/README.md             <- common-snippets/README.md (drop the accuracy disclaimer; verify snippets against SDK source)
sdk/snippets/<same names>.md       address-conversions, uint-ranges, balances, balance-lookups, transfers, address-lists, token-metadata, approvals, interpret-collection, interpret-transaction, simulation-balance-diffs. Drop the "Documentation Link: Here" openers.
sdk/transactions/README.md         <- create-and-broadcast-txs/README.md, transaction-context.md, generate-msg-contents.md. The pipeline: build msgs, context, sign, broadcast.
sdk/transactions/signing-client.md
sdk/transactions/sign-cosmos.md
sdk/transactions/sign-ethereum.md
sdk/transactions/broadcast.md      <- broadcast-to-a-node.md, sign-+-broadcast-bitbadges.io.md
cli/README.md                      <- cli/README.md, installation.md, bitbadges-sdk/cli.md (drop). Install, `bb --help` groups (complete list from source), settings, doctor.
cli/build.md                       <- build-commands.md (reference half; 21 builders from source)
cli/analyze.md                     <- analysis-commands.md (check, explain, simulate, preview)
cli/deploy.md                      <- deploy-commands.md, tx-commands.md, sign-bridge.md
cli/standards.md                   <- standards-commands.md (13 groups + custom-2fa; add smart-tokens verbs)
cli/api.md                         <- api-commands.md (drop hardcoded counts)
cli/auth.md                        <- auth-commands.md
cli/account.md                     <- utility-commands.md (account part), plus `url`, `gen-pub-key`
cli/swap.md                        NEW from source: swap, pools, pairs, price, assets, balances, amount
cli/dev.md                         <- utility-commands.md (dev part), tool-commands.md
cli/chain.md                       <- chain-commands.md, create-and-broadcast-txs/chain-cli.md (absorb the 1225 unique words)
```

### Agents tab

```
agents/README.md                   <- ai-agents/README.md, cli/for-ai-agents.md. Paths table (CLI, MCP, Claude Code plugin, SDK), quickstart, review-and-sign handoff, metadata without hosting.
agents/setup.md                    NEW. Per-harness setup: Claude Code, Claude Desktop, Cursor, Windsurf, Codex CLI, VS Code, Zed, no-tools LLM paste-JSON handoff.
agents/mcp-tools.md                <- ai-agents/builder-tools.md, cli/tool-commands.md. Regenerate the tool list from the registry (53). Group by purpose.
agents/claude-code-plugin.md
agents/programmatic-agent.md       (strip 59 em-dashes)
agents/spending-authorization.md   <- agent-spending-authorization.md (add code)
agents/bot-examples.md             (mainnet)
agents/reading-the-docs.md         NEW short: llms.txt, for-llms.txt, `bb dev docs`, fetch_docs tool.
agents/skills/README.md            <- examples/skills/README.md
agents/skills/<23 names>.md        re-derived from skillInstructions.ts; same slugs as today.
```

### Dropped (no content or fully duplicated; all get redirects)

overview/claim-builder/README.md, badge-standard/**, token-standard/concepts/**, token-standard/messages/msgsettokenmetadata.md, token-standard/examples/**, token-standard/integrating-the-module/README.md, .gitbook/includes/untitled.md, .gitbook/assets/README.md, .gitbook/assets/modules.md, SUMMARY.md.backup.*, evm/EVM_POC_COMPLETION_SUMMARY.md, evm/evm-precompiles/SUMMARY.md, other-modules/x-*/README.md, x-tokenization/examples/txs/**/README.md (3 stubs), for-developers/concepts/README.md, for-developers/claim-builder/** (after re-homing the 7), for-developers/create-and-broadcast-txs/**, for-developers/bitbadges-sdk/cli.md, all title-only README stubs, _docs/development-guide.md (replaced by _docs/style-guide.md).

## Redirects

Every writer appends rows to `_docs/redirects.tsv` (old route TAB new route, routes without `.md`, `README` dropped). The site change reads this file. Old routes follow the current site's rules: `dir/README.md` -> `/dir`, `x.md` -> `/x`.

## Site changes (site/)

1. Tabs from SUMMARY `##` groups. Tab label = group title. Sidebar shows only the active tab's group. Prev/next scoped to the tab. `/api-reference` belongs to the API tab.
2. Asset resolution: any image src containing `.gitbook/assets/` resolves from the content root.
3. `redirects.json` generated from `_docs/redirects.tsv`, wired into `next.config.ts`, with a test that every destination resolves and no source is a live route.
4. Tests updated for the new group titles and page count.
5. Three generated reference trees are committed content, not build output:
   `sdk/reference/` (1647 pages, `gen:sdk`), `chain/proto/` (68 pages,
   `gen:proto`), and `site/openapi/chain-openapi.json` (`gen:chain-openapi`).
   Each is hosted in-site, indexed by search (17,575 + 546 records), and kept
   current by a workflow in `.github/workflows/`. `SUMMARY.md` nests every proto
   page (between the `proto-nav` markers, written by the generator) and, for the
   SDK, the six group indexes plus the fifteen `START_HERE` symbols.

### Visuals

Three channels, each generated from a source the tests can check. The plan and the backlog are in [`visuals.md`](visuals.md).

- **Diagrams.** A ```mermaid fence renders to inline SVG at build time (`site/src/lib/docs/mermaid.ts`, `beautiful-mermaid`, no DOM, no client script). Colors are the site tokens, so diagrams follow the theme. `site/tests/mermaid.test.ts` renders every fence in the corpus.
- **Code folds.** A folded figure has Collapsed and Full tabs in its caption (`site/src/lib/docs/fold.ts`, `CopyButtons.tsx`). The listing never breaks into panels; the reader's choice is remembered in `localStorage`.
- **Widgets.** Read-only mocks of frontend UI, embedded from markdown; see the next subsection.
- **Screenshots.** Playwright captures of bitbadges.io in light and dark for the Using the Frontend walkthrough, driven by one manifest; see the Frontend screenshots subsection.

### Site metadata and icons

`site/src/app/layout.tsx` carries `metadataBase` (from `DOCS_SITE_URL`), the title template, Open Graph and Twitter cards, the icon set, and a `viewport.themeColor` per color scheme.

- Favicon: `site/src/app/icon.svg`, the same circular mark as the top bar and the widgets (`site/public/bitbadges-logo.svg`). Apple touch icon: `site/src/app/apple-icon.png` (180px).
- Web app manifest: `site/src/app/manifest.ts`, serving `/manifest.webmanifest` with `public/icon-192.png` and `public/icon-512.png`.
- Social card: `site/public/og.png` (1200x630), a static file so it works under a static export. Regenerate it by rendering the card HTML in a headless browser; the source lives with the OG script in the scratchpad recipe recorded in this section's history, and the file is committed.

### Widgets (site/src/components/widgets)

Read-only mocks of bitbadges.io UI that a page embeds from markdown. They are
React components living in the docs site, not imports from the frontend, so the
docs build stays free of antd, wallet contexts, and data fetching. Each copies
the frontend's layout, icons, and colors, and reads the site's design tokens
(`--fg`, `--bg-inset`, `--border`), so it follows the light and dark theme.

Surfaces. `WidgetFrame` in `shared.tsx` is the one outer wrapper; its
`widget-surface` class (globals.css) is the code-figure surface (`--bg-code`,
`--border`, 12px radius, `--shadow-sm`), so a widget next to a code block reads
as the same kind of figure. Panels inside a widget use `widget-panel`, the
code figure's caption tint one step in. A widget adds only its own padding and
width through `className`; it never paints its own outer surface.

Logos. Chain and token marks are the frontend's own image files, copied
unchanged from `bitbadges-frontend/public/images` into `site/public/widgets/`
(`eth-logo.webp`, `solana-logo.webp`, `bitcoin-logo.webp`, `cosmos-logo.webp`
for ATOM, `usdc.webp`), plus `bitbadges-logo.svg`, the same circular
mark the top bar uses (`site/public/bitbadges-logo.svg`), never the frontend's older PNG marks. The map is
`CHAIN_LOGOS` / `TOKEN_LOGOS` in `shared.tsx`; nothing is hand-drawn. The
`<img>` carries `data-site-asset`, which tells the asset rewrite in
`markdown.ts` to leave the `src` alone (it is already `basePath`-prefixed and
lives in `public/`, not the content tree), and `.doc .widget img` drops the
frame `.doc img` gives content images.

Syntax. A leaf directive for flat props, a container directive for JSON:

```
::widget{name="address" address="bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d" caption="One sentence."}

:::widget{name="approval-criteria" caption="One sentence."}
{ "coinTransfers": [ ... ] }
:::
```

`site/src/lib/docs/widgets.ts` resolves the directive against the registry,
validates the props with the widget's zod schema, renders the component to
static HTML with `site/src/lib/docs/react-static.ts`, and replaces the node.
An unknown name or invalid props throws with the file and line, so the page
fails the build and `site/tests/widgets.test.ts` rather than rendering nothing.
`markdown.ts` carries one `.use(remarkWidgets, options)` line for this.

Registered widgets: `address`, `address-list`, `collection-card`,
`approval-criteria`, `permissions-grid`, `swap`, `transferability-row`.

Adding a widget:

1. Create `site/src/components/widgets/<Name>.tsx` exporting `schema` (zod),
   `Component` (a pure function of the parsed props; no hooks, no context),
   and `examples` (named prop sets).
2. Register it in `site/src/components/widgets/index.ts`.
3. Run `cd site && bun test -u tests/widgets.test.ts` to record its HTML
   snapshots under `site/tests/__snapshots__/`. A later look change shows up
   as a snapshot diff in review; accept it with the same command.
4. Open `/widgets` on the dev server to eyeball every example, then refresh
   the gallery images.

Refreshing the gallery images: `cd site && bun scripts/widget-gallery-screenshots.ts`
writes `_docs/widgets/*.png` (light and dark) and `_docs/widgets/README.md`.
It borrows Playwright from the frontend checkout (`PLAYWRIGHT_MODULE` overrides
the path) and starts `next dev` on a free port unless `BASE_URL` is set. Manual
step, not part of the tests.

Wrapping audit: `--widths=360,540,900 --out=/tmp/widget-shots` pins the
gallery's content column to each width and writes one `<width>px/` folder per
width, so a layout change can be checked at phone, narrow-tablet and desktop
widths without committing the extra images. Widgets adapt with container
queries (`@container` on the frame), not viewport breakpoints, because the
content column, not the window, is what varies.

### Frontend screenshots (`using-the-frontend/`)

The Docs tab section `using-the-frontend/` embeds real screenshots of bitbadges.io. They are captured, not drawn, so they are regenerated rather than edited. Full runbook: `site/scripts/frontend-screenshots/README.md`.

- Manifest: `site/scripts/frontend-screenshots/manifest.ts`. One entry per screenshot: route, the doc page that embeds it, optional `base` (`prod`, the default, or `local` for a screen production does not have yet), `setup: 'signed-in'`, `waitFor`, `fill`, `click`, `mask`, and `themedPaint: false`. The sample ids are named constants with a comment on why each was chosen: collection 47 ("NFTs", a BitBadges showcase collection with artwork, 100 tokens, and a Mint approval), its manager `bb18el5ug...` for the account pages, and collection 32 ("Peer Member") for the claim link. Override per run with `DOCS_SHOT_*` env vars.
- Output: `.gitbook/assets/frontend/<file>.png` (light) and `<file>--dark.png` (dark), both committed. Markdown references the light file only; the site pairs the twin by name. PNGs over 400 KB are downscaled with `sips` at capture time.
- Capture: `cd site && bun run screenshots` (one entry, both themes: `bun run screenshots -- home.png`). Production entries need network; `local` entries need the frontend on `http://localhost:3000` with an indexer it can sign in against. Playwright and the mock wallet come from a `bitbadges-frontend` checkout (`BITBADGES_FRONTEND_DIR`, default: a sibling directory); the docs repo has no browser dependency. Sign-in uses the frontend harness in `src/__tests__/playwright/agent/` with its default unfunded mnemonic, on production too, so signed-in screens show an empty portal.
- Themes: one browser context per (base, session, theme). The theme is forced through `localStorage.darkMode` and `colorScheme` before the app boots, then verified on every page: the `dark` class on `<html>` and the rendered pixels at three viewport points (skipped for `themedPaint: false` routes such as the landing page, which is dark in both themes).
- Determinism: 1440x900 at 1x, reduced motion plus CSS animations and transitions off, the browser clock pinned to a fixed time, the policies cookie and chaosnet acknowledgement pre-seeded, and per-entry masks over the feedback bubble, timestamps, and live prices. Re-capturing against the same data gives byte-identical PNGs, so a diff means the UI or the data changed.
- Check: `bun run screenshots:check` (offline, no browser) fails when either theme's PNG is missing, when a page references a `--dark` file directly, when a page embeds a `frontend/*.png` the manifest does not list, or when a PNG in the folder is not in the manifest. `site/tests/frontend-screenshots.test.ts` runs the same check under `bun test`, so CI catches stale references.

### Page actions and Markdown route

Every doc page carries a small Copy control at the top right of its title, the way GitBook does (`site/src/components/docs/PageActions.tsx`). Copy puts the page on the clipboard as Markdown. The chevron opens a menu: Copy page, View as Markdown, Copy prompt, Open in ChatGPT, Open in Claude, and Set up the BitBadges MCP (a link to `agents/setup.md`; there is no docs MCP, only the builder). The prompt is built by `site/src/lib/docs/page-actions.ts`: three lines that name the page, its Markdown URL, and `llms.txt`, and the ChatGPT and Claude links carry the same prompt in `?q=`. The menu is a plain `role="menu"` with arrow, Home, End, Escape, and outside-click handling; no dependency.

The Markdown comes from the page's twin at `<route>.md` (`/index.md` for the root page). `site/scripts/gen-page-markdown.ts` writes one file per page into `public/` during `bun run sync`, so the twins are build output (gitignored) and serve identically under `next start`, the standalone image, and a `basePath` mount. `site/src/lib/docs/page-markdown.ts` shapes each one: frontmatter dropped, the title as an H1 when the body has none, `::widget` directives removed (`stripWidgets` in `widgets.ts`; the JSON beside a widget stays), and every internal link and image rewritten to an absolute URL under `docsConfig.siteUrl` (`DOCS_SITE_URL`). Each page's head also carries `<link rel="alternate" type="text/markdown">` pointing at its twin and `type="text/plain"` pointing at `/llms.txt`; `/llms-full.txt` is the convention-named alias of `/for-llms.txt`, and `src/app/robots.ts` names the AI crawlers with an explicit allow. Tests: `site/tests/page-markdown.test.ts` and `site/tests/page-actions.test.ts`.

### Self-hosting gaps still open (in this repo)

| Gap | Where | Effect |
| --- | --- | --- |
| `/llms.txt` and `/for-llms.txt` return 404 on the built site | `site/scripts/sync-content.ts` copies neither into `public/` | `llms.txt` advertises `https://docs.bitbadges.io/for-llms.txt`, and `agents/reading-the-docs.md` points agents at both. Both are dead links until sync copies them. |
| `llms.txt` has no script and no workflow | `site/scripts/gen-llms.ts` is absent from `site/package.json` and from CI | It regenerates only when someone remembers, so it drifts from `SUMMARY.md`. |
| 30 of 199 repointed SDK links in the served spec are dead | `repointSdkLinks` in `site/src/lib/docs/openapi.ts` | Two use `/sdk/reference/types/…` where TypeDoc emits `type-aliases`; the other 28 name interfaces (applications, maps, points, refresh status, request-bin) the SDK no longer exports. The rewrite should leave a link unlinked when the target page does not exist, the way `gen-sdk-reference.ts` already does. |
| `for-llms.txt` in the tree is pre-rewrite | regenerated by `.github/workflows/for--llms.yml` on push to `master` | The committed copy still carries `for-developers/**` pages and 20 `stoplight.io` / `github.io` links. It self-heals on merge, but the workflow now also sweeps `sdk/reference/**` (1647 pages) and every `*.json` outside `node_modules` — including `site/openapi/*.json` — so the file is about to grow by an order of magnitude. |

## Upstream follow-ups found during the rewrite

These cannot be fixed in this repo because the content is generated from another repo's source.

| Item | Where | Fix |
| --- | --- | --- |
| 39 `bb1...` placeholders in the 23 skill pages | bitbadgesjs `packages/bitbadgesjs-sdk/src/builder/resources/skillInstructions.ts` | Replace with the fixture addresses in `_docs/fixtures.md`. The docs generator (`site/scripts/gen-skills.ts`) copies the text verbatim by design. |
| Em-dashes, escaped backticks, six over-long descriptions | same file | The generator patches dashes and fences on output; fixing the source removes the need. |
| `bb` forwards only a fixed list of SDK verbs | bitbadgeschain `cmd/bitbadgeschaind/cmd/sdk_forwarders.go` | PR #120 (open) adds `amount`, `url`, `assets`, `balances`, `custom-2fa`, `tx status`, `tx wait`. |
| GitHub Pages TypeDoc and Stoplight retirement | bitbadgesjs `.github/workflows/{docs,genapi}.yml` | See `_docs/runbooks/retire-hosted-docs.md` (`RB-RETIRE-HOSTED`). Two separate PRs. The spec's TypeDoc links are repointed at sync time by `repointSdkLinks`, so the docs no longer depend on Pages; the `gh-pages` branch is kept as a redirect shim, not deleted. Diffs in `scratchpad/upstream-ci/`. |
| GitBook space still publishes `docs.bitbadges.io` from `master` | GitBook UI (no `.gitbook.yaml` in-repo) | Disconnect the GitBook↔GitHub sync **before** the rewrite merges, or GitBook republishes the live site from rewritten content it cannot render. `RB-RETIRE-HOSTED#4.2`. |
| 8 legacy `docs.bitbadges.io/for-developers/...` links inside the API spec have no redirect row | bitbadgesjs spec descriptions → `site/openapi/openapi.json` | They will 404 after cutover. Either add rows to `_docs/redirects/*.tsv` or fix the descriptions upstream. Full list in `RB-RETIRE-HOSTED` handoff notes. |
| Chain OpenAPI 3.1 document | bitbadgeschain | Add `scripts/gen-openapi.ts` and the workflow from `scratchpad/upstream-ci/`, writing to `docs/openapi/openapi.json`, never `docs/static/` (that directory is embedded in the release binary). |
| `getAliasDerivationKeysForCollection` does not reproduce the chain's mint escrow address | bitbadgesjs SDK | Verified against collections 1 and 49; docs use the live address meanwhile. |
| `GammJSONHelpers` emits camelCase keys, the Go decoder expects snake_case | bitbadgeschain | Docs follow the Go side. |
| Chain swagger omits the Cosmos SDK and IBC query routes | bitbadgeschain `proto/buf.gen.swagger.yaml` | `/cosmos/bank/v1beta1/params` answers 200 on the live LCD but is absent from the generated document, so `/chain-api-reference` documents 62 of the served routes rather than all of them. Widen the buf inputs to include the upstream protos. |
| GitBook publishes docs.bitbadges.io from `master` | GitBook app installation | It must be disconnected BEFORE this branch merges, not after: it is a publisher of this repo, so merging would republish the live site from the rewritten tree. See `_docs/runbooks/retire-hosted-docs.md`. |
| GitHub Pages TypeDoc URLs cannot be redirected by this repo | bitbadgesjs `gh-pages` | Only 1103 of 2460 old page slugs resolve in the new tree, and the redirect table here runs on a different origin. Keep the branch with the manifest shim rather than deleting it. |
