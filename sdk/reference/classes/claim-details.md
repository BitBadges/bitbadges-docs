---
description: "T extends NumberType"
---

# Class: ClaimDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:141](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L141)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`ClaimDetails`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iClaimDetails`](/sdk/reference/interfaces/i-claim-details)\<`T`\>

## Constructors

### Constructor

> **new ClaimDetails**\<`T`\>(`data`): `ClaimDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:170](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L170)

#### Parameters

##### data

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details)\<`T`\>

#### Returns

`ClaimDetails`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_includesPrivateParams

> **\_includesPrivateParams**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:162](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L162)

Whether the claim fetch includes private params

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`_includesPrivateParams`](/sdk/reference/interfaces/i-claim-details#_includesprivateparams)

***

### \_templateInfo?

> `optional` **\_templateInfo?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:163](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L163)

**`Internal`**

For internal use by the frontend.

#### completedTemplateStep?

> `optional` **completedTemplateStep?**: `boolean`

#### pluginId?

> `optional` **pluginId?**: `string`

#### supportedApproaches?

> `optional` **supportedApproaches?**: `string`[]

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`_templateInfo`](/sdk/reference/interfaces/i-claim-details#_templateinfo)

***

### approach?

> `optional` **approach?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:145](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L145)

How the claim is expected to be completed. This is for display purposes for the frontend.

Available options:
- in-site (default): The claim is expected to be completed in-site.
- api: The claim is expected to be completed via an API call.
- zapier: The claim is expected to be completed via Zapier auto-completion.

Typically, you will use the in-site approach

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`approach`](/sdk/reference/interfaces/i-claim-details#approach)

***

### assignMethod?

> `optional` **assignMethod?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:148](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L148)

Algorithm to determine the claim number order. Blank is just incrementing claim numbers.

For most cases, you will not need to specify this.

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`assignMethod`](/sdk/reference/interfaces/i-claim-details#assignmethod)

***

### cachePolicy?

> `optional` **cachePolicy?**: [`ClaimCachePolicy`](/sdk/reference/classes/claim-cache-policy)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:168](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L168)

Cache policy for the claim. Only needed for on-demand claims.

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`cachePolicy`](/sdk/reference/interfaces/i-claim-details#cachepolicy)

***

### categories?

> `optional` **categories?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:158](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L158)

The categories of the claim

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`categories`](/sdk/reference/interfaces/i-claim-details#categories)

***

### claimId

> **claimId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:142](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L142)

Unique claim ID.

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`claimId`](/sdk/reference/interfaces/i-claim-details#claimid)

***

### collectionId?

> `optional` **collectionId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:152](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L152)

Collection ID that the claim is for (if applicable - collection claims).

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`collectionId`](/sdk/reference/interfaces/i-claim-details#collectionid)

***

### createdBy?

> `optional` **createdBy?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:160](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L160)

The original creator of the claim

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`createdBy`](/sdk/reference/interfaces/i-claim-details#createdby)

***

### estimatedCost?

> `optional` **estimatedCost?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:155](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L155)

Estimated cost for the claim.

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`estimatedCost`](/sdk/reference/interfaces/i-claim-details#estimatedcost)

***

### estimatedTime?

> `optional` **estimatedTime?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:156](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L156)

Estimated time to satisfy the claim's requirements.

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`estimatedTime`](/sdk/reference/interfaces/i-claim-details#estimatedtime)

***

### lastUpdated?

> `optional` **lastUpdated?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:150](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L150)

Last updated timestamp for the claim.

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`lastUpdated`](/sdk/reference/interfaces/i-claim-details#lastupdated)

***

### managedBy?

> `optional` **managedBy?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L161)

The BitBadges address of the user who is currently managing this

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`managedBy`](/sdk/reference/interfaces/i-claim-details#managedby)

***

### manualDistribution?

> `optional` **manualDistribution?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:144](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L144)

If manual distribution is enabled, we do not handle any distribution of claim codes.
We leave that up to the claim creator.

Only applicable for on-chain token claims. This is only used in advanced self-hosted cases.

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`manualDistribution`](/sdk/reference/interfaces/i-claim-details#manualdistribution)

***

### metadata?

> `optional` **metadata?**: [`Metadata`](/sdk/reference/classes/metadata)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:147](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L147)

Metadata for the claim.

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`metadata`](/sdk/reference/interfaces/i-claim-details#metadata)

***

### plugins

> **plugins**: [`IntegrationPluginDetails`](/sdk/reference/interfaces/integration-plugin-details)\<`string`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L143)

Claim plugins. These are the criteria that must pass for a user to claim.

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`plugins`](/sdk/reference/interfaces/i-claim-details#plugins)

***

### rewards?

> `optional` **rewards?**: [`ClaimReward`](/sdk/reference/classes/claim-reward)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:154](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L154)

Rewards for the claim.

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`rewards`](/sdk/reference/interfaces/i-claim-details#rewards)

***

### satisfyMethod?

> `optional` **satisfyMethod?**: [`SatisfyMethod`](/sdk/reference/classes/satisfy-method)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:149](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L149)

Custom satisfaction logic.

If left blank, all plugins must pass for the claim to be satisfied.
Otherwise, you can specify a custom method to determine if the claim is satisfied.

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`satisfyMethod`](/sdk/reference/interfaces/i-claim-details#satisfymethod)

***

### seedCode?

> `optional` **seedCode?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:146](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L146)

Seed code for the claim. Only used for on-chain token claims.

This is how we produce all reserved codes for the on-chain merkle challenge / proofs.

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`seedCode`](/sdk/reference/interfaces/i-claim-details#seedcode)

***

### showInSearchResults?

> `optional` **showInSearchResults?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L157)

If true, the claim will be shown in search results

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`showInSearchResults`](/sdk/reference/interfaces/i-claim-details#showinsearchresults)

***

### standaloneClaim?

> `optional` **standaloneClaim?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:153](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L153)

Standalone claims are not linked with a token or list.

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`standaloneClaim`](/sdk/reference/interfaces/i-claim-details#standaloneclaim)

***

### trackerDetails?

> `optional` **trackerDetails?**: [`ChallengeTrackerIdDetails`](/sdk/reference/classes/challenge-tracker-id-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:159](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L159)

The tracker details for the claim (if applicable - collection claims).

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`trackerDetails`](/sdk/reference/interfaces/i-claim-details#trackerdetails)

***

### version

> **version**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L151)

The version of the claim.

#### Implementation of

[`iClaimDetails`](/sdk/reference/interfaces/i-claim-details).[`version`](/sdk/reference/interfaces/i-claim-details#version)

## Methods

### clone()

> **clone**(): `ClaimDetails`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`ClaimDetails`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `ClaimDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:197](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L197)

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

`ClaimDetails`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:201](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L201)

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
