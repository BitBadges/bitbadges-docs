---
description: "CollectionApproval represents a collection's approved transfer."
---

# Class: CollectionApproval\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1298](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1298)

CollectionApproval represents a collection's approved transfer.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`CollectionApproval`\<`T`\>\>

## Extended by

- [`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`T`\>

## Constructors

### Constructor

> **new CollectionApproval**\<`T`\>(`msg`): `CollectionApproval`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1311](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1311)

#### Parameters

##### msg

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`T`\>

#### Returns

`CollectionApproval`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### approvalCriteria?

> `optional` **approvalCriteria?**: [`ApprovalCriteria`](/sdk/reference/classes/approval-criteria)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1308](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1308)

The criteria to be met. These represent the restrictions that must be obeyed such as the total amount approved, max num transfers, merkle challenges, must own tokens, etc.

#### Implementation of

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`approvalCriteria`](/sdk/reference/interfaces/i-collection-approval#approvalcriteria)

***

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1305](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1305)

The ID of the approval. Must not be a duplicate of another approval ID in the same timeline.

#### Implementation of

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`approvalId`](/sdk/reference/interfaces/i-collection-approval#approvalid)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1307](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1307)

Arbitrary custom data of the approval

#### Implementation of

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`customData`](/sdk/reference/interfaces/i-collection-approval#customdata)

***

### fromListId

> **fromListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1300](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1300)

The list ID for the user(s) who is sending the tokens. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Implementation of

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`fromListId`](/sdk/reference/interfaces/i-collection-approval#fromlistid)

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1301](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1301)

The list ID for the user(s) who initiate the transfer. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Implementation of

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`initiatedByListId`](/sdk/reference/interfaces/i-collection-approval#initiatedbylistid)

***

### ownershipTimes

> **ownershipTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1304](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1304)

The ownership times of the tokens being transferred.

#### Implementation of

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`ownershipTimes`](/sdk/reference/interfaces/i-collection-approval#ownershiptimes)

***

### tokenIds

> **tokenIds**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1303](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1303)

The token IDs to be transferred.

#### Implementation of

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`tokenIds`](/sdk/reference/interfaces/i-collection-approval#tokenids)

***

### toListId

> **toListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1299](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1299)

The list ID for the user(s) who is receiving the tokens. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Implementation of

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`toListId`](/sdk/reference/interfaces/i-collection-approval#tolistid)

***

### transferTimes

> **transferTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1302](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1302)

The times allowed for the transfer transaction.

#### Implementation of

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`transferTimes`](/sdk/reference/interfaces/i-collection-approval#transfertimes)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1306](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1306)

The URI of the approval.

#### Implementation of

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`uri`](/sdk/reference/interfaces/i-collection-approval#uri)

***

### version

> **version**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1309](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1309)

The version of the approval.0

#### Implementation of

[`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval).[`version`](/sdk/reference/interfaces/i-collection-approval#version)

## Methods

### castToIncomingApproval()

> **castToIncomingApproval**(): [`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1395](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1395)

#### Returns

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval)\<`T`\>

***

### castToOutgoingApproval()

> **castToOutgoingApproval**(): [`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1382](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1382)

#### Returns

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval)\<`T`\>

***

### clone()

> **clone**(): `CollectionApproval`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`CollectionApproval`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `CollectionApproval`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1342](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1342)

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

`CollectionApproval`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1338](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1338)

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

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): `CollectionApproval`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1408](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1408)

#### Parameters

##### prefix

`string`

#### Returns

`CollectionApproval`\<`T`\>

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

***

### toProto()

> **toProto**(): `CollectionApproval`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1346](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1346)

#### Returns

`CollectionApproval`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `CollectionApproval`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1350](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1350)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### jsonValue

`JsonValue`

##### convertFunction

(`item`) => `U`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`CollectionApproval`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `CollectionApproval`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1358](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1358)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### jsonString

`string`

##### convertFunction

(`item`) => `U`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`CollectionApproval`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `CollectionApproval`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1366](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1366)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`CollectionApproval`

##### convertFunction

(`item`) => `U`

#### Returns

`CollectionApproval`\<`U`\>

***

### validateUpdate()

> `static` **validateUpdate**\<`U`\>(`oldApprovals`, `newApprovals`, `canUpdateCollectionApprovals`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1326](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1326)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### oldApprovals

[`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`U`\>[]

##### newApprovals

[`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`U`\>[]

##### canUpdateCollectionApprovals

[`CollectionApprovalPermissionWithDetails`](/sdk/reference/classes/collection-approval-permission-with-details)\<`U`\>[]

#### Returns

`Error` \| `null`
