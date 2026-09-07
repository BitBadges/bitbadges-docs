---
description: "Every field on a TokenCollection: metadata, inline customData metadata, standards, validTokenIds, defaultBalances, isArchived, and the pointer to invariants."
---

# Collections

A collection is the top-level object that holds tokens. The manager sets its fields at creation and updates them later according to the permissions.

## Shape

A complete `MsgCreateCollection`. The collection-level fields are open; the default balance store, permissions, and approvals are folded and have their own pages.

```json fold=3-17,21-33,49-166,172-173
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "defaultBalances": {
    "balances": [],
    "outgoingApprovals": [],
    "incomingApprovals": [],
    "autoApproveSelfInitiatedOutgoingTransfers": true,
    "autoApproveSelfInitiatedIncomingTransfers": true,
    "autoApproveAllIncomingTransfers": true,
    "userPermissions": {
      "canUpdateOutgoingApprovals": [],
      "canUpdateIncomingApprovals": [],
      "canUpdateAutoApproveSelfInitiatedOutgoingTransfers": [],
      "canUpdateAutoApproveSelfInitiatedIncomingTransfers": [],
      "canUpdateAutoApproveAllIncomingTransfers": []
    }
  },
  "validTokenIds": [
    { "start": "1", "end": "100" }
  ],
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
  "manager": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionMetadata": {
    "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json",
    "customData": ""
  },
  "tokenMetadata": [
    {
      "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/{id}.json",
      "customData": "",
      "tokenIds": [
        { "start": "1", "end": "100" }
      ]
    }
  ],
  "customData": "Application-specific data",
  "collectionApprovals": [
    {
      "fromListId": "Mint",
      "toListId": "All",
      "initiatedByListId": "All",
      "transferTimes": [
        { "start": "1", "end": "18446744073709551615" }
      ],
      "tokenIds": [
        { "start": "1", "end": "18446744073709551615" }
      ],
      "ownershipTimes": [
        { "start": "1", "end": "18446744073709551615" }
      ],
      "uri": "",
      "customData": "",
      "approvalId": "mint",
      "approvalCriteria": {
        "merkleChallenges": [],
        "predeterminedBalances": {
          "manualBalances": [],
          "incrementedBalances": {
            "startBalances": [],
            "incrementTokenIdsBy": "0",
            "incrementOwnershipTimesBy": "0",
            "durationFromTimestamp": "0",
            "allowOverrideTimestamp": false,
            "recurringOwnershipTimes": {
              "startTime": "0",
              "intervalLength": "0",
              "chargePeriodLength": "0"
            },
            "allowOverrideWithAnyValidToken": false,
            "allowAmountScaling": false,
            "maxScalingMultiplier": "0"
          },
          "orderCalculationMethod": {
            "useOverallNumTransfers": false,
            "usePerToAddressNumTransfers": false,
            "usePerFromAddressNumTransfers": false,
            "usePerInitiatedByAddressNumTransfers": false,
            "useMerkleChallengeLeafIndex": false,
            "challengeTrackerId": ""
          }
        },
        "approvalAmounts": {
          "overallApprovalAmount": "0",
          "perToAddressApprovalAmount": "0",
          "perFromAddressApprovalAmount": "0",
          "perInitiatedByAddressApprovalAmount": "0",
          "amountTrackerId": "",
          "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
        },
        "maxNumTransfers": {
          "overallMaxNumTransfers": "0",
          "perToAddressMaxNumTransfers": "0",
          "perFromAddressMaxNumTransfers": "0",
          "perInitiatedByAddressMaxNumTransfers": "0",
          "amountTrackerId": "",
          "resetTimeIntervals": { "startTime": "0", "intervalLength": "0" }
        },
        "coinTransfers": [],
        "requireToEqualsInitiatedBy": false,
        "requireFromEqualsInitiatedBy": false,
        "requireToDoesNotEqualInitiatedBy": false,
        "requireFromDoesNotEqualInitiatedBy": false,
        "overridesFromOutgoingApprovals": true,
        "overridesToIncomingApprovals": false,
        "autoDeletionOptions": {
          "afterOneUse": false,
          "afterOverallMaxNumTransfers": false,
          "allowCounterpartyPurge": false,
          "allowPurgeIfExpired": false
        },
        "mustOwnTokens": [],
        "dynamicStoreChallenges": [],
        "ethSignatureChallenges": [],
        "senderChecks": {
          "mustBeEvmContract": false,
          "mustNotBeEvmContract": false,
          "mustBeLiquidityPool": false,
          "mustNotBeLiquidityPool": false
        },
        "recipientChecks": {
          "mustBeEvmContract": false,
          "mustNotBeEvmContract": false,
          "mustBeLiquidityPool": false,
          "mustNotBeLiquidityPool": false
        },
        "initiatorChecks": {
          "mustBeEvmContract": false,
          "mustNotBeEvmContract": false,
          "mustBeLiquidityPool": false,
          "mustNotBeLiquidityPool": false
        },
        "altTimeChecks": {
          "offlineHours": [],
          "offlineDays": [],
          "offlineMonths": [],
          "offlineDaysOfMonth": [],
          "offlineWeeksOfYear": [],
          "timezoneOffsetMinutes": "0",
          "timezoneOffsetNegative": false
        },
        "mustPrioritize": false,
        "votingChallenges": [],
        "allowBackedMinting": false,
        "allowSpecialWrapping": false,
        "evmQueryChallenges": [],
        "userApprovalSettings": {
          "allowedDenoms": [],
          "disableUserCoinTransfers": false,
          "userRoyalties": { "percentage": "0", "payoutAddress": "" }
        }
      },
      "version": "0"
    }
  ],
  "standards": [
    "Tradable",
    "NFT"
  ],
  "isArchived": false,
  "mintEscrowCoinsToTransfer": [],
  "cosmosCoinWrapperPathsToAdd": [],
  "invariants": {
    "noCustomOwnershipTimes": false,
    "maxSupplyPerId": "0",
    "cosmosCoinBackedPath": null,
    "noForcefulPostMintTransfers": false,
    "disablePoolCreation": false,
    "evmQueryChallenges": []
  },
  "aliasPathsToAdd": []
}
```

