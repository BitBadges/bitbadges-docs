---
description: "Generated schema for tokenization/metadata.proto: 3 messages in the x/tokenization module."
---

# tokenization/metadata.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 3 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/metadata.proto).

## Messages

### CollectionMetadata

This message defines the metadata for the collection. The interpretation of this metadata should follow the collection standard.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `uri` | 1 | `string` | singular | The URI (Uniform Resource Identifier) associated with the collection metadata. |
| `customData` | 2 | `string` | singular | Custom data or additional information related to the collection metadata. |

### PathMetadata

This message defines the metadata for paths (alias paths and cosmos coin wrapper paths). The interpretation of this metadata should follow the collection standard.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `uri` | 1 | `string` | singular | The URI (Uniform Resource Identifier) associated with the path metadata. |
| `customData` | 2 | `string` | singular | Custom data or additional information related to the path metadata. |

### TokenMetadata

This message defines the metadata for specific token IDs. The interpretation of this metadata should follow the collection standard.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `uri` | 1 | `string` | singular | The URI (Uniform Resource Identifier) associated with the token metadata. |
| `customData` | 2 | `string` | singular | Custom data or additional information related to the token metadata. |
| `tokenIds` | 3 | [`UintRange`](balances.md#uintrange) | repeated | The token IDs to which this metadata applies. |
