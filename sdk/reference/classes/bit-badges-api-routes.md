---
description: "Exports static methods that return the routes for the BitBadges API. Append this to the base URL of the API to get the full URL."
---

# Class: BitBadgesApiRoutes

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L16)

Exports static methods that return the routes for the BitBadges API. Append this to the base URL of the API to get the full URL.

## Example

```ts
import { BitBadgesApiRoutes } from 'bitbadges'
const url = `https://api.bitbadges.io${BitBadgesApiRoutes.GetStatusRoute()}`
```

## Constructors

### Constructor

> **new BitBadgesApiRoutes**(): `BitBadgesApiRoutes`

#### Returns

`BitBadgesApiRoutes`

## Methods

### AddApprovalDetailsToOffChainStorageRoute()

> `static` **AddApprovalDetailsToOffChainStorageRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:57](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L57)

#### Returns

`string`

***

### AddToIpfsRoute()

> `static` **AddToIpfsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:56](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L56)

#### Returns

`string`

***

### BroadcastTxEvmRoute()

> `static` **BroadcastTxEvmRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:195](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L195)

#### Returns

`string`

***

### BroadcastTxRoute()

> `static` **BroadcastTxRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:66](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L66)

#### Returns

`string`

***

### CheckClaimSuccessRoute()

> `static` **CheckClaimSuccessRoute**(`claimId`, `address`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:112](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L112)

#### Parameters

##### claimId

`string`

##### address

`string`

#### Returns

`string`

***

### CheckIfSignedInRoute()

> `static` **CheckIfSignedInRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:62](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L62)

#### Returns

`string`

***

### CompleteClaimRoute()

> `static` **CompleteClaimRoute**(`claimId`, `address`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L34)

#### Parameters

##### claimId

`string`

##### address

`string`

#### Returns

`string`

***

### CRUDApiKeysRoute()

> `static` **CRUDApiKeysRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:54](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L54)

#### Returns

`string`

***

### CRUDClaimsRoute()

> `static` **CRUDClaimsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:47](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L47)

#### Returns

`string`

***

### CRUDDeveloperAppRoute()

> `static` **CRUDDeveloperAppRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:79](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L79)

#### Returns

`string`

***

### CRUDDynamicDataStoreRoute()

> `static` **CRUDDynamicDataStoreRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:99](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L99)

#### Returns

`string`

***

### CRUDPluginRoute()

> `static` **CRUDPluginRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:86](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L86)

#### Returns

`string`

***

### CRUDPromptSkillsRoute()

> `static` **CRUDPromptSkillsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:205](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L205)

#### Returns

`string`

***

### CRUDSIWBBRequestRoute()

> `static` **CRUDSIWBBRequestRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:72](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L72)

#### Returns

`string`

***

### CRUDUtilityPagesRoute()

> `static` **CRUDUtilityPagesRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:108](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L108)

#### Returns

`string`

***

### EstimateSwapRoute()

> `static` **EstimateSwapRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:145](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L145)

#### Returns

`string`

***

### ExchangeSIWBBAuthorizationCodesRoute()

> `static` **ExchangeSIWBBAuthorizationCodesRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:71](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L71)

#### Returns

`string`

***

### FetchMetadataDirectlyRoute()

> `static` **FetchMetadataDirectlyRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:68](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L68)

#### Returns

`string`

***

### FetchPromptSkillsRoute()

> `static` **FetchPromptSkillsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:204](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L204)

#### Returns

`string`

***

### FilterCollectionApprovalsRoute()

> `static` **FilterCollectionApprovalsRoute**(`collectionId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:159](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L159)

#### Parameters

##### collectionId

`string`

#### Returns

`string`

***

### FilterSuggestionsRoute()

> `static` **FilterSuggestionsRoute**(`collectionId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:32](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L32)

#### Parameters

##### collectionId

`string`

#### Returns

`string`

***

### FilterTokensInCollectionRoute()

> `static` **FilterTokensInCollectionRoute**(`collectionId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:31](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L31)

#### Parameters

##### collectionId

`string`

#### Returns

`string`

***

### GenericVerifyAssetsRoute()

> `static` **GenericVerifyAssetsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:42](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L42)

#### Returns

`string`

***

### GenericVerifyRoute()

> `static` **GenericVerifyRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:74](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L74)

#### Returns

`string`

***

### GetAccountRoute()

