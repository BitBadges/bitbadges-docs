---
description: "T extends NumberType"
---

# Class: UserOutgoingApprovalWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1858](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1858)

## Extends

- [`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iUserOutgoingApprovalWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details)\<`T`\>

## Constructors

### Constructor

> **new UserOutgoingApprovalWithDetails**\<`T`\>(`data`): `UserOutgoingApprovalWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1864](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1864)

#### Parameters

##### data

[`iUserOutgoingApprovalWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details)\<`T`\>

#### Returns

`UserOutgoingApprovalWithDetails`\<`T`\>

#### Overrides

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`constructor`](/sdk/reference/classes/user-outgoing-approval#constructor)

## Properties

### approvalCriteria?

> `optional` **approvalCriteria?**: [`OutgoingApprovalCriteriaWithDetails`](/sdk/reference/classes/outgoing-approval-criteria-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1861](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1861)

The criteria to be met. These represent the restrictions that must be obeyed such as the total amount approved, max num transfers, merkle challenges, must own tokens, etc.

#### Implementation of

[`iUserOutgoingApprovalWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details).[`approvalCriteria`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details#approvalcriteria)

#### Overrides

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`approvalCriteria`](/sdk/reference/classes/user-outgoing-approval#approvalcriteria)

***

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:217](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L217)

The ID of the approval. Must not be a duplicate of another approval ID in the same timeline.

#### Implementation of

[`iUserOutgoingApprovalWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details).[`approvalId`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details#approvalid)

#### Inherited from

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`approvalId`](/sdk/reference/classes/user-outgoing-approval#approvalid)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:219](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L219)

Arbitrary custom data of the approval

#### Implementation of

[`iUserOutgoingApprovalWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details).[`customData`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details#customdata)

#### Inherited from

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`customData`](/sdk/reference/classes/user-outgoing-approval#customdata)

***

### details?

> `optional` **details?**: [`iApprovalInfoDetails`](/sdk/reference/interfaces/i-approval-info-details)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1862](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1862)

#### Implementation of

[`iUserOutgoingApprovalWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details).[`details`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details#details)

***

### initiatedByList

> **initiatedByList**: [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1860](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1860)

The populated address list for the initiatedByListId

#### Implementation of

[`iUserOutgoingApprovalWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details).[`initiatedByList`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details#initiatedbylist)

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:213](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L213)

The list ID for the user(s) who initiate the transfer. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Implementation of

[`iUserOutgoingApprovalWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details).[`initiatedByListId`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details#initiatedbylistid)

#### Inherited from

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`initiatedByListId`](/sdk/reference/classes/user-outgoing-approval#initiatedbylistid)

***

### ownershipTimes

> **ownershipTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:216](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L216)

The ownership times of the tokens being transferred.

#### Implementation of

[`iUserOutgoingApprovalWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details).[`ownershipTimes`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details#ownershiptimes)

#### Inherited from

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`ownershipTimes`](/sdk/reference/classes/user-outgoing-approval#ownershiptimes)

***

### tokenIds

> **tokenIds**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:215](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L215)

The token IDs to be transferred.

#### Implementation of

[`iUserOutgoingApprovalWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details).[`tokenIds`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details#tokenids)

#### Inherited from

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`tokenIds`](/sdk/reference/classes/user-outgoing-approval#tokenids)

***

### toList

> **toList**: [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1859](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1859)

The populated address list for the toListId

#### Implementation of

[`iUserOutgoingApprovalWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details).[`toList`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details#tolist)

***

### toListId

> **toListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:212](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L212)

The list ID for the user(s) who is sending the tokens. The ID is either registered on-chain for reusability or follows the reserved ID system.

#### Implementation of

[`iUserOutgoingApprovalWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details).[`toListId`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details#tolistid)

#### Inherited from

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`toListId`](/sdk/reference/classes/user-outgoing-approval#tolistid)

***

### transferTimes

> **transferTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:214](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L214)

The times allowed for the transfer transaction.

#### Implementation of

[`iUserOutgoingApprovalWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details).[`transferTimes`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details#transfertimes)

#### Inherited from

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`transferTimes`](/sdk/reference/classes/user-outgoing-approval#transfertimes)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:218](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L218)

The URI of the approval.

#### Implementation of

[`iUserOutgoingApprovalWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details).[`uri`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details#uri)

#### Inherited from

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`uri`](/sdk/reference/classes/user-outgoing-approval#uri)

***

### version

> **version**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:221](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L221)

The version of the approval.

#### Implementation of

[`iUserOutgoingApprovalWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details).[`version`](/sdk/reference/interfaces/i-user-outgoing-approval-with-details#version)

#### Inherited from

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`version`](/sdk/reference/classes/user-outgoing-approval#version)

## Methods

### castToCollectionTransfer()

> **castToCollectionTransfer**(`fromAddress`): [`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1880](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1880)

#### Parameters

##### fromAddress

`string`

#### Returns

[`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`T`\>

#### Overrides

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`castToCollectionTransfer`](/sdk/reference/classes/user-outgoing-approval#casttocollectiontransfer)

***

### castToUniversalPermission()

> **castToUniversalPermission**(`fromAddress`): [`UniversalPermission`](/sdk/reference/interfaces/universal-permission)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1889](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1889)

#### Parameters

##### fromAddress

`string`

#### Returns

[`UniversalPermission`](/sdk/reference/interfaces/universal-permission)

***

### clone()

> **clone**(): `UserOutgoingApprovalWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1876](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1876)

Deep copies the object and returns a new instance.

#### Returns

`UserOutgoingApprovalWithDetails`\<`T`\>

#### Overrides

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`clone`](/sdk/reference/classes/user-outgoing-approval#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `UserOutgoingApprovalWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1872](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1872)

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

`UserOutgoingApprovalWithDetails`\<`U`\>

#### Overrides

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`convert`](/sdk/reference/classes/user-outgoing-approval#convert)

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

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`equals`](/sdk/reference/classes/user-outgoing-approval#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:237](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L237)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`getNumberFieldNames`](/sdk/reference/classes/user-outgoing-approval#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`hasNumberFields`](/sdk/reference/classes/user-outgoing-approval#hasnumberfields)

***

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): [`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:280](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L280)

#### Parameters

##### prefix

`string`

#### Returns

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval)\<`T`\>

#### Inherited from

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`toBech32Addresses`](/sdk/reference/classes/user-outgoing-approval#tobech32addresses)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`toJson`](/sdk/reference/classes/user-outgoing-approval#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`toJsonString`](/sdk/reference/classes/user-outgoing-approval#tojsonstring)

***

### toProto()

> **toProto**(): `UserOutgoingApproval`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:245](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L245)

#### Returns

`UserOutgoingApproval`

#### Inherited from

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`toProto`](/sdk/reference/classes/user-outgoing-approval#toproto)

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): [`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:249](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L249)

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

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval)\<`U`\>

#### Inherited from

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`fromJson`](/sdk/reference/classes/user-outgoing-approval#fromjson)

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): [`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:257](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L257)

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

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval)\<`U`\>

#### Inherited from

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`fromJsonString`](/sdk/reference/classes/user-outgoing-approval#fromjsonstring)

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): [`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:265](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L265)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`UserOutgoingApproval`

##### convertFunction

(`item`) => `U`

#### Returns

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval)\<`U`\>

#### Inherited from

[`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval).[`fromProto`](/sdk/reference/classes/user-outgoing-approval#fromproto)
