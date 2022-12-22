import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export default function Web3sdkioCodeSnippet() {
  const installationSnippets = {
    javascript: `import { Web3sdkioSDK } from "@web3sdkio/sdk";

// Create a READ-ONLY instance of the Web3sdkioSDK on the Mumbai network
const sdk = new Web3sdkioSDK("mumbai"); // configure this to your network
`,

    python: `from web3sdkio import Web3sdkioSDK

# You can create new READ-ONLY instance of the SDK to use by just passing in a network name
sdk = Web3sdkioSDK("mumbai")`,

    solidity: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@web3sdkio/contracts/Web3sdkioContract.sol";

contract HellowWorldContract is Web3sdkioContract {
  // your contract code
}
`,

    go: `package main

import (
	"fmt"
  
	"github.com/web3sdkio/go-sdk/web3sdkio"
)

func main() {
	// Creates a new READ-ONLY instance of the SDK to get read-only data for your contracts, you can pass:
	// - a chain name (mainnet, goerli, polygon, mumbai, avalanche, fantom)
	// - a custom RPC URL
	sdk, err := web3sdkio.NewWeb3sdkioSDK("mumbai", nil)
	if err != nil {
		panic(err)
	}

	// Now we can interact with the SDK, like displaying the connected chain ID
	chainId, err := sdk.GetChainID()
	if err != nil {
		panic(err)
	}

	fmt.Println("New SDK instance create on chain", chainId)
}`,

    unity: `using UnityEngine;
using Web3sdkio; // 1. Import the Web3sdkioSDK

public class DemoClass : MonoBehaviour
{
    // 2. Create a Web3sdkioSDK instance for us to use throughout the class
    private Web3sdkioSDK sdk;

    void Start()
    {
        // 3. When the app starts, set up the Web3sdkioSDK
        // Below, we're setting up a read-only instance on the "goerli" test network.
        sdk = new Web3sdkioSDK("goerli");
    }
}`,
  };

  // TODO import this from const or smthn
  const languageToHighlightMapping = {
    javascript: "typescript",
    python: "python",
    react: "jsx",
    solidity: "solidity",
    go: "go",
    unity: "csharp",
  };

  return (
    <Tabs groupId="web3sdkio-code-snippet" defaultValue={"javascript"}>
      {Object.keys(installationSnippets)
        .filter((language) => language !== "solidity")
        .map((language) => (
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
