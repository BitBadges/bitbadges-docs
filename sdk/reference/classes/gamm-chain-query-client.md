---
description: "Typed query client for the BitBadges chain's GAMM module via its LCD REST gateway."
---

# Class: GammChainQueryClient\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts:307](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts#L307)

Typed query client for the BitBadges chain's GAMM module via its LCD REST gateway.

Mirrors the proto-REST query surface (`/osmosis/gamm/v1beta1/...`) but exposes
camelCase params + responses to match the rest of the BitBadges SDK. Snake_case
translation happens at the wire boundary in [convertSnakeToCamel](/sdk/reference/functions/convert-snake-to-camel) /
[convertCamelToSnake](/sdk/reference/functions/convert-camel-to-snake).

The generic `T extends NumberType` controls the runtime type of numeric fields
in responses. Pass a `convertFunction` (e.g. `BigIntify`, `Stringify`, `Numberify`)
to the constructor or per-method to control conversion. Defaults to `BigIntify`.

## Example

```ts
const client = new GammChainQueryClient({ baseUrl: 'https://lcd.bitbadges.io' });
const { pool } = await client.getPool({ poolId: 1n });
const { totalShares } = await client.getTotalShares({ poolId: 1n });
```

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type) = `bigint`

## Constructors

### Constructor

