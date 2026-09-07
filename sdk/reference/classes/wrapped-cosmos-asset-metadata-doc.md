---
description: "T extends NumberType"
---

# Class: WrappedCosmosAssetMetadataDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:496](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L496)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`WrappedCosmosAssetMetadataDoc`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iWrappedCosmosAssetMetadataDoc`](/sdk/reference/interfaces/i-wrapped-cosmos-asset-metadata-doc)\<`T`\>

## Constructors

### Constructor

> **new WrappedCosmosAssetMetadataDoc**\<`T`\>(`doc`): `WrappedCosmosAssetMetadataDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:508](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L508)

#### Parameters

##### doc

[`iWrappedCosmosAssetMetadataDoc`](/sdk/reference/interfaces/i-wrapped-cosmos-asset-metadata-doc)\<`T`\>

#### Returns

`WrappedCosmosAssetMetadataDoc`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:501](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L501)

A unique stringified document ID

#### Implementation of

[`iWrappedCosmosAssetMetadataDoc`](/sdk/reference/interfaces/i-wrapped-cosmos-asset-metadata-doc).[`_docId`](/sdk/reference/interfaces/i-wrapped-cosmos-asset-metadata-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:500](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L500)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iWrappedCosmosAssetMetadataDoc`](/sdk/reference/interfaces/i-wrapped-cosmos-asset-metadata-doc).[`_id`](/sdk/reference/interfaces/i-wrapped-cosmos-asset-metadata-doc#_id)

***

### baseDenom

> **baseDenom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:503](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L503)

#### Implementation of

[`iWrappedCosmosAssetMetadataDoc`](/sdk/reference/interfaces/i-wrapped-cosmos-asset-metadata-doc).[`baseDenom`](/sdk/reference/interfaces/i-wrapped-cosmos-asset-metadata-doc#basedenom)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:502](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L502)

#### Implementation of

[`iWrappedCosmosAssetMetadataDoc`](/sdk/reference/interfaces/i-wrapped-cosmos-asset-metadata-doc).[`collectionId`](/sdk/reference/interfaces/i-wrapped-cosmos-asset-metadata-doc#collectionid)

***

### decimals

> **decimals**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:505](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L505)

#### Implementation of

[`iWrappedCosmosAssetMetadataDoc`](/sdk/reference/interfaces/i-wrapped-cosmos-asset-metadata-doc).[`decimals`](/sdk/reference/interfaces/i-wrapped-cosmos-asset-metadata-doc#decimals)

***

### metadata

> **metadata**: [`Metadata`](/sdk/reference/classes/metadata)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:506](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L506)

#### Implementation of

[`iWrappedCosmosAssetMetadataDoc`](/sdk/reference/interfaces/i-wrapped-cosmos-asset-metadata-doc).[`metadata`](/sdk/reference/interfaces/i-wrapped-cosmos-asset-metadata-doc#metadata)

***

### symbol

> **symbol**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:504](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L504)

#### Implementation of

[`iWrappedCosmosAssetMetadataDoc`](/sdk/reference/interfaces/i-wrapped-cosmos-asset-metadata-doc).[`symbol`](/sdk/reference/interfaces/i-wrapped-cosmos-asset-metadata-doc#symbol)

## Methods

### clone()

> **clone**(): `WrappedCosmosAssetMetadataDoc`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`WrappedCosmosAssetMetadataDoc`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `WrappedCosmosAssetMetadataDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:523](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L523)

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

`WrappedCosmosAssetMetadataDoc`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:519](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L519)

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
