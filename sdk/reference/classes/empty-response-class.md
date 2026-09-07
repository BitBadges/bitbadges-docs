---
description: "Empty response class for the BitBadges API."
---

# Class: EmptyResponseClass

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:129](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L129)

Empty response class for the BitBadges API.

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`EmptyResponseClass`\>

## Extended by

- [`GetClaimActivityPayload`](/sdk/reference/classes/get-claim-activity-payload)
- [`GetClaimAttemptStatusPayload`](/sdk/reference/classes/get-claim-attempt-status-payload)
- [`GetReservedClaimCodesPayload`](/sdk/reference/classes/get-reserved-claim-codes-payload)
- [`SignOutSuccessResponse`](/sdk/reference/classes/sign-out-success-response)
- [`GetTokensFromFaucetPayload`](/sdk/reference/classes/get-tokens-from-faucet-payload)
- [`GetTokensFromFaucetSuccessResponse`](/sdk/reference/classes/get-tokens-from-faucet-success-response)
- [`DeleteSIWBBRequestSuccessResponse`](/sdk/reference/classes/delete-siwbb-request-success-response)
- [`GetActiveAuthorizationsPayload`](/sdk/reference/classes/get-active-authorizations-payload)
- [`DeleteDeveloperAppSuccessResponse`](/sdk/reference/classes/delete-developer-app-success-response)
- [`CreatePluginSuccessResponse`](/sdk/reference/classes/create-plugin-success-response)
- [`UpdatePluginSuccessResponse`](/sdk/reference/classes/update-plugin-success-response)
- [`DeletePluginSuccessResponse`](/sdk/reference/classes/delete-plugin-success-response)
- [`DeleteClaimSuccessResponse`](/sdk/reference/classes/delete-claim-success-response)
- [`UpdateClaimSuccessResponse`](/sdk/reference/classes/update-claim-success-response)
- [`CreateClaimSuccessResponse`](/sdk/reference/classes/create-claim-success-response)
- [`OauthRevokeSuccessResponse`](/sdk/reference/classes/oauth-revoke-success-response)
- [`GetGatedContentForClaimPayload`](/sdk/reference/classes/get-gated-content-for-claim-payload)
- [`PerformStoreActionSingleWithBodyAuthSuccessResponse`](/sdk/reference/classes/perform-store-action-single-with-body-auth-success-response)
- [`PerformStoreActionBatchWithBodyAuthSuccessResponse`](/sdk/reference/classes/perform-store-action-batch-with-body-auth-success-response)
- [`PerformStoreActionSuccessResponse`](/sdk/reference/classes/perform-store-action-success-response)
- [`BatchStoreActionSuccessResponse`](/sdk/reference/classes/batch-store-action-success-response)
- [`DeleteApiKeySuccessResponse`](/sdk/reference/classes/delete-api-key-success-response)
- [`DeleteUtilityPageSuccessResponse`](/sdk/reference/classes/delete-utility-page-success-response)
- [`GetPostActionStatusesPayload`](/sdk/reference/classes/get-post-action-statuses-payload)
- [`CheckClaimSuccessPayload`](/sdk/reference/classes/check-claim-success-payload)
- [`GetOnChainDynamicStorePayload`](/sdk/reference/classes/get-on-chain-dynamic-store-payload)
- [`GetOnChainDynamicStoresByCreatorPayload`](/sdk/reference/classes/get-on-chain-dynamic-stores-by-creator-payload)
- [`GetOnChainDynamicStoreValuePayload`](/sdk/reference/classes/get-on-chain-dynamic-store-value-payload)
- [`RefreshMetadataPayload`](/sdk/reference/classes/refresh-metadata-payload)
- [`RefreshMetadataSuccessResponse`](/sdk/reference/classes/refresh-metadata-success-response)
- [`RefreshStatusPayload`](/sdk/reference/classes/refresh-status-payload)

## Implements

- [`CustomType`](/sdk/reference/interfaces/custom-type)\<`EmptyResponseClass`\>

## Constructors

### Constructor

> **new EmptyResponseClass**(`data?`): `EmptyResponseClass`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:130](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L130)

#### Parameters

##### data?

`any`

#### Returns

`EmptyResponseClass`

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Methods

### clone()

> **clone**(): `EmptyResponseClass`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`EmptyResponseClass`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`clone`](/sdk/reference/interfaces/custom-type#clone)

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`clone`](/sdk/reference/classes/custom-type-class#clone)

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

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`convert`](/sdk/reference/classes/custom-type-class#convert)

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

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`equals`](/sdk/reference/classes/custom-type-class#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:111](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L111)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`getNumberFieldNames`](/sdk/reference/interfaces/custom-type#getnumberfieldnames)

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`getNumberFieldNames`](/sdk/reference/classes/custom-type-class#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L115)

Checks if the object has number fields.

#### Returns

`boolean`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`hasNumberFields`](/sdk/reference/interfaces/custom-type#hasnumberfields)

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`hasNumberFields`](/sdk/reference/classes/custom-type-class#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L93)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`toJson`](/sdk/reference/interfaces/custom-type#tojson)

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`toJson`](/sdk/reference/classes/custom-type-class#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L97)

Converts the object to a JSON string.

#### Returns

`string`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`toJsonString`](/sdk/reference/interfaces/custom-type#tojsonstring)

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`toJsonString`](/sdk/reference/classes/custom-type-class#tojsonstring)
