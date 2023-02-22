import { IContract } from '../types';
/**
 * @dev Interacts with the smart contract to get the record information of a given phone number
 * @param phoneNumber Phone number to resolve
 * @param contract Contract object
 * @returns The record object information
 */
declare const getRecordFunc: (phoneNumber: string, contract: IContract) => Promise<any>;
/**
 * @dev Interacts with the smart contract to create & set the record information of a given phone number
 * @param phoneNumber Phone number to resolve
 * @param signer Signer address
 * @param label Crypro label
 * @param contract Contract object
 * @returns The transaction response
 */
declare const setPhoneRecordFunc: (phoneNumber: string, signer: string, label: string, contract: IContract) => Promise<any>;
/**
 * @dev Interacts with the smart contract to renew a given phone record
 * @param phoneNumber Phone number of the record to renew
 * @param contract Contract object
 * @returns The transaction response
 */
declare const renewRecordFunc: (phoneNumber: string, contract: IContract) => Promise<any>;
/**
 * @dev Interacts with the smart contract to claim an expired phone record
 * @param phoneNumber Phone number of the record to claim
 * @param signer Signer address
 * @param label Ceypro label
 * @param contract Contract object
 * @returns The transaction response
 */
declare const claimExpiredPhoneRecordFunc: (phoneNumber: string, signer: string, label: string, contract: IContract) => Promise<any>;
/**
 * @dev Interacts with the smart contract to check the verification status of a given record
 * @param phoneNumber Phone number to check record verification status
 * @param contract Contract object
 * @returns A boolean value indicating the verification status of the record
 */
declare const isRecordVerifiedFunc: (phoneNumber: string, contract: IContract) => Promise<any>;
/**
 * @dev Interacts with the smart contract to check if a given record exists
 * @param phoneNumber Phone number to check record
 * @param contract Contract object
 * @returns A boolean value indicating whether the record exists or not
 */
declare const recordExistsFunc: (phoneNumber: string, contract: IContract) => Promise<any>;
export { getRecordFunc, setPhoneRecordFunc, isRecordVerifiedFunc, recordExistsFunc, renewRecordFunc, claimExpiredPhoneRecordFunc, };
