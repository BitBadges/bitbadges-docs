---
description: "Public EVM JSON-RPC endpoints for BitBadges, supported methods, ethers.js, Hardhat and Foundry config, and running your own JSON-RPC node."
---

# EVM RPC Endpoints

BitBadges exposes Ethereum-compatible JSON-RPC endpoints, so MetaMask, ethers.js, web3.js, Hardhat, and Foundry work unchanged. This page lists the URLs and the node settings behind them.

```typescript
import { ethers } from "ethers";

// Connect to BitBadges mainnet EVM RPC
const provider = new ethers.JsonRpcProvider("https://evm-rpc.bitbadges.io");

// Get the current block number
const blockNumber = await provider.getBlockNumber();
console.log("Current block:", blockNumber);

// Get balance of an address
const balance = await provider.getBalance("0x0bc63cfe31d5218eb414b142c799e20964a54a1a");
console.log("Balance:", ethers.formatEther(balance), "BADGE");
```

## Endpoints

| Network | Type | URL | Use for |
| --- | --- | --- | --- |
| Mainnet | EVM JSON-RPC | `https://evm-rpc.bitbadges.io` | MetaMask, Hardhat, ethers.js (chain ID `50024`) |
| Mainnet | Cosmos RPC | `https://rpc.bitbadges.io` | Cosmos SDK queries and broadcasts |
| Mainnet | Cosmos REST/LCD | `https://lcd.bitbadges.io` | REST queries |
| Testnet | EVM JSON-RPC | `https://evm-rpc-testnet.bitbadges.io` | Chain ID `50025`. Offline as of September 2026 |
| Testnet | Cosmos RPC | `https://rpc-testnet.bitbadges.io` | Offline |
| Testnet | Cosmos REST/LCD | `https://lcd-testnet.bitbadges.io` | Offline |

EVM tools use the `evm-rpc*.bitbadges.io` URLs. Cosmos tools (cosmjs, LCD queries, `bb`) use `rpc*.bitbadges.io` or `lcd*.bitbadges.io`. Mixing them up is the most common connection failure. Testnet status: [Testnet](../testnet.md).

web3.js works the same way:

```javascript
// Using web3.js
const Web3 = require('web3');
const web3 = new Web3('https://evm-rpc.bitbadges.io');

// Get the current block number
const blockNumber = await web3.eth.getBlockNumber();
console.log("Current block:", blockNumber);
```

## MetaMask

Settings > Networks > Add Network:

| Field | Mainnet | Testnet |
| --- | --- | --- |
| Network name | BitBadges Mainnet | BitBadges Testnet |
| RPC URL | `https://evm-rpc.bitbadges.io` | `https://evm-rpc-testnet.bitbadges.io` |
| Chain ID | `50024` | `50025` |
| Currency symbol | `BADGE` | `BADGE` |
| Block explorer URL | `https://explorer.bitbadges.io` (optional) | none |

## Supported JSON-RPC Methods

The endpoints serve the standard `eth`, `net`, and `web3` namespaces, including:

| Group | Methods |
| --- | --- |
| Account | `eth_accounts`, `eth_getBalance`, `eth_getTransactionCount` |
| Block | `eth_blockNumber`, `eth_getBlockByNumber`, `eth_getBlockByHash` |
| Transaction | `eth_sendTransaction`, `eth_sendRawTransaction`, `eth_getTransactionByHash`, `eth_getTransactionReceipt` |
| Contract | `eth_call`, `eth_estimateGas` |
| Event | `eth_getLogs`, `eth_newFilter`, `eth_newBlockFilter`, `eth_newPendingTransactionFilter` |
| State | `eth_getCode`, `eth_getStorageAt` |
| Network | `eth_chainId`, `net_version`, `net_listening` |
| Web3 | `web3_clientVersion`, `web3_sha3` |

## Deploy a Contract

```typescript
import { ethers } from "ethers";
import * as fs from "fs";

async function deploy() {
  // Connect to BitBadges mainnet EVM RPC
  const provider = new ethers.JsonRpcProvider("https://evm-rpc.bitbadges.io");

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

  // Deploy the Counter contract from the Hardhat artifact (no constructor args)
  const artifact = JSON.parse(
    fs.readFileSync("artifacts/contracts/Counter.sol/Counter.json", "utf8")
  );
  const contractFactory = new ethers.ContractFactory(
    artifact.abi,
    artifact.bytecode,
    wallet
  );

  const contract = await contractFactory.deploy();
  await contract.waitForDeployment();

  const address = await contract.getAddress();
  console.log("Contract deployed at:", address);
}
```

