import './index.css'
import BlogListItem from '../../components/BlogListItem'
import Header from '../../components/Header'
import { posts } from '../../data/posts'
import React from 'react'
import { useParams } from 'react-router-dom'

const Home = () => {
  const params = useParams()
  return (
    <div className="home-view view">
      <div className="container">
        <Header />
        <div className="grid">
          {posts &&
            posts.map((post) => (
              <BlogListItem post={post as any} key={post.cid} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Home
