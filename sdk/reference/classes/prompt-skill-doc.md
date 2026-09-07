---
description: "iPromptSkillDoc"
---

# Class: PromptSkillDoc

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1927](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1927)

## Extends

- [`CustomTypeClass`](/sdk/reference/classes/custom-type-class)\<`PromptSkillDoc`\>

## Implements

- [`iPromptSkillDoc`](/sdk/reference/interfaces/i-prompt-skill-doc)

## Constructors

### Constructor

> **new PromptSkillDoc**(`data`): `PromptSkillDoc`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1945](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1945)

#### Parameters

##### data

[`iPromptSkillDoc`](/sdk/reference/interfaces/i-prompt-skill-doc)

#### Returns

`PromptSkillDoc`

#### Overrides

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`constructor`](/sdk/reference/classes/custom-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1928](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1928)

A unique stringified document ID

#### Implementation of

[`iPromptSkillDoc`](/sdk/reference/interfaces/i-prompt-skill-doc).[`_docId`](/sdk/reference/interfaces/i-prompt-skill-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1929](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1929)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iPromptSkillDoc`](/sdk/reference/interfaces/i-prompt-skill-doc).[`_id`](/sdk/reference/interfaces/i-prompt-skill-doc#_id)

***

### approvalStatus

> **approvalStatus**: `"pending"` \| `"approved"` \| `"rejected"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1940](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1940)

Approval status

#### Implementation of

[`iPromptSkillDoc`](/sdk/reference/interfaces/i-prompt-skill-doc).[`approvalStatus`](/sdk/reference/interfaces/i-prompt-skill-doc#approvalstatus)

***

### category

> **category**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1936](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1936)

Category for organization

#### Implementation of

[`iPromptSkillDoc`](/sdk/reference/interfaces/i-prompt-skill-doc).[`category`](/sdk/reference/interfaces/i-prompt-skill-doc#category)

***

### createdAt

> **createdAt**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1942](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1942)

Creation timestamp (ms)

#### Implementation of

[`iPromptSkillDoc`](/sdk/reference/interfaces/i-prompt-skill-doc).[`createdAt`](/sdk/reference/interfaces/i-prompt-skill-doc#createdat)

***

### createdBy

> **createdBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1932](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1932)

The BitBadges address of the creator

#### Implementation of

[`iPromptSkillDoc`](/sdk/reference/interfaces/i-prompt-skill-doc).[`createdBy`](/sdk/reference/interfaces/i-prompt-skill-doc#createdby)

***

### description

> **description**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1935](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1935)

Description of what the prompt does

#### Implementation of

[`iPromptSkillDoc`](/sdk/reference/interfaces/i-prompt-skill-doc).[`description`](/sdk/reference/interfaces/i-prompt-skill-doc#description)

***

### image

> **image**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1934](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1934)

Image URL for the prompt skill

#### Implementation of

[`iPromptSkillDoc`](/sdk/reference/interfaces/i-prompt-skill-doc).[`image`](/sdk/reference/interfaces/i-prompt-skill-doc#image)

***

### name

> **name**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1933](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1933)

Name of the prompt skill

#### Implementation of

[`iPromptSkillDoc`](/sdk/reference/interfaces/i-prompt-skill-doc).[`name`](/sdk/reference/interfaces/i-prompt-skill-doc#name)

***

### numUses

> **numUses**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1938](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1938)

Number of times used

#### Implementation of

[`iPromptSkillDoc`](/sdk/reference/interfaces/i-prompt-skill-doc).[`numUses`](/sdk/reference/interfaces/i-prompt-skill-doc#numuses)

***

### promptSkillId

> **promptSkillId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1930](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1930)

The unique prompt skill ID

#### Implementation of

[`iPromptSkillDoc`](/sdk/reference/interfaces/i-prompt-skill-doc).[`promptSkillId`](/sdk/reference/interfaces/i-prompt-skill-doc#promptskillid)

***

### promptText

> **promptText**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1931](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1931)

The prompt text

#### Implementation of

[`iPromptSkillDoc`](/sdk/reference/interfaces/i-prompt-skill-doc).[`promptText`](/sdk/reference/interfaces/i-prompt-skill-doc#prompttext)

***

### tags

> **tags**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1937](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1937)

Tags for searchability

#### Implementation of

[`iPromptSkillDoc`](/sdk/reference/interfaces/i-prompt-skill-doc).[`tags`](/sdk/reference/interfaces/i-prompt-skill-doc#tags)

***

### toPublish

> **toPublish**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1939](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1939)

Whether the skill is published to the public directory

#### Implementation of

[`iPromptSkillDoc`](/sdk/reference/interfaces/i-prompt-skill-doc).[`toPublish`](/sdk/reference/interfaces/i-prompt-skill-doc#topublish)

***

### updatedAt

> **updatedAt**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1943](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1943)

Last update timestamp (ms)

#### Implementation of

[`iPromptSkillDoc`](/sdk/reference/interfaces/i-prompt-skill-doc).[`updatedAt`](/sdk/reference/interfaces/i-prompt-skill-doc#updatedat)

***

### version

> **version**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1941](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1941)

Version number

#### Implementation of

[`iPromptSkillDoc`](/sdk/reference/interfaces/i-prompt-skill-doc).[`version`](/sdk/reference/interfaces/i-prompt-skill-doc#version)

## Methods

### clone()

> **clone**(): `PromptSkillDoc`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L105)

Deep copies the object and returns a new instance.

#### Returns

`PromptSkillDoc`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`clone`](/sdk/reference/classes/custom-type-class#clone)

***

### ~~convert()~~

> **convert**\<`U`\>(`_convertFunction?`, `options?`): [`CustomType`](/sdk/reference/interfaces/custom-type)\<`any`\>

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:124](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L124)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### \_convertFunction?

(`val`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

[`CustomType`](/sdk/reference/interfaces/custom-type)\<`any`\>

#### Deprecated

This function is unnecessary as this field has no numeric types.
Please use the `.clone()` method instead.

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`convert`](/sdk/reference/classes/custom-type-class#convert)

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

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`equals`](/sdk/reference/classes/custom-type-class#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:111](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L111)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`getNumberFieldNames`](/sdk/reference/classes/custom-type-class#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L115)

Checks if the object has number fields.

#### Returns

`boolean`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`hasNumberFields`](/sdk/reference/classes/custom-type-class#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L93)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`toJson`](/sdk/reference/classes/custom-type-class#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L97)

Converts the object to a JSON string.

#### Returns

`string`

#### Inherited from

[`CustomTypeClass`](/sdk/reference/classes/custom-type-class).[`toJsonString`](/sdk/reference/classes/custom-type-class#tojsonstring)
