---
description: "T extends NumberType"
---

# Class: ProfileDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:547](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L547)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`ProfileDoc`\<`T`\>\>

## Extended by

- [`BitBadgesUserInfo`](/sdk/reference/classes/bit-badges-user-info)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc)\<`T`\>

## Constructors

### Constructor

> **new ProfileDoc**\<`T`\>(`data`): `ProfileDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:565](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L565)

#### Parameters

##### data

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc)\<`T`\>

#### Returns

`ProfileDoc`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:548](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L548)

A unique stringified document ID

#### Implementation of

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`_docId`](/sdk/reference/interfaces/i-profile-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:549](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L549)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`_id`](/sdk/reference/interfaces/i-profile-doc#_id)

***

### bannerImage?

> `optional` **bannerImage?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:563](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L563)

The banner image URL of the account

#### Implementation of

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`bannerImage`](/sdk/reference/interfaces/i-profile-doc#bannerimage)

***

### createdAt?

> `optional` **createdAt?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:552](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L552)

The timestamp of when this account was created (milliseconds since epoch)

#### Implementation of

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`createdAt`](/sdk/reference/interfaces/i-profile-doc#createdat)

***

### discord?

> `optional` **discord?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:553](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L553)

The Discord username of the account

#### Implementation of

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`discord`](/sdk/reference/interfaces/i-profile-doc#discord)

***

### fetchedProfile?

> `optional` **fetchedProfile?**: `"full"` \| `"partial"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:550](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L550)

Whether we have already fetched the profile or not

#### Implementation of

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`fetchedProfile`](/sdk/reference/interfaces/i-profile-doc#fetchedprofile)

***

### github?

> `optional` **github?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:555](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L555)

The GitHub username of the account

#### Implementation of

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`github`](/sdk/reference/interfaces/i-profile-doc#github)

***

### hiddenTokens?

> `optional` **hiddenTokens?**: [`BatchTokenDetailsArray`](/sdk/reference/classes/batch-token-details-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:558](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L558)

The hidden tokens of the account

#### Implementation of

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`hiddenTokens`](/sdk/reference/interfaces/i-profile-doc#hiddentokens)

***

### latestSignedInChain?

> `optional` **latestSignedInChain?**: [`SupportedChain`](/sdk/reference/enumerations/supported-chain)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:561](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L561)

The latest chain the user signed in with

#### Implementation of

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`latestSignedInChain`](/sdk/reference/interfaces/i-profile-doc#latestsignedinchain)

***

### notifications?

> `optional` **notifications?**: [`NotificationPreferences`](/sdk/reference/classes/notification-preferences)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:562](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L562)

The notifications of the account

#### Implementation of

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`notifications`](/sdk/reference/interfaces/i-profile-doc#notifications)

***

### profilePicUrl?

> `optional` **profilePicUrl?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:559](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L559)

The profile picture URL of the account

#### Implementation of

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`profilePicUrl`](/sdk/reference/interfaces/i-profile-doc#profilepicurl)

***

### readme?

> `optional` **readme?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:557](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L557)

The readme of the account

#### Implementation of

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`readme`](/sdk/reference/interfaces/i-profile-doc#readme)

***

### seenActivity?

> `optional` **seenActivity?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:551](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L551)

The timestamp of the last activity seen for this account (milliseconds since epoch)

#### Implementation of

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`seenActivity`](/sdk/reference/interfaces/i-profile-doc#seenactivity)

***

### telegram?

> `optional` **telegram?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:556](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L556)

The Telegram username of the account

#### Implementation of

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`telegram`](/sdk/reference/interfaces/i-profile-doc#telegram)

***

### twitter?

> `optional` **twitter?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:554](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L554)

The Twitter username of the account

#### Implementation of

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`twitter`](/sdk/reference/interfaces/i-profile-doc#twitter)

***

### username?

> `optional` **username?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:560](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L560)

The username of the account

#### Implementation of

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`username`](/sdk/reference/interfaces/i-profile-doc#username)

## Methods

### clone()

> **clone**(): `ProfileDoc`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`ProfileDoc`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `ProfileDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:589](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L589)

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

`ProfileDoc`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:585](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L585)

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
