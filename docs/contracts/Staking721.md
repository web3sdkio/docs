---
slug: /Staking721
title: Staking721
hide_title: true
displayed_sidebar: contracts
---

# Staking721

note: This is a Beta release.

## Methods

### claimRewards

```solidity
function claimRewards() external nonpayable
```

Claim accumulated rewards.

_See {\_claimRewards}. Override that to implement custom logic. See {\_calculateRewards} for reward-calculation logic._

### getStakeInfo

```solidity
function getStakeInfo(address _staker) external view returns (uint256 _tokensStaked, uint256 _rewards)
```

View amount staked and total rewards for a user.

#### Parameters

| Name     | Type    | Description                              |
| -------- | ------- | ---------------------------------------- |
| \_staker | address | Address for which to calculated rewards. |

#### Returns

| Name           | Type    | Description |
| -------------- | ------- | ----------- |
| \_tokensStaked | uint256 | undefined   |
| \_rewards      | uint256 | undefined   |

### nftCollection

```solidity
function nftCollection() external view returns (address)
```

_Address of ERC721 NFT contract -- staked tokens belong to this contract._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### rewardsPerUnitTime

```solidity
function rewardsPerUnitTime() external view returns (uint256)
```

_Rewards accumulated per unit of time._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### setRewardsPerUnitTime

```solidity
function setRewardsPerUnitTime(uint256 _rewardsPerUnitTime) external nonpayable
```

Set rewards per unit of time. Interpreted as x rewards per second/per day/etc based on time-unit.

_Only admin/authorized-account can call it._

#### Parameters

| Name                 | Type    | Description                |
| -------------------- | ------- | -------------------------- |
| \_rewardsPerUnitTime | uint256 | New rewards per unit time. |

### setTimeUnit

```solidity
function setTimeUnit(uint256 _timeUnit) external nonpayable
```

Set time unit. Set as a number of seconds. Could be specified as -- x _ 1 hours, x _ 1 days, etc.

_Only admin/authorized-account can call it._

#### Parameters

| Name       | Type    | Description    |
| ---------- | ------- | -------------- |
| \_timeUnit | uint256 | New time unit. |

### stake

```solidity
function stake(uint256[] _tokenIds) external nonpayable
```

Stake ERC721 Tokens.

_See {\_stake}. Override that to implement custom logic._

#### Parameters

| Name       | Type      | Description              |
| ---------- | --------- | ------------------------ |
| \_tokenIds | uint256[] | List of tokens to stake. |

### stakerAddress

```solidity
function stakerAddress(uint256) external view returns (address)
```

_Mapping from staked token-id to staker address._

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### stakers

```solidity
function stakers(address) external view returns (uint256 amountStaked, uint256 timeOfLastUpdate, uint256 unclaimedRewards)
```

_Mapping from staker address to Staker struct. See {struct IStaking.Staker}._

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

#### Returns

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| amountStaked     | uint256 | undefined   |
| timeOfLastUpdate | uint256 | undefined   |
| unclaimedRewards | uint256 | undefined   |

### stakersArray

```solidity
function stakersArray(uint256) external view returns (address)
```

_List of accounts that have staked their NFTs._

#### Parameters

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | address | undefined   |

### timeUnit

```solidity
function timeUnit() external view returns (uint256)
```

_Unit of time specified in number of seconds. Can be set as 1 seconds, 1 days, 1 hours, etc._

#### Returns

| Name | Type    | Description |
| ---- | ------- | ----------- |
| \_0  | uint256 | undefined   |

### withdraw

```solidity
function withdraw(uint256[] _tokenIds) external nonpayable
```

Withdraw staked tokens.

_See {\_withdraw}. Override that to implement custom logic._

#### Parameters

| Name       | Type      | Description                 |
| ---------- | --------- | --------------------------- |
| \_tokenIds | uint256[] | List of tokens to withdraw. |

## Events

### RewardsClaimed

```solidity
event RewardsClaimed(address indexed staker, uint256 rewardAmount)
```

#### Parameters

| Name             | Type    | Description |
| ---------------- | ------- | ----------- |
| staker `indexed` | address | undefined   |
| rewardAmount     | uint256 | undefined   |

### TokensStaked

```solidity
event TokensStaked(address indexed staker, uint256[] indexed tokenIds)
```

#### Parameters

| Name               | Type      | Description |
| ------------------ | --------- | ----------- |
| staker `indexed`   | address   | undefined   |
| tokenIds `indexed` | uint256[] | undefined   |

### TokensWithdrawn

```solidity
event TokensWithdrawn(address indexed staker, uint256[] indexed tokenIds)
```

#### Parameters

| Name               | Type      | Description |
| ------------------ | --------- | ----------- |
| staker `indexed`   | address   | undefined   |
| tokenIds `indexed` | uint256[] | undefined   |

### UpdatedRewardsPerUnitTime

```solidity
event UpdatedRewardsPerUnitTime(uint256 oldRewardsPerUnitTime, uint256 newRewardsPerUnitTime)
```

#### Parameters

| Name                  | Type    | Description |
| --------------------- | ------- | ----------- |
| oldRewardsPerUnitTime | uint256 | undefined   |
| newRewardsPerUnitTime | uint256 | undefined   |

### UpdatedTimeUnit

```solidity
event UpdatedTimeUnit(uint256 oldTimeUnit, uint256 newTimeUnit)
```

#### Parameters

| Name        | Type    | Description |
| ----------- | ------- | ----------- |
| oldTimeUnit | uint256 | undefined   |
| newTimeUnit | uint256 | undefined   |
