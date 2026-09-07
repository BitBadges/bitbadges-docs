---
description: "Response interface for a successful swap estimation. Contains the estimated swap details including amounts, routing path, and any warnings."
---

# Interface: iEstimateSwapSuccessResponse

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:250](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L250)

Response interface for a successful swap estimation.
Contains the estimated swap details including amounts, routing path, and any warnings.

## Properties

### estimate

> **estimate**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:254](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L254)

Detailed estimation information for the swap.

#### assetPath

> **assetPath**: `object`[]

The path the asset takes through different chains and operations to complete the swap.
Each step in the path indicates the denom, chain ID, and how the asset moves (genesis, swap, or transfer).

#### autoRedirectedToWETH?

> `optional` **autoRedirectedToWETH?**: `boolean`

Whether the swap was automatically redirected to WETH. BitBadges only supports single-tx operations. Bridges return WETH. Then, another unwrap tx is required (which we do not handle).

#### complianceErrorMessage?

> `optional` **complianceErrorMessage?**: `string`

Detailed error message if compliance checks failed.

#### complianceNotPassedWarning?

> `optional` **complianceNotPassedWarning?**: `boolean`

Warning flag indicating if compliance checks did not pass for this swap. This means swap is likely to fail on BitBadges pool swap with compliance checks.

#### doesSwap

> **doesSwap**: `boolean`

Whether an actual swap operation occurs (true) or if it's just a transfer.

#### estimatedTime?

> `optional` **estimatedTime?**: `number`

Estimated time in seconds for the swap to complete (if available).

#### fallbackAsset?

> `optional` **fallbackAsset?**: `object`

Fallback asset if swap is not possible.

##### fallbackAsset.chainId

> **chainId**: `string`

##### fallbackAsset.denom

> **denom**: `string`

#### lowLiquidityWarning?

> `optional` **lowLiquidityWarning?**: `boolean`

Warning flag indicating if the liquidity pool has low liquidity, which may affect swap execution.

#### rerouted?

> `optional` **rerouted?**: `boolean`

Whether the swap was vs standard estimate (internal use)

#### skipGoMsgs

> **skipGoMsgs**: `SkipGoMessage`[]

Messages for multi-chain routing.
Contains either a multi-chain message (for Cosmos chains) or an EVM transaction (for EVM chains).
These messages are used to execute the swap across different chains if needed.

#### tokenInAmount

> **tokenInAmount**: `string`

The amount of tokens being swapped in (token in).

#### tokenOutAmount

> **tokenOutAmount**: `string`

The estimated amount of tokens that will be received (token out).

***

### success

> **success**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/gamm/indexer.ts:252](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/indexer.ts#L252)

Whether the swap estimation was successful.
