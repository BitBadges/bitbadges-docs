---
description: "How the BitBadges EVM works: three custom precompiles that expose the tokenization, gamm, and send manager modules to Solidity contracts."
---

# EVM

BitBadges runs the cosmos/evm module, so Solidity contracts deploy and run on the chain. This section is for developers who want to reach the token standard, liquidity pools, or native coins from a contract.

```text
Solidity contract -> precompile (Go) -> Cosmos SDK module keeper -> chain state
```

A precompile is a fixed contract address that runs native Go instead of EVM bytecode. Calling it gives a contract direct access to a Cosmos SDK module, with type conversion, validation, and error handling done on the Go side.

## The Three BitBadges Precompiles

| Precompile | Address | Module | Use it for |
| --- | --- | --- | --- |
| [Tokenization](tokenization-precompile/README.md) | `0x0000000000000000000000000000000000001001` | `x/tokenization` | Collections, transfers, approvals, dynamic stores, address lists, votes |
| [GAMM](gamm-precompile/README.md) | `0x0000000000000000000000000000000000001002` | `x/gamm` | Join and exit liquidity pools, single and multi-hop swaps, swap with IBC transfer, pool queries |
| [Send manager](send-manager-precompile.md) | `0x0000000000000000000000000000000000001003` | `x/sendmanager` | Send native coins (including alias denoms such as `badgeslp:...`) from a contract without ERC20 wrapping |

All three take one `string calldata msgJson` argument per method. The JSON matches the protobuf JSON of the underlying Cosmos message. The caller (`msg.sender`) is set as the `creator` or `sender` on the Go side and cannot be spoofed. Addresses are the same on both sides: a `0x` address and its `bb1` bech32 form are the same 20 bytes.

The chain also ships the upstream [Cosmos SDK Precompiles](cosmos-precompiles.md) (staking, distribution, bank, governance, IBC, bech32, P256) at `0x0000000000000000000000000000000000000100` through `0x0000000000000000000000000000000000000807`.

## Pages

| Page | Read it when |
| --- | --- |
| [Solidity Quickstart](solidity-quickstart.md) | You want a working contract in five minutes. Constants, addresses, patterns, errors. |
| [Setup](setup.md) | You need chain IDs, RPC ports, MetaMask, a deploy script, and a frontend hook. |
| [Developer Guide](developer-guide.md) | You need the rules: who can sign what, address conversion, `msg.sender` in precompiles, 9 vs 18 decimals. |
| [Architecture](architecture.md) | You want the call path and the Go package layout. |
| [Tokenization Precompile](tokenization-precompile/README.md) | Overview, then [API](tokenization-precompile/api.md), [Gas](tokenization-precompile/gas.md), [Errors](tokenization-precompile/errors.md), [Security](tokenization-precompile/security.md). |
| [GAMM Precompile](gamm-precompile/README.md) | Overview, then [API](gamm-precompile/api.md) and [gotchas](gamm-precompile/gotchas.md). |
| [Send Manager Precompile](send-manager-precompile.md) | The `send` method. |
| [Cosmos SDK Precompiles](cosmos-precompiles.md) | Staking, distribution, governance, IBC, bank, bech32, P256, slashing, ICS02. |
| [EVM RPC Endpoints](rpc-endpoints.md) | Public JSON-RPC URLs, Hardhat and Foundry config, running your own JSON-RPC node. |

## Minimal Example

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/ITokenizationPrecompile.sol";
import "./libraries/TokenizationJSONHelpers.sol";

contract Example {
    ITokenizationPrecompile constant TOKENIZATION =
        ITokenizationPrecompile(0x0000000000000000000000000000000000001001);

    function balanceOf(uint256 collectionId, address user) external view returns (uint256) {
        string memory json = TokenizationJSONHelpers.getBalanceAmountJSON(
            collectionId, user, 1, block.timestamp * 1000
        );
        return TOKENIZATION.getBalanceAmount(json);
    }
}
```

The Solidity interfaces, helper libraries, and example contracts live in the chain repo under [`contracts/`](https://github.com/BitBadges/bitbadgeschain/tree/master/contracts). The [counter-dapp](https://github.com/BitBadges/bitbadgeschain/tree/master/counter-dapp) is an end-to-end example with a deploy script and a Next.js frontend.

## Related

- [Token Standard](../../token-standard/README.md)
- [Network endpoints](../README.md)
- [EVM Query Challenges](../../token-standard/approval-criteria/evm-query-challenges.md)
- [Cosmos EVM documentation](https://docs.cosmos.network/evm/v0.5.0/documentation/overview)
