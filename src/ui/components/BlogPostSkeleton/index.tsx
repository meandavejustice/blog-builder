import Header from '../Header'
import React from 'react'
const BlogPostSkeleton = () => {
  return (
    <div className="post-view view ">
      <div className="container min-h-screen">
        <Header />
        <div className="">
          <div className="animate-pulse overflow-hidden">
            <div className="blog-layout">
              <div className="blog-main">
                <div className="blog-list-item__content space-y-4">
                  <p className="blog-list-item__title font-bold w-full h-12 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></p>
                  <p className="blog-list-item__title font-bold w-1/2 h-12 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></p>
                  <p className="blog-list-item__date w-16 h-2 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></p>
                  <p className="blog-list-item__author mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-full"></span>
                    <span className="w-24 h-3 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></span>
                  </p>
                  <div className="blog-list-item__excerpt w-full h-3 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></div>
                  <div className="blog-list-item__excerpt w-full h-3 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></div>
                  <div className="blog-list-item__excerpt w-3/4 h-3 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></div>
                  <div className="blog-list-item__excerpt w-full h-3 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></div>
                  <div className="blog-list-item__excerpt w-full h-3 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></div>
                  <div className="blog-list-item__excerpt w-3/4 h-3 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></div>
                </div>
              </div>
              <div className="blog-aside space-y-4">
                <p className="blog-list-item__author mb-4 flex items-center gap-2">
                  <span className="w-12 h-12 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-full"></span>
                  <span className="w-24 h-3 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></span>
                </p>
                <div className="blog-list-item__excerpt w-full h-3 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></div>
                <div className="blog-list-item__excerpt w-full h-3 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></div>
                <div className="blog-list-item__excerpt w-3/4 h-3 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostSkeleton
