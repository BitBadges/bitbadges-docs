---
description: "Convenience: server-status-with-fallback. Prefers the indexer-attached standardsInfo.Auction.status when available, otherwise derives locally."
---

# Function: getAuctionStatus()

> **getAuctionStatus**(`details`, `collection`): [`AuctionStatus`](/sdk/reference/type-aliases/auction-status)

Defined in: [packages/bitbadgesjs-sdk/src/core/auctions.ts:164](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/auctions.ts#L164)

Convenience: server-status-with-fallback. Prefers the indexer-attached
`standardsInfo.Auction.status` when available, otherwise derives locally.

## Parameters

### details

[`AuctionDetails`](/sdk/reference/interfaces/auction-details)

### collection

`Readonly`\<[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc)\<`bigint`\>\>

## Returns

[`AuctionStatus`](/sdk/reference/type-aliases/auction-status)
