---
description: "bigint"
---

# Class: CosmosCoinUtils

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:25](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L25)

## Constructors

### Constructor

> **new CosmosCoinUtils**(`params`): `CosmosCoinUtils`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:30](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L30)

#### Parameters

##### params

###### amount

`bigint`

###### coinDetails?

[`CoinDetails`](/sdk/reference/interfaces/coin-details)

###### denom

`string`

#### Returns

`CosmosCoinUtils`

## Properties

### amount

> `readonly` **amount**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:27](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L27)

***

### coinDetails?

> `readonly` `optional` **coinDetails?**: [`CoinDetails`](/sdk/reference/interfaces/coin-details)

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:28](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L28)

***

### denom

> `readonly` **denom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:26](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L26)

## Accessors

### decimals

#### Get Signature

> **get** **decimals**(): `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L36)

##### Returns

`number`

***

### symbol

#### Get Signature

> **get** **symbol**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L40)

##### Returns

`string`

## Methods

### add()

> **add**(`other`): `CosmosCoinUtils`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:109](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L109)

#### Parameters

##### other

`CosmosCoinUtils`

#### Returns

`CosmosCoinUtils`

***

### calculateMinAmount()

> **calculateMinAmount**(`slippageTolerance`, `roundingMode?`): `CosmosCoinUtils`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:216](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L216)

#### Parameters

##### slippageTolerance

`number`

##### roundingMode?

[`RoundingMode`](/sdk/reference/enumerations/rounding-mode) = `RoundingMode.ROUND_DOWN`

#### Returns

`CosmosCoinUtils`

***

### calculateSlippage()

> **calculateSlippage**(`expectedAmount`, `precision?`): `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:212](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L212)

#### Parameters

##### expectedAmount

`bigint`

##### precision?

`number` = `6`

#### Returns

`number`

***

### divide()

> **divide**(`divisor`, `roundingMode?`): `CosmosCoinUtils`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:125](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L125)

#### Parameters

##### divisor

`number`

##### roundingMode?

[`RoundingMode`](/sdk/reference/enumerations/rounding-mode) = `RoundingMode.ROUND_DOWN`

#### Returns

`CosmosCoinUtils`

***

### getDisplayAmount()

> **getDisplayAmount**(): `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:45](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L45)

Display amount as a number. May lose precision for large values — prefer `getDisplayAmountString` for exactness.

#### Returns

`number`

***

### getDisplayAmountString()

> **getDisplayAmountString**(`precision?`, `roundingMode?`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:51](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L51)

Display amount as a precise string.

#### Parameters

##### precision?

`number`

##### roundingMode?

[`RoundingMode`](/sdk/reference/enumerations/rounding-mode) = `RoundingMode.ROUND_DOWN`

#### Returns

`string`

***

### getDisplayString()

> **getDisplayString**(`precision?`, `showSymbol?`, `roundingMode?`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:77](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L77)

Display amount with optional symbol. Default 2 dp, symbol on.

#### Parameters

##### precision?

`number` = `2`

##### showSymbol?

`boolean` = `true`

##### roundingMode?

[`RoundingMode`](/sdk/reference/enumerations/rounding-mode) = `RoundingMode.ROUND_DOWN`

#### Returns

`string`

***

### getRawAmountString()

> **getRawAmountString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:82](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L82)

#### Returns

`string`

***

### getUsdValue()

> **getUsdValue**(`usdPrice`, `precision?`, `roundingMode?`): `number` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:87](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L87)

USD value as a number. May lose precision for very large amounts.

#### Parameters

##### usdPrice

`number` \| `null` \| `undefined`

##### precision?

`number` = `2`

##### roundingMode?

[`RoundingMode`](/sdk/reference/enumerations/rounding-mode) = `RoundingMode.ROUND_DOWN`

#### Returns

`number` \| `null`

***

### getUsdValueString()

> **getUsdValueString**(`usdPrice`, `precision?`, `roundingMode?`): `string` \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:95](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L95)

USD value as a formatted string (e.g. "$1.23"). Returns null when usdPrice is missing.

#### Parameters

##### usdPrice

`number` \| `null` \| `undefined`

##### precision?

`number` = `2`

##### roundingMode?

[`RoundingMode`](/sdk/reference/enumerations/rounding-mode) = `RoundingMode.ROUND_DOWN`

#### Returns

`string` \| `null`

***

### isGreaterThan()

> **isGreaterThan**(`other`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:135](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L135)

#### Parameters

##### other

`CosmosCoinUtils`

#### Returns

`boolean`

***

### isLessThan()

> **isLessThan**(`other`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:140](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L140)

#### Parameters

##### other

`CosmosCoinUtils`

#### Returns

`boolean`

***

### isZero()

> **isZero**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:131](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L131)

#### Returns

`boolean`

***

### multiply()

> **multiply**(`factor`, `roundingMode?`): `CosmosCoinUtils`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:119](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L119)

#### Parameters

##### factor

`number`

##### roundingMode?

[`RoundingMode`](/sdk/reference/enumerations/rounding-mode) = `RoundingMode.ROUND_DOWN`

#### Returns

`CosmosCoinUtils`

***

### subtract()

> **subtract**(`other`): `CosmosCoinUtils`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:114](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L114)

#### Parameters

##### other

`CosmosCoinUtils`

#### Returns

`CosmosCoinUtils`

***

### toCoin()

> **toCoin**(): `object`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:185](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L185)

#### Returns

`object`

##### amount

> **amount**: `string`

##### denom

> **denom**: `string`

***

### toString()

> **toString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:189](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L189)

#### Returns

`string`

***

### withAmount()

> **withAmount**(`newAmount`): `CosmosCoinUtils`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:101](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L101)

#### Parameters

##### newAmount

`bigint`

#### Returns

`CosmosCoinUtils`

***

### withDenom()

> **withDenom**(`newDenom`, `newCoinDetails?`): `CosmosCoinUtils`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L105)

#### Parameters

##### newDenom

`string`

##### newCoinDetails?

[`CoinDetails`](/sdk/reference/interfaces/coin-details)

#### Returns

`CosmosCoinUtils`

***

### calculateMinAmount()

> `static` **calculateMinAmount**(`expectedAmount`, `slippageTolerance`, `roundingMode?`): `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:205](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L205)

