---
description: "T extends NumberType"
---

# Interface: iMerkleChallenge\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:585](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L585)

## Extended by

- [`iMerkleChallengeWithDetails`](/sdk/reference/interfaces/i-merkle-challenge-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### challengeTrackerId

> **challengeTrackerId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:619](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L619)

Tracker ID details for the merkle challenge.

***

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:614](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L614)

Arbitrary custom data that can be stored on-chain.

***

### expectedProofLength

> **expectedProofLength**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:594](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L594)

The expected proof length of the merkle proof.

***

### leafSigner

> **leafSigner**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:624](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L624)

The signer of the leaf. Currently only supports ETH addresses.

***

### maxUsesPerLeaf

> **maxUsesPerLeaf**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:604](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L604)

Whether or not to enforce max uses per leaf. Used to prevent replay attacks.

***

### root

> **root**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:589](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L589)

The root of the merkle tree.

***

### uri

> **uri**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:609](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L609)

The URI where to fetch the merkle challenge metadata from.

***

### useCreatorAddressAsLeaf

> **useCreatorAddressAsLeaf**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:599](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L599)

Whether or not to override any leaf value and use the creator address as the leaf. Used for whitelist trees.
