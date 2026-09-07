---
description: "Generated schema for tokenization/approval_tracking.proto: 5 messages in the x/tokenization module."
---

# tokenization/approval_tracking.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 5 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/approval_tracking.proto).

## Messages

### ApprovalAmounts

ApprovalAmounts defines approval amounts per unique "from," "to," and/or "initiated by" address.

If any of these are nil or "0", we assume unlimited approvals.

If they are set to a value, then the running tally of the amounts transferred for the specified token IDs and ownership times

must not exceed the corresponding value.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `overallApprovalAmount` | 1 | `string` | singular | Overall approval amount. |
| `perToAddressApprovalAmount` | 2 | `string` | singular | Approval amount per "to" address. |
| `perFromAddressApprovalAmount` | 3 | `string` | singular | Approval amount per "from" address. |
| `perInitiatedByAddressApprovalAmount` | 4 | `string` | singular | Approval amount per "initiated by" address. |
| `amountTrackerId` | 6 | `string` | singular | The ID of the amount tracker associated with this approval. We use this ID to track the number of transfers and amounts transferred. |
| `resetTimeIntervals` | 7 | [`ResetTimeIntervals`](#resettimeintervals) | singular | Time intervals to reset the trackers at. |

### ApprovalTracker

ApprovalTracker defines the tracker for approvals. This tracks the cumulative number of transfers and associated balances transferred.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `numTransfers` | 1 | `string` | singular | The number of transfers that have been processed. |
| `amounts` | 2 | [`Balance`](balances.md#balance) | repeated | Cumulative balances associated with the transfers that have been processed. |
| `lastUpdatedAt` | 3 | `string` | singular | Last updated at time. |

### AutoDeletionOptions

AutoDeletionOptions defines the options for auto-deletion of approvals.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `afterOneUse` | 1 | `bool` | singular | After one use? |
| `afterOverallMaxNumTransfers` | 2 | `bool` | singular | After overall max number of uses threshold is met? |
| `allowCounterpartyPurge` | 3 | `bool` | singular | Allow counterparty to purge this approval if they are the only initiator |
| `allowPurgeIfExpired` | 4 | `bool` | singular | Allow others to call PurgeApprovals on behalf of this approval owner |

### MaxNumTransfers

MaxNumTransfers defines the maximum number of transfers per unique "from," "to," and/or "initiated by" address.

If any of these are nil or "0", we assume unlimited approvals.

If they are set to a value, then the running tally of the number of transfers for the specified token IDs and ownership times

must not exceed the corresponding value.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `overallMaxNumTransfers` | 1 | `string` | singular | Overall maximum number of transfers. |
| `perToAddressMaxNumTransfers` | 2 | `string` | singular | Maximum number of transfers per "to" address. |
| `perFromAddressMaxNumTransfers` | 3 | `string` | singular | Maximum number of transfers per "from" address. |
| `perInitiatedByAddressMaxNumTransfers` | 4 | `string` | singular | Maximum number of transfers per "initiated by" address. |
| `amountTrackerId` | 6 | `string` | singular | The ID of the amount tracker associated with this approval. We use this ID to track the number of transfers and amounts transferred. |
| `resetTimeIntervals` | 7 | [`ResetTimeIntervals`](#resettimeintervals) | singular | Time intervals to reset the trackers at. |

### ResetTimeIntervals

Time intervals to reset the trackers at.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `startTime` | 1 | `string` | singular | Original start time of the first interval. |
| `intervalLength` | 2 | `string` | singular | Interval length in unix milliseconds. |
