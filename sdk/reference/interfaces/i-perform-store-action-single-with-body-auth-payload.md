---
description: "Whether to simulate the action"
---

# Interface: iPerformStoreActionSingleWithBodyAuthPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3156](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3156)

## Properties

### \_isSimulation?

> `optional` **\_isSimulation?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3158](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3158)

Whether to simulate the action

***

### actionName

> **actionName**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3164](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3164)

The name of the action to perform

***

### dataSecret?

> `optional` **dataSecret?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3162](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3162)

The data secret. Needed if you are not signed in as creator. Not applicable to public stores

***

### dynamicDataId

> **dynamicDataId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3160](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3160)

The dynamic data ID

***

### payload

> **payload**: [`iPerformStoreActionPayload`](/sdk/reference/interfaces/i-perform-store-action-payload)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:3166](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L3166)

The payload for this specific action
