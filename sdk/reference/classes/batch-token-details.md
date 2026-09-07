---
description: "T extends NumberType"
---

# Class: BatchTokenDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/batch-utils.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/batch-utils.ts#L23)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`BatchTokenDetails`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<`T`\>

## Constructors

### Constructor

> **new BatchTokenDetails**\<`T`\>(`data`): `BatchTokenDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/batch-utils.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/batch-utils.ts#L27)

#### Parameters

##### data

[`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<`T`\>

#### Returns

`BatchTokenDetails`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/batch-utils.ts:24](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/batch-utils.ts#L24)

The collection ID of this element's token details.

#### Implementation of

[`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details).[`collectionId`](/sdk/reference/interfaces/i-batch-token-details#collectionid)

***

### tokenIds

> **tokenIds**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/batch-utils.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/batch-utils.ts#L25)

The corresponding token IDs for this collection ID.

#### Implementation of

[`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details).[`tokenIds`](/sdk/reference/interfaces/i-batch-token-details#tokenids)

## Methods

### clone()

> **clone**(): `BatchTokenDetails`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`BatchTokenDetails`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `BatchTokenDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/batch-utils.ts:37](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/batch-utils.ts#L37)

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

`BatchTokenDetails`\<`U`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`convert`](/sdk/reference/classes/base-number-type-class#convert)

***

### doesNotOverlap()

> **doesNotOverlap**(`other`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/batch-utils.ts:48](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/batch-utils.ts#L48)

Checks if the token details overlap with another set of token details.

#### Parameters

##### other

[`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<`T`\> \| [`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<`T`\>[]

#### Returns

`boolean`

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

Defined in: [packages/bitbadgesjs-sdk/src/core/batch-utils.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/batch-utils.ts#L33)

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

### isSubsetOf()

> **isSubsetOf**(`other`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/batch-utils.ts:60](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/batch-utils.ts#L60)

Checks if the token details are a subset of another set of token details (i.e. all tokenIds are in the other set).

#### Parameters

##### other

[`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<`T`\> \| [`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<`T`\>[]

#### Returns

`boolean`

***

### noneIn()

> **noneIn**(`other`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/batch-utils.ts:73](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/batch-utils.ts#L73)

Checks if the token details are not in another set of token details (i.e. none of the token IDs are in the other set).

#### Parameters

##### other

[`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<`T`\> \| [`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<`T`\>[]

#### Returns

`boolean`

***

### toArray()

> **toArray**(): [`BatchTokenDetailsArray`](/sdk/reference/classes/batch-token-details-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/batch-utils.ts:82](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/batch-utils.ts#L82)

#### Returns

[`BatchTokenDetailsArray`](/sdk/reference/classes/batch-token-details-array)\<`T`\>

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
