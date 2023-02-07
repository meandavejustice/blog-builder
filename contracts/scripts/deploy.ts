/* eslint-disable no-console */
import { ethers } from 'hardhat'

async function main() {
  if (!process.env.BLOG_NAME) throw new Error('Missing BLOG_NAME env')

  const [deployer] = await ethers.getSigners()

  console.log('Deploying contracts with the account:', deployer.address)

  console.log('Account balance:', (await deployer.getBalance()).toString())

  // We get the contract to deploy
  const FanList = await ethers.getContractFactory('Blog')
  const contract = await FanList.deploy(process.env.BLOG_NAME)
  console.log('TX:', contract.deployTransaction.hash)

  await contract.deployTransaction.wait(5)
  await contract.deployed()

  console.log('Contract deployed to:', contract.address)
  console.log(
    'Now run: npm run verify:testnet',
    contract.address,
    process.env.BLOG_NAME
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
