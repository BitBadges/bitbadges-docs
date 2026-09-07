---
description: "T extends NumberType"
---

# Class: CollectionPermissionsWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:1019](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L1019)

## Extends

- [`CollectionPermissions`](/sdk/reference/classes/collection-permissions)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iCollectionPermissionsWithDetails`](/sdk/reference/interfaces/i-collection-permissions-with-details)\<`T`\>
- [`CustomType`](/sdk/reference/interfaces/custom-type)\<`CollectionPermissionsWithDetails`\<`T`\>\>

## Constructors

### Constructor

> **new CollectionPermissionsWithDetails**\<`T`\>(`data`): `CollectionPermissionsWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:1025](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L1025)

#### Parameters

##### data

[`iCollectionPermissionsWithDetails`](/sdk/reference/interfaces/i-collection-permissions-with-details)\<`T`\>

#### Returns

`CollectionPermissionsWithDetails`\<`T`\>

#### Overrides

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`constructor`](/sdk/reference/classes/collection-permissions#constructor)

## Properties

### canAddMoreAliasPaths

> **canAddMoreAliasPaths**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:407](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L407)

The permissions for adding more alias paths to the collection.

#### Implementation of

[`iCollectionPermissionsWithDetails`](/sdk/reference/interfaces/i-collection-permissions-with-details).[`canAddMoreAliasPaths`](/sdk/reference/interfaces/i-collection-permissions-with-details#canaddmorealiaspaths)

#### Inherited from

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`canAddMoreAliasPaths`](/sdk/reference/classes/collection-permissions#canaddmorealiaspaths)

***

### canAddMoreCosmosCoinWrapperPaths

> **canAddMoreCosmosCoinWrapperPaths**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:408](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L408)

The permissions for adding more cosmos coin wrapper paths to the collection.

#### Implementation of

[`iCollectionPermissionsWithDetails`](/sdk/reference/interfaces/i-collection-permissions-with-details).[`canAddMoreCosmosCoinWrapperPaths`](/sdk/reference/interfaces/i-collection-permissions-with-details#canaddmorecosmoscoinwrapperpaths)

#### Inherited from

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`canAddMoreCosmosCoinWrapperPaths`](/sdk/reference/classes/collection-permissions#canaddmorecosmoscoinwrapperpaths)

***

### canArchiveCollection

> **canArchiveCollection**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:399](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L399)

The permissions for archiving the collection.

#### Implementation of

[`iCollectionPermissionsWithDetails`](/sdk/reference/interfaces/i-collection-permissions-with-details).[`canArchiveCollection`](/sdk/reference/interfaces/i-collection-permissions-with-details#canarchivecollection)

#### Inherited from

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`canArchiveCollection`](/sdk/reference/classes/collection-permissions#canarchivecollection)

***

### canDeleteCollection

> **canDeleteCollection**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:398](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L398)

The permissions for deleting the collection.

#### Implementation of

