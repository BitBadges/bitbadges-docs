---
description: "T extends NumberType"
---

# Interface: iBalanceDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:760](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L760)

## Extends

- [`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store)\<`T`\>.[`Doc`](/sdk/reference/interfaces/doc)

## Extended by

- [`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L13)

A unique stringified document ID

#### Inherited from

[`Doc`](/sdk/reference/interfaces/doc).[`_docId`](/sdk/reference/interfaces/doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L16)

A unique document ID (Mongo DB ObjectID)

#### Inherited from

[`Doc`](/sdk/reference/interfaces/doc).[`_id`](/sdk/reference/interfaces/doc#_id)

***

### autoApproveAllIncomingTransfers

> **autoApproveAllIncomingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L27)

Whether the user's all incoming transfers are auto-approved. If not, they must be explicitly approved using the incoming approvals.

#### Inherited from

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`autoApproveAllIncomingTransfers`](/sdk/reference/interfaces/i-user-balance-store#autoapproveallincomingtransfers)

***

### autoApproveSelfInitiatedIncomingTransfers

> **autoApproveSelfInitiatedIncomingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L25)

Whether the user's self-initiated incoming transfers are auto-approved. If not, they must be explicitly approved using the incoming approvals.

#### Inherited from

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`autoApproveSelfInitiatedIncomingTransfers`](/sdk/reference/interfaces/i-user-balance-store#autoapproveselfinitiatedincomingtransfers)

***

### autoApproveSelfInitiatedOutgoingTransfers

> **autoApproveSelfInitiatedOutgoingTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L23)

Whether the user's self-initiated outgoing transfers are auto-approved. If not, they must be explicitly approved using the outgoing approvals.

#### Inherited from

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`autoApproveSelfInitiatedOutgoingTransfers`](/sdk/reference/interfaces/i-user-balance-store#autoapproveselfinitiatedoutgoingtransfers)

***

### balances

> **balances**: [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:15](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L15)

The user's balances.

#### Inherited from

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`balances`](/sdk/reference/interfaces/i-user-balance-store#balances)

***

### bitbadgesAddress

> **bitbadgesAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:765](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L765)

The BitBadges address of the user

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:762](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L762)

The collection ID

***

### incomingApprovals

> **incomingApprovals**: [`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L17)

The user's incoming approvals.

#### Inherited from

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`incomingApprovals`](/sdk/reference/interfaces/i-user-balance-store#incomingapprovals)

***

### outgoingApprovals

> **outgoingApprovals**: [`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:19](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L19)

The user's outgoing approvals.

#### Inherited from

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`outgoingApprovals`](/sdk/reference/interfaces/i-user-balance-store#outgoingapprovals)

***

### tags?

> `optional` **tags?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:771](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L771)

Optional tags for this balance

***

### updateHistory

> **updateHistory**: [`iUpdateHistory`](/sdk/reference/interfaces/i-update-history)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:768](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L768)

The update history of this balance

***

### userPermissions

> **userPermissions**: [`iUserPermissions`](/sdk/reference/interfaces/i-user-permissions)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/userBalances.ts#L21)

The user's permissions.

#### Inherited from

[`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store).[`userPermissions`](/sdk/reference/interfaces/i-user-balance-store#userpermissions)
