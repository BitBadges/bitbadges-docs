---
description: "Client ID for the SIWBB request."
---

# Interface: iExchangeSIWBBAuthorizationCodePayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1995](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1995)

## Properties

### client\_id?

> `optional` **client\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2004](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2004)

Client ID for the SIWBB request.

***

### client\_secret?

> `optional` **client\_secret?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2002](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2002)

Client secret for the SIWBB request.

***

### code?

> `optional` **code?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1997](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1997)

The SIWBB request.

***

### code\_verifier?

> `optional` **code\_verifier?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2013](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2013)

The code verifier for the SIWBB request (if used with PKCE).

***

### grant\_type?

> `optional` **grant\_type?**: `"authorization_code"` \| `"refresh_token"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2008](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2008)

The grant type for the SIWBB request.

***

### options?

> `optional` **options?**: [`VerifySIWBBOptions`](/sdk/reference/interfaces/verify-siwbb-options)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1999](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1999)

We attempt to verify the current status with each request. You can provide additional options for verification here.

***

### redirect\_uri?

> `optional` **redirect\_uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2006](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2006)

The redirect URI for the SIWBB request. Only required if the code was created with a redirect URI.

***

### refresh\_token?

> `optional` **refresh\_token?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:2010](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L2010)

The refresh token to use for the SIWBB request.
