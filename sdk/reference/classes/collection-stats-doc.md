---
description: "T extends NumberType"
---

# Class: CollectionStatsDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L143)

## Extends

- [`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iCollectionStatsDoc`](/sdk/reference/interfaces/i-collection-stats-doc)\<`T`\>

## Constructors

### Constructor

> **new CollectionStatsDoc**\<`T`\>(`data`): `CollectionStatsDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:150](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L150)

#### Parameters

##### data

[`iCollectionStatsDoc`](/sdk/reference/interfaces/i-collection-stats-doc)\<`T`\>

#### Returns

`CollectionStatsDoc`\<`T`\>

#### Overrides

[`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc).[`constructor`](/sdk/reference/classes/base-stats-doc#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:103](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L103)

A unique stringified document ID

#### Implementation of

[`iCollectionStatsDoc`](/sdk/reference/interfaces/i-collection-stats-doc).[`_docId`](/sdk/reference/interfaces/i-collection-stats-doc#_docid)

#### Inherited from

[`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc).[`_docId`](/sdk/reference/classes/base-stats-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:104](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L104)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iCollectionStatsDoc`](/sdk/reference/interfaces/i-collection-stats-doc).[`_id`](/sdk/reference/interfaces/i-collection-stats-doc#_id)

#### Inherited from

[`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc).[`_id`](/sdk/reference/classes/base-stats-doc#_id)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:144](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L144)

The collection ID

#### Implementation of

[`iCollectionStatsDoc`](/sdk/reference/interfaces/i-collection-stats-doc).[`collectionId`](/sdk/reference/interfaces/i-collection-stats-doc#collectionid)

***

### dailyVolume

> **dailyVolume**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:108](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L108)

The daily volume of the collection

#### Implementation of

[`iCollectionStatsDoc`](/sdk/reference/interfaces/i-collection-stats-doc).[`dailyVolume`](/sdk/reference/interfaces/i-collection-stats-doc#dailyvolume)

#### Inherited from

[`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc).[`dailyVolume`](/sdk/reference/classes/base-stats-doc#dailyvolume)

***

### floorPriceHistory?

> `optional` **floorPriceHistory?**: [`FloorPriceHistory`](/sdk/reference/classes/floor-price-history)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:147](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L147)

Floor price history

#### Implementation of

[`iCollectionStatsDoc`](/sdk/reference/interfaces/i-collection-stats-doc).[`floorPriceHistory`](/sdk/reference/interfaces/i-collection-stats-doc#floorpricehistory)

***

### floorPrices?

> `optional` **floorPrices?**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:145](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L145)

Floor price of the collection

#### Implementation of

[`iCollectionStatsDoc`](/sdk/reference/interfaces/i-collection-stats-doc).[`floorPrices`](/sdk/reference/interfaces/i-collection-stats-doc#floorprices)

***

### lastUpdatedAt

> **lastUpdatedAt**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:116](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L116)

Last set timestamp

#### Implementation of

[`iCollectionStatsDoc`](/sdk/reference/interfaces/i-collection-stats-doc).[`lastUpdatedAt`](/sdk/reference/interfaces/i-collection-stats-doc#lastupdatedat)

#### Inherited from

[`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc).[`lastUpdatedAt`](/sdk/reference/classes/base-stats-doc#lastupdatedat)

***

### monthlyVolume

> **monthlyVolume**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:112](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L112)

The monthly volume of the collection

#### Implementation of

[`iCollectionStatsDoc`](/sdk/reference/interfaces/i-collection-stats-doc).[`monthlyVolume`](/sdk/reference/interfaces/i-collection-stats-doc#monthlyvolume)

#### Inherited from

[`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc).[`monthlyVolume`](/sdk/reference/classes/base-stats-doc#monthlyvolume)

***

### overallVolume

> **overallVolume**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:106](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L106)

The overall volume of the collection

#### Implementation of

[`iCollectionStatsDoc`](/sdk/reference/interfaces/i-collection-stats-doc).[`overallVolume`](/sdk/reference/interfaces/i-collection-stats-doc#overallvolume)

#### Inherited from

[`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc).[`overallVolume`](/sdk/reference/classes/base-stats-doc#overallvolume)

***

### payoutRewards?

> `optional` **payoutRewards?**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:148](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L148)

The payout reward

#### Implementation of

[`iCollectionStatsDoc`](/sdk/reference/interfaces/i-collection-stats-doc).[`payoutRewards`](/sdk/reference/interfaces/i-collection-stats-doc#payoutrewards)

***

### uniqueOwners

> **uniqueOwners**: [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:146](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L146)

Number of unique owners by time

#### Implementation of

[`iCollectionStatsDoc`](/sdk/reference/interfaces/i-collection-stats-doc).[`uniqueOwners`](/sdk/reference/interfaces/i-collection-stats-doc#uniqueowners)

***

### weeklyVolume

> **weeklyVolume**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:110](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L110)

The weekly volume of the collection

#### Implementation of

[`iCollectionStatsDoc`](/sdk/reference/interfaces/i-collection-stats-doc).[`weeklyVolume`](/sdk/reference/interfaces/i-collection-stats-doc#weeklyvolume)

#### Inherited from

[`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc).[`weeklyVolume`](/sdk/reference/classes/base-stats-doc#weeklyvolume)

***

### yearlyVolume

> **yearlyVolume**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:114](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L114)

The yearly volume of the collection

#### Implementation of

[`iCollectionStatsDoc`](/sdk/reference/interfaces/i-collection-stats-doc).[`yearlyVolume`](/sdk/reference/interfaces/i-collection-stats-doc#yearlyvolume)

#### Inherited from

[`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc).[`yearlyVolume`](/sdk/reference/classes/base-stats-doc#yearlyvolume)

## Methods

### clone()

> **clone**(): [`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc)

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

[`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc)

#### Inherited from

[`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc).[`clone`](/sdk/reference/classes/base-stats-doc#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `CollectionStatsDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:165](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L165)

Converts the object to a different NumberType equivalent.

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`val`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`CollectionStatsDoc`\<`U`\>

#### Overrides

[`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc).[`convert`](/sdk/reference/classes/base-stats-doc#convert)

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

[`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc).[`equals`](/sdk/reference/classes/base-stats-doc#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L161)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Overrides

[`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc).[`getNumberFieldNames`](/sdk/reference/classes/base-stats-doc#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc).[`hasNumberFields`](/sdk/reference/classes/base-stats-doc#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc).[`toJson`](/sdk/reference/classes/base-stats-doc#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc).[`toJsonString`](/sdk/reference/classes/base-stats-doc#tojsonstring)
