---
description: "UintRange represents a range of numbers from some start ID to some end ID, inclusive."
---

# Class: UintRange\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L17)

UintRange represents a range of numbers from some start ID to some end ID, inclusive.

See https://docs.bitbadges.io/for-developers/core-concepts/uint-ranges for more information.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`UintRange`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>

## Constructors

### Constructor

> **new UintRange**\<`T`\>(`uintRange`): `UintRange`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L21)

#### Parameters

##### uintRange

[`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>

#### Returns

`UintRange`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### end

> **end**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:19](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L19)

The end of the range, inclusive.

#### Implementation of

[`iUintRange`](/sdk/reference/interfaces/i-uint-range).[`end`](/sdk/reference/interfaces/i-uint-range#end)

***

### start

> **start**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:18](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L18)

The start of the range.

#### Implementation of

[`iUintRange`](/sdk/reference/interfaces/i-uint-range).[`start`](/sdk/reference/interfaces/i-uint-range#start)

## Methods

### clone()

> **clone**(): `UintRange`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`UintRange`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `UintRange`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:31](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L31)

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

`UintRange`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L27)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`getNumberFieldNames`](/sdk/reference/classes/base-number-type-class#getnumberfieldnames)

***

### getOverlapDetails()

> **getOverlapDetails**(`toCheck`): \[[`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>, [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>\]

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:148](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L148)

Returns the [inCurrentButNotInToCheck, overlaps].

#### Parameters

##### toCheck

[`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\> \| [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[] \| [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

#### Returns

\[[`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>, [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>\]

***

### getOverlaps()

> **getOverlaps**(`toRemove`): [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:221](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L221)

Returns the overlap between the current range and the provided range.

#### Parameters

##### toRemove

[`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\> \| [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[] \| [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

#### Returns

[`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

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

### invert()

> **invert**(`minId?`, `maxId?`): [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:124](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L124)

Returns a new UintRangeArray that is the result of inverting the current range (i.e. getting all values within the bounds that are not in the current range).

#### Parameters

##### minId?

[`NumberType`](/sdk/reference/type-aliases/number-type) = `1n`

##### maxId?

[`NumberType`](/sdk/reference/type-aliases/number-type) = `GO_MAX_UINT_64`

#### Returns

[`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

***

### isFull()

> **isFull**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:80](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L80)

Returns true if the range is full (i.e. start = 1 and end = 18446744073709551615).

This is considered full in the context of token IDs and times.

#### Returns

`boolean`

***

### overlaps()

> **overlaps**(`other`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:111](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L111)

Returns true if the range overlaps with the other range.

#### Parameters

##### other

[`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\> \| [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[] \| [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

#### Returns

`boolean`

***

### search()

> **search**(`id`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:134](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L134)

Searches for a specific ID within the range.

#### Parameters

##### id

[`NumberType`](/sdk/reference/type-aliases/number-type)

#### Returns

`boolean`

***

### size()

> **size**(): `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:70](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L70)

Returns the size of the range (i.e. end - start + 1).

#### Returns

`T`

***

### toArray()

> **toArray**(): [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:225](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L225)

#### Returns

[`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

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

> **toProto**(): `UintRange`

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L40)

#### Returns

`UintRange`

***

### createUintRange()

> `protected` `static` **createUintRange**\<`T`\>(`start`, `end`): `UintRange`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:138](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L138)

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### start

`T`

##### end

`T`

#### Returns

`UintRange`\<`T`\>

***

### From()

> `static` **From**\<`T`\>(`val`): `UintRange`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:101](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L101)

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### val

`T`

#### Returns

`UintRange`\<`T`\>

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `UintRange`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L44)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### jsonValue

`JsonValue`

##### convertFunction

(`item`) => `U`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`UintRange`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `UintRange`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:52](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L52)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### jsonString

`string`

##### convertFunction

(`item`) => `U`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`UintRange`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `UintRange`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:60](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L60)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`UintRange`

##### convertFunction

(`item`) => `U`

#### Returns

`UintRange`\<`U`\>

***

### FullRange()

> `static` **FullRange**(): `UintRange`\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:87](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L87)

Returns a new UintRange from 1 to 18446744073709551615 (max uint64).

#### Returns

`UintRange`\<`bigint`\>

***

### FullRanges()

> `static` **FullRanges**(): [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/uintRanges.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/uintRanges.ts#L97)

Returns a new UintRangeArray from 1 to 18446744073709551615 (max uint64).

#### Returns

[`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`bigint`\>
