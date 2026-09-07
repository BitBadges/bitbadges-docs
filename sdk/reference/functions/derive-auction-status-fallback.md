---
description: "Fallback status derivation for pre-indexed / mint-preview collections where the indexer hasn't attached standardsInfo.Auction.status yet. The indexer is the…"
---

# Function: deriveAuctionStatusFallback()

> **deriveAuctionStatusFallback**(`details`, `collection`): [`AuctionStatus`](/sdk/reference/type-aliases/auction-status)

Defined in: [packages/bitbadgesjs-sdk/src/core/auctions.ts:141](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/auctions.ts#L141)

Fallback status derivation for pre-indexed / mint-preview collections where
the indexer hasn't attached `standardsInfo.Auction.status` yet. The indexer
is the source of truth for live collections — prefer that when available.

## Parameters

### details

[`AuctionDetails`](/sdk/reference/interfaces/auction-details)

### collection

`Readonly`\<[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc)\<`bigint`\>\>

## Returns

[`AuctionStatus`](/sdk/reference/type-aliases/auction-status)
