import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export default function Web3sdkioCodeSnippet() {
  const installationSnippets = {
    javascript: `npm install @web3sdkio/sdk ethers`,
    // react: `npm install @web3sdkio/react @web3sdkio/sdk ethers`,
    python: `pip install web3sdkio-sdk`,
    // solidity: `npm install @web3sdkio/contracts`,
    go: `go get github.com/web3sdkio/go-sdk`,
    unity: `https://docs.web3sdk.io/gamingkit/setting-up/installation`,
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
          <CodeBlock language={`bash`}>
            {installationSnippets[language]}
          </CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  );
}
