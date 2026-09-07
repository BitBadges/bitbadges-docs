---
description: "UserIncomingApprovalPermission represents the permissions of a user and whether they can update their approved incoming transfers."
---

# Class: UserIncomingApprovalPermission\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:272](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L272)

UserIncomingApprovalPermission represents the permissions of a user and whether they can update their approved incoming transfers.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`UserIncomingApprovalPermission`\<`T`\>\>

## Extended by

- [`UserIncomingApprovalPermissionWithDetails`](/sdk/reference/classes/user-incoming-approval-permission-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iUserIncomingApprovalPermission`](/sdk/reference/interfaces/i-user-incoming-approval-permission)\<`T`\>

## Constructors

### Constructor

> **new UserIncomingApprovalPermission**\<`T`\>(`msg`): `UserIncomingApprovalPermission`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:285](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L285)

#### Parameters

##### msg

[`iUserIncomingApprovalPermission`](/sdk/reference/interfaces/i-user-incoming-approval-permission)\<`T`\>

#### Returns

`UserIncomingApprovalPermission`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:281](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L281)

The approval ID of the approved incoming transfers. Can use "All" to represent all IDs, "!approvalId" to represent all IDs except approvalId, or "approvalId" to represent only approvalId.

#### Implementation of

[`iUserIncomingApprovalPermission`](/sdk/reference/interfaces/i-user-incoming-approval-permission).[`approvalId`](/sdk/reference/interfaces/i-user-incoming-approval-permission#approvalid)

***

### fromListId

> **fromListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:276](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L276)

The list ID of the from addresses of the approved incoming transfers.

#### Implementation of

[`iUserIncomingApprovalPermission`](/sdk/reference/interfaces/i-user-incoming-approval-permission).[`fromListId`](/sdk/reference/interfaces/i-user-incoming-approval-permission#fromlistid)

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:277](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L277)

The list ID of the initiatedBy addresses of the approved incoming transfers.

#### Implementation of

[`iUserIncomingApprovalPermission`](/sdk/reference/interfaces/i-user-incoming-approval-permission).[`initiatedByListId`](/sdk/reference/interfaces/i-user-incoming-approval-permission#initiatedbylistid)

***

### ownershipTimes

> **ownershipTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:280](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L280)

The owned times of the approved incoming transfers.

#### Implementation of

[`iUserIncomingApprovalPermission`](/sdk/reference/interfaces/i-user-incoming-approval-permission).[`ownershipTimes`](/sdk/reference/interfaces/i-user-incoming-approval-permission#ownershiptimes)

***

### permanentlyForbiddenTimes

> **permanentlyForbiddenTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:283](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L283)

The forbidden times of the approved incoming transfers.

#### Implementation of

[`iUserIncomingApprovalPermission`](/sdk/reference/interfaces/i-user-incoming-approval-permission).[`permanentlyForbiddenTimes`](/sdk/reference/interfaces/i-user-incoming-approval-permission#permanentlyforbiddentimes)

***

### permanentlyPermittedTimes

> **permanentlyPermittedTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:282](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L282)

The permitted times of the approved incoming transfers.

#### Implementation of

[`iUserIncomingApprovalPermission`](/sdk/reference/interfaces/i-user-incoming-approval-permission).[`permanentlyPermittedTimes`](/sdk/reference/interfaces/i-user-incoming-approval-permission#permanentlypermittedtimes)

***

### tokenIds

> **tokenIds**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:279](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L279)

The token IDs of the approved incoming transfers.

#### Implementation of

[`iUserIncomingApprovalPermission`](/sdk/reference/interfaces/i-user-incoming-approval-permission).[`tokenIds`](/sdk/reference/interfaces/i-user-incoming-approval-permission#tokenids)

***

### transferTimes

> **transferTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:278](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L278)

The transfer times of the approved incoming transfers.

#### Implementation of

[`iUserIncomingApprovalPermission`](/sdk/reference/interfaces/i-user-incoming-approval-permission).[`transferTimes`](/sdk/reference/interfaces/i-user-incoming-approval-permission#transfertimes)

## Methods

### castToCollectionApprovalPermission()

> **castToCollectionApprovalPermission**(`address`): [`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:338](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L338)

#### Parameters

##### address

`string`

#### Returns

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission)\<`T`\>

***

### clone()

> **clone**(): `UserIncomingApprovalPermission`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`UserIncomingApprovalPermission`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `UserIncomingApprovalPermission`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:298](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L298)

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

`UserIncomingApprovalPermission`\<`U`\>

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

> **toBech32Addresses**(`prefix`): `UserIncomingApprovalPermission`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:383](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L383)

#### Parameters

##### prefix

`string`

#### Returns

`UserIncomingApprovalPermission`\<`T`\>

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

> **toProto**(): `UserIncomingApprovalPermission`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:302](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L302)

#### Returns

`UserIncomingApprovalPermission`

***

### check()

> `static` **check**\<`U`\>(`details`, `permissions`, `time?`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:360](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L360)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### details

`object`[]

##### permissions

[`UserIncomingApprovalPermissionWithDetails`](/sdk/reference/classes/user-incoming-approval-permission-with-details)\<`U`\>[]

##### time?

`U`

#### Returns

`Error` \| `null`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `UserIncomingApprovalPermission`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:306](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L306)

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

`UserIncomingApprovalPermission`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `UserIncomingApprovalPermission`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:314](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L314)

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

`UserIncomingApprovalPermission`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`protoMsg`, `convertFunction`): `UserIncomingApprovalPermission`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:322](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L322)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### protoMsg

`UserIncomingApprovalPermission`

##### convertFunction

(`item`) => `U`

#### Returns

`UserIncomingApprovalPermission`\<`U`\>

***

### validateUpdate()

> `static` **validateUpdate**\<`U`\>(`permissions`, `newPermission`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:346](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L346)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### permissions

[`UserIncomingApprovalPermissionWithDetails`](/sdk/reference/classes/user-incoming-approval-permission-with-details)\<`U`\>[]

##### newPermission

[`UserIncomingApprovalPermissionWithDetails`](/sdk/reference/classes/user-incoming-approval-permission-with-details)\<`U`\>[]

#### Returns

`Error` \| `null`
