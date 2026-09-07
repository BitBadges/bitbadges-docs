---
description: "Buyer fills a listing: seller's outgoing approval fires; seller's tokens → buyer; buyer's coins → seller."
---

# Function: buildFillListingMsg()

> **buildFillListingMsg**(`buyer`, `collectionId`, `listing`): [`OrderbookFillMsg`](/sdk/reference/interfaces/orderbook-fill-msg)

Defined in: [packages/bitbadgesjs-sdk/src/core/bids.ts:352](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/bids.ts#L352)

Buyer fills a listing: seller's outgoing approval fires; seller's tokens → buyer; buyer's coins → seller.

## Parameters

### buyer

`string`

### collectionId

`string`

### listing

[`OrderbookFillTarget`](/sdk/reference/interfaces/orderbook-fill-target)

## Returns

[`OrderbookFillMsg`](/sdk/reference/interfaces/orderbook-fill-msg)
