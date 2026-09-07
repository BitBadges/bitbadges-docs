---
description: "Only meaningful alongside tokenId. When true, the returned page is restricted to holders whose ownership currently covers now (active), excluding expired…"
---

# Interface: iGetCollectionOwnersPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L33)

## Properties

### bookmark?

> `optional` **bookmark?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L34)

***

### oldestFirst?

> `optional` **oldestFirst?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:35](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L35)

***

### onlyActive?

> `optional` **onlyActive?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:47](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L47)

Only meaningful alongside `tokenId`. When true, the returned page is
restricted to holders whose ownership currently covers now (active),
excluding expired holders.

***

### tokenId?

> `optional` **tokenId?**: [`NumberType`](/sdk/reference/type-aliases/number-type)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts:41](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/wrappers.ts#L41)

If set, filter owners to holders of this token ID (tier) server-side and
include per-tier `counts` in the response. Enables tier-scoped views
(e.g. subscriber management) to scale without paging every holder.
