# Architecture

[Initial document describing blog](https://hackmd.io/vMVkinfmS-K_6GJDJFtSZg)

Prior Art: https://github.com/autonome/ipp

## Components

- markdown editor SPA
- Login/wallet creation/identity by https://magic.link/
- https://web3.storage pinning service
- Smart Contract data storage


## Contract

Once we have the cid we can deploy and update the blog’s smart contract. This contract will maintain two different types of lists.

- List of authors on the team
- List of each author's blogpost cids

The team blog will need an index page, this page will pull down the data from our smart contract and arrange out list of posts however we like. We may use something like alchemy to access this data.