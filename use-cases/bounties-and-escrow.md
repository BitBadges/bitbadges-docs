---
description: "Lock funds at creation and release them on a verifier's vote, a denial, or a deadline. Three approvals, one escrow address, no contract."
---

# Bounties and Escrow

A bounty is funds locked at collection creation plus three ways they can leave: accept (paid to the recipient), deny (refunded to the submitter), and expire (refunded after the deadline). Each exit is a collection approval with a coin transfer from the mint escrow address. A named verifier decides accept or deny by casting one on-chain vote. Nobody, including the creator, can move the money any other way.

The same three-branch shape is a milestone contract, a job escrow, a dispute-resolved trade, or a multi-party agreement with six or twelve branches instead of three.

## What Makes It Work

| Requirement | Token-standard primitive |
| --- | --- |
| Funds locked at creation | `mintEscrowCoinsToTransfer` on MsgUniversalUpdateCollection funds the collection's mint escrow address. See [Coin Transfers](../token-standard/approval-criteria/coin-transfers.md) |
| Escrow pays out | `coinTransfers` with `overrideFromWithApproverAddress: true`, so the escrow is the payer |
| A verifier decides | `votingChallenges` with the verifier as the only voter and `quorumThreshold: "100"`. The verifier signs MsgCastVote; anyone can then execute. See [Voting Challenges](../token-standard/approval-criteria/voting-challenges.md) |
| Refund after the deadline with no action from anyone | An `expire` approval whose `transferTimes` starts one millisecond after the deadline |
| Each branch fires once | `maxNumTransfers.overallMaxNumTransfers: "1"` per approval |
| Nobody can edit the terms | All permissions locked at creation |

## The Fields That Matter

```json
{
  "mintEscrowCoinsToTransfer": [{ "amount": "500000000", "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8" }],
  "collectionApprovals": [
    {
      "approvalId": "bounty-accept",
      "fromListId": "Mint",
      "toListId": "bb1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqs7gvmv",
      "initiatedByListId": "All",
      "transferTimes": [{ "start": "1", "end": "1791331200000" }],
      "approvalCriteria": {
        "votingChallenges": [{ "proposalId": "bounty-accept-3f9a", "quorumThreshold": "100", "voters": [{ "address": "bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf", "weight": "1" }] }],
        "coinTransfers": [{ "to": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue", "coins": [{ "amount": "500000000", "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8" }], "overrideFromWithApproverAddress": true }],
        "maxNumTransfers": { "overallMaxNumTransfers": "1", "amountTrackerId": "bounty-accept-tracker" }
      }
    },
    {
      "approvalId": "bounty-expire",
      "fromListId": "Mint",
      "toListId": "bb1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqs7gvmv",
      "initiatedByListId": "All",
      "transferTimes": [{ "start": "1791331200001", "end": "18446744073709551615" }],
      "approvalCriteria": {
        "coinTransfers": [{ "to": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d", "coins": [{ "amount": "500000000", "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8" }], "overrideFromWithApproverAddress": true }],
        "maxNumTransfers": { "overallMaxNumTransfers": "1", "amountTrackerId": "bounty-expire-tracker" }
      }
    }
  ]
}
```

:::widget{name="transferability-row" caption="The accept branch as the transferability tab lists it: anyone can execute it once the verifier has voted, until the deadline."}
{
  "approvalId": "bounty-accept",
  "fromListId": "Mint",
  "toListId": "bb1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqs7gvmv",
  "initiatedByListId": "All",
  "transferTimes": [
    {
      "start": "1",
      "end": "1791331200000"
    }
  ],
  "criteria": [
    "Verifier vote",
    "500 USDC from escrow to bob",
    "Max 1 transfer"
  ]
}
:::

The `bounty-deny` approval is `bounty-accept` with the coin transfer pointed at the submitter. Each branch mints one receipt token straight to the burn address, so the chain records which branch ran.

```bash
bb build bounty --amount 500 --denom USDC --verifier bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf \
  --recipient bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue --submitter bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d \
  --expiration 30d --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json
```

This emits a `Bounty` collection that moves 500 USDC into escrow when the creator signs, with the accept, deny, and expire approvals above.

## Variations

- Several verifiers: list them in `voters` with weights and set `quorumThreshold: "51"` for a majority. See [Multi-Sig Voting](../agents/skills/multi-sig-voting.md).
- Timelock: `delayAfterQuorum` on the voting challenge holds the payout for a review window after the vote passes.
- Partial payouts: one accept approval per milestone, each with its own amount, under the `ListView:Milestones` standard. See [Payment Protocol](../agents/skills/payment-protocol.md).
- Long-lived escrow with deposits from many parties: hold the funds as a [backed token](stablecoins-and-backed-tokens.md) instead, and write the release, refund, and dispute branches as its withdraw approvals.
- No escrow at all: use a [payment request](payment-requests-and-invoices.md), where the payer funds the transfer at approval time.

## Build It

- Skill: [Bounty](../agents/skills/bounty.md), [Payment Protocol](../agents/skills/payment-protocol.md)
- Reference: [MsgCastVote](../token-standard/messages/msg-cast-vote.md)
- CLI: [`bb build bounty`](../cli/build.md#bounty), then `bb bounties accept`, `deny`, or `claim-refund` from [Standards](../cli/standards.md#bounties)

```text
Load the bounty skill. Build a 250 USDC bounty where bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf verifies, bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue is paid on accept, I am refunded on deny or after 14 days. Validate, review, simulate, then give me the review link.
```
