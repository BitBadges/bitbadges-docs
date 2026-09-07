---
description: "T extends NumberType"
---

# Interface: iMsgUniversalUpdateCollection\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:111](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L111)

## Extends

- [`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### aliasPathsToAdd?

> `optional` **aliasPathsToAdd?**: [`iAliasPathAddObject`](/sdk/reference/interfaces/i-alias-path-add-object)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:80](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L80)

The alias (non-wrapping) paths to add.

#### Inherited from

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`aliasPathsToAdd`](/sdk/reference/interfaces/i-msg-create-collection#aliaspathstoadd)

***

### collectionApprovals?

> `optional` **collectionApprovals?**: [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:65](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L65)

The new collection approved transfers. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Inherited from

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`collectionApprovals`](/sdk/reference/interfaces/i-msg-create-collection#collectionapprovals)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:113](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L113)

The ID of the collection to update.

***

### collectionMetadata?

> `optional` **collectionMetadata?**: [`iCollectionMetadata`](/sdk/reference/interfaces/i-collection-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:56](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L56)

The new collection metadata. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Inherited from

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`collectionMetadata`](/sdk/reference/interfaces/i-msg-create-collection#collectionmetadata)

***

### collectionPermissions?

> `optional` **collectionPermissions?**: [`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:50](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L50)

The new collection permissions. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Inherited from

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`collectionPermissions`](/sdk/reference/interfaces/i-msg-create-collection#collectionpermissions)

***

### cosmosCoinWrapperPathsToAdd?

> `optional` **cosmosCoinWrapperPathsToAdd?**: [`iCosmosCoinWrapperPathAddObject`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-add-object)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:77](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L77)

The IBC wrapper paths to add.

#### Inherited from

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`cosmosCoinWrapperPathsToAdd`](/sdk/reference/interfaces/i-msg-create-collection#cosmoscoinwrapperpathstoadd)

***

### creator

> **creator**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:41](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L41)

The creator of the transaction.

#### Inherited from

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`creator`](/sdk/reference/interfaces/i-msg-create-collection#creator)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:62](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L62)

The new custom data. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Inherited from

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`customData`](/sdk/reference/interfaces/i-msg-create-collection#customdata)

***

### defaultBalances?

> `optional` **defaultBalances?**: [`iUserBalanceStore`](/sdk/reference/interfaces/i-user-balance-store)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L44)

The default balances for users who have not interacted with the collection yet. Only can be set on initial creation. Only used if collection has "Standard" balance type.

#### Inherited from

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`defaultBalances`](/sdk/reference/interfaces/i-msg-create-collection#defaultbalances)

***

### invariants?

> `optional` **invariants?**: [`iInvariantsAddObject`](/sdk/reference/interfaces/i-invariants-add-object)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:83](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L83)

Collection-level invariants that cannot be broken. These are set upon genesis and cannot be modified. Addresses are generated by the keeper.

#### Inherited from

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`invariants`](/sdk/reference/interfaces/i-msg-create-collection#invariants)

***

### isArchived?

> `optional` **isArchived?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:71](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L71)

The new is archived flag. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Inherited from

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`isArchived`](/sdk/reference/interfaces/i-msg-create-collection#isarchived)

***

### manager?

> `optional` **manager?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:53](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L53)

The new manager. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Inherited from

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`manager`](/sdk/reference/interfaces/i-msg-create-collection#manager)

***

### mintEscrowCoinsToTransfer?

> `optional` **mintEscrowCoinsToTransfer?**: [`iCosmosCoin`](/sdk/reference/interfaces/i-cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:74](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L74)

The coins to mint to the transfer address. Only used if collection has "Non-Public" balance type.

#### Inherited from

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`mintEscrowCoinsToTransfer`](/sdk/reference/interfaces/i-msg-create-collection#mintescrowcoinstotransfer)

***

### standards?

> `optional` **standards?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:68](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L68)

The new standards. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Inherited from

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`standards`](/sdk/reference/interfaces/i-msg-create-collection#standards)

***

### tokenMetadata?

> `optional` **tokenMetadata?**: [`iTokenMetadata`](/sdk/reference/interfaces/i-token-metadata)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:59](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L59)

The new token metadata. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg. Note we take first-match only for token IDs, so do not define duplicates.

#### Inherited from

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`tokenMetadata`](/sdk/reference/interfaces/i-msg-create-collection#tokenmetadata)

***

### updateCollectionApprovals?

> `optional` **updateCollectionApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:125](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L125)

Whether or not to update the collection approved transfers.

***

### updateCollectionMetadata?

> `optional` **updateCollectionMetadata?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:119](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L119)

Whether or not to update the collection metadata.

***

### updateCollectionPermissions?

> `optional` **updateCollectionPermissions?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L115)

Whether or not to update the collection permissions.

***

### updateCustomData?

> `optional` **updateCustomData?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:123](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L123)

Whether or not to update the custom data.

***

### updateIsArchived?

> `optional` **updateIsArchived?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:129](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L129)

Whether or not to update the is archived flag.

***

### updateManager?

> `optional` **updateManager?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:117](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L117)

Whether or not to update the manager.

***

### updateStandards?

> `optional` **updateStandards?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:127](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L127)

Whether or not to update the standards.

***

### updateTokenMetadata?

> `optional` **updateTokenMetadata?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:121](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L121)

Whether or not to update the token metadata.

***

### updateValidTokenIds?

> `optional` **updateValidTokenIds?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:131](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L131)

Whether or not to update the valid token IDs.

***

### validTokenIds?

> `optional` **validTokenIds?**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:47](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L47)

The tokens to create. Newly created tokens will be sent to the "Mint" address. Must have necessary permissions in future transactions to update. However, no restrictions in this genesis Msg. Only used if collection has "Standard" balance type.

#### Inherited from

[`iMsgCreateCollection`](/sdk/reference/interfaces/i-msg-create-collection).[`validTokenIds`](/sdk/reference/interfaces/i-msg-create-collection#validtokenids)
