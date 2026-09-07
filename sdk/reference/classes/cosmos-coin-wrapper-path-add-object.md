---
description: "Type for Cosmos SDK Coin information with support for bigint amounts (e.g. { amount: 1000000, denom: 'ubadge' })."
---

# Class: CosmosCoinWrapperPathAddObject\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:303](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L303)

Type for Cosmos SDK Coin information with support for bigint amounts (e.g. { amount: 1000000, denom: 'ubadge' }).

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`CosmosCoinWrapperPathAddObject`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iCosmosCoinWrapperPathAddObject`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-add-object)\<`T`\>

## Constructors

### Constructor

> **new CosmosCoinWrapperPathAddObject**\<`T`\>(`data`): `CosmosCoinWrapperPathAddObject`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:314](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L314)

#### Parameters

##### data

[`iCosmosCoinWrapperPathAddObject`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-add-object)\<`T`\>

#### Returns

`CosmosCoinWrapperPathAddObject`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### allowOverrideWithAnyValidToken

> **allowOverrideWithAnyValidToken**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:311](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L311)

Whether to allow override with any valid token.

#### Implementation of

[`iCosmosCoinWrapperPathAddObject`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-add-object).[`allowOverrideWithAnyValidToken`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-add-object#allowoverridewithanyvalidtoken)

***

### conversion

> **conversion**: [`ConversionWithoutDenom`](/sdk/reference/classes/conversion-without-denom)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:308](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L308)

The conversion between cosmos coin and badge balances.

#### Implementation of

[`iCosmosCoinWrapperPathAddObject`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-add-object).[`conversion`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-add-object#conversion)

***

### denom

> **denom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:307](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L307)

The denom of the IBC wrapper path.

#### Implementation of

[`iCosmosCoinWrapperPathAddObject`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-add-object).[`denom`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-add-object#denom)

***

### denomUnits

> **denomUnits**: [`DenomUnit`](/sdk/reference/classes/denom-unit)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:310](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L310)

The denomination units for this IBC wrapper path.

#### Implementation of

[`iCosmosCoinWrapperPathAddObject`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-add-object).[`denomUnits`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-add-object#denomunits)

***

### metadata

> **metadata**: [`PathMetadata`](/sdk/reference/classes/path-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:312](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L312)

The metadata for this wrapper path.

#### Implementation of

[`iCosmosCoinWrapperPathAddObject`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-add-object).[`metadata`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-add-object#metadata)

***

### symbol

> **symbol**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:309](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L309)

The symbol for this IBC wrapper path.

#### Implementation of

[`iCosmosCoinWrapperPathAddObject`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-add-object).[`symbol`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-add-object#symbol)

## Methods

### clone()

> **clone**(): `CosmosCoinWrapperPathAddObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`CosmosCoinWrapperPathAddObject`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `CosmosCoinWrapperPathAddObject`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:328](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L328)

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

`CosmosCoinWrapperPathAddObject`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:324](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L324)

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

> **toProto**(): `CosmosCoinWrapperPathAddObject`

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:348](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L348)

#### Returns

`CosmosCoinWrapperPathAddObject`

***

### fromProto()

> `static` **fromProto**\<`T`\>(`data`, `convertFunction`): `CosmosCoinWrapperPathAddObject`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:332](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L332)

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### data

`CosmosCoinWrapperPathAddObject`

##### convertFunction

(`val`) => `T`

#### Returns

`CosmosCoinWrapperPathAddObject`\<`T`\>
