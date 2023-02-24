import { AvatarResolver } from '@ensdomains/ens-avatar'
import { StaticJsonRpcProvider } from '@ethersproject/providers'
import React, { useMemo, useState } from 'react'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

const provider = new StaticJsonRpcProvider('https://ethereum.publicnode.com')

const Avatar = ({
  authorAddress,
  size = 48
}: {
  authorAddress: any
  size?: number
}) => {
  const diameter = size ? size : 48
  const [avatar, setAvatar] = useState('')

  useMemo(() => {
    if (!authorAddress) return
    const getAvatar = async () => {
      const avt = new AvatarResolver(provider)
      const avatarURI = await avt.getAvatar(authorAddress, {
        /* jsdomWindow: jsdom (on nodejs) */
      })
      if (avatarURI) {
        setAvatar(avatarURI)
      }
    }
    getAvatar()
  }, [authorAddress])

  return avatar ? (
    <img src={avatar} className="w-height h-full" alt="avatarENS" />
  ) : (
    <Jazzicon diameter={diameter} seed={jsNumberForAddress(authorAddress)} />
  )
}

export default Avatar
