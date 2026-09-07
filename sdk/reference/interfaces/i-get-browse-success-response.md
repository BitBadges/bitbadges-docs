---
description: "T extends NumberType"
---

# Interface: iGetBrowseSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1503](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1503)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### activity

> **activity**: [`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1506](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1506)

***

### claimActivity?

> `optional` **claimActivity?**: [`iClaimActivityDoc`](/sdk/reference/interfaces/i-claim-activity-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1514](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1514)

***

### claims?

> `optional` **claims?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1513](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1513)

#### Index Signature

\[`category`: `string`\]: [`iClaimDetails`](/sdk/reference/interfaces/i-claim-details)\<`T`\>[]

***

### collections

> **collections**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1504](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1504)

#### Index Signature

\[`category`: `string`\]: [`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection)\<`T`\>[]

***

### pointsActivity?

> `optional` **pointsActivity?**: [`iPointsActivityDoc`](/sdk/reference/interfaces/i-points-activity-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1515](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1515)

***

### profiles

> **profiles**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1505](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1505)

#### Index Signature

\[`category`: `string`\]: [`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info)\<`T`\>[]

***

### tokens

> **tokens**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1507](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1507)

#### Index Signature

\[`category`: `string`\]: `object`[]

***

### utilityPages?

> `optional` **utilityPages?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1516](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1516)

#### Index Signature

\[`category`: `string`\]: [`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc)\<`T`\>[]
