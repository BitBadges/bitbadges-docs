---
description: "Reference for the MCP builder tools. Install, client configs, every tool with its key params, workflows, resources, and the CLI access path."
---

# MCP Builder Tools

The MCP builder tools let an AI assistant build, review, simulate, and query BitBadges transactions. They work with Claude Desktop, Claude Code, Cursor, Codex, and any MCP client. The tool list on this page is generated from the registry in [`bitbadgesjs-sdk/src/builder/tools/`](https://github.com/bitbadges/bitbadgesjs/tree/main/packages/bitbadgesjs-sdk/src/builder/tools).

```bash
# Install globally
npm install -g bitbadges

# Or run without installing
npx -p bitbadges bitbadges-builder
```

To build from your own Node code with the same tools and no MCP client, use the [Programmatic Agent](programmatic-agent.md). For terminal workflows without an MCP client, use the [CLI](../cli/README.md).

## Client Configuration

### Claude Desktop

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "bitbadges-builder": {
      "command": "npx",
      "args": ["-y", "-p", "bitbadges", "bitbadges-builder"],
      "env": {
        "BITBADGES_API_KEY": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
        "BITBADGES_MNEMONIC": "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about"
      }
    }
  }
}
```

The key is a fake example and the mnemonic is the public BIP39 test vector. Replace the key with yours from [bitbadges.io/developer](https://bitbadges.io/developer); drop `BITBADGES_MNEMONIC` to keep signing in the browser.

### Claude Code

After the chain and CLI install (`curl -fsSL https://install.bitbadges.io | sh`), add the server by hand:

```bash
claude mcp add bitbadges-builder -- npx -y -p bitbadges bitbadges-builder
```

Or install the [Claude Code Plugin](claude-code-plugin.md), which wires the same server and adds 8 workflow skills plus `/bitbadges:setup` and `/bitbadges:status`:

```text
/plugin marketplace add BitBadges/bitbadges-plugin
/plugin install bitbadges
```

The plugin is a convenience layer. The CLI install is what runs underneath.

### Cursor

Add to `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "bitbadges-builder": {
      "command": "npx",
      "args": ["-y", "-p", "bitbadges", "bitbadges-builder"],
      "env": {
        "BITBADGES_API_KEY": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
      }
    }
  }
}
```

### Environment Variables

