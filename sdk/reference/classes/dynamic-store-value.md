---
description: "DynamicStoreValue stores a boolean value for a specific address in a dynamic store. This allows the creator to set true/false values per address that can be…"
---

# Class: DynamicStoreValue\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1620](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1620)

DynamicStoreValue stores a boolean value for a specific address in a dynamic store.
This allows the creator to set true/false values per address that can be checked during approval.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`DynamicStoreValue`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iDynamicStoreValue`](/sdk/reference/interfaces/i-dynamic-store-value)\<`T`\>

## Constructors

### Constructor

> **new DynamicStoreValue**\<`T`\>(`dynamicStoreValue`): `DynamicStoreValue`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1625](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1625)

#### Parameters

##### dynamicStoreValue

[`iDynamicStoreValue`](/sdk/reference/interfaces/i-dynamic-store-value)\<`T`\>

#### Returns

`DynamicStoreValue`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1622](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1622)

The address for which this value is stored.

#### Implementation of

[`iDynamicStoreValue`](/sdk/reference/interfaces/i-dynamic-store-value).[`address`](/sdk/reference/interfaces/i-dynamic-store-value#address)

***

### storeId

> **storeId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1621](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1621)

The unique identifier for this dynamic store.

#### Implementation of

[`iDynamicStoreValue`](/sdk/reference/interfaces/i-dynamic-store-value).[`storeId`](/sdk/reference/interfaces/i-dynamic-store-value#storeid)

***

### value

> **value**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1623](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1623)

The boolean value (true/false).

#### Implementation of

[`iDynamicStoreValue`](/sdk/reference/interfaces/i-dynamic-store-value).[`value`](/sdk/reference/interfaces/i-dynamic-store-value#value)

## Methods

### clone()

> **clone**(): `DynamicStoreValue`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`DynamicStoreValue`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `DynamicStoreValue`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1636](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1636)

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

`DynamicStoreValue`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1632](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1632)

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

> **toProto**(): `DynamicStoreValue`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1651](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1651)

#### Returns

`DynamicStoreValue`

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `DynamicStoreValue`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1640](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1640)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`DynamicStoreValue`

##### convertFunction

(`item`) => `U`

#### Returns

`DynamicStoreValue`\<`U`\>
