---
description: "T extends NumberType"
---

# Class: SiwbbAssetDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts:74](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts#L74)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`SiwbbAssetDetails`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iAssetDetails`](/sdk/reference/interfaces/i-asset-details)\<`T`\>

## Constructors

### Constructor

> **new SiwbbAssetDetails**\<`T`\>(`data`): `SiwbbAssetDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts:83](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts#L83)

#### Parameters

##### data

[`iAssetDetails`](/sdk/reference/interfaces/i-asset-details)\<`T`\>

#### Returns

`SiwbbAssetDetails`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### additionalCriteria?

> `optional` **additionalCriteria?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts:80](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts#L80)

#### Implementation of

[`iAssetDetails`](/sdk/reference/interfaces/i-asset-details).[`additionalCriteria`](/sdk/reference/interfaces/i-asset-details#additionalcriteria)

***

### assetIds

> **assetIds**: (`string` \| [`UintRange`](/sdk/reference/classes/uint-range)\<`T`\>)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts:77](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts#L77)

#### Implementation of

[`iAssetDetails`](/sdk/reference/interfaces/i-asset-details).[`assetIds`](/sdk/reference/interfaces/i-asset-details#assetids)

***

### chain

> **chain**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts:75](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts#L75)

#### Implementation of

[`iAssetDetails`](/sdk/reference/interfaces/i-asset-details).[`chain`](/sdk/reference/interfaces/i-asset-details#chain)

***

### collectionId

> **collectionId**: `string` \| `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts:76](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts#L76)

#### Implementation of

[`iAssetDetails`](/sdk/reference/interfaces/i-asset-details).[`collectionId`](/sdk/reference/interfaces/i-asset-details#collectionid)

***

### mustOwnAmounts

> **mustOwnAmounts**: [`UintRange`](/sdk/reference/classes/uint-range)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts:79](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts#L79)

#### Implementation of

[`iAssetDetails`](/sdk/reference/interfaces/i-asset-details).[`mustOwnAmounts`](/sdk/reference/interfaces/i-asset-details#mustownamounts)

***

### ownershipPartyCheck?

> `optional` **ownershipPartyCheck?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts:81](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts#L81)

#### Implementation of

[`iAssetDetails`](/sdk/reference/interfaces/i-asset-details).[`ownershipPartyCheck`](/sdk/reference/interfaces/i-asset-details#ownershippartycheck)

***

### ownershipTimes

> **ownershipTimes**: [`UintRange`](/sdk/reference/classes/uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts:78](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts#L78)

#### Implementation of

[`iAssetDetails`](/sdk/reference/interfaces/i-asset-details).[`ownershipTimes`](/sdk/reference/interfaces/i-asset-details#ownershiptimes)

## Methods

### clone()

> **clone**(): `SiwbbAssetDetails`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`SiwbbAssetDetails`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `SiwbbAssetDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts#L115)

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

`SiwbbAssetDetails`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts:99](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts#L99)

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
