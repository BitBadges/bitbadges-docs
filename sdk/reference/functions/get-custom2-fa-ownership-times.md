---
description: "The mint-time ownership window [now, now + expirationMs] — string ms. The collection approval uses FOREVER + allowPurgeIfExpired, so the short lifetime MUST be…"
---

# Function: getCustom2FAOwnershipTimes()

> **getCustom2FAOwnershipTimes**(`expirationMs?`): `object`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts:192](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts#L192)

The mint-time ownership window `[now, now + expirationMs]` — string ms.
The collection approval uses FOREVER + `allowPurgeIfExpired`, so the
short lifetime MUST be encoded here at mint time (exactly what the FE
`getCustom2FAOwnershipTimes()` does). Without it the minted token gets
full ownership and never expires, silently breaking the 2FA guarantee.

## Parameters

### expirationMs?

`number` = `CUSTOM_2FA_TOKEN_EXPIRATION_MS`

## Returns

`object`[]
