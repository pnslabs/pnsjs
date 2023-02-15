import { IContract } from '../types';
import { ErrorMessage, hashPhoneNumber, parseEther } from '../utils';
import { getRegistryCostInETH } from './libs';

/**
 * @dev Interacts with the smart contract to get the record information of a given phone number
 * @param phoneNumber Phone number to resolve
 * @param contract Contract object
 * @returns The record object information
 */

const getRecord = async (phoneNumber: string, contract: IContract) => {
  try {
    const hash = hashPhoneNumber(phoneNumber);
    const phoneRecord = await contract.method.getRecord(hash);
    return phoneRecord;
  } catch (error) {
    ErrorMessage(error);
  }
};

/**
 * @dev Interacts with the smart contract to create & set the record information of a given phone number
 * @param phoneNumber Phone number to resolve
 * @param signer Signer address
 * @param label Ceypro label
 * @param contract Contract object
 * @returns The transaction response
 */
const setPhoneRecord = async (
  phoneNumber: string,
  signer: string,
  label: string,
  contract: IContract
) => {
  try {
    const registryCost = await getRegistryCostInETH(contract);
    const hash = hashPhoneNumber(phoneNumber);

    const txResponse = await contract.method.setPhoneRecord(
      hash,
      signer,
      label,
      {
        value: parseEther(registryCost),
      }
    );
    await txResponse.wait();

    return txResponse;
  } catch (error) {
    ErrorMessage(error);
  }
};

/**
 * @dev Interacts with the smart contract to check the verification status of a given record
 * @param phoneNumber Phone number to check record verification status
 * @param contract Contract object
 * @returns A boolean value indicating the verification status of the record
 */
const isRecordVerified = async (phoneNumber: string, contract: IContract) => {
  try {
    const hash = hashPhoneNumber(phoneNumber);

    const status = await contract.method.isRecordVerified(hash);

    return status;
  } catch (error) {
    ErrorMessage(error);
  }
};

/**
 * @dev Interacts with the smart contract to check if a given record exists
 * @param phoneNumber Phone number to check record
 * @param contract Contract object
 * @returns A boolean value indicating whether the record exists or not
 */
const recordExists = async (phoneNumber: string, contract: IContract) => {
  try {
    const hash = hashPhoneNumber(phoneNumber);

    const status = await contract.method.recordExists(hash);

    return status;
  } catch (error) {
    ErrorMessage(error);
  }
};

export { getRecord, setPhoneRecord, isRecordVerified, recordExists };
