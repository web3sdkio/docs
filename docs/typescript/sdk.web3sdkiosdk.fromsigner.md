---
slug: /sdk.web3sdkiosdk.fromsigner
title: Web3sdkioSDK.fromSigner() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Web3sdkioSDK.fromSigner() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get an instance of the web3sdkio SDK based on an existing ethers signer

## Example

```javascript
// get a signer from somewhere (createRandom is being used purely for example purposes)
const signer = ethers.Wallet.createRandom();

// get an instance of the SDK with the signer already setup
const sdk = Web3sdkioSDK.fromSigner(signer, "mainnet");
```

**Signature:**

```typescript
static fromSigner(signer: Signer, network?: ChainOrRpc, options?: SDKOptions, storage?: Web3sdkioStorage): Web3sdkioSDK;
```

## Parameters

| Parameter | Type                              | Description                                                                                                                       |
| --------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| signer    | Signer                            | a ethers Signer to be used for transactions                                                                                       |
| network   | ChainOrRpc                        | <i>(Optional)</i> the network (chain) to connect to (e.g. "mainnet", "rinkeby", "polygon", "mumbai"...) or a fully formed RPC url |
| options   | [SDKOptions](./sdk.sdkoptions.md) | <i>(Optional)</i> the SDK options to use                                                                                          |
| storage   | Web3sdkioStorage                   | <i>(Optional)</i> optional storage implementation to use                                                                          |

**Returns:**

[Web3sdkioSDK](./sdk.web3sdkiosdk.md)

an instance of the SDK
