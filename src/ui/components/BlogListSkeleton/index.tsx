import React from 'react'
const BlogListSkeleton = () => {
  return (
    <div className="blog-list-item animate-pulse overflow-hidden">
      <div className="blog-list-item__content space-y-4">
        <p className="blog-list-item__date w-16 h-2 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></p>
        <p className="blog-list-item__title font-bold w-full h-12 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></p>
        <p className="blog-list-item__author mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></span>
          <span className="w-24 h-3 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></span>
        </p>
        <div className="blog-list-item__excerpt w-full h-5 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></div>
        <div className="blog-list-item__excerpt w-full h-5 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></div>
        <div className="blog-list-item__excerpt w-3/4 h-5 bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></div>
      </div>
      <div className="blog-list-item__thumb h-full bg-teal-700 dark:bg-teal-200 opacity-40 rounded-md"></div>
    </div>
  )
}

export default BlogListSkeleton
