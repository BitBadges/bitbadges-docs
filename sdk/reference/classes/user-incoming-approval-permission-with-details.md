---
description: "T extends NumberType"
---

# Class: UserIncomingApprovalPermissionWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:953](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L953)

## Extends

- [`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iUserIncomingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details)\<`T`\>
- [`CustomType`](/sdk/reference/interfaces/custom-type)\<`UserIncomingApprovalPermissionWithDetails`\<`T`\>\>

## Constructors

### Constructor

> **new UserIncomingApprovalPermissionWithDetails**\<`T`\>(`data`): `UserIncomingApprovalPermissionWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:960](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L960)

#### Parameters

##### data

[`iUserIncomingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details)\<`T`\>

#### Returns

`UserIncomingApprovalPermissionWithDetails`\<`T`\>

#### Overrides

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`constructor`](/sdk/reference/classes/user-incoming-approval-permission#constructor)

## Properties

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:281](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L281)

The approval ID of the approved incoming transfers. Can use "All" to represent all IDs, "!approvalId" to represent all IDs except approvalId, or "approvalId" to represent only approvalId.

#### Implementation of

[`iUserIncomingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details).[`approvalId`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details#approvalid)

#### Inherited from

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`approvalId`](/sdk/reference/classes/user-incoming-approval-permission#approvalid)

***

### fromList

> **fromList**: [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:957](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L957)

#### Implementation of

[`iUserIncomingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details).[`fromList`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details#fromlist)

***

### fromListId

> **fromListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:276](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L276)

The list ID of the from addresses of the approved incoming transfers.

#### Implementation of

[`iUserIncomingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details).[`fromListId`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details#fromlistid)

#### Inherited from

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`fromListId`](/sdk/reference/classes/user-incoming-approval-permission#fromlistid)

***

### initiatedByList

> **initiatedByList**: [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:958](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L958)

#### Implementation of

[`iUserIncomingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details).[`initiatedByList`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details#initiatedbylist)

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:277](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L277)

The list ID of the initiatedBy addresses of the approved incoming transfers.

#### Implementation of

[`iUserIncomingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details).[`initiatedByListId`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details#initiatedbylistid)

#### Inherited from

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`initiatedByListId`](/sdk/reference/classes/user-incoming-approval-permission#initiatedbylistid)

***

### ownershipTimes

> **ownershipTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:280](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L280)

The owned times of the approved incoming transfers.

#### Implementation of

[`iUserIncomingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details).[`ownershipTimes`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details#ownershiptimes)

#### Inherited from

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`ownershipTimes`](/sdk/reference/classes/user-incoming-approval-permission#ownershiptimes)

***

### permanentlyForbiddenTimes

> **permanentlyForbiddenTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:283](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L283)

The forbidden times of the approved incoming transfers.

#### Implementation of

[`iUserIncomingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details).[`permanentlyForbiddenTimes`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details#permanentlyforbiddentimes)

#### Inherited from

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`permanentlyForbiddenTimes`](/sdk/reference/classes/user-incoming-approval-permission#permanentlyforbiddentimes)

***

### permanentlyPermittedTimes

> **permanentlyPermittedTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:282](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L282)

The permitted times of the approved incoming transfers.

#### Implementation of

[`iUserIncomingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details).[`permanentlyPermittedTimes`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details#permanentlypermittedtimes)

#### Inherited from

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`permanentlyPermittedTimes`](/sdk/reference/classes/user-incoming-approval-permission#permanentlypermittedtimes)

***

### tokenIds

> **tokenIds**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:279](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L279)

The token IDs of the approved incoming transfers.

#### Implementation of

[`iUserIncomingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details).[`tokenIds`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details#tokenids)

#### Inherited from

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`tokenIds`](/sdk/reference/classes/user-incoming-approval-permission#tokenids)

***

### transferTimes

> **transferTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:278](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L278)

The transfer times of the approved incoming transfers.

#### Implementation of

[`iUserIncomingApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details).[`transferTimes`](/sdk/reference/interfaces/i-user-incoming-approval-permission-with-details#transfertimes)

#### Inherited from

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`transferTimes`](/sdk/reference/classes/user-incoming-approval-permission#transfertimes)

## Methods

### castToCollectionApprovalPermission()

> **castToCollectionApprovalPermission**(`address`): [`CollectionApprovalPermissionWithDetails`](/sdk/reference/classes/collection-approval-permission-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:974](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L974)

#### Parameters

##### address

`string`

#### Returns

[`CollectionApprovalPermissionWithDetails`](/sdk/reference/classes/collection-approval-permission-with-details)\<`T`\>

#### Overrides

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`castToCollectionApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission#casttocollectionapprovalpermission)

***

### clone()

> **clone**(): `UserIncomingApprovalPermissionWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:966](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L966)

Deep copies the object and returns a new instance.

#### Returns

`UserIncomingApprovalPermissionWithDetails`\<`T`\>

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`clone`](/sdk/reference/interfaces/custom-type#clone)

#### Overrides

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`clone`](/sdk/reference/classes/user-incoming-approval-permission#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `UserIncomingApprovalPermissionWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:970](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L970)

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

`UserIncomingApprovalPermissionWithDetails`\<`U`\>

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`convert`](/sdk/reference/interfaces/custom-type#convert)

#### Overrides

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`convert`](/sdk/reference/classes/user-incoming-approval-permission#convert)

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

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`equals`](/sdk/reference/classes/user-incoming-approval-permission#equals)

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

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`getNumberFieldNames`](/sdk/reference/classes/user-incoming-approval-permission#getnumberfieldnames)

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

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`hasNumberFields`](/sdk/reference/classes/user-incoming-approval-permission#hasnumberfields)

***

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): [`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:383](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L383)

#### Parameters

##### prefix

`string`

#### Returns

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission)\<`T`\>

#### Inherited from

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`toBech32Addresses`](/sdk/reference/classes/user-incoming-approval-permission#tobech32addresses)

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

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`toJson`](/sdk/reference/classes/user-incoming-approval-permission#tojson)

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

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`toJsonString`](/sdk/reference/classes/user-incoming-approval-permission#tojsonstring)

***

### toProto()

> **toProto**(): `UserIncomingApprovalPermission`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:302](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L302)

#### Returns

`UserIncomingApprovalPermission`

#### Inherited from

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`toProto`](/sdk/reference/classes/user-incoming-approval-permission#toproto)

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

`UserIncomingApprovalPermissionWithDetails`\<`U`\>[]

##### time?

`U`

#### Returns

`Error` \| `null`

#### Inherited from

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`check`](/sdk/reference/classes/user-incoming-approval-permission#check)

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): [`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission)\<`U`\>

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

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission)\<`U`\>

#### Inherited from

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`fromJson`](/sdk/reference/classes/user-incoming-approval-permission#fromjson)

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): [`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission)\<`U`\>

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

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission)\<`U`\>

#### Inherited from

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`fromJsonString`](/sdk/reference/classes/user-incoming-approval-permission#fromjsonstring)

***

### fromProto()

> `static` **fromProto**\<`U`\>(`protoMsg`, `convertFunction`): [`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission)\<`U`\>

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

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission)\<`U`\>

#### Inherited from

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`fromProto`](/sdk/reference/classes/user-incoming-approval-permission#fromproto)

***

### validateUpdate()

> `static` **validateUpdate**\<`U`\>(`permissions`, `newPermission`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:346](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L346)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### permissions

`UserIncomingApprovalPermissionWithDetails`\<`U`\>[]

##### newPermission

`UserIncomingApprovalPermissionWithDetails`\<`U`\>[]

#### Returns

`Error` \| `null`

#### Inherited from

[`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission).[`validateUpdate`](/sdk/reference/classes/user-incoming-approval-permission#validateupdate)
