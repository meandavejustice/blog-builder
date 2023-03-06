import './index.css'
import contract from '../../connections/contract'
import pRetry from 'p-retry'
import React, { useMemo, useState } from 'react'
import { ArrowLeft, GitHub, Moon, Sun } from 'react-feather'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'
import useSWRImmutable from 'swr/immutable'

const Header = () => {
  const { idx } = useParams()
  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  const getNameOfContract = async () => {
    const response = await contract.name()
    return response
  }

  const getContractName = async () => {
    try {
      const p = await pRetry(getNameOfContract, { retries: 5 })
      if (!p) {
        throw new Error("Couldn't fetch contract.name")
      }
      return p
    } catch (error) {
      console.error(error)
    }
  }

  const swrData = useSWRImmutable('contract:name', getContractName)

  const { data: contractName } = swrData

  useMemo(() => {
    if (theme) {
      document.body.className = theme
    } else {
      if (
        !('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [theme])

  return (
    <>
      <Helmet>
        <title>{contractName}</title>
        <meta name="description" content="IPFS Onchain Blog Example" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IPFS" />
        <meta name="twitter:creator" content="@IPFS" />
        <meta property="og:site_name" content={contractName} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        {/* <meta property="fb:app_id" content="ID_APP_FACEBOOK" /> */}
      </Helmet>

      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {idx ? (
            <Link to="/" className="mr-4 flex items-center space-x-4">
              <ArrowLeft />
              <h1 className="blog-title">{contractName}</h1>
            </Link>
          ) : (
            <h1 className="blog-title">{contractName}</h1>
          )}
        </div>
        <div className="space-x-10 flex items-center">
          <button
            id="theme-toggle"
            type="button"
            onClick={() => toggleTheme()}
            className=""
          >
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>
          <a href="" className="flex items-center gap-2 tracking-wide">
            <GitHub /> Github
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
