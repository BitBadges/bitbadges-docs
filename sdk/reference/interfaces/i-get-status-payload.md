---
description: "Chain to check? Defaults to BitBadges poller."
---

# Interface: iGetStatusPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:160](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L160)

## Properties

### chain?

> `optional` **chain?**: `"Thorchain"` \| `"BitBadges"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:167](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L167)

Chain to check? Defaults to BitBadges poller.

***

### withOutOfSyncCheck?

> `optional` **withOutOfSyncCheck?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:164](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L164)

If true, we will check if the indexer is out of sync with the blockchain.
