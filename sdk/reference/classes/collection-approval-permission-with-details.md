---
description: "T extends NumberType"
---

# Class: CollectionApprovalPermissionWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:904](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L904)

## Extends

- [`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iCollectionApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-collection-approval-permission-with-details)\<`T`\>
- [`CustomType`](/sdk/reference/interfaces/custom-type)\<`CollectionApprovalPermissionWithDetails`\<`T`\>\>

## Constructors

### Constructor

> **new CollectionApprovalPermissionWithDetails**\<`T`\>(`data`): `CollectionApprovalPermissionWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:912](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L912)

#### Parameters

##### data

[`iCollectionApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-collection-approval-permission-with-details)\<`T`\>

#### Returns

`CollectionApprovalPermissionWithDetails`\<`T`\>

#### Overrides

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`constructor`](/sdk/reference/classes/collection-approval-permission#constructor)

## Properties

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:772](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L772)

The approval ID of the approved transfers. Can use "All" to represent all IDs, "!approvalId" to represent all IDs except approvalId, or "approvalId" to represent only approvalId.

#### Implementation of

[`iCollectionApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-collection-approval-permission-with-details).[`approvalId`](/sdk/reference/interfaces/i-collection-approval-permission-with-details#approvalid)

#### Inherited from

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`approvalId`](/sdk/reference/classes/collection-approval-permission#approvalid)

***

### fromList

> **fromList**: [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:909](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L909)

#### Implementation of

[`iCollectionApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-collection-approval-permission-with-details).[`fromList`](/sdk/reference/interfaces/i-collection-approval-permission-with-details#fromlist)

***

### fromListId

> **fromListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:766](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L766)

The list ID of the from addresses of the approved transfers.

#### Implementation of

[`iCollectionApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-collection-approval-permission-with-details).[`fromListId`](/sdk/reference/interfaces/i-collection-approval-permission-with-details#fromlistid)

#### Inherited from

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`fromListId`](/sdk/reference/classes/collection-approval-permission#fromlistid)

***

### initiatedByList

> **initiatedByList**: [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:910](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L910)

#### Implementation of

[`iCollectionApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-collection-approval-permission-with-details).[`initiatedByList`](/sdk/reference/interfaces/i-collection-approval-permission-with-details#initiatedbylist)

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:768](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L768)

The list ID of the initiatedBy addresses of the approved transfers.

#### Implementation of

[`iCollectionApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-collection-approval-permission-with-details).[`initiatedByListId`](/sdk/reference/interfaces/i-collection-approval-permission-with-details#initiatedbylistid)

#### Inherited from

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`initiatedByListId`](/sdk/reference/classes/collection-approval-permission#initiatedbylistid)

***

### ownershipTimes

> **ownershipTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:771](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L771)

The owned times of the approved transfers.

#### Implementation of

[`iCollectionApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-collection-approval-permission-with-details).[`ownershipTimes`](/sdk/reference/interfaces/i-collection-approval-permission-with-details#ownershiptimes)

#### Inherited from

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`ownershipTimes`](/sdk/reference/classes/collection-approval-permission#ownershiptimes)

***

### permanentlyForbiddenTimes

> **permanentlyForbiddenTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:774](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L774)

The forbidden times of this permission.

#### Implementation of

[`iCollectionApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-collection-approval-permission-with-details).[`permanentlyForbiddenTimes`](/sdk/reference/interfaces/i-collection-approval-permission-with-details#permanentlyforbiddentimes)

#### Inherited from

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`permanentlyForbiddenTimes`](/sdk/reference/classes/collection-approval-permission#permanentlyforbiddentimes)

***

### permanentlyPermittedTimes

> **permanentlyPermittedTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:773](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L773)

The permitted times of this permission.

#### Implementation of

[`iCollectionApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-collection-approval-permission-with-details).[`permanentlyPermittedTimes`](/sdk/reference/interfaces/i-collection-approval-permission-with-details#permanentlypermittedtimes)

#### Inherited from

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`permanentlyPermittedTimes`](/sdk/reference/classes/collection-approval-permission#permanentlypermittedtimes)

***

### tokenIds

> **tokenIds**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:770](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L770)

The token IDs of the approved transfers.

#### Implementation of

[`iCollectionApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-collection-approval-permission-with-details).[`tokenIds`](/sdk/reference/interfaces/i-collection-approval-permission-with-details#tokenids)

#### Inherited from

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`tokenIds`](/sdk/reference/classes/collection-approval-permission#tokenids)

***

### toList

> **toList**: [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:908](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L908)

#### Implementation of

[`iCollectionApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-collection-approval-permission-with-details).[`toList`](/sdk/reference/interfaces/i-collection-approval-permission-with-details#tolist)

***

### toListId

> **toListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:767](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L767)

The list ID of the to addresses of the approved transfers.

#### Implementation of

[`iCollectionApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-collection-approval-permission-with-details).[`toListId`](/sdk/reference/interfaces/i-collection-approval-permission-with-details#tolistid)

#### Inherited from

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`toListId`](/sdk/reference/classes/collection-approval-permission#tolistid)

***

### transferTimes

> **transferTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:769](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L769)

The transfer times of the approved transfers.

#### Implementation of

[`iCollectionApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-collection-approval-permission-with-details).[`transferTimes`](/sdk/reference/interfaces/i-collection-approval-permission-with-details#transfertimes)

#### Inherited from

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`transferTimes`](/sdk/reference/classes/collection-approval-permission#transfertimes)

## Methods

### castToUniversalPermission()

> **castToUniversalPermission**(): [`UniversalPermission`](/sdk/reference/interfaces/universal-permission)

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:927](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L927)

#### Returns

[`UniversalPermission`](/sdk/reference/interfaces/universal-permission)

***

### clone()

> **clone**(): `CollectionApprovalPermissionWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:919](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L919)

Deep copies the object and returns a new instance.

#### Returns

`CollectionApprovalPermissionWithDetails`\<`T`\>

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`clone`](/sdk/reference/interfaces/custom-type#clone)

#### Overrides

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`clone`](/sdk/reference/classes/collection-approval-permission#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `CollectionApprovalPermissionWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:923](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L923)

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

`CollectionApprovalPermissionWithDetails`\<`U`\>

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`convert`](/sdk/reference/interfaces/custom-type#convert)

#### Overrides

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`convert`](/sdk/reference/classes/collection-approval-permission#convert)

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

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`equals`](/sdk/reference/classes/collection-approval-permission#equals)

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

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`getNumberFieldNames`](/sdk/reference/classes/collection-approval-permission#getnumberfieldnames)

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

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`hasNumberFields`](/sdk/reference/classes/collection-approval-permission#hasnumberfields)

***

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): [`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:889](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L889)

#### Parameters

##### prefix

`string`

#### Returns

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission)\<`T`\>

#### Inherited from

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`toBech32Addresses`](/sdk/reference/classes/collection-approval-permission#tobech32addresses)

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

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`toJson`](/sdk/reference/classes/collection-approval-permission#tojson)

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

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`toJsonString`](/sdk/reference/classes/collection-approval-permission#tojsonstring)

***

### toProto()

> **toProto**(): `CollectionApprovalPermission`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:805](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L805)

#### Returns

`CollectionApprovalPermission`

#### Inherited from

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`toProto`](/sdk/reference/classes/collection-approval-permission#toproto)

***

### check()

> `static` **check**\<`U`\>(`details`, `permissions`, `time?`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:851](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L851)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### details

`object`[]

##### permissions

`CollectionApprovalPermissionWithDetails`\<`U`\>[]

##### time?

`U`

#### Returns

`Error` \| `null`

#### Inherited from

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`check`](/sdk/reference/classes/collection-approval-permission#check)

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): [`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:809](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L809)

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

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission)\<`U`\>

#### Inherited from

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`fromJson`](/sdk/reference/classes/collection-approval-permission#fromjson)

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): [`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:817](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L817)

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

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission)\<`U`\>

#### Inherited from

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`fromJsonString`](/sdk/reference/classes/collection-approval-permission#fromjsonstring)

***

### fromProto()

> `static` **fromProto**\<`U`\>(`protoMsg`, `convertFunction`): [`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:825](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L825)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### protoMsg

`CollectionApprovalPermission`

##### convertFunction

(`item`) => `U`

#### Returns

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission)\<`U`\>

#### Inherited from

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`fromProto`](/sdk/reference/classes/collection-approval-permission#fromproto)

***

### validateUpdate()

> `static` **validateUpdate**\<`U`\>(`permissions`, `newPermission`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:842](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L842)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### permissions

`CollectionApprovalPermissionWithDetails`\<`U`\>[]

##### newPermission

`CollectionApprovalPermissionWithDetails`\<`U`\>[]

#### Returns

`Error` \| `null`

#### Inherited from

[`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission).[`validateUpdate`](/sdk/reference/classes/collection-approval-permission#validateupdate)
