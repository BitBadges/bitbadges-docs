---
description: "PrecalculateBalancesFromApprovalDetails defines the details for precalculating balances from an approval."
---

# Class: PrecalculateBalancesFromApprovalDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:315](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L315)

PrecalculateBalancesFromApprovalDetails defines the details for precalculating balances from an approval.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`PrecalculateBalancesFromApprovalDetails`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iPrecalculateBalancesFromApprovalDetails`](/sdk/reference/interfaces/i-precalculate-balances-from-approval-details)\<`T`\>

## Constructors

### Constructor

> **new PrecalculateBalancesFromApprovalDetails**\<`T`\>(`data`): `PrecalculateBalancesFromApprovalDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:325](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L325)

#### Parameters

##### data

[`iPrecalculateBalancesFromApprovalDetails`](/sdk/reference/interfaces/i-precalculate-balances-from-approval-details)\<`T`\>

#### Returns

`PrecalculateBalancesFromApprovalDetails`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:319](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L319)

The approval ID of the approval.

#### Implementation of

[`iPrecalculateBalancesFromApprovalDetails`](/sdk/reference/interfaces/i-precalculate-balances-from-approval-details).[`approvalId`](/sdk/reference/interfaces/i-precalculate-balances-from-approval-details#approvalid)

***

### approvalLevel

> **approvalLevel**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:320](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L320)

The approval level of the approval "collection", "incoming", or "outgoing".

#### Implementation of

[`iPrecalculateBalancesFromApprovalDetails`](/sdk/reference/interfaces/i-precalculate-balances-from-approval-details).[`approvalLevel`](/sdk/reference/interfaces/i-precalculate-balances-from-approval-details#approvallevel)

***

### approverAddress

> **approverAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:321](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L321)

The address of the approval to check. If approvalLevel is "collection", this is blank "".

#### Implementation of

[`iPrecalculateBalancesFromApprovalDetails`](/sdk/reference/interfaces/i-precalculate-balances-from-approval-details).[`approverAddress`](/sdk/reference/interfaces/i-precalculate-balances-from-approval-details#approveraddress)

***

### precalculationOptions?

> `optional` **precalculationOptions?**: [`PrecalculationOptions`](/sdk/reference/classes/precalculation-options)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:323](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L323)

The options for precalculating the balances.

#### Implementation of

[`iPrecalculateBalancesFromApprovalDetails`](/sdk/reference/interfaces/i-precalculate-balances-from-approval-details).[`precalculationOptions`](/sdk/reference/interfaces/i-precalculate-balances-from-approval-details#precalculationoptions)

***

### version

> **version**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:322](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L322)

The version of the approval.

#### Implementation of

[`iPrecalculateBalancesFromApprovalDetails`](/sdk/reference/interfaces/i-precalculate-balances-from-approval-details).[`version`](/sdk/reference/interfaces/i-precalculate-balances-from-approval-details#version)

## Methods

### clone()

> **clone**(): `PrecalculateBalancesFromApprovalDetails`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`PrecalculateBalancesFromApprovalDetails`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `PrecalculateBalancesFromApprovalDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:338](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L338)

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

`PrecalculateBalancesFromApprovalDetails`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:334](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L334)

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

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): `PrecalculateBalancesFromApprovalDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:381](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L381)

#### Parameters

##### prefix

`string`

#### Returns

`PrecalculateBalancesFromApprovalDetails`\<`T`\>

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

> **toProto**(): `PrecalculateBalancesFromApprovalDetails`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:342](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L342)

#### Returns

`PrecalculateBalancesFromApprovalDetails`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `PrecalculateBalancesFromApprovalDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:346](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L346)

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

`PrecalculateBalancesFromApprovalDetails`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `PrecalculateBalancesFromApprovalDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:357](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L357)

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

`PrecalculateBalancesFromApprovalDetails`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `PrecalculateBalancesFromApprovalDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:368](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L368)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`PrecalculateBalancesFromApprovalDetails`

##### convertFunction

(`item`) => `U`

#### Returns

`PrecalculateBalancesFromApprovalDetails`\<`U`\>
