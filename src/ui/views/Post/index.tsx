import './index.css'
import BlogPostSkeleton from '../../components/BlogPostSkeleton'
import Header from '../../components/Header'
import contract from '../../connections/contract'
import { PostStructOutput } from '../../contracts/contracts/Blog'
import { cleanMarkdownContent, getMarkdown } from '../../utils'
import dayjs from 'dayjs'
import pRetry from 'p-retry'
import React, { useMemo, useState } from 'react'
import { Helmet } from 'react-helmet'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { useParams } from 'react-router-dom'

const PostView = () => {
  const { idx } = useParams()
  const [error, setError] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [post, setPost] = useState<PostStructOutput>()
  const [formattedPost, setFormattedPost] = useState({} as any)

  const getPostFromContract = async () => {
    if (!idx) return
    const response = await contract.getPost(idx)
    return response
  }

  useMemo(() => {
    const getPost = async () => {
      try {
        const p = await pRetry(getPostFromContract, { retries: 5 })
        if (p) {
          setPost(p)
          setLoaded(true)
        }
      } catch {
        setError('Something went wrong.')
      }
    }
    getPost()
  }, [idx])

  useMemo(() => {
    if (!post) return
    getMarkdown(post.url).then((res: any) => {
      setFormattedPost({
        title: res.data.matter.title,
        content: cleanMarkdownContent(res),
        author: post.author,
        published: dayjs(post.published.toString()).toString()
      })
    })
  }, [post])

  if (post) {
    const { title, published, content, author } = formattedPost

    return (
      <>
        <Helmet>
          <title>Pets - Products</title>
          <meta
            name="description"
            content="Find all the best quality products your pet may need"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@user" />
          <meta name="twitter:creator" content="@user" />
          <meta name="twitter:title" content="Pets - Products" />
          <meta
            name="twitter:description"
            content="Best Products for your pet"
          />
          <meta name="twitter:image" content="url_to_image" />
          <meta property="og:title" content="Pets - Products" />
          <meta
            property="og:description"
            content="Best Products for your pet"
          />
          <meta property="og:image" content="url_to_image" />
          <meta property="og:url" content="pets.abc" />
          <meta property="og:site_name" content="Pets - Products" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
        </Helmet>
        <div className="post-view view ">
          <div className="container min-h-screen">
            <Header />
            <div className="blog-layout">
              <div className="blog-main">
                <h2 className="blog-entry__title font-bold max-w-5xl mb-4">
                  {title}
                </h2>

                <p className="blog-entry-item__author flex items-center gap-2 overflow-hidden">
                  {' '}
                  <span className="w-12 h-12 rounded-full bg-gray-200 flex-none"></span>
                  <span className="overflow-auto w-full truncate">
                    <>
                      <span>{author}</span>
                      <br />
                      {published}
                    </>
                  </span>
                </p>

                <div className="blog-entry-item__content pb-24 py-6">
                  <div className="prose prose-lg dark:prose-invert blog-entry__content">
                    <ReactMarkdown>{content}</ReactMarkdown>
                  </div>
                </div>
              </div>
              <aside className="blog-aside lg:h-screen lg:sticky lg:top-24">
                <p className="blog-entry-item__author text-lg flex items-center gap-2 overflow-hidden">
                  {' '}
                  <span className="w-16 h-16 rounded-full bg-gray-200 flex-none"></span>
                  <span className="truncate">{author}</span>
                </p>
                <h6 className="uppercase text-xs pt-4 font-bold">
                  Additional Info
                </h6>
                <p className="blog-entry-meta flex justify-between text-sm mt-2">
                  <span>Published:</span> {published}
                </p>
                <p className="blog-entry-meta flex justify-between text-sm mt-2">
                  <span>CID:</span> bafybeif5tduva..unav2okcrhte5cm
                </p>
                <p className="blog-entry-meta flex justify-between text-sm mt-2">
                  <span>Contract Address:</span> 0x2ada3ax04ad92hdaca2541a17b
                </p>
                <p className="blog-entry-meta flex justify-between text-sm mt-2">
                  <span>Token Standard:</span> ERC21
                </p>
                <p className="blog-entry-meta flex justify-between text-sm mt-2">
                  <span>View On:</span>{' '}
                  <span>
                    <a href="#">dweb.link</a> | <a href="#">ipfs.io</a>
                  </span>
                </p>
                <button className="btn mt-10">Pin to IPFS</button>
              </aside>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return loaded ? (
      <div className="post-view container post-not-found">
        There is no post here.
      </div>
    ) : (
      <BlogPostSkeleton />
    )
  }
}

export default PostView
