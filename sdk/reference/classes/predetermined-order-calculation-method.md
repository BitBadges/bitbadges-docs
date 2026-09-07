---
description: "PredeterminedOrderCalculationMethod represents the order calculation method for the predetermined balances. Only one option can be set to true. For manual…"
---

# Class: PredeterminedOrderCalculationMethod

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:744](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L744)

PredeterminedOrderCalculationMethod represents the order calculation method for the predetermined balances. Only one option can be set to true.
For manual balances, the order number corresponds to the index of the balance in the array.
For incremented balances, the order number corresponds to the number of times we increment.

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`PredeterminedOrderCalculationMethod`\>

## Implements

- [`iPredeterminedOrderCalculationMethod`](/sdk/reference/interfaces/i-predetermined-order-calculation-method)

## Constructors

### Constructor

> **new PredeterminedOrderCalculationMethod**(`msg`): `PredeterminedOrderCalculationMethod`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:755](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L755)

#### Parameters

##### msg

[`iPredeterminedOrderCalculationMethod`](/sdk/reference/interfaces/i-predetermined-order-calculation-method)

#### Returns

`PredeterminedOrderCalculationMethod`

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### challengeTrackerId

> **challengeTrackerId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:753](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L753)

Use the merkle challenge leaf index as the order number. Must specify ONE merkle challenge with the useLeafIndexForTransferOrder flag set to true. If so, we will use the leaf index of each merkle proof to calculate the order number. This is used to reserve specific balances for specific leaves (such as codes or whitelist address leafs)

#### Implementation of

[`iPredeterminedOrderCalculationMethod`](/sdk/reference/interfaces/i-predetermined-order-calculation-method).[`challengeTrackerId`](/sdk/reference/interfaces/i-predetermined-order-calculation-method#challengetrackerid)

***

### useMerkleChallengeLeafIndex

> **useMerkleChallengeLeafIndex**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:752](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L752)

Use the merkle challenge leaf index as the order number. Must specify ONE merkle challenge with the useLeafIndexForTransferOrder flag set to true. If so, we will use the leaf index of each merkle proof to calculate the order number. This is used to reserve specific balances for specific leaves (such as codes or whitelist address leafs)

#### Implementation of

[`iPredeterminedOrderCalculationMethod`](/sdk/reference/interfaces/i-predetermined-order-calculation-method).[`useMerkleChallengeLeafIndex`](/sdk/reference/interfaces/i-predetermined-order-calculation-method#usemerklechallengeleafindex)

***

### useOverallNumTransfers

> **useOverallNumTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:748](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L748)

Use the overall number of transfers this approval has been used with as the order number. Ex: If this approval has been used 2 times by ANY address, then the order number for the next transfer will be 3.

#### Implementation of

[`iPredeterminedOrderCalculationMethod`](/sdk/reference/interfaces/i-predetermined-order-calculation-method).[`useOverallNumTransfers`](/sdk/reference/interfaces/i-predetermined-order-calculation-method#useoverallnumtransfers)

***

### usePerFromAddressNumTransfers

> **usePerFromAddressNumTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:750](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L750)

Use the number of times this approval has been used by each from address as the order number. Ex: If this approval has been used 2 times by from address A, then the order number for the next transfer by from address A will be 3.

#### Implementation of

[`iPredeterminedOrderCalculationMethod`](/sdk/reference/interfaces/i-predetermined-order-calculation-method).[`usePerFromAddressNumTransfers`](/sdk/reference/interfaces/i-predetermined-order-calculation-method#useperfromaddressnumtransfers)

***

### usePerInitiatedByAddressNumTransfers

> **usePerInitiatedByAddressNumTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:751](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L751)

Use the number of times this approval has been used by each initiated by address as the order number. Ex: If this approval has been used 2 times by initiated by address A, then the order number for the next transfer by initiated by address A will be 3.

#### Implementation of

[`iPredeterminedOrderCalculationMethod`](/sdk/reference/interfaces/i-predetermined-order-calculation-method).[`usePerInitiatedByAddressNumTransfers`](/sdk/reference/interfaces/i-predetermined-order-calculation-method#useperinitiatedbyaddressnumtransfers)

***

### usePerToAddressNumTransfers

> **usePerToAddressNumTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:749](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L749)

Use the number of times this approval has been used by each to address as the order number. Ex: If this approval has been used 2 times by to address A, then the order number for the next transfer by to address A will be 3.

#### Implementation of

[`iPredeterminedOrderCalculationMethod`](/sdk/reference/interfaces/i-predetermined-order-calculation-method).[`usePerToAddressNumTransfers`](/sdk/reference/interfaces/i-predetermined-order-calculation-method#usepertoaddressnumtransfers)

## Methods

### clone()

> **clone**(): `PredeterminedOrderCalculationMethod`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`PredeterminedOrderCalculationMethod`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`clone`](/sdk/reference/classes/custom-type-class#clone)

***

### ~~convert()~~

> **convert**\<`U`\>(`_convertFunction?`, `options?`): [`CustomType`](/sdk/reference/interfaces/custom-type)\<`any`\>

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:124](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L124)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### \_convertFunction?

(`val`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

[`CustomType`](/sdk/reference/interfaces/custom-type)\<`any`\>

#### Deprecated

This function is unnecessary as this field has no numeric types.
Please use the `.clone()` method instead.

#### Inherited from

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

> **toProto**(): `PredeterminedOrderCalculationMethod`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:765](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L765)

#### Returns

`PredeterminedOrderCalculationMethod`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `PredeterminedOrderCalculationMethod`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:769](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L769)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`PredeterminedOrderCalculationMethod`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `PredeterminedOrderCalculationMethod`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:773](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L773)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`PredeterminedOrderCalculationMethod`

***

### fromProto()

> `static` **fromProto**(`item`): `PredeterminedOrderCalculationMethod`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:777](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L777)

#### Parameters

##### item

`PredeterminedOrderCalculationMethod`

#### Returns

`PredeterminedOrderCalculationMethod`
