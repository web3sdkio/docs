---
slug: /sdk.web3sdkiosdk.fromwallet
title: Web3sdkioSDK.fromWallet() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Web3sdkioSDK.fromWallet() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Get an instance of the web3sdkio SDK based on an AbstractWallet

## Example

```javascript
import { Web3sdkioSDK } from "@web3sdkio/sdk";

const wallet = new AbstractWalletImplementation();
const sdk = await Web3sdkioSDK.fromWallet(wallet, "mainnet");
```

**Signature:**

```typescript
static fromWallet(wallet: AbstractWallet, network: ChainOrRpc, options?: SDKOptions, storage?: Web3sdkioStorage): Promise<Web3sdkioSDK>;
```

## Parameters

| Parameter | Type                              | Description                                                                                                     |
| --------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| wallet    | AbstractWallet                    | the implementation of the AbstractWallet class to use for signing                                               |
| network   | ChainOrRpc                        | the network (chain) to connect to (e.g. "mainnet", "rinkeby", "polygon", "mumbai"...) or a fully formed RPC url |
| options   | [SDKOptions](./sdk.sdkoptions.md) | <i>(Optional)</i> the SDK options to use                                                                        |
| storage   | Web3sdkioStorage                   | <i>(Optional)</i> optional storage implementation to use                                                        |

**Returns:**

Promise&lt;[Web3sdkioSDK](./sdk.web3sdkiosdk.md)&gt;

an instance of the SDK
