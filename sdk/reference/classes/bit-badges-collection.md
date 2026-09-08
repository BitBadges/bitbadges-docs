---
description: "BitBadgesCollection is the type for collections returned by the BitBadges API. It extends the base CollectionDoc type and adds additional accompanying…"
---

# Class: BitBadgesCollection\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:204](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L204)

BitBadgesCollection is the type for collections returned by the BitBadges API. It extends the base CollectionDoc type
and adds additional accompanying Docrmation such as metadata, activity, balances, preferred chain, etc.

## Extends

- [`CollectionDoc`](/sdk/reference/classes/collection-doc)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection)\<`T`\>
- [`CustomType`](/sdk/reference/interfaces/custom-type)\<`BitBadgesCollection`\<`T`\>\>

## Constructors

### Constructor

> **new BitBadgesCollection**\<`T`\>(`data`): `BitBadgesCollection`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:256](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L256)

#### Parameters

##### data

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection)\<`T`\>

#### Returns

`BitBadgesCollection`\<`T`\>

#### Overrides

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`constructor`](/sdk/reference/classes/collection-doc#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:353](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L353)

A unique stringified document ID

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`_docId`](/sdk/reference/interfaces/i-bit-badges-collection#_docid)

#### Inherited from

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`_docId`](/sdk/reference/classes/collection-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:354](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L354)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`_id`](/sdk/reference/interfaces/i-bit-badges-collection#_id)

#### Inherited from

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`_id`](/sdk/reference/classes/collection-doc#_id)

***

### activity

> **activity**: [`TransferActivityDoc`](/sdk/reference/classes/transfer-activity-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:214](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L214)

The fetched activity for this collection. Returned collections will only fetch the current page. Use the pagination to fetch more. To be used in conjunction with views.

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`activity`](/sdk/reference/interfaces/i-bit-badges-collection#activity)

***

### aliasPaths

> **aliasPaths**: [`AliasPathWithDetails`](/sdk/reference/classes/alias-path-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:242](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L242)

The alias (non-wrapping) paths for the collection, with off-chain metadata populated.

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`aliasPaths`](/sdk/reference/interfaces/i-bit-badges-collection#aliaspaths)

#### Overrides

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`aliasPaths`](/sdk/reference/classes/collection-doc#aliaspaths)

***

### approvalTrackers

> **approvalTrackers**: [`ApprovalTrackerDoc`](/sdk/reference/classes/approval-tracker-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:217](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L217)

The fetched approval trackers for this collection. Returned collections will only fetch the current page. Use the pagination to fetch more. To be used in conjunction with views.

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`approvalTrackers`](/sdk/reference/interfaces/i-bit-badges-collection#approvaltrackers)

***

### challengeTrackers

> **challengeTrackers**: [`MerkleChallengeTrackerDoc`](/sdk/reference/classes/merkle-challenge-tracker-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:216](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L216)

The fetched merkle challenge trackers for this collection. Returned collections will only fetch the current page. Use the pagination to fetch more. To be used in conjunction with views.

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`challengeTrackers`](/sdk/reference/interfaces/i-bit-badges-collection#challengetrackers)

***

### claims

> **claims**: [`ClaimDetails`](/sdk/reference/classes/claim-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:221](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L221)

Details about any off-chain claims for this collection. Only applicable when outsourced to BitBadges.

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`claims`](/sdk/reference/interfaces/i-bit-badges-collection#claims)

***

### collectionApprovals

> **collectionApprovals**: [`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:208](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L208)

The collection approvals for this collection, with off-chain metadata populated.

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`collectionApprovals`](/sdk/reference/interfaces/i-bit-badges-collection#collectionapprovals)

#### Overrides

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`collectionApprovals`](/sdk/reference/classes/collection-doc#collectionapprovals)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:355](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L355)

The collection ID

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`collectionId`](/sdk/reference/interfaces/i-bit-badges-collection#collectionid)

#### Inherited from

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`collectionId`](/sdk/reference/classes/collection-doc#collectionid)

***

### collectionMetadata

> **collectionMetadata**: [`CollectionMetadataDetails`](/sdk/reference/classes/collection-metadata-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:212](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L212)

The collection metadata for this collection, with off-chain metadata populated.

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`collectionMetadata`](/sdk/reference/interfaces/i-bit-badges-collection#collectionmetadata)

#### Overrides

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`collectionMetadata`](/sdk/reference/classes/collection-doc#collectionmetadata)

***

### collectionPermissions

> **collectionPermissions**: [`CollectionPermissionsWithDetails`](/sdk/reference/classes/collection-permissions-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:209](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L209)

The collection permissions for this collection, with off-chain metadata populated.

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`collectionPermissions`](/sdk/reference/interfaces/i-bit-badges-collection#collectionpermissions)

#### Overrides

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`collectionPermissions`](/sdk/reference/classes/collection-doc#collectionpermissions)

***

### cosmosCoinWrapperPaths

> **cosmosCoinWrapperPaths**: [`CosmosCoinWrapperPathWithDetails`](/sdk/reference/classes/cosmos-coin-wrapper-path-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:240](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L240)

The IBC wrapper paths for the collection, with off-chain metadata populated.

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`cosmosCoinWrapperPaths`](/sdk/reference/interfaces/i-bit-badges-collection#cosmoscoinwrapperpaths)

#### Overrides

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`cosmosCoinWrapperPaths`](/sdk/reference/classes/collection-doc#cosmoscoinwrapperpaths)

***

### createdBlock

> **createdBlock**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:366](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L366)

The block number when this collection was created

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`createdBlock`](/sdk/reference/interfaces/i-bit-badges-collection#createdblock)

#### Inherited from

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`createdBlock`](/sdk/reference/classes/collection-doc#createdblock)

***

### createdBy

> **createdBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:365](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L365)

The BitBadges address of the user who created this collection

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`createdBy`](/sdk/reference/interfaces/i-bit-badges-collection#createdby)

#### Inherited from

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`createdBy`](/sdk/reference/classes/collection-doc#createdby)

***

### createdTimestamp

> **createdTimestamp**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:367](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L367)

The timestamp when this collection was created (milliseconds since epoch)

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`createdTimestamp`](/sdk/reference/interfaces/i-bit-badges-collection#createdtimestamp)

#### Inherited from

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`createdTimestamp`](/sdk/reference/classes/collection-doc#createdtimestamp)

***

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:358](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L358)

The custom data

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`customData`](/sdk/reference/interfaces/i-bit-badges-collection#customdata)

#### Inherited from

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`customData`](/sdk/reference/classes/collection-doc#customdata)

***

### defaultBalances

> **defaultBalances**: [`UserBalanceStoreWithDetails`](/sdk/reference/classes/user-balance-store-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:210](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L210)

The default balances for users upon genesis, with off-chain metadata populated.

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`defaultBalances`](/sdk/reference/interfaces/i-bit-badges-collection#defaultbalances)

#### Overrides

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`defaultBalances`](/sdk/reference/classes/collection-doc#defaultbalances)

***

### invariants

> **invariants**: [`CollectionInvariantsWithDetails`](/sdk/reference/classes/collection-invariants-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:244](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L244)

Collection-level invariants with EVM query challenge metadata populated (WithDetails).

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`invariants`](/sdk/reference/interfaces/i-bit-badges-collection#invariants)

#### Overrides

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`invariants`](/sdk/reference/classes/collection-doc#invariants)

***

### isArchived

> **isArchived**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:363](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L363)

The is archived flag

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`isArchived`](/sdk/reference/interfaces/i-bit-badges-collection#isarchived)

#### Inherited from

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`isArchived`](/sdk/reference/classes/collection-doc#isarchived)

***

### listings

> **listings**: [`UtilityPageDoc`](/sdk/reference/classes/utility-page-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:219](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L219)

The listings for this collection.

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`listings`](/sdk/reference/interfaces/i-bit-badges-collection#listings)

***

### manager

> **manager**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:359](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L359)

The manager

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`manager`](/sdk/reference/interfaces/i-bit-badges-collection#manager)

#### Inherited from

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`manager`](/sdk/reference/classes/collection-doc#manager)

***

### mintEscrowAddress

> **mintEscrowAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:370](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L370)

Mint escrow address

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`mintEscrowAddress`](/sdk/reference/interfaces/i-bit-badges-collection#mintescrowaddress)

#### Inherited from

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`mintEscrowAddress`](/sdk/reference/classes/collection-doc#mintescrowaddress)

***

### nsfw?

> `optional` **nsfw?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:223](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L223)

The token IDs in this collection that are marked as NSFW.

#### reason

> **reason**: `string`

#### tokenIds

> **tokenIds**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`nsfw`](/sdk/reference/interfaces/i-bit-badges-collection#nsfw)

***

### owners

> **owners**: [`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:215](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L215)

The fetched owners of this collection. Returned collections will only fetch the current page. Use the pagination to fetch more. To be used in conjunction with views.

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`owners`](/sdk/reference/interfaces/i-bit-badges-collection#owners)

***

### reported?

> `optional` **reported?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:224](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L224)

