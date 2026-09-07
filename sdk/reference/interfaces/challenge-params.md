---
description: "Interface for EIP-4361 Challenge - Sign in With Ethereum"
---

# Interface: ChallengeParams\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:45](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L45)

Interface for EIP-4361 Challenge - Sign in With Ethereum

For more information and documentation, view the EIP proposal.

We extend it to support assets.

## Type Parameters

### T

`T` *extends* `NumberType`

## Properties

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:48](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L48)

***

### assetOwnershipRequirements?

> `optional` **assetOwnershipRequirements?**: [`AssetConditionGroup`](/sdk/reference/type-aliases/asset-condition-group)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:64](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L64)

***

### chainId?

> `optional` **chainId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:52](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L52)

***

### domain

> **domain**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:46](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L46)

***

### expirationDate?

> `optional` **expirationDate?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:54](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L54)

***

### issuedAt?

> `optional` **issuedAt?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:53](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L53)

***

### nonce

> **nonce**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:50](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L50)

***

### notBefore?

> `optional` **notBefore?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:55](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L55)

***

### requestId?

> `optional` **requestId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:62](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L62)

Optional EIP-4361 §3 Request ID. Lets the relying party correlate
this challenge with a server-side request. SIWE-aware libraries
parse `Request ID: <value>` between Not Before and Resources.
Mirrors the field added to the underlying `blockin` package.

***

### resources?

> `optional` **resources?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:63](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L63)

***

### statement

> **statement**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:47](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L47)

***

### uri

> **uri**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:49](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L49)

***

### version?

> `optional` **version?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:51](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L51)
