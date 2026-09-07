---
description: "T extends NumberType"
---

# Interface: iCollectionDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:401](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L401)

## Extends

- [`Doc`](/sdk/reference/interfaces/doc)

## Extended by

- [`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection)

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

### aliasPaths

> **aliasPaths**: [`iAliasPath`](/sdk/reference/interfaces/i-alias-path)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:437](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L437)

The alias (non-wrapping) paths for the collection

***

### collectionApprovals

> **collectionApprovals**: [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:415](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L415)

The collection approved transfers timeline

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:403](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L403)

The collection ID

***

### collectionMetadata

> **collectionMetadata**: [`iCollectionMetadata`](/sdk/reference/interfaces/i-collection-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:405](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L405)

The collection metadata

***

### collectionPermissions

> **collectionPermissions**: [`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:413](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L413)

The collection permissions

***

### cosmosCoinWrapperPaths

> **cosmosCoinWrapperPaths**: [`iCosmosCoinWrapperPath`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:435](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L435)

The IBC wrapper paths for the collection

***

### createdBlock

> **createdBlock**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:425](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L425)

The block number when this collection was created

***

### createdBy

> **createdBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:423](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L423)

The BitBadges address of the user who created this collection

***

### createdTimestamp

> **createdTimestamp**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:427](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L427)

The timestamp when this collection was created (milliseconds since epoch)

***

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:409](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L409)

The custom data

***

### defaultBalances

> **defaultBalances**: [`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:421](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L421)

The default balances for users who have not interacted with the collection yet. Only used if collection has "Standard" balance type.

***

### invariants

> **invariants**: [`iCollectionInvariants`](/sdk/reference/interfaces/i-collection-invariants)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:439](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L439)

Collection-level invariants that cannot be broken. These are set upon genesis and cannot be modified.

***

### isArchived

> **isArchived**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:419](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L419)

The is archived flag

***

### manager

> **manager**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:411](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L411)

The manager

***

### mintEscrowAddress

> **mintEscrowAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:433](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L433)

Mint escrow address

***

### standards

> **standards**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:417](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L417)

The standards

***

### tokenMetadata

> **tokenMetadata**: [`iTokenMetadata`](/sdk/reference/interfaces/i-token-metadata)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:407](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L407)

The token metadata

***

### updateHistory

> **updateHistory**: [`iUpdateHistory`](/sdk/reference/interfaces/i-update-history)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:429](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L429)

The update history of this collection

***

### validTokenIds

> **validTokenIds**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:431](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L431)

Valid token IDs for the collection
