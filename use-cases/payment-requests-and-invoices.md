---
description: "Let an agent or a merchant ask one payer for a fixed amount. The payer approves and pays in one signature, with no escrow and a built-in expiry."
---

# Payment Requests and Invoices

A payment request is the inverse of a bounty. The requester (an AI agent, a contractor, a merchant) creates a tiny collection that names one payer, one recipient, one amount, and a deadline. Nothing is locked up. When the payer executes the "pay" approval, the chain debits their wallet and pays the recipient in the same transaction. If they execute "deny", or the deadline passes, nothing moves.

The result is an on-chain invoice a wallet can render, an agent can create without holding funds, and an indexer can mark paid, denied, or expired from the approvals alone.

## What Makes It Work

| Requirement | Token-standard primitive |
| --- | --- |
| Only the named payer can pay | `initiatedByListId` set to the payer address. See [Transferability](../token-standard/concepts/transferability.md) |
| Debit the payer, not an escrow | `coinTransfers` with `overrideFromWithApproverAddress: false`, so the coins come from the initiator. See [Coin Transfers](../token-standard/approval-criteria/coin-transfers.md) |
| Pay once | `maxNumTransfers.overallMaxNumTransfers: "1"`. See [Approval Trackers](../token-standard/approval-criteria/approval-trackers.md) |
| Expire without a cron job | `transferTimes` ends at the deadline on both approvals |
| Paid or denied state readable by anyone | Each approval mints one token ID 1 from `Mint` to the burn address, so the receipt is the state |
| Terms frozen | All permissions locked at creation |

## The Fields That Matter

```json
{
  "approvalId": "payment-request-pay",
  "fromListId": "Mint",
  "toListId": "bb1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqs7gvmv",
  "initiatedByListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "transferTimes": [{ "start": "1", "end": "1791331200000" }],
  "approvalCriteria": {
    "coinTransfers": [
      {
        "to": "bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr",
        "coins": [{ "amount": "10000000", "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8" }],
        "overrideFromWithApproverAddress": false,
        "overrideToWithInitiator": false
      }
    ],
    "maxNumTransfers": { "overallMaxNumTransfers": "1", "amountTrackerId": "payment-request-pay-tracker" }
  }
}
```

:::widget{name="approval-criteria" caption="The pay approval on bitbadges.io: 10 USDC from the payer to the agent, usable once."}
{
  "coinTransfers": [
    {
      "to": "bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr",
      "coins": [
        {
          "amount": "10000000",
          "denom": "ibc/E1116484B327AEE59CDC3DA73D319834781A13DB2A7DFC1F38A30CD45ABF58B8"
        }
      ],
      "overrideFromWithApproverAddress": false,
      "overrideToWithInitiator": false
    }
  ],
  "maxNumTransfers": {
    "overallMaxNumTransfers": "1",
    "amountTrackerId": "payment-request-pay-tracker"
  }
}
:::

A second approval, `payment-request-deny`, is identical minus `coinTransfers`. Executing it burns the receipt and records the refusal.

```bash
bb build payment-request --amount 10 --denom USDC \
  --payer bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --recipient bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr \
  --expiration 30d --name "September report" --image ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/invoice.png \
  --context "Agent requests payment for the September report under the approved budget of 100 USDC per month."
```

This emits a `PaymentRequest` collection with the pay and deny approvals, no escrow, and the `--context` text as the description the payer reads before signing.

## Variations

- Milestones: several approvals in one collection, one per invoice line, under the `ListView:Milestones` or `ListView:Invoice Requests` standard. See [Payment Protocol](../agents/skills/payment-protocol.md).
- Any denom: `--denom BADGE` or any IBC coin the payer holds.
- Agent budgets: pair with a [spending limit](agent-vaults-and-spending-limits.md) so a request above the envelope cannot be paid by the agent itself.
- Shorter windows: `--expiration 2h` for a checkout that must settle now.
- Gas: the payer initiates, so the payer pays the fee. The requester spends nothing to create the request beyond the collection fee.

## Build It

- Skill: [Payment Request](../agents/skills/payment-request.md), [Payment Protocol](../agents/skills/payment-protocol.md)
- Guide: [Mint and Distribute](../guides/mint-and-distribute.md) covers the paid-mint approval this builds on
- CLI: [`bb build payment-request`](../cli/build.md#payment-request), then `bb pay-requests pay` or `deny` from [Standards](../cli/standards.md#pay-requests)

```text
Load the payment-request skill. Create a request for 25 USDC from bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d to my address, expiring in 7 days, with a context string that explains it covers the October API bill. Validate, review, simulate, then give me the review link.
```
