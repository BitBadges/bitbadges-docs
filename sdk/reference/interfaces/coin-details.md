---
description: "Coin details interface for the coins registry."
---

# Interface: CoinDetails

Defined in: [packages/bitbadgesjs-sdk/src/common/constants.ts:114](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/constants.ts#L114)

Coin details interface for the coins registry.

## Properties

### baseDenom

> **baseDenom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/constants.ts:119](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/constants.ts#L119)

***

### decimals

> **decimals**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/constants.ts:118](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/constants.ts#L118)

***

### deprecated?

> `optional` **deprecated?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/constants.ts:129](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/constants.ts#L129)

Set when the coin still works but should not be offered for new activity.

Consumers should keep rendering balances and allow swapping *out*, while
excluding it from pickers, defaults and quote destinations. It is not the
same as hiding the coin — hiding a deprecated asset strands whoever holds
it.

***

### deprecationNote?

> `optional` **deprecationNote?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/constants.ts:131](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/constants.ts#L131)

Human-readable reason shown next to a deprecated coin.

***

### image

> **image**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/constants.ts:120](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/constants.ts#L120)

***

### label

> **label**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/constants.ts:116](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/constants.ts#L116)

***

### skipGoSupported?

> `optional` **skipGoSupported?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/constants.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/constants.ts#L115)

***

### symbol

> **symbol**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/constants.ts:117](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/constants.ts#L117)