> **new GammChainQueryClient**\<`T`\>(`opts?`): `GammChainQueryClient`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts:312](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts#L312)

#### Parameters

##### opts?

[`iGammChainQueryClientOptions`](/sdk/reference/interfaces/i-gamm-chain-query-client-options) & `object` = `{}`

#### Returns

`GammChainQueryClient`\<`T`\>

## Methods

### calcExitPoolCoinsFromShares()

> **calcExitPoolCoinsFromShares**(`payload`): `Promise`\<[`iCalcExitPoolCoinsFromSharesResponse`](/sdk/reference/interfaces/i-calc-exit-pool-coins-from-shares-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts:481](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts#L481)

GET /osmosis/gamm/v1beta1/pools/{poolId}/exit_swap_share_amount_in?share_in_amount=...

#### Parameters

##### payload

[`iCalcExitPoolCoinsFromSharesPayload`](/sdk/reference/interfaces/i-calc-exit-pool-coins-from-shares-payload)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

#### Returns

`Promise`\<[`iCalcExitPoolCoinsFromSharesResponse`](/sdk/reference/interfaces/i-calc-exit-pool-coins-from-shares-response)\<`T`\>\>

***

### calcJoinPoolNoSwapShares()

> **calcJoinPoolNoSwapShares**(`payload`): `Promise`\<[`iCalcJoinPoolNoSwapSharesResponse`](/sdk/reference/interfaces/i-calc-join-pool-no-swap-shares-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts:500](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts#L500)

Calc join-pool no-swap shares. The chain proto for this query has no HTTP
gateway annotation; we use the same path style as `calcJoinPoolShares` with
the trailing segment `join_pool_no_swap`. If your chain build does not
expose this route, the call will surface a 404 from get.

#### Parameters

##### payload

[`iCalcJoinPoolNoSwapSharesPayload`](/sdk/reference/interfaces/i-calc-join-pool-no-swap-shares-payload)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

#### Returns

`Promise`\<[`iCalcJoinPoolNoSwapSharesResponse`](/sdk/reference/interfaces/i-calc-join-pool-no-swap-shares-response)\<`T`\>\>

***

### calcJoinPoolShares()

> **calcJoinPoolShares**(`payload`): `Promise`\<[`iCalcJoinPoolSharesResponse`](/sdk/reference/interfaces/i-calc-join-pool-shares-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts:462](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts#L462)

GET /osmosis/gamm/v1beta1/pools/{poolId}/join_swap_exact_in?tokens_in=...

#### Parameters

##### payload

[`iCalcJoinPoolSharesPayload`](/sdk/reference/interfaces/i-calc-join-pool-shares-payload)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

#### Returns

`Promise`\<[`iCalcJoinPoolSharesResponse`](/sdk/reference/interfaces/i-calc-join-pool-shares-response)\<`T`\>\>

***

### estimateSwapExactAmountIn()

> **estimateSwapExactAmountIn**(`payload`): `Promise`\<[`iEstimateSwapExactAmountInResponse`](/sdk/reference/interfaces/i-estimate-swap-exact-amount-in-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts:519](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts#L519)

GET /osmosis/gamm/v1beta1/{poolId}/estimate/swap_exact_amount_in

#### Parameters

##### payload

[`iEstimateSwapExactAmountInPayload`](/sdk/reference/interfaces/i-estimate-swap-exact-amount-in-payload)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

#### Returns

`Promise`\<[`iEstimateSwapExactAmountInResponse`](/sdk/reference/interfaces/i-estimate-swap-exact-amount-in-response)\<`T`\>\>

***

### estimateSwapExactAmountOut()

> **estimateSwapExactAmountOut**(`payload`): `Promise`\<[`iEstimateSwapExactAmountOutResponse`](/sdk/reference/interfaces/i-estimate-swap-exact-amount-out-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts:541](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts#L541)

GET /osmosis/gamm/v1beta1/{poolId}/estimate/swap_exact_amount_out

#### Parameters

##### payload

[`iEstimateSwapExactAmountOutPayload`](/sdk/reference/interfaces/i-estimate-swap-exact-amount-out-payload)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

#### Returns

`Promise`\<[`iEstimateSwapExactAmountOutResponse`](/sdk/reference/interfaces/i-estimate-swap-exact-amount-out-response)\<`T`\>\>

***

### getPool()

> **getPool**(`payload`): `Promise`\<\{ `pool`: [`Pool`](/sdk/reference/classes/pool)\<`T`\>; \}\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts:394](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts#L394)

GET /osmosis/gamm/v1beta1/pools/{poolId}

#### Parameters

##### payload

[`iGetPoolPayload`](/sdk/reference/interfaces/i-get-pool-payload)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

#### Returns

`Promise`\<\{ `pool`: [`Pool`](/sdk/reference/classes/pool)\<`T`\>; \}\>

***

### getPools()

> **getPools**(`payload?`): `Promise`\<[`iGetPoolsResponse`](/sdk/reference/interfaces/i-get-pools-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts:403](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts#L403)

GET /osmosis/gamm/v1beta1/pools

#### Parameters

##### payload?

[`iGetPoolsPayload`](/sdk/reference/interfaces/i-get-pools-payload) = `{}`

#### Returns

`Promise`\<[`iGetPoolsResponse`](/sdk/reference/interfaces/i-get-pools-response)\<`T`\>\>

***

### getSpotPrice()

> **getSpotPrice**(`payload`): `Promise`\<[`iGetSpotPriceResponse`](/sdk/reference/interfaces/i-get-spot-price-response)\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts:439](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts#L439)

GET /osmosis/gamm/v1beta1/pools/{poolId}/prices?base_asset_denom=...&quote_asset_denom=...

#### Parameters

##### payload

[`iGetSpotPricePayload`](/sdk/reference/interfaces/i-get-spot-price-payload)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

#### Returns

`Promise`\<[`iGetSpotPriceResponse`](/sdk/reference/interfaces/i-get-spot-price-response)\>

***

### getTotalLiquidity()

> **getTotalLiquidity**(): `Promise`\<[`iGetTotalLiquidityResponse`](/sdk/reference/interfaces/i-get-total-liquidity-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts:454](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts#L454)

GET /osmosis/gamm/v1beta1/total_liquidity

#### Returns

`Promise`\<[`iGetTotalLiquidityResponse`](/sdk/reference/interfaces/i-get-total-liquidity-response)\<`T`\>\>

***

### getTotalPoolLiquidity()

> **getTotalPoolLiquidity**(`payload`): `Promise`\<[`iGetTotalPoolLiquidityResponse`](/sdk/reference/interfaces/i-get-total-pool-liquidity-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts:428](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts#L428)

GET /osmosis/gamm/v1beta1/pools/{poolId}/total_pool_liquidity

#### Parameters

##### payload

[`iGetTotalPoolLiquidityPayload`](/sdk/reference/interfaces/i-get-total-pool-liquidity-payload)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

#### Returns

`Promise`\<[`iGetTotalPoolLiquidityResponse`](/sdk/reference/interfaces/i-get-total-pool-liquidity-response)\<`T`\>\>

***

### getTotalShares()

> **getTotalShares**(`payload`): `Promise`\<[`iGetTotalSharesResponse`](/sdk/reference/interfaces/i-get-total-shares-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts:417](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/gamm/chain-query-client.ts#L417)

GET /osmosis/gamm/v1beta1/pools/{poolId}/total_shares

#### Parameters

##### payload

[`iGetTotalSharesPayload`](/sdk/reference/interfaces/i-get-total-shares-payload)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>

#### Returns

`Promise`\<[`iGetTotalSharesResponse`](/sdk/reference/interfaces/i-get-total-shares-response)\<`T`\>\>
