import { ethers } from 'ethers';
import { AbiItem } from 'web3-utils';

export type IProvider = ethers.providers.Provider;

export type IChainId = 1 | 5 | 1337 | 97;

export type IABI = {
  _format: string;
  contractName: string;
  sourceName: string;
  abi: AbiItem[];
};

export type IError = {
  message?: string;
  errorArgs?: string[];
};

export type IContract = ethers.Contract;

export type ISigner = ethers.Signer;

export type IContractFactory = ethers.ContractFactory;
