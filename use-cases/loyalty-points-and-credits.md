---
description: "Sell prepaid credits at a fixed exchange rate, or pay a reward for every completed quest. Soulbound fungible tokens with a coin transfer on the mint approval."
---

# Loyalty Points and Credits

A credit token is a fungible, non-transferable balance a user buys at a fixed rate: 1 USDC mints 100 credits, 0.5 USDC mints 50. The mint approval carries the price and `allowAmountScaling`, so one approval serves every purchase size. There is no post-mint approval, so credits cannot be resold; the app debits them off-chain and reconciles to the on-chain purchase record.

A quest token is the reverse flow. The issuer funds an escrow with `reward * maxClaims`, and each claimant who passes the gate mints one token and receives the reward coin in the same transaction.

## What Makes It Work

| Requirement | Token-standard primitive |
| --- | --- |
| Fixed exchange rate at any size | `predeterminedBalances` with `startBalances.amount` = credits per unit and `allowAmountScaling: true`. See [Predetermined Balances](../token-standard/approval-criteria/predetermined-balances.md) |
| Pay per unit | `coinTransfers` of `"1"` base unit of the payment denom per scaled step. See [Coin Transfers](../token-standard/approval-criteria/coin-transfers.md) |
| Cannot be transferred or sold | No `!Mint` approval. `noForcefulPostMintTransfers: true` |
| Displays as a balance with decimals | An alias path with the payment denom's decimals. See [Alias Denoms](../token-standard/ibc/alias-denoms.md) |
| Reward paid on claim | `coinTransfers` with `overrideFromWithApproverAddress: true` (escrow pays) and `overrideToWithInitiator: true` (claimant receives) |
| One claim per person, capped total | `merkleChallenges` with `maxUsesPerLeaf: "1"` and `maxNumTransfers.overallMaxNumTransfers`. See [Merkle Challenges](../token-standard/approval-criteria/merkle-challenges.md) |

## The Fields That Matter

The credit mint approval at 100 credits per USDC:

```json
{
  "approvalId": "credit-scaled",
  "fromListId": "Mint",
  "toListId": "All",
  "initiatedByListId": "All",
  "tokenIds": [{ "start": "1", "end": "1" }],
  "approvalCriteria": {
    "predeterminedBalances": {
      "incrementedBalances": {
        "startBalances": [{ "amount": "100", "tokenIds": [{ "start": "1", "end": "1" }], "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }] }],
        "allowAmountScaling": true,
        "maxScalingMultiplier": "18446744073709551615"
      }
    },
    "coinTransfers": [{ "to": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d", "coins": [{ "amount": "1", "denom": "ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701" }] }],
    "overridesFromOutgoingApprovals": true,
    "mustPrioritize": true
  }
}
```

`amount: "1"` is one micro-USDC. A user who mints 1000000 credits pays 10000 micro-USDC, which is 0.01 USDC, so the displayed rate is 100 credits per 0.000001 USDC at base units; the alias path makes the wallet show it as intended.

```bash
bb build credit-token --payment-denom USDC --recipient bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d \
  --symbol CREDIT --tokens-per-unit 100 --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json
```

This emits a `Credit Token` collection with the single scaled mint approval, a `ucredit` alias path, `autoApproveAllIncomingTransfers: true` for holders, and every permission frozen.

## Variations

- Quests: a `Quests` collection with `mintEscrowCoinsToTransfer` of `reward * maxClaims` and a claim approval gated by a Merkle challenge or an on-chain check (`mustOwnTokens`, `dynamicStoreChallenges`, `evmQueryChallenges`). See the quest variant in [Create a Collection](../guides/create-a-collection.md).
- Off-chain gates: a [claim](../guides/distribute-with-claims.md) with plugins (email, Discord, a form) emits the Merkle proof the approval checks.
- Points that expire: mint with `ownershipTimes` so unused points lapse at year end, as in a [subscription](subscriptions.md).
- Redeem for goods: pair credits with a [product catalog](product-catalogs-and-commerce.md) whose purchase approval requires `mustOwnTokens` of credits.
- Spendable points: add a `!Mint` to burn-address approval so users can burn points on-chain instead of the app tracking usage.

## Build It

- Skill: [Credit Token](../agents/skills/credit-token.md), [Quest](../agents/skills/quest.md)
- Guide: [Subscriptions and Time-Based Tokens](../guides/subscriptions-and-time-based-tokens.md) (section 3 builds a credit token), [Distribute with Claims](../guides/distribute-with-claims.md)
- CLI: [`bb build credit-token`](../cli/build.md#credit-token), `bb credit-tokens` from [Standards](../cli/standards.md#credit-tokens)

```text
Load the credit-token skill. Build API credits called DEMO where 1 USDC buys 1000 credits paid to bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d, non-transferable, permissions frozen. Validate, review, simulate, then give me the review link.
```
