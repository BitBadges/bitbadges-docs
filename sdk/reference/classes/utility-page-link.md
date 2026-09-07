---
description: "T extends NumberType"
---

# Class: UtilityPageLink\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1172](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1172)

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`UtilityPageLink`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iUtilityPageLink`](/sdk/reference/interfaces/i-utility-page-link)\<`T`\>

## Constructors

### Constructor

> **new UtilityPageLink**\<`T`\>(`data`): `UtilityPageLink`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1180](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1180)

#### Parameters

##### data

[`iUtilityPageLink`](/sdk/reference/interfaces/i-utility-page-link)\<`T`\>

#### Returns

`UtilityPageLink`\<`T`\>

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### applicationId?

> `optional` **applicationId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1175](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1175)

The application ID to link to

#### Implementation of

[`iUtilityPageLink`](/sdk/reference/interfaces/i-utility-page-link).[`applicationId`](/sdk/reference/interfaces/i-utility-page-link#applicationid)

***

### claimId?

> `optional` **claimId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1174](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1174)

The claim ID to link to

#### Implementation of

[`iUtilityPageLink`](/sdk/reference/interfaces/i-utility-page-link).[`claimId`](/sdk/reference/interfaces/i-utility-page-link#claimid)

***

### collectionId?

> `optional` **collectionId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1176](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1176)

The collection ID to link to

#### Implementation of

[`iUtilityPageLink`](/sdk/reference/interfaces/i-utility-page-link).[`collectionId`](/sdk/reference/interfaces/i-utility-page-link#collectionid)

***

### mapId?

> `optional` **mapId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1177](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1177)

The map ID to link to

#### Implementation of

[`iUtilityPageLink`](/sdk/reference/interfaces/i-utility-page-link).[`mapId`](/sdk/reference/interfaces/i-utility-page-link#mapid)

***

### metadata?

> `optional` **metadata?**: [`iMetadata`](/sdk/reference/interfaces/i-metadata)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1178](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1178)

Metadata for the link. Only applicable if the link is to a non-BitBadges entity. In other words, not tied to a specific claim, application, collection, etc.

#### Implementation of

[`iUtilityPageLink`](/sdk/reference/interfaces/i-utility-page-link).[`metadata`](/sdk/reference/interfaces/i-utility-page-link#metadata)

***

### url

> **url**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1173](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1173)

The URL of the link

#### Implementation of

[`iUtilityPageLink`](/sdk/reference/interfaces/i-utility-page-link).[`url`](/sdk/reference/interfaces/i-utility-page-link#url)

## Methods

### clone()

> **clone**(): `UtilityPageLink`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`UtilityPageLink`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`clone`](/sdk/reference/classes/custom-type-class#clone)

***

### ~~convert()~~

> **convert**\<`U`\>(`convertFunction`, `options?`): `UtilityPageLink`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1194](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1194)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`UtilityPageLink`\<`U`\>

#### Deprecated

This function is unnecessary as this field has no numeric types.
Please use the `.clone()` method instead.

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`convert`](/sdk/reference/classes/custom-type-class#convert)

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

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`equals`](/sdk/reference/classes/custom-type-class#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1190](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1190)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`getNumberFieldNames`](/sdk/reference/classes/custom-type-class#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L115)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`hasNumberFields`](/sdk/reference/classes/custom-type-class#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L93)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`toJson`](/sdk/reference/classes/custom-type-class#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L97)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`toJsonString`](/sdk/reference/classes/custom-type-class#tojsonstring)
