---
description: "Codes"
---

# Interface: iChallengeDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1948](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1948)

## Examples

```ts
Codes
1. Generate N codes privately
2. Hash each code
3. Store the hashed codes publicly on IPFS via this struct
4. When a user enters a code, we hash it and check if it matches any of the hashed codes. This way, the codes are never stored publicly on IPFS and only known by the generator of the codes.
```

```ts
Whitelist
For storing a public whitelist of addresses (with useCreatorAddressAsLeaf = true), hashing complicates everything because the whitelist can be stored publicly.
1. Generate N whitelist addresses
2. Store the addresses publicly on IPFS via this struct
3. When a user enters an address, we check if it matches any of the addresses.
```

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### currCode?

> `optional` **currCode?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1965](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1965)

The current code being used for the challenge. Used behind the scenes

***

### isHashed

> **isHashed**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1952](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1952)

True if the leaves are hashed. Hash(preimage[i]) = leaves[i]

***

### leaves

> **leaves**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1950](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1950)

The leaves of the Merkle tree. Leaves should be considered public. Use preimages for the private codes + isHashed. For whitelist trees, these can be the plaintext BitBadges addresses.

***

### numLeaves?

> `optional` **numLeaves?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1963](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1963)

The number of leaves in the Merkle tree. This takes priority over leaves.length if defined (used for buffer time between leaf generation and leaf length select)

***

### preimages?

> `optional` **preimages?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1955](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1955)

The preimages of the leaves (only used if isHashed = true). Oftentimes, this is used for private codes so should not be present when user-facing.

***

### seedCode?

> `optional` **seedCode?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1957](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1957)

Seed code for generating the leaves

***

### tree?

> `optional` **tree?**: `MerkleTree`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1959](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1959)

The Merkle tree

***

### treeOptions?

> `optional` **treeOptions?**: `Options`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1961](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1961)

The Merkle tree options for how to build it
