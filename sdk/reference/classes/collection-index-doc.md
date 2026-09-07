---
description: "Denormalized, indexed record powering the server-side collection-index query (filter/sort/search/facets/paginate over Mongo). ONE doc per (collection × indexed…"
---

# Class: CollectionIndexDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:174](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L174)

Denormalized, indexed record powering the server-side collection-index query
(filter/sort/search/facets/paginate over Mongo). ONE doc per
(collection × indexed standard); `_docId = `${collectionId}:${standard}``. A
collection declaring N indexable standards has N rows. Maintained in real time
by the indexer's tx-handlers from the standards-info builder projections, so
the client derives nothing. The `/pay` dashboard is the first consumer
(scopes by `standard`); prediction-market/auction/etc. dashboards reuse the
same shape.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`CollectionIndexDoc`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc)\<`T`\>

## Constructors

### Constructor

> **new CollectionIndexDoc**\<`T`\>(`data`): `CollectionIndexDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:195](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L195)

#### Parameters

##### data

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc)\<`T`\>

#### Returns

`CollectionIndexDoc`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:175](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L175)

A unique stringified document ID

#### Implementation of

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc).[`_docId`](/sdk/reference/interfaces/i-collection-index-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:176](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L176)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc).[`_id`](/sdk/reference/interfaces/i-collection-index-doc#_id)

***

### amountStr?

> `optional` **amountStr?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:185](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L185)

Headline money amount (exact bigint string), denom paired below — for display.

#### Implementation of

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc).[`amountStr`](/sdk/reference/interfaces/i-collection-index-doc#amountstr)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:177](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L177)

The collection ID (this row is one of the collection's indexed standards).

#### Implementation of

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc).[`collectionId`](/sdk/reference/interfaces/i-collection-index-doc#collectionid)

***

### createdBlock

> **createdBlock**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:191](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L191)

Creation block (cursor sort key, mirrors createdTokens).

#### Implementation of

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc).[`createdBlock`](/sdk/reference/interfaces/i-collection-index-doc#createdblock)

***

### createdBy

> **createdBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:178](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L178)

Creator bech32 address — dashboards scope per-creator.

#### Implementation of

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc).[`createdBy`](/sdk/reference/interfaces/i-collection-index-doc#createdby)

***

### createdTimestamp

> **createdTimestamp**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:192](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L192)

Creation timestamp (unix ms).

#### Implementation of

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc).[`createdTimestamp`](/sdk/reference/interfaces/i-collection-index-doc#createdtimestamp)

***

### denom?

> `optional` **denom?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:186](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L186)

Headline denom (invoice/sub price/product 'from'/vault backing).

#### Implementation of

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc).[`denom`](/sdk/reference/interfaces/i-collection-index-doc#denom)

***

### endTime?

> `optional` **endTime?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:187](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L187)

Deadline in unix ms (0/absent = none); used for the query-time expiry rule.

#### Implementation of

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc).[`endTime`](/sdk/reference/interfaces/i-collection-index-doc#endtime)

***

### extras?

> `optional` **extras?**: `unknown`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:190](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L190)

The standard's full computed `standardsInfo` blob, carried for display.

#### Implementation of

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc).[`extras`](/sdk/reference/interfaces/i-collection-index-doc#extras)

***

### image

> **image**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:183](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L183)

Collection image URI (for the dashboard avatar; '' until metadata lands).

#### Implementation of

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc).[`image`](/sdk/reference/interfaces/i-collection-index-doc#image)

***

### lastSyncedBlock

> **lastSyncedBlock**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:193](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L193)

Block this record was last rebuilt at (reorg/idempotency guard).

#### Implementation of

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc).[`lastSyncedBlock`](/sdk/reference/interfaces/i-collection-index-doc#lastsyncedblock)

***

### name

> **name**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:181](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L181)

Collection display name (from metadata; '' until the async fetch lands).

#### Implementation of

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc).[`name`](/sdk/reference/interfaces/i-collection-index-doc#name)

***

### nameLower

> **nameLower**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:182](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L182)

Lowercased name for case-insensitive search/sort.

#### Implementation of

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc).[`nameLower`](/sdk/reference/interfaces/i-collection-index-doc#namelower)

***

### payerAddress?

> `optional` **payerAddress?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:188](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L188)

Counterparty addresses (e.g. PaymentRequest payer/recipient) for role filtering.

#### Implementation of

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc).[`payerAddress`](/sdk/reference/interfaces/i-collection-index-doc#payeraddress)

***

### recipientAddress?

> `optional` **recipientAddress?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:189](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L189)

#### Implementation of

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc).[`recipientAddress`](/sdk/reference/interfaces/i-collection-index-doc#recipientaddress)

***

### standard

> **standard**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:179](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L179)

THE standard this row represents (the row's primary filter key).

#### Implementation of

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc).[`standard`](/sdk/reference/interfaces/i-collection-index-doc#standard)

***

### standards

> **standards**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:180](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L180)

ALL standards the collection declares (for "is also an X" cross-filtering).

#### Implementation of

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc).[`standards`](/sdk/reference/interfaces/i-collection-index-doc#standards)

***

### status?

> `optional` **status?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:184](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L184)

Durable, tx-derived status enum (per standard). Clock-only transitions
(e.g. PaymentRequest `pending` → `expired` past its deadline) are NOT
persisted here — they are applied at query time from `endTime` + the
standard's expiry rule so they never go stale without a tx.

#### Implementation of

[`iCollectionIndexDoc`](/sdk/reference/interfaces/i-collection-index-doc).[`status`](/sdk/reference/interfaces/i-collection-index-doc#status)

## Methods

### clone()

> **clone**(): `CollectionIndexDoc`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`CollectionIndexDoc`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `CollectionIndexDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:224](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L224)

Converts the object to a different NumberType equivalent.

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`val`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`CollectionIndexDoc`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:220](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L220)

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
