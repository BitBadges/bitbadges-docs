---
description: "CollectionInvariants defines the invariants that apply to a collection. These are set upon genesis and cannot be modified."
---

# Interface: iCollectionInvariants\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:948](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L948)

CollectionInvariants defines the invariants that apply to a collection.
These are set upon genesis and cannot be modified.

## Extended by

- [`iCollectionInvariantsWithDetails`](/sdk/reference/interfaces/i-collection-invariants-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### cosmosCoinBackedPath?

> `optional` **cosmosCoinBackedPath?**: [`iCosmosCoinBackedPath`](/sdk/reference/interfaces/i-cosmos-coin-backed-path)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:964](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L964)

The IBC backed (sdk.coin) path for the collection. Only one path is allowed.

***

### disablePoolCreation

> **disablePoolCreation**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:976](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L976)

If true, disallows pool creation with this collection's assets.
When true, any attempt to create a pool with assets from this collection will fail.

***

### evmQueryChallenges?

> `optional` **evmQueryChallenges?**: [`iEVMQueryChallenge`](/sdk/reference/interfaces/i-evm-query-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:983](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L983)

EVM query invariants that must pass after all transfers complete.
These are checked once per message after all balance updates, with access to ALL recipient addresses.
Placeholders: $sender, $recipients (comma-separated), $initiator, $collectionId, $recipient

***

### maxSupplyPerId

> **maxSupplyPerId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:959](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L959)

Maximum supply per token ID. If set, no balance can exceed this amount.
This prevents any single token ID from having more than the specified supply.

***

### noCustomOwnershipTimes

> **noCustomOwnershipTimes**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:953](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L953)

If true, all ownership times must be full ranges [{ start: 1, end: GoMaxUInt64 }].
This prevents time-based restrictions on token ownership.

***

### noForcefulPostMintTransfers

> **noForcefulPostMintTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:970](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L970)

If true, disallows any collection approvals that have overridesFromOutgoingApprovals or overridesToIncomingApprovals set to true.
This prevents forceful post-mint transfers that bypass user-level approvals.
