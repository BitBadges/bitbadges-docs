---
description: "We will display this claim on the authorize screen. Just for display purpses. This is still to be checked by you post-authentication."
---

# Interface: CodeGenQueryParams

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L105)

## Extends

- [`AdditionalQueryParams`](/sdk/reference/interfaces/additional-query-params)

## Properties

### claimId?

> `optional` **claimId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:91](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L91)

We will display this claim on the authorize screen. Just for display purpses. This is still to be checked by you post-authentication.

#### Inherited from

[`AdditionalQueryParams`](/sdk/reference/interfaces/additional-query-params).[`claimId`](/sdk/reference/interfaces/additional-query-params#claimid)

***

### client\_id

> **client\_id**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:113](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L113)

The client ID to use for the SIWBB request. Must match the one in developer portal.

***

### expectVerifySuccess?

> `optional` **expectVerifySuccess?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:99](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L99)

We will expect the claim verification to succeed. If false, we will not let user attempt to sign in.

Note: This is not a replacement for checking the claim on your side because users can manipulate the client-side URL parameters.

#### Inherited from

[`AdditionalQueryParams`](/sdk/reference/interfaces/additional-query-params).[`expectVerifySuccess`](/sdk/reference/interfaces/additional-query-params#expectverifysuccess)

***

### hideIfAlreadyClaimed?

> `optional` **hideIfAlreadyClaimed?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L93)

For the claimId, we will hide the claim if the user has already completed it (successCount >= 1).

#### Inherited from

[`AdditionalQueryParams`](/sdk/reference/interfaces/additional-query-params).[`hideIfAlreadyClaimed`](/sdk/reference/interfaces/additional-query-params#hideifalreadyclaimed)

***

### redirect\_uri?

> `optional` **redirect\_uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:109](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L109)

The redirect URI to redirect to after the user signs in. Must match the one in developer portal.

***

### scope?

> `optional` **scope?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:121](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L121)

The scopes to request (e.g. `completeClaims,approveSignInWithBitBadges`).

***

### state?

> `optional` **state?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:117](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L117)

The state to use for the SIWBB request.
