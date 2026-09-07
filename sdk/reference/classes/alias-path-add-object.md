---
description: "Alias (non-wrapping) path add object."
---

# Class: AliasPathAddObject\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:373](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L373)

Alias (non-wrapping) path add object.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`AliasPathAddObject`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iAliasPathAddObject`](/sdk/reference/interfaces/i-alias-path-add-object)\<`T`\>

## Constructors

### Constructor

> **new AliasPathAddObject**\<`T`\>(`data`): `AliasPathAddObject`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:380](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L380)

#### Parameters

##### data

[`iAliasPathAddObject`](/sdk/reference/interfaces/i-alias-path-add-object)\<`T`\>

#### Returns

`AliasPathAddObject`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### conversion

> **conversion**: [`ConversionWithoutDenom`](/sdk/reference/classes/conversion-without-denom)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:375](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L375)

The conversion between cosmos coin and badge balances.

#### Implementation of

[`iAliasPathAddObject`](/sdk/reference/interfaces/i-alias-path-add-object).[`conversion`](/sdk/reference/interfaces/i-alias-path-add-object#conversion)

***

### denom

> **denom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:374](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L374)

The denomination (denom) to be used for the alias.

#### Implementation of

[`iAliasPathAddObject`](/sdk/reference/interfaces/i-alias-path-add-object).[`denom`](/sdk/reference/interfaces/i-alias-path-add-object#denom)

***

### denomUnits

> **denomUnits**: [`DenomUnit`](/sdk/reference/classes/denom-unit)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:377](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L377)

Denomination units for the alias. Defines how the coin can be displayed with different decimal places and symbols.

#### Implementation of

[`iAliasPathAddObject`](/sdk/reference/interfaces/i-alias-path-add-object).[`denomUnits`](/sdk/reference/interfaces/i-alias-path-add-object#denomunits)

***

### metadata

> **metadata**: [`PathMetadata`](/sdk/reference/classes/path-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:378](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L378)

The metadata for this alias path.

#### Implementation of

[`iAliasPathAddObject`](/sdk/reference/interfaces/i-alias-path-add-object).[`metadata`](/sdk/reference/interfaces/i-alias-path-add-object#metadata)

***

### symbol

> **symbol**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:376](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L376)

The symbol for the alias (e.g., "BADGE", "NFT").

#### Implementation of

[`iAliasPathAddObject`](/sdk/reference/interfaces/i-alias-path-add-object).[`symbol`](/sdk/reference/interfaces/i-alias-path-add-object#symbol)

## Methods

### clone()

> **clone**(): `AliasPathAddObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`AliasPathAddObject`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `AliasPathAddObject`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:393](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L393)

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

`AliasPathAddObject`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:389](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L389)

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

> **toProto**(): `AliasPathAddObject`

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:409](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L409)

#### Returns

`AliasPathAddObject`

***

### fromProto()

> `static` **fromProto**\<`T`\>(`data`, `convertFunction`): `AliasPathAddObject`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:397](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L397)

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### data

`AliasPathAddObject`

##### convertFunction

(`val`) => `T`

#### Returns

`AliasPathAddObject`\<`T`\>
