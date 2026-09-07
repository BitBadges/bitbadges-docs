---
description: "altTimeChecks: deny transfers by hour, weekday, month, day of month, or ISO week, in UTC or with a timezone offset."
---

# Alt Time Checks

`altTimeChecks` denies a transfer when the block time falls inside an offline window. `transferTimes` says when a transfer is allowed; `altTimeChecks` says when it is denied on a calendar basis (nights, weekends, month ends, blackout weeks).

## Shape

A complete `approvalCriteria` with the `altTimeChecks` object open. Folded lines are defaults.

```json fold=2-78,91-100
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
    "offlineDays": [
      { "start": "0", "end": "0" },
      { "start": "6", "end": "6" }
    ],
    "offlineMonths": [],
    "offlineDaysOfMonth": [],
    "offlineWeeksOfYear": [],
    "timezoneOffsetMinutes": "300",
    "timezoneOffsetNegative": true
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
interface AltTimeChecks {
  offlineHours?: UintRange[];        // 0-23
  offlineDays?: UintRange[];         // 0-6, 0 = Sunday
  offlineMonths?: UintRange[];       // 1-12
  offlineDaysOfMonth?: UintRange[];  // 1-31
  offlineWeeksOfYear?: UintRange[];  // 1-53, ISO 8601
  timezoneOffsetMinutes?: Uint;      // 0-840
  timezoneOffsetNegative?: boolean;  // true = west of UTC
}
```

| Field | Range | Description |
| --- | --- | --- |
| `offlineHours` | 0-23 | Hours of the day to deny. 0 is midnight, 23 is 11 PM. |
| `offlineDays` | 0-6 | Weekdays to deny. 0 Sunday, 1 Monday, ... 6 Saturday. |
| `offlineMonths` | 1-12 | Months to deny. 1 January, 12 December. |
| `offlineDaysOfMonth` | 1-31 | Days of the month to deny. Days a month does not have never match. |
| `offlineWeeksOfYear` | 1-53 | ISO 8601 weeks to deny. Week 1 contains the first Thursday. Most years have 52 weeks; 2026 has 53. |
| `timezoneOffsetMinutes` | 0-840 | Magnitude of the offset from UTC in minutes. 840 is 14 hours, the widest real offset. |
| `timezoneOffsetNegative` | bool | `true` for offsets west of UTC. Unset or `false` means east. |

All ranges are inclusive. Ranges in one array must not overlap, and `start` must be less than or equal to `end`.

{% hint style="info" %}
Ask your agent:

```text
Add a transfer approval to collection 1 that blocks transfers on weekends in US Eastern time.
```

The MCP builder tools (`add_approval`) produce the objects on this page.
{% endhint %}

## How It Works

1. Take the block time in UTC. If `timezoneOffsetMinutes` is set, add or subtract it to get local time.
2. Check the local hour against `offlineHours`.
3. Check the local weekday against `offlineDays`.
4. Check the local month against `offlineMonths`.
5. Check the local day of month against `offlineDaysOfMonth`.
6. Check the local ISO week against `offlineWeeksOfYear`.
7. If any check matches, the approval is denied.

`altTimeChecks` runs in addition to `transferTimes`. The block time must be inside `transferTimes` and outside every offline range.

Ranges do not wrap. A window that crosses midnight needs two ranges: `[22, 23]` and `[0, 5]`. A range like `{ "start": "22", "end": "5" }` fails validation.

Timezone examples: US Eastern Standard Time (UTC-5) is `timezoneOffsetMinutes: "300", timezoneOffsetNegative: true`. India Standard Time (UTC+5:30) is `timezoneOffsetMinutes: "330"` with `timezoneOffsetNegative` unset. The offset is fixed; the chain does not track daylight saving changes.

### Examples

Deny 10 PM to 6 AM UTC:

```json
{
  "altTimeChecks": {
    "offlineHours": [
      { "start": "22", "end": "23" },
      { "start": "0", "end": "5" }
    ],
    "offlineDays": [],
    "offlineMonths": [],
    "offlineDaysOfMonth": [],
    "offlineWeeksOfYear": [],
    "timezoneOffsetMinutes": "0",
    "timezoneOffsetNegative": false
  }
}
```

Deny weekends in US Eastern time. A transfer at 03:00 UTC Monday is 22:00 EST Sunday and is denied:

```json
{
  "altTimeChecks": {
    "offlineHours": [],
    "offlineDays": [
      { "start": "0", "end": "0" },
      { "start": "6", "end": "6" }
    ],
    "offlineMonths": [],
    "offlineDaysOfMonth": [],
    "offlineWeeksOfYear": [],
    "timezoneOffsetMinutes": "300",
    "timezoneOffsetNegative": true
  }
}
```

Deny all of December:

```json
{
  "altTimeChecks": {
    "offlineHours": [],
    "offlineDays": [],
    "offlineMonths": [
      { "start": "12", "end": "12" }
    ],
    "offlineDaysOfMonth": [],
    "offlineWeeksOfYear": [],
    "timezoneOffsetMinutes": "0",
    "timezoneOffsetNegative": false
  }
}
```

Deny the 1st and 15th of every month:

```json
{
  "altTimeChecks": {
    "offlineHours": [],
    "offlineDays": [],
    "offlineMonths": [],
    "offlineDaysOfMonth": [
      { "start": "1", "end": "1" },
      { "start": "15", "end": "15" }
    ],
    "offlineWeeksOfYear": [],
    "timezoneOffsetMinutes": "0",
    "timezoneOffsetNegative": false
  }
}
```

## Related

- [Transferability](../concepts/transferability.md)
- [Approval Criteria](README.md)
