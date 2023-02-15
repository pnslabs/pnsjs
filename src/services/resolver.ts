import { IContract } from '../types';
import { ErrorMessage, hashPhoneNumber } from '../utils';

/**
 * @dev Interacts with the smart contract to resolve a given phone number
 * @param phoneNumber Phone number to resolve
 * @param contract Contract object
 * @returns An array of resolvers
 */

const getResolver = async (phoneNumber: string, contract: IContract) => {
  try {
    const hash = hashPhoneNumber(phoneNumber);
    const res = await contract.method.getResolver(hash);
    return res;
  } catch (error) {
    ErrorMessage(error);
  }
};

export default { getResolver };
