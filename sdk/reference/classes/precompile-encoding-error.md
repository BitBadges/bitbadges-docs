---
description: "Error thrown when encoding a precompile call fails"
---

# Class: PrecompileEncodingError

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:152](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L152)

Error thrown when encoding a precompile call fails

## Extends

- `Error`

## Constructors

### Constructor

> **new PrecompileEncodingError**(`functionName`, `originalError`, `messageData?`): `PrecompileEncodingError`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:153](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L153)

#### Parameters

##### functionName

`string`

##### originalError

`Error`

##### messageData?

`string`

#### Returns

`PrecompileEncodingError`

#### Overrides

`Error.constructor`

## Properties

### functionName

> `readonly` **functionName**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:154](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L154)

***

### messageData?

> `readonly` `optional` **messageData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:156](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L156)

***

### originalError

> `readonly` **originalError**: `Error`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:155](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L155)
