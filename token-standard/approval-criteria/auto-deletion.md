---
description: "autoDeletionOptions: delete an approval after one use or after its transfer cap, and let counterparties or anyone purge it."
---

# Auto-Deletion

`autoDeletionOptions` removes an approval from state once it has served its purpose, and controls who besides the owner may purge it.

## Shape

A complete `approvalCriteria` with the `autoDeletionOptions` object open. Folded lines are defaults.

```json fold=2-51,58-97
{
  "merkleChallenges": [],
  "predeterminedBalances": {
    "manualBalances": [],
    "incrementedBalances": {
      "startBalances": [],
      "incrementTokenIdsBy": "0",
      "incrementOwnershipTimesBy": "0",
      "durationFromTimestamp": "0",
      "allowOverrideTimestamp": false,
      "recurringOwnershipTimes": {
        "startTime": "0",
        "intervalLength": "0",
        "chargePeriodLength": "0"
      },
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
    "overallApprovalAmount": "0",
    "perToAddressApprovalAmount": "0",
    "perFromAddressApprovalAmount": "0",
    "perInitiatedByAddressApprovalAmount": "0",
    "amountTrackerId": "",
    "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
  },
  "maxNumTransfers": {
    "overallMaxNumTransfers": "0",
    "perToAddressMaxNumTransfers": "0",
    "perFromAddressMaxNumTransfers": "0",
    "perInitiatedByAddressMaxNumTransfers": "0",
    "amountTrackerId": "",
    "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
  },
  "coinTransfers": [],
  "requireToEqualsInitiatedBy": false,
  "requireFromEqualsInitiatedBy": false,
  "requireToDoesNotEqualInitiatedBy": false,
  "requireFromDoesNotEqualInitiatedBy": false,
  "overridesFromOutgoingApprovals": true,
  "overridesToIncomingApprovals": false,
  "autoDeletionOptions": {
    "afterOneUse": true,
    "afterOverallMaxNumTransfers": false,
    "allowCounterpartyPurge": false,
    "allowPurgeIfExpired": false
  },
  "mustOwnTokens": [],
  "dynamicStoreChallenges": [],
  "ethSignatureChallenges": [],
  "senderChecks": {
    "mustBeEvmContract": false,
    "mustNotBeEvmContract": false,
    "mustBeLiquidityPool": false,
    "mustNotBeLiquidityPool": false
  },
  "recipientChecks": {
    "mustBeEvmContract": false,
    "mustNotBeEvmContract": false,
    "mustBeLiquidityPool": false,
    "mustNotBeLiquidityPool": false
  },
  "initiatorChecks": {
    "mustBeEvmContract": false,
    "mustNotBeEvmContract": false,
    "mustBeLiquidityPool": false,
    "mustNotBeLiquidityPool": false
  },
  "altTimeChecks": {
    "offlineHours": [],
    "offlineDays": [],
    "offlineMonths": [],
    "offlineDaysOfMonth": [],
    "offlineWeeksOfYear": [],
    "timezoneOffsetMinutes": "0",
    "timezoneOffsetNegative": false
  },
  "mustPrioritize": false,
  "votingChallenges": [],
  "allowBackedMinting": false,
  "allowSpecialWrapping": false,
  "evmQueryChallenges": [],
  "userApprovalSettings": {
    "allowedDenoms": [],
    "disableUserCoinTransfers": false,
    "userRoyalties": { "percentage": "0", "payoutAddress": "" }
  }
}
```

```ts
interface AutoDeletionOptions {
  afterOneUse: boolean;
  afterOverallMaxNumTransfers: boolean;
  allowCounterpartyPurge?: boolean;
  allowPurgeIfExpired?: boolean;
}
```

| Field | Effect when `true` |
| --- | --- |
| `afterOneUse` | Delete the approval after the first transfer that uses it |
| `afterOverallMaxNumTransfers` | Delete the approval once `maxNumTransfers.overallMaxNumTransfers` is reached |
| `allowCounterpartyPurge` | The counterparty may purge this approval with [MsgPurgeApprovals](../messages/msg-purge-approvals.md) even though they do not own it. The counterparty is the single address in `initiatedByListId`, which must be a whitelist of exactly one address. Useful as a way to reject an offer. |
| `allowPurgeIfExpired` | Anyone may purge this approval on the owner's behalf once it has no future `transferTimes`. Useful for cleanup. |

{% hint style="info" %}
Ask your agent: "Add a transfer approval to collection 1 that deletes itself after ten uses." The MCP builder tools (`add_approval`) produce the objects on this page.
{% endhint %}

## How It Works

Deletion happens in the same transaction as the qualifying transfer, after the transfer succeeds. An approval used under a forceful override that never matches its own deletion condition stays in state.

### Examples

Single-use listing:

```json
{
  "autoDeletionOptions": {
    "afterOneUse": true,
    "afterOverallMaxNumTransfers": false,
    "allowCounterpartyPurge": false,
    "allowPurgeIfExpired": false
  }
}
```

Delete after ten uses:

```json
{
  "maxNumTransfers": {
    "overallMaxNumTransfers": "10",
    "perToAddressMaxNumTransfers": "0",
    "perFromAddressMaxNumTransfers": "0",
    "perInitiatedByAddressMaxNumTransfers": "0",
    "amountTrackerId": "ten-uses",
    "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
  },
  "autoDeletionOptions": {
    "afterOneUse": false,
    "afterOverallMaxNumTransfers": true,
    "allowCounterpartyPurge": false,
    "allowPurgeIfExpired": false
  }
}
```

Let the counterparty reject:

```json
{
  "autoDeletionOptions": {
    "afterOneUse": false,
    "afterOverallMaxNumTransfers": false,
    "allowCounterpartyPurge": true,
    "allowPurgeIfExpired": false
  }
}
```

Let anyone clean up expired approvals:

```json
{
  "autoDeletionOptions": {
    "afterOneUse": false,
    "afterOverallMaxNumTransfers": false,
    "allowCounterpartyPurge": false,
    "allowPurgeIfExpired": true
  }
}
```

`MsgPurgeApprovals` honors these flags: purging another user's approvals succeeds only for approvals that set `allowCounterpartyPurge` (and the caller is the counterparty) or `allowPurgeIfExpired` (and the approval is expired).

## Related

- [Approval Trackers](approval-trackers.md)
- [MsgPurgeApprovals](../messages/msg-purge-approvals.md)
