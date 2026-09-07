---
description: "If true, we will fetch private parameters for any claims / approvals. Must be creator."
---

# Interface: iGetBalanceByAddressPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:223](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L223)

## Properties

### fetchPrivateParams?

> `optional` **fetchPrivateParams?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:229](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L229)

If true, we will fetch private parameters for any claims / approvals. Must be creator.

This is only applicable to incoming / outgoing approvals with claims.

***

### forceful?

> `optional` **forceful?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:234](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L234)

If true, we will forcefully fetch the balance even if it is already cached. Only applicable to non-indexed / on-demand collections.
