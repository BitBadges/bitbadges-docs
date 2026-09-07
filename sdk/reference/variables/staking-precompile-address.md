---
description: "Staking precompile contract address (Cosmos EVM default) Enables staking operations (delegate, undelegate, redelegate) from EVM Address…"
---

# Variable: STAKING\_PRECOMPILE\_ADDRESS

> `const` **STAKING\_PRECOMPILE\_ADDRESS**: `"0x0000000000000000000000000000000000000800"` = `'0x0000000000000000000000000000000000000800'`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/abi.ts:52](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/abi.ts#L52)

Staking precompile contract address (Cosmos EVM default)
Enables staking operations (delegate, undelegate, redelegate) from EVM
Address: 0x0000000000000000000000000000000000000800
Note: Uses typed ABI parameters (not JSON string encoding)
      delegatorAddress must equal msg.sender (enforced by precompile)
      validatorAddress can be either Ethereum hex or Cosmos bech32 format
      Amounts are in abadge (18 decimals via precisebank)
