---
description: "Build the buyer-side incoming-approval (a \"bid\"). Use with MsgSetIncomingApproval to post the bid on-chain. Proto-shape only — no FE-only…"
---

# Function: buildAuctionBidApproval()

> **buildAuctionBidApproval**(`args`): `Record`\<`string`, `unknown`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/auctions.ts:203](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/auctions.ts#L203)

Build the buyer-side incoming-approval (a "bid"). Use with
`MsgSetIncomingApproval` to post the bid on-chain. Proto-shape only —
no FE-only `fromList`/`toList`/`details` enrichment.

## Parameters

### args

[`AuctionBidArgs`](/sdk/reference/interfaces/auction-bid-args)

## Returns

`Record`\<`string`, `unknown`\>
