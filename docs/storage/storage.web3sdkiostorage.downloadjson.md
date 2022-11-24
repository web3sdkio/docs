---
slug: /storage.web3sdkiostorage.downloadjson
title: Web3sdkioStorage.downloadJSON() method
hide_title: true
displayed_sidebar: storage
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Web3sdkioStorage.downloadJSON() method

Downloads JSON data from any URL scheme. Resolves any URLs with schemes to retrievable gateway URLs.

**Signature:**

```typescript
downloadJSON<TJSON = any>(url: string): Promise<TJSON>;
```

## Parameters

| Parameter | Type   | Description                          |
| --------- | ------ | ------------------------------------ |
| url       | string | The URL of the JSON data to download |

**Returns:**

Promise&lt;TJSON&gt;

The JSON data fetched from the resolved URL

## Example

```jsx
const uri = "ipfs://example";
const json = await storage.downloadJSON(uri);
```