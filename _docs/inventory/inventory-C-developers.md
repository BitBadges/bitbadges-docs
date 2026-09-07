# Inventory C — `for-developers/` (excluding `for-developers/concepts/`)

Worktree: `/Users/trevormiller/CompSci/gauntlet/.worktrees/bitbadges-docs/feat-docs-rewrite`
All paths below are relative to that root. 136 files inventoried. Live-source cross-checks against
`/Users/trevormiller/CompSci/bitbadges/bitbadgesjs/packages/bitbadgesjs-sdk/src/{cli,builder}/` and
`/Users/trevormiller/CompSci/bitbadges/bitbadges-indexer/src/`.

---

## 1. File-by-file inventory

### 1.1 Root

| path | words | in SUMMARY? | what it covers | # code blocks | stale/duplicate flags | recommendation |
|---|---|---|---|---|---|---|
| for-developers/getting-started.md | 575 | yes | Install one-liner, API key, first query, link table to every surface | 7 | **Broken fence**: a ```bash block contains TypeScript (`import { BitBadgesAPI ... }`); links out to TypeDoc + raw GitHub openapi.json instead of `/api-reference` | keep (rewrite as the single dev landing page; fix fence + external links) |

### 1.2 `cli/` — 14 files, ~19.3k words. The largest single cluster in the slice.

| path | words | in SUMMARY? | what it covers | # code blocks | stale/duplicate flags | recommendation |
|---|---|---|---|---|---|---|
| cli/README.md | 1488 | yes | `bb` flat-verb surface, 7 help groups, install, deprecation runway | 5 | 42 em-dashes; duplicates cli/installation.md install section verbatim; help-group list omits ~11 real verbs | keep (canonical CLI hub; trim install dupe) |
| cli/installation.md | 597 | yes | One-liner install, npm/bun, testnet flag, env vars, verify | 11 | install block duplicated in cli/README.md, getting-started.md, ai-agents/README.md | keep |
| cli/build-commands.md | 3354 | yes | `bb build` — claims 17 builders; generates tx JSON | 20 | source has **21** `build` subcommands (see §2.1); largest page in slice, should be split | keep (split reference vs walkthrough) |
| cli/analysis-commands.md | 1195 | yes | `check`, `explain`, `simulate`, `preview` | 5 | overlaps ai-agents/builder-tools.md (`analyze_collection`, `explain_collection`, `simulate_transaction`) | keep |
| cli/deploy-commands.md | 2350 | yes | `bb deploy`, signing paths, `--burner` faucet flow | 6 | 32 em-dashes; burner flow also in cli/sign-bridge.md and ai-agents/testnet-faucet.md (which says testnet is OFFLINE) | keep (reconcile testnet-offline note) |
| cli/sign-bridge.md | 2469 | yes | Browser wallet handoff for CLI signing (Keplr/MetaMask/Phantom/WC) | 14 | 28 em-dashes; overlaps deploy-commands.md signing paths and bitbadges-blockchain/create-and-broadcast-txs/* | merge-into: cli/deploy-commands.md (or keep as one "Signing from the CLI" page) |
| cli/auth-commands.md | 1847 | yes | `bb auth` SIWBB challenge→verify, sessions | 14 | duplicates sign-in-with-bitbadges/verification/verification-flow.md conceptually via a different surface | keep |
| cli/api-commands.md | 715 | yes | `bb api` = 104+ generated indexer routes | 6 | "104+" is a hardcoded count that will rot; overlaps bitbadges-api/api.md | keep (drop the count) |
| cli/chain-commands.md | 816 | yes | `bitbadgeschaind` keys/tx/query/sign-arbitrary | 11 | **third** chain-CLI location alongside bitbadges-blockchain/create-and-broadcast-txs/chain-cli.md | keep (canonical) |
| cli/standards-commands.md | 1300 | yes | 12 standards read/emit verbs (auctions, bounties, …) | 6 | source exposes **13** standard groups + `custom-2fa`; `smart-tokens` verbs undocumented | keep (fix counts) |
| cli/tool-commands.md | 612 | yes | `bb dev tools` MCP registry, session, resources | 5 | duplicates ai-agents/builder-tools.md tool registry | merge-into: ai-agents/builder-tools.md |
| cli/tx-commands.md | 741 | yes | `bb tx status` / `bb tx wait` | 6 | tiny; overlaps chain-commands.md and deploy-commands.md | merge-into: cli/deploy-commands.md |
| cli/utility-commands.md | 826 | yes | `bb dev docs/skills/resources`, `bb account alias/lookup/…`, `doctor` | 7 | grab-bag; mixes two unrelated command groups | keep (split `account` out to its own page) |
| cli/for-ai-agents.md | 1032 | yes | Agent-oriented CLI workflows, `--help-json`, non-interactive flags | 8 | heavy overlap with ai-agents/README.md and ai-agents/programmatic-agent.md | merge-into: ai-agents/README.md |

### 1.3 `ai-agents/` — 11 files, ~12.5k words

| path | words | in SUMMARY? | what it covers | # code blocks | stale/duplicate flags | recommendation |
|---|---|---|---|---|---|---|
| ai-agents/README.md | 1065 | yes | Section index + 5-min TS quickstart | 5 | **Broken fence**: ```bash wrapping TypeScript imports; install block duplicated 4× across slice | keep |
| ai-agents/builder-tools.md | 1770 | yes | MCP builder tool reference, "50+ tools" | 7 | **2 documented tools do not exist**; **5 real tools undocumented** (see §2.2) | keep (regenerate from source) |
| ai-agents/programmatic-agent.md | 2901 | yes | `BitBadgesBuilderAgent` — BYO Anthropic/OpenAI key | 24 | **59 em-dashes — worst in the slice**; longest agent page | keep (heavy copy edit) |
| ai-agents/claude-code-plugin.md | 910 | yes | BitBadges Claude Code plugin install/usage | 5 | overlaps builder-tools.md + cli/for-ai-agents.md | keep |
| ai-agents/claims-for-agents.md | 863 | yes | Using claims from an agent | 6 | duplicates claims/api-reference.md through the agent surface | merge-into: claims/api-reference.md (as a section) |
| ai-agents/bot-examples.md | 852 | yes | Copy-paste bot patterns, testnet-default | 7 | testnet is offline per testnet-mode.md → examples unrunnable as written | keep (retarget to mainnet) |
| ai-agents/openclaw-vault-tutorial.md | 1549 | yes | E2E: agent + USDC-backed smart-token vault | 10 | named after a third-party framework (OpenClaw); ages fast | keep (rename to generic "Agent Vault Tutorial") |
| ai-agents/smart-token-type-detection.md | 1088 | yes | Auto-picking 1 of 15 token-type skills from a prompt | 4 | says "15 marketplace token types"; standards docs say 12 — **count conflict** | keep (reconcile counts) |
| ai-agents/agent-spending-authorization.md | 609 | yes | Protocol-level agent spend limits | 0 | **zero code blocks** on an inherently code-shaped topic; marketing-toned lede | keep (add code) |
| ai-agents/websocket-events.md | 454 | yes | CometBFT WebSocket subscription | 10 | belongs to chain surface, not agents | merge-into: bitbadges-blockchain/ |
| ai-agents/testnet-faucet.md | 423 | yes | Testnet faucet API | 5 | **explicitly dead**: "Testnet is temporarily offline as of 2026-04-25" | drop (or collapse into testnet-mode.md) |

