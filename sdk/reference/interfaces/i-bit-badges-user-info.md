---
description: "T extends NumberType"
---

# Interface: iBitBadgesUserInfo\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L40)

## Extends

- [`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc)\<`T`\>.[`iAccountDoc`](/sdk/reference/interfaces/i-account-doc)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:13](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L13)

A unique stringified document ID

#### Inherited from

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`_docId`](/sdk/reference/interfaces/i-profile-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:16](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L16)

A unique document ID (Mongo DB ObjectID)

#### Inherited from

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`_id`](/sdk/reference/interfaces/i-profile-doc#_id)

***

### accountNumber

> **accountNumber**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:563](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L563)

The account number of the account. This is the account number registered on the BitBadges blockchain.

WARNING (BB-34): post-v34 accounts get hash-derived account numbers larger than 2^53, which a JS
`number` cannot hold. Use `BigIntify` or `Stringify` when converting docs that carry this field —
`Numberify` silently corrupts it and the corrupted value is rejected by the signing pipeline.

#### Inherited from

[`iAccountDoc`](/sdk/reference/interfaces/i-account-doc).[`accountNumber`](/sdk/reference/interfaces/i-account-doc#accountnumber)

***

### activity

> **activity**: [`iTransferActivityDoc`](/sdk/reference/interfaces/i-transfer-activity-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:52](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L52)

A list of transfer activity items for the account. Paginated and fetched as needed. To be used in conjunction with views.

***

### address

> **address**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:65](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L65)

The native address of the account

***

### airdropped?

> `optional` **airdropped?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:48](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L48)

Indicates whether the account has claimed their airdrop.

***

### alias?

> `optional` **alias?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:88](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L88)

For advanced cases where you want a custom address or account for a collection or list. We map it to an account.

Experimental - For example, if you want to send a badge to a collection, you can transfer it to the alias account.

#### collectionId?

> `optional` **collectionId?**: `string`

***

### approvalTrackers

> **approvalTrackers**: [`iApprovalTrackerDoc`](/sdk/reference/interfaces/i-approval-tracker-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:60](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L60)

A list of approvals tracker activity items for the account. Paginated and fetched as needed. To be used in conjunction with views.

***

### avatar?

> `optional` **avatar?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L44)

The avatar of the account.

***

### balances?

> `optional` **balances?**: [`iCosmosCoin`](/sdk/reference/interfaces/i-cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:578](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L578)

The BADGE balance of the account and other sdk.coin balances

#### Inherited from

[`iAccountDoc`](/sdk/reference/interfaces/i-account-doc).[`balances`](/sdk/reference/interfaces/i-account-doc#balances)

***

### bannerImage?

> `optional` **bannerImage?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:622](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L622)

The banner image URL of the account

#### Inherited from

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`bannerImage`](/sdk/reference/interfaces/i-profile-doc#bannerimage)

***

### bitbadgesAddress

> **bitbadgesAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:567](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L567)

The BitBadges address of the account

#### Inherited from

[`iAccountDoc`](/sdk/reference/interfaces/i-account-doc).[`bitbadgesAddress`](/sdk/reference/interfaces/i-account-doc#bitbadgesaddress)

***

### chain

> **chain**: [`SupportedChain`](/sdk/reference/enumerations/supported-chain)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:46](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L46)

The chain of the account.

***

### challengeTrackers

> **challengeTrackers**: [`iMerkleChallengeTrackerDoc`](/sdk/reference/interfaces/i-merkle-challenge-tracker-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:58](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L58)

A list of merkle challenge activity items for the account. Paginated and fetched as needed. To be used in conjunction with views.

***

### claimActivity?

> `optional` **claimActivity?**: [`iClaimActivityDoc`](/sdk/reference/interfaces/i-claim-activity-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:54](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L54)

A list of claim activity items for the account. Paginated and fetched as needed. To be used in conjunction with views.

***

### collected

> **collected**: [`iBalanceDocWithDetails`](/sdk/reference/interfaces/i-balance-doc-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:50](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L50)

A list of tokens that the account has collected. Paginated and fetched as needed. To be used in conjunction with views.

***

### createdAt?

> `optional` **createdAt?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:603](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L603)

The timestamp of when this account was created (milliseconds since epoch)

#### Inherited from

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`createdAt`](/sdk/reference/interfaces/i-profile-doc#createdat)

***

### creatorCredits?

> `optional` **creatorCredits?**: [`iCreatorCreditsDoc`](/sdk/reference/interfaces/i-creator-credits-doc)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L93)

The credits for the account.

***

### discord?

> `optional` **discord?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:606](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L606)

The Discord username of the account

#### Inherited from

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`discord`](/sdk/reference/interfaces/i-profile-doc#discord)

***

### ethAddress

> **ethAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:569](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L569)

The Eth address of the account

#### Inherited from

[`iAccountDoc`](/sdk/reference/interfaces/i-account-doc).[`ethAddress`](/sdk/reference/interfaces/i-account-doc#ethaddress)

***

### fetchedProfile?

> `optional` **fetchedProfile?**: `"full"` \| `"partial"`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:598](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L598)

Whether we have already fetched the profile or not

#### Inherited from

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`fetchedProfile`](/sdk/reference/interfaces/i-profile-doc#fetchedprofile)

***

### github?

> `optional` **github?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:610](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L610)

The GitHub username of the account

#### Inherited from

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`github`](/sdk/reference/interfaces/i-profile-doc#github)

***

### hiddenTokens?

> `optional` **hiddenTokens?**: [`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:617](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L617)

