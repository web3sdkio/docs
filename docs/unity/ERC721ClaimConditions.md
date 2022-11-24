---
slug: /ERC721ClaimConditions
title: ERC721ClaimConditions
hide_title: true
displayed_sidebar: unity
---

## class `ERC721ClaimConditions` {#class_web3sdkio_1_1_e_r_c721_claim_conditions}

Fetch claim conditions for a given [ERC721](docs/unity/ERC721.md#class_web3sdkio_1_1_e_r_c721) drop contract

### Summary

| Members                 | Type     | Descriptions                                                      |
| ----------------------- | -------- | ----------------------------------------------------------------- |
| chain                   | variable |                                                                   |
| address                 | variable |                                                                   |
| ERC721ClaimConditions   | function |                                                                   |
| GetActive               | function | Get the active claim condition                                    |
| CanClaim                | function | Check whether the connected wallet is eligible to claim           |
| GetIneligibilityReasons | function | Get the reasons why the connected wallet is not eligible to claim |
| GetClaimerProofs        | function | Get the special values set in the allowlist for the given wallet  |

### Members

**`public string `[`chain`](#class_web3sdkio_1_1_e_r_c721_claim_conditions_1a75c6ec828bb0949066bdca5576c50ca6)**

---

**`public string `[`address`](#class_web3sdkio_1_1_e_r_c721_claim_conditions_1a567a7dcb47cfe92ad8b23a622c136c5c)**

---

**`public inline `[`ERC721ClaimConditions`](#class_web3sdkio_1_1_e_r_c721_claim_conditions_1a7b02e91b20d2b0465e699eefd48ccf80)`(string chain,string address)`**

---

**`public inline async Task< `[`ClaimConditions`](docs/unity/ClaimConditions.md#class_web3sdkio_1_1_claim_conditions)`>`[`GetActive`](#class_web3sdkio_1_1_e_r_c721_claim_conditions_1adf0e79e56a1c0a104a1ddc9ed888b34b)`()`**

Get the active claim condition

---

**`public inline async Task< bool > `[`CanClaim`](#class_web3sdkio_1_1_e_r_c721_claim_conditions_1a3710d84de343f31e9cb8742e909b9b74)`(int quantity,string addressToCheck)`**

Check whether the connected wallet is eligible to claim

---

**`public inline async Task< string[]> `[`GetIneligibilityReasons`](#class_web3sdkio_1_1_e_r_c721_claim_conditions_1a88da315def0eb8f48483d5d4f7ae0036)`(int quantity,string addressToCheck)`**

Get the reasons why the connected wallet is not eligible to claim

---

**`public inline async Task< bool > `[`GetClaimerProofs`](#class_web3sdkio_1_1_e_r_c721_claim_conditions_1a9fa8e81bad3a37c3bbdad91345548004)`(string claimerAddress)`**

Get the special values set in the allowlist for the given wallet

---
