---
description: "We will display this claim on the authorize screen. Just for display purpses. This is still to be checked by you post-authentication."
---

# Interface: AdditionalQueryParams

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:89](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L89)

## Extended by

- [`CodeGenQueryParams`](/sdk/reference/interfaces/code-gen-query-params)

## Properties

### claimId?

> `optional` **claimId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:91](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L91)

We will display this claim on the authorize screen. Just for display purpses. This is still to be checked by you post-authentication.

***

### expectVerifySuccess?

> `optional` **expectVerifySuccess?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:99](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L99)

We will expect the claim verification to succeed. If false, we will not let user attempt to sign in.

Note: This is not a replacement for checking the claim on your side because users can manipulate the client-side URL parameters.

***

### hideIfAlreadyClaimed?

> `optional` **hideIfAlreadyClaimed?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/blockin.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/blockin.ts#L93)

For the claimId, we will hide the claim if the user has already completed it (successCount >= 1).
