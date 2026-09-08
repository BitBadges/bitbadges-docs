---
description: "Codes"
---

# Interface: iChallengeDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1949](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1949)

## Remarks

**Codes**
1. Generate N codes privately
2. Hash each code
3. Store the hashed codes publicly on IPFS via this struct
4. When a user enters a code, we hash it and check if it matches any of the hashed codes. This way, the codes are never stored publicly on IPFS and only known by the generator of the codes.

**Whitelist**
For storing a public whitelist of addresses (with useCreatorAddressAsLeaf = true), hashing complicates everything because the whitelist can be stored publicly.
1. Generate N whitelist addresses
2. Store the addresses publicly on IPFS via this struct
3. When a user enters an address, we check if it matches any of the addresses.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### currCode?

> `optional` **currCode?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1966](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1966)

The current code being used for the challenge. Used behind the scenes

***

### isHashed

> **isHashed**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1953](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1953)

True if the leaves are hashed. Hash(preimage[i]) = leaves[i]

***

### leaves

> **leaves**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1951](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1951)

The leaves of the Merkle tree. Leaves should be considered public. Use preimages for the private codes + isHashed. For whitelist trees, these can be the plaintext BitBadges addresses.

***

### numLeaves?

> `optional` **numLeaves?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1964](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1964)

The number of leaves in the Merkle tree. This takes priority over leaves.length if defined (used for buffer time between leaf generation and leaf length select)

***

### preimages?

> `optional` **preimages?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1956](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1956)

The preimages of the leaves (only used if isHashed = true). Oftentimes, this is used for private codes so should not be present when user-facing.

***

### seedCode?

> `optional` **seedCode?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1958](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1958)

Seed code for generating the leaves

***

### tree?

> `optional` **tree?**: `MerkleTree`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1960](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1960)

The Merkle tree

***

### treeOptions?

> `optional` **treeOptions?**: `Options`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1962](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1962)

The Merkle tree options for how to build it
