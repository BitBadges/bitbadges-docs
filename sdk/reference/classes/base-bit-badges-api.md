---
description: "Base class for the BitBadges API. It provides a base axios instance and methods for handling API errors."
---

# Class: BaseBitBadgesApi\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:58](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L58)

Base class for the BitBadges API. It provides a base axios instance and methods for handling API errors.

## Extended by

- [`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Constructors

### Constructor

> **new BaseBitBadgesApi**\<`T`\>(`apiDetails`): `BaseBitBadgesApi`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:66](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L66)

#### Parameters

##### apiDetails

[`iBitBadgesApi`](/sdk/reference/interfaces/i-bit-badges-api)\<`T`\>

#### Returns

`BaseBitBadgesApi`\<`T`\>

## Properties

### accessToken

> **accessToken**: `string` = `''`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:63](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L63)

***

### apiKey

> **apiKey**: `string` \| `undefined`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:62](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L62)

***

### appendedHeaders

> **appendedHeaders**: `Record`\<`string`, `string`\> = `{}`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:64](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L64)

***

### axios

> **axios**: `AxiosInstance`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:59](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L59)

***

### BACKEND\_URL

> **BACKEND\_URL**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:60](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L60)

***

### ConvertFunction

> **ConvertFunction**: (`num`) => `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:61](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L61)

#### Parameters

##### num

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`T`

## Methods

### assertPositiveCollectionId()

> **assertPositiveCollectionId**(`collectionId`): `void`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:118](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L118)

#### Parameters

##### collectionId

`string`

#### Returns

`void`

***

### assertPositiveInteger()

> **assertPositiveInteger**(`num`): `void`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:106](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L106)

#### Parameters

##### num

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`void`

***

### handleApiError()

> **handleApiError**(`error`): `Promise`\<`void`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:95](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L95)

#### Parameters

##### error

`any`

#### Returns

`Promise`\<`void`\>

***

### setAccessToken()

> **setAccessToken**(`token`): `void`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:85](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L85)

#### Parameters

##### token

`string`

#### Returns

`void`

***

### unsetAccessToken()

> **unsetAccessToken**(): `void`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:90](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L90)

#### Returns

`void`
