---
description: "Rules for the BitBadges EVM: which keys sign which transactions, address conversion, msg.sender inside a precompile, and 9 vs 18 decimals."
---

# Developer guide

This page covers the rules a developer must know when an application touches both the EVM and Cosmos SDK sides of BitBadges. Read it once before writing contracts or wallet code.

## Transaction signing

BitBadges accepts two kinds of transactions. Each needs a specific key type.

| Transaction type | Signing key type | Hash algorithm | Use case |
| --- | --- | --- | --- |
| `MsgEthereumTx` | `ethsecp256k1` (Ethereum-style) | Keccak256 | EVM contract calls, precompile calls |
| Standard Cosmos messages | `secp256k1` (Cosmos-style) | SHA256 | Native Cosmos SDK messages (`MsgDelegate`, `MsgTransferTokens`) |

### ETH wallets (`ethsecp256k1`)

Can sign `MsgEthereumTx`: direct EVM contract calls, precompile calls from Solidity, any Ethereum-compatible transaction.

Cannot sign standard Cosmos SDK messages (`MsgDelegate`, `MsgTransferTokens`, other native messages). The hash algorithm differs.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Works: an ETH wallet signs the MsgEthereumTx that runs this
import "./interfaces/ITokenizationPrecompile.sol";
import "./libraries/TokenizationJSONHelpers.sol";

contract EthWalletTransfer {
    ITokenizationPrecompile constant precompile =
        ITokenizationPrecompile(0x0000000000000000000000000000000000001001);

    function send(uint256 collectionId, address to, uint256 amount) external returns (bool) {
        address[] memory recipients = new address[](1);
        recipients[0] = to;

        // Build JSON using helper
        string memory tokenIdsJson = TokenizationJSONHelpers.uintRangeToJson(1, 1);
        string memory ownershipJson = TokenizationJSONHelpers.uintRangeToJson(1, TokenizationJSONHelpers.FOREVER);
        string memory transferJson = TokenizationJSONHelpers.transferTokensJSON(
            collectionId, recipients, amount, tokenIdsJson, ownershipJson
        );

        return precompile.transferTokens(transferJson);
    }
}
```

### Cosmos wallets (`secp256k1`)

Can sign standard Cosmos SDK messages: `MsgDelegate`, `MsgTransferTokens`, `MsgCreateCollection`, all native messages.

Cannot sign `MsgEthereumTx`, so cannot call EVM contracts or precompiles directly. The signature format differs.

```go
// Works: a Cosmos wallet signs a standard message
msg := &tokenizationtypes.MsgTransferTokens{
    Creator:      cosmosAddress,
    CollectionId: collectionId,
    Transfers:    transfers,
}
```

### Cross-compatibility

Not supported: ETH wallets signing standard Cosmos messages, or Cosmos wallets signing `MsgEthereumTx`. The reasons are different hash algorithms (Keccak256 vs SHA256), different signature formats, and an ante handler that routes by transaction type.

The workaround is to pick the surface that matches the key: ETH wallets reach Cosmos SDK modules through precompiles from Solidity; Cosmos wallets use native messages for direct module access. The BitBadges API and frontend add a separate path for ETH wallets to sign Cosmos messages; see [Sign in with BitBadges](../../api/sign-in/README.md).

### Key types side by side

| Key type | Algorithm | Hash function | Address format | Signs `MsgEthereumTx` | Signs Cosmos messages |
| --- | --- | --- | --- | --- | --- |
| `ethsecp256k1` | secp256k1 | Keccak256 | Both (EVM hex + Cosmos bech32) | Yes | No (different hash) |
| `secp256k1` (Cosmos) | secp256k1 | SHA256 | Cosmos bech32 only | No (different format) | Yes |

### Create accounts

```bash
# EVM-compatible account (ethsecp256k1 key)
bb keys add my-eth-account --keyring-backend test --algo eth_secp256k1
```

```bash
# Cosmos-only account (standard secp256k1 key, the default)
bb keys add my-cosmos-account --keyring-backend test
```

The chain registers both key types in its codec, so the ante handler verifies signatures from either:

```go
// ethsecp256k1 keys are registered in the codec
registry.RegisterImplementations((*cryptotypes.PubKey)(nil), &ethsecp256k1.PubKey{})
registry.RegisterImplementations((*cryptotypes.PrivKey)(nil), &ethsecp256k1.PrivKey{})
```

## Address conversion

An Ethereum address (20 bytes) and a Cosmos bech32 address are two encodings of the same account bytes when the key is `ethsecp256k1`.

| Format | Example | Use case |
| --- | --- | --- |
| EVM (hex) | `0x0bc63cfe31d5218eb414b142c799e20964a54a1a` | Solidity contracts, EVM transactions |
| Cosmos (bech32) | `bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d` | Cosmos SDK messages, queries |

EVM to Cosmos, as done inside precompile code:

```go
// In precompile code
caller := contract.Caller()  // common.Address (20 bytes, e.g. 0x0bc63cfe31d5218eb414b142c799e20964a54a1a)
cosmosAddr := sdk.AccAddress(caller.Bytes()).String()  // Bech32 (e.g. bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d)
```

Cosmos to EVM:

```go
cosmosAddr, _ := sdk.AccAddressFromBech32("bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d")
evmAddr := common.BytesToAddress(cosmosAddr.Bytes())  // 0x0bc63cfe31d5218eb414b142c799e20964a54a1a
```

Rules:

- Same 20 bytes, different encoding. EVM uses a `0x` hex prefix; Cosmos uses bech32 with the `bb` prefix.
- Precompiles convert for you. Address fields in precompile JSON accept either form; the Go side normalizes to bech32.
- Cosmos SDK validates bech32; the EVM validates hex. Both name the same account.

Concept page: [Accounts](../../token-standard/concepts/accounts.md).

## Precompile caller

A precompile identifies the caller with `contract.Caller()`. This is the EVM `msg.sender` of the call into the precompile, converted to a Cosmos address:

```go
// In precompile code
func (p Precompile) GetCallerAddress(contract *vm.Contract) (string, error) {
    caller := contract.Caller()  // EVM msg.sender
    return sdk.AccAddress(caller.Bytes()).String(), nil  // Converted to Cosmos address
}
```

### The caller is the immediate caller

When a contract calls a precompile, the precompile sees the contract, not the user who sent the transaction.

```text
User (0xAlice) -> Contract A -> Precompile
                  ^
                  contract.Caller() = Contract A's address, NOT 0xAlice
