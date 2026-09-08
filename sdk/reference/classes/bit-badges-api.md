---
description: "This is the BitBadgesAPI class which provides all typed API calls to the BitBadges API. See official documentation for more details and examples. Must pass in…"
---

# Class: BitBadgesAPI\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:364](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L364)

This is the BitBadgesAPI class which provides all typed API calls to the BitBadges API.
See official documentation for more details and examples. Must pass in a valid API key.

convertFunction is used to convert any responses returned by the API to your desired NumberType.
```typescript
import { BigIntify, Stringify, Numberify, BitBadgesAPI } from "bitbadges";
const BitBadgesApi = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: '...' });
const collections = await BitBadgesApi.getCollections({ collectionsToFetch: [{ collectionId: '1' }] });
```

By default, we use the official API URL (https://api.bitbadges.io). You can override this by passing in a custom apiUrl.

## See

[BitBadges API Documentation](https://docs.bitbadges.io/for-developers/bitbadges-api/api)

## Extends

- [`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

## Extended by

- [`BitBadgesAdminAPI`](/sdk/reference/classes/bit-badges-admin-api)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Constructors

### Constructor

> **new BitBadgesAPI**\<`T`\>(`apiDetails`): `BitBadgesAPI`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:372](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L372)

#### Parameters

##### apiDetails

[`iBitBadgesApi`](/sdk/reference/interfaces/i-bit-badges-api)\<`T`\>

#### Returns

`BitBadgesAPI`\<`T`\>

#### Overrides

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api).[`constructor`](/sdk/reference/classes/base-bit-badges-api#constructor)

## Properties

### accessToken

> **accessToken**: `string` = `''`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:63](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L63)

#### Inherited from

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api).[`accessToken`](/sdk/reference/classes/base-bit-badges-api#accesstoken)

***

### apiKey

> **apiKey**: `string` \| `undefined`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:62](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L62)

#### Inherited from

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api).[`apiKey`](/sdk/reference/classes/base-bit-badges-api#apikey)

***

### appendedHeaders

> **appendedHeaders**: `Record`\<`string`, `string`\> = `{}`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:64](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L64)

#### Inherited from

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api).[`appendedHeaders`](/sdk/reference/classes/base-bit-badges-api#appendedheaders)

***

### axios

> **axios**: `AxiosInstance`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:59](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L59)

#### Inherited from

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api).[`axios`](/sdk/reference/classes/base-bit-badges-api#axios)

***

### BACKEND\_URL

> **BACKEND\_URL**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:60](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L60)

#### Inherited from

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api).[`BACKEND_URL`](/sdk/reference/classes/base-bit-badges-api#backend_url)

***

### ConvertFunction

> **ConvertFunction**: (`num`) => `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:61](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L61)

#### Parameters

##### num

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`T`

#### Inherited from

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api).[`ConvertFunction`](/sdk/reference/classes/base-bit-badges-api#convertfunction)

## Methods

### assertPositiveCollectionId()

> **assertPositiveCollectionId**(`collectionId`): `void`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:118](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L118)

#### Parameters

##### collectionId

`string`

#### Returns

`void`

#### Inherited from

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api).[`assertPositiveCollectionId`](/sdk/reference/classes/base-bit-badges-api#assertpositivecollectionid)

***

### assertPositiveInteger()

> **assertPositiveInteger**(`num`): `void`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:106](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L106)

#### Parameters

##### num

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`void`

