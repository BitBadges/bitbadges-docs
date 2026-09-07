---
description: "Base class that implements the CustomType interface. It provides default implementations for all methods."
---

# Abstract Class: BaseNumberTypeClass\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:138](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L138)

Base class that implements the CustomType interface. It provides default implementations for all methods.

IMPORTANT: You must implement the `getNumberFieldNames` method yourself for this class to work properly.
Also, you will need to implement the `convert` method yourself if you want to use it in a typed manner. This
can be done by simply calling `convertClassPropertiesAndMaintainNumberTypes(this, convertFunction, options)` and casting the result to the correct type.

## Extended by

- [`ClaimCachePolicy`](/sdk/reference/classes/claim-cache-policy)
- [`ChallengeTrackerIdDetails`](/sdk/reference/classes/challenge-tracker-id-details)
- [`ClaimDetails`](/sdk/reference/classes/claim-details)
- [`UserOutgoingApproval`](/sdk/reference/classes/user-outgoing-approval)
- [`OutgoingApprovalCriteria`](/sdk/reference/classes/outgoing-approval-criteria)
- [`PredeterminedBalances`](/sdk/reference/classes/predetermined-balances)
- [`ManualBalances`](/sdk/reference/classes/manual-balances)
- [`RecurringOwnershipTimes`](/sdk/reference/classes/recurring-ownership-times)
- [`IncrementedBalances`](/sdk/reference/classes/incremented-balances)
- [`ApprovalAmounts`](/sdk/reference/classes/approval-amounts)
- [`ResetTimeIntervals`](/sdk/reference/classes/reset-time-intervals)
- [`MaxNumTransfers`](/sdk/reference/classes/max-num-transfers)
- [`AutoDeletionOptions`](/sdk/reference/classes/auto-deletion-options)
- [`UserIncomingApproval`](/sdk/reference/classes/user-incoming-approval)
- [`IncomingApprovalCriteria`](/sdk/reference/classes/incoming-approval-criteria)
- [`CollectionApproval`](/sdk/reference/classes/collection-approval)
- [`DynamicStoreChallenge`](/sdk/reference/classes/dynamic-store-challenge)
- [`AltTimeChecks`](/sdk/reference/classes/alt-time-checks)
- [`UserRoyalties`](/sdk/reference/classes/user-royalties)
- [`UserApprovalSettings`](/sdk/reference/classes/user-approval-settings)
- [`ApprovalCriteria`](/sdk/reference/classes/approval-criteria)
- [`ChallengeDetails`](/sdk/reference/classes/challenge-details)
- [`ChallengeInfoDetails`](/sdk/reference/classes/challenge-info-details)
- [`ApprovalInfoDetails`](/sdk/reference/classes/approval-info-details)
- [`Balance`](/sdk/reference/classes/balance)
- [`BatchTokenDetails`](/sdk/reference/classes/batch-token-details)
- [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)
- [`TokenMetadata`](/sdk/reference/classes/token-metadata)
- [`CoinTransfer`](/sdk/reference/classes/coin-transfer)
- [`ApprovalIdentifierDetails`](/sdk/reference/classes/approval-identifier-details)
- [`PrecalculateBalancesFromApprovalDetails`](/sdk/reference/classes/precalculate-balances-from-approval-details)
- [`PrecalculationOptions`](/sdk/reference/classes/precalculation-options)
- [`AmountTrackerIdDetails`](/sdk/reference/classes/amount-tracker-id-details)
- [`MustOwnTokens`](/sdk/reference/classes/must-own-tokens)
- [`MerkleChallenge`](/sdk/reference/classes/merkle-challenge)
- [`UpdateHistory`](/sdk/reference/classes/update-history)
- [`Voter`](/sdk/reference/classes/voter)
- [`VotingChallenge`](/sdk/reference/classes/voting-challenge)
- [`VoteProof`](/sdk/reference/classes/vote-proof)
- [`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge)
- [`DynamicStore`](/sdk/reference/classes/dynamic-store)
- [`DynamicStoreValue`](/sdk/reference/classes/dynamic-store-value)
- [`CollectionInvariants`](/sdk/reference/classes/collection-invariants)
- [`CollectionStats`](/sdk/reference/classes/collection-stats)
- [`UserPermissions`](/sdk/reference/classes/user-permissions)
- [`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission)
- [`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission)
- [`CollectionPermissions`](/sdk/reference/classes/collection-permissions)
- [`ActionPermission`](/sdk/reference/classes/action-permission)
- [`TokenIdsActionPermission`](/sdk/reference/classes/token-ids-action-permission)
- [`CollectionApprovalPermission`](/sdk/reference/classes/collection-approval-permission)
- [`PermissionCriteria`](/sdk/reference/classes/permission-criteria)
- [`ManagerSplitterPermissions`](/sdk/reference/classes/manager-splitter-permissions)
- [`Transfer`](/sdk/reference/classes/transfer)
- [`TransferWithIncrements`](/sdk/reference/classes/transfer-with-increments)
- [`UintRange`](/sdk/reference/classes/uint-range)
- [`UserBalanceStore`](/sdk/reference/classes/user-balance-store)
- [`SiwbbChallenge`](/sdk/reference/classes/siwbb-challenge)
- [`ConversionSideAWithDenom`](/sdk/reference/classes/conversion-side-a-with-denom)
- [`ConversionSideA`](/sdk/reference/classes/conversion-side-a)
- [`Conversion`](/sdk/reference/classes/conversion)
- [`ConversionWithoutDenom`](/sdk/reference/classes/conversion-without-denom)
- [`DenomUnit`](/sdk/reference/classes/denom-unit)
- [`CosmosCoinWrapperPathAddObject`](/sdk/reference/classes/cosmos-coin-wrapper-path-add-object)
- [`AliasPathAddObject`](/sdk/reference/classes/alias-path-add-object)
- [`CosmosCoinBackedPathAddObject`](/sdk/reference/classes/cosmos-coin-backed-path-add-object)
- [`InvariantsAddObject`](/sdk/reference/classes/invariants-add-object)
- [`CollectionMetadataDetails`](/sdk/reference/classes/collection-metadata-details)
- [`TokenMetadataDetails`](/sdk/reference/classes/token-metadata-details)
- [`Metadata`](/sdk/reference/classes/metadata)
- [`ActivityDoc`](/sdk/reference/classes/activity-doc)
- [`CoinTransferItem`](/sdk/reference/classes/coin-transfer-item)
- [`BaseStatsDoc`](/sdk/reference/classes/base-stats-doc)
- [`CollectionIndexDoc`](/sdk/reference/classes/collection-index-doc)
- [`FloorPriceHistory`](/sdk/reference/classes/floor-price-history)
- [`TokenFloorPriceDoc`](/sdk/reference/classes/token-floor-price-doc)
- [`ApprovalItemDoc`](/sdk/reference/classes/approval-item-doc)
- [`CollectionDoc`](/sdk/reference/classes/collection-doc)
- [`AccountDoc`](/sdk/reference/classes/account-doc)
- [`NotificationPreferences`](/sdk/reference/classes/notification-preferences)
- [`EmailVerificationStatus`](/sdk/reference/classes/email-verification-status)
- [`CustomPage`](/sdk/reference/classes/custom-page)
- [`ProfileDoc`](/sdk/reference/classes/profile-doc)
- [`QueueDoc`](/sdk/reference/classes/queue-doc)
- [`LatestBlockStatus`](/sdk/reference/classes/latest-block-status)
- [`StatusDoc`](/sdk/reference/classes/status-doc)
- [`BalanceDoc`](/sdk/reference/classes/balance-doc)
- [`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)
- [`PointsDoc`](/sdk/reference/classes/points-doc)
- [`TierWithOptionalWeight`](/sdk/reference/classes/tier-with-optional-weight)
- [`ListingViewsDoc`](/sdk/reference/classes/listing-views-doc)
- [`UtilityPageDoc`](/sdk/reference/classes/utility-page-doc)
- [`ClaimBuilderDoc`](/sdk/reference/classes/claim-builder-doc)
- [`ApprovalTrackerDoc`](/sdk/reference/classes/approval-tracker-doc)
- [`UsedLeafStatus`](/sdk/reference/classes/used-leaf-status)
- [`MerkleChallengeTrackerDoc`](/sdk/reference/classes/merkle-challenge-tracker-doc)
- [`FetchDoc`](/sdk/reference/classes/fetch-doc)
- [`RefreshDoc`](/sdk/reference/classes/refresh-doc)
- [`AirdropDoc`](/sdk/reference/classes/airdrop-doc)
- [`CreatorCreditsDoc`](/sdk/reference/classes/creator-credits-doc)
- [`IPFSTotalsDoc`](/sdk/reference/classes/ipfs-totals-doc)
- [`ComplianceDoc`](/sdk/reference/classes/compliance-doc)
- [`DynamicDataDoc`](/sdk/reference/classes/dynamic-data-doc)
- [`DeveloperAppDoc`](/sdk/reference/classes/developer-app-doc)
- [`DepositBalanceDoc`](/sdk/reference/classes/deposit-balance-doc)
- [`PluginDoc`](/sdk/reference/classes/plugin-doc)
- [`PluginVersionConfig`](/sdk/reference/classes/plugin-version-config)
- [`SIWBBRequestDoc`](/sdk/reference/classes/siwbb-request-doc)
- [`TransactionEntry`](/sdk/reference/classes/transaction-entry)
- [`DynamicStoreDoc`](/sdk/reference/classes/dynamic-store-doc)
- [`DynamicStoreDocWithDetails`](/sdk/reference/classes/dynamic-store-doc-with-details)
- [`DynamicStoreValueDoc`](/sdk/reference/classes/dynamic-store-value-doc)
- [`ClaimReward`](/sdk/reference/classes/claim-reward)
- [`GetCollectionsSuccessResponse`](/sdk/reference/classes/get-collections-success-response)
- [`GetAccountSuccessResponse`](/sdk/reference/classes/get-account-success-response)
- [`GetAccountsSuccessResponse`](/sdk/reference/classes/get-accounts-success-response)
- [`GetStatusSuccessResponse`](/sdk/reference/classes/get-status-success-response)
- [`GetSearchPayload`](/sdk/reference/classes/get-search-payload)
- [`GetSearchSuccessResponse`](/sdk/reference/classes/get-search-success-response)
- [`GetClaimsSuccessResponse`](/sdk/reference/classes/get-claims-success-response)
- [`GetClaimSuccessResponse`](/sdk/reference/classes/get-claim-success-response)
- [`ClaimAttempt`](/sdk/reference/classes/claim-attempt)
- [`GetClaimAttemptsSuccessResponse`](/sdk/reference/classes/get-claim-attempts-success-response)
- [`GetSignInChallengeSuccessResponse`](/sdk/reference/classes/get-sign-in-challenge-success-response)
- [`GetBrowseSuccessResponse`](/sdk/reference/classes/get-browse-success-response)
- [`FetchMetadataDirectlySuccessResponse`](/sdk/reference/classes/fetch-metadata-directly-success-response)
- [`GetSIWBBRequestsForDeveloperAppSuccessResponse`](/sdk/reference/classes/get-siwbb-requests-for-developer-app-success-response)
- [`ExchangeSIWBBAuthorizationCodeSuccessResponse`](/sdk/reference/classes/exchange-siwbb-authorization-code-success-response)
- [`GetDeveloperAppSuccessResponse`](/sdk/reference/classes/get-developer-app-success-response)
- [`GetPluginSuccessResponse`](/sdk/reference/classes/get-plugin-success-response)
- [`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response)
- [`CreateDynamicDataStoreSuccessResponse`](/sdk/reference/classes/create-dynamic-data-store-success-response)
- [`GetDynamicDataStoreValuesPaginatedSuccessResponse`](/sdk/reference/classes/get-dynamic-data-store-values-paginated-success-response)
- [`GetDynamicDataStoreSuccessResponse`](/sdk/reference/classes/get-dynamic-data-store-success-response)
- [`GetDynamicDataStoresSuccessResponse`](/sdk/reference/classes/get-dynamic-data-stores-success-response)
- [`UpdateDynamicDataStoreSuccessResponse`](/sdk/reference/classes/update-dynamic-data-store-success-response)
- [`GetUtilityPageSuccessResponse`](/sdk/reference/classes/get-utility-page-success-response)
- [`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response)
- [`CreateUtilityPageSuccessResponse`](/sdk/reference/classes/create-utility-page-success-response)
- [`UpdateUtilityPageSuccessResponse`](/sdk/reference/classes/update-utility-page-success-response)
- [`GetCollectionAmountTrackerByIdSuccessResponse`](/sdk/reference/classes/get-collection-amount-tracker-by-id-success-response)
- [`GetCollectionChallengeTrackerByIdSuccessResponse`](/sdk/reference/classes/get-collection-challenge-tracker-by-id-success-response)
- [`GetSwapActivitiesSuccessResponse`](/sdk/reference/classes/get-swap-activities-success-response)
- [`GetOnChainDynamicStoreSuccessResponse`](/sdk/reference/classes/get-on-chain-dynamic-store-success-response)
- [`GetOnChainDynamicStoresByCreatorSuccessResponse`](/sdk/reference/classes/get-on-chain-dynamic-stores-by-creator-success-response)
- [`GetOnChainDynamicStoreValuesPaginatedSuccessResponse`](/sdk/reference/classes/get-on-chain-dynamic-store-values-paginated-success-response)
- [`GetIntentsSuccessResponse`](/sdk/reference/classes/get-intents-success-response)
- [`FilterCollectionApprovalsSuccessResponse`](/sdk/reference/classes/filter-collection-approvals-success-response)
- [`GetUserBalancesSuccessResponse`](/sdk/reference/classes/get-user-balances-success-response)
- [`GetAllListingsSuccessResponse`](/sdk/reference/classes/get-all-listings-success-response)
- [`GetCollectionOffersSuccessResponse`](/sdk/reference/classes/get-collection-offers-success-response)
- [`GetListingsForTokenIdSuccessResponse`](/sdk/reference/classes/get-listings-for-token-id-success-response)
- [`GetOffersForTokenIdSuccessResponse`](/sdk/reference/classes/get-offers-for-token-id-success-response)
- [`GetCandlestickDataSuccessResponse`](/sdk/reference/classes/get-candlestick-data-success-response)
- [`GetLiquidityPairPriceHistorySuccessResponse`](/sdk/reference/classes/get-liquidity-pair-price-history-success-response)
- [`GetPoolsBatchSuccessResponse`](/sdk/reference/classes/get-pools-batch-success-response)
- [`GetVoteByProposalIdSuccessResponse`](/sdk/reference/classes/get-vote-by-proposal-id-success-response)
- [`GetVotesByCollectionSuccessResponse`](/sdk/reference/classes/get-votes-by-collection-success-response)
- [`GetVotesByVoterSuccessResponse`](/sdk/reference/classes/get-votes-by-voter-success-response)
- [`FilterSuggestionsSuccessResponse`](/sdk/reference/classes/filter-suggestions-success-response)
- [`FilterTokensInCollectionSuccessResponse`](/sdk/reference/classes/filter-tokens-in-collection-success-response)
- [`GetOwnersSuccessResponse`](/sdk/reference/classes/get-owners-success-response)
- [`GetBalanceByAddressSpecificTokenSuccessResponse`](/sdk/reference/classes/get-balance-by-address-specific-token-success-response)
- [`GetTokenActivitySuccessResponse`](/sdk/reference/classes/get-token-activity-success-response)
- [`RefreshStatusSuccessResponse`](/sdk/reference/classes/refresh-status-success-response)
- [`GetCollectionIndexSuccessResponse`](/sdk/reference/classes/get-collection-index-success-response)
- [`SiwbbChallengeParams`](/sdk/reference/classes/siwbb-challenge-params)
- [`SiwbbAssetDetails`](/sdk/reference/classes/siwbb-asset-details)
- [`SiwbbAndGroup`](/sdk/reference/classes/siwbb-and-group)
- [`SiwbbOrGroup`](/sdk/reference/classes/siwbb-or-group)
- [`OwnershipRequirements`](/sdk/reference/classes/ownership-requirements)
- [`GetCollectionOwnersSuccessResponse`](/sdk/reference/classes/get-collection-owners-success-response)
- [`GetCollectionTransferActivitySuccessResponse`](/sdk/reference/classes/get-collection-transfer-activity-success-response)
- [`GetCollectionChallengeTrackersSuccessResponse`](/sdk/reference/classes/get-collection-challenge-trackers-success-response)
- [`GetCollectionAmountTrackersSuccessResponse`](/sdk/reference/classes/get-collection-amount-trackers-success-response)
- [`GetCollectionListingsSuccessResponse`](/sdk/reference/classes/get-collection-listings-success-response)
- [`GetTransferActivityForUserSuccessResponse`](/sdk/reference/classes/get-transfer-activity-for-user-success-response)
- [`GetTokensViewForUserSuccessResponse`](/sdk/reference/classes/get-tokens-view-for-user-success-response)
- [`GetClaimActivityForUserSuccessResponse`](/sdk/reference/classes/get-claim-activity-for-user-success-response)
- [`GetSiwbbRequestsForUserSuccessResponse`](/sdk/reference/classes/get-siwbb-requests-for-user-success-response)
- [`GetPointsActivityForUserSuccessResponse`](/sdk/reference/classes/get-points-activity-for-user-success-response)
- [`GetCollectionSuccessResponse`](/sdk/reference/classes/get-collection-success-response)
- [`GetTokenMetadataSuccessResponse`](/sdk/reference/classes/get-token-metadata-success-response)
- [`GetCollectionClaimsSuccessResponse`](/sdk/reference/classes/get-collection-claims-success-response)
- [`GetAddressListClaimsSuccessResponse`](/sdk/reference/classes/get-address-list-claims-success-response)
- [`MsgCreateCollection`](/sdk/reference/classes/msg-create-collection)
- [`MsgDeleteCollection`](/sdk/reference/classes/msg-delete-collection)
- [`MsgTransferTokens`](/sdk/reference/classes/msg-transfer-tokens)
- [`MsgUniversalUpdateCollection`](/sdk/reference/classes/msg-universal-update-collection)
- [`MsgUpdateCollection`](/sdk/reference/classes/msg-update-collection)
- [`MsgUpdateUserApprovals`](/sdk/reference/classes/msg-update-user-approvals)
- [`PoolParams`](/sdk/reference/classes/pool-params)
- [`PoolAsset`](/sdk/reference/classes/pool-asset)
- [`Pool`](/sdk/reference/classes/pool)
- [`SwapAmountInRoute`](/sdk/reference/classes/swap-amount-in-route)
- [`Affiliate`](/sdk/reference/classes/affiliate)
- [`SwapAmountOutRoute`](/sdk/reference/classes/swap-amount-out-route)
- [`MsgJoinPool`](/sdk/reference/classes/msg-join-pool)
- [`MsgJoinPoolResponse`](/sdk/reference/classes/msg-join-pool-response)
- [`MsgExitPool`](/sdk/reference/classes/msg-exit-pool)
- [`MsgExitPoolResponse`](/sdk/reference/classes/msg-exit-pool-response)
- [`MsgSwapExactAmountIn`](/sdk/reference/classes/msg-swap-exact-amount-in)
- [`MsgSwapExactAmountInResponse`](/sdk/reference/classes/msg-swap-exact-amount-in-response)
- [`IBCTransferInfo`](/sdk/reference/classes/ibc-transfer-info)
- [`MsgSwapExactAmountInWithIBCTransfer`](/sdk/reference/classes/msg-swap-exact-amount-in-with-ibc-transfer)
- [`MsgSwapExactAmountInWithIBCTransferResponse`](/sdk/reference/classes/msg-swap-exact-amount-in-with-ibc-transfer-response)
- [`MsgSwapExactAmountOut`](/sdk/reference/classes/msg-swap-exact-amount-out)
- [`MsgSwapExactAmountOutResponse`](/sdk/reference/classes/msg-swap-exact-amount-out-response)
- [`MsgJoinSwapExternAmountIn`](/sdk/reference/classes/msg-join-swap-extern-amount-in)
- [`MsgJoinSwapExternAmountInResponse`](/sdk/reference/classes/msg-join-swap-extern-amount-in-response)
- [`MsgJoinSwapShareAmountOut`](/sdk/reference/classes/msg-join-swap-share-amount-out)
- [`MsgJoinSwapShareAmountOutResponse`](/sdk/reference/classes/msg-join-swap-share-amount-out-response)
- [`MsgExitSwapShareAmountIn`](/sdk/reference/classes/msg-exit-swap-share-amount-in)
- [`MsgExitSwapShareAmountInResponse`](/sdk/reference/classes/msg-exit-swap-share-amount-in-response)
- [`MsgExitSwapExternAmountOut`](/sdk/reference/classes/msg-exit-swap-extern-amount-out)
- [`MsgExitSwapExternAmountOutResponse`](/sdk/reference/classes/msg-exit-swap-extern-amount-out-response)
- [`MsgCreateBalancerPool`](/sdk/reference/classes/msg-create-balancer-pool)
- [`MsgCreateBalancerPoolResponse`](/sdk/reference/classes/msg-create-balancer-pool-response)
- [`LiquidityPoolInfoVolume`](/sdk/reference/classes/liquidity-pool-info-volume)
- [`LiquidityPoolInfoDoc`](/sdk/reference/classes/liquidity-pool-info-doc)
- [`AssetPriceHistoryDoc`](/sdk/reference/classes/asset-price-history-doc)
- [`WrappedCosmosAssetMetadataDoc`](/sdk/reference/classes/wrapped-cosmos-asset-metadata-doc)

## Type Parameters

### T

`T` *extends* [`CustomType`](/sdk/reference/interfaces/custom-type)\<`T`\>

## Implements

- [`CustomType`](/sdk/reference/interfaces/custom-type)\<`T`\>

## Constructors

### Constructor

> **new BaseNumberTypeClass**\<`T`\>(): `BaseNumberTypeClass`\<`T`\>

#### Returns

`BaseNumberTypeClass`\<`T`\>

## Methods

### clone()

> **clone**(): `T`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`T`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`clone`](/sdk/reference/interfaces/custom-type#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): [`CustomType`](/sdk/reference/interfaces/custom-type)\<`any`\>

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:165](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L165)

Converts the object to a different NumberType equivalent.

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`val`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

[`CustomType`](/sdk/reference/interfaces/custom-type)\<`any`\>

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`convert`](/sdk/reference/interfaces/custom-type#convert)

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

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L157)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`getNumberFieldNames`](/sdk/reference/interfaces/custom-type#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`hasNumberFields`](/sdk/reference/interfaces/custom-type#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`toJson`](/sdk/reference/interfaces/custom-type#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`toJsonString`](/sdk/reference/interfaces/custom-type#tojsonstring)
