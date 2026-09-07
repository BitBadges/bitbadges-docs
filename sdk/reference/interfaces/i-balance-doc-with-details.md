---
description: "T extends NumberType"
---

# Interface: iBalanceDocWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:795](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L795)

## Extends

- [`iBalanceDoc`](/sdk/reference/interfaces/i-balance-doc)\<`T`\>

## Extended by

- [`iGetBalanceByAddressSuccessResponse`](/sdk/reference/interfaces/i-get-balance-by-address-success-response)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L13)

A unique stringified document ID

#### Inherited from

[`iBalanceDoc`](/sdk/reference/interfaces/i-balance-doc).[`_docId`](/sdk/reference/interfaces/i-balance-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L16)

A unique document ID (Mongo DB ObjectID)

#### Inherited from

[`iBalanceDoc`](/sdk/reference/interfaces/i-balance-doc).[`_id`](/sdk/reference/interfaces/i-balance-doc#_id)

***

### autoApproveAllIncomingTransfers

> **autoApproveAllIncomingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L27)

Whether the user's all incoming transfers are auto-approved. If not, they must be explicitly approved using the incoming approvals.

#### Inherited from

[`iBalanceDoc`](/sdk/reference/interfaces/i-balance-doc).[`autoApproveAllIncomingTransfers`](/sdk/reference/interfaces/i-balance-doc#autoapproveallincomingtransfers)

***

### autoApproveSelfInitiatedIncomingTransfers

> **autoApproveSelfInitiatedIncomingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L25)

Whether the user's self-initiated incoming transfers are auto-approved. If not, they must be explicitly approved using the incoming approvals.

#### Inherited from

[`iBalanceDoc`](/sdk/reference/interfaces/i-balance-doc).[`autoApproveSelfInitiatedIncomingTransfers`](/sdk/reference/interfaces/i-balance-doc#autoapproveselfinitiatedincomingtransfers)

***

### autoApproveSelfInitiatedOutgoingTransfers

> **autoApproveSelfInitiatedOutgoingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L23)

Whether the user's self-initiated outgoing transfers are auto-approved. If not, they must be explicitly approved using the outgoing approvals.

#### Inherited from

[`iBalanceDoc`](/sdk/reference/interfaces/i-balance-doc).[`autoApproveSelfInitiatedOutgoingTransfers`](/sdk/reference/interfaces/i-balance-doc#autoapproveselfinitiatedoutgoingtransfers)

***

### balances

> **balances**: [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:15](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L15)

The user's balances.

#### Inherited from

[`iBalanceDoc`](/sdk/reference/interfaces/i-balance-doc).[`balances`](/sdk/reference/interfaces/i-balance-doc#balances)

***

### bitbadgesAddress

> **bitbadgesAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:765](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L765)

The BitBadges address of the user

#### Inherited from

[`iBalanceDoc`](/sdk/reference/interfaces/i-balance-doc).[`bitbadgesAddress`](/sdk/reference/interfaces/i-balance-doc#bitbadgesaddress)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:762](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L762)

The collection ID

#### Inherited from

[`iBalanceDoc`](/sdk/reference/interfaces/i-balance-doc).[`collectionId`](/sdk/reference/interfaces/i-balance-doc#collectionid)

***

### incomingApprovals

> **incomingApprovals**: [`iUserIncomingApprovalWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:799](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L799)

The incoming approvals with details like metadata and address lists.

#### Overrides

[`iBalanceDoc`](/sdk/reference/interfaces/i-balance-doc).[`incomingApprovals`](/sdk/reference/interfaces/i-balance-doc#incomingapprovals)

***

### outgoingApprovals

> **outgoingApprovals**: [`iUserOutgoingApprovalWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:797](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L797)

The outgoing approvals with details like metadata and address lists.

#### Overrides

[`iBalanceDoc`](/sdk/reference/interfaces/i-balance-doc).[`outgoingApprovals`](/sdk/reference/interfaces/i-balance-doc#outgoingapprovals)

***

### tags?

> `optional` **tags?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:771](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L771)

Optional tags for this balance

#### Inherited from

[`iBalanceDoc`](/sdk/reference/interfaces/i-balance-doc).[`tags`](/sdk/reference/interfaces/i-balance-doc#tags)

***

### updateHistory

> **updateHistory**: [`iUpdateHistory`](/sdk/reference/interfaces/i-update-history)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:768](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L768)

The update history of this balance

#### Inherited from

[`iBalanceDoc`](/sdk/reference/interfaces/i-balance-doc).[`updateHistory`](/sdk/reference/interfaces/i-balance-doc#updatehistory)

***

### userPermissions

> **userPermissions**: [`iUserPermissionsWithDetails`](/sdk/reference/interfaces/i-user-permissions-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:801](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L801)

The user permissions with details like metadata and address lists.

#### Overrides

[`iBalanceDoc`](/sdk/reference/interfaces/i-balance-doc).[`userPermissions`](/sdk/reference/interfaces/i-balance-doc#userpermissions)
