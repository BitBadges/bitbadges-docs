---
description: "T extends NumberType"
---

# Class: MerkleChallengeTrackerDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1534](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1534)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`MerkleChallengeTrackerDoc`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iMerkleChallengeTrackerDoc`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc)\<`T`\>

## Constructors

### Constructor

> **new MerkleChallengeTrackerDoc**\<`T`\>(`data`): `MerkleChallengeTrackerDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1547](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1547)

#### Parameters

##### data

[`iMerkleChallengeTrackerDoc`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc)\<`T`\>

#### Returns

`MerkleChallengeTrackerDoc`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1538](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1538)

A unique stringified document ID

#### Implementation of

[`iMerkleChallengeTrackerDoc`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc).[`_docId`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1539](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1539)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iMerkleChallengeTrackerDoc`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc).[`_id`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc#_id)

***

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1545](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1545)

The approval ID

#### Implementation of

[`iMerkleChallengeTrackerDoc`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc).[`approvalId`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc#approvalid)

***

### approvalLevel

> **approvalLevel**: `""` \| `"collection"` \| `"incoming"` \| `"outgoing"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1542](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1542)

The challenge level (i.e. "collection", "incoming", "outgoing")

#### Implementation of

[`iMerkleChallengeTrackerDoc`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc).[`approvalLevel`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc#approvallevel)

***

### approverAddress

> **approverAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1543](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1543)

The approver address (leave blank if approvalLevel = "collection")

#### Implementation of

[`iMerkleChallengeTrackerDoc`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc).[`approverAddress`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc#approveraddress)

***

### challengeTrackerId

> **challengeTrackerId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1541](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1541)

The challenge ID

#### Implementation of

[`iMerkleChallengeTrackerDoc`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc).[`challengeTrackerId`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc#challengetrackerid)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1540](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1540)

The collection ID

#### Implementation of

[`iMerkleChallengeTrackerDoc`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc).[`collectionId`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc#collectionid)

***

### usedLeafIndices

> **usedLeafIndices**: [`UsedLeafStatus`](/sdk/reference/classes/used-leaf-status)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1544](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1544)

The used leaf indices for each challenge. A leaf index is the leaf location in the bottommost layer of the Merkle tree

#### Implementation of

[`iMerkleChallengeTrackerDoc`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc).[`usedLeafIndices`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc#usedleafindices)

## Methods

### clone()

> **clone**(): `MerkleChallengeTrackerDoc`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`MerkleChallengeTrackerDoc`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `MerkleChallengeTrackerDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1563](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1563)

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

`MerkleChallengeTrackerDoc`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1559](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1559)

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
