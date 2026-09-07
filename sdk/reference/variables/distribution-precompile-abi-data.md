---
description: "Distribution precompile ABI data (Cosmos EVM default at 0x801) These functions use typed ABI parameters (not JSON string encoding)"
---

# Variable: distributionPrecompileAbiData

> `const` **distributionPrecompileAbiData**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/abi-data.ts:940](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/abi-data.ts#L940)

Distribution precompile ABI data (Cosmos EVM default at 0x801)
These functions use typed ABI parameters (not JSON string encoding)

Note: delegatorAddress must equal msg.sender (enforced by precompile)

## Type Declaration

### \_format

> `readonly` **\_format**: `"hh-sol-artifact-1"` = `'hh-sol-artifact-1'`

### abi

> `readonly` **abi**: readonly \[\{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"delegatorAddress"`; `type`: `"address"`; \}, \{ `internalType`: `"uint32"`; `name`: `"maxRetrieve"`; `type`: `"uint32"`; \}\]; `name`: `"claimRewards"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `"success"`; `type`: `"bool"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"delegatorAddress"`; `type`: `"address"`; \}, \{ `internalType`: `"string"`; `name`: `"validatorAddress"`; `type`: `"string"`; \}\]; `name`: `"withdrawDelegatorRewards"`; `outputs`: readonly \[\{ `components`: readonly \[\{ `internalType`: `"string"`; `name`: `"denom"`; `type`: `"string"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `internalType`: `"tuple[]"`; `name`: `"amount"`; `type`: `"tuple[]"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"delegatorAddress"`; `type`: `"address"`; \}, \{ `internalType`: `"string"`; `name`: `"withdrawerAddress"`; `type`: `"string"`; \}\]; `name`: `"setWithdrawAddress"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `"success"`; `type`: `"bool"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"delegatorAddress"`; `type`: `"address"`; \}, \{ `internalType`: `"string"`; `name`: `"validatorAddress"`; `type`: `"string"`; \}\]; `name`: `"delegationRewards"`; `outputs`: readonly \[\{ `components`: readonly \[\{ `internalType`: `"string"`; `name`: `"denom"`; `type`: `"string"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `internalType`: `"tuple[]"`; `name`: `"rewards"`; `type`: `"tuple[]"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"delegatorAddress"`; `type`: `"address"`; \}\]; `name`: `"delegationTotalRewards"`; `outputs`: readonly \[\{ `components`: readonly \[\{ `internalType`: `"string"`; `name`: `"validatorAddress"`; `type`: `"string"`; \}, \{ `components`: readonly \[\{ `internalType`: `"string"`; `name`: `"denom"`; `type`: `"string"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `internalType`: `"tuple[]"`; `name`: `"reward"`; `type`: `"tuple[]"`; \}\]; `internalType`: `"tuple[]"`; `name`: `"rewards"`; `type`: `"tuple[]"`; \}, \{ `components`: readonly \[\{ `internalType`: `"string"`; `name`: `"denom"`; `type`: `"string"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `internalType`: `"tuple[]"`; `name`: `"total"`; `type`: `"tuple[]"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}\]

### contractName

> `readonly` **contractName**: `"IDistributionPrecompile"` = `'IDistributionPrecompile'`

### sourceName

> `readonly` **sourceName**: `"cosmos/evm/precompiles/distribution/DistributionI.sol"` = `'cosmos/evm/precompiles/distribution/DistributionI.sol'`
