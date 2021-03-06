/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MerkleDistributorInterface extends ethers.utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "claim(uint256,address,uint256,bytes32[])": FunctionFragment;
    "isClaimed(uint256)": FunctionFragment;
    "merkleRoot()": FunctionFragment;
    "nominateNewOwner(address)": FunctionFragment;
    "nominatedOwner()": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerUnlockTime()": FunctionFragment;
    "recoverERC20(address,uint256)": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [BigNumberish, string, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isClaimed",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nominateNewOwner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "nominatedOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownerUnlockTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recoverERC20",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nominateNewOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nominatedOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownerUnlockTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recoverERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {
    "Claimed(uint256,address,uint256)": EventFragment;
    "OwnerChanged(address,address)": EventFragment;
    "OwnerNominated(address)": EventFragment;
    "Recovered(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Recovered"): EventFragment;
}

export class MerkleDistributor extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MerkleDistributorInterface;

  functions: {
    acceptOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "acceptOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    claim(
      index: BigNumberish,
      account: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claim(uint256,address,uint256,bytes32[])"(
      index: BigNumberish,
      account: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    isClaimed(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isClaimed(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    merkleRoot(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    nominateNewOwner(
      _owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "nominateNewOwner(address)"(
      _owner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "nominatedOwner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    owner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "owner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    ownerUnlockTime(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "ownerUnlockTime()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "recoverERC20(address,uint256)"(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "token()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;
  };

  acceptOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "acceptOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  claim(
    index: BigNumberish,
    account: string,
    amount: BigNumberish,
    merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claim(uint256,address,uint256,bytes32[])"(
    index: BigNumberish,
    account: string,
    amount: BigNumberish,
    merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  isClaimed(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  "isClaimed(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  merkleRoot(overrides?: CallOverrides): Promise<string>;

  "merkleRoot()"(overrides?: CallOverrides): Promise<string>;

  nominateNewOwner(
    _owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "nominateNewOwner(address)"(
    _owner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  "nominatedOwner()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  ownerUnlockTime(overrides?: CallOverrides): Promise<BigNumber>;

  "ownerUnlockTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  recoverERC20(
    tokenAddress: string,
    tokenAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "recoverERC20(address,uint256)"(
    tokenAddress: string,
    tokenAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    "acceptOwnership()"(overrides?: CallOverrides): Promise<void>;

    claim(
      index: BigNumberish,
      account: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    "claim(uint256,address,uint256,bytes32[])"(
      index: BigNumberish,
      account: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    isClaimed(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    "isClaimed(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    merkleRoot(overrides?: CallOverrides): Promise<string>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<string>;

    nominateNewOwner(_owner: string, overrides?: CallOverrides): Promise<void>;

    "nominateNewOwner(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    "nominatedOwner()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    ownerUnlockTime(overrides?: CallOverrides): Promise<BigNumber>;

    "ownerUnlockTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "recoverERC20(address,uint256)"(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    Claimed(index: null, account: null, amount: null): EventFilter;

    OwnerChanged(oldOwner: null, newOwner: null): EventFilter;

    OwnerNominated(newOwner: null): EventFilter;

    Recovered(token: null, amount: null): EventFilter;
  };

  estimateGas: {
    acceptOwnership(overrides?: Overrides): Promise<BigNumber>;

    "acceptOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    claim(
      index: BigNumberish,
      account: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "claim(uint256,address,uint256,bytes32[])"(
      index: BigNumberish,
      account: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    isClaimed(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isClaimed(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleRoot(overrides?: CallOverrides): Promise<BigNumber>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(_owner: string, overrides?: Overrides): Promise<BigNumber>;

    "nominateNewOwner(address)"(
      _owner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "nominatedOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    ownerUnlockTime(overrides?: CallOverrides): Promise<BigNumber>;

    "ownerUnlockTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "recoverERC20(address,uint256)"(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "acceptOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    claim(
      index: BigNumberish,
      account: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claim(uint256,address,uint256,bytes32[])"(
      index: BigNumberish,
      account: string,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    isClaimed(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isClaimed(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    merkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "nominateNewOwner(address)"(
      _owner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nominatedOwner()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerUnlockTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ownerUnlockTime()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recoverERC20(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "recoverERC20(address,uint256)"(
      tokenAddress: string,
      tokenAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
