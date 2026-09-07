---
description: "T extends NumberType"
---

# Class: UserPermissionsWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:1053](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L1053)

## Extends

- [`UserPermissions`](/sdk/reference/classes/user-permissions)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iUserPermissionsWithDetails`](/sdk/reference/interfaces/i-user-permissions-with-details)\<`T`\>

## Constructors

### Constructor

> **new UserPermissionsWithDetails**\<`T`\>(`data`): `UserPermissionsWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:1060](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L1060)

#### Parameters

##### data

[`iUserPermissionsWithDetails`](/sdk/reference/interfaces/i-user-permissions-with-details)\<`T`\>

#### Returns

`UserPermissionsWithDetails`\<`T`\>

#### Overrides

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`constructor`](/sdk/reference/classes/user-permissions#constructor)

## Properties

### canUpdateAutoApproveAllIncomingTransfers

> **canUpdateAutoApproveAllIncomingTransfers**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:1058](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L1058)

The permissions for updating auto-approving all incoming transfers. If auto-approve is enabled, then the user will be approved by default for all incoming transfers.

#### Implementation of

[`iUserPermissionsWithDetails`](/sdk/reference/interfaces/i-user-permissions-with-details).[`canUpdateAutoApproveAllIncomingTransfers`](/sdk/reference/interfaces/i-user-permissions-with-details#canupdateautoapproveallincomingtransfers)

#### Overrides

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`canUpdateAutoApproveAllIncomingTransfers`](/sdk/reference/classes/user-permissions#canupdateautoapproveallincomingtransfers)

***

### canUpdateAutoApproveSelfInitiatedIncomingTransfers

> **canUpdateAutoApproveSelfInitiatedIncomingTransfers**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:1057](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L1057)

The permissions for updating auto-approving self-initiated incoming transfers. If auto-approve is enabled, then the user will be approved by default for all incoming transfers that are self-initiated.

#### Implementation of