:::widget{name="collection-card" caption="The collection as the browse grid on bitbadges.io shows it: the first standard becomes the badge on the image, and the manager sits in the footer."}
{
  "image": "/widgets/samples/nft.png", "collectionId": 1,
  "name": "Demo NFTs",
  "standards": [
    "Tradable",
    "NFT"
  ],
  "supply": "100",
  "manager": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"
}
:::

| Field | Type | Set | Permission | Description |
| --- | --- | --- | --- | --- |
| `collectionId` | Uint | chain | | Assigned at creation, starting at 1 |
| `manager` | string | creation, update | `canUpdateManager` | Address that runs the collection. `''` for none. |
| `collectionPermissions` | CollectionPermissions | creation, update | (self-locking) | See [Permissions](permissions.md) |
| `collectionApprovals` | CollectionApproval[] | creation, update | `canUpdateCollectionApprovals` | See [Transferability](transferability.md) |
| `collectionMetadata` | `{ uri, customData }` | creation, update | `canUpdateCollectionMetadata` | Metadata for the whole collection |
| `tokenMetadata` | `{ uri, customData, tokenIds }[]` | creation, update | `canUpdateTokenMetadata` | Metadata per token ID range |
| `customData` | string | creation, update | `canUpdateCustomData` | Free-form string |
| `standards` | string[] | creation, update | `canUpdateStandards` | Informational tags |
| `validTokenIds` | UintRange[] | creation, update | `canUpdateValidTokenIds` | IDs that exist |
| `isArchived` | bool | creation, update | `canArchiveCollection` | Pause switch |
| `defaultBalances` | UserBalanceStore | creation only | | Store new users start with |
| `invariants` | CollectionInvariants | creation only | | See [Invariants](../approval-criteria/invariants.md) |
| `mintEscrowAddress` | string | chain | | Coin escrow for Mint. See [Coin Transfers](../approval-criteria/coin-transfers.md). |
| `cosmosCoinWrapperPaths` | CosmosCoinWrapperPath[] | creation, append | `canAddMoreCosmosCoinWrapperPaths` | See [Cosmos Coin Wrapper Paths](../ibc/cosmos-coin-wrapper-paths.md) |
| `aliasPaths` | AliasPath[] | creation, append | `canAddMoreAliasPaths` | See [Alias Denoms](../ibc/alias-denoms.md) |
| `createdBy` | string | chain | | Creator address |

