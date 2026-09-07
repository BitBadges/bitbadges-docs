---
description: "Order owner address."
---

# Interface: OrderbookOrderArgs

Defined in: [packages/bitbadgesjs-sdk/src/core/bids.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/bids.ts#L157)

## Properties

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/bids.ts:159](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/bids.ts#L159)

Order owner address.

***

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/bids.ts:171](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/bids.ts#L171)

Approval id — caller picks.

***

### maxNumTransfers?

> `optional` **maxNumTransfers?**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/bids.ts:173](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/bids.ts#L173)

Optional cap on partial fills (default 1n — fill-once).

***

### paymentAmount

> **paymentAmount**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/bids.ts:163](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/bids.ts#L163)

Coin amount in base units (bigint).

***

### paymentDenom

> **paymentDenom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/bids.ts:165](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/bids.ts#L165)

Coin denom (e.g. 'ubadge', 'ibc/...').

***

### tokenAmount?

> `optional` **tokenAmount?**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/bids.ts:167](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/bids.ts#L167)

Token quantity (almost always 1n for NFTs).

***

### tokenId?

> `optional` **tokenId?**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/bids.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/bids.ts#L161)

Token id (single token bid/listing) — or undefined for collection-wide bid.

***

### transferTimes

> **transferTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/bids.ts:169](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/bids.ts#L169)

Validity window for the order.
