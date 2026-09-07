---
description: "T extends NumberType"
---

# Class: CoinTransferItem\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:48](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L48)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`CoinTransferItem`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iCoinTransferItem`](/sdk/reference/interfaces/i-coin-transfer-item)\<`T`\>

## Constructors

### Constructor

> **new CoinTransferItem**\<`T`\>(`data`): `CoinTransferItem`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:55](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L55)

#### Parameters

##### data

[`iCoinTransferItem`](/sdk/reference/interfaces/i-coin-transfer-item)\<`T`\>

#### Returns

`CoinTransferItem`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### amount

> **amount**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:49](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L49)

The amount of the coin transfer.

#### Implementation of

[`iCoinTransferItem`](/sdk/reference/interfaces/i-coin-transfer-item).[`amount`](/sdk/reference/interfaces/i-coin-transfer-item#amount)

***

### denom

> **denom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:50](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L50)

The denom of the coin transfer.

#### Implementation of

[`iCoinTransferItem`](/sdk/reference/interfaces/i-coin-transfer-item).[`denom`](/sdk/reference/interfaces/i-coin-transfer-item#denom)

***

### from

> **from**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:51](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L51)

The type of the coin transfer.

#### Implementation of

[`iCoinTransferItem`](/sdk/reference/interfaces/i-coin-transfer-item).[`from`](/sdk/reference/interfaces/i-coin-transfer-item#from)

***

### isProtocolFee

> **isProtocolFee**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:53](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L53)

Is protocol fee?

#### Implementation of

[`iCoinTransferItem`](/sdk/reference/interfaces/i-coin-transfer-item).[`isProtocolFee`](/sdk/reference/interfaces/i-coin-transfer-item#isprotocolfee)

***

### to

> **to**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:52](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L52)

The type of the coin transfer.

#### Implementation of

[`iCoinTransferItem`](/sdk/reference/interfaces/i-coin-transfer-item).[`to`](/sdk/reference/interfaces/i-coin-transfer-item#to)

## Methods

### clone()

> **clone**(): `CoinTransferItem`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`CoinTransferItem`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `CoinTransferItem`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:68](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L68)

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

`CoinTransferItem`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:64](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L64)

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
