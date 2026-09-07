---
description: "The original message that was signed."
---

# Interface: iVerifySignInPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1117](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1117)

## Extended by

- [`iGenericBlockinVerifyPayload`](/sdk/reference/interfaces/i-generic-blockin-verify-payload)

## Properties

### message

> **message**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1121](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1121)

The original message that was signed.

***

### publicKey?

> `optional` **publicKey?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1131](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1131)

Required for some chains (Cosmos) to verify signature. The public key of the signer.

***

### signature

> **signature**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1126](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1126)

The signature of the message
