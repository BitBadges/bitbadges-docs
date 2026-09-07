---
description: "Build the deposit msg: a MsgTransferTokens with from=backingAddress, to=caller, prioritizing the deposit approval. The chain auto-routes the backing IBC coin…"
---

# Function: buildSmartTokenDepositMsg()

> **buildSmartTokenDepositMsg**(`args`): [`SmartTokenTransferMsg`](/sdk/reference/interfaces/smart-token-transfer-msg)

Defined in: [packages/bitbadgesjs-sdk/src/core/smart-tokens.ts:184](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/smart-tokens.ts#L184)

Build the deposit msg: a MsgTransferTokens with from=backingAddress,
to=caller, prioritizing the deposit approval. The chain auto-routes
the backing IBC coin from the caller's account into the backing
alias as part of executing the deposit approval — caller must have
the backing coin available.

## Parameters

### args

[`SmartTokenDepositArgs`](/sdk/reference/interfaces/smart-token-deposit-args)

## Returns

[`SmartTokenTransferMsg`](/sdk/reference/interfaces/smart-token-transfer-msg)
