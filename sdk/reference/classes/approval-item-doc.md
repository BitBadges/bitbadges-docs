---
description: "T extends NumberType"
---

# Class: ApprovalItemDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:288](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L288)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`ApprovalItemDoc`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc)\<`T`\>

## Constructors

### Constructor

> **new ApprovalItemDoc**\<`T`\>(`data`): `ApprovalItemDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:311](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L311)

#### Parameters

##### data

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc)\<`T`\>

#### Returns

`ApprovalItemDoc`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:289](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L289)

A unique stringified document ID

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`_docId`](/sdk/reference/interfaces/i-approval-item-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:290](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L290)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`_id`](/sdk/reference/interfaces/i-approval-item-doc#_id)

***

### approval

> **approval**: [`CollectionApproval`](/sdk/reference/classes/collection-approval)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:301](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L301)

Approval itself

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`approval`](/sdk/reference/interfaces/i-approval-item-doc#approval)

***

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:292](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L292)

The approval ID

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`approvalId`](/sdk/reference/interfaces/i-approval-item-doc#approvalid)

***

### approvalLevel

> **approvalLevel**: `"incoming"` \| `"outgoing"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:293](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L293)

The approval level

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`approvalLevel`](/sdk/reference/interfaces/i-approval-item-doc#approvallevel)

***

### approvalType

> **approvalType**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:295](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L295)

The approval type

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`approvalType`](/sdk/reference/interfaces/i-approval-item-doc#approvaltype)

***

### approverAddress

> **approverAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:294](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L294)

The approver address

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`approverAddress`](/sdk/reference/interfaces/i-approval-item-doc#approveraddress)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:291](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L291)

The collection ID

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`collectionId`](/sdk/reference/interfaces/i-approval-item-doc#collectionid)

***

### deletedAt?

> `optional` **deletedAt?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:300](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L300)

Deleted at timestamp

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`deletedAt`](/sdk/reference/interfaces/i-approval-item-doc#deletedat)

***

### denom?

> `optional` **denom?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:305](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L305)

Denom

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`denom`](/sdk/reference/interfaces/i-approval-item-doc#denom)

***

### intentPayAmount?

> `optional` **intentPayAmount?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:308](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L308)

Intent: the amount the creator pays out

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`intentPayAmount`](/sdk/reference/interfaces/i-approval-item-doc#intentpayamount)

***

### intentPayDenom?

> `optional` **intentPayDenom?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:306](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L306)

Intent: the denom the creator pays out

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`intentPayDenom`](/sdk/reference/interfaces/i-approval-item-doc#intentpaydenom)

***

### intentReceiveAmount?

> `optional` **intentReceiveAmount?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:309](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L309)

Intent: the amount the creator receives

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`intentReceiveAmount`](/sdk/reference/interfaces/i-approval-item-doc#intentreceiveamount)

***

### intentReceiveDenom?

> `optional` **intentReceiveDenom?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:307](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L307)

Intent: the denom the creator receives

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`intentReceiveDenom`](/sdk/reference/interfaces/i-approval-item-doc#intentreceivedenom)

***

### isActive?

> `optional` **isActive?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:302](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L302)

Is active currently

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`isActive`](/sdk/reference/interfaces/i-approval-item-doc#isactive)

***

### nextCheckTime?

> `optional` **nextCheckTime?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:303](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L303)

Next check time

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`nextCheckTime`](/sdk/reference/interfaces/i-approval-item-doc#nextchecktime)

***

### numTransfersLeft?

> `optional` **numTransfersLeft?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:304](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L304)

Number of transfers left

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`numTransfersLeft`](/sdk/reference/interfaces/i-approval-item-doc#numtransfersleft)

***

### price?

> `optional` **price?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:296](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L296)

The price of the listing

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`price`](/sdk/reference/interfaces/i-approval-item-doc#price)

***

### sufficientBalances?

> `optional` **sufficientBalances?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:299](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L299)

Owner has sufficient balances

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`sufficientBalances`](/sdk/reference/interfaces/i-approval-item-doc#sufficientbalances)

***

### tokenId?

> `optional` **tokenId?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:297](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L297)

The token ID

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`tokenId`](/sdk/reference/interfaces/i-approval-item-doc#tokenid)

***

### used?

> `optional` **used?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:298](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L298)

Explicitly marked as used or expired

#### Implementation of

[`iApprovalItemDoc`](/sdk/reference/interfaces/i-approval-item-doc).[`used`](/sdk/reference/interfaces/i-approval-item-doc#used)

## Methods

### clone()

> **clone**(): `ApprovalItemDoc`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`ApprovalItemDoc`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `ApprovalItemDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:340](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L340)

Converts the object to a different NumberType equivalent.

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`val`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`ApprovalItemDoc`\<`U`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`convert`](/sdk/reference/classes/base-number-type-class#convert)

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

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`equals`](/sdk/reference/classes/base-number-type-class#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:336](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L336)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`getNumberFieldNames`](/sdk/reference/classes/base-number-type-class#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`hasNumberFields`](/sdk/reference/classes/base-number-type-class#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`toJson`](/sdk/reference/classes/base-number-type-class#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`toJsonString`](/sdk/reference/classes/base-number-type-class#tojsonstring)
