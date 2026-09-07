---
description: "Build the mint MsgTransferTokens for custom-2fa tokens, encoding the short lifetime at mint time via ownershipTimes — the SDK/CLI mirror of the FE…"
---

# Function: mintCustom2FA()

> **mintCustom2FA**(`params`): `object`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts:216](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts#L216)

Build the mint `MsgTransferTokens` for custom-2fa tokens, encoding the
short lifetime at mint time via `ownershipTimes` — the SDK/CLI mirror of
the FE `Custom2FALayout` mint. A CLI user who broadcasts their own mint
without this gets forever-tokens.

## Parameters

### params

[`MintCustom2FAParams`](/sdk/reference/interfaces/mint-custom2-fa-params)

## Returns

`object`

### typeUrl

> **typeUrl**: `string`

### value

> **value**: `any`
