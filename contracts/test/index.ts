import { expect } from 'chai'
import { ethers, network } from 'hardhat'
import { Blog, Blog__factory } from '../typechain-types'

let contract: Blog

describe('Blog', function () {
  before(async function () {
    await network.provider.send('hardhat_reset')
  })
  it('should deploy', async () => {
    const [signer] = await ethers.getSigners()
    contract = await new Blog__factory()
      .connect(signer)
      .deploy('Test')
    await contract.deployed()
    expect(contract.address).to.exist

    expect(await contract.getOwners()).to.eql([signer.address])
  })

  it('should add', async () => {
    const payload = {
      cid: 'dummy-cid',
      title: 'Test Post',
      tags: []
    }
    const tx = await contract.add(payload)

    // wait until the transaction is mined
    const receipt = await tx.wait()

    expect(receipt.events?.[0].event).to.equal('Added')
    expect(receipt.events?.[0].args?.[0]).to.equal(0)

    expect(await contract.getListLength()).to.equal(1)
    expect((await contract.getPost(0)).cid).to.equal(payload.cid)

    const list = await contract.getList()
    expect(list.length).to.equal(1)
    expect(list[0].cid).to.equal(payload.cid)
  })
})
