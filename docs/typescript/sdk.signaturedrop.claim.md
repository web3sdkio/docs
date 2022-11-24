---
slug: /sdk.signaturedrop.claim
title: SignatureDrop.claim() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## SignatureDrop.claim() method

Claim NFTs to the connected wallet.

**Signature:**

```typescript
claim(quantity: BigNumberish, options?: ClaimOptions): Promise<TransactionResultWithId<NFT>[]>;
```

## Parameters

| Parameter | Type                                  | Description       |
| --------- | ------------------------------------- | ----------------- |
| quantity  | BigNumberish                          |                   |
| options   | [ClaimOptions](./sdk.claimoptions.md) | <i>(Optional)</i> |

**Returns:**

Promise&lt;[TransactionResultWithId](./sdk.transactionresultwithid.md)&lt;[NFT](./sdk.nft.md)&gt;\[\]&gt;

- an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata

## Remarks

See [NFTDrop.claimTo()](./sdk.nftdrop.claimto.md)