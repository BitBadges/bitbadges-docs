---
description: "T extends NumberType"
---

# Interface: iMsgUpdateCollection\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:137](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L137)

## Extends

- `Omit`\<[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection)\<`T`\>, `"defaultBalances"`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### aliasPathsToAdd?

> `optional` **aliasPathsToAdd?**: [`iAliasPathAddObject`](/sdk/reference/interfaces/i-alias-path-add-object)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:80](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L80)

The alias (non-wrapping) paths to add.

#### Inherited from

`Omit.aliasPathsToAdd`

***

### collectionApprovals?

> `optional` **collectionApprovals?**: [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:65](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L65)

The new collection approved transfers. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Inherited from

`Omit.collectionApprovals`

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:113](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L113)

The ID of the collection to update.

#### Inherited from

`Omit.collectionId`

***

### collectionMetadata?

> `optional` **collectionMetadata?**: [`iCollectionMetadata`](/sdk/reference/interfaces/i-collection-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:56](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L56)

The new collection metadata. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Inherited from

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`collectionMetadata`](/sdk/reference/interfaces/i-msg-universal-update-collection#collectionmetadata)

***

### collectionPermissions?

> `optional` **collectionPermissions?**: [`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:50](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L50)

The new collection permissions. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Inherited from

`Omit.collectionPermissions`

***

### cosmosCoinWrapperPathsToAdd?

> `optional` **cosmosCoinWrapperPathsToAdd?**: [`iCosmosCoinWrapperPathAddObject`](/sdk/reference/interfaces/i-cosmos-coin-wrapper-path-add-object)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:77](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L77)

The IBC wrapper paths to add.

#### Inherited from

`Omit.cosmosCoinWrapperPathsToAdd`

***

### creator

> **creator**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:41](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L41)

The creator of the transaction.

#### Inherited from

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`creator`](/sdk/reference/interfaces/i-msg-universal-update-collection#creator)

***

### customData?

> `optional` **customData?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:62](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L62)

The new custom data. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Inherited from

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`customData`](/sdk/reference/interfaces/i-msg-universal-update-collection#customdata)

***

### invariants?

> `optional` **invariants?**: [`iInvariantsAddObject`](/sdk/reference/interfaces/i-invariants-add-object)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:83](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L83)

Collection-level invariants that cannot be broken. These are set upon genesis and cannot be modified. Addresses are generated by the keeper.

#### Inherited from

`Omit.invariants`

***

### isArchived?

> `optional` **isArchived?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:71](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L71)

The new is archived flag. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Inherited from

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`isArchived`](/sdk/reference/interfaces/i-msg-universal-update-collection#isarchived)

***

### manager?

> `optional` **manager?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:53](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L53)

The new manager. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Inherited from

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`manager`](/sdk/reference/interfaces/i-msg-universal-update-collection#manager)

***

### mintEscrowCoinsToTransfer?

> `optional` **mintEscrowCoinsToTransfer?**: [`iCosmosCoin`](/sdk/reference/interfaces/i-cosmos-coin)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:74](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L74)

The coins to mint to the transfer address. Only used if collection has "Non-Public" balance type.

#### Inherited from

`Omit.mintEscrowCoinsToTransfer`

***

### standards?

> `optional` **standards?**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:68](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L68)

The new standards. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg.

#### Inherited from

[`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection).[`standards`](/sdk/reference/interfaces/i-msg-universal-update-collection#standards)

***

### tokenMetadata?

> `optional` **tokenMetadata?**: [`iTokenMetadata`](/sdk/reference/interfaces/i-token-metadata)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:59](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L59)

The new token metadata. Must have the necessary permissions in future transactions to update. However, no restrictions in this genesis Msg. Note we take first-match only for token IDs, so do not define duplicates.

#### Inherited from

`Omit.tokenMetadata`

***

### updateCollectionApprovals?

> `optional` **updateCollectionApprovals?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:125](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L125)

Whether or not to update the collection approved transfers.

#### Inherited from

`Omit.updateCollectionApprovals`

***

### updateCollectionMetadata?

> `optional` **updateCollectionMetadata?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:119](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L119)

Whether or not to update the collection metadata.

#### Inherited from

`Omit.updateCollectionMetadata`

***

### updateCollectionPermissions?

> `optional` **updateCollectionPermissions?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L115)

Whether or not to update the collection permissions.

#### Inherited from

`Omit.updateCollectionPermissions`

***

### updateCustomData?

> `optional` **updateCustomData?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:123](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L123)

Whether or not to update the custom data.

#### Inherited from

`Omit.updateCustomData`

***

### updateIsArchived?

> `optional` **updateIsArchived?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:129](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L129)

Whether or not to update the is archived flag.

#### Inherited from

`Omit.updateIsArchived`

***

### updateManager?

> `optional` **updateManager?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:117](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L117)

Whether or not to update the manager.

#### Inherited from

`Omit.updateManager`

***

### updateStandards?

> `optional` **updateStandards?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:127](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L127)

Whether or not to update the standards.

#### Inherited from

`Omit.updateStandards`

***

### updateTokenMetadata?

> `optional` **updateTokenMetadata?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:121](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L121)

Whether or not to update the token metadata.

#### Inherited from

`Omit.updateTokenMetadata`

***

### updateValidTokenIds?

> `optional` **updateValidTokenIds?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:131](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L131)

Whether or not to update the valid token IDs.

#### Inherited from

`Omit.updateValidTokenIds`

***

### validTokenIds?

> `optional` **validTokenIds?**: [`iUintRange`](/sdk/reference/interfaces/i-uint-range)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts:47](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/interfaces.ts#L47)

The tokens to create. Newly created tokens will be sent to the "Mint" address. Must have necessary permissions in future transactions to update. However, no restrictions in this genesis Msg. Only used if collection has "Standard" balance type.

#### Inherited from

`Omit.validTokenIds`
