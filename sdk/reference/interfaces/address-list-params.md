---
description: "Creator address — used as the default manager when manager isn't specified. The CLI passes this through from --creator. If neither manager nor creator is…"
---

# Interface: AddressListParams

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/address-list.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/address-list.ts#L17)

## Properties

### creator?

> `optional` **creator?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/address-list.ts:31](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/address-list.ts#L31)

Creator address — used as the default manager when `manager` isn't
specified. The CLI passes this through from `--creator`. If neither
`manager` nor `creator` is provided, the builder leaves the field
empty and the CLI emit()'s defensive pass will fill it in from the
post-build `creator` it sets on the message itself.

***

### description?

> `optional` **description?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/address-list.ts:22](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/address-list.ts#L22)

***

### image?

> `optional` **image?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/address-list.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/address-list.ts#L21)

***

### manager?

> `optional` **manager?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/address-list.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/address-list.ts#L23)

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/address-list.ts:20](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/address-list.ts#L20)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/address-list.ts:19](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/address-list.ts#L19)

Pre-hosted collection metadata URI. If provided, name/image/description are ignored.
