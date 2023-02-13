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
          <h2 className="blog-entry__title max-w-4xl">{post.title}</h2>
          <div className="blog-layout">
            <div className="blog-main">
              <div className="blog-entry-item__content pb-24">
                <div className="blog-entry-item__thumb">
                  {post.thumbnail && (
                    <img
                      src={post.thumbnail}
                      alt={`thumbnail for: ${post.title}`}
                    />
                  )}
                </div>
                <div className="prose prose-lg dark:prose-invert blog-entry__content">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              </div>
            </div>
            <aside className="blog-aside h-screen sticky top-24">
              <p className="blog-entry-item__date flex justify-between font-bold text-lg">
                {' '}
                {post.published}
              </p>
              <p className="blog-entry-item__author flex justify-between font-bold text-2xl">
                {' '}
                {post.author}
              </p>
              <h6 className="uppercase text-xs pt-4 font-bold">
                Additional Info
              </h6>
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
