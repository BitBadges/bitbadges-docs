---
description: "Give an AI agent a delegate wallet with chain-enforced spending limits: daily caps, time windows, recipient and token allowlists, one-transaction revocation."
---

# Spending Authorization

An outgoing approval on the controller's account lets a delegate agent wallet move a bounded amount of the controller's tokens. The chain enforces the bound; no server or dashboard setting is involved.

In this example alice (`bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d`) is the controller, the agent key is `bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr`, and bob (`bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue`) is the only allowed recipient. The window runs from `1788739200000` (2026-09-06) for 90 days. The full `MsgSetOutgoingApproval`, with every `approvalCriteria` field spelled out, is:

```json fold=20-41,58-75
{
  "messages": [
    {
      "typeUrl": "/tokenization.MsgSetOutgoingApproval",
      "value": {
        "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
        "collectionId": "2",
        "approval": {
          "approvalId": "agent-daily-budget",
          "toListId": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
          "initiatedByListId": "bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr",
          "tokenIds": [{ "start": "1", "end": "1" }],
          "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
          "transferTimes": [{ "start": "1788739200000", "end": "1796515200000" }],
          "uri": "",
          "customData": "",
          "version": "0",
          "approvalCriteria": {
            "merkleChallenges": [],
            "predeterminedBalances": {
              "manualBalances": [],
              "incrementedBalances": {
                "startBalances": [],
                "incrementTokenIdsBy": "0",
                "incrementOwnershipTimesBy": "0",
                "durationFromTimestamp": "0",
                "allowOverrideTimestamp": false,
                "recurringOwnershipTimes": { "startTime": "0", "intervalLength": "0", "chargePeriodLength": "0" },
                "allowOverrideWithAnyValidToken": false,
                "allowAmountScaling": false,
                "maxScalingMultiplier": "0"
              },
              "orderCalculationMethod": {
                "useOverallNumTransfers": false,
                "usePerToAddressNumTransfers": false,
                "usePerFromAddressNumTransfers": false,
                "usePerInitiatedByAddressNumTransfers": false,
                "useMerkleChallengeLeafIndex": false,
                "challengeTrackerId": ""
              }
            },
            "approvalAmounts": {
              "overallApprovalAmount": "100",
              "perToAddressApprovalAmount": "0",
              "perFromAddressApprovalAmount": "0",
              "perInitiatedByAddressApprovalAmount": "0",
              "amountTrackerId": "agent-daily-budget",
              "resetTimeIntervals": { "startTime": "1788739200000", "intervalLength": "86400000" }
            },
            "maxNumTransfers": {
              "overallMaxNumTransfers": "20",
              "perToAddressMaxNumTransfers": "0",
              "perFromAddressMaxNumTransfers": "0",
              "perInitiatedByAddressMaxNumTransfers": "0",
              "amountTrackerId": "agent-daily-budget",
              "resetTimeIntervals": { "startTime": "1788739200000", "intervalLength": "86400000" }
            },
            "coinTransfers": [],
            "requireToEqualsInitiatedBy": false,
            "requireToDoesNotEqualInitiatedBy": false,
            "autoDeletionOptions": {
              "afterOneUse": false,
              "afterOverallMaxNumTransfers": false,
              "allowCounterpartyPurge": false,
              "allowPurgeIfExpired": false
            },
            "mustOwnTokens": [],
            "dynamicStoreChallenges": [],
            "ethSignatureChallenges": [],
            "recipientChecks": { "mustBeEvmContract": false, "mustNotBeEvmContract": false, "mustBeLiquidityPool": false, "mustNotBeLiquidityPool": false },
            "initiatorChecks": { "mustBeEvmContract": false, "mustNotBeEvmContract": false, "mustBeLiquidityPool": false, "mustNotBeLiquidityPool": false },
            "altTimeChecks": { "offlineHours": [], "offlineDays": [] },
            "mustPrioritize": false,
            "votingChallenges": [],
            "evmQueryChallenges": []
          }
        }
      }
    }
  ]
}
```

