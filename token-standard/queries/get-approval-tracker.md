---
description: "GetApprovalTracker returns the cumulative transfer count and amounts recorded for an approval's tracker."
---

# GetApprovalTracker

Returns the tracker that an approval's `approvalAmounts` and `maxNumTransfers` criteria increment: cumulative transfers, cumulative amounts, and last update time.

## Example

```bash
# [collectionId] [approvalLevel] [approverAddress] [approvalId] [amountTrackerId] [trackerType] [approvedAddress]
bb query tokenization approvals-trackers 1 collection "" approval-1 tracker-1 overall ""
```

```bash
curl "https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/get_approvals_tracker/1/collection//tracker-1/overall/"
```

The REST path order is `{collectionId}/{approvalLevel}/{approverAddress}/{amountTrackerId}/{trackerType}/{approvedAddress}`. Empty segments stay empty, which produces `//`.

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
    "numTransfers": "5",
    "amounts": [
      {
        "amount": "100",
        "tokenIds": [{ "start": "1", "end": "10" }],
        "ownershipTimes": [{ "start": "1672531200000", "end": "18446744073709551615" }]
      }
    ],
    "lastUpdatedAt": "1672531200000"
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
- Trackers reset when the approval's `resetTimeIntervals` say so; the stored values reflect the current interval.

## Related

- [Approval trackers](../approval-criteria/approval-trackers.md)
- [GetChallengeTracker](get-challenge-tracker.md)
