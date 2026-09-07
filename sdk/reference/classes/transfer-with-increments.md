---
description: "TransferWithIncrements is a type that is used to better handle batch transfers, potentially with incremented tokenIDs."
---

# Class: TransferWithIncrements\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:176](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L176)

TransferWithIncrements is a type that is used to better handle batch transfers, potentially with incremented tokenIDs.

## Remarks

For example, if you have 100 addresses and want to send 1 token to each address,
you would set toAddressesLength to 100 and incrementIdsBy to 1. This would send token IDs 1 to the first address,
2 to the second, and so on.

## See

This type is compatible with the getBalancesAfterTransfers function and the getTransfersFromTransfersWithIncrements function.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`TransferWithIncrements`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments)\<`T`\>

## Constructors

### Constructor

> **new TransferWithIncrements**\<`T`\>(`data`): `TransferWithIncrements`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:195](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L195)

#### Parameters

##### data

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments)\<`T`\>

#### Returns

`TransferWithIncrements`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### balances

> **balances**: [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:186](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L186)

The balances to transfer.

#### Implementation of

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments).[`balances`](/sdk/reference/interfaces/i-transfer-with-increments#balances)

***

### durationFromTimestamp?

> `optional` **durationFromTimestamp?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:183](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L183)

The number of unix milliseconds to approve starting from now.

#### Implementation of

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments).[`durationFromTimestamp`](/sdk/reference/interfaces/i-transfer-with-increments#durationfromtimestamp)

***

### from

> **from**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:184](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L184)

The address to transfer from.

#### Implementation of

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments).[`from`](/sdk/reference/interfaces/i-transfer-with-increments#from)

***

### incrementOwnershipTimesBy?

> `optional` **incrementOwnershipTimesBy?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:182](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L182)

The number to increment the ownershipTimes by for each transfer.

#### Implementation of

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments).[`incrementOwnershipTimesBy`](/sdk/reference/interfaces/i-transfer-with-increments#incrementownershiptimesby)

***

### incrementTokenIdsBy?

> `optional` **incrementTokenIdsBy?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:181](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L181)

The number to increment the tokenIDs by for each transfer.

#### Implementation of

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments).[`incrementTokenIdsBy`](/sdk/reference/interfaces/i-transfer-with-increments#incrementtokenidsby)

***

### memo?

> `optional` **memo?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:189](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L189)

Arbitrary memo for the transfer.

#### Implementation of

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments).[`memo`](/sdk/reference/interfaces/i-transfer-with-increments#memo)

***

### merkleProofs?

> `optional` **merkleProofs?**: [`MerkleProof`](/sdk/reference/classes/merkle-proof)[]

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:188](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L188)

The merkle proofs that satisfy the mkerkle challenges in the approvals. If the transfer deducts from multiple approvals, we check all the merkle proofs and assert at least one is valid for every challenge.

#### Implementation of

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments).[`merkleProofs`](/sdk/reference/interfaces/i-transfer-with-increments#merkleproofs)

***

### onlyCheckPrioritizedCollectionApprovals?

> `optional` **onlyCheckPrioritizedCollectionApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:191](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L191)

Whether or not to only check the prioritized approvals. If false, we will check all approvals with any prioritized first.

This only applies to the "collection" level approvals specified.

#### Implementation of

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments).[`onlyCheckPrioritizedCollectionApprovals`](/sdk/reference/interfaces/i-transfer-with-increments#onlycheckprioritizedcollectionapprovals)

***

### onlyCheckPrioritizedIncomingApprovals?

> `optional` **onlyCheckPrioritizedIncomingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:192](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L192)

Whether or not to only check the prioritized approvals. If false, we will check all approvals with any prioritized first.

This only applies to the "incoming" level approvals specified.

#### Implementation of

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments).[`onlyCheckPrioritizedIncomingApprovals`](/sdk/reference/interfaces/i-transfer-with-increments#onlycheckprioritizedincomingapprovals)

***

### onlyCheckPrioritizedOutgoingApprovals?

> `optional` **onlyCheckPrioritizedOutgoingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:193](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L193)

Whether or not to only check the prioritized approvals. If false, we will check all approvals with any prioritized first.

This only applies to the "outgoing" level approvals specified.

#### Implementation of

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments).[`onlyCheckPrioritizedOutgoingApprovals`](/sdk/reference/interfaces/i-transfer-with-increments#onlycheckprioritizedoutgoingapprovals)

***

### precalculateBalancesFromApproval?

> `optional` **precalculateBalancesFromApproval?**: [`PrecalculateBalancesFromApprovalDetails`](/sdk/reference/classes/precalculate-balances-from-approval-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:187](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L187)

If specified, we will precalculate from this approval and override the balances. This can only be used when the specified approval has predeterminedBalances set.

#### Implementation of

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments).[`precalculateBalancesFromApproval`](/sdk/reference/interfaces/i-transfer-with-increments#precalculatebalancesfromapproval)

***

### prioritizedApprovals?

> `optional` **prioritizedApprovals?**: [`ApprovalIdentifierDetails`](/sdk/reference/classes/approval-identifier-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:190](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L190)

The prioritized approvals to use for the transfer. If specified, we will check these first.

#### Implementation of

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments).[`prioritizedApprovals`](/sdk/reference/interfaces/i-transfer-with-increments#prioritizedapprovals)

***

### toAddresses

> **toAddresses**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:185](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L185)

The addresses to transfer to.

#### Implementation of

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments).[`toAddresses`](/sdk/reference/interfaces/i-transfer-with-increments#toaddresses)

***

### toAddressesLength?

> `optional` **toAddressesLength?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:180](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L180)

The number of addresses to send the tokens to. This takes priority over toAddresses.length (used when you don't know exact addresses (i.e. you know number of codes)).

#### Implementation of

[`iTransferWithIncrements`](/sdk/reference/interfaces/i-transfer-with-increments).[`toAddressesLength`](/sdk/reference/interfaces/i-transfer-with-increments#toaddresseslength)

## Methods

### clone()

> **clone**(): `TransferWithIncrements`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`TransferWithIncrements`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `TransferWithIncrements`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:219](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L219)

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

`TransferWithIncrements`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:215](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L215)

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
