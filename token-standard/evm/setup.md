---
description: "Chain IDs, RPC ports, starting a local node with JSON-RPC, MetaMask config, a minimal contract, deploy script, frontend hook, and troubleshooting."
---

# Setup

This page sets up a development environment for building dApps against the BitBadges EVM. It covers the chain configuration, wallet setup, and a minimal project.

## Chain IDs

| Network | EVM chain ID | Status |
| --- | --- | --- |
| Local development | `90123` | Default when you run a node yourself |
| Testnet | `50025` | Registered in ethereum-lists/chains. Offline, see [Testnet](../network/testnet.md) |
| Mainnet | `50024` | Registered in ethereum-lists/chains |

The values come from `app/params/constants.go`:

```go
// EVMChainIDMainnet is the EVM chain ID for BitBadges mainnet
// Chain ID: 50024 (claimed in ethereum-lists/chains registry)
// This should match the chain_id in genesis under app_state.evm.params.chain_config.chain_id
EVMChainIDMainnet = "50024"

// EVMChainIDTestnet is the EVM chain ID for BitBadges testnet
// Chain ID: 50025 (claimed in ethereum-lists/chains registry)
// This should match the chain_id in genesis under app_state.evm.params.chain_config.chain_id
EVMChainIDTestnet = "50025"

EVMChainIDLocalDev = "90123" // Default for local development/testing
```

The chain ID in your genesis file (`app_state.evm.params.chain_config.chain_id`) must match this value.

## RPC interfaces

A node exposes two RPC interfaces:

| Interface | Port | Endpoint | Use |
| --- | --- | --- | --- |
| Tendermint RPC | 26657 | `http://localhost:26657` | Cosmos SDK queries and transactions |
| EVM JSON-RPC | 8545 | `http://localhost:8545` | Standard Ethereum JSON-RPC. Required for MetaMask, ethers.js, web3.js |

Public endpoints are listed on [EVM RPC endpoints](rpc-endpoints.md).

## Start a local node with EVM

The EVM module is always enabled in the chain binary. You only need to enable the JSON-RPC server to reach it with Ethereum tooling.

```bash
# From the bitbadgeschain repository root
bb start --json-rpc.enable --json-rpc.address 0.0.0.0:8545
```

Or use the startup script, which enables JSON-RPC on port 8545:

```bash
# From the bitbadgeschain repository root
./start-chain.sh start
```

## MetaMask

Settings > Networks > Add Network, then enter:

| Field | Local | Mainnet |
| --- | --- | --- |
| Network name | BitBadges Local | BitBadges Mainnet |
| RPC URL | `http://localhost:8545` | `https://evm-rpc.bitbadges.io` |
| Chain ID | `90123` | `50024` |
| Currency symbol | `BADGE` | `BADGE` |
| Block explorer | (leave blank) | `https://explorer.bitbadges.io` |

For testnet the values are `BitBadges Testnet`, `https://evm-rpc-testnet.bitbadges.io`, chain ID `50025`, symbol `BADGE`. Testnet is offline as of September 2026.

Use port 8545 (EVM JSON-RPC), not 26657 (Tendermint RPC).

### Fund a local account

After starting your local chain, fund your MetaMask account:

```bash
# Get your MetaMask address (0x... format)
# Then fund it using the chain's genesis or by transferring from a validator

# Option 1: Transfer from a validator account
bb tx bank send \
  $(bb keys show alice -a --keyring-backend test) \
  <your-metamask-address> \
  1000000000ubadge \
  --chain-id bitbadges \
  --keyring-backend test \
  --yes

# Option 2: Use the chain's genesis accounts if configured
```

## Minimal dApp

### Project structure

```text
my-dapp/
├── contracts/              # Solidity contracts
│   ├── MyContract.sol
│   └── interfaces/
│       └── ITokenizationPrecompile.sol
├── scripts/               # Deployment scripts
│   └── deploy.ts
├── app/                   # Frontend (Next.js, React, etc.)
│   └── page.tsx
└── package.json
```

### Contract template

A minimal contract that uses the tokenization precompile through the JSON helper library:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/ITokenizationPrecompile.sol";
import "./libraries/TokenizationJSONHelpers.sol";

