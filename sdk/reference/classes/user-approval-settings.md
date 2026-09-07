---
description: "UserApprovalSettings defines issuer-imposed constraints on user-level approvals. Set on collection-level ApprovalCriteria and propagated to user-level…"
---

# Class: UserApprovalSettings\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1664](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1664)

UserApprovalSettings defines issuer-imposed constraints on user-level approvals.
Set on collection-level ApprovalCriteria and propagated to user-level approvals.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`UserApprovalSettings`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iUserApprovalSettings`](/sdk/reference/interfaces/i-user-approval-settings)\<`T`\>

## Constructors

### Constructor

> **new UserApprovalSettings**\<`T`\>(`msg`): `UserApprovalSettings`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1669](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1669)

#### Parameters

##### msg

[`iUserApprovalSettings`](/sdk/reference/interfaces/i-user-approval-settings)\<`T`\>

#### Returns

`UserApprovalSettings`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### allowedDenoms?

> `optional` **allowedDenoms?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1665](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1665)

Restricts which denoms user-level coinTransfers can reference. If empty, all params-allowed denoms are permitted.

#### Implementation of

[`iUserApprovalSettings`](/sdk/reference/interfaces/i-user-approval-settings).[`allowedDenoms`](/sdk/reference/interfaces/i-user-approval-settings#alloweddenoms)

***

### disableUserCoinTransfers?

> `optional` **disableUserCoinTransfers?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1666](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1666)

If true, user-level approvals cannot trigger coinTransfers at all for transfers matched by this collection approval.

#### Implementation of

[`iUserApprovalSettings`](/sdk/reference/interfaces/i-user-approval-settings).[`disableUserCoinTransfers`](/sdk/reference/interfaces/i-user-approval-settings#disableusercointransfers)

***

### userRoyalties?

> `optional` **userRoyalties?**: [`UserRoyalties`](/sdk/reference/classes/user-royalties)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1667](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1667)

User-level royalties to enforce for transfers matched by this collection approval.

#### Implementation of

[`iUserApprovalSettings`](/sdk/reference/interfaces/i-user-approval-settings).[`userRoyalties`](/sdk/reference/interfaces/i-user-approval-settings#userroyalties)

## Methods

### clone()

> **clone**(): `UserApprovalSettings`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`UserApprovalSettings`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `UserApprovalSettings`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1676](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1676)

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

`UserApprovalSettings`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L157)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

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

> **toProto**(): `UserApprovalSettings`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1680](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1680)

#### Returns

`UserApprovalSettings`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `UserApprovalSettings`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1688](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1688)

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

`UserApprovalSettings`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `UserApprovalSettings`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1696](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1696)

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

`UserApprovalSettings`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `UserApprovalSettings`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1704](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1704)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`UserApprovalSettings`

##### convertFunction

(`item`) => `U`

#### Returns

`UserApprovalSettings`\<`U`\>
