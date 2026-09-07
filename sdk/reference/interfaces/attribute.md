---
description: "An event attribute."
---

# Interface: Attribute

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:137](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L137)

An event attribute.

This is the same attribute type as tendermint34.Attribute and tendermint35.EventAttribute
but `key` and `value` are unified to strings. The conversion
from bytes to string in the Tendermint 0.34 case should be done by performing
[lossy] UTF-8 decoding.

[lossy]: https://doc.rust-lang.org/stable/std/string/struct.String.html#method.from_utf8_lossy

## Properties

### key

> `readonly` **key**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:138](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L138)

***

### value

> `readonly` **value**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L139)
