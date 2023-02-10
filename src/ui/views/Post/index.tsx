import './index.css'
import { posts } from '../../data/posts'
import React from 'react'
import { useParams } from 'react-router-dom'

const PostView = () => {
  const { cid } = useParams()
  const post = posts.find((post) => post.cid === cid)

  return (
    <div className="home-view container">
      <h1 className="blog-title">Hello, Post!</h1>
      <div className="grid">{post && post.title}</div>
    </div>
  )
}

export default PostView
