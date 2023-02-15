import './index.css'
import React from 'react'
import { Link } from 'react-router-dom'
import remarkParse from 'remark-parse'
import { PostItem } from 'src/ui/types'
import { unified } from 'unified'

const BlogListItem = ({ post }: { post: PostItem }) => {
  let thumbnail = null

  const tree = unified().use(remarkParse).parse(post.content)

  const firstEl = tree.children[0]
  if (firstEl.type === 'paragraph') {
    if (firstEl.children[0].type === 'image') {
      const image = firstEl.children[0]
      console.log(image)
      thumbnail = image.url
    }
  }

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
        {thumbnail && (
          <img src={thumbnail} alt={`thumbnail for ${post.title}`} />
        )}
      </div>
    </div>
  )
}

export default BlogListItem
