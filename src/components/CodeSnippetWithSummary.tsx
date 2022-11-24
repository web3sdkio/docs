import React from "react";
import CodeSnippetSummary from "./CodeSnippetSummary";
import Web3sdkioCodeSnippet from "./Web3sdkioCodeSnippet";

type Props = {
  contract: string;
  name: string;
  isFeatureSnippet: boolean;
  isGetContractCode: boolean;
  showHr: boolean;
  dontShowSummary: boolean;
  isSolana: boolean;
  languages?: any;
  snippetOverrides: {
    [key: string]: string;
  };
};

export default function CodeSnippetWithSummary({
  contract,
  name,
  isFeatureSnippet = false,
  isGetContractCode = false,
  isSolana = false,
  showHr = true,
  dontShowSummary = false,
  snippetOverrides = {},
}: Props) {
  return (
    <>
      {!dontShowSummary && (
        <CodeSnippetSummary
          contract={contract}
          name={name}
          isFeatureSnippet={isFeatureSnippet}
          isGetContractCode={isGetContractCode}
          showHr={showHr}
        />
      )}

      <Web3sdkioCodeSnippet
        contract={contract}
        name={name}
        isFeatureSnippet={isFeatureSnippet}
        isGetContractCode={isGetContractCode}
        isSolana={isSolana}
        showHr={showHr}
        snippetOverrides={snippetOverrides}
      />
    </>
  );
}
