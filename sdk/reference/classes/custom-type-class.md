---
description: "Base class that implements the CustomType interface. It provides default implementations for all methods. This is to be used when the class and all of its…"
---

# Class: CustomTypeClass\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:92](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L92)

Base class that implements the CustomType interface. It provides default implementations for all methods.
This is to be used when the class and all of its fields are of primitive types (i.e. no number types).

## Extended by

- [`AddressList`](/sdk/reference/classes/address-list)
- [`PredeterminedOrderCalculationMethod`](/sdk/reference/classes/predetermined-order-calculation-method)
- [`AddressChecks`](/sdk/reference/classes/address-checks)
- [`CollectionMetadata`](/sdk/reference/classes/collection-metadata)
- [`MerklePathItem`](/sdk/reference/classes/merkle-path-item)
- [`MerkleProof`](/sdk/reference/classes/merkle-proof)
- [`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path)
- [`AliasPath`](/sdk/reference/classes/alias-path)
- [`CosmosCoinBackedPath`](/sdk/reference/classes/cosmos-coin-backed-path)
- [`PoolInfoVolume`](/sdk/reference/classes/pool-info-volume)
- [`PoolInfo`](/sdk/reference/classes/pool-info)
- [`AssetInfoDoc`](/sdk/reference/classes/asset-info-doc)
- [`ETHSignatureChallenge`](/sdk/reference/classes/eth-signature-challenge)
- [`ETHSignatureProof`](/sdk/reference/classes/eth-signature-proof)
- [`PathMetadata`](/sdk/reference/classes/path-metadata)
- [`EmptyResponseClass`](/sdk/reference/classes/empty-response-class)
- [`ApiKeyDoc`](/sdk/reference/classes/api-key-doc)
- [`UtilityPageContent`](/sdk/reference/classes/utility-page-content)
- [`UtilityPageLink`](/sdk/reference/classes/utility-page-link)
- [`LinkedTo`](/sdk/reference/classes/linked-to)
- [`InheritMetadataFrom`](/sdk/reference/classes/inherit-metadata-from)
- [`EstimatedCost`](/sdk/reference/classes/estimated-cost)
- [`AccessTokenDoc`](/sdk/reference/classes/access-token-doc)
- [`PromptSkillDoc`](/sdk/reference/classes/prompt-skill-doc)
- [`GetStatusPayload`](/sdk/reference/classes/get-status-payload)
- [`SearchClaimsPayload`](/sdk/reference/classes/search-claims-payload)
- [`GetClaimPayload`](/sdk/reference/classes/get-claim-payload)
- [`CompleteClaimSuccessResponse`](/sdk/reference/classes/complete-claim-success-response)
- [`GetClaimAttemptStatusSuccessResponse`](/sdk/reference/classes/get-claim-attempt-status-success-response)
- [`GetClaimAttemptsPayload`](/sdk/reference/classes/get-claim-attempts-payload)
- [`SimulateClaimSuccessResponse`](/sdk/reference/classes/simulate-claim-success-response)
- [`GetReservedClaimCodesSuccessResponse`](/sdk/reference/classes/get-reserved-claim-codes-success-response)
- [`UpdateAccountInfoSuccessResponse`](/sdk/reference/classes/update-account-info-success-response)
- [`AddToIpfsSuccessResponse`](/sdk/reference/classes/add-to-ipfs-success-response)
- [`AddApprovalDetailsToOffChainStorageSuccessResponse`](/sdk/reference/classes/add-approval-details-to-off-chain-storage-success-response)
- [`GetSignInChallengePayload`](/sdk/reference/classes/get-sign-in-challenge-payload)
- [`VerifySignInSuccessResponse`](/sdk/reference/classes/verify-sign-in-success-response)
- [`CheckSignInStatusSuccessResponse`](/sdk/reference/classes/check-sign-in-status-success-response)
- [`GetBrowsePayload`](/sdk/reference/classes/get-browse-payload)
- [`BroadcastTxSuccessResponse`](/sdk/reference/classes/broadcast-tx-success-response)
- [`SimulateTxSuccessResponse`](/sdk/reference/classes/simulate-tx-success-response)
- [`GenericVerifyAssetsSuccessResponse`](/sdk/reference/classes/generic-verify-assets-success-response)
- [`RotateSIWBBRequestSuccessResponse`](/sdk/reference/classes/rotate-siwbb-request-success-response)
- [`CreateSIWBBRequestSuccessResponse`](/sdk/reference/classes/create-siwbb-request-success-response)
- [`GetSIWBBRequestsForDeveloperAppPayload`](/sdk/reference/classes/get-siwbb-requests-for-developer-app-payload)
- [`CreateDeveloperAppSuccessResponse`](/sdk/reference/classes/create-developer-app-success-response)
- [`GetActiveAuthorizationsSuccessResponse`](/sdk/reference/classes/get-active-authorizations-success-response)
- [`SearchDeveloperAppsPayload`](/sdk/reference/classes/search-developer-apps-payload)
- [`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response)
- [`UpdateDeveloperAppSuccessResponse`](/sdk/reference/classes/update-developer-app-success-response)
- [`SearchPluginsPayload`](/sdk/reference/classes/search-plugins-payload)
- [`GetCreatorPluginsPayload`](/sdk/reference/classes/get-creator-plugins-payload)
- [`GetPluginsPayload`](/sdk/reference/classes/get-plugins-payload)
- [`GetGatedContentForClaimSuccessResponse`](/sdk/reference/classes/get-gated-content-for-claim-success-response)
- [`SearchDynamicDataStoresPayload`](/sdk/reference/classes/search-dynamic-data-stores-payload)
- [`GetDynamicDataStoreValueSuccessResponse`](/sdk/reference/classes/get-dynamic-data-store-value-success-response)
- [`DeleteDynamicDataStoreSuccessResponse`](/sdk/reference/classes/delete-dynamic-data-store-success-response)
- [`GetDynamicDataActivityPayload`](/sdk/reference/classes/get-dynamic-data-activity-payload)
- [`GetDynamicDataActivitySuccessResponse`](/sdk/reference/classes/get-dynamic-data-activity-success-response)
- [`GetApiKeysPayload`](/sdk/reference/classes/get-api-keys-payload)
- [`GetApiKeysSuccessResponse`](/sdk/reference/classes/get-api-keys-success-response)
- [`CreateApiKeySuccessResponse`](/sdk/reference/classes/create-api-key-success-response)
- [`RotateApiKeySuccessResponse`](/sdk/reference/classes/rotate-api-key-success-response)
- [`SearchUtilityPagesPayload`](/sdk/reference/classes/search-utility-pages-payload)
- [`GetPostActionStatusesSuccessResponse`](/sdk/reference/classes/get-post-action-statuses-success-response)
- [`GetPluginErrorsPayload`](/sdk/reference/classes/get-plugin-errors-payload)
- [`GetPluginErrorsSuccessResponse`](/sdk/reference/classes/get-plugin-errors-success-response)
- [`ScheduleTokenRefreshSuccessResponse`](/sdk/reference/classes/schedule-token-refresh-success-response)
- [`CheckClaimSuccessSuccessResponse`](/sdk/reference/classes/check-claim-success-success-response)
- [`GetSwapActivitiesPayload`](/sdk/reference/classes/get-swap-activities-payload)
- [`GetOnChainDynamicStoreValuesPaginatedPayload`](/sdk/reference/classes/get-on-chain-dynamic-store-values-paginated-payload)
- [`CreatePromptSkillSuccessResponse`](/sdk/reference/classes/create-prompt-skill-success-response)
- [`SearchPromptSkillsSuccessResponse`](/sdk/reference/classes/search-prompt-skills-success-response)
- [`GetSkipAssetsSuccessResponse`](/sdk/reference/classes/get-skip-assets-success-response)
- [`GetSkipChainsSuccessResponse`](/sdk/reference/classes/get-skip-chains-success-response)
- [`GetSkipBalancesSuccessResponse`](/sdk/reference/classes/get-skip-balances-success-response)
- [`TrackSkipTxSuccessResponse`](/sdk/reference/classes/track-skip-tx-success-response)
- [`GetSkipTxStatusSuccessResponse`](/sdk/reference/classes/get-skip-tx-status-success-response)
- [`GetSwapAssetsSuccessResponse`](/sdk/reference/classes/get-swap-assets-success-response)
- [`GetSwapChainsSuccessResponse`](/sdk/reference/classes/get-swap-chains-success-response)
- [`GetSwapBalancesSuccessResponse`](/sdk/reference/classes/get-swap-balances-success-response)
- [`TrackSwapSuccessResponse`](/sdk/reference/classes/track-swap-success-response)
- [`GetSwapStatusSuccessResponse`](/sdk/reference/classes/get-swap-status-success-response)
- [`GetOrderbookDepthSuccessResponse`](/sdk/reference/classes/get-orderbook-depth-success-response)
- [`GetPredictionsSuccessResponse`](/sdk/reference/classes/get-predictions-success-response)
- [`GetPredictionDetailSuccessResponse`](/sdk/reference/classes/get-prediction-detail-success-response)
- [`GetPredictionPricesSuccessResponse`](/sdk/reference/classes/get-prediction-prices-success-response)
- [`BroadcastTxEvmSuccessResponse`](/sdk/reference/classes/broadcast-tx-evm-success-response)
- [`SimulateTxEvmSuccessResponse`](/sdk/reference/classes/simulate-tx-evm-success-response)
- [`GetPromptSkillSuccessResponse`](/sdk/reference/classes/get-prompt-skill-success-response)
- [`FetchPromptSkillsSuccessResponse`](/sdk/reference/classes/fetch-prompt-skills-success-response)
- [`GetOwnersPayload`](/sdk/reference/classes/get-owners-payload)
- [`GetBalanceByAddressPayload`](/sdk/reference/classes/get-balance-by-address-payload)
- [`GetTokenActivityPayload`](/sdk/reference/classes/get-token-activity-payload)
- [`GetCollectionIndexPayload`](/sdk/reference/classes/get-collection-index-payload)
- [`MsgCreateAddressLists`](/sdk/reference/classes/msg-create-address-lists)
- [`MsgCreateDynamicStore`](/sdk/reference/classes/msg-create-dynamic-store)
- [`MsgCastVote`](/sdk/reference/classes/msg-cast-vote)
- [`MsgDeleteDynamicStore`](/sdk/reference/classes/msg-delete-dynamic-store)
- [`MsgDeleteIncomingApproval`](/sdk/reference/classes/msg-delete-incoming-approval)
- [`MsgDeleteOutgoingApproval`](/sdk/reference/classes/msg-delete-outgoing-approval)
- [`MsgPurgeApprovals`](/sdk/reference/classes/msg-purge-approvals)
- [`MsgSetTokenMetadata`](/sdk/reference/classes/msg-set-token-metadata)
- [`MsgSetCollectionApprovals`](/sdk/reference/classes/msg-set-collection-approvals)
- [`MsgSetCollectionMetadata`](/sdk/reference/classes/msg-set-collection-metadata)
- [`MsgSetCustomData`](/sdk/reference/classes/msg-set-custom-data)
- [`MsgSetDynamicStoreValue`](/sdk/reference/classes/msg-set-dynamic-store-value)
- [`MsgSetIncomingApproval`](/sdk/reference/classes/msg-set-incoming-approval)
- [`MsgSetIsArchived`](/sdk/reference/classes/msg-set-is-archived)
- [`MsgSetManager`](/sdk/reference/classes/msg-set-manager)
- [`MsgSetOutgoingApproval`](/sdk/reference/classes/msg-set-outgoing-approval)
- [`MsgSetStandards`](/sdk/reference/classes/msg-set-standards)
- [`MsgSetValidTokenIds`](/sdk/reference/classes/msg-set-valid-token-ids)
- [`MsgUpdateDynamicStore`](/sdk/reference/classes/msg-update-dynamic-store)
- [`MsgCreateManagerSplitter`](/sdk/reference/classes/msg-create-manager-splitter)
- [`MsgUpdateManagerSplitter`](/sdk/reference/classes/msg-update-manager-splitter)
- [`MsgDeleteManagerSplitter`](/sdk/reference/classes/msg-delete-manager-splitter)
- [`MsgExecuteUniversalUpdateCollection`](/sdk/reference/classes/msg-execute-universal-update-collection)