The hidden tokens of the account

#### Inherited from

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`hiddenTokens`](/sdk/reference/interfaces/i-profile-doc#hiddentokens)

***

### latestSignedInChain?

> `optional` **latestSignedInChain?**: [`SupportedChain`](/sdk/reference/enumerations/supported-chain)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:628](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L628)

The latest chain the user signed in with

#### Inherited from

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`latestSignedInChain`](/sdk/reference/interfaces/i-profile-doc#latestsignedinchain)

***

### notifications?

> `optional` **notifications?**: [`iNotificationPreferences`](/sdk/reference/interfaces/i-notification-preferences)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:631](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L631)

The notifications of the account

#### Inherited from

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`notifications`](/sdk/reference/interfaces/i-profile-doc#notifications)

***

### nsfw?

> `optional` **nsfw?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:68](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L68)

Indicates whether the account is NSFW.

#### reason

> **reason**: `string`

***

### pointsActivity?

> `optional` **pointsActivity?**: [`iPointsActivityDoc`](/sdk/reference/interfaces/i-points-activity-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:56](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L56)

A list of points activity items for the account. Paginated and fetched as needed. To be used in conjunction with views.

***

### profilePicUrl?

> `optional` **profilePicUrl?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:620](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L620)

The profile picture URL of the account

#### Inherited from

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`profilePicUrl`](/sdk/reference/interfaces/i-profile-doc#profilepicurl)

***

### pubKeyType

> **pubKeyType**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:565](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L565)

The public key type of the account

#### Inherited from

[`iAccountDoc`](/sdk/reference/interfaces/i-account-doc).[`pubKeyType`](/sdk/reference/interfaces/i-account-doc#pubkeytype)

***

### publicKey

> **publicKey**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:555](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L555)

The public key of the account

#### Inherited from

[`iAccountDoc`](/sdk/reference/interfaces/i-account-doc).[`publicKey`](/sdk/reference/interfaces/i-account-doc#publickey)

***

### readme?

> `optional` **readme?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:614](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L614)

The readme of the account

#### Inherited from

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`readme`](/sdk/reference/interfaces/i-profile-doc#readme)

***

### reported?

> `optional` **reported?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:70](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L70)

Indicates whether the account has been reported.

#### reason

> **reason**: `string`

***

### resolvedName?

> `optional` **resolvedName?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:42](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L42)

The resolved name of the account (e.g. ENS name).

***

### seenActivity?

> `optional` **seenActivity?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:601](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L601)

The timestamp of the last activity seen for this account (milliseconds since epoch)

#### Inherited from

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`seenActivity`](/sdk/reference/interfaces/i-profile-doc#seenactivity)

***

### sequence?

> `optional` **sequence?**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:576](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L576)

The sequence of the account. This is the nonce for the blockchain for this account.

WARNING (BB-34): post-v34 unordered-tx nonces can be nanosecond timestamps larger than 2^53 —
same rule as `accountNumber`: convert with `BigIntify`/`Stringify`, never `Numberify`.

#### Inherited from

[`iAccountDoc`](/sdk/reference/interfaces/i-account-doc).[`sequence`](/sdk/reference/interfaces/i-account-doc#sequence)

***

### siwbbRequests

> **siwbbRequests**: [`iSIWBBRequestDoc`](/sdk/reference/interfaces/i-siwbb-request-doc)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:62](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L62)

A list of SIWBB requests for the account. Paginated and fetched as needed. To be used in conjunction with views.

***

### tags?

> `optional` **tags?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:96](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L96)

The tags for the account. Extra descriptors for what this address is used for (e.g. "Pool", "Governance",  etc).

***

### telegram?

> `optional` **telegram?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:612](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L612)

The Telegram username of the account

#### Inherited from

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`telegram`](/sdk/reference/interfaces/i-profile-doc#telegram)

***

### twitter?

> `optional` **twitter?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:608](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L608)

The Twitter username of the account

#### Inherited from

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`twitter`](/sdk/reference/interfaces/i-profile-doc#twitter)

***

### username?

> `optional` **username?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:625](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L625)

The username of the account

#### Inherited from

[`iProfileDoc`](/sdk/reference/interfaces/i-profile-doc).[`username`](/sdk/reference/interfaces/i-profile-doc#username)

***

### views

> **views**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts:73](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/BitBadgesUserInfo.ts#L73)

The views for this collection and their pagination Doc. Views will only include the doc _ids. Use the pagination to fetch more.  For example, if you want to fetch the activity for a view, you would use the view's pagination to fetch the doc _ids, then use the corresponding activity array to find the matching docs.

#### Index Signature

\[`viewId`: `string`\]: \{ `ids`: `string`[]; `pagination`: [`PaginationInfo`](/sdk/reference/interfaces/pagination-info); `type`: `string`; \} \| `undefined`
