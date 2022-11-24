---
slug: /react.usemetamask
title: useMetamask() function
hide_title: true
displayed_sidebar: react
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## useMetamask() function

Hook for connecting to a Metamask wallet.

```javascript
import { useMetamask } from "@web3sdkio/react";
```

## Example

We can allow users to connect their metamask wallets as follows:

```javascript
import { useMetamask } from "@web3sdkio/react";

const App = () => {
  const connectWithMetamask = useMetamask();

  return <button onClick={connectWithMetamask}>Connect Metamask</button>;
};
```

Here, we use the `useMetamask` hook to handle metamask connection. When a user clicks the button, we'll call the `connectWithMetamask` function, which will prompt users to connect their metamask wallet.

**Signature:**

```typescript
export declare function useMetamask(): () => Promise<
  | {
      data?: import("wagmi").ConnectorData<any> | undefined;
      error?: Error | undefined;
    }
  | {
      error: Error;
    }
>;
```

**Returns:**

() =&gt; Promise&lt;{ data?: import("wagmi").ConnectorData&lt;any&gt; \| undefined; error?: Error \| undefined; } \| { error: Error; }&gt;