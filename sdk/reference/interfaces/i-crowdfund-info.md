---
description: "Core details for the Crowdfund standard."
---

# Interface: iCrowdfundInfo

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/standards-info.ts:47](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/standards-info.ts#L47)

Core details for the Crowdfund standard.

`funded` is derived from the success tracker (the on-chain handler having
run). `expired` covers any post-deadline state where success hasn't
executed — without an escrow read we can't distinguish "goal met but not
yet withdrawn" from "goal not met".

## Properties

### status

> **status**: `"active"` \| `"funded"` \| `"expired"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/standards-info.ts:48](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/standards-info.ts#L48)
