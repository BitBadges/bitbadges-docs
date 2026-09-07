---
description: "Generated schema for tokenization/user_balance_store.proto: 1 message in the x/tokenization module."
---

# tokenization/user_balance_store.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 1 message. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/user_balance_store.proto).

## Messages

### UserBalanceStore

UserBalanceStore is the store for the user balances for a collection.

It consists of a list of balances, a list of approved outgoing transfers, and a list of approved incoming transfers, as well as the permissions for updating the approved incoming/outgoing transfers.

Upon initialization, all fields (minus the balances) are set to the defaults specified by the collection.

The outgoing transfers can be used to allow / disallow transfers which are sent from this user. If a transfer has no match, then it is disallowed by default, unless from == initiatedBy (i.e. initiated by this user) and autoApproveSelfInitiatedOutgoingTransfers is set to true.

The incoming transfers can be used to allow / disallow transfers which are sent to this user. If a transfer has no match, then it is disallowed by default, unless to == initiatedBy (i.e. initiated by this user) and autoApproveSelfInitiatedIncomingTransfers is set to true.

Note that the user approved transfers are only checked if the collection approved transfers do not specify to override the user approved transfers.

The permissions are used to determine whether the user can update the approved incoming/outgoing transfers and auto approvals.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `balances` | 1 | [`Balance`](balances.md#balance) | repeated | The list of balances associated with this user. |
| `outgoingApprovals` | 2 | [`UserOutgoingApproval`](approvals.md#useroutgoingapproval) | repeated | The list of approved outgoing transfers for this user. |
| `incomingApprovals` | 3 | [`UserIncomingApproval`](approvals.md#userincomingapproval) | repeated | The list of approved incoming transfers for this user. |
| `autoApproveSelfInitiatedOutgoingTransfers` | 4 | `bool` | singular | Whether to auto-approve self-initiated outgoing transfers for this user (i.e. from == initiatedBy). |
| `autoApproveSelfInitiatedIncomingTransfers` | 5 | `bool` | singular | Whether to auto-approve self-initiated incoming transfers for this user (i.e. to == initiatedBy). |
| `autoApproveAllIncomingTransfers` | 6 | `bool` | singular | Whether to auto-approve all incoming transfers by default. This is just shorthand for adding an accept everything incoming approval with no restrictions. |
| `userPermissions` | 7 | [`UserPermissions`](permissions.md#userpermissions) | singular | The permissions for this user's actions and transfers. |
