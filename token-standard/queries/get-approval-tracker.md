---
description: "GetApprovalTracker returns the cumulative transfer count and amounts recorded for an approval's tracker."
---

# GetApprovalTracker

Returns the tracker that an approval's `approvalAmounts` and `maxNumTransfers` criteria increment: cumulative transfers, cumulative amounts, and last update time.

## Example

```bash
# [collectionId] [approvalLevel] [approverAddress] [approvalId] [amountTrackerId] [trackerType] [approvedAddress]
bb query tokenization approvals-trackers 1 outgoing bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d sell-token-5-to-bob sell-token-5-to-bob overall ""
```

```bash
curl "https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/get_approvals_tracker/1/outgoing/bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d/sell-token-5-to-bob/overall/?approvalId=sell-token-5-to-bob"
```

The REST path order is `{collectionId}/{approvalLevel}/{approverAddress}/{amountTrackerId}/{trackerType}/{approvedAddress}`. `approvalId` is passed separately as a query parameter. Empty segments stay empty; a collection-level tracker produces `//` after the level.

## Request

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | string | Collection ID. |
| `approvalLevel` | string | `collection`, `incoming`, or `outgoing`. |
| `approverAddress` | string | Empty for `collection`; the user's address otherwise. |
| `approvalId` | string | Approval ID. |
| `amountTrackerId` | string | Tracker ID from the approval criteria. |
| `trackerType` | string | `overall`, `to`, `from`, or `initiatedBy`. |
| `approvedAddress` | string | Empty for `overall`; the tracked address otherwise. |

## Response

```json
{
  "tracker": {
    "numTransfers": "1",
    "amounts": [
      {
        "amount": "1",
        "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
        "tokenIds": [{ "start": "5", "end": "5" }]
      }
    ],
    "lastUpdatedAt": "1788739200000"
  }
}
```

| Field | Type | Description |
| --- | --- | --- |
| `numTransfers` | Uint | Transfers counted so far. |
| `amounts` | `Balance[]` | Cumulative amounts transferred. |
| `lastUpdatedAt` | Uint | Unix milliseconds of the last increment. |

## Behavior

- A tracker that has never been incremented returns an `invalid request` error rather than zeros.
- This query returns stored values without applying periodic resets. A reset is applied on the next qualifying transfer, so check `lastUpdatedAt` and the approval's `resetTimeIntervals` before interpreting the tally as current-period usage.

## Related

- [Approval Trackers](../approval-criteria/approval-trackers.md)
- [GetChallengeTracker](get-challenge-tracker.md)
