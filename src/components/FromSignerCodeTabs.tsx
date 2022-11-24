import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export default function FromSignerCodeTabs() {
  const installationSnippets = {
    javascript: `import { Web3sdkioSDK } from "@web3sdkio/sdk";

// Instantiate the Web3sdkioSDK using the signer
// the signer variable comes from a signer you have previously created,
// or from our React SDK's useSigner hook.
const sdk = Web3sdkioSDK.fromSigner(signer, "mumbai");
`,

    python: `from web3sdkio import Web3sdkioSDK

# Now you can create a new instance of the SDK with the signer.
# Here, the signer variable comes from a signer you have previously created.
sdk = Web3sdkioSDK("mumbai", signer)`,

    go: `// NOTE: Go does not support instantiating the SDK from a signer.
package main

import (
    "fmt"
    "encoding/json"

    "github.com/web3sdkio/go-sdk/web3sdkio"
)

func main() {
    // Get your private key securely (preferably from an environment variable)
    privateKey := "..."

    // Instantiate the SDK with your privateKey
    sdk, err := web3sdkio.NewWeb3sdkioSDK("mumbai", &web3sdkio.SDKOptions{
        PrivateKey: privateKey,
    })
    if err != nil {
        panic(err)
    }
}`,
  };

  // TODO import this from const or smthn
  const languageToHighlightMapping = {
    javascript: "typescript",
    python: "python",
    go: "go",
  };

  return (
    <Tabs groupId="web3sdkio-code-snippet" defaultValue={"javascript"}>
      {Object.keys(installationSnippets).map((language) => (
        <TabItem
          key={language}
          value={language}
          label={
            // capitalize first letter
            language.charAt(0).toUpperCase() + language.slice(1)
          }
        >
          <CodeBlock language={languageToHighlightMapping[language]}>
            {installationSnippets[language]}
          </CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  );
}
