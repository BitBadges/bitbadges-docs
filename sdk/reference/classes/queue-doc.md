---
description: "T extends NumberType"
---

# Class: QueueDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:598](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L598)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`QueueDoc`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc)\<`T`\>

## Constructors

### Constructor

> **new QueueDoc**\<`T`\>(`data`): `QueueDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:629](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L629)

#### Parameters

##### data

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc)\<`T`\>

#### Returns

`QueueDoc`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:599](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L599)

A unique stringified document ID

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`_docId`](/sdk/reference/interfaces/i-queue-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:600](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L600)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`_id`](/sdk/reference/interfaces/i-queue-doc#_id)

***

### actionConfig?

> `optional` **actionConfig?**: `any`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:626](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L626)

For use for post-claim actions

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`actionConfig`](/sdk/reference/interfaces/i-queue-doc#actionconfig)

***

### activityDocId?

> `optional` **activityDocId?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:613](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L613)

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`activityDocId`](/sdk/reference/interfaces/i-queue-doc#activitydocid)

***

### claimInfo?

> `optional` **claimInfo?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:615](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L615)

For use for claim completion

#### Index Signature

\[`key`: `string`\]: `any`

#### bitbadgesAddress

> **bitbadgesAddress**: `string`

#### body

> **body**: `any`

#### claimId

> **claimId**: `string`

#### ip

> **ip**: `string` \| `undefined`

#### session

> **session**: `any`

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`claimInfo`](/sdk/reference/interfaces/i-queue-doc#claiminfo)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:602](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L602)

The collection ID of the metadata to be fetched

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`collectionId`](/sdk/reference/interfaces/i-queue-doc#collectionid)

***

### deletedAt?

> `optional` **deletedAt?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:609](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L609)

The timestamp of when this document was deleted (milliseconds since epoch)

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`deletedAt`](/sdk/reference/interfaces/i-queue-doc#deletedat)

***

### emailMessage?

> `optional` **emailMessage?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:611](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L611)

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`emailMessage`](/sdk/reference/interfaces/i-queue-doc#emailmessage)

***

### error?

> `optional` **error?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:608](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L608)

The error message if this metadata failed to be fetched

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`error`](/sdk/reference/interfaces/i-queue-doc#error)

***

### faucetInfo?

> `optional` **faucetInfo?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:625](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L625)

For use for airdrops

#### amount

> **amount**: [`NumberType`](/sdk/reference/type-aliases/number-type)

#### denom

> **denom**: `string`

#### recipient

> **recipient**: `string`

#### txHash

> **txHash**: `string`

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`faucetInfo`](/sdk/reference/interfaces/i-queue-doc#faucetinfo)

***

### initiatedBy?

> `optional` **initiatedBy?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:627](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L627)

The BitBadges address of the user who initiated this fetch

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`initiatedBy`](/sdk/reference/interfaces/i-queue-doc#initiatedby)

***

### lastFetchedAt?

> `optional` **lastFetchedAt?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:607](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L607)

The timestamp of when this metadata was last fetched (milliseconds since epoch)

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`lastFetchedAt`](/sdk/reference/interfaces/i-queue-doc#lastfetchedat)

***

### loadBalanceId

> **loadBalanceId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:603](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L603)

The load balance ID of the metadata to be fetched. Only the node with the same load balance ID will fetch this metadata

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`loadBalanceId`](/sdk/reference/interfaces/i-queue-doc#loadbalanceid)

***

### nextFetchTime?

> `optional` **nextFetchTime?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:610](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L610)

The timestamp of when this document should be fetched next (milliseconds since epoch)

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`nextFetchTime`](/sdk/reference/interfaces/i-queue-doc#nextfetchtime)

***

### notificationType?

> `optional` **notificationType?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:614](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L614)

Type of the doc / purpose

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`notificationType`](/sdk/reference/interfaces/i-queue-doc#notificationtype)

***

### numRetries

> **numRetries**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:606](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L606)

The number of times this metadata has been tried to be fetched but failed

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`numRetries`](/sdk/reference/interfaces/i-queue-doc#numretries)

***

### pending?

> `optional` **pending?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:604](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L604)

Whether this document is pending to be fetched or not

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`pending`](/sdk/reference/interfaces/i-queue-doc#pending)

***

### recipientAddress?

> `optional` **recipientAddress?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:612](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L612)

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`recipientAddress`](/sdk/reference/interfaces/i-queue-doc#recipientaddress)

***

### refreshRequestTime

> **refreshRequestTime**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:605](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L605)

The timestamp of when this metadata was requested to be refreshed (milliseconds since epoch)

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`refreshRequestTime`](/sdk/reference/interfaces/i-queue-doc#refreshrequesttime)

***

### uri

> **uri**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:601](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L601)

The URI of the metadata to be fetched. If {id} is present, it will be replaced with each individual ID in tokenIds

#### Implementation of

[`iQueueDoc`](/sdk/reference/interfaces/i-queue-doc).[`uri`](/sdk/reference/interfaces/i-queue-doc#uri)

## Methods

### clone()

> **clone**(): `QueueDoc`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`QueueDoc`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `QueueDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:657](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L657)

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

`QueueDoc`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:653](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L653)

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
