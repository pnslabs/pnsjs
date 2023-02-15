import { ethers } from 'ethers';
import { IProvider } from '../types';

/**
 * This is a contract object that is used to interact with the smart contract.
 * @param {string} provider - The provider to use for the contract.
 * @param {string} contractAddress - The address of the contract.
 * @param {array} abi - The abi of the contract.
 */

export const Contract = (
  provider: IProvider,
  contractAddress: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  abi: Array<any>
) => {
  return new ethers.Contract(contractAddress, abi, provider);
};
