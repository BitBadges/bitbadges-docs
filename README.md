---
description: "What BitBadges is, how the chain, the hosted services, and the tools fit together, what one collection looks like, and where to start."
---

# BitBadges documentation

BitBadges is a Cosmos SDK Layer 1 whose core module, `x/tokenization`, is a complete token standard: every collection, balance, approval, and permission is chain state that the module enforces on every transfer. This page explains the system end to end, shows what a token collection looks like, and sends you to the right tab.

## What you get

| Layer | Pieces | What it does |
| --- | --- | --- |
| Chain (`bitbadges-1`) | `x/tokenization`, `x/gamm`, `x/managersplitter`, IBC, EVM precompiles | Tokens with time-based balances and three-level transfer approvals. A Balancer-style DEX. Wrapping to `x/bank` denoms for IBC. Solidity access through precompiles at `0x...1001` to `0x...1003`. |
| Hosted services | BitBadges API, claims and plugins, Sign In with BitBadges, bitbadges.io | Indexed reads (balances, metadata, activity), off-chain claim gating with 16 built-in plugins plus your own HTTP plugins, OAuth-style sign in, and a no-code site. |
| Tools | `bb` CLI, `bitbadges` npm package, MCP builder tools, Claude Code plugin | Build, check, simulate, preview, sign, and broadcast transactions from a terminal, TypeScript, or an AI agent. |

The chain enforces the rules. The hosted services make them easy to read and to gate. The tools generate valid transactions so you rarely hand-write the structures below.

## One collection, annotated

A collection is created with one message. This one is a 100-token NFT collection where only the creator can mint, one token per mint, up to 100 mints, with the supply locked forever:

```json
{
  "validTokenIds": [{ "start": "1", "end": "100" }],
  "collectionMetadata": { "uri": "ipfs://QmCollectionMetadata", "customData": "" },
  "tokenMetadata": [{ "uri": "ipfs://QmTokenMetadata/{id}", "customData": "", "tokenIds": [{ "start": "1", "end": "100" }] }],
  "collectionApprovals": [{
    "approvalId": "manager-mint",
    "fromListId": "Mint",
    "toListId": "All",
    "initiatedByListId": "bb1creator...",
    "tokenIds": [{ "start": "1", "end": "100" }],
    "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "approvalCriteria": {
      "overridesFromOutgoingApprovals": true,
      "maxNumTransfers": { "overallMaxNumTransfers": "100", "amountTrackerId": "mint" },
      "predeterminedBalances": {
        "incrementedBalances": {
          "startBalances": [{ "amount": "1", "tokenIds": [{ "start": "1", "end": "1" }], "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }] }],
          "incrementTokenIdsBy": "1"
        },
        "orderCalculationMethod": { "useOverallNumTransfers": true }
      }
    }
  }],
  "collectionPermissions": {
    "canUpdateValidTokenIds": [{ "permanentlyForbiddenTimes": [{ "start": "1", "end": "18446744073709551615" }], "permanentlyPermittedTimes": [] }]
  },
  "standards": ["NFTs"]
}
```

Fields left at their defaults are omitted here; the full shape is in [MsgCreateCollection](token-standard/messages/msg-create-collection.md).

| Field | What it decides | Read |
| --- | --- | --- |
| `validTokenIds` | Which token IDs exist. IDs are numbers; fungible or non-fungible depends only on how many units you mint per ID. | [Collections](token-standard/concepts/collections.md) |
| `collectionMetadata`, `tokenMetadata` | Where the name, image, and description live. `{id}` expands per token. Inline JSON in `customData` needs no hosting. | [Collections](token-standard/concepts/collections.md) |
| `collectionApprovals` | Who can move which tokens from whom to whom, when, and under which conditions. `fromListId: "Mint"` makes this a mint rule. | [Transferability](token-standard/concepts/transferability.md) |
| `approvalCriteria` | The conditions: caps via trackers, a fixed mint order via predetermined balances, payments, Merkle proofs, votes, ownership checks, EVM queries, time windows. | [Approval criteria](token-standard/approval-criteria/README.md) |
| `ownershipTimes` | Balances carry a time range. A subscription is a balance that expires; a vesting schedule is a balance that starts later. No follow-up transaction. | [Balances](token-standard/concepts/balances.md) |
| `collectionPermissions` | What the manager may still change, per time range, and whether that answer is frozen. This one locks the supply forever. | [Permissions](token-standard/concepts/permissions.md) |
| `standards` | Labels that tell apps how to interpret the collection. | [Collections](token-standard/concepts/collections.md) |

