---
slug: /sdk.erc721
title: Erc721 class
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Erc721 class

Standard ERC721 NFT functions

## Example

```javascript
const contract = await sdk.getContract("{{contract_address}}");
await contract.erc721.transfer(walletAddress, tokenId);
```

## Constructors

| Constructor                                                                       | Modifiers | Description                                                |
| --------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------- |
| [(constructor)(contractWrapper, storage, chainId)](./sdk.erc721._constructor_.md) |           | Constructs a new instance of the <code>Erc721</code> class |

## Properties

| Property                                           | Modifiers              | Type                                                                                                                                             | Description                |
| -------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| [chainId](./sdk.erc721.chainid.md)                 | <code>readonly</code>  | number                                                                                                                                           |                            |
| [claimConditions](./sdk.erc721.claimconditions.md) | <code>readonly</code>  | import("./drop-claim-conditions").[DropClaimConditions](./sdk.dropclaimconditions.md)&lt;import("../../types/eips").BaseClaimConditionERC721&gt; | Configure claim conditions |
| [contractWrapper](./sdk.erc721.contractwrapper.md) | <code>protected</code> | ContractWrapper&lt;T&gt;                                                                                                                         |                            |
| [featureName](./sdk.erc721.featurename.md)         |                        | "ERC721"                                                                                                                                         |                            |
| [revealer](./sdk.erc721.revealer.md)               | <code>readonly</code>  | import("./delayed-reveal").[DelayedReveal](./sdk.delayedreveal.md)&lt;import("../../types/eips").BaseDelayedRevealERC721&gt;                     | Delayed reveal             |
| [signature](./sdk.erc721.signature.md)             | <code>readonly</code>  | [Erc721WithQuantitySignatureMintable](./sdk.erc721withquantitysignaturemintable.md)                                                              | Signature Minting          |
| [storage](./sdk.erc721.storage.md)                 | <code>protected</code> | Web3sdkioStorage                                                                                                                                  |                            |
| [tieredDrop](./sdk.erc721.tiereddrop.md)           | <code>readonly</code>  | Erc721TieredDrop                                                                                                                                 | Tiered Drop                |

## Methods

| Method                                                                                            | Modifiers | Description                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [balance()](./sdk.erc721.balance.md)                                                              |           | Get NFT Balance for the currently connected wallet                                                                                                                                                                    |
| [balanceOf(address)](./sdk.erc721.balanceof.md)                                                   |           | Get NFT Balance                                                                                                                                                                                                       |
| [burn(tokenId)](./sdk.erc721.burn.md)                                                             |           | Burn a single NFT                                                                                                                                                                                                     |
| [claim(quantity, options)](./sdk.erc721.claim.md)                                                 |           | Claim unique NFTs to the connected wallet                                                                                                                                                                             |
| [claimTo(destinationAddress, quantity, options)](./sdk.erc721.claimto.md)                         |           | Claim unique NFTs to a specific Wallet                                                                                                                                                                                |
| [get(tokenId)](./sdk.erc721.get.md)                                                               |           | Get a single NFT Metadata                                                                                                                                                                                             |
| [getAddress()](./sdk.erc721.getaddress.md)                                                        |           |                                                                                                                                                                                                                       |
| [getAll(queryParams)](./sdk.erc721.getall.md)                                                     |           | Get All Minted NFTs                                                                                                                                                                                                   |
| [getAllOwners()](./sdk.erc721.getallowners.md)                                                    |           | Get All owners of minted NFTs on this contract                                                                                                                                                                        |
| [getClaimTransaction(destinationAddress, quantity, options)](./sdk.erc721.getclaimtransaction.md) |           | Construct a claim transaction without executing it. This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution. |
| [getOwned(walletAddress)](./sdk.erc721.getowned.md)                                               |           | Get Owned NFTs                                                                                                                                                                                                        |
| [getOwnedTokenIds(walletAddress)](./sdk.erc721.getownedtokenids.md)                               |           | Get all token ids of NFTs owned by a specific wallet.                                                                                                                                                                 |
| [isApproved(address, operator)](./sdk.erc721.isapproved.md)                                       |           | Get whether this wallet has approved transfers from the given operator                                                                                                                                                |
| [lazyMint(metadatas, options)](./sdk.erc721.lazymint.md)                                          |           | Create a batch of unique NFTs to be claimed in the future                                                                                                                                                             |
| [mint(metadata)](./sdk.erc721.mint.md)                                                            |           | Mint a unique NFT                                                                                                                                                                                                     |
| [mintBatch(metadatas)](./sdk.erc721.mintbatch.md)                                                 |           | Mint Many unique NFTs                                                                                                                                                                                                 |
| [mintBatchTo(receiver, metadatas)](./sdk.erc721.mintbatchto.md)                                   |           | Mint Many unique NFTs                                                                                                                                                                                                 |
| [mintTo(receiver, metadata)](./sdk.erc721.mintto.md)                                              |           | Mint a unique NFT                                                                                                                                                                                                     |
| [ownerOf(tokenId)](./sdk.erc721.ownerof.md)                                                       |           | Get the current owner of a given NFT within this Contract                                                                                                                                                             |
| [totalCirculatingSupply()](./sdk.erc721.totalcirculatingsupply.md)                                |           | Get the total count NFTs minted in this contract                                                                                                                                                                      |
| [totalClaimedSupply()](./sdk.erc721.totalclaimedsupply.md)                                        |           |                                                                                                                                                                                                                       |
| [totalCount()](./sdk.erc721.totalcount.md)                                                        |           | Get the number of NFTs minted                                                                                                                                                                                         |
| [totalUnclaimedSupply()](./sdk.erc721.totalunclaimedsupply.md)                                    |           | Get the unclaimed supply                                                                                                                                                                                              |
| [transfer(to, tokenId)](./sdk.erc721.transfer.md)                                                 |           | Transfer a single NFT                                                                                                                                                                                                 |

**Signature:**

```typescript
export declare class Erc721<T extends Multiwrap | SignatureDrop | DropERC721 | TokenERC721 | BaseERC721 = BaseERC721> implements UpdateableNetwork, DetectableFeature
```

**Implements:** UpdateableNetwork, DetectableFeature

## Remarks

Basic functionality for a ERC721 contract that handles IPFS storage for you.