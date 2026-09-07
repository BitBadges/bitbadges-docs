---
description: "T extends NumberType"
---

# Class: GetOnChainDynamicStoreValueSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4166](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4166)

## Extends

- [`DynamicStoreValueDoc`](/sdk/reference/classes/dynamic-store-value-doc)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iGetOnChainDynamicStoreValueSuccessResponse`](/sdk/reference/interfaces/i-get-on-chain-dynamic-store-value-success-response)\<`T`\>

## Constructors

### Constructor

> **new GetOnChainDynamicStoreValueSuccessResponse**\<`T`\>(`data`): `GetOnChainDynamicStoreValueSuccessResponse`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:4170](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L4170)

#### Parameters

##### data

[`iGetOnChainDynamicStoreValueSuccessResponse`](/sdk/reference/interfaces/i-get-on-chain-dynamic-store-value-success-response)\<`T`\>

#### Returns

`GetOnChainDynamicStoreValueSuccessResponse`\<`T`\>

#### Overrides

[`DynamicStoreValueDoc`](/sdk/reference/classes/dynamic-store-value-doc).[`constructor`](/sdk/reference/classes/dynamic-store-value-doc#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2300](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2300)

A unique stringified document ID

#### Implementation of

[`iGetOnChainDynamicStoreValueSuccessResponse`](/sdk/reference/interfaces/i-get-on-chain-dynamic-store-value-success-response).[`_docId`](/sdk/reference/interfaces/i-get-on-chain-dynamic-store-value-success-response#_docid)

#### Inherited from

[`DynamicStoreValueDoc`](/sdk/reference/classes/dynamic-store-value-doc).[`_docId`](/sdk/reference/classes/dynamic-store-value-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2299](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2299)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iGetOnChainDynamicStoreValueSuccessResponse`](/sdk/reference/interfaces/i-get-on-chain-dynamic-store-value-success-response).[`_id`](/sdk/reference/interfaces/i-get-on-chain-dynamic-store-value-success-response#_id)

#### Inherited from

[`DynamicStoreValueDoc`](/sdk/reference/classes/dynamic-store-value-doc).[`_id`](/sdk/reference/classes/dynamic-store-value-doc#_id)

***

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2302](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2302)

#### Implementation of

[`iGetOnChainDynamicStoreValueSuccessResponse`](/sdk/reference/interfaces/i-get-on-chain-dynamic-store-value-success-response).[`address`](/sdk/reference/interfaces/i-get-on-chain-dynamic-store-value-success-response#address)

#### Inherited from

[`DynamicStoreValueDoc`](/sdk/reference/classes/dynamic-store-value-doc).[`address`](/sdk/reference/classes/dynamic-store-value-doc#address)

***

### storeId

> **storeId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2301](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2301)

#### Implementation of

[`iGetOnChainDynamicStoreValueSuccessResponse`](/sdk/reference/interfaces/i-get-on-chain-dynamic-store-value-success-response).[`storeId`](/sdk/reference/interfaces/i-get-on-chain-dynamic-store-value-success-response#storeid)

#### Inherited from

[`DynamicStoreValueDoc`](/sdk/reference/classes/dynamic-store-value-doc).[`storeId`](/sdk/reference/classes/dynamic-store-value-doc#storeid)

***

### value

> **value**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2303](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2303)

#### Implementation of

[`iGetOnChainDynamicStoreValueSuccessResponse`](/sdk/reference/interfaces/i-get-on-chain-dynamic-store-value-success-response).[`value`](/sdk/reference/interfaces/i-get-on-chain-dynamic-store-value-success-response#value)

#### Inherited from

[`DynamicStoreValueDoc`](/sdk/reference/classes/dynamic-store-value-doc).[`value`](/sdk/reference/classes/dynamic-store-value-doc#value)

## Methods

### clone()

> **clone**(): [`DynamicStoreValueDoc`](/sdk/reference/classes/dynamic-store-value-doc)

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

[`DynamicStoreValueDoc`](/sdk/reference/classes/dynamic-store-value-doc)

#### Inherited from

[`DynamicStoreValueDoc`](/sdk/reference/classes/dynamic-store-value-doc).[`clone`](/sdk/reference/classes/dynamic-store-value-doc#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): [`DynamicStoreValueDoc`](/sdk/reference/classes/dynamic-store-value-doc)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2318](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2318)

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

[`DynamicStoreValueDoc`](/sdk/reference/classes/dynamic-store-value-doc)\<`U`\>

#### Inherited from

[`DynamicStoreValueDoc`](/sdk/reference/classes/dynamic-store-value-doc).[`convert`](/sdk/reference/classes/dynamic-store-value-doc#convert)

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

[`DynamicStoreValueDoc`](/sdk/reference/classes/dynamic-store-value-doc).[`equals`](/sdk/reference/classes/dynamic-store-value-doc#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:2314](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L2314)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`DynamicStoreValueDoc`](/sdk/reference/classes/dynamic-store-value-doc).[`getNumberFieldNames`](/sdk/reference/classes/dynamic-store-value-doc#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`DynamicStoreValueDoc`](/sdk/reference/classes/dynamic-store-value-doc).[`hasNumberFields`](/sdk/reference/classes/dynamic-store-value-doc#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`DynamicStoreValueDoc`](/sdk/reference/classes/dynamic-store-value-doc).[`toJson`](/sdk/reference/classes/dynamic-store-value-doc#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`DynamicStoreValueDoc`](/sdk/reference/classes/dynamic-store-value-doc).[`toJsonString`](/sdk/reference/classes/dynamic-store-value-doc#tojsonstring)
