---
description: "Build the withdraw msg: a MsgTransferTokens with from=caller, to=backingAddress, prioritizing the withdraw approval. The chain auto-routes the backing IBC coin…"
---

# Function: buildSmartTokenWithdrawMsg()

> **buildSmartTokenWithdrawMsg**(`args`): [`SmartTokenTransferMsg`](/sdk/reference/interfaces/smart-token-transfer-msg)

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:237](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L237)

Build the withdraw msg: a MsgTransferTokens with from=caller,
to=backingAddress, prioritizing the withdraw approval. The chain
auto-routes the backing IBC coin out of the backing alias into the
caller's account.

## Parameters

### args

[`SmartTokenWithdrawArgs`](/sdk/reference/interfaces/smart-token-withdraw-args)

## Returns

[`SmartTokenTransferMsg`](/sdk/reference/interfaces/smart-token-transfer-msg)
