---
description: "T extends NumberType"
---

# Class: GetCollectionIndexSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:99](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L99)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`GetCollectionIndexSuccessResponse`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iGetCollectionIndexSuccessResponse`](/sdk/reference/interfaces/i-get-collection-index-success-response)\<`T`\>

## Constructors

### Constructor

> **new GetCollectionIndexSuccessResponse**\<`T`\>(`data`): `GetCollectionIndexSuccessResponse`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:108](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L108)

#### Parameters

##### data

[`iGetCollectionIndexSuccessResponse`](/sdk/reference/interfaces/i-get-collection-index-success-response)\<`T`\>

#### Returns

`GetCollectionIndexSuccessResponse`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### collections

> **collections**: [`CollectionIndexDoc`](/sdk/reference/classes/collection-index-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:103](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L103)

#### Implementation of

[`iGetCollectionIndexSuccessResponse`](/sdk/reference/interfaces/i-get-collection-index-success-response).[`collections`](/sdk/reference/interfaces/i-get-collection-index-success-response#collections)

***

### facets

> **facets**: [`iCollectionIndexFacets`](/sdk/reference/interfaces/i-collection-index-facets)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:106](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L106)

#### Implementation of

[`iGetCollectionIndexSuccessResponse`](/sdk/reference/interfaces/i-get-collection-index-success-response).[`facets`](/sdk/reference/interfaces/i-get-collection-index-success-response#facets)

***

### pagination

> **pagination**: [`PaginationInfo`](/sdk/reference/interfaces/pagination-info)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:104](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L104)

#### Implementation of

[`iGetCollectionIndexSuccessResponse`](/sdk/reference/interfaces/i-get-collection-index-success-response).[`pagination`](/sdk/reference/interfaces/i-get-collection-index-success-response#pagination)

***

### totalMatching

> **totalMatching**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L105)

The total number of docs matching the filter (across all pages).

#### Implementation of

[`iGetCollectionIndexSuccessResponse`](/sdk/reference/interfaces/i-get-collection-index-success-response).[`totalMatching`](/sdk/reference/interfaces/i-get-collection-index-success-response#totalmatching)

## Methods

### clone()

> **clone**(): `GetCollectionIndexSuccessResponse`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`GetCollectionIndexSuccessResponse`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `GetCollectionIndexSuccessResponse`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts:116](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collectionIndex.ts#L116)

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

`GetCollectionIndexSuccessResponse`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L157)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

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
