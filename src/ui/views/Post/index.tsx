import './index.css'
import fm from '../../../plugins/frontmatter'
import Header from '../../components/Header'
import { posts } from '../../data/posts'
import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import rehypeStringify from 'rehype-stringify'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkStringify from 'remark-stringify'
import { unified } from 'unified'

const PostView = () => {
  const { cid } = useParams()
  const [markd, setMarkd] = useState('')
  const [title, setTitle] = useState('')
  const [, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const post = posts.find((post) => post.cid === cid)

  // fetch the markdown
  useMemo(() => {
    if (!post) return
    const getMarkdown = async () => {
      fetch(post.content)
        .then((response) => response.text())
        .then((result) => {
          setMarkd(result)
        })
    }
    getMarkdown()
  }, [post])

  // get parsed markdown content
  useMemo(() => {
    if (!markd) return
    const md = unified()
      .use(remarkParse)
      .use(remarkFrontmatter)
      .use(remarkRehype)
      .use(remarkGfm)
      .use(rehypeStringify)
      .process(markd)
    md.then((res) => {
      console.log(res.value)
      if (res.value) setContent(res.value as any)
    })
  }, [markd])

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
    })
  }, [markd])

  if (post) {
    return (
      <div className="post-view view ">
        <div className="container min-h-screen">
          <Header />
          <div className="blog-layout">
            <div className="blog-main">
              <h2 className="blog-entry__title font-bold max-w-5xl mb-4">
                {title}
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

              <div className="blog-entry-item__content pb-24 py-6">
                <div
                  className="prose prose-lg dark:prose-invert blog-entry__content"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
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
