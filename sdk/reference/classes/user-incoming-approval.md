---
description: "UserIncomingApproval represents a user's approved incoming transfer."
---

# Class: UserIncomingApproval\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1050](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1050)

UserIncomingApproval represents a user's approved incoming transfer.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`UserIncomingApproval`\<`T`\>\>

## Extended by

- [`UserIncomingApprovalWithDetails`](/sdk/reference/classes/user-incoming-approval-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval)\<`T`\>

## Constructors

### Constructor

> **new UserIncomingApproval**\<`T`\>(`msg`): `UserIncomingApproval`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1062](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1062)

#### Parameters

##### msg

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval)\<`T`\>

#### Returns

`UserIncomingApproval`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### approvalCriteria?

> `optional` **approvalCriteria?**: [`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1059](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1059)

The criteria to be met. These represent the restrictions that must be obeyed such as the total amount approved, max num transfers, merkle challenges, must own tokens, etc.

#### Implementation of

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`approvalCriteria`](/sdk/reference/interfaces/i-user-incoming-approval#approvalcriteria)

***

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1056](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1056)

The ID of the approval. Must not be a duplicate of another approval ID in the same timeline.

#### Implementation of

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`approvalId`](/sdk/reference/interfaces/i-user-incoming-approval#approvalid)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1058](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1058)

Arbitrary custom data of the approval

#### Implementation of

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`customData`](/sdk/reference/interfaces/i-user-incoming-approval#customdata)

***

### fromListId

> **fromListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1051](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1051)

The list ID for the user(s) who is sending the tokens. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Implementation of

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`fromListId`](/sdk/reference/interfaces/i-user-incoming-approval#fromlistid)

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1052](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1052)

The list ID for the user(s) who initiate the transfer. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Implementation of

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`initiatedByListId`](/sdk/reference/interfaces/i-user-incoming-approval#initiatedbylistid)

***

### ownershipTimes

> **ownershipTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1055](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1055)

The ownership times of the tokens being transferred.

#### Implementation of

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`ownershipTimes`](/sdk/reference/interfaces/i-user-incoming-approval#ownershiptimes)

***

### tokenIds

> **tokenIds**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1054](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1054)

The token IDs to be transferred.

#### Implementation of

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`tokenIds`](/sdk/reference/interfaces/i-user-incoming-approval#tokenids)

***

### transferTimes

> **transferTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1053](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1053)

The times allowed for the transfer transaction.

#### Implementation of

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`transferTimes`](/sdk/reference/interfaces/i-user-incoming-approval#transfertimes)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1057](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1057)

The URI of the approval.

#### Implementation of

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`uri`](/sdk/reference/interfaces/i-user-incoming-approval#uri)

***

### version

> **version**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1060](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1060)

The version of the approval.

#### Implementation of

[`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval).[`version`](/sdk/reference/interfaces/i-user-incoming-approval#version)

## Methods

### castToCollectionTransfer()

> **castToCollectionTransfer**(`toAddress`): [`CollectionApproval`](/sdk/reference/classes/collection-approval)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1119](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1119)

#### Parameters

##### toAddress

`string`

#### Returns

[`CollectionApproval`](/sdk/reference/classes/collection-approval)\<`T`\>

***

### clone()

> **clone**(): `UserIncomingApproval`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`UserIncomingApproval`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `UserIncomingApproval`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1080](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1080)

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

`UserIncomingApproval`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1076](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1076)

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

> **toBech32Addresses**(`prefix`): `UserIncomingApproval`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1127](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1127)

#### Parameters

##### prefix

`string`

#### Returns

`UserIncomingApproval`\<`T`\>

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

> **toProto**(): `UserIncomingApproval`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1084](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1084)

#### Returns

`UserIncomingApproval`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `UserIncomingApproval`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1088](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1088)

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

`UserIncomingApproval`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `UserIncomingApproval`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1096](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1096)

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

`UserIncomingApproval`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `UserIncomingApproval`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1104](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1104)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`UserIncomingApproval`

##### convertFunction

(`item`) => `U`

#### Returns

`UserIncomingApproval`\<`U`\>
