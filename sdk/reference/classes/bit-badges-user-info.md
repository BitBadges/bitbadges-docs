---
description: "BitBadgesUserInfo is the type for accounts returned by the BitBadges API. It includes all Docrmation about an account."
---

# Class: BitBadgesUserInfo\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:107](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L107)

BitBadgesUserInfo is the type for accounts returned by the BitBadges API. It includes all Docrmation about an account.

## Remarks

Note that returned user Docs will only fetch what is requested. It is your responsibility to join the data together (paginations, etc).
See documentation for helper functions, examples, and tutorials on handling this data and paginations.

## Extends

- [`ProfileDoc`](/sdk/reference/classes/profile-doc)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info)\<`T`\>
- [`CustomType`](/sdk/reference/interfaces/custom-type)\<`BitBadgesUserInfo`\<`T`\>\>

## Constructors

### Constructor

> **new BitBadgesUserInfo**\<`T`\>(`data`): `BitBadgesUserInfo`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:146](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L146)

#### Parameters

##### data

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info)\<`T`\>

#### Returns

`BitBadgesUserInfo`\<`T`\>

#### Overrides

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`constructor`](/sdk/reference/classes/profile-doc#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:547](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L547)

A unique stringified document ID

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`_docId`](/sdk/reference/interfaces/i-bit-badges-user-info#_docid)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`_docId`](/sdk/reference/classes/profile-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:548](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L548)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`_id`](/sdk/reference/interfaces/i-bit-badges-user-info#_id)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`_id`](/sdk/reference/classes/profile-doc#_id)

***

### accountNumber

> **accountNumber**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:110](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L110)

The account number of the account. This is the account number registered on the BitBadges blockchain.

WARNING (BB-34): post-v34 accounts get hash-derived account numbers larger than 2^53, which a JS
`number` cannot hold. Use `BigIntify` or `Stringify` when converting docs that carry this field —
`Numberify` silently corrupts it and the corrupted value is rejected by the signing pipeline.

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`accountNumber`](/sdk/reference/interfaces/i-bit-badges-user-info#accountnumber)

***

### activity

> **activity**: [`TransferActivityDoc`](/sdk/reference/classes/transfer-activity-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:121](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L121)

A list of transfer activity items for the account. Paginated and fetched as needed. To be used in conjunction with views.

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`activity`](/sdk/reference/interfaces/i-bit-badges-user-info#activity)

***

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:128](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L128)

The native address of the account

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`address`](/sdk/reference/interfaces/i-bit-badges-user-info#address)

***

### airdropped?

> `optional` **airdropped?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:119](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L119)

Indicates whether the account has claimed their airdrop.

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`airdropped`](/sdk/reference/interfaces/i-bit-badges-user-info#airdropped)

***

### alias?

> `optional` **alias?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:140](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L140)

For advanced cases where you want a custom address or account for a collection or list. We map it to an account.

Experimental - For example, if you want to send a badge to a collection, you can transfer it to the alias account.

#### collectionId?

> `optional` **collectionId?**: `string`

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`alias`](/sdk/reference/interfaces/i-bit-badges-user-info#alias)

***

### approvalTrackers

> **approvalTrackers**: [`ApprovalTrackerDoc`](/sdk/reference/classes/approval-tracker-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:125](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L125)

A list of approvals tracker activity items for the account. Paginated and fetched as needed. To be used in conjunction with views.

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`approvalTrackers`](/sdk/reference/interfaces/i-bit-badges-user-info#approvaltrackers)

***

### avatar?

> `optional` **avatar?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:117](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L117)

The avatar of the account.

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`avatar`](/sdk/reference/interfaces/i-bit-badges-user-info#avatar)

***

### balances?

> `optional` **balances?**: [`CosmosCoin`](/sdk/reference/classes/cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:112](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L112)

The BADGE balance of the account and other sdk.coin balances

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`balances`](/sdk/reference/interfaces/i-bit-badges-user-info#balances)

***

### bannerImage?

> `optional` **bannerImage?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:562](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L562)

The banner image URL of the account

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`bannerImage`](/sdk/reference/interfaces/i-bit-badges-user-info#bannerimage)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`bannerImage`](/sdk/reference/classes/profile-doc#bannerimage)

***

### bitbadgesAddress

> **bitbadgesAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:108](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L108)

The BitBadges address of the account

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`bitbadgesAddress`](/sdk/reference/interfaces/i-bit-badges-user-info#bitbadgesaddress)

***

### chain

> **chain**: [`SupportedChain`](/sdk/reference/enumerations/supported-chain)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:118](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L118)

