import { AvatarResolver } from '@ensdomains/ens-avatar'
import { StaticJsonRpcProvider } from '@ethersproject/providers'
import React from 'react'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import useSWR from 'swr'
const provider = new StaticJsonRpcProvider('https://ethereum.publicnode.com')

const Avatar = ({
  authorAddress,
  size = 48
}: {
  authorAddress: string
  size?: number
}) => {
  const diameter = size ? size : 48
  const getAvatar = async () => {
    const avt = new AvatarResolver(provider)
    const avatarURI = await avt.getAvatar(authorAddress, {})
    return avatarURI
  }

  const swrData = useSWR('getAvatar', getAvatar)
  const { data: avatar, isLoading } = swrData

  return avatar && !isLoading ? (
    <img
      src={avatar}
      className="w-height h-full rounded-full"
      alt="avatarENS"
    />
  ) : (
    <Jazzicon diameter={diameter} seed={jsNumberForAddress(authorAddress)} />
  )
}

export default Avatar
