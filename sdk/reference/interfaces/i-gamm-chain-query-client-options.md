---
description: "The chain's LCD/REST gateway endpoint (e.g. https://lcd.bitbadges.io). Defaults to mainnet."
---

# Interface: iGammChainQueryClientOptions

Defined in: [packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts:32](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts#L32)

## Properties

### baseUrl?

> `optional` **baseUrl?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts:34](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts#L34)

The chain's LCD/REST gateway endpoint (e.g. `https://lcd.bitbadges.io`). Defaults to mainnet.

***

### fetchFn?

> `optional` **fetchFn?**: (`input`, `init?`) => `Promise`\<`Response`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts:39](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts#L39)

Optional fetch implementation. Defaults to global `fetch`. Useful for tests
or environments without a global `fetch`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

#### Parameters

##### input

`RequestInfo` \| `URL`

##### init?

`RequestInit`

#### Returns

`Promise`\<`Response`\>
