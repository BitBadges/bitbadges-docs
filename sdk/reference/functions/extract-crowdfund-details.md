---
description: "Split a crowdfund's 4 approvals into deposit-refund / deposit-progress / success / refund + extract config. Returns null on shape mismatch. Lifted from FE…"
---

# Function: extractCrowdfundDetails()

> **extractCrowdfundDetails**(`approvals`): [`CrowdfundDetails`](/sdk/reference/interfaces/crowdfund-details) \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/crowdfunds.ts:173](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/crowdfunds.ts#L173)

Split a crowdfund's 4 approvals into deposit-refund / deposit-progress /
success / refund + extract config. Returns null on shape mismatch.
Lifted from FE `CrowdfundView.extractDetails`.

## Parameters

### approvals

readonly [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\>[]

## Returns

[`CrowdfundDetails`](/sdk/reference/interfaces/crowdfund-details) \| `null`