:::widget{name="approval-criteria" caption="The envelope as the approval's criteria cards show it: 100 units and 20 transfers per day, both resetting at the same time."}
{
  "approvalAmounts": {
    "overallApprovalAmount": "100",
    "amountTrackerId": "agent-daily-budget",
    "resetTimeIntervals": {
      "startTime": "1788739200000",
      "intervalLength": "86400000"
    }
  },
  "maxNumTransfers": {
    "overallMaxNumTransfers": "20",
    "amountTrackerId": "agent-daily-budget",
    "resetTimeIntervals": {
      "startTime": "1788739200000",
      "intervalLength": "86400000"
    }
  }
}
:::

```bash
# Controller signs. The agent key never touches this step.
bb check ./approval.json --depth structural
bb tx tokenization set-outgoing-approval 2 "$(jq -c .messages[0].value.approval ./approval.json)" \
  --from alice --chain-id bitbadges-1 \
  --node https://rpc.bitbadges.io:443 --gas auto --fees 10000ubadge
```

This approval, on collection `2`, says: the agent at `bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr` may move token ID `1` from the controller to `bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue`, at most 100 units and 20 transfers per 24-hour window starting at `startTime`, and only between the two `transferTimes` timestamps. Everything else is rejected.

## Why App-Layer Limits Are Not Enough

Several platforms (Crossmint, Coinbase Agentic Wallets, and others) offer spending limits at the application layer. You set a cap in their UI and their servers enforce it. The platform controls the rule. If the policy changes, the cap changes. If the system is compromised or its API is social-engineered, the cap disappears. There is no on-chain record of what was authorized, no cryptographic proof that the limit existed, and no way for a third party to verify it.

App-layer limits are a promise. For low-stakes automation that may be acceptable. For enterprise deployments, regulated assets, or high-value agent wallets, it is not.

## How It Works

The rules live in the collection's approval configuration on-chain, not in a database. The controller keeps the main wallet. The agent holds a separate keypair with no rights except what the outgoing approval grants. When the agent submits a transfer, the chain checks the approval and rejects anything outside it.

| Building block | Field | What it enforces |
| --- | --- | --- |
| Delegate wallet | `initiatedByListId` | Only the agent address can initiate transfers under this approval |
| Recipient allowlist | `toListId` | One address, or an address list ID for several. See [Address Lists](../token-standard/concepts/address-lists.md) |
| Token allowlist | `tokenIds` | Which token IDs the agent can move |
| Valid time window | `transferTimes` | Unix millisecond range in which transfers are allowed. Outside it the chain refuses the transaction |
| Daily cap | `approvalAmounts.overallApprovalAmount` + `resetTimeIntervals` | Cumulative amount per interval. `intervalLength: "86400000"` is one day; use `3600000` for hourly or `2592000000` for 30 days. The tally resets to zero on the first transfer of each new interval |
| Transfer count cap | `maxNumTransfers.overallMaxNumTransfers` + `resetTimeIntervals` | Number of transfers per interval, same reset rule |
| Revocation | `MsgDeleteOutgoingApproval` | Removes the approval. From the next block the agent wallet is inert |

The tally mechanics (tracker IDs, `overall` versus per-address trackers, reset timing) are on [Approval Trackers](../token-standard/approval-criteria/approval-trackers.md). The full approval interface is on [Approval Criteria](../token-standard/approval-criteria/README.md).

The collection-level approval must also allow the transfer. A standard "transferable" collection approval with `overridesFromOutgoingApprovals: false` defers to the sender's outgoing approvals, which is what makes this pattern work. A collection approval that overrides outgoing approvals bypasses the agent's limits.

## Agent Side: Spend Within the Envelope

The agent signs a `MsgTransferTokens` with itself as `creator` and the controller as `from`, and points at the outgoing approval:

