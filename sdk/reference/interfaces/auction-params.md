---
description: "Seller address — used as initiatedByListId on the mint-to-winner approval so only the seller can accept the winning bid. Falls back to the CLI-passed creator…"
---

# Interface: AuctionParams

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/auction.ts:20](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/auction.ts#L20)

## Properties

### acceptWindow?

> `optional` **acceptWindow?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/auction.ts:22](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/auction.ts#L22)

***

### bidDeadline?

> `optional` **bidDeadline?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/auction.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/auction.ts#L21)

***

### creator?

> `optional` **creator?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/auction.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/auction.ts#L34)

***

### description?

> `optional` **description?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/auction.ts:26](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/auction.ts#L26)

***

### image?

> `optional` **image?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/auction.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/auction.ts#L27)

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/auction.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/auction.ts#L25)

***

### seller?

> `optional` **seller?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/auction.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/auction.ts#L33)

Seller address — used as `initiatedByListId` on the mint-to-winner
approval so only the seller can accept the winning bid. Falls back
to the CLI-passed `creator` when not set.

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/auction.ts:24](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/auction.ts#L24)

Pre-hosted collection metadata URI. If provided, name/image/description are ignored.
