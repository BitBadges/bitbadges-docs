---
description: "T extends NumberType"
---

# Interface: iMsgExecuteUniversalUpdateCollection\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/interfaces.ts:41](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/interfaces.ts#L41)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### executor

> **executor**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/interfaces.ts:43](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/interfaces.ts#L43)

Address executing the message (must be approved or admin).

***

### managerSplitterAddress

> **managerSplitterAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/interfaces.ts:45](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/interfaces.ts#L45)

Address of the manager splitter to execute through.

***

### universalUpdateCollectionMsg

> **universalUpdateCollectionMsg**: [`iMsgUniversalUpdateCollection`](/sdk/reference/interfaces/i-msg-universal-update-collection)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/interfaces.ts:47](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/managersplitter/interfaces.ts#L47)

The UniversalUpdateCollection message to execute.
