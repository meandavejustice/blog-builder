import './index.css'
import BlogListItem from '../../components/BlogListItem'
import { posts } from '../../data/posts'
import React from 'react'

const Home = () => {
  return (
    <div className="home-view container">
      <h1 className="blog-title">Hello, world!</h1>
      <div className="grid">
        {posts &&
          posts.map((post) => (
            <BlogListItem post={post as any} key={post.cid} />
          ))}
      </div>
    </div>
  )
}

export default Home
