---
description: "ManagerSplitterPermissions mirrors the CollectionPermissions structure but maps each permission to criteria for execution."
---

# Class: ManagerSplitterPermissions

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:57](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L57)

ManagerSplitterPermissions mirrors the CollectionPermissions structure
but maps each permission to criteria for execution.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`ManagerSplitterPermissions`\>

## Implements

- [`iManagerSplitterPermissions`](/sdk/reference/interfaces/i-manager-splitter-permissions)

## Constructors

### Constructor

> **new ManagerSplitterPermissions**(`data`): `ManagerSplitterPermissions`

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:68](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L68)

#### Parameters

##### data

[`iManagerSplitterPermissions`](/sdk/reference/interfaces/i-manager-splitter-permissions)

#### Returns

`ManagerSplitterPermissions`

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### canArchiveCollection?

> `optional` **canArchiveCollection?**: [`PermissionCriteria`](/sdk/reference/classes/permission-criteria)

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:59](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L59)

Permissions related to archiving the collection.

#### Implementation of

[`iManagerSplitterPermissions`](/sdk/reference/interfaces/i-manager-splitter-permissions).[`canArchiveCollection`](/sdk/reference/interfaces/i-manager-splitter-permissions#canarchivecollection)

***

### canDeleteCollection?

> `optional` **canDeleteCollection?**: [`PermissionCriteria`](/sdk/reference/classes/permission-criteria)

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:58](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L58)

Permissions related to deleting the collection.

#### Implementation of

[`iManagerSplitterPermissions`](/sdk/reference/interfaces/i-manager-splitter-permissions).[`canDeleteCollection`](/sdk/reference/interfaces/i-manager-splitter-permissions#candeletecollection)

***

### canUpdateCollectionApprovals?

> `optional` **canUpdateCollectionApprovals?**: [`PermissionCriteria`](/sdk/reference/classes/permission-criteria)

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:66](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L66)

Permissions related to updating collection approvals.

#### Implementation of

[`iManagerSplitterPermissions`](/sdk/reference/interfaces/i-manager-splitter-permissions).[`canUpdateCollectionApprovals`](/sdk/reference/interfaces/i-manager-splitter-permissions#canupdatecollectionapprovals)

***

### canUpdateCollectionMetadata?

> `optional` **canUpdateCollectionMetadata?**: [`PermissionCriteria`](/sdk/reference/classes/permission-criteria)

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:63](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L63)

Permissions related to updating the metadata of the collection.

#### Implementation of

[`iManagerSplitterPermissions`](/sdk/reference/interfaces/i-manager-splitter-permissions).[`canUpdateCollectionMetadata`](/sdk/reference/interfaces/i-manager-splitter-permissions#canupdatecollectionmetadata)

***

### canUpdateCustomData?

> `optional` **canUpdateCustomData?**: [`PermissionCriteria`](/sdk/reference/classes/permission-criteria)

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:61](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L61)

Permissions related to updating custom data for the collection.

#### Implementation of

[`iManagerSplitterPermissions`](/sdk/reference/interfaces/i-manager-splitter-permissions).[`canUpdateCustomData`](/sdk/reference/interfaces/i-manager-splitter-permissions#canupdatecustomdata)

***

### canUpdateManager?

> `optional` **canUpdateManager?**: [`PermissionCriteria`](/sdk/reference/classes/permission-criteria)

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:62](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L62)

Permissions related to updating the collection's manager.

#### Implementation of

[`iManagerSplitterPermissions`](/sdk/reference/interfaces/i-manager-splitter-permissions).[`canUpdateManager`](/sdk/reference/interfaces/i-manager-splitter-permissions#canupdatemanager)

***

### canUpdateStandards?

> `optional` **canUpdateStandards?**: [`PermissionCriteria`](/sdk/reference/classes/permission-criteria)

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:60](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L60)

Permissions related to updating standards for the collection.

#### Implementation of

[`iManagerSplitterPermissions`](/sdk/reference/interfaces/i-manager-splitter-permissions).[`canUpdateStandards`](/sdk/reference/interfaces/i-manager-splitter-permissions#canupdatestandards)

***

### canUpdateTokenMetadata?

> `optional` **canUpdateTokenMetadata?**: [`PermissionCriteria`](/sdk/reference/classes/permission-criteria)

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:65](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L65)

Permissions related to updating token metadata for specific tokens.

#### Implementation of

[`iManagerSplitterPermissions`](/sdk/reference/interfaces/i-manager-splitter-permissions).[`canUpdateTokenMetadata`](/sdk/reference/interfaces/i-manager-splitter-permissions#canupdatetokenmetadata)

***

### canUpdateValidTokenIds?

> `optional` **canUpdateValidTokenIds?**: [`PermissionCriteria`](/sdk/reference/classes/permission-criteria)

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:64](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L64)

Permissions related to creating more tokens for the collection.

#### Implementation of

[`iManagerSplitterPermissions`](/sdk/reference/interfaces/i-manager-splitter-permissions).[`canUpdateValidTokenIds`](/sdk/reference/interfaces/i-manager-splitter-permissions#canupdatevalidtokenids)

## Methods

### clone()

> **clone**(): `ManagerSplitterPermissions`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`ManagerSplitterPermissions`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `ManagerSplitterPermissions`

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:85](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L85)

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

`ManagerSplitterPermissions`

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

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:81](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L81)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Overrides

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

> **toProto**(): `ManagerSplitterPermissions`

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:89](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L89)

#### Returns

`ManagerSplitterPermissions`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `ManagerSplitterPermissions`

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:103](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L103)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`ManagerSplitterPermissions`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `ManagerSplitterPermissions`

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:107](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L107)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`ManagerSplitterPermissions`

***

### fromProto()

> `static` **fromProto**(`protoMsg`): `ManagerSplitterPermissions`

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:111](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L111)

#### Parameters

##### protoMsg

`ManagerSplitterPermissions`

#### Returns

`ManagerSplitterPermissions`
