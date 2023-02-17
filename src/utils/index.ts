import { BigNumber, ethers } from 'ethers';
import { IContract } from '../types';

/**
 * @dev Interacts with the smart contract to get the current registry cost in USD
 * @param contract Contract object
 * @returns The registry cost in USD
 */
const getRegistryCostInUSD = async (contract: IContract) => {
  try {
    const registryCost = await contract.method.registryCostInUSD();
    return registryCost;
  } catch (error) {
    ErrorMessage(error);
  }
};

/**
 * @dev Interacts with the smart contract to get the current registry cost in ETH
 * @param contract Contract object
 * @returns The registry cost in ETH
 */
const getRegistryCostInETH = async (contract: IContract) => {
  try {
    const registryCostInUsd = await getRegistryCostInUSD(contract);
    const registryCostInEth = await contract.method.convertUSDToETH(
      registryCostInUsd.toString()
    );
    return registryCostInEth;
  } catch (error) {
    ErrorMessage(error);
  }
};

/**
 * @dev Interacts with the smart contract to get the current registry renew cost in USD
 * @param contract Contract object
 * @returns The registry renew cost in USD
 */
const getRegistryRenewCostInUSD = async (contract: IContract) => {
  try {
    const registryRenewCost = await contract.method.registryRenewCostInUSD();
    return registryRenewCost;
  } catch (error) {
    ErrorMessage(error);
  }
};

/**
 * @dev Interacts with the smart contract to get the current registry renew cost in ETH
 * @param contract Contract object
 * @returns The registry renew cost in ETH
 */
const getRegistryRenewCostInETH = async (contract: IContract) => {
  try {
    const registryRenewCostInUsd = await getRegistryRenewCostInUSD(contract);
    const registryRenewCostInEth = await contract.method.convertUSDToETH(
      registryRenewCostInUsd.toString()
    );
    return registryRenewCostInEth;
  } catch (error) {
    ErrorMessage(error);
  }
};

/**
 * @dev Fuction to hash a phone number
 * @param phoneNumber Phone number to hash
 * @returns The hashed phone number
 */
const hashPhoneNumber = (phoneNumber: string) => {
  return ethers.utils.keccak256(ethers.utils.toUtf8Bytes(phoneNumber));
};

/**
 * @dev Fuction to set an error message
 * @param message Error object
 * @returns The error message
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ErrorMessage = (message?: any) => {
  const defaultMsg =
    message && typeof message === 'string'
      ? message
      : 'Something went wrong. Please try again later.';

  const systemMessage = message?.errorArgs && message?.errorArgs[0];

  return new Error(systemMessage || defaultMsg);
};

/**
 * @dev An array of accepted networks for the PNS protocol
 * @returns The an array of accepted networks
 */
const acceptedNetworks = [1, 5, 1337, 97];

/**
 * @dev Parse ether to wei
 * @param amount Amount of ether to parse
 * @returns The amount in wei
 */
const parseEther = (amount: BigNumber) => {
  return ethers.utils.parseEther(amount.toString());
};

export {
  ErrorMessage,
  hashPhoneNumber,
  parseEther,
  acceptedNetworks,
  getRegistryCostInETH,
  getRegistryCostInUSD,
  getRegistryRenewCostInETH,
  getRegistryRenewCostInUSD,
};
