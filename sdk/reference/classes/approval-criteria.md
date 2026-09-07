---
description: "ApprovalCriteria represents the criteria for an approval. The approvee must satisfy all of the criteria to be approved."
---

# Class: ApprovalCriteria\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1719](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1719)

ApprovalCriteria represents the criteria for an approval. The approvee must satisfy all of the criteria to be approved.

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`ApprovalCriteria`\<`T`\>\>

## Extended by

- [`ApprovalCriteriaWithDetails`](/sdk/reference/classes/approval-criteria-with-details)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria)\<`T`\>

## Constructors

### Constructor

> **new ApprovalCriteria**\<`T`\>(`msg`): `ApprovalCriteria`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1746](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1746)

#### Parameters

##### msg

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria)\<`T`\>

#### Returns

`ApprovalCriteria`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### allowBackedMinting?

> `optional` **allowBackedMinting?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1743](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1743)

If true, this collection approval allows backed minting operations (CosmosCoinBackedPath). When false, this approval cannot be used for transfers involving backed minting addresses. This prevents accidental allowances when toListIds is "All".

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`allowBackedMinting`](/sdk/reference/interfaces/i-approval-criteria#allowbackedminting)

***

### allowSpecialWrapping?

> `optional` **allowSpecialWrapping?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1744](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1744)

If true, this collection approval allows special wrapping operations (CosmosCoinWrapperPath). When false, this approval cannot be used for transfers involving wrapping addresses. This prevents accidental allowances when toListIds is "All".

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`allowSpecialWrapping`](/sdk/reference/interfaces/i-approval-criteria#allowspecialwrapping)

***

### altTimeChecks?

> `optional` **altTimeChecks?**: [`AltTimeChecks`](/sdk/reference/classes/alt-time-checks)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1739](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1739)

Alternative time-based checks for approval denial (offline hours/days).

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`altTimeChecks`](/sdk/reference/interfaces/i-approval-criteria#alttimechecks)

***

### approvalAmounts?

> `optional` **approvalAmounts?**: [`ApprovalAmounts`](/sdk/reference/classes/approval-amounts)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1723](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1723)

The maximum approved amounts for this approval.

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`approvalAmounts`](/sdk/reference/interfaces/i-approval-criteria#approvalamounts)

***

### autoDeletionOptions?

> `optional` **autoDeletionOptions?**: [`AutoDeletionOptions`](/sdk/reference/classes/auto-deletion-options)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1725](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1725)

Whether the approval should be deleted after one use.

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`autoDeletionOptions`](/sdk/reference/interfaces/i-approval-criteria#autodeletionoptions)

***

### coinTransfers?

> `optional` **coinTransfers?**: [`CoinTransfer`](/sdk/reference/classes/coin-transfer)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1732](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1732)

The BADGE or sdk.coin transfers to be executed upon every approval.

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`coinTransfers`](/sdk/reference/interfaces/i-approval-criteria#cointransfers)

***

### dynamicStoreChallenges?

> `optional` **dynamicStoreChallenges?**: [`DynamicStoreChallenge`](/sdk/reference/classes/dynamic-store-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1734](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1734)

The list of dynamic store challenges that the initiator must pass for approval.

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`dynamicStoreChallenges`](/sdk/reference/interfaces/i-approval-criteria#dynamicstorechallenges)

***

### ethSignatureChallenges?

> `optional` **ethSignatureChallenges?**: [`ETHSignatureChallenge`](/sdk/reference/classes/eth-signature-challenge)[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1735](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1735)

The list of ETH signature challenges that the initiator must pass for approval.

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`ethSignatureChallenges`](/sdk/reference/interfaces/i-approval-criteria#ethsignaturechallenges)

***

### evmQueryChallenges?

> `optional` **evmQueryChallenges?**: [`EVMQueryChallenge`](/sdk/reference/classes/evm-query-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1742](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1742)

EVM query challenges that must pass for approval. Read-only contract queries that verify external EVM state.

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`evmQueryChallenges`](/sdk/reference/interfaces/i-approval-criteria#evmquerychallenges)

***

### initiatorChecks?

> `optional` **initiatorChecks?**: [`AddressChecks`](/sdk/reference/classes/address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1738](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1738)

Address checks for initiator

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`initiatorChecks`](/sdk/reference/interfaces/i-approval-criteria#initiatorchecks)

***

### maxNumTransfers?

> `optional` **maxNumTransfers?**: [`MaxNumTransfers`](/sdk/reference/classes/max-num-transfers)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1724](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1724)

The max num transfers for this approval.

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`maxNumTransfers`](/sdk/reference/interfaces/i-approval-criteria#maxnumtransfers)

***

### merkleChallenges?

> `optional` **merkleChallenges?**: [`MerkleChallenge`](/sdk/reference/classes/merkle-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1720](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1720)

The list of merkle challenges that need valid proofs to be approved.

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`merkleChallenges`](/sdk/reference/interfaces/i-approval-criteria#merklechallenges)

***

### mustOwnTokens?

> `optional` **mustOwnTokens?**: [`MustOwnTokens`](/sdk/reference/classes/must-own-tokens)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1721](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1721)

The list of must own tokens that need valid proofs to be approved.

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`mustOwnTokens`](/sdk/reference/interfaces/i-approval-criteria#mustowntokens)

***

### mustPrioritize?

> `optional` **mustPrioritize?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1740](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1740)

