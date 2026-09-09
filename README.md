---
description: "What BitBadges is, how the chain, the hosted services, and the tools fit together, what one collection looks like, and where to start."
---

# BitBadges Documentation

BitBadges is a Cosmos SDK Layer 1 whose core module, `x/tokenization`, is a complete token standard: every collection, balance, approval, and permission is chain state that the module enforces on every transfer. This page explains the system end to end, shows what a token collection looks like, and sends you to the right tab.

## Create with Your AI

Tell Claude what you want to build:

```text
Hey Claude, create me a 5 ATOM / month subscription.
```

With the BitBadges MCP builder connected, your AI can turn that request into a collection with payment rules and expiring membership tokens. It asks for the details, builds and checks the transaction, and returns a link where you review and sign with your wallet.

1. [Set Up Your AI](agents/setup.md): connect the builder to Claude Code, Claude Desktop, Cursor, Codex, or another MCP client.
2. [Create Your First Collection](start/first-collection.md): go from the subscription prompt to a reviewed transaction. The monthly preset uses 30-day periods; automatic renewal requires subscriber authorization.
3. Refine the result in conversation: choose the payment coin, transfer rules, supply limits, or what the manager can change.

The same creation flow works across the token standard:

```text
Create me a payment request for 10 USDC and give me the review link.
```

```text
Make a 500-piece NFT collection where only I can mint.
```

For a build flow inside your application, use the [Programmatic Agent](agents/programmatic-agent.md). For repeatable commands and direct TypeScript integration, use the [CLI](cli/README.md) and [SDK](sdk/README.md).

## Create in the Browser

