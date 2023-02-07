import htmlPlugin from '@chialab/esbuild-plugin-html'
import esbuild from 'esbuild'

const proc = await esbuild.context({
  entryPoints: ['src/ui/index.html'],
  outdir: 'local-dev/ui',
  assetNames: 'assets/[name]',
  chunkNames: '[ext]/[name]',
  plugins: [htmlPlugin()],
  jsx: 'automatic'
})

await proc.watch()

const { port } = await proc.serve({
  servedir: 'local-dev/ui'
})

console.log('Listening on', port)
