---
description: "High-level helper that mirrors the inputs createTransactionWithMultipleMessages takes and returns the EIP-712 typed-data ready for an EVM wallet."
---

# Interface: BuildEIP712Args

Defined in: [packages/bitbadgesjs-sdk/src/eip712/build.ts:18](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/build.ts#L18)

High-level helper that mirrors the inputs `createTransactionWithMultipleMessages`
takes and returns the EIP-712 typed-data ready for an EVM wallet.

Same Amino encoding pipeline that powers `legacyAmino.signBytes` — so any
Msg type with an Amino converter registered works automatically. Adding
a new Msg type to the Amino registry adds it to this builder for free.

## Properties

### accountNumber

> **accountNumber**: [`Uint64Like`](/sdk/reference/type-aliases/uint64-like)

Defined in: [packages/bitbadgesjs-sdk/src/eip712/build.ts:28](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/build.ts#L28)

***

### cosmosChainId

> **cosmosChainId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/build.ts:22](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/build.ts#L22)

Cosmos chain-id string, e.g. "bitbadges-1" or "bitbadges-2".

***

### eip155ChainId

> **eip155ChainId**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/build.ts:24](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/build.ts#L24)

EIP-155 numeric chain id (50024 mainnet, 50025 testnet, 90123 local).

***

### fee

> **fee**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/build.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/build.ts#L25)

#### amount

> **amount**: `string`

#### denom

> **denom**: `string`

#### gas

> **gas**: `number`

***

### memo?

> `optional` **memo?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/build.ts:26](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/build.ts#L26)

***

### messages

> **messages**: `any`[]

Defined in: [packages/bitbadgesjs-sdk/src/eip712/build.ts:20](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/build.ts#L20)

Proto messages (raw bufbuild Message instances or pre-wrapped MessageGenerated).

***

### sequence

> **sequence**: [`Uint64Like`](/sdk/reference/type-aliases/uint64-like)

Defined in: [packages/bitbadgesjs-sdk/src/eip712/build.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/build.ts#L27)
