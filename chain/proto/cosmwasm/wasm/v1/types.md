---
description: "Generated schema for cosmwasm/wasm/v1/types.proto: 2 messages, 1 enum in the x/wasm module."
---

# cosmwasm/wasm/v1/types.proto

Proto package `cosmwasm.wasm.v1`, part of the [x/wasm](../../README.md) module. It declares 2 messages, 1 enum. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/cosmwasm/wasm/v1/types.proto).

## Messages

### AccessConfig

AccessConfig access control type.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `permission` | 1 | [`AccessType`](#accesstype) | singular | Permission type |
| `addresses` | 3 | `string` | repeated | Addresses (only used with AccessTypeAnyOfAddresses) |

### Params

Params defines the set of wasm parameters.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `code_upload_access` | 1 | [`AccessConfig`](#accessconfig) | singular | Code upload access configuration |
| `instantiate_default_permission` | 2 | [`AccessType`](#accesstype) | singular | Default instantiate permission |

## Enums

### AccessType

AccessType permission types

| Value | # | Description |
| --- | --- | --- |
| `ACCESS_TYPE_UNSPECIFIED` | 0 | AccessTypeUnspecified placeholder for empty value |
| `ACCESS_TYPE_NOBODY` | 1 | AccessTypeNobody forbidden |
| `ACCESS_TYPE_EVERYBODY` | 3 | AccessTypeEverybody unrestricted |
| `ACCESS_TYPE_ANY_OF_ADDRESSES` | 4 | AccessTypeAnyOfAddresses allow any of the addresses |