## Interact with a Contract

```typescript
import { ethers } from "ethers";

async function interactWithContract() {
  // Connect to BitBadges mainnet EVM RPC
  const provider = new ethers.JsonRpcProvider("https://evm-rpc.bitbadges.io");

  // Load contract
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Counter deployed above
  const counterAbi = [
    "function count() view returns (uint256)",
    "function increment()"
  ];
  const contract = new ethers.Contract(contractAddress, counterAbi, provider);

  // Read from contract
  const value = await contract.count();
  console.log("Value:", value);

  // Write to contract (requires signer)
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
  const contractWithSigner = contract.connect(signer);

  const tx = await contractWithSigner.increment();
  await tx.wait();
  console.log("Transaction confirmed:", tx.hash);
}
```

## Hardhat

```javascript
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    bitbadges: {
      url: "https://evm-rpc.bitbadges.io",
      chainId: 50024,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    bitbadgesTestnet: {
      url: "https://evm-rpc-testnet.bitbadges.io",
      chainId: 50025,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
};
```

## Foundry

```toml
[rpc_endpoints]
bitbadges = "https://evm-rpc.bitbadges.io"
bitbadgesTestnet = "https://evm-rpc-testnet.bitbadges.io"

[profile.default]
rpc_endpoints = ["bitbadges", "bitbadgesTestnet"]
```

## Rate Limits

The public endpoints may rate-limit to keep usage fair. For production traffic, run your own node, use a dedicated RPC provider, or cache and batch requests.

## Run Your Own JSON-RPC Node

Follow [Run a Node](../run-a-node.md) for the full node setup. The EVM-specific settings are in `app.toml`.

### Set the EVM Chain ID

{% hint style="warning" %}
The default `evm-chain-id` (`90123`) is the local-dev value. On mainnet or testnet it makes every MetaMask transaction fail. Set it before starting the node.
{% endhint %}

```toml
[evm]
# Set this to match your network's EVM chain ID
# Mainnet: 50024
# Testnet: 50025
# The default (90123) is the local-dev chain ID and causes MetaMask transaction failures on mainnet/testnet
evm-chain-id = 50024
```

`net_version` reports this value and EIP-155 signature verification uses it. If it does not match `eth_chainId`, wallets fail with an error like `incorrect chain-id; expected 90123, got 50024`. The "expected" value is whatever `evm-chain-id` is set to; `90123` is the local-dev default written by `bb init`.

### Enable JSON-RPC

```toml
[json-rpc]
enable = true
address = "0.0.0.0:8545"  # Use 127.0.0.1 for local only
ws-address = "0.0.0.0:8546"
api = ["eth", "net", "web3"]
enable-indexer = true
```

### Configuration Reference

| Option | Default | Description |
| --- | --- | --- |
| `enable` | `false` | Enable JSON-RPC server |
| `address` | `127.0.0.1:8545` | HTTP listen address |
| `ws-address` | `127.0.0.1:8546` | WebSocket address |
| `api` | `eth,net,web3` | Enabled namespaces |
| `enable-indexer` | `false` | Custom tx indexer |
| `evm-timeout` | `5s` | `eth_call` timeout |
| `gas-cap` | `25000000` | Gas limit for calls |
| `txfee-cap` | `1.0` | Max tx fee (BADGE) |
| `filter-cap` | `200` | Max active filters |
| `block-range-cap` | `10000` | Max block range for logs |
| `logs-cap` | `10000` | Max log results |
| `batch-request-limit` | `1000` | Max batch size |
| `batch-response-max-size` | `25000000` | Max response bytes |
| `http-timeout` | `30s` | HTTP timeout |
| `http-idle-timeout` | `2m0s` | HTTP idle timeout |
| `max-open-connections` | `0` | Max connections (0 = unlimited) |
| `allow-unprotected-txs` | `false` | Allow non-EIP155 txs |
| `ws-origins` | `127.0.0.1,localhost` | WebSocket allowed origins |

## Related

- [Setup](setup.md)
- [Developer Guide](developer-guide.md)
- [Network](../README.md)
- [Run a Node](../run-a-node.md)
