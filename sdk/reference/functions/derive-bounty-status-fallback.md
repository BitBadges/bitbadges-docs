---
description: "Fallback status when the indexer hasn't enriched collection.standardsInfo.Bounty (preview / freshly-broadcast collections). Returns 'expired' past the…"
---

# Function: deriveBountyStatusFallback()

> **deriveBountyStatusFallback**(`expirationMs`): [`BountyStatus`](/sdk/reference/type-aliases/bounty-status)

Defined in: [packages/bitbadgesjs-sdk/src/core/bounties.ts:201](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/bounties.ts#L201)

Fallback status when the indexer hasn't enriched `collection.standardsInfo.Bounty`
(preview / freshly-broadcast collections). Returns 'expired' past the deadline,
'pending' otherwise. Cannot derive 'accepted'/'denied' from FE state alone.

## Parameters

### expirationMs

`bigint`

## Returns

[`BountyStatus`](/sdk/reference/type-aliases/bounty-status)
