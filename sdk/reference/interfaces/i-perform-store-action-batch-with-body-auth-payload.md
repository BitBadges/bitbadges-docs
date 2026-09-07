---
description: "Whether to simulate the action"
---

# Interface: iPerformStoreActionBatchWithBodyAuthPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3181](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3181)

## Properties

### \_isSimulation?

> `optional` **\_isSimulation?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3183](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3183)

Whether to simulate the action

***

### actions

> **actions**: `object`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3189](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3189)

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3187](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3187)

The data secret. Needed if you are not signed in as creator. Not applicable to public stores

***

### dynamicDataId

> **dynamicDataId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3185](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3185)

The dynamic data ID