If true, this approval must be explicitly prioritized in PrioritizedApprovals to be used.

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`mustPrioritize`](/sdk/reference/interfaces/i-approval-criteria#mustprioritize)

***

### overridesFromOutgoingApprovals?

> `optional` **overridesFromOutgoingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1730](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1730)

Whether this approval overrides the from address's approved outgoing transfers.

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`overridesFromOutgoingApprovals`](/sdk/reference/interfaces/i-approval-criteria#overridesfromoutgoingapprovals)

***

### overridesToIncomingApprovals?

> `optional` **overridesToIncomingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1731](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1731)

Whether this approval overrides the to address's approved incoming transfers.

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`overridesToIncomingApprovals`](/sdk/reference/interfaces/i-approval-criteria#overridestoincomingapprovals)

***

### predeterminedBalances?

> `optional` **predeterminedBalances?**: [`PredeterminedBalances`](/sdk/reference/classes/predetermined-balances)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1722](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1722)

The predetermined balances for each transfer. These allow approvals to use predetermined balance amounts rather than an incrementing tally system.

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`predeterminedBalances`](/sdk/reference/interfaces/i-approval-criteria#predeterminedbalances)

***

### recipientChecks?

> `optional` **recipientChecks?**: [`AddressChecks`](/sdk/reference/classes/address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1737](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1737)

Address checks for recipient

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`recipientChecks`](/sdk/reference/interfaces/i-approval-criteria#recipientchecks)

***

### requireFromDoesNotEqualInitiatedBy?

> `optional` **requireFromDoesNotEqualInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1729](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1729)

Whether the from address must not equal the initiatedBy address.

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`requireFromDoesNotEqualInitiatedBy`](/sdk/reference/interfaces/i-approval-criteria#requirefromdoesnotequalinitiatedby)

***

### requireFromEqualsInitiatedBy?

> `optional` **requireFromEqualsInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1727](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1727)

Whether the from address must equal the initiatedBy address.

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`requireFromEqualsInitiatedBy`](/sdk/reference/interfaces/i-approval-criteria#requirefromequalsinitiatedby)

***

### requireToDoesNotEqualInitiatedBy?

> `optional` **requireToDoesNotEqualInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1728](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1728)

Whether the to address must not equal the initiatedBy address.

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`requireToDoesNotEqualInitiatedBy`](/sdk/reference/interfaces/i-approval-criteria#requiretodoesnotequalinitiatedby)

***

### requireToEqualsInitiatedBy?

> `optional` **requireToEqualsInitiatedBy?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1726](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1726)

Whether the to address must equal the initiatedBy address.

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`requireToEqualsInitiatedBy`](/sdk/reference/interfaces/i-approval-criteria#requiretoequalsinitiatedby)

***

### senderChecks?

> `optional` **senderChecks?**: [`AddressChecks`](/sdk/reference/classes/address-checks)

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1736](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1736)

Address checks for sender

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`senderChecks`](/sdk/reference/interfaces/i-approval-criteria#senderchecks)

***

### userApprovalSettings?

> `optional` **userApprovalSettings?**: [`UserApprovalSettings`](/sdk/reference/classes/user-approval-settings)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1733](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1733)

Issuer-imposed constraints on user-level approvals. Includes royalties, allowed denoms, and coin transfer restrictions.

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`userApprovalSettings`](/sdk/reference/interfaces/i-approval-criteria#userapprovalsettings)

***

### votingChallenges?

> `optional` **votingChallenges?**: [`VotingChallenge`](/sdk/reference/classes/voting-challenge)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1741](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1741)

The list of voting challenges that must be satisfied for approval.

#### Implementation of

[`iApprovalCriteria`](/sdk/reference/interfaces/i-approval-criteria).[`votingChallenges`](/sdk/reference/interfaces/i-approval-criteria#votingchallenges)

## Methods

### clone()

> **clone**(): `ApprovalCriteria`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:151](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L151)

Deep copies the object and returns a new instance.

#### Returns

`ApprovalCriteria`

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `ApprovalCriteria`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1775](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1775)

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

`ApprovalCriteria`\<`U`\>

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

> **toBech32Addresses**(`prefix`): `ApprovalCriteria`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1835](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1835)

#### Parameters

##### prefix

`string`

#### Returns

`ApprovalCriteria`\<`T`\>

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

> **toProto**(): `ApprovalCriteria`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1779](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1779)

#### Returns

`ApprovalCriteria`

***

### fromJson()

> `static` **fromJson**\<`U`\>(`jsonValue`, `convertFunction`, `options?`): `ApprovalCriteria`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1787](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1787)

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

`ApprovalCriteria`\<`U`\>

***

### fromJsonString()

> `static` **fromJsonString**\<`U`\>(`jsonString`, `convertFunction`, `options?`): `ApprovalCriteria`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1795](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1795)

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

`ApprovalCriteria`\<`U`\>

***

### fromProto()

> `static` **fromProto**\<`U`\>(`item`, `convertFunction`): `ApprovalCriteria`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:1803](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L1803)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### item

`ApprovalCriteria`

##### convertFunction

(`item`) => `U`

#### Returns

`ApprovalCriteria`\<`U`\>
