---
description: "iCheckSignInStatusSuccessResponse"
---

# Class: CheckSignInStatusSuccessResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1347](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1347)

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`CheckSignInStatusSuccessResponse`\>

## Implements

- [`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response)

## Constructors

### Constructor

> **new CheckSignInStatusSuccessResponse**(`data`): `CheckSignInStatusSuccessResponse`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1387](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1387)

#### Parameters

##### data

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response)

#### Returns

`CheckSignInStatusSuccessResponse`

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1383](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1383)

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`address`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#address)

***

### bitbadgesAddress

> **bitbadgesAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1384](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1384)

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`bitbadgesAddress`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#bitbadgesaddress)

***

### bluesky?

> `optional` **bluesky?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1374](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1374)

Signed in with Bluesky?

#### id

> **id**: `string`

#### username

> **username**: `string`

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`bluesky`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#bluesky)

***

### chain

> **chain**: [`SupportedChain`](/sdk/reference/enumerations/supported-chain)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1385](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1385)

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`chain`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#chain)

***

### discord?

> `optional` **discord?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1351](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1351)

Signed in with Discord username and discriminator?

#### discriminator

> **discriminator**: `string`

#### id

> **id**: `string`

#### username

> **username**: `string`

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`discord`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#discord)

***

### email?

> `optional` **email?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1382](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1382)

The email of the session.

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`email`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#email)

***

### facebook?

> `optional` **facebook?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1376](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1376)

Signed in with Facebook?

#### id

> **id**: `string`

#### username

> **username**: `string`

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`facebook`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#facebook)

***

### farcaster?

> `optional` **farcaster?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1378](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1378)

Signed in with Farcaster?

#### id

> **id**: `string`

#### username

> **username**: `string`

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`farcaster`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#farcaster)

***

### github?

> `optional` **github?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1360](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1360)

Signed in with GitHub username?

#### id

> **id**: `string`

#### username

> **username**: `string`

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`github`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#github)

***

### google?

> `optional` **google?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1364](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1364)

Signed in with Google username?

#### id

> **id**: `string`

#### username

> **username**: `string`

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`google`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#google)

***

### googleCalendar?

> `optional` **googleCalendar?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1368](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1368)

Signed in with Google Calendar?

#### id

> **id**: `string`

#### username

> **username**: `string`

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`googleCalendar`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#googlecalendar)

***

### linkedIn?

> `optional` **linkedIn?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1380](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1380)

Signed in with LinkedIn?

#### id

> **id**: `string`

#### username

> **username**: `string`

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`linkedIn`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#linkedin)

***

### mailchimp?

> `optional` **mailchimp?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1375](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1375)

Signed in with Mailchimp?

#### id

> **id**: `string`

#### username

> **username**: `string`

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`mailchimp`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#mailchimp)

***

### meetup?

> `optional` **meetup?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1373](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1373)

Signed in with Meetup?

#### id

> **id**: `string`

#### username

> **username**: `string`

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`meetup`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#meetup)

***

### message

> **message**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1349](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1349)

The message that was signed.

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`message`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#message)

***

### reddit?

> `optional` **reddit?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1372](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1372)

Signed in with Reddit?

#### id

> **id**: `string`

#### username

> **username**: `string`

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`reddit`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#reddit)

***

### scopes

> **scopes**: [`OAuthScopeDetailsWithId`](/sdk/reference/type-aliases/o-auth-scope-details-with-id)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1350](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1350)

Approved scopes

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`scopes`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#scopes)

***

### shopify?

> `optional` **shopify?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1381](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1381)

Signed in with Shopify?

#### id

> **id**: `string`

#### username

> **username**: `string`

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`shopify`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#shopify)

***

### signedIn

> **signedIn**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1348](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1348)

Indicates whether the user is signed in.

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`signedIn`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#signedin)

***

### slack?

> `optional` **slack?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1379](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1379)

Signed in with Slack?

#### id

> **id**: `string`

#### username

> **username**: `string`

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`slack`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#slack)

***

### strava?

> `optional` **strava?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1370](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1370)

Signed in with Strava?

#### id

> **id**: `string`

#### username

> **username**: `string`

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`strava`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#strava)

***

### telegram?

> `optional` **telegram?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1377](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1377)

Signed in with Telegram?

#### id

> **id**: `string`

#### username

> **username**: `string`

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`telegram`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#telegram)

***

### twitch?

> `optional` **twitch?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1369](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1369)

Signed in with Twitch?

#### id

> **id**: `string`

#### username

> **username**: `string`

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`twitch`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#twitch)

***

### twitter?

> `optional` **twitter?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1356](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1356)

Signed in with Twitter username?

#### id

> **id**: `string`

#### username

> **username**: `string`

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`twitter`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#twitter)

***

### youtube?

> `optional` **youtube?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1371](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1371)

Signed in with Youtube?

#### id

> **id**: `string`

#### username

> **username**: `string`

#### Implementation of

[`iCheckSignInStatusSuccessResponse`](/sdk/reference/interfaces/i-check-sign-in-status-success-response).[`youtube`](/sdk/reference/interfaces/i-check-sign-in-status-success-response#youtube)

## Methods

### clone()

> **clone**(): `CheckSignInStatusSuccessResponse`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`CheckSignInStatusSuccessResponse`

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

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`equals`](/sdk/reference/classes/custom-type-class#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:111](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L111)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`getNumberFieldNames`](/sdk/reference/classes/custom-type-class#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L115)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`hasNumberFields`](/sdk/reference/classes/custom-type-class#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L93)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`toJson`](/sdk/reference/classes/custom-type-class#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L97)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`toJsonString`](/sdk/reference/classes/custom-type-class#tojsonstring)