> `static` **GetAccountRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:50](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L50)

#### Returns

`string`

***

### GetAccountsRoute()

> `static` **GetAccountsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:49](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L49)

#### Returns

`string`

***

### GetActiveAuthorizationsRoute()

> `static` **GetActiveAuthorizationsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:88](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L88)

#### Returns

`string`

***

### GetAllListingsRoute()

> `static` **GetAllListingsRoute**(`collectionId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:168](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L168)

#### Parameters

##### collectionId

`string`

#### Returns

`string`

***

### GetApiKeysRoute()

> `static` **GetApiKeysRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:53](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L53)

#### Returns

`string`

***

### GetBalanceByAddressRoute()

> `static` **GetBalanceByAddressRoute**(`collectionId`, `bitbadgesAddress`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L23)

#### Parameters

##### collectionId

`string`

##### bitbadgesAddress

`string`

#### Returns

`string`

***

### GetBalanceByAddressSpecificTokenRoute()

> `static` **GetBalanceByAddressSpecificTokenRoute**(`collectionId`, `bitbadgesAddress`, `tokenId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L25)

#### Parameters

##### collectionId

`string`

##### bitbadgesAddress

`string`

##### tokenId

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`string`

***

### GetBrowseRoute()

> `static` **GetBrowseRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:64](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L64)

#### Returns

`string`

***

### GetCandlestickDataRoute()

> `static` **GetCandlestickDataRoute**(`collectionId`, `tokenId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:176](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L176)

#### Parameters

##### collectionId

`string`

##### tokenId

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`string`

***

### GetClaimActivityByTypeForUserRoute()

> `static` **GetClaimActivityByTypeForUserRoute**(`address`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:119](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L119)

#### Parameters

##### address

`string`

#### Returns

`string`

***

### GetClaimAttemptsRoute()

> `static` **GetClaimAttemptsRoute**(`claimId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:38](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L38)

#### Parameters

##### claimId

`string`

#### Returns

`string`

***

### GetClaimAttemptStatusRoute()

> `static` **GetClaimAttemptStatusRoute**(`claimAttemptId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:37](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L37)

#### Parameters

##### claimAttemptId

`string`

#### Returns

`string`

***

### GetClaimRoute()

> `static` **GetClaimRoute**(`claimId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L44)

#### Parameters

##### claimId

`string`

#### Returns

`string`

***

### GetClaimsRoute()

> `static` **GetClaimsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:45](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L45)

#### Returns

`string`

***

### GetCodesFromSeedHelperRoute()

> `static` **GetCodesFromSeedHelperRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:91](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L91)

#### Returns

`string`

***

### GetCollectionAmountTrackerByIdRoute()

> `static` **GetCollectionAmountTrackerByIdRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:133](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L133)

#### Returns

`string`

***

### GetCollectionAmountTrackersRoute()

> `static` **GetCollectionAmountTrackersRoute**(`collectionId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:130](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L130)

#### Parameters

##### collectionId

`string`

#### Returns

`string`

***

### GetCollectionChallengeTrackerByIdRoute()

> `static` **GetCollectionChallengeTrackerByIdRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:134](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L134)

#### Returns

`string`

***

### GetCollectionChallengeTrackersRoute()

> `static` **GetCollectionChallengeTrackersRoute**(`collectionId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:129](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L129)

#### Parameters

##### collectionId

`string`

#### Returns

`string`

***

### GetCollectionClaimsRoute()

> `static` **GetCollectionClaimsRoute**(`collectionId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:126](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L126)

#### Parameters

##### collectionId

`string`

#### Returns

`string`

***

### GetCollectionIndexRoute()

> `static` **GetCollectionIndexRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:199](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L199)

#### Returns

`string`

***

### GetCollectionListingsRoute()

> `static` **GetCollectionListingsRoute**(`collectionId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:131](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L131)

#### Parameters

##### collectionId

`string`

#### Returns

`string`

***

### GetCollectionOffersRoute()

> `static` **GetCollectionOffersRoute**(`collectionId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:169](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L169)

#### Parameters

##### collectionId

`string`

#### Returns

`string`

***

### GetCollectionOwnersRoute()

> `static` **GetCollectionOwnersRoute**(`collectionId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:122](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L122)

#### Parameters

##### collectionId

`string`

#### Returns

`string`

***

### GetCollectionRoute()

