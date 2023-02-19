import { ethers } from 'ethers';
import { IContract, ISigner } from '../types';
import { ErrorMessage, hashPhoneNumber } from '../utils';
import axios from 'axios';

/**
 * @dev Interacts with the guardian Backend to send OTP to phone number
 * @param phoneNumber Phone number to receive OTP
 * @param country An optional country code
 * @returns Result of the request
 */

const getOtpFunc = async (phoneNumber: string, country: string) => {
  try {
    const response = await axios.post(`${process.env.SERVER_URL}/otp`, {
      phoneNumber,
      country,
    });
    return response;
  } catch (error) {
    return ErrorMessage(error);
  }
};

/**
 * @dev Interacts with the smart contract to verify phone number
 * @param phoneNumber Phone number to verify
 * @param otp OTP to verify that user owns the phone number
 */

const verifyPhoneFunc = async (
  phoneNumber: string,
  otp: string,
  signer: ISigner
) => {
  try {
    const hash = hashPhoneNumber(phoneNumber);
    const message = ethers.utils.solidityPack(
      ['bytes32', 'uint256'],
      [hash, otp]
    );
    const hashedMessage = ethers.utils.keccak256(message);
    const signature = await signer.signMessage(
      ethers.utils.arrayify(hashedMessage)
    );

    const response = await axios.post(
      `${process.env.SERVER_URL}/signature/verify`,
      {
        phoneNumber,
        otp,
        signature,
        hashedMessage,
      }
    );

    return response;
  } catch (error) {
    return ErrorMessage(error);
  }
};

/**
 * @dev Interacts with the smart contract to get the verification record of a given phone number
 * @param phoneNumber Phone number to check record verification record
 * @param contract Contract object
 * @returns An object containing the verification record
 */
const getVerificationRecordFunc = async (
  phoneNumber: string,
  contract: IContract
) => {
  try {
    const hash = hashPhoneNumber(phoneNumber);

    const record = await contract.getVerificationRecord(hash);

    return record;
  } catch (error) {
    ErrorMessage(error);
  }
};

export { getOtpFunc, verifyPhoneFunc, getVerificationRecordFunc };