```json
{
  "messages": [
    {
      "typeUrl": "/tokenization.MsgTransferTokens",
      "value": {
        "creator": "bb18cad7xxsk3drvwdxeasc3wqn2plftpzq2tsrsr",
        "collectionId": "2",
        "transfers": [
          {
            "from": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
            "toAddresses": ["bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue"],
            "balances": [
              {
                "amount": "5",
                "tokenIds": [{ "start": "1", "end": "1" }],
                "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }]
              }
            ],
            "memo": "",
            "merkleProofs": [],
            "ethSignatureProofs": [],
            "prioritizedApprovals": [
              {
                "approvalId": "agent-daily-budget",
                "approvalLevel": "outgoing",
                "approverAddress": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
                "version": "0"
              }
            ],
            "onlyCheckPrioritizedCollectionApprovals": false,
            "onlyCheckPrioritizedIncomingApprovals": false,
            "onlyCheckPrioritizedOutgoingApprovals": true
          }
        ]
      }
    }
  ]
}
```

```bash
bb check ./transfer.json --depth structural
bb tx tokenization transfer-tokens ./transfer.json \
  --from agent-wallet --chain-id bitbadges-1 \
  --node https://rpc.bitbadges.io:443 --gas auto --fees 10000ubadge
```

`bb check --depth structural` on either file prints:

```json
{
  "ok": true,
  "data": {
    "valid": true,
    "issues": []
  },
  "warnings": [],
  "error": null
}
```

`version` must match the approval's current version; the chain increments it on every edit, which also invalidates stale agent configs after the controller changes the rules. The 101st unit in a day, the 21st transfer, a transfer to another recipient, or a transfer after the window ends all fail at `check_tx`.

## Revoke

```bash
bb tx tokenization delete-outgoing-approval 2 agent-daily-budget \
  --from alice --chain-id bitbadges-1 \
  --node https://rpc.bitbadges.io:443 --gas auto --fees 10000ubadge
```

The same message as JSON, for the SDK or the review-and-sign flow:

```json
{
  "messages": [
    {
      "typeUrl": "/tokenization.MsgDeleteOutgoingApproval",
      "value": {
        "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
        "collectionId": "2",
        "approvalId": "agent-daily-budget"
      }
    }
  ]
}
```

One transaction. No delay, no batch window, no intermediary. To tighten instead of revoke, send `MsgSetOutgoingApproval` again with the same `approvalId` and new limits; the version increments and the agent's next transfer must reference it.

Keep `userPermissions.canUpdateOutgoingApprovals` neutral (`[]`) on the controller account so revocation stays possible. A controller that freezes that permission cannot revoke.

## Audit Trail

Every transfer the agent makes is a chain transaction with a timestamp, the approval ID it used, the amounts, and the recipients. The running tally is queryable:

```bash
# args: collectionId approvalLevel approverAddress approvalId amountTrackerId trackerType approvedAddress
bb query tokenization approvals-trackers 2 outgoing bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d \
  agent-daily-budget agent-daily-budget overall "" \
  --node https://rpc.bitbadges.io:443 --output json
```

After two transfers of 5 units in the current window the response reads (synthesized; the fixture approval is not on mainnet):

```json
{
  "tracker": {
    "numTransfers": "2",
    "amounts": [
      {
        "amount": "10",
        "tokenIds": [{ "start": "1", "end": "1" }],
        "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }]
      }
    ],
    "lastUpdatedAt": "1788750000000"
  }
}
```

An auditor, regulator, or security team can verify the whole spending history without asking any platform for data. Query reference: [Get approval tracker](../token-standard/queries/get-approval-tracker.md).

## Native Coins and USDC

Outgoing approvals govern collection tokens. To put the same limits on IBC USDC or other native coins, hold them as a backed smart token or a vault collection, then apply this pattern to that collection: [Smart Tokens and Vaults](../guides/smart-tokens-and-vaults.md).

## Related

- [MsgSetOutgoingApproval](../token-standard/messages/msg-set-outgoing-approval.md)
- [MsgDeleteOutgoingApproval](../token-standard/messages/msg-delete-outgoing-approval.md)
- [MsgTransferTokens](../token-standard/messages/msg-transfer-tokens.md)
- [Approval Trackers](../token-standard/approval-criteria/approval-trackers.md)
