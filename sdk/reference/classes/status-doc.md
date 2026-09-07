---
description: "// Create a new StatusDoc with transaction tracking const statusDoc = new StatusDoc({ docId: 'status', block: { height: 1000, txIndex: 5, timestamp: Date.now()…"
---

# Class: StatusDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:724](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L724)

## Example

```typescript
// Create a new StatusDoc with transaction tracking
const statusDoc = new StatusDoc({
  _docId: 'status',
  block: { height: 1000, txIndex: 5, timestamp: Date.now() },
  nextCollectionId: 123,
  gasPrice: 0.001,
  lastXGasAmounts: [0.001, 0.002, 0.0015],
  lastXGasLimits: [100000, 150000, 120000],
  lastXTxs: []
});

// Add transactions with timestamps
statusDoc.addTransaction(0.001, 100000); // Uses current timestamp
statusDoc.addTransaction(0.002, 150000, Date.now() - 60000); // 1 minute ago

// Get transactions in the last 5 minutes
const recentTxs = statusDoc.getTransactionsInWindow(5 * 60 * 1000);

// Calculate average gas price in the last hour
const avgGasPrice = statusDoc.getAverageGasPriceInWindow(60 * 60 * 1000);

// Get transaction statistics
const stats = statusDoc.getTransactionStats(24 * 60 * 60 * 1000); // Last 24 hours
console.log(`Total transactions: ${stats.count}`);
console.log(`Average amount: ${stats.averageAmount}`);

// Clean up old transactions (older than 1 day)
const removed = statusDoc.cleanupOldTransactions(24 * 60 * 60 * 1000);
console.log(`Removed ${removed} old transactions`);
```

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`StatusDoc`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iStatusDoc`](/sdk/reference/interfaces/i-status-doc)\<`T`\>

## Constructors

### Constructor

> **new StatusDoc**\<`T`\>(`data`): `StatusDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:732](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L732)

#### Parameters

##### data

[`iStatusDoc`](/sdk/reference/interfaces/i-status-doc)\<`T`\>

#### Returns

`StatusDoc`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:725](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L725)

A unique stringified document ID

#### Implementation of

[`iStatusDoc`](/sdk/reference/interfaces/i-status-doc).[`_docId`](/sdk/reference/interfaces/i-status-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:726](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L726)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iStatusDoc`](/sdk/reference/interfaces/i-status-doc).[`_id`](/sdk/reference/interfaces/i-status-doc#_id)

***

### block

> **block**: [`LatestBlockStatus`](/sdk/reference/classes/latest-block-status)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:727](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L727)

The latest synced block status (i.e. height, txIndex, timestamp)

#### Implementation of

[`iStatusDoc`](/sdk/reference/interfaces/i-status-doc).[`block`](/sdk/reference/interfaces/i-status-doc#block)

***

### gasPrice

> **gasPrice**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:729](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L729)

The current gas price based on the average of recent transactions

#### Implementation of

[`iStatusDoc`](/sdk/reference/interfaces/i-status-doc).[`gasPrice`](/sdk/reference/interfaces/i-status-doc#gasprice)

***

### lastXTxs?

> `optional` **lastXTxs?**: [`TransactionEntry`](/sdk/reference/classes/transaction-entry)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:730](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L730)

The last X transactions with timestamps for dynamic reset functionality

#### Implementation of

[`iStatusDoc`](/sdk/reference/interfaces/i-status-doc).[`lastXTxs`](/sdk/reference/interfaces/i-status-doc#lastxtxs)

***

### nextCollectionId

> **nextCollectionId**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:728](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L728)

The next collection ID to be used

#### Implementation of

[`iStatusDoc`](/sdk/reference/interfaces/i-status-doc).[`nextCollectionId`](/sdk/reference/interfaces/i-status-doc#nextcollectionid)

## Methods

### addTransaction()

> **addTransaction**(`amount`, `limit`, `timestamp?`, `maxEntries?`): `void`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:757](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L757)

Add a new transaction entry to the lastXTxs array

#### Parameters

##### amount

`T`

The transaction amount

##### limit

`T`

The gas limit

##### timestamp?

`number`

The timestamp (optional, defaults to current time)

##### maxEntries?

`number` = `100`

Maximum number of entries to keep (optional, defaults to 100)

#### Returns

`void`

***

### cleanupOldTransactions()

> **cleanupOldTransactions**(`maxAgeMs`, `currentTime?`): `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:832](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L832)

Clean up old transactions beyond a certain age

#### Parameters

##### maxAgeMs

`number`

Maximum age in milliseconds

##### currentTime?

`number`

Current timestamp (optional, defaults to Date.now())

#### Returns

`number`

Number of transactions removed

***

### clone()

> **clone**(): `StatusDoc`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`StatusDoc`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `StatusDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:746](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L746)

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

`StatusDoc`\<`U`\>

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

### getAverageGasPriceInWindow()

> **getAverageGasPriceInWindow**(`windowMs`, `currentTime?`): `number`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:812](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L812)

Calculate average gas price from transactions in a time window

#### Parameters

##### windowMs

`number`

Time window in milliseconds

##### currentTime?

`number`

Current timestamp (optional, defaults to Date.now())

#### Returns

`number`

Average gas price or 0 if no transactions

***

### getLatestTransaction()

> **getLatestTransaction**(): [`TransactionEntry`](/sdk/reference/classes/transaction-entry)\<`T`\> \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:850](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L850)

Get the most recent transaction

#### Returns

[`TransactionEntry`](/sdk/reference/classes/transaction-entry)\<`T`\> \| `null`

The most recent transaction entry or null if none exist

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:742](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L742)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`getNumberFieldNames`](/sdk/reference/classes/base-number-type-class#getnumberfieldnames)

***

### getTransactionsInWindow()

> **getTransactionsInWindow**(`windowMs`, `currentTime?`, `defaultMinimumTxs?`): [`TransactionEntry`](/sdk/reference/classes/transaction-entry)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:783](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L783)

Get transactions within a time window

#### Parameters

##### windowMs

`number`

Time window in milliseconds

##### currentTime?

`number`

Current timestamp (optional, defaults to Date.now())

##### defaultMinimumTxs?

`number`

#### Returns

[`TransactionEntry`](/sdk/reference/classes/transaction-entry)\<`T`\>[]

Array of transactions within the time window

***

### getTransactionStats()

> **getTransactionStats**(`windowMs`, `currentTime?`): `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:864](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L864)

Get transaction statistics in a time window

#### Parameters

##### windowMs

`number`

Time window in milliseconds

##### currentTime?

`number`

Current timestamp (optional, defaults to Date.now())

#### Returns

`object`

Object with transaction statistics

##### averageAmount

> **averageAmount**: `number`

##### averageLimit

> **averageLimit**: `number`

##### count

> **count**: `number`

##### maxAmount

> **maxAmount**: `number`

##### minAmount

> **minAmount**: `number`

##### totalAmount

> **totalAmount**: `number`

##### totalLimit

> **totalLimit**: `number`

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
