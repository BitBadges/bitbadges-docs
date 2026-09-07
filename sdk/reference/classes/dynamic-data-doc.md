---
description: "Q extends DynamicDataHandlerType"
---

# Class: DynamicDataDoc\<Q, T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1829](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1829)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`DynamicDataDoc`\<`Q`, `T`\>\>

## Type Parameters

### Q

`Q` *extends* [`DynamicDataHandlerType`](/sdk/reference/type-aliases/dynamic-data-handler-type)

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iDynamicDataDoc`](/sdk/reference/interfaces/i-dynamic-data-doc)\<`Q`, `T`\>

## Constructors

### Constructor

> **new DynamicDataDoc**\<`Q`, `T`\>(`data`): `DynamicDataDoc`\<`Q`, `T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1846](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1846)

#### Parameters

##### data

[`iDynamicDataDoc`](/sdk/reference/interfaces/i-dynamic-data-doc)\<`Q`, `T`\>

#### Returns

`DynamicDataDoc`\<`Q`, `T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1833](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1833)

A unique stringified document ID

#### Implementation of

[`iDynamicDataDoc`](/sdk/reference/interfaces/i-dynamic-data-doc).[`_docId`](/sdk/reference/interfaces/i-dynamic-data-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1834](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1834)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iDynamicDataDoc`](/sdk/reference/interfaces/i-dynamic-data-doc).[`_id`](/sdk/reference/interfaces/i-dynamic-data-doc#_id)

***

### createdAt?

> `optional` **createdAt?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1843](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1843)

The time the dynamic data store was created

#### Implementation of

[`iDynamicDataDoc`](/sdk/reference/interfaces/i-dynamic-data-doc).[`createdAt`](/sdk/reference/interfaces/i-dynamic-data-doc#createdat)

***

### createdBy

> **createdBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1840](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1840)

The creator of the dynamic data store

#### Implementation of

[`iDynamicDataDoc`](/sdk/reference/interfaces/i-dynamic-data-doc).[`createdBy`](/sdk/reference/interfaces/i-dynamic-data-doc#createdby)

***

### data

> **data**: [`DynamicDataHandlerData`](/sdk/reference/type-aliases/dynamic-data-handler-data)\<`Q`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1839](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1839)

The data itself.

#### Implementation of

[`iDynamicDataDoc`](/sdk/reference/interfaces/i-dynamic-data-doc).[`data`](/sdk/reference/interfaces/i-dynamic-data-doc#data)

***

### dataSecret

> **dataSecret**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1838](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1838)

The data secret. Used in cases where you are not signed in as creator. This authenticates the request. Not applicable to public stores

#### Implementation of

[`iDynamicDataDoc`](/sdk/reference/interfaces/i-dynamic-data-doc).[`dataSecret`](/sdk/reference/interfaces/i-dynamic-data-doc#datasecret)

***

### dynamicDataId

> **dynamicDataId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1837](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1837)

The dynamic data ID. The ID of the store.

#### Implementation of

[`iDynamicDataDoc`](/sdk/reference/interfaces/i-dynamic-data-doc).[`dynamicDataId`](/sdk/reference/interfaces/i-dynamic-data-doc#dynamicdataid)

***

### handlerId

> **handlerId**: `Q`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1835](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1835)

The handler ID. Can also be thought of as the type of dynamic data ("addresses", "email", ...)

#### Implementation of

[`iDynamicDataDoc`](/sdk/reference/interfaces/i-dynamic-data-doc).[`handlerId`](/sdk/reference/interfaces/i-dynamic-data-doc#handlerid)

***

### label

> **label**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1836](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1836)

The label of the data store

#### Implementation of

[`iDynamicDataDoc`](/sdk/reference/interfaces/i-dynamic-data-doc).[`label`](/sdk/reference/interfaces/i-dynamic-data-doc#label)

***

### lastUpdated?

> `optional` **lastUpdated?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1844](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1844)

The time the dynamic data store was last updated

#### Implementation of

[`iDynamicDataDoc`](/sdk/reference/interfaces/i-dynamic-data-doc).[`lastUpdated`](/sdk/reference/interfaces/i-dynamic-data-doc#lastupdated)

***

### managedBy

> **managedBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1841](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1841)

The manager of the dynamic data store

#### Implementation of

[`iDynamicDataDoc`](/sdk/reference/interfaces/i-dynamic-data-doc).[`managedBy`](/sdk/reference/interfaces/i-dynamic-data-doc#managedby)

***

### publicUseInClaims?

> `optional` **publicUseInClaims?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1842](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1842)

Whether the dynamic data store is public. If true, the data can be accessed without authentication.

#### Implementation of

[`iDynamicDataDoc`](/sdk/reference/interfaces/i-dynamic-data-doc).[`publicUseInClaims`](/sdk/reference/interfaces/i-dynamic-data-doc#publicuseinclaims)

## Methods

### clone()

> **clone**(): `DynamicDataDoc`\<`Q`, `T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1870](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1870)

Deep copies the object and returns a new instance.

#### Returns

`DynamicDataDoc`\<`Q`, `T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `DynamicDataDoc`\<`Q`, `U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1866](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1866)

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

`DynamicDataDoc`\<`Q`, `U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1862](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1862)

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
