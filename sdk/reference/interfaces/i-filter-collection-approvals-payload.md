---
description: "Filter Collection Approvals Route: POST /api/v0/collection/:collectionId/filterApprovals"
---

# Interface: iFilterCollectionApprovalsPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4746](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4746)

Filter Collection Approvals
Route: POST /api/v0/collection/:collectionId/filterApprovals

Free-form mongo-style filter against the approval-item store, scoped
to a single collection (or all collections when `collectionId === 'any'`).
Returns the balance docs of the approvers that match.

The `query` and `sortBy` fields are intentionally untyped — the
indexer forwards them to the underlying mongoose query so callers
can filter on any indexed field (approverAddress, approvalType,
isActive, sufficientBalances, intentPayDenom, etc.).

## Properties

### query

> **query**: `Record`\<`string`, `unknown`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4748](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4748)

Mongo-style filter object (matches the ApprovalItemDoc shape).

***

### sortBy

> **sortBy**: `Record`\<`string`, `unknown`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4750](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4750)

Mongo-style sort object (e.g. `{ _id: -1 }`).
