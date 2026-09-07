---
description: "Client ID for the SIWBB request."
---

# Interface: iCreateSIWBBRequestPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1842](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1842)

## Properties

### client\_id

> **client\_id**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1856](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1856)

Client ID for the SIWBB request.

***

### code\_challenge?

> `optional` **code\_challenge?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1865](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1865)

The code challenge for the SIWBB request.

***

### code\_challenge\_method?

> `optional` **code\_challenge\_method?**: `"S256"` \| `"plain"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1867](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1867)

The code challenge method for the SIWBB request.

***

### description?

> `optional` **description?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1851](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1851)

The description of the SIWBB request for display purposes.

***

### image?

> `optional` **image?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1853](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1853)

The image of the SIWBB request for display purposes.

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1849](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1849)

The name of the SIWBB request for display purposes.

***

### redirect\_uri?

> `optional` **redirect\_uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1859](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1859)

Redirect URI if redirected after successful sign-in.

***

### response\_type

> **response\_type**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1844](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1844)

The response type for the SIWBB request.

***

### scopes

> **scopes**: [`OAuthScopeDetails`](/sdk/reference/interfaces/o-auth-scope-details)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1846](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1846)

The scopes to request.

***

### state?

> `optional` **state?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1862](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1862)

State to be passed back to the redirect URI.
