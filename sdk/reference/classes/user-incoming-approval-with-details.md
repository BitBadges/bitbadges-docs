---
description: "T extends NumberType"
---

# Class: UserIncomingApprovalWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1897](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1897)

## Extends

- [`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iUserIncomingApprovalWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-with-details)\<`T`\>

## Constructors

### Constructor

> **new UserIncomingApprovalWithDetails**\<`T`\>(`data`): `UserIncomingApprovalWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1903](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1903)

#### Parameters

##### data

[`iUserIncomingApprovalWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-with-details)\<`T`\>

#### Returns

`UserIncomingApprovalWithDetails`\<`T`\>

#### Overrides

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`constructor`](/sdk/reference/classes/user-incoming-approval#constructor)

## Properties

### approvalCriteria?

> `optional` **approvalCriteria?**: [`IncomingApprovalCriteriaWithDetails`](/sdk/reference/classes/incoming-approval-criteria-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1901](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1901)

The criteria to be met. These represent the restrictions that must be obeyed such as the total amount approved, max num transfers, merkle challenges, must own tokens, etc.

#### Implementation of

[`iUserIncomingApprovalWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-with-details).[`approvalCriteria`](/sdk/reference/interfaces/i-user-incoming-approval-with-details#approvalcriteria)

#### Overrides

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`approvalCriteria`](/sdk/reference/classes/user-incoming-approval#approvalcriteria)

***

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1056](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1056)

The ID of the approval. Must not be a duplicate of another approval ID in the same timeline.

#### Implementation of

