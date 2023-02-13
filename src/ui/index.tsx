import 'normalize.css'
import './index.css'
import HomeView from './views/Home'
import PostView from './views/Post'
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('No root element found')
const root = createRoot(rootEl)

const RootView = (
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/post/:cid" element={<PostView />} />
      </Routes>
    </HashRouter>
  </StrictMode>
)

root.render(RootView)

export default root
