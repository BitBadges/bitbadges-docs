---
description: "DynamicStoreDoc represents an on-chain dynamic store document from the API indexer."
---

# Class: DynamicStoreDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2223](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2223)

DynamicStoreDoc represents an on-chain dynamic store document from the API indexer.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`DynamicStoreDoc`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc)\<`T`\>

## Constructors

### Constructor

> **new DynamicStoreDoc**\<`T`\>(`doc`): `DynamicStoreDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2233](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2233)

#### Parameters

##### doc

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc)\<`T`\>

#### Returns

`DynamicStoreDoc`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2225](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2225)

A unique stringified document ID

#### Implementation of

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`_docId`](/sdk/reference/interfaces/i-dynamic-store-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2224](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2224)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`_id`](/sdk/reference/interfaces/i-dynamic-store-doc#_id)

***

### createdBy

> **createdBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2227](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2227)

#### Implementation of

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`createdBy`](/sdk/reference/interfaces/i-dynamic-store-doc#createdby)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2231](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2231)

#### Implementation of

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`customData`](/sdk/reference/interfaces/i-dynamic-store-doc#customdata)

***

### defaultValue

> **defaultValue**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2228](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2228)

#### Implementation of

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`defaultValue`](/sdk/reference/interfaces/i-dynamic-store-doc#defaultvalue)

***

### globalEnabled

> **globalEnabled**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2229](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2229)

#### Implementation of

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`globalEnabled`](/sdk/reference/interfaces/i-dynamic-store-doc#globalenabled)

***

### storeId

> **storeId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2226](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2226)

#### Implementation of

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`storeId`](/sdk/reference/interfaces/i-dynamic-store-doc#storeid)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2230](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2230)

#### Implementation of

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`uri`](/sdk/reference/interfaces/i-dynamic-store-doc#uri)

## Methods

### clone()

> **clone**(): `DynamicStoreDoc`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`DynamicStoreDoc`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `DynamicStoreDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2249](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2249)

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

`DynamicStoreDoc`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2245](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2245)

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
