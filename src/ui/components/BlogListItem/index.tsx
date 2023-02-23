import './index.css'
import contract from '../../../ui/connections/contract'
import { getMarkdown, parseDateFromBigInt } from '../../utils'
import pRetry from 'p-retry'
import React from 'react'
import { Link } from 'react-router-dom'
import useSWR, { useSWRConfig } from 'swr'

const BlogListItem = ({ post, idx }: { post: any; idx: number }) => {
  const { cache } = useSWRConfig()

  const getPostFromContract = async () => {
    if (!idx) return
    const response = await contract.getPost(idx)
    const markdown = await getMarkdown(response.url)
    const postData = await { post: response, md: markdown as any }
    return postData
  }
  getPostFromContract()

  const getPost = async () => {
    try {
      const p = await pRetry(getPostFromContract, { retries: 5 })
      return p
    } catch {
      console.log('something went wrong')
    }
  }

  const cacheData = cache.get('contract:post')
  const freshData = useSWR(
    () => (!cacheData ? 'contract:post' : null),
    getPost,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  )
  const { data, isLoading, isValidating } = cacheData ? cacheData : freshData
  const { title, excerpt, thumbnail } = data.md.data.matter
  const postData = data.post

  return (
    <div className="blog-list-item">
      <div className="blog-list-item__content">
        <p className="blog-list-item__date">
          {parseDateFromBigInt(postData[2])}
        </p>
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
          {postData[1]}
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