The chain of the account.

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`chain`](/sdk/reference/interfaces/i-bit-badges-user-info#chain)

***

### challengeTrackers

> **challengeTrackers**: [`MerkleChallengeTrackerDoc`](/sdk/reference/classes/merkle-challenge-tracker-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:124](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L124)

A list of merkle challenge activity items for the account. Paginated and fetched as needed. To be used in conjunction with views.

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`challengeTrackers`](/sdk/reference/interfaces/i-bit-badges-user-info#challengetrackers)

***

### claimActivity?

> `optional` **claimActivity?**: [`ClaimActivityDoc`](/sdk/reference/classes/claim-activity-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:122](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L122)

A list of claim activity items for the account. Paginated and fetched as needed. To be used in conjunction with views.

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`claimActivity`](/sdk/reference/interfaces/i-bit-badges-user-info#claimactivity)

***

### collected

> **collected**: [`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:120](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L120)

A list of tokens that the account has collected. Paginated and fetched as needed. To be used in conjunction with views.

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`collected`](/sdk/reference/interfaces/i-bit-badges-user-info#collected)

***

### createdAt?

> `optional` **createdAt?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:551](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L551)

The timestamp of when this account was created (milliseconds since epoch)

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`createdAt`](/sdk/reference/interfaces/i-bit-badges-user-info#createdat)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`createdAt`](/sdk/reference/classes/profile-doc#createdat)

***

### creatorCredits?

> `optional` **creatorCredits?**: [`CreatorCreditsDoc`](/sdk/reference/classes/creator-credits-doc)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L143)

The credits for the account.

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`creatorCredits`](/sdk/reference/interfaces/i-bit-badges-user-info#creatorcredits)

***

### discord?

> `optional` **discord?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:552](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L552)

The Discord username of the account

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`discord`](/sdk/reference/interfaces/i-bit-badges-user-info#discord)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`discord`](/sdk/reference/classes/profile-doc#discord)

***

### ethAddress

> **ethAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:109](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L109)

The Eth address of the account

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`ethAddress`](/sdk/reference/interfaces/i-bit-badges-user-info#ethaddress)

***

### fetchedProfile?

> `optional` **fetchedProfile?**: `"full"` \| `"partial"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:549](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L549)

Whether we have already fetched the profile or not

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`fetchedProfile`](/sdk/reference/interfaces/i-bit-badges-user-info#fetchedprofile)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`fetchedProfile`](/sdk/reference/classes/profile-doc#fetchedprofile)

***

### github?

> `optional` **github?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:554](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L554)

The GitHub username of the account

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`github`](/sdk/reference/interfaces/i-bit-badges-user-info#github)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`github`](/sdk/reference/classes/profile-doc#github)

***

### hiddenTokens?

> `optional` **hiddenTokens?**: [`BatchTokenDetailsArray`](/sdk/reference/classes/batch-token-details-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:557](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L557)

The hidden tokens of the account

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`hiddenTokens`](/sdk/reference/interfaces/i-bit-badges-user-info#hiddentokens)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`hiddenTokens`](/sdk/reference/classes/profile-doc#hiddentokens)

***

### latestSignedInChain?

> `optional` **latestSignedInChain?**: [`SupportedChain`](/sdk/reference/enumerations/supported-chain)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:560](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L560)

The latest chain the user signed in with

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`latestSignedInChain`](/sdk/reference/interfaces/i-bit-badges-user-info#latestsignedinchain)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`latestSignedInChain`](/sdk/reference/classes/profile-doc#latestsignedinchain)

***

### notifications?

> `optional` **notifications?**: [`NotificationPreferences`](/sdk/reference/classes/notification-preferences)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:561](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L561)

The notifications of the account

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`notifications`](/sdk/reference/interfaces/i-bit-badges-user-info#notifications)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`notifications`](/sdk/reference/classes/profile-doc#notifications)

***

### nsfw?

> `optional` **nsfw?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:129](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L129)

Indicates whether the account is NSFW.

#### reason

> **reason**: `string`

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`nsfw`](/sdk/reference/interfaces/i-bit-badges-user-info#nsfw)

***

### pointsActivity?

> `optional` **pointsActivity?**: [`PointsActivityDoc`](/sdk/reference/classes/points-activity-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:123](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L123)

A list of points activity items for the account. Paginated and fetched as needed. To be used in conjunction with views.

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`pointsActivity`](/sdk/reference/interfaces/i-bit-badges-user-info#pointsactivity)

***

### profilePicUrl?

> `optional` **profilePicUrl?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:558](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L558)

