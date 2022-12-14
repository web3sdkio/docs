---
slug: /sdk.web3sdkiosdk.getcontract_2
title: Web3sdkioSDK.getContract() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Web3sdkioSDK.getContract() method

Get an instance of a Custom Web3sdkioContract

## Example

```javascript
const contract = await sdk.getContract("{{contract_address}}", ABI);
```

**Signature:**

```typescript
getContract(address: string, abi: ContractInterface): Promise<SmartContract>;
```

## Parameters

| Parameter | Type              | Description                          |
| --------- | ----------------- | ------------------------------------ |
| address   | string            | the address of the deployed contract |
| abi       | ContractInterface | the ABI () of the contract to load   |

**Returns:**

Promise&lt;[SmartContract](./sdk.smartcontract.md)&gt;

the contract
