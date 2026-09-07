---
description: "Chain to check? Defaults to BitBadges poller."
---

# Interface: iGetStatusPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:159](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L159)

## Properties

### chain?

> `optional` **chain?**: `"Thorchain"` \| `"BitBadges"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:166](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L166)

Chain to check? Defaults to BitBadges poller.

***

### withOutOfSyncCheck?

> `optional` **withOutOfSyncCheck?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:163](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L163)

If true, we will check if the indexer is out of sync with the blockchain.
