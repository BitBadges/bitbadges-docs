---
description: "T extends NumberType"
---

# Class: SearchClaimsSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:537](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L537)

## Extends

- [`GetClaimsSuccessResponse`](/sdk/reference/classes/get-claims-success-response)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iSearchClaimsSuccessResponse`](/sdk/reference/interfaces/i-search-claims-success-response)\<`T`\>

## Constructors

### Constructor

> **new SearchClaimsSuccessResponse**\<`T`\>(`data`): `SearchClaimsSuccessResponse`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:538](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L538)

#### Parameters

##### data

[`iSearchClaimsSuccessResponse`](/sdk/reference/interfaces/i-search-claims-success-response)\<`T`\>

#### Returns

`SearchClaimsSuccessResponse`\<`T`\>

#### Overrides

[`GetClaimsSuccessResponse`](/sdk/reference/classes/get-claims-success-response).[`constructor`](/sdk/reference/classes/get-claims-success-response#constructor)

## Properties

### bookmark?

> `optional` **bookmark?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:448](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L448)

#### Implementation of

[`iSearchClaimsSuccessResponse`](/sdk/reference/interfaces/i-search-claims-success-response).[`bookmark`](/sdk/reference/interfaces/i-search-claims-success-response#bookmark)

#### Inherited from

[`GetClaimsSuccessResponse`](/sdk/reference/classes/get-claims-success-response).[`bookmark`](/sdk/reference/classes/get-claims-success-response#bookmark)

***

### claims

> **claims**: [`ClaimDetails`](/sdk/reference/classes/claim-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:447](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L447)

#### Implementation of

[`iSearchClaimsSuccessResponse`](/sdk/reference/interfaces/i-search-claims-success-response).[`claims`](/sdk/reference/interfaces/i-search-claims-success-response#claims)

#### Inherited from

[`GetClaimsSuccessResponse`](/sdk/reference/classes/get-claims-success-response).[`claims`](/sdk/reference/classes/get-claims-success-response#claims)

## Methods

### clone()

> **clone**(): [`GetClaimsSuccessResponse`](/sdk/reference/classes/get-claims-success-response)

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

[`GetClaimsSuccessResponse`](/sdk/reference/classes/get-claims-success-response)

#### Inherited from

[`GetClaimsSuccessResponse`](/sdk/reference/classes/get-claims-success-response).[`clone`](/sdk/reference/classes/get-claims-success-response#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): [`GetClaimsSuccessResponse`](/sdk/reference/classes/get-claims-success-response)\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:456](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L456)

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

[`GetClaimsSuccessResponse`](/sdk/reference/classes/get-claims-success-response)\<`U`\>

#### Inherited from

[`GetClaimsSuccessResponse`](/sdk/reference/classes/get-claims-success-response).[`convert`](/sdk/reference/classes/get-claims-success-response#convert)

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

[`GetClaimsSuccessResponse`](/sdk/reference/classes/get-claims-success-response).[`equals`](/sdk/reference/classes/get-claims-success-response#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L157)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`GetClaimsSuccessResponse`](/sdk/reference/classes/get-claims-success-response).[`getNumberFieldNames`](/sdk/reference/classes/get-claims-success-response#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`GetClaimsSuccessResponse`](/sdk/reference/classes/get-claims-success-response).[`hasNumberFields`](/sdk/reference/classes/get-claims-success-response#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`GetClaimsSuccessResponse`](/sdk/reference/classes/get-claims-success-response).[`toJson`](/sdk/reference/classes/get-claims-success-response#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`GetClaimsSuccessResponse`](/sdk/reference/classes/get-claims-success-response).[`toJsonString`](/sdk/reference/classes/get-claims-success-response#tojsonstring)
