import './index.css'
import { parseDateFromBigInt } from '../../utils'
import Avatar from '../Avatar'
import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = ({ post, idx }: { post: any; idx: number }) => {
  return (
    <div className="blog-list-item">
      <div className="blog-list-item__content">
        <div className="blog-list-item__date">
          {parseDateFromBigInt(post.post[2])}
        </div>
        <h3 className="blog-list-item__title font-bold">
          <Link
            to={`/post/${idx}`}
            className="hover:underline underline-offset-3"
          >
            {post.md.data.matter.title}
          </Link>
        </h3>
        <div className="blog-list-item__author mb-4 flex items-center gap-2">
          <>
            <span className="w-8 h-8 rounded-full bg-gray-200">
              <Avatar authorAddress={post.post[1]} size={32} />
            </span>
            <span className="truncate">{post.post[1]}</span>
          </>
        </div>
        <div className="blog-list-item__excerpt">
          {post.md.data.matter.excerpt}
        </div>
      </div>
      <div className="blog-list-item__thumb">
        {post.md.data.matter.thumbnail && (
          <img src={post.md.data.matter.thumbnail} alt="thumbnail for ..." />
        )}
      </div>
    </div>
  )
}

export default BlogListItem
