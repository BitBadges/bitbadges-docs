---
description: "How recent the challenge must be in milliseconds. Defaults to 10 minutes. If 0, we will not check the time."
---

# Interface: VerifySIWBBOptions

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:77](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L77)

## Properties

### issuedAtTimeWindowMs?

> `optional` **issuedAtTimeWindowMs?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:79](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L79)

How recent the challenge must be in milliseconds. Defaults to 10 minutes. If 0, we will not check the time.

***

### ~~skipAssetVerification?~~

> `optional` **skipAssetVerification?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:85](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L85)

Skip asset verification. This may be useful for simulations or testing.

#### Deprecated

Please do not use. Check requirements a claim or other means.
