---
description: "Extract auction shape. When the mint-to-winner approval is missing (post-settlement), returns a zeroed AuctionDetails with mintApproval: null instead of null —…"
---

# Function: extractAuctionDetails()

> **extractAuctionDetails**(`approvals`): [`AuctionDetails`](/sdk/reference/interfaces/auction-details) \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/auctions.ts:107](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/auctions.ts#L107)

Extract auction shape. When the mint-to-winner approval is missing (post-settlement),
returns a zeroed `AuctionDetails` with `mintApproval: null` instead of null — callers
use `mintApproval == null` to detect the settled state, with `burnApproval` still
exposed for cleanup-tracker reads.

## Parameters

### approvals

readonly [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\>[]

## Returns

[`AuctionDetails`](/sdk/reference/interfaces/auction-details) \| `null`
