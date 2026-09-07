---
description: "Extract the deposit/withdraw approvals + backing metadata from a Smart Token collection. Returns null on shape mismatch; caller should treat that as…"
---

# Function: extractSmartTokenDetails()

> **extractSmartTokenDetails**(`collection`): [`SmartTokenDetails`](/sdk/reference/interfaces/smart-token-details) \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:130](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L130)

Extract the deposit/withdraw approvals + backing metadata from a
Smart Token collection. Returns null on shape mismatch; caller should
treat that as non-conformant.

## Parameters

### collection

`Readonly`\<[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc)\<`bigint`\>\>

## Returns

[`SmartTokenDetails`](/sdk/reference/interfaces/smart-token-details) \| `null`
