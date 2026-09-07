---
description: "IncomingApprovalCriteria represents the details of an incoming approval."
---

# Class: IncomingApprovalCriteria\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1142](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1142)

IncomingApprovalCriteria represents the details of an incoming approval.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`IncomingApprovalCriteria`\<`T`\>\>

## Extended by

- [`IncomingApprovalCriteriaWithDetails`](/sdk/reference/classes/incoming-approval-criteria-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria)\<`T`\>

## Constructors

### Constructor

> **new IncomingApprovalCriteria**\<`T`\>(`msg`): `IncomingApprovalCriteria`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1164](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1164)

#### Parameters

##### msg

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria)\<`T`\>

#### Returns

`IncomingApprovalCriteria`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### altTimeChecks?

> `optional` **altTimeChecks?**: [`AltTimeChecks`](/sdk/reference/classes/alt-time-checks)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1159](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1159)

Alternative time-based checks for approval denial (offline hours/days).

#### Implementation of

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`altTimeChecks`](/sdk/reference/interfaces/i-incoming-approval-criteria#alttimechecks)

***

### approvalAmounts?

> `optional` **approvalAmounts?**: [`ApprovalAmounts`](/sdk/reference/classes/approval-amounts)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1149](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1149)

The maximum approved amounts for this approval.

#### Implementation of

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`approvalAmounts`](/sdk/reference/interfaces/i-incoming-approval-criteria#approvalamounts)

***

### autoDeletionOptions?

> `optional` **autoDeletionOptions?**: [`AutoDeletionOptions`](/sdk/reference/classes/auto-deletion-options)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1151)

Whether the approval should be deleted after one use.

#### Implementation of

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`autoDeletionOptions`](/sdk/reference/interfaces/i-incoming-approval-criteria#autodeletionoptions)

***

### coinTransfers?

> `optional` **coinTransfers?**: [`CoinTransfer`](/sdk/reference/classes/coin-transfer)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1154](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1154)

The BADGE or sdk.coin transfers to be executed upon every approval.

