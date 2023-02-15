import { BigNumber, ethers } from 'ethers';

/**
 * @dev Fuction to hash a phone number
 * @param phoneNumber Phone number to hash
 * @returns The hashed phone number
 */
export const hashPhoneNumber = (phoneNumber: string) => {
  return ethers.utils.keccak256(ethers.utils.toUtf8Bytes(phoneNumber));
};

/**
 * @dev Fuction to set an error message
 * @param message Error object
 * @returns The error message
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ErrorMessage = (message?: any) => {
  const defaultMsg =
    message && typeof message === 'string'
      ? message
      : 'Something went wrong. Please try again later.';

  return new Promise((resolve) => {
    resolve(new Error(message?.errorArgs[0] || defaultMsg));
  });
};

/**
 * @dev An array of accepted networks for the PNS protocol
 * @returns The an array of accepted networks
 */
export const acceptedNetworks = [1, 5];

/**
 * @dev Parse ether to wei
 * @param amount Amount of ether to parse
 * @returns The amount in wei
 */
export const parseEther = (amount: BigNumber) => {
  return ethers.utils.parseEther(amount.toString());
};
