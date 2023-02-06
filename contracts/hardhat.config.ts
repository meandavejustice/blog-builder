/* eslint-disable no-console */
import * as dotenv from 'dotenv'
import { HardhatUserConfig, task, types } from 'hardhat/config'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-solhint'
import '@typechain/hardhat'
import 'hardhat-gas-reporter'
import 'solidity-coverage'

dotenv.config({ path: '.env.local' })
dotenv.config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

task(
  'flat',
  'Flattens and prints contracts and their dependencies (Resolves licenses)'
)
  .addOptionalVariadicPositionalParam(
    'files',
    'The files to flatten',
    undefined,
    types.inputFile
  )
  .setAction(async ({ files }, hre) => {
    let flattened = await hre.run('flatten:get-flattened-sources', { files })

    // Remove every line started with "// SPDX-License-Identifier:"
    flattened = flattened.replace(
      /SPDX-License-Identifier:/gm,
      'License-Identifier:'
    )
    flattened = `// SPDX-License-Identifier: MIXED\n\n${flattened}`

    // Remove every line started with "pragma experimental ABIEncoderV2;" except the first one
    flattened = flattened.replace(
      /pragma experimental ABIEncoderV2;\n/gm,
      (
        (i: number) => (m: string) =>
          !i++ ? m : ''
      )(0)
    )
    console.log(flattened.trim())
    await new Promise((resolve) => setTimeout(resolve, 1000)) // wait to flush log, wasnt working right and trimming off the end
  })

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 100000 // See: https://docs.soliditylang.org/en/v0.8.17/internals/optimizer.html#optimizer-parameter-runs
      }
    }
  },
  networks: {
    mumbai: {
      url: process.env.MUMBAI_URL || '',
      accounts:
        process.env.MUMBAI_PRIVATE_KEY !== undefined
          ? [process.env.MUMBAI_PRIVATE_KEY]
          : []
    },
    matic: {
      url: process.env.MATIC_URL || '',
      accounts:
        process.env.MATIC_PRIVATE_KEY !== undefined
          ? [process.env.MATIC_PRIVATE_KEY]
          : []
    },
    hardhat: {
      allowUnlimitedContractSize: true,
      // 30M is the polygon limit, we go massive on local to test our reads
      gas: 2 ** 50,
      blockGasLimit: 2 ** 50
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD',
    token: 'MATIC',
    gasPriceApi:
      'https://api.polygonscan.com/api?module=proxy&action=eth_gasPrice'
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  mocha: {
    timeout: 60000 * 30 // 30 mins
  }
}

export default config
