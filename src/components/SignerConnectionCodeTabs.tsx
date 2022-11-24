import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export default function Web3sdkioCodeSnippet() {
  const installationSnippets = {
    javascript: `import { Web3sdkioSDK } from "@web3sdkio/sdk";

const sdk = Web3sdkioSDK.fromPrivateKey(
  // Learn more about securely accessing your private key: https://portal.web3sdk.io/sdk/set-up-the-sdk/securing-your-private-key
  "<your-private-key-here>",
  "mumbai", // configure this to your network
);
`,

    python: `from web3sdkio import Web3sdkioSDK
from web3sdkio.types.nft import NFTMetadataInput
import os

# Learn more about securely accessing your private key: https://portal.web3sdk.io/sdk/set-up-the-sdk/securing-your-private-key
PRIVATE_KEY = "<your-private-key-here>"

# Now you can create a new instance of the SDK with your private key
sdk = Web3sdkioSDK.from_private_key(PRIVATE_KEY, "mumbai")`,

    go: `package main

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
