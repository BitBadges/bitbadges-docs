---
description: "PermissionCriteria defines the criteria for executing a permission. Currently supports approved addresses (whitelist)."
---

# Class: PermissionCriteria

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:14](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L14)

PermissionCriteria defines the criteria for executing a permission.
Currently supports approved addresses (whitelist).

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`PermissionCriteria`\>

## Implements

- [`iPermissionCriteria`](/sdk/reference/interfaces/i-permission-criteria)

## Constructors

### Constructor

> **new PermissionCriteria**(`data`): `PermissionCriteria`

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L17)

#### Parameters

##### data

[`iPermissionCriteria`](/sdk/reference/interfaces/i-permission-criteria)

#### Returns

`PermissionCriteria`

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### approvedAddresses

> **approvedAddresses**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:15](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L15)

List of approved addresses that can execute this permission.

#### Implementation of

[`iPermissionCriteria`](/sdk/reference/interfaces/i-permission-criteria).[`approvedAddresses`](/sdk/reference/interfaces/i-permission-criteria#approvedaddresses)

## Methods

### clone()

> **clone**(): `PermissionCriteria`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`PermissionCriteria`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `PermissionCriteria`

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:26](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L26)

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

`PermissionCriteria`

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

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:22](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L22)

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

> **toProto**(): `PermissionCriteria`

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:30](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L30)

#### Returns

`PermissionCriteria`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `PermissionCriteria`

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L36)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`PermissionCriteria`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `PermissionCriteria`

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L40)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`PermissionCriteria`

***

### fromProto()

> `static` **fromProto**(`protoMsg`): `PermissionCriteria`

Defined in: [packages/bitbadgesjs-sdk/src/core/managersplitter.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/managersplitter.ts#L44)

#### Parameters

##### protoMsg

`PermissionCriteria`

#### Returns

`PermissionCriteria`
