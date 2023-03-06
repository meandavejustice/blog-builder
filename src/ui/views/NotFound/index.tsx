import './index.css'
import Header from '../../components/Header'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="post-view view ">
      <div className="container min-h-screen">
        <>
          <Header />
          <div className="h-96 w-full max-h-full flex flex-col justify-center items-center">
            <h1 className="mb-4 text-4xl">Ooops! There is Nothing Here.</h1>
            <p className="text-lg">
              Try going back to the home page and browsing newer posts.
            </p>
            <Link to="/" className="btn mt-10">
              Explore New Posts
            </Link>
          </div>
        </>
      </div>
    </div>
  )
}

export default NotFound