contract MyTokenContract {
    // Precompile address
    ITokenizationPrecompile constant precompile =
        ITokenizationPrecompile(0x0000000000000000000000000000000000001001);

    uint256 public collectionId;

    constructor(uint256 _collectionId) {
        collectionId = _collectionId;
    }

    function transfer(
        address to,
        uint256 amount,
        uint256 tokenId
    ) external returns (bool) {
        address[] memory recipients = new address[](1);
        recipients[0] = to;

        string memory tokenIdsJson = TokenizationJSONHelpers.uintRangeToJson(tokenId, tokenId);
        string memory ownershipTimesJson = TokenizationJSONHelpers.uintRangeToJson(
            1, TokenizationJSONHelpers.FOREVER
        );

        return precompile.transferTokens(
            TokenizationJSONHelpers.transferTokensJSON(
                collectionId, recipients, amount, tokenIdsJson, ownershipTimesJson
            )
        );
    }

    function getBalance(address user, uint256 tokenId) external view returns (uint256) {
        string memory json = TokenizationJSONHelpers.getBalanceAmountJSON(
            collectionId, user, tokenId, block.timestamp * 1000
        );
        return precompile.getBalanceAmount(json);
    }
}
```

The `TokenizationTypes.UintRange` struct form of this contract still exists in `TokenizationHelpers.sol` for building structs, but every precompile method takes JSON. Never pass `type(uint256).max` as a range end; use `FOREVER`.

### Deploy script (ethers.js)

```typescript
import { ethers } from "ethers";
import * as fs from "fs";

async function deploy() {
  // Connect to EVM JSON-RPC
  const provider = new ethers.JsonRpcProvider("http://localhost:8545");

  // Get deployer wallet
  const privateKey = process.env.PRIVATE_KEY || "";
  if (!privateKey) {
    throw new Error("PRIVATE_KEY environment variable required");
  }

  const wallet = new ethers.Wallet(privateKey, provider);
  console.log("Deployer address:", wallet.address);

  // Check balance
  const balance = await provider.getBalance(wallet.address);
  console.log("Balance:", ethers.formatEther(balance), "BADGE");

  // Deploy contract
  const contractFactory = new ethers.ContractFactory(
    CONTRACT_ABI,
    CONTRACT_BYTECODE,
    wallet
  );

  const contract = await contractFactory.deploy(collectionId);
  await contract.waitForDeployment();

  const address = await contract.getAddress();
  console.log("Contract deployed at:", address);

  // Save deployment info
  fs.writeFileSync(
    "deployed.json",
    JSON.stringify({ address, abi: CONTRACT_ABI }, null, 2)
  );
}

deploy().catch(console.error);
```

### Frontend hook (React + ethers.js)

```typescript
import { ethers } from "ethers";
import { useState, useEffect } from "react";

export function useContract() {
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider(window.ethereum);
      setProvider(provider);

      // Load deployed contract
      const contractAddress = "0x..."; // Your deployed contract address
      const contract = new ethers.Contract(
        contractAddress,
        CONTRACT_ABI,
        await provider.getSigner()
      );
      setContract(contract);
    }
  }, []);

  const transfer = async (to: string, amount: bigint, tokenId: bigint) => {
    if (!contract) throw new Error("Contract not loaded");
    const tx = await contract.transfer(to, amount, tokenId);
    await tx.wait();
  };

  return { contract, provider, transfer };
}
```

## Helper library

`contracts/libraries/TokenizationHelpers.sol` builds Solidity structs and validates them:

- `UintRange` structs (single values, sequences, full ranges)
- `Balance`, `CollectionMetadata`, `TokenMetadata` structs
- Empty permission structures
- Range and balance validation
- Common patterns for ownership times and token IDs

```solidity
import "./libraries/TokenizationHelpers.sol";

