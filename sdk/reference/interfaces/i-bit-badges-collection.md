---
description: "T extends NumberType"
---

# Interface: iBitBadgesCollection\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:102](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L102)

## Extends

- [`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L13)

A unique stringified document ID

#### Inherited from

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`_docId`](/sdk/reference/interfaces/i-collection-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L16)

A unique document ID (Mongo DB ObjectID)

#### Inherited from

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`_id`](/sdk/reference/interfaces/i-collection-doc#_id)

***

### activity

> **activity**: [`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:116](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L116)

The fetched activity for this collection. Returned collections will only fetch the current page. Use the pagination to fetch more. To be used in conjunction with views.

***

### aliasPaths

> **aliasPaths**: [`iAliasPathWithDetails`](/sdk/reference/interfaces/i-alias-path-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:156](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L156)

The alias (non-wrapping) paths for the collection, with off-chain metadata populated.

#### Overrides

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`aliasPaths`](/sdk/reference/interfaces/i-collection-doc#aliaspaths)

***

### approvalTrackers

> **approvalTrackers**: [`iApprovalTrackerDoc`](/sdk/reference/interfaces/i-approval-tracker-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:122](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L122)

The fetched approval trackers for this collection. Returned collections will only fetch the current page. Use the pagination to fetch more. To be used in conjunction with views.

***

### challengeTrackers

> **challengeTrackers**: [`iMerkleChallengeTrackerDoc`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:120](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L120)

The fetched merkle challenge trackers for this collection. Returned collections will only fetch the current page. Use the pagination to fetch more. To be used in conjunction with views.

***

### claims

> **claims**: [`iClaimDetails`](/sdk/reference/interfaces/i-claim-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:144](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L144)

Details about any off-chain claims for this collection. Only applicable when outsourced to BitBadges.

***

### collectionApprovals

> **collectionApprovals**: [`iCollectionApprovalWithDetails`](/sdk/reference/interfaces/i-collection-approval-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:104](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L104)

The collection approvals for this collection, with off-chain metadata populated.

#### Overrides

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`collectionApprovals`](/sdk/reference/interfaces/i-collection-doc#collectionapprovals)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:403](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L403)

The collection ID

#### Inherited from

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`collectionId`](/sdk/reference/interfaces/i-collection-doc#collectionid)

***

### collectionMetadata

> **collectionMetadata**: [`iCollectionMetadata`](/sdk/reference/interfaces/i-collection-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:109](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L109)

The collection metadata for this collection, with off-chain metadata populated.

#### Overrides

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`collectionMetadata`](/sdk/reference/interfaces/i-collection-doc#collectionmetadata)

***

### collectionPermissions

> **collectionPermissions**: [`iCollectionPermissionsWithDetails`](/sdk/reference/interfaces/i-collection-permissions-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:106](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L106)

The collection permissions for this collection, with off-chain metadata populated.

#### Overrides

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`collectionPermissions`](/sdk/reference/interfaces/i-collection-doc#collectionpermissions)

***

### cosmosCoinWrapperPaths

> **cosmosCoinWrapperPaths**: [`iCosmosCoinWrapperPathWithDetails`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:153](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L153)

The IBC wrapper paths for the collection, with off-chain metadata populated.

#### Overrides

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`cosmosCoinWrapperPaths`](/sdk/reference/interfaces/i-collection-doc#cosmoscoinwrapperpaths)

***

### createdBlock

> **createdBlock**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:425](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L425)

The block number when this collection was created

#### Inherited from

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`createdBlock`](/sdk/reference/interfaces/i-collection-doc#createdblock)

***

### createdBy

> **createdBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:423](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L423)

The BitBadges address of the user who created this collection

#### Inherited from

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`createdBy`](/sdk/reference/interfaces/i-collection-doc#createdby)

***

### createdTimestamp

> **createdTimestamp**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:427](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L427)

The timestamp when this collection was created (milliseconds since epoch)

#### Inherited from

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`createdTimestamp`](/sdk/reference/interfaces/i-collection-doc#createdtimestamp)

***

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:409](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L409)

The custom data