The profile picture URL of the account

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`profilePicUrl`](/sdk/reference/interfaces/i-bit-badges-user-info#profilepicurl)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`profilePicUrl`](/sdk/reference/classes/profile-doc#profilepicurl)

***

### pubKeyType

> **pubKeyType**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:113](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L113)

The public key type of the account

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`pubKeyType`](/sdk/reference/interfaces/i-bit-badges-user-info#pubkeytype)

***

### publicKey

> **publicKey**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:114](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L114)

The public key of the account

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`publicKey`](/sdk/reference/interfaces/i-bit-badges-user-info#publickey)

***

### readme?

> `optional` **readme?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:556](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L556)

The readme of the account

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`readme`](/sdk/reference/interfaces/i-bit-badges-user-info#readme)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`readme`](/sdk/reference/classes/profile-doc#readme)

***

### reported?

> `optional` **reported?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:130](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L130)

Indicates whether the account has been reported.

#### reason

> **reason**: `string`

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`reported`](/sdk/reference/interfaces/i-bit-badges-user-info#reported)

***

### resolvedName?

> `optional` **resolvedName?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:116](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L116)

The resolved name of the account (e.g. ENS name).

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`resolvedName`](/sdk/reference/interfaces/i-bit-badges-user-info#resolvedname)

***

### seenActivity?

> `optional` **seenActivity?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:550](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L550)

The timestamp of the last activity seen for this account (milliseconds since epoch)

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`seenActivity`](/sdk/reference/interfaces/i-bit-badges-user-info#seenactivity)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`seenActivity`](/sdk/reference/classes/profile-doc#seenactivity)

***

### sequence?

> `optional` **sequence?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:111](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L111)

The sequence of the account. This is the nonce for the blockchain for this account.

WARNING (BB-34): post-v34 unordered-tx nonces can be nanosecond timestamps larger than 2^53 —
same rule as `accountNumber`: convert with `BigIntify`/`Stringify`, never `Numberify`.

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`sequence`](/sdk/reference/interfaces/i-bit-badges-user-info#sequence)

***

### siwbbRequests

> **siwbbRequests**: [`SIWBBRequestDoc`](/sdk/reference/classes/siwbb-request-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:126](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L126)

A list of SIWBB requests for the account. Paginated and fetched as needed. To be used in conjunction with views.

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`siwbbRequests`](/sdk/reference/interfaces/i-bit-badges-user-info#siwbbrequests)

***

### tags?

> `optional` **tags?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:144](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L144)

The tags for the account. Extra descriptors for what this address is used for (e.g. "Pool", "Governance",  etc).

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`tags`](/sdk/reference/interfaces/i-bit-badges-user-info#tags)

***

### telegram?

> `optional` **telegram?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:555](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L555)

The Telegram username of the account

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`telegram`](/sdk/reference/interfaces/i-bit-badges-user-info#telegram)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`telegram`](/sdk/reference/classes/profile-doc#telegram)

***

### twitter?

> `optional` **twitter?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:553](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L553)

The Twitter username of the account

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`twitter`](/sdk/reference/interfaces/i-bit-badges-user-info#twitter)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`twitter`](/sdk/reference/classes/profile-doc#twitter)

***

### username?

> `optional` **username?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:559](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L559)

The username of the account

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`username`](/sdk/reference/interfaces/i-bit-badges-user-info#username)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`username`](/sdk/reference/classes/profile-doc#username)

***

### views

> **views**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:131](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L131)

The views for this collection and their pagination Doc. Views will only include the doc _ids. Use the pagination to fetch more.  For example, if you want to fetch the activity for a view, you would use the view's pagination to fetch the doc _ids, then use the corresponding activity array to find the matching docs.

#### Index Signature

\[`viewId`: `string`\]: \{ `ids`: `string`[]; `pagination`: [`PaginationInfo`](/sdk/reference/interfaces/pagination-info); `type`: `string`; \} \| `undefined`

#### Implementation of

[`iBitBadgesUserInfo`](/sdk/reference/interfaces/i-bit-badges-user-info).[`views`](/sdk/reference/interfaces/i-bit-badges-user-info#views)

## Methods

### clone()

> **clone**(): `BitBadgesUserInfo`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:179](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L179)