### 1.4 `bitbadges-api/` — 9 files (1 orphan)

| path | words | in SUMMARY? | what it covers | # code blocks | stale/duplicate flags | recommendation |
|---|---|---|---|---|---|---|
| bitbadges-api/README.md | 5 | yes | Title-only stub "📚 Indexer / API" | 0 | empty shell | drop (fold into section front-matter) |
| bitbadges-api/api.md | 555 | yes | API keys, base URL, number types, SDK client | 3 | links to raw-GitHub `openapi.json` + TypeDoc `BitBadgesAPI.html`, **not** `/api-reference` | keep (repoint to /api-reference) |
| bitbadges-api/credits.md | 557 | yes | APITOKEN credits, pricing, 1 USDC = 100k credits | 3 | pricing hardcoded in prose | keep |
| bitbadges-api/estimating-swaps.md | 682 | yes | Swap estimation endpoint, skipGoMsgs | 5 | single-endpoint page; belongs in API reference | merge-into: /api-reference (keep a concept stub) |
| bitbadges-api/concepts/README.md | 2 | yes | Title-only stub | 0 | empty shell | drop |
| bitbadges-api/concepts/managing-views.md | 638 | yes | Bookmark pagination, view keys | 7 | 2 TypeDoc links (CollectionViewKey/AccountViewKey) | keep |
| bitbadges-api/concepts/refresh-queue.md | 181 | yes | Refresh / claim-completion queue | 1 | very short | merge-into: bitbadges-api/api.md |
| bitbadges-api/concepts/limits-restrictions.md | 170 | yes | Rate/size limits | 0 | very short; overlaps credits.md | merge-into: bitbadges-api/credits.md |
| bitbadges-api/indexer.md | 195 | **NO (orphan)** | Self-hosting the indexer; CouchDB + Docker | 0 | **stale**: says "Install and setup CouchDB" but the indexer is MongoDB-backed (poller updates MongoDB two paragraphs earlier — self-contradictory); uses GitBook `@github-files` embed | keep but rewrite + add to SUMMARY (or drop — self-hosting is niche) |

### 1.5 `bitbadges-blockchain/` — 16 files

| path | words | in SUMMARY? | what it covers | # code blocks | stale/duplicate flags | recommendation |
|---|---|---|---|---|---|---|
| bitbadges-blockchain/README.md | 4 | yes | Title-only stub | 0 | empty shell | drop |
| bitbadges-blockchain/overview.md | 238 | yes | L1 dPoS Cosmos SDK chain overview | 0 | no code | merge-into: bitbadges-blockchain/README.md |
| bitbadges-blockchain/run-a-mainnet-node.md | 1283 | yes | Validator / full-node bring-up | 12 | ops content mixed into dev docs | keep |
| bitbadges-blockchain/evm-rpc-endpoints.md | 1482 | yes | Ethereum JSON-RPC compatibility | 9 | — | keep |
| bitbadges-blockchain/cross-chain-queries.md | 651 | yes | Interchain Queries (ICQ) for ownership | 2 | — | keep |
| bitbadges-blockchain/supported-denoms.md | 836 | yes | Denom allowlist | 1 | hardcoded list will rot; 15 em-dashes | keep (generate from source) |
| bitbadges-blockchain/testnet-mode.md | 371 | yes | Testnet config | 1 | **"Testnet is temporarily offline as of 2026-04-25"** | keep as a short status note; drop the rest |
| create-and-broadcast-txs/README.md | 446 | yes | Index of tx creation paths | 2 | — | keep |
| create-and-broadcast-txs/signing-client.md | 1577 | yes | `BitBadgesSigningClient` — the recommended path | 20 | — | keep (promote; this is the modern path) |
| create-and-broadcast-txs/signing-ethereum.md | 1359 | yes | Manual EVM signing | 7 | self-labeled legacy ("Looking for a simpler approach?") | merge-into: signing-client.md as an appendix |
| create-and-broadcast-txs/signing-cosmos.md | 171 | yes | Manual Cosmos signing | 1 | same legacy banner; 171 words | merge-into: signing-client.md |
| create-and-broadcast-txs/transaction-context.md | 590 | yes | Account number / sequence / fees | 4 | — | keep |
| create-and-broadcast-txs/generate-msg-contents.md | 238 | yes | Building Msgs from proto types | 3 | — | merge-into: signing-client.md |
| create-and-broadcast-txs/broadcast-to-a-node.md | 456 | yes | Simulate-then-broadcast | 5 | overlaps cli/tx-commands.md | keep |
| create-and-broadcast-txs/sign-+-broadcast-bitbadges.io.md | 66 | yes | "use bitbadges.io/dev/broadcast" | 0 | 66 words; one link | drop (make it a callout) |
| create-and-broadcast-txs/chain-cli.md | 1225 | yes | Chain binary reference | 23 | **explicit tombstone**: "This page has moved… canonical is cli/chain-commands.md" — yet still carries 1225 words / 23 blocks of live content | drop (after diffing content into cli/chain-commands.md) |

