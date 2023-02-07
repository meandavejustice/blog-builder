import { Type } from '@sinclair/typebox'
import Conf from 'conf'
import meow from 'meow'

const configSchema = Type.Object({
  name: Type.String({ description: 'The name of the blog' }),
  address: Type.String({ description: 'The contract address of the blog' })
})

const config = new Conf({
  projectName: 'blog-builder',
  cwd: process.cwd(),
  schema: configSchema.toJSON()
})

const cli = meow(
  `
Usage
  $ blog-builder <command>

Examples
  $ blog-builder setup <Blog Name>
  $ blog-builder post <folder location>
  $ blog-builder add-owner <address>
  $ blog-builder remove-owner <address>
  $ blog-builder info
  $ blog-builder reset
`,
  { importMeta: import.meta }
)

const [command, ...args] = cli.input

console.log('Running', command, 'with', ...args)
console.log('Current blog:', config.get('name'), config.get('address'))
