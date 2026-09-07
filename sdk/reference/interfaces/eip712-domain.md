---
description: "EIP-712 type definitions, mirrored from github.com/ethereum/go-ethereum/signer/core/apitypes."
---

# Interface: EIP712Domain

Defined in: [packages/bitbadgesjs-sdk/src/eip712/types.ts:10](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/types.ts#L10)

EIP-712 type definitions, mirrored from
`github.com/ethereum/go-ethereum/signer/core/apitypes`.

Field schema matches the canonical Cosmos EVM Go reference at
`cosmos/evm/ethereum/eip712/`. Anything that diverges here will fail
chain-side verification, so changes must be benchmarked against the
Go reference.

## Properties

### chainId

> **chainId**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/types.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/types.ts#L13)

***

### name

> **name**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/types.ts:11](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/types.ts#L11)

***

### salt

> **salt**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/types.ts:15](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/types.ts#L15)

***

### verifyingContract

> **verifyingContract**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/types.ts:14](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/types.ts#L14)

***

### version

> **version**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/types.ts:12](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/types.ts#L12)
