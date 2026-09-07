---
description: "A map from Stargate message types as used in the messages's Any type to Amino types."
---

# Class: AminoTypesClass

Defined in: [packages/bitbadgesjs-sdk/src/transactions/amino/registry.ts:165](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/amino/registry.ts#L165)

A map from Stargate message types as used in the messages's `Any` type
to Amino types.

## Constructors

### Constructor

> **new AminoTypesClass**(`types`): `AminoTypesClass`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/amino/registry.ts:172](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/amino/registry.ts#L172)

#### Parameters

##### types

[`AminoConverters`](/sdk/reference/type-aliases/amino-converters)

#### Returns

`AminoTypesClass`

## Methods

### fromAmino()

> **fromAmino**(`__namedParameters`): [`EncodeObject`](/sdk/reference/interfaces/encode-object)

Defined in: [packages/bitbadgesjs-sdk/src/transactions/amino/registry.ts:222](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/amino/registry.ts#L222)

#### Parameters

##### \_\_namedParameters

`AminoMsg`

#### Returns

[`EncodeObject`](/sdk/reference/interfaces/encode-object)

***

### toAmino()

> **toAmino**(`__namedParameters`): `AminoMsg`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/amino/registry.ts:176](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/amino/registry.ts#L176)

#### Parameters

##### \_\_namedParameters

[`EncodeObject`](/sdk/reference/interfaces/encode-object)

#### Returns

`AminoMsg`
