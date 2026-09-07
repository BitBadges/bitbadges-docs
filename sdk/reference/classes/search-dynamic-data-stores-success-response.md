---
description: "Q extends DynamicDataHandlerType"
---

# Class: SearchDynamicDataStoresSuccessResponse\<Q, T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3076](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3076)

## Extends

- [`GetDynamicDataStoresSuccessResponse`](/sdk/reference/classes/get-dynamic-data-stores-success-response)\<`Q`, `T`\>

## Type Parameters

### Q

`Q` *extends* [`DynamicDataHandlerType`](/sdk/reference/type-aliases/dynamic-data-handler-type)

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iSearchDynamicDataStoresSuccessResponse`](/sdk/reference/interfaces/i-search-dynamic-data-stores-success-response)\<`Q`, `T`\>

## Constructors

### Constructor

> **new SearchDynamicDataStoresSuccessResponse**\<`Q`, `T`\>(`data`): `SearchDynamicDataStoresSuccessResponse`\<`Q`, `T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3080](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3080)

#### Parameters

##### data

[`iSearchDynamicDataStoresSuccessResponse`](/sdk/reference/interfaces/i-search-dynamic-data-stores-success-response)\<`Q`, `T`\>

#### Returns

`SearchDynamicDataStoresSuccessResponse`\<`Q`, `T`\>

#### Overrides

[`GetDynamicDataStoresSuccessResponse`](/sdk/reference/classes/get-dynamic-data-stores-success-response).[`constructor`](/sdk/reference/classes/get-dynamic-data-stores-success-response#constructor)

## Properties

### docs

> **docs**: ([`DynamicDataDoc`](/sdk/reference/classes/dynamic-data-doc)\<`Q`, `T`\> \| `undefined`)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3050](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3050)

#### Implementation of

[`iSearchDynamicDataStoresSuccessResponse`](/sdk/reference/interfaces/i-search-dynamic-data-stores-success-response).[`docs`](/sdk/reference/interfaces/i-search-dynamic-data-stores-success-response#docs)

#### Inherited from

[`GetDynamicDataStoresSuccessResponse`](/sdk/reference/classes/get-dynamic-data-stores-success-response).[`docs`](/sdk/reference/classes/get-dynamic-data-stores-success-response#docs)

***

### pagination

> **pagination**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3051](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3051)

#### bookmark

> **bookmark**: `string`

#### hasMore

> **hasMore**: `boolean`

#### Implementation of

[`iSearchDynamicDataStoresSuccessResponse`](/sdk/reference/interfaces/i-search-dynamic-data-stores-success-response).[`pagination`](/sdk/reference/interfaces/i-search-dynamic-data-stores-success-response#pagination)

#### Inherited from

[`GetDynamicDataStoresSuccessResponse`](/sdk/reference/classes/get-dynamic-data-stores-success-response).[`pagination`](/sdk/reference/classes/get-dynamic-data-stores-success-response#pagination)

## Methods

### clone()

> **clone**(): [`GetDynamicDataStoresSuccessResponse`](/sdk/reference/classes/get-dynamic-data-stores-success-response)

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

[`GetDynamicDataStoresSuccessResponse`](/sdk/reference/classes/get-dynamic-data-stores-success-response)

#### Inherited from

[`GetDynamicDataStoresSuccessResponse`](/sdk/reference/classes/get-dynamic-data-stores-success-response).[`clone`](/sdk/reference/classes/get-dynamic-data-stores-success-response#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): [`GetDynamicDataStoresSuccessResponse`](/sdk/reference/classes/get-dynamic-data-stores-success-response)\<`Q`, `U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3062](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3062)

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

[`GetDynamicDataStoresSuccessResponse`](/sdk/reference/classes/get-dynamic-data-stores-success-response)\<`Q`, `U`\>

#### Inherited from

[`GetDynamicDataStoresSuccessResponse`](/sdk/reference/classes/get-dynamic-data-stores-success-response).[`convert`](/sdk/reference/classes/get-dynamic-data-stores-success-response#convert)

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

[`GetDynamicDataStoresSuccessResponse`](/sdk/reference/classes/get-dynamic-data-stores-success-response).[`equals`](/sdk/reference/classes/get-dynamic-data-stores-success-response#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L157)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`GetDynamicDataStoresSuccessResponse`](/sdk/reference/classes/get-dynamic-data-stores-success-response).[`getNumberFieldNames`](/sdk/reference/classes/get-dynamic-data-stores-success-response#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`GetDynamicDataStoresSuccessResponse`](/sdk/reference/classes/get-dynamic-data-stores-success-response).[`hasNumberFields`](/sdk/reference/classes/get-dynamic-data-stores-success-response#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`GetDynamicDataStoresSuccessResponse`](/sdk/reference/classes/get-dynamic-data-stores-success-response).[`toJson`](/sdk/reference/classes/get-dynamic-data-stores-success-response#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`GetDynamicDataStoresSuccessResponse`](/sdk/reference/classes/get-dynamic-data-stores-success-response).[`toJsonString`](/sdk/reference/classes/get-dynamic-data-stores-success-response#tojsonstring)
