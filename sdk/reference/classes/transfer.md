---
description: "Transfer is used to represent a transfer of tokens. This is compatible with the MsgTransferTokens message."
---

# Class: Transfer\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:19](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L19)

Transfer is used to represent a transfer of tokens. This is compatible with the MsgTransferTokens message.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`Transfer`\<`T`\>\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iTransfer`](/sdk/reference/interfaces/i-transfer)\<`T`\>

## Constructors

### Constructor

> **new Transfer**\<`T`\>(`transfer`): `Transfer`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:32](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L32)

#### Parameters

##### transfer

[`iTransfer`](/sdk/reference/interfaces/i-transfer)\<`T`\>

#### Returns

`Transfer`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### balances

> **balances**: [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:22](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L22)

The balances to transfer.

#### Implementation of

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`balances`](/sdk/reference/interfaces/i-transfer#balances)

***

### ethSignatureProofs?

> `optional` **ethSignatureProofs?**: [`ETHSignatureProof`](/sdk/reference/classes/eth-signature-proof)[]

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L25)

The ETH signature proofs that satisfy the ETH signature challenges in the approvals. If the transfer deducts from multiple approvals, we check all the ETH signature proofs and assert at least one is valid for every challenge.

#### Implementation of

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`ethSignatureProofs`](/sdk/reference/interfaces/i-transfer#ethsignatureproofs)

***

### from

> **from**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:20](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L20)

The address to transfer from.

#### Implementation of

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`from`](/sdk/reference/interfaces/i-transfer#from)

***

### memo?

> `optional` **memo?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:26](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L26)

Arbitrary memo for the transfer.

#### Implementation of

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`memo`](/sdk/reference/interfaces/i-transfer#memo)

***

### merkleProofs?

> `optional` **merkleProofs?**: [`MerkleProof`](/sdk/reference/classes/merkle-proof)[]

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:24](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L24)

The merkle proofs that satisfy the mkerkle challenges in the approvals. If the transfer deducts from multiple approvals, we check all the merkle proofs and assert at least one is valid for every challenge.

#### Implementation of

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`merkleProofs`](/sdk/reference/interfaces/i-transfer#merkleproofs)

***

### onlyCheckPrioritizedCollectionApprovals?

> `optional` **onlyCheckPrioritizedCollectionApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:28](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L28)

Whether or not to only check the prioritized approvals. If false, we will check all approvals with any prioritized first.

This only applies to the "collection" level approvals specified.

#### Implementation of

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`onlyCheckPrioritizedCollectionApprovals`](/sdk/reference/interfaces/i-transfer#onlycheckprioritizedcollectionapprovals)

***

### onlyCheckPrioritizedIncomingApprovals?

> `optional` **onlyCheckPrioritizedIncomingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:29](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L29)

Whether or not to only check the prioritized approvals. If false, we will check all approvals with any prioritized first.

This only applies to the "incoming" level approvals specified.

#### Implementation of

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`onlyCheckPrioritizedIncomingApprovals`](/sdk/reference/interfaces/i-transfer#onlycheckprioritizedincomingapprovals)

***

### onlyCheckPrioritizedOutgoingApprovals?

> `optional` **onlyCheckPrioritizedOutgoingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:30](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L30)

Whether or not to only check the prioritized approvals. If false, we will check all approvals with any prioritized first.

This only applies to the "outgoing" level approvals specified.

#### Implementation of

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`onlyCheckPrioritizedOutgoingApprovals`](/sdk/reference/interfaces/i-transfer#onlycheckprioritizedoutgoingapprovals)

***

### precalculateBalancesFromApproval?

> `optional` **precalculateBalancesFromApproval?**: [`PrecalculateBalancesFromApprovalDetails`](/sdk/reference/classes/precalculate-balances-from-approval-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:23](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L23)

If specified, we will precalculate from this approval and override the balances. This can only be used when the specified approval has predeterminedBalances set.

#### Implementation of

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`precalculateBalancesFromApproval`](/sdk/reference/interfaces/i-transfer#precalculatebalancesfromapproval)

***

### prioritizedApprovals?

> `optional` **prioritizedApprovals?**: [`ApprovalIdentifierDetails`](/sdk/reference/classes/approval-identifier-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L27)

The prioritized approvals to use for the transfer. If specified, we will check these first.

#### Implementation of

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`prioritizedApprovals`](/sdk/reference/interfaces/i-transfer#prioritizedapprovals)

***

### toAddresses

> **toAddresses**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:21](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L21)

The addresses to transfer to.

#### Implementation of

[`iTransfer`](/sdk/reference/interfaces/i-transfer).[`toAddresses`](/sdk/reference/interfaces/i-transfer#toaddresses)

## Methods

### clone()

> **clone**(): `Transfer`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`Transfer`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `Transfer`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:56](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L56)

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

`Transfer`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:52](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L52)

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

### toBech32Addresses()

> **toBech32Addresses**(`prefix`): `Transfer`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:101](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L101)

#### Parameters

##### prefix

`string`

#### Returns

`Transfer`\<`T`\>

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

### toProto()

> **toProto**(): `Transfer`

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:60](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L60)

#### Returns

`Transfer`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `Transfer`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:64](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L64)

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

`Transfer`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `Transfer`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:72](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L72)

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

`Transfer`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `Transfer`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/transfers.ts:80](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/transfers.ts#L80)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`Transfer`

##### convertFunction

(`item`) => `U`

#### Returns

`Transfer`\<`U`\>
