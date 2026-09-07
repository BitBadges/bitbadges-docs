---
description: "The base document interface for all acitivity types."
---

# Class: ActivityDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:20](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L20)

The base document interface for all acitivity types.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`ActivityDoc`\<`T`\>\>

## Extended by

- [`TransferActivityDoc`](/sdk/reference/classes/transfer-activity-doc)
- [`ClaimActivityDoc`](/sdk/reference/classes/claim-activity-doc)
- [`PointsActivityDoc`](/sdk/reference/classes/points-activity-doc)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc)\<`T`\>

## Constructors

### Constructor

> **new ActivityDoc**\<`T`\>(`data`): `ActivityDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L27)

#### Parameters

##### data

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc)\<`T`\>

#### Returns

`ActivityDoc`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:24](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L24)

A unique stringified document ID

#### Implementation of

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`_docId`](/sdk/reference/interfaces/i-activity-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L25)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`_id`](/sdk/reference/interfaces/i-activity-doc#_id)

***

### \_notificationsHandled?

> `optional` **\_notificationsHandled?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L23)

Whether or not the notifications have been handled by the indexer or not.

#### Implementation of

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`_notificationsHandled`](/sdk/reference/interfaces/i-activity-doc#_notificationshandled)

***

### block

> **block**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:22](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L22)

The block number of the activity.

#### Implementation of

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`block`](/sdk/reference/interfaces/i-activity-doc#block)

***

### timestamp

> **timestamp**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L21)

The timestamp of the activity.

#### Implementation of

[`iActivityDoc`](/sdk/reference/interfaces/i-activity-doc).[`timestamp`](/sdk/reference/interfaces/i-activity-doc#timestamp)

## Methods

### clone()

> **clone**(): `ActivityDoc`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`ActivityDoc`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `ActivityDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L40)

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

`ActivityDoc`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/activity.ts#L36)

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
