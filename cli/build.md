---
description: "Reference for every bb build subcommand, the shared flags, metadata modes, JSON input, and the walkthrough transfer builder."
---

# bb build

`bb build <type>` turns a few flags into a complete, ready-to-sign transaction message. Use it when a template fits; pipe the result into `bb check`, `bb preview`, or `bb deploy`.

## Example

```bash
bb build vault --backing-coin USDC \
  --name "Demo Vault" --symbol vUSDC \
  --image ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/vault.png --description "USDC-backed vault" \
  --daily-withdraw-limit 1000 --explain

# build, then review and sign in the browser
bb build vault --backing-coin USDC --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json | bb preview - --open

# build and broadcast with a connected wallet
bb build vault --backing-coin USDC --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json \
  --manager bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --browser
```

The first command prints the message inside the envelope (485 lines for a vault; the head, with `--creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d`, is):

```json fold=13-35
{
  "ok": true,
  "data": {
    "typeUrl": "/tokenization.MsgCreateCollection",
    "value": {
      "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
      "validTokenIds": [
        {
          "start": "1",
          "end": "1"
        }
      ],
      "collectionPermissions": {
        "canDeleteCollection": [
          {
            "permanentlyPermittedTimes": [],
            "permanentlyForbiddenTimes": [
              {
                "start": "1",
                "end": "18446744073709551615"
              }
            ]
          }
        ],
        "canArchiveCollection": [
          {
            "permanentlyPermittedTimes": [],
            "permanentlyForbiddenTimes": [
              {
                "start": "1",
                "end": "18446744073709551615"
              }
            ]
          }
        ]
      }
    }
  }
}
```

The walkthrough that explains the output is in [Create a Collection](../guides/create-a-collection.md). This page is the flag reference.

{% hint style="info" %}
Ask your agent. Every template here has a skill (`get_skill_instructions`) and the session tools behind it: "Build a USDC vault called Demo Vault with symbol vUSDC and a 1000 daily withdraw limit, then give me the review link."
{% endhint %}

## Subcommands

The subcommand list comes from `bitbadgesjs-sdk/src/cli/commands/build.ts`. Collection builders emit `MsgCreateCollection` for a new collection (they assemble it as `MsgUniversalUpdateCollection` and narrow it at the emit boundary). Approval builders emit `MsgSetOutgoingApproval` or `MsgSetIncomingApproval`.

| Subcommand | Emits | Purpose |
| --- | --- | --- |
| `vault` | collection | IBC-backed vault token with withdraw limits, 2FA gating, emergency recovery |
| `smart-token` | collection | IBC-backed Smart Token: deposit backing coin, withdraw by burning |
| `subscription` | collection | Recurring subscription with tiers and payouts |
| `bounty` | collection | Escrowed bounty with a verifier and recipient |
| `payment-request` | collection | No-escrow request that a payer approves and pays in one action |
| `crowdfund` | collection | Funding goal with a deadline |
| `auction` | collection | Bidding window plus accept window |
| `product-catalog` | collection | One token ID per product with price and supply |
| `prediction-market` | collection | Binary YES/NO market with a resolver |
| `credit-token` | collection | Prepaid credits bought with a payment coin |
| `custom-2fa` | collection | Collection of short-lived 2FA tokens |
| `address-list` | `MsgCreateAddressLists` | On-chain address list (not a collection) |
| `intent` | outgoing approval | OTC swap intent on the Intent Exchange |
| `listing` | outgoing approval | Orderbook listing for one token |
| `bid` | incoming approval | Orderbook bid for one token or a whole collection |
| `pm-sell-intent` | outgoing approval | Sell outcome tokens on a prediction market |
| `pm-buy-intent` | incoming approval | Buy outcome tokens on a prediction market |
| `send` | `cosmos.bank.v1beta1.MsgSend` | Plain coin transfer that bypasses tokenization |
| `transfer` | `MsgTransferTokens` | Guided transfer of existing tokens |

Ten standards groups expose the same builder as `bb <standard> build` (for example `bb auctions build` is `bb build auction`). Same flags, same output. `nfts` and `dynamic-stores` have no build alias.

## Shared Flags

