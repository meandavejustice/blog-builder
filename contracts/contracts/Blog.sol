//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

import {AccessControlEnumerable} from '@openzeppelin/contracts/access/AccessControlEnumerable.sol';
import {Context} from '@openzeppelin/contracts/utils/Context.sol';
import {Math} from '@openzeppelin/contracts/utils/math/Math.sol';

// how we store it internally
struct Post {
  string cid;
  string title;
  string[] tags;
  address author;
  uint addDate;
}

struct InputPost {
  string cid;
  string title;
  string[] tags;
}

contract Blog is AccessControlEnumerable {
  Post[] private posts;
  string public publicKey;
  string public name;
  string public version = '1.0.0';

  event Added(uint listNumber);

  constructor(string memory _name) {
    name = _name;

    _grantRole(DEFAULT_ADMIN_ROLE, _msgSender());
  }

  // post write functions
  function add(
    InputPost memory _info
  ) public onlyRole(DEFAULT_ADMIN_ROLE) returns (uint listNumber) {
    Post memory newPost = Post({
      cid: _info.cid,
      title: _info.title,
      tags: _info.tags,
      author: _msgSender(),
      // solhint-disable-next-line not-rely-on-time
      addDate: block.timestamp
    });
    posts.push(newPost);
    emit Added(posts.length - 1);
    return posts.length - 1;
  }

  function getPost(uint idx) public view returns (Post memory) {
    return posts[idx];
  }

  // list access functions
  function getListLength() public view returns (uint) {
    return posts.length;
  }

  function getList() public view returns (Post[] memory) {
    return posts;
  }

  function getListPaged(
    uint offset,
    uint limit
  ) public view returns (Post[] memory) {
    require(offset >= 0, 'Invalid offset.');
    uint listLength = posts.length;
    uint startReadIdx = offset == 0 ? offset : offset + 1;
    if (startReadIdx > listLength || limit <= 0) {
      return new Post[](0);
    }

    uint outLen = Math.min(listLength - startReadIdx, limit);
    Post[] memory postOut = new Post[](outLen);
    for (uint writeIdx; writeIdx < outLen; writeIdx++) {
      uint readIdx = startReadIdx + writeIdx;
      postOut[writeIdx] = postOut[readIdx];
    }
    return postOut;
  }

  // role functions
  function getOwners() public view virtual returns (address[] memory) {
    uint len = getRoleMemberCount(DEFAULT_ADMIN_ROLE);
    address[] memory addOut = new address[](len);
    for (uint i; i < len; i++) {
      addOut[i] = getRoleMember(DEFAULT_ADMIN_ROLE, i);
    }
    return addOut;
  }

  function isOwner(address _address) public view virtual returns (bool) {
    return hasRole(DEFAULT_ADMIN_ROLE, _address);
  }

  function addOwner(
    address _address
  ) public virtual onlyRole(DEFAULT_ADMIN_ROLE) {
    grantRole(DEFAULT_ADMIN_ROLE, _address);
  }

  function removeOwner(
    address _address
  ) public virtual onlyRole(DEFAULT_ADMIN_ROLE) {
    revokeRole(DEFAULT_ADMIN_ROLE, _address);
  }

  function swapOwner(
    address _address
  ) public virtual onlyRole(DEFAULT_ADMIN_ROLE) {
    grantRole(DEFAULT_ADMIN_ROLE, _address);
    renounceRole(DEFAULT_ADMIN_ROLE, _msgSender());
  }

  function renounceOwner() public virtual onlyRole(DEFAULT_ADMIN_ROLE) {
    renounceRole(DEFAULT_ADMIN_ROLE, _msgSender());
  }
}
