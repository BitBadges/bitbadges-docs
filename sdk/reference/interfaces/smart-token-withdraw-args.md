---
description: "Smart Token units to burn (equal to backing-coin units released)."
---

# Interface: SmartTokenWithdrawArgs

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:220](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L220)

## Properties

### amount

> **amount**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:226](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L226)

Smart Token units to burn (equal to backing-coin units released).

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:224](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L224)

Collection ID to withdraw from.

***

### creator

> **creator**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:222](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L222)

Caller (bb1...) — the user burning Smart Token units.

***

### details

> **details**: [`SmartTokenDetails`](/sdk/reference/interfaces/smart-token-details)

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:228](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L228)

Resolved from `extractSmartTokenDetails`.
