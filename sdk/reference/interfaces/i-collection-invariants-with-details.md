---
description: "Collection invariants with EVM query challenges as WithDetails (metadata populated). Used on BitBadgesCollection responses."
---

# Interface: iCollectionInvariantsWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:992](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L992)

Collection invariants with EVM query challenges as WithDetails (metadata populated).
Used on BitBadgesCollection responses.

## Extends

- [`iCollectionInvariants`](/sdk/reference/interfaces/i-collection-invariants)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### cosmosCoinBackedPath?

> `optional` **cosmosCoinBackedPath?**: [`iCosmosCoinBackedPath`](/sdk/reference/interfaces/i-cosmos-coin-backed-path)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:964](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L964)

The IBC backed (sdk.coin) path for the collection. Only one path is allowed.

#### Inherited from

[`iCollectionInvariants`](/sdk/reference/interfaces/i-collection-invariants).[`cosmosCoinBackedPath`](/sdk/reference/interfaces/i-collection-invariants#cosmoscoinbackedpath)

***

### disablePoolCreation

> **disablePoolCreation**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:976](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L976)

If true, disallows pool creation with this collection's assets.
When true, any attempt to create a pool with assets from this collection will fail.

#### Inherited from

[`iCollectionInvariants`](/sdk/reference/interfaces/i-collection-invariants).[`disablePoolCreation`](/sdk/reference/interfaces/i-collection-invariants#disablepoolcreation)

***

### evmQueryChallenges?

> `optional` **evmQueryChallenges?**: [`iEVMQueryChallengeWithDetails`](/sdk/reference/interfaces/i-evm-query-challenge-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:993](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L993)

EVM query invariants that must pass after all transfers complete.
These are checked once per message after all balance updates, with access to ALL recipient addresses.
Placeholders: $sender, $recipients (comma-separated), $initiator, $collectionId, $recipient

#### Overrides

[`iCollectionInvariants`](/sdk/reference/interfaces/i-collection-invariants).[`evmQueryChallenges`](/sdk/reference/interfaces/i-collection-invariants#evmquerychallenges)

***

### maxSupplyPerId

> **maxSupplyPerId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:959](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L959)

Maximum supply per token ID. If set, no balance can exceed this amount.
This prevents any single token ID from having more than the specified supply.

#### Inherited from

[`iCollectionInvariants`](/sdk/reference/interfaces/i-collection-invariants).[`maxSupplyPerId`](/sdk/reference/interfaces/i-collection-invariants#maxsupplyperid)

***

### noCustomOwnershipTimes

> **noCustomOwnershipTimes**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:953](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L953)

If true, all ownership times must be full ranges [{ start: 1, end: GoMaxUInt64 }].
This prevents time-based restrictions on token ownership.

#### Inherited from

[`iCollectionInvariants`](/sdk/reference/interfaces/i-collection-invariants).[`noCustomOwnershipTimes`](/sdk/reference/interfaces/i-collection-invariants#nocustomownershiptimes)

***

### noForcefulPostMintTransfers

> **noForcefulPostMintTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:970](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L970)

If true, disallows any collection approvals that have overridesFromOutgoingApprovals or overridesToIncomingApprovals set to true.
This prevents forceful post-mint transfers that bypass user-level approvals.

#### Inherited from

[`iCollectionInvariants`](/sdk/reference/interfaces/i-collection-invariants).[`noForcefulPostMintTransfers`](/sdk/reference/interfaces/i-collection-invariants#noforcefulpostminttransfers)
