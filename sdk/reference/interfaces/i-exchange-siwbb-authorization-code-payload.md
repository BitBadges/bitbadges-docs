---
description: "Client ID for the SIWBB request."
---

# Interface: iExchangeSIWBBAuthorizationCodePayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1994](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1994)

## Properties

### client\_id?

> `optional` **client\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2003](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2003)

Client ID for the SIWBB request.

***

### client\_secret?

> `optional` **client\_secret?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2001](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2001)

Client secret for the SIWBB request.

***

### code?

> `optional` **code?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1996](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1996)

The SIWBB request.

***

### code\_verifier?

> `optional` **code\_verifier?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2012](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2012)

The code verifier for the SIWBB request (if used with PKCE).

***

### grant\_type?

> `optional` **grant\_type?**: `"authorization_code"` \| `"refresh_token"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2007](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2007)

The grant type for the SIWBB request.

***

### options?

> `optional` **options?**: [`VerifySIWBBOptions`](/sdk/reference/interfaces/verify-siwbb-options)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1998](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1998)

We attempt to verify the current status with each request. You can provide additional options for verification here.

***

### redirect\_uri?

> `optional` **redirect\_uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2005](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2005)

The redirect URI for the SIWBB request. Only required if the code was created with a redirect URI.

***

### refresh\_token?

> `optional` **refresh\_token?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2009](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2009)

The refresh token to use for the SIWBB request.
