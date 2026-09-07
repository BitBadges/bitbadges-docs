---
description: "The CustomType interface is the base interface for all custom types in the SDK. It provides methods for comparing, converting, and cloning objects."
---

# Interface: CustomType\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L40)

The CustomType interface is the base interface for all custom types in the SDK. It provides methods for comparing, converting, and cloning objects.

## Type Parameters

### T

`T` *extends* `CustomType`\<`T`\>

## Methods

### clone()

> **clone**(): `T`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:58](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L58)

Deep copies the object and returns a new instance.

#### Returns

`T`

***

### convert()

> **convert**\<`U`\>(`convertFunction?`): `CustomType`\<`any`\>

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:66](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L66)

Converts the object to a different NumberType equivalent.

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction?

(`val`) => `U`

#### Returns

`CustomType`\<`any`\>

***

### equals()

> **equals**\<`U`\>(`other`, `normalizeNumberTypes?`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:46](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L46)

Compares this object's fields to another object's fields for equality. Equality is determined by comparing the JSON representations of the objects.

If `normalizeNumberTypes` is true, then all number types will be compared as strings (i.e. "1n" === "1" === 1). Else, they will be compared as their native types (i.e. 1n !== 1 !== "1").

#### Type Parameters

##### U

`U` *extends* `CustomType`\<`U`\>

#### Parameters

##### other

`CustomType`\<`U`\> \| `null` \| `undefined`

##### normalizeNumberTypes?

`boolean`

#### Returns

`boolean`

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:62](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L62)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:70](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L70)

Checks if the object has number fields.

#### Returns

`boolean`

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:50](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L50)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:54](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L54)

Converts the object to a JSON string.

#### Returns

`string`
