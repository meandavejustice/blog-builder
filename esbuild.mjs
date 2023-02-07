import htmlPlugin from '@chialab/esbuild-plugin-html'
import esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/ui/index.html'],
  outdir: 'dist/ui',
  assetNames: 'assets/[name]-[hash]',
  chunkNames: '[ext]/[name]-[hash]',
  plugins: [htmlPlugin()],
  minify: true,
  bundle: true,
  jsx: 'automatic'
})
