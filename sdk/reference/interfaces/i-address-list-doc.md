---
description: "T extends NumberType"
---

# Interface: iAddressListDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:740](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L740)

## Extends

- [`iAddressList`](/sdk/reference/interfaces/i-address-list).[`Doc`](/sdk/reference/interfaces/doc)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L13)

A unique stringified document ID

#### Inherited from

[`Doc`](/sdk/reference/interfaces/doc).[`_docId`](/sdk/reference/interfaces/doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L16)

A unique document ID (Mongo DB ObjectID)

#### Inherited from

[`Doc`](/sdk/reference/interfaces/doc).[`_id`](/sdk/reference/interfaces/doc#_id)

***

### addresses

> **addresses**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:155](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L155)

The addresses of the address list. If this is a tracker list, the addresses are the tracker IDs.

#### Inherited from

[`iAddressList`](/sdk/reference/interfaces/i-address-list).[`addresses`](/sdk/reference/interfaces/i-address-list#addresses)

***

### createdBlock

> **createdBlock**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:748](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L748)

The block number when this list was created

***

### createdBy

> **createdBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:742](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L742)

The BitBadges address of the user who created this list

#### Overrides

[`iAddressList`](/sdk/reference/interfaces/i-address-list).[`createdBy`](/sdk/reference/interfaces/i-address-list#createdby)

***

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:170](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L170)

Arbitrary custom data that can be stored. Leave blank for no custom data.

#### Inherited from

[`iAddressList`](/sdk/reference/interfaces/i-address-list).[`customData`](/sdk/reference/interfaces/i-address-list#customdata)

***

### lastUpdated

> **lastUpdated**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:750](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L750)

The timestamp of when this list was last updated (milliseconds since epoch)

***

### listId

> **listId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:150](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L150)

The ID of the address list.

#### Inherited from

[`iAddressList`](/sdk/reference/interfaces/i-address-list).[`listId`](/sdk/reference/interfaces/i-address-list#listid)

***

### managedBy

> **managedBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:744](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L744)

The BitBadges address of the user who is currently managing this

***

### nsfw?

> `optional` **nsfw?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:752](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L752)

The NSFW reason if this list is NSFW

#### reason

> **reason**: `string`

***

### reported?

> `optional` **reported?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:754](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L754)

The reported reason if this list is reported

#### reason

> **reason**: `string`

***

### updateHistory

> **updateHistory**: [`iUpdateHistory`](/sdk/reference/interfaces/i-update-history)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:746](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L746)

The update history of this list

***

### uri

> **uri**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:165](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L165)

The URI where to fetch the address list metadata from.

#### Inherited from

[`iAddressList`](/sdk/reference/interfaces/i-address-list).[`uri`](/sdk/reference/interfaces/i-address-list#uri)

***

### whitelist

> **whitelist**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/core.ts:160](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/core.ts#L160)

Whether or not to include ONLY the addresses or include all EXCEPT the addresses.

#### Inherited from

[`iAddressList`](/sdk/reference/interfaces/i-address-list).[`whitelist`](/sdk/reference/interfaces/i-address-list#whitelist)
