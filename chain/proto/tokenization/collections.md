---
description: "Generated schema for tokenization/collections.proto: 11 messages in the x/tokenization module."
---

# tokenization/collections.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 11 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/collections.proto).

## Messages

### AliasPath

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `denom` | 1 | `string` | singular | The denomination (denom) to be used for the alias. |
| `conversion` | 2 | [`ConversionWithoutDenom`](#conversionwithoutdenom) | singular | The conversion between cosmos coin and token balances. |
| `symbol` | 3 | `string` | singular | The symbol for the alias (e.g., "BADGE", "NFT"). Used for display purposes. Note that this may not be the default. |
| `denomUnits` | 4 | [`DenomUnit`](#denomunit) | repeated | Denomination units for the alias. Defines how the coin can be displayed with different decimal places and symbols. |
| `metadata` | 5 | [`PathMetadata`](metadata.md#pathmetadata) | singular | The metadata for this alias path. |

### CollectionInvariants

CollectionInvariants defines the invariants that apply to a collection.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `noCustomOwnershipTimes` | 1 | `bool` | singular | If true, all ownership times must be full ranges [{ start: 1, end: GoMaxUInt64 }]. This prevents time-based restrictions on token ownership. |
| `maxSupplyPerId` | 2 | `string` | singular | Maximum supply per token ID. Checked against Total address balances after transfers complete. A value of 0 means no limit (unlimited). |
| `cosmosCoinBackedPath` | 3 | [`CosmosCoinBackedPath`](#cosmoscoinbackedpath) | singular | The IBC backed (sdk.coin) path for the collection. Only one path is allowed. |
| `noForcefulPostMintTransfers` | 4 | `bool` | singular | If true, disallows any collection approvals that have overridesFromOutgoingApprovals or overridesToIncomingApprovals set to true. This prevents forceful transfers that bypass user-level approvals. This only applies to transfers where the from address does not equal "Mint". |
| `disablePoolCreation` | 5 | `bool` | singular | If true, disallows pool creation with this collection's assets. When true, any attempt to create a pool with tokenization assets from this collection will fail. |
| `evmQueryChallenges` | 6 | [`EVMQueryChallenge`](challenges.md#evmquerychallenge) | repeated | EVM query invariants that must pass after all transfers complete. These are checked once per message after all balance updates, with access to ALL recipient addresses. Placeholders: $sender, $recipients (comma-separated), $initiator, $collectionId, $recipient |

### CollectionStats

CollectionStats tracks aggregated statistics for a collection.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `holderCount` | 1 | `string` | singular |   |
| `balances` | 2 | [`Balance`](balances.md#balance) | repeated | Tracks circulating supply as Balance[] for proper range handling |

### Conversion

Conversion defines a bidirectional conversion between a cosmos coin (with denom) and token balances.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sideA` | 1 | [`ConversionSideAWithDenom`](#conversionsideawithdenom) | singular | Side A: The cosmos coin side of the conversion (amount + denom). |
| `sideB` | 2 | [`Balance`](balances.md#balance) | repeated | Side B: The token balances side of the conversion. |

### ConversionSideA

ConversionSideA represents the cosmos coin amount side of a conversion without denomination.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `amount` | 1 | `string` | singular | The amount of the cosmos coin (0 decimals). |

### ConversionSideAWithDenom

ConversionSideAWithDenom represents the cosmos coin side of a conversion with denomination.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `amount` | 1 | `string` | singular | The amount of the cosmos coin (0 decimals). |
| `denom` | 2 | `string` | singular | The denomination of the cosmos coin. |

### ConversionWithoutDenom

ConversionWithoutDenom defines a bidirectional conversion between a cosmos coin amount (without denom) and token balances.

The denom is stored at the base level (e.g., in AliasPath or CosmosCoinWrapperPath).

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `sideA` | 1 | [`ConversionSideA`](#conversionsidea) | singular | Side A: The cosmos coin amount side of the conversion (amount only, denom stored separately). |
| `sideB` | 2 | [`Balance`](balances.md#balance) | repeated | Side B: The token balances side of the conversion. |

### CosmosCoinBackedPath

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `address` | 1 | `string` | singular | The address associated with this backed path. Used for routing and escrowing IBC tokens. |
| `conversion` | 2 | [`Conversion`](#conversion) | singular | The conversion between IBC cosmos coin and token balances. |

### CosmosCoinWrapperPath

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `address` | 1 | `string` | singular | The BitBadges address associated with this wrapper path. Used for routing and identifying the wrapper. |
| `denom` | 2 | `string` | singular | The denomination (denom) to be used for the wrapped coin or the alias denom. |
| `conversion` | 3 | [`ConversionWithoutDenom`](#conversionwithoutdenom) | singular | The conversion between cosmos coin and token balances. |
| `symbol` | 4 | `string` | singular | The symbol for the wrapped coin (e.g., "BADGE", "NFT"). Used for display purposes. Note that this may not be the default. |
| `denomUnits` | 5 | [`DenomUnit`](#denomunit) | repeated | Denomination units for the wrapped coin. Defines how the coin can be displayed with different decimal places and symbols (e.g., base unit, display unit). You can specify which is the default display unit (base level or one of these). |
| `allowOverrideWithAnyValidToken` | 6 | `bool` | singular | If true, allows this wrapper path to be used with any valid token ID in the collection via an {id} placeholder. |
| `metadata` | 7 | [`PathMetadata`](metadata.md#pathmetadata) | singular | The metadata for this wrapper path. |

### DenomUnit

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `decimals` | 1 | `string` | singular | The number of decimal places for this unit. Defines the precision of the unit. |
| `symbol` | 2 | `string` | singular | The symbol for this unit (e.g., "BADGE", "nBADGE"). Used for display purposes. |
| `isDefaultDisplay` | 3 | `bool` | singular | If true, this is the default display unit. Only one unit should be marked as the default display unit. This unit will be used by default when displaying the coin amount. If none are marked default, we use the base level. |
| `metadata` | 4 | [`PathMetadata`](metadata.md#pathmetadata) | singular | The metadata for this denomination unit. |

### TokenCollection

A TokenCollection is the top-level object for a collection of tokens. It defines everything about the collection, such as the manager, metadata, etc.

All collections are identified by a collectionId assigned by the blockchain, which is a uint64 that increments (i.e. the first collection has ID 1).

All collections can have a manager who is responsible for managing the collection and can be granted certain admin permissions, such as the ability to mint new tokens.

Collections may have different balance types: standard vs. off-chain - indexed vs. inherited.vs off-chain - non-indexed vs non-public.

See documentation for more details.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | 1 | `string` | singular | The unique identifier for this collection. This is assigned by the blockchain. First collection has ID 1. |
| `collectionMetadata` | 2 | [`CollectionMetadata`](metadata.md#collectionmetadata) | singular | The metadata for the collection itself. |
| `tokenMetadata` | 3 | [`TokenMetadata`](metadata.md#tokenmetadata) | repeated | The metadata for each token in the collection. |
| `customData` | 4 | `string` | singular | An arbitrary field that can store any data. |
| `manager` | 5 | `string` | singular | The address of the manager of this collection. |
| `collectionPermissions` | 6 | [`CollectionPermissions`](permissions.md#collectionpermissions) | singular | Permissions that define what the manager of the collection can do or not do. |
| `collectionApprovals` | 7 | [`CollectionApproval`](approvals.md#collectionapproval) | repeated | Transferability of the collection for collections with standard balances, subject to changes over time. Overrides user approvals for a transfer if specified. Transfer must satisfy both user and collection-level approvals. Only applicable to on-chain balances. |
| `standards` | 8 | `string` | repeated | Standards that define how to interpret the fields of the collection. |
| `isArchived` | 9 | `bool` | singular | Whether the collection is archived or not. When archived, it becomes read-only, and no transactions can be processed until it is unarchived. |
| `defaultBalances` | 10 | [`UserBalanceStore`](user_balance_store.md#userbalancestore) | singular | The default store of a balance / approvals for a user, upon genesis. |
| `createdBy` | 11 | `string` | singular | The user or entity who created the collection. |
| `validTokenIds` | 12 | [`UintRange`](balances.md#uintrange) | repeated | The valid token IDs for this collection. |
| `mintEscrowAddress` | 13 | `string` | singular | The generated address of the collection. Also used to escrow Mint balances. |
| `cosmosCoinWrapperPaths` | 14 | [`CosmosCoinWrapperPath`](#cosmoscoinwrapperpath) | repeated | The IBC wrapper (sdk.coin) paths for the collection. |
| `invariants` | 15 | [`CollectionInvariants`](#collectioninvariants) | singular | Collection-level invariants that cannot be broken. These are set upon genesis and cannot be modified. |
| `aliasPaths` | 16 | [`AliasPath`](#aliaspath) | repeated | The alias (non-wrapping) paths for the collection. |