#### Implementation of

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`coinTransfers`](/sdk/reference/interfaces/i-incoming-approval-criteria#cointransfers)

***

### dynamicStoreChallenges?

> `optional` **dynamicStoreChallenges?**: [`DynamicStoreChallenge`](/sdk/reference/classes/dynamic-store-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1155](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1155)

The list of dynamic store challenges that the initiator must pass for approval.

#### Implementation of

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`dynamicStoreChallenges`](/sdk/reference/interfaces/i-incoming-approval-criteria#dynamicstorechallenges)

***

### ethSignatureChallenges?

> `optional` **ethSignatureChallenges?**: [`ETHSignatureChallenge`](/sdk/reference/classes/eth-signature-challenge)[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1156](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1156)

The list of ETH signature challenges that the initiator must pass for approval.

#### Implementation of

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`ethSignatureChallenges`](/sdk/reference/interfaces/i-incoming-approval-criteria#ethsignaturechallenges)

***

### evmQueryChallenges?

> `optional` **evmQueryChallenges?**: [`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1162](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1162)

EVM query challenges that must pass for approval. Read-only contract queries that verify external EVM state.

#### Implementation of

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`evmQueryChallenges`](/sdk/reference/interfaces/i-incoming-approval-criteria#evmquerychallenges)

***

### initiatorChecks?

> `optional` **initiatorChecks?**: [`AddressChecks`](/sdk/reference/classes/address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1158](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1158)

Address checks for initiator

#### Implementation of

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`initiatorChecks`](/sdk/reference/interfaces/i-incoming-approval-criteria#initiatorchecks)

***

### maxNumTransfers?

> `optional` **maxNumTransfers?**: [`MaxNumTransfers`](/sdk/reference/classes/max-num-transfers)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1150](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1150)

The max num transfers for this approval.

#### Implementation of

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`maxNumTransfers`](/sdk/reference/interfaces/i-incoming-approval-criteria#maxnumtransfers)

***

### merkleChallenges?

> `optional` **merkleChallenges?**: [`MerkleChallenge`](/sdk/reference/classes/merkle-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1146](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1146)

The list of merkle challenges that need valid proofs to be approved.

#### Implementation of

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`merkleChallenges`](/sdk/reference/interfaces/i-incoming-approval-criteria#merklechallenges)

***

### mustOwnTokens?

> `optional` **mustOwnTokens?**: [`MustOwnTokens`](/sdk/reference/classes/must-own-tokens)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1147](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1147)

The list of must own tokens that need valid proofs to be approved.

#### Implementation of

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`mustOwnTokens`](/sdk/reference/interfaces/i-incoming-approval-criteria#mustowntokens)

***

### mustPrioritize?

> `optional` **mustPrioritize?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1160](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1160)

If true, this approval must be explicitly prioritized in PrioritizedApprovals to be used.

#### Implementation of

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`mustPrioritize`](/sdk/reference/interfaces/i-incoming-approval-criteria#mustprioritize)

***

### predeterminedBalances?

> `optional` **predeterminedBalances?**: [`PredeterminedBalances`](/sdk/reference/classes/predetermined-balances)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1148](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1148)

The predetermined balances for each transfer using this approval.

#### Implementation of

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`predeterminedBalances`](/sdk/reference/interfaces/i-incoming-approval-criteria#predeterminedbalances)

***

### requireFromDoesNotEqualInitiatedBy?

> `optional` **requireFromDoesNotEqualInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1153](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1153)

Whether the from address must not equal the initiatedBy address.

#### Implementation of

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`requireFromDoesNotEqualInitiatedBy`](/sdk/reference/interfaces/i-incoming-approval-criteria#requirefromdoesnotequalinitiatedby)

***

### requireFromEqualsInitiatedBy?

> `optional` **requireFromEqualsInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1152](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1152)

Whether the from address must equal the initiatedBy address.

#### Implementation of

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`requireFromEqualsInitiatedBy`](/sdk/reference/interfaces/i-incoming-approval-criteria#requirefromequalsinitiatedby)

***

### senderChecks?

> `optional` **senderChecks?**: [`AddressChecks`](/sdk/reference/classes/address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1157)

Address checks for sender

#### Implementation of

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`senderChecks`](/sdk/reference/interfaces/i-incoming-approval-criteria#senderchecks)

***

### votingChallenges?

> `optional` **votingChallenges?**: [`VotingChallenge`](/sdk/reference/classes/voting-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1161)

The list of voting challenges that must be satisfied for approval.

#### Implementation of

[`iIncomingApprovalCriteria`](/sdk/reference/interfaces/i-incoming-approval-criteria).[`votingChallenges`](/sdk/reference/interfaces/i-incoming-approval-criteria#votingchallenges)

## Methods

### castToCollectionApprovalCriteria()

> **castToCollectionApprovalCriteria**(): [`ApprovalCriteria`](/sdk/reference/classes/approval-criteria)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1258](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1258)

#### Returns

[`ApprovalCriteria`](/sdk/reference/classes/approval-criteria)\<`T`\>

***

### clone()

> **clone**(): `IncomingApprovalCriteria`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`IncomingApprovalCriteria`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `IncomingApprovalCriteria`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1185](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1185)

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

`IncomingApprovalCriteria`\<`U`\>

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

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:157](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L157)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Inherited from

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

> **toBech32Addresses**(`prefix`): `IncomingApprovalCriteria`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1285](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1285)

#### Parameters

##### prefix

`string`

#### Returns

`IncomingApprovalCriteria`\<`T`\>

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

> **toProto**(): `IncomingApprovalCriteria`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1207](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1207)

#### Returns

`IncomingApprovalCriteria`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `IncomingApprovalCriteria`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1215](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1215)

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

`IncomingApprovalCriteria`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `IncomingApprovalCriteria`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1223](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1223)

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

`IncomingApprovalCriteria`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `IncomingApprovalCriteria`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1231](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1231)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`IncomingApprovalCriteria`

##### convertFunction

(`item`) => `U`

#### Returns

`IncomingApprovalCriteria`\<`U`\>
