---
description: "Adds the 'AI Agent Vault' standard tag — purely a discovery hint."
---

# Interface: SmartTokenParams

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts#L36)

## Properties

### aiAgentVault?

> `optional` **aiAgentVault?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts:46](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts#L46)

Adds the 'AI Agent Vault' standard tag — purely a discovery hint.

***

### allowForcefulPostMintTransfers?

> `optional` **allowForcefulPostMintTransfers?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts:53](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts#L53)

Override the chain-level invariant. Smart Tokens default to LOCKED forceful
post-mint transfers (the safer default for vault-like wallets) — set this
to `true` only if you need a delegated approval flow that uses
`force=true` in MsgTransferTokens.

***

### backingCoin

> **backingCoin**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts:37](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts#L37)

***

### description?

> `optional` **description?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts:42](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts#L42)

***

### image?

> `optional` **image?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts:43](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts#L43)

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts:41](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts#L41)

***

### symbol?

> `optional` **symbol?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts:38](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts#L38)

***

### tradable?

> `optional` **tradable?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts#L44)

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/builders/smart-token.ts#L40)

Pre-hosted collection metadata URI. If provided, name/image/description are ignored.
