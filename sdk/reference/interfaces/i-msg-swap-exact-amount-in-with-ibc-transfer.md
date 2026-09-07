---
description: "T extends NumberType"
---

# Interface: iMsgSwapExactAmountInWithIBCTransfer\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/interfaces.ts:64](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/interfaces.ts#L64)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### affiliates

> **affiliates**: [`iAffiliate`](/sdk/reference/interfaces/i-affiliate)[]

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/interfaces.ts:71](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/interfaces.ts#L71)

affiliates are fee recipients that receive fees calculated from token_out_min_amount

***

### ibcTransferInfo

> **ibcTransferInfo**: [`iIBCTransferInfo`](/sdk/reference/interfaces/i-ibc-transfer-info)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/interfaces.ts:69](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/interfaces.ts#L69)

***

### routes

> **routes**: [`iSwapAmountInRoute`](/sdk/reference/interfaces/i-swap-amount-in-route)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/interfaces.ts:66](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/interfaces.ts#L66)

***

### sender

> **sender**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/interfaces.ts:65](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/interfaces.ts#L65)

***

### tokenIn

> **tokenIn**: [`iCosmosCoin`](/sdk/reference/interfaces/i-cosmos-coin)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/interfaces.ts:67](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/interfaces.ts#L67)

***

### tokenOutMinAmount

> **tokenOutMinAmount**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/interfaces.ts:68](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/interfaces.ts#L68)
