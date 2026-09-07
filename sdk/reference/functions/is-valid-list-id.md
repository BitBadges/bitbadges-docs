---
description: "Check if a value is a valid list ID using the SDK's reserved list parser. Handles all composite formats: bb1..., !bb1..., Mint:bb1..., !Mint:bb1..., All…"
---

# Function: isValidListId()

> **isValidListId**(`id`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/validate.ts:69](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/validate.ts#L69)

Check if a value is a valid list ID using the SDK's reserved list parser.
Handles all composite formats: bb1..., !bb1..., Mint:bb1..., !Mint:bb1...,
All, !Mint, AllWithout..., !(addr:addr), etc.

## Parameters

### id

`string`

## Returns

`boolean`
