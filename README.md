# team-blog

This is the repo we are using to build the Browsers & Platforms team blog.

There are 3 components of the blog.

1. Viewer
3. Smart Contract
4. Publishing tool

## Viewer
The viewer is a Single Page App, pinned to IPFS. On load, it fetches the latest list of post CIDs from the contract, stores them in local storage and renders them.

The viewer displays CID, the latest transaction hash from the contract and author's wallet info to verify authorship and the post's content.

## Smart Contract
Currently we only maintain 2 lists in the contract:
- post CIDs
- Authors allowed to publish

## Publishing tool

The publishing tool takes a post cid as input, interacts with the smart contract to verify that the publisher is in the author list, and updates the contract's post list.

The first version of this will be CLI tool, future version will be all in browser, using metamask or comparible wallet for interactions with contract.


## Discussions:
Come discuss decentralized publishing with us at [#decentralized-publishing-patterns](https://filecoinproject.slack.com/archives/C055RDDG475) on Filecoin Slack.