### 1.6 `bitbadges-sdk/` — 17 files

| path | words | in SUMMARY? | what it covers | # code blocks | stale/duplicate flags | recommendation |
|---|---|---|---|---|---|---|
| bitbadges-sdk/README.md | 4 | yes | Title-only stub | 0 | empty shell | drop |
| bitbadges-sdk/overview.md | 143 | yes | Install, GitHub, address conversion teaser | 2 | links to TypeDoc site as "Full Documentation" | keep (becomes SDK landing) |
| bitbadges-sdk/react-quickstart.md | 1006 | yes | React/Next: install→connect→query→sign | 6 | — | keep (best-shaped page in the SDK cluster) |
| bitbadges-sdk/sdk-types.md | 409 | yes | Type export patterns | 7 | — | keep |
| bitbadges-sdk/cli.md | 174 | yes | **Redirect stub** to cli/ | 0 | pure tombstone: "This page has moved" + 10 links | drop |
| common-snippets/README.md | 31 | yes | Section stub; admits "auto-generated with AI" | 0 | self-declared AI-generated content | drop |
| common-snippets/balance-lookups.md | 475 | yes | 3D balance array lookups | 10 | — | keep |
| common-snippets/uint-ranges.md | 493 | yes | UintRange helpers | 5 | opens with a bare TypeDoc link line | keep |
| common-snippets/balances.md | 587 | yes | Balance helpers | 6 | bare TypeDoc link line; overlaps balance-lookups.md | merge-into: common-snippets/balance-lookups.md |
| common-snippets/numbertype-conversions.md | 352 | yes | bigint/NumberType conversion | 4 | overlaps bitbadges-api/api.md "Number Types" | keep |
| common-snippets/badge-metadata.md | 306 | yes | `TokenMetadataDetails` | 4 | filename says "badge", content says "Token" — **rename drift** | keep (rename to token-metadata.md) |
| common-snippets/interpret-collection.md | 181 | yes | `interpretCollection` | 1 | duplicates MCP `explain_collection` and `bb explain` | keep |
| common-snippets/interpret-transaction.md | 206 | yes | `interpretTransaction` | 1 | leads with a code line, no prose intro | merge-into: interpret-collection.md ("Interpreters") |
| common-snippets/simulation-balance-diffs.md | 212 | yes | Parse sim events into balance diffs | 2 | — | merge-into: interpret-collection.md |
| common-snippets/address-conversions.md | 132 | yes | 0x ↔ bb address | 2 | duplicated in overview.md and cli `bb account convert` and MCP `convert_address` | keep |
| common-snippets/address-lists.md | 78 | yes | AddressList base type | 1 | 78 words | merge-into: for-developers/concepts/address-mappings-lists.md (other slice) |
| common-snippets/transfers-w-increments.md | 160 | yes | `TransferWithIncrements` | 1 | — | keep |
| common-snippets/get-unhandled-approvals.md | 117 | yes | Unhandled approvals helper | 5 | bare TypeDoc link line | keep |

### 1.7 `sign-in-with-bitbadges/` — 18 files

| path | words | in SUMMARY? | what it covers | # code blocks | stale/duplicate flags | recommendation |
|---|---|---|---|---|---|---|
| sign-in-with-bitbadges/README.md | 6 | yes | Title-only stub | 0 | empty shell | drop |
| sign-in-with-bitbadges/overview.md | 227 | yes | What SIWBB is | 1 | — | keep (merge README into it) |
| sign-in-with-bitbadges/setting-up-an-app.md | 134 | yes | Register an OAuth app | 0 | **typo in URL: `https://btibadges.io/developer`** (broken link) | keep (fix typo) |
| authorization-url/README.md | 3 | yes | Title-only stub | 0 | empty shell | drop |
| authorization-url/configuration.md | 339 | yes | OAuth URL params | 1 | — | keep |
| authorization-url/generating-the-url.md | 154 | yes | Building the authorize URL | 2 | overlaps configuration.md | merge-into: authorization-url/configuration.md |
| approaches/redirected-callback.md | 311 | yes | Redirect callback flow | 1 | directory `approaches/` holds exactly one file | merge-into: verification/verification-flow.md |
| verification/README.md | 2 | yes | Title-only stub | 0 | empty shell | drop |
| verification/verification-flow.md | 816 | yes | Exchange code → verify | 5 | **only remaining Stoplight link in non-legacy docs** (line 18) | keep (repoint to /api-reference) |
| verification/access-tokens.md | 285 | yes | Bearer tokens for authed endpoints | 4 | — | keep |
| verification/security-considerations.md | 101 | yes | Defers to OAuth 2.0 spec | 0 | 101 words, no substance of its own | merge-into: verification/verification-flow.md |
| templates-and-frameworks/README.md | 4 | yes | Title-only stub | 0 | empty shell | drop |
| templates-and-frameworks/auth0.md | 373 | yes | Auth0 social connection | 2 | — | keep |
| templates-and-frameworks/wordpress.md | 494 | yes | WP gating plugin | 0 | **zero code blocks** | keep |
| templates-and-frameworks/supabase.md | 179 | yes | Supabase example repo | 0 | link-only, "not production ready" | merge-into: templates-and-frameworks/others.md |
| templates-and-frameworks/discourse.md | 60 | yes | "reuse OAuth2 via other providers" | 0 | 60 words, no instructions | merge-into: templates-and-frameworks/others.md |
| templates-and-frameworks/others.md | 78 | yes | "use Auth0" catch-all | 0 | 78 words | keep (absorb supabase + discourse + expressjs) |
| templates-and-frameworks/expressjs.md | 6 | yes | **Title only, no body** | 0 | **empty page shipped in nav** | drop |

### 1.8 `claims/` — 11 files, ~11.4k words (the current, canonical claims tree)

