import { ethers } from 'ethers';
import { IContract } from '../types';
import { ErrorMessage, hashPhoneNumber } from '../utils';

/**
 * @dev Interacts with the guardian Backend to send OTP to phone number
 * @param phoneNumber Phone number to receive OTP
 * @param country An optional country code
 * @returns Result of the request
 */

const getOtpFunc = async (phoneNumber: string, country: string) => {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber,
        country,
      }),
    });
    return response.json();
  } catch (error) {
    ErrorMessage(error);
  }
};

/**
 * @dev Interacts with the smart contract to verify phone number
 * @param phoneNumber Phone number to verify
 * @param otp OTP to verify that user owns the phone number
 */

const verifyPhoneFunc = async (phoneNumber: string, otp: string) => {
  try {
    const hash = hashPhoneNumber(phoneNumber);
    const message = ethers.utils.solidityPack(
      ['bytes32', 'uint256'],
      [hash, otp]
    );
    const hashedMessage = ethers.utils.keccak256(message);
    // const signer = await ethers.provider.getSigner();
    // const signature = await signer!.signMessage(
    //   ethers.utils.arrayify(hashedMessage)
    // );

    // to revisit later
    const signature = '';

    const response = await fetch(`${process.env.SERVER_URL}/signature/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber,
        otp,
        signature,
        hashedMessage,
      }),
    });

    return response.json();
  } catch (error) {
    ErrorMessage(error);
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

    const record = await contract.method.getVerificationRecord(hash);

    return record;
  } catch (error) {
    ErrorMessage(error);
  }
};

export { getOtpFunc, verifyPhoneFunc, getVerificationRecordFunc };
