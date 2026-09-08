---
description: "Error thrown when encoding a precompile call fails"
---

# Class: PrecompileEncodingError

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:149](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L149)

Error thrown when encoding a precompile call fails

## Extends

- `Error`

## Constructors

### Constructor

> **new PrecompileEncodingError**(`functionName`, `originalError`, `messageData?`): `PrecompileEncodingError`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:150](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L150)

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

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L151)

***

### messageData?

> `readonly` `optional` **messageData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:153](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L153)

***

### originalError

> `readonly` **originalError**: `Error`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:152](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L152)
