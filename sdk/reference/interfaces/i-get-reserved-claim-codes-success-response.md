---
description: "The leaf signatures for the reserved claim codes to prove address <-> leaf mapping."
---

# Interface: iGetReservedClaimCodesSuccessResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:791](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L791)

## Properties

### leafSignatures?

> `optional` **leafSignatures?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:802](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L802)

The leaf signatures for the reserved claim codes to prove address \<-> leaf mapping.

***

### reservedCodes?

> `optional` **reservedCodes?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:797](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L797)

The previously reserved claim codes for the user. These are
what are used in the eventual on-chain merkle proof to complete
the transaction.
