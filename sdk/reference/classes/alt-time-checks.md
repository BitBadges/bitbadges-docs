---
description: "AltTimeChecks defines alternative time-based checks for approval denial. If the transfer time falls within any of the specified offline hours or days, the…"
---

# Class: AltTimeChecks\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1535](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1535)

AltTimeChecks defines alternative time-based checks for approval denial.
If the transfer time falls within any of the specified offline hours or days, the approval is denied.
Uses UTC timezone for neutral timezone approach.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`AltTimeChecks`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iAltTimeChecks`](/sdk/reference/interfaces/i-alt-time-checks)\<`T`\>

## Constructors

### Constructor

> **new AltTimeChecks**\<`T`\>(`msg`): `AltTimeChecks`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1544](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1544)

#### Parameters

##### msg

[`iAltTimeChecks`](/sdk/reference/interfaces/i-alt-time-checks)\<`T`\>

#### Returns

`AltTimeChecks`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### offlineDays?

> `optional` **offlineDays?**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1537](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1537)

Days (0-6, where 0=Sunday, 1=Monday, ..., 6=Saturday) when transfers should be denied.

#### Implementation of

[`iAltTimeChecks`](/sdk/reference/interfaces/i-alt-time-checks).[`offlineDays`](/sdk/reference/interfaces/i-alt-time-checks#offlinedays)

***

### offlineDaysOfMonth?

> `optional` **offlineDaysOfMonth?**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1539](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1539)

Days of month (1-31) when transfers should be denied.

#### Implementation of

[`iAltTimeChecks`](/sdk/reference/interfaces/i-alt-time-checks).[`offlineDaysOfMonth`](/sdk/reference/interfaces/i-alt-time-checks#offlinedaysofmonth)

***

### offlineHours?

> `optional` **offlineHours?**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1536](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1536)

Hours (0-23) when transfers should be denied.

#### Implementation of

[`iAltTimeChecks`](/sdk/reference/interfaces/i-alt-time-checks).[`offlineHours`](/sdk/reference/interfaces/i-alt-time-checks#offlinehours)

***

### offlineMonths?

> `optional` **offlineMonths?**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1538](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1538)

Months (1-12, where 1=January, 12=December) when transfers should be denied.

#### Implementation of

[`iAltTimeChecks`](/sdk/reference/interfaces/i-alt-time-checks).[`offlineMonths`](/sdk/reference/interfaces/i-alt-time-checks#offlinemonths)

***

### offlineWeeksOfYear?

> `optional` **offlineWeeksOfYear?**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1540](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1540)

Weeks of year (1-52) when transfers should be denied. Uses ISO 8601 week numbering.

#### Implementation of

[`iAltTimeChecks`](/sdk/reference/interfaces/i-alt-time-checks).[`offlineWeeksOfYear`](/sdk/reference/interfaces/i-alt-time-checks#offlineweeksofyear)

***

### timezoneOffsetMinutes?

> `optional` **timezoneOffsetMinutes?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1541](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1541)

Timezone offset magnitude in minutes from UTC. Default 0 = UTC.

#### Implementation of

[`iAltTimeChecks`](/sdk/reference/interfaces/i-alt-time-checks).[`timezoneOffsetMinutes`](/sdk/reference/interfaces/i-alt-time-checks#timezoneoffsetminutes)

***

### timezoneOffsetNegative?

> `optional` **timezoneOffsetNegative?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1542](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1542)

If true, the timezone offset is subtracted (west of UTC).

#### Implementation of

[`iAltTimeChecks`](/sdk/reference/interfaces/i-alt-time-checks).[`timezoneOffsetNegative`](/sdk/reference/interfaces/i-alt-time-checks#timezoneoffsetnegative)

## Methods

### clone()

> **clone**(): `AltTimeChecks`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`AltTimeChecks`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `AltTimeChecks`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1559](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1559)

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

`AltTimeChecks`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1555](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1555)

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

> **toProto**(): `AltTimeChecks`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1571](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1571)

#### Returns

`AltTimeChecks`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `AltTimeChecks`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1583](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1583)

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

`AltTimeChecks`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `AltTimeChecks`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1591](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1591)

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

`AltTimeChecks`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `AltTimeChecks`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1599](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1599)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`AltTimeChecks`

##### convertFunction

(`item`) => `U`

#### Returns

`AltTimeChecks`\<`U`\>
