---
description: "T extends NumberType"
---

# Class: ClaimBuilderDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1385](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1385)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`ClaimBuilderDoc`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc)\<`T`\>

## Constructors

### Constructor

> **new ClaimBuilderDoc**\<`T`\>(`data`): `ClaimBuilderDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1419](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1419)

#### Parameters

##### data

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc)\<`T`\>

#### Returns

`ClaimBuilderDoc`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1386](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1386)

A unique stringified document ID

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`_docId`](/sdk/reference/interfaces/i-claim-builder-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1387](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1387)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`_id`](/sdk/reference/interfaces/i-claim-builder-doc#_id)

***

### action

> **action**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1399](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1399)

Details for the action to perform if the criteria is correct

#### seedCode?

> `optional` **seedCode?**: `string`

#### siwbbClaim?

> `optional` **siwbbClaim?**: `boolean`

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`action`](/sdk/reference/interfaces/i-claim-builder-doc#action)

***

### approach?

> `optional` **approach?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1394](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1394)

The expected approach for the claim. This is for display purposes for the frontend.

Available options:
- in-site: The claim is expected to be completed in-site.
- api: The claim is expected to be completed via an API call.
- zapier: The claim is expected to be completed via Zapier auto-completion.

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`approach`](/sdk/reference/interfaces/i-claim-builder-doc#approach)

***

### assignMethod?

> `optional` **assignMethod?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1407](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1407)

Algorithm to determine the claaim number indices

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`assignMethod`](/sdk/reference/interfaces/i-claim-builder-doc#assignmethod)

***

### cachePolicy?

> `optional` **cachePolicy?**: [`ClaimCachePolicy`](/sdk/reference/classes/claim-cache-policy)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1417](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1417)

For on-demand claims, we cache the result per user for a short period.

To help optimize performance, please provide a cache policy.

This is only applicable to on-demand claims.

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`cachePolicy`](/sdk/reference/interfaces/i-claim-builder-doc#cachepolicy)

***

### categories?

> `optional` **categories?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1414](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1414)

The categories of the claim

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`categories`](/sdk/reference/interfaces/i-claim-builder-doc#categories)

***

### cid

> **cid**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1388](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1388)

The CID (content ID) of the document. This is used behind the scenes to handle off-chain vs on-chain data races.

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`cid`](/sdk/reference/interfaces/i-claim-builder-doc#cid)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1392](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1392)

The collection ID of the document

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`collectionId`](/sdk/reference/interfaces/i-claim-builder-doc#collectionid)

***

### createdAt

> **createdAt**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1406](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1406)

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`createdAt`](/sdk/reference/interfaces/i-claim-builder-doc#createdat)

***

### createdBy

> **createdBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1389](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1389)

The BitBadges address of the user who created this password

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`createdBy`](/sdk/reference/interfaces/i-claim-builder-doc#createdby)

***

### deletedAt?

> `optional` **deletedAt?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1393](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1393)

Deleted at timestamp

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`deletedAt`](/sdk/reference/interfaces/i-claim-builder-doc#deletedat)

***

### docClaimed

> **docClaimed**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1391](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1391)

True if the document is claimed by the collection

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`docClaimed`](/sdk/reference/interfaces/i-claim-builder-doc#docclaimed)

***

### estimatedCost?

> `optional` **estimatedCost?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1411](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1411)

Estimated cost for the user

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`estimatedCost`](/sdk/reference/interfaces/i-claim-builder-doc#estimatedcost)

***

### estimatedTime?

> `optional` **estimatedTime?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1415](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1415)

Estimated time to satisfy the claim's requirements

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`estimatedTime`](/sdk/reference/interfaces/i-claim-builder-doc#estimatedtime)

***

### lastUpdated

> **lastUpdated**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1405](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1405)

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`lastUpdated`](/sdk/reference/interfaces/i-claim-builder-doc#lastupdated)

***

### managedBy

> **managedBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1390](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1390)

The BitBadges address of the user who is currently managing this

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`managedBy`](/sdk/reference/interfaces/i-claim-builder-doc#managedby)

***

### ~~manualDistribution?~~

> `optional` **manualDistribution?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1395](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1395)

If true, the claim codes are to be distributed manually. This doc will only be used for storage purposes.
Only in use for legacy on-chain claims.

#### Deprecated

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`manualDistribution`](/sdk/reference/interfaces/i-claim-builder-doc#manualdistribution)

***

### metadata?

> `optional` **metadata?**: [`Metadata`](/sdk/reference/classes/metadata)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1404](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1404)

Metadata for the claim

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`metadata`](/sdk/reference/interfaces/i-claim-builder-doc#metadata)

***

### pluginIds?

> `optional` **pluginIds?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1397](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1397)

For query purposes, the plugin IDs

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`pluginIds`](/sdk/reference/interfaces/i-claim-builder-doc#pluginids)

***

### plugins

> **plugins**: [`IntegrationPluginParams`](/sdk/reference/interfaces/integration-plugin-params)\<`string`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1396](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1396)

Dynamic checks to run in the form of plugins

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`plugins`](/sdk/reference/interfaces/i-claim-builder-doc#plugins)

***

### rewards?

> `optional` **rewards?**: [`ClaimReward`](/sdk/reference/classes/claim-reward)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1410](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1410)

Rewards to be shown upon a successful claim. If you need further gating, you can do this in two-steps.

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`rewards`](/sdk/reference/interfaces/i-claim-builder-doc#rewards)

***

### satisfyMethod?

> `optional` **satisfyMethod?**: [`SatisfyMethod`](/sdk/reference/classes/satisfy-method)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1416](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1416)

Custom success logic. If not provided, we will default to AND logic with all plugins.

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`satisfyMethod`](/sdk/reference/interfaces/i-claim-builder-doc#satisfymethod)

***

### showInSearchResults?

> `optional` **showInSearchResults?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1413](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1413)

If true, the claim will be shown in search results

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`showInSearchResults`](/sdk/reference/interfaces/i-claim-builder-doc#showinsearchresults)

***

### state

> **state**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1398](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1398)

The current state of each plugin

#### Index Signature

\[`pluginId`: `string`\]: `any`

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`state`](/sdk/reference/interfaces/i-claim-builder-doc#state)

***

### testOnly?

> `optional` **testOnly?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1409](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1409)

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`testOnly`](/sdk/reference/interfaces/i-claim-builder-doc#testonly)

***

### trackerDetails?

> `optional` **trackerDetails?**: [`ChallengeTrackerIdDetails`](/sdk/reference/classes/challenge-tracker-id-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1403](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1403)

Which challenge tracker is it tied to

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`trackerDetails`](/sdk/reference/interfaces/i-claim-builder-doc#trackerdetails)

***

### version

> **version**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1408](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1408)

#### Implementation of

[`iClaimBuilderDoc`](/sdk/reference/interfaces/i-claim-builder-doc).[`version`](/sdk/reference/interfaces/i-claim-builder-doc#version)

## Methods

### clone()

> **clone**(): `ClaimBuilderDoc`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`ClaimBuilderDoc`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `ClaimBuilderDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1458](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1458)

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

`ClaimBuilderDoc`\<`U`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`convert`](/sdk/reference/classes/base-number-type-class#convert)

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

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`equals`](/sdk/reference/classes/base-number-type-class#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1454](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1454)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`getNumberFieldNames`](/sdk/reference/classes/base-number-type-class#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`hasNumberFields`](/sdk/reference/classes/base-number-type-class#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`toJson`](/sdk/reference/classes/base-number-type-class#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`toJsonString`](/sdk/reference/classes/base-number-type-class#tojsonstring)
