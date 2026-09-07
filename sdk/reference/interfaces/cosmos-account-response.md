---
description: "Information returned by the REST API getAccount route."
---

# Interface: CosmosAccountResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1755](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1755)

Information returned by the REST API getAccount route.

Note this should be converted into AccountDoc or BitBadgesUserInfo before being returned by the BitBadges API for consistency.

## Properties

### account\_number

> **account\_number**: `string` \| `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1757](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1757)

The node REST API serves this as a decimal string; post-v34 it can exceed 2^53 — never Number() it.

***

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1763](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1763)

***

### pub\_key

> **pub\_key**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1760](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1760)

#### key

> **key**: `string`

***

### sequence

> **sequence**: `string` \| `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1759](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1759)

The node REST API serves this as a decimal string; post-v34 unordered-tx nonces can exceed 2^53.
