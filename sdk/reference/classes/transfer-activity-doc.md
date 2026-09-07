---
description: "T extends NumberType"
---

# Class: TransferActivityDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:77](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L77)

## Extends

- [`ActivityDoc`](/sdk/reference/classes/activity-doc)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc)\<`T`\>

## Constructors

### Constructor

> **new TransferActivityDoc**\<`T`\>(`data`): `TransferActivityDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:98](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L98)

#### Parameters

##### data

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc)\<`T`\>

#### Returns

`TransferActivityDoc`\<`T`\>

#### Overrides

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`constructor`](/sdk/reference/classes/activity-doc#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:24](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L24)

A unique stringified document ID

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`_docId`](/sdk/reference/interfaces/i-transfer-activity-doc#_docid)

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`_docId`](/sdk/reference/classes/activity-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L25)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`_id`](/sdk/reference/interfaces/i-transfer-activity-doc#_id)

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`_id`](/sdk/reference/classes/activity-doc#_id)

***

### \_notificationsHandled?

> `optional` **\_notificationsHandled?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L23)

Whether or not the notifications have been handled by the indexer or not.

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`_notificationsHandled`](/sdk/reference/interfaces/i-transfer-activity-doc#_notificationshandled)

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`_notificationsHandled`](/sdk/reference/classes/activity-doc#_notificationshandled)

***

### approvalsUsed?

> `optional` **approvalsUsed?**: [`ApprovalIdentifierDetails`](/sdk/reference/classes/approval-identifier-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:92](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L92)

Approvals used for the transfer

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`approvalsUsed`](/sdk/reference/interfaces/i-transfer-activity-doc#approvalsused)

***

### balances

> **balances**: [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:80](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L80)

The list of balances and token IDs that were transferred.

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`balances`](/sdk/reference/interfaces/i-transfer-activity-doc#balances)

***

### block

> **block**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:22](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L22)

The block number of the activity.

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`block`](/sdk/reference/interfaces/i-transfer-activity-doc#block)

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`block`](/sdk/reference/classes/activity-doc#block)

***

### coinTransfers?

> `optional` **coinTransfers?**: [`CoinTransferItem`](/sdk/reference/classes/coin-transfer-item)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:91](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L91)

Coin transfers details

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`coinTransfers`](/sdk/reference/interfaces/i-transfer-activity-doc#cointransfers)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:81](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L81)

The collection ID for the tokens that was transferred.

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`collectionId`](/sdk/reference/interfaces/i-transfer-activity-doc#collectionid)

***

### denom?

> `optional` **denom?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:96](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L96)

The denomination of the transfer

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`denom`](/sdk/reference/interfaces/i-transfer-activity-doc#denom)

***

### from

> **from**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:79](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L79)

The sender of the tokens.

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`from`](/sdk/reference/interfaces/i-transfer-activity-doc#from)

***

### initiatedBy

> **initiatedBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:82](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L82)

The user who initiated the transfer transaction.

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`initiatedBy`](/sdk/reference/interfaces/i-transfer-activity-doc#initiatedby)

***

### memo?

> `optional` **memo?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:85](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L85)

The memo of the transfer.

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`memo`](/sdk/reference/interfaces/i-transfer-activity-doc#memo)

***

### precalculateBalancesFromApproval?

> `optional` **precalculateBalancesFromApproval?**: [`PrecalculateBalancesFromApprovalDetails`](/sdk/reference/classes/precalculate-balances-from-approval-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:86](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L86)

Which approval to use to precalculate the balances?

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`precalculateBalancesFromApproval`](/sdk/reference/interfaces/i-transfer-activity-doc#precalculatebalancesfromapproval)

***

### precalculationOptions?

> `optional` **precalculationOptions?**: [`PrecalculationOptions`](/sdk/reference/classes/precalculation-options)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:90](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L90)

Precalculation options

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`precalculationOptions`](/sdk/reference/interfaces/i-transfer-activity-doc#precalculationoptions)

***

### price?

> `optional` **price?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:94](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L94)

The price of the transfer

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`price`](/sdk/reference/interfaces/i-transfer-activity-doc#price)

***

### prioritizedApprovals?

> `optional` **prioritizedApprovals?**: [`ApprovalIdentifierDetails`](/sdk/reference/classes/approval-identifier-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:87](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L87)

The prioritized approvals of the transfer. This is used to check certain approvals before others to ensure intended behavior.

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`prioritizedApprovals`](/sdk/reference/interfaces/i-transfer-activity-doc#prioritizedapprovals)

***

### private?

> `optional` **private?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:89](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L89)

Only for private purposes?

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`private`](/sdk/reference/interfaces/i-transfer-activity-doc#private)

***

### timestamp

> **timestamp**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L21)

The timestamp of the activity.

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`timestamp`](/sdk/reference/interfaces/i-transfer-activity-doc#timestamp)

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`timestamp`](/sdk/reference/classes/activity-doc#timestamp)

***

### to

> **to**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:78](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L78)

The list of recipients.

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`to`](/sdk/reference/interfaces/i-transfer-activity-doc#to)

***

### tokenId?

> `optional` **tokenId?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L93)

The token ID for the transfer

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`tokenId`](/sdk/reference/interfaces/i-transfer-activity-doc#tokenid)

***

### txHash?

> `optional` **txHash?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:83](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L83)

The transaction hash of the activity.

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`txHash`](/sdk/reference/interfaces/i-transfer-activity-doc#txhash)

***

### volume?

> `optional` **volume?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:95](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L95)

The volume of the transfer

#### Implementation of

[`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc).[`volume`](/sdk/reference/interfaces/i-transfer-activity-doc#volume)

## Methods

### clone()

> **clone**(): [`ActivityDoc`](/sdk/reference/classes/activity-doc)

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

[`ActivityDoc`](/sdk/reference/classes/activity-doc)

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`clone`](/sdk/reference/classes/activity-doc#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `TransferActivityDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:125](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L125)

Converts the object to a different NumberType equivalent.

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`TransferActivityDoc`\<`U`\>

#### Overrides

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`convert`](/sdk/reference/classes/activity-doc#convert)

***

### equals()

> **equals**\<`U`\>(`other`, `normalizeNumberTypes?`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:147](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L147)

Compares this object's fields to another object's fields for equality. Equality is determined by comparing the JSON representations of the objects.

If `normalizeNumberTypes` is true, then all number types will be compared as strings (i.e. "1n" === "1" === 1). Else, they will be compared as their native types (i.e. 1n !== 1 !== "1").

#### Type Parameters

##### U

`U` *extends* [`CustomType`](/sdk/reference/interfaces/custom-type)\<`U`\>

#### Parameters

##### other

[`CustomType`](/sdk/reference/interfaces/custom-type)\<`U`\> \| `null` \| `undefined`

##### normalizeNumberTypes?

`boolean`

#### Returns

`boolean`

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`equals`](/sdk/reference/classes/activity-doc#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:121](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L121)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Overrides

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`getNumberFieldNames`](/sdk/reference/classes/activity-doc#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`hasNumberFields`](/sdk/reference/classes/activity-doc#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`toJson`](/sdk/reference/classes/activity-doc#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`toJsonString`](/sdk/reference/classes/activity-doc#tojsonstring)
