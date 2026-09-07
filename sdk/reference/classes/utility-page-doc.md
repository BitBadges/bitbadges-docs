---
description: "T extends NumberType"
---

# Class: UtilityPageDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1309](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1309)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`UtilityPageDoc`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc)\<`T`\>

## Constructors

### Constructor

> **new UtilityPageDoc**\<`T`\>(`data`): `UtilityPageDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1345](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1345)

#### Parameters

##### data

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc)\<`T`\>

#### Returns

`UtilityPageDoc`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1310](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1310)

A unique stringified document ID

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`_docId`](/sdk/reference/interfaces/i-utility-page-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1311](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1311)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`_id`](/sdk/reference/interfaces/i-utility-page-doc#_id)

***

### approvalStatus

> **approvalStatus**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1324](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1324)

Approval status - can be used for moderation

#### featuredPriority?

> `optional` **featuredPriority?**: `number`

#### isApproved

> **isApproved**: `boolean`

#### isFeatured?

> `optional` **isFeatured?**: `boolean`

#### reason?

> `optional` **reason?**: `string`

#### rejected?

> `optional` **rejected?**: `boolean`

#### updatedBy?

> `optional` **updatedBy?**: `string`

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`approvalStatus`](/sdk/reference/interfaces/i-utility-page-doc#approvalstatus)

***

### categories

> **categories**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1314](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1314)

The categories of the listing

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`categories`](/sdk/reference/interfaces/i-utility-page-doc#categories)

***

### content

> **content**: [`UtilityPageContent`](/sdk/reference/classes/utility-page-content)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1319](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1319)

The paginated content for the listing

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`content`](/sdk/reference/interfaces/i-utility-page-doc#content)

***

### createdAt

> **createdAt**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1318](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1318)

The time the listing was created

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`createdAt`](/sdk/reference/interfaces/i-utility-page-doc#createdat)

***

### createdBy

> **createdBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1316](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1316)

The BitBadges address of the user who created this listing

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`createdBy`](/sdk/reference/interfaces/i-utility-page-doc#createdby)

***

### directLink?

> `optional` **directLink?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1315](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1315)

The direct link for the listing. If specified, we will skip the entire content / listing page. Thus, content and links should be empty [].

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`directLink`](/sdk/reference/interfaces/i-utility-page-doc#directlink)

***

### displayTimes?

> `optional` **displayTimes?**: [`UintRange`](/sdk/reference/classes/uint-range)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1332](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1332)

Optional time range for when the listing should be shown

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`displayTimes`](/sdk/reference/interfaces/i-utility-page-doc#displaytimes)

***

### estimatedCost?

> `optional` **estimatedCost?**: [`EstimatedCost`](/sdk/reference/classes/estimated-cost)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1338](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1338)

The estimated cost for this utility/service

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`estimatedCost`](/sdk/reference/interfaces/i-utility-page-doc#estimatedcost)

***

### estimatedTime?

> `optional` **estimatedTime?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1339](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1339)

The estimated time to complete or deliver this utility/service

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`estimatedTime`](/sdk/reference/interfaces/i-utility-page-doc#estimatedtime)

***

### homePageView?

> `optional` **homePageView?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1340](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1340)

Home page view

#### category

> **category**: `string`

#### type

> **type**: `"tokens"` \| `"lists"` \| `"claims"` \| `"applications"`

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`homePageView`](/sdk/reference/interfaces/i-utility-page-doc#homepageview)

***

### inheritMetadataFrom?

> `optional` **inheritMetadataFrom?**: [`InheritMetadataFrom`](/sdk/reference/classes/inherit-metadata-from)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1336](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1336)

Where to inherit metadata from? Only one can be specified.

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`inheritMetadataFrom`](/sdk/reference/interfaces/i-utility-page-doc#inheritmetadatafrom)

***

### lastUpdated?

> `optional` **lastUpdated?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1323](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1323)

The last updated timestamp

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`lastUpdated`](/sdk/reference/interfaces/i-utility-page-doc#lastupdated)

***

### linkedTo?

> `optional` **linkedTo?**: [`LinkedTo`](/sdk/reference/classes/linked-to)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1335](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1335)

Linked details

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`linkedTo`](/sdk/reference/interfaces/i-utility-page-doc#linkedto)

***

### links

> **links**: [`UtilityPageLink`](/sdk/reference/classes/utility-page-link)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1320](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1320)

The relevant links for the listing

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`links`](/sdk/reference/interfaces/i-utility-page-doc#links)

***

### listingId

> **listingId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1312](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1312)

The listing ID

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`listingId`](/sdk/reference/interfaces/i-utility-page-doc#listingid)

***

### locale?

> `optional` **locale?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1337](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1337)

Locale (ex: es, fr, etc.). If not specified, we assume en.

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`locale`](/sdk/reference/interfaces/i-utility-page-doc#locale)

***

### managedBy

> **managedBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1317](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1317)

The BitBadges address of the user who is currently managing this

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`managedBy`](/sdk/reference/interfaces/i-utility-page-doc#managedby)

***

### metadata

> **metadata**: [`iMetadata`](/sdk/reference/interfaces/i-metadata)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1321](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1321)

The overall metadata for the listing

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`metadata`](/sdk/reference/interfaces/i-utility-page-doc#metadata)

***

### type

> **type**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1313](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1313)

Type of the listing

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`type`](/sdk/reference/interfaces/i-utility-page-doc#type)

***

### viewCount?

> `optional` **viewCount?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1333](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1333)

The total view count for this listing. This is updated periodically from the view tracking document.

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`viewCount`](/sdk/reference/interfaces/i-utility-page-doc#viewcount)

***

### viewsByPeriod?

> `optional` **viewsByPeriod?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1334](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1334)

Optional breakdown of views by time period for trending calculations

#### daily

> **daily**: `number`

#### hourly

> **hourly**: `number`

#### monthly

> **monthly**: `number`

#### weekly

> **weekly**: `number`

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`viewsByPeriod`](/sdk/reference/interfaces/i-utility-page-doc#viewsbyperiod)

***

### visibility

> **visibility**: `"public"` \| `"private"` \| `"unlisted"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1322](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1322)

Visibility state of the listing

#### Implementation of

[`iUtilityPageDoc`](/sdk/reference/interfaces/i-utility-page-doc).[`visibility`](/sdk/reference/interfaces/i-utility-page-doc#visibility)

## Methods

### clone()

> **clone**(): `UtilityPageDoc`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`UtilityPageDoc`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `UtilityPageDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1377](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1377)

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

`UtilityPageDoc`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:1373](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L1373)

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
