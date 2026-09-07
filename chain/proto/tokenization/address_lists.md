---
description: "Generated schema for tokenization/address_lists.proto: 2 messages in the x/tokenization module."
---

# tokenization/address_lists.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 2 messages. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/address_lists.proto).

## Messages

### AddressList

An AddressList is a list of addresses that are referenced by an ID. AddressLists are used in defining approvals ia a reusbale identifier. Note: We also support a reserved ID system by string ID; "Mint", "!Mint"

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `listId` | 1 | `string` | singular | Unique identifier for the address list. |
| `addresses` | 2 | `string` | repeated | List of addresses included in the list. |
| `whitelist` | 3 | `bool` | singular | Indicates whether the list includes the specified addresses (true) or excludes them (false). |
| `uri` | 4 | `string` | singular | URI (Uniform Resource Identifier) associated with the address list to provide metadata, if applicable. |
| `customData` | 5 | `string` | singular | Custom arbitrary data or additional information related to the address list. |
| `createdBy` | 6 | `string` | singular | The user or entity who created the address list. |

### AddressListInput

AddressListInput is used for creating address lists via MsgCreateAddressLists. It contains all fields from AddressList except createdBy, which is automatically set from the message creator.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `listId` | 1 | `string` | singular | Unique identifier for the address list. |
| `addresses` | 2 | `string` | repeated | List of addresses included in the list. |
| `whitelist` | 3 | `bool` | singular | Indicates whether the list includes the specified addresses (true) or excludes them (false). |
| `uri` | 4 | `string` | singular | URI (Uniform Resource Identifier) associated with the address list to provide metadata, if applicable. |
| `customData` | 5 | `string` | singular | Custom arbitrary data or additional information related to the address list. |
