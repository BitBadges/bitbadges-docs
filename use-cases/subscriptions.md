---
description: "Sell access that renews on a schedule and expires on its own. One mint approval with a duration and a coin payment replaces the billing service."
---

# Subscriptions

A subscription is a token whose ownership ends at a timestamp. The mint approval sets the price, the payout address, and the period length. Each claim charges the subscriber and mints one period of ownership that starts now. When the period ends the balance is gone, so "is this user subscribed" is one balance query at the current time.

Renewal is a user-level approval the subscriber sets once. A bot, the issuer, or anyone can mint the next period through it; the chain charges the subscriber only within the terms they signed.

## Create with Your AI

[Set up the BitBadges builder](../agents/setup.md), then ask:

```text
Hey Claude, create me a 5 ATOM / month subscription.
```

The agent gathers your collection name and wallet addresses, builds the payment and ownership rules, checks the transaction, and gives you a review link. The monthly preset uses 30 days. Review and sign with your wallet; subscribers authorize renewal separately. Follow [Your First Collection](../start/first-collection.md) for the full walkthrough, or continue below for the underlying fields.

## What Makes It Work

| Requirement | Token-standard primitive |
| --- | --- |
| Access ends on its own | `ownershipTimes` on the balance. See [Balances](../token-standard/concepts/balances.md) |
| One period per claim, starting now | `predeterminedBalances.incrementedBalances.durationFromTimestamp` with `allowOverrideTimestamp: true`. See [Predetermined Balances](../token-standard/approval-criteria/predetermined-balances.md) |
| Charge on every claim | `coinTransfers` on the mint approval, paid by the initiator. See [Coin Transfers](../token-standard/approval-criteria/coin-transfers.md) |
| Auto-renew without a card on file | The subscriber's own incoming approval, so a renewal bot can only mint and charge within those terms |
| Tiers | One faucet approval per token ID, each with its own price |
| Price cannot be changed under a subscriber | `canUpdateCollectionApprovals` locked for the faucet approval. See [Permissions](../token-standard/concepts/permissions.md) |

## The Fields That Matter

```json
{
  "approvalId": "subscription-tier-1",
  "fromListId": "Mint",
  "toListId": "All",
  "initiatedByListId": "All",
  "tokenIds": [{ "start": "1", "end": "1" }],
  "approvalCriteria": {
    "predeterminedBalances": {
      "incrementedBalances": {
        "startBalances": [{ "amount": "1", "tokenIds": [{ "start": "1", "end": "1" }], "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }] }],
        "durationFromTimestamp": "2592000000",
        "allowOverrideTimestamp": true
      },
      "orderCalculationMethod": { "useOverallNumTransfers": true }
    },
    "coinTransfers": [
      { "to": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d", "coins": [{ "amount": "10000000", "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8" }] }
    ],
    "overridesFromOutgoingApprovals": true,
    "overridesToIncomingApprovals": false
  }
}
```

:::widget{name="collection-card" caption="The subscription on the browse grid: the faucet's price and interval show as the base price."}
{
  "image": "/widgets/samples/membership.png", "collectionId": 3,
  "name": "Demo Membership",
  "standards": [
    "Subscriptions"
  ],
  "price": "10 USDC / month",
  "priceLabel": "Base price",
  "manager": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"
}
:::

`durationFromTimestamp: "2592000000"` is 30 days in milliseconds. `overridesToIncomingApprovals` stays `false` on purpose: the subscriber's incoming approval is what says "you may charge me again".

```bash
bb build subscription --interval monthly --price 10 --denom USDC \
  --recipient bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d \
  --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json
```

This emits a `Subscriptions` collection with the faucet approval above, `autoApproveAllIncomingTransfers: true` as the default for new holders, and the faucet locked so the price cannot move.

## Variations

- `--tiers 3` creates token IDs 1 to 3 with one faucet each. Gate content by tier with [Token-Gated Access](token-gated-access.md).
- `--transferable` adds a post-mint approval so a subscription can be gifted or resold. Omit it for a personal license.
- `--payouts` splits every charge across several recipients in one denom, for a revenue share.
- `--interval 7d` or `annually` changes the period. The chain accepts any millisecond duration.
- Cancellation on the provider side: leave a manager override approval in place and revoke by forceful transfer, or keep `noForcefulPostMintTransfers: true` so nobody can.

## Build It

- Skill: [Subscription](../agents/skills/subscription.md)
- Guide: [Subscriptions and Time-Based Tokens](../guides/subscriptions-and-time-based-tokens.md)
- CLI: [`bb build subscription`](../cli/build.md#subscription), then `bb subscriptions subscribe`, `enable-renewal`, and `charge-due` from [Standards](../cli/standards.md#subscriptions)

```text
Load the subscription skill. Build a subscription that costs 5 USDC per month paid to bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d, non-transferable, with the price locked forever. Validate, review, simulate, then give me the review link.
```