Minimum acceptable amount given an expected amount and slippage tolerance (e.g. 0.005 = 0.5%).

#### Parameters

##### expectedAmount

`bigint`

##### slippageTolerance

`number`

##### roundingMode?

[`RoundingMode`](/sdk/reference/enumerations/rounding-mode) = `RoundingMode.ROUND_DOWN`

#### Returns

`bigint`

***

### calculateSlippage()

> `static` **calculateSlippage**(`expectedAmount`, `actualAmount`, `precision?`): `number`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:197](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L197)

Slippage % between expected and actual (positive = received less than expected).
Returns 0 when expected is 0.

#### Parameters

##### expectedAmount

`bigint`

##### actualAmount

`bigint`

##### precision?

`number` = `6`

#### Returns

`number`

***

### fromCoin()

> `static` **fromCoin**(`coin`, `coinDetails?`): `CosmosCoinUtils`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:177](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L177)

#### Parameters

##### coin

###### amount

`string` \| `bigint`

###### denom

`string`

##### coinDetails?

[`CoinDetails`](/sdk/reference/interfaces/coin-details)

#### Returns

`CosmosCoinUtils`

***

### fromDisplayAmount()

> `static` **fromDisplayAmount**(`displayAmount`, `denom`, `decimals?`, `coinDetails?`, `roundingMode?`): `CosmosCoinUtils`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:146](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L146)

Parse a display amount (e.g. "1.5") into raw bigint with `decimals` precision.

#### Parameters

##### displayAmount

`string` \| `number`

##### denom

`string`

##### decimals?

`number`

##### coinDetails?

[`CoinDetails`](/sdk/reference/interfaces/coin-details)

##### roundingMode?

[`RoundingMode`](/sdk/reference/enumerations/rounding-mode) = `RoundingMode.ROUND_DOWN`

#### Returns

`CosmosCoinUtils`

***

### fromRawAmount()

> `static` **fromRawAmount**(`rawAmountString`, `denom`, `coinDetails?`): `CosmosCoinUtils`

Defined in: [packages/bitbadgesjs-sdk/src/core/coin-utils.ts:173](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/coin-utils.ts#L173)

#### Parameters

##### rawAmountString

`string`

##### denom

`string`

##### coinDetails?

[`CoinDetails`](/sdk/reference/interfaces/coin-details)

#### Returns

`CosmosCoinUtils`
