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

  react: [
    {
      type: "doc",
      label: "Getting Started",
      id: "index",
    },
    {
      type: "doc",
      label: "Migration Guide",
      id: "migration-guide",
    },

    // === Initializing the SDK ===
    {
      type: "category",
      label: "Initializing the SDK",
      items: [
        {
          type: "doc",
          label: "Web3sdkioProvider",
          id: "react.web3sdkioprovider",
        },
        {
          type: "doc",
          label: "Custom Signer/Provider",
          id: "react.web3sdkiosdkprovider",
        },
        {
          type: "doc",
          label: "Configuring App Metadata",
          id: "react.dappmetadata",
        },
        {
          type: "doc",
          label: "All SDK Options",
          id: "react.web3sdkioproviderprops",
        },
      ],
    },
    // === useSDK ===
    {
      type: "doc",
      label: "useSDK",
      id: "react.usesdk",
    },
    // === UI Components ===
    {
      type: "category",
      label: "UI Components",
      items: [
        {
          type: "doc",
          label: "Connect Wallet Button",
          id: "react.connectwallet",
        },
        {
          type: "doc",
          label: "Web3 Button",
          id: "react.web3button",
        },

        {
          type: "doc",
          label: "NFT Renderer",
          id: "react.web3sdkionftmedia",
        },
        {
          type: "doc",
          label: "IPFS Media Renderer",
          id: "react.mediarenderer",
        },
      ],
    },
    // === Wallet connection ===
    {
      type: "category",
      label: "Wallet Connection",
      items: [
        {
          type: "doc",
          label: "useAddress",
          id: "react.useaddress",
        },
        {
          type: "doc",
          label: "useMetamask",
          id: "react.usemetamask",
        },
        {
          type: "doc",
          label: "useWalletConnect",
          id: "react.usewalletconnect",
        },
        {
          type: "doc",
          label: "useCoinbaseWallet",
          id: "react.usecoinbasewallet",
        },
        // {
        //   type: "doc",
        //   label: "useMagic",
        //   id: "react.usemagic",
        // },
        // {
        //   type: "doc",
        //   label: "useGnosis",
        //   id: "react.usegnosis",
        // },
        {
          type: "doc",
          label: "useDisconnect",
          id: "react.usedisconnect",
        },
      ],
    },
    // === Interact with contracts ===
    {
      type: "category",
      label: "Interact With Contracts",
      items: [
        {
          type: "doc",
          label: "useContract",
          id: "react.usecontract",
        },
        {
          type: "doc",
          label: "useContractRead",
          id: "react.usecontractread",
        },
        {
          type: "doc",
          label: "useContractWrite",
          id: "react.usecontractwrite",
        },
        {
          type: "doc",
          label: "useContractMetadata",
          id: "react.usecontractmetadata",
        },
        {
          type: "doc",
          label: "useContractEvents",
          id: "react.usecontractevents",
        },
      ],
    },
    // === Networks ===
    {
      type: "category",
      label: "Network Connection",
      items: [
        {
          type: "doc",
          label: "useChainId",
          id: "react.usechainid",
        },
        {
          type: "doc",
          label: "useNetwork",
          id: "react.usenetwork",
        },
        {
          type: "doc",
          label: "useNetworkMismatch",
          id: "react.usenetworkmismatch",
        },
      ],
    },
    // === NFTs ===
    {
      type: "category",
      label: "NFT",
      items: [
        {
          type: "doc",
          label: "useNFT",
          id: "react.usenft",
        },
        {
          type: "doc",
          label: "useNFTs",
          id: "react.usenfts",
        },
        {
          type: "doc",
          label: "useTotalCirculatingSupply",
          id: "react.usetotalcirculatingsupply",
        },
        {
          type: "doc",
          label: "useOwnedNFTs",
          id: "react.useownednfts",
        },
        {
          type: "doc",
          label: "useNFTBalance",
          id: "react.usenftbalance",
        },
        {
          type: "doc",
          label: "useTotalCount",
          id: "react.usetotalcount",
        },
        {
          type: "doc",
          label: "useMintNFT",
          id: "react.usemintnft",
        },
        {
          type: "doc",
          label: "useMintNFTSupply",
          id: "react.usemintnftsupply",
        },
        {
          type: "doc",
          label: "useTransferNFT",
          id: "react.usetransfernft",
        },
        {
          type: "doc",
          label: "useAirdropNFT",
          id: "react.useairdropnft",
        },
        {
          type: "doc",
          label: "useBurnNFT",
          id: "react.useburnnft",
        },
      ],
    },
    // === Tokens ===
    {
      type: "category",
      label: "Token",
      items: [
        {
          type: "doc",
          label: "useTokenSupply",
          id: "react.usetokensupply",
        },
        {
          type: "doc",
          label: "useTokenBalance",
          id: "react.usetokenbalance",
        },
        {
          type: "doc",
          label: "useTokenDecimals",
          id: "react.usetokendecimals",
        },
        {
          type: "doc",
          label: "useMintToken",
          id: "react.useminttoken",
        },
        {
          type: "doc",
          label: "useClaimToken",
          id: "react.useclaimtoken",
        },
        {
          type: "doc",
          label: "useTransferToken",
          id: "react.usetransfertoken",
        },
        {
          type: "doc",
          label: "useTransferBatchToken",
          id: "react.usetransferbatchtoken",
        },
        {
          type: "doc",
          label: "useBurnToken",
          id: "react.useburntoken",
        },
      ],
    },
    // === Marketplace ===
    {
      type: "category",
      label: "Marketplace",
      items: [
        {
          type: "doc",
          label: "useListing",
          id: "react.uselisting",
        },
        {
          type: "doc",
          label: "useListings",
          id: "react.uselistings",
        },
        {
          type: "doc",
          label: "useListingsCount",
          id: "react.uselistingscount",
        },
        {
          type: "doc",
          label: "useActiveListings",
          id: "react.useactivelistings",
        },
        {
          type: "doc",
          label: "useWinningBid",
          id: "react.usewinningbid",
        },
        {
          type: "doc",
          label: "useAuctionWinner",
          id: "react.useauctionwinner",
        },
        {
          type: "doc",
          label: "useBidBuffer",
          id: "react.usebidbuffer",
        },
        {
          type: "doc",
          label: "useCreateDirectListing",
          id: "react.usecreatedirectlisting",
        },
        {
          type: "doc",
          label: "useCreateAuctionListing",
          id: "react.usecreateauctionlisting",
        },
        {
          type: "doc",
          label: "useCancelListing",
          id: "react.usecancellisting",
        },
        {
          type: "doc",
          label: "useMakeBid",
          id: "react.usemakebid",
        },
        {
          type: "doc",
          label: "useBuyNow",
          id: "react.usebuynow",
        },
      ],
    },
    // === Permission Controls ===
    {
      type: "category",
      label: "Permission Controls",
      items: [
        {
          type: "doc",
          label: "useAllRoleMembers",
          id: "react.useallrolemembers",
        },
        {
          type: "doc",
          label: "useRoleMembers",
          id: "react.userolemembers",
        },
        {
          type: "doc",
          label: "useIsAddressRole",
          id: "react.useisaddressrole",
        },
        {
          type: "doc",
          label: "useSetAllRoleMembers",
          id: "react.usesetallrolemembers",
        },
        {
          type: "doc",
          label: "useGrantRole",
          id: "react.usegrantrole",
        },
        {
          type: "doc",
          label: "useRevokeRole",
          id: "react.userevokerole",
        },
      ],
    },
    // === Drops ===
    {
      type: "category",
      label: "Drop",
      items: [
        {
          type: "doc",
          label: "useUnclaimedNFTs",
          id: "react.useunclaimednfts",
        },
        {
          type: "doc",
          label: "useClaimedNFTs",
          id: "react.useclaimednfts",
        },
        {
          type: "doc",
          label: "useUnclaimedNFTSupply",
          id: "react.useunclaimednftsupply",
        },
        {
          type: "doc",
          label: "useClaimedNFTSupply",
          id: "react.useclaimednftsupply",
        },
        {
          type: "doc",
          label: "useBatchesToReveal",
          id: "react.usebatchestoreveal",
        },
        {
          type: "doc",
          label: "useClaimNFT",
          id: "react.useclaimnft",
        },
        {
          type: "doc",
          label: "useLazyMint",
          id: "react.uselazymint",
        },
        {
          type: "doc",
          label: "useDelayedRevealLazyMint",
          id: "react.usedelayedreveallazymint",
        },
        {
          type: "doc",
          label: "useRevealLazyMint",
          id: "react.usereveallazymint",
        },
      ],
    },
    // === Claim Conditions ===
    {
      type: "category",
      label: "Claim Conditions",
      items: [
        {
          type: "doc",
          label: "useActiveClaimCondition",
          id: "react.useactiveclaimcondition",
        },
        {
          type: "doc",
          label: "useClaimConditions",
          id: "react.useclaimconditions",
        },
        {
          type: "doc",
          label: "useClaimIneligibilityReasons",
          id: "react.useclaimineligibilityreasons",
        },
        {
          type: "doc",
          label: "useSetClaimConditions",
          id: "react.usesetclaimconditions",
        },
        {
          type: "doc",
          label: "useResetClaimConditions",
          id: "react.useresetclaimconditions",
        },
      ],
    },
    // === SDK References ===
    {
      className: "hidden-category",
      type: "category",
      label: "Full Reference",
      collapsed: true,
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
