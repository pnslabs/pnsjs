import { ethers } from 'ethers';

export const hashPhoneNumber = (phoneNumber: string) => {
  return ethers.utils.keccak256(ethers.utils.toUtf8Bytes(phoneNumber));
};

export const ErrorMessage = (message?: string) => {
  return new Promise(resolve => {
    resolve(
      new Error(message || 'Something went wrong. Please try again later.')
    );
  });
};
