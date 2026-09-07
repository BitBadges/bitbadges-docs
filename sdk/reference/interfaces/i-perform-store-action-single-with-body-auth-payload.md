---
description: "Whether to simulate the action"
---

# Interface: iPerformStoreActionSingleWithBodyAuthPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3155](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3155)

## Properties

### \_isSimulation?

> `optional` **\_isSimulation?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3157)

Whether to simulate the action

***

### actionName

> **actionName**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3163](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3163)

The name of the action to perform

***

### dataSecret?

> `optional` **dataSecret?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3161)

The data secret. Needed if you are not signed in as creator. Not applicable to public stores

***

### dynamicDataId

> **dynamicDataId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3159](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3159)

The dynamic data ID

***

### payload

> **payload**: [`iPerformStoreActionPayload`](/sdk/reference/interfaces/i-perform-store-action-payload)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3165](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3165)

The payload for this specific action