Every transfer, including swaps on the DEX and IBC transfers of wrapped tokens, passes three approval layers: the collection's, the sender's outgoing, and the recipient's incoming. [Concepts](token-standard/concepts/README.md) walks the model in dependency order.

## What changes versus ERC-20 and ERC-721

| Need | Contract standards | BitBadges |
| --- | --- | --- |
| Fungible and non-fungible | Two standards, two contracts | One collection. `amount` per token ID. |
| Expiring or scheduled ownership | Custom contract, a cron job, or a burn later | `ownershipTimes` on the balance. The chain reports the balance as absent outside the range. |
| Transfer rules | `require` statements in Solidity, per contract, audited each time | Approvals with criteria, checked by the module on every transfer, swap, and IBC hop. |
| Allowlists and blocklists | Mappings in the contract | Reusable [address lists](token-standard/concepts/address-lists.md): `"All"`, `"Mint"`, `"!bb1..."`, or stored lists. |
| Mint gating | A merkle-drop contract | [Merkle challenges](token-standard/approval-criteria/merkle-challenges.md) on-chain, or [claims](api/claims/README.md) with plugins off-chain that produce the proof. |
| Royalties and payments | EIP-2981 hints that marketplaces may ignore | [Coin transfers](token-standard/approval-criteria/coin-transfers.md) and [user royalties](token-standard/approval-criteria/user-approval-settings.md) enforced inside the transfer. |
| Upgradability | Proxy patterns | [Permissions](token-standard/concepts/permissions.md) with permitted and forbidden time ranges, freezable per field. |
| Compliance checks | Off-chain, or a per-token contract | KYC via [dynamic stores](token-standard/approval-criteria/dynamic-store-challenges.md), business hours via [alt time checks](token-standard/approval-criteria/alt-time-checks.md), on-chain EVM reads via [EVM query challenges](token-standard/approval-criteria/evm-query-challenges.md). See [Compliance zones](token-standard/concepts/compliance-zones.md). |
| Cross-chain | Bridges | [Wrapper paths](token-standard/ibc/cosmos-coin-wrapper-paths.md) turn tokens into `x/bank` denoms that move over IBC and trade on the DEX, with the same approvals applied. |
| Contracts | Everything | Optional. Solidity reads and writes the module through [precompiles](chain/evm/README.md). |

The longer argument is in [Why BitBadges](about/README.md) and [Comparisons](about/comparisons.md).

## What people build

| Build | Mechanism | Start |
| --- | --- | --- |
| NFT or fungible collection | `validTokenIds` plus a mint approval | [Create a collection](guides/create-a-collection.md) |
| Subscription, membership, expiring credential | `ownershipTimes` and recurring predetermined balances | [Subscriptions and time-based tokens](guides/subscriptions-and-time-based-tokens.md) |
| Tradable, burnable, soulbound, or admin-revocable tokens | Post-mint approvals and overrides | [Set transferability](guides/set-transferability.md) |
| Airdrop, allowlist, quest, social-gated mint | Claims with plugins that emit a Merkle proof | [Distribute with claims](guides/distribute-with-claims.md) |
| Token-gated API or content | BB-402: a 402 response, a signed proof, a balance check | [Gate access](guides/gate-access.md) |
| Login with a wallet | Sign In with BitBadges (OAuth flow) | [Sign in users](guides/sign-in-users.md) |
| Compliant asset with KYC and transfer limits | Dynamic stores, trackers, alt time checks, compliance zones | [Compliance zones](token-standard/concepts/compliance-zones.md) |
| Stablecoin-backed or IBC-backed token | Backed minting against an existing denom | [Smart tokens and vaults](guides/smart-tokens-and-vaults.md) |
| Liquidity pool or swap | Wrap, then `x/gamm` | [Trade on the DEX](guides/trade-on-the-dex.md) |
| Auction, bounty, crowdfund, prediction market, payment request, product catalog | Standards with `bb` verbs and agent skills | [Standards](cli/standards.md), [Skills](agents/skills/README.md) |
| Agent-controlled vault with spend limits | Outgoing approvals with daily-reset trackers | [Spending authorization](agents/spending-authorization.md) |

