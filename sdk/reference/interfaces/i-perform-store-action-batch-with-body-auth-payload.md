---
description: "Whether to simulate the action"
---

# Interface: iPerformStoreActionBatchWithBodyAuthPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3182](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3182)

## Properties

### \_isSimulation?

> `optional` **\_isSimulation?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3184](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3184)

Whether to simulate the action

***

### actions

> **actions**: `object`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3190](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3190)

The actions to perform

#### actionName

> **actionName**: `string`

The name of the action to perform

#### payload

> **payload**: [`iPerformStoreActionPayload`](/sdk/reference/interfaces/i-perform-store-action-payload)

The payload for this specific action

***

### dataSecret?

> `optional` **dataSecret?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3188](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3188)

The data secret. Needed if you are not signed in as creator. Not applicable to public stores

***

### dynamicDataId

> **dynamicDataId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3186](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3186)

The dynamic data ID
