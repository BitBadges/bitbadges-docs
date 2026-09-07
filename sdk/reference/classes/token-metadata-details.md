---
description: "T extends NumberType"
---

# Class: TokenMetadataDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:103](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L103)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`TokenMetadataDetails`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iTokenMetadataDetails`](/sdk/reference/interfaces/i-token-metadata-details)\<`T`\>

## Constructors

### Constructor

> **new TokenMetadataDetails**\<`T`\>(`data`): `TokenMetadataDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:111](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L111)

#### Parameters

##### data

[`iTokenMetadataDetails`](/sdk/reference/interfaces/i-token-metadata-details)\<`T`\>

#### Returns

`TokenMetadataDetails`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:108](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L108)

Custom data

#### Implementation of

[`iTokenMetadataDetails`](/sdk/reference/interfaces/i-token-metadata-details).[`customData`](/sdk/reference/interfaces/i-token-metadata-details#customdata)

***

### fetchedUri?

> `optional` **fetchedUri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:107](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L107)

The URI that the metadata was fetched from with placeholders replaced.

#### Implementation of

[`iTokenMetadataDetails`](/sdk/reference/interfaces/i-token-metadata-details).[`fetchedUri`](/sdk/reference/interfaces/i-token-metadata-details#fetcheduri)

***

### metadata?

> `optional` **metadata?**: [`Metadata`](/sdk/reference/classes/metadata)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L105)

The metadata fetched by the URI

#### Implementation of

[`iTokenMetadataDetails`](/sdk/reference/interfaces/i-token-metadata-details).[`metadata`](/sdk/reference/interfaces/i-token-metadata-details#metadata)

***

### tokenIds

> **tokenIds**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:104](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L104)

The token IDs that correspond to the metadata

#### Implementation of

[`iTokenMetadataDetails`](/sdk/reference/interfaces/i-token-metadata-details).[`tokenIds`](/sdk/reference/interfaces/i-token-metadata-details#tokenids)

***

### toUploadToIpfs?

> `optional` **toUploadToIpfs?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:109](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L109)

Flag to denote if the metadata is new and should be updated. Used internally.

#### Implementation of

[`iTokenMetadataDetails`](/sdk/reference/interfaces/i-token-metadata-details).[`toUploadToIpfs`](/sdk/reference/interfaces/i-token-metadata-details#touploadtoipfs)

***

### uri

> **uri**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:106](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L106)

The URI that the metadata was fetched from. This is the original on-chain URI, so may still have placeholders (i.e. {id} or {address})

#### Implementation of

[`iTokenMetadataDetails`](/sdk/reference/interfaces/i-token-metadata-details).[`uri`](/sdk/reference/interfaces/i-token-metadata-details#uri)

## Methods

### clone()

> **clone**(): `TokenMetadataDetails`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`TokenMetadataDetails`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `TokenMetadataDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:125](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L125)

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

`TokenMetadataDetails`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:121](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L121)

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

> **toProto**(): `TokenMetadata`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:337](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L337)

#### Returns

`TokenMetadata`

***

### batchUpdateTokenMetadata()

> `static` **batchUpdateTokenMetadata**\<`T`\>(`currTokenMetadata`, `newTokenMetadataDetailsArr`): `TokenMetadataDetails`\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:166](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L166)

Batch update the metadataArr with the given metadata and tokenIds fetched from the given

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### currTokenMetadata

`TokenMetadataDetails`\<`T`\>[]

##### newTokenMetadataDetailsArr

`TokenMetadataDetails`\<`T`\>[]

#### Returns

`TokenMetadataDetails`\<`T`\>[]

***

### getMetadataDetailsForTokenId()

> `static` **getMetadataDetailsForTokenId**\<`T`\>(`tokenId`, `metadataArr`): `TokenMetadataDetails`\<`T`\> \| `undefined`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:253](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L253)

Returns the { metadata, uri, tokenIds, customData } metadata object from the TokenMetadataDetails\<bigint>[] for a specific tokenId.

If the tokenId does not exist in the TokenMetadataDetails\<bigint>[], returns undefined.

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### tokenId

`T`

##### metadataArr

`TokenMetadataDetails`\<`T`\>[]

#### Returns

`TokenMetadataDetails`\<`T`\> \| `undefined`

***

### getMetadataForTokenId()

> `static` **getMetadataForTokenId**\<`T`\>(`tokenId`, `metadataArr`): [`Metadata`](/sdk/reference/classes/metadata)\<`T`\> \| `undefined`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:270](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L270)

Returns the metadata from the TokenMetadataDetails\<bigint>[] for a specific tokenId.

If the tokenId does not exist in the TokenMetadataDetails\<bigint>[], returns undefined.

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### tokenId

`T`

##### metadataArr

`TokenMetadataDetails`\<`T`\>[]

#### Returns

[`Metadata`](/sdk/reference/classes/metadata)\<`T`\> \| `undefined`

***

### removeTokenMetadata()

> `static` **removeTokenMetadata**\<`T`\>(`currTokenMetadata`, `tokenIds`): `TokenMetadataDetails`\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:134](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L134)

Removes the metadata from the TokenMetadataDetails\<bigint>[] for specific token IDs.

Note that this function does not mutate the metadataArr, but instead returns a new one.

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### currTokenMetadata

`TokenMetadataDetails`\<`T`\>[]

##### tokenIds

[`UintRange`](/sdk/reference/classes/uint-range)\<`T`\>[]

#### Returns

`TokenMetadataDetails`\<`T`\>[]

***

### setMetadataPropertyForSpecificIds()

> `static` **setMetadataPropertyForSpecificIds**\<`T`\>(`metadataArr`, `tokenIds`, `key`, `value`): `TokenMetadataDetails`\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:284](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L284)

For each tokenId in tokenIds, populates the metadata array with the given key, value JSON property pair.

If you want to update the entire metadata (not just a specific key value pair), use updateTokenMetadata instead.

This is typically used when customizing or creating a token.

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### metadataArr

`TokenMetadataDetails`\<`T`\>[]

##### tokenIds

[`UintRange`](/sdk/reference/classes/uint-range)\<`T`\>[]

##### key

`string`

##### value

`any`

#### Returns

`TokenMetadataDetails`\<`T`\>[]

#### Example

```ts
Use this function to set the "name" property of all tokens to "test" via setMetadataPropertyForAll(metadataArr, tokenIds, uri, "name", "test")
```

***

### updateTokenMetadata()

> `static` **updateTokenMetadata**\<`T`\>(`currTokenMetadata`, `newTokenMetadataDetails`): `TokenMetadataDetails`\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:156](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L156)

Update the metadataArr with the given metadata and tokenIds fetched from the given uri.

Note that this function does not mutate the metadataArr, but instead returns a new one.

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### currTokenMetadata

`TokenMetadataDetails`\<`T`\>[]

##### newTokenMetadataDetails

`TokenMetadataDetails`\<`T`\>

#### Returns

`TokenMetadataDetails`\<`T`\>[]