{% hint style="info" %}
Ask your agent:

```text
Create an NFT collection named Demo NFTs with 100 tokens, managed by alice, with metadata at ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json.
```

The MCP builder tools (`set_collection_metadata, set_token_metadata, set_valid_token_ids, set_standards`) produce the objects on this page.
{% endhint %}

## How It Works

### Valid Token IDs

`validTokenIds` lists the token IDs that exist. It must be one range starting at 1; the chain rejects gaps or a start other than 1. It is mostly informational but some features check it, for example `allowOverrideWithAnyValidToken` in [Predetermined Balances](../approval-criteria/predetermined-balances.md).

```ts
const validTokenIds: UintRange<bigint>[] = [{ start: 1n, end: 100n }];
```

Set it at creation and lock it with `canUpdateValidTokenIds`. Expanding later is possible (the permission is checked only for new IDs) but is an advanced pattern.

### Standards

`standards` are informational tags. The chain does not validate them. Applications read them to decide how to display and interpret a collection, and it is the issuer's job to actually follow the standard it claims.

```ts
const standards: string[] = ['Tradable', 'NFT', 'Cosmos Wrappable'];
```

Standards the BitBadges site recognizes:

| Standard | Meaning |
| --- | --- |
| `Tradable` | Enables the trading interface, orderbook tracking, and marketplace features |
| `NFT` | Supply of 1 per token ID with full ownership times |
| `Cosmos Wrappable` | Can be wrapped into an `x/bank` denom |
| `Subscriptions` | Recurring content and subscription flows |
| `Quests` | Achievement and quest completion tracking |
| `No User Ownership` | User balances are not shown. Nothing about transferability, approvals, or activity is displayed. For attestation-style collections where only token metadata and permissions matter and tokens have no recipient. |
| `Smart Token` | A collection backed by an `x/bank` coin with configurable spend rules |
| `AI Agent Vault` | Display-only. The site adds an "AI Prompt" tab to the token page that generates a prompt with the vault details (collection ID, backing address, denom, spend limits, deposit and withdraw instructions). Usually paired with `Smart Token`. |

```json
{ "standards": ["Smart Token", "AI Agent Vault"] }
```

Mix standards as long as they are compatible. See [Multiple standards](../integrate/multiple-standards.md).

### Collection Metadata

```ts
const collectionMetadata: CollectionMetadata = {
  uri: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json',
  customData: '',
};
```

The BitBadges API expects the document at `uri` to have this shape:

```ts
interface Metadata {
  name: string;
  description: string;
  image: string;
}
```

### Token Metadata

```ts
const tokenMetadata: TokenMetadata[] = [
  {
    uri: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/{id}.json',
    tokenIds: [{ start: 1n, end: 100n }],
    customData: '',
  },
];
```

- `{id}` in the URI is replaced with the token ID.
- Entries are scanned in order. The first entry whose `tokenIds` contains the ID wins; later entries are ignored for that ID.

### Custom Data

`customData` is a string the chain stores and never interprets. It exists on the collection, on token metadata entries, on approvals, on address lists, on dynamic stores, and on paths.

