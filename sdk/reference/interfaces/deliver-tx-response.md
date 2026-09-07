---
description: "The response after successfully broadcasting a transaction. Success or failure refer to the execution result."
---

# Interface: DeliverTxResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:86](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L86)

The response after successfully broadcasting a transaction.
Success or failure refer to the execution result.

## Properties

### code

> `readonly` **code**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:91](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L91)

Error code. The transaction suceeded if and only if code is 0.

***

### ~~data?~~

> `readonly` `optional` **data?**: readonly `object`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:106](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L106)

#### Deprecated

Use `msgResponses` instead.

***

### events

> `readonly` **events**: readonly [`CosmosEvent`](/sdk/reference/interfaces/cosmos-event)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L93)

***

### gasUsed

> `readonly` **gasUsed**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:119](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L119)

***

### gasWanted

> `readonly` **gasWanted**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:120](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L120)

***

### height

> `readonly` **height**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:87](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L87)

***

### msgResponses

> `readonly` **msgResponses**: `object`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L115)

The message responses of the [TxMsgData](https://github.com/cosmos/cosmos-sdk/blob/v0.46.3/proto/cosmos/base/abci/v1beta1/abci.proto#L128-L140)
as `Any`s.
This field is an empty list for chains running Cosmos SDK \< 0.46.

#### typeUrl

> `readonly` **typeUrl**: `string`

#### value

> `readonly` **value**: `Uint8Array`

***

### ~~rawLog?~~

> `readonly` `optional` **rawLog?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:104](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L104)

A string-based log document.

This currently seems to merge attributes of multiple events into one event per type
(https://github.com/tendermint/tendermint/issues/9595). You might want to use the `events`
field instead.

#### Deprecated

This field is not filled anymore in Cosmos SDK 0.50+ (https://github.com/cosmos/cosmos-sdk/pull/15845).
Please consider using `events` instead.

***

### transactionHash

> `readonly` **transactionHash**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:92](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L92)

***

### txIndex

> `readonly` **txIndex**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:89](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L89)

The position of the transaction within the block. This is a 0-based index.
