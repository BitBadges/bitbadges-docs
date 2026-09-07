---
description: "The original message that was signed."
---

# Interface: iVerifySignInPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1116](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1116)

## Extended by

- [`iGenericBlockinVerifyPayload`](/sdk/reference/interfaces/i-generic-blockin-verify-payload)

## Properties

### message

> **message**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1120](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1120)

The original message that was signed.

***

### publicKey?

> `optional` **publicKey?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1130](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1130)

Required for some chains (Cosmos) to verify signature. The public key of the signer.

***

### signature

> **signature**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1125](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1125)

The signature of the message
