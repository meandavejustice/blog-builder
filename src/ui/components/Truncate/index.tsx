import './index.css'
import { getHostname, transformForShare } from '../../utils'
import React from 'react'

const Truncate = ({ text, cid }: { text: string; cid?: boolean }) => {
  const string = cid ? getHostname(text) : text
  const first = string?.substring(0, string.length / 3)
  const last = string?.substring(string.length / 3)

  if (cid) {
    return (
      <a href={transformForShare(text)}>
        <span className="truncate-middle">
          <span>{first}</span>
          <span>{last}</span>
        </span>
      </a>
    )
  } else {
    return (
      <span className="truncate-middle">
        <span>{first}</span>
        <span>{last}</span>
      </span>
    )
  }
}

export default Truncate
