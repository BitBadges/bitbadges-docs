---
description: "Generated schema for gamm/v1beta1/genesis.proto: 1 message in the x/gamm module."
---

# gamm/v1beta1/genesis.proto

Proto package `gamm.v1beta1`, part of the [x/gamm](../README.md) module. It declares 1 message. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/gamm/v1beta1/genesis.proto).

## Messages

### GenesisState

GenesisState defines the gamm module's genesis state.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `pools` | 1 | `google.protobuf.Any` | repeated |   |
| `next_pool_number` | 2 | `uint64` | singular | will be renamed to next_pool_id in an upcoming version |
| `params` | 3 | [`Params`](params.md#params) | singular |   |
