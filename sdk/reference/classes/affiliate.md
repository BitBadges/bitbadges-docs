---
description: "Base class that implements the CustomType interface. It provides default implementations for all methods."
---

# Class: Affiliate

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:104](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L104)

Base class that implements the CustomType interface. It provides default implementations for all methods.

IMPORTANT: You must implement the `getNumberFieldNames` method yourself for this class to work properly.
Also, you will need to implement the `convert` method yourself if you want to use it in a typed manner. This
can be done by simply calling `convertClassPropertiesAndMaintainNumberTypes(this, convertFunction, options)` and casting the result to the correct type.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`Affiliate`\>

## Implements

- [`iAffiliate`](/sdk/reference/interfaces/i-affiliate)

## Constructors

### Constructor

> **new Affiliate**(`data`): `Affiliate`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:110](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L110)

#### Parameters

##### data

[`iAffiliate`](/sdk/reference/interfaces/i-affiliate)

#### Returns

`Affiliate`

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:108](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L108)

address is the affiliate recipient address

#### Implementation of

[`iAffiliate`](/sdk/reference/interfaces/i-affiliate).[`address`](/sdk/reference/interfaces/i-affiliate#address)

***

### basisPointsFee

> **basisPointsFee**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:106](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L106)

basis_points_fee is the fee in basis points (1/10000, e.g., 100 = 1%)

#### Implementation of

[`iAffiliate`](/sdk/reference/interfaces/i-affiliate).[`basisPointsFee`](/sdk/reference/interfaces/i-affiliate#basispointsfee)

## Methods

### clone()

> **clone**(): `Affiliate`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`Affiliate`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `Affiliate`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:120](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L120)

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

`Affiliate`

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

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:116](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L116)

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

> **toBech32Addresses**(`prefix`): `Affiliate`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:146](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L146)

#### Parameters

##### prefix

`string`

#### Returns

`Affiliate`

***

### toCosmWasmPayloadString()

> **toCosmWasmPayloadString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:153](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L153)

#### Returns

`string`

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

> **toProto**(): `Affiliate`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:124](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L124)

#### Returns

`Affiliate`

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): `Affiliate`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:131](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L131)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`Affiliate`

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): `Affiliate`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:135](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L135)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

`Affiliate`

***

### fromProto()

> `static` **fromProto**(`item`): `Affiliate`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/tx/classes.ts#L139)

#### Parameters

##### item

`Affiliate`

#### Returns

`Affiliate`
