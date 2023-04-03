import addOwner from './commands/addOwner'
import info from './commands/info'
import post from './commands/post'
import publishViewer from './commands/publishViewer'
import removeOwner from './commands/removeOwner'
import setup from './commands/setuo'
import { Type } from '@sinclair/typebox'
import Conf from 'conf'
import meow from 'meow'

const configSchema = Type.Object({
  name: Type.String({ description: 'The name of the blog' }),
  address: Type.String({ description: 'The contract address of the blog' }),
  viewer: Type.String({ description: 'The published CID of the blog viewer' })
})

const config = new Conf({
  projectName: 'blog-builder',
  cwd: process.cwd(),
  schema: configSchema.toJSON()
})

const handlers: Record<string, (config: Conf, args: string[]) => void> = {
  setup,
  'publish-viewer': publishViewer,
  post,
  'add-owner': addOwner,
  'remove-owner': removeOwner,
  info
}

const cli = meow(
  `
Usage
  $ blog-builder <command>

Examples
  $ blog-builder setup <Blog Name>
  $ blog-builder publish-viewer
  $ blog-builder post <folder location>
  $ blog-builder add-owner <address>
  $ blog-builder remove-owner <address>
  $ blog-builder info
`,
  { importMeta: import.meta }
)

const [command, ...args] = cli.input

console.log('Running', command, 'with', ...args)
console.log('Current blog:', config.get('name'), config.get('address'))

if (!handlers[command]) throw new Error(`Invalid command: ${command}`)

handlers[command](config, args)
