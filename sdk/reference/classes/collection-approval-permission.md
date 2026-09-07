---
description: "CollectionApprovalPermission represents a permission that allows updating the collection approved transfers."
---

# Class: CollectionApprovalPermission\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:762](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L762)

CollectionApprovalPermission represents a permission that allows updating the collection approved transfers.

This permission allows you to define when the approved transfers can be updated and which combinations of (from, to, initiatedBy, transferTimes, tokenIds, ownershipTimes, permanentlyPermittedTimes, permanentlyForbiddenTimes) can be updated.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`CollectionApprovalPermission`\<`T`\>\>

## Extended by

- [`CollectionApprovalPermissionWithDetails`](/sdk/reference/classes/collection-approval-permission-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission)\<`T`\>

## Constructors

### Constructor

> **new CollectionApprovalPermission**\<`T`\>(`msg`): `CollectionApprovalPermission`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:776](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L776)

#### Parameters

##### msg

[`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission)\<`T`\>

#### Returns

`CollectionApprovalPermission`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:772](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L772)

The approval ID of the approved transfers. Can use "All" to represent all IDs, "!approvalId" to represent all IDs except approvalId, or "approvalId" to represent only approvalId.

#### Implementation of

[`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission).[`approvalId`](/sdk/reference/interfaces/i-collection-approval-permission#approvalid)

***

### fromListId

> **fromListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:766](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L766)

The list ID of the from addresses of the approved transfers.

#### Implementation of

[`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission).[`fromListId`](/sdk/reference/interfaces/i-collection-approval-permission#fromlistid)

***

### initiatedByListId

> **initiatedByListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:768](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L768)

The list ID of the initiatedBy addresses of the approved transfers.

#### Implementation of

[`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission).[`initiatedByListId`](/sdk/reference/interfaces/i-collection-approval-permission#initiatedbylistid)

***

### ownershipTimes

> **ownershipTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:771](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L771)

The owned times of the approved transfers.

#### Implementation of

[`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission).[`ownershipTimes`](/sdk/reference/interfaces/i-collection-approval-permission#ownershiptimes)

***

### permanentlyForbiddenTimes

> **permanentlyForbiddenTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:774](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L774)

The forbidden times of this permission.

#### Implementation of

[`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission).[`permanentlyForbiddenTimes`](/sdk/reference/interfaces/i-collection-approval-permission#permanentlyforbiddentimes)

***

### permanentlyPermittedTimes

> **permanentlyPermittedTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:773](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L773)

The permitted times of this permission.

#### Implementation of

[`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission).[`permanentlyPermittedTimes`](/sdk/reference/interfaces/i-collection-approval-permission#permanentlypermittedtimes)

***

### tokenIds

> **tokenIds**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:770](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L770)

The token IDs of the approved transfers.

#### Implementation of

[`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission).[`tokenIds`](/sdk/reference/interfaces/i-collection-approval-permission#tokenids)

***

### toListId

> **toListId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:767](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L767)

The list ID of the to addresses of the approved transfers.

#### Implementation of

[`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission).[`toListId`](/sdk/reference/interfaces/i-collection-approval-permission#tolistid)

***

### transferTimes

> **transferTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:769](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L769)

The transfer times of the approved transfers.

#### Implementation of

[`iCollectionApprovalPermission`](/sdk/reference/interfaces/i-collection-approval-permission).[`transferTimes`](/sdk/reference/interfaces/i-collection-approval-permission#transfertimes)

## Methods

### clone()

> **clone**(): `CollectionApprovalPermission`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`CollectionApprovalPermission`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `CollectionApprovalPermission`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:789](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L789)

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

`CollectionApprovalPermission`\<`U`\>

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

> **toBech32Addresses**(`prefix`): `CollectionApprovalPermission`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:889](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L889)

#### Parameters

##### prefix

`string`

#### Returns

`CollectionApprovalPermission`\<`T`\>

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

> **toProto**(): `CollectionApprovalPermission`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:805](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L805)

#### Returns

`CollectionApprovalPermission`

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

[`CollectionApprovalPermissionWithDetails`](/sdk/reference/classes/collection-approval-permission-with-details)\<`U`\>[]

##### time?

`U`

#### Returns

`Error` \| `null`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `CollectionApprovalPermission`\<`U`\>

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

`CollectionApprovalPermission`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `CollectionApprovalPermission`\<`U`\>

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

`CollectionApprovalPermission`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`protoMsg`, `convertFunction`): `CollectionApprovalPermission`\<`U`\>

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

`CollectionApprovalPermission`\<`U`\>

***

### validateUpdate()

> `static` **validateUpdate**\<`U`\>(`permissions`, `newPermission`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:842](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L842)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### permissions

[`CollectionApprovalPermissionWithDetails`](/sdk/reference/classes/collection-approval-permission-with-details)\<`U`\>[]

##### newPermission

[`CollectionApprovalPermissionWithDetails`](/sdk/reference/classes/collection-approval-permission-with-details)\<`U`\>[]

#### Returns

`Error` \| `null`
