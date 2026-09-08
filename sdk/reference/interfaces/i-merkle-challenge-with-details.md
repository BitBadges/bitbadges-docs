---
description: "T extends NumberType"
---

# Interface: iMerkleChallengeWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2076](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2076)

## Extends

- [`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### challengeInfoDetails

> **challengeInfoDetails**: [`iChallengeInfoDetails`](/sdk/reference/interfaces/i-challenge-info-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:2077](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L2077)

***

### challengeTrackerId

> **challengeTrackerId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:619](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L619)

Tracker ID details for the merkle challenge.

#### Inherited from

[`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge).[`challengeTrackerId`](/sdk/reference/interfaces/i-merkle-challenge#challengetrackerid)

***

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:614](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L614)

Arbitrary custom data that can be stored on-chain.

#### Inherited from

[`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge).[`customData`](/sdk/reference/interfaces/i-merkle-challenge#customdata)

***

### expectedProofLength

> **expectedProofLength**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:594](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L594)

The expected proof length of the merkle proof.

#### Inherited from

[`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge).[`expectedProofLength`](/sdk/reference/interfaces/i-merkle-challenge#expectedprooflength)

***

### leafSigner

> **leafSigner**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:624](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L624)

The signer of the leaf. Currently only supports ETH addresses.

#### Inherited from

[`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge).[`leafSigner`](/sdk/reference/interfaces/i-merkle-challenge#leafsigner)

***

### maxUsesPerLeaf

> **maxUsesPerLeaf**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:604](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L604)

Whether or not to enforce max uses per leaf. Used to prevent replay attacks.

#### Inherited from

[`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge).[`maxUsesPerLeaf`](/sdk/reference/interfaces/i-merkle-challenge#maxusesperleaf)

***

### root

> **root**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:589](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L589)

The root of the merkle tree.

#### Inherited from

[`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge).[`root`](/sdk/reference/interfaces/i-merkle-challenge#root)

***

### uri

> **uri**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:609](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L609)

The URI where to fetch the merkle challenge metadata from.

#### Inherited from

[`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge).[`uri`](/sdk/reference/interfaces/i-merkle-challenge#uri)

***

### useCreatorAddressAsLeaf

> **useCreatorAddressAsLeaf**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:599](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L599)

Whether or not to override any leaf value and use the creator address as the leaf. Used for whitelist trees.

#### Inherited from

[`iMerkleChallenge`](/sdk/reference/interfaces/i-merkle-challenge).[`useCreatorAddressAsLeaf`](/sdk/reference/interfaces/i-merkle-challenge#usecreatoraddressasleaf)