> `static` **GetCollectionRoute**(`collectionId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:123](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L123)

#### Parameters

##### collectionId

`string`

#### Returns

`string`

***

### GetCollectionsRoute()

> `static` **GetCollectionsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:19](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L19)

#### Returns

`string`

***

### GetCollectionTransferActivityRoute()

> `static` **GetCollectionTransferActivityRoute**(`collectionId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:128](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L128)

#### Parameters

##### collectionId

`string`

#### Returns

`string`

***

### GetCreatorPluginsRoute()

> `static` **GetCreatorPluginsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:85](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L85)

#### Returns

`string`

***

### GetDeveloperAppRoute()

> `static` **GetDeveloperAppRoute**(`developerAppId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:76](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L76)

#### Parameters

##### developerAppId

`string`

#### Returns

`string`

***

### GetDeveloperAppsRoute()

> `static` **GetDeveloperAppsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:77](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L77)

#### Returns

`string`

***

### GetDynamicDataStoreActivityRoute()

> `static` **GetDynamicDataStoreActivityRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:100](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L100)

#### Returns

`string`

***

### GetDynamicDataStoreRoute()

> `static` **GetDynamicDataStoreRoute**(`dynamicStoreId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L93)

#### Parameters

##### dynamicStoreId

`string`

#### Returns

`string`

***

### GetDynamicDataStoresRoute()

> `static` **GetDynamicDataStoresRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L97)

#### Returns

`string`

***

### GetDynamicDataStoreValueRoute()

> `static` **GetDynamicDataStoreValueRoute**(`dynamicStoreId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:94](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L94)

#### Parameters

##### dynamicStoreId

`string`

#### Returns

`string`

***

### GetDynamicDataStoreValuesPaginatedRoute()

> `static` **GetDynamicDataStoreValuesPaginatedRoute**(`dynamicStoreId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:95](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L95)

#### Parameters

##### dynamicStoreId

`string`

#### Returns

`string`

***

### GetGatedContentForClaimRoute()

> `static` **GetGatedContentForClaimRoute**(`claimId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:39](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L39)

#### Parameters

##### claimId

`string`

#### Returns

`string`

***

### GetIntentsRoute()

> `static` **GetIntentsRoute**(`address?`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:158](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L158)

#### Parameters

##### address?

`string`

#### Returns

`string`

***

### GetLiquidityPairPriceHistoryRoute()

> `static` **GetLiquidityPairPriceHistoryRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:179](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L179)

#### Returns

`string`

***

### GetListingsForTokenIdRoute()

> `static` **GetListingsForTokenIdRoute**(`collectionId`, `tokenId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:170](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L170)

#### Parameters

##### collectionId

`string`

##### tokenId

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`string`

***

### GetOffersForTokenIdRoute()

> `static` **GetOffersForTokenIdRoute**(`collectionId`, `tokenId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:172](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L172)

#### Parameters

##### collectionId

`string`

##### tokenId

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`string`

***

### GetOnChainDynamicStoreRoute()

> `static` **GetOnChainDynamicStoreRoute**(`storeId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L161)

#### Parameters

##### storeId

`string`

#### Returns

`string`

***

### GetOnChainDynamicStoresByCreatorRoute()

> `static` **GetOnChainDynamicStoresByCreatorRoute**(`address`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:162](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L162)

#### Parameters

##### address

`string`

#### Returns

`string`

***

### GetOnChainDynamicStoreValueRoute()

> `static` **GetOnChainDynamicStoreValueRoute**(`storeId`, `address`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:163](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L163)

#### Parameters

##### storeId

`string`

##### address

`string`

#### Returns

`string`

***

### GetOnChainDynamicStoreValuesPaginatedRoute()

> `static` **GetOnChainDynamicStoreValuesPaginatedRoute**(`storeId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:165](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L165)

#### Parameters

##### storeId

`string`

#### Returns

`string`

***

### GetOrderbookDepthRoute()

> `static` **GetOrderbookDepthRoute**(`collectionId`, `tokenId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:174](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L174)

#### Parameters

##### collectionId

`string`

##### tokenId

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`string`

***

### GetOwnersRoute()

> `static` **GetOwnersRoute**(`collectionId`, `tokenId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L21)

#### Parameters

##### collectionId

`string`

##### tokenId

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`string`

***

### GetPluginErrorsRoute()

> `static` **GetPluginErrorsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:41](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L41)

#### Returns

`string`

***

### GetPluginRoute()

> `static` **GetPluginRoute**(`pluginId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:82](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L82)

