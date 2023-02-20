import { IContract } from '../types';
import {
  ErrorMessage,
  getRegistryRenewCostInETH,
  hashPhoneNumber,
  parseEther,
} from '../utils';
import { getRegistryCostInETH } from '../utils';

/**
 * @dev Interacts with the smart contract to get the record information of a given phone number
 * @param phoneNumber Phone number to resolve
 * @param contract Contract object
 * @returns The record object information
 */

const getRecordFunc = async (phoneNumber: string, contract: IContract) => {
  try {
    const hash = hashPhoneNumber(phoneNumber);
    const phoneRecord = await contract.getRecord(hash);
    return phoneRecord;
  } catch (error) {
    const message = await ErrorMessage(error);
    return message;
    return ErrorMessage(error);
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
const setPhoneRecordFunc = async (
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
 * @dev Interacts with the smart contract to renew a given phone record
 * @param phoneNumber Phone number of the record to renew
 * @param contract Contract object
 * @returns The transaction response
 */
const renewRecordFunc = async (phoneNumber: string, contract: IContract) => {
  try {
    const renewCost = await getRegistryRenewCostInETH(contract);
    const hash = hashPhoneNumber(phoneNumber);

    const txResponse = await contract.method.renew(hash, {
      value: parseEther(renewCost),
    });
    await txResponse.wait();

    return txResponse;
  } catch (error) {
    ErrorMessage(error);
  }
};

/**
 * @dev Interacts with the smart contract to claim an expired phone record
 * @param phoneNumber Phone number of the record to claim
 * @param signer Signer address
 * @param label Ceypro label
 * @param contract Contract object
 * @returns The transaction response
 */
const claimExpiredPhoneRecordFunc = async (
  phoneNumber: string,
  signer: string,
  label: string,
  contract: IContract
) => {
  try {
    const registryCost = await getRegistryCostInETH(contract);
    const hash = hashPhoneNumber(phoneNumber);

    const txResponse = await contract.method.claimExpiredPhoneRecord(
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
const isRecordVerifiedFunc = async (
  phoneNumber: string,
  contract: IContract
) => {
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
const recordExistsFunc = async (phoneNumber: string, contract: IContract) => {
  try {
    const hash = hashPhoneNumber(phoneNumber);

    const status = await contract.method.recordExists(hash);

    return status;
  } catch (error) {
    ErrorMessage(error);
  }
};

export {
  getRecordFunc,
  setPhoneRecordFunc,
  isRecordVerifiedFunc,
  recordExistsFunc,
  renewRecordFunc,
  claimExpiredPhoneRecordFunc,
};
