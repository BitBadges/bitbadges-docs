---
description: "T extends NumberType"
---

# Interface: iApprovalTrackerDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1517](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1517)

## Extends

- [`iAmountTrackerIdDetails`](/sdk/reference/interfaces/i-amount-tracker-id-details)\<`T`\>.[`Doc`](/sdk/reference/interfaces/doc)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L13)

A unique stringified document ID

#### Inherited from

[`Doc`](/sdk/reference/interfaces/doc).[`_docId`](/sdk/reference/interfaces/doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L16)

A unique document ID (Mongo DB ObjectID)

#### Inherited from

[`Doc`](/sdk/reference/interfaces/doc).[`_id`](/sdk/reference/interfaces/doc#_id)

***

### amounts

> **amounts**: [`iBalance`](/sdk/reference/interfaces/i-balance)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1521](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1521)

A tally of the amounts transferred for this approval.

***

### amountTrackerId

> **amountTrackerId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:519](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L519)

The amount tracker ID of the approval.

#### Inherited from

[`iAmountTrackerIdDetails`](/sdk/reference/interfaces/i-amount-tracker-id-details).[`amountTrackerId`](/sdk/reference/interfaces/i-amount-tracker-id-details#amounttrackerid)

***

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:514](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L514)

The approval ID

#### Inherited from

[`iAmountTrackerIdDetails`](/sdk/reference/interfaces/i-amount-tracker-id-details).[`approvalId`](/sdk/reference/interfaces/i-amount-tracker-id-details#approvalid)

***

### approvalLevel

> **approvalLevel**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:524](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L524)

The approval level of the approval "collection", "incoming", or "outgoing".

#### Inherited from

[`iAmountTrackerIdDetails`](/sdk/reference/interfaces/i-amount-tracker-id-details).[`approvalLevel`](/sdk/reference/interfaces/i-amount-tracker-id-details#approvallevel)

***

### approvedAddress

> **approvedAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:539](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L539)

The address to check for the approval.

#### Inherited from

[`iAmountTrackerIdDetails`](/sdk/reference/interfaces/i-amount-tracker-id-details).[`approvedAddress`](/sdk/reference/interfaces/i-amount-tracker-id-details#approvedaddress)

***

### approverAddress

> **approverAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:529](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L529)

The address of the approval to check.

#### Inherited from

[`iAmountTrackerIdDetails`](/sdk/reference/interfaces/i-amount-tracker-id-details).[`approverAddress`](/sdk/reference/interfaces/i-amount-tracker-id-details#approveraddress)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:509](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L509)

The collection ID for the approval.

#### Inherited from

[`iAmountTrackerIdDetails`](/sdk/reference/interfaces/i-amount-tracker-id-details).[`collectionId`](/sdk/reference/interfaces/i-amount-tracker-id-details#collectionid)

***

### lastUpdatedAt

> **lastUpdatedAt**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1523](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1523)

Last updated timestamp

***

### numTransfers

> **numTransfers**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:1519](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L1519)

The number of transfers. Is an incrementing tally.

***

### trackerType

> **trackerType**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:534](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L534)

The type of tracker to check "overall", "to", "from", or "initiatedBy".

#### Inherited from

[`iAmountTrackerIdDetails`](/sdk/reference/interfaces/i-amount-tracker-id-details).[`trackerType`](/sdk/reference/interfaces/i-amount-tracker-id-details#trackertype)
