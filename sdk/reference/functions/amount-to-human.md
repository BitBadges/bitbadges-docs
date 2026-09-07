---
description: "Convert a base-unit amount + denom into a human-readable display amount (e.g., 5000000 ubadge -> \"5 BADGE\"). Unknown denoms show the raw amount."
---

# Function: amountToHuman()

> **amountToHuman**(`amount`, `denom`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/interpret-shared.ts:87](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/interpret-shared.ts#L87)

Convert a base-unit amount + denom into a human-readable display amount
(e.g., 5000000 ubadge -> "5 BADGE"). Unknown denoms show the raw amount.

## Parameters

### amount

`bigint`

### denom

`string`

## Returns

`string`
