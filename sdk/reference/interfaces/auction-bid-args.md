---
description: "Approval id — caller picks."
---

# Interface: AuctionBidArgs

Defined in: [packages/bitbadgesjs-sdk/src/core/auctions.ts:181](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/auctions.ts#L181)

## Properties

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/auctions.ts:195](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/auctions.ts#L195)

Approval id — caller picks.

***

### bidderAddress

> **bidderAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/auctions.ts:183](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/auctions.ts#L183)

Bidder address (will be the `to` on the approval).

***

### paymentAmount

> **paymentAmount**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/auctions.ts:191](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/auctions.ts#L191)

Amount of payment in base units.

***

### paymentDenom

> **paymentDenom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/auctions.ts:189](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/auctions.ts#L189)

Denom of payment (e.g. 'uusdc', 'ubadge').

***

### tokenAmount

> **tokenAmount**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/auctions.ts:187](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/auctions.ts#L187)

Number of tokens (almost always 1 for auctions).

***

### tokenId

> **tokenId**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/auctions.ts:185](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/auctions.ts#L185)

Token id the bidder wants to receive. Most auctions use 1.

***

### transferTimes

> **transferTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/auctions.ts:193](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/auctions.ts#L193)

Validity window for the bid — typically [1, acceptDeadline].
