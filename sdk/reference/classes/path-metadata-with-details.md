---
description: "PathMetadataWithDetails represents the metadata for paths with fetched metadata details."
---

# Class: PathMetadataWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:249](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L249)

PathMetadataWithDetails represents the metadata for paths with fetched metadata details.

## Extends

- [`PathMetadata`](/sdk/reference/classes/path-metadata)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iPathMetadataWithDetails`](/sdk/reference/interfaces/i-path-metadata-with-details)\<`T`\>

## Constructors

### Constructor

> **new PathMetadataWithDetails**\<`T`\>(`pathMetadata`): `PathMetadataWithDetails`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:252](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L252)

#### Parameters

##### pathMetadata

[`iPathMetadataWithDetails`](/sdk/reference/interfaces/i-path-metadata-with-details)\<`T`\>

#### Returns

`PathMetadataWithDetails`\<`T`\>

#### Overrides

[`PathMetadata`](/sdk/reference/classes/path-metadata).[`constructor`](/sdk/reference/classes/path-metadata#constructor)

## Properties

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:213](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L213)

Custom data or additional information related to the path metadata.

#### Implementation of

[`iPathMetadataWithDetails`](/sdk/reference/interfaces/i-path-metadata-with-details).[`customData`](/sdk/reference/interfaces/i-path-metadata-with-details#customdata)

#### Inherited from

[`PathMetadata`](/sdk/reference/classes/path-metadata).[`customData`](/sdk/reference/classes/path-metadata#customdata)

***

### metadata?

> `optional` **metadata?**: [`Metadata`](/sdk/reference/classes/metadata)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:250](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L250)

The fetched metadata from the URI.

#### Implementation of

[`iPathMetadataWithDetails`](/sdk/reference/interfaces/i-path-metadata-with-details).[`metadata`](/sdk/reference/interfaces/i-path-metadata-with-details#metadata)

***

### uri

> **uri**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:212](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L212)

The URI (Uniform Resource Identifier) associated with the path metadata.

#### Implementation of

[`iPathMetadataWithDetails`](/sdk/reference/interfaces/i-path-metadata-with-details).[`uri`](/sdk/reference/interfaces/i-path-metadata-with-details#uri)

#### Inherited from

[`PathMetadata`](/sdk/reference/classes/path-metadata).[`uri`](/sdk/reference/classes/path-metadata#uri)

## Methods

### clone()

> **clone**(): [`PathMetadata`](/sdk/reference/classes/path-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

[`PathMetadata`](/sdk/reference/classes/path-metadata)

#### Inherited from

[`PathMetadata`](/sdk/reference/classes/path-metadata).[`clone`](/sdk/reference/classes/path-metadata#clone)

***

### ~~convert()~~

> **convert**\<`U`\>(`convertFunction`, `options?`): `PathMetadataWithDetails`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:257](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L257)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`PathMetadataWithDetails`\<`U`\>

#### Deprecated

This function is unnecessary as this field has no numeric types.
Please use the `.clone()` method instead.

#### Overrides

[`PathMetadata`](/sdk/reference/classes/path-metadata).[`convert`](/sdk/reference/classes/path-metadata#convert)

***

### equals()

> **equals**\<`U`\>(`other`, `normalizeNumberTypes?`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:101](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L101)

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

[`PathMetadata`](/sdk/reference/classes/path-metadata).[`equals`](/sdk/reference/classes/path-metadata#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:111](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L111)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`PathMetadata`](/sdk/reference/classes/path-metadata).[`getNumberFieldNames`](/sdk/reference/classes/path-metadata#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L115)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`PathMetadata`](/sdk/reference/classes/path-metadata).[`hasNumberFields`](/sdk/reference/classes/path-metadata#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L93)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`PathMetadata`](/sdk/reference/classes/path-metadata).[`toJson`](/sdk/reference/classes/path-metadata#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L97)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`PathMetadata`](/sdk/reference/classes/path-metadata).[`toJsonString`](/sdk/reference/classes/path-metadata#tojsonstring)

***

### toProto()

> **toProto**(): `PathMetadata`

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:221](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L221)

#### Returns

`PathMetadata`

#### Inherited from

[`PathMetadata`](/sdk/reference/classes/path-metadata).[`toProto`](/sdk/reference/classes/path-metadata#toproto)

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): [`PathMetadata`](/sdk/reference/classes/path-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:228](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L228)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

[`PathMetadata`](/sdk/reference/classes/path-metadata)

#### Inherited from

[`PathMetadata`](/sdk/reference/classes/path-metadata).[`fromJson`](/sdk/reference/classes/path-metadata#fromjson)

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): [`PathMetadata`](/sdk/reference/classes/path-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:232](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L232)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

[`PathMetadata`](/sdk/reference/classes/path-metadata)

#### Inherited from

[`PathMetadata`](/sdk/reference/classes/path-metadata).[`fromJsonString`](/sdk/reference/classes/path-metadata#fromjsonstring)

***

### fromProto()

> `static` **fromProto**(`item`): [`PathMetadata`](/sdk/reference/classes/path-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts:236](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/ibc-wrappers.ts#L236)

#### Parameters

##### item

`PathMetadata`

#### Returns

[`PathMetadata`](/sdk/reference/classes/path-metadata)

#### Inherited from

[`PathMetadata`](/sdk/reference/classes/path-metadata).[`fromProto`](/sdk/reference/classes/path-metadata#fromproto)
