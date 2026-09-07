---
description: "T extends NumberType"
---

# Class: SearchUtilityPagesSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3570](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3570)

## Extends

- [`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iSearchUtilityPagesSuccessResponse`](/sdk/reference/interfaces/i-search-utility-pages-success-response)\<`T`\>

## Constructors

### Constructor

> **new SearchUtilityPagesSuccessResponse**\<`T`\>(`data`): `SearchUtilityPagesSuccessResponse`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3574](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3574)

#### Parameters

##### data

[`iSearchUtilityPagesSuccessResponse`](/sdk/reference/interfaces/i-search-utility-pages-success-response)\<`T`\>

#### Returns

`SearchUtilityPagesSuccessResponse`\<`T`\>

#### Overrides

[`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response).[`constructor`](/sdk/reference/classes/get-utility-pages-success-response#constructor)

## Properties

### docs

> **docs**: ([`UtilityPageDoc`](/sdk/reference/classes/utility-page-doc)\<`T`\> \| `undefined`)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3545](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3545)

#### Implementation of

[`iSearchUtilityPagesSuccessResponse`](/sdk/reference/interfaces/i-search-utility-pages-success-response).[`docs`](/sdk/reference/interfaces/i-search-utility-pages-success-response#docs)

#### Inherited from

[`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response).[`docs`](/sdk/reference/classes/get-utility-pages-success-response#docs)

***

### pagination

> **pagination**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3546](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3546)

#### bookmark

> **bookmark**: `string`

#### hasMore

> **hasMore**: `boolean`

#### Implementation of

[`iSearchUtilityPagesSuccessResponse`](/sdk/reference/interfaces/i-search-utility-pages-success-response).[`pagination`](/sdk/reference/interfaces/i-search-utility-pages-success-response#pagination)

#### Inherited from

[`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response).[`pagination`](/sdk/reference/classes/get-utility-pages-success-response#pagination)

## Methods

### clone()

> **clone**(): [`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response)

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

[`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response)

#### Inherited from

[`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response).[`clone`](/sdk/reference/classes/get-utility-pages-success-response#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): [`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3557](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3557)

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

[`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response)\<`U`\>

#### Inherited from

[`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response).[`convert`](/sdk/reference/classes/get-utility-pages-success-response#convert)

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

[`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response).[`equals`](/sdk/reference/classes/get-utility-pages-success-response#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L157)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response).[`getNumberFieldNames`](/sdk/reference/classes/get-utility-pages-success-response#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response).[`hasNumberFields`](/sdk/reference/classes/get-utility-pages-success-response#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response).[`toJson`](/sdk/reference/classes/get-utility-pages-success-response#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response).[`toJsonString`](/sdk/reference/classes/get-utility-pages-success-response#tojsonstring)
