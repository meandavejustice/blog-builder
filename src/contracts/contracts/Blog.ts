/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils
} from 'ethers'
import type {
  FunctionFragment,
  Result,
  EventFragment
} from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue
} from '../common'

export type InputPostStruct = {
  cid: PromiseOrValue<string>
  title: PromiseOrValue<string>
  tags: PromiseOrValue<string>[]
}

export type InputPostStructOutput = [string, string, string[]] & {
  cid: string
  title: string
  tags: string[]
}

export type PostStruct = {
  cid: PromiseOrValue<string>
  title: PromiseOrValue<string>
  tags: PromiseOrValue<string>[]
  author: PromiseOrValue<string>
  addDate: PromiseOrValue<BigNumberish>
}

export type PostStructOutput = [string, string, string[], string, BigNumber] & {
  cid: string
  title: string
  tags: string[]
  author: string
  addDate: BigNumber
}

export interface BlogInterface extends utils.Interface {
  functions: {
    'DEFAULT_ADMIN_ROLE()': FunctionFragment
    'add((string,string,string[]))': FunctionFragment
    'addOwner(address)': FunctionFragment
    'getList()': FunctionFragment
    'getListLength()': FunctionFragment
    'getListPaged(uint256,uint256)': FunctionFragment
    'getOwners()': FunctionFragment
    'getPost(uint256)': FunctionFragment
    'getRoleAdmin(bytes32)': FunctionFragment
    'getRoleMember(bytes32,uint256)': FunctionFragment
    'getRoleMemberCount(bytes32)': FunctionFragment
    'grantRole(bytes32,address)': FunctionFragment
    'hasRole(bytes32,address)': FunctionFragment
    'isOwner(address)': FunctionFragment
    'name()': FunctionFragment
    'publicKey()': FunctionFragment
    'removeOwner(address)': FunctionFragment
    'renounceOwner()': FunctionFragment
    'renounceRole(bytes32,address)': FunctionFragment
    'revokeRole(bytes32,address)': FunctionFragment
    'supportsInterface(bytes4)': FunctionFragment
    'swapOwner(address)': FunctionFragment
    'version()': FunctionFragment
  }

  getFunction(
    nameOrSignatureOrTopic:
      | 'DEFAULT_ADMIN_ROLE'
      | 'add'
      | 'addOwner'
      | 'getList'
      | 'getListLength'
      | 'getListPaged'
      | 'getOwners'
      | 'getPost'
      | 'getRoleAdmin'
      | 'getRoleMember'
      | 'getRoleMemberCount'
      | 'grantRole'
      | 'hasRole'
      | 'isOwner'
      | 'name'
      | 'publicKey'
      | 'removeOwner'
      | 'renounceOwner'
      | 'renounceRole'
      | 'revokeRole'
      | 'supportsInterface'
      | 'swapOwner'
      | 'version'
  ): FunctionFragment

