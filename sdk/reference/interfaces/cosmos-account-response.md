---
description: "Information returned by the REST API getAccount route."
---

# Interface: CosmosAccountResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1756](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1756)

Information returned by the REST API getAccount route.

Note this should be converted into AccountDoc or BitBadgesUserInfo before being returned by the BitBadges API for consistency.

## Properties

### account\_number

> **account\_number**: `string` \| `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1758](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1758)

The node REST API serves this as a decimal string; post-v34 it can exceed 2^53 — never Number() it.

***

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1764](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1764)

***

### pub\_key

> **pub\_key**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1761](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1761)

#### key

> **key**: `string`

***

### sequence

> **sequence**: `string` \| `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1760](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1760)

The node REST API serves this as a decimal string; post-v34 unordered-tx nonces can exceed 2^53.
