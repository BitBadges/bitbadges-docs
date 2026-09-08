---
description: "Raise toward a goal with claimable refunds, or sell one item to the best bid. Both are collections whose approvals read their own balances and a deadline."
---

# Crowdfunding and Auctions

A crowdfund is two token IDs and four approvals. Backers deposit and receive a refund token; a progress token accrues to the campaign owner. After the deadline, the owner can withdraw only if the progress balance meets the goal, and backers can burn their refund token for their money back only if it does not. The goal check is a `mustOwnTokens` clause that points at the collection itself.

An auction is one token ID that does not exist until the seller accepts a bid. Bids are incoming approvals from bidders. The seller's accept approval is valid only during the accept window, fires once, and deletes itself.

## What Makes It Work

| Requirement | Token-standard primitive |
| --- | --- |
| Deposits of any size | `allowAmountScaling: true` in `predeterminedBalances`, so 1 coin mints 1 refund token and 250 coins mint 250. See [Predetermined Balances](../token-standard/approval-criteria/predetermined-balances.md) |
| Goal met or not, decided on-chain | `mustOwnTokens` with `collectionId: "0"` (this collection), `ownershipCheckParty` = the crowdfunder, and an `amountRange` at or above the goal. See [Token Ownership](../token-standard/approval-criteria/token-ownership.md) |
| Nothing settles before the deadline | `transferTimes` on success and refund start at deadline + 1 ms |
| Escrow pays out | `coinTransfers` with `overrideFromWithApproverAddress: true` and `overrideToWithInitiator: true` |
| Bids without a marketplace | Bidders set incoming approvals with `coinTransfers`; `bb build bid` writes them |
| Only the seller can accept | `initiatedByListId` = seller on the mint-to-winner approval |
| Accept fires once, then vanishes | `maxNumTransfers: "1"` and `autoDeletionOptions.afterOneUse: true`. See [Auto-Deletion](../token-standard/approval-criteria/auto-deletion.md) |

## The Fields That Matter

The crowdfund success approval for a 10000 USDC goal:

```json
{
  "approvalId": "success",
  "fromListId": "Mint",
  "toListId": "bb1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqs7gvmv",
  "initiatedByListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "transferTimes": [{ "start": "1791331200001", "end": "18446744073709551615" }],
  "approvalCriteria": {
    "mustOwnTokens": [
      {
        "collectionId": "0",
        "tokenIds": [{ "start": "2", "end": "2" }],
        "amountRange": { "start": "10000000000", "end": "18446744073709551615" },
        "ownershipCheckParty": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
        "overrideWithCurrentTime": true
      }
    ],
    "coinTransfers": [{ "to": "", "coins": [{ "amount": "1", "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8" }], "overrideFromWithApproverAddress": true, "overrideToWithInitiator": true }],
    "maxNumTransfers": { "overallMaxNumTransfers": "1", "amountTrackerId": "crowdfund-success" }
  }
}
```

:::widget{name="approval-criteria" caption="The success approval on bitbadges.io: the goal check reads the collection's own progress balance, and the escrow pays the initiator."}
{
  "mustOwnTokens": [
    {
      "collectionId": "0",
      "tokenIds": [
        {
          "start": "2",
          "end": "2"
        }
      ],
      "amountRange": {
        "start": "10000000000",
        "end": "18446744073709551615"
      }
    }
  ],
  "coinTransfers": [
    {
      "to": "",
      "coins": [
        {
          "amount": "1",
          "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8"
        }
      ],
      "overrideFromWithApproverAddress": true,
      "overrideToWithInitiator": true
    }
  ],
  "maxNumTransfers": {
    "overallMaxNumTransfers": "1",
    "amountTrackerId": "crowdfund-success"
  }
}
:::

The refund approval is the mirror: `fromListId: "!Mint"` (backers burn token 1), `amountRange` from `0` to goal minus 1, unlimited uses.

The auction accept approval, bounded to the accept window:

```json
{
  "approvalId": "auction-mint-to-winner",
  "fromListId": "Mint",
  "toListId": "All",
  "initiatedByListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "transferTimes": [{ "start": "1789344000000", "end": "1789948800000" }],
  "approvalCriteria": {
    "maxNumTransfers": { "overallMaxNumTransfers": "1", "amountTrackerId": "auction-tracker" },
    "overridesFromOutgoingApprovals": true,
    "overridesToIncomingApprovals": false,
    "autoDeletionOptions": { "afterOneUse": true, "afterOverallMaxNumTransfers": true }
  }
}
```

`overridesToIncomingApprovals: false` is the point: the winner's bid (their incoming approval) is what pays, so the accept must not bypass it.

```bash
bb build crowdfund --goal 10000 --denom USDC --crowdfunder bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --deadline 30d \
  --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json
bb build auction --bid-deadline 7d --accept-window 7d --seller bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d \
  --name "Rare Item" --description "Limited edition" --image ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/1.png
```

The first emits a `Crowdfund` collection with deposit, progress, success, and refund approvals. The second emits an `Auction` collection with the accept approval above and a burn approval, and no token until settlement.

## Variations

- Stretch goals: a second success approval with a higher `amountRange` and a different payout split.
- Reserve price: the seller declines by not accepting. Unaccepted bids expire on their own `transferTimes`, so no cleanup step is needed.
- Refund tokens that trade: add a `!Mint` to `All` approval on token 1 so a backer can sell their position before the deadline.
- Multi-item auction: one token ID per item and one accept approval per ID, each `initiatedByListId` = seller.
- Deadlines in absolute time: `--deadline` accepts a duration; write `transferTimes` by hand for a fixed date.

## Build It

- Skill: [Crowdfund](../agents/skills/crowdfund.md), [Auction](../agents/skills/auction.md)
- CLI: [`bb build crowdfund`](../cli/build.md#crowdfund), [`bb build auction`](../cli/build.md#auction), [`bb build bid`](../cli/build.md#bid); `bb crowdfunds` and `bb auctions` from [Standards](../cli/standards.md#auctions)
- Concept: [Approval Trackers](../token-standard/approval-criteria/approval-trackers.md)

```text
Load the auction skill. Build a 7-day auction for a single 1-of-1 token named Genesis Print where only I can accept the winning bid within 3 days after bidding closes. Validate, review, simulate, then give me the review link.
```
