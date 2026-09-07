---
description: "UserOutgoingApprovalPermission represents the permissions of a user and whether they can update their approved outgoing transfers."
---

# Class: UserOutgoingApprovalPermission\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:142](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L142)

UserOutgoingApprovalPermission represents the permissions of a user and whether they can update their approved outgoing transfers.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`UserOutgoingApprovalPermission`\<`T`\>\>

## Extended by

- [`UserOutgoingApprovalPermissionWithDetails`](/sdk/reference/classes/user-outgoing-approval-permission-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iUserOutgoingApprovalPermission`](/sdk/reference/interfaces/i-user-outgoing-approval-permission)\<`T`\>

## Constructors

### Constructor

> **new UserOutgoingApprovalPermission**\<`T`\>(`msg`): `UserOutgoingApprovalPermission`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:155](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L155)

#### Parameters

##### msg

[`iUserOutgoingApprovalPermission`](/sdk/reference/interfaces/i-user-outgoing-approval-permission)\<`T`\>

#### Returns

`UserOutgoingApprovalPermission`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L151)

The approval ID of the approved outgoing transfers. Can use "All" to represent all IDs, "!approvalId" to represent all IDs except approvalId, or "approvalId" to represent only approvalId.

#### Implementation of

[`iUserOutgoingApprovalPermission`](/sdk/reference/interfaces/i-user-outgoing-approval-permission).[`approvalId`](/sdk/reference/interfaces/i-user-outgoing-approval-permission#approvalid)

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:147](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L147)

The list ID of the initiatedBy addresses of the approved outgoing transfers.

#### Implementation of

[`iUserOutgoingApprovalPermission`](/sdk/reference/interfaces/i-user-outgoing-approval-permission).[`initiatedByListId`](/sdk/reference/interfaces/i-user-outgoing-approval-permission#initiatedbylistid)

***

### ownershipTimes

> **ownershipTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:150](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L150)

The owned times of the approved outgoing transfers.

#### Implementation of

[`iUserOutgoingApprovalPermission`](/sdk/reference/interfaces/i-user-outgoing-approval-permission).[`ownershipTimes`](/sdk/reference/interfaces/i-user-outgoing-approval-permission#ownershiptimes)

***

### permanentlyForbiddenTimes

> **permanentlyForbiddenTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:153](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L153)

The forbidden times of the approved outgoing transfers.

#### Implementation of

[`iUserOutgoingApprovalPermission`](/sdk/reference/interfaces/i-user-outgoing-approval-permission).[`permanentlyForbiddenTimes`](/sdk/reference/interfaces/i-user-outgoing-approval-permission#permanentlyforbiddentimes)

***

### permanentlyPermittedTimes

> **permanentlyPermittedTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:152](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L152)

The permitted times of the approved outgoing transfers.

#### Implementation of

[`iUserOutgoingApprovalPermission`](/sdk/reference/interfaces/i-user-outgoing-approval-permission).[`permanentlyPermittedTimes`](/sdk/reference/interfaces/i-user-outgoing-approval-permission#permanentlypermittedtimes)

***

### tokenIds

> **tokenIds**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:149](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L149)

The token IDs of the approved outgoing transfers.

#### Implementation of

[`iUserOutgoingApprovalPermission`](/sdk/reference/interfaces/i-user-outgoing-approval-permission).[`tokenIds`](/sdk/reference/interfaces/i-user-outgoing-approval-permission#tokenids)

***

### toListId

> **toListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:146](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L146)

The list ID of the to addresses of the approved outgoing transfers.

#### Implementation of

[`iUserOutgoingApprovalPermission`](/sdk/reference/interfaces/i-user-outgoing-approval-permission).[`toListId`](/sdk/reference/interfaces/i-user-outgoing-approval-permission#tolistid)

***

### transferTimes

> **transferTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:148](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L148)

The transfer times of the approved outgoing transfers.

#### Implementation of

[`iUserOutgoingApprovalPermission`](/sdk/reference/interfaces/i-user-outgoing-approval-permission).[`transferTimes`](/sdk/reference/interfaces/i-user-outgoing-approval-permission#transfertimes)

## Methods

### castToCollectionApprovalPermission()

> **castToCollectionApprovalPermission**(`address`): [`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:207](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L207)

#### Parameters

##### address

`string`

#### Returns

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission)\<`T`\>

***

### clone()

> **clone**(): `UserOutgoingApprovalPermission`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`UserOutgoingApprovalPermission`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `UserOutgoingApprovalPermission`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:167](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L167)

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

`UserOutgoingApprovalPermission`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L157)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

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

> **toBech32Addresses**(`prefix`): `UserOutgoingApprovalPermission`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:258](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L258)

#### Parameters

##### prefix

`string`

#### Returns

`UserOutgoingApprovalPermission`\<`T`\>

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

> **toProto**(): `UserOutgoingApprovalPermission`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:171](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L171)

#### Returns

`UserOutgoingApprovalPermission`

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

[`UserOutgoingApprovalPermissionWithDetails`](/sdk/reference/classes/user-outgoing-approval-permission-with-details)\<`U`\>[]

##### time?

`U`

#### Returns

`Error` \| `null`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `UserOutgoingApprovalPermission`\<`U`\>

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

`UserOutgoingApprovalPermission`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `UserOutgoingApprovalPermission`\<`U`\>

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

`UserOutgoingApprovalPermission`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`protoMsg`, `convertFunction`): `UserOutgoingApprovalPermission`\<`U`\>

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

`UserOutgoingApprovalPermission`\<`U`\>

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

[`UserOutgoingApprovalPermissionWithDetails`](/sdk/reference/classes/user-outgoing-approval-permission-with-details)\<`U`\>[]

##### newPermission

[`UserOutgoingApprovalPermissionWithDetails`](/sdk/reference/classes/user-outgoing-approval-permission-with-details)\<`U`\>[]

#### Returns

`Error` \| `null`
