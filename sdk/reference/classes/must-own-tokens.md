---
description: "MustOwnToken is used to represent a must own token for an approval."
---

# Class: MustOwnTokens\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:479](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L479)

MustOwnToken is used to represent a must own token for an approval.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`MustOwnTokens`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iMustOwnTokens`](/sdk/reference/interfaces/i-must-own-tokens)\<`T`\>

## Constructors

### Constructor

> **new MustOwnTokens**\<`T`\>(`mustOwnToken`): `MustOwnTokens`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:488](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L488)

#### Parameters

##### mustOwnToken

[`iMustOwnToken`](/sdk/reference/interfaces/i-must-own-token)\<`T`\>

#### Returns

`MustOwnTokens`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### amountRange

> **amountRange**: [`UintRange`](/sdk/reference/classes/uint-range)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:480](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L480)

The min/max acceptable amount of tokens that must be owned (can be any values, including 0-0).

#### Implementation of

[`iMustOwnTokens`](/sdk/reference/interfaces/i-must-own-tokens).[`amountRange`](/sdk/reference/interfaces/i-must-own-tokens#amountrange)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:487](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L487)

The collection IDs to own.

#### Implementation of

[`iMustOwnTokens`](/sdk/reference/interfaces/i-must-own-tokens).[`collectionId`](/sdk/reference/interfaces/i-must-own-tokens#collectionid)

***

### mustSatisfyForAllAssets

> **mustSatisfyForAllAssets**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:483](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L483)

Whether or not the user must own all the specified tokens. If false, we will accept if they meet criteria for at least one token.

#### Implementation of

[`iMustOwnTokens`](/sdk/reference/interfaces/i-must-own-tokens).[`mustSatisfyForAllAssets`](/sdk/reference/interfaces/i-must-own-tokens#mustsatisfyforallassets)

***

### overrideWithCurrentTime

> **overrideWithCurrentTime**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:482](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L482)

Whether or not to override the ownershipTimes with the current time.

#### Implementation of

[`iMustOwnTokens`](/sdk/reference/interfaces/i-must-own-tokens).[`overrideWithCurrentTime`](/sdk/reference/interfaces/i-must-own-tokens#overridewithcurrenttime)

***

### ownershipCheckParty?

> `optional` **ownershipCheckParty?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:485](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L485)

The party to check ownership for. Options are "initiator", "sender", or "recipient". Defaults to "initiator" if empty.

#### Implementation of

[`iMustOwnTokens`](/sdk/reference/interfaces/i-must-own-tokens).[`ownershipCheckParty`](/sdk/reference/interfaces/i-must-own-tokens#ownershipcheckparty)

***

### ownershipTimes

> **ownershipTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:484](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L484)

The range of the times that the tokens must be owned.

#### Implementation of

[`iMustOwnTokens`](/sdk/reference/interfaces/i-must-own-tokens).[`ownershipTimes`](/sdk/reference/interfaces/i-must-own-tokens#ownershiptimes)

***

### tokenIds

> **tokenIds**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:481](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L481)

The range of the token IDs that must be owned.

#### Implementation of

[`iMustOwnTokens`](/sdk/reference/interfaces/i-must-own-tokens).[`tokenIds`](/sdk/reference/interfaces/i-must-own-tokens#tokenids)

## Methods

### clone()

> **clone**(): `MustOwnTokens`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`MustOwnTokens`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `MustOwnTokens`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:503](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L503)

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

`MustOwnTokens`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:499](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L499)

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

> **toProto**(): `MustOwnTokens`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:507](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L507)

#### Returns

`MustOwnTokens`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `MustOwnTokens`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:511](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L511)

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

`MustOwnTokens`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `MustOwnTokens`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:519](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L519)

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

`MustOwnTokens`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `MustOwnTokens`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:527](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L527)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`MustOwnTokens`

##### convertFunction

(`item`) => `U`

#### Returns

`MustOwnTokens`\<`U`\>
