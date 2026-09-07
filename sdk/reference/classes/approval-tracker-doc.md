---
description: "T extends NumberType"
---

# Class: ApprovalTrackerDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1467](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1467)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`ApprovalTrackerDoc`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iApprovalTrackerDoc`](/sdk/reference/interfaces/i-approval-tracker-doc)\<`T`\>

## Constructors

### Constructor

> **new ApprovalTrackerDoc**\<`T`\>(`data`): `ApprovalTrackerDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1481](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1481)

#### Parameters

##### data

[`iApprovalTrackerDoc`](/sdk/reference/interfaces/i-approval-tracker-doc)\<`T`\> & [`Doc`](/sdk/reference/interfaces/doc) & [`iAmountTrackerIdDetails`](/sdk/reference/interfaces/i-amount-tracker-id-details)\<`T`\>

#### Returns

`ApprovalTrackerDoc`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1468](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1468)

A unique stringified document ID

#### Implementation of

[`iApprovalTrackerDoc`](/sdk/reference/interfaces/i-approval-tracker-doc).[`_docId`](/sdk/reference/interfaces/i-approval-tracker-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1469](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1469)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iApprovalTrackerDoc`](/sdk/reference/interfaces/i-approval-tracker-doc).[`_id`](/sdk/reference/interfaces/i-approval-tracker-doc#_id)

***

### amounts

> **amounts**: [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1471](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1471)

A tally of the amounts transferred for this approval.

#### Implementation of

[`iApprovalTrackerDoc`](/sdk/reference/interfaces/i-approval-tracker-doc).[`amounts`](/sdk/reference/interfaces/i-approval-tracker-doc#amounts)

***

### amountTrackerId

> **amountTrackerId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1474](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1474)

The amount tracker ID of the approval.

#### Implementation of

[`iApprovalTrackerDoc`](/sdk/reference/interfaces/i-approval-tracker-doc).[`amountTrackerId`](/sdk/reference/interfaces/i-approval-tracker-doc#amounttrackerid)

***

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1473](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1473)

The approval ID

#### Implementation of

[`iApprovalTrackerDoc`](/sdk/reference/interfaces/i-approval-tracker-doc).[`approvalId`](/sdk/reference/interfaces/i-approval-tracker-doc#approvalid)

***

### approvalLevel

> **approvalLevel**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1475](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1475)

The approval level of the approval "collection", "incoming", or "outgoing".

#### Implementation of

[`iApprovalTrackerDoc`](/sdk/reference/interfaces/i-approval-tracker-doc).[`approvalLevel`](/sdk/reference/interfaces/i-approval-tracker-doc#approvallevel)

***

### approvedAddress

> **approvedAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1478](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1478)

The address to check for the approval.

#### Implementation of

[`iApprovalTrackerDoc`](/sdk/reference/interfaces/i-approval-tracker-doc).[`approvedAddress`](/sdk/reference/interfaces/i-approval-tracker-doc#approvedaddress)

***

### approverAddress

> **approverAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1476](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1476)

The address of the approval to check.

#### Implementation of

[`iApprovalTrackerDoc`](/sdk/reference/interfaces/i-approval-tracker-doc).[`approverAddress`](/sdk/reference/interfaces/i-approval-tracker-doc#approveraddress)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1472](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1472)

The collection ID for the approval.

#### Implementation of

[`iApprovalTrackerDoc`](/sdk/reference/interfaces/i-approval-tracker-doc).[`collectionId`](/sdk/reference/interfaces/i-approval-tracker-doc#collectionid)

***

### lastUpdatedAt

> **lastUpdatedAt**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1479](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1479)

Last updated timestamp

#### Implementation of

[`iApprovalTrackerDoc`](/sdk/reference/interfaces/i-approval-tracker-doc).[`lastUpdatedAt`](/sdk/reference/interfaces/i-approval-tracker-doc#lastupdatedat)

***

### numTransfers

> **numTransfers**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1470](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1470)

The number of transfers. Is an incrementing tally.

#### Implementation of

[`iApprovalTrackerDoc`](/sdk/reference/interfaces/i-approval-tracker-doc).[`numTransfers`](/sdk/reference/interfaces/i-approval-tracker-doc#numtransfers)

***

### trackerType

> **trackerType**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1477](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1477)

The type of tracker to check "overall", "to", "from", or "initiatedBy".

#### Implementation of

[`iApprovalTrackerDoc`](/sdk/reference/interfaces/i-approval-tracker-doc).[`trackerType`](/sdk/reference/interfaces/i-approval-tracker-doc#trackertype)

## Methods

### clone()

> **clone**(): `ApprovalTrackerDoc`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`ApprovalTrackerDoc`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `ApprovalTrackerDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1501](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1501)

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

`ApprovalTrackerDoc`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1497](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1497)

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
