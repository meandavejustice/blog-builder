import './index.css'
import Header from '../../components/Header'
import { posts } from '../../data/posts'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'

const PostView = () => {
  const { cid } = useParams()
  const post = posts.find((post) => post.cid === cid)

  if (post) {
    return (
      <div className="post-view view ">
        <div className="container">
          <Header />
          <div className="blog-layout">
            <div className="blog-main">
              <h2 className="blog-entry__title font-bold max-w-5xl mb-4">
                {post.title}
              </h2>

              <p className="blog-entry-item__author flex items-center gap-2">
                {' '}
                <span className="w-12 h-12 rounded-full bg-gray-200"></span>
                <span>
                  {post.author}
                  <br />
                  {post.published}
                </span>
              </p>

              <hr className="my-8 border-teal-600 opacity-50 dark:border-teal-500" />

              <div className="blog-entry-item__content pb-24">
                <div className="blog-entry-item__thumb">
                  {post.thumbnail && (
                    <img
                      src={post.thumbnail}
                      className="mb-8"
                      alt={`thumbnail for: ${post.title}`}
                    />
                  )}
                </div>
                <div className="prose prose-lg dark:prose-invert blog-entry__content">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              </div>
            </div>
            <aside className="blog-aside lg:h-screen lg:sticky lg:top-24">
              <p className="blog-entry-item__author text-lg flex items-center gap-2">
                {' '}
                <span className="w-16 h-16 rounded-full bg-gray-200"></span>
                {post.author}
              </p>
              <h6 className="uppercase text-xs pt-4 font-bold">
                Additional Info
              </h6>
              <p className="blog-entry-meta flex justify-between text-sm mt-2">
                <span>Published:</span> 1/22/23
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
    )
  } else {
    return (
      <div className="post-view container post-not-found">
        There is no post here.
      </div>
    )
  }
}

export default PostView