Deep copies the object and returns a new instance.

#### Returns

`BitBadgesUserInfo`\<`T`\>

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`clone`](/sdk/reference/interfaces/custom-type#clone)

#### Overrides

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`clone`](/sdk/reference/classes/profile-doc#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `BitBadgesUserInfo`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:175](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L175)

Converts the object to a different NumberType equivalent.

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`BitBadgesUserInfo`\<`U`\>

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`convert`](/sdk/reference/interfaces/custom-type#convert)

#### Overrides

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`convert`](/sdk/reference/classes/profile-doc#convert)

***

### equals()

> **equals**\<`U`\>(`other`, `normalizeNumberTypes?`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:147](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L147)

Compares this object's fields to another object's fields for equality. Equality is determined by comparing the JSON representations of the objects.

If `normalizeNumberTypes` is true, then all number types will be compared as strings (i.e. "1n" === "1" === 1). Else, they will be compared as their native types (i.e. 1n !== 1 !== "1").

#### Type Parameters

##### U

`U` *extends* [`CustomType`](/sdk/reference/interfaces/custom-type)\<`U`\>

#### Parameters

##### other

[`CustomType`](/sdk/reference/interfaces/custom-type)\<`U`\> \| `null` \| `undefined`

##### normalizeNumberTypes?

`boolean`

#### Returns

`boolean`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`equals`](/sdk/reference/interfaces/custom-type#equals)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`equals`](/sdk/reference/classes/profile-doc#equals)

***

### fetchAllForView()

> **fetchAllForView**(`api`, `viewType`, `viewId`): `Promise`\<`void`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:434](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L434)

Fetches until the view has no more items. 1 second delay between each fetch for rate limiting.

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### viewType

[`AccountViewKey`](/sdk/reference/type-aliases/account-view-key)

##### viewId

`string`

#### Returns

`Promise`\<`void`\>

***

### fetchAndUpdate()

> **fetchAndUpdate**(`api`, `options`, `forceful?`): `Promise`\<`void`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:365](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L365)

Fetch the user's information via an API request and updates the current BitBadgesUserInfo object.
This will handle all paginations, etc. behind the scenes.

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### options

`Omit`\<[`AccountFetchDetails`](/sdk/reference/type-aliases/account-fetch-details), `"address"` \| `"username"`\>

##### forceful?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### fetchBalances()

> **fetchBalances**(`api`, `collectionId`, `forceful?`): `Promise`\<[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:312](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L312)

Fetch balances for a collection and updates the user's collected array. Must pass in a valid API instance.
If forceful is true, it will fetch regardless of if it is already fetched. Else, it will only fetch if it is not already cached.

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### collectionId

`string`

##### forceful?

`boolean`

#### Returns

`Promise`\<[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`T`\>\>

***

### fetchNextForView()

> **fetchNextForView**(`api`, `viewType`, `viewId`, `specificCollections?`, `oldestFirst?`, `standard?`): `Promise`\<`void`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:407](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L407)

Fetches the next page of a view for a user. If view has no more items, it will do nothing.

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### viewType

[`AccountViewKey`](/sdk/reference/type-aliases/account-view-key)

##### viewId

`string`

##### specificCollections?

[`BatchTokenDetails`](/sdk/reference/classes/batch-token-details)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>[]

##### oldestFirst?

`boolean`

##### standard?

`string`

#### Returns

`Promise`\<`void`\>

***

### getAccountActivityView()

> **getAccountActivityView**(`viewId`): [`TransferActivityDoc`](/sdk/reference/classes/transfer-activity-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:487](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L487)

#### Parameters

##### viewId

`string`

#### Returns

[`TransferActivityDoc`](/sdk/reference/classes/transfer-activity-doc)\<`T`\>[]

***

### getAccountBalancesView()

> **getAccountBalancesView**(`viewId`): [`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:493](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L493)

#### Parameters

##### viewId

`string`

#### Returns

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`T`\>[]

***

### getBalanceInfo()

> **getBalanceInfo**(`collectionId`): [`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`T`\> \| `undefined`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:262](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L262)

Gets the balance doc for a user by address.

This returns the cached data if it exists. If you want to fetch, use fetchBalances.

#### Parameters

##### collectionId

`string`

#### Returns

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`T`\> \| `undefined`

#### Example

```ts
const res = user.getBalanceInfo(123n);
console.log(res.balances);
```

***

### getBalances()

> **getBalances**(`collectionId`): [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\> \| `undefined`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:304](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L304)

