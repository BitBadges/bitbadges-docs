---
description: "AddressChecks defines checks for address types (EVM contract, liquidity pool, etc.)"
---

# Class: AddressChecks

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1478](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1478)

AddressChecks defines checks for address types (EVM contract, liquidity pool, etc.)

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`AddressChecks`\>

## Implements

- [`iAddressChecks`](/sdk/reference/interfaces/i-address-checks)

## Constructors

### Constructor

> **new AddressChecks**(`msg`): `AddressChecks`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1484](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1484)

#### Parameters

##### msg

[`iAddressChecks`](/sdk/reference/interfaces/i-address-checks)

#### Returns

`AddressChecks`

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### mustBeEvmContract?

> `optional` **mustBeEvmContract?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1479](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1479)

Require the address to be an EVM contract (has code).

#### Implementation of

[`iAddressChecks`](/sdk/reference/interfaces/i-address-checks).[`mustBeEvmContract`](/sdk/reference/interfaces/i-address-checks#mustbeevmcontract)

***

### mustBeLiquidityPool?

> `optional` **mustBeLiquidityPool?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1481](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1481)

Require the address to be a liquidity pool.

#### Implementation of

[`iAddressChecks`](/sdk/reference/interfaces/i-address-checks).[`mustBeLiquidityPool`](/sdk/reference/interfaces/i-address-checks#mustbeliquiditypool)

***

### mustNotBeEvmContract?

> `optional` **mustNotBeEvmContract?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1480](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1480)

Require the address to not be an EVM contract (no code).

#### Implementation of

[`iAddressChecks`](/sdk/reference/interfaces/i-address-checks).[`mustNotBeEvmContract`](/sdk/reference/interfaces/i-address-checks#mustnotbeevmcontract)

***

### mustNotBeLiquidityPool?

> `optional` **mustNotBeLiquidityPool?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1482](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1482)

Require the address to not be a liquidity pool.

#### Implementation of

[`iAddressChecks`](/sdk/reference/interfaces/i-address-checks).[`mustNotBeLiquidityPool`](/sdk/reference/interfaces/i-address-checks#mustnotbeliquiditypool)

## Methods

### clone()

> **clone**(): `AddressChecks`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`AddressChecks`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`clone`](/sdk/reference/classes/custom-type-class#clone)

***

### ~~convert()~~

> **convert**\<`U`\>(`convertFunction`, `options?`): `AddressChecks`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1492](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1492)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`AddressChecks`

#### Deprecated

This function is unnecessary as this field has no numeric types.
Please use the `.clone()` method instead.

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`convert`](/sdk/reference/classes/custom-type-class#convert)

***

### equals()

> **equals**\<`U`\>(`other`, `normalizeNumberTypes?`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:101](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L101)

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

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`equals`](/sdk/reference/classes/custom-type-class#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:111](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L111)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`getNumberFieldNames`](/sdk/reference/classes/custom-type-class#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L115)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`hasNumberFields`](/sdk/reference/classes/custom-type-class#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L93)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`toJson`](/sdk/reference/classes/custom-type-class#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L97)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`toJsonString`](/sdk/reference/classes/custom-type-class#tojsonstring)

***

### toProto()

> **toProto**(): `AddressChecks`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1501](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1501)

#### Returns

`AddressChecks`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `AddressChecks`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1510](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1510)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`AddressChecks`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `AddressChecks`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1514](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1514)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`AddressChecks`

***

### fromProto()

> `static` **fromProto**(`item`): `AddressChecks`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1518](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1518)

#### Parameters

##### item

`AddressChecks`

#### Returns

`AddressChecks`
