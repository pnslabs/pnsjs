import { IContract } from '../types';
/**
 * @dev Interacts with the smart contract to resolve a given phone number
 * @param phoneNumber Phone number to resolve
 * @param contract Contract object
 * @returns An array of resolvers
 */
declare const getResolverFunc: (phoneNumber: string, contract: IContract) => Promise<any>;
/**
 * @dev Interacts with the smart contract to add a new resolver to a given phone record
 * @param phoneNumber Phone number of the record
 * @param address Address of the new resolver
 * @param label Ceypro label
 * @param contract Contract object
 */
declare const linkPhoneToWalletFunc: (phoneNumber: string, address: string, label: string, contract: IContract) => Promise<any>;
export { getResolverFunc, linkPhoneToWalletFunc };
