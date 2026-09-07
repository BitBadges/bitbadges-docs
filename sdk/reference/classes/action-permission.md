---
description: "ActionPermission represents a standard permission with no extra criteria."
---

# Class: ActionPermission\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:546](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L546)

ActionPermission represents a standard permission with no extra criteria.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`ActionPermission`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iActionPermission`](/sdk/reference/interfaces/i-action-permission)\<`T`\>

## Constructors

### Constructor

> **new ActionPermission**\<`T`\>(`msg`): `ActionPermission`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:550](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L550)

#### Parameters

##### msg

[`iActionPermission`](/sdk/reference/interfaces/i-action-permission)\<`T`\>

#### Returns

`ActionPermission`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### permanentlyForbiddenTimes

> **permanentlyForbiddenTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:548](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L548)

The forbidden times of the permission.

#### Implementation of

[`iActionPermission`](/sdk/reference/interfaces/i-action-permission).[`permanentlyForbiddenTimes`](/sdk/reference/interfaces/i-action-permission#permanentlyforbiddentimes)

***

### permanentlyPermittedTimes

> **permanentlyPermittedTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:547](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L547)

The permitted times of the permission.

#### Implementation of

[`iActionPermission`](/sdk/reference/interfaces/i-action-permission).[`permanentlyPermittedTimes`](/sdk/reference/interfaces/i-action-permission#permanentlypermittedtimes)

## Methods

### castToUniversalPermission()

> **castToUniversalPermission**(): [`UniversalPermission`](/sdk/reference/interfaces/universal-permission)

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:592](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L592)

#### Returns

[`UniversalPermission`](/sdk/reference/interfaces/universal-permission)

***

### clone()

> **clone**(): `ActionPermission`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`ActionPermission`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `ActionPermission`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:556](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L556)

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

`ActionPermission`\<`U`\>

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

> **toProto**(): `ActionPermission`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:565](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L565)

#### Returns

`ActionPermission`

***

### check()

> `static` **check**\<`T`\>(`permissions`, `time?`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:606](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L606)

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### permissions

`ActionPermission`\<`T`\>[]

##### time?

`T`

#### Returns

`Error` \| `null`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `ActionPermission`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:569](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L569)

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

`ActionPermission`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `ActionPermission`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:577](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L577)

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

`ActionPermission`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`protoMsg`, `convertFunction`): `ActionPermission`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:585](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L585)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### protoMsg

`ActionPermission`

##### convertFunction

(`item`) => `U`

#### Returns

`ActionPermission`\<`U`\>

***

### validateUpdate()

> `static` **validateUpdate**\<`U`\>(`permissions`, `newPermission`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:600](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L600)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### permissions

`ActionPermission`\<`U`\>[]

##### newPermission

`ActionPermission`\<`U`\>[]

#### Returns

`Error` \| `null`
