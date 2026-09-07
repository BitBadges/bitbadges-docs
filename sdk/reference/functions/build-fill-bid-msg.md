---
description: "Seller fills a bid: buyer's incoming approval fires; seller's tokens → buyer; buyer's coins → seller."
---

# Function: buildFillBidMsg()

> **buildFillBidMsg**(`seller`, `collectionId`, `bid`): [`OrderbookFillMsg`](/sdk/reference/interfaces/orderbook-fill-msg)

Defined in: [packages/bitbadgesjs-sdk/src/core/bids.ts:393](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/bids.ts#L393)

Seller fills a bid: buyer's incoming approval fires; seller's tokens → buyer; buyer's coins → seller.

## Parameters

### seller

`string`

### collectionId

`string`

### bid

[`OrderbookFillTarget`](/sdk/reference/interfaces/orderbook-fill-target)

## Returns

[`OrderbookFillMsg`](/sdk/reference/interfaces/orderbook-fill-msg)
