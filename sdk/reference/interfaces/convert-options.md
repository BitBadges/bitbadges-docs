---
description: "Same object as the one passed in the convert function."
---

# Interface: ConvertOptions

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:76](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L76)

## Properties

### keepOriginalObject?

> `optional` **keepOriginalObject?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:83](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L83)

Same object as the one passed in the convert function.

By default, we create a deep copy of the object, but you can specify this if you are okay updating in-place.
This increases performance by a lot at scale since we don't need to deep copy the object.
