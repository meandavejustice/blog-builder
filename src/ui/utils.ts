import fm from '../plugins/frontmatter'
import { base32cid, cid } from 'is-ipfs'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import { unified } from 'unified'
import { VFile } from 'vfile-matter/lib'

export type Node = {
  host: string
  port?: number
  remote: boolean
}

export const getMarkdown = async (url: string) => {
  const res = await fetch(transformForShare(url))
  const txt = await res.text()
  const formatPost = await parsePostMarkdown(txt)
  return formatPost
}

export const parsePostMarkdown = (markdown: string) => {
  const frontMatter = unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(fm)
    .process(markdown)
  return frontMatter.then((res) => res)
}

export const cleanMarkdownContent = (markdown: VFile) => {
  const YAMLFrontMatter = /---|\*\*\*(.*)---|\*\*\*/gimsu
  return markdown.toString().replace(YAMLFrontMatter, '')
}

export const transform = (url: string, node: Node) => {
  // support opening just a CID w/ no protocol
  if (cid(url) || cid(url.split('/')[0].split('?')[0])) url = `ipfs://${url}`

  // catch HTTP urls
  try {
    if (new URL(url).protocol.startsWith('http')) return url
  } catch (_e) {
    console.log(_e)
  }

  // no protocol, not a CID - assume IPNS
  if (!url.startsWith('ipfs://') && !url.startsWith('ipns://'))
    url = `ipns://${url}`

  // trim trailing /
  if (url.endsWith('/')) url = url.slice(0, -1)

  // eslint-disable-next-line prefer-const
  let { protocol, hostname, pathname, search } = new URL(url)

  // v0 CID, fix loss of case sensitivity
  if (hostname.startsWith('qm')) {
    const start = url.search(new RegExp(hostname, 'i'))
    hostname = url.slice(start, hostname.length + start)
  }

  const nodeHost = node.port ? `${node.host}:${node.port}` : node.host
  const nodeProtocol = node.remote ? 'https' : 'http'

  if (protocol === 'ipfs:') {
    return node.remote && base32cid(hostname)
      ? `${nodeProtocol}://${hostname}.ipfs.${nodeHost}${pathname}${search}`
      : `${nodeProtocol}://${nodeHost}/ipfs/${hostname}${pathname}${search}` // use paths on local
  }
  if (protocol === 'ipns:') {
    // use path as per https://github.com/ipfs/infra/issues/506#issuecomment-729850579
    return `${nodeProtocol}://${nodeHost}/ipns/${hostname}${pathname}${search}`
  }

  throw new Error(`Failed to transform URL: ${url}`)
}

export const transformForShare = (url: string, node?: string) => {
  const gateway = defaultNodes.find((n) => n.host === node) || defaultNodes[0]
  return transform(url, gateway)
}

export const open = (url: string, node?: Node) => {
  console.log('Attempting to open:', url)

  const transformed = node ? transform(url, node) : transformForShare(url, node)
  if (transformed) window.open(transformed)
}

// presuppose that dweb.link is our best bet, but include local so it health checks for it on startup
export const defaultNodes: Node[] = [
  { host: 'dweb.link', remote: true },
  { host: 'w3s.link', remote: true },
  { host: 'cf-ipfs.com', remote: true },
  { host: 'localhost', remote: false, port: 8080 }
]
