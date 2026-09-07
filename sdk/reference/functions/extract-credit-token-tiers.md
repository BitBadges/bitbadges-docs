---
description: "Extract every credit- mint tier from a collection's approvals. Skips non-credit approvals silently. Returns [] if none match. Mirrors the FE CreditTokenLayout…"
---

# Function: extractCreditTokenTiers()

> **extractCreditTokenTiers**(`approvals`): [`CreditTokenTier`](/sdk/reference/interfaces/credit-token-tier)[]

Defined in: [packages/bitbadgesjs-sdk/src/core/credit-tokens.ts:82](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/credit-tokens.ts#L82)

Extract every credit-* mint tier from a collection's approvals. Skips
non-credit approvals silently. Returns [] if none match. Mirrors the
FE `CreditTokenLayout` extraction (lines 70-95).

## Parameters

### approvals

readonly [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\>[]

## Returns

[`CreditTokenTier`](/sdk/reference/interfaces/credit-token-tier)[]
