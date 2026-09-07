---
description: "The addresses of the address list. If this is a tracker list, the addresses are the tracker IDs."
---

# Interface: iAddressList

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:146](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L146)

## Extended by

- [`iAddressListDoc`](/sdk/reference/interfaces/i-address-list-doc)

## Properties

### addresses

> **addresses**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:155](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L155)

The addresses of the address list. If this is a tracker list, the addresses are the tracker IDs.

***

### createdBy?

> `optional` **createdBy?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:175](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L175)

The address that created the address list. Handled internally.

***

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:170](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L170)

Arbitrary custom data that can be stored. Leave blank for no custom data.

***

### listId

> **listId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:150](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L150)

The ID of the address list.

***

### uri

> **uri**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:165](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L165)

The URI where to fetch the address list metadata from.

***

### whitelist

> **whitelist**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:160](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L160)

Whether or not to include ONLY the addresses or include all EXCEPT the addresses.
