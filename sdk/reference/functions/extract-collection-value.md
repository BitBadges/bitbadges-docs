---
description: "Unwrap any of: transaction ({ messages: [...] }), raw message ({ typeUrl, value }), or a bare collection value object. Ported from the frontend extractValue…"
---

# Function: extractCollectionValue()

> **extractCollectionValue**(`input`): `any`

Defined in: [packages/bitbadgesjs-sdk/src/core/review-normalize.ts:31](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/review-normalize.ts#L31)

Unwrap any of: transaction (`{ messages: [...] }`), raw message
(`{ typeUrl, value }`), or a bare collection value object. Ported from
the frontend `extractValue` helper in `reviewItems.ts`.

## Parameters

### input

`unknown`

## Returns

`any`
