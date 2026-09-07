---
description: "Filter Collection Approvals Route: POST /api/v0/collection/:collectionId/filterApprovals"
---

# Interface: iFilterCollectionApprovalsPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4851](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4851)

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4853](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4853)

Mongo-style filter object (matches the ApprovalItemDoc shape).

***

### sortBy

> **sortBy**: `Record`\<`string`, `unknown`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4855](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4855)

Mongo-style sort object (e.g. `{ _id: -1 }`).
