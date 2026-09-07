---
description: "Error thrown when encodeTokenizationMsgFromJson recognized the typeUrl but the wrapper-class constructor threw on the malformed value (missing required fields…"
---

# Class: InvalidMessageValueError

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/fromJson.ts:72](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/fromJson.ts#L72)

Error thrown when `encodeTokenizationMsgFromJson` recognized the typeUrl
but the wrapper-class constructor threw on the malformed `value` (missing
required fields, wrong types, etc.). Wraps the underlying TypeError so
agents and HTTP callers see "/tokenization.MsgX: missing field foo"
instead of a raw `Cannot read properties of undefined (reading 'foo')`
stack trace.

## Extends

- `Error`

## Constructors

### Constructor

> **new InvalidMessageValueError**(`typeUrl`, `cause`): `InvalidMessageValueError`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/fromJson.ts:75](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/fromJson.ts#L75)

#### Parameters

##### typeUrl

`string`

##### cause

`unknown`

#### Returns

`InvalidMessageValueError`

#### Overrides

`Error.constructor`

## Properties

### cause

> `readonly` **cause**: `unknown`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/fromJson.ts:74](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/fromJson.ts#L74)

#### Overrides

`Error.cause`

***

### typeUrl

> `readonly` **typeUrl**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/fromJson.ts:73](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/fromJson.ts#L73)
