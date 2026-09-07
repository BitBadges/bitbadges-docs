---
description: "Fallback status when the indexer hasn't enriched collection.standardsInfo.PaymentRequest (preview / freshly-broadcast collections). Returns 'expired' past the…"
---

# Function: derivePaymentRequestStatusFallback()

> **derivePaymentRequestStatusFallback**(`expirationMs`): [`PaymentRequestStatus`](/sdk/reference/type-aliases/payment-request-status)

Defined in: [packages/bitbadgesjs-sdk/src/core/payment-requests.ts:191](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/payment-requests.ts#L191)

Fallback status when the indexer hasn't enriched `collection.standardsInfo.PaymentRequest`
(preview / freshly-broadcast collections). Returns 'expired' past the deadline, 'pending'
otherwise — we don't try to derive 'paid'/'denied' from trackers here; that's the indexer's job.

## Parameters

### expirationMs

`bigint`

## Returns

[`PaymentRequestStatus`](/sdk/reference/type-aliases/payment-request-status)
