import './index.css'
import fm from '../../../plugins/frontmatter'
import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import remarkFrontmatter from 'remark-frontmatter'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import { PostItem } from 'src/ui/types'
import { unified } from 'unified'

const BlogListItem = ({ post }: { post: PostItem }) => {
  const [markd, setMarkd] = useState('')
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [thumbnail, setThumbnail] = useState('')

  // fetch the markdown
  useMemo(() => {
    const getMarkdown = async () => {
      fetch(post.content)
        .then((response) => response.text())
        .then((result) => {
          setMarkd(result)
        })
    }
    getMarkdown()
  }, [])

  // get metadata/frontmatter
  useMemo(() => {
    if (!markd) return
    const frontMatter = unified()
      .use(remarkParse)
      .use(remarkStringify)
      .use(remarkFrontmatter)
      .use(fm)
      .process(markd)
    frontMatter.then((res: any) => {
      if (res.data.matter.title) setTitle(res.data.matter.title)
      if (res.data.matter.excerpt) setExcerpt(res.data.matter.excerpt)
      if (res.data.matter.thumbnail) setThumbnail(res.data.matter.thumbnail)
    })
  }, [markd])

  return (
    <div className="blog-list-item">
      <div className="blog-list-item__content">
        <p className="blog-list-item__date">{post.published}</p>
        <h3 className="blog-list-item__title font-bold">
          <Link
            to={`/post/${post.cid}`}
            className="hover:underline underline-offset-3"
          >
            {title}
          </Link>
        </h3>
        <p className="blog-list-item__author mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gray-200"></span>
          {post.author}
        </p>
        <div className="blog-list-item__excerpt">{excerpt}</div>
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
