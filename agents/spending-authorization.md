---
description: "Give an AI agent a delegate wallet with on-chain spending limits. Daily caps, time windows, recipient and token allowlists, and one-transaction revocation, all enforced by the chain."
---

# Spending authorization

An outgoing approval on the controller's account lets a delegate agent wallet move a bounded amount of the controller's tokens. The chain enforces the bound; no server or dashboard setting is involved.

```json
{
  "creator": "bb1controller...",
  "collectionId": "42",
  "approval": {
    "approvalId": "agent-daily-budget",
    "toListId": "bb1vendor...",
    "initiatedByListId": "bb1agent...",
    "tokenIds": [{ "start": "1", "end": "1" }],
    "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "transferTimes": [{ "start": "1757116800000", "end": "1764979200000" }],
    "uri": "",
    "customData": "",
    "version": "0",
    "approvalCriteria": {
      "approvalAmounts": {
        "overallApprovalAmount": "100",
        "perFromAddressApprovalAmount": "0",
        "perToAddressApprovalAmount": "0",
        "perInitiatedByAddressApprovalAmount": "0",
        "amountTrackerId": "agent-daily-budget",
        "resetTimeIntervals": {
          "startTime": "1757116800000",
          "intervalLength": "86400000"
        }
      },
      "maxNumTransfers": {
        "overallMaxNumTransfers": "20",
        "perFromAddressMaxNumTransfers": "0",
        "perToAddressMaxNumTransfers": "0",
        "perInitiatedByAddressMaxNumTransfers": "0",
        "amountTrackerId": "agent-daily-budget",
        "resetTimeIntervals": {
          "startTime": "1757116800000",
          "intervalLength": "86400000"
        }
      }
    }
  }
}
```

```bash
# Controller signs. The agent key never touches this step.
bb tx tokenization set-outgoing-approval 42 "$(cat approval.json | jq -c .approval)" \
  --from controller --chain-id bitbadges-1 \
  --node https://lcd.bitbadges.io:443 --gas auto --fees 10000ubadge
```

This approval, on collection `42`, says: the agent at `bb1agent...` may move token ID `1` from the controller to `bb1vendor...`, at most 100 units and 20 transfers per 24-hour window starting at `startTime`, and only between the two `transferTimes` timestamps. Everything else is rejected.

## Why app-layer limits are not enough

Several platforms (Crossmint, Coinbase Agentic Wallets, and others) offer spending limits at the application layer. You set a cap in their UI and their servers enforce it. The platform controls the rule. If the policy changes, the cap changes. If the system is compromised or its API is social-engineered, the cap disappears. There is no on-chain record of what was authorized, no cryptographic proof that the limit existed, and no way for a third party to verify it.

App-layer limits are a promise. For low-stakes automation that may be acceptable. For enterprise deployments, regulated assets, or high-value agent wallets, it is not.

## How it works

The rules live in the collection's approval configuration on-chain, not in a database. The controller keeps the main wallet. The agent holds a separate keypair with no rights except what the outgoing approval grants. When the agent submits a transfer, the chain checks the approval and rejects anything outside it.

| Building block | Field | What it enforces |
| --- | --- | --- |
| Delegate wallet | `initiatedByListId` | Only the agent address can initiate transfers under this approval |
| Recipient allowlist | `toListId` | One address, or an address list ID for several. See [Address lists](../token-standard/concepts/address-lists.md) |
| Token allowlist | `tokenIds` | Which token IDs the agent can move |
| Valid time window | `transferTimes` | Unix millisecond range in which transfers are allowed. Outside it the chain refuses the transaction |
| Daily cap | `approvalAmounts.overallApprovalAmount` + `resetTimeIntervals` | Cumulative amount per interval. `intervalLength: "86400000"` is one day; use `3600000` for hourly or `2592000000` for 30 days. The tally resets to zero on the first transfer of each new interval |
| Transfer count cap | `maxNumTransfers.overallMaxNumTransfers` + `resetTimeIntervals` | Number of transfers per interval, same reset rule |
| Revocation | `MsgDeleteOutgoingApproval` | Removes the approval. From the next block the agent wallet is inert |

