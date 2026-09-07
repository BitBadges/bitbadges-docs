---
description: "T extends NumberType"
---

# Class: CosmosCoinWrapperPathWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1177](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1177)

## Extends

- [`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iCosmosCoinWrapperPathWithDetails`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details)\<`T`\>

## Constructors

### Constructor

> **new CosmosCoinWrapperPathWithDetails**\<`T`\>(`data`): `CosmosCoinWrapperPathWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1183](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1183)

#### Parameters

##### data

[`iCosmosCoinWrapperPathWithDetails`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details)\<`T`\>

#### Returns

`CosmosCoinWrapperPathWithDetails`\<`T`\>

#### Overrides

[`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path).[`constructor`](/sdk/reference/classes/cosmos-coin-wrapper-path#constructor)

## Properties

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:906](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L906)

#### Implementation of

[`iCosmosCoinWrapperPathWithDetails`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details).[`address`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details#address)

#### Inherited from

[`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path).[`address`](/sdk/reference/classes/cosmos-coin-wrapper-path#address)

***

### allowOverrideWithAnyValidToken

> **allowOverrideWithAnyValidToken**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:911](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L911)

#### Implementation of

[`iCosmosCoinWrapperPathWithDetails`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details).[`allowOverrideWithAnyValidToken`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details#allowoverridewithanyvalidtoken)

#### Inherited from

[`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path).[`allowOverrideWithAnyValidToken`](/sdk/reference/classes/cosmos-coin-wrapper-path#allowoverridewithanyvalidtoken)

***

### assetPairInfos?

> `optional` **assetPairInfos?**: [`AssetInfoDoc`](/sdk/reference/classes/asset-info-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1181](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1181)

Asset Pair Infos

#### Implementation of

[`iCosmosCoinWrapperPathWithDetails`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details).[`assetPairInfos`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details#assetpairinfos)

***

### conversion

> **conversion**: [`ConversionWithoutDenom`](/sdk/reference/classes/conversion-without-denom)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:908](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L908)

#### Implementation of

[`iCosmosCoinWrapperPathWithDetails`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details).[`conversion`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details#conversion)

#### Inherited from

[`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path).[`conversion`](/sdk/reference/classes/cosmos-coin-wrapper-path#conversion)

***

### denom

> **denom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:907](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L907)

#### Implementation of

[`iCosmosCoinWrapperPathWithDetails`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details).[`denom`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details#denom)

#### Inherited from

[`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path).[`denom`](/sdk/reference/classes/cosmos-coin-wrapper-path#denom)

***

### denomUnits

> **denomUnits**: [`DenomUnitWithDetails`](/sdk/reference/classes/denom-unit-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1179](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1179)

The denomination units with metadata details populated.

#### Implementation of

[`iCosmosCoinWrapperPathWithDetails`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details).[`denomUnits`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details#denomunits)

#### Overrides

[`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path).[`denomUnits`](/sdk/reference/classes/cosmos-coin-wrapper-path#denomunits)

***

### metadata

> **metadata**: [`PathMetadataWithDetails`](/sdk/reference/classes/path-metadata-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1178](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1178)

Metadata object containing uri, customData, and fetched metadata.

#### Implementation of

[`iCosmosCoinWrapperPathWithDetails`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details).[`metadata`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details#metadata)

#### Overrides

[`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path).[`metadata`](/sdk/reference/classes/cosmos-coin-wrapper-path#metadata)

***

### poolInfos?

> `optional` **poolInfos?**: [`PoolInfo`](/sdk/reference/classes/pool-info)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1180](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1180)

Pool Infos

#### Implementation of

[`iCosmosCoinWrapperPathWithDetails`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details).[`poolInfos`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details#poolinfos)

***

### symbol

> **symbol**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:909](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L909)

#### Implementation of

[`iCosmosCoinWrapperPathWithDetails`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details).[`symbol`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details#symbol)

#### Inherited from

[`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path).[`symbol`](/sdk/reference/classes/cosmos-coin-wrapper-path#symbol)

## Methods

### clone()

> **clone**(): [`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path)

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

[`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path)

#### Inherited from

[`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path).[`clone`](/sdk/reference/classes/cosmos-coin-wrapper-path#clone)

***

### ~~convert()~~

> **convert**\<`U`\>(`convertFunction`, `options?`): `CosmosCoinWrapperPathWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1195](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1195)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`CosmosCoinWrapperPathWithDetails`\<`U`\>

#### Deprecated

This function is unnecessary as this field has no numeric types.
Please use the `.clone()` method instead.

#### Overrides

[`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path).[`convert`](/sdk/reference/classes/cosmos-coin-wrapper-path#convert)

***

### equals()

> **equals**\<`U`\>(`other`, `normalizeNumberTypes?`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:101](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L101)

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

[`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path).[`equals`](/sdk/reference/classes/cosmos-coin-wrapper-path#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:925](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L925)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path).[`getNumberFieldNames`](/sdk/reference/classes/cosmos-coin-wrapper-path#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L115)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path).[`hasNumberFields`](/sdk/reference/classes/cosmos-coin-wrapper-path#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L93)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path).[`toJson`](/sdk/reference/classes/cosmos-coin-wrapper-path#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L97)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path).[`toJsonString`](/sdk/reference/classes/cosmos-coin-wrapper-path#tojsonstring)

***

### fromProto()

> `static` **fromProto**\<`U`\>(`protoMsg`, `convertFunction`): `CosmosCoinWrapperPathWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1199](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1199)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### protoMsg

`CosmosCoinWrapperPath`

##### convertFunction

(`item`) => `U`

#### Returns

`CosmosCoinWrapperPathWithDetails`\<`U`\>

#### Overrides

[`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path).[`fromProto`](/sdk/reference/classes/cosmos-coin-wrapper-path#fromproto)
