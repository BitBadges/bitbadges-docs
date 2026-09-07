---
description: "The send manager precompile at 0x0000000000000000000000000000000000001003: one send method that moves native coins and alias denoms from a contract with all accounting in x/bank."
---

# Send Manager Precompile

The send manager precompile lets a Solidity contract send native Cosmos coins, including alias denoms such as `badgeslp:...`, without ERC20 wrapping. Address: `0x0000000000000000000000000000000000001003`. All accounting stays in `x/bank`.

## Example

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/ISendManagerPrecompile.sol";

contract TokenSender {
    ISendManagerPrecompile constant SENDMANAGER =
        ISendManagerPrecompile(0x0000000000000000000000000000000000001003);

    function sendCoins(
        string memory toAddress,
        string memory denom,
        uint256 amount
    ) external returns (bool) {
        string memory msgJson = string(abi.encodePacked(
            '{"to_address":"', toAddress,
            '","amount":[{"denom":"', denom,
            '","amount":"', _uintToString(amount), '"}]}'
        ));

        return SENDMANAGER.send(msgJson);
    }

    function _uintToString(uint256 value) internal pure returns (string memory) {
        if (value == 0) return "0";
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) { digits++; temp /= 10; }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }
}
```

From TypeScript with ethers.js:

```typescript
import { ethers } from "ethers";

const SENDMANAGER_ADDRESS = "0x0000000000000000000000000000000000001003";

const sendManagerABI = [
  "function send(string memory msgJson) external returns (bool success)"
];

const sendManager = new ethers.Contract(SENDMANAGER_ADDRESS, sendManagerABI, signer);

const msgJson = JSON.stringify({
  to_address: "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
  amount: [{ denom: "ubadge", amount: "1000000000" }]
});

const tx = await sendManager.send(msgJson);
await tx.wait();
```

## Interface

The ABI has exactly one method.

```solidity
interface ISendManagerPrecompile {
    /// @notice Send native Cosmos coins from the caller to a recipient
    /// @param msgJson JSON string matching MsgSendWithAliasRouting protobuf format
    /// @return success Whether the send succeeded
    function send(string memory msgJson) external returns (bool success);
}
```

## JSON Format

The JSON is a `MsgSendWithAliasRouting` from `x/sendmanager`. The Go side decodes it with `encoding/json`, so use the snake_case field names.

```json
{
  "to_address": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
  "amount": [
    {"denom": "ubadge", "amount": "1000000000"},
    {"denom": "badgeslp:64:utoken", "amount": "5"}
  ]
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `to_address` | string | yes | Recipient. A `bb1` bech32 address, or a `0x` address (converted to bech32 on the Go side) |
| `amount` | Coin[] | yes | Coins to send. `amount` values are integer strings in the base unit (`ubadge` has 9 decimals) |
| `from_address` | string | no | Ignored. Always overwritten with the caller (`msg.sender`) |

## Behavior

- `from_address` is set from `msg.sender` after unmarshal, so a contract can only spend its own balance.
- `ValidateBasic` runs before the send. Empty or invalid coins and addresses fail with code 1.
- Alias denoms route through the tokenization module; standard denoms go through `x/bank`. See [Send manager module](../modules/send-manager.md) and [Alias Denoms](../../token-standard/ibc/alias-denoms.md).
- A successful send emits a `precompile_send` event with `from`, `to_address`, and `amount` attributes.
- Amounts are in Cosmos precision (9 decimals for `BADGE`), not the EVM's 18. See [Developer Guide](developer-guide.md#decimals-9-on-the-cosmos-side-18-on-the-evm-side).

## Gas

| Component | Gas |
| --- | --- |
| `GasSendBase` | 30,000 |
| Fixed buffer added by `RequiredGas` | 150,000 |
| Total charged up front | 180,000 |
| `GasPerCoin` (per entry in `amount`, defined in the precompile for dynamic estimates) | 2,000 |

The base is deducted before the precompile runs; the bank transfer itself uses the remaining gas of the call.

## Error Codes

| Code | Name | Description |
| --- | --- | --- |
| 1 | `InvalidInput` | Invalid JSON, coins, or address |
| 2 | `SendFailed` | The send operation failed |
| 3 | `InsufficientBalance` | The caller does not hold enough of a denom (`ErrInsufficientFunds`) |
| 4 | `InternalError` | Internal error |
| 5 | `Unauthorized` | Unauthorized operation |

Errors revert with the text `precompile error [code=N]: message: details`.

## Related

- [Send manager module](../modules/send-manager.md)
- [Cosmos SDK Precompiles](cosmos-precompiles.md) (bank queries)
- [GAMM Precompile](gamm-precompile/README.md)
