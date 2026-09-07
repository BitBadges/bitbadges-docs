---
description: "Manager address allowed to initiate mints. The CLI passes this through from --creator. Required: the FE-canonical preset (builder/presets/custom-2fa.ts) sets…"
---

# Interface: Custom2FAParams

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts:18](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts#L18)

## Properties

### burnable?

> `optional` **burnable?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts:24](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts#L24)

***

### creator?

> `optional` **creator?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts#L33)

Manager address allowed to initiate mints. The CLI passes this
through from --creator. Required: the FE-canonical preset
(builder/presets/custom-2fa.ts) sets the mint approval's
`initiatedByListId` to this address. Without it, anyone could mint a
2FA token to anyone, breaking the standard's security model.

***

### description?

> `optional` **description?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts#L23)

***

### image?

> `optional` **image?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts:22](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts#L22)

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts#L21)

***

### transferable?

> `optional` **transferable?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts#L25)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts:20](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/custom-2fa.ts#L20)

Pre-hosted collection metadata URI. If provided, name/image/description are ignored.
