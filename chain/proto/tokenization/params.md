---
description: "Generated schema for tokenization/params.proto: 1 message in the x/tokenization module."
---

# tokenization/params.proto

Proto package `tokenization`, part of the [x/tokenization](README.md) module. It declares 1 message. [Read the raw source](https://github.com/BitBadges/bitbadgeschain/blob/master/proto/tokenization/params.proto).

## Messages

### Params

Params defines the parameters for the module.

| Field | # | Type | Rule | Description |
| --- | --- | --- | --- | --- |
| `allowed_denoms` | 1 | `string` | repeated | allowed_denoms defines the list of denoms that are allowed to be used in coin_transfers |
| `affiliate_percentage` | 2 | `string` | singular | affiliate_percentage defines the percentage of the transfer amount that goes to the affiliate |
