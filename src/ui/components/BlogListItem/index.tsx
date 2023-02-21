import './index.css'
import fm from '../../../plugins/frontmatter'
import { PostStructOutput } from '../../contracts/contracts/Blog'
import { transformForShare } from '../../utils'
import dayjs from 'dayjs'
import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import remarkFrontmatter from 'remark-frontmatter'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import { unified } from 'unified'

const BlogListItem = ({
  post,
  idx
}: {
  post: PostStructOutput
  idx: number
}) => {
  const [formattedPost, setFormattedPost] = useState({} as any)

  const parsePost = (markdown: string) => {
    const frontMatter = unified()
      .use(remarkParse)
      .use(remarkStringify)
      .use(remarkFrontmatter)
      .use(fm)
      .process(markdown)
    frontMatter.then((res: any) => {
      setFormattedPost({
        title: res.data.matter.title,
        excerpt: res.data.matter.excerpt,
        thumbnail: res.data.matter.thumbnail,
        content: res,
        author: post.author,
        published: dayjs(post.published.toString()).toString()
      })
    })
  }

  useMemo(() => {
    const getMarkdown = async () => {
      const res = await fetch(transformForShare(post.url))
      const txt = await res.text()
      const formatPost = parsePost(txt)
      setFormattedPost(formatPost)
    }
    getMarkdown()
  }, [post.url])

  if (!formattedPost) return <></>

  const { title, excerpt, thumbnail, published, author } = formattedPost

  return (
    <div className="blog-list-item">
      <div className="blog-list-item__content">
        <p className="blog-list-item__date">{published}</p>
        <h3 className="blog-list-item__title font-bold">
          <Link
            to={`/post/${idx}`}
            className="hover:underline underline-offset-3"
          >
            {title}
          </Link>
        </h3>
        <p className="blog-list-item__author mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gray-200"></span>
          {author}
        </p>
        <div className="blog-list-item__excerpt">{excerpt}</div>
      </div>
      <div className="blog-list-item__thumb">
        {thumbnail && <img src={thumbnail} alt="thumbnail for ..." />}
      </div>
    </div>
  )
}

export default BlogListItem