The token IDs in this collection that have been reported.

#### reason

> **reason**: `string`

#### tokenIds

> **tokenIds**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`reported`](/sdk/reference/interfaces/i-bit-badges-collection#reported)

***

### standards

> **standards**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:362](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L362)

The standards

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`standards`](/sdk/reference/interfaces/i-bit-badges-collection#standards)

#### Inherited from

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`standards`](/sdk/reference/classes/collection-doc#standards)

***

### standardsConformance?

> `optional` **standardsConformance?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:246](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L246)

Standards conformance results for this collection. Populated by the indexer
after evaluating each declared standard (e.g. NFTMarketplace, NFTPricingDenom)
against the on-chain collection state. Conformance is deterministic, so the
indexer recomputes on each fetch rather than caching.

The key is the standard name (e.g. "NFTMarketplace"); the value is a
`{ conforms, errors?, warnings? }` object where `errors` lists rule
violations that cause `conforms` to be false, and `warnings` lists soft
advisories that do not affect conformance.

#### Index Signature

\[`standardName`: `string`\]: `object`

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`standardsConformance`](/sdk/reference/interfaces/i-bit-badges-collection#standardsconformance)

***

### standardsInfo?

> `optional` **standardsInfo?**: [`iStandardsInfo`](/sdk/reference/interfaces/i-standards-info)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:254](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L254)

Per-standard core-details object attached by the indexer. Companion to
`standardsConformance`. Only contains data that requires an extra fetch
(e.g. an escrow balance) or is a derived status enum — does NOT duplicate
data already on the collection doc (approvals, metadata, amounts), which
is derivable client-side.

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`standardsInfo`](/sdk/reference/interfaces/i-bit-badges-collection#standardsinfo)

***

### stats?

> `optional` **stats?**: [`CollectionStatsDoc`](/sdk/reference/classes/collection-stats-doc)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:236](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L236)

The stats for this collection.

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`stats`](/sdk/reference/interfaces/i-bit-badges-collection#stats)

***

### tokenFloorPrices?

> `optional` **tokenFloorPrices?**: [`iTokenFloorPriceDoc`](/sdk/reference/interfaces/i-token-floor-price-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:238](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L238)

The floor prices for this collection.

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`tokenFloorPrices`](/sdk/reference/interfaces/i-bit-badges-collection#tokenfloorprices)

***

### tokenMetadata

> **tokenMetadata**: [`TokenMetadataDetails`](/sdk/reference/classes/token-metadata-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:213](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L213)

The token metadata for this collection, with off-chain metadata populated.

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`tokenMetadata`](/sdk/reference/interfaces/i-bit-badges-collection#tokenmetadata)

#### Overrides

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`tokenMetadata`](/sdk/reference/classes/collection-doc#tokenmetadata)

***

### updateHistory

> **updateHistory**: [`UpdateHistory`](/sdk/reference/classes/update-history)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:368](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L368)

The update history of this collection

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`updateHistory`](/sdk/reference/interfaces/i-bit-badges-collection#updatehistory)

#### Inherited from

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`updateHistory`](/sdk/reference/classes/collection-doc#updatehistory)

***

### validTokenIds

> **validTokenIds**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:369](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L369)

