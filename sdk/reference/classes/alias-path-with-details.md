---
description: "T extends NumberType"
---

# Class: AliasPathWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:998](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L998)

## Extends

- [`AliasPath`](/sdk/reference/classes/alias-path)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iAliasPathWithDetails`](/sdk/reference/interfaces/i-alias-path-with-details)\<`T`\>

## Constructors

### Constructor

> **new AliasPathWithDetails**\<`T`\>(`data`): `AliasPathWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1004](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1004)

#### Parameters

##### data

[`iAliasPathWithDetails`](/sdk/reference/interfaces/i-alias-path-with-details)\<`T`\>

#### Returns

`AliasPathWithDetails`\<`T`\>

#### Overrides

[`AliasPath`](/sdk/reference/classes/alias-path).[`constructor`](/sdk/reference/classes/alias-path#constructor)

## Properties

### assetPairInfos?

> `optional` **assetPairInfos?**: [`AssetInfoDoc`](/sdk/reference/classes/asset-info-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1002](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1002)

Asset Pair Infos

#### Implementation of

[`iAliasPathWithDetails`](/sdk/reference/interfaces/i-alias-path-with-details).[`assetPairInfos`](/sdk/reference/interfaces/i-alias-path-with-details#assetpairinfos)

***

### conversion

> **conversion**: [`ConversionWithoutDenom`](/sdk/reference/classes/conversion-without-denom)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:958](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L958)

#### Implementation of

[`iAliasPathWithDetails`](/sdk/reference/interfaces/i-alias-path-with-details).[`conversion`](/sdk/reference/interfaces/i-alias-path-with-details#conversion)

#### Inherited from

[`AliasPath`](/sdk/reference/classes/alias-path).[`conversion`](/sdk/reference/classes/alias-path#conversion)

***

### denom

> **denom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:957](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L957)

#### Implementation of

[`iAliasPathWithDetails`](/sdk/reference/interfaces/i-alias-path-with-details).[`denom`](/sdk/reference/interfaces/i-alias-path-with-details#denom)

#### Inherited from

[`AliasPath`](/sdk/reference/classes/alias-path).[`denom`](/sdk/reference/classes/alias-path#denom)

***

### denomUnits

> **denomUnits**: [`DenomUnitWithDetails`](/sdk/reference/classes/denom-unit-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1000](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1000)

The denomination units with metadata details populated.

#### Implementation of

[`iAliasPathWithDetails`](/sdk/reference/interfaces/i-alias-path-with-details).[`denomUnits`](/sdk/reference/interfaces/i-alias-path-with-details#denomunits)

#### Overrides

[`AliasPath`](/sdk/reference/classes/alias-path).[`denomUnits`](/sdk/reference/classes/alias-path#denomunits)

***

### metadata

> **metadata**: [`PathMetadataWithDetails`](/sdk/reference/classes/path-metadata-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:999](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L999)

Metadata object containing uri, customData, and fetched metadata.

#### Implementation of

[`iAliasPathWithDetails`](/sdk/reference/interfaces/i-alias-path-with-details).[`metadata`](/sdk/reference/interfaces/i-alias-path-with-details#metadata)

#### Overrides

[`AliasPath`](/sdk/reference/classes/alias-path).[`metadata`](/sdk/reference/classes/alias-path#metadata)

***

### poolInfos?

> `optional` **poolInfos?**: [`PoolInfo`](/sdk/reference/classes/pool-info)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1001](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1001)

Pool Infos

#### Implementation of

[`iAliasPathWithDetails`](/sdk/reference/interfaces/i-alias-path-with-details).[`poolInfos`](/sdk/reference/interfaces/i-alias-path-with-details#poolinfos)

***

### symbol

> **symbol**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:959](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L959)

#### Implementation of

[`iAliasPathWithDetails`](/sdk/reference/interfaces/i-alias-path-with-details).[`symbol`](/sdk/reference/interfaces/i-alias-path-with-details#symbol)

#### Inherited from

[`AliasPath`](/sdk/reference/classes/alias-path).[`symbol`](/sdk/reference/classes/alias-path#symbol)

## Methods

### clone()

> **clone**(): [`AliasPath`](/sdk/reference/classes/alias-path)

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

[`AliasPath`](/sdk/reference/classes/alias-path)

#### Inherited from

[`AliasPath`](/sdk/reference/classes/alias-path).[`clone`](/sdk/reference/classes/alias-path#clone)

***

### ~~convert()~~

> **convert**\<`U`\>(`convertFunction`, `options?`): `AliasPathWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1016](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1016)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`AliasPathWithDetails`\<`U`\>

#### Deprecated

This function is unnecessary as this field has no numeric types.
Please use the `.clone()` method instead.

#### Overrides

[`AliasPath`](/sdk/reference/classes/alias-path).[`convert`](/sdk/reference/classes/alias-path#convert)

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

[`AliasPath`](/sdk/reference/classes/alias-path).[`equals`](/sdk/reference/classes/alias-path#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:972](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L972)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`AliasPath`](/sdk/reference/classes/alias-path).[`getNumberFieldNames`](/sdk/reference/classes/alias-path#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L115)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`AliasPath`](/sdk/reference/classes/alias-path).[`hasNumberFields`](/sdk/reference/classes/alias-path#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L93)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`AliasPath`](/sdk/reference/classes/alias-path).[`toJson`](/sdk/reference/classes/alias-path#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L97)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`AliasPath`](/sdk/reference/classes/alias-path).[`toJsonString`](/sdk/reference/classes/alias-path#tojsonstring)

***

### fromProto()

> `static` **fromProto**\<`U`\>(`protoMsg`, `convertFunction`): [`AliasPath`](/sdk/reference/classes/alias-path)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:980](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L980)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### protoMsg

`AliasPath`

##### convertFunction

(`item`) => `U`

#### Returns

[`AliasPath`](/sdk/reference/classes/alias-path)\<`U`\>

#### Inherited from

[`AliasPath`](/sdk/reference/classes/alias-path).[`fromProto`](/sdk/reference/classes/alias-path#fromproto)
