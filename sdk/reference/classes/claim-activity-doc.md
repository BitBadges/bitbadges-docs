---
description: "T extends NumberType"
---

# Class: ClaimActivityDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:134](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L134)

## Extends

- [`ActivityDoc`](/sdk/reference/classes/activity-doc)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iClaimActivityDoc`](/sdk/reference/interfaces/i-claim-activity-doc)\<`T`\>

## Constructors

### Constructor

> **new ClaimActivityDoc**\<`T`\>(`data`): `ClaimActivityDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:142](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L142)

#### Parameters

##### data

[`iClaimActivityDoc`](/sdk/reference/interfaces/i-claim-activity-doc)\<`T`\>

#### Returns

`ClaimActivityDoc`\<`T`\>

#### Overrides

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`constructor`](/sdk/reference/classes/activity-doc#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:24](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L24)

A unique stringified document ID

#### Implementation of

[`iClaimActivityDoc`](/sdk/reference/interfaces/i-claim-activity-doc).[`_docId`](/sdk/reference/interfaces/i-claim-activity-doc#_docid)

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`_docId`](/sdk/reference/classes/activity-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L25)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iClaimActivityDoc`](/sdk/reference/interfaces/i-claim-activity-doc).[`_id`](/sdk/reference/interfaces/i-claim-activity-doc#_id)

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`_id`](/sdk/reference/classes/activity-doc#_id)

***

### \_notificationsHandled?

> `optional` **\_notificationsHandled?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L23)

Whether or not the notifications have been handled by the indexer or not.

#### Implementation of

[`iClaimActivityDoc`](/sdk/reference/interfaces/i-claim-activity-doc).[`_notificationsHandled`](/sdk/reference/interfaces/i-claim-activity-doc#_notificationshandled)

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`_notificationsHandled`](/sdk/reference/classes/activity-doc#_notificationshandled)

***

### bitbadgesAddress

> **bitbadgesAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:137](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L137)

The BitBadges address of the user who attempted the claim

#### Implementation of

[`iClaimActivityDoc`](/sdk/reference/interfaces/i-claim-activity-doc).[`bitbadgesAddress`](/sdk/reference/interfaces/i-claim-activity-doc#bitbadgesaddress)

***

### block

> **block**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:22](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L22)

The block number of the activity.

#### Implementation of

[`iClaimActivityDoc`](/sdk/reference/interfaces/i-claim-activity-doc).[`block`](/sdk/reference/interfaces/i-claim-activity-doc#block)

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`block`](/sdk/reference/classes/activity-doc#block)

***

### claimAttemptId

> **claimAttemptId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:138](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L138)

The claim attempt ID of the claim attempt

#### Implementation of

[`iClaimActivityDoc`](/sdk/reference/interfaces/i-claim-activity-doc).[`claimAttemptId`](/sdk/reference/interfaces/i-claim-activity-doc#claimattemptid)

***

### claimId

> **claimId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:136](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L136)

The claim ID of the claim attempt

#### Implementation of

[`iClaimActivityDoc`](/sdk/reference/interfaces/i-claim-activity-doc).[`claimId`](/sdk/reference/interfaces/i-claim-activity-doc#claimid)

***

### claimType?

> `optional` **claimType?**: `"collection"` \| `"standalone"` \| `"list"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:140](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L140)

The claim type of the claim attempt

#### Implementation of

[`iClaimActivityDoc`](/sdk/reference/interfaces/i-claim-activity-doc).[`claimType`](/sdk/reference/interfaces/i-claim-activity-doc#claimtype)

***

### private?

> `optional` **private?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L139)

Only for private purposes?

#### Implementation of

[`iClaimActivityDoc`](/sdk/reference/interfaces/i-claim-activity-doc).[`private`](/sdk/reference/interfaces/i-claim-activity-doc#private)

***

### success

> **success**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:135](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L135)

Whether the claim attempt was successful or not

#### Implementation of

[`iClaimActivityDoc`](/sdk/reference/interfaces/i-claim-activity-doc).[`success`](/sdk/reference/interfaces/i-claim-activity-doc#success)

***

### timestamp

> **timestamp**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L21)

The timestamp of the activity.

#### Implementation of

[`iClaimActivityDoc`](/sdk/reference/interfaces/i-claim-activity-doc).[`timestamp`](/sdk/reference/interfaces/i-claim-activity-doc#timestamp)

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`timestamp`](/sdk/reference/classes/activity-doc#timestamp)

## Methods

### clone()

> **clone**(): [`ActivityDoc`](/sdk/reference/classes/activity-doc)

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

[`ActivityDoc`](/sdk/reference/classes/activity-doc)

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`clone`](/sdk/reference/classes/activity-doc#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `ClaimActivityDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:152](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L152)

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

`ClaimActivityDoc`\<`U`\>

#### Overrides

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`convert`](/sdk/reference/classes/activity-doc#convert)

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

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`equals`](/sdk/reference/classes/activity-doc#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L36)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`getNumberFieldNames`](/sdk/reference/classes/activity-doc#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`hasNumberFields`](/sdk/reference/classes/activity-doc#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`toJson`](/sdk/reference/classes/activity-doc#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`toJsonString`](/sdk/reference/classes/activity-doc#tojsonstring)