[`iCollectionPermissionsWithDetails`](/sdk/reference/interfaces/i-collection-permissions-with-details).[`canDeleteCollection`](/sdk/reference/interfaces/i-collection-permissions-with-details#candeletecollection)

#### Inherited from

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`canDeleteCollection`](/sdk/reference/classes/collection-permissions#candeletecollection)

***

### canUpdateCollectionApprovals

> **canUpdateCollectionApprovals**: [`CollectionApprovalPermissionWithDetails`](/sdk/reference/classes/collection-approval-permission-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:1023](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L1023)

The permissions for updating the collection approved transfers.

#### Implementation of

[`iCollectionPermissionsWithDetails`](/sdk/reference/interfaces/i-collection-permissions-with-details).[`canUpdateCollectionApprovals`](/sdk/reference/interfaces/i-collection-permissions-with-details#canupdatecollectionapprovals)

#### Overrides

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`canUpdateCollectionApprovals`](/sdk/reference/classes/collection-permissions#canupdatecollectionapprovals)

***

### canUpdateCollectionMetadata

> **canUpdateCollectionMetadata**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:403](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L403)

The permissions for updating the collection metadata.

#### Implementation of

[`iCollectionPermissionsWithDetails`](/sdk/reference/interfaces/i-collection-permissions-with-details).[`canUpdateCollectionMetadata`](/sdk/reference/interfaces/i-collection-permissions-with-details#canupdatecollectionmetadata)

#### Inherited from

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`canUpdateCollectionMetadata`](/sdk/reference/classes/collection-permissions#canupdatecollectionmetadata)

***

### canUpdateCustomData

> **canUpdateCustomData**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:401](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L401)

The permissions for updating the custom data.

#### Implementation of

[`iCollectionPermissionsWithDetails`](/sdk/reference/interfaces/i-collection-permissions-with-details).[`canUpdateCustomData`](/sdk/reference/interfaces/i-collection-permissions-with-details#canupdatecustomdata)

#### Inherited from

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`canUpdateCustomData`](/sdk/reference/classes/collection-permissions#canupdatecustomdata)

***

### canUpdateManager

> **canUpdateManager**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:402](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L402)

The permissions for updating the manager.

#### Implementation of

[`iCollectionPermissionsWithDetails`](/sdk/reference/interfaces/i-collection-permissions-with-details).[`canUpdateManager`](/sdk/reference/interfaces/i-collection-permissions-with-details#canupdatemanager)

#### Inherited from

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`canUpdateManager`](/sdk/reference/classes/collection-permissions#canupdatemanager)

***

### canUpdateStandards

> **canUpdateStandards**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:400](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L400)

The permissions for updating the standards.

#### Implementation of

[`iCollectionPermissionsWithDetails`](/sdk/reference/interfaces/i-collection-permissions-with-details).[`canUpdateStandards`](/sdk/reference/interfaces/i-collection-permissions-with-details#canupdatestandards)

#### Inherited from

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`canUpdateStandards`](/sdk/reference/classes/collection-permissions#canupdatestandards)

***

### canUpdateTokenMetadata

> **canUpdateTokenMetadata**: [`TokenIdsActionPermission`](/sdk/reference/classes/token-ids-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:405](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L405)

The permissions for updating the token metadata.

#### Implementation of

[`iCollectionPermissionsWithDetails`](/sdk/reference/interfaces/i-collection-permissions-with-details).[`canUpdateTokenMetadata`](/sdk/reference/interfaces/i-collection-permissions-with-details#canupdatetokenmetadata)

#### Inherited from

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`canUpdateTokenMetadata`](/sdk/reference/classes/collection-permissions#canupdatetokenmetadata)

***

### canUpdateValidTokenIds

> **canUpdateValidTokenIds**: [`TokenIdsActionPermission`](/sdk/reference/classes/token-ids-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:404](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L404)

The permissions for creating more tokens.

#### Implementation of

[`iCollectionPermissionsWithDetails`](/sdk/reference/interfaces/i-collection-permissions-with-details).[`canUpdateValidTokenIds`](/sdk/reference/interfaces/i-collection-permissions-with-details#canupdatevalidtokenids)

#### Inherited from

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`canUpdateValidTokenIds`](/sdk/reference/classes/collection-permissions#canupdatevalidtokenids)

## Methods

### clone()

> **clone**\<`U`\>(): `CollectionPermissionsWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:1038](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L1038)

Deep copies the object and returns a new instance.

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`CollectionPermissionsWithDetails`\<`U`\>

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`clone`](/sdk/reference/interfaces/custom-type#clone)

#### Overrides

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`clone`](/sdk/reference/classes/collection-permissions#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `CollectionPermissionsWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:1034](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L1034)

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

`CollectionPermissionsWithDetails`\<`U`\>

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`convert`](/sdk/reference/interfaces/custom-type#convert)

#### Overrides

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`convert`](/sdk/reference/classes/collection-permissions#convert)

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

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`equals`](/sdk/reference/classes/collection-permissions#equals)

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

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`getNumberFieldNames`](/sdk/reference/classes/collection-permissions#getnumberfieldnames)

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

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`hasNumberFields`](/sdk/reference/classes/collection-permissions#hasnumberfields)

***

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): [`CollectionPermissions`](/sdk/reference/classes/collection-permissions)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:533](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L533)

#### Parameters

##### prefix

`string`

#### Returns

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions)\<`T`\>

#### Inherited from

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`toBech32Addresses`](/sdk/reference/classes/collection-permissions#tobech32addresses)

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

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`toJson`](/sdk/reference/classes/collection-permissions#tojson)

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

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`toJsonString`](/sdk/reference/classes/collection-permissions#tojsonstring)

***

### toProto()

> **toProto**(): `CollectionPermissions`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:457](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L457)

#### Returns

`CollectionPermissions`

#### Inherited from

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`toProto`](/sdk/reference/classes/collection-permissions#toproto)

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): [`CollectionPermissions`](/sdk/reference/classes/collection-permissions)\<`U`\>

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

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions)\<`U`\>

#### Inherited from

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`fromJson`](/sdk/reference/classes/collection-permissions#fromjson)

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): [`CollectionPermissions`](/sdk/reference/classes/collection-permissions)\<`U`\>

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

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions)\<`U`\>

#### Inherited from

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`fromJsonString`](/sdk/reference/classes/collection-permissions#fromjsonstring)

***

### fromProto()

> `static` **fromProto**\<`U`\>(`protoMsg`, `convertFunction`): [`CollectionPermissions`](/sdk/reference/classes/collection-permissions)\<`U`\>

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

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions)\<`U`\>

#### Inherited from

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`fromProto`](/sdk/reference/classes/collection-permissions#fromproto)

***

### InitEmpty()

> `static` **InitEmpty**(): [`CollectionPermissions`](/sdk/reference/classes/collection-permissions)\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:517](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L517)

#### Returns

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions)\<`bigint`\>

#### Inherited from

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`InitEmpty`](/sdk/reference/classes/collection-permissions#initempty)

***

### validateUpdate()

> `static` **validateUpdate**\<`U`\>(`oldPermissions`, `newPermissions`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:1042](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L1042)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### oldPermissions

`CollectionPermissionsWithDetails`\<`U`\>

##### newPermissions

`CollectionPermissionsWithDetails`\<`U`\>

#### Returns

`Error` \| `null`

#### Overrides

[`CollectionPermissions`](/sdk/reference/classes/collection-permissions).[`validateUpdate`](/sdk/reference/classes/collection-permissions#validateupdate)