Fetch balances for a collection and updates the user's collected array. Must pass in a valid API instance.

#### Parameters

##### collectionId

`string`

#### Returns

[`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\> \| `undefined`

#### Example

```ts
const res = await user.fetchBalances(api, 123n);
console.log(res.balances);
```

***

### getClaimActivityView()

> **getClaimActivityView**(`viewId`): [`ClaimActivityDoc`](/sdk/reference/classes/claim-activity-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:469](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L469)

#### Parameters

##### viewId

`string`

#### Returns

[`ClaimActivityDoc`](/sdk/reference/classes/claim-activity-doc)\<`T`\>[]

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:183](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L183)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`getNumberFieldNames`](/sdk/reference/interfaces/custom-type#getnumberfieldnames)

#### Overrides

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`getNumberFieldNames`](/sdk/reference/classes/profile-doc#getnumberfieldnames)

***

### getPointsActivityView()

> **getPointsActivityView**(`viewId`): [`PointsActivityDoc`](/sdk/reference/classes/points-activity-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:475](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L475)

#### Parameters

##### viewId

`string`

#### Returns

[`PointsActivityDoc`](/sdk/reference/classes/points-activity-doc)\<`T`\>[]

***

### getSIWBBRequestsView()

> **getSIWBBRequestsView**(`viewId`): [`SIWBBRequestDoc`](/sdk/reference/classes/siwbb-request-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:481](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L481)

#### Parameters

##### viewId

`string`

#### Returns

[`SIWBBRequestDoc`](/sdk/reference/classes/siwbb-request-doc)\<`T`\>[]

***

### getView()

> **getView**\<`KeyType`\>(`viewType`, `viewId`): `AccountViewData`\<`T`\>\[`KeyType`\]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:444](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L444)

Type agnostic get view function. Uses the viewType to determine the type of view to fetch and docs to return.

#### Type Parameters

##### KeyType

`KeyType` *extends* [`AccountViewKey`](/sdk/reference/type-aliases/account-view-key)

#### Parameters

##### viewType

`KeyType`

##### viewId

`string`

#### Returns

`AccountViewData`\<`T`\>\[`KeyType`\]

***

### getViewBookmark()

> **getViewBookmark**(`viewId`): `string` \| `undefined`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:400](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L400)

#### Parameters

##### viewId

`string`

#### Returns

`string` \| `undefined`

***

### getViewPagination()

> **getViewPagination**(`viewId`): [`PaginationInfo`](/sdk/reference/interfaces/pagination-info) \| `undefined`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:396](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L396)

#### Parameters

##### viewId

`string`

#### Returns

[`PaginationInfo`](/sdk/reference/interfaces/pagination-info) \| `undefined`

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`hasNumberFields`](/sdk/reference/interfaces/custom-type#hasnumberfields)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`hasNumberFields`](/sdk/reference/classes/profile-doc#hasnumberfields)

***

### isRedundantRequest()

> **isRedundantRequest**(`options`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:329](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L329)

Returns if a get account request body is redundant for this user (meaning we have everything already).

#### Parameters

##### options

`Omit`\<[`AccountFetchDetails`](/sdk/reference/type-aliases/account-fetch-details), `"address"` \| `"username"`\>

#### Returns

`boolean`

***

### mustGetBalanceInfo()

> **mustGetBalanceInfo**(`collectionId`): [`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:275](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L275)