| path | words | in SUMMARY? | what it covers | # code blocks | stale/duplicate flags | recommendation |
|---|---|---|---|---|---|---|
| claims/README.md | 183 | yes | Section index table | 0 | duplicates overview.md lede | merge-into: claims/overview.md |
| claims/overview.md | 1002 | yes | How claims work, indexed vs non-indexed | 1 | **SEO-stuffed H1**: "Claims: No-Code Token Distribution, Airdrops, and Eligibility Gating"; only 1 code block for 1000 words | keep |
| claims/concepts.md | 1162 | yes | Claim numbers, success logic, sign-in, codes | 5 | consolidates 6 legacy claim-builder/concepts/ pages | keep |
| claims/built-in-plugins.md | 927 | yes | Core + pre-built plugin schemas | 16 | **misses 6 live plugin ids** (see §2.3) | keep (regenerate) |
| claims/custom-plugins.md | 3082 | yes | HTTP plugin authoring end-to-end | 14 | largest claims page; 33 em-dashes; supersedes 9 legacy pages | keep (split reference/tutorial) |
| claims/dynamic-stores.md | 950 | yes | Serverless address lists | 8 | supersedes claim-builder/dynamic-stores/* | keep |
| claims/gating-approvals.md | 1127 | yes | Hybrid off-chain→on-chain Merkle gating | 5 | supersedes claim-builder/concepts/gating-badge-distribution.md | keep |
| claims/api-reference.md | 642 | yes | complete/fetch/simulate/verify | 15 | opens with a bare code line, no prose intro | keep |
| claims/security.md | 503 | yes | Trust model, oracle risk, versioning | 1 | — | keep |
| claims/examples.md | 845 | yes | E2E claim configs | 11 | — | keep |
| claims/designing-claims.md | 974 | yes | Criteria/reward design patterns | 4 | overlaps overview.md + examples.md | merge-into: claims/examples.md |

### 1.9 `claim-builder/` — 30 files, ~7.0k words. **ORPHAN LEGACY TREE — zero entries in SUMMARY.md.**

| path | words | in SUMMARY? | what it covers | # code blocks | stale/duplicate flags | recommendation |
|---|---|---|---|---|---|---|
| claim-builder/overview.md | 382 | no | Claims intro; "just self-implement instead" hedge | 0 | superseded by claims/overview.md | drop |
| claim-builder/completion-methods.md | 314 | no | Ways to complete a claim | 1 | superseded by claims/api-reference.md | drop |
| claim-builder/success-logic.md | 234 | no | `satisfyMethod` AND/OR/NOT | 1 | **typo in body: "satsifyMethod"**; superseded by claims/concepts.md#success-logic | drop |
| claim-builder/checking-custom-criteria.md | 209 | no | Options when built-ins fall short | 0 | superseded by claims/designing-claims.md | drop |
| claim-builder/implementing-custom-utility.md | 207 | no | Acting on successful claims | 0 | superseded by claims/designing-claims.md | drop |
| claim-builder/leveraging-ai.md | 147 | no | Use LLMs to build claims | 0 | superseded by ai-agents/ | drop |
| claim-builder/concepts/README.md | 2 | no | Stub | 0 | empty | drop |
| claim-builder/concepts/claim-numbers.md | 82 | no | Incrementing claim numbers | 0 | in claims/concepts.md | drop |
| claim-builder/concepts/gating-badge-distribution.md | 117 | no | Gate mints via claims | 0 | in claims/gating-approvals.md | drop |
| claim-builder/concepts/signed-in-vs-select-address.md | 156 | no | initiatedBy vs manual address | 0 | in claims/concepts.md | drop |
| claim-builder/concepts/standard-vs-on-demand.md | 215 | no | Standard vs on-demand claims | 0 | in claims/overview.md | drop |
| claim-builder/concepts/universal-approach-claim-codes.md | 261 | no | Claim codes as a universal integration | 1 | **contains a Stoplight deep link** (`abee9e7fa5f8d-get-code-codes-plugin`) | drop |
| claim-builder/dynamic-stores/README.md | 3 | no | Stub | 0 | empty | drop |
| claim-builder/dynamic-stores/overview.md | 478 | no | What dynamic stores are | 1 | in claims/dynamic-stores.md | drop |
| claim-builder/dynamic-stores/adding-data.md | 297 | no | UI + API ways to populate a store | 1 | **partially uncovered**: the "Method 1: UI" walkthrough has no equivalent in claims/dynamic-stores.md | **re-home**: merge-into claims/dynamic-stores.md |
| claim-builder/plugins/README.md | 2 | no | Stub | 0 | empty | drop |
| claim-builder/plugins/overview.md | 856 | no | HTTP plugin model | 1 | in claims/custom-plugins.md | drop |
| claim-builder/plugins/creating-a-custom-plugin/README.md | 5 | no | Stub | 0 | empty | drop |
| .../implementing-your-plugin/README.md | 5 | no | Stub | 0 | empty | drop |
| .../implementing-your-plugin/api-handler.md | 1005 | no | Full request/response contract for plugin endpoints | 1 | **largest legacy page**; claims/custom-plugins.md covers the shape but this has more field-level detail | **re-home**: diff into claims/custom-plugins.md before dropping |
| .../implementing-your-plugin/design-considerations.md | 650 | no | Idempotency, partial failure, "your plugin may succeed but the claim may not" | 0 | **NOT fully covered** by claims/custom-plugins.md or claims/security.md | **re-home**: merge-into claims/custom-plugins.md |
| .../implementing-your-plugin/hook-types-and-simulations.md | 198 | no | Processing hooks + simulation semantics | 1 | thinly covered in claims/custom-plugins.md | **re-home**: merge-into claims/custom-plugins.md |
| .../implementing-your-plugin/parameters.md | 78 | no | Creator vs user param schema | 1 | in claims/custom-plugins.md | drop |
| .../implementing-your-plugin/user-inputs.md | 296 | no | Custom user inputs, in-site vs window popup | 0 | **window-popup input flow not in claims/** | **re-home**: merge-into claims/custom-plugins.md |
| .../implementing-your-plugin/getting-started.md | 71 | no | Go to developer portal → Plugins tab | 0 | trivial | drop |
| .../creating-a-custom-plugin/managing-your-plugin.md | 122 | no | Plugin versioning in the dev portal | 0 | versioning is in claims/security.md, portal flow is not | **re-home**: merge-into claims/custom-plugins.md |
| .../creating-a-custom-plugin/testing-your-plugin.md | 148 | no | Two testing approaches | 1 | **no testing guidance anywhere in claims/** | **re-home**: merge-into claims/custom-plugins.md |
| claim-builder/bitbadges-api-claims/README.md | 5 | no | Stub | 0 | empty | drop |
| .../auto-complete-claims-w-bitbadges-api.md | 537 | no | Auto-completing claims server-side | 4 | in claims/api-reference.md | drop |
| .../fetching-claims.md | 71 | no | "see the API routes" | 1 | trivial | drop |
| .../verifying-claim-attempts-w-the-api.md | 308 | no | Two-fold verification of attempts | 1 | in claims/api-reference.md | drop |
| claim-builder/other-tutorials/README.md | 2 | no | Stub | 0 | empty | drop |
| claim-builder/other-tutorials/in-site-guides.md | 115 | no | Use the in-site Claim Tester | 0 | useful pointer, wrong home | **re-home**: one line in claims/README.md |

**Verdict on `claim-builder/`:** ~85% superseded by `claims/`. Seven pages carry content with no `claims/` equivalent and must be re-homed before deletion: `implementing-your-plugin/api-handler.md`, `design-considerations.md`, `hook-types-and-simulations.md`, `user-inputs.md`, `managing-your-plugin.md`, `testing-your-plugin.md`, `dynamic-stores/adding-data.md` (plus the in-site Claim Tester pointer). Everything else is a safe delete.

### 1.10 `create-and-broadcast-txs/` — orphan fragment

| path | words | in SUMMARY? | what it covers | # code blocks | stale/duplicate flags | recommendation |
|---|---|---|---|---|---|---|
| create-and-broadcast-txs/cosmos-sdk-msgs/msgcreateaddressmappings.md | 173 | no | `MsgCreateAddressLists` | 3 | **orphan of a deleted tree** — a lone file under a top-level dir whose siblings moved to `bitbadges-blockchain/create-and-broadcast-txs/`; filename says "addressmappings", H1 says "AddressLists"; relative link `../../../token-standard/...` escapes the repo root and is broken | drop (fold the Msg into the token-standard reference) |

---

## 2. Live-source cross-checks

### 2.1 CLI — docs vs `bitbadgesjs-sdk/src/cli/`

Binary names in `package.json`: `bitbadges`, `bitbadges-cli`, `bitbadges-builder`. Docs consistently use the
`bb` alias from `install.bitbadges.io`; the underlying npm bins are never named in `cli/` — only in
`cli/installation.md`. That gap will bite anyone installing via npm rather than the one-liner.

**Real top-level commands** (from `new Command('…')` across `src/cli/commands/`):
`account, all, amount, api, assets, auctions, auth, balances, bounties, build, burner, check, completion, credit-tokens, crowdfunds, custom-2fa, deploy, dev, docs, doctor, dynamic-stores, explain, feedback, gen-pub-key, gen-tx-payload, intents, nfts, pairs, pay-requests, pools, prediction-markets, preview, price, products, resources, session, settings, sign-with-browser, simulate, skills, smart-tokens, subscriptions, swap, test-cli, tool, tools, tx, url` (48).

**Undocumented commands** (exist in source, never shown in `cli/` or `bitbadges-sdk/cli.md`):
`amount` (8 subcommands: `to-display`, `to-raw`, `wrap-preview`, `unwrap-preview`, `slippage`, `min-amount`, `max-wrappable`), `balances` (`assets`, `bitbadges`, `ics20`), `assets` (`browse`, `list`, `price`, `show`), `pools`, `pairs`, `price`, `url` (`address`, `badge`, `collection`, `tx`, `tx-cosmos`), `gen-pub-key`, `sign-with-browser`, `feedback`, `all`, `test-cli`. That is **13 command groups, ~30 subcommands, entirely undocumented** — the swap/DEX and amount-math surfaces are the biggest holes.

**Documented-but-wrong:**
- `cli/README.md` lists a 7-group help taxonomy that omits `amount`, `balances`, `assets`, `url`, `feedback`, `gen-pub-key`, `sign-with-browser`.
- `cli/build-commands.md` says "17 builders"; source `build.ts` registers **21** (`address-list, auction, bid, bounty, credit-token, crowdfund, custom-2fa, intent, listing, payment-request, pm-buy-intent, pm-sell-intent, prediction-market, product-catalog, send, smart-token, subscription, transfer, vault`, plus aliases).
- `cli/standards-commands.md` says "12 standards"; source has 13 groups plus `custom-2fa`, and `smart-tokens` (`deposit/list/show/status/withdraw`) is undocumented.
- Docs write `bb crowdfund` (singular) in places; the real group is `crowdfunds`.
- Docs still show `bb cli <subcmd>`; source confirms this is a deprecated alias path (`makeDeprecatedAlias`, `emitDeprecation`) that prints a stderr banner and is slated for removal. Any surviving page should stop teaching it.
- `cli/api-commands.md` and `cli/README.md` and `getting-started.md` each hardcode "104+ API routes"; `api-routes.ts` is generated and has a drift spec (`api-routes-drift.spec.ts`), so the number is guaranteed to rot.

**Three CLI doc locations — how they differ and what survives:**
1. `for-developers/cli/` (14 files, 19.3k words) — the real, current, flat-verb `bb` documentation. **This survives.**
2. `for-developers/bitbadges-sdk/cli.md` (174 words) — a pure redirect tombstone ("This page has moved"). Its entire body is a link list into `cli/`. **Drop**; leave a GitBook redirect, not a page.
3. `for-developers/bitbadges-blockchain/create-and-broadcast-txs/chain-cli.md` (1225 words, 23 blocks) — also carries a "this page has moved" banner pointing at `cli/chain-commands.md`, but unlike #2 it still contains 1225 words of live chain-binary content that `cli/chain-commands.md` (816 words) does not fully absorb. **Diff into `cli/chain-commands.md`, then drop.** Shipping two tombstones that still rank and still contain unique content is the worst of both worlds.

### 2.2 MCP builder server — docs vs `bitbadgesjs-sdk/src/builder/`

Real tool names (53, extracted from `name: '…'` across `src/builder/tools/`):
`add_alias_path, add_approval, add_cosmos_wrapper_path, add_preset_approval, add_transfer, analyze_collection, build_claim, build_dynamic_store, build_transfer, convert_address, diagnose_error, explain_collection, fetch_docs, flag_review_item, generate_alias_path, generate_approval, generate_backing_address, generate_permissions, generate_placeholder_art, generate_unique_id, generate_wrapper_address, get_current_timestamp, get_skill_instructions, get_transaction, list_presets, lookup_token_info, query_balance, query_collection, query_dynamic_store, remove_alias_path, remove_approval, remove_cosmos_wrapper_path, remove_transfer, review_collection, search, search_knowledge_base, search_plugins, set_approval_metadata, set_collection_metadata, set_custom_data, set_default_balances, set_invariants, set_is_archived, set_manager, set_mint_escrow_coins, set_permissions, set_standards, set_token_metadata, set_valid_token_ids, simulate_transaction, validate_address, validate_transaction, verify_ownership`.

**Documented in `ai-agents/builder-tools.md` but NOT in source (2):**
- `build_address_list` — does not exist. Closest real tools: `build_dynamic_store`, or the CLI's `bb build address-list`. Someone conflated the CLI builder with the MCP tool set.
- `get_review_url` — does not exist. The real review tool is `flag_review_item` / `review_collection`.

**In source but NOT documented (5):**
- `add_preset_approval` and `list_presets` — an entire preset-approval workflow is missing from the docs.
- `flag_review_item` — the review-flagging half of the review flow.
- `generate_placeholder_art` — image generation for collections.
- `search` — the generic search tool (docs only cover `search_knowledge_base` and `search_plugins`).

The page's "50+ tools" claim happens to be right (53), but it is a hand-maintained list that has already drifted in both directions. This page should be generated from `src/builder/tools/registry.ts`, not written by hand.

### 2.3 Claims plugins — docs vs `bitbadges-indexer/src/`

Live plugin ids found in the indexer (`pluginId: '…'`):
`anonymous, codes, discord, github, github-contributions, google, halt, initiatedBy, min-badge, must-own-badges, numUses, password, transferTimes, twitch, twitter, whitelist` (16).
The SDK's `ClaimIntegrationPluginType` union (`src/api-indexer/docs-types/interfaces.ts:807`) only enumerates six then falls back to `| string`, so it is not a usable source of truth — the indexer is.

`claims/built-in-plugins.md` documents: `codes, password, numUses, transferTimes, initiatedBy, whitelist, halt, anonymous` (core) plus `must-own-badges, min-badge, url-clicker, custom-instructions, satisfies-claim, username-set` (pre-built).

- **Undocumented live plugins (6):** `discord`, `github`, `github-contributions`, `google`, `twitch`, `twitter`. Every social-OAuth gate — almost certainly the most-used category in practice — is missing from the plugin reference. The legacy `claim-builder/` tree does not cover them either.
- **Documented but not found in the indexer (4):** `url-clicker`, `custom-instructions`, `satisfies-claim`, `username-set`. These may be frontend-registered or dynamically created rather than seeded in indexer source, so treat as "verify" rather than "confirmed dead" — but they need a source-of-truth check before the rewrite.

### 2.4 API docs and external links

`for-developers/bitbadges-api/` **no longer links to Stoplight** — that migration is essentially done. Only two Stoplight references remain in the whole slice, both outside the API section:
- `sign-in-with-bitbadges/verification/verification-flow.md:18` → `https://bitbadges.stoplight.io/docs/bitbadges`
- `claim-builder/concepts/universal-approach-claim-codes.md:38` → a Stoplight deep link (dies with the orphan tree anyway)

But the API section doesn't link to the new `/api-reference` either. It links to **raw GitHub JSON and TypeDoc**, which is arguably worse for a reader than Stoplight was. Full external-link census:

| file:line | link | action |
|---|---|---|
| bitbadges-api/api.md:21 | raw.githubusercontent…/openapi-hosted/openapi.json | repoint → `/api-reference` |
| bitbadges-api/api.md:59 | bitbadges.github.io/…/BitBadgesAPI.html (in a comment) | repoint → `/api-reference` |
| bitbadges-api/concepts/managing-views.md:103 | TypeDoc `CollectionViewKey.html` | repoint |
| bitbadges-api/concepts/managing-views.md:112 | TypeDoc `AccountViewKey.html` | repoint |
| bitbadges-api/estimating-swaps.md:86 | docs.skip.build (3rd-party) | keep |
| getting-started.md:124 | raw GitHub openapi.json | repoint → `/api-reference` |
| getting-started.md:127 | TypeDoc + `typedoc-output.json` on GitHub | repoint |
| bitbadges-sdk/overview.md:7 | bitbadges.github.io/bitbadgesjs (as "Full Documentation") | repoint |
| bitbadges-sdk/common-snippets/{balances,uint-ranges,get-unhandled-approvals,address-conversions}.md:3 | bare "Documentation Link: [Here]" TypeDoc lines | delete the pattern entirely |
| sign-in-with-bitbadges/verification/verification-flow.md:18 | **Stoplight** | repoint → `/api-reference` |
| claim-builder/concepts/universal-approach-claim-codes.md:38 | **Stoplight deep link** | dies with the tree |
| sign-in-with-bitbadges/setting-up-an-app.md | `https://btibadges.io/developer` (**typo, 404**) | fix |
| bitbadges-api/indexer.md | GitBook `{% @github-files/…environment.d.ts %}` embed | replace with an inline table |
| create-and-broadcast-txs/cosmos-sdk-msgs/msgcreateaddressmappings.md | `../../../token-standard/…` (escapes repo root) | broken; dies with the file |

The four `Documentation Link: [Here](…) -> X` lines are a distinctive anti-pattern: the page opens with an unexplained external link before saying what the page is about.

---

## 3. Prose analysis

### 3.1 Developer surfaces and where the same task is documented twice

Seven distinct surfaces, and the docs are organized by surface rather than by task — which is exactly why the duplication is so heavy.

| Surface | Primary docs | Also documented in |
|---|---|---|
| CLI (`bb`) | `cli/` (14 files) | `bitbadges-sdk/cli.md` (tombstone), `bitbadges-blockchain/create-and-broadcast-txs/chain-cli.md` (tombstone with live content), `cli/for-ai-agents.md` |
| TypeScript SDK | `bitbadges-sdk/` (17 files) | `ai-agents/programmatic-agent.md`, `bitbadges-blockchain/create-and-broadcast-txs/signing-client.md` |
| REST API / indexer | `bitbadges-api/` (9 files) | `cli/api-commands.md` (same routes via CLI), `claims/api-reference.md` |
| Chain RPC / LCD / node | `bitbadges-blockchain/` (16 files) | `cli/chain-commands.md`, `ai-agents/websocket-events.md` |
| MCP / AI agents | `ai-agents/` (11 files) | `cli/tool-commands.md`, `cli/for-ai-agents.md`, `claim-builder/leveraging-ai.md` |
| OAuth sign-in (SIWBB) | `sign-in-with-bitbadges/` (18 files) | `cli/auth-commands.md` (same SIWBB flow, CLI-side) |
| Claims | `claims/` (11 files) | `claim-builder/` (30 orphan files), `ai-agents/claims-for-agents.md` |

**Tasks documented 3–4 times through different surfaces:**

- **Create a collection / build a transaction** — four ways: `cli/build-commands.md` (`bb build`), `ai-agents/builder-tools.md` (MCP `add_approval`/`set_permissions`/…), `bitbadges-blockchain/create-and-broadcast-txs/generate-msg-contents.md` (raw proto Msgs), and `ai-agents/programmatic-agent.md` (natural-language agent). Nothing tells a reader which one to pick.
- **Sign and broadcast** — five ways: `cli/deploy-commands.md`, `cli/sign-bridge.md`, `create-and-broadcast-txs/signing-client.md`, `signing-ethereum.md`, `signing-cosmos.md`. Three of these self-label as the legacy path.
- **Inspect/explain a collection** — three: `bb explain` (`cli/analysis-commands.md`), MCP `explain_collection` (`ai-agents/builder-tools.md`), SDK `interpretCollection` (`bitbadges-sdk/common-snippets/interpret-collection.md`). Same underlying function, three pages.
- **Convert an address** — three: `bb account convert`, MCP `convert_address`, SDK `convertToBitBadgesAddress` (documented twice within the SDK section alone: `overview.md` and `common-snippets/address-conversions.md`).
- **SIWBB auth** — twice: browser OAuth (`sign-in-with-bitbadges/verification/`) and CLI SIWBB (`cli/auth-commands.md`), with no cross-reference between them.
- **Complete a claim** — three: `claims/api-reference.md`, `ai-agents/claims-for-agents.md`, `claim-builder/bitbadges-api-claims/auto-complete-claims-w-bitbadges-api.md`.
- **Query balances** — four: `bb balances` (undocumented), `bb account balances`, MCP `query_balance`, SDK `common-snippets/balance-lookups.md` + `balances.md`.
- **Dynamic stores** — four: `bb dynamic-stores` (13 subcommands), MCP `build_dynamic_store`/`query_dynamic_store`, `claims/dynamic-stores.md`, `claim-builder/dynamic-stores/`.

The structural fix is a task-first spine ("create a collection", "distribute it", "gate it", "sign in users") with per-surface tabs underneath, rather than seven parallel surface trees each re-teaching the same eight tasks.

### 3.2 Page types

**Quickstarts (6):** `getting-started.md`, `cli/installation.md`, `bitbadges-sdk/react-quickstart.md`, `ai-agents/README.md` (5-minute quickstart section), `bitbadges-api/api.md` (API-key onboarding), `sign-in-with-bitbadges/setting-up-an-app.md`. These four different "start here" doors are the single biggest navigation problem — a new developer has no way to know which one is theirs.

**Reference (majority, ~70 pages):** all of `cli/*-commands.md`, `ai-agents/builder-tools.md`, `claims/built-in-plugins.md`, `claims/api-reference.md`, `bitbadges-sdk/common-snippets/*` (13 files), `bitbadges-sdk/sdk-types.md`, `bitbadges-blockchain/{supported-denoms,evm-rpc-endpoints}.md`, `bitbadges-api/concepts/*`, `sign-in-with-bitbadges/authorization-url/*` and `verification/*`. Three of these (CLI commands, builder tools, built-in plugins) are hand-maintained lists that have already drifted from source and should be generated.

**Tutorials / walkthroughs (10):** `ai-agents/openclaw-vault-tutorial.md`, `ai-agents/bot-examples.md`, `ai-agents/programmatic-agent.md`, `bitbadges-blockchain/run-a-mainnet-node.md`, `claims/examples.md`, `claims/designing-claims.md`, `claims/custom-plugins.md`, `sign-in-with-bitbadges/templates-and-frameworks/{auth0,wordpress,supabase}.md`, `claim-builder/plugins/creating-a-custom-plugin/*`.

**Conceptual (8):** `claims/{overview,concepts,security,gating-approvals}.md`, `bitbadges-blockchain/{overview,cross-chain-queries}.md`, `bitbadges-api/concepts/{managing-views,refresh-queue}.md`.

**Non-pages (17 that should not exist as files):** 12 title-only stubs (`bitbadges-api/README.md` 5w, `bitbadges-api/concepts/README.md` 2w, `bitbadges-blockchain/README.md` 4w, `bitbadges-sdk/README.md` 4w, `sign-in-with-bitbadges/README.md` 6w, `authorization-url/README.md` 3w, `verification/README.md` 2w, `templates-and-frameworks/README.md` 4w, `claim-builder/{concepts,plugins,dynamic-stores,other-tutorials}/README.md` 2–3w each), plus `templates-and-frameworks/expressjs.md` (**6 words — an H1 and nothing else, live in the nav**), `sign-+-broadcast-bitbadges.io.md` (66w), `discourse.md` (60w), `fetching-claims.md` (71w), `getting-started.md` under claim-builder plugins (71w), and the two redirect tombstones.

### 3.3 Writing-quality issues

**Em-dashes.** 448+ across the slice. Worst offenders: `ai-agents/programmatic-agent.md` (59), `cli/README.md` (42), `claims/custom-plugins.md` (33), `cli/deploy-commands.md` (32), `cli/sign-bridge.md` (28). The density is high enough that it reads as a single AI drafting pass across the newer sections (`cli/`, `ai-agents/`, `claims/`) — the older hand-written pages (`claim-builder/`, `sign-in-with-bitbadges/`) barely use them. It is a reliable fingerprint for which pages were AI-generated.

**The "X — Y" appositive tic.** Beyond raw counts, the specific pattern is a noun phrase followed by an em-dash gloss: "the chain binary, the SDK CLI, and 104+ API routes — all from your terminal", "a convenience layer on top of the BitBadges chain binary + CLI", "the MCP builder tool registry — the same surface Claude Desktop and other MCP clients reach over stdio — is also reachable". Nearly every `cli/` page lede uses it.

**Hype and marketing register in developer reference.** 15 hits on hype vocabulary. Concrete examples: `cli/README.md` "the fastest way to interact with the BitBadges blockchain", `getting-started.md` "The fastest way to start building", `cli/for-ai-agents.md` "the recommended interface for AI agents", `ai-agents/agent-spending-authorization.md` opens with "Agentic payments are only as trustworthy as the rules that govern them" — a thought-leadership sentence on a page with **zero code blocks**. `claims/overview.md` carries an SEO-stuffed H1: "Claims: No-Code Token Distribution, Airdrops, and Eligibility Gating".

**Rhetorical-question and second-person padding.** `ai-agents/README.md`: "Whether you're building an autonomous minting agent, a gating bot, or an AI-powered claim system, you'll find everything you need here." `claim-builder/overview.md`: "### **Get Creative**" as a section heading. `claim-builder/checking-custom-criteria.md` and `implementing-custom-utility.md` both open with questions to the reader.

**Self-undermining hedges.** `claim-builder/overview.md` tells developers "it is oftentimes a better approach to just self-implement the functionality you need rather than deal with the complexities of connecting with claims" — the section's own entry page arguing against its subject. `bitbadges-sdk/common-snippets/README.md` admits "Some of these were auto-generated with AI, so please let us know if there are any errors" — shipping an accuracy disclaimer instead of checking the content. `templates-and-frameworks/supabase.md` says the example "is not production ready".

**Repetition.** The `curl -fsSL https://install.bitbadges.io | sh` block appears verbatim in at least four files (`getting-started.md`, `cli/README.md`, `cli/installation.md`, `ai-agents/README.md`). "104+ API routes" appears in three. The "Meet criteria → Receive rewards" formula appears in four claims pages. Three separate pages open with the identical banner "> **Looking for a simpler approach?** Check out BitBadgesSigningClient".

**Broken or malformed content.**
- Two ```bash fences containing TypeScript (`getting-started.md`, `ai-agents/README.md`) — the lede code sample on both of the two most-read pages is mislabeled.
- Typo `satsifyMethod` in `claim-builder/success-logic.md`.
- Typo `btibadges.io` in `sign-in-with-bitbadges/setting-up-an-app.md` (broken link).
- `templates-and-frameworks/expressjs.md` is an empty page in the published nav.
- `bitbadges-api/indexer.md` contradicts itself: MongoDB in paragraph 2, "Install and setup CouchDB" in step 1.
- Filename/title drift: `badge-metadata.md` → "Token Metadata"; `msgcreateaddressmappings.md` → "MsgCreateAddressLists". The badge→token rename landed in titles but not filenames.
- Several pages open with a bare code line or bare link before any prose (`claims/api-reference.md`, `bitbadges-sdk/common-snippets/interpret-transaction.md`, and the four "Documentation Link: [Here]" pages).

**Counts that will rot.** "104+ API routes" (×3), "17 builders" (already wrong — 21), "12 standards" (already wrong — 13), "50+ tools" (53, and the list has drifted both directions), "15 marketplace token types" (conflicts with the 12 in standards docs). Every one of these should be generated or removed.

---

## 4. Headline recommendations

1. **Delete `claim-builder/` (30 files, orphaned)** after re-homing seven pages into `claims/custom-plugins.md` and `claims/dynamic-stores.md` — chiefly `api-handler.md` (1005w), `design-considerations.md` (650w), `testing-your-plugin.md`, `user-inputs.md`, `hook-types-and-simulations.md`, `managing-your-plugin.md`, `dynamic-stores/adding-data.md`.
2. **Collapse three CLI locations to one.** `cli/` survives. `bitbadges-sdk/cli.md` is a pure tombstone — delete. `chain-cli.md` still holds 1225 unique words — diff into `cli/chain-commands.md`, then delete.
3. **Generate three reference pages from source**: CLI commands, `ai-agents/builder-tools.md`, `claims/built-in-plugins.md`. All three have measurably drifted; two document things that no longer exist.
4. **Document the 13 missing CLI command groups**, especially the swap/DEX surface (`swap`, `pools`, `pairs`, `price`, `assets`, `balances`) and `amount`.
5. **Document the 6 missing social-OAuth claim plugins** (`discord`, `github`, `github-contributions`, `google`, `twitch`, `twitter`) and verify the 4 documented-but-unfound ones.
6. **Repoint all TypeDoc / raw-GitHub / Stoplight links to `/api-reference`** (14 sites listed in §2.4) and fix the `btibadges.io` typo.
7. **Delete 17 stubs and near-empty pages**, including the empty `expressjs.md` currently live in nav.
8. **Consolidate four competing quickstarts** into one `getting-started.md` that routes by intent, and fix the two mislabeled ```bash fences on the highest-traffic pages.
9. **Resolve the testnet-offline contradiction**: `testnet-mode.md` and `testnet-faucet.md` both declare testnet offline as of 2026-04-25, while `ai-agents/bot-examples.md` says "All examples use testnet by default."