#### Inherited from

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`customData`](/sdk/reference/interfaces/i-collection-doc#customdata)

***

### defaultBalances

> **defaultBalances**: [`iUserBalanceStoreWithDetails`](/sdk/reference/interfaces/i-user-balance-store-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:114](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L114)

The default balances for users upon genesis, with off-chain metadata populated.

#### Overrides

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`defaultBalances`](/sdk/reference/interfaces/i-collection-doc#defaultbalances)

***

### invariants

> **invariants**: [`iCollectionInvariantsWithDetails`](/sdk/reference/interfaces/i-collection-invariants-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:159](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L159)

Collection-level invariants with EVM query challenge metadata populated (WithDetails).

#### Overrides

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`invariants`](/sdk/reference/interfaces/i-collection-doc#invariants)

***

### isArchived

> **isArchived**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:419](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L419)

The is archived flag

#### Inherited from

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`isArchived`](/sdk/reference/interfaces/i-collection-doc#isarchived)

***

### listings

> **listings**: [`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:125](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L125)

The listings for this collection.

***

### manager

> **manager**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:411](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L411)

The manager

#### Inherited from

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`manager`](/sdk/reference/interfaces/i-collection-doc#manager)

***

### mintEscrowAddress

> **mintEscrowAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:433](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L433)

Mint escrow address

#### Inherited from

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`mintEscrowAddress`](/sdk/reference/interfaces/i-collection-doc#mintescrowaddress)

***

### nsfw?

> `optional` **nsfw?**: [`iCollectionNSFW`](/sdk/reference/interfaces/i-collection-nsfw)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:128](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L128)

The token IDs in this collection that are marked as NSFW.

***

### owners

> **owners**: [`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:118](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L118)

The fetched owners of this collection. Returned collections will only fetch the current page. Use the pagination to fetch more. To be used in conjunction with views.

***

### reported?

> `optional` **reported?**: [`iCollectionNSFW`](/sdk/reference/interfaces/i-collection-nsfw)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:130](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L130)

The token IDs in this collection that have been reported.

***

### standards

> **standards**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:417](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L417)

The standards

#### Inherited from

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`standards`](/sdk/reference/interfaces/i-collection-doc#standards)

***

### standardsConformance?

> `optional` **standardsConformance?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:172](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L172)

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

***

### standardsInfo?

> `optional` **standardsInfo?**: [`iStandardsInfo`](/sdk/reference/interfaces/i-standards-info)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:187](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L187)

Per-standard core-details object attached by the indexer. Companion to
`standardsConformance`. Only contains data that requires an extra fetch
(e.g. an escrow balance) or is a derived status enum — does NOT duplicate
data already on the collection doc (approvals, metadata, amounts), which
is derivable client-side.

***

### stats?

> `optional` **stats?**: [`iCollectionStatsDoc`](/sdk/reference/interfaces/i-collection-stats-doc)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:147](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L147)

The stats for this collection.

***

### tokenFloorPrices?

> `optional` **tokenFloorPrices?**: [`iTokenFloorPriceDoc`](/sdk/reference/interfaces/i-token-floor-price-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:150](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L150)

The floor prices for this collection.

***

### tokenMetadata

> **tokenMetadata**: [`iTokenMetadata`](/sdk/reference/interfaces/i-token-metadata)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:111](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L111)

The token metadata for this collection, with off-chain metadata populated.

#### Overrides

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`tokenMetadata`](/sdk/reference/interfaces/i-collection-doc#tokenmetadata)

***

### updateHistory

> **updateHistory**: [`iUpdateHistory`](/sdk/reference/interfaces/i-update-history)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:429](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L429)

The update history of this collection

#### Inherited from

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`updateHistory`](/sdk/reference/interfaces/i-collection-doc#updatehistory)

***

### validTokenIds

> **validTokenIds**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:431](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L431)

Valid token IDs for the collection

#### Inherited from

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`validTokenIds`](/sdk/reference/interfaces/i-collection-doc#validtokenids)

***

### views

> **views**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts:133](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesCollection.ts#L133)

The views for this collection and their pagination Doc. Views will only include the doc _ids. Use the pagination to fetch more. For example, if you want to fetch the activity for a view, you would use the view's pagination to fetch the doc _ids, then use the corresponding activity array to find the matching docs.

#### Index Signature

\[`viewId`: `string`\]: \{ `ids`: `string`[]; `pagination`: [`PaginationInfo`](/sdk/reference/interfaces/pagination-info); `type`: `string`; \} \| `undefined`
