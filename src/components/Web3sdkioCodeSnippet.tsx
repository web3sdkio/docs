import React from "react";
import jsonData from "../../docs/snippets.json";
import solanaData from "../../docs/snippets_solana.json";
import featureJsonData from "../../docs/feature_snippets.json";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export default function Web3sdkioCodeSnippet({
  contract,
  name,
  isFeatureSnippet = false,
  isSolana = false,
  isGetContractCode = false,
  showHr = true,
  groupId = "web3sdkio-code-snippet",
  languages = {},
  snippetOverrides,
}) {
  const languagesToShow = isSolana
    ? {
        react: true,
        javascript: true,
        python: false,
        go: false,
      }
    : {
        react: true,
        javascript: true,
        python: true,
        go: true,
        unity: true,
        ...languages,
      };

  if (!contract) {
    return null;
  }

  if (isSolana) {
    groupId = "solana-snippet";
  }

  const contractObject = isFeatureSnippet
    ? featureJsonData[contract]
    : isSolana
    ? solanaData[contract]
    : jsonData[contract];

  if (!contractObject) {
    return null;
  }

  const methods = isFeatureSnippet ? contractObject : contractObject.methods;
  const properties = contractObject.properties;

  if (!methods && !properties) {
    return null;
  }

  let codeObjectToUse;
  if (isGetContractCode) {
    codeObjectToUse = contractObject;
  } else {
    // Try find in methods
    const method = methods?.find((m) => m.name === name);
    // Try find in properties if not found in methods
    const propertyOrMethodFallback =
      method === undefined ? properties?.find((p) => p.name === name) : method;

    if (!propertyOrMethodFallback) {
      return null;
    }

    codeObjectToUse = propertyOrMethodFallback;
  }

  const { examples, reference: references } = codeObjectToUse;

  const languageToHighlightMapping = {
    javascript: "typescript",
    python: "python",
    react: "jsx",
    go: "go",
  };

  return (
    <>
      <Tabs groupId={groupId} defaultValue={isSolana ? "javascript" : "react"}>
        {Object.entries(languagesToShow).map(([language, alwaysShow]) => {
          const example = examples[language];
          const reference = references[language];

          // Capitalize first letter for language name
          const languageName =
            language.charAt(0).toUpperCase() + language.slice(1);

          if (!alwaysShow) {
            return (
              <TabItem
                key={language}
                attributes={{
                  style: { display: "none" },
                }}
                hidden={true}
                value={language}
                label={languageName}
              >
                {null}
              </TabItem>
            );
          }

          // If the example is empty, return null
          if (!example) {
            return (
              <TabItem key={language} value={language} label={languageName}>
                <CodeBlock language={languageToHighlightMapping[language]}>
                  <p>
                    Check out the{" "}
                    <a href={`/${languageName}`}>
                      {languageName} SDK Reference
                    </a>{" "}
                    for more information.
                  </p>
                </CodeBlock>
              </TabItem>
            );
          }

          return (
            <TabItem key={language} value={language} label={languageName}>
              <CodeBlock language={languageToHighlightMapping[language]}>
                {snippetOverrides?.[language] || example}
              </CodeBlock>

              {reference && (
                <a
                  href={reference}
                  style={{
                    display: "block",
                    marginTop: "1rem",
                    textDecoration: "none",
                  }}
                >
                  View in {languageName} SDK Documentation
                </a>
              )}
            </TabItem>
          );
        })}
      </Tabs>

      {showHr && (
        <hr
          style={{
            marginTop: 32,
            backgroundColor: "var(--ifm-toc-border-color)",
          }}
        />
      )}
    </>
  );
}
