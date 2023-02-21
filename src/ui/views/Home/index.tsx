import './index.css'
import BlogListItem from '../../components/BlogListItem'
import BlogListSkeleton from '../../components/BlogListSkeleton'
import Header from '../../components/Header'
import contract from '../../connections/contract'
import pRetry from 'p-retry'
import React, { useMemo, useState } from 'react'
import { PostStructOutput } from 'src/ui/contracts/contracts/Blog'

const Home = () => {
  const [error, setError] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [postList, setPostList] = useState<PostStructOutput[]>([])

  const getPostList = async () => {
    const response = await contract.getList()
    return response
  }

  useMemo(() => {
    const getList = async () => {
      try {
        const list = await pRetry(getPostList, { retries: 5 })
        if (list.length) {
          setPostList(list)
          setLoaded(true)
        }
      } catch {
        setError('Something went wrong.')
      }
    }
    getList()
  }, [])

  return (
    <div className="home-view view">
      <div className="container min-h-screen">
        <Header />
        <div className="grid">
          {loaded ? (
            postList &&
            postList.map((post, idx) => (
              <BlogListItem
                post={post as PostStructOutput}
                idx={idx}
                key={`post-${idx}`}
              />
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
