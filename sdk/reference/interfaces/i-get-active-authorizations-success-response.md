---
description: "T extends NumberType"
---

# Interface: iGetActiveAuthorizationsSuccessResponse\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2159](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2159)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### authorizations

> **authorizations**: [`iAccessTokenDoc`](/sdk/reference/interfaces/i-access-token-doc)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2160](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2160)

***

### developerApps

> **developerApps**: ([`iDeveloperAppDoc`](/sdk/reference/interfaces/i-developer-app-doc)\<`T`\> \| `undefined`)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2166](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2166)

Developer app docs for each authorization.

Undefined if deleted.
