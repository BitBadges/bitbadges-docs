---
description: "ApprovalIdentifierDetails is used to represent an exact approval."
---

# Class: ApprovalIdentifierDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:237](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L237)

ApprovalIdentifierDetails is used to represent an exact approval.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`ApprovalIdentifierDetails`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iApprovalIdentifierDetails`](/sdk/reference/interfaces/i-approval-identifier-details)\<`T`\>

## Constructors

### Constructor

> **new ApprovalIdentifierDetails**\<`T`\>(`approvalIdDetails`): `ApprovalIdentifierDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:245](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L245)

#### Parameters

##### approvalIdDetails

[`iApprovalIdentifierDetails`](/sdk/reference/interfaces/i-approval-identifier-details)\<`T`\>

#### Returns

`ApprovalIdentifierDetails`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:241](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L241)

The approval ID of the approval.

#### Implementation of

[`iApprovalIdentifierDetails`](/sdk/reference/interfaces/i-approval-identifier-details).[`approvalId`](/sdk/reference/interfaces/i-approval-identifier-details#approvalid)

***

### approvalLevel

> **approvalLevel**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:242](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L242)

The approval level of the approval "collection", "incoming", or "outgoing".

#### Implementation of

[`iApprovalIdentifierDetails`](/sdk/reference/interfaces/i-approval-identifier-details).[`approvalLevel`](/sdk/reference/interfaces/i-approval-identifier-details#approvallevel)

***

### approverAddress

> **approverAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:243](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L243)

The address of the approval to check. If approvalLevel is "collection", this is blank "".

#### Implementation of

[`iApprovalIdentifierDetails`](/sdk/reference/interfaces/i-approval-identifier-details).[`approverAddress`](/sdk/reference/interfaces/i-approval-identifier-details#approveraddress)

***

### version

> **version**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:244](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L244)

The version of the approval.

#### Implementation of

[`iApprovalIdentifierDetails`](/sdk/reference/interfaces/i-approval-identifier-details).[`version`](/sdk/reference/interfaces/i-approval-identifier-details#version)

## Methods

### clone()

> **clone**(): `ApprovalIdentifierDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:270](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L270)

Deep copies the object and returns a new instance.

#### Returns

`ApprovalIdentifierDetails`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): [`CustomType`](/sdk/reference/interfaces/custom-type)\<`any`\>

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:165](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L165)

Converts the object to a different NumberType equivalent.

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`val`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

[`CustomType`](/sdk/reference/interfaces/custom-type)\<`any`\>

#### Inherited from

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

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:253](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L253)

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

> **toBech32Addresses**(`prefix`): `ApprovalIdentifierDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:302](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L302)

#### Parameters

##### prefix

`string`

#### Returns

`ApprovalIdentifierDetails`\<`T`\>

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

> **toProto**(): `ApprovalIdentifierDetails`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:266](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L266)

#### Returns

`ApprovalIdentifierDetails`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `ApprovalIdentifierDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:274](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L274)

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

`ApprovalIdentifierDetails`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `ApprovalIdentifierDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:282](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L282)

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

`ApprovalIdentifierDetails`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `ApprovalIdentifierDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:290](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L290)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`ApprovalIdentifierDetails`

##### convertFunction

(`item`) => `U`

#### Returns

`ApprovalIdentifierDetails`\<`U`\>

***

### required()

> `static` **required**(): `ApprovalIdentifierDetails`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:257](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L257)

#### Returns

`ApprovalIdentifierDetails`\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>
