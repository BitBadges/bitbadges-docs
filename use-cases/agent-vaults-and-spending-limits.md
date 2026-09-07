---
description: "Give an AI agent funds with a daily cap, a time window, a recipient list, 2FA on withdrawals, and one-transaction revocation, all enforced by the chain."
---

# Agent Vaults and Spending Limits

An agent needs money it can spend without a human signing every transaction, and the human needs a hard ceiling on what can go wrong. The token standard gives two layers for this. A vault is a USDC-backed collection whose withdraw approval carries a daily cap, an optional 2FA check, and an emergency recovery path. A spending authorization is an outgoing approval on a human's own account that lets a delegate key move a bounded amount to allowed recipients for a bounded time.

Both are a few fields on an approval. No server holds the policy, so a compromised dashboard cannot raise the limit, and any third party can read the exact envelope on-chain.

## What Makes It Work

| Requirement | Token-standard primitive |
| --- | --- |
| Agent holds a balance it can spend | A [backed token](stablecoins-and-backed-tokens.md) vault: deposit USDC, withdraw USDC, `noForcefulPostMintTransfers: true` |
| Daily cap | `approvalAmounts.perInitiatedByAddressApprovalAmount` with `resetTimeIntervals.intervalLength: "86400000"`. See [Approval Trackers](../token-standard/approval-criteria/approval-trackers.md) |
| Count cap | `maxNumTransfers` with the same reset interval |
| Second factor on withdrawals | `mustOwnTokens` pointing at a [custom 2FA collection](memberships-and-address-lists.md) whose tokens live five minutes. See [Token Ownership](../token-standard/approval-criteria/token-ownership.md) |
| Only the agent key can initiate | `initiatedByListId` = the agent address on an outgoing approval. See [Spending Authorization](../agents/spending-authorization.md) |
| Only approved recipients | `toListId` = one address or a stored [address list](../token-standard/concepts/address-lists.md) |
| Expires on a date | `transferTimes` window |
| Revoke in one transaction | [MsgDeleteOutgoingApproval](../token-standard/messages/msg-delete-outgoing-approval.md), or a manager-only emergency migration approval on the vault |

## The Fields That Matter

The withdraw approval of a vault with a 1000 USDC daily limit and a 2FA gate on collection `84`:

```json
{
  "approvalId": "vault-withdraw-7c1e",
  "fromListId": "!Mint",
  "toListId": "bb1backingaddress...",
  "initiatedByListId": "All",
  "approvalCriteria": {
    "mustPrioritize": true,
    "allowBackedMinting": true,
    "approvalAmounts": {
      "perInitiatedByAddressApprovalAmount": "1000000000",
      "amountTrackerId": "withdrawal-daily",
      "resetTimeIntervals": { "startTime": "1788739200000", "intervalLength": "86400000" }
    },
    "mustOwnTokens": [
      {
        "collectionId": "84",
        "amountRange": { "start": "1", "end": "18446744073709551615" },
        "tokenIds": [{ "start": "1", "end": "1" }],
        "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
        "overrideWithCurrentTime": true
      }
    ]
  }
}
```

:::widget{name="approval-criteria" caption="The withdraw approval on bitbadges.io: a per-initiator limit in base units that resets daily, plus the 2FA ownership check."}
{
  "approvalAmounts": {
    "perInitiatedByAddressApprovalAmount": "1000000000",
    "amountTrackerId": "withdrawal-daily",
    "resetTimeIntervals": {
      "startTime": "1788739200000",
      "intervalLength": "86400000"
    }
  },
  "mustOwnTokens": [
    {
      "collectionId": "84",
      "tokenIds": [
        {
          "start": "1",
          "end": "1"
        }
      ],
      "amountRange": {
        "start": "1",
        "end": "18446744073709551615"
      }
    }
  ]
}
:::

Amounts are base units: `"1000000000"` is 1000 USDC at 6 decimals. `overrideWithCurrentTime: true` makes the 2FA check use the block time, so an expired 2FA token fails.

```bash
bb build vault --backing-coin USDC --symbol vUSDC --daily-withdraw-limit 1000 --require-2fa 84 \
  --emergency-recovery bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf \
  --uri ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json
```

This emits a `Smart Token` + `Vault` collection with the deposit approval, the withdraw approval above, an emergency migration approval that only the recovery address can run, and every permission frozen so the manager cannot loosen the rules after funds arrive.

## Variations

- Delegate instead of vault: keep funds in the controller's wallet and give the agent an outgoing approval with `approvalAmounts`, `maxNumTransfers`, `toListId`, and `transferTimes`. The full message is on [Spending Authorization](../agents/spending-authorization.md).
- Business hours only: `altTimeChecks.offlineHours` and `offlineDays` block transfers outside a schedule. See [Alt Time Checks](../token-standard/approval-criteria/alt-time-checks.md).
- Human co-sign above a threshold: a second withdraw approval with a higher cap and a `votingChallenges` entry for the controller.
- Per-agent budgets from one treasury: one outgoing approval per agent key, each with its own tracker ID.
- Audit: every tracker tally is a public query, so a monitor can read "spent today" without indexing events.

## Build It

- Skill: [Smart Token](../agents/skills/smart-token.md), [Custom 2FA](../agents/skills/custom-2fa.md)
- Guide: [Smart Tokens and Vaults](../guides/smart-tokens-and-vaults.md) (section 4 wires the agent tools), [Spending Authorization](../agents/spending-authorization.md)
- CLI: [`bb build vault`](../cli/build.md#vault), [`bb build custom-2fa`](../cli/build.md#custom-2fa)

```text
Load the smart-token skill. Build a USDC vault for my trading agent with a 500 USDC daily withdraw limit, 2FA from collection 84 on every withdrawal, no peer-to-peer transfers, and bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf as the emergency recovery address. Validate, review, simulate, then give me the review link.
```
