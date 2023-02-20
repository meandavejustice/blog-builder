import { CONTRACT_ADDRESS, RPC_URL } from '../config'
import { Blog__factory } from '../contracts'
import { JsonRpcProvider } from '@ethersproject/providers'

export default Blog__factory.connect(
  CONTRACT_ADDRESS,
  new JsonRpcProvider(RPC_URL)
)
