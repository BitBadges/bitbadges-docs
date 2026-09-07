---
description: "Options for sign and broadcast operations."
---

# Interface: SignAndBroadcastOptions

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:225](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L225)

Options for sign and broadcast operations.

## Properties

### fee?

> `optional` **fee?**: [`SigningFee`](/sdk/reference/interfaces/signing-fee)

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:229](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L229)

Custom Cosmos fee (overrides auto-calculation); EVM pricing is managed by the wallet.

***

### gasMultiplier?

> `optional` **gasMultiplier?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:233](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L233)

Gas multiplier for simulation result. Default: uses client's gasMultiplier

***

### memo?

> `optional` **memo?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:227](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L227)

Transaction memo

***

### mode?

> `optional` **mode?**: `"cosmos"` \| `"precompile"` \| `"eip712"`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:245](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L245)

Override the broadcast path:
  - `cosmos`     — sign with the adapter's `signDirect` (Keplr / Leap / mnemonic).
  - `precompile` — encode the message as an EVM tx through the precompile.
  - `eip712`     — sign as a Cosmos legacyAmino tx via `eth_signTypedData_v4`
                   (EVM wallet signs the Cosmos message directly).
Default: auto-derived from the adapter (`cosmos` for Cosmos adapters,
`precompile` for EVM adapters). Set `eip712` when you want to broadcast
a Cosmos message signed with an EVM wallet — useful for messages the
precompile path doesn't cover, or for off-chain proofs.

***

### simulate?

> `optional` **simulate?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/signing/types.ts:231](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/signing/types.ts#L231)

Simulate first for gas estimation (both chains). Default: true; failure does not fall back to a fixed limit.
