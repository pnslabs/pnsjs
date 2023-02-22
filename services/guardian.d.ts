import { IContract, ISigner } from '../types';
/**
 * @dev Interacts with the guardian Backend to send OTP to phone number
 * @param phoneNumber Phone number to receive OTP
 * @param country An optional country code
 * @returns Result of the request
 */
declare const getOtpFunc: (phoneNumber: string, country: string) => Promise<import("axios").AxiosResponse<any, any> | Error>;
/**
 * @dev Interacts with the smart contract to verify phone number
 * @param phoneNumber Phone number to verify
 * @param otp OTP to verify that user owns the phone number
 */
declare const verifyPhoneFunc: (phoneNumber: string, otp: string, signer: ISigner) => Promise<import("axios").AxiosResponse<any, any> | Error>;
/**
 * @dev Interacts with the smart contract to get the verification record of a given phone number
 * @param phoneNumber Phone number to check record verification record
 * @param contract Contract object
 * @returns An object containing the verification record
 */
declare const getVerificationRecordFunc: (phoneNumber: string, contract: IContract) => Promise<any>;
export { getOtpFunc, verifyPhoneFunc, getVerificationRecordFunc };
