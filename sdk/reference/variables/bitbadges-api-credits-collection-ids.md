---
description: "Per-network collection ID for BitBadges' own API-credits token (the \"APITOKEN\" collection that meters the BitBadges AI Builder and the main API-key middleware…"
---

# Variable: BITBADGES\_API\_CREDITS\_COLLECTION\_IDS

> `const` **BITBADGES\_API\_CREDITS\_COLLECTION\_IDS**: `Record`\<`"mainnet"` \| `"testnet"` \| `"local"`, `string` \| `null`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/credit-tokens.ts:29](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/credit-tokens.ts#L29)

Per-network collection ID for **BitBadges' own** API-credits token
(the "APITOKEN" collection that meters the BitBadges AI Builder and
the main API-key middleware; 1 USDC = 100,000 APITOKEN).

This is NOT "the" credit token — the Credit Token standard is generic
and anyone can deploy their own collection. This constant is purely a
convenience so callers topping up *BitBadges'* API don't have to look
the id up. Mirrors `API_CREDITS_COLLECTION_ID` in the FE constants.
`testnet: null` — the APITOKEN collection is not deployed on testnet.
