---
description: "End-user verbs for every BitBadges standard: list, show, status, and the action that emits a ready-to-sign message."
---

# Standards commands

Each standard has a command group with read verbs (`list`, `show`, `status`) that query the BitBadges API and action verbs that emit a message to pipe into `bb deploy`. The create side of each standard lives under [Build](build.md).

## Example

```bash
bb auctions list --open
bb auctions show 42
bb auctions status 42                                   # must be "bidding" before place-bid
bb auctions place-bid 42 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 50 --denom USDC --quiet \
  | bb deploy --browser --msg-stdin
```

`bb auctions list --open` on mainnet with no open auctions returns an empty array in the envelope:

```json
{ "ok": true, "data": [], "warnings": [], "error": null }
```

Action verbs accept the [network flags](README.md#network-flags), `--condensed`, `--output-file`, and the [deploy flags](deploy.md) (`--browser`, `--burner`, `--sign-only`, and the rest) to broadcast inline instead of emitting JSON. Amount flags take display units for symbol denoms and base units for raw denoms; `--base-units` forces base units. Addresses marked "strict" must be in `bb1` form; run `bb account convert` for `0x`.

{% hint style="info" %}
Ask your agent. The read verbs map onto `query_collection` and `analyze_collection`; the action verbs onto `build_transfer` and the approval builders. "Place a 50 USDC bid on auction 42 from bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue and give me the link to sign" covers the example above.
{% endhint %}

| Group | Verbs |
| --- | --- |
| `auctions` | `list`, `show`, `status`, `place-bid`, `cancel-bid`, `accept-bid`, `build` |
| `bounties` | `list`, `show`, `status`, `accept`, `deny`, `claim-refund`, `build` |
| `credit-tokens` | `list`, `show`, `purchase`, `build` |
| `crowdfunds` (alias `crowdfund`) | `list`, `show`, `status`, `contribute`, `withdraw`, `refund`, `build` |
| `custom-2fa` | `mint` |
| `dynamic-stores` | `create`, `update`, `delete`, `set-value`, `add`, `remove`, `show`, `get-value`, `list-values`, `batch`, `by-creator`, `search` |
| `intents` | `list`, `show`, `create`, `fill`, `cancel`, `build` |
| `nfts` | `bid`, `list`, `cancel`, `buy`, `sell`, `orders`, `history` |
| `pay-requests` | `list`, `show`, `status`, `pay`, `deny`, `build` |
| `prediction-markets` | `list`, `show`, `status`, `buy-yes`, `buy-no`, `sell-yes`, `sell-no`, `cancel`, `deposit`, `redeem`, `resolve`, `build` |
| `products` | `list`, `show`, `purchase`, `build` |
| `smart-tokens` | `list`, `show`, `status`, `deposit`, `withdraw`, `build` |
| `subscriptions` | `list`, `status`, `claim`, `enable-renewal`, `cancel`, `subscribe`, `charge-due`, `build` |

`build` in a group forwards to `bb build <type>` with the same flags.

## Status values

Read `status` before acting; most action verbs throw when the standard is in an incompatible state.

| Group | Values |
| --- | --- |
| `auctions` | `bidding`, `accepting`, `sold`, `expired` |
| `bounties` | `pending`, `accepted`, `denied`, `expired` (plus an `expireExecuted` flag) |
| `crowdfunds` | `active`, `funded`, `goal-met-pending-settle`, `expired-refunding` |
| `pay-requests` | `pending`, `paid`, `denied`, `expired` |
| `prediction-markets` | `active`, `closed`, `resolved-yes`, `resolved-no`, `resolved-push` |
| `subscriptions` | per tier: is-subscribed, has-future-approval, next charge time |

In the examples below alice (`bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d`) creates and manages, bob (`bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue`) buys and bids, carol (`bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf`) verifies and resolves.

## auctions

```bash
bb auctions list --open
bb auctions show 42
bb auctions status 42
bb auctions place-bid 42 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 50 --denom USDC
bb auctions place-bid 42 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 50000000 --denom USDC --base-units --approval-id bid-bob-1
bb auctions cancel-bid 42 bid-bob-1 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue
bb auctions accept-bid 42 bid-bob-1 --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --bidder bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue
```

`place-bid` emits `MsgSetIncomingApproval`; `cancel-bid` emits `MsgDeleteIncomingApproval`; `accept-bid` (seller only) emits `MsgTransferTokens` that mints the prize to the bidder and takes payment.

## bounties

```bash
bb bounties list --mine bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --open
bb bounties show 43
bb bounties status 43
bb bounties accept 43 --creator bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf
bb bounties deny 43 --creator bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf
bb bounties claim-refund 43 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue
```

`accept` and `deny` are verifier actions that emit a `{messages: [MsgCastVote, MsgTransferTokens]}` wrapper. `claim-refund` is callable by anyone after the deadline; funds always go to the submitter.

## credit-tokens

```bash
bb credit-tokens list 44
bb credit-tokens show 44
bb credit-tokens purchase 44 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --units 10 --tier purchase-standard
bb credit-tokens purchase --api-credits --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --units 10     # BitBadges' own API-credits collection
```

Credits are non-transferable: sign with the wallet that should hold them (`--browser` pins the signer to `--creator`). `--api-credits` is a shortcut for BitBadges' own API-credits collection on mainnet or local and is mutually exclusive with the positional ID. Tier amounts use `bigint`.

## crowdfunds

```bash
bb crowdfunds list --mine bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --open
bb crowdfunds show 45
bb crowdfunds status 45
bb crowdfunds contribute 45 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 25
bb crowdfunds withdraw 45 --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
bb crowdfunds refund 45 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 25
```

`contribute` and `withdraw` emit two-message transactions. `refund` is a single `MsgTransferTokens` after the deadline when the goal was not met.

## custom-2fa

```bash
bb custom-2fa mint 84 --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --to bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue | bb deploy --browser --msg-stdin
bb custom-2fa mint 84 --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d \
  --to bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue,bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf --expiration 10m --browser
```

| Flag | Required | Description |
| --- | --- | --- |
| `--creator <address>` | yes | Manager (strict). Only the manager may mint. |
| `--to <addresses>` | yes | Comma-separated `bb1` recipients |
| `--expiration <when>` | no | Lifetime: `5m`, `10m`, or ms-since-epoch (default `5m`) |

Emits `MsgTransferTokens`. The lifetime is encoded at mint time; broadcasting a raw mint without this command yields tokens that never expire. Create the collection with `bb build custom-2fa`.

{% hint style="warning" %}
Chain releases before the forwarder fix do not forward `custom-2fa`. If `bb custom-2fa` prints unknown command, run `bitbadges-cli custom-2fa mint` with the same arguments.
{% endhint %}

## dynamic-stores

```bash
bb dynamic-stores create --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --default-value false \
  --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json --custom-data "kyc-passed"
bb dynamic-stores update 1 --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --default-value true --global-enabled false
bb dynamic-stores delete 1 --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
bb dynamic-stores set-value 1 bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue true --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
bb dynamic-stores add 1 bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d        # bulk true
bb dynamic-stores remove 1 bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d     # bulk false
bb dynamic-stores show 1
bb dynamic-stores get-value 1 bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue
bb dynamic-stores list-values 1
bb dynamic-stores batch 1 2 3
bb dynamic-stores by-creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
bb dynamic-stores search kyc
```

Dynamic stores are on-chain address-to-boolean maps used in approval criteria. `add` and `remove` emit multi-message transactions of `MsgSetDynamicStoreValue`. `--global-enabled false` is the kill switch. See [Dynamic store challenges](../token-standard/approval-criteria/dynamic-store-challenges.md).

## intents

```bash
bb intents list --mine bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --pay-denom USDC --receive-denom BADGE --collection-id 81
bb intents show intent-alice-1
bb intents create --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --pay-denom USDC --pay-amount 100 --receive-denom BADGE --receive-amount 500 --expiration 30d --approval-id intent-alice-1
bb intents fill intent-alice-1 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --approver bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
bb intents cancel intent-alice-1 --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
```

Intents are OTC offers ("I pay X if you send me Y") stored as outgoing approvals on the Intent Exchange collection (mainnet `81`; `--collection-id` overrides). `create` emits `MsgSetOutgoingApproval`. `fill` emits a three-message transaction (mint vehicle, fire the creator's outgoing approval, burn vehicle). `cancel` emits `MsgDeleteOutgoingApproval`.

## nfts

```bash
bb nfts bid 1 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --price 40 --denom USDC --token-id 4 --token-amount 1 --max-fills 1 --expiration 7d
bb nfts list 1 --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --token-id 4 --price 50 --denom USDC --token-amount 1 --max-sales 1 --expiration 30d
bb nfts cancel 1 listing-alice-4 --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --side listing
bb nfts buy 1 4 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --approval-id listing-alice-4 --seller bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --token-amount 1
bb nfts sell 1 4 --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --approval-id bid-bob-4 --bidder bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --token-amount 1
bb nfts orders 1 4 --denom USDC --mine bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --collection-offers
bb nfts history 1 4 --limit 50
```

Orderbook trading on individual tokens. Omit `--token-id` on `bid` for a collection-wide bid. `bid` emits `MsgSetIncomingApproval`; `list` emits `MsgSetOutgoingApproval`. `--creator` on `bid` and `list` is strict.

## pay-requests

```bash
bb pay-requests list --mine bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --open
bb pay-requests show 46
bb pay-requests status 46
bb pay-requests pay 46 --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
bb pay-requests deny 46 --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d
```

`pay` and `deny` emit `MsgTransferTokens` against the matching approval. Every action validates conformance before emitting.

## prediction-markets

```bash
bb prediction-markets list --open
bb prediction-markets show 12
bb prediction-markets status 12
bb prediction-markets buy-yes 12 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --token-amount 10 --payment-amount 5 --denom USDC --expiration 24h --approval-id buy-yes-bob-1
bb prediction-markets sell-no 12 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --token-amount 10 --payment-amount 5 --denom USDC
bb prediction-markets cancel 12 buy-yes-bob-1 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --side buy
bb prediction-markets deposit 12 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 10
bb prediction-markets redeem 12 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --state yes-wins --yes-balance 10
bb prediction-markets redeem 12 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --state active --pair-amount 10
bb prediction-markets resolve 12 --creator bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf --outcome yes
```

YES is token ID 1 and NO is token ID 2. `buy-*` emits `MsgSetIncomingApproval`; `sell-*` emits `MsgSetOutgoingApproval`. `--token-amount` is always base units of the token; `--payment-amount` follows the denom rule. `deposit` mints YES+NO pairs 1:1 against the deposit denom. `resolve` (verifier only) emits `MsgCastVote`, two messages for `push`. `--denom` also accepts a `badgeslp:*` alias.

## products

```bash
bb products list 47
bb products show 47
bb products purchase 47 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --token-id 2
```

`purchase` buys one unit and emits `MsgTransferTokens`.

## smart-tokens

```bash
bb smart-tokens list
bb smart-tokens show 88
bb smart-tokens status 88
bb smart-tokens deposit 88 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 10 | bb deploy --browser --msg-stdin
bb smart-tokens deposit 88 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 10000000 --base-units | bb deploy --browser --msg-stdin
bb smart-tokens withdraw 88 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 5 | bb deploy --browser --msg-stdin
```

`list` filters to collections that pass the conformance validator. `show` renders backing address, denom, deposit and withdraw approval IDs, and standards. `status` returns the collection ID, backing denom, and the `tradable` and `aiAgentVault` flags. `deposit` emits `MsgTransferTokens` that mints Smart Token units; the chain routes the backing coin into the backing alias. `withdraw` burns units and releases the backing coin. Smart Tokens are the primitive behind vaults, AI agent vaults, and tradable wrapped tokens; see [Smart tokens and vaults](../guides/smart-tokens-and-vaults.md).

## subscriptions

```bash
bb subscriptions list 3
bb subscriptions status 3 --address bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue
bb subscriptions claim 3 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --tier tier-1
bb subscriptions enable-renewal 3 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --tier tier-1 --tip 1000 --approval-id renew-bob-tier-1
bb subscriptions cancel 3 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --tier tier-1
bb subscriptions subscribe 3 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --tier tier-1 --tip 1000
bb subscriptions charge-due 3 --creator bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr --tier tier-1 --dry-run
```

`claim` emits one `MsgTransferTokens` through the faucet. `enable-renewal` and `cancel` emit `MsgUpdateUserApprovals` that add or remove the recurring approval and preserve other recurring approvals. `subscribe` is claim plus enable-renewal in one wrapper (the site's Subscribe button). `charge-due` is the operator side: one `MsgTransferTokens` per subscriber whose interval is due; pipe into `bb deploy --with-keyring --from agent-wallet`. `--tier` is required on multi-tier collections.

## Signing the output

```bash
bb auctions place-bid 42 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 50 --denom USDC | bb deploy --browser --msg-stdin              # browser wallet
bb auctions place-bid 42 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 50 --denom USDC > bid.json \
  && bb deploy --with-keyring --from bob --exec --msg-file bid.json
bb auctions place-bid 42 --creator bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --amount 50 --denom USDC \
  | bb deploy --gen-payload --from bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue      # custom signer
```

`--burner` is create-only and refuses these messages. Every verb has `--help` with required flags first, then options grouped by `Metadata`, `Output`, `Network`, `Builder`, `Deploy`.

## Related

- [Build](build.md)
- [Deploy](deploy.md)
- [Swap](swap.md)
- [Skills](../agents/skills/README.md)
