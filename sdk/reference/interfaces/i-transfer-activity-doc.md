---
description: "T extends NumberType"
---

# Interface: iTransferActivityDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:174](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L174)

## Extends

- [`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L13)

A unique stringified document ID

#### Inherited from

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`_docId`](/sdk/reference/interfaces/i-activity-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L16)

A unique document ID (Mongo DB ObjectID)

#### Inherited from

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`_id`](/sdk/reference/interfaces/i-activity-doc#_id)

***

### \_notificationsHandled?

> `optional` **\_notificationsHandled?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:134](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L134)

Whether or not the notifications have been handled by the indexer or not.

#### Inherited from

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`_notificationsHandled`](/sdk/reference/interfaces/i-activity-doc#_notificationshandled)

***

### approvalsUsed?

> `optional` **approvalsUsed?**: [`iApprovalIdentifierDetails`](/sdk/reference/interfaces/i-approval-identifier-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:198](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L198)

Approvals used for the transfer

***

### balances

> **balances**: [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:180](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L180)

The list of balances and token IDs that were transferred.

***

### block

> **block**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:132](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L132)

The block number of the activity.

#### Inherited from

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`block`](/sdk/reference/interfaces/i-activity-doc#block)

***

### coinTransfers?

> `optional` **coinTransfers?**: [`iCoinTransferItem`](/sdk/reference/interfaces/i-coin-transfer-item)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:196](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L196)

Coin transfers details

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:182](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L182)

The collection ID for the tokens that was transferred.

***

### denom?

> `optional` **denom?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:206](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L206)

The denomination of the transfer

***

### from

> **from**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:178](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L178)

The sender of the tokens.

***

### initiatedBy

> **initiatedBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:190](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L190)

The user who initiated the transfer transaction.

***

### memo?

> `optional` **memo?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:184](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L184)

The memo of the transfer.

***

### precalculateBalancesFromApproval?

> `optional` **precalculateBalancesFromApproval?**: [`iPrecalculateBalancesFromApprovalDetails`](/sdk/reference/interfaces/i-precalculate-balances-from-approval-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:186](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L186)

Which approval to use to precalculate the balances?

***

### precalculationOptions?

> `optional` **precalculationOptions?**: [`iPrecalculationOptions`](/sdk/reference/interfaces/i-precalculation-options)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:194](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L194)

Precalculation options

***

### price?

> `optional` **price?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:202](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L202)

The price of the transfer

***

### prioritizedApprovals?

> `optional` **prioritizedApprovals?**: [`iApprovalIdentifierDetails`](/sdk/reference/interfaces/i-approval-identifier-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:188](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L188)

The prioritized approvals of the transfer. This is used to check certain approvals before others to ensure intended behavior.

***

### private?

> `optional` **private?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:136](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L136)

Only for private purposes?

#### Inherited from

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`private`](/sdk/reference/interfaces/i-activity-doc#private)

***

### timestamp

> **timestamp**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:130](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L130)

The timestamp of the activity.

#### Inherited from

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`timestamp`](/sdk/reference/interfaces/i-activity-doc#timestamp)

***

### to

> **to**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:176](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L176)

The list of recipients.

***

### tokenId?

> `optional` **tokenId?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:200](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L200)

The token ID for the transfer

***

### txHash?

> `optional` **txHash?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:192](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L192)

The transaction hash of the activity.

***

### volume?

> `optional` **volume?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:204](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L204)

The volume of the transfer
