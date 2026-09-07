---
description: "T extends NumberType"
---

# Interface: iExchangeSIWBBAuthorizationCodeSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2065](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2065)

## Extends

- [`iSiwbbChallenge`](/sdk/reference/interfaces/i-siwbb-challenge)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### access\_token

> **access\_token**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2069](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2069)

The access token to use for the SIWBB request.

***

### access\_token\_expires\_at?

> `optional` **access\_token\_expires\_at?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2075](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2075)

The time at which the access token expires.

***

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L13)

The user's address

#### Inherited from

[`iSiwbbChallenge`](/sdk/reference/interfaces/i-siwbb-challenge).[`address`](/sdk/reference/interfaces/i-siwbb-challenge#address)

***

### bitbadgesAddress

> **bitbadgesAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:22](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L22)

The converted BitBadges address of params.address. This can be used as the
unique identifier for the user (e.g. avoid duplicate sign ins from equivalent 0x and bb1 addresses).

#### Inherited from

[`iSiwbbChallenge`](/sdk/reference/interfaces/i-siwbb-challenge).[`bitbadgesAddress`](/sdk/reference/interfaces/i-siwbb-challenge#bitbadgesaddress)

***

### chain

> **chain**: [`SupportedChain`](/sdk/reference/enumerations/supported-chain)

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:15](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L15)

The chain of the address

#### Inherited from

[`iSiwbbChallenge`](/sdk/reference/interfaces/i-siwbb-challenge).[`chain`](/sdk/reference/interfaces/i-siwbb-challenge#chain)

***

### ownershipRequirements?

> `optional` **ownershipRequirements?**: [`AssetConditionGroup`](/sdk/reference/type-aliases/asset-condition-group)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L17)

The ownership requirements for the user

#### Inherited from

[`iSiwbbChallenge`](/sdk/reference/interfaces/i-siwbb-challenge).[`ownershipRequirements`](/sdk/reference/interfaces/i-siwbb-challenge#ownershiprequirements)

***

### refresh\_token?

> `optional` **refresh\_token?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2078](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2078)

The refresh token to use for the SIWBB request.

***

### refresh\_token\_expires\_at?

> `optional` **refresh\_token\_expires\_at?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2081](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2081)

The time at which the refresh token expires.

***

### token\_type

> **token\_type**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2072](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2072)

The token type

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

#### Inherited from

[`iSiwbbChallenge`](/sdk/reference/interfaces/i-siwbb-challenge).[`verificationResponse`](/sdk/reference/interfaces/i-siwbb-challenge#verificationresponse)
