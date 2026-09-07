---
description: "PaymentRequest is the inverse of Bounty: an agent (or any address) creates the collection requesting payment, the targeted payer approves and pays from their…"
---

# Function: validatePaymentRequestCollection()

> **validatePaymentRequestCollection**(`collection`): [`PaymentRequestValidationResult`](/sdk/reference/interfaces/payment-request-validation-result)

Defined in: [packages/bitbadgesjs-sdk/src/core/payment-requests.ts:30](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/payment-requests.ts#L30)

PaymentRequest is the inverse of Bounty: an agent (or any address) creates
the collection requesting payment, the targeted payer approves and pays
from their own wallet in a single action — no escrow up front.

Approval shape (2 approvals):
  - pay: initiatedByListId scoped to payer; coinTransfer to recipient with
    overrideFromWithApproverAddress=false so the chain defaults the
    coin-transfer "from" to the initiator (the payer).
  - deny: initiatedByListId scoped to payer; no coinTransfers — just
    records the denial via the mint-to-burn token vehicle.

Both share `transferTimes: [{ start: 1, end: expirationMs }]`. After the
deadline neither can fire — expiration is implicit, no separate "expire"
approval needed (we don't have escrow to refund, so an expire branch
would be a no-op that just creates an on-chain marker).

NO mintEscrowCoinsToTransfer at the top level — that's the key
inversion vs. Bounty.

## Parameters

### collection

`Readonly`\<[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc)\<`bigint`\>\>

## Returns

[`PaymentRequestValidationResult`](/sdk/reference/interfaces/payment-request-validation-result)