#### Parameters

##### pluginId

`string`

#### Returns

`string`

***

### GetPluginsRoute()

> `static` **GetPluginsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:83](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L83)

#### Returns

`string`

***

### GetPointsActivityForUserRoute()

> `static` **GetPointsActivityForUserRoute**(`address`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:120](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L120)

#### Parameters

##### address

`string`

#### Returns

`string`

***

### GetPoolsBatchRoute()

> `static` **GetPoolsBatchRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:180](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L180)

#### Returns

`string`

***

### GetPredictionDetailRoute()

> `static` **GetPredictionDetailRoute**(`collectionId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:188](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L188)

#### Parameters

##### collectionId

`string`

#### Returns

`string`

***

### GetPredictionPricesRoute()

> `static` **GetPredictionPricesRoute**(`collectionId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:189](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L189)

#### Parameters

##### collectionId

`string`

#### Returns

`string`

***

### GetPredictionsRoute()

> `static` **GetPredictionsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:187](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L187)

#### Returns

`string`

***

### GetPromptSkillRoute()

> `static` **GetPromptSkillRoute**(`promptSkillId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:202](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L202)

#### Parameters

##### promptSkillId

`string`

#### Returns

`string`

***

### GetRefreshStatusRoute()

> `static` **GetRefreshStatusRoute**(`collectionId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:30](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L30)

#### Parameters

##### collectionId

`string`

#### Returns

`string`

***

### GetReservedClaimCodesRoute()

> `static` **GetReservedClaimCodesRoute**(`claimId`, `address`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L36)

#### Parameters

##### claimId

`string`

##### address

`string`

#### Returns

`string`

***

### GetSignInChallengeRoute()

> `static` **GetSignInChallengeRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:59](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L59)

#### Returns

`string`

***

### GetSIWBBRequestsForDeveloperAppRoute()

> `static` **GetSIWBBRequestsForDeveloperAppRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:80](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L80)

#### Returns

`string`

***

### GetSiwbbRequestsForUserRoute()

> `static` **GetSiwbbRequestsForUserRoute**(`address`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:114](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L114)

#### Parameters

##### address

`string`

#### Returns

`string`

***

### GetSkipAssetsRoute()

> `static` **GetSkipAssetsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:153](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L153)

#### Returns

`string`

***

### GetSkipBalancesRoute()

> `static` **GetSkipBalancesRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:155](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L155)

#### Returns

`string`

***

### GetSkipChainsRoute()

> `static` **GetSkipChainsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:154](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L154)

#### Returns

`string`

***

### GetSkipTxStatusRoute()

> `static` **GetSkipTxStatusRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L157)

#### Returns

`string`

***

### GetStatusRoute()

> `static` **GetStatusRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L17)

#### Returns

`string`

***

### GetSwapActivitiesRoute()

> `static` **GetSwapActivitiesRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:136](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L136)

#### Returns

`string`

***

### GetSwapAssetsRoute()

> `static` **GetSwapAssetsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:142](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L142)

#### Returns

`string`

***

### GetSwapBalancesRoute()

> `static` **GetSwapBalancesRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:144](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L144)

#### Returns

`string`

***

### GetSwapChainsRoute()

> `static` **GetSwapChainsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L143)

#### Returns

`string`

***

### GetSwapStatusRoute()

> `static` **GetSwapStatusRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:147](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L147)

#### Returns

`string`

***

### GetTokenActivityRoute()

> `static` **GetTokenActivityRoute**(`collectionId`, `tokenId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L27)

#### Parameters

##### collectionId

`string`

##### tokenId

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`string`

***

### GetTokenMetadataRoute()

> `static` **GetTokenMetadataRoute**(`collectionId`, `tokenId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:124](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L124)

#### Parameters

##### collectionId

`string`

##### tokenId

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`string`

***

### GetTokensByTypeForUserRoute()

> `static` **GetTokensByTypeForUserRoute**(`address`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:116](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L116)

#### Parameters

##### address

`string`

#### Returns

`string`

***

### GetTokensFromFaucetRoute()

> `static` **GetTokensFromFaucetRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:69](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L69)

#### Returns

`string`

***

### GetTransferActivityForUserRoute()

