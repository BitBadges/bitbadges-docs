---
description: "The claims to create."
---

# Interface: iCreateClaimPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2744](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2744)

## Properties

### claims

> **claims**: [`CreateClaimRequest`](/sdk/reference/type-aliases/create-claim-request)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2756](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2756)

The claims to create.

By default, it will create standalone (non-test claims) or  collection linked claims if the
corresponding fields are specified in the claim.

Note that collection / list linked claims require the proper permissions and have special setup
required.

For test claims, you must specify the `testClaims` field to be true.

***

### testClaims?

> `optional` **testClaims?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2762](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2762)

Create test claims (e.g. the claim tester). Used for frontend testing. Test claims are auto-deleted
after the browser session is terminated and do not show up in search results.