[`iUserPermissionsWithDetails`](/sdk/reference/interfaces/i-user-permissions-with-details).[`canUpdateAutoApproveSelfInitiatedIncomingTransfers`](/sdk/reference/interfaces/i-user-permissions-with-details#canupdateautoapproveselfinitiatedincomingtransfers)

#### Overrides

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`canUpdateAutoApproveSelfInitiatedIncomingTransfers`](/sdk/reference/classes/user-permissions#canupdateautoapproveselfinitiatedincomingtransfers)

***

### canUpdateAutoApproveSelfInitiatedOutgoingTransfers

> **canUpdateAutoApproveSelfInitiatedOutgoingTransfers**: [`ActionPermission`](/sdk/reference/classes/action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:1056](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L1056)

The permissions for updating auto-approving self-initiated outgoing transfers. If auto-approve is enabled, then the user will be approved by default for all outgoing transfers that are self-initiated.

#### Implementation of

[`iUserPermissionsWithDetails`](/sdk/reference/interfaces/i-user-permissions-with-details).[`canUpdateAutoApproveSelfInitiatedOutgoingTransfers`](/sdk/reference/interfaces/i-user-permissions-with-details#canupdateautoapproveselfinitiatedoutgoingtransfers)

#### Overrides

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`canUpdateAutoApproveSelfInitiatedOutgoingTransfers`](/sdk/reference/classes/user-permissions#canupdateautoapproveselfinitiatedoutgoingtransfers)

***

### canUpdateIncomingApprovals

> **canUpdateIncomingApprovals**: [`UserIncomingApprovalPermissionWithDetails`](/sdk/reference/classes/user-incoming-approval-permission-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:1054](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L1054)

The list of permissions for updating approved incoming transfers.

#### Implementation of

[`iUserPermissionsWithDetails`](/sdk/reference/interfaces/i-user-permissions-with-details).[`canUpdateIncomingApprovals`](/sdk/reference/interfaces/i-user-permissions-with-details#canupdateincomingapprovals)

#### Overrides

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`canUpdateIncomingApprovals`](/sdk/reference/classes/user-permissions#canupdateincomingapprovals)

***

### canUpdateOutgoingApprovals

> **canUpdateOutgoingApprovals**: [`UserOutgoingApprovalPermissionWithDetails`](/sdk/reference/classes/user-outgoing-approval-permission-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:1055](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L1055)

The list of permissions for updating approved outgoing transfers.

#### Implementation of

[`iUserPermissionsWithDetails`](/sdk/reference/interfaces/i-user-permissions-with-details).[`canUpdateOutgoingApprovals`](/sdk/reference/interfaces/i-user-permissions-with-details#canupdateoutgoingapprovals)

#### Overrides

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`canUpdateOutgoingApprovals`](/sdk/reference/classes/user-permissions#canupdateoutgoingapprovals)

## Methods

### clone()

> **clone**(): [`UserPermissions`](/sdk/reference/classes/user-permissions)

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

[`UserPermissions`](/sdk/reference/classes/user-permissions)

#### Inherited from

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`clone`](/sdk/reference/classes/user-permissions#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `UserPermissionsWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:1079](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L1079)

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

`UserPermissionsWithDetails`\<`U`\>

#### Overrides

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`convert`](/sdk/reference/classes/user-permissions#convert)

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

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`equals`](/sdk/reference/classes/user-permissions#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L157)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`getNumberFieldNames`](/sdk/reference/classes/user-permissions#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`hasNumberFields`](/sdk/reference/classes/user-permissions#hasnumberfields)

***

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): [`UserPermissions`](/sdk/reference/classes/user-permissions)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:128](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L128)

#### Parameters

##### prefix

`string`

#### Returns

[`UserPermissions`](/sdk/reference/classes/user-permissions)\<`T`\>

#### Inherited from

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`toBech32Addresses`](/sdk/reference/classes/user-permissions#tobech32addresses)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`toJson`](/sdk/reference/classes/user-permissions#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`toJsonString`](/sdk/reference/classes/user-permissions#tojsonstring)

***

### toProto()

> **toProto**(): `UserPermissions`

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:55](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L55)

#### Returns

`UserPermissions`

#### Inherited from

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`toProto`](/sdk/reference/classes/user-permissions#toproto)

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): [`UserPermissions`](/sdk/reference/classes/user-permissions)\<`U`\>

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

[`UserPermissions`](/sdk/reference/classes/user-permissions)\<`U`\>

#### Inherited from

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`fromJson`](/sdk/reference/classes/user-permissions#fromjson)

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): [`UserPermissions`](/sdk/reference/classes/user-permissions)\<`U`\>

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

[`UserPermissions`](/sdk/reference/classes/user-permissions)\<`U`\>

#### Inherited from

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`fromJsonString`](/sdk/reference/classes/user-permissions#fromjsonstring)

***

### fromProto()

> `static` **fromProto**\<`U`\>(`protoMsg`, `convertFunction`): [`UserPermissions`](/sdk/reference/classes/user-permissions)\<`U`\>

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

[`UserPermissions`](/sdk/reference/classes/user-permissions)\<`U`\>

#### Inherited from

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`fromProto`](/sdk/reference/classes/user-permissions#fromproto)

***

### InitEmpty()

> `static` **InitEmpty**(): [`UserPermissions`](/sdk/reference/classes/user-permissions)\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/permissions.ts:118](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/permissions.ts#L118)

#### Returns

[`UserPermissions`](/sdk/reference/classes/user-permissions)\<`bigint`\>

#### Inherited from

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`InitEmpty`](/sdk/reference/classes/user-permissions#initempty)

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

`UserPermissionsWithDetails`\<`U`\>

##### newPermissions

`UserPermissionsWithDetails`\<`U`\>

#### Returns

`Error` \| `null`

#### Inherited from

[`UserPermissions`](/sdk/reference/classes/user-permissions).[`validateUpdate`](/sdk/reference/classes/user-permissions#validateupdate)
