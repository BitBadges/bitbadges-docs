---
description: "Compute status from indexer/standardsInfo if available, else from on-chain state + clock."
---

# Function: deriveCrowdfundStatus()

> **deriveCrowdfundStatus**(`deadlineMs`, `raised`, `goal`): [`CrowdfundStatus`](/sdk/reference/type-aliases/crowdfund-status)

Defined in: [packages/bitbadgesjs-sdk/src/core/crowdfunds.ts:213](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/crowdfunds.ts#L213)

Compute status from indexer/standardsInfo if available, else from on-chain state + clock.

## Parameters

### deadlineMs

`bigint`

### raised

`bigint`

### goal

`bigint`

## Returns

[`CrowdfundStatus`](/sdk/reference/type-aliases/crowdfund-status)