## Pick a path

Every path produces the same transaction JSON and ends with a signed broadcast. Mainnet is the live network; testnet is offline.

### CLI

```bash
curl -fsSL https://install.bitbadges.io | sh
bb settings set apiKey <your-api-key>      # https://bitbadges.io/developer
bb api tokens get-collection 1             # read through the BitBadges API
bb build --help                            # 19 builders: subscription, smart-token, auction, transfer, ...
bb check collection.json                   # validate any tx JSON, such as the collection above
bb simulate collection.json
bb deploy collection.json --browser        # review and sign in the browser
```

[Quickstart](start/quickstart.md), [CLI reference](cli/README.md)

### TypeScript

```ts
import { BigIntify, BitBadgesAPI, BitBadgesSigningClient, GenericCosmosAdapter, MsgTransferTokens } from 'bitbadges';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });
const { collection } = await api.getCollection('1');

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });
await client.signAndBroadcast([
  new MsgTransferTokens({ creator: client.address, collectionId: 1n, transfers: [/* ... */] })
]);
```

[SDK reference](sdk/README.md), [Transactions](sdk/transactions/README.md)

### AI agent

The same npm package ships the `bitbadges-builder` MCP server and a Claude Code plugin. The agent assembles the transaction with tools such as `add_approval`, `set_permissions`, and `review_collection`, then hands you a review link; you sign in the browser. Works with Claude Code, Claude Desktop, Cursor, Windsurf, Codex, VS Code, Zed, or any model that can output JSON.

```bash
claude mcp add bitbadges-builder -e BITBADGES_API_KEY=<your-api-key> -- npx -y -p bitbadges bitbadges-builder
```

[Set up your AI](agents/setup.md), [MCP builder tools](agents/mcp-tools.md)

### No code

The [Create tab](https://bitbadges.io/create) and the [developer portal](https://bitbadges.io/developer) create collections, claims, address lists, and API keys without an integration. Paste any transaction JSON at `bitbadges.io/mint/local-builder` to review and sign it.

## Networks

| Network | Chain ID | EVM chain ID | Endpoints |
| --- | --- | --- | --- |
| mainnet | `bitbadges-1` | `50024` | `https://rpc.bitbadges.io`, `https://lcd.bitbadges.io`, `https://evm-rpc.bitbadges.io`, `https://api.bitbadges.io` |
| testnet | offline | | [Testnet status](chain/testnet.md) |

Full table, denoms, and node setup: [Network](chain/README.md).

## The tabs

| Tab | Read it when you want to | Start at |
| --- | --- | --- |
| Docs | Install, run a first transaction, do a task, or read why BitBadges exists | [Quickstart](start/quickstart.md), [Guides](guides/README.md), [About](about/README.md) |
| Token Standard | Understand the data model, approval criteria, every message and query, and wrapping | [Overview](token-standard/README.md) |
| Chain | The other modules, the DEX, EVM precompiles, endpoints, denoms, running a node | [Chain](chain/README.md) |
| API | Call the hosted API, run claims and plugins, add Sign In with BitBadges | [BitBadges API](api/README.md), [OpenAPI reference](/api-reference) |
| SDK & CLI | Use `bitbadges` from TypeScript or drive everything from `bb` | [SDK](sdk/README.md), [CLI](cli/README.md) |
| Agents | Wire Claude, Cursor, Codex, or any MCP client to build tokens | [Agents](agents/README.md) |

For agents reading this site: [Reading the docs](agents/reading-the-docs.md) lists `llms.txt`, the single-file corpus, and the URL patterns.
