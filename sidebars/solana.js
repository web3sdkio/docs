/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually

  solana: [
    {
      type: "doc",
      label: "Getting Started",
      id: "index",
    },
    {
      type: "doc",
      label: "Web3sdkioSDK",
      id: "sdk.web3sdkiosdk",
    },
    {
      type: "doc",
      label: "Wallet Actions",
      id: "sdk.userwallet",
    },
    {
      type: "doc",
      label: "Deploying Programs",
      id: "sdk.deployer",
    },
    {
      type: "doc",
      label: "Custom Programs",
      id: "sdk.program",
    },
    {
      type: "category",
      label: "Prebuilt Programs",
      collapsed: false,
      link: {
        type: "generated-index",
        title: "Prebuilt Programs",
        description: "Interfaces for on-chain contracts.",
        keywords: ["contracts"],
      },
      items: [
        {
          type: "doc",
          label: "NFT Collection",
          id: "sdk.nftcollection",
        },
        {
          type: "doc",
          label: "NFT Drop",
          id: "sdk.nftdrop",
        },
        {
          type: "doc",
          label: "Token",
          id: "sdk.token",
        },
      ],
    },
    {
      className: "hidden-category",
      type: "category",
      label: "Full Reference",
      collapsed: true,
      link: {
        type: "generated-index",
        title: "Full Reference",
        description: "Everything exported by the package",
      },
      items: [
        {
          type: "autogenerated",
          dirName: ".",
        },
      ],
    },
  ],
};

module.exports = sidebars;
