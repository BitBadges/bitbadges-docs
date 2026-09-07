---
description: "T extends NumberType"
---

# Interface: iMsgUpdateUserApprovals\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:142](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L142)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### autoApproveAllIncomingTransfers?

> `optional` **autoApproveAllIncomingTransfers?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:166](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L166)

The new auto approve all incoming transfers. Must have the necessary permissions to update.

***

### autoApproveSelfInitiatedIncomingTransfers?

> `optional` **autoApproveSelfInitiatedIncomingTransfers?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:162](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L162)

The new auto approve self initiated incoming transfers. Must have the necessary permissions to update.

***

### autoApproveSelfInitiatedOutgoingTransfers?

> `optional` **autoApproveSelfInitiatedOutgoingTransfers?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:158](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L158)

The new auto approve self initiated outgoing transfers. Must have the necessary permissions to update.

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:146](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L146)

The ID of the collection to transfer tokens from.

***

### creator

> **creator**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:144](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L144)

The creator of the transaction.

***

### incomingApprovals?

> `optional` **incomingApprovals?**: [`iUserIncomingApproval`](/sdk/reference/interfaces/i-user-incoming-approval)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:154](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L154)

The new incoming approvals. Must have the necessary permissions to update.

***

### outgoingApprovals?

> `optional` **outgoingApprovals?**: [`iUserOutgoingApproval`](/sdk/reference/interfaces/i-user-outgoing-approval)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:150](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L150)

The new outgoing approvals. Must have the necessary permissions to update.

***

### updateAutoApproveAllIncomingTransfers?

> `optional` **updateAutoApproveAllIncomingTransfers?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:164](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L164)

Whether or not to update the auto approve all incoming transfers.

***

### updateAutoApproveSelfInitiatedIncomingTransfers?

> `optional` **updateAutoApproveSelfInitiatedIncomingTransfers?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:160](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L160)

Whether or not to update the auto approve self initiated incoming transfers (i.e. to == the user and initiator == the user).

***

### updateAutoApproveSelfInitiatedOutgoingTransfers?

> `optional` **updateAutoApproveSelfInitiatedOutgoingTransfers?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:156](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L156)

Whether or not to update the auto approve self initiated outgoing transfers (i.e. from == the user and initiator == the user).

***

### updateIncomingApprovals?

> `optional` **updateIncomingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:152](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L152)

Whether or not to update the incoming approvals.

***

### updateOutgoingApprovals?

> `optional` **updateOutgoingApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:148](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L148)

Whether or not to update the outgoing approvals.

***

### updateUserPermissions?

> `optional` **updateUserPermissions?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:168](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L168)

Whether or not to update the user permissions.

***

### userPermissions?

> `optional` **userPermissions?**: [`iUserPermissions`](/sdk/reference/interfaces/i-user-permissions)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:170](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L170)

The new user permissions. Must have the necessary permissions to update.
