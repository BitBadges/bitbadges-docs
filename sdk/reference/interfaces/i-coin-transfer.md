---
description: "T extends NumberType"
---

# Interface: iCoinTransfer\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:480](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L480)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### coins

> **coins**: [`iCosmosCoin`](/sdk/reference/interfaces/i-cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:488](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L488)

The coins

***

### overrideFromWithApproverAddress

> **overrideFromWithApproverAddress**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:492](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L492)

Whether or not to override the from address with the approver address.

***

### overrideToWithInitiator

> **overrideToWithInitiator**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:496](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L496)

Whether or not to override the to address with the initiator of the transaction.

***

### to

> **to**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:484](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L484)

The recipient of the coin transfer. This should be a Bech32 BitBadges address.
