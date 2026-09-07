---
description: "T extends NumberType"
---

# Interface: iAmountTrackerIdDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:505](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L505)

## Extended by

- [`iApprovalTrackerDoc`](/sdk/reference/interfaces/i-approval-tracker-doc)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### amountTrackerId

> **amountTrackerId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:519](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L519)

The amount tracker ID of the approval.

***

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:514](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L514)

The approval ID

***

### approvalLevel

> **approvalLevel**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:524](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L524)

The approval level of the approval "collection", "incoming", or "outgoing".

***

### approvedAddress

> **approvedAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:539](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L539)

The address to check for the approval.

***

### approverAddress

> **approverAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:529](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L529)

The address of the approval to check.

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:509](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L509)

The collection ID for the approval.

***

### trackerType

> **trackerType**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:534](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L534)

The type of tracker to check "overall", "to", "from", or "initiatedBy".
