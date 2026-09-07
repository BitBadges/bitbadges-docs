---
description: "autoDeletionOptions: delete an approval after one use or after its transfer cap, and let counterparties or anyone purge it."
---

# Auto-deletion

`autoDeletionOptions` removes an approval from state once it has served its purpose, and controls who besides the owner may purge it.

## Shape

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

## How it works

Deletion happens in the same transaction as the qualifying transfer, after the transfer succeeds. An approval used under a forceful override that never matches its own deletion condition stays in state.

### Examples

Single-use listing:

```json
{ "autoDeletionOptions": { "afterOneUse": true, "afterOverallMaxNumTransfers": false } }
```

Delete after ten uses:

```json
{
  "maxNumTransfers": { "overallMaxNumTransfers": "10" },
  "autoDeletionOptions": { "afterOneUse": false, "afterOverallMaxNumTransfers": true }
}
```

Let the counterparty reject:

```json
{
  "autoDeletionOptions": {
    "afterOneUse": false,
    "afterOverallMaxNumTransfers": false,
    "allowCounterpartyPurge": true
  }
}
```

Let anyone clean up expired approvals:

```json
{
  "autoDeletionOptions": {
    "afterOneUse": false,
    "afterOverallMaxNumTransfers": false,
    "allowPurgeIfExpired": true
  }
}
```

`MsgPurgeApprovals` honors these flags: purging another user's approvals succeeds only for approvals that set `allowCounterpartyPurge` (and the caller is the counterparty) or `allowPurgeIfExpired` (and the approval is expired).

## Related

- [Approval trackers](approval-trackers.md)
- [MsgPurgeApprovals](../messages/msg-purge-approvals.md)
