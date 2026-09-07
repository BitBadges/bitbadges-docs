---
description: "T extends NumberType"
---

# Class: CollectionMetadataDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:67](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L67)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`CollectionMetadataDetails`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iCollectionMetadataDetails`](/sdk/reference/interfaces/i-collection-metadata-details)\<`T`\>

## Constructors

### Constructor

> **new CollectionMetadataDetails**\<`T`\>(`data`): `CollectionMetadataDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:77](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L77)

#### Parameters

##### data

[`iCollectionMetadataDetails`](/sdk/reference/interfaces/i-collection-metadata-details)\<`T`\>

#### Returns

`CollectionMetadataDetails`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:74](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L74)

Custom data

#### Implementation of

[`iCollectionMetadataDetails`](/sdk/reference/interfaces/i-collection-metadata-details).[`customData`](/sdk/reference/interfaces/i-collection-metadata-details#customdata)

***

### fetchedUri?

> `optional` **fetchedUri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:73](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L73)

The URI that the metadata was fetched from with placeholders replaced.

#### Implementation of

[`iCollectionMetadataDetails`](/sdk/reference/interfaces/i-collection-metadata-details).[`fetchedUri`](/sdk/reference/interfaces/i-collection-metadata-details#fetcheduri)

***

### metadata?

> `optional` **metadata?**: [`Metadata`](/sdk/reference/classes/metadata)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:71](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L71)

The metadata fetched by the URI

#### Implementation of

[`iCollectionMetadataDetails`](/sdk/reference/interfaces/i-collection-metadata-details).[`metadata`](/sdk/reference/interfaces/i-collection-metadata-details#metadata)

***

### toUploadToIpfs?

> `optional` **toUploadToIpfs?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:75](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L75)

Flag to denote if the metadata is new and should be updated. Used internally.

#### Implementation of

[`iCollectionMetadataDetails`](/sdk/reference/interfaces/i-collection-metadata-details).[`toUploadToIpfs`](/sdk/reference/interfaces/i-collection-metadata-details#touploadtoipfs)

***

### uri

> **uri**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:72](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L72)

The URI that the metadata was fetched from. This is the original on-chain URI, so may still have placeholders (i.e. {id} or {address})

#### Implementation of

[`iCollectionMetadataDetails`](/sdk/reference/interfaces/i-collection-metadata-details).[`uri`](/sdk/reference/interfaces/i-collection-metadata-details#uri)

## Methods

### clone()

> **clone**(): `CollectionMetadataDetails`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`CollectionMetadataDetails`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `CollectionMetadataDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:90](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L90)

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

`CollectionMetadataDetails`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:86](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L86)

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

> **toProto**(): `CollectionMetadata`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts:94](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/tokenMetadata.ts#L94)

#### Returns

`CollectionMetadata`
