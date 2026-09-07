---
description: "Split a PaymentRequest collection's 2 approvals into pay (has coinTransfer) and deny (no coinTransfer, matched by transferTimes window). Returns null if the…"
---

# Function: extractPaymentRequestDetails()

> **extractPaymentRequestDetails**(`approvals`): [`PaymentRequestDetails`](/sdk/reference/interfaces/payment-request-details) \| `null`

Defined in: [packages/bitbadgesjs-sdk/src/core/payment-requests.ts:162](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/payment-requests.ts#L162)

Split a PaymentRequest collection's 2 approvals into pay (has coinTransfer)
and deny (no coinTransfer, matched by transferTimes window). Returns null
if the shape doesn't match — caller should treat that as a non-conformant
collection (same outcome as `validatePaymentRequestCollection` failing).

## Parameters

### approvals

readonly [`iCollectionApproval`](/sdk/reference/interfaces/i-collection-approval)\<`bigint`\>[]

## Returns

[`PaymentRequestDetails`](/sdk/reference/interfaces/payment-request-details) \| `null`
