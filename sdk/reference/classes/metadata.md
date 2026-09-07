---
description: "T extends NumberType"
---

# Class: Metadata\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:74](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L74)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`Metadata`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iMetadata`](/sdk/reference/interfaces/i-metadata)\<`T`\>

## Constructors

### Constructor

> **new Metadata**\<`T`\>(`data`): `Metadata`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:103](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L103)

#### Parameters

##### data

[`iMetadata`](/sdk/reference/interfaces/i-metadata)\<`T`\>

#### Returns

`Metadata`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_isUpdating?

> `optional` **\_isUpdating?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:77](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L77)

Whether the metadata is currently being updated.

#### Implementation of

[`iMetadata`](/sdk/reference/interfaces/i-metadata).[`_isUpdating`](/sdk/reference/interfaces/i-metadata#_isupdating)

***

### additionalInfo?

> `optional` **additionalInfo?**: `object`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:96](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L96)

Header links for this item displayed right under the title

#### description

> **description**: `string`

#### image

> **image**: `string`

#### name

> **name**: `string`

#### url?

> `optional` **url?**: `string`

#### Implementation of

[`iMetadata`](/sdk/reference/interfaces/i-metadata).[`additionalInfo`](/sdk/reference/interfaces/i-metadata#additionalinfo)

***

### attributes?

> `optional` **attributes?**: `object`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:90](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L90)

The attributes for this item

#### name

> **name**: `string`

#### type

> **type**: `string`

#### value

> **value**: `string` \| `number` \| `boolean`

#### Implementation of

[`iMetadata`](/sdk/reference/interfaces/i-metadata).[`attributes`](/sdk/reference/interfaces/i-metadata#attributes)

***

### bannerImage?

> `optional` **bannerImage?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:81](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L81)

The banner image for this item.

#### Implementation of

[`iMetadata`](/sdk/reference/interfaces/i-metadata).[`bannerImage`](/sdk/reference/interfaces/i-metadata#bannerimage)

***

### category?

> `optional` **category?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:82](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L82)

The category for this item (e.g. "Education", "Attendance").

#### Implementation of

[`iMetadata`](/sdk/reference/interfaces/i-metadata).[`category`](/sdk/reference/interfaces/i-metadata#category)

***

### description

> **description**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:79](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L79)

The description of this item. Supports markdown.

#### Implementation of

[`iMetadata`](/sdk/reference/interfaces/i-metadata).[`description`](/sdk/reference/interfaces/i-metadata#description)

***

### externalUrl?

> `optional` **externalUrl?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:83](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L83)

The external URL for this item.

#### Implementation of

[`iMetadata`](/sdk/reference/interfaces/i-metadata).[`externalUrl`](/sdk/reference/interfaces/i-metadata#externalurl)

***

### fetchedAt?

> `optional` **fetchedAt?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:75](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L75)

The time the metadata was fetched.

#### Implementation of

[`iMetadata`](/sdk/reference/interfaces/i-metadata).[`fetchedAt`](/sdk/reference/interfaces/i-metadata#fetchedat)

***

### fetchedAtBlock?

> `optional` **fetchedAtBlock?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:76](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L76)

The block the metadata was fetched at.

#### Implementation of

[`iMetadata`](/sdk/reference/interfaces/i-metadata).[`fetchedAtBlock`](/sdk/reference/interfaces/i-metadata#fetchedatblock)

***

### image

> **image**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:80](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L80)

The image for this item.

#### Implementation of

[`iMetadata`](/sdk/reference/interfaces/i-metadata).[`image`](/sdk/reference/interfaces/i-metadata#image)

***

### name

> **name**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:78](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L78)

The name of this item.

#### Implementation of

[`iMetadata`](/sdk/reference/interfaces/i-metadata).[`name`](/sdk/reference/interfaces/i-metadata#name)

***

### socials?

> `optional` **socials?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:86](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L86)

The socials for this item

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`iMetadata`](/sdk/reference/interfaces/i-metadata).[`socials`](/sdk/reference/interfaces/i-metadata#socials)

***

### tags?

> `optional` **tags?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:84](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L84)

The tags for this item

#### Implementation of

[`iMetadata`](/sdk/reference/interfaces/i-metadata).[`tags`](/sdk/reference/interfaces/i-metadata#tags)

## Methods

### clone()

> **clone**(): `Metadata`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`Metadata`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `Metadata`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:124](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L124)

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

`Metadata`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:120](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L120)

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

### DefaultPlaceholderMetadata()

> `static` **DefaultPlaceholderMetadata**(): `Metadata`\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:135](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L135)

Returns a new Metadata object with default placeholder values. By default, it returns as \<bigint> type, but you can convert it with `.convert` method.
```ts
import { Numberify } from 'bitbadges'
const metadata = Metadata.DefaultPlaceholderMetadata().convert(Numberify)
```

#### Returns

`Metadata`\<`bigint`\>

***

### ErrorMetadata()

> `static` **ErrorMetadata**(): `Metadata`\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts:149](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/metadata/metadata.ts#L149)

Returns a new Metadata object with default placeholder values. By default, it returns as \<bigint> type, but you can convert it with `.convert` method.
```ts
import { Numberify } from 'bitbadges'
const metadata = Metadata.ErrorMetadata().convert(Numberify)
```

#### Returns

`Metadata`\<`bigint`\>
