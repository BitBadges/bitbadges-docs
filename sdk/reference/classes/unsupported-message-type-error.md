---
description: "Error thrown when encodeTokenizationMsgFromJson receives a typeUrl it doesn't know how to build. Callers can catch this specifically to return a nicer…"
---

# Class: UnsupportedMessageTypeError

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/fromJson.ts:52](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/fromJson.ts#L52)

Error thrown when `encodeTokenizationMsgFromJson` receives a typeUrl it
doesn't know how to build. Callers can catch this specifically to return
a nicer "unsupported message type" response to the agent rather than
crashing on a generic constructor failure.

## Extends

- `Error`

## Constructors

### Constructor

> **new UnsupportedMessageTypeError**(`typeUrl`): `UnsupportedMessageTypeError`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/fromJson.ts:54](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/fromJson.ts#L54)

#### Parameters

##### typeUrl

`string`

#### Returns

`UnsupportedMessageTypeError`

#### Overrides

`Error.constructor`

## Properties

### typeUrl

> `readonly` **typeUrl**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/fromJson.ts:53](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/fromJson.ts#L53)
