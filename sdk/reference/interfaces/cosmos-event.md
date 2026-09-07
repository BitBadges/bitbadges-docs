---
description: "The same event type as tendermint34.Event and tendermint35.Event but attribute keys and values are unified to strings. The conversion from bytes to string in…"
---

# Interface: CosmosEvent

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:152](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L152)

The same event type as tendermint34.Event and tendermint35.Event
but attribute keys and values are unified to strings. The conversion
from bytes to string in the Tendermint 0.34 case should be done by performing
[lossy] UTF-8 decoding.

[lossy]: https://doc.rust-lang.org/stable/std/string/struct.String.html#method.from_utf8_lossy

## Properties

### attributes

> `readonly` **attributes**: readonly [`Attribute`](/sdk/reference/interfaces/attribute)[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:154](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L154)

***

### type

> `readonly` **type**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:153](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L153)
