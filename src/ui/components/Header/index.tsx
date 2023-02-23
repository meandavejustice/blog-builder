import './index.css'
import contract from '../../connections/contract'
import pRetry from 'p-retry'
import React, { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useSWR, { useSWRConfig } from 'swr'

const Header = () => {
  const { idx } = useParams()
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  const [error, setError] = useState('')
  const { cache } = useSWRConfig()

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
      return p
    } catch {
      setError('failed to get blog title')
    }
  }

  const cacheData = cache.get('contract:name')
  const freshData = useSWR(
    () => (!cacheData ? 'contract:name' : null),
    getContractName,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  )
  const {
    data: contractName,
    isLoading,
    isValidating
  } = cacheData ? cacheData : freshData

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
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        {idx ? (
          <Link to="/" className="mr-4 flex items-center space-x-4">
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M22.9,8.49H11.15a.25.25,0,0,1-.25-.25v-5a1,1,0,0,0-1.71-.71L.39,11.28a1,1,0,0,0,0,1.41l8.8,8.8a1,1,0,0,0,1.71-.71v-5a.25.25,0,0,1,.25-.25H22.9a1,1,0,0,0,1-1v-5A1,1,0,0,0,22.9,8.49Z"
                fill="currentColor"
              ></path>
            </svg>
            <h1 className="blog-title">{contractName}</h1>
          </Link>
        ) : (
          <h1 className="blog-title">{contractName}</h1>
        )}
      </div>
      <div className="space-x-8 flex">
        <a href="" className="w-8 h-8">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM6.81491 6.10929C8.26146 4.87962 10.0986 4.20525 11.9972 4.20704C13.8963 4.20392 15.7343 4.87735 17.1819 6.10658C18.6295 7.33581 19.5918 9.04047 19.8965 10.9149C20.2012 12.7894 19.8282 14.7111 18.8444 16.3355C17.8607 17.9599 16.3305 19.1808 14.5282 19.7792C14.1225 19.8563 13.9932 19.6201 13.9932 19.4068V17.1947C14.0128 16.9244 13.974 16.6531 13.8797 16.399C13.7854 16.1449 13.6376 15.914 13.4465 15.7219C15.2264 15.5253 17.0946 14.8507 17.0946 11.7798C17.107 10.9856 16.8126 10.2172 16.2727 9.63445C16.5165 8.94536 16.4882 8.18923 16.1935 7.52032C16.1935 7.52032 15.5272 7.30633 13.9988 8.34013C12.6891 7.98072 11.3067 7.98072 9.99702 8.34013C8.47203 7.30564 7.80021 7.52032 7.80021 7.52032C7.50566 8.18933 7.47783 8.9456 7.7224 9.63445C7.18267 10.2168 6.88785 10.9845 6.89911 11.7785C6.89911 14.8409 8.76452 15.526 10.5382 15.7288C10.2478 16.0119 10.0679 16.3893 10.0311 16.7932C9.83509 16.9034 9.61922 16.9736 9.39592 16.9999C9.17263 17.0261 8.94635 17.0078 8.73017 16.9461C8.51399 16.8843 8.3122 16.7803 8.13648 16.64C7.96076 16.4998 7.81458 16.3261 7.70642 16.129C7.57855 15.9077 7.40178 15.7185 7.18961 15.5759C6.97745 15.4334 6.7355 15.3412 6.48226 15.3064C6.48226 15.3064 5.70275 15.2967 6.42807 15.7927C6.85356 16.064 7.168 16.4785 7.31458 16.9613C7.31458 16.9613 7.77381 18.496 9.99702 18.0139C10.0002 18.5179 9.99857 18.9426 9.99759 19.2032C9.99727 19.2885 9.99702 19.3562 9.99702 19.4034C9.99702 19.6146 9.87057 19.8487 9.47178 19.7792C7.66995 19.1809 6.14007 17.9605 5.15628 16.3367C4.1725 14.7129 3.79912 12.7918 4.10306 10.9177C4.40699 9.04358 5.36837 7.33897 6.81491 6.10929Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <button
          id="theme-toggle"
          type="button"
          onClick={() => toggleTheme()}
          className="w-8 h-8"
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M24,12a1,1,0,0,0-1-1H19.09a.51.51,0,0,1-.49-.4,6.83,6.83,0,0,0-.94-2.28.5.5,0,0,1,.06-.63l2.77-2.76a1,1,0,1,0-1.42-1.42L16.31,6.28a.5.5,0,0,1-.63.06A6.83,6.83,0,0,0,13.4,5.4a.5.5,0,0,1-.4-.49V1a1,1,0,0,0-2,0V4.91a.51.51,0,0,1-.4.49,6.83,6.83,0,0,0-2.28.94.5.5,0,0,1-.63-.06L4.93,3.51A1,1,0,0,0,3.51,4.93L6.28,7.69a.5.5,0,0,1,.06.63A6.83,6.83,0,0,0,5.4,10.6a.5.5,0,0,1-.49.4H1a1,1,0,0,0,0,2H4.91a.51.51,0,0,1,.49.4,6.83,6.83,0,0,0,.94,2.28.5.5,0,0,1-.06.63L3.51,19.07a1,1,0,1,0,1.42,1.42l2.76-2.77a.5.5,0,0,1,.63-.06,6.83,6.83,0,0,0,2.28.94.5.5,0,0,1,.4.49V23a1,1,0,0,0,2,0V19.09a.51.51,0,0,1,.4-.49,6.83,6.83,0,0,0,2.28-.94.5.5,0,0,1,.63.06l2.76,2.77a1,1,0,1,0,1.42-1.42l-2.77-2.76a.5.5,0,0,1-.06-.63,6.83,6.83,0,0,0,.94-2.28.5.5,0,0,1,.49-.4H23A1,1,0,0,0,24,12Zm-8.74,2.5A5.76,5.76,0,0,1,9.5,8.74a5.66,5.66,0,0,1,.16-1.31A.49.49,0,0,1,10,7.07a5.36,5.36,0,0,1,1.8-.31,5.47,5.47,0,0,1,5.46,5.46,5.36,5.36,0,0,1-.31,1.8.49.49,0,0,1-.35.32A5.53,5.53,0,0,1,15.26,14.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Header
