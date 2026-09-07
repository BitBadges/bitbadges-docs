---
description: "DynamicStore is a flexible storage object that can store arbitrary data. It is identified by a unique ID assigned by the blockchain, which is a uint64 that…"
---

# Class: DynamicStore\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1572](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1572)

DynamicStore is a flexible storage object that can store arbitrary data.
It is identified by a unique ID assigned by the blockchain, which is a uint64 that increments.
Dynamic stores are created by users and can only be updated or deleted by their creator.
They provide a way to store custom data on-chain with proper access control.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`DynamicStore`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iDynamicStore`](/sdk/reference/interfaces/i-dynamic-store)\<`T`\>

## Constructors

### Constructor

> **new DynamicStore**\<`T`\>(`dynamicStore`): `DynamicStore`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1580](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1580)

#### Parameters

##### dynamicStore

[`iDynamicStore`](/sdk/reference/interfaces/i-dynamic-store)\<`T`\>

#### Returns

`DynamicStore`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### createdBy

> **createdBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1574](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1574)

The address of the creator of this dynamic store.

#### Implementation of

[`iDynamicStore`](/sdk/reference/interfaces/i-dynamic-store).[`createdBy`](/sdk/reference/interfaces/i-dynamic-store#createdby)

***

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1578](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1578)

Custom data field for storing arbitrary data associated with this dynamic store.

#### Implementation of

[`iDynamicStore`](/sdk/reference/interfaces/i-dynamic-store).[`customData`](/sdk/reference/interfaces/i-dynamic-store#customdata)

***

### defaultValue

> **defaultValue**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1575](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1575)

The default value for uninitialized addresses (true/false).

#### Implementation of

[`iDynamicStore`](/sdk/reference/interfaces/i-dynamic-store).[`defaultValue`](/sdk/reference/interfaces/i-dynamic-store#defaultvalue)

***

### globalEnabled

> **globalEnabled**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1576](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1576)

Global kill switch state (defaults to true on creation, can be toggled via UpdateDynamicStore).
When false, all approvals using this store via DynamicStoreChallenge will fail immediately.

#### Implementation of

[`iDynamicStore`](/sdk/reference/interfaces/i-dynamic-store).[`globalEnabled`](/sdk/reference/interfaces/i-dynamic-store#globalenabled)

***

### storeId

> **storeId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1573](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1573)

The unique identifier for this dynamic store. This is assigned by the blockchain.

#### Implementation of

[`iDynamicStore`](/sdk/reference/interfaces/i-dynamic-store).[`storeId`](/sdk/reference/interfaces/i-dynamic-store#storeid)

***

### uri

> **uri**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1577](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1577)

URI for additional metadata or resources associated with this dynamic store.

#### Implementation of

[`iDynamicStore`](/sdk/reference/interfaces/i-dynamic-store).[`uri`](/sdk/reference/interfaces/i-dynamic-store#uri)

## Methods

### clone()

> **clone**(): `DynamicStore`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`DynamicStore`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `DynamicStore`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1594](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1594)

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

`DynamicStore`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1590](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1590)

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

> **toProto**(): `DynamicStore`

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1609](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1609)

#### Returns

`DynamicStore`

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `DynamicStore`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/misc.ts:1598](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/misc.ts#L1598)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`DynamicStore`

##### convertFunction

(`item`) => `U`

#### Returns

`DynamicStore`\<`U`\>
