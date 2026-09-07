---
description: "The aunts of the merkle proof."
---

# Interface: iMerkleProof

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:645](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L645)

## Properties

### aunts

> **aunts**: [`iMerklePathItem`](/sdk/reference/interfaces/i-merkle-path-item)[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:649](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L649)

The aunts of the merkle proof.

***

### leaf

> **leaf**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:654](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L654)

The leaf of the merkle proof. If useCreatorAddressAsLeaf is true, this will be populated with the creator BitBadges address.

***

### leafSignature

> **leafSignature**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:659](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L659)

The signature for the leaf. With an ETH message signature, sign(leaf + "-" + intendedBitBadgesAddress).
