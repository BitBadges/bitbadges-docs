---
description: "T extends NumberType"
---

# Interface: iMustOwnToken\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:545](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L545)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### amountRange

> **amountRange**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:554](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L554)

The range of amounts the user must own (min to max).

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:549](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L549)

The ID of the collection.

***

### mustSatisfyForAllAssets

> **mustSatisfyForAllAssets**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:574](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L574)

If true, the user must meet ownership requirements for all specified tokens; else, must meet requirements for any single token.

***

### overrideWithCurrentTime

> **overrideWithCurrentTime**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:569](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L569)

If true, override ownershipTimes with the current time.

***

### ownershipCheckParty?

> `optional` **ownershipCheckParty?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:579](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L579)

The party to check ownership for. Options are "initiator", "sender", or "recipient". Defaults to "initiator" if empty.

***

### ownershipTimes

> **ownershipTimes**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:559](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L559)

The time ranges during which the user must own the tokens.

***

### tokenIds

> **tokenIds**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:564](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L564)

The token IDs the user must own.
