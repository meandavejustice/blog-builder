import 'normalize.css'
import './index.css'
import HomeView from './views/Home'
import PostView from './views/Post'
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('No root element found')
const root = createRoot(rootEl)

const router = createHashRouter([
  {
    path: '/',
    element: <HomeView />,
    children: [
      {
        path: 'post/:cid',
        element: <PostView /> // TODO: add a view for a post
      },
      {
        path: 'post',
        element: <PostView />, // TODO: add a view for a post
        loader: undefined // TODO: add a loader for post
      }
    ]
  }
])

const RootView = (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

root.render(RootView)

export default root
