---
description: "Generic route to verify any SIWBB request. Does not sign you in with the API. Used for custom SIWBB implementations."
---

# Interface: iGenericBlockinVerifyPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1820](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1820)

Generic route to verify any SIWBB request. Does not sign you in with the API. Used for custom SIWBB implementations.

## Extends

- [`iVerifySignInPayload`](/sdk/reference/interfaces/i-verify-sign-in-payload)

## Properties

### message

> **message**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1121](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1121)

The original message that was signed.

#### Inherited from

[`iVerifySignInPayload`](/sdk/reference/interfaces/i-verify-sign-in-payload).[`message`](/sdk/reference/interfaces/i-verify-sign-in-payload#message)

***

### options?

> `optional` **options?**: [`VerifyChallengeOptions`](/sdk/reference/type-aliases/verify-challenge-options)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1824](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1824)

Additional options for verifying the challenge.

***

### publicKey?

> `optional` **publicKey?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1131](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1131)

Required for some chains (Cosmos) to verify signature. The public key of the signer.

#### Inherited from

[`iVerifySignInPayload`](/sdk/reference/interfaces/i-verify-sign-in-payload).[`publicKey`](/sdk/reference/interfaces/i-verify-sign-in-payload#publickey)

***

### signature

> **signature**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1126](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1126)

The signature of the message

#### Inherited from

[`iVerifySignInPayload`](/sdk/reference/interfaces/i-verify-sign-in-payload).[`signature`](/sdk/reference/interfaces/i-verify-sign-in-payload#signature)
