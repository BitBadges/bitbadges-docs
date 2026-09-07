---
description: "DynamicStoreDocWithDetails extends DynamicStoreDoc with populated metadata."
---

# Interface: iDynamicStoreDocWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2060](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2060)

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2048](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2048)

#### Inherited from

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`createdBy`](/sdk/reference/interfaces/i-dynamic-store-doc#createdby)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2052](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2052)

#### Inherited from

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`customData`](/sdk/reference/interfaces/i-dynamic-store-doc#customdata)

***

### defaultValue

> **defaultValue**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2049](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2049)

#### Inherited from

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`defaultValue`](/sdk/reference/interfaces/i-dynamic-store-doc#defaultvalue)

***

### globalEnabled

> **globalEnabled**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2050](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2050)

#### Inherited from

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`globalEnabled`](/sdk/reference/interfaces/i-dynamic-store-doc#globalenabled)

***

### metadata?

> `optional` **metadata?**: [`iMetadata`](/sdk/reference/interfaces/i-metadata)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2061](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2061)

***

### storeId

> **storeId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2047](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2047)

#### Inherited from

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`storeId`](/sdk/reference/interfaces/i-dynamic-store-doc#storeid)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:2051](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L2051)

#### Inherited from

[`iDynamicStoreDoc`](/sdk/reference/interfaces/i-dynamic-store-doc).[`uri`](/sdk/reference/interfaces/i-dynamic-store-doc#uri)
