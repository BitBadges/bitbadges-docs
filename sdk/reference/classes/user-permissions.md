---
description: "UserPermissions represents the permissions of a user and what they can update about their approvals."
---

# Class: UserPermissions\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:31](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L31)

UserPermissions represents the permissions of a user and what they can update about their approvals.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`UserPermissions`\<`T`\>\>

## Extended by

- [`UserPermissionsWithDetails`](/sdk/reference/classes/user-permissions-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iUserPermissions`](/sdk/reference/interfaces/i-user-permissions)\<`T`\>

## Constructors

### Constructor

> **new UserPermissions**\<`T`\>(`msg`): `UserPermissions`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:38](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L38)

#### Parameters

##### msg

[`iUserPermissions`](/sdk/reference/interfaces/i-user-permissions)\<`T`\>

#### Returns

`UserPermissions`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### canUpdateAutoApproveAllIncomingTransfers

> **canUpdateAutoApproveAllIncomingTransfers**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L36)

The permissions for updating auto-approving all incoming transfers. If auto-approve is enabled, then the user will be approved by default for all incoming transfers.

#### Implementation of

[`iUserPermissions`](/sdk/reference/interfaces/i-user-permissions).[`canUpdateAutoApproveAllIncomingTransfers`](/sdk/reference/interfaces/i-user-permissions#canupdateautoapproveallincomingtransfers)

***

### canUpdateAutoApproveSelfInitiatedIncomingTransfers

> **canUpdateAutoApproveSelfInitiatedIncomingTransfers**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:35](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L35)

The permissions for updating auto-approving self-initiated incoming transfers. If auto-approve is enabled, then the user will be approved by default for all incoming transfers that are self-initiated.

#### Implementation of

[`iUserPermissions`](/sdk/reference/interfaces/i-user-permissions).[`canUpdateAutoApproveSelfInitiatedIncomingTransfers`](/sdk/reference/interfaces/i-user-permissions#canupdateautoapproveselfinitiatedincomingtransfers)

***

### canUpdateAutoApproveSelfInitiatedOutgoingTransfers

> **canUpdateAutoApproveSelfInitiatedOutgoingTransfers**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L34)

The permissions for updating auto-approving self-initiated outgoing transfers. If auto-approve is enabled, then the user will be approved by default for all outgoing transfers that are self-initiated.

#### Implementation of

[`iUserPermissions`](/sdk/reference/interfaces/i-user-permissions).[`canUpdateAutoApproveSelfInitiatedOutgoingTransfers`](/sdk/reference/interfaces/i-user-permissions#canupdateautoapproveselfinitiatedoutgoingtransfers)

***

### canUpdateIncomingApprovals

> **canUpdateIncomingApprovals**: [`UserIncomingApprovalPermission`](/sdk/reference/classes/user-incoming-approval-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:33](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L33)

The list of permissions for updating approved incoming transfers.

#### Implementation of

[`iUserPermissions`](/sdk/reference/interfaces/i-user-permissions).[`canUpdateIncomingApprovals`](/sdk/reference/interfaces/i-user-permissions#canupdateincomingapprovals)

***

### canUpdateOutgoingApprovals

> **canUpdateOutgoingApprovals**: [`UserOutgoingApprovalPermission`](/sdk/reference/classes/user-outgoing-approval-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:32](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L32)

The list of permissions for updating approved outgoing transfers.

#### Implementation of

[`iUserPermissions`](/sdk/reference/interfaces/i-user-permissions).[`canUpdateOutgoingApprovals`](/sdk/reference/interfaces/i-user-permissions#canupdateoutgoingapprovals)

## Methods

### clone()

> **clone**(): `UserPermissions`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`UserPermissions`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `UserPermissions`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:51](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L51)

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

`UserPermissions`\<`U`\>

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

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): `UserPermissions`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:128](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L128)

#### Parameters

##### prefix

`string`

#### Returns

`UserPermissions`\<`T`\>

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

> **toProto**(): `UserPermissions`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:55](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L55)

#### Returns

`UserPermissions`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `UserPermissions`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:59](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L59)

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

`UserPermissions`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `UserPermissions`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:67](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L67)

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

`UserPermissions`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`protoMsg`, `convertFunction`): `UserPermissions`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:75](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L75)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### protoMsg

`UserPermissions`

##### convertFunction

(`item`) => `U`

#### Returns

`UserPermissions`\<`U`\>

***

### InitEmpty()

> `static` **InitEmpty**(): `UserPermissions`\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:118](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L118)

#### Returns

`UserPermissions`\<`bigint`\>

***

### validateUpdate()

> `static` **validateUpdate**\<`U`\>(`oldPermissions`, `newPermissions`): `Error` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:94](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L94)

Validates the update of the user permissions from old to new.

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### oldPermissions

[`UserPermissionsWithDetails`](/sdk/reference/classes/user-permissions-with-details)\<`U`\>

##### newPermissions

[`UserPermissionsWithDetails`](/sdk/reference/classes/user-permissions-with-details)\<`U`\>

#### Returns

`Error` \| `null`
