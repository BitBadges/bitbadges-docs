---
description: "Smart Token units to mint to the caller (equal to backing-coin units sent)."
---

# Interface: SmartTokenDepositArgs

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:166](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L166)

## Properties

### amount

> **amount**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:172](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L172)

Smart Token units to mint to the caller (equal to backing-coin units sent).

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:170](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L170)

Collection ID to deposit into.

***

### creator

> **creator**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:168](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L168)

Caller (bb1...) — the user receiving Smart Token units.

***

### details

> **details**: [`SmartTokenDetails`](/sdk/reference/interfaces/smart-token-details)

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:174](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L174)

Resolved from `extractSmartTokenDetails`.