Valid token IDs for the collection

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`validTokenIds`](/sdk/reference/interfaces/i-bit-badges-collection#validtokenids)

#### Inherited from

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`validTokenIds`](/sdk/reference/classes/collection-doc#validtokenids)

***

### views

> **views**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:226](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L226)

The views for this collection and their pagination Doc. Views will only include the doc _ids. Use the pagination to fetch more. For example, if you want to fetch the activity for a view, you would use the view's pagination to fetch the doc _ids, then use the corresponding activity array to find the matching docs.

#### Index Signature

\[`viewId`: `string`\]: \{ `ids`: `string`[]; `pagination`: [`PaginationInfo`](/sdk/reference/interfaces/pagination-info); `type`: `string`; \} \| `undefined`

#### Implementation of

[`iBitBadgesCollection`](/sdk/reference/interfaces/i-bit-badges-collection).[`views`](/sdk/reference/interfaces/i-bit-badges-collection#views)

## Methods

### checkCanAddMoreAliasPaths()

> **checkCanAddMoreAliasPaths**(`time?`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:724](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L724)

Checks if this permission is executable at a specific time (Date.now() by default).

Wrapper for [ActionPermission.check](/sdk/reference/classes/action-permission#check).

#### Parameters

##### time?

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`Error` \| `null`

***

### checkCanAddMoreCosmosCoinWrapperPaths()

> **checkCanAddMoreCosmosCoinWrapperPaths**(`time?`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:733](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L733)

Checks if this permission is executable at a specific time (Date.now() by default).

Wrapper for [ActionPermission.check](/sdk/reference/classes/action-permission#check).

#### Parameters

##### time?

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`Error` \| `null`

***

### checkCanArchiveCollection()

> **checkCanArchiveCollection**(`time?`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:611](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L611)

Checks if this permission is executable for the provided values at a specific time (Date.now() by default).

Wrapper for [ActionPermission.check](/sdk/reference/classes/action-permission#check).

#### Parameters

##### time?

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`Error` \| `null`

***

### checkCanDeleteCollection()

> **checkCanDeleteCollection**(`time?`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:602](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L602)

Checks if this permission is executable at a specific time (Date.now() by default).

Wrapper for [ActionPermission.check](/sdk/reference/classes/action-permission#check).

#### Parameters

##### time?

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`Error` \| `null`

***

### checkCanUpdateCollectionApprovals()

> **checkCanUpdateCollectionApprovals**(`details`, `time?`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:683](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L683)

Checks if this permission is executable for the provided values at a specific time (Date.now() by default).

Wrapper for [CollectionApprovalPermission.check](/sdk/reference/classes/collection-approval-permission#check).

#### Parameters

##### details

`object`[]

##### time?

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`Error` \| `null`

***

### checkCanUpdateCollectionMetadata()

> **checkCanUpdateCollectionMetadata**(`time?`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:645](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L645)

Checks if this permission is executable for the provided values at a specific time (Date.now() by default).

Wrapper for [ActionPermission.check](/sdk/reference/classes/action-permission#check).

#### Parameters

##### time?

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`Error` \| `null`

***

### checkCanUpdateCustomData()

> **checkCanUpdateCustomData**(`time?`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:637](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L637)

Checks if this permission is executable for the provided values at a specific time (Date.now() by default).

Wrapper for [ActionPermission.check](/sdk/reference/classes/action-permission#check).

#### Parameters

##### time?

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`Error` \| `null`

***

### checkCanUpdateManager()

> **checkCanUpdateManager**(`time?`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:620](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L620)

Checks if this permission is executable for the provided values at a specific time (Date.now() by default).

Wrapper for [ActionPermission.check](/sdk/reference/classes/action-permission#check).

#### Parameters

##### time?

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`Error` \| `null`

***

### checkCanUpdateStandards()

> **checkCanUpdateStandards**(`time?`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:629](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L629)

Checks if this permission is executable for the provided values at a specific time (Date.now() by default).

Wrapper for [ActionPermission.check](/sdk/reference/classes/action-permission#check).

#### Parameters

##### time?

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`Error` \| `null`

***

### checkCanUpdateTokenMetadata()

> **checkCanUpdateTokenMetadata**(`tokenIds`, `time?`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:668](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L668)

Checks if this permission is executable for the provided values at a specific time (Date.now() by default).

#### Parameters

##### tokenIds

[`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

##### time?

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`Error` \| `null`

***

### checkCanUpdateValidTokenIds()

> **checkCanUpdateValidTokenIds**(`tokenIds`, `time?`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:656](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L656)

Checks if this permission is executable for the provided values at a specific time (Date.now() by default).

Wrapper for TimedUpdatePermission.check.

#### Parameters

##### tokenIds

[`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

##### time?

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`Error` \| `null`

***

### clone()

> **clone**(): `BitBadgesCollection`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:289](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L289)

Deep copies the object and returns a new instance.

#### Returns

`BitBadgesCollection`\<`T`\>

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`clone`](/sdk/reference/interfaces/custom-type#clone)

#### Overrides

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`clone`](/sdk/reference/classes/collection-doc#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `BitBadgesCollection`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:285](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L285)

Converts the object to a different NumberType equivalent.

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`BitBadgesCollection`\<`U`\>

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`convert`](/sdk/reference/interfaces/custom-type#convert)

#### Overrides

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`convert`](/sdk/reference/classes/collection-doc#convert)

***

### equals()

> **equals**\<`U`\>(`other`, `normalizeNumberTypes?`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:147](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L147)

Compares this object's fields to another object's fields for equality. Equality is determined by comparing the JSON representations of the objects.

If `normalizeNumberTypes` is true, then all number types will be compared as strings (i.e. "1n" === "1" === 1). Else, they will be compared as their native types (i.e. 1n !== 1 !== "1").

#### Type Parameters

##### U

`U` *extends* [`CustomType`](/sdk/reference/interfaces/custom-type)\<`U`\>

#### Parameters

##### other

[`CustomType`](/sdk/reference/interfaces/custom-type)\<`U`\> \| `null` \| `undefined`

##### normalizeNumberTypes?

`boolean`

#### Returns

`boolean`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`equals`](/sdk/reference/interfaces/custom-type#equals)

#### Inherited from

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`equals`](/sdk/reference/classes/collection-doc#equals)

***

### fetchAllForView()

> **fetchAllForView**(`api`, `viewType`, `viewId`, `oldestFirst?`, `address?`): `Promise`\<`void`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1011](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1011)

Fetches the entire view (all pages) for a specific view. This will update the current collection with the new response information.

There is a 1 second delay between each page fetch to prevent rate limiting.

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### viewType

[`CollectionViewKey`](/sdk/reference/type-aliases/collection-view-key)

##### viewId

`string`

##### oldestFirst?

`boolean`

##### address?

`string`

#### Returns

`Promise`\<`void`\>

***

### fetchAndUpdate()

> **fetchAndUpdate**(`api`, `options`, `forceful?`): `Promise`\<`void`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:919](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L919)

Specify a new fetch request for the current collection. This will update the current collection with the new response information.
For example, paginations, metadata, views, etc. will all be handled automatically.

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### options

[`GetMetadataForCollectionPayload`](/sdk/reference/interfaces/get-metadata-for-collection-payload) & [`GetAdditionalCollectionDetailsPayload`](/sdk/reference/interfaces/get-additional-collection-details-payload)

##### forceful?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### fetchBalances()

> **fetchBalances**(`api`, `address`, `forceful?`): `Promise`\<[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:818](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L818)

Fetches the owner information (balances) for a specific address for the current collection. This will update the current collection with the new response information.

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### address

`string`

##### forceful?

`boolean`

#### Returns

`Promise`\<[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`T`\>\>

#### Remarks

Returns the cached value if already fetched. Use forceful to force a new fetch.

***

### fetchMetadata()

> **fetchMetadata**(`api`, `options`, `forceful?`): `Promise`\<`void`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:956](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L956)

Wrapper for [fetchAndUpdate](#fetchandupdate) that fetches collection metadata.

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### options

[`GetMetadataForCollectionPayload`](/sdk/reference/interfaces/get-metadata-for-collection-payload)

##### forceful?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### fetchNextForView()

> **fetchNextForView**(`api`, `viewType`, `viewId`, `oldestFirst?`, `address?`): `Promise`\<`void`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:990](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L990)

Fetches the next page for a specific view. This will update the current collection with the new response information (handling paginations).

If the view has no more pages, this will do nothing.

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### viewType

[`CollectionViewKey`](/sdk/reference/type-aliases/collection-view-key)

##### viewId

`string`

##### oldestFirst?

`boolean`

##### address?

`string`

#### Returns

`Promise`\<`void`\>

***

### FilterTokensInCollection()

> **FilterTokensInCollection**(`api`, `bodyOptions`): `Promise`\<[`FilterTokensInCollectionSuccessResponse`](/sdk/reference/classes/filter-tokens-in-collection-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1285](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1285)

Execute a filter query for the collection. You have to handle the pagination yourself.

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### bodyOptions

`Omit`\<[`iFilterTokensInCollectionPayload`](/sdk/reference/interfaces/i-filter-tokens-in-collection-payload), `"collectionId"`\>

#### Returns

`Promise`\<[`FilterTokensInCollectionSuccessResponse`](/sdk/reference/classes/filter-tokens-in-collection-success-response)\<`T`\>\>

***

### generateAliasForTokenId()

> **generateAliasForTokenId**(`tokenId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1098](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1098)

Generates the alias for a specific token ID. Collection alias is stored in the root of the collection.

Wrapper for [generateAlias](/sdk/reference/functions/generate-alias).

#### Parameters

##### tokenId

`T`

#### Returns

`string`

***

### getActivityView()

> **getActivityView**(`viewId`): [`TransferActivityDoc`](/sdk/reference/classes/transfer-activity-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1043](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1043)

Gets the documents for a specific view.

#### Parameters

##### viewId

`string`

#### Returns

[`TransferActivityDoc`](/sdk/reference/classes/transfer-activity-doc)\<`T`\>[]

***

### getApprovalTrackersView()

> **getApprovalTrackersView**(`viewId`): [`ApprovalTrackerDoc`](/sdk/reference/classes/approval-tracker-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1078](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1078)

Gets the documents for a specific view.

#### Parameters

##### viewId

`string`

#### Returns

[`ApprovalTrackerDoc`](/sdk/reference/classes/approval-tracker-doc)\<`T`\>[]

***

### getBalanceAmountForToken()

> **getBalanceAmountForToken**(`address`, `tokenId`): `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:456](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L456)

Returns the balance amount for a specific token ID at the current time for a given address.
Uses the cached balance data. Returns 0 if no balance info is found.

#### Parameters

##### address

`string`

The address to look up.

##### tokenId

`T`

The token ID to look up.

#### Returns

`T`

***

### getBalanceInfo()

> **getBalanceInfo**(`address`): [`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`T`\> \| `undefined`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:407](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L407)

Gets the balance document for a specific address from the cached owners array. Returns undefined if not fetched yet.
The balance document includes the balances, outgoing approvals, and other details. Use getBalances to only get the balances.

#### Parameters

##### address

`string`

#### Returns

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`T`\> \| `undefined`

#### Remarks

This does not fetch the balance from the API. It only returns the cached balance. To fetch the balance, this
can either be done directly, or if the collection balances are indexable
then the balances can also be fetched via the views and / or the other fetch methods.

#### Example

```ts
import type { BitBadgesCollection } from 'bitbadges';
// A collection already fetched through BitBadgesAPI.
declare const collection: BitBadgesCollection<bigint>;
const address = 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'
const balance = collection.getBalanceInfo(address)
console.log(balance?.balances)
console.log(balance?.outgoingApprovals)
```

***

### getBalances()

> **getBalances**(`address`): [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\> \| `undefined`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:438](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L438)

Gets the balances for a specific address from the cached owners array. Returns undefined if not fetched yet.
This returns the balances only, not the other details. Use getBalanceInfo to get the other details for a user balance store
(approvals, etc.).

#### Parameters

##### address

`string`

#### Returns

[`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\> \| `undefined`

#### Remarks

This does not fetch the balance from the API. It only returns the cached balance. To fetch the balance, this
can either be done directly, or if the collection balances are indexable (i.e. balances type is anything but Off-Chain - Non-Indexed),
then the balances can also be fetched via the views and / or the other fetch methods.

#### Example

```ts
import type { BitBadgesCollection } from 'bitbadges';
// A collection already fetched through BitBadgesAPI.
declare const collection: BitBadgesCollection<bigint>;
const address = 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'
const balances = collection.getBalances(address)
console.log(balances)
```

***

### getChallengeTrackersView()

> **getChallengeTrackersView**(`viewId`): [`MerkleChallengeTrackerDoc`](/sdk/reference/classes/merkle-challenge-tracker-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1061](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1061)

Gets the documents for a specific view.

#### Parameters

##### viewId

`string`

#### Returns

[`MerkleChallengeTrackerDoc`](/sdk/reference/classes/merkle-challenge-tracker-doc)\<`T`\>[]

***

### getCollectionMetadata()

> **getCollectionMetadata**(): [`Metadata`](/sdk/reference/classes/metadata)\<`T`\> \| `undefined`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:305](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L305)

Get the cached collection metadata. This is the fetched metadata, not the timeline values.

#### Returns

[`Metadata`](/sdk/reference/classes/metadata)\<`T`\> \| `undefined`

#### Example

```ts
import type { BitBadgesCollection } from 'bitbadges';
// A collection already fetched through BitBadgesAPI.
declare const collection: BitBadgesCollection<bigint>;
const metadata = collection.getCollectionMetadata()
const metadataImage = metadata?.image
```

***

### getCollectionMetadataDetails()

> **getCollectionMetadataDetails**(): [`CollectionMetadataDetails`](/sdk/reference/classes/collection-metadata-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:309](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L309)

#### Returns

[`CollectionMetadataDetails`](/sdk/reference/classes/collection-metadata-details)\<`T`\>

***

### getDefaultDisplayCurrency()

> **getDefaultDisplayCurrency**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:361](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L361)

Gets default display currency, if set. Defaults to ubadge.

#### Returns

`string`

***

### getDefaultUserBalance()

> **getDefaultUserBalance**(): [`UserBalanceStore`](/sdk/reference/classes/user-balance-store)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:404](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L404)

Creates a blank balance object with the genesis default approvals and balances.

#### Returns

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store)\<`T`\>

#### Inherited from

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`getDefaultUserBalance`](/sdk/reference/classes/collection-doc#getdefaultuserbalance)

***

### getListingsView()

> **getListingsView**(`viewId`): [`UtilityPageDoc`](/sdk/reference/classes/utility-page-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1070](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1070)

Gets the documents for a specific view.

#### Parameters

##### viewId

`string`

#### Returns

[`UtilityPageDoc`](/sdk/reference/classes/utility-page-doc)\<`T`\>[]

***

### getMaxTokenId()

> **getMaxTokenId**(): `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:467](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L467)

Gets the maximum token ID for the collection. Checks both the circulating supplys + genesis default balances.

Precondition: The Total balance must be fetched.

#### Returns

`bigint`

***

### getMintCollectionApprovals()

> **getMintCollectionApprovals**(): [`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`bigint`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1127](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1127)

Returns all the mint collection approvals.

Wrapper for [getMintApprovals](/sdk/reference/functions/get-mint-approvals).

#### Returns

[`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`bigint`\>[]

***

### getNonMintCollectionApprovals()

> **getNonMintCollectionApprovals**(): [`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`bigint`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1118](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1118)

Returns all the non-mint collection approvals.

Wrapper for [getNonMintApprovals](/sdk/reference/functions/get-non-mint-approvals).

#### Returns

[`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`bigint`\>[]

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:281](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L281)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`getNumberFieldNames`](/sdk/reference/interfaces/custom-type#getnumberfieldnames)

#### Overrides

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`getNumberFieldNames`](/sdk/reference/classes/collection-doc#getnumberfieldnames)

***

### getOwners()

> **getOwners**(`api`, `tokenId`, `body`): `Promise`\<[`GetOwnersSuccessResponse`](/sdk/reference/classes/get-owners-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1253](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1253)

Gets the owners for a specific token. You have to handle the pagination yourself.

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### tokenId

`T`

##### body

[`iGetOwnersPayload`](/sdk/reference/interfaces/i-get-owners-payload)

#### Returns

`Promise`\<[`GetOwnersSuccessResponse`](/sdk/reference/classes/get-owners-success-response)\<`T`\>\>

***

### getOwnersView()

> **getOwnersView**(`viewId`): [`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1052](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1052)

Gets the documents for a specific view.

#### Parameters

##### viewId

`string`

#### Returns

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`T`\>[]

***

### getRefreshStatus()

> **getRefreshStatus**(`api`): `Promise`\<[`RefreshStatusSuccessResponse`](/sdk/reference/classes/refresh-status-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1151)

Check the refresh queue status for the collection via the API.

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

#### Returns

`Promise`\<[`RefreshStatusSuccessResponse`](/sdk/reference/classes/refresh-status-success-response)\<`T`\>\>

***

### getTokenActivity()

> **getTokenActivity**(`api`, `tokenId`, `body`): `Promise`\<[`GetTokenActivitySuccessResponse`](/sdk/reference/classes/get-token-activity-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1217](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1217)

Get the token activity for a specific token ID. You have to handle the pagination yourself.

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### tokenId

`T`

##### body

[`iGetTokenActivityPayload`](/sdk/reference/interfaces/i-get-token-activity-payload)

#### Returns

`Promise`\<[`GetTokenActivitySuccessResponse`](/sdk/reference/classes/get-token-activity-success-response)\<`T`\>\>

***

### getTokenFloorPricesView()

> **getTokenFloorPricesView**(`viewId`): [`TokenFloorPriceDoc`](/sdk/reference/classes/token-floor-price-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1087](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1087)

Gets the documents for a specific view.

#### Parameters

##### viewId

`string`

#### Returns

[`TokenFloorPriceDoc`](/sdk/reference/classes/token-floor-price-doc)\<`T`\>[]

***

### getTokenIdRange()

> **getTokenIdRange**(): [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:354](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L354)

Gets a UintRangeArray of 1 - Max Token ID for the collection (i.e. [{ start: 1n, end: maxTokenId }]).

#### Returns

[`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`bigint`\>

***

### getTokenMetadata()

> **getTokenMetadata**(): [`TokenMetadataDetails`](/sdk/reference/classes/token-metadata-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:318](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L318)

Gets the token metadata at a specific time (Date.now() by default).

This gets the timeline value. For the actual fetched value, use `getTokenMetadataForTokenId()` instead.

#### Returns

[`TokenMetadataDetails`](/sdk/reference/classes/token-metadata-details)\<`T`\>[]

***

### getTokenMetadataDetails()

> **getTokenMetadataDetails**(`tokenId`): [`TokenMetadataDetails`](/sdk/reference/classes/token-metadata-details)\<`T`\> \| `undefined`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:347](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L347)

Gets the details for a specific token ID. This includes the metadata, URI, and custom data.

If you only want the metadata, use getTokenMetadata, or you can access it via result.metadata.

#### Parameters

##### tokenId

`T`

#### Returns

[`TokenMetadataDetails`](/sdk/reference/classes/token-metadata-details)\<`T`\> \| `undefined`

***

### getTokenMetadataForTokenId()

> **getTokenMetadataForTokenId**(`tokenId`): [`Metadata`](/sdk/reference/classes/metadata)\<`T`\> \| `undefined`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:338](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L338)

Get the metadata for a specific token ID. This is the fetched metadata, not the timeline values.

This only returns the metadata object (name, image, etc.) and not the URI or other accompanying details.
For those, use getTokenMetadataDetails.

#### Parameters

##### tokenId

`T`

#### Returns

[`Metadata`](/sdk/reference/classes/metadata)\<`T`\> \| `undefined`

#### Example

```ts
import type { BitBadgesCollection } from 'bitbadges';
// A collection already fetched through BitBadgesAPI.
declare const collection: BitBadgesCollection<bigint>;
const tokenId = 123n
const metadata = collection.getTokenMetadataForTokenId(tokenId)
const metadataImage = metadata?.image
```

***

### getUnhandledCollectionApprovals()

> **getUnhandledCollectionApprovals**(): [`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`bigint`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1109](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1109)

Returns all the unhandled collection approvals. Unhandled means disapproved.

Wrapper for [getUnhandledCollectionApprovals](/sdk/reference/functions/get-unhandled-collection-approvals).

#### Returns

[`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`bigint`\>[]

***

### getView()

> **getView**\<`KeyType`\>(`viewType`, `viewId`): `CollectionViewData`\<`T`\>\[`KeyType`\]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1021](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1021)

Type agnostic get view function. Uses the viewType to determine the type of view to fetch.

#### Type Parameters

##### KeyType

`KeyType` *extends* [`CollectionViewKey`](/sdk/reference/type-aliases/collection-view-key)

#### Parameters

##### viewType

`KeyType`

##### viewId

`string`

#### Returns

`CollectionViewData`\<`T`\>\[`KeyType`\]

***

### getViewBookmark()

> **getViewBookmark**(`viewId`): `string` \| `undefined`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:981](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L981)

Returns the bookmark for a specific view. This is used to fetch the next page.

#### Parameters

##### viewId

`string`

#### Returns

`string` \| `undefined`

***

### getViewPagination()

> **getViewPagination**(`viewId`): [`PaginationInfo`](/sdk/reference/interfaces/pagination-info) \| `undefined`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:974](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L974)

Returns the pagination information for a specific view ({ hasMore, bookmark }).

#### Parameters

##### viewId

`string`

#### Returns

[`PaginationInfo`](/sdk/reference/interfaces/pagination-info) \| `undefined`

***

### hasNFTMarketplaceStandard()

> **hasNFTMarketplaceStandard**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:374](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L374)

Checks if collection has the NFT marketplace standard (accepts both new 'NFTMarketplace' and legacy 'Tradable' names).

#### Returns

`boolean`

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`hasNumberFields`](/sdk/reference/interfaces/custom-type#hasnumberfields)

#### Inherited from

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`hasNumberFields`](/sdk/reference/classes/collection-doc#hasnumberfields)

***

### isRedundantRequest()

> **isRedundantRequest**(`options`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:831](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L831)

Returns if a new collection API request body is redundant (meaning we already have the data cached).

#### Parameters

##### options

[`GetMetadataForCollectionPayload`](/sdk/reference/interfaces/get-metadata-for-collection-payload) & [`GetAdditionalCollectionDetailsPayload`](/sdk/reference/interfaces/get-additional-collection-details-payload)

#### Returns

`boolean`

***

### mustGetBalanceInfo()

> **mustGetBalanceInfo**(`address`): [`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:414](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L414)

Wrapper for [getBalanceInfo](#getbalanceinfo) that throws an error if the balance is not found in the document.

#### Parameters

##### address

`string`

#### Returns

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`T`\>

***

### mustGetBalances()

> **mustGetBalances**(`address`): [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:445](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L445)

Wrapper for [getBalances](#getbalances) that throws an error if the balance is not found in the document.

#### Parameters

##### address

`string`

#### Returns

[`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

***

### pruneMetadataToFetch()

> **pruneMetadataToFetch**(`metadataToFetch`): `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:490](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L490)

For a metadata fetch request, prune the request to only request the metadata that is not already fetched.

#### Parameters

##### metadataToFetch

[`MetadataFetchOptions`](/sdk/reference/interfaces/metadata-fetch-options)

#### Returns

`object`

##### doNotFetchCollectionMetadata

> **doNotFetchCollectionMetadata**: `boolean`

##### uris

> **uris**: `string`[]

#### Example

```ts
import type { BitBadgesCollection } from 'bitbadges';
// A collection already fetched through BitBadgesAPI.
declare const collection: BitBadgesCollection<bigint>;
const metadataToFetch = collection.pruneMetadataToFetch({ tokenIds: [1n, 2n, 3n], uris: ['ipfs://...'] })
console.log(metadataToFetch)
```

***

### prunePayload()

> **prunePayload**(`options`): [`GetMetadataForCollectionPayload`](/sdk/reference/interfaces/get-metadata-for-collection-payload) & [`GetAdditionalCollectionDetailsPayload`](/sdk/reference/interfaces/get-additional-collection-details-payload) & `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:880](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L880)

Prunes a new collection API request body to only request the data that is not already fetched.

#### Parameters

##### options

[`GetMetadataForCollectionPayload`](/sdk/reference/interfaces/get-metadata-for-collection-payload) & [`GetAdditionalCollectionDetailsPayload`](/sdk/reference/interfaces/get-additional-collection-details-payload)

#### Returns

[`GetMetadataForCollectionPayload`](/sdk/reference/interfaces/get-metadata-for-collection-payload) & [`GetAdditionalCollectionDetailsPayload`](/sdk/reference/interfaces/get-additional-collection-details-payload) & `object`

***

### refresh()

> **refresh**(`api`): `Promise`\<[`RefreshMetadataSuccessResponse`](/sdk/reference/classes/refresh-metadata-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1181](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1181)

Trigger a refresh for the collection via the API. Note there is a cooldown period for refreshing.

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

#### Returns

`Promise`\<[`RefreshMetadataSuccessResponse`](/sdk/reference/classes/refresh-metadata-success-response)\>

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`toJson`](/sdk/reference/interfaces/custom-type#tojson)

#### Inherited from

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`toJson`](/sdk/reference/classes/collection-doc#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`toJsonString`](/sdk/reference/interfaces/custom-type#tojsonstring)

#### Inherited from

[`CollectionDoc`](/sdk/reference/classes/collection-doc).[`toJsonString`](/sdk/reference/classes/collection-doc#tojsonstring)

***

### updateWithNewResponse()

> **updateWithNewResponse**(`newResponse`, `forceful?`): `void`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:941](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L941)

Updates the current collection with a new response from the API. If forceful is true, we fully overwrite the current collection with the new response.
Else, we will append the new response to the current collection while handling duplicates, paginations, etc.

#### Parameters

##### newResponse

`BitBadgesCollection`\<`T`\>

##### forceful?

`boolean`

#### Returns

`void`

***

### validateCollectionApprovalsUpdate()

> **validateCollectionApprovalsUpdate**(`newApprovals`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:531](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L531)

Validates if a state transition (old approvals -> new approvals) is valid, given the current state of the collection and its permissions.

Wrapper for [CollectionApprovalWithDetails.validateUpdate](/sdk/reference/classes/collection-approval-with-details#validateupdate).

#### Parameters

##### newApprovals

[`CollectionApprovalWithDetails`](/sdk/reference/classes/collection-approval-with-details)\<`T`\>[]

#### Returns

`Error` \| `null`

***

### validateCollectionMetadataUpdate()

> **validateCollectionMetadataUpdate**(`newCollectionMetadata`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:592](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L592)

Validates if a state transition (old collection metadata -> new collection metadata) is valid, given the current state of the collection and its permissions.

Wrapper for [validateCollectionMetadataUpdate](/sdk/reference/functions/validate-collection-metadata-update).

#### Parameters

##### newCollectionMetadata

[`iCollectionMetadata`](/sdk/reference/interfaces/i-collection-metadata)

#### Returns

`Error` \| `null`

***

### validateCustomDataUpdate()

> **validateCustomDataUpdate**(`newCustomData`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:556](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L556)

Validates if a state transition (old custom data -> new custom data) is valid, given the current state of the collection and its permissions.

Wrapper for [validateCustomDataUpdate](/sdk/reference/functions/validate-custom-data-update).

#### Parameters

##### newCustomData

`string`

#### Returns

`Error` \| `null`

***

### validateIsArchivedUpdate()

> **validateIsArchivedUpdate**(`newIsArchived`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:574](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L574)

Validates if a state transition (old isArchived -> new isArchived) is valid, given the current state of the collection and its permissions.

Wrapper for [validateIsArchivedUpdate](/sdk/reference/functions/validate-is-archived-update).

#### Parameters

##### newIsArchived

`boolean`

#### Returns

`Error` \| `null`

***

### validateManagerUpdate()

> **validateManagerUpdate**(`newManager`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:583](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L583)

Validates if a state transition (old manager -> new manager) is valid, given the current state of the collection and its permissions.

Wrapper for [validateManagerUpdate](/sdk/reference/functions/validate-manager-update).

#### Parameters

##### newManager

`string`

#### Returns

`Error` \| `null`

***

### validatePermissionsUpdate()

> **validatePermissionsUpdate**(`newPermissions`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:506](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L506)

Validates if a state transition (old permissions -> new permissions) is valid. Must not update any
permanently frozen permissions.

Wrapper for [CollectionPermissionsWithDetails.validateUpdate](/sdk/reference/classes/collection-permissions-with-details#validateupdate).

#### Parameters

##### newPermissions

[`CollectionPermissionsWithDetails`](/sdk/reference/classes/collection-permissions-with-details)\<`T`\>

#### Returns

`Error` \| `null`

#### See

[Permissions Docs](https://docs.bitbadges.io/for-developers/core-concepts/permissions)

#### Remarks

This is validating the updatability of the permissions. To validate whether a permission is executable,
use the checkCan* functions.

***

### validatePermissionUpdate()

> **validatePermissionUpdate**(`permissionName`, `newPermissions`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:519](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L519)

Validates if a single permission type is updated correctly. Cannot edit anything permanently frozen.

This is validating the updatability of the permissions. To validate whether a permission is executable,
use the checkCan* functions.

#### Parameters

##### permissionName

[`PermissionNameString`](/sdk/reference/type-aliases/permission-name-string)

##### newPermissions

`any`[]

#### Returns

`Error` \| `null`

#### See

[Permissions Docs](https://docs.bitbadges.io/for-developers/core-concepts/permissions)

***

### validateStandardsUpdate()

> **validateStandardsUpdate**(`newStandards`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:565](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L565)

Validates if a state transition (old standards -> new standards) is valid, given the current state of the collection and its permissions.

Wrapper for [validateStandardsUpdate](/sdk/reference/functions/validate-standards-update).

#### Parameters

##### newStandards

`string`[]

#### Returns

`Error` \| `null`

***

### validateTokenMetadataUpdate()

> **validateTokenMetadataUpdate**(`newTokenMetadata`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:545](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L545)

Validates if a state transition (old token metadata -> new token metadata) is valid, given the current state of the collection and its permissions.

Wrapper for [validateTokenMetadataUpdate](/sdk/reference/functions/validate-token-metadata-update).

#### Parameters

##### newTokenMetadata

[`iTokenMetadata`](/sdk/reference/interfaces/i-token-metadata)\<`T`\>[]

#### Returns

`Error` \| `null`

***

### viewHasMore()

> **viewHasMore**(`viewId`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:967](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L967)

Returns if the view has more pages to fetch.

#### Parameters

##### viewId

`string`

#### Returns

`boolean`

***

### FetchAndInitialize()

> `static` **FetchAndInitialize**\<`T`\>(`api`, `options`): `Promise`\<`BitBadgesCollection`\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:743](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L743)

Fetches and initializes a new BitBadgesCollection object from an API request. Must pass in a valid API instance.

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### options

`object` & [`GetMetadataForCollectionPayload`](/sdk/reference/interfaces/get-metadata-for-collection-payload) & [`GetAdditionalCollectionDetailsPayload`](/sdk/reference/interfaces/get-additional-collection-details-payload)

#### Returns

`Promise`\<`BitBadgesCollection`\<`T`\>\>

***

### FetchAndInitializeBatch()

> `static` **FetchAndInitializeBatch**\<`T`\>(`api`, `collectionsToFetch`): `Promise`\<(`BitBadgesCollection`\<`T`\> \| `undefined`)[]\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:804](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L804)

Fetches and initializes a batch of new BitBadgesCollection objects from an API request. Must pass in a valid API instance.

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### collectionsToFetch

`object` & [`GetMetadataForCollectionPayload`](/sdk/reference/interfaces/get-metadata-for-collection-payload) & [`GetAdditionalCollectionDetailsPayload`](/sdk/reference/interfaces/get-additional-collection-details-payload)[]

#### Returns

`Promise`\<(`BitBadgesCollection`\<`T`\> \| `undefined`)[]\>

***

### FilterTokensInCollection()

> `static` **FilterTokensInCollection**\<`T`\>(`api`, `collectionId`, `body`): `Promise`\<[`FilterTokensInCollectionSuccessResponse`](/sdk/reference/classes/filter-tokens-in-collection-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1260](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1260)

Execute a filter query for the collection. You have to handle the pagination yourself.

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### collectionId

`string`

##### body

[`iFilterTokensInCollectionPayload`](/sdk/reference/interfaces/i-filter-tokens-in-collection-payload)

#### Returns

`Promise`\<[`FilterTokensInCollectionSuccessResponse`](/sdk/reference/classes/filter-tokens-in-collection-success-response)\<`T`\>\>

***

### GetBalanceByAddress()

> `static` **GetBalanceByAddress**\<`T`\>(`api`, `collectionId`, `address`, `payload?`): `Promise`\<[`GetBalanceByAddressSuccessResponse`](/sdk/reference/classes/get-balance-by-address-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:776](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L776)

Gets the balance for a specific address for a specific collection. Must pass in a valid API instance.

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### collectionId

`string`

##### address

`string`

##### payload?

[`iGetBalanceByAddressPayload`](/sdk/reference/interfaces/i-get-balance-by-address-payload)

#### Returns

`Promise`\<[`GetBalanceByAddressSuccessResponse`](/sdk/reference/classes/get-balance-by-address-success-response)\<`T`\>\>

***

### GetCollections()

> `static` **GetCollections**\<`T`\>(`api`, `body`): `Promise`\<[`GetCollectionsSuccessResponse`](/sdk/reference/classes/get-collections-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:755](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L755)

Gets collections from the API. Must pass in a valid API instance.

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### body

[`iGetCollectionsPayload`](/sdk/reference/interfaces/i-get-collections-payload)

#### Returns

`Promise`\<[`GetCollectionsSuccessResponse`](/sdk/reference/classes/get-collections-success-response)\<`T`\>\>

***

### GetOwners()

> `static` **GetOwners**\<`T`\>(`api`, `collectionId`, `tokenId`, `payload?`): `Promise`\<[`GetOwnersSuccessResponse`](/sdk/reference/classes/get-owners-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1224](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1224)

Gets owners for a specific token ID. You have to handle the pagination yourself.

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### collectionId

`string`

##### tokenId

[`NumberType`](/sdk/reference/type-aliases/number-type)

##### payload?

[`iGetOwnersPayload`](/sdk/reference/interfaces/i-get-owners-payload)

#### Returns

`Promise`\<[`GetOwnersSuccessResponse`](/sdk/reference/classes/get-owners-success-response)\<`T`\>\>

***

### GetRefreshStatus()

> `static` **GetRefreshStatus**\<`T`\>(`api`, `collectionId`): `Promise`\<[`RefreshStatusSuccessResponse`](/sdk/reference/classes/refresh-status-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1134](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1134)

Returns the status of this collection in the refresh queue.

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### collectionId

`string`

#### Returns

`Promise`\<[`RefreshStatusSuccessResponse`](/sdk/reference/classes/refresh-status-success-response)\<`T`\>\>

***

### GetTokenActivity()

> `static` **GetTokenActivity**\<`T`\>(`api`, `collectionId`, `tokenId`, `payload?`): `Promise`\<[`GetTokenActivitySuccessResponse`](/sdk/reference/classes/get-token-activity-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1188](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1188)

Gets activity for a specific token ID. You have to handle the pagination yourself.

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### collectionId

`string`

##### tokenId

[`NumberType`](/sdk/reference/type-aliases/number-type)

##### payload?

[`iGetTokenActivityPayload`](/sdk/reference/interfaces/i-get-token-activity-payload)

#### Returns

`Promise`\<[`GetTokenActivitySuccessResponse`](/sdk/reference/classes/get-token-activity-success-response)\<`T`\>\>

***

### RefreshMetadata()

> `static` **RefreshMetadata**\<`T`\>(`api`, `collectionId`, `body?`): `Promise`\<[`RefreshMetadataSuccessResponse`](/sdk/reference/classes/refresh-metadata-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:1158](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L1158)

Trigger a refresh for the collection via the API. Note there is a cooldown period for refreshing.

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### collectionId

`string`

##### body?

[`iRefreshMetadataPayload`](/sdk/reference/interfaces/i-refresh-metadata-payload)

#### Returns

`Promise`\<[`RefreshMetadataSuccessResponse`](/sdk/reference/classes/refresh-metadata-success-response)\>
