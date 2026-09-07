---
description: "Every x/tokenization message, who signs it, and what it does. One page per message."
---

# Messages

The `x/tokenization` module accepts 27 messages. Most are signed by the collection manager or by the user whose approvals change. Two are governance only.

Every message page follows the same shape: one working example in the `bb` CLI, the TypeScript SDK, and raw JSON, then the field table from the proto, then behavior (validation, permissions, side effects, errors).

## Collection Lifecycle

| Message | Signer | What it does |
| --- | --- | --- |
| [MsgCreateCollection](msg-create-collection.md) | anyone | Create a collection. The only time `defaultBalances` and `invariants` can be set. |
| [MsgUpdateCollection](msg-update-collection.md) | manager | Update collection fields with update flags. Permissions are checked. |
| [MsgUniversalUpdateCollection](msg-universal-update-collection.md) | anyone (create) or manager (update) | Legacy create-or-update interface. `collectionId: "0"` creates. |
| [MsgDeleteCollection](msg-delete-collection.md) | manager | Delete a collection and purge its state. Needs `canDeleteCollection`. |

## Single-Field Collection Updates

Each of these sets one field plus the permission that guards it. They wrap `MsgUniversalUpdateCollection`.

| Message | Signer | What it does |
| --- | --- | --- |
| [MsgSetValidTokenIds](msg-set-valid-token-ids.md) | manager | Set `validTokenIds` and `canUpdateValidTokenIds`. |
| [MsgSetManager](msg-set-manager.md) | manager | Set `manager` and `canUpdateManager`. |
| [MsgSetCollectionMetadata](msg-set-collection-metadata.md) | manager | Set `collectionMetadata` and `canUpdateCollectionMetadata`. |
| [MsgSetTokenMetadata](msg-set-token-metadata.md) | manager | Set `tokenMetadata` and `canUpdateTokenMetadata`. |
| [MsgSetCustomData](msg-set-custom-data.md) | manager | Set `customData` and `canUpdateCustomData`. |
| [MsgSetStandards](msg-set-standards.md) | manager | Set `standards` and `canUpdateStandards`. |
| [MsgSetCollectionApprovals](msg-set-collection-approvals.md) | manager | Set `collectionApprovals` and `canUpdateCollectionApprovals`. |
| [MsgSetIsArchived](msg-set-is-archived.md) | manager | Set `isArchived` and `canArchiveCollection`. |

## Transfers

| Message | Signer | What it does |
| --- | --- | --- |
| [MsgTransferTokens](msg-transfer-tokens.md) | initiator | Move tokens between addresses. Every transfer must match collection, outgoing, and incoming approvals. |

## User Approvals

| Message | Signer | What it does |
| --- | --- | --- |
| [MsgUpdateUserApprovals](msg-update-user-approvals.md) | the user | Replace outgoing or incoming approvals, auto-approve flags, and user permissions. |
| [MsgSetIncomingApproval](msg-set-incoming-approval.md) | the user | Create or replace one incoming approval by ID. |
| [MsgDeleteIncomingApproval](msg-delete-incoming-approval.md) | the user | Delete one incoming approval by ID. |
| [MsgSetOutgoingApproval](msg-set-outgoing-approval.md) | the user | Create or replace one outgoing approval by ID. |
| [MsgDeleteOutgoingApproval](msg-delete-outgoing-approval.md) | the user | Delete one outgoing approval by ID. |
| [MsgPurgeApprovals](msg-purge-approvals.md) | the user or a counterparty | Remove expired user approvals, your own or someone else's when their auto-deletion options allow it. |
| [MsgCastVote](msg-cast-vote.md) | a listed voter | Cast or change a weighted vote on a voting challenge. |

## Address Lists

| Message | Signer | What it does |
| --- | --- | --- |
| [MsgCreateAddressLists](msg-create-address-lists.md) | anyone | Create immutable, reusable address lists by ID. |

## Dynamic Stores

| Message | Signer | What it does |
| --- | --- | --- |
| [MsgCreateDynamicStore](msg-create-dynamic-store.md) | anyone | Create a boolean per-address store. |
| [MsgUpdateDynamicStore](msg-update-dynamic-store.md) | store creator | Replace the default value, kill switch, and metadata. |
| [MsgDeleteDynamicStore](msg-delete-dynamic-store.md) | store creator | Delete a store. |
| [MsgSetDynamicStoreValue](msg-set-dynamic-store-value.md) | store creator | Set the boolean for one address. |

## Governance

| Message | Signer | What it does |
| --- | --- | --- |
| [MsgSetReservedProtocolAddress](msg-set-reserved-protocol-address.md) | x/gov authority | Mark or unmark an address as a reserved protocol address. |
| [MsgUpdateParams](msg-update-params.md) | x/gov authority | Replace the module parameters. |

## Shared Response Types

Several responses share these types.

| Type | Fields | Returned by |
| --- | --- | --- |
| `ApprovalChange` | `approvalId`, `approvalLevel`, `action` (`created`, `edited`, `deleted`), `version` | collection and user approval updates |
| `ApprovalUsed` | `approvalId`, `approvalLevel`, `approverAddress`, `version` | `MsgTransferTokens` |
| `CoinTransferProto` | `from`, `to`, `amount`, `denom`, `isProtocolFee` | `MsgTransferTokens` |
| `reviewItems` | `string[]` of advisory notes about what the transaction did | most messages |

## Collection ID `0`

Messages that act on an existing collection (`MsgTransferTokens`, `MsgUpdateUserApprovals`, the single-approval helpers, `MsgPurgeApprovals`) accept `collectionId: "0"`. The chain resolves it to the most recently created collection. Use this in a multi-message transaction that creates a collection and then acts on it.

## Related

- [Queries](../queries/README.md)
- [Concepts](../concepts/README.md)
- [Sign and broadcast with the SDK](../../sdk/transactions/README.md)
- [Chain CLI](../../cli/chain.md)
