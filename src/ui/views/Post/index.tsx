import './index.css'
import Avatar from '../../../ui/components/Avatar'
import BlogPostSkeleton from '../../components/BlogPostSkeleton'
import Header from '../../components/Header'
import Truncate from '../../components/Truncate'
import contract from '../../connections/contract'
import {
  cleanMarkdownContent,
  getMarkdown,
  parseDateFromBigInt,
  transformForShare
} from '../../utils'
import NotFound from '../NotFound'
import pRetry from 'p-retry'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useParams } from 'react-router-dom'
import useSWR, { useSWRConfig } from 'swr'

const PostView = () => {
  const { idx } = useParams()
  const [error, setError] = useState('')
  const [postNotFound, setPostNotFound] = useState(false)
  const { cache } = useSWRConfig()

  const getPostFromContract = async () => {
    if (!idx) return
    try {
      const response = await contract.getPost(idx)
      const markdown = await getMarkdown(response.url)
      const postData = await { post: response, md: markdown as any }
      return postData
    } catch (error) {
      setPostNotFound(true)
    }
  }
  getPostFromContract()

  const getPost = async () => {
    try {
      const p = await pRetry(getPostFromContract, { retries: 5 })
      return p
    } catch {
      setError('Something went wrong.')
    }
  }

  const cacheData = cache.get('contract:post')
  const freshData = useSWR(
    () => (!cacheData ? 'contract:post' : null),
    getPost,
    {
      revalidateIfStale: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  )
  const { data, isLoading, isValidating } = cacheData ? cacheData : freshData

  if (postNotFound) return <NotFound />

  return (
    <>
      <Helmet>
        <meta name="twitter:title" content={data.md.data.matter.title} />
        <meta
          name="twitter:description"
          content={data.md.data.matter.excerpt}
        />
        <meta name="twitter:image" content={data.md.data.matter.thumbnail} />
        <meta property="og:title" content={data.md.data.matter.title} />
        <meta property="og:description" content={data.md.data.matter.excerpt} />
        <meta property="og:image" content={data.md.data.matter.thumbnail} />
        <meta property="og:url" content={`${window.location.href}`} />
      </Helmet>
      <div className="post-view view ">
        <div className="container min-h-screen">
          <Header />

          {isLoading ? (
            <BlogPostSkeleton />
          ) : (
            <div className="blog-layout">
              <div className="blog-main">
                <h2 className="blog-entry__title font-bold max-w-5xl mb-4">
                  {data.md.data.matter.title || ''}
                </h2>

                <p className="blog-entry-item__author flex items-center gap-2 overflow-hidden">
                  {' '}
                  <span className="w-12 h-12 rounded-full bg-gray-200 flex-none">
                    <Avatar authorAddress={data.post[1]} />
                  </span>
                  <span className="overflow-auto w-full truncate w-12">
                    <>
                      <span>{data.post[1]}</span>
                      <br />
                      {parseDateFromBigInt(data.post[2])}
                    </>
                  </span>
                </p>

                <div className="blog-entry-item__content pb-24 py-6">
                  <div className="prose prose-lg dark:prose-invert blog-entry__content">
                    {!isValidating ? (
                      <ReactMarkdown>
                        {cleanMarkdownContent(String(data.md.value))}
                      </ReactMarkdown>
                    ) : (
                      <div className="space-y-4">
                        <div className="blog-list-item__excerpt w-full h-3 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></div>
                        <div className="blog-list-item__excerpt w-3/4 h-3 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></div>
                        <div className="blog-list-item__excerpt w-3/4 h-3 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></div>
                        <div className="blog-list-item__excerpt w-1/2 h-3 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <aside className="blog-aside lg:h-screen lg:sticky lg:top-24">
                <p className="blog-entry-item__author text-lg flex items-center gap-2 overflow-hidden">
                  {' '}
                  <span className="w-16 h-16 rounded-full bg-gray-200 flex-none">
                    <Avatar authorAddress={data.post[1]} size={64} />
                  </span>
                  <span className="truncate">{data.post[1]}</span>
                </p>
                <h6 className="uppercase text-xs pt-4 font-bold">
                  Additional Info
                </h6>
                <p className="blog-entry-meta flex justify-between text-sm mt-2">
                  <>
                    <span>Published:</span> {parseDateFromBigInt(data.post[2])}
                  </>
                </p>
                <p className="blog-entry-meta flex justify-between text-sm mt-2">
                  <span className="pr-4 ">CID:</span>{' '}
                  <span className="block overflow-hidden">
                    <Truncate text={data.post[0]} cid={true} />
                  </span>
                </p>
                <p className="blog-entry-meta flex justify-between text-sm mt-2">
                  <span>Contract:</span>{' '}
                  <a
                    href={`https://mumbai.polygonscan.com/address/${contract.address}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Truncate text={contract.address} />
                  </a>
                </p>
                <p className="blog-entry-meta flex justify-between text-sm mt-2">
                  <span>Token Standard:</span> ERC165
                </p>
                <p className="blog-entry-meta flex justify-between text-sm mt-2">
                  <span>View On:</span>{' '}
                  <span>
                    <a
                      href={transformForShare(data.post[0], 'dweb.link')}
                      target="_blank"
                      rel="noreferrer"
                    >
                      dweb.link
                    </a>{' '}
                    |{' '}
                    <a
                      href={transformForShare(data.post[0], 'w3s.link')}
                      target="_blank"
                      rel="noreferrer"
                    >
                      w3s.link
                    </a>
                  </span>
                </p>
                <button className="btn mt-10">Pin to IPFS</button>
              </aside>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default PostView
