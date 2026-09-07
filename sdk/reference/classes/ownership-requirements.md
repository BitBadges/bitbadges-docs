---
description: "T extends NumberType"
---

# Class: OwnershipRequirements\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts:179](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts#L179)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`OwnershipRequirements`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- `OwnershipRequirements`\<`T`\>

## Constructors

### Constructor

> **new OwnershipRequirements**\<`T`\>(`data`): `OwnershipRequirements`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts:185](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts#L185)

#### Parameters

##### data

`OwnershipRequirements`\<`T`\>

#### Returns

`OwnershipRequirements`\<`T`\>

#### Overrides

`BaseNumberTypeClass<OwnershipRequirements<T>>.constructor`

## Properties

### assets

> **assets**: [`SiwbbAssetDetails`](/sdk/reference/classes/siwbb-asset-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts:180](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts#L180)

#### Implementation of

`OwnershipRequirements.assets`

***

### options?

> `optional` **options?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts:181](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts#L181)

#### numMatchesForVerification?

> `optional` **numMatchesForVerification?**: `T`

#### Implementation of

`OwnershipRequirements.options`

## Methods

### clone()

> **clone**(): `OwnershipRequirements`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`OwnershipRequirements`

#### Implementation of

`OwnershipRequirements.clone`

#### Inherited from

`BaseNumberTypeClass.clone`

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `OwnershipRequirements`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts:195](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts#L195)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`val`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`OwnershipRequirements`\<`U`\>

#### Implementation of

`OwnershipRequirements.convert`

#### Overrides

`BaseNumberTypeClass.convert`

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

#### Implementation of

`OwnershipRequirements.equals`

#### Inherited from

`BaseNumberTypeClass.equals`

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts:191](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/blockin.ts#L191)

#### Returns

`string`[]

#### Implementation of

`OwnershipRequirements.getNumberFieldNames`

#### Overrides

`BaseNumberTypeClass.getNumberFieldNames`

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Implementation of

`OwnershipRequirements.hasNumberFields`

#### Inherited from

`BaseNumberTypeClass.hasNumberFields`

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Implementation of

`OwnershipRequirements.toJson`

#### Inherited from

`BaseNumberTypeClass.toJson`

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Implementation of

`OwnershipRequirements.toJsonString`

#### Inherited from

`BaseNumberTypeClass.toJsonString`