```ts
const customData: string = 'Any string value you want to store';
```

### Inline Metadata via customData

Wherever an entity has a `(uri, customData)` pair, `customData` can hold the metadata document itself instead of a link to it:

```ts
const collectionMetadata: CollectionMetadata = {
  uri: '',
  customData: JSON.stringify({
    name: 'My Collection',
    image: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/image.png',
    description: 'A short description.',
  }),
};
```

Resolution order in the API, SDK, and site: if `uri` is non-empty it is fetched; otherwise `customData` is parsed as JSON. Approval metadata expects `name` and `description` only; every other entity expects `name`, `image`, and `description`. A `customData` value that is not a JSON object with at least one of those keys is ignored as metadata, and the entity shows no metadata rather than attacker-controlled fields.

Inline `customData` is chain state. Gas scales with byte size, blocks have a size cap, and the bytes persist forever.

{% hint style="warning" %}
Do not put image bytes or base64 media in `customData`. Host images on IPFS or any URL and reference them by URL inside the inline JSON. If the stringified JSON exceeds about 4 KB, host the JSON too and use `uri`.
{% endhint %}

```ts
const collectionMetadata: CollectionMetadata = {
  uri: '',
  customData: JSON.stringify({
    name: 'My Collection',
    image: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/image.png', // URL only, never base64
    description: 'A short description.',
  }),
};
```

Cost comparison per write:

| Mode | On-chain bytes | Hosting |
| --- | --- | --- |
| `uri` set, `customData` empty | about 50 B | pin JSON and image |
| Inline JSON with hosted image URL | about 250 B | pin image only |
| Inline JSON with inline SVG image | 1-8 KB (roughly 10k-80k extra gas) | none |

The SDK ships a deterministic SVG generator for the last mode:

```ts
import { generatePlaceholderArt } from 'bitbadges';

const art = generatePlaceholderArt({ seed: 'My Collection' });
const customData = JSON.stringify({
  name: 'My Collection',
  description: 'A short description.',
  image: art.imageUri, // data:image/svg+xml;base64,...
});
// collectionMetadata.uri = '', collectionMetadata.customData = customData
```

The same seed always yields the same art (six presets, 24 palettes, hash-picked). Pin a look with `style` or `paletteName`. Pick this mode when zero hosting setup is worth the extra gas. For high-frequency mints or art-first collections, host the image.

### Default Balances

`defaultBalances` is the balance store a user gets the first time they interact with the collection. It is creation-only.

```json
{
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
}
```

Uses: block incoming transfers by default (opt-in only), give every user a starting balance, or set default approvals. Default approvals must be auto-scannable; see [Prioritized Approvals](prioritized-approvals.md). Users can change their own store afterwards, subject to their `userPermissions`.

### isArchived

`isArchived: true` rejects every transaction on the collection (no transfers, no updates) while keeping state readable. The only transaction that succeeds is the one that unarchives it. It is a pause switch for maintenance or incident response.

```ts
const isArchived: boolean = false;
```

`canArchiveCollection` controls whether `isArchived` can change, not its current value. Forbid updates forever to freeze it in either state. Alternatives for halting: the chain-level `x/circuit` breaker, or [dynamic store](../approval-criteria/dynamic-store-challenges.md) and [Token Ownership](../approval-criteria/token-ownership.md) criteria that another party controls.

### Invariants

`invariants` are creation-only rules the chain enforces forever: `noCustomOwnershipTimes`, `maxSupplyPerId`, `cosmosCoinBackedPath`, `noForcefulPostMintTransfers`, `disablePoolCreation`, and post-transfer `evmQueryChallenges`. They are documented on [Invariants](../approval-criteria/invariants.md).

## Related

- [Permissions](permissions.md)
- [Invariants](../approval-criteria/invariants.md)
- [MsgCreateCollection](../messages/msg-create-collection.md)
- [MsgUniversalUpdateCollection](../messages/msg-universal-update-collection.md)
