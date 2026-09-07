---
description: "T extends NumberType"
---

# Class: PointsActivityDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L161)

## Extends

- [`ActivityDoc`](/sdk/reference/classes/activity-doc)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iPointsActivityDoc`](/sdk/reference/interfaces/i-points-activity-doc)\<`T`\>

## Constructors

### Constructor

> **new PointsActivityDoc**\<`T`\>(`data`): `PointsActivityDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:168](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L168)

#### Parameters

##### data

[`iPointsActivityDoc`](/sdk/reference/interfaces/i-points-activity-doc)\<`T`\>

#### Returns

`PointsActivityDoc`\<`T`\>

#### Overrides

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`constructor`](/sdk/reference/classes/activity-doc#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:24](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L24)

A unique stringified document ID

#### Implementation of

[`iPointsActivityDoc`](/sdk/reference/interfaces/i-points-activity-doc).[`_docId`](/sdk/reference/interfaces/i-points-activity-doc#_docid)

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`_docId`](/sdk/reference/classes/activity-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L25)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iPointsActivityDoc`](/sdk/reference/interfaces/i-points-activity-doc).[`_id`](/sdk/reference/interfaces/i-points-activity-doc#_id)

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`_id`](/sdk/reference/classes/activity-doc#_id)

***

### \_notificationsHandled?

> `optional` **\_notificationsHandled?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L23)

Whether or not the notifications have been handled by the indexer or not.

#### Implementation of

[`iPointsActivityDoc`](/sdk/reference/interfaces/i-points-activity-doc).[`_notificationsHandled`](/sdk/reference/interfaces/i-points-activity-doc#_notificationshandled)

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`_notificationsHandled`](/sdk/reference/classes/activity-doc#_notificationshandled)

***

### applicationId

> **applicationId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:165](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L165)

The application ID of the points activity

#### Implementation of

[`iPointsActivityDoc`](/sdk/reference/interfaces/i-points-activity-doc).[`applicationId`](/sdk/reference/interfaces/i-points-activity-doc#applicationid)

***

### bitbadgesAddress

> **bitbadgesAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:162](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L162)

The BitBadges address of the user who earned the points

#### Implementation of

[`iPointsActivityDoc`](/sdk/reference/interfaces/i-points-activity-doc).[`bitbadgesAddress`](/sdk/reference/interfaces/i-points-activity-doc#bitbadgesaddress)

***

### block

> **block**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:22](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L22)

The block number of the activity.

#### Implementation of

[`iPointsActivityDoc`](/sdk/reference/interfaces/i-points-activity-doc).[`block`](/sdk/reference/interfaces/i-points-activity-doc#block)

#### Inherited from

[`ActivityDoc`](/sdk/reference/classes/activity-doc).[`block`](/sdk/reference/classes/activity-doc#block)

***

### newPoints

> **newPoints**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:164](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L164)

The amount of points after the activity

#### Implementation of

[`iPointsActivityDoc`](/sdk/reference/interfaces/i-points-activity-doc).[`newPoints`](/sdk/reference/interfaces/i-points-activity-doc#newpoints)

***

### oldPoints

> **oldPoints**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:163](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L163)

The amount of points before the activity

#### Implementation of

[`iPointsActivityDoc`](/sdk/reference/interfaces/i-points-activity-doc).[`oldPoints`](/sdk/reference/interfaces/i-points-activity-doc#oldpoints)

***

### pageId

> **pageId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:166](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L166)

The page ID of the points activity

#### Implementation of

[`iPointsActivityDoc`](/sdk/reference/interfaces/i-points-activity-doc).[`pageId`](/sdk/reference/interfaces/i-points-activity-doc#pageid)

***

### timestamp

> **timestamp**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L21)

The timestamp of the activity.

#### Implementation of

[`iPointsActivityDoc`](/sdk/reference/interfaces/i-points-activity-doc).[`timestamp`](/sdk/reference/interfaces/i-points-activity-doc#timestamp)

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

> **convert**\<`U`\>(`convertFunction`, `options?`): `PointsActivityDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:177](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L177)

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

`PointsActivityDoc`\<`U`\>

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