> `static` **GetTransferActivityForUserRoute**(`address`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L115)

#### Parameters

##### address

`string`

#### Returns

`string`

***

### GetUserBalancesRoute()

> `static` **GetUserBalancesRoute**(`address`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:117](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L117)

#### Parameters

##### address

`string`

#### Returns

`string`

***

### GetUtilityPageRoute()

> `static` **GetUtilityPageRoute**(`utilityPageId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L105)

#### Parameters

##### utilityPageId

`string`

#### Returns

`string`

***

### GetUtilityPagesRoute()

> `static` **GetUtilityPagesRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:106](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L106)

#### Returns

`string`

***

### GetVoteByProposalIdRoute()

> `static` **GetVoteByProposalIdRoute**(`proposalId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:184](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L184)

#### Parameters

##### proposalId

`string`

#### Returns

`string`

***

### GetVotesByCollectionRoute()

> `static` **GetVotesByCollectionRoute**(`collectionId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:183](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L183)

#### Parameters

##### collectionId

`string`

#### Returns

`string`

***

### GetVotesByVoterRoute()

> `static` **GetVotesByVoterRoute**(`voter`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:185](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L185)

#### Parameters

##### voter

`string`

#### Returns

`string`

***

### OauthRevokeRoute()

> `static` **OauthRevokeRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:89](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L89)

#### Returns

`string`

***

### PerformStoreActionBatchWithBodyAuthRoute()

> `static` **PerformStoreActionBatchWithBodyAuthRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:103](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L103)

#### Returns

`string`

***

### PerformStoreActionSingleWithBodyAuthRoute()

> `static` **PerformStoreActionSingleWithBodyAuthRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:102](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L102)

#### Returns

`string`

***

### RefreshMetadataRoute()

> `static` **RefreshMetadataRoute**(`collectionId`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:29](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L29)

#### Parameters

##### collectionId

`string`

#### Returns

`string`

***

### RotateApiKeyRoute()

> `static` **RotateApiKeyRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:55](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L55)

#### Returns

`string`

***

### RotateSIWBBRequestRoute()

> `static` **RotateSIWBBRequestRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:73](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L73)

#### Returns

`string`

***

### ScheduleTokenRefreshRoute()

> `static` **ScheduleTokenRefreshRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:110](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L110)

#### Returns

`string`

***

### SearchClaimsRoute()

> `static` **SearchClaimsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:46](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L46)

#### Returns

`string`

***

### SearchDeveloperAppsRoute()

> `static` **SearchDeveloperAppsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:78](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L78)

#### Returns

`string`

***

### SearchDynamicDataStoresRoute()

> `static` **SearchDynamicDataStoresRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:98](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L98)

#### Returns

`string`

***

### SearchPluginsRoute()

> `static` **SearchPluginsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:84](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L84)

#### Returns

`string`

***

### SearchPromptSkillsRoute()

> `static` **SearchPromptSkillsRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:203](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L203)

#### Returns

`string`

***

### SearchRoute()

> `static` **SearchRoute**(`searchValue`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:18](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L18)

#### Parameters

##### searchValue

`string`

#### Returns

`string`

***

### SearchUtilityPagesRoute()

> `static` **SearchUtilityPagesRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:107](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L107)

#### Returns

`string`

***

### SignOutRoute()

> `static` **SignOutRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:61](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L61)

#### Returns

`string`

***

### SimulateClaimRoute()

> `static` **SimulateClaimRoute**(`claimId`, `address`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:35](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L35)

#### Parameters

##### claimId

`string`

##### address

`string`

#### Returns

`string`

***

### SimulateTxEvmRoute()

> `static` **SimulateTxEvmRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:196](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L196)

#### Returns

`string`

***

### SimulateTxRoute()

> `static` **SimulateTxRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:67](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L67)

#### Returns

`string`

***

### TrackSkipTxRoute()

> `static` **TrackSkipTxRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:156](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L156)

#### Returns

`string`

***

### TrackSwapRoute()

> `static` **TrackSwapRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:146](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L146)

#### Returns

`string`

***

### UpdateAccountInfoRoute()

> `static` **UpdateAccountInfoRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:51](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L51)

#### Returns

`string`

***

### VerifySignInRoute()

> `static` **VerifySignInRoute**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts:60](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/routes.ts#L60)

#### Returns

`string`
