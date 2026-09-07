---
description: "Verifier-side resolve. Single MsgCastVote for yes/no, two for push. Approval IDs come from the FE's classifySettlementApproval/standardsInfo."
---

# Function: buildPredictionMarketResolveTx()

> **buildPredictionMarketResolveTx**(`creator`, `collectionId`, `outcome`, `approvals`): `object`

Defined in: [packages/bitbadgesjs-sdk/src/core/prediction-markets.ts:1121](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/prediction-markets.ts#L1121)

Verifier-side resolve. Single MsgCastVote for yes/no, two for push.
Approval IDs come from the FE's classifySettlementApproval/standardsInfo.

## Parameters

### creator

`string`

### collectionId

`string`

### outcome

`"push"` \| `"yes"` \| `"no"`

### approvals

#### noWinsApprovalId?

`string`

#### pushNoApprovalId?

`string`

#### pushYesApprovalId?

`string`

#### yesWinsApprovalId?

`string`

## Returns

`object`

### messages

> **messages**: `MsgEnvelope`[]
