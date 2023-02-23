import 'normalize.css'
import './index.css'
import HomeView from './views/Home'
import PostView from './views/Post'
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Cache, SWRConfig } from 'swr'

const rootEl = document.getElementById('root')
if (!rootEl) throw new Error('No root element found')
const root = createRoot(rootEl)

function localStorageProvider() {
  // When initializing, we restore the data from `localStorage` into a map.
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'))

  // Before unloading the app, we write back all the data into `localStorage`.
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()))
    localStorage.setItem('app-cache', appCache)
  })

  // We still use the map for write & read for performance.
  return map as Cache
}

const RootView = (
  <StrictMode>
    <SWRConfig value={{ provider: localStorageProvider }}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/post/:idx" element={<PostView />} />
        </Routes>
      </HashRouter>
    </SWRConfig>
  </StrictMode>
)

root.render(RootView)

export default root
