---
description: "T extends NumberType"
---

# Class: DynamicStoreChallenge\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1424](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1424)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`DynamicStoreChallenge`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iDynamicStoreChallenge`](/sdk/reference/interfaces/i-dynamic-store-challenge)\<`T`\>

## Constructors

### Constructor

> **new DynamicStoreChallenge**\<`T`\>(`msg`): `DynamicStoreChallenge`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1428](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1428)

#### Parameters

##### msg

[`iDynamicStoreChallenge`](/sdk/reference/interfaces/i-dynamic-store-challenge)\<`T`\>

#### Returns

`DynamicStoreChallenge`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### ownershipCheckParty?

> `optional` **ownershipCheckParty?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1426](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1426)

The party to check ownership for. Options are "initiator", "sender", "recipient", or any valid bb1 address. If a valid bb1 address is provided, ownership will be checked for that specific address. This enables use cases like halt tokens where ownership is checked for an arbitrary address (e.g., halt token owner). Defaults to "initiator" if empty or if the value is not a recognized option or valid bb1 address.

#### Implementation of

[`iDynamicStoreChallenge`](/sdk/reference/interfaces/i-dynamic-store-challenge).[`ownershipCheckParty`](/sdk/reference/interfaces/i-dynamic-store-challenge#ownershipcheckparty)

***

### storeId

> **storeId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1425](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1425)

The ID of the dynamic store to check.

#### Implementation of

[`iDynamicStoreChallenge`](/sdk/reference/interfaces/i-dynamic-store-challenge).[`storeId`](/sdk/reference/interfaces/i-dynamic-store-challenge#storeid)

## Methods

### clone()

> **clone**(): `DynamicStoreChallenge`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`DynamicStoreChallenge`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `DynamicStoreChallenge`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1438](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1438)

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

`DynamicStoreChallenge`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1434](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1434)

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

> **toProto**(): `DynamicStoreChallenge`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1442](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1442)

#### Returns

`DynamicStoreChallenge`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `DynamicStoreChallenge`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1446](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1446)

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

`DynamicStoreChallenge`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `DynamicStoreChallenge`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1454](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1454)

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

`DynamicStoreChallenge`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `DynamicStoreChallenge`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1462](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1462)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`DynamicStoreChallenge`

##### convertFunction

(`item`) => `U`

#### Returns

`DynamicStoreChallenge`\<`U`\>
