---
description: "Generated schema for tokenization/timelines.proto: 7 messages in the x/tokenization module."
---

# tokenization/timelines.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 7 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/timelines.proto).

## Messages

### CollectionMetadataTimeline

CollectionMetadataTimeline defines the metadata for a collection at different timeline times.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `collectionMetadata` | 1 | [`CollectionMetadata`](metadata.md#collectionmetadata) | singular | The collection metadata for a specific timeline element. |
| `timelineTimes` | 2 | [`UintRange`](balances.md#uintrange) | repeated | The timeline times when the collection metadata is valid. Can not overlap with other timeline elements in same array. |

### ContractAddressTimeline

ContractAddressTimeline defines the contract address at different timeline times.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `contractAddress` | 1 | `string` | singular | The contract address for a specific timeline element. |
| `timelineTimes` | 2 | [`UintRange`](balances.md#uintrange) | repeated | The timeline times when the contract address is valid. Can not overlap with other timeline elements in same array. |

### CustomDataTimeline

CustomDataTimeline defines custom data at different timeline times.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `customData` | 1 | `string` | singular | The custom data for a specific timeline element. |
| `timelineTimes` | 2 | [`UintRange`](balances.md#uintrange) | repeated | The timeline times when the custom data is valid. Can not overlap with other timeline elements in same array. |

### IsArchivedTimeline

IsArchivedTimeline defines whether a collection is archived at different timeline times.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `isArchived` | 1 | `bool` | singular | Indicates whether the collection is archived for a specific timeline element. |
| `timelineTimes` | 2 | [`UintRange`](balances.md#uintrange) | repeated | The timeline times when the archived status is valid. Can not overlap with other timeline elements in same array. |

### ManagerTimeline

ManagerTimeline defines the manager address at different timeline times.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `manager` | 1 | `string` | singular | The manager address for a specific timeline element. |
| `timelineTimes` | 2 | [`UintRange`](balances.md#uintrange) | repeated | The timeline times when the manager address is valid. Can not overlap with other timeline elements in same array. |

### StandardsTimeline

StandardsTimeline defines the standards used for a collection at different timeline times.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `standards` | 1 | `string` | repeated | The standards applied to the collection for a specific timeline element. |
| `timelineTimes` | 2 | [`UintRange`](balances.md#uintrange) | repeated | The timeline times when the standards are valid. Can not overlap with other timeline elements in same array. |

### TokenMetadataTimeline

TokenMetadataTimeline defines the metadata for tokens at different timeline times.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `tokenMetadata` | 1 | [`TokenMetadata`](metadata.md#tokenmetadata) | repeated | The token metadata for a specific timeline element. |
| `timelineTimes` | 2 | [`UintRange`](balances.md#uintrange) | repeated | The timeline times when the token metadata is valid. Can not overlap with other timeline elements in same array. |