On [bitbadges.io](https://bitbadges.io), you can also create collections, set transferability, run claims, and trade with a wallet. These docs explain the token model and cover integrations, automation, custom plugins, and node operations.

## What You Get

| Layer | Pieces | What it does |
| --- | --- | --- |
| Chain (`bitbadges-1`) | `x/tokenization`, `x/gamm`, `x/managersplitter`, IBC, EVM precompiles | Tokens with time-based balances and three-level transfer approvals. A Balancer-style DEX. Wrapping to `x/bank` denoms for IBC. Solidity access through precompiles at `0x...1001` to `0x...1003`. |
| Hosted services | BitBadges API, claims and plugins, Sign In with BitBadges, bitbadges.io | Indexed reads (balances, metadata, activity), off-chain claim gating with 16 built-in plugins plus your own HTTP plugins, OAuth-style sign in, and a no-code site. |
| Tools | `bb` CLI, `bitbadges` npm package, MCP builder tools, Claude Code plugin | Build, check, simulate, preview, sign, and broadcast transactions from a terminal, TypeScript, or an AI agent. |

The chain enforces the rules. The hosted services make them easy to read and to gate. The tools generate valid transactions so you rarely hand-write the structures below.

## One Collection, Annotated

A collection is created with one message. This example fixes the valid IDs at 1 through 100 and caps supply at one unit per ID. Its locked mint rule lets only the creator initiate up to 100 mints, issuing IDs in order. The manager can still edit metadata and add post-mint transfer rules, but cannot change minting or force holders to transfer their tokens.

The addresses and metadata URIs are illustrative. Replace both `creator` and `manager`, plus the mint rule's `initiatedByListId`, with your wallet address. Supply your own metadata URIs. Recipients accept incoming transfers by default and can change their own incoming approvals. The example has no post-mint transfer rule, so holders cannot transfer tokens until the manager adds one.

```json fold=3-17,19-25,31-37,62-66,75-97,107-112,114-158,166-177
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "defaultBalances": {
    "balances": [],
    "outgoingApprovals": [],
    "incomingApprovals": [],
    "autoApproveSelfInitiatedOutgoingTransfers": false,
    "autoApproveSelfInitiatedIncomingTransfers": false,
    "autoApproveAllIncomingTransfers": true,
    "userPermissions": {
      "canUpdateOutgoingApprovals": [],
      "canUpdateIncomingApprovals": [],
      "canUpdateAutoApproveSelfInitiatedOutgoingTransfers": [],
      "canUpdateAutoApproveSelfInitiatedIncomingTransfers": [],
      "canUpdateAutoApproveAllIncomingTransfers": []
    }
  },
  "validTokenIds": [{ "start": "1", "end": "100" }],
  "collectionPermissions": {
    "canDeleteCollection": [],
    "canArchiveCollection": [],
    "canUpdateStandards": [],
    "canUpdateCustomData": [],
    "canUpdateManager": [],
    "canUpdateCollectionMetadata": [],
    "canUpdateValidTokenIds": [
      {
        "tokenIds": [{ "start": "1", "end": "18446744073709551615" }],
        "permanentlyPermittedTimes": [],
        "permanentlyForbiddenTimes": [{ "start": "1", "end": "18446744073709551615" }]
      }
    ],
    "canUpdateTokenMetadata": [],
    "canUpdateCollectionApprovals": [
      {
        "fromListId": "Mint",
        "toListId": "All",
        "initiatedByListId": "All",
        "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
        "tokenIds": [{ "start": "1", "end": "18446744073709551615" }],
        "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
        "approvalId": "All",
        "permanentlyPermittedTimes": [],
        "permanentlyForbiddenTimes": [{ "start": "1", "end": "18446744073709551615" }]
      }
    ],
    "canAddMoreAliasPaths": [],
    "canAddMoreCosmosCoinWrapperPaths": []
  },
  "manager": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionMetadata": {
    "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json",
    "customData": ""
  },
  "tokenMetadata": [
    {
      "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/{id}.json",
      "customData": "",
      "tokenIds": [{ "start": "1", "end": "100" }]
    }
  ],
  "customData": "",
  "collectionApprovals": [
    {
      "fromListId": "Mint",
      "toListId": "All",
      "initiatedByListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
      "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "tokenIds": [{ "start": "1", "end": "100" }],
      "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "uri": "",
      "customData": "",
      "approvalId": "manager-mint",
      "approvalCriteria": {
        "merkleChallenges": [],
        "predeterminedBalances": {
          "manualBalances": [],
          "incrementedBalances": {
            "startBalances": [
              {
                "amount": "1",
                "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
                "tokenIds": [{ "start": "1", "end": "1" }]
              }
            ],
            "incrementTokenIdsBy": "1",
            "incrementOwnershipTimesBy": "0",
            "durationFromTimestamp": "0",
            "allowOverrideTimestamp": false,
            "recurringOwnershipTimes": { "startTime": "0", "intervalLength": "0", "chargePeriodLength": "0" },
            "allowOverrideWithAnyValidToken": false,
            "allowAmountScaling": false,
            "maxScalingMultiplier": "0"
          },
          "orderCalculationMethod": {
            "useOverallNumTransfers": true,
            "usePerToAddressNumTransfers": false,
            "usePerFromAddressNumTransfers": false,
            "usePerInitiatedByAddressNumTransfers": false,
            "useMerkleChallengeLeafIndex": false,
            "challengeTrackerId": ""
          }
        },
        "approvalAmounts": {
          "overallApprovalAmount": "0",
          "perToAddressApprovalAmount": "0",
          "perFromAddressApprovalAmount": "0",
          "perInitiatedByAddressApprovalAmount": "0",
          "amountTrackerId": "",
          "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
        },
        "maxNumTransfers": {
          "overallMaxNumTransfers": "100",
          "perToAddressMaxNumTransfers": "0",
          "perFromAddressMaxNumTransfers": "0",
          "perInitiatedByAddressMaxNumTransfers": "0",
          "amountTrackerId": "mint",
          "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
        },
        "coinTransfers": [],
        "requireToEqualsInitiatedBy": false,
        "requireFromEqualsInitiatedBy": false,
        "requireToDoesNotEqualInitiatedBy": false,
        "requireFromDoesNotEqualInitiatedBy": false,
        "overridesFromOutgoingApprovals": true,
        "overridesToIncomingApprovals": false,
        "autoDeletionOptions": {
          "afterOneUse": false,
          "afterOverallMaxNumTransfers": false,
          "allowCounterpartyPurge": false,
          "allowPurgeIfExpired": false
        },
        "mustOwnTokens": [],
        "dynamicStoreChallenges": [],
        "ethSignatureChallenges": [],
        "senderChecks": {
          "mustBeEvmContract": false,
          "mustNotBeEvmContract": false,
          "mustBeLiquidityPool": false,
          "mustNotBeLiquidityPool": false
        },
        "recipientChecks": {
          "mustBeEvmContract": false,
          "mustNotBeEvmContract": false,
          "mustBeLiquidityPool": false,
          "mustNotBeLiquidityPool": false
        },
        "initiatorChecks": {
          "mustBeEvmContract": false,
          "mustNotBeEvmContract": false,
          "mustBeLiquidityPool": false,
          "mustNotBeLiquidityPool": false
        },
        "altTimeChecks": {
          "offlineHours": [],
          "offlineDays": [],
          "offlineMonths": [],
          "offlineDaysOfMonth": [],
          "offlineWeeksOfYear": [],
          "timezoneOffsetMinutes": "0",
          "timezoneOffsetNegative": false
        },
        "mustPrioritize": false,
        "votingChallenges": [],
        "allowBackedMinting": false,
        "allowSpecialWrapping": false,
        "evmQueryChallenges": [],
        "userApprovalSettings": {
          "allowedDenoms": [],
          "disableUserCoinTransfers": false,
          "userRoyalties": { "percentage": "0", "payoutAddress": "" }
        }
      },
      "version": "0"
    }
  ],
  "standards": ["NFTs"],
  "isArchived": false,
  "mintEscrowCoinsToTransfer": [],
  "cosmosCoinWrapperPathsToAdd": [],
  "invariants": {
    "noCustomOwnershipTimes": false,
    "maxSupplyPerId": "1",
    "noForcefulPostMintTransfers": true,
    "disablePoolCreation": false,
    "evmQueryChallenges": []
  },
  "aliasPathsToAdd": []
}
```

The Collapsed view hides default fields. Select Full to inspect the complete JSON. The field reference is in [MsgCreateCollection](token-standard/messages/msg-create-collection.md).

This object is the message value, not a transaction envelope. Save the Full JSON as `collection-value.json`, make the replacements above, then wrap it for the CLI using `jq`:

```bash
jq '{messages: [{typeUrl: "/tokenization.MsgCreateCollection", value: .}]}' collection-value.json > collection.json
bb check collection.json --depth structural
```

| Field | What it decides | Read |
| --- | --- | --- |
| `validTokenIds` | Which token IDs exist. IDs are numbers; fungible or non-fungible depends only on how many units you mint per ID. | [Collections](token-standard/concepts/collections.md) |
| `collectionMetadata`, `tokenMetadata` | Where the name, image, and description live. `{id}` expands per token. Inline JSON in `customData` needs no hosting. | [Collections](token-standard/concepts/collections.md) |
| `collectionApprovals` | Who can move which tokens from whom to whom, when, and under which conditions. `fromListId: "Mint"` makes this a mint rule. | [Transferability](token-standard/concepts/transferability.md) |
| `approvalCriteria` | The conditions: caps via trackers, a fixed mint order via predetermined balances, payments, Merkle proofs, votes, ownership checks, EVM queries, time windows. | [Approval Criteria](token-standard/approval-criteria/README.md) |
| `ownershipTimes` | Balances carry a time range. A subscription is a balance that expires; a vesting schedule is a balance that starts later. No follow-up transaction. | [Balances](token-standard/concepts/balances.md) |
| `collectionPermissions` | What the manager may still change, per time range, and whether that answer is frozen. This example locks the valid ID range and mint rules; `invariants.maxSupplyPerId` caps supply per ID. | [Permissions](token-standard/concepts/permissions.md) |
| `standards` | Labels that tell apps how to interpret the collection. | [Collections](token-standard/concepts/collections.md) |

Token transfers are checked against collection-level, sender outgoing, and recipient incoming approvals. Collection criteria can explicitly override the user approval layers. Wrapped-token movements on BitBadges also use this approval model; remote chains do not execute BitBadges approval rules. [Concepts](token-standard/concepts/README.md) walks the model in dependency order.

## What Changes Versus ERC-20 and ERC-721

| Need | Contract standards | BitBadges |
| --- | --- | --- |
| Fungible and non-fungible | Two standards, two contracts | One collection. `amount` per token ID. |
| Expiring or scheduled ownership | Custom contract, a cron job, or a burn later | `ownershipTimes` on the balance. The chain reports the balance as absent outside the range. |
| Transfer rules | `require` statements in Solidity, per contract, audited each time | Approvals with criteria, checked on token transfers and wrapped-token movements on BitBadges. |
| Allowlists and blocklists | Mappings in the contract | Reusable [Address Lists](token-standard/concepts/address-lists.md): `"All"`, `"Mint"`, `"!bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue"`, or stored lists. |
| Mint gating | A merkle-drop contract | [Merkle Challenges](token-standard/approval-criteria/merkle-challenges.md) on-chain, or [Claims](api/claims/README.md) with plugins off-chain that produce the proof. |
| Royalties and payments | EIP-2981 hints that marketplaces may ignore | [Coin Transfers](token-standard/approval-criteria/coin-transfers.md) and [user royalties](token-standard/approval-criteria/user-approval-settings.md) enforced inside the transfer. |
| Upgradability | Proxy patterns | [Permissions](token-standard/concepts/permissions.md) with permitted and forbidden time ranges, freezable per field. |
| Compliance checks | Off-chain, or a per-token contract | KYC via [dynamic stores](token-standard/approval-criteria/dynamic-store-challenges.md), business hours via [Alt Time Checks](token-standard/approval-criteria/alt-time-checks.md), on-chain EVM reads via [EVM Query Challenges](token-standard/approval-criteria/evm-query-challenges.md). See [Compliance Zones](token-standard/concepts/compliance-zones.md). |
| Cross-chain | Bridges | [Wrapper paths](token-standard/ibc/cosmos-coin-wrapper-paths.md) turn tokens into `x/bank` denoms for IBC and DEX trading. Approvals apply on the BitBadges side; remote voucher transfers follow the remote chain's rules. |
| Contracts | Everything | Optional. Solidity reads and writes the module through [precompiles](chain/evm/README.md). |

The longer argument is in [Why BitBadges](about/README.md) and [Comparisons](about/comparisons.md).

## What People Build

Each row below has a longer pitch, with the fields that matter and a prompt for an agent, under [Use Cases](use-cases/README.md).

| Build | Mechanism | Start |
| --- | --- | --- |
| NFT or fungible collection | `validTokenIds` plus a mint approval | [Create a Collection](guides/create-a-collection.md) |
| Subscription, membership, expiring credential | `ownershipTimes` and recurring predetermined balances | [Subscriptions and Time-Based Tokens](guides/subscriptions-and-time-based-tokens.md) |
| Tradable, burnable, soulbound, or admin-revocable tokens | Post-mint approvals and overrides | [Set Transferability](guides/set-transferability.md) |
| Airdrop, allowlist, quest, social-gated mint | Claims with plugins that emit a Merkle proof | [Distribute with Claims](guides/distribute-with-claims.md) |
| Token-gated API or content | BB-402: a 402 response, a signed proof, a balance check | [Gate access](guides/gate-access.md) |
| Login with a wallet | Sign In with BitBadges (OAuth flow) | [Sign In Users](guides/sign-in-users.md) |
| Compliant asset with KYC and transfer limits | Dynamic stores, trackers, alt time checks, compliance zones | [Compliance Zones](token-standard/concepts/compliance-zones.md) |
| Stablecoin-backed or IBC-backed token | Backed minting against an existing denom | [Smart Tokens and Vaults](guides/smart-tokens-and-vaults.md) |
| Liquidity pool or swap | Wrap, then `x/gamm` | [Trade on the DEX](guides/trade-on-the-dex.md) |
| Auction, bounty, crowdfund, prediction market, payment request, product catalog | Standards with `bb` verbs and agent skills | [Standards](cli/standards.md), [Skills](agents/skills/README.md) |
| Agent-controlled vault with spend limits | Outgoing approvals with daily-reset trackers | [Spending Authorization](agents/spending-authorization.md) |

## Pick a Path

Choose a path for reading data or building transactions. Reads need no wallet signature. Writes require review and a signed broadcast. Mainnet is the live network; testnet is offline.

### CLI

```bash
curl -fsSL https://install.bitbadges.io | sh
bb settings set apiKey "$BITBADGES_API_KEY"  # key from https://bitbadges.io/developer
bb api tokens get-collection 1             # read through the BitBadges API
bb build --help                            # 19 builders: subscription, smart-token, auction, transfer, ...
bb check collection.json                   # validate a saved collection or transaction
bb simulate collection.json
bb deploy collection.json --browser        # review and sign in the browser
```

[Quickstart](start/quickstart.md), [CLI reference](cli/README.md)

### TypeScript

```ts
import { BigIntify, BitBadgesAPI } from 'bitbadges';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });
const { collection } = await api.getCollection('1');
console.log(collection.collectionId, collection.validTokenIds);
```

Install `bitbadges` and set `BITBADGES_API_KEY` from the [developer portal](https://bitbadges.io/developer) before running this server-side example. It reads collection 1. For a write, follow [Transactions](sdk/transactions/README.md) to select a signer and prepare a transfer using tokens you own and a recipient you choose.

[SDK reference](sdk/README.md), [Transactions](sdk/transactions/README.md)

### AI Agent

The same npm package ships the `bitbadges-builder` MCP server and a Claude Code plugin. The agent assembles the transaction with tools such as `add_approval`, `set_permissions`, and `review_collection`, then hands you a review link; you sign in the browser. Works with Claude Code, Claude Desktop, Cursor, Windsurf, Codex, VS Code, Zed, or any model that can output JSON.

```bash
claude mcp add bitbadges-builder -e BITBADGES_API_KEY="$BITBADGES_API_KEY" -- npx -y -p bitbadges bitbadges-builder
```

[Set Up Your AI](agents/setup.md), [MCP Builder Tools](agents/mcp-tools.md)

### No Code

The [Create tab](https://bitbadges.io/create) and the [developer portal](https://bitbadges.io/developer) create collections, claims, address lists, and API keys without an integration. Paste any transaction JSON at `bitbadges.io/mint/local-builder` to review and sign it.

## Networks

| Network | Chain ID | EVM chain ID | Endpoints |
| --- | --- | --- | --- |
| mainnet | `bitbadges-1` | `50024` | `https://rpc.bitbadges.io`, `https://lcd.bitbadges.io`, `https://evm-rpc.bitbadges.io`, `https://api.bitbadges.io` |
| testnet | offline | | [Testnet status](chain/testnet.md) |

Full table, denoms, and node setup: [Network](chain/README.md).

## The Tabs

| Tab | Read it when you want to | Start at |
| --- | --- | --- |
| Docs | Install, run a first transaction, do a task, use the site, or read why BitBadges exists | [Quickstart](start/quickstart.md), [Using the Frontend](using-the-frontend/README.md), [Guides](guides/README.md), [About](about/README.md) |
| Token Standard | Understand the data model, approval criteria, every message and query, and wrapping | [Overview](token-standard/README.md) |
| Chain | The other modules, the DEX, EVM precompiles, endpoints, denoms, running a node | [Chain](chain/README.md) |
| API | Call the hosted API, run claims and plugins, add Sign In with BitBadges | [BitBadges API](api/README.md), [OpenAPI reference](/api-reference) |
| SDK & CLI | Use `bitbadges` from TypeScript or drive everything from `bb` | [SDK](sdk/README.md), [CLI](cli/README.md) |
| Agents | Wire Claude, Cursor, Codex, or any MCP client to build tokens | [Agents](agents/README.md) |

For agents reading this site: [Reading the Docs](agents/reading-the-docs.md) lists `llms.txt`, the single-file corpus, and the URL patterns.
