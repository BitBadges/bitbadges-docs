---
description: "Generated schema for tokenization/approvals.proto: 4 messages in the x/tokenization module."
---

# tokenization/approvals.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 4 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/approvals.proto).

## Messages

### ApprovalIdentifierDetails

ApprovalIdentifierDetails defines the details to identify a specific approval.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `approvalId` | 1 | `string` | singular | The ID of the approval. |
| `approvalLevel` | 2 | `string` | singular | The level of the approval. Can be "collection", "incoming", or "outgoing". |
| `approverAddress` | 3 | `string` | singular | The address of the approver. Leave blank "" if approvalLevel == "collection". |
| `version` | 4 | `string` | singular | The version of the approval. |

### CollectionApproval

CollectionApproval defines the rules for the approval of a transfer.

Each transfer can be broken down into a (from, to, initiatedBy, transferTime, tokenId) tuple.

We check the approvals for first match of this tuple, using the approvals. Subsequent matches are ignored.

If the first match is disallowed, the transfer is disallowed.

If the first match is allowed, then we check the rest of the restrictions. If any restrictions fail, then the transfer is disallowed.

We do not proceed to the next match.

Challenges defines the challenges that must be met with valid solutions for the transfer to be approved.

requireTo/From(DoesNot)EqualsInitiatedBy defines whether the to/from address must equal the initiatedBy address or not. If it doesn't, then the transfer is disallowed.

overallApprovals defines the overall approvals for the transfer (i.e. the running tally of the number of transfers and amounts transferred by all addresses).

perAddressApprovals defines the approvals per unique from, to, and/or initiatedBy address.

If any of these are nil, we assume unlimited approvals.

IMPORTANT: We track the number of transfers and amounts transferred according to a tracker ID. This is a running tally that increments over time.

Whenever a transfer is processed that maps to a specific tracker ID, we increment the number of transfers and amounts transferred.

If the number of transfers or amounts transferred exceeds the corresponding overall or per address approvals, then the transfer is disallowed.

Note we only track if overallApprovals or to/from/intiiatedByApprovals is not nil.

If you want to reset the tracker tally, update the tracker ID to a new unique tracker ID.

Tracker IDs are unique to their timelines. A tracker ID "abc" can be used for the collection, outgoing, and incoming timelines without overlap or overwriting one another.

Ex: If overallApprovals maxNumTransfers = 20 and trackerID = "abc", then the first 20 transfers that map to trackerID = "abc" will be approved. The 21st transfer will be disallowed.

IMPORTANT: Be very careful when updating an approved transfer but keeping the same tracker ID.

For example, if you change the corresponding token IDs and the old token IDs overlap, then the overlapping token IDs will already have existing tallies.

Another common area of confusion is what is actually being tallied. The tally is based on the approved transfer rules that are set.

For example, if you don't have per address rules set and you update the approved transfer rules to include per address rules,

then the tally doesn't retroactively apply the per address rules to the previous transfers. It starts at that time.

Lastly, we have overridesFromOutgoingApprovals and overridesToIncomingApprovals.

If these are set to true, we ignore the from / to user's approved outgoing / incoming transfers, respectively.

This is useful, for example, for forcefully revoking tokens.

If these are set to false, the transfer must also be approved by the from /to user's approved outgoing / incoming transfers, respectively.

CollectionApproval defines the rules for the approval of a transfer on the collection level

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `fromListId` | 1 | `string` | singular | The list ID for the sender of the transfer. |
| `toListId` | 2 | `string` | singular | The list ID for the recipient of the transfer. |
| `initiatedByListId` | 3 | `string` | singular | The list ID for the user who initiated the transfer. |
| `transferTimes` | 4 | [`UintRange`](balances.md#uintrange) | repeated | The allowed range of transfer times for approval. |
| `tokenIds` | 5 | [`UintRange`](balances.md#uintrange) | repeated | The allowed range of token IDs for approval. |
| `ownershipTimes` | 6 | [`UintRange`](balances.md#uintrange) | repeated | The allowed range of ownership times for approval. |
| `uri` | 7 | `string` | singular | The URI associated with this approval, optionally providing metadata about the approval. |
| `customData` | 8 | `string` | singular | Arbitrary custom data associated with this approval. |
| `approvalId` | 9 | `string` | singular | The ID of this approval. Must be unique per level (i.e. collection, outgoing, incoming). |
| `approvalCriteria` | 10 | [`ApprovalCriteria`](approval_criteria.md#approvalcriteria) | singular | The criteria that must be met for this approval to be considered. |
| `version` | 11 | `string` | singular | Version of the approval. Maintained internally. |

### UserIncomingApproval

UserIncomingApproval defines the rules for the approval of an incoming transfer to a user.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `fromListId` | 1 | `string` | singular | The list ID for the sender of the transfer. |
| `initiatedByListId` | 2 | `string` | singular | The list ID for the user who initiated the transfer. |
| `transferTimes` | 3 | [`UintRange`](balances.md#uintrange) | repeated | The allowed range of transfer times for approval. |
| `tokenIds` | 4 | [`UintRange`](balances.md#uintrange) | repeated | The allowed range of token IDs for approval. |
| `ownershipTimes` | 5 | [`UintRange`](balances.md#uintrange) | repeated | The allowed range of ownership times for approval. |
| `uri` | 6 | `string` | singular | The URI associated with this approval, optionally providing metadata about the approval. |
| `customData` | 7 | `string` | singular | Arbitrary custom data associated with this approval. |
| `approvalId` | 8 | `string` | singular | The ID of this approval. Must be unique per level (i.e. collection, outgoing, incoming). |
| `approvalCriteria` | 9 | [`IncomingApprovalCriteria`](approval_criteria.md#incomingapprovalcriteria) | singular | The criteria that must be met for this approval to be considered. |
| `version` | 10 | `string` | singular | Version of the approval. Maintained internally. |

### UserOutgoingApproval

UserOutgoingApproval defines the rules for the approval of an outgoing transfer from a user.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `toListId` | 1 | `string` | singular | The list ID for the recipient of the transfer. |
| `initiatedByListId` | 2 | `string` | singular | The list ID for the user who initiated the transfer. |
| `transferTimes` | 3 | [`UintRange`](balances.md#uintrange) | repeated | The allowed range of transfer times for approval. |
| `tokenIds` | 4 | [`UintRange`](balances.md#uintrange) | repeated | The allowed range of token IDs for approval. |
| `ownershipTimes` | 5 | [`UintRange`](balances.md#uintrange) | repeated | The allowed range of ownership times for approval. |
| `uri` | 6 | `string` | singular | The URI associated with this approval, optionally providing metadata about the approval. |
| `customData` | 7 | `string` | singular | Arbitrary custom data associated with this approval. |
| `approvalId` | 8 | `string` | singular | The ID of this approval. Must be unique per level (i.e. collection, outgoing, incoming). |
| `approvalCriteria` | 9 | [`OutgoingApprovalCriteria`](approval_criteria.md#outgoingapprovalcriteria) | singular | The criteria that must be met for this approval to be considered. |
| `version` | 10 | `string` | singular | Version of the approval. Maintained internally. |
