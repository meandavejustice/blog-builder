/* eslint-disable no-console */
import { ethers } from 'hardhat'
import { Blog } from '../typechain-types'

async function main() {
  if (!process.env.CONTRACT) throw new Error('Missing CONTRACT env')
  if (!process.env.URL) throw new Error('Missing URL env')

  const [deployer] = await ethers.getSigners()

  console.log('Publishing post with the account:', deployer.address)

  console.log('Account balance:', (await deployer.getBalance()).toString())

  // We get the contract to deploy
  const blog = (await ethers.getContractAt(
    'Blog',
    process.env.CONTRACT
  )) as Blog
  const tx = await blog.publish(process.env.URL)

  console.log('TX:', tx.hash)

  await tx.wait(5)

  console.log('Published!')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
