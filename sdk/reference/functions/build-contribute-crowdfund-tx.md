---
description: "Build the 2-msg contribute tx. Pipe to bb deploy — single tx, two transfers inside it (mint token-1 to contributor + mint token-2 to crowdfunder), each fired…"
---

# Function: buildContributeCrowdfundTx()

> **buildContributeCrowdfundTx**(`creator`, `collectionId`, `details`, `amount`): `object`

Defined in: [packages/bitbadgesjs-sdk/src/core/crowdfunds.ts:234](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/crowdfunds.ts#L234)

Build the 2-msg contribute tx. Pipe to `bb deploy` — single tx, two
transfers inside it (mint token-1 to contributor + mint token-2 to
crowdfunder), each fired via its own deposit approval.

## Parameters

### creator

`string`

### collectionId

`string`

### details

[`CrowdfundDetails`](/sdk/reference/interfaces/crowdfund-details)

### amount

`bigint`

## Returns

`object`

### messages

> **messages**: \[`MsgEnvelope`\]
