---
description: "Trader address — the approval owner."
---

# Interface: PredictionMarketSideArgs

Defined in: [packages/bitbadgesjs-sdk/src/core/prediction-markets.ts:818](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/prediction-markets.ts#L818)

## Properties

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/prediction-markets.ts:820](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/prediction-markets.ts#L820)

Trader address — the approval owner.

***

### approvalId

> **approvalId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/prediction-markets.ts:834](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/prediction-markets.ts#L834)

Approval id — caller picks; usually a fresh random hex.

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/prediction-markets.ts:822](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/prediction-markets.ts#L822)

Market collection ID (each prediction market is its own collection).

***

### paymentAmount

> **paymentAmount**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/prediction-markets.ts:830](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/prediction-markets.ts#L830)

Payment amount in base units.

***

### paymentDenom

> **paymentDenom**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/prediction-markets.ts:828](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/prediction-markets.ts#L828)

Payment denom (typically the deposit denom or a badgeslp:* alias).

***

### tokenAmount

> **tokenAmount**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/prediction-markets.ts:826](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/prediction-markets.ts#L826)

Quantity of YES/NO tokens being bought or sold.

***

### tokenId

> **tokenId**: `bigint`

Defined in: [packages/bitbadgesjs-sdk/src/core/prediction-markets.ts:824](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/prediction-markets.ts#L824)

1 = YES, 2 = NO.

***

### transferTimes

> **transferTimes**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/core/prediction-markets.ts:832](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/prediction-markets.ts#L832)

Active window — typically a single range covering the trading period.
