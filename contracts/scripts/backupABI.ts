import { writeFileSync } from 'fs'
import { resolve } from 'path'

import { version as packageVersion } from '../package.json'

async function main() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { abi } = require(resolve(
    __dirname,
    `../artifacts/contracts/Blog.sol/Blog.json`
  ))
  writeFileSync(
    resolve(__dirname, `../versions/${packageVersion}.json`),
    JSON.stringify(abi, null, 2)
  )
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
