---
description: "T extends NumberType"
---

# Class: AssetPriceHistoryDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L115)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`AssetPriceHistoryDoc`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iAssetPriceHistoryDoc`](/sdk/reference/interfaces/i-asset-price-history-doc)\<`T`\>

## Constructors

### Constructor

> **new AssetPriceHistoryDoc**\<`T`\>(`doc`): `AssetPriceHistoryDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:127](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L127)

#### Parameters

##### doc

[`iAssetPriceHistoryDoc`](/sdk/reference/interfaces/i-asset-price-history-doc)\<`T`\>

#### Returns

`AssetPriceHistoryDoc`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:117](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L117)

A unique stringified document ID

#### Implementation of

[`iAssetPriceHistoryDoc`](/sdk/reference/interfaces/i-asset-price-history-doc).[`_docId`](/sdk/reference/interfaces/i-asset-price-history-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:116](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L116)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iAssetPriceHistoryDoc`](/sdk/reference/interfaces/i-asset-price-history-doc).[`_id`](/sdk/reference/interfaces/i-asset-price-history-doc#_id)

***

### asset

> **asset**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:118](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L118)

#### Implementation of

[`iAssetPriceHistoryDoc`](/sdk/reference/interfaces/i-asset-price-history-doc).[`asset`](/sdk/reference/interfaces/i-asset-price-history-doc#asset)

***

### high?

> `optional` **high?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:123](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L123)

#### Implementation of

[`iAssetPriceHistoryDoc`](/sdk/reference/interfaces/i-asset-price-history-doc).[`high`](/sdk/reference/interfaces/i-asset-price-history-doc#high)

***

### low?

> `optional` **low?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:124](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L124)

#### Implementation of

[`iAssetPriceHistoryDoc`](/sdk/reference/interfaces/i-asset-price-history-doc).[`low`](/sdk/reference/interfaces/i-asset-price-history-doc#low)

***

### open?

> `optional` **open?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:125](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L125)

#### Implementation of

[`iAssetPriceHistoryDoc`](/sdk/reference/interfaces/i-asset-price-history-doc).[`open`](/sdk/reference/interfaces/i-asset-price-history-doc#open)

***

### price

> **price**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:119](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L119)

#### Implementation of

[`iAssetPriceHistoryDoc`](/sdk/reference/interfaces/i-asset-price-history-doc).[`price`](/sdk/reference/interfaces/i-asset-price-history-doc#price)

***

### timeframe

> **timeframe**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:122](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L122)

#### Implementation of

[`iAssetPriceHistoryDoc`](/sdk/reference/interfaces/i-asset-price-history-doc).[`timeframe`](/sdk/reference/interfaces/i-asset-price-history-doc#timeframe)

***

### timestamp

> **timestamp**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:120](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L120)

#### Implementation of

[`iAssetPriceHistoryDoc`](/sdk/reference/interfaces/i-asset-price-history-doc).[`timestamp`](/sdk/reference/interfaces/i-asset-price-history-doc#timestamp)

***

### totalLiquidity

> **totalLiquidity**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:121](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L121)

#### Implementation of

[`iAssetPriceHistoryDoc`](/sdk/reference/interfaces/i-asset-price-history-doc).[`totalLiquidity`](/sdk/reference/interfaces/i-asset-price-history-doc#totalliquidity)

## Methods

### clone()

> **clone**(): `AssetPriceHistoryDoc`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`AssetPriceHistoryDoc`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `AssetPriceHistoryDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:145](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L145)

Converts the object to a different NumberType equivalent.

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`val`) => `U`

##### options?

###### keepOriginalObject

`boolean`

#### Returns

`AssetPriceHistoryDoc`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:141](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L141)

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
