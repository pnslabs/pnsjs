import { IContract } from '../types';
import { ErrorMessage, hashPhoneNumber } from '../utils';

/**
 * @dev Interacts with the smart contract to resolve a given phone number
 * @param phoneNumber Phone number to resolve
 * @param contract Contract object
 * @returns An array of resolvers
 */

export default async function(phoneNumber: string, contract: IContract) {
  try {
    const hash = hashPhoneNumber(phoneNumber);
    const res = await contract.method.getResolver(hash);
    console.log(res, 'res');
    return res;
  } catch (error) {
    console.log(error, 'error');
    ErrorMessage('An error occurred while resolving the phone number.');
  }
}
