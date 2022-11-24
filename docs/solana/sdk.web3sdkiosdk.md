---
slug: /sdk.web3sdkiosdk
title: Web3sdkioSDK class
hide_title: true
displayed_sidebar: solana
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Web3sdkioSDK class

The main entry-point for the web3sdkio Solana SDK.

**Signature:**

```typescript
export declare class Web3sdkioSDK
```

## Example

```jsx
import { Web3sdkioSDK } from "@web3sdkio/sdk/solana";

// Create SDK on specified network, and then pass a signer
const sdk = Web3sdkioSDK.fromNetwork("devnet");
// Signer can be a keypair or browser wallet adapter
sdk.wallet.connect(signer);
```

## Constructors

| Constructor                                                              | Modifiers | Description                                                     |
| ------------------------------------------------------------------------ | --------- | --------------------------------------------------------------- |
| [(constructor)(connection, storage)](./sdk.web3sdkiosdk._constructor_.md) |           | Constructs a new instance of the <code>Web3sdkioSDK</code> class |

## Properties

| Property                                  | Modifiers             | Type                                                | Description                                                               |
| ----------------------------------------- | --------------------- | --------------------------------------------------- | ------------------------------------------------------------------------- |
| [auth](./sdk.web3sdkiosdk.auth.md)         |                       | [WalletAuthenticator](./sdk.walletauthenticator.md) | Enable wallet-based server-side authentication                            |
| [deployer](./sdk.web3sdkiosdk.deployer.md) |                       | [Deployer](./sdk.deployer.md)                       | Deploy new programs                                                       |
| [network](./sdk.web3sdkiosdk.network.md)   | <code>readonly</code> | import("@metaplex-foundation/js").Cluster           | The currently connected network                                           |
| [registry](./sdk.web3sdkiosdk.registry.md) |                       | Registry                                            | Handles getting data about accounts and programs associated with a wallet |
| [wallet](./sdk.web3sdkiosdk.wallet.md)     |                       | [UserWallet](./sdk.userwallet.md)                   | Manage and get info about the connected wallet                            |

## Methods

| Method                                                                              | Modifiers           | Description                                                   |
| ----------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------- |
| [fromNetwork(network, storage)](./sdk.web3sdkiosdk.fromnetwork.md)                   | <code>static</code> | Create a new SDK instance for the specified network           |
| [fromPrivateKey(network, privateKey, storage)](./sdk.web3sdkiosdk.fromprivatekey.md) | <code>static</code> | reate a new SDK instance connected with the given private key |
| [getNFTCollection(address)](./sdk.web3sdkiosdk.getnftcollection.md)                  |                     | Get an SDK interface for an NFT Collection program            |
| [getNFTDrop(address)](./sdk.web3sdkiosdk.getnftdrop.md)                              |                     | Get an SDK interface for an NFT Drop program                  |
| [getProgram(address)](./sdk.web3sdkiosdk.getprogram.md)                              |                     | Get an SDK interface for a deployed program                   |
| [getProgram(address, programType)](./sdk.web3sdkiosdk.getprogram_1.md)               |                     | Get an SDK interface for a deployed program                   |
| [getProgram(address, Idl)](./sdk.web3sdkiosdk.getprogram_2.md)                       |                     | Get an SDK interface for a deployed program                   |
| [getProgramWithIdl(address, idl)](./sdk.web3sdkiosdk.getprogramwithidl.md)           |                     | Get an SDK interface for a deployed program                   |
| [getToken(address)](./sdk.web3sdkiosdk.gettoken.md)                                  |                     | Get an SDK interface for an Token program                     |