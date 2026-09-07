---
description: "CollectionInvariants defines the invariants that apply to a collection. These are set upon genesis and cannot be modified."
---

# Class: CollectionInvariants\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1662](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1662)

CollectionInvariants defines the invariants that apply to a collection.
These are set upon genesis and cannot be modified.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`CollectionInvariants`\<`T`\>\>

## Extended by

- [`CollectionInvariantsWithDetails`](/sdk/reference/classes/collection-invariants-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iCollectionInvariants`](/sdk/reference/interfaces/i-collection-invariants)\<`T`\>

## Constructors

### Constructor

> **new CollectionInvariants**\<`T`\>(`data`): `CollectionInvariants`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1698](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1698)

#### Parameters

##### data

[`iCollectionInvariants`](/sdk/reference/interfaces/i-collection-invariants)\<`T`\>

#### Returns

`CollectionInvariants`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### cosmosCoinBackedPath?

> `optional` **cosmosCoinBackedPath?**: [`CosmosCoinBackedPath`](/sdk/reference/classes/cosmos-coin-backed-path)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1678](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1678)

The IBC backed (sdk.coin) path for the collection. Only one path is allowed.

#### Implementation of

[`iCollectionInvariants`](/sdk/reference/interfaces/i-collection-invariants).[`cosmosCoinBackedPath`](/sdk/reference/interfaces/i-collection-invariants#cosmoscoinbackedpath)

***

### disablePoolCreation

> **disablePoolCreation**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1690](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1690)

If true, disallows pool creation with this collection's assets.
When true, any attempt to create a pool with assets from this collection will fail.

#### Implementation of

[`iCollectionInvariants`](/sdk/reference/interfaces/i-collection-invariants).[`disablePoolCreation`](/sdk/reference/interfaces/i-collection-invariants#disablepoolcreation)

***

### evmQueryChallenges?

> `optional` **evmQueryChallenges?**: [`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1696](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1696)

EVM query invariants that must pass after all transfers complete.
These are checked once per message after all balance updates, with access to ALL recipient addresses.

#### Implementation of

[`iCollectionInvariants`](/sdk/reference/interfaces/i-collection-invariants).[`evmQueryChallenges`](/sdk/reference/interfaces/i-collection-invariants#evmquerychallenges)

***

### maxSupplyPerId

> **maxSupplyPerId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1673](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1673)

Maximum supply per token ID. If set, no balance can exceed this amount.
This prevents any single token ID from having more than the specified supply.

#### Implementation of

[`iCollectionInvariants`](/sdk/reference/interfaces/i-collection-invariants).[`maxSupplyPerId`](/sdk/reference/interfaces/i-collection-invariants#maxsupplyperid)

***

### noCustomOwnershipTimes

> **noCustomOwnershipTimes**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1667](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1667)

If true, all ownership times must be full ranges [{ start: 1, end: GoMaxUInt64 }].
This prevents time-based restrictions on token ownership.

#### Implementation of

[`iCollectionInvariants`](/sdk/reference/interfaces/i-collection-invariants).[`noCustomOwnershipTimes`](/sdk/reference/interfaces/i-collection-invariants#nocustomownershiptimes)

***

### noForcefulPostMintTransfers

> **noForcefulPostMintTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1684](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1684)

If true, disallows any collection approvals that have overridesFromOutgoingApprovals or overridesToIncomingApprovals set to true.
This prevents forceful post-mint transfers that bypass user-level approvals.

#### Implementation of

[`iCollectionInvariants`](/sdk/reference/interfaces/i-collection-invariants).[`noForcefulPostMintTransfers`](/sdk/reference/interfaces/i-collection-invariants#noforcefulpostminttransfers)

## Methods

### clone()

> **clone**(): `CollectionInvariants`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`CollectionInvariants`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `CollectionInvariants`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1712](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1712)

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

`CollectionInvariants`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1708](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1708)

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

***

### toProto()

> **toProto**(): `CollectionInvariants`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1716](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1716)

#### Returns

`CollectionInvariants`

***

### fromJson()

> `static` **fromJson**\<`T`\>(`jsonValue`, `options?`): `CollectionInvariants`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1732](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1732)

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`CollectionInvariants`\<`T`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`T`\>(`jsonString`, `options?`): `CollectionInvariants`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1736](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1736)

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`CollectionInvariants`\<`T`\>

***

### fromProto()

> `static` **fromProto**\<`T`\>(`item`, `convertFunction`): `CollectionInvariants`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1740](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1740)

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`CollectionInvariants`

##### convertFunction

(`val`) => `T`

#### Returns

`CollectionInvariants`\<`T`\>