```

The `creator` on every message is the contract address. Tokens move from the contract's balance. The original user address is not available to the precompile, so authorization lives in the contract.

### No cross-contract delegation

```text
User -> Contract A -> Contract B -> Precompile
                                    ^
                                    contract.Caller() = Contract B
```

Contract A is invisible to the precompile.

### Authorization patterns

Contract-level authorization:

```solidity
import "./libraries/TokenizationJSONHelpers.sol";

contract MyContract {
    ITokenizationPrecompile precompile = ITokenizationPrecompile(0x0000000000000000000000000000000000001001);

    mapping(address => bool) public authorized;

    function transferTokens(
        uint256 collectionId,
        address to,
        uint256 amount
    ) external {
        require(authorized[msg.sender], "Not authorized");

        // Build JSON
        address[] memory recipients = new address[](1);
        recipients[0] = to;
        string memory tokenIdsJson = TokenizationJSONHelpers.uintRangeToJson(1, 1);
        string memory ownershipJson = TokenizationJSONHelpers.uintRangeToJson(1, TokenizationJSONHelpers.FOREVER);
        string memory transferJson = TokenizationJSONHelpers.transferTokensJSON(
            collectionId, recipients, amount, tokenIdsJson, ownershipJson
        );

        // Contract is authorized, so precompile call succeeds
        precompile.transferTokens(transferJson);
    }
}
```

Move tokens from a user instead of the contract:

```solidity
// The precompile always uses contract.Caller() as the creator.
// For transfers, tokens move from the contract's balance by default.
// To move tokens from a specific user, that user grants the contract an
// outgoing approval, and the contract sets "from" to the user in the transfer JSON.
function transferFromUser(uint256 collectionId, address from, address to, uint256 amount) external returns (bool) {
    string memory transferJson = string(abi.encodePacked(
        '{"collectionId":"', TokenizationJSONHelpers.uintToString(collectionId),
        '","transfers":[{"from":"', TokenizationJSONHelpers.addressToString(from),
        '","toAddresses":["', TokenizationJSONHelpers.addressToString(to),
        '"],"balances":[{"amount":"', TokenizationJSONHelpers.uintToString(amount),
        '","tokenIds":', TokenizationJSONHelpers.uintRangeToJson(1, 1),
        ',"ownershipTimes":', TokenizationJSONHelpers.uintRangeToJson(1, TokenizationJSONHelpers.FOREVER),
        '}]}]}'
    ));
    return precompile.transferTokens(transferJson);
}
```

Approval system:

```json
{
  "@type": "/tokenization.MsgSetOutgoingApproval",
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionId": "1",
  "approval": {
    "toListId": "All",
    "initiatedByListId": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    "transferTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "tokenIds": [{ "start": "1", "end": "1" }],
    "ownershipTimes": [{ "start": "1", "end": "18446744073709551615" }],
    "approvalId": "contract-may-spend",
    "version": "0",
    "approvalCriteria": {}
  }
}
```

The user (alice) signs this once. The contract at `0x5FbDB2315678afecb367f032d93F642f64180aa3` is then the initiator of every later transfer, and the precompile sees the contract as caller while the outgoing approval covers alice's tokens.

See [Transferability](../../token-standard/concepts/transferability.md) for how outgoing approvals authorize a third party.

### Security notes

- The precompile always uses `contract.Caller()`. A malicious contract cannot spoof it.
- Do the authorization check in the contract before the precompile call. Do not expect the precompile to see the original user.
- In multi-contract flows, intermediate contracts are invisible. Design authorization with that in mind.

## Decimals: 9 on the Cosmos side, 18 on the EVM side

| Unit | Decimals | Value | Context |
| --- | --- | --- | --- |
| `BADGE` | 9 (Cosmos) / 18 (EVM) | 1 BADGE | Display unit |
| `ubadge` | 9 | 1 * 10^9 | Base unit in Cosmos SDK (`x/bank`) |
| `abadge` | 0 | 1 * 10^0 | Base unit in the EVM (smallest unit) |

- 1 BADGE = 1 * 10^9 `ubadge` (Cosmos)
- 1 BADGE = 1 * 10^18 `abadge` (EVM)
- 1 `ubadge` = 1 * 10^9 `abadge`

The `precisebank` module sits between `x/bank` (9 decimals) and the EVM (18 decimals). It converts amounts in both directions. The EVM keeper is wired to `precisebank`, not raw `x/bank`. You still write amounts in the precision of the side you are on.

In Solidity:

```solidity
// Correct: 18 decimal precision in the EVM
uint256 oneBadge = 1 * 10**18;  // 1 BADGE in EVM
uint256 halfBadge = 5 * 10**17; // 0.5 BADGE in EVM