contract MyContract {
    function example() external {
        // Create a single token ID range
        TokenizationTypes.UintRange memory tokenId =
            TokenizationHelpers.createSingleTokenIdRange(123);

        // Create a full ownership time range (1 to max uint64)
        TokenizationTypes.UintRange memory fullTime =
            TokenizationHelpers.createFullOwnershipTimeRange();

        // Create a token ID sequence (range from start to end)
        TokenizationTypes.UintRange memory sequence =
            TokenizationHelpers.createTokenIdSequence(1, 100);

        // Create a UintRange array from arrays
        uint256[] memory starts = new uint256[](2);
        uint256[] memory ends = new uint256[](2);
        starts[0] = 1; ends[0] = 10;
        starts[1] = 20; ends[1] = 30;
        TokenizationTypes.UintRange[] memory ranges =
            TokenizationHelpers.createUintRangeArray(starts, ends);
    }
}
```

See [TokenizationHelpers.sol](https://github.com/BitBadges/bitbadgeschain/blob/master/contracts/libraries/TokenizationHelpers.sol) for every helper. Convert structs to JSON with `TokenizationJSONHelpers` before calling the precompile.

## Contract patterns

### Simple transfer

```solidity
ITokenizationPrecompile constant precompile =
    ITokenizationPrecompile(0x0000000000000000000000000000000000001001);

function simpleTransfer(
    uint256 collectionId,
    address to,
    uint256 amount,
    uint256 tokenId
) external returns (bool) {
    address[] memory recipients = new address[](1);
    recipients[0] = to;

    string memory tokenIdsJson = TokenizationJSONHelpers.uintRangeToJson(tokenId, tokenId);
    string memory ownershipJson = TokenizationJSONHelpers.uintRangeToJson(
        1, TokenizationJSONHelpers.FOREVER
    );

    return precompile.transferTokens(
        TokenizationJSONHelpers.transferTokensJSON(
            collectionId, recipients, amount, tokenIdsJson, ownershipJson
        )
    );
}
```

### Batch transfer

```solidity
ITokenizationPrecompile constant precompile =
    ITokenizationPrecompile(0x0000000000000000000000000000000000001001);

function batchTransfer(
    uint256 collectionId,
    address[] calldata recipients,
    uint256[] calldata amounts,
    uint256 tokenId
) external returns (bool) {
    require(recipients.length == amounts.length, "Arrays length mismatch");

    string memory tokenIdsJson = TokenizationJSONHelpers.uintRangeToJson(tokenId, tokenId);
    string memory ownershipJson = TokenizationJSONHelpers.uintRangeToJson(
        1, TokenizationJSONHelpers.FOREVER
    );

    // Transfer to each recipient
    for (uint256 i = 0; i < recipients.length; i++) {
        address[] memory singleRecipient = new address[](1);
        singleRecipient[0] = recipients[i];

        precompile.transferTokens(
            TokenizationJSONHelpers.transferTokensJSON(
                collectionId, singleRecipient, amounts[i], tokenIdsJson, ownershipJson
            )
        );
    }

    return true;
}
```

For one atomic call instead of a loop, use `executeMultiple` (see [API](tokenization-precompile/api.md#executemultiple)).

### Time-limited transfer

```solidity
ITokenizationPrecompile constant precompile =
    ITokenizationPrecompile(0x0000000000000000000000000000000000001001);

function transferWithExpiration(
    uint256 collectionId,
    address to,
    uint256 amount,
    uint256 tokenId,
    uint256 expirationTime
) external returns (bool) {
    address[] memory recipients = new address[](1);
    recipients[0] = to;

    string memory ownershipJson = TokenizationJSONHelpers.uintRangeToJson(
        block.timestamp, expirationTime
    );
    string memory tokenIdsJson = TokenizationJSONHelpers.uintRangeToJson(tokenId, tokenId);

    return precompile.transferTokens(
        TokenizationJSONHelpers.transferTokensJSON(
            collectionId, recipients, amount, tokenIdsJson, ownershipJson
        )
    );
}
```

### Struct helpers with JSON

```solidity
import "./libraries/TokenizationHelpers.sol";
import "./libraries/TokenizationJSONHelpers.sol";

