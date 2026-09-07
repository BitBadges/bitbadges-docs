---
description: "CollectionPermissions represents the permissions of a collection."
---

# Class: CollectionPermissions\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:397](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L397)

CollectionPermissions represents the permissions of a collection.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`CollectionPermissions`\<`T`\>\>

## Extended by

- [`CollectionPermissionsWithDetails`](/sdk/reference/classes/collection-permissions-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions)\<`T`\>

## Constructors

### Constructor

> **new CollectionPermissions**\<`T`\>(`msg`): `CollectionPermissions`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:410](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L410)

#### Parameters

##### msg

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions)\<`T`\>

#### Returns

`CollectionPermissions`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### canAddMoreAliasPaths

> **canAddMoreAliasPaths**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:407](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L407)

The permissions for adding more alias paths to the collection.

#### Implementation of

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canAddMoreAliasPaths`](/sdk/reference/interfaces/i-collection-permissions#canaddmorealiaspaths)

***

### canAddMoreCosmosCoinWrapperPaths

> **canAddMoreCosmosCoinWrapperPaths**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:408](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L408)

The permissions for adding more cosmos coin wrapper paths to the collection.

#### Implementation of

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canAddMoreCosmosCoinWrapperPaths`](/sdk/reference/interfaces/i-collection-permissions#canaddmorecosmoscoinwrapperpaths)

***

### canArchiveCollection

> **canArchiveCollection**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:399](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L399)

The permissions for archiving the collection.

#### Implementation of

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canArchiveCollection`](/sdk/reference/interfaces/i-collection-permissions#canarchivecollection)

***

### canDeleteCollection

> **canDeleteCollection**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:398](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L398)

The permissions for deleting the collection.

#### Implementation of

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canDeleteCollection`](/sdk/reference/interfaces/i-collection-permissions#candeletecollection)

***

### canUpdateCollectionApprovals

> **canUpdateCollectionApprovals**: [`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:406](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L406)

The permissions for updating the collection approved transfers.

#### Implementation of

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canUpdateCollectionApprovals`](/sdk/reference/interfaces/i-collection-permissions#canupdatecollectionapprovals)

***

### canUpdateCollectionMetadata

> **canUpdateCollectionMetadata**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:403](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L403)

The permissions for updating the collection metadata.

#### Implementation of

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canUpdateCollectionMetadata`](/sdk/reference/interfaces/i-collection-permissions#canupdatecollectionmetadata)

***

### canUpdateCustomData

> **canUpdateCustomData**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:401](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L401)

The permissions for updating the custom data.

#### Implementation of

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canUpdateCustomData`](/sdk/reference/interfaces/i-collection-permissions#canupdatecustomdata)

***

### canUpdateManager

> **canUpdateManager**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:402](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L402)

The permissions for updating the manager.

#### Implementation of

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canUpdateManager`](/sdk/reference/interfaces/i-collection-permissions#canupdatemanager)

***

### canUpdateStandards

> **canUpdateStandards**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:400](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L400)

The permissions for updating the standards.

#### Implementation of

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canUpdateStandards`](/sdk/reference/interfaces/i-collection-permissions#canupdatestandards)

***

### canUpdateTokenMetadata

> **canUpdateTokenMetadata**: [`TokenIdsActionPermission`](/sdk/reference/classes/token-ids-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:405](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L405)

The permissions for updating the token metadata.

#### Implementation of

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canUpdateTokenMetadata`](/sdk/reference/interfaces/i-collection-permissions#canupdatetokenmetadata)

***

### canUpdateValidTokenIds

> **canUpdateValidTokenIds**: [`TokenIdsActionPermission`](/sdk/reference/classes/token-ids-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:404](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L404)

The permissions for creating more tokens.

#### Implementation of

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canUpdateValidTokenIds`](/sdk/reference/interfaces/i-collection-permissions#canupdatevalidtokenids)

## Methods

### clone()

> **clone**(): `CollectionPermissions`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`CollectionPermissions`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `CollectionPermissions`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:439](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L439)

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

`CollectionPermissions`\<`U`\>

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

> **toBech32Addresses**(`prefix`): `CollectionPermissions`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:533](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L533)

#### Parameters

##### prefix

`string`

#### Returns

`CollectionPermissions`\<`T`\>

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

> **toProto**(): `CollectionPermissions`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:457](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L457)

#### Returns

`CollectionPermissions`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `CollectionPermissions`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:461](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L461)

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

`CollectionPermissions`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `CollectionPermissions`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:469](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L469)

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

`CollectionPermissions`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`protoMsg`, `convertFunction`): `CollectionPermissions`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:477](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L477)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### protoMsg

`CollectionPermissions`

##### convertFunction

(`item`) => `U`

#### Returns

`CollectionPermissions`\<`U`\>

***

### InitEmpty()

> `static` **InitEmpty**(): `CollectionPermissions`\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:517](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L517)

#### Returns

`CollectionPermissions`\<`bigint`\>

***

### validateUpdate()

> `static` **validateUpdate**\<`U`\>(`oldPermissions`, `newPermissions`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:496](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L496)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### oldPermissions

[`CollectionPermissionsWithDetails`](/sdk/reference/classes/collection-permissions-with-details)\<`U`\>

##### newPermissions

[`CollectionPermissionsWithDetails`](/sdk/reference/classes/collection-permissions-with-details)\<`U`\>

#### Returns

`Error` \| `null`
