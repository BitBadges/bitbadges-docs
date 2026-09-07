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
bb auctions place-bid 42 --creator bb1me... --amount 50 --denom USDC --quiet \
  | bb deploy --browser --msg-stdin
```

Action verbs accept the [network flags](README.md#network-flags), `--condensed`, `--output-file`, and the [deploy flags](deploy.md) (`--browser`, `--burner`, `--sign-only`, ...) to broadcast inline instead of emitting JSON. Amount flags take display units for symbol denoms and base units for raw denoms; `--base-units` forces base units. Addresses marked "strict" must be `bb1...`; run `bb account convert` for `0x`.

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

## auctions

```bash
bb auctions list [--open]
bb auctions show <collection-id>
bb auctions status <collection-id>
bb auctions place-bid <collection-id> --creator bb1me... --amount 50 --denom USDC [--base-units] [--approval-id <id>]
bb auctions cancel-bid <collection-id> <approval-id> --creator bb1me...
bb auctions accept-bid <collection-id> <bid-approval-id> --creator bb1seller... --bidder bb1me...
```

`place-bid` emits `MsgSetIncomingApproval`; `cancel-bid` emits `MsgDeleteIncomingApproval`; `accept-bid` (seller only) emits `MsgTransferTokens` that mints the prize to the bidder and takes payment.

## bounties

```bash
bb bounties list [--mine bb1me...] [--open]
bb bounties show <collection-id>
bb bounties status <collection-id>
bb bounties accept <collection-id> --creator bb1verifier...
bb bounties deny <collection-id> --creator bb1verifier...
bb bounties claim-refund <collection-id> --creator bb1anyone...
```

`accept` and `deny` are verifier actions that emit a `{messages: [MsgCastVote, MsgTransferTokens]}` wrapper. `claim-refund` is callable by anyone after the deadline; funds always go to the submitter.

## credit-tokens

```bash
bb credit-tokens list <collection-id>
bb credit-tokens show <collection-id>
bb credit-tokens purchase <collection-id> --creator bb1me... --units 10 [--tier <approvalId>]
bb credit-tokens purchase --api-credits --creator bb1me... --units 10     # BitBadges' own API-credits collection
```

Credits are non-transferable: sign with the wallet that should hold them (`--browser` pins the signer to `--creator`). `--api-credits` is a shortcut for BitBadges' own API-credits collection on mainnet or local and is mutually exclusive with the positional ID. Tier amounts use `bigint`.

## crowdfunds

```bash
bb crowdfunds list [--mine bb1cf...] [--open]
bb crowdfunds show <collection-id>
bb crowdfunds status <collection-id>
bb crowdfunds contribute <collection-id> --creator bb1me... --amount 25 [--base-units]
bb crowdfunds withdraw <collection-id> --creator bb1crowdfunder...
bb crowdfunds refund <collection-id> --creator bb1me... --amount 25 [--base-units]
```

`contribute` and `withdraw` emit two-message transactions. `refund` is a single `MsgTransferTokens` after the deadline when the goal was not met.

## custom-2fa

```bash
bb custom-2fa mint 84 --creator bb1mgr... --to bb1user... | bb deploy --browser --msg-stdin
bb custom-2fa mint 84 --creator bb1mgr... --to bb1a...,bb1b... --expiration 10m --browser
```

| Flag | Required | Description |
| --- | --- | --- |
| `--creator <address>` | yes | Manager (strict). Only the manager may mint. |
| `--to <addresses>` | yes | Comma-separated `bb1...` recipients |
| `--expiration <when>` | no | Lifetime: `5m`, `10m`, or ms-since-epoch (default `5m`) |

Emits `MsgTransferTokens`. The lifetime is encoded at mint time; broadcasting a raw mint without this command yields tokens that never expire. Create the collection with `bb build custom-2fa`.

{% hint style="warning" %}
The chain binary does not forward `custom-2fa`. Run it as `bitbadges-cli custom-2fa mint ...` until the forwarder list is updated.
{% endhint %}

## dynamic-stores

```bash
bb dynamic-stores create --creator bb1me... [--default-value false] [--uri <uri>] [--custom-data <text>]
bb dynamic-stores update <store-id> --creator bb1me... [--default-value true] [--global-enabled false] [--uri <uri>] [--custom-data <text>]
bb dynamic-stores delete <store-id> --creator bb1me...
bb dynamic-stores set-value <store-id> <address> <true|false> --creator bb1me...
bb dynamic-stores add <store-id> <addresses...> --creator bb1me...        # bulk true
bb dynamic-stores remove <store-id> <addresses...> --creator bb1me...     # bulk false
bb dynamic-stores show <store-id>
bb dynamic-stores get-value <store-id> <address>
bb dynamic-stores list-values <store-id> [--bookmark <b>]
bb dynamic-stores batch <store-ids...>
bb dynamic-stores by-creator <address>
bb dynamic-stores search <name>
```

Dynamic stores are on-chain address-to-boolean maps used in approval criteria. `add` and `remove` emit multi-message transactions of `MsgSetDynamicStoreValue`. `--global-enabled false` is the kill switch. See [Dynamic store challenges](../token-standard/approval-criteria/dynamic-store-challenges.md).

## intents

```bash
bb intents list [--mine bb1me...] [--pay-denom USDC] [--receive-denom BADGE] [--collection-id 81]
bb intents show <approval-id>
bb intents create --creator bb1me... --pay-denom USDC --pay-amount 100 --receive-denom BADGE --receive-amount 500 [--expiration 30d] [--approval-id <id>]
bb intents fill <approval-id> --creator bb1me... [--approver bb1creator...]
bb intents cancel <approval-id> --creator bb1me...
```

Intents are OTC offers ("I pay X if you send me Y") stored as outgoing approvals on the Intent Exchange collection (mainnet `81`; `--collection-id` overrides). `create` emits `MsgSetOutgoingApproval`. `fill` emits a three-message transaction (mint vehicle, fire the creator's outgoing approval, burn vehicle). `cancel` emits `MsgDeleteOutgoingApproval`.

## nfts

```bash
bb nfts bid <collection-id> --creator bb1me... --price 40 --denom USDC [--token-id 4] [--token-amount 1] [--max-fills 1] [--expiration 7d]
bb nfts list <collection-id> --creator bb1me... --token-id 4 --price 50 --denom USDC [--token-amount 1] [--max-sales 1] [--expiration 30d]
bb nfts cancel <collection-id> <approval-id> --creator bb1me... --side <bid|listing>
bb nfts buy <collection-id> <token-id> --creator bb1me... --approval-id <listing-id> --seller bb1seller... [--token-amount 1]
bb nfts sell <collection-id> <token-id> --creator bb1me... --approval-id <bid-id> --bidder bb1bidder... [--token-amount 1]
bb nfts orders <collection-id> <token-id> [--denom USDC] [--mine bb1me...] [--collection-offers]
bb nfts history <collection-id> <token-id> [--limit 50]
```

Orderbook trading on individual tokens. Omit `--token-id` on `bid` for a collection-wide bid. `bid` emits `MsgSetIncomingApproval`; `list` emits `MsgSetOutgoingApproval`. `--creator` on `bid` and `list` is strict.

## pay-requests

```bash
bb pay-requests list [--mine bb1payer...] [--open]
bb pay-requests show <collection-id>
bb pay-requests status <collection-id>
bb pay-requests pay <collection-id> --creator bb1payer...
bb pay-requests deny <collection-id> --creator bb1payer...
```

`pay` and `deny` emit `MsgTransferTokens` against the matching approval. Every action validates conformance before emitting.

## prediction-markets

```bash
bb prediction-markets list [--open]
bb prediction-markets show <collection-id>
bb prediction-markets status <collection-id>
bb prediction-markets buy-yes <collection-id> --creator bb1me... --token-amount 10 --payment-amount 5 --denom USDC [--expiration 24h] [--approval-id <id>]
bb prediction-markets sell-no <collection-id> --creator bb1me... --token-amount 10 --payment-amount 5 --denom USDC
bb prediction-markets cancel <collection-id> <approval-id> --creator bb1me... --side <buy|sell>
bb prediction-markets deposit <collection-id> --creator bb1me... --amount 10
bb prediction-markets redeem <collection-id> --creator bb1me... --state <active|push|yes-wins|no-wins> [--pair-amount 10] [--yes-balance <n>] [--no-balance <n>]
bb prediction-markets resolve <collection-id> --creator bb1verifier... --outcome <yes|no|push>
```

YES is token ID 1 and NO is token ID 2. `buy-*` emits `MsgSetIncomingApproval`; `sell-*` emits `MsgSetOutgoingApproval`. `--token-amount` is always base units of the token; `--payment-amount` follows the denom rule. `deposit` mints YES+NO pairs 1:1 against the deposit denom. `resolve` (verifier only) emits `MsgCastVote`, two messages for `push`. `--denom` also accepts a `badgeslp:*` alias.

## products

```bash
bb products list <collection-id>
bb products show <collection-id>
bb products purchase <collection-id> --creator bb1me... --token-id 2
```

`purchase` buys one unit and emits `MsgTransferTokens`.

## smart-tokens

```bash
bb smart-tokens list
bb smart-tokens show <collection-id>
bb smart-tokens status <collection-id>
bb smart-tokens deposit 88 --creator bb1me... --amount 10 | bb deploy --browser --msg-stdin
bb smart-tokens deposit 88 --creator bb1me... --amount 10000000 --base-units | bb deploy --browser --msg-stdin
bb smart-tokens withdraw 88 --creator bb1me... --amount 5 | bb deploy --browser --msg-stdin
```

`list` filters to collections that pass the conformance validator. `show` renders backing address, denom, deposit and withdraw approval IDs, and standards. `status` returns the collection ID, backing denom, and the `tradable` and `aiAgentVault` flags. `deposit` emits `MsgTransferTokens` that mints Smart Token units; the chain routes the backing coin into the backing alias. `withdraw` burns units and releases the backing coin. Smart Tokens are the primitive behind vaults, AI agent vaults, and tradable wrapped tokens; see [Smart tokens and vaults](../guides/smart-tokens-and-vaults.md).

## subscriptions

```bash
bb subscriptions list <collection-id>
bb subscriptions status <collection-id> --address bb1me...
bb subscriptions claim <collection-id> --creator bb1me... [--tier <approvalId>]
bb subscriptions enable-renewal <collection-id> --creator bb1me... [--tier <approvalId>] [--tip <ubadge>] [--approval-id <id>]
bb subscriptions cancel <collection-id> --creator bb1me... [--tier <approvalId>]
bb subscriptions subscribe <collection-id> --creator bb1me... [--tier <approvalId>] [--tip <ubadge>]
bb subscriptions charge-due <collection-id> --creator bb1bot... [--tier <approvalId>] [--dry-run]
```

`claim` emits one `MsgTransferTokens` through the faucet. `enable-renewal` and `cancel` emit `MsgUpdateUserApprovals` that add or remove the recurring approval and preserve other recurring approvals. `subscribe` is claim plus enable-renewal in one wrapper (the site's Subscribe button). `charge-due` is the operator side: one `MsgTransferTokens` per subscriber whose interval is due; pipe into `bb deploy --with-keyring --from <bot>`. `--tier` is required on multi-tier collections.

## Signing the output

```bash
bb auctions place-bid 42 ... | bb deploy --browser --msg-stdin              # browser wallet
bb auctions place-bid 42 ... > bid.json && bb deploy --with-keyring --from mykey --exec --msg-file bid.json
bb auctions place-bid 42 ... | bb deploy --gen-payload --from bb1me...      # custom signer
```

`--burner` is create-only and refuses these messages. Every verb has `--help` with required flags first, then options grouped by `Metadata`, `Output`, `Network`, `Builder`, `Deploy`.

## Related

- [Build](build.md)
- [Deploy](deploy.md)
- [Swap](swap.md)
- [Skills](../agents/skills/README.md)