Wrapper for [getBalanceInfo](#getbalanceinfo) that throws if not fetched yet.

#### Parameters

##### collectionId

`string`

#### Returns

[`BalanceDocWithDetails`](/sdk/reference/classes/balance-doc-with-details)\<`T`\>

#### Example

```ts
const res = user.mustGetBalanceInfo(123n);
console.log(res.balances);
```

***

### mustGetBalances()

> **mustGetBalances**(`collectionId`): [`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:291](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L291)

Gets the balances for a user by address. Throws if not fetched yet. To fetch, use fetchBalances.

Wrapper for [getBalances](#getbalances) that throws if not fetched yet.

#### Parameters

##### collectionId

`string`

#### Returns

[`BalanceArray`](/sdk/reference/classes/balance-array)\<`T`\>

#### Example

```ts
const res = user.mustGetBalances(123n);
console.log(res); // [{ ... }] Balances
```

***

### onList()

> **onList**(`addressList`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:502](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L502)

Checks if this user is on a given address list.

#### Parameters

##### addressList

[`iAddressList`](/sdk/reference/interfaces/i-address-list)

#### Returns

`boolean`

***

### pruneBody()

> **pruneBody**(`options`): [`AccountFetchDetails`](/sdk/reference/type-aliases/account-fetch-details)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:352](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L352)

Prunes the request body to remove any redundant fetches.

#### Parameters

##### options

`Omit`\<[`AccountFetchDetails`](/sdk/reference/type-aliases/account-fetch-details), `"address"` \| `"username"`\>

#### Returns

[`AccountFetchDetails`](/sdk/reference/type-aliases/account-fetch-details)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`toJson`](/sdk/reference/interfaces/custom-type#tojson)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`toJson`](/sdk/reference/classes/profile-doc#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`toJsonString`](/sdk/reference/interfaces/custom-type#tojsonstring)

#### Inherited from

[`ProfileDoc`](/sdk/reference/classes/profile-doc).[`toJsonString`](/sdk/reference/classes/profile-doc#tojsonstring)

***

### updateWithNewResponse()

> **updateWithNewResponse**(`newResponse`, `forceful?`): `void`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:380](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L380)

Logic for updating the current BitBadgesUserInfo object with a new API response. If forceful is true, it will overwrite everything.

#### Parameters

##### newResponse

`BitBadgesUserInfo`\<`T`\>

##### forceful?

`boolean`

#### Returns

`void`

***

### viewHasMore()

> **viewHasMore**(`viewId`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:392](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L392)

#### Parameters

##### viewId

`string`

#### Returns

`boolean`

***

### BlankUserInfo()

> `static` **BlankUserInfo**(): `BitBadgesUserInfo`\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:542](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L542)

Returns a BitBadgesUserInfo object with all fields set to blank.

#### Returns

`BitBadgesUserInfo`\<`bigint`\>

#### Remarks

By default, it uses \<bigint> type for all number fields, but you can convert with the `.convert` method.

***

### FetchAndInitialize()

> `static` **FetchAndInitialize**\<`T`\>(`api`, `options`): `Promise`\<`BitBadgesUserInfo`\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:190](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L190)

Fetches the user's information from the API and initializes a new BitBadgesUserInfo object.

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### options

[`AccountFetchDetails`](/sdk/reference/type-aliases/account-fetch-details)

#### Returns

`Promise`\<`BitBadgesUserInfo`\<`T`\>\>

***

### FetchAndInitializeBatch()

> `static` **FetchAndInitializeBatch**\<`T`\>(`api`, `options`): `Promise`\<`BitBadgesUserInfo`\<`T`\>[]\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:198](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L198)

Fetches users' information from the API and initializes a new BitBadgesUserInfo object for each.

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### options

[`AccountFetchDetails`](/sdk/reference/type-aliases/account-fetch-details)[]

#### Returns

`Promise`\<`BitBadgesUserInfo`\<`T`\>[]\>

***

### GetAccount()

> `static` **GetAccount**\<`T`\>(`api`, `params`): `Promise`\<[`GetAccountSuccessResponse`](/sdk/reference/classes/get-account-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:227](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L227)

Gets an account by address or username from the API.

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### params

[`iGetAccountPayload`](/sdk/reference/interfaces/i-get-account-payload)

#### Returns

`Promise`\<[`GetAccountSuccessResponse`](/sdk/reference/classes/get-account-success-response)\<`T`\>\>

***

### GetAccounts()

> `static` **GetAccounts**\<`T`\>(`api`, `params`): `Promise`\<[`GetAccountsSuccessResponse`](/sdk/reference/classes/get-accounts-success-response)\<`T`\>\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:206](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L206)

Gets accounts by address or username from the API.

#### Type Parameters

##### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### api

[`BaseBitBadgesApi`](/sdk/reference/classes/base-bit-badges-api)\<`T`\>

##### params

[`iGetAccountsPayload`](/sdk/reference/interfaces/i-get-accounts-payload)

#### Returns

`Promise`\<[`GetAccountsSuccessResponse`](/sdk/reference/classes/get-accounts-success-response)\<`T`\>\>

***

### MintAccount()

> `static` **MintAccount**(): `BitBadgesUserInfo`\<`bigint`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:512](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L512)

Returns a BitBadgesUserInfo object with all fields set for the Mint address.

#### Returns

`BitBadgesUserInfo`\<`bigint`\>

#### Remarks

By default, it uses \<bigint> type for all number fields, but you can convert with the `.convert` method.