| Variable | Required | Description |
| --- | --- | --- |
| `BITBADGES_API_KEY` | For queries, simulation, broadcast, and review links | Your BitBadges API key ([get one](https://bitbadges.io/developer)) |
| `BITBADGES_MNEMONIC` | For signing | Mnemonic for server-side signing |
| `BITBADGES_PRIVATE_KEY` | For signing | Alternative: hex private key |
| `BITBADGES_API_URL` | No | Override the API base (default `https://api.bitbadges.io`) |
| `BITBADGES_FRONTEND_URL` | No | Override the site base used in review links (default `https://bitbadges.io`) |

The server is model-agnostic. It does not read `ANTHROPIC_API_KEY` or `OPENAI_API_KEY`; your client provides the model.

## Tools

Params marked `*` are required. Session tools also accept `sessionId` and `creatorAddress` (`bb1` or `0x` form) for per-request isolation; those two are omitted from the tables.

A complete call, as the client sends it and as `bb dev tools call add_approval --args-file ./approval.json` reads it. This adds a public mint of Demo Coin (collection token ID 1) with at most 10 units per address:

```json
{
  "sessionId": "demo-coin",
  "creatorAddress": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "approvalId": "public-mint",
  "fromListId": "Mint",
  "toListId": "All",
  "initiatedByListId": "All",
  "tokenIds": [{ "start": "1", "end": "1" }],
  "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
  "approvalCriteria": {
    "overridesFromOutgoingApprovals": true,
    "overridesToIncomingApprovals": true,
    "approvalAmounts": {
      "overallApprovalAmount": "0",
      "perToAddressApprovalAmount": "10",
      "perFromAddressApprovalAmount": "0",
      "perInitiatedByAddressApprovalAmount": "0",
      "amountTrackerId": "public-mint",
      "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
    }
  }
}
```

The tool answers with the approval as stored in the session plus any validation notes.

### Session Builders (Recommended for Collections)

Each tool sets one field on a session-scoped transaction. Calls in the same round can run in parallel. Tools that need the API key say so.

| Tool | What it does | Key params |
| --- | --- | --- |
| `set_standards` | Set the collection's standards array, which selects the site's dedicated views | `standards*` (array, e.g. `["Subscriptions"]`, `["NFTs"]`, `["Smart Token"]`) |
| `set_valid_token_ids` | Set which token ID ranges exist. Fungible tokens and subscriptions use one ID; NFTs use a range | `tokenIds*` (array of ranges) |
| `set_default_balances` | Set default balances for all users. Almost always empty balances with every auto-approve flag true. `autoApproveAllIncomingTransfers` must be true for any collection with mint approvals | `defaultBalances*` (object) |
| `set_permissions` | Set collection permissions from a preset or a custom object. Fields are frozen (`permanentlyForbiddenTimes: FOREVER`) or neutral (`[]`) | `preset` (`fully-immutable`, `manager-controlled`, `locked-approvals` default), `permissions` (object, overrides preset) |
| `set_invariants` | Set on-chain invariants. They cannot be removed after creation | `invariants*` (object or null; keys `noCustomOwnershipTimes`, `maxSupplyPerId`, `cosmosCoinBackedPath`) |
| `set_manager` | Set the manager address. Defaults to the creator | `manager*` |
| `set_collection_metadata` | Set name, description, and image. Auto-creates a metadata placeholder URI | `name*`, `description*`, `image*` (`IMAGE_N`, an `https://` or `ipfs://` URL, or a `data:image/svg+xml;base64` URI) |
| `set_token_metadata` | Set metadata for token ID ranges. `{id}` works in the URI only | `tokenIds*`, `name*`, `description*`, `image*` |
| `set_custom_data` | Set the on-chain custom data string (any JSON or text) | `customData*` |
| `set_mint_escrow_coins` | Fund the mint escrow address at creation. Required for quest rewards and escrow payouts where `coinTransfers` use `overrideFromWithApproverAddress` | `coins*` (array; for quests `rewardAmount * maxClaims`) |
| `add_approval` | Add a collection approval: who can transfer what, when, under which conditions. Remove and re-add with the same `approvalId` to replace in place | `approvalId*`, `fromListId*` (`Mint`, `!Mint`, or an address), `toListId` (default `All`), `initiatedByListId`, `tokenIds`, `transferTimes`, `ownershipTimes`, `approvalCriteria` (object, non-default fields only; `overridesFromOutgoingApprovals` must be true for Mint approvals) |
| `add_preset_approval` | Add a collection approval from a named preset instead of hand-writing the approval criteria. Output is identical in shape to `add_approval` | `presetId*` (e.g. `credit-token.scaled`), `params*` (per-preset schema), `overrides` (deep merge; arrays replace, objects merge) |
| `list_presets` | List named approval presets with `presetId`, `name`, `description`, and `paramsSchema` | `skill` (filter by skill id, e.g. `credit-token`) |
| `remove_approval` | Remove a collection approval by id. Order is preserved on re-add | `approvalId*` |
| `set_approval_metadata` | Set a name and description on an approval. Image is always empty for approvals | `approvalId*`, `name*`, `description*` |
| `add_alias_path` | Add an alias path for ICS20-backed tokens or liquidity pools. Required for smart tokens. Decimals must match the IBC denom | `aliasPath*` (object), `pathName`, `pathDescription`, `pathImage`, `denomUnitName`, `denomUnitDescription`, `denomUnitImage` (off-chain, routed to `metadataPlaceholders`) |
| `remove_alias_path` | Remove an alias path by denom | `denom*` |
| `add_cosmos_wrapper_path` | Add a wrapper path that mints and burns a new ICS20 coin from collection tokens. Advanced; most cases want smart tokens, pools, or `coinTransfers`. Approvals for the wrapper address need `allowSpecialWrapping: true` and `mustPrioritize: true` | `wrapperPath*` (object), plus the same off-chain `path*` and `denomUnit*` params as `add_alias_path` |
| `remove_cosmos_wrapper_path` | Remove a wrapper path by denom | `denom*` |
| `add_transfer` | Append a `MsgTransferTokens` after the collection message for auto-mint at creation. `collectionId` is set to `"0"` (the new collection). Needs a matching mint approval | `transfers*` (array of from, to, balances, prioritized approval) |
| `remove_transfer` | Remove a transfer message by index. `messages[0]` is the collection and cannot be removed | `index*` (>= 1) |
| `set_is_archived` | Archive or unarchive. Archived collections stay on-chain but are hidden from browsing | `isArchived*` |
| `get_transaction` | Return the assembled transaction JSON with `metadataPlaceholders`. Numbers become strings. Blank `image` fields are auto-filled with a deterministic SVG seeded by the collection name | none |
| `get_review_url` | Final step: upload the transaction to the open preview endpoint and return a short bitbadges.io link the user opens to review and sign. Needs the API key to upload; the person opening the link needs none. Links expire after 1 hour. Lands with bitbadgesjs PR 288 | `transaction` (defaults to the session), `frontendUrl` |

`generate_placeholder_art` (`seed*`, `style`, `monogram`) still exists in source but is not in the MCP catalog: `get_transaction` fills blank images for you.

### Helper Builders

| Tool | What it does | Key params |
| --- | --- | --- |
| `build_claim` | Build a claim document for `POST /api/v0/claims`: code-gated, password-gated, whitelist-gated, or open | `claimType*`, `name*`, `maxUses*`, `description`, `numCodes`, `password`, `whitelist`, `maxUsesPerAddress`, `action` (links a collection approval), `showInSearchResults`, `categories` |
| `build_transfer` | Build a `MsgTransferTokens` by querying the collection and constructing the right `prioritizedApprovals` and `coinTransfers`. Supports mint, transfer, deposit (IBC to token), withdraw (token to IBC). Needs the API key | `collectionId*`, `fromAddress*` (`Mint` to mint), `toAddress*`, `tokenIds`, `amount` (default `"1"`), `intent` (`mint`, `transfer`, `deposit`, `withdraw`) |
| `build_dynamic_store` | Build transaction JSON for dynamic stores: create, update, delete, set values. Dynamic stores are on-chain allowlists usable in `dynamicStoreChallenges` | `action*` (`create`, `update`, `delete`, `set_value`, `batch_set_values`), `creator*`, `storeId`, `defaultValue`, `globalEnabled`, `uri`, `customData`, `address`, `value`, `entries` |

### Review and Analysis

| Tool | What it does | Key params |
| --- | --- | --- |
| `review_collection` | Deterministic review of a transaction or on-chain collection. Merges audit, standards, and UX findings into one `ReviewResult` with one verdict. Each finding has `code`, `severity`, `source`, `category`, and localized `title`, `detail`, `recommendation` | `collection*` (message, its value, a `{ messages }` transaction, or a raw collection), `context` (`onChainCollection`, `skipSources`, `hideAgentOnly`) |
| `flag_review_item` | Flag an assumption, substitution, or unsupported request for the user to check before broadcast. Flags surface in the review-and-sign flow | `kind*` (`assumption`, `substitution`, `unsupported_request`, `clarification_needed`, `design_choice`, `other`), `severity*` (`low`, `medium`, `high`), `message*`, `chosen*`, `alternative`, `fieldPath` |
| `explain_collection` | Human-readable explanation with optional Q&A. Covers what it is, how to get tokens, what the manager can change, trust signals, and risk. No API key | `collection*`, `question`, `audience` (`user` default, `developer`, `auditor`) |
| `analyze_collection` | Structured analysis of transferability, approvals, permissions, and how to obtain or transfer tokens. Feeds `MsgTransferTokens` construction. Needs the API key | `collectionId*` |

### Simulation and Validation

| Tool | What it does | Key params |
| --- | --- | --- |
| `simulate_transaction` | Dry-run without broadcasting. Returns raw events, parsed transfer events (coin, token, IBC), and per-address net balance changes. Defaults to the session transaction. Needs the API key | `transaction` or `transactionJson` |
| `validate_transaction` | Check a transaction against the critical rules: numbers as strings, required fields, list IDs. Defaults to the session transaction | `transaction` or `transactionJson` |

### Queries

All query tools need `BITBADGES_API_KEY`.

| Tool | What it does | Key params |
| --- | --- | --- |
| `query_collection` | Fetch a collection. Use `fields` to shrink the response | `collectionId*`, `includeMetadata` (default true), `fields` (array of top-level fields) |
| `query_balance` | Fetch the balance array, or one amount at the current time when `tokenId` is set | `collectionId*`, `address*`, `tokenId` |
| `query_dynamic_store` | Read a dynamic store: details, one address value, a paginated value list, or all stores by creator | `action*` (`get_store`, `get_value`, `list_values`, `list_by_creator`), `storeId`, `address`, `bookmark` |
| `verify_ownership` | Check that an address meets ownership requirements. Shorthand for one collection, or a full `AssetConditionGroup` for `$and` / `$or` / `$not` | `address*`, `collectionId`, `tokenId` (default `"1"`), `tokenIdEnd`, `minAmount` (default `"1"`), `requirements` (JSON string) |
| `search` | Search collections, accounts, and tokens | `query*` |
| `search_plugins` | Find off-chain claim plugins by text, fetch by id, or list a creator's public plugins. Any plugin is fetchable by id without auth | `searchValue`, `pluginIds`, `creatorAddress`, `bookmark` |
| `lookup_token_info` | Symbol, IBC denom, decimals, and pre-generated backing address for a token | `query*` (symbol like `USDC` or an `ibc/...` denom) |

### Component Generators

Stateless helpers that return one piece of a collection.

| Tool | What it does | Key params |
| --- | --- | --- |
| `generate_approval` | Build an approval by pattern | `approvalType*` (`public-mint`, `manager-mint`, `smart-token-backing`, `smart-token-unbacking`, `subscription`, `free-transfer`, `restricted-transfer`), `approvalId*`, `tokenIds`, `backingAddress`, `paymentAmount`, `paymentDenom`, `paymentRecipient`, `maxPerUser`, `totalMax`, `fromListId`, `toListId`, `initiatedByListId` |
| `generate_permissions` | Build a permissions object from a preset | `preset*` (`fully-immutable`, `manager-controlled`, `token-locked`, `custom`), `customPermissions` |
| `generate_backing_address` | Deterministic IBC backing address for a denom, plus list IDs for smart token approvals | `ibcDenom*` (denom or symbol) |
| `generate_alias_path` | Alias path config for swappable tokens and DEX display | `symbol*`, `decimals*`, `tokenId` (default `"1"`), `metadataUri`, `name`, `description` |
| `generate_wrapper_address` | Deterministic wrapper address for a wrapper path denom. No private key; protocol-controlled | `denom*` |
| `generate_unique_id` | Collision-free IDs like `prefix_a1b2c3d4` for new approvals and trackers. Keep original IDs on updates | `prefix*`, `count` (default 1) |

### Utilities

| Tool | What it does | Key params |
| --- | --- | --- |
| `validate_address` | Check an address and detect its chain type | `address*` |
| `convert_address` | Convert between `0x` and `bb1` formats | `address*`, `targetFormat` (`eth`, `bitbadges`) |
| `get_current_timestamp` | Current time in milliseconds with common offsets and durations | `offsetMs`, `offsetDays`, `offsetHours` |
| `diagnose_error` | Map a transaction error to a diagnosis and fix | `error*`, `context` |
| `search_knowledge_base` | Ranked snippets across embedded docs, learnings, recipes, error patterns, and critical rules | `query*`, `category` (`all`, `docs`, `learnings`, `recipes`, `errors`, `rules`) |

### Instructions and Docs

| Tool | What it does | Key params |
| --- | --- | --- |
| `get_skill_instructions` | Build instructions for one skill. Skill ids: `address-list`, `auction`, `auto-mint`, `bb-402`, `bounty`, `burnable`, `credit-token`, `crowdfund`, `custom-2fa`, `fungible-token`, `immutability`, `liquidity-pools`, `minting`, `multi-sig-voting`, `nft-collection`, `payment-protocol`, `payment-request`, `prediction-market`, `product-catalog`, `quest`, `smart-token`, `subscription`, `tradable` | `skillId*` |
| `fetch_docs` | Keyword search over the live docs export on docs.bitbadges.io. Returns the top matching sections | `topic*` |

Rendered skill pages: [Skills](skills/README.md).

## Workflows

### Session-Based Build

```text
set_standards + set_valid_token_ids + set_invariants + add_approval + set_permissions + set_default_balances + set_collection_metadata + set_token_metadata
  -> (optional) add_transfer (auto-mint at creation)
  -> validate_transaction + review_collection + simulate_transaction (in parallel)
  -> fix errors with remove_approval + re-add (max 3 attempts)
  -> get_transaction (final JSON)
  -> get_review_url (link the user opens to review and sign)
```

1. Build. Call the per-field tools in parallel: standards, token IDs, invariants, approvals, permissions, metadata, balances.
2. Auto-mint (optional). Call `add_transfer` to append a `MsgTransferTokens` next to the collection creation.
3. Verify. Call `validate_transaction`, `review_collection`, and `simulate_transaction` in parallel. Fix errors with a targeted `remove_approval` and re-add.
4. Export. Call `get_transaction` for the final JSON.
5. Hand off. Call `get_review_url` and give the user `reviewUrl`. Prefer the link over pasting JSON: it is short and cannot be corrupted in transit. `previewUrl` is the read-only variant for a reviewer.

### Query and Verification (No Signing)

```text
query_collection -> verify_ownership -> (act on the result)
```

### Auto-Mint at Creation

`add_transfer` mints to specific addresses in the same transaction as the collection creation. The transaction then holds two messages: `MsgUniversalUpdateCollection` and `MsgTransferTokens`. Use it for "mint 100 tokens to myself", "distribute tokens to the team", or "auto-mint at creation".

1. Build the collection with a mint approval (`add_approval` with `fromListId: "Mint"` and `initiatedByListId: <creator address>`).
2. Call `add_transfer` with the recipient addresses, balances, and `prioritizedApprovals` that reference the mint approval.
3. Verify and export as normal. The transaction contains both messages.

Maximum 4 transfer messages per transaction.

## Hand Off to the Browser

The builder never signs or broadcasts. Three exits:

- `get_review_url` returns `reviewUrl` (review and sign with a browser wallet) and `previewUrl` (read-only). Both are backed by one `prv_` code from `POST /api/v0/builder/preview`. Uploading needs `BITBADGES_API_KEY`; opening the returned link needs none, because the unguessable code is the secret. The code expires in 1 hour. `BITBADGES_FRONTEND_URL` or the `frontendUrl` param points the link at testnet or a local site; a testnet `BITBADGES_API_URL` infers `https://testnet.bitbadges.io`.
- Save `get_transaction` output to a file and run `bb preview tx.json --open`, or `bb deploy --browser` / `--burner` from the [CLI](../cli/deploy.md).
- Sign with the [SDK signing client](../sdk/transactions/signing-client.md).

If `get_review_url` is unavailable in your installed version, save the JSON to a file rather than printing it inline; terminal output wraps and truncates JSON.

## Resources

The server also exposes embedded documents as MCP resources. Read them with your client's resource support or with `bb dev resources read bitbadges://recipes/all`.

| Resource URI | Name | Description |
| --- | --- | --- |
| `bitbadges://tokens/registry` | Token registry | IBC denoms, symbols, decimals, and pre-generated backing addresses |
| `bitbadges://rules/critical` | Critical rules | Rules every transaction must follow |
| `bitbadges://skills/all` | Skill instructions | Instructions for all builder skills |
| `bitbadges://docs/concepts` | Core concepts | Transferability, approvals, permissions, balances, address lists |
| `bitbadges://docs/examples` | Full examples | Complete transaction JSON for NFT collections, fungible tokens, and smart tokens |
| `bitbadges://recipes/all` | Code recipes and decision matrices | Snippets and decision matrices for common operations |
| `bitbadges://learnings/all` | Learnings and gotchas | Known gotchas, tips, and discoveries |
| `bitbadges://errors/patterns` | Error patterns | Error messages mapped to diagnoses and fixes |
| `bitbadges://docs/frontend` | Reference frontend patterns | Patterns from the reference site (Next.js and Ant Design) |
| `bitbadges://workflows/all` | Workflow chains | Step-by-step tool chains for multi-step operations |
| `bitbadges://schema/token-builder` | Token builder schema | Annotated schema for the session builders: design axes, field reference, approval patterns, validation checklist |

## Call Tools from the CLI

The same registry is reachable from `bb dev` as plain function calls, with no MCP round-trip.

```bash
bb dev tools list                              # full schemas, as JSON
bb dev tools list --names                      # tool names, one per line
bb dev tools call get_current_timestamp
bb dev tools call get_skill_instructions --args '{"skillId":"smart-token"}'
bb dev tools call set_collection_metadata --args-file ./metadata.json --session demo
```

| Flag | Description |
| --- | --- |
| `--args <json>` | Tool arguments as inline JSON |
| `--args-file <path>` | Tool arguments from a JSON file |
| `--session <id>` | Session id for stateful tools, persisted to `~/.bitbadges/sessions/<id>.json`. Defaults to `--args.sessionId` or the built-in default session |
| `--raw` | Print the structured result instead of the formatted text block |

Stateful tools (`set_*`, `add_*`, `remove_*`, `get_transaction`) read and write the named session. Sessions survive across invocations, so an agent can compose a collection across many calls:

```bash
SESSION=demo-coin
bb dev tools call set_standards --session $SESSION --args '{"standards":["Fungible Tokens"]}'
bb dev tools call set_valid_token_ids --session $SESSION --args '{"tokenIds":[{"start":"1","end":"1"}]}'
bb dev tools call set_collection_metadata --session $SESSION --args '{"name":"Demo Coin","description":"One million units of token ID 1.","image":"ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/coin.png"}'
bb dev tools call add_approval --session $SESSION --args-file ./approval.json     # the public-mint call from the Tools section
bb dev tools call get_transaction --session $SESSION
```

Unknown tool names exit `1` and print the available tools on stderr.

```bash
bb session list                       # session ids on disk
bb session show demo                  # snapshot as JSON
bb session reset demo                 # delete the file

bb dev resources list                 # full metadata as JSON
bb dev resources list --uris          # URIs only
bb dev resources read bitbadges://recipes/all
```

Flag-based template builders (`bb build <template>`) are faster than composing tool calls when a template fits: [Build](../cli/build.md).

## Related

- [Programmatic Agent](programmatic-agent.md)
- [Claude Code Plugin](claude-code-plugin.md)
- [Skills](skills/README.md)
- [Dev commands](../cli/dev.md)