The tally mechanics (tracker IDs, `overall` versus per-address trackers, reset timing) are on [Approval trackers](../token-standard/approval-criteria/approval-trackers.md). The full approval interface is on [Approval criteria](../token-standard/approval-criteria/README.md).

The collection-level approval must also allow the transfer. A standard "transferable" collection approval with `overridesFromOutgoingApprovals: false` defers to the sender's outgoing approvals, which is what makes this pattern work. A collection approval that overrides outgoing approvals bypasses the agent's limits.

## Agent side: spend within the envelope

The agent signs a `MsgTransferTokens` with itself as `creator` and the controller as `from`, and points at the outgoing approval:

```json
{
  "creator": "bb1agent...",
  "collectionId": "42",
  "transfers": [
    {
      "from": "bb1controller...",
      "toAddresses": ["bb1vendor..."],
      "balances": [
        {
          "amount": "5",
          "tokenIds": [{ "start": "1", "end": "1" }],
          "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }]
        }
      ],
      "prioritizedApprovals": [
        {
          "approvalId": "agent-daily-budget",
          "approvalLevel": "outgoing",
          "approverAddress": "bb1controller...",
          "version": "0"
        }
      ],
      "onlyCheckPrioritizedOutgoingApprovals": true
    }
  ]
}
```

```bash
bb check ./transfer.json
bb tx tokenization transfer-tokens ./transfer.json \
  --from agent-wallet --chain-id bitbadges-1 \
  --node https://lcd.bitbadges.io:443 --gas auto --fees 10000ubadge
```

`version` must match the approval's current version; the chain increments it on every edit, which also invalidates stale agent configs after the controller changes the rules. The 101st unit in a day, the 21st transfer, a transfer to another recipient, or a transfer after the window ends all fail at `check_tx`.

## Revoke

```bash
bb tx tokenization delete-outgoing-approval 42 agent-daily-budget \
  --from controller --chain-id bitbadges-1 \
  --node https://lcd.bitbadges.io:443 --gas auto --fees 10000ubadge
```

One transaction. No delay, no batch window, no intermediary. To tighten instead of revoke, send `MsgSetOutgoingApproval` again with the same `approvalId` and new limits; the version increments and the agent's next transfer must reference it.

Keep `userPermissions.canUpdateOutgoingApprovals` neutral (`[]`) on the controller account so revocation stays possible. A controller that freezes that permission cannot revoke.

## Audit trail

Every transfer the agent makes is a chain transaction with a timestamp, the approval ID it used, the amounts, and the recipients. The running tally is queryable:

```bash
# args: collectionId approvalLevel approverAddress approvalId amountTrackerId trackerType approvedAddress
bb query tokenization approvals-trackers 42 outgoing bb1controller... \
  agent-daily-budget agent-daily-budget overall "" \
  --node https://lcd.bitbadges.io:443
```

An auditor, regulator, or security team can verify the whole spending history without asking any platform for data. Query reference: [Get approval tracker](../token-standard/queries/get-approval-tracker.md).

## Native coins and USDC

Outgoing approvals govern collection tokens. To put the same limits on IBC USDC or other native coins, hold them as a backed smart token or a vault collection, then apply this pattern to that collection: [Smart tokens and vaults](../guides/smart-tokens-and-vaults.md).

## Related

- [MsgSetOutgoingApproval](../token-standard/messages/msg-set-outgoing-approval.md)
- [MsgDeleteOutgoingApproval](../token-standard/messages/msg-delete-outgoing-approval.md)
- [MsgTransferTokens](../token-standard/messages/msg-transfer-tokens.md)
- [Approval trackers](../token-standard/approval-criteria/approval-trackers.md)
