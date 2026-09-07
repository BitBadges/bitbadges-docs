---
description: "Generated schema for tokenization/tx.proto: 1 service, 62 messages in the x/tokenization module."
---

# tokenization/tx.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 1 service, 62 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/tx.proto).

## Service Msg

Msg defines the Msg service.

| RPC | Request | Response | REST path | Description |
| --- | --- | --- | --- | --- |
| `UpdateParams` | [`MsgUpdateParams`](#msgupdateparams) | [`MsgUpdateParamsResponse`](#msgupdateparamsresponse) | none | UpdateParams defines a (governance) operation for updating the module parameters. The authority defaults to the x/gov module account. |
| `UniversalUpdateCollection` | [`MsgUniversalUpdateCollection`](#msguniversalupdatecollection) | [`MsgUniversalUpdateCollectionResponse`](#msguniversalupdatecollectionresponse) | none |   |
| `CreateAddressLists` | [`MsgCreateAddressLists`](#msgcreateaddresslists) | [`MsgCreateAddressListsResponse`](#msgcreateaddresslistsresponse) | none |   |
| `TransferTokens` | [`MsgTransferTokens`](#msgtransfertokens) | [`MsgTransferTokensResponse`](#msgtransfertokensresponse) | none |   |
| `UpdateUserApprovals` | [`MsgUpdateUserApprovals`](#msgupdateuserapprovals) | [`MsgUpdateUserApprovalsResponse`](#msgupdateuserapprovalsresponse) | none |   |
| `SetIncomingApproval` | [`MsgSetIncomingApproval`](#msgsetincomingapproval) | [`MsgSetIncomingApprovalResponse`](#msgsetincomingapprovalresponse) | none |   |
| `DeleteIncomingApproval` | [`MsgDeleteIncomingApproval`](#msgdeleteincomingapproval) | [`MsgDeleteIncomingApprovalResponse`](#msgdeleteincomingapprovalresponse) | none |   |
| `SetOutgoingApproval` | [`MsgSetOutgoingApproval`](#msgsetoutgoingapproval) | [`MsgSetOutgoingApprovalResponse`](#msgsetoutgoingapprovalresponse) | none |   |
| `DeleteOutgoingApproval` | [`MsgDeleteOutgoingApproval`](#msgdeleteoutgoingapproval) | [`MsgDeleteOutgoingApprovalResponse`](#msgdeleteoutgoingapprovalresponse) | none |   |
| `PurgeApprovals` | [`MsgPurgeApprovals`](#msgpurgeapprovals) | [`MsgPurgeApprovalsResponse`](#msgpurgeapprovalsresponse) | none |   |
| `DeleteCollection` | [`MsgDeleteCollection`](#msgdeletecollection) | [`MsgDeleteCollectionResponse`](#msgdeletecollectionresponse) | none |   |
| `UpdateCollection` | [`MsgUpdateCollection`](#msgupdatecollection) | [`MsgUpdateCollectionResponse`](#msgupdatecollectionresponse) | none |   |
| `CreateCollection` | [`MsgCreateCollection`](#msgcreatecollection) | [`MsgCreateCollectionResponse`](#msgcreatecollectionresponse) | none |   |
| `CreateDynamicStore` | [`MsgCreateDynamicStore`](#msgcreatedynamicstore) | [`MsgCreateDynamicStoreResponse`](#msgcreatedynamicstoreresponse) | none |   |
| `UpdateDynamicStore` | [`MsgUpdateDynamicStore`](#msgupdatedynamicstore) | [`MsgUpdateDynamicStoreResponse`](#msgupdatedynamicstoreresponse) | none |   |
| `DeleteDynamicStore` | [`MsgDeleteDynamicStore`](#msgdeletedynamicstore) | [`MsgDeleteDynamicStoreResponse`](#msgdeletedynamicstoreresponse) | none |   |
| `SetDynamicStoreValue` | [`MsgSetDynamicStoreValue`](#msgsetdynamicstorevalue) | [`MsgSetDynamicStoreValueResponse`](#msgsetdynamicstorevalueresponse) | none |   |
| `SetValidTokenIds` | [`MsgSetValidTokenIds`](#msgsetvalidtokenids) | [`MsgSetValidTokenIdsResponse`](#msgsetvalidtokenidsresponse) | none | Helper message types for UniversalUpdateCollection subsets |
| `SetManager` | [`MsgSetManager`](#msgsetmanager) | [`MsgSetManagerResponse`](#msgsetmanagerresponse) | none |   |
| `SetCollectionMetadata` | [`MsgSetCollectionMetadata`](#msgsetcollectionmetadata) | [`MsgSetCollectionMetadataResponse`](#msgsetcollectionmetadataresponse) | none |   |
| `SetTokenMetadata` | [`MsgSetTokenMetadata`](#msgsettokenmetadata) | [`MsgSetTokenMetadataResponse`](#msgsettokenmetadataresponse) | none |   |
| `SetCustomData` | [`MsgSetCustomData`](#msgsetcustomdata) | [`MsgSetCustomDataResponse`](#msgsetcustomdataresponse) | none |   |
| `SetStandards` | [`MsgSetStandards`](#msgsetstandards) | [`MsgSetStandardsResponse`](#msgsetstandardsresponse) | none |   |
| `SetCollectionApprovals` | [`MsgSetCollectionApprovals`](#msgsetcollectionapprovals) | [`MsgSetCollectionApprovalsResponse`](#msgsetcollectionapprovalsresponse) | none |   |
| `SetIsArchived` | [`MsgSetIsArchived`](#msgsetisarchived) | [`MsgSetIsArchivedResponse`](#msgsetisarchivedresponse) | none |   |
| `SetReservedProtocolAddress` | [`MsgSetReservedProtocolAddress`](#msgsetreservedprotocoladdress) | [`MsgSetReservedProtocolAddressResponse`](#msgsetreservedprotocoladdressresponse) | none |   |
| `CastVote` | [`MsgCastVote`](#msgcastvote) | [`MsgCastVoteResponse`](#msgcastvoteresponse) | none |   |

## Messages

### AliasPathAddObject

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `denom` | 1 | `string` | singular |   |
| `conversion` | 2 | [`ConversionWithoutDenom`](collections.md#conversionwithoutdenom) | singular |   |
| `symbol` | 3 | `string` | singular |   |
| `denomUnits` | 4 | [`DenomUnit`](collections.md#denomunit) | repeated |   |
| `metadata` | 5 | [`PathMetadata`](metadata.md#pathmetadata) | singular | The metadata for this alias path. |

### ApprovalChange

ApprovalChange represents a change to an approval (created, edited, or deleted).

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `approvalId` | 1 | `string` | singular |   |
| `approvalLevel` | 2 | `string` | singular |   |
| `action` | 3 | `string` | singular |   |
| `version` | 4 | `string` | singular |   |

### ApprovalUsed

Shared response types

ApprovalUsed represents an approval that was consumed during a transfer.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `approvalId` | 1 | `string` | singular |   |
| `approvalLevel` | 2 | `string` | singular |   |
| `approverAddress` | 3 | `string` | singular |   |
| `version` | 4 | `string` | singular |   |

### CoinTransferProto

CoinTransferProto represents a coin transfer that occurred during a transaction.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `from` | 1 | `string` | singular |   |
| `to` | 2 | `string` | singular |   |
| `amount` | 3 | `string` | singular |   |
| `denom` | 4 | `string` | singular |   |
| `isProtocolFee` | 5 | `bool` | singular |   |

### CosmosCoinBackedPathAddObject

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `conversion` | 1 | [`Conversion`](collections.md#conversion) | singular |   |

### CosmosCoinWrapperPathAddObject

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `denom` | 1 | `string` | singular |   |
| `conversion` | 2 | [`ConversionWithoutDenom`](collections.md#conversionwithoutdenom) | singular |   |
| `symbol` | 3 | `string` | singular |   |
| `denomUnits` | 4 | [`DenomUnit`](collections.md#denomunit) | repeated |   |
| `allowOverrideWithAnyValidToken` | 5 | `bool` | singular |   |
| `metadata` | 6 | [`PathMetadata`](metadata.md#pathmetadata) | singular | The metadata for this wrapper path. |

### InvariantsAddObject

InvariantsAddObject is used for adding invariants without specifying addresses.

Addresses are generated by the keeper and stored in the collection.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `noCustomOwnershipTimes` | 1 | `bool` | singular | If true, all ownership times must be full ranges [{ start: 1, end: GoMaxUInt64 }]. This prevents time-based restrictions on token ownership. |
| `maxSupplyPerId` | 2 | `string` | singular | Maximum supply per token ID. Checked against Total address balances after transfers complete. A value of 0 means no limit (unlimited). |
| `cosmosCoinBackedPath` | 3 | [`CosmosCoinBackedPathAddObject`](#cosmoscoinbackedpathaddobject) | singular | The IBC backed (sdk.coin) path for the collection. Only one path is allowed. Address will be generated by the keeper. |
| `noForcefulPostMintTransfers` | 4 | `bool` | singular | If true, disallows any collection approvals that have overridesFromOutgoingApprovals or overridesToIncomingApprovals set to true. This prevents forceful transfers that bypass user-level approvals. This only applies to transfers where the from address does not equal "Mint". |
| `disablePoolCreation` | 5 | `bool` | singular | If true, disallows pool creation with this collection's assets. When true, any attempt to create a pool with tokenization assets from this collection will fail. |
| `evmQueryChallenges` | 6 | [`EVMQueryChallenge`](challenges.md#evmquerychallenge) | repeated | EVM query invariants that must pass after all transfers complete. These are checked once per message after all balance updates, with access to ALL recipient addresses. Placeholders: $sender, $recipients (comma-separated), $initiator, $collectionId, $recipient |

### MsgCastVote

MsgCastVote allows a voter to cast or update their vote for a voting challenge.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | The address of the voter casting the vote. |
| `collectionId` | 2 | `string` | singular | The collection ID for the voting challenge. |
| `approvalLevel` | 3 | `string` | singular | The approval level ("collection", "incoming", or "outgoing"). |
| `approverAddress` | 4 | `string` | singular | The approver address (empty string for collection-level approvals). |
| `approvalId` | 5 | `string` | singular | The approval ID. |
| `proposalId` | 6 | `string` | singular | The proposal ID (challenge ID) from the VotingChallenge. |
| `yesWeight` | 7 | `string` | singular | The percentage weight (0-100) allocated to "yes" vote. The remaining percentage (100 - yesWeight) is allocated to "no" vote. Example: yesWeight=70 means 70% yes, 30% no. |

### MsgCastVoteResponse

No fields.

### MsgCreateAddressLists

MsgCreateAddressLists is used to create address lists.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `addressLists` | 2 | [`AddressListInput`](address_lists.md#addresslistinput) | repeated | Address lists to create. The createdBy field will be automatically set to the creator address. |

### MsgCreateAddressListsResponse

MsgCreateAddressListsResponse is the response to MsgCreateAddressLists.

No fields.

### MsgCreateCollection

MsgCreateCollection is used to create a new collection.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `defaultBalances` | 2 | [`UserBalanceStore`](user_balance_store.md#userbalancestore) | singular | The default balances for the user |
| `validTokenIds` | 3 | [`UintRange`](balances.md#uintrange) | repeated | New token IDs to add to this collection |
| `collectionPermissions` | 4 | [`CollectionPermissions`](permissions.md#collectionpermissions) | singular | Collection permissions. |
| `manager` | 5 | `string` | singular | Manager address. |
| `collectionMetadata` | 6 | [`CollectionMetadata`](metadata.md#collectionmetadata) | singular | Collection metadata. |
| `tokenMetadata` | 7 | [`TokenMetadata`](metadata.md#tokenmetadata) | repeated | Token metadata entries. |
| `customData` | 8 | `string` | singular | Custom data. |
| `collectionApprovals` | 9 | [`CollectionApproval`](approvals.md#collectionapproval) | repeated | Collection approvals. |
| `standards` | 10 | `string` | repeated | Standards entries. |
| `isArchived` | 11 | `bool` | singular | isArchived flag. |
| `mintEscrowCoinsToTransfer` | 12 | `cosmos.base.v1beta1.Coin` | repeated | Coins to be transferred to the mint escrow address. |
| `cosmosCoinWrapperPathsToAdd` | 13 | [`CosmosCoinWrapperPathAddObject`](#cosmoscoinwrapperpathaddobject) | repeated | IBC wrapper paths to add. |
| `invariants` | 14 | [`InvariantsAddObject`](#invariantsaddobject) | singular | Collection-level invariants that cannot be broken. Addresses are generated by the keeper and stored in the collection. |
| `aliasPathsToAdd` | 15 | [`AliasPathAddObject`](#aliaspathaddobject) | repeated | Alias (non-wrapping) paths to add. |

### MsgCreateCollectionResponse

MsgCreateCollectionResponse is the response to MsgCreateCollection.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular | ID of the collection. |
| `approvalChanges` | 2 | [`ApprovalChange`](#approvalchange) | repeated |   |
| `reviewItems` | 3 | `string` | repeated |   |

### MsgCreateDynamicStore

MsgCreateDynamicStore is used to create a new dynamic store.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `defaultValue` | 2 | `bool` | singular | The default value for uninitialized addresses (true/false). |
| `uri` | 3 | `string` | singular | URI for additional metadata or resources associated with this dynamic store. |
| `customData` | 4 | `string` | singular | Custom data field for storing arbitrary data associated with this dynamic store. |

### MsgCreateDynamicStoreResponse

MsgCreateDynamicStoreResponse is the response to MsgCreateDynamicStore.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `storeId` | 1 | `string` | singular | ID of the dynamic store. |
| `reviewItems` | 2 | `string` | repeated |   |

### MsgDeleteCollection

MsgDeleteCollection is used to delete a collection.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `collectionId` | 2 | `string` | singular | ID of the collection. |

### MsgDeleteCollectionResponse

MsgDeleteCollectionResponse is the response to MsgDeleteCollection.

No fields.

### MsgDeleteDynamicStore

MsgDeleteDynamicStore is used to delete a dynamic store.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `storeId` | 2 | `string` | singular | ID of the dynamic store to delete. |

### MsgDeleteDynamicStoreResponse

MsgDeleteDynamicStoreResponse is the response to MsgDeleteDynamicStore.

No fields.

### MsgDeleteIncomingApproval

MsgDeleteIncomingApproval is a helper message to delete a single incoming approval.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `collectionId` | 2 | `string` | singular | ID of the collection. |
| `approvalId` | 3 | `string` | singular | The ID of the approval to delete. |

### MsgDeleteIncomingApprovalResponse

MsgDeleteIncomingApprovalResponse is the response to MsgDeleteIncomingApproval.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `found` | 1 | `bool` | singular |   |
| `version` | 2 | `string` | singular |   |
| `reviewItems` | 3 | `string` | repeated |   |

### MsgDeleteOutgoingApproval

MsgDeleteOutgoingApproval is a helper message to delete a single outgoing approval.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `collectionId` | 2 | `string` | singular | ID of the collection. |
| `approvalId` | 3 | `string` | singular | The ID of the approval to delete. |

### MsgDeleteOutgoingApprovalResponse

MsgDeleteOutgoingApprovalResponse is the response to MsgDeleteOutgoingApproval.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `found` | 1 | `bool` | singular |   |
| `version` | 2 | `string` | singular |   |
| `reviewItems` | 3 | `string` | repeated |   |

### MsgPurgeApprovals

MsgPurgeApprovals is a helper message to purge expired approvals.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `collectionId` | 2 | `string` | singular | ID of the collection. |
| `purgeExpired` | 3 | `bool` | singular | Whether to purge expired approvals (approvals with no future valid transfer times). |
| `approverAddress` | 4 | `string` | singular | Address of the user whose approvals to purge. If empty, defaults to creator. |
| `purgeCounterpartyApprovals` | 5 | `bool` | singular | Whether to purge counterparty approvals (approvals where the creator is the only initiator). |
| `approvalsToPurge` | 6 | [`ApprovalIdentifierDetails`](approvals.md#approvalidentifierdetails) | repeated | Specific approvals to purge. If empty, purges all applicable approvals based on other flags. |

### MsgPurgeApprovalsResponse

MsgPurgeApprovalsResponse is the response to MsgPurgeApprovals.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `numPurged` | 1 | `string` | singular | Number of approvals purged. |
| `purgedApprovalIds` | 2 | `string` | repeated |   |
| `reviewItems` | 3 | `string` | repeated |   |

### MsgSetCollectionApprovals

MsgSetCollectionApprovals sets the collection approvals and canUpdateCollectionApprovals permission

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `collectionId` | 2 | `string` | singular | ID of the collection. |
| `collectionApprovals` | 3 | [`CollectionApproval`](approvals.md#collectionapproval) | repeated | New collection approvals to set. |
| `canUpdateCollectionApprovals` | 4 | [`CollectionApprovalPermission`](permissions.md#collectionapprovalpermission) | repeated | Permission to update collection approvals |

### MsgSetCollectionApprovalsResponse

MsgSetCollectionApprovalsResponse is the response to MsgSetCollectionApprovals.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular | ID of the collection. |
| `approvalChanges` | 2 | [`ApprovalChange`](#approvalchange) | repeated |   |
| `reviewItems` | 3 | `string` | repeated |   |

### MsgSetCollectionMetadata

MsgSetCollectionMetadata sets the collection metadata and canUpdateCollectionMetadata permission

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `collectionId` | 2 | `string` | singular | ID of the collection. |
| `collectionMetadata` | 3 | [`CollectionMetadata`](metadata.md#collectionmetadata) | singular | New collection metadata to set. |
| `canUpdateCollectionMetadata` | 4 | [`ActionPermission`](permissions.md#actionpermission) | repeated | Permission to update collection metadata |

### MsgSetCollectionMetadataResponse

MsgSetCollectionMetadataResponse is the response to MsgSetCollectionMetadata.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular | ID of the collection. |

### MsgSetCustomData

MsgSetCustomData sets the custom data and canUpdateCustomData permission

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `collectionId` | 2 | `string` | singular | ID of the collection. |
| `customData` | 3 | `string` | singular | New custom data to set. |
| `canUpdateCustomData` | 4 | [`ActionPermission`](permissions.md#actionpermission) | repeated | Permission to update custom data |

### MsgSetCustomDataResponse

MsgSetCustomDataResponse is the response to MsgSetCustomData.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular | ID of the collection. |

### MsgSetDynamicStoreValue

MsgSetDynamicStoreValue is used to set a boolean value for a specific address in a dynamic store.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `storeId` | 2 | `string` | singular | ID of the dynamic store. |
| `address` | 3 | `string` | singular | The address for which to set the value. |
| `value` | 4 | `bool` | singular | The boolean value to set (true/false). |

### MsgSetDynamicStoreValueResponse

MsgSetDynamicStoreValueResponse is the response to MsgSetDynamicStoreValue.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `previousValue` | 1 | `string` | singular |   |
| `reviewItems` | 2 | `string` | repeated |   |

### MsgSetIncomingApproval

MsgSetIncomingApproval is a helper message to set a single incoming approval.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `collectionId` | 2 | `string` | singular | ID of the collection. |
| `approval` | 3 | [`UserIncomingApproval`](approvals.md#userincomingapproval) | singular | The incoming approval to set. |

### MsgSetIncomingApprovalResponse

MsgSetIncomingApprovalResponse is the response to MsgSetIncomingApproval.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `action` | 1 | `string` | singular |   |
| `version` | 2 | `string` | singular |   |
| `reviewItems` | 3 | `string` | repeated |   |

### MsgSetIsArchived

MsgSetIsArchived sets the isArchived and canArchiveCollection permission

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `collectionId` | 2 | `string` | singular | ID of the collection. |
| `isArchived` | 3 | `bool` | singular | New isArchived to set. |
| `canArchiveCollection` | 4 | [`ActionPermission`](permissions.md#actionpermission) | repeated | Permission to archive collection |

### MsgSetIsArchivedResponse

MsgSetIsArchivedResponse is the response to MsgSetIsArchived.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular | ID of the collection. |

### MsgSetManager

MsgSetManager sets the manager and canUpdateManager permission

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `collectionId` | 2 | `string` | singular | ID of the collection. |
| `manager` | 3 | `string` | singular | New manager to set. |
| `canUpdateManager` | 4 | [`ActionPermission`](permissions.md#actionpermission) | repeated | Permission to update manager |

### MsgSetManagerResponse

MsgSetManagerResponse is the response to MsgSetManager.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular | ID of the collection. |

### MsgSetOutgoingApproval

MsgSetOutgoingApproval is a helper message to set a single outgoing approval.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `collectionId` | 2 | `string` | singular | ID of the collection. |
| `approval` | 3 | [`UserOutgoingApproval`](approvals.md#useroutgoingapproval) | singular | The outgoing approval to set. |

### MsgSetOutgoingApprovalResponse

MsgSetOutgoingApprovalResponse is the response to MsgSetOutgoingApproval.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `action` | 1 | `string` | singular |   |
| `version` | 2 | `string` | singular |   |
| `reviewItems` | 3 | `string` | repeated |   |

### MsgSetReservedProtocolAddress

MsgSetReservedProtocolAddress sets or unsets a reserved protocol address (governance-only).

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `authority` | 1 | `string` | singular | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| `address` | 2 | `string` | singular | Address to set or unset as reserved protocol address. |
| `isReservedProtocol` | 3 | `bool` | singular | Whether the address should be a reserved protocol address (true) or not (false). |

### MsgSetReservedProtocolAddressResponse

MsgSetReservedProtocolAddressResponse is the response to MsgSetReservedProtocolAddress.

No fields.

### MsgSetStandards

MsgSetStandards sets the standards and canUpdateStandards permission

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `collectionId` | 2 | `string` | singular | ID of the collection. |
| `standards` | 3 | `string` | repeated | New standards to set. |
| `canUpdateStandards` | 4 | [`ActionPermission`](permissions.md#actionpermission) | repeated | Permission to update standards |

### MsgSetStandardsResponse

MsgSetStandardsResponse is the response to MsgSetStandards.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular | ID of the collection. |

### MsgSetTokenMetadata

MsgSetTokenMetadata sets the token metadata and canUpdateTokenMetadata permission

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `collectionId` | 2 | `string` | singular | ID of the collection. |
| `tokenMetadata` | 3 | [`TokenMetadata`](metadata.md#tokenmetadata) | repeated | New token metadata to set. |
| `canUpdateTokenMetadata` | 4 | [`TokenIdsActionPermission`](permissions.md#tokenidsactionpermission) | repeated | Permission to update token metadata |

### MsgSetTokenMetadataResponse

MsgSetTokenMetadataResponse is the response to MsgSetTokenMetadata.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular | ID of the collection. |

### MsgSetValidTokenIds

Helper message types for UniversalUpdateCollection subsets

These are convenience messages that set specific subsets of the UniversalUpdateCollection message

MsgSetValidTokenIds sets the validTokenIds and canUpdateValidTokenIds permission

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `collectionId` | 2 | `string` | singular | ID of the collection. |
| `validTokenIds` | 3 | [`UintRange`](balances.md#uintrange) | repeated | New token IDs to add to this collection |
| `canUpdateValidTokenIds` | 4 | [`TokenIdsActionPermission`](permissions.md#tokenidsactionpermission) | repeated | Permission to update valid token IDs |

### MsgSetValidTokenIdsResponse

MsgSetValidTokenIdsResponse is the response to MsgSetValidTokenIds.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular | ID of the collection. |

### MsgTransferTokens

MsgTransferTokens is used to transfer tokens.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `collectionId` | 2 | `string` | singular | ID of the collection. |
| `transfers` | 3 | [`Transfer`](transfers.md#transfer) | repeated | Transfers to execute. |

### MsgTransferTokensResponse

MsgTransferTokensResponse is the response to MsgTransferTokens.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `approvalsUsed` | 1 | [`ApprovalUsed`](#approvalused) | repeated |   |
| `coinTransfers` | 2 | [`CoinTransferProto`](#cointransferproto) | repeated |   |
| `balancesTransferred` | 3 | [`Balance`](balances.md#balance) | repeated |   |
| `reviewItems` | 4 | `string` | repeated |   |

### MsgUniversalUpdateCollection

MsgUniversalUpdateCollection is used to define MsgServer types for all requests and responses for Msgs of the tokens module.

It is a universal interface that can be used for both creating and updating collections.

We have it defined for legacy purposes, but it is recommended to use MsgCreateCollection and MsgUpdateCollection instead.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `collectionId` | 2 | `string` | singular | ID of the collection (0 for new collection). |
| `defaultBalances` | 3 | [`UserBalanceStore`](user_balance_store.md#userbalancestore) | singular | The default balances for the user |
| `updateValidTokenIds` | 4 | `bool` | singular | Indicates if the valid token IDs should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `validTokenIds` | 5 | [`UintRange`](balances.md#uintrange) | repeated | New token IDs to add to this collection |
| `updateCollectionPermissions` | 6 | `bool` | singular | Indicates if collection permissions should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `collectionPermissions` | 7 | [`CollectionPermissions`](permissions.md#collectionpermissions) | singular | New collection permissions to set. |
| `updateManager` | 8 | `bool` | singular | Indicates if the manager should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `manager` | 9 | `string` | singular | New manager to set. |
| `updateCollectionMetadata` | 10 | `bool` | singular | Indicates if the collection metadata should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `collectionMetadata` | 11 | [`CollectionMetadata`](metadata.md#collectionmetadata) | singular | New collection metadata to set. |
| `updateTokenMetadata` | 12 | `bool` | singular | Indicates if the token metadata should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `tokenMetadata` | 13 | [`TokenMetadata`](metadata.md#tokenmetadata) | repeated | New token metadata to set. |
| `updateCustomData` | 14 | `bool` | singular | Indicates if the custom data should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `customData` | 15 | `string` | singular | New custom data to set. |
| `updateCollectionApprovals` | 16 | `bool` | singular | Indicates if collection approvals should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `collectionApprovals` | 17 | [`CollectionApproval`](approvals.md#collectionapproval) | repeated | New collection approvals to set. |
| `updateStandards` | 18 | `bool` | singular | Indicates if the standards should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `standards` | 19 | `string` | repeated | New standards to set. |
| `updateIsArchived` | 20 | `bool` | singular | Indicates if the isArchived should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `isArchived` | 21 | `bool` | singular | New isArchived to set. |
| `mintEscrowCoinsToTransfer` | 22 | `cosmos.base.v1beta1.Coin` | repeated | Coins to be transferred to the mint escrow address. |
| `cosmosCoinWrapperPathsToAdd` | 23 | [`CosmosCoinWrapperPathAddObject`](#cosmoscoinwrapperpathaddobject) | repeated | IBC wrapper paths to add. |
| `invariants` | 24 | [`InvariantsAddObject`](#invariantsaddobject) | singular | Collection-level invariants that cannot be broken. These are set upon genesis and cannot be modified. Addresses are generated by the keeper and stored in the collection. |
| `aliasPathsToAdd` | 25 | [`AliasPathAddObject`](#aliaspathaddobject) | repeated | Alias (non-wrapping) paths to add. |

### MsgUniversalUpdateCollectionResponse

MsgUniversalUpdateCollectionResponse is the response to MsgUniversalUpdateCollection.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular | ID of the collection. |
| `approvalChanges` | 2 | [`ApprovalChange`](#approvalchange) | repeated |   |
| `reviewItems` | 3 | `string` | repeated |   |

### MsgUpdateCollection

MsgUpdateCollection is used to update a collection.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `collectionId` | 2 | `string` | singular | ID of the collection (0 for new collection). |
| `updateValidTokenIds` | 3 | `bool` | singular | Indicates if the valid token IDs should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `validTokenIds` | 4 | [`UintRange`](balances.md#uintrange) | repeated | New token IDs to add to this collection |
| `updateCollectionPermissions` | 5 | `bool` | singular | Indicates if collection permissions should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `collectionPermissions` | 6 | [`CollectionPermissions`](permissions.md#collectionpermissions) | singular | New collection permissions to set. |
| `updateManager` | 7 | `bool` | singular | Indicates if the manager should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `manager` | 8 | `string` | singular | New manager to set. |
| `updateCollectionMetadata` | 9 | `bool` | singular | Indicates if the collection metadata should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `collectionMetadata` | 10 | [`CollectionMetadata`](metadata.md#collectionmetadata) | singular | New collection metadata to set. |
| `updateTokenMetadata` | 11 | `bool` | singular | Indicates if the token metadata should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `tokenMetadata` | 12 | [`TokenMetadata`](metadata.md#tokenmetadata) | repeated | New token metadata to set. |
| `updateCustomData` | 13 | `bool` | singular | Indicates if the custom data should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `customData` | 14 | `string` | singular | New custom data to set. |
| `updateCollectionApprovals` | 15 | `bool` | singular | Indicates if collection approvals should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `collectionApprovals` | 16 | [`CollectionApproval`](approvals.md#collectionapproval) | repeated | New collection approvals to set. |
| `updateStandards` | 17 | `bool` | singular | Indicates if the standards should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `standards` | 18 | `string` | repeated | New standards to set. |
| `updateIsArchived` | 19 | `bool` | singular | Indicates if the isArchived should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `isArchived` | 20 | `bool` | singular | New isArchived to set. |
| `mintEscrowCoinsToTransfer` | 21 | `cosmos.base.v1beta1.Coin` | repeated | Coins to be transferred to the mint escrow address. |
| `cosmosCoinWrapperPathsToAdd` | 22 | [`CosmosCoinWrapperPathAddObject`](#cosmoscoinwrapperpathaddobject) | repeated | IBC wrapper paths to add. |
| `invariants` | 23 | [`InvariantsAddObject`](#invariantsaddobject) | singular | Collection-level invariants that cannot be broken. These are set upon genesis and cannot be modified. Addresses are generated by the keeper and stored in the collection. |
| `aliasPathsToAdd` | 24 | [`AliasPathAddObject`](#aliaspathaddobject) | repeated | Alias (non-wrapping) paths to add. |

### MsgUpdateCollectionResponse

MsgUpdateCollectionResponse is the response to MsgUpdateCollection.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular | ID of the collection. |
| `approvalChanges` | 2 | [`ApprovalChange`](#approvalchange) | repeated |   |
| `reviewItems` | 3 | `string` | repeated |   |

### MsgUpdateDynamicStore

MsgUpdateDynamicStore is used to update an existing dynamic store.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `storeId` | 2 | `string` | singular | ID of the dynamic store to update. |
| `defaultValue` | 3 | `bool` | singular | The new default value for uninitialized addresses (true/false). |
| `globalEnabled` | 4 | `bool` | singular | The global kill switch state (true = enabled, false = disabled/halted). Callers should query the current value first if they want to keep it unchanged. |
| `uri` | 5 | `string` | singular | URI for additional metadata or resources associated with this dynamic store. |
| `customData` | 6 | `string` | singular | Custom data field for storing arbitrary data associated with this dynamic store. |

### MsgUpdateDynamicStoreResponse

MsgUpdateDynamicStoreResponse is the response to MsgUpdateDynamicStore.

No fields.

### MsgUpdateParams

MsgUpdateParams is the Msg/UpdateParams request type.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `authority` | 1 | `string` | singular | authority is the address that controls the module (defaults to x/gov unless overwritten). |
| `params` | 2 | [`Params`](params.md#params) | singular | params defines the module parameters to update. NOTE: All parameters must be supplied. |

### MsgUpdateParamsResponse

MsgUpdateParamsResponse defines the response structure for executing a

MsgUpdateParams message.

No fields.

### MsgUpdateUserApprovals

MsgUpdateUserApprovals is used to update user approvals.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `creator` | 1 | `string` | singular | Address of the creator. |
| `collectionId` | 2 | `string` | singular | ID of the collection. |
| `updateOutgoingApprovals` | 3 | `bool` | singular | Indicates if outgoing approvals should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `outgoingApprovals` | 4 | [`UserOutgoingApproval`](approvals.md#useroutgoingapproval) | repeated | New outgoing approvals to set. |
| `updateIncomingApprovals` | 5 | `bool` | singular | Indicates if incoming approvals should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `incomingApprovals` | 6 | [`UserIncomingApproval`](approvals.md#userincomingapproval) | repeated | New incoming approvals to set. |
| `updateAutoApproveSelfInitiatedOutgoingTransfers` | 7 | `bool` | singular | Indicates if auto-approve settings for self-initiated outgoing transfers should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `autoApproveSelfInitiatedOutgoingTransfers` | 8 | `bool` | singular | Auto-approve setting for self-initiated outgoing transfers. |
| `updateAutoApproveSelfInitiatedIncomingTransfers` | 9 | `bool` | singular | Indicates if auto-approve settings for self-initiated incoming transfers should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `autoApproveSelfInitiatedIncomingTransfers` | 10 | `bool` | singular | Auto-approve setting for self-initiated incoming transfers. |
| `updateAutoApproveAllIncomingTransfers` | 11 | `bool` | singular | Indicates if auto-approve settings for all incoming transfers should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `autoApproveAllIncomingTransfers` | 12 | `bool` | singular | Auto-approve setting for all incoming transfers. |
| `updateUserPermissions` | 13 | `bool` | singular | Indicates if user permissions should be updated. If true, we set to value in this Msg. If false, we keep existing value. |
| `userPermissions` | 14 | [`UserPermissions`](permissions.md#userpermissions) | singular | New user permissions to set. |

### MsgUpdateUserApprovalsResponse

MsgUpdateUserApprovalsResponse is the response to MsgUpdateUserApprovals.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `incomingChanges` | 1 | [`ApprovalChange`](#approvalchange) | repeated |   |
| `outgoingChanges` | 2 | [`ApprovalChange`](#approvalchange) | repeated |   |
| `reviewItems` | 3 | `string` | repeated |   |

### TokenizationCustomMsgType

Used for WASM bindings and JSON parsing

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `createAddressListsMsg` | 1 | [`MsgCreateAddressLists`](#msgcreateaddresslists) | singular |   |
| `universalUpdateCollectionMsg` | 2 | [`MsgUniversalUpdateCollection`](#msguniversalupdatecollection) | singular |   |
| `deleteCollectionMsg` | 3 | [`MsgDeleteCollection`](#msgdeletecollection) | singular |   |
| `transferTokensMsg` | 4 | [`MsgTransferTokens`](#msgtransfertokens) | singular |   |
| `updateUserApprovalsMsg` | 5 | [`MsgUpdateUserApprovals`](#msgupdateuserapprovals) | singular |   |
| `updateCollectionMsg` | 6 | [`MsgUpdateCollection`](#msgupdatecollection) | singular |   |
| `createCollectionMsg` | 7 | [`MsgCreateCollection`](#msgcreatecollection) | singular |   |
| `createDynamicStoreMsg` | 8 | [`MsgCreateDynamicStore`](#msgcreatedynamicstore) | singular |   |
| `updateDynamicStoreMsg` | 9 | [`MsgUpdateDynamicStore`](#msgupdatedynamicstore) | singular |   |
| `deleteDynamicStoreMsg` | 10 | [`MsgDeleteDynamicStore`](#msgdeletedynamicstore) | singular |   |
| `setDynamicStoreValueMsg` | 11 | [`MsgSetDynamicStoreValue`](#msgsetdynamicstorevalue) | singular |   |
| `setIncomingApprovalMsg` | 14 | [`MsgSetIncomingApproval`](#msgsetincomingapproval) | singular |   |
| `deleteIncomingApprovalMsg` | 15 | [`MsgDeleteIncomingApproval`](#msgdeleteincomingapproval) | singular |   |
| `setOutgoingApprovalMsg` | 16 | [`MsgSetOutgoingApproval`](#msgsetoutgoingapproval) | singular |   |
| `deleteOutgoingApprovalMsg` | 17 | [`MsgDeleteOutgoingApproval`](#msgdeleteoutgoingapproval) | singular |   |
| `purgeApprovalsMsg` | 18 | [`MsgPurgeApprovals`](#msgpurgeapprovals) | singular |   |
| `setValidTokenIdsMsg` | 19 | [`MsgSetValidTokenIds`](#msgsetvalidtokenids) | singular | Helper message types for UniversalUpdateCollection subsets |
| `setManagerMsg` | 20 | [`MsgSetManager`](#msgsetmanager) | singular |   |
| `setCollectionMetadataMsg` | 21 | [`MsgSetCollectionMetadata`](#msgsetcollectionmetadata) | singular |   |
| `setTokenMetadataMsg` | 22 | [`MsgSetTokenMetadata`](#msgsettokenmetadata) | singular |   |
| `setCustomDataMsg` | 23 | [`MsgSetCustomData`](#msgsetcustomdata) | singular |   |
| `setStandardsMsg` | 24 | [`MsgSetStandards`](#msgsetstandards) | singular |   |
| `setCollectionApprovalsMsg` | 25 | [`MsgSetCollectionApprovals`](#msgsetcollectionapprovals) | singular |   |
| `setIsArchivedMsg` | 26 | [`MsgSetIsArchived`](#msgsetisarchived) | singular |   |
| `setReservedProtocolAddressMsg` | 27 | [`MsgSetReservedProtocolAddress`](#msgsetreservedprotocoladdress) | singular |   |
| `castVoteMsg` | 28 | [`MsgCastVote`](#msgcastvote) | singular |   |