contract HelperExample {
    ITokenizationPrecompile constant precompile =
        ITokenizationPrecompile(0x0000000000000000000000000000000000001001);

    function transferWithHelpers(
        uint256 collectionId,
        address to,
        uint256 amount,
        uint256 tokenId
    ) external returns (bool) {
        address[] memory recipients = new address[](1);
        recipients[0] = to;

        // Build structs with the helper library, then serialize them
        TokenizationTypes.UintRange memory idRange =
            TokenizationHelpers.createSingleTokenIdRange(tokenId);
        TokenizationTypes.UintRange memory timeRange =
            TokenizationHelpers.createFullOwnershipTimeRange();

        string memory tokenIdsJson = TokenizationJSONHelpers.uintRangeToJson(idRange.start, idRange.end);
        string memory ownershipJson = TokenizationJSONHelpers.uintRangeToJson(timeRange.start, timeRange.end);

        return precompile.transferTokens(
            TokenizationJSONHelpers.transferTokensJSON(
                collectionId, recipients, amount, tokenIdsJson, ownershipJson
            )
        );
    }
}
```

### Dynamic store for compliance

```solidity
contract ComplianceToken {
    ITokenizationPrecompile constant precompile =
        ITokenizationPrecompile(0x0000000000000000000000000000000000001001);

    uint256 public kycRegistryId;
    uint256 public collectionId;

    function initialize(uint256 _collectionId) external {
        collectionId = _collectionId;

        // Create KYC registry (default: false = not KYC'd)
        kycRegistryId = precompile.createDynamicStore(
            TokenizationJSONHelpers.createDynamicStoreJSON(
                false,
                "ipfs://...", // URI
                ""            // customData
            )
        );
    }

    function setKYC(address user, bool status) external {
        precompile.setDynamicStoreValue(
            TokenizationJSONHelpers.setDynamicStoreValueJSON(kycRegistryId, user, status)
        );
        kycMirror[user] = status;
    }

    // Mirror of the on-chain store, kept in sync by setKYC. getDynamicStoreValue
    // returns protobuf bytes (see the API page), so a local mirror is the cheap
    // way to read the flag inside a contract.
    mapping(address => bool) private kycMirror;

    function isKYCd(address user) public view returns (bool) {
        return kycMirror[user];
    }

    function transfer(address to, uint256 amount, uint256 tokenId) external {
        require(isKYCd(msg.sender), "Sender not KYC'd");
        require(isKYCd(to), "Recipient not KYC'd");

        // Proceed with transfer...
    }
}
```

A cheaper alternative for gating is a [dynamic store challenge](../approval-criteria/dynamic-store-challenges.md) in the collection approvals, which the chain checks on every transfer without a contract call.

## Complete examples

- [counter-dapp](https://github.com/BitBadges/bitbadgeschain/tree/master/counter-dapp): a Solidity contract (`Counter.sol`), a TypeScript deploy script, a Next.js frontend with MetaMask, and setup instructions.
- [contracts/examples](https://github.com/BitBadges/bitbadgeschain/tree/master/contracts/examples): ERC-3643 style example contracts:
  1. `TwoFactorSecurityToken.sol`: security token with 2FA authentication
  2. `RealEstateSecurityToken.sol`: tokenized real estate with KYC/AML
  3. `CarbonCreditToken.sol`: carbon credits with vintage tracking
  4. `PrivateEquityToken.sol`: private equity fund tokens with lock-ups

Each example uses dynamic stores for compliance registries, time-bound ownership for lock-ups and expirations, and approval systems. The [examples README](https://github.com/BitBadges/bitbadgeschain/tree/master/contracts/examples/README.md) explains each contract.

## Troubleshooting

### Cannot connect to RPC

- Confirm the chain is running: `bb start --json-rpc.enable --json-rpc.address 0.0.0.0:8545`
- Check that JSON-RPC is enabled in `app.toml`
- Try both ports: `http://localhost:8545` (EVM) and `http://localhost:26657` (Tendermint)
- Confirm the chain is fully synced

### MetaMask cannot connect

- Use the correct chain ID: `90123` local, `50025` testnet, `50024` mainnet
- Use the EVM JSON-RPC port (`http://localhost:8545`), not 26657
- Confirm your local chain is running
- Check the MetaMask console for the exact error

### Transactions fail with "insufficient funds" or revert

- Fund the account with BADGE:
  ```bash
  bb tx bank send <validator> <your-address> 1000000000ubadge --keyring-backend test
  ```
- Check gas prices (adjust in MetaMask if needed)
- Confirm approvals are set for token transfers
- Read the contract logs for the precompile error message

### Contract deployment fails

- Confirm the deployer has enough balance for deployment gas
- Confirm the EVM JSON-RPC is enabled
- Match your Solidity version to the chain's supported version
- Read the deploy script logs for the exact error

## Related

- [Developer guide](developer-guide.md)
- [Tokenization precompile API](tokenization-precompile/api.md)
- [EVM RPC endpoints](rpc-endpoints.md)
- [Run a node](../network/run-a-node.md)
