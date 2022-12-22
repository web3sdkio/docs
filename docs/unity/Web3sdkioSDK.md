---
slug: /Web3sdkioSDK
title: Web3sdkioSDK
hide_title: true
displayed_sidebar: unity
---

## class `Web3sdkioSDK` {#class_web3sdkio_1_1_web3sdkio_s_d_k}

The entry point for the web3sdkio SDK.

### Summary

| Members     | Type     | Descriptions                                                              |
| ----------- | -------- | ------------------------------------------------------------------------- |
| wallet      | variable | Connect and Interact with a user's wallet                                 |
| deployer    | variable | Deploy new contracts                                                      |
| Web3sdkioSDK | function | Create an instance of the web3sdkio SDK. Requires a webGL browser context. |
| GetContract | function | Get an instance of a deployed contract.                                   |

### Members

**`public `[`Wallet`](docs/unity/Wallet.md#class_web3sdkio_1_1_wallet)` `[`wallet`](#class_web3sdkio_1_1_web3sdkio_s_d_k_1ab7b329ee63841aa20c31bd82b93ecdb1)**

Connect and Interact with a user's wallet

---

**`public `[`Deployer`](docs/unity/Deployer.md#class_web3sdkio_1_1_deployer)` `[`deployer`](#class_web3sdkio_1_1_web3sdkio_s_d_k_1a13c6c17565b26b3b022331bd655ecae2)**

Deploy new contracts

---

**`public inline `[`Web3sdkioSDK`](#class_web3sdkio_1_1_web3sdkio_s_d_k_1ada6bc8c80381760b911af151504f7eda)`(string chainOrRPC,`[`Options`](docs/unity/Web3sdkioSDK::Options.md#struct_web3sdkio_1_1_web3sdkio_s_d_k_1_1_options)` options)`**

Create an instance of the web3sdkio SDK. Requires a webGL browser context.

#### Parameters

- `chainOrRPC` The chain name or RPC url to connect to

- `options` Configuration options

---

**`public inline `[`Contract`](docs/unity/Contract.md#class_web3sdkio_1_1_contract)` `[`GetContract`](#class_web3sdkio_1_1_web3sdkio_s_d_k_1a9ea629b8316a269ca5003abfb1921f9a)`(string address,string abi)`**

Get an instance of a deployed contract.

#### Parameters

- `address` The contract address

- `abi` Optionally pass the ABI for contracts that cannot be auto resolved. Expected format for the ABI is escaped JSON string

#### Returns

A contract instance

---
