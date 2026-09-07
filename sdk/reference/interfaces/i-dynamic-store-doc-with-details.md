---
description: "DynamicStoreDocWithDetails extends DynamicStoreDoc with populated metadata."
---

# Interface: iDynamicStoreDocWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2094](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2094)

DynamicStoreDocWithDetails extends DynamicStoreDoc with populated metadata.

## Extends

- [`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L13)

A unique stringified document ID

#### Inherited from

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`_docId`](/sdk/reference/interfaces/i-dynamic-store-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L16)

A unique document ID (Mongo DB ObjectID)

#### Inherited from

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`_id`](/sdk/reference/interfaces/i-dynamic-store-doc#_id)

***

### createdBy

> **createdBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2082](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2082)

#### Inherited from

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`createdBy`](/sdk/reference/interfaces/i-dynamic-store-doc#createdby)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2086](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2086)

#### Inherited from

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`customData`](/sdk/reference/interfaces/i-dynamic-store-doc#customdata)

***

### defaultValue

> **defaultValue**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2083](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2083)

#### Inherited from

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`defaultValue`](/sdk/reference/interfaces/i-dynamic-store-doc#defaultvalue)

***

### globalEnabled

> **globalEnabled**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2084](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2084)

#### Inherited from

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`globalEnabled`](/sdk/reference/interfaces/i-dynamic-store-doc#globalenabled)

***

### metadata?

> `optional` **metadata?**: [`iMetadata`](/sdk/reference/interfaces/i-metadata)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2095](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2095)

***

### storeId

> **storeId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2081](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2081)

#### Inherited from

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`storeId`](/sdk/reference/interfaces/i-dynamic-store-doc#storeid)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2085](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2085)

#### Inherited from

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`uri`](/sdk/reference/interfaces/i-dynamic-store-doc#uri)
