---
description: "T extends NumberType"
---

# Interface: iSiwbbChallenge\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:11](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L11)

## Extended by

- [`iExchangeSIWBBAuthorizationCodeSuccessResponse`](/sdk/reference/interfaces/i-exchange-siwbb-authorization-code-success-response)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L13)

The user's address

***

### bitbadgesAddress

> **bitbadgesAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:22](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L22)

The converted BitBadges address of params.address. This can be used as the
unique identifier for the user (e.g. avoid duplicate sign ins from equivalent 0x and bb1 addresses).

***

### chain

> **chain**: [`SupportedChain`](/sdk/reference/enumerations/supported-chain)

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:15](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L15)

The chain of the address

***

### ownershipRequirements?

> `optional` **ownershipRequirements?**: [`AssetConditionGroup`](/sdk/reference/type-aliases/asset-condition-group)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L17)

The ownership requirements for the user

***

### verificationResponse?

> `optional` **verificationResponse?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L27)

Verification response

#### errorMessage?

> `optional` **errorMessage?**: `string`

Returns the response message returned from verification.

#### success

> **success**: `boolean`

Returns whether the current (message, signature) pair is valid and verified (i.e. signature is valid and any assets are owned).
