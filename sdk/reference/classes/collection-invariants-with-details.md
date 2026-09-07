---
description: "Collection invariants with EVM query challenges as WithDetails (metadata populated). Used on BitBadgesCollection API responses."
---

# Class: CollectionInvariantsWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1758](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1758)

Collection invariants with EVM query challenges as WithDetails (metadata populated).
Used on BitBadgesCollection API responses.

## Extends

- [`CollectionInvariants`](/sdk/reference/classes/collection-invariants)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iCollectionInvariantsWithDetails`](/sdk/reference/interfaces/i-collection-invariants-with-details)\<`T`\>

## Constructors

### Constructor

> **new CollectionInvariantsWithDetails**\<`T`\>(`data`): `CollectionInvariantsWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1764](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1764)

#### Parameters

##### data

[`iCollectionInvariantsWithDetails`](/sdk/reference/interfaces/i-collection-invariants-with-details)\<`T`\>

#### Returns

`CollectionInvariantsWithDetails`\<`T`\>

#### Overrides

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants).[`constructor`](/sdk/reference/classes/collection-invariants#constructor)

## Properties

### cosmosCoinBackedPath?

> `optional` **cosmosCoinBackedPath?**: [`CosmosCoinBackedPath`](/sdk/reference/classes/cosmos-coin-backed-path)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1678](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1678)

The IBC backed (sdk.coin) path for the collection. Only one path is allowed.

#### Implementation of

[`iCollectionInvariantsWithDetails`](/sdk/reference/interfaces/i-collection-invariants-with-details).[`cosmosCoinBackedPath`](/sdk/reference/interfaces/i-collection-invariants-with-details#cosmoscoinbackedpath)

#### Inherited from

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants).[`cosmosCoinBackedPath`](/sdk/reference/classes/collection-invariants#cosmoscoinbackedpath)

***

### disablePoolCreation

> **disablePoolCreation**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1690](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1690)

If true, disallows pool creation with this collection's assets.
When true, any attempt to create a pool with assets from this collection will fail.

#### Implementation of

[`iCollectionInvariantsWithDetails`](/sdk/reference/interfaces/i-collection-invariants-with-details).[`disablePoolCreation`](/sdk/reference/interfaces/i-collection-invariants-with-details#disablepoolcreation)

#### Inherited from

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants).[`disablePoolCreation`](/sdk/reference/classes/collection-invariants#disablepoolcreation)

***

### evmQueryChallenges?

> `optional` **evmQueryChallenges?**: [`EVMQueryChallengeWithDetails`](/sdk/reference/classes/evm-query-challenge-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1762](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1762)

EVM query invariants that must pass after all transfers complete.
These are checked once per message after all balance updates, with access to ALL recipient addresses.

#### Implementation of

[`iCollectionInvariantsWithDetails`](/sdk/reference/interfaces/i-collection-invariants-with-details).[`evmQueryChallenges`](/sdk/reference/interfaces/i-collection-invariants-with-details#evmquerychallenges)

#### Overrides

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants).[`evmQueryChallenges`](/sdk/reference/classes/collection-invariants#evmquerychallenges)

***

### maxSupplyPerId

> **maxSupplyPerId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1673](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1673)

Maximum supply per token ID. If set, no balance can exceed this amount.
This prevents any single token ID from having more than the specified supply.

#### Implementation of

[`iCollectionInvariantsWithDetails`](/sdk/reference/interfaces/i-collection-invariants-with-details).[`maxSupplyPerId`](/sdk/reference/interfaces/i-collection-invariants-with-details#maxsupplyperid)

#### Inherited from

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants).[`maxSupplyPerId`](/sdk/reference/classes/collection-invariants#maxsupplyperid)

***

### noCustomOwnershipTimes

> **noCustomOwnershipTimes**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1667](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1667)

If true, all ownership times must be full ranges [{ start: 1, end: GoMaxUInt64 }].
This prevents time-based restrictions on token ownership.

#### Implementation of

[`iCollectionInvariantsWithDetails`](/sdk/reference/interfaces/i-collection-invariants-with-details).[`noCustomOwnershipTimes`](/sdk/reference/interfaces/i-collection-invariants-with-details#nocustomownershiptimes)

#### Inherited from

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants).[`noCustomOwnershipTimes`](/sdk/reference/classes/collection-invariants#nocustomownershiptimes)

***

### noForcefulPostMintTransfers

> **noForcefulPostMintTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1684](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1684)

If true, disallows any collection approvals that have overridesFromOutgoingApprovals or overridesToIncomingApprovals set to true.
This prevents forceful post-mint transfers that bypass user-level approvals.

#### Implementation of

[`iCollectionInvariantsWithDetails`](/sdk/reference/interfaces/i-collection-invariants-with-details).[`noForcefulPostMintTransfers`](/sdk/reference/interfaces/i-collection-invariants-with-details#noforcefulpostminttransfers)

#### Inherited from

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants).[`noForcefulPostMintTransfers`](/sdk/reference/classes/collection-invariants#noforcefulpostminttransfers)

## Methods

### clone()

> **clone**(): [`CollectionInvariants`](/sdk/reference/classes/collection-invariants)

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants)

#### Inherited from

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants).[`clone`](/sdk/reference/classes/collection-invariants#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `CollectionInvariantsWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1771](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1771)

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

`CollectionInvariantsWithDetails`\<`U`\>

#### Overrides

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants).[`convert`](/sdk/reference/classes/collection-invariants#convert)

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

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants).[`equals`](/sdk/reference/classes/collection-invariants#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1708](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1708)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants).[`getNumberFieldNames`](/sdk/reference/classes/collection-invariants#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants).[`hasNumberFields`](/sdk/reference/classes/collection-invariants#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants).[`toJson`](/sdk/reference/classes/collection-invariants#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants).[`toJsonString`](/sdk/reference/classes/collection-invariants#tojsonstring)

***

### toProto()

> **toProto**(): `CollectionInvariants`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1775](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1775)

#### Returns

`CollectionInvariants`

#### Overrides

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants).[`toProto`](/sdk/reference/classes/collection-invariants#toproto)

***

### fromJson()

> `static` **fromJson**\<`T`\>(`jsonValue`, `options?`): [`CollectionInvariants`](/sdk/reference/classes/collection-invariants)\<`T`\>

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

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants)\<`T`\>

#### Inherited from

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants).[`fromJson`](/sdk/reference/classes/collection-invariants#fromjson)

***

### fromJsonString()

> `static` **fromJsonString**\<`T`\>(`jsonString`, `options?`): [`CollectionInvariants`](/sdk/reference/classes/collection-invariants)\<`T`\>

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

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants)\<`T`\>

#### Inherited from

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants).[`fromJsonString`](/sdk/reference/classes/collection-invariants#fromjsonstring)

***

### fromProto()

> `static` **fromProto**\<`T`\>(`item`, `convertFunction`): [`CollectionInvariants`](/sdk/reference/classes/collection-invariants)\<`T`\>

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

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants)\<`T`\>

#### Inherited from

[`CollectionInvariants`](/sdk/reference/classes/collection-invariants).[`fromProto`](/sdk/reference/classes/collection-invariants#fromproto)