  encodeFunctionData(
    functionFragment: 'DEFAULT_ADMIN_ROLE',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'add', values: [InputPostStruct]): string
  encodeFunctionData(
    functionFragment: 'addOwner',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(functionFragment: 'getList', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'getListLength',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'getListPaged',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(functionFragment: 'getOwners', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'getPost',
    values: [PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'getRoleAdmin',
    values: [PromiseOrValue<BytesLike>]
  ): string
  encodeFunctionData(
    functionFragment: 'getRoleMember',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string
  encodeFunctionData(
    functionFragment: 'getRoleMemberCount',
    values: [PromiseOrValue<BytesLike>]
  ): string
  encodeFunctionData(
    functionFragment: 'grantRole',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'hasRole',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'isOwner',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(functionFragment: 'name', values?: undefined): string
  encodeFunctionData(functionFragment: 'publicKey', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'removeOwner',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'renounceOwner',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'renounceRole',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'revokeRole',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string
  encodeFunctionData(
    functionFragment: 'supportsInterface',
    values: [PromiseOrValue<BytesLike>]
  ): string
  encodeFunctionData(
    functionFragment: 'swapOwner',
    values: [PromiseOrValue<string>]
  ): string
  encodeFunctionData(functionFragment: 'version', values?: undefined): string

  decodeFunctionResult(
    functionFragment: 'DEFAULT_ADMIN_ROLE',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'add', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'addOwner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getList', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'getListLength',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getListPaged',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'getOwners', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'getPost', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'getRoleAdmin',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getRoleMember',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getRoleMemberCount',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'grantRole', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'hasRole', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isOwner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'publicKey', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'removeOwner', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'renounceOwner',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'renounceRole',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'revokeRole', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'supportsInterface',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'swapOwner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'version', data: BytesLike): Result

  events: {
    'Added(uint256)': EventFragment
    'RoleAdminChanged(bytes32,bytes32,bytes32)': EventFragment
    'RoleGranted(bytes32,address,address)': EventFragment
    'RoleRevoked(bytes32,address,address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'Added'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RoleAdminChanged'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RoleGranted'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RoleRevoked'): EventFragment
}

export interface AddedEventObject {
  listNumber: BigNumber
}
export type AddedEvent = TypedEvent<[BigNumber], AddedEventObject>

export type AddedEventFilter = TypedEventFilter<AddedEvent>

export interface RoleAdminChangedEventObject {
  role: string
  previousAdminRole: string
  newAdminRole: string
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>

export interface RoleGrantedEventObject {
  role: string
  account: string
  sender: string
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>

export interface RoleRevokedEventObject {
  role: string
  account: string
  sender: string
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>

export interface Blog extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: BlogInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>

    add(
      _info: InputPostStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    addOwner(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    getList(overrides?: CallOverrides): Promise<[PostStructOutput[]]>

    getListLength(overrides?: CallOverrides): Promise<[BigNumber]>

    getListPaged(
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[PostStructOutput[]]>

    getOwners(overrides?: CallOverrides): Promise<[string[]]>

    getPost(
      idx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[PostStructOutput]>

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>

    getRoleMember(
      role: PromiseOrValue<BytesLike>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>

    getRoleMemberCount(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>

    isOwner(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>

    name(overrides?: CallOverrides): Promise<[string]>

    publicKey(overrides?: CallOverrides): Promise<[string]>

    removeOwner(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    renounceOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>

    swapOwner(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>

    version(overrides?: CallOverrides): Promise<[string]>
  }

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>

  add(
    _info: InputPostStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  addOwner(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  getList(overrides?: CallOverrides): Promise<PostStructOutput[]>

  getListLength(overrides?: CallOverrides): Promise<BigNumber>

  getListPaged(
    offset: PromiseOrValue<BigNumberish>,
    limit: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<PostStructOutput[]>

  getOwners(overrides?: CallOverrides): Promise<string[]>

  getPost(
    idx: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<PostStructOutput>

  getRoleAdmin(
    role: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>

  getRoleMember(
    role: PromiseOrValue<BytesLike>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>

  getRoleMemberCount(
    role: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  grantRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  hasRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>

  isOwner(
    _address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>

  name(overrides?: CallOverrides): Promise<string>

  publicKey(overrides?: CallOverrides): Promise<string>

  removeOwner(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  renounceOwner(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  renounceRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  revokeRole(
    role: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>

  swapOwner(
    _address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>

  version(overrides?: CallOverrides): Promise<string>

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>

    add(_info: InputPostStruct, overrides?: CallOverrides): Promise<BigNumber>

    addOwner(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>

    getList(overrides?: CallOverrides): Promise<PostStructOutput[]>

    getListLength(overrides?: CallOverrides): Promise<BigNumber>

    getListPaged(
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PostStructOutput[]>

    getOwners(overrides?: CallOverrides): Promise<string[]>

    getPost(
      idx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PostStructOutput>

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>

    getRoleMember(
      role: PromiseOrValue<BytesLike>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>

    getRoleMemberCount(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>

    isOwner(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>

    name(overrides?: CallOverrides): Promise<string>

    publicKey(overrides?: CallOverrides): Promise<string>

    removeOwner(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>

    renounceOwner(overrides?: CallOverrides): Promise<void>

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>

    swapOwner(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>

    version(overrides?: CallOverrides): Promise<string>
  }

  filters: {
    'Added(uint256)'(listNumber?: null): AddedEventFilter
    Added(listNumber?: null): AddedEventFilter

    'RoleAdminChanged(bytes32,bytes32,bytes32)'(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter
    RoleAdminChanged(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter

    'RoleGranted(bytes32,address,address)'(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter
    RoleGranted(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter

    'RoleRevoked(bytes32,address,address)'(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter
    RoleRevoked(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter
  }

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>

    add(
      _info: InputPostStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    addOwner(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    getList(overrides?: CallOverrides): Promise<BigNumber>

    getListLength(overrides?: CallOverrides): Promise<BigNumber>

    getListPaged(
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getOwners(overrides?: CallOverrides): Promise<BigNumber>

    getPost(
      idx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getRoleMember(
      role: PromiseOrValue<BytesLike>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getRoleMemberCount(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    isOwner(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    name(overrides?: CallOverrides): Promise<BigNumber>

    publicKey(overrides?: CallOverrides): Promise<BigNumber>

    removeOwner(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    renounceOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    swapOwner(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>

    version(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>

    add(
      _info: InputPostStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    addOwner(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    getList(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getListLength(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getListPaged(
      offset: PromiseOrValue<BigNumberish>,
      limit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getOwners(overrides?: CallOverrides): Promise<PopulatedTransaction>

    getPost(
      idx: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getRoleAdmin(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getRoleMember(
      role: PromiseOrValue<BytesLike>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getRoleMemberCount(
      role: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    grantRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    hasRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    isOwner(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>

    publicKey(overrides?: CallOverrides): Promise<PopulatedTransaction>

    removeOwner(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    renounceOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    renounceRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    revokeRole(
      role: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    swapOwner(
      _address: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
