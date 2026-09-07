---
description: "Mint YES and NO pairs against USDC, trade them on a pool, and settle by a verifier's vote. Seven approvals and two alias denoms are the whole market."
---

# Prediction Markets

A binary market is two token IDs (YES and NO), a deposit approval that mints one of each per coin, a redeem approval that burns one of each for the coin back, and four settlement approvals gated on a verifier's vote. YES and NO get alias denoms, so they trade on the chain's own liquidity pools at whatever price the market sets. The escrow that pays winners is the collection's mint escrow address, funded by the deposits themselves.

No oracle contract, no AMM contract, no settlement contract. Every rule is an approval that anyone can read before they buy.

## What Makes It Work

| Requirement | Token-standard primitive |
| --- | --- |
| 1 USDC in, 1 YES + 1 NO out, at any size | `predeterminedBalances` with `startBalances` over token IDs 1 to 2 and `allowAmountScaling: true`. See [Predetermined Balances](../token-standard/approval-criteria/predetermined-balances.md) |
| Deposits fund the payout pool | `coinTransfers` with `to: "Mint"`, which routes to the mint escrow address. See [Coin Transfers](../token-standard/approval-criteria/coin-transfers.md) |
| Exit before settlement | A burn approval for one YES + one NO that pays 1 USDC from escrow |
| Price discovery | Alias paths `uyes` and `uno`, then a balancer pool on `badgeslp:<collectionId>:uyes` and `badgeslp:<collectionId>:uno`. See [Alias Denoms](../token-standard/ibc/alias-denoms.md) |
| Outcome decided once, by a named party | `votingChallenges` with the verifier as sole voter on each settlement approval. See [Voting Challenges](../token-standard/approval-criteria/voting-challenges.md) |
| Winners paid 1:1, push paid 1:2 | Settlement approvals burn 1 token per coin (win) or 2 tokens per coin (push) |
| Rules frozen | All permissions locked at creation |

## The Fields That Matter

The paired mint and the YES-wins settlement:

```json
{
  "collectionApprovals": [
    {
      "approvalId": "pm-mint-a41c",
      "fromListId": "Mint",
      "toListId": "All",
      "initiatedByListId": "All",
      "tokenIds": [{ "start": "1", "end": "2" }],
      "approvalCriteria": {
        "predeterminedBalances": {
          "incrementedBalances": {
            "startBalances": [{ "amount": "1", "tokenIds": [{ "start": "1", "end": "2" }], "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }] }],
            "allowAmountScaling": true,
            "maxScalingMultiplier": "18446744073709551615"
          }
        },
        "coinTransfers": [{ "to": "Mint", "coins": [{ "amount": "1", "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8" }] }],
        "requireToEqualsInitiatedBy": true,
        "overridesFromOutgoingApprovals": true
      }
    },
    {
      "approvalId": "pm-settle-yes-9b02",
      "fromListId": "!Mint",
      "toListId": "bb1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqs7gvmv",
      "initiatedByListId": "All",
      "tokenIds": [{ "start": "1", "end": "1" }],
      "approvalCriteria": {
        "votingChallenges": [{ "proposalId": "pm-settle-yes-9b02", "quorumThreshold": "100", "voters": [{ "address": "bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf", "weight": "1" }] }],
        "coinTransfers": [{ "to": "", "coins": [{ "amount": "1", "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8" }], "overrideFromWithApproverAddress": true, "overrideToWithInitiator": true }],
        "maxNumTransfers": { "perInitiatedByAddressMaxNumTransfers": "1", "amountTrackerId": "pm-settle-yes-9b02" }
      }
    }
  ]
}
```

:::widget{name="approval-criteria" caption="The paired mint on bitbadges.io: one YES and one NO per unit of USDC sent to the mint escrow, scaled to the deposit."}
{
  "predeterminedBalances": {
    "incrementedBalances": {
      "startBalances": [
        {
          "amount": "1",
          "tokenIds": [
            {
              "start": "1",
              "end": "2"
            }
          ]
        }
      ],
      "allowAmountScaling": true
    }
  },
  "coinTransfers": [
    {
      "to": "Mint",
      "coins": [
        {
          "amount": "1",
          "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8"
        }
      ]
    }
  ],
  "requireToEqualsInitiatedBy": true,
  "overridesFromOutgoingApprovals": true
}
:::

Amounts here are ratios: the `amount: "1"` on the deposit and on the payout scale together with `allowAmountScaling`. The verifier casts one MsgCastVote on `pm-settle-yes-9b02`; after that, any YES holder burns their tokens through this approval and receives USDC.

```bash
bb build prediction-market --verifier bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf --denom USDC \
  --name "Will testnet return by 2027?" --description "Resolves YES if the BitBadges testnet is back online before 2027-01-01." \
  --image ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/market.png
```

This emits a `Prediction Market` collection with the seven approvals (mint, transfer, redeem, YES wins, NO wins, push YES, push NO), alias paths for YES and NO, and pool creation enabled.

## Variations

- Multiple resolvers: several `voters` with weights and `quorumThreshold: "51"`, or a `delayAfterQuorum` timelock for disputes.
- Limit orders without a pool: `bb build pm-sell-intent` and `bb build pm-buy-intent` write user-level approvals that swap YES or NO for USDC at a fixed price.
- Deadline on deposits: bound the mint approval's `transferTimes` so no new pairs mint after the event starts.
- Categorical markets: N token IDs instead of two, one settlement approval per outcome.
- Different collateral: `--denom BADGE` or any IBC coin; alias decimals follow the collateral.

## Build It

- Skill: [Prediction Market](../agents/skills/prediction-market.md)
- Guide: [Trade on the DEX](../guides/trade-on-the-dex.md) for the pool and swap steps
- CLI: [`bb build prediction-market`](../cli/build.md#prediction-market), [`bb build pm-sell-intent` and `pm-buy-intent`](../cli/build.md#pm-sell-intent-and-pm-buy-intent), `bb prediction-markets` from [Standards](../cli/standards.md#prediction-markets)

```text
Load the prediction-market skill. Build a USDC market on "Will BTC close above 150k on 2026-12-31?" resolved by bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf. Include the pool creation message. Validate, review, simulate, then give me the review link.
```