## Type Parameters

### T

`T` *extends* [`CustomType`](/sdk/reference/interfaces/custom-type)\<`T`\>

## Implements

- [`CustomType`](/sdk/reference/interfaces/custom-type)\<`T`\>

## Constructors

### Constructor

> **new CustomTypeClass**\<`T`\>(): `CustomTypeClass`\<`T`\>

#### Returns

`CustomTypeClass`\<`T`\>

## Methods

### clone()

> **clone**(): `T`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`T`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`clone`](/sdk/reference/interfaces/custom-type#clone)

***

### ~~convert()~~

> **convert**\<`U`\>(`_convertFunction?`, `options?`): [`CustomType`](/sdk/reference/interfaces/custom-type)\<`any`\>

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:124](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L124)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### \_convertFunction?

(`val`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

[`CustomType`](/sdk/reference/interfaces/custom-type)\<`any`\>

#### Deprecated

This function is unnecessary as this field has no numeric types.
Please use the `.clone()` method instead.

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`convert`](/sdk/reference/interfaces/custom-type#convert)

***

### equals()

> **equals**\<`U`\>(`other`, `normalizeNumberTypes?`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:101](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L101)

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

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:111](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L111)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`getNumberFieldNames`](/sdk/reference/interfaces/custom-type#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L115)

Checks if the object has number fields.

#### Returns

`boolean`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`hasNumberFields`](/sdk/reference/interfaces/custom-type#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L93)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`toJson`](/sdk/reference/interfaces/custom-type#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L97)

Converts the object to a JSON string.

#### Returns

`string`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`toJsonString`](/sdk/reference/interfaces/custom-type#tojsonstring)
