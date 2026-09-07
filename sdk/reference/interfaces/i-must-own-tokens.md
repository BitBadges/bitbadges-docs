---
description: "T extends NumberType"
---

# Interface: iMustOwnTokens\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:86](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L86)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### amountRange

> **amountRange**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:95](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L95)

The min/max acceptable amount of tokens that must be owned (can be any values, including 0-0).

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:90](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L90)

The collection IDs to own.

***

### mustSatisfyForAllAssets

> **mustSatisfyForAllAssets**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L115)

Whether or not the user must own all the specified tokens. If false, we will accept if they meet criteria for at least one token.

***

### overrideWithCurrentTime

> **overrideWithCurrentTime**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:110](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L110)

Whether or not to override the ownershipTimes with the current time.

***

### ownershipCheckParty?

> `optional` **ownershipCheckParty?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:120](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L120)

The party to check ownership for. Options are "initiator", "sender", or "recipient". Defaults to "initiator" if empty.

***

### ownershipTimes

> **ownershipTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:100](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L100)

The range of the times that the tokens must be owned.

***

### tokenIds

> **tokenIds**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L105)

The range of the token IDs that must be owned.
