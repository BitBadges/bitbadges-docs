---
description: "T extends NumberType"
---

# Interface: iGetBalanceByAddressSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:261](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L261)

## Extends

- [`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L13)

A unique stringified document ID

#### Inherited from

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`_docId`](/sdk/reference/interfaces/i-balance-doc-with-details#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L16)

A unique document ID (Mongo DB ObjectID)

#### Inherited from

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`_id`](/sdk/reference/interfaces/i-balance-doc-with-details#_id)

***

### autoApproveAllIncomingTransfers

> **autoApproveAllIncomingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L27)

Whether the user's all incoming transfers are auto-approved. If not, they must be explicitly approved using the incoming approvals.

#### Inherited from

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`autoApproveAllIncomingTransfers`](/sdk/reference/interfaces/i-balance-doc-with-details#autoapproveallincomingtransfers)

***

### autoApproveSelfInitiatedIncomingTransfers

> **autoApproveSelfInitiatedIncomingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L25)

Whether the user's self-initiated incoming transfers are auto-approved. If not, they must be explicitly approved using the incoming approvals.

#### Inherited from

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`autoApproveSelfInitiatedIncomingTransfers`](/sdk/reference/interfaces/i-balance-doc-with-details#autoapproveselfinitiatedincomingtransfers)

***

### autoApproveSelfInitiatedOutgoingTransfers

> **autoApproveSelfInitiatedOutgoingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L23)

Whether the user's self-initiated outgoing transfers are auto-approved. If not, they must be explicitly approved using the outgoing approvals.

#### Inherited from

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`autoApproveSelfInitiatedOutgoingTransfers`](/sdk/reference/interfaces/i-balance-doc-with-details#autoapproveselfinitiatedoutgoingtransfers)

***

### balances

> **balances**: [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:15](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L15)

The user's balances.

#### Inherited from

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`balances`](/sdk/reference/interfaces/i-balance-doc-with-details#balances)

***

### bitbadgesAddress

> **bitbadgesAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:765](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L765)

The BitBadges address of the user

#### Inherited from

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`bitbadgesAddress`](/sdk/reference/interfaces/i-balance-doc-with-details#bitbadgesaddress)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:762](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L762)

The collection ID

#### Inherited from

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`collectionId`](/sdk/reference/interfaces/i-balance-doc-with-details#collectionid)

***

### incomingApprovals

> **incomingApprovals**: [`iUserIncomingApprovalWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:799](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L799)

The incoming approvals with details like metadata and address lists.

#### Inherited from

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`incomingApprovals`](/sdk/reference/interfaces/i-balance-doc-with-details#incomingapprovals)

***

### outgoingApprovals

> **outgoingApprovals**: [`iUserOutgoingApprovalWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:797](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L797)

The outgoing approvals with details like metadata and address lists.

#### Inherited from

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`outgoingApprovals`](/sdk/reference/interfaces/i-balance-doc-with-details#outgoingapprovals)

***

### tags?

> `optional` **tags?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:771](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L771)

Optional tags for this balance

#### Inherited from

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`tags`](/sdk/reference/interfaces/i-balance-doc-with-details#tags)

***

### updateHistory

> **updateHistory**: [`iUpdateHistory`](/sdk/reference/interfaces/i-update-history)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:768](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L768)

The update history of this balance

#### Inherited from

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`updateHistory`](/sdk/reference/interfaces/i-balance-doc-with-details#updatehistory)

***

### userPermissions

> **userPermissions**: [`iUserPermissionsWithDetails`](/sdk/reference/interfaces/i-user-permissions-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:801](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L801)

The user permissions with details like metadata and address lists.

#### Inherited from

[`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details).[`userPermissions`](/sdk/reference/interfaces/i-balance-doc-with-details#userpermissions)