Every subcommand accepts these. `--help` renders them under `Metadata`, `Output`, `Network`, `Builder`, and `Deploy` headings after the per-command flags.

| Flag | Group | Description |
| --- | --- | --- |
| `--uri <url>` | Metadata | Mode 1: pre-hosted metadata URI. Skips the field flags. |
| `--name <name>`, `--image <url>`, `--description <text>` | Metadata | Mode 2: inline metadata serialized into the on-chain `customData` field |
| `--condensed` | Output | Compact JSON |
| `--output-file <path>` | Output | Write to a file instead of stdout |
| `--json <input>` | Output | Pass all params as one JSON object (file, inline, or `-` for stdin). Overrides individual flags. |
| `--explain` | Output | Print a plain-English explanation to stderr in addition to the auto-review |
| `--creator <address>` | Builder | Creator/sender address (`bb1` or `0x` form) |
| `--manager <address>` | Builder | Collection manager (`bb1` form) |
| `--simulate` | Builder | Also call the simulate endpoint and render gas and net balance changes (needs an [API key](../api/README.md#api-keys)). Different from `bb deploy --dry-run`, which simulates and exits. |
| `--events` | Builder | With `--simulate`, dump the full events array instead of the count |
| `--network`, `--mainnet`, `--testnet`, `--local`, `--url`, `--api-key` | Network | See [CLI](README.md#network-flags) |
| `--burner`, `--browser`, `--sign-only`, `--frontend-url`, `--no-open`, `--timeout`, `--expected-address`, `--fund`, `--fee`, `--fee-denom`, `--gas`, `--new`, `--reuse`, `--non-interactive`, `--poll-timeout`, `--port <n>` | Deploy | Broadcast inline instead of emitting JSON. See [Deploy](deploy.md). |

`--json-only` still works as a deprecated alias for `--quiet`.

### Metadata Modes

Every metadata-bearing builder accepts exactly one of two modes per entity:

1. `--uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json` when you already host the JSON.
2. `--name` + `--image` + `--description`. The CLI serializes them into the on-chain `customData` field. The BitBadges API, SDK, and site parse `customData` on read and show it as the resolved metadata, so no IPFS account is needed.

Approvals are text-only: `--name` + `--description`, no image. The CLI errors if neither mode is complete; there are no placeholder defaults. On-chain shape: [Collections](../token-standard/concepts/collections.md).

### Denoms and Amounts

`--denom` style flags accept a symbol (`BADGE`, `USDC`, `ATOM`, `OSMO`) or a canonical denom (`ubadge`, `ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8`). Amounts are display units when the denom is a symbol and base units when it is a raw denom. `--base-units` forces base units. `USDC` resolves to the canonical Injective-routed denom; `USDC.n` is the legacy denom. See [Supported Denoms](../chain/supported-denoms.md).

Durations accept `daily`, `monthly`, `annually`, shorthand such as `30d`, `24h`, `5m`, or ms-since-epoch.

### JSON Input

```bash
bb build vault --json '{"backingCoin":"USDC","uri":"ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json"}'
bb build vault --json ./params.json
echo '{"backingCoin":"USDC","uri":"ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json"}' | bb build vault --json -
```

Keys are the camelCase form of the flags.

## Collection Builders

### vault

```bash
bb build vault --backing-coin USDC --symbol vUSDC --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json \
  --daily-withdraw-limit 1000 --require-2fa 84 --emergency-recovery bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf
```

| Flag | Required | Description |
| --- | --- | --- |
| `--backing-coin <symbol>` | yes | `USDC`, `BADGE`, `ATOM`, `OSMO` |
| `--symbol <symbol>` | no | Display symbol, for example `vUSDC` |
| `--daily-withdraw-limit <n>` | no | Max daily withdrawal in display units |
| `--require-2fa <collectionId>` | no | Custom-2FA collection that gates withdrawals |
| `--emergency-recovery <address>` | no | Recovery address for emergency migration |

### smart-token

```bash
bb build smart-token --backing-coin USDC --symbol sUSDC --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json \
  --tradable --ai-agent-vault
```

| Flag | Required | Description |
| --- | --- | --- |
| `--backing-coin <symbol>` | yes | `USDC`, `BADGE`, `ATOM`, `OSMO` |
| `--symbol <symbol>` | no | Display symbol (default `v<backing>`) |
| `--tradable` | no | Add the "Liquidity Pools" standard tag |
| `--ai-agent-vault` | no | Add the "AI Agent Vault" standard tag (display hint) |
| `--allow-forceful-transfers` | no | Allow forceful post-mint transfers (off by default) |

Vault collections are Smart Tokens with the `cosmosCoinBackedPath` invariant. `bb build smart-account` was the old name.

### subscription

```bash
bb build subscription --interval monthly --price 10 --denom USDC \
  --recipient bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --tiers 3 --transferable \
  --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json
```

| Flag | Required | Description |
| --- | --- | --- |
| `--interval <duration>` | yes | `daily`, `monthly`, `annually`, or shorthand such as `30d` |
| `--price <amount>` | no | Price per interval in display units; use with `--denom` and `--recipient` |
| `--denom <symbol\|denom>` | no | Payment coin |
| `--recipient <address>` | no | Payout address |
| `--payouts <json>` | no | Several payouts: `[{"recipient":"bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d","amount":"7","denom":"USDC"},{"recipient":"bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf","amount":"3","denom":"USDC"}]` |
| `--tiers <n>` | no | Number of tiers (default `1`) |
| `--transferable` | no | Allow post-mint transfers between users |
| `--updatable-mint` | no | Keep the mint (faucet) approval editable so the price can change later. Off by default: the faucet is locked forever, which is what `bb check` requires to pass. Opting in makes `bb check` fail with one critical finding, on purpose |

There is no `bb build recurring-payment`. A subscriber's recurring approval derives from the live collection; use `bb subscriptions subscribe` or `bb subscriptions enable-renewal`.

### bounty

```bash
bb build bounty --amount 500 --denom USDC --verifier bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf \
  --recipient bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --submitter bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d \
  --expiration 30d --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json
```

| Flag | Required | Description |
| --- | --- | --- |
| `--amount <n>` | yes | Bounty amount in display units |
| `--denom <symbol\|denom>` | yes | Coin |
| `--verifier <address>` | yes | Address that accepts or denies |
| `--recipient <address>` | yes | Address paid on accept |
| `--submitter <address>` | yes | Address refunded on deny or expiry (usually the creator) |
| `--expiration <duration>` | no | Default `30d` |

### payment-request

```bash
bb build payment-request --amount 10 --denom USDC \
  --payer bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --recipient bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr --expiration 30d \
  --name "Service charge" --image ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/invoice.png \
  --context "Agent requests payment for the September report under the approved budget of 100 USDC per month."
```

| Flag | Required | Description |
| --- | --- | --- |
| `--amount <n>` | yes | Payment amount in display units |
| `--denom <symbol\|denom>` | yes | Coin |
| `--payer <address>` | yes | The human approver |
| `--recipient <address>` | yes | Agent or merchant |
| `--expiration <duration>` | no | Default `30d` |
| `--context <text>` | no | Rationale shown to the payer at approval time (100+ characters recommended). Used as the description when `--description` is not set. |

The inverse of `bounty`: no escrow up front. The payer approves and pays from their own wallet in one action.

### crowdfund

```bash
bb build crowdfund --goal 10000 --denom USDC --crowdfunder bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --deadline 30d \
  --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json
```

| Flag | Required | Description |
| --- | --- | --- |
| `--goal <n>` | yes | Funding goal in display units |
| `--denom <symbol\|denom>` | yes | Coin |
| `--crowdfunder <address>` | no | Receives funds on success and holds the progress balance that gates success or refund. Falls back to `--creator`; errors if neither is set. |
| `--deadline <duration>` | no | Default `30d` |

### auction

```bash
bb build auction --bid-deadline 7d --accept-window 7d --seller bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d \
  --name "Rare Item" --description "Limited edition" --image ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/1.png
```

| Flag | Required | Description |
| --- | --- | --- |
| `--bid-deadline <duration>` | no | Bidding window (default `7d`) |
| `--accept-window <duration>` | no | Accept window after the bid deadline (default `7d`) |
| `--seller <address>` | no | Only this address can accept the winning bid (default `--creator`) |

### product-catalog

```bash
bb build product-catalog --store-address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d \
  --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json \
  --products '[{"name":"Widget","price":25,"denom":"USDC","maxSupply":100},{"name":"Pass","price":5,"denom":"USDC","burn":true}]'
```

| Flag | Required | Description |
| --- | --- | --- |
| `--products <json>` | yes | Array, one object per SKU |
| `--store-address <address>` | yes | Every purchase routes `price * denom` here |

Product fields: `name` (required), `price` (display units, required), `denom` (required), `maxSupply` (omit or `0` for unlimited), `burn` (`true` burns on purchase), `uri`, `image`, `description`. One token ID per product; each product becomes a "Purchase" approval.

### prediction-market

```bash
bb build prediction-market --verifier bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf --denom USDC \
  --name "Will testnet return by 2027?" --description "Resolves YES if the BitBadges testnet is back online before 2027-01-01." \
  --image ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/market.png
```

| Flag | Required | Description |
| --- | --- | --- |
| `--verifier <address>` | no | Market resolver. `--resolver` is an alias. |
| `--denom <symbol\|denom>` | no | Payment coin (default `USDC`) |

### credit-token

```bash
bb build credit-token --payment-denom USDC --recipient bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d \
  --symbol CREDIT --tokens-per-unit 100 --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json
```

| Flag | Required | Description |
| --- | --- | --- |
| `--payment-denom <symbol\|denom>` | no | Payment coin. `--denom` is an alias. |
| `--recipient <address>` | yes | Payment recipient |
| `--symbol <symbol>` | no | Default `CREDIT` |
| `--tokens-per-unit <n>` | no | Tokens per 1 display unit of payment (default `100`) |

### custom-2fa

```bash
bb build custom-2fa --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --name "Demo 2FA Token" \
  --image ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/2fa.png --description "Short-lived 2FA token" --burnable
```

| Flag | Required | Description |
| --- | --- | --- |
| `--creator <address>` | yes | Manager. Only this address may mint; the builder errors without it. |
| `--burnable` | no | Allow burning |
| `--transferable` | no | Allow post-mint transfers |

Issue tokens afterwards with `bb custom-2fa mint`. The lifetime is encoded at mint time, so a raw mint without that command produces tokens that never expire. See [Standards](standards.md#custom-2fa).

### address-list

```bash
bb build address-list --name "Allowlist" --description "Approved addresses" \
  --image ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/list.png
```

Emits `MsgCreateAddressLists`. Takes the shared metadata flags only.

## Approval Builders

### intent

```bash
bb build intent --address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --collection-id 81 \
  --pay-denom USDC --pay-amount 100 --receive-denom BADGE --receive-amount 500 --expiration 30d
```

| Flag | Required | Description |
| --- | --- | --- |
| `--address <address>` | yes | Creator |
| `--collection-id <id>` | yes | Intent Exchange collection (mainnet `81`) |
| `--pay-denom`, `--pay-amount` | yes | What you send |
| `--receive-denom`, `--receive-amount` | yes | What you receive |
| `--expiration <when>` | no | Default `30d` |

Identical output to `bb intents create`.

### listing

```bash
bb build listing --address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --collection-id 1 --token-ids 4 \
  --price 50 --denom USDC --max-sales 1 --expiration 30d
```

| Flag | Required | Description |
| --- | --- | --- |
| `--address <address>` | yes | Seller |
| `--collection-id <id>` | yes | Collection |
| `--token-ids <range>` | yes | One token ID (`4` or `4-4`). Orderbook listings are single-token; a real range errors. |
| `--price <n>`, `--denom <symbol\|denom>` | yes | Asking price |
| `--max-sales <n>` | no | Default `1` |
| `--expiration <when>` | no | Default `30d` |

Identical output to `bb nfts list`.

### bid

```bash
bb build bid --address bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --collection-id 1 --token-ids 4 --price 40 --denom USDC --expiration 7d
bb build bid --address bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --collection-id 1 --price 40 --denom USDC          # collection-wide
```

| Flag | Required | Description |
| --- | --- | --- |
| `--address <address>` | yes | Bidder |
| `--collection-id <id>` | yes | Collection |
| `--token-ids <id>` | no | One token ID. Omit for a collection-wide bid. |
| `--token-amount <n>` | no | Default `1` |
| `--price <n>`, `--denom <symbol\|denom>` | yes | Bid price |
| `--expiration <when>` | no | Default `7d` |

Identical output to `bb nfts bid`.

### pm-sell-intent and pm-buy-intent

```bash
bb build pm-sell-intent --address bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --collection-id 12 --token yes --amount 10 --price 50 --denom USDC
bb build pm-buy-intent  --address bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --collection-id 12 --token no  --amount 10 --price 50 --denom USDC
```

| Flag | Required | Description |
| --- | --- | --- |
| `--address <address>` | yes | Seller or buyer |
| `--collection-id <id>` | yes | Prediction market collection |
| `--token <yes\|no>` | yes | Outcome token |
| `--amount <n>` | yes | Number of outcome tokens |
| `--price <n>`, `--denom <symbol\|denom>` | yes | Total payment in display units |
| `--expiration <when>` | no | Default `24h` |

## Coin and Token Transfers

### send

```bash
bb build send --from bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --to bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 1.5 --denom BADGE
bb build send --from bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --to bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 1500000000 --denom ubadge --base-units
```

| Flag | Required | Description |
| --- | --- | --- |
| `--from <address>`, `--to <address>` | yes | `bb1` or `0x` form, auto-normalized |
| `--amount <n>` | yes | Display units for symbols, base units for raw denoms |
| `--denom <symbol-or-denom>` | yes | Coin |
| `--base-units` | no | Treat `--amount` as base units |

Use `send` for fee top-ups or returning dust. For BitBadges token transfers use `transfer`.

### transfer

```bash
bb build transfer                                                        # interactive walkthrough
bb build transfer --collection-id 1 --from bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --to bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 5
bb build transfer --yes --collection-id 1 --from Mint --to bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue      # non-interactive
```

Needs an API key. The walkthrough fetches the collection, the sender's outgoing approvals, and the recipient's incoming approvals, then renders a numbered list grouped by level (collection, outgoing, incoming) with `predetermined`, `payment`, `must-own`, and `backed` tags. It asks:

1. Which approvals to set as `prioritizedApprovals` (comma-separated indices, blank to skip).
2. For each level with a pick, whether to set `onlyCheckPrioritized<Level>Approvals: true`.
3. If a pick has `predeterminedBalances`, whether to set `precalculateBalancesFromApproval` and an optional `scalingMultiplier`.
4. If not precalculated, the per-recipient `amount` and `tokenIds`.

If a picked approval needs a coin payment or prerequisite ownership, a "Heads up" line lists those conditions before the emit.

| Flag | Description |
| --- | --- |
| `--collection-id <id>` | Prompts if omitted |
| `--from <address>` | A `bb1` or `0x` address, or `Mint` |
| `--to <address>` | Cannot be `Mint` |
| `--amount <n>` | Per-recipient amount when not precalculated (`1` with `--yes`) |
| `--token-ids <spec>` | `1-5`, `1,3,5`, or `all` (`all` with `--yes`) |
| `-y`, `--yes` | Skip every prompt: no prioritized approvals, no precalc, defaults |

The output flows through the same pipeline as the collection builders, so `--simulate`, `--explain`, and `--browser` behave the same. `--burner` refuses transfers (it is create-only).

## Behavior

- Output is one envelope on stdout with the message in `data` and validation, review, simulate, and resolved-metadata reports in `meta`. The human-readable auto-review prints on stderr; `--quiet` silences it.
- `bb deploy` and `bb preview` unwrap the envelope when reading stdin or a file.
- Sign and broadcast with [Deploy](deploy.md), the [Signing Client](../sdk/transactions/signing-client.md), or the site's review flow through `bb preview --open`.

## Related

- [Create a Collection](../guides/create-a-collection.md)
- [Analyze](analyze.md)
- [Deploy](deploy.md)
- [Standards](standards.md)
