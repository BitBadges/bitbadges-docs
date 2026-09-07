---
description: "Staking precompile ABI data (Cosmos EVM default at 0x800) These functions use typed ABI parameters (not JSON string encoding)"
---

# Variable: stakingPrecompileAbiData

> `const` **stakingPrecompileAbiData**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/abi-data.ts:832](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/abi-data.ts#L832)

Staking precompile ABI data (Cosmos EVM default at 0x800)
These functions use typed ABI parameters (not JSON string encoding)

Note: delegatorAddress must equal msg.sender (enforced by precompile)
Note: validatorAddress can be either Ethereum hex or Cosmos bech32 format
Note: Amounts are in abadge (18 decimals via precisebank)

## Type Declaration

### \_format

> `readonly` **\_format**: `"hh-sol-artifact-1"` = `'hh-sol-artifact-1'`

### abi

> `readonly` **abi**: readonly \[\{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"delegatorAddress"`; `type`: `"address"`; \}, \{ `internalType`: `"string"`; `name`: `"validatorAddress"`; `type`: `"string"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"delegate"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `"success"`; `type`: `"bool"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"delegatorAddress"`; `type`: `"address"`; \}, \{ `internalType`: `"string"`; `name`: `"validatorAddress"`; `type`: `"string"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"undelegate"`; `outputs`: readonly \[\{ `internalType`: `"int64"`; `name`: `"completionTime"`; `type`: `"int64"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"delegatorAddress"`; `type`: `"address"`; \}, \{ `internalType`: `"string"`; `name`: `"validatorSrcAddress"`; `type`: `"string"`; \}, \{ `internalType`: `"string"`; `name`: `"validatorDstAddress"`; `type`: `"string"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `name`: `"redelegate"`; `outputs`: readonly \[\{ `internalType`: `"int64"`; `name`: `"completionTime"`; `type`: `"int64"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"delegatorAddress"`; `type`: `"address"`; \}, \{ `internalType`: `"string"`; `name`: `"validatorAddress"`; `type`: `"string"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}, \{ `internalType`: `"int64"`; `name`: `"creationHeight"`; `type`: `"int64"`; \}\]; `name`: `"cancelUnbondingDelegation"`; `outputs`: readonly \[\{ `internalType`: `"bool"`; `name`: `"success"`; `type`: `"bool"`; \}\]; `stateMutability`: `"nonpayable"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"address"`; `name`: `"delegatorAddress"`; `type`: `"address"`; \}, \{ `internalType`: `"string"`; `name`: `"validatorAddress"`; `type`: `"string"`; \}\]; `name`: `"delegation"`; `outputs`: readonly \[\{ `internalType`: `"uint256"`; `name`: `"shares"`; `type`: `"uint256"`; \}, \{ `components`: readonly \[\{ `internalType`: `"string"`; `name`: `"denom"`; `type`: `"string"`; \}, \{ `internalType`: `"uint256"`; `name`: `"amount"`; `type`: `"uint256"`; \}\]; `internalType`: `"tuple"`; `name`: `"balance"`; `type`: `"tuple"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}, \{ `inputs`: readonly \[\{ `internalType`: `"string"`; `name`: `"validatorAddress"`; `type`: `"string"`; \}\]; `name`: `"validator"`; `outputs`: readonly \[\{ `components`: readonly \[\{ `internalType`: `"string"`; `name`: `"operatorAddress"`; `type`: `"string"`; \}, \{ `internalType`: `"string"`; `name`: `"consensusPubkey"`; `type`: `"string"`; \}, \{ `internalType`: `"bool"`; `name`: `"jailed"`; `type`: `"bool"`; \}, \{ `internalType`: `"uint8"`; `name`: `"status"`; `type`: `"uint8"`; \}, \{ `internalType`: `"uint256"`; `name`: `"tokens"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"delegatorShares"`; `type`: `"uint256"`; \}, \{ `internalType`: `"string"`; `name`: `"description"`; `type`: `"string"`; \}, \{ `internalType`: `"int64"`; `name`: `"unbondingHeight"`; `type`: `"int64"`; \}, \{ `internalType`: `"int64"`; `name`: `"unbondingTime"`; `type`: `"int64"`; \}, \{ `internalType`: `"uint256"`; `name`: `"commission"`; `type`: `"uint256"`; \}, \{ `internalType`: `"uint256"`; `name`: `"minSelfDelegation"`; `type`: `"uint256"`; \}\]; `internalType`: `"tuple"`; `name`: `"validator"`; `type`: `"tuple"`; \}\]; `stateMutability`: `"view"`; `type`: `"function"`; \}\]

### contractName

> `readonly` **contractName**: `"IStakingPrecompile"` = `'IStakingPrecompile'`

### sourceName

> `readonly` **sourceName**: `"cosmos/evm/precompiles/staking/StakingI.sol"` = `'cosmos/evm/precompiles/staking/StakingI.sol'`
