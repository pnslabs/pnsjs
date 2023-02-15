import { IContract } from '../types';
import { ErrorMessage, hashPhoneNumber } from '../utils';

/**
 * @dev Interacts with the smart contract to resolve a given phone number
 * @param phoneNumber Phone number to resolve
 * @param contract Contract object
 * @returns An array of resolvers
 */

const getResolverFunc = async (phoneNumber: string, contract: IContract) => {
  try {
    const hash = hashPhoneNumber(phoneNumber);
    const resolver = await contract.method.getResolver(hash);
    return resolver;
  } catch (error) {
    ErrorMessage(error);
  }
};

/**
 * @dev Interacts with the smart contract to add a new resolver to a given phone record
 * @param phoneNumber Phone number of the record
 * @param address Address of the new resolver
 * @param label Ceypro label
 * @param contract Contract object
 */

const linkPhoneToWalletFunc = async (
  phoneNumber: string,
  address: string,
  label: string,
  contract: IContract
) => {
  try {
    const hash = hashPhoneNumber(phoneNumber);
    const tx = await contract.method.linkPhoneToWallet(hash, address, label);
    tx.wait();

    return tx;
  } catch (error) {
    ErrorMessage(error);
  }
};

export { getResolverFunc, linkPhoneToWalletFunc };
