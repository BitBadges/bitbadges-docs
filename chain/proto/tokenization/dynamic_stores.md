---
description: "Generated schema for tokenization/dynamic_stores.proto: 2 messages in the x/tokenization module."
---

# tokenization/dynamic_stores.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 2 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/dynamic_stores.proto).

## Messages

### DynamicStore

A DynamicStore is a flexible storage object that can store arbitrary data. It is identified by a unique ID assigned by the blockchain, which is a uint64 that increments. Dynamic stores are created by users and can only be updated or deleted by their creator. They provide a way to store custom data on-chain with proper access control.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `storeId` | 1 | `string` | singular | The unique identifier for this dynamic store. This is assigned by the blockchain. |
| `createdBy` | 2 | `string` | singular | The address of the creator of this dynamic store. |
| `defaultValue` | 3 | `bool` | singular | The default value for uninitialized addresses (true/false). |
| `globalEnabled` | 4 | `bool` | singular | Global kill switch state (defaults to true on creation, can be toggled via UpdateDynamicStore). When false, all approvals using this store via DynamicStoreChallenge will fail immediately. |
| `uri` | 5 | `string` | singular | URI for additional metadata or resources associated with this dynamic store. |
| `customData` | 6 | `string` | singular | Custom data field for storing arbitrary data associated with this dynamic store. |

### DynamicStoreValue

A DynamicStoreValue stores a boolean value for a specific address in a dynamic store. This allows the creator to set true/false values per address that can be checked during approval.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `storeId` | 1 | `string` | singular | The unique identifier for this dynamic store. |
| `address` | 2 | `string` | singular | The address for which this value is stored. |
| `value` | 3 | `bool` | singular | The boolean value (true/false). |