// Wrong: 9 decimals in the EVM
uint256 wrongAmount = 1 * 10**9;  // This is 0.000000001 BADGE in EVM!
```

In Cosmos SDK messages and queries:

```typescript
// Correct: 9 decimal precision on the Cosmos side
const coin = {
    denom: 'ubadge',
    amount: '1000000000', // 1 BADGE in Cosmos (1 * 10^9)
};

// Wrong: 18 decimals on the Cosmos side
const wrongCoin = {
    denom: 'ubadge',
    amount: '1000000000000000000', // This is 1 * 10^9 BADGE in Cosmos!
};
```

Conversions the module does for you:

- EVM to Cosmos: 18 decimals to 9 decimals when a contract reaches a Cosmos module
- Cosmos to EVM: 9 decimals to 18 decimals when a Cosmos operation touches the EVM

### Common mistakes

Mixing precisions:

```solidity
// Wrong: Cosmos precision in the EVM
uint256 amount = 1 * 10**9;  // This is 0.000000001 BADGE in EVM!

// Correct: EVM precision
uint256 amount = 1 * 10**18;  // 1 BADGE in EVM
```

Assuming a 1:1 conversion:

```typescript
// Wrong: these are NOT equal
const cosmosAmount = '1000000000'; // 1 BADGE in Cosmos
const evmAmount = '1000000000'; // 0.000000001 BADGE in EVM!

// Correct: convert
const cosmosAmount = '1000000000'; // 1 BADGE in Cosmos
const evmAmount = '1000000000000000000'; // 1 BADGE in EVM
```

Forgetting the context: Solidity is always 18 decimals; Cosmos messages are always 9. Token balances inside collections (the tokenization module) are plain integers with no implied decimals; this section is about the native `BADGE` coin only.

## EVM query challenges and invariants

An approval or a collection invariant can gate on a read-only call to an EVM contract. Use this to check DeFi positions, compliance registries, or cross-chain state before a transfer goes through.

```solidity
// Gate transfers to users holding 100+ units of a 6-decimal ERC20 (for example a USDC-style token at 0x5FbDB2315678afecb367f032d93F642f64180aa3)
string memory evmQueryChallenge = string(abi.encodePacked(
    '{"contractAddress":"0x5FbDB2315678afecb367f032d93F642f64180aa3",',
    '"calldata":"70a08231000000000000000000000000$sender",',  // balanceOf(address)
    '"expectedResult":"0000000000000000000000000000000000000000000000000000000005f5e100",',  // 100 * 10^6
    '"comparisonOperator":"gte",',
    '"gasLimit":"100000"}'
));
```

Full field reference: [EVM query challenges](../../token-standard/approval-criteria/evm-query-challenges.md) and [Invariants](../../token-standard/approval-criteria/invariants.md).

## Best practices

1. Pick the key type for the job. `ethsecp256k1` for EVM contracts, precompile calls, and Ethereum tooling. Standard `secp256k1` for native-only Cosmos use.
2. Use hex addresses in Solidity and bech32 in Cosmos SDK code. Precompiles convert.
3. Authorize in the contract. Do not rely on the precompile seeing the original user. Use approvals when a contract acts for a user.
4. Use `MsgEthereumTx` for contract and precompile calls. Use native Cosmos messages for direct module access, cheaper gas on simple operations, and Cosmos tooling.
5. Test with both key types if your app supports both. Verify address conversions. Test authorization through contract intermediaries.

| Aspect | ETH wallets (`ethsecp256k1`) | Cosmos wallets (`secp256k1`) |
| --- | --- | --- |
| Signs `MsgEthereumTx` | Yes | No |
| Signs Cosmos messages | No | Yes |
| Address format | Both (hex + bech32) | bech32 only |
| Precompile access | Via Solidity contracts | No direct access |
| Native SDK access | Via precompiles only | Direct |

## Related

- [Tokenization precompile](tokenization-precompile/README.md)
- [Architecture](architecture.md)
- [Security](tokenization-precompile/security.md)
- [Network](../README.md)
