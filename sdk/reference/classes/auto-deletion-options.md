---
description: "T extends NumberType"
---

# Class: AutoDeletionOptions\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:993](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L993)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`AutoDeletionOptions`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iAutoDeletionOptions`](/sdk/reference/interfaces/i-auto-deletion-options)

## Constructors

### Constructor

> **new AutoDeletionOptions**\<`T`\>(`msg`): `AutoDeletionOptions`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:999](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L999)

#### Parameters

##### msg

[`iAutoDeletionOptions`](/sdk/reference/interfaces/i-auto-deletion-options)

#### Returns

`AutoDeletionOptions`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### afterOneUse

> **afterOneUse**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:994](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L994)

Whether the approval should be deleted after one use.

#### Implementation of

[`iAutoDeletionOptions`](/sdk/reference/interfaces/i-auto-deletion-options).[`afterOneUse`](/sdk/reference/interfaces/i-auto-deletion-options#afteroneuse)

***

### afterOverallMaxNumTransfers

> **afterOverallMaxNumTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:995](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L995)

Whether the approval should be deleted after the overall max number of transfers threshold is met.

#### Implementation of

[`iAutoDeletionOptions`](/sdk/reference/interfaces/i-auto-deletion-options).[`afterOverallMaxNumTransfers`](/sdk/reference/interfaces/i-auto-deletion-options#afteroverallmaxnumtransfers)

***

### allowCounterpartyPurge

> **allowCounterpartyPurge**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:996](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L996)

Allow counterparty to purge this approval if they are the only initiator

#### Implementation of

[`iAutoDeletionOptions`](/sdk/reference/interfaces/i-auto-deletion-options).[`allowCounterpartyPurge`](/sdk/reference/interfaces/i-auto-deletion-options#allowcounterpartypurge)

***

### allowPurgeIfExpired

> **allowPurgeIfExpired**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:997](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L997)

Allow others to call PurgeApprovals on behalf of this approval owner

#### Implementation of

[`iAutoDeletionOptions`](/sdk/reference/interfaces/i-auto-deletion-options).[`allowPurgeIfExpired`](/sdk/reference/interfaces/i-auto-deletion-options#allowpurgeifexpired)

## Methods

### clone()

> **clone**(): `AutoDeletionOptions`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`AutoDeletionOptions`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `AutoDeletionOptions`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1011](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1011)

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

`AutoDeletionOptions`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1007](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1007)

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

> **toProto**(): `AutoDeletionOptions`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1015](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1015)

#### Returns

`AutoDeletionOptions`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `AutoDeletionOptions`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1019](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1019)

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

`AutoDeletionOptions`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `AutoDeletionOptions`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1027](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1027)

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

`AutoDeletionOptions`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `AutoDeletionOptions`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1035](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1035)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`AutoDeletionOptions`

##### convertFunction

(`item`) => `U`

#### Returns

`AutoDeletionOptions`\<`U`\>
