---
description: "This is the BitBadgesAPI class which provides all typed API calls to the BitBadges API. See official documentation for more details and examples. Must pass in…"
---

# Class: BitBadgesAdminAPI\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2887](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2887)

This is the BitBadgesAPI class which provides all typed API calls to the BitBadges API.
See official documentation for more details and examples. Must pass in a valid API key.

convertFunction is used to convert any responses returned by the API to your desired NumberType.
```typescript
import { BigIntify, Stringify, Numberify, BitBadgesAPI } from "bitbadges";
const BitBadgesApi = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: '...' });
const collections = await BitBadgesApi.getCollections(...);
```

By default, we use the official API URL (https://api.bitbadges.io). You can override this by passing in a custom apiUrl.

## See

[BitBadges API Documentation](https://docs.bitbadges.io/for-developers/bitbadges-api/api)

## Extends

- [`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Constructors

### Constructor

> **new BitBadgesAdminAPI**\<`T`\>(`apiDetails`): `BitBadgesAdminAPI`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2888](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2888)

#### Parameters

##### apiDetails

[`iBitBadgesApi`](/sdk/reference/interfaces/i-bit-badges-api)\<`T`\>

#### Returns

`BitBadgesAdminAPI`\<`T`\>

#### Overrides

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`constructor`](/sdk/reference/classes/bit-badges-api#constructor)

## Properties

### accessToken

> **accessToken**: `string` = `''`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:63](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L63)

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`accessToken`](/sdk/reference/classes/bit-badges-api#accesstoken)

***

### apiKey

> **apiKey**: `string` \| `undefined`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:62](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L62)

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`apiKey`](/sdk/reference/classes/bit-badges-api#apikey)

***

### appendedHeaders

> **appendedHeaders**: `Record`\<`string`, `string`\> = `{}`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:64](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L64)

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`appendedHeaders`](/sdk/reference/classes/bit-badges-api#appendedheaders)

***

### axios

> **axios**: `AxiosInstance`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:59](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L59)

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`axios`](/sdk/reference/classes/bit-badges-api#axios)

***

### BACKEND\_URL

> **BACKEND\_URL**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:60](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L60)

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`BACKEND_URL`](/sdk/reference/classes/bit-badges-api#backend_url)

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

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`ConvertFunction`](/sdk/reference/classes/bit-badges-api#convertfunction)

## Methods

### addApprovalDetailsToOffChainStorage()

> **addApprovalDetailsToOffChainStorage**(`payload`): `Promise`\<[`AddApprovalDetailsToOffChainStorageSuccessResponse`](/sdk/reference/classes/add-approval-details-to-off-chain-storage-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3146](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3146)

Adds approval details to off-chain storage.

#### Parameters

##### payload

[`iAddApprovalDetailsToOffChainStoragePayload`](/sdk/reference/interfaces/i-add-approval-details-to-off-chain-storage-payload)

#### Returns

`Promise`\<[`AddApprovalDetailsToOffChainStorageSuccessResponse`](/sdk/reference/classes/add-approval-details-to-off-chain-storage-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/addApprovalDetailsToOffChainStorage`
- **SDK Function Call**: `await BitBadgesApi.addApprovalDetailsToOffChainStorage(payload);`
- **CORS**: Restricted to only BitBadges official site. Otherwise, you will need to self-host.

#### Example

```typescript
const res = await BitBadgesApi.addApprovalDetailsToOffChainStorage(payload);
console.log(res);
```

***

### addToIpfs()

> **addToIpfs**(`payload`): `Promise`\<[`AddToIpfsSuccessResponse`](/sdk/reference/classes/add-to-ipfs-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3117](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3117)

Adds metadata to IPFS.

#### Parameters

##### payload

[`iAddToIpfsPayload`](/sdk/reference/interfaces/i-add-to-ipfs-payload)

#### Returns

`Promise`\<[`AddToIpfsSuccessResponse`](/sdk/reference/classes/add-to-ipfs-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/addToIpfs`
- **SDK Function Call**: `await BitBadgesApi.addToIpfs(payload);`
- **CORS**: Restricted to only BitBadges official site. Otherwise, you will need to self-host.

#### Example

```typescript
const res = await BitBadgesApi.addToIpfs(payload);
console.log(res);
```

***

### assertPositiveCollectionId()

> **assertPositiveCollectionId**(`collectionId`): `void`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:118](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L118)

#### Parameters

##### collectionId

`string`

#### Returns

`void`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`assertPositiveCollectionId`](/sdk/reference/classes/bit-badges-api#assertpositivecollectionid)

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

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`assertPositiveInteger`](/sdk/reference/classes/bit-badges-api#assertpositiveinteger)

***

### broadcastTx()

> **broadcastTx**(`payload`): `Promise`\<[`BroadcastTxSuccessResponse`](/sdk/reference/classes/broadcast-tx-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:845](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L845)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`broadcastTx`](/sdk/reference/classes/bit-badges-api#broadcasttx)

***

### broadcastTxEvm()

> **broadcastTxEvm**(`payload`): `Promise`\<[`BroadcastTxEvmSuccessResponse`](/sdk/reference/classes/broadcast-tx-evm-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3909](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3909)

Broadcast an EVM transaction wrapped in `MsgEthereumTx`. Returns both the
EVM keccak hash (`txhash`) and the cosmos-side wrapping hash (`cosmosTxHash`)
so consumers can look up the tx in either environment.

#### Parameters

##### payload

[`iBroadcastTxEvmPayload`](/sdk/reference/interfaces/i-broadcast-tx-evm-payload)

#### Returns

`Promise`\<[`BroadcastTxEvmSuccessResponse`](/sdk/reference/classes/broadcast-tx-evm-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/broadcast-evm`
- **SDK Function Call**: `await BitBadgesApi.broadcastTxEvm({ mode: 'evm', evmTx: { to, data, signer_address } });`

***

### browse()

> **browse**(`payload`): `Promise`\<[`GetBrowseSuccessResponse`](/sdk/reference/classes/get-browse-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:4152](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L4152)

Open the global browse / explore page payload. Alias for `getBrowse` exposed
under the lowercase name so the operationId in routes.yaml matches.

#### Parameters

##### payload

[`iGetBrowsePayload`](/sdk/reference/interfaces/i-get-browse-payload)

#### Returns

`Promise`\<[`GetBrowseSuccessResponse`](/sdk/reference/classes/get-browse-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/browse`
- **SDK Function Call**: `await BitBadgesApi.browse({ ... });`

***

### checkClaimSuccess()

> **checkClaimSuccess**(`claimId`, `address`): `Promise`\<[`CheckClaimSuccessSuccessResponse`](/sdk/reference/classes/check-claim-success-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1480](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1480)

Checks if a claim has been successfully completed.

#### Parameters

##### claimId

`string`

##### address

`string`

#### Returns

`Promise`\<[`CheckClaimSuccessSuccessResponse`](/sdk/reference/classes/check-claim-success-success-response)\>

#### Remarks

- **API Route**: `GET /api/v0/claims/success/:claimId/:address`
- **SDK Function Call**: `await BitBadgesApi.checkClaimSuccess(claimId, address);`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`checkClaimSuccess`](/sdk/reference/classes/bit-badges-api#checkclaimsuccess)

***

### checkIfSignedIn()

> **checkIfSignedIn**(`payload?`): `Promise`\<[`CheckSignInStatusSuccessResponse`](/sdk/reference/classes/check-sign-in-status-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:817](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L817)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`checkIfSignedIn`](/sdk/reference/classes/bit-badges-api#checkifsignedin)

***

### completeClaim()

> **completeClaim**(`claimId`, `address`, `payload`): `Promise`\<[`CompleteClaimSuccessResponse`](/sdk/reference/classes/complete-claim-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:604](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L604)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`completeClaim`](/sdk/reference/classes/bit-badges-api#completeclaim)

***

### createApiKey()

> **createApiKey**(`payload`): `Promise`\<[`CreateApiKeySuccessResponse`](/sdk/reference/classes/create-api-key-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3192](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3192)

Creates an API key.

#### Parameters

##### payload

[`iCreateApiKeyPayload`](/sdk/reference/interfaces/i-create-api-key-payload)

#### Returns

`Promise`\<[`CreateApiKeySuccessResponse`](/sdk/reference/classes/create-api-key-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/apiKeys`
- **SDK Function Call**: `await BitBadgesApi.createApiKey(payload);`

***

### createClaims()

> **createClaims**(`payload`): `Promise`\<[`CreateClaimSuccessResponse`](/sdk/reference/classes/create-claim-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1104](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1104)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`createClaims`](/sdk/reference/classes/bit-badges-api#createclaims)

***

### createDeveloperApp()

> **createDeveloperApp**(`payload`): `Promise`\<[`CreateDeveloperAppSuccessResponse`](/sdk/reference/classes/create-developer-app-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2185](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2185)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`createDeveloperApp`](/sdk/reference/classes/bit-badges-api#createdeveloperapp)

***

### createDynamicDataStore()

> **createDynamicDataStore**\<`Q`, `NumberType`\>(`payload`): `Promise`\<[`CreateDynamicDataStoreSuccessResponse`](/sdk/reference/classes/create-dynamic-data-store-success-response)\<`Q`, `T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2262](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2262)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`createDynamicDataStore`](/sdk/reference/classes/bit-badges-api#createdynamicdatastore)

***

### createPlugin()

> **createPlugin**(`payload`): `Promise`\<[`CreatePluginSuccessResponse`](/sdk/reference/classes/create-plugin-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2939](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2939)

Creates a plugin.

#### Parameters

##### payload

[`iCreatePluginPayload`](/sdk/reference/interfaces/i-create-plugin-payload)

#### Returns

`Promise`\<[`CreatePluginSuccessResponse`](/sdk/reference/classes/create-plugin-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/plugins`
- **SDK Function Call**: `await BitBadgesApi.createPlugin(payload);`
- **Authentication**: Must be signed in.

***

### createPromptSkill()

> **createPromptSkill**(`payload`): `Promise`\<[`CreatePromptSkillSuccessResponse`](/sdk/reference/classes/create-prompt-skill-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:4040](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L4040)

Create a new prompt skill.

#### Parameters

##### payload

[`iCreatePromptSkillPayload`](/sdk/reference/interfaces/i-create-prompt-skill-payload)

#### Returns

`Promise`\<[`CreatePromptSkillSuccessResponse`](/sdk/reference/classes/create-prompt-skill-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/promptSkills`
- **Authentication**: Full Access scope required.
- **SDK Function Call**: `await BitBadgesApi.createPromptSkill(payload);`

***

### createSIWBBRequest()

> **createSIWBBRequest**(`payload?`): `Promise`\<[`CreateSIWBBRequestSuccessResponse`](/sdk/reference/classes/create-siwbb-request-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:950](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L950)

Creates a SIWBB request.

#### Parameters

##### payload?

[`iCreateSIWBBRequestPayload`](/sdk/reference/interfaces/i-create-siwbb-request-payload)

#### Returns

`Promise`\<[`CreateSIWBBRequestSuccessResponse`](/sdk/reference/classes/create-siwbb-request-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/siwbbRequest`
- **SDK Function Call**: `await BitBadgesApi.createSIWBBRequest(payload);`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`createSIWBBRequest`](/sdk/reference/classes/bit-badges-api#createsiwbbrequest)

***

### createUtilityPage()

> **createUtilityPage**(`payload`): `Promise`\<[`CreateUtilityPageSuccessResponse`](/sdk/reference/classes/create-utility-page-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1396](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1396)

Creates a utility page.

#### Parameters

##### payload

[`iCreateUtilityPagePayload`](/sdk/reference/interfaces/i-create-utility-page-payload)\<`T`\>

#### Returns

`Promise`\<[`CreateUtilityPageSuccessResponse`](/sdk/reference/classes/create-utility-page-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/utilityPages`
- **SDK Function Call**: `await BitBadgesApi.createUtilityPage(payload);`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`createUtilityPage`](/sdk/reference/classes/bit-badges-api#createutilitypage)

***

### deleteApiKey()

> **deleteApiKey**(`payload`): `Promise`\<[`DeleteApiKeySuccessResponse`](/sdk/reference/classes/delete-api-key-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3226](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3226)

Deletes an API key.

#### Parameters

##### payload

[`iDeleteApiKeyPayload`](/sdk/reference/interfaces/i-delete-api-key-payload)

#### Returns

`Promise`\<[`DeleteApiKeySuccessResponse`](/sdk/reference/classes/delete-api-key-success-response)\>

#### Remarks

- **API Route**: `DELETE /api/v0/apiKeys`
- **SDK Function Call**: `await BitBadgesApi.deleteApiKey(payload);`

***

### deleteClaims()

> **deleteClaims**(`payload`): `Promise`\<[`DeleteClaimSuccessResponse`](/sdk/reference/classes/delete-claim-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1127](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1127)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`deleteClaims`](/sdk/reference/classes/bit-badges-api#deleteclaims)

***

### deleteDeveloperApp()

> **deleteDeveloperApp**(`payload`): `Promise`\<[`DeleteDeveloperAppSuccessResponse`](/sdk/reference/classes/delete-developer-app-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2211](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2211)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`deleteDeveloperApp`](/sdk/reference/classes/bit-badges-api#deletedeveloperapp)

***

### deleteDynamicDataStore()

> **deleteDynamicDataStore**(`payload`): `Promise`\<[`DeleteDynamicDataStoreSuccessResponse`](/sdk/reference/classes/delete-dynamic-data-store-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2316](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2316)

Deletes a dynamic data bin.

#### Parameters

##### payload

[`iDeleteDynamicDataStorePayload`](/sdk/reference/interfaces/i-delete-dynamic-data-store-payload)

#### Returns

`Promise`\<[`DeleteDynamicDataStoreSuccessResponse`](/sdk/reference/classes/delete-dynamic-data-store-success-response)\>

#### Remarks

- **API Route**: `DELETE /api/v0/dynamicStores`
- **SDK Function Call**: `await BitBadgesApi.deleteDynamicDataStore(payload);`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`deleteDynamicDataStore`](/sdk/reference/classes/bit-badges-api#deletedynamicdatastore)

***

### deletePlugin()

> **deletePlugin**(`payload`): `Promise`\<[`DeletePluginSuccessResponse`](/sdk/reference/classes/delete-plugin-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2985](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2985)

Deletes a plugin.

#### Parameters

##### payload

[`iDeletePluginPayload`](/sdk/reference/interfaces/i-delete-plugin-payload)

#### Returns

`Promise`\<[`DeletePluginSuccessResponse`](/sdk/reference/classes/delete-plugin-success-response)\>

#### Remarks

- **API Route**: `DELETE /api/v0/plugins`
- **SDK Function Call**: `await BitBadgesApi.deletePlugin(payload);`
- **Authentication**: Must be signed in.

***

### deletePromptSkill()

> **deletePromptSkill**(`payload`): `Promise`\<[`DeletePromptSkillSuccessResponse`](/sdk/reference/classes/delete-prompt-skill-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:4092](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L4092)

Soft-delete a prompt skill (sets `approvalStatus: 'rejected'` and `deletedAt`).

#### Parameters

##### payload

[`iDeletePromptSkillPayload`](/sdk/reference/interfaces/i-delete-prompt-skill-payload)

#### Returns

`Promise`\<[`DeletePromptSkillSuccessResponse`](/sdk/reference/classes/delete-prompt-skill-success-response)\>

#### Remarks

- **API Route**: `DELETE /api/v0/promptSkills`
- **Authentication**: Full Access scope required.
- **SDK Function Call**: `await BitBadgesApi.deletePromptSkill({ promptSkillId });`

***

### deleteSIWBBRequest()

> **deleteSIWBBRequest**(`payload?`): `Promise`\<[`DeleteSIWBBRequestSuccessResponse`](/sdk/reference/classes/delete-siwbb-request-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1001](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1001)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`deleteSIWBBRequest`](/sdk/reference/classes/bit-badges-api#deletesiwbbrequest)

***

### deleteUtilityPage()

> **deleteUtilityPage**(`payload`): `Promise`\<[`DeleteUtilityPageSuccessResponse`](/sdk/reference/classes/delete-utility-page-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1436](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1436)

Deletes a utility page.

#### Parameters

##### payload

[`iDeleteUtilityPagePayload`](/sdk/reference/interfaces/i-delete-utility-page-payload)

#### Returns

`Promise`\<[`DeleteUtilityPageSuccessResponse`](/sdk/reference/classes/delete-utility-page-success-response)\>

#### Remarks

- **API Route**: `DELETE /api/v0/utilityPages`
- **SDK Function Call**: `await BitBadgesApi.deleteUtilityPage(payload);`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`deleteUtilityPage`](/sdk/reference/classes/bit-badges-api#deleteutilitypage)

***

### estimateSwap()

> **estimateSwap**(`payload`): `Promise`\<[`iEstimateSwapSuccessResponse`](/sdk/reference/interfaces/i-estimate-swap-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2546](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2546)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`estimateSwap`](/sdk/reference/classes/bit-badges-api#estimateswap)

***

### ~~estimateSwapLegacy()~~

> **estimateSwapLegacy**(`payload`): `Promise`\<[`iEstimateSwapSuccessResponse`](/sdk/reference/interfaces/i-estimate-swap-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2570](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2570)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`estimateSwapLegacy`](/sdk/reference/classes/bit-badges-api#estimateswaplegacy)

***

### exchangeSIWBBAuthorizationCode()

> **exchangeSIWBBAuthorizationCode**(`payload?`): `Promise`\<[`ExchangeSIWBBAuthorizationCodeSuccessResponse`](/sdk/reference/classes/exchange-siwbb-authorization-code-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:892](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L892)

Gets and verifies a SIWBB request.

#### Parameters

##### payload?

[`iExchangeSIWBBAuthorizationCodePayload`](/sdk/reference/interfaces/i-exchange-siwbb-authorization-code-payload)

#### Returns

`Promise`\<[`ExchangeSIWBBAuthorizationCodeSuccessResponse`](/sdk/reference/classes/exchange-siwbb-authorization-code-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/siwbbRequest`
- **SDK Function Call**: `await BitBadgesApi.exchangeSIWBBAuthorizationCode(payload);`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`exchangeSIWBBAuthorizationCode`](/sdk/reference/classes/bit-badges-api#exchangesiwbbauthorizationcode)

***

### fetchApiKeys()

> **fetchApiKeys**(`payload?`): `Promise`\<[`GetApiKeysSuccessResponse`](/sdk/reference/classes/get-api-keys-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:4140](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L4140)

Batch-fetch API keys for the authenticated user. Alias for `getApiKeys`
exposed under the `fetch*` naming convention.

#### Parameters

##### payload?

[`iGetApiKeysPayload`](/sdk/reference/interfaces/i-get-api-keys-payload)

#### Returns

`Promise`\<[`GetApiKeysSuccessResponse`](/sdk/reference/classes/get-api-keys-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/apiKeys/fetch`
- **SDK Function Call**: `await BitBadgesApi.fetchApiKeys();`

***

### fetchDeveloperApps()

> **fetchDeveloperApps**(`payload`): `Promise`\<[`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:4122](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L4122)

Batch-fetch developer apps (paginated). Distinct from `searchDeveloperApps`
in that the indexer scopes results to the authenticated user's own apps.

#### Parameters

##### payload

[`iGetDeveloperAppsPayload`](/sdk/reference/interfaces/i-get-developer-apps-payload)

#### Returns

`Promise`\<[`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/developerApps/fetch`
- **SDK Function Call**: `await BitBadgesApi.fetchDeveloperApps({ clientId });`

***

### fetchMetadataDirectly()

> **fetchMetadataDirectly**(`payload`): `Promise`\<[`FetchMetadataDirectlySuccessResponse`](/sdk/reference/classes/fetch-metadata-directly-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3059](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3059)

Fetches arbitrary metadata directly from IPFS. This is useful for fetching metadata that is not stored on-chain.

#### Parameters

##### payload

[`iFetchMetadataDirectlyPayload`](/sdk/reference/interfaces/i-fetch-metadata-directly-payload)

#### Returns

`Promise`\<[`FetchMetadataDirectlySuccessResponse`](/sdk/reference/classes/fetch-metadata-directly-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/metadata`
- **SDK Function Call**: `await BitBadgesApi.fetchMetadataDirectly(payload);`
- **CORS**: Restricted to only BitBadges official site.

***

### fetchPromptSkills()

> **fetchPromptSkills**(`payload`): `Promise`\<[`FetchPromptSkillsSuccessResponse`](/sdk/reference/classes/fetch-prompt-skills-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:4014](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L4014)

Batch-fetch prompt skills by ID (1–25 per call).

#### Parameters

##### payload

[`iFetchPromptSkillsPayload`](/sdk/reference/interfaces/i-fetch-prompt-skills-payload)

#### Returns

`Promise`\<[`FetchPromptSkillsSuccessResponse`](/sdk/reference/classes/fetch-prompt-skills-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/promptSkills/fetch`
- **SDK Function Call**: `await BitBadgesApi.fetchPromptSkills({ promptSkillIds: ['a','b'] });`

***

### filterCollectionApprovals()

> **filterCollectionApprovals**(`collectionId`, `payload`): `Promise`\<[`FilterCollectionApprovalsSuccessResponse`](/sdk/reference/classes/filter-collection-approvals-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2752](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2752)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`filterCollectionApprovals`](/sdk/reference/classes/bit-badges-api#filtercollectionapprovals)

***

### filterSuggestions()

> **filterSuggestions**(`collectionId`, `payload?`): `Promise`\<[`FilterSuggestionsSuccessResponse`](/sdk/reference/classes/filter-suggestions-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3359](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3359)

Gets the filter suggestions based on attributes in a collection.

#### Parameters

##### collectionId

`string`

##### payload?

[`iFilterSuggestionsPayload`](/sdk/reference/interfaces/i-filter-suggestions-payload)

#### Returns

`Promise`\<[`FilterSuggestionsSuccessResponse`](/sdk/reference/classes/filter-suggestions-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/collection/:collectionId/filterSuggestions`
- **SDK Function Call**: `await BitBadgesApi.filterSuggestions(collectionId, payload);`

***

### filterTokens()

> **filterTokens**(`collectionId`, `payload`): `Promise`\<[`FilterTokensInCollectionSuccessResponse`](/sdk/reference/classes/filter-tokens-in-collection-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3860](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3860)

Filter tokens in a collection by tags, attributes, categories, or price range.

#### Parameters

##### collectionId

`string`

##### payload

[`iFilterTokensInCollectionPayload`](/sdk/reference/interfaces/i-filter-tokens-in-collection-payload)

#### Returns

`Promise`\<[`FilterTokensInCollectionSuccessResponse`](/sdk/reference/classes/filter-tokens-in-collection-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/collection/:collectionId/filter`
- **SDK Function Call**: `await BitBadgesApi.filterTokens(collectionId, { tags: ['rare'] });`

***

### FilterTokensInCollection()

> **FilterTokensInCollection**(`collectionId`, `payload`): `Promise`\<[`FilterTokensInCollectionSuccessResponse`](/sdk/reference/classes/filter-tokens-in-collection-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1037](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1037)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`FilterTokensInCollection`](/sdk/reference/classes/bit-badges-api#filtertokensincollection)

***

### getAccount()

> **getAccount**(`payload`): `Promise`\<[`GetAccountSuccessResponse`](/sdk/reference/classes/get-account-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:768](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L768)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getAccount`](/sdk/reference/classes/bit-badges-api#getaccount)

***

### getAccounts()

> **getAccounts**(`payload`): `Promise`\<[`GetAccountsSuccessResponse`](/sdk/reference/classes/get-accounts-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:751](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L751)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getAccounts`](/sdk/reference/classes/bit-badges-api#getaccounts)

***

### getActiveAuthorizations()

> **getActiveAuthorizations**(`payload?`): `Promise`\<[`GetActiveAuthorizationsSuccessResponse`](/sdk/reference/classes/get-active-authorizations-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2913](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2913)

Gets all active authorizations for a user.

#### Parameters

##### payload?

[`iGetActiveAuthorizationsPayload`](/sdk/reference/interfaces/i-get-active-authorizations-payload)

#### Returns

`Promise`\<[`GetActiveAuthorizationsSuccessResponse`](/sdk/reference/classes/get-active-authorizations-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/oauth/authorizations`
- **SDK Function Call**: `await BitBadgesApi.getActiveAuthorizations(payload);`
- **Authentication**: Must be signed in.

#### Example

```typescript
const res = await BitBadgesApi.getActiveAuthorizations(payload);
console.log(res);
```

***

### getAllListings()

> **getAllListings**(`collectionId`, `payload`): `Promise`\<[`GetAllListingsSuccessResponse`](/sdk/reference/classes/get-all-listings-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3467](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3467)

Get all open listings for a collection (denom-scoped, lowest-ask first).

#### Parameters

##### collectionId

`string`

##### payload

[`iGetAllListingsPayload`](/sdk/reference/interfaces/i-get-all-listings-payload)

#### Returns

`Promise`\<[`GetAllListingsSuccessResponse`](/sdk/reference/classes/get-all-listings-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/:collectionId/allListings`
- **SDK Function Call**: `await BitBadgesApi.getAllListings(collectionId, { denom: 'ubadge' });`

***

### getApiKeys()

> **getApiKeys**(`payload`): `Promise`\<[`GetApiKeysSuccessResponse`](/sdk/reference/classes/get-api-keys-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3175](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3175)

Gets the API keys.

#### Parameters

##### payload

[`iGetApiKeysPayload`](/sdk/reference/interfaces/i-get-api-keys-payload)

#### Returns

`Promise`\<[`GetApiKeysSuccessResponse`](/sdk/reference/classes/get-api-keys-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/apiKeys/fetch`
- **SDK Function Call**: `await BitBadgesApi.getApiKeys();`

***

### getBalanceByAddress()

> **getBalanceByAddress**(`collectionId`, `address`, `payload?`): `Promise`\<[`GetBalanceByAddressSuccessResponse`](/sdk/reference/classes/get-balance-by-address-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:502](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L502)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getBalanceByAddress`](/sdk/reference/classes/bit-badges-api#getbalancebyaddress)

***

### getBalanceByAddressSpecificToken()

> **getBalanceByAddressSpecificToken**(`collectionId`, `tokenId`, `address`, `payload?`, `options?`): `Promise`\<[`GetBalanceByAddressSpecificTokenSuccessResponse`](/sdk/reference/classes/get-balance-by-address-specific-token-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:524](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L524)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getBalanceByAddressSpecificToken`](/sdk/reference/classes/bit-badges-api#getbalancebyaddressspecifictoken)

***

### getBrowse()

> **getBrowse**(`payload`): `Promise`\<[`GetBrowseSuccessResponse`](/sdk/reference/classes/get-browse-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3384](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3384)

Gets details for a browse / explore page.

#### Parameters

##### payload

[`iGetBrowsePayload`](/sdk/reference/interfaces/i-get-browse-payload)

#### Returns

`Promise`\<[`GetBrowseSuccessResponse`](/sdk/reference/classes/get-browse-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/browse`
- **SDK Function Call**: `await BitBadgesApi.GetBrowse(payload);`

***

### getCandlestickData()

> **getCandlestickData**(`collectionId`, `tokenId`, `payload`): `Promise`\<[`GetCandlestickDataSuccessResponse`](/sdk/reference/classes/get-candlestick-data-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3609](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3609)

Get OHLCV candlestick data for a specific (collection, token, denom).
Aggregates the last 100 trades into 1-hour buckets.

#### Parameters

##### collectionId

`string`

##### tokenId

[`NumberType`](/sdk/reference/type-aliases/number-type)

##### payload

[`iGetCandlestickDataPayload`](/sdk/reference/interfaces/i-get-candlestick-data-payload)

#### Returns

`Promise`\<[`GetCandlestickDataSuccessResponse`](/sdk/reference/classes/get-candlestick-data-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/collection/:collectionId/candlestick/:tokenId`
- **SDK Function Call**: `await BitBadgesApi.getCandlestickData(collectionId, tokenId, { denom: 'ubadge' });`

***

### getClaim()

> **getClaim**(`claimId`, `payload?`): `Promise`\<[`GetClaimSuccessResponse`](/sdk/reference/classes/get-claim-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1933](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1933)

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
const res = await BitBadgesApi.getClaim("123", { ... });
console.log(res);
```

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getClaim`](/sdk/reference/classes/bit-badges-api#getclaim)

***

### getClaimActivityForUser()

> **getClaimActivityForUser**(`address`, `payload`): `Promise`\<[`GetClaimActivityForUserSuccessResponse`](/sdk/reference/classes/get-claim-activity-for-user-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1612](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1612)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getClaimActivityForUser`](/sdk/reference/classes/bit-badges-api#getclaimactivityforuser)

***

### getClaimAttempts()

> **getClaimAttempts**(`claimId`, `payload`): `Promise`\<[`GetClaimAttemptsSuccessResponse`](/sdk/reference/classes/get-claim-attempts-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1455](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1455)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getClaimAttempts`](/sdk/reference/classes/bit-badges-api#getclaimattempts)

***

### getClaimAttemptStatus()

> **getClaimAttemptStatus**(`claimAttemptId`): `Promise`\<[`GetClaimAttemptStatusSuccessResponse`](/sdk/reference/classes/get-claim-attempt-status-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:715](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L715)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getClaimAttemptStatus`](/sdk/reference/classes/bit-badges-api#getclaimattemptstatus)

***

### getClaims()

> **getClaims**(`payload`): `Promise`\<[`GetClaimsSuccessResponse`](/sdk/reference/classes/get-claims-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1057](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1057)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getClaims`](/sdk/reference/classes/bit-badges-api#getclaims)

***

### getCollection()

> **getCollection**(`collectionId`, `payload?`): `Promise`\<[`GetCollectionSuccessResponse`](/sdk/reference/classes/get-collection-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1713](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1713)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getCollection`](/sdk/reference/classes/bit-badges-api#getcollection)

***

### getCollectionAmountTrackerById()

> **getCollectionAmountTrackerById**\<`T`\>(`trackerDetails`): `Promise`\<[`GetCollectionAmountTrackerByIdSuccessResponse`](/sdk/reference/classes/get-collection-amount-tracker-by-id-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2391](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2391)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getCollectionAmountTrackerById`](/sdk/reference/classes/bit-badges-api#getcollectionamounttrackerbyid)

***

### getCollectionAmountTrackers()

> **getCollectionAmountTrackers**(`collectionId`, `payload`): `Promise`\<[`GetCollectionAmountTrackersSuccessResponse`](/sdk/reference/classes/get-collection-amount-trackers-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1836](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1836)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getCollectionAmountTrackers`](/sdk/reference/classes/bit-badges-api#getcollectionamounttrackers)

***

### getCollectionChallengeTrackerById()

> **getCollectionChallengeTrackerById**\<`T`\>(`trackerDetails`): `Promise`\<[`GetCollectionChallengeTrackerByIdSuccessResponse`](/sdk/reference/classes/get-collection-challenge-tracker-by-id-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2413](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2413)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getCollectionChallengeTrackerById`](/sdk/reference/classes/bit-badges-api#getcollectionchallengetrackerbyid)

***

### getCollectionChallengeTrackers()

> **getCollectionChallengeTrackers**(`collectionId`, `payload`): `Promise`\<[`GetCollectionChallengeTrackersSuccessResponse`](/sdk/reference/classes/get-collection-challenge-trackers-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1800](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1800)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getCollectionChallengeTrackers`](/sdk/reference/classes/bit-badges-api#getcollectionchallengetrackers)

***

### getCollectionClaims()

> **getCollectionClaims**(`collectionId`): `Promise`\<[`GetCollectionClaimsSuccessResponse`](/sdk/reference/classes/get-collection-claims-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1908](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1908)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getCollectionClaims`](/sdk/reference/classes/bit-badges-api#getcollectionclaims)

***

### getCollectionListings()

> **getCollectionListings**(`collectionId`, `payload`): `Promise`\<[`GetCollectionListingsSuccessResponse`](/sdk/reference/classes/get-collection-listings-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1872](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1872)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getCollectionListings`](/sdk/reference/classes/bit-badges-api#getcollectionlistings)

***

### getCollectionOffers()

> **getCollectionOffers**(`collectionId`, `payload`): `Promise`\<[`GetCollectionOffersSuccessResponse`](/sdk/reference/classes/get-collection-offers-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3492](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3492)

Get all collection-wide offers (any-token bids on the collection).

#### Parameters

##### collectionId

`string`

##### payload

[`iGetCollectionOffersPayload`](/sdk/reference/interfaces/i-get-collection-offers-payload)

#### Returns

`Promise`\<[`GetCollectionOffersSuccessResponse`](/sdk/reference/classes/get-collection-offers-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/:collectionId/collectionOffers`
- **SDK Function Call**: `await BitBadgesApi.getCollectionOffers(collectionId, { denom: 'ubadge' });`

***

### getCollectionOwners()

> **getCollectionOwners**(`collectionId`, `payload`): `Promise`\<[`GetCollectionOwnersSuccessResponse`](/sdk/reference/classes/get-collection-owners-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1680](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1680)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getCollectionOwners`](/sdk/reference/classes/bit-badges-api#getcollectionowners)

***

### getCollections()

> **getCollections**(`payload`): `Promise`\<[`GetCollectionsSuccessResponse`](/sdk/reference/classes/get-collections-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:468](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L468)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getCollections`](/sdk/reference/classes/bit-badges-api#getcollections)

***

### getCollectionTransferActivity()

> **getCollectionTransferActivity**(`collectionId`, `payload`): `Promise`\<[`GetCollectionTransferActivitySuccessResponse`](/sdk/reference/classes/get-collection-transfer-activity-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1764](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1764)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getCollectionTransferActivity`](/sdk/reference/classes/bit-badges-api#getcollectiontransferactivity)

***

### getCreatorPlugins()

> **getCreatorPlugins**(`payload`): `Promise`\<[`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3034](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3034)

Fetches all plugins created/managed by a specific address.
If authenticated as the creator, sensitive data (pluginSecret) is included.

#### Parameters

##### payload

[`iGetCreatorPluginsPayload`](/sdk/reference/interfaces/i-get-creator-plugins-payload)

#### Returns

`Promise`\<[`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/plugins/creator`
- **SDK Function Call**: `await BitBadgesApi.getCreatorPlugins(payload);`

***

### getDeveloperApp()

> **getDeveloperApp**(`developerAppId`, `payload?`): `Promise`\<[`GetDeveloperAppSuccessResponse`](/sdk/reference/classes/get-developer-app-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2112](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2112)

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
const res = await BitBadgesApi.getDeveloperApp("developerApp123", { ... });
console.log(res);
```

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getDeveloperApp`](/sdk/reference/classes/bit-badges-api#getdeveloperapp)

***

### getDeveloperApps()

> **getDeveloperApps**(`payload`): `Promise`\<[`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2341](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2341)

Get all developer apps for a user.

#### Parameters

##### payload

[`iGetDeveloperAppsPayload`](/sdk/reference/interfaces/i-get-developer-apps-payload)

#### Returns

`Promise`\<[`GetDeveloperAppsSuccessResponse`](/sdk/reference/classes/get-developer-apps-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/developerApps`
- **SDK Function Call**: `await BitBadgesApi.getDeveloperApp(payload);`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getDeveloperApps`](/sdk/reference/classes/bit-badges-api#getdeveloperapps)

***

### getDynamicDataActivity()

> **getDynamicDataActivity**(`payload`): `Promise`\<[`GetDynamicDataActivitySuccessResponse`](/sdk/reference/classes/get-dynamic-data-activity-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1282](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1282)

Get dynamic data store activity

#### Parameters

##### payload

[`iGetDynamicDataActivityPayload`](/sdk/reference/interfaces/i-get-dynamic-data-activity-payload)

#### Returns

`Promise`\<[`GetDynamicDataActivitySuccessResponse`](/sdk/reference/classes/get-dynamic-data-activity-success-response)\>

#### Remarks

- **API Route**: `GET /api/v0/dynamicStores/activity`
- **SDK Function Call**: `await BitBadgesApi.getDynamicDataActivity(payload);`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getDynamicDataActivity`](/sdk/reference/classes/bit-badges-api#getdynamicdataactivity)

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
const res = await BitBadgesApi.getDynamicDataStore("store123", { ... });
console.log(res);
```

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getDynamicDataStore`](/sdk/reference/classes/bit-badges-api#getdynamicdatastore)

***

### getDynamicDataStores()

> **getDynamicDataStores**\<`Q`, `NumberType`\>(`payload`): `Promise`\<[`GetDynamicDataStoresSuccessResponse`](/sdk/reference/classes/get-dynamic-data-stores-success-response)\<`Q`, `T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1302](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1302)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getDynamicDataStores`](/sdk/reference/classes/bit-badges-api#getdynamicdatastores)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getDynamicDataStoreValue`](/sdk/reference/classes/bit-badges-api#getdynamicdatastorevalue)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getDynamicDataStoreValuesPaginated`](/sdk/reference/classes/bit-badges-api#getdynamicdatastorevaluespaginated)

***

### getFilterSuggestions()

> **getFilterSuggestions**(`collectionId`, `payload?`): `Promise`\<[`FilterSuggestionsSuccessResponse`](/sdk/reference/classes/filter-suggestions-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3889](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3889)

Get filter suggestions (tags + attribute values with counts and floor prices)
for a collection. Useful for building filter UIs.

#### Parameters

##### collectionId

`string`

##### payload?

[`iFilterSuggestionsPayload`](/sdk/reference/interfaces/i-filter-suggestions-payload)

#### Returns

`Promise`\<[`FilterSuggestionsSuccessResponse`](/sdk/reference/classes/filter-suggestions-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/collection/:collectionId/filterSuggestions`
- **SDK Function Call**: `await BitBadgesApi.getFilterSuggestions(collectionId);`

***

### getGatedContentForClaim()

> **getGatedContentForClaim**(`claimId`, `payload?`): `Promise`\<[`GetGatedContentForClaimSuccessResponse`](/sdk/reference/classes/get-gated-content-for-claim-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1197](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1197)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getGatedContentForClaim`](/sdk/reference/classes/bit-badges-api#getgatedcontentforclaim)

***

### getIntents()

> **getIntents**(`address?`, `payload?`): `Promise`\<[`GetIntentsSuccessResponse`](/sdk/reference/classes/get-intents-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2725](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2725)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getIntents`](/sdk/reference/classes/bit-badges-api#getintents)

***

### getLiquidityPairPriceHistory()

> **getLiquidityPairPriceHistory**(`payload`): `Promise`\<[`GetLiquidityPairPriceHistorySuccessResponse`](/sdk/reference/classes/get-liquidity-pair-price-history-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3638](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3638)

Get price history for a liquidity-pair asset (one entry per timeframe bucket, last 100).

#### Parameters

##### payload

[`iGetLiquidityPairPriceHistoryPayload`](/sdk/reference/interfaces/i-get-liquidity-pair-price-history-payload)

#### Returns

`Promise`\<[`GetLiquidityPairPriceHistorySuccessResponse`](/sdk/reference/classes/get-liquidity-pair-price-history-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/liquidityPairPriceHistory`
- **SDK Function Call**: `await BitBadgesApi.getLiquidityPairPriceHistory({ asset: 'ubadge', timeframe: '10m' });`

***

### getListingsForTokenId()

> **getListingsForTokenId**(`collectionId`, `tokenId`, `payload`): `Promise`\<[`GetListingsForTokenIdSuccessResponse`](/sdk/reference/classes/get-listings-for-token-id-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3520](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3520)

Get the open listings for a specific token within a collection.

#### Parameters

##### collectionId

`string`

##### tokenId

[`NumberType`](/sdk/reference/type-aliases/number-type)

##### payload

[`iGetListingsForTokenIdPayload`](/sdk/reference/interfaces/i-get-listings-for-token-id-payload)

#### Returns

`Promise`\<[`GetListingsForTokenIdSuccessResponse`](/sdk/reference/classes/get-listings-for-token-id-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/:collectionId/listings/:tokenId`
- **SDK Function Call**: `await BitBadgesApi.getListingsForTokenId(collectionId, tokenId, { denom: 'ubadge' });`

***

### getOffersForTokenId()

> **getOffersForTokenId**(`collectionId`, `tokenId`, `payload`): `Promise`\<[`GetOffersForTokenIdSuccessResponse`](/sdk/reference/classes/get-offers-for-token-id-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3549](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3549)

Get the open offers (bids) for a specific token within a collection.

#### Parameters

##### collectionId

`string`

##### tokenId

[`NumberType`](/sdk/reference/type-aliases/number-type)

##### payload

[`iGetOffersForTokenIdPayload`](/sdk/reference/interfaces/i-get-offers-for-token-id-payload)

#### Returns

`Promise`\<[`GetOffersForTokenIdSuccessResponse`](/sdk/reference/classes/get-offers-for-token-id-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/:collectionId/offers/:tokenId`
- **SDK Function Call**: `await BitBadgesApi.getOffersForTokenId(collectionId, tokenId, { denom: 'ubadge' });`

***

### getOnChainDynamicStore()

> **getOnChainDynamicStore**(`storeId`): `Promise`\<[`GetOnChainDynamicStoreSuccessResponse`](/sdk/reference/classes/get-on-chain-dynamic-store-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2786](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2786)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getOnChainDynamicStore`](/sdk/reference/classes/bit-badges-api#getonchaindynamicstore)

***

### getOnChainDynamicStoresByCreator()

> **getOnChainDynamicStoresByCreator**(`address`): `Promise`\<[`GetOnChainDynamicStoresByCreatorSuccessResponse`](/sdk/reference/classes/get-on-chain-dynamic-stores-by-creator-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2811](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2811)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getOnChainDynamicStoresByCreator`](/sdk/reference/classes/bit-badges-api#getonchaindynamicstoresbycreator)

***

### getOnChainDynamicStoreValue()

> **getOnChainDynamicStoreValue**(`storeId`, `address`): `Promise`\<[`GetOnChainDynamicStoreValueSuccessResponse`](/sdk/reference/classes/get-on-chain-dynamic-store-value-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2836](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2836)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getOnChainDynamicStoreValue`](/sdk/reference/classes/bit-badges-api#getonchaindynamicstorevalue)

***

### getOnChainDynamicStoreValuesPaginated()

> **getOnChainDynamicStoreValuesPaginated**(`storeId`, `payload?`): `Promise`\<[`GetOnChainDynamicStoreValuesPaginatedSuccessResponse`](/sdk/reference/classes/get-on-chain-dynamic-store-values-paginated-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2864](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2864)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getOnChainDynamicStoreValuesPaginated`](/sdk/reference/classes/bit-badges-api#getonchaindynamicstorevaluespaginated)

***

### getOrderbookDepth()

> **getOrderbookDepth**(`collectionId`, `tokenId`, `payload`): `Promise`\<[`GetOrderbookDepthSuccessResponse`](/sdk/reference/classes/get-orderbook-depth-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3579](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3579)

Get aggregated bid/ask depth for a single (collection, tokenId, denom).
Returns an empty orderbook if no doc exists yet for that key.

#### Parameters

##### collectionId

`string`

##### tokenId

[`NumberType`](/sdk/reference/type-aliases/number-type)

##### payload

[`iGetOrderbookDepthPayload`](/sdk/reference/interfaces/i-get-orderbook-depth-payload)

#### Returns

`Promise`\<[`GetOrderbookDepthSuccessResponse`](/sdk/reference/classes/get-orderbook-depth-success-response)\>

#### Remarks

- **API Route**: `GET /api/v0/collection/:collectionId/orderbook/:tokenId`
- **SDK Function Call**: `await BitBadgesApi.getOrderbookDepth(collectionId, tokenId, { denom: 'ubadge' });`

***

### getOwners()

> **getOwners**(`collectionId`, `tokenId`, `payload`): `Promise`\<[`GetOwnersSuccessResponse`](/sdk/reference/classes/get-owners-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:485](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L485)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getOwners`](/sdk/reference/classes/bit-badges-api#getowners)

***

### getPlugin()

> **getPlugin**(`pluginId`, `payload?`): `Promise`\<[`GetPluginSuccessResponse`](/sdk/reference/classes/get-plugin-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2055](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2055)

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
const res = await BitBadgesApi.getPlugin("plugin123", { ... });
console.log(res);
```

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getPlugin`](/sdk/reference/classes/bit-badges-api#getplugin)

***

### getPluginErrors()

> **getPluginErrors**(`payload`): `Promise`\<[`GetPluginErrorsSuccessResponse`](/sdk/reference/classes/get-plugin-errors-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3238](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3238)

#### Parameters

##### payload

[`iGetPluginErrorsPayload`](/sdk/reference/interfaces/i-get-plugin-errors-payload)

#### Returns

`Promise`\<[`GetPluginErrorsSuccessResponse`](/sdk/reference/classes/get-plugin-errors-success-response)\>

***

### getPlugins()

> **getPlugins**(`payload`): `Promise`\<[`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2137](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2137)

Get all developer apps for a user.

#### Parameters

##### payload

[`iGetPluginsPayload`](/sdk/reference/interfaces/i-get-plugins-payload)

#### Returns

`Promise`\<[`GetPluginsSuccessResponse`](/sdk/reference/classes/get-plugins-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/plugins/fetch`
- **SDK Function Call**: `await BitBadgesApi.getPlugins(payload);`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getPlugins`](/sdk/reference/classes/bit-badges-api#getplugins)

***

### getPointsActivityForUser()

> **getPointsActivityForUser**(`address`, `payload`): `Promise`\<[`GetPointsActivityForUserSuccessResponse`](/sdk/reference/classes/get-points-activity-for-user-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1646](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1646)

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
const res = await BitBadgesApi.getPointsActivityForUser("bb1...", { ... });
console.log(res);
```

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getPointsActivityForUser`](/sdk/reference/classes/bit-badges-api#getpointsactivityforuser)

***

### getPoolsBatch()

> **getPoolsBatch**(`payload`): `Promise`\<[`GetPoolsBatchSuccessResponse`](/sdk/reference/classes/get-pools-batch-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3665](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3665)

Fetch multiple liquidity pools by ID in a single request (max 100).

#### Parameters

##### payload

[`iGetPoolsBatchPayload`](/sdk/reference/interfaces/i-get-pools-batch-payload)

#### Returns

`Promise`\<[`GetPoolsBatchSuccessResponse`](/sdk/reference/classes/get-pools-batch-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/pools/batch`
- **SDK Function Call**: `await BitBadgesApi.getPoolsBatch({ poolIds: ['1','2','3'] });`

***

### getPredictionDetail()

> **getPredictionDetail**(`collectionId`, `payload?`): `Promise`\<[`GetPredictionDetailSuccessResponse`](/sdk/reference/classes/get-prediction-detail-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3801](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3801)

Get detail (parsed + raw approvals) for a single prediction market.

#### Parameters

##### collectionId

`string`

##### payload?

[`iGetPredictionDetailPayload`](/sdk/reference/interfaces/i-get-prediction-detail-payload)

#### Returns

`Promise`\<[`GetPredictionDetailSuccessResponse`](/sdk/reference/classes/get-prediction-detail-success-response)\>

#### Remarks

- **API Route**: `GET /api/v0/predictions/:collectionId`
- **SDK Function Call**: `await BitBadgesApi.getPredictionDetail(collectionId);`

***

### getPredictionPrices()

> **getPredictionPrices**(`collectionId`, `payload?`): `Promise`\<[`GetPredictionPricesSuccessResponse`](/sdk/reference/classes/get-prediction-prices-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3828](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3828)

Get price-history for a prediction market's YES/NO tokens.

#### Parameters

##### collectionId

`string`

##### payload?

[`iGetPredictionPricesPayload`](/sdk/reference/interfaces/i-get-prediction-prices-payload)

#### Returns

`Promise`\<[`GetPredictionPricesSuccessResponse`](/sdk/reference/classes/get-prediction-prices-success-response)\>

#### Remarks

- **API Route**: `GET /api/v0/predictions/:collectionId/prices`
- **SDK Function Call**: `await BitBadgesApi.getPredictionPrices(collectionId, { timeframe: '1h' });`

***

### getPredictions()

> **getPredictions**(`payload?`): `Promise`\<[`GetPredictionsSuccessResponse`](/sdk/reference/classes/get-predictions-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3779](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3779)

Browse all active prediction markets (returns up to 50 newest collections
tagged with the `Prediction Market` standard).

#### Parameters

##### payload?

[`iGetPredictionsPayload`](/sdk/reference/interfaces/i-get-predictions-payload)

#### Returns

`Promise`\<[`GetPredictionsSuccessResponse`](/sdk/reference/classes/get-predictions-success-response)\>

#### Remarks

- **API Route**: `GET /api/v0/predictions`
- **SDK Function Call**: `await BitBadgesApi.getPredictions();`

***

### getPromptSkill()

> **getPromptSkill**(`promptSkillId`, `payload?`): `Promise`\<[`GetPromptSkillSuccessResponse`](/sdk/reference/classes/get-prompt-skill-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3965](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3965)

Get a single prompt skill by ID. Only returns approved+published skills
unless the caller is the owner (which requires Full Access auth).

#### Parameters

##### promptSkillId

`string`

##### payload?

[`iGetPromptSkillPayload`](/sdk/reference/interfaces/i-get-prompt-skill-payload)

#### Returns

`Promise`\<[`GetPromptSkillSuccessResponse`](/sdk/reference/classes/get-prompt-skill-success-response)\>

#### Remarks

- **API Route**: `GET /api/v0/promptSkill/:promptSkillId`
- **SDK Function Call**: `await BitBadgesApi.getPromptSkill(promptSkillId);`

***

### getRefreshStatus()

> **getRefreshStatus**(`collectionId`): `Promise`\<[`RefreshStatusSuccessResponse`](/sdk/reference/classes/refresh-status-success-response)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1026](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1026)

Gets the refresh status for a collection. Used to track if any errors occur during a refresh, or if it is in the queue or not.

#### Parameters

##### collectionId

`string`

#### Returns

`Promise`\<[`RefreshStatusSuccessResponse`](/sdk/reference/classes/refresh-status-success-response)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/:collectionId/refreshStatus`
- **SDK Function Call**: `await BitBadgesApi.getRefreshStatus(payload);`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getRefreshStatus`](/sdk/reference/classes/bit-badges-api#getrefreshstatus)

***

### getReservedClaimCodes()

> **getReservedClaimCodes**(`claimId`, `address`, `payload`): `Promise`\<[`GetReservedClaimCodesSuccessResponse`](/sdk/reference/classes/get-reserved-claim-codes-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:676](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L676)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getReservedClaimCodes`](/sdk/reference/classes/bit-badges-api#getreservedclaimcodes)

***

### getSearchResults()

> **getSearchResults**(`searchValue`, `payload?`): `Promise`\<[`GetSearchSuccessResponse`](/sdk/reference/classes/get-search-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:437](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L437)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getSearchResults`](/sdk/reference/classes/bit-badges-api#getsearchresults)

***

### getSignInChallenge()

> **getSignInChallenge**(`payload`): `Promise`\<[`GetSignInChallengeSuccessResponse`](/sdk/reference/classes/get-sign-in-challenge-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3282](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3282)

Gets the sign in challenge to be signed for authentication. The returned is the message to be signed by the user.

#### Parameters

##### payload

[`iGetSignInChallengePayload`](/sdk/reference/interfaces/i-get-sign-in-challenge-payload)

#### Returns

`Promise`\<[`GetSignInChallengeSuccessResponse`](/sdk/reference/classes/get-sign-in-challenge-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/auth/getChallenge`
- **SDK Function Call**: `await BitBadgesApi.getSignInChallenge(payload);`
- **Tutorial**: See Authentication tutorial on the official docs.

#### Example

```typescript
const res = await BitBadgesApi.getSignInChallenge(payload);
console.log(res);
```

***

### getSIWBBRequestsForDeveloperApp()

> **getSIWBBRequestsForDeveloperApp**(`payload`): `Promise`\<[`GetSIWBBRequestsForDeveloperAppSuccessResponse`](/sdk/reference/classes/get-siwbb-requests-for-developer-app-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:921](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L921)

Gets the SIWBB requests for a specific developer app.

#### Parameters

##### payload

[`iGetSIWBBRequestsForDeveloperAppPayload`](/sdk/reference/interfaces/i-get-siwbb-requests-for-developer-app-payload)

#### Returns

`Promise`\<[`GetSIWBBRequestsForDeveloperAppSuccessResponse`](/sdk/reference/classes/get-siwbb-requests-for-developer-app-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/developerApps/siwbbRequests`
- **SDK Function Call**: `await BitBadgesApi.getSIWBBRequestsForDeveloperApp(payload);`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getSIWBBRequestsForDeveloperApp`](/sdk/reference/classes/bit-badges-api#getsiwbbrequestsfordeveloperapp)

***

### getSiwbbRequestsForUser()

> **getSiwbbRequestsForUser**(`address`, `payload`): `Promise`\<[`GetSiwbbRequestsForUserSuccessResponse`](/sdk/reference/classes/get-siwbb-requests-for-user-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1505](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1505)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getSiwbbRequestsForUser`](/sdk/reference/classes/bit-badges-api#getsiwbbrequestsforuser)

***

### ~~getSkipAssets()~~

> **getSkipAssets**(`payload?`): `Promise`\<[`GetSkipAssetsSuccessResponse`](/sdk/reference/classes/get-skip-assets-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2651](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2651)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getSkipAssets`](/sdk/reference/classes/bit-badges-api#getskipassets)

***

### ~~getSkipBalances()~~

> **getSkipBalances**(`payload`): `Promise`\<[`GetSkipBalancesSuccessResponse`](/sdk/reference/classes/get-skip-balances-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2681](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2681)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getSkipBalances`](/sdk/reference/classes/bit-badges-api#getskipbalances)

***

### ~~getSkipChains()~~

> **getSkipChains**(`payload?`): `Promise`\<[`GetSkipChainsSuccessResponse`](/sdk/reference/classes/get-skip-chains-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2667](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2667)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getSkipChains`](/sdk/reference/classes/bit-badges-api#getskipchains)

***

### ~~getSkipTxStatus()~~

> **getSkipTxStatus**(`payload`): `Promise`\<[`GetSkipTxStatusSuccessResponse`](/sdk/reference/classes/get-skip-tx-status-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2710](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2710)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getSkipTxStatus`](/sdk/reference/classes/bit-badges-api#getskiptxstatus)

***

### getStatus()

> **getStatus**(`payload?`): `Promise`\<[`GetStatusSuccessResponse`](/sdk/reference/classes/get-status-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:407](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L407)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getStatus`](/sdk/reference/classes/bit-badges-api#getstatus)

***

### getSwapActivities()

> **getSwapActivities**(`payload?`): `Promise`\<[`GetSwapActivitiesSuccessResponse`](/sdk/reference/classes/get-swap-activities-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2441](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2441)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getSwapActivities`](/sdk/reference/classes/bit-badges-api#getswapactivities)

***

### getSwapAssets()

> **getSwapAssets**(`payload?`): `Promise`\<[`GetSwapAssetsSuccessResponse`](/sdk/reference/classes/get-swap-assets-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2468](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2468)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getSwapAssets`](/sdk/reference/classes/bit-badges-api#getswapassets)

***

### getSwapBalances()

> **getSwapBalances**(`payload`): `Promise`\<[`GetSwapBalancesSuccessResponse`](/sdk/reference/classes/get-swap-balances-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2520](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2520)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getSwapBalances`](/sdk/reference/classes/bit-badges-api#getswapbalances)

***

### getSwapChains()

> **getSwapChains**(`payload?`): `Promise`\<[`GetSwapChainsSuccessResponse`](/sdk/reference/classes/get-swap-chains-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2494](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2494)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getSwapChains`](/sdk/reference/classes/bit-badges-api#getswapchains)

***

### getSwapStatus()

> **getSwapStatus**(`payload`): `Promise`\<[`GetSwapStatusSuccessResponse`](/sdk/reference/classes/get-swap-status-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2611](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2611)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getSwapStatus`](/sdk/reference/classes/bit-badges-api#getswapstatus)

***

### getTokenActivity()

> **getTokenActivity**(`collectionId`, `tokenId`, `payload`): `Promise`\<[`GetTokenActivitySuccessResponse`](/sdk/reference/classes/get-token-activity-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:560](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L560)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getTokenActivity`](/sdk/reference/classes/bit-badges-api#gettokenactivity)

***

### getTokenMetadata()

> **getTokenMetadata**(`collectionId`, `tokenId`): `Promise`\<[`GetTokenMetadataSuccessResponse`](/sdk/reference/classes/get-token-metadata-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1739](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1739)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getTokenMetadata`](/sdk/reference/classes/bit-badges-api#gettokenmetadata)

***

### getTokensFromFaucet()

> **getTokensFromFaucet**(`payload?`): `Promise`\<[`GetTokensFromFaucetSuccessResponse`](/sdk/reference/classes/get-tokens-from-faucet-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3085](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3085)

Gets the tokens from the faucet. This will only work on betanet.

#### Parameters

##### payload?

[`iGetTokensFromFaucetPayload`](/sdk/reference/interfaces/i-get-tokens-from-faucet-payload)

#### Returns

`Promise`\<[`GetTokensFromFaucetSuccessResponse`](/sdk/reference/classes/get-tokens-from-faucet-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/faucet`
- **SDK Function Call**: `await BitBadgesApi.getTokensFromFaucet(payload);`
- **Authentication**: Must be signed in.

***

### getTokensViewForUser()

> **getTokensViewForUser**(`address`, `payload`): `Promise`\<[`GetTokensViewForUserSuccessResponse`](/sdk/reference/classes/get-tokens-view-for-user-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1578](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1578)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getTokensViewForUser`](/sdk/reference/classes/bit-badges-api#gettokensviewforuser)

***

### getTransferActivityForUser()

> **getTransferActivityForUser**(`address`, `payload`): `Promise`\<[`GetTransferActivityForUserSuccessResponse`](/sdk/reference/classes/get-transfer-activity-for-user-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1541](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1541)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getTransferActivityForUser`](/sdk/reference/classes/bit-badges-api#gettransferactivityforuser)

***

### getUserBalances()

> **getUserBalances**(`address`, `payload?`): `Promise`\<[`GetUserBalancesSuccessResponse`](/sdk/reference/classes/get-user-balances-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:790](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L790)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getUserBalances`](/sdk/reference/classes/bit-badges-api#getuserbalances)

***

### getUtilityPage()

> **getUtilityPage**(`utilityPageId`, `payload?`): `Promise`\<[`GetUtilityPageSuccessResponse`](/sdk/reference/classes/get-utility-page-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2081](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2081)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getUtilityPage`](/sdk/reference/classes/bit-badges-api#getutilitypage)

***

### getUtilityPages()

> **getUtilityPages**(`payload`): `Promise`\<[`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1356](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1356)

Gets utility pages.

#### Parameters

##### payload

[`iGetUtilityPagesPayload`](/sdk/reference/interfaces/i-get-utility-pages-payload)

#### Returns

`Promise`\<[`GetUtilityPagesSuccessResponse`](/sdk/reference/classes/get-utility-pages-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `POST /api/v0/utilityPages/fetch`
- **SDK Function Call**: `await BitBadgesApi.getUtilityPages(payload);`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`getUtilityPages`](/sdk/reference/classes/bit-badges-api#getutilitypages)

***

### getVoteByProposalId()

> **getVoteByProposalId**(`proposalId`, `payload?`): `Promise`\<[`GetVoteByProposalIdSuccessResponse`](/sdk/reference/classes/get-vote-by-proposal-id-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3695](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3695)

Get a single vote document by proposal ID. Totals are recalculated against
the current voter set (filters out voters who were removed).

#### Parameters

##### proposalId

`string`

##### payload?

[`iGetVoteByProposalIdPayload`](/sdk/reference/interfaces/i-get-vote-by-proposal-id-payload)

#### Returns

`Promise`\<[`GetVoteByProposalIdSuccessResponse`](/sdk/reference/classes/get-vote-by-proposal-id-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/vote/:proposalId`
- **SDK Function Call**: `await BitBadgesApi.getVoteByProposalId(proposalId);`

***

### getVotesByCollection()

> **getVotesByCollection**(`collectionId`, `payload?`): `Promise`\<[`GetVotesByCollectionSuccessResponse`](/sdk/reference/classes/get-votes-by-collection-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3722](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3722)

Get all votes scoped to a collection, paginated.

#### Parameters

##### collectionId

`string`

##### payload?

[`iGetVotesByCollectionPayload`](/sdk/reference/interfaces/i-get-votes-by-collection-payload)

#### Returns

`Promise`\<[`GetVotesByCollectionSuccessResponse`](/sdk/reference/classes/get-votes-by-collection-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/collection/:collectionId/votes`
- **SDK Function Call**: `await BitBadgesApi.getVotesByCollection(collectionId, { bookmark });`

***

### getVotesByVoter()

> **getVotesByVoter**(`voter`, `payload?`): `Promise`\<[`GetVotesByVoterSuccessResponse`](/sdk/reference/classes/get-votes-by-voter-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3750](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3750)

Get all votes cast by a specific voter address, paginated.

#### Parameters

##### voter

`string`

##### payload?

[`iGetVotesByVoterPayload`](/sdk/reference/interfaces/i-get-votes-by-voter-payload)

#### Returns

`Promise`\<[`GetVotesByVoterSuccessResponse`](/sdk/reference/classes/get-votes-by-voter-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/voter/:voter/votes`
- **SDK Function Call**: `await BitBadgesApi.getVotesByVoter(voterAddress, { bookmark });`

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

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`handleApiError`](/sdk/reference/classes/bit-badges-api#handleapierror)

***

### performBatchStoreAction()

> **performBatchStoreAction**(`payload`): `Promise`\<[`BatchStoreActionSuccessResponse`](/sdk/reference/classes/batch-store-action-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1253](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1253)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`performBatchStoreAction`](/sdk/reference/classes/bit-badges-api#performbatchstoreaction)

***

### performStoreAction()

> **performStoreAction**(`payload`): `Promise`\<[`PerformStoreActionSuccessResponse`](/sdk/reference/classes/perform-store-action-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1226](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1226)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`performStoreAction`](/sdk/reference/classes/bit-badges-api#performstoreaction)

***

### refreshMetadata()

> **refreshMetadata**(`collectionId`, `payload?`): `Promise`\<[`RefreshMetadataSuccessResponse`](/sdk/reference/classes/refresh-metadata-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:583](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L583)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`refreshMetadata`](/sdk/reference/classes/bit-badges-api#refreshmetadata)

***

### revokeOauthAuthorization()

> **revokeOauthAuthorization**(`payload`): `Promise`\<[`OauthRevokeSuccessResponse`](/sdk/reference/classes/oauth-revoke-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1174](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1174)

Revokes an access token for a user.

#### Parameters

##### payload

[`iOauthRevokePayload`](/sdk/reference/interfaces/i-oauth-revoke-payload)

#### Returns

`Promise`\<[`OauthRevokeSuccessResponse`](/sdk/reference/classes/oauth-revoke-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/siwbb/token/revoke`
- **SDK Function Call**: `await BitBadgesApi.oauthRevoke(payload);`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`revokeOauthAuthorization`](/sdk/reference/classes/bit-badges-api#revokeoauthauthorization)

***

### rotateApiKey()

> **rotateApiKey**(`payload`): `Promise`\<[`RotateApiKeySuccessResponse`](/sdk/reference/classes/rotate-api-key-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3209](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3209)

Rotates an API key.

#### Parameters

##### payload

[`iRotateApiKeyPayload`](/sdk/reference/interfaces/i-rotate-api-key-payload)

#### Returns

`Promise`\<[`RotateApiKeySuccessResponse`](/sdk/reference/classes/rotate-api-key-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/apiKeys/rotate`
- **SDK Function Call**: `await BitBadgesApi.rotateApiKey(payload);`

***

### rotateSIWBBRequest()

> **rotateSIWBBRequest**(`payload`): `Promise`\<[`RotateSIWBBRequestSuccessResponse`](/sdk/reference/classes/rotate-siwbb-request-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:975](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L975)

Rotates a SIWBB request.

#### Parameters

##### payload

[`iRotateSIWBBRequestPayload`](/sdk/reference/interfaces/i-rotate-siwbb-request-payload)

#### Returns

`Promise`\<[`RotateSIWBBRequestSuccessResponse`](/sdk/reference/classes/rotate-siwbb-request-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/siwbbRequest/rotate`
- **SDK Function Call**: `await BitBadgesApi.rotateSIWBBRequest(payload);`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`rotateSIWBBRequest`](/sdk/reference/classes/bit-badges-api#rotatesiwbbrequest)

***

### scheduleTokenRefresh()

> **scheduleTokenRefresh**(`payload`): `Promise`\<[`ScheduleTokenRefreshSuccessResponse`](/sdk/reference/classes/schedule-token-refresh-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3255](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3255)

#### Parameters

##### payload

[`iScheduleTokenRefreshPayload`](/sdk/reference/interfaces/i-schedule-token-refresh-payload)

#### Returns

`Promise`\<[`ScheduleTokenRefreshSuccessResponse`](/sdk/reference/classes/schedule-token-refresh-success-response)\>

***

### searchClaims()

> **searchClaims**(`payload`): `Promise`\<[`SearchClaimsSuccessResponse`](/sdk/reference/classes/search-claims-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1079](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1079)

Searches for claims.

#### Parameters

##### payload

[`iSearchClaimsPayload`](/sdk/reference/interfaces/i-search-claims-payload)

#### Returns

`Promise`\<[`SearchClaimsSuccessResponse`](/sdk/reference/classes/search-claims-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/claims/search`
- **SDK Function Call**: `await BitBadgesApi.searchClaims(payload);`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`searchClaims`](/sdk/reference/classes/bit-badges-api#searchclaims)

***

### searchDeveloperApps()

> **searchDeveloperApps**(`payload`): `Promise`\<[`SearchDeveloperAppsSuccessResponse`](/sdk/reference/classes/search-developer-apps-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2366](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2366)

Searches for developer apps.

#### Parameters

##### payload

[`iSearchDeveloperAppsPayload`](/sdk/reference/interfaces/i-search-developer-apps-payload)

#### Returns

`Promise`\<[`SearchDeveloperAppsSuccessResponse`](/sdk/reference/classes/search-developer-apps-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/developerApps/search`
- **SDK Function Call**: `await BitBadgesApi.searchDeveloperApps(payload);`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`searchDeveloperApps`](/sdk/reference/classes/bit-badges-api#searchdeveloperapps)

***

### searchDynamicDataStores()

> **searchDynamicDataStores**\<`Q`\>(`payload`): `Promise`\<[`SearchDynamicDataStoresSuccessResponse`](/sdk/reference/classes/search-dynamic-data-stores-success-response)\<`Q`, `T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1329](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1329)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`searchDynamicDataStores`](/sdk/reference/classes/bit-badges-api#searchdynamicdatastores)

***

### searchPlugins()

> **searchPlugins**(`payload`): `Promise`\<[`SearchPluginsSuccessResponse`](/sdk/reference/classes/search-plugins-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3009](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3009)

Searches for plugins.

#### Parameters

##### payload

[`iSearchPluginsPayload`](/sdk/reference/interfaces/i-search-plugins-payload)

#### Returns

`Promise`\<[`SearchPluginsSuccessResponse`](/sdk/reference/classes/search-plugins-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/plugins/search`
- **SDK Function Call**: `await BitBadgesApi.searchPlugins(payload);`

***

### searchPromptSkills()

> **searchPromptSkills**(`payload?`): `Promise`\<[`SearchPromptSkillsSuccessResponse`](/sdk/reference/classes/search-prompt-skills-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3989](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3989)

Search prompt skills by name, category, or creator address.

#### Parameters

##### payload?

[`iSearchPromptSkillsPayload`](/sdk/reference/interfaces/i-search-prompt-skills-payload)

#### Returns

`Promise`\<[`SearchPromptSkillsSuccessResponse`](/sdk/reference/classes/search-prompt-skills-success-response)\>

#### Remarks

- **API Route**: `GET /api/v0/promptSkills/search`
- **SDK Function Call**: `await BitBadgesApi.searchPromptSkills({ searchValue: 'audit' });`

***

### searchUtilityPages()

> **searchUtilityPages**(`payload`): `Promise`\<[`SearchUtilityPagesSuccessResponse`](/sdk/reference/classes/search-utility-pages-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1376](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1376)

Searches for utility pages.

#### Parameters

##### payload

[`iSearchUtilityPagesPayload`](/sdk/reference/interfaces/i-search-utility-pages-payload)

#### Returns

`Promise`\<[`SearchUtilityPagesSuccessResponse`](/sdk/reference/classes/search-utility-pages-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `GET /api/v0/utilityPages/search`
- **SDK Function Call**: `await BitBadgesApi.searchUtilityPages(payload);`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`searchUtilityPages`](/sdk/reference/classes/bit-badges-api#searchutilitypages)

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

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`setAccessToken`](/sdk/reference/classes/bit-badges-api#setaccesstoken)

***

### signOut()

> **signOut**(`payload?`): `Promise`\<[`SignOutSuccessResponse`](/sdk/reference/classes/sign-out-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3337](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3337)

Signs the user out.

#### Parameters

##### payload?

[`iSignOutPayload`](/sdk/reference/interfaces/i-sign-out-payload)

#### Returns

`Promise`\<[`SignOutSuccessResponse`](/sdk/reference/classes/sign-out-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/auth/logout`
- **SDK Function Call**: `await BitBadgesApi.signOut(payload);`
- **Tutorial**: See Authentication tutorial on the official docs.

***

### simulateClaim()

> **simulateClaim**(`claimId`, `address`, `payload`): `Promise`\<[`SimulateClaimSuccessResponse`](/sdk/reference/classes/simulate-claim-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:640](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L640)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`simulateClaim`](/sdk/reference/classes/bit-badges-api#simulateclaim)

***

### simulateTx()

> **simulateTx**(`payload`): `Promise`\<[`SimulateTxSuccessResponse`](/sdk/reference/classes/simulate-tx-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:870](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L870)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`simulateTx`](/sdk/reference/classes/bit-badges-api#simulatetx)

***

### simulateTxEvm()

> **simulateTxEvm**(`payload`): `Promise`\<[`SimulateTxEvmSuccessResponse`](/sdk/reference/classes/simulate-tx-evm-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3935](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3935)

Simulate an EVM transaction (estimate gas + revert-check) via eth_call.
Includes special handling for BitBadges precompile addresses.

#### Parameters

##### payload

[`iSimulateTxEvmPayload`](/sdk/reference/interfaces/i-simulate-tx-evm-payload)

#### Returns

`Promise`\<[`SimulateTxEvmSuccessResponse`](/sdk/reference/classes/simulate-tx-evm-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/simulate-evm`
- **SDK Function Call**: `await BitBadgesApi.simulateTxEvm({ mode: 'evm', evmTx: { to, data, signer_address } });`

***

### ~~trackSkipTx()~~

> **trackSkipTx**(`payload`): `Promise`\<[`TrackSkipTxSuccessResponse`](/sdk/reference/classes/track-skip-tx-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2696](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2696)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`trackSkipTx`](/sdk/reference/classes/bit-badges-api#trackskiptx)

***

### trackSwap()

> **trackSwap**(`payload`): `Promise`\<[`TrackSwapSuccessResponse`](/sdk/reference/classes/track-swap-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2585](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2585)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`trackSwap`](/sdk/reference/classes/bit-badges-api#trackswap)

***

### unsetAccessToken()

> **unsetAccessToken**(): `void`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:90](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L90)

#### Returns

`void`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`unsetAccessToken`](/sdk/reference/classes/bit-badges-api#unsetaccesstoken)

***

### updateAccountInfo()

> **updateAccountInfo**(`payload`): `Promise`\<[`UpdateAccountInfoSuccessResponse`](/sdk/reference/classes/update-account-info-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3413](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3413)

Updates the profile / account information for a user. We will only update the provided fields.

#### Parameters

##### payload

[`iUpdateAccountInfoPayload`](/sdk/reference/interfaces/i-update-account-info-payload)

#### Returns

`Promise`\<[`UpdateAccountInfoSuccessResponse`](/sdk/reference/classes/update-account-info-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/user/updateAccount`
- **SDK Function Call**: `await BitBadgesApi.updateAccountInfo(payload);`
- **Authentication**: Must be signed in.

#### Example

```typescript
const res = await BitBadgesApi.updateAccountInfo(payload);
console.log(res);
```

***

### updateClaims()

> **updateClaims**(`payload`): `Promise`\<[`UpdateClaimSuccessResponse`](/sdk/reference/classes/update-claim-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1152](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1152)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`updateClaims`](/sdk/reference/classes/bit-badges-api#updateclaims)

***

### updateDeveloperApp()

> **updateDeveloperApp**(`payload`): `Promise`\<[`UpdateDeveloperAppSuccessResponse`](/sdk/reference/classes/update-developer-app-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2237](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2237)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`updateDeveloperApp`](/sdk/reference/classes/bit-badges-api#updatedeveloperapp)

***

### updateDynamicDataStore()

> **updateDynamicDataStore**\<`Q`, `T`\>(`payload`): `Promise`\<[`UpdateDynamicDataStoreSuccessResponse`](/sdk/reference/classes/update-dynamic-data-store-success-response)\<`Q`, `T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2289](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2289)

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

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`updateDynamicDataStore`](/sdk/reference/classes/bit-badges-api#updatedynamicdatastore)

***

### updatePlugin()

> **updatePlugin**(`payload`): `Promise`\<[`UpdatePluginSuccessResponse`](/sdk/reference/classes/update-plugin-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2962](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2962)

Updates a plugin.

#### Parameters

##### payload

[`iUpdatePluginPayload`](/sdk/reference/interfaces/i-update-plugin-payload)

#### Returns

`Promise`\<[`UpdatePluginSuccessResponse`](/sdk/reference/classes/update-plugin-success-response)\>

#### Remarks

- **API Route**: `PUT /api/v0/plugins`
- **SDK Function Call**: `await BitBadgesApi.updatePlugin(payload);`
- **Authentication**: Must be signed in.

***

### updatePromptSkill()

> **updatePromptSkill**(`payload`): `Promise`\<[`UpdatePromptSkillSuccessResponse`](/sdk/reference/classes/update-prompt-skill-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:4066](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L4066)

Update an existing prompt skill (owner-only).

#### Parameters

##### payload

[`iUpdatePromptSkillPayload`](/sdk/reference/interfaces/i-update-prompt-skill-payload)

#### Returns

`Promise`\<[`UpdatePromptSkillSuccessResponse`](/sdk/reference/classes/update-prompt-skill-success-response)\>

#### Remarks

- **API Route**: `PUT /api/v0/promptSkills`
- **Authentication**: Full Access scope required.
- **SDK Function Call**: `await BitBadgesApi.updatePromptSkill(payload);`

***

### updateUserSeenActivity()

> **updateUserSeenActivity**(): `Promise`\<[`UpdateAccountInfoSuccessResponse`](/sdk/reference/classes/update-account-info-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2895](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2895)

Updates the user's seen activity.

#### Returns

`Promise`\<[`UpdateAccountInfoSuccessResponse`](/sdk/reference/classes/update-account-info-success-response)\>

***

### updateUtilityPage()

> **updateUtilityPage**(`payload`): `Promise`\<[`UpdateUtilityPageSuccessResponse`](/sdk/reference/classes/update-utility-page-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:1416](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L1416)

Updates a utility page.

#### Parameters

##### payload

[`iUpdateUtilityPagePayload`](/sdk/reference/interfaces/i-update-utility-page-payload)\<`T`\>

#### Returns

`Promise`\<[`UpdateUtilityPageSuccessResponse`](/sdk/reference/classes/update-utility-page-success-response)\<`T`\>\>

#### Remarks

- **API Route**: `PUT /api/v0/utilityPages`
- **SDK Function Call**: `await BitBadgesApi.updateUtilityPage(payload);`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`updateUtilityPage`](/sdk/reference/classes/bit-badges-api#updateutilitypage)

***

### verifyOwnershipRequirements()

> **verifyOwnershipRequirements**(`payload`): `Promise`\<[`GenericVerifyAssetsSuccessResponse`](/sdk/reference/classes/generic-verify-assets-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:2159](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L2159)

A generic route for verifying asset ownership requirements. Asset requirements support AND / OR / NOT logic.

#### Parameters

##### payload

[`iGenericVerifyAssetsPayload`](/sdk/reference/interfaces/i-generic-verify-assets-payload)

#### Returns

`Promise`\<[`GenericVerifyAssetsSuccessResponse`](/sdk/reference/classes/generic-verify-assets-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/verifyOwnershipRequirements`
- **SDK Function Call**: `await BitBadgesApi.verifyOwnershipRequirements(payload);`

#### Inherited from

[`BitBadgesAPI`](/sdk/reference/classes/bit-badges-api).[`verifyOwnershipRequirements`](/sdk/reference/classes/bit-badges-api#verifyownershiprequirements)

***

### verifySignIn()

> **verifySignIn**(`payload`): `Promise`\<[`VerifySignInSuccessResponse`](/sdk/reference/classes/verify-sign-in-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3314](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3314)

Verifies the user signed challenge and grants them a valid session if everything checks out.

#### Parameters

##### payload

[`iVerifySignInPayload`](/sdk/reference/interfaces/i-verify-sign-in-payload)

#### Returns

`Promise`\<[`VerifySignInSuccessResponse`](/sdk/reference/classes/verify-sign-in-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/auth/verify`
- **SDK Function Call**: `await BitBadgesApi.verifySignIn(payload);`
- **Tutorial**: See Authentication tutorial on the official docs.

#### Example

```typescript
const res = await BitBadgesApi.verifySignIn(payload);
console.log(res);
```

***

### verifySIWBBRequest()

> **verifySIWBBRequest**(`payload`): `Promise`\<[`GenericBlockinVerifySuccessResponse`](/sdk/reference/classes/generic-blockin-verify-success-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts:3438](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesApi.ts#L3438)

A generic route for verifying SIWBB requests. Used as a helper if implementing on your own.

#### Parameters

##### payload

[`iGenericBlockinVerifyPayload`](/sdk/reference/interfaces/i-generic-blockin-verify-payload)

#### Returns

`Promise`\<[`GenericBlockinVerifySuccessResponse`](/sdk/reference/classes/generic-blockin-verify-success-response)\>

#### Remarks

- **API Route**: `POST /api/v0/siwbbRequest/verify`
- **SDK Function Call**: `await BitBadgesApi.verifySIWBBRequest(payload);`
