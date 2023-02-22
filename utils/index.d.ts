import { BigNumber } from 'ethers';
import { IContract } from '../types';
/**
 * @dev Interacts with the smart contract to get the current registry cost in USD
 * @param contract Contract object
 * @returns The registry cost in USD
 */
declare const getRegistryCostInUSD: (contract: IContract) => Promise<any>;
/**
 * @dev Interacts with the smart contract to get the current registry cost in ETH
 * @param contract Contract object
 * @returns The registry cost in ETH
 */
declare const getRegistryCostInETH: (contract: IContract) => Promise<any>;
/**
 * @dev Interacts with the smart contract to get the current registry renew cost in USD
 * @param contract Contract object
 * @returns The registry renew cost in USD
 */
declare const getRegistryRenewCostInUSD: (contract: IContract) => Promise<any>;
/**
 * @dev Interacts with the smart contract to get the current registry renew cost in ETH
 * @param contract Contract object
 * @returns The registry renew cost in ETH
 */
declare const getRegistryRenewCostInETH: (contract: IContract) => Promise<any>;
/**
 * @dev Fuction to hash a phone number
 * @param phoneNumber Phone number to hash
 * @returns The hashed phone number
 */
declare const hashPhoneNumber: (phoneNumber: string) => string;
/**
 * @dev Fuction to set an error message
 * @param message Error object
 * @returns The error message
 */
declare const ErrorMessage: (message?: any) => Error;
/**
 * @dev An array of accepted networks for the PNS protocol
 * @returns The an array of accepted networks
 */
declare const acceptedNetworks: number[];
/**
 * @dev Parse ether to wei
 * @param amount Amount of ether to parse
 * @returns The amount in ether
 */
declare const ethToWei: (amount: BigNumber | number) => BigNumber;
/**
 * @dev Parse wei to ether
 * @param amount Amount of wei to parse
 * @returns The amount in wei
 */
declare const weiToEth: (amount: BigNumber) => string;
export { ErrorMessage, hashPhoneNumber, ethToWei, weiToEth, acceptedNetworks, getRegistryCostInETH, getRegistryCostInUSD, getRegistryRenewCostInETH, getRegistryRenewCostInUSD, };
