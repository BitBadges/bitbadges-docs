---
description: "approvalAmounts and maxNumTransfers: increment-only trackers that cap amounts and transfer counts, overall or per address, with periodic resets."
---

# Approval Trackers

Trackers are increment-only tallies stored per approval. `approvalAmounts` caps the amount transferred and `maxNumTransfers` caps the number of transfers, each overall or per sender, recipient, or initiator.

## Shape

A complete `approvalCriteria` with the `approvalAmounts` and `maxNumTransfers` objects open. Folded lines are defaults.

```json fold=2-28,45-97
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
    "overallApprovalAmount": "1000",
    "perToAddressApprovalAmount": "0",
    "perFromAddressApprovalAmount": "0",
    "perInitiatedByAddressApprovalAmount": "10",
    "amountTrackerId": "uniqueID",
    "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
  },
  "maxNumTransfers": {
    "overallMaxNumTransfers": "0",
    "perToAddressMaxNumTransfers": "0",
    "perFromAddressMaxNumTransfers": "0",
    "perInitiatedByAddressMaxNumTransfers": "1",
    "amountTrackerId": "uniqueID",
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
    "afterOneUse": false,
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
interface ApprovalAmounts<T> {
  overallApprovalAmount: T;
  perToAddressApprovalAmount: T;
  perFromAddressApprovalAmount: T;
  perInitiatedByAddressApprovalAmount: T;
  amountTrackerId: string;
  resetTimeIntervals?: ResetTimeIntervals<T>;
}

interface MaxNumTransfers<T> {
  overallMaxNumTransfers: T;
  perToAddressMaxNumTransfers: T;
  perFromAddressMaxNumTransfers: T;
  perInitiatedByAddressMaxNumTransfers: T;
  amountTrackerId: string;
  resetTimeIntervals?: ResetTimeIntervals<T>;
}

interface ResetTimeIntervals<T> {
  startTime: T;      // first interval start, UNIX ms
  intervalLength: T; // interval length, ms
}
```

| Field | Description |
| --- | --- |
| `overall*` | One tally for every use of the approval |
| `perToAddress*` | One tally per recipient |
| `perFromAddress*` | One tally per sender |
| `perInitiatedByAddress*` | One tally per initiator |
| `amountTrackerId` | User-chosen ID that scopes the tallies. Part of the storage key. |
| `resetTimeIntervals` | Periodic reset. Both values `0` disables it. |

`"0"` in any limit means unlimited, and that tally is not tracked.

{% hint style="info" %}
Ask your agent:

```text
Add a mint approval to collection 1 capped at 1000 tokens overall and 10 per address, with a tracker that resets every 30 days.
```

The MCP builder tools (`add_approval`) produce the objects on this page.
{% endhint %}

## How It Works

### Tally with Threshold

1. Setup: approved for 10 of token IDs 1-10 with tracker ID `xyz`.
2. Transfer 5: tracker `xyz` goes from 0/10 to 5/10.
3. Transfer 5: 10/10.
4. Transfer 1: exceeds the threshold, the transfer fails.

Amounts are tracked as balances, so a tally records which token IDs and ownership times were used, not only a number:

```json
{
  "numTransfers": "5",
  "amounts": [
    {
      "amount": "50",
      "tokenIds": [{ "start": "1", "end": "10" }],
      "ownershipTimes": [{ "start": "1", "end": "100000000000" }]
    }
  ],
  "lastUpdatedAt": "1691978400000"
}
```

### Tracker Keys

Every tally has its own key:

```text
collectionId-approvalLevel-approverAddress-approvalId-amountTrackerId-trackerType-approvedAddress
```

```ts
interface ApprovalTrackerIdDetails<T extends NumberType> {
  collectionId: T;
  approvalLevel: 'collection' | 'incoming' | 'outgoing' | '';
  approverAddress: string;   // '' for collection level
  approvalId: string;
  amountTrackerId: string;   // from approvalAmounts or maxNumTransfers
  trackerType: 'overall' | 'to' | 'from' | 'initiatedBy' | '';
  approvedAddress: string;   // '' for overall, else the tracked address
}
```

| `trackerType` | Example key | Tally per |
| --- | --- | --- |
| `overall` | `1-collection- -approvalId-uniqueID-overall-` | the approval |
| `to` | `1-collection- -approvalId-uniqueID-to-bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue` | recipient |
| `from` | `1-collection- -approvalId-uniqueID-from-bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d` | sender |
| `initiatedBy` | `1-collection- -approvalId-uniqueID-initiatedBy-bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf` | initiator |

Read a tracker with [GetApprovalTracker](../queries/get-approval-tracker.md).

### Worked Example

With the `approvalAmounts` above (overall 1000, per initiator 10), carol initiates a transfer of 10 from alice:

- Overall tracker `...-overall-` goes 0/1000 to 10/1000. bob's later transfers add to the same tally.
- carol's initiator tracker `...-initiatedBy-bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf` goes 0/10 to 10/10. It is used up. bob has his own tracker at 0/10.
- `to` and `from` limits are `0`, so nothing is recorded for them.

With the `maxNumTransfers` above (per initiator 1), carol can initiate one transfer and then no more; bob still can.

```json
{ "numTransfers": "1", "amounts": [], "lastUpdatedAt": "1691978400000" }
```

### Increment-Only and Never Reset by Edits

Trackers live outside the approval. Updating or deleting the approval does not touch them. To start a fresh tally, change `amountTrackerId` (or anything else in the key). Changing `uniqueID` to `uniqueID2` moves every tally to new keys that start at zero:

```text
1-collection- -approvalId-uniqueID-initiatedBy-bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf
becomes
1-collection- -approvalId-uniqueID2-initiatedBy-bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf
```

Changing back to `uniqueID` resumes the old tally: carol is at 10/10 again, not 0/10.

{% hint style="warning" %}
Never reuse a tracker ID that has history unless you want to continue from where it stopped.
{% endhint %}

### As-Needed Increments

The chain increments a tally only when something reads it. With no amount limit, amounts are not recorded; with no count limit, counts are not recorded.

One exception: [Predetermined Balances](predetermined-balances.md) that order transfers by `use*NumTransfers` read the transfer count from this same tracker. In that case the count is incremented even when the matching `maxNumTransfers` value is `0`. Account for this when you reuse tracker IDs.

### Periodic Resets

`resetTimeIntervals` zeroes a tally at the start of each interval. On the first update inside a new interval, all progress under that tracker resets before the increment.

```json
{
  "approvalAmounts": {
    "overallApprovalAmount": "100",
    "perToAddressApprovalAmount": "0",
    "perFromAddressApprovalAmount": "0",
    "perInitiatedByAddressApprovalAmount": "0",
    "amountTrackerId": "monthly-tracker",
    "resetTimeIntervals": { "startTime": "1691978400000", "intervalLength": "2592000000" }
  }
}
```

This allows 100 per 30-day period starting Aug 13, 2023. If `startTime` is in the future, no reset happens yet. Use it for subscriptions and rate limits. Set both values to `0` for no resets.

## Related

- [Predetermined Balances](predetermined-balances.md)
- [Auto-Deletion](auto-deletion.md)
- [GetApprovalTracker](../queries/get-approval-tracker.md)
