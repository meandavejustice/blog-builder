import './index.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { PostItem } from 'src/ui/types'

const BlogListItem = ({ post }: { post: PostItem }) => {
  return (
    <div className="blog-list-item">
      <div className="blog-list-item__content">
        <p className="blog-list-item__date">{post.published}</p>
        <h3 className="blog-list-item__title font-bold">
          <Link
            to={`/post/${post.cid}`}
            className="hover:underline underline-offset-3"
          >
            {post.title}
          </Link>
        </h3>
        <p className="blog-list-item__author mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gray-200"></span>
          {post.author}
        </p>
        <div className="blog-list-item__excerpt">{post.excerpt}</div>
      </div>
      <div className="blog-list-item__thumb">
        {post.thumbnail && (
          <img src={post.thumbnail} alt={`thumbnail for ${post.title}`} />
        )}
      </div>
    </div>
  )
}

export default BlogListItem
