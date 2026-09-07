---
description: "Build the crowdfunder-side withdraw tx (only callable when goal met). Fires the success approval to drain escrow + burns the crowdfunder's accumulated progress…"
---

# Function: buildWithdrawCrowdfundTx()

> **buildWithdrawCrowdfundTx**(`creator`, `collectionId`, `details`, `raised`, `burnApprovalId?`): `object`

Defined in: [packages/bitbadgesjs-sdk/src/core/crowdfunds.ts:307](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/crowdfunds.ts#L307)

Build the crowdfunder-side withdraw tx (only callable when goal met).
Fires the success approval to drain escrow + burns the crowdfunder's
accumulated progress tokens. 2-msg.

## Parameters

### creator

`string`

### collectionId

`string`

### details

[`CrowdfundDetails`](/sdk/reference/interfaces/crowdfund-details)

### raised

`bigint`

### burnApprovalId?

`string`

## Returns

`object`

### messages

> **messages**: `MsgEnvelope`[]
