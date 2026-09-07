---
description: "Generated schema for managersplitter/genesis.proto: 1 message in the x/managersplitter module."
---

# managersplitter/genesis.proto

Proto package `managersplitter`, part of the [x/managersplitter](README.md) module. It declares 1 message. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/managersplitter/genesis.proto).

## Messages

### GenesisState

GenesisState defines the managersplitter module's genesis state.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `params` | 1 | [`Params`](params.md#params) | singular |   |
| `managerSplitters` | 2 | [`ManagerSplitter`](tx.md#managersplitter) | repeated |   |
| `nextManagerSplitterId` | 3 | `string` | singular |   |