[`iUserIncomingApprovalWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-with-details).[`approvalId`](/sdk/reference/interfaces/i-user-incoming-approval-with-details#approvalid)

#### Inherited from

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`approvalId`](/sdk/reference/classes/user-incoming-approval#approvalid)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1058](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1058)

Arbitrary custom data of the approval

#### Implementation of

[`iUserIncomingApprovalWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-with-details).[`customData`](/sdk/reference/interfaces/i-user-incoming-approval-with-details#customdata)

#### Inherited from

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`customData`](/sdk/reference/classes/user-incoming-approval#customdata)

***

### details?

> `optional` **details?**: [`ApprovalInfoDetails`](/sdk/reference/classes/approval-info-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1898](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1898)

#### Implementation of

[`iUserIncomingApprovalWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-with-details).[`details`](/sdk/reference/interfaces/i-user-incoming-approval-with-details#details)

***

### fromList

> **fromList**: [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1899](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1899)

The populated address list for fromListId

#### Implementation of

[`iUserIncomingApprovalWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-with-details).[`fromList`](/sdk/reference/interfaces/i-user-incoming-approval-with-details#fromlist)

***

### fromListId

> **fromListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1051](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1051)

The list ID for the user(s) who is sending the tokens. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Implementation of

[`iUserIncomingApprovalWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-with-details).[`fromListId`](/sdk/reference/interfaces/i-user-incoming-approval-with-details#fromlistid)

#### Inherited from

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`fromListId`](/sdk/reference/classes/user-incoming-approval#fromlistid)

***

### initiatedByList

> **initiatedByList**: [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1900](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1900)

The populated address list for initiatedByListId

#### Implementation of

[`iUserIncomingApprovalWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-with-details).[`initiatedByList`](/sdk/reference/interfaces/i-user-incoming-approval-with-details#initiatedbylist)

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1052](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1052)

The list ID for the user(s) who initiate the transfer. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Implementation of

[`iUserIncomingApprovalWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-with-details).[`initiatedByListId`](/sdk/reference/interfaces/i-user-incoming-approval-with-details#initiatedbylistid)

#### Inherited from

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`initiatedByListId`](/sdk/reference/classes/user-incoming-approval#initiatedbylistid)

***

### ownershipTimes

> **ownershipTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1055](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1055)

The ownership times of the tokens being transferred.

#### Implementation of

[`iUserIncomingApprovalWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-with-details).[`ownershipTimes`](/sdk/reference/interfaces/i-user-incoming-approval-with-details#ownershiptimes)

#### Inherited from

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`ownershipTimes`](/sdk/reference/classes/user-incoming-approval#ownershiptimes)

***

### tokenIds

> **tokenIds**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1054](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1054)

The token IDs to be transferred.

#### Implementation of

[`iUserIncomingApprovalWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-with-details).[`tokenIds`](/sdk/reference/interfaces/i-user-incoming-approval-with-details#tokenids)

#### Inherited from

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`tokenIds`](/sdk/reference/classes/user-incoming-approval#tokenids)

***

### transferTimes

> **transferTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1053](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1053)

The times allowed for the transfer transaction.

#### Implementation of

[`iUserIncomingApprovalWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-with-details).[`transferTimes`](/sdk/reference/interfaces/i-user-incoming-approval-with-details#transfertimes)

#### Inherited from

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`transferTimes`](/sdk/reference/classes/user-incoming-approval#transfertimes)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1057](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1057)

The URI of the approval.

#### Implementation of

[`iUserIncomingApprovalWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-with-details).[`uri`](/sdk/reference/interfaces/i-user-incoming-approval-with-details#uri)

#### Inherited from

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`uri`](/sdk/reference/classes/user-incoming-approval#uri)

***

### version

> **version**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1060](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1060)

The version of the approval.

#### Implementation of

[`iUserIncomingApprovalWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-with-details).[`version`](/sdk/reference/interfaces/i-user-incoming-approval-with-details#version)

#### Inherited from

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`version`](/sdk/reference/classes/user-incoming-approval#version)

## Methods

### castToCollectionTransfer()

> **castToCollectionTransfer**(`toAddress`): [`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1919](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1919)

#### Parameters

##### toAddress

`string`

#### Returns

[`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`T`\>

#### Overrides

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`castToCollectionTransfer`](/sdk/reference/classes/user-incoming-approval#casttocollectiontransfer)

***

### castToUniversalPermission()

> **castToUniversalPermission**(`toAddress`): [`UniversalPermission`](/sdk/reference/interfaces/universal-permission)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1928](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1928)

#### Parameters

##### toAddress

`string`

#### Returns

[`UniversalPermission`](/sdk/reference/interfaces/universal-permission)

***

### clone()

> **clone**(): `UserIncomingApprovalWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1911](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1911)

Deep copies the object and returns a new instance.

#### Returns

`UserIncomingApprovalWithDetails`\<`T`\>

#### Overrides

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`clone`](/sdk/reference/classes/user-incoming-approval#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `UserIncomingApprovalWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1915](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1915)

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

`UserIncomingApprovalWithDetails`\<`U`\>

#### Overrides

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`convert`](/sdk/reference/classes/user-incoming-approval#convert)

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

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`equals`](/sdk/reference/classes/user-incoming-approval#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1076](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1076)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`getNumberFieldNames`](/sdk/reference/classes/user-incoming-approval#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`hasNumberFields`](/sdk/reference/classes/user-incoming-approval#hasnumberfields)

***

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): [`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1127](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1127)

#### Parameters

##### prefix

`string`

#### Returns

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval)\<`T`\>

#### Inherited from

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`toBech32Addresses`](/sdk/reference/classes/user-incoming-approval#tobech32addresses)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`toJson`](/sdk/reference/classes/user-incoming-approval#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`toJsonString`](/sdk/reference/classes/user-incoming-approval#tojsonstring)

***

### toProto()

> **toProto**(): `UserIncomingApproval`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1084](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1084)

#### Returns

`UserIncomingApproval`

#### Inherited from

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`toProto`](/sdk/reference/classes/user-incoming-approval#toproto)

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): [`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval)\<`U`\>

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

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval)\<`U`\>

#### Inherited from

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`fromJson`](/sdk/reference/classes/user-incoming-approval#fromjson)

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): [`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval)\<`U`\>

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

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval)\<`U`\>

#### Inherited from

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`fromJsonString`](/sdk/reference/classes/user-incoming-approval#fromjsonstring)

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): [`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval)\<`U`\>

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

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval)\<`U`\>

#### Inherited from

[`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval).[`fromProto`](/sdk/reference/classes/user-incoming-approval#fromproto)
