import './index.css'
import { getMarkdown } from '../../../ui/utils'
import BlogListItem from '../../components/BlogListItem'
import BlogListSkeleton from '../../components/BlogListSkeleton'
import Header from '../../components/Header'
import contract from '../../connections/contract'
import pRetry from 'p-retry'
import React from 'react'
import useSWRImmutable from 'swr/immutable'

const Home = () => {
  const getPostList = async () => {
    const response = await contract.getList()
    const posts = await Promise.all(
      response.map(async (res) => {
        const markdown = await getMarkdown(res.url)
        const postData = { post: res, md: markdown as any }
        return postData
      })
    )
    return posts
  }

  const getList = async () => {
    try {
      const res = await pRetry(getPostList, { retries: 5 })
      if (!res) {
        throw new Error("Couldn't fetch getPostList")
      }
      return res
    } catch (error) {
      console.log(error)
    }
  }

  const swrData = useSWRImmutable('contract:allPosts', getList)

  const { data, isLoading } = swrData

  return (
    <div className="home-view view">
      <div className="container min-h-screen">
        <Header />
        <div className="grid">
          {!isLoading ? (
            data &&
            data.map((post: any, idx: number) => (
              <BlogListItem post={post} idx={idx} key={`post-${idx}`} />
            ))
          ) : (
            <>
              <BlogListSkeleton />
              <BlogListSkeleton />
              <BlogListSkeleton />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
