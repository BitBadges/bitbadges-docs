---
description: "T extends NumberType"
---

# Class: UserOutgoingApprovalPermissionWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:986](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L986)

## Extends

- [`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iUserOutgoingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details)\<`T`\>
- [`CustomType`](/sdk/reference/interfaces/custom-type)\<`UserOutgoingApprovalPermissionWithDetails`\<`T`\>\>

## Constructors

### Constructor

> **new UserOutgoingApprovalPermissionWithDetails**\<`T`\>(`data`): `UserOutgoingApprovalPermissionWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:993](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L993)

#### Parameters

##### data

[`iUserOutgoingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details)\<`T`\>

#### Returns

`UserOutgoingApprovalPermissionWithDetails`\<`T`\>

#### Overrides

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`constructor`](/sdk/reference/classes/user-outgoing-approval-permission#constructor)

## Properties

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L151)

The approval ID of the approved outgoing transfers. Can use "All" to represent all IDs, "!approvalId" to represent all IDs except approvalId, or "approvalId" to represent only approvalId.

#### Implementation of

[`iUserOutgoingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details).[`approvalId`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details#approvalid)

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`approvalId`](/sdk/reference/classes/user-outgoing-approval-permission#approvalid)

***

### initiatedByList

> **initiatedByList**: [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:991](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L991)

#### Implementation of

[`iUserOutgoingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details).[`initiatedByList`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details#initiatedbylist)

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:147](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L147)

The list ID of the initiatedBy addresses of the approved outgoing transfers.

#### Implementation of

[`iUserOutgoingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details).[`initiatedByListId`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details#initiatedbylistid)

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`initiatedByListId`](/sdk/reference/classes/user-outgoing-approval-permission#initiatedbylistid)

***

### ownershipTimes

> **ownershipTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:150](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L150)

The owned times of the approved outgoing transfers.

#### Implementation of

[`iUserOutgoingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details).[`ownershipTimes`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details#ownershiptimes)

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`ownershipTimes`](/sdk/reference/classes/user-outgoing-approval-permission#ownershiptimes)

***

### permanentlyForbiddenTimes

> **permanentlyForbiddenTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:153](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L153)

The forbidden times of the approved outgoing transfers.

#### Implementation of

[`iUserOutgoingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details).[`permanentlyForbiddenTimes`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details#permanentlyforbiddentimes)

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`permanentlyForbiddenTimes`](/sdk/reference/classes/user-outgoing-approval-permission#permanentlyforbiddentimes)

***

### permanentlyPermittedTimes

> **permanentlyPermittedTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:152](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L152)

The permitted times of the approved outgoing transfers.

#### Implementation of

[`iUserOutgoingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details).[`permanentlyPermittedTimes`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details#permanentlypermittedtimes)

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`permanentlyPermittedTimes`](/sdk/reference/classes/user-outgoing-approval-permission#permanentlypermittedtimes)

***

### tokenIds

> **tokenIds**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:149](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L149)

The token IDs of the approved outgoing transfers.

#### Implementation of

[`iUserOutgoingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details).[`tokenIds`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details#tokenids)

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`tokenIds`](/sdk/reference/classes/user-outgoing-approval-permission#tokenids)

***

### toList

> **toList**: [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:990](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L990)

#### Implementation of

[`iUserOutgoingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details).[`toList`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details#tolist)

***

### toListId

> **toListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:146](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L146)

The list ID of the to addresses of the approved outgoing transfers.

#### Implementation of

[`iUserOutgoingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details).[`toListId`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details#tolistid)

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`toListId`](/sdk/reference/classes/user-outgoing-approval-permission#tolistid)

***

### transferTimes

> **transferTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:148](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L148)

The transfer times of the approved outgoing transfers.

#### Implementation of

[`iUserOutgoingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details).[`transferTimes`](/sdk/reference/interfaces/i-user-outgoing-approval-permission-with-details#transfertimes)

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`transferTimes`](/sdk/reference/classes/user-outgoing-approval-permission#transfertimes)

## Methods

### castToCollectionApprovalPermission()

> **castToCollectionApprovalPermission**(`address`): [`CollectionApprovalPermissionWithDetails`](/sdk/reference/classes/collection-approval-permission-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:1007](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L1007)

#### Parameters

##### address

`string`

#### Returns

[`CollectionApprovalPermissionWithDetails`](/sdk/reference/classes/collection-approval-permission-with-details)\<`T`\>

#### Overrides

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`castToCollectionApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission#casttocollectionapprovalpermission)

***

### clone()

> **clone**(): `UserOutgoingApprovalPermissionWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:999](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L999)

Deep copies the object and returns a new instance.

#### Returns

`UserOutgoingApprovalPermissionWithDetails`\<`T`\>

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`clone`](/sdk/reference/interfaces/custom-type#clone)

#### Overrides

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`clone`](/sdk/reference/classes/user-outgoing-approval-permission#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `UserOutgoingApprovalPermissionWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:1003](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L1003)

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

`UserOutgoingApprovalPermissionWithDetails`\<`U`\>

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`convert`](/sdk/reference/interfaces/custom-type#convert)

#### Overrides

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`convert`](/sdk/reference/classes/user-outgoing-approval-permission#convert)

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

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`equals`](/sdk/reference/interfaces/custom-type#equals)

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`equals`](/sdk/reference/classes/user-outgoing-approval-permission#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L157)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`getNumberFieldNames`](/sdk/reference/interfaces/custom-type#getnumberfieldnames)

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`getNumberFieldNames`](/sdk/reference/classes/user-outgoing-approval-permission#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`hasNumberFields`](/sdk/reference/interfaces/custom-type#hasnumberfields)

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`hasNumberFields`](/sdk/reference/classes/user-outgoing-approval-permission#hasnumberfields)

***

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): [`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:258](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L258)

#### Parameters

##### prefix

`string`

#### Returns

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission)\<`T`\>

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`toBech32Addresses`](/sdk/reference/classes/user-outgoing-approval-permission#tobech32addresses)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`toJson`](/sdk/reference/interfaces/custom-type#tojson)

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`toJson`](/sdk/reference/classes/user-outgoing-approval-permission#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`toJsonString`](/sdk/reference/interfaces/custom-type#tojsonstring)

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`toJsonString`](/sdk/reference/classes/user-outgoing-approval-permission#tojsonstring)

***

### toProto()

> **toProto**(): `UserOutgoingApprovalPermission`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:171](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L171)

#### Returns

`UserOutgoingApprovalPermission`

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`toProto`](/sdk/reference/classes/user-outgoing-approval-permission#toproto)

***

### check()

> `static` **check**\<`U`\>(`details`, `permissions`, `time?`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:235](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L235)

Checks if a certain approvals can be updated based on the permissions.

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### details

`object`[]

##### permissions

`UserOutgoingApprovalPermissionWithDetails`\<`U`\>[]

##### time?

`U`

#### Returns

`Error` \| `null`

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`check`](/sdk/reference/classes/user-outgoing-approval-permission#check)

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): [`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:175](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L175)

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

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission)\<`U`\>

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`fromJson`](/sdk/reference/classes/user-outgoing-approval-permission#fromjson)

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): [`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:183](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L183)

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

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission)\<`U`\>

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`fromJsonString`](/sdk/reference/classes/user-outgoing-approval-permission#fromjsonstring)

***

### fromProto()

> `static` **fromProto**\<`U`\>(`protoMsg`, `convertFunction`): [`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:191](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L191)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### protoMsg

`UserOutgoingApprovalPermission`

##### convertFunction

(`item`) => `U`

#### Returns

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission)\<`U`\>

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`fromProto`](/sdk/reference/classes/user-outgoing-approval-permission#fromproto)

***

### validateUpdate()

> `static` **validateUpdate**\<`U`\>(`permissions`, `newPermission`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:218](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L218)

Validates the update of the user outgoing approval permissions from old to new. No permanently frozen times can be edited.

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### permissions

`UserOutgoingApprovalPermissionWithDetails`\<`U`\>[]

##### newPermission

`UserOutgoingApprovalPermissionWithDetails`\<`U`\>[]

#### Returns

`Error` \| `null`

#### Inherited from

[`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission).[`validateUpdate`](/sdk/reference/classes/user-outgoing-approval-permission#validateupdate)
