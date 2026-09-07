---
description: "transferTimes[0].end on the mint approval — the moment accepting closes."
---

# Interface: AuctionDetails

Defined in: [packages/bitbadgesjs-sdk/src/core/auctions.ts:87](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/auctions.ts#L87)

## Properties

### acceptDeadline

> **acceptDeadline**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/auctions.ts:98](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/auctions.ts#L98)

transferTimes[0].end on the mint approval — the moment accepting closes.

***

### bidDeadline

> **bidDeadline**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/auctions.ts:96](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/auctions.ts#L96)

transferTimes[0].start on the mint approval — the moment open bidding ends.

***

### burnApproval

> **burnApproval**: [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\> \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/auctions.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/auctions.ts#L93)

Optional cleanup approval that burns the listing token.

***

### mintApproval

> **mintApproval**: [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\> \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/auctions.ts:89](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/auctions.ts#L89)

The Mint→All approval that grants the winning bidder the token. Null after settlement.

***

### sellerAddress

> **sellerAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/auctions.ts:94](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/auctions.ts#L94)

***

### transferApproval

> **transferApproval**: [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\> \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/auctions.ts:91](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/auctions.ts#L91)

Same approval as mintApproval (aliased) — kept for status-tracker lookups. Null post-settlement.
