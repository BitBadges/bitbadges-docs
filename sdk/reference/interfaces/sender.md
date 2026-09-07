---
description: "Sender represents a Cosmos SDK Transaction signer."
---

# Interface: Sender

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/common.ts:72](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/common.ts#L72)

Sender represents a Cosmos SDK Transaction signer.

## Remarks

A sender object is used to populate the Cosmos SDK's SignerInfo field,
which is used to declare transaction signers.

## Properties

### accountAddress

> **accountAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/common.ts:73](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/common.ts#L73)

***

### accountNumber

> **accountNumber**: [`Uint64Like`](/sdk/reference/type-aliases/uint64-like)

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/common.ts:75](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/common.ts#L75)

***

### pubkey

> **pubkey**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/common.ts:76](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/common.ts#L76)

***

### sequence

> **sequence**: [`Uint64Like`](/sdk/reference/type-aliases/uint64-like)

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/common.ts:74](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/common.ts#L74)
