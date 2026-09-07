---
description: "MsgCreateCollection creates a new collection. The only message that can set defaultBalances and invariants."
---

# MsgCreateCollection

Creates a new collection. Anyone can sign it. The signer becomes the manager unless `manager` names another address.

## Example

```bash
bb tx tokenization create-collection ./create-collection.json --from <key> --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgCreateCollection } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgCreateCollection({
  creator: client.address,
  defaultBalances: {
    balances: [],
    outgoingApprovals: [],
    incomingApprovals: [],
    autoApproveSelfInitiatedOutgoingTransfers: false,
    autoApproveSelfInitiatedIncomingTransfers: true,
    autoApproveAllIncomingTransfers: false,
    userPermissions: {
      canUpdateOutgoingApprovals: [],
      canUpdateIncomingApprovals: [],
      canUpdateAutoApproveSelfInitiatedOutgoingTransfers: [],
      canUpdateAutoApproveSelfInitiatedIncomingTransfers: [],
      canUpdateAutoApproveAllIncomingTransfers: []
    }
  },
  validTokenIds: [{ start: 1n, end: 100n }],
  collectionPermissions: {
    canDeleteCollection: [],
    canArchiveCollection: [],
    canUpdateStandards: [],
    canUpdateCustomData: [],
    canUpdateManager: [],
    canUpdateCollectionMetadata: [],
    canUpdateValidTokenIds: [],
    canUpdateTokenMetadata: [],
    canUpdateCollectionApprovals: [],
    canAddMoreAliasPaths: [],
    canAddMoreCosmosCoinWrapperPaths: []
  },
  manager: client.address,
  collectionMetadata: { uri: 'https://example.com/collection.json', customData: '' },
  tokenMetadata: [{ uri: 'https://example.com/{id}.json', customData: '', tokenIds: [{ start: 1n, end: 100n }] }],
  customData: '',
  collectionApprovals: [],
  standards: [],
  isArchived: false,
  mintEscrowCoinsToTransfer: [],
  cosmosCoinWrapperPathsToAdd: [],
  aliasPathsToAdd: [],
  invariants: {
    noCustomOwnershipTimes: false,
    maxSupplyPerId: 0n,
    noForcefulPostMintTransfers: false,
    disablePoolCreation: false,
    evmQueryChallenges: []
  }
});

const result = await client.signAndBroadcast([msg]);
console.log(result.txHash, result.success);
```

```json
{
  "creator": "bb1abc...",
  "defaultBalances": {
    "balances": [],
    "outgoingApprovals": [],
    "incomingApprovals": [],
    "autoApproveSelfInitiatedOutgoingTransfers": false,
    "autoApproveSelfInitiatedIncomingTransfers": true,
    "autoApproveAllIncomingTransfers": false,
    "userPermissions": {
      "canUpdateOutgoingApprovals": [],
      "canUpdateIncomingApprovals": [],
      "canUpdateAutoApproveSelfInitiatedOutgoingTransfers": [],
      "canUpdateAutoApproveSelfInitiatedIncomingTransfers": [],
      "canUpdateAutoApproveAllIncomingTransfers": []
    }
  },
  "validTokenIds": [{ "start": "1", "end": "100" }],
  "collectionPermissions": {
    "canDeleteCollection": [],
    "canArchiveCollection": [],
    "canUpdateStandards": [],
    "canUpdateCustomData": [],
    "canUpdateManager": [],
    "canUpdateCollectionMetadata": [],
    "canUpdateValidTokenIds": [],
    "canUpdateTokenMetadata": [],
    "canUpdateCollectionApprovals": [],
    "canAddMoreAliasPaths": [],
    "canAddMoreCosmosCoinWrapperPaths": []
  },
  "manager": "bb1abc...",
  "collectionMetadata": { "uri": "https://example.com/collection.json", "customData": "" },
  "tokenMetadata": [],
  "customData": "",
  "collectionApprovals": [],
  "standards": [],
  "isArchived": false,
  "mintEscrowCoinsToTransfer": [],
  "cosmosCoinWrapperPathsToAdd": [],
  "aliasPathsToAdd": [],
  "invariants": {
    "noCustomOwnershipTimes": false,
    "maxSupplyPerId": "0",
    "noForcefulPostMintTransfers": false,
    "disablePoolCreation": false,
    "evmQueryChallenges": []
  }
}
```

