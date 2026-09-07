---
description: "Options that can be specified when calling verifyChallenge()"
---

# Type Alias: VerifyChallengeOptions

> **VerifyChallengeOptions** = `object`

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:70](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L70)

Options that can be specified when calling verifyChallenge()

## Properties

### balancesSnapshot?

> `optional` **balancesSnapshot?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L93)

For verification of assets, instead of dynamically fetching the assets, you can specify a snapshot of the assets.

This is useful if you have a snapshot, balances will not change, or you are verifying in an offline manner.

***

### beforeVerification?

> `optional` **beforeVerification?**: (`params`) => `Promise`\<`void`\>

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:86](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L86)

Optional function to call before verification. This is useful to verify the challenge is
valid before proceeding with verification.

Note you can use expectedChallengeParams to verify values equal as expected.

This function is useful if you need to implement custom logic other than strict equality).
For example, assert that only one of assets A, B, or C are defined and not all three.

#### Parameters

##### params

[`ChallengeParams`](/sdk/reference/interfaces/challenge-params)\<`NumberType`\>

#### Returns

`Promise`\<`void`\>

***

### earliestIssuedAt?

> `optional` **earliestIssuedAt?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:108](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L108)

The earliest issued At ISO date string that is valid. For example, if you want to verify a challenge that was issued within the last minute, you can specify this to be 1 minute ago.

***

### expectedChallengeParams?

> `optional` **expectedChallengeParams?**: `Partial`\<[`ChallengeParams`](/sdk/reference/interfaces/challenge-params)\<`NumberType`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:75](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L75)

Optionally define the expected details to check. If the challenge was edited and the details
do not match, the challenge will fail verification.

***

### issuedAtTimeWindowMs?

> `optional` **issuedAtTimeWindowMs?**: `number`

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:113](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L113)

If set, we will verify the issuedAt is within this amount of ms ago (i.e. issuedAt >= Date.now() - issuedAtTimeWindowMs)

***

### skipAssetVerification?

> `optional` **skipAssetVerification?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:103](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L103)

If true, we do not check asset ownership. This is useful if you are verifying a challenge that is expected to be verified at a future time.

***

### skipSignatureVerification?

> `optional` **skipSignatureVerification?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:118](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L118)

If true, we do not check the signature. You can pass in an undefined ChainDriver

***

### skipTimestampVerification?

> `optional` **skipTimestampVerification?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/blockin/index.ts:98](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/blockin/index.ts#L98)

If true, we do not check timestamps (expirationDate / notBefore). This is useful if you are verifying a challenge that is expected to be verified at a future time.
