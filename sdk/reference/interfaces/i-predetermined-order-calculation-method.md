---
description: "Use the merkle challenge leaf index as the order number. Must specify ONE merkle challenge with the useLeafIndexForTransferOrder flag set to true. If so, we…"
---

# Interface: iPredeterminedOrderCalculationMethod

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:184](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L184)

## Properties

### challengeTrackerId

> **challengeTrackerId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:196](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L196)

Use the merkle challenge leaf index as the order number. Must specify ONE merkle challenge with the useLeafIndexForTransferOrder flag set to true. If so, we will use the leaf index of each merkle proof to calculate the order number. This is used to reserve specific balances for specific leaves (such as codes or whitelist address leafs)

***

### useMerkleChallengeLeafIndex

> **useMerkleChallengeLeafIndex**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:194](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L194)

Use the merkle challenge leaf index as the order number. Must specify ONE merkle challenge with the useLeafIndexForTransferOrder flag set to true. If so, we will use the leaf index of each merkle proof to calculate the order number. This is used to reserve specific balances for specific leaves (such as codes or whitelist address leafs)

***

### useOverallNumTransfers

> **useOverallNumTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:186](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L186)

Use the overall number of transfers this approval has been used with as the order number. Ex: If this approval has been used 2 times by ANY address, then the order number for the next transfer will be 3.

***

### usePerFromAddressNumTransfers

> **usePerFromAddressNumTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:190](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L190)

Use the number of times this approval has been used by each from address as the order number. Ex: If this approval has been used 2 times by from address A, then the order number for the next transfer by from address A will be 3.

***

### usePerInitiatedByAddressNumTransfers

> **usePerInitiatedByAddressNumTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:192](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L192)

Use the number of times this approval has been used by each initiated by address as the order number. Ex: If this approval has been used 2 times by initiated by address A, then the order number for the next transfer by initiated by address A will be 3.

***

### usePerToAddressNumTransfers

> **usePerToAddressNumTransfers**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts:188](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/approvals.ts#L188)

Use the number of times this approval has been used by each to address as the order number. Ex: If this approval has been used 2 times by to address A, then the order number for the next transfer by to address A will be 3.
