---
description: "Manager address — the only address allowed to mint (matches the collection's custom-2fa-mint approval initiatedByListId)."
---

# Interface: MintCustom2FAParams

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts:199](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts#L199)

## Properties

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts:203](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts#L203)

***

### creator

> **creator**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts:202](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts#L202)

Manager address — the only address allowed to mint (matches the
 collection's `custom-2fa-mint` approval `initiatedByListId`).

***

### expirationMs?

> `optional` **expirationMs?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts:207](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts#L207)

Token lifetime in ms. Default 5 min (`CUSTOM_2FA_TOKEN_EXPIRATION_MS`).

***

### recipients

> **recipients**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts:205](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts#L205)

bb1... recipients to issue a 2FA token to (token id 1, amount 1).
