---
description: "The response from the blockchain for the broadcasted tx."
---

# Interface: iBroadcastTxSuccessResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1603](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1603)

## Properties

### tx\_response

> **tx\_response**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1607](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1607)

The response from the blockchain for the broadcasted tx.

#### code

> **code**: `number`

#### codespace

> **codespace**: `string`

#### data

> **data**: `string`

#### events

> **events**: `object`[]

#### gas\_used

> **gas\_used**: `string`

#### gas\_wanted

> **gas\_wanted**: `string`

#### height

> **height**: `string`

#### logs

> **logs**: `object`[]

#### raw\_log

> **raw\_log**: `string`

#### timestamp

> **timestamp**: `string`

#### tx

> **tx**: `object` \| `null`

#### txhash

> **txhash**: `string`
