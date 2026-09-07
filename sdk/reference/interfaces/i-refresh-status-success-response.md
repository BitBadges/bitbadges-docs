---
description: "T extends NumberType"
---

# Interface: iRefreshStatusSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:481](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L481)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### errorDocs

> **errorDocs**: [`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:489](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L489)

Array of error documents corresponding to the collection.

***

### inQueue

> **inQueue**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:485](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L485)

Boolean indicating if the collection is currently in the queue.

***

### refreshDoc

> **refreshDoc**: [`iRefreshDoc`](/sdk/reference/interfaces/i-refresh-doc)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts:493](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/collections.ts#L493)

The status information corresponding to the collection.