#### Inherited from

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api).[`assertPositiveInteger`](/sdk/reference/classes/base-bit-badges-api#assertpositiveinteger)

***

### broadcastTx()

> **broadcastTx**(`payload`): `Promise`\<[`BroadcastTxSuccessResponse`](/sdk/reference/classes/broadcast-tx-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:827](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L827)

Broadcasts a transaction to the blockchain.

#### Parameters

##### payload

`string` \| [`BroadcastPostBody`](/sdk/reference/interfaces/broadcast-post-body)

#### Returns

`Promise`\<[`BroadcastTxSuccessResponse`](/sdk/reference/classes/broadcast-tx-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/broadcast`
- **SDK Function Call**: `await BitBadgesApi.broadcastTx(payload);`
- **Tutorial**: See Broadcasting Transactions tutorial on the official docs.

Also, consider checking out [Broadcast UI](https://bitbadges.io/dev/broadcast), so you can simply copy and paste your transaction to a UI. All signing, API communication, etc is outsourced to the UI.

***

### checkClaimSuccess()

> **checkClaimSuccess**(`claimId`, `address`): `Promise`\<[`CheckClaimSuccessSuccessResponse`](/sdk/reference/classes/check-claim-success-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1472](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1472)

Checks whether one address has completed a claim, and which claim numbers it won.

#### Parameters

##### claimId

`string`

##### address

`string`

#### Returns

`Promise`\<[`CheckClaimSuccessSuccessResponse`](/sdk/reference/classes/check-claim-success-success-response)\>

#### Remarks

- **API Route**: `GET /api/v0/claims/:claimId/attempts?address=`
- **SDK Function Call**: `await BitBadgesApi.checkClaimSuccess(claimId, address);`

This used to call `/api/v0/claims/success/:claimId/:address`, which the
indexer removed in a deprecation sweep, so every call 404'd. The successful
attempts for one address answer the same question, so the method keeps its
shape and reads them instead: `total` is the success count and each
attempt carries its claim number.

One caveat the old route did not have: a claim whose `numUses` plugin sets
`hideCurrentState` rejects this for anyone but the claim's manager, rather
than reporting zero.

***

### checkIfSignedIn()

> **checkIfSignedIn**(`payload?`): `Promise`\<[`CheckSignInStatusSuccessResponse`](/sdk/reference/classes/check-sign-in-status-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:799](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L799)

Checks if the user is signed in.

#### Parameters

##### payload?

[`iCheckSignInStatusPayload`](/sdk/reference/interfaces/i-check-sign-in-status-payload)

#### Returns

`Promise`\<[`CheckSignInStatusSuccessResponse`](/sdk/reference/classes/check-sign-in-status-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/auth/status`
- **SDK Function Call**: `await BitBadgesApi.checkIfSignedIn(payload);`
- **Tutorial**: See Authentication tutorial on the official docs.

***

### completeClaim()

> **completeClaim**(`claimId`, `address`, `payload`): `Promise`\<[`CompleteClaimSuccessResponse`](/sdk/reference/classes/complete-claim-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:586](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L586)

For password based approvals, we hand out codes behind the scenes whenever a user requests a password.
This is to prevent replay attacks on the blockchain. This API call will return a valid code if a valid password is provided.

Each address is limited to one code per password. If the password is provided again, they will receive the same code.

#### Parameters

##### claimId

`string`

##### address

`string`

##### payload

[`iCompleteClaimPayload`](/sdk/reference/interfaces/i-complete-claim-payload)

#### Returns

`Promise`\<[`CompleteClaimSuccessResponse`](/sdk/reference/classes/complete-claim-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/claims/complete/:claimId/:address`
- **SDK Function Call**: `await BitBadgesApi.completeClaim(claimId, address, { ...body });`
- **Authentication**: Must be signed in.

#### Example

```typescript
const res = await BitBadgesApi.completeClaim(claimId, address, { ...body });
console.log(res);
```

***

### createClaims()

> **createClaims**(`payload`): `Promise`\<[`CreateClaimSuccessResponse`](/sdk/reference/classes/create-claim-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1086](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1086)

Creates a claim.

#### Parameters

##### payload

[`iCreateClaimPayload`](/sdk/reference/interfaces/i-create-claim-payload)

#### Returns

`Promise`\<[`CreateClaimSuccessResponse`](/sdk/reference/classes/create-claim-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/claims`
- **SDK Function Call**: `await BitBadgesApi.createClaim(payload);`
- **Authentication**: Must be signed in.

***

### createDeveloperApp()

> **createDeveloperApp**(`payload`): `Promise`\<[`CreateDeveloperAppSuccessResponse`](/sdk/reference/classes/create-developer-app-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2189](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2189)

Creates an developer app.

#### Parameters

##### payload

[`iCreateDeveloperAppPayload`](/sdk/reference/interfaces/i-create-developer-app-payload)

#### Returns

`Promise`\<[`CreateDeveloperAppSuccessResponse`](/sdk/reference/classes/create-developer-app-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/developerApps`
- **SDK Function Call**: `await BitBadgesApi.createDeveloperApp(payload);`
- **Authentication**: Must be signed in.

***

### createDynamicDataStore()

> **createDynamicDataStore**\<`Q`, `NumberType`\>(`payload`): `Promise`\<[`CreateDynamicDataStoreSuccessResponse`](/sdk/reference/classes/create-dynamic-data-store-success-response)\<`Q`, `T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2266](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2266)

Creates a dynamic data bin.

#### Type Parameters

##### Q

`Q` *extends* `"addresses"`

##### NumberType

`NumberType`

#### Parameters

##### payload

[`iCreateDynamicDataStorePayload`](/sdk/reference/interfaces/i-create-dynamic-data-store-payload)

#### Returns

`Promise`\<[`CreateDynamicDataStoreSuccessResponse`](/sdk/reference/classes/create-dynamic-data-store-success-response)\<`Q`, `T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/dynamicStores`
- **SDK Function Call**: `await BitBadgesApi.createDynamicDataStore(payload);`

***

### createSIWBBRequest()

> **createSIWBBRequest**(`payload?`): `Promise`\<[`CreateSIWBBRequestSuccessResponse`](/sdk/reference/classes/create-siwbb-request-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:932](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L932)

Creates a SIWBB request.

#### Parameters

##### payload?

[`iCreateSIWBBRequestPayload`](/sdk/reference/interfaces/i-create-siwbb-request-payload)

#### Returns

`Promise`\<[`CreateSIWBBRequestSuccessResponse`](/sdk/reference/classes/create-siwbb-request-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/siwbbRequest`
- **SDK Function Call**: `await BitBadgesApi.createSIWBBRequest(payload);`

***

### createUtilityPage()

> **createUtilityPage**(`payload`): `Promise`\<[`CreateUtilityPageSuccessResponse`](/sdk/reference/classes/create-utility-page-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1378](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1378)

Creates a utility page.

#### Parameters

##### payload

[`iCreateUtilityPagePayload`](/sdk/reference/interfaces/i-create-utility-page-payload)\<`T`\>

#### Returns

`Promise`\<[`CreateUtilityPageSuccessResponse`](/sdk/reference/classes/create-utility-page-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/utilityPages`
- **SDK Function Call**: `await BitBadgesApi.createUtilityPage(payload);`

***

### deleteClaims()

> **deleteClaims**(`payload`): `Promise`\<[`DeleteClaimSuccessResponse`](/sdk/reference/classes/delete-claim-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1109](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1109)

Deletes a claim.

#### Parameters

##### payload

[`iDeleteClaimPayload`](/sdk/reference/interfaces/i-delete-claim-payload)

#### Returns

`Promise`\<[`DeleteClaimSuccessResponse`](/sdk/reference/classes/delete-claim-success-response)\>

#### Remarks

- **API Route**: `DELETE /api/v0/claims`
- **SDK Function Call**: `await BitBadgesApi.deleteClaim(payload);`
- **Authentication**: Must be signed in.

***

### deleteDeveloperApp()

> **deleteDeveloperApp**(`payload`): `Promise`\<[`DeleteDeveloperAppSuccessResponse`](/sdk/reference/classes/delete-developer-app-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2215](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2215)

Deletes an developer app.

#### Parameters

##### payload

[`iDeleteDeveloperAppPayload`](/sdk/reference/interfaces/i-delete-developer-app-payload)

#### Returns

`Promise`\<[`DeleteDeveloperAppSuccessResponse`](/sdk/reference/classes/delete-developer-app-success-response)\>

#### Remarks

- **API Route**: `DELETE /api/v0/developerApps`
- **SDK Function Call**: `await BitBadgesApi.deleteDeveloperApp(payload);`
- **Authentication**: Must be signed in.

***

### deleteDynamicDataStore()

> **deleteDynamicDataStore**(`payload`): `Promise`\<[`DeleteDynamicDataStoreSuccessResponse`](/sdk/reference/classes/delete-dynamic-data-store-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2320](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2320)

Deletes a dynamic data bin.

#### Parameters

##### payload

[`iDeleteDynamicDataStorePayload`](/sdk/reference/interfaces/i-delete-dynamic-data-store-payload)

#### Returns

`Promise`\<[`DeleteDynamicDataStoreSuccessResponse`](/sdk/reference/classes/delete-dynamic-data-store-success-response)\>

#### Remarks

- **API Route**: `DELETE /api/v0/dynamicStores`
- **SDK Function Call**: `await BitBadgesApi.deleteDynamicDataStore(payload);`

***

### deleteSIWBBRequest()

> **deleteSIWBBRequest**(`payload?`): `Promise`\<[`DeleteSIWBBRequestSuccessResponse`](/sdk/reference/classes/delete-siwbb-request-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:983](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L983)

Deletes a SIWBB request.

#### Parameters

##### payload?

[`iDeleteSIWBBRequestPayload`](/sdk/reference/interfaces/i-delete-siwbb-request-payload)

#### Returns

`Promise`\<[`DeleteSIWBBRequestSuccessResponse`](/sdk/reference/classes/delete-siwbb-request-success-response)\>

#### Remarks

- **API Route**: `DELETE /api/v0/siwbbRequest`
- **SDK Function Call**: `await BitBadgesApi.deleteSIWBBRequest(payload);`
- **Authentication**: Must be signed in and the owner of the requesy.

***

### deleteUtilityPage()

> **deleteUtilityPage**(`payload`): `Promise`\<[`DeleteUtilityPageSuccessResponse`](/sdk/reference/classes/delete-utility-page-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1418](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1418)

Deletes a utility page.

#### Parameters

##### payload

[`iDeleteUtilityPagePayload`](/sdk/reference/interfaces/i-delete-utility-page-payload)

#### Returns

`Promise`\<[`DeleteUtilityPageSuccessResponse`](/sdk/reference/classes/delete-utility-page-success-response)\>

#### Remarks

- **API Route**: `DELETE /api/v0/utilityPages`
- **SDK Function Call**: `await BitBadgesApi.deleteUtilityPage(payload);`

***

### estimateSwap()

> **estimateSwap**(`payload`): `Promise`\<[`iEstimateSwapSuccessResponse`](/sdk/reference/interfaces/i-estimate-swap-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2550](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2550)

Estimate a swap from a token-in denom to a token-out denom across one or more chains.

#### Parameters

##### payload

[`iEstimateSwapPayload`](/sdk/reference/interfaces/i-estimate-swap-payload)

#### Returns

`Promise`\<[`iEstimateSwapSuccessResponse`](/sdk/reference/interfaces/i-estimate-swap-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/swap/estimate`
- **SDK Function Call**: `await BitBadgesApi.estimateSwap({ tokenIn: '1000000ubadge', tokenOutDenom: 'uusdc', chainIdsToAddresses: { 'bitbadges-1': 'bb1...' }, slippageTolerancePercent: 1 });`
- Honors a `--local-only` flag to restrict the route to BitBadges native pools (no Skip:Go rerouting).

***

### ~~estimateSwapLegacy()~~

> **estimateSwapLegacy**(`payload`): `Promise`\<[`iEstimateSwapSuccessResponse`](/sdk/reference/interfaces/i-estimate-swap-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2574](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2574)

#### Parameters

##### payload

[`iEstimateSwapPayload`](/sdk/reference/interfaces/i-estimate-swap-payload)

#### Returns

`Promise`\<[`iEstimateSwapSuccessResponse`](/sdk/reference/interfaces/i-estimate-swap-success-response)\>

#### Deprecated

Use `estimateSwap` instead. Pass-through shim kept so the
documented legacy `POST /api/v0/swaps/estimate` route (which the indexer
still serves as a deprecation alias) stays callable from generated SDK
clients. New code should call `estimateSwap`.

***

### exchangeSIWBBAuthorizationCode()

> **exchangeSIWBBAuthorizationCode**(`payload?`): `Promise`\<[`ExchangeSIWBBAuthorizationCodeSuccessResponse`](/sdk/reference/classes/exchange-siwbb-authorization-code-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:874](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L874)

Gets and verifies a SIWBB request.

#### Parameters

##### payload?

[`iExchangeSIWBBAuthorizationCodePayload`](/sdk/reference/interfaces/i-exchange-siwbb-authorization-code-payload)

#### Returns

`Promise`\<[`ExchangeSIWBBAuthorizationCodeSuccessResponse`](/sdk/reference/classes/exchange-siwbb-authorization-code-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/siwbbRequest`
- **SDK Function Call**: `await BitBadgesApi.exchangeSIWBBAuthorizationCode(payload);`

***

### filterCollectionApprovals()

> **filterCollectionApprovals**(`collectionId`, `payload`): `Promise`\<[`FilterCollectionApprovalsSuccessResponse`](/sdk/reference/classes/filter-collection-approvals-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2756](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2756)

Filter approval items for a collection by a Mongo-style query, returning the
matching approvers' balance docs. Pass `'any'` as `collectionId` to search across
all collections.

#### Parameters

##### collectionId

`string`

##### payload

[`iFilterCollectionApprovalsPayload`](/sdk/reference/interfaces/i-filter-collection-approvals-payload)

#### Returns

`Promise`\<[`FilterCollectionApprovalsSuccessResponse`](/sdk/reference/classes/filter-collection-approvals-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/collection/:collectionId/filterApprovals`
- **SDK Function Call**: `await BitBadgesApi.filterCollectionApprovals('1', { query: { approvalType: 'intent', isActive: true }, sortBy: { _id: -1 } });`

***

### FilterTokensInCollection()

> **FilterTokensInCollection**(`collectionId`, `payload`): `Promise`\<[`FilterTokensInCollectionSuccessResponse`](/sdk/reference/classes/filter-tokens-in-collection-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1019](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1019)

Filters tokens in a collection based on multiple filter values.

#### Parameters

##### collectionId

`string`

##### payload

[`iFilterTokensInCollectionPayload`](/sdk/reference/interfaces/i-filter-tokens-in-collection-payload)

#### Returns

`Promise`\<[`FilterTokensInCollectionSuccessResponse`](/sdk/reference/classes/filter-tokens-in-collection-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/collection/:collectionId/filter`
- **SDK Function Call**: `await BitBadgesApi.FilterTokensInCollection(payload);`

***

### getAccount()

> **getAccount**(`payload`): `Promise`\<[`GetAccountSuccessResponse`](/sdk/reference/classes/get-account-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:750](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L750)

Gets an account by address or username.

#### Parameters

##### payload

[`iGetAccountPayload`](/sdk/reference/interfaces/i-get-account-payload)

#### Returns

`Promise`\<[`GetAccountSuccessResponse`](/sdk/reference/classes/get-account-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/user`
- **SDK Function Call**: `await BitBadgesApi.getAccount({ address: '...', username: '...' });`

#### Example

```typescript
const res = await BitBadgesApi.getAccount({ address: '...', username: '...' });
console.log(res);
```

***

### getAccounts()

> **getAccounts**(`payload`): `Promise`\<[`GetAccountsSuccessResponse`](/sdk/reference/classes/get-accounts-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:733](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L733)

Gets accounts and accompying details.

#### Parameters

##### payload

[`iGetAccountsPayload`](/sdk/reference/interfaces/i-get-accounts-payload)

#### Returns

`Promise`\<[`GetAccountsSuccessResponse`](/sdk/reference/classes/get-accounts-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/users`
- **SDK Function Call**: `await BitBadgesApi.getAccounts(payload);`
- **Tutorial**: See the [Fetching Accounts tutoral](https://docs.bitbadges.io/for-developers/bitbadges-api/tutorials/fetching-accounts) on the official docs.
- **Authentication**: Must be signed in, if fetching private information such as private lists or auth codes. If fetching public information only, no sign in required.

#### Example

```typescript
const res = await BitBadgesApi.getAccounts([{ address }]);
console.log(res);
```

#### Note

This function is used to fetch accounts and their details. It is your responsibility to join the data together (paginations, etc).
Use getAccountsAndUpdate for a more convenient way to handle paginations and appending metadata.

***

### getBalanceByAddress()

> **getBalanceByAddress**(`collectionId`, `address`, `payload?`): `Promise`\<[`GetBalanceByAddressSuccessResponse`](/sdk/reference/classes/get-balance-by-address-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:484](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L484)

Gets the balance of a specific token for a specific address

#### Parameters

##### collectionId

`string`

##### address

`string`

##### payload?

[`iGetBalanceByAddressPayload`](/sdk/reference/interfaces/i-get-balance-by-address-payload)

#### Returns

`Promise`\<[`GetBalanceByAddressSuccessResponse`](/sdk/reference/classes/get-balance-by-address-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/collection/:collectionId/balance/:address`
- **SDK Function Call**: `await BitBadgesApi.getBalanceByAddress(collectionId, address);`

#### Example

```typescript
const res = await BitBadgesApi.getBalanceByAddress(collectionId, address);
console.log(res);
```

***

### getBalanceByAddressSpecificToken()

> **getBalanceByAddressSpecificToken**(`collectionId`, `tokenId`, `address`, `payload?`, `options?`): `Promise`\<[`GetBalanceByAddressSpecificTokenSuccessResponse`](/sdk/reference/classes/get-balance-by-address-specific-token-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:506](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L506)

Gets the balance for an address at the current time. This is a streamlined version of
getBalanceByAddress.

#### Parameters

##### collectionId

`string`

##### tokenId

[`NumberType`](/sdk/reference/type-aliases/number-type)

##### address

`string`

##### payload?

[`iGetBalanceByAddressPayload`](/sdk/reference/interfaces/i-get-balance-by-address-payload)

##### options?

###### time?

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`Promise`\<[`GetBalanceByAddressSpecificTokenSuccessResponse`](/sdk/reference/classes/get-balance-by-address-specific-token-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/:collectionId/:tokenId/balance/:address`
- **SDK Function Call**: `await BitBadgesApi.getBalanceByAddress(collectionId, tokenId, address);`

#### Example

```typescript
const res = await BitBadgesApi.getBalanceByAddress(collectionId, tokenId, address);
console.log(res);
```

***

### getClaim()

> **getClaim**(`claimId`, `payload?`): `Promise`\<[`GetClaimSuccessResponse`](/sdk/reference/classes/get-claim-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1931](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1931)

Get a claim by ID.

#### Parameters

##### claimId

`string`

##### payload?

[`iGetClaimPayload`](/sdk/reference/interfaces/i-get-claim-payload)

#### Returns

`Promise`\<[`GetClaimSuccessResponse`](/sdk/reference/classes/get-claim-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/claim/:claimId`
- **SDK Function Call**: `await BitBadgesApi.getClaim(claimId, { ... });`

#### Example

```typescript
import type { BitBadgesAPI } from 'bitbadges';
declare const BitBadgesApi: BitBadgesAPI<bigint>; // configured client
const res = await BitBadgesApi.getClaim('claim_demo_01', {});
console.log(res);
```

***

### getClaimActivityForUser()

> **getClaimActivityForUser**(`address`, `payload`): `Promise`\<[`GetClaimActivityForUserSuccessResponse`](/sdk/reference/classes/get-claim-activity-for-user-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1606](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1606)

Gets claim activity by type for a specific user. Specify the viewType to determine what
claim activity to retrieve.

#### Parameters

##### address

`string`

##### payload

[`iGetClaimActivityForUserPayload`](/sdk/reference/interfaces/i-get-claim-activity-for-user-payload)

#### Returns

`Promise`\<[`GetClaimActivityForUserSuccessResponse`](/sdk/reference/classes/get-claim-activity-for-user-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/account/:address/activity/claims`
- **SDK Function Call**: `await BitBadgesApi.getClaimActivityForUser(address, { viewType });`

#### Example

```typescript
const res = await BitBadgesApi.getClaimActivityForUser("bb1...", { viewType: "public" });
console.log(res);
```

***

### getClaimAttempts()

> **getClaimAttempts**(`claimId`, `payload`): `Promise`\<[`GetClaimAttemptsSuccessResponse`](/sdk/reference/classes/get-claim-attempts-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1437](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1437)

Gets claim attempts.

#### Parameters

##### claimId

`string`

##### payload

[`iGetClaimAttemptsPayload`](/sdk/reference/interfaces/i-get-claim-attempts-payload)

#### Returns

`Promise`\<[`GetClaimAttemptsSuccessResponse`](/sdk/reference/classes/get-claim-attempts-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/claims/:claimId/attempts`
- **SDK Function Call**: `await BitBadgesApi.getClaimAttempts(claimId, payload);`

***

### getClaimAttemptStatus()

> **getClaimAttemptStatus**(`claimAttemptId`): `Promise`\<[`GetClaimAttemptStatusSuccessResponse`](/sdk/reference/classes/get-claim-attempt-status-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:697](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L697)

Gets the status of a claim attempt.

#### Parameters

##### claimAttemptId

`string`

#### Returns

`Promise`\<[`GetClaimAttemptStatusSuccessResponse`](/sdk/reference/classes/get-claim-attempt-status-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/claims/status/:claimId`
- **SDK Function Call**: `await BitBadgesApi.getClaimAttemptStatus(claimAttemptId);`

#### Example

```typescript
const res = await BitBadgesApi.getClaimAttemptStatus(claimAttemptId);
console.log(res);
```

***

### getClaims()

> **getClaims**(`payload`): `Promise`\<[`GetClaimsSuccessResponse`](/sdk/reference/classes/get-claims-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1039](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1039)

Gets the claim by ID.

#### Parameters

##### payload

[`iGetClaimsPayloadV1`](/sdk/reference/interfaces/i-get-claims-payload-v1)

#### Returns

`Promise`\<[`GetClaimsSuccessResponse`](/sdk/reference/classes/get-claims-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/claims`
- **SDK Function Call**: `await BitBadgesApi.getClaims(payload);`

#### Example

```typescript
const res = await BitBadgesApi.getClaims(payload);
console.log(res);
```

***

### getCollection()

> **getCollection**(`collectionId`, `payload?`): `Promise`\<[`GetCollectionSuccessResponse`](/sdk/reference/classes/get-collection-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1709](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1709)

Gets a specific collection.

#### Parameters

##### collectionId

`string`

##### payload?

[`iGetCollectionPayload`](/sdk/reference/interfaces/i-get-collection-payload)

#### Returns

`Promise`\<[`GetCollectionSuccessResponse`](/sdk/reference/classes/get-collection-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/:collectionId`
- **SDK Function Call**: `await BitBadgesApi.getCollection(collectionId);`

#### Example

```typescript
const res = await BitBadgesApi.getCollection("123");
console.log(res);
```

***

### getCollectionAmountTrackerById()

> **getCollectionAmountTrackerById**\<`T`\>(`trackerDetails`): `Promise`\<[`GetCollectionAmountTrackerByIdSuccessResponse`](/sdk/reference/classes/get-collection-amount-tracker-by-id-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2395](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2395)

Gets a specific amount tracker by ID for a collection

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### trackerDetails

[`iAmountTrackerIdDetails`](/sdk/reference/interfaces/i-amount-tracker-id-details)\<`T`\>

#### Returns

`Promise`\<[`GetCollectionAmountTrackerByIdSuccessResponse`](/sdk/reference/classes/get-collection-amount-tracker-by-id-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/amountTracker`
- **SDK Function Call**: `await BitBadgesApi.getCollectionAmountTrackerById(...);`

***

### getCollectionAmountTrackers()

> **getCollectionAmountTrackers**(`collectionId`, `payload`): `Promise`\<[`GetCollectionAmountTrackersSuccessResponse`](/sdk/reference/classes/get-collection-amount-trackers-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1832](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1832)

Gets amount trackers for a specific collection.

#### Parameters

##### collectionId

`string`

##### payload

[`iGetCollectionAmountTrackersPayload`](/sdk/reference/interfaces/i-get-collection-amount-trackers-payload)

#### Returns

`Promise`\<[`GetCollectionAmountTrackersSuccessResponse`](/sdk/reference/classes/get-collection-amount-trackers-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/:collectionId/amountTrackers`
- **SDK Function Call**: `await BitBadgesApi.getCollectionAmountTrackers(collectionId, { bookmark });`

#### Example

```typescript
const res = await BitBadgesApi.getCollectionAmountTrackers("123", { bookmark: "123" });
console.log(res);
```

***

### getCollectionChallengeTrackerById()

> **getCollectionChallengeTrackerById**\<`T`\>(`trackerDetails`): `Promise`\<[`GetCollectionChallengeTrackerByIdSuccessResponse`](/sdk/reference/classes/get-collection-challenge-tracker-by-id-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2417](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2417)

Gets a specific challenge tracker by ID for a collection

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### trackerDetails

[`iChallengeTrackerIdDetails`](/sdk/reference/interfaces/i-challenge-tracker-id-details)\<`T`\>

#### Returns

`Promise`\<[`GetCollectionChallengeTrackerByIdSuccessResponse`](/sdk/reference/classes/get-collection-challenge-tracker-by-id-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/challengeTracker`
- **SDK Function Call**: `await BitBadgesApi.getCollectionChallengeTrackerById(...);`

***

### getCollectionChallengeTrackers()

> **getCollectionChallengeTrackers**(`collectionId`, `payload`): `Promise`\<[`GetCollectionChallengeTrackersSuccessResponse`](/sdk/reference/classes/get-collection-challenge-trackers-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1796](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1796)

Gets challenge trackers for a specific collection.

#### Parameters

##### collectionId

`string`

##### payload

[`iGetCollectionChallengeTrackersPayload`](/sdk/reference/interfaces/i-get-collection-challenge-trackers-payload)

#### Returns

`Promise`\<[`GetCollectionChallengeTrackersSuccessResponse`](/sdk/reference/classes/get-collection-challenge-trackers-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/:collectionId/challengeTrackers`
- **SDK Function Call**: `await BitBadgesApi.getCollectionChallengeTrackers(collectionId, { bookmark });`

#### Example

```typescript
const res = await BitBadgesApi.getCollectionChallengeTrackers("123", { bookmark: "123" });
console.log(res);
```

***

### getCollectionClaims()

> **getCollectionClaims**(`collectionId`): `Promise`\<[`GetCollectionClaimsSuccessResponse`](/sdk/reference/classes/get-collection-claims-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1904](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1904)

Gets claims for a specific collection.

#### Parameters

##### collectionId

`string`

#### Returns

`Promise`\<[`GetCollectionClaimsSuccessResponse`](/sdk/reference/classes/get-collection-claims-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/:collectionId/claims`
- **SDK Function Call**: `await BitBadgesApi.getCollectionClaims(collectionId);`

#### Example

```typescript
const res = await BitBadgesApi.getCollectionClaims("123");
console.log(res);
```

***

### getCollectionListings()

> **getCollectionListings**(`collectionId`, `payload`): `Promise`\<[`GetCollectionListingsSuccessResponse`](/sdk/reference/classes/get-collection-listings-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1868](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1868)

Gets listings for a specific collection.

#### Parameters

##### collectionId

`string`

##### payload

[`iGetCollectionListingsPayload`](/sdk/reference/interfaces/i-get-collection-listings-payload)

#### Returns

`Promise`\<[`GetCollectionListingsSuccessResponse`](/sdk/reference/classes/get-collection-listings-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/:collectionId/listings`
- **SDK Function Call**: `await BitBadgesApi.getCollectionListings(collectionId, { bookmark });`

#### Example

```typescript
const res = await BitBadgesApi.getCollectionListings("123", { bookmark: "123" });
console.log(res);
```

***

### getCollectionOwners()

> **getCollectionOwners**(`collectionId`, `payload`): `Promise`\<[`GetCollectionOwnersSuccessResponse`](/sdk/reference/classes/get-collection-owners-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1676](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1676)

Gets owners for a specific collection.

#### Parameters

##### collectionId

`string`

##### payload

[`iGetCollectionOwnersPayload`](/sdk/reference/interfaces/i-get-collection-owners-payload)

#### Returns

`Promise`\<[`GetCollectionOwnersSuccessResponse`](/sdk/reference/classes/get-collection-owners-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/:collectionId/owners`
- **SDK Function Call**: `await BitBadgesApi.getCollectionOwners(collectionId, { bookmark });`

#### Example

```typescript
const res = await BitBadgesApi.getCollectionOwners("123", { bookmark: "123" });
console.log(res);
```

***

### getCollections()

> **getCollections**(`payload`): `Promise`\<[`GetCollectionsSuccessResponse`](/sdk/reference/classes/get-collections-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:450](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L450)

This function retrieves collections and accompanying details. Consider using the `getCollectionsAndUpdate` function instead for native support in handling paginations, appending metadata, and more.

#### Parameters

##### payload

[`iGetCollectionsPayload`](/sdk/reference/interfaces/i-get-collections-payload)

#### Returns

`Promise`\<[`GetCollectionsSuccessResponse`](/sdk/reference/classes/get-collections-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/collections`
- **Tutorial**: Refer to the [Fetching Collections tutorial](https://docs.bitbadges.io/for-developers/bitbadges-api/tutorials/fetching-collections) on the official documentation.

#### Example

```typescript
const res = await BitBadgesApi.getCollections([{ collectionId, metadataToFetch: { tokenIds: [{ start: 1n, end: 10n }] } }]);
const collection = res.collections[0];
```

***

### getCollectionTransferActivity()

> **getCollectionTransferActivity**(`collectionId`, `payload`): `Promise`\<[`GetCollectionTransferActivitySuccessResponse`](/sdk/reference/classes/get-collection-transfer-activity-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1760](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1760)

Gets transfer activity for a specific collection.

#### Parameters

##### collectionId

`string`

##### payload

[`iGetCollectionTransferActivityPayload`](/sdk/reference/interfaces/i-get-collection-transfer-activity-payload)

#### Returns

`Promise`\<[`GetCollectionTransferActivitySuccessResponse`](/sdk/reference/classes/get-collection-transfer-activity-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/:collectionId/activity`
- **SDK Function Call**: `await BitBadgesApi.getCollectionTransferActivity(collectionId, { bookmark });`

#### Example

```typescript
const res = await BitBadgesApi.getCollectionTransferActivity("123", { bookmark: "123" });
console.log(res);
```

***

### getDeveloperApp()

> **getDeveloperApp**(`developerAppId`, `payload?`): `Promise`\<[`GetDeveloperAppSuccessResponse`](/sdk/reference/classes/get-developer-app-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2116](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2116)

Get developer app by ID.

#### Parameters

##### developerAppId

`string`

##### payload?

[`iGetDeveloperAppPayload`](/sdk/reference/interfaces/i-get-developer-app-payload)

#### Returns

`Promise`\<[`GetDeveloperAppSuccessResponse`](/sdk/reference/classes/get-developer-app-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/developerApp/:developerAppId`
- **SDK Function Call**: `await BitBadgesApi.getDeveloperApp(developerAppId, { ... });`

#### Example

```typescript
import type { BitBadgesAPI } from 'bitbadges';
declare const BitBadgesApi: BitBadgesAPI<bigint>; // configured client
const res = await BitBadgesApi.getDeveloperApp('app_demo_01', {});
console.log(res);
```

***

### getDeveloperApps()

> **getDeveloperApps**(`payload`): `Promise`\<[`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2345](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2345)

Get all developer apps for a user.

#### Parameters

##### payload

[`iGetDeveloperAppsPayload`](/sdk/reference/interfaces/i-get-developer-apps-payload)

#### Returns

`Promise`\<[`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/developerApps`
- **SDK Function Call**: `await BitBadgesApi.getDeveloperApp(payload);`

***

### getDynamicDataActivity()

> **getDynamicDataActivity**(`payload`): `Promise`\<[`GetDynamicDataActivitySuccessResponse`](/sdk/reference/classes/get-dynamic-data-activity-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1264](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1264)

Get dynamic data store activity

#### Parameters

##### payload

[`iGetDynamicDataActivityPayload`](/sdk/reference/interfaces/i-get-dynamic-data-activity-payload)

#### Returns

`Promise`\<[`GetDynamicDataActivitySuccessResponse`](/sdk/reference/classes/get-dynamic-data-activity-success-response)\>

#### Remarks

- **API Route**: `GET /api/v0/dynamicStores/activity`
- **SDK Function Call**: `await BitBadgesApi.getDynamicDataActivity(payload);`

***

### getDynamicDataStore()

> **getDynamicDataStore**\<`Q`\>(`dynamicStoreId`, `payload?`): `Promise`\<[`GetDynamicDataStoreSuccessResponse`](/sdk/reference/classes/get-dynamic-data-store-success-response)\<`Q`, `T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1963](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1963)

Get a dynamic data store by ID.

#### Type Parameters

##### Q

`Q` *extends* `"addresses"`

#### Parameters

##### dynamicStoreId

`string`

##### payload?

[`iGetDynamicDataStorePayload`](/sdk/reference/interfaces/i-get-dynamic-data-store-payload)

#### Returns

`Promise`\<[`GetDynamicDataStoreSuccessResponse`](/sdk/reference/classes/get-dynamic-data-store-success-response)\<`Q`, `T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/dynamicStore/:dynamicStoreId`
- **SDK Function Call**: `await BitBadgesApi.getDynamicDataStore(dynamicStoreId, { ... });`

#### Example

```typescript
import type { BitBadgesAPI } from 'bitbadges';
declare const BitBadgesApi: BitBadgesAPI<bigint>; // configured client
const res = await BitBadgesApi.getDynamicDataStore('store_demo_01', {});
console.log(res);
```

***

### getDynamicDataStores()

> **getDynamicDataStores**\<`Q`, `NumberType`\>(`payload`): `Promise`\<[`GetDynamicDataStoresSuccessResponse`](/sdk/reference/classes/get-dynamic-data-stores-success-response)\<`Q`, `T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1284](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1284)

Gets dynamic data stores.

#### Type Parameters

##### Q

`Q` *extends* `"addresses"`

##### NumberType

`NumberType`

#### Parameters

##### payload

[`iGetDynamicDataStoresPayload`](/sdk/reference/interfaces/i-get-dynamic-data-stores-payload)

#### Returns

`Promise`\<[`GetDynamicDataStoresSuccessResponse`](/sdk/reference/classes/get-dynamic-data-stores-success-response)\<`Q`, `T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/dynamicStores/fetch`
- **SDK Function Call**: `await BitBadgesApi.getDynamicDataStores(payload);`

***

### getDynamicDataStoreValue()

> **getDynamicDataStoreValue**(`dynamicStoreId`, `payload?`): `Promise`\<[`GetDynamicDataStoreValueSuccessResponse`](/sdk/reference/classes/get-dynamic-data-store-value-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1991](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1991)

Get a dynamic data store value by ID.

#### Parameters

##### dynamicStoreId

`string`

##### payload?

[`iGetDynamicDataStoreValuePayload`](/sdk/reference/interfaces/i-get-dynamic-data-store-value-payload)

#### Returns

`Promise`\<[`GetDynamicDataStoreValueSuccessResponse`](/sdk/reference/classes/get-dynamic-data-store-value-success-response)\>

#### Remarks

- **API Route**: `GET /api/v0/dynamicStore/:dynamicStoreId/:key`
- **SDK Function Call**: `await BitBadgesApi.getDynamicDataStoreValue(dynamicStoreId, { ... });`

***

### getDynamicDataStoreValuesPaginated()

> **getDynamicDataStoreValuesPaginated**\<`Q`\>(`dynamicStoreId`, `payload?`): `Promise`\<[`GetDynamicDataStoreValuesPaginatedSuccessResponse`](/sdk/reference/classes/get-dynamic-data-store-values-paginated-success-response)\<`Q`, `T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2019](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2019)

Get a dynamic data store values paginated by ID.

#### Type Parameters

##### Q

`Q` *extends* `"addresses"`

#### Parameters

##### dynamicStoreId

`string`

##### payload?

[`iGetDynamicDataStoreValuesPaginatedPayload`](/sdk/reference/interfaces/i-get-dynamic-data-store-values-paginated-payload)

#### Returns

`Promise`\<[`GetDynamicDataStoreValuesPaginatedSuccessResponse`](/sdk/reference/classes/get-dynamic-data-store-values-paginated-success-response)\<`Q`, `T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/dynamicStore/:dynamicStoreId/values`
- **SDK Function Call**: `await BitBadgesApi.getDynamicDataStoreValuesPaginated(dynamicStoreId, { ... });`

***

### getGatedContentForClaim()

> **getGatedContentForClaim**(`claimId`, `payload?`): `Promise`\<[`GetGatedContentForClaimSuccessResponse`](/sdk/reference/classes/get-gated-content-for-claim-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1179](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1179)

Get the gated content for a claim.

#### Parameters

##### claimId

`string`

##### payload?

[`iGetGatedContentForClaimPayload`](/sdk/reference/interfaces/i-get-gated-content-for-claim-payload)

#### Returns

`Promise`\<[`GetGatedContentForClaimSuccessResponse`](/sdk/reference/classes/get-gated-content-for-claim-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/claims/gatedContent/{claimId}`
- **SDK Function Call**: `await BitBadgesApi.getGatedContentForClaim(payload);`
- **Authentication**: Must be signed in.

***

### getIntents()

> **getIntents**(`address?`, `payload?`): `Promise`\<[`GetIntentsSuccessResponse`](/sdk/reference/classes/get-intents-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2729](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2729)

Get exchange-approval "intents" — either the global browse list (no address)
or a specific user's intents (pass an address; combine with `includeAll: true`
to include used/expired/inactive ones).

#### Parameters

##### address?

`string`

##### payload?

[`iGetIntentsPayload`](/sdk/reference/interfaces/i-get-intents-payload)

#### Returns

`Promise`\<[`GetIntentsSuccessResponse`](/sdk/reference/classes/get-intents-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/intents` (no address) or `GET /api/v0/intents/:address`
- **SDK Function Call**: `await BitBadgesApi.getIntents('bb1...', { includeAll: true });`

***

### getOnChainDynamicStore()

> **getOnChainDynamicStore**(`storeId`): `Promise`\<[`GetOnChainDynamicStoreSuccessResponse`](/sdk/reference/classes/get-on-chain-dynamic-store-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2790](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2790)

Get On-Chain Dynamic Store by ID

#### Parameters

##### storeId

`string`

#### Returns

`Promise`\<[`GetOnChainDynamicStoreSuccessResponse`](/sdk/reference/classes/get-on-chain-dynamic-store-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/onChainDynamicStore/:storeId`
- **SDK Function Call**: `await BitBadgesApi.getOnChainDynamicStore(storeId);`

#### Example

```typescript
const res = await BitBadgesApi.getOnChainDynamicStore(storeId);
console.log(res);
```

***

### getOnChainDynamicStoresByCreator()

> **getOnChainDynamicStoresByCreator**(`address`): `Promise`\<[`GetOnChainDynamicStoresByCreatorSuccessResponse`](/sdk/reference/classes/get-on-chain-dynamic-stores-by-creator-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2815](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2815)

Get On-Chain Dynamic Stores by Creator

#### Parameters

##### address

`string`

#### Returns

`Promise`\<[`GetOnChainDynamicStoresByCreatorSuccessResponse`](/sdk/reference/classes/get-on-chain-dynamic-stores-by-creator-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/onChainDynamicStores/by-creator/:address`
- **SDK Function Call**: `await BitBadgesApi.getOnChainDynamicStoresByCreator(address);`

#### Example

```typescript
const res = await BitBadgesApi.getOnChainDynamicStoresByCreator(address);
console.log(res);
```

***

### getOnChainDynamicStoreValue()

> **getOnChainDynamicStoreValue**(`storeId`, `address`): `Promise`\<[`GetOnChainDynamicStoreValueSuccessResponse`](/sdk/reference/classes/get-on-chain-dynamic-store-value-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2840](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2840)

Get On-Chain Dynamic Store Value

#### Parameters

##### storeId

`string`

##### address

`string`

#### Returns

`Promise`\<[`GetOnChainDynamicStoreValueSuccessResponse`](/sdk/reference/classes/get-on-chain-dynamic-store-value-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/onChainDynamicStore/:storeId/value/:address`
- **SDK Function Call**: `await BitBadgesApi.getOnChainDynamicStoreValue(storeId, address);`

#### Example

```typescript
const res = await BitBadgesApi.getOnChainDynamicStoreValue(storeId, address);
console.log(res);
```

***

### getOnChainDynamicStoreValuesPaginated()

> **getOnChainDynamicStoreValuesPaginated**(`storeId`, `payload?`): `Promise`\<[`GetOnChainDynamicStoreValuesPaginatedSuccessResponse`](/sdk/reference/classes/get-on-chain-dynamic-store-values-paginated-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2868](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2868)

Get On-Chain Dynamic Store Values (Paginated)

#### Parameters

##### storeId

`string`

##### payload?

[`iGetOnChainDynamicStoreValuesPaginatedPayload`](/sdk/reference/interfaces/i-get-on-chain-dynamic-store-values-paginated-payload)

#### Returns

`Promise`\<[`GetOnChainDynamicStoreValuesPaginatedSuccessResponse`](/sdk/reference/classes/get-on-chain-dynamic-store-values-paginated-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/onChainDynamicStore/:storeId/values`
- **SDK Function Call**: `await BitBadgesApi.getOnChainDynamicStoreValuesPaginated(storeId, { bookmark: '', limit: 25 });`

#### Example

```typescript
const res = await BitBadgesApi.getOnChainDynamicStoreValuesPaginated(storeId, {
  bookmark: '',
  limit: 25
});
console.log(res);
```

***

### getOwners()

> **getOwners**(`collectionId`, `tokenId`, `payload`): `Promise`\<[`GetOwnersSuccessResponse`](/sdk/reference/classes/get-owners-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:467](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L467)

Gets the owners for a specific token in a collection

#### Parameters

##### collectionId

`string`

##### tokenId

[`NumberType`](/sdk/reference/type-aliases/number-type)

##### payload

[`iGetOwnersPayload`](/sdk/reference/interfaces/i-get-owners-payload)

#### Returns

`Promise`\<[`GetOwnersSuccessResponse`](/sdk/reference/classes/get-owners-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/:collectionId/:tokenId/owners`
- **SDK Function Call**: `await BitBadgesApi.getOwners(collectionId, tokenId, payload);`

#### Example

```typescript
const res = await BitBadgesApi.getOwners(collectionId, tokenId, { bookmark: 'prev' });
console.log(res);
```

***

### getPlugin()

> **getPlugin**(`pluginId`, `payload?`): `Promise`\<[`GetPluginSuccessResponse`](/sdk/reference/classes/get-plugin-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2057](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2057)

Get plugin by ID.

#### Parameters

##### pluginId

`string`

##### payload?

[`iGetPluginPayload`](/sdk/reference/interfaces/i-get-plugin-payload)

#### Returns

`Promise`\<[`GetPluginSuccessResponse`](/sdk/reference/classes/get-plugin-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/plugin/:pluginId`
- **SDK Function Call**: `await BitBadgesApi.getPlugin(pluginId, { ... });`

#### Example

```typescript
import type { BitBadgesAPI } from 'bitbadges';
declare const BitBadgesApi: BitBadgesAPI<bigint>; // configured client
const res = await BitBadgesApi.getPlugin('must-own-badges', {});
console.log(res);
```

***

### getPlugins()

> **getPlugins**(`payload`): `Promise`\<[`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2141](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2141)

Get all developer apps for a user.

#### Parameters

##### payload

[`iGetPluginsPayload`](/sdk/reference/interfaces/i-get-plugins-payload)

#### Returns

`Promise`\<[`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/plugins/fetch`
- **SDK Function Call**: `await BitBadgesApi.getPlugins(payload);`

***

### getPointsActivityForUser()

> **getPointsActivityForUser**(`address`, `payload`): `Promise`\<[`GetPointsActivityForUserSuccessResponse`](/sdk/reference/classes/get-points-activity-for-user-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1642](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1642)

Gets points activity for a specific user.

#### Parameters

##### address

`string`

##### payload

[`iGetPointsActivityForUserPayload`](/sdk/reference/interfaces/i-get-points-activity-for-user-payload)

#### Returns

`Promise`\<[`GetPointsActivityForUserSuccessResponse`](/sdk/reference/classes/get-points-activity-for-user-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/account/:address/activity/points`
- **SDK Function Call**: `await BitBadgesApi.getPointsActivityForUser(address, { ... });`

#### Example

```typescript
import type { BitBadgesAPI } from 'bitbadges';
declare const BitBadgesApi: BitBadgesAPI<bigint>; // configured client
const res = await BitBadgesApi.getPointsActivityForUser('bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue', { bookmark: '' });
console.log(res);
```

***

### getRefreshStatus()

> **getRefreshStatus**(`collectionId`): `Promise`\<[`RefreshStatusSuccessResponse`](/sdk/reference/classes/refresh-status-success-response)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1008](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1008)

Gets the refresh status for a collection. Used to track if any errors occur during a refresh, or if it is in the queue or not.

#### Parameters

##### collectionId

`string`

#### Returns

`Promise`\<[`RefreshStatusSuccessResponse`](/sdk/reference/classes/refresh-status-success-response)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/:collectionId/refreshStatus`
- **SDK Function Call**: `await BitBadgesApi.getRefreshStatus(payload);`

***

### getReservedClaimCodes()

> **getReservedClaimCodes**(`claimId`, `address`, `payload`): `Promise`\<[`GetReservedClaimCodesSuccessResponse`](/sdk/reference/classes/get-reserved-claim-codes-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:658](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L658)

For on-chain claims where codes are "reserved" for a specific address, this function will return all codes reserved.

#### Parameters

##### claimId

`string`

##### address

`string`

##### payload

[`iGetReservedClaimCodesPayload`](/sdk/reference/interfaces/i-get-reserved-claim-codes-payload)

#### Returns

`Promise`\<[`GetReservedClaimCodesSuccessResponse`](/sdk/reference/classes/get-reserved-claim-codes-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/claims/reserved/:claimId/:address`
- **SDK Function Call**: `await BitBadgesApi.getReservedClaimCodes(claimId, address, { ...body });`
- **Authentication**: Must be signed in.

#### Example

```typescript
const res = await BitBadgesApi.getReservedClaimCodes(claimId, address, { ...body });
console.log(res);
```

***

### getSearchResults()

> **getSearchResults**(`searchValue`, `payload?`): `Promise`\<[`GetSearchSuccessResponse`](/sdk/reference/classes/get-search-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:419](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L419)

Search collections, tokens, accounts based on a search value.

#### Parameters

##### searchValue

`string`

##### payload?

[`iGetSearchPayload`](/sdk/reference/interfaces/i-get-search-payload)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

#### Returns

`Promise`\<[`GetSearchSuccessResponse`](/sdk/reference/classes/get-search-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/search/:searchValue`
- **SDK Function Call**: `await BitBadgesApi.getSearchResults(searchValue);`

#### Example

```typescript
const res = await BitBadgesApi.getSearchResults('vitalik.eth', {  noCollections: true });
console.log(res);
```

***

### getSIWBBRequestsForDeveloperApp()

> **getSIWBBRequestsForDeveloperApp**(`payload`): `Promise`\<[`GetSIWBBRequestsForDeveloperAppSuccessResponse`](/sdk/reference/classes/get-siwbb-requests-for-developer-app-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:903](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L903)

Gets the SIWBB requests for a specific developer app.

#### Parameters

##### payload

[`iGetSIWBBRequestsForDeveloperAppPayload`](/sdk/reference/interfaces/i-get-siwbb-requests-for-developer-app-payload)

#### Returns

`Promise`\<[`GetSIWBBRequestsForDeveloperAppSuccessResponse`](/sdk/reference/classes/get-siwbb-requests-for-developer-app-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/developerApps/siwbbRequests`
- **SDK Function Call**: `await BitBadgesApi.getSIWBBRequestsForDeveloperApp(payload);`

***

### getSiwbbRequestsForUser()

> **getSiwbbRequestsForUser**(`address`, `payload`): `Promise`\<[`GetSiwbbRequestsForUserSuccessResponse`](/sdk/reference/classes/get-siwbb-requests-for-user-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1499](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1499)

Gets Sign-In with BitBadges (SIWBB) requests (authentication requests)
for a user.

#### Parameters

##### address

`string`

##### payload

[`iGetSiwbbRequestsForUserPayload`](/sdk/reference/interfaces/i-get-siwbb-requests-for-user-payload)

#### Returns

`Promise`\<[`GetSiwbbRequestsForUserSuccessResponse`](/sdk/reference/classes/get-siwbb-requests-for-user-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/account/:address/requests/siwbb`
- **SDK Function Call**: `await BitBadgesApi.getSiwbbRequestsForUser(address, {  });`

#### Example

```typescript
const res = await BitBadgesApi.getSiwbbRequestsForUser("bb1...", { });
console.log(res);
```

***

### ~~getSkipAssets()~~

> **getSkipAssets**(`payload?`): `Promise`\<[`GetSkipAssetsSuccessResponse`](/sdk/reference/classes/get-skip-assets-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2655](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2655)

#### Parameters

##### payload?

[`iGetSkipAssetsPayload`](/sdk/reference/interfaces/i-get-skip-assets-payload)

#### Returns

`Promise`\<[`GetSkipAssetsSuccessResponse`](/sdk/reference/classes/get-skip-assets-success-response)\>

#### Deprecated

Use `getSwapAssets` instead. This is a thin wrapper that forwards to the consolidated `/swap/assets` endpoint.

Get Skip:Go cross-chain assets (filtered to BitBadges-allowed chains).

#### Remarks

- **API Route**: `GET /api/v0/swap/assets` (was `/api/v0/skip/assets`)

***

### ~~getSkipBalances()~~

> **getSkipBalances**(`payload`): `Promise`\<[`GetSkipBalancesSuccessResponse`](/sdk/reference/classes/get-skip-balances-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2685](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2685)

#### Parameters

##### payload

[`iGetSkipBalancesPayload`](/sdk/reference/interfaces/i-get-skip-balances-payload)

#### Returns

`Promise`\<[`GetSkipBalancesSuccessResponse`](/sdk/reference/classes/get-skip-balances-success-response)\>

#### Deprecated

Use `getSwapBalances` instead. This is a thin wrapper that forwards to the consolidated `/swap/balances` endpoint.

Get Skip:Go balances for one or more (chain, address) pairs.

#### Remarks

- **API Route**: `POST /api/v0/swap/balances` (was `/api/v0/skip/balances`)

***

### ~~getSkipChains()~~

> **getSkipChains**(`payload?`): `Promise`\<[`GetSkipChainsSuccessResponse`](/sdk/reference/classes/get-skip-chains-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2671](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2671)

#### Parameters

##### payload?

[`iGetSkipChainsPayload`](/sdk/reference/interfaces/i-get-skip-chains-payload)

#### Returns

`Promise`\<[`GetSkipChainsSuccessResponse`](/sdk/reference/classes/get-skip-chains-success-response)\>

#### Deprecated

Use `getSwapChains` instead. This is a thin wrapper that forwards to the consolidated `/swap/chains` endpoint.

Get Skip:Go cross-chain chain registry (filtered to BitBadges-allowed chains).

#### Remarks

- **API Route**: `GET /api/v0/swap/chains` (was `/api/v0/skip/chains`)

***

### ~~getSkipTxStatus()~~

> **getSkipTxStatus**(`payload`): `Promise`\<[`GetSkipTxStatusSuccessResponse`](/sdk/reference/classes/get-skip-tx-status-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2714](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2714)

#### Parameters

##### payload

[`iGetSkipTxStatusPayload`](/sdk/reference/interfaces/i-get-skip-tx-status-payload)

#### Returns

`Promise`\<[`GetSkipTxStatusSuccessResponse`](/sdk/reference/classes/get-skip-tx-status-success-response)\>

#### Deprecated

Use `getSwapStatus` instead. This is a thin wrapper that forwards to the consolidated `/swap/status` endpoint.

Get the status of a tracked Skip:Go transaction.

#### Remarks

- **API Route**: `GET /api/v0/swap/status` (was `/api/v0/skip/v2/tx/status`)

***

### getStatus()

> **getStatus**(`payload?`): `Promise`\<[`GetStatusSuccessResponse`](/sdk/reference/classes/get-status-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:389](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L389)

Gets the current status details about the blockchain / indexer (gas, block height, etc).

#### Parameters

##### payload?

[`iGetStatusPayload`](/sdk/reference/interfaces/i-get-status-payload)

#### Returns

`Promise`\<[`GetStatusSuccessResponse`](/sdk/reference/classes/get-status-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/status`
- **SDK Function Call**: `await BitBadgesApi.getStatus();`

#### Example

```typescript
const res = await BitBadgesApi.getStatus();
console.log(res);
```

***

### getSwapActivities()

> **getSwapActivities**(`payload?`): `Promise`\<[`GetSwapActivitiesSuccessResponse`](/sdk/reference/classes/get-swap-activities-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2445](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2445)

Get Swap Activities

#### Parameters

##### payload?

[`iGetSwapActivitiesPayload`](/sdk/reference/interfaces/i-get-swap-activities-payload)

#### Returns

`Promise`\<[`GetSwapActivitiesSuccessResponse`](/sdk/reference/classes/get-swap-activities-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/swapActivities`
- **SDK Function Call**: `await BitBadgesApi.getSwapActivities({ bookmark: '', limit: 25 });`

#### Example

```typescript
const res = await BitBadgesApi.getSwapActivities({ bookmark: '', limit: 25 });
console.log(res);
```

***

### getSwapAssets()

> **getSwapAssets**(`payload?`): `Promise`\<[`GetSwapAssetsSuccessResponse`](/sdk/reference/classes/get-swap-assets-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2472](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2472)

Get consolidated cross-chain assets (Skip:Go + CoinsRegistry + verified BitBadges asset metadata).

#### Parameters

##### payload?

[`iGetSwapAssetsPayload`](/sdk/reference/interfaces/i-get-swap-assets-payload)

#### Returns

`Promise`\<[`GetSwapAssetsSuccessResponse`](/sdk/reference/classes/get-swap-assets-success-response)\>

#### Remarks

- **API Route**: `GET /api/v0/swap/assets`
- **SDK Function Call**: `await BitBadgesApi.getSwapAssets({ includeSvm: false, includeCw20: false });`
- The indexer merges Skip:Go assets with BB-side CoinsRegistry entries and verified AssetInfoDoc rows for the BitBadges chain. Non-BitBadges chains pass through Skip unmodified.
- Each asset carries a `source` (`'skip' | 'coinregistry' | 'verified' | 'native'`) and an optional `isWrapped` flag for verified `badgeslp:/badges:` wrapped denoms.

***

### getSwapBalances()

> **getSwapBalances**(`payload`): `Promise`\<[`GetSwapBalancesSuccessResponse`](/sdk/reference/classes/get-swap-balances-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2524](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2524)

Get consolidated cross-chain balances for one or more (chain, address) pairs.

#### Parameters

##### payload

[`iGetSwapBalancesPayload`](/sdk/reference/interfaces/i-get-swap-balances-payload)

#### Returns

`Promise`\<[`GetSwapBalancesSuccessResponse`](/sdk/reference/classes/get-swap-balances-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/swap/balances`
- **SDK Function Call**: `await BitBadgesApi.getSwapBalances({ chains: { 'bitbadges-1': ['bb1...'] } });`
- For BitBadges chains, the indexer merges Skip-returned balances with on-chain bank balances for CoinsRegistry denoms Skip didn't report and computed wrappable amounts for verified `badgeslp:/badges:` denoms. Each balance row may carry `decimals`, `symbol`, and a `source` tag.

***

### getSwapChains()

> **getSwapChains**(`payload?`): `Promise`\<[`GetSwapChainsSuccessResponse`](/sdk/reference/classes/get-swap-chains-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2498](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2498)

Get cross-chain chain registry (Skip:Go chains filtered to BitBadges-allowed chains).

#### Parameters

##### payload?

[`iGetSwapChainsPayload`](/sdk/reference/interfaces/i-get-swap-chains-payload)

#### Returns

`Promise`\<[`GetSwapChainsSuccessResponse`](/sdk/reference/classes/get-swap-chains-success-response)\>

#### Remarks

- **API Route**: `GET /api/v0/swap/chains`
- **SDK Function Call**: `await BitBadgesApi.getSwapChains({ includeSvm: false, onlyTestnets: false });`
- Same behavior as the legacy `/skip/chains` endpoint; no merge layer (chains are Skip's domain).

***

### getSwapStatus()

> **getSwapStatus**(`payload`): `Promise`\<[`GetSwapStatusSuccessResponse`](/sdk/reference/classes/get-swap-status-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2615](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2615)

Get the status of a tracked swap transaction.

#### Parameters

##### payload

[`iGetSwapStatusPayload`](/sdk/reference/interfaces/i-get-swap-status-payload)

#### Returns

`Promise`\<[`GetSwapStatusSuccessResponse`](/sdk/reference/classes/get-swap-status-success-response)\>

#### Remarks

- **API Route**: `GET /api/v0/swap/status`
- **SDK Function Call**: `await BitBadgesApi.getSwapStatus({ txHash, chainId });`
- The indexer enriches the upstream response with a `swapEventInfo` field derived from BitBadges on-chain swap events when the final destination is BitBadges.

***

### getTokenActivity()

> **getTokenActivity**(`collectionId`, `tokenId`, `payload`): `Promise`\<[`GetTokenActivitySuccessResponse`](/sdk/reference/classes/get-token-activity-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:542](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L542)

Gets the activity for a specific token in a collection

#### Parameters

##### collectionId

`string`

##### tokenId

[`NumberType`](/sdk/reference/type-aliases/number-type)

##### payload

[`iGetTokenActivityPayload`](/sdk/reference/interfaces/i-get-token-activity-payload)

#### Returns

`Promise`\<[`GetTokenActivitySuccessResponse`](/sdk/reference/classes/get-token-activity-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/:collectionId/:tokenId/activity`
- **SDK Function Call**: `await BitBadgesApi.getTokenActivity(collectionId, tokenId, payload);`

#### Example

```typescript
const res = await BitBadgesApi.getTokenActivity(collectionId, tokenId, { bookmark: 'prev' });
console.log(res);
```

***

### getTokenMetadata()

> **getTokenMetadata**(`collectionId`, `tokenId`): `Promise`\<[`GetTokenMetadataSuccessResponse`](/sdk/reference/classes/get-token-metadata-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1735](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1735)

Gets current metadata for a specific token in a collection.

#### Parameters

##### collectionId

`string`

##### tokenId

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`Promise`\<[`GetTokenMetadataSuccessResponse`](/sdk/reference/classes/get-token-metadata-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/:collectionId/:tokenId/metadata`
- **SDK Function Call**: `await BitBadgesApi.getTokenMetadata(collectionId, tokenId);`

#### Example

```typescript
const res = await BitBadgesApi.getTokenMetadata("123", "456");
console.log(res);
```

***

### getTokensViewForUser()

> **getTokensViewForUser**(`address`, `payload`): `Promise`\<[`GetTokensViewForUserSuccessResponse`](/sdk/reference/classes/get-tokens-view-for-user-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1572](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1572)

Gets tokens for a specific user. Specify the viewType to determine what
tokens to retrieve.

#### Parameters

##### address

`string`

##### payload

[`iGetTokensViewForUserPayload`](/sdk/reference/interfaces/i-get-tokens-view-for-user-payload)

#### Returns

`Promise`\<[`GetTokensViewForUserSuccessResponse`](/sdk/reference/classes/get-tokens-view-for-user-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/account/:address/tokens`
- **SDK Function Call**: `await BitBadgesApi.getTokensViewForUser(address, { viewType });`

#### Example

```typescript
const res = await BitBadgesApi.getTokensViewForUser("bb1...", { viewType: "collected" });
console.log(res);
```

***

### getTransferActivityForUser()

> **getTransferActivityForUser**(`address`, `payload`): `Promise`\<[`GetTransferActivityForUserSuccessResponse`](/sdk/reference/classes/get-transfer-activity-for-user-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1535](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1535)

Gets transfer activity for a specific user.

#### Parameters

##### address

`string`

##### payload

[`iGetTransferActivityForUserPayload`](/sdk/reference/interfaces/i-get-transfer-activity-for-user-payload)

#### Returns

`Promise`\<[`GetTransferActivityForUserSuccessResponse`](/sdk/reference/classes/get-transfer-activity-for-user-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/account/:address/activity/tokens`
- **SDK Function Call**: `await BitBadgesApi.getTransferActivityForUser(address, { });`

#### Example

```typescript
const res = await BitBadgesApi.getTransferActivityForUser("bb1...", { });
console.log(res);
```

***

### getUserBalances()

> **getUserBalances**(`address`, `payload?`): `Promise`\<[`GetUserBalancesSuccessResponse`](/sdk/reference/classes/get-user-balances-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:772](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L772)

Gets the BitBadges-standard balance docs for a user.

Lean alternative to fetching `/users` with a `tokensCollected` view —
returns only the balance docs (no account wrapper, no metadata).
Use this when you just need the balances and want to skip the
full account-fetch round trip.

#### Parameters

##### address

`string`

##### payload?

[`iGetUserBalancesPayload`](/sdk/reference/interfaces/i-get-user-balances-payload)

#### Returns

`Promise`\<[`GetUserBalancesSuccessResponse`](/sdk/reference/classes/get-user-balances-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/account/:address/balances`
- **SDK Function Call**: `await BitBadgesApi.getUserBalances(address, { bookmark, limit });`

#### Example

```typescript
const res = await BitBadgesApi.getUserBalances("bb1...", { limit: 100 });
console.log(res.docs, res.pagination);
```

***

### getUtilityPage()

> **getUtilityPage**(`utilityPageId`, `payload?`): `Promise`\<[`GetUtilityPageSuccessResponse`](/sdk/reference/classes/get-utility-page-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2083](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2083)

Get utility page by ID.

#### Parameters

##### utilityPageId

`string`

##### payload?

[`iGetUtilityPagePayload`](/sdk/reference/interfaces/i-get-utility-page-payload)

#### Returns

`Promise`\<[`GetUtilityPageSuccessResponse`](/sdk/reference/classes/get-utility-page-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/utilityPage/:utilityPageId`
- **SDK Function Call**: `await BitBadgesApi.getUtilityPage(utilityPageId, { ... });`

#### Example

```ts

```

***

### getUtilityPages()

> **getUtilityPages**(`payload`): `Promise`\<[`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1338](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1338)

Gets utility pages.

#### Parameters

##### payload

[`iGetUtilityPagesPayload`](/sdk/reference/interfaces/i-get-utility-pages-payload)

#### Returns

`Promise`\<[`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/utilityPages/fetch`
- **SDK Function Call**: `await BitBadgesApi.getUtilityPages(payload);`

***

### handleApiError()

> **handleApiError**(`error`): `Promise`\<`void`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:95](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L95)

#### Parameters

##### error

`any`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api).[`handleApiError`](/sdk/reference/classes/base-bit-badges-api#handleapierror)

***

### performBatchStoreAction()

> **performBatchStoreAction**(`payload`): `Promise`\<[`BatchStoreActionSuccessResponse`](/sdk/reference/classes/batch-store-action-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1235](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1235)

Performs multiple actions for a dynamicStore in batch.

#### Parameters

##### payload

[`iPerformStoreActionBatchWithBodyAuthPayload`](/sdk/reference/interfaces/i-perform-store-action-batch-with-body-auth-payload)

#### Returns

`Promise`\<[`BatchStoreActionSuccessResponse`](/sdk/reference/classes/batch-store-action-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/storeActions/batch`
- **SDK Function Call**: `await BitBadgesApi.performBatchStoreAction(payload);`
- **Authentication**: Must be signed in.

***

### performStoreAction()

> **performStoreAction**(`payload`): `Promise`\<[`PerformStoreActionSuccessResponse`](/sdk/reference/classes/perform-store-action-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1208](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1208)

Performs an action for a dynamicStore.

#### Parameters

##### payload

[`iPerformStoreActionSingleWithBodyAuthPayload`](/sdk/reference/interfaces/i-perform-store-action-single-with-body-auth-payload)

#### Returns

`Promise`\<[`PerformStoreActionSuccessResponse`](/sdk/reference/classes/perform-store-action-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/storeActions/single`
- **SDK Function Call**: `await BitBadgesApi.performStoreAction(payload);`
- **Authentication**: Must be signed in.

***

### refreshMetadata()

> **refreshMetadata**(`collectionId`, `payload?`): `Promise`\<[`RefreshMetadataSuccessResponse`](/sdk/reference/classes/refresh-metadata-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:565](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L565)

Triggers a metadata refresh for a specific collection. BitBadges API uses a refresh queue system for fetching anything off-chain.
This will refetch any details for the collection (such as metadata, balances, approval details, etc).
Note it will reject if recently refreshed. Uses a cooldown of 5 minutes.

#### Parameters

##### collectionId

`string`

##### payload?

[`iRefreshMetadataPayload`](/sdk/reference/interfaces/i-refresh-metadata-payload)

#### Returns

`Promise`\<[`RefreshMetadataSuccessResponse`](/sdk/reference/classes/refresh-metadata-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/collection/:collectionId/refresh`
- **SDK Function Call**: `await BitBadgesApi.refreshMetadata(collectionId, payload);`

#### Example

```typescript
const res = await BitBadgesApi.refreshMetadata(collectionId);
console.log(res);
```

***

### revokeOauthAuthorization()

> **revokeOauthAuthorization**(`payload`): `Promise`\<[`OauthRevokeSuccessResponse`](/sdk/reference/classes/oauth-revoke-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1156](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1156)

Revokes an access token for a user.

#### Parameters

##### payload

[`iOauthRevokePayload`](/sdk/reference/interfaces/i-oauth-revoke-payload)

#### Returns

`Promise`\<[`OauthRevokeSuccessResponse`](/sdk/reference/classes/oauth-revoke-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/siwbb/token/revoke`
- **SDK Function Call**: `await BitBadgesApi.oauthRevoke(payload);`

***

### rotateSIWBBRequest()

> **rotateSIWBBRequest**(`payload`): `Promise`\<[`RotateSIWBBRequestSuccessResponse`](/sdk/reference/classes/rotate-siwbb-request-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:957](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L957)

Rotates a SIWBB request.

#### Parameters

##### payload

[`iRotateSIWBBRequestPayload`](/sdk/reference/interfaces/i-rotate-siwbb-request-payload)

#### Returns

`Promise`\<[`RotateSIWBBRequestSuccessResponse`](/sdk/reference/classes/rotate-siwbb-request-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/siwbbRequest/rotate`
- **SDK Function Call**: `await BitBadgesApi.rotateSIWBBRequest(payload);`

***

### searchClaims()

> **searchClaims**(`payload`): `Promise`\<[`SearchClaimsSuccessResponse`](/sdk/reference/classes/search-claims-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1061](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1061)

Searches for claims.

#### Parameters

##### payload

[`iSearchClaimsPayload`](/sdk/reference/interfaces/i-search-claims-payload)

#### Returns

`Promise`\<[`SearchClaimsSuccessResponse`](/sdk/reference/classes/search-claims-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/claims/search`
- **SDK Function Call**: `await BitBadgesApi.searchClaims(payload);`

***

### searchDeveloperApps()

> **searchDeveloperApps**(`payload`): `Promise`\<[`SearchDeveloperAppsSuccessResponse`](/sdk/reference/classes/search-developer-apps-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2370](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2370)

Searches for developer apps.

#### Parameters

##### payload

[`iSearchDeveloperAppsPayload`](/sdk/reference/interfaces/i-search-developer-apps-payload)

#### Returns

`Promise`\<[`SearchDeveloperAppsSuccessResponse`](/sdk/reference/classes/search-developer-apps-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/developerApps/search`
- **SDK Function Call**: `await BitBadgesApi.searchDeveloperApps(payload);`

***

### searchDynamicDataStores()

> **searchDynamicDataStores**\<`Q`\>(`payload`): `Promise`\<[`SearchDynamicDataStoresSuccessResponse`](/sdk/reference/classes/search-dynamic-data-stores-success-response)\<`Q`, `T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1311](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1311)

Searches dynamic data stores.

#### Type Parameters

##### Q

`Q` *extends* `"addresses"`

#### Parameters

##### payload

[`iSearchDynamicDataStoresPayload`](/sdk/reference/interfaces/i-search-dynamic-data-stores-payload)

#### Returns

`Promise`\<[`SearchDynamicDataStoresSuccessResponse`](/sdk/reference/classes/search-dynamic-data-stores-success-response)\<`Q`, `T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/dynamicStores/search`
- **SDK Function Call**: `await BitBadgesApi.searchDynamicDataStores(payload);`

***

### searchUtilityPages()

> **searchUtilityPages**(`payload`): `Promise`\<[`SearchUtilityPagesSuccessResponse`](/sdk/reference/classes/search-utility-pages-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1358](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1358)

Searches for utility pages.

#### Parameters

##### payload

[`iSearchUtilityPagesPayload`](/sdk/reference/interfaces/i-search-utility-pages-payload)

#### Returns

`Promise`\<[`SearchUtilityPagesSuccessResponse`](/sdk/reference/classes/search-utility-pages-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/utilityPages/search`
- **SDK Function Call**: `await BitBadgesApi.searchUtilityPages(payload);`

***

### setAccessToken()

> **setAccessToken**(`token`): `void`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:85](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L85)

#### Parameters

##### token

`string`

#### Returns

`void`

#### Inherited from

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api).[`setAccessToken`](/sdk/reference/classes/base-bit-badges-api#setaccesstoken)

***

### simulateClaim()

> **simulateClaim**(`claimId`, `address`, `payload`): `Promise`\<[`SimulateClaimSuccessResponse`](/sdk/reference/classes/simulate-claim-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:622](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L622)

Simulates a claim attempt. A success response means the claim is valid and can be completed.

#### Parameters

##### claimId

`string`

##### address

`string`

##### payload

[`iSimulateClaimPayload`](/sdk/reference/interfaces/i-simulate-claim-payload)

#### Returns

`Promise`\<[`SimulateClaimSuccessResponse`](/sdk/reference/classes/simulate-claim-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/claims/simulate/:claimId/:address`
- **SDK Function Call**: `await BitBadgesApi.simulateClaim(claimId, address, { ...body });`
- **Authentication**: Must be signed in.

#### Example

```typescript
const res = await BitBadgesApi.simulateClaim(claimId, address, { ...body });
console.log(res);
```

***

### simulateTx()

> **simulateTx**(`payload`): `Promise`\<[`SimulateTxSuccessResponse`](/sdk/reference/classes/simulate-tx-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:852](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L852)

Simulates a transaction on the blockchain.

#### Parameters

##### payload

`string` \| [`BroadcastPostBody`](/sdk/reference/interfaces/broadcast-post-body)

#### Returns

`Promise`\<[`SimulateTxSuccessResponse`](/sdk/reference/classes/simulate-tx-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/simulate`
- **SDK Function Call**: `await BitBadgesApi.simulateTx(payload);`
- **Tutorial**: See Broadcasting Transactions tutorial on the official docs.

This means that it will return the gas used and any errors that occur on a dry run. Should be used before broadcasting a transaction. Does not require signatures.

***

### ~~trackSkipTx()~~

> **trackSkipTx**(`payload`): `Promise`\<[`TrackSkipTxSuccessResponse`](/sdk/reference/classes/track-skip-tx-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2700](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2700)

#### Parameters

##### payload

[`iTrackSkipTxPayload`](/sdk/reference/interfaces/i-track-skip-tx-payload)

#### Returns

`Promise`\<[`TrackSkipTxSuccessResponse`](/sdk/reference/classes/track-skip-tx-success-response)\>

#### Deprecated

Use `trackSwap` instead. This is a thin wrapper that forwards to the consolidated `/swap/track` endpoint.

Register a broadcast tx with cross-chain tracking.

#### Remarks

- **API Route**: `POST /api/v0/swap/track` (was `/api/v0/skip/v2/tx/track`)

***

### trackSwap()

> **trackSwap**(`payload`): `Promise`\<[`TrackSwapSuccessResponse`](/sdk/reference/classes/track-swap-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2589](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2589)

Register a broadcast tx with the cross-chain tracker.

#### Parameters

##### payload

[`iTrackSwapPayload`](/sdk/reference/interfaces/i-track-swap-payload)

#### Returns

`Promise`\<[`TrackSwapSuccessResponse`](/sdk/reference/classes/track-swap-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/swap/track`
- **SDK Function Call**: `await BitBadgesApi.trackSwap({ txHash, chainId, tokenIn: '1000ubadge' });`
- When called by an authenticated user, the indexer writes a tracking doc keyed by `${txHash}-${chainId}` so subsequent `getSwapStatus` calls can short-circuit.

***

### unsetAccessToken()

> **unsetAccessToken**(): `void`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:90](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L90)

#### Returns

`void`

#### Inherited from

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api).[`unsetAccessToken`](/sdk/reference/classes/base-bit-badges-api#unsetaccesstoken)

***

### updateClaims()

> **updateClaims**(`payload`): `Promise`\<[`UpdateClaimSuccessResponse`](/sdk/reference/classes/update-claim-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1134](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1134)

Update an claim.

#### Parameters

##### payload

[`iUpdateClaimPayload`](/sdk/reference/interfaces/i-update-claim-payload)

#### Returns

`Promise`\<[`UpdateClaimSuccessResponse`](/sdk/reference/classes/update-claim-success-response)\>

#### Remarks

- **API Route**: `PUT /api/v0/claims`
- **SDK Function Call**: `await BitBadgesApi.updateClaim(payload);`
- **Authentication**: Must be signed in.

***

### updateDeveloperApp()

> **updateDeveloperApp**(`payload`): `Promise`\<[`UpdateDeveloperAppSuccessResponse`](/sdk/reference/classes/update-developer-app-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2241](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2241)

Update an developer app.

#### Parameters

##### payload

[`iUpdateDeveloperAppPayload`](/sdk/reference/interfaces/i-update-developer-app-payload)

#### Returns

`Promise`\<[`UpdateDeveloperAppSuccessResponse`](/sdk/reference/classes/update-developer-app-success-response)\>

#### Remarks

- **API Route**: `PUT /api/v0/developerApps
- **SDK Function Call**: `await BitBadgesApi.updateUserDeveloperApps(payload);`
- **Authentication**: Must be signed in.

***

### updateDynamicDataStore()

> **updateDynamicDataStore**\<`Q`, `T`\>(`payload`): `Promise`\<[`UpdateDynamicDataStoreSuccessResponse`](/sdk/reference/classes/update-dynamic-data-store-success-response)\<`Q`, `T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2293](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2293)

Updates a dynamic data bin.

#### Type Parameters

##### Q

`Q` *extends* `"addresses"`

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### payload

[`iUpdateDynamicDataStorePayload`](/sdk/reference/interfaces/i-update-dynamic-data-store-payload)

#### Returns

`Promise`\<[`UpdateDynamicDataStoreSuccessResponse`](/sdk/reference/classes/update-dynamic-data-store-success-response)\<`Q`, `T`\>\>

#### Remarks

- **API Route**: `PUT /api/v0/dynamicStores`
- **SDK Function Call**: `await BitBadgesApi.updateDynamicDataStore(payload);`

***

### updateUtilityPage()

> **updateUtilityPage**(`payload`): `Promise`\<[`UpdateUtilityPageSuccessResponse`](/sdk/reference/classes/update-utility-page-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1398](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1398)

Updates a utility page.

#### Parameters

##### payload

[`iUpdateUtilityPagePayload`](/sdk/reference/interfaces/i-update-utility-page-payload)\<`T`\>

#### Returns

`Promise`\<[`UpdateUtilityPageSuccessResponse`](/sdk/reference/classes/update-utility-page-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `PUT /api/v0/utilityPages`
- **SDK Function Call**: `await BitBadgesApi.updateUtilityPage(payload);`

***

### verifyOwnershipRequirements()

> **verifyOwnershipRequirements**(`payload`): `Promise`\<[`GenericVerifyAssetsSuccessResponse`](/sdk/reference/classes/generic-verify-assets-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2163](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2163)

A generic route for verifying asset ownership requirements. Asset requirements support AND / OR / NOT logic.

#### Parameters

##### payload

[`iGenericVerifyAssetsPayload`](/sdk/reference/interfaces/i-generic-verify-assets-payload)

#### Returns

`Promise`\<[`GenericVerifyAssetsSuccessResponse`](/sdk/reference/classes/generic-verify-assets-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/verifyOwnershipRequirements`
- **SDK Function Call**: `await BitBadgesApi.verifyOwnershipRequirements(payload);`