Omit `invariants.cosmosCoinBackedPath` unless the collection is backed by a bank coin. See [Backed minting](../ibc/backed-minting.md).

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Recorded as `createdBy` and used as the default manager. |
| `defaultBalances` | `UserBalanceStore` | no | Starting balances, approvals, auto-approve flags, and permissions for every address. Settable only at creation. |
| `validTokenIds` | `UintRange[]` | no | Token IDs that exist. Must merge to one range that starts at 1. |
| `collectionPermissions` | `CollectionPermissions` | no | Manager permissions. Empty arrays mean neutral (allowed now, lockable later). |
| `manager` | string | no | Manager address. Empty keeps the default (the creator). |
| `collectionMetadata` | `CollectionMetadata` | no | `uri` and `customData` for the collection. |
| `tokenMetadata` | `TokenMetadata[]` | no | `uri`, `customData`, and `tokenIds` per metadata entry. |
| `customData` | string | no | Arbitrary string. |
| `collectionApprovals` | `CollectionApproval[]` | no | Collection-level approvals, including mint approvals from the `Mint` address. |
| `standards` | string[] | no | Standard identifiers. |
| `isArchived` | bool | no | Archive flag. Archived collections are read-only. |
| `mintEscrowCoinsToTransfer` | `Coin[]` | no | Bank coins sent from the creator to the collection's mint escrow address. |
| `cosmosCoinWrapperPathsToAdd` | `CosmosCoinWrapperPathAddObject[]` | no | Wrapper paths to an x/bank denom. See [Cosmos coin wrapper paths](../ibc/cosmos-coin-wrapper-paths.md). |
| `aliasPathsToAdd` | `AliasPathAddObject[]` | no | Alias denoms. See [Alias denoms](../ibc/alias-denoms.md). |
| `invariants` | `InvariantsAddObject` | no | Rules that can never change. See [Invariants](../approval-criteria/invariants.md). |

`InvariantsAddObject` fields: `noCustomOwnershipTimes` (bool), `maxSupplyPerId` (Uint, `0` means unlimited), `cosmosCoinBackedPath` (`{ conversion }`), `noForcefulPostMintTransfers` (bool), `disablePoolCreation` (bool), `evmQueryChallenges` (`EVMQueryChallenge[]`).

## Response

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | Uint | ID assigned by the chain. |
| `approvalChanges` | `ApprovalChange[]` | One entry per collection approval created. |
| `reviewItems` | string[] | Advisory notes about the transaction. |

## Behavior

- The handler converts the message to a `MsgUniversalUpdateCollection` with `collectionId: "0"` and every update flag set to `true`. All rules on [MsgUniversalUpdateCollection](msg-universal-update-collection.md) apply.
- No permissions exist yet, so nothing is restricted. Later updates must obey the permissions set here.
- The chain assigns the next collection ID and derives a `mintEscrowAddress` from it.
- `validTokenIds` must be sequential from 1 (`[{ start: 1, end: N }]`). Other shapes fail with `Ids must be sequential starting from 1`.
- Any approval whose `fromListId` includes `Mint` must be a whitelist of only `Mint` and must set `overridesFromOutgoingApprovals: true`.
- Wrapper paths and the backed path get chain-derived addresses that are marked as reserved protocol addresses with auto-approve flags on.
- A backed path prepends a permanent permission that forbids future changes to approvals with `fromListId: "Mint"`.
- Duplicate path denoms, duplicate symbols, zero decimals, duplicate decimals, or more than one default display unit fail.
- The collection ID is in the response and in the `collectionId` event attribute. To act on it in the same transaction, pass `collectionId: "0"` to later messages.

## Related

- [MsgUpdateCollection](msg-update-collection.md)
- [Collections](../concepts/collections.md)
- [Permissions](../concepts/permissions.md)
- [Create a collection](../../guides/create-a-collection.md)
